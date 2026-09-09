/**
 * GENERATED - do not edit by hand.
 *
 * Source:  scripts/gen_atom_colors.py
 * Command: pixi run atom-colors
 *
 * Atom colours are mirrored from the libraries that already draw them, never
 * authored here, so that a picture drawn by this project and a picture drawn by
 * gufe or openfe cannot disagree about what a colour means. CI regenerates this
 * file and fails if it differs from what is committed.
 *
 * Element colouring in 3D belongs to 3Dmol's `Jmol` scheme and is left to it. In
 * 2D it belongs to RDKit's defaults, which are drawn for paper, so the only
 * element colours here are the two RDKit itself switches to when the paper
 * assumption fails: gufe's black-and-white palette, and RDKit's dark-mode one.
 */

/**
 * The two mapping highlight colours, from
 * `gufe.visualization.mapping_visualization`.
 *
 * gufe colours by *meaning* and makes no distinction between the two molecules:
 * an atom is either an element change, or unique to its side, or unremarkable.
 * There is deliberately no colour here for the third case, because gufe does not
 * highlight those atoms at all, and adding one would be inventing a colour.
 *
 * Both are also given in 3Dmol's `0x` form, because that is what its style
 * specifications take and converting at every call site is worse.
 *
 * This pair is colourblind-safe as it stands. Keep it that way by not editing it.
 */
export const MAPPING_COLORS = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220",
} as const;

/**
 * The 3D mapping ramp: matplotlib's `hsv`, sampled at 128 stops.
 *
 * openfe indexes this by the position of each mapped *pair* and paints the same
 * colour on both of that pair's atoms, so a shared colour is what says "these
 * two are mapped to each other". It has nothing to do with the element.
 *
 * `hsv` is a rainbow, which puts red next to purple; that has already cost
 * real debugging time. Moving to a perceptually uniform colormap is worth
 * proposing, but it changes what OpenFE draws, so it is a decision for the team
 * and a one-line change to `RAMP_NAME` in the generator, never an edit here.
 */
export const MAPPING_RAMP_3D: readonly string[] = [
  "#FF0000",
  "#FF0C00",
  "#FF1800",
  "#FF2300",
  "#FF2F00",
  "#FF3B00",
  "#FF4700",
  "#FF5300",
  "#FF5F00",
  "#FF6A00",
  "#FF7600",
  "#FF8200",
  "#FF8E00",
  "#FF9A00",
  "#FFA500",
  "#FFB100",
  "#FFBD00",
  "#FFC900",
  "#FFD500",
  "#FFE000",
  "#FFEC00",
  "#FCF500",
  "#F8FD00",
  "#EEFF00",
  "#E2FF00",
  "#D7FF00",
  "#CBFF00",
  "#BFFF00",
  "#B3FF00",
  "#A7FF00",
  "#9CFF00",
  "#90FF00",
  "#84FF00",
  "#78FF00",
  "#6CFF00",
  "#61FF00",
  "#55FF00",
  "#49FF00",
  "#3DFF00",
  "#31FF00",
  "#25FF00",
  "#1AFF00",
  "#0EFF00",
  "#06FF04",
  "#02FF0C",
  "#00FF16",
  "#00FF21",
  "#00FF2D",
  "#00FF39",
  "#00FF45",
  "#00FF51",
  "#00FF5C",
  "#00FF68",
  "#00FF74",
  "#00FF80",
  "#00FF8C",
  "#00FF97",
  "#00FFA3",
  "#00FFAF",
  "#00FFBB",
  "#00FFC7",
  "#00FFD3",
  "#00FFDE",
  "#00FFEA",
  "#00FFFC",
  "#00F6FF",
  "#00EAFF",
  "#00DFFF",
  "#00D3FF",
  "#00C7FF",
  "#00BBFF",
  "#00AFFF",
  "#00A4FF",
  "#0098FF",
  "#008CFF",
  "#0080FF",
  "#0074FF",
  "#0069FF",
  "#005DFF",
  "#0051FF",
  "#0045FF",
  "#0039FF",
  "#002DFF",
  "#0022FF",
  "#0016FF",
  "#020CFF",
  "#0604FF",
  "#0E00FF",
  "#1900FF",
  "#2500FF",
  "#3100FF",
  "#3D00FF",
  "#4900FF",
  "#5400FF",
  "#6000FF",
  "#6C00FF",
  "#7800FF",
  "#8400FF",
  "#9000FF",
  "#9B00FF",
  "#A700FF",
  "#B300FF",
  "#BF00FF",
  "#CB00FF",
  "#D600FF",
  "#E200FF",
  "#EE00FF",
  "#F800FD",
  "#FC00F5",
  "#FF00ED",
  "#FF00E1",
  "#FF00D5",
  "#FF00C9",
  "#FF00BD",
  "#FF00B1",
  "#FF00A6",
  "#FF009A",
  "#FF008E",
  "#FF0082",
  "#FF0076",
  "#FF006B",
  "#FF005F",
  "#FF0053",
  "#FF0047",
  "#FF003B",
  "#FF0030",
  "#FF0024",
  "#FF0018",
];

/** Which colormap `MAPPING_RAMP_3D` was sampled from. */
export const MAPPING_RAMP_NAME = "hsv";

const BLACK: readonly [number, number, number] = [0, 0, 0];

/**
 * Every element drawn black, which is how gufe draws a mapping.
 *
 * gufe calls `drawOptions().useBWAtomPalette()` so that the two highlight
 * colours are the only colour on the page. RDKit-JS has no such method: a view
 * can only pass JSON draw options, and **the JSON parser accepts
 * `useBWAtomPalette` and silently ignores it**, drawing an oxygen red anyway.
 * An explicit palette does work, so this is that palette.
 *
 * The generator checks this reproduces `useBWAtomPalette()` byte for byte
 * before emitting it, so a change in RDKit fails the build rather than quietly
 * making our mappings disagree with gufe's.
 */
export const MAPPING_BW_PALETTE: Readonly<
  Record<number, readonly [number, number, number]>
> = {
  0: BLACK,
  1: BLACK,
  2: BLACK,
  3: BLACK,
  4: BLACK,
  5: BLACK,
  6: BLACK,
  7: BLACK,
  8: BLACK,
  9: BLACK,
  10: BLACK,
  11: BLACK,
  12: BLACK,
  13: BLACK,
  14: BLACK,
  15: BLACK,
  16: BLACK,
  17: BLACK,
  18: BLACK,
  19: BLACK,
  20: BLACK,
  21: BLACK,
  22: BLACK,
  23: BLACK,
  24: BLACK,
  25: BLACK,
  26: BLACK,
  27: BLACK,
  28: BLACK,
  29: BLACK,
  30: BLACK,
  31: BLACK,
  32: BLACK,
  33: BLACK,
  34: BLACK,
  35: BLACK,
  36: BLACK,
  37: BLACK,
  38: BLACK,
  39: BLACK,
  40: BLACK,
  41: BLACK,
  42: BLACK,
  43: BLACK,
  44: BLACK,
  45: BLACK,
  46: BLACK,
  47: BLACK,
  48: BLACK,
  49: BLACK,
  50: BLACK,
  51: BLACK,
  52: BLACK,
  53: BLACK,
  54: BLACK,
  55: BLACK,
  56: BLACK,
  57: BLACK,
  58: BLACK,
  59: BLACK,
  60: BLACK,
  61: BLACK,
  62: BLACK,
  63: BLACK,
  64: BLACK,
  65: BLACK,
  66: BLACK,
  67: BLACK,
  68: BLACK,
  69: BLACK,
  70: BLACK,
  71: BLACK,
  72: BLACK,
  73: BLACK,
  74: BLACK,
  75: BLACK,
  76: BLACK,
  77: BLACK,
  78: BLACK,
  79: BLACK,
  80: BLACK,
  81: BLACK,
  82: BLACK,
  83: BLACK,
  84: BLACK,
  85: BLACK,
  86: BLACK,
  87: BLACK,
  88: BLACK,
  89: BLACK,
  90: BLACK,
  91: BLACK,
  92: BLACK,
  93: BLACK,
  94: BLACK,
  95: BLACK,
  96: BLACK,
  97: BLACK,
  98: BLACK,
  99: BLACK,
  100: BLACK,
  101: BLACK,
  102: BLACK,
  103: BLACK,
  104: BLACK,
  105: BLACK,
  106: BLACK,
  107: BLACK,
  108: BLACK,
  109: BLACK,
  110: BLACK,
  111: BLACK,
  112: BLACK,
  113: BLACK,
  114: BLACK,
  115: BLACK,
  116: BLACK,
  117: BLACK,
  118: BLACK,
};

/**
 * The draw options a mapping depiction must pass to match gufe.
 *
 * All three are things gufe sets and RDKit does not default to. Getting the
 * highlight colours right while missing these still produces a picture that
 * does not match.
 */
export const MAPPING_DRAW_OPTIONS = {
  atomColourPalette: MAPPING_BW_PALETTE,
  addAtomIndices: true,
  continuousHighlight: false,
} as const;

const DARK_INK: readonly [number, number, number] = [0.9, 0.9, 0.9];

/**
 * RDKit's own element palette for a dark ground, from `SetDarkMode`.
 *
 * The default palette is drawn for paper: carbon is black, and so is every bond
 * line and every unlabelled atom, which on a dark ground is a molecule nobody
 * can see. This is what RDKit itself switches to instead, so a dark depiction
 * here and a dark depiction drawn by any other RDKit caller agree.
 *
 * RDKit-JS has no `setDarkMode`, only JSON draw options, which is why this is a
 * palette rather than a flag - the same reason `MAPPING_BW_PALETTE` is one.
 */
export const DARK_ATOM_PALETTE: Readonly<
  Record<number, readonly [number, number, number]>
> = {
  "-1": [0.8, 0.8, 0.8],
  0: [0.9, 0.9, 0.9],
  1: [0.9, 0.9, 0.9],
  6: [0.9, 0.9, 0.9],
  7: [0.33, 0.41, 0.92],
  8: [1.0, 0.2, 0.2],
  9: [0.2, 0.8, 0.8],
  15: [1.0, 0.5, 0.0],
  16: [0.8, 0.8, 0.0],
  17: [0.0, 0.802, 0.0],
  35: [0.71, 0.4, 0.07],
  53: [0.89, 0.004, 1.0],
  201: [0.68, 0.85, 0.9],
};

/**
 * Every element in one ink, which is `MAPPING_BW_PALETTE` for a dark ground.
 *
 * gufe draws a mapping with no element colour at all so that its two highlight
 * colours are the only colour on the page. Keeping that on a dark ground means
 * keeping the single ink and lifting it off the background, so this is RDKit's
 * own dark carbon everywhere rather than a colour chosen here. It covers the
 * whole periodic table, plus the two keys RDKit's palette carries outside it,
 * so nothing is left drawn in the paper palette's black.
 */
export const DARK_MONO_PALETTE: Readonly<
  Record<number, readonly [number, number, number]>
> = {
  "-1": DARK_INK,
  0: DARK_INK,
  1: DARK_INK,
  2: DARK_INK,
  3: DARK_INK,
  4: DARK_INK,
  5: DARK_INK,
  6: DARK_INK,
  7: DARK_INK,
  8: DARK_INK,
  9: DARK_INK,
  10: DARK_INK,
  11: DARK_INK,
  12: DARK_INK,
  13: DARK_INK,
  14: DARK_INK,
  15: DARK_INK,
  16: DARK_INK,
  17: DARK_INK,
  18: DARK_INK,
  19: DARK_INK,
  20: DARK_INK,
  21: DARK_INK,
  22: DARK_INK,
  23: DARK_INK,
  24: DARK_INK,
  25: DARK_INK,
  26: DARK_INK,
  27: DARK_INK,
  28: DARK_INK,
  29: DARK_INK,
  30: DARK_INK,
  31: DARK_INK,
  32: DARK_INK,
  33: DARK_INK,
  34: DARK_INK,
  35: DARK_INK,
  36: DARK_INK,
  37: DARK_INK,
  38: DARK_INK,
  39: DARK_INK,
  40: DARK_INK,
  41: DARK_INK,
  42: DARK_INK,
  43: DARK_INK,
  44: DARK_INK,
  45: DARK_INK,
  46: DARK_INK,
  47: DARK_INK,
  48: DARK_INK,
  49: DARK_INK,
  50: DARK_INK,
  51: DARK_INK,
  52: DARK_INK,
  53: DARK_INK,
  54: DARK_INK,
  55: DARK_INK,
  56: DARK_INK,
  57: DARK_INK,
  58: DARK_INK,
  59: DARK_INK,
  60: DARK_INK,
  61: DARK_INK,
  62: DARK_INK,
  63: DARK_INK,
  64: DARK_INK,
  65: DARK_INK,
  66: DARK_INK,
  67: DARK_INK,
  68: DARK_INK,
  69: DARK_INK,
  70: DARK_INK,
  71: DARK_INK,
  72: DARK_INK,
  73: DARK_INK,
  74: DARK_INK,
  75: DARK_INK,
  76: DARK_INK,
  77: DARK_INK,
  78: DARK_INK,
  79: DARK_INK,
  80: DARK_INK,
  81: DARK_INK,
  82: DARK_INK,
  83: DARK_INK,
  84: DARK_INK,
  85: DARK_INK,
  86: DARK_INK,
  87: DARK_INK,
  88: DARK_INK,
  89: DARK_INK,
  90: DARK_INK,
  91: DARK_INK,
  92: DARK_INK,
  93: DARK_INK,
  94: DARK_INK,
  95: DARK_INK,
  96: DARK_INK,
  97: DARK_INK,
  98: DARK_INK,
  99: DARK_INK,
  100: DARK_INK,
  101: DARK_INK,
  102: DARK_INK,
  103: DARK_INK,
  104: DARK_INK,
  105: DARK_INK,
  106: DARK_INK,
  107: DARK_INK,
  108: DARK_INK,
  109: DARK_INK,
  110: DARK_INK,
  111: DARK_INK,
  112: DARK_INK,
  113: DARK_INK,
  114: DARK_INK,
  115: DARK_INK,
  116: DARK_INK,
  117: DARK_INK,
  118: DARK_INK,
  201: DARK_INK,
};

/**
 * What else a depiction has to pass to be drawn for a dark ground.
 *
 * The inks are RDKit's, every one its own `SetDarkMode` moves off the paper
 * value, found by diffing rather than by listing the ones anybody remembered.
 * `atomNoteColour` is why: an atom index is a note rather than an annotation, so
 * a depiction with a correct `annotationColour` still numbers its atoms in
 * black. The generator checks each key survives RDKit's JSON parser, which is
 * the only route a browser has and which ignores what it does not know.
 *
 * The background is the one deliberate departure. RDKit's dark mode paints the
 * SVG black; this asks for no paint at all, so the view's own surface is the
 * ground and one depiction can sit on two different panels without carrying a
 * colour that disagrees with either.
 */
export const DARK_DRAW_OPTIONS = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1.0],
  atomNoteColour: [0.9, 0.9, 0.9, 1.0],
  legendColour: [0.9, 0.9, 0.9, 1.0],
  symbolColour: [0.9, 0.9, 0.9, 1.0],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1.0],
} as const;
