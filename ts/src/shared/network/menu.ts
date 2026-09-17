/**
 * The menu both network views carry: search, filters, a list, and the copy-out
 * block.
 *
 * ## Why it is one function
 *
 * A ligand network's menu and an alchemical network's differ in four things:
 * what a row looks like, what narrows the list, what the things in it are
 * called, and one extra control. Those are `spec`.
 *
 * Everything else is the same for both and is here - the order the controls sit
 * in, that the search writes to a `Setting`, that the count line says "n of m",
 * that the list is `MENU_LIST` so it is the part that gives when the panel is
 * short, that the hint sits under the list rather than over it, that a plain
 * click replaces the selection and a modifier-click adds to it, that the export
 * note is cleared whenever the selection moves. A view says what its menu *is*
 * rather than how to build one.
 *
 * ## Lazily built
 *
 * `chromeMenu` calls this on the first open and never again, which is what makes
 * a nine-hundred-ligand list something a view only pays for if someone asks for
 * it. Everything the spec closes over therefore has to exist by the time the
 * menu is constructed, not by the time the view has finished rendering.
 *
 * ## What is remembered
 *
 * The search text, the SMARTS pattern and whatever `filters` stores: all of them
 * preferences, all keyed under `spec.namespace`. The *selection* deliberately is
 * not. It names nodes in the network on screen, and restoring it onto a
 * different one would restore nonsense.
 */

import { button, pickable } from "../controls.js";
import { el } from "../dom.js";
import { FONT, INPUT, MENU_LIST, MENU_PANEL, PICK, SPACE } from "../style.js";
import { V } from "../theme.js";
import { text as textSetting } from "../settings.js";
import { smartsBox, type MatchOutcome, type MatchSummary } from "../smarts.js";
import {
  exportBlock,
  MULTI_SELECT_HINT,
  type ExportWord,
  type SelectableEdge,
  type SelectableNode,
} from "../selection.js";

/** What one row of the list holds, beside the name every row has. */
export interface MenuRow {
  /**
   * Drawn before the name - the alchemical network's colour swatch, which is
   * what ties a row to the box on its canvas. Nothing, for a view whose rows
   * need no mark.
   */
  before?: HTMLElement;
  /** The full name. Rows show this untruncated; the canvas caption is what cuts. */
  name: string;
  /** The row's `title`, for what does not fit on it: a SMILES, a composition. */
  title: string;
}

export interface NetworkMenuSpec<N extends SelectableNode> {
  /**
   * The prefix every `Setting` this menu writes is keyed under, e.g.
   * `"ligand-network"`. One namespace per view, so two networks on one page do
   * not read each other's search box.
   */
  namespace: string;
  /** What the rows are, in the plural: "ligands", "systems". Used in the count. */
  noun: string;
  nodes: readonly N[];
  edges: readonly SelectableEdge<N>[];
  /** Shared with the canvas, so the list and the picture cannot disagree. */
  selected: Set<string>;
  /** Written by the search box; the view reads it when it recomputes emphasis. */
  query: { text: string };
  search: { placeholder: string; label: string };
  /**
   * The SMARTS box. `describe` words the outcome, because what a match *means*
   * differs: one view colours what matched and hides nothing, the other hides
   * what did not.
   */
  smarts: {
    placeholder: string;
    label: string;
    describe(outcome: MatchSummary): string;
  };
  /** Sweep a pattern. The view decides what its result then does. */
  match(pattern: string): Promise<MatchOutcome>;
  /**
   * Controls between the SMARTS box and the count: the ligand network's score
   * slider, the alchemical network's composition picker. Given the list's own
   * redraw, because changing a filter changes what the list holds.
   *
   * Built once, with the rest of the menu.
   */
  filters?(rerender: () => void): HTMLElement[];
  /** Whether a node survives every filter now in force. */
  shows(node: N, index: number): boolean;
  /** What one row holds. */
  row(node: N, index: number): MenuRow;
  export: { nodes: ExportWord; edges: ExportWord };
  /** Re-run the canvas emphasis, after anything here moved. */
  refresh(): void;
  /** Bring one node into view and open it. */
  focus(index: number): void;
  /**
   * Hand the list's own redraw back to the view.
   *
   * For a filter that settles asynchronously - a SMARTS sweep - which changes
   * what `shows` answers under a menu that has already been built.
   */
  mounted?(rerender: () => void): void;
}


export function networkMenu<N extends SelectableNode>(spec: NetworkMenuSpec<N>): HTMLDivElement {
  const querySetting = textSetting(`${spec.namespace}.query`);
  const panel = el("div", MENU_PANEL);

  const search = el("input", INPUT) as HTMLInputElement;
  panel.appendChild(search);

  const smarts = smartsBox({
    placeholder: spec.smarts.placeholder,
    label: spec.smarts.label,
    remember: textSetting(`${spec.namespace}.smarts`),
    run: (pattern) => spec.match(pattern),
    describe: (outcome) => spec.smarts.describe(outcome),
  });
  panel.appendChild(smarts.element);

  for (const control of spec.filters?.(() => render()) ?? []) panel.appendChild(control);

  const count = el("div", `font-size:${FONT.small};color:${V.textMuted2};`);
  panel.appendChild(count);

  const list = el("div", MENU_LIST);
  panel.appendChild(list);

  // Under the list rather than over it: it explains what the rows do, and it is
  // the one thing here nobody can discover by looking. A plain click replaces
  // the selection, so without knowing this a reader can never have two nodes
  // selected - and the edge export, which needs both ends of one, could never
  // copy anything at all.
  panel.appendChild(el("div", `font-size:${FONT.tiny};line-height:1.5;color:${V.textMuted2};`, MULTI_SELECT_HINT));

  const exporter = exportBlock({
    nodes: spec.nodes,
    edges: spec.edges,
    selected: spec.selected,
    words: spec.export,
    setting: `${spec.namespace}.exportAs`,
  });
  panel.appendChild(exporter.box);

  const clear = button("width:100%;", "Clear selection");
  clear.onclick = () => {
    spec.selected.clear();
    render();
    spec.refresh();
  };
  panel.appendChild(clear);

  function render(): void {
    // Whatever the export last said was about a selection that has now changed,
    // and a count of what was copied from the previous one is worse than
    // silence. A successful copy does not come through here, so it stays up.
    exporter.clearNote();
    list.replaceChildren();

    const shown = spec.nodes
      .map((node, index) => ({ node, index }))
      .filter(({ node, index }) => spec.shows(node, index));
    count.textContent = `${shown.length} of ${spec.nodes.length} ${spec.noun}`;

    for (const { node, index } of shown) {
      const key = node["gufe-key"];
      const row = pickable(PICK.row);
      // Picked is `aria-pressed`: both what the stylesheet paints from and what
      // a screen reader is told, so the two cannot drift apart. See `PICK`.
      row.setAttribute("aria-pressed", String(spec.selected.has(key)));

      const parts = spec.row(node, index);
      if (parts.before) row.appendChild(parts.before);
      // The full name, because the canvas caption is truncated to fit its node
      // and long names were called out as normal rather than exceptional.
      const name = el("span", "flex:1;min-width:0;overflow-wrap:anywhere;", parts.name);
      name.title = parts.title;
      row.appendChild(name);

      row.onclick = (event) => {
        // Plain click jumps to it and opens it; modifier-click adds to the
        // selection, which is what makes "these six and what connects them"
        // possible.
        if (event.shiftKey || event.metaKey || event.ctrlKey) {
          if (spec.selected.has(key)) spec.selected.delete(key);
          else spec.selected.add(key);
        } else {
          spec.selected.clear();
          spec.selected.add(key);
          spec.focus(index);
        }
        render();
        spec.refresh();
      };
      list.appendChild(row);
    }

    if (!shown.length) {
      list.appendChild(el("div", `font-size:${FONT.small};padding:${SPACE.lg};color:${V.textMuted2};`, "Nothing matches."));
    }
  }

  search.type = "search";
  search.placeholder = spec.search.placeholder;
  search.value = querySetting.get();
  spec.query.text = search.value;
  search.setAttribute("aria-label", spec.search.label);
  search.oninput = () => {
    spec.query.text = search.value;
    querySetting.set(search.value);
    render();
    spec.refresh();
  };

  render();
  // The sweep is asynchronous and the pattern may be one this menu opened with,
  // so the list has to be redrawable from outside it.
  spec.mounted?.(render);
  // A remembered pattern is applied when the menu is built, which is the first
  // time it is opened - the same point at which the remembered search text
  // starts filtering.
  smarts.apply();
  return panel;
}
