function N(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ie(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function ve(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Pt = (e) => e.toLocaleString("en-US"), Qe = "-", Un = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function ra(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const kc = 460;
function no(e, t, n = kc) {
  let r = null;
  return ra(e, (s) => {
    const o = s > 0 && s < n;
    o !== r && (r = o, t(o));
  });
}
const Je = {
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
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
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
    netGroupStroke: ["#4182e4", "#00bdaa", "#c060b8", "#e69f00", "#8f93a6"]
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
    warnBg: "#fee2e2",
    warnFg: "#991b1b",
    warnBorder: "#fecaca",
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
    netGroupStroke: ["#4182e4", "#009e8f", "#8a2283", "#c07d00", "#666666"]
  }
};
function Cc() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Fo = "data-gufe-theme";
function ro() {
  return Cc() ? "dark" : "light";
}
let ue = Je[ro()];
const oa = "--gufe-", sa = Object.keys(Je.light).filter(
  (e) => e !== "viewerBg" && typeof Je.light[e] == "string"
), I = Object.fromEntries(sa.map((e) => [e, `var(${oa}${e})`])), gr = (e) => sa.map((t) => `${oa}${t}:${e[t]};`).join("");
function Ec() {
  return [
    `:root{color-scheme:light dark;${gr(Je.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${Fo}="light"]){${gr(Je.dark)}}}`,
    `:root[${Fo}="dark"]{${gr(Je.dark)}}`,
    // A button's three states, in one place. Every button in the codebase is
    // built from `BUTTON.base`, which deliberately sets no background: these do,
    // so that hovering is a stylesheet rule rather than a pair of handlers on
    // every button, written slightly differently each time.
    `.gufe-btn{background:${I.btnBg};}`,
    `.gufe-btn:hover:not(:disabled){background:${I.btnBgHover};}`,
    `.gufe-btn[aria-pressed="true"],.gufe-btn[aria-expanded="true"],.gufe-btn[data-gufe-on="1"]{background:${I.btnBgActive};}`,
    ".gufe-btn:disabled{opacity:.5;cursor:default;}",
    // The same for a pickable card or row, whose selected state is `aria-pressed`
    // for the same reason: it is the accessible fact, so styling from it cannot
    // drift out of step with what a screen reader is told.
    `.gufe-pick{background:${I.cardBg};border-color:${I.cardBorder};}`,
    `.gufe-pick:hover{background:${I.cardBgHover};}`,
    `.gufe-pick[aria-pressed="true"]{background:${I.cardBgActive};border-color:${I.cardBorderActive};}`,
    // A chip that selects what it counts. Its resting state is no background at
    // all - it is a count in a row of counts, not a control asking to be pressed
    // - so it is its own rule rather than a `gufe-pick` with the ground removed.
    ".gufe-chip{background:none;}",
    `.gufe-chip:hover{background:${I.cardBgHover};}`,
    `.gufe-chip[aria-pressed="true"]{background:${I.cardBgActive};color:${I.textPrimary};}`
  ].join(`
`);
}
const zo = "alchemy-viz-theme";
function ia() {
  if (typeof document > "u" || document.getElementById(zo)) return;
  const e = document.createElement("style");
  e.id = zo, e.textContent = Ec(), document.head.appendChild(e);
}
const Q = {
  family: "'Inter',system-ui,sans-serif",
  mono: "ui-monospace,SFMono-Regular,Menlo,monospace",
  /** Label captions and dense readouts. */
  tiny: "10px",
  /** The default for chrome: chips, legends, list rows. */
  small: "11px",
  /** Body text, toolbars, form controls. */
  body: "12px",
  /** Pane labels and anything heading a section of a view. */
  heading: "13px",
  /** A view's title. */
  title: "15px",
  /**
   * The one value a card is built around: a formula, a concentration. Large
   * enough that a reader takes it from the shape of the card rather than from
   * reading a row, which is the only reason to use it - a card with two of
   * these has no hierarchy left.
   */
  display: "26px"
}, ge = {
  normal: "400",
  bold: "700"
}, ee = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Pe = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px"
}, xe = {
  title: I.titleColor,
  primary: I.textPrimary,
  muted: I.textMuted,
  faint: I.textMuted2,
  error: I.errorFg
}, qt = {
  card: I.cardBg,
  /**
   * Where a 3D engine draws. Interface, not chemistry: it is the paper.
   *
   * The one literal here, and a function so it is read when a viewer is built
   * rather than when this module loads. 3Dmol wants `0x2b2b40`, which is not a
   * colour CSS has ever heard of, so this is the one surface a custom property
   * cannot carry.
   */
  viewer: () => ue.viewerBg
}, jo = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${I.btnFg};border:1px solid ${I.btnBorder};padding:${ee.sm} 9px;font-size:${Q.small};font-weight:${ge.bold};border-radius:${Pe.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, aa = `background:${I.selectBg};color:${I.textPrimary};border:1px solid ${I.selectBorder};border-radius:${Pe.md};padding:${ee.sm} ${ee.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, ca = `${aa}width:100%;box-sizing:border-box;cursor:text;`, la = "24px", xc = `display:flex;align-items:flex-start;gap:12px;padding:9px ${ee.xxl};flex-shrink:0;line-height:${la};background:${I.toolbarBg};border-bottom:1px solid ${I.toolbarBorder};`, Gn = { min: "236px", max: "340px" }, et = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, da = `display:flex;flex-direction:column;gap:${ee.lg};flex:1;min-width:var(${et.min},${Gn.min});max-width:var(${et.max},${Gn.max});box-sizing:border-box;padding:${ee.xl};min-height:0;overflow-y:auto;background:${I.panelBg};border:0 solid ${I.splitBorder};border-right-width:var(${et.ruleX},1px);border-bottom-width:var(${et.ruleY},0);`, Ac = "45%", Pc = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Br = `display:flex;align-items:center;gap:${ee.xl};flex-wrap:wrap;padding:${ee.lg} ${ee.xxl};flex-shrink:0;background:${I.toolbarBg};border-top:1px solid ${I.toolbarBorder};`, Rc = `flex-shrink:0;padding:${ee.sm} ${ee.xl};font-size:${Q.heading};font-weight:${ge.bold};color:${I.labelFg};background:${I.labelBg};`, oo = `position:absolute;top:${ee.md};left:${ee.md};z-index:10;pointer-events:none;max-width:calc(100% - ${ee.xxl} - ${ee.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${ee.xs} ${ee.lg};border-radius:${Pe.md};font-size:${Q.heading};font-weight:${ge.bold};color:${I.labelFg};background:${I.labelBg};`, Mc = `padding:${ee.xs} ${ee.lg};border-radius:${Pe.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${I.labelFg};background:${I.labelBg};`, Nc = `position:absolute;top:${ee.lg};left:${ee.lg};z-index:15;display:flex;align-items:center;gap:${ee.md};min-width:0;max-width:calc(100% - ${ee.xxl} - ${ee.xxl});`, Tc = "42px", Oc = `display:flex;flex-direction:column;gap:${ee.xs};padding:${ee.xxl} 18px;border-radius:${Pe.xl};background:${I.cardBg};border:1px solid ${I.cardBorder};`, so = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${ee.sm};padding:${ee.lg} ${ee.xl};text-align:left;border-radius:${Pe.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Q.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${ee.md};padding:5px ${ee.lg};border:1px solid;border-radius:${ee.md};text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;color:${I.textPrimary};`,
  className: "gufe-pick"
}, Fc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${ee.xl};border-radius:${Pe.md};font-size:${Q.small};line-height:1.5;max-width:260px;background:${I.tooltipBg};border:1px solid ${I.tooltipBorder};color:${I.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, ua = `position:absolute;bottom:${ee.xl};right:${ee.xl};display:flex;gap:${ee.sm};padding:${ee.sm};border-radius:${Pe.md};z-index:10;background:${I.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, zc = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${I.textMuted};`, Vr = `font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${I.textMuted2};`, Ae = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${ee.xs} ${ee.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${ee.xs} ${ee.md};border:1px solid transparent;border-radius:${Pe.pill};font-family:inherit;font-size:${Q.small};color:${I.textMuted};`,
  /**
   * A chip that selects what it counts.
   *
   * Deliberately sets no `background`: like `BUTTON` and `PICK`, resting, hover
   * and picked are one stylesheet rule keyed off `aria-pressed`, and an inline
   * background would beat it. Pair it with `CHIP.className`.
   */
  button: `cursor:pointer;border-color:${I.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${I.btnBg};border-color:${I.btnBorder};color:${I.textPrimary};`,
  /**
   * What a `button` chip's border goes back to.
   *
   * The same value `button` sets, named so that a chip which overrides its
   * border to say something - the alchemical network's protocol chips, where the
   * picked one takes the colour its lines are drawn in - has a resting value to
   * put back without reaching into the palette for it.
   */
  restBorder: I.btnBorder,
  className: "gufe-chip"
}, jc = `font-size:${Q.small};line-height:1.6;color:${I.textMuted2};`;
function Ve(e, t, n) {
  const r = N("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const s = N("span");
  return s.innerHTML = `${Ie(e)} <b style="color:${xe.primary};">${Ie(t)}</b>`, r.appendChild(s), r;
}
function dt(e, t) {
  const n = N("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ee.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ee.md} ${ee.xxl};border-radius:${Pe.md};font-size:${Q.body};background:${I.warnBg};color:${I.warnFg};border:1px solid ${I.warnBorder};`, e.appendChild(n), n;
}
function $e(e, t = !1) {
  return N(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? xe.error : xe.faint};`,
    e
  );
}
function Zn(e) {
  const t = N("div", xc);
  return t.className = "gufe-header", t.titleEl = N(
    "span",
    `font-weight:${ge.bold};font-size:${Q.title};color:${xe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = N(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${xe.muted};`
  ), t.textEl = N("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = N("div", `display:flex;align-items:center;height:${la};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Wn(e, t, n = !1) {
  const r = N("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    N(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${xe.faint};`,
      e
    )
  );
  const s = N(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${xe.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return s.title = t, r.appendChild(s), r;
}
function Qn(e) {
  return N(
    "span",
    `padding:1px 7px;border-radius:${Pe.xl};font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.04em;white-space:nowrap;background:${I.badgeBg};color:${I.badgeFg};`,
    e
  );
}
function io() {
  return N("div", Oc);
}
function fa() {
  const e = N("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = N("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Ur = "data-gufe-hide-name";
function ao(e) {
  return !e.closest(`[${Ur}]`);
}
const Ic = ["debug", "gufe-debug"], Dc = "debug", Lc = "ALCHEMY_VIZ_DEBUG";
function qc() {
  return !!globalThis[Lc];
}
function Bc() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Ic.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Vc(e) {
  return e?.hasAttribute?.(Dc) ? !0 : qc() || Bc();
}
function Uc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ve(t)}>`;
  }
}
function Hc(e, t, n) {
  if (!Vc(n)) return;
  const r = Uc(t), s = t?.type, o = `[alchemy-viz] ${e}${typeof s == "string" ? ` ${s}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), i && console.groupEnd?.();
}
const pa = "ALCHEMY_VIZ_VIEW_STATE";
function ha(e) {
  const t = globalThis[pa];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
function co() {
  let e = 0, t = !0;
  return {
    start() {
      const n = ++e;
      return () => t && n === e;
    },
    stop() {
      t = !1, e++;
    }
  };
}
const Kc = 150, Io = "data-gufe-shell";
class Fe extends HTMLElement {
  #e = null;
  #t = null;
  #n = null;
  #r = null;
  #o = null;
  /**
   * Bumped by every teardown. A render captures it and refuses to adopt its
   * handle if it has moved on - which is what stops a slow view (3Dmol behind a
   * CDN fetch) from installing itself into an element that has since been given
   * a different payload, or removed from the document entirely.
   */
  #s = 0;
  /** The message shown before any payload arrives. */
  placeholder() {
    return "Waiting for data...";
  }
  set payload(t) {
    this.#e = t, this.isConnected && this.#a();
  }
  get payload() {
    return this.#e;
  }
  connectedCallback() {
    ia(), this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Io}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = I.appBg, this.style.color = I.textPrimary, this.style.fontFamily = Q.family, typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), Kc);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#i(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #i() {
    if (this.#s++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#t?.cleanup)
      try {
        this.#t.cleanup();
      } catch (t) {
        console.warn("[alchemy-viz] cleanup failed:", t);
      }
    this.#t = null, this.replaceChildren(), this.#n = null;
  }
  /**
   * Whether nothing has given this element a `max-height` already - inline, or
   * in a stylesheet, which is how a page raises the ceiling above.
   */
  #d() {
    if (typeof getComputedStyle != "function") return !0;
    const t = getComputedStyle(this).maxHeight;
    return !t || t === "none";
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #u() {
    return this.#i(), this.#n = N(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${I.appBg};`
    ), this.#n.setAttribute(Io, ""), this.appendChild(this.#n), this.#n;
  }
  /**
   * Build the view for the current payload.
   *
   * Deliberately *not* an `async` method. A synchronous `renderView` - which is
   * what the current views are - must install its handle before this returns,
   * or two `payload` assignments in a row would tear down nothing the first
   * time and leak the first view's viewer. An `await` here would defer that
   * assignment by a microtask and do exactly that.
   */
  #a() {
    const t = this.#u(), n = this.#s;
    if (this.#e == null) {
      t.appendChild($e(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#e);
    } catch (s) {
      this.#l(t, n, s);
      return;
    }
    r instanceof Promise ? r.then(
      (s) => this.#c(s, n),
      (s) => this.#l(t, n, s)
    ) : this.#c(r, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (r) {
        console.warn("[alchemy-viz] cleanup of a superseded view failed:", r);
      }
      return;
    }
    this.#t = t || null;
  }
  #l(t, n, r) {
    n === this.#s && (console.warn("[alchemy-viz] render failed:", r), t.replaceChildren($e(`Failed to render: ${ve(r)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#t?.onResize?.();
  }
  /**
   * What the mounted view would need to be restored as it is now, or null when
   * it has nothing to say. See `ViewHandle.viewState`.
   */
  viewState() {
    return this.#t?.viewState?.() ?? null;
  }
}
function ze(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = { exports: {} }, yr = {}, Ue = {}, ot = {}, $r = {}, br = {}, vr = {}, Do;
function Jn() {
  return Do || (Do = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(f) {
        if (super(), !e.IDENTIFIER.test(f))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = f;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = n;
    class r extends t {
      constructor(f) {
        super(), this._items = typeof f == "string" ? [f] : f;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const f = this._items[0];
        return f === "" || f === '""';
      }
      get str() {
        var f;
        return (f = this._str) !== null && f !== void 0 ? f : this._str = this._items.reduce((k, _) => `${k}${_}`, "");
      }
      get names() {
        var f;
        return (f = this._names) !== null && f !== void 0 ? f : this._names = this._items.reduce((k, _) => (_ instanceof n && (k[_.str] = (k[_.str] || 0) + 1), k), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function s(g, ...f) {
      const k = [g[0]];
      let _ = 0;
      for (; _ < f.length; )
        a(k, f[_]), k.push(g[++_]);
      return new r(k);
    }
    e._ = s;
    const o = new r("+");
    function i(g, ...f) {
      const k = [y(g[0])];
      let _ = 0;
      for (; _ < f.length; )
        k.push(o), a(k, f[_]), k.push(o, y(g[++_]));
      return c(k), new r(k);
    }
    e.str = i;
    function a(g, f) {
      f instanceof r ? g.push(...f._items) : f instanceof n ? g.push(f) : g.push(m(f));
    }
    e.addCodeArg = a;
    function c(g) {
      let f = 1;
      for (; f < g.length - 1; ) {
        if (g[f] === o) {
          const k = l(g[f - 1], g[f + 1]);
          if (k !== void 0) {
            g.splice(f - 1, 3, k);
            continue;
          }
          g[f++] = "+";
        }
        f++;
      }
    }
    function l(g, f) {
      if (f === '""')
        return g;
      if (g === '""')
        return f;
      if (typeof g == "string")
        return f instanceof n || g[g.length - 1] !== '"' ? void 0 : typeof f != "string" ? `${g.slice(0, -1)}${f}"` : f[0] === '"' ? g.slice(0, -1) + f.slice(1) : void 0;
      if (typeof f == "string" && f[0] === '"' && !(g instanceof n))
        return `"${g}${f.slice(1)}`;
    }
    function d(g, f) {
      return f.emptyStr() ? g : g.emptyStr() ? f : i`${g}${f}`;
    }
    e.strConcat = d;
    function m(g) {
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : y(Array.isArray(g) ? g.join(",") : g);
    }
    function v(g) {
      return new r(y(g));
    }
    e.stringify = v;
    function y(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function b(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new r(`.${g}`) : s`[${g}]`;
    }
    e.getProperty = b;
    function w(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new r(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function h(g) {
      return new r(g.toString());
    }
    e.regexpCode = h;
  })(vr)), vr;
}
var wr = {}, Lo;
function qo() {
  return Lo || (Lo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Jn();
    class n extends Error {
      constructor(l) {
        super(`CodeGen: "code" for ${l} not defined`), this.value = l.value;
      }
    }
    var r;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class s {
      constructor({ prefixes: l, parent: d } = {}) {
        this._names = {}, this._prefixes = l, this._parent = d;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const d = this._names[l] || this._nameGroup(l);
        return `${l}${d.index++}`;
      }
      _nameGroup(l) {
        var d, m;
        if (!((m = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null || m === void 0) && m.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = s;
    class o extends t.Name {
      constructor(l, d) {
        super(d), this.prefix = l;
      }
      setValue(l, { property: d, itemIndex: m }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(d)}[${m}]`;
      }
    }
    e.ValueScopeName = o;
    const i = (0, t._)`\n`;
    class a extends s {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new o(l, this._newName(l));
      }
      value(l, d) {
        var m;
        if (d.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const v = this.toName(l), { prefix: y } = v, b = (m = d.key) !== null && m !== void 0 ? m : d.ref;
        let w = this._values[y];
        if (w) {
          const f = w.get(b);
          if (f)
            return f;
        } else
          w = this._values[y] = /* @__PURE__ */ new Map();
        w.set(b, v);
        const h = this._scope[y] || (this._scope[y] = []), g = h.length;
        return h[g] = d.ref, v.setValue(d, { property: y, itemIndex: g }), v;
      }
      getValue(l, d) {
        const m = this._values[l];
        if (m)
          return m.get(d);
      }
      scopeRefs(l, d = this._values) {
        return this._reduceValues(d, (m) => {
          if (m.scopePath === void 0)
            throw new Error(`CodeGen: name "${m}" has no value`);
          return (0, t._)`${l}${m.scopePath}`;
        });
      }
      scopeCode(l = this._values, d, m) {
        return this._reduceValues(l, (v) => {
          if (v.value === void 0)
            throw new Error(`CodeGen: name "${v}" has no value`);
          return v.value.code;
        }, d, m);
      }
      _reduceValues(l, d, m = {}, v) {
        let y = t.nil;
        for (const b in l) {
          const w = l[b];
          if (!w)
            continue;
          const h = m[b] = m[b] || /* @__PURE__ */ new Map();
          w.forEach((g) => {
            if (h.has(g))
              return;
            h.set(g, r.Started);
            let f = d(g);
            if (f) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${k} ${g} = ${f};${this.opts._n}`;
            } else if (f = v?.(g))
              y = (0, t._)`${y}${f}${this.opts._n}`;
            else
              throw new n(g);
            h.set(g, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(wr)), wr;
}
var Bo;
function ie() {
  return Bo || (Bo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Jn(), n = /* @__PURE__ */ qo();
    var r = /* @__PURE__ */ Jn();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return r.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return r.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return r.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } });
    var s = /* @__PURE__ */ qo();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return s.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return s.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return s.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return s.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class o {
      optimizeNodes() {
        return this;
      }
      optimizeNames(S, P) {
        return this;
      }
    }
    class i extends o {
      constructor(S, P, L) {
        super(), this.varKind = S, this.name = P, this.rhs = L;
      }
      render({ es5: S, _n: P }) {
        const L = S ? n.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${L} ${this.name}${K};` + P;
      }
      optimizeNames(S, P) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = z(this.rhs, S, P)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(S, P, L) {
        super(), this.lhs = S, this.rhs = P, this.sideEffects = L;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, P) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = z(this.rhs, S, P), this;
      }
      get names() {
        const S = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(S, this.rhs);
      }
    }
    class c extends a {
      constructor(S, P, L, K) {
        super(S, L, K), this.op = P;
      }
      render({ _n: S }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + S;
      }
    }
    class l extends o {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `${this.label}:` + S;
      }
    }
    class d extends o {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `break${this.label ? ` ${this.label}` : ""};` + S;
      }
    }
    class m extends o {
      constructor(S) {
        super(), this.error = S;
      }
      render({ _n: S }) {
        return `throw ${this.error};` + S;
      }
      get names() {
        return this.error.names;
      }
    }
    class v extends o {
      constructor(S) {
        super(), this.code = S;
      }
      render({ _n: S }) {
        return `${this.code};` + S;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(S, P) {
        return this.code = z(this.code, S, P), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends o {
      constructor(S = []) {
        super(), this.nodes = S;
      }
      render(S) {
        return this.nodes.reduce((P, L) => P + L.render(S), "");
      }
      optimizeNodes() {
        const { nodes: S } = this;
        let P = S.length;
        for (; P--; ) {
          const L = S[P].optimizeNodes();
          Array.isArray(L) ? S.splice(P, 1, ...L) : L ? S[P] = L : S.splice(P, 1);
        }
        return S.length > 0 ? this : void 0;
      }
      optimizeNames(S, P) {
        const { nodes: L } = this;
        let K = L.length;
        for (; K--; ) {
          const te = L[K];
          te.optimizeNames(S, P) || (V(S, te.names), L.splice(K, 1));
        }
        return L.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, P) => R(S, P.names), {});
      }
    }
    class b extends y {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class w extends y {
    }
    class h extends b {
    }
    h.kind = "else";
    class g extends b {
      constructor(S, P) {
        super(P), this.condition = S;
      }
      render(S) {
        let P = `if(${this.condition})` + super.render(S);
        return this.else && (P += "else " + this.else.render(S)), P;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const S = this.condition;
        if (S === !0)
          return this.nodes;
        let P = this.else;
        if (P) {
          const L = P.optimizeNodes();
          P = this.else = Array.isArray(L) ? new h(L) : L;
        }
        if (P)
          return S === !1 ? P instanceof g ? P : P.nodes : this.nodes.length ? this : new g(G(S), P instanceof g ? [P] : P.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, P) {
        var L;
        if (this.else = (L = this.else) === null || L === void 0 ? void 0 : L.optimizeNames(S, P), !!(super.optimizeNames(S, P) || this.else))
          return this.condition = z(this.condition, S, P), this;
      }
      get names() {
        const S = super.names;
        return D(S, this.condition), this.else && R(S, this.else.names), S;
      }
    }
    g.kind = "if";
    class f extends b {
    }
    f.kind = "for";
    class k extends f {
      constructor(S) {
        super(), this.iteration = S;
      }
      render(S) {
        return `for(${this.iteration})` + super.render(S);
      }
      optimizeNames(S, P) {
        if (super.optimizeNames(S, P))
          return this.iteration = z(this.iteration, S, P), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class _ extends f {
      constructor(S, P, L, K) {
        super(), this.varKind = S, this.name = P, this.from = L, this.to = K;
      }
      render(S) {
        const P = S.es5 ? n.varKinds.var : this.varKind, { name: L, from: K, to: te } = this;
        return `for(${P} ${L}=${K}; ${L}<${te}; ${L}++)` + super.render(S);
      }
      get names() {
        const S = D(super.names, this.from);
        return D(S, this.to);
      }
    }
    class u extends f {
      constructor(S, P, L, K) {
        super(), this.loop = S, this.varKind = P, this.name = L, this.iterable = K;
      }
      render(S) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(S);
      }
      optimizeNames(S, P) {
        if (super.optimizeNames(S, P))
          return this.iterable = z(this.iterable, S, P), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class p extends b {
      constructor(S, P, L) {
        super(), this.name = S, this.args = P, this.async = L;
      }
      render(S) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(S);
      }
    }
    p.kind = "func";
    class $ extends y {
      render(S) {
        return "return " + super.render(S);
      }
    }
    $.kind = "return";
    class C extends b {
      render(S) {
        let P = "try" + super.render(S);
        return this.catch && (P += this.catch.render(S)), this.finally && (P += this.finally.render(S)), P;
      }
      optimizeNodes() {
        var S, P;
        return super.optimizeNodes(), (S = this.catch) === null || S === void 0 || S.optimizeNodes(), (P = this.finally) === null || P === void 0 || P.optimizeNodes(), this;
      }
      optimizeNames(S, P) {
        var L, K;
        return super.optimizeNames(S, P), (L = this.catch) === null || L === void 0 || L.optimizeNames(S, P), (K = this.finally) === null || K === void 0 || K.optimizeNames(S, P), this;
      }
      get names() {
        const S = super.names;
        return this.catch && R(S, this.catch.names), this.finally && R(S, this.finally.names), S;
      }
    }
    class A extends b {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    A.kind = "catch";
    class E extends b {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    E.kind = "finally";
    class O {
      constructor(S, P = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...P, _n: P.lines ? `
` : "" }, this._extScope = S, this._scope = new n.Scope({ parent: S }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(S) {
        return this._scope.name(S);
      }
      // reserves unique name in the external scope
      scopeName(S) {
        return this._extScope.name(S);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(S, P) {
        const L = this._extScope.value(S, P);
        return (this._values[L.prefix] || (this._values[L.prefix] = /* @__PURE__ */ new Set())).add(L), L;
      }
      getScopeValue(S, P) {
        return this._extScope.getValue(S, P);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(S) {
        return this._extScope.scopeRefs(S, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(S, P, L, K) {
        const te = this._scope.toName(P);
        return L !== void 0 && K && (this._constants[te.str] = L), this._leafNode(new i(S, te, L)), te;
      }
      // `const` declaration (`var` in es5 mode)
      const(S, P, L) {
        return this._def(n.varKinds.const, S, P, L);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(S, P, L) {
        return this._def(n.varKinds.let, S, P, L);
      }
      // `var` declaration with optional assignment
      var(S, P, L) {
        return this._def(n.varKinds.var, S, P, L);
      }
      // assignment code
      assign(S, P, L) {
        return this._leafNode(new a(S, P, L));
      }
      // `+=` code
      add(S, P) {
        return this._leafNode(new c(S, e.operators.ADD, P));
      }
      // appends passed SafeExpr to code or executes Block
      code(S) {
        return typeof S == "function" ? S() : S !== t.nil && this._leafNode(new v(S)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...S) {
        const P = ["{"];
        for (const [L, K] of S)
          P.length > 1 && P.push(","), P.push(L), (L !== K || this.opts.es5) && (P.push(":"), (0, t.addCodeArg)(P, K));
        return P.push("}"), new t._Code(P);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(S, P, L) {
        if (this._blockNode(new g(S)), P && L)
          this.code(P).else().code(L).endIf();
        else if (P)
          this.code(P).endIf();
        else if (L)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(S) {
        return this._elseNode(new g(S));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, h);
      }
      _for(S, P) {
        return this._blockNode(S), P && this.code(P).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, P) {
        return this._for(new k(S), P);
      }
      // `for` statement for a range of values
      forRange(S, P, L, K, te = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Y = this._scope.toName(S);
        return this._for(new _(te, Y, P, L), () => K(Y));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, P, L, K = n.varKinds.const) {
        const te = this._scope.toName(S);
        if (this.opts.es5) {
          const Y = P instanceof t.Name ? P : this.var("_arr", P);
          return this.forRange("_i", 0, (0, t._)`${Y}.length`, (ne) => {
            this.var(te, (0, t._)`${Y}[${ne}]`), L(te);
          });
        }
        return this._for(new u("of", K, te, P), () => L(te));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, P, L, K = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${P})`, L);
        const te = this._scope.toName(S);
        return this._for(new u("in", K, te, P), () => L(te));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(f);
      }
      // `label` statement
      label(S) {
        return this._leafNode(new l(S));
      }
      // `break` statement
      break(S) {
        return this._leafNode(new d(S));
      }
      // `return` statement
      return(S) {
        const P = new $();
        if (this._blockNode(P), this.code(S), P.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode($);
      }
      // `try` statement
      try(S, P, L) {
        if (!P && !L)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new C();
        if (this._blockNode(K), this.code(S), P) {
          const te = this.name("e");
          this._currNode = K.catch = new A(te), P(te);
        }
        return L && (this._currNode = K.finally = new E(), this.code(L)), this._endBlockNode(A, E);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new m(S));
      }
      // start self-balancing block
      block(S, P) {
        return this._blockStarts.push(this._nodes.length), S && this.code(S).endBlock(P), this;
      }
      // end the current self-balancing block
      endBlock(S) {
        const P = this._blockStarts.pop();
        if (P === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const L = this._nodes.length - P;
        if (L < 0 || S !== void 0 && L !== S)
          throw new Error(`CodeGen: wrong number of nodes: ${L} vs ${S} expected`);
        return this._nodes.length = P, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(S, P = t.nil, L, K) {
        return this._blockNode(new p(S, P, L)), K && this.code(K).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(p);
      }
      optimize(S = 1) {
        for (; S-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(S) {
        return this._currNode.nodes.push(S), this;
      }
      _blockNode(S) {
        this._currNode.nodes.push(S), this._nodes.push(S);
      }
      _endBlockNode(S, P) {
        const L = this._currNode;
        if (L instanceof S || P && L instanceof P)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${P ? `${S.kind}/${P.kind}` : S.kind}"`);
      }
      _elseNode(S) {
        const P = this._currNode;
        if (!(P instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = P.else = S, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const S = this._nodes;
        return S[S.length - 1];
      }
      set _currNode(S) {
        const P = this._nodes;
        P[P.length - 1] = S;
      }
    }
    e.CodeGen = O;
    function R(j, S) {
      for (const P in S)
        j[P] = (j[P] || 0) + (S[P] || 0);
      return j;
    }
    function D(j, S) {
      return S instanceof t._CodeOrName ? R(j, S.names) : j;
    }
    function z(j, S, P) {
      if (j instanceof t.Name)
        return L(j);
      if (!K(j))
        return j;
      return new t._Code(j._items.reduce((te, Y) => (Y instanceof t.Name && (Y = L(Y)), Y instanceof t._Code ? te.push(...Y._items) : te.push(Y), te), []));
      function L(te) {
        const Y = P[te.str];
        return Y === void 0 || S[te.str] !== 1 ? te : (delete S[te.str], Y);
      }
      function K(te) {
        return te instanceof t._Code && te._items.some((Y) => Y instanceof t.Name && S[Y.str] === 1 && P[Y.str] !== void 0);
      }
    }
    function V(j, S) {
      for (const P in S)
        j[P] = (j[P] || 0) - (S[P] || 0);
    }
    function G(j) {
      return typeof j == "boolean" || typeof j == "number" || j === null ? !j : (0, t._)`!${H(j)}`;
    }
    e.not = G;
    const oe = F(e.operators.AND);
    function X(...j) {
      return j.reduce(oe);
    }
    e.and = X;
    const re = F(e.operators.OR);
    function W(...j) {
      return j.reduce(re);
    }
    e.or = W;
    function F(j) {
      return (S, P) => S === t.nil ? P : P === t.nil ? S : (0, t._)`${H(S)} ${j} ${H(P)}`;
    }
    function H(j) {
      return j instanceof t.Name ? j : (0, t._)`(${j})`;
    }
  })(br)), br;
}
var ce = {}, Vo;
function de() {
  if (Vo) return ce;
  Vo = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.checkStrictMode = ce.getErrorPath = ce.Type = ce.useFunc = ce.setEvaluated = ce.evaluatedPropsToName = ce.mergeEvaluated = ce.eachItem = ce.unescapeJsonPointer = ce.escapeJsonPointer = ce.escapeFragment = ce.unescapeFragment = ce.schemaRefOrVal = ce.schemaHasRulesButRef = ce.schemaHasRules = ce.checkUnknownRules = ce.alwaysValidSchema = ce.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Jn();
  function n(u) {
    const p = {};
    for (const $ of u)
      p[$] = !0;
    return p;
  }
  ce.toHash = n;
  function r(u, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (s(u, p), !o(p, u.self.RULES.all));
  }
  ce.alwaysValidSchema = r;
  function s(u, p = u.schema) {
    const { opts: $, self: C } = u;
    if (!$.strictSchema || typeof p == "boolean")
      return;
    const A = C.RULES.keywords;
    for (const E in p)
      A[E] || _(u, `unknown keyword: "${E}"`);
  }
  ce.checkUnknownRules = s;
  function o(u, p) {
    if (typeof u == "boolean")
      return !u;
    for (const $ in u)
      if (p[$])
        return !0;
    return !1;
  }
  ce.schemaHasRules = o;
  function i(u, p) {
    if (typeof u == "boolean")
      return !u;
    for (const $ in u)
      if ($ !== "$ref" && p.all[$])
        return !0;
    return !1;
  }
  ce.schemaHasRulesButRef = i;
  function a({ topSchemaRef: u, schemaPath: p }, $, C, A) {
    if (!A) {
      if (typeof $ == "number" || typeof $ == "boolean")
        return $;
      if (typeof $ == "string")
        return (0, e._)`${$}`;
    }
    return (0, e._)`${u}${p}${(0, e.getProperty)(C)}`;
  }
  ce.schemaRefOrVal = a;
  function c(u) {
    return m(decodeURIComponent(u));
  }
  ce.unescapeFragment = c;
  function l(u) {
    return encodeURIComponent(d(u));
  }
  ce.escapeFragment = l;
  function d(u) {
    return typeof u == "number" ? `${u}` : u.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ce.escapeJsonPointer = d;
  function m(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ce.unescapeJsonPointer = m;
  function v(u, p) {
    if (Array.isArray(u))
      for (const $ of u)
        p($);
    else
      p(u);
  }
  ce.eachItem = v;
  function y({ mergeNames: u, mergeToName: p, mergeValues: $, resultToName: C }) {
    return (A, E, O, R) => {
      const D = O === void 0 ? E : O instanceof e.Name ? (E instanceof e.Name ? u(A, E, O) : p(A, E, O), O) : E instanceof e.Name ? (p(A, O, E), E) : $(E, O);
      return R === e.Name && !(D instanceof e.Name) ? C(A, D) : D;
    };
  }
  ce.mergeEvaluated = {
    props: y({
      mergeNames: (u, p, $) => u.if((0, e._)`${$} !== true && ${p} !== undefined`, () => {
        u.if((0, e._)`${p} === true`, () => u.assign($, !0), () => u.assign($, (0, e._)`${$} || {}`).code((0, e._)`Object.assign(${$}, ${p})`));
      }),
      mergeToName: (u, p, $) => u.if((0, e._)`${$} !== true`, () => {
        p === !0 ? u.assign($, !0) : (u.assign($, (0, e._)`${$} || {}`), w(u, $, p));
      }),
      mergeValues: (u, p) => u === !0 ? !0 : { ...u, ...p },
      resultToName: b
    }),
    items: y({
      mergeNames: (u, p, $) => u.if((0, e._)`${$} !== true && ${p} !== undefined`, () => u.assign($, (0, e._)`${p} === true ? true : ${$} > ${p} ? ${$} : ${p}`)),
      mergeToName: (u, p, $) => u.if((0, e._)`${$} !== true`, () => u.assign($, p === !0 ? !0 : (0, e._)`${$} > ${p} ? ${$} : ${p}`)),
      mergeValues: (u, p) => u === !0 ? !0 : Math.max(u, p),
      resultToName: (u, p) => u.var("items", p)
    })
  };
  function b(u, p) {
    if (p === !0)
      return u.var("props", !0);
    const $ = u.var("props", (0, e._)`{}`);
    return p !== void 0 && w(u, $, p), $;
  }
  ce.evaluatedPropsToName = b;
  function w(u, p, $) {
    Object.keys($).forEach((C) => u.assign((0, e._)`${p}${(0, e.getProperty)(C)}`, !0));
  }
  ce.setEvaluated = w;
  const h = {};
  function g(u, p) {
    return u.scopeValue("func", {
      ref: p,
      code: h[p.code] || (h[p.code] = new t._Code(p.code))
    });
  }
  ce.useFunc = g;
  var f;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(f || (ce.Type = f = {}));
  function k(u, p, $) {
    if (u instanceof e.Name) {
      const C = p === f.Num;
      return $ ? C ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : C ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return $ ? (0, e.getProperty)(u).toString() : "/" + d(u);
  }
  ce.getErrorPath = k;
  function _(u, p, $ = u.opts.strictSchema) {
    if ($) {
      if (p = `strict mode: ${p}`, $ === !0)
        throw new Error(p);
      u.self.logger.warn(p);
    }
  }
  return ce.checkStrictMode = _, ce;
}
var Vt = {}, Uo;
function De() {
  if (Uo) return Vt;
  Uo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return Vt.default = t, Vt;
}
var Ho;
function er() {
  return Ho || (Ho = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ De();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: g }) => g ? (0, t.str)`"${h}" keyword must be ${g} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function s(h, g = e.keywordError, f, k) {
      const { it: _ } = h, { gen: u, compositeRule: p, allErrors: $ } = _, C = m(h, g, f);
      k ?? (p || $) ? c(u, C) : l(_, (0, t._)`[${C}]`);
    }
    e.reportError = s;
    function o(h, g = e.keywordError, f) {
      const { it: k } = h, { gen: _, compositeRule: u, allErrors: p } = k, $ = m(h, g, f);
      c(_, $), u || p || l(k, r.default.vErrors);
    }
    e.reportExtraError = o;
    function i(h, g) {
      h.assign(r.default.errors, g), h.if((0, t._)`${r.default.vErrors} !== null`, () => h.if(g, () => h.assign((0, t._)`${r.default.vErrors}.length`, g), () => h.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: h, keyword: g, schemaValue: f, data: k, errsCount: _, it: u }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const p = h.name("err");
      h.forRange("i", _, r.default.errors, ($) => {
        h.const(p, (0, t._)`${r.default.vErrors}[${$}]`), h.if((0, t._)`${p}.instancePath === undefined`, () => h.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(r.default.instancePath, u.errorPath))), h.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${g}`), u.opts.verbose && (h.assign((0, t._)`${p}.schema`, f), h.assign((0, t._)`${p}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(h, g) {
      const f = h.const("err", g);
      h.if((0, t._)`${r.default.vErrors} === null`, () => h.assign(r.default.vErrors, (0, t._)`[${f}]`), (0, t._)`${r.default.vErrors}.push(${f})`), h.code((0, t._)`${r.default.errors}++`);
    }
    function l(h, g) {
      const { gen: f, validateName: k, schemaEnv: _ } = h;
      _.$async ? f.throw((0, t._)`new ${h.ValidationError}(${g})`) : (f.assign((0, t._)`${k}.errors`, g), f.return(!1));
    }
    const d = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function m(h, g, f) {
      const { createErrors: k } = h.it;
      return k === !1 ? (0, t._)`{}` : v(h, g, f);
    }
    function v(h, g, f = {}) {
      const { gen: k, it: _ } = h, u = [
        y(_, f),
        b(h, f)
      ];
      return w(h, g, u), k.object(...u);
    }
    function y({ errorPath: h }, { instancePath: g }) {
      const f = g ? (0, t.str)`${h}${(0, n.getErrorPath)(g, n.Type.Str)}` : h;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, f)];
    }
    function b({ keyword: h, it: { errSchemaPath: g } }, { schemaPath: f, parentSchema: k }) {
      let _ = k ? g : (0, t.str)`${g}/${h}`;
      return f && (_ = (0, t.str)`${_}${(0, n.getErrorPath)(f, n.Type.Str)}`), [d.schemaPath, _];
    }
    function w(h, { params: g, message: f }, k) {
      const { keyword: _, data: u, schemaValue: p, it: $ } = h, { opts: C, propertyName: A, topSchemaRef: E, schemaPath: O } = $;
      k.push([d.keyword, _], [d.params, typeof g == "function" ? g(h) : g || (0, t._)`{}`]), C.messages && k.push([d.message, typeof f == "function" ? f(h) : f]), C.verbose && k.push([d.schema, p], [d.parentSchema, (0, t._)`${E}${O}`], [r.default.data, u]), A && k.push([d.propertyName, A]);
    }
  })($r)), $r;
}
var Ko;
function Wc() {
  if (Ko) return ot;
  Ko = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.boolOrEmptySchema = ot.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ De(), r = {
    message: "boolean schema is false"
  };
  function s(a) {
    const { gen: c, schema: l, validateName: d } = a;
    l === !1 ? i(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${d}.errors`, null), c.return(!0));
  }
  ot.topBoolOrEmptySchema = s;
  function o(a, c) {
    const { gen: l, schema: d } = a;
    d === !1 ? (l.var(c, !1), i(a)) : l.var(c, !0);
  }
  ot.boolOrEmptySchema = o;
  function i(a, c) {
    const { gen: l, data: d } = a, m = {
      gen: l,
      keyword: "false schema",
      data: d,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(m, r, void 0, c);
  }
  return ot;
}
var we = {}, st = {}, Go;
function ma() {
  if (Go) return st;
  Go = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.getRules = st.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(s) {
    return typeof s == "string" && t.has(s);
  }
  st.isJSONType = n;
  function r() {
    const s = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...s, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, s.number, s.string, s.array, s.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return st.getRules = r, st;
}
var He = {}, Wo;
function ga() {
  if (Wo) return He;
  Wo = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.shouldUseRule = He.shouldUseGroup = He.schemaHasRulesForType = void 0;
  function e({ schema: r, self: s }, o) {
    const i = s.RULES.types[o];
    return i && i !== !0 && t(r, i);
  }
  He.schemaHasRulesForType = e;
  function t(r, s) {
    return s.rules.some((o) => n(r, o));
  }
  He.shouldUseGroup = t;
  function n(r, s) {
    var o;
    return r[s.keyword] !== void 0 || ((o = s.definition.implements) === null || o === void 0 ? void 0 : o.some((i) => r[i] !== void 0));
  }
  return He.shouldUseRule = n, He;
}
var Jo;
function Yn() {
  if (Jo) return we;
  Jo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.reportTypeError = we.checkDataTypes = we.checkDataType = we.coerceAndCheckDataType = we.getJSONTypes = we.getSchemaTypes = we.DataType = void 0;
  const e = /* @__PURE__ */ ma(), t = /* @__PURE__ */ ga(), n = /* @__PURE__ */ er(), r = /* @__PURE__ */ ie(), s = /* @__PURE__ */ de();
  var o;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(o || (we.DataType = o = {}));
  function i(f) {
    const k = a(f.type);
    if (k.includes("null")) {
      if (f.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!k.length && f.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      f.nullable === !0 && k.push("null");
    }
    return k;
  }
  we.getSchemaTypes = i;
  function a(f) {
    const k = Array.isArray(f) ? f : f ? [f] : [];
    if (k.every(e.isJSONType))
      return k;
    throw new Error("type must be JSONType or JSONType[]: " + k.join(","));
  }
  we.getJSONTypes = a;
  function c(f, k) {
    const { gen: _, data: u, opts: p } = f, $ = d(k, p.coerceTypes), C = k.length > 0 && !($.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(f, k[0]));
    if (C) {
      const A = b(k, u, p.strictNumbers, o.Wrong);
      _.if(A, () => {
        $.length ? m(f, k, $) : h(f);
      });
    }
    return C;
  }
  we.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function d(f, k) {
    return k ? f.filter((_) => l.has(_) || k === "array" && _ === "array") : [];
  }
  function m(f, k, _) {
    const { gen: u, data: p, opts: $ } = f, C = u.let("dataType", (0, r._)`typeof ${p}`), A = u.let("coerced", (0, r._)`undefined`);
    $.coerceTypes === "array" && u.if((0, r._)`${C} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => u.assign(p, (0, r._)`${p}[0]`).assign(C, (0, r._)`typeof ${p}`).if(b(k, p, $.strictNumbers), () => u.assign(A, p))), u.if((0, r._)`${A} !== undefined`);
    for (const O of _)
      (l.has(O) || O === "array" && $.coerceTypes === "array") && E(O);
    u.else(), h(f), u.endIf(), u.if((0, r._)`${A} !== undefined`, () => {
      u.assign(p, A), v(f, A);
    });
    function E(O) {
      switch (O) {
        case "string":
          u.elseIf((0, r._)`${C} == "number" || ${C} == "boolean"`).assign(A, (0, r._)`"" + ${p}`).elseIf((0, r._)`${p} === null`).assign(A, (0, r._)`""`);
          return;
        case "number":
          u.elseIf((0, r._)`${C} == "boolean" || ${p} === null
              || (${C} == "string" && ${p} && ${p} == +${p})`).assign(A, (0, r._)`+${p}`);
          return;
        case "integer":
          u.elseIf((0, r._)`${C} === "boolean" || ${p} === null
              || (${C} === "string" && ${p} && ${p} == +${p} && !(${p} % 1))`).assign(A, (0, r._)`+${p}`);
          return;
        case "boolean":
          u.elseIf((0, r._)`${p} === "false" || ${p} === 0 || ${p} === null`).assign(A, !1).elseIf((0, r._)`${p} === "true" || ${p} === 1`).assign(A, !0);
          return;
        case "null":
          u.elseIf((0, r._)`${p} === "" || ${p} === 0 || ${p} === false`), u.assign(A, null);
          return;
        case "array":
          u.elseIf((0, r._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${p} === null`).assign(A, (0, r._)`[${p}]`);
      }
    }
  }
  function v({ gen: f, parentData: k, parentDataProperty: _ }, u) {
    f.if((0, r._)`${k} !== undefined`, () => f.assign((0, r._)`${k}[${_}]`, u));
  }
  function y(f, k, _, u = o.Correct) {
    const p = u === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let $;
    switch (f) {
      case "null":
        return (0, r._)`${k} ${p} null`;
      case "array":
        $ = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        $ = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        $ = C((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        $ = C();
        break;
      default:
        return (0, r._)`typeof ${k} ${p} ${f}`;
    }
    return u === o.Correct ? $ : (0, r.not)($);
    function C(A = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, A, _ ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  we.checkDataType = y;
  function b(f, k, _, u) {
    if (f.length === 1)
      return y(f[0], k, _, u);
    let p;
    const $ = (0, s.toHash)(f);
    if ($.array && $.object) {
      const C = (0, r._)`typeof ${k} != "object"`;
      p = $.null ? C : (0, r._)`!${k} || ${C}`, delete $.null, delete $.array, delete $.object;
    } else
      p = r.nil;
    $.number && delete $.integer;
    for (const C in $)
      p = (0, r.and)(p, y(C, k, _, u));
    return p;
  }
  we.checkDataTypes = b;
  const w = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: k }) => typeof f == "string" ? (0, r._)`{type: ${f}}` : (0, r._)`{type: ${k}}`
  };
  function h(f) {
    const k = g(f);
    (0, n.reportError)(k, w);
  }
  we.reportTypeError = h;
  function g(f) {
    const { gen: k, data: _, schema: u } = f, p = (0, s.schemaRefOrVal)(f, u, "type");
    return {
      gen: k,
      keyword: "type",
      data: _,
      schema: u.type,
      schemaCode: p,
      schemaValue: p,
      parentSchema: u,
      params: {},
      it: f
    };
  }
  return we;
}
var Rt = {}, Yo;
function Jc() {
  if (Yo) return Rt;
  Yo = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de();
  function n(s, o) {
    const { properties: i, items: a } = s.schema;
    if (o === "object" && i)
      for (const c in i)
        r(s, c, i[c].default);
    else o === "array" && Array.isArray(a) && a.forEach((c, l) => r(s, l, c.default));
  }
  Rt.assignDefaults = n;
  function r(s, o, i) {
    const { gen: a, compositeRule: c, data: l, opts: d } = s;
    if (i === void 0)
      return;
    const m = (0, e._)`${l}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(s, `default is ignored for: ${m}`);
      return;
    }
    let v = (0, e._)`${m} === undefined`;
    d.useDefaults === "empty" && (v = (0, e._)`${v} || ${m} === null || ${m} === ""`), a.if(v, (0, e._)`${m} = ${(0, e.stringify)(i)}`);
  }
  return Rt;
}
var je = {}, he = {}, Xo;
function Le() {
  if (Xo) return he;
  Xo = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.validateUnion = he.validateArray = he.usePattern = he.callValidateCode = he.schemaProperties = he.allSchemaProperties = he.noPropertyInData = he.propertyInData = he.isOwnProperty = he.hasPropFunc = he.reportMissingProp = he.checkMissingProp = he.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ De(), r = /* @__PURE__ */ de();
  function s(f, k) {
    const { gen: _, data: u, it: p } = f;
    _.if(d(_, u, k, p.opts.ownProperties), () => {
      f.setParams({ missingProperty: (0, e._)`${k}` }, !0), f.error();
    });
  }
  he.checkReportMissingProp = s;
  function o({ gen: f, data: k, it: { opts: _ } }, u, p) {
    return (0, e.or)(...u.map(($) => (0, e.and)(d(f, k, $, _.ownProperties), (0, e._)`${p} = ${$}`)));
  }
  he.checkMissingProp = o;
  function i(f, k) {
    f.setParams({ missingProperty: k }, !0), f.error();
  }
  he.reportMissingProp = i;
  function a(f) {
    return f.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  he.hasPropFunc = a;
  function c(f, k, _) {
    return (0, e._)`${a(f)}.call(${k}, ${_})`;
  }
  he.isOwnProperty = c;
  function l(f, k, _, u) {
    const p = (0, e._)`${k}${(0, e.getProperty)(_)} !== undefined`;
    return u ? (0, e._)`${p} && ${c(f, k, _)}` : p;
  }
  he.propertyInData = l;
  function d(f, k, _, u) {
    const p = (0, e._)`${k}${(0, e.getProperty)(_)} === undefined`;
    return u ? (0, e.or)(p, (0, e.not)(c(f, k, _))) : p;
  }
  he.noPropertyInData = d;
  function m(f) {
    return f ? Object.keys(f).filter((k) => k !== "__proto__") : [];
  }
  he.allSchemaProperties = m;
  function v(f, k) {
    return m(k).filter((_) => !(0, t.alwaysValidSchema)(f, k[_]));
  }
  he.schemaProperties = v;
  function y({ schemaCode: f, data: k, it: { gen: _, topSchemaRef: u, schemaPath: p, errorPath: $ }, it: C }, A, E, O) {
    const R = O ? (0, e._)`${f}, ${k}, ${u}${p}` : k, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, $)],
      [n.default.parentData, C.parentData],
      [n.default.parentDataProperty, C.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    C.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const z = (0, e._)`${R}, ${_.object(...D)}`;
    return E !== e.nil ? (0, e._)`${A}.call(${E}, ${z})` : (0, e._)`${A}(${z})`;
  }
  he.callValidateCode = y;
  const b = (0, e._)`new RegExp`;
  function w({ gen: f, it: { opts: k } }, _) {
    const u = k.unicodeRegExp ? "u" : "", { regExp: p } = k.code, $ = p(_, u);
    return f.scopeValue("pattern", {
      key: $.toString(),
      ref: $,
      code: (0, e._)`${p.code === "new RegExp" ? b : (0, r.useFunc)(f, p)}(${_}, ${u})`
    });
  }
  he.usePattern = w;
  function h(f) {
    const { gen: k, data: _, keyword: u, it: p } = f, $ = k.name("valid");
    if (p.allErrors) {
      const A = k.let("valid", !0);
      return C(() => k.assign(A, !1)), A;
    }
    return k.var($, !0), C(() => k.break()), $;
    function C(A) {
      const E = k.const("len", (0, e._)`${_}.length`);
      k.forRange("i", 0, E, (O) => {
        f.subschema({
          keyword: u,
          dataProp: O,
          dataPropType: t.Type.Num
        }, $), k.if((0, e.not)($), A);
      });
    }
  }
  he.validateArray = h;
  function g(f) {
    const { gen: k, schema: _, keyword: u, it: p } = f;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((E) => (0, t.alwaysValidSchema)(p, E)) && !p.opts.unevaluated)
      return;
    const C = k.let("valid", !1), A = k.name("_valid");
    k.block(() => _.forEach((E, O) => {
      const R = f.subschema({
        keyword: u,
        schemaProp: O,
        compositeRule: !0
      }, A);
      k.assign(C, (0, e._)`${C} || ${A}`), f.mergeValidEvaluated(R, A) || k.if((0, e.not)(C));
    })), f.result(C, () => f.reset(), () => f.error(!0));
  }
  return he.validateUnion = g, he;
}
var Zo;
function Yc() {
  if (Zo) return je;
  Zo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.validateKeywordUsage = je.validSchemaType = je.funcKeywordCode = je.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ Le(), r = /* @__PURE__ */ er();
  function s(v, y) {
    const { gen: b, keyword: w, schema: h, parentSchema: g, it: f } = v, k = y.macro.call(f.self, h, g, f), _ = l(b, w, k);
    f.opts.validateSchema !== !1 && f.self.validateSchema(k, !0);
    const u = b.name("valid");
    v.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${f.errSchemaPath}/${w}`,
      topSchemaRef: _,
      compositeRule: !0
    }, u), v.pass(u, () => v.error(!0));
  }
  je.macroKeywordCode = s;
  function o(v, y) {
    var b;
    const { gen: w, keyword: h, schema: g, parentSchema: f, $data: k, it: _ } = v;
    c(_, y);
    const u = !k && y.compile ? y.compile.call(_.self, g, f, _) : y.validate, p = l(w, h, u), $ = w.let("valid");
    v.block$data($, C), v.ok((b = y.valid) !== null && b !== void 0 ? b : $);
    function C() {
      if (y.errors === !1)
        O(), y.modifying && i(v), R(() => v.error());
      else {
        const D = y.async ? A() : E();
        y.modifying && i(v), R(() => a(v, D));
      }
    }
    function A() {
      const D = w.let("ruleErrs", null);
      return w.try(() => O((0, e._)`await `), (z) => w.assign($, !1).if((0, e._)`${z} instanceof ${_.ValidationError}`, () => w.assign(D, (0, e._)`${z}.errors`), () => w.throw(z))), D;
    }
    function E() {
      const D = (0, e._)`${p}.errors`;
      return w.assign(D, null), O(e.nil), D;
    }
    function O(D = y.async ? (0, e._)`await ` : e.nil) {
      const z = _.opts.passContext ? t.default.this : t.default.self, V = !("compile" in y && !k || y.schema === !1);
      w.assign($, (0, e._)`${D}${(0, n.callValidateCode)(v, p, z, V)}`, y.modifying);
    }
    function R(D) {
      var z;
      w.if((0, e.not)((z = y.valid) !== null && z !== void 0 ? z : $), D);
    }
  }
  je.funcKeywordCode = o;
  function i(v) {
    const { gen: y, data: b, it: w } = v;
    y.if(w.parentData, () => y.assign(b, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(v, y) {
    const { gen: b } = v;
    b.if((0, e._)`Array.isArray(${y})`, () => {
      b.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(v);
    }, () => v.error());
  }
  function c({ schemaEnv: v }, y) {
    if (y.async && !v.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(v, y, b) {
    if (b === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return v.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, e.stringify)(b) });
  }
  function d(v, y, b = !1) {
    return !y.length || y.some((w) => w === "array" ? Array.isArray(v) : w === "object" ? v && typeof v == "object" && !Array.isArray(v) : typeof v == w || b && typeof v > "u");
  }
  je.validSchemaType = d;
  function m({ schema: v, opts: y, self: b, errSchemaPath: w }, h, g) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g)
      throw new Error("ajv implementation error");
    const f = h.dependencies;
    if (f?.some((k) => !Object.prototype.hasOwnProperty.call(v, k)))
      throw new Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
    if (h.validateSchema && !h.validateSchema(v[g])) {
      const _ = `keyword "${g}" value is invalid at path "${w}": ` + b.errorsText(h.validateSchema.errors);
      if (y.validateSchema === "log")
        b.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return je.validateKeywordUsage = m, je;
}
var Ke = {}, Qo;
function Xc() {
  if (Qo) return Ke;
  Qo = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.extendSubschemaMode = Ke.extendSubschemaData = Ke.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de();
  function n(o, { keyword: i, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: d, topSchemaRef: m }) {
    if (i !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const v = o.schema[i];
      return a === void 0 ? {
        schema: v,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${o.errSchemaPath}/${i}`
      } : {
        schema: v[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (l === void 0 || d === void 0 || m === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: m,
        errSchemaPath: d
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ke.getSubschema = n;
  function r(o, i, { dataProp: a, dataPropType: c, data: l, dataTypes: d, propertyName: m }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: v } = i;
    if (a !== void 0) {
      const { errorPath: b, dataPathArr: w, opts: h } = i, g = v.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      y(g), o.errorPath = (0, e.str)`${b}${(0, t.getErrorPath)(a, c, h.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...w, o.parentDataProperty];
    }
    if (l !== void 0) {
      const b = l instanceof e.Name ? l : v.let("data", l, !0);
      y(b), m !== void 0 && (o.propertyName = m);
    }
    d && (o.dataTypes = d);
    function y(b) {
      o.data = b, o.dataLevel = i.dataLevel + 1, o.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), o.parentData = i.data, o.dataNames = [...i.dataNames, b];
    }
  }
  Ke.extendSubschemaData = r;
  function s(o, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: d }) {
    c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), d !== void 0 && (o.allErrors = d), o.jtdDiscriminator = i, o.jtdMetadata = a;
  }
  return Ke.extendSubschemaMode = s, Ke;
}
var Se = {}, _r, es;
function ya() {
  return es || (es = 1, _r = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, s, o;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (s = r; s-- !== 0; )
          if (!e(t[s], n[s])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
      for (s = r; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
      for (s = r; s-- !== 0; ) {
        var i = o[s];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), _r;
}
var Sr = { exports: {} }, ts;
function Zc() {
  if (ts) return Sr.exports;
  ts = 1;
  var e = Sr.exports = function(r, s, o) {
    typeof s == "function" && (o = s, s = {}), o = s.cb || o;
    var i = typeof o == "function" ? o : o.pre || function() {
    }, a = o.post || function() {
    };
    t(s, i, a, r, "", r);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(r, s, o, i, a, c, l, d, m, v) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      s(i, a, c, l, d, m, v);
      for (var y in i) {
        var b = i[y];
        if (Array.isArray(b)) {
          if (y in e.arrayKeywords)
            for (var w = 0; w < b.length; w++)
              t(r, s, o, b[w], a + "/" + y + "/" + w, c, a, y, i, w);
        } else if (y in e.propsKeywords) {
          if (b && typeof b == "object")
            for (var h in b)
              t(r, s, o, b[h], a + "/" + y + "/" + n(h), c, a, y, i, h);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, s, o, b, a + "/" + y, c, a, y, i);
      }
      o(i, a, c, l, d, m, v);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Sr.exports;
}
var ns;
function tr() {
  if (ns) return Se;
  ns = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.getSchemaRefs = Se.resolveUrl = Se.normalizeId = Se._getFullPath = Se.getFullPath = Se.inlineRef = void 0;
  const e = /* @__PURE__ */ de(), t = ya(), n = Zc(), r = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function s(w, h = !0) {
    return typeof w == "boolean" ? !0 : h === !0 ? !i(w) : h ? a(w) <= h : !1;
  }
  Se.inlineRef = s;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(w) {
    for (const h in w) {
      if (o.has(h))
        return !0;
      const g = w[h];
      if (Array.isArray(g) && g.some(i) || typeof g == "object" && i(g))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let h = 0;
    for (const g in w) {
      if (g === "$ref")
        return 1 / 0;
      if (h++, !r.has(g) && (typeof w[g] == "object" && (0, e.eachItem)(w[g], (f) => h += a(f)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(w, h = "", g) {
    g !== !1 && (h = m(h));
    const f = w.parse(h);
    return l(w, f);
  }
  Se.getFullPath = c;
  function l(w, h) {
    return w.serialize(h).split("#")[0] + "#";
  }
  Se._getFullPath = l;
  const d = /#\/?$/;
  function m(w) {
    return w ? w.replace(d, "") : "";
  }
  Se.normalizeId = m;
  function v(w, h, g) {
    return g = m(g), w.resolve(h, g);
  }
  Se.resolveUrl = v;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function b(w, h) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: g, uriResolver: f } = this.opts, k = m(w[g] || h), _ = { "": k }, u = c(f, k, !1), p = {}, $ = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (E, O, R, D) => {
      if (D === void 0)
        return;
      const z = u + O;
      let V = _[D];
      typeof E[g] == "string" && (V = G.call(this, E[g])), oe.call(this, E.$anchor), oe.call(this, E.$dynamicAnchor), _[O] = V;
      function G(X) {
        const re = this.opts.uriResolver.resolve;
        if (X = m(V ? re(V, X) : X), $.has(X))
          throw A(X);
        $.add(X);
        let W = this.refs[X];
        return typeof W == "string" && (W = this.refs[W]), typeof W == "object" ? C(E, W.schema, X) : X !== m(z) && (X[0] === "#" ? (C(E, p[X], X), p[X] = E) : this.refs[X] = z), X;
      }
      function oe(X) {
        if (typeof X == "string") {
          if (!y.test(X))
            throw new Error(`invalid anchor "${X}"`);
          G.call(this, `#${X}`);
        }
      }
    }), p;
    function C(E, O, R) {
      if (O !== void 0 && !t(E, O))
        throw A(R);
    }
    function A(E) {
      return new Error(`reference "${E}" resolves to more than one schema`);
    }
  }
  return Se.getSchemaRefs = b, Se;
}
var rs;
function nr() {
  if (rs) return Ue;
  rs = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.getData = Ue.KeywordCxt = Ue.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Wc(), t = /* @__PURE__ */ Yn(), n = /* @__PURE__ */ ga(), r = /* @__PURE__ */ Yn(), s = /* @__PURE__ */ Jc(), o = /* @__PURE__ */ Yc(), i = /* @__PURE__ */ Xc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ De(), l = /* @__PURE__ */ tr(), d = /* @__PURE__ */ de(), m = /* @__PURE__ */ er();
  function v(M) {
    if (u(M) && ($(M), _(M))) {
      h(M);
      return;
    }
    y(M, () => (0, e.topBoolOrEmptySchema)(M));
  }
  Ue.validateFunctionCode = v;
  function y({ gen: M, validateName: x, schema: T, schemaEnv: q, opts: J }, Z) {
    J.code.es5 ? M.func(x, (0, a._)`${c.default.data}, ${c.default.valCxt}`, q.$async, () => {
      M.code((0, a._)`"use strict"; ${f(T, J)}`), w(M, J), M.code(Z);
    }) : M.func(x, (0, a._)`${c.default.data}, ${b(J)}`, q.$async, () => M.code(f(T, J)).code(Z));
  }
  function b(M) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${M.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(M, x) {
    M.if(c.default.valCxt, () => {
      M.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), M.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), M.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), M.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), x.dynamicRef && M.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      M.var(c.default.instancePath, (0, a._)`""`), M.var(c.default.parentData, (0, a._)`undefined`), M.var(c.default.parentDataProperty, (0, a._)`undefined`), M.var(c.default.rootData, c.default.data), x.dynamicRef && M.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function h(M) {
    const { schema: x, opts: T, gen: q } = M;
    y(M, () => {
      T.$comment && x.$comment && D(M), E(M), q.let(c.default.vErrors, null), q.let(c.default.errors, 0), T.unevaluated && g(M), C(M), z(M);
    });
  }
  function g(M) {
    const { gen: x, validateName: T } = M;
    M.evaluated = x.const("evaluated", (0, a._)`${T}.evaluated`), x.if((0, a._)`${M.evaluated}.dynamicProps`, () => x.assign((0, a._)`${M.evaluated}.props`, (0, a._)`undefined`)), x.if((0, a._)`${M.evaluated}.dynamicItems`, () => x.assign((0, a._)`${M.evaluated}.items`, (0, a._)`undefined`));
  }
  function f(M, x) {
    const T = typeof M == "object" && M[x.schemaId];
    return T && (x.code.source || x.code.process) ? (0, a._)`/*# sourceURL=${T} */` : a.nil;
  }
  function k(M, x) {
    if (u(M) && ($(M), _(M))) {
      p(M, x);
      return;
    }
    (0, e.boolOrEmptySchema)(M, x);
  }
  function _({ schema: M, self: x }) {
    if (typeof M == "boolean")
      return !M;
    for (const T in M)
      if (x.RULES.all[T])
        return !0;
    return !1;
  }
  function u(M) {
    return typeof M.schema != "boolean";
  }
  function p(M, x) {
    const { schema: T, gen: q, opts: J } = M;
    J.$comment && T.$comment && D(M), O(M), R(M);
    const Z = q.const("_errs", c.default.errors);
    C(M, Z), q.var(x, (0, a._)`${Z} === ${c.default.errors}`);
  }
  function $(M) {
    (0, d.checkUnknownRules)(M), A(M);
  }
  function C(M, x) {
    if (M.opts.jtd)
      return G(M, [], !1, x);
    const T = (0, t.getSchemaTypes)(M.schema), q = (0, t.coerceAndCheckDataType)(M, T);
    G(M, T, !q, x);
  }
  function A(M) {
    const { schema: x, errSchemaPath: T, opts: q, self: J } = M;
    x.$ref && q.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(x, J.RULES) && J.logger.warn(`$ref: keywords ignored in schema at path "${T}"`);
  }
  function E(M) {
    const { schema: x, opts: T } = M;
    x.default !== void 0 && T.useDefaults && T.strictSchema && (0, d.checkStrictMode)(M, "default is ignored in the schema root");
  }
  function O(M) {
    const x = M.schema[M.opts.schemaId];
    x && (M.baseId = (0, l.resolveUrl)(M.opts.uriResolver, M.baseId, x));
  }
  function R(M) {
    if (M.schema.$async && !M.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: M, schemaEnv: x, schema: T, errSchemaPath: q, opts: J }) {
    const Z = T.$comment;
    if (J.$comment === !0)
      M.code((0, a._)`${c.default.self}.logger.log(${Z})`);
    else if (typeof J.$comment == "function") {
      const ae = (0, a.str)`${q}/$comment`, se = M.scopeValue("root", { ref: x.root });
      M.code((0, a._)`${c.default.self}.opts.$comment(${Z}, ${ae}, ${se}.schema)`);
    }
  }
  function z(M) {
    const { gen: x, schemaEnv: T, validateName: q, ValidationError: J, opts: Z } = M;
    T.$async ? x.if((0, a._)`${c.default.errors} === 0`, () => x.return(c.default.data), () => x.throw((0, a._)`new ${J}(${c.default.vErrors})`)) : (x.assign((0, a._)`${q}.errors`, c.default.vErrors), Z.unevaluated && V(M), x.return((0, a._)`${c.default.errors} === 0`));
  }
  function V({ gen: M, evaluated: x, props: T, items: q }) {
    T instanceof a.Name && M.assign((0, a._)`${x}.props`, T), q instanceof a.Name && M.assign((0, a._)`${x}.items`, q);
  }
  function G(M, x, T, q) {
    const { gen: J, schema: Z, data: ae, allErrors: se, opts: fe, self: me } = M, { RULES: pe } = me;
    if (Z.$ref && (fe.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(Z, pe))) {
      J.block(() => K(M, "$ref", pe.all.$ref.definition));
      return;
    }
    fe.jtd || X(M, x), J.block(() => {
      for (const ye of pe.rules)
        be(ye);
      be(pe.post);
    });
    function be(ye) {
      (0, n.shouldUseGroup)(Z, ye) && (ye.type ? (J.if((0, r.checkDataType)(ye.type, ae, fe.strictNumbers)), oe(M, ye), x.length === 1 && x[0] === ye.type && T && (J.else(), (0, r.reportTypeError)(M)), J.endIf()) : oe(M, ye), se || J.if((0, a._)`${c.default.errors} === ${q || 0}`));
    }
  }
  function oe(M, x) {
    const { gen: T, schema: q, opts: { useDefaults: J } } = M;
    J && (0, s.assignDefaults)(M, x.type), T.block(() => {
      for (const Z of x.rules)
        (0, n.shouldUseRule)(q, Z) && K(M, Z.keyword, Z.definition, x.type);
    });
  }
  function X(M, x) {
    M.schemaEnv.meta || !M.opts.strictTypes || (re(M, x), M.opts.allowUnionTypes || W(M, x), F(M, M.dataTypes));
  }
  function re(M, x) {
    if (x.length) {
      if (!M.dataTypes.length) {
        M.dataTypes = x;
        return;
      }
      x.forEach((T) => {
        j(M.dataTypes, T) || P(M, `type "${T}" not allowed by context "${M.dataTypes.join(",")}"`);
      }), S(M, x);
    }
  }
  function W(M, x) {
    x.length > 1 && !(x.length === 2 && x.includes("null")) && P(M, "use allowUnionTypes to allow union type keyword");
  }
  function F(M, x) {
    const T = M.self.RULES.all;
    for (const q in T) {
      const J = T[q];
      if (typeof J == "object" && (0, n.shouldUseRule)(M.schema, J)) {
        const { type: Z } = J.definition;
        Z.length && !Z.some((ae) => H(x, ae)) && P(M, `missing type "${Z.join(",")}" for keyword "${q}"`);
      }
    }
  }
  function H(M, x) {
    return M.includes(x) || x === "number" && M.includes("integer");
  }
  function j(M, x) {
    return M.includes(x) || x === "integer" && M.includes("number");
  }
  function S(M, x) {
    const T = [];
    for (const q of M.dataTypes)
      j(x, q) ? T.push(q) : x.includes("integer") && q === "number" && T.push("integer");
    M.dataTypes = T;
  }
  function P(M, x) {
    const T = M.schemaEnv.baseId + M.errSchemaPath;
    x += ` at "${T}" (strictTypes)`, (0, d.checkStrictMode)(M, x, M.opts.strictTypes);
  }
  class L {
    constructor(x, T, q) {
      if ((0, o.validateKeywordUsage)(x, T, q), this.gen = x.gen, this.allErrors = x.allErrors, this.keyword = q, this.data = x.data, this.schema = x.schema[q], this.$data = T.$data && x.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(x, this.schema, q, this.$data), this.schemaType = T.schemaType, this.parentSchema = x.schema, this.params = {}, this.it = x, this.def = T, this.$data)
        this.schemaCode = x.gen.const("vSchema", ne(this.$data, x));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, T.schemaType, T.allowUndefined))
        throw new Error(`${q} value must be ${JSON.stringify(T.schemaType)}`);
      ("code" in T ? T.trackErrors : T.errors !== !1) && (this.errsCount = x.gen.const("_errs", c.default.errors));
    }
    result(x, T, q) {
      this.failResult((0, a.not)(x), T, q);
    }
    failResult(x, T, q) {
      this.gen.if(x), q ? q() : this.error(), T ? (this.gen.else(), T(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(x, T) {
      this.failResult((0, a.not)(x), void 0, T);
    }
    fail(x) {
      if (x === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(x), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(x) {
      if (!this.$data)
        return this.fail(x);
      const { schemaCode: T } = this;
      this.fail((0, a._)`${T} !== undefined && (${(0, a.or)(this.invalid$data(), x)})`);
    }
    error(x, T, q) {
      if (T) {
        this.setParams(T), this._error(x, q), this.setParams({});
        return;
      }
      this._error(x, q);
    }
    _error(x, T) {
      (x ? m.reportExtraError : m.reportError)(this, this.def.error, T);
    }
    $dataError() {
      (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, m.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(x) {
      this.allErrors || this.gen.if(x);
    }
    setParams(x, T) {
      T ? Object.assign(this.params, x) : this.params = x;
    }
    block$data(x, T, q = a.nil) {
      this.gen.block(() => {
        this.check$data(x, q), T();
      });
    }
    check$data(x = a.nil, T = a.nil) {
      if (!this.$data)
        return;
      const { gen: q, schemaCode: J, schemaType: Z, def: ae } = this;
      q.if((0, a.or)((0, a._)`${J} === undefined`, T)), x !== a.nil && q.assign(x, !0), (Z.length || ae.validateSchema) && (q.elseIf(this.invalid$data()), this.$dataError(), x !== a.nil && q.assign(x, !1)), q.else();
    }
    invalid$data() {
      const { gen: x, schemaCode: T, schemaType: q, def: J, it: Z } = this;
      return (0, a.or)(ae(), se());
      function ae() {
        if (q.length) {
          if (!(T instanceof a.Name))
            throw new Error("ajv implementation error");
          const fe = Array.isArray(q) ? q : [q];
          return (0, a._)`${(0, r.checkDataTypes)(fe, T, Z.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function se() {
        if (J.validateSchema) {
          const fe = x.scopeValue("validate$data", { ref: J.validateSchema });
          return (0, a._)`!${fe}(${T})`;
        }
        return a.nil;
      }
    }
    subschema(x, T) {
      const q = (0, i.getSubschema)(this.it, x);
      (0, i.extendSubschemaData)(q, this.it, x), (0, i.extendSubschemaMode)(q, x);
      const J = { ...this.it, ...q, items: void 0, props: void 0 };
      return k(J, T), J;
    }
    mergeEvaluated(x, T) {
      const { it: q, gen: J } = this;
      q.opts.unevaluated && (q.props !== !0 && x.props !== void 0 && (q.props = d.mergeEvaluated.props(J, x.props, q.props, T)), q.items !== !0 && x.items !== void 0 && (q.items = d.mergeEvaluated.items(J, x.items, q.items, T)));
    }
    mergeValidEvaluated(x, T) {
      const { it: q, gen: J } = this;
      if (q.opts.unevaluated && (q.props !== !0 || q.items !== !0))
        return J.if(T, () => this.mergeEvaluated(x, a.Name)), !0;
    }
  }
  Ue.KeywordCxt = L;
  function K(M, x, T, q) {
    const J = new L(M, T, x);
    "code" in T ? T.code(J, q) : J.$data && T.validate ? (0, o.funcKeywordCode)(J, T) : "macro" in T ? (0, o.macroKeywordCode)(J, T) : (T.compile || T.validate) && (0, o.funcKeywordCode)(J, T);
  }
  const te = /^\/(?:[^~]|~0|~1)*$/, Y = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ne(M, { dataLevel: x, dataNames: T, dataPathArr: q }) {
    let J, Z;
    if (M === "")
      return c.default.rootData;
    if (M[0] === "/") {
      if (!te.test(M))
        throw new Error(`Invalid JSON-pointer: ${M}`);
      J = M, Z = c.default.rootData;
    } else {
      const me = Y.exec(M);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${M}`);
      const pe = +me[1];
      if (J = me[2], J === "#") {
        if (pe >= x)
          throw new Error(fe("property/index", pe));
        return q[x - pe];
      }
      if (pe > x)
        throw new Error(fe("data", pe));
      if (Z = T[x - pe], !J)
        return Z;
    }
    let ae = Z;
    const se = J.split("/");
    for (const me of se)
      me && (Z = (0, a._)`${Z}${(0, a.getProperty)((0, d.unescapeJsonPointer)(me))}`, ae = (0, a._)`${ae} && ${Z}`);
    return ae;
    function fe(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${x}`;
    }
  }
  return Ue.getData = ne, Ue;
}
var Ut = {}, os;
function lo() {
  if (os) return Ut;
  os = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Ut.default = e, Ut;
}
var Ht = {}, ss;
function rr() {
  if (ss) return Ht;
  ss = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tr();
  class t extends Error {
    constructor(r, s, o, i) {
      super(i || `can't resolve reference ${o} from id ${s}`), this.missingRef = (0, e.resolveUrl)(r, s, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Ht.default = t, Ht;
}
var Ce = {}, is;
function or() {
  if (is) return Ce;
  is = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.resolveSchema = Ce.getCompilingSchema = Ce.resolveRef = Ce.compileSchema = Ce.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ lo(), n = /* @__PURE__ */ De(), r = /* @__PURE__ */ tr(), s = /* @__PURE__ */ de(), o = /* @__PURE__ */ nr();
  class i {
    constructor(g) {
      var f;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof g.schema == "object" && (k = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (f = g.baseId) !== null && f !== void 0 ? f : (0, r.normalizeId)(k?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  Ce.SchemaEnv = i;
  function a(h) {
    const g = d.call(this, h);
    if (g)
      return g;
    const f = (0, r.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: k, lines: _ } = this.opts.code, { ownProperties: u } = this.opts, p = new e.CodeGen(this.scope, { es5: k, lines: _, ownProperties: u });
    let $;
    h.$async && ($ = p.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = p.scopeName("validate");
    h.validateName = C;
    const A = {
      gen: p,
      allErrors: this.opts.allErrors,
      data: n.default.data,
      parentData: n.default.parentData,
      parentDataProperty: n.default.parentDataProperty,
      dataNames: [n.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: p.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: C,
      ValidationError: $,
      schema: h.schema,
      schemaEnv: h,
      rootId: f,
      baseId: h.baseId || f,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let E;
    try {
      this._compilations.add(h), (0, o.validateFunctionCode)(A), p.optimize(this.opts.code.optimize);
      const O = p.toString();
      E = `${p.scopeRefs(n.default.scope)}return ${O}`, this.opts.code.process && (E = this.opts.code.process(E, h));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, E)(this, this.scope.get());
      if (this.scope.value(C, { ref: D }), D.errors = null, D.schema = h.schema, D.schemaEnv = h, h.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: C, validateCode: O, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: z, items: V } = A;
        D.evaluated = {
          props: z instanceof e.Name ? void 0 : z,
          items: V instanceof e.Name ? void 0 : V,
          dynamicProps: z instanceof e.Name,
          dynamicItems: V instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return h.validate = D, h;
    } catch (O) {
      throw delete h.validate, delete h.validateName, E && this.logger.error("Error compiling schema, function code:", E), O;
    } finally {
      this._compilations.delete(h);
    }
  }
  Ce.compileSchema = a;
  function c(h, g, f) {
    var k;
    f = (0, r.resolveUrl)(this.opts.uriResolver, g, f);
    const _ = h.refs[f];
    if (_)
      return _;
    let u = v.call(this, h, f);
    if (u === void 0) {
      const p = (k = h.localRefs) === null || k === void 0 ? void 0 : k[f], { schemaId: $ } = this.opts;
      p && (u = new i({ schema: p, schemaId: $, root: h, baseId: g }));
    }
    if (u !== void 0)
      return h.refs[f] = l.call(this, u);
  }
  Ce.resolveRef = c;
  function l(h) {
    return (0, r.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : a.call(this, h);
  }
  function d(h) {
    for (const g of this._compilations)
      if (m(g, h))
        return g;
  }
  Ce.getCompilingSchema = d;
  function m(h, g) {
    return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
  }
  function v(h, g) {
    let f;
    for (; typeof (f = this.refs[g]) == "string"; )
      g = f;
    return f || this.schemas[g] || y.call(this, h, g);
  }
  function y(h, g) {
    const f = this.opts.uriResolver.parse(g), k = (0, r._getFullPath)(this.opts.uriResolver, f);
    let _ = (0, r.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && k === _)
      return w.call(this, f, h);
    const u = (0, r.normalizeId)(k), p = this.refs[u] || this.schemas[u];
    if (typeof p == "string") {
      const $ = y.call(this, h, p);
      return typeof $?.schema != "object" ? void 0 : w.call(this, f, $);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), u === (0, r.normalizeId)(g)) {
        const { schema: $ } = p, { schemaId: C } = this.opts, A = $[C];
        return A && (_ = (0, r.resolveUrl)(this.opts.uriResolver, _, A)), new i({ schema: $, schemaId: C, root: h, baseId: _ });
      }
      return w.call(this, f, p);
    }
  }
  Ce.resolveSchema = y;
  const b = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(h, { baseId: g, schema: f, root: k }) {
    var _;
    if (((_ = h.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const $ of h.fragment.slice(1).split("/")) {
      if (typeof f == "boolean")
        return;
      const C = f[(0, s.unescapeFragment)($)];
      if (C === void 0)
        return;
      f = C;
      const A = typeof f == "object" && f[this.opts.schemaId];
      !b.has($) && A && (g = (0, r.resolveUrl)(this.opts.uriResolver, g, A));
    }
    let u;
    if (typeof f != "boolean" && f.$ref && !(0, s.schemaHasRulesButRef)(f, this.RULES)) {
      const $ = (0, r.resolveUrl)(this.opts.uriResolver, g, f.$ref);
      u = y.call(this, k, $);
    }
    const { schemaId: p } = this.opts;
    if (u = u || new i({ schema: f, schemaId: p, root: k, baseId: g }), u.schema !== u.root.schema)
      return u;
  }
  return Ce;
}
const Qc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", el = "Meta-schema for $data reference (JSON AnySchema extension proposal)", tl = "object", nl = ["$data"], rl = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ol = !1, sl = {
  $id: Qc,
  description: el,
  type: tl,
  required: nl,
  properties: rl,
  additionalProperties: ol
};
var Kt = {}, Mt = { exports: {} }, kr, as;
function $a() {
  if (as) return kr;
  as = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(u) {
    let p = "", $ = 0, C = 0;
    for (C = 0; C < u.length; C++)
      if ($ = u[C].charCodeAt(0), $ !== 48) {
        if (!($ >= 48 && $ <= 57 || $ >= 65 && $ <= 70 || $ >= 97 && $ <= 102))
          return "";
        p += u[C];
        break;
      }
    for (C += 1; C < u.length; C++) {
      if ($ = u[C].charCodeAt(0), !($ >= 48 && $ <= 57 || $ >= 65 && $ <= 70 || $ >= 97 && $ <= 102))
        return "";
      p += u[C];
    }
    return p;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(u) {
    return u.length = 0, !0;
  }
  function c(u, p, $) {
    if (u.length) {
      const C = o(u);
      if (C !== "")
        p.push(C);
      else
        return $.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function l(u) {
    let p = 0;
    const $ = { error: !1, address: "", zone: "" }, C = [], A = [];
    let E = !1, O = !1, R = c;
    for (let D = 0; D < u.length; D++) {
      const z = u[D];
      if (!(z === "[" || z === "]"))
        if (z === ":") {
          if (E === !0 && (O = !0), !R(A, C, $))
            break;
          if (++p > 7) {
            $.error = !0;
            break;
          }
          D > 0 && u[D - 1] === ":" && (E = !0), C.push(":");
          continue;
        } else if (z === "%") {
          if (!R(A, C, $))
            break;
          R = a;
        } else {
          A.push(z);
          continue;
        }
    }
    return A.length && (R === a ? $.zone = A.join("") : O ? C.push(A.join("")) : C.push(o(A))), $.address = C.join(""), $;
  }
  function d(u) {
    if (m(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const p = l(u);
    if (p.error)
      return { host: u, isIPV6: !1 };
    {
      let $ = p.address, C = p.address;
      return p.zone && ($ += "%" + p.zone, C += "%25" + p.zone), { host: $, isIPV6: !0, escapedHost: C };
    }
  }
  function m(u, p) {
    let $ = 0;
    for (let C = 0; C < u.length; C++)
      u[C] === p && $++;
    return $;
  }
  function v(u) {
    let p = u;
    const $ = [];
    let C = -1, A = 0;
    for (; A = p.length; ) {
      if (A === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          $.push("/");
          break;
        } else {
          $.push(p);
          break;
        }
      } else if (A === 2) {
        if (p[0] === ".") {
          if (p[1] === ".")
            break;
          if (p[1] === "/") {
            p = p.slice(2);
            continue;
          }
        } else if (p[0] === "/" && (p[1] === "." || p[1] === "/")) {
          $.push("/");
          break;
        }
      } else if (A === 3 && p === "/..") {
        $.length !== 0 && $.pop(), $.push("/");
        break;
      }
      if (p[0] === ".") {
        if (p[1] === ".") {
          if (p[2] === "/") {
            p = p.slice(3);
            continue;
          }
        } else if (p[1] === "/") {
          p = p.slice(2);
          continue;
        }
      } else if (p[0] === "/" && p[1] === ".") {
        if (p[2] === "/") {
          p = p.slice(2);
          continue;
        } else if (p[2] === "." && p[3] === "/") {
          p = p.slice(3), $.length !== 0 && $.pop();
          continue;
        }
      }
      if ((C = p.indexOf("/", 1)) === -1) {
        $.push(p);
        break;
      } else
        $.push(p.slice(0, C)), p = p.slice(C);
    }
    return $.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, b = /[@/?#:]/g, w = /[@/?#]/g;
  function h(u, p) {
    const $ = p ? w : b;
    return $.lastIndex = 0, u.replace($, (C) => y[C]);
  }
  function g(u, p = !1) {
    if (u.indexOf("%") === -1)
      return u;
    let $ = "";
    for (let C = 0; C < u.length; C++) {
      if (u[C] === "%" && C + 2 < u.length) {
        const A = u.slice(C + 1, C + 3);
        if (n(A)) {
          const E = A.toUpperCase(), O = String.fromCharCode(parseInt(E, 16));
          p && r(O) ? $ += O : $ += "%" + E, C += 2;
          continue;
        }
      }
      $ += u[C];
    }
    return $;
  }
  function f(u) {
    let p = "";
    for (let $ = 0; $ < u.length; $++) {
      if (u[$] === "%" && $ + 2 < u.length) {
        const C = u.slice($ + 1, $ + 3);
        if (n(C)) {
          const A = C.toUpperCase(), E = String.fromCharCode(parseInt(A, 16));
          E !== "." && r(E) ? p += E : p += "%" + A, $ += 2;
          continue;
        }
      }
      s(u[$]) ? p += u[$] : p += escape(u[$]);
    }
    return p;
  }
  function k(u) {
    let p = "";
    for (let $ = 0; $ < u.length; $++) {
      if (u[$] === "%" && $ + 2 < u.length) {
        const C = u.slice($ + 1, $ + 3);
        if (n(C)) {
          p += "%" + C.toUpperCase(), $ += 2;
          continue;
        }
      }
      p += escape(u[$]);
    }
    return p;
  }
  function _(u) {
    const p = [];
    if (u.userinfo !== void 0 && (p.push(u.userinfo), p.push("@")), u.host !== void 0) {
      let $ = unescape(u.host);
      if (!t($)) {
        const C = d($);
        C.isIPV6 === !0 ? $ = `[${C.escapedHost}]` : $ = h($, !1);
      }
      p.push($);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (p.push(":"), p.push(String(u.port))), p.length ? p.join("") : void 0;
  }
  return kr = {
    nonSimpleDomain: i,
    recomposeAuthority: _,
    reescapeHostDelimiters: h,
    normalizePercentEncoding: g,
    normalizePathEncoding: f,
    escapePreservingEscapes: k,
    removeDotSegments: v,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: d,
    stringArrayToHexStripped: o
  }, kr;
}
var Cr, cs;
function il() {
  if (cs) return Cr;
  cs = 1;
  const { isUUID: e } = $a(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
    /** @type {const} */
    [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ]
  );
  function r(u) {
    return n.indexOf(
      /** @type {*} */
      u
    ) !== -1;
  }
  function s(u) {
    return u.secure === !0 ? !0 : u.secure === !1 ? !1 : u.scheme ? u.scheme.length === 3 && (u.scheme[0] === "w" || u.scheme[0] === "W") && (u.scheme[1] === "s" || u.scheme[1] === "S") && (u.scheme[2] === "s" || u.scheme[2] === "S") : !1;
  }
  function o(u) {
    return u.host || (u.error = u.error || "HTTP URIs must have a host."), u;
  }
  function i(u) {
    const p = String(u.scheme).toLowerCase() === "https";
    return (u.port === (p ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = s(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (s(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [p, $] = u.resourceName.split("?");
      u.path = p && p !== "/" ? p : void 0, u.query = $, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, p) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const $ = u.path.match(t);
    if ($) {
      const C = p.scheme || u.scheme || "urn";
      u.nid = $[1].toLowerCase(), u.nss = $[2];
      const A = `${C}:${p.nid || u.nid}`, E = _(A);
      u.path = void 0, E && (u = E.parse(u, p));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function d(u, p) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const $ = p.scheme || u.scheme || "urn", C = u.nid.toLowerCase(), A = `${$}:${p.nid || C}`, E = _(A);
    E && (u = E.serialize(u, p));
    const O = u, R = u.nss;
    return O.path = `${C || p.nid}:${R}`, p.skipEscape = !0, O;
  }
  function m(u, p) {
    const $ = u;
    return $.uuid = $.nss, $.nss = void 0, !p.tolerant && (!$.uuid || !e($.uuid)) && ($.error = $.error || "UUID is not valid."), $;
  }
  function v(u) {
    const p = u;
    return p.nss = (u.uuid || "").toLowerCase(), p;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: i
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: o,
      serialize: i
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: c
    }
  ), h = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), k = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: b,
      ws: w,
      wss: h,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: l,
          serialize: d,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: m,
          serialize: v,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(k, null);
  function _(u) {
    return u && (k[
      /** @type {SchemeName} */
      u
    ] || k[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return Cr = {
    wsIsSecure: s,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: _
  }, Cr;
}
var ls;
function al() {
  if (ls) return Mt.exports;
  ls = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: s, escapePreservingEscapes: o, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: c } = $a(), { SCHEMES: l, getSchemeHandler: d } = il();
  function m(A, E) {
    return typeof A == "string" ? A = /** @type {T} */
    u(A, E) : typeof A == "object" && (A = /** @type {T} */
    _(w(A, E), E)), A;
  }
  function v(A, E, O) {
    const R = O ? Object.assign({ scheme: "null" }, O) : { scheme: "null" }, D = y(_(A, R), _(E, R), R, !0);
    return R.skipEscape = !0, w(D, R);
  }
  function y(A, E, O, R) {
    const D = {};
    return R || (A = _(w(A, O), O), E = _(w(E, O), O)), O = O || {}, !O.tolerant && E.scheme ? (D.scheme = E.scheme, D.userinfo = E.userinfo, D.host = E.host, D.port = E.port, D.path = t(E.path || ""), D.query = E.query) : (E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0 ? (D.userinfo = E.userinfo, D.host = E.host, D.port = E.port, D.path = t(E.path || ""), D.query = E.query) : (E.path ? (E.path[0] === "/" ? D.path = t(E.path) : ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path ? D.path = "/" + E.path : A.path ? D.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + E.path : D.path = E.path, D.path = t(D.path)), D.query = E.query) : (D.path = A.path, E.query !== void 0 ? D.query = E.query : D.query = A.query), D.userinfo = A.userinfo, D.host = A.host, D.port = A.port), D.scheme = A.scheme), D.fragment = E.fragment, D;
  }
  function b(A, E, O) {
    const R = $(A, O), D = $(E, O);
    return R !== void 0 && D !== void 0 && R.toLowerCase() === D.toLowerCase();
  }
  function w(A, E) {
    const O = {
      host: A.host,
      scheme: A.scheme,
      userinfo: A.userinfo,
      port: A.port,
      path: A.path,
      query: A.query,
      nid: A.nid,
      nss: A.nss,
      uuid: A.uuid,
      fragment: A.fragment,
      reference: A.reference,
      resourceName: A.resourceName,
      secure: A.secure,
      error: ""
    }, R = Object.assign({}, E), D = [], z = d(R.scheme || O.scheme);
    z && z.serialize && z.serialize(O, R), O.path !== void 0 && (R.skipEscape ? O.path = r(O.path) : (O.path = o(O.path), O.scheme !== void 0 && (O.path = O.path.split("%3A").join(":")))), R.reference !== "suffix" && O.scheme && D.push(O.scheme, ":");
    const V = n(O);
    if (V !== void 0 && (R.reference !== "suffix" && D.push("//"), D.push(V), O.path && O.path[0] !== "/" && D.push("/")), O.path !== void 0) {
      let G = O.path;
      !R.absolutePath && (!z || !z.absolutePath) && (G = t(G)), V === void 0 && G[0] === "/" && G[1] === "/" && (G = "/%2F" + G.slice(2)), D.push(G);
    }
    return O.query !== void 0 && D.push("?", O.query), O.fragment !== void 0 && D.push("#", O.fragment), D.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function f(A, E) {
    if (E[2] !== void 0 && A.path && A.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof A.port == "number" && (A.port < 0 || A.port > 65535))
      return "URI port is malformed.";
  }
  function k(A, E) {
    const O = Object.assign({}, E), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, z = !1;
    O.reference === "suffix" && (O.scheme ? A = O.scheme + ":" + A : A = "//" + A);
    const V = A.match(g);
    V !== null && V[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", D = !0);
    const G = A.match(h);
    if (G) {
      R.scheme = G[1], R.userinfo = G[3], R.host = G[4], R.port = parseInt(G[5], 10), R.path = G[6] || "", R.query = G[7], R.fragment = G[8], isNaN(R.port) && (R.port = G[5]);
      const oe = f(R, G);
      if (oe !== void 0 && (R.error = R.error || oe, D = !0), R.host)
        if (a(R.host) === !1) {
          const W = e(R.host);
          R.host = W.host.toLowerCase(), z = W.isIPV6;
        } else
          z = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", O.reference && O.reference !== "suffix" && O.reference !== R.reference && (R.error = R.error || "URI is not a " + O.reference + " reference.");
      const X = d(O.scheme || R.scheme);
      if (!O.unicodeSupport && (!X || !X.unicodeSupport) && R.host && (O.domainHost || X && X.domainHost) && z === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (re) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + re;
        }
      if ((!X || X && !X.skipNormalize) && (A.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = i(unescape(R.host), z))), R.path && (R.path = s(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      X && X.parse && X.parse(R, O);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: D };
  }
  function _(A, E) {
    return k(A, E).parsed;
  }
  function u(A, E) {
    return p(A, E).normalized;
  }
  function p(A, E) {
    const { parsed: O, malformedAuthorityOrPort: R } = k(A, E);
    return {
      normalized: R ? A : w(O, E),
      malformedAuthorityOrPort: R
    };
  }
  function $(A, E) {
    if (typeof A == "string") {
      const { normalized: O, malformedAuthorityOrPort: R } = p(A, E);
      return R ? void 0 : O;
    }
    if (typeof A == "object")
      return w(A, E);
  }
  const C = {
    SCHEMES: l,
    normalize: m,
    resolve: v,
    resolveComponent: y,
    equal: b,
    serialize: w,
    parse: _
  };
  return Mt.exports = C, Mt.exports.default = C, Mt.exports.fastUri = C, Mt.exports;
}
var ds;
function cl() {
  if (ds) return Kt;
  ds = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = al();
  return e.code = 'require("ajv/dist/runtime/uri").default', Kt.default = e, Kt;
}
var us;
function ll() {
  return us || (us = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ nr();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ ie();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return n._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return n.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return n.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return n.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return n.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return n.CodeGen;
    } });
    const r = /* @__PURE__ */ lo(), s = /* @__PURE__ */ rr(), o = /* @__PURE__ */ ma(), i = /* @__PURE__ */ or(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ tr(), l = /* @__PURE__ */ Yn(), d = /* @__PURE__ */ de(), m = sl, v = /* @__PURE__ */ cl(), y = (W, F) => new RegExp(W, F);
    y.code = "new RegExp";
    const b = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), h = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, g = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, f = 200;
    function k(W) {
      var F, H, j, S, P, L, K, te, Y, ne, M, x, T, q, J, Z, ae, se, fe, me, pe, be, ye, xt, hr;
      const At = W.strict, mr = (F = W.code) === null || F === void 0 ? void 0 : F.optimize, To = mr === !0 || mr === void 0 ? 1 : mr || 0, Oo = (j = (H = W.code) === null || H === void 0 ? void 0 : H.regExp) !== null && j !== void 0 ? j : y, Sc = (S = W.uriResolver) !== null && S !== void 0 ? S : v.default;
      return {
        strictSchema: (L = (P = W.strictSchema) !== null && P !== void 0 ? P : At) !== null && L !== void 0 ? L : !0,
        strictNumbers: (te = (K = W.strictNumbers) !== null && K !== void 0 ? K : At) !== null && te !== void 0 ? te : !0,
        strictTypes: (ne = (Y = W.strictTypes) !== null && Y !== void 0 ? Y : At) !== null && ne !== void 0 ? ne : "log",
        strictTuples: (x = (M = W.strictTuples) !== null && M !== void 0 ? M : At) !== null && x !== void 0 ? x : "log",
        strictRequired: (q = (T = W.strictRequired) !== null && T !== void 0 ? T : At) !== null && q !== void 0 ? q : !1,
        code: W.code ? { ...W.code, optimize: To, regExp: Oo } : { optimize: To, regExp: Oo },
        loopRequired: (J = W.loopRequired) !== null && J !== void 0 ? J : f,
        loopEnum: (Z = W.loopEnum) !== null && Z !== void 0 ? Z : f,
        meta: (ae = W.meta) !== null && ae !== void 0 ? ae : !0,
        messages: (se = W.messages) !== null && se !== void 0 ? se : !0,
        inlineRefs: (fe = W.inlineRefs) !== null && fe !== void 0 ? fe : !0,
        schemaId: (me = W.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = W.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (be = W.validateSchema) !== null && be !== void 0 ? be : !0,
        validateFormats: (ye = W.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (xt = W.unicodeRegExp) !== null && xt !== void 0 ? xt : !0,
        int32range: (hr = W.int32range) !== null && hr !== void 0 ? hr : !0,
        uriResolver: Sc
      };
    }
    class _ {
      constructor(F = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), F = this.opts = { ...F, ...k(F) };
        const { es5: H, lines: j } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: H, lines: j }), this.logger = R(F.logger);
        const S = F.validateFormats;
        F.validateFormats = !1, this.RULES = (0, o.getRules)(), u.call(this, h, F, "NOT SUPPORTED"), u.call(this, g, F, "DEPRECATED", "warn"), this._metaOpts = E.call(this), F.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), F.keywords && A.call(this, F.keywords), typeof F.meta == "object" && this.addMetaSchema(F.meta), $.call(this), F.validateFormats = S;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: F, meta: H, schemaId: j } = this.opts;
        let S = m;
        j === "id" && (S = { ...m }, S.id = S.$id, delete S.$id), H && F && this.addMetaSchema(S, S[j], !1);
      }
      defaultMeta() {
        const { meta: F, schemaId: H } = this.opts;
        return this.opts.defaultMeta = typeof F == "object" ? F[H] || F : void 0;
      }
      validate(F, H) {
        let j;
        if (typeof F == "string") {
          if (j = this.getSchema(F), !j)
            throw new Error(`no schema with key or ref "${F}"`);
        } else
          j = this.compile(F);
        const S = j(H);
        return "$async" in j || (this.errors = j.errors), S;
      }
      compile(F, H) {
        const j = this._addSchema(F, H);
        return j.validate || this._compileSchemaEnv(j);
      }
      compileAsync(F, H) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: j } = this.opts;
        return S.call(this, F, H);
        async function S(ne, M) {
          await P.call(this, ne.$schema);
          const x = this._addSchema(ne, M);
          return x.validate || L.call(this, x);
        }
        async function P(ne) {
          ne && !this.getSchema(ne) && await S.call(this, { $ref: ne }, !0);
        }
        async function L(ne) {
          try {
            return this._compileSchemaEnv(ne);
          } catch (M) {
            if (!(M instanceof s.default))
              throw M;
            return K.call(this, M), await te.call(this, M.missingSchema), L.call(this, ne);
          }
        }
        function K({ missingSchema: ne, missingRef: M }) {
          if (this.refs[ne])
            throw new Error(`AnySchema ${ne} is loaded but ${M} cannot be resolved`);
        }
        async function te(ne) {
          const M = await Y.call(this, ne);
          this.refs[ne] || await P.call(this, M.$schema), this.refs[ne] || this.addSchema(M, ne, H);
        }
        async function Y(ne) {
          const M = this._loading[ne];
          if (M)
            return M;
          try {
            return await (this._loading[ne] = j(ne));
          } finally {
            delete this._loading[ne];
          }
        }
      }
      // Adds schema to the instance
      addSchema(F, H, j, S = this.opts.validateSchema) {
        if (Array.isArray(F)) {
          for (const L of F)
            this.addSchema(L, void 0, j, S);
          return this;
        }
        let P;
        if (typeof F == "object") {
          const { schemaId: L } = this.opts;
          if (P = F[L], P !== void 0 && typeof P != "string")
            throw new Error(`schema ${L} must be string`);
        }
        return H = (0, c.normalizeId)(H || P), this._checkUnique(H), this.schemas[H] = this._addSchema(F, j, H, S, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(F, H, j = this.opts.validateSchema) {
        return this.addSchema(F, H, !0, j), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(F, H) {
        if (typeof F == "boolean")
          return !0;
        let j;
        if (j = F.$schema, j !== void 0 && typeof j != "string")
          throw new Error("$schema must be a string");
        if (j = j || this.opts.defaultMeta || this.defaultMeta(), !j)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const S = this.validate(j, F);
        if (!S && H) {
          const P = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(P);
          else
            throw new Error(P);
        }
        return S;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(F) {
        let H;
        for (; typeof (H = p.call(this, F)) == "string"; )
          F = H;
        if (H === void 0) {
          const { schemaId: j } = this.opts, S = new i.SchemaEnv({ schema: {}, schemaId: j });
          if (H = i.resolveSchema.call(this, S, F), !H)
            return;
          this.refs[F] = H;
        }
        return H.validate || this._compileSchemaEnv(H);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(F) {
        if (F instanceof RegExp)
          return this._removeAllSchemas(this.schemas, F), this._removeAllSchemas(this.refs, F), this;
        switch (typeof F) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const H = p.call(this, F);
            return typeof H == "object" && this._cache.delete(H.schema), delete this.schemas[F], delete this.refs[F], this;
          }
          case "object": {
            const H = F;
            this._cache.delete(H);
            let j = F[this.opts.schemaId];
            return j && (j = (0, c.normalizeId)(j), delete this.schemas[j], delete this.refs[j]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(F) {
        for (const H of F)
          this.addKeyword(H);
        return this;
      }
      addKeyword(F, H) {
        let j;
        if (typeof F == "string")
          j = F, typeof H == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), H.keyword = j);
        else if (typeof F == "object" && H === void 0) {
          if (H = F, j = H.keyword, Array.isArray(j) && !j.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (z.call(this, j, H), !H)
          return (0, d.eachItem)(j, (P) => V.call(this, P)), this;
        oe.call(this, H);
        const S = {
          ...H,
          type: (0, l.getJSONTypes)(H.type),
          schemaType: (0, l.getJSONTypes)(H.schemaType)
        };
        return (0, d.eachItem)(j, S.type.length === 0 ? (P) => V.call(this, P, S) : (P) => S.type.forEach((L) => V.call(this, P, S, L))), this;
      }
      getKeyword(F) {
        const H = this.RULES.all[F];
        return typeof H == "object" ? H.definition : !!H;
      }
      // Remove keyword
      removeKeyword(F) {
        const { RULES: H } = this;
        delete H.keywords[F], delete H.all[F];
        for (const j of H.rules) {
          const S = j.rules.findIndex((P) => P.keyword === F);
          S >= 0 && j.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(F, H) {
        return typeof H == "string" && (H = new RegExp(H)), this.formats[F] = H, this;
      }
      errorsText(F = this.errors, { separator: H = ", ", dataVar: j = "data" } = {}) {
        return !F || F.length === 0 ? "No errors" : F.map((S) => `${j}${S.instancePath} ${S.message}`).reduce((S, P) => S + H + P);
      }
      $dataMetaSchema(F, H) {
        const j = this.RULES.all;
        F = JSON.parse(JSON.stringify(F));
        for (const S of H) {
          const P = S.split("/").slice(1);
          let L = F;
          for (const K of P)
            L = L[K];
          for (const K in j) {
            const te = j[K];
            if (typeof te != "object")
              continue;
            const { $data: Y } = te.definition, ne = L[K];
            Y && ne && (L[K] = re(ne));
          }
        }
        return F;
      }
      _removeAllSchemas(F, H) {
        for (const j in F) {
          const S = F[j];
          (!H || H.test(j)) && (typeof S == "string" ? delete F[j] : S && !S.meta && (this._cache.delete(S.schema), delete F[j]));
        }
      }
      _addSchema(F, H, j, S = this.opts.validateSchema, P = this.opts.addUsedSchema) {
        let L;
        const { schemaId: K } = this.opts;
        if (typeof F == "object")
          L = F[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof F != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let te = this._cache.get(F);
        if (te !== void 0)
          return te;
        j = (0, c.normalizeId)(L || j);
        const Y = c.getSchemaRefs.call(this, F, j);
        return te = new i.SchemaEnv({ schema: F, schemaId: K, meta: H, baseId: j, localRefs: Y }), this._cache.set(te.schema, te), P && !j.startsWith("#") && (j && this._checkUnique(j), this.refs[j] = te), S && this.validateSchema(F, !0), te;
      }
      _checkUnique(F) {
        if (this.schemas[F] || this.refs[F])
          throw new Error(`schema with key or id "${F}" already exists`);
      }
      _compileSchemaEnv(F) {
        if (F.meta ? this._compileMetaSchema(F) : i.compileSchema.call(this, F), !F.validate)
          throw new Error("ajv implementation error");
        return F.validate;
      }
      _compileMetaSchema(F) {
        const H = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, F);
        } finally {
          this.opts = H;
        }
      }
    }
    _.ValidationError = r.default, _.MissingRefError = s.default, e.default = _;
    function u(W, F, H, j = "error") {
      for (const S in W) {
        const P = S;
        P in F && this.logger[j](`${H}: option ${S}. ${W[P]}`);
      }
    }
    function p(W) {
      return W = (0, c.normalizeId)(W), this.schemas[W] || this.refs[W];
    }
    function $() {
      const W = this.opts.schemas;
      if (W)
        if (Array.isArray(W))
          this.addSchema(W);
        else
          for (const F in W)
            this.addSchema(W[F], F);
    }
    function C() {
      for (const W in this.opts.formats) {
        const F = this.opts.formats[W];
        F && this.addFormat(W, F);
      }
    }
    function A(W) {
      if (Array.isArray(W)) {
        this.addVocabulary(W);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const F in W) {
        const H = W[F];
        H.keyword || (H.keyword = F), this.addKeyword(H);
      }
    }
    function E() {
      const W = { ...this.opts };
      for (const F of b)
        delete W[F];
      return W;
    }
    const O = { log() {
    }, warn() {
    }, error() {
    } };
    function R(W) {
      if (W === !1)
        return O;
      if (W === void 0)
        return console;
      if (W.log && W.warn && W.error)
        return W;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function z(W, F) {
      const { RULES: H } = this;
      if ((0, d.eachItem)(W, (j) => {
        if (H.keywords[j])
          throw new Error(`Keyword ${j} is already defined`);
        if (!D.test(j))
          throw new Error(`Keyword ${j} has invalid name`);
      }), !!F && F.$data && !("code" in F || "validate" in F))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function V(W, F, H) {
      var j;
      const S = F?.post;
      if (H && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: P } = this;
      let L = S ? P.post : P.rules.find(({ type: te }) => te === H);
      if (L || (L = { type: H, rules: [] }, P.rules.push(L)), P.keywords[W] = !0, !F)
        return;
      const K = {
        keyword: W,
        definition: {
          ...F,
          type: (0, l.getJSONTypes)(F.type),
          schemaType: (0, l.getJSONTypes)(F.schemaType)
        }
      };
      F.before ? G.call(this, L, K, F.before) : L.rules.push(K), P.all[W] = K, (j = F.implements) === null || j === void 0 || j.forEach((te) => this.addKeyword(te));
    }
    function G(W, F, H) {
      const j = W.rules.findIndex((S) => S.keyword === H);
      j >= 0 ? W.rules.splice(j, 0, F) : (W.rules.push(F), this.logger.warn(`rule ${H} is not defined`));
    }
    function oe(W) {
      let { metaSchema: F } = W;
      F !== void 0 && (W.$data && this.opts.$data && (F = re(F)), W.validateSchema = this.compile(F, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function re(W) {
      return { anyOf: [W, X] };
    }
  })(yr)), yr;
}
var Gt = {}, Wt = {}, Jt = {}, fs;
function dl() {
  if (fs) return Jt;
  fs = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Jt.default = e, Jt;
}
var Xe = {}, ps;
function uo() {
  if (ps) return Xe;
  ps = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.callRef = Xe.getValidate = void 0;
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ Le(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ De(), s = /* @__PURE__ */ or(), o = /* @__PURE__ */ de(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: d, schema: m, it: v } = l, { baseId: y, schemaEnv: b, validateName: w, opts: h, self: g } = v, { root: f } = b;
      if ((m === "#" || m === "#/") && y === f.baseId)
        return _();
      const k = s.resolveRef.call(g, f, y, m);
      if (k === void 0)
        throw new e.default(v.opts.uriResolver, y, m);
      if (k instanceof s.SchemaEnv)
        return u(k);
      return p(k);
      function _() {
        if (b === f)
          return c(l, w, b, b.$async);
        const $ = d.scopeValue("root", { ref: f });
        return c(l, (0, n._)`${$}.validate`, f, f.$async);
      }
      function u($) {
        const C = a(l, $);
        c(l, C, $, $.$async);
      }
      function p($) {
        const C = d.scopeValue("schema", h.code.source === !0 ? { ref: $, code: (0, n.stringify)($) } : { ref: $ }), A = d.name("valid"), E = l.subschema({
          schema: $,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: C,
          errSchemaPath: m
        }, A);
        l.mergeEvaluated(E), l.ok(A);
      }
    }
  };
  function a(l, d) {
    const { gen: m } = l;
    return d.validate ? m.scopeValue("validate", { ref: d.validate }) : (0, n._)`${m.scopeValue("wrapper", { ref: d })}.validate`;
  }
  Xe.getValidate = a;
  function c(l, d, m, v) {
    const { gen: y, it: b } = l, { allErrors: w, schemaEnv: h, opts: g } = b, f = g.passContext ? r.default.this : n.nil;
    v ? k() : _();
    function k() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const $ = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(l, d, f)}`), p(d), w || y.assign($, !0);
      }, (C) => {
        y.if((0, n._)`!(${C} instanceof ${b.ValidationError})`, () => y.throw(C)), u(C), w || y.assign($, !1);
      }), l.ok($);
    }
    function _() {
      l.result((0, t.callValidateCode)(l, d, f), () => p(d), () => u(d));
    }
    function u($) {
      const C = (0, n._)`${$}.errors`;
      y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${C} : ${r.default.vErrors}.concat(${C})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function p($) {
      var C;
      if (!b.opts.unevaluated)
        return;
      const A = (C = m?.validate) === null || C === void 0 ? void 0 : C.evaluated;
      if (b.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (b.props = o.mergeEvaluated.props(y, A.props, b.props));
        else {
          const E = y.var("props", (0, n._)`${$}.evaluated.props`);
          b.props = o.mergeEvaluated.props(y, E, b.props, n.Name);
        }
      if (b.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (b.items = o.mergeEvaluated.items(y, A.items, b.items));
        else {
          const E = y.var("items", (0, n._)`${$}.evaluated.items`);
          b.items = o.mergeEvaluated.items(y, E, b.items, n.Name);
        }
    }
  }
  return Xe.callRef = c, Xe.default = i, Xe;
}
var hs;
function ul() {
  if (hs) return Wt;
  hs = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dl(), t = /* @__PURE__ */ uo(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Wt.default = n, Wt;
}
var Yt = {}, Xt = {}, ms;
function fl() {
  if (ms) return Xt;
  ms = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: o, schemaCode: i }) => (0, e.str)`must be ${n[o].okStr} ${i}`,
    params: ({ keyword: o, schemaCode: i }) => (0, e._)`{comparison: ${n[o].okStr}, limit: ${i}}`
  }, s = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(o) {
      const { keyword: i, data: a, schemaCode: c } = o;
      o.fail$data((0, e._)`${a} ${n[i].fail} ${c} || isNaN(${a})`);
    }
  };
  return Xt.default = s, Xt;
}
var Zt = {}, gs;
function pl() {
  if (gs) return Zt;
  gs = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: s, data: o, schemaCode: i, it: a } = r, c = a.opts.multipleOfPrecision, l = s.let("res"), d = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      r.fail$data((0, e._)`(${i} === 0 || (${l} = ${o}/${i}, ${d}))`);
    }
  };
  return Zt.default = n, Zt;
}
var Qt = {}, en = {}, ys;
function hl() {
  if (ys) return en;
  ys = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, s = 0, o;
    for (; s < n; )
      r++, o = t.charCodeAt(s++), o >= 55296 && o <= 56319 && s < n && (o = t.charCodeAt(s), (o & 64512) === 56320 && s++);
    return r;
  }
  return en.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', en;
}
var $s;
function ml() {
  if ($s) return Qt;
  $s = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ hl(), s = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: i }) {
        const a = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${i} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: i, data: a, schemaCode: c, it: l } = o, d = i === "maxLength" ? e.operators.GT : e.operators.LT, m = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${m} ${d} ${c}`);
    }
  };
  return Qt.default = s, Qt;
}
var tn = {}, bs;
function gl() {
  if (bs) return tn;
  bs = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Le(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ ie(), s = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: i, data: a, $data: c, schema: l, schemaCode: d, it: m } = o, v = m.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: y } = m.opts.code, b = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), w = i.let("valid");
        i.try(() => i.assign(w, (0, n._)`${b}(${d}, ${v}).test(${a})`), () => i.assign(w, !1)), o.fail$data((0, n._)`!${w}`);
      } else {
        const y = (0, e.usePattern)(o, l);
        o.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return tn.default = s, tn;
}
var nn = {}, vs;
function yl() {
  if (vs) return nn;
  vs = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const o = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${s} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: o, schemaCode: i } = r, a = s === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${o}).length ${a} ${i}`);
    }
  };
  return nn.default = n, nn;
}
var rn = {}, ws;
function $l() {
  if (ws) return rn;
  ws = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Le(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ de(), s = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: i, schema: a, schemaCode: c, data: l, $data: d, it: m } = o, { opts: v } = m;
      if (!d && a.length === 0)
        return;
      const y = a.length >= v.loopRequired;
      if (m.allErrors ? b() : w(), v.strictRequired) {
        const f = o.parentSchema.properties, { definedProperties: k } = o.it;
        for (const _ of a)
          if (f?.[_] === void 0 && !k.has(_)) {
            const u = m.schemaEnv.baseId + m.errSchemaPath, p = `required property "${_}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(m, p, m.opts.strictRequired);
          }
      }
      function b() {
        if (y || d)
          o.block$data(t.nil, h);
        else
          for (const f of a)
            (0, e.checkReportMissingProp)(o, f);
      }
      function w() {
        const f = i.let("missing");
        if (y || d) {
          const k = i.let("valid", !0);
          o.block$data(k, () => g(f, k)), o.ok(k);
        } else
          i.if((0, e.checkMissingProp)(o, a, f)), (0, e.reportMissingProp)(o, f), i.else();
      }
      function h() {
        i.forOf("prop", c, (f) => {
          o.setParams({ missingProperty: f }), i.if((0, e.noPropertyInData)(i, l, f, v.ownProperties), () => o.error());
        });
      }
      function g(f, k) {
        o.setParams({ missingProperty: f }), i.forOf(f, c, () => {
          i.assign(k, (0, e.propertyInData)(i, l, f, v.ownProperties)), i.if((0, t.not)(k), () => {
            o.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return rn.default = s, rn;
}
var on = {}, _s;
function bl() {
  if (_s) return on;
  _s = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const o = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${s} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: o, schemaCode: i } = r, a = s === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${o}.length ${a} ${i}`);
    }
  };
  return on.default = n, on;
}
var sn = {}, an = {}, Ss;
function fo() {
  if (Ss) return an;
  Ss = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = ya();
  return e.code = 'require("ajv/dist/runtime/equal").default', an.default = e, an;
}
var ks;
function vl() {
  if (ks) return sn;
  ks = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ fo(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: c, $data: l, schema: d, parentSchema: m, schemaCode: v, it: y } = i;
      if (!l && !d)
        return;
      const b = a.let("valid"), w = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      i.block$data(b, h, (0, t._)`${v} === false`), i.ok(b);
      function h() {
        const _ = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        i.setParams({ i: _, j: u }), a.assign(b, !0), a.if((0, t._)`${_} > 1`, () => (g() ? f : k)(_, u));
      }
      function g() {
        return w.length > 0 && !w.some((_) => _ === "object" || _ === "array");
      }
      function f(_, u) {
        const p = a.name("item"), $ = (0, e.checkDataTypes)(w, p, y.opts.strictNumbers, e.DataType.Wrong), C = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${_}--;`, () => {
          a.let(p, (0, t._)`${c}[${_}]`), a.if($, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${p} == "string"`, (0, t._)`${p} += "_"`), a.if((0, t._)`typeof ${C}[${p}] == "number"`, () => {
            a.assign(u, (0, t._)`${C}[${p}]`), i.error(), a.assign(b, !1).break();
          }).code((0, t._)`${C}[${p}] = ${_}`);
        });
      }
      function k(_, u) {
        const p = (0, n.useFunc)(a, r.default), $ = a.name("outer");
        a.label($).for((0, t._)`;${_}--;`, () => a.for((0, t._)`${u} = ${_}; ${u}--;`, () => a.if((0, t._)`${p}(${c}[${_}], ${c}[${u}])`, () => {
          i.error(), a.assign(b, !1).break($);
        })));
      }
    }
  };
  return sn.default = o, sn;
}
var cn = {}, Cs;
function wl() {
  if (Cs) return cn;
  Cs = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ fo(), s = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: i, data: a, $data: c, schemaCode: l, schema: d } = o;
      c || d && typeof d == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${l})`) : o.fail((0, e._)`${d} !== ${a}`);
    }
  };
  return cn.default = s, cn;
}
var ln = {}, Es;
function _l() {
  if (Es) return ln;
  Es = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ fo(), s = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: i, data: a, $data: c, schema: l, schemaCode: d, it: m } = o;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const v = l.length >= m.opts.loopEnum;
      let y;
      const b = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let w;
      if (v || c)
        w = i.let("valid"), o.block$data(w, h);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const f = i.const("vSchema", d);
        w = (0, e.or)(...l.map((k, _) => g(f, _)));
      }
      o.pass(w);
      function h() {
        i.assign(w, !1), i.forOf("v", d, (f) => i.if((0, e._)`${b()}(${a}, ${f})`, () => i.assign(w, !0).break()));
      }
      function g(f, k) {
        const _ = l[k];
        return typeof _ == "object" && _ !== null ? (0, e._)`${b()}(${a}, ${f}[${k}])` : (0, e._)`${a} === ${_}`;
      }
    }
  };
  return ln.default = s, ln;
}
var xs;
function Sl() {
  if (xs) return Yt;
  xs = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fl(), t = /* @__PURE__ */ pl(), n = /* @__PURE__ */ ml(), r = /* @__PURE__ */ gl(), s = /* @__PURE__ */ yl(), o = /* @__PURE__ */ $l(), i = /* @__PURE__ */ bl(), a = /* @__PURE__ */ vl(), c = /* @__PURE__ */ wl(), l = /* @__PURE__ */ _l(), d = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    s.default,
    o.default,
    // array
    i.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    l.default
  ];
  return Yt.default = d, Yt;
}
var dn = {}, pt = {}, As;
function ba() {
  if (As) return pt;
  As = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: i, it: a } = o, { items: c } = i;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      s(o, c);
    }
  };
  function s(o, i) {
    const { gen: a, schema: c, data: l, keyword: d, it: m } = o;
    m.items = !0;
    const v = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      o.setParams({ len: i.length }), o.pass((0, e._)`${v} <= ${i.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(m, c)) {
      const b = a.var("valid", (0, e._)`${v} <= ${i.length}`);
      a.if((0, e.not)(b), () => y(b)), o.ok(b);
    }
    function y(b) {
      a.forRange("i", i.length, v, (w) => {
        o.subschema({ keyword: d, dataProp: w, dataPropType: t.Type.Num }, b), m.allErrors || a.if((0, e.not)(b), () => a.break());
      });
    }
  }
  return pt.validateAdditionalItems = s, pt.default = r, pt;
}
var un = {}, ht = {}, Ps;
function va() {
  if (Ps) return ht;
  Ps = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.validateTuple = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ Le(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: i, it: a } = o;
      if (Array.isArray(i))
        return s(o, "additionalItems", i);
      a.items = !0, !(0, t.alwaysValidSchema)(a, i) && o.ok((0, n.validateArray)(o));
    }
  };
  function s(o, i, a = o.schema) {
    const { gen: c, parentSchema: l, data: d, keyword: m, it: v } = o;
    w(l), v.opts.unevaluated && a.length && v.items !== !0 && (v.items = t.mergeEvaluated.items(c, a.length, v.items));
    const y = c.name("valid"), b = c.const("len", (0, e._)`${d}.length`);
    a.forEach((h, g) => {
      (0, t.alwaysValidSchema)(v, h) || (c.if((0, e._)`${b} > ${g}`, () => o.subschema({
        keyword: m,
        schemaProp: g,
        dataProp: g
      }, y)), o.ok(y));
    });
    function w(h) {
      const { opts: g, errSchemaPath: f } = v, k = a.length, _ = k === h.minItems && (k === h.maxItems || h[i] === !1);
      if (g.strictTuples && !_) {
        const u = `"${m}" is ${k}-tuple, but minItems or maxItems/${i} are not specified or different at path "${f}"`;
        (0, t.checkStrictMode)(v, u, g.strictTuples);
      }
    }
  }
  return ht.validateTuple = s, ht.default = r, ht;
}
var Rs;
function kl() {
  if (Rs) return un;
  Rs = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ va(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return un.default = t, un;
}
var fn = {}, Ms;
function Cl() {
  if (Ms) return fn;
  Ms = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ Le(), r = /* @__PURE__ */ ba(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: c, it: l } = i, { prefixItems: d } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (d ? (0, r.validateAdditionalItems)(i, d) : i.ok((0, n.validateArray)(i)));
    }
  };
  return fn.default = o, fn;
}
var pn = {}, Ns;
function El() {
  if (Ns) return pn;
  Ns = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: s, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${s} valid item(s)` : (0, e.str)`must contain at least ${s} and no more than ${o} valid item(s)`,
      params: ({ params: { min: s, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${s}}` : (0, e._)`{minContains: ${s}, maxContains: ${o}}`
    },
    code(s) {
      const { gen: o, schema: i, parentSchema: a, data: c, it: l } = s;
      let d, m;
      const { minContains: v, maxContains: y } = a;
      l.opts.next ? (d = v === void 0 ? 1 : v, m = y) : d = 1;
      const b = o.const("len", (0, e._)`${c}.length`);
      if (s.setParams({ min: d, max: m }), m === void 0 && d === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (m !== void 0 && d > m) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), s.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, i)) {
        let k = (0, e._)`${b} >= ${d}`;
        m !== void 0 && (k = (0, e._)`${k} && ${b} <= ${m}`), s.pass(k);
        return;
      }
      l.items = !0;
      const w = o.name("valid");
      m === void 0 && d === 1 ? g(w, () => o.if(w, () => o.break())) : d === 0 ? (o.let(w, !0), m !== void 0 && o.if((0, e._)`${c}.length > 0`, h)) : (o.let(w, !1), h()), s.result(w, () => s.reset());
      function h() {
        const k = o.name("_valid"), _ = o.let("count", 0);
        g(k, () => o.if(k, () => f(_)));
      }
      function g(k, _) {
        o.forRange("i", 0, b, (u) => {
          s.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, k), _();
        });
      }
      function f(k) {
        o.code((0, e._)`${k}++`), m === void 0 ? o.if((0, e._)`${k} >= ${d}`, () => o.assign(w, !0).break()) : (o.if((0, e._)`${k} > ${m}`, () => o.assign(w, !1).break()), d === 1 ? o.assign(w, !0) : o.if((0, e._)`${k} >= ${d}`, () => o.assign(w, !0)));
      }
    }
  };
  return pn.default = r, pn;
}
var Er = {}, Ts;
function po() {
  return Ts || (Ts = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ Le();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: d } }) => {
        const m = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${m} ${d} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: d, missingProperty: m } }) => (0, t._)`{property: ${c},
    missingProperty: ${m},
    depsCount: ${l},
    deps: ${d}}`
      // TODO change to reference
    };
    const s = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, d] = o(c);
        i(c, l), a(c, d);
      }
    };
    function o({ schema: c }) {
      const l = {}, d = {};
      for (const m in c) {
        if (m === "__proto__")
          continue;
        const v = Array.isArray(c[m]) ? l : d;
        v[m] = c[m];
      }
      return [l, d];
    }
    function i(c, l = c.schema) {
      const { gen: d, data: m, it: v } = c;
      if (Object.keys(l).length === 0)
        return;
      const y = d.let("missing");
      for (const b in l) {
        const w = l[b];
        if (w.length === 0)
          continue;
        const h = (0, r.propertyInData)(d, m, b, v.opts.ownProperties);
        c.setParams({
          property: b,
          depsCount: w.length,
          deps: w.join(", ")
        }), v.allErrors ? d.if(h, () => {
          for (const g of w)
            (0, r.checkReportMissingProp)(c, g);
        }) : (d.if((0, t._)`${h} && (${(0, r.checkMissingProp)(c, w, y)})`), (0, r.reportMissingProp)(c, y), d.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(c, l = c.schema) {
      const { gen: d, data: m, keyword: v, it: y } = c, b = d.name("valid");
      for (const w in l)
        (0, n.alwaysValidSchema)(y, l[w]) || (d.if(
          (0, r.propertyInData)(d, m, w, y.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: v, schemaProp: w }, b);
            c.mergeValidEvaluated(h, b);
          },
          () => d.var(b, !0)
          // TODO var
        ), c.ok(b));
    }
    e.validateSchemaDeps = a, e.default = s;
  })(Er)), Er;
}
var hn = {}, Os;
function xl() {
  if (Os) return hn;
  Os = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: s }) => (0, e._)`{propertyName: ${s.propertyName}}`
    },
    code(s) {
      const { gen: o, schema: i, data: a, it: c } = s;
      if ((0, t.alwaysValidSchema)(c, i))
        return;
      const l = o.name("valid");
      o.forIn("key", a, (d) => {
        s.setParams({ propertyName: d }), s.subschema({
          keyword: "propertyNames",
          data: d,
          dataTypes: ["string"],
          propertyName: d,
          compositeRule: !0
        }, l), o.if((0, e.not)(l), () => {
          s.error(!0), c.allErrors || o.break();
        });
      }), s.ok(l);
    }
  };
  return hn.default = r, hn;
}
var mn = {}, Fs;
function wa() {
  if (Fs) return mn;
  Fs = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Le(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ De(), r = /* @__PURE__ */ de(), o = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: i }) => (0, t._)`{additionalProperty: ${i.additionalProperty}}`
    },
    code(i) {
      const { gen: a, schema: c, parentSchema: l, data: d, errsCount: m, it: v } = i;
      if (!m)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: b } = v;
      if (v.props = !0, b.removeAdditional !== "all" && (0, r.alwaysValidSchema)(v, c))
        return;
      const w = (0, e.allSchemaProperties)(l.properties), h = (0, e.allSchemaProperties)(l.patternProperties);
      g(), i.ok((0, t._)`${m} === ${n.default.errors}`);
      function g() {
        a.forIn("key", d, (p) => {
          !w.length && !h.length ? _(p) : a.if(f(p), () => _(p));
        });
      }
      function f(p) {
        let $;
        if (w.length > 8) {
          const C = (0, r.schemaRefOrVal)(v, l.properties, "properties");
          $ = (0, e.isOwnProperty)(a, C, p);
        } else w.length ? $ = (0, t.or)(...w.map((C) => (0, t._)`${p} === ${C}`)) : $ = t.nil;
        return h.length && ($ = (0, t.or)($, ...h.map((C) => (0, t._)`${(0, e.usePattern)(i, C)}.test(${p})`))), (0, t.not)($);
      }
      function k(p) {
        a.code((0, t._)`delete ${d}[${p}]`);
      }
      function _(p) {
        if (b.removeAdditional === "all" || b.removeAdditional && c === !1) {
          k(p);
          return;
        }
        if (c === !1) {
          i.setParams({ additionalProperty: p }), i.error(), y || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(v, c)) {
          const $ = a.name("valid");
          b.removeAdditional === "failing" ? (u(p, $, !1), a.if((0, t.not)($), () => {
            i.reset(), k(p);
          })) : (u(p, $), y || a.if((0, t.not)($), () => a.break()));
        }
      }
      function u(p, $, C) {
        const A = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: r.Type.Str
        };
        C === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(A, $);
      }
    }
  };
  return mn.default = o, mn;
}
var gn = {}, zs;
function Al() {
  if (zs) return gn;
  zs = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nr(), t = /* @__PURE__ */ Le(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ wa(), s = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: i, schema: a, parentSchema: c, data: l, it: d } = o;
      d.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(d, r.default, "additionalProperties"));
      const m = (0, t.allSchemaProperties)(a);
      for (const h of m)
        d.definedProperties.add(h);
      d.opts.unevaluated && m.length && d.props !== !0 && (d.props = n.mergeEvaluated.props(i, (0, n.toHash)(m), d.props));
      const v = m.filter((h) => !(0, n.alwaysValidSchema)(d, a[h]));
      if (v.length === 0)
        return;
      const y = i.name("valid");
      for (const h of v)
        b(h) ? w(h) : (i.if((0, t.propertyInData)(i, l, h, d.opts.ownProperties)), w(h), d.allErrors || i.else().var(y, !0), i.endIf()), o.it.definedProperties.add(h), o.ok(y);
      function b(h) {
        return d.opts.useDefaults && !d.compositeRule && a[h].default !== void 0;
      }
      function w(h) {
        o.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, y);
      }
    }
  };
  return gn.default = s, gn;
}
var yn = {}, js;
function Pl() {
  if (js) return yn;
  js = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Le(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ de(), s = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: i, schema: a, data: c, parentSchema: l, it: d } = o, { opts: m } = d, v = (0, e.allSchemaProperties)(a), y = v.filter((_) => (0, n.alwaysValidSchema)(d, a[_]));
      if (v.length === 0 || y.length === v.length && (!d.opts.unevaluated || d.props === !0))
        return;
      const b = m.strictSchema && !m.allowMatchingProperties && l.properties, w = i.name("valid");
      d.props !== !0 && !(d.props instanceof t.Name) && (d.props = (0, r.evaluatedPropsToName)(i, d.props));
      const { props: h } = d;
      g();
      function g() {
        for (const _ of v)
          b && f(_), d.allErrors ? k(_) : (i.var(w, !0), k(_), i.if(w));
      }
      function f(_) {
        for (const u in b)
          new RegExp(_).test(u) && (0, n.checkStrictMode)(d, `property ${u} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function k(_) {
        i.forIn("key", c, (u) => {
          i.if((0, t._)`${(0, e.usePattern)(o, _)}.test(${u})`, () => {
            const p = y.includes(_);
            p || o.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: u,
              dataPropType: r.Type.Str
            }, w), d.opts.unevaluated && h !== !0 ? i.assign((0, t._)`${h}[${u}]`, !0) : !p && !d.allErrors && i.if((0, t.not)(w), () => i.break());
          });
        });
      }
    }
  };
  return yn.default = s, yn;
}
var $n = {}, Is;
function Rl() {
  if (Is) return $n;
  Is = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: s, it: o } = n;
      if ((0, e.alwaysValidSchema)(o, s)) {
        n.fail();
        return;
      }
      const i = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, i), n.failResult(i, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return $n.default = t, $n;
}
var bn = {}, Ds;
function Ml() {
  if (Ds) return bn;
  Ds = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Le()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return bn.default = t, bn;
}
var vn = {}, Ls;
function Nl() {
  if (Ls) return vn;
  Ls = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: s }) => (0, e._)`{passingSchemas: ${s.passing}}`
    },
    code(s) {
      const { gen: o, schema: i, parentSchema: a, it: c } = s;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const l = i, d = o.let("valid", !1), m = o.let("passing", null), v = o.name("_valid");
      s.setParams({ passing: m }), o.block(y), s.result(d, () => s.reset(), () => s.error(!0));
      function y() {
        l.forEach((b, w) => {
          let h;
          (0, t.alwaysValidSchema)(c, b) ? o.var(v, !0) : h = s.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, v), w > 0 && o.if((0, e._)`${v} && ${d}`).assign(d, !1).assign(m, (0, e._)`[${m}, ${w}]`).else(), o.if(v, () => {
            o.assign(d, !0), o.assign(m, w), h && s.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return vn.default = r, vn;
}
var wn = {}, qs;
function Tl() {
  if (qs) return wn;
  qs = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: s, it: o } = n;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      const i = r.name("valid");
      s.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const l = n.subschema({ keyword: "allOf", schemaProp: c }, i);
        n.ok(i), n.mergeEvaluated(l);
      });
    }
  };
  return wn.default = t, wn;
}
var _n = {}, Bs;
function Ol() {
  if (Bs) return _n;
  Bs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: i, parentSchema: a, it: c } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const l = s(c, "then"), d = s(c, "else");
      if (!l && !d)
        return;
      const m = i.let("valid", !0), v = i.name("_valid");
      if (y(), o.reset(), l && d) {
        const w = i.let("ifClause");
        o.setParams({ ifClause: w }), i.if(v, b("then", w), b("else", w));
      } else l ? i.if(v, b("then")) : i.if((0, e.not)(v), b("else"));
      o.pass(m, () => o.error(!0));
      function y() {
        const w = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, v);
        o.mergeEvaluated(w);
      }
      function b(w, h) {
        return () => {
          const g = o.subschema({ keyword: w }, v);
          i.assign(m, v), o.mergeValidEvaluated(g, m), h ? i.assign(h, (0, e._)`${w}`) : o.setParams({ ifClause: w });
        };
      }
    }
  };
  function s(o, i) {
    const a = o.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return _n.default = r, _n;
}
var Sn = {}, Vs;
function Fl() {
  if (Vs) return Sn;
  Vs = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: s }) {
      r.if === void 0 && (0, e.checkStrictMode)(s, `"${n}" without "if" is ignored`);
    }
  };
  return Sn.default = t, Sn;
}
var Us;
function zl() {
  if (Us) return dn;
  Us = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ba(), t = /* @__PURE__ */ kl(), n = /* @__PURE__ */ va(), r = /* @__PURE__ */ Cl(), s = /* @__PURE__ */ El(), o = /* @__PURE__ */ po(), i = /* @__PURE__ */ xl(), a = /* @__PURE__ */ wa(), c = /* @__PURE__ */ Al(), l = /* @__PURE__ */ Pl(), d = /* @__PURE__ */ Rl(), m = /* @__PURE__ */ Ml(), v = /* @__PURE__ */ Nl(), y = /* @__PURE__ */ Tl(), b = /* @__PURE__ */ Ol(), w = /* @__PURE__ */ Fl();
  function h(g = !1) {
    const f = [
      // any
      d.default,
      m.default,
      v.default,
      y.default,
      b.default,
      w.default,
      // object
      i.default,
      a.default,
      o.default,
      c.default,
      l.default
    ];
    return g ? f.push(t.default, r.default) : f.push(e.default, n.default), f.push(s.default), f;
  }
  return dn.default = h, dn;
}
var kn = {}, mt = {}, Hs;
function _a() {
  if (Hs) return mt;
  Hs = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ or(), r = /* @__PURE__ */ uo(), s = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, c) {
    const { gen: l, it: d } = a;
    d.schemaEnv.root.dynamicAnchors[c] = !0;
    const m = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, v = d.errSchemaPath === "#" ? d.validateName : i(a);
    l.if((0, e._)`!${m}`, () => l.assign(m, v));
  }
  mt.dynamicAnchor = o;
  function i(a) {
    const { schemaEnv: c, schema: l, self: d } = a.it, { root: m, baseId: v, localRefs: y, meta: b } = c.root, { schemaId: w } = d.opts, h = new n.SchemaEnv({ schema: l, schemaId: w, root: m, baseId: v, localRefs: y, meta: b });
    return n.compileSchema.call(d, h), (0, r.getValidate)(a, h);
  }
  return mt.default = s, mt;
}
var gt = {}, Ks;
function Sa() {
  if (Ks) return gt;
  Ks = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ uo(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => s(o, o.schema)
  };
  function s(o, i) {
    const { gen: a, keyword: c, it: l } = o;
    if (i[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const d = i.slice(1);
    if (l.allErrors)
      m();
    else {
      const y = a.let("valid", !1);
      m(y), o.ok(y);
    }
    function m(y) {
      if (l.schemaEnv.root.dynamicAnchors[d]) {
        const b = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`);
        a.if(b, v(b, y), v(l.validateName, y));
      } else
        v(l.validateName, y)();
    }
    function v(y, b) {
      return b ? () => a.block(() => {
        (0, n.callRef)(o, y), a.let(b, !0);
      }) : () => (0, n.callRef)(o, y);
    }
  }
  return gt.dynamicRef = s, gt.default = r, gt;
}
var Cn = {}, Gs;
function jl() {
  if (Gs) return Cn;
  Gs = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _a(), t = /* @__PURE__ */ de(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Cn.default = n, Cn;
}
var En = {}, Ws;
function Il() {
  if (Ws) return En;
  Ws = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sa(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return En.default = t, En;
}
var Js;
function Dl() {
  if (Js) return kn;
  Js = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _a(), t = /* @__PURE__ */ Sa(), n = /* @__PURE__ */ jl(), r = /* @__PURE__ */ Il(), s = [e.default, t.default, n.default, r.default];
  return kn.default = s, kn;
}
var xn = {}, An = {}, Ys;
function Ll() {
  if (Ys) return An;
  Ys = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ po(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return An.default = t, An;
}
var Pn = {}, Xs;
function ql() {
  if (Xs) return Pn;
  Xs = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ po(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Pn.default = t, Pn;
}
var Rn = {}, Zs;
function Bl() {
  if (Zs) return Rn;
  Zs = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: s }) {
      r.contains === void 0 && (0, e.checkStrictMode)(s, `"${n}" without "contains" is ignored`);
    }
  };
  return Rn.default = t, Rn;
}
var Qs;
function Vl() {
  if (Qs) return xn;
  Qs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ll(), t = /* @__PURE__ */ ql(), n = /* @__PURE__ */ Bl(), r = [e.default, t.default, n.default];
  return xn.default = r, xn;
}
var Mn = {}, Nn = {}, ei;
function Ul() {
  if (ei) return Nn;
  ei = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ De(), s = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: i, schema: a, data: c, errsCount: l, it: d } = o;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: m, props: v } = d;
      v instanceof e.Name ? i.if((0, e._)`${v} !== true`, () => i.forIn("key", c, (h) => i.if(b(v, h), () => y(h)))) : v !== !0 && i.forIn("key", c, (h) => v === void 0 ? y(h) : i.if(w(v, h), () => y(h))), d.props = !0, o.ok((0, e._)`${l} === ${n.default.errors}`);
      function y(h) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: h }), o.error(), m || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(d, a)) {
          const g = i.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: h,
            dataPropType: t.Type.Str
          }, g), m || i.if((0, e.not)(g), () => i.break());
        }
      }
      function b(h, g) {
        return (0, e._)`!${h} || !${h}[${g}]`;
      }
      function w(h, g) {
        const f = [];
        for (const k in h)
          h[k] === !0 && f.push((0, e._)`${g} !== ${k}`);
        return (0, e.and)(...f);
      }
    }
  };
  return Nn.default = s, Nn;
}
var Tn = {}, ti;
function Hl() {
  if (ti) return Tn;
  ti = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { gen: o, schema: i, data: a, it: c } = s, l = c.items || 0;
      if (l === !0)
        return;
      const d = o.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        s.setParams({ len: l }), s.fail((0, e._)`${d} > ${l}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(c, i)) {
        const v = o.var("valid", (0, e._)`${d} <= ${l}`);
        o.if((0, e.not)(v), () => m(v, l)), s.ok(v);
      }
      c.items = !0;
      function m(v, y) {
        o.forRange("i", y, d, (b) => {
          s.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: t.Type.Num }, v), c.allErrors || o.if((0, e.not)(v), () => o.break());
        });
      }
    }
  };
  return Tn.default = r, Tn;
}
var ni;
function Kl() {
  if (ni) return Mn;
  ni = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ul(), t = /* @__PURE__ */ Hl(), n = [e.default, t.default];
  return Mn.default = n, Mn;
}
var On = {}, Fn = {}, ri;
function Gl() {
  if (ri) return Fn;
  ri = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, s) {
      const { gen: o, data: i, $data: a, schema: c, schemaCode: l, it: d } = r, { opts: m, errSchemaPath: v, schemaEnv: y, self: b } = d;
      if (!m.validateFormats)
        return;
      a ? w() : h();
      function w() {
        const g = o.scopeValue("formats", {
          ref: b.formats,
          code: m.code.formats
        }), f = o.const("fDef", (0, e._)`${g}[${l}]`), k = o.let("fType"), _ = o.let("format");
        o.if((0, e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => o.assign(k, (0, e._)`${f}.type || "string"`).assign(_, (0, e._)`${f}.validate`), () => o.assign(k, (0, e._)`"string"`).assign(_, f)), r.fail$data((0, e.or)(u(), p()));
        function u() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${_}`;
        }
        function p() {
          const $ = y.$async ? (0, e._)`(${f}.async ? await ${_}(${i}) : ${_}(${i}))` : (0, e._)`${_}(${i})`, C = (0, e._)`(typeof ${_} == "function" ? ${$} : ${_}.test(${i}))`;
          return (0, e._)`${_} && ${_} !== true && ${k} === ${s} && !${C}`;
        }
      }
      function h() {
        const g = b.formats[c];
        if (!g) {
          u();
          return;
        }
        if (g === !0)
          return;
        const [f, k, _] = p(g);
        f === s && r.pass($());
        function u() {
          if (m.strictSchema === !1) {
            b.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${c}" ignored in schema at path "${v}"`;
          }
        }
        function p(C) {
          const A = C instanceof RegExp ? (0, e.regexpCode)(C) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(c)}` : void 0, E = o.scopeValue("formats", { key: c, ref: C, code: A });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${E}.validate`] : ["string", C, E];
        }
        function $() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${_}(${i})`;
          }
          return typeof k == "function" ? (0, e._)`${_}(${i})` : (0, e._)`${_}.test(${i})`;
        }
      }
    }
  };
  return Fn.default = n, Fn;
}
var oi;
function Wl() {
  if (oi) return On;
  oi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Gl()).default];
  return On.default = t, On;
}
var it = {}, si;
function Jl() {
  return si || (si = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.contentVocabulary = it.metadataVocabulary = void 0, it.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], it.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), it;
}
var ii;
function Yl() {
  if (ii) return Gt;
  ii = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ul(), t = /* @__PURE__ */ Sl(), n = /* @__PURE__ */ zl(), r = /* @__PURE__ */ Dl(), s = /* @__PURE__ */ Vl(), o = /* @__PURE__ */ Kl(), i = /* @__PURE__ */ Wl(), a = /* @__PURE__ */ Jl(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    s.default,
    o.default
  ];
  return Gt.default = c, Gt;
}
var zn = {}, Nt = {}, ai;
function Xl() {
  if (ai) return Nt;
  ai = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Nt.DiscrError = e = {})), Nt;
}
var ci;
function Zl() {
  if (ci) return zn;
  ci = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Xl(), n = /* @__PURE__ */ or(), r = /* @__PURE__ */ rr(), s = /* @__PURE__ */ de(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: d, parentSchema: m, it: v } = a, { oneOf: y } = m;
      if (!v.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const b = d.propertyName;
      if (typeof b != "string")
        throw new Error("discriminator: requires propertyName");
      if (d.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), h = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(b)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: b })), a.ok(w);
      function g() {
        const _ = k();
        c.if(!1);
        for (const u in _)
          c.elseIf((0, e._)`${h} === ${u}`), c.assign(w, f(_[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: b }), c.endIf();
      }
      function f(_) {
        const u = c.name("valid"), p = a.subschema({ keyword: "oneOf", schemaProp: _ }, u);
        return a.mergeEvaluated(p, e.Name), u;
      }
      function k() {
        var _;
        const u = {}, p = C(m);
        let $ = !0;
        for (let O = 0; O < y.length; O++) {
          let R = y[O];
          if (R?.$ref && !(0, s.schemaHasRulesButRef)(R, v.self.RULES)) {
            const z = R.$ref;
            if (R = n.resolveRef.call(v.self, v.schemaEnv.root, v.baseId, z), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(v.opts.uriResolver, v.baseId, z);
          }
          const D = (_ = R?.properties) === null || _ === void 0 ? void 0 : _[b];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
          $ = $ && (p || C(R)), A(D, O);
        }
        if (!$)
          throw new Error(`discriminator: "${b}" must be required`);
        return u;
        function C({ required: O }) {
          return Array.isArray(O) && O.includes(b);
        }
        function A(O, R) {
          if (O.const)
            E(O.const, R);
          else if (O.enum)
            for (const D of O.enum)
              E(D, R);
          else
            throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
        }
        function E(O, R) {
          if (typeof O != "string" || O in u)
            throw new Error(`discriminator: "${b}" values must be unique strings`);
          u[O] = R;
        }
      }
    }
  };
  return zn.default = i, zn;
}
var jn = {};
const Ql = "https://json-schema.org/draft/2020-12/schema", ed = "https://json-schema.org/draft/2020-12/schema", td = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, nd = "meta", rd = "Core and Validation specifications meta-schema", od = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], sd = ["object", "boolean"], id = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ad = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, cd = {
  $schema: Ql,
  $id: ed,
  $vocabulary: td,
  $dynamicAnchor: nd,
  title: rd,
  allOf: od,
  type: sd,
  $comment: id,
  properties: ad
}, ld = "https://json-schema.org/draft/2020-12/schema", dd = "https://json-schema.org/draft/2020-12/meta/applicator", ud = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, fd = "meta", pd = "Applicator vocabulary meta-schema", hd = ["object", "boolean"], md = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, gd = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, yd = {
  $schema: ld,
  $id: dd,
  $vocabulary: ud,
  $dynamicAnchor: fd,
  title: pd,
  type: hd,
  properties: md,
  $defs: gd
}, $d = "https://json-schema.org/draft/2020-12/schema", bd = "https://json-schema.org/draft/2020-12/meta/unevaluated", vd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, wd = "meta", _d = "Unevaluated applicator vocabulary meta-schema", Sd = ["object", "boolean"], kd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Cd = {
  $schema: $d,
  $id: bd,
  $vocabulary: vd,
  $dynamicAnchor: wd,
  title: _d,
  type: Sd,
  properties: kd
}, Ed = "https://json-schema.org/draft/2020-12/schema", xd = "https://json-schema.org/draft/2020-12/meta/content", Ad = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Pd = "meta", Rd = "Content vocabulary meta-schema", Md = ["object", "boolean"], Nd = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Td = {
  $schema: Ed,
  $id: xd,
  $vocabulary: Ad,
  $dynamicAnchor: Pd,
  title: Rd,
  type: Md,
  properties: Nd
}, Od = "https://json-schema.org/draft/2020-12/schema", Fd = "https://json-schema.org/draft/2020-12/meta/core", zd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, jd = "meta", Id = "Core vocabulary meta-schema", Dd = ["object", "boolean"], Ld = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, qd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Bd = {
  $schema: Od,
  $id: Fd,
  $vocabulary: zd,
  $dynamicAnchor: jd,
  title: Id,
  type: Dd,
  properties: Ld,
  $defs: qd
}, Vd = "https://json-schema.org/draft/2020-12/schema", Ud = "https://json-schema.org/draft/2020-12/meta/format-annotation", Hd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Kd = "meta", Gd = "Format vocabulary meta-schema for annotation results", Wd = ["object", "boolean"], Jd = { format: { type: "string" } }, Yd = {
  $schema: Vd,
  $id: Ud,
  $vocabulary: Hd,
  $dynamicAnchor: Kd,
  title: Gd,
  type: Wd,
  properties: Jd
}, Xd = "https://json-schema.org/draft/2020-12/schema", Zd = "https://json-schema.org/draft/2020-12/meta/meta-data", Qd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, eu = "meta", tu = "Meta-data vocabulary meta-schema", nu = ["object", "boolean"], ru = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, ou = {
  $schema: Xd,
  $id: Zd,
  $vocabulary: Qd,
  $dynamicAnchor: eu,
  title: tu,
  type: nu,
  properties: ru
}, su = "https://json-schema.org/draft/2020-12/schema", iu = "https://json-schema.org/draft/2020-12/meta/validation", au = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, cu = "meta", lu = "Validation vocabulary meta-schema", du = ["object", "boolean"], uu = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, fu = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, pu = {
  $schema: su,
  $id: iu,
  $vocabulary: au,
  $dynamicAnchor: cu,
  title: lu,
  type: du,
  properties: uu,
  $defs: fu
};
var li;
function hu() {
  if (li) return jn;
  li = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = cd, t = yd, n = Cd, r = Td, s = Bd, o = Yd, i = ou, a = pu, c = ["/properties"];
  function l(d) {
    return [
      e,
      t,
      n,
      r,
      s,
      m(this, o),
      i,
      m(this, a)
    ].forEach((v) => this.addMetaSchema(v, void 0, !1)), this;
    function m(v, y) {
      return d ? v.$dataMetaSchema(y, c) : y;
    }
  }
  return jn.default = l, jn;
}
var di;
function mu() {
  return di || (di = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ ll(), r = /* @__PURE__ */ Yl(), s = /* @__PURE__ */ Zl(), o = /* @__PURE__ */ hu(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(y = {}) {
        super({
          ...y,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((y) => this.addVocabulary(y)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: y, meta: b } = this.opts;
        b && (o.default.call(this, y), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ nr();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var l = /* @__PURE__ */ ie();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return l._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return l.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return l.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return l.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return l.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return l.CodeGen;
    } });
    var d = /* @__PURE__ */ lo();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return d.default;
    } });
    var m = /* @__PURE__ */ rr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(Bt, Bt.exports)), Bt.exports;
}
var gu = /* @__PURE__ */ mu();
const yu = /* @__PURE__ */ Gc(gu), $u = "https://json-schema.org/draft/2020-12/schema", bu = "https://raw.githubusercontent.com/omsf-eco-infra/alchemy-viz/main/schema/alchemy-viz.schema.json", vu = "alchemy-viz payload", wu = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", _u = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Su = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), ho = {
  $schema: $u,
  $id: bu,
  title: vu,
  description: wu,
  oneOf: _u,
  $defs: Su
}, Hm = [
  "AlchemicalNetworkViz",
  "ChemicalSystemViz",
  "LigandAtomMappingViz",
  "LigandNetworkViz",
  "ProteinComponentViz",
  "ProteinMembraneComponentViz",
  "ProtocolViz",
  "SmallMoleculeComponentViz",
  "SolvatedPDBComponentViz",
  "SolventComponentViz",
  "TransformationViz",
  "UnknownComponentViz"
], mo = ho.$id, go = new yu({ allErrors: !0, strict: !1 });
go.addSchema(ho, mo);
const ui = go.getSchema(mo), ku = Object.entries(ho.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ka = /* @__PURE__ */ new Map();
for (const e of ku) {
  const t = go.getSchema(`${mo}#/$defs/${e}`);
  t && ka.set(e, t);
}
const fi = { valid: !0, issues: [] };
function pi(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Cu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? ka.get(t) : void 0;
  return n ? n(e) ? fi : { valid: !1, issues: pi(n.errors) } : ui(e) ? fi : { valid: !1, issues: pi(ui.errors) };
}
function Eu(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const yo = {
  AlchemicalNetworkViz: "gufe-alchemical-network",
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  ProteinMembraneComponentViz: "gufe-protein",
  ProtocolViz: "gufe-protocol",
  SolvatedPDBComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  ChemicalSystemViz: "gufe-chemical-system",
  LigandAtomMappingViz: "gufe-atom-mapping",
  TransformationViz: "gufe-transformation",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component"
};
function xu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like an alchemy-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!yo[t]) return Au(t);
  const { valid: n, issues: r } = Cu(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the alchemy-viz schema.`,
    detail: Eu(r)
  };
}
function Au(e) {
  const t = Object.keys(yo).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class Pu extends Fe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Hc("payload", n, this);
    const r = xu(n);
    if (r)
      return t.appendChild(Ru(r, n)), {};
    const s = n.type, o = yo[s], i = document.createElement(o);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Ru(e, t) {
  const n = N(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild($e(e.message));
  const r = (o, i) => N(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${I.warnBg};color:${I.warnFg};border:1px solid ${I.warnBorder};` : `background:${I.panelBg};color:${I.textMuted2};border:1px solid ${I.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const s = Mu(t);
  return s && n.appendChild(r(s, !1)), n;
}
function Mu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${t.type}`), typeof t.name == "string" && t.name && n.push(`name: ${t.name}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
ze("alchemy-view", Pu);
function ft(e = "", t) {
  const n = N("button", jo.base + e, t);
  return n.className = jo.className, n.type = "button", n;
}
function Hr(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function sr(e, t = so.className) {
  const n = N("button", e);
  return n.className = t, n.type = "button", n.setAttribute("aria-pressed", "false"), n;
}
function Ct(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const s = N("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), o = e.map((i) => {
    const a = ft("", i.label);
    return a.title = i.title || i.label, a.onclick = () => {
      s.setActive(i.id), r?.set(i.id), n(i.id);
    }, s.appendChild(a), { id: i.id, btn: a };
  });
  return s.setActive = (i) => {
    t = i;
    for (const a of o) Hr(a.btn, a.id === t);
  }, s.setActive(t), s;
}
const Nu = parseFloat(ee.xl) * 2;
function Ca(e, t, n, r = {}) {
  const { remember: s } = r;
  if (s) {
    const m = s.get();
    e.some((v) => v.id === m) && (t = m);
  }
  const o = N("div", "display:flex;min-width:0;"), i = (m) => {
    o.setActive(m), s?.set(m), n(m);
  }, a = Ct(e, t, i), c = ir(e, t, i);
  c.style.display = "none", o.appendChild(a), o.appendChild(c), o.buttons = a, o.setActive = (m) => {
    t = m, a.setActive(m), c.value = m;
  };
  let l = !1;
  o.setCompact = (m) => {
    m !== l && (l = m, a.style.display = l ? "none" : "flex", c.style.display = l ? "" : "none", r.onLayout?.(l));
  };
  let d = () => {
  };
  if (r.fit) {
    const { pane: m, bar: v } = r.fit;
    let y = 0;
    d = ra(m, (b) => {
      l || (y = v.offsetWidth || y), y && o.setCompact(y > b - Nu);
    });
  }
  return o.cleanup = () => d(), o;
}
function ir(e, t, n, r) {
  const s = N("select", aa);
  for (const i of e) {
    const a = N("option", "", i.label);
    a.value = i.id, s.appendChild(a);
  }
  let o = t;
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (o = i);
  }
  return s.value = o, s.onchange = () => {
    r?.set(s.value), n(s.value);
  }, s;
}
function Ea(e, t, n, r = {}) {
  let s = r.remember ? r.remember.get() : t;
  const o = ft("", e);
  return o.title = r.title || e, Hr(o, s), o.onclick = () => {
    s = !s, Hr(o, s), r.remember?.set(s), n(s);
  }, o;
}
const Ye = "alchemy-viz:", kt = /* @__PURE__ */ new Map();
let In = null;
function Tu() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function ar() {
  if (In === !1) return null;
  const e = Tu();
  if (!e)
    return In = !1, null;
  try {
    const t = `${Ye}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), In = !0, e;
  } catch {
    return In = !1, null;
  }
}
function Ou(e) {
  const t = ar();
  if (!t) return kt.get(Ye + e) ?? null;
  try {
    return t.getItem(Ye + e);
  } catch {
    return null;
  }
}
function Fu(e, t) {
  const n = ar();
  if (!n) {
    kt.set(Ye + e, t);
    return;
  }
  try {
    n.setItem(Ye + e, t);
  } catch {
    kt.set(Ye + e, t);
  }
}
function cr(e, t, n) {
  return {
    key: e,
    get() {
      const r = Ou(e);
      if (r === null) return t;
      try {
        const s = JSON.parse(r);
        return n(s) ? s : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        Fu(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function rt(e, t, n) {
  return cr(e, t, (r) => typeof r == "string" && n.includes(r));
}
function lt(e, t) {
  return cr(e, t, (n) => typeof n == "boolean");
}
function Lt(e, t, n = -1 / 0, r = 1 / 0) {
  return cr(
    e,
    t,
    (s) => typeof s == "number" && Number.isFinite(s) && s >= n && s <= r
  );
}
function Kr(e, t = "") {
  return cr(e, t, (n) => typeof n == "string");
}
function $o() {
  const e = ar(), t = e ? Array.from({ length: e.length }, (r, s) => e.key(s)).filter((r) => typeof r == "string") : Array.from(kt.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(Ye)) continue;
    const s = e ? e.getItem(r) : kt.get(r) ?? null;
    s !== null && n.push([r, s]);
  }
  return n;
}
function zu() {
  const e = {};
  for (const [t, n] of $o()) {
    const r = t.slice(Ye.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function ju() {
  return Object.fromEntries($o());
}
function Iu() {
  const e = ar();
  if (e)
    for (const [t] of $o())
      try {
        e.removeItem(t);
      } catch {
      }
  kt.clear();
}
const xr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, bo = {
  threeDmol: `https://unpkg.com/3dmol@${xr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${xr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${xr.d3}/+esm`
};
function vo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function xa(e, t) {
  return new Promise((n, r) => {
    const s = document.createElement("script");
    s.src = e, s.onload = () => n(), s.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(s);
  });
}
let nt = null, yt = null;
function lr() {
  if (yt) return yt;
  const e = vo("threeDmol");
  return e ? (yt = e.then((t) => nt = t || window.$3Dmol), yt) : (yt = (async () => {
    if (window.$3Dmol) return nt = window.$3Dmol;
    if (await xa(bo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return nt = window.$3Dmol;
  })(), yt);
}
let $t = null;
function wo() {
  if ($t) return $t;
  const e = vo("rdkit");
  return e ? ($t = e.then((t) => window.RDKit = t), $t) : ($t = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await xa(bo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), $t);
}
let Du = null;
function Aa() {
  return Du ??= wo().catch((e) => (console.warn("[alchemy-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Ar = null;
function Lu() {
  if (!Ar) {
    const e = bo.d3;
    Ar = vo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Ar;
}
function _o(e) {
  if (e) {
    try {
      e.spin(!1);
    } catch {
    }
    try {
      e.clear();
    } catch {
    }
  }
}
function Pa(e, t) {
  let n = !1, r = !1;
  const s = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, i = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Vu(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", s), e.addEventListener("pointerenter", s), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", s), e.removeEventListener("pointerenter", s), e.removeEventListener("pointerleave", o);
    }
  };
}
function qu(e) {
  const t = (s) => s.preventDefault(), n = (s) => {
    s.touches?.length > 1 && s.preventDefault();
  }, r = ["gesturestart", "gesturechange", "gestureend"];
  for (const s of r) e.addEventListener(s, t, { passive: !1 });
  return e.addEventListener("touchmove", n, { passive: !1 }), {
    cleanup() {
      for (const s of r) e.removeEventListener(s, t);
      e.removeEventListener("touchmove", n);
    }
  };
}
const Bu = 1600;
function Vu(e, t) {
  const n = N(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Bu);
}
const Uu = { min: 0.25, max: 12 }, Hu = 150;
function hi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Hu) - t;
}
function Ku(e, t = Uu) {
  const n = hi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let s = 1;
  const o = () => {
    if (!r) return s;
    const i = hi(e);
    return Number.isFinite(i) && i > 0 ? n / i : s;
  };
  return {
    zoomBy(i) {
      const a = o(), c = Math.min(t.max, Math.max(t.min, a * i)), l = c / a;
      return !Number.isFinite(l) || Math.abs(l - 1) < 1e-9 ? !1 : (s = c, e.zoom(l), e.render(), !0);
    },
    reset() {
      s = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const Gu = 2e-3;
function Ra(e) {
  return Math.exp(-e.deltaY * Gu);
}
function dr(e, t, n = {}) {
  const r = Ku(t, n.bounds), s = Pa(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Ra(o))
  });
  return { ...r, cleanup: s.cleanup };
}
function Ma(e, t = "Reset view") {
  const n = ft("", "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
function Na(e, t, n = "Reset view") {
  const r = Ma(t, n);
  return r.style.cssText += `position:absolute;left:${ee.xl};bottom:${ee.xl};z-index:10;`, e.appendChild(r), r;
}
let _t = null;
function Wu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function Ta(e, t) {
  if (!e) return;
  const n = Wu(e);
  if (!n) return;
  const r = t?.level();
  _t = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : _t?.zoom ?? 1
  };
}
function Oa(e, t) {
  if (!_t || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ..._t.rotation]), t && Math.abs(_t.zoom - 1) > 1e-9 && t.zoomBy(_t.zoom), e.render(), !0);
}
const Pr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, Ju = [
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
  "#FF0018"
], U = [0, 0, 0], Yu = {
  0: U,
  1: U,
  2: U,
  3: U,
  4: U,
  5: U,
  6: U,
  7: U,
  8: U,
  9: U,
  10: U,
  11: U,
  12: U,
  13: U,
  14: U,
  15: U,
  16: U,
  17: U,
  18: U,
  19: U,
  20: U,
  21: U,
  22: U,
  23: U,
  24: U,
  25: U,
  26: U,
  27: U,
  28: U,
  29: U,
  30: U,
  31: U,
  32: U,
  33: U,
  34: U,
  35: U,
  36: U,
  37: U,
  38: U,
  39: U,
  40: U,
  41: U,
  42: U,
  43: U,
  44: U,
  45: U,
  46: U,
  47: U,
  48: U,
  49: U,
  50: U,
  51: U,
  52: U,
  53: U,
  54: U,
  55: U,
  56: U,
  57: U,
  58: U,
  59: U,
  60: U,
  61: U,
  62: U,
  63: U,
  64: U,
  65: U,
  66: U,
  67: U,
  68: U,
  69: U,
  70: U,
  71: U,
  72: U,
  73: U,
  74: U,
  75: U,
  76: U,
  77: U,
  78: U,
  79: U,
  80: U,
  81: U,
  82: U,
  83: U,
  84: U,
  85: U,
  86: U,
  87: U,
  88: U,
  89: U,
  90: U,
  91: U,
  92: U,
  93: U,
  94: U,
  95: U,
  96: U,
  97: U,
  98: U,
  99: U,
  100: U,
  101: U,
  102: U,
  103: U,
  104: U,
  105: U,
  106: U,
  107: U,
  108: U,
  109: U,
  110: U,
  111: U,
  112: U,
  113: U,
  114: U,
  115: U,
  116: U,
  117: U,
  118: U
}, B = [0.9, 0.9, 0.9], Xu = {
  "-1": [0.8, 0.8, 0.8],
  0: [0.9, 0.9, 0.9],
  1: [0.9, 0.9, 0.9],
  6: [0.9, 0.9, 0.9],
  7: [0.33, 0.41, 0.92],
  8: [1, 0.2, 0.2],
  9: [0.2, 0.8, 0.8],
  15: [1, 0.5, 0],
  16: [0.8, 0.8, 0],
  17: [0, 0.802, 0],
  35: [0.71, 0.4, 0.07],
  53: [0.89, 4e-3, 1],
  201: [0.68, 0.85, 0.9]
}, Zu = {
  "-1": B,
  0: B,
  1: B,
  2: B,
  3: B,
  4: B,
  5: B,
  6: B,
  7: B,
  8: B,
  9: B,
  10: B,
  11: B,
  12: B,
  13: B,
  14: B,
  15: B,
  16: B,
  17: B,
  18: B,
  19: B,
  20: B,
  21: B,
  22: B,
  23: B,
  24: B,
  25: B,
  26: B,
  27: B,
  28: B,
  29: B,
  30: B,
  31: B,
  32: B,
  33: B,
  34: B,
  35: B,
  36: B,
  37: B,
  38: B,
  39: B,
  40: B,
  41: B,
  42: B,
  43: B,
  44: B,
  45: B,
  46: B,
  47: B,
  48: B,
  49: B,
  50: B,
  51: B,
  52: B,
  53: B,
  54: B,
  55: B,
  56: B,
  57: B,
  58: B,
  59: B,
  60: B,
  61: B,
  62: B,
  63: B,
  64: B,
  65: B,
  66: B,
  67: B,
  68: B,
  69: B,
  70: B,
  71: B,
  72: B,
  73: B,
  74: B,
  75: B,
  76: B,
  77: B,
  78: B,
  79: B,
  80: B,
  81: B,
  82: B,
  83: B,
  84: B,
  85: B,
  86: B,
  87: B,
  88: B,
  89: B,
  90: B,
  91: B,
  92: B,
  93: B,
  94: B,
  95: B,
  96: B,
  97: B,
  98: B,
  99: B,
  100: B,
  101: B,
  102: B,
  103: B,
  104: B,
  105: B,
  106: B,
  107: B,
  108: B,
  109: B,
  110: B,
  111: B,
  112: B,
  113: B,
  114: B,
  115: B,
  116: B,
  117: B,
  118: B,
  201: B
}, Qu = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
function ur() {
  return ro() === "dark";
}
function Fa() {
  return Je[ur() ? "dark" : "light"].canvas2DBg;
}
function Gr() {
  return Je[ur() ? "dark" : "light"].netDepictBg;
}
function ef() {
  return Je[ur() ? "dark" : "light"].netDepictCaption;
}
function fr(e) {
  return ur() ? {
    ...Qu,
    atomColourPalette: e === "mono" ? Zu : Xu
  } : e === "mono" ? { atomColourPalette: Yu } : {};
}
const tf = "rdkit", nf = !0, rf = !0, of = !0, sf = !0, af = "rdkit", cf = "filled", lf = 0.42, df = 1.5, uf = !0, ff = "show", pf = "mono", hf = 0.51, mf = 0.74, gf = 1.6, yf = 1.7, $f = 5, bf = 0.3, vf = "#d62828", wf = "#d62828", _f = "#015ab5", Sf = !1, kf = "", Cf = "#7c3aed", Ef = {
  layout: tf,
  alignPair: nf,
  atomNumbers: rf,
  createdDestroyed: of,
  modified: sf,
  style: af,
  circles: cf,
  circleRadius: lf,
  circleStroke: df,
  boundary: uf,
  hydrogens: ff,
  elementColors: pf,
  numScale: hf,
  labelScale: mf,
  bondWidth: gf,
  markWidth: yf,
  haloWidth: $f,
  haloOpacity: bf,
  destroyedColor: vf,
  createdColor: wf,
  modifiedColor: _f,
  stereo: Sf,
  customSpec: kf,
  customColor: Cf
}, xf = {
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: Pr.uniqueAtom,
  createdColor: Pr.uniqueAtom,
  modifiedColor: Pr.elementChange,
  boundary: !0,
  circles: "outline",
  circleRadius: 0.3,
  circleStroke: 1.2,
  hydrogens: "show",
  elementColors: "mono",
  atomNumbers: !0,
  stereo: !1,
  numScale: 0.5,
  labelScale: 0.6,
  bondWidth: 2,
  markWidth: 2,
  haloWidth: 10,
  haloOpacity: 0.35,
  customSpec: "",
  customColor: "#7C3AED"
}, Af = ["rdkit", "coordgen", "conformer"], Pf = ["rdkit", "recolor", "halo"], Rf = ["outline", "filled", "off"], Mf = ["show", "dim", "hide"], Nf = ["cpk", "mono"], Tf = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Of = /^#[0-9a-fA-F]{6}$/;
function Tt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ze(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Tf[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const bt = (e, t) => typeof e == "boolean" ? e : t, Dn = (e, t) => typeof e == "string" && Of.test(e) ? e : t;
function Ff(e) {
  const t = e && typeof e == "object" ? e : {}, n = xf;
  return {
    version: 1,
    layout: Tt(t.layout, Af, n.layout),
    alignPair: bt(t.alignPair, n.alignPair),
    style: Tt(t.style, Pf, n.style),
    createdDestroyed: bt(t.createdDestroyed, n.createdDestroyed),
    modified: bt(t.modified, n.modified),
    destroyedColor: Dn(t.destroyedColor, n.destroyedColor),
    createdColor: Dn(t.createdColor, n.createdColor),
    modifiedColor: Dn(t.modifiedColor, n.modifiedColor),
    boundary: bt(t.boundary, n.boundary),
    circles: Tt(t.circles, Rf, n.circles),
    circleRadius: Ze(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ze(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Tt(t.hydrogens, Mf, n.hydrogens),
    elementColors: Tt(t.elementColors, Nf, n.elementColors),
    atomNumbers: bt(t.atomNumbers, n.atomNumbers),
    stereo: bt(t.stereo, n.stereo),
    numScale: Ze(t.numScale, "numScale", n.numScale),
    labelScale: Ze(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ze(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ze(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ze(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ze(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Dn(t.customColor, n.customColor)
  };
}
const Oe = Ff(Ef);
function zf(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const s of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(s), i = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : s, c = (d) => {
      i !== "right" && t.add(d), i !== "left" && n.add(d);
    }, l = /^(\d+)-(\d+)$/.exec(a);
    if (l) {
      const d = Math.min(+l[1], +l[2]), m = Math.min(Math.max(+l[1], +l[2]), d + r - 1);
      for (let v = d; v <= m; v++) c(v);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function Rr(e, t, n) {
  const r = [];
  for (let s = 0; s < e.bonds.length; s++) {
    const [o, i] = e.bonds[s], a = t.has(o), c = t.has(i);
    (n ? a || c : a && c) && r.push(s);
  }
  return r;
}
function mi(e) {
  return `0x${e.replace("#", "")}`;
}
function Wr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function jf(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function If(e, t, n) {
  const r = new Set(t.atoms), s = new Set(Rr(e, r, !0));
  return {
    deletions: Rr(e, r, n),
    changes: Rr(e, new Set(t.elements), n).filter((o) => !s.has(o))
  };
}
function za(e, t, n, r) {
  const s = If(t, n, e.boundary), o = [];
  return e.createdDestroyed && n.atoms.length && o.push({
    atoms: new Set(n.atoms),
    bonds: s.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && o.push({
    atoms: new Set(n.elements),
    bonds: s.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), o;
}
let vt = null;
function Df(e) {
  if (vt !== null) return vt;
  vt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (vt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return vt || console.warn("[alchemy-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), vt;
}
function Lf(e, t) {
  return e.style === "rdkit" ? "rdkit" : Df(t) ? e.style : "rdkit";
}
function qf(e, t, n, r, s, o) {
  const i = {
    width: t,
    height: t,
    addAtomIndices: e.atomNumbers,
    addStereoAnnotation: e.stereo,
    annotationFontScale: e.numScale,
    baseFontSize: e.labelScale,
    bondLineWidth: e.bondWidth,
    scaleBondWidth: !1
  };
  Object.assign(i, fr(e.elementColors)), s === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, c = {}, l = {};
  for (const y of n) {
    const b = Wr(y.color);
    if (s === "rdkit") for (const h of y.bonds) l[h] = b;
    if (s === "recolor" && e.circles === "off") continue;
    const w = s === "recolor" && e.circles === "filled" ? jf(b, 0.7) : b;
    for (const h of y.atoms)
      a[h] = w, c[h] = e.circleRadius;
  }
  const d = Wr(e.customColor);
  for (const y of r)
    y < o && (a[y] = d, c[y] = e.circleRadius);
  const m = Object.keys(a).map(Number);
  m.length && (i.atoms = m, i.highlightAtomColors = a, i.highlightAtomRadii = c);
  const v = Object.keys(l).map(Number);
  return v.length && (i.bonds = v, i.highlightBondColors = l), i;
}
function Bf(e, t, n, r) {
  let s = null;
  try {
    return s = e.get_mol(t, JSON.stringify({ removeHs: !1 })), s ? s.get_svg_with_highlights ? s.get_svg_with_highlights(JSON.stringify(r)) || null : s.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[alchemy-viz] depictStyledSVG threw -", ve(o)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
const Vf = "http://www.w3.org/2000/svg";
function ja(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function So(e, t, n) {
  const r = [];
  for (const s of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(s.getAttribute("class") || "")) continue;
    const o = s.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(s);
  }
  return r;
}
function Ia(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function gi(e, t, n, r, s, o) {
  for (const i of r)
    for (const a of ja(e, i)) {
      const c = a.style;
      Ia(a) ? c.fill = s : (c.stroke = s, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const i of n)
      for (const a of So(e, i, !1)) a.style.fill = o;
}
function Uf(e, t, n, r) {
  const s = e.ownerDocument;
  if (!s) return;
  const o = s.createElementNS(Vf, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of ja(e, a)) {
      if (Ia(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", o.appendChild(l);
    }
  if (!o.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(o, i.nextSibling) : i ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Hf(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of So(e, o, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Kf(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of So(e, o, !0)) {
        const a = i.style;
        a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Gf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const s of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = s.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Wf(e, t, n, r, s, o) {
  if (o !== "rdkit")
    for (const i of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        gi(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? Hf(e, n, i.atoms, s, i.color) : a && i.edgeOnFill && Kf(e, n, i.atoms, s, i.color);
      } else
        Uf(e, n, i.bonds, i.color), gi(e, n, i.atoms, i.bonds, i.color, null);
  Gf(e, t, n);
}
const pr = `
`, Jr = "$$$$";
function Yr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(pr);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const s = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(s) || s <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let d = 0; d < s; d++) {
    const m = n[4 + d];
    if (m == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(m.substring(0, 10)) || 0,
      parseFloat(m.substring(10, 20)) || 0,
      parseFloat(m.substring(20, 30)) || 0
    ]), a.push(m.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let d = 0; d < (isFinite(o) ? o : 0); d++) {
    const m = n[4 + s + d];
    if (m == null) break;
    const v = parseInt(m.substring(0, 3), 10), y = parseInt(m.substring(3, 6), 10), b = parseInt(m.substring(6, 9), 10);
    !isFinite(v) || !isFinite(y) || c.push([v - 1, y - 1, isFinite(b) ? b : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: i };
}
function Jf(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let s = 0; s < t; s++) {
    const o = e.coords[s];
    r.push(
      o[0].toFixed(4).padStart(10) + o[1].toFixed(4).padStart(10) + o[2].toFixed(4).padStart(10) + ` ${e.symbols[s].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let s = 0; s < n; s++) {
    const o = e.bonds[s], i = o[2] === 12 ? 4 : o[2];
    r.push(
      String(o[0] + 1).padStart(3) + String(o[1] + 1).padStart(3) + String(i).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(pr);
}
const Yf = (e) => `${Jf(e)}${pr}${Jr}`, Da = (e) => e.indexOf(Jr) >= 0 ? e : `${e}${pr}${Jr}`;
function ko(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Co(e, t, n, r, s, o) {
  let i = null;
  try {
    if (i = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !i) return null;
    if (r !== "conformer")
      try {
        i.set_new_coords(r === "coordgen");
      } catch {
      }
    const a = s?.atoms.length ? s : null, c = !!o && Object.keys(o).length > 0;
    if ((a || c) && i.get_svg_with_highlights) {
      const l = { width: n, height: n, ...o };
      if (a) {
        const d = {}, m = {};
        for (const v of a.atoms)
          d[v] = a.color, m[v] = a.radius;
        l.atoms = [...a.atoms], l.highlightAtomColors = d, l.highlightAtomRadii = m;
      }
      return i.get_svg_with_highlights(JSON.stringify(l)) || null;
    }
    return i.get_svg(n, n) || null;
  } catch (a) {
    return console.warn("[alchemy-viz] depictSVG threw -", ve(a)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
function La(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const yi = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Xr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, wt = (e) => e in Xr, $i = 400, Mr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Xf extends Fe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, s = n.name ?? "", o = n.smiles, i = n.total_charge, a = N("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = N(
      "div",
      `${Mr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Fa()};`
    );
    a.appendChild(c);
    const l = fa();
    l.wrap.style.cssText = Mr, a.appendChild(l.wrap);
    const d = N(
      "div",
      `${Mr}overflow:auto;padding:16px 20px;background:${I.panelBg};color:${I.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(d);
    const m = r ? ko(r) : null, v = [
      ["Name", s || Qe, !1],
      ["SMILES", o || Qe, !0],
      ["Charge", i == null ? Qe : String(i), !1],
      ["Atoms", m ? String(m.atoms) : Qe, !1],
      ["Bonds", m ? String(m.bonds) : Qe, !1]
    ], y = N("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${ee.xl} 20px;align-items:baseline;`);
    d.appendChild(y);
    for (const [R, D, z] of v) {
      y.appendChild(
        N(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${I.textMuted2};`,
          R
        )
      );
      const V = N(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${I.textPrimary}` + (z ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        D
      );
      V.title = D, y.appendChild(V);
    }
    const b = ao(t), w = N("div", oo, s || "Unnamed molecule");
    b && a.appendChild(w);
    const h = rt(
      "small-molecule.mode",
      "2d",
      yi.map((R) => R.id)
    ), g = lt("small-molecule.spin", !1);
    let f = h.get(), k = g.get(), _ = null, u = null;
    const p = () => {
      try {
        _?.spin(k && wt(f) ? "y" : !1);
      } catch {
      }
    }, $ = (R) => {
      f = R, c.style.visibility = f === "2d" ? "visible" : "hidden", l.wrap.style.visibility = wt(f) ? "visible" : "hidden", d.style.visibility = f === "info" ? "visible" : "hidden", w.style.display = f === "info" || !b ? "none" : "block", A.disabled = !wt(f), A.style.opacity = wt(f) ? "1" : "0.5", wt(f) && _ && (_.setStyle({}, Xr[f]), _.resize(), _.render()), p();
    }, C = N("div", ua), A = Ea(
      "Spin",
      k,
      (R) => {
        k = R, p();
      },
      { title: "Toggle continuous rotation", remember: g }
    ), E = (R) => {
      R ? C.insertBefore(A, C.firstChild) : O.buttons.insertBefore(A, O.buttons.lastElementChild);
    }, O = Ca(yi, f, (R) => $(R), {
      remember: h,
      onLayout: E,
      fit: { pane: a, bar: C }
    });
    return C.appendChild(O), E(!1), a.appendChild(C), $(f), !r || !r.trim() ? (c.appendChild($e("No molecule provided")), l.container.appendChild($e("No molecule provided")), { cleanup: () => O.cleanup() }) : (c.appendChild($e("Loading 2D depiction...")), wo().then((R) => {
      const D = fr("cpk"), z = Co(R, r, $i, Oe.layout, void 0, D);
      z ? La(c, z, $i) : c.replaceChildren($e("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren($e(`RDKit failed to load: ${ve(R)}`, !0));
    }), l.container.appendChild($e("Loading 3D viewer...")), lr().then(() => {
      l.container.replaceChildren(), _ = nt.createViewer(l.container, { backgroundColor: qt.viewer() }), _.addModel(Da(r), "sdf"), _.setStyle({}, Xr[wt(f) ? f : "stick"]), _.zoomTo(), _.render(), u = dr(l.container, _), Oa(_, u), p();
    }).catch((R) => {
      l.container.replaceChildren($e(`3D render failed: ${ve(R)}`, !0));
    }), {
      onResize() {
        _ && (_.resize(), _.render());
      },
      cleanup() {
        O.cleanup(), Ta(_, u), u?.cleanup(), u = null, _o(_), _ = null;
      }
    });
  }
}
ze("gufe-small-molecule", Xf);
const qa = ["HOH", "WAT", "SOL", "TIP3"], bi = { hetflag: !1 }, Zf = { hetflag: !0 }, Qf = { resn: qa }, Be = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  /**
   * A bound ligand, drawn thicker than the protein's own hetero atoms.
   *
   * It is the subject of the picture and everything around it is context, so
   * it is the one thing in a complex allowed to be heavier than the rest. The
   * colours stay `Jmol`, as everywhere else in this project - a ligand that
   * changed what its atom colours meant on the way into a pocket would be
   * worse, not clearer.
   */
  ligand: { stickRadius: 0.24, sphereScale: 0.32 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Ba(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, s = 0, o = 0, i = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const l = c.slice(0, 6);
    if (l === "ENDMDL") break;
    if (l !== "ATOM  " && l !== "HETATM") continue;
    r++, l === "HETATM" && s++;
    const d = c.slice(17, 20).trim(), m = c.slice(21, 22).trim() || "_", v = c.slice(22, 26).trim(), y = c.slice(26, 27).trim();
    qa.indexOf(d) !== -1 && o++, t.add(m), n.add(`${m}|${v}${y}|${d}`);
    const b = parseInt(v, 10);
    isNaN(b) || (b < i && (i = b), b > a && (a = b));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: s,
    waters: o,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function Va(e) {
  return [
    `${Pt(e.chains)} chains`,
    `${Pt(e.residues)} residues`,
    `${Pt(e.atoms)} atoms`,
    `${Pt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Pt(e.waters)} water)` : "")
  ];
}
function ep(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Zr(e, t, n, r, s, o = () => !0) {
  const i = r || (() => {
  }), a = ep(t.color, n), c = (l) => s ? { ...l, ...s } : l;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(c({}), {}), e.setStyle(
    c(bi),
    t.rep === "stick" ? { stick: { radius: Be.stick.radius, ...a } } : t.rep === "sphere" ? { sphere: { scale: Be.sphere.scale, ...a } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...a } }
    )
  ), e.setStyle(
    c(Zf),
    t.hetero ? {
      stick: { radius: Be.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Be.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    c(Qf),
    t.waters ? {
      stick: { radius: Be.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Be.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Be.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    if (o())
      try {
        Promise.resolve(
          e.addSurface(
            nt.SurfaceType.VDW,
            { opacity: Be.surfaceOpacity, ...a },
            c(bi)
          )
        ).then(() => {
          o() && (i(null), e.render());
        }).catch((l) => i(`Surface failed: ${ve(l)}`, "error"));
      } catch (l) {
        i(`Surface failed: ${ve(l)}`, "error");
      }
  }, 30);
}
function tp(e, t) {
  e.setStyle(t, {
    stick: { radius: Be.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Be.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const vi = { min: 0.2, max: 0.8 }, Ua = 5, Nr = { min: 130, max: 560, maxShare: "60%" };
function Ha(e, t, n, r = {}) {
  const s = r.min ?? vi.min, o = r.max ?? vi.max, i = N(
    "div",
    `flex:0 0 ${Ua}px;align-self:stretch;touch-action:none;background:${I.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (b) => {
    a = b, e.style.flexDirection = a ? "column" : "row", i.style.cursor = a ? "row-resize" : "col-resize", i.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, l = () => {
    const b = e.getBoundingClientRect();
    return b.height > b.width;
  };
  let d = Math.min(o, Math.max(s, r.remember?.get() ?? 0.5));
  const m = () => {
    t.style.flex = `1 1 ${(d * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - d) * 100).toFixed(2)}%`;
  };
  m(), c(l()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const w = l();
    w !== a && (c(w), r.onResize?.(d));
  }).observe(e);
  let v = !1;
  i.addEventListener("pointerdown", (b) => {
    v = !0, i.setPointerCapture(b.pointerId), b.preventDefault();
  }), i.addEventListener("pointermove", (b) => {
    if (!v) return;
    const w = e.getBoundingClientRect(), h = a ? w.height : w.width;
    if (h <= 0) return;
    const g = a ? b.clientY - w.top : b.clientX - w.left;
    d = Math.min(o, Math.max(s, g / h)), m();
  });
  const y = (b) => {
    v && (v = !1, i.releasePointerCapture(b.pointerId), r.remember?.set(d), r.onResize?.(d));
  };
  return i.addEventListener("pointerup", y), i.addEventListener("pointercancel", y), i;
}
function Ka(e, t) {
  const n = t.min ?? Nr.min, r = t.max ?? Nr.max, s = t.maxShare ?? Nr.maxShare, o = (v) => Math.min(r, Math.max(n, v));
  let i = o(t.remember?.get() ?? t.initial), a = !1;
  const c = N(
    "div",
    `flex:0 0 ${Ua}px;align-self:stretch;touch-action:none;cursor:col-resize;background:${I.splitBorder};`
  );
  c.setAttribute("role", "separator"), c.setAttribute("aria-orientation", "vertical"), c.setAttribute("aria-label", t.label ?? "Resize the panel");
  const l = () => {
    e.style.flex = a ? "0 0 auto" : `0 0 ${Math.round(i)}px`, e.style.maxWidth = a ? "none" : s, c.style.display = a ? "none" : "block";
  };
  l();
  let d = !1;
  c.addEventListener("pointerdown", (v) => {
    a || (d = !0, c.setPointerCapture(v.pointerId), v.preventDefault());
  }), c.addEventListener("pointermove", (v) => {
    d && (i = o(v.clientX - e.getBoundingClientRect().left), l());
  });
  const m = (v) => {
    d && (d = !1, c.releasePointerCapture(v.pointerId), t.remember?.set(Math.round(i)), t.onResize?.());
  };
  return c.addEventListener("pointerup", m), c.addEventListener("pointercancel", m), {
    element: c,
    orient(v) {
      v !== a && (a = v, l());
    }
  };
}
function Eo(e, t) {
  e.style.setProperty(et.min, t ? "0" : Gn.min), e.style.setProperty(et.max, t ? "none" : Gn.max), e.style.setProperty(et.ruleX, t ? "0" : "1px"), e.style.setProperty(et.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? Ac : "";
}
const np = !1, xo = ".menuOpen";
function rp() {
  const e = N("span", `display:inline-flex;flex-direction:column;gap:${ee.xs};justify-content:center;`);
  for (let t = 0; t < 3; t++)
    e.appendChild(N("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${I.btnFg};`));
  return e;
}
const op = {
  /** Three bars: the generic form, and the one that reads as a menu. */
  hamburger: rp
}, sp = op.hamburger;
function Ao(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? np, s = !1;
  const o = N("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), i = ft(`display:inline-flex;align-items:center;padding:${ee.sm};`);
  i.appendChild(sp());
  const a = n.label || "Toggle menu";
  i.setAttribute("aria-label", a), i.title = a;
  const c = () => {
    if (r && !s) {
      s = !0;
      const m = t();
      o.appendChild(m), n.extras?.(m);
    }
    o.style.display = r ? "flex" : "none", i.setAttribute("aria-expanded", String(r));
  }, l = (m) => {
    m !== r && (r = m, c(), n.remember?.set(r), n.onToggle?.(r));
  };
  i.onclick = () => l(!r);
  const d = "toggleEl" in e ? e : null;
  return d && (d.toggleEl.style.marginRight = "2px"), (d ? d.toggleEl : e).appendChild(i), c(), {
    panel: o,
    isOpen: () => r,
    setOpen: l
  };
}
const Ga = "https://framejs.app", Wa = 1e4;
function ip(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const ap = "/alchemy-dev-bundle.js";
function cp() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Wa ? e : null;
}
async function lp() {
  const e = cp();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(ap);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Wa ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function dp() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function up(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Ye)};`,
    `  const menuOpen = ${JSON.stringify(xo)};`,
    "  for (const key of Object.keys(localStorage)) {",
    "    if (key.startsWith(prefix) && key.endsWith(menuOpen)) localStorage.removeItem(key);",
    "  }",
    "} catch (e) {",
    '  console.warn("[alchemy-viz] could not clear menu state:", e);',
    "}"
  ), Object.keys(e.settings).length && t.push(
    "// The settings the page had, written where `settings.ts` looks for them.",
    "try {",
    `  const stored = ${JSON.stringify(e.settings)};`,
    "  for (const key of Object.keys(stored)) localStorage.setItem(key, stored[key]);",
    "} catch (e) {",
    '  console.warn("[alchemy-viz] could not restore settings:", e);',
    "}"
  ), Object.keys(e.views).length && t.push(
    "// Where the camera was, what was selected, where the layout settled.",
    `globalThis[${JSON.stringify(pa)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function fp(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...up(n),
    "// Built by alchemy-viz's share button from a generated page. The bundle below is",
    "// that page's own script, unchanged; everything above it exists so the",
    "// bootstrap at the end of it finds the three elements it looks up.",
    'root.innerHTML = "";',
    'const gufeError = document.createElement("div");',
    'gufeError.id = "gufe-error";',
    'gufeError.style.cssText = "display:none;padding:12px 16px;white-space:pre-wrap;font-family:ui-monospace,monospace;color:#991b1b;background:#fee2e2;";',
    "root.appendChild(gufeError);",
    'const gufePayload = document.createElement("script");',
    'gufePayload.type = "application/json";',
    'gufePayload.id = "gufe-payload";',
    `gufePayload.textContent = ${r};`,
    "root.appendChild(gufePayload);",
    'const alchemyView = document.createElement("alchemy-view");',
    'alchemyView.style.cssText = "display:block;width:100%;height:100%;";',
    "root.appendChild(alchemyView);",
    "",
    e,
    "",
    "// A generated page's bootstrap has drawn the payload by now. A bundle on its",
    "// own ends at `export` and has not, so this is what draws it there. Reading",
    "// the property rather than tracking which case we are in keeps the two from",
    "// having to agree about anything.",
    "if (alchemyView.payload == null) {",
    "  alchemyView.payload = JSON.parse(gufePayload.textContent);",
    "}"
  ].join(`
`);
}
function pp(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [s, o] of Object.entries(ju()))
    s.endsWith(xo) || (r[s] = o);
  return { settings: r, views: t };
}
const hp = (e) => `${Ga}/j/${e}`, mp = (e) => `${Ga}/j/${e}.json`;
async function gp(e, t, n, r) {
  await fetch(mp(e), {
    method: "POST",
    mode: "no-cors",
    // Not `application/json`: that would make the request preflighted, and
    // framejs.app serves no OPTIONS. `text/plain` is CORS-simple and the server
    // parses the body regardless.
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify({
      js: t,
      og: { title: n, description: r }
    })
  });
}
function yp() {
  const e = N("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function Po(e) {
  const t = N(
    "div",
    `display:flex;flex-direction:column;gap:${ee.md};padding-top:${ee.lg};border-top:1px solid ${I.splitBorder};`
  ), n = ft(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${ee.md};`);
  n.appendChild(yp()), n.appendChild(N("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = N("div", `font-size:${Q.tiny};line-height:1.5;color:${I.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const s = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? I.errorFg : I.textMuted2;
  }, o = (i, a) => {
    const c = N("a", `color:${I.textPrimary};`, i);
    c.href = i, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(N("div", `padding-top:${ee.sm};`, a)), r.style.color = I.textMuted2;
  };
  n.onclick = () => {
    const i = ip(e);
    if (!i || i.payload == null) {
      s("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, c = pp(i), l = window.open("", "_blank"), d = dp(), v = String(a.type || "alchemy-viz"), y = `${v}. Shared from alchemy-viz`, b = () => {
      n.disabled = !1;
    };
    n.disabled = !0, s("Uploading..."), lp().then((w) => {
      if (!w) {
        l?.close(), b(), s(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return gp(d, fp(w.js, a, c), v, y).then(() => {
        b();
        const h = hp(d);
        l && (l.location.href = h), o(h, w.note);
      });
    }).catch((w) => {
      b(), l?.close(), s(`Upload failed: ${w instanceof Error ? w.message : String(w)}`, !0);
    });
  }, t.appendChild(
    N(
      "div",
      `font-size:${Q.tiny};line-height:1.5;color:${I.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
const wi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], _i = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Si = /* @__PURE__ */ new Map();
function Qr(e) {
  return !Array.isArray(e) || e.length < 4 ? null : e.every((t) => typeof t == "number" && Number.isFinite(t)) ? e.slice() : null;
}
function $p(e) {
  const t = e.tagName.toLowerCase().replace(/^gufe-/, ""), n = ha(t);
  return !n || typeof n != "object" ? null : Qr(n.camera);
}
function Ja(e) {
  const t = rt(
    "protein.representation",
    e.rep ?? "cartoon",
    wi.map((C) => C.id)
  ), n = rt(
    "protein.color",
    "chain",
    _i.map((C) => C.id)
  ), r = lt("protein.waters", e.waters), s = lt("protein.hetero", !0), o = lt("protein.spin", !1), i = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: s.get(),
    spin: o.get()
  };
  let a = $p(e.element), c = null, l = null, d = !0;
  const m = N("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(m);
  const v = N("div", Nc);
  m.appendChild(v);
  const y = ({ label: C, controls: A }) => {
    const E = N("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    E.appendChild(
      N(
        "span",
        `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${I.textMuted};`,
        C
      )
    );
    for (const O of A) E.appendChild(O);
    return E;
  }, b = N("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${I.textMuted};`), w = y({ label: "Contents", controls: [b] });
  w.style.display = "none";
  const g = Ao(v, () => {
    const C = N("div", `${da}padding-top:${Tc};`), A = Ct(
      wi,
      i.rep,
      (z) => {
        i.rep = z, e.restyle();
      },
      t
    );
    C.appendChild(y({ label: "Style", controls: [A] }));
    const E = ir(
      _i,
      i.color,
      (z) => {
        i.color = z, e.restyle();
      },
      n
    );
    E.style.cssText += "width:100%;box-sizing:border-box;", C.appendChild(y({ label: "Color", controls: [E] }));
    const O = N("div", "display:flex;flex-wrap:wrap;gap:4px;"), R = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, s, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", o, () => c?.spin(i.spin ? "y" : !1)]
    ];
    for (const [z, V, G, oe, X] of R)
      O.appendChild(
        Ea(
          V,
          i[z],
          (re) => {
            i[z] = re, X();
          },
          { title: G, remember: oe }
        )
      );
    C.appendChild(y({ label: "Show", controls: [O] }));
    const D = Ma(() => e.reset ? e.reset() : l?.reset());
    return D.style.cssText += "width:100%;box-sizing:border-box;", C.appendChild(y({ label: "Camera", controls: [...e.camera?.() ?? [], D] })), C.appendChild(w), C;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: lt(`protein${xo}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      c?.resize(), c?.render();
    },
    extras: Po
  }), f = ao(e.element) ? e.title || e.fallbackTitle : "";
  f && v.appendChild(
    N("div", `${Mc}pointer-events:none;font-size:${Q.heading};font-weight:${ge.bold};`, f)
  ), m.appendChild(g.panel);
  const k = fa();
  m.appendChild(k.wrap);
  const _ = no(m, (C) => {
    m.style.flexDirection = C ? "column" : "row", Eo(g.panel, C), c?.resize(), c?.render();
  }), u = N(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  k.wrap.appendChild(u);
  const p = (C, A) => {
    if (C == null) {
      u.style.display = "none";
      return;
    }
    u.textContent = C, u.style.display = "block";
    const E = A === "error";
    u.style.background = E ? I.warnBg : I.toolbarBg, u.style.color = E ? I.warnFg : I.textMuted, u.style.border = `1px solid ${E ? I.warnBorder : I.toolbarBorder}`;
  }, $ = () => {
    if (!e.cameraKey || !c) return;
    const C = Qr(c.getView?.());
    C && Si.set(e.cameraKey, C);
  };
  return {
    opts: i,
    pane: k,
    menu: g,
    showStatus: p,
    setStats: (C) => {
      b.replaceChildren(...C.map((A) => N("div", "overflow-wrap:anywhere;", A))), w.style.display = C.length ? "" : "none";
    },
    restoreCamera: () => {
      const C = a;
      a = null;
      const A = C ?? (e.cameraKey ? Si.get(e.cameraKey) : void 0);
      return !A || !c ? !1 : (c.setView(A.slice()), c.render(), !0);
    },
    viewer: () => c,
    stillWanted: () => d,
    setViewer: (C) => {
      c = C;
    },
    interaction: () => l,
    setInteraction: (C) => {
      l = C;
    },
    handle: {
      onResize() {
        c && (c.resize(), c.render());
      },
      // What the share button sends, so a link opens on the structure as it is
      // on screen: the same angle, the same distance, the same thing centred.
      // Null while the viewer is still loading, which a frame reads as "frame it
      // yourself" rather than as an error.
      viewState() {
        const C = Qr(c?.getView?.());
        return C ? { camera: C } : null;
      },
      cleanup() {
        d = !1, _(), $(), l?.cleanup(), l = null, _o(c), c = null;
      }
    }
  };
}
class bp extends Fe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let s = null;
    function o() {
      const a = i.viewer();
      a && Zr(a, i.opts, s, i.showStatus, void 0, i.stillWanted);
    }
    const i = Ja({
      element: this,
      host: t,
      title: n.name ?? "",
      fallbackTitle: "Protein",
      // A solvated or membrane system is defined by what surrounds the protein,
      // so it opens with that shown; a bare protein does not, because a few
      // thousand crystallographic waters would bury it.
      waters: n.type !== "ProteinComponentViz",
      heteroTitle: "Show hetero atoms / ligands / ions / lipids",
      menuLabel: "Representation, colouring and display options",
      // This view draws one structure, so the payload's own key is the
      // structure's key.
      cameraKey: n["gufe-key"],
      restyle: o
    });
    if (!r || !r.trim())
      return i.showStatus("No protein data - waiting for a PDB payload."), {};
    try {
      s = Ba(r), i.setStats(Va(s));
    } catch (a) {
      i.showStatus(`PDB parse error: ${ve(a)}`, "error");
    }
    return i.showStatus("Loading 3D viewer..."), lr().then(() => {
      const a = nt.createViewer(i.pane.container, { backgroundColor: qt.viewer() });
      i.setViewer(a), a.addModel(r, "pdb"), Zr(a, i.opts, s, i.showStatus, void 0, i.stillWanted), i.restoreCamera() || a.zoomTo(), a.spin(i.opts.spin ? "y" : !1), a.render(), i.setInteraction(dr(i.pane.container, a));
    }).catch((a) => {
      i.showStatus(`Failed to render structure: ${ve(a)}`, "error");
    }), i.handle;
  }
}
ze("gufe-protein", bp);
const Ya = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(Ya, e);
  for (const [r, s] of Object.entries(t)) n.setAttribute(r, String(s));
  return n;
}
function Tr(e, t) {
  const n = document.createElementNS(Ya, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Xa = 3, vp = 24;
function Za(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, s = 1 / 0, o = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), s = Math.min(s, a.y), o = Math.max(o, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(s) ? null : { minX: r - t, minY: s - n, maxX: o + t, maxY: i + n };
}
const wp = { min: 0.15, max: 5 }, _p = 1e-9;
function Qa(e, t, n) {
  const r = n.margin ?? vp, s = n.zoom ?? wp;
  let o = 1, i = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${o})`), n.onTransform?.(o, i, a);
  }, l = () => {
    const z = e.getBoundingClientRect();
    return {
      width: z.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: z.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, d = (z, V, G) => Math.min(1, V / (z.maxX - z.minX + r * 2), G / (z.maxY - z.minY + r * 2)), m = () => {
    const z = n.bounds();
    if (!z) return s.min;
    const { width: V, height: G } = l();
    return Math.min(s.min, d(z, V, G));
  }, v = (z) => Math.min(s.max, Math.max(m(), o * z)), y = () => {
    o = 1, i = 0, a = 0;
    const z = n.bounds();
    if (!z) {
      c();
      return;
    }
    const { width: V, height: G } = l();
    o = d(z, V, G), i = V / 2 - (z.minX + z.maxX) / 2 * o, a = G / 2 - (z.minY + z.maxY) / 2 * o, c();
  }, w = Pa(e, {
    onZoom: (z) => {
      const V = e.getBoundingClientRect(), G = z.clientX - V.left, oe = z.clientY - V.top, X = v(Ra(z)), re = X / o;
      return i = G - (G - i) * re, a = oe - (oe - a) * re, o = X, c(), Math.abs(re - 1) > _p;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), h = /* @__PURE__ */ new Map();
  let g = null, f = null, k = !1, _ = null;
  const u = (z) => ({
    x: z.clientX - i,
    y: z.clientY - a,
    from: { x: z.clientX, y: z.clientY }
  }), p = (z) => {
    z.pointerType === "touch" && h.size > 1 || (f = u(z), k = !1);
  }, $ = (z) => {
    g || (_ && z.pointerType === "touch" && (f = { x: _.x - i, y: _.y - a, from: _ }, _ = null), f && (Math.hypot(z.clientX - f.from.x, z.clientY - f.from.y) > Xa && (k = !0), i = z.clientX - f.x, a = z.clientY - f.y, c()));
  }, C = () => {
    f = null;
  };
  e.addEventListener("pointerdown", p), e.addEventListener("pointermove", $), e.addEventListener("pointerup", C), e.addEventListener("pointercancel", C), e.addEventListener("pointerleave", C);
  const A = () => {
    const [z, V] = [...h.values()];
    return { cx: (z.x + V.x) / 2, cy: (z.y + V.y) / 2, span: Math.max(1, Math.hypot(z.x - V.x, z.y - V.y)) };
  }, E = (z) => {
    if (z.pointerType === "touch") {
      if (h.set(z.pointerId, { x: z.clientX, y: z.clientY }), h.size !== 2) {
        g = null;
        return;
      }
      g = A(), f = null, k = !0;
    }
  }, O = (z) => {
    if (z.pointerType !== "touch" || !h.has(z.pointerId) || (h.set(z.pointerId, { x: z.clientX, y: z.clientY }), !g || h.size !== 2)) return;
    z.preventDefault(), z.stopPropagation();
    const V = A(), G = e.getBoundingClientRect(), oe = v(V.span / g.span), X = oe / o;
    i = V.cx - G.left - (g.cx - G.left - i) * X, a = V.cy - G.top - (g.cy - G.top - a) * X, o = oe, g = V, c();
  }, R = (z) => {
    if (z.pointerType !== "touch") return;
    if (h.delete(z.pointerId), h.size === 2) {
      g = A();
      return;
    }
    g = null;
    const [V] = [...h.values()];
    _ = h.size === 1 && V ? { ...V } : null;
  };
  e.addEventListener("pointerdown", E, !0), e.addEventListener("pointermove", O, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const D = qu(e);
  return {
    fit: y,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: y,
    centreOn(z, V, G = 1) {
      const { width: oe, height: X } = l();
      o = Math.max(o, G), i = oe / 2 - z * o, a = X / 2 - V * o, c();
    },
    transform: () => ({ scale: o, tx: i, ty: a }),
    wasPan: () => k,
    gesturing: () => h.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(z, V, G) {
      o = z, i = V, a = G, c();
    },
    cleanup() {
      w.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", p), e.removeEventListener("pointermove", $), e.removeEventListener("pointerup", C), e.removeEventListener("pointercancel", C), e.removeEventListener("pointerleave", C), e.removeEventListener("pointerdown", E, !0), e.removeEventListener("pointermove", O, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const Sp = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function ec(e) {
  const t = { ...e };
  for (const n of Sp) delete t[n];
  return t;
}
async function tc(e) {
  let t;
  try {
    if (t = await Lu(), typeof t?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const n = t.forceSimulation(e.nodes);
  for (const [s, o] of e.forces(t, e.links)) n.force(s, o);
  n.stop();
  const r = Math.ceil(Math.log(n.alphaMin()) / Math.log(1 - n.alphaDecay()));
  for (let s = 0; s < r * e.tickMultiplier; s++) n.tick();
  return !0;
}
function Et(e) {
  const t = /* @__PURE__ */ new Map();
  return eo(e, t, /* @__PURE__ */ new Set()), t;
}
function eo(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const s of e) eo(s, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const s of r) {
      const o = s["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, s);
    }
  for (const s of Object.values(e)) eo(s, t, n);
}
function Ne(e, t) {
  return t ? e.get(t) : void 0;
}
function ke(e, t, n) {
  const r = Ne(e, t);
  return r?.type === n ? r : void 0;
}
function Ro(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const s of t) {
    if (!s || r.has(s)) continue;
    const o = e.get(s);
    o && (r.add(s), n.push(o));
  }
  return n;
}
function _e(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function nc(e) {
  const t = e.gufe_type || e.name || "Protocol";
  return (t.endsWith("Protocol") ? t.slice(0, -8) : t) || t;
}
function rc(e) {
  const t = [];
  let n = 0;
  for (const i of e.keys) {
    const a = ke(e.registry, i, e.nodeType);
    if (!a) {
      n++;
      continue;
    }
    t.push({ ...a, x: 0, y: 0 });
  }
  const r = new Map(t.map((i) => [i["gufe-key"], i])), s = [];
  let o = 0;
  for (const i of e.edges) {
    const [a, c] = e.ends(i), l = a === void 0 ? void 0 : r.get(a), d = c === void 0 ? void 0 : r.get(c);
    if (!l || !d) {
      o++;
      continue;
    }
    s.push({ ...i, index: s.length, from: l, to: d });
  }
  return { nodes: t, edges: s, unresolved: n, dangling: o };
}
const kp = 8, Cp = 64, Ep = () => new Promise((e) => setTimeout(e, 0));
function to(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function xp(e, t, n, r) {
  let s = null;
  try {
    if (s = e.get_mol(n, JSON.stringify({ removeHs: r })), !s || !s.get_substruct_matches) return null;
    const o = s.get_substruct_matches(t), i = JSON.parse(o || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of i) {
      const l = c.atoms;
      if (Array.isArray(l))
        for (const d of l) typeof d == "number" && a.add(d);
    }
    return [...a].sort((c, l) => c - l);
  } catch (o) {
    return console.warn("[alchemy-viz] SMARTS match threw -", ve(o)), null;
  } finally {
    to(s);
  }
}
function oc(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let s = 0;
  return { run: async (i) => {
    const a = i.trim(), c = ++s;
    if (!a) return { status: "cleared" };
    const l = r.get(a);
    if (l) return { status: "ok", matched: l, unreadable: 0 };
    const d = await e();
    if (c !== s) return { status: "superseded" };
    if (!d) return { status: "unsupported" };
    if (!d.get_qmol) return { status: "unsupported" };
    let m = null;
    try {
      m = d.get_qmol(a);
    } catch {
      m = null;
    }
    if (!m) return { status: "invalid" };
    if (!m.get_substruct_matches)
      return to(m), { status: "unsupported" };
    const v = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let b = performance.now(), w = 0;
      for (let h = 0; h < t.length; h++) {
        const g = t[h] ? xp(d, m, t[h], n) : null;
        if (g ? g.length && v.set(h, g) : y++, !(++w < Cp && performance.now() - b < kp)) {
          if (await Ep(), c !== s) return { status: "superseded" };
          w = 0, b = performance.now();
        }
      }
    } finally {
      to(m);
    }
    return r.set(a, v), { status: "ok", matched: v, unreadable: y };
  }, cancel: () => void ++s };
}
const Ap = 250;
function Pp(e) {
  const t = N("div", "display:flex;flex-direction:column;gap:8px;"), n = N("input", ca);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = N("div", `font-size:${Q.tiny};line-height:1.5;min-height:1.5em;color:${I.textMuted2};`);
  t.appendChild(r);
  const s = (a) => {
    switch (a.status) {
      case "ok":
        return e.describe(a);
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  }, o = (a) => {
    r.textContent = a.trim() ? "Matching..." : "", e.run(a).then(
      (c) => {
        c.status !== "superseded" && (r.textContent = s(c));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let i = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => {
      n.isConnected && o(n.value);
    }, Ap);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && o(n.value);
    }
  };
}
const sc = "Cmd/Ctrl-click to select several.";
function Rp(e, t, n, r, s) {
  const o = (i) => s === "keys" ? i["gufe-key"] : _e(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(o).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${o(i.from)}, ${o(i.to)}`).join(`
`);
}
async function Mp(e) {
  try {
    if (navigator.clipboard)
      return await navigator.clipboard.writeText(e), !0;
  } catch {
  }
  return Np(e);
}
function Np(e) {
  const t = N(
    "textarea",
    "position:fixed;top:-1000px;left:-1000px;opacity:0;"
  );
  t.value = e, t.readOnly = !0, document.body.appendChild(t), t.select();
  try {
    return document.execCommand("copy");
  } catch {
    return !1;
  } finally {
    t.remove();
  }
}
function Tp(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = N("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Op(e) {
  const { words: t } = e, n = rt(e.setting, "names", ["names", "keys"]), r = N("div", "display:flex;flex-direction:column;gap:6px;"), s = N("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${I.textMuted};`);
  s.appendChild(N("span", "", "copy as"));
  const o = ir(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    n.get(),
    () => {
    },
    n
  );
  o.style.flex = "1", s.appendChild(o), r.appendChild(s);
  const i = N("div", `font-size:${Q.tiny};line-height:1.5;color:${I.textMuted2};`), a = (d) => {
    i.textContent = d;
  }, c = ft("width:100%;"), l = () => {
    const d = e.what();
    c.textContent = "Copy", c.title = d === "nodes" ? `Copy the selected ${t.nodes.plural}, one per line` : `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`;
  };
  return l(), c.onclick = (d) => {
    const m = e.what(), v = m === "nodes" ? t.nodes : t.edges, y = o.value, b = Rp(e.nodes, e.edges, e.selected, m, y);
    if (!b) {
      a(
        e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : m === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${sc}` : "Nothing to copy."
      );
      return;
    }
    const w = b.split(`
`).length;
    if (d.shiftKey) {
      Tp(b, `selected-${v.plural}.txt`), a(`Saved ${w} ${v.plural} to a file.`);
      return;
    }
    Mp(b).then((h) => {
      if (!h) {
        a("Could not reach the clipboard. Shift-click to save as a file instead.");
        return;
      }
      a(
        m === "edges" ? `Copied ${w} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      );
    });
  }, r.appendChild(c), r.appendChild(i), r.appendChild(N("div", `font-size:${Q.tiny};color:${I.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a(""), relabel: l };
}
const ki = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function ic(e) {
  const t = Kr(`${e.namespace}.query`), n = rt(`${e.namespace}.tab`, "nodes", ["nodes", "edges"]);
  let r = n.get();
  const s = N("div", da), o = Ct(
    [
      { id: "nodes", label: e.words.nodes.tab, title: `List the ${e.words.nodes.plural}` },
      { id: "edges", label: e.words.edges.tab, title: `List the ${e.words.edges.plural}` }
    ],
    r,
    (h) => {
      r = h, n.set(r), w();
    }
  );
  for (const h of Array.from(o.children)) h.style.flex = "1";
  o.style.gap = "0", s.appendChild(o);
  const i = N("input", ca);
  s.appendChild(i);
  const a = Pp({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Kr(`${e.namespace}.smarts`),
    run: (h) => e.match(h),
    describe: (h) => e.smarts.describe(h)
  });
  s.appendChild(a.element);
  for (const h of e.filters?.(() => w()) ?? []) s.appendChild(h);
  const c = N("div", `font-size:${Q.small};color:${I.textMuted2};`);
  s.appendChild(c);
  const l = N("div", Pc);
  s.appendChild(l), s.appendChild(N("div", `font-size:${Q.tiny};line-height:1.5;color:${I.textMuted2};`, sc));
  const d = Op({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: e.words,
    setting: `${e.namespace}.exportAs`,
    what: () => r
  });
  s.appendChild(d.box);
  const m = ft("width:100%;", "Clear selection");
  m.title = "Clear the selection and put the filters back", m.onclick = () => {
    e.selected.clear(), e.resetFilters?.(), w(), e.refresh();
  }, s.appendChild(m);
  function v(h, g, f) {
    const k = sr(so.row);
    k.setAttribute("aria-pressed", String(g.every((u) => e.selected.has(u)))), h.before && k.appendChild(h.before);
    const _ = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", h.name);
    _.title = h.title, k.appendChild(_), k.onclick = (u) => {
      if (u.shiftKey || u.metaKey || u.ctrlKey) {
        const p = g.every(($) => e.selected.has($));
        for (const $ of g)
          p ? e.selected.delete($) : e.selected.add($);
      } else {
        e.selected.clear();
        for (const p of g) e.selected.add(p);
        f();
      }
      w(), e.refresh();
    }, l.appendChild(k);
  }
  function y() {
    const h = e.nodes.map((g, f) => ({ node: g, index: f })).filter(({ node: g, index: f }) => e.shows(g, f)).map(({ node: g, index: f }) => ({ node: g, index: f, parts: e.row(g, f) }));
    h.sort((g, f) => ki.compare(g.parts.name, f.parts.name));
    for (const { node: g, index: f, parts: k } of h)
      v(k, [g["gufe-key"]], () => e.focus(f));
    return h.length;
  }
  function b() {
    const h = e.edges.map((g, f) => ({ edge: g, index: f })).filter(({ edge: g, index: f }) => e.edgeShows(g, f)).map(({ edge: g, index: f }) => ({ edge: g, index: f, parts: e.edgeRow(g, f) }));
    h.sort((g, f) => ki.compare(g.parts.name, f.parts.name));
    for (const { edge: g, index: f, parts: k } of h)
      v(k, [g.from["gufe-key"], g.to["gufe-key"]], () => e.focusEdge(f));
    return h.length;
  }
  function w() {
    d.clearNote(), d.relabel(), o.setActive(r), l.replaceChildren();
    const h = r === "nodes" ? e.words.nodes : e.words.edges, g = r === "nodes" ? e.nodes.length : e.edges.length, f = r === "nodes" ? y() : b();
    c.textContent = `${f} of ${g} ${h.plural}`, f || l.appendChild(N("div", `font-size:${Q.small};padding:${ee.lg};color:${I.textMuted2};`, "Nothing matches."));
  }
  return i.type = "search", i.placeholder = e.search.placeholder, i.value = t.get(), e.query.text = i.value, i.setAttribute("aria-label", e.search.label), i.oninput = () => {
    e.query.text = i.value, t.set(i.value), w(), e.refresh();
  }, w(), e.mounted?.(w), a.apply(), s;
}
function ac(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function Fp(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Dt = { node: 0.12, edge: 0.06 };
function cc(e, t, n, r) {
  e.forEach((s, o) => {
    let i = null, a = !1;
    s.addEventListener("pointerdown", (l) => {
      l.stopPropagation();
      const { scale: d } = n.transform();
      i = { x: l.clientX - t[o].x * d, y: l.clientY - t[o].y * d }, a = !1, s.setPointerCapture(l.pointerId);
    }), s.addEventListener("pointermove", (l) => {
      if (!i) return;
      if (n.gesturing()) {
        i = null, a = !0;
        return;
      }
      const { scale: d } = n.transform(), m = (l.clientX - i.x) / d, v = (l.clientY - i.y) / d;
      Math.hypot(m - t[o].x, v - t[o].y) * d > Xa && (a = !0), t[o].x = t[o].fx = m, t[o].y = t[o].fy = v, r.moved(o);
    });
    const c = () => {
      i = null;
    };
    s.addEventListener("pointerup", c), s.addEventListener("pointercancel", c), s.addEventListener("click", (l) => {
      l.stopPropagation(), a || r.clicked(o);
    });
  });
}
class lc {
  #e = /* @__PURE__ */ new Set();
  #t = /* @__PURE__ */ new Set();
  #n = [];
  /** Whether a structure is on screen for this node. */
  has(t) {
    return this.#e.has(t);
  }
  /** Whether it is worth trying: not drawn, and not already refused. */
  wants(t) {
    return !this.#e.has(t) && !this.#t.has(t);
  }
  drew(t, n = "") {
    this.#e.add(t), this.#n[t] = n;
  }
  refused(t) {
    this.#t.add(t);
  }
  /**
   * Drop the structures `keyOf` no longer agrees with, and only those.
   *
   * A structure is expensive and a new pattern usually changes a handful of
   * nodes, so redrawing every one of them would make typing a pattern cost more
   * than drawing the network did. A dropped structure is rebuilt by the next
   * pass, and only if it is on screen.
   */
  forget(t, n) {
    for (const r of [...this.#e])
      this.#n[r] !== t(r) && (n(r), this.#e.delete(r));
  }
}
const Ln = 200;
function dc(e, t, n, r) {
  const { scale: s, tx: o, ty: i } = t, a = [];
  return e.forEach((c, l) => {
    if (!r(l)) return;
    const d = c.x * s + o, m = c.y * s + i;
    d < -Ln || m < -Ln || d > n.width + Ln || m > n.height + Ln || a.push(l);
  }), a;
}
function uc(e) {
  const t = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
  e.appendChild(t);
  const n = document.createElement("alchemy-view");
  return n.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", {
    show(r) {
      n.payload = r, n.parentNode !== t && t.replaceChildren(n);
    },
    content(r) {
      t.replaceChildren(r);
    },
    message(r) {
      t.replaceChildren($e(r));
    },
    // Removing the nested view fires its own `disconnectedCallback`, which is
    // where whatever it mounted releases its viewers.
    cleanup() {
      n.remove();
    }
  };
}
function ct(e) {
  return e > 0 ? `+${e}` : String(e);
}
function Ci(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const zp = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), jp = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Ip = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, Dp = (e) => {
  const t = zp(e);
  return jp.has(t) || Ip(t);
};
function fc(e, t, n, r) {
  const s = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!s || s.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let o = 0;
  for (const i of Array.from(s.childNodes)) {
    if (i.nodeType !== 1) continue;
    const a = i.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && Dp(i) || (e.appendChild(document.importNode(i, !0)), o++);
  }
  return o ? !0 : (e.replaceChildren(), !1);
}
const Lp = 1e-6;
function qn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let s = 0; s < 3; s++)
      n[r * 3 + s] = e[r * 3] * t[s] + e[r * 3 + 1] * t[3 + s] + e[r * 3 + 2] * t[6 + s];
  return n;
}
function Ei(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function qp(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function xi(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = o[i][0], c = o[i][1], l = t[a * 3 + c];
      if (Math.abs(l) < 1e-14) continue;
      const d = t[a * 3 + a], m = t[c * 3 + c], v = (m - d) / (2 * l);
      let y;
      Math.abs(v) > 1e10 ? y = 1 / (2 * v) : y = (v >= 0 ? 1 : -1) / (Math.abs(v) + Math.sqrt(v * v + 1));
      const b = 1 / Math.sqrt(1 + y * y), w = y * b;
      t[a * 3 + a] = d - y * l, t[c * 3 + c] = m + y * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let h = 0; h < 3; h++)
        if (h !== a && h !== c) {
          const g = t[h * 3 + a], f = t[h * 3 + c];
          t[h * 3 + a] = b * g - w * f, t[a * 3 + h] = t[h * 3 + a], t[h * 3 + c] = w * g + b * f, t[c * 3 + h] = t[h * 3 + c];
        }
      for (let h = 0; h < 3; h++) {
        const g = n[h * 3 + a], f = n[h * 3 + c];
        n[h * 3 + a] = b * g - w * f, n[h * 3 + c] = w * g + b * f;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Bp(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], s = [0, 0, 0];
  for (let _ = 0; _ < n; _++)
    r[0] += e[_][0], r[1] += e[_][1], r[2] += e[_][2], s[0] += t[_][0], s[1] += t[_][1], s[2] += t[_][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, s[0] /= n, s[1] /= n, s[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - s[0], r[1] - s[1], r[2] - s[2]], determined: !1 };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let _ = 0; _ < n; _++) {
    const u = e[_][0] - r[0], p = e[_][1] - r[1], $ = e[_][2] - r[2], C = t[_][0] - s[0], A = t[_][1] - s[1], E = t[_][2] - s[2];
    o[0] += u * C, o[1] += u * A, o[2] += u * E, o[3] += p * C, o[4] += p * A, o[5] += p * E, o[6] += $ * C, o[7] += $ * A, o[8] += $ * E;
  }
  const i = Ei(o), a = qn(i, o), c = qn(o, i);
  let l = xi(a), d = xi(c);
  function m(_) {
    const u = [0, 1, 2].sort(($, C) => _.values[C] - _.values[$]), p = new Array(9);
    for (let $ = 0; $ < 3; $++) {
      const C = u[$];
      p[$] = _.vectors[C], p[3 + $] = _.vectors[3 + C], p[6 + $] = _.vectors[6 + C];
    }
    return {
      values: [_.values[u[0]], _.values[u[1]], _.values[u[2]]],
      vectors: p
    };
  }
  l = m(l), d = m(d);
  const v = l.vectors, y = d.vectors;
  for (let _ = 0; _ < 3; _++) {
    const u = v[_], p = v[3 + _], $ = v[6 + _], C = o[0] * u + o[1] * p + o[2] * $, A = o[3] * u + o[4] * p + o[5] * $, E = o[6] * u + o[7] * p + o[8] * $, O = y[_], R = y[3 + _], D = y[6 + _];
    C * O + A * R + E * D < 0 && (y[_] = -O, y[3 + _] = -R, y[6 + _] = -D);
  }
  const b = Ei(v);
  let w = qn(y, b);
  qp(w) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], w = qn(y, b));
  const h = w[0] * s[0] + w[1] * s[1] + w[2] * s[2], g = w[3] * s[0] + w[4] * s[1] + w[5] * s[2], f = w[6] * s[0] + w[7] * s[1] + w[8] * s[2], k = l.values[1] > Lp * l.values[0];
  return { R: w, t: [r[0] - h, r[1] - g, r[2] - f], determined: k };
}
function Vp(e, t, n) {
  const r = e[0], s = e[1], o = e[2];
  return [
    t[0] * r + t[1] * s + t[2] * o + n[0],
    t[3] * r + t[4] * s + t[5] * o + n[1],
    t[6] * r + t[7] * s + t[8] * o + n[2]
  ];
}
function Up(e, t) {
  const n = N("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  e.appendChild(n);
  let r = [], s = 0, o = !0, i = !1;
  const a = () => {
    s && cancelAnimationFrame(s), s = 0, i && Ta(r[0]?.viewer ?? null, r[0]?.interaction ?? null), i = !1;
    for (const c of r)
      c.interaction?.cleanup(), _o(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), d = N("div", "flex:1;position:relative;min-height:0;");
      d.dataset.gufeViewer = "", l.appendChild(d), t && l.appendChild(N("div", oo, c)), n.appendChild(l);
      const m = { container: d, viewer: null, interaction: null };
      return r.push(m), m;
    },
    open(c, l) {
      const d = nt.createViewer(c.container, { backgroundColor: qt.viewer() });
      for (const m of l) d.addModel(Yf(m), "sdf");
      return c.viewer = d, d;
    },
    settle(c) {
      c.viewer && (c.interaction = dr(c.container, c.viewer));
    },
    pose(c) {
      Oa(c.viewer, c.interaction), i = !0;
    },
    sync() {
      if (r.length < 2) return;
      const c = r.map(() => "");
      let l = !1;
      const d = () => {
        if (o) {
          if (!l)
            for (let m = 0; m < r.length; m++) {
              const v = r[m].viewer;
              if (!v) continue;
              const y = JSON.stringify(v.getView());
              if (y !== c[m]) {
                l = !0;
                for (let b = 0; b < r.length; b++)
                  b !== m && r[b].viewer && (r[b].viewer.setView(v.getView()), r[b].viewer.render()), c[b] = y;
                l = !1;
                break;
              }
            }
          s = requestAnimationFrame(d);
        }
      };
      s = requestAnimationFrame(d);
    },
    resize() {
      for (const c of r)
        c.viewer && (c.viewer.resize(), c.viewer.render());
    },
    cleanup() {
      o = !1, a();
    }
  };
}
const Ai = `
`, Or = 4;
function Pi(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (s) {
    return console.warn("[alchemy-viz] could not lay out a molecule in 2D -", ve(s)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Hp(e, t, n) {
  const r = [], s = [];
  for (const [d, m] of n) {
    const v = e[m], y = t[d];
    !v || !y || (r.push(v), s.push(y));
  }
  if (r.length < 2) return null;
  const o = (d) => {
    let m = 0, v = 0;
    for (const y of d)
      m += y[0], v += y[1];
    return [m / d.length, v / d.length];
  }, i = o(r), a = o(s);
  let c = null, l = -1 / 0;
  for (const d of [!1, !0]) {
    let m = 0, v = 0;
    for (let f = 0; f < r.length; f++) {
      const k = (d ? -1 : 1) * (r[f][0] - i[0]), _ = r[f][1] - i[1], u = s[f][0] - a[0], p = s[f][1] - a[1];
      m += k * p - _ * u, v += k * u + _ * p;
    }
    const y = Math.hypot(m, v);
    if (y <= l) continue;
    l = y;
    const b = Math.atan2(m, v), w = Math.cos(b), h = Math.sin(b), g = (d ? -1 : 1) * i[0];
    c = {
      cos: w,
      sin: h,
      mirror: d,
      tx: a[0] - (w * g - h * i[1]),
      ty: a[1] - (h * g + w * i[1])
    };
  }
  return c;
}
function Kp(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Gp(e, t, n) {
  const r = ko(e);
  if (!r) return e;
  const s = e.replace(/\r/g, "").split(Ai);
  if (s[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const i = s[Or + o], a = t[o];
    if (i == null || !a) return e;
    s[Or + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Or + r.atoms + a, l = s[c];
      if (l == null) break;
      const d = parseInt(l.substring(9, 12), 10);
      d !== 1 && d !== 6 || (s[c] = l.substring(0, 9) + String(d === 1 ? 6 : 1).padStart(3) + l.substring(12));
    }
  return s.join(Ai);
}
function Wp(e, t, n) {
  try {
    const r = (i) => Yr(i).coords.map((a) => [a[0], a[1]]), s = r(t), o = Hp(s, r(e), n);
    return o ? Gp(
      t,
      s.map((i) => Kp(o, i)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[alchemy-viz] could not align a depiction to its partner -", ve(r)), t;
  }
}
function Jp(e, t, n, r, s) {
  const o = Pi(e, t, r), i = Pi(e, n, r);
  return !s || r === "conformer" ? { left: o, right: i } : { left: o, right: Wp(o, i, s) };
}
const Yp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Xp = {
  core: "0x888888",
  pairLine: "0xd9a300"
}, pc = () => ro() === "dark" ? Yp : Xp, Fr = 420, We = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, zr = { gap: 2.5, minLiftFraction: 0.6 }, Zp = 24, Ri = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, Qp = {
  mapped: null,
  element: Oe.modifiedColor,
  uniqueA: Oe.destroyedColor,
  uniqueB: Oe.createdColor
}, eh = 132;
function Mi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let s = 0; s < 3; s++)
      r[s] < t[s] && (t[s] = r[s]), r[s] > n[s] && (n[s] = r[s]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function th(e, t) {
  const n = Mi(e), r = Mi(t);
  let s = 0;
  n.span[1] < n.span[s] && (s = 1), n.span[2] < n.span[s] && (s = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[s] - r.min[s] + zr.gap, a = zr.minLiftFraction * o + zr.gap;
  return { axis: s, lift: Math.max(i, a) };
}
function hc(e) {
  const t = zf(Oe.customSpec);
  return [
    { mol: e.molA, uniques: e.uniquesA, side: "left", custom: t.left },
    { mol: e.molB, uniques: e.uniquesB, side: "right", custom: t.right }
  ];
}
function nh(e, t) {
  for (const n of [t.molA, t.molB]) {
    const r = e.box(n.name), s = e.open(r, [n]);
    s.setStyle(
      {},
      { stick: { radius: We.stick, colorscheme: "Jmol" }, sphere: { scale: We.sphere, colorscheme: "Jmol" } }
    ), s.zoomTo(), s.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function rh(e, t) {
  const n = Oe, r = pc();
  for (const s of hc(t)) {
    const o = e.box(s.mol.name), i = e.open(o, [s.mol]);
    i.setStyle(
      {},
      { stick: { radius: We.stick, color: r.core }, sphere: { scale: We.sphere, color: r.core } }
    );
    const a = (c, l) => {
      i.addStyle(
        { serial: c },
        {
          stick: { radius: We.markStick, color: mi(l) },
          sphere: { scale: We.markSphere, color: mi(l) }
        }
      );
    };
    for (const c of za(n, s.mol, s.uniques, s.side))
      for (const l of c.atoms) a(l, c.color);
    for (const c of s.custom)
      c < s.mol.symbols.length && a(c, n.customColor);
    i.zoomTo(), i.render(), e.settle(o), e.pose(o);
  }
  e.sync();
}
function oh(e, t) {
  const { molA: n, molB: r, nameA: s, nameB: o, pairs: i } = t, a = e.box(`${s} (left), both overlaid (middle), ${o} (right)`), c = uh(n.coords, r.coords), l = (g, f) => ({
    ...g,
    coords: g.coords.map(([k, _, u]) => [k + f, _, u])
  }), d = l(n, -c), m = l(r, c), v = e.open(a, [d, m, n, r]);
  v.setStyle({}, { stick: {} });
  const y = Array.from(i);
  y.forEach(([g, f], k) => {
    const _ = d.coords[g], u = m.coords[f];
    if (!_ || !u) return;
    const p = fh(k, y.length);
    for (const [$, C, A] of [_, u])
      v.addSphere({
        center: { x: $, y: C, z: A },
        radius: Ri.sphereRadius,
        color: p,
        alpha: Ri.sphereAlpha
      });
  }), v.zoomTo();
  const { clientWidth: b, clientHeight: w } = a.container, h = b - 2 * Zp;
  h > 0 && h < w && v.zoom(h / w), v.render(), e.settle(a);
}
function sh(e, t) {
  const { molA: n, molB: r, nameA: s, nameB: o, pairs: i } = t, a = e.box(`${s} to ${o}  (${i.size} mapped pairs)`), { axis: c, lift: l } = th(n.coords, r.coords), d = {
    ...r,
    coords: r.coords.map((y) => {
      const b = [y[0], y[1], y[2]];
      return b[c] += l, b;
    })
  }, m = e.open(a, [n, d]), v = {
    stick: { radius: We.stick, colorscheme: "Jmol" },
    sphere: { scale: We.pairSphere, colorscheme: "Jmol" }
  };
  m.setStyle({ model: 0 }, v), m.setStyle({ model: 1 }, v);
  for (const [y, b] of i) {
    const w = n.coords[y], h = d.coords[b];
    !w || !h || m.addCylinder({
      start: { x: w[0], y: w[1], z: w[2] },
      end: { x: h[0], y: h[1], z: h[2] },
      radius: We.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: pc().pairLine
    });
  }
  m.zoomTo(), c === 2 ? m.rotate(90, "x") : c === 0 && m.rotate(-90, "z"), m.render(), e.settle(a);
}
function ih(e, t) {
  const n = Oe, r = hc(t).map((s) => {
    const o = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), i = N(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Fa()};`
    );
    return i.appendChild($e("Loading 2D depiction...")), o.appendChild(i), e.named && o.appendChild(N("div", oo, s.mol.name)), e.element.appendChild(o), { box: i, side: s };
  });
  wo().then((s) => {
    const o = Lf(n, s), i = Jp(s, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = za(n, c.mol, c.uniques, c.side), d = qf(n, Fr, l, c.custom, o, c.mol.symbols.length), m = Bf(s, c.side === "left" ? i.left : i.right, Fr, d);
      if (a.replaceChildren(), !m) {
        a.appendChild($e("Failed to parse molecule", !0));
        continue;
      }
      La(a, m, Fr);
      const v = a.querySelector("svg");
      v && Wf(v, c.mol, n, l, c.custom, o);
    }
  }).catch((s) => {
    for (const { box: o } of r)
      o.replaceChildren($e(`RDKit failed to load: ${ve(s)}`, !0));
  });
}
function ah(e, t, n) {
  const { nameA: r, nameB: s, pairs: o, molA: i, molB: a, uniquesA: c, uniquesB: l } = t, d = N(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
  );
  e.element.appendChild(d), d.appendChild(
    N(
      "div",
      `font-size:${Q.title};font-weight:${ge.bold};color:${xe.title};`,
      n.name || `${r} to ${s}`
    )
  );
  const m = lh(o, i.symbols, a.symbols), v = N("div", Ae.row), y = [];
  let b = null;
  const w = (E, O, R, D) => {
    const z = sr(`${Ae.plain}${Ae.button}`, Ae.className);
    z.appendChild(Ve(E, String(O), D)), z.onclick = () => {
      b = b === R ? null : R, $();
    }, y.push({ node: z, kinds: R }), v.appendChild(z);
  }, h = (E, O) => {
    const R = N("span", Ae.plain);
    R.appendChild(Ve(E, O)), v.appendChild(R);
  };
  w("mapped atoms", o.size, ["mapped", "element"]), w("element changes", c.elements.length, ["element"], Oe.modifiedColor), w(`unique to ${r}`, c.atoms.length, ["uniqueA"], Oe.destroyedColor), w(`unique to ${s}`, l.atoms.length, ["uniqueB"], Oe.createdColor), h(`atoms in ${r}`, String(i.symbols.length)), h(`atoms in ${s}`, String(a.symbols.length)), h("score", n.score == null ? Qe : n.score.toFixed(3)), d.appendChild(v), d.appendChild(N("div", Vr, "Correspondence"));
  const g = N("div", `font-size:${Q.small};line-height:1.6;color:${xe.faint};`);
  d.appendChild(g);
  const f = N(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${eh}px,1fr));gap:${ee.xs} ${ee.md};font-family:${Q.mono};font-size:${Q.small};color:${xe.primary};`
  );
  d.appendChild(f);
  const k = String(Math.max(i.symbols.length, a.symbols.length, 1) - 1).length, _ = (E, O) => `${(E == null ? Qe : String(E)).padStart(k)} ${O.padEnd(2)}`, u = (E) => {
    if (E.kind === "uniqueA") return `${r} atom ${E.a} ${E.symbolA} maps to nothing`;
    if (E.kind === "uniqueB") return `${s} atom ${E.b} ${E.symbolB} maps to nothing`;
    const O = E.kind === "element" ? ", an element change" : "";
    return `${r} atom ${E.a} ${E.symbolA} maps to ${s} atom ${E.b} ${E.symbolB}${O}`;
  }, p = (E) => {
    const O = N(
      "div",
      `white-space:pre;padding:${ee.xs} ${ee.md};border-radius:${Pe.sm};background:${qt.card};border-left:3px solid ${Qp[E.kind] ?? "transparent"};`,
      `${_(E.a, E.symbolA)} -> ${_(E.b, E.symbolB)}`
    );
    return O.title = u(E), O.dataset.gufeRelation = E.kind, O;
  }, $ = () => {
    const E = b, O = E ? m.filter((R) => E.includes(R.kind)) : m;
    f.replaceChildren(...O.map(p)), O.length || f.appendChild(
      N(
        "div",
        `font-size:${Q.small};line-height:1.6;color:${xe.faint};grid-column:1/-1;`,
        b ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), g.textContent = (o.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${s}, by atom index and element` + (b ? "; click the chip again for all of them" : "");
    for (const R of y) {
      const D = R.kinds === b;
      R.node.setAttribute("aria-pressed", String(D)), R.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  $();
  const C = Object.entries(n.annotations ?? {}).filter(([E]) => E !== "score");
  if (!C.length) return;
  d.appendChild(N("div", Vr, "Annotations"));
  const A = N("div", `${zc}color:${xe.faint};`);
  for (const [E, O] of C)
    A.appendChild(N("div", "", `${E}: ${String(O)}`));
  d.appendChild(A);
}
const Ni = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], jr = {
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Ti(e, t, n) {
  const r = [], s = [], o = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? s.push(i) : o.push(i);
  }
  return { atoms: r, elements: s, mapped: o };
}
function ch(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function lh(e, t, n) {
  const r = [];
  for (let o = 0; o < t.length; o++) {
    const i = t[o] ?? "", a = e.get(o);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: o, b: null, symbolA: i, symbolB: "" });
      continue;
    }
    const c = n[a] ?? "";
    r.push({ kind: i === c ? "mapped" : "element", a: o, b: a, symbolA: i, symbolB: c });
  }
  const s = new Set(e.values());
  for (let o = 0; o < n.length; o++)
    s.has(o) || r.push({ kind: "uniqueB", a: null, b: o, symbolA: "", symbolB: n[o] ?? "" });
  return r;
}
function mc(e, t) {
  const n = ke(t, e.componentA, "SmallMoleculeComponentViz"), r = ke(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Ro(t, [e.componentA, e.componentB]) };
}
function dh(e, t, n) {
  const r = [], s = [];
  for (const [i, a] of n) {
    const c = e.coords[i], l = t.coords[a];
    c && l && (r.push(c), s.push(l));
  }
  const o = Bp(r, s);
  return o?.determined ? { ...t, coords: t.coords.map((i) => Vp(i, o.R, o.t)) } : t;
}
function uh(e, t) {
  let n = 0;
  for (const s of [e, t]) {
    let o = 1 / 0;
    for (const i of s)
      i[0] < o && (o = i[0]), i[0] - o > n && (n = i[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > jr.minSpread ? r : jr.minSpread) * jr.spreadFactor;
}
function fh(e, t) {
  const n = Ju, s = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(s), i = Math.min(o + 1, n.length - 1), a = s - o;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const d = (v) => parseInt(v.slice(1 + l * 2, 3 + l * 2), 16), m = Math.round(d(n[o]) + (d(n[i]) - d(n[o])) * a);
    c += m.toString(16).padStart(2, "0");
  }
  return c;
}
function ph(e, t) {
  const n = ke(t, e.componentA, "SmallMoleculeComponentViz"), r = ke(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const s = _e(n), o = _e(r), i = ch(e);
  let a, c;
  try {
    a = Yr(n.sdf, s), c = Yr(r.sdf, o);
  } catch (d) {
    return { problem: `Could not read a molecule: ${ve(d)}`, isError: !0 };
  }
  c = dh(a, c, i);
  const l = /* @__PURE__ */ new Map();
  for (const [d, m] of i) l.set(m, d);
  return {
    pair: {
      from: n,
      to: r,
      nameA: s,
      nameB: o,
      pairs: i,
      molA: a,
      molB: c,
      uniquesA: Ti(i, a.symbols, c.symbols),
      uniquesB: Ti(l, c.symbols, a.symbols)
    }
  };
}
class hh extends Fe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = ph(n, Et(n));
    if ("problem" in r)
      return t.appendChild($e(r.problem, r.isError)), {};
    const s = r.pair, o = N("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const i = Up(o, ao(t)), a = rt("atom-mapping.mode", "plain", Ni.map((b) => b.id));
    let c = a.get();
    const l = N("div", ua), d = Ca(
      Ni,
      c,
      (b) => {
        c = b, y();
      },
      { remember: a, fit: { pane: o, bar: l } }
    );
    l.appendChild(d), o.appendChild(l);
    const m = co(), v = {
      plain: nh,
      colored: rh,
      openfe: oh,
      lines: sh
    }, y = () => {
      const b = m.start();
      if (i.clear(), c === "info") return ah(i, s, n);
      if (c === "2d") return ih(i, s);
      const w = v[c];
      i.element.appendChild($e("Loading 3D viewer...")), lr().then(() => {
        b() && (i.element.replaceChildren(), w(i, s));
      }).catch((h) => {
        b() && i.element.replaceChildren($e(`3D render failed: ${ve(h)}`, !0));
      });
    };
    return y(), {
      onResize: () => i.resize(),
      cleanup: () => {
        m.stop(), d.cleanup(), i.cleanup();
      }
    };
  }
}
ze("gufe-atom-mapping", hh);
const Oi = ["Force-directed", "Circular", "Radial"], mh = "ligand-network", gh = "Click a ligand or an edge to see it.";
function yh(e) {
  const { index: t, from: n, to: r, ...s } = e;
  return s;
}
function $h(e) {
  return ec(e);
}
const Fi = (e) => Math.round(e * 100) / 100;
function bh(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const s = r(n.selected) ? Math.trunc(n.selected) : -1, o = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: s, selectedKind: o };
}
function vh(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Ot = { initial: 0.58, min: 0.25, max: 0.8 }, Te = 38, zi = 1.5, Ir = {
  /** Where the charge sits while the structure has the middle of the node, as a fraction of the radius. */
  at: 0.55,
  fontSize: 22,
  /**
   * The charge on the zooms that draw no structure: bigger, and across the top
   * of the node rather than in the corner of it.
   *
   * Out there a node is a disc with a name in it, and the charge is the only
   * other thing about a ligand this view still knows. At the corner size it
   * would be a dot on a dot; this is the second thing a reader can still make
   * out, which is what a level of detail is for.
   *
   * It stays in the corner rather than moving to the middle, because the middle
   * is where that name is drawn: a charge over it makes two unreadable things
   * out of one readable one, and at this zoom the node is small enough that the
   * corner is beside it rather than far from it.
   */
  bigFontSize: 30
}, wh = "6 4", ji = 200, _h = 2, Sh = Math.SQRT2 * (Te - _h), kh = 14, Ch = 18, Ee = {
  fontSize: 11,
  below: Te + 12,
  minFontSize: 7,
  insideWidth: (Te - 6) * 2
}, It = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Ii = 1.5, Eh = 6.5, xh = 0.9, Ah = 14, Dr = { size: 8, clearance: 8 }, Ph = { fontSize: 10 }, Rh = 0.4, Mh = () => Wr(ue.netMatchAtom), Ft = { padding: 4, opacity: 0.95 }, gc = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Nh = (e) => ac(gc, e), Th = (e) => Fp(gc, e), Oh = 1.8, Di = 2 * Te + 68, Re = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Di,
  linkScoreBonus: 90,
  linkStrength: 0.45,
  // Repulsion is local rather than the width of the graph. Reaching further
  // does not move neighbours apart, it only inflates the whole layout, and a
  // graph spread over thousands of units is one that is both too small to read
  // as a whole and too crowded to read up close. `chargeDistanceMax` is what
  // holds that line, and widening it past this buys nothing measurable.
  //
  // What does move neighbours apart is the strength inside that range, and
  // collision alone is not enough of it: a ligand only ever pushed at the
  // moment its circle touches another settles hard against that contact, which
  // leaves a knot of ligands at arm's length from each other and the mappings
  // between them crossing over and running under circles they have nothing to
  // do with. Repulsion that is already firm before anything touches is what
  // spreads a crowded neighbourhood out enough to follow a line through it.
  // Past roughly this the layout stops untangling and only grows, framing every
  // ligand smaller for no clearer a picture.
  chargeStrength: -2400,
  chargeDistanceMin: 20,
  chargeDistanceMax: 900,
  centerStrength: 0.08,
  /** Holds a pair exactly `NODE_SPACING` apart, so links settle at their distance rather than against this. */
  collisionPadding: Di / 2 - Te,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Fh(e) {
  const t = N("div", Fc);
  return e.appendChild(t), {
    show(n, r, s) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${s - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function zh(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const s = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, s);
    const o = le("marker", {
      id: s,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Te + Dr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Dr.size,
      markerHeight: Dr.size,
      orient: "auto"
    });
    return o.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), s;
  };
}
function jh(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Ih(e) {
  const [t, n] = ue.netEdgeRamp.map(jh), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, i) => Math.round(o + (n[i] - o) * r)).join(",")})`;
}
const Me = _e;
function Hn(e, t) {
  return t ? Me(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function Dh(e, t, n, r, s) {
  const o = r.trim().toLowerCase(), i = n.size > 0 || o.length > 0;
  if (!i && s <= 0) return null;
  const a = /* @__PURE__ */ new Set();
  for (const l of e) {
    const d = l["gufe-key"];
    (!i || n.has(d) || o.length > 0 && Hn(l, o)) && a.add(d);
  }
  const c = /* @__PURE__ */ new Set();
  return t.forEach((l, d) => {
    (l.score ?? 0) < s || !a.has(l.from["gufe-key"]) || !a.has(l.to["gufe-key"]) || c.add(d);
  }), { nodes: a, edges: c };
}
function Lh(e) {
  const t = new lc(), n = fr("cpk"), r = Mh(), s = (b) => (e.matched().get(b) ?? []).join(","), o = (b, w) => {
    if (!t.wants(w)) return;
    const h = e.nodes[w], g = e.matched().get(w), f = h.sdf && Co(
      b,
      h.sdf,
      ji,
      Oe.layout,
      g && { atoms: g, color: r, radius: Rh },
      n
    );
    if (!f) {
      t.refused(w);
      return;
    }
    if (!fc(e.depictionGroups[w], f, ji, Sh)) {
      t.refused(w);
      return;
    }
    t.drew(w, s(w));
  }, i = () => t.forget(s, (b) => e.depictionGroups[b].replaceChildren()), a = [], c = (b, w) => {
    if (a[b]) return a[b];
    w.setAttribute("font-size", String(Ee.fontSize));
    let h = 0;
    try {
      h = w.getBBox().width;
    } catch {
      return Ee.fontSize;
    }
    if (!h) return Ee.fontSize;
    const g = Ee.fontSize * Ee.insideWidth / h;
    return a[b] = Math.max(Ee.minFontSize, Math.min(Ee.fontSize, g)), a[b];
  }, l = [], d = (b) => {
    const w = e.captionPlates[b];
    if (l[b] === Ee.below) {
      w.setAttribute("display", "inline");
      return;
    }
    let h = null;
    try {
      h = e.captions[b].getBBox();
    } catch {
      h = null;
    }
    if (!h?.width) {
      w.setAttribute("display", "none");
      return;
    }
    w.setAttribute("x", String(h.x - It.captionPadX)), w.setAttribute("y", String(h.y - It.captionPadY)), w.setAttribute("width", String(h.width + It.captionPadX * 2)), w.setAttribute("height", String(h.height + It.captionPadY * 2)), w.setAttribute("display", "inline"), l[b] = Ee.below;
  }, m = (b, w) => {
    const h = w.structure && !t.has(b) ? Th(w) : w;
    e.depictionGroups[b].setAttribute("display", h.structure ? "inline" : "none");
    const g = e.plates[b];
    g.setAttribute("display", h.structure ? "inline" : "none");
    const f = e.matched().has(b);
    g.setAttribute("stroke", f ? ue.netMatchStroke : ue.netNodeStroke);
    const k = e.circles[b];
    k.setAttribute("fill", h.disc ? f ? ue.netMatchFill : ue.netNodeFill : "none"), k.setAttribute("stroke", h.disc ? f ? ue.netMatchStroke : ue.netNodeStroke : "none"), e.initials[b].setAttribute("display", h.initials ? "inline" : "none");
    const _ = e.charges[b];
    if (_) {
      const C = !h.structure, A = Te * Ir.at;
      _.setAttribute("x", String(A)), _.setAttribute("y", String(-A)), _.setAttribute("font-size", String(C ? Ir.bigFontSize : Ir.fontSize)), _.setAttribute("font-weight", C ? ge.bold : ge.normal);
    }
    const u = e.captions[b], p = h.name === "below";
    if (u.setAttribute("fill", f ? ue.netMatchStroke : p ? ef() : ue.netNodeCaption), u.setAttribute("display", h.name === "none" ? "none" : "inline"), p || e.captionPlates[b].setAttribute("display", "none"), h.name === "none") return;
    const $ = h.name === "inside";
    u.setAttribute("y", $ ? "0" : String(Ee.below)), u.setAttribute("dominant-baseline", $ ? "middle" : "auto"), u.setAttribute("font-size", String($ ? c(b, u) : Ee.fontSize)), p && d(b);
  };
  let v = null;
  return { apply: (b, w, h) => {
    const g = Nh(b);
    v = g, e.stage.setAttribute("data-detail", g.id), e.edgeLabels.setAttribute("display", g.edgeScores ? "inline" : "none");
    for (let k = 0; k < e.nodes.length; k++) m(k, g);
    if (!g.structure) return;
    const f = dc(e.nodes, { scale: b, tx: w, ty: h }, e.viewport(), (k) => t.wants(k));
    f.length && e.rdkit().then((k) => {
      if (!(!k || v !== g))
        for (const _ of f)
          o(k, _), m(_, g);
    }).catch(() => {
    });
  }, forget: i };
}
function qh(e) {
  const t = e.score.setting;
  let n = () => {
  };
  return ic({
    namespace: "ligand-network",
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    query: e.query,
    search: {
      placeholder: "Search",
      label: "Search ligands by name, SMILES or gufe key"
    },
    // The SMARTS box sits below the search and does the opposite thing: the
    // search narrows the list, and this hides nothing at all. Asked for that way
    // on purpose - which ligands do *not* contain the scaffold is the half of
    // the answer a filter throws away.
    smarts: {
      placeholder: "Colour by SMARTS",
      label: "Colour the ligands matching this SMARTS pattern",
      describe: (r) => {
        const s = r.unreadable ? `, ${r.unreadable} could not be read` : "";
        return `${r.matched.size} of ${e.nodes.length} ligands match${s}`;
      }
    },
    match: (r) => e.match(r),
    resetFilters: () => n(),
    filters: (r) => {
      const s = N("div", `display:flex;align-items:center;gap:${ee.lg};font-size:${Q.small};color:${I.textMuted};`), o = N("span", `min-width:28px;color:${I.textPrimary};`, "0.00"), i = N("input", "flex:1;");
      i.type = "range", i.min = "0", i.max = "1", i.step = "0.01", i.setAttribute("aria-label", "Hide mappings scoring below this");
      const a = (c) => {
        i.value = String(c), o.textContent = c.toFixed(2), e.filter.minScore = c, t.set(c);
      };
      return a(t.get()), i.oninput = () => {
        a(Number(i.value)), r(), e.refresh();
      }, n = () => a(0), e.score.onReset(() => {
        n(), r(), e.refresh();
      }), s.appendChild(N("span", "", "score >=")), s.appendChild(i), s.appendChild(o), [s];
    },
    shows: (r) => Hn(r, e.query.text.trim().toLowerCase()),
    row: (r) => ({
      name: Me(r),
      title: `${Me(r)}
${r.smiles ?? ""}`
    }),
    // The threshold first, because a mapping below it is one this view is being
    // told not to show at all; then either end against the search, because a
    // search for one ligand is asking which mappings it has.
    edgeShows: (r) => {
      if ((r.score ?? 0) < e.filter.minScore) return !1;
      const s = e.query.text.trim().toLowerCase();
      return Hn(r.from, s) || Hn(r.to, s);
    },
    edgeRow: (r) => ({
      // The score before the name, where the alchemical network puts its
      // colour swatch: it is what the slider above the list acts on, and a
      // threshold with no scores in sight is a control with nothing to aim at.
      before: Bh(r.score),
      name: `${Me(r.from)} to ${Me(r.to)}`,
      title: `${Me(r.from)} to ${Me(r.to)}
${r.score == null ? "no score" : `score ${r.score.toFixed(3)}`}`
    }),
    words: {
      // Named "mappings" rather than "edges": on this canvas an edge is a
      // mapping, and the panel says so everywhere else.
      nodes: { tab: "Ligands", plural: "ligands" },
      edges: { tab: "Mappings", plural: "mappings" }
    },
    refresh: e.refresh,
    focus: e.focus,
    focusEdge: e.focusEdge
  });
}
function Bh(e) {
  return N(
    "span",
    `flex-shrink:0;min-width:26px;font-variant-numeric:tabular-nums;color:${I.textMuted2};`,
    e == null ? "--" : e.toFixed(2)
  );
}
class Vh extends Fe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), { nodes: s, edges: o, unresolved: i, dangling: a } = rc({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (K) => [K.componentA, K.componentB]
    }), c = Zn(n.name || "Ligand network");
    c.statsEl.appendChild(Ve("ligands", String(s.length))), c.statsEl.appendChild(Ve("mappings", String(o.length))), t.appendChild(c);
    const l = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const d = /* @__PURE__ */ new Set(), m = { minScore: 0 }, v = { text: "" }, y = Lt("ligand-network.minScore", 0, 0, 1);
    let b = () => {
    };
    const w = () => Aa(), h = oc(
      w,
      s.map((K) => K.sdf ?? "")
    );
    let g = /* @__PURE__ */ new Map();
    const f = async (K) => {
      const te = await h.run(K);
      return te.status === "superseded" || (g = te.status === "ok" ? te.matched : /* @__PURE__ */ new Map(), P()), te;
    }, k = Ao(
      c,
      () => qh({
        nodes: s,
        edges: o,
        selected: d,
        filter: m,
        query: v,
        score: {
          setting: y,
          onReset: (K) => {
            b = K;
          }
        },
        refresh: () => S(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (K) => {
          D?.focusOn(K), j({ kind: "ligand", index: K });
        },
        // The same for a mapping, which the pane can draw as well as a
        // ligand: the list is how a reader reaches one of nine hundred edges.
        focusEdge: (K) => {
          D?.focusOnEdge(K), j({ kind: "edge", index: K });
        },
        match: (K) => f(K)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => L(),
        remember: lt("ligand-network.menuOpen", !1),
        extras: Po
      }
    );
    l.appendChild(k.panel);
    let _ = () => {
    };
    const u = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${I.netCanvasBg};`), p = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${I.appBg};`);
    l.appendChild(u), l.appendChild(
      Ha(l, u, p, {
        min: Ot.min,
        max: Ot.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Lt("ligand-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => _(),
        onOrient: (K) => Eo(k.panel, K)
      })
    ), l.appendChild(p);
    const $ = N("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${I.netCanvasBg};`);
    u.appendChild($);
    const C = rt("ligand-network.layout", "Force-directed", Oi), A = this.#e(
      (K) => L(K),
      C,
      o.some((K) => Ci(K.from, K.to) !== 0)
    );
    u.appendChild(A.bar), Na(
      $,
      () => {
        y.set(0), m.minScore = 0, b(), D?.reset();
      },
      "Reset pan, zoom and the score filter"
    );
    const E = this.#t(p, r);
    if (!s.length)
      return $.appendChild(
        $e(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), E.message("Nothing to show."), {};
    i && dt(
      $,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && dt($, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const O = w(), R = Fh($);
    let D = null;
    const z = bh(ha(mh), s.length);
    let V = z && { scale: z.scale, tx: z.tx, ty: z.ty }, G = z ? z.nodes : null, oe = o.length ? { kind: "edge", index: 0 } : null;
    if (z && z.selected >= 0) {
      const K = z.selectedKind ?? "edge";
      z.selected < (K === "ligand" ? s.length : o.length) && (oe = { kind: K, index: z.selected });
    }
    const X = () => D?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let re = C.get(), W = !1;
    const F = co(), H = () => {
      if (!oe) {
        E.message(o.length ? gh : "Click a ligand to see it.");
        return;
      }
      oe.kind === "edge" ? E.showMapping(o[oe.index]) : E.showLigand(s[oe.index]);
    }, j = (K) => {
      oe = K, H(), D?.setSelected(oe);
    }, S = () => {
      const K = Dh(s, o, d, v.text, m.minScore);
      D?.setEmphasis(K?.nodes ?? null, K?.edges ?? null);
    }, P = () => D?.setMatches(g), L = (K = re) => {
      const te = D && K === re ? D.transform() : null;
      K !== re && (G = null);
      const Y = F.start();
      re = K, D?.cleanup(), D = null, $.querySelectorAll("svg").forEach((T) => T.remove());
      const ne = $.clientWidth || 800, M = $.clientHeight || 600;
      Uh(s, ne, M, re, o), G && vh(s, G);
      const x = () => {
        if (!Y()) return;
        const T = this.#n($, s, o, ne, M, j, O, R);
        D = T, T.setSelected(oe), S(), P();
        const q = V ?? te;
        q ? (T.setTransform(q.scale, q.tx, q.ty), V = null) : T.fit();
      };
      if (re !== "Force-directed" || W || G) {
        x();
        return;
      }
      Hh(s, o, ne, M).then((T) => {
        if (Y()) {
          if (T) {
            x();
            return;
          }
          W = !0, A.picker.value = "Circular", dt($, "d3 could not be loaded - showing the circular layout instead"), L("Circular");
        }
      }, x);
    };
    return _ = () => L(), L(), H(), {
      onResize: () => L(),
      cleanup: () => {
        F.stop(), h.cancel(), R.remove(), D?.cleanup(), D = null, E.cleanup();
      },
      viewState: () => ({
        nodes: s.map((K) => [Fi(K.x), Fi(K.y)]),
        ...X(),
        selected: oe ? oe.index : -1,
        selectedKind: oe ? oe.kind : "edge"
      })
    };
  }
  #e(t, n, r) {
    const s = N(
      "div",
      Br
    ), o = N("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${I.textMuted};`);
    if (o.appendChild(N("span", "", "score")), o.appendChild(
      N(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${ue.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(N("span", "", "0 -> 1")), s.appendChild(o), r) {
      const a = N("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${I.textMuted};`);
      a.appendChild(
        N(
          "span",
          `width:24px;height:0;border-top:2px dashed ${I.netEdgeLine};display:inline-block;`
        )
      ), a.appendChild(N("span", "", "net charge change")), s.appendChild(a);
    }
    s.appendChild(N("label", `font-size:${Q.body};margin-left:auto;color:${I.textMuted};`, "Layout"));
    const i = ir(
      Oi.map((a) => ({ id: a, label: a })),
      n.get(),
      (a) => t(a),
      n
    );
    return s.appendChild(i), { bar: s, picker: i };
  }
  /**
   * The right-hand pane, and what this view puts in it.
   *
   * The pane itself is `detailPane`, shared with the alchemical network. What is
   * here is the one thing that is this view's: an edge is a mapping, so it opens
   * `<gufe-atom-mapping>`; a node is one ligand, so it opens
   * `<gufe-small-molecule>` - and both have to be cut loose from the network
   * first, because an edge carries this view's index and both endpoints
   * resolved, a node carries wherever the layout put it, and a payload handed on
   * is a payload someone may validate.
   *
   * Neither picture is drawn twice, so the in-context one and the standalone one
   * cannot drift apart, and clicking either half of the graph puts the reader in
   * front of a view they have already met.
   */
  #t(t, n) {
    const r = uc(t);
    return {
      ...r,
      showMapping: (s) => r.show(mc(yh(s), n)),
      showLigand: (s) => r.show($h(s))
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, r, s, o, i, a, c) {
    const l = le("svg", {
      class: "gufe-graph",
      width: s,
      height: o,
      style: "display:block;touch-action:none;"
    }), d = le("g");
    l.appendChild(d), t.appendChild(l);
    const m = le("defs"), v = zh(m);
    l.appendChild(m);
    const y = [], b = le("g"), w = le("g"), h = le("g", { "pointer-events": "none" }), g = le("g");
    d.append(b, w, h, g);
    for (const V of r) {
      const G = Ih(V.score), oe = Ii + (V.score ?? 0.5) * (Eh - Ii), X = le("line", {
        stroke: ue.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": oe + Ft.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), re = Ci(V.from, V.to), W = le("line", {
        stroke: G,
        "stroke-width": oe,
        "stroke-opacity": xh,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${v(G)})`,
        "pointer-events": "none",
        ...re ? { "stroke-dasharray": wh } : {}
      }), F = le("line", { stroke: "transparent", "stroke-width": Ah, style: "cursor:pointer;" });
      F.addEventListener("click", (S) => {
        S.stopPropagation(), i({ kind: "edge", index: V.index });
      }), F.addEventListener("mousemove", (S) => {
        c.show(
          `<div style="font-weight:700;color:${I.titleColor};">${Ie(Me(V.from))} -&gt; ${Ie(Me(V.to))}</div>` + (V.score == null ? `<div style="color:${I.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${V.score.toFixed(3)}</b></div>`) + (re ? `<div style="margin-top:4px;">net charge <b>${Ie(ct(re))}</b> <span style="color:${I.textMuted2};">(${Ie(ct(V.from.total_charge ?? 0))} to ${Ie(ct(V.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Q.tiny};color:${I.textMuted2};">Click to see the mapping</div>`,
          S.offsetX,
          S.offsetY
        );
      }), F.addEventListener("mouseleave", () => c.hide()), y.push(X), b.append(X, W), w.appendChild(F);
      const H = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ph.fontSize,
        "font-weight": 600,
        fill: ue.netEdgeLabel
      });
      H.textContent = V.score == null ? "" : V.score.toFixed(2);
      const j = le("g", { class: "gufe-edge-label" });
      j.appendChild(H), h.appendChild(j);
    }
    const f = [], k = [], _ = [], u = [], p = [], $ = [], C = [], A = [], E = n.map((V) => {
      const G = le("g", { class: "gufe-node", style: "cursor:grab;" });
      G.addEventListener("mousemove", (S) => {
        c.show(
          `<div style="font-weight:700;color:${I.titleColor};">${Ie(Me(V))}</div>` + (V.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ie(V.smiles)}</div>` : "") + (V.total_charge ? `<div style="margin-top:3px;">formal charge <b>${Ie(ct(V.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${I.textMuted2};overflow-wrap:anywhere;">${Ie(V["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${I.textMuted2};">Click to see the ligand</div>`,
          S.offsetX,
          S.offsetY
        );
      }), G.addEventListener("mouseleave", () => c.hide());
      const oe = le("circle", {
        class: "gufe-node-halo",
        r: Te + Ft.padding,
        fill: "none",
        stroke: ue.netHaloColor,
        "stroke-width": Ft.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      G.appendChild(oe), p.push(oe);
      const X = le("circle", {
        class: "gufe-node-disc",
        r: Te,
        fill: ue.netNodeFill,
        stroke: ue.netNodeStroke,
        "stroke-width": zi,
        "pointer-events": "all"
      });
      G.appendChild(X), k.push(X);
      const re = le("circle", {
        class: "gufe-node-plate",
        r: Te,
        fill: Gr(),
        stroke: ue.netNodeStroke,
        "stroke-width": zi,
        display: "none",
        "pointer-events": "none"
      });
      G.appendChild(re), _.push(re);
      const W = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      G.appendChild(W), f.push(W);
      const F = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ch,
        "font-weight": 700,
        fill: ue.netInitials,
        "pointer-events": "none"
      });
      if (F.textContent = Me(V).slice(0, 2).toUpperCase(), G.appendChild(F), $.push(F), V.total_charge) {
        const S = le("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: ue.badgeFg,
          "pointer-events": "none"
        });
        S.textContent = ct(V.total_charge), G.appendChild(S), A.push(S);
      } else
        A.push(null);
      const H = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Ee.below,
        "font-size": Ee.fontSize,
        "font-weight": 600,
        fill: ue.netNodeCaption,
        "pointer-events": "none"
      });
      H.textContent = Un(Me(V), kh), H.setAttribute("display", "none"), C.push(H);
      const j = le("rect", {
        class: "gufe-node-caption-plate",
        rx: It.captionRadius,
        fill: Gr(),
        display: "none",
        "pointer-events": "none"
      });
      return u.push(j), G.appendChild(j), G.appendChild(H), g.appendChild(G), G;
    }), O = () => {
      r.forEach((V, G) => {
        for (const X of [y[G], b.children[G * 2 + 1], w.children[G]]) {
          const re = X;
          re.setAttribute("x1", String(V.from.x)), re.setAttribute("y1", String(V.from.y)), re.setAttribute("x2", String(V.to.x)), re.setAttribute("y2", String(V.to.y));
        }
        h.children[G].setAttribute(
          "transform",
          `translate(${(V.from.x + V.to.x) / 2},${(V.from.y + V.to.y) / 2 - 8})`
        );
      }), n.forEach((V, G) => E[G].setAttribute("transform", `translate(${V.x},${V.y})`));
    };
    O();
    let R = /* @__PURE__ */ new Map();
    const D = Lh({
      nodes: n,
      circles: k,
      plates: _,
      captionPlates: u,
      matched: () => R,
      captions: C,
      initials: $,
      charges: A,
      depictionGroups: f,
      edgeLabels: h,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: s, height: o })
    }), z = this.#r(
      l,
      d,
      n,
      E,
      O,
      D.apply,
      (V) => i({ kind: "ligand", index: V })
    );
    return {
      setSelected(V) {
        const G = V?.kind === "edge" ? V.index : -1, oe = V?.kind === "ligand" ? V.index : -1;
        y.forEach((X, re) => X.setAttribute("opacity", re === G ? String(Ft.opacity) : "0")), p.forEach((X, re) => X.setAttribute("opacity", re === oe ? String(Ft.opacity) : "0"));
      },
      /**
       * Colour the ligands a SMARTS pattern matched.
       *
       * Colour rather than filter, and deliberately a different channel from
       * `setEmphasis`: dimming answers "which ones did I ask for", colouring
       * answers "which ones contain this" - and the whole point of the second
       * question is seeing the ones that do not. So the two compose, and
       * neither hides anything.
       */
      setMatches(V) {
        R = V, D.forget();
        const { scale: G, tx: oe, ty: X } = z.transform();
        D.apply(G, oe, X);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(V, G) {
        E.forEach((oe, X) => {
          const re = !V || V.has(n[X]["gufe-key"]);
          oe.setAttribute("opacity", re ? "1" : String(Dt.node));
        }), r.forEach((oe, X) => {
          const re = !G || G.has(X), W = re ? "0.9" : String(Dt.edge);
          b.children[X * 2 + 1].setAttribute("stroke-opacity", W), h.children[X].setAttribute("opacity", re ? "1" : String(Dt.edge));
        });
      },
      focusOn(V) {
        const G = n[V];
        G && z.centreOn(G.x, G.y);
      },
      focusOnEdge(V) {
        const G = r[V];
        G && z.centreOn((G.from.x + G.to.x) / 2, (G.from.y + G.to.y) / 2);
      },
      fit: z.fit,
      reset: z.reset,
      transform: z.transform,
      setTransform: z.setTransform,
      cleanup: z.cleanup
    };
  }
  /**
   * The camera this view moves on, with its nodes made draggable.
   *
   * The camera - wheel zoom, background pan, framing - is `sceneCamera`; the
   * drag and the click-versus-drag rule are `draggableNodes`. Both are shared
   * with the alchemical network. What is left here is the two things that are
   * about a *ligand* network rather than about a canvas: how far a node reaches
   * from its position, and how close `focus` lands.
   */
  #r(t, n, r, s, o, i, a) {
    const c = Qa(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Za(r, Te),
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return cc(s, r, c, { moved: () => o(), clicked: a }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (l, d) => c.centreOn(l, d, Oh)
    };
  }
}
function Uh(e, t, n, r, s) {
  const o = t / 2, i = n / 2, a = (c, l) => {
    c.forEach((d, m) => {
      const v = 2 * Math.PI * m / Math.max(1, c.length) - Math.PI / 2;
      d.x = o + l * Math.cos(v), d.y = i + l * Math.sin(v), d.fx = r === "Force-directed" ? void 0 : d.x, d.fy = r === "Force-directed" ? void 0 : d.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of s)
      c.get(w.from["gufe-key"]).push(w.to["gufe-key"]), c.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const l = new Map(e.map((w) => [w["gufe-key"], w])), d = e.reduce(
      (w, h) => c.get(h["gufe-key"]).length > c.get(w["gufe-key"]).length ? h : w
    ), m = /* @__PURE__ */ new Set([d["gufe-key"]]);
    let v = [d["gufe-key"]], y = 0;
    const b = Math.min(t, n) * 0.18;
    for (; v.length; ) {
      a(
        v.map((h) => l.get(h)),
        y === 0 ? 0 : y * b + 40
      );
      const w = [];
      for (const h of v)
        for (const g of c.get(h))
          m.has(g) || (m.add(g), w.push(g));
      v = w, y++;
    }
    a(e.filter((w) => !m.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function Hh(e, t, n, r) {
  return tc({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((s) => ({
      source: s.from["gufe-key"],
      target: s.to["gufe-key"],
      score: s.score
    })),
    tickMultiplier: Re.tickMultiplier,
    forces: (s, o) => [
      [
        "link",
        s.forceLink(o).id((i) => i["gufe-key"]).distance((i) => Re.linkBaseDistance + (1 - (i.score ?? 0.5)) * Re.linkScoreBonus).strength(Re.linkStrength)
      ],
      [
        "charge",
        s.forceManyBody().strength(Re.chargeStrength).distanceMin(Re.chargeDistanceMin).distanceMax(Re.chargeDistanceMax)
      ],
      ["center", s.forceCenter(n / 2, r / 2).strength(Re.centerStrength)],
      ["collision", s.forceCollide(Te + Re.collisionPadding).iterations(Re.collisionIterations)],
      ["x", s.forceX(n / 2).strength(Re.drift)],
      ["y", s.forceY(r / 2).strength(Re.drift)]
    ]
  });
}
ze("gufe-ligand-network", Vh);
function Mo(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const s = Ne(t, r);
    if (!s) {
      n.add("missing");
      continue;
    }
    n.add(
      s.type === "UnknownComponentViz" ? s.gufe_type : s.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort();
}
const Xn = (e, t) => Mo(e, t).join(" + "), Li = ["Protein", "ProteinMembrane", "SolvatedPDB"];
function Kh(e) {
  const t = e.split(" + ").filter(Boolean);
  return t.filter((r) => r !== "SmallMolecule" && r !== "Solvent" && !Li.includes(r)).length ? e : t.some((r) => Li.includes(r)) ? "complex" : t.some((r) => r === "Solvent") ? "solvent" : "vacuum";
}
function yc(e) {
  const t = e.map(Kh), n = /* @__PURE__ */ new Map();
  for (const r of t) n.set(r, (n.get(r) ?? 0) + 1);
  return t.map((r, s) => n.get(r) > 1 ? e[s] : r);
}
function Gh(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of [e.stateA, e.stateB]) {
    const s = r === void 0 ? null : ke(t, r, "ChemicalSystemViz");
    if (s)
      for (const o of Mo(s, t)) n.add(o);
  }
  return [...n].sort().join(" + ");
}
function Wh(e, t) {
  const n = e.map((o) => Gh(o, t)), r = [...new Set(n)].sort(
    (o, i) => o.split(" + ").length - i.split(" + ").length || o.localeCompare(i)
  ), s = new Map(r.map((o, i) => [o, i]));
  return { signatures: r, names: yc(r), ofEdge: n.map((o) => s.get(o)) };
}
function $c(e, t) {
  const n = Object.values(e.components ?? {}).filter(
    (r) => ke(t, r, "SmallMoleculeComponentViz")
  );
  return [...new Set(n)].sort();
}
function bc(e, t) {
  const n = yc(e), r = /* @__PURE__ */ new Map();
  for (const s of n) r.set(s, (r.get(s) ?? 0) + 1);
  return n.map((s, o) => r.get(s) > 1 ? t[o] : s);
}
function Jh(e, t) {
  return bc(
    e.map((n) => Xn(n, t)),
    e.map((n) => _e(n))
  );
}
function vc(e) {
  let t = e[0] ?? "";
  for (const n of e.slice(1)) {
    let r = 0;
    for (; r < t.length && r < n.length && t[r] === n[r]; ) r++;
    t = t.slice(0, r);
  }
  return t = t.replace(/[\s_\-.:,;([{]+$/, ""), t.length >= 3 ? t : "";
}
function Yh(e, t) {
  if (e.length === 1) return e[0].name;
  const n = $c(e[0], t);
  if (n.length === 1) {
    const r = Ne(t, n[0]);
    if (r) return _e(r);
  }
  return vc(e.map((r) => _e(r))) || e[0].name;
}
function Xh(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = [];
  for (const o of e) {
    const i = $c(o, t), a = i.length ? i.join("+") : o["gufe-key"], c = r.get(a);
    if (c) {
      c.push(o);
      continue;
    }
    r.set(a, [o]), s.push(a);
  }
  return s.map((o) => {
    const a = r.get(o).map((c, l) => ({ system: c, index: l, rank: n(c) })).sort((c, l) => c.rank - l.rank || c.index - l.index).map(({ system: c }) => c);
    return {
      "gufe-key": a[0]["gufe-key"],
      name: Yh(a, t),
      systems: a,
      legs: Jh(a, t)
    };
  });
}
function Zh(e) {
  if (e.systems.length === 1) return e.systems[0];
  const t = {}, n = /* @__PURE__ */ new Map();
  return e.systems.forEach((r, s) => {
    for (const [o, i] of Object.entries(r.components ?? {})) {
      const a = n.get(o);
      if (a === void 0) {
        n.set(o, { key: i, at: s }), t[o] = i;
        continue;
      }
      a.key !== i && (o in t && (t[`${o} (${e.legs[a.at]})`] = a.key, delete t[o]), t[`${o} (${e.legs[s]})`] = i);
    }
  }), {
    type: "ChemicalSystemViz",
    "gufe-key": e["gufe-key"],
    name: _e(e),
    components: t
  };
}
const Qh = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function wc(e, t) {
  const n = [], r = [];
  for (const s of Object.values(e.components ?? {})) {
    const o = Ne(t, s);
    o && (Qh.includes(o.type) ? n.push(o) : o.type === "SmallMoleculeComponentViz" && r.push(o));
  }
  return { structures: n, ligands: r };
}
function em(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const qi = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], tm = 0.4;
class nm extends Fe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = wc(n, Et(n)), s = r.structures.map((y, b) => b), o = r.ligands.map((y, b) => r.structures.length + b), i = rt(
      "complex.focus",
      "site",
      qi.map((y) => y.id)
    );
    let a = i.get(), c = null;
    const l = Ja({
      element: this,
      host: t,
      title: n.name ?? "",
      fallbackTitle: "Complex",
      // The exception the protein view makes for its own reason and this one
      // makes for another: in a complex the waters sit between the eye and the
      // site.
      waters: !1,
      // The complex opens on the surface: what a reader wants from this pane is
      // the shape of the pocket the ligand sits in, which a backbone ribbon does
      // not show. The protein view, where the structure is the subject, still
      // opens on the cartoon.
      rep: "surface",
      heteroTitle: "Show hetero atoms / ions / lipids in the structure",
      menuLabel: "Representation, colouring, framing and display options",
      // The structure's key, not this system's: every leg of a campaign is a
      // different chemical system holding the same protein, and the camera
      // belongs to the protein. So clicking along the legs keeps the site in
      // front of the reader instead of re-framing on each one.
      cameraKey: r.structures[0]?.["gufe-key"] ?? null,
      restyle: d,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () => [
        Ct(
          qi,
          a,
          (y) => {
            a = y, m();
          },
          i
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => m()
    });
    function d() {
      const y = l.viewer();
      y && (Zr(y, l.opts, c, l.showStatus, { model: s }, l.stillWanted), tp(y, { model: o }), y.render());
    }
    function m() {
      const y = l.viewer();
      y && (a === "site" && o.length ? (y.zoomTo({ model: o }), y.zoom(tm)) : y.zoomTo(), y.render(), v());
    }
    function v() {
      const y = l.viewer();
      y && (l.interaction()?.cleanup(), l.setInteraction(dr(l.pane.container, y)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(Bi(r, () => c));
    try {
      c = Ba(r.structures[0].pdb), l.setStats(Bi(r, () => c));
    } catch (y) {
      l.showStatus(`PDB parse error: ${ve(y)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), lr().then(() => {
      const y = nt.createViewer(l.pane.container, { backgroundColor: qt.viewer() });
      l.setViewer(y);
      for (const b of r.structures) y.addModel(b.pdb, "pdb");
      for (const b of r.ligands) y.addModel(Da(b.sdf), "sdf");
      d(), l.restoreCamera() ? v() : m(), y.spin(l.opts.spin ? "y" : !1), y.render();
    }).catch((y) => {
      l.showStatus(`Failed to render structure: ${ve(y)}`, "error");
    }), l.handle;
  }
}
function Bi(e, t) {
  const n = e.ligands.reduce((o, i) => {
    const a = ko(i.sdf);
    return a ? o + a.atoms : o;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, s = t();
  return s ? [r, ...Va(s)] : [r];
}
ze("gufe-complex", nm);
function rm(e, t) {
  return {
    ...e,
    registry: Ro(t, Object.values(e.components ?? {}))
  };
}
const om = "chemical-system.component", Vi = 200, Bn = { min: 140, max: 420 }, sm = "45%", im = "35%";
function am(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function cm(e) {
  return e.type === "UnknownComponentViz" ? Qn(e.gufe_type) : null;
}
function Ui(e) {
  return N(
    "div",
    `padding:10px 10px 16px;font-weight:${ge.bold};font-size:${Q.title};color:${I.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class lm extends Fe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Et(n), s = [], o = [];
    for (const [E, O] of Object.entries(n.components ?? {})) {
      const R = Ne(r, O);
      R ? s.push([E, R]) : o.push(E);
    }
    const i = n.name || "Chemical system";
    if (!s.length)
      return t.appendChild(Ui(i)), t.appendChild(
        $e(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = N(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), o.length && dt(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const c = N(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${I.panelBg};`
    );
    a.appendChild(c), c.appendChild(Ui(i));
    const l = N(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(l);
    const d = Ka(c, {
      initial: Vi,
      min: Bn.min,
      max: Bn.max,
      maxShare: sm,
      remember: Lt("chemical-system.stripWidth", Vi, Bn.min, Bn.max),
      label: "Resize the component list",
      // What is mounted was drawn to the old shape, and a 3D viewer sizes its
      // canvas once.
      onResize: () => f?.resize?.()
    });
    a.appendChild(d.element);
    const m = N(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(m);
    const v = N(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    m.appendChild(v);
    const y = document.createElement("alchemy-view");
    y.style.cssText = "flex:1;min-width:0;min-height:0;", y.setAttribute(Ur, ""), v.appendChild(y);
    const b = wc(n, r), w = em(b), h = (E) => w && b.structures.some(
      (O) => O === E
    ), g = s.filter(([, E]) => !h(E)).map(([E, O]) => ({
      key: E,
      title: E,
      subtitle: am(O),
      badge: cm(O),
      element: y,
      point: () => {
        y.payload = O;
      }
    }));
    if (w) {
      const E = document.createElement("gufe-complex");
      E.style.cssText = "flex:1;min-width:0;min-height:0;", E.setAttribute(Ur, ""), E.payload = n, g.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${b.ligands.length === 1 ? b.ligands[0].name || "ligand" : "ligands"} in ${b.structures[0].name || "structure"}`,
        badge: null,
        element: E,
        point: () => {
        }
      });
    }
    let f = null;
    const k = (E) => {
      f !== E && (v.replaceChildren(E), f = E);
    }, _ = Kr(om), u = [], p = (E) => {
      u.forEach((O, R) => O.setAttribute("aria-pressed", String(R === E))), g[E].point(), k(g[E].element);
    }, $ = (E) => {
      _.set(g[E].key), p(E);
    };
    g.forEach((E, O) => {
      const R = sr(`${so.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      R.appendChild(
        N("span", `font-weight:700;color:${I.textPrimary};`, E.title)
      ), R.appendChild(
        N(
          "span",
          `font-size:${Q.small};color:${I.textMuted};`,
          E.subtitle
        )
      ), E.badge && R.appendChild(E.badge), R.onclick = () => $(O), u.push(R), l.appendChild(R);
    });
    const C = g.findIndex((E) => E.key === _.get());
    p(C < 0 ? 0 : C);
    const A = no(a, (E) => {
      a.style.flexDirection = E ? "column" : "row", d.orient(E), c.style.maxHeight = E ? im : "none", c.style.borderBottom = E ? `1px solid ${I.splitBorder}` : "none", l.style.flexDirection = E ? "row" : "column", l.style.flexWrap = E ? "wrap" : "nowrap", f?.resize?.();
    });
    return {
      onResize: () => f?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        A(), f?.remove();
      }
    };
  }
}
ze("gufe-chemical-system", lm);
const Hi = 210, dm = "42%", Vn = { min: 150, max: 460 };
function um(e, t) {
  const n = ke(t, e.stateA, "ChemicalSystemViz"), r = ke(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const s = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) s.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) s.push(o.componentA, o.componentB);
  return { ...e, registry: Ro(t, s) };
}
const No = {
  unchanged: I.diffUnchanged,
  changed: I.diffChanged,
  added: I.diffAdded,
  removed: I.diffRemoved
};
function Ki(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function fm(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function pm(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Lr(e, t, n) {
  const r = N(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${ee.md};padding:5px ${ee.lg};border-radius:${Pe.md};background:${I.cardBg};border:1px solid ${I.cardBorder};`
  );
  n && r.appendChild(
    N(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;color:${I.textMuted2};`,
      n
    )
  );
  const s = pm(e);
  if (!s)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(N("span", `font-size:${Q.body};color:${I.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? I.cardBorder : No[t];
  const o = N(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${I.textPrimary};overflow-wrap:anywhere;`,
    s.name
  );
  return o.title = s.name, r.appendChild(o), s.type && r.appendChild(Qn(s.type)), r;
}
function hm(e, t, n, r) {
  const s = N("div", `display:flex;flex-direction:column;gap:${ee.sm};min-width:0;`), o = N("div", `display:flex;align-items:center;gap:${ee.md};min-width:0;`);
  o.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${No[t]};`)
  );
  const i = N(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${ge.bold};color:${I.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return i.title = t, o.appendChild(i), s.appendChild(o), t === "unchanged" ? (s.appendChild(Lr(n, t, null)), s) : (s.appendChild(Lr(n, t, "A")), s.appendChild(Lr(r, t, "B")), s);
}
function mm(e, t) {
  const n = N(
    "div",
    `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${I.toolbarBg};border-bottom:1px solid ${I.toolbarBorder};color:${I.textMuted};`
  );
  return n.appendChild(Ct(e, e[0].id, (r) => t(Number(r)))), n;
}
const gm = (e) => e.side ? `${e.label} (${e.side})` : e.label;
function ym(e, t) {
  const n = Ne(t, e.componentA), r = Ne(t, e.componentB);
  return `${n ? _e(n) : "A"} to ${r ? _e(r) : "B"}`;
}
function Gi(e) {
  return N(
    "div",
    `font-weight:${ge.bold};font-size:${Q.heading};color:${I.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Wi(e, t) {
  const n = N("div", `display:flex;align-items:baseline;gap:${ee.md};min-width:0;font-size:${Q.small};`);
  return n.appendChild(N("span", `flex:0 0 auto;color:${I.textMuted};`, e)), n.appendChild(
    N("span", `min-width:0;font-weight:${ge.bold};color:${I.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class $m extends Fe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Et(n), s = ke(r, n.stateA, "ChemicalSystemViz"), o = ke(r, n.stateB, "ChemicalSystemViz"), i = ke(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!s || !o) {
      const p = N("div", "padding:12px 14px;flex-shrink:0;");
      return p.appendChild(Gi(c)), t.appendChild(p), t.appendChild(
        $e("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = fm(s, o), d = N("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(d);
    const m = N(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${I.panelBg};`
    );
    d.appendChild(m);
    let v = null;
    const y = Ka(m, {
      initial: Hi,
      min: Vn.min,
      max: Vn.max,
      maxShare: dm,
      remember: Lt("transformation.statesWidth", Hi, Vn.min, Vn.max),
      label: "Resize the state diff",
      // The mapping is two 3D viewers, and a viewer sizes its canvas once.
      onResize: () => v?.resize?.()
    });
    d.appendChild(y.element);
    const b = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    d.appendChild(b);
    const w = N("div", `display:flex;flex-direction:column;gap:${ee.md};min-width:0;`);
    w.appendChild(Gi(c)), w.appendChild(Wi("protocol", i ? nc(i) : Qe)), w.appendChild(Wi("mappings", String(a.length))), m.appendChild(w);
    const h = N("div", `display:flex;flex-direction:column;gap:${ee.xs};`);
    for (const [p, $] of [
      ["State A", s],
      ["State B", o]
    ])
      h.appendChild(
        N(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.06em;text-transform:uppercase;color:${I.textMuted2};overflow-wrap:anywhere;`,
          `${p}${$.name ? ` - ${$.name}` : ""}`
        )
      );
    m.appendChild(h);
    const g = /* @__PURE__ */ new Set();
    for (const p of l) {
      const $ = s.components?.[p], C = o.components?.[p], A = Ki($, C);
      g.add(A), m.appendChild(
        hm(
          p,
          A,
          Ne(r, $),
          Ne(r, C)
        )
      );
    }
    if (g.size > 1) {
      const p = N(
        "div",
        `display:flex;flex-wrap:wrap;gap:${ee.lg} 12px;padding-top:${ee.sm};font-size:${Q.small};color:${I.textMuted};`
      );
      for (const $ of ["unchanged", "changed", "added", "removed"])
        g.has($) && p.appendChild(Ve($, "", No[$]));
      m.appendChild(p);
    }
    const f = N("div", Rc, a.length ? "Atom mapping" : "What changes");
    b.appendChild(f);
    const k = no(t, (p) => {
      d.style.flexDirection = p ? "column" : "row", y.orient(p), m.style.maxHeight = p ? "45%" : "none", m.style.borderBottom = p ? `1px solid ${I.splitBorder}` : "none", f.style.display = p ? "block" : "none";
    }), _ = (p, $, C) => (C(0), $.length > 1 && b.appendChild(mm($, C)), b.appendChild(p), v = p, {
      onResize: () => p.resize?.(),
      cleanup: () => {
        k(), p.remove();
      }
    });
    if (!a.length) {
      const p = [];
      for (const C of l) {
        const A = s.components?.[C], E = o.components?.[C];
        if (Ki(A, E) === "unchanged") continue;
        const O = A !== void 0 && E !== void 0, R = Ne(r, A), D = Ne(r, E);
        R && p.push({ label: C, side: O ? "A" : null, component: R }), D && p.push({ label: C, side: O ? "B" : null, component: D });
      }
      if (!p.length)
        return b.appendChild(
          $e(
            "This transformation carries no atom mapping, and its two states hold the same components - there is nothing here to draw."
          )
        ), { cleanup: k };
      const $ = document.createElement("alchemy-view");
      return $.style.cssText = "flex:1;min-height:0;min-width:0;", _(
        $,
        p.map((C, A) => ({ id: String(A), label: gm(C) })),
        (C) => {
          $.payload = p[C].component;
        }
      );
    }
    const u = document.createElement("gufe-atom-mapping");
    return u.style.cssText = "flex:1;min-height:0;min-width:0;", _(
      u,
      a.map((p, $) => ({
        id: String($),
        label: p.name || ym(p, r)
      })),
      // Cut loose with a registry of its own, so the embedded element resolves
      // its endpoints exactly as it would if the mapping were the whole payload.
      (p) => {
        u.payload = mc(a[p], r);
      }
    );
  }
}
ze("gufe-transformation", $m);
const bm = () => ({ fill: ue.netNodeFill, stroke: ue.netNodeStroke }), ut = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Ji = (e) => e ? ut.depictedHeight : ut.height, qe = { pad: 6, size: 122, radius: 6, inset: 4 }, Yi = 200, zt = {
  /** How far in from the box's top corner the charge is written. */
  inset: 22,
  fontSize: 26,
  /**
   * The charge on the zooms that draw no ligand: bigger, and across the upper
   * part of the box rather than in its corner.
   *
   * Out there a box is a rectangle with a name in it, and the charge is the
   * only other thing this view still knows about the system. At the corner size
   * it would be a mark on a block; this is the second thing a reader can still
   * make out. `bigAt` is a fraction of the box's height and keeps it off the
   * two lines of writing, which sit in the middle once there is no picture for
   * them to sit under.
   */
  bigAt: 0.28,
  bigFontSize: 64
}, vm = "6 4", Ge = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, wm = 7, _m = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Sm = (e) => ac(_m, e), St = {
  width: 2,
  selectedWidth: 3.5,
  min: 1,
  hit: 20,
  rail: 5,
  /**
   * What the protocol lens multiplies a line's weight by.
   *
   * A multiplier rather than a width of its own, so a lens line doubles whatever
   * the zoom and the selection had already settled on: the lens has to read at
   * every distance, and a fixed weight would be the whole canvas up close and a
   * hairline on a campaign framed at a third.
   */
  lensScale: 2
}, km = (e) => St.rail / 2 / Math.max(e, 1e-3), Xi = (e, t) => {
  const n = t ? St.selectedWidth : St.width;
  return Math.max(St.min, Math.min(n, n * e));
}, qr = { width: 3, selectedWidth: 4.5, min: 1.25 }, Zi = (e, t) => {
  const n = t ? qr.selectedWidth : qr.width;
  return Math.max(qr.min, Math.min(n, n * e));
}, at = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -3600,
  /** Repulsion is local. Past this, boxes are already out of each other's way. */
  chargeDistanceMax: 1200,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, jt = { initial: 0.56, min: 0.25, max: 0.78 }, Qi = { x: ut.width / 2, y: ut.depictedHeight / 2 }, ea = 1.4;
function Cm(e, t, n, r, s, o) {
  const i = s.trim().toLowerCase();
  if (!r.size && !i && o === null) return null;
  const a = i.length > 0 || o !== null, c = /* @__PURE__ */ new Set();
  e.forEach((d, m) => {
    const v = a && (!i || n[m].includes(i)) && (!o || o.has(m));
    (r.has(d["gufe-key"]) || v) && c.add(d["gufe-key"]);
  });
  const l = /* @__PURE__ */ new Set();
  return t.forEach((d, m) => {
    c.has(d.from["gufe-key"]) && c.has(d.to["gufe-key"]) && l.add(m);
  }), { nodes: c, edges: l };
}
const tt = _e;
function Em(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, s] of Object.entries(e.components ?? {})) {
    n.push(r);
    const o = Ne(t, s);
    if (!o) continue;
    n.push(_e(o), o["gufe-key"]);
    const i = o.smiles;
    i && n.push(i);
  }
  return n.join(" ").toLowerCase();
}
function xm(e, t) {
  return [tt(e), ...e.systems.map((r) => Em(r, t))].join(" ").toLowerCase();
}
function Am(e, t) {
  const n = [], r = [], s = /* @__PURE__ */ new Map(), o = e.map((i) => {
    const a = /* @__PURE__ */ new Set();
    for (const c of i.systems)
      for (const l of Object.values(c.components ?? {})) {
        const d = ke(t, l, "SmallMoleculeComponentViz");
        if (!d) continue;
        let m = s.get(l);
        m === void 0 && (m = n.length, s.set(l, m), n.push(d.sdf ?? ""), r.push(d.total_charge ?? 0)), a.add(m);
      }
    return [...a];
  });
  return { sources: n, charges: r, perNode: o };
}
function Pm(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((s) => s !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function Rm(e, t, n, r) {
  if (e.systems.length > 1) {
    const s = e.legs.join(", ");
    return { composition: s, besides: s };
  }
  return { composition: t.join(" + "), besides: Pm(t, n, r) };
}
function Mm(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = [];
  return e.forEach((o, i) => {
    const a = t.get(o.from["gufe-key"]), c = t.get(o.to["gufe-key"]), l = [a["gufe-key"], c["gufe-key"]].sort().join(" "), d = r.get(l);
    if (d) {
      d.at.push(i);
      return;
    }
    r.set(l, { from: a, to: c, at: [i] }), s.push(l);
  }), s.map((o, i) => {
    const { from: a, to: c, at: l } = r.get(o), d = [...l].sort((b, w) => n.ofEdge[b] - n.ofEdge[w] || b - w), m = d.map((b) => {
      const { index: w, from: h, to: g, ...f } = e[b];
      return f;
    }), v = m.map((b) => _e(b)), y = bc(
      d.map((b) => n.signatures[n.ofEdge[b]]),
      v
    );
    return { index: i, from: a, to: c, legs: m, labels: y, name: vc(v) || v[0] };
  });
}
function Nm(e, t) {
  if (e.systems.length === 1) return `${tt(e)} - ${Xn(e.systems[0], t)}`;
  const n = e.systems.map(
    (r, s) => `${e.legs[s]}: ${_e(r)} - ${Xn(r, t)}`
  );
  return [tt(e), ...n].join(`
`);
}
function Tm(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e) {
    const i = ke(t, o.protocol, "ProtocolViz");
    if (!i) continue;
    const a = n.get(i["gufe-key"]);
    if (a) {
      a.count++;
      continue;
    }
    n.set(i["gufe-key"], {
      protocol: i,
      label: nc(i),
      count: 1,
      // Assigned below, once the entries are in the order they are read in.
      color: ue.netEdgeLine
    });
  }
  const r = [...n.values()], s = /* @__PURE__ */ new Map();
  for (const o of r) s.set(o.label, (s.get(o.label) ?? 0) + 1);
  for (const o of r)
    (s.get(o.label) ?? 0) > 1 && (o.label = `${o.label} ${_e(o.protocol)}`);
  return r.sort((o, i) => o.label < i.label ? -1 : o.label > i.label ? 1 : 0), r.forEach((o, i) => {
    o.color = ue.netGroupStroke[i % ue.netGroupStroke.length];
  }), r;
}
function Om(e) {
  const t = Ve("protocol", e.label);
  return t.title = `${e.label} - ${_c(e.count)}`, t;
}
function Fm(e, t) {
  const n = N("div", `display:inline-flex;align-items:center;flex-wrap:wrap;gap:${ee.xs};`);
  n.className = "gufe-protocols", n.appendChild(N("span", "", "protocols"));
  let r = null;
  const s = e.map((i) => {
    const a = sr(`${Ae.plain}${Ae.button}gap:5px;`, Ae.className);
    return a.setAttribute("aria-pressed", "false"), a.appendChild(
      N("span", `width:8px;height:8px;border-radius:50%;background:${i.color};flex-shrink:0;`)
    ), a.appendChild(N("b", `color:${xe.primary};`, i.label)), a.title = `${i.label} - ${_c(i.count)}`, a;
  }), o = () => {
    e.forEach((i, a) => {
      const c = r === i;
      s[a].setAttribute("aria-pressed", c ? "true" : "false"), s[a].style.borderColor = c ? i.color : Ae.restBorder;
    }), t(r);
  };
  return e.forEach((i, a) => {
    s[a].onclick = () => {
      r = r === i ? null : i, o();
    }, n.appendChild(s[a]);
  }), n;
}
function zm(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    for (const s of n.legs) {
      const o = t.get(s.protocol) ?? /* @__PURE__ */ new Set();
      o.add(r), t.set(s.protocol, o);
    }
  }), t;
}
function _c(e) {
  return `${e} transformation${e === 1 ? "" : "s"}`;
}
function jm(e) {
  const t = new Map(e.nodes.map((s, o) => [s["gufe-key"], o])), n = (s) => {
    const o = e.query.text.trim().toLowerCase();
    if (o && !e.haystacks[s].includes(o)) return !1;
    const i = e.matched();
    return !(i && !i.has(s));
  }, r = (s) => [s.from, s.to].map((o) => t.get(o["gufe-key"]) ?? -1).filter((o) => o >= 0);
  return ic({
    namespace: "alchemical-network",
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    query: e.query,
    search: {
      placeholder: "Search",
      label: "Search ligands by name, component, system or gufe key"
    },
    smarts: {
      placeholder: "Filter by SMARTS",
      label: "Show only the ligands whose structures match this SMARTS pattern",
      describe: (s) => {
        const o = s.unreadable ? `, ${s.unreadable} could not be read` : "";
        return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} ligands contain it${o}`;
      }
    },
    match: (s) => e.match(s),
    shows: (s, o) => n(o),
    row: (s, o) => ({
      name: tt(s),
      title: `${tt(s)}
${e.captions[o]}`
    }),
    // Either end rather than both, because a line is listed for each of the
    // ligands it runs to: narrowing to one ligand and being shown none of its
    // transformations would be the opposite of what the search was for.
    edgeShows: (s) => r(s).some(n),
    edgeRow: (s) => ({
      name: s.name,
      title: [
        `${tt(s.from)} to ${tt(s.to)}`,
        // What the line bundles, which is the one thing a row cannot show: the
        // legs are a pane's tabs, and the row is one line of text.
        s.legs.length > 1 ? `${s.legs.length} legs: ${s.labels.join(", ")}` : s.labels[0]
      ].join(`
`)
    }),
    words: {
      nodes: { tab: "Ligands", plural: "ligands" },
      edges: { tab: "Transformations", plural: "transformations" }
    },
    refresh: e.refresh,
    focus: e.focus,
    focusEdge: e.focusEdge,
    mounted: e.mounted
  });
}
function Im(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((s, o) => {
    if (s.fx !== void 0 && s.fy !== void 0) {
      s.x = s.fx, s.y = s.fy;
      return;
    }
    const i = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    s.x = t / 2 + r * Math.cos(i), s.y = n / 2 + r * Math.sin(i);
  });
}
function Dm(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const o of t) {
    const i = o.from["gufe-key"], a = o.to["gufe-key"], c = [i, a].sort().join(" ");
    s.has(c) || s.set(c, { source: i, target: a });
  }
  return tc({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: [...s.values()],
    tickMultiplier: at.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((a) => a["gufe-key"]).distance(at.linkDistance).strength(at.linkStrength)
      ],
      ["charge", o.forceManyBody().strength(at.chargeStrength).distanceMax(at.chargeDistanceMax)],
      ["center", o.forceCenter(n / 2, r / 2)],
      ["collision", o.forceCollide(at.collisionRadius).iterations(at.collisionIterations)]
    ]
  });
}
class Lm extends Fe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), {
      nodes: s,
      edges: o,
      unresolved: i,
      dangling: a
    } = rc({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (Y) => [Y.stateA, Y.stateB]
    }), c = Wh(o, r), l = (Y) => {
      const ne = c.signatures.indexOf(Xn(Y, r));
      return ne < 0 ? c.signatures.length : ne;
    }, d = Xh(
      s.map((Y) => ec(Y)),
      r,
      l
    ).map((Y) => ({ ...Y, x: 0, y: 0 })), m = /* @__PURE__ */ new Map();
    for (const Y of d) for (const ne of Y.systems) m.set(ne["gufe-key"], Y);
    const v = Mm(o, m, c), y = Tm(o, r), b = zm(v);
    let w = null;
    const h = () => {
      const Y = w ? b.get(w.protocol["gufe-key"]) : void 0;
      p?.setProtocol(Y ?? null, w?.color ?? ue.netEdgeLine);
    }, g = Zn(n.name || "Alchemical network");
    d.length !== s.length && g.statsEl.appendChild(Ve("ligands", String(d.length))), g.statsEl.appendChild(Ve("systems", String(s.length))), g.statsEl.appendChild(Ve("transformations", String(o.length))), c.signatures.length > 1 && g.statsEl.appendChild(Ve("legs", c.names.join(", "))), y.length === 1 && g.statsEl.appendChild(Om(y[0])), y.length > 1 && g.statsEl.appendChild(
      Fm(y, (Y) => {
        w = Y, h();
      })
    );
    const f = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    let k = () => {
    };
    const _ = /* @__PURE__ */ new Set(), u = { text: "" };
    let p = null;
    const $ = () => {
      const Y = Cm(d, v, C, _, u.text, D);
      p?.setEmphasis(Y?.nodes ?? null, Y?.edges ?? null);
    }, C = d.map((Y) => xm(Y, r)), A = () => Aa(), E = Am(d, r), O = oc(A, E.sources), R = d.map((Y, ne) => {
      const M = E.perNode[ne].find((J) => E.sources[J]), x = M === void 0 ? null : E.sources[M], T = [...new Set(Y.systems.flatMap((J) => Mo(J, r)))].sort(), q = Rm(Y, T, x !== null, E.perNode[ne].length);
      return {
        composition: q.composition,
        besides: q.besides,
        sdf: x,
        charge: M === void 0 ? 0 : E.charges[M],
        title: Nm(Y, r)
      };
    });
    let D = null, z = () => {
    };
    const V = async (Y) => {
      const ne = await O.run(Y);
      return ne.status === "superseded" || (D = ne.status === "ok" ? new Set(d.flatMap((M, x) => E.perNode[x].some((T) => ne.matched.has(T)) ? [x] : [])) : null, z(), $()), ne;
    }, G = Ao(
      g,
      () => jm({
        nodes: d,
        edges: v,
        haystacks: C,
        captions: R.map((Y) => Y.composition),
        selected: _,
        query: u,
        refresh: () => $(),
        matched: () => D,
        match: (Y) => V(Y),
        mounted: (Y) => {
          z = Y;
        },
        // Finding a ligand in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (Y) => {
          p?.focusOn(Y), K("node", Y);
        },
        // The same action for a line: reaching it is not the point, and a
        // transformation the reader cannot see on the canvas is exactly the
        // one they came to the list for.
        focusEdge: (Y) => {
          p?.focusOnEdge(Y), K("edge", Y);
        }
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => k(),
        remember: lt("alchemical-network.menuOpen", !1),
        extras: Po
      }
    ), oe = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${I.netCanvasBg};`), X = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${I.appBg};`), re = N("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${I.netCanvasBg};`), W = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    W.appendChild(G.panel), W.appendChild(re), oe.appendChild(g), oe.appendChild(W), f.appendChild(oe), f.appendChild(
      Ha(f, oe, X, {
        min: jt.min,
        max: jt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Lt("alchemical-network.canvasShare", jt.initial, jt.min, jt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => k(),
        onOrient: (Y) => {
          W.style.flexDirection = Y ? "column" : "row", Eo(G.panel, Y);
        }
      })
    ), f.appendChild(X);
    const F = this.#t(X, r);
    if (!d.length)
      return re.appendChild(
        $e(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), F.message("Nothing to show."), { cleanup: () => F.cleanup() };
    i && dt(
      re,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && dt(
      re,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let H = !1, j = null;
    const S = co(), P = new Map(d.map((Y, ne) => [Y["gufe-key"], R[ne].charge])), L = v.some(
      (Y) => (P.get(Y.to["gufe-key"]) ?? 0) !== (P.get(Y.from["gufe-key"]) ?? 0)
    );
    Na(re, () => p?.reset(), "Reset pan and zoom"), L && oe.appendChild(this.#e());
    const K = (Y, ne) => {
      j = { kind: Y, index: ne }, F.show(Y === "node" ? d[ne] : v[ne], Y), p?.setSelected(j);
    }, te = () => {
      const Y = S.start(), ne = re.clientWidth || 800, M = re.clientHeight || 600;
      Im(d, ne, M);
      const x = () => {
        Y() && (p?.cleanup(), re.querySelectorAll("svg").forEach((T) => T.remove()), p = this.#n(re, d, v, ne, M, R, A, K), p.setSelected(j), $(), h());
      };
      if (H) {
        x();
        return;
      }
      Dm(d, v, ne, M).then((T) => {
        Y() && (T || (H = !0, dt(re, "d3 could not be loaded - showing the circular layout instead")), x());
      }, x);
    };
    return k = te, te(), K("node", 0), {
      onResize: () => te(),
      cleanup: () => {
        S.stop(), p?.cleanup(), p = null, F.cleanup();
      }
    };
  }
  /**
   * The strip under the canvas: what the dashes mean, where there are any.
   *
   * The reset is not here. It floats over the bottom left of the canvas, so a
   * network the reader has flung off the edge still has one control always in
   * the same place without every network paying a row of height for it; a
   * network whose transformations all keep the charge then draws no strip at
   * all.
   *
   * There is no key for the legs. A line is every transformation between its two
   * ligands, so it belongs to no one leg and there is no colour on this canvas
   * for a legend to explain - which leg is a question the pane answers, about
   * one line at a time.
   */
  #e() {
    const t = N("div", Br), n = N("div", "display:flex;align-items:center;gap:6px;min-width:0;");
    return n.appendChild(N("span", `width:24px;height:0;border-top:2px dashed ${I.netEdgeLine};flex-shrink:0;`)), n.appendChild(N("span", `font-size:${Q.small};color:${I.textMuted};`, "net charge change")), t.appendChild(n), t;
  }
  /**
   * The right-hand pane, and what this view puts in it.
   *
   * The pane itself is `detailPane`, shared with the ligand network. What is
   * here is this view's own half: what a box and a line stand for, and which of
   * it to draw.
   *
   * ## A box is drawn as one system
   *
   * A box holds every leg of its ligand, and the legs of a campaign are the same
   * components twice over - the ligand and the solvent in both, the protein in
   * one - so choosing between them was a control over a list that was mostly
   * itself repeated. `mergedSystem` is the merge, and the only thing it has to
   * be careful about is a label naming two different components.
   *
   * ## A line is drawn as one of its transformations
   *
   * A line is every transformation between two ligands, and they really are
   * different calculations: different states, different mapping, a different
   * picture in the pane. So this is where the choice lives, as a row of legs
   * above the pane, and it is only there on a line that has more than one.
   *
   * Which leg is remembered across lines rather than reset per line. Reading a
   * campaign is going along one leg - clicking six edges to see each one in the
   * protein - and a switch that went back to the solvent leg on every click
   * would make that six clicks longer. A line without the remembered leg opens
   * on its first, which is the leg the header names first.
   *
   * Either way what is handed on has to be cut loose from the network first: the
   * graph staples an index and two endpoints onto a line, and the schema allows
   * neither. A box's systems need no cleaning - a box carries its own position,
   * so the systems inside it were never laid out.
   *
   * ## A protocol is not in here
   *
   * The pane shows what is on the canvas, and a protocol is not on it: it is
   * what runs the lines rather than something drawn. So the protocols are on the
   * header - named by `protocolReadout`, or picked out by `protocolChips`, which
   * colours their lines and leaves whatever this pane is showing alone - and
   * never opened in here.
   */
  #t(t, n) {
    const r = N("div", `${Br}border-top:none;border-bottom:1px solid ${I.toolbarBorder};display:none;`);
    t.appendChild(r);
    const s = uc(t);
    let o = "";
    const i = () => {
      r.style.display = "none", r.replaceChildren();
    };
    return {
      ...s,
      show(a, c) {
        if (c === "node") {
          i(), s.show(rm(Zh(a), n));
          return;
        }
        const l = a, d = (v) => {
          o = l.labels[v] ?? "";
          const y = um(l.legs[v], n);
          if (!y) {
            s.message("This transformation names two chemical systems, and its registry does not hold them.");
            return;
          }
          s.show(y);
        }, m = Math.max(0, l.labels.indexOf(o));
        l.legs.length > 1 ? (r.replaceChildren(), r.appendChild(N("span", `font-size:${Q.small};color:${I.textMuted};flex-shrink:0;`, "leg")), r.appendChild(
          Ct(
            l.labels.map((v, y) => ({
              id: String(y),
              label: v,
              title: _e(l.legs[y])
            })),
            String(m),
            (v) => d(Number(v))
          )
        ), r.style.display = "") : i(), d(m);
      }
    };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #n(t, n, r, s, o, i, a, c) {
    const l = le("svg", { class: "gufe-graph", width: s, height: o, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const d = le("g");
    l.appendChild(d);
    const m = le("g"), v = le("g");
    d.append(m, v);
    let y = () => {
    };
    const b = Qa(l, d, {
      bounds: () => Za(n, Qi.x, Qi.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (x, T, q) => y(x, T, q)
    }), w = (x, T) => {
      b.wasPan() || c(x, T);
    };
    let h = 1;
    const g = [], f = [], k = [], _ = [], u = new Map(n.map((x, T) => [x["gufe-key"], i[T].charge])), p = (x) => (u.get(x.to["gufe-key"]) ?? 0) - (u.get(x.from["gufe-key"]) ?? 0);
    r.forEach((x, T) => {
      const q = p(x), J = {
        stroke: ue.netEdgeLine,
        "stroke-width": Xi(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        ...q ? { "stroke-dasharray": vm } : {}
      }, Z = [
        x.name || "transformation",
        ...x.legs.map((fe, me) => `${x.labels[me]}: ${_e(fe)}`),
        q && `net charge change ${ct(q)}`
      ].filter(Boolean).join(`
`), ae = le("line", { class: "gufe-edge", ...J, style: "cursor:pointer;" });
      if (Tr(ae, Z), ae.addEventListener("click", () => w("edge", T)), m.appendChild(ae), g.push(ae), x.legs.length > 1) {
        const fe = le("line", { class: "gufe-edge-rail", ...J, "pointer-events": "none" });
        m.appendChild(fe), f.push(fe), _.push(T);
      } else
        f.push(null);
      const se = le("line", {
        class: "gufe-edge-hit",
        stroke: "transparent",
        "stroke-width": St.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      Tr(se, Z), se.addEventListener("click", () => w("edge", T)), m.appendChild(se), k.push(se);
    });
    const $ = (x) => {
      const { from: T, to: q } = r[x], J = (pe, be, ye) => {
        pe.setAttribute("x1", String(T.x + be)), pe.setAttribute("y1", String(T.y + ye)), pe.setAttribute("x2", String(q.x + be)), pe.setAttribute("y2", String(q.y + ye));
      };
      J(k[x], 0, 0);
      const Z = f[x], ae = Z ? Math.hypot(q.x - T.x, q.y - T.y) : 0;
      if (!Z || !ae) {
        J(g[x], 0, 0), Z?.setAttribute("display", "none");
        return;
      }
      Z.removeAttribute("display");
      const se = km(h), fe = -(q.y - T.y) / ae * se, me = (q.x - T.x) / ae * se;
      J(g[x], fe, me), J(Z, -fe, -me);
    };
    r.forEach((x, T) => $(T));
    const C = n.map(() => []), A = new Map(n.map((x, T) => [x, T]));
    r.forEach((x, T) => {
      const q = A.get(x.from), J = A.get(x.to);
      q !== void 0 && C[q].push(T), J !== void 0 && J !== q && C[J].push(T);
    });
    const E = [], O = [], R = [], D = [], z = [], V = [], G = [], oe = [], X = [], re = bm();
    n.forEach((x, T) => {
      const q = i[T], J = Ji(q.sdf), Z = le("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${x.x},${x.y})`
      });
      R.push(Z);
      const ae = le("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -J / 2,
        width: ut.width,
        height: J,
        rx: ut.radius,
        fill: re.fill,
        stroke: re.stroke,
        "stroke-width": Zi(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (Z.appendChild(ae), E.push(ae), O.push(re.stroke), q.sdf) {
        const me = le("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -J / 2 + qe.pad,
          width: qe.size,
          height: qe.size,
          rx: qe.radius,
          fill: Gr(),
          display: "none",
          "pointer-events": "none"
        });
        if (Z.appendChild(me), V.push(me), q.charge) {
          const ye = le("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: ue.badgeFg,
            "pointer-events": "none"
          });
          ye.textContent = ct(q.charge), Z.appendChild(ye), G.push(ye);
        } else
          G.push(null);
        const pe = le("g", { transform: `translate(0,${-J / 2 + qe.pad + qe.size / 2})` }), be = le("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        pe.appendChild(be), Z.appendChild(pe), oe.push(pe), X.push(be);
      } else
        V.push(null), oe.push(null), X.push(null), G.push(null);
      const se = le("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: ue.netNodeLabel,
        "font-size": Ge.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      se.textContent = Un(tt(x), Ge.nameChars), Z.appendChild(se), D.push(se);
      const fe = le("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: ue.netInitials,
        "font-size": Ge.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      fe.textContent = Un(q.composition, Ge.subChars), Z.appendChild(fe), z.push(fe), Tr(Z, q.title), v.appendChild(Z);
    });
    const W = (x) => {
      const T = n[x];
      R[x].setAttribute("transform", `translate(${T.x},${T.y})`);
      for (const q of C[x]) $(q);
    }, F = new lc(), H = fr("cpk"), j = (x, T) => {
      if (!F.wants(T)) return;
      const q = X[T], J = i[T].sdf;
      if (!q || !J) return;
      const Z = Co(x, J, Yi, Oe.layout, void 0, H);
      if (!Z || !fc(q, Z, Yi, qe.size - qe.inset * 2)) {
        F.refused(T);
        return;
      }
      F.drew(T);
    }, S = (x, T, q) => {
      const J = i[x], Z = T && F.has(x), ae = (xt) => xt * q >= wm, se = ae(Ge.nameSize), fe = ae(Ge.subSize);
      D[x].setAttribute("display", se ? "inline" : "none"), z[x].setAttribute("display", fe ? "inline" : "none"), V[x]?.setAttribute("display", Z ? "inline" : "none"), X[x]?.setAttribute("display", Z ? "inline" : "none");
      const me = Ji(J.sdf), pe = -me / 2 + qe.pad, be = G[x];
      be && (be.setAttribute("x", String(Z ? ut.width / 2 - zt.inset : 0)), be.setAttribute(
        "y",
        String(Z ? -me / 2 + zt.inset : -me * zt.bigAt)
      ), be.setAttribute("font-size", String(Z ? zt.fontSize : zt.bigFontSize)), be.setAttribute("font-weight", Z ? ge.normal : ge.bold)), V[x]?.setAttribute("y", String(pe)), oe[x]?.setAttribute("transform", `translate(0,${pe + qe.size / 2})`);
      const ye = me / 2 - Ge.bottom;
      D[x].setAttribute("y", String(Z ? ye - (fe ? Ge.gap : 0) : -2)), z[x].setAttribute("y", String(Z ? ye : 14)), z[x].textContent = Un(Z ? J.besides : J.composition, Ge.subChars);
    };
    let P = null, L = null, K = null, te = null, Y = ue.netEdgeLine;
    const ne = () => {
      E.forEach((x, T) => {
        const q = L === T;
        x.setAttribute("stroke", q ? ue.cardBorderActive : O[T]), x.setAttribute("stroke-width", String(Zi(h, q)));
      }), g.forEach((x, T) => {
        const q = K === T, J = te?.has(T) ?? !1, Z = q ? ue.netHaloColor : J ? Y : ue.netEdgeLine, ae = String(Xi(h, q) * (J ? St.lensScale : 1));
        for (const se of [x, f[T]])
          se && (se.setAttribute("stroke", Z), se.setAttribute("stroke-width", ae));
      });
    };
    return y = (x, T, q) => {
      const J = Sm(x);
      P = J, l.setAttribute("data-detail", J.id);
      const Z = h !== x;
      if (h = x, ne(), Z) for (const se of _) $(se);
      for (let se = 0; se < n.length; se++) S(se, J.structure, x);
      if (!J.structure) return;
      const ae = dc(
        n,
        { scale: x, tx: T, ty: q },
        { width: s, height: o },
        (se) => !!i[se].sdf && F.wants(se)
      );
      ae.length && a().then((se) => {
        if (!(!se || P !== J))
          for (const fe of ae)
            j(se, fe), S(fe, !0, x);
      }).catch(() => {
      });
    }, cc(R, n, b, { moved: W, clicked: (x) => c("node", x) }), b.fit(), {
      setSelected(x) {
        L = x?.kind === "node" ? x.index : null, K = x?.kind === "edge" ? x.index : null, ne();
      },
      setProtocol(x, T) {
        te = x, Y = T, ne();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(x, T) {
        R.forEach((q, J) => {
          const Z = !x || x.has(n[J]["gufe-key"]);
          q.setAttribute("opacity", Z ? "1" : String(Dt.node));
        }), g.forEach((q, J) => {
          const Z = !T || T.has(J);
          for (const ae of [q, f[J]]) ae?.setAttribute("opacity", Z ? "1" : String(Dt.edge));
        });
      },
      focusOn(x) {
        const T = n[x];
        T && b.centreOn(T.x, T.y, ea);
      },
      focusOnEdge(x) {
        const T = r[x];
        T && b.centreOn((T.from.x + T.to.x) / 2, (T.from.y + T.to.y) / 2, ea);
      },
      reset: b.reset,
      cleanup: b.cleanup
    };
  }
}
ze("gufe-alchemical-network", Lm);
class qm extends Fe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Zn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Qn(n.gufe_type)), t.appendChild(r);
    const s = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(s);
    const o = io();
    return o.style.maxWidth = "460px", o.appendChild(Wn("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Wn("Name", n.name)), o.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${I.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), s.appendChild(o), {};
  }
}
ze("gufe-protocol", qm);
function Bm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function ta(e, t = !1) {
  const n = N(
    "div",
    `display:flex;flex-direction:column;gap:${ee.xl};padding:${ee.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${I.splitBorder};`)
  );
  return n.appendChild(N("div", Vr, e)), n;
}
function Kn(e) {
  return N(
    "div",
    `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${I.textMuted2};`,
    e
  );
}
function na(e, t) {
  const n = N("div", `display:flex;flex-direction:column;align-items:center;gap:${ee.sm};`);
  return n.appendChild(
    N(
      "span",
      `${Ae.plain}${Ae.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(Kn(t)), n;
}
class Vm extends Fe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const s = io();
    s.style.maxWidth = "560px", s.style.width = "100%", s.style.gap = "0";
    const o = ta("Solvent", !0), i = N("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = N("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = N(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${ge.bold};line-height:1.1;color:${I.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Kn("SMILES")), i.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const g = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      g.appendChild(
        N(
          "div",
          `font-size:${Q.body};color:${I.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), g.appendChild(Kn("Name")), i.appendChild(g);
    }
    o.appendChild(i), s.appendChild(o);
    const d = ta("Ions"), m = N("div", `display:flex;align-items:flex-end;gap:${ee.xxl};flex-wrap:wrap;`);
    n.positive_ion && m.appendChild(na(n.positive_ion, "cation")), n.negative_ion && m.appendChild(na(n.negative_ion, "anion"));
    const { value: v, unit: y } = Bm(n.ion_concentration), b = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), w = N("div", `display:flex;align-items:baseline;gap:${ee.md};justify-content:flex-end;`);
    w.appendChild(
      N(
        "div",
        `font-size:${Q.display};font-weight:${ge.bold};line-height:1;color:${I.titleColor};`,
        v
      )
    ), y && (w.appendChild(document.createTextNode(" ")), w.appendChild(N("div", `font-size:${Q.body};color:${I.textMuted};`, y))), b.appendChild(w), b.appendChild(Kn("Ion concentration")), m.appendChild(b), d.appendChild(m);
    const h = n.neutralize;
    return d.appendChild(
      N(
        "span",
        `${Ae.plain}align-self:flex-start;font-weight:${ge.bold};` + (h ? `background:${I.okBg};color:${I.okFg};` : `${Ae.outline}color:${I.textMuted};`),
        h ? "Neutralized" : "Not neutralized"
      )
    ), d.appendChild(
      N(
        "div",
        jc,
        h ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), s.appendChild(d), r.appendChild(s), {};
  }
}
ze("gufe-solvent", Vm);
class Um extends Fe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Zn(n.name || "Unnamed component");
    r.statsEl.appendChild(Qn(n.gufe_type)), t.appendChild(r);
    const s = N("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(s);
    const o = io();
    return o.style.maxWidth = "460px", o.appendChild(
      N(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${I.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      N(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${I.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Wn("Name", n.name || "(unnamed)")), o.appendChild(Wn("gufe class", n.gufe_type, !0)), s.appendChild(o), {};
  }
}
ze("gufe-unknown-component", Um);
ia();
typeof globalThis < "u" && (globalThis.alchemyViz = { settings: zu, reset: Iu });
export {
  Hm as PAYLOAD_TYPES,
  yo as VIEW_TAGS
};
