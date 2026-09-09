/**
 * Putting an RDKit depiction inside a node of a graph.
 *
 * Both network views draw structures into their nodes - a ligand network
 * because a node *is* a molecule, an alchemical network because the ligand is
 * the part of a chemical system a reader recognises - and what a depiction has
 * to survive on the way in is the same for both. RDKit answers with a whole
 * standalone SVG document drawn for paper: its own width and height, an opaque
 * white backing rect, and a `defs` block. A node is a small area inside another
 * SVG, so the document is unwrapped rather than embedded, scaled to the room
 * the node has, and centred on the node's own origin.
 *
 * The backing rect is dropped rather than kept. It is square and as wide as the
 * whole depiction, so on a round node it is a square sticking out past the disc,
 * and on a boxed one it paints over the colour the box is drawn in. What ground
 * a structure needs behind it is the calling view's business - it knows the
 * shape of its own nodes - so it draws its own plate and this drops RDKit's.
 *
 * Which rect that is depends on how the depiction was asked for: white when it
 * was drawn for paper, and fully transparent when `depict-theme.ts` asked for no
 * background at all. Both are dropped, so a build that ignored the option and a
 * build that honoured it leave the same thing behind.
 */

/**
 * An element's fill, from either place SVG lets it be written.
 *
 * RDKit writes the one that matters here - the backing rect's - into `style`,
 * and its own documentation writes it as the presentation attribute. Reading
 * only the attribute is what left a white square drawn over the node's plate.
 */
const fillOf = (element: Element): string => {
  const attribute = element.getAttribute("fill");
  const declared = attribute ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(element.getAttribute("style") ?? "")?.[1] ?? "";
  return declared.toLowerCase().replace(/\s+/g, "");
};

const WHITE = new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]);

/** A fill nobody can see: `none`, `transparent`, or a hex whose alpha channel is zero. */
const isInvisible = (fill: string): boolean => {
  if (fill === "none" || fill === "transparent") return true;
  if (/^#[0-9a-f]{8}$/.test(fill)) return fill.slice(7) === "00";
  if (/^#[0-9a-f]{4}$/.test(fill)) return fill[4] === "0";
  return false;
};

const isBacking = (element: Element): boolean => {
  const fill = fillOf(element);
  return WHITE.has(fill) || isInvisible(fill);
};

/**
 * Draw a depiction into a node's group, centred on its origin.
 *
 * `size` is the square RDKit was asked to draw in, in its own units; `fit` is
 * the square it has to end up in, in the graph's. Answers false when the markup
 * could not be parsed or had nothing drawable in it, which is the caller's cue
 * to mark that node as one to stop asking about: a molecule RDKit cannot draw
 * this time will not draw next time either, and a node that keeps asking pays
 * the parse on every pan.
 */
export function mountDepiction(target: SVGGElement, markup: string, size: number, fit: number): boolean {
  const parsed = new DOMParser().parseFromString(markup, "image/svg+xml").documentElement;
  if (!parsed || parsed.nodeName.toLowerCase() === "parsererror") return false;

  target.setAttribute("transform", `translate(${-fit / 2},${-fit / 2}) scale(${fit / size})`);
  let appended = 0;
  for (const child of Array.from(parsed.childNodes)) {
    if (child.nodeType !== 1) continue;
    const tag = child.nodeName.toLowerCase();
    if (tag === "defs" || tag === "metadata" || tag === "title") continue;
    // The colour is in `style` on the builds this has met and in `fill` in
    // RDKit's own documentation, so both are read: a rect that survives this is
    // a square over whatever the node is drawn in.
    if (tag === "rect" && isBacking(child as Element)) continue;
    target.appendChild(document.importNode(child, true));
    appended++;
  }
  if (!appended) {
    target.replaceChildren();
    return false;
  }
  return true;
}
