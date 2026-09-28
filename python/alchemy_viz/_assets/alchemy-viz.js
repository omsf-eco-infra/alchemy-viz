function T(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function je(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const xt = (e) => e.toLocaleString("en-US"), Qe = "-", Un = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function oa(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const kc = 460;
function ro(e, t, n = kc) {
  let r = null;
  return oa(e, (s) => {
    const o = s > 0 && s < n;
    o !== r && (r = o, t(o));
  });
}
const We = {
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
function oo() {
  return Cc() ? "dark" : "light";
}
let de = We[oo()];
const sa = "--gufe-", ia = Object.keys(We.light).filter(
  (e) => e !== "viewerBg" && typeof We.light[e] == "string"
), z = Object.fromEntries(ia.map((e) => [e, `var(${sa}${e})`])), $r = (e) => ia.map((t) => `${sa}${t}:${e[t]};`).join("");
function Ec() {
  return [
    `:root{color-scheme:light dark;${$r(We.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${Fo}="light"]){${$r(We.dark)}}}`,
    `:root[${Fo}="dark"]{${$r(We.dark)}}`,
    // A button's three states, in one place. Every button in the codebase is
    // built from `BUTTON.base`, which deliberately sets no background: these do,
    // so that hovering is a stylesheet rule rather than a pair of handlers on
    // every button, written slightly differently each time.
    `.gufe-btn{background:${z.btnBg};}`,
    `.gufe-btn:hover:not(:disabled){background:${z.btnBgHover};}`,
    `.gufe-btn[aria-pressed="true"],.gufe-btn[aria-expanded="true"],.gufe-btn[data-gufe-on="1"]{background:${z.btnBgActive};}`,
    ".gufe-btn:disabled{opacity:.5;cursor:default;}",
    // The same for a pickable card or row, whose selected state is `aria-pressed`
    // for the same reason: it is the accessible fact, so styling from it cannot
    // drift out of step with what a screen reader is told.
    `.gufe-pick{background:${z.cardBg};border-color:${z.cardBorder};}`,
    `.gufe-pick:hover{background:${z.cardBgHover};}`,
    `.gufe-pick[aria-pressed="true"]{background:${z.cardBgActive};border-color:${z.cardBorderActive};}`,
    // A chip that selects what it counts. Its resting state is no background at
    // all - it is a count in a row of counts, not a control asking to be pressed
    // - so it is its own rule rather than a `gufe-pick` with the ground removed.
    ".gufe-chip{background:none;}",
    `.gufe-chip:hover{background:${z.cardBgHover};}`,
    `.gufe-chip[aria-pressed="true"]{background:${z.cardBgActive};color:${z.textPrimary};}`
  ].join(`
`);
}
const zo = "alchemy-viz-theme";
function aa() {
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
}, Z = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Ee = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px"
}, Ce = {
  title: z.titleColor,
  primary: z.textPrimary,
  muted: z.textMuted,
  faint: z.textMuted2,
  error: z.errorFg
}, Dt = {
  card: z.cardBg,
  /**
   * Where a 3D engine draws. Interface, not chemistry: it is the paper.
   *
   * The one literal here, and a function so it is read when a viewer is built
   * rather than when this module loads. 3Dmol wants `0x2b2b40`, which is not a
   * colour CSS has ever heard of, so this is the one surface a custom property
   * cannot carry.
   */
  viewer: () => de.viewerBg
}, jo = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${z.btnFg};border:1px solid ${z.btnBorder};padding:${Z.sm} 9px;font-size:${Q.small};font-weight:${ge.bold};border-radius:${Ee.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, ca = `background:${z.selectBg};color:${z.textPrimary};border:1px solid ${z.selectBorder};border-radius:${Ee.md};padding:${Z.sm} ${Z.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, la = `${ca}width:100%;box-sizing:border-box;cursor:text;`, da = "24px", xc = `display:flex;align-items:flex-start;gap:12px;padding:9px ${Z.xxl};flex-shrink:0;line-height:${da};background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};`, Gn = { min: "236px", max: "340px" }, et = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, ua = `display:flex;flex-direction:column;gap:${Z.lg};flex:1;min-width:var(${et.min},${Gn.min});max-width:var(${et.max},${Gn.max});box-sizing:border-box;padding:${Z.xl};min-height:0;overflow-y:auto;background:${z.panelBg};border:0 solid ${z.splitBorder};border-right-width:var(${et.ruleX},1px);border-bottom-width:var(${et.ruleY},0);`, Ac = "45%", Pc = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Ur = `display:flex;align-items:center;gap:${Z.xl};flex-wrap:wrap;padding:${Z.lg} ${Z.xxl};flex-shrink:0;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};`, Rc = `flex-shrink:0;padding:${Z.sm} ${Z.xl};font-size:${Q.heading};font-weight:${ge.bold};color:${z.labelFg};background:${z.labelBg};`, so = `position:absolute;top:${Z.md};left:${Z.md};z-index:10;pointer-events:none;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${Z.xs} ${Z.lg};border-radius:${Ee.md};font-size:${Q.heading};font-weight:${ge.bold};color:${z.labelFg};background:${z.labelBg};`, Mc = `padding:${Z.xs} ${Z.lg};border-radius:${Ee.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${z.labelFg};background:${z.labelBg};`, Nc = `position:absolute;top:${Z.lg};left:${Z.lg};z-index:15;display:flex;align-items:center;gap:${Z.md};min-width:0;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});`, Tc = "42px", Oc = `flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:${Z.sm};padding:${Z.xxl};`, Fc = `display:flex;flex-direction:column;gap:${Z.xs};padding:${Z.xxl} 18px;border-radius:${Ee.xl};background:${z.cardBg};border:1px solid ${z.cardBorder};`, Qn = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${Z.sm};padding:${Z.lg} ${Z.xl};text-align:left;border-radius:${Ee.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Q.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${Z.md};padding:5px ${Z.lg};border:1px solid;border-radius:${Z.md};text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;color:${z.textPrimary};`,
  className: "gufe-pick"
}, zc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${Z.xl};border-radius:${Ee.md};font-size:${Q.small};line-height:1.5;max-width:260px;background:${z.tooltipBg};border:1px solid ${z.tooltipBorder};color:${z.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, fa = `position:absolute;bottom:${Z.xl};right:${Z.xl};display:flex;gap:${Z.sm};padding:${Z.sm};border-radius:${Ee.md};z-index:10;background:${z.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, jc = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${z.textMuted};`, Wn = `font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${z.textMuted2};`, Re = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${Z.xs} ${Z.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${Z.xs} ${Z.md};border:1px solid transparent;border-radius:${Ee.pill};font-family:inherit;font-size:${Q.small};color:${z.textMuted};`,
  /**
   * A chip that selects what it counts.
   *
   * Deliberately sets no `background`: like `BUTTON` and `PICK`, resting, hover
   * and picked are one stylesheet rule keyed off `aria-pressed`, and an inline
   * background would beat it. Pair it with `CHIP.className`.
   */
  button: `cursor:pointer;border-color:${z.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${z.btnBg};border-color:${z.btnBorder};color:${z.textPrimary};`,
  className: "gufe-chip"
}, Ic = `font-size:${Q.small};line-height:1.6;color:${z.textMuted2};`;
function Ke(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const s = T("span");
  return s.innerHTML = `${je(e)} <b style="color:${Ce.primary};">${je(t)}</b>`, r.appendChild(s), r;
}
function lt(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${Z.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${Z.md} ${Z.xxl};border-radius:${Ee.md};font-size:${Q.body};background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};`, e.appendChild(n), n;
}
function ye(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? Ce.error : Ce.faint};`,
    e
  );
}
function er(e) {
  const t = T("div", xc);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${ge.bold};font-size:${Q.title};color:${Ce.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${Ce.muted};`
  ), t.textEl = T("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = T("div", `display:flex;align-items:center;height:${da};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Jn(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${Ce.faint};`,
      e
    )
  );
  const s = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Ce.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return s.title = t, r.appendChild(s), r;
}
function tr(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${Ee.xl};font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.04em;white-space:nowrap;background:${z.badgeBg};color:${z.badgeFg};`,
    e
  );
}
function io() {
  return T("div", Fc);
}
function pa() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Hr = "data-gufe-hide-name";
function ao(e) {
  return !e.closest(`[${Hr}]`);
}
const Dc = ["debug", "gufe-debug"], Lc = "debug", qc = "ALCHEMY_VIZ_DEBUG";
function Vc() {
  return !!globalThis[qc];
}
function Bc() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Dc.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Uc(e) {
  return e?.hasAttribute?.(Lc) ? !0 : Vc() || Bc();
}
function Hc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function Kc(e, t, n) {
  if (!Uc(n)) return;
  const r = Hc(t), s = t?.type, o = `[alchemy-viz] ${e}${typeof s == "string" ? ` ${s}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), i && console.groupEnd?.();
}
const ha = "ALCHEMY_VIZ_VIEW_STATE";
function ma(e) {
  const t = globalThis[ha];
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
const Gc = 150, Io = "data-gufe-shell";
class Oe extends HTMLElement {
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
    aa(), this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Io}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = z.appBg, this.style.color = z.textPrimary, this.style.fontFamily = Q.family, typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), Gc);
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
    return this.#i(), this.#n = T(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${z.appBg};`
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
      t.appendChild(ye(this.placeholder()));
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
    n === this.#s && (console.warn("[alchemy-viz] render failed:", r), t.replaceChildren(ye(`Failed to render: ${$e(r)}`, !0)));
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
function Fe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vt = { exports: {} }, br = {}, Ve = {}, ot = {}, vr = {}, wr = {}, _r = {}, Do;
function Yn() {
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
    function $(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new r(`.${g}`) : s`[${g}]`;
    }
    e.getProperty = $;
    function w(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new r(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function p(g) {
      return new r(g.toString());
    }
    e.regexpCode = p;
  })(_r)), _r;
}
var Sr = {}, Lo;
function qo() {
  return Lo || (Lo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Yn();
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
        const v = this.toName(l), { prefix: y } = v, $ = (m = d.key) !== null && m !== void 0 ? m : d.ref;
        let w = this._values[y];
        if (w) {
          const f = w.get($);
          if (f)
            return f;
        } else
          w = this._values[y] = /* @__PURE__ */ new Map();
        w.set($, v);
        const p = this._scope[y] || (this._scope[y] = []), g = p.length;
        return p[g] = d.ref, v.setValue(d, { property: y, itemIndex: g }), v;
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
        for (const $ in l) {
          const w = l[$];
          if (!w)
            continue;
          const p = m[$] = m[$] || /* @__PURE__ */ new Map();
          w.forEach((g) => {
            if (p.has(g))
              return;
            p.set(g, r.Started);
            let f = d(g);
            if (f) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${k} ${g} = ${f};${this.opts._n}`;
            } else if (f = v?.(g))
              y = (0, t._)`${y}${f}${this.opts._n}`;
            else
              throw new n(g);
            p.set(g, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(Sr)), Sr;
}
var Vo;
function se() {
  return Vo || (Vo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Yn(), n = /* @__PURE__ */ qo();
    var r = /* @__PURE__ */ Yn();
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
      optimizeNames(S, x) {
        return this;
      }
    }
    class i extends o {
      constructor(S, x, L) {
        super(), this.varKind = S, this.name = x, this.rhs = L;
      }
      render({ es5: S, _n: x }) {
        const L = S ? n.varKinds.var : this.varKind, ee = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${L} ${this.name}${ee};` + x;
      }
      optimizeNames(S, x) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, S, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(S, x, L) {
        super(), this.lhs = S, this.rhs = x, this.sideEffects = L;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, x) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, S, x), this;
      }
      get names() {
        const S = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(S, this.rhs);
      }
    }
    class c extends a {
      constructor(S, x, L, ee) {
        super(S, L, ee), this.op = x;
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
      optimizeNames(S, x) {
        return this.code = j(this.code, S, x), this;
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
        return this.nodes.reduce((x, L) => x + L.render(S), "");
      }
      optimizeNodes() {
        const { nodes: S } = this;
        let x = S.length;
        for (; x--; ) {
          const L = S[x].optimizeNodes();
          Array.isArray(L) ? S.splice(x, 1, ...L) : L ? S[x] = L : S.splice(x, 1);
        }
        return S.length > 0 ? this : void 0;
      }
      optimizeNames(S, x) {
        const { nodes: L } = this;
        let ee = L.length;
        for (; ee--; ) {
          const G = L[ee];
          G.optimizeNames(S, x) || (q(S, G.names), L.splice(ee, 1));
        }
        return L.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, x) => R(S, x.names), {});
      }
    }
    class $ extends y {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class w extends y {
    }
    class p extends $ {
    }
    p.kind = "else";
    class g extends $ {
      constructor(S, x) {
        super(x), this.condition = S;
      }
      render(S) {
        let x = `if(${this.condition})` + super.render(S);
        return this.else && (x += "else " + this.else.render(S)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const S = this.condition;
        if (S === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const L = x.optimizeNodes();
          x = this.else = Array.isArray(L) ? new p(L) : L;
        }
        if (x)
          return S === !1 ? x instanceof g ? x : x.nodes : this.nodes.length ? this : new g(J(S), x instanceof g ? [x] : x.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, x) {
        var L;
        if (this.else = (L = this.else) === null || L === void 0 ? void 0 : L.optimizeNames(S, x), !!(super.optimizeNames(S, x) || this.else))
          return this.condition = j(this.condition, S, x), this;
      }
      get names() {
        const S = super.names;
        return D(S, this.condition), this.else && R(S, this.else.names), S;
      }
    }
    g.kind = "if";
    class f extends $ {
    }
    f.kind = "for";
    class k extends f {
      constructor(S) {
        super(), this.iteration = S;
      }
      render(S) {
        return `for(${this.iteration})` + super.render(S);
      }
      optimizeNames(S, x) {
        if (super.optimizeNames(S, x))
          return this.iteration = j(this.iteration, S, x), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class _ extends f {
      constructor(S, x, L, ee) {
        super(), this.varKind = S, this.name = x, this.from = L, this.to = ee;
      }
      render(S) {
        const x = S.es5 ? n.varKinds.var : this.varKind, { name: L, from: ee, to: G } = this;
        return `for(${x} ${L}=${ee}; ${L}<${G}; ${L}++)` + super.render(S);
      }
      get names() {
        const S = D(super.names, this.from);
        return D(S, this.to);
      }
    }
    class u extends f {
      constructor(S, x, L, ee) {
        super(), this.loop = S, this.varKind = x, this.name = L, this.iterable = ee;
      }
      render(S) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(S);
      }
      optimizeNames(S, x) {
        if (super.optimizeNames(S, x))
          return this.iterable = j(this.iterable, S, x), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class h extends $ {
      constructor(S, x, L) {
        super(), this.name = S, this.args = x, this.async = L;
      }
      render(S) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(S);
      }
    }
    h.kind = "func";
    class b extends y {
      render(S) {
        return "return " + super.render(S);
      }
    }
    b.kind = "return";
    class C extends $ {
      render(S) {
        let x = "try" + super.render(S);
        return this.catch && (x += this.catch.render(S)), this.finally && (x += this.finally.render(S)), x;
      }
      optimizeNodes() {
        var S, x;
        return super.optimizeNodes(), (S = this.catch) === null || S === void 0 || S.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(S, x) {
        var L, ee;
        return super.optimizeNames(S, x), (L = this.catch) === null || L === void 0 || L.optimizeNames(S, x), (ee = this.finally) === null || ee === void 0 || ee.optimizeNames(S, x), this;
      }
      get names() {
        const S = super.names;
        return this.catch && R(S, this.catch.names), this.finally && R(S, this.finally.names), S;
      }
    }
    class P extends $ {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    P.kind = "catch";
    class A extends $ {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    A.kind = "finally";
    class N {
      constructor(S, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
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
      scopeValue(S, x) {
        const L = this._extScope.value(S, x);
        return (this._values[L.prefix] || (this._values[L.prefix] = /* @__PURE__ */ new Set())).add(L), L;
      }
      getScopeValue(S, x) {
        return this._extScope.getValue(S, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(S) {
        return this._extScope.scopeRefs(S, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(S, x, L, ee) {
        const G = this._scope.toName(x);
        return L !== void 0 && ee && (this._constants[G.str] = L), this._leafNode(new i(S, G, L)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(S, x, L) {
        return this._def(n.varKinds.const, S, x, L);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(S, x, L) {
        return this._def(n.varKinds.let, S, x, L);
      }
      // `var` declaration with optional assignment
      var(S, x, L) {
        return this._def(n.varKinds.var, S, x, L);
      }
      // assignment code
      assign(S, x, L) {
        return this._leafNode(new a(S, x, L));
      }
      // `+=` code
      add(S, x) {
        return this._leafNode(new c(S, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(S) {
        return typeof S == "function" ? S() : S !== t.nil && this._leafNode(new v(S)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...S) {
        const x = ["{"];
        for (const [L, ee] of S)
          x.length > 1 && x.push(","), x.push(L), (L !== ee || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, ee));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(S, x, L) {
        if (this._blockNode(new g(S)), x && L)
          this.code(x).else().code(L).endIf();
        else if (x)
          this.code(x).endIf();
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
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, p);
      }
      _for(S, x) {
        return this._blockNode(S), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, x) {
        return this._for(new k(S), x);
      }
      // `for` statement for a range of values
      forRange(S, x, L, ee, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName(S);
        return this._for(new _(G, ne, x, L), () => ee(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, x, L, ee = n.varKinds.const) {
        const G = this._scope.toName(S);
        if (this.opts.es5) {
          const ne = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (B) => {
            this.var(G, (0, t._)`${ne}[${B}]`), L(G);
          });
        }
        return this._for(new u("of", ee, G, x), () => L(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, x, L, ee = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${x})`, L);
        const G = this._scope.toName(S);
        return this._for(new u("in", ee, G, x), () => L(G));
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
        const x = new b();
        if (this._blockNode(x), this.code(S), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(b);
      }
      // `try` statement
      try(S, x, L) {
        if (!x && !L)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const ee = new C();
        if (this._blockNode(ee), this.code(S), x) {
          const G = this.name("e");
          this._currNode = ee.catch = new P(G), x(G);
        }
        return L && (this._currNode = ee.finally = new A(), this.code(L)), this._endBlockNode(P, A);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new m(S));
      }
      // start self-balancing block
      block(S, x) {
        return this._blockStarts.push(this._nodes.length), S && this.code(S).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(S) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const L = this._nodes.length - x;
        if (L < 0 || S !== void 0 && L !== S)
          throw new Error(`CodeGen: wrong number of nodes: ${L} vs ${S} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(S, x = t.nil, L, ee) {
        return this._blockNode(new h(S, x, L)), ee && this.code(ee).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
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
      _endBlockNode(S, x) {
        const L = this._currNode;
        if (L instanceof S || x && L instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${S.kind}/${x.kind}` : S.kind}"`);
      }
      _elseNode(S) {
        const x = this._currNode;
        if (!(x instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = S, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const S = this._nodes;
        return S[S.length - 1];
      }
      set _currNode(S) {
        const x = this._nodes;
        x[x.length - 1] = S;
      }
    }
    e.CodeGen = N;
    function R(F, S) {
      for (const x in S)
        F[x] = (F[x] || 0) + (S[x] || 0);
      return F;
    }
    function D(F, S) {
      return S instanceof t._CodeOrName ? R(F, S.names) : F;
    }
    function j(F, S, x) {
      if (F instanceof t.Name)
        return L(F);
      if (!ee(F))
        return F;
      return new t._Code(F._items.reduce((G, ne) => (ne instanceof t.Name && (ne = L(ne)), ne instanceof t._Code ? G.push(...ne._items) : G.push(ne), G), []));
      function L(G) {
        const ne = x[G.str];
        return ne === void 0 || S[G.str] !== 1 ? G : (delete S[G.str], ne);
      }
      function ee(G) {
        return G instanceof t._Code && G._items.some((ne) => ne instanceof t.Name && S[ne.str] === 1 && x[ne.str] !== void 0);
      }
    }
    function q(F, S) {
      for (const x in S)
        F[x] = (F[x] || 0) - (S[x] || 0);
    }
    function J(F) {
      return typeof F == "boolean" || typeof F == "number" || F === null ? !F : (0, t._)`!${K(F)}`;
    }
    e.not = J;
    const re = O(e.operators.AND);
    function Y(...F) {
      return F.reduce(re);
    }
    e.and = Y;
    const oe = O(e.operators.OR);
    function W(...F) {
      return F.reduce(oe);
    }
    e.or = W;
    function O(F) {
      return (S, x) => S === t.nil ? x : x === t.nil ? S : (0, t._)`${K(S)} ${F} ${K(x)}`;
    }
    function K(F) {
      return F instanceof t.Name ? F : (0, t._)`(${F})`;
    }
  })(wr)), wr;
}
var ie = {}, Bo;
function ce() {
  if (Bo) return ie;
  Bo = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.checkStrictMode = ie.getErrorPath = ie.Type = ie.useFunc = ie.setEvaluated = ie.evaluatedPropsToName = ie.mergeEvaluated = ie.eachItem = ie.unescapeJsonPointer = ie.escapeJsonPointer = ie.escapeFragment = ie.unescapeFragment = ie.schemaRefOrVal = ie.schemaHasRulesButRef = ie.schemaHasRules = ie.checkUnknownRules = ie.alwaysValidSchema = ie.toHash = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Yn();
  function n(u) {
    const h = {};
    for (const b of u)
      h[b] = !0;
    return h;
  }
  ie.toHash = n;
  function r(u, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (s(u, h), !o(h, u.self.RULES.all));
  }
  ie.alwaysValidSchema = r;
  function s(u, h = u.schema) {
    const { opts: b, self: C } = u;
    if (!b.strictSchema || typeof h == "boolean")
      return;
    const P = C.RULES.keywords;
    for (const A in h)
      P[A] || _(u, `unknown keyword: "${A}"`);
  }
  ie.checkUnknownRules = s;
  function o(u, h) {
    if (typeof u == "boolean")
      return !u;
    for (const b in u)
      if (h[b])
        return !0;
    return !1;
  }
  ie.schemaHasRules = o;
  function i(u, h) {
    if (typeof u == "boolean")
      return !u;
    for (const b in u)
      if (b !== "$ref" && h.all[b])
        return !0;
    return !1;
  }
  ie.schemaHasRulesButRef = i;
  function a({ topSchemaRef: u, schemaPath: h }, b, C, P) {
    if (!P) {
      if (typeof b == "number" || typeof b == "boolean")
        return b;
      if (typeof b == "string")
        return (0, e._)`${b}`;
    }
    return (0, e._)`${u}${h}${(0, e.getProperty)(C)}`;
  }
  ie.schemaRefOrVal = a;
  function c(u) {
    return m(decodeURIComponent(u));
  }
  ie.unescapeFragment = c;
  function l(u) {
    return encodeURIComponent(d(u));
  }
  ie.escapeFragment = l;
  function d(u) {
    return typeof u == "number" ? `${u}` : u.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ie.escapeJsonPointer = d;
  function m(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ie.unescapeJsonPointer = m;
  function v(u, h) {
    if (Array.isArray(u))
      for (const b of u)
        h(b);
    else
      h(u);
  }
  ie.eachItem = v;
  function y({ mergeNames: u, mergeToName: h, mergeValues: b, resultToName: C }) {
    return (P, A, N, R) => {
      const D = N === void 0 ? A : N instanceof e.Name ? (A instanceof e.Name ? u(P, A, N) : h(P, A, N), N) : A instanceof e.Name ? (h(P, N, A), A) : b(A, N);
      return R === e.Name && !(D instanceof e.Name) ? C(P, D) : D;
    };
  }
  ie.mergeEvaluated = {
    props: y({
      mergeNames: (u, h, b) => u.if((0, e._)`${b} !== true && ${h} !== undefined`, () => {
        u.if((0, e._)`${h} === true`, () => u.assign(b, !0), () => u.assign(b, (0, e._)`${b} || {}`).code((0, e._)`Object.assign(${b}, ${h})`));
      }),
      mergeToName: (u, h, b) => u.if((0, e._)`${b} !== true`, () => {
        h === !0 ? u.assign(b, !0) : (u.assign(b, (0, e._)`${b} || {}`), w(u, b, h));
      }),
      mergeValues: (u, h) => u === !0 ? !0 : { ...u, ...h },
      resultToName: $
    }),
    items: y({
      mergeNames: (u, h, b) => u.if((0, e._)`${b} !== true && ${h} !== undefined`, () => u.assign(b, (0, e._)`${h} === true ? true : ${b} > ${h} ? ${b} : ${h}`)),
      mergeToName: (u, h, b) => u.if((0, e._)`${b} !== true`, () => u.assign(b, h === !0 ? !0 : (0, e._)`${b} > ${h} ? ${b} : ${h}`)),
      mergeValues: (u, h) => u === !0 ? !0 : Math.max(u, h),
      resultToName: (u, h) => u.var("items", h)
    })
  };
  function $(u, h) {
    if (h === !0)
      return u.var("props", !0);
    const b = u.var("props", (0, e._)`{}`);
    return h !== void 0 && w(u, b, h), b;
  }
  ie.evaluatedPropsToName = $;
  function w(u, h, b) {
    Object.keys(b).forEach((C) => u.assign((0, e._)`${h}${(0, e.getProperty)(C)}`, !0));
  }
  ie.setEvaluated = w;
  const p = {};
  function g(u, h) {
    return u.scopeValue("func", {
      ref: h,
      code: p[h.code] || (p[h.code] = new t._Code(h.code))
    });
  }
  ie.useFunc = g;
  var f;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(f || (ie.Type = f = {}));
  function k(u, h, b) {
    if (u instanceof e.Name) {
      const C = h === f.Num;
      return b ? C ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : C ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return b ? (0, e.getProperty)(u).toString() : "/" + d(u);
  }
  ie.getErrorPath = k;
  function _(u, h, b = u.opts.strictSchema) {
    if (b) {
      if (h = `strict mode: ${h}`, b === !0)
        throw new Error(h);
      u.self.logger.warn(h);
    }
  }
  return ie.checkStrictMode = _, ie;
}
var Bt = {}, Uo;
function Ie() {
  if (Uo) return Bt;
  Uo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = {
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
  return Bt.default = t, Bt;
}
var Ho;
function nr() {
  return Ho || (Ho = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Ie();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: g }) => g ? (0, t.str)`"${p}" keyword must be ${g} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function s(p, g = e.keywordError, f, k) {
      const { it: _ } = p, { gen: u, compositeRule: h, allErrors: b } = _, C = m(p, g, f);
      k ?? (h || b) ? c(u, C) : l(_, (0, t._)`[${C}]`);
    }
    e.reportError = s;
    function o(p, g = e.keywordError, f) {
      const { it: k } = p, { gen: _, compositeRule: u, allErrors: h } = k, b = m(p, g, f);
      c(_, b), u || h || l(k, r.default.vErrors);
    }
    e.reportExtraError = o;
    function i(p, g) {
      p.assign(r.default.errors, g), p.if((0, t._)`${r.default.vErrors} !== null`, () => p.if(g, () => p.assign((0, t._)`${r.default.vErrors}.length`, g), () => p.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: p, keyword: g, schemaValue: f, data: k, errsCount: _, it: u }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const h = p.name("err");
      p.forRange("i", _, r.default.errors, (b) => {
        p.const(h, (0, t._)`${r.default.vErrors}[${b}]`), p.if((0, t._)`${h}.instancePath === undefined`, () => p.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, u.errorPath))), p.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${g}`), u.opts.verbose && (p.assign((0, t._)`${h}.schema`, f), p.assign((0, t._)`${h}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(p, g) {
      const f = p.const("err", g);
      p.if((0, t._)`${r.default.vErrors} === null`, () => p.assign(r.default.vErrors, (0, t._)`[${f}]`), (0, t._)`${r.default.vErrors}.push(${f})`), p.code((0, t._)`${r.default.errors}++`);
    }
    function l(p, g) {
      const { gen: f, validateName: k, schemaEnv: _ } = p;
      _.$async ? f.throw((0, t._)`new ${p.ValidationError}(${g})`) : (f.assign((0, t._)`${k}.errors`, g), f.return(!1));
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
    function m(p, g, f) {
      const { createErrors: k } = p.it;
      return k === !1 ? (0, t._)`{}` : v(p, g, f);
    }
    function v(p, g, f = {}) {
      const { gen: k, it: _ } = p, u = [
        y(_, f),
        $(p, f)
      ];
      return w(p, g, u), k.object(...u);
    }
    function y({ errorPath: p }, { instancePath: g }) {
      const f = g ? (0, t.str)`${p}${(0, n.getErrorPath)(g, n.Type.Str)}` : p;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, f)];
    }
    function $({ keyword: p, it: { errSchemaPath: g } }, { schemaPath: f, parentSchema: k }) {
      let _ = k ? g : (0, t.str)`${g}/${p}`;
      return f && (_ = (0, t.str)`${_}${(0, n.getErrorPath)(f, n.Type.Str)}`), [d.schemaPath, _];
    }
    function w(p, { params: g, message: f }, k) {
      const { keyword: _, data: u, schemaValue: h, it: b } = p, { opts: C, propertyName: P, topSchemaRef: A, schemaPath: N } = b;
      k.push([d.keyword, _], [d.params, typeof g == "function" ? g(p) : g || (0, t._)`{}`]), C.messages && k.push([d.message, typeof f == "function" ? f(p) : f]), C.verbose && k.push([d.schema, h], [d.parentSchema, (0, t._)`${A}${N}`], [r.default.data, u]), P && k.push([d.propertyName, P]);
    }
  })(vr)), vr;
}
var Ko;
function Jc() {
  if (Ko) return ot;
  Ko = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.boolOrEmptySchema = ot.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ nr(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Ie(), r = {
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
var be = {}, st = {}, Go;
function ga() {
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
var Be = {}, Wo;
function ya() {
  if (Wo) return Be;
  Wo = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.shouldUseRule = Be.shouldUseGroup = Be.schemaHasRulesForType = void 0;
  function e({ schema: r, self: s }, o) {
    const i = s.RULES.types[o];
    return i && i !== !0 && t(r, i);
  }
  Be.schemaHasRulesForType = e;
  function t(r, s) {
    return s.rules.some((o) => n(r, o));
  }
  Be.shouldUseGroup = t;
  function n(r, s) {
    var o;
    return r[s.keyword] !== void 0 || ((o = s.definition.implements) === null || o === void 0 ? void 0 : o.some((i) => r[i] !== void 0));
  }
  return Be.shouldUseRule = n, Be;
}
var Jo;
function Xn() {
  if (Jo) return be;
  Jo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ ga(), t = /* @__PURE__ */ ya(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ se(), s = /* @__PURE__ */ ce();
  var o;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(o || (be.DataType = o = {}));
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
  be.getSchemaTypes = i;
  function a(f) {
    const k = Array.isArray(f) ? f : f ? [f] : [];
    if (k.every(e.isJSONType))
      return k;
    throw new Error("type must be JSONType or JSONType[]: " + k.join(","));
  }
  be.getJSONTypes = a;
  function c(f, k) {
    const { gen: _, data: u, opts: h } = f, b = d(k, h.coerceTypes), C = k.length > 0 && !(b.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(f, k[0]));
    if (C) {
      const P = $(k, u, h.strictNumbers, o.Wrong);
      _.if(P, () => {
        b.length ? m(f, k, b) : p(f);
      });
    }
    return C;
  }
  be.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function d(f, k) {
    return k ? f.filter((_) => l.has(_) || k === "array" && _ === "array") : [];
  }
  function m(f, k, _) {
    const { gen: u, data: h, opts: b } = f, C = u.let("dataType", (0, r._)`typeof ${h}`), P = u.let("coerced", (0, r._)`undefined`);
    b.coerceTypes === "array" && u.if((0, r._)`${C} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => u.assign(h, (0, r._)`${h}[0]`).assign(C, (0, r._)`typeof ${h}`).if($(k, h, b.strictNumbers), () => u.assign(P, h))), u.if((0, r._)`${P} !== undefined`);
    for (const N of _)
      (l.has(N) || N === "array" && b.coerceTypes === "array") && A(N);
    u.else(), p(f), u.endIf(), u.if((0, r._)`${P} !== undefined`, () => {
      u.assign(h, P), v(f, P);
    });
    function A(N) {
      switch (N) {
        case "string":
          u.elseIf((0, r._)`${C} == "number" || ${C} == "boolean"`).assign(P, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          u.elseIf((0, r._)`${C} == "boolean" || ${h} === null
              || (${C} == "string" && ${h} && ${h} == +${h})`).assign(P, (0, r._)`+${h}`);
          return;
        case "integer":
          u.elseIf((0, r._)`${C} === "boolean" || ${h} === null
              || (${C} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(P, (0, r._)`+${h}`);
          return;
        case "boolean":
          u.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(P, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(P, !0);
          return;
        case "null":
          u.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), u.assign(P, null);
          return;
        case "array":
          u.elseIf((0, r._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${h} === null`).assign(P, (0, r._)`[${h}]`);
      }
    }
  }
  function v({ gen: f, parentData: k, parentDataProperty: _ }, u) {
    f.if((0, r._)`${k} !== undefined`, () => f.assign((0, r._)`${k}[${_}]`, u));
  }
  function y(f, k, _, u = o.Correct) {
    const h = u === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let b;
    switch (f) {
      case "null":
        return (0, r._)`${k} ${h} null`;
      case "array":
        b = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        b = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        b = C((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        b = C();
        break;
      default:
        return (0, r._)`typeof ${k} ${h} ${f}`;
    }
    return u === o.Correct ? b : (0, r.not)(b);
    function C(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, P, _ ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  be.checkDataType = y;
  function $(f, k, _, u) {
    if (f.length === 1)
      return y(f[0], k, _, u);
    let h;
    const b = (0, s.toHash)(f);
    if (b.array && b.object) {
      const C = (0, r._)`typeof ${k} != "object"`;
      h = b.null ? C : (0, r._)`!${k} || ${C}`, delete b.null, delete b.array, delete b.object;
    } else
      h = r.nil;
    b.number && delete b.integer;
    for (const C in b)
      h = (0, r.and)(h, y(C, k, _, u));
    return h;
  }
  be.checkDataTypes = $;
  const w = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: k }) => typeof f == "string" ? (0, r._)`{type: ${f}}` : (0, r._)`{type: ${k}}`
  };
  function p(f) {
    const k = g(f);
    (0, n.reportError)(k, w);
  }
  be.reportTypeError = p;
  function g(f) {
    const { gen: k, data: _, schema: u } = f, h = (0, s.schemaRefOrVal)(f, u, "type");
    return {
      gen: k,
      keyword: "type",
      data: _,
      schema: u.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: u,
      params: {},
      it: f
    };
  }
  return be;
}
var At = {}, Yo;
function Yc() {
  if (Yo) return At;
  Yo = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.assignDefaults = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce();
  function n(s, o) {
    const { properties: i, items: a } = s.schema;
    if (o === "object" && i)
      for (const c in i)
        r(s, c, i[c].default);
    else o === "array" && Array.isArray(a) && a.forEach((c, l) => r(s, l, c.default));
  }
  At.assignDefaults = n;
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
  return At;
}
var ze = {}, ue = {}, Xo;
function De() {
  if (Xo) return ue;
  Xo = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.validateUnion = ue.validateArray = ue.usePattern = ue.callValidateCode = ue.schemaProperties = ue.allSchemaProperties = ue.noPropertyInData = ue.propertyInData = ue.isOwnProperty = ue.hasPropFunc = ue.reportMissingProp = ue.checkMissingProp = ue.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ ce();
  function s(f, k) {
    const { gen: _, data: u, it: h } = f;
    _.if(d(_, u, k, h.opts.ownProperties), () => {
      f.setParams({ missingProperty: (0, e._)`${k}` }, !0), f.error();
    });
  }
  ue.checkReportMissingProp = s;
  function o({ gen: f, data: k, it: { opts: _ } }, u, h) {
    return (0, e.or)(...u.map((b) => (0, e.and)(d(f, k, b, _.ownProperties), (0, e._)`${h} = ${b}`)));
  }
  ue.checkMissingProp = o;
  function i(f, k) {
    f.setParams({ missingProperty: k }, !0), f.error();
  }
  ue.reportMissingProp = i;
  function a(f) {
    return f.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ue.hasPropFunc = a;
  function c(f, k, _) {
    return (0, e._)`${a(f)}.call(${k}, ${_})`;
  }
  ue.isOwnProperty = c;
  function l(f, k, _, u) {
    const h = (0, e._)`${k}${(0, e.getProperty)(_)} !== undefined`;
    return u ? (0, e._)`${h} && ${c(f, k, _)}` : h;
  }
  ue.propertyInData = l;
  function d(f, k, _, u) {
    const h = (0, e._)`${k}${(0, e.getProperty)(_)} === undefined`;
    return u ? (0, e.or)(h, (0, e.not)(c(f, k, _))) : h;
  }
  ue.noPropertyInData = d;
  function m(f) {
    return f ? Object.keys(f).filter((k) => k !== "__proto__") : [];
  }
  ue.allSchemaProperties = m;
  function v(f, k) {
    return m(k).filter((_) => !(0, t.alwaysValidSchema)(f, k[_]));
  }
  ue.schemaProperties = v;
  function y({ schemaCode: f, data: k, it: { gen: _, topSchemaRef: u, schemaPath: h, errorPath: b }, it: C }, P, A, N) {
    const R = N ? (0, e._)`${f}, ${k}, ${u}${h}` : k, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, b)],
      [n.default.parentData, C.parentData],
      [n.default.parentDataProperty, C.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    C.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${R}, ${_.object(...D)}`;
    return A !== e.nil ? (0, e._)`${P}.call(${A}, ${j})` : (0, e._)`${P}(${j})`;
  }
  ue.callValidateCode = y;
  const $ = (0, e._)`new RegExp`;
  function w({ gen: f, it: { opts: k } }, _) {
    const u = k.unicodeRegExp ? "u" : "", { regExp: h } = k.code, b = h(_, u);
    return f.scopeValue("pattern", {
      key: b.toString(),
      ref: b,
      code: (0, e._)`${h.code === "new RegExp" ? $ : (0, r.useFunc)(f, h)}(${_}, ${u})`
    });
  }
  ue.usePattern = w;
  function p(f) {
    const { gen: k, data: _, keyword: u, it: h } = f, b = k.name("valid");
    if (h.allErrors) {
      const P = k.let("valid", !0);
      return C(() => k.assign(P, !1)), P;
    }
    return k.var(b, !0), C(() => k.break()), b;
    function C(P) {
      const A = k.const("len", (0, e._)`${_}.length`);
      k.forRange("i", 0, A, (N) => {
        f.subschema({
          keyword: u,
          dataProp: N,
          dataPropType: t.Type.Num
        }, b), k.if((0, e.not)(b), P);
      });
    }
  }
  ue.validateArray = p;
  function g(f) {
    const { gen: k, schema: _, keyword: u, it: h } = f;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((A) => (0, t.alwaysValidSchema)(h, A)) && !h.opts.unevaluated)
      return;
    const C = k.let("valid", !1), P = k.name("_valid");
    k.block(() => _.forEach((A, N) => {
      const R = f.subschema({
        keyword: u,
        schemaProp: N,
        compositeRule: !0
      }, P);
      k.assign(C, (0, e._)`${C} || ${P}`), f.mergeValidEvaluated(R, P) || k.if((0, e.not)(C));
    })), f.result(C, () => f.reset(), () => f.error(!0));
  }
  return ue.validateUnion = g, ue;
}
var Zo;
function Xc() {
  if (Zo) return ze;
  Zo = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.validateKeywordUsage = ze.validSchemaType = ze.funcKeywordCode = ze.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ De(), r = /* @__PURE__ */ nr();
  function s(v, y) {
    const { gen: $, keyword: w, schema: p, parentSchema: g, it: f } = v, k = y.macro.call(f.self, p, g, f), _ = l($, w, k);
    f.opts.validateSchema !== !1 && f.self.validateSchema(k, !0);
    const u = $.name("valid");
    v.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${f.errSchemaPath}/${w}`,
      topSchemaRef: _,
      compositeRule: !0
    }, u), v.pass(u, () => v.error(!0));
  }
  ze.macroKeywordCode = s;
  function o(v, y) {
    var $;
    const { gen: w, keyword: p, schema: g, parentSchema: f, $data: k, it: _ } = v;
    c(_, y);
    const u = !k && y.compile ? y.compile.call(_.self, g, f, _) : y.validate, h = l(w, p, u), b = w.let("valid");
    v.block$data(b, C), v.ok(($ = y.valid) !== null && $ !== void 0 ? $ : b);
    function C() {
      if (y.errors === !1)
        N(), y.modifying && i(v), R(() => v.error());
      else {
        const D = y.async ? P() : A();
        y.modifying && i(v), R(() => a(v, D));
      }
    }
    function P() {
      const D = w.let("ruleErrs", null);
      return w.try(() => N((0, e._)`await `), (j) => w.assign(b, !1).if((0, e._)`${j} instanceof ${_.ValidationError}`, () => w.assign(D, (0, e._)`${j}.errors`), () => w.throw(j))), D;
    }
    function A() {
      const D = (0, e._)`${h}.errors`;
      return w.assign(D, null), N(e.nil), D;
    }
    function N(D = y.async ? (0, e._)`await ` : e.nil) {
      const j = _.opts.passContext ? t.default.this : t.default.self, q = !("compile" in y && !k || y.schema === !1);
      w.assign(b, (0, e._)`${D}${(0, n.callValidateCode)(v, h, j, q)}`, y.modifying);
    }
    function R(D) {
      var j;
      w.if((0, e.not)((j = y.valid) !== null && j !== void 0 ? j : b), D);
    }
  }
  ze.funcKeywordCode = o;
  function i(v) {
    const { gen: y, data: $, it: w } = v;
    y.if(w.parentData, () => y.assign($, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(v, y) {
    const { gen: $ } = v;
    $.if((0, e._)`Array.isArray(${y})`, () => {
      $.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(v);
    }, () => v.error());
  }
  function c({ schemaEnv: v }, y) {
    if (y.async && !v.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(v, y, $) {
    if ($ === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return v.scopeValue("keyword", typeof $ == "function" ? { ref: $ } : { ref: $, code: (0, e.stringify)($) });
  }
  function d(v, y, $ = !1) {
    return !y.length || y.some((w) => w === "array" ? Array.isArray(v) : w === "object" ? v && typeof v == "object" && !Array.isArray(v) : typeof v == w || $ && typeof v > "u");
  }
  ze.validSchemaType = d;
  function m({ schema: v, opts: y, self: $, errSchemaPath: w }, p, g) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes(g) : p.keyword !== g)
      throw new Error("ajv implementation error");
    const f = p.dependencies;
    if (f?.some((k) => !Object.prototype.hasOwnProperty.call(v, k)))
      throw new Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
    if (p.validateSchema && !p.validateSchema(v[g])) {
      const _ = `keyword "${g}" value is invalid at path "${w}": ` + $.errorsText(p.validateSchema.errors);
      if (y.validateSchema === "log")
        $.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return ze.validateKeywordUsage = m, ze;
}
var Ue = {}, Qo;
function Zc() {
  if (Qo) return Ue;
  Qo = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.extendSubschemaMode = Ue.extendSubschemaData = Ue.getSubschema = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce();
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
  Ue.getSubschema = n;
  function r(o, i, { dataProp: a, dataPropType: c, data: l, dataTypes: d, propertyName: m }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: v } = i;
    if (a !== void 0) {
      const { errorPath: $, dataPathArr: w, opts: p } = i, g = v.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      y(g), o.errorPath = (0, e.str)`${$}${(0, t.getErrorPath)(a, c, p.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...w, o.parentDataProperty];
    }
    if (l !== void 0) {
      const $ = l instanceof e.Name ? l : v.let("data", l, !0);
      y($), m !== void 0 && (o.propertyName = m);
    }
    d && (o.dataTypes = d);
    function y($) {
      o.data = $, o.dataLevel = i.dataLevel + 1, o.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), o.parentData = i.data, o.dataNames = [...i.dataNames, $];
    }
  }
  Ue.extendSubschemaData = r;
  function s(o, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: d }) {
    c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), d !== void 0 && (o.allErrors = d), o.jtdDiscriminator = i, o.jtdMetadata = a;
  }
  return Ue.extendSubschemaMode = s, Ue;
}
var we = {}, kr, es;
function $a() {
  return es || (es = 1, kr = function e(t, n) {
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
  }), kr;
}
var Cr = { exports: {} }, ts;
function Qc() {
  if (ts) return Cr.exports;
  ts = 1;
  var e = Cr.exports = function(r, s, o) {
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
        var $ = i[y];
        if (Array.isArray($)) {
          if (y in e.arrayKeywords)
            for (var w = 0; w < $.length; w++)
              t(r, s, o, $[w], a + "/" + y + "/" + w, c, a, y, i, w);
        } else if (y in e.propsKeywords) {
          if ($ && typeof $ == "object")
            for (var p in $)
              t(r, s, o, $[p], a + "/" + y + "/" + n(p), c, a, y, i, p);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, s, o, $, a + "/" + y, c, a, y, i);
      }
      o(i, a, c, l, d, m, v);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Cr.exports;
}
var ns;
function rr() {
  if (ns) return we;
  ns = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.getSchemaRefs = we.resolveUrl = we.normalizeId = we._getFullPath = we.getFullPath = we.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = $a(), n = Qc(), r = /* @__PURE__ */ new Set([
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
  function s(w, p = !0) {
    return typeof w == "boolean" ? !0 : p === !0 ? !i(w) : p ? a(w) <= p : !1;
  }
  we.inlineRef = s;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(w) {
    for (const p in w) {
      if (o.has(p))
        return !0;
      const g = w[p];
      if (Array.isArray(g) && g.some(i) || typeof g == "object" && i(g))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let p = 0;
    for (const g in w) {
      if (g === "$ref")
        return 1 / 0;
      if (p++, !r.has(g) && (typeof w[g] == "object" && (0, e.eachItem)(w[g], (f) => p += a(f)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function c(w, p = "", g) {
    g !== !1 && (p = m(p));
    const f = w.parse(p);
    return l(w, f);
  }
  we.getFullPath = c;
  function l(w, p) {
    return w.serialize(p).split("#")[0] + "#";
  }
  we._getFullPath = l;
  const d = /#\/?$/;
  function m(w) {
    return w ? w.replace(d, "") : "";
  }
  we.normalizeId = m;
  function v(w, p, g) {
    return g = m(g), w.resolve(p, g);
  }
  we.resolveUrl = v;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function $(w, p) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: g, uriResolver: f } = this.opts, k = m(w[g] || p), _ = { "": k }, u = c(f, k, !1), h = {}, b = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (A, N, R, D) => {
      if (D === void 0)
        return;
      const j = u + N;
      let q = _[D];
      typeof A[g] == "string" && (q = J.call(this, A[g])), re.call(this, A.$anchor), re.call(this, A.$dynamicAnchor), _[N] = q;
      function J(Y) {
        const oe = this.opts.uriResolver.resolve;
        if (Y = m(q ? oe(q, Y) : Y), b.has(Y))
          throw P(Y);
        b.add(Y);
        let W = this.refs[Y];
        return typeof W == "string" && (W = this.refs[W]), typeof W == "object" ? C(A, W.schema, Y) : Y !== m(j) && (Y[0] === "#" ? (C(A, h[Y], Y), h[Y] = A) : this.refs[Y] = j), Y;
      }
      function re(Y) {
        if (typeof Y == "string") {
          if (!y.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          J.call(this, `#${Y}`);
        }
      }
    }), h;
    function C(A, N, R) {
      if (N !== void 0 && !t(A, N))
        throw P(R);
    }
    function P(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return we.getSchemaRefs = $, we;
}
var rs;
function or() {
  if (rs) return Ve;
  rs = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.getData = Ve.KeywordCxt = Ve.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Jc(), t = /* @__PURE__ */ Xn(), n = /* @__PURE__ */ ya(), r = /* @__PURE__ */ Xn(), s = /* @__PURE__ */ Yc(), o = /* @__PURE__ */ Xc(), i = /* @__PURE__ */ Zc(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Ie(), l = /* @__PURE__ */ rr(), d = /* @__PURE__ */ ce(), m = /* @__PURE__ */ nr();
  function v(E) {
    if (u(E) && (b(E), _(E))) {
      p(E);
      return;
    }
    y(E, () => (0, e.topBoolOrEmptySchema)(E));
  }
  Ve.validateFunctionCode = v;
  function y({ gen: E, validateName: M, schema: I, schemaEnv: V, opts: X }, te) {
    X.code.es5 ? E.func(M, (0, a._)`${c.default.data}, ${c.default.valCxt}`, V.$async, () => {
      E.code((0, a._)`"use strict"; ${f(I, X)}`), w(E, X), E.code(te);
    }) : E.func(M, (0, a._)`${c.default.data}, ${$(X)}`, V.$async, () => E.code(f(I, X)).code(te));
  }
  function $(E) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${E.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(E, M) {
    E.if(c.default.valCxt, () => {
      E.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), E.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), E.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), E.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), M.dynamicRef && E.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      E.var(c.default.instancePath, (0, a._)`""`), E.var(c.default.parentData, (0, a._)`undefined`), E.var(c.default.parentDataProperty, (0, a._)`undefined`), E.var(c.default.rootData, c.default.data), M.dynamicRef && E.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function p(E) {
    const { schema: M, opts: I, gen: V } = E;
    y(E, () => {
      I.$comment && M.$comment && D(E), A(E), V.let(c.default.vErrors, null), V.let(c.default.errors, 0), I.unevaluated && g(E), C(E), j(E);
    });
  }
  function g(E) {
    const { gen: M, validateName: I } = E;
    E.evaluated = M.const("evaluated", (0, a._)`${I}.evaluated`), M.if((0, a._)`${E.evaluated}.dynamicProps`, () => M.assign((0, a._)`${E.evaluated}.props`, (0, a._)`undefined`)), M.if((0, a._)`${E.evaluated}.dynamicItems`, () => M.assign((0, a._)`${E.evaluated}.items`, (0, a._)`undefined`));
  }
  function f(E, M) {
    const I = typeof E == "object" && E[M.schemaId];
    return I && (M.code.source || M.code.process) ? (0, a._)`/*# sourceURL=${I} */` : a.nil;
  }
  function k(E, M) {
    if (u(E) && (b(E), _(E))) {
      h(E, M);
      return;
    }
    (0, e.boolOrEmptySchema)(E, M);
  }
  function _({ schema: E, self: M }) {
    if (typeof E == "boolean")
      return !E;
    for (const I in E)
      if (M.RULES.all[I])
        return !0;
    return !1;
  }
  function u(E) {
    return typeof E.schema != "boolean";
  }
  function h(E, M) {
    const { schema: I, gen: V, opts: X } = E;
    X.$comment && I.$comment && D(E), N(E), R(E);
    const te = V.const("_errs", c.default.errors);
    C(E, te), V.var(M, (0, a._)`${te} === ${c.default.errors}`);
  }
  function b(E) {
    (0, d.checkUnknownRules)(E), P(E);
  }
  function C(E, M) {
    if (E.opts.jtd)
      return J(E, [], !1, M);
    const I = (0, t.getSchemaTypes)(E.schema), V = (0, t.coerceAndCheckDataType)(E, I);
    J(E, I, !V, M);
  }
  function P(E) {
    const { schema: M, errSchemaPath: I, opts: V, self: X } = E;
    M.$ref && V.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(M, X.RULES) && X.logger.warn(`$ref: keywords ignored in schema at path "${I}"`);
  }
  function A(E) {
    const { schema: M, opts: I } = E;
    M.default !== void 0 && I.useDefaults && I.strictSchema && (0, d.checkStrictMode)(E, "default is ignored in the schema root");
  }
  function N(E) {
    const M = E.schema[E.opts.schemaId];
    M && (E.baseId = (0, l.resolveUrl)(E.opts.uriResolver, E.baseId, M));
  }
  function R(E) {
    if (E.schema.$async && !E.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: E, schemaEnv: M, schema: I, errSchemaPath: V, opts: X }) {
    const te = I.$comment;
    if (X.$comment === !0)
      E.code((0, a._)`${c.default.self}.logger.log(${te})`);
    else if (typeof X.$comment == "function") {
      const le = (0, a.str)`${V}/$comment`, me = E.scopeValue("root", { ref: M.root });
      E.code((0, a._)`${c.default.self}.opts.$comment(${te}, ${le}, ${me}.schema)`);
    }
  }
  function j(E) {
    const { gen: M, schemaEnv: I, validateName: V, ValidationError: X, opts: te } = E;
    I.$async ? M.if((0, a._)`${c.default.errors} === 0`, () => M.return(c.default.data), () => M.throw((0, a._)`new ${X}(${c.default.vErrors})`)) : (M.assign((0, a._)`${V}.errors`, c.default.vErrors), te.unevaluated && q(E), M.return((0, a._)`${c.default.errors} === 0`));
  }
  function q({ gen: E, evaluated: M, props: I, items: V }) {
    I instanceof a.Name && E.assign((0, a._)`${M}.props`, I), V instanceof a.Name && E.assign((0, a._)`${M}.items`, V);
  }
  function J(E, M, I, V) {
    const { gen: X, schema: te, data: le, allErrors: me, opts: pe, self: he } = E, { RULES: fe } = he;
    if (te.$ref && (pe.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(te, fe))) {
      X.block(() => ee(E, "$ref", fe.all.$ref.definition));
      return;
    }
    pe.jtd || Y(E, M), X.block(() => {
      for (const xe of fe.rules)
        Ye(xe);
      Ye(fe.post);
    });
    function Ye(xe) {
      (0, n.shouldUseGroup)(te, xe) && (xe.type ? (X.if((0, r.checkDataType)(xe.type, le, pe.strictNumbers)), re(E, xe), M.length === 1 && M[0] === xe.type && I && (X.else(), (0, r.reportTypeError)(E)), X.endIf()) : re(E, xe), me || X.if((0, a._)`${c.default.errors} === ${V || 0}`));
    }
  }
  function re(E, M) {
    const { gen: I, schema: V, opts: { useDefaults: X } } = E;
    X && (0, s.assignDefaults)(E, M.type), I.block(() => {
      for (const te of M.rules)
        (0, n.shouldUseRule)(V, te) && ee(E, te.keyword, te.definition, M.type);
    });
  }
  function Y(E, M) {
    E.schemaEnv.meta || !E.opts.strictTypes || (oe(E, M), E.opts.allowUnionTypes || W(E, M), O(E, E.dataTypes));
  }
  function oe(E, M) {
    if (M.length) {
      if (!E.dataTypes.length) {
        E.dataTypes = M;
        return;
      }
      M.forEach((I) => {
        F(E.dataTypes, I) || x(E, `type "${I}" not allowed by context "${E.dataTypes.join(",")}"`);
      }), S(E, M);
    }
  }
  function W(E, M) {
    M.length > 1 && !(M.length === 2 && M.includes("null")) && x(E, "use allowUnionTypes to allow union type keyword");
  }
  function O(E, M) {
    const I = E.self.RULES.all;
    for (const V in I) {
      const X = I[V];
      if (typeof X == "object" && (0, n.shouldUseRule)(E.schema, X)) {
        const { type: te } = X.definition;
        te.length && !te.some((le) => K(M, le)) && x(E, `missing type "${te.join(",")}" for keyword "${V}"`);
      }
    }
  }
  function K(E, M) {
    return E.includes(M) || M === "number" && E.includes("integer");
  }
  function F(E, M) {
    return E.includes(M) || M === "integer" && E.includes("number");
  }
  function S(E, M) {
    const I = [];
    for (const V of E.dataTypes)
      F(M, V) ? I.push(V) : M.includes("integer") && V === "number" && I.push("integer");
    E.dataTypes = I;
  }
  function x(E, M) {
    const I = E.schemaEnv.baseId + E.errSchemaPath;
    M += ` at "${I}" (strictTypes)`, (0, d.checkStrictMode)(E, M, E.opts.strictTypes);
  }
  class L {
    constructor(M, I, V) {
      if ((0, o.validateKeywordUsage)(M, I, V), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = V, this.data = M.data, this.schema = M.schema[V], this.$data = I.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(M, this.schema, V, this.$data), this.schemaType = I.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = I, this.$data)
        this.schemaCode = M.gen.const("vSchema", B(this.$data, M));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, I.schemaType, I.allowUndefined))
        throw new Error(`${V} value must be ${JSON.stringify(I.schemaType)}`);
      ("code" in I ? I.trackErrors : I.errors !== !1) && (this.errsCount = M.gen.const("_errs", c.default.errors));
    }
    result(M, I, V) {
      this.failResult((0, a.not)(M), I, V);
    }
    failResult(M, I, V) {
      this.gen.if(M), V ? V() : this.error(), I ? (this.gen.else(), I(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(M, I) {
      this.failResult((0, a.not)(M), void 0, I);
    }
    fail(M) {
      if (M === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(M), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(M) {
      if (!this.$data)
        return this.fail(M);
      const { schemaCode: I } = this;
      this.fail((0, a._)`${I} !== undefined && (${(0, a.or)(this.invalid$data(), M)})`);
    }
    error(M, I, V) {
      if (I) {
        this.setParams(I), this._error(M, V), this.setParams({});
        return;
      }
      this._error(M, V);
    }
    _error(M, I) {
      (M ? m.reportExtraError : m.reportError)(this, this.def.error, I);
    }
    $dataError() {
      (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, m.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(M) {
      this.allErrors || this.gen.if(M);
    }
    setParams(M, I) {
      I ? Object.assign(this.params, M) : this.params = M;
    }
    block$data(M, I, V = a.nil) {
      this.gen.block(() => {
        this.check$data(M, V), I();
      });
    }
    check$data(M = a.nil, I = a.nil) {
      if (!this.$data)
        return;
      const { gen: V, schemaCode: X, schemaType: te, def: le } = this;
      V.if((0, a.or)((0, a._)`${X} === undefined`, I)), M !== a.nil && V.assign(M, !0), (te.length || le.validateSchema) && (V.elseIf(this.invalid$data()), this.$dataError(), M !== a.nil && V.assign(M, !1)), V.else();
    }
    invalid$data() {
      const { gen: M, schemaCode: I, schemaType: V, def: X, it: te } = this;
      return (0, a.or)(le(), me());
      function le() {
        if (V.length) {
          if (!(I instanceof a.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(V) ? V : [V];
          return (0, a._)`${(0, r.checkDataTypes)(pe, I, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function me() {
        if (X.validateSchema) {
          const pe = M.scopeValue("validate$data", { ref: X.validateSchema });
          return (0, a._)`!${pe}(${I})`;
        }
        return a.nil;
      }
    }
    subschema(M, I) {
      const V = (0, i.getSubschema)(this.it, M);
      (0, i.extendSubschemaData)(V, this.it, M), (0, i.extendSubschemaMode)(V, M);
      const X = { ...this.it, ...V, items: void 0, props: void 0 };
      return k(X, I), X;
    }
    mergeEvaluated(M, I) {
      const { it: V, gen: X } = this;
      V.opts.unevaluated && (V.props !== !0 && M.props !== void 0 && (V.props = d.mergeEvaluated.props(X, M.props, V.props, I)), V.items !== !0 && M.items !== void 0 && (V.items = d.mergeEvaluated.items(X, M.items, V.items, I)));
    }
    mergeValidEvaluated(M, I) {
      const { it: V, gen: X } = this;
      if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
        return X.if(I, () => this.mergeEvaluated(M, a.Name)), !0;
    }
  }
  Ve.KeywordCxt = L;
  function ee(E, M, I, V) {
    const X = new L(E, I, M);
    "code" in I ? I.code(X, V) : X.$data && I.validate ? (0, o.funcKeywordCode)(X, I) : "macro" in I ? (0, o.macroKeywordCode)(X, I) : (I.compile || I.validate) && (0, o.funcKeywordCode)(X, I);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function B(E, { dataLevel: M, dataNames: I, dataPathArr: V }) {
    let X, te;
    if (E === "")
      return c.default.rootData;
    if (E[0] === "/") {
      if (!G.test(E))
        throw new Error(`Invalid JSON-pointer: ${E}`);
      X = E, te = c.default.rootData;
    } else {
      const he = ne.exec(E);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${E}`);
      const fe = +he[1];
      if (X = he[2], X === "#") {
        if (fe >= M)
          throw new Error(pe("property/index", fe));
        return V[M - fe];
      }
      if (fe > M)
        throw new Error(pe("data", fe));
      if (te = I[M - fe], !X)
        return te;
    }
    let le = te;
    const me = X.split("/");
    for (const he of me)
      he && (te = (0, a._)`${te}${(0, a.getProperty)((0, d.unescapeJsonPointer)(he))}`, le = (0, a._)`${le} && ${te}`);
    return le;
    function pe(he, fe) {
      return `Cannot access ${he} ${fe} levels up, current level is ${M}`;
    }
  }
  return Ve.getData = B, Ve;
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
function sr() {
  if (ss) return Ht;
  ss = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rr();
  class t extends Error {
    constructor(r, s, o, i) {
      super(i || `can't resolve reference ${o} from id ${s}`), this.missingRef = (0, e.resolveUrl)(r, s, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Ht.default = t, Ht;
}
var Se = {}, is;
function ir() {
  if (is) return Se;
  is = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.resolveSchema = Se.getCompilingSchema = Se.resolveRef = Se.compileSchema = Se.SchemaEnv = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ lo(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ rr(), s = /* @__PURE__ */ ce(), o = /* @__PURE__ */ or();
  class i {
    constructor(g) {
      var f;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof g.schema == "object" && (k = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (f = g.baseId) !== null && f !== void 0 ? f : (0, r.normalizeId)(k?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  Se.SchemaEnv = i;
  function a(p) {
    const g = d.call(this, p);
    if (g)
      return g;
    const f = (0, r.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: k, lines: _ } = this.opts.code, { ownProperties: u } = this.opts, h = new e.CodeGen(this.scope, { es5: k, lines: _, ownProperties: u });
    let b;
    p.$async && (b = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = h.scopeName("validate");
    p.validateName = C;
    const P = {
      gen: h,
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: p.schema, code: (0, e.stringify)(p.schema) } : { ref: p.schema }),
      validateName: C,
      ValidationError: b,
      schema: p.schema,
      schemaEnv: p,
      rootId: f,
      baseId: p.baseId || f,
      schemaPath: e.nil,
      errSchemaPath: p.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(p), (0, o.validateFunctionCode)(P), h.optimize(this.opts.code.optimize);
      const N = h.toString();
      A = `${h.scopeRefs(n.default.scope)}return ${N}`, this.opts.code.process && (A = this.opts.code.process(A, p));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(C, { ref: D }), D.errors = null, D.schema = p.schema, D.schemaEnv = p, p.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: C, validateCode: N, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: j, items: q } = P;
        D.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: q instanceof e.Name ? void 0 : q,
          dynamicProps: j instanceof e.Name,
          dynamicItems: q instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return p.validate = D, p;
    } catch (N) {
      throw delete p.validate, delete p.validateName, A && this.logger.error("Error compiling schema, function code:", A), N;
    } finally {
      this._compilations.delete(p);
    }
  }
  Se.compileSchema = a;
  function c(p, g, f) {
    var k;
    f = (0, r.resolveUrl)(this.opts.uriResolver, g, f);
    const _ = p.refs[f];
    if (_)
      return _;
    let u = v.call(this, p, f);
    if (u === void 0) {
      const h = (k = p.localRefs) === null || k === void 0 ? void 0 : k[f], { schemaId: b } = this.opts;
      h && (u = new i({ schema: h, schemaId: b, root: p, baseId: g }));
    }
    if (u !== void 0)
      return p.refs[f] = l.call(this, u);
  }
  Se.resolveRef = c;
  function l(p) {
    return (0, r.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : a.call(this, p);
  }
  function d(p) {
    for (const g of this._compilations)
      if (m(g, p))
        return g;
  }
  Se.getCompilingSchema = d;
  function m(p, g) {
    return p.schema === g.schema && p.root === g.root && p.baseId === g.baseId;
  }
  function v(p, g) {
    let f;
    for (; typeof (f = this.refs[g]) == "string"; )
      g = f;
    return f || this.schemas[g] || y.call(this, p, g);
  }
  function y(p, g) {
    const f = this.opts.uriResolver.parse(g), k = (0, r._getFullPath)(this.opts.uriResolver, f);
    let _ = (0, r.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && k === _)
      return w.call(this, f, p);
    const u = (0, r.normalizeId)(k), h = this.refs[u] || this.schemas[u];
    if (typeof h == "string") {
      const b = y.call(this, p, h);
      return typeof b?.schema != "object" ? void 0 : w.call(this, f, b);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), u === (0, r.normalizeId)(g)) {
        const { schema: b } = h, { schemaId: C } = this.opts, P = b[C];
        return P && (_ = (0, r.resolveUrl)(this.opts.uriResolver, _, P)), new i({ schema: b, schemaId: C, root: p, baseId: _ });
      }
      return w.call(this, f, h);
    }
  }
  Se.resolveSchema = y;
  const $ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(p, { baseId: g, schema: f, root: k }) {
    var _;
    if (((_ = p.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const b of p.fragment.slice(1).split("/")) {
      if (typeof f == "boolean")
        return;
      const C = f[(0, s.unescapeFragment)(b)];
      if (C === void 0)
        return;
      f = C;
      const P = typeof f == "object" && f[this.opts.schemaId];
      !$.has(b) && P && (g = (0, r.resolveUrl)(this.opts.uriResolver, g, P));
    }
    let u;
    if (typeof f != "boolean" && f.$ref && !(0, s.schemaHasRulesButRef)(f, this.RULES)) {
      const b = (0, r.resolveUrl)(this.opts.uriResolver, g, f.$ref);
      u = y.call(this, k, b);
    }
    const { schemaId: h } = this.opts;
    if (u = u || new i({ schema: f, schemaId: h, root: k, baseId: g }), u.schema !== u.root.schema)
      return u;
  }
  return Se;
}
const el = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", tl = "Meta-schema for $data reference (JSON AnySchema extension proposal)", nl = "object", rl = ["$data"], ol = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, sl = !1, il = {
  $id: el,
  description: tl,
  type: nl,
  required: rl,
  properties: ol,
  additionalProperties: sl
};
var Kt = {}, Pt = { exports: {} }, Er, as;
function ba() {
  if (as) return Er;
  as = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(u) {
    let h = "", b = 0, C = 0;
    for (C = 0; C < u.length; C++)
      if (b = u[C].charCodeAt(0), b !== 48) {
        if (!(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
          return "";
        h += u[C];
        break;
      }
    for (C += 1; C < u.length; C++) {
      if (b = u[C].charCodeAt(0), !(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
        return "";
      h += u[C];
    }
    return h;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(u) {
    return u.length = 0, !0;
  }
  function c(u, h, b) {
    if (u.length) {
      const C = o(u);
      if (C !== "")
        h.push(C);
      else
        return b.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function l(u) {
    let h = 0;
    const b = { error: !1, address: "", zone: "" }, C = [], P = [];
    let A = !1, N = !1, R = c;
    for (let D = 0; D < u.length; D++) {
      const j = u[D];
      if (!(j === "[" || j === "]"))
        if (j === ":") {
          if (A === !0 && (N = !0), !R(P, C, b))
            break;
          if (++h > 7) {
            b.error = !0;
            break;
          }
          D > 0 && u[D - 1] === ":" && (A = !0), C.push(":");
          continue;
        } else if (j === "%") {
          if (!R(P, C, b))
            break;
          R = a;
        } else {
          P.push(j);
          continue;
        }
    }
    return P.length && (R === a ? b.zone = P.join("") : N ? C.push(P.join("")) : C.push(o(P))), b.address = C.join(""), b;
  }
  function d(u) {
    if (m(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const h = l(u);
    if (h.error)
      return { host: u, isIPV6: !1 };
    {
      let b = h.address, C = h.address;
      return h.zone && (b += "%" + h.zone, C += "%25" + h.zone), { host: b, isIPV6: !0, escapedHost: C };
    }
  }
  function m(u, h) {
    let b = 0;
    for (let C = 0; C < u.length; C++)
      u[C] === h && b++;
    return b;
  }
  function v(u) {
    let h = u;
    const b = [];
    let C = -1, P = 0;
    for (; P = h.length; ) {
      if (P === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          b.push("/");
          break;
        } else {
          b.push(h);
          break;
        }
      } else if (P === 2) {
        if (h[0] === ".") {
          if (h[1] === ".")
            break;
          if (h[1] === "/") {
            h = h.slice(2);
            continue;
          }
        } else if (h[0] === "/" && (h[1] === "." || h[1] === "/")) {
          b.push("/");
          break;
        }
      } else if (P === 3 && h === "/..") {
        b.length !== 0 && b.pop(), b.push("/");
        break;
      }
      if (h[0] === ".") {
        if (h[1] === ".") {
          if (h[2] === "/") {
            h = h.slice(3);
            continue;
          }
        } else if (h[1] === "/") {
          h = h.slice(2);
          continue;
        }
      } else if (h[0] === "/" && h[1] === ".") {
        if (h[2] === "/") {
          h = h.slice(2);
          continue;
        } else if (h[2] === "." && h[3] === "/") {
          h = h.slice(3), b.length !== 0 && b.pop();
          continue;
        }
      }
      if ((C = h.indexOf("/", 1)) === -1) {
        b.push(h);
        break;
      } else
        b.push(h.slice(0, C)), h = h.slice(C);
    }
    return b.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, $ = /[@/?#:]/g, w = /[@/?#]/g;
  function p(u, h) {
    const b = h ? w : $;
    return b.lastIndex = 0, u.replace(b, (C) => y[C]);
  }
  function g(u, h = !1) {
    if (u.indexOf("%") === -1)
      return u;
    let b = "";
    for (let C = 0; C < u.length; C++) {
      if (u[C] === "%" && C + 2 < u.length) {
        const P = u.slice(C + 1, C + 3);
        if (n(P)) {
          const A = P.toUpperCase(), N = String.fromCharCode(parseInt(A, 16));
          h && r(N) ? b += N : b += "%" + A, C += 2;
          continue;
        }
      }
      b += u[C];
    }
    return b;
  }
  function f(u) {
    let h = "";
    for (let b = 0; b < u.length; b++) {
      if (u[b] === "%" && b + 2 < u.length) {
        const C = u.slice(b + 1, b + 3);
        if (n(C)) {
          const P = C.toUpperCase(), A = String.fromCharCode(parseInt(P, 16));
          A !== "." && r(A) ? h += A : h += "%" + P, b += 2;
          continue;
        }
      }
      s(u[b]) ? h += u[b] : h += escape(u[b]);
    }
    return h;
  }
  function k(u) {
    let h = "";
    for (let b = 0; b < u.length; b++) {
      if (u[b] === "%" && b + 2 < u.length) {
        const C = u.slice(b + 1, b + 3);
        if (n(C)) {
          h += "%" + C.toUpperCase(), b += 2;
          continue;
        }
      }
      h += escape(u[b]);
    }
    return h;
  }
  function _(u) {
    const h = [];
    if (u.userinfo !== void 0 && (h.push(u.userinfo), h.push("@")), u.host !== void 0) {
      let b = unescape(u.host);
      if (!t(b)) {
        const C = d(b);
        C.isIPV6 === !0 ? b = `[${C.escapedHost}]` : b = p(b, !1);
      }
      h.push(b);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (h.push(":"), h.push(String(u.port))), h.length ? h.join("") : void 0;
  }
  return Er = {
    nonSimpleDomain: i,
    recomposeAuthority: _,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: g,
    normalizePathEncoding: f,
    escapePreservingEscapes: k,
    removeDotSegments: v,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: d,
    stringArrayToHexStripped: o
  }, Er;
}
var xr, cs;
function al() {
  if (cs) return xr;
  cs = 1;
  const { isUUID: e } = ba(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
    const h = String(u.scheme).toLowerCase() === "https";
    return (u.port === (h ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = s(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (s(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [h, b] = u.resourceName.split("?");
      u.path = h && h !== "/" ? h : void 0, u.query = b, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, h) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const b = u.path.match(t);
    if (b) {
      const C = h.scheme || u.scheme || "urn";
      u.nid = b[1].toLowerCase(), u.nss = b[2];
      const P = `${C}:${h.nid || u.nid}`, A = _(P);
      u.path = void 0, A && (u = A.parse(u, h));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function d(u, h) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const b = h.scheme || u.scheme || "urn", C = u.nid.toLowerCase(), P = `${b}:${h.nid || C}`, A = _(P);
    A && (u = A.serialize(u, h));
    const N = u, R = u.nss;
    return N.path = `${C || h.nid}:${R}`, h.skipEscape = !0, N;
  }
  function m(u, h) {
    const b = u;
    return b.uuid = b.nss, b.nss = void 0, !h.tolerant && (!b.uuid || !e(b.uuid)) && (b.error = b.error || "UUID is not valid."), b;
  }
  function v(u) {
    const h = u;
    return h.nss = (u.uuid || "").toLowerCase(), h;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: i
    }
  ), $ = (
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
  ), p = (
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
      https: $,
      ws: w,
      wss: p,
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
  return xr = {
    wsIsSecure: s,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: _
  }, xr;
}
var ls;
function cl() {
  if (ls) return Pt.exports;
  ls = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: s, escapePreservingEscapes: o, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: c } = ba(), { SCHEMES: l, getSchemeHandler: d } = al();
  function m(P, A) {
    return typeof P == "string" ? P = /** @type {T} */
    u(P, A) : typeof P == "object" && (P = /** @type {T} */
    _(w(P, A), A)), P;
  }
  function v(P, A, N) {
    const R = N ? Object.assign({ scheme: "null" }, N) : { scheme: "null" }, D = y(_(P, R), _(A, R), R, !0);
    return R.skipEscape = !0, w(D, R);
  }
  function y(P, A, N, R) {
    const D = {};
    return R || (P = _(w(P, N), N), A = _(w(A, N), N)), N = N || {}, !N.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? D.path = "/" + A.path : P.path ? D.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = P.path, A.query !== void 0 ? D.query = A.query : D.query = P.query), D.userinfo = P.userinfo, D.host = P.host, D.port = P.port), D.scheme = P.scheme), D.fragment = A.fragment, D;
  }
  function $(P, A, N) {
    const R = b(P, N), D = b(A, N);
    return R !== void 0 && D !== void 0 && R.toLowerCase() === D.toLowerCase();
  }
  function w(P, A) {
    const N = {
      host: P.host,
      scheme: P.scheme,
      userinfo: P.userinfo,
      port: P.port,
      path: P.path,
      query: P.query,
      nid: P.nid,
      nss: P.nss,
      uuid: P.uuid,
      fragment: P.fragment,
      reference: P.reference,
      resourceName: P.resourceName,
      secure: P.secure,
      error: ""
    }, R = Object.assign({}, A), D = [], j = d(R.scheme || N.scheme);
    j && j.serialize && j.serialize(N, R), N.path !== void 0 && (R.skipEscape ? N.path = r(N.path) : (N.path = o(N.path), N.scheme !== void 0 && (N.path = N.path.split("%3A").join(":")))), R.reference !== "suffix" && N.scheme && D.push(N.scheme, ":");
    const q = n(N);
    if (q !== void 0 && (R.reference !== "suffix" && D.push("//"), D.push(q), N.path && N.path[0] !== "/" && D.push("/")), N.path !== void 0) {
      let J = N.path;
      !R.absolutePath && (!j || !j.absolutePath) && (J = t(J)), q === void 0 && J[0] === "/" && J[1] === "/" && (J = "/%2F" + J.slice(2)), D.push(J);
    }
    return N.query !== void 0 && D.push("?", N.query), N.fragment !== void 0 && D.push("#", N.fragment), D.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function f(P, A) {
    if (A[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function k(P, A) {
    const N = Object.assign({}, A), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, j = !1;
    N.reference === "suffix" && (N.scheme ? P = N.scheme + ":" + P : P = "//" + P);
    const q = P.match(g);
    q !== null && q[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", D = !0);
    const J = P.match(p);
    if (J) {
      R.scheme = J[1], R.userinfo = J[3], R.host = J[4], R.port = parseInt(J[5], 10), R.path = J[6] || "", R.query = J[7], R.fragment = J[8], isNaN(R.port) && (R.port = J[5]);
      const re = f(R, J);
      if (re !== void 0 && (R.error = R.error || re, D = !0), R.host)
        if (a(R.host) === !1) {
          const W = e(R.host);
          R.host = W.host.toLowerCase(), j = W.isIPV6;
        } else
          j = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", N.reference && N.reference !== "suffix" && N.reference !== R.reference && (R.error = R.error || "URI is not a " + N.reference + " reference.");
      const Y = d(N.scheme || R.scheme);
      if (!N.unicodeSupport && (!Y || !Y.unicodeSupport) && R.host && (N.domainHost || Y && Y.domainHost) && j === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (oe) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + oe;
        }
      if ((!Y || Y && !Y.skipNormalize) && (P.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = i(unescape(R.host), j))), R.path && (R.path = s(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      Y && Y.parse && Y.parse(R, N);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: D };
  }
  function _(P, A) {
    return k(P, A).parsed;
  }
  function u(P, A) {
    return h(P, A).normalized;
  }
  function h(P, A) {
    const { parsed: N, malformedAuthorityOrPort: R } = k(P, A);
    return {
      normalized: R ? P : w(N, A),
      malformedAuthorityOrPort: R
    };
  }
  function b(P, A) {
    if (typeof P == "string") {
      const { normalized: N, malformedAuthorityOrPort: R } = h(P, A);
      return R ? void 0 : N;
    }
    if (typeof P == "object")
      return w(P, A);
  }
  const C = {
    SCHEMES: l,
    normalize: m,
    resolve: v,
    resolveComponent: y,
    equal: $,
    serialize: w,
    parse: _
  };
  return Pt.exports = C, Pt.exports.default = C, Pt.exports.fastUri = C, Pt.exports;
}
var ds;
function ll() {
  if (ds) return Kt;
  ds = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = cl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Kt.default = e, Kt;
}
var us;
function dl() {
  return us || (us = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ or();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ se();
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
    const r = /* @__PURE__ */ lo(), s = /* @__PURE__ */ sr(), o = /* @__PURE__ */ ga(), i = /* @__PURE__ */ ir(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ rr(), l = /* @__PURE__ */ Xn(), d = /* @__PURE__ */ ce(), m = il, v = /* @__PURE__ */ ll(), y = (W, O) => new RegExp(W, O);
    y.code = "new RegExp";
    const $ = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
    ]), p = {
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
      var O, K, F, S, x, L, ee, G, ne, B, E, M, I, V, X, te, le, me, pe, he, fe, Ye, xe, mr, gr;
      const Et = W.strict, yr = (O = W.code) === null || O === void 0 ? void 0 : O.optimize, To = yr === !0 || yr === void 0 ? 1 : yr || 0, Oo = (F = (K = W.code) === null || K === void 0 ? void 0 : K.regExp) !== null && F !== void 0 ? F : y, Sc = (S = W.uriResolver) !== null && S !== void 0 ? S : v.default;
      return {
        strictSchema: (L = (x = W.strictSchema) !== null && x !== void 0 ? x : Et) !== null && L !== void 0 ? L : !0,
        strictNumbers: (G = (ee = W.strictNumbers) !== null && ee !== void 0 ? ee : Et) !== null && G !== void 0 ? G : !0,
        strictTypes: (B = (ne = W.strictTypes) !== null && ne !== void 0 ? ne : Et) !== null && B !== void 0 ? B : "log",
        strictTuples: (M = (E = W.strictTuples) !== null && E !== void 0 ? E : Et) !== null && M !== void 0 ? M : "log",
        strictRequired: (V = (I = W.strictRequired) !== null && I !== void 0 ? I : Et) !== null && V !== void 0 ? V : !1,
        code: W.code ? { ...W.code, optimize: To, regExp: Oo } : { optimize: To, regExp: Oo },
        loopRequired: (X = W.loopRequired) !== null && X !== void 0 ? X : f,
        loopEnum: (te = W.loopEnum) !== null && te !== void 0 ? te : f,
        meta: (le = W.meta) !== null && le !== void 0 ? le : !0,
        messages: (me = W.messages) !== null && me !== void 0 ? me : !0,
        inlineRefs: (pe = W.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = W.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (fe = W.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Ye = W.validateSchema) !== null && Ye !== void 0 ? Ye : !0,
        validateFormats: (xe = W.validateFormats) !== null && xe !== void 0 ? xe : !0,
        unicodeRegExp: (mr = W.unicodeRegExp) !== null && mr !== void 0 ? mr : !0,
        int32range: (gr = W.int32range) !== null && gr !== void 0 ? gr : !0,
        uriResolver: Sc
      };
    }
    class _ {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...k(O) };
        const { es5: K, lines: F } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: K, lines: F }), this.logger = R(O.logger);
        const S = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, o.getRules)(), u.call(this, p, O, "NOT SUPPORTED"), u.call(this, g, O, "DEPRECATED", "warn"), this._metaOpts = A.call(this), O.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && P.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), b.call(this), O.validateFormats = S;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: K, schemaId: F } = this.opts;
        let S = m;
        F === "id" && (S = { ...m }, S.id = S.$id, delete S.$id), K && O && this.addMetaSchema(S, S[F], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: K } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[K] || O : void 0;
      }
      validate(O, K) {
        let F;
        if (typeof O == "string") {
          if (F = this.getSchema(O), !F)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          F = this.compile(O);
        const S = F(K);
        return "$async" in F || (this.errors = F.errors), S;
      }
      compile(O, K) {
        const F = this._addSchema(O, K);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(O, K) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: F } = this.opts;
        return S.call(this, O, K);
        async function S(B, E) {
          await x.call(this, B.$schema);
          const M = this._addSchema(B, E);
          return M.validate || L.call(this, M);
        }
        async function x(B) {
          B && !this.getSchema(B) && await S.call(this, { $ref: B }, !0);
        }
        async function L(B) {
          try {
            return this._compileSchemaEnv(B);
          } catch (E) {
            if (!(E instanceof s.default))
              throw E;
            return ee.call(this, E), await G.call(this, E.missingSchema), L.call(this, B);
          }
        }
        function ee({ missingSchema: B, missingRef: E }) {
          if (this.refs[B])
            throw new Error(`AnySchema ${B} is loaded but ${E} cannot be resolved`);
        }
        async function G(B) {
          const E = await ne.call(this, B);
          this.refs[B] || await x.call(this, E.$schema), this.refs[B] || this.addSchema(E, B, K);
        }
        async function ne(B) {
          const E = this._loading[B];
          if (E)
            return E;
          try {
            return await (this._loading[B] = F(B));
          } finally {
            delete this._loading[B];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, K, F, S = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const L of O)
            this.addSchema(L, void 0, F, S);
          return this;
        }
        let x;
        if (typeof O == "object") {
          const { schemaId: L } = this.opts;
          if (x = O[L], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${L} must be string`);
        }
        return K = (0, c.normalizeId)(K || x), this._checkUnique(K), this.schemas[K] = this._addSchema(O, F, K, S, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, K, F = this.opts.validateSchema) {
        return this.addSchema(O, K, !0, F), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, K) {
        if (typeof O == "boolean")
          return !0;
        let F;
        if (F = O.$schema, F !== void 0 && typeof F != "string")
          throw new Error("$schema must be a string");
        if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const S = this.validate(F, O);
        if (!S && K) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return S;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let K;
        for (; typeof (K = h.call(this, O)) == "string"; )
          O = K;
        if (K === void 0) {
          const { schemaId: F } = this.opts, S = new i.SchemaEnv({ schema: {}, schemaId: F });
          if (K = i.resolveSchema.call(this, S, O), !K)
            return;
          this.refs[O] = K;
        }
        return K.validate || this._compileSchemaEnv(K);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(O) {
        if (O instanceof RegExp)
          return this._removeAllSchemas(this.schemas, O), this._removeAllSchemas(this.refs, O), this;
        switch (typeof O) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const K = h.call(this, O);
            return typeof K == "object" && this._cache.delete(K.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const K = O;
            this._cache.delete(K);
            let F = O[this.opts.schemaId];
            return F && (F = (0, c.normalizeId)(F), delete this.schemas[F], delete this.refs[F]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(O) {
        for (const K of O)
          this.addKeyword(K);
        return this;
      }
      addKeyword(O, K) {
        let F;
        if (typeof O == "string")
          F = O, typeof K == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), K.keyword = F);
        else if (typeof O == "object" && K === void 0) {
          if (K = O, F = K.keyword, Array.isArray(F) && !F.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, F, K), !K)
          return (0, d.eachItem)(F, (x) => q.call(this, x)), this;
        re.call(this, K);
        const S = {
          ...K,
          type: (0, l.getJSONTypes)(K.type),
          schemaType: (0, l.getJSONTypes)(K.schemaType)
        };
        return (0, d.eachItem)(F, S.type.length === 0 ? (x) => q.call(this, x, S) : (x) => S.type.forEach((L) => q.call(this, x, S, L))), this;
      }
      getKeyword(O) {
        const K = this.RULES.all[O];
        return typeof K == "object" ? K.definition : !!K;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: K } = this;
        delete K.keywords[O], delete K.all[O];
        for (const F of K.rules) {
          const S = F.rules.findIndex((x) => x.keyword === O);
          S >= 0 && F.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, K) {
        return typeof K == "string" && (K = new RegExp(K)), this.formats[O] = K, this;
      }
      errorsText(O = this.errors, { separator: K = ", ", dataVar: F = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((S) => `${F}${S.instancePath} ${S.message}`).reduce((S, x) => S + K + x);
      }
      $dataMetaSchema(O, K) {
        const F = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const S of K) {
          const x = S.split("/").slice(1);
          let L = O;
          for (const ee of x)
            L = L[ee];
          for (const ee in F) {
            const G = F[ee];
            if (typeof G != "object")
              continue;
            const { $data: ne } = G.definition, B = L[ee];
            ne && B && (L[ee] = oe(B));
          }
        }
        return O;
      }
      _removeAllSchemas(O, K) {
        for (const F in O) {
          const S = O[F];
          (!K || K.test(F)) && (typeof S == "string" ? delete O[F] : S && !S.meta && (this._cache.delete(S.schema), delete O[F]));
        }
      }
      _addSchema(O, K, F, S = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let L;
        const { schemaId: ee } = this.opts;
        if (typeof O == "object")
          L = O[ee];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(O);
        if (G !== void 0)
          return G;
        F = (0, c.normalizeId)(L || F);
        const ne = c.getSchemaRefs.call(this, O, F);
        return G = new i.SchemaEnv({ schema: O, schemaId: ee, meta: K, baseId: F, localRefs: ne }), this._cache.set(G.schema, G), x && !F.startsWith("#") && (F && this._checkUnique(F), this.refs[F] = G), S && this.validateSchema(O, !0), G;
      }
      _checkUnique(O) {
        if (this.schemas[O] || this.refs[O])
          throw new Error(`schema with key or id "${O}" already exists`);
      }
      _compileSchemaEnv(O) {
        if (O.meta ? this._compileMetaSchema(O) : i.compileSchema.call(this, O), !O.validate)
          throw new Error("ajv implementation error");
        return O.validate;
      }
      _compileMetaSchema(O) {
        const K = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, O);
        } finally {
          this.opts = K;
        }
      }
    }
    _.ValidationError = r.default, _.MissingRefError = s.default, e.default = _;
    function u(W, O, K, F = "error") {
      for (const S in W) {
        const x = S;
        x in O && this.logger[F](`${K}: option ${S}. ${W[x]}`);
      }
    }
    function h(W) {
      return W = (0, c.normalizeId)(W), this.schemas[W] || this.refs[W];
    }
    function b() {
      const W = this.opts.schemas;
      if (W)
        if (Array.isArray(W))
          this.addSchema(W);
        else
          for (const O in W)
            this.addSchema(W[O], O);
    }
    function C() {
      for (const W in this.opts.formats) {
        const O = this.opts.formats[W];
        O && this.addFormat(W, O);
      }
    }
    function P(W) {
      if (Array.isArray(W)) {
        this.addVocabulary(W);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const O in W) {
        const K = W[O];
        K.keyword || (K.keyword = O), this.addKeyword(K);
      }
    }
    function A() {
      const W = { ...this.opts };
      for (const O of $)
        delete W[O];
      return W;
    }
    const N = { log() {
    }, warn() {
    }, error() {
    } };
    function R(W) {
      if (W === !1)
        return N;
      if (W === void 0)
        return console;
      if (W.log && W.warn && W.error)
        return W;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(W, O) {
      const { RULES: K } = this;
      if ((0, d.eachItem)(W, (F) => {
        if (K.keywords[F])
          throw new Error(`Keyword ${F} is already defined`);
        if (!D.test(F))
          throw new Error(`Keyword ${F} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function q(W, O, K) {
      var F;
      const S = O?.post;
      if (K && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let L = S ? x.post : x.rules.find(({ type: G }) => G === K);
      if (L || (L = { type: K, rules: [] }, x.rules.push(L)), x.keywords[W] = !0, !O)
        return;
      const ee = {
        keyword: W,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? J.call(this, L, ee, O.before) : L.rules.push(ee), x.all[W] = ee, (F = O.implements) === null || F === void 0 || F.forEach((G) => this.addKeyword(G));
    }
    function J(W, O, K) {
      const F = W.rules.findIndex((S) => S.keyword === K);
      F >= 0 ? W.rules.splice(F, 0, O) : (W.rules.push(O), this.logger.warn(`rule ${K} is not defined`));
    }
    function re(W) {
      let { metaSchema: O } = W;
      O !== void 0 && (W.$data && this.opts.$data && (O = oe(O)), W.validateSchema = this.compile(O, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function oe(W) {
      return { anyOf: [W, Y] };
    }
  })(br)), br;
}
var Gt = {}, Wt = {}, Jt = {}, fs;
function ul() {
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
  const e = /* @__PURE__ */ sr(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ se(), r = /* @__PURE__ */ Ie(), s = /* @__PURE__ */ ir(), o = /* @__PURE__ */ ce(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: d, schema: m, it: v } = l, { baseId: y, schemaEnv: $, validateName: w, opts: p, self: g } = v, { root: f } = $;
      if ((m === "#" || m === "#/") && y === f.baseId)
        return _();
      const k = s.resolveRef.call(g, f, y, m);
      if (k === void 0)
        throw new e.default(v.opts.uriResolver, y, m);
      if (k instanceof s.SchemaEnv)
        return u(k);
      return h(k);
      function _() {
        if ($ === f)
          return c(l, w, $, $.$async);
        const b = d.scopeValue("root", { ref: f });
        return c(l, (0, n._)`${b}.validate`, f, f.$async);
      }
      function u(b) {
        const C = a(l, b);
        c(l, C, b, b.$async);
      }
      function h(b) {
        const C = d.scopeValue("schema", p.code.source === !0 ? { ref: b, code: (0, n.stringify)(b) } : { ref: b }), P = d.name("valid"), A = l.subschema({
          schema: b,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: C,
          errSchemaPath: m
        }, P);
        l.mergeEvaluated(A), l.ok(P);
      }
    }
  };
  function a(l, d) {
    const { gen: m } = l;
    return d.validate ? m.scopeValue("validate", { ref: d.validate }) : (0, n._)`${m.scopeValue("wrapper", { ref: d })}.validate`;
  }
  Xe.getValidate = a;
  function c(l, d, m, v) {
    const { gen: y, it: $ } = l, { allErrors: w, schemaEnv: p, opts: g } = $, f = g.passContext ? r.default.this : n.nil;
    v ? k() : _();
    function k() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const b = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(l, d, f)}`), h(d), w || y.assign(b, !0);
      }, (C) => {
        y.if((0, n._)`!(${C} instanceof ${$.ValidationError})`, () => y.throw(C)), u(C), w || y.assign(b, !1);
      }), l.ok(b);
    }
    function _() {
      l.result((0, t.callValidateCode)(l, d, f), () => h(d), () => u(d));
    }
    function u(b) {
      const C = (0, n._)`${b}.errors`;
      y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${C} : ${r.default.vErrors}.concat(${C})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(b) {
      var C;
      if (!$.opts.unevaluated)
        return;
      const P = (C = m?.validate) === null || C === void 0 ? void 0 : C.evaluated;
      if ($.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && ($.props = o.mergeEvaluated.props(y, P.props, $.props));
        else {
          const A = y.var("props", (0, n._)`${b}.evaluated.props`);
          $.props = o.mergeEvaluated.props(y, A, $.props, n.Name);
        }
      if ($.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && ($.items = o.mergeEvaluated.items(y, P.items, $.items));
        else {
          const A = y.var("items", (0, n._)`${b}.evaluated.items`);
          $.items = o.mergeEvaluated.items(y, A, $.items, n.Name);
        }
    }
  }
  return Xe.callRef = c, Xe.default = i, Xe;
}
var hs;
function fl() {
  if (hs) return Wt;
  hs = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ul(), t = /* @__PURE__ */ uo(), n = [
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
function pl() {
  if (ms) return Xt;
  ms = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = e.operators, n = {
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
function hl() {
  if (gs) return Zt;
  gs = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
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
function ml() {
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
function gl() {
  if ($s) return Qt;
  $s = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ml(), s = {
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
function yl() {
  if (bs) return tn;
  bs = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ De(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ se(), s = {
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
        const { regExp: y } = m.opts.code, $ = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), w = i.let("valid");
        i.try(() => i.assign(w, (0, n._)`${$}(${d}, ${v}).test(${a})`), () => i.assign(w, !1)), o.fail$data((0, n._)`!${w}`);
      } else {
        const y = (0, e.usePattern)(o, l);
        o.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return tn.default = s, tn;
}
var nn = {}, vs;
function $l() {
  if (vs) return nn;
  vs = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
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
function bl() {
  if (ws) return rn;
  ws = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ De(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), s = {
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
      if (m.allErrors ? $() : w(), v.strictRequired) {
        const f = o.parentSchema.properties, { definedProperties: k } = o.it;
        for (const _ of a)
          if (f?.[_] === void 0 && !k.has(_)) {
            const u = m.schemaEnv.baseId + m.errSchemaPath, h = `required property "${_}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(m, h, m.opts.strictRequired);
          }
      }
      function $() {
        if (y || d)
          o.block$data(t.nil, p);
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
      function p() {
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
function vl() {
  if (_s) return on;
  _s = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
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
  const e = $a();
  return e.code = 'require("ajv/dist/runtime/equal").default', an.default = e, an;
}
var ks;
function wl() {
  if (ks) return sn;
  ks = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ fo(), o = {
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
      const $ = a.let("valid"), w = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      i.block$data($, p, (0, t._)`${v} === false`), i.ok($);
      function p() {
        const _ = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        i.setParams({ i: _, j: u }), a.assign($, !0), a.if((0, t._)`${_} > 1`, () => (g() ? f : k)(_, u));
      }
      function g() {
        return w.length > 0 && !w.some((_) => _ === "object" || _ === "array");
      }
      function f(_, u) {
        const h = a.name("item"), b = (0, e.checkDataTypes)(w, h, y.opts.strictNumbers, e.DataType.Wrong), C = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${_}--;`, () => {
          a.let(h, (0, t._)`${c}[${_}]`), a.if(b, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${C}[${h}] == "number"`, () => {
            a.assign(u, (0, t._)`${C}[${h}]`), i.error(), a.assign($, !1).break();
          }).code((0, t._)`${C}[${h}] = ${_}`);
        });
      }
      function k(_, u) {
        const h = (0, n.useFunc)(a, r.default), b = a.name("outer");
        a.label(b).for((0, t._)`;${_}--;`, () => a.for((0, t._)`${u} = ${_}; ${u}--;`, () => a.if((0, t._)`${h}(${c}[${_}], ${c}[${u}])`, () => {
          i.error(), a.assign($, !1).break(b);
        })));
      }
    }
  };
  return sn.default = o, sn;
}
var cn = {}, Cs;
function _l() {
  if (Cs) return cn;
  Cs = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fo(), s = {
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
function Sl() {
  if (Es) return ln;
  Es = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fo(), s = {
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
      const $ = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let w;
      if (v || c)
        w = i.let("valid"), o.block$data(w, p);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const f = i.const("vSchema", d);
        w = (0, e.or)(...l.map((k, _) => g(f, _)));
      }
      o.pass(w);
      function p() {
        i.assign(w, !1), i.forOf("v", d, (f) => i.if((0, e._)`${$()}(${a}, ${f})`, () => i.assign(w, !0).break()));
      }
      function g(f, k) {
        const _ = l[k];
        return typeof _ == "object" && _ !== null ? (0, e._)`${$()}(${a}, ${f}[${k}])` : (0, e._)`${a} === ${_}`;
      }
    }
  };
  return ln.default = s, ln;
}
var xs;
function kl() {
  if (xs) return Yt;
  xs = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pl(), t = /* @__PURE__ */ hl(), n = /* @__PURE__ */ gl(), r = /* @__PURE__ */ yl(), s = /* @__PURE__ */ $l(), o = /* @__PURE__ */ bl(), i = /* @__PURE__ */ vl(), a = /* @__PURE__ */ wl(), c = /* @__PURE__ */ _l(), l = /* @__PURE__ */ Sl(), d = [
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
var dn = {}, ft = {}, As;
function va() {
  if (As) return ft;
  As = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
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
      const $ = a.var("valid", (0, e._)`${v} <= ${i.length}`);
      a.if((0, e.not)($), () => y($)), o.ok($);
    }
    function y($) {
      a.forRange("i", i.length, v, (w) => {
        o.subschema({ keyword: d, dataProp: w, dataPropType: t.Type.Num }, $), m.allErrors || a.if((0, e.not)($), () => a.break());
      });
    }
  }
  return ft.validateAdditionalItems = s, ft.default = r, ft;
}
var un = {}, pt = {}, Ps;
function wa() {
  if (Ps) return pt;
  Ps = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateTuple = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ De(), r = {
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
    const y = c.name("valid"), $ = c.const("len", (0, e._)`${d}.length`);
    a.forEach((p, g) => {
      (0, t.alwaysValidSchema)(v, p) || (c.if((0, e._)`${$} > ${g}`, () => o.subschema({
        keyword: m,
        schemaProp: g,
        dataProp: g
      }, y)), o.ok(y));
    });
    function w(p) {
      const { opts: g, errSchemaPath: f } = v, k = a.length, _ = k === p.minItems && (k === p.maxItems || p[i] === !1);
      if (g.strictTuples && !_) {
        const u = `"${m}" is ${k}-tuple, but minItems or maxItems/${i} are not specified or different at path "${f}"`;
        (0, t.checkStrictMode)(v, u, g.strictTuples);
      }
    }
  }
  return pt.validateTuple = s, pt.default = r, pt;
}
var Rs;
function Cl() {
  if (Rs) return un;
  Rs = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wa(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return un.default = t, un;
}
var fn = {}, Ms;
function El() {
  if (Ms) return fn;
  Ms = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ De(), r = /* @__PURE__ */ va(), o = {
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
function xl() {
  if (Ns) return pn;
  Ns = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
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
      const $ = o.const("len", (0, e._)`${c}.length`);
      if (s.setParams({ min: d, max: m }), m === void 0 && d === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (m !== void 0 && d > m) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), s.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, i)) {
        let k = (0, e._)`${$} >= ${d}`;
        m !== void 0 && (k = (0, e._)`${k} && ${$} <= ${m}`), s.pass(k);
        return;
      }
      l.items = !0;
      const w = o.name("valid");
      m === void 0 && d === 1 ? g(w, () => o.if(w, () => o.break())) : d === 0 ? (o.let(w, !0), m !== void 0 && o.if((0, e._)`${c}.length > 0`, p)) : (o.let(w, !1), p()), s.result(w, () => s.reset());
      function p() {
        const k = o.name("_valid"), _ = o.let("count", 0);
        g(k, () => o.if(k, () => f(_)));
      }
      function g(k, _) {
        o.forRange("i", 0, $, (u) => {
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
var Ar = {}, Ts;
function po() {
  return Ts || (Ts = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ De();
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
      for (const $ in l) {
        const w = l[$];
        if (w.length === 0)
          continue;
        const p = (0, r.propertyInData)(d, m, $, v.opts.ownProperties);
        c.setParams({
          property: $,
          depsCount: w.length,
          deps: w.join(", ")
        }), v.allErrors ? d.if(p, () => {
          for (const g of w)
            (0, r.checkReportMissingProp)(c, g);
        }) : (d.if((0, t._)`${p} && (${(0, r.checkMissingProp)(c, w, y)})`), (0, r.reportMissingProp)(c, y), d.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(c, l = c.schema) {
      const { gen: d, data: m, keyword: v, it: y } = c, $ = d.name("valid");
      for (const w in l)
        (0, n.alwaysValidSchema)(y, l[w]) || (d.if(
          (0, r.propertyInData)(d, m, w, y.opts.ownProperties),
          () => {
            const p = c.subschema({ keyword: v, schemaProp: w }, $);
            c.mergeValidEvaluated(p, $);
          },
          () => d.var($, !0)
          // TODO var
        ), c.ok($));
    }
    e.validateSchemaDeps = a, e.default = s;
  })(Ar)), Ar;
}
var hn = {}, Os;
function Al() {
  if (Os) return hn;
  Os = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
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
function _a() {
  if (Fs) return mn;
  Fs = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ De(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ ce(), o = {
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
      const { allErrors: y, opts: $ } = v;
      if (v.props = !0, $.removeAdditional !== "all" && (0, r.alwaysValidSchema)(v, c))
        return;
      const w = (0, e.allSchemaProperties)(l.properties), p = (0, e.allSchemaProperties)(l.patternProperties);
      g(), i.ok((0, t._)`${m} === ${n.default.errors}`);
      function g() {
        a.forIn("key", d, (h) => {
          !w.length && !p.length ? _(h) : a.if(f(h), () => _(h));
        });
      }
      function f(h) {
        let b;
        if (w.length > 8) {
          const C = (0, r.schemaRefOrVal)(v, l.properties, "properties");
          b = (0, e.isOwnProperty)(a, C, h);
        } else w.length ? b = (0, t.or)(...w.map((C) => (0, t._)`${h} === ${C}`)) : b = t.nil;
        return p.length && (b = (0, t.or)(b, ...p.map((C) => (0, t._)`${(0, e.usePattern)(i, C)}.test(${h})`))), (0, t.not)(b);
      }
      function k(h) {
        a.code((0, t._)`delete ${d}[${h}]`);
      }
      function _(h) {
        if ($.removeAdditional === "all" || $.removeAdditional && c === !1) {
          k(h);
          return;
        }
        if (c === !1) {
          i.setParams({ additionalProperty: h }), i.error(), y || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(v, c)) {
          const b = a.name("valid");
          $.removeAdditional === "failing" ? (u(h, b, !1), a.if((0, t.not)(b), () => {
            i.reset(), k(h);
          })) : (u(h, b), y || a.if((0, t.not)(b), () => a.break()));
        }
      }
      function u(h, b, C) {
        const P = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        C === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, b);
      }
    }
  };
  return mn.default = o, mn;
}
var gn = {}, zs;
function Pl() {
  if (zs) return gn;
  zs = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ or(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ _a(), s = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: i, schema: a, parentSchema: c, data: l, it: d } = o;
      d.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(d, r.default, "additionalProperties"));
      const m = (0, t.allSchemaProperties)(a);
      for (const p of m)
        d.definedProperties.add(p);
      d.opts.unevaluated && m.length && d.props !== !0 && (d.props = n.mergeEvaluated.props(i, (0, n.toHash)(m), d.props));
      const v = m.filter((p) => !(0, n.alwaysValidSchema)(d, a[p]));
      if (v.length === 0)
        return;
      const y = i.name("valid");
      for (const p of v)
        $(p) ? w(p) : (i.if((0, t.propertyInData)(i, l, p, d.opts.ownProperties)), w(p), d.allErrors || i.else().var(y, !0), i.endIf()), o.it.definedProperties.add(p), o.ok(y);
      function $(p) {
        return d.opts.useDefaults && !d.compositeRule && a[p].default !== void 0;
      }
      function w(p) {
        o.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, y);
      }
    }
  };
  return gn.default = s, gn;
}
var yn = {}, js;
function Rl() {
  if (js) return yn;
  js = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ De(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), s = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: i, schema: a, data: c, parentSchema: l, it: d } = o, { opts: m } = d, v = (0, e.allSchemaProperties)(a), y = v.filter((_) => (0, n.alwaysValidSchema)(d, a[_]));
      if (v.length === 0 || y.length === v.length && (!d.opts.unevaluated || d.props === !0))
        return;
      const $ = m.strictSchema && !m.allowMatchingProperties && l.properties, w = i.name("valid");
      d.props !== !0 && !(d.props instanceof t.Name) && (d.props = (0, r.evaluatedPropsToName)(i, d.props));
      const { props: p } = d;
      g();
      function g() {
        for (const _ of v)
          $ && f(_), d.allErrors ? k(_) : (i.var(w, !0), k(_), i.if(w));
      }
      function f(_) {
        for (const u in $)
          new RegExp(_).test(u) && (0, n.checkStrictMode)(d, `property ${u} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function k(_) {
        i.forIn("key", c, (u) => {
          i.if((0, t._)`${(0, e.usePattern)(o, _)}.test(${u})`, () => {
            const h = y.includes(_);
            h || o.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: u,
              dataPropType: r.Type.Str
            }, w), d.opts.unevaluated && p !== !0 ? i.assign((0, t._)`${p}[${u}]`, !0) : !h && !d.allErrors && i.if((0, t.not)(w), () => i.break());
          });
        });
      }
    }
  };
  return yn.default = s, yn;
}
var $n = {}, Is;
function Ml() {
  if (Is) return $n;
  Is = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
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
function Nl() {
  if (Ds) return bn;
  Ds = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ De()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return bn.default = t, bn;
}
var vn = {}, Ls;
function Tl() {
  if (Ls) return vn;
  Ls = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
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
        l.forEach(($, w) => {
          let p;
          (0, t.alwaysValidSchema)(c, $) ? o.var(v, !0) : p = s.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, v), w > 0 && o.if((0, e._)`${v} && ${d}`).assign(d, !1).assign(m, (0, e._)`[${m}, ${w}]`).else(), o.if(v, () => {
            o.assign(d, !0), o.assign(m, w), p && s.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return vn.default = r, vn;
}
var wn = {}, qs;
function Ol() {
  if (qs) return wn;
  qs = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
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
var _n = {}, Vs;
function Fl() {
  if (Vs) return _n;
  Vs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
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
        o.setParams({ ifClause: w }), i.if(v, $("then", w), $("else", w));
      } else l ? i.if(v, $("then")) : i.if((0, e.not)(v), $("else"));
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
      function $(w, p) {
        return () => {
          const g = o.subschema({ keyword: w }, v);
          i.assign(m, v), o.mergeValidEvaluated(g, m), p ? i.assign(p, (0, e._)`${w}`) : o.setParams({ ifClause: w });
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
var Sn = {}, Bs;
function zl() {
  if (Bs) return Sn;
  Bs = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: s }) {
      r.if === void 0 && (0, e.checkStrictMode)(s, `"${n}" without "if" is ignored`);
    }
  };
  return Sn.default = t, Sn;
}
var Us;
function jl() {
  if (Us) return dn;
  Us = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ va(), t = /* @__PURE__ */ Cl(), n = /* @__PURE__ */ wa(), r = /* @__PURE__ */ El(), s = /* @__PURE__ */ xl(), o = /* @__PURE__ */ po(), i = /* @__PURE__ */ Al(), a = /* @__PURE__ */ _a(), c = /* @__PURE__ */ Pl(), l = /* @__PURE__ */ Rl(), d = /* @__PURE__ */ Ml(), m = /* @__PURE__ */ Nl(), v = /* @__PURE__ */ Tl(), y = /* @__PURE__ */ Ol(), $ = /* @__PURE__ */ Fl(), w = /* @__PURE__ */ zl();
  function p(g = !1) {
    const f = [
      // any
      d.default,
      m.default,
      v.default,
      y.default,
      $.default,
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
  return dn.default = p, dn;
}
var kn = {}, ht = {}, Hs;
function Sa() {
  if (Hs) return ht;
  Hs = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ ir(), r = /* @__PURE__ */ uo(), s = {
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
  ht.dynamicAnchor = o;
  function i(a) {
    const { schemaEnv: c, schema: l, self: d } = a.it, { root: m, baseId: v, localRefs: y, meta: $ } = c.root, { schemaId: w } = d.opts, p = new n.SchemaEnv({ schema: l, schemaId: w, root: m, baseId: v, localRefs: y, meta: $ });
    return n.compileSchema.call(d, p), (0, r.getValidate)(a, p);
  }
  return ht.default = s, ht;
}
var mt = {}, Ks;
function ka() {
  if (Ks) return mt;
  Ks = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicRef = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ uo(), r = {
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
        const $ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`);
        a.if($, v($, y), v(l.validateName, y));
      } else
        v(l.validateName, y)();
    }
    function v(y, $) {
      return $ ? () => a.block(() => {
        (0, n.callRef)(o, y), a.let($, !0);
      }) : () => (0, n.callRef)(o, y);
    }
  }
  return mt.dynamicRef = s, mt.default = r, mt;
}
var Cn = {}, Gs;
function Il() {
  if (Gs) return Cn;
  Gs = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sa(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Cn.default = n, Cn;
}
var En = {}, Ws;
function Dl() {
  if (Ws) return En;
  Ws = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ka(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return En.default = t, En;
}
var Js;
function Ll() {
  if (Js) return kn;
  Js = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sa(), t = /* @__PURE__ */ ka(), n = /* @__PURE__ */ Il(), r = /* @__PURE__ */ Dl(), s = [e.default, t.default, n.default, r.default];
  return kn.default = s, kn;
}
var xn = {}, An = {}, Ys;
function ql() {
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
function Vl() {
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
  const e = /* @__PURE__ */ ce(), t = {
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
function Ul() {
  if (Qs) return xn;
  Qs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ql(), t = /* @__PURE__ */ Vl(), n = /* @__PURE__ */ Bl(), r = [e.default, t.default, n.default];
  return xn.default = r, xn;
}
var Mn = {}, Nn = {}, ei;
function Hl() {
  if (ei) return Nn;
  ei = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Ie(), s = {
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
      v instanceof e.Name ? i.if((0, e._)`${v} !== true`, () => i.forIn("key", c, (p) => i.if($(v, p), () => y(p)))) : v !== !0 && i.forIn("key", c, (p) => v === void 0 ? y(p) : i.if(w(v, p), () => y(p))), d.props = !0, o.ok((0, e._)`${l} === ${n.default.errors}`);
      function y(p) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: p }), o.error(), m || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(d, a)) {
          const g = i.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, g), m || i.if((0, e.not)(g), () => i.break());
        }
      }
      function $(p, g) {
        return (0, e._)`!${p} || !${p}[${g}]`;
      }
      function w(p, g) {
        const f = [];
        for (const k in p)
          p[k] === !0 && f.push((0, e._)`${g} !== ${k}`);
        return (0, e.and)(...f);
      }
    }
  };
  return Nn.default = s, Nn;
}
var Tn = {}, ti;
function Kl() {
  if (ti) return Tn;
  ti = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
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
        o.forRange("i", y, d, ($) => {
          s.subschema({ keyword: "unevaluatedItems", dataProp: $, dataPropType: t.Type.Num }, v), c.allErrors || o.if((0, e.not)(v), () => o.break());
        });
      }
    }
  };
  return Tn.default = r, Tn;
}
var ni;
function Gl() {
  if (ni) return Mn;
  ni = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hl(), t = /* @__PURE__ */ Kl(), n = [e.default, t.default];
  return Mn.default = n, Mn;
}
var On = {}, Fn = {}, ri;
function Wl() {
  if (ri) return Fn;
  ri = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, s) {
      const { gen: o, data: i, $data: a, schema: c, schemaCode: l, it: d } = r, { opts: m, errSchemaPath: v, schemaEnv: y, self: $ } = d;
      if (!m.validateFormats)
        return;
      a ? w() : p();
      function w() {
        const g = o.scopeValue("formats", {
          ref: $.formats,
          code: m.code.formats
        }), f = o.const("fDef", (0, e._)`${g}[${l}]`), k = o.let("fType"), _ = o.let("format");
        o.if((0, e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => o.assign(k, (0, e._)`${f}.type || "string"`).assign(_, (0, e._)`${f}.validate`), () => o.assign(k, (0, e._)`"string"`).assign(_, f)), r.fail$data((0, e.or)(u(), h()));
        function u() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${_}`;
        }
        function h() {
          const b = y.$async ? (0, e._)`(${f}.async ? await ${_}(${i}) : ${_}(${i}))` : (0, e._)`${_}(${i})`, C = (0, e._)`(typeof ${_} == "function" ? ${b} : ${_}.test(${i}))`;
          return (0, e._)`${_} && ${_} !== true && ${k} === ${s} && !${C}`;
        }
      }
      function p() {
        const g = $.formats[c];
        if (!g) {
          u();
          return;
        }
        if (g === !0)
          return;
        const [f, k, _] = h(g);
        f === s && r.pass(b());
        function u() {
          if (m.strictSchema === !1) {
            $.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${c}" ignored in schema at path "${v}"`;
          }
        }
        function h(C) {
          const P = C instanceof RegExp ? (0, e.regexpCode)(C) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(c)}` : void 0, A = o.scopeValue("formats", { key: c, ref: C, code: P });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${A}.validate`] : ["string", C, A];
        }
        function b() {
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
function Jl() {
  if (oi) return On;
  oi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Wl()).default];
  return On.default = t, On;
}
var it = {}, si;
function Yl() {
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
function Xl() {
  if (ii) return Gt;
  ii = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fl(), t = /* @__PURE__ */ kl(), n = /* @__PURE__ */ jl(), r = /* @__PURE__ */ Ll(), s = /* @__PURE__ */ Ul(), o = /* @__PURE__ */ Gl(), i = /* @__PURE__ */ Jl(), a = /* @__PURE__ */ Yl(), c = [
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
var zn = {}, Rt = {}, ai;
function Zl() {
  if (ai) return Rt;
  ai = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Rt.DiscrError = e = {})), Rt;
}
var ci;
function Ql() {
  if (ci) return zn;
  ci = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Zl(), n = /* @__PURE__ */ ir(), r = /* @__PURE__ */ sr(), s = /* @__PURE__ */ ce(), i = {
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
      const $ = d.propertyName;
      if (typeof $ != "string")
        throw new Error("discriminator: requires propertyName");
      if (d.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), p = c.const("tag", (0, e._)`${l}${(0, e.getProperty)($)}`);
      c.if((0, e._)`typeof ${p} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: $ })), a.ok(w);
      function g() {
        const _ = k();
        c.if(!1);
        for (const u in _)
          c.elseIf((0, e._)`${p} === ${u}`), c.assign(w, f(_[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: $ }), c.endIf();
      }
      function f(_) {
        const u = c.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: _ }, u);
        return a.mergeEvaluated(h, e.Name), u;
      }
      function k() {
        var _;
        const u = {}, h = C(m);
        let b = !0;
        for (let N = 0; N < y.length; N++) {
          let R = y[N];
          if (R?.$ref && !(0, s.schemaHasRulesButRef)(R, v.self.RULES)) {
            const j = R.$ref;
            if (R = n.resolveRef.call(v.self, v.schemaEnv.root, v.baseId, j), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(v.opts.uriResolver, v.baseId, j);
          }
          const D = (_ = R?.properties) === null || _ === void 0 ? void 0 : _[$];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${$}"`);
          b = b && (h || C(R)), P(D, N);
        }
        if (!b)
          throw new Error(`discriminator: "${$}" must be required`);
        return u;
        function C({ required: N }) {
          return Array.isArray(N) && N.includes($);
        }
        function P(N, R) {
          if (N.const)
            A(N.const, R);
          else if (N.enum)
            for (const D of N.enum)
              A(D, R);
          else
            throw new Error(`discriminator: "properties/${$}" must have "const" or "enum"`);
        }
        function A(N, R) {
          if (typeof N != "string" || N in u)
            throw new Error(`discriminator: "${$}" values must be unique strings`);
          u[N] = R;
        }
      }
    }
  };
  return zn.default = i, zn;
}
var jn = {};
const ed = "https://json-schema.org/draft/2020-12/schema", td = "https://json-schema.org/draft/2020-12/schema", nd = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, rd = "meta", od = "Core and Validation specifications meta-schema", sd = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], id = ["object", "boolean"], ad = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", cd = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, ld = {
  $schema: ed,
  $id: td,
  $vocabulary: nd,
  $dynamicAnchor: rd,
  title: od,
  allOf: sd,
  type: id,
  $comment: ad,
  properties: cd
}, dd = "https://json-schema.org/draft/2020-12/schema", ud = "https://json-schema.org/draft/2020-12/meta/applicator", fd = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, pd = "meta", hd = "Applicator vocabulary meta-schema", md = ["object", "boolean"], gd = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, yd = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, $d = {
  $schema: dd,
  $id: ud,
  $vocabulary: fd,
  $dynamicAnchor: pd,
  title: hd,
  type: md,
  properties: gd,
  $defs: yd
}, bd = "https://json-schema.org/draft/2020-12/schema", vd = "https://json-schema.org/draft/2020-12/meta/unevaluated", wd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, _d = "meta", Sd = "Unevaluated applicator vocabulary meta-schema", kd = ["object", "boolean"], Cd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Ed = {
  $schema: bd,
  $id: vd,
  $vocabulary: wd,
  $dynamicAnchor: _d,
  title: Sd,
  type: kd,
  properties: Cd
}, xd = "https://json-schema.org/draft/2020-12/schema", Ad = "https://json-schema.org/draft/2020-12/meta/content", Pd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rd = "meta", Md = "Content vocabulary meta-schema", Nd = ["object", "boolean"], Td = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Od = {
  $schema: xd,
  $id: Ad,
  $vocabulary: Pd,
  $dynamicAnchor: Rd,
  title: Md,
  type: Nd,
  properties: Td
}, Fd = "https://json-schema.org/draft/2020-12/schema", zd = "https://json-schema.org/draft/2020-12/meta/core", jd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Id = "meta", Dd = "Core vocabulary meta-schema", Ld = ["object", "boolean"], qd = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Vd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Bd = {
  $schema: Fd,
  $id: zd,
  $vocabulary: jd,
  $dynamicAnchor: Id,
  title: Dd,
  type: Ld,
  properties: qd,
  $defs: Vd
}, Ud = "https://json-schema.org/draft/2020-12/schema", Hd = "https://json-schema.org/draft/2020-12/meta/format-annotation", Kd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Gd = "meta", Wd = "Format vocabulary meta-schema for annotation results", Jd = ["object", "boolean"], Yd = { format: { type: "string" } }, Xd = {
  $schema: Ud,
  $id: Hd,
  $vocabulary: Kd,
  $dynamicAnchor: Gd,
  title: Wd,
  type: Jd,
  properties: Yd
}, Zd = "https://json-schema.org/draft/2020-12/schema", Qd = "https://json-schema.org/draft/2020-12/meta/meta-data", eu = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, tu = "meta", nu = "Meta-data vocabulary meta-schema", ru = ["object", "boolean"], ou = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, su = {
  $schema: Zd,
  $id: Qd,
  $vocabulary: eu,
  $dynamicAnchor: tu,
  title: nu,
  type: ru,
  properties: ou
}, iu = "https://json-schema.org/draft/2020-12/schema", au = "https://json-schema.org/draft/2020-12/meta/validation", cu = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, lu = "meta", du = "Validation vocabulary meta-schema", uu = ["object", "boolean"], fu = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, pu = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, hu = {
  $schema: iu,
  $id: au,
  $vocabulary: cu,
  $dynamicAnchor: lu,
  title: du,
  type: uu,
  properties: fu,
  $defs: pu
};
var li;
function mu() {
  if (li) return jn;
  li = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = ld, t = $d, n = Ed, r = Od, s = Bd, o = Xd, i = su, a = hu, c = ["/properties"];
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
function gu() {
  return di || (di = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ dl(), r = /* @__PURE__ */ Xl(), s = /* @__PURE__ */ Ql(), o = /* @__PURE__ */ mu(), i = "https://json-schema.org/draft/2020-12/schema";
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
        const { $data: y, meta: $ } = this.opts;
        $ && (o.default.call(this, y), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ or();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var l = /* @__PURE__ */ se();
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
    var m = /* @__PURE__ */ sr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(Vt, Vt.exports)), Vt.exports;
}
var yu = /* @__PURE__ */ gu();
const $u = /* @__PURE__ */ Wc(yu), bu = "https://json-schema.org/draft/2020-12/schema", vu = "https://raw.githubusercontent.com/omsf-eco-infra/alchemy-viz/main/schema/alchemy-viz.schema.json", wu = "alchemy-viz payload", _u = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Su = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ku = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), ho = {
  $schema: bu,
  $id: vu,
  title: wu,
  description: _u,
  oneOf: Su,
  $defs: ku
}, Um = [
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
], mo = ho.$id, go = new $u({ allErrors: !0, strict: !1 });
go.addSchema(ho, mo);
const ui = go.getSchema(mo), Cu = Object.entries(ho.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Ca = /* @__PURE__ */ new Map();
for (const e of Cu) {
  const t = go.getSchema(`${mo}#/$defs/${e}`);
  t && Ca.set(e, t);
}
const fi = { valid: !0, issues: [] };
function pi(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Eu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Ca.get(t) : void 0;
  return n ? n(e) ? fi : { valid: !1, issues: pi(n.errors) } : ui(e) ? fi : { valid: !1, issues: pi(ui.errors) };
}
function xu(e, t = 8) {
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
function Au(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like an alchemy-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!yo[t]) return Pu(t);
  const { valid: n, issues: r } = Eu(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the alchemy-viz schema.`,
    detail: xu(r)
  };
}
function Pu(e) {
  const t = Object.keys(yo).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class Ru extends Oe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Kc("payload", n, this);
    const r = Au(n);
    if (r)
      return t.appendChild(Mu(r, n)), {};
    const s = n.type, o = yo[s], i = document.createElement(o);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Mu(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ye(e.message));
  const r = (o, i) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};` : `background:${z.panelBg};color:${z.textMuted2};border:1px solid ${z.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const s = Nu(t);
  return s && n.appendChild(r(s, !1)), n;
}
function Nu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${t.type}`), typeof t.name == "string" && t.name && n.push(`name: ${t.name}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Fe("alchemy-view", Ru);
function ut(e = "", t) {
  const n = T("button", jo.base + e, t);
  return n.className = jo.className, n.type = "button", n;
}
function Kr(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function Lt(e, t = Qn.className) {
  const n = T("button", e);
  return n.className = t, n.type = "button", n.setAttribute("aria-pressed", "false"), n;
}
function kt(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const s = T("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), o = e.map((i) => {
    const a = ut("", i.label);
    return a.title = i.title || i.label, a.onclick = () => {
      s.setActive(i.id), r?.set(i.id), n(i.id);
    }, s.appendChild(a), { id: i.id, btn: a };
  });
  return s.setActive = (i) => {
    t = i;
    for (const a of o) Kr(a.btn, a.id === t);
  }, s.setActive(t), s;
}
const Tu = parseFloat(Z.xl) * 2;
function Ea(e, t, n, r = {}) {
  const { remember: s } = r;
  if (s) {
    const m = s.get();
    e.some((v) => v.id === m) && (t = m);
  }
  const o = T("div", "display:flex;min-width:0;"), i = (m) => {
    o.setActive(m), s?.set(m), n(m);
  }, a = kt(e, t, i), c = ar(e, t, i);
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
    d = oa(m, ($) => {
      l || (y = v.offsetWidth || y), y && o.setCompact(y > $ - Tu);
    });
  }
  return o.cleanup = () => d(), o;
}
function ar(e, t, n, r) {
  const s = T("select", ca);
  for (const i of e) {
    const a = T("option", "", i.label);
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
function xa(e, t, n, r = {}) {
  let s = r.remember ? r.remember.get() : t;
  const o = ut("", e);
  return o.title = r.title || e, Kr(o, s), o.onclick = () => {
    s = !s, Kr(o, s), r.remember?.set(s), n(s);
  }, o;
}
const Je = "alchemy-viz:", St = /* @__PURE__ */ new Map();
let In = null;
function Ou() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function cr() {
  if (In === !1) return null;
  const e = Ou();
  if (!e)
    return In = !1, null;
  try {
    const t = `${Je}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), In = !0, e;
  } catch {
    return In = !1, null;
  }
}
function Fu(e) {
  const t = cr();
  if (!t) return St.get(Je + e) ?? null;
  try {
    return t.getItem(Je + e);
  } catch {
    return null;
  }
}
function zu(e, t) {
  const n = cr();
  if (!n) {
    St.set(Je + e, t);
    return;
  }
  try {
    n.setItem(Je + e, t);
  } catch {
    St.set(Je + e, t);
  }
}
function lr(e, t, n) {
  return {
    key: e,
    get() {
      const r = Fu(e);
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
        zu(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function rt(e, t, n) {
  return lr(e, t, (r) => typeof r == "string" && n.includes(r));
}
function ct(e, t) {
  return lr(e, t, (n) => typeof n == "boolean");
}
function qt(e, t, n = -1 / 0, r = 1 / 0) {
  return lr(
    e,
    t,
    (s) => typeof s == "number" && Number.isFinite(s) && s >= n && s <= r
  );
}
function Gr(e, t = "") {
  return lr(e, t, (n) => typeof n == "string");
}
function $o() {
  const e = cr(), t = e ? Array.from({ length: e.length }, (r, s) => e.key(s)).filter((r) => typeof r == "string") : Array.from(St.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(Je)) continue;
    const s = e ? e.getItem(r) : St.get(r) ?? null;
    s !== null && n.push([r, s]);
  }
  return n;
}
function ju() {
  const e = {};
  for (const [t, n] of $o()) {
    const r = t.slice(Je.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function Iu() {
  return Object.fromEntries($o());
}
function Du() {
  const e = cr();
  if (e)
    for (const [t] of $o())
      try {
        e.removeItem(t);
      } catch {
      }
  St.clear();
}
const Pr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, bo = {
  threeDmol: `https://unpkg.com/3dmol@${Pr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${Pr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${Pr.d3}/+esm`
};
function vo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Aa(e, t) {
  return new Promise((n, r) => {
    const s = document.createElement("script");
    s.src = e, s.onload = () => n(), s.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(s);
  });
}
let nt = null, gt = null;
function dr() {
  if (gt) return gt;
  const e = vo("threeDmol");
  return e ? (gt = e.then((t) => nt = t || window.$3Dmol), gt) : (gt = (async () => {
    if (window.$3Dmol) return nt = window.$3Dmol;
    if (await Aa(bo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return nt = window.$3Dmol;
  })(), gt);
}
let yt = null;
function wo() {
  if (yt) return yt;
  const e = vo("rdkit");
  return e ? (yt = e.then((t) => window.RDKit = t), yt) : (yt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Aa(bo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), yt);
}
let Lu = null;
function Pa() {
  return Lu ??= wo().catch((e) => (console.warn("[alchemy-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Rr = null;
function qu() {
  if (!Rr) {
    const e = bo.d3;
    Rr = vo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Rr;
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
function Ra(e, t) {
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
    t.hint && !r && (r = !0, Uu(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", s), e.addEventListener("pointerenter", s), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", s), e.removeEventListener("pointerenter", s), e.removeEventListener("pointerleave", o);
    }
  };
}
function Vu(e) {
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
function Uu(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Bu);
}
const Hu = { min: 0.25, max: 12 }, Ku = 150;
function hi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Ku) - t;
}
function Gu(e, t = Hu) {
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
const Wu = 2e-3;
function Ma(e) {
  return Math.exp(-e.deltaY * Wu);
}
function ur(e, t, n = {}) {
  const r = Gu(t, n.bounds), s = Ra(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Ma(o))
  });
  return { ...r, cleanup: s.cleanup };
}
function Na(e, t = "Reset view") {
  const n = ut("", "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
function Ta(e, t, n = "Reset view") {
  const r = Na(t, n);
  return r.style.cssText += `position:absolute;left:${Z.xl};bottom:${Z.xl};z-index:10;`, e.appendChild(r), r;
}
let _t = null;
function Ju(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function Oa(e, t) {
  if (!e) return;
  const n = Ju(e);
  if (!n) return;
  const r = t?.level();
  _t = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : _t?.zoom ?? 1
  };
}
function Fa(e, t) {
  if (!_t || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ..._t.rotation]), t && Math.abs(_t.zoom - 1) > 1e-9 && t.zoomBy(_t.zoom), e.render(), !0);
}
const Mr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, Yu = [
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
], H = [0, 0, 0], Xu = {
  0: H,
  1: H,
  2: H,
  3: H,
  4: H,
  5: H,
  6: H,
  7: H,
  8: H,
  9: H,
  10: H,
  11: H,
  12: H,
  13: H,
  14: H,
  15: H,
  16: H,
  17: H,
  18: H,
  19: H,
  20: H,
  21: H,
  22: H,
  23: H,
  24: H,
  25: H,
  26: H,
  27: H,
  28: H,
  29: H,
  30: H,
  31: H,
  32: H,
  33: H,
  34: H,
  35: H,
  36: H,
  37: H,
  38: H,
  39: H,
  40: H,
  41: H,
  42: H,
  43: H,
  44: H,
  45: H,
  46: H,
  47: H,
  48: H,
  49: H,
  50: H,
  51: H,
  52: H,
  53: H,
  54: H,
  55: H,
  56: H,
  57: H,
  58: H,
  59: H,
  60: H,
  61: H,
  62: H,
  63: H,
  64: H,
  65: H,
  66: H,
  67: H,
  68: H,
  69: H,
  70: H,
  71: H,
  72: H,
  73: H,
  74: H,
  75: H,
  76: H,
  77: H,
  78: H,
  79: H,
  80: H,
  81: H,
  82: H,
  83: H,
  84: H,
  85: H,
  86: H,
  87: H,
  88: H,
  89: H,
  90: H,
  91: H,
  92: H,
  93: H,
  94: H,
  95: H,
  96: H,
  97: H,
  98: H,
  99: H,
  100: H,
  101: H,
  102: H,
  103: H,
  104: H,
  105: H,
  106: H,
  107: H,
  108: H,
  109: H,
  110: H,
  111: H,
  112: H,
  113: H,
  114: H,
  115: H,
  116: H,
  117: H,
  118: H
}, U = [0.9, 0.9, 0.9], Zu = {
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
}, Qu = {
  "-1": U,
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
  118: U,
  201: U
}, ef = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
function fr() {
  return oo() === "dark";
}
function za() {
  return We[fr() ? "dark" : "light"].canvas2DBg;
}
function Wr() {
  return We[fr() ? "dark" : "light"].netDepictBg;
}
function tf() {
  return We[fr() ? "dark" : "light"].netDepictCaption;
}
function pr(e) {
  return fr() ? {
    ...ef,
    atomColourPalette: e === "mono" ? Qu : Zu
  } : e === "mono" ? { atomColourPalette: Xu } : {};
}
const nf = "rdkit", rf = !0, of = !0, sf = !0, af = !0, cf = "rdkit", lf = "filled", df = 0.42, uf = 1.5, ff = !0, pf = "show", hf = "mono", mf = 0.51, gf = 0.74, yf = 1.6, $f = 1.7, bf = 5, vf = 0.3, wf = "#d62828", _f = "#d62828", Sf = "#015ab5", kf = !1, Cf = "", Ef = "#7c3aed", xf = {
  layout: nf,
  alignPair: rf,
  atomNumbers: of,
  createdDestroyed: sf,
  modified: af,
  style: cf,
  circles: lf,
  circleRadius: df,
  circleStroke: uf,
  boundary: ff,
  hydrogens: pf,
  elementColors: hf,
  numScale: mf,
  labelScale: gf,
  bondWidth: yf,
  markWidth: $f,
  haloWidth: bf,
  haloOpacity: vf,
  destroyedColor: wf,
  createdColor: _f,
  modifiedColor: Sf,
  stereo: kf,
  customSpec: Cf,
  customColor: Ef
}, Af = {
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: Mr.uniqueAtom,
  createdColor: Mr.uniqueAtom,
  modifiedColor: Mr.elementChange,
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
}, Pf = ["rdkit", "coordgen", "conformer"], Rf = ["rdkit", "recolor", "halo"], Mf = ["outline", "filled", "off"], Nf = ["show", "dim", "hide"], Tf = ["cpk", "mono"], Of = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Ff = /^#[0-9a-fA-F]{6}$/;
function Mt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ze(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Of[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const $t = (e, t) => typeof e == "boolean" ? e : t, Dn = (e, t) => typeof e == "string" && Ff.test(e) ? e : t;
function zf(e) {
  const t = e && typeof e == "object" ? e : {}, n = Af;
  return {
    version: 1,
    layout: Mt(t.layout, Pf, n.layout),
    alignPair: $t(t.alignPair, n.alignPair),
    style: Mt(t.style, Rf, n.style),
    createdDestroyed: $t(t.createdDestroyed, n.createdDestroyed),
    modified: $t(t.modified, n.modified),
    destroyedColor: Dn(t.destroyedColor, n.destroyedColor),
    createdColor: Dn(t.createdColor, n.createdColor),
    modifiedColor: Dn(t.modifiedColor, n.modifiedColor),
    boundary: $t(t.boundary, n.boundary),
    circles: Mt(t.circles, Mf, n.circles),
    circleRadius: Ze(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ze(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Mt(t.hydrogens, Nf, n.hydrogens),
    elementColors: Mt(t.elementColors, Tf, n.elementColors),
    atomNumbers: $t(t.atomNumbers, n.atomNumbers),
    stereo: $t(t.stereo, n.stereo),
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
const Te = zf(xf);
function jf(e) {
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
function Nr(e, t, n) {
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
function Jr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function If(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Df(e, t, n) {
  const r = new Set(t.atoms), s = new Set(Nr(e, r, !0));
  return {
    deletions: Nr(e, r, n),
    changes: Nr(e, new Set(t.elements), n).filter((o) => !s.has(o))
  };
}
function ja(e, t, n, r) {
  const s = Df(t, n, e.boundary), o = [];
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
let bt = null;
function Lf(e) {
  if (bt !== null) return bt;
  bt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (bt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return bt || console.warn("[alchemy-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), bt;
}
function qf(e, t) {
  return e.style === "rdkit" ? "rdkit" : Lf(t) ? e.style : "rdkit";
}
function Vf(e, t, n, r, s, o) {
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
  Object.assign(i, pr(e.elementColors)), s === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, c = {}, l = {};
  for (const y of n) {
    const $ = Jr(y.color);
    if (s === "rdkit") for (const p of y.bonds) l[p] = $;
    if (s === "recolor" && e.circles === "off") continue;
    const w = s === "recolor" && e.circles === "filled" ? If($, 0.7) : $;
    for (const p of y.atoms)
      a[p] = w, c[p] = e.circleRadius;
  }
  const d = Jr(e.customColor);
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
    return console.warn("[alchemy-viz] depictStyledSVG threw -", $e(o)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
const Uf = "http://www.w3.org/2000/svg";
function Ia(e, t) {
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
function Da(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function gi(e, t, n, r, s, o) {
  for (const i of r)
    for (const a of Ia(e, i)) {
      const c = a.style;
      Da(a) ? c.fill = s : (c.stroke = s, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const i of n)
      for (const a of So(e, i, !1)) a.style.fill = o;
}
function Hf(e, t, n, r) {
  const s = e.ownerDocument;
  if (!s) return;
  const o = s.createElementNS(Uf, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of Ia(e, a)) {
      if (Da(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", o.appendChild(l);
    }
  if (!o.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(o, i.nextSibling) : i ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Kf(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of So(e, o, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Gf(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of So(e, o, !0)) {
        const a = i.style;
        a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Wf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const s of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = s.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Jf(e, t, n, r, s, o) {
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
        ), n.circles === "outline" ? Kf(e, n, i.atoms, s, i.color) : a && i.edgeOnFill && Gf(e, n, i.atoms, s, i.color);
      } else
        Hf(e, n, i.bonds, i.color), gi(e, n, i.atoms, i.bonds, i.color, null);
  Wf(e, t, n);
}
const hr = `
`, Yr = "$$$$";
function Xr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(hr);
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
    const v = parseInt(m.substring(0, 3), 10), y = parseInt(m.substring(3, 6), 10), $ = parseInt(m.substring(6, 9), 10);
    !isFinite(v) || !isFinite(y) || c.push([v - 1, y - 1, isFinite($) ? $ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: i };
}
function Yf(e) {
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
  return r.push("M  END"), r.join(hr);
}
const Xf = (e) => `${Yf(e)}${hr}${Yr}`, La = (e) => e.indexOf(Yr) >= 0 ? e : `${e}${hr}${Yr}`;
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
    return console.warn("[alchemy-viz] depictSVG threw -", $e(a)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
function qa(e, t, n) {
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
], Zr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, vt = (e) => e in Zr, $i = 400, Tr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Zf extends Oe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, s = n.name ?? "", o = n.smiles, i = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${Tr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${za()};`
    );
    a.appendChild(c);
    const l = pa();
    l.wrap.style.cssText = Tr, a.appendChild(l.wrap);
    const d = T(
      "div",
      `${Tr}overflow:auto;padding:16px 20px;background:${z.panelBg};color:${z.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(d);
    const m = r ? ko(r) : null, v = [
      ["Name", s || Qe, !1],
      ["SMILES", o || Qe, !0],
      ["Charge", i == null ? Qe : String(i), !1],
      ["Atoms", m ? String(m.atoms) : Qe, !1],
      ["Bonds", m ? String(m.bonds) : Qe, !1]
    ], y = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${Z.xl} 20px;align-items:baseline;`);
    d.appendChild(y);
    for (const [R, D, j] of v) {
      y.appendChild(
        T(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${z.textMuted2};`,
          R
        )
      );
      const q = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${z.textPrimary}` + (j ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        D
      );
      q.title = D, y.appendChild(q);
    }
    const $ = ao(t), w = T("div", so, s || "Unnamed molecule");
    $ && a.appendChild(w);
    const p = rt(
      "small-molecule.mode",
      "2d",
      yi.map((R) => R.id)
    ), g = ct("small-molecule.spin", !1);
    let f = p.get(), k = g.get(), _ = null, u = null;
    const h = () => {
      try {
        _?.spin(k && vt(f) ? "y" : !1);
      } catch {
      }
    }, b = (R) => {
      f = R, c.style.visibility = f === "2d" ? "visible" : "hidden", l.wrap.style.visibility = vt(f) ? "visible" : "hidden", d.style.visibility = f === "info" ? "visible" : "hidden", w.style.display = f === "info" || !$ ? "none" : "block", P.disabled = !vt(f), P.style.opacity = vt(f) ? "1" : "0.5", vt(f) && _ && (_.setStyle({}, Zr[f]), _.resize(), _.render()), h();
    }, C = T("div", fa), P = xa(
      "Spin",
      k,
      (R) => {
        k = R, h();
      },
      { title: "Toggle continuous rotation", remember: g }
    ), A = (R) => {
      R ? C.insertBefore(P, C.firstChild) : N.buttons.insertBefore(P, N.buttons.lastElementChild);
    }, N = Ea(yi, f, (R) => b(R), {
      remember: p,
      onLayout: A,
      fit: { pane: a, bar: C }
    });
    return C.appendChild(N), A(!1), a.appendChild(C), b(f), !r || !r.trim() ? (c.appendChild(ye("No molecule provided")), l.container.appendChild(ye("No molecule provided")), { cleanup: () => N.cleanup() }) : (c.appendChild(ye("Loading 2D depiction...")), wo().then((R) => {
      const D = pr("cpk"), j = Co(R, r, $i, Te.layout, void 0, D);
      j ? qa(c, j, $i) : c.replaceChildren(ye("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren(ye(`RDKit failed to load: ${$e(R)}`, !0));
    }), l.container.appendChild(ye("Loading 3D viewer...")), dr().then(() => {
      l.container.replaceChildren(), _ = nt.createViewer(l.container, { backgroundColor: Dt.viewer() }), _.addModel(La(r), "sdf"), _.setStyle({}, Zr[vt(f) ? f : "stick"]), _.zoomTo(), _.render(), u = ur(l.container, _), Fa(_, u), h();
    }).catch((R) => {
      l.container.replaceChildren(ye(`3D render failed: ${$e(R)}`, !0));
    }), {
      onResize() {
        _ && (_.resize(), _.render());
      },
      cleanup() {
        N.cleanup(), Oa(_, u), u?.cleanup(), u = null, _o(_), _ = null;
      }
    });
  }
}
Fe("gufe-small-molecule", Zf);
const Va = ["HOH", "WAT", "SOL", "TIP3"], bi = { hetflag: !1 }, Qf = { hetflag: !0 }, ep = { resn: Va }, qe = {
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
    Va.indexOf(d) !== -1 && o++, t.add(m), n.add(`${m}|${v}${y}|${d}`);
    const $ = parseInt(v, 10);
    isNaN($) || ($ < i && (i = $), $ > a && (a = $));
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
function Ua(e) {
  return [
    `${xt(e.chains)} chains`,
    `${xt(e.residues)} residues`,
    `${xt(e.atoms)} atoms`,
    `${xt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${xt(e.waters)} water)` : "")
  ];
}
function tp(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Qr(e, t, n, r, s, o = () => !0) {
  const i = r || (() => {
  }), a = tp(t.color, n), c = (l) => s ? { ...l, ...s } : l;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(c({}), {}), e.setStyle(
    c(bi),
    t.rep === "stick" ? { stick: { radius: qe.stick.radius, ...a } } : t.rep === "sphere" ? { sphere: { scale: qe.sphere.scale, ...a } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...a } }
    )
  ), e.setStyle(
    c(Qf),
    t.hetero ? {
      stick: { radius: qe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: qe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    c(ep),
    t.waters ? {
      stick: { radius: qe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: qe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > qe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    if (o())
      try {
        Promise.resolve(
          e.addSurface(
            nt.SurfaceType.VDW,
            { opacity: qe.surfaceOpacity, ...a },
            c(bi)
          )
        ).then(() => {
          o() && (i(null), e.render());
        }).catch((l) => i(`Surface failed: ${$e(l)}`, "error"));
      } catch (l) {
        i(`Surface failed: ${$e(l)}`, "error");
      }
  }, 30);
}
function np(e, t) {
  e.setStyle(t, {
    stick: { radius: qe.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: qe.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const vi = { min: 0.2, max: 0.8 }, Ha = 5, Or = { min: 130, max: 560, maxShare: "60%" };
function Ka(e, t, n, r = {}) {
  const s = r.min ?? vi.min, o = r.max ?? vi.max, i = T(
    "div",
    `flex:0 0 ${Ha}px;align-self:stretch;touch-action:none;background:${z.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = ($) => {
    a = $, e.style.flexDirection = a ? "column" : "row", i.style.cursor = a ? "row-resize" : "col-resize", i.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, l = () => {
    const $ = e.getBoundingClientRect();
    return $.height > $.width;
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
  i.addEventListener("pointerdown", ($) => {
    v = !0, i.setPointerCapture($.pointerId), $.preventDefault();
  }), i.addEventListener("pointermove", ($) => {
    if (!v) return;
    const w = e.getBoundingClientRect(), p = a ? w.height : w.width;
    if (p <= 0) return;
    const g = a ? $.clientY - w.top : $.clientX - w.left;
    d = Math.min(o, Math.max(s, g / p)), m();
  });
  const y = ($) => {
    v && (v = !1, i.releasePointerCapture($.pointerId), r.remember?.set(d), r.onResize?.(d));
  };
  return i.addEventListener("pointerup", y), i.addEventListener("pointercancel", y), i;
}
function Ga(e, t) {
  const n = t.min ?? Or.min, r = t.max ?? Or.max, s = t.maxShare ?? Or.maxShare, o = (v) => Math.min(r, Math.max(n, v));
  let i = o(t.remember?.get() ?? t.initial), a = !1;
  const c = T(
    "div",
    `flex:0 0 ${Ha}px;align-self:stretch;touch-action:none;cursor:col-resize;background:${z.splitBorder};`
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
const rp = !1, xo = ".menuOpen";
function op() {
  const e = T("span", `display:inline-flex;flex-direction:column;gap:${Z.xs};justify-content:center;`);
  for (let t = 0; t < 3; t++)
    e.appendChild(T("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${z.btnFg};`));
  return e;
}
const sp = {
  /** Three bars: the generic form, and the one that reads as a menu. */
  hamburger: op
}, ip = sp.hamburger;
function Ao(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? rp, s = !1;
  const o = T("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), i = ut(`display:inline-flex;align-items:center;padding:${Z.sm};`);
  i.appendChild(ip());
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
const Wa = "https://framejs.app", Ja = 1e4;
function ap(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const cp = "/alchemy-dev-bundle.js";
function lp() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Ja ? e : null;
}
async function dp() {
  const e = lp();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(cp);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Ja ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function up() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function fp(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Je)};`,
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
    `globalThis[${JSON.stringify(ha)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function pp(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...fp(n),
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
function hp(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [s, o] of Object.entries(Iu()))
    s.endsWith(xo) || (r[s] = o);
  return { settings: r, views: t };
}
const mp = (e) => `${Wa}/j/${e}`, gp = (e) => `${Wa}/j/${e}.json`;
async function yp(e, t, n, r) {
  await fetch(gp(e), {
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
function $p() {
  const e = T("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function Po(e) {
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.md};padding-top:${Z.lg};border-top:1px solid ${z.splitBorder};`
  ), n = ut(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${Z.md};`);
  n.appendChild($p()), n.appendChild(T("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Q.tiny};line-height:1.5;color:${z.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const s = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? z.errorFg : z.textMuted2;
  }, o = (i, a) => {
    const c = T("a", `color:${z.textPrimary};`, i);
    c.href = i, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${Z.sm};`, a)), r.style.color = z.textMuted2;
  };
  n.onclick = () => {
    const i = ap(e);
    if (!i || i.payload == null) {
      s("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, c = hp(i), l = window.open("", "_blank"), d = up(), v = String(a.type || "alchemy-viz"), y = `${v}. Shared from alchemy-viz`, $ = () => {
      n.disabled = !1;
    };
    n.disabled = !0, s("Uploading..."), dp().then((w) => {
      if (!w) {
        l?.close(), $(), s(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return yp(d, pp(w.js, a, c), v, y).then(() => {
        $();
        const p = mp(d);
        l && (l.location.href = p), o(p, w.note);
      });
    }).catch((w) => {
      $(), l?.close(), s(`Upload failed: ${w instanceof Error ? w.message : String(w)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Q.tiny};line-height:1.5;color:${z.textMuted2};`,
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
function eo(e) {
  return !Array.isArray(e) || e.length < 4 ? null : e.every((t) => typeof t == "number" && Number.isFinite(t)) ? e.slice() : null;
}
function bp(e) {
  const t = e.tagName.toLowerCase().replace(/^gufe-/, ""), n = ma(t);
  return !n || typeof n != "object" ? null : eo(n.camera);
}
function Ya(e) {
  const t = rt(
    "protein.representation",
    e.rep ?? "cartoon",
    wi.map((C) => C.id)
  ), n = rt(
    "protein.color",
    "chain",
    _i.map((C) => C.id)
  ), r = ct("protein.waters", e.waters), s = ct("protein.hetero", !0), o = ct("protein.spin", !1), i = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: s.get(),
    spin: o.get()
  };
  let a = bp(e.element), c = null, l = null, d = !0;
  const m = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(m);
  const v = T("div", Nc);
  m.appendChild(v);
  const y = ({ label: C, controls: P }) => {
    const A = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    A.appendChild(
      T(
        "span",
        `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${z.textMuted};`,
        C
      )
    );
    for (const N of P) A.appendChild(N);
    return A;
  }, $ = T("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${z.textMuted};`), w = y({ label: "Contents", controls: [$] });
  w.style.display = "none";
  const g = Ao(v, () => {
    const C = T("div", `${ua}padding-top:${Tc};`), P = kt(
      wi,
      i.rep,
      (j) => {
        i.rep = j, e.restyle();
      },
      t
    );
    C.appendChild(y({ label: "Style", controls: [P] }));
    const A = ar(
      _i,
      i.color,
      (j) => {
        i.color = j, e.restyle();
      },
      n
    );
    A.style.cssText += "width:100%;box-sizing:border-box;", C.appendChild(y({ label: "Color", controls: [A] }));
    const N = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), R = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, s, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", o, () => c?.spin(i.spin ? "y" : !1)]
    ];
    for (const [j, q, J, re, Y] of R)
      N.appendChild(
        xa(
          q,
          i[j],
          (oe) => {
            i[j] = oe, Y();
          },
          { title: J, remember: re }
        )
      );
    C.appendChild(y({ label: "Show", controls: [N] }));
    const D = Na(() => e.reset ? e.reset() : l?.reset());
    return D.style.cssText += "width:100%;box-sizing:border-box;", C.appendChild(y({ label: "Camera", controls: [...e.camera?.() ?? [], D] })), C.appendChild(w), C;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: ct(`protein${xo}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      c?.resize(), c?.render();
    },
    extras: Po
  }), f = ao(e.element) ? e.title || e.fallbackTitle : "";
  f && v.appendChild(
    T("div", `${Mc}pointer-events:none;font-size:${Q.heading};font-weight:${ge.bold};`, f)
  ), m.appendChild(g.panel);
  const k = pa();
  m.appendChild(k.wrap);
  const _ = ro(m, (C) => {
    m.style.flexDirection = C ? "column" : "row", Eo(g.panel, C), c?.resize(), c?.render();
  }), u = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  k.wrap.appendChild(u);
  const h = (C, P) => {
    if (C == null) {
      u.style.display = "none";
      return;
    }
    u.textContent = C, u.style.display = "block";
    const A = P === "error";
    u.style.background = A ? z.warnBg : z.toolbarBg, u.style.color = A ? z.warnFg : z.textMuted, u.style.border = `1px solid ${A ? z.warnBorder : z.toolbarBorder}`;
  }, b = () => {
    if (!e.cameraKey || !c) return;
    const C = eo(c.getView?.());
    C && Si.set(e.cameraKey, C);
  };
  return {
    opts: i,
    pane: k,
    menu: g,
    showStatus: h,
    setStats: (C) => {
      $.replaceChildren(...C.map((P) => T("div", "overflow-wrap:anywhere;", P))), w.style.display = C.length ? "" : "none";
    },
    restoreCamera: () => {
      const C = a;
      a = null;
      const P = C ?? (e.cameraKey ? Si.get(e.cameraKey) : void 0);
      return !P || !c ? !1 : (c.setView(P.slice()), c.render(), !0);
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
        const C = eo(c?.getView?.());
        return C ? { camera: C } : null;
      },
      cleanup() {
        d = !1, _(), b(), l?.cleanup(), l = null, _o(c), c = null;
      }
    }
  };
}
class vp extends Oe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let s = null;
    function o() {
      const a = i.viewer();
      a && Qr(a, i.opts, s, i.showStatus, void 0, i.stillWanted);
    }
    const i = Ya({
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
      s = Ba(r), i.setStats(Ua(s));
    } catch (a) {
      i.showStatus(`PDB parse error: ${$e(a)}`, "error");
    }
    return i.showStatus("Loading 3D viewer..."), dr().then(() => {
      const a = nt.createViewer(i.pane.container, { backgroundColor: Dt.viewer() });
      i.setViewer(a), a.addModel(r, "pdb"), Qr(a, i.opts, s, i.showStatus, void 0, i.stillWanted), i.restoreCamera() || a.zoomTo(), a.spin(i.opts.spin ? "y" : !1), a.render(), i.setInteraction(ur(i.pane.container, a));
    }).catch((a) => {
      i.showStatus(`Failed to render structure: ${$e(a)}`, "error");
    }), i.handle;
  }
}
Fe("gufe-protein", vp);
const Xa = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const n = document.createElementNS(Xa, e);
  for (const [r, s] of Object.entries(t)) n.setAttribute(r, String(s));
  return n;
}
function Fr(e, t) {
  const n = document.createElementNS(Xa, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Za = 3, wp = 24;
function Qa(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, s = 1 / 0, o = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), s = Math.min(s, a.y), o = Math.max(o, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(s) ? null : { minX: r - t, minY: s - n, maxX: o + t, maxY: i + n };
}
const _p = { min: 0.15, max: 5 }, Sp = 1e-9;
function ec(e, t, n) {
  const r = n.margin ?? wp, s = n.zoom ?? _p;
  let o = 1, i = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${o})`), n.onTransform?.(o, i, a);
  }, l = () => {
    const j = e.getBoundingClientRect();
    return {
      width: j.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: j.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, d = (j, q, J) => Math.min(1, q / (j.maxX - j.minX + r * 2), J / (j.maxY - j.minY + r * 2)), m = () => {
    const j = n.bounds();
    if (!j) return s.min;
    const { width: q, height: J } = l();
    return Math.min(s.min, d(j, q, J));
  }, v = (j) => Math.min(s.max, Math.max(m(), o * j)), y = () => {
    o = 1, i = 0, a = 0;
    const j = n.bounds();
    if (!j) {
      c();
      return;
    }
    const { width: q, height: J } = l();
    o = d(j, q, J), i = q / 2 - (j.minX + j.maxX) / 2 * o, a = J / 2 - (j.minY + j.maxY) / 2 * o, c();
  }, w = Ra(e, {
    onZoom: (j) => {
      const q = e.getBoundingClientRect(), J = j.clientX - q.left, re = j.clientY - q.top, Y = v(Ma(j)), oe = Y / o;
      return i = J - (J - i) * oe, a = re - (re - a) * oe, o = Y, c(), Math.abs(oe - 1) > Sp;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), p = /* @__PURE__ */ new Map();
  let g = null, f = null, k = !1, _ = null;
  const u = (j) => ({
    x: j.clientX - i,
    y: j.clientY - a,
    from: { x: j.clientX, y: j.clientY }
  }), h = (j) => {
    j.pointerType === "touch" && p.size > 1 || (f = u(j), k = !1);
  }, b = (j) => {
    g || (_ && j.pointerType === "touch" && (f = { x: _.x - i, y: _.y - a, from: _ }, _ = null), f && (Math.hypot(j.clientX - f.from.x, j.clientY - f.from.y) > Za && (k = !0), i = j.clientX - f.x, a = j.clientY - f.y, c()));
  }, C = () => {
    f = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", b), e.addEventListener("pointerup", C), e.addEventListener("pointercancel", C), e.addEventListener("pointerleave", C);
  const P = () => {
    const [j, q] = [...p.values()];
    return { cx: (j.x + q.x) / 2, cy: (j.y + q.y) / 2, span: Math.max(1, Math.hypot(j.x - q.x, j.y - q.y)) };
  }, A = (j) => {
    if (j.pointerType === "touch") {
      if (p.set(j.pointerId, { x: j.clientX, y: j.clientY }), p.size !== 2) {
        g = null;
        return;
      }
      g = P(), f = null, k = !0;
    }
  }, N = (j) => {
    if (j.pointerType !== "touch" || !p.has(j.pointerId) || (p.set(j.pointerId, { x: j.clientX, y: j.clientY }), !g || p.size !== 2)) return;
    j.preventDefault(), j.stopPropagation();
    const q = P(), J = e.getBoundingClientRect(), re = v(q.span / g.span), Y = re / o;
    i = q.cx - J.left - (g.cx - J.left - i) * Y, a = q.cy - J.top - (g.cy - J.top - a) * Y, o = re, g = q, c();
  }, R = (j) => {
    if (j.pointerType !== "touch") return;
    if (p.delete(j.pointerId), p.size === 2) {
      g = P();
      return;
    }
    g = null;
    const [q] = [...p.values()];
    _ = p.size === 1 && q ? { ...q } : null;
  };
  e.addEventListener("pointerdown", A, !0), e.addEventListener("pointermove", N, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const D = Vu(e);
  return {
    fit: y,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: y,
    centreOn(j, q, J = 1) {
      const { width: re, height: Y } = l();
      o = Math.max(o, J), i = re / 2 - j * o, a = Y / 2 - q * o, c();
    },
    transform: () => ({ scale: o, tx: i, ty: a }),
    wasPan: () => k,
    gesturing: () => p.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(j, q, J) {
      o = j, i = q, a = J, c();
    },
    cleanup() {
      w.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", b), e.removeEventListener("pointerup", C), e.removeEventListener("pointercancel", C), e.removeEventListener("pointerleave", C), e.removeEventListener("pointerdown", A, !0), e.removeEventListener("pointermove", N, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const kp = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function tc(e) {
  const t = { ...e };
  for (const n of kp) delete t[n];
  return t;
}
async function nc(e) {
  let t;
  try {
    if (t = await qu(), typeof t?.forceSimulation != "function") return !1;
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
function Ct(e) {
  const t = /* @__PURE__ */ new Map();
  return to(e, t, /* @__PURE__ */ new Set()), t;
}
function to(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const s of e) to(s, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const s of r) {
      const o = s["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, s);
    }
  for (const s of Object.values(e)) to(s, t, n);
}
function Me(e, t) {
  return t ? e.get(t) : void 0;
}
function _e(e, t, n) {
  const r = Me(e, t);
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
function ve(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function rc(e) {
  const t = [];
  let n = 0;
  for (const i of e.keys) {
    const a = _e(e.registry, i, e.nodeType);
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
const Cp = 8, Ep = 64, xp = () => new Promise((e) => setTimeout(e, 0));
function no(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Ap(e, t, n, r) {
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
    return console.warn("[alchemy-viz] SMARTS match threw -", $e(o)), null;
  } finally {
    no(s);
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
      return no(m), { status: "unsupported" };
    const v = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let $ = performance.now(), w = 0;
      for (let p = 0; p < t.length; p++) {
        const g = t[p] ? Ap(d, m, t[p], n) : null;
        if (g ? g.length && v.set(p, g) : y++, !(++w < Ep && performance.now() - $ < Cp)) {
          if (await xp(), c !== s) return { status: "superseded" };
          w = 0, $ = performance.now();
        }
      }
    } finally {
      no(m);
    }
    return r.set(a, v), { status: "ok", matched: v, unreadable: y };
  }, cancel: () => void ++s };
}
const Pp = 250;
function Rp(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", la);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = T("div", `font-size:${Q.tiny};line-height:1.5;min-height:1.5em;color:${z.textMuted2};`);
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
    }, Pp);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && o(n.value);
    }
  };
}
const sc = "Cmd/Ctrl-click to select several.";
function Mp(e, t, n, r, s) {
  const o = (i) => s === "keys" ? i["gufe-key"] : ve(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(o).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${o(i.from)}, ${o(i.to)}`).join(`
`);
}
function Np(e, t) {
  navigator.clipboard?.writeText(e).catch(() => ki(e, t)), navigator.clipboard || ki(e, t);
}
function ki(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${Q.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Tp(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Op(e) {
  const { words: t } = e, n = rt(e.setting, "names", ["names", "keys"]), r = T("div", "display:flex;flex-direction:column;gap:6px;"), s = T("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${z.textMuted};`);
  s.appendChild(T("span", "", "copy as"));
  const o = ar(
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
  const i = T("div", `font-size:${Q.tiny};line-height:1.5;color:${z.textMuted2};`), a = (d) => {
    i.textContent = d;
  }, c = ut("width:100%;"), l = () => {
    const d = e.what(), m = d === "nodes" ? t.nodes : t.edges;
    c.textContent = `Copy ${m.plural}`, c.title = d === "nodes" ? `Copy the selected ${t.nodes.plural}, one per line` : `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`;
  };
  return l(), c.onclick = (d) => {
    const m = e.what(), v = m === "nodes" ? t.nodes : t.edges, y = o.value, $ = Mp(e.nodes, e.edges, e.selected, m, y);
    if (!$) {
      a(
        e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : m === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${sc}` : "Nothing to copy."
      );
      return;
    }
    const w = $.split(`
`).length;
    if (d.shiftKey) {
      Tp($, `selected-${v.plural}.txt`), a(`Saved ${w} ${v.plural} to a file.`);
      return;
    }
    Np($, r), a(
      m === "edges" ? `Copied ${w} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
    );
  }, r.appendChild(c), r.appendChild(i), r.appendChild(T("div", `font-size:${Q.tiny};color:${z.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a(""), relabel: l };
}
const Ci = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function ic(e) {
  const t = Gr(`${e.namespace}.query`), n = rt(`${e.namespace}.tab`, "nodes", ["nodes", "edges"]);
  let r = n.get();
  const s = T("div", ua), o = kt(
    [
      { id: "nodes", label: e.words.nodes.tab, title: `List the ${e.words.nodes.plural}` },
      { id: "edges", label: e.words.edges.tab, title: `List the ${e.words.edges.plural}` }
    ],
    r,
    (p) => {
      r = p, n.set(r), w();
    }
  );
  for (const p of Array.from(o.children)) p.style.flex = "1";
  o.style.gap = "0", s.appendChild(o);
  const i = T("input", la);
  s.appendChild(i);
  const a = Rp({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Gr(`${e.namespace}.smarts`),
    run: (p) => e.match(p),
    describe: (p) => e.smarts.describe(p)
  });
  s.appendChild(a.element);
  for (const p of e.filters?.(() => w()) ?? []) s.appendChild(p);
  const c = T("div", `font-size:${Q.small};color:${z.textMuted2};`);
  s.appendChild(c);
  const l = T("div", Pc);
  s.appendChild(l), s.appendChild(T("div", `font-size:${Q.tiny};line-height:1.5;color:${z.textMuted2};`, sc));
  const d = Op({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: e.words,
    setting: `${e.namespace}.exportAs`,
    what: () => r
  });
  s.appendChild(d.box);
  const m = ut("width:100%;", "Clear selection");
  m.onclick = () => {
    e.selected.clear(), w(), e.refresh();
  }, s.appendChild(m);
  function v(p, g, f) {
    const k = Lt(Qn.row);
    k.setAttribute("aria-pressed", String(g.every((u) => e.selected.has(u)))), p.before && k.appendChild(p.before);
    const _ = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", p.name);
    _.title = p.title, k.appendChild(_), k.onclick = (u) => {
      if (u.shiftKey || u.metaKey || u.ctrlKey) {
        const h = g.every((b) => e.selected.has(b));
        for (const b of g)
          h ? e.selected.delete(b) : e.selected.add(b);
      } else {
        e.selected.clear();
        for (const h of g) e.selected.add(h);
        f();
      }
      w(), e.refresh();
    }, l.appendChild(k);
  }
  function y() {
    const p = e.nodes.map((g, f) => ({ node: g, index: f })).filter(({ node: g, index: f }) => e.shows(g, f)).map(({ node: g, index: f }) => ({ node: g, index: f, parts: e.row(g, f) }));
    p.sort((g, f) => Ci.compare(g.parts.name, f.parts.name));
    for (const { node: g, index: f, parts: k } of p)
      v(k, [g["gufe-key"]], () => e.focus(f));
    return p.length;
  }
  function $() {
    const p = e.edges.map((g, f) => ({ edge: g, index: f })).filter(({ edge: g, index: f }) => e.edgeShows(g, f)).map(({ edge: g, index: f }) => ({ edge: g, index: f, parts: e.edgeRow(g, f) }));
    p.sort((g, f) => Ci.compare(g.parts.name, f.parts.name));
    for (const { edge: g, index: f, parts: k } of p)
      v(k, [g.from["gufe-key"], g.to["gufe-key"]], () => e.focusEdge(f));
    return p.length;
  }
  function w() {
    d.clearNote(), d.relabel(), o.setActive(r), l.replaceChildren();
    const p = r === "nodes" ? e.words.nodes : e.words.edges, g = r === "nodes" ? e.nodes.length : e.edges.length, f = r === "nodes" ? y() : $();
    c.textContent = `${f} of ${g} ${p.plural}`, f || l.appendChild(T("div", `font-size:${Q.small};padding:${Z.lg};color:${z.textMuted2};`, "Nothing matches."));
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
const jt = { node: 0.12, edge: 0.06 };
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
      Math.hypot(m - t[o].x, v - t[o].y) * d > Za && (a = !0), t[o].x = t[o].fx = m, t[o].y = t[o].fy = v, r.moved(o);
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
  const t = T("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
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
      t.replaceChildren(ye(r));
    },
    // Removing the nested view fires its own `disconnectedCallback`, which is
    // where whatever it mounted releases its viewers.
    cleanup() {
      n.remove();
    }
  };
}
function at(e) {
  return e > 0 ? `+${e}` : String(e);
}
function Ei(e, t) {
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
function xi(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function qp(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Ai(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = o[i][0], c = o[i][1], l = t[a * 3 + c];
      if (Math.abs(l) < 1e-14) continue;
      const d = t[a * 3 + a], m = t[c * 3 + c], v = (m - d) / (2 * l);
      let y;
      Math.abs(v) > 1e10 ? y = 1 / (2 * v) : y = (v >= 0 ? 1 : -1) / (Math.abs(v) + Math.sqrt(v * v + 1));
      const $ = 1 / Math.sqrt(1 + y * y), w = y * $;
      t[a * 3 + a] = d - y * l, t[c * 3 + c] = m + y * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let p = 0; p < 3; p++)
        if (p !== a && p !== c) {
          const g = t[p * 3 + a], f = t[p * 3 + c];
          t[p * 3 + a] = $ * g - w * f, t[a * 3 + p] = t[p * 3 + a], t[p * 3 + c] = w * g + $ * f, t[c * 3 + p] = t[p * 3 + c];
        }
      for (let p = 0; p < 3; p++) {
        const g = n[p * 3 + a], f = n[p * 3 + c];
        n[p * 3 + a] = $ * g - w * f, n[p * 3 + c] = w * g + $ * f;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Vp(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], s = [0, 0, 0];
  for (let _ = 0; _ < n; _++)
    r[0] += e[_][0], r[1] += e[_][1], r[2] += e[_][2], s[0] += t[_][0], s[1] += t[_][1], s[2] += t[_][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, s[0] /= n, s[1] /= n, s[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - s[0], r[1] - s[1], r[2] - s[2]], determined: !1 };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let _ = 0; _ < n; _++) {
    const u = e[_][0] - r[0], h = e[_][1] - r[1], b = e[_][2] - r[2], C = t[_][0] - s[0], P = t[_][1] - s[1], A = t[_][2] - s[2];
    o[0] += u * C, o[1] += u * P, o[2] += u * A, o[3] += h * C, o[4] += h * P, o[5] += h * A, o[6] += b * C, o[7] += b * P, o[8] += b * A;
  }
  const i = xi(o), a = qn(i, o), c = qn(o, i);
  let l = Ai(a), d = Ai(c);
  function m(_) {
    const u = [0, 1, 2].sort((b, C) => _.values[C] - _.values[b]), h = new Array(9);
    for (let b = 0; b < 3; b++) {
      const C = u[b];
      h[b] = _.vectors[C], h[3 + b] = _.vectors[3 + C], h[6 + b] = _.vectors[6 + C];
    }
    return {
      values: [_.values[u[0]], _.values[u[1]], _.values[u[2]]],
      vectors: h
    };
  }
  l = m(l), d = m(d);
  const v = l.vectors, y = d.vectors;
  for (let _ = 0; _ < 3; _++) {
    const u = v[_], h = v[3 + _], b = v[6 + _], C = o[0] * u + o[1] * h + o[2] * b, P = o[3] * u + o[4] * h + o[5] * b, A = o[6] * u + o[7] * h + o[8] * b, N = y[_], R = y[3 + _], D = y[6 + _];
    C * N + P * R + A * D < 0 && (y[_] = -N, y[3 + _] = -R, y[6 + _] = -D);
  }
  const $ = xi(v);
  let w = qn(y, $);
  qp(w) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], w = qn(y, $));
  const p = w[0] * s[0] + w[1] * s[1] + w[2] * s[2], g = w[3] * s[0] + w[4] * s[1] + w[5] * s[2], f = w[6] * s[0] + w[7] * s[1] + w[8] * s[2], k = l.values[1] > Lp * l.values[0];
  return { R: w, t: [r[0] - p, r[1] - g, r[2] - f], determined: k };
}
function Bp(e, t, n) {
  const r = e[0], s = e[1], o = e[2];
  return [
    t[0] * r + t[1] * s + t[2] * o + n[0],
    t[3] * r + t[4] * s + t[5] * o + n[1],
    t[6] * r + t[7] * s + t[8] * o + n[2]
  ];
}
function Up(e, t) {
  const n = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  e.appendChild(n);
  let r = [], s = 0, o = !0, i = !1;
  const a = () => {
    s && cancelAnimationFrame(s), s = 0, i && Oa(r[0]?.viewer ?? null, r[0]?.interaction ?? null), i = !1;
    for (const c of r)
      c.interaction?.cleanup(), _o(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), d = T("div", "flex:1;position:relative;min-height:0;");
      d.dataset.gufeViewer = "", l.appendChild(d), t && l.appendChild(T("div", so, c)), n.appendChild(l);
      const m = { container: d, viewer: null, interaction: null };
      return r.push(m), m;
    },
    open(c, l) {
      const d = nt.createViewer(c.container, { backgroundColor: Dt.viewer() });
      for (const m of l) d.addModel(Xf(m), "sdf");
      return c.viewer = d, d;
    },
    settle(c) {
      c.viewer && (c.interaction = ur(c.container, c.viewer));
    },
    pose(c) {
      Fa(c.viewer, c.interaction), i = !0;
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
                for (let $ = 0; $ < r.length; $++)
                  $ !== m && r[$].viewer && (r[$].viewer.setView(v.getView()), r[$].viewer.render()), c[$] = y;
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
const Pi = `
`, zr = 4;
function Ri(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (s) {
    return console.warn("[alchemy-viz] could not lay out a molecule in 2D -", $e(s)), t;
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
      const k = (d ? -1 : 1) * (r[f][0] - i[0]), _ = r[f][1] - i[1], u = s[f][0] - a[0], h = s[f][1] - a[1];
      m += k * h - _ * u, v += k * u + _ * h;
    }
    const y = Math.hypot(m, v);
    if (y <= l) continue;
    l = y;
    const $ = Math.atan2(m, v), w = Math.cos($), p = Math.sin($), g = (d ? -1 : 1) * i[0];
    c = {
      cos: w,
      sin: p,
      mirror: d,
      tx: a[0] - (w * g - p * i[1]),
      ty: a[1] - (p * g + w * i[1])
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
  const s = e.replace(/\r/g, "").split(Pi);
  if (s[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const i = s[zr + o], a = t[o];
    if (i == null || !a) return e;
    s[zr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = zr + r.atoms + a, l = s[c];
      if (l == null) break;
      const d = parseInt(l.substring(9, 12), 10);
      d !== 1 && d !== 6 || (s[c] = l.substring(0, 9) + String(d === 1 ? 6 : 1).padStart(3) + l.substring(12));
    }
  return s.join(Pi);
}
function Wp(e, t, n) {
  try {
    const r = (i) => Xr(i).coords.map((a) => [a[0], a[1]]), s = r(t), o = Hp(s, r(e), n);
    return o ? Gp(
      t,
      s.map((i) => Kp(o, i)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[alchemy-viz] could not align a depiction to its partner -", $e(r)), t;
  }
}
function Jp(e, t, n, r, s) {
  const o = Ri(e, t, r), i = Ri(e, n, r);
  return !s || r === "conformer" ? { left: o, right: i } : { left: o, right: Wp(o, i, s) };
}
const Yp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Xp = {
  core: "0x888888",
  pairLine: "0xd9a300"
}, pc = () => oo() === "dark" ? Yp : Xp, jr = 420, Ge = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Ir = { gap: 2.5, minLiftFraction: 0.6 }, Zp = 24, Mi = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, Qp = {
  mapped: null,
  element: Te.modifiedColor,
  uniqueA: Te.destroyedColor,
  uniqueB: Te.createdColor
}, eh = 132;
function Ni(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let s = 0; s < 3; s++)
      r[s] < t[s] && (t[s] = r[s]), r[s] > n[s] && (n[s] = r[s]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function th(e, t) {
  const n = Ni(e), r = Ni(t);
  let s = 0;
  n.span[1] < n.span[s] && (s = 1), n.span[2] < n.span[s] && (s = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[s] - r.min[s] + Ir.gap, a = Ir.minLiftFraction * o + Ir.gap;
  return { axis: s, lift: Math.max(i, a) };
}
function hc(e) {
  const t = jf(Te.customSpec);
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
      { stick: { radius: Ge.stick, colorscheme: "Jmol" }, sphere: { scale: Ge.sphere, colorscheme: "Jmol" } }
    ), s.zoomTo(), s.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function rh(e, t) {
  const n = Te, r = pc();
  for (const s of hc(t)) {
    const o = e.box(s.mol.name), i = e.open(o, [s.mol]);
    i.setStyle(
      {},
      { stick: { radius: Ge.stick, color: r.core }, sphere: { scale: Ge.sphere, color: r.core } }
    );
    const a = (c, l) => {
      i.addStyle(
        { serial: c },
        {
          stick: { radius: Ge.markStick, color: mi(l) },
          sphere: { scale: Ge.markSphere, color: mi(l) }
        }
      );
    };
    for (const c of ja(n, s.mol, s.uniques, s.side))
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
    const h = fh(k, y.length);
    for (const [b, C, P] of [_, u])
      v.addSphere({
        center: { x: b, y: C, z: P },
        radius: Mi.sphereRadius,
        color: h,
        alpha: Mi.sphereAlpha
      });
  }), v.zoomTo();
  const { clientWidth: $, clientHeight: w } = a.container, p = $ - 2 * Zp;
  p > 0 && p < w && v.zoom(p / w), v.render(), e.settle(a);
}
function sh(e, t) {
  const { molA: n, molB: r, nameA: s, nameB: o, pairs: i } = t, a = e.box(`${s} to ${o}  (${i.size} mapped pairs)`), { axis: c, lift: l } = th(n.coords, r.coords), d = {
    ...r,
    coords: r.coords.map((y) => {
      const $ = [y[0], y[1], y[2]];
      return $[c] += l, $;
    })
  }, m = e.open(a, [n, d]), v = {
    stick: { radius: Ge.stick, colorscheme: "Jmol" },
    sphere: { scale: Ge.pairSphere, colorscheme: "Jmol" }
  };
  m.setStyle({ model: 0 }, v), m.setStyle({ model: 1 }, v);
  for (const [y, $] of i) {
    const w = n.coords[y], p = d.coords[$];
    !w || !p || m.addCylinder({
      start: { x: w[0], y: w[1], z: w[2] },
      end: { x: p[0], y: p[1], z: p[2] },
      radius: Ge.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: pc().pairLine
    });
  }
  m.zoomTo(), c === 2 ? m.rotate(90, "x") : c === 0 && m.rotate(-90, "z"), m.render(), e.settle(a);
}
function ih(e, t) {
  const n = Te, r = hc(t).map((s) => {
    const o = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), i = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${za()};`
    );
    return i.appendChild(ye("Loading 2D depiction...")), o.appendChild(i), e.named && o.appendChild(T("div", so, s.mol.name)), e.element.appendChild(o), { box: i, side: s };
  });
  wo().then((s) => {
    const o = qf(n, s), i = Jp(s, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = ja(n, c.mol, c.uniques, c.side), d = Vf(n, jr, l, c.custom, o, c.mol.symbols.length), m = Bf(s, c.side === "left" ? i.left : i.right, jr, d);
      if (a.replaceChildren(), !m) {
        a.appendChild(ye("Failed to parse molecule", !0));
        continue;
      }
      qa(a, m, jr);
      const v = a.querySelector("svg");
      v && Jf(v, c.mol, n, l, c.custom, o);
    }
  }).catch((s) => {
    for (const { box: o } of r)
      o.replaceChildren(ye(`RDKit failed to load: ${$e(s)}`, !0));
  });
}
function ah(e, t, n) {
  const { nameA: r, nameB: s, pairs: o, molA: i, molB: a, uniquesA: c, uniquesB: l } = t, d = T(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
  );
  e.element.appendChild(d), d.appendChild(
    T(
      "div",
      `font-size:${Q.title};font-weight:${ge.bold};color:${Ce.title};`,
      n.name || `${r} to ${s}`
    )
  );
  const m = lh(o, i.symbols, a.symbols), v = T("div", Re.row), y = [];
  let $ = null;
  const w = (A, N, R, D) => {
    const j = Lt(`${Re.plain}${Re.button}`, Re.className);
    j.appendChild(Ke(A, String(N), D)), j.onclick = () => {
      $ = $ === R ? null : R, b();
    }, y.push({ node: j, kinds: R }), v.appendChild(j);
  }, p = (A, N) => {
    const R = T("span", Re.plain);
    R.appendChild(Ke(A, N)), v.appendChild(R);
  };
  w("mapped atoms", o.size, ["mapped", "element"]), w("element changes", c.elements.length, ["element"], Te.modifiedColor), w(`unique to ${r}`, c.atoms.length, ["uniqueA"], Te.destroyedColor), w(`unique to ${s}`, l.atoms.length, ["uniqueB"], Te.createdColor), p(`atoms in ${r}`, String(i.symbols.length)), p(`atoms in ${s}`, String(a.symbols.length)), p("score", n.score == null ? Qe : n.score.toFixed(3)), d.appendChild(v), d.appendChild(T("div", Wn, "Correspondence"));
  const g = T("div", `font-size:${Q.small};line-height:1.6;color:${Ce.faint};`);
  d.appendChild(g);
  const f = T(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${eh}px,1fr));gap:${Z.xs} ${Z.md};font-family:${Q.mono};font-size:${Q.small};color:${Ce.primary};`
  );
  d.appendChild(f);
  const k = String(Math.max(i.symbols.length, a.symbols.length, 1) - 1).length, _ = (A, N) => `${(A == null ? Qe : String(A)).padStart(k)} ${N.padEnd(2)}`, u = (A) => {
    if (A.kind === "uniqueA") return `${r} atom ${A.a} ${A.symbolA} maps to nothing`;
    if (A.kind === "uniqueB") return `${s} atom ${A.b} ${A.symbolB} maps to nothing`;
    const N = A.kind === "element" ? ", an element change" : "";
    return `${r} atom ${A.a} ${A.symbolA} maps to ${s} atom ${A.b} ${A.symbolB}${N}`;
  }, h = (A) => {
    const N = T(
      "div",
      `white-space:pre;padding:${Z.xs} ${Z.md};border-radius:${Ee.sm};background:${Dt.card};border-left:3px solid ${Qp[A.kind] ?? "transparent"};`,
      `${_(A.a, A.symbolA)} -> ${_(A.b, A.symbolB)}`
    );
    return N.title = u(A), N.dataset.gufeRelation = A.kind, N;
  }, b = () => {
    const A = $, N = A ? m.filter((R) => A.includes(R.kind)) : m;
    f.replaceChildren(...N.map(h)), N.length || f.appendChild(
      T(
        "div",
        `font-size:${Q.small};line-height:1.6;color:${Ce.faint};grid-column:1/-1;`,
        $ ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), g.textContent = (o.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${s}, by atom index and element` + ($ ? "; click the chip again for all of them" : "");
    for (const R of y) {
      const D = R.kinds === $;
      R.node.setAttribute("aria-pressed", String(D)), R.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  b();
  const C = Object.entries(n.annotations ?? {}).filter(([A]) => A !== "score");
  if (!C.length) return;
  d.appendChild(T("div", Wn, "Annotations"));
  const P = T("div", `${jc}color:${Ce.faint};`);
  for (const [A, N] of C)
    P.appendChild(T("div", "", `${A}: ${String(N)}`));
  d.appendChild(P);
}
const Ti = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Dr = {
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Oi(e, t, n) {
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
  const n = _e(t, e.componentA, "SmallMoleculeComponentViz"), r = _e(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Ro(t, [e.componentA, e.componentB]) };
}
function dh(e, t, n) {
  const r = [], s = [];
  for (const [i, a] of n) {
    const c = e.coords[i], l = t.coords[a];
    c && l && (r.push(c), s.push(l));
  }
  const o = Vp(r, s);
  return o?.determined ? { ...t, coords: t.coords.map((i) => Bp(i, o.R, o.t)) } : t;
}
function uh(e, t) {
  let n = 0;
  for (const s of [e, t]) {
    let o = 1 / 0;
    for (const i of s)
      i[0] < o && (o = i[0]), i[0] - o > n && (n = i[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Dr.minSpread ? r : Dr.minSpread) * Dr.spreadFactor;
}
function fh(e, t) {
  const n = Yu, s = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(s), i = Math.min(o + 1, n.length - 1), a = s - o;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const d = (v) => parseInt(v.slice(1 + l * 2, 3 + l * 2), 16), m = Math.round(d(n[o]) + (d(n[i]) - d(n[o])) * a);
    c += m.toString(16).padStart(2, "0");
  }
  return c;
}
function ph(e, t) {
  const n = _e(t, e.componentA, "SmallMoleculeComponentViz"), r = _e(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const s = ve(n), o = ve(r), i = ch(e);
  let a, c;
  try {
    a = Xr(n.sdf, s), c = Xr(r.sdf, o);
  } catch (d) {
    return { problem: `Could not read a molecule: ${$e(d)}`, isError: !0 };
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
      uniquesA: Oi(i, a.symbols, c.symbols),
      uniquesB: Oi(l, c.symbols, a.symbols)
    }
  };
}
class hh extends Oe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = ph(n, Ct(n));
    if ("problem" in r)
      return t.appendChild(ye(r.problem, r.isError)), {};
    const s = r.pair, o = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const i = Up(o, ao(t)), a = rt("atom-mapping.mode", "plain", Ti.map(($) => $.id));
    let c = a.get();
    const l = T("div", fa), d = Ea(
      Ti,
      c,
      ($) => {
        c = $, y();
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
      const $ = m.start();
      if (i.clear(), c === "info") return ah(i, s, n);
      if (c === "2d") return ih(i, s);
      const w = v[c];
      i.element.appendChild(ye("Loading 3D viewer...")), dr().then(() => {
        $() && (i.element.replaceChildren(), w(i, s));
      }).catch((p) => {
        $() && i.element.replaceChildren(ye(`3D render failed: ${$e(p)}`, !0));
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
Fe("gufe-atom-mapping", hh);
const Fi = ["Force-directed", "Circular", "Radial"], mh = "ligand-network", gh = "Click a ligand or an edge to see it.";
function yh(e) {
  const { index: t, from: n, to: r, ...s } = e;
  return s;
}
function $h(e) {
  return tc(e);
}
const zi = (e) => Math.round(e * 100) / 100;
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
const Nt = { initial: 0.58, min: 0.25, max: 0.8 }, Ne = 38, ji = 1.5, Lr = {
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
}, wh = "6 4", Ii = 200, _h = 2, Sh = Math.SQRT2 * (Ne - _h), kh = 14, Ch = 18, ke = {
  fontSize: 11,
  below: Ne + 12,
  minFontSize: 7,
  insideWidth: (Ne - 6) * 2
}, zt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Di = 1.5, Eh = 6.5, xh = 0.9, Ah = 14, qr = { size: 8, clearance: 8 }, Ph = { fontSize: 10 }, Rh = 0.4, Mh = () => Jr(de.netMatchAtom), Tt = { padding: 4, opacity: 0.95 }, gc = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Nh = (e) => ac(gc, e), Th = (e) => Fp(gc, e), Oh = 1.8, Li = 2 * Ne + 68, Ae = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Li,
  linkScoreBonus: 90,
  linkStrength: 0.45,
  // Repulsion is local rather than the width of the graph. Reaching further
  // does not move neighbours apart - collision already decides that - it only
  // inflates the whole layout, and a graph spread over thousands of units is
  // one that is both too small to read as a whole and too crowded to read up
  // close.
  chargeStrength: -900,
  chargeDistanceMin: 20,
  chargeDistanceMax: 900,
  centerStrength: 0.08,
  /** Holds a pair exactly `NODE_SPACING` apart, so links settle at their distance rather than against this. */
  collisionPadding: Li / 2 - Ne,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Fh(e) {
  const t = T("div", zc);
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
    const o = ae("marker", {
      id: s,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Ne + qr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: qr.size,
      markerHeight: qr.size,
      orient: "auto"
    });
    return o.appendChild(ae("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), s;
  };
}
function jh(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Ih(e) {
  const [t, n] = de.netEdgeRamp.map(jh), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, i) => Math.round(o + (n[i] - o) * r)).join(",")})`;
}
const Pe = ve;
function Hn(e, t) {
  return t ? Pe(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
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
  const t = new lc(), n = pr("cpk"), r = Mh(), s = ($) => (e.matched().get($) ?? []).join(","), o = ($, w) => {
    if (!t.wants(w)) return;
    const p = e.nodes[w], g = e.matched().get(w), f = p.sdf && Co(
      $,
      p.sdf,
      Ii,
      Te.layout,
      g && { atoms: g, color: r, radius: Rh },
      n
    );
    if (!f) {
      t.refused(w);
      return;
    }
    if (!fc(e.depictionGroups[w], f, Ii, Sh)) {
      t.refused(w);
      return;
    }
    t.drew(w, s(w));
  }, i = () => t.forget(s, ($) => e.depictionGroups[$].replaceChildren()), a = [], c = ($, w) => {
    if (a[$]) return a[$];
    w.setAttribute("font-size", String(ke.fontSize));
    let p = 0;
    try {
      p = w.getBBox().width;
    } catch {
      return ke.fontSize;
    }
    if (!p) return ke.fontSize;
    const g = ke.fontSize * ke.insideWidth / p;
    return a[$] = Math.max(ke.minFontSize, Math.min(ke.fontSize, g)), a[$];
  }, l = [], d = ($) => {
    const w = e.captionPlates[$];
    if (l[$] === ke.below) {
      w.setAttribute("display", "inline");
      return;
    }
    let p = null;
    try {
      p = e.captions[$].getBBox();
    } catch {
      p = null;
    }
    if (!p?.width) {
      w.setAttribute("display", "none");
      return;
    }
    w.setAttribute("x", String(p.x - zt.captionPadX)), w.setAttribute("y", String(p.y - zt.captionPadY)), w.setAttribute("width", String(p.width + zt.captionPadX * 2)), w.setAttribute("height", String(p.height + zt.captionPadY * 2)), w.setAttribute("display", "inline"), l[$] = ke.below;
  }, m = ($, w) => {
    const p = w.structure && !t.has($) ? Th(w) : w;
    e.depictionGroups[$].setAttribute("display", p.structure ? "inline" : "none");
    const g = e.plates[$];
    g.setAttribute("display", p.structure ? "inline" : "none");
    const f = e.matched().has($);
    g.setAttribute("stroke", f ? de.netMatchStroke : de.netNodeStroke);
    const k = e.circles[$];
    k.setAttribute("fill", p.disc ? f ? de.netMatchFill : de.netNodeFill : "none"), k.setAttribute("stroke", p.disc ? f ? de.netMatchStroke : de.netNodeStroke : "none"), e.initials[$].setAttribute("display", p.initials ? "inline" : "none");
    const _ = e.charges[$];
    if (_) {
      const C = !p.structure, P = Ne * Lr.at;
      _.setAttribute("x", String(P)), _.setAttribute("y", String(-P)), _.setAttribute("font-size", String(C ? Lr.bigFontSize : Lr.fontSize)), _.setAttribute("font-weight", C ? ge.bold : ge.normal);
    }
    const u = e.captions[$], h = p.name === "below";
    if (u.setAttribute("fill", f ? de.netMatchStroke : h ? tf() : de.netNodeCaption), u.setAttribute("display", p.name === "none" ? "none" : "inline"), h || e.captionPlates[$].setAttribute("display", "none"), p.name === "none") return;
    const b = p.name === "inside";
    u.setAttribute("y", b ? "0" : String(ke.below)), u.setAttribute("dominant-baseline", b ? "middle" : "auto"), u.setAttribute("font-size", String(b ? c($, u) : ke.fontSize)), h && d($);
  };
  let v = null;
  return { apply: ($, w, p) => {
    const g = Nh($);
    v = g, e.stage.setAttribute("data-detail", g.id), e.edgeLabels.setAttribute("display", g.edgeScores ? "inline" : "none");
    for (let k = 0; k < e.nodes.length; k++) m(k, g);
    if (!g.structure) return;
    const f = dc(e.nodes, { scale: $, tx: w, ty: p }, e.viewport(), (k) => t.wants(k));
    f.length && e.rdkit().then((k) => {
      if (!(!k || v !== g))
        for (const _ of f)
          o(k, _), m(_, g);
    }).catch(() => {
    });
  }, forget: i };
}
function qh(e) {
  const t = qt("ligand-network.minScore", 0, 0, 1);
  return ic({
    namespace: "ligand-network",
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    query: e.query,
    search: {
      placeholder: "Search ligands",
      label: "Search ligands by name, SMILES or gufe key"
    },
    // The SMARTS box sits below the search and does the opposite thing: the
    // search narrows the list, and this hides nothing at all. Asked for that way
    // on purpose - which ligands do *not* contain the scaffold is the half of
    // the answer a filter throws away.
    smarts: {
      placeholder: "Colour by SMARTS",
      label: "Colour the ligands matching this SMARTS pattern",
      describe: (n) => {
        const r = n.unreadable ? `, ${n.unreadable} could not be read` : "";
        return `${n.matched.size} of ${e.nodes.length} ligands match${r}`;
      }
    },
    match: (n) => e.match(n),
    filters: (n) => {
      const r = T("div", `display:flex;align-items:center;gap:${Z.lg};font-size:${Q.small};color:${z.textMuted};`), s = T("span", `min-width:28px;color:${z.textPrimary};`, "0.00"), o = T("input", "flex:1;");
      return o.type = "range", o.min = "0", o.max = "1", o.step = "0.01", o.value = String(t.get()), e.filter.minScore = Number(o.value), o.setAttribute("aria-label", "Hide mappings scoring below this"), o.oninput = () => {
        e.filter.minScore = Number(o.value), s.textContent = e.filter.minScore.toFixed(2), t.set(e.filter.minScore), n(), e.refresh();
      }, r.appendChild(T("span", "", "score >=")), r.appendChild(o), r.appendChild(s), [r];
    },
    shows: (n) => Hn(n, e.query.text.trim().toLowerCase()),
    row: (n) => ({
      name: Pe(n),
      title: `${Pe(n)}
${n.smiles ?? ""}`
    }),
    // The threshold first, because a mapping below it is one this view is being
    // told not to show at all; then either end against the search, because a
    // search for one ligand is asking which mappings it has.
    edgeShows: (n) => {
      if ((n.score ?? 0) < e.filter.minScore) return !1;
      const r = e.query.text.trim().toLowerCase();
      return Hn(n.from, r) || Hn(n.to, r);
    },
    edgeRow: (n) => ({
      // The score before the name, where the alchemical network puts its
      // colour swatch: it is what the slider above the list acts on, and a
      // threshold with no scores in sight is a control with nothing to aim at.
      before: Vh(n.score),
      name: `${Pe(n.from)} to ${Pe(n.to)}`,
      title: `${Pe(n.from)} to ${Pe(n.to)}
${n.score == null ? "no score" : `score ${n.score.toFixed(3)}`}`
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
function Vh(e) {
  return T(
    "span",
    `flex-shrink:0;min-width:26px;font-variant-numeric:tabular-nums;color:${z.textMuted2};`,
    e == null ? "--" : e.toFixed(2)
  );
}
class Bh extends Oe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Ct(n), { nodes: s, edges: o, unresolved: i, dangling: a } = rc({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (x) => [x.componentA, x.componentB]
    }), c = er(n.name || "Ligand network");
    c.statsEl.appendChild(Ke("ligands", String(s.length))), c.statsEl.appendChild(Ke("mappings", String(o.length))), t.appendChild(c);
    const l = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const d = /* @__PURE__ */ new Set(), m = { minScore: 0 }, v = { text: "" }, y = () => Pa(), $ = oc(
      y,
      s.map((x) => x.sdf ?? "")
    );
    let w = /* @__PURE__ */ new Map();
    const p = async (x) => {
      const L = await $.run(x);
      return L.status === "superseded" || (w = L.status === "ok" ? L.matched : /* @__PURE__ */ new Map(), F()), L;
    }, g = Ao(
      c,
      () => qh({
        nodes: s,
        edges: o,
        selected: d,
        filter: m,
        query: v,
        refresh: () => K(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (x) => {
          N?.focusOn(x), O({ kind: "ligand", index: x });
        },
        // The same for a mapping, which the pane can draw as well as a
        // ligand: the list is how a reader reaches one of nine hundred edges.
        focusEdge: (x) => {
          N?.focusOnEdge(x), O({ kind: "edge", index: x });
        },
        match: (x) => p(x)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => S(),
        remember: ct("ligand-network.menuOpen", !1),
        extras: Po
      }
    );
    l.appendChild(g.panel);
    let f = () => {
    };
    const k = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), _ = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.appBg};`);
    l.appendChild(k), l.appendChild(
      Ka(l, k, _, {
        min: Nt.min,
        max: Nt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: qt("ligand-network.canvasShare", Nt.initial, Nt.min, Nt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => f(),
        onOrient: (x) => Eo(g.panel, x)
      })
    ), l.appendChild(_);
    const u = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${z.netCanvasBg};`);
    k.appendChild(u);
    const h = rt("ligand-network.layout", "Force-directed", Fi), b = this.#e(
      (x) => S(x),
      h,
      o.some((x) => Ei(x.from, x.to) !== 0)
    );
    k.appendChild(b.bar), Ta(u, () => N?.reset(), "Reset pan and zoom");
    const C = this.#t(_, r);
    if (!s.length)
      return u.appendChild(
        ye(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), C.message("Nothing to show."), {};
    i && lt(
      u,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && lt(u, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const P = y(), A = Fh(u);
    let N = null;
    const R = bh(ma(mh), s.length);
    let D = R && { scale: R.scale, tx: R.tx, ty: R.ty }, j = R ? R.nodes : null, q = o.length ? { kind: "edge", index: 0 } : null;
    if (R && R.selected >= 0) {
      const x = R.selectedKind ?? "edge";
      R.selected < (x === "ligand" ? s.length : o.length) && (q = { kind: x, index: R.selected });
    }
    const J = () => N?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let re = h.get(), Y = !1;
    const oe = co(), W = () => {
      if (!q) {
        C.message(o.length ? gh : "Click a ligand to see it.");
        return;
      }
      q.kind === "edge" ? C.showMapping(o[q.index]) : C.showLigand(s[q.index]);
    }, O = (x) => {
      q = x, W(), N?.setSelected(q);
    }, K = () => {
      const x = Dh(s, o, d, v.text, m.minScore);
      N?.setEmphasis(x?.nodes ?? null, x?.edges ?? null);
    }, F = () => N?.setMatches(w), S = (x = re) => {
      const L = N && x === re ? N.transform() : null;
      x !== re && (j = null);
      const ee = oe.start();
      re = x, N?.cleanup(), N = null, u.querySelectorAll("svg").forEach((E) => E.remove());
      const G = u.clientWidth || 800, ne = u.clientHeight || 600;
      Uh(s, G, ne, re, o), j && vh(s, j);
      const B = () => {
        if (!ee()) return;
        const E = this.#n(u, s, o, G, ne, O, P, A);
        N = E, E.setSelected(q), K(), F();
        const M = D ?? L;
        M ? (E.setTransform(M.scale, M.tx, M.ty), D = null) : E.fit();
      };
      if (re !== "Force-directed" || Y || j) {
        B();
        return;
      }
      Hh(s, o, G, ne).then((E) => {
        if (ee()) {
          if (E) {
            B();
            return;
          }
          Y = !0, b.picker.value = "Circular", lt(u, "d3 could not be loaded - showing the circular layout instead"), S("Circular");
        }
      }, B);
    };
    return f = () => S(), S(), W(), {
      onResize: () => S(),
      cleanup: () => {
        oe.stop(), $.cancel(), A.remove(), N?.cleanup(), N = null, C.cleanup();
      },
      viewState: () => ({
        nodes: s.map((x) => [zi(x.x), zi(x.y)]),
        ...J(),
        selected: q ? q.index : -1,
        selectedKind: q ? q.kind : "edge"
      })
    };
  }
  #e(t, n, r) {
    const s = T(
      "div",
      Ur
    ), o = T("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${z.textMuted};`);
    if (o.appendChild(T("span", "", "score")), o.appendChild(
      T(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${de.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(T("span", "", "0 -> 1")), s.appendChild(o), r) {
      const a = T("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${z.textMuted};`);
      a.appendChild(
        T(
          "span",
          `width:24px;height:0;border-top:2px dashed ${z.netEdgeLine};display:inline-block;`
        )
      ), a.appendChild(T("span", "", "net charge change")), s.appendChild(a);
    }
    s.appendChild(T("label", `font-size:${Q.body};margin-left:auto;color:${z.textMuted};`, "Layout"));
    const i = ar(
      Fi.map((a) => ({ id: a, label: a })),
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
    const l = ae("svg", {
      class: "gufe-graph",
      width: s,
      height: o,
      style: "display:block;touch-action:none;"
    }), d = ae("g");
    l.appendChild(d), t.appendChild(l);
    const m = ae("defs"), v = zh(m);
    l.appendChild(m);
    const y = [], $ = ae("g"), w = ae("g"), p = ae("g", { "pointer-events": "none" }), g = ae("g");
    d.append($, w, p, g);
    for (const q of r) {
      const J = Ih(q.score), re = Di + (q.score ?? 0.5) * (Eh - Di), Y = ae("line", {
        stroke: de.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": re + Tt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), oe = Ei(q.from, q.to), W = ae("line", {
        stroke: J,
        "stroke-width": re,
        "stroke-opacity": xh,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${v(J)})`,
        "pointer-events": "none",
        ...oe ? { "stroke-dasharray": wh } : {}
      }), O = ae("line", { stroke: "transparent", "stroke-width": Ah, style: "cursor:pointer;" });
      O.addEventListener("click", (S) => {
        S.stopPropagation(), i({ kind: "edge", index: q.index });
      }), O.addEventListener("mousemove", (S) => {
        c.show(
          `<div style="font-weight:700;color:${z.titleColor};">${je(Pe(q.from))} -&gt; ${je(Pe(q.to))}</div>` + (q.score == null ? `<div style="color:${z.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${q.score.toFixed(3)}</b></div>`) + (oe ? `<div style="margin-top:4px;">net charge <b>${je(at(oe))}</b> <span style="color:${z.textMuted2};">(${je(at(q.from.total_charge ?? 0))} to ${je(at(q.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Q.tiny};color:${z.textMuted2};">Click to see the mapping</div>`,
          S.offsetX,
          S.offsetY
        );
      }), O.addEventListener("mouseleave", () => c.hide()), y.push(Y), $.append(Y, W), w.appendChild(O);
      const K = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ph.fontSize,
        "font-weight": 600,
        fill: de.netEdgeLabel
      });
      K.textContent = q.score == null ? "" : q.score.toFixed(2);
      const F = ae("g", { class: "gufe-edge-label" });
      F.appendChild(K), p.appendChild(F);
    }
    const f = [], k = [], _ = [], u = [], h = [], b = [], C = [], P = [], A = n.map((q) => {
      const J = ae("g", { class: "gufe-node", style: "cursor:grab;" });
      J.addEventListener("mousemove", (S) => {
        c.show(
          `<div style="font-weight:700;color:${z.titleColor};">${je(Pe(q))}</div>` + (q.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${je(q.smiles)}</div>` : "") + (q.total_charge ? `<div style="margin-top:3px;">formal charge <b>${je(at(q.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${z.textMuted2};overflow-wrap:anywhere;">${je(q["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${z.textMuted2};">Click to see the ligand</div>`,
          S.offsetX,
          S.offsetY
        );
      }), J.addEventListener("mouseleave", () => c.hide());
      const re = ae("circle", {
        class: "gufe-node-halo",
        r: Ne + Tt.padding,
        fill: "none",
        stroke: de.netHaloColor,
        "stroke-width": Tt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      J.appendChild(re), h.push(re);
      const Y = ae("circle", {
        class: "gufe-node-disc",
        r: Ne,
        fill: de.netNodeFill,
        stroke: de.netNodeStroke,
        "stroke-width": ji,
        "pointer-events": "all"
      });
      J.appendChild(Y), k.push(Y);
      const oe = ae("circle", {
        class: "gufe-node-plate",
        r: Ne,
        fill: Wr(),
        stroke: de.netNodeStroke,
        "stroke-width": ji,
        display: "none",
        "pointer-events": "none"
      });
      J.appendChild(oe), _.push(oe);
      const W = ae("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      J.appendChild(W), f.push(W);
      const O = ae("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ch,
        "font-weight": 700,
        fill: de.netInitials,
        "pointer-events": "none"
      });
      if (O.textContent = Pe(q).slice(0, 2).toUpperCase(), J.appendChild(O), b.push(O), q.total_charge) {
        const S = ae("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: de.badgeFg,
          "pointer-events": "none"
        });
        S.textContent = at(q.total_charge), J.appendChild(S), P.push(S);
      } else
        P.push(null);
      const K = ae("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: ke.below,
        "font-size": ke.fontSize,
        "font-weight": 600,
        fill: de.netNodeCaption,
        "pointer-events": "none"
      });
      K.textContent = Un(Pe(q), kh), K.setAttribute("display", "none"), C.push(K);
      const F = ae("rect", {
        class: "gufe-node-caption-plate",
        rx: zt.captionRadius,
        fill: Wr(),
        display: "none",
        "pointer-events": "none"
      });
      return u.push(F), J.appendChild(F), J.appendChild(K), g.appendChild(J), J;
    }), N = () => {
      r.forEach((q, J) => {
        for (const Y of [y[J], $.children[J * 2 + 1], w.children[J]]) {
          const oe = Y;
          oe.setAttribute("x1", String(q.from.x)), oe.setAttribute("y1", String(q.from.y)), oe.setAttribute("x2", String(q.to.x)), oe.setAttribute("y2", String(q.to.y));
        }
        p.children[J].setAttribute(
          "transform",
          `translate(${(q.from.x + q.to.x) / 2},${(q.from.y + q.to.y) / 2 - 8})`
        );
      }), n.forEach((q, J) => A[J].setAttribute("transform", `translate(${q.x},${q.y})`));
    };
    N();
    let R = /* @__PURE__ */ new Map();
    const D = Lh({
      nodes: n,
      circles: k,
      plates: _,
      captionPlates: u,
      matched: () => R,
      captions: C,
      initials: b,
      charges: P,
      depictionGroups: f,
      edgeLabels: p,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: s, height: o })
    }), j = this.#r(
      l,
      d,
      n,
      A,
      N,
      D.apply,
      (q) => i({ kind: "ligand", index: q })
    );
    return {
      setSelected(q) {
        const J = q?.kind === "edge" ? q.index : -1, re = q?.kind === "ligand" ? q.index : -1;
        y.forEach((Y, oe) => Y.setAttribute("opacity", oe === J ? String(Tt.opacity) : "0")), h.forEach((Y, oe) => Y.setAttribute("opacity", oe === re ? String(Tt.opacity) : "0"));
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
      setMatches(q) {
        R = q, D.forget();
        const { scale: J, tx: re, ty: Y } = j.transform();
        D.apply(J, re, Y);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(q, J) {
        A.forEach((re, Y) => {
          const oe = !q || q.has(n[Y]["gufe-key"]);
          re.setAttribute("opacity", oe ? "1" : String(jt.node));
        }), r.forEach((re, Y) => {
          const oe = !J || J.has(Y), W = oe ? "0.9" : String(jt.edge);
          $.children[Y * 2 + 1].setAttribute("stroke-opacity", W), p.children[Y].setAttribute("opacity", oe ? "1" : String(jt.edge));
        });
      },
      focusOn(q) {
        const J = n[q];
        J && j.centreOn(J.x, J.y);
      },
      focusOnEdge(q) {
        const J = r[q];
        J && j.centreOn((J.from.x + J.to.x) / 2, (J.from.y + J.to.y) / 2);
      },
      fit: j.fit,
      reset: j.reset,
      transform: j.transform,
      setTransform: j.setTransform,
      cleanup: j.cleanup
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
    const c = ec(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Qa(r, Ne),
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
      (w, p) => c.get(p["gufe-key"]).length > c.get(w["gufe-key"]).length ? p : w
    ), m = /* @__PURE__ */ new Set([d["gufe-key"]]);
    let v = [d["gufe-key"]], y = 0;
    const $ = Math.min(t, n) * 0.18;
    for (; v.length; ) {
      a(
        v.map((p) => l.get(p)),
        y === 0 ? 0 : y * $ + 40
      );
      const w = [];
      for (const p of v)
        for (const g of c.get(p))
          m.has(g) || (m.add(g), w.push(g));
      v = w, y++;
    }
    a(e.filter((w) => !m.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function Hh(e, t, n, r) {
  return nc({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((s) => ({
      source: s.from["gufe-key"],
      target: s.to["gufe-key"],
      score: s.score
    })),
    tickMultiplier: Ae.tickMultiplier,
    forces: (s, o) => [
      [
        "link",
        s.forceLink(o).id((i) => i["gufe-key"]).distance((i) => Ae.linkBaseDistance + (1 - (i.score ?? 0.5)) * Ae.linkScoreBonus).strength(Ae.linkStrength)
      ],
      [
        "charge",
        s.forceManyBody().strength(Ae.chargeStrength).distanceMin(Ae.chargeDistanceMin).distanceMax(Ae.chargeDistanceMax)
      ],
      ["center", s.forceCenter(n / 2, r / 2).strength(Ae.centerStrength)],
      ["collision", s.forceCollide(Ne + Ae.collisionPadding).iterations(Ae.collisionIterations)],
      ["x", s.forceX(n / 2).strength(Ae.drift)],
      ["y", s.forceY(r / 2).strength(Ae.drift)]
    ]
  });
}
Fe("gufe-ligand-network", Bh);
function Mo(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const s = Me(t, r);
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
const Zn = (e, t) => Mo(e, t).join(" + "), qi = ["Protein", "ProteinMembrane", "SolvatedPDB"];
function Kh(e) {
  const t = e.split(" + ").filter(Boolean);
  return t.filter((r) => r !== "SmallMolecule" && r !== "Solvent" && !qi.includes(r)).length ? e : t.some((r) => qi.includes(r)) ? "complex" : t.some((r) => r === "Solvent") ? "solvent" : "vacuum";
}
function yc(e) {
  const t = e.map(Kh), n = /* @__PURE__ */ new Map();
  for (const r of t) n.set(r, (n.get(r) ?? 0) + 1);
  return t.map((r, s) => n.get(r) > 1 ? e[s] : r);
}
function Gh(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of [e.stateA, e.stateB]) {
    const s = r === void 0 ? null : _e(t, r, "ChemicalSystemViz");
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
    (r) => _e(t, r, "SmallMoleculeComponentViz")
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
    e.map((n) => Zn(n, t)),
    e.map((n) => ve(n))
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
    const r = Me(t, n[0]);
    if (r) return ve(r);
  }
  return vc(e.map((r) => ve(r))) || e[0].name;
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
    name: ve(e),
    components: t
  };
}
const Qh = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function wc(e, t) {
  const n = [], r = [];
  for (const s of Object.values(e.components ?? {})) {
    const o = Me(t, s);
    o && (Qh.includes(o.type) ? n.push(o) : o.type === "SmallMoleculeComponentViz" && r.push(o));
  }
  return { structures: n, ligands: r };
}
function em(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Vi = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], tm = 0.4;
class nm extends Oe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = wc(n, Ct(n)), s = r.structures.map((y, $) => $), o = r.ligands.map((y, $) => r.structures.length + $), i = rt(
      "complex.focus",
      "site",
      Vi.map((y) => y.id)
    );
    let a = i.get(), c = null;
    const l = Ya({
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
        kt(
          Vi,
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
      y && (Qr(y, l.opts, c, l.showStatus, { model: s }, l.stillWanted), np(y, { model: o }), y.render());
    }
    function m() {
      const y = l.viewer();
      y && (a === "site" && o.length ? (y.zoomTo({ model: o }), y.zoom(tm)) : y.zoomTo(), y.render(), v());
    }
    function v() {
      const y = l.viewer();
      y && (l.interaction()?.cleanup(), l.setInteraction(ur(l.pane.container, y)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(Bi(r, () => c));
    try {
      c = Ba(r.structures[0].pdb), l.setStats(Bi(r, () => c));
    } catch (y) {
      l.showStatus(`PDB parse error: ${$e(y)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), dr().then(() => {
      const y = nt.createViewer(l.pane.container, { backgroundColor: Dt.viewer() });
      l.setViewer(y);
      for (const $ of r.structures) y.addModel($.pdb, "pdb");
      for (const $ of r.ligands) y.addModel(La($.sdf), "sdf");
      d(), l.restoreCamera() ? v() : m(), y.spin(l.opts.spin ? "y" : !1), y.render();
    }).catch((y) => {
      l.showStatus(`Failed to render structure: ${$e(y)}`, "error");
    }), l.handle;
  }
}
function Bi(e, t) {
  const n = e.ligands.reduce((o, i) => {
    const a = ko(i.sdf);
    return a ? o + a.atoms : o;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, s = t();
  return s ? [r, ...Ua(s)] : [r];
}
Fe("gufe-complex", nm);
function rm(e, t) {
  return {
    ...e,
    registry: Ro(t, Object.values(e.components ?? {}))
  };
}
const om = "chemical-system.component", Ui = 200, Vn = { min: 140, max: 420 }, sm = "45%", im = "35%";
function am(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function cm(e) {
  return e.type === "UnknownComponentViz" ? tr(e.gufe_type) : null;
}
function Hi(e) {
  return T(
    "div",
    `padding:10px 10px 16px;font-weight:${ge.bold};font-size:${Q.title};color:${z.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class lm extends Oe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ct(n), s = [], o = [];
    for (const [A, N] of Object.entries(n.components ?? {})) {
      const R = Me(r, N);
      R ? s.push([A, R]) : o.push(A);
    }
    const i = n.name || "Chemical system";
    if (!s.length)
      return t.appendChild(Hi(i)), t.appendChild(
        ye(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = T(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), o.length && lt(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const c = T(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.panelBg};`
    );
    a.appendChild(c), c.appendChild(Hi(i));
    const l = T(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(l);
    const d = Ga(c, {
      initial: Ui,
      min: Vn.min,
      max: Vn.max,
      maxShare: sm,
      remember: qt("chemical-system.stripWidth", Ui, Vn.min, Vn.max),
      label: "Resize the component list",
      // What is mounted was drawn to the old shape, and a 3D viewer sizes its
      // canvas once.
      onResize: () => f?.resize?.()
    });
    a.appendChild(d.element);
    const m = T(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(m);
    const v = T(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    m.appendChild(v);
    const y = document.createElement("alchemy-view");
    y.style.cssText = "flex:1;min-width:0;min-height:0;", y.setAttribute(Hr, ""), v.appendChild(y);
    const $ = wc(n, r), w = em($), p = (A) => w && $.structures.some(
      (N) => N === A
    ), g = s.filter(([, A]) => !p(A)).map(([A, N]) => ({
      key: A,
      title: A,
      subtitle: am(N),
      badge: cm(N),
      element: y,
      point: () => {
        y.payload = N;
      }
    }));
    if (w) {
      const A = document.createElement("gufe-complex");
      A.style.cssText = "flex:1;min-width:0;min-height:0;", A.setAttribute(Hr, ""), A.payload = n, g.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${$.ligands.length === 1 ? $.ligands[0].name || "ligand" : "ligands"} in ${$.structures[0].name || "structure"}`,
        badge: null,
        element: A,
        point: () => {
        }
      });
    }
    let f = null;
    const k = (A) => {
      f !== A && (v.replaceChildren(A), f = A);
    }, _ = Gr(om), u = [], h = (A) => {
      u.forEach((N, R) => N.setAttribute("aria-pressed", String(R === A))), g[A].point(), k(g[A].element);
    }, b = (A) => {
      _.set(g[A].key), h(A);
    };
    g.forEach((A, N) => {
      const R = Lt(`${Qn.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      R.appendChild(
        T("span", `font-weight:700;color:${z.textPrimary};`, A.title)
      ), R.appendChild(
        T(
          "span",
          `font-size:${Q.small};color:${z.textMuted};`,
          A.subtitle
        )
      ), A.badge && R.appendChild(A.badge), R.onclick = () => b(N), u.push(R), l.appendChild(R);
    });
    const C = g.findIndex((A) => A.key === _.get());
    h(C < 0 ? 0 : C);
    const P = ro(a, (A) => {
      a.style.flexDirection = A ? "column" : "row", d.orient(A), c.style.maxHeight = A ? im : "none", c.style.borderBottom = A ? `1px solid ${z.splitBorder}` : "none", l.style.flexDirection = A ? "row" : "column", l.style.flexWrap = A ? "wrap" : "nowrap", f?.resize?.();
    });
    return {
      onResize: () => f?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        P(), f?.remove();
      }
    };
  }
}
Fe("gufe-chemical-system", lm);
const Ki = 210, dm = "42%", Bn = { min: 150, max: 460 };
function um(e, t) {
  const n = _e(t, e.stateA, "ChemicalSystemViz"), r = _e(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const s = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) s.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) s.push(o.componentA, o.componentB);
  return { ...e, registry: Ro(t, s) };
}
const No = {
  unchanged: z.diffUnchanged,
  changed: z.diffChanged,
  added: z.diffAdded,
  removed: z.diffRemoved
};
function Gi(e, t) {
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
function Vr(e, t, n) {
  const r = T(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${Z.md};padding:5px ${Z.lg};border-radius:${Ee.md};background:${z.cardBg};border:1px solid ${z.cardBorder};`
  );
  n && r.appendChild(
    T(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;color:${z.textMuted2};`,
      n
    )
  );
  const s = pm(e);
  if (!s)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Q.body};color:${z.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? z.cardBorder : No[t];
  const o = T(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${z.textPrimary};overflow-wrap:anywhere;`,
    s.name
  );
  return o.title = s.name, r.appendChild(o), s.type && r.appendChild(tr(s.type)), r;
}
function hm(e, t, n, r) {
  const s = T("div", `display:flex;flex-direction:column;gap:${Z.sm};min-width:0;`), o = T("div", `display:flex;align-items:center;gap:${Z.md};min-width:0;`);
  o.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${No[t]};`)
  );
  const i = T(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${ge.bold};color:${z.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return i.title = t, o.appendChild(i), s.appendChild(o), t === "unchanged" ? (s.appendChild(Vr(n, t, null)), s) : (s.appendChild(Vr(n, t, "A")), s.appendChild(Vr(r, t, "B")), s);
}
function mm(e, t) {
  const n = T(
    "div",
    `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};color:${z.textMuted};`
  );
  return n.appendChild(kt(e, e[0].id, (r) => t(Number(r)))), n;
}
const gm = (e) => e.side ? `${e.label} (${e.side})` : e.label;
function ym(e, t) {
  const n = Me(t, e.componentA), r = Me(t, e.componentB);
  return `${n ? ve(n) : "A"} to ${r ? ve(r) : "B"}`;
}
function Wi(e) {
  return T(
    "div",
    `font-weight:${ge.bold};font-size:${Q.heading};color:${z.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Ji(e, t) {
  const n = T("div", `display:flex;align-items:baseline;gap:${Z.md};min-width:0;font-size:${Q.small};`);
  return n.appendChild(T("span", `flex:0 0 auto;color:${z.textMuted};`, e)), n.appendChild(
    T("span", `min-width:0;font-weight:${ge.bold};color:${z.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class $m extends Oe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Ct(n), s = _e(r, n.stateA, "ChemicalSystemViz"), o = _e(r, n.stateB, "ChemicalSystemViz"), i = _e(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!s || !o) {
      const h = T("div", "padding:12px 14px;flex-shrink:0;");
      return h.appendChild(Wi(c)), t.appendChild(h), t.appendChild(
        ye("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = fm(s, o), d = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(d);
    const m = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${z.panelBg};`
    );
    d.appendChild(m);
    let v = null;
    const y = Ga(m, {
      initial: Ki,
      min: Bn.min,
      max: Bn.max,
      maxShare: dm,
      remember: qt("transformation.statesWidth", Ki, Bn.min, Bn.max),
      label: "Resize the state diff",
      // The mapping is two 3D viewers, and a viewer sizes its canvas once.
      onResize: () => v?.resize?.()
    });
    d.appendChild(y.element);
    const $ = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    d.appendChild($);
    const w = T("div", `display:flex;flex-direction:column;gap:${Z.md};min-width:0;`);
    w.appendChild(Wi(c)), w.appendChild(Ji("protocol", i?.gufe_type || i?.name || Qe)), w.appendChild(Ji("mappings", String(a.length))), m.appendChild(w);
    const p = T("div", `display:flex;flex-direction:column;gap:${Z.xs};`);
    for (const [h, b] of [
      ["State A", s],
      ["State B", o]
    ])
      p.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.06em;text-transform:uppercase;color:${z.textMuted2};overflow-wrap:anywhere;`,
          `${h}${b.name ? ` - ${b.name}` : ""}`
        )
      );
    m.appendChild(p);
    const g = /* @__PURE__ */ new Set();
    for (const h of l) {
      const b = s.components?.[h], C = o.components?.[h], P = Gi(b, C);
      g.add(P), m.appendChild(
        hm(
          h,
          P,
          Me(r, b),
          Me(r, C)
        )
      );
    }
    if (g.size > 1) {
      const h = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${Z.lg} 12px;padding-top:${Z.sm};font-size:${Q.small};color:${z.textMuted};`
      );
      for (const b of ["unchanged", "changed", "added", "removed"])
        g.has(b) && h.appendChild(Ke(b, "", No[b]));
      m.appendChild(h);
    }
    const f = T("div", Rc, a.length ? "Atom mapping" : "What changes");
    $.appendChild(f);
    const k = ro(t, (h) => {
      d.style.flexDirection = h ? "column" : "row", y.orient(h), m.style.maxHeight = h ? "45%" : "none", m.style.borderBottom = h ? `1px solid ${z.splitBorder}` : "none", f.style.display = h ? "block" : "none";
    }), _ = (h, b, C) => (C(0), b.length > 1 && $.appendChild(mm(b, C)), $.appendChild(h), v = h, {
      onResize: () => h.resize?.(),
      cleanup: () => {
        k(), h.remove();
      }
    });
    if (!a.length) {
      const h = [];
      for (const C of l) {
        const P = s.components?.[C], A = o.components?.[C];
        if (Gi(P, A) === "unchanged") continue;
        const N = P !== void 0 && A !== void 0, R = Me(r, P), D = Me(r, A);
        R && h.push({ label: C, side: N ? "A" : null, component: R }), D && h.push({ label: C, side: N ? "B" : null, component: D });
      }
      if (!h.length)
        return $.appendChild(
          ye(
            "This transformation carries no atom mapping, and its two states hold the same components - there is nothing here to draw."
          )
        ), { cleanup: k };
      const b = document.createElement("alchemy-view");
      return b.style.cssText = "flex:1;min-height:0;min-width:0;", _(
        b,
        h.map((C, P) => ({ id: String(P), label: gm(C) })),
        (C) => {
          b.payload = h[C].component;
        }
      );
    }
    const u = document.createElement("gufe-atom-mapping");
    return u.style.cssText = "flex:1;min-height:0;min-width:0;", _(
      u,
      a.map((h, b) => ({
        id: String(b),
        label: h.name || ym(h, r)
      })),
      // Cut loose with a registry of its own, so the embedded element resolves
      // its endpoints exactly as it would if the mapping were the whole payload.
      (h) => {
        u.payload = mc(a[h], r);
      }
    );
  }
}
Fe("gufe-transformation", $m);
const bm = () => ({ fill: de.netNodeFill, stroke: de.netNodeStroke }), dt = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Yi = (e) => e ? dt.depictedHeight : dt.height, Le = { pad: 6, size: 122, radius: 6, inset: 4 }, Xi = 200, Ot = {
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
}, vm = "6 4", He = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, wm = 7, _m = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Sm = (e) => ac(_m, e), It = { width: 2, selectedWidth: 3.5, min: 1, hit: 20, rail: 5 }, km = (e) => It.rail / 2 / Math.max(e, 1e-3), Zi = (e, t) => {
  const n = t ? It.selectedWidth : It.width;
  return Math.max(It.min, Math.min(n, n * e));
}, Br = { width: 3, selectedWidth: 4.5, min: 1.25 }, Qi = (e, t) => {
  const n = t ? Br.selectedWidth : Br.width;
  return Math.max(Br.min, Math.min(n, n * e));
}, wt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ft = { initial: 0.56, min: 0.25, max: 0.78 }, ea = { x: dt.width / 2, y: dt.depictedHeight / 2 }, ta = 1.4;
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
const tt = ve;
function Em(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, s] of Object.entries(e.components ?? {})) {
    n.push(r);
    const o = Me(t, s);
    if (!o) continue;
    n.push(ve(o), o["gufe-key"]);
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
        const d = _e(t, l, "SmallMoleculeComponentViz");
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
    const { from: a, to: c, at: l } = r.get(o), d = [...l].sort(($, w) => n.ofEdge[$] - n.ofEdge[w] || $ - w), m = d.map(($) => {
      const { index: w, from: p, to: g, ...f } = e[$];
      return f;
    }), v = m.map(($) => ve($)), y = bc(
      d.map(($) => n.signatures[n.ofEdge[$]]),
      v
    );
    return { index: i, from: a, to: c, legs: m, labels: y, name: vc(v) || v[0] };
  });
}
function Nm(e, t) {
  if (e.systems.length === 1) return `${tt(e)} - ${Zn(e.systems[0], t)}`;
  const n = e.systems.map(
    (r, s) => `${e.legs[s]}: ${ve(r)} - ${Zn(r, t)}`
  );
  return [tt(e), ...n].join(`
`);
}
function Tm(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e) {
    const i = _e(t, o.protocol, "ProtocolViz");
    if (!i) continue;
    const a = n.get(i["gufe-key"]);
    if (a) {
      a.count++;
      continue;
    }
    n.set(i["gufe-key"], { protocol: i, label: i.gufe_type || i.name || "Protocol", count: 1 });
  }
  const r = [...n.values()], s = /* @__PURE__ */ new Map();
  for (const o of r) s.set(o.label, (s.get(o.label) ?? 0) + 1);
  for (const o of r)
    (s.get(o.label) ?? 0) > 1 && (o.label = `${o.label} ${ve(o.protocol)}`);
  return r.sort((o, i) => o.label < i.label ? -1 : o.label > i.label ? 1 : 0);
}
function Om(e, t) {
  const n = Lt(`${Re.plain}${Re.button}gap:5px;`, Re.className);
  n.appendChild(T("span", "", e.length === 1 ? "protocol" : "protocols"));
  const r = e.map((s) => s.label);
  return n.appendChild(
    T("b", `color:${Ce.primary};`, e.length > 2 ? String(e.length) : r.join(", "))
  ), n.title = e.map((s) => `${s.label} - ${_c(s.count)}`).join(`
`), n.onclick = t, n;
}
function _c(e) {
  return `${e} transformation${e === 1 ? "" : "s"}`;
}
function Fm(e, t) {
  const n = T("div", Oc);
  n.className = "gufe-protocols", n.appendChild(T("div", `${Wn}padding-bottom:${Z.xs};`, "protocols"));
  for (const r of e) {
    const s = Lt(Qn.row);
    s.appendChild(T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", r.label)), s.appendChild(T("span", `flex-shrink:0;color:${z.textMuted};`, _c(r.count))), s.title = r.protocol["gufe-key"], s.onclick = () => t(r), n.appendChild(s);
  }
  return n;
}
function zm(e) {
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
      placeholder: "Search ligands",
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
function jm(e, t, n) {
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
function Im(e, t, n, r) {
  const s = /* @__PURE__ */ new Map();
  for (const o of t) {
    const i = o.from["gufe-key"], a = o.to["gufe-key"], c = [i, a].sort().join(" ");
    s.has(c) || s.set(c, { source: i, target: a });
  }
  return nc({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: [...s.values()],
    tickMultiplier: wt.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((a) => a["gufe-key"]).distance(wt.linkDistance).strength(wt.linkStrength)
      ],
      ["charge", o.forceManyBody().strength(wt.chargeStrength)],
      ["center", o.forceCenter(n / 2, r / 2)],
      ["collision", o.forceCollide(wt.collisionRadius).iterations(wt.collisionIterations)]
    ]
  });
}
class Dm extends Oe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Ct(n), {
      nodes: s,
      edges: o,
      unresolved: i,
      dangling: a
    } = rc({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (G) => [G.stateA, G.stateB]
    }), c = Wh(o, r), l = (G) => {
      const ne = c.signatures.indexOf(Zn(G, r));
      return ne < 0 ? c.signatures.length : ne;
    }, d = Xh(
      s.map((G) => tc(G)),
      r,
      l
    ).map((G) => ({ ...G, x: 0, y: 0 })), m = /* @__PURE__ */ new Map();
    for (const G of d) for (const ne of G.systems) m.set(ne["gufe-key"], G);
    const v = Mm(o, m, c), y = Tm(o, r);
    let $ = () => {
    };
    const w = er(n.name || "Alchemical network");
    d.length !== s.length && w.statsEl.appendChild(Ke("ligands", String(d.length))), w.statsEl.appendChild(Ke("systems", String(s.length))), w.statsEl.appendChild(Ke("transformations", String(o.length))), c.signatures.length > 1 && w.statsEl.appendChild(Ke("legs", c.names.join(", ")));
    const p = y.length ? Om(y, () => $()) : null;
    p && w.statsEl.appendChild(p);
    const g = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(g);
    let f = () => {
    };
    const k = /* @__PURE__ */ new Set(), _ = { text: "" };
    let u = null;
    const h = () => {
      const G = Cm(d, v, b, k, _.text, R);
      u?.setEmphasis(G?.nodes ?? null, G?.edges ?? null);
    }, b = d.map((G) => xm(G, r)), C = () => Pa(), P = Am(d, r), A = oc(C, P.sources), N = d.map((G, ne) => {
      const B = P.perNode[ne].find((V) => P.sources[V]), E = B === void 0 ? null : P.sources[B], M = [...new Set(G.systems.flatMap((V) => Mo(V, r)))].sort(), I = Rm(G, M, E !== null, P.perNode[ne].length);
      return {
        composition: I.composition,
        besides: I.besides,
        sdf: E,
        charge: B === void 0 ? 0 : P.charges[B],
        title: Nm(G, r)
      };
    });
    let R = null, D = () => {
    };
    const j = async (G) => {
      const ne = await A.run(G);
      return ne.status === "superseded" || (R = ne.status === "ok" ? new Set(d.flatMap((B, E) => P.perNode[E].some((M) => ne.matched.has(M)) ? [E] : [])) : null, D(), h()), ne;
    }, q = Ao(
      w,
      () => zm({
        nodes: d,
        edges: v,
        haystacks: b,
        captions: N.map((G) => G.composition),
        selected: k,
        query: _,
        refresh: () => h(),
        matched: () => R,
        match: (G) => j(G),
        mounted: (G) => {
          D = G;
        },
        // Finding a ligand in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (G) => {
          u?.focusOn(G), L("node", G);
        },
        // The same action for a line: reaching it is not the point, and a
        // transformation the reader cannot see on the canvas is exactly the
        // one they came to the list for.
        focusEdge: (G) => {
          u?.focusOnEdge(G), L("edge", G);
        }
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => f(),
        remember: ct("alchemical-network.menuOpen", !1),
        extras: Po
      }
    ), J = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), re = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.appBg};`), Y = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${z.netCanvasBg};`), oe = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    oe.appendChild(q.panel), oe.appendChild(Y), J.appendChild(w), J.appendChild(oe), g.appendChild(J), g.appendChild(
      Ka(g, J, re, {
        min: Ft.min,
        max: Ft.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: qt("alchemical-network.canvasShare", Ft.initial, Ft.min, Ft.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => f(),
        onOrient: (G) => {
          oe.style.flexDirection = G ? "column" : "row", Eo(q.panel, G);
        }
      })
    ), g.appendChild(re);
    const W = this.#t(re, r);
    if (!d.length)
      return Y.appendChild(
        ye(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), W.message("Nothing to show."), { cleanup: () => W.cleanup() };
    i && lt(
      Y,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && lt(
      Y,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let O = !1, K = null;
    const F = co(), S = new Map(d.map((G, ne) => [G["gufe-key"], N[ne].charge])), x = v.some(
      (G) => (S.get(G.to["gufe-key"]) ?? 0) !== (S.get(G.from["gufe-key"]) ?? 0)
    );
    Ta(Y, () => u?.reset(), "Reset pan and zoom"), x && J.appendChild(this.#e());
    const L = (G, ne) => {
      K = { kind: G, index: ne }, p?.setAttribute("aria-pressed", "false"), W.show(G === "node" ? d[ne] : v[ne], G), u?.setSelected(K);
    };
    $ = () => {
      K = null, u?.setSelected(null), p?.setAttribute("aria-pressed", "true"), W.showProtocols(y);
    };
    const ee = () => {
      const G = F.start(), ne = Y.clientWidth || 800, B = Y.clientHeight || 600;
      jm(d, ne, B);
      const E = () => {
        G() && (u?.cleanup(), Y.querySelectorAll("svg").forEach((M) => M.remove()), u = this.#n(Y, d, v, ne, B, N, C, L), u.setSelected(K), h());
      };
      if (O) {
        E();
        return;
      }
      Im(d, v, ne, B).then((M) => {
        G() && (M || (O = !0, lt(Y, "d3 could not be loaded - showing the circular layout instead")), E());
      }, E);
    };
    return f = ee, ee(), L("node", 0), {
      onResize: () => ee(),
      cleanup: () => {
        F.stop(), u?.cleanup(), u = null, W.cleanup();
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
    const t = T("div", Ur), n = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
    return n.appendChild(T("span", `width:24px;height:0;border-top:2px dashed ${z.netEdgeLine};flex-shrink:0;`)), n.appendChild(T("span", `font-size:${Q.small};color:${z.textMuted};`, "net charge change")), t.appendChild(n), t;
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
   * ## The protocols are drawn from the header
   *
   * Nothing on the canvas is a protocol, so `showProtocols` is the one way in
   * and the header chip is what calls it. One protocol goes straight to its
   * card; several go to `protocolList`, whose rows open the same card. Either
   * way the leg switcher goes away, because it belongs to a line.
   */
  #t(t, n) {
    const r = T("div", `${Ur}border-top:none;border-bottom:1px solid ${z.toolbarBorder};display:none;`);
    t.appendChild(r);
    const s = uc(t);
    let o = "";
    const i = () => {
      r.style.display = "none", r.replaceChildren();
    };
    return {
      ...s,
      showProtocols(a) {
        if (i(), a.length === 1) {
          s.show(a[0].protocol);
          return;
        }
        s.content(Fm(a, (c) => s.show(c.protocol)));
      },
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
        l.legs.length > 1 ? (r.replaceChildren(), r.appendChild(T("span", `font-size:${Q.small};color:${z.textMuted};flex-shrink:0;`, "leg")), r.appendChild(
          kt(
            l.labels.map((v, y) => ({
              id: String(y),
              label: v,
              title: ve(l.legs[y])
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
    const l = ae("svg", { class: "gufe-graph", width: s, height: o, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const d = ae("g");
    l.appendChild(d);
    const m = ae("g"), v = ae("g");
    d.append(m, v);
    let y = () => {
    };
    const $ = ec(l, d, {
      bounds: () => Qa(n, ea.x, ea.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (B, E, M) => y(B, E, M)
    }), w = (B, E) => {
      $.wasPan() || c(B, E);
    };
    let p = 1;
    const g = [], f = [], k = [], _ = [], u = new Map(n.map((B, E) => [B["gufe-key"], i[E].charge])), h = (B) => (u.get(B.to["gufe-key"]) ?? 0) - (u.get(B.from["gufe-key"]) ?? 0);
    r.forEach((B, E) => {
      const M = h(B), I = {
        stroke: de.netEdgeLine,
        "stroke-width": Zi(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        ...M ? { "stroke-dasharray": vm } : {}
      }, V = [
        B.name || "transformation",
        ...B.legs.map((le, me) => `${B.labels[me]}: ${ve(le)}`),
        M && `net charge change ${at(M)}`
      ].filter(Boolean).join(`
`), X = ae("line", { class: "gufe-edge", ...I, style: "cursor:pointer;" });
      if (Fr(X, V), X.addEventListener("click", () => w("edge", E)), m.appendChild(X), g.push(X), B.legs.length > 1) {
        const le = ae("line", { class: "gufe-edge-rail", ...I, "pointer-events": "none" });
        m.appendChild(le), f.push(le), _.push(E);
      } else
        f.push(null);
      const te = ae("line", {
        class: "gufe-edge-hit",
        stroke: "transparent",
        "stroke-width": It.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      Fr(te, V), te.addEventListener("click", () => w("edge", E)), m.appendChild(te), k.push(te);
    });
    const b = (B) => {
      const { from: E, to: M } = r[B], I = (pe, he, fe) => {
        pe.setAttribute("x1", String(E.x + he)), pe.setAttribute("y1", String(E.y + fe)), pe.setAttribute("x2", String(M.x + he)), pe.setAttribute("y2", String(M.y + fe));
      };
      I(k[B], 0, 0);
      const V = f[B], X = V ? Math.hypot(M.x - E.x, M.y - E.y) : 0;
      if (!V || !X) {
        I(g[B], 0, 0), V?.setAttribute("display", "none");
        return;
      }
      V.removeAttribute("display");
      const te = km(p), le = -(M.y - E.y) / X * te, me = (M.x - E.x) / X * te;
      I(g[B], le, me), I(V, -le, -me);
    };
    r.forEach((B, E) => b(E));
    const C = n.map(() => []), P = new Map(n.map((B, E) => [B, E]));
    r.forEach((B, E) => {
      const M = P.get(B.from), I = P.get(B.to);
      M !== void 0 && C[M].push(E), I !== void 0 && I !== M && C[I].push(E);
    });
    const A = [], N = [], R = [], D = [], j = [], q = [], J = [], re = [], Y = [], oe = bm();
    n.forEach((B, E) => {
      const M = i[E], I = Yi(M.sdf), V = ae("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${B.x},${B.y})`
      });
      R.push(V);
      const X = ae("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -I / 2,
        width: dt.width,
        height: I,
        rx: dt.radius,
        fill: oe.fill,
        stroke: oe.stroke,
        "stroke-width": Qi(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (V.appendChild(X), A.push(X), N.push(oe.stroke), M.sdf) {
        const me = ae("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -I / 2 + Le.pad,
          width: Le.size,
          height: Le.size,
          rx: Le.radius,
          fill: Wr(),
          display: "none",
          "pointer-events": "none"
        });
        if (V.appendChild(me), q.push(me), M.charge) {
          const fe = ae("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: de.badgeFg,
            "pointer-events": "none"
          });
          fe.textContent = at(M.charge), V.appendChild(fe), J.push(fe);
        } else
          J.push(null);
        const pe = ae("g", { transform: `translate(0,${-I / 2 + Le.pad + Le.size / 2})` }), he = ae("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        pe.appendChild(he), V.appendChild(pe), re.push(pe), Y.push(he);
      } else
        q.push(null), re.push(null), Y.push(null), J.push(null);
      const te = ae("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: de.netNodeLabel,
        "font-size": He.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      te.textContent = Un(tt(B), He.nameChars), V.appendChild(te), D.push(te);
      const le = ae("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: de.netInitials,
        "font-size": He.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      le.textContent = Un(M.composition, He.subChars), V.appendChild(le), j.push(le), Fr(V, M.title), v.appendChild(V);
    });
    const W = (B) => {
      const E = n[B];
      R[B].setAttribute("transform", `translate(${E.x},${E.y})`);
      for (const M of C[B]) b(M);
    }, O = new lc(), K = pr("cpk"), F = (B, E) => {
      if (!O.wants(E)) return;
      const M = Y[E], I = i[E].sdf;
      if (!M || !I) return;
      const V = Co(B, I, Xi, Te.layout, void 0, K);
      if (!V || !fc(M, V, Xi, Le.size - Le.inset * 2)) {
        O.refused(E);
        return;
      }
      O.drew(E);
    }, S = (B, E, M) => {
      const I = i[B], V = E && O.has(B), X = (Ye) => Ye * M >= wm, te = X(He.nameSize), le = X(He.subSize);
      D[B].setAttribute("display", te ? "inline" : "none"), j[B].setAttribute("display", le ? "inline" : "none"), q[B]?.setAttribute("display", V ? "inline" : "none"), Y[B]?.setAttribute("display", V ? "inline" : "none");
      const me = Yi(I.sdf), pe = -me / 2 + Le.pad, he = J[B];
      he && (he.setAttribute("x", String(V ? dt.width / 2 - Ot.inset : 0)), he.setAttribute(
        "y",
        String(V ? -me / 2 + Ot.inset : -me * Ot.bigAt)
      ), he.setAttribute("font-size", String(V ? Ot.fontSize : Ot.bigFontSize)), he.setAttribute("font-weight", V ? ge.normal : ge.bold)), q[B]?.setAttribute("y", String(pe)), re[B]?.setAttribute("transform", `translate(0,${pe + Le.size / 2})`);
      const fe = me / 2 - He.bottom;
      D[B].setAttribute("y", String(V ? fe - (le ? He.gap : 0) : -2)), j[B].setAttribute("y", String(V ? fe : 14)), j[B].textContent = Un(V ? I.besides : I.composition, He.subChars);
    };
    let x = null, L = null, ee = null;
    const G = () => {
      A.forEach((B, E) => {
        const M = L === E;
        B.setAttribute("stroke", M ? de.cardBorderActive : N[E]), B.setAttribute("stroke-width", String(Qi(p, M)));
      }), g.forEach((B, E) => {
        const M = ee === E, I = M ? de.netHaloColor : de.netEdgeLine, V = String(Zi(p, M));
        for (const X of [B, f[E]])
          X && (X.setAttribute("stroke", I), X.setAttribute("stroke-width", V));
      });
    };
    return y = (B, E, M) => {
      const I = Sm(B);
      x = I, l.setAttribute("data-detail", I.id);
      const V = p !== B;
      if (p = B, G(), V) for (const te of _) b(te);
      for (let te = 0; te < n.length; te++) S(te, I.structure, B);
      if (!I.structure) return;
      const X = dc(
        n,
        { scale: B, tx: E, ty: M },
        { width: s, height: o },
        (te) => !!i[te].sdf && O.wants(te)
      );
      X.length && a().then((te) => {
        if (!(!te || x !== I))
          for (const le of X)
            F(te, le), S(le, !0, B);
      }).catch(() => {
      });
    }, cc(R, n, $, { moved: W, clicked: (B) => c("node", B) }), $.fit(), {
      setSelected(B) {
        L = B?.kind === "node" ? B.index : null, ee = B?.kind === "edge" ? B.index : null, G();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(B, E) {
        R.forEach((M, I) => {
          const V = !B || B.has(n[I]["gufe-key"]);
          M.setAttribute("opacity", V ? "1" : String(jt.node));
        }), g.forEach((M, I) => {
          const V = !E || E.has(I);
          for (const X of [M, f[I]]) X?.setAttribute("opacity", V ? "1" : String(jt.edge));
        });
      },
      focusOn(B) {
        const E = n[B];
        E && $.centreOn(E.x, E.y, ta);
      },
      focusOnEdge(B) {
        const E = r[B];
        E && $.centreOn((E.from.x + E.to.x) / 2, (E.from.y + E.to.y) / 2, ta);
      },
      reset: $.reset,
      cleanup: $.cleanup
    };
  }
}
Fe("gufe-alchemical-network", Dm);
class Lm extends Oe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = er(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(tr(n.gufe_type)), t.appendChild(r);
    const s = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(s);
    const o = io();
    return o.style.maxWidth = "460px", o.appendChild(Jn("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Jn("Name", n.name)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${z.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), s.appendChild(o), {};
  }
}
Fe("gufe-protocol", Lm);
function qm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function na(e, t = !1) {
  const n = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.xl};padding:${Z.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${z.splitBorder};`)
  );
  return n.appendChild(T("div", Wn, e)), n;
}
function Kn(e) {
  return T(
    "div",
    `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${z.textMuted2};`,
    e
  );
}
function ra(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${Z.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Re.plain}${Re.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(Kn(t)), n;
}
class Vm extends Oe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const s = io();
    s.style.maxWidth = "560px", s.style.width = "100%", s.style.gap = "0";
    const o = na("Solvent", !0), i = T("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = T("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = T(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${ge.bold};line-height:1.1;color:${z.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Kn("SMILES")), i.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const g = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      g.appendChild(
        T(
          "div",
          `font-size:${Q.body};color:${z.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), g.appendChild(Kn("Name")), i.appendChild(g);
    }
    o.appendChild(i), s.appendChild(o);
    const d = na("Ions"), m = T("div", `display:flex;align-items:flex-end;gap:${Z.xxl};flex-wrap:wrap;`);
    n.positive_ion && m.appendChild(ra(n.positive_ion, "cation")), n.negative_ion && m.appendChild(ra(n.negative_ion, "anion"));
    const { value: v, unit: y } = qm(n.ion_concentration), $ = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), w = T("div", `display:flex;align-items:baseline;gap:${Z.md};justify-content:flex-end;`);
    w.appendChild(
      T(
        "div",
        `font-size:${Q.display};font-weight:${ge.bold};line-height:1;color:${z.titleColor};`,
        v
      )
    ), y && (w.appendChild(document.createTextNode(" ")), w.appendChild(T("div", `font-size:${Q.body};color:${z.textMuted};`, y))), $.appendChild(w), $.appendChild(Kn("Ion concentration")), m.appendChild($), d.appendChild(m);
    const p = n.neutralize;
    return d.appendChild(
      T(
        "span",
        `${Re.plain}align-self:flex-start;font-weight:${ge.bold};` + (p ? `background:${z.okBg};color:${z.okFg};` : `${Re.outline}color:${z.textMuted};`),
        p ? "Neutralized" : "Not neutralized"
      )
    ), d.appendChild(
      T(
        "div",
        Ic,
        p ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), s.appendChild(d), r.appendChild(s), {};
  }
}
Fe("gufe-solvent", Vm);
class Bm extends Oe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = er(n.name || "Unnamed component");
    r.statsEl.appendChild(tr(n.gufe_type)), t.appendChild(r);
    const s = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(s);
    const o = io();
    return o.style.maxWidth = "460px", o.appendChild(
      T(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${z.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      T(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${z.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Jn("Name", n.name || "(unnamed)")), o.appendChild(Jn("gufe class", n.gufe_type, !0)), s.appendChild(o), {};
  }
}
Fe("gufe-unknown-component", Bm);
aa();
typeof globalThis < "u" && (globalThis.alchemyViz = { settings: ju, reset: Du });
export {
  Um as PAYLOAD_TYPES,
  yo as VIEW_TAGS
};
