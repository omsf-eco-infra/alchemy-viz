/**
 * `<gufe-chemical-system>` - the labelled components in a strip, the selected
 * one drawn under it.
 *
 * A chemical system is a dictionary of labels to gufe keys, and each key
 * resolves to a whole, standalone component payload - the same object that
 * would be the top-level payload if that component were visualized on its own.
 * So the detail pane is a nested `<gufe-view>`: this view chooses *which*
 * component, and the dispatcher decides how to draw it, exactly as it would at
 * the top level.
 *
 * That is composition made structural rather than conventional. A new component
 * type gets a view and a dispatch entry, and it appears in here with no change
 * to this file - including `UnknownComponentViz`, which is why one component
 * nobody can draw never stops the rest of the system from drawing.
 */

import { centredMessage, el, floatingWarning, headerStrip, HIDE_NAME_ATTRIBUTE, statChip, typeBadge } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { text } from "../shared/settings.js";
import { FONT } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entriesFor, lookup, type RegistryIndex } from "../schema/registry.js";
import { complexPartsFor, hasComplex } from "./complex.js";
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
export function systemPayloadFor(system: ChemicalSystemViz, registry: RegistryIndex): ChemicalSystemViz {
  return { ...system, registry: entriesFor(registry, Object.values(system.components ?? {})) };
}

/**
 * Which component is open, remembered by label.
 *
 * A label is a role rather than a thing: "protein" names a different molecule
 * in every system of a network, and the systems of one network carry the same
 * handful of labels as each other. So a reader who opened the protein of one
 * system and then clicked the next system, or an edge and then a system, is
 * asking for that one's protein - not for whichever component its dictionary
 * happens to sort first, which is what they used to get, once per selection.
 *
 * That is the distinction `shared/settings.ts` draws when it says a selection
 * is not a preference: what is stored here is not which component but which
 * *kind*, and a stored label that this system has no component under falls back
 * to the first, so the pane is never left empty by a label from somewhere else.
 */
const OPEN_LABEL = "chemical-system.component";

/** What to call a component in the list: its own name, or what little is left. */
function componentLabel(component: ComponentViz): string {
  if (component.name) return component.name;
  return component.type === "UnknownComponentViz" ? component.gufe_type : "(unnamed)";
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
  return component.type === "UnknownComponentViz" ? typeBadge(component.gufe_type) : null;
}

export class GufeChemicalSystem extends GufeElement<ChemicalSystemViz> {
  protected override placeholder(): string {
    return "Waiting for a ChemicalSystem payload...";
  }

  protected renderView(host: HTMLDivElement, payload: ChemicalSystemViz): ViewHandle {
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

    const bar = headerStrip(payload.name || "Chemical system");
    bar.statsEl.appendChild(statChip("components", String(entries.length)));
    host.appendChild(bar);

    if (!entries.length) {
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

    // The components across the top and the drawing under them, at every width.
    // A column beside the drawing took a fixed 220px from it whatever else was
    // on screen, and a molecule wants the width more than three labels do. It is
    // also how the transformation view reads, and this is mounted inside one.
    const split = el("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:column;");
    host.appendChild(split);
    if (unresolved.length) {
      floatingWarning(
        split,
        `${unresolved.length} component${unresolved.length === 1 ? "" : "s"} named by this system ` +
          `(${unresolved.join(", ")}) are not in its registry`,
      );
    }

    const list = el(
      "div",
      "flex:0 0 auto;min-width:0;overflow-x:auto;display:flex;flex-direction:row;gap:6px;padding:10px;" +
        `background:${T.panelBg};border-bottom:1px solid ${T.splitBorder};`,
    );
    split.appendChild(list);

    const detail = el("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    split.appendChild(detail);

    // The nested dispatcher. Created once and re-pointed at a different
    // component on each selection, so switching is an update rather than a
    // rebuild - the same create/update/destroy contract the top level uses.
    const view = el("div", "flex:1;min-height:0;display:flex;") as HTMLDivElement;
    detail.appendChild(view);
    const child = document.createElement("gufe-view") as HTMLElement & { payload: unknown; resize?(): void };
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
      complexDrawn && parts.structures.some((structure) => (structure as ComponentViz) === component);

    const panes: Pane[] = entries
      .filter(([, component]) => !absorbed(component))
      .map(([label, component]) => ({
        key: label,
        title: label,
        subtitle: componentLabel(component),
        badge: componentBadge(component),
        element: child,
        point: () => {
          child.payload = component;
        },
      }));

    // It goes first because a complex leg is a complex before it is a protein
    // and a ligand, and the reader who has never opened one of these should
    // land on the picture that says so.
    if (complexDrawn) {
      const complex = document.createElement("gufe-complex") as HTMLElement & {
        payload: unknown;
        resize?(): void;
      };
      complex.style.cssText = "flex:1;min-width:0;min-height:0;";
      complex.setAttribute(HIDE_NAME_ATTRIBUTE, "");
      complex.payload = payload;
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
    const select = (index: number): void => {
      buttons.forEach((button, i) => {
        const active = i === index;
        button.style.background = active ? T.cardBgActive : T.cardBg;
        button.style.borderColor = active ? T.cardBorderActive : T.cardBorder;
      });
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

    panes.forEach((pane, index) => {
      const button = el(
        "button",
        "display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;" +
          `border:1px solid ${T.cardBorder};border-radius:8px;background:${T.cardBg};cursor:pointer;` +
          `font-family:inherit;font-size:${FONT.body};flex-shrink:0;width:auto;`,
      );
      button.appendChild(el("span", `font-weight:700;color:${T.textPrimary};`, pane.title));
      button.appendChild(el("span", `font-size:${FONT.small};color:${T.textMuted};`, pane.subtitle));
      if (pane.badge) button.appendChild(pane.badge);
      button.onclick = () => open(index);
      buttons.push(button);
      list.appendChild(button);
    });

    // The label this reader last opened, wherever this system has one under it.
    const remembered = panes.findIndex((pane) => pane.key === openLabel.get());
    select(remembered < 0 ? 0 : remembered);

    return {
      onResize: () => mounted?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => mounted?.remove(),
    };
  }
}

defineElement("gufe-chemical-system", GufeChemicalSystem);
