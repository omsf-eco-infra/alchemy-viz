/**
 * Copying a selection out of a network, and the line against becoming a GUI.
 *
 * Both network views let a reader pick some of the nodes and then take the
 * names away with them - into a script, a spreadsheet, an issue comment. What
 * differs between the two is only what the things are called: ligands joined by
 * mappings in one, chemical systems joined by transformations in the other. So
 * the words are a parameter and everything else is here once.
 *
 * Deliberately labelled as copying rather than editing. A button that said "Add
 * edge" would set an expectation neither view can meet, and frustrating someone
 * who thinks they should be able to edit is the failure mode.
 */

import { el } from "./dom.js";
import { button, dropdown } from "./controls.js";
import { choice } from "./settings.js";
import { FONT } from "./style.js";
import { V } from "./theme.js";
import { entryLabel } from "../schema/registry.js";

/** Whether a copied selection names things the way people do, or the way gufe does. */
export type ExportAs = "names" | "keys";

/**
 * How to select more than one thing, said out loud.
 *
 * It goes under the list rather than over it: it explains what the rows do, and
 * it is the one thing here nobody can discover by looking. A plain click
 * replaces the selection, so without knowing this a reader can never have two
 * nodes selected - and the edge export, which needs both ends of one, could
 * never copy anything at all.
 */
export const MULTI_SELECT_HINT = "Cmd/Ctrl-click to select several.";

/** The least a node has to be for any of this: a key, and usually a name. */
export interface SelectableNode {
  "gufe-key": string;
  name?: string;
}

/** The least an edge has to be: its two ends, already resolved to nodes. */
export interface SelectableEdge<N> {
  from: N;
  to: N;
}

/**
 * The selection as text, one thing per line.
 *
 * Newline-separated rather than comma-separated: it pastes into a script or a
 * spreadsheet column without further splitting, and it survives names that
 * contain a comma. Within an edge the two ends are still comma-separated,
 * because there the comma is joining a pair rather than delimiting the list.
 */
export function selectionText<N extends SelectableNode>(
  nodes: readonly N[],
  edges: readonly SelectableEdge<N>[],
  selected: ReadonlySet<string>,
  what: "nodes" | "edges",
  as: ExportAs,
): string {
  const name = (node: N): string => (as === "keys" ? node["gufe-key"] : entryLabel(node));

  if (what === "nodes") {
    return nodes
      .filter((node) => selected.has(node["gufe-key"]))
      .map(name)
      .join("\n");
  }

  // An edge is included when both its ends are selected: "the edges among these
  // nodes" is the question, and one endpoint would answer a different one.
  return edges
    .filter((edge) => selected.has(edge.from["gufe-key"]) && selected.has(edge.to["gufe-key"]))
    .map((edge) => `${name(edge.from)}, ${name(edge.to)}`)
    .join("\n");
}

/** Put `text` on the clipboard, falling back to a selectable box. */
function copyOut(text: string, fallbackHost: HTMLElement): void {
  navigator.clipboard?.writeText(text).catch(() => showText(text, fallbackHost));
  if (!navigator.clipboard) showText(text, fallbackHost);
}

/** When the clipboard is unavailable, show the text so it can be copied by hand. */
function showText(text: string, host: HTMLElement): void {
  const box = el("textarea", `width:100%;height:80px;font-size:${FONT.small};box-sizing:border-box;`) as HTMLTextAreaElement;
  box.value = text;
  box.readOnly = true;
  host.appendChild(box);
  box.select();
}

/** Offer `text` as a file, for a selection too big for a clipboard. */
function download(text: string, filename: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const link = el("a", "display:none;") as HTMLAnchorElement;
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

/**
 * What one of a network menu's two lists is called.
 *
 * One pair of words serves the tab that opens the list, the count line above it
 * and the copy button under it, because a reader who clicked "Transformations"
 * and is then told about "edges" has to work out for themselves that the two are
 * the same thing.
 */
export interface ListWords {
  /** On the tab, and capitalised: "Ligands", "Transformations". */
  tab: string;
  /** In a sentence and in a file name: "ligands", "transformations". */
  plural: string;
}

export interface ExportBlockOptions<N extends SelectableNode> {
  nodes: readonly N[];
  edges: readonly SelectableEdge<N>[];
  /** The keys picked out of `nodes`, read at click time rather than captured. */
  selected: ReadonlySet<string>;
  words: { nodes: ListWords; edges: ListWords };
  /** Where the "copy as" choice is kept, so it survives a reload. */
  setting: string;
  /**
   * Which of the two lists is on screen, read at click time.
   *
   * There is one button rather than two because the menu already asks this
   * question once, on its tabs: a reader looking at the transformations has
   * said which of the two they mean, and a second pair of buttons underneath
   * asking it again was the thing that read as a choice with no consequence.
   */
  what(): "nodes" | "edges";
}

/**
 * The copy-out block: what to copy it as, one button, and what it did.
 *
 * The note is its own line because the alternative is to return on an empty
 * selection and leave the button looking broken. Copying is
 * invisible by nature - the result is on a clipboard, somewhere else - so a
 * button here has nothing to show for itself either way unless it says so.
 *
 * `clearNote` is handed back because a selection that has changed makes
 * whatever the note last said untrue, and a count of what was copied from a
 * previous selection is worse than silence. `relabel` is handed back because
 * the button names what it will copy, and what that is changes when the menu
 * changes tab.
 */
export function exportBlock<N extends SelectableNode>(
  options: ExportBlockOptions<N>,
): { box: HTMLDivElement; clearNote(): void; relabel(): void } {
  const { words } = options;
  const exportAsSetting = choice<ExportAs>(options.setting, "names", ["names", "keys"]);

  const box = el("div", "display:flex;flex-direction:column;gap:6px;");
  const asRow = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${V.textMuted};`);
  asRow.appendChild(el("span", "", "copy as"));
  const asPicker = dropdown(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" },
    ],
    exportAsSetting.get(),
    () => undefined,
    exportAsSetting,
  );
  asPicker.style.flex = "1";
  asRow.appendChild(asPicker);
  box.appendChild(asRow);

  const exportNote = el("div", `font-size:${FONT.tiny};line-height:1.5;color:${V.textMuted2};`);
  const note = (text: string): void => {
    exportNote.textContent = text;
  };

  const copy = button("width:100%;");
  const relabel = (): void => {
    const what = options.what();
    const word = what === "nodes" ? words.nodes : words.edges;
    // Naming the list rather than saying "Copy", because the button sits below
    // a list that is one of two and a reader who has scrolled the tabs out of
    // sight still has to be able to tell which one they are about to take.
    copy.textContent = `Copy ${word.plural}`;
    copy.title =
      what === "nodes"
        ? `Copy the selected ${words.nodes.plural}, one per line`
        : `Copy the ${words.edges.plural} between the selected ${words.nodes.plural}, one pair per line`;
  };
  relabel();

  copy.onclick = (event) => {
    const what = options.what();
    const word = what === "nodes" ? words.nodes : words.edges;
    const as = asPicker.value as ExportAs;
    const content = selectionText(options.nodes, options.edges, options.selected, what, as);
    if (!content) {
      // Naming which of the two reasons it is, because they need different
      // things done about them: one is "pick something", the other is "the
      // ones you picked have nothing between them".
      note(
        options.selected.size === 0
          ? `Nothing selected. Click one of the ${words.nodes.plural} above.`
          : what === "edges"
            ? `No ${words.edges.plural} between the ${options.selected.size} selected ${words.nodes.plural}. ${MULTI_SELECT_HINT}`
            : "Nothing to copy.",
      );
      return;
    }
    const lines = content.split("\n").length;
    if (event.shiftKey) {
      download(content, `selected-${word.plural}.txt`);
      note(`Saved ${lines} ${word.plural} to a file.`);
      return;
    }
    copyOut(content, box);
    note(
      what === "edges"
        ? `Copied ${lines} ${words.edges.plural}.`
        : `Copied ${options.selected.size} ${words.nodes.plural}.`,
    );
  };
  box.appendChild(copy);
  box.appendChild(exportNote);
  box.appendChild(el("div", `font-size:${FONT.tiny};color:${V.textMuted2};`, "Shift-click to save as a file instead."));

  return { box, clearNote: () => note(""), relabel };
}
