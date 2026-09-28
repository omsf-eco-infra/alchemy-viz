function T(e, t, n) {
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
const At = (e) => e.toLocaleString("en-US"), Qe = "-", Un = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function na(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const Sc = 460;
function eo(e, t, n = Sc) {
  let r = null;
  return na(e, (s) => {
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
    netGroupStroke: ["#4182e4", "#00bdaa", "#c060b8", "#e69f00", "#8f93a6"],
    netProtocolStroke: [
      "#4182e4",
      "#00bdaa",
      "#c060b8",
      "#e69f00",
      "#5ec26a",
      "#f4714e",
      "#9d8df1",
      "#ef6f9b",
      "#b5c94a",
      "#c7cbdd"
    ]
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
    netGroupStroke: ["#4182e4", "#009e8f", "#8a2283", "#c07d00", "#666666"],
    netProtocolStroke: [
      "#2f6fd0",
      "#009e8f",
      "#8a2283",
      "#c07d00",
      "#2e8b3d",
      "#d1441c",
      "#6a4fd0",
      "#b3306a",
      "#6f7d1c",
      "#4a5160"
    ]
  }
};
function Cc() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Oo = "data-gufe-theme";
function to() {
  return Cc() ? "dark" : "light";
}
let ue = Je[to()];
const ra = "--gufe-", oa = Object.keys(Je.light).filter(
  (e) => e !== "viewerBg" && typeof Je.light[e] == "string"
), j = Object.fromEntries(oa.map((e) => [e, `var(${ra}${e})`])), mr = (e) => oa.map((t) => `${ra}${t}:${e[t]};`).join("");
function kc() {
  return [
    `:root{color-scheme:light dark;${mr(Je.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${Oo}="light"]){${mr(Je.dark)}}}`,
    `:root[${Oo}="dark"]{${mr(Je.dark)}}`,
    // A button's three states, in one place. Every button in the codebase is
    // built from `BUTTON.base`, which deliberately sets no background: these do,
    // so that hovering is a stylesheet rule rather than a pair of handlers on
    // every button, written slightly differently each time.
    `.gufe-btn{background:${j.btnBg};}`,
    `.gufe-btn:hover:not(:disabled){background:${j.btnBgHover};}`,
    `.gufe-btn[aria-pressed="true"],.gufe-btn[aria-expanded="true"],.gufe-btn[data-gufe-on="1"]{background:${j.btnBgActive};}`,
    ".gufe-btn:disabled{opacity:.5;cursor:default;}",
    // The same for a pickable card or row, whose selected state is `aria-pressed`
    // for the same reason: it is the accessible fact, so styling from it cannot
    // drift out of step with what a screen reader is told.
    `.gufe-pick{background:${j.cardBg};border-color:${j.cardBorder};}`,
    `.gufe-pick:hover{background:${j.cardBgHover};}`,
    `.gufe-pick[aria-pressed="true"]{background:${j.cardBgActive};border-color:${j.cardBorderActive};}`,
    // A chip that selects what it counts. Its resting state is no background at
    // all - it is a count in a row of counts, not a control asking to be pressed
    // - so it is its own rule rather than a `gufe-pick` with the ground removed.
    ".gufe-chip{background:none;}",
    `.gufe-chip:hover{background:${j.cardBgHover};}`,
    `.gufe-chip[aria-pressed="true"]{background:${j.cardBgActive};color:${j.textPrimary};}`
  ].join(`
`);
}
const Fo = "alchemy-viz-theme";
function sa() {
  if (typeof document > "u" || document.getElementById(Fo)) return;
  const e = document.createElement("style");
  e.id = Fo, e.textContent = kc(), document.head.appendChild(e);
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
}, Y = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Ae = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px"
}, xe = {
  title: j.titleColor,
  primary: j.textPrimary,
  muted: j.textMuted,
  faint: j.textMuted2,
  error: j.errorFg
}, qt = {
  card: j.cardBg,
  /**
   * Where a 3D engine draws. Interface, not chemistry: it is the paper.
   *
   * The one literal here, and a function so it is read when a viewer is built
   * rather than when this module loads. 3Dmol wants `0x2b2b40`, which is not a
   * colour CSS has ever heard of, so this is the one surface a custom property
   * cannot carry.
   */
  viewer: () => ue.viewerBg
}, zo = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${j.btnFg};border:1px solid ${j.btnBorder};padding:${Y.sm} 9px;font-size:${Q.small};font-weight:${ge.bold};border-radius:${Ae.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, ia = `background:${j.selectBg};color:${j.textPrimary};border:1px solid ${j.selectBorder};border-radius:${Ae.md};padding:${Y.sm} ${Y.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, aa = `${ia}width:100%;box-sizing:border-box;cursor:text;`, ca = "24px", Ec = `display:flex;align-items:flex-start;gap:12px;padding:9px ${Y.xxl};flex-shrink:0;line-height:${ca};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};`, Gn = { min: "236px", max: "340px" }, et = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, la = `display:flex;flex-direction:column;gap:${Y.lg};flex:1;min-width:var(${et.min},${Gn.min});max-width:var(${et.max},${Gn.max});box-sizing:border-box;padding:${Y.xl};min-height:0;overflow-y:auto;background:${j.panelBg};border:0 solid ${j.splitBorder};border-right-width:var(${et.ruleX},1px);border-bottom-width:var(${et.ruleY},0);`, xc = "45%", Pc = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", jo = `display:flex;align-items:center;gap:${Y.xl};flex-wrap:wrap;padding:${Y.lg} ${Y.xxl};flex-shrink:0;background:${j.toolbarBg};border-top:1px solid ${j.toolbarBorder};`, Ac = `flex-shrink:0;padding:${Y.sm} ${Y.xl};font-size:${Q.heading};font-weight:${ge.bold};color:${j.labelFg};background:${j.labelBg};`, no = `position:absolute;top:${Y.md};left:${Y.md};z-index:10;pointer-events:none;max-width:calc(100% - ${Y.xxl} - ${Y.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${Y.xs} ${Y.lg};border-radius:${Ae.md};font-size:${Q.heading};font-weight:${ge.bold};color:${j.labelFg};background:${j.labelBg};`, Rc = `padding:${Y.xs} ${Y.lg};border-radius:${Ae.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${j.labelFg};background:${j.labelBg};`, Mc = `position:absolute;top:${Y.lg};left:${Y.lg};z-index:15;display:flex;align-items:center;gap:${Y.md};min-width:0;max-width:calc(100% - ${Y.xxl} - ${Y.xxl});`, Nc = "42px", Tc = `display:flex;flex-direction:column;gap:${Y.xs};padding:${Y.xxl} 18px;border-radius:${Ae.xl};background:${j.cardBg};border:1px solid ${j.cardBorder};`, ro = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${Y.sm};padding:${Y.lg} ${Y.xl};text-align:left;border-radius:${Ae.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Q.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${Y.md};padding:5px ${Y.lg};border:1px solid;border-radius:${Y.md};text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;color:${j.textPrimary};`,
  className: "gufe-pick"
}, Oc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${Y.xl};border-radius:${Ae.md};font-size:${Q.small};line-height:1.5;max-width:260px;background:${j.tooltipBg};border:1px solid ${j.tooltipBorder};color:${j.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, da = `position:absolute;bottom:${Y.xl};right:${Y.xl};display:flex;gap:${Y.sm};padding:${Y.sm};border-radius:${Ae.md};z-index:10;background:${j.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Fc = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${j.textMuted};`, qr = `font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`, Pe = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${Y.xs} ${Y.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${Y.xs} ${Y.md};border:1px solid transparent;border-radius:${Ae.pill};font-family:inherit;font-size:${Q.small};color:${j.textMuted};`,
  /**
   * A chip that selects what it counts.
   *
   * Deliberately sets no `background`: like `BUTTON` and `PICK`, resting, hover
   * and picked are one stylesheet rule keyed off `aria-pressed`, and an inline
   * background would beat it. Pair it with `CHIP.className`.
   */
  button: `cursor:pointer;border-color:${j.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${j.btnBg};border-color:${j.btnBorder};color:${j.textPrimary};`,
  /**
   * What a `button` chip's border goes back to.
   *
   * The same value `button` sets, named so that a chip which overrides its
   * border to say something - the alchemical network's protocol chips, where the
   * picked one takes the colour its lines are drawn in - has a resting value to
   * put back without reaching into the palette for it.
   */
  restBorder: j.btnBorder,
  className: "gufe-chip"
}, zc = `font-size:${Q.small};line-height:1.6;color:${j.textMuted2};`;
function Ve(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const s = T("span");
  return s.innerHTML = `${Ie(e)} <b style="color:${xe.primary};">${Ie(t)}</b>`, r.appendChild(s), r;
}
function lt(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${Y.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${Y.md} ${Y.xxl};border-radius:${Ae.md};font-size:${Q.body};background:${j.warnBg};color:${j.warnFg};border:1px solid ${j.warnBorder};`, e.appendChild(n), n;
}
function $e(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? xe.error : xe.faint};`,
    e
  );
}
function Zn(e) {
  const t = T("div", Ec);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${ge.bold};font-size:${Q.title};color:${xe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${xe.muted};`
  ), t.textEl = T("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = T("div", `display:flex;align-items:center;height:${ca};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Wn(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${xe.faint};`,
      e
    )
  );
  const s = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${xe.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return s.title = t, r.appendChild(s), r;
}
function Qn(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${Ae.xl};font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.04em;white-space:nowrap;background:${j.badgeBg};color:${j.badgeFg};`,
    e
  );
}
function oo() {
  return T("div", Tc);
}
function ua() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Br = "data-gufe-hide-name";
function so(e) {
  return !e.closest(`[${Br}]`);
}
const jc = ["debug", "gufe-debug"], Ic = "debug", Dc = "ALCHEMY_VIZ_DEBUG";
function Lc() {
  return !!globalThis[Dc];
}
function qc() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return jc.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Bc(e) {
  return e?.hasAttribute?.(Ic) ? !0 : Lc() || qc();
}
function Vc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ve(t)}>`;
  }
}
function Uc(e, t, n) {
  if (!Bc(n)) return;
  const r = Vc(t), s = t?.type, o = `[alchemy-viz] ${e}${typeof s == "string" ? ` ${s}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), i && console.groupEnd?.();
}
const fa = "ALCHEMY_VIZ_VIEW_STATE";
function pa(e) {
  const t = globalThis[fa];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
function io() {
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
const Hc = 150, Io = "data-gufe-shell";
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
    sa(), this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Io}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = j.appBg, this.style.color = j.textPrimary, this.style.fontFamily = Q.family, typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), Hc);
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
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${j.appBg};`
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
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = { exports: {} }, gr = {}, Ue = {}, rt = {}, yr = {}, $r = {}, br = {}, Do;
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
        return (f = this._str) !== null && f !== void 0 ? f : this._str = this._items.reduce((C, S) => `${C}${S}`, "");
      }
      get names() {
        var f;
        return (f = this._names) !== null && f !== void 0 ? f : this._names = this._items.reduce((C, S) => (S instanceof n && (C[S.str] = (C[S.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function s(g, ...f) {
      const C = [g[0]];
      let S = 0;
      for (; S < f.length; )
        a(C, f[S]), C.push(g[++S]);
      return new r(C);
    }
    e._ = s;
    const o = new r("+");
    function i(g, ...f) {
      const C = [$(g[0])];
      let S = 0;
      for (; S < f.length; )
        C.push(o), a(C, f[S]), C.push(o, $(g[++S]));
      return c(C), new r(C);
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
          const C = l(g[f - 1], g[f + 1]);
          if (C !== void 0) {
            g.splice(f - 1, 3, C);
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
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : $(Array.isArray(g) ? g.join(",") : g);
    }
    function v(g) {
      return new r($(g));
    }
    e.stringify = v;
    function $(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = $;
    function b(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new r(`.${g}`) : s`[${g}]`;
    }
    e.getProperty = b;
    function _(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new r(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function h(g) {
      return new r(g.toString());
    }
    e.regexpCode = h;
  })(br)), br;
}
var vr = {}, Lo;
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
        const v = this.toName(l), { prefix: $ } = v, b = (m = d.key) !== null && m !== void 0 ? m : d.ref;
        let _ = this._values[$];
        if (_) {
          const f = _.get(b);
          if (f)
            return f;
        } else
          _ = this._values[$] = /* @__PURE__ */ new Map();
        _.set(b, v);
        const h = this._scope[$] || (this._scope[$] = []), g = h.length;
        return h[g] = d.ref, v.setValue(d, { property: $, itemIndex: g }), v;
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
        let $ = t.nil;
        for (const b in l) {
          const _ = l[b];
          if (!_)
            continue;
          const h = m[b] = m[b] || /* @__PURE__ */ new Map();
          _.forEach((g) => {
            if (h.has(g))
              return;
            h.set(g, r.Started);
            let f = d(g);
            if (f) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              $ = (0, t._)`${$}${C} ${g} = ${f};${this.opts._n}`;
            } else if (f = v?.(g))
              $ = (0, t._)`${$}${f}${this.opts._n}`;
            else
              throw new n(g);
            h.set(g, r.Completed);
          });
        }
        return $;
      }
    }
    e.ValueScope = a;
  })(vr)), vr;
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
      optimizeNames(w, A) {
        return this;
      }
    }
    class i extends o {
      constructor(w, A, q) {
        super(), this.varKind = w, this.name = A, this.rhs = q;
      }
      render({ es5: w, _n: A }) {
        const q = w ? n.varKinds.var : this.varKind, ee = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${q} ${this.name}${ee};` + A;
      }
      optimizeNames(w, A) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = I(this.rhs, w, A)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(w, A, q) {
        super(), this.lhs = w, this.rhs = A, this.sideEffects = q;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, A) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = I(this.rhs, w, A), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(w, this.rhs);
      }
    }
    class c extends a {
      constructor(w, A, q, ee) {
        super(w, q, ee), this.op = A;
      }
      render({ _n: w }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + w;
      }
    }
    class l extends o {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `${this.label}:` + w;
      }
    }
    class d extends o {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `break${this.label ? ` ${this.label}` : ""};` + w;
      }
    }
    class m extends o {
      constructor(w) {
        super(), this.error = w;
      }
      render({ _n: w }) {
        return `throw ${this.error};` + w;
      }
      get names() {
        return this.error.names;
      }
    }
    class v extends o {
      constructor(w) {
        super(), this.code = w;
      }
      render({ _n: w }) {
        return `${this.code};` + w;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(w, A) {
        return this.code = I(this.code, w, A), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class $ extends o {
      constructor(w = []) {
        super(), this.nodes = w;
      }
      render(w) {
        return this.nodes.reduce((A, q) => A + q.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let A = w.length;
        for (; A--; ) {
          const q = w[A].optimizeNodes();
          Array.isArray(q) ? w.splice(A, 1, ...q) : q ? w[A] = q : w.splice(A, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, A) {
        const { nodes: q } = this;
        let ee = q.length;
        for (; ee--; ) {
          const te = q[ee];
          te.optimizeNames(w, A) || (L(w, te.names), q.splice(ee, 1));
        }
        return q.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, A) => R(w, A.names), {});
      }
    }
    class b extends $ {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class _ extends $ {
    }
    class h extends b {
    }
    h.kind = "else";
    class g extends b {
      constructor(w, A) {
        super(A), this.condition = w;
      }
      render(w) {
        let A = `if(${this.condition})` + super.render(w);
        return this.else && (A += "else " + this.else.render(w)), A;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const w = this.condition;
        if (w === !0)
          return this.nodes;
        let A = this.else;
        if (A) {
          const q = A.optimizeNodes();
          A = this.else = Array.isArray(q) ? new h(q) : q;
        }
        if (A)
          return w === !1 ? A instanceof g ? A : A.nodes : this.nodes.length ? this : new g(G(w), A instanceof g ? [A] : A.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, A) {
        var q;
        if (this.else = (q = this.else) === null || q === void 0 ? void 0 : q.optimizeNames(w, A), !!(super.optimizeNames(w, A) || this.else))
          return this.condition = I(this.condition, w, A), this;
      }
      get names() {
        const w = super.names;
        return D(w, this.condition), this.else && R(w, this.else.names), w;
      }
    }
    g.kind = "if";
    class f extends b {
    }
    f.kind = "for";
    class C extends f {
      constructor(w) {
        super(), this.iteration = w;
      }
      render(w) {
        return `for(${this.iteration})` + super.render(w);
      }
      optimizeNames(w, A) {
        if (super.optimizeNames(w, A))
          return this.iteration = I(this.iteration, w, A), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class S extends f {
      constructor(w, A, q, ee) {
        super(), this.varKind = w, this.name = A, this.from = q, this.to = ee;
      }
      render(w) {
        const A = w.es5 ? n.varKinds.var : this.varKind, { name: q, from: ee, to: te } = this;
        return `for(${A} ${q}=${ee}; ${q}<${te}; ${q}++)` + super.render(w);
      }
      get names() {
        const w = D(super.names, this.from);
        return D(w, this.to);
      }
    }
    class u extends f {
      constructor(w, A, q, ee) {
        super(), this.loop = w, this.varKind = A, this.name = q, this.iterable = ee;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, A) {
        if (super.optimizeNames(w, A))
          return this.iterable = I(this.iterable, w, A), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class p extends b {
      constructor(w, A, q) {
        super(), this.name = w, this.args = A, this.async = q;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    p.kind = "func";
    class y extends $ {
      render(w) {
        return "return " + super.render(w);
      }
    }
    y.kind = "return";
    class k extends b {
      render(w) {
        let A = "try" + super.render(w);
        return this.catch && (A += this.catch.render(w)), this.finally && (A += this.finally.render(w)), A;
      }
      optimizeNodes() {
        var w, A;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (A = this.finally) === null || A === void 0 || A.optimizeNodes(), this;
      }
      optimizeNames(w, A) {
        var q, ee;
        return super.optimizeNames(w, A), (q = this.catch) === null || q === void 0 || q.optimizeNames(w, A), (ee = this.finally) === null || ee === void 0 || ee.optimizeNames(w, A), this;
      }
      get names() {
        const w = super.names;
        return this.catch && R(w, this.catch.names), this.finally && R(w, this.finally.names), w;
      }
    }
    class P extends b {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    P.kind = "catch";
    class E extends b {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    E.kind = "finally";
    class M {
      constructor(w, A = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...A, _n: A.lines ? `
` : "" }, this._extScope = w, this._scope = new n.Scope({ parent: w }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(w) {
        return this._scope.name(w);
      }
      // reserves unique name in the external scope
      scopeName(w) {
        return this._extScope.name(w);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(w, A) {
        const q = this._extScope.value(w, A);
        return (this._values[q.prefix] || (this._values[q.prefix] = /* @__PURE__ */ new Set())).add(q), q;
      }
      getScopeValue(w, A) {
        return this._extScope.getValue(w, A);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, A, q, ee) {
        const te = this._scope.toName(A);
        return q !== void 0 && ee && (this._constants[te.str] = q), this._leafNode(new i(w, te, q)), te;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, A, q) {
        return this._def(n.varKinds.const, w, A, q);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, A, q) {
        return this._def(n.varKinds.let, w, A, q);
      }
      // `var` declaration with optional assignment
      var(w, A, q) {
        return this._def(n.varKinds.var, w, A, q);
      }
      // assignment code
      assign(w, A, q) {
        return this._leafNode(new a(w, A, q));
      }
      // `+=` code
      add(w, A) {
        return this._leafNode(new c(w, e.operators.ADD, A));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new v(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const A = ["{"];
        for (const [q, ee] of w)
          A.length > 1 && A.push(","), A.push(q), (q !== ee || this.opts.es5) && (A.push(":"), (0, t.addCodeArg)(A, ee));
        return A.push("}"), new t._Code(A);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, A, q) {
        if (this._blockNode(new g(w)), A && q)
          this.code(A).else().code(q).endIf();
        else if (A)
          this.code(A).endIf();
        else if (q)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new g(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, h);
      }
      _for(w, A) {
        return this._blockNode(w), A && this.code(A).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, A) {
        return this._for(new C(w), A);
      }
      // `for` statement for a range of values
      forRange(w, A, q, ee, te = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const J = this._scope.toName(w);
        return this._for(new S(te, J, A, q), () => ee(J));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, A, q, ee = n.varKinds.const) {
        const te = this._scope.toName(w);
        if (this.opts.es5) {
          const J = A instanceof t.Name ? A : this.var("_arr", A);
          return this.forRange("_i", 0, (0, t._)`${J}.length`, (ne) => {
            this.var(te, (0, t._)`${J}[${ne}]`), q(te);
          });
        }
        return this._for(new u("of", ee, te, A), () => q(te));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, A, q, ee = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${A})`, q);
        const te = this._scope.toName(w);
        return this._for(new u("in", ee, te, A), () => q(te));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(f);
      }
      // `label` statement
      label(w) {
        return this._leafNode(new l(w));
      }
      // `break` statement
      break(w) {
        return this._leafNode(new d(w));
      }
      // `return` statement
      return(w) {
        const A = new y();
        if (this._blockNode(A), this.code(w), A.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(y);
      }
      // `try` statement
      try(w, A, q) {
        if (!A && !q)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const ee = new k();
        if (this._blockNode(ee), this.code(w), A) {
          const te = this.name("e");
          this._currNode = ee.catch = new P(te), A(te);
        }
        return q && (this._currNode = ee.finally = new E(), this.code(q)), this._endBlockNode(P, E);
      }
      // `throw` statement
      throw(w) {
        return this._leafNode(new m(w));
      }
      // start self-balancing block
      block(w, A) {
        return this._blockStarts.push(this._nodes.length), w && this.code(w).endBlock(A), this;
      }
      // end the current self-balancing block
      endBlock(w) {
        const A = this._blockStarts.pop();
        if (A === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const q = this._nodes.length - A;
        if (q < 0 || w !== void 0 && q !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${q} vs ${w} expected`);
        return this._nodes.length = A, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, A = t.nil, q, ee) {
        return this._blockNode(new p(w, A, q)), ee && this.code(ee).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(p);
      }
      optimize(w = 1) {
        for (; w-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(w) {
        return this._currNode.nodes.push(w), this;
      }
      _blockNode(w) {
        this._currNode.nodes.push(w), this._nodes.push(w);
      }
      _endBlockNode(w, A) {
        const q = this._currNode;
        if (q instanceof w || A && q instanceof A)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${A ? `${w.kind}/${A.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const A = this._currNode;
        if (!(A instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = A.else = w, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const w = this._nodes;
        return w[w.length - 1];
      }
      set _currNode(w) {
        const A = this._nodes;
        A[A.length - 1] = w;
      }
    }
    e.CodeGen = M;
    function R(z, w) {
      for (const A in w)
        z[A] = (z[A] || 0) + (w[A] || 0);
      return z;
    }
    function D(z, w) {
      return w instanceof t._CodeOrName ? R(z, w.names) : z;
    }
    function I(z, w, A) {
      if (z instanceof t.Name)
        return q(z);
      if (!ee(z))
        return z;
      return new t._Code(z._items.reduce((te, J) => (J instanceof t.Name && (J = q(J)), J instanceof t._Code ? te.push(...J._items) : te.push(J), te), []));
      function q(te) {
        const J = A[te.str];
        return J === void 0 || w[te.str] !== 1 ? te : (delete w[te.str], J);
      }
      function ee(te) {
        return te instanceof t._Code && te._items.some((J) => J instanceof t.Name && w[J.str] === 1 && A[J.str] !== void 0);
      }
    }
    function L(z, w) {
      for (const A in w)
        z[A] = (z[A] || 0) - (w[A] || 0);
    }
    function G(z) {
      return typeof z == "boolean" || typeof z == "number" || z === null ? !z : (0, t._)`!${H(z)}`;
    }
    e.not = G;
    const oe = O(e.operators.AND);
    function X(...z) {
      return z.reduce(oe);
    }
    e.and = X;
    const re = O(e.operators.OR);
    function K(...z) {
      return z.reduce(re);
    }
    e.or = K;
    function O(z) {
      return (w, A) => w === t.nil ? A : A === t.nil ? w : (0, t._)`${H(w)} ${z} ${H(A)}`;
    }
    function H(z) {
      return z instanceof t.Name ? z : (0, t._)`(${z})`;
    }
  })($r)), $r;
}
var ce = {}, Vo;
function de() {
  if (Vo) return ce;
  Vo = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.checkStrictMode = ce.getErrorPath = ce.Type = ce.useFunc = ce.setEvaluated = ce.evaluatedPropsToName = ce.mergeEvaluated = ce.eachItem = ce.unescapeJsonPointer = ce.escapeJsonPointer = ce.escapeFragment = ce.unescapeFragment = ce.schemaRefOrVal = ce.schemaHasRulesButRef = ce.schemaHasRules = ce.checkUnknownRules = ce.alwaysValidSchema = ce.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Jn();
  function n(u) {
    const p = {};
    for (const y of u)
      p[y] = !0;
    return p;
  }
  ce.toHash = n;
  function r(u, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (s(u, p), !o(p, u.self.RULES.all));
  }
  ce.alwaysValidSchema = r;
  function s(u, p = u.schema) {
    const { opts: y, self: k } = u;
    if (!y.strictSchema || typeof p == "boolean")
      return;
    const P = k.RULES.keywords;
    for (const E in p)
      P[E] || S(u, `unknown keyword: "${E}"`);
  }
  ce.checkUnknownRules = s;
  function o(u, p) {
    if (typeof u == "boolean")
      return !u;
    for (const y in u)
      if (p[y])
        return !0;
    return !1;
  }
  ce.schemaHasRules = o;
  function i(u, p) {
    if (typeof u == "boolean")
      return !u;
    for (const y in u)
      if (y !== "$ref" && p.all[y])
        return !0;
    return !1;
  }
  ce.schemaHasRulesButRef = i;
  function a({ topSchemaRef: u, schemaPath: p }, y, k, P) {
    if (!P) {
      if (typeof y == "number" || typeof y == "boolean")
        return y;
      if (typeof y == "string")
        return (0, e._)`${y}`;
    }
    return (0, e._)`${u}${p}${(0, e.getProperty)(k)}`;
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
      for (const y of u)
        p(y);
    else
      p(u);
  }
  ce.eachItem = v;
  function $({ mergeNames: u, mergeToName: p, mergeValues: y, resultToName: k }) {
    return (P, E, M, R) => {
      const D = M === void 0 ? E : M instanceof e.Name ? (E instanceof e.Name ? u(P, E, M) : p(P, E, M), M) : E instanceof e.Name ? (p(P, M, E), E) : y(E, M);
      return R === e.Name && !(D instanceof e.Name) ? k(P, D) : D;
    };
  }
  ce.mergeEvaluated = {
    props: $({
      mergeNames: (u, p, y) => u.if((0, e._)`${y} !== true && ${p} !== undefined`, () => {
        u.if((0, e._)`${p} === true`, () => u.assign(y, !0), () => u.assign(y, (0, e._)`${y} || {}`).code((0, e._)`Object.assign(${y}, ${p})`));
      }),
      mergeToName: (u, p, y) => u.if((0, e._)`${y} !== true`, () => {
        p === !0 ? u.assign(y, !0) : (u.assign(y, (0, e._)`${y} || {}`), _(u, y, p));
      }),
      mergeValues: (u, p) => u === !0 ? !0 : { ...u, ...p },
      resultToName: b
    }),
    items: $({
      mergeNames: (u, p, y) => u.if((0, e._)`${y} !== true && ${p} !== undefined`, () => u.assign(y, (0, e._)`${p} === true ? true : ${y} > ${p} ? ${y} : ${p}`)),
      mergeToName: (u, p, y) => u.if((0, e._)`${y} !== true`, () => u.assign(y, p === !0 ? !0 : (0, e._)`${y} > ${p} ? ${y} : ${p}`)),
      mergeValues: (u, p) => u === !0 ? !0 : Math.max(u, p),
      resultToName: (u, p) => u.var("items", p)
    })
  };
  function b(u, p) {
    if (p === !0)
      return u.var("props", !0);
    const y = u.var("props", (0, e._)`{}`);
    return p !== void 0 && _(u, y, p), y;
  }
  ce.evaluatedPropsToName = b;
  function _(u, p, y) {
    Object.keys(y).forEach((k) => u.assign((0, e._)`${p}${(0, e.getProperty)(k)}`, !0));
  }
  ce.setEvaluated = _;
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
  function C(u, p, y) {
    if (u instanceof e.Name) {
      const k = p === f.Num;
      return y ? k ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : k ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return y ? (0, e.getProperty)(u).toString() : "/" + d(u);
  }
  ce.getErrorPath = C;
  function S(u, p, y = u.opts.strictSchema) {
    if (y) {
      if (p = `strict mode: ${p}`, y === !0)
        throw new Error(p);
      u.self.logger.warn(p);
    }
  }
  return ce.checkStrictMode = S, ce;
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
    function s(h, g = e.keywordError, f, C) {
      const { it: S } = h, { gen: u, compositeRule: p, allErrors: y } = S, k = m(h, g, f);
      C ?? (p || y) ? c(u, k) : l(S, (0, t._)`[${k}]`);
    }
    e.reportError = s;
    function o(h, g = e.keywordError, f) {
      const { it: C } = h, { gen: S, compositeRule: u, allErrors: p } = C, y = m(h, g, f);
      c(S, y), u || p || l(C, r.default.vErrors);
    }
    e.reportExtraError = o;
    function i(h, g) {
      h.assign(r.default.errors, g), h.if((0, t._)`${r.default.vErrors} !== null`, () => h.if(g, () => h.assign((0, t._)`${r.default.vErrors}.length`, g), () => h.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: h, keyword: g, schemaValue: f, data: C, errsCount: S, it: u }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const p = h.name("err");
      h.forRange("i", S, r.default.errors, (y) => {
        h.const(p, (0, t._)`${r.default.vErrors}[${y}]`), h.if((0, t._)`${p}.instancePath === undefined`, () => h.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(r.default.instancePath, u.errorPath))), h.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${g}`), u.opts.verbose && (h.assign((0, t._)`${p}.schema`, f), h.assign((0, t._)`${p}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(h, g) {
      const f = h.const("err", g);
      h.if((0, t._)`${r.default.vErrors} === null`, () => h.assign(r.default.vErrors, (0, t._)`[${f}]`), (0, t._)`${r.default.vErrors}.push(${f})`), h.code((0, t._)`${r.default.errors}++`);
    }
    function l(h, g) {
      const { gen: f, validateName: C, schemaEnv: S } = h;
      S.$async ? f.throw((0, t._)`new ${h.ValidationError}(${g})`) : (f.assign((0, t._)`${C}.errors`, g), f.return(!1));
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
      const { createErrors: C } = h.it;
      return C === !1 ? (0, t._)`{}` : v(h, g, f);
    }
    function v(h, g, f = {}) {
      const { gen: C, it: S } = h, u = [
        $(S, f),
        b(h, f)
      ];
      return _(h, g, u), C.object(...u);
    }
    function $({ errorPath: h }, { instancePath: g }) {
      const f = g ? (0, t.str)`${h}${(0, n.getErrorPath)(g, n.Type.Str)}` : h;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, f)];
    }
    function b({ keyword: h, it: { errSchemaPath: g } }, { schemaPath: f, parentSchema: C }) {
      let S = C ? g : (0, t.str)`${g}/${h}`;
      return f && (S = (0, t.str)`${S}${(0, n.getErrorPath)(f, n.Type.Str)}`), [d.schemaPath, S];
    }
    function _(h, { params: g, message: f }, C) {
      const { keyword: S, data: u, schemaValue: p, it: y } = h, { opts: k, propertyName: P, topSchemaRef: E, schemaPath: M } = y;
      C.push([d.keyword, S], [d.params, typeof g == "function" ? g(h) : g || (0, t._)`{}`]), k.messages && C.push([d.message, typeof f == "function" ? f(h) : f]), k.verbose && C.push([d.schema, p], [d.parentSchema, (0, t._)`${E}${M}`], [r.default.data, u]), P && C.push([d.propertyName, P]);
    }
  })(yr)), yr;
}
var Ko;
function Gc() {
  if (Ko) return rt;
  Ko = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.boolOrEmptySchema = rt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ De(), r = {
    message: "boolean schema is false"
  };
  function s(a) {
    const { gen: c, schema: l, validateName: d } = a;
    l === !1 ? i(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${d}.errors`, null), c.return(!0));
  }
  rt.topBoolOrEmptySchema = s;
  function o(a, c) {
    const { gen: l, schema: d } = a;
    d === !1 ? (l.var(c, !1), i(a)) : l.var(c, !0);
  }
  rt.boolOrEmptySchema = o;
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
  return rt;
}
var we = {}, ot = {}, Go;
function ha() {
  if (Go) return ot;
  Go = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.getRules = ot.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(s) {
    return typeof s == "string" && t.has(s);
  }
  ot.isJSONType = n;
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
  return ot.getRules = r, ot;
}
var He = {}, Wo;
function ma() {
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
  const e = /* @__PURE__ */ ha(), t = /* @__PURE__ */ ma(), n = /* @__PURE__ */ er(), r = /* @__PURE__ */ ie(), s = /* @__PURE__ */ de();
  var o;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(o || (we.DataType = o = {}));
  function i(f) {
    const C = a(f.type);
    if (C.includes("null")) {
      if (f.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!C.length && f.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      f.nullable === !0 && C.push("null");
    }
    return C;
  }
  we.getSchemaTypes = i;
  function a(f) {
    const C = Array.isArray(f) ? f : f ? [f] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  we.getJSONTypes = a;
  function c(f, C) {
    const { gen: S, data: u, opts: p } = f, y = d(C, p.coerceTypes), k = C.length > 0 && !(y.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(f, C[0]));
    if (k) {
      const P = b(C, u, p.strictNumbers, o.Wrong);
      S.if(P, () => {
        y.length ? m(f, C, y) : h(f);
      });
    }
    return k;
  }
  we.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function d(f, C) {
    return C ? f.filter((S) => l.has(S) || C === "array" && S === "array") : [];
  }
  function m(f, C, S) {
    const { gen: u, data: p, opts: y } = f, k = u.let("dataType", (0, r._)`typeof ${p}`), P = u.let("coerced", (0, r._)`undefined`);
    y.coerceTypes === "array" && u.if((0, r._)`${k} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => u.assign(p, (0, r._)`${p}[0]`).assign(k, (0, r._)`typeof ${p}`).if(b(C, p, y.strictNumbers), () => u.assign(P, p))), u.if((0, r._)`${P} !== undefined`);
    for (const M of S)
      (l.has(M) || M === "array" && y.coerceTypes === "array") && E(M);
    u.else(), h(f), u.endIf(), u.if((0, r._)`${P} !== undefined`, () => {
      u.assign(p, P), v(f, P);
    });
    function E(M) {
      switch (M) {
        case "string":
          u.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(P, (0, r._)`"" + ${p}`).elseIf((0, r._)`${p} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          u.elseIf((0, r._)`${k} == "boolean" || ${p} === null
              || (${k} == "string" && ${p} && ${p} == +${p})`).assign(P, (0, r._)`+${p}`);
          return;
        case "integer":
          u.elseIf((0, r._)`${k} === "boolean" || ${p} === null
              || (${k} === "string" && ${p} && ${p} == +${p} && !(${p} % 1))`).assign(P, (0, r._)`+${p}`);
          return;
        case "boolean":
          u.elseIf((0, r._)`${p} === "false" || ${p} === 0 || ${p} === null`).assign(P, !1).elseIf((0, r._)`${p} === "true" || ${p} === 1`).assign(P, !0);
          return;
        case "null":
          u.elseIf((0, r._)`${p} === "" || ${p} === 0 || ${p} === false`), u.assign(P, null);
          return;
        case "array":
          u.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${p} === null`).assign(P, (0, r._)`[${p}]`);
      }
    }
  }
  function v({ gen: f, parentData: C, parentDataProperty: S }, u) {
    f.if((0, r._)`${C} !== undefined`, () => f.assign((0, r._)`${C}[${S}]`, u));
  }
  function $(f, C, S, u = o.Correct) {
    const p = u === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let y;
    switch (f) {
      case "null":
        return (0, r._)`${C} ${p} null`;
      case "array":
        y = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        y = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        y = k((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        y = k();
        break;
      default:
        return (0, r._)`typeof ${C} ${p} ${f}`;
    }
    return u === o.Correct ? y : (0, r.not)(y);
    function k(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, P, S ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  we.checkDataType = $;
  function b(f, C, S, u) {
    if (f.length === 1)
      return $(f[0], C, S, u);
    let p;
    const y = (0, s.toHash)(f);
    if (y.array && y.object) {
      const k = (0, r._)`typeof ${C} != "object"`;
      p = y.null ? k : (0, r._)`!${C} || ${k}`, delete y.null, delete y.array, delete y.object;
    } else
      p = r.nil;
    y.number && delete y.integer;
    for (const k in y)
      p = (0, r.and)(p, $(k, C, S, u));
    return p;
  }
  we.checkDataTypes = b;
  const _ = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: C }) => typeof f == "string" ? (0, r._)`{type: ${f}}` : (0, r._)`{type: ${C}}`
  };
  function h(f) {
    const C = g(f);
    (0, n.reportError)(C, _);
  }
  we.reportTypeError = h;
  function g(f) {
    const { gen: C, data: S, schema: u } = f, p = (0, s.schemaRefOrVal)(f, u, "type");
    return {
      gen: C,
      keyword: "type",
      data: S,
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
function Wc() {
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
  function s(f, C) {
    const { gen: S, data: u, it: p } = f;
    S.if(d(S, u, C, p.opts.ownProperties), () => {
      f.setParams({ missingProperty: (0, e._)`${C}` }, !0), f.error();
    });
  }
  he.checkReportMissingProp = s;
  function o({ gen: f, data: C, it: { opts: S } }, u, p) {
    return (0, e.or)(...u.map((y) => (0, e.and)(d(f, C, y, S.ownProperties), (0, e._)`${p} = ${y}`)));
  }
  he.checkMissingProp = o;
  function i(f, C) {
    f.setParams({ missingProperty: C }, !0), f.error();
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
  function c(f, C, S) {
    return (0, e._)`${a(f)}.call(${C}, ${S})`;
  }
  he.isOwnProperty = c;
  function l(f, C, S, u) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} !== undefined`;
    return u ? (0, e._)`${p} && ${c(f, C, S)}` : p;
  }
  he.propertyInData = l;
  function d(f, C, S, u) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} === undefined`;
    return u ? (0, e.or)(p, (0, e.not)(c(f, C, S))) : p;
  }
  he.noPropertyInData = d;
  function m(f) {
    return f ? Object.keys(f).filter((C) => C !== "__proto__") : [];
  }
  he.allSchemaProperties = m;
  function v(f, C) {
    return m(C).filter((S) => !(0, t.alwaysValidSchema)(f, C[S]));
  }
  he.schemaProperties = v;
  function $({ schemaCode: f, data: C, it: { gen: S, topSchemaRef: u, schemaPath: p, errorPath: y }, it: k }, P, E, M) {
    const R = M ? (0, e._)`${f}, ${C}, ${u}${p}` : C, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, y)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const I = (0, e._)`${R}, ${S.object(...D)}`;
    return E !== e.nil ? (0, e._)`${P}.call(${E}, ${I})` : (0, e._)`${P}(${I})`;
  }
  he.callValidateCode = $;
  const b = (0, e._)`new RegExp`;
  function _({ gen: f, it: { opts: C } }, S) {
    const u = C.unicodeRegExp ? "u" : "", { regExp: p } = C.code, y = p(S, u);
    return f.scopeValue("pattern", {
      key: y.toString(),
      ref: y,
      code: (0, e._)`${p.code === "new RegExp" ? b : (0, r.useFunc)(f, p)}(${S}, ${u})`
    });
  }
  he.usePattern = _;
  function h(f) {
    const { gen: C, data: S, keyword: u, it: p } = f, y = C.name("valid");
    if (p.allErrors) {
      const P = C.let("valid", !0);
      return k(() => C.assign(P, !1)), P;
    }
    return C.var(y, !0), k(() => C.break()), y;
    function k(P) {
      const E = C.const("len", (0, e._)`${S}.length`);
      C.forRange("i", 0, E, (M) => {
        f.subschema({
          keyword: u,
          dataProp: M,
          dataPropType: t.Type.Num
        }, y), C.if((0, e.not)(y), P);
      });
    }
  }
  he.validateArray = h;
  function g(f) {
    const { gen: C, schema: S, keyword: u, it: p } = f;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((E) => (0, t.alwaysValidSchema)(p, E)) && !p.opts.unevaluated)
      return;
    const k = C.let("valid", !1), P = C.name("_valid");
    C.block(() => S.forEach((E, M) => {
      const R = f.subschema({
        keyword: u,
        schemaProp: M,
        compositeRule: !0
      }, P);
      C.assign(k, (0, e._)`${k} || ${P}`), f.mergeValidEvaluated(R, P) || C.if((0, e.not)(k));
    })), f.result(k, () => f.reset(), () => f.error(!0));
  }
  return he.validateUnion = g, he;
}
var Zo;
function Jc() {
  if (Zo) return je;
  Zo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.validateKeywordUsage = je.validSchemaType = je.funcKeywordCode = je.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ Le(), r = /* @__PURE__ */ er();
  function s(v, $) {
    const { gen: b, keyword: _, schema: h, parentSchema: g, it: f } = v, C = $.macro.call(f.self, h, g, f), S = l(b, _, C);
    f.opts.validateSchema !== !1 && f.self.validateSchema(C, !0);
    const u = b.name("valid");
    v.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${f.errSchemaPath}/${_}`,
      topSchemaRef: S,
      compositeRule: !0
    }, u), v.pass(u, () => v.error(!0));
  }
  je.macroKeywordCode = s;
  function o(v, $) {
    var b;
    const { gen: _, keyword: h, schema: g, parentSchema: f, $data: C, it: S } = v;
    c(S, $);
    const u = !C && $.compile ? $.compile.call(S.self, g, f, S) : $.validate, p = l(_, h, u), y = _.let("valid");
    v.block$data(y, k), v.ok((b = $.valid) !== null && b !== void 0 ? b : y);
    function k() {
      if ($.errors === !1)
        M(), $.modifying && i(v), R(() => v.error());
      else {
        const D = $.async ? P() : E();
        $.modifying && i(v), R(() => a(v, D));
      }
    }
    function P() {
      const D = _.let("ruleErrs", null);
      return _.try(() => M((0, e._)`await `), (I) => _.assign(y, !1).if((0, e._)`${I} instanceof ${S.ValidationError}`, () => _.assign(D, (0, e._)`${I}.errors`), () => _.throw(I))), D;
    }
    function E() {
      const D = (0, e._)`${p}.errors`;
      return _.assign(D, null), M(e.nil), D;
    }
    function M(D = $.async ? (0, e._)`await ` : e.nil) {
      const I = S.opts.passContext ? t.default.this : t.default.self, L = !("compile" in $ && !C || $.schema === !1);
      _.assign(y, (0, e._)`${D}${(0, n.callValidateCode)(v, p, I, L)}`, $.modifying);
    }
    function R(D) {
      var I;
      _.if((0, e.not)((I = $.valid) !== null && I !== void 0 ? I : y), D);
    }
  }
  je.funcKeywordCode = o;
  function i(v) {
    const { gen: $, data: b, it: _ } = v;
    $.if(_.parentData, () => $.assign(b, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(v, $) {
    const { gen: b } = v;
    b.if((0, e._)`Array.isArray(${$})`, () => {
      b.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${$} : ${t.default.vErrors}.concat(${$})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(v);
    }, () => v.error());
  }
  function c({ schemaEnv: v }, $) {
    if ($.async && !v.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(v, $, b) {
    if (b === void 0)
      throw new Error(`keyword "${$}" failed to compile`);
    return v.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, e.stringify)(b) });
  }
  function d(v, $, b = !1) {
    return !$.length || $.some((_) => _ === "array" ? Array.isArray(v) : _ === "object" ? v && typeof v == "object" && !Array.isArray(v) : typeof v == _ || b && typeof v > "u");
  }
  je.validSchemaType = d;
  function m({ schema: v, opts: $, self: b, errSchemaPath: _ }, h, g) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g)
      throw new Error("ajv implementation error");
    const f = h.dependencies;
    if (f?.some((C) => !Object.prototype.hasOwnProperty.call(v, C)))
      throw new Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
    if (h.validateSchema && !h.validateSchema(v[g])) {
      const S = `keyword "${g}" value is invalid at path "${_}": ` + b.errorsText(h.validateSchema.errors);
      if ($.validateSchema === "log")
        b.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return je.validateKeywordUsage = m, je;
}
var Ke = {}, Qo;
function Yc() {
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
      const { errorPath: b, dataPathArr: _, opts: h } = i, g = v.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      $(g), o.errorPath = (0, e.str)`${b}${(0, t.getErrorPath)(a, c, h.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [..._, o.parentDataProperty];
    }
    if (l !== void 0) {
      const b = l instanceof e.Name ? l : v.let("data", l, !0);
      $(b), m !== void 0 && (o.propertyName = m);
    }
    d && (o.dataTypes = d);
    function $(b) {
      o.data = b, o.dataLevel = i.dataLevel + 1, o.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), o.parentData = i.data, o.dataNames = [...i.dataNames, b];
    }
  }
  Ke.extendSubschemaData = r;
  function s(o, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: d }) {
    c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), d !== void 0 && (o.allErrors = d), o.jtdDiscriminator = i, o.jtdMetadata = a;
  }
  return Ke.extendSubschemaMode = s, Ke;
}
var Se = {}, wr, es;
function ga() {
  return es || (es = 1, wr = function e(t, n) {
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
  }), wr;
}
var _r = { exports: {} }, ts;
function Xc() {
  if (ts) return _r.exports;
  ts = 1;
  var e = _r.exports = function(r, s, o) {
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
      for (var $ in i) {
        var b = i[$];
        if (Array.isArray(b)) {
          if ($ in e.arrayKeywords)
            for (var _ = 0; _ < b.length; _++)
              t(r, s, o, b[_], a + "/" + $ + "/" + _, c, a, $, i, _);
        } else if ($ in e.propsKeywords) {
          if (b && typeof b == "object")
            for (var h in b)
              t(r, s, o, b[h], a + "/" + $ + "/" + n(h), c, a, $, i, h);
        } else ($ in e.keywords || r.allKeys && !($ in e.skipKeywords)) && t(r, s, o, b, a + "/" + $, c, a, $, i);
      }
      o(i, a, c, l, d, m, v);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return _r.exports;
}
var ns;
function tr() {
  if (ns) return Se;
  ns = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.getSchemaRefs = Se.resolveUrl = Se.normalizeId = Se._getFullPath = Se.getFullPath = Se.inlineRef = void 0;
  const e = /* @__PURE__ */ de(), t = ga(), n = Xc(), r = /* @__PURE__ */ new Set([
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
  function s(_, h = !0) {
    return typeof _ == "boolean" ? !0 : h === !0 ? !i(_) : h ? a(_) <= h : !1;
  }
  Se.inlineRef = s;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(_) {
    for (const h in _) {
      if (o.has(h))
        return !0;
      const g = _[h];
      if (Array.isArray(g) && g.some(i) || typeof g == "object" && i(g))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let h = 0;
    for (const g in _) {
      if (g === "$ref")
        return 1 / 0;
      if (h++, !r.has(g) && (typeof _[g] == "object" && (0, e.eachItem)(_[g], (f) => h += a(f)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(_, h = "", g) {
    g !== !1 && (h = m(h));
    const f = _.parse(h);
    return l(_, f);
  }
  Se.getFullPath = c;
  function l(_, h) {
    return _.serialize(h).split("#")[0] + "#";
  }
  Se._getFullPath = l;
  const d = /#\/?$/;
  function m(_) {
    return _ ? _.replace(d, "") : "";
  }
  Se.normalizeId = m;
  function v(_, h, g) {
    return g = m(g), _.resolve(h, g);
  }
  Se.resolveUrl = v;
  const $ = /^[a-z_][-a-z0-9._]*$/i;
  function b(_, h) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: g, uriResolver: f } = this.opts, C = m(_[g] || h), S = { "": C }, u = c(f, C, !1), p = {}, y = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (E, M, R, D) => {
      if (D === void 0)
        return;
      const I = u + M;
      let L = S[D];
      typeof E[g] == "string" && (L = G.call(this, E[g])), oe.call(this, E.$anchor), oe.call(this, E.$dynamicAnchor), S[M] = L;
      function G(X) {
        const re = this.opts.uriResolver.resolve;
        if (X = m(L ? re(L, X) : X), y.has(X))
          throw P(X);
        y.add(X);
        let K = this.refs[X];
        return typeof K == "string" && (K = this.refs[K]), typeof K == "object" ? k(E, K.schema, X) : X !== m(I) && (X[0] === "#" ? (k(E, p[X], X), p[X] = E) : this.refs[X] = I), X;
      }
      function oe(X) {
        if (typeof X == "string") {
          if (!$.test(X))
            throw new Error(`invalid anchor "${X}"`);
          G.call(this, `#${X}`);
        }
      }
    }), p;
    function k(E, M, R) {
      if (M !== void 0 && !t(E, M))
        throw P(R);
    }
    function P(E) {
      return new Error(`reference "${E}" resolves to more than one schema`);
    }
  }
  return Se.getSchemaRefs = b, Se;
}
var rs;
function nr() {
  if (rs) return Ue;
  rs = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.getData = Ue.KeywordCxt = Ue.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Gc(), t = /* @__PURE__ */ Yn(), n = /* @__PURE__ */ ma(), r = /* @__PURE__ */ Yn(), s = /* @__PURE__ */ Wc(), o = /* @__PURE__ */ Jc(), i = /* @__PURE__ */ Yc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ De(), l = /* @__PURE__ */ tr(), d = /* @__PURE__ */ de(), m = /* @__PURE__ */ er();
  function v(N) {
    if (u(N) && (y(N), S(N))) {
      h(N);
      return;
    }
    $(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  Ue.validateFunctionCode = v;
  function $({ gen: N, validateName: x, schema: F, schemaEnv: B, opts: W }, Z) {
    W.code.es5 ? N.func(x, (0, a._)`${c.default.data}, ${c.default.valCxt}`, B.$async, () => {
      N.code((0, a._)`"use strict"; ${f(F, W)}`), _(N, W), N.code(Z);
    }) : N.func(x, (0, a._)`${c.default.data}, ${b(W)}`, B.$async, () => N.code(f(F, W)).code(Z));
  }
  function b(N) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${N.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(N, x) {
    N.if(c.default.valCxt, () => {
      N.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), N.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), N.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), N.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), x.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      N.var(c.default.instancePath, (0, a._)`""`), N.var(c.default.parentData, (0, a._)`undefined`), N.var(c.default.parentDataProperty, (0, a._)`undefined`), N.var(c.default.rootData, c.default.data), x.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function h(N) {
    const { schema: x, opts: F, gen: B } = N;
    $(N, () => {
      F.$comment && x.$comment && D(N), E(N), B.let(c.default.vErrors, null), B.let(c.default.errors, 0), F.unevaluated && g(N), k(N), I(N);
    });
  }
  function g(N) {
    const { gen: x, validateName: F } = N;
    N.evaluated = x.const("evaluated", (0, a._)`${F}.evaluated`), x.if((0, a._)`${N.evaluated}.dynamicProps`, () => x.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), x.if((0, a._)`${N.evaluated}.dynamicItems`, () => x.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function f(N, x) {
    const F = typeof N == "object" && N[x.schemaId];
    return F && (x.code.source || x.code.process) ? (0, a._)`/*# sourceURL=${F} */` : a.nil;
  }
  function C(N, x) {
    if (u(N) && (y(N), S(N))) {
      p(N, x);
      return;
    }
    (0, e.boolOrEmptySchema)(N, x);
  }
  function S({ schema: N, self: x }) {
    if (typeof N == "boolean")
      return !N;
    for (const F in N)
      if (x.RULES.all[F])
        return !0;
    return !1;
  }
  function u(N) {
    return typeof N.schema != "boolean";
  }
  function p(N, x) {
    const { schema: F, gen: B, opts: W } = N;
    W.$comment && F.$comment && D(N), M(N), R(N);
    const Z = B.const("_errs", c.default.errors);
    k(N, Z), B.var(x, (0, a._)`${Z} === ${c.default.errors}`);
  }
  function y(N) {
    (0, d.checkUnknownRules)(N), P(N);
  }
  function k(N, x) {
    if (N.opts.jtd)
      return G(N, [], !1, x);
    const F = (0, t.getSchemaTypes)(N.schema), B = (0, t.coerceAndCheckDataType)(N, F);
    G(N, F, !B, x);
  }
  function P(N) {
    const { schema: x, errSchemaPath: F, opts: B, self: W } = N;
    x.$ref && B.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(x, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${F}"`);
  }
  function E(N) {
    const { schema: x, opts: F } = N;
    x.default !== void 0 && F.useDefaults && F.strictSchema && (0, d.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function M(N) {
    const x = N.schema[N.opts.schemaId];
    x && (N.baseId = (0, l.resolveUrl)(N.opts.uriResolver, N.baseId, x));
  }
  function R(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: N, schemaEnv: x, schema: F, errSchemaPath: B, opts: W }) {
    const Z = F.$comment;
    if (W.$comment === !0)
      N.code((0, a._)`${c.default.self}.logger.log(${Z})`);
    else if (typeof W.$comment == "function") {
      const ae = (0, a.str)`${B}/$comment`, se = N.scopeValue("root", { ref: x.root });
      N.code((0, a._)`${c.default.self}.opts.$comment(${Z}, ${ae}, ${se}.schema)`);
    }
  }
  function I(N) {
    const { gen: x, schemaEnv: F, validateName: B, ValidationError: W, opts: Z } = N;
    F.$async ? x.if((0, a._)`${c.default.errors} === 0`, () => x.return(c.default.data), () => x.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (x.assign((0, a._)`${B}.errors`, c.default.vErrors), Z.unevaluated && L(N), x.return((0, a._)`${c.default.errors} === 0`));
  }
  function L({ gen: N, evaluated: x, props: F, items: B }) {
    F instanceof a.Name && N.assign((0, a._)`${x}.props`, F), B instanceof a.Name && N.assign((0, a._)`${x}.items`, B);
  }
  function G(N, x, F, B) {
    const { gen: W, schema: Z, data: ae, allErrors: se, opts: fe, self: me } = N, { RULES: pe } = me;
    if (Z.$ref && (fe.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(Z, pe))) {
      W.block(() => ee(N, "$ref", pe.all.$ref.definition));
      return;
    }
    fe.jtd || X(N, x), W.block(() => {
      for (const ye of pe.rules)
        be(ye);
      be(pe.post);
    });
    function be(ye) {
      (0, n.shouldUseGroup)(Z, ye) && (ye.type ? (W.if((0, r.checkDataType)(ye.type, ae, fe.strictNumbers)), oe(N, ye), x.length === 1 && x[0] === ye.type && F && (W.else(), (0, r.reportTypeError)(N)), W.endIf()) : oe(N, ye), se || W.if((0, a._)`${c.default.errors} === ${B || 0}`));
    }
  }
  function oe(N, x) {
    const { gen: F, schema: B, opts: { useDefaults: W } } = N;
    W && (0, s.assignDefaults)(N, x.type), F.block(() => {
      for (const Z of x.rules)
        (0, n.shouldUseRule)(B, Z) && ee(N, Z.keyword, Z.definition, x.type);
    });
  }
  function X(N, x) {
    N.schemaEnv.meta || !N.opts.strictTypes || (re(N, x), N.opts.allowUnionTypes || K(N, x), O(N, N.dataTypes));
  }
  function re(N, x) {
    if (x.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = x;
        return;
      }
      x.forEach((F) => {
        z(N.dataTypes, F) || A(N, `type "${F}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), w(N, x);
    }
  }
  function K(N, x) {
    x.length > 1 && !(x.length === 2 && x.includes("null")) && A(N, "use allowUnionTypes to allow union type keyword");
  }
  function O(N, x) {
    const F = N.self.RULES.all;
    for (const B in F) {
      const W = F[B];
      if (typeof W == "object" && (0, n.shouldUseRule)(N.schema, W)) {
        const { type: Z } = W.definition;
        Z.length && !Z.some((ae) => H(x, ae)) && A(N, `missing type "${Z.join(",")}" for keyword "${B}"`);
      }
    }
  }
  function H(N, x) {
    return N.includes(x) || x === "number" && N.includes("integer");
  }
  function z(N, x) {
    return N.includes(x) || x === "integer" && N.includes("number");
  }
  function w(N, x) {
    const F = [];
    for (const B of N.dataTypes)
      z(x, B) ? F.push(B) : x.includes("integer") && B === "number" && F.push("integer");
    N.dataTypes = F;
  }
  function A(N, x) {
    const F = N.schemaEnv.baseId + N.errSchemaPath;
    x += ` at "${F}" (strictTypes)`, (0, d.checkStrictMode)(N, x, N.opts.strictTypes);
  }
  class q {
    constructor(x, F, B) {
      if ((0, o.validateKeywordUsage)(x, F, B), this.gen = x.gen, this.allErrors = x.allErrors, this.keyword = B, this.data = x.data, this.schema = x.schema[B], this.$data = F.$data && x.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(x, this.schema, B, this.$data), this.schemaType = F.schemaType, this.parentSchema = x.schema, this.params = {}, this.it = x, this.def = F, this.$data)
        this.schemaCode = x.gen.const("vSchema", ne(this.$data, x));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, F.schemaType, F.allowUndefined))
        throw new Error(`${B} value must be ${JSON.stringify(F.schemaType)}`);
      ("code" in F ? F.trackErrors : F.errors !== !1) && (this.errsCount = x.gen.const("_errs", c.default.errors));
    }
    result(x, F, B) {
      this.failResult((0, a.not)(x), F, B);
    }
    failResult(x, F, B) {
      this.gen.if(x), B ? B() : this.error(), F ? (this.gen.else(), F(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(x, F) {
      this.failResult((0, a.not)(x), void 0, F);
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
      const { schemaCode: F } = this;
      this.fail((0, a._)`${F} !== undefined && (${(0, a.or)(this.invalid$data(), x)})`);
    }
    error(x, F, B) {
      if (F) {
        this.setParams(F), this._error(x, B), this.setParams({});
        return;
      }
      this._error(x, B);
    }
    _error(x, F) {
      (x ? m.reportExtraError : m.reportError)(this, this.def.error, F);
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
    setParams(x, F) {
      F ? Object.assign(this.params, x) : this.params = x;
    }
    block$data(x, F, B = a.nil) {
      this.gen.block(() => {
        this.check$data(x, B), F();
      });
    }
    check$data(x = a.nil, F = a.nil) {
      if (!this.$data)
        return;
      const { gen: B, schemaCode: W, schemaType: Z, def: ae } = this;
      B.if((0, a.or)((0, a._)`${W} === undefined`, F)), x !== a.nil && B.assign(x, !0), (Z.length || ae.validateSchema) && (B.elseIf(this.invalid$data()), this.$dataError(), x !== a.nil && B.assign(x, !1)), B.else();
    }
    invalid$data() {
      const { gen: x, schemaCode: F, schemaType: B, def: W, it: Z } = this;
      return (0, a.or)(ae(), se());
      function ae() {
        if (B.length) {
          if (!(F instanceof a.Name))
            throw new Error("ajv implementation error");
          const fe = Array.isArray(B) ? B : [B];
          return (0, a._)`${(0, r.checkDataTypes)(fe, F, Z.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function se() {
        if (W.validateSchema) {
          const fe = x.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${fe}(${F})`;
        }
        return a.nil;
      }
    }
    subschema(x, F) {
      const B = (0, i.getSubschema)(this.it, x);
      (0, i.extendSubschemaData)(B, this.it, x), (0, i.extendSubschemaMode)(B, x);
      const W = { ...this.it, ...B, items: void 0, props: void 0 };
      return C(W, F), W;
    }
    mergeEvaluated(x, F) {
      const { it: B, gen: W } = this;
      B.opts.unevaluated && (B.props !== !0 && x.props !== void 0 && (B.props = d.mergeEvaluated.props(W, x.props, B.props, F)), B.items !== !0 && x.items !== void 0 && (B.items = d.mergeEvaluated.items(W, x.items, B.items, F)));
    }
    mergeValidEvaluated(x, F) {
      const { it: B, gen: W } = this;
      if (B.opts.unevaluated && (B.props !== !0 || B.items !== !0))
        return W.if(F, () => this.mergeEvaluated(x, a.Name)), !0;
    }
  }
  Ue.KeywordCxt = q;
  function ee(N, x, F, B) {
    const W = new q(N, F, x);
    "code" in F ? F.code(W, B) : W.$data && F.validate ? (0, o.funcKeywordCode)(W, F) : "macro" in F ? (0, o.macroKeywordCode)(W, F) : (F.compile || F.validate) && (0, o.funcKeywordCode)(W, F);
  }
  const te = /^\/(?:[^~]|~0|~1)*$/, J = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ne(N, { dataLevel: x, dataNames: F, dataPathArr: B }) {
    let W, Z;
    if (N === "")
      return c.default.rootData;
    if (N[0] === "/") {
      if (!te.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      W = N, Z = c.default.rootData;
    } else {
      const me = J.exec(N);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const pe = +me[1];
      if (W = me[2], W === "#") {
        if (pe >= x)
          throw new Error(fe("property/index", pe));
        return B[x - pe];
      }
      if (pe > x)
        throw new Error(fe("data", pe));
      if (Z = F[x - pe], !W)
        return Z;
    }
    let ae = Z;
    const se = W.split("/");
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
function ao() {
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
var ke = {}, is;
function or() {
  if (is) return ke;
  is = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.resolveSchema = ke.getCompilingSchema = ke.resolveRef = ke.compileSchema = ke.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ao(), n = /* @__PURE__ */ De(), r = /* @__PURE__ */ tr(), s = /* @__PURE__ */ de(), o = /* @__PURE__ */ nr();
  class i {
    constructor(g) {
      var f;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof g.schema == "object" && (C = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (f = g.baseId) !== null && f !== void 0 ? f : (0, r.normalizeId)(C?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  ke.SchemaEnv = i;
  function a(h) {
    const g = d.call(this, h);
    if (g)
      return g;
    const f = (0, r.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: C, lines: S } = this.opts.code, { ownProperties: u } = this.opts, p = new e.CodeGen(this.scope, { es5: C, lines: S, ownProperties: u });
    let y;
    h.$async && (y = p.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = p.scopeName("validate");
    h.validateName = k;
    const P = {
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
      validateName: k,
      ValidationError: y,
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
      this._compilations.add(h), (0, o.validateFunctionCode)(P), p.optimize(this.opts.code.optimize);
      const M = p.toString();
      E = `${p.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (E = this.opts.code.process(E, h));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, E)(this, this.scope.get());
      if (this.scope.value(k, { ref: D }), D.errors = null, D.schema = h.schema, D.schemaEnv = h, h.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: k, validateCode: M, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: I, items: L } = P;
        D.evaluated = {
          props: I instanceof e.Name ? void 0 : I,
          items: L instanceof e.Name ? void 0 : L,
          dynamicProps: I instanceof e.Name,
          dynamicItems: L instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return h.validate = D, h;
    } catch (M) {
      throw delete h.validate, delete h.validateName, E && this.logger.error("Error compiling schema, function code:", E), M;
    } finally {
      this._compilations.delete(h);
    }
  }
  ke.compileSchema = a;
  function c(h, g, f) {
    var C;
    f = (0, r.resolveUrl)(this.opts.uriResolver, g, f);
    const S = h.refs[f];
    if (S)
      return S;
    let u = v.call(this, h, f);
    if (u === void 0) {
      const p = (C = h.localRefs) === null || C === void 0 ? void 0 : C[f], { schemaId: y } = this.opts;
      p && (u = new i({ schema: p, schemaId: y, root: h, baseId: g }));
    }
    if (u !== void 0)
      return h.refs[f] = l.call(this, u);
  }
  ke.resolveRef = c;
  function l(h) {
    return (0, r.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : a.call(this, h);
  }
  function d(h) {
    for (const g of this._compilations)
      if (m(g, h))
        return g;
  }
  ke.getCompilingSchema = d;
  function m(h, g) {
    return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
  }
  function v(h, g) {
    let f;
    for (; typeof (f = this.refs[g]) == "string"; )
      g = f;
    return f || this.schemas[g] || $.call(this, h, g);
  }
  function $(h, g) {
    const f = this.opts.uriResolver.parse(g), C = (0, r._getFullPath)(this.opts.uriResolver, f);
    let S = (0, r.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && C === S)
      return _.call(this, f, h);
    const u = (0, r.normalizeId)(C), p = this.refs[u] || this.schemas[u];
    if (typeof p == "string") {
      const y = $.call(this, h, p);
      return typeof y?.schema != "object" ? void 0 : _.call(this, f, y);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), u === (0, r.normalizeId)(g)) {
        const { schema: y } = p, { schemaId: k } = this.opts, P = y[k];
        return P && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, P)), new i({ schema: y, schemaId: k, root: h, baseId: S });
      }
      return _.call(this, f, p);
    }
  }
  ke.resolveSchema = $;
  const b = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(h, { baseId: g, schema: f, root: C }) {
    var S;
    if (((S = h.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const y of h.fragment.slice(1).split("/")) {
      if (typeof f == "boolean")
        return;
      const k = f[(0, s.unescapeFragment)(y)];
      if (k === void 0)
        return;
      f = k;
      const P = typeof f == "object" && f[this.opts.schemaId];
      !b.has(y) && P && (g = (0, r.resolveUrl)(this.opts.uriResolver, g, P));
    }
    let u;
    if (typeof f != "boolean" && f.$ref && !(0, s.schemaHasRulesButRef)(f, this.RULES)) {
      const y = (0, r.resolveUrl)(this.opts.uriResolver, g, f.$ref);
      u = $.call(this, C, y);
    }
    const { schemaId: p } = this.opts;
    if (u = u || new i({ schema: f, schemaId: p, root: C, baseId: g }), u.schema !== u.root.schema)
      return u;
  }
  return ke;
}
const Zc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Qc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", el = "object", tl = ["$data"], nl = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, rl = !1, ol = {
  $id: Zc,
  description: Qc,
  type: el,
  required: tl,
  properties: nl,
  additionalProperties: rl
};
var Kt = {}, Mt = { exports: {} }, Sr, as;
function ya() {
  if (as) return Sr;
  as = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(u) {
    let p = "", y = 0, k = 0;
    for (k = 0; k < u.length; k++)
      if (y = u[k].charCodeAt(0), y !== 48) {
        if (!(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
          return "";
        p += u[k];
        break;
      }
    for (k += 1; k < u.length; k++) {
      if (y = u[k].charCodeAt(0), !(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
        return "";
      p += u[k];
    }
    return p;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(u) {
    return u.length = 0, !0;
  }
  function c(u, p, y) {
    if (u.length) {
      const k = o(u);
      if (k !== "")
        p.push(k);
      else
        return y.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function l(u) {
    let p = 0;
    const y = { error: !1, address: "", zone: "" }, k = [], P = [];
    let E = !1, M = !1, R = c;
    for (let D = 0; D < u.length; D++) {
      const I = u[D];
      if (!(I === "[" || I === "]"))
        if (I === ":") {
          if (E === !0 && (M = !0), !R(P, k, y))
            break;
          if (++p > 7) {
            y.error = !0;
            break;
          }
          D > 0 && u[D - 1] === ":" && (E = !0), k.push(":");
          continue;
        } else if (I === "%") {
          if (!R(P, k, y))
            break;
          R = a;
        } else {
          P.push(I);
          continue;
        }
    }
    return P.length && (R === a ? y.zone = P.join("") : M ? k.push(P.join("")) : k.push(o(P))), y.address = k.join(""), y;
  }
  function d(u) {
    if (m(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const p = l(u);
    if (p.error)
      return { host: u, isIPV6: !1 };
    {
      let y = p.address, k = p.address;
      return p.zone && (y += "%" + p.zone, k += "%25" + p.zone), { host: y, isIPV6: !0, escapedHost: k };
    }
  }
  function m(u, p) {
    let y = 0;
    for (let k = 0; k < u.length; k++)
      u[k] === p && y++;
    return y;
  }
  function v(u) {
    let p = u;
    const y = [];
    let k = -1, P = 0;
    for (; P = p.length; ) {
      if (P === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          y.push("/");
          break;
        } else {
          y.push(p);
          break;
        }
      } else if (P === 2) {
        if (p[0] === ".") {
          if (p[1] === ".")
            break;
          if (p[1] === "/") {
            p = p.slice(2);
            continue;
          }
        } else if (p[0] === "/" && (p[1] === "." || p[1] === "/")) {
          y.push("/");
          break;
        }
      } else if (P === 3 && p === "/..") {
        y.length !== 0 && y.pop(), y.push("/");
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
          p = p.slice(3), y.length !== 0 && y.pop();
          continue;
        }
      }
      if ((k = p.indexOf("/", 1)) === -1) {
        y.push(p);
        break;
      } else
        y.push(p.slice(0, k)), p = p.slice(k);
    }
    return y.join("");
  }
  const $ = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, b = /[@/?#:]/g, _ = /[@/?#]/g;
  function h(u, p) {
    const y = p ? _ : b;
    return y.lastIndex = 0, u.replace(y, (k) => $[k]);
  }
  function g(u, p = !1) {
    if (u.indexOf("%") === -1)
      return u;
    let y = "";
    for (let k = 0; k < u.length; k++) {
      if (u[k] === "%" && k + 2 < u.length) {
        const P = u.slice(k + 1, k + 3);
        if (n(P)) {
          const E = P.toUpperCase(), M = String.fromCharCode(parseInt(E, 16));
          p && r(M) ? y += M : y += "%" + E, k += 2;
          continue;
        }
      }
      y += u[k];
    }
    return y;
  }
  function f(u) {
    let p = "";
    for (let y = 0; y < u.length; y++) {
      if (u[y] === "%" && y + 2 < u.length) {
        const k = u.slice(y + 1, y + 3);
        if (n(k)) {
          const P = k.toUpperCase(), E = String.fromCharCode(parseInt(P, 16));
          E !== "." && r(E) ? p += E : p += "%" + P, y += 2;
          continue;
        }
      }
      s(u[y]) ? p += u[y] : p += escape(u[y]);
    }
    return p;
  }
  function C(u) {
    let p = "";
    for (let y = 0; y < u.length; y++) {
      if (u[y] === "%" && y + 2 < u.length) {
        const k = u.slice(y + 1, y + 3);
        if (n(k)) {
          p += "%" + k.toUpperCase(), y += 2;
          continue;
        }
      }
      p += escape(u[y]);
    }
    return p;
  }
  function S(u) {
    const p = [];
    if (u.userinfo !== void 0 && (p.push(u.userinfo), p.push("@")), u.host !== void 0) {
      let y = unescape(u.host);
      if (!t(y)) {
        const k = d(y);
        k.isIPV6 === !0 ? y = `[${k.escapedHost}]` : y = h(y, !1);
      }
      p.push(y);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (p.push(":"), p.push(String(u.port))), p.length ? p.join("") : void 0;
  }
  return Sr = {
    nonSimpleDomain: i,
    recomposeAuthority: S,
    reescapeHostDelimiters: h,
    normalizePercentEncoding: g,
    normalizePathEncoding: f,
    escapePreservingEscapes: C,
    removeDotSegments: v,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: d,
    stringArrayToHexStripped: o
  }, Sr;
}
var Cr, cs;
function sl() {
  if (cs) return Cr;
  cs = 1;
  const { isUUID: e } = ya(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const [p, y] = u.resourceName.split("?");
      u.path = p && p !== "/" ? p : void 0, u.query = y, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, p) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const y = u.path.match(t);
    if (y) {
      const k = p.scheme || u.scheme || "urn";
      u.nid = y[1].toLowerCase(), u.nss = y[2];
      const P = `${k}:${p.nid || u.nid}`, E = S(P);
      u.path = void 0, E && (u = E.parse(u, p));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function d(u, p) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const y = p.scheme || u.scheme || "urn", k = u.nid.toLowerCase(), P = `${y}:${p.nid || k}`, E = S(P);
    E && (u = E.serialize(u, p));
    const M = u, R = u.nss;
    return M.path = `${k || p.nid}:${R}`, p.skipEscape = !0, M;
  }
  function m(u, p) {
    const y = u;
    return y.uuid = y.nss, y.nss = void 0, !p.tolerant && (!y.uuid || !e(y.uuid)) && (y.error = y.error || "UUID is not valid."), y;
  }
  function v(u) {
    const p = u;
    return p.nss = (u.uuid || "").toLowerCase(), p;
  }
  const $ = (
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
      domainHost: $.domainHost,
      parse: o,
      serialize: i
    }
  ), _ = (
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
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: $,
      https: b,
      ws: _,
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
  Object.setPrototypeOf(C, null);
  function S(u) {
    return u && (C[
      /** @type {SchemeName} */
      u
    ] || C[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return Cr = {
    wsIsSecure: s,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, Cr;
}
var ls;
function il() {
  if (ls) return Mt.exports;
  ls = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: s, escapePreservingEscapes: o, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: c } = ya(), { SCHEMES: l, getSchemeHandler: d } = sl();
  function m(P, E) {
    return typeof P == "string" ? P = /** @type {T} */
    u(P, E) : typeof P == "object" && (P = /** @type {T} */
    S(_(P, E), E)), P;
  }
  function v(P, E, M) {
    const R = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, D = $(S(P, R), S(E, R), R, !0);
    return R.skipEscape = !0, _(D, R);
  }
  function $(P, E, M, R) {
    const D = {};
    return R || (P = S(_(P, M), M), E = S(_(E, M), M)), M = M || {}, !M.tolerant && E.scheme ? (D.scheme = E.scheme, D.userinfo = E.userinfo, D.host = E.host, D.port = E.port, D.path = t(E.path || ""), D.query = E.query) : (E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0 ? (D.userinfo = E.userinfo, D.host = E.host, D.port = E.port, D.path = t(E.path || ""), D.query = E.query) : (E.path ? (E.path[0] === "/" ? D.path = t(E.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? D.path = "/" + E.path : P.path ? D.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + E.path : D.path = E.path, D.path = t(D.path)), D.query = E.query) : (D.path = P.path, E.query !== void 0 ? D.query = E.query : D.query = P.query), D.userinfo = P.userinfo, D.host = P.host, D.port = P.port), D.scheme = P.scheme), D.fragment = E.fragment, D;
  }
  function b(P, E, M) {
    const R = y(P, M), D = y(E, M);
    return R !== void 0 && D !== void 0 && R.toLowerCase() === D.toLowerCase();
  }
  function _(P, E) {
    const M = {
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
    }, R = Object.assign({}, E), D = [], I = d(R.scheme || M.scheme);
    I && I.serialize && I.serialize(M, R), M.path !== void 0 && (R.skipEscape ? M.path = r(M.path) : (M.path = o(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), R.reference !== "suffix" && M.scheme && D.push(M.scheme, ":");
    const L = n(M);
    if (L !== void 0 && (R.reference !== "suffix" && D.push("//"), D.push(L), M.path && M.path[0] !== "/" && D.push("/")), M.path !== void 0) {
      let G = M.path;
      !R.absolutePath && (!I || !I.absolutePath) && (G = t(G)), L === void 0 && G[0] === "/" && G[1] === "/" && (G = "/%2F" + G.slice(2)), D.push(G);
    }
    return M.query !== void 0 && D.push("?", M.query), M.fragment !== void 0 && D.push("#", M.fragment), D.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function f(P, E) {
    if (E[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function C(P, E) {
    const M = Object.assign({}, E), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, I = !1;
    M.reference === "suffix" && (M.scheme ? P = M.scheme + ":" + P : P = "//" + P);
    const L = P.match(g);
    L !== null && L[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", D = !0);
    const G = P.match(h);
    if (G) {
      R.scheme = G[1], R.userinfo = G[3], R.host = G[4], R.port = parseInt(G[5], 10), R.path = G[6] || "", R.query = G[7], R.fragment = G[8], isNaN(R.port) && (R.port = G[5]);
      const oe = f(R, G);
      if (oe !== void 0 && (R.error = R.error || oe, D = !0), R.host)
        if (a(R.host) === !1) {
          const K = e(R.host);
          R.host = K.host.toLowerCase(), I = K.isIPV6;
        } else
          I = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== R.reference && (R.error = R.error || "URI is not a " + M.reference + " reference.");
      const X = d(M.scheme || R.scheme);
      if (!M.unicodeSupport && (!X || !X.unicodeSupport) && R.host && (M.domainHost || X && X.domainHost) && I === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (re) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + re;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = i(unescape(R.host), I))), R.path && (R.path = s(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      X && X.parse && X.parse(R, M);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: D };
  }
  function S(P, E) {
    return C(P, E).parsed;
  }
  function u(P, E) {
    return p(P, E).normalized;
  }
  function p(P, E) {
    const { parsed: M, malformedAuthorityOrPort: R } = C(P, E);
    return {
      normalized: R ? P : _(M, E),
      malformedAuthorityOrPort: R
    };
  }
  function y(P, E) {
    if (typeof P == "string") {
      const { normalized: M, malformedAuthorityOrPort: R } = p(P, E);
      return R ? void 0 : M;
    }
    if (typeof P == "object")
      return _(P, E);
  }
  const k = {
    SCHEMES: l,
    normalize: m,
    resolve: v,
    resolveComponent: $,
    equal: b,
    serialize: _,
    parse: S
  };
  return Mt.exports = k, Mt.exports.default = k, Mt.exports.fastUri = k, Mt.exports;
}
var ds;
function al() {
  if (ds) return Kt;
  ds = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = il();
  return e.code = 'require("ajv/dist/runtime/uri").default', Kt.default = e, Kt;
}
var us;
function cl() {
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
    const r = /* @__PURE__ */ ao(), s = /* @__PURE__ */ rr(), o = /* @__PURE__ */ ha(), i = /* @__PURE__ */ or(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ tr(), l = /* @__PURE__ */ Yn(), d = /* @__PURE__ */ de(), m = ol, v = /* @__PURE__ */ al(), $ = (K, O) => new RegExp(K, O);
    $.code = "new RegExp";
    const b = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    function C(K) {
      var O, H, z, w, A, q, ee, te, J, ne, N, x, F, B, W, Z, ae, se, fe, me, pe, be, ye, xt, pr;
      const Pt = K.strict, hr = (O = K.code) === null || O === void 0 ? void 0 : O.optimize, No = hr === !0 || hr === void 0 ? 1 : hr || 0, To = (z = (H = K.code) === null || H === void 0 ? void 0 : H.regExp) !== null && z !== void 0 ? z : $, _c = (w = K.uriResolver) !== null && w !== void 0 ? w : v.default;
      return {
        strictSchema: (q = (A = K.strictSchema) !== null && A !== void 0 ? A : Pt) !== null && q !== void 0 ? q : !0,
        strictNumbers: (te = (ee = K.strictNumbers) !== null && ee !== void 0 ? ee : Pt) !== null && te !== void 0 ? te : !0,
        strictTypes: (ne = (J = K.strictTypes) !== null && J !== void 0 ? J : Pt) !== null && ne !== void 0 ? ne : "log",
        strictTuples: (x = (N = K.strictTuples) !== null && N !== void 0 ? N : Pt) !== null && x !== void 0 ? x : "log",
        strictRequired: (B = (F = K.strictRequired) !== null && F !== void 0 ? F : Pt) !== null && B !== void 0 ? B : !1,
        code: K.code ? { ...K.code, optimize: No, regExp: To } : { optimize: No, regExp: To },
        loopRequired: (W = K.loopRequired) !== null && W !== void 0 ? W : f,
        loopEnum: (Z = K.loopEnum) !== null && Z !== void 0 ? Z : f,
        meta: (ae = K.meta) !== null && ae !== void 0 ? ae : !0,
        messages: (se = K.messages) !== null && se !== void 0 ? se : !0,
        inlineRefs: (fe = K.inlineRefs) !== null && fe !== void 0 ? fe : !0,
        schemaId: (me = K.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = K.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (be = K.validateSchema) !== null && be !== void 0 ? be : !0,
        validateFormats: (ye = K.validateFormats) !== null && ye !== void 0 ? ye : !0,
        unicodeRegExp: (xt = K.unicodeRegExp) !== null && xt !== void 0 ? xt : !0,
        int32range: (pr = K.int32range) !== null && pr !== void 0 ? pr : !0,
        uriResolver: _c
      };
    }
    class S {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...C(O) };
        const { es5: H, lines: z } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: H, lines: z }), this.logger = R(O.logger);
        const w = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, o.getRules)(), u.call(this, h, O, "NOT SUPPORTED"), u.call(this, g, O, "DEPRECATED", "warn"), this._metaOpts = E.call(this), O.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && P.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), y.call(this), O.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: H, schemaId: z } = this.opts;
        let w = m;
        z === "id" && (w = { ...m }, w.id = w.$id, delete w.$id), H && O && this.addMetaSchema(w, w[z], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: H } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[H] || O : void 0;
      }
      validate(O, H) {
        let z;
        if (typeof O == "string") {
          if (z = this.getSchema(O), !z)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          z = this.compile(O);
        const w = z(H);
        return "$async" in z || (this.errors = z.errors), w;
      }
      compile(O, H) {
        const z = this._addSchema(O, H);
        return z.validate || this._compileSchemaEnv(z);
      }
      compileAsync(O, H) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: z } = this.opts;
        return w.call(this, O, H);
        async function w(ne, N) {
          await A.call(this, ne.$schema);
          const x = this._addSchema(ne, N);
          return x.validate || q.call(this, x);
        }
        async function A(ne) {
          ne && !this.getSchema(ne) && await w.call(this, { $ref: ne }, !0);
        }
        async function q(ne) {
          try {
            return this._compileSchemaEnv(ne);
          } catch (N) {
            if (!(N instanceof s.default))
              throw N;
            return ee.call(this, N), await te.call(this, N.missingSchema), q.call(this, ne);
          }
        }
        function ee({ missingSchema: ne, missingRef: N }) {
          if (this.refs[ne])
            throw new Error(`AnySchema ${ne} is loaded but ${N} cannot be resolved`);
        }
        async function te(ne) {
          const N = await J.call(this, ne);
          this.refs[ne] || await A.call(this, N.$schema), this.refs[ne] || this.addSchema(N, ne, H);
        }
        async function J(ne) {
          const N = this._loading[ne];
          if (N)
            return N;
          try {
            return await (this._loading[ne] = z(ne));
          } finally {
            delete this._loading[ne];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, H, z, w = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const q of O)
            this.addSchema(q, void 0, z, w);
          return this;
        }
        let A;
        if (typeof O == "object") {
          const { schemaId: q } = this.opts;
          if (A = O[q], A !== void 0 && typeof A != "string")
            throw new Error(`schema ${q} must be string`);
        }
        return H = (0, c.normalizeId)(H || A), this._checkUnique(H), this.schemas[H] = this._addSchema(O, z, H, w, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, H, z = this.opts.validateSchema) {
        return this.addSchema(O, H, !0, z), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, H) {
        if (typeof O == "boolean")
          return !0;
        let z;
        if (z = O.$schema, z !== void 0 && typeof z != "string")
          throw new Error("$schema must be a string");
        if (z = z || this.opts.defaultMeta || this.defaultMeta(), !z)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const w = this.validate(z, O);
        if (!w && H) {
          const A = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(A);
          else
            throw new Error(A);
        }
        return w;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let H;
        for (; typeof (H = p.call(this, O)) == "string"; )
          O = H;
        if (H === void 0) {
          const { schemaId: z } = this.opts, w = new i.SchemaEnv({ schema: {}, schemaId: z });
          if (H = i.resolveSchema.call(this, w, O), !H)
            return;
          this.refs[O] = H;
        }
        return H.validate || this._compileSchemaEnv(H);
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
            const H = p.call(this, O);
            return typeof H == "object" && this._cache.delete(H.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const H = O;
            this._cache.delete(H);
            let z = O[this.opts.schemaId];
            return z && (z = (0, c.normalizeId)(z), delete this.schemas[z], delete this.refs[z]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(O) {
        for (const H of O)
          this.addKeyword(H);
        return this;
      }
      addKeyword(O, H) {
        let z;
        if (typeof O == "string")
          z = O, typeof H == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), H.keyword = z);
        else if (typeof O == "object" && H === void 0) {
          if (H = O, z = H.keyword, Array.isArray(z) && !z.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (I.call(this, z, H), !H)
          return (0, d.eachItem)(z, (A) => L.call(this, A)), this;
        oe.call(this, H);
        const w = {
          ...H,
          type: (0, l.getJSONTypes)(H.type),
          schemaType: (0, l.getJSONTypes)(H.schemaType)
        };
        return (0, d.eachItem)(z, w.type.length === 0 ? (A) => L.call(this, A, w) : (A) => w.type.forEach((q) => L.call(this, A, w, q))), this;
      }
      getKeyword(O) {
        const H = this.RULES.all[O];
        return typeof H == "object" ? H.definition : !!H;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: H } = this;
        delete H.keywords[O], delete H.all[O];
        for (const z of H.rules) {
          const w = z.rules.findIndex((A) => A.keyword === O);
          w >= 0 && z.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, H) {
        return typeof H == "string" && (H = new RegExp(H)), this.formats[O] = H, this;
      }
      errorsText(O = this.errors, { separator: H = ", ", dataVar: z = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((w) => `${z}${w.instancePath} ${w.message}`).reduce((w, A) => w + H + A);
      }
      $dataMetaSchema(O, H) {
        const z = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const w of H) {
          const A = w.split("/").slice(1);
          let q = O;
          for (const ee of A)
            q = q[ee];
          for (const ee in z) {
            const te = z[ee];
            if (typeof te != "object")
              continue;
            const { $data: J } = te.definition, ne = q[ee];
            J && ne && (q[ee] = re(ne));
          }
        }
        return O;
      }
      _removeAllSchemas(O, H) {
        for (const z in O) {
          const w = O[z];
          (!H || H.test(z)) && (typeof w == "string" ? delete O[z] : w && !w.meta && (this._cache.delete(w.schema), delete O[z]));
        }
      }
      _addSchema(O, H, z, w = this.opts.validateSchema, A = this.opts.addUsedSchema) {
        let q;
        const { schemaId: ee } = this.opts;
        if (typeof O == "object")
          q = O[ee];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let te = this._cache.get(O);
        if (te !== void 0)
          return te;
        z = (0, c.normalizeId)(q || z);
        const J = c.getSchemaRefs.call(this, O, z);
        return te = new i.SchemaEnv({ schema: O, schemaId: ee, meta: H, baseId: z, localRefs: J }), this._cache.set(te.schema, te), A && !z.startsWith("#") && (z && this._checkUnique(z), this.refs[z] = te), w && this.validateSchema(O, !0), te;
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
        const H = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, O);
        } finally {
          this.opts = H;
        }
      }
    }
    S.ValidationError = r.default, S.MissingRefError = s.default, e.default = S;
    function u(K, O, H, z = "error") {
      for (const w in K) {
        const A = w;
        A in O && this.logger[z](`${H}: option ${w}. ${K[A]}`);
      }
    }
    function p(K) {
      return K = (0, c.normalizeId)(K), this.schemas[K] || this.refs[K];
    }
    function y() {
      const K = this.opts.schemas;
      if (K)
        if (Array.isArray(K))
          this.addSchema(K);
        else
          for (const O in K)
            this.addSchema(K[O], O);
    }
    function k() {
      for (const K in this.opts.formats) {
        const O = this.opts.formats[K];
        O && this.addFormat(K, O);
      }
    }
    function P(K) {
      if (Array.isArray(K)) {
        this.addVocabulary(K);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const O in K) {
        const H = K[O];
        H.keyword || (H.keyword = O), this.addKeyword(H);
      }
    }
    function E() {
      const K = { ...this.opts };
      for (const O of b)
        delete K[O];
      return K;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function R(K) {
      if (K === !1)
        return M;
      if (K === void 0)
        return console;
      if (K.log && K.warn && K.error)
        return K;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function I(K, O) {
      const { RULES: H } = this;
      if ((0, d.eachItem)(K, (z) => {
        if (H.keywords[z])
          throw new Error(`Keyword ${z} is already defined`);
        if (!D.test(z))
          throw new Error(`Keyword ${z} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function L(K, O, H) {
      var z;
      const w = O?.post;
      if (H && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: A } = this;
      let q = w ? A.post : A.rules.find(({ type: te }) => te === H);
      if (q || (q = { type: H, rules: [] }, A.rules.push(q)), A.keywords[K] = !0, !O)
        return;
      const ee = {
        keyword: K,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? G.call(this, q, ee, O.before) : q.rules.push(ee), A.all[K] = ee, (z = O.implements) === null || z === void 0 || z.forEach((te) => this.addKeyword(te));
    }
    function G(K, O, H) {
      const z = K.rules.findIndex((w) => w.keyword === H);
      z >= 0 ? K.rules.splice(z, 0, O) : (K.rules.push(O), this.logger.warn(`rule ${H} is not defined`));
    }
    function oe(K) {
      let { metaSchema: O } = K;
      O !== void 0 && (K.$data && this.opts.$data && (O = re(O)), K.validateSchema = this.compile(O, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function re(K) {
      return { anyOf: [K, X] };
    }
  })(gr)), gr;
}
var Gt = {}, Wt = {}, Jt = {}, fs;
function ll() {
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
function co() {
  if (ps) return Xe;
  ps = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.callRef = Xe.getValidate = void 0;
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ Le(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ De(), s = /* @__PURE__ */ or(), o = /* @__PURE__ */ de(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: d, schema: m, it: v } = l, { baseId: $, schemaEnv: b, validateName: _, opts: h, self: g } = v, { root: f } = b;
      if ((m === "#" || m === "#/") && $ === f.baseId)
        return S();
      const C = s.resolveRef.call(g, f, $, m);
      if (C === void 0)
        throw new e.default(v.opts.uriResolver, $, m);
      if (C instanceof s.SchemaEnv)
        return u(C);
      return p(C);
      function S() {
        if (b === f)
          return c(l, _, b, b.$async);
        const y = d.scopeValue("root", { ref: f });
        return c(l, (0, n._)`${y}.validate`, f, f.$async);
      }
      function u(y) {
        const k = a(l, y);
        c(l, k, y, y.$async);
      }
      function p(y) {
        const k = d.scopeValue("schema", h.code.source === !0 ? { ref: y, code: (0, n.stringify)(y) } : { ref: y }), P = d.name("valid"), E = l.subschema({
          schema: y,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: m
        }, P);
        l.mergeEvaluated(E), l.ok(P);
      }
    }
  };
  function a(l, d) {
    const { gen: m } = l;
    return d.validate ? m.scopeValue("validate", { ref: d.validate }) : (0, n._)`${m.scopeValue("wrapper", { ref: d })}.validate`;
  }
  Xe.getValidate = a;
  function c(l, d, m, v) {
    const { gen: $, it: b } = l, { allErrors: _, schemaEnv: h, opts: g } = b, f = g.passContext ? r.default.this : n.nil;
    v ? C() : S();
    function C() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const y = $.let("valid");
      $.try(() => {
        $.code((0, n._)`await ${(0, t.callValidateCode)(l, d, f)}`), p(d), _ || $.assign(y, !0);
      }, (k) => {
        $.if((0, n._)`!(${k} instanceof ${b.ValidationError})`, () => $.throw(k)), u(k), _ || $.assign(y, !1);
      }), l.ok(y);
    }
    function S() {
      l.result((0, t.callValidateCode)(l, d, f), () => p(d), () => u(d));
    }
    function u(y) {
      const k = (0, n._)`${y}.errors`;
      $.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), $.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function p(y) {
      var k;
      if (!b.opts.unevaluated)
        return;
      const P = (k = m?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (b.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (b.props = o.mergeEvaluated.props($, P.props, b.props));
        else {
          const E = $.var("props", (0, n._)`${y}.evaluated.props`);
          b.props = o.mergeEvaluated.props($, E, b.props, n.Name);
        }
      if (b.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (b.items = o.mergeEvaluated.items($, P.items, b.items));
        else {
          const E = $.var("items", (0, n._)`${y}.evaluated.items`);
          b.items = o.mergeEvaluated.items($, E, b.items, n.Name);
        }
    }
  }
  return Xe.callRef = c, Xe.default = i, Xe;
}
var hs;
function dl() {
  if (hs) return Wt;
  hs = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ll(), t = /* @__PURE__ */ co(), n = [
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
function ul() {
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
function fl() {
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
function pl() {
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
function hl() {
  if ($s) return Qt;
  $s = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ pl(), s = {
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
function ml() {
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
        const { regExp: $ } = m.opts.code, b = $.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, $), _ = i.let("valid");
        i.try(() => i.assign(_, (0, n._)`${b}(${d}, ${v}).test(${a})`), () => i.assign(_, !1)), o.fail$data((0, n._)`!${_}`);
      } else {
        const $ = (0, e.usePattern)(o, l);
        o.fail$data((0, n._)`!${$}.test(${a})`);
      }
    }
  };
  return tn.default = s, tn;
}
var nn = {}, vs;
function gl() {
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
function yl() {
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
      const $ = a.length >= v.loopRequired;
      if (m.allErrors ? b() : _(), v.strictRequired) {
        const f = o.parentSchema.properties, { definedProperties: C } = o.it;
        for (const S of a)
          if (f?.[S] === void 0 && !C.has(S)) {
            const u = m.schemaEnv.baseId + m.errSchemaPath, p = `required property "${S}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(m, p, m.opts.strictRequired);
          }
      }
      function b() {
        if ($ || d)
          o.block$data(t.nil, h);
        else
          for (const f of a)
            (0, e.checkReportMissingProp)(o, f);
      }
      function _() {
        const f = i.let("missing");
        if ($ || d) {
          const C = i.let("valid", !0);
          o.block$data(C, () => g(f, C)), o.ok(C);
        } else
          i.if((0, e.checkMissingProp)(o, a, f)), (0, e.reportMissingProp)(o, f), i.else();
      }
      function h() {
        i.forOf("prop", c, (f) => {
          o.setParams({ missingProperty: f }), i.if((0, e.noPropertyInData)(i, l, f, v.ownProperties), () => o.error());
        });
      }
      function g(f, C) {
        o.setParams({ missingProperty: f }), i.forOf(f, c, () => {
          i.assign(C, (0, e.propertyInData)(i, l, f, v.ownProperties)), i.if((0, t.not)(C), () => {
            o.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return rn.default = s, rn;
}
var on = {}, _s;
function $l() {
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
function lo() {
  if (Ss) return an;
  Ss = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = ga();
  return e.code = 'require("ajv/dist/runtime/equal").default', an.default = e, an;
}
var Cs;
function bl() {
  if (Cs) return sn;
  Cs = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ lo(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: c, $data: l, schema: d, parentSchema: m, schemaCode: v, it: $ } = i;
      if (!l && !d)
        return;
      const b = a.let("valid"), _ = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      i.block$data(b, h, (0, t._)`${v} === false`), i.ok(b);
      function h() {
        const S = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        i.setParams({ i: S, j: u }), a.assign(b, !0), a.if((0, t._)`${S} > 1`, () => (g() ? f : C)(S, u));
      }
      function g() {
        return _.length > 0 && !_.some((S) => S === "object" || S === "array");
      }
      function f(S, u) {
        const p = a.name("item"), y = (0, e.checkDataTypes)(_, p, $.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(p, (0, t._)`${c}[${S}]`), a.if(y, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${p} == "string"`, (0, t._)`${p} += "_"`), a.if((0, t._)`typeof ${k}[${p}] == "number"`, () => {
            a.assign(u, (0, t._)`${k}[${p}]`), i.error(), a.assign(b, !1).break();
          }).code((0, t._)`${k}[${p}] = ${S}`);
        });
      }
      function C(S, u) {
        const p = (0, n.useFunc)(a, r.default), y = a.name("outer");
        a.label(y).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${u} = ${S}; ${u}--;`, () => a.if((0, t._)`${p}(${c}[${S}], ${c}[${u}])`, () => {
          i.error(), a.assign(b, !1).break(y);
        })));
      }
    }
  };
  return sn.default = o, sn;
}
var cn = {}, ks;
function vl() {
  if (ks) return cn;
  ks = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ lo(), s = {
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
function wl() {
  if (Es) return ln;
  Es = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ lo(), s = {
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
      let $;
      const b = () => $ ?? ($ = (0, t.useFunc)(i, n.default));
      let _;
      if (v || c)
        _ = i.let("valid"), o.block$data(_, h);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const f = i.const("vSchema", d);
        _ = (0, e.or)(...l.map((C, S) => g(f, S)));
      }
      o.pass(_);
      function h() {
        i.assign(_, !1), i.forOf("v", d, (f) => i.if((0, e._)`${b()}(${a}, ${f})`, () => i.assign(_, !0).break()));
      }
      function g(f, C) {
        const S = l[C];
        return typeof S == "object" && S !== null ? (0, e._)`${b()}(${a}, ${f}[${C}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return ln.default = s, ln;
}
var xs;
function _l() {
  if (xs) return Yt;
  xs = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ul(), t = /* @__PURE__ */ fl(), n = /* @__PURE__ */ hl(), r = /* @__PURE__ */ ml(), s = /* @__PURE__ */ gl(), o = /* @__PURE__ */ yl(), i = /* @__PURE__ */ $l(), a = /* @__PURE__ */ bl(), c = /* @__PURE__ */ vl(), l = /* @__PURE__ */ wl(), d = [
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
var dn = {}, pt = {}, Ps;
function $a() {
  if (Ps) return pt;
  Ps = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateAdditionalItems = void 0;
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
      a.if((0, e.not)(b), () => $(b)), o.ok(b);
    }
    function $(b) {
      a.forRange("i", i.length, v, (_) => {
        o.subschema({ keyword: d, dataProp: _, dataPropType: t.Type.Num }, b), m.allErrors || a.if((0, e.not)(b), () => a.break());
      });
    }
  }
  return pt.validateAdditionalItems = s, pt.default = r, pt;
}
var un = {}, ht = {}, As;
function ba() {
  if (As) return ht;
  As = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.validateTuple = void 0;
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
    _(l), v.opts.unevaluated && a.length && v.items !== !0 && (v.items = t.mergeEvaluated.items(c, a.length, v.items));
    const $ = c.name("valid"), b = c.const("len", (0, e._)`${d}.length`);
    a.forEach((h, g) => {
      (0, t.alwaysValidSchema)(v, h) || (c.if((0, e._)`${b} > ${g}`, () => o.subschema({
        keyword: m,
        schemaProp: g,
        dataProp: g
      }, $)), o.ok($));
    });
    function _(h) {
      const { opts: g, errSchemaPath: f } = v, C = a.length, S = C === h.minItems && (C === h.maxItems || h[i] === !1);
      if (g.strictTuples && !S) {
        const u = `"${m}" is ${C}-tuple, but minItems or maxItems/${i} are not specified or different at path "${f}"`;
        (0, t.checkStrictMode)(v, u, g.strictTuples);
      }
    }
  }
  return ht.validateTuple = s, ht.default = r, ht;
}
var Rs;
function Sl() {
  if (Rs) return un;
  Rs = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ba(), t = {
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
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ Le(), r = /* @__PURE__ */ $a(), o = {
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
function kl() {
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
      const { minContains: v, maxContains: $ } = a;
      l.opts.next ? (d = v === void 0 ? 1 : v, m = $) : d = 1;
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
        let C = (0, e._)`${b} >= ${d}`;
        m !== void 0 && (C = (0, e._)`${C} && ${b} <= ${m}`), s.pass(C);
        return;
      }
      l.items = !0;
      const _ = o.name("valid");
      m === void 0 && d === 1 ? g(_, () => o.if(_, () => o.break())) : d === 0 ? (o.let(_, !0), m !== void 0 && o.if((0, e._)`${c}.length > 0`, h)) : (o.let(_, !1), h()), s.result(_, () => s.reset());
      function h() {
        const C = o.name("_valid"), S = o.let("count", 0);
        g(C, () => o.if(C, () => f(S)));
      }
      function g(C, S) {
        o.forRange("i", 0, b, (u) => {
          s.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), S();
        });
      }
      function f(C) {
        o.code((0, e._)`${C}++`), m === void 0 ? o.if((0, e._)`${C} >= ${d}`, () => o.assign(_, !0).break()) : (o.if((0, e._)`${C} > ${m}`, () => o.assign(_, !1).break()), d === 1 ? o.assign(_, !0) : o.if((0, e._)`${C} >= ${d}`, () => o.assign(_, !0)));
      }
    }
  };
  return pn.default = r, pn;
}
var kr = {}, Ts;
function uo() {
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
      const $ = d.let("missing");
      for (const b in l) {
        const _ = l[b];
        if (_.length === 0)
          continue;
        const h = (0, r.propertyInData)(d, m, b, v.opts.ownProperties);
        c.setParams({
          property: b,
          depsCount: _.length,
          deps: _.join(", ")
        }), v.allErrors ? d.if(h, () => {
          for (const g of _)
            (0, r.checkReportMissingProp)(c, g);
        }) : (d.if((0, t._)`${h} && (${(0, r.checkMissingProp)(c, _, $)})`), (0, r.reportMissingProp)(c, $), d.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(c, l = c.schema) {
      const { gen: d, data: m, keyword: v, it: $ } = c, b = d.name("valid");
      for (const _ in l)
        (0, n.alwaysValidSchema)($, l[_]) || (d.if(
          (0, r.propertyInData)(d, m, _, $.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: v, schemaProp: _ }, b);
            c.mergeValidEvaluated(h, b);
          },
          () => d.var(b, !0)
          // TODO var
        ), c.ok(b));
    }
    e.validateSchemaDeps = a, e.default = s;
  })(kr)), kr;
}
var hn = {}, Os;
function El() {
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
function va() {
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
      const { allErrors: $, opts: b } = v;
      if (v.props = !0, b.removeAdditional !== "all" && (0, r.alwaysValidSchema)(v, c))
        return;
      const _ = (0, e.allSchemaProperties)(l.properties), h = (0, e.allSchemaProperties)(l.patternProperties);
      g(), i.ok((0, t._)`${m} === ${n.default.errors}`);
      function g() {
        a.forIn("key", d, (p) => {
          !_.length && !h.length ? S(p) : a.if(f(p), () => S(p));
        });
      }
      function f(p) {
        let y;
        if (_.length > 8) {
          const k = (0, r.schemaRefOrVal)(v, l.properties, "properties");
          y = (0, e.isOwnProperty)(a, k, p);
        } else _.length ? y = (0, t.or)(..._.map((k) => (0, t._)`${p} === ${k}`)) : y = t.nil;
        return h.length && (y = (0, t.or)(y, ...h.map((k) => (0, t._)`${(0, e.usePattern)(i, k)}.test(${p})`))), (0, t.not)(y);
      }
      function C(p) {
        a.code((0, t._)`delete ${d}[${p}]`);
      }
      function S(p) {
        if (b.removeAdditional === "all" || b.removeAdditional && c === !1) {
          C(p);
          return;
        }
        if (c === !1) {
          i.setParams({ additionalProperty: p }), i.error(), $ || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(v, c)) {
          const y = a.name("valid");
          b.removeAdditional === "failing" ? (u(p, y, !1), a.if((0, t.not)(y), () => {
            i.reset(), C(p);
          })) : (u(p, y), $ || a.if((0, t.not)(y), () => a.break()));
        }
      }
      function u(p, y, k) {
        const P = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, y);
      }
    }
  };
  return mn.default = o, mn;
}
var gn = {}, zs;
function xl() {
  if (zs) return gn;
  zs = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nr(), t = /* @__PURE__ */ Le(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ va(), s = {
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
      const $ = i.name("valid");
      for (const h of v)
        b(h) ? _(h) : (i.if((0, t.propertyInData)(i, l, h, d.opts.ownProperties)), _(h), d.allErrors || i.else().var($, !0), i.endIf()), o.it.definedProperties.add(h), o.ok($);
      function b(h) {
        return d.opts.useDefaults && !d.compositeRule && a[h].default !== void 0;
      }
      function _(h) {
        o.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, $);
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
      const { gen: i, schema: a, data: c, parentSchema: l, it: d } = o, { opts: m } = d, v = (0, e.allSchemaProperties)(a), $ = v.filter((S) => (0, n.alwaysValidSchema)(d, a[S]));
      if (v.length === 0 || $.length === v.length && (!d.opts.unevaluated || d.props === !0))
        return;
      const b = m.strictSchema && !m.allowMatchingProperties && l.properties, _ = i.name("valid");
      d.props !== !0 && !(d.props instanceof t.Name) && (d.props = (0, r.evaluatedPropsToName)(i, d.props));
      const { props: h } = d;
      g();
      function g() {
        for (const S of v)
          b && f(S), d.allErrors ? C(S) : (i.var(_, !0), C(S), i.if(_));
      }
      function f(S) {
        for (const u in b)
          new RegExp(S).test(u) && (0, n.checkStrictMode)(d, `property ${u} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function C(S) {
        i.forIn("key", c, (u) => {
          i.if((0, t._)`${(0, e.usePattern)(o, S)}.test(${u})`, () => {
            const p = $.includes(S);
            p || o.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: u,
              dataPropType: r.Type.Str
            }, _), d.opts.unevaluated && h !== !0 ? i.assign((0, t._)`${h}[${u}]`, !0) : !p && !d.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return yn.default = s, yn;
}
var $n = {}, Is;
function Al() {
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
function Rl() {
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
function Ml() {
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
      s.setParams({ passing: m }), o.block($), s.result(d, () => s.reset(), () => s.error(!0));
      function $() {
        l.forEach((b, _) => {
          let h;
          (0, t.alwaysValidSchema)(c, b) ? o.var(v, !0) : h = s.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, v), _ > 0 && o.if((0, e._)`${v} && ${d}`).assign(d, !1).assign(m, (0, e._)`[${m}, ${_}]`).else(), o.if(v, () => {
            o.assign(d, !0), o.assign(m, _), h && s.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return vn.default = r, vn;
}
var wn = {}, qs;
function Nl() {
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
function Tl() {
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
      if ($(), o.reset(), l && d) {
        const _ = i.let("ifClause");
        o.setParams({ ifClause: _ }), i.if(v, b("then", _), b("else", _));
      } else l ? i.if(v, b("then")) : i.if((0, e.not)(v), b("else"));
      o.pass(m, () => o.error(!0));
      function $() {
        const _ = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, v);
        o.mergeEvaluated(_);
      }
      function b(_, h) {
        return () => {
          const g = o.subschema({ keyword: _ }, v);
          i.assign(m, v), o.mergeValidEvaluated(g, m), h ? i.assign(h, (0, e._)`${_}`) : o.setParams({ ifClause: _ });
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
function Ol() {
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
function Fl() {
  if (Us) return dn;
  Us = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $a(), t = /* @__PURE__ */ Sl(), n = /* @__PURE__ */ ba(), r = /* @__PURE__ */ Cl(), s = /* @__PURE__ */ kl(), o = /* @__PURE__ */ uo(), i = /* @__PURE__ */ El(), a = /* @__PURE__ */ va(), c = /* @__PURE__ */ xl(), l = /* @__PURE__ */ Pl(), d = /* @__PURE__ */ Al(), m = /* @__PURE__ */ Rl(), v = /* @__PURE__ */ Ml(), $ = /* @__PURE__ */ Nl(), b = /* @__PURE__ */ Tl(), _ = /* @__PURE__ */ Ol();
  function h(g = !1) {
    const f = [
      // any
      d.default,
      m.default,
      v.default,
      $.default,
      b.default,
      _.default,
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
var Cn = {}, mt = {}, Hs;
function wa() {
  if (Hs) return mt;
  Hs = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ or(), r = /* @__PURE__ */ co(), s = {
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
    const { schemaEnv: c, schema: l, self: d } = a.it, { root: m, baseId: v, localRefs: $, meta: b } = c.root, { schemaId: _ } = d.opts, h = new n.SchemaEnv({ schema: l, schemaId: _, root: m, baseId: v, localRefs: $, meta: b });
    return n.compileSchema.call(d, h), (0, r.getValidate)(a, h);
  }
  return mt.default = s, mt;
}
var gt = {}, Ks;
function _a() {
  if (Ks) return gt;
  Ks = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ De(), n = /* @__PURE__ */ co(), r = {
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
      const $ = a.let("valid", !1);
      m($), o.ok($);
    }
    function m($) {
      if (l.schemaEnv.root.dynamicAnchors[d]) {
        const b = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`);
        a.if(b, v(b, $), v(l.validateName, $));
      } else
        v(l.validateName, $)();
    }
    function v($, b) {
      return b ? () => a.block(() => {
        (0, n.callRef)(o, $), a.let(b, !0);
      }) : () => (0, n.callRef)(o, $);
    }
  }
  return gt.dynamicRef = s, gt.default = r, gt;
}
var kn = {}, Gs;
function zl() {
  if (Gs) return kn;
  Gs = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wa(), t = /* @__PURE__ */ de(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return kn.default = n, kn;
}
var En = {}, Ws;
function jl() {
  if (Ws) return En;
  Ws = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _a(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return En.default = t, En;
}
var Js;
function Il() {
  if (Js) return Cn;
  Js = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wa(), t = /* @__PURE__ */ _a(), n = /* @__PURE__ */ zl(), r = /* @__PURE__ */ jl(), s = [e.default, t.default, n.default, r.default];
  return Cn.default = s, Cn;
}
var xn = {}, Pn = {}, Ys;
function Dl() {
  if (Ys) return Pn;
  Ys = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ uo(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Pn.default = t, Pn;
}
var An = {}, Xs;
function Ll() {
  if (Xs) return An;
  Xs = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ uo(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return An.default = t, An;
}
var Rn = {}, Zs;
function ql() {
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
function Bl() {
  if (Qs) return xn;
  Qs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dl(), t = /* @__PURE__ */ Ll(), n = /* @__PURE__ */ ql(), r = [e.default, t.default, n.default];
  return xn.default = r, xn;
}
var Mn = {}, Nn = {}, ei;
function Vl() {
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
      v instanceof e.Name ? i.if((0, e._)`${v} !== true`, () => i.forIn("key", c, (h) => i.if(b(v, h), () => $(h)))) : v !== !0 && i.forIn("key", c, (h) => v === void 0 ? $(h) : i.if(_(v, h), () => $(h))), d.props = !0, o.ok((0, e._)`${l} === ${n.default.errors}`);
      function $(h) {
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
      function _(h, g) {
        const f = [];
        for (const C in h)
          h[C] === !0 && f.push((0, e._)`${g} !== ${C}`);
        return (0, e.and)(...f);
      }
    }
  };
  return Nn.default = s, Nn;
}
var Tn = {}, ti;
function Ul() {
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
      function m(v, $) {
        o.forRange("i", $, d, (b) => {
          s.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: t.Type.Num }, v), c.allErrors || o.if((0, e.not)(v), () => o.break());
        });
      }
    }
  };
  return Tn.default = r, Tn;
}
var ni;
function Hl() {
  if (ni) return Mn;
  ni = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vl(), t = /* @__PURE__ */ Ul(), n = [e.default, t.default];
  return Mn.default = n, Mn;
}
var On = {}, Fn = {}, ri;
function Kl() {
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
      const { gen: o, data: i, $data: a, schema: c, schemaCode: l, it: d } = r, { opts: m, errSchemaPath: v, schemaEnv: $, self: b } = d;
      if (!m.validateFormats)
        return;
      a ? _() : h();
      function _() {
        const g = o.scopeValue("formats", {
          ref: b.formats,
          code: m.code.formats
        }), f = o.const("fDef", (0, e._)`${g}[${l}]`), C = o.let("fType"), S = o.let("format");
        o.if((0, e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => o.assign(C, (0, e._)`${f}.type || "string"`).assign(S, (0, e._)`${f}.validate`), () => o.assign(C, (0, e._)`"string"`).assign(S, f)), r.fail$data((0, e.or)(u(), p()));
        function u() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${S}`;
        }
        function p() {
          const y = $.$async ? (0, e._)`(${f}.async ? await ${S}(${i}) : ${S}(${i}))` : (0, e._)`${S}(${i})`, k = (0, e._)`(typeof ${S} == "function" ? ${y} : ${S}.test(${i}))`;
          return (0, e._)`${S} && ${S} !== true && ${C} === ${s} && !${k}`;
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
        const [f, C, S] = p(g);
        f === s && r.pass(y());
        function u() {
          if (m.strictSchema === !1) {
            b.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${c}" ignored in schema at path "${v}"`;
          }
        }
        function p(k) {
          const P = k instanceof RegExp ? (0, e.regexpCode)(k) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(c)}` : void 0, E = o.scopeValue("formats", { key: c, ref: k, code: P });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${E}.validate`] : ["string", k, E];
        }
        function y() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!$.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${i})`;
          }
          return typeof C == "function" ? (0, e._)`${S}(${i})` : (0, e._)`${S}.test(${i})`;
        }
      }
    }
  };
  return Fn.default = n, Fn;
}
var oi;
function Gl() {
  if (oi) return On;
  oi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Kl()).default];
  return On.default = t, On;
}
var st = {}, si;
function Wl() {
  return si || (si = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.contentVocabulary = st.metadataVocabulary = void 0, st.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], st.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), st;
}
var ii;
function Jl() {
  if (ii) return Gt;
  ii = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dl(), t = /* @__PURE__ */ _l(), n = /* @__PURE__ */ Fl(), r = /* @__PURE__ */ Il(), s = /* @__PURE__ */ Bl(), o = /* @__PURE__ */ Hl(), i = /* @__PURE__ */ Gl(), a = /* @__PURE__ */ Wl(), c = [
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
function Yl() {
  if (ai) return Nt;
  ai = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Nt.DiscrError = e = {})), Nt;
}
var ci;
function Xl() {
  if (ci) return zn;
  ci = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Yl(), n = /* @__PURE__ */ or(), r = /* @__PURE__ */ rr(), s = /* @__PURE__ */ de(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: d, parentSchema: m, it: v } = a, { oneOf: $ } = m;
      if (!v.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const b = d.propertyName;
      if (typeof b != "string")
        throw new Error("discriminator: requires propertyName");
      if (d.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!$)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = c.let("valid", !1), h = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(b)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: b })), a.ok(_);
      function g() {
        const S = C();
        c.if(!1);
        for (const u in S)
          c.elseIf((0, e._)`${h} === ${u}`), c.assign(_, f(S[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: b }), c.endIf();
      }
      function f(S) {
        const u = c.name("valid"), p = a.subschema({ keyword: "oneOf", schemaProp: S }, u);
        return a.mergeEvaluated(p, e.Name), u;
      }
      function C() {
        var S;
        const u = {}, p = k(m);
        let y = !0;
        for (let M = 0; M < $.length; M++) {
          let R = $[M];
          if (R?.$ref && !(0, s.schemaHasRulesButRef)(R, v.self.RULES)) {
            const I = R.$ref;
            if (R = n.resolveRef.call(v.self, v.schemaEnv.root, v.baseId, I), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(v.opts.uriResolver, v.baseId, I);
          }
          const D = (S = R?.properties) === null || S === void 0 ? void 0 : S[b];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
          y = y && (p || k(R)), P(D, M);
        }
        if (!y)
          throw new Error(`discriminator: "${b}" must be required`);
        return u;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(b);
        }
        function P(M, R) {
          if (M.const)
            E(M.const, R);
          else if (M.enum)
            for (const D of M.enum)
              E(D, R);
          else
            throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
        }
        function E(M, R) {
          if (typeof M != "string" || M in u)
            throw new Error(`discriminator: "${b}" values must be unique strings`);
          u[M] = R;
        }
      }
    }
  };
  return zn.default = i, zn;
}
var jn = {};
const Zl = "https://json-schema.org/draft/2020-12/schema", Ql = "https://json-schema.org/draft/2020-12/schema", ed = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, td = "meta", nd = "Core and Validation specifications meta-schema", rd = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], od = ["object", "boolean"], sd = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", id = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, ad = {
  $schema: Zl,
  $id: Ql,
  $vocabulary: ed,
  $dynamicAnchor: td,
  title: nd,
  allOf: rd,
  type: od,
  $comment: sd,
  properties: id
}, cd = "https://json-schema.org/draft/2020-12/schema", ld = "https://json-schema.org/draft/2020-12/meta/applicator", dd = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, ud = "meta", fd = "Applicator vocabulary meta-schema", pd = ["object", "boolean"], hd = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, md = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, gd = {
  $schema: cd,
  $id: ld,
  $vocabulary: dd,
  $dynamicAnchor: ud,
  title: fd,
  type: pd,
  properties: hd,
  $defs: md
}, yd = "https://json-schema.org/draft/2020-12/schema", $d = "https://json-schema.org/draft/2020-12/meta/unevaluated", bd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, vd = "meta", wd = "Unevaluated applicator vocabulary meta-schema", _d = ["object", "boolean"], Sd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Cd = {
  $schema: yd,
  $id: $d,
  $vocabulary: bd,
  $dynamicAnchor: vd,
  title: wd,
  type: _d,
  properties: Sd
}, kd = "https://json-schema.org/draft/2020-12/schema", Ed = "https://json-schema.org/draft/2020-12/meta/content", xd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Pd = "meta", Ad = "Content vocabulary meta-schema", Rd = ["object", "boolean"], Md = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Nd = {
  $schema: kd,
  $id: Ed,
  $vocabulary: xd,
  $dynamicAnchor: Pd,
  title: Ad,
  type: Rd,
  properties: Md
}, Td = "https://json-schema.org/draft/2020-12/schema", Od = "https://json-schema.org/draft/2020-12/meta/core", Fd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, zd = "meta", jd = "Core vocabulary meta-schema", Id = ["object", "boolean"], Dd = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Ld = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, qd = {
  $schema: Td,
  $id: Od,
  $vocabulary: Fd,
  $dynamicAnchor: zd,
  title: jd,
  type: Id,
  properties: Dd,
  $defs: Ld
}, Bd = "https://json-schema.org/draft/2020-12/schema", Vd = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ud = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Hd = "meta", Kd = "Format vocabulary meta-schema for annotation results", Gd = ["object", "boolean"], Wd = { format: { type: "string" } }, Jd = {
  $schema: Bd,
  $id: Vd,
  $vocabulary: Ud,
  $dynamicAnchor: Hd,
  title: Kd,
  type: Gd,
  properties: Wd
}, Yd = "https://json-schema.org/draft/2020-12/schema", Xd = "https://json-schema.org/draft/2020-12/meta/meta-data", Zd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Qd = "meta", eu = "Meta-data vocabulary meta-schema", tu = ["object", "boolean"], nu = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, ru = {
  $schema: Yd,
  $id: Xd,
  $vocabulary: Zd,
  $dynamicAnchor: Qd,
  title: eu,
  type: tu,
  properties: nu
}, ou = "https://json-schema.org/draft/2020-12/schema", su = "https://json-schema.org/draft/2020-12/meta/validation", iu = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, au = "meta", cu = "Validation vocabulary meta-schema", lu = ["object", "boolean"], du = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, uu = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, fu = {
  $schema: ou,
  $id: su,
  $vocabulary: iu,
  $dynamicAnchor: au,
  title: cu,
  type: lu,
  properties: du,
  $defs: uu
};
var li;
function pu() {
  if (li) return jn;
  li = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = ad, t = gd, n = Cd, r = Nd, s = qd, o = Jd, i = ru, a = fu, c = ["/properties"];
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
    function m(v, $) {
      return d ? v.$dataMetaSchema($, c) : $;
    }
  }
  return jn.default = l, jn;
}
var di;
function hu() {
  return di || (di = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ cl(), r = /* @__PURE__ */ Jl(), s = /* @__PURE__ */ Xl(), o = /* @__PURE__ */ pu(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor($ = {}) {
        super({
          ...$,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach(($) => this.addVocabulary($)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: $, meta: b } = this.opts;
        b && (o.default.call(this, $), this.refs["http://json-schema.org/schema"] = i);
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
    var d = /* @__PURE__ */ ao();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return d.default;
    } });
    var m = /* @__PURE__ */ rr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(Bt, Bt.exports)), Bt.exports;
}
var mu = /* @__PURE__ */ hu();
const gu = /* @__PURE__ */ Kc(mu), yu = "https://json-schema.org/draft/2020-12/schema", $u = "https://raw.githubusercontent.com/omsf-eco-infra/alchemy-viz/main/schema/alchemy-viz.schema.json", bu = "alchemy-viz payload", vu = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", wu = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], _u = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), fo = {
  $schema: yu,
  $id: $u,
  title: bu,
  description: vu,
  oneOf: wu,
  $defs: _u
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
], po = fo.$id, ho = new gu({ allErrors: !0, strict: !1 });
ho.addSchema(fo, po);
const ui = ho.getSchema(po), Su = Object.entries(fo.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Sa = /* @__PURE__ */ new Map();
for (const e of Su) {
  const t = ho.getSchema(`${po}#/$defs/${e}`);
  t && Sa.set(e, t);
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
  const t = e.type, n = typeof t == "string" ? Sa.get(t) : void 0;
  return n ? n(e) ? fi : { valid: !1, issues: pi(n.errors) } : ui(e) ? fi : { valid: !1, issues: pi(ui.errors) };
}
function ku(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const mo = {
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
function Eu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like an alchemy-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!mo[t]) return xu(t);
  const { valid: n, issues: r } = Cu(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the alchemy-viz schema.`,
    detail: ku(r)
  };
}
function xu(e) {
  const t = Object.keys(mo).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class Pu extends Fe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Uc("payload", n, this);
    const r = Eu(n);
    if (r)
      return t.appendChild(Au(r, n)), {};
    const s = n.type, o = mo[s], i = document.createElement(o);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Au(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild($e(e.message));
  const r = (o, i) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${j.warnBg};color:${j.warnFg};border:1px solid ${j.warnBorder};` : `background:${j.panelBg};color:${j.textMuted2};border:1px solid ${j.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const s = Ru(t);
  return s && n.appendChild(r(s, !1)), n;
}
function Ru(e) {
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
  const n = T("button", zo.base + e, t);
  return n.className = zo.className, n.type = "button", n;
}
function Vr(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function sr(e, t = ro.className) {
  const n = T("button", e);
  return n.className = t, n.type = "button", n.setAttribute("aria-pressed", "false"), n;
}
function kt(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const s = T("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), o = e.map((i) => {
    const a = ft("", i.label);
    return a.title = i.title || i.label, a.onclick = () => {
      s.setActive(i.id), r?.set(i.id), n(i.id);
    }, s.appendChild(a), { id: i.id, btn: a };
  });
  return s.setActive = (i) => {
    t = i;
    for (const a of o) Vr(a.btn, a.id === t);
  }, s.setActive(t), s;
}
const Mu = parseFloat(Y.xl) * 2;
function Ca(e, t, n, r = {}) {
  const { remember: s } = r;
  if (s) {
    const m = s.get();
    e.some((v) => v.id === m) && (t = m);
  }
  const o = T("div", "display:flex;min-width:0;"), i = (m) => {
    o.setActive(m), s?.set(m), n(m);
  }, a = kt(e, t, i), c = go(e, t, i);
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
    let $ = 0;
    d = na(m, (b) => {
      l || ($ = v.offsetWidth || $), $ && o.setCompact($ > b - Mu);
    });
  }
  return o.cleanup = () => d(), o;
}
function go(e, t, n, r) {
  const s = T("select", ia);
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
function ka(e, t, n, r = {}) {
  let s = r.remember ? r.remember.get() : t;
  const o = ft("", e);
  return o.title = r.title || e, Vr(o, s), o.onclick = () => {
    s = !s, Vr(o, s), r.remember?.set(s), n(s);
  }, o;
}
const Ye = "alchemy-viz:", Ct = /* @__PURE__ */ new Map();
let In = null;
function Nu() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function ir() {
  if (In === !1) return null;
  const e = Nu();
  if (!e)
    return In = !1, null;
  try {
    const t = `${Ye}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), In = !0, e;
  } catch {
    return In = !1, null;
  }
}
function Tu(e) {
  const t = ir();
  if (!t) return Ct.get(Ye + e) ?? null;
  try {
    return t.getItem(Ye + e);
  } catch {
    return null;
  }
}
function Ou(e, t) {
  const n = ir();
  if (!n) {
    Ct.set(Ye + e, t);
    return;
  }
  try {
    n.setItem(Ye + e, t);
  } catch {
    Ct.set(Ye + e, t);
  }
}
function ar(e, t, n) {
  return {
    key: e,
    get() {
      const r = Tu(e);
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
        Ou(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ut(e, t, n) {
  return ar(e, t, (r) => typeof r == "string" && n.includes(r));
}
function ct(e, t) {
  return ar(e, t, (n) => typeof n == "boolean");
}
function Lt(e, t, n = -1 / 0, r = 1 / 0) {
  return ar(
    e,
    t,
    (s) => typeof s == "number" && Number.isFinite(s) && s >= n && s <= r
  );
}
function Ur(e, t = "") {
  return ar(e, t, (n) => typeof n == "string");
}
function yo() {
  const e = ir(), t = e ? Array.from({ length: e.length }, (r, s) => e.key(s)).filter((r) => typeof r == "string") : Array.from(Ct.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(Ye)) continue;
    const s = e ? e.getItem(r) : Ct.get(r) ?? null;
    s !== null && n.push([r, s]);
  }
  return n;
}
function Fu() {
  const e = {};
  for (const [t, n] of yo()) {
    const r = t.slice(Ye.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function zu() {
  return Object.fromEntries(yo());
}
function ju() {
  const e = ir();
  if (e)
    for (const [t] of yo())
      try {
        e.removeItem(t);
      } catch {
      }
  Ct.clear();
}
const Er = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, $o = {
  threeDmol: `https://unpkg.com/3dmol@${Er.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${Er.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${Er.d3}/+esm`
};
function bo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Ea(e, t) {
  return new Promise((n, r) => {
    const s = document.createElement("script");
    s.src = e, s.onload = () => n(), s.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(s);
  });
}
let nt = null, yt = null;
function cr() {
  if (yt) return yt;
  const e = bo("threeDmol");
  return e ? (yt = e.then((t) => nt = t || window.$3Dmol), yt) : (yt = (async () => {
    if (window.$3Dmol) return nt = window.$3Dmol;
    if (await Ea($o.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return nt = window.$3Dmol;
  })(), yt);
}
let $t = null;
function vo() {
  if ($t) return $t;
  const e = bo("rdkit");
  return e ? ($t = e.then((t) => window.RDKit = t), $t) : ($t = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Ea($o.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), $t);
}
let Iu = null;
function xa() {
  return Iu ??= vo().catch((e) => (console.warn("[alchemy-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let xr = null;
function Du() {
  if (!xr) {
    const e = $o.d3;
    xr = bo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return xr;
}
function wo(e) {
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
    t.hint && !r && (r = !0, Bu(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", s), e.addEventListener("pointerenter", s), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", s), e.removeEventListener("pointerenter", s), e.removeEventListener("pointerleave", o);
    }
  };
}
function Lu(e) {
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
const qu = 1600;
function Bu(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, qu);
}
const Vu = { min: 0.25, max: 12 }, Uu = 150;
function hi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Uu) - t;
}
function Hu(e, t = Vu) {
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
const Ku = 2e-3;
function Aa(e) {
  return Math.exp(-e.deltaY * Ku);
}
function lr(e, t, n = {}) {
  const r = Hu(t, n.bounds), s = Pa(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Aa(o))
  });
  return { ...r, cleanup: s.cleanup };
}
function Ra(e, t = "Reset view") {
  const n = ft("", "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
function Ma(e, t, n = "Reset view") {
  const r = Ra(t, n);
  return r.style.cssText += `position:absolute;left:${Y.xl};bottom:${Y.xl};z-index:10;`, e.appendChild(r), r;
}
let _t = null;
function Gu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function Na(e, t) {
  if (!e) return;
  const n = Gu(e);
  if (!n) return;
  const r = t?.level();
  _t = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : _t?.zoom ?? 1
  };
}
function Ta(e, t) {
  if (!_t || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ..._t.rotation]), t && Math.abs(_t.zoom - 1) > 1e-9 && t.zoomBy(_t.zoom), e.render(), !0);
}
const Pr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, Wu = [
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
], U = [0, 0, 0], Ju = {
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
}, V = [0.9, 0.9, 0.9], Yu = {
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
}, Xu = {
  "-1": V,
  0: V,
  1: V,
  2: V,
  3: V,
  4: V,
  5: V,
  6: V,
  7: V,
  8: V,
  9: V,
  10: V,
  11: V,
  12: V,
  13: V,
  14: V,
  15: V,
  16: V,
  17: V,
  18: V,
  19: V,
  20: V,
  21: V,
  22: V,
  23: V,
  24: V,
  25: V,
  26: V,
  27: V,
  28: V,
  29: V,
  30: V,
  31: V,
  32: V,
  33: V,
  34: V,
  35: V,
  36: V,
  37: V,
  38: V,
  39: V,
  40: V,
  41: V,
  42: V,
  43: V,
  44: V,
  45: V,
  46: V,
  47: V,
  48: V,
  49: V,
  50: V,
  51: V,
  52: V,
  53: V,
  54: V,
  55: V,
  56: V,
  57: V,
  58: V,
  59: V,
  60: V,
  61: V,
  62: V,
  63: V,
  64: V,
  65: V,
  66: V,
  67: V,
  68: V,
  69: V,
  70: V,
  71: V,
  72: V,
  73: V,
  74: V,
  75: V,
  76: V,
  77: V,
  78: V,
  79: V,
  80: V,
  81: V,
  82: V,
  83: V,
  84: V,
  85: V,
  86: V,
  87: V,
  88: V,
  89: V,
  90: V,
  91: V,
  92: V,
  93: V,
  94: V,
  95: V,
  96: V,
  97: V,
  98: V,
  99: V,
  100: V,
  101: V,
  102: V,
  103: V,
  104: V,
  105: V,
  106: V,
  107: V,
  108: V,
  109: V,
  110: V,
  111: V,
  112: V,
  113: V,
  114: V,
  115: V,
  116: V,
  117: V,
  118: V,
  201: V
}, Zu = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
function dr() {
  return to() === "dark";
}
function Oa() {
  return Je[dr() ? "dark" : "light"].canvas2DBg;
}
function Hr() {
  return Je[dr() ? "dark" : "light"].netDepictBg;
}
function Qu() {
  return Je[dr() ? "dark" : "light"].netDepictCaption;
}
function ur(e) {
  return dr() ? {
    ...Zu,
    atomColourPalette: e === "mono" ? Xu : Yu
  } : e === "mono" ? { atomColourPalette: Ju } : {};
}
const ef = "rdkit", tf = !0, nf = !0, rf = !0, of = !0, sf = "rdkit", af = "filled", cf = 0.42, lf = 1.5, df = !0, uf = "show", ff = "mono", pf = 0.51, hf = 0.74, mf = 1.6, gf = 1.7, yf = 5, $f = 0.3, bf = "#d62828", vf = "#d62828", wf = "#015ab5", _f = !1, Sf = "", Cf = "#7c3aed", kf = {
  layout: ef,
  alignPair: tf,
  atomNumbers: nf,
  createdDestroyed: rf,
  modified: of,
  style: sf,
  circles: af,
  circleRadius: cf,
  circleStroke: lf,
  boundary: df,
  hydrogens: uf,
  elementColors: ff,
  numScale: pf,
  labelScale: hf,
  bondWidth: mf,
  markWidth: gf,
  haloWidth: yf,
  haloOpacity: $f,
  destroyedColor: bf,
  createdColor: vf,
  modifiedColor: wf,
  stereo: _f,
  customSpec: Sf,
  customColor: Cf
}, Ef = {
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
}, xf = ["rdkit", "coordgen", "conformer"], Pf = ["rdkit", "recolor", "halo"], Af = ["outline", "filled", "off"], Rf = ["show", "dim", "hide"], Mf = ["cpk", "mono"], Nf = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Tf = /^#[0-9a-fA-F]{6}$/;
function Tt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ze(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Nf[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const bt = (e, t) => typeof e == "boolean" ? e : t, Dn = (e, t) => typeof e == "string" && Tf.test(e) ? e : t;
function Of(e) {
  const t = e && typeof e == "object" ? e : {}, n = Ef;
  return {
    version: 1,
    layout: Tt(t.layout, xf, n.layout),
    alignPair: bt(t.alignPair, n.alignPair),
    style: Tt(t.style, Pf, n.style),
    createdDestroyed: bt(t.createdDestroyed, n.createdDestroyed),
    modified: bt(t.modified, n.modified),
    destroyedColor: Dn(t.destroyedColor, n.destroyedColor),
    createdColor: Dn(t.createdColor, n.createdColor),
    modifiedColor: Dn(t.modifiedColor, n.modifiedColor),
    boundary: bt(t.boundary, n.boundary),
    circles: Tt(t.circles, Af, n.circles),
    circleRadius: Ze(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ze(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Tt(t.hydrogens, Rf, n.hydrogens),
    elementColors: Tt(t.elementColors, Mf, n.elementColors),
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
const Oe = Of(kf);
function Ff(e) {
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
function Ar(e, t, n) {
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
function Kr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function zf(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function jf(e, t, n) {
  const r = new Set(t.atoms), s = new Set(Ar(e, r, !0));
  return {
    deletions: Ar(e, r, n),
    changes: Ar(e, new Set(t.elements), n).filter((o) => !s.has(o))
  };
}
function Fa(e, t, n, r) {
  const s = jf(t, n, e.boundary), o = [];
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
function If(e) {
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
function Df(e, t) {
  return e.style === "rdkit" ? "rdkit" : If(t) ? e.style : "rdkit";
}
function Lf(e, t, n, r, s, o) {
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
  Object.assign(i, ur(e.elementColors)), s === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, c = {}, l = {};
  for (const $ of n) {
    const b = Kr($.color);
    if (s === "rdkit") for (const h of $.bonds) l[h] = b;
    if (s === "recolor" && e.circles === "off") continue;
    const _ = s === "recolor" && e.circles === "filled" ? zf(b, 0.7) : b;
    for (const h of $.atoms)
      a[h] = _, c[h] = e.circleRadius;
  }
  const d = Kr(e.customColor);
  for (const $ of r)
    $ < o && (a[$] = d, c[$] = e.circleRadius);
  const m = Object.keys(a).map(Number);
  m.length && (i.atoms = m, i.highlightAtomColors = a, i.highlightAtomRadii = c);
  const v = Object.keys(l).map(Number);
  return v.length && (i.bonds = v, i.highlightBondColors = l), i;
}
function qf(e, t, n, r) {
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
const Bf = "http://www.w3.org/2000/svg";
function za(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function _o(e, t, n) {
  const r = [];
  for (const s of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(s.getAttribute("class") || "")) continue;
    const o = s.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(s);
  }
  return r;
}
function ja(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function gi(e, t, n, r, s, o) {
  for (const i of r)
    for (const a of za(e, i)) {
      const c = a.style;
      ja(a) ? c.fill = s : (c.stroke = s, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const i of n)
      for (const a of _o(e, i, !1)) a.style.fill = o;
}
function Vf(e, t, n, r) {
  const s = e.ownerDocument;
  if (!s) return;
  const o = s.createElementNS(Bf, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of za(e, a)) {
      if (ja(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", o.appendChild(l);
    }
  if (!o.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(o, i.nextSibling) : i ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Uf(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of _o(e, o, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Hf(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of _o(e, o, !0)) {
        const a = i.style;
        a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Kf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const s of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = s.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Gf(e, t, n, r, s, o) {
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
        ), n.circles === "outline" ? Uf(e, n, i.atoms, s, i.color) : a && i.edgeOnFill && Hf(e, n, i.atoms, s, i.color);
      } else
        Vf(e, n, i.bonds, i.color), gi(e, n, i.atoms, i.bonds, i.color, null);
  Kf(e, t, n);
}
const fr = `
`, Gr = "$$$$";
function Wr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(fr);
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
    const v = parseInt(m.substring(0, 3), 10), $ = parseInt(m.substring(3, 6), 10), b = parseInt(m.substring(6, 9), 10);
    !isFinite(v) || !isFinite($) || c.push([v - 1, $ - 1, isFinite(b) ? b : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: i };
}
function Wf(e) {
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
  return r.push("M  END"), r.join(fr);
}
const Jf = (e) => `${Wf(e)}${fr}${Gr}`, Ia = (e) => e.indexOf(Gr) >= 0 ? e : `${e}${fr}${Gr}`;
function So(e) {
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
function Da(e, t, n) {
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
], Jr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, wt = (e) => e in Jr, $i = 400, Rr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Yf extends Fe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, s = n.name ?? "", o = n.smiles, i = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${Rr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Oa()};`
    );
    a.appendChild(c);
    const l = ua();
    l.wrap.style.cssText = Rr, a.appendChild(l.wrap);
    const d = T(
      "div",
      `${Rr}overflow:auto;padding:16px 20px;background:${j.panelBg};color:${j.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(d);
    const m = r ? So(r) : null, v = [
      ["Name", s || Qe, !1],
      ["SMILES", o || Qe, !0],
      ["Charge", i == null ? Qe : String(i), !1],
      ["Atoms", m ? String(m.atoms) : Qe, !1],
      ["Bonds", m ? String(m.bonds) : Qe, !1]
    ], $ = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${Y.xl} 20px;align-items:baseline;`);
    d.appendChild($);
    for (const [R, D, I] of v) {
      $.appendChild(
        T(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${j.textMuted2};`,
          R
        )
      );
      const L = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${j.textPrimary}` + (I ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        D
      );
      L.title = D, $.appendChild(L);
    }
    const b = so(t), _ = T("div", no, s || "Unnamed molecule");
    b && a.appendChild(_);
    const h = ut(
      "small-molecule.mode",
      "2d",
      yi.map((R) => R.id)
    ), g = ct("small-molecule.spin", !1);
    let f = h.get(), C = g.get(), S = null, u = null;
    const p = () => {
      try {
        S?.spin(C && wt(f) ? "y" : !1);
      } catch {
      }
    }, y = (R) => {
      f = R, c.style.visibility = f === "2d" ? "visible" : "hidden", l.wrap.style.visibility = wt(f) ? "visible" : "hidden", d.style.visibility = f === "info" ? "visible" : "hidden", _.style.display = f === "info" || !b ? "none" : "block", P.disabled = !wt(f), P.style.opacity = wt(f) ? "1" : "0.5", wt(f) && S && (S.setStyle({}, Jr[f]), S.resize(), S.render()), p();
    }, k = T("div", da), P = ka(
      "Spin",
      C,
      (R) => {
        C = R, p();
      },
      { title: "Toggle continuous rotation", remember: g }
    ), E = (R) => {
      R ? k.insertBefore(P, k.firstChild) : M.buttons.insertBefore(P, M.buttons.lastElementChild);
    }, M = Ca(yi, f, (R) => y(R), {
      remember: h,
      onLayout: E,
      fit: { pane: a, bar: k }
    });
    return k.appendChild(M), E(!1), a.appendChild(k), y(f), !r || !r.trim() ? (c.appendChild($e("No molecule provided")), l.container.appendChild($e("No molecule provided")), { cleanup: () => M.cleanup() }) : (c.appendChild($e("Loading 2D depiction...")), vo().then((R) => {
      const D = ur("cpk"), I = Co(R, r, $i, Oe.layout, void 0, D);
      I ? Da(c, I, $i) : c.replaceChildren($e("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren($e(`RDKit failed to load: ${ve(R)}`, !0));
    }), l.container.appendChild($e("Loading 3D viewer...")), cr().then(() => {
      l.container.replaceChildren(), S = nt.createViewer(l.container, { backgroundColor: qt.viewer() }), S.addModel(Ia(r), "sdf"), S.setStyle({}, Jr[wt(f) ? f : "stick"]), S.zoomTo(), S.render(), u = lr(l.container, S), Ta(S, u), p();
    }).catch((R) => {
      l.container.replaceChildren($e(`3D render failed: ${ve(R)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        M.cleanup(), Na(S, u), u?.cleanup(), u = null, wo(S), S = null;
      }
    });
  }
}
ze("gufe-small-molecule", Yf);
const La = ["HOH", "WAT", "SOL", "TIP3"], bi = { hetflag: !1 }, Xf = { hetflag: !0 }, Zf = { resn: La }, Be = {
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
function qa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, s = 0, o = 0, i = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const l = c.slice(0, 6);
    if (l === "ENDMDL") break;
    if (l !== "ATOM  " && l !== "HETATM") continue;
    r++, l === "HETATM" && s++;
    const d = c.slice(17, 20).trim(), m = c.slice(21, 22).trim() || "_", v = c.slice(22, 26).trim(), $ = c.slice(26, 27).trim();
    La.indexOf(d) !== -1 && o++, t.add(m), n.add(`${m}|${v}${$}|${d}`);
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
function Ba(e) {
  return [
    `${At(e.chains)} chains`,
    `${At(e.residues)} residues`,
    `${At(e.atoms)} atoms`,
    `${At(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${At(e.waters)} water)` : "")
  ];
}
function Qf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Yr(e, t, n, r, s, o = () => !0) {
  const i = r || (() => {
  }), a = Qf(t.color, n), c = (l) => s ? { ...l, ...s } : l;
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
    c(Xf),
    t.hetero ? {
      stick: { radius: Be.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Be.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    c(Zf),
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
function ep(e, t) {
  e.setStyle(t, {
    stick: { radius: Be.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Be.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const vi = { min: 0.2, max: 0.8 }, Va = 5, Mr = { min: 130, max: 560, maxShare: "60%" };
function Ua(e, t, n, r = {}) {
  const s = r.min ?? vi.min, o = r.max ?? vi.max, i = T(
    "div",
    `flex:0 0 ${Va}px;align-self:stretch;touch-action:none;background:${j.splitBorder};`
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
    const _ = l();
    _ !== a && (c(_), r.onResize?.(d));
  }).observe(e);
  let v = !1;
  i.addEventListener("pointerdown", (b) => {
    v = !0, i.setPointerCapture(b.pointerId), b.preventDefault();
  }), i.addEventListener("pointermove", (b) => {
    if (!v) return;
    const _ = e.getBoundingClientRect(), h = a ? _.height : _.width;
    if (h <= 0) return;
    const g = a ? b.clientY - _.top : b.clientX - _.left;
    d = Math.min(o, Math.max(s, g / h)), m();
  });
  const $ = (b) => {
    v && (v = !1, i.releasePointerCapture(b.pointerId), r.remember?.set(d), r.onResize?.(d));
  };
  return i.addEventListener("pointerup", $), i.addEventListener("pointercancel", $), i;
}
function Ha(e, t) {
  const n = t.min ?? Mr.min, r = t.max ?? Mr.max, s = t.maxShare ?? Mr.maxShare, o = (v) => Math.min(r, Math.max(n, v));
  let i = o(t.remember?.get() ?? t.initial), a = !1;
  const c = T(
    "div",
    `flex:0 0 ${Va}px;align-self:stretch;touch-action:none;cursor:col-resize;background:${j.splitBorder};`
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
function ko(e, t) {
  e.style.setProperty(et.min, t ? "0" : Gn.min), e.style.setProperty(et.max, t ? "none" : Gn.max), e.style.setProperty(et.ruleX, t ? "0" : "1px"), e.style.setProperty(et.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? xc : "";
}
const tp = !1, Eo = ".menuOpen";
function np() {
  const e = T("span", `display:inline-flex;flex-direction:column;gap:${Y.xs};justify-content:center;`);
  for (let t = 0; t < 3; t++)
    e.appendChild(T("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${j.btnFg};`));
  return e;
}
const rp = {
  /** Three bars: the generic form, and the one that reads as a menu. */
  hamburger: np
}, op = rp.hamburger;
function xo(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? tp, s = !1;
  const o = T("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), i = ft(`display:inline-flex;align-items:center;padding:${Y.sm};`);
  i.appendChild(op());
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
const Ka = "https://framejs.app", Ga = 1e4;
function sp(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const ip = "/alchemy-dev-bundle.js";
function ap() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Ga ? e : null;
}
async function cp() {
  const e = ap();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(ip);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Ga ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function lp() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function dp(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Ye)};`,
    `  const menuOpen = ${JSON.stringify(Eo)};`,
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
    `globalThis[${JSON.stringify(fa)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function up(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...dp(n),
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
function fp(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [s, o] of Object.entries(zu()))
    s.endsWith(Eo) || (r[s] = o);
  return { settings: r, views: t };
}
const pp = (e) => `${Ka}/j/${e}`, hp = (e) => `${Ka}/j/${e}.json`;
async function mp(e, t, n, r) {
  await fetch(hp(e), {
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
function gp() {
  const e = T("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function Po(e) {
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${Y.md};padding-top:${Y.lg};border-top:1px solid ${j.splitBorder};`
  ), n = ft(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${Y.md};`);
  n.appendChild(gp()), n.appendChild(T("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Q.tiny};line-height:1.5;color:${j.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const s = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? j.errorFg : j.textMuted2;
  }, o = (i, a) => {
    const c = T("a", `color:${j.textPrimary};`, i);
    c.href = i, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${Y.sm};`, a)), r.style.color = j.textMuted2;
  };
  n.onclick = () => {
    const i = sp(e);
    if (!i || i.payload == null) {
      s("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, c = fp(i), l = window.open("", "_blank"), d = lp(), v = String(a.type || "alchemy-viz"), $ = `${v}. Shared from alchemy-viz`, b = () => {
      n.disabled = !1;
    };
    n.disabled = !0, s("Uploading..."), cp().then((_) => {
      if (!_) {
        l?.close(), b(), s(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return mp(d, up(_.js, a, c), v, $).then(() => {
        b();
        const h = pp(d);
        l && (l.location.href = h), o(h, _.note);
      });
    }).catch((_) => {
      b(), l?.close(), s(`Upload failed: ${_ instanceof Error ? _.message : String(_)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Q.tiny};line-height:1.5;color:${j.textMuted2};`,
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
function Xr(e) {
  return !Array.isArray(e) || e.length < 4 ? null : e.every((t) => typeof t == "number" && Number.isFinite(t)) ? e.slice() : null;
}
function yp(e) {
  const t = e.tagName.toLowerCase().replace(/^gufe-/, ""), n = pa(t);
  return !n || typeof n != "object" ? null : Xr(n.camera);
}
function Wa(e) {
  const t = ut(
    "protein.representation",
    e.rep ?? "cartoon",
    wi.map((k) => k.id)
  ), n = ut(
    "protein.color",
    "chain",
    _i.map((k) => k.id)
  ), r = ct("protein.waters", e.waters), s = ct("protein.hetero", !0), o = ct("protein.spin", !1), i = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: s.get(),
    spin: o.get()
  };
  let a = yp(e.element), c = null, l = null, d = !0;
  const m = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(m);
  const v = T("div", Mc);
  m.appendChild(v);
  const $ = ({ label: k, controls: P }) => {
    const E = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    E.appendChild(
      T(
        "span",
        `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted};`,
        k
      )
    );
    for (const M of P) E.appendChild(M);
    return E;
  }, b = T("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${j.textMuted};`), _ = $({ label: "Contents", controls: [b] });
  _.style.display = "none";
  const g = xo(v, () => {
    const k = T("div", `${la}padding-top:${Nc};`), P = kt(
      wi,
      i.rep,
      (I) => {
        i.rep = I, e.restyle();
      },
      t
    );
    k.appendChild($({ label: "Style", controls: [P] }));
    const E = go(
      _i,
      i.color,
      (I) => {
        i.color = I, e.restyle();
      },
      n
    );
    E.style.cssText += "width:100%;box-sizing:border-box;", k.appendChild($({ label: "Color", controls: [E] }));
    const M = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), R = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, s, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", o, () => c?.spin(i.spin ? "y" : !1)]
    ];
    for (const [I, L, G, oe, X] of R)
      M.appendChild(
        ka(
          L,
          i[I],
          (re) => {
            i[I] = re, X();
          },
          { title: G, remember: oe }
        )
      );
    k.appendChild($({ label: "Show", controls: [M] }));
    const D = Ra(() => e.reset ? e.reset() : l?.reset());
    return D.style.cssText += "width:100%;box-sizing:border-box;", k.appendChild($({ label: "Camera", controls: [...e.camera?.() ?? [], D] })), k.appendChild(_), k;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: ct(`protein${Eo}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      c?.resize(), c?.render();
    },
    extras: Po
  }), f = so(e.element) ? e.title || e.fallbackTitle : "";
  f && v.appendChild(
    T("div", `${Rc}pointer-events:none;font-size:${Q.heading};font-weight:${ge.bold};`, f)
  ), m.appendChild(g.panel);
  const C = ua();
  m.appendChild(C.wrap);
  const S = eo(m, (k) => {
    m.style.flexDirection = k ? "column" : "row", ko(g.panel, k), c?.resize(), c?.render();
  }), u = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  C.wrap.appendChild(u);
  const p = (k, P) => {
    if (k == null) {
      u.style.display = "none";
      return;
    }
    u.textContent = k, u.style.display = "block";
    const E = P === "error";
    u.style.background = E ? j.warnBg : j.toolbarBg, u.style.color = E ? j.warnFg : j.textMuted, u.style.border = `1px solid ${E ? j.warnBorder : j.toolbarBorder}`;
  }, y = () => {
    if (!e.cameraKey || !c) return;
    const k = Xr(c.getView?.());
    k && Si.set(e.cameraKey, k);
  };
  return {
    opts: i,
    pane: C,
    menu: g,
    showStatus: p,
    setStats: (k) => {
      b.replaceChildren(...k.map((P) => T("div", "overflow-wrap:anywhere;", P))), _.style.display = k.length ? "" : "none";
    },
    restoreCamera: () => {
      const k = a;
      a = null;
      const P = k ?? (e.cameraKey ? Si.get(e.cameraKey) : void 0);
      return !P || !c ? !1 : (c.setView(P.slice()), c.render(), !0);
    },
    viewer: () => c,
    stillWanted: () => d,
    setViewer: (k) => {
      c = k;
    },
    interaction: () => l,
    setInteraction: (k) => {
      l = k;
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
        const k = Xr(c?.getView?.());
        return k ? { camera: k } : null;
      },
      cleanup() {
        d = !1, S(), y(), l?.cleanup(), l = null, wo(c), c = null;
      }
    }
  };
}
class $p extends Fe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let s = null;
    function o() {
      const a = i.viewer();
      a && Yr(a, i.opts, s, i.showStatus, void 0, i.stillWanted);
    }
    const i = Wa({
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
      s = qa(r), i.setStats(Ba(s));
    } catch (a) {
      i.showStatus(`PDB parse error: ${ve(a)}`, "error");
    }
    return i.showStatus("Loading 3D viewer..."), cr().then(() => {
      const a = nt.createViewer(i.pane.container, { backgroundColor: qt.viewer() });
      i.setViewer(a), a.addModel(r, "pdb"), Yr(a, i.opts, s, i.showStatus, void 0, i.stillWanted), i.restoreCamera() || a.zoomTo(), a.spin(i.opts.spin ? "y" : !1), a.render(), i.setInteraction(lr(i.pane.container, a));
    }).catch((a) => {
      i.showStatus(`Failed to render structure: ${ve(a)}`, "error");
    }), i.handle;
  }
}
ze("gufe-protein", $p);
const Ja = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(Ja, e);
  for (const [r, s] of Object.entries(t)) n.setAttribute(r, String(s));
  return n;
}
function Nr(e, t) {
  const n = document.createElementNS(Ja, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Ya = 3, bp = 24;
function Xa(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, s = 1 / 0, o = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), s = Math.min(s, a.y), o = Math.max(o, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(s) ? null : { minX: r - t, minY: s - n, maxX: o + t, maxY: i + n };
}
const vp = { min: 0.15, max: 5 }, wp = 1e-9;
function Za(e, t, n) {
  const r = n.margin ?? bp, s = n.zoom ?? vp;
  let o = 1, i = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${o})`), n.onTransform?.(o, i, a);
  }, l = () => {
    const I = e.getBoundingClientRect();
    return {
      width: I.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: I.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, d = (I, L, G) => Math.min(1, L / (I.maxX - I.minX + r * 2), G / (I.maxY - I.minY + r * 2)), m = () => {
    const I = n.bounds();
    if (!I) return s.min;
    const { width: L, height: G } = l();
    return Math.min(s.min, d(I, L, G));
  }, v = (I) => Math.min(s.max, Math.max(m(), o * I)), $ = () => {
    o = 1, i = 0, a = 0;
    const I = n.bounds();
    if (!I) {
      c();
      return;
    }
    const { width: L, height: G } = l();
    o = d(I, L, G), i = L / 2 - (I.minX + I.maxX) / 2 * o, a = G / 2 - (I.minY + I.maxY) / 2 * o, c();
  }, _ = Pa(e, {
    onZoom: (I) => {
      const L = e.getBoundingClientRect(), G = I.clientX - L.left, oe = I.clientY - L.top, X = v(Aa(I)), re = X / o;
      return i = G - (G - i) * re, a = oe - (oe - a) * re, o = X, c(), Math.abs(re - 1) > wp;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), h = /* @__PURE__ */ new Map();
  let g = null, f = null, C = !1, S = null;
  const u = (I) => ({
    x: I.clientX - i,
    y: I.clientY - a,
    from: { x: I.clientX, y: I.clientY }
  }), p = (I) => {
    I.pointerType === "touch" && h.size > 1 || (f = u(I), C = !1);
  }, y = (I) => {
    g || (S && I.pointerType === "touch" && (f = { x: S.x - i, y: S.y - a, from: S }, S = null), f && (Math.hypot(I.clientX - f.from.x, I.clientY - f.from.y) > Ya && (C = !0), i = I.clientX - f.x, a = I.clientY - f.y, c()));
  }, k = () => {
    f = null;
  };
  e.addEventListener("pointerdown", p), e.addEventListener("pointermove", y), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("pointerleave", k);
  const P = () => {
    const [I, L] = [...h.values()];
    return { cx: (I.x + L.x) / 2, cy: (I.y + L.y) / 2, span: Math.max(1, Math.hypot(I.x - L.x, I.y - L.y)) };
  }, E = (I) => {
    if (I.pointerType === "touch") {
      if (h.set(I.pointerId, { x: I.clientX, y: I.clientY }), h.size !== 2) {
        g = null;
        return;
      }
      g = P(), f = null, C = !0;
    }
  }, M = (I) => {
    if (I.pointerType !== "touch" || !h.has(I.pointerId) || (h.set(I.pointerId, { x: I.clientX, y: I.clientY }), !g || h.size !== 2)) return;
    I.preventDefault(), I.stopPropagation();
    const L = P(), G = e.getBoundingClientRect(), oe = v(L.span / g.span), X = oe / o;
    i = L.cx - G.left - (g.cx - G.left - i) * X, a = L.cy - G.top - (g.cy - G.top - a) * X, o = oe, g = L, c();
  }, R = (I) => {
    if (I.pointerType !== "touch") return;
    if (h.delete(I.pointerId), h.size === 2) {
      g = P();
      return;
    }
    g = null;
    const [L] = [...h.values()];
    S = h.size === 1 && L ? { ...L } : null;
  };
  e.addEventListener("pointerdown", E, !0), e.addEventListener("pointermove", M, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const D = Lu(e);
  return {
    fit: $,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: $,
    centreOn(I, L, G = 1) {
      const { width: oe, height: X } = l();
      o = Math.max(o, G), i = oe / 2 - I * o, a = X / 2 - L * o, c();
    },
    transform: () => ({ scale: o, tx: i, ty: a }),
    wasPan: () => C,
    gesturing: () => h.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(I, L, G) {
      o = I, i = L, a = G, c();
    },
    cleanup() {
      _.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", p), e.removeEventListener("pointermove", y), e.removeEventListener("pointerup", k), e.removeEventListener("pointercancel", k), e.removeEventListener("pointerleave", k), e.removeEventListener("pointerdown", E, !0), e.removeEventListener("pointermove", M, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const _p = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Qa(e) {
  const t = { ...e };
  for (const n of _p) delete t[n];
  return t;
}
async function ec(e) {
  let t;
  try {
    if (t = await Du(), typeof t?.forceSimulation != "function") return !1;
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
  return Zr(e, t, /* @__PURE__ */ new Set()), t;
}
function Zr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const s of e) Zr(s, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const s of r) {
      const o = s["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, s);
    }
  for (const s of Object.values(e)) Zr(s, t, n);
}
function Ne(e, t) {
  return t ? e.get(t) : void 0;
}
function Ce(e, t, n) {
  const r = Ne(e, t);
  return r?.type === n ? r : void 0;
}
function Ao(e, t) {
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
function tc(e) {
  const t = e.gufe_type || e.name || "Protocol";
  return (t.endsWith("Protocol") ? t.slice(0, -8) : t) || t;
}
function nc(e) {
  const t = [];
  let n = 0;
  for (const i of e.keys) {
    const a = Ce(e.registry, i, e.nodeType);
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
const Sp = 8, Cp = 64, kp = () => new Promise((e) => setTimeout(e, 0));
function Qr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Ep(e, t, n, r) {
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
    Qr(s);
  }
}
function rc(e, t, n = !0) {
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
      return Qr(m), { status: "unsupported" };
    const v = /* @__PURE__ */ new Map();
    let $ = 0;
    try {
      let b = performance.now(), _ = 0;
      for (let h = 0; h < t.length; h++) {
        const g = t[h] ? Ep(d, m, t[h], n) : null;
        if (g ? g.length && v.set(h, g) : $++, !(++_ < Cp && performance.now() - b < Sp)) {
          if (await kp(), c !== s) return { status: "superseded" };
          _ = 0, b = performance.now();
        }
      }
    } finally {
      Qr(m);
    }
    return r.set(a, v), { status: "ok", matched: v, unreadable: $ };
  }, cancel: () => void ++s };
}
const xp = 250;
function Pp(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", aa);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = T("div", `font-size:${Q.tiny};line-height:1.5;min-height:1.5em;color:${j.textMuted2};`);
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
    }, xp);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && o(n.value);
    }
  };
}
const oc = "Cmd/Ctrl-click to select several.";
function Ap(e, t, n, r, s) {
  const o = (i) => s === "keys" ? i["gufe-key"] : _e(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(o).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${o(i.from)}, ${o(i.to)}`).join(`
`);
}
async function Rp(e) {
  try {
    if (navigator.clipboard)
      return await navigator.clipboard.writeText(e), !0;
  } catch {
  }
  return Mp(e);
}
function Mp(e) {
  const t = T(
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
function Np(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Tp(e) {
  const { words: t } = e, n = ut(e.setting, "names", ["names", "keys"]), r = T("div", "display:flex;flex-direction:column;gap:6px;"), s = T("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${j.textMuted};`);
  s.appendChild(T("span", "", "copy as"));
  const o = go(
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
  const i = T("div", `font-size:${Q.tiny};line-height:1.5;color:${j.textMuted2};`), a = (d) => {
    i.textContent = d;
  }, c = ft("width:100%;"), l = () => {
    const d = e.what();
    c.textContent = "Copy", c.title = d === "nodes" ? `Copy the selected ${t.nodes.plural}, one per line` : `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`;
  };
  return l(), c.onclick = (d) => {
    const m = e.what(), v = m === "nodes" ? t.nodes : t.edges, $ = o.value, b = Ap(e.nodes, e.edges, e.selected, m, $);
    if (!b) {
      a(
        e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : m === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${oc}` : "Nothing to copy."
      );
      return;
    }
    const _ = b.split(`
`).length;
    if (d.shiftKey) {
      Np(b, `selected-${v.plural}.txt`), a(`Saved ${_} ${v.plural} to a file.`);
      return;
    }
    Rp(b).then((h) => {
      if (!h) {
        a("Could not reach the clipboard. Shift-click to save as a file instead.");
        return;
      }
      a(
        m === "edges" ? `Copied ${_} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      );
    });
  }, r.appendChild(c), r.appendChild(i), r.appendChild(T("div", `font-size:${Q.tiny};color:${j.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a(""), relabel: l };
}
const Ci = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function sc(e) {
  const t = Ur(`${e.namespace}.query`), n = ut(`${e.namespace}.tab`, "nodes", ["nodes", "edges"]);
  let r = n.get();
  const s = T("div", la), o = kt(
    [
      { id: "nodes", label: e.words.nodes.tab, title: `List the ${e.words.nodes.plural}` },
      { id: "edges", label: e.words.edges.tab, title: `List the ${e.words.edges.plural}` }
    ],
    r,
    (h) => {
      r = h, n.set(r), _();
    }
  );
  for (const h of Array.from(o.children)) h.style.flex = "1";
  o.style.gap = "0", s.appendChild(o);
  const i = T("input", aa);
  s.appendChild(i);
  const a = Pp({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Ur(`${e.namespace}.smarts`),
    run: (h) => e.match(h),
    describe: (h) => e.smarts.describe(h)
  });
  s.appendChild(a.element);
  for (const h of e.filters?.(() => _()) ?? []) s.appendChild(h);
  const c = T("div", `font-size:${Q.small};color:${j.textMuted2};`);
  s.appendChild(c);
  const l = T("div", Pc);
  s.appendChild(l), s.appendChild(T("div", `font-size:${Q.tiny};line-height:1.5;color:${j.textMuted2};`, oc));
  const d = Tp({
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
    e.selected.clear(), e.resetFilters?.(), _(), e.refresh();
  }, s.appendChild(m);
  function v(h, g, f) {
    const C = sr(ro.row);
    C.setAttribute("aria-pressed", String(g.every((u) => e.selected.has(u)))), h.before && C.appendChild(h.before);
    const S = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", h.name);
    S.title = h.title, C.appendChild(S), C.onclick = (u) => {
      if (u.shiftKey || u.metaKey || u.ctrlKey) {
        const p = g.every((y) => e.selected.has(y));
        for (const y of g)
          p ? e.selected.delete(y) : e.selected.add(y);
      } else {
        e.selected.clear();
        for (const p of g) e.selected.add(p);
        f();
      }
      _(), e.refresh();
    }, l.appendChild(C);
  }
  function $() {
    const h = e.nodes.map((g, f) => ({ node: g, index: f })).filter(({ node: g, index: f }) => e.shows(g, f)).map(({ node: g, index: f }) => ({ node: g, index: f, parts: e.row(g, f) }));
    h.sort((g, f) => Ci.compare(g.parts.name, f.parts.name));
    for (const { node: g, index: f, parts: C } of h)
      v(C, [g["gufe-key"]], () => e.focus(f));
    return h.length;
  }
  function b() {
    const h = e.edges.map((g, f) => ({ edge: g, index: f })).filter(({ edge: g, index: f }) => e.edgeShows(g, f)).map(({ edge: g, index: f }) => ({ edge: g, index: f, parts: e.edgeRow(g, f) }));
    h.sort((g, f) => Ci.compare(g.parts.name, f.parts.name));
    for (const { edge: g, index: f, parts: C } of h)
      v(C, [g.from["gufe-key"], g.to["gufe-key"]], () => e.focusEdge(f));
    return h.length;
  }
  function _() {
    d.clearNote(), d.relabel(), o.setActive(r), l.replaceChildren();
    const h = r === "nodes" ? e.words.nodes : e.words.edges, g = r === "nodes" ? e.nodes.length : e.edges.length, f = r === "nodes" ? $() : b();
    c.textContent = `${f} of ${g} ${h.plural}`, f || l.appendChild(T("div", `font-size:${Q.small};padding:${Y.lg};color:${j.textMuted2};`, "Nothing matches."));
  }
  return i.type = "search", i.placeholder = e.search.placeholder, i.value = t.get(), e.query.text = i.value, i.setAttribute("aria-label", e.search.label), i.oninput = () => {
    e.query.text = i.value, t.set(i.value), _(), e.refresh();
  }, _(), e.mounted?.(_), a.apply(), s;
}
function ic(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function Op(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Dt = { node: 0.12, edge: 0.06 };
function ac(e, t, n, r) {
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
      Math.hypot(m - t[o].x, v - t[o].y) * d > Ya && (a = !0), t[o].x = t[o].fx = m, t[o].y = t[o].fy = v, r.moved(o);
    });
    const c = () => {
      i = null;
    };
    s.addEventListener("pointerup", c), s.addEventListener("pointercancel", c), s.addEventListener("click", (l) => {
      l.stopPropagation(), a || r.clicked(o);
    });
  });
}
class cc {
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
function lc(e, t, n, r) {
  const { scale: s, tx: o, ty: i } = t, a = [];
  return e.forEach((c, l) => {
    if (!r(l)) return;
    const d = c.x * s + o, m = c.y * s + i;
    d < -Ln || m < -Ln || d > n.width + Ln || m > n.height + Ln || a.push(l);
  }), a;
}
function dc(e) {
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
      t.replaceChildren($e(r));
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
function ki(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const Fp = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), zp = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), jp = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, Ip = (e) => {
  const t = Fp(e);
  return zp.has(t) || jp(t);
};
function uc(e, t, n, r) {
  const s = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!s || s.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let o = 0;
  for (const i of Array.from(s.childNodes)) {
    if (i.nodeType !== 1) continue;
    const a = i.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && Ip(i) || (e.appendChild(document.importNode(i, !0)), o++);
  }
  return o ? !0 : (e.replaceChildren(), !1);
}
const Dp = 1e-6;
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
function Lp(e) {
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
      let $;
      Math.abs(v) > 1e10 ? $ = 1 / (2 * v) : $ = (v >= 0 ? 1 : -1) / (Math.abs(v) + Math.sqrt(v * v + 1));
      const b = 1 / Math.sqrt(1 + $ * $), _ = $ * b;
      t[a * 3 + a] = d - $ * l, t[c * 3 + c] = m + $ * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let h = 0; h < 3; h++)
        if (h !== a && h !== c) {
          const g = t[h * 3 + a], f = t[h * 3 + c];
          t[h * 3 + a] = b * g - _ * f, t[a * 3 + h] = t[h * 3 + a], t[h * 3 + c] = _ * g + b * f, t[c * 3 + h] = t[h * 3 + c];
        }
      for (let h = 0; h < 3; h++) {
        const g = n[h * 3 + a], f = n[h * 3 + c];
        n[h * 3 + a] = b * g - _ * f, n[h * 3 + c] = _ * g + b * f;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function qp(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], s = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], s[0] += t[S][0], s[1] += t[S][1], s[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, s[0] /= n, s[1] /= n, s[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - s[0], r[1] - s[1], r[2] - s[2]], determined: !1 };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const u = e[S][0] - r[0], p = e[S][1] - r[1], y = e[S][2] - r[2], k = t[S][0] - s[0], P = t[S][1] - s[1], E = t[S][2] - s[2];
    o[0] += u * k, o[1] += u * P, o[2] += u * E, o[3] += p * k, o[4] += p * P, o[5] += p * E, o[6] += y * k, o[7] += y * P, o[8] += y * E;
  }
  const i = Ei(o), a = qn(i, o), c = qn(o, i);
  let l = xi(a), d = xi(c);
  function m(S) {
    const u = [0, 1, 2].sort((y, k) => S.values[k] - S.values[y]), p = new Array(9);
    for (let y = 0; y < 3; y++) {
      const k = u[y];
      p[y] = S.vectors[k], p[3 + y] = S.vectors[3 + k], p[6 + y] = S.vectors[6 + k];
    }
    return {
      values: [S.values[u[0]], S.values[u[1]], S.values[u[2]]],
      vectors: p
    };
  }
  l = m(l), d = m(d);
  const v = l.vectors, $ = d.vectors;
  for (let S = 0; S < 3; S++) {
    const u = v[S], p = v[3 + S], y = v[6 + S], k = o[0] * u + o[1] * p + o[2] * y, P = o[3] * u + o[4] * p + o[5] * y, E = o[6] * u + o[7] * p + o[8] * y, M = $[S], R = $[3 + S], D = $[6 + S];
    k * M + P * R + E * D < 0 && ($[S] = -M, $[3 + S] = -R, $[6 + S] = -D);
  }
  const b = Ei(v);
  let _ = qn($, b);
  Lp(_) < 0 && ($[2] = -$[2], $[5] = -$[5], $[8] = -$[8], _ = qn($, b));
  const h = _[0] * s[0] + _[1] * s[1] + _[2] * s[2], g = _[3] * s[0] + _[4] * s[1] + _[5] * s[2], f = _[6] * s[0] + _[7] * s[1] + _[8] * s[2], C = l.values[1] > Dp * l.values[0];
  return { R: _, t: [r[0] - h, r[1] - g, r[2] - f], determined: C };
}
function Bp(e, t, n) {
  const r = e[0], s = e[1], o = e[2];
  return [
    t[0] * r + t[1] * s + t[2] * o + n[0],
    t[3] * r + t[4] * s + t[5] * o + n[1],
    t[6] * r + t[7] * s + t[8] * o + n[2]
  ];
}
function Vp(e, t) {
  const n = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  e.appendChild(n);
  let r = [], s = 0, o = !0, i = !1;
  const a = () => {
    s && cancelAnimationFrame(s), s = 0, i && Na(r[0]?.viewer ?? null, r[0]?.interaction ?? null), i = !1;
    for (const c of r)
      c.interaction?.cleanup(), wo(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), d = T("div", "flex:1;position:relative;min-height:0;");
      d.dataset.gufeViewer = "", l.appendChild(d), t && l.appendChild(T("div", no, c)), n.appendChild(l);
      const m = { container: d, viewer: null, interaction: null };
      return r.push(m), m;
    },
    open(c, l) {
      const d = nt.createViewer(c.container, { backgroundColor: qt.viewer() });
      for (const m of l) d.addModel(Jf(m), "sdf");
      return c.viewer = d, d;
    },
    settle(c) {
      c.viewer && (c.interaction = lr(c.container, c.viewer));
    },
    pose(c) {
      Ta(c.viewer, c.interaction), i = !0;
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
              const $ = JSON.stringify(v.getView());
              if ($ !== c[m]) {
                l = !0;
                for (let b = 0; b < r.length; b++)
                  b !== m && r[b].viewer && (r[b].viewer.setView(v.getView()), r[b].viewer.render()), c[b] = $;
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
`, Tr = 4;
function Ai(e, t, n) {
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
function Up(e, t, n) {
  const r = [], s = [];
  for (const [d, m] of n) {
    const v = e[m], $ = t[d];
    !v || !$ || (r.push(v), s.push($));
  }
  if (r.length < 2) return null;
  const o = (d) => {
    let m = 0, v = 0;
    for (const $ of d)
      m += $[0], v += $[1];
    return [m / d.length, v / d.length];
  }, i = o(r), a = o(s);
  let c = null, l = -1 / 0;
  for (const d of [!1, !0]) {
    let m = 0, v = 0;
    for (let f = 0; f < r.length; f++) {
      const C = (d ? -1 : 1) * (r[f][0] - i[0]), S = r[f][1] - i[1], u = s[f][0] - a[0], p = s[f][1] - a[1];
      m += C * p - S * u, v += C * u + S * p;
    }
    const $ = Math.hypot(m, v);
    if ($ <= l) continue;
    l = $;
    const b = Math.atan2(m, v), _ = Math.cos(b), h = Math.sin(b), g = (d ? -1 : 1) * i[0];
    c = {
      cos: _,
      sin: h,
      mirror: d,
      tx: a[0] - (_ * g - h * i[1]),
      ty: a[1] - (h * g + _ * i[1])
    };
  }
  return c;
}
function Hp(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Kp(e, t, n) {
  const r = So(e);
  if (!r) return e;
  const s = e.replace(/\r/g, "").split(Pi);
  if (s[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const i = s[Tr + o], a = t[o];
    if (i == null || !a) return e;
    s[Tr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Tr + r.atoms + a, l = s[c];
      if (l == null) break;
      const d = parseInt(l.substring(9, 12), 10);
      d !== 1 && d !== 6 || (s[c] = l.substring(0, 9) + String(d === 1 ? 6 : 1).padStart(3) + l.substring(12));
    }
  return s.join(Pi);
}
function Gp(e, t, n) {
  try {
    const r = (i) => Wr(i).coords.map((a) => [a[0], a[1]]), s = r(t), o = Up(s, r(e), n);
    return o ? Kp(
      t,
      s.map((i) => Hp(o, i)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[alchemy-viz] could not align a depiction to its partner -", ve(r)), t;
  }
}
function Wp(e, t, n, r, s) {
  const o = Ai(e, t, r), i = Ai(e, n, r);
  return !s || r === "conformer" ? { left: o, right: i } : { left: o, right: Gp(o, i, s) };
}
const Jp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Yp = {
  core: "0x888888",
  pairLine: "0xd9a300"
}, fc = () => to() === "dark" ? Jp : Yp, Or = 420, We = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Fr = { gap: 2.5, minLiftFraction: 0.6 }, Xp = 24, Ri = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, Zp = {
  mapped: null,
  element: Oe.modifiedColor,
  uniqueA: Oe.destroyedColor,
  uniqueB: Oe.createdColor
}, Qp = 132;
function Mi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let s = 0; s < 3; s++)
      r[s] < t[s] && (t[s] = r[s]), r[s] > n[s] && (n[s] = r[s]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function eh(e, t) {
  const n = Mi(e), r = Mi(t);
  let s = 0;
  n.span[1] < n.span[s] && (s = 1), n.span[2] < n.span[s] && (s = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[s] - r.min[s] + Fr.gap, a = Fr.minLiftFraction * o + Fr.gap;
  return { axis: s, lift: Math.max(i, a) };
}
function pc(e) {
  const t = Ff(Oe.customSpec);
  return [
    { mol: e.molA, uniques: e.uniquesA, side: "left", custom: t.left },
    { mol: e.molB, uniques: e.uniquesB, side: "right", custom: t.right }
  ];
}
function th(e, t) {
  for (const n of [t.molA, t.molB]) {
    const r = e.box(n.name), s = e.open(r, [n]);
    s.setStyle(
      {},
      { stick: { radius: We.stick, colorscheme: "Jmol" }, sphere: { scale: We.sphere, colorscheme: "Jmol" } }
    ), s.zoomTo(), s.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function nh(e, t) {
  const n = Oe, r = fc();
  for (const s of pc(t)) {
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
    for (const c of Fa(n, s.mol, s.uniques, s.side))
      for (const l of c.atoms) a(l, c.color);
    for (const c of s.custom)
      c < s.mol.symbols.length && a(c, n.customColor);
    i.zoomTo(), i.render(), e.settle(o), e.pose(o);
  }
  e.sync();
}
function rh(e, t) {
  const { molA: n, molB: r, nameA: s, nameB: o, pairs: i } = t, a = e.box(`${s} (left), both overlaid (middle), ${o} (right)`), c = dh(n.coords, r.coords), l = (g, f) => ({
    ...g,
    coords: g.coords.map(([C, S, u]) => [C + f, S, u])
  }), d = l(n, -c), m = l(r, c), v = e.open(a, [d, m, n, r]);
  v.setStyle({}, { stick: {} });
  const $ = Array.from(i);
  $.forEach(([g, f], C) => {
    const S = d.coords[g], u = m.coords[f];
    if (!S || !u) return;
    const p = uh(C, $.length);
    for (const [y, k, P] of [S, u])
      v.addSphere({
        center: { x: y, y: k, z: P },
        radius: Ri.sphereRadius,
        color: p,
        alpha: Ri.sphereAlpha
      });
  }), v.zoomTo();
  const { clientWidth: b, clientHeight: _ } = a.container, h = b - 2 * Xp;
  h > 0 && h < _ && v.zoom(h / _), v.render(), e.settle(a);
}
function oh(e, t) {
  const { molA: n, molB: r, nameA: s, nameB: o, pairs: i } = t, a = e.box(`${s} to ${o}  (${i.size} mapped pairs)`), { axis: c, lift: l } = eh(n.coords, r.coords), d = {
    ...r,
    coords: r.coords.map(($) => {
      const b = [$[0], $[1], $[2]];
      return b[c] += l, b;
    })
  }, m = e.open(a, [n, d]), v = {
    stick: { radius: We.stick, colorscheme: "Jmol" },
    sphere: { scale: We.pairSphere, colorscheme: "Jmol" }
  };
  m.setStyle({ model: 0 }, v), m.setStyle({ model: 1 }, v);
  for (const [$, b] of i) {
    const _ = n.coords[$], h = d.coords[b];
    !_ || !h || m.addCylinder({
      start: { x: _[0], y: _[1], z: _[2] },
      end: { x: h[0], y: h[1], z: h[2] },
      radius: We.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: fc().pairLine
    });
  }
  m.zoomTo(), c === 2 ? m.rotate(90, "x") : c === 0 && m.rotate(-90, "z"), m.render(), e.settle(a);
}
function sh(e, t) {
  const n = Oe, r = pc(t).map((s) => {
    const o = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), i = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Oa()};`
    );
    return i.appendChild($e("Loading 2D depiction...")), o.appendChild(i), e.named && o.appendChild(T("div", no, s.mol.name)), e.element.appendChild(o), { box: i, side: s };
  });
  vo().then((s) => {
    const o = Df(n, s), i = Wp(s, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = Fa(n, c.mol, c.uniques, c.side), d = Lf(n, Or, l, c.custom, o, c.mol.symbols.length), m = qf(s, c.side === "left" ? i.left : i.right, Or, d);
      if (a.replaceChildren(), !m) {
        a.appendChild($e("Failed to parse molecule", !0));
        continue;
      }
      Da(a, m, Or);
      const v = a.querySelector("svg");
      v && Gf(v, c.mol, n, l, c.custom, o);
    }
  }).catch((s) => {
    for (const { box: o } of r)
      o.replaceChildren($e(`RDKit failed to load: ${ve(s)}`, !0));
  });
}
function ih(e, t, n) {
  const { nameA: r, nameB: s, pairs: o, molA: i, molB: a, uniquesA: c, uniquesB: l } = t, d = T(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
  );
  e.element.appendChild(d), d.appendChild(
    T(
      "div",
      `font-size:${Q.title};font-weight:${ge.bold};color:${xe.title};`,
      n.name || `${r} to ${s}`
    )
  );
  const m = ch(o, i.symbols, a.symbols), v = T("div", Pe.row), $ = [];
  let b = null;
  const _ = (E, M, R, D) => {
    const I = sr(`${Pe.plain}${Pe.button}`, Pe.className);
    I.appendChild(Ve(E, String(M), D)), I.onclick = () => {
      b = b === R ? null : R, y();
    }, $.push({ node: I, kinds: R }), v.appendChild(I);
  }, h = (E, M) => {
    const R = T("span", Pe.plain);
    R.appendChild(Ve(E, M)), v.appendChild(R);
  };
  _("mapped atoms", o.size, ["mapped", "element"]), _("element changes", c.elements.length, ["element"], Oe.modifiedColor), _(`unique to ${r}`, c.atoms.length, ["uniqueA"], Oe.destroyedColor), _(`unique to ${s}`, l.atoms.length, ["uniqueB"], Oe.createdColor), h(`atoms in ${r}`, String(i.symbols.length)), h(`atoms in ${s}`, String(a.symbols.length)), h("score", n.score == null ? Qe : n.score.toFixed(3)), d.appendChild(v), d.appendChild(T("div", qr, "Correspondence"));
  const g = T("div", `font-size:${Q.small};line-height:1.6;color:${xe.faint};`);
  d.appendChild(g);
  const f = T(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Qp}px,1fr));gap:${Y.xs} ${Y.md};font-family:${Q.mono};font-size:${Q.small};color:${xe.primary};`
  );
  d.appendChild(f);
  const C = String(Math.max(i.symbols.length, a.symbols.length, 1) - 1).length, S = (E, M) => `${(E == null ? Qe : String(E)).padStart(C)} ${M.padEnd(2)}`, u = (E) => {
    if (E.kind === "uniqueA") return `${r} atom ${E.a} ${E.symbolA} maps to nothing`;
    if (E.kind === "uniqueB") return `${s} atom ${E.b} ${E.symbolB} maps to nothing`;
    const M = E.kind === "element" ? ", an element change" : "";
    return `${r} atom ${E.a} ${E.symbolA} maps to ${s} atom ${E.b} ${E.symbolB}${M}`;
  }, p = (E) => {
    const M = T(
      "div",
      `white-space:pre;padding:${Y.xs} ${Y.md};border-radius:${Ae.sm};background:${qt.card};border-left:3px solid ${Zp[E.kind] ?? "transparent"};`,
      `${S(E.a, E.symbolA)} -> ${S(E.b, E.symbolB)}`
    );
    return M.title = u(E), M.dataset.gufeRelation = E.kind, M;
  }, y = () => {
    const E = b, M = E ? m.filter((R) => E.includes(R.kind)) : m;
    f.replaceChildren(...M.map(p)), M.length || f.appendChild(
      T(
        "div",
        `font-size:${Q.small};line-height:1.6;color:${xe.faint};grid-column:1/-1;`,
        b ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), g.textContent = (o.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${s}, by atom index and element` + (b ? "; click the chip again for all of them" : "");
    for (const R of $) {
      const D = R.kinds === b;
      R.node.setAttribute("aria-pressed", String(D)), R.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  y();
  const k = Object.entries(n.annotations ?? {}).filter(([E]) => E !== "score");
  if (!k.length) return;
  d.appendChild(T("div", qr, "Annotations"));
  const P = T("div", `${Fc}color:${xe.faint};`);
  for (const [E, M] of k)
    P.appendChild(T("div", "", `${E}: ${String(M)}`));
  d.appendChild(P);
}
const Ni = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], zr = {
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
function ah(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function ch(e, t, n) {
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
function hc(e, t) {
  const n = Ce(t, e.componentA, "SmallMoleculeComponentViz"), r = Ce(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Ao(t, [e.componentA, e.componentB]) };
}
function lh(e, t, n) {
  const r = [], s = [];
  for (const [i, a] of n) {
    const c = e.coords[i], l = t.coords[a];
    c && l && (r.push(c), s.push(l));
  }
  const o = qp(r, s);
  return o?.determined ? { ...t, coords: t.coords.map((i) => Bp(i, o.R, o.t)) } : t;
}
function dh(e, t) {
  let n = 0;
  for (const s of [e, t]) {
    let o = 1 / 0;
    for (const i of s)
      i[0] < o && (o = i[0]), i[0] - o > n && (n = i[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > zr.minSpread ? r : zr.minSpread) * zr.spreadFactor;
}
function uh(e, t) {
  const n = Wu, s = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(s), i = Math.min(o + 1, n.length - 1), a = s - o;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const d = (v) => parseInt(v.slice(1 + l * 2, 3 + l * 2), 16), m = Math.round(d(n[o]) + (d(n[i]) - d(n[o])) * a);
    c += m.toString(16).padStart(2, "0");
  }
  return c;
}
function fh(e, t) {
  const n = Ce(t, e.componentA, "SmallMoleculeComponentViz"), r = Ce(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const s = _e(n), o = _e(r), i = ah(e);
  let a, c;
  try {
    a = Wr(n.sdf, s), c = Wr(r.sdf, o);
  } catch (d) {
    return { problem: `Could not read a molecule: ${ve(d)}`, isError: !0 };
  }
  c = lh(a, c, i);
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
class ph extends Fe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = fh(n, Et(n));
    if ("problem" in r)
      return t.appendChild($e(r.problem, r.isError)), {};
    const s = r.pair, o = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const i = Vp(o, so(t)), a = ut("atom-mapping.mode", "plain", Ni.map((b) => b.id));
    let c = a.get();
    const l = T("div", da), d = Ca(
      Ni,
      c,
      (b) => {
        c = b, $();
      },
      { remember: a, fit: { pane: o, bar: l } }
    );
    l.appendChild(d), o.appendChild(l);
    const m = io(), v = {
      plain: th,
      colored: nh,
      openfe: rh,
      lines: oh
    }, $ = () => {
      const b = m.start();
      if (i.clear(), c === "info") return ih(i, s, n);
      if (c === "2d") return sh(i, s);
      const _ = v[c];
      i.element.appendChild($e("Loading 3D viewer...")), cr().then(() => {
        b() && (i.element.replaceChildren(), _(i, s));
      }).catch((h) => {
        b() && i.element.replaceChildren($e(`3D render failed: ${ve(h)}`, !0));
      });
    };
    return $(), {
      onResize: () => i.resize(),
      cleanup: () => {
        m.stop(), d.cleanup(), i.cleanup();
      }
    };
  }
}
ze("gufe-atom-mapping", ph);
const hh = "ligand-network", mh = "Click a ligand or an edge to see it.";
function gh(e) {
  const { index: t, from: n, to: r, ...s } = e;
  return s;
}
function yh(e) {
  return Qa(e);
}
const Oi = (e) => Math.round(e * 100) / 100;
function $h(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const s = r(n.selected) ? Math.trunc(n.selected) : -1, o = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: s, selectedKind: o };
}
function bh(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Ot = { initial: 0.58, min: 0.25, max: 0.8 }, Te = 38, Fi = 1.5, jr = {
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
}, vh = "6 4", zi = 200, wh = 2, _h = Math.SQRT2 * (Te - wh), Sh = 14, Ch = 18, Ee = {
  fontSize: 11,
  below: Te + 12,
  minFontSize: 7,
  insideWidth: (Te - 6) * 2
}, It = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, ji = 1.5, kh = 6.5, Eh = 0.9, xh = 14, Ir = { size: 8, clearance: 8 }, Ph = { fontSize: 10 }, Ah = 0.4, Rh = () => Kr(ue.netMatchAtom), Ft = { padding: 4, opacity: 0.95 }, mc = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Mh = (e) => ic(mc, e), Nh = (e) => Op(mc, e), Th = 1.8, Ii = 2 * Te + 68, Re = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Ii,
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
  collisionPadding: Ii / 2 - Te,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Oh(e) {
  const t = T("div", Oc);
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
function Fh(e) {
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
      refX: Te + Ir.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Ir.size,
      markerHeight: Ir.size,
      orient: "auto"
    });
    return o.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), s;
  };
}
function zh(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function jh(e) {
  const [t, n] = ue.netEdgeRamp.map(zh), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, i) => Math.round(o + (n[i] - o) * r)).join(",")})`;
}
const Me = _e;
function Hn(e, t) {
  return t ? Me(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function Ih(e, t, n, r, s) {
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
function Dh(e) {
  const t = new cc(), n = ur("cpk"), r = Rh(), s = (b) => (e.matched().get(b) ?? []).join(","), o = (b, _) => {
    if (!t.wants(_)) return;
    const h = e.nodes[_], g = e.matched().get(_), f = h.sdf && Co(
      b,
      h.sdf,
      zi,
      Oe.layout,
      g && { atoms: g, color: r, radius: Ah },
      n
    );
    if (!f) {
      t.refused(_);
      return;
    }
    if (!uc(e.depictionGroups[_], f, zi, _h)) {
      t.refused(_);
      return;
    }
    t.drew(_, s(_));
  }, i = () => t.forget(s, (b) => e.depictionGroups[b].replaceChildren()), a = [], c = (b, _) => {
    if (a[b]) return a[b];
    _.setAttribute("font-size", String(Ee.fontSize));
    let h = 0;
    try {
      h = _.getBBox().width;
    } catch {
      return Ee.fontSize;
    }
    if (!h) return Ee.fontSize;
    const g = Ee.fontSize * Ee.insideWidth / h;
    return a[b] = Math.max(Ee.minFontSize, Math.min(Ee.fontSize, g)), a[b];
  }, l = [], d = (b) => {
    const _ = e.captionPlates[b];
    if (l[b] === Ee.below) {
      _.setAttribute("display", "inline");
      return;
    }
    let h = null;
    try {
      h = e.captions[b].getBBox();
    } catch {
      h = null;
    }
    if (!h?.width) {
      _.setAttribute("display", "none");
      return;
    }
    _.setAttribute("x", String(h.x - It.captionPadX)), _.setAttribute("y", String(h.y - It.captionPadY)), _.setAttribute("width", String(h.width + It.captionPadX * 2)), _.setAttribute("height", String(h.height + It.captionPadY * 2)), _.setAttribute("display", "inline"), l[b] = Ee.below;
  }, m = (b, _) => {
    const h = _.structure && !t.has(b) ? Nh(_) : _;
    e.depictionGroups[b].setAttribute("display", h.structure ? "inline" : "none");
    const g = e.plates[b];
    g.setAttribute("display", h.structure ? "inline" : "none");
    const f = e.matched().has(b);
    g.setAttribute("stroke", f ? ue.netMatchStroke : ue.netNodeStroke);
    const C = e.circles[b];
    C.setAttribute("fill", h.disc ? f ? ue.netMatchFill : ue.netNodeFill : "none"), C.setAttribute("stroke", h.disc ? f ? ue.netMatchStroke : ue.netNodeStroke : "none"), e.initials[b].setAttribute("display", h.initials ? "inline" : "none");
    const S = e.charges[b];
    if (S) {
      const k = !h.structure, P = Te * jr.at;
      S.setAttribute("x", String(P)), S.setAttribute("y", String(-P)), S.setAttribute("font-size", String(k ? jr.bigFontSize : jr.fontSize)), S.setAttribute("font-weight", k ? ge.bold : ge.normal);
    }
    const u = e.captions[b], p = h.name === "below";
    if (u.setAttribute("fill", f ? ue.netMatchStroke : p ? Qu() : ue.netNodeCaption), u.setAttribute("display", h.name === "none" ? "none" : "inline"), p || e.captionPlates[b].setAttribute("display", "none"), h.name === "none") return;
    const y = h.name === "inside";
    u.setAttribute("y", y ? "0" : String(Ee.below)), u.setAttribute("dominant-baseline", y ? "middle" : "auto"), u.setAttribute("font-size", String(y ? c(b, u) : Ee.fontSize)), p && d(b);
  };
  let v = null;
  return { apply: (b, _, h) => {
    const g = Mh(b);
    v = g, e.stage.setAttribute("data-detail", g.id), e.edgeLabels.setAttribute("display", g.edgeScores ? "inline" : "none");
    for (let C = 0; C < e.nodes.length; C++) m(C, g);
    if (!g.structure) return;
    const f = lc(e.nodes, { scale: b, tx: _, ty: h }, e.viewport(), (C) => t.wants(C));
    f.length && e.rdkit().then((C) => {
      if (!(!C || v !== g))
        for (const S of f)
          o(C, S), m(S, g);
    }).catch(() => {
    });
  }, forget: i };
}
function Lh(e) {
  const t = e.score.setting;
  let n = () => {
  };
  return sc({
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
      const s = T("div", `display:flex;align-items:center;gap:${Y.lg};font-size:${Q.small};color:${j.textMuted};`), o = T("span", `min-width:28px;color:${j.textPrimary};`, "0.00"), i = T("input", "flex:1;");
      i.type = "range", i.min = "0", i.max = "1", i.step = "0.01", i.setAttribute("aria-label", "Hide mappings scoring below this");
      const a = (c) => {
        i.value = String(c), o.textContent = c.toFixed(2), e.filter.minScore = c, t.set(c);
      };
      return a(t.get()), i.oninput = () => {
        a(Number(i.value)), r(), e.refresh();
      }, n = () => a(0), e.score.onReset(() => {
        n(), r(), e.refresh();
      }), s.appendChild(T("span", "", "score >=")), s.appendChild(i), s.appendChild(o), [s];
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
      before: qh(r.score),
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
function qh(e) {
  return T(
    "span",
    `flex-shrink:0;min-width:26px;font-variant-numeric:tabular-nums;color:${j.textMuted2};`,
    e == null ? "--" : e.toFixed(2)
  );
}
class Bh extends Fe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), { nodes: s, edges: o, unresolved: i, dangling: a } = nc({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (w) => [w.componentA, w.componentB]
    }), c = Zn(n.name || "Ligand network");
    c.statsEl.appendChild(Ve("ligands", String(s.length))), c.statsEl.appendChild(Ve("mappings", String(o.length))), t.appendChild(c);
    const l = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const d = /* @__PURE__ */ new Set(), m = { minScore: 0 }, v = { text: "" }, $ = Lt("ligand-network.minScore", 0, 0, 1);
    let b = () => {
    };
    const _ = () => xa(), h = rc(
      _,
      s.map((w) => w.sdf ?? "")
    );
    let g = /* @__PURE__ */ new Map();
    const f = async (w) => {
      const A = await h.run(w);
      return A.status === "superseded" || (g = A.status === "ok" ? A.matched : /* @__PURE__ */ new Map(), H()), A;
    }, C = xo(
      c,
      () => Lh({
        nodes: s,
        edges: o,
        selected: d,
        filter: m,
        query: v,
        score: {
          setting: $,
          onReset: (w) => {
            b = w;
          }
        },
        refresh: () => O(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (w) => {
          M?.focusOn(w), K({ kind: "ligand", index: w });
        },
        // The same for a mapping, which the pane can draw as well as a
        // ligand: the list is how a reader reaches one of nine hundred edges.
        focusEdge: (w) => {
          M?.focusOnEdge(w), K({ kind: "edge", index: w });
        },
        match: (w) => f(w)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => z(),
        remember: ct("ligand-network.menuOpen", !1),
        extras: Po
      }
    );
    l.appendChild(C.panel);
    let S = () => {
    };
    const u = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), p = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`);
    l.appendChild(u), l.appendChild(
      Ua(l, u, p, {
        min: Ot.min,
        max: Ot.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Lt("ligand-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => S(),
        onOrient: (w) => ko(C.panel, w)
      })
    ), l.appendChild(p);
    const y = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${j.netCanvasBg};`);
    u.appendChild(y), this.#e(y, o.some((w) => ki(w.from, w.to) !== 0)), Ma(
      y,
      () => {
        $.set(0), m.minScore = 0, b(), M?.reset();
      },
      "Reset pan, zoom and the score filter"
    );
    const k = this.#t(p, r);
    if (!s.length)
      return y.appendChild(
        $e(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    i && lt(
      y,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && lt(y, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const P = _(), E = Oh(y);
    let M = null;
    const R = $h(pa(hh), s.length);
    let D = R && { scale: R.scale, tx: R.tx, ty: R.ty }, I = R ? R.nodes : null, L = o.length ? { kind: "edge", index: 0 } : null;
    if (R && R.selected >= 0) {
      const w = R.selectedKind ?? "edge";
      R.selected < (w === "ligand" ? s.length : o.length) && (L = { kind: w, index: R.selected });
    }
    const G = () => M?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let oe = !1;
    const X = io(), re = () => {
      if (!L) {
        k.message(o.length ? mh : "Click a ligand to see it.");
        return;
      }
      L.kind === "edge" ? k.showMapping(o[L.index]) : k.showLigand(s[L.index]);
    }, K = (w) => {
      L = w, re(), M?.setSelected(L);
    }, O = () => {
      const w = Ih(s, o, d, v.text, m.minScore);
      M?.setEmphasis(w?.nodes ?? null, w?.edges ?? null);
    }, H = () => M?.setMatches(g), z = () => {
      const w = M?.transform() ?? null, A = X.start();
      M?.cleanup(), M = null, y.querySelectorAll("svg").forEach((J) => J.remove());
      const q = y.clientWidth || 800, ee = y.clientHeight || 600;
      Vh(s, q, ee), I && bh(s, I);
      const te = () => {
        if (!A()) return;
        const J = this.#n(y, s, o, q, ee, K, P, E);
        M = J, J.setSelected(L), O(), H();
        const ne = D ?? w;
        ne ? (J.setTransform(ne.scale, ne.tx, ne.ty), D = null) : J.fit();
      };
      if (oe || I) {
        te();
        return;
      }
      Uh(s, o, q, ee).then((J) => {
        if (A()) {
          if (J) {
            te();
            return;
          }
          oe = !0, lt(y, "d3 could not be loaded - showing the ligands in a ring instead"), z();
        }
      }, te);
    };
    return S = () => z(), z(), re(), {
      onResize: () => z(),
      cleanup: () => {
        X.stop(), h.cancel(), E.remove(), M?.cleanup(), M = null, k.cleanup();
      },
      viewState: () => ({
        nodes: s.map((w) => [Oi(w.x), Oi(w.y)]),
        ...G(),
        selected: L ? L.index : -1,
        selectedKind: L ? L.kind : "edge"
      })
    };
  }
  /**
   * The key to the edge colours, floating over the bottom right of the canvas.
   *
   * A row under the graph costs every network a strip of height for something
   * most readers consult once; over the picture it costs nothing, and bottom
   * right is the corner the reset control does not already sit in. No card
   * behind it - a panel over the canvas reads as another thing to look at, and
   * the key is not one. It takes no pointer events, so a drag that starts on it
   * still reaches the network.
   */
  #e(t, n) {
    const r = T(
      "div",
      `position:absolute;right:${Y.xl};bottom:${Y.xl};z-index:10;pointer-events:none;display:flex;align-items:center;gap:${Y.xxl};flex-wrap:wrap;justify-content:flex-end;max-width:calc(100% - ${Y.xl} - ${Y.xl});font-size:${Q.tiny};color:${j.textMuted};`
    ), s = T("div", `display:flex;align-items:center;gap:${Y.md};`);
    if (s.appendChild(T("span", "", "score")), s.appendChild(
      T(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${ue.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(T("span", "", "0 -> 1")), r.appendChild(s), n) {
      const o = T("div", `display:flex;align-items:center;gap:${Y.md};`);
      o.appendChild(
        T(
          "span",
          `width:24px;height:0;border-top:2px dashed ${j.netEdgeLine};display:inline-block;`
        )
      ), o.appendChild(T("span", "", "net charge change")), r.appendChild(o);
    }
    t.appendChild(r);
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
    const r = dc(t);
    return {
      ...r,
      showMapping: (s) => r.show(hc(gh(s), n)),
      showLigand: (s) => r.show(yh(s))
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
    const m = le("defs"), v = Fh(m);
    l.appendChild(m);
    const $ = [], b = le("g"), _ = le("g"), h = le("g", { "pointer-events": "none" }), g = le("g");
    d.append(b, _, h, g);
    for (const L of r) {
      const G = jh(L.score), oe = ji + (L.score ?? 0.5) * (kh - ji), X = le("line", {
        stroke: ue.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": oe + Ft.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), re = ki(L.from, L.to), K = le("line", {
        stroke: G,
        "stroke-width": oe,
        "stroke-opacity": Eh,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${v(G)})`,
        "pointer-events": "none",
        ...re ? { "stroke-dasharray": vh } : {}
      }), O = le("line", { stroke: "transparent", "stroke-width": xh, style: "cursor:pointer;" });
      O.addEventListener("click", (w) => {
        w.stopPropagation(), i({ kind: "edge", index: L.index });
      }), O.addEventListener("mousemove", (w) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Ie(Me(L.from))} -&gt; ${Ie(Me(L.to))}</div>` + (L.score == null ? `<div style="color:${j.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${L.score.toFixed(3)}</b></div>`) + (re ? `<div style="margin-top:4px;">net charge <b>${Ie(at(re))}</b> <span style="color:${j.textMuted2};">(${Ie(at(L.from.total_charge ?? 0))} to ${Ie(at(L.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Q.tiny};color:${j.textMuted2};">Click to see the mapping</div>`,
          w.offsetX,
          w.offsetY
        );
      }), O.addEventListener("mouseleave", () => c.hide()), $.push(X), b.append(X, K), _.appendChild(O);
      const H = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ph.fontSize,
        "font-weight": 600,
        fill: ue.netEdgeLabel
      });
      H.textContent = L.score == null ? "" : L.score.toFixed(2);
      const z = le("g", { class: "gufe-edge-label" });
      z.appendChild(H), h.appendChild(z);
    }
    const f = [], C = [], S = [], u = [], p = [], y = [], k = [], P = [], E = n.map((L) => {
      const G = le("g", { class: "gufe-node", style: "cursor:grab;" });
      G.addEventListener("mousemove", (w) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Ie(Me(L))}</div>` + (L.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ie(L.smiles)}</div>` : "") + (L.total_charge ? `<div style="margin-top:3px;">formal charge <b>${Ie(at(L.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${j.textMuted2};overflow-wrap:anywhere;">${Ie(L["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${j.textMuted2};">Click to see the ligand</div>`,
          w.offsetX,
          w.offsetY
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
        "stroke-width": Fi,
        "pointer-events": "all"
      });
      G.appendChild(X), C.push(X);
      const re = le("circle", {
        class: "gufe-node-plate",
        r: Te,
        fill: Hr(),
        stroke: ue.netNodeStroke,
        "stroke-width": Fi,
        display: "none",
        "pointer-events": "none"
      });
      G.appendChild(re), S.push(re);
      const K = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      G.appendChild(K), f.push(K);
      const O = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ch,
        "font-weight": 700,
        fill: ue.netInitials,
        "pointer-events": "none"
      });
      if (O.textContent = Me(L).slice(0, 2).toUpperCase(), G.appendChild(O), y.push(O), L.total_charge) {
        const w = le("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: ue.badgeFg,
          "pointer-events": "none"
        });
        w.textContent = at(L.total_charge), G.appendChild(w), P.push(w);
      } else
        P.push(null);
      const H = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Ee.below,
        "font-size": Ee.fontSize,
        "font-weight": 600,
        fill: ue.netNodeCaption,
        "pointer-events": "none"
      });
      H.textContent = Un(Me(L), Sh), H.setAttribute("display", "none"), k.push(H);
      const z = le("rect", {
        class: "gufe-node-caption-plate",
        rx: It.captionRadius,
        fill: Hr(),
        display: "none",
        "pointer-events": "none"
      });
      return u.push(z), G.appendChild(z), G.appendChild(H), g.appendChild(G), G;
    }), M = () => {
      r.forEach((L, G) => {
        for (const X of [$[G], b.children[G * 2 + 1], _.children[G]]) {
          const re = X;
          re.setAttribute("x1", String(L.from.x)), re.setAttribute("y1", String(L.from.y)), re.setAttribute("x2", String(L.to.x)), re.setAttribute("y2", String(L.to.y));
        }
        h.children[G].setAttribute(
          "transform",
          `translate(${(L.from.x + L.to.x) / 2},${(L.from.y + L.to.y) / 2 - 8})`
        );
      }), n.forEach((L, G) => E[G].setAttribute("transform", `translate(${L.x},${L.y})`));
    };
    M();
    let R = /* @__PURE__ */ new Map();
    const D = Dh({
      nodes: n,
      circles: C,
      plates: S,
      captionPlates: u,
      matched: () => R,
      captions: k,
      initials: y,
      charges: P,
      depictionGroups: f,
      edgeLabels: h,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: s, height: o })
    }), I = this.#r(
      l,
      d,
      n,
      E,
      M,
      D.apply,
      (L) => i({ kind: "ligand", index: L })
    );
    return {
      setSelected(L) {
        const G = L?.kind === "edge" ? L.index : -1, oe = L?.kind === "ligand" ? L.index : -1;
        $.forEach((X, re) => X.setAttribute("opacity", re === G ? String(Ft.opacity) : "0")), p.forEach((X, re) => X.setAttribute("opacity", re === oe ? String(Ft.opacity) : "0"));
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
      setMatches(L) {
        R = L, D.forget();
        const { scale: G, tx: oe, ty: X } = I.transform();
        D.apply(G, oe, X);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(L, G) {
        E.forEach((oe, X) => {
          const re = !L || L.has(n[X]["gufe-key"]);
          oe.setAttribute("opacity", re ? "1" : String(Dt.node));
        }), r.forEach((oe, X) => {
          const re = !G || G.has(X), K = re ? "0.9" : String(Dt.edge);
          b.children[X * 2 + 1].setAttribute("stroke-opacity", K), h.children[X].setAttribute("opacity", re ? "1" : String(Dt.edge));
        });
      },
      focusOn(L) {
        const G = n[L];
        G && I.centreOn(G.x, G.y);
      },
      focusOnEdge(L) {
        const G = r[L];
        G && I.centreOn((G.from.x + G.to.x) / 2, (G.from.y + G.to.y) / 2);
      },
      fit: I.fit,
      reset: I.reset,
      transform: I.transform,
      setTransform: I.setTransform,
      cleanup: I.cleanup
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
    const c = Za(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Xa(r, Te),
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return ac(s, r, c, { moved: () => o(), clicked: a }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (l, d) => c.centreOn(l, d, Th)
    };
  }
}
function Vh(e, t, n) {
  const r = t / 2, s = n / 2, o = Math.min(t, n) * 0.34;
  e.forEach((i, a) => {
    const c = 2 * Math.PI * a / Math.max(1, e.length) - Math.PI / 2;
    i.x = r + o * Math.cos(c), i.y = s + o * Math.sin(c), i.fx = void 0, i.fy = void 0;
  });
}
function Uh(e, t, n, r) {
  return ec({
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
ze("gufe-ligand-network", Bh);
function Ro(e, t) {
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
const Xn = (e, t) => Ro(e, t).join(" + "), Di = ["Protein", "ProteinMembrane", "SolvatedPDB"];
function Hh(e) {
  const t = e.split(" + ").filter(Boolean);
  return t.filter((r) => r !== "SmallMolecule" && r !== "Solvent" && !Di.includes(r)).length ? e : t.some((r) => Di.includes(r)) ? "complex" : t.some((r) => r === "Solvent") ? "solvent" : "vacuum";
}
function gc(e) {
  const t = e.map(Hh), n = /* @__PURE__ */ new Map();
  for (const r of t) n.set(r, (n.get(r) ?? 0) + 1);
  return t.map((r, s) => n.get(r) > 1 ? e[s] : r);
}
function Kh(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of [e.stateA, e.stateB]) {
    const s = r === void 0 ? null : Ce(t, r, "ChemicalSystemViz");
    if (s)
      for (const o of Ro(s, t)) n.add(o);
  }
  return [...n].sort().join(" + ");
}
function Gh(e, t) {
  const n = e.map((o) => Kh(o, t)), r = [...new Set(n)].sort(
    (o, i) => o.split(" + ").length - i.split(" + ").length || o.localeCompare(i)
  ), s = new Map(r.map((o, i) => [o, i]));
  return { signatures: r, names: gc(r), ofEdge: n.map((o) => s.get(o)) };
}
function yc(e, t) {
  const n = Object.values(e.components ?? {}).filter(
    (r) => Ce(t, r, "SmallMoleculeComponentViz")
  );
  return [...new Set(n)].sort();
}
function $c(e, t) {
  const n = gc(e), r = /* @__PURE__ */ new Map();
  for (const s of n) r.set(s, (r.get(s) ?? 0) + 1);
  return n.map((s, o) => r.get(s) > 1 ? t[o] : s);
}
function Wh(e, t) {
  return $c(
    e.map((n) => Xn(n, t)),
    e.map((n) => _e(n))
  );
}
function bc(e) {
  let t = e[0] ?? "";
  for (const n of e.slice(1)) {
    let r = 0;
    for (; r < t.length && r < n.length && t[r] === n[r]; ) r++;
    t = t.slice(0, r);
  }
  return t = t.replace(/[\s_\-.:,;([{]+$/, ""), t.length >= 3 ? t : "";
}
function Jh(e, t) {
  if (e.length === 1) return e[0].name;
  const n = yc(e[0], t);
  if (n.length === 1) {
    const r = Ne(t, n[0]);
    if (r) return _e(r);
  }
  return bc(e.map((r) => _e(r))) || e[0].name;
}
function Yh(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = [];
  for (const o of e) {
    const i = yc(o, t), a = i.length ? i.join("+") : o["gufe-key"], c = r.get(a);
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
      name: Jh(a, t),
      systems: a,
      legs: Wh(a, t)
    };
  });
}
function Xh(e) {
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
const Zh = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function vc(e, t) {
  const n = [], r = [];
  for (const s of Object.values(e.components ?? {})) {
    const o = Ne(t, s);
    o && (Zh.includes(o.type) ? n.push(o) : o.type === "SmallMoleculeComponentViz" && r.push(o));
  }
  return { structures: n, ligands: r };
}
function Qh(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Li = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], em = 0.4;
class tm extends Fe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = vc(n, Et(n)), s = r.structures.map(($, b) => b), o = r.ligands.map(($, b) => r.structures.length + b), i = ut(
      "complex.focus",
      "site",
      Li.map(($) => $.id)
    );
    let a = i.get(), c = null;
    const l = Wa({
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
          Li,
          a,
          ($) => {
            a = $, m();
          },
          i
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => m()
    });
    function d() {
      const $ = l.viewer();
      $ && (Yr($, l.opts, c, l.showStatus, { model: s }, l.stillWanted), ep($, { model: o }), $.render());
    }
    function m() {
      const $ = l.viewer();
      $ && (a === "site" && o.length ? ($.zoomTo({ model: o }), $.zoom(em)) : $.zoomTo(), $.render(), v());
    }
    function v() {
      const $ = l.viewer();
      $ && (l.interaction()?.cleanup(), l.setInteraction(lr(l.pane.container, $)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(qi(r, () => c));
    try {
      c = qa(r.structures[0].pdb), l.setStats(qi(r, () => c));
    } catch ($) {
      l.showStatus(`PDB parse error: ${ve($)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), cr().then(() => {
      const $ = nt.createViewer(l.pane.container, { backgroundColor: qt.viewer() });
      l.setViewer($);
      for (const b of r.structures) $.addModel(b.pdb, "pdb");
      for (const b of r.ligands) $.addModel(Ia(b.sdf), "sdf");
      d(), l.restoreCamera() ? v() : m(), $.spin(l.opts.spin ? "y" : !1), $.render();
    }).catch(($) => {
      l.showStatus(`Failed to render structure: ${ve($)}`, "error");
    }), l.handle;
  }
}
function qi(e, t) {
  const n = e.ligands.reduce((o, i) => {
    const a = So(i.sdf);
    return a ? o + a.atoms : o;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, s = t();
  return s ? [r, ...Ba(s)] : [r];
}
ze("gufe-complex", tm);
function nm(e, t) {
  return {
    ...e,
    registry: Ao(t, Object.values(e.components ?? {}))
  };
}
const rm = "chemical-system.component", Bi = 200, Bn = { min: 140, max: 420 }, om = "45%", sm = "35%";
function im(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function am(e) {
  return e.type === "UnknownComponentViz" ? Qn(e.gufe_type) : null;
}
function Vi(e) {
  return T(
    "div",
    `padding:10px 10px 16px;font-weight:${ge.bold};font-size:${Q.title};color:${j.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class cm extends Fe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Et(n), s = [], o = [];
    for (const [E, M] of Object.entries(n.components ?? {})) {
      const R = Ne(r, M);
      R ? s.push([E, R]) : o.push(E);
    }
    const i = n.name || "Chemical system";
    if (!s.length)
      return t.appendChild(Vi(i)), t.appendChild(
        $e(
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
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.panelBg};`
    );
    a.appendChild(c), c.appendChild(Vi(i));
    const l = T(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(l);
    const d = Ha(c, {
      initial: Bi,
      min: Bn.min,
      max: Bn.max,
      maxShare: om,
      remember: Lt("chemical-system.stripWidth", Bi, Bn.min, Bn.max),
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
    const $ = document.createElement("alchemy-view");
    $.style.cssText = "flex:1;min-width:0;min-height:0;", $.setAttribute(Br, ""), v.appendChild($);
    const b = vc(n, r), _ = Qh(b), h = (E) => _ && b.structures.some(
      (M) => M === E
    ), g = s.filter(([, E]) => !h(E)).map(([E, M]) => ({
      key: E,
      title: E,
      subtitle: im(M),
      badge: am(M),
      element: $,
      point: () => {
        $.payload = M;
      }
    }));
    if (_) {
      const E = document.createElement("gufe-complex");
      E.style.cssText = "flex:1;min-width:0;min-height:0;", E.setAttribute(Br, ""), E.payload = n, g.unshift({
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
    const C = (E) => {
      f !== E && (v.replaceChildren(E), f = E);
    }, S = Ur(rm), u = [], p = (E) => {
      u.forEach((M, R) => M.setAttribute("aria-pressed", String(R === E))), g[E].point(), C(g[E].element);
    }, y = (E) => {
      S.set(g[E].key), p(E);
    };
    g.forEach((E, M) => {
      const R = sr(`${ro.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      R.appendChild(
        T("span", `font-weight:700;color:${j.textPrimary};`, E.title)
      ), R.appendChild(
        T(
          "span",
          `font-size:${Q.small};color:${j.textMuted};`,
          E.subtitle
        )
      ), E.badge && R.appendChild(E.badge), R.onclick = () => y(M), u.push(R), l.appendChild(R);
    });
    const k = g.findIndex((E) => E.key === S.get());
    p(k < 0 ? 0 : k);
    const P = eo(a, (E) => {
      a.style.flexDirection = E ? "column" : "row", d.orient(E), c.style.maxHeight = E ? sm : "none", c.style.borderBottom = E ? `1px solid ${j.splitBorder}` : "none", l.style.flexDirection = E ? "row" : "column", l.style.flexWrap = E ? "wrap" : "nowrap", f?.resize?.();
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
ze("gufe-chemical-system", cm);
const Ui = 210, lm = "42%", Vn = { min: 150, max: 460 };
function dm(e, t) {
  const n = Ce(t, e.stateA, "ChemicalSystemViz"), r = Ce(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const s = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) s.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) s.push(o.componentA, o.componentB);
  return { ...e, registry: Ao(t, s) };
}
const Mo = {
  unchanged: j.diffUnchanged,
  changed: j.diffChanged,
  added: j.diffAdded,
  removed: j.diffRemoved
};
function Hi(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function um(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function fm(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Dr(e, t, n) {
  const r = T(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${Y.md};padding:5px ${Y.lg};border-radius:${Ae.md};background:${j.cardBg};border:1px solid ${j.cardBorder};`
  );
  n && r.appendChild(
    T(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;color:${j.textMuted2};`,
      n
    )
  );
  const s = fm(e);
  if (!s)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Q.body};color:${j.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? j.cardBorder : Mo[t];
  const o = T(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${j.textPrimary};overflow-wrap:anywhere;`,
    s.name
  );
  return o.title = s.name, r.appendChild(o), s.type && r.appendChild(Qn(s.type)), r;
}
function pm(e, t, n, r) {
  const s = T("div", `display:flex;flex-direction:column;gap:${Y.sm};min-width:0;`), o = T("div", `display:flex;align-items:center;gap:${Y.md};min-width:0;`);
  o.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Mo[t]};`)
  );
  const i = T(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${ge.bold};color:${j.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return i.title = t, o.appendChild(i), s.appendChild(o), t === "unchanged" ? (s.appendChild(Dr(n, t, null)), s) : (s.appendChild(Dr(n, t, "A")), s.appendChild(Dr(r, t, "B")), s);
}
function hm(e, t) {
  const n = T(
    "div",
    `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};color:${j.textMuted};`
  );
  return n.appendChild(kt(e, e[0].id, (r) => t(Number(r)))), n;
}
const mm = (e) => e.side ? `${e.label} (${e.side})` : e.label;
function gm(e, t) {
  const n = Ne(t, e.componentA), r = Ne(t, e.componentB);
  return `${n ? _e(n) : "A"} to ${r ? _e(r) : "B"}`;
}
function Ki(e) {
  return T(
    "div",
    `font-weight:${ge.bold};font-size:${Q.heading};color:${j.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Gi(e, t) {
  const n = T("div", `display:flex;align-items:baseline;gap:${Y.md};min-width:0;font-size:${Q.small};`);
  return n.appendChild(T("span", `flex:0 0 auto;color:${j.textMuted};`, e)), n.appendChild(
    T("span", `min-width:0;font-weight:${ge.bold};color:${j.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class ym extends Fe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Et(n), s = Ce(r, n.stateA, "ChemicalSystemViz"), o = Ce(r, n.stateB, "ChemicalSystemViz"), i = Ce(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!s || !o) {
      const p = T("div", "padding:12px 14px;flex-shrink:0;");
      return p.appendChild(Ki(c)), t.appendChild(p), t.appendChild(
        $e("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = um(s, o), d = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(d);
    const m = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${j.panelBg};`
    );
    d.appendChild(m);
    let v = null;
    const $ = Ha(m, {
      initial: Ui,
      min: Vn.min,
      max: Vn.max,
      maxShare: lm,
      remember: Lt("transformation.statesWidth", Ui, Vn.min, Vn.max),
      label: "Resize the state diff",
      // The mapping is two 3D viewers, and a viewer sizes its canvas once.
      onResize: () => v?.resize?.()
    });
    d.appendChild($.element);
    const b = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    d.appendChild(b);
    const _ = T("div", `display:flex;flex-direction:column;gap:${Y.md};min-width:0;`);
    _.appendChild(Ki(c)), _.appendChild(Gi("protocol", i ? tc(i) : Qe)), _.appendChild(Gi("mappings", String(a.length))), m.appendChild(_);
    const h = T("div", `display:flex;flex-direction:column;gap:${Y.xs};`);
    for (const [p, y] of [
      ["State A", s],
      ["State B", o]
    ])
      h.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.06em;text-transform:uppercase;color:${j.textMuted2};overflow-wrap:anywhere;`,
          `${p}${y.name ? ` - ${y.name}` : ""}`
        )
      );
    m.appendChild(h);
    const g = /* @__PURE__ */ new Set();
    for (const p of l) {
      const y = s.components?.[p], k = o.components?.[p], P = Hi(y, k);
      g.add(P), m.appendChild(
        pm(
          p,
          P,
          Ne(r, y),
          Ne(r, k)
        )
      );
    }
    if (g.size > 1) {
      const p = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${Y.lg} 12px;padding-top:${Y.sm};font-size:${Q.small};color:${j.textMuted};`
      );
      for (const y of ["unchanged", "changed", "added", "removed"])
        g.has(y) && p.appendChild(Ve(y, "", Mo[y]));
      m.appendChild(p);
    }
    const f = T("div", Ac, a.length ? "Atom mapping" : "What changes");
    b.appendChild(f);
    const C = eo(t, (p) => {
      d.style.flexDirection = p ? "column" : "row", $.orient(p), m.style.maxHeight = p ? "45%" : "none", m.style.borderBottom = p ? `1px solid ${j.splitBorder}` : "none", f.style.display = p ? "block" : "none";
    }), S = (p, y, k) => (k(0), y.length > 1 && b.appendChild(hm(y, k)), b.appendChild(p), v = p, {
      onResize: () => p.resize?.(),
      cleanup: () => {
        C(), p.remove();
      }
    });
    if (!a.length) {
      const p = [];
      for (const k of l) {
        const P = s.components?.[k], E = o.components?.[k];
        if (Hi(P, E) === "unchanged") continue;
        const M = P !== void 0 && E !== void 0, R = Ne(r, P), D = Ne(r, E);
        R && p.push({ label: k, side: M ? "A" : null, component: R }), D && p.push({ label: k, side: M ? "B" : null, component: D });
      }
      if (!p.length)
        return b.appendChild(
          $e(
            "This transformation carries no atom mapping, and its two states hold the same components - there is nothing here to draw."
          )
        ), { cleanup: C };
      const y = document.createElement("alchemy-view");
      return y.style.cssText = "flex:1;min-height:0;min-width:0;", S(
        y,
        p.map((k, P) => ({ id: String(P), label: mm(k) })),
        (k) => {
          y.payload = p[k].component;
        }
      );
    }
    const u = document.createElement("gufe-atom-mapping");
    return u.style.cssText = "flex:1;min-height:0;min-width:0;", S(
      u,
      a.map((p, y) => ({
        id: String(y),
        label: p.name || gm(p, r)
      })),
      // Cut loose with a registry of its own, so the embedded element resolves
      // its endpoints exactly as it would if the mapping were the whole payload.
      (p) => {
        u.payload = hc(a[p], r);
      }
    );
  }
}
ze("gufe-transformation", ym);
const $m = () => ({ fill: ue.netNodeFill, stroke: ue.netNodeStroke }), dt = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Wi = (e) => e ? dt.depictedHeight : dt.height, qe = { pad: 6, size: 122, radius: 6, inset: 4 }, Ji = 200, zt = {
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
}, bm = "6 4", Ge = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, vm = 7, wm = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], _m = (e) => ic(wm, e), St = {
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
}, Sm = (e) => St.rail / 2 / Math.max(e, 1e-3), Yi = (e, t) => {
  const n = t ? St.selectedWidth : St.width;
  return Math.max(St.min, Math.min(n, n * e));
}, Lr = { width: 3, selectedWidth: 4.5, min: 1.25 }, Xi = (e, t) => {
  const n = t ? Lr.selectedWidth : Lr.width;
  return Math.max(Lr.min, Math.min(n, n * e));
}, it = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -3600,
  /** Repulsion is local. Past this, boxes are already out of each other's way. */
  chargeDistanceMax: 1200,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, jt = { initial: 0.56, min: 0.25, max: 0.78 }, Zi = { x: dt.width / 2, y: dt.depictedHeight / 2 }, Qi = 1.4;
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
function km(e, t) {
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
function Em(e, t) {
  return [tt(e), ...e.systems.map((r) => km(r, t))].join(" ").toLowerCase();
}
function xm(e, t) {
  const n = [], r = [], s = /* @__PURE__ */ new Map(), o = e.map((i) => {
    const a = /* @__PURE__ */ new Set();
    for (const c of i.systems)
      for (const l of Object.values(c.components ?? {})) {
        const d = Ce(t, l, "SmallMoleculeComponentViz");
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
function Am(e, t, n, r) {
  if (e.systems.length > 1) {
    const s = e.legs.join(", ");
    return { composition: s, besides: s };
  }
  return { composition: t.join(" + "), besides: Pm(t, n, r) };
}
function Rm(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = [];
  return e.forEach((o, i) => {
    const a = t.get(o.from["gufe-key"]), c = t.get(o.to["gufe-key"]), l = [a["gufe-key"], c["gufe-key"]].sort().join(" "), d = r.get(l);
    if (d) {
      d.at.push(i);
      return;
    }
    r.set(l, { from: a, to: c, at: [i] }), s.push(l);
  }), s.map((o, i) => {
    const { from: a, to: c, at: l } = r.get(o), d = [...l].sort((b, _) => n.ofEdge[b] - n.ofEdge[_] || b - _), m = d.map((b) => {
      const { index: _, from: h, to: g, ...f } = e[b];
      return f;
    }), v = m.map((b) => _e(b)), $ = $c(
      d.map((b) => n.signatures[n.ofEdge[b]]),
      v
    );
    return { index: i, from: a, to: c, legs: m, labels: $, name: bc(v) || v[0] };
  });
}
function Mm(e, t) {
  if (e.systems.length === 1) return `${tt(e)} - ${Xn(e.systems[0], t)}`;
  const n = e.systems.map(
    (r, s) => `${e.legs[s]}: ${_e(r)} - ${Xn(r, t)}`
  );
  return [tt(e), ...n].join(`
`);
}
function Nm(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e) {
    const i = Ce(t, o.protocol, "ProtocolViz");
    if (!i) continue;
    const a = n.get(i["gufe-key"]);
    if (a) {
      a.count++;
      continue;
    }
    n.set(i["gufe-key"], {
      protocol: i,
      label: tc(i),
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
    o.color = ue.netProtocolStroke[i % ue.netProtocolStroke.length];
  }), r;
}
function Tm(e) {
  const t = Ve("protocol", e.label);
  return t.title = `${e.label} - ${wc(e.count)}`, t;
}
function Om(e, t) {
  const n = T("div", `display:inline-flex;align-items:center;flex-wrap:wrap;gap:${Y.xs};`);
  n.className = "gufe-protocols", n.appendChild(T("span", "", "protocols"));
  let r = null;
  const s = e.map((i) => {
    const a = sr(`${Pe.plain}${Pe.button}gap:5px;`, Pe.className);
    return a.setAttribute("aria-pressed", "false"), a.appendChild(
      T("span", `width:8px;height:8px;border-radius:50%;background:${i.color};flex-shrink:0;`)
    ), a.appendChild(T("b", `color:${xe.primary};`, i.label)), a.title = `${i.label} - ${wc(i.count)}`, a;
  }), o = () => {
    e.forEach((i, a) => {
      const c = r === i;
      s[a].setAttribute("aria-pressed", c ? "true" : "false"), s[a].style.borderColor = c ? i.color : Pe.restBorder;
    }), t(r);
  };
  return e.forEach((i, a) => {
    s[a].onclick = () => {
      r = r === i ? null : i, o();
    }, n.appendChild(s[a]);
  }), n;
}
function Fm(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    for (const s of n.legs) {
      const o = t.get(s.protocol) ?? /* @__PURE__ */ new Set();
      o.add(r), t.set(s.protocol, o);
    }
  }), t;
}
function wc(e) {
  return `${e} transformation${e === 1 ? "" : "s"}`;
}
function zm(e) {
  const t = new Map(e.nodes.map((s, o) => [s["gufe-key"], o])), n = (s) => {
    const o = e.query.text.trim().toLowerCase();
    if (o && !e.haystacks[s].includes(o)) return !1;
    const i = e.matched();
    return !(i && !i.has(s));
  }, r = (s) => [s.from, s.to].map((o) => t.get(o["gufe-key"]) ?? -1).filter((o) => o >= 0);
  return sc({
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
  return ec({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: [...s.values()],
    tickMultiplier: it.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((a) => a["gufe-key"]).distance(it.linkDistance).strength(it.linkStrength)
      ],
      ["charge", o.forceManyBody().strength(it.chargeStrength).distanceMax(it.chargeDistanceMax)],
      ["center", o.forceCenter(n / 2, r / 2)],
      ["collision", o.forceCollide(it.collisionRadius).iterations(it.collisionIterations)]
    ]
  });
}
class Dm extends Fe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), {
      nodes: s,
      edges: o,
      unresolved: i,
      dangling: a
    } = nc({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (J) => [J.stateA, J.stateB]
    }), c = Gh(o, r), l = (J) => {
      const ne = c.signatures.indexOf(Xn(J, r));
      return ne < 0 ? c.signatures.length : ne;
    }, d = Yh(
      s.map((J) => Qa(J)),
      r,
      l
    ).map((J) => ({ ...J, x: 0, y: 0 })), m = /* @__PURE__ */ new Map();
    for (const J of d) for (const ne of J.systems) m.set(ne["gufe-key"], J);
    const v = Rm(o, m, c), $ = Nm(o, r), b = Fm(v);
    let _ = null;
    const h = () => {
      const J = _ ? b.get(_.protocol["gufe-key"]) : void 0;
      p?.setProtocol(J ?? null, _?.color ?? ue.netEdgeLine);
    }, g = Zn(n.name || "Alchemical network");
    d.length !== s.length && g.statsEl.appendChild(Ve("ligands", String(d.length))), g.statsEl.appendChild(Ve("systems", String(s.length))), g.statsEl.appendChild(Ve("transformations", String(o.length))), c.signatures.length > 1 && g.statsEl.appendChild(Ve("legs", c.names.join(", "))), $.length === 1 && g.statsEl.appendChild(Tm($[0])), $.length > 1 && g.statsEl.appendChild(
      Om($, (J) => {
        _ = J, h();
      })
    );
    const f = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    let C = () => {
    };
    const S = /* @__PURE__ */ new Set(), u = { text: "" };
    let p = null;
    const y = () => {
      const J = Cm(d, v, k, S, u.text, D);
      p?.setEmphasis(J?.nodes ?? null, J?.edges ?? null);
    }, k = d.map((J) => Em(J, r)), P = () => xa(), E = xm(d, r), M = rc(P, E.sources), R = d.map((J, ne) => {
      const N = E.perNode[ne].find((W) => E.sources[W]), x = N === void 0 ? null : E.sources[N], F = [...new Set(J.systems.flatMap((W) => Ro(W, r)))].sort(), B = Am(J, F, x !== null, E.perNode[ne].length);
      return {
        composition: B.composition,
        besides: B.besides,
        sdf: x,
        charge: N === void 0 ? 0 : E.charges[N],
        title: Mm(J, r)
      };
    });
    let D = null, I = () => {
    };
    const L = async (J) => {
      const ne = await M.run(J);
      return ne.status === "superseded" || (D = ne.status === "ok" ? new Set(d.flatMap((N, x) => E.perNode[x].some((F) => ne.matched.has(F)) ? [x] : [])) : null, I(), y()), ne;
    }, G = xo(
      g,
      () => zm({
        nodes: d,
        edges: v,
        haystacks: k,
        captions: R.map((J) => J.composition),
        selected: S,
        query: u,
        refresh: () => y(),
        matched: () => D,
        match: (J) => L(J),
        mounted: (J) => {
          I = J;
        },
        // Finding a ligand in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (J) => {
          p?.focusOn(J), ee("node", J);
        },
        // The same action for a line: reaching it is not the point, and a
        // transformation the reader cannot see on the canvas is exactly the
        // one they came to the list for.
        focusEdge: (J) => {
          p?.focusOnEdge(J), ee("edge", J);
        }
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => C(),
        remember: ct("alchemical-network.menuOpen", !1),
        extras: Po
      }
    ), oe = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), X = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`), re = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${j.netCanvasBg};`), K = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    K.appendChild(G.panel), K.appendChild(re), oe.appendChild(g), oe.appendChild(K), f.appendChild(oe), f.appendChild(
      Ua(f, oe, X, {
        min: jt.min,
        max: jt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Lt("alchemical-network.canvasShare", jt.initial, jt.min, jt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => C(),
        onOrient: (J) => {
          K.style.flexDirection = J ? "column" : "row", ko(G.panel, J);
        }
      })
    ), f.appendChild(X);
    const O = this.#t(X, r);
    if (!d.length)
      return re.appendChild(
        $e(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), O.message("Nothing to show."), { cleanup: () => O.cleanup() };
    i && lt(
      re,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && lt(
      re,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let H = !1, z = null;
    const w = io(), A = new Map(d.map((J, ne) => [J["gufe-key"], R[ne].charge])), q = v.some(
      (J) => (A.get(J.to["gufe-key"]) ?? 0) !== (A.get(J.from["gufe-key"]) ?? 0)
    );
    Ma(re, () => p?.reset(), "Reset pan and zoom"), q && oe.appendChild(this.#e());
    const ee = (J, ne) => {
      z = { kind: J, index: ne }, O.show(J === "node" ? d[ne] : v[ne], J), p?.setSelected(z);
    }, te = () => {
      const J = w.start(), ne = re.clientWidth || 800, N = re.clientHeight || 600;
      jm(d, ne, N);
      const x = () => {
        J() && (p?.cleanup(), re.querySelectorAll("svg").forEach((F) => F.remove()), p = this.#n(re, d, v, ne, N, R, P, ee), p.setSelected(z), y(), h());
      };
      if (H) {
        x();
        return;
      }
      Im(d, v, ne, N).then((F) => {
        J() && (F || (H = !0, lt(re, "d3 could not be loaded - showing the circular layout instead")), x());
      }, x);
    };
    return C = te, te(), ee("node", 0), {
      onResize: () => te(),
      cleanup: () => {
        w.stop(), p?.cleanup(), p = null, O.cleanup();
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
    const t = T("div", jo), n = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
    return n.appendChild(T("span", `width:24px;height:0;border-top:2px dashed ${j.netEdgeLine};flex-shrink:0;`)), n.appendChild(T("span", `font-size:${Q.small};color:${j.textMuted};`, "net charge change")), t.appendChild(n), t;
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
    const r = T("div", `${jo}border-top:none;border-bottom:1px solid ${j.toolbarBorder};display:none;`);
    t.appendChild(r);
    const s = dc(t);
    let o = "";
    const i = () => {
      r.style.display = "none", r.replaceChildren();
    };
    return {
      ...s,
      show(a, c) {
        if (c === "node") {
          i(), s.show(nm(Xh(a), n));
          return;
        }
        const l = a, d = (v) => {
          o = l.labels[v] ?? "";
          const $ = dm(l.legs[v], n);
          if (!$) {
            s.message("This transformation names two chemical systems, and its registry does not hold them.");
            return;
          }
          s.show($);
        }, m = Math.max(0, l.labels.indexOf(o));
        l.legs.length > 1 ? (r.replaceChildren(), r.appendChild(T("span", `font-size:${Q.small};color:${j.textMuted};flex-shrink:0;`, "leg")), r.appendChild(
          kt(
            l.labels.map((v, $) => ({
              id: String($),
              label: v,
              title: _e(l.legs[$])
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
    let $ = () => {
    };
    const b = Za(l, d, {
      bounds: () => Xa(n, Zi.x, Zi.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (x, F, B) => $(x, F, B)
    }), _ = (x, F) => {
      b.wasPan() || c(x, F);
    };
    let h = 1;
    const g = [], f = [], C = [], S = [], u = new Map(n.map((x, F) => [x["gufe-key"], i[F].charge])), p = (x) => (u.get(x.to["gufe-key"]) ?? 0) - (u.get(x.from["gufe-key"]) ?? 0);
    r.forEach((x, F) => {
      const B = p(x), W = {
        stroke: ue.netEdgeLine,
        "stroke-width": Yi(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        ...B ? { "stroke-dasharray": bm } : {}
      }, Z = [
        x.name || "transformation",
        ...x.legs.map((fe, me) => `${x.labels[me]}: ${_e(fe)}`),
        B && `net charge change ${at(B)}`
      ].filter(Boolean).join(`
`), ae = le("line", { class: "gufe-edge", ...W, style: "cursor:pointer;" });
      if (Nr(ae, Z), ae.addEventListener("click", () => _("edge", F)), m.appendChild(ae), g.push(ae), x.legs.length > 1) {
        const fe = le("line", { class: "gufe-edge-rail", ...W, "pointer-events": "none" });
        m.appendChild(fe), f.push(fe), S.push(F);
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
      Nr(se, Z), se.addEventListener("click", () => _("edge", F)), m.appendChild(se), C.push(se);
    });
    const y = (x) => {
      const { from: F, to: B } = r[x], W = (pe, be, ye) => {
        pe.setAttribute("x1", String(F.x + be)), pe.setAttribute("y1", String(F.y + ye)), pe.setAttribute("x2", String(B.x + be)), pe.setAttribute("y2", String(B.y + ye));
      };
      W(C[x], 0, 0);
      const Z = f[x], ae = Z ? Math.hypot(B.x - F.x, B.y - F.y) : 0;
      if (!Z || !ae) {
        W(g[x], 0, 0), Z?.setAttribute("display", "none");
        return;
      }
      Z.removeAttribute("display");
      const se = Sm(h), fe = -(B.y - F.y) / ae * se, me = (B.x - F.x) / ae * se;
      W(g[x], fe, me), W(Z, -fe, -me);
    };
    r.forEach((x, F) => y(F));
    const k = n.map(() => []), P = new Map(n.map((x, F) => [x, F]));
    r.forEach((x, F) => {
      const B = P.get(x.from), W = P.get(x.to);
      B !== void 0 && k[B].push(F), W !== void 0 && W !== B && k[W].push(F);
    });
    const E = [], M = [], R = [], D = [], I = [], L = [], G = [], oe = [], X = [], re = $m();
    n.forEach((x, F) => {
      const B = i[F], W = Wi(B.sdf), Z = le("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${x.x},${x.y})`
      });
      R.push(Z);
      const ae = le("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -W / 2,
        width: dt.width,
        height: W,
        rx: dt.radius,
        fill: re.fill,
        stroke: re.stroke,
        "stroke-width": Xi(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (Z.appendChild(ae), E.push(ae), M.push(re.stroke), B.sdf) {
        const me = le("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -W / 2 + qe.pad,
          width: qe.size,
          height: qe.size,
          rx: qe.radius,
          fill: Hr(),
          display: "none",
          "pointer-events": "none"
        });
        if (Z.appendChild(me), L.push(me), B.charge) {
          const ye = le("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: ue.badgeFg,
            "pointer-events": "none"
          });
          ye.textContent = at(B.charge), Z.appendChild(ye), G.push(ye);
        } else
          G.push(null);
        const pe = le("g", { transform: `translate(0,${-W / 2 + qe.pad + qe.size / 2})` }), be = le("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        pe.appendChild(be), Z.appendChild(pe), oe.push(pe), X.push(be);
      } else
        L.push(null), oe.push(null), X.push(null), G.push(null);
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
      fe.textContent = Un(B.composition, Ge.subChars), Z.appendChild(fe), I.push(fe), Nr(Z, B.title), v.appendChild(Z);
    });
    const K = (x) => {
      const F = n[x];
      R[x].setAttribute("transform", `translate(${F.x},${F.y})`);
      for (const B of k[x]) y(B);
    }, O = new cc(), H = ur("cpk"), z = (x, F) => {
      if (!O.wants(F)) return;
      const B = X[F], W = i[F].sdf;
      if (!B || !W) return;
      const Z = Co(x, W, Ji, Oe.layout, void 0, H);
      if (!Z || !uc(B, Z, Ji, qe.size - qe.inset * 2)) {
        O.refused(F);
        return;
      }
      O.drew(F);
    }, w = (x, F, B) => {
      const W = i[x], Z = F && O.has(x), ae = (xt) => xt * B >= vm, se = ae(Ge.nameSize), fe = ae(Ge.subSize);
      D[x].setAttribute("display", se ? "inline" : "none"), I[x].setAttribute("display", fe ? "inline" : "none"), L[x]?.setAttribute("display", Z ? "inline" : "none"), X[x]?.setAttribute("display", Z ? "inline" : "none");
      const me = Wi(W.sdf), pe = -me / 2 + qe.pad, be = G[x];
      be && (be.setAttribute("x", String(Z ? dt.width / 2 - zt.inset : 0)), be.setAttribute(
        "y",
        String(Z ? -me / 2 + zt.inset : -me * zt.bigAt)
      ), be.setAttribute("font-size", String(Z ? zt.fontSize : zt.bigFontSize)), be.setAttribute("font-weight", Z ? ge.normal : ge.bold)), L[x]?.setAttribute("y", String(pe)), oe[x]?.setAttribute("transform", `translate(0,${pe + qe.size / 2})`);
      const ye = me / 2 - Ge.bottom;
      D[x].setAttribute("y", String(Z ? ye - (fe ? Ge.gap : 0) : -2)), I[x].setAttribute("y", String(Z ? ye : 14)), I[x].textContent = Un(Z ? W.besides : W.composition, Ge.subChars);
    };
    let A = null, q = null, ee = null, te = null, J = ue.netEdgeLine;
    const ne = () => {
      E.forEach((x, F) => {
        const B = q === F;
        x.setAttribute("stroke", B ? ue.cardBorderActive : M[F]), x.setAttribute("stroke-width", String(Xi(h, B)));
      }), g.forEach((x, F) => {
        const B = ee === F, W = te?.has(F) ?? !1, Z = B ? ue.netHaloColor : W ? J : ue.netEdgeLine, ae = String(Yi(h, B) * (W ? St.lensScale : 1));
        for (const se of [x, f[F]])
          se && (se.setAttribute("stroke", Z), se.setAttribute("stroke-width", ae));
      });
    };
    return $ = (x, F, B) => {
      const W = _m(x);
      A = W, l.setAttribute("data-detail", W.id);
      const Z = h !== x;
      if (h = x, ne(), Z) for (const se of S) y(se);
      for (let se = 0; se < n.length; se++) w(se, W.structure, x);
      if (!W.structure) return;
      const ae = lc(
        n,
        { scale: x, tx: F, ty: B },
        { width: s, height: o },
        (se) => !!i[se].sdf && O.wants(se)
      );
      ae.length && a().then((se) => {
        if (!(!se || A !== W))
          for (const fe of ae)
            z(se, fe), w(fe, !0, x);
      }).catch(() => {
      });
    }, ac(R, n, b, { moved: K, clicked: (x) => c("node", x) }), b.fit(), {
      setSelected(x) {
        q = x?.kind === "node" ? x.index : null, ee = x?.kind === "edge" ? x.index : null, ne();
      },
      setProtocol(x, F) {
        te = x, J = F, ne();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(x, F) {
        R.forEach((B, W) => {
          const Z = !x || x.has(n[W]["gufe-key"]);
          B.setAttribute("opacity", Z ? "1" : String(Dt.node));
        }), g.forEach((B, W) => {
          const Z = !F || F.has(W);
          for (const ae of [B, f[W]]) ae?.setAttribute("opacity", Z ? "1" : String(Dt.edge));
        });
      },
      focusOn(x) {
        const F = n[x];
        F && b.centreOn(F.x, F.y, Qi);
      },
      focusOnEdge(x) {
        const F = r[x];
        F && b.centreOn((F.from.x + F.to.x) / 2, (F.from.y + F.to.y) / 2, Qi);
      },
      reset: b.reset,
      cleanup: b.cleanup
    };
  }
}
ze("gufe-alchemical-network", Dm);
class Lm extends Fe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Zn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Qn(n.gufe_type)), t.appendChild(r);
    const s = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(s);
    const o = oo();
    return o.style.maxWidth = "460px", o.appendChild(Wn("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Wn("Name", n.name)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${j.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), s.appendChild(o), {};
  }
}
ze("gufe-protocol", Lm);
function qm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function ea(e, t = !1) {
  const n = T(
    "div",
    `display:flex;flex-direction:column;gap:${Y.xl};padding:${Y.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${j.splitBorder};`)
  );
  return n.appendChild(T("div", qr, e)), n;
}
function Kn(e) {
  return T(
    "div",
    `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`,
    e
  );
}
function ta(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${Y.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Pe.plain}${Pe.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(Kn(t)), n;
}
class Bm extends Fe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const s = oo();
    s.style.maxWidth = "560px", s.style.width = "100%", s.style.gap = "0";
    const o = ea("Solvent", !0), i = T("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = T("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = T(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${ge.bold};line-height:1.1;color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Kn("SMILES")), i.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const g = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      g.appendChild(
        T(
          "div",
          `font-size:${Q.body};color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), g.appendChild(Kn("Name")), i.appendChild(g);
    }
    o.appendChild(i), s.appendChild(o);
    const d = ea("Ions"), m = T("div", `display:flex;align-items:flex-end;gap:${Y.xxl};flex-wrap:wrap;`);
    n.positive_ion && m.appendChild(ta(n.positive_ion, "cation")), n.negative_ion && m.appendChild(ta(n.negative_ion, "anion"));
    const { value: v, unit: $ } = qm(n.ion_concentration), b = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), _ = T("div", `display:flex;align-items:baseline;gap:${Y.md};justify-content:flex-end;`);
    _.appendChild(
      T(
        "div",
        `font-size:${Q.display};font-weight:${ge.bold};line-height:1;color:${j.titleColor};`,
        v
      )
    ), $ && (_.appendChild(document.createTextNode(" ")), _.appendChild(T("div", `font-size:${Q.body};color:${j.textMuted};`, $))), b.appendChild(_), b.appendChild(Kn("Ion concentration")), m.appendChild(b), d.appendChild(m);
    const h = n.neutralize;
    return d.appendChild(
      T(
        "span",
        `${Pe.plain}align-self:flex-start;font-weight:${ge.bold};` + (h ? `background:${j.okBg};color:${j.okFg};` : `${Pe.outline}color:${j.textMuted};`),
        h ? "Neutralized" : "Not neutralized"
      )
    ), d.appendChild(
      T(
        "div",
        zc,
        h ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), s.appendChild(d), r.appendChild(s), {};
  }
}
ze("gufe-solvent", Bm);
class Vm extends Fe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Zn(n.name || "Unnamed component");
    r.statsEl.appendChild(Qn(n.gufe_type)), t.appendChild(r);
    const s = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(s);
    const o = oo();
    return o.style.maxWidth = "460px", o.appendChild(
      T(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${j.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      T(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${j.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Wn("Name", n.name || "(unnamed)")), o.appendChild(Wn("gufe class", n.gufe_type, !0)), s.appendChild(o), {};
  }
}
ze("gufe-unknown-component", Vm);
sa();
typeof globalThis < "u" && (globalThis.alchemyViz = { settings: Fu, reset: ju });
export {
  Um as PAYLOAD_TYPES,
  mo as VIEW_TAGS
};
