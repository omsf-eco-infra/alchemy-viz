function T(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function ke(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Ct = (e) => e.toLocaleString("en-US"), Je = "-", jn = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Us(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const rc = 460;
function Gr(e, t, n = rc) {
  let r = null;
  return Us(e, (i) => {
    const o = i > 0 && i < n;
    o !== r && (r = o, t(o));
  });
}
const Ue = {
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
    boxStroke: "#45455e"
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
    boxStroke: "#cccccc"
  }
};
function oc() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Eo = "data-gufe-theme";
function Hs() {
  return oc() ? "dark" : "light";
}
function ic() {
  return Hs() === "dark";
}
let le = Ue[Hs()];
const Ks = "--gufe-", Gs = Object.keys(Ue.light).filter(
  (e) => e !== "viewerBg" && typeof Ue.light[e] == "string"
), z = Object.fromEntries(Gs.map((e) => [e, `var(${Ks}${e})`])), ur = (e) => Gs.map((t) => `${Ks}${t}:${e[t]};`).join("");
function sc() {
  return [
    `:root{color-scheme:light dark;${ur(Ue.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${Eo}="light"]){${ur(Ue.dark)}}}`,
    `:root[${Eo}="dark"]{${ur(Ue.dark)}}`,
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
const xo = "gufe-viz-theme";
function ac() {
  if (typeof document > "u" || document.getElementById(xo)) return;
  const e = document.createElement("style");
  e.id = xo, e.textContent = sc(), document.head.appendChild(e);
}
const Y = {
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
}, fe = {
  normal: "400",
  bold: "700"
}, X = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, ve = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px"
}, xe = {
  title: z.titleColor,
  primary: z.textPrimary,
  muted: z.textMuted,
  faint: z.textMuted2,
  error: z.errorFg,
  onLabel: z.labelFg
}, zt = {
  app: z.appBg,
  panel: z.panelBg,
  card: z.cardBg,
  toolbar: z.toolbarBg,
  border: z.toolbarBorder,
  split: z.splitBorder,
  /**
   * Where a 3D engine draws. Interface, not chemistry: it is the paper.
   *
   * The one literal here, and a function so it is read when a viewer is built
   * rather than when this module loads. 3Dmol wants `0x2b2b40`, which is not a
   * colour CSS has ever heard of, so this is the one surface a custom property
   * cannot carry.
   */
  viewer: () => le.viewerBg
}, Po = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${z.btnFg};border:1px solid ${z.btnBorder};padding:${X.sm} 9px;font-size:${Y.small};font-weight:${fe.bold};border-radius:${ve.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, Ws = `background:${z.selectBg};color:${z.textPrimary};border:1px solid ${z.selectBorder};border-radius:${ve.md};padding:${X.sm} ${X.lg};font-size:${Y.body};cursor:pointer;font-family:inherit;`, Js = `${Ws}width:100%;box-sizing:border-box;cursor:text;`, Ys = "24px", cc = `display:flex;align-items:flex-start;gap:12px;padding:9px ${X.xxl};flex-shrink:0;line-height:${Ys};background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};`, qn = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Xs = `display:flex;flex-direction:column;gap:${X.lg};flex:1;min-width:var(${Xe.min},${qn.min});max-width:var(${Xe.max},${qn.max});box-sizing:border-box;padding:${X.xl};min-height:0;overflow-y:auto;background:${z.panelBg};border:0 solid ${z.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, lc = "45%", dc = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Zs = {
  top: `display:flex;align-items:center;gap:${X.xl};flex-wrap:wrap;padding:${X.lg} ${X.xxl};flex-shrink:0;font-size:${Y.body};background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};color:${z.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${X.xl};flex-wrap:wrap;padding:${X.lg} ${X.xxl};flex-shrink:0;background:${z.toolbarBg};border-top:1px solid ${z.toolbarBorder};`
}, uc = `flex-shrink:0;padding:${X.sm} ${X.xl};font-size:${Y.heading};font-weight:${fe.bold};color:${z.labelFg};background:${z.labelBg};`, Wr = `position:absolute;top:${X.md};left:${X.md};z-index:10;pointer-events:none;max-width:calc(100% - ${X.xxl} - ${X.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${X.xs} ${X.lg};border-radius:${ve.md};font-size:${Y.heading};font-weight:${fe.bold};color:${z.labelFg};background:${z.labelBg};`, fc = `padding:${X.xs} ${X.lg};border-radius:${ve.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${z.labelFg};background:${z.labelBg};`, pc = `position:absolute;top:${X.lg};left:${X.lg};z-index:15;display:flex;align-items:center;gap:${X.md};min-width:0;max-width:calc(100% - ${X.xxl} - ${X.xxl});`, hc = "42px", mc = `display:flex;flex-direction:column;gap:${X.xs};padding:${X.xxl} 18px;border-radius:${ve.xl};background:${z.cardBg};border:1px solid ${z.cardBorder};`, Jr = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${X.sm};padding:${X.lg} ${X.xl};text-align:left;border-radius:${ve.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Y.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${X.md};padding:5px ${X.lg};border:1px solid;border-radius:${X.md};text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;color:${z.textPrimary};`,
  className: "gufe-pick"
}, gc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${X.xl};border-radius:${ve.md};font-size:${Y.small};line-height:1.5;max-width:260px;background:${z.tooltipBg};border:1px solid ${z.tooltipBorder};color:${z.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, Qs = `position:absolute;bottom:${X.xl};right:${X.xl};display:flex;gap:${X.sm};padding:${X.sm};border-radius:${ve.md};z-index:10;background:${z.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, yc = `font-family:${Y.mono};font-size:${Y.small};line-height:1.7;color:${z.textMuted};`, Fr = `font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${z.textMuted2};`, Be = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${X.xs} ${X.sm};font-size:${Y.small};`,
  plain: `display:inline-flex;align-items:center;padding:${X.xs} ${X.md};border:1px solid transparent;border-radius:${ve.pill};font-family:inherit;font-size:${Y.small};color:${z.textMuted};`,
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
}, $c = `font-size:${Y.small};line-height:1.6;color:${z.textMuted2};`;
function Ze(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = T("span");
  return i.innerHTML = `${ke(e)} <b style="color:${xe.primary};">${ke(t)}</b>`, r.appendChild(i), r;
}
function st(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${X.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${X.md} ${X.xxl};border-radius:${ve.md};font-size:${Y.body};background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};`, e.appendChild(n), n;
}
function pe(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Y.heading};color:${t ? xe.error : xe.faint};`,
    e
  );
}
function Gn(e) {
  const t = T("div", cc);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${fe.bold};font-size:${Y.title};color:${xe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Y.small};color:${xe.muted};`
  ), t.textEl = T("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = T("div", `display:flex;align-items:center;height:${Ys};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Bn(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${xe.faint};`,
      e
    )
  );
  const i = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${xe.primary};` + (n ? `font-family:${Y.mono};font-size:${Y.small};` : `font-size:${Y.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Wn(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${ve.xl};font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.04em;white-space:nowrap;background:${z.badgeBg};color:${z.badgeFg};`,
    e
  );
}
function Yr() {
  return T("div", mc);
}
function ea() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const zr = "data-gufe-hide-name";
function Xr(e) {
  return !e.closest(`[${zr}]`);
}
const bc = ["debug", "gufe-debug"], vc = "debug", wc = "GUFE_VIZ_DEBUG";
function _c() {
  return !!globalThis[wc];
}
function Sc() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return bc.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function kc(e) {
  return e?.hasAttribute?.(vc) ? !0 : _c() || Sc();
}
function Cc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function Ec(e, t, n) {
  if (!kc(n)) return;
  const r = Cc(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const ta = "GUFE_VIZ_VIEW_STATE";
function xc(e) {
  const t = globalThis[ta];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Pc = 150, Ao = "data-gufe-shell";
class Ne extends HTMLElement {
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
  #i = 0;
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
    ac(), this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Ao}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = z.appBg, this.style.color = z.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), Pc);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#s(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #s() {
    if (this.#i++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#t?.cleanup)
      try {
        this.#t.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
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
    return this.#s(), this.#n = T(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${z.appBg};`
    ), this.#n.setAttribute(Ao, ""), this.appendChild(this.#n), this.#n;
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
    const t = this.#u(), n = this.#i;
    if (this.#e == null) {
      t.appendChild(pe(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#e);
    } catch (i) {
      this.#l(t, n, i);
      return;
    }
    r instanceof Promise ? r.then(
      (i) => this.#c(i, n),
      (i) => this.#l(t, n, i)
    ) : this.#c(r, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#i || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (r) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", r);
      }
      return;
    }
    this.#t = t || null;
  }
  #l(t, n, r) {
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(pe(`Failed to render: ${he(r)}`, !0)));
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
function Me(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, fr = {}, je = {}, tt = {}, pr = {}, hr = {}, mr = {}, Ro;
function Vn() {
  return Ro || (Ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(m) {
        if (super(), !e.IDENTIFIER.test(m))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = m;
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
      constructor(m) {
        super(), this._items = typeof m == "string" ? [m] : m;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const m = this._items[0];
        return m === "" || m === '""';
      }
      get str() {
        var m;
        return (m = this._str) !== null && m !== void 0 ? m : this._str = this._items.reduce((k, S) => `${k}${S}`, "");
      }
      get names() {
        var m;
        return (m = this._names) !== null && m !== void 0 ? m : this._names = this._items.reduce((k, S) => (S instanceof n && (k[S.str] = (k[S.str] || 0) + 1), k), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i($, ...m) {
      const k = [$[0]];
      let S = 0;
      for (; S < m.length; )
        a(k, m[S]), k.push($[++S]);
      return new r(k);
    }
    e._ = i;
    const o = new r("+");
    function s($, ...m) {
      const k = [p($[0])];
      let S = 0;
      for (; S < m.length; )
        k.push(o), a(k, m[S]), k.push(o, p($[++S]));
      return c(k), new r(k);
    }
    e.str = s;
    function a($, m) {
      m instanceof r ? $.push(...m._items) : m instanceof n ? $.push(m) : $.push(g(m));
    }
    e.addCodeArg = a;
    function c($) {
      let m = 1;
      for (; m < $.length - 1; ) {
        if ($[m] === o) {
          const k = l($[m - 1], $[m + 1]);
          if (k !== void 0) {
            $.splice(m - 1, 3, k);
            continue;
          }
          $[m++] = "+";
        }
        m++;
      }
    }
    function l($, m) {
      if (m === '""')
        return $;
      if ($ === '""')
        return m;
      if (typeof $ == "string")
        return m instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof m != "string" ? `${$.slice(0, -1)}${m}"` : m[0] === '"' ? $.slice(0, -1) + m.slice(1) : void 0;
      if (typeof m == "string" && m[0] === '"' && !($ instanceof n))
        return `"${$}${m.slice(1)}`;
    }
    function d($, m) {
      return m.emptyStr() ? $ : $.emptyStr() ? m : s`${$}${m}`;
    }
    e.strConcat = d;
    function g($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : p(Array.isArray($) ? $.join(",") : $);
    }
    function w($) {
      return new r(p($));
    }
    e.stringify = w;
    function p($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = p;
    function v($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : i`[${$}]`;
    }
    e.getProperty = v;
    function _($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function h($) {
      return new r($.toString());
    }
    e.regexpCode = h;
  })(mr)), mr;
}
var gr = {}, No;
function Mo() {
  return No || (No = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Vn();
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
    class i {
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
        var d, g;
        if (!((g = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null || g === void 0) && g.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(l, d) {
        super(d), this.prefix = l;
      }
      setValue(l, { property: d, itemIndex: g }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(d)}[${g}]`;
      }
    }
    e.ValueScopeName = o;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new o(l, this._newName(l));
      }
      value(l, d) {
        var g;
        if (d.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const w = this.toName(l), { prefix: p } = w, v = (g = d.key) !== null && g !== void 0 ? g : d.ref;
        let _ = this._values[p];
        if (_) {
          const m = _.get(v);
          if (m)
            return m;
        } else
          _ = this._values[p] = /* @__PURE__ */ new Map();
        _.set(v, w);
        const h = this._scope[p] || (this._scope[p] = []), $ = h.length;
        return h[$] = d.ref, w.setValue(d, { property: p, itemIndex: $ }), w;
      }
      getValue(l, d) {
        const g = this._values[l];
        if (g)
          return g.get(d);
      }
      scopeRefs(l, d = this._values) {
        return this._reduceValues(d, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${l}${g.scopePath}`;
        });
      }
      scopeCode(l = this._values, d, g) {
        return this._reduceValues(l, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, d, g);
      }
      _reduceValues(l, d, g = {}, w) {
        let p = t.nil;
        for (const v in l) {
          const _ = l[v];
          if (!_)
            continue;
          const h = g[v] = g[v] || /* @__PURE__ */ new Map();
          _.forEach(($) => {
            if (h.has($))
              return;
            h.set($, r.Started);
            let m = d($);
            if (m) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              p = (0, t._)`${p}${k} ${$} = ${m};${this.opts._n}`;
            } else if (m = w?.($))
              p = (0, t._)`${p}${m}${this.opts._n}`;
            else
              throw new n($);
            h.set($, r.Completed);
          });
        }
        return p;
      }
    }
    e.ValueScope = a;
  })(gr)), gr;
}
var To;
function ie() {
  return To || (To = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Vn(), n = /* @__PURE__ */ Mo();
    var r = /* @__PURE__ */ Vn();
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
    var i = /* @__PURE__ */ Mo();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return i.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return i.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return i.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return i.varKinds;
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
      optimizeNames(y, C) {
        return this;
      }
    }
    class s extends o {
      constructor(y, C, P) {
        super(), this.varKind = y, this.name = C, this.rhs = P;
      }
      render({ es5: y, _n: C }) {
        const P = y ? n.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${P} ${this.name}${B};` + C;
      }
      optimizeNames(y, C) {
        if (y[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, y, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(y, C, P) {
        super(), this.lhs = y, this.rhs = C, this.sideEffects = P;
      }
      render({ _n: y }) {
        return `${this.lhs} = ${this.rhs};` + y;
      }
      optimizeNames(y, C) {
        if (!(this.lhs instanceof t.Name && !y[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, y, C), this;
      }
      get names() {
        const y = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(y, this.rhs);
      }
    }
    class c extends a {
      constructor(y, C, P, B) {
        super(y, P, B), this.op = C;
      }
      render({ _n: y }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + y;
      }
    }
    class l extends o {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `${this.label}:` + y;
      }
    }
    class d extends o {
      constructor(y) {
        super(), this.label = y, this.names = {};
      }
      render({ _n: y }) {
        return `break${this.label ? ` ${this.label}` : ""};` + y;
      }
    }
    class g extends o {
      constructor(y) {
        super(), this.error = y;
      }
      render({ _n: y }) {
        return `throw ${this.error};` + y;
      }
      get names() {
        return this.error.names;
      }
    }
    class w extends o {
      constructor(y) {
        super(), this.code = y;
      }
      render({ _n: y }) {
        return `${this.code};` + y;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(y, C) {
        return this.code = j(this.code, y, C), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class p extends o {
      constructor(y = []) {
        super(), this.nodes = y;
      }
      render(y) {
        return this.nodes.reduce((C, P) => C + P.render(y), "");
      }
      optimizeNodes() {
        const { nodes: y } = this;
        let C = y.length;
        for (; C--; ) {
          const P = y[C].optimizeNodes();
          Array.isArray(P) ? y.splice(C, 1, ...P) : P ? y[C] = P : y.splice(C, 1);
        }
        return y.length > 0 ? this : void 0;
      }
      optimizeNames(y, C) {
        const { nodes: P } = this;
        let B = P.length;
        for (; B--; ) {
          const H = P[B];
          H.optimizeNames(y, C) || (L(y, H.names), P.splice(B, 1));
        }
        return P.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((y, C) => R(y, C.names), {});
      }
    }
    class v extends p {
      render(y) {
        return "{" + y._n + super.render(y) + "}" + y._n;
      }
    }
    class _ extends p {
    }
    class h extends v {
    }
    h.kind = "else";
    class $ extends v {
      constructor(y, C) {
        super(C), this.condition = y;
      }
      render(y) {
        let C = `if(${this.condition})` + super.render(y);
        return this.else && (C += "else " + this.else.render(y)), C;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const y = this.condition;
        if (y === !0)
          return this.nodes;
        let C = this.else;
        if (C) {
          const P = C.optimizeNodes();
          C = this.else = Array.isArray(P) ? new h(P) : P;
        }
        if (C)
          return y === !1 ? C instanceof $ ? C : C.nodes : this.nodes.length ? this : new $(W(y), C instanceof $ ? [C] : C.nodes);
        if (!(y === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(y, C) {
        var P;
        if (this.else = (P = this.else) === null || P === void 0 ? void 0 : P.optimizeNames(y, C), !!(super.optimizeNames(y, C) || this.else))
          return this.condition = j(this.condition, y, C), this;
      }
      get names() {
        const y = super.names;
        return D(y, this.condition), this.else && R(y, this.else.names), y;
      }
    }
    $.kind = "if";
    class m extends v {
    }
    m.kind = "for";
    class k extends m {
      constructor(y) {
        super(), this.iteration = y;
      }
      render(y) {
        return `for(${this.iteration})` + super.render(y);
      }
      optimizeNames(y, C) {
        if (super.optimizeNames(y, C))
          return this.iteration = j(this.iteration, y, C), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class S extends m {
      constructor(y, C, P, B) {
        super(), this.varKind = y, this.name = C, this.from = P, this.to = B;
      }
      render(y) {
        const C = y.es5 ? n.varKinds.var : this.varKind, { name: P, from: B, to: H } = this;
        return `for(${C} ${P}=${B}; ${P}<${H}; ${P}++)` + super.render(y);
      }
      get names() {
        const y = D(super.names, this.from);
        return D(y, this.to);
      }
    }
    class u extends m {
      constructor(y, C, P, B) {
        super(), this.loop = y, this.varKind = C, this.name = P, this.iterable = B;
      }
      render(y) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(y);
      }
      optimizeNames(y, C) {
        if (super.optimizeNames(y, C))
          return this.iterable = j(this.iterable, y, C), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class f extends v {
      constructor(y, C, P) {
        super(), this.name = y, this.args = C, this.async = P;
      }
      render(y) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(y);
      }
    }
    f.kind = "func";
    class b extends p {
      render(y) {
        return "return " + super.render(y);
      }
    }
    b.kind = "return";
    class x extends v {
      render(y) {
        let C = "try" + super.render(y);
        return this.catch && (C += this.catch.render(y)), this.finally && (C += this.finally.render(y)), C;
      }
      optimizeNodes() {
        var y, C;
        return super.optimizeNodes(), (y = this.catch) === null || y === void 0 || y.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(y, C) {
        var P, B;
        return super.optimizeNames(y, C), (P = this.catch) === null || P === void 0 || P.optimizeNames(y, C), (B = this.finally) === null || B === void 0 || B.optimizeNames(y, C), this;
      }
      get names() {
        const y = super.names;
        return this.catch && R(y, this.catch.names), this.finally && R(y, this.finally.names), y;
      }
    }
    class E extends v {
      constructor(y) {
        super(), this.error = y;
      }
      render(y) {
        return `catch(${this.error})` + super.render(y);
      }
    }
    E.kind = "catch";
    class A extends v {
      render(y) {
        return "finally" + super.render(y);
      }
    }
    A.kind = "finally";
    class M {
      constructor(y, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
` : "" }, this._extScope = y, this._scope = new n.Scope({ parent: y }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(y) {
        return this._scope.name(y);
      }
      // reserves unique name in the external scope
      scopeName(y) {
        return this._extScope.name(y);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(y, C) {
        const P = this._extScope.value(y, C);
        return (this._values[P.prefix] || (this._values[P.prefix] = /* @__PURE__ */ new Set())).add(P), P;
      }
      getScopeValue(y, C) {
        return this._extScope.getValue(y, C);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(y) {
        return this._extScope.scopeRefs(y, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(y, C, P, B) {
        const H = this._scope.toName(C);
        return P !== void 0 && B && (this._constants[H.str] = P), this._leafNode(new s(y, H, P)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(y, C, P) {
        return this._def(n.varKinds.const, y, C, P);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(y, C, P) {
        return this._def(n.varKinds.let, y, C, P);
      }
      // `var` declaration with optional assignment
      var(y, C, P) {
        return this._def(n.varKinds.var, y, C, P);
      }
      // assignment code
      assign(y, C, P) {
        return this._leafNode(new a(y, C, P));
      }
      // `+=` code
      add(y, C) {
        return this._leafNode(new c(y, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code(y) {
        return typeof y == "function" ? y() : y !== t.nil && this._leafNode(new w(y)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...y) {
        const C = ["{"];
        for (const [P, B] of y)
          C.length > 1 && C.push(","), C.push(P), (P !== B || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, B));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(y, C, P) {
        if (this._blockNode(new $(y)), C && P)
          this.code(C).else().code(P).endIf();
        else if (C)
          this.code(C).endIf();
        else if (P)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(y) {
        return this._elseNode(new $(y));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, h);
      }
      _for(y, C) {
        return this._blockNode(y), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(y, C) {
        return this._for(new k(y), C);
      }
      // `for` statement for a range of values
      forRange(y, C, P, B, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(y);
        return this._for(new S(H, Q, C, P), () => B(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(y, C, P, B = n.varKinds.const) {
        const H = this._scope.toName(y);
        if (this.opts.es5) {
          const Q = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (ee) => {
            this.var(H, (0, t._)`${Q}[${ee}]`), P(H);
          });
        }
        return this._for(new u("of", B, H, C), () => P(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(y, C, P, B = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(y, (0, t._)`Object.keys(${C})`, P);
        const H = this._scope.toName(y);
        return this._for(new u("in", B, H, C), () => P(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(m);
      }
      // `label` statement
      label(y) {
        return this._leafNode(new l(y));
      }
      // `break` statement
      break(y) {
        return this._leafNode(new d(y));
      }
      // `return` statement
      return(y) {
        const C = new b();
        if (this._blockNode(C), this.code(y), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(b);
      }
      // `try` statement
      try(y, C, P) {
        if (!C && !P)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const B = new x();
        if (this._blockNode(B), this.code(y), C) {
          const H = this.name("e");
          this._currNode = B.catch = new E(H), C(H);
        }
        return P && (this._currNode = B.finally = new A(), this.code(P)), this._endBlockNode(E, A);
      }
      // `throw` statement
      throw(y) {
        return this._leafNode(new g(y));
      }
      // start self-balancing block
      block(y, C) {
        return this._blockStarts.push(this._nodes.length), y && this.code(y).endBlock(C), this;
      }
      // end the current self-balancing block
      endBlock(y) {
        const C = this._blockStarts.pop();
        if (C === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const P = this._nodes.length - C;
        if (P < 0 || y !== void 0 && P !== y)
          throw new Error(`CodeGen: wrong number of nodes: ${P} vs ${y} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(y, C = t.nil, P, B) {
        return this._blockNode(new f(y, C, P)), B && this.code(B).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(f);
      }
      optimize(y = 1) {
        for (; y-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(y) {
        return this._currNode.nodes.push(y), this;
      }
      _blockNode(y) {
        this._currNode.nodes.push(y), this._nodes.push(y);
      }
      _endBlockNode(y, C) {
        const P = this._currNode;
        if (P instanceof y || C && P instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${y.kind}/${C.kind}` : y.kind}"`);
      }
      _elseNode(y) {
        const C = this._currNode;
        if (!(C instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = C.else = y, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const y = this._nodes;
        return y[y.length - 1];
      }
      set _currNode(y) {
        const C = this._nodes;
        C[C.length - 1] = y;
      }
    }
    e.CodeGen = M;
    function R(I, y) {
      for (const C in y)
        I[C] = (I[C] || 0) + (y[C] || 0);
      return I;
    }
    function D(I, y) {
      return y instanceof t._CodeOrName ? R(I, y.names) : I;
    }
    function j(I, y, C) {
      if (I instanceof t.Name)
        return P(I);
      if (!B(I))
        return I;
      return new t._Code(I._items.reduce((H, Q) => (Q instanceof t.Name && (Q = P(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function P(H) {
        const Q = C[H.str];
        return Q === void 0 || y[H.str] !== 1 ? H : (delete y[H.str], Q);
      }
      function B(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && y[Q.str] === 1 && C[Q.str] !== void 0);
      }
    }
    function L(I, y) {
      for (const C in y)
        I[C] = (I[C] || 0) - (y[C] || 0);
    }
    function W(I) {
      return typeof I == "boolean" || typeof I == "number" || I === null ? !I : (0, t._)`!${U(I)}`;
    }
    e.not = W;
    const ne = O(e.operators.AND);
    function Z(...I) {
      return I.reduce(ne);
    }
    e.and = Z;
    const oe = O(e.operators.OR);
    function G(...I) {
      return I.reduce(oe);
    }
    e.or = G;
    function O(I) {
      return (y, C) => y === t.nil ? C : C === t.nil ? y : (0, t._)`${U(y)} ${I} ${U(C)}`;
    }
    function U(I) {
      return I instanceof t.Name ? I : (0, t._)`(${I})`;
    }
  })(hr)), hr;
}
var se = {}, Oo;
function ce() {
  if (Oo) return se;
  Oo = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Vn();
  function n(u) {
    const f = {};
    for (const b of u)
      f[b] = !0;
    return f;
  }
  se.toHash = n;
  function r(u, f) {
    return typeof f == "boolean" ? f : Object.keys(f).length === 0 ? !0 : (i(u, f), !o(f, u.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function i(u, f = u.schema) {
    const { opts: b, self: x } = u;
    if (!b.strictSchema || typeof f == "boolean")
      return;
    const E = x.RULES.keywords;
    for (const A in f)
      E[A] || S(u, `unknown keyword: "${A}"`);
  }
  se.checkUnknownRules = i;
  function o(u, f) {
    if (typeof u == "boolean")
      return !u;
    for (const b in u)
      if (f[b])
        return !0;
    return !1;
  }
  se.schemaHasRules = o;
  function s(u, f) {
    if (typeof u == "boolean")
      return !u;
    for (const b in u)
      if (b !== "$ref" && f.all[b])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: u, schemaPath: f }, b, x, E) {
    if (!E) {
      if (typeof b == "number" || typeof b == "boolean")
        return b;
      if (typeof b == "string")
        return (0, e._)`${b}`;
    }
    return (0, e._)`${u}${f}${(0, e.getProperty)(x)}`;
  }
  se.schemaRefOrVal = a;
  function c(u) {
    return g(decodeURIComponent(u));
  }
  se.unescapeFragment = c;
  function l(u) {
    return encodeURIComponent(d(u));
  }
  se.escapeFragment = l;
  function d(u) {
    return typeof u == "number" ? `${u}` : u.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = d;
  function g(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = g;
  function w(u, f) {
    if (Array.isArray(u))
      for (const b of u)
        f(b);
    else
      f(u);
  }
  se.eachItem = w;
  function p({ mergeNames: u, mergeToName: f, mergeValues: b, resultToName: x }) {
    return (E, A, M, R) => {
      const D = M === void 0 ? A : M instanceof e.Name ? (A instanceof e.Name ? u(E, A, M) : f(E, A, M), M) : A instanceof e.Name ? (f(E, M, A), A) : b(A, M);
      return R === e.Name && !(D instanceof e.Name) ? x(E, D) : D;
    };
  }
  se.mergeEvaluated = {
    props: p({
      mergeNames: (u, f, b) => u.if((0, e._)`${b} !== true && ${f} !== undefined`, () => {
        u.if((0, e._)`${f} === true`, () => u.assign(b, !0), () => u.assign(b, (0, e._)`${b} || {}`).code((0, e._)`Object.assign(${b}, ${f})`));
      }),
      mergeToName: (u, f, b) => u.if((0, e._)`${b} !== true`, () => {
        f === !0 ? u.assign(b, !0) : (u.assign(b, (0, e._)`${b} || {}`), _(u, b, f));
      }),
      mergeValues: (u, f) => u === !0 ? !0 : { ...u, ...f },
      resultToName: v
    }),
    items: p({
      mergeNames: (u, f, b) => u.if((0, e._)`${b} !== true && ${f} !== undefined`, () => u.assign(b, (0, e._)`${f} === true ? true : ${b} > ${f} ? ${b} : ${f}`)),
      mergeToName: (u, f, b) => u.if((0, e._)`${b} !== true`, () => u.assign(b, f === !0 ? !0 : (0, e._)`${b} > ${f} ? ${b} : ${f}`)),
      mergeValues: (u, f) => u === !0 ? !0 : Math.max(u, f),
      resultToName: (u, f) => u.var("items", f)
    })
  };
  function v(u, f) {
    if (f === !0)
      return u.var("props", !0);
    const b = u.var("props", (0, e._)`{}`);
    return f !== void 0 && _(u, b, f), b;
  }
  se.evaluatedPropsToName = v;
  function _(u, f, b) {
    Object.keys(b).forEach((x) => u.assign((0, e._)`${f}${(0, e.getProperty)(x)}`, !0));
  }
  se.setEvaluated = _;
  const h = {};
  function $(u, f) {
    return u.scopeValue("func", {
      ref: f,
      code: h[f.code] || (h[f.code] = new t._Code(f.code))
    });
  }
  se.useFunc = $;
  var m;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(m || (se.Type = m = {}));
  function k(u, f, b) {
    if (u instanceof e.Name) {
      const x = f === m.Num;
      return b ? x ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : x ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return b ? (0, e.getProperty)(u).toString() : "/" + d(u);
  }
  se.getErrorPath = k;
  function S(u, f, b = u.opts.strictSchema) {
    if (b) {
      if (f = `strict mode: ${f}`, b === !0)
        throw new Error(f);
      u.self.logger.warn(f);
    }
  }
  return se.checkStrictMode = S, se;
}
var Dt = {}, Fo;
function Oe() {
  if (Fo) return Dt;
  Fo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
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
  return Dt.default = t, Dt;
}
var zo;
function Jn() {
  return zo || (zo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: $ }) => $ ? (0, t.str)`"${h}" keyword must be ${$} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function i(h, $ = e.keywordError, m, k) {
      const { it: S } = h, { gen: u, compositeRule: f, allErrors: b } = S, x = g(h, $, m);
      k ?? (f || b) ? c(u, x) : l(S, (0, t._)`[${x}]`);
    }
    e.reportError = i;
    function o(h, $ = e.keywordError, m) {
      const { it: k } = h, { gen: S, compositeRule: u, allErrors: f } = k, b = g(h, $, m);
      c(S, b), u || f || l(k, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(h, $) {
      h.assign(r.default.errors, $), h.if((0, t._)`${r.default.vErrors} !== null`, () => h.if($, () => h.assign((0, t._)`${r.default.vErrors}.length`, $), () => h.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: h, keyword: $, schemaValue: m, data: k, errsCount: S, it: u }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const f = h.name("err");
      h.forRange("i", S, r.default.errors, (b) => {
        h.const(f, (0, t._)`${r.default.vErrors}[${b}]`), h.if((0, t._)`${f}.instancePath === undefined`, () => h.assign((0, t._)`${f}.instancePath`, (0, t.strConcat)(r.default.instancePath, u.errorPath))), h.assign((0, t._)`${f}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${$}`), u.opts.verbose && (h.assign((0, t._)`${f}.schema`, m), h.assign((0, t._)`${f}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(h, $) {
      const m = h.const("err", $);
      h.if((0, t._)`${r.default.vErrors} === null`, () => h.assign(r.default.vErrors, (0, t._)`[${m}]`), (0, t._)`${r.default.vErrors}.push(${m})`), h.code((0, t._)`${r.default.errors}++`);
    }
    function l(h, $) {
      const { gen: m, validateName: k, schemaEnv: S } = h;
      S.$async ? m.throw((0, t._)`new ${h.ValidationError}(${$})`) : (m.assign((0, t._)`${k}.errors`, $), m.return(!1));
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
    function g(h, $, m) {
      const { createErrors: k } = h.it;
      return k === !1 ? (0, t._)`{}` : w(h, $, m);
    }
    function w(h, $, m = {}) {
      const { gen: k, it: S } = h, u = [
        p(S, m),
        v(h, m)
      ];
      return _(h, $, u), k.object(...u);
    }
    function p({ errorPath: h }, { instancePath: $ }) {
      const m = $ ? (0, t.str)`${h}${(0, n.getErrorPath)($, n.Type.Str)}` : h;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, m)];
    }
    function v({ keyword: h, it: { errSchemaPath: $ } }, { schemaPath: m, parentSchema: k }) {
      let S = k ? $ : (0, t.str)`${$}/${h}`;
      return m && (S = (0, t.str)`${S}${(0, n.getErrorPath)(m, n.Type.Str)}`), [d.schemaPath, S];
    }
    function _(h, { params: $, message: m }, k) {
      const { keyword: S, data: u, schemaValue: f, it: b } = h, { opts: x, propertyName: E, topSchemaRef: A, schemaPath: M } = b;
      k.push([d.keyword, S], [d.params, typeof $ == "function" ? $(h) : $ || (0, t._)`{}`]), x.messages && k.push([d.message, typeof m == "function" ? m(h) : m]), x.verbose && k.push([d.schema, f], [d.parentSchema, (0, t._)`${A}${M}`], [r.default.data, u]), E && k.push([d.propertyName, E]);
    }
  })(pr)), pr;
}
var Io;
function Rc() {
  if (Io) return tt;
  Io = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.boolOrEmptySchema = tt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: c, schema: l, validateName: d } = a;
    l === !1 ? s(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${d}.errors`, null), c.return(!0));
  }
  tt.topBoolOrEmptySchema = i;
  function o(a, c) {
    const { gen: l, schema: d } = a;
    d === !1 ? (l.var(c, !1), s(a)) : l.var(c, !0);
  }
  tt.boolOrEmptySchema = o;
  function s(a, c) {
    const { gen: l, data: d } = a, g = {
      gen: l,
      keyword: "false schema",
      data: d,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, r, void 0, c);
  }
  return tt;
}
var ge = {}, nt = {}, jo;
function na() {
  if (jo) return nt;
  jo = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.getRules = nt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  nt.isJSONType = n;
  function r() {
    const i = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...i, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, i.number, i.string, i.array, i.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return nt.getRules = r, nt;
}
var De = {}, Do;
function ra() {
  if (Do) return De;
  Do = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  De.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  De.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return De.shouldUseRule = n, De;
}
var Lo;
function Un() {
  if (Lo) return ge;
  Lo = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ na(), t = /* @__PURE__ */ ra(), n = /* @__PURE__ */ Jn(), r = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ce();
  var o;
  (function(m) {
    m[m.Correct = 0] = "Correct", m[m.Wrong = 1] = "Wrong";
  })(o || (ge.DataType = o = {}));
  function s(m) {
    const k = a(m.type);
    if (k.includes("null")) {
      if (m.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!k.length && m.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      m.nullable === !0 && k.push("null");
    }
    return k;
  }
  ge.getSchemaTypes = s;
  function a(m) {
    const k = Array.isArray(m) ? m : m ? [m] : [];
    if (k.every(e.isJSONType))
      return k;
    throw new Error("type must be JSONType or JSONType[]: " + k.join(","));
  }
  ge.getJSONTypes = a;
  function c(m, k) {
    const { gen: S, data: u, opts: f } = m, b = d(k, f.coerceTypes), x = k.length > 0 && !(b.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(m, k[0]));
    if (x) {
      const E = v(k, u, f.strictNumbers, o.Wrong);
      S.if(E, () => {
        b.length ? g(m, k, b) : h(m);
      });
    }
    return x;
  }
  ge.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function d(m, k) {
    return k ? m.filter((S) => l.has(S) || k === "array" && S === "array") : [];
  }
  function g(m, k, S) {
    const { gen: u, data: f, opts: b } = m, x = u.let("dataType", (0, r._)`typeof ${f}`), E = u.let("coerced", (0, r._)`undefined`);
    b.coerceTypes === "array" && u.if((0, r._)`${x} == 'object' && Array.isArray(${f}) && ${f}.length == 1`, () => u.assign(f, (0, r._)`${f}[0]`).assign(x, (0, r._)`typeof ${f}`).if(v(k, f, b.strictNumbers), () => u.assign(E, f))), u.if((0, r._)`${E} !== undefined`);
    for (const M of S)
      (l.has(M) || M === "array" && b.coerceTypes === "array") && A(M);
    u.else(), h(m), u.endIf(), u.if((0, r._)`${E} !== undefined`, () => {
      u.assign(f, E), w(m, E);
    });
    function A(M) {
      switch (M) {
        case "string":
          u.elseIf((0, r._)`${x} == "number" || ${x} == "boolean"`).assign(E, (0, r._)`"" + ${f}`).elseIf((0, r._)`${f} === null`).assign(E, (0, r._)`""`);
          return;
        case "number":
          u.elseIf((0, r._)`${x} == "boolean" || ${f} === null
              || (${x} == "string" && ${f} && ${f} == +${f})`).assign(E, (0, r._)`+${f}`);
          return;
        case "integer":
          u.elseIf((0, r._)`${x} === "boolean" || ${f} === null
              || (${x} === "string" && ${f} && ${f} == +${f} && !(${f} % 1))`).assign(E, (0, r._)`+${f}`);
          return;
        case "boolean":
          u.elseIf((0, r._)`${f} === "false" || ${f} === 0 || ${f} === null`).assign(E, !1).elseIf((0, r._)`${f} === "true" || ${f} === 1`).assign(E, !0);
          return;
        case "null":
          u.elseIf((0, r._)`${f} === "" || ${f} === 0 || ${f} === false`), u.assign(E, null);
          return;
        case "array":
          u.elseIf((0, r._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${f} === null`).assign(E, (0, r._)`[${f}]`);
      }
    }
  }
  function w({ gen: m, parentData: k, parentDataProperty: S }, u) {
    m.if((0, r._)`${k} !== undefined`, () => m.assign((0, r._)`${k}[${S}]`, u));
  }
  function p(m, k, S, u = o.Correct) {
    const f = u === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let b;
    switch (m) {
      case "null":
        return (0, r._)`${k} ${f} null`;
      case "array":
        b = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        b = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        b = x((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        b = x();
        break;
      default:
        return (0, r._)`typeof ${k} ${f} ${m}`;
    }
    return u === o.Correct ? b : (0, r.not)(b);
    function x(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, E, S ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  ge.checkDataType = p;
  function v(m, k, S, u) {
    if (m.length === 1)
      return p(m[0], k, S, u);
    let f;
    const b = (0, i.toHash)(m);
    if (b.array && b.object) {
      const x = (0, r._)`typeof ${k} != "object"`;
      f = b.null ? x : (0, r._)`!${k} || ${x}`, delete b.null, delete b.array, delete b.object;
    } else
      f = r.nil;
    b.number && delete b.integer;
    for (const x in b)
      f = (0, r.and)(f, p(x, k, S, u));
    return f;
  }
  ge.checkDataTypes = v;
  const _ = {
    message: ({ schema: m }) => `must be ${m}`,
    params: ({ schema: m, schemaValue: k }) => typeof m == "string" ? (0, r._)`{type: ${m}}` : (0, r._)`{type: ${k}}`
  };
  function h(m) {
    const k = $(m);
    (0, n.reportError)(k, _);
  }
  ge.reportTypeError = h;
  function $(m) {
    const { gen: k, data: S, schema: u } = m, f = (0, i.schemaRefOrVal)(m, u, "type");
    return {
      gen: k,
      keyword: "type",
      data: S,
      schema: u.type,
      schemaCode: f,
      schemaValue: f,
      parentSchema: u,
      params: {},
      it: m
    };
  }
  return ge;
}
var Et = {}, qo;
function Nc() {
  if (qo) return Et;
  qo = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const c in s)
        r(i, c, s[c].default);
    else o === "array" && Array.isArray(a) && a.forEach((c, l) => r(i, l, c.default));
  }
  Et.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: c, data: l, opts: d } = i;
    if (s === void 0)
      return;
    const g = (0, e._)`${l}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${g}`);
      return;
    }
    let w = (0, e._)`${g} === undefined`;
    d.useDefaults === "empty" && (w = (0, e._)`${w} || ${g} === null || ${g} === ""`), a.if(w, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return Et;
}
var Te = {}, de = {}, Bo;
function Fe() {
  if (Bo) return de;
  Bo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce();
  function i(m, k) {
    const { gen: S, data: u, it: f } = m;
    S.if(d(S, u, k, f.opts.ownProperties), () => {
      m.setParams({ missingProperty: (0, e._)`${k}` }, !0), m.error();
    });
  }
  de.checkReportMissingProp = i;
  function o({ gen: m, data: k, it: { opts: S } }, u, f) {
    return (0, e.or)(...u.map((b) => (0, e.and)(d(m, k, b, S.ownProperties), (0, e._)`${f} = ${b}`)));
  }
  de.checkMissingProp = o;
  function s(m, k) {
    m.setParams({ missingProperty: k }, !0), m.error();
  }
  de.reportMissingProp = s;
  function a(m) {
    return m.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  de.hasPropFunc = a;
  function c(m, k, S) {
    return (0, e._)`${a(m)}.call(${k}, ${S})`;
  }
  de.isOwnProperty = c;
  function l(m, k, S, u) {
    const f = (0, e._)`${k}${(0, e.getProperty)(S)} !== undefined`;
    return u ? (0, e._)`${f} && ${c(m, k, S)}` : f;
  }
  de.propertyInData = l;
  function d(m, k, S, u) {
    const f = (0, e._)`${k}${(0, e.getProperty)(S)} === undefined`;
    return u ? (0, e.or)(f, (0, e.not)(c(m, k, S))) : f;
  }
  de.noPropertyInData = d;
  function g(m) {
    return m ? Object.keys(m).filter((k) => k !== "__proto__") : [];
  }
  de.allSchemaProperties = g;
  function w(m, k) {
    return g(k).filter((S) => !(0, t.alwaysValidSchema)(m, k[S]));
  }
  de.schemaProperties = w;
  function p({ schemaCode: m, data: k, it: { gen: S, topSchemaRef: u, schemaPath: f, errorPath: b }, it: x }, E, A, M) {
    const R = M ? (0, e._)`${m}, ${k}, ${u}${f}` : k, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, b)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${R}, ${S.object(...D)}`;
    return A !== e.nil ? (0, e._)`${E}.call(${A}, ${j})` : (0, e._)`${E}(${j})`;
  }
  de.callValidateCode = p;
  const v = (0, e._)`new RegExp`;
  function _({ gen: m, it: { opts: k } }, S) {
    const u = k.unicodeRegExp ? "u" : "", { regExp: f } = k.code, b = f(S, u);
    return m.scopeValue("pattern", {
      key: b.toString(),
      ref: b,
      code: (0, e._)`${f.code === "new RegExp" ? v : (0, r.useFunc)(m, f)}(${S}, ${u})`
    });
  }
  de.usePattern = _;
  function h(m) {
    const { gen: k, data: S, keyword: u, it: f } = m, b = k.name("valid");
    if (f.allErrors) {
      const E = k.let("valid", !0);
      return x(() => k.assign(E, !1)), E;
    }
    return k.var(b, !0), x(() => k.break()), b;
    function x(E) {
      const A = k.const("len", (0, e._)`${S}.length`);
      k.forRange("i", 0, A, (M) => {
        m.subschema({
          keyword: u,
          dataProp: M,
          dataPropType: t.Type.Num
        }, b), k.if((0, e.not)(b), E);
      });
    }
  }
  de.validateArray = h;
  function $(m) {
    const { gen: k, schema: S, keyword: u, it: f } = m;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((A) => (0, t.alwaysValidSchema)(f, A)) && !f.opts.unevaluated)
      return;
    const x = k.let("valid", !1), E = k.name("_valid");
    k.block(() => S.forEach((A, M) => {
      const R = m.subschema({
        keyword: u,
        schemaProp: M,
        compositeRule: !0
      }, E);
      k.assign(x, (0, e._)`${x} || ${E}`), m.mergeValidEvaluated(R, E) || k.if((0, e.not)(x));
    })), m.result(x, () => m.reset(), () => m.error(!0));
  }
  return de.validateUnion = $, de;
}
var Vo;
function Mc() {
  if (Vo) return Te;
  Vo = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateKeywordUsage = Te.validSchemaType = Te.funcKeywordCode = Te.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Jn();
  function i(w, p) {
    const { gen: v, keyword: _, schema: h, parentSchema: $, it: m } = w, k = p.macro.call(m.self, h, $, m), S = l(v, _, k);
    m.opts.validateSchema !== !1 && m.self.validateSchema(k, !0);
    const u = v.name("valid");
    w.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${m.errSchemaPath}/${_}`,
      topSchemaRef: S,
      compositeRule: !0
    }, u), w.pass(u, () => w.error(!0));
  }
  Te.macroKeywordCode = i;
  function o(w, p) {
    var v;
    const { gen: _, keyword: h, schema: $, parentSchema: m, $data: k, it: S } = w;
    c(S, p);
    const u = !k && p.compile ? p.compile.call(S.self, $, m, S) : p.validate, f = l(_, h, u), b = _.let("valid");
    w.block$data(b, x), w.ok((v = p.valid) !== null && v !== void 0 ? v : b);
    function x() {
      if (p.errors === !1)
        M(), p.modifying && s(w), R(() => w.error());
      else {
        const D = p.async ? E() : A();
        p.modifying && s(w), R(() => a(w, D));
      }
    }
    function E() {
      const D = _.let("ruleErrs", null);
      return _.try(() => M((0, e._)`await `), (j) => _.assign(b, !1).if((0, e._)`${j} instanceof ${S.ValidationError}`, () => _.assign(D, (0, e._)`${j}.errors`), () => _.throw(j))), D;
    }
    function A() {
      const D = (0, e._)`${f}.errors`;
      return _.assign(D, null), M(e.nil), D;
    }
    function M(D = p.async ? (0, e._)`await ` : e.nil) {
      const j = S.opts.passContext ? t.default.this : t.default.self, L = !("compile" in p && !k || p.schema === !1);
      _.assign(b, (0, e._)`${D}${(0, n.callValidateCode)(w, f, j, L)}`, p.modifying);
    }
    function R(D) {
      var j;
      _.if((0, e.not)((j = p.valid) !== null && j !== void 0 ? j : b), D);
    }
  }
  Te.funcKeywordCode = o;
  function s(w) {
    const { gen: p, data: v, it: _ } = w;
    p.if(_.parentData, () => p.assign(v, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(w, p) {
    const { gen: v } = w;
    v.if((0, e._)`Array.isArray(${p})`, () => {
      v.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${p} : ${t.default.vErrors}.concat(${p})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(w);
    }, () => w.error());
  }
  function c({ schemaEnv: w }, p) {
    if (p.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(w, p, v) {
    if (v === void 0)
      throw new Error(`keyword "${p}" failed to compile`);
    return w.scopeValue("keyword", typeof v == "function" ? { ref: v } : { ref: v, code: (0, e.stringify)(v) });
  }
  function d(w, p, v = !1) {
    return !p.length || p.some((_) => _ === "array" ? Array.isArray(w) : _ === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == _ || v && typeof w > "u");
  }
  Te.validSchemaType = d;
  function g({ schema: w, opts: p, self: v, errSchemaPath: _ }, h, $) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes($) : h.keyword !== $)
      throw new Error("ajv implementation error");
    const m = h.dependencies;
    if (m?.some((k) => !Object.prototype.hasOwnProperty.call(w, k)))
      throw new Error(`parent schema must have dependencies of ${$}: ${m.join(",")}`);
    if (h.validateSchema && !h.validateSchema(w[$])) {
      const S = `keyword "${$}" value is invalid at path "${_}": ` + v.errorsText(h.validateSchema.errors);
      if (p.validateSchema === "log")
        v.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Te.validateKeywordUsage = g, Te;
}
var Le = {}, Uo;
function Tc() {
  if (Uo) return Le;
  Uo = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.extendSubschemaMode = Le.extendSubschemaData = Le.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(o, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: d, topSchemaRef: g }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const w = o.schema[s];
      return a === void 0 ? {
        schema: w,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}`
      } : {
        schema: w[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (l === void 0 || d === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: g,
        errSchemaPath: d
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Le.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: c, data: l, dataTypes: d, propertyName: g }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = s;
    if (a !== void 0) {
      const { errorPath: v, dataPathArr: _, opts: h } = s, $ = w.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      p($), o.errorPath = (0, e.str)`${v}${(0, t.getErrorPath)(a, c, h.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [..._, o.parentDataProperty];
    }
    if (l !== void 0) {
      const v = l instanceof e.Name ? l : w.let("data", l, !0);
      p(v), g !== void 0 && (o.propertyName = g);
    }
    d && (o.dataTypes = d);
    function p(v) {
      o.data = v, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, v];
    }
  }
  Le.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: d }) {
    c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), d !== void 0 && (o.allErrors = d), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return Le.extendSubschemaMode = i, Le;
}
var ye = {}, yr, Ho;
function oa() {
  return Ho || (Ho = 1, yr = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, i, o;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (i = r; i-- !== 0; )
          if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
      for (i = r; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
      for (i = r; i-- !== 0; ) {
        var s = o[i];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), yr;
}
var $r = { exports: {} }, Ko;
function Oc() {
  if (Ko) return $r.exports;
  Ko = 1;
  var e = $r.exports = function(r, i, o) {
    typeof i == "function" && (o = i, i = {}), o = i.cb || o;
    var s = typeof o == "function" ? o : o.pre || function() {
    }, a = o.post || function() {
    };
    t(i, s, a, r, "", r);
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
  function t(r, i, o, s, a, c, l, d, g, w) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, c, l, d, g, w);
      for (var p in s) {
        var v = s[p];
        if (Array.isArray(v)) {
          if (p in e.arrayKeywords)
            for (var _ = 0; _ < v.length; _++)
              t(r, i, o, v[_], a + "/" + p + "/" + _, c, a, p, s, _);
        } else if (p in e.propsKeywords) {
          if (v && typeof v == "object")
            for (var h in v)
              t(r, i, o, v[h], a + "/" + p + "/" + n(h), c, a, p, s, h);
        } else (p in e.keywords || r.allKeys && !(p in e.skipKeywords)) && t(r, i, o, v, a + "/" + p, c, a, p, s);
      }
      o(s, a, c, l, d, g, w);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return $r.exports;
}
var Go;
function Yn() {
  if (Go) return ye;
  Go = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getSchemaRefs = ye.resolveUrl = ye.normalizeId = ye._getFullPath = ye.getFullPath = ye.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = oa(), n = Oc(), r = /* @__PURE__ */ new Set([
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
  function i(_, h = !0) {
    return typeof _ == "boolean" ? !0 : h === !0 ? !s(_) : h ? a(_) <= h : !1;
  }
  ye.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(_) {
    for (const h in _) {
      if (o.has(h))
        return !0;
      const $ = _[h];
      if (Array.isArray($) && $.some(s) || typeof $ == "object" && s($))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let h = 0;
    for (const $ in _) {
      if ($ === "$ref")
        return 1 / 0;
      if (h++, !r.has($) && (typeof _[$] == "object" && (0, e.eachItem)(_[$], (m) => h += a(m)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(_, h = "", $) {
    $ !== !1 && (h = g(h));
    const m = _.parse(h);
    return l(_, m);
  }
  ye.getFullPath = c;
  function l(_, h) {
    return _.serialize(h).split("#")[0] + "#";
  }
  ye._getFullPath = l;
  const d = /#\/?$/;
  function g(_) {
    return _ ? _.replace(d, "") : "";
  }
  ye.normalizeId = g;
  function w(_, h, $) {
    return $ = g($), _.resolve(h, $);
  }
  ye.resolveUrl = w;
  const p = /^[a-z_][-a-z0-9._]*$/i;
  function v(_, h) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: $, uriResolver: m } = this.opts, k = g(_[$] || h), S = { "": k }, u = c(m, k, !1), f = {}, b = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (A, M, R, D) => {
      if (D === void 0)
        return;
      const j = u + M;
      let L = S[D];
      typeof A[$] == "string" && (L = W.call(this, A[$])), ne.call(this, A.$anchor), ne.call(this, A.$dynamicAnchor), S[M] = L;
      function W(Z) {
        const oe = this.opts.uriResolver.resolve;
        if (Z = g(L ? oe(L, Z) : Z), b.has(Z))
          throw E(Z);
        b.add(Z);
        let G = this.refs[Z];
        return typeof G == "string" && (G = this.refs[G]), typeof G == "object" ? x(A, G.schema, Z) : Z !== g(j) && (Z[0] === "#" ? (x(A, f[Z], Z), f[Z] = A) : this.refs[Z] = j), Z;
      }
      function ne(Z) {
        if (typeof Z == "string") {
          if (!p.test(Z))
            throw new Error(`invalid anchor "${Z}"`);
          W.call(this, `#${Z}`);
        }
      }
    }), f;
    function x(A, M, R) {
      if (M !== void 0 && !t(A, M))
        throw E(R);
    }
    function E(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return ye.getSchemaRefs = v, ye;
}
var Wo;
function Xn() {
  if (Wo) return je;
  Wo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Rc(), t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ ra(), r = /* @__PURE__ */ Un(), i = /* @__PURE__ */ Nc(), o = /* @__PURE__ */ Mc(), s = /* @__PURE__ */ Tc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Oe(), l = /* @__PURE__ */ Yn(), d = /* @__PURE__ */ ce(), g = /* @__PURE__ */ Jn();
  function w(N) {
    if (u(N) && (b(N), S(N))) {
      h(N);
      return;
    }
    p(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  je.validateFunctionCode = w;
  function p({ gen: N, validateName: F, schema: K, schemaEnv: J, opts: te }, re) {
    te.code.es5 ? N.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      N.code((0, a._)`"use strict"; ${m(K, te)}`), _(N, te), N.code(re);
    }) : N.func(F, (0, a._)`${c.default.data}, ${v(te)}`, J.$async, () => N.code(m(K, te)).code(re));
  }
  function v(N) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${N.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(N, F) {
    N.if(c.default.valCxt, () => {
      N.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), N.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), N.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), N.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      N.var(c.default.instancePath, (0, a._)`""`), N.var(c.default.parentData, (0, a._)`undefined`), N.var(c.default.parentDataProperty, (0, a._)`undefined`), N.var(c.default.rootData, c.default.data), F.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function h(N) {
    const { schema: F, opts: K, gen: J } = N;
    p(N, () => {
      K.$comment && F.$comment && D(N), A(N), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), K.unevaluated && $(N), x(N), j(N);
    });
  }
  function $(N) {
    const { gen: F, validateName: K } = N;
    N.evaluated = F.const("evaluated", (0, a._)`${K}.evaluated`), F.if((0, a._)`${N.evaluated}.dynamicProps`, () => F.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${N.evaluated}.dynamicItems`, () => F.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function m(N, F) {
    const K = typeof N == "object" && N[F.schemaId];
    return K && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${K} */` : a.nil;
  }
  function k(N, F) {
    if (u(N) && (b(N), S(N))) {
      f(N, F);
      return;
    }
    (0, e.boolOrEmptySchema)(N, F);
  }
  function S({ schema: N, self: F }) {
    if (typeof N == "boolean")
      return !N;
    for (const K in N)
      if (F.RULES.all[K])
        return !0;
    return !1;
  }
  function u(N) {
    return typeof N.schema != "boolean";
  }
  function f(N, F) {
    const { schema: K, gen: J, opts: te } = N;
    te.$comment && K.$comment && D(N), M(N), R(N);
    const re = J.const("_errs", c.default.errors);
    x(N, re), J.var(F, (0, a._)`${re} === ${c.default.errors}`);
  }
  function b(N) {
    (0, d.checkUnknownRules)(N), E(N);
  }
  function x(N, F) {
    if (N.opts.jtd)
      return W(N, [], !1, F);
    const K = (0, t.getSchemaTypes)(N.schema), J = (0, t.coerceAndCheckDataType)(N, K);
    W(N, K, !J, F);
  }
  function E(N) {
    const { schema: F, errSchemaPath: K, opts: J, self: te } = N;
    F.$ref && J.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(F, te.RULES) && te.logger.warn(`$ref: keywords ignored in schema at path "${K}"`);
  }
  function A(N) {
    const { schema: F, opts: K } = N;
    F.default !== void 0 && K.useDefaults && K.strictSchema && (0, d.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function M(N) {
    const F = N.schema[N.opts.schemaId];
    F && (N.baseId = (0, l.resolveUrl)(N.opts.uriResolver, N.baseId, F));
  }
  function R(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: N, schemaEnv: F, schema: K, errSchemaPath: J, opts: te }) {
    const re = K.$comment;
    if (te.$comment === !0)
      N.code((0, a._)`${c.default.self}.logger.log(${re})`);
    else if (typeof te.$comment == "function") {
      const ue = (0, a.str)`${J}/$comment`, we = N.scopeValue("root", { ref: F.root });
      N.code((0, a._)`${c.default.self}.opts.$comment(${re}, ${ue}, ${we}.schema)`);
    }
  }
  function j(N) {
    const { gen: F, schemaEnv: K, validateName: J, ValidationError: te, opts: re } = N;
    K.$async ? F.if((0, a._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, a._)`new ${te}(${c.default.vErrors})`)) : (F.assign((0, a._)`${J}.errors`, c.default.vErrors), re.unevaluated && L(N), F.return((0, a._)`${c.default.errors} === 0`));
  }
  function L({ gen: N, evaluated: F, props: K, items: J }) {
    K instanceof a.Name && N.assign((0, a._)`${F}.props`, K), J instanceof a.Name && N.assign((0, a._)`${F}.items`, J);
  }
  function W(N, F, K, J) {
    const { gen: te, schema: re, data: ue, allErrors: we, opts: $e, self: be } = N, { RULES: me } = be;
    if (re.$ref && ($e.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(re, me))) {
      te.block(() => B(N, "$ref", me.all.$ref.definition));
      return;
    }
    $e.jtd || Z(N, F), te.block(() => {
      for (const Ce of me.rules)
        dt(Ce);
      dt(me.post);
    });
    function dt(Ce) {
      (0, n.shouldUseGroup)(re, Ce) && (Ce.type ? (te.if((0, r.checkDataType)(Ce.type, ue, $e.strictNumbers)), ne(N, Ce), F.length === 1 && F[0] === Ce.type && K && (te.else(), (0, r.reportTypeError)(N)), te.endIf()) : ne(N, Ce), we || te.if((0, a._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function ne(N, F) {
    const { gen: K, schema: J, opts: { useDefaults: te } } = N;
    te && (0, i.assignDefaults)(N, F.type), K.block(() => {
      for (const re of F.rules)
        (0, n.shouldUseRule)(J, re) && B(N, re.keyword, re.definition, F.type);
    });
  }
  function Z(N, F) {
    N.schemaEnv.meta || !N.opts.strictTypes || (oe(N, F), N.opts.allowUnionTypes || G(N, F), O(N, N.dataTypes));
  }
  function oe(N, F) {
    if (F.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = F;
        return;
      }
      F.forEach((K) => {
        I(N.dataTypes, K) || C(N, `type "${K}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), y(N, F);
    }
  }
  function G(N, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && C(N, "use allowUnionTypes to allow union type keyword");
  }
  function O(N, F) {
    const K = N.self.RULES.all;
    for (const J in K) {
      const te = K[J];
      if (typeof te == "object" && (0, n.shouldUseRule)(N.schema, te)) {
        const { type: re } = te.definition;
        re.length && !re.some((ue) => U(F, ue)) && C(N, `missing type "${re.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function U(N, F) {
    return N.includes(F) || F === "number" && N.includes("integer");
  }
  function I(N, F) {
    return N.includes(F) || F === "integer" && N.includes("number");
  }
  function y(N, F) {
    const K = [];
    for (const J of N.dataTypes)
      I(F, J) ? K.push(J) : F.includes("integer") && J === "number" && K.push("integer");
    N.dataTypes = K;
  }
  function C(N, F) {
    const K = N.schemaEnv.baseId + N.errSchemaPath;
    F += ` at "${K}" (strictTypes)`, (0, d.checkStrictMode)(N, F, N.opts.strictTypes);
  }
  class P {
    constructor(F, K, J) {
      if ((0, o.validateKeywordUsage)(F, K, J), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = J, this.data = F.data, this.schema = F.schema[J], this.$data = K.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(F, this.schema, J, this.$data), this.schemaType = K.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = K, this.$data)
        this.schemaCode = F.gen.const("vSchema", ee(this.$data, F));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, K.schemaType, K.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(K.schemaType)}`);
      ("code" in K ? K.trackErrors : K.errors !== !1) && (this.errsCount = F.gen.const("_errs", c.default.errors));
    }
    result(F, K, J) {
      this.failResult((0, a.not)(F), K, J);
    }
    failResult(F, K, J) {
      this.gen.if(F), J ? J() : this.error(), K ? (this.gen.else(), K(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(F, K) {
      this.failResult((0, a.not)(F), void 0, K);
    }
    fail(F) {
      if (F === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(F), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(F) {
      if (!this.$data)
        return this.fail(F);
      const { schemaCode: K } = this;
      this.fail((0, a._)`${K} !== undefined && (${(0, a.or)(this.invalid$data(), F)})`);
    }
    error(F, K, J) {
      if (K) {
        this.setParams(K), this._error(F, J), this.setParams({});
        return;
      }
      this._error(F, J);
    }
    _error(F, K) {
      (F ? g.reportExtraError : g.reportError)(this, this.def.error, K);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(F) {
      this.allErrors || this.gen.if(F);
    }
    setParams(F, K) {
      K ? Object.assign(this.params, F) : this.params = F;
    }
    block$data(F, K, J = a.nil) {
      this.gen.block(() => {
        this.check$data(F, J), K();
      });
    }
    check$data(F = a.nil, K = a.nil) {
      if (!this.$data)
        return;
      const { gen: J, schemaCode: te, schemaType: re, def: ue } = this;
      J.if((0, a.or)((0, a._)`${te} === undefined`, K)), F !== a.nil && J.assign(F, !0), (re.length || ue.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), F !== a.nil && J.assign(F, !1)), J.else();
    }
    invalid$data() {
      const { gen: F, schemaCode: K, schemaType: J, def: te, it: re } = this;
      return (0, a.or)(ue(), we());
      function ue() {
        if (J.length) {
          if (!(K instanceof a.Name))
            throw new Error("ajv implementation error");
          const $e = Array.isArray(J) ? J : [J];
          return (0, a._)`${(0, r.checkDataTypes)($e, K, re.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function we() {
        if (te.validateSchema) {
          const $e = F.scopeValue("validate$data", { ref: te.validateSchema });
          return (0, a._)`!${$e}(${K})`;
        }
        return a.nil;
      }
    }
    subschema(F, K) {
      const J = (0, s.getSubschema)(this.it, F);
      (0, s.extendSubschemaData)(J, this.it, F), (0, s.extendSubschemaMode)(J, F);
      const te = { ...this.it, ...J, items: void 0, props: void 0 };
      return k(te, K), te;
    }
    mergeEvaluated(F, K) {
      const { it: J, gen: te } = this;
      J.opts.unevaluated && (J.props !== !0 && F.props !== void 0 && (J.props = d.mergeEvaluated.props(te, F.props, J.props, K)), J.items !== !0 && F.items !== void 0 && (J.items = d.mergeEvaluated.items(te, F.items, J.items, K)));
    }
    mergeValidEvaluated(F, K) {
      const { it: J, gen: te } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return te.if(K, () => this.mergeEvaluated(F, a.Name)), !0;
    }
  }
  je.KeywordCxt = P;
  function B(N, F, K, J) {
    const te = new P(N, K, F);
    "code" in K ? K.code(te, J) : te.$data && K.validate ? (0, o.funcKeywordCode)(te, K) : "macro" in K ? (0, o.macroKeywordCode)(te, K) : (K.compile || K.validate) && (0, o.funcKeywordCode)(te, K);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(N, { dataLevel: F, dataNames: K, dataPathArr: J }) {
    let te, re;
    if (N === "")
      return c.default.rootData;
    if (N[0] === "/") {
      if (!H.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      te = N, re = c.default.rootData;
    } else {
      const be = Q.exec(N);
      if (!be)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const me = +be[1];
      if (te = be[2], te === "#") {
        if (me >= F)
          throw new Error($e("property/index", me));
        return J[F - me];
      }
      if (me > F)
        throw new Error($e("data", me));
      if (re = K[F - me], !te)
        return re;
    }
    let ue = re;
    const we = te.split("/");
    for (const be of we)
      be && (re = (0, a._)`${re}${(0, a.getProperty)((0, d.unescapeJsonPointer)(be))}`, ue = (0, a._)`${ue} && ${re}`);
    return ue;
    function $e(be, me) {
      return `Cannot access ${be} ${me} levels up, current level is ${F}`;
    }
  }
  return je.getData = ee, je;
}
var Lt = {}, Jo;
function Zr() {
  if (Jo) return Lt;
  Jo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Lt.default = e, Lt;
}
var qt = {}, Yo;
function Zn() {
  if (Yo) return qt;
  Yo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var _e = {}, Xo;
function Qn() {
  if (Xo) return _e;
  Xo = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Zr(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Yn(), i = /* @__PURE__ */ ce(), o = /* @__PURE__ */ Xn();
  class s {
    constructor($) {
      var m;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof $.schema == "object" && (k = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (m = $.baseId) !== null && m !== void 0 ? m : (0, r.normalizeId)(k?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = s;
  function a(h) {
    const $ = d.call(this, h);
    if ($)
      return $;
    const m = (0, r.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: k, lines: S } = this.opts.code, { ownProperties: u } = this.opts, f = new e.CodeGen(this.scope, { es5: k, lines: S, ownProperties: u });
    let b;
    h.$async && (b = f.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = f.scopeName("validate");
    h.validateName = x;
    const E = {
      gen: f,
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
      topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: x,
      ValidationError: b,
      schema: h.schema,
      schemaEnv: h,
      rootId: m,
      baseId: h.baseId || m,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(h), (0, o.validateFunctionCode)(E), f.optimize(this.opts.code.optimize);
      const M = f.toString();
      A = `${f.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (A = this.opts.code.process(A, h));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(x, { ref: D }), D.errors = null, D.schema = h.schema, D.schemaEnv = h, h.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: x, validateCode: M, scopeValues: f._values }), this.opts.unevaluated) {
        const { props: j, items: L } = E;
        D.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: L instanceof e.Name ? void 0 : L,
          dynamicProps: j instanceof e.Name,
          dynamicItems: L instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return h.validate = D, h;
    } catch (M) {
      throw delete h.validate, delete h.validateName, A && this.logger.error("Error compiling schema, function code:", A), M;
    } finally {
      this._compilations.delete(h);
    }
  }
  _e.compileSchema = a;
  function c(h, $, m) {
    var k;
    m = (0, r.resolveUrl)(this.opts.uriResolver, $, m);
    const S = h.refs[m];
    if (S)
      return S;
    let u = w.call(this, h, m);
    if (u === void 0) {
      const f = (k = h.localRefs) === null || k === void 0 ? void 0 : k[m], { schemaId: b } = this.opts;
      f && (u = new s({ schema: f, schemaId: b, root: h, baseId: $ }));
    }
    if (u !== void 0)
      return h.refs[m] = l.call(this, u);
  }
  _e.resolveRef = c;
  function l(h) {
    return (0, r.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : a.call(this, h);
  }
  function d(h) {
    for (const $ of this._compilations)
      if (g($, h))
        return $;
  }
  _e.getCompilingSchema = d;
  function g(h, $) {
    return h.schema === $.schema && h.root === $.root && h.baseId === $.baseId;
  }
  function w(h, $) {
    let m;
    for (; typeof (m = this.refs[$]) == "string"; )
      $ = m;
    return m || this.schemas[$] || p.call(this, h, $);
  }
  function p(h, $) {
    const m = this.opts.uriResolver.parse($), k = (0, r._getFullPath)(this.opts.uriResolver, m);
    let S = (0, r.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && k === S)
      return _.call(this, m, h);
    const u = (0, r.normalizeId)(k), f = this.refs[u] || this.schemas[u];
    if (typeof f == "string") {
      const b = p.call(this, h, f);
      return typeof b?.schema != "object" ? void 0 : _.call(this, m, b);
    }
    if (typeof f?.schema == "object") {
      if (f.validate || a.call(this, f), u === (0, r.normalizeId)($)) {
        const { schema: b } = f, { schemaId: x } = this.opts, E = b[x];
        return E && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, E)), new s({ schema: b, schemaId: x, root: h, baseId: S });
      }
      return _.call(this, m, f);
    }
  }
  _e.resolveSchema = p;
  const v = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(h, { baseId: $, schema: m, root: k }) {
    var S;
    if (((S = h.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const b of h.fragment.slice(1).split("/")) {
      if (typeof m == "boolean")
        return;
      const x = m[(0, i.unescapeFragment)(b)];
      if (x === void 0)
        return;
      m = x;
      const E = typeof m == "object" && m[this.opts.schemaId];
      !v.has(b) && E && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, E));
    }
    let u;
    if (typeof m != "boolean" && m.$ref && !(0, i.schemaHasRulesButRef)(m, this.RULES)) {
      const b = (0, r.resolveUrl)(this.opts.uriResolver, $, m.$ref);
      u = p.call(this, k, b);
    }
    const { schemaId: f } = this.opts;
    if (u = u || new s({ schema: m, schemaId: f, root: k, baseId: $ }), u.schema !== u.root.schema)
      return u;
  }
  return _e;
}
const Fc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", zc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ic = "object", jc = ["$data"], Dc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Lc = !1, qc = {
  $id: Fc,
  description: zc,
  type: Ic,
  required: jc,
  properties: Dc,
  additionalProperties: Lc
};
var Bt = {}, xt = { exports: {} }, br, Zo;
function ia() {
  if (Zo) return br;
  Zo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(u) {
    let f = "", b = 0, x = 0;
    for (x = 0; x < u.length; x++)
      if (b = u[x].charCodeAt(0), b !== 48) {
        if (!(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
          return "";
        f += u[x];
        break;
      }
    for (x += 1; x < u.length; x++) {
      if (b = u[x].charCodeAt(0), !(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
        return "";
      f += u[x];
    }
    return f;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(u) {
    return u.length = 0, !0;
  }
  function c(u, f, b) {
    if (u.length) {
      const x = o(u);
      if (x !== "")
        f.push(x);
      else
        return b.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function l(u) {
    let f = 0;
    const b = { error: !1, address: "", zone: "" }, x = [], E = [];
    let A = !1, M = !1, R = c;
    for (let D = 0; D < u.length; D++) {
      const j = u[D];
      if (!(j === "[" || j === "]"))
        if (j === ":") {
          if (A === !0 && (M = !0), !R(E, x, b))
            break;
          if (++f > 7) {
            b.error = !0;
            break;
          }
          D > 0 && u[D - 1] === ":" && (A = !0), x.push(":");
          continue;
        } else if (j === "%") {
          if (!R(E, x, b))
            break;
          R = a;
        } else {
          E.push(j);
          continue;
        }
    }
    return E.length && (R === a ? b.zone = E.join("") : M ? x.push(E.join("")) : x.push(o(E))), b.address = x.join(""), b;
  }
  function d(u) {
    if (g(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const f = l(u);
    if (f.error)
      return { host: u, isIPV6: !1 };
    {
      let b = f.address, x = f.address;
      return f.zone && (b += "%" + f.zone, x += "%25" + f.zone), { host: b, isIPV6: !0, escapedHost: x };
    }
  }
  function g(u, f) {
    let b = 0;
    for (let x = 0; x < u.length; x++)
      u[x] === f && b++;
    return b;
  }
  function w(u) {
    let f = u;
    const b = [];
    let x = -1, E = 0;
    for (; E = f.length; ) {
      if (E === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          b.push("/");
          break;
        } else {
          b.push(f);
          break;
        }
      } else if (E === 2) {
        if (f[0] === ".") {
          if (f[1] === ".")
            break;
          if (f[1] === "/") {
            f = f.slice(2);
            continue;
          }
        } else if (f[0] === "/" && (f[1] === "." || f[1] === "/")) {
          b.push("/");
          break;
        }
      } else if (E === 3 && f === "/..") {
        b.length !== 0 && b.pop(), b.push("/");
        break;
      }
      if (f[0] === ".") {
        if (f[1] === ".") {
          if (f[2] === "/") {
            f = f.slice(3);
            continue;
          }
        } else if (f[1] === "/") {
          f = f.slice(2);
          continue;
        }
      } else if (f[0] === "/" && f[1] === ".") {
        if (f[2] === "/") {
          f = f.slice(2);
          continue;
        } else if (f[2] === "." && f[3] === "/") {
          f = f.slice(3), b.length !== 0 && b.pop();
          continue;
        }
      }
      if ((x = f.indexOf("/", 1)) === -1) {
        b.push(f);
        break;
      } else
        b.push(f.slice(0, x)), f = f.slice(x);
    }
    return b.join("");
  }
  const p = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, v = /[@/?#:]/g, _ = /[@/?#]/g;
  function h(u, f) {
    const b = f ? _ : v;
    return b.lastIndex = 0, u.replace(b, (x) => p[x]);
  }
  function $(u, f = !1) {
    if (u.indexOf("%") === -1)
      return u;
    let b = "";
    for (let x = 0; x < u.length; x++) {
      if (u[x] === "%" && x + 2 < u.length) {
        const E = u.slice(x + 1, x + 3);
        if (n(E)) {
          const A = E.toUpperCase(), M = String.fromCharCode(parseInt(A, 16));
          f && r(M) ? b += M : b += "%" + A, x += 2;
          continue;
        }
      }
      b += u[x];
    }
    return b;
  }
  function m(u) {
    let f = "";
    for (let b = 0; b < u.length; b++) {
      if (u[b] === "%" && b + 2 < u.length) {
        const x = u.slice(b + 1, b + 3);
        if (n(x)) {
          const E = x.toUpperCase(), A = String.fromCharCode(parseInt(E, 16));
          A !== "." && r(A) ? f += A : f += "%" + E, b += 2;
          continue;
        }
      }
      i(u[b]) ? f += u[b] : f += escape(u[b]);
    }
    return f;
  }
  function k(u) {
    let f = "";
    for (let b = 0; b < u.length; b++) {
      if (u[b] === "%" && b + 2 < u.length) {
        const x = u.slice(b + 1, b + 3);
        if (n(x)) {
          f += "%" + x.toUpperCase(), b += 2;
          continue;
        }
      }
      f += escape(u[b]);
    }
    return f;
  }
  function S(u) {
    const f = [];
    if (u.userinfo !== void 0 && (f.push(u.userinfo), f.push("@")), u.host !== void 0) {
      let b = unescape(u.host);
      if (!t(b)) {
        const x = d(b);
        x.isIPV6 === !0 ? b = `[${x.escapedHost}]` : b = h(b, !1);
      }
      f.push(b);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (f.push(":"), f.push(String(u.port))), f.length ? f.join("") : void 0;
  }
  return br = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: h,
    normalizePercentEncoding: $,
    normalizePathEncoding: m,
    escapePreservingEscapes: k,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: d,
    stringArrayToHexStripped: o
  }, br;
}
var vr, Qo;
function Bc() {
  if (Qo) return vr;
  Qo = 1;
  const { isUUID: e } = ia(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(u) {
    return u.secure === !0 ? !0 : u.secure === !1 ? !1 : u.scheme ? u.scheme.length === 3 && (u.scheme[0] === "w" || u.scheme[0] === "W") && (u.scheme[1] === "s" || u.scheme[1] === "S") && (u.scheme[2] === "s" || u.scheme[2] === "S") : !1;
  }
  function o(u) {
    return u.host || (u.error = u.error || "HTTP URIs must have a host."), u;
  }
  function s(u) {
    const f = String(u.scheme).toLowerCase() === "https";
    return (u.port === (f ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = i(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (i(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [f, b] = u.resourceName.split("?");
      u.path = f && f !== "/" ? f : void 0, u.query = b, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, f) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const b = u.path.match(t);
    if (b) {
      const x = f.scheme || u.scheme || "urn";
      u.nid = b[1].toLowerCase(), u.nss = b[2];
      const E = `${x}:${f.nid || u.nid}`, A = S(E);
      u.path = void 0, A && (u = A.parse(u, f));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function d(u, f) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const b = f.scheme || u.scheme || "urn", x = u.nid.toLowerCase(), E = `${b}:${f.nid || x}`, A = S(E);
    A && (u = A.serialize(u, f));
    const M = u, R = u.nss;
    return M.path = `${x || f.nid}:${R}`, f.skipEscape = !0, M;
  }
  function g(u, f) {
    const b = u;
    return b.uuid = b.nss, b.nss = void 0, !f.tolerant && (!b.uuid || !e(b.uuid)) && (b.error = b.error || "UUID is not valid."), b;
  }
  function w(u) {
    const f = u;
    return f.nss = (u.uuid || "").toLowerCase(), f;
  }
  const p = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: s
    }
  ), v = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: p.domainHost,
      parse: o,
      serialize: s
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
  ), k = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: p,
      https: v,
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
          parse: g,
          serialize: w,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(k, null);
  function S(u) {
    return u && (k[
      /** @type {SchemeName} */
      u
    ] || k[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return vr = {
    wsIsSecure: i,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, vr;
}
var ei;
function Vc() {
  if (ei) return xt.exports;
  ei = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = ia(), { SCHEMES: l, getSchemeHandler: d } = Bc();
  function g(E, A) {
    return typeof E == "string" ? E = /** @type {T} */
    u(E, A) : typeof E == "object" && (E = /** @type {T} */
    S(_(E, A), A)), E;
  }
  function w(E, A, M) {
    const R = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, D = p(S(E, R), S(A, R), R, !0);
    return R.skipEscape = !0, _(D, R);
  }
  function p(E, A, M, R) {
    const D = {};
    return R || (E = S(_(E, M), M), A = S(_(A, M), M)), M = M || {}, !M.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? D.path = "/" + A.path : E.path ? D.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = E.path, A.query !== void 0 ? D.query = A.query : D.query = E.query), D.userinfo = E.userinfo, D.host = E.host, D.port = E.port), D.scheme = E.scheme), D.fragment = A.fragment, D;
  }
  function v(E, A, M) {
    const R = b(E, M), D = b(A, M);
    return R !== void 0 && D !== void 0 && R.toLowerCase() === D.toLowerCase();
  }
  function _(E, A) {
    const M = {
      host: E.host,
      scheme: E.scheme,
      userinfo: E.userinfo,
      port: E.port,
      path: E.path,
      query: E.query,
      nid: E.nid,
      nss: E.nss,
      uuid: E.uuid,
      fragment: E.fragment,
      reference: E.reference,
      resourceName: E.resourceName,
      secure: E.secure,
      error: ""
    }, R = Object.assign({}, A), D = [], j = d(R.scheme || M.scheme);
    j && j.serialize && j.serialize(M, R), M.path !== void 0 && (R.skipEscape ? M.path = r(M.path) : (M.path = o(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), R.reference !== "suffix" && M.scheme && D.push(M.scheme, ":");
    const L = n(M);
    if (L !== void 0 && (R.reference !== "suffix" && D.push("//"), D.push(L), M.path && M.path[0] !== "/" && D.push("/")), M.path !== void 0) {
      let W = M.path;
      !R.absolutePath && (!j || !j.absolutePath) && (W = t(W)), L === void 0 && W[0] === "/" && W[1] === "/" && (W = "/%2F" + W.slice(2)), D.push(W);
    }
    return M.query !== void 0 && D.push("?", M.query), M.fragment !== void 0 && D.push("#", M.fragment), D.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function m(E, A) {
    if (A[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function k(E, A) {
    const M = Object.assign({}, A), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, j = !1;
    M.reference === "suffix" && (M.scheme ? E = M.scheme + ":" + E : E = "//" + E);
    const L = E.match($);
    L !== null && L[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", D = !0);
    const W = E.match(h);
    if (W) {
      R.scheme = W[1], R.userinfo = W[3], R.host = W[4], R.port = parseInt(W[5], 10), R.path = W[6] || "", R.query = W[7], R.fragment = W[8], isNaN(R.port) && (R.port = W[5]);
      const ne = m(R, W);
      if (ne !== void 0 && (R.error = R.error || ne, D = !0), R.host)
        if (a(R.host) === !1) {
          const G = e(R.host);
          R.host = G.host.toLowerCase(), j = G.isIPV6;
        } else
          j = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== R.reference && (R.error = R.error || "URI is not a " + M.reference + " reference.");
      const Z = d(M.scheme || R.scheme);
      if (!M.unicodeSupport && (!Z || !Z.unicodeSupport) && R.host && (M.domainHost || Z && Z.domainHost) && j === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (oe) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + oe;
        }
      if ((!Z || Z && !Z.skipNormalize) && (E.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = s(unescape(R.host), j))), R.path && (R.path = i(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      Z && Z.parse && Z.parse(R, M);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: D };
  }
  function S(E, A) {
    return k(E, A).parsed;
  }
  function u(E, A) {
    return f(E, A).normalized;
  }
  function f(E, A) {
    const { parsed: M, malformedAuthorityOrPort: R } = k(E, A);
    return {
      normalized: R ? E : _(M, A),
      malformedAuthorityOrPort: R
    };
  }
  function b(E, A) {
    if (typeof E == "string") {
      const { normalized: M, malformedAuthorityOrPort: R } = f(E, A);
      return R ? void 0 : M;
    }
    if (typeof E == "object")
      return _(E, A);
  }
  const x = {
    SCHEMES: l,
    normalize: g,
    resolve: w,
    resolveComponent: p,
    equal: v,
    serialize: _,
    parse: S
  };
  return xt.exports = x, xt.exports.default = x, xt.exports.fastUri = x, xt.exports;
}
var ti;
function Uc() {
  if (ti) return Bt;
  ti = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = Vc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Bt.default = e, Bt;
}
var ni;
function Hc() {
  return ni || (ni = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Xn();
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
    const r = /* @__PURE__ */ Zr(), i = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ na(), s = /* @__PURE__ */ Qn(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Yn(), l = /* @__PURE__ */ Un(), d = /* @__PURE__ */ ce(), g = qc, w = /* @__PURE__ */ Uc(), p = (G, O) => new RegExp(G, O);
    p.code = "new RegExp";
    const v = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    }, $ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, m = 200;
    function k(G) {
      var O, U, I, y, C, P, B, H, Q, ee, N, F, K, J, te, re, ue, we, $e, be, me, dt, Ce, cr, lr;
      const kt = G.strict, dr = (O = G.code) === null || O === void 0 ? void 0 : O.optimize, ko = dr === !0 || dr === void 0 ? 1 : dr || 0, Co = (I = (U = G.code) === null || U === void 0 ? void 0 : U.regExp) !== null && I !== void 0 ? I : p, nc = (y = G.uriResolver) !== null && y !== void 0 ? y : w.default;
      return {
        strictSchema: (P = (C = G.strictSchema) !== null && C !== void 0 ? C : kt) !== null && P !== void 0 ? P : !0,
        strictNumbers: (H = (B = G.strictNumbers) !== null && B !== void 0 ? B : kt) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (Q = G.strictTypes) !== null && Q !== void 0 ? Q : kt) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (F = (N = G.strictTuples) !== null && N !== void 0 ? N : kt) !== null && F !== void 0 ? F : "log",
        strictRequired: (J = (K = G.strictRequired) !== null && K !== void 0 ? K : kt) !== null && J !== void 0 ? J : !1,
        code: G.code ? { ...G.code, optimize: ko, regExp: Co } : { optimize: ko, regExp: Co },
        loopRequired: (te = G.loopRequired) !== null && te !== void 0 ? te : m,
        loopEnum: (re = G.loopEnum) !== null && re !== void 0 ? re : m,
        meta: (ue = G.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (we = G.messages) !== null && we !== void 0 ? we : !0,
        inlineRefs: ($e = G.inlineRefs) !== null && $e !== void 0 ? $e : !0,
        schemaId: (be = G.schemaId) !== null && be !== void 0 ? be : "$id",
        addUsedSchema: (me = G.addUsedSchema) !== null && me !== void 0 ? me : !0,
        validateSchema: (dt = G.validateSchema) !== null && dt !== void 0 ? dt : !0,
        validateFormats: (Ce = G.validateFormats) !== null && Ce !== void 0 ? Ce : !0,
        unicodeRegExp: (cr = G.unicodeRegExp) !== null && cr !== void 0 ? cr : !0,
        int32range: (lr = G.int32range) !== null && lr !== void 0 ? lr : !0,
        uriResolver: nc
      };
    }
    class S {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...k(O) };
        const { es5: U, lines: I } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: U, lines: I }), this.logger = R(O.logger);
        const y = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, o.getRules)(), u.call(this, h, O, "NOT SUPPORTED"), u.call(this, $, O, "DEPRECATED", "warn"), this._metaOpts = A.call(this), O.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && E.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), b.call(this), O.validateFormats = y;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: U, schemaId: I } = this.opts;
        let y = g;
        I === "id" && (y = { ...g }, y.id = y.$id, delete y.$id), U && O && this.addMetaSchema(y, y[I], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[U] || O : void 0;
      }
      validate(O, U) {
        let I;
        if (typeof O == "string") {
          if (I = this.getSchema(O), !I)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          I = this.compile(O);
        const y = I(U);
        return "$async" in I || (this.errors = I.errors), y;
      }
      compile(O, U) {
        const I = this._addSchema(O, U);
        return I.validate || this._compileSchemaEnv(I);
      }
      compileAsync(O, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: I } = this.opts;
        return y.call(this, O, U);
        async function y(ee, N) {
          await C.call(this, ee.$schema);
          const F = this._addSchema(ee, N);
          return F.validate || P.call(this, F);
        }
        async function C(ee) {
          ee && !this.getSchema(ee) && await y.call(this, { $ref: ee }, !0);
        }
        async function P(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return B.call(this, N), await H.call(this, N.missingSchema), P.call(this, ee);
          }
        }
        function B({ missingSchema: ee, missingRef: N }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${N} cannot be resolved`);
        }
        async function H(ee) {
          const N = await Q.call(this, ee);
          this.refs[ee] || await C.call(this, N.$schema), this.refs[ee] || this.addSchema(N, ee, U);
        }
        async function Q(ee) {
          const N = this._loading[ee];
          if (N)
            return N;
          try {
            return await (this._loading[ee] = I(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, U, I, y = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const P of O)
            this.addSchema(P, void 0, I, y);
          return this;
        }
        let C;
        if (typeof O == "object") {
          const { schemaId: P } = this.opts;
          if (C = O[P], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${P} must be string`);
        }
        return U = (0, c.normalizeId)(U || C), this._checkUnique(U), this.schemas[U] = this._addSchema(O, I, U, y, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, U, I = this.opts.validateSchema) {
        return this.addSchema(O, U, !0, I), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, U) {
        if (typeof O == "boolean")
          return !0;
        let I;
        if (I = O.$schema, I !== void 0 && typeof I != "string")
          throw new Error("$schema must be a string");
        if (I = I || this.opts.defaultMeta || this.defaultMeta(), !I)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const y = this.validate(I, O);
        if (!y && U) {
          const C = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(C);
          else
            throw new Error(C);
        }
        return y;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let U;
        for (; typeof (U = f.call(this, O)) == "string"; )
          O = U;
        if (U === void 0) {
          const { schemaId: I } = this.opts, y = new s.SchemaEnv({ schema: {}, schemaId: I });
          if (U = s.resolveSchema.call(this, y, O), !U)
            return;
          this.refs[O] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
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
            const U = f.call(this, O);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const U = O;
            this._cache.delete(U);
            let I = O[this.opts.schemaId];
            return I && (I = (0, c.normalizeId)(I), delete this.schemas[I], delete this.refs[I]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(O) {
        for (const U of O)
          this.addKeyword(U);
        return this;
      }
      addKeyword(O, U) {
        let I;
        if (typeof O == "string")
          I = O, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = I);
        else if (typeof O == "object" && U === void 0) {
          if (U = O, I = U.keyword, Array.isArray(I) && !I.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, I, U), !U)
          return (0, d.eachItem)(I, (C) => L.call(this, C)), this;
        ne.call(this, U);
        const y = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, d.eachItem)(I, y.type.length === 0 ? (C) => L.call(this, C, y) : (C) => y.type.forEach((P) => L.call(this, C, y, P))), this;
      }
      getKeyword(O) {
        const U = this.RULES.all[O];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: U } = this;
        delete U.keywords[O], delete U.all[O];
        for (const I of U.rules) {
          const y = I.rules.findIndex((C) => C.keyword === O);
          y >= 0 && I.rules.splice(y, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[O] = U, this;
      }
      errorsText(O = this.errors, { separator: U = ", ", dataVar: I = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((y) => `${I}${y.instancePath} ${y.message}`).reduce((y, C) => y + U + C);
      }
      $dataMetaSchema(O, U) {
        const I = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const y of U) {
          const C = y.split("/").slice(1);
          let P = O;
          for (const B of C)
            P = P[B];
          for (const B in I) {
            const H = I[B];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, ee = P[B];
            Q && ee && (P[B] = oe(ee));
          }
        }
        return O;
      }
      _removeAllSchemas(O, U) {
        for (const I in O) {
          const y = O[I];
          (!U || U.test(I)) && (typeof y == "string" ? delete O[I] : y && !y.meta && (this._cache.delete(y.schema), delete O[I]));
        }
      }
      _addSchema(O, U, I, y = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let P;
        const { schemaId: B } = this.opts;
        if (typeof O == "object")
          P = O[B];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(O);
        if (H !== void 0)
          return H;
        I = (0, c.normalizeId)(P || I);
        const Q = c.getSchemaRefs.call(this, O, I);
        return H = new s.SchemaEnv({ schema: O, schemaId: B, meta: U, baseId: I, localRefs: Q }), this._cache.set(H.schema, H), C && !I.startsWith("#") && (I && this._checkUnique(I), this.refs[I] = H), y && this.validateSchema(O, !0), H;
      }
      _checkUnique(O) {
        if (this.schemas[O] || this.refs[O])
          throw new Error(`schema with key or id "${O}" already exists`);
      }
      _compileSchemaEnv(O) {
        if (O.meta ? this._compileMetaSchema(O) : s.compileSchema.call(this, O), !O.validate)
          throw new Error("ajv implementation error");
        return O.validate;
      }
      _compileMetaSchema(O) {
        const U = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, O);
        } finally {
          this.opts = U;
        }
      }
    }
    S.ValidationError = r.default, S.MissingRefError = i.default, e.default = S;
    function u(G, O, U, I = "error") {
      for (const y in G) {
        const C = y;
        C in O && this.logger[I](`${U}: option ${y}. ${G[C]}`);
      }
    }
    function f(G) {
      return G = (0, c.normalizeId)(G), this.schemas[G] || this.refs[G];
    }
    function b() {
      const G = this.opts.schemas;
      if (G)
        if (Array.isArray(G))
          this.addSchema(G);
        else
          for (const O in G)
            this.addSchema(G[O], O);
    }
    function x() {
      for (const G in this.opts.formats) {
        const O = this.opts.formats[G];
        O && this.addFormat(G, O);
      }
    }
    function E(G) {
      if (Array.isArray(G)) {
        this.addVocabulary(G);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const O in G) {
        const U = G[O];
        U.keyword || (U.keyword = O), this.addKeyword(U);
      }
    }
    function A() {
      const G = { ...this.opts };
      for (const O of v)
        delete G[O];
      return G;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function R(G) {
      if (G === !1)
        return M;
      if (G === void 0)
        return console;
      if (G.log && G.warn && G.error)
        return G;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(G, O) {
      const { RULES: U } = this;
      if ((0, d.eachItem)(G, (I) => {
        if (U.keywords[I])
          throw new Error(`Keyword ${I} is already defined`);
        if (!D.test(I))
          throw new Error(`Keyword ${I} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function L(G, O, U) {
      var I;
      const y = O?.post;
      if (U && y)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let P = y ? C.post : C.rules.find(({ type: H }) => H === U);
      if (P || (P = { type: U, rules: [] }, C.rules.push(P)), C.keywords[G] = !0, !O)
        return;
      const B = {
        keyword: G,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? W.call(this, P, B, O.before) : P.rules.push(B), C.all[G] = B, (I = O.implements) === null || I === void 0 || I.forEach((H) => this.addKeyword(H));
    }
    function W(G, O, U) {
      const I = G.rules.findIndex((y) => y.keyword === U);
      I >= 0 ? G.rules.splice(I, 0, O) : (G.rules.push(O), this.logger.warn(`rule ${U} is not defined`));
    }
    function ne(G) {
      let { metaSchema: O } = G;
      O !== void 0 && (G.$data && this.opts.$data && (O = oe(O)), G.validateSchema = this.compile(O, !0));
    }
    const Z = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function oe(G) {
      return { anyOf: [G, Z] };
    }
  })(fr)), fr;
}
var Vt = {}, Ut = {}, Ht = {}, ri;
function Kc() {
  if (ri) return Ht;
  ri = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ht.default = e, Ht;
}
var Ge = {}, oi;
function Qr() {
  if (oi) return Ge;
  oi = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.callRef = Ge.getValidate = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), i = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ ce(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: d, schema: g, it: w } = l, { baseId: p, schemaEnv: v, validateName: _, opts: h, self: $ } = w, { root: m } = v;
      if ((g === "#" || g === "#/") && p === m.baseId)
        return S();
      const k = i.resolveRef.call($, m, p, g);
      if (k === void 0)
        throw new e.default(w.opts.uriResolver, p, g);
      if (k instanceof i.SchemaEnv)
        return u(k);
      return f(k);
      function S() {
        if (v === m)
          return c(l, _, v, v.$async);
        const b = d.scopeValue("root", { ref: m });
        return c(l, (0, n._)`${b}.validate`, m, m.$async);
      }
      function u(b) {
        const x = a(l, b);
        c(l, x, b, b.$async);
      }
      function f(b) {
        const x = d.scopeValue("schema", h.code.source === !0 ? { ref: b, code: (0, n.stringify)(b) } : { ref: b }), E = d.name("valid"), A = l.subschema({
          schema: b,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: g
        }, E);
        l.mergeEvaluated(A), l.ok(E);
      }
    }
  };
  function a(l, d) {
    const { gen: g } = l;
    return d.validate ? g.scopeValue("validate", { ref: d.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: d })}.validate`;
  }
  Ge.getValidate = a;
  function c(l, d, g, w) {
    const { gen: p, it: v } = l, { allErrors: _, schemaEnv: h, opts: $ } = v, m = $.passContext ? r.default.this : n.nil;
    w ? k() : S();
    function k() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const b = p.let("valid");
      p.try(() => {
        p.code((0, n._)`await ${(0, t.callValidateCode)(l, d, m)}`), f(d), _ || p.assign(b, !0);
      }, (x) => {
        p.if((0, n._)`!(${x} instanceof ${v.ValidationError})`, () => p.throw(x)), u(x), _ || p.assign(b, !1);
      }), l.ok(b);
    }
    function S() {
      l.result((0, t.callValidateCode)(l, d, m), () => f(d), () => u(d));
    }
    function u(b) {
      const x = (0, n._)`${b}.errors`;
      p.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${x} : ${r.default.vErrors}.concat(${x})`), p.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function f(b) {
      var x;
      if (!v.opts.unevaluated)
        return;
      const E = (x = g?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (v.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (v.props = o.mergeEvaluated.props(p, E.props, v.props));
        else {
          const A = p.var("props", (0, n._)`${b}.evaluated.props`);
          v.props = o.mergeEvaluated.props(p, A, v.props, n.Name);
        }
      if (v.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (v.items = o.mergeEvaluated.items(p, E.items, v.items));
        else {
          const A = p.var("items", (0, n._)`${b}.evaluated.items`);
          v.items = o.mergeEvaluated.items(p, A, v.items, n.Name);
        }
    }
  }
  return Ge.callRef = c, Ge.default = s, Ge;
}
var ii;
function Gc() {
  if (ii) return Ut;
  ii = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kc(), t = /* @__PURE__ */ Qr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ut.default = n, Ut;
}
var Kt = {}, Gt = {}, si;
function Wc() {
  if (si) return Gt;
  si = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: o, schemaCode: s }) => (0, e.str)`must be ${n[o].okStr} ${s}`,
    params: ({ keyword: o, schemaCode: s }) => (0, e._)`{comparison: ${n[o].okStr}, limit: ${s}}`
  }, i = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(o) {
      const { keyword: s, data: a, schemaCode: c } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${c} || isNaN(${a})`);
    }
  };
  return Gt.default = i, Gt;
}
var Wt = {}, ai;
function Jc() {
  if (ai) return Wt;
  ai = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
      const { gen: i, data: o, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, l = i.let("res"), d = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      r.fail$data((0, e._)`(${s} === 0 || (${l} = ${o}/${s}, ${d}))`);
    }
  };
  return Wt.default = n, Wt;
}
var Jt = {}, Yt = {}, ci;
function Yc() {
  if (ci) return Yt;
  ci = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Yt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Yt;
}
var li;
function Xc() {
  if (li) return Jt;
  li = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Yc(), i = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: s }) {
        const a = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: s, data: a, schemaCode: c, it: l } = o, d = s === "maxLength" ? e.operators.GT : e.operators.LT, g = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${g} ${d} ${c}`);
    }
  };
  return Jt.default = i, Jt;
}
var Xt = {}, di;
function Zc() {
  if (di) return Xt;
  di = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ie(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: d, it: g } = o, w = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: p } = g.opts.code, v = p.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, p), _ = s.let("valid");
        s.try(() => s.assign(_, (0, n._)`${v}(${d}, ${w}).test(${a})`), () => s.assign(_, !1)), o.fail$data((0, n._)`!${_}`);
      } else {
        const p = (0, e.usePattern)(o, l);
        o.fail$data((0, n._)`!${p}.test(${a})`);
      }
    }
  };
  return Xt.default = i, Xt;
}
var Zt = {}, ui;
function Qc() {
  if (ui) return Zt;
  ui = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const o = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${i} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: o, schemaCode: s } = r, a = i === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${o}).length ${a} ${s}`);
    }
  };
  return Zt.default = n, Zt;
}
var Qt = {}, fi;
function el() {
  if (fi) return Qt;
  fi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: c, data: l, $data: d, it: g } = o, { opts: w } = g;
      if (!d && a.length === 0)
        return;
      const p = a.length >= w.loopRequired;
      if (g.allErrors ? v() : _(), w.strictRequired) {
        const m = o.parentSchema.properties, { definedProperties: k } = o.it;
        for (const S of a)
          if (m?.[S] === void 0 && !k.has(S)) {
            const u = g.schemaEnv.baseId + g.errSchemaPath, f = `required property "${S}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(g, f, g.opts.strictRequired);
          }
      }
      function v() {
        if (p || d)
          o.block$data(t.nil, h);
        else
          for (const m of a)
            (0, e.checkReportMissingProp)(o, m);
      }
      function _() {
        const m = s.let("missing");
        if (p || d) {
          const k = s.let("valid", !0);
          o.block$data(k, () => $(m, k)), o.ok(k);
        } else
          s.if((0, e.checkMissingProp)(o, a, m)), (0, e.reportMissingProp)(o, m), s.else();
      }
      function h() {
        s.forOf("prop", c, (m) => {
          o.setParams({ missingProperty: m }), s.if((0, e.noPropertyInData)(s, l, m, w.ownProperties), () => o.error());
        });
      }
      function $(m, k) {
        o.setParams({ missingProperty: m }), s.forOf(m, c, () => {
          s.assign(k, (0, e.propertyInData)(s, l, m, w.ownProperties)), s.if((0, t.not)(k), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Qt.default = i, Qt;
}
var en = {}, pi;
function tl() {
  if (pi) return en;
  pi = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const o = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${i} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: o, schemaCode: s } = r, a = i === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${o}.length ${a} ${s}`);
    }
  };
  return en.default = n, en;
}
var tn = {}, nn = {}, hi;
function eo() {
  if (hi) return nn;
  hi = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = oa();
  return e.code = 'require("ajv/dist/runtime/equal").default', nn.default = e, nn;
}
var mi;
function nl() {
  if (mi) return tn;
  mi = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ eo(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: d, parentSchema: g, schemaCode: w, it: p } = s;
      if (!l && !d)
        return;
      const v = a.let("valid"), _ = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(v, h, (0, t._)`${w} === false`), s.ok(v);
      function h() {
        const S = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        s.setParams({ i: S, j: u }), a.assign(v, !0), a.if((0, t._)`${S} > 1`, () => ($() ? m : k)(S, u));
      }
      function $() {
        return _.length > 0 && !_.some((S) => S === "object" || S === "array");
      }
      function m(S, u) {
        const f = a.name("item"), b = (0, e.checkDataTypes)(_, f, p.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(f, (0, t._)`${c}[${S}]`), a.if(b, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${f} == "string"`, (0, t._)`${f} += "_"`), a.if((0, t._)`typeof ${x}[${f}] == "number"`, () => {
            a.assign(u, (0, t._)`${x}[${f}]`), s.error(), a.assign(v, !1).break();
          }).code((0, t._)`${x}[${f}] = ${S}`);
        });
      }
      function k(S, u) {
        const f = (0, n.useFunc)(a, r.default), b = a.name("outer");
        a.label(b).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${u} = ${S}; ${u}--;`, () => a.if((0, t._)`${f}(${c}[${S}], ${c}[${u}])`, () => {
          s.error(), a.assign(v, !1).break(b);
        })));
      }
    }
  };
  return tn.default = o, tn;
}
var rn = {}, gi;
function rl() {
  if (gi) return rn;
  gi = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ eo(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schemaCode: l, schema: d } = o;
      c || d && typeof d == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${l})`) : o.fail((0, e._)`${d} !== ${a}`);
    }
  };
  return rn.default = i, rn;
}
var on = {}, yi;
function ol() {
  if (yi) return on;
  yi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ eo(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: d, it: g } = o;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const w = l.length >= g.opts.loopEnum;
      let p;
      const v = () => p ?? (p = (0, t.useFunc)(s, n.default));
      let _;
      if (w || c)
        _ = s.let("valid"), o.block$data(_, h);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const m = s.const("vSchema", d);
        _ = (0, e.or)(...l.map((k, S) => $(m, S)));
      }
      o.pass(_);
      function h() {
        s.assign(_, !1), s.forOf("v", d, (m) => s.if((0, e._)`${v()}(${a}, ${m})`, () => s.assign(_, !0).break()));
      }
      function $(m, k) {
        const S = l[k];
        return typeof S == "object" && S !== null ? (0, e._)`${v()}(${a}, ${m}[${k}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return on.default = i, on;
}
var $i;
function il() {
  if ($i) return Kt;
  $i = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wc(), t = /* @__PURE__ */ Jc(), n = /* @__PURE__ */ Xc(), r = /* @__PURE__ */ Zc(), i = /* @__PURE__ */ Qc(), o = /* @__PURE__ */ el(), s = /* @__PURE__ */ tl(), a = /* @__PURE__ */ nl(), c = /* @__PURE__ */ rl(), l = /* @__PURE__ */ ol(), d = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    i.default,
    o.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    l.default
  ];
  return Kt.default = d, Kt;
}
var sn = {}, ut = {}, bi;
function sa() {
  if (bi) return ut;
  bi = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: s, it: a } = o, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, c);
    }
  };
  function i(o, s) {
    const { gen: a, schema: c, data: l, keyword: d, it: g } = o;
    g.items = !0;
    const w = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${w} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const v = a.var("valid", (0, e._)`${w} <= ${s.length}`);
      a.if((0, e.not)(v), () => p(v)), o.ok(v);
    }
    function p(v) {
      a.forRange("i", s.length, w, (_) => {
        o.subschema({ keyword: d, dataProp: _, dataPropType: t.Type.Num }, v), g.allErrors || a.if((0, e.not)(v), () => a.break());
      });
    }
  }
  return ut.validateAdditionalItems = i, ut.default = r, ut;
}
var an = {}, ft = {}, vi;
function aa() {
  if (vi) return ft;
  vi = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateTuple = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: s, it: a } = o;
      if (Array.isArray(s))
        return i(o, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && o.ok((0, n.validateArray)(o));
    }
  };
  function i(o, s, a = o.schema) {
    const { gen: c, parentSchema: l, data: d, keyword: g, it: w } = o;
    _(l), w.opts.unevaluated && a.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(c, a.length, w.items));
    const p = c.name("valid"), v = c.const("len", (0, e._)`${d}.length`);
    a.forEach((h, $) => {
      (0, t.alwaysValidSchema)(w, h) || (c.if((0, e._)`${v} > ${$}`, () => o.subschema({
        keyword: g,
        schemaProp: $,
        dataProp: $
      }, p)), o.ok(p));
    });
    function _(h) {
      const { opts: $, errSchemaPath: m } = w, k = a.length, S = k === h.minItems && (k === h.maxItems || h[s] === !1);
      if ($.strictTuples && !S) {
        const u = `"${g}" is ${k}-tuple, but minItems or maxItems/${s} are not specified or different at path "${m}"`;
        (0, t.checkStrictMode)(w, u, $.strictTuples);
      }
    }
  }
  return ft.validateTuple = i, ft.default = r, ft;
}
var wi;
function sl() {
  if (wi) return an;
  wi = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ aa(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return an.default = t, an;
}
var cn = {}, _i;
function al() {
  if (_i) return cn;
  _i = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ sa(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: l } = s, { prefixItems: d } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (d ? (0, r.validateAdditionalItems)(s, d) : s.ok((0, n.validateArray)(s)));
    }
  };
  return cn.default = o, cn;
}
var ln = {}, Si;
function cl() {
  if (Si) return ln;
  Si = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: i, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${i} valid item(s)` : (0, e.str)`must contain at least ${i} and no more than ${o} valid item(s)`,
      params: ({ params: { min: i, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${i}}` : (0, e._)`{minContains: ${i}, maxContains: ${o}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, data: c, it: l } = i;
      let d, g;
      const { minContains: w, maxContains: p } = a;
      l.opts.next ? (d = w === void 0 ? 1 : w, g = p) : d = 1;
      const v = o.const("len", (0, e._)`${c}.length`);
      if (i.setParams({ min: d, max: g }), g === void 0 && d === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && d > g) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let k = (0, e._)`${v} >= ${d}`;
        g !== void 0 && (k = (0, e._)`${k} && ${v} <= ${g}`), i.pass(k);
        return;
      }
      l.items = !0;
      const _ = o.name("valid");
      g === void 0 && d === 1 ? $(_, () => o.if(_, () => o.break())) : d === 0 ? (o.let(_, !0), g !== void 0 && o.if((0, e._)`${c}.length > 0`, h)) : (o.let(_, !1), h()), i.result(_, () => i.reset());
      function h() {
        const k = o.name("_valid"), S = o.let("count", 0);
        $(k, () => o.if(k, () => m(S)));
      }
      function $(k, S) {
        o.forRange("i", 0, v, (u) => {
          i.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, k), S();
        });
      }
      function m(k) {
        o.code((0, e._)`${k}++`), g === void 0 ? o.if((0, e._)`${k} >= ${d}`, () => o.assign(_, !0).break()) : (o.if((0, e._)`${k} > ${g}`, () => o.assign(_, !1).break()), d === 1 ? o.assign(_, !0) : o.if((0, e._)`${k} >= ${d}`, () => o.assign(_, !0)));
      }
    }
  };
  return ln.default = r, ln;
}
var wr = {}, ki;
function to() {
  return ki || (ki = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: d } }) => {
        const g = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${d} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: d, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
    depsCount: ${l},
    deps: ${d}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, d] = o(c);
        s(c, l), a(c, d);
      }
    };
    function o({ schema: c }) {
      const l = {}, d = {};
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const w = Array.isArray(c[g]) ? l : d;
        w[g] = c[g];
      }
      return [l, d];
    }
    function s(c, l = c.schema) {
      const { gen: d, data: g, it: w } = c;
      if (Object.keys(l).length === 0)
        return;
      const p = d.let("missing");
      for (const v in l) {
        const _ = l[v];
        if (_.length === 0)
          continue;
        const h = (0, r.propertyInData)(d, g, v, w.opts.ownProperties);
        c.setParams({
          property: v,
          depsCount: _.length,
          deps: _.join(", ")
        }), w.allErrors ? d.if(h, () => {
          for (const $ of _)
            (0, r.checkReportMissingProp)(c, $);
        }) : (d.if((0, t._)`${h} && (${(0, r.checkMissingProp)(c, _, p)})`), (0, r.reportMissingProp)(c, p), d.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: d, data: g, keyword: w, it: p } = c, v = d.name("valid");
      for (const _ in l)
        (0, n.alwaysValidSchema)(p, l[_]) || (d.if(
          (0, r.propertyInData)(d, g, _, p.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: w, schemaProp: _ }, v);
            c.mergeValidEvaluated(h, v);
          },
          () => d.var(v, !0)
          // TODO var
        ), c.ok(v));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(wr)), wr;
}
var dn = {}, Ci;
function ll() {
  if (Ci) return dn;
  Ci = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: c } = i;
      if ((0, t.alwaysValidSchema)(c, s))
        return;
      const l = o.name("valid");
      o.forIn("key", a, (d) => {
        i.setParams({ propertyName: d }), i.subschema({
          keyword: "propertyNames",
          data: d,
          dataTypes: ["string"],
          propertyName: d,
          compositeRule: !0
        }, l), o.if((0, e.not)(l), () => {
          i.error(!0), c.allErrors || o.break();
        });
      }), i.ok(l);
    }
  };
  return dn.default = r, dn;
}
var un = {}, Ei;
function ca() {
  if (Ei) return un;
  Ei = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce(), o = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: s }) => (0, t._)`{additionalProperty: ${s.additionalProperty}}`
    },
    code(s) {
      const { gen: a, schema: c, parentSchema: l, data: d, errsCount: g, it: w } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: p, opts: v } = w;
      if (w.props = !0, v.removeAdditional !== "all" && (0, r.alwaysValidSchema)(w, c))
        return;
      const _ = (0, e.allSchemaProperties)(l.properties), h = (0, e.allSchemaProperties)(l.patternProperties);
      $(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function $() {
        a.forIn("key", d, (f) => {
          !_.length && !h.length ? S(f) : a.if(m(f), () => S(f));
        });
      }
      function m(f) {
        let b;
        if (_.length > 8) {
          const x = (0, r.schemaRefOrVal)(w, l.properties, "properties");
          b = (0, e.isOwnProperty)(a, x, f);
        } else _.length ? b = (0, t.or)(..._.map((x) => (0, t._)`${f} === ${x}`)) : b = t.nil;
        return h.length && (b = (0, t.or)(b, ...h.map((x) => (0, t._)`${(0, e.usePattern)(s, x)}.test(${f})`))), (0, t.not)(b);
      }
      function k(f) {
        a.code((0, t._)`delete ${d}[${f}]`);
      }
      function S(f) {
        if (v.removeAdditional === "all" || v.removeAdditional && c === !1) {
          k(f);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: f }), s.error(), p || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(w, c)) {
          const b = a.name("valid");
          v.removeAdditional === "failing" ? (u(f, b, !1), a.if((0, t.not)(b), () => {
            s.reset(), k(f);
          })) : (u(f, b), p || a.if((0, t.not)(b), () => a.break()));
        }
      }
      function u(f, b, x) {
        const E = {
          keyword: "additionalProperties",
          dataProp: f,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, b);
      }
    }
  };
  return un.default = o, un;
}
var fn = {}, xi;
function dl() {
  if (xi) return fn;
  xi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ca(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: d } = o;
      d.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(d, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const h of g)
        d.definedProperties.add(h);
      d.opts.unevaluated && g.length && d.props !== !0 && (d.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), d.props));
      const w = g.filter((h) => !(0, n.alwaysValidSchema)(d, a[h]));
      if (w.length === 0)
        return;
      const p = s.name("valid");
      for (const h of w)
        v(h) ? _(h) : (s.if((0, t.propertyInData)(s, l, h, d.opts.ownProperties)), _(h), d.allErrors || s.else().var(p, !0), s.endIf()), o.it.definedProperties.add(h), o.ok(p);
      function v(h) {
        return d.opts.useDefaults && !d.compositeRule && a[h].default !== void 0;
      }
      function _(h) {
        o.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, p);
      }
    }
  };
  return fn.default = i, fn;
}
var pn = {}, Pi;
function ul() {
  if (Pi) return pn;
  Pi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: d } = o, { opts: g } = d, w = (0, e.allSchemaProperties)(a), p = w.filter((S) => (0, n.alwaysValidSchema)(d, a[S]));
      if (w.length === 0 || p.length === w.length && (!d.opts.unevaluated || d.props === !0))
        return;
      const v = g.strictSchema && !g.allowMatchingProperties && l.properties, _ = s.name("valid");
      d.props !== !0 && !(d.props instanceof t.Name) && (d.props = (0, r.evaluatedPropsToName)(s, d.props));
      const { props: h } = d;
      $();
      function $() {
        for (const S of w)
          v && m(S), d.allErrors ? k(S) : (s.var(_, !0), k(S), s.if(_));
      }
      function m(S) {
        for (const u in v)
          new RegExp(S).test(u) && (0, n.checkStrictMode)(d, `property ${u} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function k(S) {
        s.forIn("key", c, (u) => {
          s.if((0, t._)`${(0, e.usePattern)(o, S)}.test(${u})`, () => {
            const f = p.includes(S);
            f || o.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: u,
              dataPropType: r.Type.Str
            }, _), d.opts.unevaluated && h !== !0 ? s.assign((0, t._)`${h}[${u}]`, !0) : !f && !d.allErrors && s.if((0, t.not)(_), () => s.break());
          });
        });
      }
    }
  };
  return pn.default = i, pn;
}
var hn = {}, Ai;
function fl() {
  if (Ai) return hn;
  Ai = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if ((0, e.alwaysValidSchema)(o, i)) {
        n.fail();
        return;
      }
      const s = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), n.failResult(s, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return hn.default = t, hn;
}
var mn = {}, Ri;
function pl() {
  if (Ri) return mn;
  Ri = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return mn.default = t, mn;
}
var gn = {}, Ni;
function hl() {
  if (Ni) return gn;
  Ni = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: c } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const l = s, d = o.let("valid", !1), g = o.let("passing", null), w = o.name("_valid");
      i.setParams({ passing: g }), o.block(p), i.result(d, () => i.reset(), () => i.error(!0));
      function p() {
        l.forEach((v, _) => {
          let h;
          (0, t.alwaysValidSchema)(c, v) ? o.var(w, !0) : h = i.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, w), _ > 0 && o.if((0, e._)`${w} && ${d}`).assign(d, !1).assign(g, (0, e._)`[${g}, ${_}]`).else(), o.if(w, () => {
            o.assign(d, !0), o.assign(g, _), h && i.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return gn.default = r, gn;
}
var yn = {}, Mi;
function ml() {
  if (Mi) return yn;
  Mi = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const l = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(l);
      });
    }
  };
  return yn.default = t, yn;
}
var $n = {}, Ti;
function gl() {
  if (Ti) return $n;
  Ti = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: c } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const l = i(c, "then"), d = i(c, "else");
      if (!l && !d)
        return;
      const g = s.let("valid", !0), w = s.name("_valid");
      if (p(), o.reset(), l && d) {
        const _ = s.let("ifClause");
        o.setParams({ ifClause: _ }), s.if(w, v("then", _), v("else", _));
      } else l ? s.if(w, v("then")) : s.if((0, e.not)(w), v("else"));
      o.pass(g, () => o.error(!0));
      function p() {
        const _ = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        o.mergeEvaluated(_);
      }
      function v(_, h) {
        return () => {
          const $ = o.subschema({ keyword: _ }, w);
          s.assign(g, w), o.mergeValidEvaluated($, g), h ? s.assign(h, (0, e._)`${_}`) : o.setParams({ ifClause: _ });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return $n.default = r, $n;
}
var bn = {}, Oi;
function yl() {
  if (Oi) return bn;
  Oi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return bn.default = t, bn;
}
var Fi;
function $l() {
  if (Fi) return sn;
  Fi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sa(), t = /* @__PURE__ */ sl(), n = /* @__PURE__ */ aa(), r = /* @__PURE__ */ al(), i = /* @__PURE__ */ cl(), o = /* @__PURE__ */ to(), s = /* @__PURE__ */ ll(), a = /* @__PURE__ */ ca(), c = /* @__PURE__ */ dl(), l = /* @__PURE__ */ ul(), d = /* @__PURE__ */ fl(), g = /* @__PURE__ */ pl(), w = /* @__PURE__ */ hl(), p = /* @__PURE__ */ ml(), v = /* @__PURE__ */ gl(), _ = /* @__PURE__ */ yl();
  function h($ = !1) {
    const m = [
      // any
      d.default,
      g.default,
      w.default,
      p.default,
      v.default,
      _.default,
      // object
      s.default,
      a.default,
      o.default,
      c.default,
      l.default
    ];
    return $ ? m.push(t.default, r.default) : m.push(e.default, n.default), m.push(i.default), m;
  }
  return sn.default = h, sn;
}
var vn = {}, pt = {}, zi;
function la() {
  if (zi) return pt;
  zi = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Qr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, c) {
    const { gen: l, it: d } = a;
    d.schemaEnv.root.dynamicAnchors[c] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, w = d.errSchemaPath === "#" ? d.validateName : s(a);
    l.if((0, e._)`!${g}`, () => l.assign(g, w));
  }
  pt.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: c, schema: l, self: d } = a.it, { root: g, baseId: w, localRefs: p, meta: v } = c.root, { schemaId: _ } = d.opts, h = new n.SchemaEnv({ schema: l, schemaId: _, root: g, baseId: w, localRefs: p, meta: v });
    return n.compileSchema.call(d, h), (0, r.getValidate)(a, h);
  }
  return pt.default = i, pt;
}
var ht = {}, Ii;
function da() {
  if (Ii) return ht;
  Ii = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Qr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: c, it: l } = o;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const d = s.slice(1);
    if (l.allErrors)
      g();
    else {
      const p = a.let("valid", !1);
      g(p), o.ok(p);
    }
    function g(p) {
      if (l.schemaEnv.root.dynamicAnchors[d]) {
        const v = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`);
        a.if(v, w(v, p), w(l.validateName, p));
      } else
        w(l.validateName, p)();
    }
    function w(p, v) {
      return v ? () => a.block(() => {
        (0, n.callRef)(o, p), a.let(v, !0);
      }) : () => (0, n.callRef)(o, p);
    }
  }
  return ht.dynamicRef = i, ht.default = r, ht;
}
var wn = {}, ji;
function bl() {
  if (ji) return wn;
  ji = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ la(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return wn.default = n, wn;
}
var _n = {}, Di;
function vl() {
  if (Di) return _n;
  Di = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ da(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return _n.default = t, _n;
}
var Li;
function wl() {
  if (Li) return vn;
  Li = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ la(), t = /* @__PURE__ */ da(), n = /* @__PURE__ */ bl(), r = /* @__PURE__ */ vl(), i = [e.default, t.default, n.default, r.default];
  return vn.default = i, vn;
}
var Sn = {}, kn = {}, qi;
function _l() {
  if (qi) return kn;
  qi = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ to(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return kn.default = t, kn;
}
var Cn = {}, Bi;
function Sl() {
  if (Bi) return Cn;
  Bi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ to(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Cn.default = t, Cn;
}
var En = {}, Vi;
function kl() {
  if (Vi) return En;
  Vi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return En.default = t, En;
}
var Ui;
function Cl() {
  if (Ui) return Sn;
  Ui = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ Sl(), n = /* @__PURE__ */ kl(), r = [e.default, t.default, n.default];
  return Sn.default = r, Sn;
}
var xn = {}, Pn = {}, Hi;
function El() {
  if (Hi) return Pn;
  Hi = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: c, errsCount: l, it: d } = o;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: w } = d;
      w instanceof e.Name ? s.if((0, e._)`${w} !== true`, () => s.forIn("key", c, (h) => s.if(v(w, h), () => p(h)))) : w !== !0 && s.forIn("key", c, (h) => w === void 0 ? p(h) : s.if(_(w, h), () => p(h))), d.props = !0, o.ok((0, e._)`${l} === ${n.default.errors}`);
      function p(h) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: h }), o.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(d, a)) {
          const $ = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: h,
            dataPropType: t.Type.Str
          }, $), g || s.if((0, e.not)($), () => s.break());
        }
      }
      function v(h, $) {
        return (0, e._)`!${h} || !${h}[${$}]`;
      }
      function _(h, $) {
        const m = [];
        for (const k in h)
          h[k] === !0 && m.push((0, e._)`${$} !== ${k}`);
        return (0, e.and)(...m);
      }
    }
  };
  return Pn.default = i, Pn;
}
var An = {}, Ki;
function xl() {
  if (Ki) return An;
  Ki = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: c } = i, l = c.items || 0;
      if (l === !0)
        return;
      const d = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: l }), i.fail((0, e._)`${d} > ${l}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const w = o.var("valid", (0, e._)`${d} <= ${l}`);
        o.if((0, e.not)(w), () => g(w, l)), i.ok(w);
      }
      c.items = !0;
      function g(w, p) {
        o.forRange("i", p, d, (v) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: v, dataPropType: t.Type.Num }, w), c.allErrors || o.if((0, e.not)(w), () => o.break());
        });
      }
    }
  };
  return An.default = r, An;
}
var Gi;
function Pl() {
  if (Gi) return xn;
  Gi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ El(), t = /* @__PURE__ */ xl(), n = [e.default, t.default];
  return xn.default = n, xn;
}
var Rn = {}, Nn = {}, Wi;
function Al() {
  if (Wi) return Nn;
  Wi = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: c, schemaCode: l, it: d } = r, { opts: g, errSchemaPath: w, schemaEnv: p, self: v } = d;
      if (!g.validateFormats)
        return;
      a ? _() : h();
      function _() {
        const $ = o.scopeValue("formats", {
          ref: v.formats,
          code: g.code.formats
        }), m = o.const("fDef", (0, e._)`${$}[${l}]`), k = o.let("fType"), S = o.let("format");
        o.if((0, e._)`typeof ${m} == "object" && !(${m} instanceof RegExp)`, () => o.assign(k, (0, e._)`${m}.type || "string"`).assign(S, (0, e._)`${m}.validate`), () => o.assign(k, (0, e._)`"string"`).assign(S, m)), r.fail$data((0, e.or)(u(), f()));
        function u() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${S}`;
        }
        function f() {
          const b = p.$async ? (0, e._)`(${m}.async ? await ${S}(${s}) : ${S}(${s}))` : (0, e._)`${S}(${s})`, x = (0, e._)`(typeof ${S} == "function" ? ${b} : ${S}.test(${s}))`;
          return (0, e._)`${S} && ${S} !== true && ${k} === ${i} && !${x}`;
        }
      }
      function h() {
        const $ = v.formats[c];
        if (!$) {
          u();
          return;
        }
        if ($ === !0)
          return;
        const [m, k, S] = f($);
        m === i && r.pass(b());
        function u() {
          if (g.strictSchema === !1) {
            v.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${c}" ignored in schema at path "${w}"`;
          }
        }
        function f(x) {
          const E = x instanceof RegExp ? (0, e.regexpCode)(x) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, A = o.scopeValue("formats", { key: c, ref: x, code: E });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${A}.validate`] : ["string", x, A];
        }
        function b() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!p.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof k == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Ji;
function Rl() {
  if (Ji) return Rn;
  Ji = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Al()).default];
  return Rn.default = t, Rn;
}
var rt = {}, Yi;
function Nl() {
  return Yi || (Yi = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.contentVocabulary = rt.metadataVocabulary = void 0, rt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], rt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), rt;
}
var Xi;
function Ml() {
  if (Xi) return Vt;
  Xi = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gc(), t = /* @__PURE__ */ il(), n = /* @__PURE__ */ $l(), r = /* @__PURE__ */ wl(), i = /* @__PURE__ */ Cl(), o = /* @__PURE__ */ Pl(), s = /* @__PURE__ */ Rl(), a = /* @__PURE__ */ Nl(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    i.default,
    o.default
  ];
  return Vt.default = c, Vt;
}
var Mn = {}, Pt = {}, Zi;
function Tl() {
  if (Zi) return Pt;
  Zi = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Pt.DiscrError = e = {})), Pt;
}
var Qi;
function Ol() {
  if (Qi) return Mn;
  Qi = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Tl(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Zn(), i = /* @__PURE__ */ ce(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: d, parentSchema: g, it: w } = a, { oneOf: p } = g;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const v = d.propertyName;
      if (typeof v != "string")
        throw new Error("discriminator: requires propertyName");
      if (d.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!p)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = c.let("valid", !1), h = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(v)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: v })), a.ok(_);
      function $() {
        const S = k();
        c.if(!1);
        for (const u in S)
          c.elseIf((0, e._)`${h} === ${u}`), c.assign(_, m(S[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: v }), c.endIf();
      }
      function m(S) {
        const u = c.name("valid"), f = a.subschema({ keyword: "oneOf", schemaProp: S }, u);
        return a.mergeEvaluated(f, e.Name), u;
      }
      function k() {
        var S;
        const u = {}, f = x(g);
        let b = !0;
        for (let M = 0; M < p.length; M++) {
          let R = p[M];
          if (R?.$ref && !(0, i.schemaHasRulesButRef)(R, w.self.RULES)) {
            const j = R.$ref;
            if (R = n.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, j), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(w.opts.uriResolver, w.baseId, j);
          }
          const D = (S = R?.properties) === null || S === void 0 ? void 0 : S[v];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
          b = b && (f || x(R)), E(D, M);
        }
        if (!b)
          throw new Error(`discriminator: "${v}" must be required`);
        return u;
        function x({ required: M }) {
          return Array.isArray(M) && M.includes(v);
        }
        function E(M, R) {
          if (M.const)
            A(M.const, R);
          else if (M.enum)
            for (const D of M.enum)
              A(D, R);
          else
            throw new Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
        }
        function A(M, R) {
          if (typeof M != "string" || M in u)
            throw new Error(`discriminator: "${v}" values must be unique strings`);
          u[M] = R;
        }
      }
    }
  };
  return Mn.default = s, Mn;
}
var Tn = {};
const Fl = "https://json-schema.org/draft/2020-12/schema", zl = "https://json-schema.org/draft/2020-12/schema", Il = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, jl = "meta", Dl = "Core and Validation specifications meta-schema", Ll = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], ql = ["object", "boolean"], Bl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Vl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ul = {
  $schema: Fl,
  $id: zl,
  $vocabulary: Il,
  $dynamicAnchor: jl,
  title: Dl,
  allOf: Ll,
  type: ql,
  $comment: Bl,
  properties: Vl
}, Hl = "https://json-schema.org/draft/2020-12/schema", Kl = "https://json-schema.org/draft/2020-12/meta/applicator", Gl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Wl = "meta", Jl = "Applicator vocabulary meta-schema", Yl = ["object", "boolean"], Xl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Zl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ql = {
  $schema: Hl,
  $id: Kl,
  $vocabulary: Gl,
  $dynamicAnchor: Wl,
  title: Jl,
  type: Yl,
  properties: Xl,
  $defs: Zl
}, ed = "https://json-schema.org/draft/2020-12/schema", td = "https://json-schema.org/draft/2020-12/meta/unevaluated", nd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, rd = "meta", od = "Unevaluated applicator vocabulary meta-schema", id = ["object", "boolean"], sd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ad = {
  $schema: ed,
  $id: td,
  $vocabulary: nd,
  $dynamicAnchor: rd,
  title: od,
  type: id,
  properties: sd
}, cd = "https://json-schema.org/draft/2020-12/schema", ld = "https://json-schema.org/draft/2020-12/meta/content", dd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ud = "meta", fd = "Content vocabulary meta-schema", pd = ["object", "boolean"], hd = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, md = {
  $schema: cd,
  $id: ld,
  $vocabulary: dd,
  $dynamicAnchor: ud,
  title: fd,
  type: pd,
  properties: hd
}, gd = "https://json-schema.org/draft/2020-12/schema", yd = "https://json-schema.org/draft/2020-12/meta/core", $d = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, bd = "meta", vd = "Core vocabulary meta-schema", wd = ["object", "boolean"], _d = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Sd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, kd = {
  $schema: gd,
  $id: yd,
  $vocabulary: $d,
  $dynamicAnchor: bd,
  title: vd,
  type: wd,
  properties: _d,
  $defs: Sd
}, Cd = "https://json-schema.org/draft/2020-12/schema", Ed = "https://json-schema.org/draft/2020-12/meta/format-annotation", xd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Pd = "meta", Ad = "Format vocabulary meta-schema for annotation results", Rd = ["object", "boolean"], Nd = { format: { type: "string" } }, Md = {
  $schema: Cd,
  $id: Ed,
  $vocabulary: xd,
  $dynamicAnchor: Pd,
  title: Ad,
  type: Rd,
  properties: Nd
}, Td = "https://json-schema.org/draft/2020-12/schema", Od = "https://json-schema.org/draft/2020-12/meta/meta-data", Fd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, zd = "meta", Id = "Meta-data vocabulary meta-schema", jd = ["object", "boolean"], Dd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Ld = {
  $schema: Td,
  $id: Od,
  $vocabulary: Fd,
  $dynamicAnchor: zd,
  title: Id,
  type: jd,
  properties: Dd
}, qd = "https://json-schema.org/draft/2020-12/schema", Bd = "https://json-schema.org/draft/2020-12/meta/validation", Vd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ud = "meta", Hd = "Validation vocabulary meta-schema", Kd = ["object", "boolean"], Gd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Wd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Jd = {
  $schema: qd,
  $id: Bd,
  $vocabulary: Vd,
  $dynamicAnchor: Ud,
  title: Hd,
  type: Kd,
  properties: Gd,
  $defs: Wd
};
var es;
function Yd() {
  if (es) return Tn;
  es = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = Ul, t = Ql, n = ad, r = md, i = kd, o = Md, s = Ld, a = Jd, c = ["/properties"];
  function l(d) {
    return [
      e,
      t,
      n,
      r,
      i,
      g(this, o),
      s,
      g(this, a)
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function g(w, p) {
      return d ? w.$dataMetaSchema(p, c) : p;
    }
  }
  return Tn.default = l, Tn;
}
var ts;
function Xd() {
  return ts || (ts = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Hc(), r = /* @__PURE__ */ Ml(), i = /* @__PURE__ */ Ol(), o = /* @__PURE__ */ Yd(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(p = {}) {
        super({
          ...p,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((p) => this.addVocabulary(p)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: p, meta: v } = this.opts;
        v && (o.default.call(this, p), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ Xn();
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
    var d = /* @__PURE__ */ Zr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return d.default;
    } });
    var g = /* @__PURE__ */ Zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(jt, jt.exports)), jt.exports;
}
var Zd = /* @__PURE__ */ Xd();
const Qd = /* @__PURE__ */ Ac(Zd), eu = "https://json-schema.org/draft/2020-12/schema", tu = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", nu = "gufe-viz payload", ru = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ou = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], iu = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), no = {
  $schema: eu,
  $id: tu,
  title: nu,
  description: ru,
  oneOf: ou,
  $defs: iu
}, fm = [
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
], ro = no.$id, oo = new Qd({ allErrors: !0, strict: !1 });
oo.addSchema(no, ro);
const ns = oo.getSchema(ro), su = Object.entries(no.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ua = /* @__PURE__ */ new Map();
for (const e of su) {
  const t = oo.getSchema(`${ro}#/$defs/${e}`);
  t && ua.set(e, t);
}
const rs = { valid: !0, issues: [] };
function os(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function au(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? ua.get(t) : void 0;
  return n ? n(e) ? rs : { valid: !1, issues: os(n.errors) } : ns(e) ? rs : { valid: !1, issues: os(ns.errors) };
}
function cu(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const io = {
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
function lu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!io[t]) return du(t);
  const { valid: n, issues: r } = au(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: cu(r)
  };
}
function du(e) {
  const t = Object.keys(io).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class uu extends Ne {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ec("payload", n, this);
    const r = lu(n);
    if (r)
      return t.appendChild(fu(r, n)), {};
    const i = n.type, o = io[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function fu(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(pe(e.message));
  const r = (o, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${z.warnBg};color:${z.warnFg};border:1px solid ${z.warnBorder};` : `background:${z.panelBg};color:${z.textMuted2};border:1px solid ${z.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = pu(t);
  return i && n.appendChild(r(i, !1)), n;
}
function pu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${ke(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${ke(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Me("gufe-view", uu);
function lt(e = "", t) {
  const n = T("button", Po.base + e, t);
  return n.className = Po.className, n.type = "button", n;
}
function Ir(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function so(e, t = Jr.className) {
  const n = T("button", e);
  return n.className = t, n.type = "button", n.setAttribute("aria-pressed", "false"), n;
}
function er(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = T("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), o = e.map((s) => {
    const a = lt("", s.label);
    return a.title = s.title || s.label, a.onclick = () => {
      i.setActive(s.id), r?.set(s.id), n(s.id);
    }, i.appendChild(a), { id: s.id, btn: a };
  });
  return i.setActive = (s) => {
    t = s;
    for (const a of o) Ir(a.btn, a.id === t);
  }, i.setActive(t), i;
}
const hu = parseFloat(X.xl) * 2;
function fa(e, t, n, r = {}) {
  const { remember: i } = r;
  if (i) {
    const g = i.get();
    e.some((w) => w.id === g) && (t = g);
  }
  const o = T("div", "display:flex;min-width:0;"), s = (g) => {
    o.setActive(g), i?.set(g), n(g);
  }, a = er(e, t, s), c = It(e, t, s);
  c.style.display = "none", o.appendChild(a), o.appendChild(c), o.buttons = a, o.setActive = (g) => {
    t = g, a.setActive(g), c.value = g;
  };
  let l = !1;
  o.setCompact = (g) => {
    g !== l && (l = g, a.style.display = l ? "none" : "flex", c.style.display = l ? "" : "none", r.onLayout?.(l));
  };
  let d = () => {
  };
  if (r.fit) {
    const { pane: g, bar: w } = r.fit;
    let p = 0;
    d = Us(g, (v) => {
      l || (p = w.offsetWidth || p), p && o.setCompact(p > v - hu);
    });
  }
  return o.cleanup = () => d(), o;
}
function It(e, t, n, r) {
  const i = T("select", Ws);
  for (const s of e) {
    const a = T("option", "", s.label);
    a.value = s.id, i.appendChild(a);
  }
  let o = t;
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (o = s);
  }
  return i.value = o, i.onchange = () => {
    r?.set(i.value), n(i.value);
  }, i;
}
function pa(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = lt("", e);
  return o.title = r.title || e, Ir(o, i), o.onclick = () => {
    i = !i, Ir(o, i), r.remember?.set(i), n(i);
  }, o;
}
const He = "gufe-viz:", _t = /* @__PURE__ */ new Map();
let On = null;
function mu() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function tr() {
  if (On === !1) return null;
  const e = mu();
  if (!e)
    return On = !1, null;
  try {
    const t = `${He}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), On = !0, e;
  } catch {
    return On = !1, null;
  }
}
function gu(e) {
  const t = tr();
  if (!t) return _t.get(He + e) ?? null;
  try {
    return t.getItem(He + e);
  } catch {
    return null;
  }
}
function yu(e, t) {
  const n = tr();
  if (!n) {
    _t.set(He + e, t);
    return;
  }
  try {
    n.setItem(He + e, t);
  } catch {
    _t.set(He + e, t);
  }
}
function nr(e, t, n) {
  return {
    key: e,
    get() {
      const r = gu(e);
      if (r === null) return t;
      try {
        const i = JSON.parse(r);
        return n(i) ? i : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        yu(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ct(e, t, n) {
  return nr(e, t, (r) => typeof r == "string" && n.includes(r));
}
function it(e, t) {
  return nr(e, t, (n) => typeof n == "boolean");
}
function ao(e, t, n = -1 / 0, r = 1 / 0) {
  return nr(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function Hn(e, t = "") {
  return nr(e, t, (n) => typeof n == "string");
}
function co() {
  const e = tr(), t = e ? Array.from({ length: e.length }, (r, i) => e.key(i)).filter((r) => typeof r == "string") : Array.from(_t.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(He)) continue;
    const i = e ? e.getItem(r) : _t.get(r) ?? null;
    i !== null && n.push([r, i]);
  }
  return n;
}
function $u() {
  const e = {};
  for (const [t, n] of co()) {
    const r = t.slice(He.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function bu() {
  return Object.fromEntries(co());
}
function vu() {
  const e = tr();
  if (e)
    for (const [t] of co())
      try {
        e.removeItem(t);
      } catch {
      }
  _t.clear();
}
const _r = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, lo = {
  threeDmol: `https://unpkg.com/3dmol@${_r.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${_r.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${_r.d3}/+esm`
};
function uo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ha(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Qe = null, mt = null;
function rr() {
  if (mt) return mt;
  const e = uo("threeDmol");
  return e ? (mt = e.then((t) => Qe = t || window.$3Dmol), mt) : (mt = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await ha(lo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), mt);
}
let gt = null;
function fo() {
  if (gt) return gt;
  const e = uo("rdkit");
  return e ? (gt = e.then((t) => window.RDKit = t), gt) : (gt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ha(lo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), gt);
}
let wu = null;
function ma() {
  return wu ??= fo().catch((e) => (console.warn("[gufe-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Sr = null;
function _u() {
  if (!Sr) {
    const e = lo.d3;
    Sr = uo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Sr;
}
function po(e) {
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
function ga(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Cu(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
function Su(e) {
  const t = (i) => i.preventDefault(), n = (i) => {
    i.touches?.length > 1 && i.preventDefault();
  }, r = ["gesturestart", "gesturechange", "gestureend"];
  for (const i of r) e.addEventListener(i, t, { passive: !1 });
  return e.addEventListener("touchmove", n, { passive: !1 }), {
    cleanup() {
      for (const i of r) e.removeEventListener(i, t);
      e.removeEventListener("touchmove", n);
    }
  };
}
const ku = 1600;
function Cu(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, ku);
}
const Eu = { min: 0.25, max: 12 }, xu = 150;
function is(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? xu) - t;
}
function Pu(e, t = Eu) {
  const n = is(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = is(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), c = Math.min(t.max, Math.max(t.min, a * s)), l = c / a;
      return !Number.isFinite(l) || Math.abs(l - 1) < 1e-9 ? !1 : (i = c, e.zoom(l), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const Au = 2e-3;
function ya(e) {
  return Math.exp(-e.deltaY * Au);
}
function or(e, t, n = {}) {
  const r = Pu(t, n.bounds), i = ga(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(ya(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function ho(e, t = "Reset view") {
  const n = lt("", "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let wt = null;
function Ru(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function $a(e, t) {
  if (!e) return;
  const n = Ru(e);
  if (!n) return;
  const r = t?.level();
  wt = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : wt?.zoom ?? 1
  };
}
function ba(e, t) {
  if (!wt || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ...wt.rotation]), t && Math.abs(wt.zoom - 1) > 1e-9 && t.zoomBy(wt.zoom), e.render(), !0);
}
const kr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, Nu = [
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
], V = [0, 0, 0], Mu = {
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
  118: V
}, q = [0.9, 0.9, 0.9], Tu = {
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
}, Ou = {
  "-1": q,
  0: q,
  1: q,
  2: q,
  3: q,
  4: q,
  5: q,
  6: q,
  7: q,
  8: q,
  9: q,
  10: q,
  11: q,
  12: q,
  13: q,
  14: q,
  15: q,
  16: q,
  17: q,
  18: q,
  19: q,
  20: q,
  21: q,
  22: q,
  23: q,
  24: q,
  25: q,
  26: q,
  27: q,
  28: q,
  29: q,
  30: q,
  31: q,
  32: q,
  33: q,
  34: q,
  35: q,
  36: q,
  37: q,
  38: q,
  39: q,
  40: q,
  41: q,
  42: q,
  43: q,
  44: q,
  45: q,
  46: q,
  47: q,
  48: q,
  49: q,
  50: q,
  51: q,
  52: q,
  53: q,
  54: q,
  55: q,
  56: q,
  57: q,
  58: q,
  59: q,
  60: q,
  61: q,
  62: q,
  63: q,
  64: q,
  65: q,
  66: q,
  67: q,
  68: q,
  69: q,
  70: q,
  71: q,
  72: q,
  73: q,
  74: q,
  75: q,
  76: q,
  77: q,
  78: q,
  79: q,
  80: q,
  81: q,
  82: q,
  83: q,
  84: q,
  85: q,
  86: q,
  87: q,
  88: q,
  89: q,
  90: q,
  91: q,
  92: q,
  93: q,
  94: q,
  95: q,
  96: q,
  97: q,
  98: q,
  99: q,
  100: q,
  101: q,
  102: q,
  103: q,
  104: q,
  105: q,
  106: q,
  107: q,
  108: q,
  109: q,
  110: q,
  111: q,
  112: q,
  113: q,
  114: q,
  115: q,
  116: q,
  117: q,
  118: q,
  201: q
}, Fu = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
function ir() {
  return ic();
}
function va() {
  return Ue[ir() ? "dark" : "light"].canvas2DBg;
}
function jr() {
  return Ue[ir() ? "dark" : "light"].netDepictBg;
}
function zu() {
  return Ue[ir() ? "dark" : "light"].netDepictCaption;
}
function sr(e) {
  return ir() ? {
    ...Fu,
    atomColourPalette: e === "mono" ? Ou : Tu
  } : e === "mono" ? { atomColourPalette: Mu } : {};
}
const Iu = "rdkit", ju = !0, Du = !0, Lu = !0, qu = !0, Bu = "rdkit", Vu = "filled", Uu = 0.42, Hu = 1.5, Ku = !0, Gu = "show", Wu = "mono", Ju = 0.51, Yu = 0.74, Xu = 1.6, Zu = 1.7, Qu = 5, ef = 0.3, tf = "#d62828", nf = "#d62828", rf = "#015ab5", of = !1, sf = "", af = "#7c3aed", cf = {
  layout: Iu,
  alignPair: ju,
  atomNumbers: Du,
  createdDestroyed: Lu,
  modified: qu,
  style: Bu,
  circles: Vu,
  circleRadius: Uu,
  circleStroke: Hu,
  boundary: Ku,
  hydrogens: Gu,
  elementColors: Wu,
  numScale: Ju,
  labelScale: Yu,
  bondWidth: Xu,
  markWidth: Zu,
  haloWidth: Qu,
  haloOpacity: ef,
  destroyedColor: tf,
  createdColor: nf,
  modifiedColor: rf,
  stereo: of,
  customSpec: sf,
  customColor: af
}, lf = {
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: kr.uniqueAtom,
  createdColor: kr.uniqueAtom,
  modifiedColor: kr.elementChange,
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
}, df = ["rdkit", "coordgen", "conformer"], uf = ["rdkit", "recolor", "halo"], ff = ["outline", "filled", "off"], pf = ["show", "dim", "hide"], hf = ["cpk", "mono"], mf = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, gf = /^#[0-9a-fA-F]{6}$/;
function At(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function We(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = mf[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const yt = (e, t) => typeof e == "boolean" ? e : t, Fn = (e, t) => typeof e == "string" && gf.test(e) ? e : t;
function yf(e) {
  const t = e && typeof e == "object" ? e : {}, n = lf;
  return {
    version: 1,
    layout: At(t.layout, df, n.layout),
    alignPair: yt(t.alignPair, n.alignPair),
    style: At(t.style, uf, n.style),
    createdDestroyed: yt(t.createdDestroyed, n.createdDestroyed),
    modified: yt(t.modified, n.modified),
    destroyedColor: Fn(t.destroyedColor, n.destroyedColor),
    createdColor: Fn(t.createdColor, n.createdColor),
    modifiedColor: Fn(t.modifiedColor, n.modifiedColor),
    boundary: yt(t.boundary, n.boundary),
    circles: At(t.circles, ff, n.circles),
    circleRadius: We(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: We(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: At(t.hydrogens, pf, n.hydrogens),
    elementColors: At(t.elementColors, hf, n.elementColors),
    atomNumbers: yt(t.atomNumbers, n.atomNumbers),
    stereo: yt(t.stereo, n.stereo),
    numScale: We(t.numScale, "numScale", n.numScale),
    labelScale: We(t.labelScale, "labelScale", n.labelScale),
    bondWidth: We(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: We(t.markWidth, "markWidth", n.markWidth),
    haloWidth: We(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: We(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Fn(t.customColor, n.customColor)
  };
}
const Ae = yf(cf);
function $f(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, c = (d) => {
      s !== "right" && t.add(d), s !== "left" && n.add(d);
    }, l = /^(\d+)-(\d+)$/.exec(a);
    if (l) {
      const d = Math.min(+l[1], +l[2]), g = Math.min(Math.max(+l[1], +l[2]), d + r - 1);
      for (let w = d; w <= g; w++) c(w);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function Cr(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), c = t.has(s);
    (n ? a || c : a && c) && r.push(i);
  }
  return r;
}
function ss(e) {
  return `0x${e.replace("#", "")}`;
}
function Dr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function bf(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function vf(e, t, n) {
  const r = new Set(t.atoms), i = new Set(Cr(e, r, !0));
  return {
    deletions: Cr(e, r, n),
    changes: Cr(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function wa(e, t, n, r) {
  const i = vf(t, n, e.boundary), o = [];
  return e.createdDestroyed && n.atoms.length && o.push({
    atoms: new Set(n.atoms),
    bonds: i.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && o.push({
    atoms: new Set(n.elements),
    bonds: i.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), o;
}
let $t = null;
function wf(e) {
  if ($t !== null) return $t;
  $t = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && ($t = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return $t || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), $t;
}
function _f(e, t) {
  return e.style === "rdkit" ? "rdkit" : wf(t) ? e.style : "rdkit";
}
function Sf(e, t, n, r, i, o) {
  const s = {
    width: t,
    height: t,
    addAtomIndices: e.atomNumbers,
    addStereoAnnotation: e.stereo,
    annotationFontScale: e.numScale,
    baseFontSize: e.labelScale,
    bondLineWidth: e.bondWidth,
    scaleBondWidth: !1
  };
  Object.assign(s, sr(e.elementColors)), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, l = {};
  for (const p of n) {
    const v = Dr(p.color);
    if (i === "rdkit") for (const h of p.bonds) l[h] = v;
    if (i === "recolor" && e.circles === "off") continue;
    const _ = i === "recolor" && e.circles === "filled" ? bf(v, 0.7) : v;
    for (const h of p.atoms)
      a[h] = _, c[h] = e.circleRadius;
  }
  const d = Dr(e.customColor);
  for (const p of r)
    p < o && (a[p] = d, c[p] = e.circleRadius);
  const g = Object.keys(a).map(Number);
  g.length && (s.atoms = g, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const w = Object.keys(l).map(Number);
  return w.length && (s.bonds = w, s.highlightBondColors = l), s;
}
function kf(e, t, n, r) {
  let i = null;
  try {
    return i = e.get_mol(t, JSON.stringify({ removeHs: !1 })), i ? i.get_svg_with_highlights ? i.get_svg_with_highlights(JSON.stringify(r)) || null : i.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", he(o)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
const Cf = "http://www.w3.org/2000/svg";
function _a(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function mo(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function Sa(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function as(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of _a(e, s)) {
      const c = a.style;
      Sa(a) ? c.fill = i : (c.stroke = i, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of mo(e, s, !1)) a.style.fill = o;
}
function Ef(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(Cf, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of _a(e, a)) {
      if (Sa(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", o.appendChild(l);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function xf(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of mo(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Pf(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of mo(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Af(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Rf(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        as(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? xf(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && Pf(e, n, s.atoms, i, s.color);
      } else
        Ef(e, n, s.bonds, s.color), as(e, n, s.atoms, s.bonds, s.color, null);
  Af(e, t, n);
}
const ar = `
`, Lr = "$$$$";
function qr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(ar);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let d = 0; d < i; d++) {
    const g = n[4 + d];
    if (g == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(g.substring(0, 10)) || 0,
      parseFloat(g.substring(10, 20)) || 0,
      parseFloat(g.substring(20, 30)) || 0
    ]), a.push(g.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let d = 0; d < (isFinite(o) ? o : 0); d++) {
    const g = n[4 + i + d];
    if (g == null) break;
    const w = parseInt(g.substring(0, 3), 10), p = parseInt(g.substring(3, 6), 10), v = parseInt(g.substring(6, 9), 10);
    !isFinite(w) || !isFinite(p) || c.push([w - 1, p - 1, isFinite(v) ? v : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function Nf(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let i = 0; i < t; i++) {
    const o = e.coords[i];
    r.push(
      o[0].toFixed(4).padStart(10) + o[1].toFixed(4).padStart(10) + o[2].toFixed(4).padStart(10) + ` ${e.symbols[i].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let i = 0; i < n; i++) {
    const o = e.bonds[i], s = o[2] === 12 ? 4 : o[2];
    r.push(
      String(o[0] + 1).padStart(3) + String(o[1] + 1).padStart(3) + String(s).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(ar);
}
const Mf = (e) => `${Nf(e)}${ar}${Lr}`, ka = (e) => e.indexOf(Lr) >= 0 ? e : `${e}${ar}${Lr}`;
function go(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function yo(e, t, n, r, i, o) {
  let s = null;
  try {
    if (s = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !s) return null;
    if (r !== "conformer")
      try {
        s.set_new_coords(r === "coordgen");
      } catch {
      }
    const a = i?.atoms.length ? i : null, c = !!o && Object.keys(o).length > 0;
    if ((a || c) && s.get_svg_with_highlights) {
      const l = { width: n, height: n, ...o };
      if (a) {
        const d = {}, g = {};
        for (const w of a.atoms)
          d[w] = a.color, g[w] = a.radius;
        l.atoms = [...a.atoms], l.highlightAtomColors = d, l.highlightAtomRadii = g;
      }
      return s.get_svg_with_highlights(JSON.stringify(l)) || null;
    }
    return s.get_svg(n, n) || null;
  } catch (a) {
    return console.warn("[gufe-viz] depictSVG threw -", he(a)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function Ca(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const cs = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Br = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, bt = (e) => e in Br, ls = 400, Er = "position:absolute;inset:0;min-width:0;min-height:0;";
class Tf extends Ne {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${Er}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${va()};`
    );
    a.appendChild(c);
    const l = ea();
    l.wrap.style.cssText = Er, a.appendChild(l.wrap);
    const d = T(
      "div",
      `${Er}overflow:auto;padding:16px 20px;background:${z.panelBg};color:${z.textPrimary};font-size:${Y.body};`
    );
    a.appendChild(d);
    const g = r ? go(r) : null, w = [
      ["Name", i || Je, !1],
      ["SMILES", o || Je, !0],
      ["Charge", s == null ? Je : String(s), !1],
      ["Atoms", g ? String(g.atoms) : Je, !1],
      ["Bonds", g ? String(g.bonds) : Je, !1]
    ], p = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${X.xl} 20px;align-items:baseline;`);
    d.appendChild(p);
    for (const [R, D, j] of w) {
      p.appendChild(
        T(
          "div",
          `font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${z.textMuted2};`,
          R
        )
      );
      const L = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${z.textPrimary}` + (j ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Y.small};` : ""),
        D
      );
      L.title = D, p.appendChild(L);
    }
    const v = Xr(t), _ = T("div", Wr, i || "Unnamed molecule");
    v && a.appendChild(_);
    const h = ct(
      "small-molecule.mode",
      "2d",
      cs.map((R) => R.id)
    ), $ = it("small-molecule.spin", !1);
    let m = h.get(), k = $.get(), S = null, u = null;
    const f = () => {
      try {
        S?.spin(k && bt(m) ? "y" : !1);
      } catch {
      }
    }, b = (R) => {
      m = R, c.style.visibility = m === "2d" ? "visible" : "hidden", l.wrap.style.visibility = bt(m) ? "visible" : "hidden", d.style.visibility = m === "info" ? "visible" : "hidden", _.style.display = m === "info" || !v ? "none" : "block", E.disabled = !bt(m), E.style.opacity = bt(m) ? "1" : "0.5", bt(m) && S && (S.setStyle({}, Br[m]), S.resize(), S.render()), f();
    }, x = T("div", Qs), E = pa(
      "Spin",
      k,
      (R) => {
        k = R, f();
      },
      { title: "Toggle continuous rotation", remember: $ }
    ), A = (R) => {
      R ? x.insertBefore(E, x.firstChild) : M.buttons.insertBefore(E, M.buttons.lastElementChild);
    }, M = fa(cs, m, (R) => b(R), {
      remember: h,
      onLayout: A,
      fit: { pane: a, bar: x }
    });
    return x.appendChild(M), A(!1), a.appendChild(x), b(m), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), l.container.appendChild(pe("No molecule provided")), { cleanup: () => M.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), fo().then((R) => {
      const D = sr("cpk"), j = yo(R, r, ls, Ae.layout, void 0, D);
      j ? Ca(c, j, ls) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren(pe(`RDKit failed to load: ${he(R)}`, !0));
    }), l.container.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
      l.container.replaceChildren(), S = Qe.createViewer(l.container, { backgroundColor: zt.viewer() }), S.addModel(ka(r), "sdf"), S.setStyle({}, Br[bt(m) ? m : "stick"]), S.zoomTo(), S.render(), u = or(l.container, S), ba(S, u), f();
    }).catch((R) => {
      l.container.replaceChildren(pe(`3D render failed: ${he(R)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        M.cleanup(), $a(S, u), u?.cleanup(), u = null, po(S), S = null;
      }
    });
  }
}
Me("gufe-small-molecule", Tf);
const Ea = ["HOH", "WAT", "SOL", "TIP3"], ds = { hetflag: !1 }, Of = { hetflag: !0 }, Ff = { resn: Ea }, Ie = {
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
function xa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const l = c.slice(0, 6);
    if (l === "ENDMDL") break;
    if (l !== "ATOM  " && l !== "HETATM") continue;
    r++, l === "HETATM" && i++;
    const d = c.slice(17, 20).trim(), g = c.slice(21, 22).trim() || "_", w = c.slice(22, 26).trim(), p = c.slice(26, 27).trim();
    Ea.indexOf(d) !== -1 && o++, t.add(g), n.add(`${g}|${w}${p}|${d}`);
    const v = parseInt(w, 10);
    isNaN(v) || (v < s && (s = v), v > a && (a = v));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: i,
    waters: o,
    heteroNonWater: i - o,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function Pa(e) {
  return [
    `${Ct(e.chains)} chains`,
    `${Ct(e.residues)} residues`,
    `${Ct(e.atoms)} atoms`,
    `${Ct(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Ct(e.waters)} water)` : "")
  ];
}
function zf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Vr(e, t, n, r, i) {
  const o = r || (() => {
  }), s = zf(t.color, n), a = (c) => i ? { ...c, ...i } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(ds),
    t.rep === "stick" ? { stick: { radius: Ie.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: Ie.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(Of),
    t.hetero ? {
      stick: { radius: Ie.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(Ff),
    t.waters ? {
      stick: { radius: Ie.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    o(null), e.render();
    return;
  }
  o(
    n && n.atoms > Ie.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(
          Qe.SurfaceType.VDW,
          { opacity: Ie.surfaceOpacity, ...s },
          a(ds)
        )
      ).then(() => {
        o(null), e.render();
      }).catch((c) => o(`Surface failed: ${he(c)}`, "error"));
    } catch (c) {
      o(`Surface failed: ${he(c)}`, "error");
    }
  }, 30);
}
function If(e, t) {
  e.setStyle(t, {
    stick: { radius: Ie.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Ie.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const us = { min: 0.2, max: 0.8 }, jf = 5;
function Aa(e, t, n, r = {}) {
  const i = r.min ?? us.min, o = r.max ?? us.max, s = T(
    "div",
    `flex:0 0 ${jf}px;align-self:stretch;touch-action:none;background:${z.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (v) => {
    a = v, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, l = () => {
    const v = e.getBoundingClientRect();
    return v.height > v.width;
  };
  let d = Math.min(o, Math.max(i, r.remember?.get() ?? 0.5));
  const g = () => {
    t.style.flex = `1 1 ${(d * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - d) * 100).toFixed(2)}%`;
  };
  g(), c(l()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const _ = l();
    _ !== a && (c(_), r.onResize?.(d));
  }).observe(e);
  let w = !1;
  s.addEventListener("pointerdown", (v) => {
    w = !0, s.setPointerCapture(v.pointerId), v.preventDefault();
  }), s.addEventListener("pointermove", (v) => {
    if (!w) return;
    const _ = e.getBoundingClientRect(), h = a ? _.height : _.width;
    if (h <= 0) return;
    const $ = a ? v.clientY - _.top : v.clientX - _.left;
    d = Math.min(o, Math.max(i, $ / h)), g();
  });
  const p = (v) => {
    w && (w = !1, s.releasePointerCapture(v.pointerId), r.remember?.set(d), r.onResize?.(d));
  };
  return s.addEventListener("pointerup", p), s.addEventListener("pointercancel", p), s;
}
function $o(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : qn.min), e.style.setProperty(Xe.max, t ? "none" : qn.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? lc : "";
}
const Df = !1, bo = ".menuOpen";
function Lf() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const qf = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Lf
}, Bf = qf.openFreeEnergy;
function vo(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Df, i = !1;
  const o = T("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = lt(`display:inline-flex;align-items:center;gap:${X.md};padding:${X.sm} ${X.lg};`);
  s.appendChild(Bf()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t()), n.extras?.(o)), o.style.display = r ? "flex" : "none", s.setAttribute("aria-expanded", String(r));
  }, c = (d) => {
    d !== r && (r = d, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r);
  const l = "toggleEl" in e ? e : null;
  return l && (l.toggleEl.style.marginRight = "2px"), (l ? l.toggleEl : e).appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: c
  };
}
const Ra = "https://framejs.app", Na = 1e4;
function Vf(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Uf = "/gufe-dev-bundle.js";
function Hf() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Na ? e : null;
}
async function Kf() {
  const e = Hf();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Uf);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Na ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Gf() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Wf(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(He)};`,
    `  const menuOpen = ${JSON.stringify(bo)};`,
    "  for (const key of Object.keys(localStorage)) {",
    "    if (key.startsWith(prefix) && key.endsWith(menuOpen)) localStorage.removeItem(key);",
    "  }",
    "} catch (e) {",
    '  console.warn("[gufe-viz] could not clear menu state:", e);',
    "}"
  ), Object.keys(e.settings).length && t.push(
    "// The settings the page had, written where `settings.ts` looks for them.",
    "try {",
    `  const stored = ${JSON.stringify(e.settings)};`,
    "  for (const key of Object.keys(stored)) localStorage.setItem(key, stored[key]);",
    "} catch (e) {",
    '  console.warn("[gufe-viz] could not restore settings:", e);',
    "}"
  ), Object.keys(e.views).length && t.push(
    "// Where the camera was, what was selected, where the layout settled.",
    `globalThis[${JSON.stringify(ta)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Jf(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Wf(n),
    "// Built by gufe-viz's share button from a generated page. The bundle below is",
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
    'const gufeView = document.createElement("gufe-view");',
    'gufeView.style.cssText = "display:block;width:100%;height:100%;";',
    "root.appendChild(gufeView);",
    "",
    e,
    "",
    "// A generated page's bootstrap has drawn the payload by now. A bundle on its",
    "// own ends at `export` and has not, so this is what draws it there. Reading",
    "// the property rather than tracking which case we are in keeps the two from",
    "// having to agree about anything.",
    "if (gufeView.payload == null) {",
    "  gufeView.payload = JSON.parse(gufePayload.textContent);",
    "}"
  ].join(`
`);
}
function Yf(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [i, o] of Object.entries(bu()))
    i.endsWith(bo) || (r[i] = o);
  return { settings: r, views: t };
}
const Xf = (e) => `${Ra}/j/${e}`, Zf = (e) => `${Ra}/j/${e}.json`;
async function Qf(e, t, n, r) {
  await fetch(Zf(e), {
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
function ep() {
  const e = T("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function wo(e) {
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${X.md};padding-top:${X.lg};border-top:1px solid ${z.splitBorder};`
  ), n = lt(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${X.md};`);
  n.appendChild(ep()), n.appendChild(T("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;color:${z.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const i = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? z.errorFg : z.textMuted2;
  }, o = (s, a) => {
    const c = T("a", `color:${z.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${X.sm};`, a)), r.style.color = z.textMuted2;
  };
  n.onclick = () => {
    const s = Vf(e);
    if (!s || s.payload == null) {
      i("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = Yf(s), l = window.open("", "_blank"), d = Gf(), w = String(a.type || "gufe-viz"), p = `${w}. Shared from alchemy-viz`, v = () => {
      n.disabled = !1;
    };
    n.disabled = !0, i("Uploading..."), Kf().then((_) => {
      if (!_) {
        l?.close(), v(), i(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Qf(d, Jf(_.js, a, c), w, p).then(() => {
        v();
        const h = Xf(d);
        l && (l.location.href = h), o(h, _.note);
      });
    }).catch((_) => {
      v(), l?.close(), i(`Upload failed: ${_ instanceof Error ? _.message : String(_)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Y.tiny};line-height:1.5;color:${z.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
const fs = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ps = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], hs = /* @__PURE__ */ new Map();
function Ma(e) {
  const t = ct(
    "protein.representation",
    "cartoon",
    fs.map((f) => f.id)
  ), n = ct(
    "protein.color",
    "chain",
    ps.map((f) => f.id)
  ), r = it("protein.waters", e.waters), i = it("protein.hetero", !0), o = it("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: i.get(),
    spin: o.get()
  };
  let a = null, c = null;
  const l = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(l);
  const d = T("div", pc);
  l.appendChild(d);
  const g = ({ label: f, controls: b }) => {
    const x = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    x.appendChild(
      T(
        "span",
        `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${z.textMuted};`,
        f
      )
    );
    for (const E of b) x.appendChild(E);
    return x;
  }, w = T("div", `display:flex;flex-direction:column;gap:2px;font-size:${Y.small};color:${z.textMuted};`), p = g({ label: "Contents", controls: [w] });
  p.style.display = "none";
  const _ = vo(d, () => {
    const f = T("div", `${Xs}padding-top:${hc};`), b = er(
      fs,
      s.rep,
      (R) => {
        s.rep = R, e.restyle();
      },
      t
    );
    f.appendChild(g({ label: "Style", controls: [b] }));
    const x = It(
      ps,
      s.color,
      (R) => {
        s.color = R, e.restyle();
      },
      n
    );
    x.style.cssText += "width:100%;box-sizing:border-box;", f.appendChild(g({ label: "Color", controls: [x] }));
    const E = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), A = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, i, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", o, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [R, D, j, L, W] of A)
      E.appendChild(
        pa(
          D,
          s[R],
          (ne) => {
            s[R] = ne, W();
          },
          { title: j, remember: L }
        )
      );
    f.appendChild(g({ label: "Show", controls: [E] }));
    const M = ho(() => e.reset ? e.reset() : c?.reset());
    return M.style.cssText += "width:100%;box-sizing:border-box;", f.appendChild(g({ label: "Camera", controls: [...e.camera?.() ?? [], M] })), f.appendChild(p), f;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: it(`protein${bo}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    },
    extras: wo
  }), h = Xr(e.element) ? e.title || e.fallbackTitle : "";
  h && d.appendChild(
    T("div", `${fc}pointer-events:none;font-size:${Y.heading};font-weight:${fe.bold};`, h)
  ), l.appendChild(_.panel);
  const $ = ea();
  l.appendChild($.wrap);
  const m = Gr(l, (f) => {
    l.style.flexDirection = f ? "column" : "row", $o(_.panel, f), a?.resize(), a?.render();
  }), k = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Y.body};z-index:20;display:none;pointer-events:none;`
  );
  $.wrap.appendChild(k);
  const S = (f, b) => {
    if (f == null) {
      k.style.display = "none";
      return;
    }
    k.textContent = f, k.style.display = "block";
    const x = b === "error";
    k.style.background = x ? z.warnBg : z.toolbarBg, k.style.color = x ? z.warnFg : z.textMuted, k.style.border = `1px solid ${x ? z.warnBorder : z.toolbarBorder}`;
  }, u = () => {
    if (!e.cameraKey || !a) return;
    const f = a.getView?.();
    Array.isArray(f) && f.length >= 4 && f.every((b) => Number.isFinite(b)) && hs.set(e.cameraKey, f.slice());
  };
  return {
    opts: s,
    pane: $,
    menu: _,
    showStatus: S,
    setStats: (f) => {
      w.replaceChildren(...f.map((b) => T("div", "overflow-wrap:anywhere;", b))), p.style.display = f.length ? "" : "none";
    },
    restoreCamera: () => {
      const f = e.cameraKey ? hs.get(e.cameraKey) : void 0;
      return !f || !a ? !1 : (a.setView(f.slice()), a.render(), !0);
    },
    viewer: () => a,
    setViewer: (f) => {
      a = f;
    },
    interaction: () => c,
    setInteraction: (f) => {
      c = f;
    },
    handle: {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        m(), u(), c?.cleanup(), c = null, po(a), a = null;
      }
    }
  };
}
class tp extends Ne {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let i = null;
    function o() {
      const a = s.viewer();
      a && Vr(a, s.opts, i, s.showStatus);
    }
    const s = Ma({
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
      return s.showStatus("No protein data - waiting for a PDB payload."), {};
    try {
      i = xa(r), s.setStats(Pa(i));
    } catch (a) {
      s.showStatus(`PDB parse error: ${he(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), rr().then(() => {
      const a = Qe.createViewer(s.pane.container, { backgroundColor: zt.viewer() });
      s.setViewer(a), a.addModel(r, "pdb"), Vr(a, s.opts, i, s.showStatus), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(or(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${he(a)}`, "error");
    }), s.handle;
  }
}
Me("gufe-protein", tp);
const Ta = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const n = document.createElementNS(Ta, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function ms(e, t) {
  const n = document.createElementNS(Ta, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Oa = 3, np = 24;
function Fa(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), i = Math.min(i, a.y), o = Math.max(o, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(i) ? null : { minX: r - t, minY: i - n, maxX: o + t, maxY: s + n };
}
const rp = { min: 0.15, max: 5 }, op = 1e-9;
function za(e, t, n) {
  const r = n.margin ?? np, i = n.zoom ?? rp;
  let o = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${o})`), n.onTransform?.(o, s, a);
  }, l = () => {
    const j = e.getBoundingClientRect();
    return {
      width: j.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: j.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, d = (j, L, W) => Math.min(1, L / (j.maxX - j.minX + r * 2), W / (j.maxY - j.minY + r * 2)), g = () => {
    const j = n.bounds();
    if (!j) return i.min;
    const { width: L, height: W } = l();
    return Math.min(i.min, d(j, L, W));
  }, w = (j) => Math.min(i.max, Math.max(g(), o * j)), p = () => {
    o = 1, s = 0, a = 0;
    const j = n.bounds();
    if (!j) {
      c();
      return;
    }
    const { width: L, height: W } = l();
    o = d(j, L, W), s = L / 2 - (j.minX + j.maxX) / 2 * o, a = W / 2 - (j.minY + j.maxY) / 2 * o, c();
  }, _ = ga(e, {
    onZoom: (j) => {
      const L = e.getBoundingClientRect(), W = j.clientX - L.left, ne = j.clientY - L.top, Z = w(ya(j)), oe = Z / o;
      return s = W - (W - s) * oe, a = ne - (ne - a) * oe, o = Z, c(), Math.abs(oe - 1) > op;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), h = /* @__PURE__ */ new Map();
  let $ = null, m = null, k = !1, S = null;
  const u = (j) => ({
    x: j.clientX - s,
    y: j.clientY - a,
    from: { x: j.clientX, y: j.clientY }
  }), f = (j) => {
    j.pointerType === "touch" && h.size > 1 || (m = u(j), k = !1);
  }, b = (j) => {
    $ || (S && j.pointerType === "touch" && (m = { x: S.x - s, y: S.y - a, from: S }, S = null), m && (Math.hypot(j.clientX - m.from.x, j.clientY - m.from.y) > Oa && (k = !0), s = j.clientX - m.x, a = j.clientY - m.y, c()));
  }, x = () => {
    m = null;
  };
  e.addEventListener("pointerdown", f), e.addEventListener("pointermove", b), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("pointerleave", x);
  const E = () => {
    const [j, L] = [...h.values()];
    return { cx: (j.x + L.x) / 2, cy: (j.y + L.y) / 2, span: Math.max(1, Math.hypot(j.x - L.x, j.y - L.y)) };
  }, A = (j) => {
    if (j.pointerType === "touch") {
      if (h.set(j.pointerId, { x: j.clientX, y: j.clientY }), h.size !== 2) {
        $ = null;
        return;
      }
      $ = E(), m = null, k = !0;
    }
  }, M = (j) => {
    if (j.pointerType !== "touch" || !h.has(j.pointerId) || (h.set(j.pointerId, { x: j.clientX, y: j.clientY }), !$ || h.size !== 2)) return;
    j.preventDefault(), j.stopPropagation();
    const L = E(), W = e.getBoundingClientRect(), ne = w(L.span / $.span), Z = ne / o;
    s = L.cx - W.left - ($.cx - W.left - s) * Z, a = L.cy - W.top - ($.cy - W.top - a) * Z, o = ne, $ = L, c();
  }, R = (j) => {
    if (j.pointerType !== "touch") return;
    if (h.delete(j.pointerId), h.size === 2) {
      $ = E();
      return;
    }
    $ = null;
    const [L] = [...h.values()];
    S = h.size === 1 && L ? { ...L } : null;
  };
  e.addEventListener("pointerdown", A, !0), e.addEventListener("pointermove", M, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const D = Su(e);
  return {
    fit: p,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: p,
    centreOn(j, L, W = 1) {
      const { width: ne, height: Z } = l();
      o = Math.max(o, W), s = ne / 2 - j * o, a = Z / 2 - L * o, c();
    },
    transform: () => ({ scale: o, tx: s, ty: a }),
    wasPan: () => k,
    gesturing: () => h.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(j, L, W) {
      o = j, s = L, a = W, c();
    },
    cleanup() {
      _.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", f), e.removeEventListener("pointermove", b), e.removeEventListener("pointerup", x), e.removeEventListener("pointercancel", x), e.removeEventListener("pointerleave", x), e.removeEventListener("pointerdown", A, !0), e.removeEventListener("pointermove", M, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const ip = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Ia(e) {
  const t = { ...e };
  for (const n of ip) delete t[n];
  return t;
}
async function ja(e) {
  let t;
  try {
    if (t = await _u(), typeof t?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const n = t.forceSimulation(e.nodes);
  for (const [i, o] of e.forces(t, e.links)) n.force(i, o);
  n.stop();
  const r = Math.ceil(Math.log(n.alphaMin()) / Math.log(1 - n.alphaDecay()));
  for (let i = 0; i < r * e.tickMultiplier; i++) n.tick();
  return !0;
}
function St(e) {
  const t = /* @__PURE__ */ new Map();
  return Ur(e, t, /* @__PURE__ */ new Set()), t;
}
function Ur(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) Ur(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) Ur(i, t, n);
}
function Ke(e, t) {
  return t ? e.get(t) : void 0;
}
function Re(e, t, n) {
  const r = Ke(e, t);
  return r?.type === n ? r : void 0;
}
function _o(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const i of t) {
    if (!i || r.has(i)) continue;
    const o = e.get(i);
    o && (r.add(i), n.push(o));
  }
  return n;
}
function et(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Da(e) {
  const t = [];
  let n = 0;
  for (const s of e.keys) {
    const a = Re(e.registry, s, e.nodeType);
    if (!a) {
      n++;
      continue;
    }
    t.push({ ...a, x: 0, y: 0 });
  }
  const r = new Map(t.map((s) => [s["gufe-key"], s])), i = [];
  let o = 0;
  for (const s of e.edges) {
    const [a, c] = e.ends(s), l = a === void 0 ? void 0 : r.get(a), d = c === void 0 ? void 0 : r.get(c);
    if (!l || !d) {
      o++;
      continue;
    }
    i.push({ ...s, index: i.length, from: l, to: d });
  }
  return { nodes: t, edges: i, unresolved: n, dangling: o };
}
const sp = 8, ap = 64, cp = () => new Promise((e) => setTimeout(e, 0));
function Hr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function lp(e, t, n, r) {
  let i = null;
  try {
    if (i = e.get_mol(n, JSON.stringify({ removeHs: r })), !i || !i.get_substruct_matches) return null;
    const o = i.get_substruct_matches(t), s = JSON.parse(o || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const l = c.atoms;
      if (Array.isArray(l))
        for (const d of l) typeof d == "number" && a.add(d);
    }
    return [...a].sort((c, l) => c - l);
  } catch (o) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(o)), null;
  } finally {
    Hr(i);
  }
}
function La(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let i = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++i;
    if (!a) return { status: "cleared" };
    const l = r.get(a);
    if (l) return { status: "ok", matched: l, unreadable: 0 };
    const d = await e();
    if (c !== i) return { status: "superseded" };
    if (!d) return { status: "unsupported" };
    if (!d.get_qmol) return { status: "unsupported" };
    let g = null;
    try {
      g = d.get_qmol(a);
    } catch {
      g = null;
    }
    if (!g) return { status: "invalid" };
    if (!g.get_substruct_matches)
      return Hr(g), { status: "unsupported" };
    const w = /* @__PURE__ */ new Map();
    let p = 0;
    try {
      let v = performance.now(), _ = 0;
      for (let h = 0; h < t.length; h++) {
        const $ = t[h] ? lp(d, g, t[h], n) : null;
        if ($ ? $.length && w.set(h, $) : p++, !(++_ < ap && performance.now() - v < sp)) {
          if (await cp(), c !== i) return { status: "superseded" };
          _ = 0, v = performance.now();
        }
      }
    } finally {
      Hr(g);
    }
    return r.set(a, w), { status: "ok", matched: w, unreadable: p };
  }, cancel: () => void ++i };
}
const dp = 250;
function up(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", Js);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;min-height:1.5em;color:${z.textMuted2};`);
  t.appendChild(r);
  const i = (a) => {
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
        c.status !== "superseded" && (r.textContent = i(c));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let s = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => o(n.value), dp);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && o(n.value);
    }
  };
}
const qa = "Cmd/Ctrl-click to select several.";
function fp(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : et(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function pp(e, t) {
  navigator.clipboard?.writeText(e).catch(() => gs(e, t)), navigator.clipboard || gs(e, t);
}
function gs(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${Y.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function hp(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function mp(e) {
  const { words: t } = e, n = ct(e.setting, "names", ["names", "keys"]), r = T("div", "display:flex;flex-direction:column;gap:6px;"), i = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${z.textMuted};`);
  i.appendChild(T("span", "", "copy as"));
  const o = It(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    n.get(),
    () => {
    },
    n
  );
  o.style.flex = "1", i.appendChild(o), r.appendChild(i);
  const s = T("div", `font-size:${Y.tiny};line-height:1.5;color:${z.textMuted2};`), a = (d) => {
    s.textContent = d;
  }, c = T("div", "display:flex;gap:4px;"), l = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [d, g, w] of l) {
    const p = lt("flex:1;", g.button);
    p.title = w, p.onclick = (v) => {
      const _ = o.value, h = fp(e.nodes, e.edges, e.selected, d, _);
      if (!h) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : d === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${qa}` : "Nothing to copy."
        );
        return;
      }
      const $ = h.split(`
`).length;
      v.shiftKey ? (hp(h, `selected-${g.plural}.txt`), a(`Saved ${$} ${g.plural} to a file.`)) : (pp(h, r), a(
        d === "edges" ? `Copied ${$} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(p);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(T("div", `font-size:${Y.tiny};color:${z.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
function Ba(e) {
  const t = Hn(`${e.namespace}.query`), n = T("div", Xs), r = T("input", Js);
  n.appendChild(r);
  const i = up({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Hn(`${e.namespace}.smarts`),
    run: (d) => e.match(d),
    describe: (d) => e.smarts.describe(d)
  });
  n.appendChild(i.element);
  for (const d of e.filters?.(() => l()) ?? []) n.appendChild(d);
  const o = T("div", `font-size:${Y.small};color:${z.textMuted2};`);
  n.appendChild(o);
  const s = T("div", dc);
  n.appendChild(s), n.appendChild(T("div", `font-size:${Y.tiny};line-height:1.5;color:${z.textMuted2};`, qa));
  const a = mp({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: e.export,
    setting: `${e.namespace}.exportAs`
  });
  n.appendChild(a.box);
  const c = lt("width:100%;", "Clear selection");
  c.onclick = () => {
    e.selected.clear(), l(), e.refresh();
  }, n.appendChild(c);
  function l() {
    a.clearNote(), s.replaceChildren();
    const d = e.nodes.map((g, w) => ({ node: g, index: w })).filter(({ node: g, index: w }) => e.shows(g, w));
    o.textContent = `${d.length} of ${e.nodes.length} ${e.noun}`;
    for (const { node: g, index: w } of d) {
      const p = g["gufe-key"], v = so(Jr.row);
      v.setAttribute("aria-pressed", String(e.selected.has(p)));
      const _ = e.row(g, w);
      _.before && v.appendChild(_.before);
      const h = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", _.name);
      h.title = _.title, v.appendChild(h), v.onclick = ($) => {
        $.shiftKey || $.metaKey || $.ctrlKey ? e.selected.has(p) ? e.selected.delete(p) : e.selected.add(p) : (e.selected.clear(), e.selected.add(p), e.focus(w)), l(), e.refresh();
      }, s.appendChild(v);
    }
    d.length || s.appendChild(T("div", `font-size:${Y.small};padding:${X.lg};color:${z.textMuted2};`, "Nothing matches."));
  }
  return r.type = "search", r.placeholder = e.search.placeholder, r.value = t.get(), e.query.text = r.value, r.setAttribute("aria-label", e.search.label), r.oninput = () => {
    e.query.text = r.value, t.set(r.value), l(), e.refresh();
  }, l(), e.mounted?.(l), i.apply(), n;
}
function Va(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function gp(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Ft = { node: 0.12, edge: 0.06 };
function Ua() {
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
function Ha(e, t, n, r) {
  e.forEach((i, o) => {
    let s = null, a = !1;
    i.addEventListener("pointerdown", (l) => {
      l.stopPropagation();
      const { scale: d } = n.transform();
      s = { x: l.clientX - t[o].x * d, y: l.clientY - t[o].y * d }, a = !1, i.setPointerCapture(l.pointerId);
    }), i.addEventListener("pointermove", (l) => {
      if (!s) return;
      if (n.gesturing()) {
        s = null, a = !0;
        return;
      }
      const { scale: d } = n.transform(), g = (l.clientX - s.x) / d, w = (l.clientY - s.y) / d;
      Math.hypot(g - t[o].x, w - t[o].y) * d > Oa && (a = !0), t[o].x = t[o].fx = g, t[o].y = t[o].fy = w, r.moved(o);
    });
    const c = () => {
      s = null;
    };
    i.addEventListener("pointerup", c), i.addEventListener("pointercancel", c), i.addEventListener("click", (l) => {
      l.stopPropagation(), a || r.clicked(o);
    });
  });
}
class Ka {
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
  /** How many are drawn - what a test asks to know a cull actually culled. */
  count() {
    return this.#e.size;
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
const zn = 200;
function Ga(e, t, n, r) {
  const { scale: i, tx: o, ty: s } = t, a = [];
  return e.forEach((c, l) => {
    if (!r(l)) return;
    const d = c.x * i + o, g = c.y * i + s;
    d < -zn || g < -zn || d > n.width + zn || g > n.height + zn || a.push(l);
  }), a;
}
function Wa(e) {
  const t = T("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
  e.appendChild(t);
  const n = document.createElement("gufe-view");
  return n.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", {
    show(r) {
      n.payload = r, n.parentNode !== t && t.replaceChildren(n);
    },
    message(r) {
      t.replaceChildren(pe(r));
    },
    // Removing the nested view fires its own `disconnectedCallback`, which is
    // where whatever it mounted releases its viewers.
    cleanup() {
      n.remove();
    }
  };
}
function ot(e) {
  return e > 0 ? `+${e}` : String(e);
}
function ys(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const yp = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), $p = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), bp = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, vp = (e) => {
  const t = yp(e);
  return $p.has(t) || bp(t);
};
function Ja(e, t, n, r) {
  const i = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!i || i.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let o = 0;
  for (const s of Array.from(i.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && vp(s) || (e.appendChild(document.importNode(s, !0)), o++);
  }
  return o ? !0 : (e.replaceChildren(), !1);
}
const wp = 1e-6;
function In(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function $s(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function _p(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function bs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], c = o[s][1], l = t[a * 3 + c];
      if (Math.abs(l) < 1e-14) continue;
      const d = t[a * 3 + a], g = t[c * 3 + c], w = (g - d) / (2 * l);
      let p;
      Math.abs(w) > 1e10 ? p = 1 / (2 * w) : p = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
      const v = 1 / Math.sqrt(1 + p * p), _ = p * v;
      t[a * 3 + a] = d - p * l, t[c * 3 + c] = g + p * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let h = 0; h < 3; h++)
        if (h !== a && h !== c) {
          const $ = t[h * 3 + a], m = t[h * 3 + c];
          t[h * 3 + a] = v * $ - _ * m, t[a * 3 + h] = t[h * 3 + a], t[h * 3 + c] = _ * $ + v * m, t[c * 3 + h] = t[h * 3 + c];
        }
      for (let h = 0; h < 3; h++) {
        const $ = n[h * 3 + a], m = n[h * 3 + c];
        n[h * 3 + a] = v * $ - _ * m, n[h * 3 + c] = _ * $ + v * m;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Sp(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], i[0] += t[S][0], i[1] += t[S][1], i[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]], determined: !1 };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const u = e[S][0] - r[0], f = e[S][1] - r[1], b = e[S][2] - r[2], x = t[S][0] - i[0], E = t[S][1] - i[1], A = t[S][2] - i[2];
    o[0] += u * x, o[1] += u * E, o[2] += u * A, o[3] += f * x, o[4] += f * E, o[5] += f * A, o[6] += b * x, o[7] += b * E, o[8] += b * A;
  }
  const s = $s(o), a = In(s, o), c = In(o, s);
  let l = bs(a), d = bs(c);
  function g(S) {
    const u = [0, 1, 2].sort((b, x) => S.values[x] - S.values[b]), f = new Array(9);
    for (let b = 0; b < 3; b++) {
      const x = u[b];
      f[b] = S.vectors[x], f[3 + b] = S.vectors[3 + x], f[6 + b] = S.vectors[6 + x];
    }
    return {
      values: [S.values[u[0]], S.values[u[1]], S.values[u[2]]],
      vectors: f
    };
  }
  l = g(l), d = g(d);
  const w = l.vectors, p = d.vectors;
  for (let S = 0; S < 3; S++) {
    const u = w[S], f = w[3 + S], b = w[6 + S], x = o[0] * u + o[1] * f + o[2] * b, E = o[3] * u + o[4] * f + o[5] * b, A = o[6] * u + o[7] * f + o[8] * b, M = p[S], R = p[3 + S], D = p[6 + S];
    x * M + E * R + A * D < 0 && (p[S] = -M, p[3 + S] = -R, p[6 + S] = -D);
  }
  const v = $s(w);
  let _ = In(p, v);
  _p(_) < 0 && (p[2] = -p[2], p[5] = -p[5], p[8] = -p[8], _ = In(p, v));
  const h = _[0] * i[0] + _[1] * i[1] + _[2] * i[2], $ = _[3] * i[0] + _[4] * i[1] + _[5] * i[2], m = _[6] * i[0] + _[7] * i[1] + _[8] * i[2], k = l.values[1] > wp * l.values[0];
  return { R: _, t: [r[0] - h, r[1] - $, r[2] - m], determined: k };
}
function kp(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
function Cp(e, t) {
  const n = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  e.appendChild(n);
  let r = [], i = 0, o = !0, s = !1;
  const a = () => {
    i && cancelAnimationFrame(i), i = 0, s && $a(r[0]?.viewer ?? null, r[0]?.interaction ?? null), s = !1;
    for (const c of r)
      c.interaction?.cleanup(), po(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), d = T("div", "flex:1;position:relative;min-height:0;");
      d.dataset.gufeViewer = "", l.appendChild(d), t && l.appendChild(T("div", Wr, c)), n.appendChild(l);
      const g = { container: d, viewer: null, interaction: null };
      return r.push(g), g;
    },
    open(c, l) {
      const d = Qe.createViewer(c.container, { backgroundColor: zt.viewer() });
      for (const g of l) d.addModel(Mf(g), "sdf");
      return c.viewer = d, d;
    },
    settle(c) {
      c.viewer && (c.interaction = or(c.container, c.viewer));
    },
    pose(c) {
      ba(c.viewer, c.interaction), s = !0;
    },
    sync() {
      if (r.length < 2) return;
      const c = r.map(() => "");
      let l = !1;
      const d = () => {
        if (o) {
          if (!l)
            for (let g = 0; g < r.length; g++) {
              const w = r[g].viewer;
              if (!w) continue;
              const p = JSON.stringify(w.getView());
              if (p !== c[g]) {
                l = !0;
                for (let v = 0; v < r.length; v++)
                  v !== g && r[v].viewer && (r[v].viewer.setView(w.getView()), r[v].viewer.render()), c[v] = p;
                l = !1;
                break;
              }
            }
          i = requestAnimationFrame(d);
        }
      };
      i = requestAnimationFrame(d);
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
const vs = `
`, xr = 4;
function ws(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (i) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", he(i)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Ep(e, t, n) {
  const r = [], i = [];
  for (const [d, g] of n) {
    const w = e[g], p = t[d];
    !w || !p || (r.push(w), i.push(p));
  }
  if (r.length < 2) return null;
  const o = (d) => {
    let g = 0, w = 0;
    for (const p of d)
      g += p[0], w += p[1];
    return [g / d.length, w / d.length];
  }, s = o(r), a = o(i);
  let c = null, l = -1 / 0;
  for (const d of [!1, !0]) {
    let g = 0, w = 0;
    for (let m = 0; m < r.length; m++) {
      const k = (d ? -1 : 1) * (r[m][0] - s[0]), S = r[m][1] - s[1], u = i[m][0] - a[0], f = i[m][1] - a[1];
      g += k * f - S * u, w += k * u + S * f;
    }
    const p = Math.hypot(g, w);
    if (p <= l) continue;
    l = p;
    const v = Math.atan2(g, w), _ = Math.cos(v), h = Math.sin(v), $ = (d ? -1 : 1) * s[0];
    c = {
      cos: _,
      sin: h,
      mirror: d,
      tx: a[0] - (_ * $ - h * s[1]),
      ty: a[1] - (h * $ + _ * s[1])
    };
  }
  return c;
}
function xp(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Pp(e, t, n) {
  const r = go(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(vs);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[xr + o], a = t[o];
    if (s == null || !a) return e;
    i[xr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = xr + r.atoms + a, l = i[c];
      if (l == null) break;
      const d = parseInt(l.substring(9, 12), 10);
      d !== 1 && d !== 6 || (i[c] = l.substring(0, 9) + String(d === 1 ? 6 : 1).padStart(3) + l.substring(12));
    }
  return i.join(vs);
}
function Ap(e, t, n) {
  try {
    const r = (s) => qr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = Ep(i, r(e), n);
    return o ? Pp(
      t,
      i.map((s) => xp(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Rp(e, t, n, r, i) {
  const o = ws(e, t, r), s = ws(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: Ap(o, s, i) };
}
const Np = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Mp = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Tp() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Kr = Tp() ? Np : Mp, Pr = 420, Ve = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Ar = { gap: 2.5, minLiftFraction: 0.6 }, Op = 24, _s = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, Fp = {
  mapped: null,
  element: Ae.modifiedColor,
  uniqueA: Ae.destroyedColor,
  uniqueB: Ae.createdColor
}, zp = 132;
function Ss(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Ip(e, t) {
  const n = Ss(e), r = Ss(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + Ar.gap, a = Ar.minLiftFraction * o + Ar.gap;
  return { axis: i, lift: Math.max(s, a) };
}
function Ya(e) {
  const t = $f(Ae.customSpec);
  return [
    { mol: e.molA, uniques: e.uniquesA, side: "left", custom: t.left },
    { mol: e.molB, uniques: e.uniquesB, side: "right", custom: t.right }
  ];
}
function jp(e, t) {
  for (const n of [t.molA, t.molB]) {
    const r = e.box(n.name), i = e.open(r, [n]);
    i.setStyle(
      {},
      { stick: { radius: Ve.stick, colorscheme: "Jmol" }, sphere: { scale: Ve.sphere, colorscheme: "Jmol" } }
    ), i.zoomTo(), i.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function Dp(e, t) {
  const n = Ae;
  for (const r of Ya(t)) {
    const i = e.box(r.mol.name), o = e.open(i, [r.mol]);
    o.setStyle(
      {},
      { stick: { radius: Ve.stick, color: Kr.core }, sphere: { scale: Ve.sphere, color: Kr.core } }
    );
    const s = (a, c) => {
      o.addStyle(
        { serial: a },
        {
          stick: { radius: Ve.markStick, color: ss(c) },
          sphere: { scale: Ve.markSphere, color: ss(c) }
        }
      );
    };
    for (const a of wa(n, r.mol, r.uniques, r.side))
      for (const c of a.atoms) s(c, a.color);
    for (const a of r.custom)
      a < r.mol.symbols.length && s(a, n.customColor);
    o.zoomTo(), o.render(), e.settle(i), e.pose(i);
  }
  e.sync();
}
function Lp(e, t) {
  const { molA: n, molB: r, nameA: i, nameB: o, pairs: s } = t, a = e.box(`${i} (left), both overlaid (middle), ${o} (right)`), c = Gp(n.coords, r.coords), l = ($, m) => ({
    ...$,
    coords: $.coords.map(([k, S, u]) => [k + m, S, u])
  }), d = l(n, -c), g = l(r, c), w = e.open(a, [d, g, n, r]);
  w.setStyle({}, { stick: {} });
  const p = Array.from(s);
  p.forEach(([$, m], k) => {
    const S = d.coords[$], u = g.coords[m];
    if (!S || !u) return;
    const f = Wp(k, p.length);
    for (const [b, x, E] of [S, u])
      w.addSphere({
        center: { x: b, y: x, z: E },
        radius: _s.sphereRadius,
        color: f,
        alpha: _s.sphereAlpha
      });
  }), w.zoomTo();
  const { clientWidth: v, clientHeight: _ } = a.container, h = v - 2 * Op;
  h > 0 && h < _ && w.zoom(h / _), w.render(), e.settle(a);
}
function qp(e, t) {
  const { molA: n, molB: r, nameA: i, nameB: o, pairs: s } = t, a = e.box(`${i} to ${o}  (${s.size} mapped pairs)`), { axis: c, lift: l } = Ip(n.coords, r.coords), d = {
    ...r,
    coords: r.coords.map((p) => {
      const v = [p[0], p[1], p[2]];
      return v[c] += l, v;
    })
  }, g = e.open(a, [n, d]), w = {
    stick: { radius: Ve.stick, colorscheme: "Jmol" },
    sphere: { scale: Ve.pairSphere, colorscheme: "Jmol" }
  };
  g.setStyle({ model: 0 }, w), g.setStyle({ model: 1 }, w);
  for (const [p, v] of s) {
    const _ = n.coords[p], h = d.coords[v];
    !_ || !h || g.addCylinder({
      start: { x: _[0], y: _[1], z: _[2] },
      end: { x: h[0], y: h[1], z: h[2] },
      radius: Ve.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: Kr.pairLine
    });
  }
  g.zoomTo(), c === 2 ? g.rotate(90, "x") : c === 0 && g.rotate(-90, "z"), g.render(), e.settle(a);
}
function Bp(e, t) {
  const n = Ae, r = Ya(t).map((i) => {
    const o = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), s = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${va()};`
    );
    return s.appendChild(pe("Loading 2D depiction...")), o.appendChild(s), e.named && o.appendChild(T("div", Wr, i.mol.name)), e.element.appendChild(o), { box: s, side: i };
  });
  fo().then((i) => {
    const o = _f(n, i), s = Rp(i, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = wa(n, c.mol, c.uniques, c.side), d = Sf(n, Pr, l, c.custom, o, c.mol.symbols.length), g = kf(i, c.side === "left" ? s.left : s.right, Pr, d);
      if (a.replaceChildren(), !g) {
        a.appendChild(pe("Failed to parse molecule", !0));
        continue;
      }
      Ca(a, g, Pr);
      const w = a.querySelector("svg");
      w && Rf(w, c.mol, n, l, c.custom, o);
    }
  }).catch((i) => {
    for (const { box: o } of r)
      o.replaceChildren(pe(`RDKit failed to load: ${he(i)}`, !0));
  });
}
function Vp(e, t, n) {
  const { nameA: r, nameB: i, pairs: o, molA: s, molB: a, uniquesA: c, uniquesB: l } = t, d = T(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
  );
  e.element.appendChild(d), d.appendChild(
    T(
      "div",
      `font-size:${Y.title};font-weight:${fe.bold};color:${xe.title};`,
      n.name || `${r} to ${i}`
    )
  );
  const g = Hp(o, s.symbols, a.symbols), w = T("div", Be.row), p = [];
  let v = null;
  const _ = (A, M, R, D) => {
    const j = so(`${Be.plain}${Be.button}`, Be.className);
    j.appendChild(Ze(A, String(M), D)), j.onclick = () => {
      v = v === R ? null : R, b();
    }, p.push({ node: j, kinds: R }), w.appendChild(j);
  }, h = (A, M) => {
    const R = T("span", Be.plain);
    R.appendChild(Ze(A, M)), w.appendChild(R);
  };
  _("mapped atoms", o.size, ["mapped", "element"]), _("element changes", c.elements.length, ["element"], Ae.modifiedColor), _(`unique to ${r}`, c.atoms.length, ["uniqueA"], Ae.destroyedColor), _(`unique to ${i}`, l.atoms.length, ["uniqueB"], Ae.createdColor), h(`atoms in ${r}`, String(s.symbols.length)), h(`atoms in ${i}`, String(a.symbols.length)), h("score", n.score == null ? Je : n.score.toFixed(3)), d.appendChild(w), d.appendChild(T("div", Fr, "Correspondence"));
  const $ = T("div", `font-size:${Y.small};line-height:1.6;color:${xe.faint};`);
  d.appendChild($);
  const m = T(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${zp}px,1fr));gap:${X.xs} ${X.md};font-family:${Y.mono};font-size:${Y.small};color:${xe.primary};`
  );
  d.appendChild(m);
  const k = String(Math.max(s.symbols.length, a.symbols.length, 1) - 1).length, S = (A, M) => `${(A == null ? Je : String(A)).padStart(k)} ${M.padEnd(2)}`, u = (A) => {
    if (A.kind === "uniqueA") return `${r} atom ${A.a} ${A.symbolA} maps to nothing`;
    if (A.kind === "uniqueB") return `${i} atom ${A.b} ${A.symbolB} maps to nothing`;
    const M = A.kind === "element" ? ", an element change" : "";
    return `${r} atom ${A.a} ${A.symbolA} maps to ${i} atom ${A.b} ${A.symbolB}${M}`;
  }, f = (A) => {
    const M = T(
      "div",
      `white-space:pre;padding:${X.xs} ${X.md};border-radius:${ve.sm};background:${zt.card};border-left:3px solid ${Fp[A.kind] ?? "transparent"};`,
      `${S(A.a, A.symbolA)} -> ${S(A.b, A.symbolB)}`
    );
    return M.title = u(A), M.dataset.gufeRelation = A.kind, M;
  }, b = () => {
    const A = v, M = A ? g.filter((R) => A.includes(R.kind)) : g;
    m.replaceChildren(...M.map(f)), M.length || m.appendChild(
      T(
        "div",
        `font-size:${Y.small};line-height:1.6;color:${xe.faint};grid-column:1/-1;`,
        v ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), $.textContent = (o.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${i}, by atom index and element` + (v ? "; click the chip again for all of them" : "");
    for (const R of p) {
      const D = R.kinds === v;
      R.node.setAttribute("aria-pressed", String(D)), R.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  b();
  const x = Object.entries(n.annotations ?? {}).filter(([A]) => A !== "score");
  if (!x.length) return;
  d.appendChild(T("div", Fr, "Annotations"));
  const E = T("div", `${yc}color:${xe.faint};`);
  for (const [A, M] of x)
    E.appendChild(T("div", "", `${A}: ${String(M)}`));
  d.appendChild(E);
}
const ks = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Rr = {
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Cs(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function Up(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Hp(e, t, n) {
  const r = [];
  for (let o = 0; o < t.length; o++) {
    const s = t[o] ?? "", a = e.get(o);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: o, b: null, symbolA: s, symbolB: "" });
      continue;
    }
    const c = n[a] ?? "";
    r.push({ kind: s === c ? "mapped" : "element", a: o, b: a, symbolA: s, symbolB: c });
  }
  const i = new Set(e.values());
  for (let o = 0; o < n.length; o++)
    i.has(o) || r.push({ kind: "uniqueB", a: null, b: o, symbolA: "", symbolB: n[o] ?? "" });
  return r;
}
function Xa(e, t) {
  const n = Re(t, e.componentA, "SmallMoleculeComponentViz"), r = Re(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: _o(t, [e.componentA, e.componentB]) };
}
function Kp(e, t, n) {
  const r = [], i = [];
  for (const [s, a] of n) {
    const c = e.coords[s], l = t.coords[a];
    c && l && (r.push(c), i.push(l));
  }
  const o = Sp(r, i);
  return o?.determined ? { ...t, coords: t.coords.map((s) => kp(s, o.R, o.t)) } : t;
}
function Gp(e, t) {
  let n = 0;
  for (const i of [e, t]) {
    let o = 1 / 0;
    for (const s of i)
      s[0] < o && (o = s[0]), s[0] - o > n && (n = s[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Rr.minSpread ? r : Rr.minSpread) * Rr.spreadFactor;
}
function Wp(e, t) {
  const n = Nu, i = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(i), s = Math.min(o + 1, n.length - 1), a = i - o;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const d = (w) => parseInt(w.slice(1 + l * 2, 3 + l * 2), 16), g = Math.round(d(n[o]) + (d(n[s]) - d(n[o])) * a);
    c += g.toString(16).padStart(2, "0");
  }
  return c;
}
function Jp(e, t) {
  const n = Re(t, e.componentA, "SmallMoleculeComponentViz"), r = Re(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const i = et(n), o = et(r), s = Up(e);
  let a, c;
  try {
    a = qr(n.sdf, i), c = qr(r.sdf, o);
  } catch (d) {
    return { problem: `Could not read a molecule: ${he(d)}`, isError: !0 };
  }
  c = Kp(a, c, s);
  const l = /* @__PURE__ */ new Map();
  for (const [d, g] of s) l.set(g, d);
  return {
    pair: {
      from: n,
      to: r,
      nameA: i,
      nameB: o,
      pairs: s,
      flipped: l,
      molA: a,
      molB: c,
      uniquesA: Cs(s, a.symbols, c.symbols),
      uniquesB: Cs(l, c.symbols, a.symbols)
    }
  };
}
class Yp extends Ne {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Jp(n, St(n));
    if ("problem" in r)
      return t.appendChild(pe(r.problem, r.isError)), {};
    const i = r.pair, o = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const s = Cp(o, Xr(t)), a = ct("atom-mapping.mode", "plain", ks.map((v) => v.id));
    let c = a.get();
    const l = T("div", Qs), d = fa(
      ks,
      c,
      (v) => {
        c = v, p();
      },
      { remember: a, fit: { pane: o, bar: l } }
    );
    l.appendChild(d), o.appendChild(l);
    let g = !0;
    const w = {
      plain: jp,
      colored: Dp,
      openfe: Lp,
      lines: qp
    }, p = () => {
      if (s.clear(), c === "info") return Vp(s, i, n);
      if (c === "2d") return Bp(s, i);
      const v = w[c];
      s.element.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
        g && (s.element.replaceChildren(), v(s, i));
      }).catch((_) => {
        s.element.replaceChildren(pe(`3D render failed: ${he(_)}`, !0));
      });
    };
    return p(), {
      onResize: () => s.resize(),
      cleanup: () => {
        g = !1, d.cleanup(), s.cleanup();
      }
    };
  }
}
Me("gufe-atom-mapping", Yp);
const Es = ["Force-directed", "Circular", "Radial"], Xp = "ligand-network", Zp = "Click a ligand or an edge to see it.";
function Qp(e) {
  const { index: t, from: n, to: r, ...i } = e;
  return i;
}
function eh(e) {
  return Ia(e);
}
const xs = (e) => Math.round(e * 100) / 100;
function th(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const i = r(n.selected) ? Math.trunc(n.selected) : -1, o = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: i, selectedKind: o };
}
function nh(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Rt = { initial: 0.58, min: 0.25, max: 0.8 }, Pe = 38, Ps = 1.5, Nr = {
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
}, rh = "6 4", As = 200, oh = 2, ih = Math.SQRT2 * (Pe - oh), sh = 14, ah = 18, Se = {
  fontSize: 11,
  below: Pe + 12,
  minFontSize: 7,
  insideWidth: (Pe - 6) * 2
}, Ot = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Rs = 1.5, ch = 6.5, lh = 0.9, dh = 14, Mr = { size: 8, clearance: 8 }, uh = { fontSize: 10 }, fh = 0.4, ph = Dr(le.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, Za = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], hh = (e) => Va(Za, e), mh = (e) => gp(Za, e), gh = 1.8, Ns = 2 * Pe + 68, Ee = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Ns,
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
  collisionPadding: Ns / 2 - Pe,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function yh(e) {
  const t = T("div", gc);
  return e.appendChild(t), {
    show(n, r, i) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${i - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function $h(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const o = ae("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Pe + Mr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Mr.size,
      markerHeight: Mr.size,
      orient: "auto"
    });
    return o.appendChild(ae("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function bh(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function vh(e) {
  const [t, n] = le.netEdgeRamp.map(bh), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Ye = et;
function Qa(e, t) {
  return t ? Ye(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function wh(e, t, n, r, i) {
  const o = r.trim().toLowerCase(), s = n.size > 0 || o.length > 0;
  if (!s && i <= 0) return null;
  const a = /* @__PURE__ */ new Set();
  for (const l of e) {
    const d = l["gufe-key"];
    (!s || n.has(d) || o.length > 0 && Qa(l, o)) && a.add(d);
  }
  const c = /* @__PURE__ */ new Set();
  return t.forEach((l, d) => {
    (l.score ?? 0) < i || !a.has(l.from["gufe-key"]) || !a.has(l.to["gufe-key"]) || c.add(d);
  }), { nodes: a, edges: c };
}
function _h(e) {
  const t = new Ka(), n = sr("cpk"), r = (p) => (e.matched().get(p) ?? []).join(","), i = (p, v) => {
    if (!t.wants(v)) return;
    const _ = e.nodes[v], h = e.matched().get(v), $ = _.sdf && yo(
      p,
      _.sdf,
      As,
      Ae.layout,
      h && { atoms: h, color: ph, radius: fh },
      n
    );
    if (!$) {
      t.refused(v);
      return;
    }
    if (!Ja(e.depictionGroups[v], $, As, ih)) {
      t.refused(v);
      return;
    }
    t.drew(v, r(v));
  }, o = () => t.forget(r, (p) => e.depictionGroups[p].replaceChildren()), s = [], a = (p, v) => {
    if (s[p]) return s[p];
    v.setAttribute("font-size", String(Se.fontSize));
    let _ = 0;
    try {
      _ = v.getBBox().width;
    } catch {
      return Se.fontSize;
    }
    if (!_) return Se.fontSize;
    const h = Se.fontSize * Se.insideWidth / _;
    return s[p] = Math.max(Se.minFontSize, Math.min(Se.fontSize, h)), s[p];
  }, c = [], l = (p) => {
    const v = e.captionPlates[p];
    if (c[p] === Se.below) {
      v.setAttribute("display", "inline");
      return;
    }
    let _ = null;
    try {
      _ = e.captions[p].getBBox();
    } catch {
      _ = null;
    }
    if (!_?.width) {
      v.setAttribute("display", "none");
      return;
    }
    v.setAttribute("x", String(_.x - Ot.captionPadX)), v.setAttribute("y", String(_.y - Ot.captionPadY)), v.setAttribute("width", String(_.width + Ot.captionPadX * 2)), v.setAttribute("height", String(_.height + Ot.captionPadY * 2)), v.setAttribute("display", "inline"), c[p] = Se.below;
  }, d = (p, v) => {
    const _ = v.structure && !t.has(p) ? mh(v) : v;
    e.depictionGroups[p].setAttribute("display", _.structure ? "inline" : "none");
    const h = e.plates[p];
    h.setAttribute("display", _.structure ? "inline" : "none");
    const $ = e.matched().has(p);
    h.setAttribute("stroke", $ ? le.netMatchStroke : le.netNodeStroke);
    const m = e.circles[p];
    m.setAttribute("fill", _.disc ? $ ? le.netMatchFill : le.netNodeFill : "none"), m.setAttribute("stroke", _.disc ? $ ? le.netMatchStroke : le.netNodeStroke : "none"), e.initials[p].setAttribute("display", _.initials ? "inline" : "none");
    const k = e.charges[p];
    if (k) {
      const b = !_.structure, x = Pe * Nr.at;
      k.setAttribute("x", String(x)), k.setAttribute("y", String(-x)), k.setAttribute("font-size", String(b ? Nr.bigFontSize : Nr.fontSize)), k.setAttribute("font-weight", b ? fe.bold : fe.normal);
    }
    const S = e.captions[p], u = _.name === "below";
    if (S.setAttribute("fill", $ ? le.netMatchStroke : u ? zu() : le.netNodeCaption), S.setAttribute("display", _.name === "none" ? "none" : "inline"), u || e.captionPlates[p].setAttribute("display", "none"), _.name === "none") return;
    const f = _.name === "inside";
    S.setAttribute("y", f ? "0" : String(Se.below)), S.setAttribute("dominant-baseline", f ? "middle" : "auto"), S.setAttribute("font-size", String(f ? a(p, S) : Se.fontSize)), u && l(p);
  };
  let g = null;
  return { apply: (p, v, _) => {
    const h = hh(p);
    g = h, e.stage.setAttribute("data-detail", h.id), e.edgeLabels.setAttribute("display", h.edgeScores ? "inline" : "none");
    for (let m = 0; m < e.nodes.length; m++) d(m, h);
    if (!h.structure) return;
    const $ = Ga(e.nodes, { scale: p, tx: v, ty: _ }, e.viewport(), (m) => t.wants(m));
    $.length && e.rdkit().then((m) => {
      if (!(!m || g !== h))
        for (const k of $)
          i(m, k), d(k, h);
    }).catch(() => {
    });
  }, drawn: () => t.count(), forget: o };
}
function Sh(e) {
  const t = ao("ligand-network.minScore", 0, 0, 1);
  return Ba({
    namespace: "ligand-network",
    noun: "ligands",
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
    filters: () => {
      const n = T("div", `display:flex;align-items:center;gap:${X.lg};font-size:${Y.small};color:${z.textMuted};`), r = T("span", `min-width:28px;color:${z.textPrimary};`, "0.00"), i = T("input", "flex:1;");
      return i.type = "range", i.min = "0", i.max = "1", i.step = "0.01", i.value = String(t.get()), e.filter.minScore = Number(i.value), i.setAttribute("aria-label", "Hide mappings scoring below this"), i.oninput = () => {
        e.filter.minScore = Number(i.value), r.textContent = e.filter.minScore.toFixed(2), t.set(e.filter.minScore), e.refresh();
      }, n.appendChild(T("span", "", "score >=")), n.appendChild(i), n.appendChild(r), [n];
    },
    shows: (n) => Qa(n, e.query.text.trim().toLowerCase()),
    row: (n) => ({
      name: Ye(n),
      title: `${Ye(n)}
${n.smiles ?? ""}`
    }),
    export: {
      // Named "mappings" rather than "edges": on this canvas an edge is a
      // mapping, and the panel says so everywhere else.
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    refresh: e.refresh,
    focus: e.focus
  });
}
class kh extends Ne {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: i, edges: o, unresolved: s, dangling: a } = Da({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (C) => [C.componentA, C.componentB]
    }), c = Gn(n.name || "Ligand network");
    c.statsEl.appendChild(Ze("ligands", String(i.length))), c.statsEl.appendChild(Ze("mappings", String(o.length))), t.appendChild(c);
    const l = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const d = /* @__PURE__ */ new Set(), g = { minScore: 0 }, w = { text: "" }, p = () => ma(), v = La(
      p,
      i.map((C) => C.sdf ?? "")
    );
    let _ = /* @__PURE__ */ new Map();
    const h = async (C) => {
      const P = await v.run(C);
      return P.status === "superseded" || (_ = P.status === "ok" ? P.matched : /* @__PURE__ */ new Map(), I()), P;
    }, $ = vo(
      c,
      () => Sh({
        nodes: i,
        edges: o,
        selected: d,
        filter: g,
        query: w,
        refresh: () => U(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (C) => {
          M?.focusOn(C), O({ kind: "ligand", index: C });
        },
        match: (C) => h(C)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => y(),
        remember: it("ligand-network.menuOpen", !1),
        extras: wo
      }
    );
    l.appendChild($.panel);
    let m = () => {
    };
    const k = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), S = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.appBg};`);
    l.appendChild(k), l.appendChild(
      Aa(l, k, S, {
        min: Rt.min,
        max: Rt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: ao("ligand-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => m(),
        onOrient: (C) => $o($.panel, C)
      })
    ), l.appendChild(S);
    const u = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${z.netCanvasBg};`);
    k.appendChild(u);
    const f = ct("ligand-network.layout", "Force-directed", Es), b = this.#e(
      (C) => y(C),
      () => M?.reset(),
      f,
      o.some((C) => ys(C.from, C.to) !== 0)
    );
    k.appendChild(b.bar);
    const x = this.#t(S, r);
    if (!i.length)
      return u.appendChild(
        pe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), x.message("Nothing to show."), {};
    s && st(
      u,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && st(u, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const E = p(), A = yh(u);
    let M = null;
    const R = th(xc(Xp), i.length);
    let D = R && { scale: R.scale, tx: R.tx, ty: R.ty }, j = R ? R.nodes : null, L = o.length ? { kind: "edge", index: 0 } : null;
    if (R && R.selected >= 0) {
      const C = R.selectedKind ?? "edge";
      R.selected < (C === "ligand" ? i.length : o.length) && (L = { kind: C, index: R.selected });
    }
    const W = () => M?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let ne = f.get(), Z = !1;
    const oe = Ua(), G = () => {
      if (!L) {
        x.message(o.length ? Zp : "Click a ligand to see it.");
        return;
      }
      L.kind === "edge" ? x.showMapping(o[L.index]) : x.showLigand(i[L.index]);
    }, O = (C) => {
      L = C, G(), M?.setSelected(L);
    }, U = () => {
      const C = wh(i, o, d, w.text, g.minScore);
      M?.setEmphasis(C?.nodes ?? null, C?.edges ?? null);
    }, I = () => M?.setMatches(_), y = (C = ne) => {
      const P = M && C === ne ? M.transform() : null;
      C !== ne && (j = null);
      const B = oe.start();
      ne = C, M?.cleanup(), M = null, u.querySelectorAll("svg").forEach((N) => N.remove());
      const H = u.clientWidth || 800, Q = u.clientHeight || 600;
      Ch(i, H, Q, ne, o), j && nh(i, j);
      const ee = () => {
        if (!B()) return;
        const N = this.#n(u, i, o, H, Q, O, E, A);
        M = N, N.setSelected(L), U(), I();
        const F = D ?? P;
        F ? (N.setTransform(F.scale, F.tx, F.ty), D = null) : N.fit();
      };
      if (ne !== "Force-directed" || Z || j) {
        ee();
        return;
      }
      Eh(i, o, H, Q).then((N) => {
        if (B()) {
          if (N) {
            ee();
            return;
          }
          Z = !0, b.picker.value = "Circular", st(u, "d3 could not be loaded - showing the circular layout instead"), y("Circular");
        }
      }, ee);
    };
    return m = () => y(), y(), G(), {
      onResize: () => y(),
      cleanup: () => {
        oe.stop(), v.cancel(), A.remove(), M?.cleanup(), M = null, x.cleanup();
      },
      viewState: () => ({
        nodes: i.map((C) => [xs(C.x), xs(C.y)]),
        ...W(),
        selected: L ? L.index : -1,
        selectedKind: L ? L.kind : "edge"
      })
    };
  }
  #e(t, n, r, i) {
    const o = T(
      "div",
      Zs.bottom
    ), s = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${z.textMuted};`);
    if (s.appendChild(T("span", "", "score")), s.appendChild(
      T(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${le.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(T("span", "", "0 -> 1")), o.appendChild(s), i) {
      const c = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${z.textMuted};`);
      c.appendChild(
        T(
          "span",
          `width:24px;height:0;border-top:2px dashed ${z.netEdgeLine};display:inline-block;`
        )
      ), c.appendChild(T("span", "", "net charge change")), o.appendChild(c);
    }
    o.appendChild(T("label", `font-size:${Y.body};margin-left:auto;color:${z.textMuted};`, "Layout"));
    const a = It(
      Es.map((c) => ({ id: c, label: c })),
      r.get(),
      (c) => t(c),
      r
    );
    return o.appendChild(a), o.appendChild(ho(n, "Reset pan and zoom")), { bar: o, picker: a };
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
    const r = Wa(t);
    return {
      ...r,
      showMapping: (i) => r.show(Xa(Qp(i), n)),
      showLigand: (i) => r.show(eh(i))
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, r, i, o, s, a, c) {
    const l = ae("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), d = ae("g");
    l.appendChild(d), t.appendChild(l);
    const g = ae("defs"), w = $h(g);
    l.appendChild(g);
    const p = [], v = ae("g"), _ = ae("g"), h = ae("g", { "pointer-events": "none" }), $ = ae("g");
    d.append(v, _, h, $);
    for (const L of r) {
      const W = vh(L.score), ne = Rs + (L.score ?? 0.5) * (ch - Rs), Z = ae("line", {
        stroke: le.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": ne + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), oe = ys(L.from, L.to), G = ae("line", {
        stroke: W,
        "stroke-width": ne,
        "stroke-opacity": lh,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${w(W)})`,
        "pointer-events": "none",
        ...oe ? { "stroke-dasharray": rh } : {}
      }), O = ae("line", { stroke: "transparent", "stroke-width": dh, style: "cursor:pointer;" });
      O.addEventListener("click", (y) => {
        y.stopPropagation(), s({ kind: "edge", index: L.index });
      }), O.addEventListener("mousemove", (y) => {
        c.show(
          `<div style="font-weight:700;color:${z.titleColor};">${ke(Ye(L.from))} -&gt; ${ke(Ye(L.to))}</div>` + (L.score == null ? `<div style="color:${z.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${L.score.toFixed(3)}</b></div>`) + (oe ? `<div style="margin-top:4px;">net charge <b>${ke(ot(oe))}</b> <span style="color:${z.textMuted2};">(${ke(ot(L.from.total_charge ?? 0))} to ${ke(ot(L.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Y.tiny};color:${z.textMuted2};">Click to see the mapping</div>`,
          y.offsetX,
          y.offsetY
        );
      }), O.addEventListener("mouseleave", () => c.hide()), p.push(Z), v.append(Z, G), _.appendChild(O);
      const U = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": uh.fontSize,
        "font-weight": 600,
        fill: le.netEdgeLabel
      });
      U.textContent = L.score == null ? "" : L.score.toFixed(2);
      const I = ae("g", { class: "gufe-edge-label" });
      I.appendChild(U), h.appendChild(I);
    }
    const m = [], k = [], S = [], u = [], f = [], b = [], x = [], E = [], A = n.map((L) => {
      const W = ae("g", { class: "gufe-node", style: "cursor:grab;" });
      W.addEventListener("mousemove", (y) => {
        c.show(
          `<div style="font-weight:700;color:${z.titleColor};">${ke(Ye(L))}</div>` + (L.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${ke(L.smiles)}</div>` : "") + (L.total_charge ? `<div style="margin-top:3px;">formal charge <b>${ke(ot(L.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Y.tiny};color:${z.textMuted2};overflow-wrap:anywhere;">${ke(L["gufe-key"])}</div><div style="margin-top:4px;font-size:${Y.tiny};color:${z.textMuted2};">Click to see the ligand</div>`,
          y.offsetX,
          y.offsetY
        );
      }), W.addEventListener("mouseleave", () => c.hide());
      const ne = ae("circle", {
        class: "gufe-node-halo",
        r: Pe + Nt.padding,
        fill: "none",
        stroke: le.netHaloColor,
        "stroke-width": Nt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      W.appendChild(ne), f.push(ne);
      const Z = ae("circle", {
        class: "gufe-node-disc",
        r: Pe,
        fill: le.netNodeFill,
        stroke: le.netNodeStroke,
        "stroke-width": Ps,
        "pointer-events": "all"
      });
      W.appendChild(Z), k.push(Z);
      const oe = ae("circle", {
        class: "gufe-node-plate",
        r: Pe,
        fill: jr(),
        stroke: le.netNodeStroke,
        "stroke-width": Ps,
        display: "none",
        "pointer-events": "none"
      });
      W.appendChild(oe), S.push(oe);
      const G = ae("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      W.appendChild(G), m.push(G);
      const O = ae("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": ah,
        "font-weight": 700,
        fill: le.netInitials,
        "pointer-events": "none"
      });
      if (O.textContent = Ye(L).slice(0, 2).toUpperCase(), W.appendChild(O), b.push(O), L.total_charge) {
        const y = ae("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: le.badgeFg,
          "pointer-events": "none"
        });
        y.textContent = ot(L.total_charge), W.appendChild(y), E.push(y);
      } else
        E.push(null);
      const U = ae("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Se.below,
        "font-size": Se.fontSize,
        "font-weight": 600,
        fill: le.netNodeCaption,
        "pointer-events": "none"
      });
      U.textContent = jn(Ye(L), sh), U.setAttribute("display", "none"), x.push(U);
      const I = ae("rect", {
        class: "gufe-node-caption-plate",
        rx: Ot.captionRadius,
        fill: jr(),
        display: "none",
        "pointer-events": "none"
      });
      return u.push(I), W.appendChild(I), W.appendChild(U), $.appendChild(W), W;
    }), M = () => {
      r.forEach((L, W) => {
        for (const Z of [p[W], v.children[W * 2 + 1], _.children[W]]) {
          const oe = Z;
          oe.setAttribute("x1", String(L.from.x)), oe.setAttribute("y1", String(L.from.y)), oe.setAttribute("x2", String(L.to.x)), oe.setAttribute("y2", String(L.to.y));
        }
        h.children[W].setAttribute(
          "transform",
          `translate(${(L.from.x + L.to.x) / 2},${(L.from.y + L.to.y) / 2 - 8})`
        );
      }), n.forEach((L, W) => A[W].setAttribute("transform", `translate(${L.x},${L.y})`));
    };
    M();
    let R = /* @__PURE__ */ new Map();
    const D = _h({
      nodes: n,
      circles: k,
      plates: S,
      captionPlates: u,
      matched: () => R,
      captions: x,
      initials: b,
      charges: E,
      depictionGroups: m,
      edgeLabels: h,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), j = this.#r(
      l,
      d,
      n,
      A,
      M,
      D.apply,
      (L) => s({ kind: "ligand", index: L })
    );
    return {
      setSelected(L) {
        const W = L?.kind === "edge" ? L.index : -1, ne = L?.kind === "ligand" ? L.index : -1;
        p.forEach((Z, oe) => Z.setAttribute("opacity", oe === W ? String(Nt.opacity) : "0")), f.forEach((Z, oe) => Z.setAttribute("opacity", oe === ne ? String(Nt.opacity) : "0"));
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
        const { scale: W, tx: ne, ty: Z } = j.transform();
        D.apply(W, ne, Z);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(L, W) {
        A.forEach((ne, Z) => {
          const oe = !L || L.has(n[Z]["gufe-key"]);
          ne.setAttribute("opacity", oe ? "1" : String(Ft.node));
        }), r.forEach((ne, Z) => {
          const oe = !W || W.has(Z), G = oe ? "0.9" : String(Ft.edge);
          v.children[Z * 2 + 1].setAttribute("stroke-opacity", G), h.children[Z].setAttribute("opacity", oe ? "1" : String(Ft.edge));
        });
      },
      focusOn(L) {
        const W = n[L];
        W && j.centreOn(W.x, W.y);
      },
      setDetail: D.apply,
      depictionsDrawn: () => D.drawn(),
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
  #r(t, n, r, i, o, s, a) {
    const c = za(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Fa(r, Pe),
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return Ha(i, r, c, { moved: () => o(), clicked: a }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (l, d) => c.centreOn(l, d, gh)
    };
  }
}
function Ch(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (c, l) => {
    c.forEach((d, g) => {
      const w = 2 * Math.PI * g / Math.max(1, c.length) - Math.PI / 2;
      d.x = o + l * Math.cos(w), d.y = s + l * Math.sin(w), d.fx = r === "Force-directed" ? void 0 : d.x, d.fy = r === "Force-directed" ? void 0 : d.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of i)
      c.get(_.from["gufe-key"]).push(_.to["gufe-key"]), c.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const l = new Map(e.map((_) => [_["gufe-key"], _])), d = e.reduce(
      (_, h) => c.get(h["gufe-key"]).length > c.get(_["gufe-key"]).length ? h : _
    ), g = /* @__PURE__ */ new Set([d["gufe-key"]]);
    let w = [d["gufe-key"]], p = 0;
    const v = Math.min(t, n) * 0.18;
    for (; w.length; ) {
      a(
        w.map((h) => l.get(h)),
        p === 0 ? 0 : p * v + 40
      );
      const _ = [];
      for (const h of w)
        for (const $ of c.get(h))
          g.has($) || (g.add($), _.push($));
      w = _, p++;
    }
    a(e.filter((_) => !g.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function Eh(e, t, n, r) {
  return ja({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((i) => ({
      source: i.from["gufe-key"],
      target: i.to["gufe-key"],
      score: i.score
    })),
    tickMultiplier: Ee.tickMultiplier,
    forces: (i, o) => [
      [
        "link",
        i.forceLink(o).id((s) => s["gufe-key"]).distance((s) => Ee.linkBaseDistance + (1 - (s.score ?? 0.5)) * Ee.linkScoreBonus).strength(Ee.linkStrength)
      ],
      [
        "charge",
        i.forceManyBody().strength(Ee.chargeStrength).distanceMin(Ee.chargeDistanceMin).distanceMax(Ee.chargeDistanceMax)
      ],
      ["center", i.forceCenter(n / 2, r / 2).strength(Ee.centerStrength)],
      ["collision", i.forceCollide(Pe + Ee.collisionPadding).iterations(Ee.collisionIterations)],
      ["x", i.forceX(n / 2).strength(Ee.drift)],
      ["y", i.forceY(r / 2).strength(Ee.drift)]
    ]
  });
}
Me("gufe-ligand-network", kh);
const xh = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function ec(e, t) {
  const n = [], r = [];
  for (const i of Object.values(e.components ?? {})) {
    const o = Ke(t, i);
    o && (xh.includes(o.type) ? n.push(o) : o.type === "SmallMoleculeComponentViz" && r.push(o));
  }
  return { structures: n, ligands: r };
}
function Ph(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Ms = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], Ah = 0.4;
class Rh extends Ne {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = ec(n, St(n)), i = r.structures.map((p, v) => v), o = r.ligands.map((p, v) => r.structures.length + v), s = ct(
      "complex.focus",
      "site",
      Ms.map((p) => p.id)
    );
    let a = s.get(), c = null;
    const l = Ma({
      element: this,
      host: t,
      title: n.name ?? "",
      fallbackTitle: "Complex",
      // The exception the protein view makes for its own reason and this one
      // makes for another: in a complex the waters sit between the eye and the
      // site.
      waters: !1,
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
        er(
          Ms,
          a,
          (p) => {
            a = p, g();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => g()
    });
    function d() {
      const p = l.viewer();
      p && (Vr(p, l.opts, c, l.showStatus, { model: i }), If(p, { model: o }), p.render());
    }
    function g() {
      const p = l.viewer();
      p && (a === "site" && o.length ? (p.zoomTo({ model: o }), p.zoom(Ah)) : p.zoomTo(), p.render(), w());
    }
    function w() {
      const p = l.viewer();
      p && (l.interaction()?.cleanup(), l.setInteraction(or(l.pane.container, p)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(Ts(r, () => c));
    try {
      c = xa(r.structures[0].pdb), l.setStats(Ts(r, () => c));
    } catch (p) {
      l.showStatus(`PDB parse error: ${he(p)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), rr().then(() => {
      const p = Qe.createViewer(l.pane.container, { backgroundColor: zt.viewer() });
      l.setViewer(p);
      for (const v of r.structures) p.addModel(v.pdb, "pdb");
      for (const v of r.ligands) p.addModel(ka(v.sdf), "sdf");
      d(), l.restoreCamera() ? w() : g(), p.spin(l.opts.spin ? "y" : !1), p.render();
    }).catch((p) => {
      l.showStatus(`Failed to render structure: ${he(p)}`, "error");
    }), l.handle;
  }
}
function Ts(e, t) {
  const n = e.ligands.reduce((o, s) => {
    const a = go(s.sdf);
    return a ? o + a.atoms : o;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, i = t();
  return i ? [r, ...Pa(i)] : [r];
}
Me("gufe-complex", Rh);
function Nh(e, t) {
  return {
    ...e,
    registry: _o(t, Object.values(e.components ?? {}))
  };
}
const Mh = "chemical-system.component", Th = 200, Oh = "35%";
function Fh(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function zh(e) {
  return e.type === "UnknownComponentViz" ? Wn(e.gufe_type) : null;
}
function Os(e) {
  return T(
    "div",
    `padding:10px 10px 16px;font-weight:${fe.bold};font-size:${Y.title};color:${z.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class Ih extends Ne {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = St(n), i = [], o = [];
    for (const [E, A] of Object.entries(n.components ?? {})) {
      const M = Ke(r, A);
      M ? i.push([E, M]) : o.push(E);
    }
    const s = n.name || "Chemical system";
    if (!i.length)
      return t.appendChild(Os(s)), t.appendChild(
        pe(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = T(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), o.length && st(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const c = T(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.panelBg};`
    );
    a.appendChild(c), c.appendChild(Os(s));
    const l = T(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(l);
    const d = T(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(d);
    const g = T(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    d.appendChild(g);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", w.setAttribute(zr, ""), g.appendChild(w);
    const p = ec(n, r), v = Ph(p), _ = (E) => v && p.structures.some(
      (A) => A === E
    ), h = i.filter(([, E]) => !_(E)).map(([E, A]) => ({
      key: E,
      title: E,
      subtitle: Fh(A),
      badge: zh(A),
      element: w,
      point: () => {
        w.payload = A;
      }
    }));
    if (v) {
      const E = document.createElement("gufe-complex");
      E.style.cssText = "flex:1;min-width:0;min-height:0;", E.setAttribute(zr, ""), E.payload = n, h.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${p.ligands.length === 1 ? p.ligands[0].name || "ligand" : "ligands"} in ${p.structures[0].name || "structure"}`,
        badge: null,
        element: E,
        point: () => {
        }
      });
    }
    let $ = null;
    const m = (E) => {
      $ !== E && (g.replaceChildren(E), $ = E);
    }, k = Hn(Mh), S = [], u = (E) => {
      S.forEach((A, M) => A.setAttribute("aria-pressed", String(M === E))), h[E].point(), m(h[E].element);
    }, f = (E) => {
      k.set(h[E].key), u(E);
    };
    h.forEach((E, A) => {
      const M = so(`${Jr.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      M.appendChild(
        T("span", `font-weight:700;color:${z.textPrimary};`, E.title)
      ), M.appendChild(
        T(
          "span",
          `font-size:${Y.small};color:${z.textMuted};`,
          E.subtitle
        )
      ), E.badge && M.appendChild(E.badge), M.onclick = () => f(A), S.push(M), l.appendChild(M);
    });
    const b = h.findIndex((E) => E.key === k.get());
    u(b < 0 ? 0 : b);
    const x = Gr(a, (E) => {
      a.style.flexDirection = E ? "column" : "row", c.style.flex = E ? "0 0 auto" : `0 0 ${Th}px`, c.style.maxHeight = E ? Oh : "none", c.style.borderRight = E ? "none" : `1px solid ${z.splitBorder}`, c.style.borderBottom = E ? `1px solid ${z.splitBorder}` : "none", l.style.flexDirection = E ? "row" : "column", l.style.flexWrap = E ? "wrap" : "nowrap", $?.resize?.();
    });
    return {
      onResize: () => $?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        x(), $?.remove();
      }
    };
  }
}
Me("gufe-chemical-system", Ih);
const jh = 210, Dh = "42%";
function Lh(e, t) {
  const n = Re(t, e.stateA, "ChemicalSystemViz"), r = Re(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const i = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) i.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) i.push(o.componentA, o.componentB);
  return { ...e, registry: _o(t, i) };
}
const So = {
  unchanged: z.diffUnchanged,
  changed: z.diffChanged,
  added: z.diffAdded,
  removed: z.diffRemoved
};
function qh(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Bh(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Vh(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Tr(e, t, n) {
  const r = T(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${X.md};padding:5px ${X.lg};border-radius:${ve.md};background:${z.cardBg};border:1px solid ${z.cardBorder};`
  );
  n && r.appendChild(
    T(
      "span",
      `flex:0 0 auto;font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;color:${z.textMuted2};`,
      n
    )
  );
  const i = Vh(e);
  if (!i)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Y.body};color:${z.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? z.cardBorder : So[t];
  const o = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:600;color:${z.textPrimary};overflow-wrap:anywhere;`,
    i.name
  );
  return o.title = i.name, r.appendChild(o), i.type && r.appendChild(Wn(i.type)), r;
}
function Uh(e, t, n, r) {
  const i = T("div", `display:flex;flex-direction:column;gap:${X.sm};min-width:0;`), o = T("div", `display:flex;align-items:center;gap:${X.md};min-width:0;`);
  o.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${So[t]};`)
  );
  const s = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:${fe.bold};color:${z.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, o.appendChild(s), i.appendChild(o), t === "unchanged" ? (i.appendChild(Tr(n, t, null)), i) : (i.appendChild(Tr(n, t, "A")), i.appendChild(Tr(r, t, "B")), i);
}
function Hh(e, t) {
  const n = Ke(t, e.componentA), r = Ke(t, e.componentB);
  return `${n ? et(n) : "A"} to ${r ? et(r) : "B"}`;
}
function Fs(e) {
  return T(
    "div",
    `font-weight:${fe.bold};font-size:${Y.heading};color:${z.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function zs(e, t) {
  const n = T("div", `display:flex;align-items:baseline;gap:${X.md};min-width:0;font-size:${Y.small};`);
  return n.appendChild(T("span", `flex:0 0 auto;color:${z.textMuted};`, e)), n.appendChild(
    T("span", `min-width:0;font-weight:${fe.bold};color:${z.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class Kh extends Ne {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = St(n), i = Re(r, n.stateA, "ChemicalSystemViz"), o = Re(r, n.stateB, "ChemicalSystemViz"), s = Re(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!i || !o) {
      const S = T("div", "padding:12px 14px;flex-shrink:0;");
      return S.appendChild(Fs(c)), t.appendChild(S), t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = Bh(i, o), d = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(d);
    const g = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${z.panelBg};`
    );
    d.appendChild(g);
    const w = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    d.appendChild(w);
    const p = T("div", `display:flex;flex-direction:column;gap:${X.md};min-width:0;`);
    p.appendChild(Fs(c)), p.appendChild(zs("protocol", s?.gufe_type || s?.name || Je)), p.appendChild(zs("mappings", String(a.length))), g.appendChild(p);
    const v = T("div", `display:flex;flex-direction:column;gap:${X.xs};`);
    for (const [S, u] of [
      ["State A", i],
      ["State B", o]
    ])
      v.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.06em;text-transform:uppercase;color:${z.textMuted2};overflow-wrap:anywhere;`,
          `${S}${u.name ? ` - ${u.name}` : ""}`
        )
      );
    g.appendChild(v);
    const _ = /* @__PURE__ */ new Set();
    for (const S of l) {
      const u = i.components?.[S], f = o.components?.[S], b = qh(u, f);
      _.add(b), g.appendChild(
        Uh(
          S,
          b,
          Ke(r, u),
          Ke(r, f)
        )
      );
    }
    if (_.size > 1) {
      const S = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${X.lg} 12px;padding-top:${X.sm};font-size:${Y.small};color:${z.textMuted};`
      );
      for (const u of ["unchanged", "changed", "added", "removed"])
        _.has(u) && S.appendChild(Ze(u, "", So[u]));
      g.appendChild(S);
    }
    const h = T("div", uc, "Atom mapping");
    w.appendChild(h);
    const $ = Gr(t, (S) => {
      d.style.flexDirection = S ? "column" : "row", g.style.flex = S ? "0 0 auto" : `0 0 ${jh}px`, g.style.maxWidth = S ? "none" : Dh, g.style.maxHeight = S ? "45%" : "none", g.style.borderRight = S ? "none" : `1px solid ${z.splitBorder}`, g.style.borderBottom = S ? `1px solid ${z.splitBorder}` : "none", h.style.display = S ? "block" : "none";
    });
    if (!a.length)
      return w.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: $ };
    const m = document.createElement("gufe-atom-mapping");
    m.style.cssText = "flex:1;min-height:0;min-width:0;";
    const k = (S) => {
      m.payload = Xa(a[S], r);
    };
    if (k(0), a.length > 1) {
      const S = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Y.small};background:${z.toolbarBg};border-bottom:1px solid ${z.toolbarBorder};color:${z.textMuted};`
      );
      S.appendChild(
        er(
          a.map((u, f) => ({
            id: String(f),
            label: u.name || Hh(u, r)
          })),
          "0",
          (u) => k(Number(u))
        )
      ), w.appendChild(S);
    }
    return w.appendChild(m), {
      onResize: () => m.resize?.(),
      cleanup: () => {
        $(), m.remove();
      }
    };
  }
}
Me("gufe-transformation", Kh);
const at = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Is = (e) => e ? at.depictedHeight : at.height, ze = { pad: 6, size: 122, radius: 6, inset: 4 }, js = 200, Mt = {
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
}, Gh = "6 4", qe = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Wh = 7, Jh = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Yh = (e) => Va(Jh, e), Dn = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, Ds = (e, t) => {
  const n = t ? Dn.selectedWidth : Dn.width;
  return Math.max(Dn.min, Math.min(n, n * e));
}, Or = { width: 3, selectedWidth: 4.5, min: 1.25 }, Ls = (e, t) => {
  const n = t ? Or.selectedWidth : Or.width;
  return Math.max(Or.min, Math.min(n, n * e));
}, vt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Tt = { initial: 0.56, min: 0.25, max: 0.78 }, qs = { x: at.width / 2, y: at.depictedHeight / 2 }, Xh = 1.4;
function Zh(e, t, n, r, i, o, s, a) {
  const c = o.trim().toLowerCase();
  if (!i.size && !c && s === "" && a === null) return null;
  const l = c.length > 0 || s !== "" || a !== null, d = /* @__PURE__ */ new Set();
  e.forEach((w, p) => {
    const v = l && (!c || n[p].includes(c)) && (!s || r[p] === s) && (!a || a.has(p));
    (i.has(w["gufe-key"]) || v) && d.add(w["gufe-key"]);
  });
  const g = /* @__PURE__ */ new Set();
  return t.forEach((w, p) => {
    d.has(w.from["gufe-key"]) && d.has(w.to["gufe-key"]) && g.add(p);
  }), { nodes: d, edges: g };
}
const Kn = et;
function tc(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const i = Ke(t, r);
    if (!i) {
      n.add("missing");
      continue;
    }
    n.add(
      i.type === "UnknownComponentViz" ? i.gufe_type : i.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort();
}
const Qh = (e, t) => tc(e, t).join(" + ");
function em(e, t) {
  const n = { fill: le.netNodeFill, stroke: le.netNodeStroke }, r = e.map((s) => Qh(s, t)), i = [...new Set(r)];
  if (i.length < 2 || i.length > le.netGroupFill.length)
    return { signatures: r, compositions: i, colorOf: () => n, legend: [] };
  const o = new Map(
    i.map((s, a) => [s, { fill: le.netGroupFill[a], stroke: le.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: i,
    colorOf: (s) => o.get(r[s]) ?? n,
    legend: i.map((s) => [s, o.get(s)])
  };
}
function tm(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, i] of Object.entries(e.components ?? {})) {
    n.push(r);
    const o = Ke(t, i);
    if (!o) continue;
    n.push(et(o), o["gufe-key"]);
    const s = o.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function nm(e, t) {
  const n = [], r = [], i = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const a = [];
    for (const c of Object.values(s.components ?? {})) {
      const l = Re(t, c, "SmallMoleculeComponentViz");
      if (!l) continue;
      let d = i.get(c);
      d === void 0 && (d = n.length, i.set(c, d), n.push(l.sdf ?? ""), r.push(l.total_charge ?? 0)), a.push(d);
    }
    return a;
  });
  return { sources: n, charges: r, perNode: o };
}
function rm(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((i) => i !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function om(e) {
  const t = Hn("alchemical-network.composition");
  return Ba({
    namespace: "alchemical-network",
    noun: "systems",
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    query: e.query,
    search: {
      placeholder: "Search systems",
      label: "Search systems by name, component or gufe key"
    },
    smarts: {
      placeholder: "Filter by SMARTS",
      label: "Show only the systems whose ligands match this SMARTS pattern",
      describe: (n) => {
        const r = n.unreadable ? `, ${n.unreadable} could not be read` : "";
        return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${r}`;
      }
    },
    match: (n) => e.match(n),
    // Only when there is more than one, which is also the rule the legend and
    // the node colouring follow: a network whose systems are all made of the
    // same things has nothing here to choose between.
    filters: (n) => {
      if (e.compositions.length <= 1) return [];
      const r = T("div", `display:flex;align-items:center;gap:${X.md};font-size:${Y.small};color:${z.textMuted};`);
      r.appendChild(T("span", "flex-shrink:0;", "made of"));
      const i = It(
        [{ id: "", label: "anything" }, ...e.compositions.map((o) => ({ id: o, label: o }))],
        "",
        (o) => {
          e.filter.composition = o, n(), e.refresh();
        },
        t
      );
      return i.style.cssText += "flex:1;min-width:0;", e.filter.composition = i.value, r.appendChild(i), [r];
    },
    shows: (n, r) => {
      const i = e.query.text.trim().toLowerCase();
      if (i && !e.haystacks[r].includes(i) || e.filter.composition && e.signatures[r] !== e.filter.composition) return !1;
      const o = e.matched();
      return !(o && !o.has(r));
    },
    row: (n, r) => {
      const i = e.colorOf(r);
      return {
        // The same colour the box on the canvas is drawn in, so a row and a node
        // are recognisably the same thing without reading either label.
        before: T(
          "span",
          `width:10px;height:10px;border-radius:${ve.sm};flex-shrink:0;background:${i.fill};border:1px solid ${i.stroke};`
        ),
        name: Kn(n),
        title: `${Kn(n)}
${e.signatures[r]}`
      };
    },
    export: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" }
    },
    refresh: e.refresh,
    focus: e.focus,
    mounted: e.mounted
  });
}
function im(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    if (i.fx !== void 0 && i.fy !== void 0) {
      i.x = i.fx, i.y = i.fy;
      return;
    }
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
function sm(e, t, n, r) {
  return ja({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((i) => ({ source: i.from["gufe-key"], target: i.to["gufe-key"] })),
    tickMultiplier: vt.tickMultiplier,
    forces: (i, o) => [
      [
        "link",
        i.forceLink(o).id((s) => s["gufe-key"]).distance(vt.linkDistance).strength(vt.linkStrength)
      ],
      ["charge", i.forceManyBody().strength(vt.chargeStrength)],
      ["center", i.forceCenter(n / 2, r / 2)],
      ["collision", i.forceCollide(vt.collisionRadius).iterations(vt.collisionIterations)]
    ]
  });
}
class am extends Ne {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: i, edges: o, unresolved: s, dangling: a } = Da({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (y) => [y.stateA, y.stateB]
    }), c = (y) => {
      const C = Re(r, y.protocol, "ProtocolViz");
      return C?.gufe_type || C?.name || "";
    }, l = new Set(o.map(c).filter(Boolean)), d = Gn(n.name || "Alchemical network");
    d.statsEl.appendChild(Ze("systems", String(i.length))), d.statsEl.appendChild(Ze("transformations", String(o.length))), l.size && d.statsEl.appendChild(Ze("protocol", [...l].join(", ")));
    const g = em(i, r), w = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    let p = () => {
    };
    const v = /* @__PURE__ */ new Set(), _ = { composition: "" }, h = { text: "" };
    let $ = null;
    const m = () => {
      const y = Zh(
        i,
        o,
        k,
        g.signatures,
        v,
        h.text,
        _.composition,
        x
      );
      $?.setEmphasis(y?.nodes ?? null, y?.edges ?? null);
    }, k = i.map((y) => tm(y, r)), S = () => ma(), u = nm(i, r), f = La(S, u.sources), b = i.map((y, C) => {
      const P = u.perNode[C].find((Q) => u.sources[Q]), B = P === void 0 ? null : u.sources[P], H = tc(y, r);
      return {
        colors: g.colorOf(C),
        composition: H.join(" + "),
        besides: rm(H, B !== null, u.perNode[C].length),
        sdf: B,
        charge: P === void 0 ? 0 : u.charges[P]
      };
    });
    let x = null, E = () => {
    };
    const A = async (y) => {
      const C = await f.run(y);
      return C.status === "superseded" || (x = C.status === "ok" ? new Set(i.flatMap((P, B) => u.perNode[B].some((H) => C.matched.has(H)) ? [B] : [])) : null, E(), m()), C;
    }, M = vo(
      d,
      () => om({
        nodes: i,
        edges: o,
        haystacks: k,
        signatures: g.signatures,
        colorOf: g.colorOf,
        compositions: g.compositions,
        selected: v,
        filter: _,
        query: h,
        refresh: () => m(),
        matched: () => x,
        match: (y) => A(y),
        mounted: (y) => {
          E = y;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (y) => {
          $?.focusOn(y), U("node", y);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => p(),
        remember: it("alchemical-network.menuOpen", !1),
        extras: wo
      }
    ), R = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.netCanvasBg};`), D = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${z.appBg};`), j = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${z.netCanvasBg};`), L = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    L.appendChild(M.panel), L.appendChild(j), R.appendChild(d), R.appendChild(L), w.appendChild(R), w.appendChild(
      Aa(w, R, D, {
        min: Tt.min,
        max: Tt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: ao("alchemical-network.canvasShare", Tt.initial, Tt.min, Tt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => p(),
        onOrient: (y) => {
          L.style.flexDirection = y ? "column" : "row", $o(M.panel, y);
        }
      })
    ), w.appendChild(D);
    const W = this.#t(D, r);
    if (!i.length)
      return j.appendChild(
        pe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), W.message("Nothing to show."), { cleanup: () => W.cleanup() };
    s && st(
      j,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && st(
      j,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let ne = !1, Z = null;
    const oe = Ua(), G = new Map(i.map((y, C) => [y["gufe-key"], b[C].charge])), O = o.some(
      (y) => (G.get(y.to["gufe-key"]) ?? 0) !== (G.get(y.from["gufe-key"]) ?? 0)
    );
    R.appendChild(this.#e(g.legend, () => $?.reset(), O));
    const U = (y, C) => {
      Z = { kind: y, index: C }, W.show(y === "node" ? i[C] : o[C], y), $?.setSelected(Z);
    }, I = () => {
      const y = oe.start(), C = j.clientWidth || 800, P = j.clientHeight || 600;
      im(i, C, P);
      const B = () => {
        y() && ($?.cleanup(), j.querySelectorAll("svg").forEach((H) => H.remove()), $ = this.#n(j, i, o, C, P, b, S, U), $.setSelected(Z), m());
      };
      if (ne) {
        B();
        return;
      }
      sm(i, o, C, P).then((H) => {
        y() && (H || (ne = !0, st(j, "d3 could not be loaded - showing the circular layout instead")), B());
      }, B);
    };
    return p = I, I(), U("node", 0), {
      onResize: () => I(),
      cleanup: () => {
        oe.stop(), $?.cleanup(), $ = null, W.cleanup();
      }
    };
  }
  /**
   * The strip under the canvas: how to get back, and what the colours mean.
   *
   * The reset is always there and neither key is. Zoom and pan have no bottom,
   * so a network the reader has flung off the edge needs one control that is
   * always in the same place; a network of one composition has nothing to
   * explain, and one whose transformations all keep the charge draws no dashes
   * for a key to name.
   */
  #e(t, n, r) {
    const i = T("div", Zs.bottom);
    if (i.appendChild(ho(n, "Reset pan and zoom")), r) {
      const o = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      o.appendChild(T("span", `width:24px;height:0;border-top:2px dashed ${z.netEdgeLine};flex-shrink:0;`)), o.appendChild(T("span", `font-size:${Y.small};color:${z.textMuted};`, "net charge change")), i.appendChild(o);
    }
    if (!t.length) return i;
    i.appendChild(T("span", `font-size:${Y.small};color:${z.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const a = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      a.appendChild(
        T(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), a.appendChild(
        T("span", `font-size:${Y.small};color:${z.textPrimary};overflow-wrap:anywhere;`, o)
      ), i.appendChild(a);
    }
    return i;
  }
  /**
   * The right-hand pane, and what this view puts in it.
   *
   * The pane itself is `detailPane`, shared with the ligand network. What is
   * here is this view's own half: a node is a whole `ChemicalSystemViz` and an
   * edge a whole `TransformationViz`, and both have to be cut loose from the
   * network before they are handed on - the graph staples its own fields onto
   * the payload's objects (what the layout leaves on a node, an index and two
   * endpoints on an edge), and the schema allows none of them. A node's are
   * `withoutLayout`'s to know: d3 writes more of them than this file does.
   */
  #t(t, n) {
    const r = Wa(t);
    return {
      ...r,
      show(i, o) {
        let s;
        if (o === "node")
          s = Nh(Ia(i), n);
        else {
          const { index: a, from: c, to: l, ...d } = i;
          s = Lh(d, n);
        }
        if (!s) {
          r.message("This transformation names two chemical systems, and its registry does not hold them.");
          return;
        }
        r.show(s);
      }
    };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #n(t, n, r, i, o, s, a, c) {
    const l = ae("svg", { class: "gufe-graph", width: i, height: o, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const d = ae("g");
    l.appendChild(d);
    const g = ae("g"), w = ae("g");
    d.append(g, w);
    let p = () => {
    };
    const v = za(l, d, {
      bounds: () => Fa(n, qs.x, qs.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (P, B, H) => p(P, B, H)
    }), _ = (P, B) => {
      v.wasPan() || c(P, B);
    }, h = [], $ = [], m = new Map(n.map((P, B) => [P["gufe-key"], s[B].charge])), k = (P) => (m.get(P.to["gufe-key"]) ?? 0) - (m.get(P.from["gufe-key"]) ?? 0);
    r.forEach((P, B) => {
      const H = k(P), Q = ae("line", {
        x1: P.from.x,
        y1: P.from.y,
        x2: P.to.x,
        y2: P.to.y,
        stroke: le.netEdgeLine,
        "stroke-width": Ds(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
        ...H ? { "stroke-dasharray": Gh } : {}
      });
      ms(
        Q,
        (P.name || "transformation") + (H ? ` - net charge change ${ot(H)}` : "")
      ), Q.addEventListener("click", () => _("edge", B)), g.appendChild(Q), h.push(Q);
      const ee = ae("line", {
        x1: P.from.x,
        y1: P.from.y,
        x2: P.to.x,
        y2: P.to.y,
        stroke: "transparent",
        "stroke-width": Dn.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      ee.addEventListener("click", () => _("edge", B)), g.appendChild(ee), $.push(ee);
    });
    const S = n.map(() => []), u = new Map(n.map((P, B) => [P, B]));
    r.forEach((P, B) => {
      const H = u.get(P.from), Q = u.get(P.to);
      H !== void 0 && S[H].push(B), Q !== void 0 && Q !== H && S[Q].push(B);
    });
    const f = [], b = [], x = [], E = [], A = [], M = [], R = [], D = [], j = [];
    n.forEach((P, B) => {
      const H = s[B], Q = Is(H.sdf), ee = ae("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${P.x},${P.y})`
      });
      x.push(ee);
      const N = ae("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -Q / 2,
        width: at.width,
        height: Q,
        rx: at.radius,
        fill: H.colors.fill,
        stroke: H.colors.stroke,
        "stroke-width": Ls(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (ee.appendChild(N), f.push(N), b.push(H.colors.stroke), H.sdf) {
        const J = ae("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -Q / 2 + ze.pad,
          width: ze.size,
          height: ze.size,
          rx: ze.radius,
          fill: jr(),
          display: "none",
          "pointer-events": "none"
        });
        if (ee.appendChild(J), M.push(J), H.charge) {
          const ue = ae("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: le.badgeFg,
            "pointer-events": "none"
          });
          ue.textContent = ot(H.charge), ee.appendChild(ue), R.push(ue);
        } else
          R.push(null);
        const te = ae("g", { transform: `translate(0,${-Q / 2 + ze.pad + ze.size / 2})` }), re = ae("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        te.appendChild(re), ee.appendChild(te), D.push(te), j.push(re);
      } else
        M.push(null), D.push(null), j.push(null), R.push(null);
      const F = ae("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: le.netNodeLabel,
        "font-size": qe.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      F.textContent = jn(Kn(P), qe.nameChars), ee.appendChild(F), E.push(F);
      const K = ae("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: le.netInitials,
        "font-size": qe.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      K.textContent = jn(H.composition, qe.subChars), ee.appendChild(K), A.push(K), ms(ee, `${Kn(P)} - ${H.composition}`), w.appendChild(ee);
    });
    const L = (P) => {
      const B = n[P];
      x[P].setAttribute("transform", `translate(${B.x},${B.y})`);
      for (const H of S[P])
        for (const Q of [h[H], $[H]])
          r[H].from === B && (Q.setAttribute("x1", String(B.x)), Q.setAttribute("y1", String(B.y))), r[H].to === B && (Q.setAttribute("x2", String(B.x)), Q.setAttribute("y2", String(B.y)));
    }, W = new Ka(), ne = sr("cpk"), Z = (P, B) => {
      if (!W.wants(B)) return;
      const H = j[B], Q = s[B].sdf;
      if (!H || !Q) return;
      const ee = yo(P, Q, js, Ae.layout, void 0, ne);
      if (!ee || !Ja(H, ee, js, ze.size - ze.inset * 2)) {
        W.refused(B);
        return;
      }
      W.drew(B);
    }, oe = (P, B, H) => {
      const Q = s[P], ee = B && W.has(P), N = (we) => we * H >= Wh, F = N(qe.nameSize), K = N(qe.subSize);
      E[P].setAttribute("display", F ? "inline" : "none"), A[P].setAttribute("display", K ? "inline" : "none"), M[P]?.setAttribute("display", ee ? "inline" : "none"), j[P]?.setAttribute("display", ee ? "inline" : "none");
      const J = Is(Q.sdf), te = -J / 2 + ze.pad, re = R[P];
      re && (re.setAttribute("x", String(ee ? at.width / 2 - Mt.inset : 0)), re.setAttribute(
        "y",
        String(ee ? -J / 2 + Mt.inset : -J * Mt.bigAt)
      ), re.setAttribute("font-size", String(ee ? Mt.fontSize : Mt.bigFontSize)), re.setAttribute("font-weight", ee ? fe.normal : fe.bold)), M[P]?.setAttribute("y", String(te)), D[P]?.setAttribute("transform", `translate(0,${te + ze.size / 2})`);
      const ue = J / 2 - qe.bottom;
      E[P].setAttribute("y", String(ee ? ue - (K ? qe.gap : 0) : -2)), A[P].setAttribute("y", String(ee ? ue : 14)), A[P].textContent = jn(ee ? Q.besides : Q.composition, qe.subChars);
    };
    let G = null, O = 1, U = null, I = null;
    const y = () => {
      f.forEach((P, B) => {
        const H = U === B;
        P.setAttribute("stroke", H ? le.cardBorderActive : b[B]), P.setAttribute("stroke-width", String(Ls(O, H)));
      }), h.forEach((P, B) => {
        const H = I === B;
        P.setAttribute("stroke", H ? le.netHaloColor : le.netEdgeLine), P.setAttribute("stroke-width", String(Ds(O, H)));
      });
    };
    return p = (P, B, H) => {
      const Q = Yh(P);
      G = Q, l.setAttribute("data-detail", Q.id), O = P, y();
      for (let N = 0; N < n.length; N++) oe(N, Q.structure, P);
      if (!Q.structure) return;
      const ee = Ga(
        n,
        { scale: P, tx: B, ty: H },
        { width: i, height: o },
        (N) => !!s[N].sdf && W.wants(N)
      );
      ee.length && a().then((N) => {
        if (!(!N || G !== Q))
          for (const F of ee)
            Z(N, F), oe(F, !0, P);
      }).catch(() => {
      });
    }, Ha(x, n, v, { moved: L, clicked: (P) => c("node", P) }), v.fit(), {
      setSelected(P) {
        U = P?.kind === "node" ? P.index : null, I = P?.kind === "edge" ? P.index : null, y();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(P, B) {
        x.forEach((H, Q) => {
          const ee = !P || P.has(n[Q]["gufe-key"]);
          H.setAttribute("opacity", ee ? "1" : String(Ft.node));
        }), h.forEach((H, Q) => {
          const ee = !B || B.has(Q);
          H.setAttribute("opacity", ee ? "1" : String(Ft.edge));
        });
      },
      focusOn(P) {
        const B = n[P];
        B && v.centreOn(B.x, B.y, Xh);
      },
      reset: v.reset,
      cleanup: v.cleanup
    };
  }
}
Me("gufe-alchemical-network", am);
class cm extends Ne {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Gn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const i = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = Yr();
    return o.style.maxWidth = "460px", o.appendChild(Bn("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Bn("Name", n.name)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Y.small};line-height:1.6;color:${z.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Me("gufe-protocol", cm);
function lm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Bs(e, t = !1) {
  const n = T(
    "div",
    `display:flex;flex-direction:column;gap:${X.xl};padding:${X.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${z.splitBorder};`)
  );
  return n.appendChild(T("div", Fr, e)), n;
}
function Ln(e) {
  return T(
    "div",
    `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${z.textMuted2};`,
    e
  );
}
function Vs(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${X.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Be.plain}${Be.outline}font-family:${Y.mono};font-size:${Y.body};`,
      e
    )
  ), n.appendChild(Ln(t)), n;
}
class dm extends Ne {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const i = Yr();
    i.style.maxWidth = "560px", i.style.width = "100%", i.style.gap = "0";
    const o = Bs("Solvent", !0), s = T("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = T("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = T(
      "div",
      `font-family:${Y.mono};font-size:${Y.display};font-weight:${fe.bold};line-height:1.1;color:${z.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Ln("SMILES")), s.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const $ = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      $.appendChild(
        T(
          "div",
          `font-size:${Y.body};color:${z.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), $.appendChild(Ln("Name")), s.appendChild($);
    }
    o.appendChild(s), i.appendChild(o);
    const d = Bs("Ions"), g = T("div", `display:flex;align-items:flex-end;gap:${X.xxl};flex-wrap:wrap;`);
    n.positive_ion && g.appendChild(Vs(n.positive_ion, "cation")), n.negative_ion && g.appendChild(Vs(n.negative_ion, "anion"));
    const { value: w, unit: p } = lm(n.ion_concentration), v = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), _ = T("div", `display:flex;align-items:baseline;gap:${X.md};justify-content:flex-end;`);
    _.appendChild(
      T(
        "div",
        `font-size:${Y.display};font-weight:${fe.bold};line-height:1;color:${z.titleColor};`,
        w
      )
    ), p && (_.appendChild(document.createTextNode(" ")), _.appendChild(T("div", `font-size:${Y.body};color:${z.textMuted};`, p))), v.appendChild(_), v.appendChild(Ln("Ion concentration")), g.appendChild(v), d.appendChild(g);
    const h = n.neutralize;
    return d.appendChild(
      T(
        "span",
        `${Be.plain}align-self:flex-start;font-weight:${fe.bold};` + (h ? `background:${z.okBg};color:${z.okFg};` : `${Be.outline}color:${z.textMuted};`),
        h ? "Neutralized" : "Not neutralized"
      )
    ), d.appendChild(
      T(
        "div",
        $c,
        h ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), i.appendChild(d), r.appendChild(i), {};
  }
}
Me("gufe-solvent", dm);
class um extends Ne {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Gn(n.name || "Unnamed component");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = Yr();
    return o.style.maxWidth = "460px", o.appendChild(
      T(
        "div",
        `font-size:${Y.heading};font-weight:600;padding-bottom:6px;color:${z.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      T(
        "div",
        `font-size:${Y.body};line-height:1.6;padding-bottom:10px;color:${z.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Bn("Name", n.name || "(unnamed)")), o.appendChild(Bn("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Me("gufe-unknown-component", um);
typeof globalThis < "u" && (globalThis.gufeViz = { settings: $u, reset: vu });
export {
  fm as PAYLOAD_TYPES,
  io as VIEW_TAGS
};
