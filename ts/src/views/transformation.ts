/**
 * `<gufe-transformation>` - what changes between two chemical systems, and how
 * the atoms line up while it changes.
 *
 * One of them is a diff. Both states are dictionaries keyed by label, so the
 * comparison is done per label rather than per position: "protein" in state A is
 * compared with "protein" in state B, and a label present on one side only is an
 * addition or a removal rather than a silent mismatch.
 *
 * The other embeds `<gufe-atom-mapping>` - the same element the standalone
 * mapping payload renders through, and the same one the ligand-network view
 * embeds. A NonTransformation arrives here as a diff with no differences and no
 * mappings, which is exactly what it is.
 *
 * They sit side by side, the diff in a column beside the molecules rather than
 * in a band above them, because the place this view is read most is an
 * alchemical network's detail pane - a tall, narrow pane, where a diff stacked
 * on top of a picture spent the height on the half that needs it least, and
 * both halves came out cramped. The diff wants width for a name and nothing
 * more; the molecules want everything left over, in both directions.
 *
 * The name of the transformation, the protocol and the mapping count head that
 * column too, for the same reason: a strip across the top of the pane would
 * charge both scenes a row of height for three lines the column has room for.
 *
 * The diff is therefore written down the column rather than across it: a label,
 * then what each state has under it, which is one line when the two states
 * agree - a solvent shared by both sides is one fact, not two - and two marked
 * A and B when they do not. Under a pane too narrow for two columns of
 * anything, the same blocks become a band above the molecules instead.
 */

import { el, onWidth } from "../shared/dom.js";
import { buttonGroup } from "../shared/controls.js";
import { centredMessage, statChip, typeBadge } from "../shared/panels.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { FONT, PANE_LABEL, RADIUS, SPACE, WEIGHT } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entriesFor, entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { mappingPayloadFor } from "./atom-mapping.js";
import type {
  ChemicalSystemViz,
  ComponentKey,
  ComponentViz,
  GufeKey,
  ProtocolViz,
  TransformationViz,
} from "../schema/types.js";

export type DiffStatus = "unchanged" | "changed" | "added" | "removed";

/**
 * The width below which the diff stops being a column beside the molecules and
 * becomes a band above them.
 *
 * Below this, taking a column's worth of width off the picture leaves it too
 * little to draw two molecules in, and the diff is the one of the two that
 * still reads at any width.
 */
const STACK_BELOW = 460;

/** How wide that column is, where there is room for one. */
const STATES_WIDTH = 210;

/** ... and how much of the view it may take, on a pane barely wider than it. */
const STATES_MAX_SHARE = "42%";

/**
 * A transformation, cut loose as a payload that stands on its own.
 *
 * The counterpart to `mappingPayloadFor`, one level up: an edge of an alchemical
 * network is already a whole `TransformationViz`, and what it lacks is a
 * registry holding everything it names by key. That closure is four things, and
 * naming them here rather than forwarding the whole network's registry is what
 * keeps a cut-loose transformation the size of a transformation:
 *
 *   both states, so the diff has two systems to compare
 *   their components, so each side of the diff has something to describe
 *   the protocol, which has no name of its own and so must be resolved to be shown
 *   both ligands of every mapping, which `mappingPayloadFor` cuts loose again
 *
 * Returns null when either state is missing, because a transformation whose
 * endpoints cannot be resolved has no diff to draw - which is the one thing this
 * view exists for, and is exactly what it reports when handed such a payload.
 */
export function transformationPayloadFor(
  edge: TransformationViz,
  registry: RegistryIndex,
): TransformationViz | null {
  const stateA = lookupOfType<ChemicalSystemViz>(registry, edge.stateA, "ChemicalSystemViz");
  const stateB = lookupOfType<ChemicalSystemViz>(registry, edge.stateB, "ChemicalSystemViz");
  if (!stateA || !stateB) return null;

  const keys: (GufeKey | undefined)[] = [edge.stateA, edge.stateB, edge.protocol];
  for (const state of [stateA, stateB]) keys.push(...Object.values(state.components ?? {}));
  for (const mapping of edge.mappings ?? []) keys.push(mapping.componentA, mapping.componentB);
  return { ...edge, registry: entriesFor(registry, keys) };
}

const STATUS_COLOR: Record<DiffStatus, string> = {
  unchanged: T.diffUnchanged,
  changed: T.diffChanged,
  added: T.diffAdded,
  removed: T.diffRemoved,
};

/**
 * How one label differs between the two states.
 *
 * Sameness is whole-payload equality, deliberately: two components are the same
 * for this view's purposes when everything it could possibly show about them is
 * the same. A protein whose PDB differs by one atom is "changed" even though its
 * name did not move, and that is the honest answer.
 */
export function diffStatus(a: ComponentKey | undefined, b: ComponentKey | undefined): DiffStatus {
  if (a && !b) return "removed";
  if (!a && b) return "added";
  // Keys rather than payloads, which is both cheaper and more exact: a gufe key
  // is content-derived, so equal keys mean equal gufe objects and there is no
  // megabyte of PDB to stringify to find that out.
  return a === b ? "unchanged" : "changed";
}

/** Every label either state carries, in a stable order. */
function labelsOf(stateA: ChemicalSystemViz, stateB: ChemicalSystemViz): string[] {
  return [...new Set([...Object.keys(stateA.components ?? {}), ...Object.keys(stateB.components ?? {})])].sort();
}

/**
 * A cell's two lines: what the component is called, and - only where nothing
 * can draw it - its gufe class. The class name of a component that does draw
 * says nothing the row's own label and the picture do not, so it is left off
 * here as it is in the chemical-system list.
 */
function describe(component: ComponentViz | undefined): { name: string; type: string | null } | null {
  if (!component) return null;
  const type = component.type === "UnknownComponentViz" ? component.gufe_type : null;
  return { name: component.name || "(unnamed)", type };
}

/**
 * What one state has under one label: a marked line, or a dashed "absent".
 *
 * `side` is drawn on the line rather than over a column of them, which is what
 * lets the two states be written down the column instead of across it. It is
 * left off where the states agree, because such a line is drawn once and stands
 * for both of them.
 */
function componentLine(
  component: ComponentViz | undefined,
  status: DiffStatus,
  side: "A" | "B" | null,
): HTMLDivElement {
  const line = el(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${SPACE.md};padding:5px ${SPACE.lg};` +
      `border-radius:${RADIUS.md};background:${T.cardBg};border:1px solid ${T.cardBorder};`,
  );
  if (side) {
    line.appendChild(
      el(
        "span",
        `flex:0 0 auto;font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;color:${T.textMuted2};`,
        side,
      ),
    );
  }
  const described = describe(component);
  if (!described) {
    line.style.background = "transparent";
    line.style.borderStyle = "dashed";
    line.appendChild(el("span", `font-size:${FONT.body};color:${T.textMuted2};`, "absent"));
    return line;
  }
  line.style.borderColor = status === "unchanged" ? T.cardBorder : STATUS_COLOR[status];
  const name = el(
    "span",
    `min-width:0;font-size:${FONT.body};font-weight:600;color:${T.textPrimary};overflow-wrap:anywhere;`,
    described.name,
  );
  name.title = described.name;
  line.appendChild(name);
  if (described.type) line.appendChild(typeBadge(described.type));
  return line;
}

/**
 * One label of the diff: what it is called, then what the states have under it.
 *
 * An unchanged label is one line rather than the same line twice. The two
 * states hold the same gufe key there, so a second copy would be a second
 * reading of one fact - and in a column this narrow, the row it costs is the
 * row a changed label further down needs.
 */
function diffBlock(
  label: string,
  status: DiffStatus,
  a: ComponentViz | undefined,
  b: ComponentViz | undefined,
): HTMLDivElement {
  const block = el("div", `display:flex;flex-direction:column;gap:${SPACE.sm};min-width:0;`);
  const head = el("div", `display:flex;align-items:center;gap:${SPACE.md};min-width:0;`);
  head.appendChild(
    el("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${STATUS_COLOR[status]};`),
  );
  const name = el(
    "span",
    `min-width:0;font-size:${FONT.body};font-weight:${WEIGHT.bold};color:${T.textPrimary};overflow-wrap:anywhere;`,
    label,
  );
  name.title = status;
  head.appendChild(name);
  block.appendChild(head);

  if (status === "unchanged") {
    block.appendChild(componentLine(a, status, null));
    return block;
  }
  block.appendChild(componentLine(a, status, "A"));
  block.appendChild(componentLine(b, status, "B"));
  return block;
}

/** "A to B" for a mapping whose endpoints are keys, for the picker. */
function mappingLabelFor(mapping: { componentA: string; componentB: string }, registry: RegistryIndex): string {
  const from = lookup(registry, mapping.componentA);
  const to = lookup(registry, mapping.componentB);
  return `${from ? entryLabel(from) : "A"} to ${to ? entryLabel(to) : "B"}`;
}

/**
 * The transformation's name, at the head of the column the states are written
 * down.
 *
 * A step smaller than a chemical system's title, because what names a
 * transformation is two system names joined by a word: it is a sentence rather
 * than a label, and at title size it wraps to four lines of a 210px column.
 */
function transformationTitle(name: string): HTMLDivElement {
  return el(
    "div",
    `font-weight:${WEIGHT.bold};font-size:${FONT.heading};color:${T.titleColor};` +
      `letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    name,
  );
}

/**
 * One fact about the transformation as a whole, under its name.
 *
 * Not `statChip`: these live in a column narrow enough that a protocol's class
 * name has to be allowed to wrap, and a chip is built not to.
 */
function metaLine(label: string, value: string): HTMLDivElement {
  const row = el("div", `display:flex;align-items:baseline;gap:${SPACE.md};min-width:0;font-size:${FONT.small};`);
  row.appendChild(el("span", `flex:0 0 auto;color:${T.textMuted};`, label));
  row.appendChild(
    el("span", `min-width:0;font-weight:${WEIGHT.bold};color:${T.textPrimary};overflow-wrap:anywhere;`, value),
  );
  return row;
}

export class GufeTransformation extends GufeElement<TransformationViz> {
  protected override placeholder(): string {
    return "Waiting for a Transformation payload...";
  }

  protected renderView(host: HTMLDivElement, payload: TransformationViz): ViewHandle {
    // Both states and the protocol are gufe keys. Every transformation of a
    // network usually names the same protocol, which is the whole reason it is
    // a registry entry rather than a field repeated per edge.
    const registry = buildRegistry(payload);
    const stateA = lookupOfType<ChemicalSystemViz>(registry, payload.stateA, "ChemicalSystemViz");
    const stateB = lookupOfType<ChemicalSystemViz>(registry, payload.stateB, "ChemicalSystemViz");
    const protocol = lookupOfType<ProtocolViz>(registry, payload.protocol, "ProtocolViz");
    const mappings = payload.mappings ?? [];

    const name = payload.name || "Transformation";

    if (!stateA || !stateB) {
      const named = el("div", "padding:12px 14px;flex-shrink:0;");
      named.appendChild(transformationTitle(name));
      host.appendChild(named);
      host.appendChild(
        centredMessage("This transformation names two chemical systems, and its registry does not hold them."),
      );
      return {};
    }
    const labels = labelsOf(stateA, stateB);

    // The two halves, in a row: the diff on the left, everything the mapping
    // draws on the right. The width watcher below turns this into a column on a
    // pane too narrow to divide.
    const body = el("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    host.appendChild(body);

    // --- the diff ---
    const diff = el(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;` +
        `gap:12px;background:${T.panelBg};`,
    );
    body.appendChild(diff);

    const mappingSide = el("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    body.appendChild(mappingSide);

    // The name and the two facts about the whole transformation head the column
    // the diff is written down, rather than a strip across the pane. In the
    // detail pane of an alchemical network that strip was a row of height taken
    // off two 3D scenes for a line that fits perfectly well over a column which
    // is already there - and the scenes are the half of the pane that has
    // nothing to spare.
    const header = el("div", `display:flex;flex-direction:column;gap:${SPACE.md};min-width:0;`);
    header.appendChild(transformationTitle(name));
    // A Protocol has no name of its own, so the class name is what identifies it.
    header.appendChild(metaLine("protocol", protocol?.gufe_type || protocol?.name || "-"));
    header.appendChild(metaLine("mappings", String(mappings.length)));
    diff.appendChild(header);

    // Which state is which, once at the top, rather than as headings over two
    // columns of cells - there are no columns to head any more, and the A and B
    // marks on the lines below point back up at these two.
    const heads = el("div", `display:flex;flex-direction:column;gap:${SPACE.xs};`);
    for (const [side, state] of [
      ["State A", stateA],
      ["State B", stateB],
    ] as const) {
      heads.appendChild(
        el(
          "div",
          `min-width:0;font-size:${FONT.small};font-weight:${WEIGHT.bold};letter-spacing:.06em;` +
            `text-transform:uppercase;color:${T.textMuted2};overflow-wrap:anywhere;`,
          `${side}${state.name ? ` - ${state.name}` : ""}`,
        ),
      );
    }
    diff.appendChild(heads);

    const present = new Set<DiffStatus>();
    for (const label of labels) {
      const keyA = stateA.components?.[label];
      const keyB = stateB.components?.[label];
      const status = diffStatus(keyA, keyB);
      present.add(status);
      diff.appendChild(
        diffBlock(
          label,
          status,
          lookup(registry, keyA) as ComponentViz | undefined,
          lookup(registry, keyB) as ComponentViz | undefined,
        ),
      );
    }

    // Only the statuses this transformation actually has, and only once there
    // are two of them to tell apart: a key to a single colour explains a
    // distinction the reader is not being asked to make.
    if (present.size > 1) {
      const legend = el(
        "div",
        `display:flex;flex-wrap:wrap;gap:${SPACE.lg} 12px;padding-top:${SPACE.sm};` +
          `font-size:${FONT.small};color:${T.textMuted};`,
      );
      for (const status of ["unchanged", "changed", "added", "removed"] as DiffStatus[]) {
        if (present.has(status)) legend.appendChild(statChip(status, "", STATUS_COLOR[status]));
      }
      diff.appendChild(legend);
    }

    // --- the mappings ---
    // Named only where the two halves are stacked, which is the one arrangement
    // in which a reader could take the picture for more of the diff. Beside it,
    // the label is a band of height spent saying what the molecules under it
    // already say.
    const mappingLabel = el("div", PANE_LABEL, "Atom mapping");
    mappingSide.appendChild(mappingLabel);

    // A column beside the molecules while there is room for one, a band above
    // them when there is not.
    let stacked: boolean | null = null;
    const stopWatching = onWidth(host, (width) => {
      const narrow = width > 0 && width < STACK_BELOW;
      if (narrow === stacked) return;
      stacked = narrow;
      body.style.flexDirection = narrow ? "column" : "row";
      diff.style.flex = narrow ? "0 0 auto" : `0 0 ${STATES_WIDTH}px`;
      diff.style.maxWidth = narrow ? "none" : STATES_MAX_SHARE;
      diff.style.maxHeight = narrow ? "45%" : "none";
      diff.style.borderRight = narrow ? "none" : `1px solid ${T.splitBorder}`;
      diff.style.borderBottom = narrow ? `1px solid ${T.splitBorder}` : "none";
      mappingLabel.style.display = narrow ? "block" : "none";
    });

    if (!mappings.length) {
      mappingSide.appendChild(
        centredMessage(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another.",
        ),
      );
      return { cleanup: stopWatching };
    }

    // Created before the picker that drives it, and appended after it, so the
    // picker's callback has something to point at from the first click.
    const child = document.createElement("gufe-atom-mapping") as HTMLElement & {
      payload: unknown;
      resize?(): void;
    };
    child.style.cssText = "flex:1;min-height:0;min-width:0;";
    // Cut loose with a registry of its own, so the embedded element resolves its
    // endpoints exactly as it would if the mapping were the whole payload.
    const show = (index: number) => {
      child.payload = mappingPayloadFor(mappings[index], registry);
    };
    show(0);

    if (mappings.length > 1) {
      const picker = el(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${FONT.small};` +
          `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textMuted};`,
      );
      picker.appendChild(
        buttonGroup(
          mappings.map((mapping, index) => ({
            id: String(index),
            label: mapping.name || mappingLabelFor(mapping, registry),
          })),
          "0",
          (id) => show(Number(id)),
        ),
      );
      mappingSide.appendChild(picker);
    }

    mappingSide.appendChild(child);

    return {
      onResize: () => child.resize?.(),
      cleanup: () => {
        stopWatching();
        child.remove();
      },
    };
  }
}

defineElement("gufe-transformation", GufeTransformation);
