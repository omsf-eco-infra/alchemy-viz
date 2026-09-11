/**
 * `<gufe-small-molecule>` - one ligand, drawn one way at a time.
 *
 * RDKit draws the 2D depiction and 3Dmol the 3D conformer; both are loaded
 * lazily, so a page with no small molecule on it never pays for RDKit's wasm.
 *
 * One picture at a time rather than two side by side. A split pane gave each
 * half of the width to a drawing that wanted all of it, and neither half was
 * ever the one being looked at. The switcher is therefore what the mapping view
 * has - a mode per way of looking, over the picture rather than beside it, with
 * the molecule's name overlaid in the corner in place of a header strip:
 *
 *   2D                     the depiction
 *   Stick, Ball+Stick,     the conformer, in that style
 *   Sphere
 *   Info                   name, SMILES, charge and the counts
 *
 * Spin sits with them because it is a control of the 3D picture rather than a
 * fourth way to look at the molecule; it is dead outside those three modes and
 * says so by being disabled.
 *
 * The panes are all built and all laid out, and the ones not in force are only
 * made invisible. 3Dmol sizes its canvas from the element it renders into, so a
 * viewer built inside a `display:none` pane would be built at nothing and stay
 * there; this way the conformer is ready whichever mode the view opens on.
 */

import { el, NO_VALUE, errText } from "../shared/dom.js";
import { switcher, toggleButton } from "../shared/controls.js";
import { centredMessage, nameWanted, viewerHost } from "../shared/panels.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { choice, flag } from "../shared/settings.js";
import { load3Dmol, loadRDKit, ThreeDmol, type ThreeDmolViewer } from "../shared/engines.js";
import { viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
import { rememberLigandPose, restoreLigandPose } from "../shared/ligand-camera.js";
import { DEPICT_STYLE } from "../shared/depict-style.js";
import { depictSVG, ensureSDFTerminator, parseCounts, placeDepiction } from "../shared/sdf.js";
import { depictGround, depictThemeOptions } from "../shared/depict-theme.js";
import { FONT, OVERLAY_CONTROLS, PANE_LABEL_OVERLAY, SPACE, SURFACE } from "../shared/style.js";
import { T } from "../shared/theme.js";
import type { SmallMoleculeComponentViz } from "../schema/types.js";

const MODES = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" },
] as const;

type Mode = (typeof MODES)[number]["id"];

/** The three modes that are the conformer, and what each asks 3Dmol for. */
const SMALL_MOL_SPECS: Record<string, object> = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1.0, colorscheme: "Jmol" } },
};

const is3D = (mode: Mode): boolean => mode in SMALL_MOL_SPECS;

const DEPICT_SIZE = 400;

/** A pane of the stage: the whole of it, and invisible until it is the one in force. */
const PANE = "position:absolute;inset:0;min-width:0;min-height:0;";

export class GufeSmallMolecule extends GufeElement<SmallMoleculeComponentViz> {
  protected override placeholder(): string {
    return "Waiting for a SmallMoleculeComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: SmallMoleculeComponentViz): ViewHandle {
    const sdf = payload.sdf;
    const name = payload.name ?? "";
    const smiles = payload.smiles;
    const charge = payload.total_charge;

    const stage = el("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    host.appendChild(stage);

    // --- the panes ---

    const depictBox = el(
      "div",
      `${PANE}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;` +
        `background:${depictGround()};`,
    );
    stage.appendChild(depictBox);

    const host3D = viewerHost();
    host3D.wrap.style.cssText = PANE;
    stage.appendChild(host3D.wrap);

    const infoPane = el(
      "div",
      `${PANE}overflow:auto;padding:16px 20px;background:${T.panelBg};color:${T.textPrimary};` +
        `font-size:${FONT.body};`,
    );
    stage.appendChild(infoPane);

    const counts = sdf ? parseCounts(sdf) : null;
    const facts: [string, string, boolean][] = [
      ["Name", name || NO_VALUE, false],
      ["SMILES", smiles || NO_VALUE, true],
      ["Charge", charge == null ? NO_VALUE : String(charge), false],
      ["Atoms", counts ? String(counts.atoms) : NO_VALUE, false],
      ["Bonds", counts ? String(counts.bonds) : NO_VALUE, false],
    ];
    const table = el("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${SPACE.xl} 20px;align-items:baseline;`);
    infoPane.appendChild(table);
    for (const [label, value, mono] of facts) {
      table.appendChild(
        el(
          "div",
          `font-size:${FONT.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;` +
            `color:${T.textMuted2};`,
          label,
        ),
      );
      const cell = el(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${T.textPrimary}` +
          (mono ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${FONT.small};` : ""),
        value,
      );
      cell.title = value;
      table.appendChild(cell);
    }

    // The molecule's name, over the picture rather than in a strip above it: a
    // bar spent a row of height on one short line, and which mode is in force is
    // already said by the switcher below. Hidden behind Info, which names the
    // molecule in its own first row, and left off entirely where something above
    // has already named it - see `HIDE_NAME_ATTRIBUTE`.
    const named = nameWanted(host);
    const paneLabel = el("div", PANE_LABEL_OVERLAY, name || "Unnamed molecule");
    if (named) stage.appendChild(paneLabel);

    // --- the switcher ---

    const modeSetting = choice<Mode>(
      "small-molecule.mode",
      "2d",
      MODES.map((m) => m.id),
    );
    const spinSetting = flag("small-molecule.spin", false);
    let mode: Mode = modeSetting.get();
    let spinning = spinSetting.get();
    let viewer: ThreeDmolViewer | null = null;
    let interaction: (BoundedZoom & Interaction) | null = null;

    /** Spin only what is being looked at: a hidden canvas turning is a frame a second wasted. */
    const applySpin = () => {
      try {
        viewer?.spin(spinning && is3D(mode) ? "y" : false);
      } catch {
        /* 3Dmol v1 quirk */
      }
    };

    const show = (next: Mode): void => {
      mode = next;
      depictBox.style.visibility = mode === "2d" ? "visible" : "hidden";
      host3D.wrap.style.visibility = is3D(mode) ? "visible" : "hidden";
      infoPane.style.visibility = mode === "info" ? "visible" : "hidden";
      paneLabel.style.display = mode === "info" || !named ? "none" : "block";
      spinBtn.disabled = !is3D(mode);
      spinBtn.style.opacity = is3D(mode) ? "1" : "0.5";
      if (is3D(mode) && viewer) {
        viewer.setStyle({}, SMALL_MOL_SPECS[mode]);
        // The pane was laid out all along, but the window may have changed size
        // behind it.
        viewer.resize();
        viewer.render();
      }
      applySpin();
    };

    // The bar floats over the picture, so nothing in the layout stops it running
    // off a narrow pane: below the width its buttons need, the modes become a
    // dropdown instead. See `switcher`.
    const controls = el("div", OVERLAY_CONTROLS);
    const spinBtn = toggleButton(
      "Spin",
      spinning,
      (on) => {
        spinning = on;
        applySpin();
      },
      { title: "Toggle continuous rotation", remember: spinSetting },
    );
    /**
     * Spin rides between the styles it turns and Info, which is where the reader
     * asked for it, and the group tracks its own buttons so a guest among them
     * is harmless. Collapsed there is no row to ride in, so it stands beside the
     * dropdown: it is a control of the picture rather than a way of looking at
     * the molecule, and it belongs on the bar in either form.
     */
    const placeSpin = (compact: boolean): void => {
      if (compact) controls.insertBefore(spinBtn, controls.firstChild);
      else modes.buttons.insertBefore(spinBtn, modes.buttons.lastElementChild);
    };
    const modes = switcher(MODES, mode, (id) => show(id as Mode), {
      remember: modeSetting,
      onLayout: placeSpin,
      fit: { pane: stage, bar: controls },
    });
    controls.appendChild(modes);
    placeSpin(false);
    stage.appendChild(controls);

    show(mode);

    // A schema-valid payload can still carry an empty or unusable SDF; that is a
    // render-degraded state, not an error. Info still has everything it had.
    if (!sdf || !sdf.trim()) {
      depictBox.appendChild(centredMessage("No molecule provided"));
      host3D.container.appendChild(centredMessage("No molecule provided"));
      return { cleanup: () => modes.cleanup() };
    }

    // --- 2D ---
    depictBox.appendChild(centredMessage("Loading 2D depiction..."));
    loadRDKit()
      .then((RDKit) => {
        // `cpk`: a single molecule is drawn in RDKit's element colours. `mono` is
        // gufe's mapping palette and belongs to the mapping view, not here.
        const options = depictThemeOptions("cpk");
        const svg = depictSVG(RDKit, sdf, DEPICT_SIZE, DEPICT_STYLE.layout, undefined, options);
        if (svg) {
          placeDepiction(depictBox, svg, DEPICT_SIZE);
        } else {
          depictBox.replaceChildren(centredMessage("Failed to parse molecule", true));
        }
      })
      .catch((err: unknown) => {
        depictBox.replaceChildren(centredMessage(`RDKit failed to load: ${errText(err)}`, true));
      });

    // --- 3D ---
    host3D.container.appendChild(centredMessage("Loading 3D viewer..."));
    load3Dmol()
      .then(() => {
        host3D.container.replaceChildren();
        viewer = ThreeDmol!.createViewer(host3D.container, { backgroundColor: SURFACE.viewer });
        viewer.addModel(ensureSDFTerminator(sdf), "sdf");
        viewer.setStyle({}, SMALL_MOL_SPECS[is3D(mode) ? mode : "stick"]);
        viewer.zoomTo();
        viewer.render();
        // After zoomTo, so the bound is measured from the opening framing.
        interaction = viewerInteraction(host3D.container, viewer);
        // ... and after that, so the pose is applied through the same bounds a
        // wheel goes through. Clicking along a network is a different ligand
        // every time, and this is what makes the run of them comparable: the
        // molecule is framed fresh and then turned to where the reader had the
        // last one.
        restoreLigandPose(viewer, interaction);
        applySpin();
      })
      .catch((e: unknown) => {
        host3D.container.replaceChildren(centredMessage(`3D render failed: ${errText(e)}`, true));
      });

    return {
      onResize() {
        if (viewer) {
          viewer.resize();
          viewer.render();
        }
      },
      cleanup() {
        modes.cleanup();
        // Before anything is torn down: a cleared viewer has no camera to read.
        rememberLigandPose(viewer, interaction);
        interaction?.cleanup();
        interaction = null;
        if (!viewer) return;
        try {
          viewer.spin(false);
        } catch {
          /* 3Dmol v1 quirk */
        }
        try {
          viewer.clear();
        } catch {
          /* already gone */
        }
        viewer = null;
      },
    };
  }
}

defineElement("gufe-small-molecule", GufeSmallMolecule);
