function T(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Te(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const kt = (e) => e.toLocaleString("en-US"), Je = "-", qn = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Xs(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const pc = 460;
function Xr(e, t, n = pc) {
  let r = null;
  return Xs(e, (o) => {
    const i = o > 0 && o < n;
    i !== r && (r = i, t(i));
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
function hc() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const No = "data-gufe-theme";
function Zr() {
  return hc() ? "dark" : "light";
}
let le = Ue[Zr()];
const Zs = "--gufe-", Qs = Object.keys(Ue.light).filter(
  (e) => e !== "viewerBg" && typeof Ue.light[e] == "string"
), j = Object.fromEntries(Qs.map((e) => [e, `var(${Zs}${e})`])), hr = (e) => Qs.map((t) => `${Zs}${t}:${e[t]};`).join("");
function mc() {
  return [
    `:root{color-scheme:light dark;${hr(Ue.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${No}="light"]){${hr(Ue.dark)}}}`,
    `:root[${No}="dark"]{${hr(Ue.dark)}}`,
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
const Mo = "alchemy-viz-theme";
function ea() {
  if (typeof document > "u" || document.getElementById(Mo)) return;
  const e = document.createElement("style");
  e.id = Mo, e.textContent = mc(), document.head.appendChild(e);
}
const Y = {
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
}, fe = {
  normal: "400",
  bold: "700"
}, Z = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, be = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px"
}, Ee = {
  title: j.titleColor,
  primary: j.textPrimary,
  muted: j.textMuted,
  faint: j.textMuted2,
  error: j.errorFg
}, zt = {
  card: j.cardBg,
  /**
   * Where a 3D engine draws. Interface, not chemistry: it is the paper.
   *
   * The one literal here, and a function so it is read when a viewer is built
   * rather than when this module loads. 3Dmol wants `0x2b2b40`, which is not a
   * colour CSS has ever heard of, so this is the one surface a custom property
   * cannot carry.
   */
  viewer: () => le.viewerBg
}, To = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${j.btnFg};border:1px solid ${j.btnBorder};padding:${Z.sm} 9px;font-size:${Y.small};font-weight:${fe.bold};border-radius:${be.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, ta = `background:${j.selectBg};color:${j.textPrimary};border:1px solid ${j.selectBorder};border-radius:${be.md};padding:${Z.sm} ${Z.lg};font-size:${Y.body};cursor:pointer;font-family:inherit;`, na = `${ta}width:100%;box-sizing:border-box;cursor:text;`, ra = "24px", gc = `display:flex;align-items:flex-start;gap:12px;padding:9px ${Z.xxl};flex-shrink:0;line-height:${ra};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};`, Un = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, oa = `display:flex;flex-direction:column;gap:${Z.lg};flex:1;min-width:var(${Xe.min},${Un.min});max-width:var(${Xe.max},${Un.max});box-sizing:border-box;padding:${Z.xl};min-height:0;overflow-y:auto;background:${j.panelBg};border:0 solid ${j.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, yc = "45%", $c = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", ia = `display:flex;align-items:center;gap:${Z.xl};flex-wrap:wrap;padding:${Z.lg} ${Z.xxl};flex-shrink:0;background:${j.toolbarBg};border-top:1px solid ${j.toolbarBorder};`, vc = `flex-shrink:0;padding:${Z.sm} ${Z.xl};font-size:${Y.heading};font-weight:${fe.bold};color:${j.labelFg};background:${j.labelBg};`, Qr = `position:absolute;top:${Z.md};left:${Z.md};z-index:10;pointer-events:none;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${Z.xs} ${Z.lg};border-radius:${be.md};font-size:${Y.heading};font-weight:${fe.bold};color:${j.labelFg};background:${j.labelBg};`, bc = `padding:${Z.xs} ${Z.lg};border-radius:${be.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${j.labelFg};background:${j.labelBg};`, wc = `position:absolute;top:${Z.lg};left:${Z.lg};z-index:15;display:flex;align-items:center;gap:${Z.md};min-width:0;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});`, _c = "42px", Sc = `display:flex;flex-direction:column;gap:${Z.xs};padding:${Z.xxl} 18px;border-radius:${be.xl};background:${j.cardBg};border:1px solid ${j.cardBorder};`, eo = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${Z.sm};padding:${Z.lg} ${Z.xl};text-align:left;border-radius:${be.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Y.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${Z.md};padding:5px ${Z.lg};border:1px solid;border-radius:${Z.md};text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;color:${j.textPrimary};`,
  className: "gufe-pick"
}, Cc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${Z.xl};border-radius:${be.md};font-size:${Y.small};line-height:1.5;max-width:260px;background:${j.tooltipBg};border:1px solid ${j.tooltipBorder};color:${j.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, sa = `position:absolute;bottom:${Z.xl};right:${Z.xl};display:flex;gap:${Z.sm};padding:${Z.sm};border-radius:${be.md};z-index:10;background:${j.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, kc = `font-family:${Y.mono};font-size:${Y.small};line-height:1.7;color:${j.textMuted};`, Dr = `font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`, Ve = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${Z.xs} ${Z.sm};font-size:${Y.small};`,
  plain: `display:inline-flex;align-items:center;padding:${Z.xs} ${Z.md};border:1px solid transparent;border-radius:${be.pill};font-family:inherit;font-size:${Y.small};color:${j.textMuted};`,
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
  className: "gufe-chip"
}, Ec = `font-size:${Y.small};line-height:1.6;color:${j.textMuted2};`;
function Ze(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = T("span");
  return o.innerHTML = `${Te(e)} <b style="color:${Ee.primary};">${Te(t)}</b>`, r.appendChild(o), r;
}
function st(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${Z.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${Z.md} ${Z.xxl};border-radius:${be.md};font-size:${Y.body};background:${j.warnBg};color:${j.warnFg};border:1px solid ${j.warnBorder};`, e.appendChild(n), n;
}
function pe(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Y.heading};color:${t ? Ee.error : Ee.faint};`,
    e
  );
}
function Yn(e) {
  const t = T("div", gc);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${fe.bold};font-size:${Y.title};color:${Ee.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Y.small};color:${Ee.muted};`
  ), t.textEl = T("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = T("div", `display:flex;align-items:center;height:${ra};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Hn(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${Ee.faint};`,
      e
    )
  );
  const o = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Ee.primary};` + (n ? `font-family:${Y.mono};font-size:${Y.small};` : `font-size:${Y.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Xn(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${be.xl};font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.04em;white-space:nowrap;background:${j.badgeBg};color:${j.badgeFg};`,
    e
  );
}
function to() {
  return T("div", Sc);
}
function aa() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Lr = "data-gufe-hide-name";
function no(e) {
  return !e.closest(`[${Lr}]`);
}
const xc = ["debug", "gufe-debug"], Ac = "debug", Pc = "ALCHEMY_VIZ_DEBUG";
function Rc() {
  return !!globalThis[Pc];
}
function Nc() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return xc.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Mc(e) {
  return e?.hasAttribute?.(Ac) ? !0 : Rc() || Nc();
}
function Tc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function Oc(e, t, n) {
  if (!Mc(n)) return;
  const r = Tc(t), o = t?.type, i = `[alchemy-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const ca = "ALCHEMY_VIZ_VIEW_STATE";
function la(e) {
  const t = globalThis[ca];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
function ro() {
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
const Fc = 150, Oo = "data-gufe-shell";
class Re extends HTMLElement {
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
    ea(), this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Oo}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = j.appBg, this.style.color = j.textPrimary, this.style.fontFamily = Y.family, typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), Fc);
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
    return this.#s(), this.#n = T(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${j.appBg};`
    ), this.#n.setAttribute(Oo, ""), this.appendChild(this.#n), this.#n;
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
    } catch (o) {
      this.#l(t, n, o);
      return;
    }
    r instanceof Promise ? r.then(
      (o) => this.#c(o, n),
      (o) => this.#l(t, n, o)
    ) : this.#c(r, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#i || !this.isConnected) {
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
    n === this.#i && (console.warn("[alchemy-viz] render failed:", r), t.replaceChildren(pe(`Failed to render: ${he(r)}`, !0)));
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
function Ne(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = { exports: {} }, mr = {}, je = {}, tt = {}, gr = {}, yr = {}, $r = {}, Fo;
function Kn() {
  return Fo || (Fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(h) {
        if (super(), !e.IDENTIFIER.test(h))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = h;
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
      constructor(h) {
        super(), this._items = typeof h == "string" ? [h] : h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const h = this._items[0];
        return h === "" || h === '""';
      }
      get str() {
        var h;
        return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((C, S) => `${C}${S}`, "");
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((C, S) => (S instanceof n && (C[S.str] = (C[S.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o($, ...h) {
      const C = [$[0]];
      let S = 0;
      for (; S < h.length; )
        a(C, h[S]), C.push($[++S]);
      return new r(C);
    }
    e._ = o;
    const i = new r("+");
    function s($, ...h) {
      const C = [g($[0])];
      let S = 0;
      for (; S < h.length; )
        C.push(i), a(C, h[S]), C.push(i, g($[++S]));
      return c(C), new r(C);
    }
    e.str = s;
    function a($, h) {
      h instanceof r ? $.push(...h._items) : h instanceof n ? $.push(h) : $.push(m(h));
    }
    e.addCodeArg = a;
    function c($) {
      let h = 1;
      for (; h < $.length - 1; ) {
        if ($[h] === i) {
          const C = l($[h - 1], $[h + 1]);
          if (C !== void 0) {
            $.splice(h - 1, 3, C);
            continue;
          }
          $[h++] = "+";
        }
        h++;
      }
    }
    function l($, h) {
      if (h === '""')
        return $;
      if ($ === '""')
        return h;
      if (typeof $ == "string")
        return h instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof h != "string" ? `${$.slice(0, -1)}${h}"` : h[0] === '"' ? $.slice(0, -1) + h.slice(1) : void 0;
      if (typeof h == "string" && h[0] === '"' && !($ instanceof n))
        return `"${$}${h.slice(1)}`;
    }
    function d($, h) {
      return h.emptyStr() ? $ : $.emptyStr() ? h : s`${$}${h}`;
    }
    e.strConcat = d;
    function m($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : g(Array.isArray($) ? $.join(",") : $);
    }
    function v($) {
      return new r(g($));
    }
    e.stringify = v;
    function g($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = g;
    function y($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : o`[${$}]`;
    }
    e.getProperty = y;
    function _($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function f($) {
      return new r($.toString());
    }
    e.regexpCode = f;
  })($r)), $r;
}
var vr = {}, zo;
function Io() {
  return zo || (zo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Kn();
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
    class o {
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
    e.Scope = o;
    class i extends t.Name {
      constructor(l, d) {
        super(d), this.prefix = l;
      }
      setValue(l, { property: d, itemIndex: m }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(d)}[${m}]`;
      }
    }
    e.ValueScopeName = i;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new i(l, this._newName(l));
      }
      value(l, d) {
        var m;
        if (d.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const v = this.toName(l), { prefix: g } = v, y = (m = d.key) !== null && m !== void 0 ? m : d.ref;
        let _ = this._values[g];
        if (_) {
          const h = _.get(y);
          if (h)
            return h;
        } else
          _ = this._values[g] = /* @__PURE__ */ new Map();
        _.set(y, v);
        const f = this._scope[g] || (this._scope[g] = []), $ = f.length;
        return f[$] = d.ref, v.setValue(d, { property: g, itemIndex: $ }), v;
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
        let g = t.nil;
        for (const y in l) {
          const _ = l[y];
          if (!_)
            continue;
          const f = m[y] = m[y] || /* @__PURE__ */ new Map();
          _.forEach(($) => {
            if (f.has($))
              return;
            f.set($, r.Started);
            let h = d($);
            if (h) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${C} ${$} = ${h};${this.opts._n}`;
            } else if (h = v?.($))
              g = (0, t._)`${g}${h}${this.opts._n}`;
            else
              throw new n($);
            f.set($, r.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = a;
  })(vr)), vr;
}
var jo;
function ie() {
  return jo || (jo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ Io();
    var r = /* @__PURE__ */ Kn();
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
    var o = /* @__PURE__ */ Io();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return o.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return o.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return o.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return o.varKinds;
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
    class i {
      optimizeNodes() {
        return this;
      }
      optimizeNames(w, E) {
        return this;
      }
    }
    class s extends i {
      constructor(w, E, R) {
        super(), this.varKind = w, this.name = E, this.rhs = R;
      }
      render({ es5: w, _n: E }) {
        const R = w ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${R} ${this.name}${V};` + E;
      }
      optimizeNames(w, E) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = z(this.rhs, w, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(w, E, R) {
        super(), this.lhs = w, this.rhs = E, this.sideEffects = R;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, E) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = z(this.rhs, w, E), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(w, this.rhs);
      }
    }
    class c extends a {
      constructor(w, E, R, V) {
        super(w, R, V), this.op = E;
      }
      render({ _n: w }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + w;
      }
    }
    class l extends i {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `${this.label}:` + w;
      }
    }
    class d extends i {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `break${this.label ? ` ${this.label}` : ""};` + w;
      }
    }
    class m extends i {
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
    class v extends i {
      constructor(w) {
        super(), this.code = w;
      }
      render({ _n: w }) {
        return `${this.code};` + w;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(w, E) {
        return this.code = z(this.code, w, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class g extends i {
      constructor(w = []) {
        super(), this.nodes = w;
      }
      render(w) {
        return this.nodes.reduce((E, R) => E + R.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let E = w.length;
        for (; E--; ) {
          const R = w[E].optimizeNodes();
          Array.isArray(R) ? w.splice(E, 1, ...R) : R ? w[E] = R : w.splice(E, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, E) {
        const { nodes: R } = this;
        let V = R.length;
        for (; V--; ) {
          const H = R[V];
          H.optimizeNames(w, E) || (L(w, H.names), R.splice(V, 1));
        }
        return R.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, E) => P(w, E.names), {});
      }
    }
    class y extends g {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class _ extends g {
    }
    class f extends y {
    }
    f.kind = "else";
    class $ extends y {
      constructor(w, E) {
        super(E), this.condition = w;
      }
      render(w) {
        let E = `if(${this.condition})` + super.render(w);
        return this.else && (E += "else " + this.else.render(w)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const w = this.condition;
        if (w === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const R = E.optimizeNodes();
          E = this.else = Array.isArray(R) ? new f(R) : R;
        }
        if (E)
          return w === !1 ? E instanceof $ ? E : E.nodes : this.nodes.length ? this : new $(W(w), E instanceof $ ? [E] : E.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, E) {
        var R;
        if (this.else = (R = this.else) === null || R === void 0 ? void 0 : R.optimizeNames(w, E), !!(super.optimizeNames(w, E) || this.else))
          return this.condition = z(this.condition, w, E), this;
      }
      get names() {
        const w = super.names;
        return D(w, this.condition), this.else && P(w, this.else.names), w;
      }
    }
    $.kind = "if";
    class h extends y {
    }
    h.kind = "for";
    class C extends h {
      constructor(w) {
        super(), this.iteration = w;
      }
      render(w) {
        return `for(${this.iteration})` + super.render(w);
      }
      optimizeNames(w, E) {
        if (super.optimizeNames(w, E))
          return this.iteration = z(this.iteration, w, E), this;
      }
      get names() {
        return P(super.names, this.iteration.names);
      }
    }
    class S extends h {
      constructor(w, E, R, V) {
        super(), this.varKind = w, this.name = E, this.from = R, this.to = V;
      }
      render(w) {
        const E = w.es5 ? n.varKinds.var : this.varKind, { name: R, from: V, to: H } = this;
        return `for(${E} ${R}=${V}; ${R}<${H}; ${R}++)` + super.render(w);
      }
      get names() {
        const w = D(super.names, this.from);
        return D(w, this.to);
      }
    }
    class u extends h {
      constructor(w, E, R, V) {
        super(), this.loop = w, this.varKind = E, this.name = R, this.iterable = V;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, E) {
        if (super.optimizeNames(w, E))
          return this.iterable = z(this.iterable, w, E), this;
      }
      get names() {
        return P(super.names, this.iterable.names);
      }
    }
    class p extends y {
      constructor(w, E, R) {
        super(), this.name = w, this.args = E, this.async = R;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    p.kind = "func";
    class b extends g {
      render(w) {
        return "return " + super.render(w);
      }
    }
    b.kind = "return";
    class k extends y {
      render(w) {
        let E = "try" + super.render(w);
        return this.catch && (E += this.catch.render(w)), this.finally && (E += this.finally.render(w)), E;
      }
      optimizeNodes() {
        var w, E;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(w, E) {
        var R, V;
        return super.optimizeNames(w, E), (R = this.catch) === null || R === void 0 || R.optimizeNames(w, E), (V = this.finally) === null || V === void 0 || V.optimizeNames(w, E), this;
      }
      get names() {
        const w = super.names;
        return this.catch && P(w, this.catch.names), this.finally && P(w, this.finally.names), w;
      }
    }
    class A extends y {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    A.kind = "catch";
    class x extends y {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    x.kind = "finally";
    class M {
      constructor(w, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
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
      scopeValue(w, E) {
        const R = this._extScope.value(w, E);
        return (this._values[R.prefix] || (this._values[R.prefix] = /* @__PURE__ */ new Set())).add(R), R;
      }
      getScopeValue(w, E) {
        return this._extScope.getValue(w, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, E, R, V) {
        const H = this._scope.toName(E);
        return R !== void 0 && V && (this._constants[H.str] = R), this._leafNode(new s(w, H, R)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, E, R) {
        return this._def(n.varKinds.const, w, E, R);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, E, R) {
        return this._def(n.varKinds.let, w, E, R);
      }
      // `var` declaration with optional assignment
      var(w, E, R) {
        return this._def(n.varKinds.var, w, E, R);
      }
      // assignment code
      assign(w, E, R) {
        return this._leafNode(new a(w, E, R));
      }
      // `+=` code
      add(w, E) {
        return this._leafNode(new c(w, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new v(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const E = ["{"];
        for (const [R, V] of w)
          E.length > 1 && E.push(","), E.push(R), (R !== V || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, V));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, E, R) {
        if (this._blockNode(new $(w)), E && R)
          this.code(E).else().code(R).endIf();
        else if (E)
          this.code(E).endIf();
        else if (R)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new $(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, f);
      }
      _for(w, E) {
        return this._blockNode(w), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, E) {
        return this._for(new C(w), E);
      }
      // `for` statement for a range of values
      forRange(w, E, R, V, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(w);
        return this._for(new S(H, Q, E, R), () => V(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, E, R, V = n.varKinds.const) {
        const H = this._scope.toName(w);
        if (this.opts.es5) {
          const Q = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (ee) => {
            this.var(H, (0, t._)`${Q}[${ee}]`), R(H);
          });
        }
        return this._for(new u("of", V, H, E), () => R(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, E, R, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${E})`, R);
        const H = this._scope.toName(w);
        return this._for(new u("in", V, H, E), () => R(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(h);
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
        const E = new b();
        if (this._blockNode(E), this.code(w), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(b);
      }
      // `try` statement
      try(w, E, R) {
        if (!E && !R)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new k();
        if (this._blockNode(V), this.code(w), E) {
          const H = this.name("e");
          this._currNode = V.catch = new A(H), E(H);
        }
        return R && (this._currNode = V.finally = new x(), this.code(R)), this._endBlockNode(A, x);
      }
      // `throw` statement
      throw(w) {
        return this._leafNode(new m(w));
      }
      // start self-balancing block
      block(w, E) {
        return this._blockStarts.push(this._nodes.length), w && this.code(w).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(w) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const R = this._nodes.length - E;
        if (R < 0 || w !== void 0 && R !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${R} vs ${w} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, E = t.nil, R, V) {
        return this._blockNode(new p(w, E, R)), V && this.code(V).endFunc(), this;
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
      _endBlockNode(w, E) {
        const R = this._currNode;
        if (R instanceof w || E && R instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${w.kind}/${E.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const E = this._currNode;
        if (!(E instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = w, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const w = this._nodes;
        return w[w.length - 1];
      }
      set _currNode(w) {
        const E = this._nodes;
        E[E.length - 1] = w;
      }
    }
    e.CodeGen = M;
    function P(I, w) {
      for (const E in w)
        I[E] = (I[E] || 0) + (w[E] || 0);
      return I;
    }
    function D(I, w) {
      return w instanceof t._CodeOrName ? P(I, w.names) : I;
    }
    function z(I, w, E) {
      if (I instanceof t.Name)
        return R(I);
      if (!V(I))
        return I;
      return new t._Code(I._items.reduce((H, Q) => (Q instanceof t.Name && (Q = R(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function R(H) {
        const Q = E[H.str];
        return Q === void 0 || w[H.str] !== 1 ? H : (delete w[H.str], Q);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && w[Q.str] === 1 && E[Q.str] !== void 0);
      }
    }
    function L(I, w) {
      for (const E in w)
        I[E] = (I[E] || 0) - (w[E] || 0);
    }
    function W(I) {
      return typeof I == "boolean" || typeof I == "number" || I === null ? !I : (0, t._)`!${U(I)}`;
    }
    e.not = W;
    const ne = O(e.operators.AND);
    function X(...I) {
      return I.reduce(ne);
    }
    e.and = X;
    const re = O(e.operators.OR);
    function G(...I) {
      return I.reduce(re);
    }
    e.or = G;
    function O(I) {
      return (w, E) => w === t.nil ? E : E === t.nil ? w : (0, t._)`${U(w)} ${I} ${U(E)}`;
    }
    function U(I) {
      return I instanceof t.Name ? I : (0, t._)`(${I})`;
    }
  })(yr)), yr;
}
var se = {}, Do;
function ce() {
  if (Do) return se;
  Do = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Kn();
  function n(u) {
    const p = {};
    for (const b of u)
      p[b] = !0;
    return p;
  }
  se.toHash = n;
  function r(u, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (o(u, p), !i(p, u.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function o(u, p = u.schema) {
    const { opts: b, self: k } = u;
    if (!b.strictSchema || typeof p == "boolean")
      return;
    const A = k.RULES.keywords;
    for (const x in p)
      A[x] || S(u, `unknown keyword: "${x}"`);
  }
  se.checkUnknownRules = o;
  function i(u, p) {
    if (typeof u == "boolean")
      return !u;
    for (const b in u)
      if (p[b])
        return !0;
    return !1;
  }
  se.schemaHasRules = i;
  function s(u, p) {
    if (typeof u == "boolean")
      return !u;
    for (const b in u)
      if (b !== "$ref" && p.all[b])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: u, schemaPath: p }, b, k, A) {
    if (!A) {
      if (typeof b == "number" || typeof b == "boolean")
        return b;
      if (typeof b == "string")
        return (0, e._)`${b}`;
    }
    return (0, e._)`${u}${p}${(0, e.getProperty)(k)}`;
  }
  se.schemaRefOrVal = a;
  function c(u) {
    return m(decodeURIComponent(u));
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
  function m(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = m;
  function v(u, p) {
    if (Array.isArray(u))
      for (const b of u)
        p(b);
    else
      p(u);
  }
  se.eachItem = v;
  function g({ mergeNames: u, mergeToName: p, mergeValues: b, resultToName: k }) {
    return (A, x, M, P) => {
      const D = M === void 0 ? x : M instanceof e.Name ? (x instanceof e.Name ? u(A, x, M) : p(A, x, M), M) : x instanceof e.Name ? (p(A, M, x), x) : b(x, M);
      return P === e.Name && !(D instanceof e.Name) ? k(A, D) : D;
    };
  }
  se.mergeEvaluated = {
    props: g({
      mergeNames: (u, p, b) => u.if((0, e._)`${b} !== true && ${p} !== undefined`, () => {
        u.if((0, e._)`${p} === true`, () => u.assign(b, !0), () => u.assign(b, (0, e._)`${b} || {}`).code((0, e._)`Object.assign(${b}, ${p})`));
      }),
      mergeToName: (u, p, b) => u.if((0, e._)`${b} !== true`, () => {
        p === !0 ? u.assign(b, !0) : (u.assign(b, (0, e._)`${b} || {}`), _(u, b, p));
      }),
      mergeValues: (u, p) => u === !0 ? !0 : { ...u, ...p },
      resultToName: y
    }),
    items: g({
      mergeNames: (u, p, b) => u.if((0, e._)`${b} !== true && ${p} !== undefined`, () => u.assign(b, (0, e._)`${p} === true ? true : ${b} > ${p} ? ${b} : ${p}`)),
      mergeToName: (u, p, b) => u.if((0, e._)`${b} !== true`, () => u.assign(b, p === !0 ? !0 : (0, e._)`${b} > ${p} ? ${b} : ${p}`)),
      mergeValues: (u, p) => u === !0 ? !0 : Math.max(u, p),
      resultToName: (u, p) => u.var("items", p)
    })
  };
  function y(u, p) {
    if (p === !0)
      return u.var("props", !0);
    const b = u.var("props", (0, e._)`{}`);
    return p !== void 0 && _(u, b, p), b;
  }
  se.evaluatedPropsToName = y;
  function _(u, p, b) {
    Object.keys(b).forEach((k) => u.assign((0, e._)`${p}${(0, e.getProperty)(k)}`, !0));
  }
  se.setEvaluated = _;
  const f = {};
  function $(u, p) {
    return u.scopeValue("func", {
      ref: p,
      code: f[p.code] || (f[p.code] = new t._Code(p.code))
    });
  }
  se.useFunc = $;
  var h;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(h || (se.Type = h = {}));
  function C(u, p, b) {
    if (u instanceof e.Name) {
      const k = p === h.Num;
      return b ? k ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : k ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return b ? (0, e.getProperty)(u).toString() : "/" + d(u);
  }
  se.getErrorPath = C;
  function S(u, p, b = u.opts.strictSchema) {
    if (b) {
      if (p = `strict mode: ${p}`, b === !0)
        throw new Error(p);
      u.self.logger.warn(p);
    }
  }
  return se.checkStrictMode = S, se;
}
var Lt = {}, Lo;
function Oe() {
  if (Lo) return Lt;
  Lo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
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
  return Lt.default = t, Lt;
}
var qo;
function Zn() {
  return qo || (qo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: $ }) => $ ? (0, t.str)`"${f}" keyword must be ${$} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function o(f, $ = e.keywordError, h, C) {
      const { it: S } = f, { gen: u, compositeRule: p, allErrors: b } = S, k = m(f, $, h);
      C ?? (p || b) ? c(u, k) : l(S, (0, t._)`[${k}]`);
    }
    e.reportError = o;
    function i(f, $ = e.keywordError, h) {
      const { it: C } = f, { gen: S, compositeRule: u, allErrors: p } = C, b = m(f, $, h);
      c(S, b), u || p || l(C, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(f, $) {
      f.assign(r.default.errors, $), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if($, () => f.assign((0, t._)`${r.default.vErrors}.length`, $), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: $, schemaValue: h, data: C, errsCount: S, it: u }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const p = f.name("err");
      f.forRange("i", S, r.default.errors, (b) => {
        f.const(p, (0, t._)`${r.default.vErrors}[${b}]`), f.if((0, t._)`${p}.instancePath === undefined`, () => f.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(r.default.instancePath, u.errorPath))), f.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${$}`), u.opts.verbose && (f.assign((0, t._)`${p}.schema`, h), f.assign((0, t._)`${p}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(f, $) {
      const h = f.const("err", $);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${r.default.vErrors}.push(${h})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function l(f, $) {
      const { gen: h, validateName: C, schemaEnv: S } = f;
      S.$async ? h.throw((0, t._)`new ${f.ValidationError}(${$})`) : (h.assign((0, t._)`${C}.errors`, $), h.return(!1));
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
    function m(f, $, h) {
      const { createErrors: C } = f.it;
      return C === !1 ? (0, t._)`{}` : v(f, $, h);
    }
    function v(f, $, h = {}) {
      const { gen: C, it: S } = f, u = [
        g(S, h),
        y(f, h)
      ];
      return _(f, $, u), C.object(...u);
    }
    function g({ errorPath: f }, { instancePath: $ }) {
      const h = $ ? (0, t.str)`${f}${(0, n.getErrorPath)($, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, h)];
    }
    function y({ keyword: f, it: { errSchemaPath: $ } }, { schemaPath: h, parentSchema: C }) {
      let S = C ? $ : (0, t.str)`${$}/${f}`;
      return h && (S = (0, t.str)`${S}${(0, n.getErrorPath)(h, n.Type.Str)}`), [d.schemaPath, S];
    }
    function _(f, { params: $, message: h }, C) {
      const { keyword: S, data: u, schemaValue: p, it: b } = f, { opts: k, propertyName: A, topSchemaRef: x, schemaPath: M } = b;
      C.push([d.keyword, S], [d.params, typeof $ == "function" ? $(f) : $ || (0, t._)`{}`]), k.messages && C.push([d.message, typeof h == "function" ? h(f) : h]), k.verbose && C.push([d.schema, p], [d.parentSchema, (0, t._)`${x}${M}`], [r.default.data, u]), A && C.push([d.propertyName, A]);
    }
  })(gr)), gr;
}
var Vo;
function Ic() {
  if (Vo) return tt;
  Vo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.boolOrEmptySchema = tt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: l, validateName: d } = a;
    l === !1 ? s(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${d}.errors`, null), c.return(!0));
  }
  tt.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: l, schema: d } = a;
    d === !1 ? (l.var(c, !1), s(a)) : l.var(c, !0);
  }
  tt.boolOrEmptySchema = i;
  function s(a, c) {
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
  return tt;
}
var ge = {}, nt = {}, Bo;
function da() {
  if (Bo) return nt;
  Bo = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.getRules = nt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  nt.isJSONType = n;
  function r() {
    const o = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...o, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, o.number, o.string, o.array, o.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return nt.getRules = r, nt;
}
var De = {}, Uo;
function ua() {
  if (Uo) return De;
  Uo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  De.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  De.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return De.shouldUseRule = n, De;
}
var Ho;
function Gn() {
  if (Ho) return ge;
  Ho = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ da(), t = /* @__PURE__ */ ua(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ce();
  var i;
  (function(h) {
    h[h.Correct = 0] = "Correct", h[h.Wrong = 1] = "Wrong";
  })(i || (ge.DataType = i = {}));
  function s(h) {
    const C = a(h.type);
    if (C.includes("null")) {
      if (h.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!C.length && h.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      h.nullable === !0 && C.push("null");
    }
    return C;
  }
  ge.getSchemaTypes = s;
  function a(h) {
    const C = Array.isArray(h) ? h : h ? [h] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  ge.getJSONTypes = a;
  function c(h, C) {
    const { gen: S, data: u, opts: p } = h, b = d(C, p.coerceTypes), k = C.length > 0 && !(b.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(h, C[0]));
    if (k) {
      const A = y(C, u, p.strictNumbers, i.Wrong);
      S.if(A, () => {
        b.length ? m(h, C, b) : f(h);
      });
    }
    return k;
  }
  ge.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function d(h, C) {
    return C ? h.filter((S) => l.has(S) || C === "array" && S === "array") : [];
  }
  function m(h, C, S) {
    const { gen: u, data: p, opts: b } = h, k = u.let("dataType", (0, r._)`typeof ${p}`), A = u.let("coerced", (0, r._)`undefined`);
    b.coerceTypes === "array" && u.if((0, r._)`${k} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => u.assign(p, (0, r._)`${p}[0]`).assign(k, (0, r._)`typeof ${p}`).if(y(C, p, b.strictNumbers), () => u.assign(A, p))), u.if((0, r._)`${A} !== undefined`);
    for (const M of S)
      (l.has(M) || M === "array" && b.coerceTypes === "array") && x(M);
    u.else(), f(h), u.endIf(), u.if((0, r._)`${A} !== undefined`, () => {
      u.assign(p, A), v(h, A);
    });
    function x(M) {
      switch (M) {
        case "string":
          u.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(A, (0, r._)`"" + ${p}`).elseIf((0, r._)`${p} === null`).assign(A, (0, r._)`""`);
          return;
        case "number":
          u.elseIf((0, r._)`${k} == "boolean" || ${p} === null
              || (${k} == "string" && ${p} && ${p} == +${p})`).assign(A, (0, r._)`+${p}`);
          return;
        case "integer":
          u.elseIf((0, r._)`${k} === "boolean" || ${p} === null
              || (${k} === "string" && ${p} && ${p} == +${p} && !(${p} % 1))`).assign(A, (0, r._)`+${p}`);
          return;
        case "boolean":
          u.elseIf((0, r._)`${p} === "false" || ${p} === 0 || ${p} === null`).assign(A, !1).elseIf((0, r._)`${p} === "true" || ${p} === 1`).assign(A, !0);
          return;
        case "null":
          u.elseIf((0, r._)`${p} === "" || ${p} === 0 || ${p} === false`), u.assign(A, null);
          return;
        case "array":
          u.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${p} === null`).assign(A, (0, r._)`[${p}]`);
      }
    }
  }
  function v({ gen: h, parentData: C, parentDataProperty: S }, u) {
    h.if((0, r._)`${C} !== undefined`, () => h.assign((0, r._)`${C}[${S}]`, u));
  }
  function g(h, C, S, u = i.Correct) {
    const p = u === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let b;
    switch (h) {
      case "null":
        return (0, r._)`${C} ${p} null`;
      case "array":
        b = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        b = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        b = k((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        b = k();
        break;
      default:
        return (0, r._)`typeof ${C} ${p} ${h}`;
    }
    return u === i.Correct ? b : (0, r.not)(b);
    function k(A = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, A, S ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ge.checkDataType = g;
  function y(h, C, S, u) {
    if (h.length === 1)
      return g(h[0], C, S, u);
    let p;
    const b = (0, o.toHash)(h);
    if (b.array && b.object) {
      const k = (0, r._)`typeof ${C} != "object"`;
      p = b.null ? k : (0, r._)`!${C} || ${k}`, delete b.null, delete b.array, delete b.object;
    } else
      p = r.nil;
    b.number && delete b.integer;
    for (const k in b)
      p = (0, r.and)(p, g(k, C, S, u));
    return p;
  }
  ge.checkDataTypes = y;
  const _ = {
    message: ({ schema: h }) => `must be ${h}`,
    params: ({ schema: h, schemaValue: C }) => typeof h == "string" ? (0, r._)`{type: ${h}}` : (0, r._)`{type: ${C}}`
  };
  function f(h) {
    const C = $(h);
    (0, n.reportError)(C, _);
  }
  ge.reportTypeError = f;
  function $(h) {
    const { gen: C, data: S, schema: u } = h, p = (0, o.schemaRefOrVal)(h, u, "type");
    return {
      gen: C,
      keyword: "type",
      data: S,
      schema: u.type,
      schemaCode: p,
      schemaValue: p,
      parentSchema: u,
      params: {},
      it: h
    };
  }
  return ge;
}
var Et = {}, Ko;
function jc() {
  if (Ko) return Et;
  Ko = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, l) => r(o, l, c.default));
  }
  Et.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: c, data: l, opts: d } = o;
    if (s === void 0)
      return;
    const m = (0, e._)`${l}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${m}`);
      return;
    }
    let v = (0, e._)`${m} === undefined`;
    d.useDefaults === "empty" && (v = (0, e._)`${v} || ${m} === null || ${m} === ""`), a.if(v, (0, e._)`${m} = ${(0, e.stringify)(s)}`);
  }
  return Et;
}
var Me = {}, de = {}, Go;
function Fe() {
  if (Go) return de;
  Go = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce();
  function o(h, C) {
    const { gen: S, data: u, it: p } = h;
    S.if(d(S, u, C, p.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${C}` }, !0), h.error();
    });
  }
  de.checkReportMissingProp = o;
  function i({ gen: h, data: C, it: { opts: S } }, u, p) {
    return (0, e.or)(...u.map((b) => (0, e.and)(d(h, C, b, S.ownProperties), (0, e._)`${p} = ${b}`)));
  }
  de.checkMissingProp = i;
  function s(h, C) {
    h.setParams({ missingProperty: C }, !0), h.error();
  }
  de.reportMissingProp = s;
  function a(h) {
    return h.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  de.hasPropFunc = a;
  function c(h, C, S) {
    return (0, e._)`${a(h)}.call(${C}, ${S})`;
  }
  de.isOwnProperty = c;
  function l(h, C, S, u) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} !== undefined`;
    return u ? (0, e._)`${p} && ${c(h, C, S)}` : p;
  }
  de.propertyInData = l;
  function d(h, C, S, u) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} === undefined`;
    return u ? (0, e.or)(p, (0, e.not)(c(h, C, S))) : p;
  }
  de.noPropertyInData = d;
  function m(h) {
    return h ? Object.keys(h).filter((C) => C !== "__proto__") : [];
  }
  de.allSchemaProperties = m;
  function v(h, C) {
    return m(C).filter((S) => !(0, t.alwaysValidSchema)(h, C[S]));
  }
  de.schemaProperties = v;
  function g({ schemaCode: h, data: C, it: { gen: S, topSchemaRef: u, schemaPath: p, errorPath: b }, it: k }, A, x, M) {
    const P = M ? (0, e._)`${h}, ${C}, ${u}${p}` : C, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, b)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const z = (0, e._)`${P}, ${S.object(...D)}`;
    return x !== e.nil ? (0, e._)`${A}.call(${x}, ${z})` : (0, e._)`${A}(${z})`;
  }
  de.callValidateCode = g;
  const y = (0, e._)`new RegExp`;
  function _({ gen: h, it: { opts: C } }, S) {
    const u = C.unicodeRegExp ? "u" : "", { regExp: p } = C.code, b = p(S, u);
    return h.scopeValue("pattern", {
      key: b.toString(),
      ref: b,
      code: (0, e._)`${p.code === "new RegExp" ? y : (0, r.useFunc)(h, p)}(${S}, ${u})`
    });
  }
  de.usePattern = _;
  function f(h) {
    const { gen: C, data: S, keyword: u, it: p } = h, b = C.name("valid");
    if (p.allErrors) {
      const A = C.let("valid", !0);
      return k(() => C.assign(A, !1)), A;
    }
    return C.var(b, !0), k(() => C.break()), b;
    function k(A) {
      const x = C.const("len", (0, e._)`${S}.length`);
      C.forRange("i", 0, x, (M) => {
        h.subschema({
          keyword: u,
          dataProp: M,
          dataPropType: t.Type.Num
        }, b), C.if((0, e.not)(b), A);
      });
    }
  }
  de.validateArray = f;
  function $(h) {
    const { gen: C, schema: S, keyword: u, it: p } = h;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((x) => (0, t.alwaysValidSchema)(p, x)) && !p.opts.unevaluated)
      return;
    const k = C.let("valid", !1), A = C.name("_valid");
    C.block(() => S.forEach((x, M) => {
      const P = h.subschema({
        keyword: u,
        schemaProp: M,
        compositeRule: !0
      }, A);
      C.assign(k, (0, e._)`${k} || ${A}`), h.mergeValidEvaluated(P, A) || C.if((0, e.not)(k));
    })), h.result(k, () => h.reset(), () => h.error(!0));
  }
  return de.validateUnion = $, de;
}
var Wo;
function Dc() {
  if (Wo) return Me;
  Wo = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateKeywordUsage = Me.validSchemaType = Me.funcKeywordCode = Me.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Zn();
  function o(v, g) {
    const { gen: y, keyword: _, schema: f, parentSchema: $, it: h } = v, C = g.macro.call(h.self, f, $, h), S = l(y, _, C);
    h.opts.validateSchema !== !1 && h.self.validateSchema(C, !0);
    const u = y.name("valid");
    v.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${h.errSchemaPath}/${_}`,
      topSchemaRef: S,
      compositeRule: !0
    }, u), v.pass(u, () => v.error(!0));
  }
  Me.macroKeywordCode = o;
  function i(v, g) {
    var y;
    const { gen: _, keyword: f, schema: $, parentSchema: h, $data: C, it: S } = v;
    c(S, g);
    const u = !C && g.compile ? g.compile.call(S.self, $, h, S) : g.validate, p = l(_, f, u), b = _.let("valid");
    v.block$data(b, k), v.ok((y = g.valid) !== null && y !== void 0 ? y : b);
    function k() {
      if (g.errors === !1)
        M(), g.modifying && s(v), P(() => v.error());
      else {
        const D = g.async ? A() : x();
        g.modifying && s(v), P(() => a(v, D));
      }
    }
    function A() {
      const D = _.let("ruleErrs", null);
      return _.try(() => M((0, e._)`await `), (z) => _.assign(b, !1).if((0, e._)`${z} instanceof ${S.ValidationError}`, () => _.assign(D, (0, e._)`${z}.errors`), () => _.throw(z))), D;
    }
    function x() {
      const D = (0, e._)`${p}.errors`;
      return _.assign(D, null), M(e.nil), D;
    }
    function M(D = g.async ? (0, e._)`await ` : e.nil) {
      const z = S.opts.passContext ? t.default.this : t.default.self, L = !("compile" in g && !C || g.schema === !1);
      _.assign(b, (0, e._)`${D}${(0, n.callValidateCode)(v, p, z, L)}`, g.modifying);
    }
    function P(D) {
      var z;
      _.if((0, e.not)((z = g.valid) !== null && z !== void 0 ? z : b), D);
    }
  }
  Me.funcKeywordCode = i;
  function s(v) {
    const { gen: g, data: y, it: _ } = v;
    g.if(_.parentData, () => g.assign(y, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(v, g) {
    const { gen: y } = v;
    y.if((0, e._)`Array.isArray(${g})`, () => {
      y.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(v);
    }, () => v.error());
  }
  function c({ schemaEnv: v }, g) {
    if (g.async && !v.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(v, g, y) {
    if (y === void 0)
      throw new Error(`keyword "${g}" failed to compile`);
    return v.scopeValue("keyword", typeof y == "function" ? { ref: y } : { ref: y, code: (0, e.stringify)(y) });
  }
  function d(v, g, y = !1) {
    return !g.length || g.some((_) => _ === "array" ? Array.isArray(v) : _ === "object" ? v && typeof v == "object" && !Array.isArray(v) : typeof v == _ || y && typeof v > "u");
  }
  Me.validSchemaType = d;
  function m({ schema: v, opts: g, self: y, errSchemaPath: _ }, f, $) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes($) : f.keyword !== $)
      throw new Error("ajv implementation error");
    const h = f.dependencies;
    if (h?.some((C) => !Object.prototype.hasOwnProperty.call(v, C)))
      throw new Error(`parent schema must have dependencies of ${$}: ${h.join(",")}`);
    if (f.validateSchema && !f.validateSchema(v[$])) {
      const S = `keyword "${$}" value is invalid at path "${_}": ` + y.errorsText(f.validateSchema.errors);
      if (g.validateSchema === "log")
        y.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Me.validateKeywordUsage = m, Me;
}
var Le = {}, Jo;
function Lc() {
  if (Jo) return Le;
  Jo = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.extendSubschemaMode = Le.extendSubschemaData = Le.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: d, topSchemaRef: m }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const v = i.schema[s];
      return a === void 0 ? {
        schema: v,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: v[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
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
  Le.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: l, dataTypes: d, propertyName: m }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: v } = s;
    if (a !== void 0) {
      const { errorPath: y, dataPathArr: _, opts: f } = s, $ = v.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      g($), i.errorPath = (0, e.str)`${y}${(0, t.getErrorPath)(a, c, f.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [..._, i.parentDataProperty];
    }
    if (l !== void 0) {
      const y = l instanceof e.Name ? l : v.let("data", l, !0);
      g(y), m !== void 0 && (i.propertyName = m);
    }
    d && (i.dataTypes = d);
    function g(y) {
      i.data = y, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, y];
    }
  }
  Le.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: d }) {
    c !== void 0 && (i.compositeRule = c), l !== void 0 && (i.createErrors = l), d !== void 0 && (i.allErrors = d), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Le.extendSubschemaMode = o, Le;
}
var ye = {}, br, Yo;
function fa() {
  return Yo || (Yo = 1, br = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, o, i;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (o = r; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
      for (o = r; o-- !== 0; ) {
        var s = i[o];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), br;
}
var wr = { exports: {} }, Xo;
function qc() {
  if (Xo) return wr.exports;
  Xo = 1;
  var e = wr.exports = function(r, o, i) {
    typeof o == "function" && (i = o, o = {}), i = o.cb || i;
    var s = typeof i == "function" ? i : i.pre || function() {
    }, a = i.post || function() {
    };
    t(o, s, a, r, "", r);
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
  function t(r, o, i, s, a, c, l, d, m, v) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, l, d, m, v);
      for (var g in s) {
        var y = s[g];
        if (Array.isArray(y)) {
          if (g in e.arrayKeywords)
            for (var _ = 0; _ < y.length; _++)
              t(r, o, i, y[_], a + "/" + g + "/" + _, c, a, g, s, _);
        } else if (g in e.propsKeywords) {
          if (y && typeof y == "object")
            for (var f in y)
              t(r, o, i, y[f], a + "/" + g + "/" + n(f), c, a, g, s, f);
        } else (g in e.keywords || r.allKeys && !(g in e.skipKeywords)) && t(r, o, i, y, a + "/" + g, c, a, g, s);
      }
      i(s, a, c, l, d, m, v);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return wr.exports;
}
var Zo;
function Qn() {
  if (Zo) return ye;
  Zo = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getSchemaRefs = ye.resolveUrl = ye.normalizeId = ye._getFullPath = ye.getFullPath = ye.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = fa(), n = qc(), r = /* @__PURE__ */ new Set([
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
  function o(_, f = !0) {
    return typeof _ == "boolean" ? !0 : f === !0 ? !s(_) : f ? a(_) <= f : !1;
  }
  ye.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(_) {
    for (const f in _) {
      if (i.has(f))
        return !0;
      const $ = _[f];
      if (Array.isArray($) && $.some(s) || typeof $ == "object" && s($))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let f = 0;
    for (const $ in _) {
      if ($ === "$ref")
        return 1 / 0;
      if (f++, !r.has($) && (typeof _[$] == "object" && (0, e.eachItem)(_[$], (h) => f += a(h)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(_, f = "", $) {
    $ !== !1 && (f = m(f));
    const h = _.parse(f);
    return l(_, h);
  }
  ye.getFullPath = c;
  function l(_, f) {
    return _.serialize(f).split("#")[0] + "#";
  }
  ye._getFullPath = l;
  const d = /#\/?$/;
  function m(_) {
    return _ ? _.replace(d, "") : "";
  }
  ye.normalizeId = m;
  function v(_, f, $) {
    return $ = m($), _.resolve(f, $);
  }
  ye.resolveUrl = v;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function y(_, f) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: $, uriResolver: h } = this.opts, C = m(_[$] || f), S = { "": C }, u = c(h, C, !1), p = {}, b = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (x, M, P, D) => {
      if (D === void 0)
        return;
      const z = u + M;
      let L = S[D];
      typeof x[$] == "string" && (L = W.call(this, x[$])), ne.call(this, x.$anchor), ne.call(this, x.$dynamicAnchor), S[M] = L;
      function W(X) {
        const re = this.opts.uriResolver.resolve;
        if (X = m(L ? re(L, X) : X), b.has(X))
          throw A(X);
        b.add(X);
        let G = this.refs[X];
        return typeof G == "string" && (G = this.refs[G]), typeof G == "object" ? k(x, G.schema, X) : X !== m(z) && (X[0] === "#" ? (k(x, p[X], X), p[X] = x) : this.refs[X] = z), X;
      }
      function ne(X) {
        if (typeof X == "string") {
          if (!g.test(X))
            throw new Error(`invalid anchor "${X}"`);
          W.call(this, `#${X}`);
        }
      }
    }), p;
    function k(x, M, P) {
      if (M !== void 0 && !t(x, M))
        throw A(P);
    }
    function A(x) {
      return new Error(`reference "${x}" resolves to more than one schema`);
    }
  }
  return ye.getSchemaRefs = y, ye;
}
var Qo;
function er() {
  if (Qo) return je;
  Qo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ic(), t = /* @__PURE__ */ Gn(), n = /* @__PURE__ */ ua(), r = /* @__PURE__ */ Gn(), o = /* @__PURE__ */ jc(), i = /* @__PURE__ */ Dc(), s = /* @__PURE__ */ Lc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Oe(), l = /* @__PURE__ */ Qn(), d = /* @__PURE__ */ ce(), m = /* @__PURE__ */ Zn();
  function v(N) {
    if (u(N) && (b(N), S(N))) {
      f(N);
      return;
    }
    g(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  je.validateFunctionCode = v;
  function g({ gen: N, validateName: F, schema: K, schemaEnv: J, opts: te }, oe) {
    te.code.es5 ? N.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      N.code((0, a._)`"use strict"; ${h(K, te)}`), _(N, te), N.code(oe);
    }) : N.func(F, (0, a._)`${c.default.data}, ${y(te)}`, J.$async, () => N.code(h(K, te)).code(oe));
  }
  function y(N) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${N.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(N, F) {
    N.if(c.default.valCxt, () => {
      N.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), N.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), N.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), N.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      N.var(c.default.instancePath, (0, a._)`""`), N.var(c.default.parentData, (0, a._)`undefined`), N.var(c.default.parentDataProperty, (0, a._)`undefined`), N.var(c.default.rootData, c.default.data), F.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(N) {
    const { schema: F, opts: K, gen: J } = N;
    g(N, () => {
      K.$comment && F.$comment && D(N), x(N), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), K.unevaluated && $(N), k(N), z(N);
    });
  }
  function $(N) {
    const { gen: F, validateName: K } = N;
    N.evaluated = F.const("evaluated", (0, a._)`${K}.evaluated`), F.if((0, a._)`${N.evaluated}.dynamicProps`, () => F.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${N.evaluated}.dynamicItems`, () => F.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(N, F) {
    const K = typeof N == "object" && N[F.schemaId];
    return K && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${K} */` : a.nil;
  }
  function C(N, F) {
    if (u(N) && (b(N), S(N))) {
      p(N, F);
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
  function p(N, F) {
    const { schema: K, gen: J, opts: te } = N;
    te.$comment && K.$comment && D(N), M(N), P(N);
    const oe = J.const("_errs", c.default.errors);
    k(N, oe), J.var(F, (0, a._)`${oe} === ${c.default.errors}`);
  }
  function b(N) {
    (0, d.checkUnknownRules)(N), A(N);
  }
  function k(N, F) {
    if (N.opts.jtd)
      return W(N, [], !1, F);
    const K = (0, t.getSchemaTypes)(N.schema), J = (0, t.coerceAndCheckDataType)(N, K);
    W(N, K, !J, F);
  }
  function A(N) {
    const { schema: F, errSchemaPath: K, opts: J, self: te } = N;
    F.$ref && J.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(F, te.RULES) && te.logger.warn(`$ref: keywords ignored in schema at path "${K}"`);
  }
  function x(N) {
    const { schema: F, opts: K } = N;
    F.default !== void 0 && K.useDefaults && K.strictSchema && (0, d.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function M(N) {
    const F = N.schema[N.opts.schemaId];
    F && (N.baseId = (0, l.resolveUrl)(N.opts.uriResolver, N.baseId, F));
  }
  function P(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function D({ gen: N, schemaEnv: F, schema: K, errSchemaPath: J, opts: te }) {
    const oe = K.$comment;
    if (te.$comment === !0)
      N.code((0, a._)`${c.default.self}.logger.log(${oe})`);
    else if (typeof te.$comment == "function") {
      const ue = (0, a.str)`${J}/$comment`, we = N.scopeValue("root", { ref: F.root });
      N.code((0, a._)`${c.default.self}.opts.$comment(${oe}, ${ue}, ${we}.schema)`);
    }
  }
  function z(N) {
    const { gen: F, schemaEnv: K, validateName: J, ValidationError: te, opts: oe } = N;
    K.$async ? F.if((0, a._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, a._)`new ${te}(${c.default.vErrors})`)) : (F.assign((0, a._)`${J}.errors`, c.default.vErrors), oe.unevaluated && L(N), F.return((0, a._)`${c.default.errors} === 0`));
  }
  function L({ gen: N, evaluated: F, props: K, items: J }) {
    K instanceof a.Name && N.assign((0, a._)`${F}.props`, K), J instanceof a.Name && N.assign((0, a._)`${F}.items`, J);
  }
  function W(N, F, K, J) {
    const { gen: te, schema: oe, data: ue, allErrors: we, opts: $e, self: ve } = N, { RULES: me } = ve;
    if (oe.$ref && ($e.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(oe, me))) {
      te.block(() => V(N, "$ref", me.all.$ref.definition));
      return;
    }
    $e.jtd || X(N, F), te.block(() => {
      for (const Ce of me.rules)
        dt(Ce);
      dt(me.post);
    });
    function dt(Ce) {
      (0, n.shouldUseGroup)(oe, Ce) && (Ce.type ? (te.if((0, r.checkDataType)(Ce.type, ue, $e.strictNumbers)), ne(N, Ce), F.length === 1 && F[0] === Ce.type && K && (te.else(), (0, r.reportTypeError)(N)), te.endIf()) : ne(N, Ce), we || te.if((0, a._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function ne(N, F) {
    const { gen: K, schema: J, opts: { useDefaults: te } } = N;
    te && (0, o.assignDefaults)(N, F.type), K.block(() => {
      for (const oe of F.rules)
        (0, n.shouldUseRule)(J, oe) && V(N, oe.keyword, oe.definition, F.type);
    });
  }
  function X(N, F) {
    N.schemaEnv.meta || !N.opts.strictTypes || (re(N, F), N.opts.allowUnionTypes || G(N, F), O(N, N.dataTypes));
  }
  function re(N, F) {
    if (F.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = F;
        return;
      }
      F.forEach((K) => {
        I(N.dataTypes, K) || E(N, `type "${K}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), w(N, F);
    }
  }
  function G(N, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && E(N, "use allowUnionTypes to allow union type keyword");
  }
  function O(N, F) {
    const K = N.self.RULES.all;
    for (const J in K) {
      const te = K[J];
      if (typeof te == "object" && (0, n.shouldUseRule)(N.schema, te)) {
        const { type: oe } = te.definition;
        oe.length && !oe.some((ue) => U(F, ue)) && E(N, `missing type "${oe.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function U(N, F) {
    return N.includes(F) || F === "number" && N.includes("integer");
  }
  function I(N, F) {
    return N.includes(F) || F === "integer" && N.includes("number");
  }
  function w(N, F) {
    const K = [];
    for (const J of N.dataTypes)
      I(F, J) ? K.push(J) : F.includes("integer") && J === "number" && K.push("integer");
    N.dataTypes = K;
  }
  function E(N, F) {
    const K = N.schemaEnv.baseId + N.errSchemaPath;
    F += ` at "${K}" (strictTypes)`, (0, d.checkStrictMode)(N, F, N.opts.strictTypes);
  }
  class R {
    constructor(F, K, J) {
      if ((0, i.validateKeywordUsage)(F, K, J), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = J, this.data = F.data, this.schema = F.schema[J], this.$data = K.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(F, this.schema, J, this.$data), this.schemaType = K.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = K, this.$data)
        this.schemaCode = F.gen.const("vSchema", ee(this.$data, F));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, K.schemaType, K.allowUndefined))
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
      (F ? m.reportExtraError : m.reportError)(this, this.def.error, K);
    }
    $dataError() {
      (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, m.resetErrorsCount)(this.gen, this.errsCount);
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
      const { gen: J, schemaCode: te, schemaType: oe, def: ue } = this;
      J.if((0, a.or)((0, a._)`${te} === undefined`, K)), F !== a.nil && J.assign(F, !0), (oe.length || ue.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), F !== a.nil && J.assign(F, !1)), J.else();
    }
    invalid$data() {
      const { gen: F, schemaCode: K, schemaType: J, def: te, it: oe } = this;
      return (0, a.or)(ue(), we());
      function ue() {
        if (J.length) {
          if (!(K instanceof a.Name))
            throw new Error("ajv implementation error");
          const $e = Array.isArray(J) ? J : [J];
          return (0, a._)`${(0, r.checkDataTypes)($e, K, oe.opts.strictNumbers, r.DataType.Wrong)}`;
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
      return C(te, K), te;
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
  je.KeywordCxt = R;
  function V(N, F, K, J) {
    const te = new R(N, K, F);
    "code" in K ? K.code(te, J) : te.$data && K.validate ? (0, i.funcKeywordCode)(te, K) : "macro" in K ? (0, i.macroKeywordCode)(te, K) : (K.compile || K.validate) && (0, i.funcKeywordCode)(te, K);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(N, { dataLevel: F, dataNames: K, dataPathArr: J }) {
    let te, oe;
    if (N === "")
      return c.default.rootData;
    if (N[0] === "/") {
      if (!H.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      te = N, oe = c.default.rootData;
    } else {
      const ve = Q.exec(N);
      if (!ve)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const me = +ve[1];
      if (te = ve[2], te === "#") {
        if (me >= F)
          throw new Error($e("property/index", me));
        return J[F - me];
      }
      if (me > F)
        throw new Error($e("data", me));
      if (oe = K[F - me], !te)
        return oe;
    }
    let ue = oe;
    const we = te.split("/");
    for (const ve of we)
      ve && (oe = (0, a._)`${oe}${(0, a.getProperty)((0, d.unescapeJsonPointer)(ve))}`, ue = (0, a._)`${ue} && ${oe}`);
    return ue;
    function $e(ve, me) {
      return `Cannot access ${ve} ${me} levels up, current level is ${F}`;
    }
  }
  return je.getData = ee, je;
}
var qt = {}, ei;
function oo() {
  if (ei) return qt;
  ei = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return qt.default = e, qt;
}
var Vt = {}, ti;
function tr() {
  if (ti) return Vt;
  ti = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qn();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Vt.default = t, Vt;
}
var _e = {}, ni;
function nr() {
  if (ni) return _e;
  ni = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ oo(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ ce(), i = /* @__PURE__ */ er();
  class s {
    constructor($) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof $.schema == "object" && (C = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (h = $.baseId) !== null && h !== void 0 ? h : (0, r.normalizeId)(C?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = s;
  function a(f) {
    const $ = d.call(this, f);
    if ($)
      return $;
    const h = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: C, lines: S } = this.opts.code, { ownProperties: u } = this.opts, p = new e.CodeGen(this.scope, { es5: C, lines: S, ownProperties: u });
    let b;
    f.$async && (b = p.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = p.scopeName("validate");
    f.validateName = k;
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
      topSchemaRef: p.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: k,
      ValidationError: b,
      schema: f.schema,
      schemaEnv: f,
      rootId: h,
      baseId: f.baseId || h,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let x;
    try {
      this._compilations.add(f), (0, i.validateFunctionCode)(A), p.optimize(this.opts.code.optimize);
      const M = p.toString();
      x = `${p.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (x = this.opts.code.process(x, f));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, x)(this, this.scope.get());
      if (this.scope.value(k, { ref: D }), D.errors = null, D.schema = f.schema, D.schemaEnv = f, f.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: k, validateCode: M, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: z, items: L } = A;
        D.evaluated = {
          props: z instanceof e.Name ? void 0 : z,
          items: L instanceof e.Name ? void 0 : L,
          dynamicProps: z instanceof e.Name,
          dynamicItems: L instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return f.validate = D, f;
    } catch (M) {
      throw delete f.validate, delete f.validateName, x && this.logger.error("Error compiling schema, function code:", x), M;
    } finally {
      this._compilations.delete(f);
    }
  }
  _e.compileSchema = a;
  function c(f, $, h) {
    var C;
    h = (0, r.resolveUrl)(this.opts.uriResolver, $, h);
    const S = f.refs[h];
    if (S)
      return S;
    let u = v.call(this, f, h);
    if (u === void 0) {
      const p = (C = f.localRefs) === null || C === void 0 ? void 0 : C[h], { schemaId: b } = this.opts;
      p && (u = new s({ schema: p, schemaId: b, root: f, baseId: $ }));
    }
    if (u !== void 0)
      return f.refs[h] = l.call(this, u);
  }
  _e.resolveRef = c;
  function l(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function d(f) {
    for (const $ of this._compilations)
      if (m($, f))
        return $;
  }
  _e.getCompilingSchema = d;
  function m(f, $) {
    return f.schema === $.schema && f.root === $.root && f.baseId === $.baseId;
  }
  function v(f, $) {
    let h;
    for (; typeof (h = this.refs[$]) == "string"; )
      $ = h;
    return h || this.schemas[$] || g.call(this, f, $);
  }
  function g(f, $) {
    const h = this.opts.uriResolver.parse($), C = (0, r._getFullPath)(this.opts.uriResolver, h);
    let S = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && C === S)
      return _.call(this, h, f);
    const u = (0, r.normalizeId)(C), p = this.refs[u] || this.schemas[u];
    if (typeof p == "string") {
      const b = g.call(this, f, p);
      return typeof b?.schema != "object" ? void 0 : _.call(this, h, b);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), u === (0, r.normalizeId)($)) {
        const { schema: b } = p, { schemaId: k } = this.opts, A = b[k];
        return A && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, A)), new s({ schema: b, schemaId: k, root: f, baseId: S });
      }
      return _.call(this, h, p);
    }
  }
  _e.resolveSchema = g;
  const y = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(f, { baseId: $, schema: h, root: C }) {
    var S;
    if (((S = f.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const b of f.fragment.slice(1).split("/")) {
      if (typeof h == "boolean")
        return;
      const k = h[(0, o.unescapeFragment)(b)];
      if (k === void 0)
        return;
      h = k;
      const A = typeof h == "object" && h[this.opts.schemaId];
      !y.has(b) && A && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, A));
    }
    let u;
    if (typeof h != "boolean" && h.$ref && !(0, o.schemaHasRulesButRef)(h, this.RULES)) {
      const b = (0, r.resolveUrl)(this.opts.uriResolver, $, h.$ref);
      u = g.call(this, C, b);
    }
    const { schemaId: p } = this.opts;
    if (u = u || new s({ schema: h, schemaId: p, root: C, baseId: $ }), u.schema !== u.root.schema)
      return u;
  }
  return _e;
}
const Vc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Bc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Uc = "object", Hc = ["$data"], Kc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Gc = !1, Wc = {
  $id: Vc,
  description: Bc,
  type: Uc,
  required: Hc,
  properties: Kc,
  additionalProperties: Gc
};
var Bt = {}, xt = { exports: {} }, _r, ri;
function pa() {
  if (ri) return _r;
  ri = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(u) {
    let p = "", b = 0, k = 0;
    for (k = 0; k < u.length; k++)
      if (b = u[k].charCodeAt(0), b !== 48) {
        if (!(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
          return "";
        p += u[k];
        break;
      }
    for (k += 1; k < u.length; k++) {
      if (b = u[k].charCodeAt(0), !(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
        return "";
      p += u[k];
    }
    return p;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(u) {
    return u.length = 0, !0;
  }
  function c(u, p, b) {
    if (u.length) {
      const k = i(u);
      if (k !== "")
        p.push(k);
      else
        return b.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function l(u) {
    let p = 0;
    const b = { error: !1, address: "", zone: "" }, k = [], A = [];
    let x = !1, M = !1, P = c;
    for (let D = 0; D < u.length; D++) {
      const z = u[D];
      if (!(z === "[" || z === "]"))
        if (z === ":") {
          if (x === !0 && (M = !0), !P(A, k, b))
            break;
          if (++p > 7) {
            b.error = !0;
            break;
          }
          D > 0 && u[D - 1] === ":" && (x = !0), k.push(":");
          continue;
        } else if (z === "%") {
          if (!P(A, k, b))
            break;
          P = a;
        } else {
          A.push(z);
          continue;
        }
    }
    return A.length && (P === a ? b.zone = A.join("") : M ? k.push(A.join("")) : k.push(i(A))), b.address = k.join(""), b;
  }
  function d(u) {
    if (m(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const p = l(u);
    if (p.error)
      return { host: u, isIPV6: !1 };
    {
      let b = p.address, k = p.address;
      return p.zone && (b += "%" + p.zone, k += "%25" + p.zone), { host: b, isIPV6: !0, escapedHost: k };
    }
  }
  function m(u, p) {
    let b = 0;
    for (let k = 0; k < u.length; k++)
      u[k] === p && b++;
    return b;
  }
  function v(u) {
    let p = u;
    const b = [];
    let k = -1, A = 0;
    for (; A = p.length; ) {
      if (A === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          b.push("/");
          break;
        } else {
          b.push(p);
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
          b.push("/");
          break;
        }
      } else if (A === 3 && p === "/..") {
        b.length !== 0 && b.pop(), b.push("/");
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
          p = p.slice(3), b.length !== 0 && b.pop();
          continue;
        }
      }
      if ((k = p.indexOf("/", 1)) === -1) {
        b.push(p);
        break;
      } else
        b.push(p.slice(0, k)), p = p.slice(k);
    }
    return b.join("");
  }
  const g = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, y = /[@/?#:]/g, _ = /[@/?#]/g;
  function f(u, p) {
    const b = p ? _ : y;
    return b.lastIndex = 0, u.replace(b, (k) => g[k]);
  }
  function $(u, p = !1) {
    if (u.indexOf("%") === -1)
      return u;
    let b = "";
    for (let k = 0; k < u.length; k++) {
      if (u[k] === "%" && k + 2 < u.length) {
        const A = u.slice(k + 1, k + 3);
        if (n(A)) {
          const x = A.toUpperCase(), M = String.fromCharCode(parseInt(x, 16));
          p && r(M) ? b += M : b += "%" + x, k += 2;
          continue;
        }
      }
      b += u[k];
    }
    return b;
  }
  function h(u) {
    let p = "";
    for (let b = 0; b < u.length; b++) {
      if (u[b] === "%" && b + 2 < u.length) {
        const k = u.slice(b + 1, b + 3);
        if (n(k)) {
          const A = k.toUpperCase(), x = String.fromCharCode(parseInt(A, 16));
          x !== "." && r(x) ? p += x : p += "%" + A, b += 2;
          continue;
        }
      }
      o(u[b]) ? p += u[b] : p += escape(u[b]);
    }
    return p;
  }
  function C(u) {
    let p = "";
    for (let b = 0; b < u.length; b++) {
      if (u[b] === "%" && b + 2 < u.length) {
        const k = u.slice(b + 1, b + 3);
        if (n(k)) {
          p += "%" + k.toUpperCase(), b += 2;
          continue;
        }
      }
      p += escape(u[b]);
    }
    return p;
  }
  function S(u) {
    const p = [];
    if (u.userinfo !== void 0 && (p.push(u.userinfo), p.push("@")), u.host !== void 0) {
      let b = unescape(u.host);
      if (!t(b)) {
        const k = d(b);
        k.isIPV6 === !0 ? b = `[${k.escapedHost}]` : b = f(b, !1);
      }
      p.push(b);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (p.push(":"), p.push(String(u.port))), p.length ? p.join("") : void 0;
  }
  return _r = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: $,
    normalizePathEncoding: h,
    escapePreservingEscapes: C,
    removeDotSegments: v,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: d,
    stringArrayToHexStripped: i
  }, _r;
}
var Sr, oi;
function Jc() {
  if (oi) return Sr;
  oi = 1;
  const { isUUID: e } = pa(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(u) {
    return u.secure === !0 ? !0 : u.secure === !1 ? !1 : u.scheme ? u.scheme.length === 3 && (u.scheme[0] === "w" || u.scheme[0] === "W") && (u.scheme[1] === "s" || u.scheme[1] === "S") && (u.scheme[2] === "s" || u.scheme[2] === "S") : !1;
  }
  function i(u) {
    return u.host || (u.error = u.error || "HTTP URIs must have a host."), u;
  }
  function s(u) {
    const p = String(u.scheme).toLowerCase() === "https";
    return (u.port === (p ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = o(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (o(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [p, b] = u.resourceName.split("?");
      u.path = p && p !== "/" ? p : void 0, u.query = b, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, p) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const b = u.path.match(t);
    if (b) {
      const k = p.scheme || u.scheme || "urn";
      u.nid = b[1].toLowerCase(), u.nss = b[2];
      const A = `${k}:${p.nid || u.nid}`, x = S(A);
      u.path = void 0, x && (u = x.parse(u, p));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function d(u, p) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const b = p.scheme || u.scheme || "urn", k = u.nid.toLowerCase(), A = `${b}:${p.nid || k}`, x = S(A);
    x && (u = x.serialize(u, p));
    const M = u, P = u.nss;
    return M.path = `${k || p.nid}:${P}`, p.skipEscape = !0, M;
  }
  function m(u, p) {
    const b = u;
    return b.uuid = b.nss, b.nss = void 0, !p.tolerant && (!b.uuid || !e(b.uuid)) && (b.error = b.error || "UUID is not valid."), b;
  }
  function v(u) {
    const p = u;
    return p.nss = (u.uuid || "").toLowerCase(), p;
  }
  const g = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: s
    }
  ), y = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: g.domainHost,
      parse: i,
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
  ), f = (
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
      http: g,
      https: y,
      ws: _,
      wss: f,
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
  return Sr = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, Sr;
}
var ii;
function Yc() {
  if (ii) return xt.exports;
  ii = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = pa(), { SCHEMES: l, getSchemeHandler: d } = Jc();
  function m(A, x) {
    return typeof A == "string" ? A = /** @type {T} */
    u(A, x) : typeof A == "object" && (A = /** @type {T} */
    S(_(A, x), x)), A;
  }
  function v(A, x, M) {
    const P = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, D = g(S(A, P), S(x, P), P, !0);
    return P.skipEscape = !0, _(D, P);
  }
  function g(A, x, M, P) {
    const D = {};
    return P || (A = S(_(A, M), M), x = S(_(x, M), M)), M = M || {}, !M.tolerant && x.scheme ? (D.scheme = x.scheme, D.userinfo = x.userinfo, D.host = x.host, D.port = x.port, D.path = t(x.path || ""), D.query = x.query) : (x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0 ? (D.userinfo = x.userinfo, D.host = x.host, D.port = x.port, D.path = t(x.path || ""), D.query = x.query) : (x.path ? (x.path[0] === "/" ? D.path = t(x.path) : ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path ? D.path = "/" + x.path : A.path ? D.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + x.path : D.path = x.path, D.path = t(D.path)), D.query = x.query) : (D.path = A.path, x.query !== void 0 ? D.query = x.query : D.query = A.query), D.userinfo = A.userinfo, D.host = A.host, D.port = A.port), D.scheme = A.scheme), D.fragment = x.fragment, D;
  }
  function y(A, x, M) {
    const P = b(A, M), D = b(x, M);
    return P !== void 0 && D !== void 0 && P.toLowerCase() === D.toLowerCase();
  }
  function _(A, x) {
    const M = {
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
    }, P = Object.assign({}, x), D = [], z = d(P.scheme || M.scheme);
    z && z.serialize && z.serialize(M, P), M.path !== void 0 && (P.skipEscape ? M.path = r(M.path) : (M.path = i(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), P.reference !== "suffix" && M.scheme && D.push(M.scheme, ":");
    const L = n(M);
    if (L !== void 0 && (P.reference !== "suffix" && D.push("//"), D.push(L), M.path && M.path[0] !== "/" && D.push("/")), M.path !== void 0) {
      let W = M.path;
      !P.absolutePath && (!z || !z.absolutePath) && (W = t(W)), L === void 0 && W[0] === "/" && W[1] === "/" && (W = "/%2F" + W.slice(2)), D.push(W);
    }
    return M.query !== void 0 && D.push("?", M.query), M.fragment !== void 0 && D.push("#", M.fragment), D.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function h(A, x) {
    if (x[2] !== void 0 && A.path && A.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof A.port == "number" && (A.port < 0 || A.port > 65535))
      return "URI port is malformed.";
  }
  function C(A, x) {
    const M = Object.assign({}, x), P = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, z = !1;
    M.reference === "suffix" && (M.scheme ? A = M.scheme + ":" + A : A = "//" + A);
    const L = A.match($);
    L !== null && L[1].indexOf("\\") !== -1 && (P.error = "URI authority must not contain a literal backslash.", D = !0);
    const W = A.match(f);
    if (W) {
      P.scheme = W[1], P.userinfo = W[3], P.host = W[4], P.port = parseInt(W[5], 10), P.path = W[6] || "", P.query = W[7], P.fragment = W[8], isNaN(P.port) && (P.port = W[5]);
      const ne = h(P, W);
      if (ne !== void 0 && (P.error = P.error || ne, D = !0), P.host)
        if (a(P.host) === !1) {
          const G = e(P.host);
          P.host = G.host.toLowerCase(), z = G.isIPV6;
        } else
          z = !0;
      P.scheme === void 0 && P.userinfo === void 0 && P.host === void 0 && P.port === void 0 && P.query === void 0 && !P.path ? P.reference = "same-document" : P.scheme === void 0 ? P.reference = "relative" : P.fragment === void 0 ? P.reference = "absolute" : P.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== P.reference && (P.error = P.error || "URI is not a " + M.reference + " reference.");
      const X = d(M.scheme || P.scheme);
      if (!M.unicodeSupport && (!X || !X.unicodeSupport) && P.host && (M.domainHost || X && X.domainHost) && z === !1 && c(P.host))
        try {
          P.host = new URL("http://" + P.host).hostname;
        } catch (re) {
          P.error = P.error || "Host's domain name can not be converted to ASCII: " + re;
        }
      if ((!X || X && !X.skipNormalize) && (A.indexOf("%") !== -1 && (P.scheme !== void 0 && (P.scheme = unescape(P.scheme)), P.host !== void 0 && (P.host = s(unescape(P.host), z))), P.path && (P.path = o(P.path)), P.fragment))
        try {
          P.fragment = encodeURI(decodeURIComponent(P.fragment));
        } catch {
          P.error = P.error || "URI malformed";
        }
      X && X.parse && X.parse(P, M);
    } else
      P.error = P.error || "URI can not be parsed.";
    return { parsed: P, malformedAuthorityOrPort: D };
  }
  function S(A, x) {
    return C(A, x).parsed;
  }
  function u(A, x) {
    return p(A, x).normalized;
  }
  function p(A, x) {
    const { parsed: M, malformedAuthorityOrPort: P } = C(A, x);
    return {
      normalized: P ? A : _(M, x),
      malformedAuthorityOrPort: P
    };
  }
  function b(A, x) {
    if (typeof A == "string") {
      const { normalized: M, malformedAuthorityOrPort: P } = p(A, x);
      return P ? void 0 : M;
    }
    if (typeof A == "object")
      return _(A, x);
  }
  const k = {
    SCHEMES: l,
    normalize: m,
    resolve: v,
    resolveComponent: g,
    equal: y,
    serialize: _,
    parse: S
  };
  return xt.exports = k, xt.exports.default = k, xt.exports.fastUri = k, xt.exports;
}
var si;
function Xc() {
  if (si) return Bt;
  si = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = Yc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Bt.default = e, Bt;
}
var ai;
function Zc() {
  return ai || (ai = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ er();
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
    const r = /* @__PURE__ */ oo(), o = /* @__PURE__ */ tr(), i = /* @__PURE__ */ da(), s = /* @__PURE__ */ nr(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Qn(), l = /* @__PURE__ */ Gn(), d = /* @__PURE__ */ ce(), m = Wc, v = /* @__PURE__ */ Xc(), g = (G, O) => new RegExp(G, O);
    g.code = "new RegExp";
    const y = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    ]), f = {
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
    }, h = 200;
    function C(G) {
      var O, U, I, w, E, R, V, H, Q, ee, N, F, K, J, te, oe, ue, we, $e, ve, me, dt, Ce, ur, fr;
      const Ct = G.strict, pr = (O = G.code) === null || O === void 0 ? void 0 : O.optimize, Po = pr === !0 || pr === void 0 ? 1 : pr || 0, Ro = (I = (U = G.code) === null || U === void 0 ? void 0 : U.regExp) !== null && I !== void 0 ? I : g, fc = (w = G.uriResolver) !== null && w !== void 0 ? w : v.default;
      return {
        strictSchema: (R = (E = G.strictSchema) !== null && E !== void 0 ? E : Ct) !== null && R !== void 0 ? R : !0,
        strictNumbers: (H = (V = G.strictNumbers) !== null && V !== void 0 ? V : Ct) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (Q = G.strictTypes) !== null && Q !== void 0 ? Q : Ct) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (F = (N = G.strictTuples) !== null && N !== void 0 ? N : Ct) !== null && F !== void 0 ? F : "log",
        strictRequired: (J = (K = G.strictRequired) !== null && K !== void 0 ? K : Ct) !== null && J !== void 0 ? J : !1,
        code: G.code ? { ...G.code, optimize: Po, regExp: Ro } : { optimize: Po, regExp: Ro },
        loopRequired: (te = G.loopRequired) !== null && te !== void 0 ? te : h,
        loopEnum: (oe = G.loopEnum) !== null && oe !== void 0 ? oe : h,
        meta: (ue = G.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (we = G.messages) !== null && we !== void 0 ? we : !0,
        inlineRefs: ($e = G.inlineRefs) !== null && $e !== void 0 ? $e : !0,
        schemaId: (ve = G.schemaId) !== null && ve !== void 0 ? ve : "$id",
        addUsedSchema: (me = G.addUsedSchema) !== null && me !== void 0 ? me : !0,
        validateSchema: (dt = G.validateSchema) !== null && dt !== void 0 ? dt : !0,
        validateFormats: (Ce = G.validateFormats) !== null && Ce !== void 0 ? Ce : !0,
        unicodeRegExp: (ur = G.unicodeRegExp) !== null && ur !== void 0 ? ur : !0,
        int32range: (fr = G.int32range) !== null && fr !== void 0 ? fr : !0,
        uriResolver: fc
      };
    }
    class S {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...C(O) };
        const { es5: U, lines: I } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: U, lines: I }), this.logger = P(O.logger);
        const w = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, i.getRules)(), u.call(this, f, O, "NOT SUPPORTED"), u.call(this, $, O, "DEPRECATED", "warn"), this._metaOpts = x.call(this), O.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && A.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), b.call(this), O.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: U, schemaId: I } = this.opts;
        let w = m;
        I === "id" && (w = { ...m }, w.id = w.$id, delete w.$id), U && O && this.addMetaSchema(w, w[I], !1);
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
        const w = I(U);
        return "$async" in I || (this.errors = I.errors), w;
      }
      compile(O, U) {
        const I = this._addSchema(O, U);
        return I.validate || this._compileSchemaEnv(I);
      }
      compileAsync(O, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: I } = this.opts;
        return w.call(this, O, U);
        async function w(ee, N) {
          await E.call(this, ee.$schema);
          const F = this._addSchema(ee, N);
          return F.validate || R.call(this, F);
        }
        async function E(ee) {
          ee && !this.getSchema(ee) && await w.call(this, { $ref: ee }, !0);
        }
        async function R(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (N) {
            if (!(N instanceof o.default))
              throw N;
            return V.call(this, N), await H.call(this, N.missingSchema), R.call(this, ee);
          }
        }
        function V({ missingSchema: ee, missingRef: N }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${N} cannot be resolved`);
        }
        async function H(ee) {
          const N = await Q.call(this, ee);
          this.refs[ee] || await E.call(this, N.$schema), this.refs[ee] || this.addSchema(N, ee, U);
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
      addSchema(O, U, I, w = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const R of O)
            this.addSchema(R, void 0, I, w);
          return this;
        }
        let E;
        if (typeof O == "object") {
          const { schemaId: R } = this.opts;
          if (E = O[R], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${R} must be string`);
        }
        return U = (0, c.normalizeId)(U || E), this._checkUnique(U), this.schemas[U] = this._addSchema(O, I, U, w, !0), this;
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
        const w = this.validate(I, O);
        if (!w && U) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return w;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let U;
        for (; typeof (U = p.call(this, O)) == "string"; )
          O = U;
        if (U === void 0) {
          const { schemaId: I } = this.opts, w = new s.SchemaEnv({ schema: {}, schemaId: I });
          if (U = s.resolveSchema.call(this, w, O), !U)
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
            const U = p.call(this, O);
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
        if (z.call(this, I, U), !U)
          return (0, d.eachItem)(I, (E) => L.call(this, E)), this;
        ne.call(this, U);
        const w = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, d.eachItem)(I, w.type.length === 0 ? (E) => L.call(this, E, w) : (E) => w.type.forEach((R) => L.call(this, E, w, R))), this;
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
          const w = I.rules.findIndex((E) => E.keyword === O);
          w >= 0 && I.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[O] = U, this;
      }
      errorsText(O = this.errors, { separator: U = ", ", dataVar: I = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((w) => `${I}${w.instancePath} ${w.message}`).reduce((w, E) => w + U + E);
      }
      $dataMetaSchema(O, U) {
        const I = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const w of U) {
          const E = w.split("/").slice(1);
          let R = O;
          for (const V of E)
            R = R[V];
          for (const V in I) {
            const H = I[V];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, ee = R[V];
            Q && ee && (R[V] = re(ee));
          }
        }
        return O;
      }
      _removeAllSchemas(O, U) {
        for (const I in O) {
          const w = O[I];
          (!U || U.test(I)) && (typeof w == "string" ? delete O[I] : w && !w.meta && (this._cache.delete(w.schema), delete O[I]));
        }
      }
      _addSchema(O, U, I, w = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let R;
        const { schemaId: V } = this.opts;
        if (typeof O == "object")
          R = O[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(O);
        if (H !== void 0)
          return H;
        I = (0, c.normalizeId)(R || I);
        const Q = c.getSchemaRefs.call(this, O, I);
        return H = new s.SchemaEnv({ schema: O, schemaId: V, meta: U, baseId: I, localRefs: Q }), this._cache.set(H.schema, H), E && !I.startsWith("#") && (I && this._checkUnique(I), this.refs[I] = H), w && this.validateSchema(O, !0), H;
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
    S.ValidationError = r.default, S.MissingRefError = o.default, e.default = S;
    function u(G, O, U, I = "error") {
      for (const w in G) {
        const E = w;
        E in O && this.logger[I](`${U}: option ${w}. ${G[E]}`);
      }
    }
    function p(G) {
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
    function k() {
      for (const G in this.opts.formats) {
        const O = this.opts.formats[G];
        O && this.addFormat(G, O);
      }
    }
    function A(G) {
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
    function x() {
      const G = { ...this.opts };
      for (const O of y)
        delete G[O];
      return G;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function P(G) {
      if (G === !1)
        return M;
      if (G === void 0)
        return console;
      if (G.log && G.warn && G.error)
        return G;
      throw new Error("logger must implement log, warn and error methods");
    }
    const D = /^[a-z_$][a-z0-9_$:-]*$/i;
    function z(G, O) {
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
      const w = O?.post;
      if (U && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let R = w ? E.post : E.rules.find(({ type: H }) => H === U);
      if (R || (R = { type: U, rules: [] }, E.rules.push(R)), E.keywords[G] = !0, !O)
        return;
      const V = {
        keyword: G,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? W.call(this, R, V, O.before) : R.rules.push(V), E.all[G] = V, (I = O.implements) === null || I === void 0 || I.forEach((H) => this.addKeyword(H));
    }
    function W(G, O, U) {
      const I = G.rules.findIndex((w) => w.keyword === U);
      I >= 0 ? G.rules.splice(I, 0, O) : (G.rules.push(O), this.logger.warn(`rule ${U} is not defined`));
    }
    function ne(G) {
      let { metaSchema: O } = G;
      O !== void 0 && (G.$data && this.opts.$data && (O = re(O)), G.validateSchema = this.compile(O, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function re(G) {
      return { anyOf: [G, X] };
    }
  })(mr)), mr;
}
var Ut = {}, Ht = {}, Kt = {}, ci;
function Qc() {
  if (ci) return Kt;
  ci = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Kt.default = e, Kt;
}
var Ge = {}, li;
function io() {
  if (li) return Ge;
  li = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.callRef = Ge.getValidate = void 0;
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), o = /* @__PURE__ */ nr(), i = /* @__PURE__ */ ce(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: d, schema: m, it: v } = l, { baseId: g, schemaEnv: y, validateName: _, opts: f, self: $ } = v, { root: h } = y;
      if ((m === "#" || m === "#/") && g === h.baseId)
        return S();
      const C = o.resolveRef.call($, h, g, m);
      if (C === void 0)
        throw new e.default(v.opts.uriResolver, g, m);
      if (C instanceof o.SchemaEnv)
        return u(C);
      return p(C);
      function S() {
        if (y === h)
          return c(l, _, y, y.$async);
        const b = d.scopeValue("root", { ref: h });
        return c(l, (0, n._)`${b}.validate`, h, h.$async);
      }
      function u(b) {
        const k = a(l, b);
        c(l, k, b, b.$async);
      }
      function p(b) {
        const k = d.scopeValue("schema", f.code.source === !0 ? { ref: b, code: (0, n.stringify)(b) } : { ref: b }), A = d.name("valid"), x = l.subschema({
          schema: b,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: m
        }, A);
        l.mergeEvaluated(x), l.ok(A);
      }
    }
  };
  function a(l, d) {
    const { gen: m } = l;
    return d.validate ? m.scopeValue("validate", { ref: d.validate }) : (0, n._)`${m.scopeValue("wrapper", { ref: d })}.validate`;
  }
  Ge.getValidate = a;
  function c(l, d, m, v) {
    const { gen: g, it: y } = l, { allErrors: _, schemaEnv: f, opts: $ } = y, h = $.passContext ? r.default.this : n.nil;
    v ? C() : S();
    function C() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const b = g.let("valid");
      g.try(() => {
        g.code((0, n._)`await ${(0, t.callValidateCode)(l, d, h)}`), p(d), _ || g.assign(b, !0);
      }, (k) => {
        g.if((0, n._)`!(${k} instanceof ${y.ValidationError})`, () => g.throw(k)), u(k), _ || g.assign(b, !1);
      }), l.ok(b);
    }
    function S() {
      l.result((0, t.callValidateCode)(l, d, h), () => p(d), () => u(d));
    }
    function u(b) {
      const k = (0, n._)`${b}.errors`;
      g.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), g.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function p(b) {
      var k;
      if (!y.opts.unevaluated)
        return;
      const A = (k = m?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (y.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (y.props = i.mergeEvaluated.props(g, A.props, y.props));
        else {
          const x = g.var("props", (0, n._)`${b}.evaluated.props`);
          y.props = i.mergeEvaluated.props(g, x, y.props, n.Name);
        }
      if (y.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (y.items = i.mergeEvaluated.items(g, A.items, y.items));
        else {
          const x = g.var("items", (0, n._)`${b}.evaluated.items`);
          y.items = i.mergeEvaluated.items(g, x, y.items, n.Name);
        }
    }
  }
  return Ge.callRef = c, Ge.default = s, Ge;
}
var di;
function el() {
  if (di) return Ht;
  di = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qc(), t = /* @__PURE__ */ io(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ht.default = n, Ht;
}
var Gt = {}, Wt = {}, ui;
function tl() {
  if (ui) return Wt;
  ui = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: i, schemaCode: s }) => (0, e.str)`must be ${n[i].okStr} ${s}`,
    params: ({ keyword: i, schemaCode: s }) => (0, e._)`{comparison: ${n[i].okStr}, limit: ${s}}`
  }, o = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(i) {
      const { keyword: s, data: a, schemaCode: c } = i;
      i.fail$data((0, e._)`${a} ${n[s].fail} ${c} || isNaN(${a})`);
    }
  };
  return Wt.default = o, Wt;
}
var Jt = {}, fi;
function nl() {
  if (fi) return Jt;
  fi = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, l = o.let("res"), d = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      r.fail$data((0, e._)`(${s} === 0 || (${l} = ${i}/${s}, ${d}))`);
    }
  };
  return Jt.default = n, Jt;
}
var Yt = {}, Xt = {}, pi;
function rl() {
  if (pi) return Xt;
  pi = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Xt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Xt;
}
var hi;
function ol() {
  if (hi) return Yt;
  hi = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ rl(), o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: s }) {
        const a = i === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: s, data: a, schemaCode: c, it: l } = i, d = s === "maxLength" ? e.operators.GT : e.operators.LT, m = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${m} ${d} ${c}`);
    }
  };
  return Yt.default = o, Yt;
}
var Zt = {}, mi;
function il() {
  if (mi) return Zt;
  mi = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ie(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: d, it: m } = i, v = m.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: g } = m.opts.code, y = g.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, g), _ = s.let("valid");
        s.try(() => s.assign(_, (0, n._)`${y}(${d}, ${v}).test(${a})`), () => s.assign(_, !1)), i.fail$data((0, n._)`!${_}`);
      } else {
        const g = (0, e.usePattern)(i, l);
        i.fail$data((0, n._)`!${g}.test(${a})`);
      }
    }
  };
  return Zt.default = o, Zt;
}
var Qt = {}, gi;
function sl() {
  if (gi) return Qt;
  gi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const i = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${o} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: i, schemaCode: s } = r, a = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${i}).length ${a} ${s}`);
    }
  };
  return Qt.default = n, Qt;
}
var en = {}, yi;
function al() {
  if (yi) return en;
  yi = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: c, data: l, $data: d, it: m } = i, { opts: v } = m;
      if (!d && a.length === 0)
        return;
      const g = a.length >= v.loopRequired;
      if (m.allErrors ? y() : _(), v.strictRequired) {
        const h = i.parentSchema.properties, { definedProperties: C } = i.it;
        for (const S of a)
          if (h?.[S] === void 0 && !C.has(S)) {
            const u = m.schemaEnv.baseId + m.errSchemaPath, p = `required property "${S}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(m, p, m.opts.strictRequired);
          }
      }
      function y() {
        if (g || d)
          i.block$data(t.nil, f);
        else
          for (const h of a)
            (0, e.checkReportMissingProp)(i, h);
      }
      function _() {
        const h = s.let("missing");
        if (g || d) {
          const C = s.let("valid", !0);
          i.block$data(C, () => $(h, C)), i.ok(C);
        } else
          s.if((0, e.checkMissingProp)(i, a, h)), (0, e.reportMissingProp)(i, h), s.else();
      }
      function f() {
        s.forOf("prop", c, (h) => {
          i.setParams({ missingProperty: h }), s.if((0, e.noPropertyInData)(s, l, h, v.ownProperties), () => i.error());
        });
      }
      function $(h, C) {
        i.setParams({ missingProperty: h }), s.forOf(h, c, () => {
          s.assign(C, (0, e.propertyInData)(s, l, h, v.ownProperties)), s.if((0, t.not)(C), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return en.default = o, en;
}
var tn = {}, $i;
function cl() {
  if ($i) return tn;
  $i = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const i = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${o} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: i, schemaCode: s } = r, a = o === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${i}.length ${a} ${s}`);
    }
  };
  return tn.default = n, tn;
}
var nn = {}, rn = {}, vi;
function so() {
  if (vi) return rn;
  vi = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = fa();
  return e.code = 'require("ajv/dist/runtime/equal").default', rn.default = e, rn;
}
var bi;
function ll() {
  if (bi) return nn;
  bi = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ so(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: d, parentSchema: m, schemaCode: v, it: g } = s;
      if (!l && !d)
        return;
      const y = a.let("valid"), _ = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      s.block$data(y, f, (0, t._)`${v} === false`), s.ok(y);
      function f() {
        const S = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        s.setParams({ i: S, j: u }), a.assign(y, !0), a.if((0, t._)`${S} > 1`, () => ($() ? h : C)(S, u));
      }
      function $() {
        return _.length > 0 && !_.some((S) => S === "object" || S === "array");
      }
      function h(S, u) {
        const p = a.name("item"), b = (0, e.checkDataTypes)(_, p, g.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(p, (0, t._)`${c}[${S}]`), a.if(b, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${p} == "string"`, (0, t._)`${p} += "_"`), a.if((0, t._)`typeof ${k}[${p}] == "number"`, () => {
            a.assign(u, (0, t._)`${k}[${p}]`), s.error(), a.assign(y, !1).break();
          }).code((0, t._)`${k}[${p}] = ${S}`);
        });
      }
      function C(S, u) {
        const p = (0, n.useFunc)(a, r.default), b = a.name("outer");
        a.label(b).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${u} = ${S}; ${u}--;`, () => a.if((0, t._)`${p}(${c}[${S}], ${c}[${u}])`, () => {
          s.error(), a.assign(y, !1).break(b);
        })));
      }
    }
  };
  return nn.default = i, nn;
}
var on = {}, wi;
function dl() {
  if (wi) return on;
  wi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ so(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schemaCode: l, schema: d } = i;
      c || d && typeof d == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${l})`) : i.fail((0, e._)`${d} !== ${a}`);
    }
  };
  return on.default = o, on;
}
var sn = {}, _i;
function ul() {
  if (_i) return sn;
  _i = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ so(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: d, it: m } = i;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const v = l.length >= m.opts.loopEnum;
      let g;
      const y = () => g ?? (g = (0, t.useFunc)(s, n.default));
      let _;
      if (v || c)
        _ = s.let("valid"), i.block$data(_, f);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const h = s.const("vSchema", d);
        _ = (0, e.or)(...l.map((C, S) => $(h, S)));
      }
      i.pass(_);
      function f() {
        s.assign(_, !1), s.forOf("v", d, (h) => s.if((0, e._)`${y()}(${a}, ${h})`, () => s.assign(_, !0).break()));
      }
      function $(h, C) {
        const S = l[C];
        return typeof S == "object" && S !== null ? (0, e._)`${y()}(${a}, ${h}[${C}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return sn.default = o, sn;
}
var Si;
function fl() {
  if (Si) return Gt;
  Si = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tl(), t = /* @__PURE__ */ nl(), n = /* @__PURE__ */ ol(), r = /* @__PURE__ */ il(), o = /* @__PURE__ */ sl(), i = /* @__PURE__ */ al(), s = /* @__PURE__ */ cl(), a = /* @__PURE__ */ ll(), c = /* @__PURE__ */ dl(), l = /* @__PURE__ */ ul(), d = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    o.default,
    i.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    l.default
  ];
  return Gt.default = d, Gt;
}
var an = {}, ut = {}, Ci;
function ha() {
  if (Ci) return ut;
  Ci = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { parentSchema: s, it: a } = i, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(i, c);
    }
  };
  function o(i, s) {
    const { gen: a, schema: c, data: l, keyword: d, it: m } = i;
    m.items = !0;
    const v = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${v} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(m, c)) {
      const y = a.var("valid", (0, e._)`${v} <= ${s.length}`);
      a.if((0, e.not)(y), () => g(y)), i.ok(y);
    }
    function g(y) {
      a.forRange("i", s.length, v, (_) => {
        i.subschema({ keyword: d, dataProp: _, dataPropType: t.Type.Num }, y), m.allErrors || a.if((0, e.not)(y), () => a.break());
      });
    }
  }
  return ut.validateAdditionalItems = o, ut.default = r, ut;
}
var cn = {}, ft = {}, ki;
function ma() {
  if (ki) return ft;
  ki = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateTuple = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(i) {
      const { schema: s, it: a } = i;
      if (Array.isArray(s))
        return o(i, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && i.ok((0, n.validateArray)(i));
    }
  };
  function o(i, s, a = i.schema) {
    const { gen: c, parentSchema: l, data: d, keyword: m, it: v } = i;
    _(l), v.opts.unevaluated && a.length && v.items !== !0 && (v.items = t.mergeEvaluated.items(c, a.length, v.items));
    const g = c.name("valid"), y = c.const("len", (0, e._)`${d}.length`);
    a.forEach((f, $) => {
      (0, t.alwaysValidSchema)(v, f) || (c.if((0, e._)`${y} > ${$}`, () => i.subschema({
        keyword: m,
        schemaProp: $,
        dataProp: $
      }, g)), i.ok(g));
    });
    function _(f) {
      const { opts: $, errSchemaPath: h } = v, C = a.length, S = C === f.minItems && (C === f.maxItems || f[s] === !1);
      if ($.strictTuples && !S) {
        const u = `"${m}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(v, u, $.strictTuples);
      }
    }
  }
  return ft.validateTuple = o, ft.default = r, ft;
}
var Ei;
function pl() {
  if (Ei) return cn;
  Ei = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ma(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return cn.default = t, cn;
}
var ln = {}, xi;
function hl() {
  if (xi) return ln;
  xi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ ha(), i = {
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
  return ln.default = i, ln;
}
var dn = {}, Ai;
function ml() {
  if (Ai) return dn;
  Ai = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: i } }) => i === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${i} valid item(s)`,
      params: ({ params: { min: o, max: i } }) => i === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${i}}`
    },
    code(o) {
      const { gen: i, schema: s, parentSchema: a, data: c, it: l } = o;
      let d, m;
      const { minContains: v, maxContains: g } = a;
      l.opts.next ? (d = v === void 0 ? 1 : v, m = g) : d = 1;
      const y = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: d, max: m }), m === void 0 && d === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (m !== void 0 && d > m) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let C = (0, e._)`${y} >= ${d}`;
        m !== void 0 && (C = (0, e._)`${C} && ${y} <= ${m}`), o.pass(C);
        return;
      }
      l.items = !0;
      const _ = i.name("valid");
      m === void 0 && d === 1 ? $(_, () => i.if(_, () => i.break())) : d === 0 ? (i.let(_, !0), m !== void 0 && i.if((0, e._)`${c}.length > 0`, f)) : (i.let(_, !1), f()), o.result(_, () => o.reset());
      function f() {
        const C = i.name("_valid"), S = i.let("count", 0);
        $(C, () => i.if(C, () => h(S)));
      }
      function $(C, S) {
        i.forRange("i", 0, y, (u) => {
          o.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), S();
        });
      }
      function h(C) {
        i.code((0, e._)`${C}++`), m === void 0 ? i.if((0, e._)`${C} >= ${d}`, () => i.assign(_, !0).break()) : (i.if((0, e._)`${C} > ${m}`, () => i.assign(_, !1).break()), d === 1 ? i.assign(_, !0) : i.if((0, e._)`${C} >= ${d}`, () => i.assign(_, !0)));
      }
    }
  };
  return dn.default = r, dn;
}
var Cr = {}, Pi;
function ao() {
  return Pi || (Pi = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe();
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
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, d] = i(c);
        s(c, l), a(c, d);
      }
    };
    function i({ schema: c }) {
      const l = {}, d = {};
      for (const m in c) {
        if (m === "__proto__")
          continue;
        const v = Array.isArray(c[m]) ? l : d;
        v[m] = c[m];
      }
      return [l, d];
    }
    function s(c, l = c.schema) {
      const { gen: d, data: m, it: v } = c;
      if (Object.keys(l).length === 0)
        return;
      const g = d.let("missing");
      for (const y in l) {
        const _ = l[y];
        if (_.length === 0)
          continue;
        const f = (0, r.propertyInData)(d, m, y, v.opts.ownProperties);
        c.setParams({
          property: y,
          depsCount: _.length,
          deps: _.join(", ")
        }), v.allErrors ? d.if(f, () => {
          for (const $ of _)
            (0, r.checkReportMissingProp)(c, $);
        }) : (d.if((0, t._)`${f} && (${(0, r.checkMissingProp)(c, _, g)})`), (0, r.reportMissingProp)(c, g), d.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: d, data: m, keyword: v, it: g } = c, y = d.name("valid");
      for (const _ in l)
        (0, n.alwaysValidSchema)(g, l[_]) || (d.if(
          (0, r.propertyInData)(d, m, _, g.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: v, schemaProp: _ }, y);
            c.mergeValidEvaluated(f, y);
          },
          () => d.var(y, !0)
          // TODO var
        ), c.ok(y));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Cr)), Cr;
}
var un = {}, Ri;
function gl() {
  if (Ri) return un;
  Ri = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, s))
        return;
      const l = i.name("valid");
      i.forIn("key", a, (d) => {
        o.setParams({ propertyName: d }), o.subschema({
          keyword: "propertyNames",
          data: d,
          dataTypes: ["string"],
          propertyName: d,
          compositeRule: !0
        }, l), i.if((0, e.not)(l), () => {
          o.error(!0), c.allErrors || i.break();
        });
      }), o.ok(l);
    }
  };
  return un.default = r, un;
}
var fn = {}, Ni;
function ga() {
  if (Ni) return fn;
  Ni = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce(), i = {
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
      const { gen: a, schema: c, parentSchema: l, data: d, errsCount: m, it: v } = s;
      if (!m)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: y } = v;
      if (v.props = !0, y.removeAdditional !== "all" && (0, r.alwaysValidSchema)(v, c))
        return;
      const _ = (0, e.allSchemaProperties)(l.properties), f = (0, e.allSchemaProperties)(l.patternProperties);
      $(), s.ok((0, t._)`${m} === ${n.default.errors}`);
      function $() {
        a.forIn("key", d, (p) => {
          !_.length && !f.length ? S(p) : a.if(h(p), () => S(p));
        });
      }
      function h(p) {
        let b;
        if (_.length > 8) {
          const k = (0, r.schemaRefOrVal)(v, l.properties, "properties");
          b = (0, e.isOwnProperty)(a, k, p);
        } else _.length ? b = (0, t.or)(..._.map((k) => (0, t._)`${p} === ${k}`)) : b = t.nil;
        return f.length && (b = (0, t.or)(b, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${p})`))), (0, t.not)(b);
      }
      function C(p) {
        a.code((0, t._)`delete ${d}[${p}]`);
      }
      function S(p) {
        if (y.removeAdditional === "all" || y.removeAdditional && c === !1) {
          C(p);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: p }), s.error(), g || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(v, c)) {
          const b = a.name("valid");
          y.removeAdditional === "failing" ? (u(p, b, !1), a.if((0, t.not)(b), () => {
            s.reset(), C(p);
          })) : (u(p, b), g || a.if((0, t.not)(b), () => a.break()));
        }
      }
      function u(p, b, k) {
        const A = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(A, b);
      }
    }
  };
  return fn.default = i, fn;
}
var pn = {}, Mi;
function yl() {
  if (Mi) return pn;
  Mi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ga(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: d } = i;
      d.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(d, r.default, "additionalProperties"));
      const m = (0, t.allSchemaProperties)(a);
      for (const f of m)
        d.definedProperties.add(f);
      d.opts.unevaluated && m.length && d.props !== !0 && (d.props = n.mergeEvaluated.props(s, (0, n.toHash)(m), d.props));
      const v = m.filter((f) => !(0, n.alwaysValidSchema)(d, a[f]));
      if (v.length === 0)
        return;
      const g = s.name("valid");
      for (const f of v)
        y(f) ? _(f) : (s.if((0, t.propertyInData)(s, l, f, d.opts.ownProperties)), _(f), d.allErrors || s.else().var(g, !0), s.endIf()), i.it.definedProperties.add(f), i.ok(g);
      function y(f) {
        return d.opts.useDefaults && !d.compositeRule && a[f].default !== void 0;
      }
      function _(f) {
        i.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, g);
      }
    }
  };
  return pn.default = o, pn;
}
var hn = {}, Ti;
function $l() {
  if (Ti) return hn;
  Ti = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: d } = i, { opts: m } = d, v = (0, e.allSchemaProperties)(a), g = v.filter((S) => (0, n.alwaysValidSchema)(d, a[S]));
      if (v.length === 0 || g.length === v.length && (!d.opts.unevaluated || d.props === !0))
        return;
      const y = m.strictSchema && !m.allowMatchingProperties && l.properties, _ = s.name("valid");
      d.props !== !0 && !(d.props instanceof t.Name) && (d.props = (0, r.evaluatedPropsToName)(s, d.props));
      const { props: f } = d;
      $();
      function $() {
        for (const S of v)
          y && h(S), d.allErrors ? C(S) : (s.var(_, !0), C(S), s.if(_));
      }
      function h(S) {
        for (const u in y)
          new RegExp(S).test(u) && (0, n.checkStrictMode)(d, `property ${u} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function C(S) {
        s.forIn("key", c, (u) => {
          s.if((0, t._)`${(0, e.usePattern)(i, S)}.test(${u})`, () => {
            const p = g.includes(S);
            p || i.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: u,
              dataPropType: r.Type.Str
            }, _), d.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${u}]`, !0) : !p && !d.allErrors && s.if((0, t.not)(_), () => s.break());
          });
        });
      }
    }
  };
  return hn.default = o, hn;
}
var mn = {}, Oi;
function vl() {
  if (Oi) return mn;
  Oi = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: o, it: i } = n;
      if ((0, e.alwaysValidSchema)(i, o)) {
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
  return mn.default = t, mn;
}
var gn = {}, Fi;
function bl() {
  if (Fi) return gn;
  Fi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return gn.default = t, gn;
}
var yn = {}, zi;
function wl() {
  if (zi) return yn;
  zi = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: i, schema: s, parentSchema: a, it: c } = o;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const l = s, d = i.let("valid", !1), m = i.let("passing", null), v = i.name("_valid");
      o.setParams({ passing: m }), i.block(g), o.result(d, () => o.reset(), () => o.error(!0));
      function g() {
        l.forEach((y, _) => {
          let f;
          (0, t.alwaysValidSchema)(c, y) ? i.var(v, !0) : f = o.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, v), _ > 0 && i.if((0, e._)`${v} && ${d}`).assign(d, !1).assign(m, (0, e._)`[${m}, ${_}]`).else(), i.if(v, () => {
            i.assign(d, !0), i.assign(m, _), f && o.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return yn.default = r, yn;
}
var $n = {}, Ii;
function _l() {
  if (Ii) return $n;
  Ii = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: o, it: i } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      o.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(i, a))
          return;
        const l = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(l);
      });
    }
  };
  return $n.default = t, $n;
}
var vn = {}, ji;
function Sl() {
  if (ji) return vn;
  ji = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: i }) => (0, e.str)`must match "${i.ifClause}" schema`,
      params: ({ params: i }) => (0, e._)`{failingKeyword: ${i.ifClause}}`
    },
    code(i) {
      const { gen: s, parentSchema: a, it: c } = i;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const l = o(c, "then"), d = o(c, "else");
      if (!l && !d)
        return;
      const m = s.let("valid", !0), v = s.name("_valid");
      if (g(), i.reset(), l && d) {
        const _ = s.let("ifClause");
        i.setParams({ ifClause: _ }), s.if(v, y("then", _), y("else", _));
      } else l ? s.if(v, y("then")) : s.if((0, e.not)(v), y("else"));
      i.pass(m, () => i.error(!0));
      function g() {
        const _ = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, v);
        i.mergeEvaluated(_);
      }
      function y(_, f) {
        return () => {
          const $ = i.subschema({ keyword: _ }, v);
          s.assign(m, v), i.mergeValidEvaluated($, m), f ? s.assign(f, (0, e._)`${_}`) : i.setParams({ ifClause: _ });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return vn.default = r, vn;
}
var bn = {}, Di;
function Cl() {
  if (Di) return bn;
  Di = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return bn.default = t, bn;
}
var Li;
function kl() {
  if (Li) return an;
  Li = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ha(), t = /* @__PURE__ */ pl(), n = /* @__PURE__ */ ma(), r = /* @__PURE__ */ hl(), o = /* @__PURE__ */ ml(), i = /* @__PURE__ */ ao(), s = /* @__PURE__ */ gl(), a = /* @__PURE__ */ ga(), c = /* @__PURE__ */ yl(), l = /* @__PURE__ */ $l(), d = /* @__PURE__ */ vl(), m = /* @__PURE__ */ bl(), v = /* @__PURE__ */ wl(), g = /* @__PURE__ */ _l(), y = /* @__PURE__ */ Sl(), _ = /* @__PURE__ */ Cl();
  function f($ = !1) {
    const h = [
      // any
      d.default,
      m.default,
      v.default,
      g.default,
      y.default,
      _.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      l.default
    ];
    return $ ? h.push(t.default, r.default) : h.push(e.default, n.default), h.push(o.default), h;
  }
  return an.default = f, an;
}
var wn = {}, pt = {}, qi;
function ya() {
  if (qi) return pt;
  qi = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ io(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: l, it: d } = a;
    d.schemaEnv.root.dynamicAnchors[c] = !0;
    const m = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, v = d.errSchemaPath === "#" ? d.validateName : s(a);
    l.if((0, e._)`!${m}`, () => l.assign(m, v));
  }
  pt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: l, self: d } = a.it, { root: m, baseId: v, localRefs: g, meta: y } = c.root, { schemaId: _ } = d.opts, f = new n.SchemaEnv({ schema: l, schemaId: _, root: m, baseId: v, localRefs: g, meta: y });
    return n.compileSchema.call(d, f), (0, r.getValidate)(a, f);
  }
  return pt.default = o, pt;
}
var ht = {}, Vi;
function $a() {
  if (Vi) return ht;
  Vi = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ io(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: c, it: l } = i;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const d = s.slice(1);
    if (l.allErrors)
      m();
    else {
      const g = a.let("valid", !1);
      m(g), i.ok(g);
    }
    function m(g) {
      if (l.schemaEnv.root.dynamicAnchors[d]) {
        const y = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`);
        a.if(y, v(y, g), v(l.validateName, g));
      } else
        v(l.validateName, g)();
    }
    function v(g, y) {
      return y ? () => a.block(() => {
        (0, n.callRef)(i, g), a.let(y, !0);
      }) : () => (0, n.callRef)(i, g);
    }
  }
  return ht.dynamicRef = o, ht.default = r, ht;
}
var _n = {}, Bi;
function El() {
  if (Bi) return _n;
  Bi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ya(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return _n.default = n, _n;
}
var Sn = {}, Ui;
function xl() {
  if (Ui) return Sn;
  Ui = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $a(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Sn.default = t, Sn;
}
var Hi;
function Al() {
  if (Hi) return wn;
  Hi = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ya(), t = /* @__PURE__ */ $a(), n = /* @__PURE__ */ El(), r = /* @__PURE__ */ xl(), o = [e.default, t.default, n.default, r.default];
  return wn.default = o, wn;
}
var Cn = {}, kn = {}, Ki;
function Pl() {
  if (Ki) return kn;
  Ki = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ao(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return kn.default = t, kn;
}
var En = {}, Gi;
function Rl() {
  if (Gi) return En;
  Gi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ao(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return En.default = t, En;
}
var xn = {}, Wi;
function Nl() {
  if (Wi) return xn;
  Wi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return xn.default = t, xn;
}
var Ji;
function Ml() {
  if (Ji) return Cn;
  Ji = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pl(), t = /* @__PURE__ */ Rl(), n = /* @__PURE__ */ Nl(), r = [e.default, t.default, n.default];
  return Cn.default = r, Cn;
}
var An = {}, Pn = {}, Yi;
function Tl() {
  if (Yi) return Pn;
  Yi = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: s, schema: a, data: c, errsCount: l, it: d } = i;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: m, props: v } = d;
      v instanceof e.Name ? s.if((0, e._)`${v} !== true`, () => s.forIn("key", c, (f) => s.if(y(v, f), () => g(f)))) : v !== !0 && s.forIn("key", c, (f) => v === void 0 ? g(f) : s.if(_(v, f), () => g(f))), d.props = !0, i.ok((0, e._)`${l} === ${n.default.errors}`);
      function g(f) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: f }), i.error(), m || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(d, a)) {
          const $ = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, $), m || s.if((0, e.not)($), () => s.break());
        }
      }
      function y(f, $) {
        return (0, e._)`!${f} || !${f}[${$}]`;
      }
      function _(f, $) {
        const h = [];
        for (const C in f)
          f[C] === !0 && h.push((0, e._)`${$} !== ${C}`);
        return (0, e.and)(...h);
      }
    }
  };
  return Pn.default = o, Pn;
}
var Rn = {}, Xi;
function Ol() {
  if (Xi) return Rn;
  Xi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: c } = o, l = c.items || 0;
      if (l === !0)
        return;
      const d = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: l }), o.fail((0, e._)`${d} > ${l}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const v = i.var("valid", (0, e._)`${d} <= ${l}`);
        i.if((0, e.not)(v), () => m(v, l)), o.ok(v);
      }
      c.items = !0;
      function m(v, g) {
        i.forRange("i", g, d, (y) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: y, dataPropType: t.Type.Num }, v), c.allErrors || i.if((0, e.not)(v), () => i.break());
        });
      }
    }
  };
  return Rn.default = r, Rn;
}
var Zi;
function Fl() {
  if (Zi) return An;
  Zi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tl(), t = /* @__PURE__ */ Ol(), n = [e.default, t.default];
  return An.default = n, An;
}
var Nn = {}, Mn = {}, Qi;
function zl() {
  if (Qi) return Mn;
  Qi = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: i, data: s, $data: a, schema: c, schemaCode: l, it: d } = r, { opts: m, errSchemaPath: v, schemaEnv: g, self: y } = d;
      if (!m.validateFormats)
        return;
      a ? _() : f();
      function _() {
        const $ = i.scopeValue("formats", {
          ref: y.formats,
          code: m.code.formats
        }), h = i.const("fDef", (0, e._)`${$}[${l}]`), C = i.let("fType"), S = i.let("format");
        i.if((0, e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => i.assign(C, (0, e._)`${h}.type || "string"`).assign(S, (0, e._)`${h}.validate`), () => i.assign(C, (0, e._)`"string"`).assign(S, h)), r.fail$data((0, e.or)(u(), p()));
        function u() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${S}`;
        }
        function p() {
          const b = g.$async ? (0, e._)`(${h}.async ? await ${S}(${s}) : ${S}(${s}))` : (0, e._)`${S}(${s})`, k = (0, e._)`(typeof ${S} == "function" ? ${b} : ${S}.test(${s}))`;
          return (0, e._)`${S} && ${S} !== true && ${C} === ${o} && !${k}`;
        }
      }
      function f() {
        const $ = y.formats[c];
        if (!$) {
          u();
          return;
        }
        if ($ === !0)
          return;
        const [h, C, S] = p($);
        h === o && r.pass(b());
        function u() {
          if (m.strictSchema === !1) {
            y.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${c}" ignored in schema at path "${v}"`;
          }
        }
        function p(k) {
          const A = k instanceof RegExp ? (0, e.regexpCode)(k) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(c)}` : void 0, x = i.scopeValue("formats", { key: c, ref: k, code: A });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${x}.validate`] : ["string", k, x];
        }
        function b() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!g.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return Mn.default = n, Mn;
}
var es;
function Il() {
  if (es) return Nn;
  es = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ zl()).default];
  return Nn.default = t, Nn;
}
var rt = {}, ts;
function jl() {
  return ts || (ts = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.contentVocabulary = rt.metadataVocabulary = void 0, rt.metadataVocabulary = [
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
var ns;
function Dl() {
  if (ns) return Ut;
  ns = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ el(), t = /* @__PURE__ */ fl(), n = /* @__PURE__ */ kl(), r = /* @__PURE__ */ Al(), o = /* @__PURE__ */ Ml(), i = /* @__PURE__ */ Fl(), s = /* @__PURE__ */ Il(), a = /* @__PURE__ */ jl(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    o.default,
    i.default
  ];
  return Ut.default = c, Ut;
}
var Tn = {}, At = {}, rs;
function Ll() {
  if (rs) return At;
  rs = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (At.DiscrError = e = {})), At;
}
var os;
function ql() {
  if (os) return Tn;
  os = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Ll(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ tr(), o = /* @__PURE__ */ ce(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: d, parentSchema: m, it: v } = a, { oneOf: g } = m;
      if (!v.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const y = d.propertyName;
      if (typeof y != "string")
        throw new Error("discriminator: requires propertyName");
      if (d.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = c.let("valid", !1), f = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(y)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: y })), a.ok(_);
      function $() {
        const S = C();
        c.if(!1);
        for (const u in S)
          c.elseIf((0, e._)`${f} === ${u}`), c.assign(_, h(S[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: y }), c.endIf();
      }
      function h(S) {
        const u = c.name("valid"), p = a.subschema({ keyword: "oneOf", schemaProp: S }, u);
        return a.mergeEvaluated(p, e.Name), u;
      }
      function C() {
        var S;
        const u = {}, p = k(m);
        let b = !0;
        for (let M = 0; M < g.length; M++) {
          let P = g[M];
          if (P?.$ref && !(0, o.schemaHasRulesButRef)(P, v.self.RULES)) {
            const z = P.$ref;
            if (P = n.resolveRef.call(v.self, v.schemaEnv.root, v.baseId, z), P instanceof n.SchemaEnv && (P = P.schema), P === void 0)
              throw new r.default(v.opts.uriResolver, v.baseId, z);
          }
          const D = (S = P?.properties) === null || S === void 0 ? void 0 : S[y];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
          b = b && (p || k(P)), A(D, M);
        }
        if (!b)
          throw new Error(`discriminator: "${y}" must be required`);
        return u;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(y);
        }
        function A(M, P) {
          if (M.const)
            x(M.const, P);
          else if (M.enum)
            for (const D of M.enum)
              x(D, P);
          else
            throw new Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
        }
        function x(M, P) {
          if (typeof M != "string" || M in u)
            throw new Error(`discriminator: "${y}" values must be unique strings`);
          u[M] = P;
        }
      }
    }
  };
  return Tn.default = s, Tn;
}
var On = {};
const Vl = "https://json-schema.org/draft/2020-12/schema", Bl = "https://json-schema.org/draft/2020-12/schema", Ul = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Hl = "meta", Kl = "Core and Validation specifications meta-schema", Gl = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Wl = ["object", "boolean"], Jl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Yl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Xl = {
  $schema: Vl,
  $id: Bl,
  $vocabulary: Ul,
  $dynamicAnchor: Hl,
  title: Kl,
  allOf: Gl,
  type: Wl,
  $comment: Jl,
  properties: Yl
}, Zl = "https://json-schema.org/draft/2020-12/schema", Ql = "https://json-schema.org/draft/2020-12/meta/applicator", ed = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, td = "meta", nd = "Applicator vocabulary meta-schema", rd = ["object", "boolean"], od = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, id = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, sd = {
  $schema: Zl,
  $id: Ql,
  $vocabulary: ed,
  $dynamicAnchor: td,
  title: nd,
  type: rd,
  properties: od,
  $defs: id
}, ad = "https://json-schema.org/draft/2020-12/schema", cd = "https://json-schema.org/draft/2020-12/meta/unevaluated", ld = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, dd = "meta", ud = "Unevaluated applicator vocabulary meta-schema", fd = ["object", "boolean"], pd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, hd = {
  $schema: ad,
  $id: cd,
  $vocabulary: ld,
  $dynamicAnchor: dd,
  title: ud,
  type: fd,
  properties: pd
}, md = "https://json-schema.org/draft/2020-12/schema", gd = "https://json-schema.org/draft/2020-12/meta/content", yd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, $d = "meta", vd = "Content vocabulary meta-schema", bd = ["object", "boolean"], wd = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, _d = {
  $schema: md,
  $id: gd,
  $vocabulary: yd,
  $dynamicAnchor: $d,
  title: vd,
  type: bd,
  properties: wd
}, Sd = "https://json-schema.org/draft/2020-12/schema", Cd = "https://json-schema.org/draft/2020-12/meta/core", kd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Ed = "meta", xd = "Core vocabulary meta-schema", Ad = ["object", "boolean"], Pd = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Rd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Nd = {
  $schema: Sd,
  $id: Cd,
  $vocabulary: kd,
  $dynamicAnchor: Ed,
  title: xd,
  type: Ad,
  properties: Pd,
  $defs: Rd
}, Md = "https://json-schema.org/draft/2020-12/schema", Td = "https://json-schema.org/draft/2020-12/meta/format-annotation", Od = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Fd = "meta", zd = "Format vocabulary meta-schema for annotation results", Id = ["object", "boolean"], jd = { format: { type: "string" } }, Dd = {
  $schema: Md,
  $id: Td,
  $vocabulary: Od,
  $dynamicAnchor: Fd,
  title: zd,
  type: Id,
  properties: jd
}, Ld = "https://json-schema.org/draft/2020-12/schema", qd = "https://json-schema.org/draft/2020-12/meta/meta-data", Vd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Bd = "meta", Ud = "Meta-data vocabulary meta-schema", Hd = ["object", "boolean"], Kd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Gd = {
  $schema: Ld,
  $id: qd,
  $vocabulary: Vd,
  $dynamicAnchor: Bd,
  title: Ud,
  type: Hd,
  properties: Kd
}, Wd = "https://json-schema.org/draft/2020-12/schema", Jd = "https://json-schema.org/draft/2020-12/meta/validation", Yd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Xd = "meta", Zd = "Validation vocabulary meta-schema", Qd = ["object", "boolean"], eu = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, tu = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, nu = {
  $schema: Wd,
  $id: Jd,
  $vocabulary: Yd,
  $dynamicAnchor: Xd,
  title: Zd,
  type: Qd,
  properties: eu,
  $defs: tu
};
var is;
function ru() {
  if (is) return On;
  is = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = Xl, t = sd, n = hd, r = _d, o = Nd, i = Dd, s = Gd, a = nu, c = ["/properties"];
  function l(d) {
    return [
      e,
      t,
      n,
      r,
      o,
      m(this, i),
      s,
      m(this, a)
    ].forEach((v) => this.addMetaSchema(v, void 0, !1)), this;
    function m(v, g) {
      return d ? v.$dataMetaSchema(g, c) : g;
    }
  }
  return On.default = l, On;
}
var ss;
function ou() {
  return ss || (ss = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Zc(), r = /* @__PURE__ */ Dl(), o = /* @__PURE__ */ ql(), i = /* @__PURE__ */ ru(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(g = {}) {
        super({
          ...g,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((g) => this.addVocabulary(g)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: g, meta: y } = this.opts;
        y && (i.default.call(this, g), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ er();
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
    var d = /* @__PURE__ */ oo();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return d.default;
    } });
    var m = /* @__PURE__ */ tr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(Dt, Dt.exports)), Dt.exports;
}
var iu = /* @__PURE__ */ ou();
const su = /* @__PURE__ */ zc(iu), au = "https://json-schema.org/draft/2020-12/schema", cu = "https://raw.githubusercontent.com/omsf-eco-infra/alchemy-viz/main/schema/alchemy-viz.schema.json", lu = "alchemy-viz payload", du = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", uu = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], fu = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), co = {
  $schema: au,
  $id: cu,
  title: lu,
  description: du,
  oneOf: uu,
  $defs: fu
}, ym = [
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
], lo = co.$id, uo = new su({ allErrors: !0, strict: !1 });
uo.addSchema(co, lo);
const as = uo.getSchema(lo), pu = Object.entries(co.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), va = /* @__PURE__ */ new Map();
for (const e of pu) {
  const t = uo.getSchema(`${lo}#/$defs/${e}`);
  t && va.set(e, t);
}
const cs = { valid: !0, issues: [] };
function ls(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function hu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? va.get(t) : void 0;
  return n ? n(e) ? cs : { valid: !1, issues: ls(n.errors) } : as(e) ? cs : { valid: !1, issues: ls(as.errors) };
}
function mu(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const fo = {
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
function gu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like an alchemy-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!fo[t]) return yu(t);
  const { valid: n, issues: r } = hu(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the alchemy-viz schema.`,
    detail: mu(r)
  };
}
function yu(e) {
  const t = Object.keys(fo).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class $u extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Oc("payload", n, this);
    const r = gu(n);
    if (r)
      return t.appendChild(vu(r, n)), {};
    const o = n.type, i = fo[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function vu(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(pe(e.message));
  const r = (i, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${j.warnBg};color:${j.warnFg};border:1px solid ${j.warnBorder};` : `background:${j.panelBg};color:${j.textMuted2};border:1px solid ${j.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = bu(t);
  return o && n.appendChild(r(o, !1)), n;
}
function bu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${t.type}`), typeof t.name == "string" && t.name && n.push(`name: ${t.name}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ne("alchemy-view", $u);
function lt(e = "", t) {
  const n = T("button", To.base + e, t);
  return n.className = To.className, n.type = "button", n;
}
function qr(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function po(e, t = eo.className) {
  const n = T("button", e);
  return n.className = t, n.type = "button", n.setAttribute("aria-pressed", "false"), n;
}
function rr(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = T("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), i = e.map((s) => {
    const a = lt("", s.label);
    return a.title = s.title || s.label, a.onclick = () => {
      o.setActive(s.id), r?.set(s.id), n(s.id);
    }, o.appendChild(a), { id: s.id, btn: a };
  });
  return o.setActive = (s) => {
    t = s;
    for (const a of i) qr(a.btn, a.id === t);
  }, o.setActive(t), o;
}
const wu = parseFloat(Z.xl) * 2;
function ba(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const m = o.get();
    e.some((v) => v.id === m) && (t = m);
  }
  const i = T("div", "display:flex;min-width:0;"), s = (m) => {
    i.setActive(m), o?.set(m), n(m);
  }, a = rr(e, t, s), c = It(e, t, s);
  c.style.display = "none", i.appendChild(a), i.appendChild(c), i.buttons = a, i.setActive = (m) => {
    t = m, a.setActive(m), c.value = m;
  };
  let l = !1;
  i.setCompact = (m) => {
    m !== l && (l = m, a.style.display = l ? "none" : "flex", c.style.display = l ? "" : "none", r.onLayout?.(l));
  };
  let d = () => {
  };
  if (r.fit) {
    const { pane: m, bar: v } = r.fit;
    let g = 0;
    d = Xs(m, (y) => {
      l || (g = v.offsetWidth || g), g && i.setCompact(g > y - wu);
    });
  }
  return i.cleanup = () => d(), i;
}
function It(e, t, n, r) {
  const o = T("select", ta);
  for (const s of e) {
    const a = T("option", "", s.label);
    a.value = s.id, o.appendChild(a);
  }
  let i = t;
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (i = s);
  }
  return o.value = i, o.onchange = () => {
    r?.set(o.value), n(o.value);
  }, o;
}
function wa(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = lt("", e);
  return i.title = r.title || e, qr(i, o), i.onclick = () => {
    o = !o, qr(i, o), r.remember?.set(o), n(o);
  }, i;
}
const He = "alchemy-viz:", _t = /* @__PURE__ */ new Map();
let Fn = null;
function _u() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function or() {
  if (Fn === !1) return null;
  const e = _u();
  if (!e)
    return Fn = !1, null;
  try {
    const t = `${He}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Fn = !0, e;
  } catch {
    return Fn = !1, null;
  }
}
function Su(e) {
  const t = or();
  if (!t) return _t.get(He + e) ?? null;
  try {
    return t.getItem(He + e);
  } catch {
    return null;
  }
}
function Cu(e, t) {
  const n = or();
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
function ir(e, t, n) {
  return {
    key: e,
    get() {
      const r = Su(e);
      if (r === null) return t;
      try {
        const o = JSON.parse(r);
        return n(o) ? o : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        Cu(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ct(e, t, n) {
  return ir(e, t, (r) => typeof r == "string" && n.includes(r));
}
function it(e, t) {
  return ir(e, t, (n) => typeof n == "boolean");
}
function jt(e, t, n = -1 / 0, r = 1 / 0) {
  return ir(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Wn(e, t = "") {
  return ir(e, t, (n) => typeof n == "string");
}
function ho() {
  const e = or(), t = e ? Array.from({ length: e.length }, (r, o) => e.key(o)).filter((r) => typeof r == "string") : Array.from(_t.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(He)) continue;
    const o = e ? e.getItem(r) : _t.get(r) ?? null;
    o !== null && n.push([r, o]);
  }
  return n;
}
function ku() {
  const e = {};
  for (const [t, n] of ho()) {
    const r = t.slice(He.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function Eu() {
  return Object.fromEntries(ho());
}
function xu() {
  const e = or();
  if (e)
    for (const [t] of ho())
      try {
        e.removeItem(t);
      } catch {
      }
  _t.clear();
}
const kr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, mo = {
  threeDmol: `https://unpkg.com/3dmol@${kr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${kr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${kr.d3}/+esm`
};
function go(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function _a(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let Qe = null, mt = null;
function sr() {
  if (mt) return mt;
  const e = go("threeDmol");
  return e ? (mt = e.then((t) => Qe = t || window.$3Dmol), mt) : (mt = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await _a(mo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), mt);
}
let gt = null;
function yo() {
  if (gt) return gt;
  const e = go("rdkit");
  return e ? (gt = e.then((t) => window.RDKit = t), gt) : (gt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await _a(mo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), gt);
}
let Au = null;
function Sa() {
  return Au ??= yo().catch((e) => (console.warn("[alchemy-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Er = null;
function Pu() {
  if (!Er) {
    const e = mo.d3;
    Er = go("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Er;
}
function $o(e) {
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
function Ca(e, t) {
  let n = !1, r = !1;
  const o = () => {
    n = !0;
  }, i = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Mu(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function Ru(e) {
  const t = (o) => o.preventDefault(), n = (o) => {
    o.touches?.length > 1 && o.preventDefault();
  }, r = ["gesturestart", "gesturechange", "gestureend"];
  for (const o of r) e.addEventListener(o, t, { passive: !1 });
  return e.addEventListener("touchmove", n, { passive: !1 }), {
    cleanup() {
      for (const o of r) e.removeEventListener(o, t);
      e.removeEventListener("touchmove", n);
    }
  };
}
const Nu = 1600;
function Mu(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Nu);
}
const Tu = { min: 0.25, max: 12 }, Ou = 150;
function ds(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Ou) - t;
}
function Fu(e, t = Tu) {
  const n = ds(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = ds(e);
    return Number.isFinite(s) && s > 0 ? n / s : o;
  };
  return {
    zoomBy(s) {
      const a = i(), c = Math.min(t.max, Math.max(t.min, a * s)), l = c / a;
      return !Number.isFinite(l) || Math.abs(l - 1) < 1e-9 ? !1 : (o = c, e.zoom(l), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: i
  };
}
const zu = 2e-3;
function ka(e) {
  return Math.exp(-e.deltaY * zu);
}
function ar(e, t, n = {}) {
  const r = Fu(t, n.bounds), o = Ca(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(ka(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function vo(e, t = "Reset view") {
  const n = lt("", "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let wt = null;
function Iu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function Ea(e, t) {
  if (!e) return;
  const n = Iu(e);
  if (!n) return;
  const r = t?.level();
  wt = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : wt?.zoom ?? 1
  };
}
function xa(e, t) {
  if (!wt || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ...wt.rotation]), t && Math.abs(wt.zoom - 1) > 1e-9 && t.zoomBy(wt.zoom), e.render(), !0);
}
const xr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, ju = [
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
], B = [0, 0, 0], Du = {
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
  118: B
}, q = [0.9, 0.9, 0.9], Lu = {
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
}, qu = {
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
}, Vu = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
function cr() {
  return Zr() === "dark";
}
function Aa() {
  return Ue[cr() ? "dark" : "light"].canvas2DBg;
}
function Vr() {
  return Ue[cr() ? "dark" : "light"].netDepictBg;
}
function Bu() {
  return Ue[cr() ? "dark" : "light"].netDepictCaption;
}
function lr(e) {
  return cr() ? {
    ...Vu,
    atomColourPalette: e === "mono" ? qu : Lu
  } : e === "mono" ? { atomColourPalette: Du } : {};
}
const Uu = "rdkit", Hu = !0, Ku = !0, Gu = !0, Wu = !0, Ju = "rdkit", Yu = "filled", Xu = 0.42, Zu = 1.5, Qu = !0, ef = "show", tf = "mono", nf = 0.51, rf = 0.74, of = 1.6, sf = 1.7, af = 5, cf = 0.3, lf = "#d62828", df = "#d62828", uf = "#015ab5", ff = !1, pf = "", hf = "#7c3aed", mf = {
  layout: Uu,
  alignPair: Hu,
  atomNumbers: Ku,
  createdDestroyed: Gu,
  modified: Wu,
  style: Ju,
  circles: Yu,
  circleRadius: Xu,
  circleStroke: Zu,
  boundary: Qu,
  hydrogens: ef,
  elementColors: tf,
  numScale: nf,
  labelScale: rf,
  bondWidth: of,
  markWidth: sf,
  haloWidth: af,
  haloOpacity: cf,
  destroyedColor: lf,
  createdColor: df,
  modifiedColor: uf,
  stereo: ff,
  customSpec: pf,
  customColor: hf
}, gf = {
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: xr.uniqueAtom,
  createdColor: xr.uniqueAtom,
  modifiedColor: xr.elementChange,
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
}, yf = ["rdkit", "coordgen", "conformer"], $f = ["rdkit", "recolor", "halo"], vf = ["outline", "filled", "off"], bf = ["show", "dim", "hide"], wf = ["cpk", "mono"], _f = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Sf = /^#[0-9a-fA-F]{6}$/;
function Pt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function We(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = _f[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const yt = (e, t) => typeof e == "boolean" ? e : t, zn = (e, t) => typeof e == "string" && Sf.test(e) ? e : t;
function Cf(e) {
  const t = e && typeof e == "object" ? e : {}, n = gf;
  return {
    version: 1,
    layout: Pt(t.layout, yf, n.layout),
    alignPair: yt(t.alignPair, n.alignPair),
    style: Pt(t.style, $f, n.style),
    createdDestroyed: yt(t.createdDestroyed, n.createdDestroyed),
    modified: yt(t.modified, n.modified),
    destroyedColor: zn(t.destroyedColor, n.destroyedColor),
    createdColor: zn(t.createdColor, n.createdColor),
    modifiedColor: zn(t.modifiedColor, n.modifiedColor),
    boundary: yt(t.boundary, n.boundary),
    circles: Pt(t.circles, vf, n.circles),
    circleRadius: We(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: We(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Pt(t.hydrogens, bf, n.hydrogens),
    elementColors: Pt(t.elementColors, wf, n.elementColors),
    atomNumbers: yt(t.atomNumbers, n.atomNumbers),
    stereo: yt(t.stereo, n.stereo),
    numScale: We(t.numScale, "numScale", n.numScale),
    labelScale: We(t.labelScale, "labelScale", n.labelScale),
    bondWidth: We(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: We(t.markWidth, "markWidth", n.markWidth),
    haloWidth: We(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: We(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: zn(t.customColor, n.customColor)
  };
}
const Ae = Cf(mf);
function kf(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (d) => {
      s !== "right" && t.add(d), s !== "left" && n.add(d);
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
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function us(e) {
  return `0x${e.replace("#", "")}`;
}
function Br(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Ef(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function xf(e, t, n) {
  const r = new Set(t.atoms), o = new Set(Ar(e, r, !0));
  return {
    deletions: Ar(e, r, n),
    changes: Ar(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function Pa(e, t, n, r) {
  const o = xf(t, n, e.boundary), i = [];
  return e.createdDestroyed && n.atoms.length && i.push({
    atoms: new Set(n.atoms),
    bonds: o.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && i.push({
    atoms: new Set(n.elements),
    bonds: o.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), i;
}
let $t = null;
function Af(e) {
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
  return $t || console.warn("[alchemy-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), $t;
}
function Pf(e, t) {
  return e.style === "rdkit" ? "rdkit" : Af(t) ? e.style : "rdkit";
}
function Rf(e, t, n, r, o, i) {
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
  Object.assign(s, lr(e.elementColors)), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, l = {};
  for (const g of n) {
    const y = Br(g.color);
    if (o === "rdkit") for (const f of g.bonds) l[f] = y;
    if (o === "recolor" && e.circles === "off") continue;
    const _ = o === "recolor" && e.circles === "filled" ? Ef(y, 0.7) : y;
    for (const f of g.atoms)
      a[f] = _, c[f] = e.circleRadius;
  }
  const d = Br(e.customColor);
  for (const g of r)
    g < i && (a[g] = d, c[g] = e.circleRadius);
  const m = Object.keys(a).map(Number);
  m.length && (s.atoms = m, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const v = Object.keys(l).map(Number);
  return v.length && (s.bonds = v, s.highlightBondColors = l), s;
}
function Nf(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (i) {
    return console.warn("[alchemy-viz] depictStyledSVG threw -", he(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const Mf = "http://www.w3.org/2000/svg";
function Ra(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function bo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function Na(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function fs(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of Ra(e, s)) {
      const c = a.style;
      Na(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of bo(e, s, !1)) a.style.fill = i;
}
function Tf(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(Mf, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of Ra(e, a)) {
      if (Na(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", i.appendChild(l);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function Of(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of bo(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Ff(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of bo(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function zf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function If(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        fs(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Of(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && Ff(e, n, s.atoms, o, s.color);
      } else
        Tf(e, n, s.bonds, s.color), fs(e, n, s.atoms, s.bonds, s.color, null);
  zf(e, t, n);
}
const dr = `
`, Ur = "$$$$";
function Hr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(dr);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let d = 0; d < o; d++) {
    const m = n[4 + d];
    if (m == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(m.substring(0, 10)) || 0,
      parseFloat(m.substring(10, 20)) || 0,
      parseFloat(m.substring(20, 30)) || 0
    ]), a.push(m.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let d = 0; d < (isFinite(i) ? i : 0); d++) {
    const m = n[4 + o + d];
    if (m == null) break;
    const v = parseInt(m.substring(0, 3), 10), g = parseInt(m.substring(3, 6), 10), y = parseInt(m.substring(6, 9), 10);
    !isFinite(v) || !isFinite(g) || c.push([v - 1, g - 1, isFinite(y) ? y : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function jf(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let o = 0; o < t; o++) {
    const i = e.coords[o];
    r.push(
      i[0].toFixed(4).padStart(10) + i[1].toFixed(4).padStart(10) + i[2].toFixed(4).padStart(10) + ` ${e.symbols[o].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let o = 0; o < n; o++) {
    const i = e.bonds[o], s = i[2] === 12 ? 4 : i[2];
    r.push(
      String(i[0] + 1).padStart(3) + String(i[1] + 1).padStart(3) + String(s).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(dr);
}
const Df = (e) => `${jf(e)}${dr}${Ur}`, Ma = (e) => e.indexOf(Ur) >= 0 ? e : `${e}${dr}${Ur}`;
function wo(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function _o(e, t, n, r, o, i) {
  let s = null;
  try {
    if (s = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !s) return null;
    if (r !== "conformer")
      try {
        s.set_new_coords(r === "coordgen");
      } catch {
      }
    const a = o?.atoms.length ? o : null, c = !!i && Object.keys(i).length > 0;
    if ((a || c) && s.get_svg_with_highlights) {
      const l = { width: n, height: n, ...i };
      if (a) {
        const d = {}, m = {};
        for (const v of a.atoms)
          d[v] = a.color, m[v] = a.radius;
        l.atoms = [...a.atoms], l.highlightAtomColors = d, l.highlightAtomRadii = m;
      }
      return s.get_svg_with_highlights(JSON.stringify(l)) || null;
    }
    return s.get_svg(n, n) || null;
  } catch (a) {
    return console.warn("[alchemy-viz] depictSVG threw -", he(a)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function Ta(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ps = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Kr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, vt = (e) => e in Kr, hs = 400, Pr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Lf extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${Pr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Aa()};`
    );
    a.appendChild(c);
    const l = aa();
    l.wrap.style.cssText = Pr, a.appendChild(l.wrap);
    const d = T(
      "div",
      `${Pr}overflow:auto;padding:16px 20px;background:${j.panelBg};color:${j.textPrimary};font-size:${Y.body};`
    );
    a.appendChild(d);
    const m = r ? wo(r) : null, v = [
      ["Name", o || Je, !1],
      ["SMILES", i || Je, !0],
      ["Charge", s == null ? Je : String(s), !1],
      ["Atoms", m ? String(m.atoms) : Je, !1],
      ["Bonds", m ? String(m.bonds) : Je, !1]
    ], g = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${Z.xl} 20px;align-items:baseline;`);
    d.appendChild(g);
    for (const [P, D, z] of v) {
      g.appendChild(
        T(
          "div",
          `font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${j.textMuted2};`,
          P
        )
      );
      const L = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${j.textPrimary}` + (z ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Y.small};` : ""),
        D
      );
      L.title = D, g.appendChild(L);
    }
    const y = no(t), _ = T("div", Qr, o || "Unnamed molecule");
    y && a.appendChild(_);
    const f = ct(
      "small-molecule.mode",
      "2d",
      ps.map((P) => P.id)
    ), $ = it("small-molecule.spin", !1);
    let h = f.get(), C = $.get(), S = null, u = null;
    const p = () => {
      try {
        S?.spin(C && vt(h) ? "y" : !1);
      } catch {
      }
    }, b = (P) => {
      h = P, c.style.visibility = h === "2d" ? "visible" : "hidden", l.wrap.style.visibility = vt(h) ? "visible" : "hidden", d.style.visibility = h === "info" ? "visible" : "hidden", _.style.display = h === "info" || !y ? "none" : "block", A.disabled = !vt(h), A.style.opacity = vt(h) ? "1" : "0.5", vt(h) && S && (S.setStyle({}, Kr[h]), S.resize(), S.render()), p();
    }, k = T("div", sa), A = wa(
      "Spin",
      C,
      (P) => {
        C = P, p();
      },
      { title: "Toggle continuous rotation", remember: $ }
    ), x = (P) => {
      P ? k.insertBefore(A, k.firstChild) : M.buttons.insertBefore(A, M.buttons.lastElementChild);
    }, M = ba(ps, h, (P) => b(P), {
      remember: f,
      onLayout: x,
      fit: { pane: a, bar: k }
    });
    return k.appendChild(M), x(!1), a.appendChild(k), b(h), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), l.container.appendChild(pe("No molecule provided")), { cleanup: () => M.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), yo().then((P) => {
      const D = lr("cpk"), z = _o(P, r, hs, Ae.layout, void 0, D);
      z ? Ta(c, z, hs) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((P) => {
      c.replaceChildren(pe(`RDKit failed to load: ${he(P)}`, !0));
    }), l.container.appendChild(pe("Loading 3D viewer...")), sr().then(() => {
      l.container.replaceChildren(), S = Qe.createViewer(l.container, { backgroundColor: zt.viewer() }), S.addModel(Ma(r), "sdf"), S.setStyle({}, Kr[vt(h) ? h : "stick"]), S.zoomTo(), S.render(), u = ar(l.container, S), xa(S, u), p();
    }).catch((P) => {
      l.container.replaceChildren(pe(`3D render failed: ${he(P)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        M.cleanup(), Ea(S, u), u?.cleanup(), u = null, $o(S), S = null;
      }
    });
  }
}
Ne("gufe-small-molecule", Lf);
const Oa = ["HOH", "WAT", "SOL", "TIP3"], ms = { hetflag: !1 }, qf = { hetflag: !0 }, Vf = { resn: Oa }, Ie = {
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
function Fa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const l = c.slice(0, 6);
    if (l === "ENDMDL") break;
    if (l !== "ATOM  " && l !== "HETATM") continue;
    r++, l === "HETATM" && o++;
    const d = c.slice(17, 20).trim(), m = c.slice(21, 22).trim() || "_", v = c.slice(22, 26).trim(), g = c.slice(26, 27).trim();
    Oa.indexOf(d) !== -1 && i++, t.add(m), n.add(`${m}|${v}${g}|${d}`);
    const y = parseInt(v, 10);
    isNaN(y) || (y < s && (s = y), y > a && (a = y));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: o,
    waters: i,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function za(e) {
  return [
    `${kt(e.chains)} chains`,
    `${kt(e.residues)} residues`,
    `${kt(e.atoms)} atoms`,
    `${kt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${kt(e.waters)} water)` : "")
  ];
}
function Bf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Gr(e, t, n, r, o, i = () => !0) {
  const s = r || (() => {
  }), a = Bf(t.color, n), c = (l) => o ? { ...l, ...o } : l;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(c({}), {}), e.setStyle(
    c(ms),
    t.rep === "stick" ? { stick: { radius: Ie.stick.radius, ...a } } : t.rep === "sphere" ? { sphere: { scale: Ie.sphere.scale, ...a } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...a } }
    )
  ), e.setStyle(
    c(qf),
    t.hetero ? {
      stick: { radius: Ie.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    c(Vf),
    t.waters ? {
      stick: { radius: Ie.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    s(null), e.render();
    return;
  }
  s(
    n && n.atoms > Ie.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    if (i())
      try {
        Promise.resolve(
          e.addSurface(
            Qe.SurfaceType.VDW,
            { opacity: Ie.surfaceOpacity, ...a },
            c(ms)
          )
        ).then(() => {
          i() && (s(null), e.render());
        }).catch((l) => s(`Surface failed: ${he(l)}`, "error"));
      } catch (l) {
        s(`Surface failed: ${he(l)}`, "error");
      }
  }, 30);
}
function Uf(e, t) {
  e.setStyle(t, {
    stick: { radius: Ie.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Ie.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const gs = { min: 0.2, max: 0.8 }, Ia = 5, Rr = { min: 130, max: 560, maxShare: "60%" };
function ja(e, t, n, r = {}) {
  const o = r.min ?? gs.min, i = r.max ?? gs.max, s = T(
    "div",
    `flex:0 0 ${Ia}px;align-self:stretch;touch-action:none;background:${j.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (y) => {
    a = y, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, l = () => {
    const y = e.getBoundingClientRect();
    return y.height > y.width;
  };
  let d = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const m = () => {
    t.style.flex = `1 1 ${(d * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - d) * 100).toFixed(2)}%`;
  };
  m(), c(l()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const _ = l();
    _ !== a && (c(_), r.onResize?.(d));
  }).observe(e);
  let v = !1;
  s.addEventListener("pointerdown", (y) => {
    v = !0, s.setPointerCapture(y.pointerId), y.preventDefault();
  }), s.addEventListener("pointermove", (y) => {
    if (!v) return;
    const _ = e.getBoundingClientRect(), f = a ? _.height : _.width;
    if (f <= 0) return;
    const $ = a ? y.clientY - _.top : y.clientX - _.left;
    d = Math.min(i, Math.max(o, $ / f)), m();
  });
  const g = (y) => {
    v && (v = !1, s.releasePointerCapture(y.pointerId), r.remember?.set(d), r.onResize?.(d));
  };
  return s.addEventListener("pointerup", g), s.addEventListener("pointercancel", g), s;
}
function Da(e, t) {
  const n = t.min ?? Rr.min, r = t.max ?? Rr.max, o = t.maxShare ?? Rr.maxShare, i = (v) => Math.min(r, Math.max(n, v));
  let s = i(t.remember?.get() ?? t.initial), a = !1;
  const c = T(
    "div",
    `flex:0 0 ${Ia}px;align-self:stretch;touch-action:none;cursor:col-resize;background:${j.splitBorder};`
  );
  c.setAttribute("role", "separator"), c.setAttribute("aria-orientation", "vertical"), c.setAttribute("aria-label", t.label ?? "Resize the panel");
  const l = () => {
    e.style.flex = a ? "0 0 auto" : `0 0 ${Math.round(s)}px`, e.style.maxWidth = a ? "none" : o, c.style.display = a ? "none" : "block";
  };
  l();
  let d = !1;
  c.addEventListener("pointerdown", (v) => {
    a || (d = !0, c.setPointerCapture(v.pointerId), v.preventDefault());
  }), c.addEventListener("pointermove", (v) => {
    d && (s = i(v.clientX - e.getBoundingClientRect().left), l());
  });
  const m = (v) => {
    d && (d = !1, c.releasePointerCapture(v.pointerId), t.remember?.set(Math.round(s)), t.onResize?.());
  };
  return c.addEventListener("pointerup", m), c.addEventListener("pointercancel", m), {
    element: c,
    orient(v) {
      v !== a && (a = v, l());
    }
  };
}
function So(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : Un.min), e.style.setProperty(Xe.max, t ? "none" : Un.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? yc : "";
}
const Hf = !1, Co = ".menuOpen";
function Kf() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Gf = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Kf
}, Wf = Gf.openFreeEnergy;
function ko(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Hf, o = !1;
  const i = T("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = lt(`display:inline-flex;align-items:center;gap:${Z.md};padding:${Z.sm} ${Z.lg};`);
  s.appendChild(Wf()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), n.extras?.(i)), i.style.display = r ? "flex" : "none", s.setAttribute("aria-expanded", String(r));
  }, c = (d) => {
    d !== r && (r = d, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r);
  const l = "toggleEl" in e ? e : null;
  return l && (l.toggleEl.style.marginRight = "2px"), (l ? l.toggleEl : e).appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: c
  };
}
const La = "https://framejs.app", qa = 1e4;
function Jf(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Yf = "/alchemy-dev-bundle.js";
function Xf() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= qa ? e : null;
}
async function Zf() {
  const e = Xf();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Yf);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < qa ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Qf() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function ep(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(He)};`,
    `  const menuOpen = ${JSON.stringify(Co)};`,
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
    `globalThis[${JSON.stringify(ca)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function tp(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...ep(n),
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
function np(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(Eu()))
    o.endsWith(Co) || (r[o] = i);
  return { settings: r, views: t };
}
const rp = (e) => `${La}/j/${e}`, op = (e) => `${La}/j/${e}.json`;
async function ip(e, t, n, r) {
  await fetch(op(e), {
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
function sp() {
  const e = T("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function Eo(e) {
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.md};padding-top:${Z.lg};border-top:1px solid ${j.splitBorder};`
  ), n = lt(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${Z.md};`);
  n.appendChild(sp()), n.appendChild(T("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? j.errorFg : j.textMuted2;
  }, i = (s, a) => {
    const c = T("a", `color:${j.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${Z.sm};`, a)), r.style.color = j.textMuted2;
  };
  n.onclick = () => {
    const s = Jf(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = np(s), l = window.open("", "_blank"), d = Qf(), v = String(a.type || "alchemy-viz"), g = `${v}. Shared from alchemy-viz`, y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), Zf().then((_) => {
      if (!_) {
        l?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return ip(d, tp(_.js, a, c), v, g).then(() => {
        y();
        const f = rp(d);
        l && (l.location.href = f), i(f, _.note);
      });
    }).catch((_) => {
      y(), l?.close(), o(`Upload failed: ${_ instanceof Error ? _.message : String(_)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
const ys = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], $s = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], vs = /* @__PURE__ */ new Map();
function Wr(e) {
  return !Array.isArray(e) || e.length < 4 ? null : e.every((t) => typeof t == "number" && Number.isFinite(t)) ? e.slice() : null;
}
function ap(e) {
  const t = e.tagName.toLowerCase().replace(/^gufe-/, ""), n = la(t);
  return !n || typeof n != "object" ? null : Wr(n.camera);
}
function Va(e) {
  const t = ct(
    "protein.representation",
    e.rep ?? "cartoon",
    ys.map((k) => k.id)
  ), n = ct(
    "protein.color",
    "chain",
    $s.map((k) => k.id)
  ), r = it("protein.waters", e.waters), o = it("protein.hetero", !0), i = it("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = ap(e.element), c = null, l = null, d = !0;
  const m = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(m);
  const v = T("div", wc);
  m.appendChild(v);
  const g = ({ label: k, controls: A }) => {
    const x = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    x.appendChild(
      T(
        "span",
        `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted};`,
        k
      )
    );
    for (const M of A) x.appendChild(M);
    return x;
  }, y = T("div", `display:flex;flex-direction:column;gap:2px;font-size:${Y.small};color:${j.textMuted};`), _ = g({ label: "Contents", controls: [y] });
  _.style.display = "none";
  const $ = ko(v, () => {
    const k = T("div", `${oa}padding-top:${_c};`), A = rr(
      ys,
      s.rep,
      (z) => {
        s.rep = z, e.restyle();
      },
      t
    );
    k.appendChild(g({ label: "Style", controls: [A] }));
    const x = It(
      $s,
      s.color,
      (z) => {
        s.color = z, e.restyle();
      },
      n
    );
    x.style.cssText += "width:100%;box-sizing:border-box;", k.appendChild(g({ label: "Color", controls: [x] }));
    const M = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), P = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => c?.spin(s.spin ? "y" : !1)]
    ];
    for (const [z, L, W, ne, X] of P)
      M.appendChild(
        wa(
          L,
          s[z],
          (re) => {
            s[z] = re, X();
          },
          { title: W, remember: ne }
        )
      );
    k.appendChild(g({ label: "Show", controls: [M] }));
    const D = vo(() => e.reset ? e.reset() : l?.reset());
    return D.style.cssText += "width:100%;box-sizing:border-box;", k.appendChild(g({ label: "Camera", controls: [...e.camera?.() ?? [], D] })), k.appendChild(_), k;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: it(`protein${Co}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      c?.resize(), c?.render();
    },
    extras: Eo
  }), h = no(e.element) ? e.title || e.fallbackTitle : "";
  h && v.appendChild(
    T("div", `${bc}pointer-events:none;font-size:${Y.heading};font-weight:${fe.bold};`, h)
  ), m.appendChild($.panel);
  const C = aa();
  m.appendChild(C.wrap);
  const S = Xr(m, (k) => {
    m.style.flexDirection = k ? "column" : "row", So($.panel, k), c?.resize(), c?.render();
  }), u = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Y.body};z-index:20;display:none;pointer-events:none;`
  );
  C.wrap.appendChild(u);
  const p = (k, A) => {
    if (k == null) {
      u.style.display = "none";
      return;
    }
    u.textContent = k, u.style.display = "block";
    const x = A === "error";
    u.style.background = x ? j.warnBg : j.toolbarBg, u.style.color = x ? j.warnFg : j.textMuted, u.style.border = `1px solid ${x ? j.warnBorder : j.toolbarBorder}`;
  }, b = () => {
    if (!e.cameraKey || !c) return;
    const k = Wr(c.getView?.());
    k && vs.set(e.cameraKey, k);
  };
  return {
    opts: s,
    pane: C,
    menu: $,
    showStatus: p,
    setStats: (k) => {
      y.replaceChildren(...k.map((A) => T("div", "overflow-wrap:anywhere;", A))), _.style.display = k.length ? "" : "none";
    },
    restoreCamera: () => {
      const k = a;
      a = null;
      const A = k ?? (e.cameraKey ? vs.get(e.cameraKey) : void 0);
      return !A || !c ? !1 : (c.setView(A.slice()), c.render(), !0);
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
        const k = Wr(c?.getView?.());
        return k ? { camera: k } : null;
      },
      cleanup() {
        d = !1, S(), b(), l?.cleanup(), l = null, $o(c), c = null;
      }
    }
  };
}
class cp extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Gr(a, s.opts, o, s.showStatus, void 0, s.stillWanted);
    }
    const s = Va({
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
      restyle: i
    });
    if (!r || !r.trim())
      return s.showStatus("No protein data - waiting for a PDB payload."), {};
    try {
      o = Fa(r), s.setStats(za(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${he(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), sr().then(() => {
      const a = Qe.createViewer(s.pane.container, { backgroundColor: zt.viewer() });
      s.setViewer(a), a.addModel(r, "pdb"), Gr(a, s.opts, o, s.showStatus, void 0, s.stillWanted), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(ar(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${he(a)}`, "error");
    }), s.handle;
  }
}
Ne("gufe-protein", cp);
const Ba = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const n = document.createElementNS(Ba, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function bs(e, t) {
  const n = document.createElementNS(Ba, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Ua = 3, lp = 24;
function Ha(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const dp = { min: 0.15, max: 5 }, up = 1e-9;
function Ka(e, t, n) {
  const r = n.margin ?? lp, o = n.zoom ?? dp;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, l = () => {
    const z = e.getBoundingClientRect();
    return {
      width: z.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: z.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, d = (z, L, W) => Math.min(1, L / (z.maxX - z.minX + r * 2), W / (z.maxY - z.minY + r * 2)), m = () => {
    const z = n.bounds();
    if (!z) return o.min;
    const { width: L, height: W } = l();
    return Math.min(o.min, d(z, L, W));
  }, v = (z) => Math.min(o.max, Math.max(m(), i * z)), g = () => {
    i = 1, s = 0, a = 0;
    const z = n.bounds();
    if (!z) {
      c();
      return;
    }
    const { width: L, height: W } = l();
    i = d(z, L, W), s = L / 2 - (z.minX + z.maxX) / 2 * i, a = W / 2 - (z.minY + z.maxY) / 2 * i, c();
  }, _ = Ca(e, {
    onZoom: (z) => {
      const L = e.getBoundingClientRect(), W = z.clientX - L.left, ne = z.clientY - L.top, X = v(ka(z)), re = X / i;
      return s = W - (W - s) * re, a = ne - (ne - a) * re, i = X, c(), Math.abs(re - 1) > up;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), f = /* @__PURE__ */ new Map();
  let $ = null, h = null, C = !1, S = null;
  const u = (z) => ({
    x: z.clientX - s,
    y: z.clientY - a,
    from: { x: z.clientX, y: z.clientY }
  }), p = (z) => {
    z.pointerType === "touch" && f.size > 1 || (h = u(z), C = !1);
  }, b = (z) => {
    $ || (S && z.pointerType === "touch" && (h = { x: S.x - s, y: S.y - a, from: S }, S = null), h && (Math.hypot(z.clientX - h.from.x, z.clientY - h.from.y) > Ua && (C = !0), s = z.clientX - h.x, a = z.clientY - h.y, c()));
  }, k = () => {
    h = null;
  };
  e.addEventListener("pointerdown", p), e.addEventListener("pointermove", b), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("pointerleave", k);
  const A = () => {
    const [z, L] = [...f.values()];
    return { cx: (z.x + L.x) / 2, cy: (z.y + L.y) / 2, span: Math.max(1, Math.hypot(z.x - L.x, z.y - L.y)) };
  }, x = (z) => {
    if (z.pointerType === "touch") {
      if (f.set(z.pointerId, { x: z.clientX, y: z.clientY }), f.size !== 2) {
        $ = null;
        return;
      }
      $ = A(), h = null, C = !0;
    }
  }, M = (z) => {
    if (z.pointerType !== "touch" || !f.has(z.pointerId) || (f.set(z.pointerId, { x: z.clientX, y: z.clientY }), !$ || f.size !== 2)) return;
    z.preventDefault(), z.stopPropagation();
    const L = A(), W = e.getBoundingClientRect(), ne = v(L.span / $.span), X = ne / i;
    s = L.cx - W.left - ($.cx - W.left - s) * X, a = L.cy - W.top - ($.cy - W.top - a) * X, i = ne, $ = L, c();
  }, P = (z) => {
    if (z.pointerType !== "touch") return;
    if (f.delete(z.pointerId), f.size === 2) {
      $ = A();
      return;
    }
    $ = null;
    const [L] = [...f.values()];
    S = f.size === 1 && L ? { ...L } : null;
  };
  e.addEventListener("pointerdown", x, !0), e.addEventListener("pointermove", M, { capture: !0, passive: !1 }), e.addEventListener("pointerup", P, !0), e.addEventListener("pointercancel", P, !0);
  const D = Ru(e);
  return {
    fit: g,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: g,
    centreOn(z, L, W = 1) {
      const { width: ne, height: X } = l();
      i = Math.max(i, W), s = ne / 2 - z * i, a = X / 2 - L * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => f.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(z, L, W) {
      i = z, s = L, a = W, c();
    },
    cleanup() {
      _.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", p), e.removeEventListener("pointermove", b), e.removeEventListener("pointerup", k), e.removeEventListener("pointercancel", k), e.removeEventListener("pointerleave", k), e.removeEventListener("pointerdown", x, !0), e.removeEventListener("pointermove", M, { capture: !0 }), e.removeEventListener("pointerup", P, !0), e.removeEventListener("pointercancel", P, !0);
    }
  };
}
const fp = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Ga(e) {
  const t = { ...e };
  for (const n of fp) delete t[n];
  return t;
}
async function Wa(e) {
  let t;
  try {
    if (t = await Pu(), typeof t?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const n = t.forceSimulation(e.nodes);
  for (const [o, i] of e.forces(t, e.links)) n.force(o, i);
  n.stop();
  const r = Math.ceil(Math.log(n.alphaMin()) / Math.log(1 - n.alphaDecay()));
  for (let o = 0; o < r * e.tickMultiplier; o++) n.tick();
  return !0;
}
function St(e) {
  const t = /* @__PURE__ */ new Map();
  return Jr(e, t, /* @__PURE__ */ new Set()), t;
}
function Jr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Jr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Jr(o, t, n);
}
function Ke(e, t) {
  return t ? e.get(t) : void 0;
}
function Pe(e, t, n) {
  const r = Ke(e, t);
  return r?.type === n ? r : void 0;
}
function xo(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const i = e.get(o);
    i && (r.add(o), n.push(i));
  }
  return n;
}
function et(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Ja(e) {
  const t = [];
  let n = 0;
  for (const s of e.keys) {
    const a = Pe(e.registry, s, e.nodeType);
    if (!a) {
      n++;
      continue;
    }
    t.push({ ...a, x: 0, y: 0 });
  }
  const r = new Map(t.map((s) => [s["gufe-key"], s])), o = [];
  let i = 0;
  for (const s of e.edges) {
    const [a, c] = e.ends(s), l = a === void 0 ? void 0 : r.get(a), d = c === void 0 ? void 0 : r.get(c);
    if (!l || !d) {
      i++;
      continue;
    }
    o.push({ ...s, index: o.length, from: l, to: d });
  }
  return { nodes: t, edges: o, unresolved: n, dangling: i };
}
const pp = 8, hp = 64, mp = () => new Promise((e) => setTimeout(e, 0));
function Yr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function gp(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const i = o.get_substruct_matches(t), s = JSON.parse(i || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const l = c.atoms;
      if (Array.isArray(l))
        for (const d of l) typeof d == "number" && a.add(d);
    }
    return [...a].sort((c, l) => c - l);
  } catch (i) {
    return console.warn("[alchemy-viz] SMARTS match threw -", he(i)), null;
  } finally {
    Yr(o);
  }
}
function Ya(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const l = r.get(a);
    if (l) return { status: "ok", matched: l, unreadable: 0 };
    const d = await e();
    if (c !== o) return { status: "superseded" };
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
      return Yr(m), { status: "unsupported" };
    const v = /* @__PURE__ */ new Map();
    let g = 0;
    try {
      let y = performance.now(), _ = 0;
      for (let f = 0; f < t.length; f++) {
        const $ = t[f] ? gp(d, m, t[f], n) : null;
        if ($ ? $.length && v.set(f, $) : g++, !(++_ < hp && performance.now() - y < pp)) {
          if (await mp(), c !== o) return { status: "superseded" };
          _ = 0, y = performance.now();
        }
      }
    } finally {
      Yr(m);
    }
    return r.set(a, v), { status: "ok", matched: v, unreadable: g };
  }, cancel: () => void ++o };
}
const yp = 250;
function $p(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", na);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;min-height:1.5em;color:${j.textMuted2};`);
  t.appendChild(r);
  const o = (a) => {
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
  }, i = (a) => {
    r.textContent = a.trim() ? "Matching..." : "", e.run(a).then(
      (c) => {
        c.status !== "superseded" && (r.textContent = o(c));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let s = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => {
      n.isConnected && i(n.value);
    }, yp);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const Xa = "Cmd/Ctrl-click to select several.";
function vp(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : et(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function bp(e, t) {
  navigator.clipboard?.writeText(e).catch(() => ws(e, t)), navigator.clipboard || ws(e, t);
}
function ws(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${Y.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function wp(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function _p(e) {
  const { words: t } = e, n = ct(e.setting, "names", ["names", "keys"]), r = T("div", "display:flex;flex-direction:column;gap:6px;"), o = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${j.textMuted};`);
  o.appendChild(T("span", "", "copy as"));
  const i = It(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    n.get(),
    () => {
    },
    n
  );
  i.style.flex = "1", o.appendChild(i), r.appendChild(o);
  const s = T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`), a = (d) => {
    s.textContent = d;
  }, c = T("div", "display:flex;gap:4px;"), l = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [d, m, v] of l) {
    const g = lt("flex:1;", m.button);
    g.title = v, g.onclick = (y) => {
      const _ = i.value, f = vp(e.nodes, e.edges, e.selected, d, _);
      if (!f) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : d === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Xa}` : "Nothing to copy."
        );
        return;
      }
      const $ = f.split(`
`).length;
      y.shiftKey ? (wp(f, `selected-${m.plural}.txt`), a(`Saved ${$} ${m.plural} to a file.`)) : (bp(f, r), a(
        d === "edges" ? `Copied ${$} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(g);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(T("div", `font-size:${Y.tiny};color:${j.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
function Za(e) {
  const t = Wn(`${e.namespace}.query`), n = T("div", oa), r = T("input", na);
  n.appendChild(r);
  const o = $p({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Wn(`${e.namespace}.smarts`),
    run: (d) => e.match(d),
    describe: (d) => e.smarts.describe(d)
  });
  n.appendChild(o.element);
  for (const d of e.filters?.(() => l()) ?? []) n.appendChild(d);
  const i = T("div", `font-size:${Y.small};color:${j.textMuted2};`);
  n.appendChild(i);
  const s = T("div", $c);
  n.appendChild(s), n.appendChild(T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`, Xa));
  const a = _p({
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
    const d = e.nodes.map((m, v) => ({ node: m, index: v })).filter(({ node: m, index: v }) => e.shows(m, v));
    i.textContent = `${d.length} of ${e.nodes.length} ${e.noun}`;
    for (const { node: m, index: v } of d) {
      const g = m["gufe-key"], y = po(eo.row);
      y.setAttribute("aria-pressed", String(e.selected.has(g)));
      const _ = e.row(m, v);
      _.before && y.appendChild(_.before);
      const f = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", _.name);
      f.title = _.title, y.appendChild(f), y.onclick = ($) => {
        $.shiftKey || $.metaKey || $.ctrlKey ? e.selected.has(g) ? e.selected.delete(g) : e.selected.add(g) : (e.selected.clear(), e.selected.add(g), e.focus(v)), l(), e.refresh();
      }, s.appendChild(y);
    }
    d.length || s.appendChild(T("div", `font-size:${Y.small};padding:${Z.lg};color:${j.textMuted2};`, "Nothing matches."));
  }
  return r.type = "search", r.placeholder = e.search.placeholder, r.value = t.get(), e.query.text = r.value, r.setAttribute("aria-label", e.search.label), r.oninput = () => {
    e.query.text = r.value, t.set(r.value), l(), e.refresh();
  }, l(), e.mounted?.(l), o.apply(), n;
}
function Qa(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function Sp(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Ft = { node: 0.12, edge: 0.06 };
function ec(e, t, n, r) {
  e.forEach((o, i) => {
    let s = null, a = !1;
    o.addEventListener("pointerdown", (l) => {
      l.stopPropagation();
      const { scale: d } = n.transform();
      s = { x: l.clientX - t[i].x * d, y: l.clientY - t[i].y * d }, a = !1, o.setPointerCapture(l.pointerId);
    }), o.addEventListener("pointermove", (l) => {
      if (!s) return;
      if (n.gesturing()) {
        s = null, a = !0;
        return;
      }
      const { scale: d } = n.transform(), m = (l.clientX - s.x) / d, v = (l.clientY - s.y) / d;
      Math.hypot(m - t[i].x, v - t[i].y) * d > Ua && (a = !0), t[i].x = t[i].fx = m, t[i].y = t[i].fy = v, r.moved(i);
    });
    const c = () => {
      s = null;
    };
    o.addEventListener("pointerup", c), o.addEventListener("pointercancel", c), o.addEventListener("click", (l) => {
      l.stopPropagation(), a || r.clicked(i);
    });
  });
}
class tc {
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
const In = 200;
function nc(e, t, n, r) {
  const { scale: o, tx: i, ty: s } = t, a = [];
  return e.forEach((c, l) => {
    if (!r(l)) return;
    const d = c.x * o + i, m = c.y * o + s;
    d < -In || m < -In || d > n.width + In || m > n.height + In || a.push(l);
  }), a;
}
function rc(e) {
  const t = T("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
  e.appendChild(t);
  const n = document.createElement("alchemy-view");
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
function _s(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const Cp = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), kp = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Ep = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, xp = (e) => {
  const t = Cp(e);
  return kp.has(t) || Ep(t);
};
function oc(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && xp(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const Ap = 1e-6;
function jn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Ss(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Pp(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Cs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], l = t[a * 3 + c];
      if (Math.abs(l) < 1e-14) continue;
      const d = t[a * 3 + a], m = t[c * 3 + c], v = (m - d) / (2 * l);
      let g;
      Math.abs(v) > 1e10 ? g = 1 / (2 * v) : g = (v >= 0 ? 1 : -1) / (Math.abs(v) + Math.sqrt(v * v + 1));
      const y = 1 / Math.sqrt(1 + g * g), _ = g * y;
      t[a * 3 + a] = d - g * l, t[c * 3 + c] = m + g * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== c) {
          const $ = t[f * 3 + a], h = t[f * 3 + c];
          t[f * 3 + a] = y * $ - _ * h, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + c] = _ * $ + y * h, t[c * 3 + f] = t[f * 3 + c];
        }
      for (let f = 0; f < 3; f++) {
        const $ = n[f * 3 + a], h = n[f * 3 + c];
        n[f * 3 + a] = y * $ - _ * h, n[f * 3 + c] = _ * $ + y * h;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Rp(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], o[0] += t[S][0], o[1] += t[S][1], o[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const u = e[S][0] - r[0], p = e[S][1] - r[1], b = e[S][2] - r[2], k = t[S][0] - o[0], A = t[S][1] - o[1], x = t[S][2] - o[2];
    i[0] += u * k, i[1] += u * A, i[2] += u * x, i[3] += p * k, i[4] += p * A, i[5] += p * x, i[6] += b * k, i[7] += b * A, i[8] += b * x;
  }
  const s = Ss(i), a = jn(s, i), c = jn(i, s);
  let l = Cs(a), d = Cs(c);
  function m(S) {
    const u = [0, 1, 2].sort((b, k) => S.values[k] - S.values[b]), p = new Array(9);
    for (let b = 0; b < 3; b++) {
      const k = u[b];
      p[b] = S.vectors[k], p[3 + b] = S.vectors[3 + k], p[6 + b] = S.vectors[6 + k];
    }
    return {
      values: [S.values[u[0]], S.values[u[1]], S.values[u[2]]],
      vectors: p
    };
  }
  l = m(l), d = m(d);
  const v = l.vectors, g = d.vectors;
  for (let S = 0; S < 3; S++) {
    const u = v[S], p = v[3 + S], b = v[6 + S], k = i[0] * u + i[1] * p + i[2] * b, A = i[3] * u + i[4] * p + i[5] * b, x = i[6] * u + i[7] * p + i[8] * b, M = g[S], P = g[3 + S], D = g[6 + S];
    k * M + A * P + x * D < 0 && (g[S] = -M, g[3 + S] = -P, g[6 + S] = -D);
  }
  const y = Ss(v);
  let _ = jn(g, y);
  Pp(_) < 0 && (g[2] = -g[2], g[5] = -g[5], g[8] = -g[8], _ = jn(g, y));
  const f = _[0] * o[0] + _[1] * o[1] + _[2] * o[2], $ = _[3] * o[0] + _[4] * o[1] + _[5] * o[2], h = _[6] * o[0] + _[7] * o[1] + _[8] * o[2], C = l.values[1] > Ap * l.values[0];
  return { R: _, t: [r[0] - f, r[1] - $, r[2] - h], determined: C };
}
function Np(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
function Mp(e, t) {
  const n = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  e.appendChild(n);
  let r = [], o = 0, i = !0, s = !1;
  const a = () => {
    o && cancelAnimationFrame(o), o = 0, s && Ea(r[0]?.viewer ?? null, r[0]?.interaction ?? null), s = !1;
    for (const c of r)
      c.interaction?.cleanup(), $o(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), d = T("div", "flex:1;position:relative;min-height:0;");
      d.dataset.gufeViewer = "", l.appendChild(d), t && l.appendChild(T("div", Qr, c)), n.appendChild(l);
      const m = { container: d, viewer: null, interaction: null };
      return r.push(m), m;
    },
    open(c, l) {
      const d = Qe.createViewer(c.container, { backgroundColor: zt.viewer() });
      for (const m of l) d.addModel(Df(m), "sdf");
      return c.viewer = d, d;
    },
    settle(c) {
      c.viewer && (c.interaction = ar(c.container, c.viewer));
    },
    pose(c) {
      xa(c.viewer, c.interaction), s = !0;
    },
    sync() {
      if (r.length < 2) return;
      const c = r.map(() => "");
      let l = !1;
      const d = () => {
        if (i) {
          if (!l)
            for (let m = 0; m < r.length; m++) {
              const v = r[m].viewer;
              if (!v) continue;
              const g = JSON.stringify(v.getView());
              if (g !== c[m]) {
                l = !0;
                for (let y = 0; y < r.length; y++)
                  y !== m && r[y].viewer && (r[y].viewer.setView(v.getView()), r[y].viewer.render()), c[y] = g;
                l = !1;
                break;
              }
            }
          o = requestAnimationFrame(d);
        }
      };
      o = requestAnimationFrame(d);
    },
    resize() {
      for (const c of r)
        c.viewer && (c.viewer.resize(), c.viewer.render());
    },
    cleanup() {
      i = !1, a();
    }
  };
}
const ks = `
`, Nr = 4;
function Es(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[alchemy-viz] could not lay out a molecule in 2D -", he(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Tp(e, t, n) {
  const r = [], o = [];
  for (const [d, m] of n) {
    const v = e[m], g = t[d];
    !v || !g || (r.push(v), o.push(g));
  }
  if (r.length < 2) return null;
  const i = (d) => {
    let m = 0, v = 0;
    for (const g of d)
      m += g[0], v += g[1];
    return [m / d.length, v / d.length];
  }, s = i(r), a = i(o);
  let c = null, l = -1 / 0;
  for (const d of [!1, !0]) {
    let m = 0, v = 0;
    for (let h = 0; h < r.length; h++) {
      const C = (d ? -1 : 1) * (r[h][0] - s[0]), S = r[h][1] - s[1], u = o[h][0] - a[0], p = o[h][1] - a[1];
      m += C * p - S * u, v += C * u + S * p;
    }
    const g = Math.hypot(m, v);
    if (g <= l) continue;
    l = g;
    const y = Math.atan2(m, v), _ = Math.cos(y), f = Math.sin(y), $ = (d ? -1 : 1) * s[0];
    c = {
      cos: _,
      sin: f,
      mirror: d,
      tx: a[0] - (_ * $ - f * s[1]),
      ty: a[1] - (f * $ + _ * s[1])
    };
  }
  return c;
}
function Op(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Fp(e, t, n) {
  const r = wo(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(ks);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[Nr + i], a = t[i];
    if (s == null || !a) return e;
    o[Nr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Nr + r.atoms + a, l = o[c];
      if (l == null) break;
      const d = parseInt(l.substring(9, 12), 10);
      d !== 1 && d !== 6 || (o[c] = l.substring(0, 9) + String(d === 1 ? 6 : 1).padStart(3) + l.substring(12));
    }
  return o.join(ks);
}
function zp(e, t, n) {
  try {
    const r = (s) => Hr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = Tp(o, r(e), n);
    return i ? Fp(
      t,
      o.map((s) => Op(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[alchemy-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Ip(e, t, n, r, o) {
  const i = Es(e, t, r), s = Es(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: zp(i, s, o) };
}
const jp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Dp = {
  core: "0x888888",
  pairLine: "0xd9a300"
}, ic = () => Zr() === "dark" ? jp : Dp, Mr = 420, Be = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Tr = { gap: 2.5, minLiftFraction: 0.6 }, Lp = 24, xs = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, qp = {
  mapped: null,
  element: Ae.modifiedColor,
  uniqueA: Ae.destroyedColor,
  uniqueB: Ae.createdColor
}, Vp = 132;
function As(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Bp(e, t) {
  const n = As(e), r = As(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Tr.gap, a = Tr.minLiftFraction * i + Tr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function sc(e) {
  const t = kf(Ae.customSpec);
  return [
    { mol: e.molA, uniques: e.uniquesA, side: "left", custom: t.left },
    { mol: e.molB, uniques: e.uniquesB, side: "right", custom: t.right }
  ];
}
function Up(e, t) {
  for (const n of [t.molA, t.molB]) {
    const r = e.box(n.name), o = e.open(r, [n]);
    o.setStyle(
      {},
      { stick: { radius: Be.stick, colorscheme: "Jmol" }, sphere: { scale: Be.sphere, colorscheme: "Jmol" } }
    ), o.zoomTo(), o.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function Hp(e, t) {
  const n = Ae, r = ic();
  for (const o of sc(t)) {
    const i = e.box(o.mol.name), s = e.open(i, [o.mol]);
    s.setStyle(
      {},
      { stick: { radius: Be.stick, color: r.core }, sphere: { scale: Be.sphere, color: r.core } }
    );
    const a = (c, l) => {
      s.addStyle(
        { serial: c },
        {
          stick: { radius: Be.markStick, color: us(l) },
          sphere: { scale: Be.markSphere, color: us(l) }
        }
      );
    };
    for (const c of Pa(n, o.mol, o.uniques, o.side))
      for (const l of c.atoms) a(l, c.color);
    for (const c of o.custom)
      c < o.mol.symbols.length && a(c, n.customColor);
    s.zoomTo(), s.render(), e.settle(i), e.pose(i);
  }
  e.sync();
}
function Kp(e, t) {
  const { molA: n, molB: r, nameA: o, nameB: i, pairs: s } = t, a = e.box(`${o} (left), both overlaid (middle), ${i} (right)`), c = Qp(n.coords, r.coords), l = ($, h) => ({
    ...$,
    coords: $.coords.map(([C, S, u]) => [C + h, S, u])
  }), d = l(n, -c), m = l(r, c), v = e.open(a, [d, m, n, r]);
  v.setStyle({}, { stick: {} });
  const g = Array.from(s);
  g.forEach(([$, h], C) => {
    const S = d.coords[$], u = m.coords[h];
    if (!S || !u) return;
    const p = eh(C, g.length);
    for (const [b, k, A] of [S, u])
      v.addSphere({
        center: { x: b, y: k, z: A },
        radius: xs.sphereRadius,
        color: p,
        alpha: xs.sphereAlpha
      });
  }), v.zoomTo();
  const { clientWidth: y, clientHeight: _ } = a.container, f = y - 2 * Lp;
  f > 0 && f < _ && v.zoom(f / _), v.render(), e.settle(a);
}
function Gp(e, t) {
  const { molA: n, molB: r, nameA: o, nameB: i, pairs: s } = t, a = e.box(`${o} to ${i}  (${s.size} mapped pairs)`), { axis: c, lift: l } = Bp(n.coords, r.coords), d = {
    ...r,
    coords: r.coords.map((g) => {
      const y = [g[0], g[1], g[2]];
      return y[c] += l, y;
    })
  }, m = e.open(a, [n, d]), v = {
    stick: { radius: Be.stick, colorscheme: "Jmol" },
    sphere: { scale: Be.pairSphere, colorscheme: "Jmol" }
  };
  m.setStyle({ model: 0 }, v), m.setStyle({ model: 1 }, v);
  for (const [g, y] of s) {
    const _ = n.coords[g], f = d.coords[y];
    !_ || !f || m.addCylinder({
      start: { x: _[0], y: _[1], z: _[2] },
      end: { x: f[0], y: f[1], z: f[2] },
      radius: Be.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: ic().pairLine
    });
  }
  m.zoomTo(), c === 2 ? m.rotate(90, "x") : c === 0 && m.rotate(-90, "z"), m.render(), e.settle(a);
}
function Wp(e, t) {
  const n = Ae, r = sc(t).map((o) => {
    const i = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), s = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Aa()};`
    );
    return s.appendChild(pe("Loading 2D depiction...")), i.appendChild(s), e.named && i.appendChild(T("div", Qr, o.mol.name)), e.element.appendChild(i), { box: s, side: o };
  });
  yo().then((o) => {
    const i = Pf(n, o), s = Ip(o, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = Pa(n, c.mol, c.uniques, c.side), d = Rf(n, Mr, l, c.custom, i, c.mol.symbols.length), m = Nf(o, c.side === "left" ? s.left : s.right, Mr, d);
      if (a.replaceChildren(), !m) {
        a.appendChild(pe("Failed to parse molecule", !0));
        continue;
      }
      Ta(a, m, Mr);
      const v = a.querySelector("svg");
      v && If(v, c.mol, n, l, c.custom, i);
    }
  }).catch((o) => {
    for (const { box: i } of r)
      i.replaceChildren(pe(`RDKit failed to load: ${he(o)}`, !0));
  });
}
function Jp(e, t, n) {
  const { nameA: r, nameB: o, pairs: i, molA: s, molB: a, uniquesA: c, uniquesB: l } = t, d = T(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
  );
  e.element.appendChild(d), d.appendChild(
    T(
      "div",
      `font-size:${Y.title};font-weight:${fe.bold};color:${Ee.title};`,
      n.name || `${r} to ${o}`
    )
  );
  const m = Xp(i, s.symbols, a.symbols), v = T("div", Ve.row), g = [];
  let y = null;
  const _ = (x, M, P, D) => {
    const z = po(`${Ve.plain}${Ve.button}`, Ve.className);
    z.appendChild(Ze(x, String(M), D)), z.onclick = () => {
      y = y === P ? null : P, b();
    }, g.push({ node: z, kinds: P }), v.appendChild(z);
  }, f = (x, M) => {
    const P = T("span", Ve.plain);
    P.appendChild(Ze(x, M)), v.appendChild(P);
  };
  _("mapped atoms", i.size, ["mapped", "element"]), _("element changes", c.elements.length, ["element"], Ae.modifiedColor), _(`unique to ${r}`, c.atoms.length, ["uniqueA"], Ae.destroyedColor), _(`unique to ${o}`, l.atoms.length, ["uniqueB"], Ae.createdColor), f(`atoms in ${r}`, String(s.symbols.length)), f(`atoms in ${o}`, String(a.symbols.length)), f("score", n.score == null ? Je : n.score.toFixed(3)), d.appendChild(v), d.appendChild(T("div", Dr, "Correspondence"));
  const $ = T("div", `font-size:${Y.small};line-height:1.6;color:${Ee.faint};`);
  d.appendChild($);
  const h = T(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Vp}px,1fr));gap:${Z.xs} ${Z.md};font-family:${Y.mono};font-size:${Y.small};color:${Ee.primary};`
  );
  d.appendChild(h);
  const C = String(Math.max(s.symbols.length, a.symbols.length, 1) - 1).length, S = (x, M) => `${(x == null ? Je : String(x)).padStart(C)} ${M.padEnd(2)}`, u = (x) => {
    if (x.kind === "uniqueA") return `${r} atom ${x.a} ${x.symbolA} maps to nothing`;
    if (x.kind === "uniqueB") return `${o} atom ${x.b} ${x.symbolB} maps to nothing`;
    const M = x.kind === "element" ? ", an element change" : "";
    return `${r} atom ${x.a} ${x.symbolA} maps to ${o} atom ${x.b} ${x.symbolB}${M}`;
  }, p = (x) => {
    const M = T(
      "div",
      `white-space:pre;padding:${Z.xs} ${Z.md};border-radius:${be.sm};background:${zt.card};border-left:3px solid ${qp[x.kind] ?? "transparent"};`,
      `${S(x.a, x.symbolA)} -> ${S(x.b, x.symbolB)}`
    );
    return M.title = u(x), M.dataset.gufeRelation = x.kind, M;
  }, b = () => {
    const x = y, M = x ? m.filter((P) => x.includes(P.kind)) : m;
    h.replaceChildren(...M.map(p)), M.length || h.appendChild(
      T(
        "div",
        `font-size:${Y.small};line-height:1.6;color:${Ee.faint};grid-column:1/-1;`,
        y ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), $.textContent = (i.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${o}, by atom index and element` + (y ? "; click the chip again for all of them" : "");
    for (const P of g) {
      const D = P.kinds === y;
      P.node.setAttribute("aria-pressed", String(D)), P.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  b();
  const k = Object.entries(n.annotations ?? {}).filter(([x]) => x !== "score");
  if (!k.length) return;
  d.appendChild(T("div", Dr, "Annotations"));
  const A = T("div", `${kc}color:${Ee.faint};`);
  for (const [x, M] of k)
    A.appendChild(T("div", "", `${x}: ${String(M)}`));
  d.appendChild(A);
}
const Ps = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Or = {
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Rs(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function Yp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Xp(e, t, n) {
  const r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i] ?? "", a = e.get(i);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: i, b: null, symbolA: s, symbolB: "" });
      continue;
    }
    const c = n[a] ?? "";
    r.push({ kind: s === c ? "mapped" : "element", a: i, b: a, symbolA: s, symbolB: c });
  }
  const o = new Set(e.values());
  for (let i = 0; i < n.length; i++)
    o.has(i) || r.push({ kind: "uniqueB", a: null, b: i, symbolA: "", symbolB: n[i] ?? "" });
  return r;
}
function ac(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), r = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: xo(t, [e.componentA, e.componentB]) };
}
function Zp(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], l = t.coords[a];
    c && l && (r.push(c), o.push(l));
  }
  const i = Rp(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => Np(s, i.R, i.t)) } : t;
}
function Qp(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Or.minSpread ? r : Or.minSpread) * Or.spreadFactor;
}
function eh(e, t) {
  const n = ju, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const d = (v) => parseInt(v.slice(1 + l * 2, 3 + l * 2), 16), m = Math.round(d(n[i]) + (d(n[s]) - d(n[i])) * a);
    c += m.toString(16).padStart(2, "0");
  }
  return c;
}
function th(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), r = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const o = et(n), i = et(r), s = Yp(e);
  let a, c;
  try {
    a = Hr(n.sdf, o), c = Hr(r.sdf, i);
  } catch (d) {
    return { problem: `Could not read a molecule: ${he(d)}`, isError: !0 };
  }
  c = Zp(a, c, s);
  const l = /* @__PURE__ */ new Map();
  for (const [d, m] of s) l.set(m, d);
  return {
    pair: {
      from: n,
      to: r,
      nameA: o,
      nameB: i,
      pairs: s,
      molA: a,
      molB: c,
      uniquesA: Rs(s, a.symbols, c.symbols),
      uniquesB: Rs(l, c.symbols, a.symbols)
    }
  };
}
class nh extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = th(n, St(n));
    if ("problem" in r)
      return t.appendChild(pe(r.problem, r.isError)), {};
    const o = r.pair, i = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(i);
    const s = Mp(i, no(t)), a = ct("atom-mapping.mode", "plain", Ps.map((y) => y.id));
    let c = a.get();
    const l = T("div", sa), d = ba(
      Ps,
      c,
      (y) => {
        c = y, g();
      },
      { remember: a, fit: { pane: i, bar: l } }
    );
    l.appendChild(d), i.appendChild(l);
    const m = ro(), v = {
      plain: Up,
      colored: Hp,
      openfe: Kp,
      lines: Gp
    }, g = () => {
      const y = m.start();
      if (s.clear(), c === "info") return Jp(s, o, n);
      if (c === "2d") return Wp(s, o);
      const _ = v[c];
      s.element.appendChild(pe("Loading 3D viewer...")), sr().then(() => {
        y() && (s.element.replaceChildren(), _(s, o));
      }).catch((f) => {
        y() && s.element.replaceChildren(pe(`3D render failed: ${he(f)}`, !0));
      });
    };
    return g(), {
      onResize: () => s.resize(),
      cleanup: () => {
        m.stop(), d.cleanup(), s.cleanup();
      }
    };
  }
}
Ne("gufe-atom-mapping", nh);
const Ns = ["Force-directed", "Circular", "Radial"], rh = "ligand-network", oh = "Click a ligand or an edge to see it.";
function ih(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function sh(e) {
  return Ga(e);
}
const Ms = (e) => Math.round(e * 100) / 100;
function ah(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function ch(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Rt = { initial: 0.58, min: 0.25, max: 0.8 }, xe = 38, Ts = 1.5, Fr = {
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
}, lh = "6 4", Os = 200, dh = 2, uh = Math.SQRT2 * (xe - dh), fh = 14, ph = 18, Se = {
  fontSize: 11,
  below: xe + 12,
  minFontSize: 7,
  insideWidth: (xe - 6) * 2
}, Ot = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Fs = 1.5, hh = 6.5, mh = 0.9, gh = 14, zr = { size: 8, clearance: 8 }, yh = { fontSize: 10 }, $h = 0.4, vh = () => Br(le.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, cc = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], bh = (e) => Qa(cc, e), wh = (e) => Sp(cc, e), _h = 1.8, zs = 2 * xe + 68, ke = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: zs,
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
  collisionPadding: zs / 2 - xe,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Sh(e) {
  const t = T("div", Cc);
  return e.appendChild(t), {
    show(n, r, o) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${o - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function Ch(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const i = ae("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: xe + zr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: zr.size,
      markerHeight: zr.size,
      orient: "auto"
    });
    return i.appendChild(ae("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function kh(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Eh(e) {
  const [t, n] = le.netEdgeRamp.map(kh), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ye = et;
function lc(e, t) {
  return t ? Ye(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function xh(e, t, n, r, o) {
  const i = r.trim().toLowerCase(), s = n.size > 0 || i.length > 0;
  if (!s && o <= 0) return null;
  const a = /* @__PURE__ */ new Set();
  for (const l of e) {
    const d = l["gufe-key"];
    (!s || n.has(d) || i.length > 0 && lc(l, i)) && a.add(d);
  }
  const c = /* @__PURE__ */ new Set();
  return t.forEach((l, d) => {
    (l.score ?? 0) < o || !a.has(l.from["gufe-key"]) || !a.has(l.to["gufe-key"]) || c.add(d);
  }), { nodes: a, edges: c };
}
function Ah(e) {
  const t = new tc(), n = lr("cpk"), r = vh(), o = (y) => (e.matched().get(y) ?? []).join(","), i = (y, _) => {
    if (!t.wants(_)) return;
    const f = e.nodes[_], $ = e.matched().get(_), h = f.sdf && _o(
      y,
      f.sdf,
      Os,
      Ae.layout,
      $ && { atoms: $, color: r, radius: $h },
      n
    );
    if (!h) {
      t.refused(_);
      return;
    }
    if (!oc(e.depictionGroups[_], h, Os, uh)) {
      t.refused(_);
      return;
    }
    t.drew(_, o(_));
  }, s = () => t.forget(o, (y) => e.depictionGroups[y].replaceChildren()), a = [], c = (y, _) => {
    if (a[y]) return a[y];
    _.setAttribute("font-size", String(Se.fontSize));
    let f = 0;
    try {
      f = _.getBBox().width;
    } catch {
      return Se.fontSize;
    }
    if (!f) return Se.fontSize;
    const $ = Se.fontSize * Se.insideWidth / f;
    return a[y] = Math.max(Se.minFontSize, Math.min(Se.fontSize, $)), a[y];
  }, l = [], d = (y) => {
    const _ = e.captionPlates[y];
    if (l[y] === Se.below) {
      _.setAttribute("display", "inline");
      return;
    }
    let f = null;
    try {
      f = e.captions[y].getBBox();
    } catch {
      f = null;
    }
    if (!f?.width) {
      _.setAttribute("display", "none");
      return;
    }
    _.setAttribute("x", String(f.x - Ot.captionPadX)), _.setAttribute("y", String(f.y - Ot.captionPadY)), _.setAttribute("width", String(f.width + Ot.captionPadX * 2)), _.setAttribute("height", String(f.height + Ot.captionPadY * 2)), _.setAttribute("display", "inline"), l[y] = Se.below;
  }, m = (y, _) => {
    const f = _.structure && !t.has(y) ? wh(_) : _;
    e.depictionGroups[y].setAttribute("display", f.structure ? "inline" : "none");
    const $ = e.plates[y];
    $.setAttribute("display", f.structure ? "inline" : "none");
    const h = e.matched().has(y);
    $.setAttribute("stroke", h ? le.netMatchStroke : le.netNodeStroke);
    const C = e.circles[y];
    C.setAttribute("fill", f.disc ? h ? le.netMatchFill : le.netNodeFill : "none"), C.setAttribute("stroke", f.disc ? h ? le.netMatchStroke : le.netNodeStroke : "none"), e.initials[y].setAttribute("display", f.initials ? "inline" : "none");
    const S = e.charges[y];
    if (S) {
      const k = !f.structure, A = xe * Fr.at;
      S.setAttribute("x", String(A)), S.setAttribute("y", String(-A)), S.setAttribute("font-size", String(k ? Fr.bigFontSize : Fr.fontSize)), S.setAttribute("font-weight", k ? fe.bold : fe.normal);
    }
    const u = e.captions[y], p = f.name === "below";
    if (u.setAttribute("fill", h ? le.netMatchStroke : p ? Bu() : le.netNodeCaption), u.setAttribute("display", f.name === "none" ? "none" : "inline"), p || e.captionPlates[y].setAttribute("display", "none"), f.name === "none") return;
    const b = f.name === "inside";
    u.setAttribute("y", b ? "0" : String(Se.below)), u.setAttribute("dominant-baseline", b ? "middle" : "auto"), u.setAttribute("font-size", String(b ? c(y, u) : Se.fontSize)), p && d(y);
  };
  let v = null;
  return { apply: (y, _, f) => {
    const $ = bh(y);
    v = $, e.stage.setAttribute("data-detail", $.id), e.edgeLabels.setAttribute("display", $.edgeScores ? "inline" : "none");
    for (let C = 0; C < e.nodes.length; C++) m(C, $);
    if (!$.structure) return;
    const h = nc(e.nodes, { scale: y, tx: _, ty: f }, e.viewport(), (C) => t.wants(C));
    h.length && e.rdkit().then((C) => {
      if (!(!C || v !== $))
        for (const S of h)
          i(C, S), m(S, $);
    }).catch(() => {
    });
  }, forget: s };
}
function Ph(e) {
  const t = jt("ligand-network.minScore", 0, 0, 1);
  return Za({
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
      const n = T("div", `display:flex;align-items:center;gap:${Z.lg};font-size:${Y.small};color:${j.textMuted};`), r = T("span", `min-width:28px;color:${j.textPrimary};`, "0.00"), o = T("input", "flex:1;");
      return o.type = "range", o.min = "0", o.max = "1", o.step = "0.01", o.value = String(t.get()), e.filter.minScore = Number(o.value), o.setAttribute("aria-label", "Hide mappings scoring below this"), o.oninput = () => {
        e.filter.minScore = Number(o.value), r.textContent = e.filter.minScore.toFixed(2), t.set(e.filter.minScore), e.refresh();
      }, n.appendChild(T("span", "", "score >=")), n.appendChild(o), n.appendChild(r), [n];
    },
    shows: (n) => lc(n, e.query.text.trim().toLowerCase()),
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
class Rh extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: o, edges: i, unresolved: s, dangling: a } = Ja({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (E) => [E.componentA, E.componentB]
    }), c = Yn(n.name || "Ligand network");
    c.statsEl.appendChild(Ze("ligands", String(o.length))), c.statsEl.appendChild(Ze("mappings", String(i.length))), t.appendChild(c);
    const l = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const d = /* @__PURE__ */ new Set(), m = { minScore: 0 }, v = { text: "" }, g = () => Sa(), y = Ya(
      g,
      o.map((E) => E.sdf ?? "")
    );
    let _ = /* @__PURE__ */ new Map();
    const f = async (E) => {
      const R = await y.run(E);
      return R.status === "superseded" || (_ = R.status === "ok" ? R.matched : /* @__PURE__ */ new Map(), I()), R;
    }, $ = ko(
      c,
      () => Ph({
        nodes: o,
        edges: i,
        selected: d,
        filter: m,
        query: v,
        refresh: () => U(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (E) => {
          M?.focusOn(E), O({ kind: "ligand", index: E });
        },
        match: (E) => f(E)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => w(),
        remember: it("ligand-network.menuOpen", !1),
        extras: Eo
      }
    );
    l.appendChild($.panel);
    let h = () => {
    };
    const C = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), S = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`);
    l.appendChild(C), l.appendChild(
      ja(l, C, S, {
        min: Rt.min,
        max: Rt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: jt("ligand-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (E) => So($.panel, E)
      })
    ), l.appendChild(S);
    const u = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${j.netCanvasBg};`);
    C.appendChild(u);
    const p = ct("ligand-network.layout", "Force-directed", Ns), b = this.#e(
      (E) => w(E),
      () => M?.reset(),
      p,
      i.some((E) => _s(E.from, E.to) !== 0)
    );
    C.appendChild(b.bar);
    const k = this.#t(S, r);
    if (!o.length)
      return u.appendChild(
        pe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    s && st(
      u,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && st(u, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const A = g(), x = Sh(u);
    let M = null;
    const P = ah(la(rh), o.length);
    let D = P && { scale: P.scale, tx: P.tx, ty: P.ty }, z = P ? P.nodes : null, L = i.length ? { kind: "edge", index: 0 } : null;
    if (P && P.selected >= 0) {
      const E = P.selectedKind ?? "edge";
      P.selected < (E === "ligand" ? o.length : i.length) && (L = { kind: E, index: P.selected });
    }
    const W = () => M?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let ne = p.get(), X = !1;
    const re = ro(), G = () => {
      if (!L) {
        k.message(i.length ? oh : "Click a ligand to see it.");
        return;
      }
      L.kind === "edge" ? k.showMapping(i[L.index]) : k.showLigand(o[L.index]);
    }, O = (E) => {
      L = E, G(), M?.setSelected(L);
    }, U = () => {
      const E = xh(o, i, d, v.text, m.minScore);
      M?.setEmphasis(E?.nodes ?? null, E?.edges ?? null);
    }, I = () => M?.setMatches(_), w = (E = ne) => {
      const R = M && E === ne ? M.transform() : null;
      E !== ne && (z = null);
      const V = re.start();
      ne = E, M?.cleanup(), M = null, u.querySelectorAll("svg").forEach((N) => N.remove());
      const H = u.clientWidth || 800, Q = u.clientHeight || 600;
      Nh(o, H, Q, ne, i), z && ch(o, z);
      const ee = () => {
        if (!V()) return;
        const N = this.#n(u, o, i, H, Q, O, A, x);
        M = N, N.setSelected(L), U(), I();
        const F = D ?? R;
        F ? (N.setTransform(F.scale, F.tx, F.ty), D = null) : N.fit();
      };
      if (ne !== "Force-directed" || X || z) {
        ee();
        return;
      }
      Mh(o, i, H, Q).then((N) => {
        if (V()) {
          if (N) {
            ee();
            return;
          }
          X = !0, b.picker.value = "Circular", st(u, "d3 could not be loaded - showing the circular layout instead"), w("Circular");
        }
      }, ee);
    };
    return h = () => w(), w(), G(), {
      onResize: () => w(),
      cleanup: () => {
        re.stop(), y.cancel(), x.remove(), M?.cleanup(), M = null, k.cleanup();
      },
      viewState: () => ({
        nodes: o.map((E) => [Ms(E.x), Ms(E.y)]),
        ...W(),
        selected: L ? L.index : -1,
        selectedKind: L ? L.kind : "edge"
      })
    };
  }
  #e(t, n, r, o) {
    const i = T(
      "div",
      ia
    ), s = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${j.textMuted};`);
    if (s.appendChild(T("span", "", "score")), s.appendChild(
      T(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${le.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(T("span", "", "0 -> 1")), i.appendChild(s), o) {
      const c = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${j.textMuted};`);
      c.appendChild(
        T(
          "span",
          `width:24px;height:0;border-top:2px dashed ${j.netEdgeLine};display:inline-block;`
        )
      ), c.appendChild(T("span", "", "net charge change")), i.appendChild(c);
    }
    i.appendChild(T("label", `font-size:${Y.body};margin-left:auto;color:${j.textMuted};`, "Layout"));
    const a = It(
      Ns.map((c) => ({ id: c, label: c })),
      r.get(),
      (c) => t(c),
      r
    );
    return i.appendChild(a), i.appendChild(vo(n, "Reset pan and zoom")), { bar: i, picker: a };
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
    const r = rc(t);
    return {
      ...r,
      showMapping: (o) => r.show(ac(ih(o), n)),
      showLigand: (o) => r.show(sh(o))
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, r, o, i, s, a, c) {
    const l = ae("svg", {
      class: "gufe-graph",
      width: o,
      height: i,
      style: "display:block;touch-action:none;"
    }), d = ae("g");
    l.appendChild(d), t.appendChild(l);
    const m = ae("defs"), v = Ch(m);
    l.appendChild(m);
    const g = [], y = ae("g"), _ = ae("g"), f = ae("g", { "pointer-events": "none" }), $ = ae("g");
    d.append(y, _, f, $);
    for (const L of r) {
      const W = Eh(L.score), ne = Fs + (L.score ?? 0.5) * (hh - Fs), X = ae("line", {
        stroke: le.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": ne + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), re = _s(L.from, L.to), G = ae("line", {
        stroke: W,
        "stroke-width": ne,
        "stroke-opacity": mh,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${v(W)})`,
        "pointer-events": "none",
        ...re ? { "stroke-dasharray": lh } : {}
      }), O = ae("line", { stroke: "transparent", "stroke-width": gh, style: "cursor:pointer;" });
      O.addEventListener("click", (w) => {
        w.stopPropagation(), s({ kind: "edge", index: L.index });
      }), O.addEventListener("mousemove", (w) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Te(Ye(L.from))} -&gt; ${Te(Ye(L.to))}</div>` + (L.score == null ? `<div style="color:${j.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${L.score.toFixed(3)}</b></div>`) + (re ? `<div style="margin-top:4px;">net charge <b>${Te(ot(re))}</b> <span style="color:${j.textMuted2};">(${Te(ot(L.from.total_charge ?? 0))} to ${Te(ot(L.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Y.tiny};color:${j.textMuted2};">Click to see the mapping</div>`,
          w.offsetX,
          w.offsetY
        );
      }), O.addEventListener("mouseleave", () => c.hide()), g.push(X), y.append(X, G), _.appendChild(O);
      const U = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": yh.fontSize,
        "font-weight": 600,
        fill: le.netEdgeLabel
      });
      U.textContent = L.score == null ? "" : L.score.toFixed(2);
      const I = ae("g", { class: "gufe-edge-label" });
      I.appendChild(U), f.appendChild(I);
    }
    const h = [], C = [], S = [], u = [], p = [], b = [], k = [], A = [], x = n.map((L) => {
      const W = ae("g", { class: "gufe-node", style: "cursor:grab;" });
      W.addEventListener("mousemove", (w) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Te(Ye(L))}</div>` + (L.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Te(L.smiles)}</div>` : "") + (L.total_charge ? `<div style="margin-top:3px;">formal charge <b>${Te(ot(L.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Y.tiny};color:${j.textMuted2};overflow-wrap:anywhere;">${Te(L["gufe-key"])}</div><div style="margin-top:4px;font-size:${Y.tiny};color:${j.textMuted2};">Click to see the ligand</div>`,
          w.offsetX,
          w.offsetY
        );
      }), W.addEventListener("mouseleave", () => c.hide());
      const ne = ae("circle", {
        class: "gufe-node-halo",
        r: xe + Nt.padding,
        fill: "none",
        stroke: le.netHaloColor,
        "stroke-width": Nt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      W.appendChild(ne), p.push(ne);
      const X = ae("circle", {
        class: "gufe-node-disc",
        r: xe,
        fill: le.netNodeFill,
        stroke: le.netNodeStroke,
        "stroke-width": Ts,
        "pointer-events": "all"
      });
      W.appendChild(X), C.push(X);
      const re = ae("circle", {
        class: "gufe-node-plate",
        r: xe,
        fill: Vr(),
        stroke: le.netNodeStroke,
        "stroke-width": Ts,
        display: "none",
        "pointer-events": "none"
      });
      W.appendChild(re), S.push(re);
      const G = ae("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      W.appendChild(G), h.push(G);
      const O = ae("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": ph,
        "font-weight": 700,
        fill: le.netInitials,
        "pointer-events": "none"
      });
      if (O.textContent = Ye(L).slice(0, 2).toUpperCase(), W.appendChild(O), b.push(O), L.total_charge) {
        const w = ae("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: le.badgeFg,
          "pointer-events": "none"
        });
        w.textContent = ot(L.total_charge), W.appendChild(w), A.push(w);
      } else
        A.push(null);
      const U = ae("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Se.below,
        "font-size": Se.fontSize,
        "font-weight": 600,
        fill: le.netNodeCaption,
        "pointer-events": "none"
      });
      U.textContent = qn(Ye(L), fh), U.setAttribute("display", "none"), k.push(U);
      const I = ae("rect", {
        class: "gufe-node-caption-plate",
        rx: Ot.captionRadius,
        fill: Vr(),
        display: "none",
        "pointer-events": "none"
      });
      return u.push(I), W.appendChild(I), W.appendChild(U), $.appendChild(W), W;
    }), M = () => {
      r.forEach((L, W) => {
        for (const X of [g[W], y.children[W * 2 + 1], _.children[W]]) {
          const re = X;
          re.setAttribute("x1", String(L.from.x)), re.setAttribute("y1", String(L.from.y)), re.setAttribute("x2", String(L.to.x)), re.setAttribute("y2", String(L.to.y));
        }
        f.children[W].setAttribute(
          "transform",
          `translate(${(L.from.x + L.to.x) / 2},${(L.from.y + L.to.y) / 2 - 8})`
        );
      }), n.forEach((L, W) => x[W].setAttribute("transform", `translate(${L.x},${L.y})`));
    };
    M();
    let P = /* @__PURE__ */ new Map();
    const D = Ah({
      nodes: n,
      circles: C,
      plates: S,
      captionPlates: u,
      matched: () => P,
      captions: k,
      initials: b,
      charges: A,
      depictionGroups: h,
      edgeLabels: f,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), z = this.#r(
      l,
      d,
      n,
      x,
      M,
      D.apply,
      (L) => s({ kind: "ligand", index: L })
    );
    return {
      setSelected(L) {
        const W = L?.kind === "edge" ? L.index : -1, ne = L?.kind === "ligand" ? L.index : -1;
        g.forEach((X, re) => X.setAttribute("opacity", re === W ? String(Nt.opacity) : "0")), p.forEach((X, re) => X.setAttribute("opacity", re === ne ? String(Nt.opacity) : "0"));
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
        P = L, D.forget();
        const { scale: W, tx: ne, ty: X } = z.transform();
        D.apply(W, ne, X);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(L, W) {
        x.forEach((ne, X) => {
          const re = !L || L.has(n[X]["gufe-key"]);
          ne.setAttribute("opacity", re ? "1" : String(Ft.node));
        }), r.forEach((ne, X) => {
          const re = !W || W.has(X), G = re ? "0.9" : String(Ft.edge);
          y.children[X * 2 + 1].setAttribute("stroke-opacity", G), f.children[X].setAttribute("opacity", re ? "1" : String(Ft.edge));
        });
      },
      focusOn(L) {
        const W = n[L];
        W && z.centreOn(W.x, W.y);
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
  #r(t, n, r, o, i, s, a) {
    const c = Ka(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Ha(r, xe),
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return ec(o, r, c, { moved: () => i(), clicked: a }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (l, d) => c.centreOn(l, d, _h)
    };
  }
}
function Nh(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, l) => {
    c.forEach((d, m) => {
      const v = 2 * Math.PI * m / Math.max(1, c.length) - Math.PI / 2;
      d.x = i + l * Math.cos(v), d.y = s + l * Math.sin(v), d.fx = r === "Force-directed" ? void 0 : d.x, d.fy = r === "Force-directed" ? void 0 : d.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of o)
      c.get(_.from["gufe-key"]).push(_.to["gufe-key"]), c.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const l = new Map(e.map((_) => [_["gufe-key"], _])), d = e.reduce(
      (_, f) => c.get(f["gufe-key"]).length > c.get(_["gufe-key"]).length ? f : _
    ), m = /* @__PURE__ */ new Set([d["gufe-key"]]);
    let v = [d["gufe-key"]], g = 0;
    const y = Math.min(t, n) * 0.18;
    for (; v.length; ) {
      a(
        v.map((f) => l.get(f)),
        g === 0 ? 0 : g * y + 40
      );
      const _ = [];
      for (const f of v)
        for (const $ of c.get(f))
          m.has($) || (m.add($), _.push($));
      v = _, g++;
    }
    a(e.filter((_) => !m.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function Mh(e, t, n, r) {
  return Wa({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((o) => ({
      source: o.from["gufe-key"],
      target: o.to["gufe-key"],
      score: o.score
    })),
    tickMultiplier: ke.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((s) => s["gufe-key"]).distance((s) => ke.linkBaseDistance + (1 - (s.score ?? 0.5)) * ke.linkScoreBonus).strength(ke.linkStrength)
      ],
      [
        "charge",
        o.forceManyBody().strength(ke.chargeStrength).distanceMin(ke.chargeDistanceMin).distanceMax(ke.chargeDistanceMax)
      ],
      ["center", o.forceCenter(n / 2, r / 2).strength(ke.centerStrength)],
      ["collision", o.forceCollide(xe + ke.collisionPadding).iterations(ke.collisionIterations)],
      ["x", o.forceX(n / 2).strength(ke.drift)],
      ["y", o.forceY(r / 2).strength(ke.drift)]
    ]
  });
}
Ne("gufe-ligand-network", Rh);
const Th = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function dc(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Ke(t, o);
    i && (Th.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function Oh(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Is = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], Fh = 0.4;
class zh extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = dc(n, St(n)), o = r.structures.map((g, y) => y), i = r.ligands.map((g, y) => r.structures.length + y), s = ct(
      "complex.focus",
      "site",
      Is.map((g) => g.id)
    );
    let a = s.get(), c = null;
    const l = Va({
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
        rr(
          Is,
          a,
          (g) => {
            a = g, m();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => m()
    });
    function d() {
      const g = l.viewer();
      g && (Gr(g, l.opts, c, l.showStatus, { model: o }, l.stillWanted), Uf(g, { model: i }), g.render());
    }
    function m() {
      const g = l.viewer();
      g && (a === "site" && i.length ? (g.zoomTo({ model: i }), g.zoom(Fh)) : g.zoomTo(), g.render(), v());
    }
    function v() {
      const g = l.viewer();
      g && (l.interaction()?.cleanup(), l.setInteraction(ar(l.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(js(r, () => c));
    try {
      c = Fa(r.structures[0].pdb), l.setStats(js(r, () => c));
    } catch (g) {
      l.showStatus(`PDB parse error: ${he(g)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), sr().then(() => {
      const g = Qe.createViewer(l.pane.container, { backgroundColor: zt.viewer() });
      l.setViewer(g);
      for (const y of r.structures) g.addModel(y.pdb, "pdb");
      for (const y of r.ligands) g.addModel(Ma(y.sdf), "sdf");
      d(), l.restoreCamera() ? v() : m(), g.spin(l.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      l.showStatus(`Failed to render structure: ${he(g)}`, "error");
    }), l.handle;
  }
}
function js(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = wo(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...za(o)] : [r];
}
Ne("gufe-complex", zh);
function Ih(e, t) {
  return {
    ...e,
    registry: xo(t, Object.values(e.components ?? {}))
  };
}
const jh = "chemical-system.component", Ds = 200, Dn = { min: 140, max: 420 }, Dh = "45%", Lh = "35%";
function qh(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function Vh(e) {
  return e.type === "UnknownComponentViz" ? Xn(e.gufe_type) : null;
}
function Ls(e) {
  return T(
    "div",
    `padding:10px 10px 16px;font-weight:${fe.bold};font-size:${Y.title};color:${j.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class Bh extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = St(n), o = [], i = [];
    for (const [x, M] of Object.entries(n.components ?? {})) {
      const P = Ke(r, M);
      P ? o.push([x, P]) : i.push(x);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(Ls(s)), t.appendChild(
        pe(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = T(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), i.length && st(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const c = T(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.panelBg};`
    );
    a.appendChild(c), c.appendChild(Ls(s));
    const l = T(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(l);
    const d = Da(c, {
      initial: Ds,
      min: Dn.min,
      max: Dn.max,
      maxShare: Dh,
      remember: jt("chemical-system.stripWidth", Ds, Dn.min, Dn.max),
      label: "Resize the component list",
      // What is mounted was drawn to the old shape, and a 3D viewer sizes its
      // canvas once.
      onResize: () => h?.resize?.()
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
    const g = document.createElement("alchemy-view");
    g.style.cssText = "flex:1;min-width:0;min-height:0;", g.setAttribute(Lr, ""), v.appendChild(g);
    const y = dc(n, r), _ = Oh(y), f = (x) => _ && y.structures.some(
      (M) => M === x
    ), $ = o.filter(([, x]) => !f(x)).map(([x, M]) => ({
      key: x,
      title: x,
      subtitle: qh(M),
      badge: Vh(M),
      element: g,
      point: () => {
        g.payload = M;
      }
    }));
    if (_) {
      const x = document.createElement("gufe-complex");
      x.style.cssText = "flex:1;min-width:0;min-height:0;", x.setAttribute(Lr, ""), x.payload = n, $.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${y.ligands.length === 1 ? y.ligands[0].name || "ligand" : "ligands"} in ${y.structures[0].name || "structure"}`,
        badge: null,
        element: x,
        point: () => {
        }
      });
    }
    let h = null;
    const C = (x) => {
      h !== x && (v.replaceChildren(x), h = x);
    }, S = Wn(jh), u = [], p = (x) => {
      u.forEach((M, P) => M.setAttribute("aria-pressed", String(P === x))), $[x].point(), C($[x].element);
    }, b = (x) => {
      S.set($[x].key), p(x);
    };
    $.forEach((x, M) => {
      const P = po(`${eo.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      P.appendChild(
        T("span", `font-weight:700;color:${j.textPrimary};`, x.title)
      ), P.appendChild(
        T(
          "span",
          `font-size:${Y.small};color:${j.textMuted};`,
          x.subtitle
        )
      ), x.badge && P.appendChild(x.badge), P.onclick = () => b(M), u.push(P), l.appendChild(P);
    });
    const k = $.findIndex((x) => x.key === S.get());
    p(k < 0 ? 0 : k);
    const A = Xr(a, (x) => {
      a.style.flexDirection = x ? "column" : "row", d.orient(x), c.style.maxHeight = x ? Lh : "none", c.style.borderBottom = x ? `1px solid ${j.splitBorder}` : "none", l.style.flexDirection = x ? "row" : "column", l.style.flexWrap = x ? "wrap" : "nowrap", h?.resize?.();
    });
    return {
      onResize: () => h?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        A(), h?.remove();
      }
    };
  }
}
Ne("gufe-chemical-system", Bh);
const qs = 210, Uh = "42%", Ln = { min: 150, max: 460 };
function Hh(e, t) {
  const n = Pe(t, e.stateA, "ChemicalSystemViz"), r = Pe(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: xo(t, o) };
}
const Ao = {
  unchanged: j.diffUnchanged,
  changed: j.diffChanged,
  added: j.diffAdded,
  removed: j.diffRemoved
};
function Kh(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Gh(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Wh(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Ir(e, t, n) {
  const r = T(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${Z.md};padding:5px ${Z.lg};border-radius:${be.md};background:${j.cardBg};border:1px solid ${j.cardBorder};`
  );
  n && r.appendChild(
    T(
      "span",
      `flex:0 0 auto;font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;color:${j.textMuted2};`,
      n
    )
  );
  const o = Wh(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Y.body};color:${j.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? j.cardBorder : Ao[t];
  const i = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:600;color:${j.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Xn(o.type)), r;
}
function Jh(e, t, n, r) {
  const o = T("div", `display:flex;flex-direction:column;gap:${Z.sm};min-width:0;`), i = T("div", `display:flex;align-items:center;gap:${Z.md};min-width:0;`);
  i.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Ao[t]};`)
  );
  const s = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:${fe.bold};color:${j.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Ir(n, t, null)), o) : (o.appendChild(Ir(n, t, "A")), o.appendChild(Ir(r, t, "B")), o);
}
function Yh(e, t) {
  const n = Ke(t, e.componentA), r = Ke(t, e.componentB);
  return `${n ? et(n) : "A"} to ${r ? et(r) : "B"}`;
}
function Vs(e) {
  return T(
    "div",
    `font-weight:${fe.bold};font-size:${Y.heading};color:${j.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Bs(e, t) {
  const n = T("div", `display:flex;align-items:baseline;gap:${Z.md};min-width:0;font-size:${Y.small};`);
  return n.appendChild(T("span", `flex:0 0 auto;color:${j.textMuted};`, e)), n.appendChild(
    T("span", `min-width:0;font-weight:${fe.bold};color:${j.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class Xh extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = St(n), o = Pe(r, n.stateA, "ChemicalSystemViz"), i = Pe(r, n.stateB, "ChemicalSystemViz"), s = Pe(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const p = T("div", "padding:12px 14px;flex-shrink:0;");
      return p.appendChild(Vs(c)), t.appendChild(p), t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = Gh(o, i), d = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(d);
    const m = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${j.panelBg};`
    );
    d.appendChild(m);
    let v = null;
    const g = Da(m, {
      initial: qs,
      min: Ln.min,
      max: Ln.max,
      maxShare: Uh,
      remember: jt("transformation.statesWidth", qs, Ln.min, Ln.max),
      label: "Resize the state diff",
      // The mapping is two 3D viewers, and a viewer sizes its canvas once.
      onResize: () => v?.resize?.()
    });
    d.appendChild(g.element);
    const y = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    d.appendChild(y);
    const _ = T("div", `display:flex;flex-direction:column;gap:${Z.md};min-width:0;`);
    _.appendChild(Vs(c)), _.appendChild(Bs("protocol", s?.gufe_type || s?.name || Je)), _.appendChild(Bs("mappings", String(a.length))), m.appendChild(_);
    const f = T("div", `display:flex;flex-direction:column;gap:${Z.xs};`);
    for (const [p, b] of [
      ["State A", o],
      ["State B", i]
    ])
      f.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.06em;text-transform:uppercase;color:${j.textMuted2};overflow-wrap:anywhere;`,
          `${p}${b.name ? ` - ${b.name}` : ""}`
        )
      );
    m.appendChild(f);
    const $ = /* @__PURE__ */ new Set();
    for (const p of l) {
      const b = o.components?.[p], k = i.components?.[p], A = Kh(b, k);
      $.add(A), m.appendChild(
        Jh(
          p,
          A,
          Ke(r, b),
          Ke(r, k)
        )
      );
    }
    if ($.size > 1) {
      const p = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${Z.lg} 12px;padding-top:${Z.sm};font-size:${Y.small};color:${j.textMuted};`
      );
      for (const b of ["unchanged", "changed", "added", "removed"])
        $.has(b) && p.appendChild(Ze(b, "", Ao[b]));
      m.appendChild(p);
    }
    const h = T("div", vc, "Atom mapping");
    y.appendChild(h);
    const C = Xr(t, (p) => {
      d.style.flexDirection = p ? "column" : "row", g.orient(p), m.style.maxHeight = p ? "45%" : "none", m.style.borderBottom = p ? `1px solid ${j.splitBorder}` : "none", h.style.display = p ? "block" : "none";
    });
    if (!a.length)
      return y.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: C };
    const S = document.createElement("gufe-atom-mapping");
    S.style.cssText = "flex:1;min-height:0;min-width:0;";
    const u = (p) => {
      S.payload = ac(a[p], r);
    };
    if (u(0), a.length > 1) {
      const p = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Y.small};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};color:${j.textMuted};`
      );
      p.appendChild(
        rr(
          a.map((b, k) => ({
            id: String(k),
            label: b.name || Yh(b, r)
          })),
          "0",
          (b) => u(Number(b))
        )
      ), y.appendChild(p);
    }
    return y.appendChild(S), v = S, {
      onResize: () => S.resize?.(),
      cleanup: () => {
        C(), S.remove();
      }
    };
  }
}
Ne("gufe-transformation", Xh);
const at = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Us = (e) => e ? at.depictedHeight : at.height, ze = { pad: 6, size: 122, radius: 6, inset: 4 }, Hs = 200, Mt = {
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
}, Zh = "6 4", qe = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Qh = 7, em = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], tm = (e) => Qa(em, e), Vn = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, Ks = (e, t) => {
  const n = t ? Vn.selectedWidth : Vn.width;
  return Math.max(Vn.min, Math.min(n, n * e));
}, jr = { width: 3, selectedWidth: 4.5, min: 1.25 }, Gs = (e, t) => {
  const n = t ? jr.selectedWidth : jr.width;
  return Math.max(jr.min, Math.min(n, n * e));
}, bt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Tt = { initial: 0.56, min: 0.25, max: 0.78 }, Ws = { x: at.width / 2, y: at.depictedHeight / 2 }, nm = 1.4;
function rm(e, t, n, r, o, i, s, a) {
  const c = i.trim().toLowerCase();
  if (!o.size && !c && s === "" && a === null) return null;
  const l = c.length > 0 || s !== "" || a !== null, d = /* @__PURE__ */ new Set();
  e.forEach((v, g) => {
    const y = l && (!c || n[g].includes(c)) && (!s || r[g] === s) && (!a || a.has(g));
    (o.has(v["gufe-key"]) || y) && d.add(v["gufe-key"]);
  });
  const m = /* @__PURE__ */ new Set();
  return t.forEach((v, g) => {
    d.has(v.from["gufe-key"]) && d.has(v.to["gufe-key"]) && m.add(g);
  }), { nodes: d, edges: m };
}
const Jn = et;
function uc(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Ke(t, r);
    if (!o) {
      n.add("missing");
      continue;
    }
    n.add(
      o.type === "UnknownComponentViz" ? o.gufe_type : o.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort();
}
const om = (e, t) => uc(e, t).join(" + ");
function im(e, t) {
  const n = { fill: le.netNodeFill, stroke: le.netNodeStroke }, r = e.map((s) => om(s, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > le.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const i = new Map(
    o.map((s, a) => [s, { fill: le.netGroupFill[a], stroke: le.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (s) => i.get(r[s]) ?? n,
    legend: o.map((s) => [s, i.get(s)])
  };
}
function sm(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Ke(t, o);
    if (!i) continue;
    n.push(et(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function am(e, t) {
  const n = [], r = [], o = /* @__PURE__ */ new Map(), i = e.map((s) => {
    const a = [];
    for (const c of Object.values(s.components ?? {})) {
      const l = Pe(t, c, "SmallMoleculeComponentViz");
      if (!l) continue;
      let d = o.get(c);
      d === void 0 && (d = n.length, o.set(c, d), n.push(l.sdf ?? ""), r.push(l.total_charge ?? 0)), a.push(d);
    }
    return a;
  });
  return { sources: n, charges: r, perNode: i };
}
function cm(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function lm(e) {
  const t = Wn("alchemical-network.composition");
  return Za({
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
      const r = T("div", `display:flex;align-items:center;gap:${Z.md};font-size:${Y.small};color:${j.textMuted};`);
      r.appendChild(T("span", "flex-shrink:0;", "made of"));
      const o = It(
        [{ id: "", label: "anything" }, ...e.compositions.map((i) => ({ id: i, label: i }))],
        "",
        (i) => {
          e.filter.composition = i, n(), e.refresh();
        },
        t
      );
      return o.style.cssText += "flex:1;min-width:0;", e.filter.composition = o.value, r.appendChild(o), [r];
    },
    shows: (n, r) => {
      const o = e.query.text.trim().toLowerCase();
      if (o && !e.haystacks[r].includes(o) || e.filter.composition && e.signatures[r] !== e.filter.composition) return !1;
      const i = e.matched();
      return !(i && !i.has(r));
    },
    row: (n, r) => {
      const o = e.colorOf(r);
      return {
        // The same colour the box on the canvas is drawn in, so a row and a node
        // are recognisably the same thing without reading either label.
        before: T(
          "span",
          `width:10px;height:10px;border-radius:${be.sm};flex-shrink:0;background:${o.fill};border:1px solid ${o.stroke};`
        ),
        name: Jn(n),
        title: `${Jn(n)}
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
function dm(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, i) => {
    if (o.fx !== void 0 && o.fy !== void 0) {
      o.x = o.fx, o.y = o.fy;
      return;
    }
    const s = 2 * Math.PI * i / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(s), o.y = n / 2 + r * Math.sin(s);
  });
}
function um(e, t, n, r) {
  return Wa({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((o) => ({ source: o.from["gufe-key"], target: o.to["gufe-key"] })),
    tickMultiplier: bt.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((s) => s["gufe-key"]).distance(bt.linkDistance).strength(bt.linkStrength)
      ],
      ["charge", o.forceManyBody().strength(bt.chargeStrength)],
      ["center", o.forceCenter(n / 2, r / 2)],
      ["collision", o.forceCollide(bt.collisionRadius).iterations(bt.collisionIterations)]
    ]
  });
}
class fm extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: o, edges: i, unresolved: s, dangling: a } = Ja({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (w) => [w.stateA, w.stateB]
    }), c = (w) => {
      const E = Pe(r, w.protocol, "ProtocolViz");
      return E?.gufe_type || E?.name || "";
    }, l = new Set(i.map(c).filter(Boolean)), d = Yn(n.name || "Alchemical network");
    d.statsEl.appendChild(Ze("systems", String(o.length))), d.statsEl.appendChild(Ze("transformations", String(i.length))), l.size && d.statsEl.appendChild(Ze("protocol", [...l].join(", ")));
    const m = im(o, r), v = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(v);
    let g = () => {
    };
    const y = /* @__PURE__ */ new Set(), _ = { composition: "" }, f = { text: "" };
    let $ = null;
    const h = () => {
      const w = rm(
        o,
        i,
        C,
        m.signatures,
        y,
        f.text,
        _.composition,
        k
      );
      $?.setEmphasis(w?.nodes ?? null, w?.edges ?? null);
    }, C = o.map((w) => sm(w, r)), S = () => Sa(), u = am(o, r), p = Ya(S, u.sources), b = o.map((w, E) => {
      const R = u.perNode[E].find((Q) => u.sources[Q]), V = R === void 0 ? null : u.sources[R], H = uc(w, r);
      return {
        colors: m.colorOf(E),
        composition: H.join(" + "),
        besides: cm(H, V !== null, u.perNode[E].length),
        sdf: V,
        charge: R === void 0 ? 0 : u.charges[R]
      };
    });
    let k = null, A = () => {
    };
    const x = async (w) => {
      const E = await p.run(w);
      return E.status === "superseded" || (k = E.status === "ok" ? new Set(o.flatMap((R, V) => u.perNode[V].some((H) => E.matched.has(H)) ? [V] : [])) : null, A(), h()), E;
    }, M = ko(
      d,
      () => lm({
        nodes: o,
        edges: i,
        haystacks: C,
        signatures: m.signatures,
        colorOf: m.colorOf,
        compositions: m.compositions,
        selected: y,
        filter: _,
        query: f,
        refresh: () => h(),
        matched: () => k,
        match: (w) => x(w),
        mounted: (w) => {
          A = w;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (w) => {
          $?.focusOn(w), U("node", w);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => g(),
        remember: it("alchemical-network.menuOpen", !1),
        extras: Eo
      }
    ), P = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), D = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`), z = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${j.netCanvasBg};`), L = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    L.appendChild(M.panel), L.appendChild(z), P.appendChild(d), P.appendChild(L), v.appendChild(P), v.appendChild(
      ja(v, P, D, {
        min: Tt.min,
        max: Tt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: jt("alchemical-network.canvasShare", Tt.initial, Tt.min, Tt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => g(),
        onOrient: (w) => {
          L.style.flexDirection = w ? "column" : "row", So(M.panel, w);
        }
      })
    ), v.appendChild(D);
    const W = this.#t(D, r);
    if (!o.length)
      return z.appendChild(
        pe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), W.message("Nothing to show."), { cleanup: () => W.cleanup() };
    s && st(
      z,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && st(
      z,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let ne = !1, X = null;
    const re = ro(), G = new Map(o.map((w, E) => [w["gufe-key"], b[E].charge])), O = i.some(
      (w) => (G.get(w.to["gufe-key"]) ?? 0) !== (G.get(w.from["gufe-key"]) ?? 0)
    );
    P.appendChild(this.#e(m.legend, () => $?.reset(), O));
    const U = (w, E) => {
      X = { kind: w, index: E }, W.show(w === "node" ? o[E] : i[E], w), $?.setSelected(X);
    }, I = () => {
      const w = re.start(), E = z.clientWidth || 800, R = z.clientHeight || 600;
      dm(o, E, R);
      const V = () => {
        w() && ($?.cleanup(), z.querySelectorAll("svg").forEach((H) => H.remove()), $ = this.#n(z, o, i, E, R, b, S, U), $.setSelected(X), h());
      };
      if (ne) {
        V();
        return;
      }
      um(o, i, E, R).then((H) => {
        w() && (H || (ne = !0, st(z, "d3 could not be loaded - showing the circular layout instead")), V());
      }, V);
    };
    return g = I, I(), U("node", 0), {
      onResize: () => I(),
      cleanup: () => {
        re.stop(), $?.cleanup(), $ = null, W.cleanup();
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
    const o = T("div", ia);
    if (o.appendChild(vo(n, "Reset pan and zoom")), r) {
      const i = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(T("span", `width:24px;height:0;border-top:2px dashed ${j.netEdgeLine};flex-shrink:0;`)), i.appendChild(T("span", `font-size:${Y.small};color:${j.textMuted};`, "net charge change")), o.appendChild(i);
    }
    if (!t.length) return o;
    o.appendChild(T("span", `font-size:${Y.small};color:${j.textMuted};`, "systems made of"));
    for (const [i, s] of t) {
      const a = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      a.appendChild(
        T(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), a.appendChild(
        T("span", `font-size:${Y.small};color:${j.textPrimary};overflow-wrap:anywhere;`, i)
      ), o.appendChild(a);
    }
    return o;
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
    const r = rc(t);
    return {
      ...r,
      show(o, i) {
        let s;
        if (i === "node")
          s = Ih(Ga(o), n);
        else {
          const { index: a, from: c, to: l, ...d } = o;
          s = Hh(d, n);
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
  #n(t, n, r, o, i, s, a, c) {
    const l = ae("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const d = ae("g");
    l.appendChild(d);
    const m = ae("g"), v = ae("g");
    d.append(m, v);
    let g = () => {
    };
    const y = Ka(l, d, {
      bounds: () => Ha(n, Ws.x, Ws.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (R, V, H) => g(R, V, H)
    }), _ = (R, V) => {
      y.wasPan() || c(R, V);
    }, f = [], $ = [], h = new Map(n.map((R, V) => [R["gufe-key"], s[V].charge])), C = (R) => (h.get(R.to["gufe-key"]) ?? 0) - (h.get(R.from["gufe-key"]) ?? 0);
    r.forEach((R, V) => {
      const H = C(R), Q = ae("line", {
        x1: R.from.x,
        y1: R.from.y,
        x2: R.to.x,
        y2: R.to.y,
        stroke: le.netEdgeLine,
        "stroke-width": Ks(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
        ...H ? { "stroke-dasharray": Zh } : {}
      });
      bs(
        Q,
        (R.name || "transformation") + (H ? ` - net charge change ${ot(H)}` : "")
      ), Q.addEventListener("click", () => _("edge", V)), m.appendChild(Q), f.push(Q);
      const ee = ae("line", {
        x1: R.from.x,
        y1: R.from.y,
        x2: R.to.x,
        y2: R.to.y,
        stroke: "transparent",
        "stroke-width": Vn.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      ee.addEventListener("click", () => _("edge", V)), m.appendChild(ee), $.push(ee);
    });
    const S = n.map(() => []), u = new Map(n.map((R, V) => [R, V]));
    r.forEach((R, V) => {
      const H = u.get(R.from), Q = u.get(R.to);
      H !== void 0 && S[H].push(V), Q !== void 0 && Q !== H && S[Q].push(V);
    });
    const p = [], b = [], k = [], A = [], x = [], M = [], P = [], D = [], z = [];
    n.forEach((R, V) => {
      const H = s[V], Q = Us(H.sdf), ee = ae("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${R.x},${R.y})`
      });
      k.push(ee);
      const N = ae("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -Q / 2,
        width: at.width,
        height: Q,
        rx: at.radius,
        fill: H.colors.fill,
        stroke: H.colors.stroke,
        "stroke-width": Gs(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (ee.appendChild(N), p.push(N), b.push(H.colors.stroke), H.sdf) {
        const J = ae("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -Q / 2 + ze.pad,
          width: ze.size,
          height: ze.size,
          rx: ze.radius,
          fill: Vr(),
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
          ue.textContent = ot(H.charge), ee.appendChild(ue), P.push(ue);
        } else
          P.push(null);
        const te = ae("g", { transform: `translate(0,${-Q / 2 + ze.pad + ze.size / 2})` }), oe = ae("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        te.appendChild(oe), ee.appendChild(te), D.push(te), z.push(oe);
      } else
        M.push(null), D.push(null), z.push(null), P.push(null);
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
      F.textContent = qn(Jn(R), qe.nameChars), ee.appendChild(F), A.push(F);
      const K = ae("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: le.netInitials,
        "font-size": qe.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      K.textContent = qn(H.composition, qe.subChars), ee.appendChild(K), x.push(K), bs(ee, `${Jn(R)} - ${H.composition}`), v.appendChild(ee);
    });
    const L = (R) => {
      const V = n[R];
      k[R].setAttribute("transform", `translate(${V.x},${V.y})`);
      for (const H of S[R])
        for (const Q of [f[H], $[H]])
          r[H].from === V && (Q.setAttribute("x1", String(V.x)), Q.setAttribute("y1", String(V.y))), r[H].to === V && (Q.setAttribute("x2", String(V.x)), Q.setAttribute("y2", String(V.y)));
    }, W = new tc(), ne = lr("cpk"), X = (R, V) => {
      if (!W.wants(V)) return;
      const H = z[V], Q = s[V].sdf;
      if (!H || !Q) return;
      const ee = _o(R, Q, Hs, Ae.layout, void 0, ne);
      if (!ee || !oc(H, ee, Hs, ze.size - ze.inset * 2)) {
        W.refused(V);
        return;
      }
      W.drew(V);
    }, re = (R, V, H) => {
      const Q = s[R], ee = V && W.has(R), N = (we) => we * H >= Qh, F = N(qe.nameSize), K = N(qe.subSize);
      A[R].setAttribute("display", F ? "inline" : "none"), x[R].setAttribute("display", K ? "inline" : "none"), M[R]?.setAttribute("display", ee ? "inline" : "none"), z[R]?.setAttribute("display", ee ? "inline" : "none");
      const J = Us(Q.sdf), te = -J / 2 + ze.pad, oe = P[R];
      oe && (oe.setAttribute("x", String(ee ? at.width / 2 - Mt.inset : 0)), oe.setAttribute(
        "y",
        String(ee ? -J / 2 + Mt.inset : -J * Mt.bigAt)
      ), oe.setAttribute("font-size", String(ee ? Mt.fontSize : Mt.bigFontSize)), oe.setAttribute("font-weight", ee ? fe.normal : fe.bold)), M[R]?.setAttribute("y", String(te)), D[R]?.setAttribute("transform", `translate(0,${te + ze.size / 2})`);
      const ue = J / 2 - qe.bottom;
      A[R].setAttribute("y", String(ee ? ue - (K ? qe.gap : 0) : -2)), x[R].setAttribute("y", String(ee ? ue : 14)), x[R].textContent = qn(ee ? Q.besides : Q.composition, qe.subChars);
    };
    let G = null, O = 1, U = null, I = null;
    const w = () => {
      p.forEach((R, V) => {
        const H = U === V;
        R.setAttribute("stroke", H ? le.cardBorderActive : b[V]), R.setAttribute("stroke-width", String(Gs(O, H)));
      }), f.forEach((R, V) => {
        const H = I === V;
        R.setAttribute("stroke", H ? le.netHaloColor : le.netEdgeLine), R.setAttribute("stroke-width", String(Ks(O, H)));
      });
    };
    return g = (R, V, H) => {
      const Q = tm(R);
      G = Q, l.setAttribute("data-detail", Q.id), O = R, w();
      for (let N = 0; N < n.length; N++) re(N, Q.structure, R);
      if (!Q.structure) return;
      const ee = nc(
        n,
        { scale: R, tx: V, ty: H },
        { width: o, height: i },
        (N) => !!s[N].sdf && W.wants(N)
      );
      ee.length && a().then((N) => {
        if (!(!N || G !== Q))
          for (const F of ee)
            X(N, F), re(F, !0, R);
      }).catch(() => {
      });
    }, ec(k, n, y, { moved: L, clicked: (R) => c("node", R) }), y.fit(), {
      setSelected(R) {
        U = R?.kind === "node" ? R.index : null, I = R?.kind === "edge" ? R.index : null, w();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(R, V) {
        k.forEach((H, Q) => {
          const ee = !R || R.has(n[Q]["gufe-key"]);
          H.setAttribute("opacity", ee ? "1" : String(Ft.node));
        }), f.forEach((H, Q) => {
          const ee = !V || V.has(Q);
          H.setAttribute("opacity", ee ? "1" : String(Ft.edge));
        });
      },
      focusOn(R) {
        const V = n[R];
        V && y.centreOn(V.x, V.y, nm);
      },
      reset: y.reset,
      cleanup: y.cleanup
    };
  }
}
Ne("gufe-alchemical-network", fm);
class pm extends Re {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Yn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Xn(n.gufe_type)), t.appendChild(r);
    const o = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = to();
    return i.style.maxWidth = "460px", i.appendChild(Hn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Hn("Name", n.name)), i.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Y.small};line-height:1.6;color:${j.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Ne("gufe-protocol", pm);
function hm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Js(e, t = !1) {
  const n = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.xl};padding:${Z.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${j.splitBorder};`)
  );
  return n.appendChild(T("div", Dr, e)), n;
}
function Bn(e) {
  return T(
    "div",
    `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`,
    e
  );
}
function Ys(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${Z.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Ve.plain}${Ve.outline}font-family:${Y.mono};font-size:${Y.body};`,
      e
    )
  ), n.appendChild(Bn(t)), n;
}
class mm extends Re {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = to();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = Js("Solvent", !0), s = T("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = T("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = T(
      "div",
      `font-family:${Y.mono};font-size:${Y.display};font-weight:${fe.bold};line-height:1.1;color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Bn("SMILES")), s.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const $ = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      $.appendChild(
        T(
          "div",
          `font-size:${Y.body};color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), $.appendChild(Bn("Name")), s.appendChild($);
    }
    i.appendChild(s), o.appendChild(i);
    const d = Js("Ions"), m = T("div", `display:flex;align-items:flex-end;gap:${Z.xxl};flex-wrap:wrap;`);
    n.positive_ion && m.appendChild(Ys(n.positive_ion, "cation")), n.negative_ion && m.appendChild(Ys(n.negative_ion, "anion"));
    const { value: v, unit: g } = hm(n.ion_concentration), y = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), _ = T("div", `display:flex;align-items:baseline;gap:${Z.md};justify-content:flex-end;`);
    _.appendChild(
      T(
        "div",
        `font-size:${Y.display};font-weight:${fe.bold};line-height:1;color:${j.titleColor};`,
        v
      )
    ), g && (_.appendChild(document.createTextNode(" ")), _.appendChild(T("div", `font-size:${Y.body};color:${j.textMuted};`, g))), y.appendChild(_), y.appendChild(Bn("Ion concentration")), m.appendChild(y), d.appendChild(m);
    const f = n.neutralize;
    return d.appendChild(
      T(
        "span",
        `${Ve.plain}align-self:flex-start;font-weight:${fe.bold};` + (f ? `background:${j.okBg};color:${j.okFg};` : `${Ve.outline}color:${j.textMuted};`),
        f ? "Neutralized" : "Not neutralized"
      )
    ), d.appendChild(
      T(
        "div",
        Ec,
        f ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), o.appendChild(d), r.appendChild(o), {};
  }
}
Ne("gufe-solvent", mm);
class gm extends Re {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Yn(n.name || "Unnamed component");
    r.statsEl.appendChild(Xn(n.gufe_type)), t.appendChild(r);
    const o = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = to();
    return i.style.maxWidth = "460px", i.appendChild(
      T(
        "div",
        `font-size:${Y.heading};font-weight:600;padding-bottom:6px;color:${j.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      T(
        "div",
        `font-size:${Y.body};line-height:1.6;padding-bottom:10px;color:${j.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(Hn("Name", n.name || "(unnamed)")), i.appendChild(Hn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Ne("gufe-unknown-component", gm);
ea();
typeof globalThis < "u" && (globalThis.alchemyViz = { settings: ku, reset: xu });
export {
  ym as PAYLOAD_TYPES,
  fo as VIEW_TAGS
};
