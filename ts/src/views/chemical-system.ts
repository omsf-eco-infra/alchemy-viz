/**
 * `<gufe-chemical-system>` - the system's name over the labelled components in
 * a strip, the selected one drawn beside them.
 *
 * A chemical system is a dictionary of labels to gufe keys, and each key
 * resolves to a whole, standalone component payload - the same object that
 * would be the top-level payload if that component were visualized on its own.
 * So the detail pane is a nested `<alchemy-view>`: this view chooses *which*
 * component, and the dispatcher decides how to draw it, exactly as it would at
 * the top level.
 *
 * That is composition made structural rather than conventional. A new component
 * type gets a view and a dispatch entry, and it appears in here with no change
 * to this file - including `UnknownComponentViz`, which is why one component
 * nobody can draw never stops the rest of the system from drawing.
 */

import { el, onNarrow } from "../shared/dom.js";
import { sidePane } from "../shared/chrome.js";
import { centredMessage, floatingWarning, HIDE_NAME_ATTRIBUTE, typeBadge } from "../shared/panels.js";
import {
  defineElement,
  AlchemyElement,
  type ViewHandle,
} from "../shared/element.js";
import { num, text } from "../shared/settings.js";
import { pickable } from "../shared/controls.js";
import { FONT, PICK, RADIUS, SPACE, WEIGHT } from "../shared/style.js";
import { V } from "../shared/theme.js";
import {
  buildRegistry,
  entriesFor,
  lookup,
  type RegistryIndex,
} from "../schema/registry.js";
import { complexPartsFor, hasComplex, type GufeComplex } from "./complex.js";
import type { ChemicalSystemViz, ComponentViz } from "../schema/types.js";

/**
 * A chemical system, cut loose as a payload that stands on its own.
 *
 * The counterpart to `mappingPayloadFor`: a node of an alchemical network is
 * already a whole `ChemicalSystemViz`, and what it lacks is a registry of its
 * own holding the components it names by key. What comes out is exactly the
 * payload this element receives when someone drops a chemical system on the
 * page by itself.
 *
 * An unresolvable component is left out rather than refused, because this view
 * already draws a system whose components are partly missing and says how many
 * it could not find. Refusing here would turn a pane that reports the gap into
 * a pane that shows nothing.
 */
export function systemPayloadFor(
  system: ChemicalSystemViz,
  registry: RegistryIndex,
): ChemicalSystemViz {
  return {
    ...system,
    registry: entriesFor(registry, Object.values(system.components ?? {})),
  };
}

/**
 * Which component is open, remembered by label.
 *
 * A label is a role rather than a thing: "protein" names a different molecule
 * in every system of a network, and the systems of one network carry the same
 * handful of labels as each other. So a reader who opened the protein of one
 * system and then clicked the next system, or an edge and then a system, is
 * asking for that one's protein - not for whichever component its dictionary
 * happens to sort first.
 *
 * That is the distinction `shared/settings.ts` draws when it says a selection
 * is not a preference: what is stored here is not which component but which
 * *kind*, and a stored label that this system has no component under falls back
 * to the first, so the pane is never left empty by a label from somewhere else.
 */
const OPEN_LABEL = "chemical-system.component";

/**
 * Where the complex pane is in the strip, when there is one.
 *
 * It is unshifted onto the front of the list, and the eyes beside the ligands
 * need to name it: what they change is what that pane draws.
 */
const COMPLEX_PANE = 0;

/**
 * How wide the strip is where there is room for it beside the drawing, before
 * anyone drags it.
 */
const STRIP_WIDTH = 200;

/**
 * How far it may be dragged.
 *
 * The floor is a component's name over its badge; the ceiling is where the
 * drawing beside it stops being worth drawing. A system whose components are
 * named at length is exactly the case the drag is for, and the case a fixed
 * strip served worst.
 */
const STRIP_DRAG = { min: 140, max: 420 };

/** ... and the share of a narrow pane it may take, whatever the pixels say. */
const STRIP_MAX_SHARE = "45%";

/** How tall it may become once it is a band, before it scrolls instead. */
const STRIP_MAX_HEIGHT = "35%";

/** What to call a component in the list: its own name, or what little is left. */
function componentLabel(component: ComponentViz): string {
  if (component.name) return component.name;
  return component.type === "UnknownComponentViz"
    ? component.gufe_type
    : "(unnamed)";
}

/**
 * The badge under a component, where there is one worth drawing.
 *
 * A component this can draw says what it is by being drawn: a picture of a
 * molecule and a table of bulk conditions are not mistakeable for one another,
 * so "SmallMoleculeComponent" and "SolventComponent" beside them are Python
 * class names spent on a distinction the pane below already makes. A component
 * nothing can draw is the exception - its gufe class is the only thing the
 * payload says about it, so that one keeps its badge.
 */
function componentBadge(component: ComponentViz): HTMLSpanElement | null {
  return component.type === "UnknownComponentViz"
    ? typeBadge(component.gufe_type)
    : null;
}

/**
 * An eye, drawn rather than typed so the glyph is not a Unicode dependency -
 * the same reason `chrome.ts` draws its own three bars for the menu button.
 *
 * Struck through when what it stands for is not being drawn. A control whose
 * two states differ only by a background is one a reader can only read if they
 * have seen the other state, and the eyes in this strip are mostly seen one at
 * a time.
 */
function eyeIcon(open: boolean): HTMLSpanElement {
  const icon = el("span", "display:inline-flex;");
  icon.innerHTML =
    '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false" fill="none" ' +
    'stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M1.6 8C3.3 5.3 5.5 4 8 4C10.5 4 12.7 5.3 14.4 8C12.7 10.7 10.5 12 8 12C5.5 12 3.3 10.7 1.6 8Z"/>' +
    '<circle cx="8" cy="8" r="2.1"/>' +
    (open ? "" : '<path d="M3.2 12.8L12.8 3.2"/>') +
    "</svg>";
  return icon;
}

/**
 * The button the eye goes in: a square at the trailing edge of a ligand's card.
 *
 * `PICK.className` rather than a rule of its own, so it is painted by the same
 * stylesheet as the card it sits against and the pair read as one row.
 */
function ligandEye(): HTMLButtonElement {
  return pickable(
    "display:flex;align-items:center;justify-content:center;flex-shrink:0;" +
      `width:30px;border:1px solid;border-radius:${RADIUS.lg};cursor:pointer;color:${V.textMuted};`,
  );
}

/** Say what one eye is showing - in its picture, its tooltip and `aria-pressed`. */
function paintEye(eye: HTMLButtonElement, name: string, on: boolean): void {
  eye.setAttribute("aria-pressed", String(on));
  eye.title = on ? `Hide ${name} in the complex` : `Show ${name} in the complex`;
  eye.setAttribute("aria-label", eye.title);
  eye.replaceChildren(eyeIcon(on));
}

/**
 * The system's name, sitting at the head of the components column.
 *
 * It is a heading rather than a bar: nothing is laid out beside it, so it wraps
 * within the column at any width instead of pushing a row of its own across the
 * pane, and the drawing beside it keeps the full height.
 */
function systemTitle(name: string): HTMLDivElement {
  return el(
    "div",
    `padding:10px 10px 16px;font-weight:${WEIGHT.bold};font-size:${FONT.title};` +
      `color:${V.titleColor};letter-spacing:.02em;line-height:1.3;` +
      "overflow-wrap:anywhere;flex-shrink:0;",
    name,
  );
}

export class GufeChemicalSystem extends AlchemyElement<ChemicalSystemViz> {
  protected override placeholder(): string {
    return "Waiting for a ChemicalSystem payload...";
  }

  protected renderView(
    host: HTMLDivElement,
    payload: ChemicalSystemViz,
  ): ViewHandle {
    // The labels map to gufe keys; the components themselves are in the
    // registry. A key that names no entry is a schema-valid payload this has to
    // survive - JSON Schema cannot express "this key resolves" - so it is
    // counted and reported rather than crashed on, and the rest still draws.
    const registry = buildRegistry(payload);
    const entries: [string, ComponentViz][] = [];
    const unresolved: string[] = [];
    for (const [label, key] of Object.entries(payload.components ?? {})) {
      const component = lookup(registry, key) as ComponentViz | undefined;
      if (component) entries.push([label, component]);
      else unresolved.push(label);
    }

    const name = payload.name || "Chemical system";

    if (!entries.length) {
      host.appendChild(systemTitle(name));
      // Naming the cause matters: "no components" and "its components are
      // missing from the registry" are very different bugs to go looking for.
      host.appendChild(
        centredMessage(
          unresolved.length
            ? "None of this system's components are in its registry."
            : "This chemical system has no components.",
        ),
      );
      return {};
    }

    // The components down the left and the drawing beside them. The panel is
    // narrow and the labels stack, so what it costs the molecule is a fixed
    // strip rather than a share of the width, and the reader gets the whole
    // list at a glance instead of a row that scrolls sideways once a system
    // carries more than a few components.
    const split = el(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;",
    );
    host.appendChild(split);
    if (unresolved.length) {
      floatingWarning(
        split,
        `${unresolved.length} component${unresolved.length === 1 ? "" : "s"} named by this system ` +
          `(${unresolved.join(", ")}) are not in its registry`,
      );
    }

    // The name heads the column it belongs to rather than a strip across the
    // top, because a strip charges the drawing a line of height for a word that
    // fits above the list with room to spare - and in a detail pane a few
    // hundred pixels tall that line is the difference between a molecule and a
    // sliver of one. There is no count beside it: the list under it *is* the
    // count, and reading it takes no longer than reading the number would.
    const aside = el(
      "div",
      "min-width:0;min-height:0;display:flex;flex-direction:column;" +
        `background:${V.panelBg};`,
    );
    // Named so it can be found from outside: which column a row of this strip
    // is in is not reachable by counting parents once a row holds more than the
    // card, and a class is how that is visible in devtools and assertable.
    aside.className = "gufe-components";
    split.appendChild(aside);
    aside.appendChild(systemTitle(name));

    const list = el(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;",
    );
    aside.appendChild(list);

    // The rule between the strip and the drawing, and the grip on it. The fixed
    // strip below is where a reader starts, not where they have to stay: how
    // much of a few hundred pixels a list of component names needs is a fact
    // about the system in front of them, and only they can see it.
    const strip = sidePane(aside, {
      initial: STRIP_WIDTH,
      min: STRIP_DRAG.min,
      max: STRIP_DRAG.max,
      maxShare: STRIP_MAX_SHARE,
      remember: num("chemical-system.stripWidth", STRIP_WIDTH, STRIP_DRAG.min, STRIP_DRAG.max),
      label: "Resize the component list",
      // What is mounted was drawn to the old shape, and a 3D viewer sizes its
      // canvas once.
      onResize: () => mounted?.resize?.(),
    });
    split.appendChild(strip.element);

    const detail = el(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;",
    );
    split.appendChild(detail);

    // The nested dispatcher. Created once and re-pointed at a different
    // component on each selection, so switching is an update rather than a
    // rebuild - the same create/update/destroy contract the top level uses.
    const view = el(
      "div",
      "flex:1;min-height:0;display:flex;",
    ) as HTMLDivElement;
    detail.appendChild(view);
    const child = document.createElement("alchemy-view") as HTMLElement & {
      payload: unknown;
      resize?(): void;
    };
    child.style.cssText = "flex:1;min-width:0;min-height:0;";
    // The strip above already says which component this is and what it is
    // called, so whatever is drawn below must not write the name over its own
    // picture as well. It applies to the whole subtree, however deeply the
    // dispatcher nests it.
    child.setAttribute(HIDE_NAME_ATTRIBUTE, "");
    view.appendChild(child);

    /**
     * One entry in the strip, and the thing it puts under it.
     *
     * A pane is not the same as a component, which is why this is not just the
     * entries list: a system holding a protein and a ligand has a third way of
     * being looked at that is neither of them, and it belongs in the same strip
     * because it is the same choice - what am I looking at.
     */
    interface Pane {
      /** What is stored under `OPEN_LABEL`, and never shown. */
      key: string;
      /** The button's two lines. */
      title: string;
      subtitle: string;
      badge: HTMLSpanElement | null;
      /** The element this pane draws into `view`, mounted on selection. */
      element: HTMLElement & { resize?(): void };
      /**
       * Which ligand of the complex this pane's component is, where the complex
       * draws more than one and the row therefore carries an eye.
       */
      ligand?: number;
      /** Point that element at what it should draw. Called on every selection. */
      point(): void;
    }

    // The whole system in one scene, offered only when there is one to draw -
    // see `hasComplex`.
    const parts = complexPartsFor(payload, registry);
    const complexDrawn = hasComplex(parts);

    // A structure the complex pane draws gets no pane of its own. Everything
    // `<gufe-protein>` offers - the representations, the colour schemes, the
    // water and hetero toggles, the same stored settings behind them, the same
    // statistics line - the complex pane offers too, on the same protein, with
    // the ligand in it. So the second pane is a second build of the same 5000
    // atoms one click away, showing strictly less. The ligand keeps its pane
    // because its own view is a different picture rather than a smaller one: a
    // 2D depiction, a SMILES and a formal charge, none of which is in the scene.
    const absorbed = (component: ComponentViz): boolean =>
      complexDrawn &&
      parts.structures.some(
        (structure) => (structure as ComponentViz) === component,
      );

    /**
     * Which ligands the complex pane draws, edited by the eyes in this strip.
     *
     * Held here rather than in `<gufe-complex>` for two reasons. The strip
     * already names every ligand, so a second list of the same names over the
     * picture was the same word twice with two states to keep in step - which
     * is what this replaced. And the complex element is torn down every time a
     * reader clicks to another pane and rebuilt when they click back, so a set
     * held in there would forget the choice on the round trip while the strip
     * that shows it stayed put.
     *
     * An ensemble opens on its first pose. A complex leg carries one ligand and
     * opens on it, and gets no eyes: see `ligandToggles`.
     */
    const ligandsShown = new Set<number>(complexDrawn && parts.ligands.length ? [0] : []);

    /**
     * Which ligand of the complex a component is, if it is one of them.
     *
     * Reference equality, as `absorbed` above: both lists came out of the one
     * registry, so the same key is the same object.
     */
    const ligandIndex = (component: ComponentViz): number | undefined => {
      const at = (parts.ligands as ComponentViz[]).indexOf(component);
      return at < 0 ? undefined : at;
    };

    /**
     * Whether the strip carries eyes at all.
     *
     * One ligand is not a choice: the eye beside it could only ever be pressed
     * to empty the scene the pane above it is for.
     */
    const ligandToggles = complexDrawn && parts.ligands.length > 1;

    const panes: Pane[] = entries
      .filter(([, component]) => !absorbed(component))
      .map(([label, component]) => ({
        key: label,
        title: label,
        subtitle: componentLabel(component),
        badge: componentBadge(component),
        element: child,
        ligand: ligandToggles ? ligandIndex(component) : undefined,
        point: () => {
          child.payload = component;
        },
      }));

    // The complex pane, kept in a name of its own because the eyes below drive
    // it. Typed as its class rather than as a bag of properties: `ligandsShown`
    // and `refreshLigands` are a contract between these two files, and a
    // structural cast would let either side rename half of it unnoticed.
    let complexPane: GufeComplex | null = null;

    // It goes first because a complex leg is a complex before it is a protein
    // and a ligand, and the reader who has never opened one of these should
    // land on the picture that says so.
    if (complexDrawn) {
      const complex = document.createElement("gufe-complex") as GufeComplex;
      complex.style.cssText = "flex:1;min-width:0;min-height:0;";
      complex.setAttribute(HIDE_NAME_ATTRIBUTE, "");
      // Before the payload, which is what makes the element render: it reads
      // this on the way through and keeps drawing from it.
      complex.ligandsShown = ligandsShown;
      complex.payload = payload;
      complexPane = complex;
      panes.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${parts.ligands.length === 1 ? parts.ligands[0].name || "ligand" : "ligands"} in ${
          parts.structures[0].name || "structure"
        }`,
        badge: null,
        element: complex,
        point: () => {},
      });
    }

    /**
     * Put one pane's element in the detail area, and only if it is not there.
     *
     * `replaceChildren` with what is already mounted would disconnect and
     * reconnect it, which for these elements means tearing a 3Dmol viewer down
     * and building it again on every click of the button already selected.
     */
    let mounted: (HTMLElement & { resize?(): void }) | null = null;
    const mount = (element: HTMLElement & { resize?(): void }): void => {
      if (mounted === element) return;
      view.replaceChildren(element);
      mounted = element;
    };

    const openLabel = text(OPEN_LABEL);

    const buttons: HTMLButtonElement[] = [];
    /** Which pane is open, for the eyes: theirs is the complex, which is first. */
    let openIndex = 0;
    const select = (index: number): void => {
      // Which one is open is `aria-pressed`, and the stylesheet paints from it.
      // See `PICK`.
      buttons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
      openIndex = index;
      panes[index].point();
      mount(panes[index].element);
    };

    /**
     * Opening one by hand, which is the only thing that changes what is
     * remembered.
     *
     * A system with nothing under the remembered label opens on its own first
     * component, and must not write that back: a network of complex and solvent
     * legs is read by clicking between the two, and a fallback that wrote would
     * turn every glance at a solvent leg into "forget that I was reading
     * proteins".
     */
    const open = (index: number): void => {
      openLabel.set(panes[index].key);
      select(index);
    };

    /** The eyes, and which ligand each one is for. Empty unless the strip has any. */
    const eyes: { node: HTMLButtonElement; ligand: number; name: string }[] = [];
    const paintEyes = (): void => {
      for (const eye of eyes) paintEye(eye.node, eye.name, ligandsShown.has(eye.ligand));
    };

    panes.forEach((pane, index) => {
      // The row rather than the card carries the width, because a ligand's card
      // has an eye beside it and the two are one row. The list is a column only
      // while there is room for one: below `STACK_BELOW` it is a wrapping row,
      // where `width:100%` would give every row its own line and there would be
      // no band left to wrap. `width:auto` is the column's own stretch in one
      // orientation and the content width in the other, and `stretch` is what
      // makes an eye the height of the card it belongs to.
      const row = el(
        "div",
        `display:flex;align-items:stretch;gap:${SPACE.sm};` +
          "width:auto;flex-shrink:0;max-width:100%;min-width:0;",
      );
      // `PICK.card` is the card; what is overridden is that it now shares its
      // row rather than filling the list.
      const button = pickable(`${PICK.card}flex:1;width:auto;min-width:0;box-sizing:border-box;`);
      // `anywhere`, because a card that shares its row with an eye is narrower
      // than one that does not, and these are gufe labels and ligand names -
      // one long token with nowhere to break. A button clips what overflows it,
      // so the alternative to wrapping is a name cut off mid-word.
      button.appendChild(
        el("span", `font-weight:700;color:${V.textPrimary};overflow-wrap:anywhere;`, pane.title),
      );
      button.appendChild(
        el(
          "span",
          `font-size:${FONT.small};color:${V.textMuted};overflow-wrap:anywhere;`,
          pane.subtitle,
        ),
      );
      if (pane.badge) button.appendChild(pane.badge);
      button.onclick = () => open(index);
      buttons.push(button);
      row.appendChild(button);

      if (pane.ligand !== undefined) {
        const ligand = pane.ligand;
        const node = ligandEye();
        node.onclick = () => {
          if (ligandsShown.has(ligand)) ligandsShown.delete(ligand);
          else ligandsShown.add(ligand);
          paintEyes();
          complexPane?.refreshLigands();
          // The scene this changes is the complex, so this opens it. Pressed
          // from a component's own pane it would otherwise be a control with
          // nothing visible to show for itself, and a reader turning a pose on
          // is asking to see the pose.
          if (openIndex !== COMPLEX_PANE) open(COMPLEX_PANE);
        };
        eyes.push({ node, ligand, name: pane.subtitle });
        row.appendChild(node);
      }

      list.appendChild(row);
    });
    paintEyes();

    // The label this reader last opened, wherever this system has one under it.
    const remembered = panes.findIndex((pane) => pane.key === openLabel.get());
    select(remembered < 0 ? 0 : remembered);

    // A column beside the drawing while there is room for one, a band of
    // wrapping buttons above it when there is not. The strip is what gives,
    // because it is the half that still reads at any width: a picture in a slit
    // is not a smaller picture, it is no picture.
    // This view is mounted in places that are nothing like a page: the detail
    // pane of an alchemical network is a few hundred pixels wide, and a fixed
    // column in one of those leaves the picture a slit. The strip is what gives,
    // because it is the half that still reads at any width: a picture in a slit
    // is not a smaller picture, it is no picture.
    // How wide the strip is in either arrangement is `sidePane`'s, which is why
    // neither `flex` nor `max-width` is set here: the handle is what the reader
    // drags, and two owners of the same property means whichever ran last wins.
    // The trailing rule is the handle too, so only the stacked one is drawn.
    const stopWatching = onNarrow(split, (narrow) => {
      split.style.flexDirection = narrow ? "column" : "row";
      strip.orient(narrow);
      aside.style.maxHeight = narrow ? STRIP_MAX_HEIGHT : "none";
      aside.style.borderBottom = narrow ? `1px solid ${V.splitBorder}` : "none";
      list.style.flexDirection = narrow ? "row" : "column";
      list.style.flexWrap = narrow ? "wrap" : "nowrap";
      // What is mounted was drawn to the old shape, and a 3D viewer sizes its
      // canvas once.
      mounted?.resize?.();
    });

    return {
      onResize: () => mounted?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        stopWatching();
        mounted?.remove();
      },
    };
  }
}

defineElement("gufe-chemical-system", GufeChemicalSystem);
