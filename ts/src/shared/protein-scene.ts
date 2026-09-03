/**
 * The chrome a PDB scene is drawn in, and the life of the viewer inside it.
 *
 * Two views draw a structure in 3D. `<gufe-protein>` draws one component and
 * `<gufe-complex>` draws a ligand in the site of one, and beyond what goes into
 * the scene and where the camera is pointed they are the same view: the same
 * representations, the same colour schemes, the same water and hetero toggles,
 * reading and writing the same stored settings, over the same statistics line.
 *
 * They used to say all of that twice, once per file, and the copies drifted -
 * one grew a collapsible menu and the other kept a toolbar, so the two panes of
 * one chemical system looked like two different programs. Anything a reader
 * touches now lives here, once; what differs between the two views is the
 * models they load and how they frame them, and that is all they are left to
 * say for themselves.
 */

import {
  buttonGroup,
  chromeMenu,
  dropdown,
  el,
  MENU_OPEN_SUFFIX,
  nameWanted,
  toggleButton,
  viewerHost,
  type ChromeMenu,
} from "./dom.js";
import type { ViewHandle } from "./element.js";
import { choice, flag, type Setting } from "./settings.js";
import type { ThreeDmolViewer } from "./engines.js";
import { resetControl, type BoundedZoom, type Interaction } from "./interact.js";
import type { ProteinColorScheme, ProteinOptions, ProteinRepresentation, StatusFn } from "./pdb.js";
import {
  FONT,
  MENU_PANEL,
  PANE_CHIP,
  PANE_CHROME_CLEARANCE,
  PANE_CHROME_OVERLAY,
  PANE_STATS_OVERLAY,
  WEIGHT,
} from "./style.js";
import { T } from "./theme.js";

/** The representations both views offer, in the order both offer them. */
export const PROTEIN_REPS = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
] as const;

/** Likewise the colourings. `proteinColorArgs` is what turns one into 3Dmol. */
export const PROTEIN_COLOR_SCHEMES = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" },
] as const;

/** One labelled block of the menu: a caption over what it controls. */
export interface MenuSection {
  label: string;
  controls: HTMLElement[];
}

export interface ProteinSceneSpec {
  /** The element being rendered, which is what `nameWanted` is asked about. */
  element: Element;
  /** Where the header, the menu and the viewer go. */
  host: HTMLDivElement;
  /** The name over the view, drawn only where the view is not inside one. */
  title: string;
  /** What the payload is called when it has no name of its own. */
  fallbackTitle: string;
  /**
   * Whether waters start shown.
   *
   * The one control whose default is a property of the payload rather than of
   * the reader: a solvated system is defined by what surrounds the protein, a
   * bare one would be buried in crystallographic waters, and in a complex they
   * sit between the eye and the site. A stored choice still wins over all three.
   */
  waters: boolean;
  /** The hetero toggle's tooltip, which the two views word differently. */
  heteroTitle: string;
  /** Accessible name for the menu button. */
  menuLabel: string;
  /** Restyle the scene: the models each view holds are its own business. */
  restyle(): void;
  /**
   * Extra controls in the camera section, before the reset.
   *
   * Built with the rest of the menu, on its first open, so anything they close
   * over has to exist before the scene is created.
   */
  camera?(): HTMLElement[];
  /**
   * What the reset button does. The default puts the camera back where the
   * bounded zoom was measured from, which is what a view with one framing
   * wants; a view with several reapplies the one in force instead.
   */
  reset?(): void;
}

export interface ProteinScene {
  /** What the controls write to and what a view's own restyling reads. */
  opts: ProteinOptions;
  /** The viewer's element and the wrapper the status overlay floats in. */
  pane: { wrap: HTMLDivElement; container: HTMLDivElement };
  /** The menu, for a view that needs to ask whether it is open. */
  menu: ChromeMenu;
  showStatus: StatusFn;
  /** The line at the right of the header. Each view words its own. */
  setStats(text: string): void;
  viewer(): ThreeDmolViewer | null;
  /** Hand the viewer over once it is built; the scene resizes and clears it. */
  setViewer(viewer: ThreeDmolViewer | null): void;
  interaction(): (BoundedZoom & Interaction) | null;
  /** Likewise the wheel guard, which a reframing view replaces as it goes. */
  setInteraction(interaction: (BoundedZoom & Interaction) | null): void;
  /** The resize and teardown contract, ready to return from `renderView`. */
  handle: ViewHandle;
}

/** Build the header, the controls menu, the viewer pane and their lifecycle. */
export function proteinScene(spec: ProteinSceneSpec): ProteinScene {
  // Every control here is a preference about how to look at a structure, so all
  // of them survive a reload - and they are the same keys in both views on
  // purpose. "I read proteins as ribbons coloured by chain" is a fact about the
  // reader, not about which pane they are looking at, and two keys for it would
  // mean setting it twice.
  const repSetting = choice(
    "protein.representation",
    "cartoon",
    PROTEIN_REPS.map((r) => r.id),
  );
  const colorSetting = choice(
    "protein.color",
    "chain",
    PROTEIN_COLOR_SCHEMES.map((c) => c.id),
  );
  const watersSetting = flag("protein.waters", spec.waters);
  const heteroSetting = flag("protein.hetero", true);
  const spinSetting = flag("protein.spin", false);

  const opts: ProteinOptions = {
    rep: repSetting.get() as ProteinRepresentation,
    color: colorSetting.get() as ProteinColorScheme,
    waters: watersSetting.get(),
    hetero: heteroSetting.get(),
    spin: spinSetting.get(),
  };

  let viewer: ThreeDmolViewer | null = null;
  let interaction: (BoundedZoom & Interaction) | null = null;

  // The menu column and the viewer share this row, so opening the menu takes
  // width from the picture rather than covering it: the point of a control is
  // to be used against what it changes, and a panel floating over the site is
  // in front of the thing the reader is looking at. `relative`, because the
  // chrome floats over the whole row rather than over either half of it.
  const split = el("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  spec.host.appendChild(split);

  // The button, and beside it the name of what is drawn. Fixed to the row's own
  // top left rather than to the viewer's, so opening the menu does not move the
  // control that opened it.
  const chrome = el("div", PANE_CHROME_OVERLAY);
  split.appendChild(chrome);

  const statsEl = el("div", PANE_STATS_OVERLAY);
  split.appendChild(statsEl);

  const section = ({ label, controls }: MenuSection): HTMLDivElement => {
    const block = el("div", "display:flex;flex-direction:column;gap:6px;min-width:0;");
    block.appendChild(
      el(
        "span",
        `font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;text-transform:uppercase;` +
        `color:${T.textMuted};`,
        label,
      ),
    );
    for (const control of controls) block.appendChild(control);
    return block;
  };

  const buildControls = (): HTMLDivElement => {
    // `height:100%` rather than the `flex:1` in `MENU_PANEL`: the wrapper this
    // goes into is a flex item of the row, so it is the height of the viewer
    // beside it, but it is a plain block - `chromeMenu` clears its display
    // property to show it - so a flex growth factor in here has nothing to grow
    // against. This is what carries the panel's background and its rule down
    // the view, and what makes the controls scroll rather than run off the
    // bottom of a short one.
    //
    // The extra top padding is for the floating chrome: the button stays where
    // it was when the panel opened under it, so the panel's first section has
    // to start below it rather than behind it.
    const panel = el("div", `${MENU_PANEL}height:100%;padding-top:${PANE_CHROME_CLEARANCE};`);

    const reps = buttonGroup(
      PROTEIN_REPS,
      opts.rep,
      (id) => {
        opts.rep = id as ProteinRepresentation;
        spec.restyle();
      },
      repSetting,
    );
    // Four buttons do not fit across a menu column at its floor width, and a
    // row that overflows puts Sphere off the edge of the panel.
    reps.style.cssText += "flex-wrap:wrap;";
    panel.appendChild(section({ label: "Style", controls: [reps] }));

    const colors = dropdown(
      PROTEIN_COLOR_SCHEMES,
      opts.color,
      (id) => {
        opts.color = id as ProteinColorScheme;
        spec.restyle();
      },
      colorSetting,
    );
    colors.style.cssText += "width:100%;box-sizing:border-box;";
    panel.appendChild(section({ label: "Color", controls: [colors] }));

    const toggles = el("div", "display:flex;flex-wrap:wrap;gap:4px;");
    const toggleSpecs: [keyof ProteinOptions, string, string, Setting<boolean>, () => void][] = [
      ["waters", "Waters", "Show water molecules", watersSetting, () => spec.restyle()],
      ["hetero", "Hetero", spec.heteroTitle, heteroSetting, () => spec.restyle()],
      ["spin", "Spin", "Rotate the view continuously", spinSetting, () => viewer?.spin(opts.spin ? "y" : false)],
    ];
    for (const [key, label, title, remember, onChange] of toggleSpecs) {
      toggles.appendChild(
        toggleButton(
          label,
          opts[key] as boolean,
          (on) => {
            (opts[key] as boolean) = on;
            onChange();
          },
          { title, remember },
        ),
      );
    }
    panel.appendChild(section({ label: "Show", controls: [toggles] }));

    const reset = resetControl(() => (spec.reset ? spec.reset() : interaction?.reset()));
    reset.style.cssText += "width:100%;box-sizing:border-box;";
    panel.appendChild(section({ label: "Camera", controls: [...(spec.camera?.() ?? []), reset] }));

    return panel;
  };

  const menu = chromeMenu(chrome, buildControls, {
    label: spec.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: flag(`protein${MENU_OPEN_SUFFIX}`, false),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      viewer?.resize();
      viewer?.render();
    },
  });
  // After the button, so the name reads as a caption to it rather than the
  // other way about, and only where this view is not already named by whatever
  // mounted it.
  const title = nameWanted(spec.element) ? spec.title || spec.fallbackTitle : "";
  if (title) {
    chrome.appendChild(
      el("div", `${PANE_CHIP}pointer-events:none;font-size:${FONT.heading};font-weight:${WEIGHT.bold};`, title),
    );
  }

  split.appendChild(menu.panel);

  const pane = viewerHost();
  split.appendChild(pane.wrap);

  const statusEl = el(
    "div",
    "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;" +
      `font-size:${FONT.body};z-index:20;display:none;pointer-events:none;`,
  );
  pane.wrap.appendChild(statusEl);

  const showStatus: StatusFn = (msg, kind) => {
    if (msg == null) {
      statusEl.style.display = "none";
      return;
    }
    statusEl.textContent = msg;
    statusEl.style.display = "block";
    const isError = kind === "error";
    statusEl.style.background = isError ? T.warnBg : T.toolbarBg;
    statusEl.style.color = isError ? T.warnFg : T.textMuted;
    statusEl.style.border = `1px solid ${isError ? T.warnBorder : T.toolbarBorder}`;
  };

  return {
    opts,
    pane,
    menu,
    showStatus,
    setStats: (text) => {
      statsEl.textContent = text;
    },
    viewer: () => viewer,
    setViewer: (next) => {
      viewer = next;
    },
    interaction: () => interaction,
    setInteraction: (next) => {
      interaction = next;
    },
    handle: {
      onResize() {
        if (!viewer) return;
        viewer.resize();
        viewer.render();
      },
      cleanup() {
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
    },
  };
}
