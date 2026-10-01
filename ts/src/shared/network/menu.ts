/**
 * The menu both network views carry: two tabs, search, filters, a list, and the
 * copy-out block.
 *
 * ## Two tabs over one list
 *
 * A network is nodes and the lines between them, and both are things a reader
 * wants listed: which ligands are in the campaign, and which transformations
 * were run. They are one list in two states rather than two lists stacked,
 * because everything above the list - the search, the SMARTS box, the filters -
 * narrows both, and a panel that showed both lists at once would show each of
 * them half as much of the column as it needs.
 *
 * The tabs are also what the copy button reads: one button that copies the list
 * a reader is looking at, rather than the pair of buttons that used to ask which
 * of the two lists was meant a second time, underneath, after the tabs had
 * already said.
 *
 * ## Why it is one function
 *
 * A ligand network's menu and an alchemical network's differ in four things:
 * what a row looks like, what narrows the list, what the things in it are
 * called, and one extra control. Those are `spec`.
 *
 * Everything else is the same for both and is here - the order the controls sit
 * in, that the search writes to a `Setting`, that the count line says what is
 * shown and what is selected,
 * that both lists are in name order, that the list is `MENU_LIST` so it is the
 * part that gives when the panel is short, that the hint sits under the list
 * rather than over it, that a plain click replaces the selection and a
 * modifier-click adds to it, that the export note is cleared whenever the
 * selection moves. A view says what its menu *is* rather than how to build one.
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
 * The open tab, the search text, the SMARTS pattern and whatever `filters`
 * stores: all of them preferences, all keyed under `spec.namespace`. The
 * *selection* deliberately is not. It names nodes in the network on screen, and
 * restoring it onto a different one would restore nonsense.
 */

import { button, buttonGroup, pickable } from "../controls.js";
import { el } from "../dom.js";
import { FONT, INPUT, MENU_LIST, MENU_PANEL, PICK, SPACE } from "../style.js";
import { V } from "../theme.js";
import { choice, text as textSetting } from "../settings.js";
import { smartsBox, type MatchOutcome, type MatchSummary } from "../smarts.js";
import {
  exportBlock,
  MULTI_SELECT_HINT,
  type ListWords,
  type SelectableEdge,
  type SelectableNode,
} from "../selection.js";

/** Which of the two lists the menu is showing. */
type Tab = "nodes" | "edges";

/** What one render of a list counted: rows drawn, and how many of them are selected. */
interface Tally {
  shown: number;
  picked: number;
}

/**
 * Name order, with runs of digits compared as numbers.
 *
 * Asked for because a list in payload order is a list with no order at all to
 * anyone reading it: the only way to check whether a ligand is in the network
 * was to read every row. Numeric collation is what makes `lig_ejm_3` come
 * before `lig_ejm_31` rather than after `lig_ejm_311`, which is the whole
 * benefit of sorting a series that is numbered.
 */
const byName = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

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

/**
 * `N` is what a node is to the view, `E` what an edge is.
 *
 * Both, rather than nodes alone, because the edge list draws rows from a view's
 * own edge - a bundle of legs in one view, a scored mapping in the other - and
 * the menu would otherwise hand `edgeRow` back the two endpoints and nothing
 * else about the thing it is a row for.
 */
export interface NetworkMenuSpec<N extends SelectableNode, E extends SelectableEdge<N>> {
  /**
   * The prefix every `Setting` this menu writes is keyed under, e.g.
   * `"ligand-network"`. One namespace per view, so two networks on one page do
   * not read each other's search box.
   */
  namespace: string;
  nodes: readonly N[];
  edges: readonly E[];
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
  /**
   * Put whatever `filters` built back where it started.
   *
   * Called by "Clear selection", which clears the filters too: the selection
   * and the threshold together are the whole of what a reader has done to the
   * view, and putting one back while leaving the other standing is still not
   * the network they were handed. The list redraw and the canvas refresh are
   * the caller's, so this only has to move the controls.
   */
  resetFilters?(): void;
  /** Whether a node survives every filter now in force. */
  shows(node: N, index: number): boolean;
  /** What one row of the node list holds. */
  row(node: N, index: number): MenuRow;
  /**
   * Whether an edge survives every filter now in force.
   *
   * Its own predicate rather than "both ends survive", because the two views
   * answer it differently: a ligand network also has a score below which a
   * mapping is not worth listing, and a search for one ligand should still list
   * the transformations that ligand is an end of.
   */
  edgeShows(edge: E, index: number): boolean;
  /** What one row of the edge list holds. */
  edgeRow(edge: E, index: number): MenuRow;
  /**
   * What the two lists are called: on their tabs, in the count, on the button.
   */
  words: { nodes: ListWords; edges: ListWords };
  /** Re-run the canvas emphasis, after anything here moved. */
  refresh(): void;
  /** Bring one node into view and open it. */
  focus(index: number): void;
  /** Bring one edge into view and open it. */
  focusEdge(index: number): void;
  /**
   * Hand the list's own redraw back to the view.
   *
   * For a filter that settles asynchronously - a SMARTS sweep - which changes
   * what `shows` answers under a menu that has already been built.
   */
  mounted?(rerender: () => void): void;
}


export function networkMenu<N extends SelectableNode, E extends SelectableEdge<N>>(
  spec: NetworkMenuSpec<N, E>,
): HTMLDivElement {
  const querySetting = textSetting(`${spec.namespace}.query`);
  const tabSetting = choice<Tab>(`${spec.namespace}.tab`, "nodes", ["nodes", "edges"]);
  let tab = tabSetting.get();
  const panel = el("div", MENU_PANEL);

  // First in the panel, because which of the two lists is open is the outermost
  // question here: the search, the filters and the count below it all read
  // differently depending on the answer.
  const tabs = buttonGroup(
    [
      { id: "nodes", label: spec.words.nodes.tab, title: `List the ${spec.words.nodes.plural}` },
      { id: "edges", label: spec.words.edges.tab, title: `List the ${spec.words.edges.plural}` },
    ],
    tab,
    (id) => {
      tab = id as Tab;
      tabSetting.set(tab);
      render();
    },
  );
  // Half the width each, so the pair reads as one strip divided rather than as
  // two buttons that happen to be adjacent.
  for (const child of Array.from(tabs.children)) (child as HTMLElement).style.flex = "1";
  tabs.style.gap = "0";
  panel.appendChild(tabs);

  // One box for both lists. A search here is a search for a ligand either way:
  // on the edge list it leaves the transformations that ligand is an end of,
  // which is the question "what was run on this one" and the reason the two
  // lists share the box rather than each carrying its own.
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
    words: spec.words,
    setting: `${spec.namespace}.exportAs`,
    what: () => tab,
  });
  panel.appendChild(exporter.box);

  const clear = button("width:100%;", "Clear selection");
  clear.title = "Clear the selection and put the filters back";
  clear.onclick = () => {
    spec.selected.clear();
    spec.resetFilters?.();
    render();
    spec.refresh();
  };
  panel.appendChild(clear);

  /**
   * One row, whatever it holds: the mark, the name, and what selects it.
   *
   * Both lists are rows of the same shape - that is what "the transformations
   * look like the ligands" means - so what differs between them is only the
   * words and what a click selects, and both of those arrive as arguments.
   */
  function addRow(parts: MenuRow, keys: readonly string[], open: () => void): boolean {
    const row = pickable(PICK.row);
    // Picked is `aria-pressed`: both what the stylesheet paints from and what
    // a screen reader is told, so the two cannot drift apart. See `PICK`.
    // An edge row has two keys and is picked when both of its ends are, which
    // is the same question its copy button asks.
    const picked = keys.every((key) => spec.selected.has(key));
    row.setAttribute("aria-pressed", String(picked));

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
        const picked = keys.every((key) => spec.selected.has(key));
        for (const key of keys) {
          if (picked) spec.selected.delete(key);
          else spec.selected.add(key);
        }
      } else {
        spec.selected.clear();
        for (const key of keys) spec.selected.add(key);
        open();
      }
      render();
      spec.refresh();
    };
    list.appendChild(row);
    return picked;
  }

  /** The node list: every ligand a filter left, in name order. */
  function renderNodes(): Tally {
    const shown = spec.nodes
      .map((node, index) => ({ node, index }))
      .filter(({ node, index }) => spec.shows(node, index))
      .map(({ node, index }) => ({ node, index, parts: spec.row(node, index) }));
    shown.sort((a, b) => byName.compare(a.parts.name, b.parts.name));
    let picked = 0;
    for (const { node, index, parts } of shown) {
      if (addRow(parts, [node["gufe-key"]], () => spec.focus(index))) picked++;
    }
    return { shown: shown.length, picked };
  }

  /** The edge list: every transformation a filter left, in name order. */
  function renderEdges(): Tally {
    const shown = spec.edges
      .map((edge, index) => ({ edge, index }))
      .filter(({ edge, index }) => spec.edgeShows(edge, index))
      .map(({ edge, index }) => ({ edge, index, parts: spec.edgeRow(edge, index) }));
    shown.sort((a, b) => byName.compare(a.parts.name, b.parts.name));
    let picked = 0;
    for (const { edge, index, parts } of shown) {
      // Both ends, because a transformation is a thing between two ligands:
      // selecting it lights the line on the canvas, and the copy button - which
      // copies the edges with both ends selected - then has this one to copy.
      if (addRow(parts, [edge.from["gufe-key"], edge.to["gufe-key"]], () => spec.focusEdge(index))) picked++;
    }
    return { shown: shown.length, picked };
  }

  function render(): void {
    // Whatever the export last said was about a selection that has now changed,
    // and a count of what was copied from the previous one is worse than
    // silence. A successful copy does not come through here, so it stays up.
    exporter.clearNote();
    // The button names the list it copies, and the tab is what decides which
    // list that is.
    exporter.relabel();
    tabs.setActive(tab);
    list.replaceChildren();

    const words = tab === "nodes" ? spec.words.nodes : spec.words.edges;
    const total = tab === "nodes" ? spec.nodes.length : spec.edges.length;
    const { shown, picked } = tab === "nodes" ? renderNodes() : renderEdges();
    // "showing", because "3 of 3 ligands" was read as a count of what was
    // selected. The selected count is said separately, and only when there is
    // one, so the line carries two numbers only when both mean something.
    count.textContent =
      `showing ${shown} of ${total} ${words.plural}` + (picked ? `, ${picked} selected` : "");

    if (!shown) {
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
