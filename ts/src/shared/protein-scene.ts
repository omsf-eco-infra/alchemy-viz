/**
 * The chrome a PDB scene is drawn in, and the life of the viewer inside it.
 *
 * Two views draw a structure in 3D. `<gufe-protein>` draws one component and
 * `<gufe-complex>` draws a ligand in the site of one, and beyond what goes into
 * the scene and where the camera is pointed they are the same view: the same
 * representations, the same colour schemes, the same water and hetero toggles,
 * reading and writing the same stored settings, over the same statistics line.
 *
 * Anything a reader touches lives here, once. Said twice the two drift - one
 * grows a collapsible menu while the other keeps a toolbar - and then the two
 * panes of one chemical system look like two different programs. What differs
 * between the views is the models they load and how they frame them, and that is
 * all they are left to say for themselves.
 */

import { el, onNarrow } from "./dom.js";
import { buttonGroup, dropdown, toggleButton } from "./controls.js";
import { nameWanted, viewerHost } from "./panels.js";
import { chromeMenu, type ChromeMenu, MENU_OPEN_SUFFIX, orientMenuPanel } from "./chrome.js";
import { framejsMenuItem } from "./framejs.js";
import type { ViewHandle } from "./element.js";
import { choice, flag, type Setting } from "./settings.js";
import { releaseViewer, type ThreeDmolViewer } from "./engines.js";
import { resetControl, type BoundedZoom, type Interaction } from "./interact.js";
import type { ProteinColorScheme, ProteinOptions, ProteinRepresentation, StatusFn } from "./pdb.js";
import {
  FONT,
  MENU_PANEL,
  PANE_CHIP,
  PANE_CHROME_CLEARANCE,
  PANE_CHROME_OVERLAY,
  WEIGHT,
} from "./style.js";
import { V } from "./theme.js";

/** The representations both views offer, in the order both offer them. */
const PROTEIN_REPS = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
] as const;

/** Likewise the colourings. `proteinColorArgs` is what turns one into 3Dmol. */
const PROTEIN_COLOR_SCHEMES = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" },
] as const;

/**
 * Where each structure was last being looked at, for the length of a sitting.
 *
 * Someone reading a campaign clicks along its legs, and every leg is the same
 * protein with a different ligand in it. Framing each one from scratch means
 * finding the site again on every click, so the camera is kept per structure -
 * keyed by the PDB's gufe key, which is what makes "the same protein" a fact
 * rather than a guess - and the next scene drawing that structure opens where
 * the last one was left. A different protein is framed fresh.
 *
 * Deliberately not in `settings.ts`: this is where a reader has got to rather
 * than a preference about how they read, and it lasts the page rather than the
 * installation. A camera restored from last week would open a structure at an
 * angle nobody remembers choosing, with nothing on screen to say why. `Reset`
 * is still the way back to the view the scene would have opened on.
 */
const cameras = new Map<string, number[]>();

/** Forget every stored camera. For tests, which must not bleed into each other. */
export function forgetCameras(): void {
  cameras.clear();
}

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
  /**
   * What the camera is remembered under, or null to always frame fresh.
   *
   * The gufe key of the structure being drawn - not of the payload, which for a
   * complex is a different chemical system on every leg of a campaign while the
   * protein in it is one object drawn over and over.
   */
  cameraKey?: string | null;
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
  /**
   * What is in the scene, one phrase per fact. Each view words its own.
   *
   * It goes in the controls panel. A count of chains and atoms is read once,
   * when a structure is opened, and a readout pinned over the picture is then
   * in the corner of every frame after that - so it sits with the controls,
   * where a reader who wants it goes and looks, and the picture stays whole.
   * Passing an empty list hides the block rather than leaving a bare caption.
   */
  setStats(parts: string[]): void;
  viewer(): ThreeDmolViewer | null;
  /** Hand the viewer over once it is built; the scene resizes and clears it. */
  setViewer(viewer: ThreeDmolViewer | null): void;
  /**
   * Put the camera back where this structure was last left, if it has been.
   *
   * False when there is nothing stored for it, which is the view's cue to frame
   * the scene the way it opens on. Call it after the models are loaded and
   * before the wheel guard is built, because the guard measures the framing it
   * finds.
   */
  restoreCamera(): boolean;
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

  const section = ({ label, controls }: MenuSection): HTMLDivElement => {
    // `flex-shrink:0` so a panel with more in it than fits scrolls - `MENU_PANEL`
    // is what does the scrolling - rather than squeezing every block a few
    // pixels shorter until the captions sit on top of the buttons.
    const block = el("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    block.appendChild(
      el(
        "span",
        `font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;text-transform:uppercase;` +
        `color:${V.textMuted};`,
        label,
      ),
    );
    for (const control of controls) block.appendChild(control);
    return block;
  };

  // Built here rather than in `buildControls`, because a view sets its counts
  // as soon as it has parsed a structure and the panel is not built until the
  // menu is first opened, which may be never.
  const statsEl = el("div", `display:flex;flex-direction:column;gap:2px;font-size:${FONT.small};color:${V.textMuted};`);
  const statsSection = section({ label: "Contents", controls: [statsEl] });
  statsSection.style.display = "none";

  const buildControls = (): HTMLDivElement => {
    // The extra top padding is for the floating chrome: the button stays where
    // it was when the panel opened under it, so the panel's first section has
    // to start below it rather than behind it. The height comes from
    // `MENU_PANEL`'s own `flex:1` against the column `chromeMenu` puts this in,
    // which is what carries the background and the rule down the view and makes
    // the controls scroll rather than run off the bottom of a short one.
    const panel = el("div", `${MENU_PANEL}padding-top:${PANE_CHROME_CLEARANCE};`);

    const reps = buttonGroup(
      PROTEIN_REPS,
      opts.rep,
      (id) => {
        opts.rep = id as ProteinRepresentation;
        spec.restyle();
      },
      repSetting,
    );
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

    // Last. The controls are what the panel is opened for and they belong under
    // the hand that opened it; the counts are read once and then not again, so
    // they go at the bottom rather than pushing every control down a block.
    panel.appendChild(statsSection);

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
    extras: framejsMenuItem,
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

  // A column beside the picture while there is room for one, a band above it
  // when there is not. `orientMenuPanel` is what tells the panel which it is:
  // its width floor is what would otherwise squeeze the viewer to a slit in a
  // detail pane a few hundred pixels wide.
  const stopWatching = onNarrow(split, (narrow) => {
    split.style.flexDirection = narrow ? "column" : "row";
    orientMenuPanel(menu.panel, narrow);
    // 3Dmol sizes its canvas once, so a pane that changed shape is a picture
    // drawn at the old one.
    viewer?.resize();
    viewer?.render();
  });

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
    statusEl.style.background = isError ? V.warnBg : V.toolbarBg;
    statusEl.style.color = isError ? V.warnFg : V.textMuted;
    statusEl.style.border = `1px solid ${isError ? V.warnBorder : V.toolbarBorder}`;
  };

  /**
   * Store where the camera is, for the next scene drawing this structure.
   *
   * Defensive about what it reads back: a viewer torn down under us, or a build
   * of 3Dmol without `getView`, is a reason to keep no camera rather than to
   * store a broken one and reapply it to every scene after.
   */
  const rememberCamera = (): void => {
    if (!spec.cameraKey || !viewer) return;
    const view = viewer.getView?.();
    if (Array.isArray(view) && view.length >= 4 && view.every((n) => Number.isFinite(n))) {
      cameras.set(spec.cameraKey, view.slice());
    }
  };

  return {
    opts,
    pane,
    menu,
    showStatus,
    setStats: (parts) => {
      statsEl.replaceChildren(...parts.map((part) => el("div", "overflow-wrap:anywhere;", part)));
      statsSection.style.display = parts.length ? "" : "none";
    },
    restoreCamera: () => {
      const view = spec.cameraKey ? cameras.get(spec.cameraKey) : undefined;
      if (!view || !viewer) return false;
      viewer.setView(view.slice());
      viewer.render();
      return true;
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
        stopWatching();
        // Before anything is torn down: this is the whole point of the memory,
        // and a cleared viewer has no camera left to read.
        rememberCamera();
        interaction?.cleanup();
        interaction = null;
        releaseViewer(viewer);
        viewer = null;
      },
    },
  };
}
