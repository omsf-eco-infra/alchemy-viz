/**
 * The interface palette: two colour tables, light and dark.
 *
 * This is the raw colour data. Views do not read it directly - they go through
 * `style.ts`, which is the front door and turns these into the buttons, panels
 * and text a view actually asks for. Keeping the palette separate from the
 * component styles means a colour can be retuned without touching a layout, and
 * a layout without touching a colour.
 *
 * Nothing chemical belongs here. The mapping highlights and the pair ramp are
 * mirrored from gufe in `atom-colors.ts`, and the 3D mode colours from the
 * framejs prototype in `molecule-colors.ts`. Those say what a picture means;
 * these only say what it looks like.
 *
 * ## Where these came from
 *
 * openfree.energy, so a visualization sitting beside the docs looks like it
 * belongs to them rather than to whoever wrote it. Read from that site's own
 * stylesheet rather than sampled by eye:
 *
 *   #4182e4  the brand blue - its header, its buttons, its hero
 *   #2b2b40  the dark ground its page and footer sit on
 *   #00a4ca  links
 *   #51cbee  focus rings
 *   #333 #666 #999  text, in three weights of emphasis
 *   #eee #ccc  borders and rules
 *
 * Inter is their body face too, which `style.ts` already asked for.
 *
 * 3Dmol wants `0x`-prefixed colour strings and CSS wants `#`-prefixed ones, so
 * both forms are carried deliberately rather than converted at each call site.
 *
 * ## Two ways out of here, and which to use
 *
 * `V` is the one to reach for: every colour as `var(--gufe-<key>)`, for anything
 * that ends up in CSS. The values behind those names are written once into a
 * stylesheet by `installTheme`, so which theme is in force is a fact about the
 * document rather than a value baked into a few hundred strings, and `setTheme`
 * can change it.
 *
 * `T` is the literal table, for the three kinds of caller that cannot take a
 * `var()`:
 *
 *   engines       3Dmol wants `0x2b2b40`, and RDKit wants three integers
 *   SVG attributes `<circle fill="...">` is an attribute, not a declaration, and
 *                 attributes do not resolve custom properties
 *   arithmetic    the score ramp interpolates between two colours
 *
 * `T` follows `setTheme` as well, so a view re-rendered after a switch draws in
 * the new palette. It cannot follow it *without* a re-render, which is the whole
 * difference between the two: the chrome changes under the reader, and the
 * drawings change the next time they are drawn.
 */

export interface Theme {
  // surfaces
  appBg: string;
  panelBg: string;
  cardBg: string;
  cardBgHover: string;
  cardBgActive: string;
  cardBorder: string;
  cardBorderActive: string;
  splitBorder: string;
  toolbarBg: string;
  toolbarBorder: string;
  tooltipBg: string;
  tooltipBorder: string;

  // text
  titleColor: string;
  textPrimary: string;
  textMuted: string;
  textMuted2: string;

  // controls
  selectBg: string;
  selectBorder: string;
  labelBg: string;
  labelFg: string;
  badgeBg: string;
  badgeFg: string;
  switcherBg: string;
  btnBg: string;
  btnBgHover: string;
  btnBgActive: string;
  btnFg: string;
  btnBorder: string;

  // status
  okBg: string;
  okFg: string;
  okBorder: string;
  warnBg: string;
  warnFg: string;
  warnBorder: string;
  loadingFg: string;
  errorFg: string;

  // 3D viewers (3Dmol wants 0x-prefixed colours)
  viewerBg: string;
  /**
   * The ground a full-panel 2D depiction is drawn on. It tracks `viewerBg`, so
   * switching a molecule between 2D and 3D does not switch grounds under it.
   *
   * A view asks `depict-theme.ts` for this rather than reading it here, because
   * the depiction ground and the palette RDKit draws with have to be decided
   * together: light ink on a light ground is nothing at all.
   */
  canvas2DBg: string;


  // diff palette (transformation view)
  diffUnchanged: string;
  diffChanged: string;
  diffAdded: string;
  diffRemoved: string;

  // graphs (network views)
  netCanvasBg: string;
  netNodeFill: string;
  /**
   * The outline of a node nothing has been said about: a ligand's disc, the ring
   * round a depicted one, and an alchemical box in a network with a single
   * composition to tell apart.
   *
   * The dark value is lighter than a border elsewhere in that theme rather than
   * the same shade. A panel's border only has to lift a card off the panel
   * behind it, and a step is enough; a node's outline is doing the work of
   * saying where the node is, on a canvas whose fill is a step away already, and
   * a border a step above the ground it sits on is one nobody can see.
   */
  netNodeStroke: string;
  netNodeLabel: string;
  /**
   * The ground a node's 2D structure and its name sit on once the zoom draws
   * them, and what the styled disc is painted out with to make room.
   *
   * The same colour as the canvas in both themes, which is what makes it a
   * plate rather than a card: on a ligand network it is invisible and only
   * hides what it covers, and inside an alchemical network's coloured box it
   * reads as the picture's own ground. A view asks `depict-theme.ts` for it,
   * because it has to move with the palette its structures are drawn in.
   */
  netDepictBg: string;
  /** A ligand's name under its structure: quieter than the structure itself. */
  netNodeCaption: string;
  /** The same name where it sits on `netDepictBg`, which the plate decides and not the theme. */
  netDepictCaption: string;
  netInitials: string;
  /**
   * A ligand matching the SMARTS pattern: its disc, and the atoms that matched
   * inside its structure. Amber against a palette that is otherwise blue, so
   * the two are told apart by hue *and* by warmth rather than by hue alone.
   */
  netMatchFill: string;
  netMatchStroke: string;
  netMatchAtom: string;
  netEdgeRamp: [string, string];
  netEdgeLine: string;
  netEdgeLabel: string;
  netHaloColor: string;
  /**
   * The compositions a network's chemical systems come in, one colour each.
   *
   * An alchemical network of a binding campaign is two graphs in one picture:
   * the solvent leg and the complex leg, told apart by nothing but which
   * components their systems carry. These are what say which is which, so they
   * are categorical rather than a ramp - the difference between them means
   * "made of different things", not "more" or "less".
   *
   * Five, from the same OpenFE palette as everything else here, and used in
   * order of first appearance. A network with more compositions than this is
   * one where the colouring has stopped answering anything, and the view drops
   * back to a single neutral node rather than cycling.
   */
  netGroupFill: string[];
  netGroupStroke: string[];

  // solvent schematic
  boxFill: string;
  boxStroke: string;
}

export const THEMES: { dark: Theme; light: Theme } = {
  dark: {
    appBg: "#2b2b40",
    panelBg: "#33334d",
    cardBg: "#33334d",
    cardBgHover: "#3d3d5c",
    cardBgActive: "#1f3a63",
    cardBorder: "#45455e",
    cardBorderActive: "#4182e4",
    splitBorder: "#45455e",
    toolbarBg: "#33334d",
    toolbarBorder: "#45455e",
    tooltipBg: "#33334d",
    tooltipBorder: "#45455e",
    titleColor: "#51cbee",
    textPrimary: "#f2f3f7",
    textMuted: "#b9bccb",
    textMuted2: "#8f93a6",
    selectBg: "#2b2b40",
    selectBorder: "#45455e",
    labelBg: "#33334d",
    labelFg: "#51cbee",
    badgeBg: "#1f3a63",
    badgeFg: "#51cbee",
    switcherBg: "rgba(43,43,64,0.94)",
    btnBg: "#33334d",
    btnBgHover: "#3d3d5c",
    btnBgActive: "#4182e4",
    btnFg: "#f2f3f7",
    btnBorder: "#45455e",

    okBg: "#14532d",
    okFg: "#86efac",
    okBorder: "#166534",
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
    loadingFg: "#888",
    errorFg: "#ff8080",

    viewerBg: "0x2b2b40",
    canvas2DBg: "#2b2b40",


    diffUnchanged: "#64748b",
    diffChanged: "#d9a300",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",

    netCanvasBg: "#2b2b40",
    netNodeFill: "#33334d",
    netNodeStroke: "#6a6c82",
    netNodeLabel: "#f2f3f7",
    netDepictBg: "#2b2b40",
    netNodeCaption: "#b9bccb",
    netDepictCaption: "#b9bccb",
    netInitials: "#51cbee",
    netMatchFill: "#4a3c22",
    netMatchStroke: "#e69f00",
    netMatchAtom: "#e69f00",
    netEdgeRamp: ["#45455e", "#51cbee"],
    netEdgeLine: "#8f93a6",
    netEdgeLabel: "#f2f3f7",
    netHaloColor: "#51cbee",
    netGroupFill: ["#1f3a63", "#12403c", "#3a1f37", "#4a3c22", "#243a5e"],
    netGroupStroke: ["#4182e4", "#00bdaa", "#c060b8", "#e69f00", "#8f93a6"],

    boxFill: "#1f3a63",
    boxStroke: "#45455e",
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f7f8fa",
    cardBg: "#ffffff",
    cardBgHover: "#f0f4fb",
    cardBgActive: "#e6effc",
    cardBorder: "#eeeeee",
    cardBorderActive: "#4182e4",
    splitBorder: "#eeeeee",
    toolbarBg: "#f7f8fa",
    toolbarBorder: "#eeeeee",
    tooltipBg: "#ffffff",
    tooltipBorder: "#cccccc",
    titleColor: "#4182e4",
    textPrimary: "#333333",
    textMuted: "#666666",
    textMuted2: "#999999",
    selectBg: "#ffffff",
    selectBorder: "#cccccc",
    labelBg: "#f7f8fa",
    labelFg: "#4182e4",
    badgeBg: "#e6effc",
    badgeFg: "#4182e4",
    switcherBg: "rgba(255,255,255,0.94)",
    btnBg: "#ffffff",
    btnBgHover: "#f0f4fb",
    btnBgActive: "#4182e4",
    btnFg: "#333333",
    btnBorder: "#cccccc",

    okBg: "#dcfce7",
    okFg: "#166534",
    okBorder: "#bbf7d0",
    warnBg: "#fee2e2",
    warnFg: "#991b1b",
    warnBorder: "#fecaca",
    loadingFg: "#888",
    errorFg: "#c33",

    viewerBg: "0xffffff",
    canvas2DBg: "#ffffff",


    diffUnchanged: "#94a3b8",
    diffChanged: "#b45309",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",

    netCanvasBg: "#ffffff",
    netNodeFill: "#ffffff",
    netNodeStroke: "#cccccc",
    netNodeLabel: "#333333",
    netDepictBg: "#ffffff",
    netNodeCaption: "#666666",
    netDepictCaption: "#666666",
    netInitials: "#4182e4",
    netMatchFill: "#fdf1d8",
    netMatchStroke: "#e69f00",
    netMatchAtom: "#c07d00",
    netEdgeRamp: ["#e8eaef", "#4182e4"],
    netEdgeLine: "#999999",
    netEdgeLabel: "#333333",
    netHaloColor: "#51cbee",
    netGroupFill: ["#e6effc", "#d9f5f2", "#f6e7f4", "#fdf1d8", "#eef0f4"],
    netGroupStroke: ["#4182e4", "#009e8f", "#8a2283", "#c07d00", "#666666"],

    boxFill: "#e6effc",
    boxStroke: "#cccccc",
  },
};

/**
 * The host's own colour-scheme preference, falling back to light where
 * `matchMedia` is unavailable (jsdom, older embedders).
 */
function prefersDark(): boolean {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch {
    return false;
  }
}

/** Which palette to use: either one by name, or whatever the host prefers. */
export type ThemeChoice = "light" | "dark" | "system";

/**
 * The attribute `setTheme` stamps on the document element.
 *
 * The stylesheet is written so that this attribute wins over the media query in
 * both directions, which is what lets a page force light on a dark host.
 */
export const THEME_ATTRIBUTE = "data-gufe-theme";

let choice: ThemeChoice = "system";

/** Which of the two is actually in force. */
export function currentTheme(): "light" | "dark" {
  if (choice !== "system") return choice;
  return prefersDark() ? "dark" : "light";
}

/** Which of the two is in force, for the few places that have to know. */
export function isDark(): boolean {
  return currentTheme() === "dark";
}

/**
 * The palette in force, as literal colours.
 *
 * A `let` rather than a `const` on purpose: ESM exports are live bindings, so
 * `setTheme` reassigning this is seen by every importer without anyone having to
 * subscribe to anything. Read it inside a function rather than capturing it at
 * module scope, or the capture is the one thing that will not follow a switch.
 */
export let T: Theme = THEMES[currentTheme()];

// --- the stylesheet --------------------------------------------------------

/** Every custom property this writes is named for its `Theme` key. */
const VAR_PREFIX = "--gufe-";

/**
 * The keys that carry one CSS colour.
 *
 * `viewerBg` is excluded because it is `0x`-prefixed for 3Dmol and means nothing
 * to CSS, and the array-valued keys because an indexed palette is not a colour.
 * What is left is exactly the set `V` can offer, which is why the type is
 * derived rather than listed.
 */
type ColorKey = Exclude<
  { [K in keyof Theme]: Theme[K] extends string ? K : never }[keyof Theme],
  "viewerBg"
>;

const COLOR_KEYS = (Object.keys(THEMES.light) as (keyof Theme)[]).filter(
  (key): key is ColorKey => key !== "viewerBg" && typeof THEMES.light[key] === "string",
);

/** `var(--gufe-cardBg)` and the rest: what everything that writes CSS uses. */
export const V = Object.fromEntries(COLOR_KEYS.map((key) => [key, `var(${VAR_PREFIX}${key})`])) as Record<
  ColorKey,
  string
>;

const declarations = (theme: Theme): string =>
  COLOR_KEYS.map((key) => `${VAR_PREFIX}${key}:${theme[key]};`).join("");

/**
 * The whole stylesheet: the palette, and the handful of rules that are better
 * said once in CSS than wired up per element in JavaScript.
 *
 * Light is the bare `:root` so that it is also the fallback for a host with no
 * `prefers-color-scheme` at all. Dark arrives twice: under the media query,
 * guarded so an explicit `light` beats the host, and under the explicit `dark`
 * attribute, so the switch wins in both directions.
 */
export function themeStyleSheet(): string {
  return [
    `:root{color-scheme:light dark;${declarations(THEMES.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${THEME_ATTRIBUTE}="light"]){${declarations(THEMES.dark)}}}`,
    `:root[${THEME_ATTRIBUTE}="dark"]{${declarations(THEMES.dark)}}`,
    // A button's three states, in one place. Every button in the codebase is
    // built from `BUTTON.base`, which deliberately sets no background: these do,
    // so that hovering is a stylesheet rule rather than a pair of handlers on
    // every button, written slightly differently each time.
    `.gufe-btn{background:${V.btnBg};}`,
    `.gufe-btn:hover:not(:disabled){background:${V.btnBgHover};}`,
    `.gufe-btn[aria-pressed="true"],.gufe-btn[aria-expanded="true"],.gufe-btn[data-gufe-on="1"]` +
      `{background:${V.btnBgActive};}`,
    `.gufe-btn:disabled{opacity:.5;cursor:default;}`,
    // The same for a pickable card or row, whose selected state is `aria-pressed`
    // for the same reason: it is the accessible fact, so styling from it cannot
    // drift out of step with what a screen reader is told.
    `.gufe-pick{background:${V.cardBg};border-color:${V.cardBorder};}`,
    `.gufe-pick:hover{background:${V.cardBgHover};}`,
    `.gufe-pick[aria-pressed="true"]{background:${V.cardBgActive};border-color:${V.cardBorderActive};}`,
    // A chip that selects what it counts. Its resting state is no background at
    // all - it is a count in a row of counts, not a control asking to be pressed
    // - so it is its own rule rather than a `gufe-pick` with the ground removed.
    `.gufe-chip{background:none;}`,
    `.gufe-chip:hover{background:${V.cardBgHover};}`,
    `.gufe-chip[aria-pressed="true"]{background:${V.cardBgActive};color:${V.textPrimary};}`,
  ].join("\n");
}

/** Where the sheet goes, so a second evaluation of the bundle finds it. */
const STYLE_ELEMENT_ID = "gufe-viz-theme";

/**
 * Put the palette in the document, once.
 *
 * Called from `GufeElement.connectedCallback`, which every view goes through, so
 * no host has to know this exists. Idempotent by id: the bundle can legitimately
 * be evaluated twice on one page, exactly as `defineElement` allows for.
 */
export function installTheme(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ELEMENT_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ELEMENT_ID;
  style.textContent = themeStyleSheet();
  document.head.appendChild(style);
}

/**
 * Switch the palette.
 *
 * The chrome follows immediately, because all of it is `var()`. What a view has
 * already *drawn* does not: an SVG node's `fill` is an attribute and a 3Dmol
 * scene's background belongs to a WebGL context, and neither resolves a custom
 * property. Both follow on the next render, which for a `<gufe-*>` element is
 * setting `.payload` again.
 */
export function setTheme(next: ThemeChoice): void {
  choice = next;
  T = THEMES[currentTheme()];
  if (typeof document === "undefined") return;
  installTheme();
  const root = document.documentElement;
  if (next === "system") root.removeAttribute(THEME_ATTRIBUTE);
  else root.setAttribute(THEME_ATTRIBUTE, next);
}
