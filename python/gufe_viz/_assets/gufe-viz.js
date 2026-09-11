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
const kt = (e) => e.toLocaleString("en-US"), Je = "-", jn = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Hs(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const oc = 460;
function Gr(e, t, n = oc) {
  let r = null;
  return Hs(e, (i) => {
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
function ic() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const xo = "data-gufe-theme";
function Ks() {
  return ic() ? "dark" : "light";
}
let le = Ue[Ks()];
const Gs = "--gufe-", Ws = Object.keys(Ue.light).filter(
  (e) => e !== "viewerBg" && typeof Ue.light[e] == "string"
), j = Object.fromEntries(Ws.map((e) => [e, `var(${Gs}${e})`])), ur = (e) => Ws.map((t) => `${Gs}${t}:${e[t]};`).join("");
function sc() {
  return [
    `:root{color-scheme:light dark;${ur(Ue.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${xo}="light"]){${ur(Ue.dark)}}}`,
    `:root[${xo}="dark"]{${ur(Ue.dark)}}`,
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
const Po = "gufe-viz-theme";
function Js() {
  if (typeof document > "u" || document.getElementById(Po)) return;
  const e = document.createElement("style");
  e.id = Po, e.textContent = sc(), document.head.appendChild(e);
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
}, Ao = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${j.btnFg};border:1px solid ${j.btnBorder};padding:${Z.sm} 9px;font-size:${Y.small};font-weight:${fe.bold};border-radius:${be.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, Ys = `background:${j.selectBg};color:${j.textPrimary};border:1px solid ${j.selectBorder};border-radius:${be.md};padding:${Z.sm} ${Z.lg};font-size:${Y.body};cursor:pointer;font-family:inherit;`, Xs = `${Ys}width:100%;box-sizing:border-box;cursor:text;`, Zs = "24px", ac = `display:flex;align-items:flex-start;gap:12px;padding:9px ${Z.xxl};flex-shrink:0;line-height:${Zs};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};`, qn = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Qs = `display:flex;flex-direction:column;gap:${Z.lg};flex:1;min-width:var(${Xe.min},${qn.min});max-width:var(${Xe.max},${qn.max});box-sizing:border-box;padding:${Z.xl};min-height:0;overflow-y:auto;background:${j.panelBg};border:0 solid ${j.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, cc = "45%", lc = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", ea = `display:flex;align-items:center;gap:${Z.xl};flex-wrap:wrap;padding:${Z.lg} ${Z.xxl};flex-shrink:0;background:${j.toolbarBg};border-top:1px solid ${j.toolbarBorder};`, dc = `flex-shrink:0;padding:${Z.sm} ${Z.xl};font-size:${Y.heading};font-weight:${fe.bold};color:${j.labelFg};background:${j.labelBg};`, Wr = `position:absolute;top:${Z.md};left:${Z.md};z-index:10;pointer-events:none;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${Z.xs} ${Z.lg};border-radius:${be.md};font-size:${Y.heading};font-weight:${fe.bold};color:${j.labelFg};background:${j.labelBg};`, uc = `padding:${Z.xs} ${Z.lg};border-radius:${be.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${j.labelFg};background:${j.labelBg};`, fc = `position:absolute;top:${Z.lg};left:${Z.lg};z-index:15;display:flex;align-items:center;gap:${Z.md};min-width:0;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});`, pc = "42px", hc = `display:flex;flex-direction:column;gap:${Z.xs};padding:${Z.xxl} 18px;border-radius:${be.xl};background:${j.cardBg};border:1px solid ${j.cardBorder};`, Jr = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${Z.sm};padding:${Z.lg} ${Z.xl};text-align:left;border-radius:${be.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Y.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${Z.md};padding:5px ${Z.lg};border:1px solid;border-radius:${Z.md};text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;color:${j.textPrimary};`,
  className: "gufe-pick"
}, mc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${Z.xl};border-radius:${be.md};font-size:${Y.small};line-height:1.5;max-width:260px;background:${j.tooltipBg};border:1px solid ${j.tooltipBorder};color:${j.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, ta = `position:absolute;bottom:${Z.xl};right:${Z.xl};display:flex;gap:${Z.sm};padding:${Z.sm};border-radius:${be.md};z-index:10;background:${j.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, gc = `font-family:${Y.mono};font-size:${Y.small};line-height:1.7;color:${j.textMuted};`, Fr = `font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`, Ve = {
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
}, yc = `font-size:${Y.small};line-height:1.6;color:${j.textMuted2};`;
function Ze(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = T("span");
  return i.innerHTML = `${Te(e)} <b style="color:${Ee.primary};">${Te(t)}</b>`, r.appendChild(i), r;
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
function Gn(e) {
  const t = T("div", ac);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${fe.bold};font-size:${Y.title};color:${Ee.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Y.small};color:${Ee.muted};`
  ), t.textEl = T("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = T("div", `display:flex;align-items:center;height:${Zs};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Vn(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${Ee.faint};`,
      e
    )
  );
  const i = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Ee.primary};` + (n ? `font-family:${Y.mono};font-size:${Y.small};` : `font-size:${Y.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Wn(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${be.xl};font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.04em;white-space:nowrap;background:${j.badgeBg};color:${j.badgeFg};`,
    e
  );
}
function Yr() {
  return T("div", hc);
}
function na() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const zr = "data-gufe-hide-name";
function Xr(e) {
  return !e.closest(`[${zr}]`);
}
const $c = ["debug", "gufe-debug"], vc = "debug", bc = "GUFE_VIZ_DEBUG";
function wc() {
  return !!globalThis[bc];
}
function _c() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return $c.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Sc(e) {
  return e?.hasAttribute?.(vc) ? !0 : wc() || _c();
}
function Cc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function kc(e, t, n) {
  if (!Sc(n)) return;
  const r = Cc(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const ra = "GUFE_VIZ_VIEW_STATE";
function Ec(e) {
  const t = globalThis[ra];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
function Zr() {
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
const xc = 150, Ro = "data-gufe-shell";
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
    Js(), this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Ro}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = j.appBg, this.style.color = j.textPrimary, this.style.fontFamily = Y.family, typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), xc);
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
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${j.appBg};`
    ), this.#n.setAttribute(Ro, ""), this.appendChild(this.#n), this.#n;
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
function Ne(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, fr = {}, je = {}, tt = {}, pr = {}, hr = {}, mr = {}, No;
function Bn() {
  return No || (No = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(p) {
        if (super(), !e.IDENTIFIER.test(p))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = p;
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
      constructor(p) {
        super(), this._items = typeof p == "string" ? [p] : p;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const p = this._items[0];
        return p === "" || p === '""';
      }
      get str() {
        var p;
        return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((C, _) => `${C}${_}`, "");
      }
      get names() {
        var p;
        return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((C, _) => (_ instanceof n && (C[_.str] = (C[_.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i(v, ...p) {
      const C = [v[0]];
      let _ = 0;
      for (; _ < p.length; )
        a(C, p[_]), C.push(v[++_]);
      return new r(C);
    }
    e._ = i;
    const o = new r("+");
    function s(v, ...p) {
      const C = [g(v[0])];
      let _ = 0;
      for (; _ < p.length; )
        C.push(o), a(C, p[_]), C.push(o, g(v[++_]));
      return c(C), new r(C);
    }
    e.str = s;
    function a(v, p) {
      p instanceof r ? v.push(...p._items) : p instanceof n ? v.push(p) : v.push(m(p));
    }
    e.addCodeArg = a;
    function c(v) {
      let p = 1;
      for (; p < v.length - 1; ) {
        if (v[p] === o) {
          const C = l(v[p - 1], v[p + 1]);
          if (C !== void 0) {
            v.splice(p - 1, 3, C);
            continue;
          }
          v[p++] = "+";
        }
        p++;
      }
    }
    function l(v, p) {
      if (p === '""')
        return v;
      if (v === '""')
        return p;
      if (typeof v == "string")
        return p instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${v.slice(0, -1)}${p}"` : p[0] === '"' ? v.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !(v instanceof n))
        return `"${v}${p.slice(1)}`;
    }
    function d(v, p) {
      return p.emptyStr() ? v : v.emptyStr() ? p : s`${v}${p}`;
    }
    e.strConcat = d;
    function m(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : g(Array.isArray(v) ? v.join(",") : v);
    }
    function w(v) {
      return new r(g(v));
    }
    e.stringify = w;
    function g(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = g;
    function $(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : i`[${v}]`;
    }
    e.getProperty = $;
    function S(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function f(v) {
      return new r(v.toString());
    }
    e.regexpCode = f;
  })(mr)), mr;
}
var gr = {}, Mo;
function To() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Bn();
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
        var d, m;
        if (!((m = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null || m === void 0) && m.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(l, d) {
        super(d), this.prefix = l;
      }
      setValue(l, { property: d, itemIndex: m }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(d)}[${m}]`;
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
        var m;
        if (d.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const w = this.toName(l), { prefix: g } = w, $ = (m = d.key) !== null && m !== void 0 ? m : d.ref;
        let S = this._values[g];
        if (S) {
          const p = S.get($);
          if (p)
            return p;
        } else
          S = this._values[g] = /* @__PURE__ */ new Map();
        S.set($, w);
        const f = this._scope[g] || (this._scope[g] = []), v = f.length;
        return f[v] = d.ref, w.setValue(d, { property: g, itemIndex: v }), w;
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
        return this._reduceValues(l, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, d, m);
      }
      _reduceValues(l, d, m = {}, w) {
        let g = t.nil;
        for (const $ in l) {
          const S = l[$];
          if (!S)
            continue;
          const f = m[$] = m[$] || /* @__PURE__ */ new Map();
          S.forEach((v) => {
            if (f.has(v))
              return;
            f.set(v, r.Started);
            let p = d(v);
            if (p) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${C} ${v} = ${p};${this.opts._n}`;
            } else if (p = w?.(v))
              g = (0, t._)`${g}${p}${this.opts._n}`;
            else
              throw new n(v);
            f.set(v, r.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = a;
  })(gr)), gr;
}
var Oo;
function ie() {
  return Oo || (Oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Bn(), n = /* @__PURE__ */ To();
    var r = /* @__PURE__ */ Bn();
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
    var i = /* @__PURE__ */ To();
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
      optimizeNames(b, k) {
        return this;
      }
    }
    class s extends o {
      constructor(b, k, P) {
        super(), this.varKind = b, this.name = k, this.rhs = P;
      }
      render({ es5: b, _n: k }) {
        const P = b ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${P} ${this.name}${V};` + k;
      }
      optimizeNames(b, k) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = I(this.rhs, b, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(b, k, P) {
        super(), this.lhs = b, this.rhs = k, this.sideEffects = P;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, k) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = I(this.rhs, b, k), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(b, this.rhs);
      }
    }
    class c extends a {
      constructor(b, k, P, V) {
        super(b, P, V), this.op = k;
      }
      render({ _n: b }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + b;
      }
    }
    class l extends o {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `${this.label}:` + b;
      }
    }
    class d extends o {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `break${this.label ? ` ${this.label}` : ""};` + b;
      }
    }
    class m extends o {
      constructor(b) {
        super(), this.error = b;
      }
      render({ _n: b }) {
        return `throw ${this.error};` + b;
      }
      get names() {
        return this.error.names;
      }
    }
    class w extends o {
      constructor(b) {
        super(), this.code = b;
      }
      render({ _n: b }) {
        return `${this.code};` + b;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(b, k) {
        return this.code = I(this.code, b, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class g extends o {
      constructor(b = []) {
        super(), this.nodes = b;
      }
      render(b) {
        return this.nodes.reduce((k, P) => k + P.render(b), "");
      }
      optimizeNodes() {
        const { nodes: b } = this;
        let k = b.length;
        for (; k--; ) {
          const P = b[k].optimizeNodes();
          Array.isArray(P) ? b.splice(k, 1, ...P) : P ? b[k] = P : b.splice(k, 1);
        }
        return b.length > 0 ? this : void 0;
      }
      optimizeNames(b, k) {
        const { nodes: P } = this;
        let V = P.length;
        for (; V--; ) {
          const H = P[V];
          H.optimizeNames(b, k) || (L(b, H.names), P.splice(V, 1));
        }
        return P.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, k) => R(b, k.names), {});
      }
    }
    class $ extends g {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class S extends g {
    }
    class f extends $ {
    }
    f.kind = "else";
    class v extends $ {
      constructor(b, k) {
        super(k), this.condition = b;
      }
      render(b) {
        let k = `if(${this.condition})` + super.render(b);
        return this.else && (k += "else " + this.else.render(b)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const b = this.condition;
        if (b === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const P = k.optimizeNodes();
          k = this.else = Array.isArray(P) ? new f(P) : P;
        }
        if (k)
          return b === !1 ? k instanceof v ? k : k.nodes : this.nodes.length ? this : new v(W(b), k instanceof v ? [k] : k.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, k) {
        var P;
        if (this.else = (P = this.else) === null || P === void 0 ? void 0 : P.optimizeNames(b, k), !!(super.optimizeNames(b, k) || this.else))
          return this.condition = I(this.condition, b, k), this;
      }
      get names() {
        const b = super.names;
        return D(b, this.condition), this.else && R(b, this.else.names), b;
      }
    }
    v.kind = "if";
    class p extends $ {
    }
    p.kind = "for";
    class C extends p {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, k) {
        if (super.optimizeNames(b, k))
          return this.iteration = I(this.iteration, b, k), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class _ extends p {
      constructor(b, k, P, V) {
        super(), this.varKind = b, this.name = k, this.from = P, this.to = V;
      }
      render(b) {
        const k = b.es5 ? n.varKinds.var : this.varKind, { name: P, from: V, to: H } = this;
        return `for(${k} ${P}=${V}; ${P}<${H}; ${P}++)` + super.render(b);
      }
      get names() {
        const b = D(super.names, this.from);
        return D(b, this.to);
      }
    }
    class u extends p {
      constructor(b, k, P, V) {
        super(), this.loop = b, this.varKind = k, this.name = P, this.iterable = V;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, k) {
        if (super.optimizeNames(b, k))
          return this.iterable = I(this.iterable, b, k), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class h extends $ {
      constructor(b, k, P) {
        super(), this.name = b, this.args = k, this.async = P;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    h.kind = "func";
    class y extends g {
      render(b) {
        return "return " + super.render(b);
      }
    }
    y.kind = "return";
    class x extends $ {
      render(b) {
        let k = "try" + super.render(b);
        return this.catch && (k += this.catch.render(b)), this.finally && (k += this.finally.render(b)), k;
      }
      optimizeNodes() {
        var b, k;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(b, k) {
        var P, V;
        return super.optimizeNames(b, k), (P = this.catch) === null || P === void 0 || P.optimizeNames(b, k), (V = this.finally) === null || V === void 0 || V.optimizeNames(b, k), this;
      }
      get names() {
        const b = super.names;
        return this.catch && R(b, this.catch.names), this.finally && R(b, this.finally.names), b;
      }
    }
    class E extends $ {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    E.kind = "catch";
    class A extends $ {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    A.kind = "finally";
    class M {
      constructor(b, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = b, this._scope = new n.Scope({ parent: b }), this._nodes = [new S()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(b) {
        return this._scope.name(b);
      }
      // reserves unique name in the external scope
      scopeName(b) {
        return this._extScope.name(b);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(b, k) {
        const P = this._extScope.value(b, k);
        return (this._values[P.prefix] || (this._values[P.prefix] = /* @__PURE__ */ new Set())).add(P), P;
      }
      getScopeValue(b, k) {
        return this._extScope.getValue(b, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(b) {
        return this._extScope.scopeRefs(b, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(b, k, P, V) {
        const H = this._scope.toName(k);
        return P !== void 0 && V && (this._constants[H.str] = P), this._leafNode(new s(b, H, P)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(b, k, P) {
        return this._def(n.varKinds.const, b, k, P);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(b, k, P) {
        return this._def(n.varKinds.let, b, k, P);
      }
      // `var` declaration with optional assignment
      var(b, k, P) {
        return this._def(n.varKinds.var, b, k, P);
      }
      // assignment code
      assign(b, k, P) {
        return this._leafNode(new a(b, k, P));
      }
      // `+=` code
      add(b, k) {
        return this._leafNode(new c(b, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(b) {
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new w(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const k = ["{"];
        for (const [P, V] of b)
          k.length > 1 && k.push(","), k.push(P), (P !== V || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, V));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, k, P) {
        if (this._blockNode(new v(b)), k && P)
          this.code(k).else().code(P).endIf();
        else if (k)
          this.code(k).endIf();
        else if (P)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new v(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, f);
      }
      _for(b, k) {
        return this._blockNode(b), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, k) {
        return this._for(new C(b), k);
      }
      // `for` statement for a range of values
      forRange(b, k, P, V, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(b);
        return this._for(new _(H, Q, k, P), () => V(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, k, P, V = n.varKinds.const) {
        const H = this._scope.toName(b);
        if (this.opts.es5) {
          const Q = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (ee) => {
            this.var(H, (0, t._)`${Q}[${ee}]`), P(H);
          });
        }
        return this._for(new u("of", V, H, k), () => P(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, k, P, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${k})`, P);
        const H = this._scope.toName(b);
        return this._for(new u("in", V, H, k), () => P(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
      }
      // `label` statement
      label(b) {
        return this._leafNode(new l(b));
      }
      // `break` statement
      break(b) {
        return this._leafNode(new d(b));
      }
      // `return` statement
      return(b) {
        const k = new y();
        if (this._blockNode(k), this.code(b), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(y);
      }
      // `try` statement
      try(b, k, P) {
        if (!k && !P)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new x();
        if (this._blockNode(V), this.code(b), k) {
          const H = this.name("e");
          this._currNode = V.catch = new E(H), k(H);
        }
        return P && (this._currNode = V.finally = new A(), this.code(P)), this._endBlockNode(E, A);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new m(b));
      }
      // start self-balancing block
      block(b, k) {
        return this._blockStarts.push(this._nodes.length), b && this.code(b).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(b) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const P = this._nodes.length - k;
        if (P < 0 || b !== void 0 && P !== b)
          throw new Error(`CodeGen: wrong number of nodes: ${P} vs ${b} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(b, k = t.nil, P, V) {
        return this._blockNode(new h(b, k, P)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
      }
      optimize(b = 1) {
        for (; b-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(b) {
        return this._currNode.nodes.push(b), this;
      }
      _blockNode(b) {
        this._currNode.nodes.push(b), this._nodes.push(b);
      }
      _endBlockNode(b, k) {
        const P = this._currNode;
        if (P instanceof b || k && P instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${b.kind}/${k.kind}` : b.kind}"`);
      }
      _elseNode(b) {
        const k = this._currNode;
        if (!(k instanceof v))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = b, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const b = this._nodes;
        return b[b.length - 1];
      }
      set _currNode(b) {
        const k = this._nodes;
        k[k.length - 1] = b;
      }
    }
    e.CodeGen = M;
    function R(z, b) {
      for (const k in b)
        z[k] = (z[k] || 0) + (b[k] || 0);
      return z;
    }
    function D(z, b) {
      return b instanceof t._CodeOrName ? R(z, b.names) : z;
    }
    function I(z, b, k) {
      if (z instanceof t.Name)
        return P(z);
      if (!V(z))
        return z;
      return new t._Code(z._items.reduce((H, Q) => (Q instanceof t.Name && (Q = P(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function P(H) {
        const Q = k[H.str];
        return Q === void 0 || b[H.str] !== 1 ? H : (delete b[H.str], Q);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && b[Q.str] === 1 && k[Q.str] !== void 0);
      }
    }
    function L(z, b) {
      for (const k in b)
        z[k] = (z[k] || 0) - (b[k] || 0);
    }
    function W(z) {
      return typeof z == "boolean" || typeof z == "number" || z === null ? !z : (0, t._)`!${U(z)}`;
    }
    e.not = W;
    const ne = O(e.operators.AND);
    function X(...z) {
      return z.reduce(ne);
    }
    e.and = X;
    const oe = O(e.operators.OR);
    function G(...z) {
      return z.reduce(oe);
    }
    e.or = G;
    function O(z) {
      return (b, k) => b === t.nil ? k : k === t.nil ? b : (0, t._)`${U(b)} ${z} ${U(k)}`;
    }
    function U(z) {
      return z instanceof t.Name ? z : (0, t._)`(${z})`;
    }
  })(hr)), hr;
}
var se = {}, Fo;
function ce() {
  if (Fo) return se;
  Fo = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Bn();
  function n(u) {
    const h = {};
    for (const y of u)
      h[y] = !0;
    return h;
  }
  se.toHash = n;
  function r(u, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (i(u, h), !o(h, u.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function i(u, h = u.schema) {
    const { opts: y, self: x } = u;
    if (!y.strictSchema || typeof h == "boolean")
      return;
    const E = x.RULES.keywords;
    for (const A in h)
      E[A] || _(u, `unknown keyword: "${A}"`);
  }
  se.checkUnknownRules = i;
  function o(u, h) {
    if (typeof u == "boolean")
      return !u;
    for (const y in u)
      if (h[y])
        return !0;
    return !1;
  }
  se.schemaHasRules = o;
  function s(u, h) {
    if (typeof u == "boolean")
      return !u;
    for (const y in u)
      if (y !== "$ref" && h.all[y])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: u, schemaPath: h }, y, x, E) {
    if (!E) {
      if (typeof y == "number" || typeof y == "boolean")
        return y;
      if (typeof y == "string")
        return (0, e._)`${y}`;
    }
    return (0, e._)`${u}${h}${(0, e.getProperty)(x)}`;
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
  function w(u, h) {
    if (Array.isArray(u))
      for (const y of u)
        h(y);
    else
      h(u);
  }
  se.eachItem = w;
  function g({ mergeNames: u, mergeToName: h, mergeValues: y, resultToName: x }) {
    return (E, A, M, R) => {
      const D = M === void 0 ? A : M instanceof e.Name ? (A instanceof e.Name ? u(E, A, M) : h(E, A, M), M) : A instanceof e.Name ? (h(E, M, A), A) : y(A, M);
      return R === e.Name && !(D instanceof e.Name) ? x(E, D) : D;
    };
  }
  se.mergeEvaluated = {
    props: g({
      mergeNames: (u, h, y) => u.if((0, e._)`${y} !== true && ${h} !== undefined`, () => {
        u.if((0, e._)`${h} === true`, () => u.assign(y, !0), () => u.assign(y, (0, e._)`${y} || {}`).code((0, e._)`Object.assign(${y}, ${h})`));
      }),
      mergeToName: (u, h, y) => u.if((0, e._)`${y} !== true`, () => {
        h === !0 ? u.assign(y, !0) : (u.assign(y, (0, e._)`${y} || {}`), S(u, y, h));
      }),
      mergeValues: (u, h) => u === !0 ? !0 : { ...u, ...h },
      resultToName: $
    }),
    items: g({
      mergeNames: (u, h, y) => u.if((0, e._)`${y} !== true && ${h} !== undefined`, () => u.assign(y, (0, e._)`${h} === true ? true : ${y} > ${h} ? ${y} : ${h}`)),
      mergeToName: (u, h, y) => u.if((0, e._)`${y} !== true`, () => u.assign(y, h === !0 ? !0 : (0, e._)`${y} > ${h} ? ${y} : ${h}`)),
      mergeValues: (u, h) => u === !0 ? !0 : Math.max(u, h),
      resultToName: (u, h) => u.var("items", h)
    })
  };
  function $(u, h) {
    if (h === !0)
      return u.var("props", !0);
    const y = u.var("props", (0, e._)`{}`);
    return h !== void 0 && S(u, y, h), y;
  }
  se.evaluatedPropsToName = $;
  function S(u, h, y) {
    Object.keys(y).forEach((x) => u.assign((0, e._)`${h}${(0, e.getProperty)(x)}`, !0));
  }
  se.setEvaluated = S;
  const f = {};
  function v(u, h) {
    return u.scopeValue("func", {
      ref: h,
      code: f[h.code] || (f[h.code] = new t._Code(h.code))
    });
  }
  se.useFunc = v;
  var p;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(p || (se.Type = p = {}));
  function C(u, h, y) {
    if (u instanceof e.Name) {
      const x = h === p.Num;
      return y ? x ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : x ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return y ? (0, e.getProperty)(u).toString() : "/" + d(u);
  }
  se.getErrorPath = C;
  function _(u, h, y = u.opts.strictSchema) {
    if (y) {
      if (h = `strict mode: ${h}`, y === !0)
        throw new Error(h);
      u.self.logger.warn(h);
    }
  }
  return se.checkStrictMode = _, se;
}
var Dt = {}, zo;
function Oe() {
  if (zo) return Dt;
  zo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
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
var Io;
function Jn() {
  return Io || (Io = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: v }) => v ? (0, t.str)`"${f}" keyword must be ${v} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, v = e.keywordError, p, C) {
      const { it: _ } = f, { gen: u, compositeRule: h, allErrors: y } = _, x = m(f, v, p);
      C ?? (h || y) ? c(u, x) : l(_, (0, t._)`[${x}]`);
    }
    e.reportError = i;
    function o(f, v = e.keywordError, p) {
      const { it: C } = f, { gen: _, compositeRule: u, allErrors: h } = C, y = m(f, v, p);
      c(_, y), u || h || l(C, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(f, v) {
      f.assign(r.default.errors, v), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if(v, () => f.assign((0, t._)`${r.default.vErrors}.length`, v), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: v, schemaValue: p, data: C, errsCount: _, it: u }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const h = f.name("err");
      f.forRange("i", _, r.default.errors, (y) => {
        f.const(h, (0, t._)`${r.default.vErrors}[${y}]`), f.if((0, t._)`${h}.instancePath === undefined`, () => f.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, u.errorPath))), f.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${v}`), u.opts.verbose && (f.assign((0, t._)`${h}.schema`, p), f.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(f, v) {
      const p = f.const("err", v);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function l(f, v) {
      const { gen: p, validateName: C, schemaEnv: _ } = f;
      _.$async ? p.throw((0, t._)`new ${f.ValidationError}(${v})`) : (p.assign((0, t._)`${C}.errors`, v), p.return(!1));
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
    function m(f, v, p) {
      const { createErrors: C } = f.it;
      return C === !1 ? (0, t._)`{}` : w(f, v, p);
    }
    function w(f, v, p = {}) {
      const { gen: C, it: _ } = f, u = [
        g(_, p),
        $(f, p)
      ];
      return S(f, v, u), C.object(...u);
    }
    function g({ errorPath: f }, { instancePath: v }) {
      const p = v ? (0, t.str)`${f}${(0, n.getErrorPath)(v, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, p)];
    }
    function $({ keyword: f, it: { errSchemaPath: v } }, { schemaPath: p, parentSchema: C }) {
      let _ = C ? v : (0, t.str)`${v}/${f}`;
      return p && (_ = (0, t.str)`${_}${(0, n.getErrorPath)(p, n.Type.Str)}`), [d.schemaPath, _];
    }
    function S(f, { params: v, message: p }, C) {
      const { keyword: _, data: u, schemaValue: h, it: y } = f, { opts: x, propertyName: E, topSchemaRef: A, schemaPath: M } = y;
      C.push([d.keyword, _], [d.params, typeof v == "function" ? v(f) : v || (0, t._)`{}`]), x.messages && C.push([d.message, typeof p == "function" ? p(f) : p]), x.verbose && C.push([d.schema, h], [d.parentSchema, (0, t._)`${A}${M}`], [r.default.data, u]), E && C.push([d.propertyName, E]);
    }
  })(pr)), pr;
}
var jo;
function Ac() {
  if (jo) return tt;
  jo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.boolOrEmptySchema = tt.topBoolOrEmptySchema = void 0;
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
var ge = {}, nt = {}, Do;
function oa() {
  if (Do) return nt;
  Do = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.getRules = nt.isJSONType = void 0;
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
var De = {}, Lo;
function ia() {
  if (Lo) return De;
  Lo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
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
var qo;
function Un() {
  if (qo) return ge;
  qo = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ oa(), t = /* @__PURE__ */ ia(), n = /* @__PURE__ */ Jn(), r = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ce();
  var o;
  (function(p) {
    p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
  })(o || (ge.DataType = o = {}));
  function s(p) {
    const C = a(p.type);
    if (C.includes("null")) {
      if (p.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!C.length && p.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      p.nullable === !0 && C.push("null");
    }
    return C;
  }
  ge.getSchemaTypes = s;
  function a(p) {
    const C = Array.isArray(p) ? p : p ? [p] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  ge.getJSONTypes = a;
  function c(p, C) {
    const { gen: _, data: u, opts: h } = p, y = d(C, h.coerceTypes), x = C.length > 0 && !(y.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(p, C[0]));
    if (x) {
      const E = $(C, u, h.strictNumbers, o.Wrong);
      _.if(E, () => {
        y.length ? m(p, C, y) : f(p);
      });
    }
    return x;
  }
  ge.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function d(p, C) {
    return C ? p.filter((_) => l.has(_) || C === "array" && _ === "array") : [];
  }
  function m(p, C, _) {
    const { gen: u, data: h, opts: y } = p, x = u.let("dataType", (0, r._)`typeof ${h}`), E = u.let("coerced", (0, r._)`undefined`);
    y.coerceTypes === "array" && u.if((0, r._)`${x} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => u.assign(h, (0, r._)`${h}[0]`).assign(x, (0, r._)`typeof ${h}`).if($(C, h, y.strictNumbers), () => u.assign(E, h))), u.if((0, r._)`${E} !== undefined`);
    for (const M of _)
      (l.has(M) || M === "array" && y.coerceTypes === "array") && A(M);
    u.else(), f(p), u.endIf(), u.if((0, r._)`${E} !== undefined`, () => {
      u.assign(h, E), w(p, E);
    });
    function A(M) {
      switch (M) {
        case "string":
          u.elseIf((0, r._)`${x} == "number" || ${x} == "boolean"`).assign(E, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(E, (0, r._)`""`);
          return;
        case "number":
          u.elseIf((0, r._)`${x} == "boolean" || ${h} === null
              || (${x} == "string" && ${h} && ${h} == +${h})`).assign(E, (0, r._)`+${h}`);
          return;
        case "integer":
          u.elseIf((0, r._)`${x} === "boolean" || ${h} === null
              || (${x} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(E, (0, r._)`+${h}`);
          return;
        case "boolean":
          u.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(E, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(E, !0);
          return;
        case "null":
          u.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), u.assign(E, null);
          return;
        case "array":
          u.elseIf((0, r._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${h} === null`).assign(E, (0, r._)`[${h}]`);
      }
    }
  }
  function w({ gen: p, parentData: C, parentDataProperty: _ }, u) {
    p.if((0, r._)`${C} !== undefined`, () => p.assign((0, r._)`${C}[${_}]`, u));
  }
  function g(p, C, _, u = o.Correct) {
    const h = u === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let y;
    switch (p) {
      case "null":
        return (0, r._)`${C} ${h} null`;
      case "array":
        y = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        y = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        y = x((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        y = x();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${p}`;
    }
    return u === o.Correct ? y : (0, r.not)(y);
    function x(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, E, _ ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ge.checkDataType = g;
  function $(p, C, _, u) {
    if (p.length === 1)
      return g(p[0], C, _, u);
    let h;
    const y = (0, i.toHash)(p);
    if (y.array && y.object) {
      const x = (0, r._)`typeof ${C} != "object"`;
      h = y.null ? x : (0, r._)`!${C} || ${x}`, delete y.null, delete y.array, delete y.object;
    } else
      h = r.nil;
    y.number && delete y.integer;
    for (const x in y)
      h = (0, r.and)(h, g(x, C, _, u));
    return h;
  }
  ge.checkDataTypes = $;
  const S = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: C }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${C}}`
  };
  function f(p) {
    const C = v(p);
    (0, n.reportError)(C, S);
  }
  ge.reportTypeError = f;
  function v(p) {
    const { gen: C, data: _, schema: u } = p, h = (0, i.schemaRefOrVal)(p, u, "type");
    return {
      gen: C,
      keyword: "type",
      data: _,
      schema: u.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: u,
      params: {},
      it: p
    };
  }
  return ge;
}
var Et = {}, Vo;
function Rc() {
  if (Vo) return Et;
  Vo = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.assignDefaults = void 0;
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
    const m = (0, e._)`${l}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${m}`);
      return;
    }
    let w = (0, e._)`${m} === undefined`;
    d.useDefaults === "empty" && (w = (0, e._)`${w} || ${m} === null || ${m} === ""`), a.if(w, (0, e._)`${m} = ${(0, e.stringify)(s)}`);
  }
  return Et;
}
var Me = {}, de = {}, Bo;
function Fe() {
  if (Bo) return de;
  Bo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce();
  function i(p, C) {
    const { gen: _, data: u, it: h } = p;
    _.if(d(_, u, C, h.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${C}` }, !0), p.error();
    });
  }
  de.checkReportMissingProp = i;
  function o({ gen: p, data: C, it: { opts: _ } }, u, h) {
    return (0, e.or)(...u.map((y) => (0, e.and)(d(p, C, y, _.ownProperties), (0, e._)`${h} = ${y}`)));
  }
  de.checkMissingProp = o;
  function s(p, C) {
    p.setParams({ missingProperty: C }, !0), p.error();
  }
  de.reportMissingProp = s;
  function a(p) {
    return p.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  de.hasPropFunc = a;
  function c(p, C, _) {
    return (0, e._)`${a(p)}.call(${C}, ${_})`;
  }
  de.isOwnProperty = c;
  function l(p, C, _, u) {
    const h = (0, e._)`${C}${(0, e.getProperty)(_)} !== undefined`;
    return u ? (0, e._)`${h} && ${c(p, C, _)}` : h;
  }
  de.propertyInData = l;
  function d(p, C, _, u) {
    const h = (0, e._)`${C}${(0, e.getProperty)(_)} === undefined`;
    return u ? (0, e.or)(h, (0, e.not)(c(p, C, _))) : h;
  }
  de.noPropertyInData = d;
  function m(p) {
    return p ? Object.keys(p).filter((C) => C !== "__proto__") : [];
  }
  de.allSchemaProperties = m;
  function w(p, C) {
    return m(C).filter((_) => !(0, t.alwaysValidSchema)(p, C[_]));
  }
  de.schemaProperties = w;
  function g({ schemaCode: p, data: C, it: { gen: _, topSchemaRef: u, schemaPath: h, errorPath: y }, it: x }, E, A, M) {
    const R = M ? (0, e._)`${p}, ${C}, ${u}${h}` : C, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, y)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const I = (0, e._)`${R}, ${_.object(...D)}`;
    return A !== e.nil ? (0, e._)`${E}.call(${A}, ${I})` : (0, e._)`${E}(${I})`;
  }
  de.callValidateCode = g;
  const $ = (0, e._)`new RegExp`;
  function S({ gen: p, it: { opts: C } }, _) {
    const u = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, y = h(_, u);
    return p.scopeValue("pattern", {
      key: y.toString(),
      ref: y,
      code: (0, e._)`${h.code === "new RegExp" ? $ : (0, r.useFunc)(p, h)}(${_}, ${u})`
    });
  }
  de.usePattern = S;
  function f(p) {
    const { gen: C, data: _, keyword: u, it: h } = p, y = C.name("valid");
    if (h.allErrors) {
      const E = C.let("valid", !0);
      return x(() => C.assign(E, !1)), E;
    }
    return C.var(y, !0), x(() => C.break()), y;
    function x(E) {
      const A = C.const("len", (0, e._)`${_}.length`);
      C.forRange("i", 0, A, (M) => {
        p.subschema({
          keyword: u,
          dataProp: M,
          dataPropType: t.Type.Num
        }, y), C.if((0, e.not)(y), E);
      });
    }
  }
  de.validateArray = f;
  function v(p) {
    const { gen: C, schema: _, keyword: u, it: h } = p;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((A) => (0, t.alwaysValidSchema)(h, A)) && !h.opts.unevaluated)
      return;
    const x = C.let("valid", !1), E = C.name("_valid");
    C.block(() => _.forEach((A, M) => {
      const R = p.subschema({
        keyword: u,
        schemaProp: M,
        compositeRule: !0
      }, E);
      C.assign(x, (0, e._)`${x} || ${E}`), p.mergeValidEvaluated(R, E) || C.if((0, e.not)(x));
    })), p.result(x, () => p.reset(), () => p.error(!0));
  }
  return de.validateUnion = v, de;
}
var Uo;
function Nc() {
  if (Uo) return Me;
  Uo = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateKeywordUsage = Me.validSchemaType = Me.funcKeywordCode = Me.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Jn();
  function i(w, g) {
    const { gen: $, keyword: S, schema: f, parentSchema: v, it: p } = w, C = g.macro.call(p.self, f, v, p), _ = l($, S, C);
    p.opts.validateSchema !== !1 && p.self.validateSchema(C, !0);
    const u = $.name("valid");
    w.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${S}`,
      topSchemaRef: _,
      compositeRule: !0
    }, u), w.pass(u, () => w.error(!0));
  }
  Me.macroKeywordCode = i;
  function o(w, g) {
    var $;
    const { gen: S, keyword: f, schema: v, parentSchema: p, $data: C, it: _ } = w;
    c(_, g);
    const u = !C && g.compile ? g.compile.call(_.self, v, p, _) : g.validate, h = l(S, f, u), y = S.let("valid");
    w.block$data(y, x), w.ok(($ = g.valid) !== null && $ !== void 0 ? $ : y);
    function x() {
      if (g.errors === !1)
        M(), g.modifying && s(w), R(() => w.error());
      else {
        const D = g.async ? E() : A();
        g.modifying && s(w), R(() => a(w, D));
      }
    }
    function E() {
      const D = S.let("ruleErrs", null);
      return S.try(() => M((0, e._)`await `), (I) => S.assign(y, !1).if((0, e._)`${I} instanceof ${_.ValidationError}`, () => S.assign(D, (0, e._)`${I}.errors`), () => S.throw(I))), D;
    }
    function A() {
      const D = (0, e._)`${h}.errors`;
      return S.assign(D, null), M(e.nil), D;
    }
    function M(D = g.async ? (0, e._)`await ` : e.nil) {
      const I = _.opts.passContext ? t.default.this : t.default.self, L = !("compile" in g && !C || g.schema === !1);
      S.assign(y, (0, e._)`${D}${(0, n.callValidateCode)(w, h, I, L)}`, g.modifying);
    }
    function R(D) {
      var I;
      S.if((0, e.not)((I = g.valid) !== null && I !== void 0 ? I : y), D);
    }
  }
  Me.funcKeywordCode = o;
  function s(w) {
    const { gen: g, data: $, it: S } = w;
    g.if(S.parentData, () => g.assign($, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function a(w, g) {
    const { gen: $ } = w;
    $.if((0, e._)`Array.isArray(${g})`, () => {
      $.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(w);
    }, () => w.error());
  }
  function c({ schemaEnv: w }, g) {
    if (g.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(w, g, $) {
    if ($ === void 0)
      throw new Error(`keyword "${g}" failed to compile`);
    return w.scopeValue("keyword", typeof $ == "function" ? { ref: $ } : { ref: $, code: (0, e.stringify)($) });
  }
  function d(w, g, $ = !1) {
    return !g.length || g.some((S) => S === "array" ? Array.isArray(w) : S === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == S || $ && typeof w > "u");
  }
  Me.validSchemaType = d;
  function m({ schema: w, opts: g, self: $, errSchemaPath: S }, f, v) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(v) : f.keyword !== v)
      throw new Error("ajv implementation error");
    const p = f.dependencies;
    if (p?.some((C) => !Object.prototype.hasOwnProperty.call(w, C)))
      throw new Error(`parent schema must have dependencies of ${v}: ${p.join(",")}`);
    if (f.validateSchema && !f.validateSchema(w[v])) {
      const _ = `keyword "${v}" value is invalid at path "${S}": ` + $.errorsText(f.validateSchema.errors);
      if (g.validateSchema === "log")
        $.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return Me.validateKeywordUsage = m, Me;
}
var Le = {}, Ho;
function Mc() {
  if (Ho) return Le;
  Ho = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.extendSubschemaMode = Le.extendSubschemaData = Le.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(o, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: d, topSchemaRef: m }) {
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
  function r(o, s, { dataProp: a, dataPropType: c, data: l, dataTypes: d, propertyName: m }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = s;
    if (a !== void 0) {
      const { errorPath: $, dataPathArr: S, opts: f } = s, v = w.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      g(v), o.errorPath = (0, e.str)`${$}${(0, t.getErrorPath)(a, c, f.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...S, o.parentDataProperty];
    }
    if (l !== void 0) {
      const $ = l instanceof e.Name ? l : w.let("data", l, !0);
      g($), m !== void 0 && (o.propertyName = m);
    }
    d && (o.dataTypes = d);
    function g($) {
      o.data = $, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, $];
    }
  }
  Le.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: d }) {
    c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), d !== void 0 && (o.allErrors = d), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return Le.extendSubschemaMode = i, Le;
}
var ye = {}, yr, Ko;
function sa() {
  return Ko || (Ko = 1, yr = function e(t, n) {
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
var $r = { exports: {} }, Go;
function Tc() {
  if (Go) return $r.exports;
  Go = 1;
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
  function t(r, i, o, s, a, c, l, d, m, w) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, c, l, d, m, w);
      for (var g in s) {
        var $ = s[g];
        if (Array.isArray($)) {
          if (g in e.arrayKeywords)
            for (var S = 0; S < $.length; S++)
              t(r, i, o, $[S], a + "/" + g + "/" + S, c, a, g, s, S);
        } else if (g in e.propsKeywords) {
          if ($ && typeof $ == "object")
            for (var f in $)
              t(r, i, o, $[f], a + "/" + g + "/" + n(f), c, a, g, s, f);
        } else (g in e.keywords || r.allKeys && !(g in e.skipKeywords)) && t(r, i, o, $, a + "/" + g, c, a, g, s);
      }
      o(s, a, c, l, d, m, w);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return $r.exports;
}
var Wo;
function Yn() {
  if (Wo) return ye;
  Wo = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getSchemaRefs = ye.resolveUrl = ye.normalizeId = ye._getFullPath = ye.getFullPath = ye.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = sa(), n = Tc(), r = /* @__PURE__ */ new Set([
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
  function i(S, f = !0) {
    return typeof S == "boolean" ? !0 : f === !0 ? !s(S) : f ? a(S) <= f : !1;
  }
  ye.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(S) {
    for (const f in S) {
      if (o.has(f))
        return !0;
      const v = S[f];
      if (Array.isArray(v) && v.some(s) || typeof v == "object" && s(v))
        return !0;
    }
    return !1;
  }
  function a(S) {
    let f = 0;
    for (const v in S) {
      if (v === "$ref")
        return 1 / 0;
      if (f++, !r.has(v) && (typeof S[v] == "object" && (0, e.eachItem)(S[v], (p) => f += a(p)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(S, f = "", v) {
    v !== !1 && (f = m(f));
    const p = S.parse(f);
    return l(S, p);
  }
  ye.getFullPath = c;
  function l(S, f) {
    return S.serialize(f).split("#")[0] + "#";
  }
  ye._getFullPath = l;
  const d = /#\/?$/;
  function m(S) {
    return S ? S.replace(d, "") : "";
  }
  ye.normalizeId = m;
  function w(S, f, v) {
    return v = m(v), S.resolve(f, v);
  }
  ye.resolveUrl = w;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function $(S, f) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: v, uriResolver: p } = this.opts, C = m(S[v] || f), _ = { "": C }, u = c(p, C, !1), h = {}, y = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (A, M, R, D) => {
      if (D === void 0)
        return;
      const I = u + M;
      let L = _[D];
      typeof A[v] == "string" && (L = W.call(this, A[v])), ne.call(this, A.$anchor), ne.call(this, A.$dynamicAnchor), _[M] = L;
      function W(X) {
        const oe = this.opts.uriResolver.resolve;
        if (X = m(L ? oe(L, X) : X), y.has(X))
          throw E(X);
        y.add(X);
        let G = this.refs[X];
        return typeof G == "string" && (G = this.refs[G]), typeof G == "object" ? x(A, G.schema, X) : X !== m(I) && (X[0] === "#" ? (x(A, h[X], X), h[X] = A) : this.refs[X] = I), X;
      }
      function ne(X) {
        if (typeof X == "string") {
          if (!g.test(X))
            throw new Error(`invalid anchor "${X}"`);
          W.call(this, `#${X}`);
        }
      }
    }), h;
    function x(A, M, R) {
      if (M !== void 0 && !t(A, M))
        throw E(R);
    }
    function E(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return ye.getSchemaRefs = $, ye;
}
var Jo;
function Xn() {
  if (Jo) return je;
  Jo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ac(), t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ ia(), r = /* @__PURE__ */ Un(), i = /* @__PURE__ */ Rc(), o = /* @__PURE__ */ Nc(), s = /* @__PURE__ */ Mc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Oe(), l = /* @__PURE__ */ Yn(), d = /* @__PURE__ */ ce(), m = /* @__PURE__ */ Jn();
  function w(N) {
    if (u(N) && (y(N), _(N))) {
      f(N);
      return;
    }
    g(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  je.validateFunctionCode = w;
  function g({ gen: N, validateName: F, schema: K, schemaEnv: J, opts: te }, re) {
    te.code.es5 ? N.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      N.code((0, a._)`"use strict"; ${p(K, te)}`), S(N, te), N.code(re);
    }) : N.func(F, (0, a._)`${c.default.data}, ${$(te)}`, J.$async, () => N.code(p(K, te)).code(re));
  }
  function $(N) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${N.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function S(N, F) {
    N.if(c.default.valCxt, () => {
      N.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), N.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), N.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), N.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      N.var(c.default.instancePath, (0, a._)`""`), N.var(c.default.parentData, (0, a._)`undefined`), N.var(c.default.parentDataProperty, (0, a._)`undefined`), N.var(c.default.rootData, c.default.data), F.dynamicRef && N.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(N) {
    const { schema: F, opts: K, gen: J } = N;
    g(N, () => {
      K.$comment && F.$comment && D(N), A(N), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), K.unevaluated && v(N), x(N), I(N);
    });
  }
  function v(N) {
    const { gen: F, validateName: K } = N;
    N.evaluated = F.const("evaluated", (0, a._)`${K}.evaluated`), F.if((0, a._)`${N.evaluated}.dynamicProps`, () => F.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${N.evaluated}.dynamicItems`, () => F.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function p(N, F) {
    const K = typeof N == "object" && N[F.schemaId];
    return K && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${K} */` : a.nil;
  }
  function C(N, F) {
    if (u(N) && (y(N), _(N))) {
      h(N, F);
      return;
    }
    (0, e.boolOrEmptySchema)(N, F);
  }
  function _({ schema: N, self: F }) {
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
  function h(N, F) {
    const { schema: K, gen: J, opts: te } = N;
    te.$comment && K.$comment && D(N), M(N), R(N);
    const re = J.const("_errs", c.default.errors);
    x(N, re), J.var(F, (0, a._)`${re} === ${c.default.errors}`);
  }
  function y(N) {
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
  function I(N) {
    const { gen: F, schemaEnv: K, validateName: J, ValidationError: te, opts: re } = N;
    K.$async ? F.if((0, a._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, a._)`new ${te}(${c.default.vErrors})`)) : (F.assign((0, a._)`${J}.errors`, c.default.vErrors), re.unevaluated && L(N), F.return((0, a._)`${c.default.errors} === 0`));
  }
  function L({ gen: N, evaluated: F, props: K, items: J }) {
    K instanceof a.Name && N.assign((0, a._)`${F}.props`, K), J instanceof a.Name && N.assign((0, a._)`${F}.items`, J);
  }
  function W(N, F, K, J) {
    const { gen: te, schema: re, data: ue, allErrors: we, opts: $e, self: ve } = N, { RULES: me } = ve;
    if (re.$ref && ($e.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(re, me))) {
      te.block(() => V(N, "$ref", me.all.$ref.definition));
      return;
    }
    $e.jtd || X(N, F), te.block(() => {
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
        (0, n.shouldUseRule)(J, re) && V(N, re.keyword, re.definition, F.type);
    });
  }
  function X(N, F) {
    N.schemaEnv.meta || !N.opts.strictTypes || (oe(N, F), N.opts.allowUnionTypes || G(N, F), O(N, N.dataTypes));
  }
  function oe(N, F) {
    if (F.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = F;
        return;
      }
      F.forEach((K) => {
        z(N.dataTypes, K) || k(N, `type "${K}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), b(N, F);
    }
  }
  function G(N, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && k(N, "use allowUnionTypes to allow union type keyword");
  }
  function O(N, F) {
    const K = N.self.RULES.all;
    for (const J in K) {
      const te = K[J];
      if (typeof te == "object" && (0, n.shouldUseRule)(N.schema, te)) {
        const { type: re } = te.definition;
        re.length && !re.some((ue) => U(F, ue)) && k(N, `missing type "${re.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function U(N, F) {
    return N.includes(F) || F === "number" && N.includes("integer");
  }
  function z(N, F) {
    return N.includes(F) || F === "integer" && N.includes("number");
  }
  function b(N, F) {
    const K = [];
    for (const J of N.dataTypes)
      z(F, J) ? K.push(J) : F.includes("integer") && J === "number" && K.push("integer");
    N.dataTypes = K;
  }
  function k(N, F) {
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
  je.KeywordCxt = P;
  function V(N, F, K, J) {
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
      if (re = K[F - me], !te)
        return re;
    }
    let ue = re;
    const we = te.split("/");
    for (const ve of we)
      ve && (re = (0, a._)`${re}${(0, a.getProperty)((0, d.unescapeJsonPointer)(ve))}`, ue = (0, a._)`${ue} && ${re}`);
    return ue;
    function $e(ve, me) {
      return `Cannot access ${ve} ${me} levels up, current level is ${F}`;
    }
  }
  return je.getData = ee, je;
}
var Lt = {}, Yo;
function Qr() {
  if (Yo) return Lt;
  Yo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Lt.default = e, Lt;
}
var qt = {}, Xo;
function Zn() {
  if (Xo) return qt;
  Xo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var _e = {}, Zo;
function Qn() {
  if (Zo) return _e;
  Zo = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Yn(), i = /* @__PURE__ */ ce(), o = /* @__PURE__ */ Xn();
  class s {
    constructor(v) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof v.schema == "object" && (C = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (p = v.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(C?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = s;
  function a(f) {
    const v = d.call(this, f);
    if (v)
      return v;
    const p = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: C, lines: _ } = this.opts.code, { ownProperties: u } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: _, ownProperties: u });
    let y;
    f.$async && (y = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = h.scopeName("validate");
    f.validateName = x;
    const E = {
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: x,
      ValidationError: y,
      schema: f.schema,
      schemaEnv: f,
      rootId: p,
      baseId: f.baseId || p,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let A;
    try {
      this._compilations.add(f), (0, o.validateFunctionCode)(E), h.optimize(this.opts.code.optimize);
      const M = h.toString();
      A = `${h.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(x, { ref: D }), D.errors = null, D.schema = f.schema, D.schemaEnv = f, f.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: x, validateCode: M, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: I, items: L } = E;
        D.evaluated = {
          props: I instanceof e.Name ? void 0 : I,
          items: L instanceof e.Name ? void 0 : L,
          dynamicProps: I instanceof e.Name,
          dynamicItems: L instanceof e.Name
        }, D.source && (D.source.evaluated = (0, e.stringify)(D.evaluated));
      }
      return f.validate = D, f;
    } catch (M) {
      throw delete f.validate, delete f.validateName, A && this.logger.error("Error compiling schema, function code:", A), M;
    } finally {
      this._compilations.delete(f);
    }
  }
  _e.compileSchema = a;
  function c(f, v, p) {
    var C;
    p = (0, r.resolveUrl)(this.opts.uriResolver, v, p);
    const _ = f.refs[p];
    if (_)
      return _;
    let u = w.call(this, f, p);
    if (u === void 0) {
      const h = (C = f.localRefs) === null || C === void 0 ? void 0 : C[p], { schemaId: y } = this.opts;
      h && (u = new s({ schema: h, schemaId: y, root: f, baseId: v }));
    }
    if (u !== void 0)
      return f.refs[p] = l.call(this, u);
  }
  _e.resolveRef = c;
  function l(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function d(f) {
    for (const v of this._compilations)
      if (m(v, f))
        return v;
  }
  _e.getCompilingSchema = d;
  function m(f, v) {
    return f.schema === v.schema && f.root === v.root && f.baseId === v.baseId;
  }
  function w(f, v) {
    let p;
    for (; typeof (p = this.refs[v]) == "string"; )
      v = p;
    return p || this.schemas[v] || g.call(this, f, v);
  }
  function g(f, v) {
    const p = this.opts.uriResolver.parse(v), C = (0, r._getFullPath)(this.opts.uriResolver, p);
    let _ = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && C === _)
      return S.call(this, p, f);
    const u = (0, r.normalizeId)(C), h = this.refs[u] || this.schemas[u];
    if (typeof h == "string") {
      const y = g.call(this, f, h);
      return typeof y?.schema != "object" ? void 0 : S.call(this, p, y);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), u === (0, r.normalizeId)(v)) {
        const { schema: y } = h, { schemaId: x } = this.opts, E = y[x];
        return E && (_ = (0, r.resolveUrl)(this.opts.uriResolver, _, E)), new s({ schema: y, schemaId: x, root: f, baseId: _ });
      }
      return S.call(this, p, h);
    }
  }
  _e.resolveSchema = g;
  const $ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(f, { baseId: v, schema: p, root: C }) {
    var _;
    if (((_ = f.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const y of f.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const x = p[(0, i.unescapeFragment)(y)];
      if (x === void 0)
        return;
      p = x;
      const E = typeof p == "object" && p[this.opts.schemaId];
      !$.has(y) && E && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, E));
    }
    let u;
    if (typeof p != "boolean" && p.$ref && !(0, i.schemaHasRulesButRef)(p, this.RULES)) {
      const y = (0, r.resolveUrl)(this.opts.uriResolver, v, p.$ref);
      u = g.call(this, C, y);
    }
    const { schemaId: h } = this.opts;
    if (u = u || new s({ schema: p, schemaId: h, root: C, baseId: v }), u.schema !== u.root.schema)
      return u;
  }
  return _e;
}
const Oc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Fc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", zc = "object", Ic = ["$data"], jc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Dc = !1, Lc = {
  $id: Oc,
  description: Fc,
  type: zc,
  required: Ic,
  properties: jc,
  additionalProperties: Dc
};
var Vt = {}, xt = { exports: {} }, vr, Qo;
function aa() {
  if (Qo) return vr;
  Qo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(u) {
    let h = "", y = 0, x = 0;
    for (x = 0; x < u.length; x++)
      if (y = u[x].charCodeAt(0), y !== 48) {
        if (!(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
          return "";
        h += u[x];
        break;
      }
    for (x += 1; x < u.length; x++) {
      if (y = u[x].charCodeAt(0), !(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
        return "";
      h += u[x];
    }
    return h;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(u) {
    return u.length = 0, !0;
  }
  function c(u, h, y) {
    if (u.length) {
      const x = o(u);
      if (x !== "")
        h.push(x);
      else
        return y.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function l(u) {
    let h = 0;
    const y = { error: !1, address: "", zone: "" }, x = [], E = [];
    let A = !1, M = !1, R = c;
    for (let D = 0; D < u.length; D++) {
      const I = u[D];
      if (!(I === "[" || I === "]"))
        if (I === ":") {
          if (A === !0 && (M = !0), !R(E, x, y))
            break;
          if (++h > 7) {
            y.error = !0;
            break;
          }
          D > 0 && u[D - 1] === ":" && (A = !0), x.push(":");
          continue;
        } else if (I === "%") {
          if (!R(E, x, y))
            break;
          R = a;
        } else {
          E.push(I);
          continue;
        }
    }
    return E.length && (R === a ? y.zone = E.join("") : M ? x.push(E.join("")) : x.push(o(E))), y.address = x.join(""), y;
  }
  function d(u) {
    if (m(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const h = l(u);
    if (h.error)
      return { host: u, isIPV6: !1 };
    {
      let y = h.address, x = h.address;
      return h.zone && (y += "%" + h.zone, x += "%25" + h.zone), { host: y, isIPV6: !0, escapedHost: x };
    }
  }
  function m(u, h) {
    let y = 0;
    for (let x = 0; x < u.length; x++)
      u[x] === h && y++;
    return y;
  }
  function w(u) {
    let h = u;
    const y = [];
    let x = -1, E = 0;
    for (; E = h.length; ) {
      if (E === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          y.push("/");
          break;
        } else {
          y.push(h);
          break;
        }
      } else if (E === 2) {
        if (h[0] === ".") {
          if (h[1] === ".")
            break;
          if (h[1] === "/") {
            h = h.slice(2);
            continue;
          }
        } else if (h[0] === "/" && (h[1] === "." || h[1] === "/")) {
          y.push("/");
          break;
        }
      } else if (E === 3 && h === "/..") {
        y.length !== 0 && y.pop(), y.push("/");
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
          h = h.slice(3), y.length !== 0 && y.pop();
          continue;
        }
      }
      if ((x = h.indexOf("/", 1)) === -1) {
        y.push(h);
        break;
      } else
        y.push(h.slice(0, x)), h = h.slice(x);
    }
    return y.join("");
  }
  const g = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, $ = /[@/?#:]/g, S = /[@/?#]/g;
  function f(u, h) {
    const y = h ? S : $;
    return y.lastIndex = 0, u.replace(y, (x) => g[x]);
  }
  function v(u, h = !1) {
    if (u.indexOf("%") === -1)
      return u;
    let y = "";
    for (let x = 0; x < u.length; x++) {
      if (u[x] === "%" && x + 2 < u.length) {
        const E = u.slice(x + 1, x + 3);
        if (n(E)) {
          const A = E.toUpperCase(), M = String.fromCharCode(parseInt(A, 16));
          h && r(M) ? y += M : y += "%" + A, x += 2;
          continue;
        }
      }
      y += u[x];
    }
    return y;
  }
  function p(u) {
    let h = "";
    for (let y = 0; y < u.length; y++) {
      if (u[y] === "%" && y + 2 < u.length) {
        const x = u.slice(y + 1, y + 3);
        if (n(x)) {
          const E = x.toUpperCase(), A = String.fromCharCode(parseInt(E, 16));
          A !== "." && r(A) ? h += A : h += "%" + E, y += 2;
          continue;
        }
      }
      i(u[y]) ? h += u[y] : h += escape(u[y]);
    }
    return h;
  }
  function C(u) {
    let h = "";
    for (let y = 0; y < u.length; y++) {
      if (u[y] === "%" && y + 2 < u.length) {
        const x = u.slice(y + 1, y + 3);
        if (n(x)) {
          h += "%" + x.toUpperCase(), y += 2;
          continue;
        }
      }
      h += escape(u[y]);
    }
    return h;
  }
  function _(u) {
    const h = [];
    if (u.userinfo !== void 0 && (h.push(u.userinfo), h.push("@")), u.host !== void 0) {
      let y = unescape(u.host);
      if (!t(y)) {
        const x = d(y);
        x.isIPV6 === !0 ? y = `[${x.escapedHost}]` : y = f(y, !1);
      }
      h.push(y);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (h.push(":"), h.push(String(u.port))), h.length ? h.join("") : void 0;
  }
  return vr = {
    nonSimpleDomain: s,
    recomposeAuthority: _,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: v,
    normalizePathEncoding: p,
    escapePreservingEscapes: C,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: d,
    stringArrayToHexStripped: o
  }, vr;
}
var br, ei;
function qc() {
  if (ei) return br;
  ei = 1;
  const { isUUID: e } = aa(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
    const h = String(u.scheme).toLowerCase() === "https";
    return (u.port === (h ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = i(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (i(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [h, y] = u.resourceName.split("?");
      u.path = h && h !== "/" ? h : void 0, u.query = y, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, h) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const y = u.path.match(t);
    if (y) {
      const x = h.scheme || u.scheme || "urn";
      u.nid = y[1].toLowerCase(), u.nss = y[2];
      const E = `${x}:${h.nid || u.nid}`, A = _(E);
      u.path = void 0, A && (u = A.parse(u, h));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function d(u, h) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const y = h.scheme || u.scheme || "urn", x = u.nid.toLowerCase(), E = `${y}:${h.nid || x}`, A = _(E);
    A && (u = A.serialize(u, h));
    const M = u, R = u.nss;
    return M.path = `${x || h.nid}:${R}`, h.skipEscape = !0, M;
  }
  function m(u, h) {
    const y = u;
    return y.uuid = y.nss, y.nss = void 0, !h.tolerant && (!y.uuid || !e(y.uuid)) && (y.error = y.error || "UUID is not valid."), y;
  }
  function w(u) {
    const h = u;
    return h.nss = (u.uuid || "").toLowerCase(), h;
  }
  const g = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: s
    }
  ), $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: g.domainHost,
      parse: o,
      serialize: s
    }
  ), S = (
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
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: g,
      https: $,
      ws: S,
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
          serialize: w,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function _(u) {
    return u && (C[
      /** @type {SchemeName} */
      u
    ] || C[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return br = {
    wsIsSecure: i,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: _
  }, br;
}
var ti;
function Vc() {
  if (ti) return xt.exports;
  ti = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = aa(), { SCHEMES: l, getSchemeHandler: d } = qc();
  function m(E, A) {
    return typeof E == "string" ? E = /** @type {T} */
    u(E, A) : typeof E == "object" && (E = /** @type {T} */
    _(S(E, A), A)), E;
  }
  function w(E, A, M) {
    const R = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, D = g(_(E, R), _(A, R), R, !0);
    return R.skipEscape = !0, S(D, R);
  }
  function g(E, A, M, R) {
    const D = {};
    return R || (E = _(S(E, M), M), A = _(S(A, M), M)), M = M || {}, !M.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? D.path = "/" + A.path : E.path ? D.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = E.path, A.query !== void 0 ? D.query = A.query : D.query = E.query), D.userinfo = E.userinfo, D.host = E.host, D.port = E.port), D.scheme = E.scheme), D.fragment = A.fragment, D;
  }
  function $(E, A, M) {
    const R = y(E, M), D = y(A, M);
    return R !== void 0 && D !== void 0 && R.toLowerCase() === D.toLowerCase();
  }
  function S(E, A) {
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
    }, R = Object.assign({}, A), D = [], I = d(R.scheme || M.scheme);
    I && I.serialize && I.serialize(M, R), M.path !== void 0 && (R.skipEscape ? M.path = r(M.path) : (M.path = o(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), R.reference !== "suffix" && M.scheme && D.push(M.scheme, ":");
    const L = n(M);
    if (L !== void 0 && (R.reference !== "suffix" && D.push("//"), D.push(L), M.path && M.path[0] !== "/" && D.push("/")), M.path !== void 0) {
      let W = M.path;
      !R.absolutePath && (!I || !I.absolutePath) && (W = t(W)), L === void 0 && W[0] === "/" && W[1] === "/" && (W = "/%2F" + W.slice(2)), D.push(W);
    }
    return M.query !== void 0 && D.push("?", M.query), M.fragment !== void 0 && D.push("#", M.fragment), D.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function p(E, A) {
    if (A[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function C(E, A) {
    const M = Object.assign({}, A), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, I = !1;
    M.reference === "suffix" && (M.scheme ? E = M.scheme + ":" + E : E = "//" + E);
    const L = E.match(v);
    L !== null && L[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", D = !0);
    const W = E.match(f);
    if (W) {
      R.scheme = W[1], R.userinfo = W[3], R.host = W[4], R.port = parseInt(W[5], 10), R.path = W[6] || "", R.query = W[7], R.fragment = W[8], isNaN(R.port) && (R.port = W[5]);
      const ne = p(R, W);
      if (ne !== void 0 && (R.error = R.error || ne, D = !0), R.host)
        if (a(R.host) === !1) {
          const G = e(R.host);
          R.host = G.host.toLowerCase(), I = G.isIPV6;
        } else
          I = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== R.reference && (R.error = R.error || "URI is not a " + M.reference + " reference.");
      const X = d(M.scheme || R.scheme);
      if (!M.unicodeSupport && (!X || !X.unicodeSupport) && R.host && (M.domainHost || X && X.domainHost) && I === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (oe) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + oe;
        }
      if ((!X || X && !X.skipNormalize) && (E.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = s(unescape(R.host), I))), R.path && (R.path = i(R.path)), R.fragment))
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
  function _(E, A) {
    return C(E, A).parsed;
  }
  function u(E, A) {
    return h(E, A).normalized;
  }
  function h(E, A) {
    const { parsed: M, malformedAuthorityOrPort: R } = C(E, A);
    return {
      normalized: R ? E : S(M, A),
      malformedAuthorityOrPort: R
    };
  }
  function y(E, A) {
    if (typeof E == "string") {
      const { normalized: M, malformedAuthorityOrPort: R } = h(E, A);
      return R ? void 0 : M;
    }
    if (typeof E == "object")
      return S(E, A);
  }
  const x = {
    SCHEMES: l,
    normalize: m,
    resolve: w,
    resolveComponent: g,
    equal: $,
    serialize: S,
    parse: _
  };
  return xt.exports = x, xt.exports.default = x, xt.exports.fastUri = x, xt.exports;
}
var ni;
function Bc() {
  if (ni) return Vt;
  ni = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = Vc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Vt.default = e, Vt;
}
var ri;
function Uc() {
  return ri || (ri = 1, (function(e) {
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
    const r = /* @__PURE__ */ Qr(), i = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ oa(), s = /* @__PURE__ */ Qn(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Yn(), l = /* @__PURE__ */ Un(), d = /* @__PURE__ */ ce(), m = Lc, w = /* @__PURE__ */ Bc(), g = (G, O) => new RegExp(G, O);
    g.code = "new RegExp";
    const $ = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, p = 200;
    function C(G) {
      var O, U, z, b, k, P, V, H, Q, ee, N, F, K, J, te, re, ue, we, $e, ve, me, dt, Ce, cr, lr;
      const Ct = G.strict, dr = (O = G.code) === null || O === void 0 ? void 0 : O.optimize, ko = dr === !0 || dr === void 0 ? 1 : dr || 0, Eo = (z = (U = G.code) === null || U === void 0 ? void 0 : U.regExp) !== null && z !== void 0 ? z : g, rc = (b = G.uriResolver) !== null && b !== void 0 ? b : w.default;
      return {
        strictSchema: (P = (k = G.strictSchema) !== null && k !== void 0 ? k : Ct) !== null && P !== void 0 ? P : !0,
        strictNumbers: (H = (V = G.strictNumbers) !== null && V !== void 0 ? V : Ct) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (Q = G.strictTypes) !== null && Q !== void 0 ? Q : Ct) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (F = (N = G.strictTuples) !== null && N !== void 0 ? N : Ct) !== null && F !== void 0 ? F : "log",
        strictRequired: (J = (K = G.strictRequired) !== null && K !== void 0 ? K : Ct) !== null && J !== void 0 ? J : !1,
        code: G.code ? { ...G.code, optimize: ko, regExp: Eo } : { optimize: ko, regExp: Eo },
        loopRequired: (te = G.loopRequired) !== null && te !== void 0 ? te : p,
        loopEnum: (re = G.loopEnum) !== null && re !== void 0 ? re : p,
        meta: (ue = G.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (we = G.messages) !== null && we !== void 0 ? we : !0,
        inlineRefs: ($e = G.inlineRefs) !== null && $e !== void 0 ? $e : !0,
        schemaId: (ve = G.schemaId) !== null && ve !== void 0 ? ve : "$id",
        addUsedSchema: (me = G.addUsedSchema) !== null && me !== void 0 ? me : !0,
        validateSchema: (dt = G.validateSchema) !== null && dt !== void 0 ? dt : !0,
        validateFormats: (Ce = G.validateFormats) !== null && Ce !== void 0 ? Ce : !0,
        unicodeRegExp: (cr = G.unicodeRegExp) !== null && cr !== void 0 ? cr : !0,
        int32range: (lr = G.int32range) !== null && lr !== void 0 ? lr : !0,
        uriResolver: rc
      };
    }
    class _ {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...C(O) };
        const { es5: U, lines: z } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: S, es5: U, lines: z }), this.logger = R(O.logger);
        const b = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, o.getRules)(), u.call(this, f, O, "NOT SUPPORTED"), u.call(this, v, O, "DEPRECATED", "warn"), this._metaOpts = A.call(this), O.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && E.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), y.call(this), O.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: U, schemaId: z } = this.opts;
        let b = m;
        z === "id" && (b = { ...m }, b.id = b.$id, delete b.$id), U && O && this.addMetaSchema(b, b[z], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[U] || O : void 0;
      }
      validate(O, U) {
        let z;
        if (typeof O == "string") {
          if (z = this.getSchema(O), !z)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          z = this.compile(O);
        const b = z(U);
        return "$async" in z || (this.errors = z.errors), b;
      }
      compile(O, U) {
        const z = this._addSchema(O, U);
        return z.validate || this._compileSchemaEnv(z);
      }
      compileAsync(O, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: z } = this.opts;
        return b.call(this, O, U);
        async function b(ee, N) {
          await k.call(this, ee.$schema);
          const F = this._addSchema(ee, N);
          return F.validate || P.call(this, F);
        }
        async function k(ee) {
          ee && !this.getSchema(ee) && await b.call(this, { $ref: ee }, !0);
        }
        async function P(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return V.call(this, N), await H.call(this, N.missingSchema), P.call(this, ee);
          }
        }
        function V({ missingSchema: ee, missingRef: N }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${N} cannot be resolved`);
        }
        async function H(ee) {
          const N = await Q.call(this, ee);
          this.refs[ee] || await k.call(this, N.$schema), this.refs[ee] || this.addSchema(N, ee, U);
        }
        async function Q(ee) {
          const N = this._loading[ee];
          if (N)
            return N;
          try {
            return await (this._loading[ee] = z(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, U, z, b = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const P of O)
            this.addSchema(P, void 0, z, b);
          return this;
        }
        let k;
        if (typeof O == "object") {
          const { schemaId: P } = this.opts;
          if (k = O[P], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${P} must be string`);
        }
        return U = (0, c.normalizeId)(U || k), this._checkUnique(U), this.schemas[U] = this._addSchema(O, z, U, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, U, z = this.opts.validateSchema) {
        return this.addSchema(O, U, !0, z), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, U) {
        if (typeof O == "boolean")
          return !0;
        let z;
        if (z = O.$schema, z !== void 0 && typeof z != "string")
          throw new Error("$schema must be a string");
        if (z = z || this.opts.defaultMeta || this.defaultMeta(), !z)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(z, O);
        if (!b && U) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return b;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let U;
        for (; typeof (U = h.call(this, O)) == "string"; )
          O = U;
        if (U === void 0) {
          const { schemaId: z } = this.opts, b = new s.SchemaEnv({ schema: {}, schemaId: z });
          if (U = s.resolveSchema.call(this, b, O), !U)
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
            const U = h.call(this, O);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const U = O;
            this._cache.delete(U);
            let z = O[this.opts.schemaId];
            return z && (z = (0, c.normalizeId)(z), delete this.schemas[z], delete this.refs[z]), this;
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
        let z;
        if (typeof O == "string")
          z = O, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = z);
        else if (typeof O == "object" && U === void 0) {
          if (U = O, z = U.keyword, Array.isArray(z) && !z.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (I.call(this, z, U), !U)
          return (0, d.eachItem)(z, (k) => L.call(this, k)), this;
        ne.call(this, U);
        const b = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, d.eachItem)(z, b.type.length === 0 ? (k) => L.call(this, k, b) : (k) => b.type.forEach((P) => L.call(this, k, b, P))), this;
      }
      getKeyword(O) {
        const U = this.RULES.all[O];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: U } = this;
        delete U.keywords[O], delete U.all[O];
        for (const z of U.rules) {
          const b = z.rules.findIndex((k) => k.keyword === O);
          b >= 0 && z.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[O] = U, this;
      }
      errorsText(O = this.errors, { separator: U = ", ", dataVar: z = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((b) => `${z}${b.instancePath} ${b.message}`).reduce((b, k) => b + U + k);
      }
      $dataMetaSchema(O, U) {
        const z = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const b of U) {
          const k = b.split("/").slice(1);
          let P = O;
          for (const V of k)
            P = P[V];
          for (const V in z) {
            const H = z[V];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, ee = P[V];
            Q && ee && (P[V] = oe(ee));
          }
        }
        return O;
      }
      _removeAllSchemas(O, U) {
        for (const z in O) {
          const b = O[z];
          (!U || U.test(z)) && (typeof b == "string" ? delete O[z] : b && !b.meta && (this._cache.delete(b.schema), delete O[z]));
        }
      }
      _addSchema(O, U, z, b = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let P;
        const { schemaId: V } = this.opts;
        if (typeof O == "object")
          P = O[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(O);
        if (H !== void 0)
          return H;
        z = (0, c.normalizeId)(P || z);
        const Q = c.getSchemaRefs.call(this, O, z);
        return H = new s.SchemaEnv({ schema: O, schemaId: V, meta: U, baseId: z, localRefs: Q }), this._cache.set(H.schema, H), k && !z.startsWith("#") && (z && this._checkUnique(z), this.refs[z] = H), b && this.validateSchema(O, !0), H;
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
    _.ValidationError = r.default, _.MissingRefError = i.default, e.default = _;
    function u(G, O, U, z = "error") {
      for (const b in G) {
        const k = b;
        k in O && this.logger[z](`${U}: option ${b}. ${G[k]}`);
      }
    }
    function h(G) {
      return G = (0, c.normalizeId)(G), this.schemas[G] || this.refs[G];
    }
    function y() {
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
      for (const O of $)
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
    function I(G, O) {
      const { RULES: U } = this;
      if ((0, d.eachItem)(G, (z) => {
        if (U.keywords[z])
          throw new Error(`Keyword ${z} is already defined`);
        if (!D.test(z))
          throw new Error(`Keyword ${z} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function L(G, O, U) {
      var z;
      const b = O?.post;
      if (U && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let P = b ? k.post : k.rules.find(({ type: H }) => H === U);
      if (P || (P = { type: U, rules: [] }, k.rules.push(P)), k.keywords[G] = !0, !O)
        return;
      const V = {
        keyword: G,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? W.call(this, P, V, O.before) : P.rules.push(V), k.all[G] = V, (z = O.implements) === null || z === void 0 || z.forEach((H) => this.addKeyword(H));
    }
    function W(G, O, U) {
      const z = G.rules.findIndex((b) => b.keyword === U);
      z >= 0 ? G.rules.splice(z, 0, O) : (G.rules.push(O), this.logger.warn(`rule ${U} is not defined`));
    }
    function ne(G) {
      let { metaSchema: O } = G;
      O !== void 0 && (G.$data && this.opts.$data && (O = oe(O)), G.validateSchema = this.compile(O, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function oe(G) {
      return { anyOf: [G, X] };
    }
  })(fr)), fr;
}
var Bt = {}, Ut = {}, Ht = {}, oi;
function Hc() {
  if (oi) return Ht;
  oi = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ht.default = e, Ht;
}
var Ge = {}, ii;
function eo() {
  if (ii) return Ge;
  ii = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.callRef = Ge.getValidate = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), i = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ ce(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: d, schema: m, it: w } = l, { baseId: g, schemaEnv: $, validateName: S, opts: f, self: v } = w, { root: p } = $;
      if ((m === "#" || m === "#/") && g === p.baseId)
        return _();
      const C = i.resolveRef.call(v, p, g, m);
      if (C === void 0)
        throw new e.default(w.opts.uriResolver, g, m);
      if (C instanceof i.SchemaEnv)
        return u(C);
      return h(C);
      function _() {
        if ($ === p)
          return c(l, S, $, $.$async);
        const y = d.scopeValue("root", { ref: p });
        return c(l, (0, n._)`${y}.validate`, p, p.$async);
      }
      function u(y) {
        const x = a(l, y);
        c(l, x, y, y.$async);
      }
      function h(y) {
        const x = d.scopeValue("schema", f.code.source === !0 ? { ref: y, code: (0, n.stringify)(y) } : { ref: y }), E = d.name("valid"), A = l.subschema({
          schema: y,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: m
        }, E);
        l.mergeEvaluated(A), l.ok(E);
      }
    }
  };
  function a(l, d) {
    const { gen: m } = l;
    return d.validate ? m.scopeValue("validate", { ref: d.validate }) : (0, n._)`${m.scopeValue("wrapper", { ref: d })}.validate`;
  }
  Ge.getValidate = a;
  function c(l, d, m, w) {
    const { gen: g, it: $ } = l, { allErrors: S, schemaEnv: f, opts: v } = $, p = v.passContext ? r.default.this : n.nil;
    w ? C() : _();
    function C() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const y = g.let("valid");
      g.try(() => {
        g.code((0, n._)`await ${(0, t.callValidateCode)(l, d, p)}`), h(d), S || g.assign(y, !0);
      }, (x) => {
        g.if((0, n._)`!(${x} instanceof ${$.ValidationError})`, () => g.throw(x)), u(x), S || g.assign(y, !1);
      }), l.ok(y);
    }
    function _() {
      l.result((0, t.callValidateCode)(l, d, p), () => h(d), () => u(d));
    }
    function u(y) {
      const x = (0, n._)`${y}.errors`;
      g.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${x} : ${r.default.vErrors}.concat(${x})`), g.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(y) {
      var x;
      if (!$.opts.unevaluated)
        return;
      const E = (x = m?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if ($.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && ($.props = o.mergeEvaluated.props(g, E.props, $.props));
        else {
          const A = g.var("props", (0, n._)`${y}.evaluated.props`);
          $.props = o.mergeEvaluated.props(g, A, $.props, n.Name);
        }
      if ($.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && ($.items = o.mergeEvaluated.items(g, E.items, $.items));
        else {
          const A = g.var("items", (0, n._)`${y}.evaluated.items`);
          $.items = o.mergeEvaluated.items(g, A, $.items, n.Name);
        }
    }
  }
  return Ge.callRef = c, Ge.default = s, Ge;
}
var si;
function Kc() {
  if (si) return Ut;
  si = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hc(), t = /* @__PURE__ */ eo(), n = [
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
var Kt = {}, Gt = {}, ai;
function Gc() {
  if (ai) return Gt;
  ai = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
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
var Wt = {}, ci;
function Wc() {
  if (ci) return Wt;
  ci = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
var Jt = {}, Yt = {}, li;
function Jc() {
  if (li) return Yt;
  li = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Yt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Yt;
}
var di;
function Yc() {
  if (di) return Jt;
  di = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Jc(), i = {
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
      const { keyword: s, data: a, schemaCode: c, it: l } = o, d = s === "maxLength" ? e.operators.GT : e.operators.LT, m = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${m} ${d} ${c}`);
    }
  };
  return Jt.default = i, Jt;
}
var Xt = {}, ui;
function Xc() {
  if (ui) return Xt;
  ui = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: l, schemaCode: d, it: m } = o, w = m.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: g } = m.opts.code, $ = g.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, g), S = s.let("valid");
        s.try(() => s.assign(S, (0, n._)`${$}(${d}, ${w}).test(${a})`), () => s.assign(S, !1)), o.fail$data((0, n._)`!${S}`);
      } else {
        const g = (0, e.usePattern)(o, l);
        o.fail$data((0, n._)`!${g}.test(${a})`);
      }
    }
  };
  return Xt.default = i, Xt;
}
var Zt = {}, fi;
function Zc() {
  if (fi) return Zt;
  fi = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
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
var Qt = {}, pi;
function Qc() {
  if (pi) return Qt;
  pi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: l, $data: d, it: m } = o, { opts: w } = m;
      if (!d && a.length === 0)
        return;
      const g = a.length >= w.loopRequired;
      if (m.allErrors ? $() : S(), w.strictRequired) {
        const p = o.parentSchema.properties, { definedProperties: C } = o.it;
        for (const _ of a)
          if (p?.[_] === void 0 && !C.has(_)) {
            const u = m.schemaEnv.baseId + m.errSchemaPath, h = `required property "${_}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(m, h, m.opts.strictRequired);
          }
      }
      function $() {
        if (g || d)
          o.block$data(t.nil, f);
        else
          for (const p of a)
            (0, e.checkReportMissingProp)(o, p);
      }
      function S() {
        const p = s.let("missing");
        if (g || d) {
          const C = s.let("valid", !0);
          o.block$data(C, () => v(p, C)), o.ok(C);
        } else
          s.if((0, e.checkMissingProp)(o, a, p)), (0, e.reportMissingProp)(o, p), s.else();
      }
      function f() {
        s.forOf("prop", c, (p) => {
          o.setParams({ missingProperty: p }), s.if((0, e.noPropertyInData)(s, l, p, w.ownProperties), () => o.error());
        });
      }
      function v(p, C) {
        o.setParams({ missingProperty: p }), s.forOf(p, c, () => {
          s.assign(C, (0, e.propertyInData)(s, l, p, w.ownProperties)), s.if((0, t.not)(C), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Qt.default = i, Qt;
}
var en = {}, hi;
function el() {
  if (hi) return en;
  hi = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
var tn = {}, nn = {}, mi;
function to() {
  if (mi) return nn;
  mi = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = sa();
  return e.code = 'require("ajv/dist/runtime/equal").default', nn.default = e, nn;
}
var gi;
function tl() {
  if (gi) return tn;
  gi = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ to(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: d, parentSchema: m, schemaCode: w, it: g } = s;
      if (!l && !d)
        return;
      const $ = a.let("valid"), S = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      s.block$data($, f, (0, t._)`${w} === false`), s.ok($);
      function f() {
        const _ = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        s.setParams({ i: _, j: u }), a.assign($, !0), a.if((0, t._)`${_} > 1`, () => (v() ? p : C)(_, u));
      }
      function v() {
        return S.length > 0 && !S.some((_) => _ === "object" || _ === "array");
      }
      function p(_, u) {
        const h = a.name("item"), y = (0, e.checkDataTypes)(S, h, g.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${_}--;`, () => {
          a.let(h, (0, t._)`${c}[${_}]`), a.if(y, (0, t._)`continue`), S.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${x}[${h}] == "number"`, () => {
            a.assign(u, (0, t._)`${x}[${h}]`), s.error(), a.assign($, !1).break();
          }).code((0, t._)`${x}[${h}] = ${_}`);
        });
      }
      function C(_, u) {
        const h = (0, n.useFunc)(a, r.default), y = a.name("outer");
        a.label(y).for((0, t._)`;${_}--;`, () => a.for((0, t._)`${u} = ${_}; ${u}--;`, () => a.if((0, t._)`${h}(${c}[${_}], ${c}[${u}])`, () => {
          s.error(), a.assign($, !1).break(y);
        })));
      }
    }
  };
  return tn.default = o, tn;
}
var rn = {}, yi;
function nl() {
  if (yi) return rn;
  yi = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ to(), i = {
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
var on = {}, $i;
function rl() {
  if ($i) return on;
  $i = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ to(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: d, it: m } = o;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const w = l.length >= m.opts.loopEnum;
      let g;
      const $ = () => g ?? (g = (0, t.useFunc)(s, n.default));
      let S;
      if (w || c)
        S = s.let("valid"), o.block$data(S, f);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const p = s.const("vSchema", d);
        S = (0, e.or)(...l.map((C, _) => v(p, _)));
      }
      o.pass(S);
      function f() {
        s.assign(S, !1), s.forOf("v", d, (p) => s.if((0, e._)`${$()}(${a}, ${p})`, () => s.assign(S, !0).break()));
      }
      function v(p, C) {
        const _ = l[C];
        return typeof _ == "object" && _ !== null ? (0, e._)`${$()}(${a}, ${p}[${C}])` : (0, e._)`${a} === ${_}`;
      }
    }
  };
  return on.default = i, on;
}
var vi;
function ol() {
  if (vi) return Kt;
  vi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gc(), t = /* @__PURE__ */ Wc(), n = /* @__PURE__ */ Yc(), r = /* @__PURE__ */ Xc(), i = /* @__PURE__ */ Zc(), o = /* @__PURE__ */ Qc(), s = /* @__PURE__ */ el(), a = /* @__PURE__ */ tl(), c = /* @__PURE__ */ nl(), l = /* @__PURE__ */ rl(), d = [
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
function ca() {
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
    const { gen: a, schema: c, data: l, keyword: d, it: m } = o;
    m.items = !0;
    const w = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${w} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(m, c)) {
      const $ = a.var("valid", (0, e._)`${w} <= ${s.length}`);
      a.if((0, e.not)($), () => g($)), o.ok($);
    }
    function g($) {
      a.forRange("i", s.length, w, (S) => {
        o.subschema({ keyword: d, dataProp: S, dataPropType: t.Type.Num }, $), m.allErrors || a.if((0, e.not)($), () => a.break());
      });
    }
  }
  return ut.validateAdditionalItems = i, ut.default = r, ut;
}
var an = {}, ft = {}, wi;
function la() {
  if (wi) return ft;
  wi = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateTuple = void 0;
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
    const { gen: c, parentSchema: l, data: d, keyword: m, it: w } = o;
    S(l), w.opts.unevaluated && a.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(c, a.length, w.items));
    const g = c.name("valid"), $ = c.const("len", (0, e._)`${d}.length`);
    a.forEach((f, v) => {
      (0, t.alwaysValidSchema)(w, f) || (c.if((0, e._)`${$} > ${v}`, () => o.subschema({
        keyword: m,
        schemaProp: v,
        dataProp: v
      }, g)), o.ok(g));
    });
    function S(f) {
      const { opts: v, errSchemaPath: p } = w, C = a.length, _ = C === f.minItems && (C === f.maxItems || f[s] === !1);
      if (v.strictTuples && !_) {
        const u = `"${m}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(w, u, v.strictTuples);
      }
    }
  }
  return ft.validateTuple = i, ft.default = r, ft;
}
var _i;
function il() {
  if (_i) return an;
  _i = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ la(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return an.default = t, an;
}
var cn = {}, Si;
function sl() {
  if (Si) return cn;
  Si = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ ca(), o = {
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
var ln = {}, Ci;
function al() {
  if (Ci) return ln;
  Ci = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
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
      let d, m;
      const { minContains: w, maxContains: g } = a;
      l.opts.next ? (d = w === void 0 ? 1 : w, m = g) : d = 1;
      const $ = o.const("len", (0, e._)`${c}.length`);
      if (i.setParams({ min: d, max: m }), m === void 0 && d === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (m !== void 0 && d > m) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let C = (0, e._)`${$} >= ${d}`;
        m !== void 0 && (C = (0, e._)`${C} && ${$} <= ${m}`), i.pass(C);
        return;
      }
      l.items = !0;
      const S = o.name("valid");
      m === void 0 && d === 1 ? v(S, () => o.if(S, () => o.break())) : d === 0 ? (o.let(S, !0), m !== void 0 && o.if((0, e._)`${c}.length > 0`, f)) : (o.let(S, !1), f()), i.result(S, () => i.reset());
      function f() {
        const C = o.name("_valid"), _ = o.let("count", 0);
        v(C, () => o.if(C, () => p(_)));
      }
      function v(C, _) {
        o.forRange("i", 0, $, (u) => {
          i.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), _();
        });
      }
      function p(C) {
        o.code((0, e._)`${C}++`), m === void 0 ? o.if((0, e._)`${C} >= ${d}`, () => o.assign(S, !0).break()) : (o.if((0, e._)`${C} > ${m}`, () => o.assign(S, !1).break()), d === 1 ? o.assign(S, !0) : o.if((0, e._)`${C} >= ${d}`, () => o.assign(S, !0)));
      }
    }
  };
  return ln.default = r, ln;
}
var wr = {}, ki;
function no() {
  return ki || (ki = 1, (function(e) {
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
      for (const m in c) {
        if (m === "__proto__")
          continue;
        const w = Array.isArray(c[m]) ? l : d;
        w[m] = c[m];
      }
      return [l, d];
    }
    function s(c, l = c.schema) {
      const { gen: d, data: m, it: w } = c;
      if (Object.keys(l).length === 0)
        return;
      const g = d.let("missing");
      for (const $ in l) {
        const S = l[$];
        if (S.length === 0)
          continue;
        const f = (0, r.propertyInData)(d, m, $, w.opts.ownProperties);
        c.setParams({
          property: $,
          depsCount: S.length,
          deps: S.join(", ")
        }), w.allErrors ? d.if(f, () => {
          for (const v of S)
            (0, r.checkReportMissingProp)(c, v);
        }) : (d.if((0, t._)`${f} && (${(0, r.checkMissingProp)(c, S, g)})`), (0, r.reportMissingProp)(c, g), d.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: d, data: m, keyword: w, it: g } = c, $ = d.name("valid");
      for (const S in l)
        (0, n.alwaysValidSchema)(g, l[S]) || (d.if(
          (0, r.propertyInData)(d, m, S, g.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: w, schemaProp: S }, $);
            c.mergeValidEvaluated(f, $);
          },
          () => d.var($, !0)
          // TODO var
        ), c.ok($));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(wr)), wr;
}
var dn = {}, Ei;
function cl() {
  if (Ei) return dn;
  Ei = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
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
var un = {}, xi;
function da() {
  if (xi) return un;
  xi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: l, data: d, errsCount: m, it: w } = s;
      if (!m)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: $ } = w;
      if (w.props = !0, $.removeAdditional !== "all" && (0, r.alwaysValidSchema)(w, c))
        return;
      const S = (0, e.allSchemaProperties)(l.properties), f = (0, e.allSchemaProperties)(l.patternProperties);
      v(), s.ok((0, t._)`${m} === ${n.default.errors}`);
      function v() {
        a.forIn("key", d, (h) => {
          !S.length && !f.length ? _(h) : a.if(p(h), () => _(h));
        });
      }
      function p(h) {
        let y;
        if (S.length > 8) {
          const x = (0, r.schemaRefOrVal)(w, l.properties, "properties");
          y = (0, e.isOwnProperty)(a, x, h);
        } else S.length ? y = (0, t.or)(...S.map((x) => (0, t._)`${h} === ${x}`)) : y = t.nil;
        return f.length && (y = (0, t.or)(y, ...f.map((x) => (0, t._)`${(0, e.usePattern)(s, x)}.test(${h})`))), (0, t.not)(y);
      }
      function C(h) {
        a.code((0, t._)`delete ${d}[${h}]`);
      }
      function _(h) {
        if ($.removeAdditional === "all" || $.removeAdditional && c === !1) {
          C(h);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: h }), s.error(), g || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(w, c)) {
          const y = a.name("valid");
          $.removeAdditional === "failing" ? (u(h, y, !1), a.if((0, t.not)(y), () => {
            s.reset(), C(h);
          })) : (u(h, y), g || a.if((0, t.not)(y), () => a.break()));
        }
      }
      function u(h, y, x) {
        const E = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, y);
      }
    }
  };
  return un.default = o, un;
}
var fn = {}, Pi;
function ll() {
  if (Pi) return fn;
  Pi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ da(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: d } = o;
      d.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(d, r.default, "additionalProperties"));
      const m = (0, t.allSchemaProperties)(a);
      for (const f of m)
        d.definedProperties.add(f);
      d.opts.unevaluated && m.length && d.props !== !0 && (d.props = n.mergeEvaluated.props(s, (0, n.toHash)(m), d.props));
      const w = m.filter((f) => !(0, n.alwaysValidSchema)(d, a[f]));
      if (w.length === 0)
        return;
      const g = s.name("valid");
      for (const f of w)
        $(f) ? S(f) : (s.if((0, t.propertyInData)(s, l, f, d.opts.ownProperties)), S(f), d.allErrors || s.else().var(g, !0), s.endIf()), o.it.definedProperties.add(f), o.ok(g);
      function $(f) {
        return d.opts.useDefaults && !d.compositeRule && a[f].default !== void 0;
      }
      function S(f) {
        o.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, g);
      }
    }
  };
  return fn.default = i, fn;
}
var pn = {}, Ai;
function dl() {
  if (Ai) return pn;
  Ai = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: d } = o, { opts: m } = d, w = (0, e.allSchemaProperties)(a), g = w.filter((_) => (0, n.alwaysValidSchema)(d, a[_]));
      if (w.length === 0 || g.length === w.length && (!d.opts.unevaluated || d.props === !0))
        return;
      const $ = m.strictSchema && !m.allowMatchingProperties && l.properties, S = s.name("valid");
      d.props !== !0 && !(d.props instanceof t.Name) && (d.props = (0, r.evaluatedPropsToName)(s, d.props));
      const { props: f } = d;
      v();
      function v() {
        for (const _ of w)
          $ && p(_), d.allErrors ? C(_) : (s.var(S, !0), C(_), s.if(S));
      }
      function p(_) {
        for (const u in $)
          new RegExp(_).test(u) && (0, n.checkStrictMode)(d, `property ${u} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function C(_) {
        s.forIn("key", c, (u) => {
          s.if((0, t._)`${(0, e.usePattern)(o, _)}.test(${u})`, () => {
            const h = g.includes(_);
            h || o.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: u,
              dataPropType: r.Type.Str
            }, S), d.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${u}]`, !0) : !h && !d.allErrors && s.if((0, t.not)(S), () => s.break());
          });
        });
      }
    }
  };
  return pn.default = i, pn;
}
var hn = {}, Ri;
function ul() {
  if (Ri) return hn;
  Ri = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
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
var mn = {}, Ni;
function fl() {
  if (Ni) return mn;
  Ni = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return mn.default = t, mn;
}
var gn = {}, Mi;
function pl() {
  if (Mi) return gn;
  Mi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
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
      const l = s, d = o.let("valid", !1), m = o.let("passing", null), w = o.name("_valid");
      i.setParams({ passing: m }), o.block(g), i.result(d, () => i.reset(), () => i.error(!0));
      function g() {
        l.forEach(($, S) => {
          let f;
          (0, t.alwaysValidSchema)(c, $) ? o.var(w, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, w), S > 0 && o.if((0, e._)`${w} && ${d}`).assign(d, !1).assign(m, (0, e._)`[${m}, ${S}]`).else(), o.if(w, () => {
            o.assign(d, !0), o.assign(m, S), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return gn.default = r, gn;
}
var yn = {}, Ti;
function hl() {
  if (Ti) return yn;
  Ti = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
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
var $n = {}, Oi;
function ml() {
  if (Oi) return $n;
  Oi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
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
      const m = s.let("valid", !0), w = s.name("_valid");
      if (g(), o.reset(), l && d) {
        const S = s.let("ifClause");
        o.setParams({ ifClause: S }), s.if(w, $("then", S), $("else", S));
      } else l ? s.if(w, $("then")) : s.if((0, e.not)(w), $("else"));
      o.pass(m, () => o.error(!0));
      function g() {
        const S = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        o.mergeEvaluated(S);
      }
      function $(S, f) {
        return () => {
          const v = o.subschema({ keyword: S }, w);
          s.assign(m, w), o.mergeValidEvaluated(v, m), f ? s.assign(f, (0, e._)`${S}`) : o.setParams({ ifClause: S });
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
var vn = {}, Fi;
function gl() {
  if (Fi) return vn;
  Fi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return vn.default = t, vn;
}
var zi;
function yl() {
  if (zi) return sn;
  zi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ca(), t = /* @__PURE__ */ il(), n = /* @__PURE__ */ la(), r = /* @__PURE__ */ sl(), i = /* @__PURE__ */ al(), o = /* @__PURE__ */ no(), s = /* @__PURE__ */ cl(), a = /* @__PURE__ */ da(), c = /* @__PURE__ */ ll(), l = /* @__PURE__ */ dl(), d = /* @__PURE__ */ ul(), m = /* @__PURE__ */ fl(), w = /* @__PURE__ */ pl(), g = /* @__PURE__ */ hl(), $ = /* @__PURE__ */ ml(), S = /* @__PURE__ */ gl();
  function f(v = !1) {
    const p = [
      // any
      d.default,
      m.default,
      w.default,
      g.default,
      $.default,
      S.default,
      // object
      s.default,
      a.default,
      o.default,
      c.default,
      l.default
    ];
    return v ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(i.default), p;
  }
  return sn.default = f, sn;
}
var bn = {}, pt = {}, Ii;
function ua() {
  if (Ii) return pt;
  Ii = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ eo(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, c) {
    const { gen: l, it: d } = a;
    d.schemaEnv.root.dynamicAnchors[c] = !0;
    const m = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, w = d.errSchemaPath === "#" ? d.validateName : s(a);
    l.if((0, e._)`!${m}`, () => l.assign(m, w));
  }
  pt.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: c, schema: l, self: d } = a.it, { root: m, baseId: w, localRefs: g, meta: $ } = c.root, { schemaId: S } = d.opts, f = new n.SchemaEnv({ schema: l, schemaId: S, root: m, baseId: w, localRefs: g, meta: $ });
    return n.compileSchema.call(d, f), (0, r.getValidate)(a, f);
  }
  return pt.default = i, pt;
}
var ht = {}, ji;
function fa() {
  if (ji) return ht;
  ji = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ eo(), r = {
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
      m();
    else {
      const g = a.let("valid", !1);
      m(g), o.ok(g);
    }
    function m(g) {
      if (l.schemaEnv.root.dynamicAnchors[d]) {
        const $ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`);
        a.if($, w($, g), w(l.validateName, g));
      } else
        w(l.validateName, g)();
    }
    function w(g, $) {
      return $ ? () => a.block(() => {
        (0, n.callRef)(o, g), a.let($, !0);
      }) : () => (0, n.callRef)(o, g);
    }
  }
  return ht.dynamicRef = i, ht.default = r, ht;
}
var wn = {}, Di;
function $l() {
  if (Di) return wn;
  Di = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ua(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return wn.default = n, wn;
}
var _n = {}, Li;
function vl() {
  if (Li) return _n;
  Li = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fa(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return _n.default = t, _n;
}
var qi;
function bl() {
  if (qi) return bn;
  qi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ua(), t = /* @__PURE__ */ fa(), n = /* @__PURE__ */ $l(), r = /* @__PURE__ */ vl(), i = [e.default, t.default, n.default, r.default];
  return bn.default = i, bn;
}
var Sn = {}, Cn = {}, Vi;
function wl() {
  if (Vi) return Cn;
  Vi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ no(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Cn.default = t, Cn;
}
var kn = {}, Bi;
function _l() {
  if (Bi) return kn;
  Bi = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ no(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return kn.default = t, kn;
}
var En = {}, Ui;
function Sl() {
  if (Ui) return En;
  Ui = 1, Object.defineProperty(En, "__esModule", { value: !0 });
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
var Hi;
function Cl() {
  if (Hi) return Sn;
  Hi = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wl(), t = /* @__PURE__ */ _l(), n = /* @__PURE__ */ Sl(), r = [e.default, t.default, n.default];
  return Sn.default = r, Sn;
}
var xn = {}, Pn = {}, Ki;
function kl() {
  if (Ki) return Pn;
  Ki = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
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
      const { allErrors: m, props: w } = d;
      w instanceof e.Name ? s.if((0, e._)`${w} !== true`, () => s.forIn("key", c, (f) => s.if($(w, f), () => g(f)))) : w !== !0 && s.forIn("key", c, (f) => w === void 0 ? g(f) : s.if(S(w, f), () => g(f))), d.props = !0, o.ok((0, e._)`${l} === ${n.default.errors}`);
      function g(f) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: f }), o.error(), m || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(d, a)) {
          const v = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, v), m || s.if((0, e.not)(v), () => s.break());
        }
      }
      function $(f, v) {
        return (0, e._)`!${f} || !${f}[${v}]`;
      }
      function S(f, v) {
        const p = [];
        for (const C in f)
          f[C] === !0 && p.push((0, e._)`${v} !== ${C}`);
        return (0, e.and)(...p);
      }
    }
  };
  return Pn.default = i, Pn;
}
var An = {}, Gi;
function El() {
  if (Gi) return An;
  Gi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
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
        o.if((0, e.not)(w), () => m(w, l)), i.ok(w);
      }
      c.items = !0;
      function m(w, g) {
        o.forRange("i", g, d, ($) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: $, dataPropType: t.Type.Num }, w), c.allErrors || o.if((0, e.not)(w), () => o.break());
        });
      }
    }
  };
  return An.default = r, An;
}
var Wi;
function xl() {
  if (Wi) return xn;
  Wi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kl(), t = /* @__PURE__ */ El(), n = [e.default, t.default];
  return xn.default = n, xn;
}
var Rn = {}, Nn = {}, Ji;
function Pl() {
  if (Ji) return Nn;
  Ji = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
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
      const { gen: o, data: s, $data: a, schema: c, schemaCode: l, it: d } = r, { opts: m, errSchemaPath: w, schemaEnv: g, self: $ } = d;
      if (!m.validateFormats)
        return;
      a ? S() : f();
      function S() {
        const v = o.scopeValue("formats", {
          ref: $.formats,
          code: m.code.formats
        }), p = o.const("fDef", (0, e._)`${v}[${l}]`), C = o.let("fType"), _ = o.let("format");
        o.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => o.assign(C, (0, e._)`${p}.type || "string"`).assign(_, (0, e._)`${p}.validate`), () => o.assign(C, (0, e._)`"string"`).assign(_, p)), r.fail$data((0, e.or)(u(), h()));
        function u() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${_}`;
        }
        function h() {
          const y = g.$async ? (0, e._)`(${p}.async ? await ${_}(${s}) : ${_}(${s}))` : (0, e._)`${_}(${s})`, x = (0, e._)`(typeof ${_} == "function" ? ${y} : ${_}.test(${s}))`;
          return (0, e._)`${_} && ${_} !== true && ${C} === ${i} && !${x}`;
        }
      }
      function f() {
        const v = $.formats[c];
        if (!v) {
          u();
          return;
        }
        if (v === !0)
          return;
        const [p, C, _] = h(v);
        p === i && r.pass(y());
        function u() {
          if (m.strictSchema === !1) {
            $.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${c}" ignored in schema at path "${w}"`;
          }
        }
        function h(x) {
          const E = x instanceof RegExp ? (0, e.regexpCode)(x) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(c)}` : void 0, A = o.scopeValue("formats", { key: c, ref: x, code: E });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${A}.validate`] : ["string", x, A];
        }
        function y() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!g.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${_}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${_}(${s})` : (0, e._)`${_}.test(${s})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Yi;
function Al() {
  if (Yi) return Rn;
  Yi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Pl()).default];
  return Rn.default = t, Rn;
}
var rt = {}, Xi;
function Rl() {
  return Xi || (Xi = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.contentVocabulary = rt.metadataVocabulary = void 0, rt.metadataVocabulary = [
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
var Zi;
function Nl() {
  if (Zi) return Bt;
  Zi = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kc(), t = /* @__PURE__ */ ol(), n = /* @__PURE__ */ yl(), r = /* @__PURE__ */ bl(), i = /* @__PURE__ */ Cl(), o = /* @__PURE__ */ xl(), s = /* @__PURE__ */ Al(), a = /* @__PURE__ */ Rl(), c = [
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
  return Bt.default = c, Bt;
}
var Mn = {}, Pt = {}, Qi;
function Ml() {
  if (Qi) return Pt;
  Qi = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Pt.DiscrError = e = {})), Pt;
}
var es;
function Tl() {
  if (es) return Mn;
  es = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Ml(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Zn(), i = /* @__PURE__ */ ce(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: d, parentSchema: m, it: w } = a, { oneOf: g } = m;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const $ = d.propertyName;
      if (typeof $ != "string")
        throw new Error("discriminator: requires propertyName");
      if (d.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const S = c.let("valid", !1), f = c.const("tag", (0, e._)`${l}${(0, e.getProperty)($)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: $ })), a.ok(S);
      function v() {
        const _ = C();
        c.if(!1);
        for (const u in _)
          c.elseIf((0, e._)`${f} === ${u}`), c.assign(S, p(_[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: $ }), c.endIf();
      }
      function p(_) {
        const u = c.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: _ }, u);
        return a.mergeEvaluated(h, e.Name), u;
      }
      function C() {
        var _;
        const u = {}, h = x(m);
        let y = !0;
        for (let M = 0; M < g.length; M++) {
          let R = g[M];
          if (R?.$ref && !(0, i.schemaHasRulesButRef)(R, w.self.RULES)) {
            const I = R.$ref;
            if (R = n.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, I), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(w.opts.uriResolver, w.baseId, I);
          }
          const D = (_ = R?.properties) === null || _ === void 0 ? void 0 : _[$];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${$}"`);
          y = y && (h || x(R)), E(D, M);
        }
        if (!y)
          throw new Error(`discriminator: "${$}" must be required`);
        return u;
        function x({ required: M }) {
          return Array.isArray(M) && M.includes($);
        }
        function E(M, R) {
          if (M.const)
            A(M.const, R);
          else if (M.enum)
            for (const D of M.enum)
              A(D, R);
          else
            throw new Error(`discriminator: "properties/${$}" must have "const" or "enum"`);
        }
        function A(M, R) {
          if (typeof M != "string" || M in u)
            throw new Error(`discriminator: "${$}" values must be unique strings`);
          u[M] = R;
        }
      }
    }
  };
  return Mn.default = s, Mn;
}
var Tn = {};
const Ol = "https://json-schema.org/draft/2020-12/schema", Fl = "https://json-schema.org/draft/2020-12/schema", zl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Il = "meta", jl = "Core and Validation specifications meta-schema", Dl = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ll = ["object", "boolean"], ql = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Vl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Bl = {
  $schema: Ol,
  $id: Fl,
  $vocabulary: zl,
  $dynamicAnchor: Il,
  title: jl,
  allOf: Dl,
  type: Ll,
  $comment: ql,
  properties: Vl
}, Ul = "https://json-schema.org/draft/2020-12/schema", Hl = "https://json-schema.org/draft/2020-12/meta/applicator", Kl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Gl = "meta", Wl = "Applicator vocabulary meta-schema", Jl = ["object", "boolean"], Yl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Xl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Zl = {
  $schema: Ul,
  $id: Hl,
  $vocabulary: Kl,
  $dynamicAnchor: Gl,
  title: Wl,
  type: Jl,
  properties: Yl,
  $defs: Xl
}, Ql = "https://json-schema.org/draft/2020-12/schema", ed = "https://json-schema.org/draft/2020-12/meta/unevaluated", td = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, nd = "meta", rd = "Unevaluated applicator vocabulary meta-schema", od = ["object", "boolean"], id = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, sd = {
  $schema: Ql,
  $id: ed,
  $vocabulary: td,
  $dynamicAnchor: nd,
  title: rd,
  type: od,
  properties: id
}, ad = "https://json-schema.org/draft/2020-12/schema", cd = "https://json-schema.org/draft/2020-12/meta/content", ld = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, dd = "meta", ud = "Content vocabulary meta-schema", fd = ["object", "boolean"], pd = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, hd = {
  $schema: ad,
  $id: cd,
  $vocabulary: ld,
  $dynamicAnchor: dd,
  title: ud,
  type: fd,
  properties: pd
}, md = "https://json-schema.org/draft/2020-12/schema", gd = "https://json-schema.org/draft/2020-12/meta/core", yd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, $d = "meta", vd = "Core vocabulary meta-schema", bd = ["object", "boolean"], wd = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, _d = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Sd = {
  $schema: md,
  $id: gd,
  $vocabulary: yd,
  $dynamicAnchor: $d,
  title: vd,
  type: bd,
  properties: wd,
  $defs: _d
}, Cd = "https://json-schema.org/draft/2020-12/schema", kd = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ed = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, xd = "meta", Pd = "Format vocabulary meta-schema for annotation results", Ad = ["object", "boolean"], Rd = { format: { type: "string" } }, Nd = {
  $schema: Cd,
  $id: kd,
  $vocabulary: Ed,
  $dynamicAnchor: xd,
  title: Pd,
  type: Ad,
  properties: Rd
}, Md = "https://json-schema.org/draft/2020-12/schema", Td = "https://json-schema.org/draft/2020-12/meta/meta-data", Od = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Fd = "meta", zd = "Meta-data vocabulary meta-schema", Id = ["object", "boolean"], jd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Dd = {
  $schema: Md,
  $id: Td,
  $vocabulary: Od,
  $dynamicAnchor: Fd,
  title: zd,
  type: Id,
  properties: jd
}, Ld = "https://json-schema.org/draft/2020-12/schema", qd = "https://json-schema.org/draft/2020-12/meta/validation", Vd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Bd = "meta", Ud = "Validation vocabulary meta-schema", Hd = ["object", "boolean"], Kd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Gd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Wd = {
  $schema: Ld,
  $id: qd,
  $vocabulary: Vd,
  $dynamicAnchor: Bd,
  title: Ud,
  type: Hd,
  properties: Kd,
  $defs: Gd
};
var ts;
function Jd() {
  if (ts) return Tn;
  ts = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = Bl, t = Zl, n = sd, r = hd, i = Sd, o = Nd, s = Dd, a = Wd, c = ["/properties"];
  function l(d) {
    return [
      e,
      t,
      n,
      r,
      i,
      m(this, o),
      s,
      m(this, a)
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function m(w, g) {
      return d ? w.$dataMetaSchema(g, c) : g;
    }
  }
  return Tn.default = l, Tn;
}
var ns;
function Yd() {
  return ns || (ns = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Uc(), r = /* @__PURE__ */ Nl(), i = /* @__PURE__ */ Tl(), o = /* @__PURE__ */ Jd(), s = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), r.default.forEach((g) => this.addVocabulary(g)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: g, meta: $ } = this.opts;
        $ && (o.default.call(this, g), this.refs["http://json-schema.org/schema"] = s);
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
    var d = /* @__PURE__ */ Qr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return d.default;
    } });
    var m = /* @__PURE__ */ Zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(jt, jt.exports)), jt.exports;
}
var Xd = /* @__PURE__ */ Yd();
const Zd = /* @__PURE__ */ Pc(Xd), Qd = "https://json-schema.org/draft/2020-12/schema", eu = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", tu = "gufe-viz payload", nu = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ru = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ou = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), ro = {
  $schema: Qd,
  $id: eu,
  title: tu,
  description: nu,
  oneOf: ru,
  $defs: ou
}, um = [
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
], oo = ro.$id, io = new Zd({ allErrors: !0, strict: !1 });
io.addSchema(ro, oo);
const rs = io.getSchema(oo), iu = Object.entries(ro.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), pa = /* @__PURE__ */ new Map();
for (const e of iu) {
  const t = io.getSchema(`${oo}#/$defs/${e}`);
  t && pa.set(e, t);
}
const os = { valid: !0, issues: [] };
function is(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function su(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? pa.get(t) : void 0;
  return n ? n(e) ? os : { valid: !1, issues: is(n.errors) } : rs(e) ? os : { valid: !1, issues: is(rs.errors) };
}
function au(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const so = {
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
function cu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!so[t]) return lu(t);
  const { valid: n, issues: r } = su(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: au(r)
  };
}
function lu(e) {
  const t = Object.keys(so).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class du extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    kc("payload", n, this);
    const r = cu(n);
    if (r)
      return t.appendChild(uu(r, n)), {};
    const i = n.type, o = so[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function uu(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(pe(e.message));
  const r = (o, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${j.warnBg};color:${j.warnFg};border:1px solid ${j.warnBorder};` : `background:${j.panelBg};color:${j.textMuted2};border:1px solid ${j.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = fu(t);
  return i && n.appendChild(r(i, !1)), n;
}
function fu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${t.type}`), typeof t.name == "string" && t.name && n.push(`name: ${t.name}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ne("gufe-view", du);
function lt(e = "", t) {
  const n = T("button", Ao.base + e, t);
  return n.className = Ao.className, n.type = "button", n;
}
function Ir(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function ao(e, t = Jr.className) {
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
const pu = parseFloat(Z.xl) * 2;
function ha(e, t, n, r = {}) {
  const { remember: i } = r;
  if (i) {
    const m = i.get();
    e.some((w) => w.id === m) && (t = m);
  }
  const o = T("div", "display:flex;min-width:0;"), s = (m) => {
    o.setActive(m), i?.set(m), n(m);
  }, a = er(e, t, s), c = It(e, t, s);
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
    const { pane: m, bar: w } = r.fit;
    let g = 0;
    d = Hs(m, ($) => {
      l || (g = w.offsetWidth || g), g && o.setCompact(g > $ - pu);
    });
  }
  return o.cleanup = () => d(), o;
}
function It(e, t, n, r) {
  const i = T("select", Ys);
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
function ma(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = lt("", e);
  return o.title = r.title || e, Ir(o, i), o.onclick = () => {
    i = !i, Ir(o, i), r.remember?.set(i), n(i);
  }, o;
}
const He = "gufe-viz:", _t = /* @__PURE__ */ new Map();
let On = null;
function hu() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function tr() {
  if (On === !1) return null;
  const e = hu();
  if (!e)
    return On = !1, null;
  try {
    const t = `${He}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), On = !0, e;
  } catch {
    return On = !1, null;
  }
}
function mu(e) {
  const t = tr();
  if (!t) return _t.get(He + e) ?? null;
  try {
    return t.getItem(He + e);
  } catch {
    return null;
  }
}
function gu(e, t) {
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
      const r = mu(e);
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
        gu(e, JSON.stringify(r));
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
function co(e, t, n = -1 / 0, r = 1 / 0) {
  return nr(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function Hn(e, t = "") {
  return nr(e, t, (n) => typeof n == "string");
}
function lo() {
  const e = tr(), t = e ? Array.from({ length: e.length }, (r, i) => e.key(i)).filter((r) => typeof r == "string") : Array.from(_t.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(He)) continue;
    const i = e ? e.getItem(r) : _t.get(r) ?? null;
    i !== null && n.push([r, i]);
  }
  return n;
}
function yu() {
  const e = {};
  for (const [t, n] of lo()) {
    const r = t.slice(He.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function $u() {
  return Object.fromEntries(lo());
}
function vu() {
  const e = tr();
  if (e)
    for (const [t] of lo())
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
}, uo = {
  threeDmol: `https://unpkg.com/3dmol@${_r.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${_r.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${_r.d3}/+esm`
};
function fo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ga(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Qe = null, mt = null;
function rr() {
  if (mt) return mt;
  const e = fo("threeDmol");
  return e ? (mt = e.then((t) => Qe = t || window.$3Dmol), mt) : (mt = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await ga(uo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), mt);
}
let gt = null;
function po() {
  if (gt) return gt;
  const e = fo("rdkit");
  return e ? (gt = e.then((t) => window.RDKit = t), gt) : (gt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ga(uo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), gt);
}
let bu = null;
function ya() {
  return bu ??= po().catch((e) => (console.warn("[gufe-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Sr = null;
function wu() {
  if (!Sr) {
    const e = uo.d3;
    Sr = fo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Sr;
}
function ho(e) {
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
function $a(e, t) {
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
function _u(e) {
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
const Su = 1600;
function Cu(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Su);
}
const ku = { min: 0.25, max: 12 }, Eu = 150;
function ss(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Eu) - t;
}
function xu(e, t = ku) {
  const n = ss(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = ss(e);
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
const Pu = 2e-3;
function va(e) {
  return Math.exp(-e.deltaY * Pu);
}
function or(e, t, n = {}) {
  const r = xu(t, n.bounds), i = $a(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(va(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function mo(e, t = "Reset view") {
  const n = lt("", "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let wt = null;
function Au(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function ba(e, t) {
  if (!e) return;
  const n = Au(e);
  if (!n) return;
  const r = t?.level();
  wt = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : wt?.zoom ?? 1
  };
}
function wa(e, t) {
  if (!wt || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ...wt.rotation]), t && Math.abs(wt.zoom - 1) > 1e-9 && t.zoomBy(wt.zoom), e.render(), !0);
}
const Cr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, Ru = [
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
], B = [0, 0, 0], Nu = {
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
}, q = [0.9, 0.9, 0.9], Mu = {
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
}, Tu = {
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
}, Ou = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
function ir() {
  return Ks() === "dark";
}
function _a() {
  return Ue[ir() ? "dark" : "light"].canvas2DBg;
}
function jr() {
  return Ue[ir() ? "dark" : "light"].netDepictBg;
}
function Fu() {
  return Ue[ir() ? "dark" : "light"].netDepictCaption;
}
function sr(e) {
  return ir() ? {
    ...Ou,
    atomColourPalette: e === "mono" ? Tu : Mu
  } : e === "mono" ? { atomColourPalette: Nu } : {};
}
const zu = "rdkit", Iu = !0, ju = !0, Du = !0, Lu = !0, qu = "rdkit", Vu = "filled", Bu = 0.42, Uu = 1.5, Hu = !0, Ku = "show", Gu = "mono", Wu = 0.51, Ju = 0.74, Yu = 1.6, Xu = 1.7, Zu = 5, Qu = 0.3, ef = "#d62828", tf = "#d62828", nf = "#015ab5", rf = !1, of = "", sf = "#7c3aed", af = {
  layout: zu,
  alignPair: Iu,
  atomNumbers: ju,
  createdDestroyed: Du,
  modified: Lu,
  style: qu,
  circles: Vu,
  circleRadius: Bu,
  circleStroke: Uu,
  boundary: Hu,
  hydrogens: Ku,
  elementColors: Gu,
  numScale: Wu,
  labelScale: Ju,
  bondWidth: Yu,
  markWidth: Xu,
  haloWidth: Zu,
  haloOpacity: Qu,
  destroyedColor: ef,
  createdColor: tf,
  modifiedColor: nf,
  stereo: rf,
  customSpec: of,
  customColor: sf
}, cf = {
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: Cr.uniqueAtom,
  createdColor: Cr.uniqueAtom,
  modifiedColor: Cr.elementChange,
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
}, lf = ["rdkit", "coordgen", "conformer"], df = ["rdkit", "recolor", "halo"], uf = ["outline", "filled", "off"], ff = ["show", "dim", "hide"], pf = ["cpk", "mono"], hf = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, mf = /^#[0-9a-fA-F]{6}$/;
function At(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function We(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = hf[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const yt = (e, t) => typeof e == "boolean" ? e : t, Fn = (e, t) => typeof e == "string" && mf.test(e) ? e : t;
function gf(e) {
  const t = e && typeof e == "object" ? e : {}, n = cf;
  return {
    version: 1,
    layout: At(t.layout, lf, n.layout),
    alignPair: yt(t.alignPair, n.alignPair),
    style: At(t.style, df, n.style),
    createdDestroyed: yt(t.createdDestroyed, n.createdDestroyed),
    modified: yt(t.modified, n.modified),
    destroyedColor: Fn(t.destroyedColor, n.destroyedColor),
    createdColor: Fn(t.createdColor, n.createdColor),
    modifiedColor: Fn(t.modifiedColor, n.modifiedColor),
    boundary: yt(t.boundary, n.boundary),
    circles: At(t.circles, uf, n.circles),
    circleRadius: We(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: We(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: At(t.hydrogens, ff, n.hydrogens),
    elementColors: At(t.elementColors, pf, n.elementColors),
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
const Pe = gf(af);
function yf(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, c = (d) => {
      s !== "right" && t.add(d), s !== "left" && n.add(d);
    }, l = /^(\d+)-(\d+)$/.exec(a);
    if (l) {
      const d = Math.min(+l[1], +l[2]), m = Math.min(Math.max(+l[1], +l[2]), d + r - 1);
      for (let w = d; w <= m; w++) c(w);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function kr(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), c = t.has(s);
    (n ? a || c : a && c) && r.push(i);
  }
  return r;
}
function as(e) {
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
function $f(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function vf(e, t, n) {
  const r = new Set(t.atoms), i = new Set(kr(e, r, !0));
  return {
    deletions: kr(e, r, n),
    changes: kr(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function Sa(e, t, n, r) {
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
function bf(e) {
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
function wf(e, t) {
  return e.style === "rdkit" ? "rdkit" : bf(t) ? e.style : "rdkit";
}
function _f(e, t, n, r, i, o) {
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
  for (const g of n) {
    const $ = Dr(g.color);
    if (i === "rdkit") for (const f of g.bonds) l[f] = $;
    if (i === "recolor" && e.circles === "off") continue;
    const S = i === "recolor" && e.circles === "filled" ? $f($, 0.7) : $;
    for (const f of g.atoms)
      a[f] = S, c[f] = e.circleRadius;
  }
  const d = Dr(e.customColor);
  for (const g of r)
    g < o && (a[g] = d, c[g] = e.circleRadius);
  const m = Object.keys(a).map(Number);
  m.length && (s.atoms = m, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const w = Object.keys(l).map(Number);
  return w.length && (s.bonds = w, s.highlightBondColors = l), s;
}
function Sf(e, t, n, r) {
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
function Ca(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function go(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function ka(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function cs(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of Ca(e, s)) {
      const c = a.style;
      ka(a) ? c.fill = i : (c.stroke = i, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of go(e, s, !1)) a.style.fill = o;
}
function kf(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(Cf, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of Ca(e, a)) {
      if (ka(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", o.appendChild(l);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Ef(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of go(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function xf(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of go(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Pf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Af(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        cs(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Ef(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && xf(e, n, s.atoms, i, s.color);
      } else
        kf(e, n, s.bonds, s.color), cs(e, n, s.atoms, s.bonds, s.color, null);
  Pf(e, t, n);
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
    const m = n[4 + d];
    if (m == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(m.substring(0, 10)) || 0,
      parseFloat(m.substring(10, 20)) || 0,
      parseFloat(m.substring(20, 30)) || 0
    ]), a.push(m.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let d = 0; d < (isFinite(o) ? o : 0); d++) {
    const m = n[4 + i + d];
    if (m == null) break;
    const w = parseInt(m.substring(0, 3), 10), g = parseInt(m.substring(3, 6), 10), $ = parseInt(m.substring(6, 9), 10);
    !isFinite(w) || !isFinite(g) || c.push([w - 1, g - 1, isFinite($) ? $ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function Rf(e) {
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
const Nf = (e) => `${Rf(e)}${ar}${Lr}`, Ea = (e) => e.indexOf(Lr) >= 0 ? e : `${e}${ar}${Lr}`;
function yo(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function $o(e, t, n, r, i, o) {
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
        const d = {}, m = {};
        for (const w of a.atoms)
          d[w] = a.color, m[w] = a.radius;
        l.atoms = [...a.atoms], l.highlightAtomColors = d, l.highlightAtomRadii = m;
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
function xa(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ls = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Vr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, vt = (e) => e in Vr, ds = 400, Er = "position:absolute;inset:0;min-width:0;min-height:0;";
class Mf extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${Er}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${_a()};`
    );
    a.appendChild(c);
    const l = na();
    l.wrap.style.cssText = Er, a.appendChild(l.wrap);
    const d = T(
      "div",
      `${Er}overflow:auto;padding:16px 20px;background:${j.panelBg};color:${j.textPrimary};font-size:${Y.body};`
    );
    a.appendChild(d);
    const m = r ? yo(r) : null, w = [
      ["Name", i || Je, !1],
      ["SMILES", o || Je, !0],
      ["Charge", s == null ? Je : String(s), !1],
      ["Atoms", m ? String(m.atoms) : Je, !1],
      ["Bonds", m ? String(m.bonds) : Je, !1]
    ], g = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${Z.xl} 20px;align-items:baseline;`);
    d.appendChild(g);
    for (const [R, D, I] of w) {
      g.appendChild(
        T(
          "div",
          `font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${j.textMuted2};`,
          R
        )
      );
      const L = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${j.textPrimary}` + (I ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Y.small};` : ""),
        D
      );
      L.title = D, g.appendChild(L);
    }
    const $ = Xr(t), S = T("div", Wr, i || "Unnamed molecule");
    $ && a.appendChild(S);
    const f = ct(
      "small-molecule.mode",
      "2d",
      ls.map((R) => R.id)
    ), v = it("small-molecule.spin", !1);
    let p = f.get(), C = v.get(), _ = null, u = null;
    const h = () => {
      try {
        _?.spin(C && vt(p) ? "y" : !1);
      } catch {
      }
    }, y = (R) => {
      p = R, c.style.visibility = p === "2d" ? "visible" : "hidden", l.wrap.style.visibility = vt(p) ? "visible" : "hidden", d.style.visibility = p === "info" ? "visible" : "hidden", S.style.display = p === "info" || !$ ? "none" : "block", E.disabled = !vt(p), E.style.opacity = vt(p) ? "1" : "0.5", vt(p) && _ && (_.setStyle({}, Vr[p]), _.resize(), _.render()), h();
    }, x = T("div", ta), E = ma(
      "Spin",
      C,
      (R) => {
        C = R, h();
      },
      { title: "Toggle continuous rotation", remember: v }
    ), A = (R) => {
      R ? x.insertBefore(E, x.firstChild) : M.buttons.insertBefore(E, M.buttons.lastElementChild);
    }, M = ha(ls, p, (R) => y(R), {
      remember: f,
      onLayout: A,
      fit: { pane: a, bar: x }
    });
    return x.appendChild(M), A(!1), a.appendChild(x), y(p), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), l.container.appendChild(pe("No molecule provided")), { cleanup: () => M.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), po().then((R) => {
      const D = sr("cpk"), I = $o(R, r, ds, Pe.layout, void 0, D);
      I ? xa(c, I, ds) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren(pe(`RDKit failed to load: ${he(R)}`, !0));
    }), l.container.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
      l.container.replaceChildren(), _ = Qe.createViewer(l.container, { backgroundColor: zt.viewer() }), _.addModel(Ea(r), "sdf"), _.setStyle({}, Vr[vt(p) ? p : "stick"]), _.zoomTo(), _.render(), u = or(l.container, _), wa(_, u), h();
    }).catch((R) => {
      l.container.replaceChildren(pe(`3D render failed: ${he(R)}`, !0));
    }), {
      onResize() {
        _ && (_.resize(), _.render());
      },
      cleanup() {
        M.cleanup(), ba(_, u), u?.cleanup(), u = null, ho(_), _ = null;
      }
    });
  }
}
Ne("gufe-small-molecule", Mf);
const Pa = ["HOH", "WAT", "SOL", "TIP3"], us = { hetflag: !1 }, Tf = { hetflag: !0 }, Of = { resn: Pa }, Ie = {
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
function Aa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const l = c.slice(0, 6);
    if (l === "ENDMDL") break;
    if (l !== "ATOM  " && l !== "HETATM") continue;
    r++, l === "HETATM" && i++;
    const d = c.slice(17, 20).trim(), m = c.slice(21, 22).trim() || "_", w = c.slice(22, 26).trim(), g = c.slice(26, 27).trim();
    Pa.indexOf(d) !== -1 && o++, t.add(m), n.add(`${m}|${w}${g}|${d}`);
    const $ = parseInt(w, 10);
    isNaN($) || ($ < s && (s = $), $ > a && (a = $));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: i,
    waters: o,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function Ra(e) {
  return [
    `${kt(e.chains)} chains`,
    `${kt(e.residues)} residues`,
    `${kt(e.atoms)} atoms`,
    `${kt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${kt(e.waters)} water)` : "")
  ];
}
function Ff(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Br(e, t, n, r, i, o = () => !0) {
  const s = r || (() => {
  }), a = Ff(t.color, n), c = (l) => i ? { ...l, ...i } : l;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(c({}), {}), e.setStyle(
    c(us),
    t.rep === "stick" ? { stick: { radius: Ie.stick.radius, ...a } } : t.rep === "sphere" ? { sphere: { scale: Ie.sphere.scale, ...a } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...a } }
    )
  ), e.setStyle(
    c(Tf),
    t.hetero ? {
      stick: { radius: Ie.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    c(Of),
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
    if (o())
      try {
        Promise.resolve(
          e.addSurface(
            Qe.SurfaceType.VDW,
            { opacity: Ie.surfaceOpacity, ...a },
            c(us)
          )
        ).then(() => {
          o() && (s(null), e.render());
        }).catch((l) => s(`Surface failed: ${he(l)}`, "error"));
      } catch (l) {
        s(`Surface failed: ${he(l)}`, "error");
      }
  }, 30);
}
function zf(e, t) {
  e.setStyle(t, {
    stick: { radius: Ie.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Ie.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const fs = { min: 0.2, max: 0.8 }, If = 5;
function Na(e, t, n, r = {}) {
  const i = r.min ?? fs.min, o = r.max ?? fs.max, s = T(
    "div",
    `flex:0 0 ${If}px;align-self:stretch;touch-action:none;background:${j.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = ($) => {
    a = $, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, l = () => {
    const $ = e.getBoundingClientRect();
    return $.height > $.width;
  };
  let d = Math.min(o, Math.max(i, r.remember?.get() ?? 0.5));
  const m = () => {
    t.style.flex = `1 1 ${(d * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - d) * 100).toFixed(2)}%`;
  };
  m(), c(l()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const S = l();
    S !== a && (c(S), r.onResize?.(d));
  }).observe(e);
  let w = !1;
  s.addEventListener("pointerdown", ($) => {
    w = !0, s.setPointerCapture($.pointerId), $.preventDefault();
  }), s.addEventListener("pointermove", ($) => {
    if (!w) return;
    const S = e.getBoundingClientRect(), f = a ? S.height : S.width;
    if (f <= 0) return;
    const v = a ? $.clientY - S.top : $.clientX - S.left;
    d = Math.min(o, Math.max(i, v / f)), m();
  });
  const g = ($) => {
    w && (w = !1, s.releasePointerCapture($.pointerId), r.remember?.set(d), r.onResize?.(d));
  };
  return s.addEventListener("pointerup", g), s.addEventListener("pointercancel", g), s;
}
function vo(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : qn.min), e.style.setProperty(Xe.max, t ? "none" : qn.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? cc : "";
}
const jf = !1, bo = ".menuOpen";
function Df() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Lf = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Df
}, qf = Lf.openFreeEnergy;
function wo(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? jf, i = !1;
  const o = T("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = lt(`display:inline-flex;align-items:center;gap:${Z.md};padding:${Z.sm} ${Z.lg};`);
  s.appendChild(qf()), s.setAttribute("aria-label", n.label || "Toggle menu");
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
const Ma = "https://framejs.app", Ta = 1e4;
function Vf(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Bf = "/gufe-dev-bundle.js";
function Uf() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Ta ? e : null;
}
async function Hf() {
  const e = Uf();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Bf);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Ta ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Kf() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Gf(e) {
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
    `globalThis[${JSON.stringify(ra)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Wf(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Gf(n),
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
function Jf(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [i, o] of Object.entries($u()))
    i.endsWith(bo) || (r[i] = o);
  return { settings: r, views: t };
}
const Yf = (e) => `${Ma}/j/${e}`, Xf = (e) => `${Ma}/j/${e}.json`;
async function Zf(e, t, n, r) {
  await fetch(Xf(e), {
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
function Qf() {
  const e = T("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function _o(e) {
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.md};padding-top:${Z.lg};border-top:1px solid ${j.splitBorder};`
  ), n = lt(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${Z.md};`);
  n.appendChild(Qf()), n.appendChild(T("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const i = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? j.errorFg : j.textMuted2;
  }, o = (s, a) => {
    const c = T("a", `color:${j.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${Z.sm};`, a)), r.style.color = j.textMuted2;
  };
  n.onclick = () => {
    const s = Vf(e);
    if (!s || s.payload == null) {
      i("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = Jf(s), l = window.open("", "_blank"), d = Kf(), w = String(a.type || "gufe-viz"), g = `${w}. Shared from alchemy-viz`, $ = () => {
      n.disabled = !1;
    };
    n.disabled = !0, i("Uploading..."), Hf().then((S) => {
      if (!S) {
        l?.close(), $(), i(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Zf(d, Wf(S.js, a, c), w, g).then(() => {
        $();
        const f = Yf(d);
        l && (l.location.href = f), o(f, S.note);
      });
    }).catch((S) => {
      $(), l?.close(), i(`Upload failed: ${S instanceof Error ? S.message : String(S)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
const ps = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], hs = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], ms = /* @__PURE__ */ new Map();
function Oa(e) {
  const t = ct(
    "protein.representation",
    "cartoon",
    ps.map((y) => y.id)
  ), n = ct(
    "protein.color",
    "chain",
    hs.map((y) => y.id)
  ), r = it("protein.waters", e.waters), i = it("protein.hetero", !0), o = it("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: i.get(),
    spin: o.get()
  };
  let a = null, c = null, l = !0;
  const d = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const m = T("div", fc);
  d.appendChild(m);
  const w = ({ label: y, controls: x }) => {
    const E = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    E.appendChild(
      T(
        "span",
        `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted};`,
        y
      )
    );
    for (const A of x) E.appendChild(A);
    return E;
  }, g = T("div", `display:flex;flex-direction:column;gap:2px;font-size:${Y.small};color:${j.textMuted};`), $ = w({ label: "Contents", controls: [g] });
  $.style.display = "none";
  const f = wo(m, () => {
    const y = T("div", `${Qs}padding-top:${pc};`), x = er(
      ps,
      s.rep,
      (D) => {
        s.rep = D, e.restyle();
      },
      t
    );
    y.appendChild(w({ label: "Style", controls: [x] }));
    const E = It(
      hs,
      s.color,
      (D) => {
        s.color = D, e.restyle();
      },
      n
    );
    E.style.cssText += "width:100%;box-sizing:border-box;", y.appendChild(w({ label: "Color", controls: [E] }));
    const A = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), M = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, i, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", o, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [D, I, L, W, ne] of M)
      A.appendChild(
        ma(
          I,
          s[D],
          (X) => {
            s[D] = X, ne();
          },
          { title: L, remember: W }
        )
      );
    y.appendChild(w({ label: "Show", controls: [A] }));
    const R = mo(() => e.reset ? e.reset() : c?.reset());
    return R.style.cssText += "width:100%;box-sizing:border-box;", y.appendChild(w({ label: "Camera", controls: [...e.camera?.() ?? [], R] })), y.appendChild($), y;
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
    extras: _o
  }), v = Xr(e.element) ? e.title || e.fallbackTitle : "";
  v && m.appendChild(
    T("div", `${uc}pointer-events:none;font-size:${Y.heading};font-weight:${fe.bold};`, v)
  ), d.appendChild(f.panel);
  const p = na();
  d.appendChild(p.wrap);
  const C = Gr(d, (y) => {
    d.style.flexDirection = y ? "column" : "row", vo(f.panel, y), a?.resize(), a?.render();
  }), _ = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Y.body};z-index:20;display:none;pointer-events:none;`
  );
  p.wrap.appendChild(_);
  const u = (y, x) => {
    if (y == null) {
      _.style.display = "none";
      return;
    }
    _.textContent = y, _.style.display = "block";
    const E = x === "error";
    _.style.background = E ? j.warnBg : j.toolbarBg, _.style.color = E ? j.warnFg : j.textMuted, _.style.border = `1px solid ${E ? j.warnBorder : j.toolbarBorder}`;
  }, h = () => {
    if (!e.cameraKey || !a) return;
    const y = a.getView?.();
    Array.isArray(y) && y.length >= 4 && y.every((x) => Number.isFinite(x)) && ms.set(e.cameraKey, y.slice());
  };
  return {
    opts: s,
    pane: p,
    menu: f,
    showStatus: u,
    setStats: (y) => {
      g.replaceChildren(...y.map((x) => T("div", "overflow-wrap:anywhere;", x))), $.style.display = y.length ? "" : "none";
    },
    restoreCamera: () => {
      const y = e.cameraKey ? ms.get(e.cameraKey) : void 0;
      return !y || !a ? !1 : (a.setView(y.slice()), a.render(), !0);
    },
    viewer: () => a,
    stillWanted: () => l,
    setViewer: (y) => {
      a = y;
    },
    interaction: () => c,
    setInteraction: (y) => {
      c = y;
    },
    handle: {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        l = !1, C(), h(), c?.cleanup(), c = null, ho(a), a = null;
      }
    }
  };
}
class ep extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let i = null;
    function o() {
      const a = s.viewer();
      a && Br(a, s.opts, i, s.showStatus, void 0, s.stillWanted);
    }
    const s = Oa({
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
      i = Aa(r), s.setStats(Ra(i));
    } catch (a) {
      s.showStatus(`PDB parse error: ${he(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), rr().then(() => {
      const a = Qe.createViewer(s.pane.container, { backgroundColor: zt.viewer() });
      s.setViewer(a), a.addModel(r, "pdb"), Br(a, s.opts, i, s.showStatus, void 0, s.stillWanted), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(or(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${he(a)}`, "error");
    }), s.handle;
  }
}
Ne("gufe-protein", ep);
const Fa = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const n = document.createElementNS(Fa, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function gs(e, t) {
  const n = document.createElementNS(Fa, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const za = 3, tp = 24;
function Ia(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), i = Math.min(i, a.y), o = Math.max(o, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(i) ? null : { minX: r - t, minY: i - n, maxX: o + t, maxY: s + n };
}
const np = { min: 0.15, max: 5 }, rp = 1e-9;
function ja(e, t, n) {
  const r = n.margin ?? tp, i = n.zoom ?? np;
  let o = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${o})`), n.onTransform?.(o, s, a);
  }, l = () => {
    const I = e.getBoundingClientRect();
    return {
      width: I.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: I.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, d = (I, L, W) => Math.min(1, L / (I.maxX - I.minX + r * 2), W / (I.maxY - I.minY + r * 2)), m = () => {
    const I = n.bounds();
    if (!I) return i.min;
    const { width: L, height: W } = l();
    return Math.min(i.min, d(I, L, W));
  }, w = (I) => Math.min(i.max, Math.max(m(), o * I)), g = () => {
    o = 1, s = 0, a = 0;
    const I = n.bounds();
    if (!I) {
      c();
      return;
    }
    const { width: L, height: W } = l();
    o = d(I, L, W), s = L / 2 - (I.minX + I.maxX) / 2 * o, a = W / 2 - (I.minY + I.maxY) / 2 * o, c();
  }, S = $a(e, {
    onZoom: (I) => {
      const L = e.getBoundingClientRect(), W = I.clientX - L.left, ne = I.clientY - L.top, X = w(va(I)), oe = X / o;
      return s = W - (W - s) * oe, a = ne - (ne - a) * oe, o = X, c(), Math.abs(oe - 1) > rp;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), f = /* @__PURE__ */ new Map();
  let v = null, p = null, C = !1, _ = null;
  const u = (I) => ({
    x: I.clientX - s,
    y: I.clientY - a,
    from: { x: I.clientX, y: I.clientY }
  }), h = (I) => {
    I.pointerType === "touch" && f.size > 1 || (p = u(I), C = !1);
  }, y = (I) => {
    v || (_ && I.pointerType === "touch" && (p = { x: _.x - s, y: _.y - a, from: _ }, _ = null), p && (Math.hypot(I.clientX - p.from.x, I.clientY - p.from.y) > za && (C = !0), s = I.clientX - p.x, a = I.clientY - p.y, c()));
  }, x = () => {
    p = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", y), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("pointerleave", x);
  const E = () => {
    const [I, L] = [...f.values()];
    return { cx: (I.x + L.x) / 2, cy: (I.y + L.y) / 2, span: Math.max(1, Math.hypot(I.x - L.x, I.y - L.y)) };
  }, A = (I) => {
    if (I.pointerType === "touch") {
      if (f.set(I.pointerId, { x: I.clientX, y: I.clientY }), f.size !== 2) {
        v = null;
        return;
      }
      v = E(), p = null, C = !0;
    }
  }, M = (I) => {
    if (I.pointerType !== "touch" || !f.has(I.pointerId) || (f.set(I.pointerId, { x: I.clientX, y: I.clientY }), !v || f.size !== 2)) return;
    I.preventDefault(), I.stopPropagation();
    const L = E(), W = e.getBoundingClientRect(), ne = w(L.span / v.span), X = ne / o;
    s = L.cx - W.left - (v.cx - W.left - s) * X, a = L.cy - W.top - (v.cy - W.top - a) * X, o = ne, v = L, c();
  }, R = (I) => {
    if (I.pointerType !== "touch") return;
    if (f.delete(I.pointerId), f.size === 2) {
      v = E();
      return;
    }
    v = null;
    const [L] = [...f.values()];
    _ = f.size === 1 && L ? { ...L } : null;
  };
  e.addEventListener("pointerdown", A, !0), e.addEventListener("pointermove", M, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const D = _u(e);
  return {
    fit: g,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: g,
    centreOn(I, L, W = 1) {
      const { width: ne, height: X } = l();
      o = Math.max(o, W), s = ne / 2 - I * o, a = X / 2 - L * o, c();
    },
    transform: () => ({ scale: o, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => f.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(I, L, W) {
      o = I, s = L, a = W, c();
    },
    cleanup() {
      S.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", y), e.removeEventListener("pointerup", x), e.removeEventListener("pointercancel", x), e.removeEventListener("pointerleave", x), e.removeEventListener("pointerdown", A, !0), e.removeEventListener("pointermove", M, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const op = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Da(e) {
  const t = { ...e };
  for (const n of op) delete t[n];
  return t;
}
async function La(e) {
  let t;
  try {
    if (t = await wu(), typeof t?.forceSimulation != "function") return !1;
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
function Ae(e, t, n) {
  const r = Ke(e, t);
  return r?.type === n ? r : void 0;
}
function So(e, t) {
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
function qa(e) {
  const t = [];
  let n = 0;
  for (const s of e.keys) {
    const a = Ae(e.registry, s, e.nodeType);
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
const ip = 8, sp = 64, ap = () => new Promise((e) => setTimeout(e, 0));
function Hr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function cp(e, t, n, r) {
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
function Va(e, t, n = !0) {
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
    let m = null;
    try {
      m = d.get_qmol(a);
    } catch {
      m = null;
    }
    if (!m) return { status: "invalid" };
    if (!m.get_substruct_matches)
      return Hr(m), { status: "unsupported" };
    const w = /* @__PURE__ */ new Map();
    let g = 0;
    try {
      let $ = performance.now(), S = 0;
      for (let f = 0; f < t.length; f++) {
        const v = t[f] ? cp(d, m, t[f], n) : null;
        if (v ? v.length && w.set(f, v) : g++, !(++S < sp && performance.now() - $ < ip)) {
          if (await ap(), c !== i) return { status: "superseded" };
          S = 0, $ = performance.now();
        }
      }
    } finally {
      Hr(m);
    }
    return r.set(a, w), { status: "ok", matched: w, unreadable: g };
  }, cancel: () => void ++i };
}
const lp = 250;
function dp(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", Xs);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;min-height:1.5em;color:${j.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => {
      n.isConnected && o(n.value);
    }, lp);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && o(n.value);
    }
  };
}
const Ba = "Cmd/Ctrl-click to select several.";
function up(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : et(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function fp(e, t) {
  navigator.clipboard?.writeText(e).catch(() => ys(e, t)), navigator.clipboard || ys(e, t);
}
function ys(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${Y.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function pp(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function hp(e) {
  const { words: t } = e, n = ct(e.setting, "names", ["names", "keys"]), r = T("div", "display:flex;flex-direction:column;gap:6px;"), i = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${j.textMuted};`);
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
  const s = T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`), a = (d) => {
    s.textContent = d;
  }, c = T("div", "display:flex;gap:4px;"), l = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [d, m, w] of l) {
    const g = lt("flex:1;", m.button);
    g.title = w, g.onclick = ($) => {
      const S = o.value, f = up(e.nodes, e.edges, e.selected, d, S);
      if (!f) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : d === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Ba}` : "Nothing to copy."
        );
        return;
      }
      const v = f.split(`
`).length;
      $.shiftKey ? (pp(f, `selected-${m.plural}.txt`), a(`Saved ${v} ${m.plural} to a file.`)) : (fp(f, r), a(
        d === "edges" ? `Copied ${v} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(g);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(T("div", `font-size:${Y.tiny};color:${j.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
function Ua(e) {
  const t = Hn(`${e.namespace}.query`), n = T("div", Qs), r = T("input", Xs);
  n.appendChild(r);
  const i = dp({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Hn(`${e.namespace}.smarts`),
    run: (d) => e.match(d),
    describe: (d) => e.smarts.describe(d)
  });
  n.appendChild(i.element);
  for (const d of e.filters?.(() => l()) ?? []) n.appendChild(d);
  const o = T("div", `font-size:${Y.small};color:${j.textMuted2};`);
  n.appendChild(o);
  const s = T("div", lc);
  n.appendChild(s), n.appendChild(T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`, Ba));
  const a = hp({
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
    const d = e.nodes.map((m, w) => ({ node: m, index: w })).filter(({ node: m, index: w }) => e.shows(m, w));
    o.textContent = `${d.length} of ${e.nodes.length} ${e.noun}`;
    for (const { node: m, index: w } of d) {
      const g = m["gufe-key"], $ = ao(Jr.row);
      $.setAttribute("aria-pressed", String(e.selected.has(g)));
      const S = e.row(m, w);
      S.before && $.appendChild(S.before);
      const f = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", S.name);
      f.title = S.title, $.appendChild(f), $.onclick = (v) => {
        v.shiftKey || v.metaKey || v.ctrlKey ? e.selected.has(g) ? e.selected.delete(g) : e.selected.add(g) : (e.selected.clear(), e.selected.add(g), e.focus(w)), l(), e.refresh();
      }, s.appendChild($);
    }
    d.length || s.appendChild(T("div", `font-size:${Y.small};padding:${Z.lg};color:${j.textMuted2};`, "Nothing matches."));
  }
  return r.type = "search", r.placeholder = e.search.placeholder, r.value = t.get(), e.query.text = r.value, r.setAttribute("aria-label", e.search.label), r.oninput = () => {
    e.query.text = r.value, t.set(r.value), l(), e.refresh();
  }, l(), e.mounted?.(l), i.apply(), n;
}
function Ha(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function mp(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Ft = { node: 0.12, edge: 0.06 };
function Ka(e, t, n, r) {
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
      const { scale: d } = n.transform(), m = (l.clientX - s.x) / d, w = (l.clientY - s.y) / d;
      Math.hypot(m - t[o].x, w - t[o].y) * d > za && (a = !0), t[o].x = t[o].fx = m, t[o].y = t[o].fy = w, r.moved(o);
    });
    const c = () => {
      s = null;
    };
    i.addEventListener("pointerup", c), i.addEventListener("pointercancel", c), i.addEventListener("click", (l) => {
      l.stopPropagation(), a || r.clicked(o);
    });
  });
}
class Ga {
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
const zn = 200;
function Wa(e, t, n, r) {
  const { scale: i, tx: o, ty: s } = t, a = [];
  return e.forEach((c, l) => {
    if (!r(l)) return;
    const d = c.x * i + o, m = c.y * i + s;
    d < -zn || m < -zn || d > n.width + zn || m > n.height + zn || a.push(l);
  }), a;
}
function Ja(e) {
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
function $s(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const gp = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), yp = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), $p = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, vp = (e) => {
  const t = gp(e);
  return yp.has(t) || $p(t);
};
function Ya(e, t, n, r) {
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
const bp = 1e-6;
function In(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function vs(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function wp(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function bs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], c = o[s][1], l = t[a * 3 + c];
      if (Math.abs(l) < 1e-14) continue;
      const d = t[a * 3 + a], m = t[c * 3 + c], w = (m - d) / (2 * l);
      let g;
      Math.abs(w) > 1e10 ? g = 1 / (2 * w) : g = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
      const $ = 1 / Math.sqrt(1 + g * g), S = g * $;
      t[a * 3 + a] = d - g * l, t[c * 3 + c] = m + g * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== c) {
          const v = t[f * 3 + a], p = t[f * 3 + c];
          t[f * 3 + a] = $ * v - S * p, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + c] = S * v + $ * p, t[c * 3 + f] = t[f * 3 + c];
        }
      for (let f = 0; f < 3; f++) {
        const v = n[f * 3 + a], p = n[f * 3 + c];
        n[f * 3 + a] = $ * v - S * p, n[f * 3 + c] = S * v + $ * p;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function _p(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let _ = 0; _ < n; _++)
    r[0] += e[_][0], r[1] += e[_][1], r[2] += e[_][2], i[0] += t[_][0], i[1] += t[_][1], i[2] += t[_][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]], determined: !1 };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let _ = 0; _ < n; _++) {
    const u = e[_][0] - r[0], h = e[_][1] - r[1], y = e[_][2] - r[2], x = t[_][0] - i[0], E = t[_][1] - i[1], A = t[_][2] - i[2];
    o[0] += u * x, o[1] += u * E, o[2] += u * A, o[3] += h * x, o[4] += h * E, o[5] += h * A, o[6] += y * x, o[7] += y * E, o[8] += y * A;
  }
  const s = vs(o), a = In(s, o), c = In(o, s);
  let l = bs(a), d = bs(c);
  function m(_) {
    const u = [0, 1, 2].sort((y, x) => _.values[x] - _.values[y]), h = new Array(9);
    for (let y = 0; y < 3; y++) {
      const x = u[y];
      h[y] = _.vectors[x], h[3 + y] = _.vectors[3 + x], h[6 + y] = _.vectors[6 + x];
    }
    return {
      values: [_.values[u[0]], _.values[u[1]], _.values[u[2]]],
      vectors: h
    };
  }
  l = m(l), d = m(d);
  const w = l.vectors, g = d.vectors;
  for (let _ = 0; _ < 3; _++) {
    const u = w[_], h = w[3 + _], y = w[6 + _], x = o[0] * u + o[1] * h + o[2] * y, E = o[3] * u + o[4] * h + o[5] * y, A = o[6] * u + o[7] * h + o[8] * y, M = g[_], R = g[3 + _], D = g[6 + _];
    x * M + E * R + A * D < 0 && (g[_] = -M, g[3 + _] = -R, g[6 + _] = -D);
  }
  const $ = vs(w);
  let S = In(g, $);
  wp(S) < 0 && (g[2] = -g[2], g[5] = -g[5], g[8] = -g[8], S = In(g, $));
  const f = S[0] * i[0] + S[1] * i[1] + S[2] * i[2], v = S[3] * i[0] + S[4] * i[1] + S[5] * i[2], p = S[6] * i[0] + S[7] * i[1] + S[8] * i[2], C = l.values[1] > bp * l.values[0];
  return { R: S, t: [r[0] - f, r[1] - v, r[2] - p], determined: C };
}
function Sp(e, t, n) {
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
    i && cancelAnimationFrame(i), i = 0, s && ba(r[0]?.viewer ?? null, r[0]?.interaction ?? null), s = !1;
    for (const c of r)
      c.interaction?.cleanup(), ho(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), d = T("div", "flex:1;position:relative;min-height:0;");
      d.dataset.gufeViewer = "", l.appendChild(d), t && l.appendChild(T("div", Wr, c)), n.appendChild(l);
      const m = { container: d, viewer: null, interaction: null };
      return r.push(m), m;
    },
    open(c, l) {
      const d = Qe.createViewer(c.container, { backgroundColor: zt.viewer() });
      for (const m of l) d.addModel(Nf(m), "sdf");
      return c.viewer = d, d;
    },
    settle(c) {
      c.viewer && (c.interaction = or(c.container, c.viewer));
    },
    pose(c) {
      wa(c.viewer, c.interaction), s = !0;
    },
    sync() {
      if (r.length < 2) return;
      const c = r.map(() => "");
      let l = !1;
      const d = () => {
        if (o) {
          if (!l)
            for (let m = 0; m < r.length; m++) {
              const w = r[m].viewer;
              if (!w) continue;
              const g = JSON.stringify(w.getView());
              if (g !== c[m]) {
                l = !0;
                for (let $ = 0; $ < r.length; $++)
                  $ !== m && r[$].viewer && (r[$].viewer.setView(w.getView()), r[$].viewer.render()), c[$] = g;
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
const ws = `
`, xr = 4;
function _s(e, t, n) {
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
function kp(e, t, n) {
  const r = [], i = [];
  for (const [d, m] of n) {
    const w = e[m], g = t[d];
    !w || !g || (r.push(w), i.push(g));
  }
  if (r.length < 2) return null;
  const o = (d) => {
    let m = 0, w = 0;
    for (const g of d)
      m += g[0], w += g[1];
    return [m / d.length, w / d.length];
  }, s = o(r), a = o(i);
  let c = null, l = -1 / 0;
  for (const d of [!1, !0]) {
    let m = 0, w = 0;
    for (let p = 0; p < r.length; p++) {
      const C = (d ? -1 : 1) * (r[p][0] - s[0]), _ = r[p][1] - s[1], u = i[p][0] - a[0], h = i[p][1] - a[1];
      m += C * h - _ * u, w += C * u + _ * h;
    }
    const g = Math.hypot(m, w);
    if (g <= l) continue;
    l = g;
    const $ = Math.atan2(m, w), S = Math.cos($), f = Math.sin($), v = (d ? -1 : 1) * s[0];
    c = {
      cos: S,
      sin: f,
      mirror: d,
      tx: a[0] - (S * v - f * s[1]),
      ty: a[1] - (f * v + S * s[1])
    };
  }
  return c;
}
function Ep(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function xp(e, t, n) {
  const r = yo(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(ws);
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
  return i.join(ws);
}
function Pp(e, t, n) {
  try {
    const r = (s) => qr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = kp(i, r(e), n);
    return o ? xp(
      t,
      i.map((s) => Ep(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Ap(e, t, n, r, i) {
  const o = _s(e, t, r), s = _s(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: Pp(o, s, i) };
}
const Rp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Np = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Mp() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Kr = Mp() ? Rp : Np, Pr = 420, Be = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Ar = { gap: 2.5, minLiftFraction: 0.6 }, Tp = 24, Ss = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, Op = {
  mapped: null,
  element: Pe.modifiedColor,
  uniqueA: Pe.destroyedColor,
  uniqueB: Pe.createdColor
}, Fp = 132;
function Cs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function zp(e, t) {
  const n = Cs(e), r = Cs(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + Ar.gap, a = Ar.minLiftFraction * o + Ar.gap;
  return { axis: i, lift: Math.max(s, a) };
}
function Xa(e) {
  const t = yf(Pe.customSpec);
  return [
    { mol: e.molA, uniques: e.uniquesA, side: "left", custom: t.left },
    { mol: e.molB, uniques: e.uniquesB, side: "right", custom: t.right }
  ];
}
function Ip(e, t) {
  for (const n of [t.molA, t.molB]) {
    const r = e.box(n.name), i = e.open(r, [n]);
    i.setStyle(
      {},
      { stick: { radius: Be.stick, colorscheme: "Jmol" }, sphere: { scale: Be.sphere, colorscheme: "Jmol" } }
    ), i.zoomTo(), i.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function jp(e, t) {
  const n = Pe;
  for (const r of Xa(t)) {
    const i = e.box(r.mol.name), o = e.open(i, [r.mol]);
    o.setStyle(
      {},
      { stick: { radius: Be.stick, color: Kr.core }, sphere: { scale: Be.sphere, color: Kr.core } }
    );
    const s = (a, c) => {
      o.addStyle(
        { serial: a },
        {
          stick: { radius: Be.markStick, color: as(c) },
          sphere: { scale: Be.markSphere, color: as(c) }
        }
      );
    };
    for (const a of Sa(n, r.mol, r.uniques, r.side))
      for (const c of a.atoms) s(c, a.color);
    for (const a of r.custom)
      a < r.mol.symbols.length && s(a, n.customColor);
    o.zoomTo(), o.render(), e.settle(i), e.pose(i);
  }
  e.sync();
}
function Dp(e, t) {
  const { molA: n, molB: r, nameA: i, nameB: o, pairs: s } = t, a = e.box(`${i} (left), both overlaid (middle), ${o} (right)`), c = Kp(n.coords, r.coords), l = (v, p) => ({
    ...v,
    coords: v.coords.map(([C, _, u]) => [C + p, _, u])
  }), d = l(n, -c), m = l(r, c), w = e.open(a, [d, m, n, r]);
  w.setStyle({}, { stick: {} });
  const g = Array.from(s);
  g.forEach(([v, p], C) => {
    const _ = d.coords[v], u = m.coords[p];
    if (!_ || !u) return;
    const h = Gp(C, g.length);
    for (const [y, x, E] of [_, u])
      w.addSphere({
        center: { x: y, y: x, z: E },
        radius: Ss.sphereRadius,
        color: h,
        alpha: Ss.sphereAlpha
      });
  }), w.zoomTo();
  const { clientWidth: $, clientHeight: S } = a.container, f = $ - 2 * Tp;
  f > 0 && f < S && w.zoom(f / S), w.render(), e.settle(a);
}
function Lp(e, t) {
  const { molA: n, molB: r, nameA: i, nameB: o, pairs: s } = t, a = e.box(`${i} to ${o}  (${s.size} mapped pairs)`), { axis: c, lift: l } = zp(n.coords, r.coords), d = {
    ...r,
    coords: r.coords.map((g) => {
      const $ = [g[0], g[1], g[2]];
      return $[c] += l, $;
    })
  }, m = e.open(a, [n, d]), w = {
    stick: { radius: Be.stick, colorscheme: "Jmol" },
    sphere: { scale: Be.pairSphere, colorscheme: "Jmol" }
  };
  m.setStyle({ model: 0 }, w), m.setStyle({ model: 1 }, w);
  for (const [g, $] of s) {
    const S = n.coords[g], f = d.coords[$];
    !S || !f || m.addCylinder({
      start: { x: S[0], y: S[1], z: S[2] },
      end: { x: f[0], y: f[1], z: f[2] },
      radius: Be.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: Kr.pairLine
    });
  }
  m.zoomTo(), c === 2 ? m.rotate(90, "x") : c === 0 && m.rotate(-90, "z"), m.render(), e.settle(a);
}
function qp(e, t) {
  const n = Pe, r = Xa(t).map((i) => {
    const o = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), s = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${_a()};`
    );
    return s.appendChild(pe("Loading 2D depiction...")), o.appendChild(s), e.named && o.appendChild(T("div", Wr, i.mol.name)), e.element.appendChild(o), { box: s, side: i };
  });
  po().then((i) => {
    const o = wf(n, i), s = Ap(i, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = Sa(n, c.mol, c.uniques, c.side), d = _f(n, Pr, l, c.custom, o, c.mol.symbols.length), m = Sf(i, c.side === "left" ? s.left : s.right, Pr, d);
      if (a.replaceChildren(), !m) {
        a.appendChild(pe("Failed to parse molecule", !0));
        continue;
      }
      xa(a, m, Pr);
      const w = a.querySelector("svg");
      w && Af(w, c.mol, n, l, c.custom, o);
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
      `font-size:${Y.title};font-weight:${fe.bold};color:${Ee.title};`,
      n.name || `${r} to ${i}`
    )
  );
  const m = Up(o, s.symbols, a.symbols), w = T("div", Ve.row), g = [];
  let $ = null;
  const S = (A, M, R, D) => {
    const I = ao(`${Ve.plain}${Ve.button}`, Ve.className);
    I.appendChild(Ze(A, String(M), D)), I.onclick = () => {
      $ = $ === R ? null : R, y();
    }, g.push({ node: I, kinds: R }), w.appendChild(I);
  }, f = (A, M) => {
    const R = T("span", Ve.plain);
    R.appendChild(Ze(A, M)), w.appendChild(R);
  };
  S("mapped atoms", o.size, ["mapped", "element"]), S("element changes", c.elements.length, ["element"], Pe.modifiedColor), S(`unique to ${r}`, c.atoms.length, ["uniqueA"], Pe.destroyedColor), S(`unique to ${i}`, l.atoms.length, ["uniqueB"], Pe.createdColor), f(`atoms in ${r}`, String(s.symbols.length)), f(`atoms in ${i}`, String(a.symbols.length)), f("score", n.score == null ? Je : n.score.toFixed(3)), d.appendChild(w), d.appendChild(T("div", Fr, "Correspondence"));
  const v = T("div", `font-size:${Y.small};line-height:1.6;color:${Ee.faint};`);
  d.appendChild(v);
  const p = T(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Fp}px,1fr));gap:${Z.xs} ${Z.md};font-family:${Y.mono};font-size:${Y.small};color:${Ee.primary};`
  );
  d.appendChild(p);
  const C = String(Math.max(s.symbols.length, a.symbols.length, 1) - 1).length, _ = (A, M) => `${(A == null ? Je : String(A)).padStart(C)} ${M.padEnd(2)}`, u = (A) => {
    if (A.kind === "uniqueA") return `${r} atom ${A.a} ${A.symbolA} maps to nothing`;
    if (A.kind === "uniqueB") return `${i} atom ${A.b} ${A.symbolB} maps to nothing`;
    const M = A.kind === "element" ? ", an element change" : "";
    return `${r} atom ${A.a} ${A.symbolA} maps to ${i} atom ${A.b} ${A.symbolB}${M}`;
  }, h = (A) => {
    const M = T(
      "div",
      `white-space:pre;padding:${Z.xs} ${Z.md};border-radius:${be.sm};background:${zt.card};border-left:3px solid ${Op[A.kind] ?? "transparent"};`,
      `${_(A.a, A.symbolA)} -> ${_(A.b, A.symbolB)}`
    );
    return M.title = u(A), M.dataset.gufeRelation = A.kind, M;
  }, y = () => {
    const A = $, M = A ? m.filter((R) => A.includes(R.kind)) : m;
    p.replaceChildren(...M.map(h)), M.length || p.appendChild(
      T(
        "div",
        `font-size:${Y.small};line-height:1.6;color:${Ee.faint};grid-column:1/-1;`,
        $ ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), v.textContent = (o.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${i}, by atom index and element` + ($ ? "; click the chip again for all of them" : "");
    for (const R of g) {
      const D = R.kinds === $;
      R.node.setAttribute("aria-pressed", String(D)), R.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  y();
  const x = Object.entries(n.annotations ?? {}).filter(([A]) => A !== "score");
  if (!x.length) return;
  d.appendChild(T("div", Fr, "Annotations"));
  const E = T("div", `${gc}color:${Ee.faint};`);
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
function Es(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function Bp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Up(e, t, n) {
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
function Za(e, t) {
  const n = Ae(t, e.componentA, "SmallMoleculeComponentViz"), r = Ae(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: So(t, [e.componentA, e.componentB]) };
}
function Hp(e, t, n) {
  const r = [], i = [];
  for (const [s, a] of n) {
    const c = e.coords[s], l = t.coords[a];
    c && l && (r.push(c), i.push(l));
  }
  const o = _p(r, i);
  return o?.determined ? { ...t, coords: t.coords.map((s) => Sp(s, o.R, o.t)) } : t;
}
function Kp(e, t) {
  let n = 0;
  for (const i of [e, t]) {
    let o = 1 / 0;
    for (const s of i)
      s[0] < o && (o = s[0]), s[0] - o > n && (n = s[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Rr.minSpread ? r : Rr.minSpread) * Rr.spreadFactor;
}
function Gp(e, t) {
  const n = Ru, i = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(i), s = Math.min(o + 1, n.length - 1), a = i - o;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const d = (w) => parseInt(w.slice(1 + l * 2, 3 + l * 2), 16), m = Math.round(d(n[o]) + (d(n[s]) - d(n[o])) * a);
    c += m.toString(16).padStart(2, "0");
  }
  return c;
}
function Wp(e, t) {
  const n = Ae(t, e.componentA, "SmallMoleculeComponentViz"), r = Ae(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const i = et(n), o = et(r), s = Bp(e);
  let a, c;
  try {
    a = qr(n.sdf, i), c = qr(r.sdf, o);
  } catch (d) {
    return { problem: `Could not read a molecule: ${he(d)}`, isError: !0 };
  }
  c = Hp(a, c, s);
  const l = /* @__PURE__ */ new Map();
  for (const [d, m] of s) l.set(m, d);
  return {
    pair: {
      from: n,
      to: r,
      nameA: i,
      nameB: o,
      pairs: s,
      molA: a,
      molB: c,
      uniquesA: Es(s, a.symbols, c.symbols),
      uniquesB: Es(l, c.symbols, a.symbols)
    }
  };
}
class Jp extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Wp(n, St(n));
    if ("problem" in r)
      return t.appendChild(pe(r.problem, r.isError)), {};
    const i = r.pair, o = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(o);
    const s = Cp(o, Xr(t)), a = ct("atom-mapping.mode", "plain", ks.map(($) => $.id));
    let c = a.get();
    const l = T("div", ta), d = ha(
      ks,
      c,
      ($) => {
        c = $, g();
      },
      { remember: a, fit: { pane: o, bar: l } }
    );
    l.appendChild(d), o.appendChild(l);
    const m = Zr(), w = {
      plain: Ip,
      colored: jp,
      openfe: Dp,
      lines: Lp
    }, g = () => {
      const $ = m.start();
      if (s.clear(), c === "info") return Vp(s, i, n);
      if (c === "2d") return qp(s, i);
      const S = w[c];
      s.element.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
        $() && (s.element.replaceChildren(), S(s, i));
      }).catch((f) => {
        $() && s.element.replaceChildren(pe(`3D render failed: ${he(f)}`, !0));
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
Ne("gufe-atom-mapping", Jp);
const xs = ["Force-directed", "Circular", "Radial"], Yp = "ligand-network", Xp = "Click a ligand or an edge to see it.";
function Zp(e) {
  const { index: t, from: n, to: r, ...i } = e;
  return i;
}
function Qp(e) {
  return Da(e);
}
const Ps = (e) => Math.round(e * 100) / 100;
function eh(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const i = r(n.selected) ? Math.trunc(n.selected) : -1, o = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: i, selectedKind: o };
}
function th(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Rt = { initial: 0.58, min: 0.25, max: 0.8 }, xe = 38, As = 1.5, Nr = {
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
}, nh = "6 4", Rs = 200, rh = 2, oh = Math.SQRT2 * (xe - rh), ih = 14, sh = 18, Se = {
  fontSize: 11,
  below: xe + 12,
  minFontSize: 7,
  insideWidth: (xe - 6) * 2
}, Ot = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Ns = 1.5, ah = 6.5, ch = 0.9, lh = 14, Mr = { size: 8, clearance: 8 }, dh = { fontSize: 10 }, uh = 0.4, fh = () => Dr(le.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, Qa = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], ph = (e) => Ha(Qa, e), hh = (e) => mp(Qa, e), mh = 1.8, Ms = 2 * xe + 68, ke = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Ms,
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
  collisionPadding: Ms / 2 - xe,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function gh(e) {
  const t = T("div", mc);
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
function yh(e) {
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
      refX: xe + Mr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Mr.size,
      markerHeight: Mr.size,
      orient: "auto"
    });
    return o.appendChild(ae("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function $h(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function vh(e) {
  const [t, n] = le.netEdgeRamp.map($h), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Ye = et;
function ec(e, t) {
  return t ? Ye(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function bh(e, t, n, r, i) {
  const o = r.trim().toLowerCase(), s = n.size > 0 || o.length > 0;
  if (!s && i <= 0) return null;
  const a = /* @__PURE__ */ new Set();
  for (const l of e) {
    const d = l["gufe-key"];
    (!s || n.has(d) || o.length > 0 && ec(l, o)) && a.add(d);
  }
  const c = /* @__PURE__ */ new Set();
  return t.forEach((l, d) => {
    (l.score ?? 0) < i || !a.has(l.from["gufe-key"]) || !a.has(l.to["gufe-key"]) || c.add(d);
  }), { nodes: a, edges: c };
}
function wh(e) {
  const t = new Ga(), n = sr("cpk"), r = fh(), i = ($) => (e.matched().get($) ?? []).join(","), o = ($, S) => {
    if (!t.wants(S)) return;
    const f = e.nodes[S], v = e.matched().get(S), p = f.sdf && $o(
      $,
      f.sdf,
      Rs,
      Pe.layout,
      v && { atoms: v, color: r, radius: uh },
      n
    );
    if (!p) {
      t.refused(S);
      return;
    }
    if (!Ya(e.depictionGroups[S], p, Rs, oh)) {
      t.refused(S);
      return;
    }
    t.drew(S, i(S));
  }, s = () => t.forget(i, ($) => e.depictionGroups[$].replaceChildren()), a = [], c = ($, S) => {
    if (a[$]) return a[$];
    S.setAttribute("font-size", String(Se.fontSize));
    let f = 0;
    try {
      f = S.getBBox().width;
    } catch {
      return Se.fontSize;
    }
    if (!f) return Se.fontSize;
    const v = Se.fontSize * Se.insideWidth / f;
    return a[$] = Math.max(Se.minFontSize, Math.min(Se.fontSize, v)), a[$];
  }, l = [], d = ($) => {
    const S = e.captionPlates[$];
    if (l[$] === Se.below) {
      S.setAttribute("display", "inline");
      return;
    }
    let f = null;
    try {
      f = e.captions[$].getBBox();
    } catch {
      f = null;
    }
    if (!f?.width) {
      S.setAttribute("display", "none");
      return;
    }
    S.setAttribute("x", String(f.x - Ot.captionPadX)), S.setAttribute("y", String(f.y - Ot.captionPadY)), S.setAttribute("width", String(f.width + Ot.captionPadX * 2)), S.setAttribute("height", String(f.height + Ot.captionPadY * 2)), S.setAttribute("display", "inline"), l[$] = Se.below;
  }, m = ($, S) => {
    const f = S.structure && !t.has($) ? hh(S) : S;
    e.depictionGroups[$].setAttribute("display", f.structure ? "inline" : "none");
    const v = e.plates[$];
    v.setAttribute("display", f.structure ? "inline" : "none");
    const p = e.matched().has($);
    v.setAttribute("stroke", p ? le.netMatchStroke : le.netNodeStroke);
    const C = e.circles[$];
    C.setAttribute("fill", f.disc ? p ? le.netMatchFill : le.netNodeFill : "none"), C.setAttribute("stroke", f.disc ? p ? le.netMatchStroke : le.netNodeStroke : "none"), e.initials[$].setAttribute("display", f.initials ? "inline" : "none");
    const _ = e.charges[$];
    if (_) {
      const x = !f.structure, E = xe * Nr.at;
      _.setAttribute("x", String(E)), _.setAttribute("y", String(-E)), _.setAttribute("font-size", String(x ? Nr.bigFontSize : Nr.fontSize)), _.setAttribute("font-weight", x ? fe.bold : fe.normal);
    }
    const u = e.captions[$], h = f.name === "below";
    if (u.setAttribute("fill", p ? le.netMatchStroke : h ? Fu() : le.netNodeCaption), u.setAttribute("display", f.name === "none" ? "none" : "inline"), h || e.captionPlates[$].setAttribute("display", "none"), f.name === "none") return;
    const y = f.name === "inside";
    u.setAttribute("y", y ? "0" : String(Se.below)), u.setAttribute("dominant-baseline", y ? "middle" : "auto"), u.setAttribute("font-size", String(y ? c($, u) : Se.fontSize)), h && d($);
  };
  let w = null;
  return { apply: ($, S, f) => {
    const v = ph($);
    w = v, e.stage.setAttribute("data-detail", v.id), e.edgeLabels.setAttribute("display", v.edgeScores ? "inline" : "none");
    for (let C = 0; C < e.nodes.length; C++) m(C, v);
    if (!v.structure) return;
    const p = Wa(e.nodes, { scale: $, tx: S, ty: f }, e.viewport(), (C) => t.wants(C));
    p.length && e.rdkit().then((C) => {
      if (!(!C || w !== v))
        for (const _ of p)
          o(C, _), m(_, v);
    }).catch(() => {
    });
  }, forget: s };
}
function _h(e) {
  const t = co("ligand-network.minScore", 0, 0, 1);
  return Ua({
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
      const n = T("div", `display:flex;align-items:center;gap:${Z.lg};font-size:${Y.small};color:${j.textMuted};`), r = T("span", `min-width:28px;color:${j.textPrimary};`, "0.00"), i = T("input", "flex:1;");
      return i.type = "range", i.min = "0", i.max = "1", i.step = "0.01", i.value = String(t.get()), e.filter.minScore = Number(i.value), i.setAttribute("aria-label", "Hide mappings scoring below this"), i.oninput = () => {
        e.filter.minScore = Number(i.value), r.textContent = e.filter.minScore.toFixed(2), t.set(e.filter.minScore), e.refresh();
      }, n.appendChild(T("span", "", "score >=")), n.appendChild(i), n.appendChild(r), [n];
    },
    shows: (n) => ec(n, e.query.text.trim().toLowerCase()),
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
class Sh extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: i, edges: o, unresolved: s, dangling: a } = qa({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (k) => [k.componentA, k.componentB]
    }), c = Gn(n.name || "Ligand network");
    c.statsEl.appendChild(Ze("ligands", String(i.length))), c.statsEl.appendChild(Ze("mappings", String(o.length))), t.appendChild(c);
    const l = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const d = /* @__PURE__ */ new Set(), m = { minScore: 0 }, w = { text: "" }, g = () => ya(), $ = Va(
      g,
      i.map((k) => k.sdf ?? "")
    );
    let S = /* @__PURE__ */ new Map();
    const f = async (k) => {
      const P = await $.run(k);
      return P.status === "superseded" || (S = P.status === "ok" ? P.matched : /* @__PURE__ */ new Map(), z()), P;
    }, v = wo(
      c,
      () => _h({
        nodes: i,
        edges: o,
        selected: d,
        filter: m,
        query: w,
        refresh: () => U(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (k) => {
          M?.focusOn(k), O({ kind: "ligand", index: k });
        },
        match: (k) => f(k)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => b(),
        remember: it("ligand-network.menuOpen", !1),
        extras: _o
      }
    );
    l.appendChild(v.panel);
    let p = () => {
    };
    const C = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), _ = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`);
    l.appendChild(C), l.appendChild(
      Na(l, C, _, {
        min: Rt.min,
        max: Rt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: co("ligand-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => p(),
        onOrient: (k) => vo(v.panel, k)
      })
    ), l.appendChild(_);
    const u = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${j.netCanvasBg};`);
    C.appendChild(u);
    const h = ct("ligand-network.layout", "Force-directed", xs), y = this.#e(
      (k) => b(k),
      () => M?.reset(),
      h,
      o.some((k) => $s(k.from, k.to) !== 0)
    );
    C.appendChild(y.bar);
    const x = this.#t(_, r);
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
    const E = g(), A = gh(u);
    let M = null;
    const R = eh(Ec(Yp), i.length);
    let D = R && { scale: R.scale, tx: R.tx, ty: R.ty }, I = R ? R.nodes : null, L = o.length ? { kind: "edge", index: 0 } : null;
    if (R && R.selected >= 0) {
      const k = R.selectedKind ?? "edge";
      R.selected < (k === "ligand" ? i.length : o.length) && (L = { kind: k, index: R.selected });
    }
    const W = () => M?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let ne = h.get(), X = !1;
    const oe = Zr(), G = () => {
      if (!L) {
        x.message(o.length ? Xp : "Click a ligand to see it.");
        return;
      }
      L.kind === "edge" ? x.showMapping(o[L.index]) : x.showLigand(i[L.index]);
    }, O = (k) => {
      L = k, G(), M?.setSelected(L);
    }, U = () => {
      const k = bh(i, o, d, w.text, m.minScore);
      M?.setEmphasis(k?.nodes ?? null, k?.edges ?? null);
    }, z = () => M?.setMatches(S), b = (k = ne) => {
      const P = M && k === ne ? M.transform() : null;
      k !== ne && (I = null);
      const V = oe.start();
      ne = k, M?.cleanup(), M = null, u.querySelectorAll("svg").forEach((N) => N.remove());
      const H = u.clientWidth || 800, Q = u.clientHeight || 600;
      Ch(i, H, Q, ne, o), I && th(i, I);
      const ee = () => {
        if (!V()) return;
        const N = this.#n(u, i, o, H, Q, O, E, A);
        M = N, N.setSelected(L), U(), z();
        const F = D ?? P;
        F ? (N.setTransform(F.scale, F.tx, F.ty), D = null) : N.fit();
      };
      if (ne !== "Force-directed" || X || I) {
        ee();
        return;
      }
      kh(i, o, H, Q).then((N) => {
        if (V()) {
          if (N) {
            ee();
            return;
          }
          X = !0, y.picker.value = "Circular", st(u, "d3 could not be loaded - showing the circular layout instead"), b("Circular");
        }
      }, ee);
    };
    return p = () => b(), b(), G(), {
      onResize: () => b(),
      cleanup: () => {
        oe.stop(), $.cancel(), A.remove(), M?.cleanup(), M = null, x.cleanup();
      },
      viewState: () => ({
        nodes: i.map((k) => [Ps(k.x), Ps(k.y)]),
        ...W(),
        selected: L ? L.index : -1,
        selectedKind: L ? L.kind : "edge"
      })
    };
  }
  #e(t, n, r, i) {
    const o = T(
      "div",
      ea
    ), s = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${j.textMuted};`);
    if (s.appendChild(T("span", "", "score")), s.appendChild(
      T(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${le.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(T("span", "", "0 -> 1")), o.appendChild(s), i) {
      const c = T("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${j.textMuted};`);
      c.appendChild(
        T(
          "span",
          `width:24px;height:0;border-top:2px dashed ${j.netEdgeLine};display:inline-block;`
        )
      ), c.appendChild(T("span", "", "net charge change")), o.appendChild(c);
    }
    o.appendChild(T("label", `font-size:${Y.body};margin-left:auto;color:${j.textMuted};`, "Layout"));
    const a = It(
      xs.map((c) => ({ id: c, label: c })),
      r.get(),
      (c) => t(c),
      r
    );
    return o.appendChild(a), o.appendChild(mo(n, "Reset pan and zoom")), { bar: o, picker: a };
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
    const r = Ja(t);
    return {
      ...r,
      showMapping: (i) => r.show(Za(Zp(i), n)),
      showLigand: (i) => r.show(Qp(i))
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
    const m = ae("defs"), w = yh(m);
    l.appendChild(m);
    const g = [], $ = ae("g"), S = ae("g"), f = ae("g", { "pointer-events": "none" }), v = ae("g");
    d.append($, S, f, v);
    for (const L of r) {
      const W = vh(L.score), ne = Ns + (L.score ?? 0.5) * (ah - Ns), X = ae("line", {
        stroke: le.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": ne + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), oe = $s(L.from, L.to), G = ae("line", {
        stroke: W,
        "stroke-width": ne,
        "stroke-opacity": ch,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${w(W)})`,
        "pointer-events": "none",
        ...oe ? { "stroke-dasharray": nh } : {}
      }), O = ae("line", { stroke: "transparent", "stroke-width": lh, style: "cursor:pointer;" });
      O.addEventListener("click", (b) => {
        b.stopPropagation(), s({ kind: "edge", index: L.index });
      }), O.addEventListener("mousemove", (b) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Te(Ye(L.from))} -&gt; ${Te(Ye(L.to))}</div>` + (L.score == null ? `<div style="color:${j.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${L.score.toFixed(3)}</b></div>`) + (oe ? `<div style="margin-top:4px;">net charge <b>${Te(ot(oe))}</b> <span style="color:${j.textMuted2};">(${Te(ot(L.from.total_charge ?? 0))} to ${Te(ot(L.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Y.tiny};color:${j.textMuted2};">Click to see the mapping</div>`,
          b.offsetX,
          b.offsetY
        );
      }), O.addEventListener("mouseleave", () => c.hide()), g.push(X), $.append(X, G), S.appendChild(O);
      const U = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": dh.fontSize,
        "font-weight": 600,
        fill: le.netEdgeLabel
      });
      U.textContent = L.score == null ? "" : L.score.toFixed(2);
      const z = ae("g", { class: "gufe-edge-label" });
      z.appendChild(U), f.appendChild(z);
    }
    const p = [], C = [], _ = [], u = [], h = [], y = [], x = [], E = [], A = n.map((L) => {
      const W = ae("g", { class: "gufe-node", style: "cursor:grab;" });
      W.addEventListener("mousemove", (b) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Te(Ye(L))}</div>` + (L.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Te(L.smiles)}</div>` : "") + (L.total_charge ? `<div style="margin-top:3px;">formal charge <b>${Te(ot(L.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Y.tiny};color:${j.textMuted2};overflow-wrap:anywhere;">${Te(L["gufe-key"])}</div><div style="margin-top:4px;font-size:${Y.tiny};color:${j.textMuted2};">Click to see the ligand</div>`,
          b.offsetX,
          b.offsetY
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
      W.appendChild(ne), h.push(ne);
      const X = ae("circle", {
        class: "gufe-node-disc",
        r: xe,
        fill: le.netNodeFill,
        stroke: le.netNodeStroke,
        "stroke-width": As,
        "pointer-events": "all"
      });
      W.appendChild(X), C.push(X);
      const oe = ae("circle", {
        class: "gufe-node-plate",
        r: xe,
        fill: jr(),
        stroke: le.netNodeStroke,
        "stroke-width": As,
        display: "none",
        "pointer-events": "none"
      });
      W.appendChild(oe), _.push(oe);
      const G = ae("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      W.appendChild(G), p.push(G);
      const O = ae("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": sh,
        "font-weight": 700,
        fill: le.netInitials,
        "pointer-events": "none"
      });
      if (O.textContent = Ye(L).slice(0, 2).toUpperCase(), W.appendChild(O), y.push(O), L.total_charge) {
        const b = ae("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: le.badgeFg,
          "pointer-events": "none"
        });
        b.textContent = ot(L.total_charge), W.appendChild(b), E.push(b);
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
      U.textContent = jn(Ye(L), ih), U.setAttribute("display", "none"), x.push(U);
      const z = ae("rect", {
        class: "gufe-node-caption-plate",
        rx: Ot.captionRadius,
        fill: jr(),
        display: "none",
        "pointer-events": "none"
      });
      return u.push(z), W.appendChild(z), W.appendChild(U), v.appendChild(W), W;
    }), M = () => {
      r.forEach((L, W) => {
        for (const X of [g[W], $.children[W * 2 + 1], S.children[W]]) {
          const oe = X;
          oe.setAttribute("x1", String(L.from.x)), oe.setAttribute("y1", String(L.from.y)), oe.setAttribute("x2", String(L.to.x)), oe.setAttribute("y2", String(L.to.y));
        }
        f.children[W].setAttribute(
          "transform",
          `translate(${(L.from.x + L.to.x) / 2},${(L.from.y + L.to.y) / 2 - 8})`
        );
      }), n.forEach((L, W) => A[W].setAttribute("transform", `translate(${L.x},${L.y})`));
    };
    M();
    let R = /* @__PURE__ */ new Map();
    const D = wh({
      nodes: n,
      circles: C,
      plates: _,
      captionPlates: u,
      matched: () => R,
      captions: x,
      initials: y,
      charges: E,
      depictionGroups: p,
      edgeLabels: f,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), I = this.#r(
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
        g.forEach((X, oe) => X.setAttribute("opacity", oe === W ? String(Nt.opacity) : "0")), h.forEach((X, oe) => X.setAttribute("opacity", oe === ne ? String(Nt.opacity) : "0"));
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
        const { scale: W, tx: ne, ty: X } = I.transform();
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
        A.forEach((ne, X) => {
          const oe = !L || L.has(n[X]["gufe-key"]);
          ne.setAttribute("opacity", oe ? "1" : String(Ft.node));
        }), r.forEach((ne, X) => {
          const oe = !W || W.has(X), G = oe ? "0.9" : String(Ft.edge);
          $.children[X * 2 + 1].setAttribute("stroke-opacity", G), f.children[X].setAttribute("opacity", oe ? "1" : String(Ft.edge));
        });
      },
      focusOn(L) {
        const W = n[L];
        W && I.centreOn(W.x, W.y);
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
  #r(t, n, r, i, o, s, a) {
    const c = ja(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Ia(r, xe),
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return Ka(i, r, c, { moved: () => o(), clicked: a }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (l, d) => c.centreOn(l, d, mh)
    };
  }
}
function Ch(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (c, l) => {
    c.forEach((d, m) => {
      const w = 2 * Math.PI * m / Math.max(1, c.length) - Math.PI / 2;
      d.x = o + l * Math.cos(w), d.y = s + l * Math.sin(w), d.fx = r === "Force-directed" ? void 0 : d.x, d.fy = r === "Force-directed" ? void 0 : d.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of i)
      c.get(S.from["gufe-key"]).push(S.to["gufe-key"]), c.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const l = new Map(e.map((S) => [S["gufe-key"], S])), d = e.reduce(
      (S, f) => c.get(f["gufe-key"]).length > c.get(S["gufe-key"]).length ? f : S
    ), m = /* @__PURE__ */ new Set([d["gufe-key"]]);
    let w = [d["gufe-key"]], g = 0;
    const $ = Math.min(t, n) * 0.18;
    for (; w.length; ) {
      a(
        w.map((f) => l.get(f)),
        g === 0 ? 0 : g * $ + 40
      );
      const S = [];
      for (const f of w)
        for (const v of c.get(f))
          m.has(v) || (m.add(v), S.push(v));
      w = S, g++;
    }
    a(e.filter((S) => !m.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function kh(e, t, n, r) {
  return La({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((i) => ({
      source: i.from["gufe-key"],
      target: i.to["gufe-key"],
      score: i.score
    })),
    tickMultiplier: ke.tickMultiplier,
    forces: (i, o) => [
      [
        "link",
        i.forceLink(o).id((s) => s["gufe-key"]).distance((s) => ke.linkBaseDistance + (1 - (s.score ?? 0.5)) * ke.linkScoreBonus).strength(ke.linkStrength)
      ],
      [
        "charge",
        i.forceManyBody().strength(ke.chargeStrength).distanceMin(ke.chargeDistanceMin).distanceMax(ke.chargeDistanceMax)
      ],
      ["center", i.forceCenter(n / 2, r / 2).strength(ke.centerStrength)],
      ["collision", i.forceCollide(xe + ke.collisionPadding).iterations(ke.collisionIterations)],
      ["x", i.forceX(n / 2).strength(ke.drift)],
      ["y", i.forceY(r / 2).strength(ke.drift)]
    ]
  });
}
Ne("gufe-ligand-network", Sh);
const Eh = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function tc(e, t) {
  const n = [], r = [];
  for (const i of Object.values(e.components ?? {})) {
    const o = Ke(t, i);
    o && (Eh.includes(o.type) ? n.push(o) : o.type === "SmallMoleculeComponentViz" && r.push(o));
  }
  return { structures: n, ligands: r };
}
function xh(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Ts = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], Ph = 0.4;
class Ah extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = tc(n, St(n)), i = r.structures.map((g, $) => $), o = r.ligands.map((g, $) => r.structures.length + $), s = ct(
      "complex.focus",
      "site",
      Ts.map((g) => g.id)
    );
    let a = s.get(), c = null;
    const l = Oa({
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
          Ts,
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
      g && (Br(g, l.opts, c, l.showStatus, { model: i }, l.stillWanted), zf(g, { model: o }), g.render());
    }
    function m() {
      const g = l.viewer();
      g && (a === "site" && o.length ? (g.zoomTo({ model: o }), g.zoom(Ph)) : g.zoomTo(), g.render(), w());
    }
    function w() {
      const g = l.viewer();
      g && (l.interaction()?.cleanup(), l.setInteraction(or(l.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(Os(r, () => c));
    try {
      c = Aa(r.structures[0].pdb), l.setStats(Os(r, () => c));
    } catch (g) {
      l.showStatus(`PDB parse error: ${he(g)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), rr().then(() => {
      const g = Qe.createViewer(l.pane.container, { backgroundColor: zt.viewer() });
      l.setViewer(g);
      for (const $ of r.structures) g.addModel($.pdb, "pdb");
      for (const $ of r.ligands) g.addModel(Ea($.sdf), "sdf");
      d(), l.restoreCamera() ? w() : m(), g.spin(l.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      l.showStatus(`Failed to render structure: ${he(g)}`, "error");
    }), l.handle;
  }
}
function Os(e, t) {
  const n = e.ligands.reduce((o, s) => {
    const a = yo(s.sdf);
    return a ? o + a.atoms : o;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, i = t();
  return i ? [r, ...Ra(i)] : [r];
}
Ne("gufe-complex", Ah);
function Rh(e, t) {
  return {
    ...e,
    registry: So(t, Object.values(e.components ?? {}))
  };
}
const Nh = "chemical-system.component", Mh = 200, Th = "35%";
function Oh(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function Fh(e) {
  return e.type === "UnknownComponentViz" ? Wn(e.gufe_type) : null;
}
function Fs(e) {
  return T(
    "div",
    `padding:10px 10px 16px;font-weight:${fe.bold};font-size:${Y.title};color:${j.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class zh extends Re {
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
      return t.appendChild(Fs(s)), t.appendChild(
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
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.panelBg};`
    );
    a.appendChild(c), c.appendChild(Fs(s));
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
    const m = T(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    d.appendChild(m);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", w.setAttribute(zr, ""), m.appendChild(w);
    const g = tc(n, r), $ = xh(g), S = (E) => $ && g.structures.some(
      (A) => A === E
    ), f = i.filter(([, E]) => !S(E)).map(([E, A]) => ({
      key: E,
      title: E,
      subtitle: Oh(A),
      badge: Fh(A),
      element: w,
      point: () => {
        w.payload = A;
      }
    }));
    if ($) {
      const E = document.createElement("gufe-complex");
      E.style.cssText = "flex:1;min-width:0;min-height:0;", E.setAttribute(zr, ""), E.payload = n, f.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${g.ligands.length === 1 ? g.ligands[0].name || "ligand" : "ligands"} in ${g.structures[0].name || "structure"}`,
        badge: null,
        element: E,
        point: () => {
        }
      });
    }
    let v = null;
    const p = (E) => {
      v !== E && (m.replaceChildren(E), v = E);
    }, C = Hn(Nh), _ = [], u = (E) => {
      _.forEach((A, M) => A.setAttribute("aria-pressed", String(M === E))), f[E].point(), p(f[E].element);
    }, h = (E) => {
      C.set(f[E].key), u(E);
    };
    f.forEach((E, A) => {
      const M = ao(`${Jr.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      M.appendChild(
        T("span", `font-weight:700;color:${j.textPrimary};`, E.title)
      ), M.appendChild(
        T(
          "span",
          `font-size:${Y.small};color:${j.textMuted};`,
          E.subtitle
        )
      ), E.badge && M.appendChild(E.badge), M.onclick = () => h(A), _.push(M), l.appendChild(M);
    });
    const y = f.findIndex((E) => E.key === C.get());
    u(y < 0 ? 0 : y);
    const x = Gr(a, (E) => {
      a.style.flexDirection = E ? "column" : "row", c.style.flex = E ? "0 0 auto" : `0 0 ${Mh}px`, c.style.maxHeight = E ? Th : "none", c.style.borderRight = E ? "none" : `1px solid ${j.splitBorder}`, c.style.borderBottom = E ? `1px solid ${j.splitBorder}` : "none", l.style.flexDirection = E ? "row" : "column", l.style.flexWrap = E ? "wrap" : "nowrap", v?.resize?.();
    });
    return {
      onResize: () => v?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        x(), v?.remove();
      }
    };
  }
}
Ne("gufe-chemical-system", zh);
const Ih = 210, jh = "42%";
function Dh(e, t) {
  const n = Ae(t, e.stateA, "ChemicalSystemViz"), r = Ae(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const i = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) i.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) i.push(o.componentA, o.componentB);
  return { ...e, registry: So(t, i) };
}
const Co = {
  unchanged: j.diffUnchanged,
  changed: j.diffChanged,
  added: j.diffAdded,
  removed: j.diffRemoved
};
function Lh(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function qh(e, t) {
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
    `min-width:0;display:flex;align-items:baseline;gap:${Z.md};padding:5px ${Z.lg};border-radius:${be.md};background:${j.cardBg};border:1px solid ${j.cardBorder};`
  );
  n && r.appendChild(
    T(
      "span",
      `flex:0 0 auto;font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;color:${j.textMuted2};`,
      n
    )
  );
  const i = Vh(e);
  if (!i)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Y.body};color:${j.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? j.cardBorder : Co[t];
  const o = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:600;color:${j.textPrimary};overflow-wrap:anywhere;`,
    i.name
  );
  return o.title = i.name, r.appendChild(o), i.type && r.appendChild(Wn(i.type)), r;
}
function Bh(e, t, n, r) {
  const i = T("div", `display:flex;flex-direction:column;gap:${Z.sm};min-width:0;`), o = T("div", `display:flex;align-items:center;gap:${Z.md};min-width:0;`);
  o.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Co[t]};`)
  );
  const s = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:${fe.bold};color:${j.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, o.appendChild(s), i.appendChild(o), t === "unchanged" ? (i.appendChild(Tr(n, t, null)), i) : (i.appendChild(Tr(n, t, "A")), i.appendChild(Tr(r, t, "B")), i);
}
function Uh(e, t) {
  const n = Ke(t, e.componentA), r = Ke(t, e.componentB);
  return `${n ? et(n) : "A"} to ${r ? et(r) : "B"}`;
}
function zs(e) {
  return T(
    "div",
    `font-weight:${fe.bold};font-size:${Y.heading};color:${j.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Is(e, t) {
  const n = T("div", `display:flex;align-items:baseline;gap:${Z.md};min-width:0;font-size:${Y.small};`);
  return n.appendChild(T("span", `flex:0 0 auto;color:${j.textMuted};`, e)), n.appendChild(
    T("span", `min-width:0;font-weight:${fe.bold};color:${j.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class Hh extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = St(n), i = Ae(r, n.stateA, "ChemicalSystemViz"), o = Ae(r, n.stateB, "ChemicalSystemViz"), s = Ae(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!i || !o) {
      const _ = T("div", "padding:12px 14px;flex-shrink:0;");
      return _.appendChild(zs(c)), t.appendChild(_), t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = qh(i, o), d = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(d);
    const m = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${j.panelBg};`
    );
    d.appendChild(m);
    const w = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    d.appendChild(w);
    const g = T("div", `display:flex;flex-direction:column;gap:${Z.md};min-width:0;`);
    g.appendChild(zs(c)), g.appendChild(Is("protocol", s?.gufe_type || s?.name || Je)), g.appendChild(Is("mappings", String(a.length))), m.appendChild(g);
    const $ = T("div", `display:flex;flex-direction:column;gap:${Z.xs};`);
    for (const [_, u] of [
      ["State A", i],
      ["State B", o]
    ])
      $.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.06em;text-transform:uppercase;color:${j.textMuted2};overflow-wrap:anywhere;`,
          `${_}${u.name ? ` - ${u.name}` : ""}`
        )
      );
    m.appendChild($);
    const S = /* @__PURE__ */ new Set();
    for (const _ of l) {
      const u = i.components?.[_], h = o.components?.[_], y = Lh(u, h);
      S.add(y), m.appendChild(
        Bh(
          _,
          y,
          Ke(r, u),
          Ke(r, h)
        )
      );
    }
    if (S.size > 1) {
      const _ = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${Z.lg} 12px;padding-top:${Z.sm};font-size:${Y.small};color:${j.textMuted};`
      );
      for (const u of ["unchanged", "changed", "added", "removed"])
        S.has(u) && _.appendChild(Ze(u, "", Co[u]));
      m.appendChild(_);
    }
    const f = T("div", dc, "Atom mapping");
    w.appendChild(f);
    const v = Gr(t, (_) => {
      d.style.flexDirection = _ ? "column" : "row", m.style.flex = _ ? "0 0 auto" : `0 0 ${Ih}px`, m.style.maxWidth = _ ? "none" : jh, m.style.maxHeight = _ ? "45%" : "none", m.style.borderRight = _ ? "none" : `1px solid ${j.splitBorder}`, m.style.borderBottom = _ ? `1px solid ${j.splitBorder}` : "none", f.style.display = _ ? "block" : "none";
    });
    if (!a.length)
      return w.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: v };
    const p = document.createElement("gufe-atom-mapping");
    p.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (_) => {
      p.payload = Za(a[_], r);
    };
    if (C(0), a.length > 1) {
      const _ = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Y.small};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};color:${j.textMuted};`
      );
      _.appendChild(
        er(
          a.map((u, h) => ({
            id: String(h),
            label: u.name || Uh(u, r)
          })),
          "0",
          (u) => C(Number(u))
        )
      ), w.appendChild(_);
    }
    return w.appendChild(p), {
      onResize: () => p.resize?.(),
      cleanup: () => {
        v(), p.remove();
      }
    };
  }
}
Ne("gufe-transformation", Hh);
const at = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, js = (e) => e ? at.depictedHeight : at.height, ze = { pad: 6, size: 122, radius: 6, inset: 4 }, Ds = 200, Mt = {
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
}, Kh = "6 4", qe = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Gh = 7, Wh = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Jh = (e) => Ha(Wh, e), Dn = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, Ls = (e, t) => {
  const n = t ? Dn.selectedWidth : Dn.width;
  return Math.max(Dn.min, Math.min(n, n * e));
}, Or = { width: 3, selectedWidth: 4.5, min: 1.25 }, qs = (e, t) => {
  const n = t ? Or.selectedWidth : Or.width;
  return Math.max(Or.min, Math.min(n, n * e));
}, bt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Tt = { initial: 0.56, min: 0.25, max: 0.78 }, Vs = { x: at.width / 2, y: at.depictedHeight / 2 }, Yh = 1.4;
function Xh(e, t, n, r, i, o, s, a) {
  const c = o.trim().toLowerCase();
  if (!i.size && !c && s === "" && a === null) return null;
  const l = c.length > 0 || s !== "" || a !== null, d = /* @__PURE__ */ new Set();
  e.forEach((w, g) => {
    const $ = l && (!c || n[g].includes(c)) && (!s || r[g] === s) && (!a || a.has(g));
    (i.has(w["gufe-key"]) || $) && d.add(w["gufe-key"]);
  });
  const m = /* @__PURE__ */ new Set();
  return t.forEach((w, g) => {
    d.has(w.from["gufe-key"]) && d.has(w.to["gufe-key"]) && m.add(g);
  }), { nodes: d, edges: m };
}
const Kn = et;
function nc(e, t) {
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
const Zh = (e, t) => nc(e, t).join(" + ");
function Qh(e, t) {
  const n = { fill: le.netNodeFill, stroke: le.netNodeStroke }, r = e.map((s) => Zh(s, t)), i = [...new Set(r)];
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
function em(e, t) {
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
function tm(e, t) {
  const n = [], r = [], i = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const a = [];
    for (const c of Object.values(s.components ?? {})) {
      const l = Ae(t, c, "SmallMoleculeComponentViz");
      if (!l) continue;
      let d = i.get(c);
      d === void 0 && (d = n.length, i.set(c, d), n.push(l.sdf ?? ""), r.push(l.total_charge ?? 0)), a.push(d);
    }
    return a;
  });
  return { sources: n, charges: r, perNode: o };
}
function nm(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((i) => i !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function rm(e) {
  const t = Hn("alchemical-network.composition");
  return Ua({
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
          `width:10px;height:10px;border-radius:${be.sm};flex-shrink:0;background:${i.fill};border:1px solid ${i.stroke};`
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
function om(e, t, n) {
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
function im(e, t, n, r) {
  return La({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((i) => ({ source: i.from["gufe-key"], target: i.to["gufe-key"] })),
    tickMultiplier: bt.tickMultiplier,
    forces: (i, o) => [
      [
        "link",
        i.forceLink(o).id((s) => s["gufe-key"]).distance(bt.linkDistance).strength(bt.linkStrength)
      ],
      ["charge", i.forceManyBody().strength(bt.chargeStrength)],
      ["center", i.forceCenter(n / 2, r / 2)],
      ["collision", i.forceCollide(bt.collisionRadius).iterations(bt.collisionIterations)]
    ]
  });
}
class sm extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: i, edges: o, unresolved: s, dangling: a } = qa({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (b) => [b.stateA, b.stateB]
    }), c = (b) => {
      const k = Ae(r, b.protocol, "ProtocolViz");
      return k?.gufe_type || k?.name || "";
    }, l = new Set(o.map(c).filter(Boolean)), d = Gn(n.name || "Alchemical network");
    d.statsEl.appendChild(Ze("systems", String(i.length))), d.statsEl.appendChild(Ze("transformations", String(o.length))), l.size && d.statsEl.appendChild(Ze("protocol", [...l].join(", ")));
    const m = Qh(i, r), w = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    let g = () => {
    };
    const $ = /* @__PURE__ */ new Set(), S = { composition: "" }, f = { text: "" };
    let v = null;
    const p = () => {
      const b = Xh(
        i,
        o,
        C,
        m.signatures,
        $,
        f.text,
        S.composition,
        x
      );
      v?.setEmphasis(b?.nodes ?? null, b?.edges ?? null);
    }, C = i.map((b) => em(b, r)), _ = () => ya(), u = tm(i, r), h = Va(_, u.sources), y = i.map((b, k) => {
      const P = u.perNode[k].find((Q) => u.sources[Q]), V = P === void 0 ? null : u.sources[P], H = nc(b, r);
      return {
        colors: m.colorOf(k),
        composition: H.join(" + "),
        besides: nm(H, V !== null, u.perNode[k].length),
        sdf: V,
        charge: P === void 0 ? 0 : u.charges[P]
      };
    });
    let x = null, E = () => {
    };
    const A = async (b) => {
      const k = await h.run(b);
      return k.status === "superseded" || (x = k.status === "ok" ? new Set(i.flatMap((P, V) => u.perNode[V].some((H) => k.matched.has(H)) ? [V] : [])) : null, E(), p()), k;
    }, M = wo(
      d,
      () => rm({
        nodes: i,
        edges: o,
        haystacks: C,
        signatures: m.signatures,
        colorOf: m.colorOf,
        compositions: m.compositions,
        selected: $,
        filter: S,
        query: f,
        refresh: () => p(),
        matched: () => x,
        match: (b) => A(b),
        mounted: (b) => {
          E = b;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (b) => {
          v?.focusOn(b), U("node", b);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => g(),
        remember: it("alchemical-network.menuOpen", !1),
        extras: _o
      }
    ), R = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), D = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`), I = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${j.netCanvasBg};`), L = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    L.appendChild(M.panel), L.appendChild(I), R.appendChild(d), R.appendChild(L), w.appendChild(R), w.appendChild(
      Na(w, R, D, {
        min: Tt.min,
        max: Tt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: co("alchemical-network.canvasShare", Tt.initial, Tt.min, Tt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => g(),
        onOrient: (b) => {
          L.style.flexDirection = b ? "column" : "row", vo(M.panel, b);
        }
      })
    ), w.appendChild(D);
    const W = this.#t(D, r);
    if (!i.length)
      return I.appendChild(
        pe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), W.message("Nothing to show."), { cleanup: () => W.cleanup() };
    s && st(
      I,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && st(
      I,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let ne = !1, X = null;
    const oe = Zr(), G = new Map(i.map((b, k) => [b["gufe-key"], y[k].charge])), O = o.some(
      (b) => (G.get(b.to["gufe-key"]) ?? 0) !== (G.get(b.from["gufe-key"]) ?? 0)
    );
    R.appendChild(this.#e(m.legend, () => v?.reset(), O));
    const U = (b, k) => {
      X = { kind: b, index: k }, W.show(b === "node" ? i[k] : o[k], b), v?.setSelected(X);
    }, z = () => {
      const b = oe.start(), k = I.clientWidth || 800, P = I.clientHeight || 600;
      om(i, k, P);
      const V = () => {
        b() && (v?.cleanup(), I.querySelectorAll("svg").forEach((H) => H.remove()), v = this.#n(I, i, o, k, P, y, _, U), v.setSelected(X), p());
      };
      if (ne) {
        V();
        return;
      }
      im(i, o, k, P).then((H) => {
        b() && (H || (ne = !0, st(I, "d3 could not be loaded - showing the circular layout instead")), V());
      }, V);
    };
    return g = z, z(), U("node", 0), {
      onResize: () => z(),
      cleanup: () => {
        oe.stop(), v?.cleanup(), v = null, W.cleanup();
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
    const i = T("div", ea);
    if (i.appendChild(mo(n, "Reset pan and zoom")), r) {
      const o = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      o.appendChild(T("span", `width:24px;height:0;border-top:2px dashed ${j.netEdgeLine};flex-shrink:0;`)), o.appendChild(T("span", `font-size:${Y.small};color:${j.textMuted};`, "net charge change")), i.appendChild(o);
    }
    if (!t.length) return i;
    i.appendChild(T("span", `font-size:${Y.small};color:${j.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const a = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      a.appendChild(
        T(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), a.appendChild(
        T("span", `font-size:${Y.small};color:${j.textPrimary};overflow-wrap:anywhere;`, o)
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
    const r = Ja(t);
    return {
      ...r,
      show(i, o) {
        let s;
        if (o === "node")
          s = Rh(Da(i), n);
        else {
          const { index: a, from: c, to: l, ...d } = i;
          s = Dh(d, n);
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
    const m = ae("g"), w = ae("g");
    d.append(m, w);
    let g = () => {
    };
    const $ = ja(l, d, {
      bounds: () => Ia(n, Vs.x, Vs.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (P, V, H) => g(P, V, H)
    }), S = (P, V) => {
      $.wasPan() || c(P, V);
    }, f = [], v = [], p = new Map(n.map((P, V) => [P["gufe-key"], s[V].charge])), C = (P) => (p.get(P.to["gufe-key"]) ?? 0) - (p.get(P.from["gufe-key"]) ?? 0);
    r.forEach((P, V) => {
      const H = C(P), Q = ae("line", {
        x1: P.from.x,
        y1: P.from.y,
        x2: P.to.x,
        y2: P.to.y,
        stroke: le.netEdgeLine,
        "stroke-width": Ls(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
        ...H ? { "stroke-dasharray": Kh } : {}
      });
      gs(
        Q,
        (P.name || "transformation") + (H ? ` - net charge change ${ot(H)}` : "")
      ), Q.addEventListener("click", () => S("edge", V)), m.appendChild(Q), f.push(Q);
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
      ee.addEventListener("click", () => S("edge", V)), m.appendChild(ee), v.push(ee);
    });
    const _ = n.map(() => []), u = new Map(n.map((P, V) => [P, V]));
    r.forEach((P, V) => {
      const H = u.get(P.from), Q = u.get(P.to);
      H !== void 0 && _[H].push(V), Q !== void 0 && Q !== H && _[Q].push(V);
    });
    const h = [], y = [], x = [], E = [], A = [], M = [], R = [], D = [], I = [];
    n.forEach((P, V) => {
      const H = s[V], Q = js(H.sdf), ee = ae("g", {
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
        "stroke-width": qs(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (ee.appendChild(N), h.push(N), y.push(H.colors.stroke), H.sdf) {
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
        te.appendChild(re), ee.appendChild(te), D.push(te), I.push(re);
      } else
        M.push(null), D.push(null), I.push(null), R.push(null);
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
      K.textContent = jn(H.composition, qe.subChars), ee.appendChild(K), A.push(K), gs(ee, `${Kn(P)} - ${H.composition}`), w.appendChild(ee);
    });
    const L = (P) => {
      const V = n[P];
      x[P].setAttribute("transform", `translate(${V.x},${V.y})`);
      for (const H of _[P])
        for (const Q of [f[H], v[H]])
          r[H].from === V && (Q.setAttribute("x1", String(V.x)), Q.setAttribute("y1", String(V.y))), r[H].to === V && (Q.setAttribute("x2", String(V.x)), Q.setAttribute("y2", String(V.y)));
    }, W = new Ga(), ne = sr("cpk"), X = (P, V) => {
      if (!W.wants(V)) return;
      const H = I[V], Q = s[V].sdf;
      if (!H || !Q) return;
      const ee = $o(P, Q, Ds, Pe.layout, void 0, ne);
      if (!ee || !Ya(H, ee, Ds, ze.size - ze.inset * 2)) {
        W.refused(V);
        return;
      }
      W.drew(V);
    }, oe = (P, V, H) => {
      const Q = s[P], ee = V && W.has(P), N = (we) => we * H >= Gh, F = N(qe.nameSize), K = N(qe.subSize);
      E[P].setAttribute("display", F ? "inline" : "none"), A[P].setAttribute("display", K ? "inline" : "none"), M[P]?.setAttribute("display", ee ? "inline" : "none"), I[P]?.setAttribute("display", ee ? "inline" : "none");
      const J = js(Q.sdf), te = -J / 2 + ze.pad, re = R[P];
      re && (re.setAttribute("x", String(ee ? at.width / 2 - Mt.inset : 0)), re.setAttribute(
        "y",
        String(ee ? -J / 2 + Mt.inset : -J * Mt.bigAt)
      ), re.setAttribute("font-size", String(ee ? Mt.fontSize : Mt.bigFontSize)), re.setAttribute("font-weight", ee ? fe.normal : fe.bold)), M[P]?.setAttribute("y", String(te)), D[P]?.setAttribute("transform", `translate(0,${te + ze.size / 2})`);
      const ue = J / 2 - qe.bottom;
      E[P].setAttribute("y", String(ee ? ue - (K ? qe.gap : 0) : -2)), A[P].setAttribute("y", String(ee ? ue : 14)), A[P].textContent = jn(ee ? Q.besides : Q.composition, qe.subChars);
    };
    let G = null, O = 1, U = null, z = null;
    const b = () => {
      h.forEach((P, V) => {
        const H = U === V;
        P.setAttribute("stroke", H ? le.cardBorderActive : y[V]), P.setAttribute("stroke-width", String(qs(O, H)));
      }), f.forEach((P, V) => {
        const H = z === V;
        P.setAttribute("stroke", H ? le.netHaloColor : le.netEdgeLine), P.setAttribute("stroke-width", String(Ls(O, H)));
      });
    };
    return g = (P, V, H) => {
      const Q = Jh(P);
      G = Q, l.setAttribute("data-detail", Q.id), O = P, b();
      for (let N = 0; N < n.length; N++) oe(N, Q.structure, P);
      if (!Q.structure) return;
      const ee = Wa(
        n,
        { scale: P, tx: V, ty: H },
        { width: i, height: o },
        (N) => !!s[N].sdf && W.wants(N)
      );
      ee.length && a().then((N) => {
        if (!(!N || G !== Q))
          for (const F of ee)
            X(N, F), oe(F, !0, P);
      }).catch(() => {
      });
    }, Ka(x, n, $, { moved: L, clicked: (P) => c("node", P) }), $.fit(), {
      setSelected(P) {
        U = P?.kind === "node" ? P.index : null, z = P?.kind === "edge" ? P.index : null, b();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(P, V) {
        x.forEach((H, Q) => {
          const ee = !P || P.has(n[Q]["gufe-key"]);
          H.setAttribute("opacity", ee ? "1" : String(Ft.node));
        }), f.forEach((H, Q) => {
          const ee = !V || V.has(Q);
          H.setAttribute("opacity", ee ? "1" : String(Ft.edge));
        });
      },
      focusOn(P) {
        const V = n[P];
        V && $.centreOn(V.x, V.y, Yh);
      },
      reset: $.reset,
      cleanup: $.cleanup
    };
  }
}
Ne("gufe-alchemical-network", sm);
class am extends Re {
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
    return o.style.maxWidth = "460px", o.appendChild(Vn("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Vn("Name", n.name)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Y.small};line-height:1.6;color:${j.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Ne("gufe-protocol", am);
function cm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Bs(e, t = !1) {
  const n = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.xl};padding:${Z.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${j.splitBorder};`)
  );
  return n.appendChild(T("div", Fr, e)), n;
}
function Ln(e) {
  return T(
    "div",
    `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`,
    e
  );
}
function Us(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${Z.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Ve.plain}${Ve.outline}font-family:${Y.mono};font-size:${Y.body};`,
      e
    )
  ), n.appendChild(Ln(t)), n;
}
class lm extends Re {
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
      `font-family:${Y.mono};font-size:${Y.display};font-weight:${fe.bold};line-height:1.1;color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Ln("SMILES")), s.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const v = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      v.appendChild(
        T(
          "div",
          `font-size:${Y.body};color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), v.appendChild(Ln("Name")), s.appendChild(v);
    }
    o.appendChild(s), i.appendChild(o);
    const d = Bs("Ions"), m = T("div", `display:flex;align-items:flex-end;gap:${Z.xxl};flex-wrap:wrap;`);
    n.positive_ion && m.appendChild(Us(n.positive_ion, "cation")), n.negative_ion && m.appendChild(Us(n.negative_ion, "anion"));
    const { value: w, unit: g } = cm(n.ion_concentration), $ = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), S = T("div", `display:flex;align-items:baseline;gap:${Z.md};justify-content:flex-end;`);
    S.appendChild(
      T(
        "div",
        `font-size:${Y.display};font-weight:${fe.bold};line-height:1;color:${j.titleColor};`,
        w
      )
    ), g && (S.appendChild(document.createTextNode(" ")), S.appendChild(T("div", `font-size:${Y.body};color:${j.textMuted};`, g))), $.appendChild(S), $.appendChild(Ln("Ion concentration")), m.appendChild($), d.appendChild(m);
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
        yc,
        f ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), i.appendChild(d), r.appendChild(i), {};
  }
}
Ne("gufe-solvent", lm);
class dm extends Re {
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
        `font-size:${Y.heading};font-weight:600;padding-bottom:6px;color:${j.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      T(
        "div",
        `font-size:${Y.body};line-height:1.6;padding-bottom:10px;color:${j.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Vn("Name", n.name || "(unnamed)")), o.appendChild(Vn("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Ne("gufe-unknown-component", dm);
Js();
typeof globalThis < "u" && (globalThis.gufeViz = { settings: yu, reset: vu });
export {
  um as PAYLOAD_TYPES,
  so as VIEW_TAGS
};
