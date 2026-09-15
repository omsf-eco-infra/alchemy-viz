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
function Ks(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const sc = 460;
function Gr(e, t, n = sc) {
  let r = null;
  return Ks(e, (o) => {
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
function ac() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Ao = "data-gufe-theme";
function Wr() {
  return ac() ? "dark" : "light";
}
let le = Ue[Wr()];
const Gs = "--gufe-", Ws = Object.keys(Ue.light).filter(
  (e) => e !== "viewerBg" && typeof Ue.light[e] == "string"
), j = Object.fromEntries(Ws.map((e) => [e, `var(${Gs}${e})`])), ur = (e) => Ws.map((t) => `${Gs}${t}:${e[t]};`).join("");
function cc() {
  return [
    `:root{color-scheme:light dark;${ur(Ue.light)}}`,
    `@media (prefers-color-scheme:dark){:root:not([${Ao}="light"]){${ur(Ue.dark)}}}`,
    `:root[${Ao}="dark"]{${ur(Ue.dark)}}`,
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
const Po = "alchemy-viz-theme";
function Js() {
  if (typeof document > "u" || document.getElementById(Po)) return;
  const e = document.createElement("style");
  e.id = Po, e.textContent = cc(), document.head.appendChild(e);
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
}, Ro = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `color:${j.btnFg};border:1px solid ${j.btnBorder};padding:${Z.sm} 9px;font-size:${Y.small};font-weight:${fe.bold};border-radius:${be.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn"
}, Ys = `background:${j.selectBg};color:${j.textPrimary};border:1px solid ${j.selectBorder};border-radius:${be.md};padding:${Z.sm} ${Z.lg};font-size:${Y.body};cursor:pointer;font-family:inherit;`, Xs = `${Ys}width:100%;box-sizing:border-box;cursor:text;`, Zs = "24px", lc = `display:flex;align-items:flex-start;gap:12px;padding:9px ${Z.xxl};flex-shrink:0;line-height:${Zs};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};`, qn = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Qs = `display:flex;flex-direction:column;gap:${Z.lg};flex:1;min-width:var(${Xe.min},${qn.min});max-width:var(${Xe.max},${qn.max});box-sizing:border-box;padding:${Z.xl};min-height:0;overflow-y:auto;background:${j.panelBg};border:0 solid ${j.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, dc = "45%", uc = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", ea = `display:flex;align-items:center;gap:${Z.xl};flex-wrap:wrap;padding:${Z.lg} ${Z.xxl};flex-shrink:0;background:${j.toolbarBg};border-top:1px solid ${j.toolbarBorder};`, fc = `flex-shrink:0;padding:${Z.sm} ${Z.xl};font-size:${Y.heading};font-weight:${fe.bold};color:${j.labelFg};background:${j.labelBg};`, Jr = `position:absolute;top:${Z.md};left:${Z.md};z-index:10;pointer-events:none;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${Z.xs} ${Z.lg};border-radius:${be.md};font-size:${Y.heading};font-weight:${fe.bold};color:${j.labelFg};background:${j.labelBg};`, pc = `padding:${Z.xs} ${Z.lg};border-radius:${be.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${j.labelFg};background:${j.labelBg};`, hc = `position:absolute;top:${Z.lg};left:${Z.lg};z-index:15;display:flex;align-items:center;gap:${Z.md};min-width:0;max-width:calc(100% - ${Z.xxl} - ${Z.xxl});`, mc = "42px", gc = `display:flex;flex-direction:column;gap:${Z.xs};padding:${Z.xxl} 18px;border-radius:${be.xl};background:${j.cardBg};border:1px solid ${j.cardBorder};`, Yr = {
  card: `display:flex;flex-direction:column;align-items:flex-start;gap:${Z.sm};padding:${Z.lg} ${Z.xl};text-align:left;border-radius:${be.lg};border:1px solid;cursor:pointer;font-family:inherit;font-size:${Y.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row: `display:flex;align-items:center;gap:${Z.md};padding:5px ${Z.lg};border:1px solid;border-radius:${Z.md};text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;color:${j.textPrimary};`,
  className: "gufe-pick"
}, yc = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${Z.xl};border-radius:${be.md};font-size:${Y.small};line-height:1.5;max-width:260px;background:${j.tooltipBg};border:1px solid ${j.tooltipBorder};color:${j.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, ta = `position:absolute;bottom:${Z.xl};right:${Z.xl};display:flex;gap:${Z.sm};padding:${Z.sm};border-radius:${be.md};z-index:10;background:${j.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, $c = `font-family:${Y.mono};font-size:${Y.small};line-height:1.7;color:${j.textMuted};`, Fr = `font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted2};`, Ve = {
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
}, vc = `font-size:${Y.small};line-height:1.6;color:${j.textMuted2};`;
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
function Gn(e) {
  const t = T("div", lc);
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
  const o = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Ee.primary};` + (n ? `font-family:${Y.mono};font-size:${Y.small};` : `font-size:${Y.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Wn(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${be.xl};font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.04em;white-space:nowrap;background:${j.badgeBg};color:${j.badgeFg};`,
    e
  );
}
function Xr() {
  return T("div", gc);
}
function na() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const zr = "data-gufe-hide-name";
function Zr(e) {
  return !e.closest(`[${zr}]`);
}
const bc = ["debug", "gufe-debug"], wc = "debug", _c = "ALCHEMY_VIZ_DEBUG";
function Sc() {
  return !!globalThis[_c];
}
function Cc() {
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
  return e?.hasAttribute?.(wc) ? !0 : Sc() || Cc();
}
function Ec(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function xc(e, t, n) {
  if (!kc(n)) return;
  const r = Ec(t), o = t?.type, i = `[alchemy-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const ra = "ALCHEMY_VIZ_VIEW_STATE";
function oa(e) {
  const t = globalThis[ra];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
function Qr() {
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
const Ac = 150, No = "data-gufe-shell";
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${No}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = j.appBg, this.style.color = j.textPrimary, this.style.fontFamily = Y.family, typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#t?.onResize?.(), Ac);
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
    ), this.#n.setAttribute(No, ""), this.appendChild(this.#n), this.#n;
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
function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, fr = {}, je = {}, tt = {}, pr = {}, hr = {}, mr = {}, Mo;
function Bn() {
  return Mo || (Mo = 1, (function(e) {
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
        return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((C, w) => `${C}${w}`, "");
      }
      get names() {
        var p;
        return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((C, w) => (w instanceof n && (C[w.str] = (C[w.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o($, ...p) {
      const C = [$[0]];
      let w = 0;
      for (; w < p.length; )
        a(C, p[w]), C.push($[++w]);
      return new r(C);
    }
    e._ = o;
    const i = new r("+");
    function s($, ...p) {
      const C = [g($[0])];
      let w = 0;
      for (; w < p.length; )
        C.push(i), a(C, p[w]), C.push(i, g($[++w]));
      return c(C), new r(C);
    }
    e.str = s;
    function a($, p) {
      p instanceof r ? $.push(...p._items) : p instanceof n ? $.push(p) : $.push(m(p));
    }
    e.addCodeArg = a;
    function c($) {
      let p = 1;
      for (; p < $.length - 1; ) {
        if ($[p] === i) {
          const C = l($[p - 1], $[p + 1]);
          if (C !== void 0) {
            $.splice(p - 1, 3, C);
            continue;
          }
          $[p++] = "+";
        }
        p++;
      }
    }
    function l($, p) {
      if (p === '""')
        return $;
      if ($ === '""')
        return p;
      if (typeof $ == "string")
        return p instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${$.slice(0, -1)}${p}"` : p[0] === '"' ? $.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !($ instanceof n))
        return `"${$}${p.slice(1)}`;
    }
    function u($, p) {
      return p.emptyStr() ? $ : $.emptyStr() ? p : s`${$}${p}`;
    }
    e.strConcat = u;
    function m($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : g(Array.isArray($) ? $.join(",") : $);
    }
    function b($) {
      return new r(g($));
    }
    e.stringify = b;
    function g($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = g;
    function y($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : o`[${$}]`;
    }
    e.getProperty = y;
    function S($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function f($) {
      return new r($.toString());
    }
    e.regexpCode = f;
  })(mr)), mr;
}
var gr = {}, To;
function Oo() {
  return To || (To = 1, (function(e) {
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
    class o {
      constructor({ prefixes: l, parent: u } = {}) {
        this._names = {}, this._prefixes = l, this._parent = u;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const u = this._names[l] || this._nameGroup(l);
        return `${l}${u.index++}`;
      }
      _nameGroup(l) {
        var u, m;
        if (!((m = (u = this._parent) === null || u === void 0 ? void 0 : u._prefixes) === null || m === void 0) && m.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(l, u) {
        super(u), this.prefix = l;
      }
      setValue(l, { property: u, itemIndex: m }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(u)}[${m}]`;
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
      value(l, u) {
        var m;
        if (u.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(l), { prefix: g } = b, y = (m = u.key) !== null && m !== void 0 ? m : u.ref;
        let S = this._values[g];
        if (S) {
          const p = S.get(y);
          if (p)
            return p;
        } else
          S = this._values[g] = /* @__PURE__ */ new Map();
        S.set(y, b);
        const f = this._scope[g] || (this._scope[g] = []), $ = f.length;
        return f[$] = u.ref, b.setValue(u, { property: g, itemIndex: $ }), b;
      }
      getValue(l, u) {
        const m = this._values[l];
        if (m)
          return m.get(u);
      }
      scopeRefs(l, u = this._values) {
        return this._reduceValues(u, (m) => {
          if (m.scopePath === void 0)
            throw new Error(`CodeGen: name "${m}" has no value`);
          return (0, t._)`${l}${m.scopePath}`;
        });
      }
      scopeCode(l = this._values, u, m) {
        return this._reduceValues(l, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, u, m);
      }
      _reduceValues(l, u, m = {}, b) {
        let g = t.nil;
        for (const y in l) {
          const S = l[y];
          if (!S)
            continue;
          const f = m[y] = m[y] || /* @__PURE__ */ new Map();
          S.forEach(($) => {
            if (f.has($))
              return;
            f.set($, r.Started);
            let p = u($);
            if (p) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${C} ${$} = ${p};${this.opts._n}`;
            } else if (p = b?.($))
              g = (0, t._)`${g}${p}${this.opts._n}`;
            else
              throw new n($);
            f.set($, r.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = a;
  })(gr)), gr;
}
var Fo;
function ie() {
  return Fo || (Fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Bn(), n = /* @__PURE__ */ Oo();
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
    var o = /* @__PURE__ */ Oo();
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
      optimizeNames(v, E) {
        return this;
      }
    }
    class s extends i {
      constructor(v, E, P) {
        super(), this.varKind = v, this.name = E, this.rhs = P;
      }
      render({ es5: v, _n: E }) {
        const P = v ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${P} ${this.name}${V};` + E;
      }
      optimizeNames(v, E) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = z(this.rhs, v, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(v, E, P) {
        super(), this.lhs = v, this.rhs = E, this.sideEffects = P;
      }
      render({ _n: v }) {
        return `${this.lhs} = ${this.rhs};` + v;
      }
      optimizeNames(v, E) {
        if (!(this.lhs instanceof t.Name && !v[this.lhs.str] && !this.sideEffects))
          return this.rhs = z(this.rhs, v, E), this;
      }
      get names() {
        const v = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return D(v, this.rhs);
      }
    }
    class c extends a {
      constructor(v, E, P, V) {
        super(v, P, V), this.op = E;
      }
      render({ _n: v }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + v;
      }
    }
    class l extends i {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `${this.label}:` + v;
      }
    }
    class u extends i {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `break${this.label ? ` ${this.label}` : ""};` + v;
      }
    }
    class m extends i {
      constructor(v) {
        super(), this.error = v;
      }
      render({ _n: v }) {
        return `throw ${this.error};` + v;
      }
      get names() {
        return this.error.names;
      }
    }
    class b extends i {
      constructor(v) {
        super(), this.code = v;
      }
      render({ _n: v }) {
        return `${this.code};` + v;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(v, E) {
        return this.code = z(this.code, v, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class g extends i {
      constructor(v = []) {
        super(), this.nodes = v;
      }
      render(v) {
        return this.nodes.reduce((E, P) => E + P.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let E = v.length;
        for (; E--; ) {
          const P = v[E].optimizeNodes();
          Array.isArray(P) ? v.splice(E, 1, ...P) : P ? v[E] = P : v.splice(E, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, E) {
        const { nodes: P } = this;
        let V = P.length;
        for (; V--; ) {
          const H = P[V];
          H.optimizeNames(v, E) || (L(v, H.names), P.splice(V, 1));
        }
        return P.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, E) => R(v, E.names), {});
      }
    }
    class y extends g {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class S extends g {
    }
    class f extends y {
    }
    f.kind = "else";
    class $ extends y {
      constructor(v, E) {
        super(E), this.condition = v;
      }
      render(v) {
        let E = `if(${this.condition})` + super.render(v);
        return this.else && (E += "else " + this.else.render(v)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const v = this.condition;
        if (v === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const P = E.optimizeNodes();
          E = this.else = Array.isArray(P) ? new f(P) : P;
        }
        if (E)
          return v === !1 ? E instanceof $ ? E : E.nodes : this.nodes.length ? this : new $(W(v), E instanceof $ ? [E] : E.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, E) {
        var P;
        if (this.else = (P = this.else) === null || P === void 0 ? void 0 : P.optimizeNames(v, E), !!(super.optimizeNames(v, E) || this.else))
          return this.condition = z(this.condition, v, E), this;
      }
      get names() {
        const v = super.names;
        return D(v, this.condition), this.else && R(v, this.else.names), v;
      }
    }
    $.kind = "if";
    class p extends y {
    }
    p.kind = "for";
    class C extends p {
      constructor(v) {
        super(), this.iteration = v;
      }
      render(v) {
        return `for(${this.iteration})` + super.render(v);
      }
      optimizeNames(v, E) {
        if (super.optimizeNames(v, E))
          return this.iteration = z(this.iteration, v, E), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class w extends p {
      constructor(v, E, P, V) {
        super(), this.varKind = v, this.name = E, this.from = P, this.to = V;
      }
      render(v) {
        const E = v.es5 ? n.varKinds.var : this.varKind, { name: P, from: V, to: H } = this;
        return `for(${E} ${P}=${V}; ${P}<${H}; ${P}++)` + super.render(v);
      }
      get names() {
        const v = D(super.names, this.from);
        return D(v, this.to);
      }
    }
    class d extends p {
      constructor(v, E, P, V) {
        super(), this.loop = v, this.varKind = E, this.name = P, this.iterable = V;
      }
      render(v) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
      }
      optimizeNames(v, E) {
        if (super.optimizeNames(v, E))
          return this.iterable = z(this.iterable, v, E), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class h extends y {
      constructor(v, E, P) {
        super(), this.name = v, this.args = E, this.async = P;
      }
      render(v) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(v);
      }
    }
    h.kind = "func";
    class _ extends g {
      render(v) {
        return "return " + super.render(v);
      }
    }
    _.kind = "return";
    class k extends y {
      render(v) {
        let E = "try" + super.render(v);
        return this.catch && (E += this.catch.render(v)), this.finally && (E += this.finally.render(v)), E;
      }
      optimizeNodes() {
        var v, E;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(v, E) {
        var P, V;
        return super.optimizeNames(v, E), (P = this.catch) === null || P === void 0 || P.optimizeNames(v, E), (V = this.finally) === null || V === void 0 || V.optimizeNames(v, E), this;
      }
      get names() {
        const v = super.names;
        return this.catch && R(v, this.catch.names), this.finally && R(v, this.finally.names), v;
      }
    }
    class x extends y {
      constructor(v) {
        super(), this.error = v;
      }
      render(v) {
        return `catch(${this.error})` + super.render(v);
      }
    }
    x.kind = "catch";
    class A extends y {
      render(v) {
        return "finally" + super.render(v);
      }
    }
    A.kind = "finally";
    class M {
      constructor(v, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = v, this._scope = new n.Scope({ parent: v }), this._nodes = [new S()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(v) {
        return this._scope.name(v);
      }
      // reserves unique name in the external scope
      scopeName(v) {
        return this._extScope.name(v);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(v, E) {
        const P = this._extScope.value(v, E);
        return (this._values[P.prefix] || (this._values[P.prefix] = /* @__PURE__ */ new Set())).add(P), P;
      }
      getScopeValue(v, E) {
        return this._extScope.getValue(v, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(v) {
        return this._extScope.scopeRefs(v, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(v, E, P, V) {
        const H = this._scope.toName(E);
        return P !== void 0 && V && (this._constants[H.str] = P), this._leafNode(new s(v, H, P)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, E, P) {
        return this._def(n.varKinds.const, v, E, P);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, E, P) {
        return this._def(n.varKinds.let, v, E, P);
      }
      // `var` declaration with optional assignment
      var(v, E, P) {
        return this._def(n.varKinds.var, v, E, P);
      }
      // assignment code
      assign(v, E, P) {
        return this._leafNode(new a(v, E, P));
      }
      // `+=` code
      add(v, E) {
        return this._leafNode(new c(v, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(v) {
        return typeof v == "function" ? v() : v !== t.nil && this._leafNode(new b(v)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...v) {
        const E = ["{"];
        for (const [P, V] of v)
          E.length > 1 && E.push(","), E.push(P), (P !== V || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, V));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, E, P) {
        if (this._blockNode(new $(v)), E && P)
          this.code(E).else().code(P).endIf();
        else if (E)
          this.code(E).endIf();
        else if (P)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(v) {
        return this._elseNode(new $(v));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, f);
      }
      _for(v, E) {
        return this._blockNode(v), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, E) {
        return this._for(new C(v), E);
      }
      // `for` statement for a range of values
      forRange(v, E, P, V, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(v);
        return this._for(new w(H, Q, E, P), () => V(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, E, P, V = n.varKinds.const) {
        const H = this._scope.toName(v);
        if (this.opts.es5) {
          const Q = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (ee) => {
            this.var(H, (0, t._)`${Q}[${ee}]`), P(H);
          });
        }
        return this._for(new d("of", V, H, E), () => P(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, E, P, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${E})`, P);
        const H = this._scope.toName(v);
        return this._for(new d("in", V, H, E), () => P(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
      }
      // `label` statement
      label(v) {
        return this._leafNode(new l(v));
      }
      // `break` statement
      break(v) {
        return this._leafNode(new u(v));
      }
      // `return` statement
      return(v) {
        const E = new _();
        if (this._blockNode(E), this.code(v), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(_);
      }
      // `try` statement
      try(v, E, P) {
        if (!E && !P)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new k();
        if (this._blockNode(V), this.code(v), E) {
          const H = this.name("e");
          this._currNode = V.catch = new x(H), E(H);
        }
        return P && (this._currNode = V.finally = new A(), this.code(P)), this._endBlockNode(x, A);
      }
      // `throw` statement
      throw(v) {
        return this._leafNode(new m(v));
      }
      // start self-balancing block
      block(v, E) {
        return this._blockStarts.push(this._nodes.length), v && this.code(v).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(v) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const P = this._nodes.length - E;
        if (P < 0 || v !== void 0 && P !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${P} vs ${v} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, E = t.nil, P, V) {
        return this._blockNode(new h(v, E, P)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
      }
      optimize(v = 1) {
        for (; v-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(v) {
        return this._currNode.nodes.push(v), this;
      }
      _blockNode(v) {
        this._currNode.nodes.push(v), this._nodes.push(v);
      }
      _endBlockNode(v, E) {
        const P = this._currNode;
        if (P instanceof v || E && P instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${v.kind}/${E.kind}` : v.kind}"`);
      }
      _elseNode(v) {
        const E = this._currNode;
        if (!(E instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = v, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const v = this._nodes;
        return v[v.length - 1];
      }
      set _currNode(v) {
        const E = this._nodes;
        E[E.length - 1] = v;
      }
    }
    e.CodeGen = M;
    function R(I, v) {
      for (const E in v)
        I[E] = (I[E] || 0) + (v[E] || 0);
      return I;
    }
    function D(I, v) {
      return v instanceof t._CodeOrName ? R(I, v.names) : I;
    }
    function z(I, v, E) {
      if (I instanceof t.Name)
        return P(I);
      if (!V(I))
        return I;
      return new t._Code(I._items.reduce((H, Q) => (Q instanceof t.Name && (Q = P(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function P(H) {
        const Q = E[H.str];
        return Q === void 0 || v[H.str] !== 1 ? H : (delete v[H.str], Q);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && v[Q.str] === 1 && E[Q.str] !== void 0);
      }
    }
    function L(I, v) {
      for (const E in v)
        I[E] = (I[E] || 0) - (v[E] || 0);
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
      return (v, E) => v === t.nil ? E : E === t.nil ? v : (0, t._)`${U(v)} ${I} ${U(E)}`;
    }
    function U(I) {
      return I instanceof t.Name ? I : (0, t._)`(${I})`;
    }
  })(hr)), hr;
}
var se = {}, zo;
function ce() {
  if (zo) return se;
  zo = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Bn();
  function n(d) {
    const h = {};
    for (const _ of d)
      h[_] = !0;
    return h;
  }
  se.toHash = n;
  function r(d, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (o(d, h), !i(h, d.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function o(d, h = d.schema) {
    const { opts: _, self: k } = d;
    if (!_.strictSchema || typeof h == "boolean")
      return;
    const x = k.RULES.keywords;
    for (const A in h)
      x[A] || w(d, `unknown keyword: "${A}"`);
  }
  se.checkUnknownRules = o;
  function i(d, h) {
    if (typeof d == "boolean")
      return !d;
    for (const _ in d)
      if (h[_])
        return !0;
    return !1;
  }
  se.schemaHasRules = i;
  function s(d, h) {
    if (typeof d == "boolean")
      return !d;
    for (const _ in d)
      if (_ !== "$ref" && h.all[_])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: d, schemaPath: h }, _, k, x) {
    if (!x) {
      if (typeof _ == "number" || typeof _ == "boolean")
        return _;
      if (typeof _ == "string")
        return (0, e._)`${_}`;
    }
    return (0, e._)`${d}${h}${(0, e.getProperty)(k)}`;
  }
  se.schemaRefOrVal = a;
  function c(d) {
    return m(decodeURIComponent(d));
  }
  se.unescapeFragment = c;
  function l(d) {
    return encodeURIComponent(u(d));
  }
  se.escapeFragment = l;
  function u(d) {
    return typeof d == "number" ? `${d}` : d.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = u;
  function m(d) {
    return d.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = m;
  function b(d, h) {
    if (Array.isArray(d))
      for (const _ of d)
        h(_);
    else
      h(d);
  }
  se.eachItem = b;
  function g({ mergeNames: d, mergeToName: h, mergeValues: _, resultToName: k }) {
    return (x, A, M, R) => {
      const D = M === void 0 ? A : M instanceof e.Name ? (A instanceof e.Name ? d(x, A, M) : h(x, A, M), M) : A instanceof e.Name ? (h(x, M, A), A) : _(A, M);
      return R === e.Name && !(D instanceof e.Name) ? k(x, D) : D;
    };
  }
  se.mergeEvaluated = {
    props: g({
      mergeNames: (d, h, _) => d.if((0, e._)`${_} !== true && ${h} !== undefined`, () => {
        d.if((0, e._)`${h} === true`, () => d.assign(_, !0), () => d.assign(_, (0, e._)`${_} || {}`).code((0, e._)`Object.assign(${_}, ${h})`));
      }),
      mergeToName: (d, h, _) => d.if((0, e._)`${_} !== true`, () => {
        h === !0 ? d.assign(_, !0) : (d.assign(_, (0, e._)`${_} || {}`), S(d, _, h));
      }),
      mergeValues: (d, h) => d === !0 ? !0 : { ...d, ...h },
      resultToName: y
    }),
    items: g({
      mergeNames: (d, h, _) => d.if((0, e._)`${_} !== true && ${h} !== undefined`, () => d.assign(_, (0, e._)`${h} === true ? true : ${_} > ${h} ? ${_} : ${h}`)),
      mergeToName: (d, h, _) => d.if((0, e._)`${_} !== true`, () => d.assign(_, h === !0 ? !0 : (0, e._)`${_} > ${h} ? ${_} : ${h}`)),
      mergeValues: (d, h) => d === !0 ? !0 : Math.max(d, h),
      resultToName: (d, h) => d.var("items", h)
    })
  };
  function y(d, h) {
    if (h === !0)
      return d.var("props", !0);
    const _ = d.var("props", (0, e._)`{}`);
    return h !== void 0 && S(d, _, h), _;
  }
  se.evaluatedPropsToName = y;
  function S(d, h, _) {
    Object.keys(_).forEach((k) => d.assign((0, e._)`${h}${(0, e.getProperty)(k)}`, !0));
  }
  se.setEvaluated = S;
  const f = {};
  function $(d, h) {
    return d.scopeValue("func", {
      ref: h,
      code: f[h.code] || (f[h.code] = new t._Code(h.code))
    });
  }
  se.useFunc = $;
  var p;
  (function(d) {
    d[d.Num = 0] = "Num", d[d.Str = 1] = "Str";
  })(p || (se.Type = p = {}));
  function C(d, h, _) {
    if (d instanceof e.Name) {
      const k = h === p.Num;
      return _ ? k ? (0, e._)`"[" + ${d} + "]"` : (0, e._)`"['" + ${d} + "']"` : k ? (0, e._)`"/" + ${d}` : (0, e._)`"/" + ${d}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return _ ? (0, e.getProperty)(d).toString() : "/" + u(d);
  }
  se.getErrorPath = C;
  function w(d, h, _ = d.opts.strictSchema) {
    if (_) {
      if (h = `strict mode: ${h}`, _ === !0)
        throw new Error(h);
      d.self.logger.warn(h);
    }
  }
  return se.checkStrictMode = w, se;
}
var Dt = {}, Io;
function Oe() {
  if (Io) return Dt;
  Io = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
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
var jo;
function Jn() {
  return jo || (jo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: $ }) => $ ? (0, t.str)`"${f}" keyword must be ${$} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function o(f, $ = e.keywordError, p, C) {
      const { it: w } = f, { gen: d, compositeRule: h, allErrors: _ } = w, k = m(f, $, p);
      C ?? (h || _) ? c(d, k) : l(w, (0, t._)`[${k}]`);
    }
    e.reportError = o;
    function i(f, $ = e.keywordError, p) {
      const { it: C } = f, { gen: w, compositeRule: d, allErrors: h } = C, _ = m(f, $, p);
      c(w, _), d || h || l(C, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(f, $) {
      f.assign(r.default.errors, $), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if($, () => f.assign((0, t._)`${r.default.vErrors}.length`, $), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: $, schemaValue: p, data: C, errsCount: w, it: d }) {
      if (w === void 0)
        throw new Error("ajv implementation error");
      const h = f.name("err");
      f.forRange("i", w, r.default.errors, (_) => {
        f.const(h, (0, t._)`${r.default.vErrors}[${_}]`), f.if((0, t._)`${h}.instancePath === undefined`, () => f.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, d.errorPath))), f.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${d.errSchemaPath}/${$}`), d.opts.verbose && (f.assign((0, t._)`${h}.schema`, p), f.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(f, $) {
      const p = f.const("err", $);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function l(f, $) {
      const { gen: p, validateName: C, schemaEnv: w } = f;
      w.$async ? p.throw((0, t._)`new ${f.ValidationError}(${$})`) : (p.assign((0, t._)`${C}.errors`, $), p.return(!1));
    }
    const u = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function m(f, $, p) {
      const { createErrors: C } = f.it;
      return C === !1 ? (0, t._)`{}` : b(f, $, p);
    }
    function b(f, $, p = {}) {
      const { gen: C, it: w } = f, d = [
        g(w, p),
        y(f, p)
      ];
      return S(f, $, d), C.object(...d);
    }
    function g({ errorPath: f }, { instancePath: $ }) {
      const p = $ ? (0, t.str)`${f}${(0, n.getErrorPath)($, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, p)];
    }
    function y({ keyword: f, it: { errSchemaPath: $ } }, { schemaPath: p, parentSchema: C }) {
      let w = C ? $ : (0, t.str)`${$}/${f}`;
      return p && (w = (0, t.str)`${w}${(0, n.getErrorPath)(p, n.Type.Str)}`), [u.schemaPath, w];
    }
    function S(f, { params: $, message: p }, C) {
      const { keyword: w, data: d, schemaValue: h, it: _ } = f, { opts: k, propertyName: x, topSchemaRef: A, schemaPath: M } = _;
      C.push([u.keyword, w], [u.params, typeof $ == "function" ? $(f) : $ || (0, t._)`{}`]), k.messages && C.push([u.message, typeof p == "function" ? p(f) : p]), k.verbose && C.push([u.schema, h], [u.parentSchema, (0, t._)`${A}${M}`], [r.default.data, d]), x && C.push([u.propertyName, x]);
    }
  })(pr)), pr;
}
var Do;
function Rc() {
  if (Do) return tt;
  Do = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.boolOrEmptySchema = tt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: l, validateName: u } = a;
    l === !1 ? s(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(!0));
  }
  tt.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: l, schema: u } = a;
    u === !1 ? (l.var(c, !1), s(a)) : l.var(c, !0);
  }
  tt.boolOrEmptySchema = i;
  function s(a, c) {
    const { gen: l, data: u } = a, m = {
      gen: l,
      keyword: "false schema",
      data: u,
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
var ge = {}, nt = {}, Lo;
function ia() {
  if (Lo) return nt;
  Lo = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.getRules = nt.isJSONType = void 0;
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
var De = {}, qo;
function sa() {
  if (qo) return De;
  qo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
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
var Vo;
function Un() {
  if (Vo) return ge;
  Vo = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ ia(), t = /* @__PURE__ */ sa(), n = /* @__PURE__ */ Jn(), r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ce();
  var i;
  (function(p) {
    p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
  })(i || (ge.DataType = i = {}));
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
    const { gen: w, data: d, opts: h } = p, _ = u(C, h.coerceTypes), k = C.length > 0 && !(_.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(p, C[0]));
    if (k) {
      const x = y(C, d, h.strictNumbers, i.Wrong);
      w.if(x, () => {
        _.length ? m(p, C, _) : f(p);
      });
    }
    return k;
  }
  ge.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function u(p, C) {
    return C ? p.filter((w) => l.has(w) || C === "array" && w === "array") : [];
  }
  function m(p, C, w) {
    const { gen: d, data: h, opts: _ } = p, k = d.let("dataType", (0, r._)`typeof ${h}`), x = d.let("coerced", (0, r._)`undefined`);
    _.coerceTypes === "array" && d.if((0, r._)`${k} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => d.assign(h, (0, r._)`${h}[0]`).assign(k, (0, r._)`typeof ${h}`).if(y(C, h, _.strictNumbers), () => d.assign(x, h))), d.if((0, r._)`${x} !== undefined`);
    for (const M of w)
      (l.has(M) || M === "array" && _.coerceTypes === "array") && A(M);
    d.else(), f(p), d.endIf(), d.if((0, r._)`${x} !== undefined`, () => {
      d.assign(h, x), b(p, x);
    });
    function A(M) {
      switch (M) {
        case "string":
          d.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(x, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(x, (0, r._)`""`);
          return;
        case "number":
          d.elseIf((0, r._)`${k} == "boolean" || ${h} === null
              || (${k} == "string" && ${h} && ${h} == +${h})`).assign(x, (0, r._)`+${h}`);
          return;
        case "integer":
          d.elseIf((0, r._)`${k} === "boolean" || ${h} === null
              || (${k} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(x, (0, r._)`+${h}`);
          return;
        case "boolean":
          d.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(x, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(x, !0);
          return;
        case "null":
          d.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), d.assign(x, null);
          return;
        case "array":
          d.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${h} === null`).assign(x, (0, r._)`[${h}]`);
      }
    }
  }
  function b({ gen: p, parentData: C, parentDataProperty: w }, d) {
    p.if((0, r._)`${C} !== undefined`, () => p.assign((0, r._)`${C}[${w}]`, d));
  }
  function g(p, C, w, d = i.Correct) {
    const h = d === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let _;
    switch (p) {
      case "null":
        return (0, r._)`${C} ${h} null`;
      case "array":
        _ = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        _ = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        _ = k((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        _ = k();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${p}`;
    }
    return d === i.Correct ? _ : (0, r.not)(_);
    function k(x = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, x, w ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ge.checkDataType = g;
  function y(p, C, w, d) {
    if (p.length === 1)
      return g(p[0], C, w, d);
    let h;
    const _ = (0, o.toHash)(p);
    if (_.array && _.object) {
      const k = (0, r._)`typeof ${C} != "object"`;
      h = _.null ? k : (0, r._)`!${C} || ${k}`, delete _.null, delete _.array, delete _.object;
    } else
      h = r.nil;
    _.number && delete _.integer;
    for (const k in _)
      h = (0, r.and)(h, g(k, C, w, d));
    return h;
  }
  ge.checkDataTypes = y;
  const S = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: C }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${C}}`
  };
  function f(p) {
    const C = $(p);
    (0, n.reportError)(C, S);
  }
  ge.reportTypeError = f;
  function $(p) {
    const { gen: C, data: w, schema: d } = p, h = (0, o.schemaRefOrVal)(p, d, "type");
    return {
      gen: C,
      keyword: "type",
      data: w,
      schema: d.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: d,
      params: {},
      it: p
    };
  }
  return ge;
}
var Et = {}, Bo;
function Nc() {
  if (Bo) return Et;
  Bo = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.assignDefaults = void 0;
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
    const { gen: a, compositeRule: c, data: l, opts: u } = o;
    if (s === void 0)
      return;
    const m = (0, e._)`${l}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${m}`);
      return;
    }
    let b = (0, e._)`${m} === undefined`;
    u.useDefaults === "empty" && (b = (0, e._)`${b} || ${m} === null || ${m} === ""`), a.if(b, (0, e._)`${m} = ${(0, e.stringify)(s)}`);
  }
  return Et;
}
var Me = {}, de = {}, Uo;
function Fe() {
  if (Uo) return de;
  Uo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce();
  function o(p, C) {
    const { gen: w, data: d, it: h } = p;
    w.if(u(w, d, C, h.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${C}` }, !0), p.error();
    });
  }
  de.checkReportMissingProp = o;
  function i({ gen: p, data: C, it: { opts: w } }, d, h) {
    return (0, e.or)(...d.map((_) => (0, e.and)(u(p, C, _, w.ownProperties), (0, e._)`${h} = ${_}`)));
  }
  de.checkMissingProp = i;
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
  function c(p, C, w) {
    return (0, e._)`${a(p)}.call(${C}, ${w})`;
  }
  de.isOwnProperty = c;
  function l(p, C, w, d) {
    const h = (0, e._)`${C}${(0, e.getProperty)(w)} !== undefined`;
    return d ? (0, e._)`${h} && ${c(p, C, w)}` : h;
  }
  de.propertyInData = l;
  function u(p, C, w, d) {
    const h = (0, e._)`${C}${(0, e.getProperty)(w)} === undefined`;
    return d ? (0, e.or)(h, (0, e.not)(c(p, C, w))) : h;
  }
  de.noPropertyInData = u;
  function m(p) {
    return p ? Object.keys(p).filter((C) => C !== "__proto__") : [];
  }
  de.allSchemaProperties = m;
  function b(p, C) {
    return m(C).filter((w) => !(0, t.alwaysValidSchema)(p, C[w]));
  }
  de.schemaProperties = b;
  function g({ schemaCode: p, data: C, it: { gen: w, topSchemaRef: d, schemaPath: h, errorPath: _ }, it: k }, x, A, M) {
    const R = M ? (0, e._)`${p}, ${C}, ${d}${h}` : C, D = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, _)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && D.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const z = (0, e._)`${R}, ${w.object(...D)}`;
    return A !== e.nil ? (0, e._)`${x}.call(${A}, ${z})` : (0, e._)`${x}(${z})`;
  }
  de.callValidateCode = g;
  const y = (0, e._)`new RegExp`;
  function S({ gen: p, it: { opts: C } }, w) {
    const d = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, _ = h(w, d);
    return p.scopeValue("pattern", {
      key: _.toString(),
      ref: _,
      code: (0, e._)`${h.code === "new RegExp" ? y : (0, r.useFunc)(p, h)}(${w}, ${d})`
    });
  }
  de.usePattern = S;
  function f(p) {
    const { gen: C, data: w, keyword: d, it: h } = p, _ = C.name("valid");
    if (h.allErrors) {
      const x = C.let("valid", !0);
      return k(() => C.assign(x, !1)), x;
    }
    return C.var(_, !0), k(() => C.break()), _;
    function k(x) {
      const A = C.const("len", (0, e._)`${w}.length`);
      C.forRange("i", 0, A, (M) => {
        p.subschema({
          keyword: d,
          dataProp: M,
          dataPropType: t.Type.Num
        }, _), C.if((0, e.not)(_), x);
      });
    }
  }
  de.validateArray = f;
  function $(p) {
    const { gen: C, schema: w, keyword: d, it: h } = p;
    if (!Array.isArray(w))
      throw new Error("ajv implementation error");
    if (w.some((A) => (0, t.alwaysValidSchema)(h, A)) && !h.opts.unevaluated)
      return;
    const k = C.let("valid", !1), x = C.name("_valid");
    C.block(() => w.forEach((A, M) => {
      const R = p.subschema({
        keyword: d,
        schemaProp: M,
        compositeRule: !0
      }, x);
      C.assign(k, (0, e._)`${k} || ${x}`), p.mergeValidEvaluated(R, x) || C.if((0, e.not)(k));
    })), p.result(k, () => p.reset(), () => p.error(!0));
  }
  return de.validateUnion = $, de;
}
var Ho;
function Mc() {
  if (Ho) return Me;
  Ho = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateKeywordUsage = Me.validSchemaType = Me.funcKeywordCode = Me.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Jn();
  function o(b, g) {
    const { gen: y, keyword: S, schema: f, parentSchema: $, it: p } = b, C = g.macro.call(p.self, f, $, p), w = l(y, S, C);
    p.opts.validateSchema !== !1 && p.self.validateSchema(C, !0);
    const d = y.name("valid");
    b.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${S}`,
      topSchemaRef: w,
      compositeRule: !0
    }, d), b.pass(d, () => b.error(!0));
  }
  Me.macroKeywordCode = o;
  function i(b, g) {
    var y;
    const { gen: S, keyword: f, schema: $, parentSchema: p, $data: C, it: w } = b;
    c(w, g);
    const d = !C && g.compile ? g.compile.call(w.self, $, p, w) : g.validate, h = l(S, f, d), _ = S.let("valid");
    b.block$data(_, k), b.ok((y = g.valid) !== null && y !== void 0 ? y : _);
    function k() {
      if (g.errors === !1)
        M(), g.modifying && s(b), R(() => b.error());
      else {
        const D = g.async ? x() : A();
        g.modifying && s(b), R(() => a(b, D));
      }
    }
    function x() {
      const D = S.let("ruleErrs", null);
      return S.try(() => M((0, e._)`await `), (z) => S.assign(_, !1).if((0, e._)`${z} instanceof ${w.ValidationError}`, () => S.assign(D, (0, e._)`${z}.errors`), () => S.throw(z))), D;
    }
    function A() {
      const D = (0, e._)`${h}.errors`;
      return S.assign(D, null), M(e.nil), D;
    }
    function M(D = g.async ? (0, e._)`await ` : e.nil) {
      const z = w.opts.passContext ? t.default.this : t.default.self, L = !("compile" in g && !C || g.schema === !1);
      S.assign(_, (0, e._)`${D}${(0, n.callValidateCode)(b, h, z, L)}`, g.modifying);
    }
    function R(D) {
      var z;
      S.if((0, e.not)((z = g.valid) !== null && z !== void 0 ? z : _), D);
    }
  }
  Me.funcKeywordCode = i;
  function s(b) {
    const { gen: g, data: y, it: S } = b;
    g.if(S.parentData, () => g.assign(y, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function a(b, g) {
    const { gen: y } = b;
    y.if((0, e._)`Array.isArray(${g})`, () => {
      y.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(b);
    }, () => b.error());
  }
  function c({ schemaEnv: b }, g) {
    if (g.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(b, g, y) {
    if (y === void 0)
      throw new Error(`keyword "${g}" failed to compile`);
    return b.scopeValue("keyword", typeof y == "function" ? { ref: y } : { ref: y, code: (0, e.stringify)(y) });
  }
  function u(b, g, y = !1) {
    return !g.length || g.some((S) => S === "array" ? Array.isArray(b) : S === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == S || y && typeof b > "u");
  }
  Me.validSchemaType = u;
  function m({ schema: b, opts: g, self: y, errSchemaPath: S }, f, $) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes($) : f.keyword !== $)
      throw new Error("ajv implementation error");
    const p = f.dependencies;
    if (p?.some((C) => !Object.prototype.hasOwnProperty.call(b, C)))
      throw new Error(`parent schema must have dependencies of ${$}: ${p.join(",")}`);
    if (f.validateSchema && !f.validateSchema(b[$])) {
      const w = `keyword "${$}" value is invalid at path "${S}": ` + y.errorsText(f.validateSchema.errors);
      if (g.validateSchema === "log")
        y.logger.error(w);
      else
        throw new Error(w);
    }
  }
  return Me.validateKeywordUsage = m, Me;
}
var Le = {}, Ko;
function Tc() {
  if (Ko) return Le;
  Ko = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.extendSubschemaMode = Le.extendSubschemaData = Le.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: u, topSchemaRef: m }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const b = i.schema[s];
      return a === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: b[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (l === void 0 || u === void 0 || m === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: m,
        errSchemaPath: u
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Le.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: l, dataTypes: u, propertyName: m }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = s;
    if (a !== void 0) {
      const { errorPath: y, dataPathArr: S, opts: f } = s, $ = b.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      g($), i.errorPath = (0, e.str)`${y}${(0, t.getErrorPath)(a, c, f.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...S, i.parentDataProperty];
    }
    if (l !== void 0) {
      const y = l instanceof e.Name ? l : b.let("data", l, !0);
      g(y), m !== void 0 && (i.propertyName = m);
    }
    u && (i.dataTypes = u);
    function g(y) {
      i.data = y, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, y];
    }
  }
  Le.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: u }) {
    c !== void 0 && (i.compositeRule = c), l !== void 0 && (i.createErrors = l), u !== void 0 && (i.allErrors = u), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Le.extendSubschemaMode = o, Le;
}
var ye = {}, yr, Go;
function aa() {
  return Go || (Go = 1, yr = function e(t, n) {
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
  }), yr;
}
var $r = { exports: {} }, Wo;
function Oc() {
  if (Wo) return $r.exports;
  Wo = 1;
  var e = $r.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, c, l, u, m, b) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, l, u, m, b);
      for (var g in s) {
        var y = s[g];
        if (Array.isArray(y)) {
          if (g in e.arrayKeywords)
            for (var S = 0; S < y.length; S++)
              t(r, o, i, y[S], a + "/" + g + "/" + S, c, a, g, s, S);
        } else if (g in e.propsKeywords) {
          if (y && typeof y == "object")
            for (var f in y)
              t(r, o, i, y[f], a + "/" + g + "/" + n(f), c, a, g, s, f);
        } else (g in e.keywords || r.allKeys && !(g in e.skipKeywords)) && t(r, o, i, y, a + "/" + g, c, a, g, s);
      }
      i(s, a, c, l, u, m, b);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return $r.exports;
}
var Jo;
function Yn() {
  if (Jo) return ye;
  Jo = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.getSchemaRefs = ye.resolveUrl = ye.normalizeId = ye._getFullPath = ye.getFullPath = ye.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = aa(), n = Oc(), r = /* @__PURE__ */ new Set([
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
  function o(S, f = !0) {
    return typeof S == "boolean" ? !0 : f === !0 ? !s(S) : f ? a(S) <= f : !1;
  }
  ye.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(S) {
    for (const f in S) {
      if (i.has(f))
        return !0;
      const $ = S[f];
      if (Array.isArray($) && $.some(s) || typeof $ == "object" && s($))
        return !0;
    }
    return !1;
  }
  function a(S) {
    let f = 0;
    for (const $ in S) {
      if ($ === "$ref")
        return 1 / 0;
      if (f++, !r.has($) && (typeof S[$] == "object" && (0, e.eachItem)(S[$], (p) => f += a(p)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(S, f = "", $) {
    $ !== !1 && (f = m(f));
    const p = S.parse(f);
    return l(S, p);
  }
  ye.getFullPath = c;
  function l(S, f) {
    return S.serialize(f).split("#")[0] + "#";
  }
  ye._getFullPath = l;
  const u = /#\/?$/;
  function m(S) {
    return S ? S.replace(u, "") : "";
  }
  ye.normalizeId = m;
  function b(S, f, $) {
    return $ = m($), S.resolve(f, $);
  }
  ye.resolveUrl = b;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function y(S, f) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: $, uriResolver: p } = this.opts, C = m(S[$] || f), w = { "": C }, d = c(p, C, !1), h = {}, _ = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (A, M, R, D) => {
      if (D === void 0)
        return;
      const z = d + M;
      let L = w[D];
      typeof A[$] == "string" && (L = W.call(this, A[$])), ne.call(this, A.$anchor), ne.call(this, A.$dynamicAnchor), w[M] = L;
      function W(X) {
        const re = this.opts.uriResolver.resolve;
        if (X = m(L ? re(L, X) : X), _.has(X))
          throw x(X);
        _.add(X);
        let G = this.refs[X];
        return typeof G == "string" && (G = this.refs[G]), typeof G == "object" ? k(A, G.schema, X) : X !== m(z) && (X[0] === "#" ? (k(A, h[X], X), h[X] = A) : this.refs[X] = z), X;
      }
      function ne(X) {
        if (typeof X == "string") {
          if (!g.test(X))
            throw new Error(`invalid anchor "${X}"`);
          W.call(this, `#${X}`);
        }
      }
    }), h;
    function k(A, M, R) {
      if (M !== void 0 && !t(A, M))
        throw x(R);
    }
    function x(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return ye.getSchemaRefs = y, ye;
}
var Yo;
function Xn() {
  if (Yo) return je;
  Yo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Rc(), t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ sa(), r = /* @__PURE__ */ Un(), o = /* @__PURE__ */ Nc(), i = /* @__PURE__ */ Mc(), s = /* @__PURE__ */ Tc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Oe(), l = /* @__PURE__ */ Yn(), u = /* @__PURE__ */ ce(), m = /* @__PURE__ */ Jn();
  function b(N) {
    if (d(N) && (_(N), w(N))) {
      f(N);
      return;
    }
    g(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  je.validateFunctionCode = b;
  function g({ gen: N, validateName: F, schema: K, schemaEnv: J, opts: te }, oe) {
    te.code.es5 ? N.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      N.code((0, a._)`"use strict"; ${p(K, te)}`), S(N, te), N.code(oe);
    }) : N.func(F, (0, a._)`${c.default.data}, ${y(te)}`, J.$async, () => N.code(p(K, te)).code(oe));
  }
  function y(N) {
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
      K.$comment && F.$comment && D(N), A(N), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), K.unevaluated && $(N), k(N), z(N);
    });
  }
  function $(N) {
    const { gen: F, validateName: K } = N;
    N.evaluated = F.const("evaluated", (0, a._)`${K}.evaluated`), F.if((0, a._)`${N.evaluated}.dynamicProps`, () => F.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${N.evaluated}.dynamicItems`, () => F.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function p(N, F) {
    const K = typeof N == "object" && N[F.schemaId];
    return K && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${K} */` : a.nil;
  }
  function C(N, F) {
    if (d(N) && (_(N), w(N))) {
      h(N, F);
      return;
    }
    (0, e.boolOrEmptySchema)(N, F);
  }
  function w({ schema: N, self: F }) {
    if (typeof N == "boolean")
      return !N;
    for (const K in N)
      if (F.RULES.all[K])
        return !0;
    return !1;
  }
  function d(N) {
    return typeof N.schema != "boolean";
  }
  function h(N, F) {
    const { schema: K, gen: J, opts: te } = N;
    te.$comment && K.$comment && D(N), M(N), R(N);
    const oe = J.const("_errs", c.default.errors);
    k(N, oe), J.var(F, (0, a._)`${oe} === ${c.default.errors}`);
  }
  function _(N) {
    (0, u.checkUnknownRules)(N), x(N);
  }
  function k(N, F) {
    if (N.opts.jtd)
      return W(N, [], !1, F);
    const K = (0, t.getSchemaTypes)(N.schema), J = (0, t.coerceAndCheckDataType)(N, K);
    W(N, K, !J, F);
  }
  function x(N) {
    const { schema: F, errSchemaPath: K, opts: J, self: te } = N;
    F.$ref && J.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(F, te.RULES) && te.logger.warn(`$ref: keywords ignored in schema at path "${K}"`);
  }
  function A(N) {
    const { schema: F, opts: K } = N;
    F.default !== void 0 && K.useDefaults && K.strictSchema && (0, u.checkStrictMode)(N, "default is ignored in the schema root");
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
    if (oe.$ref && ($e.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(oe, me))) {
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
      }), v(N, F);
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
  function v(N, F) {
    const K = [];
    for (const J of N.dataTypes)
      I(F, J) ? K.push(J) : F.includes("integer") && J === "number" && K.push("integer");
    N.dataTypes = K;
  }
  function E(N, F) {
    const K = N.schemaEnv.baseId + N.errSchemaPath;
    F += ` at "${K}" (strictTypes)`, (0, u.checkStrictMode)(N, F, N.opts.strictTypes);
  }
  class P {
    constructor(F, K, J) {
      if ((0, i.validateKeywordUsage)(F, K, J), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = J, this.data = F.data, this.schema = F.schema[J], this.$data = K.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(F, this.schema, J, this.$data), this.schemaType = K.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = K, this.$data)
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
      J.opts.unevaluated && (J.props !== !0 && F.props !== void 0 && (J.props = u.mergeEvaluated.props(te, F.props, J.props, K)), J.items !== !0 && F.items !== void 0 && (J.items = u.mergeEvaluated.items(te, F.items, J.items, K)));
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
      ve && (oe = (0, a._)`${oe}${(0, a.getProperty)((0, u.unescapeJsonPointer)(ve))}`, ue = (0, a._)`${ue} && ${oe}`);
    return ue;
    function $e(ve, me) {
      return `Cannot access ${ve} ${me} levels up, current level is ${F}`;
    }
  }
  return je.getData = ee, je;
}
var Lt = {}, Xo;
function eo() {
  if (Xo) return Lt;
  Xo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Lt.default = e, Lt;
}
var qt = {}, Zo;
function Zn() {
  if (Zo) return qt;
  Zo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var _e = {}, Qo;
function Qn() {
  if (Qo) return _e;
  Qo = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ eo(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Yn(), o = /* @__PURE__ */ ce(), i = /* @__PURE__ */ Xn();
  class s {
    constructor($) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof $.schema == "object" && (C = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (p = $.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(C?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = s;
  function a(f) {
    const $ = u.call(this, f);
    if ($)
      return $;
    const p = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: C, lines: w } = this.opts.code, { ownProperties: d } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: w, ownProperties: d });
    let _;
    f.$async && (_ = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = h.scopeName("validate");
    f.validateName = k;
    const x = {
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
      validateName: k,
      ValidationError: _,
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
      this._compilations.add(f), (0, i.validateFunctionCode)(x), h.optimize(this.opts.code.optimize);
      const M = h.toString();
      A = `${h.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (A = this.opts.code.process(A, f));
      const D = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(k, { ref: D }), D.errors = null, D.schema = f.schema, D.schemaEnv = f, f.$async && (D.$async = !0), this.opts.code.source === !0 && (D.source = { validateName: k, validateCode: M, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: z, items: L } = x;
        D.evaluated = {
          props: z instanceof e.Name ? void 0 : z,
          items: L instanceof e.Name ? void 0 : L,
          dynamicProps: z instanceof e.Name,
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
  function c(f, $, p) {
    var C;
    p = (0, r.resolveUrl)(this.opts.uriResolver, $, p);
    const w = f.refs[p];
    if (w)
      return w;
    let d = b.call(this, f, p);
    if (d === void 0) {
      const h = (C = f.localRefs) === null || C === void 0 ? void 0 : C[p], { schemaId: _ } = this.opts;
      h && (d = new s({ schema: h, schemaId: _, root: f, baseId: $ }));
    }
    if (d !== void 0)
      return f.refs[p] = l.call(this, d);
  }
  _e.resolveRef = c;
  function l(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function u(f) {
    for (const $ of this._compilations)
      if (m($, f))
        return $;
  }
  _e.getCompilingSchema = u;
  function m(f, $) {
    return f.schema === $.schema && f.root === $.root && f.baseId === $.baseId;
  }
  function b(f, $) {
    let p;
    for (; typeof (p = this.refs[$]) == "string"; )
      $ = p;
    return p || this.schemas[$] || g.call(this, f, $);
  }
  function g(f, $) {
    const p = this.opts.uriResolver.parse($), C = (0, r._getFullPath)(this.opts.uriResolver, p);
    let w = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && C === w)
      return S.call(this, p, f);
    const d = (0, r.normalizeId)(C), h = this.refs[d] || this.schemas[d];
    if (typeof h == "string") {
      const _ = g.call(this, f, h);
      return typeof _?.schema != "object" ? void 0 : S.call(this, p, _);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), d === (0, r.normalizeId)($)) {
        const { schema: _ } = h, { schemaId: k } = this.opts, x = _[k];
        return x && (w = (0, r.resolveUrl)(this.opts.uriResolver, w, x)), new s({ schema: _, schemaId: k, root: f, baseId: w });
      }
      return S.call(this, p, h);
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
  function S(f, { baseId: $, schema: p, root: C }) {
    var w;
    if (((w = f.fragment) === null || w === void 0 ? void 0 : w[0]) !== "/")
      return;
    for (const _ of f.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const k = p[(0, o.unescapeFragment)(_)];
      if (k === void 0)
        return;
      p = k;
      const x = typeof p == "object" && p[this.opts.schemaId];
      !y.has(_) && x && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, x));
    }
    let d;
    if (typeof p != "boolean" && p.$ref && !(0, o.schemaHasRulesButRef)(p, this.RULES)) {
      const _ = (0, r.resolveUrl)(this.opts.uriResolver, $, p.$ref);
      d = g.call(this, C, _);
    }
    const { schemaId: h } = this.opts;
    if (d = d || new s({ schema: p, schemaId: h, root: C, baseId: $ }), d.schema !== d.root.schema)
      return d;
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
var Vt = {}, xt = { exports: {} }, vr, ei;
function ca() {
  if (ei) return vr;
  ei = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(d) {
    let h = "", _ = 0, k = 0;
    for (k = 0; k < d.length; k++)
      if (_ = d[k].charCodeAt(0), _ !== 48) {
        if (!(_ >= 48 && _ <= 57 || _ >= 65 && _ <= 70 || _ >= 97 && _ <= 102))
          return "";
        h += d[k];
        break;
      }
    for (k += 1; k < d.length; k++) {
      if (_ = d[k].charCodeAt(0), !(_ >= 48 && _ <= 57 || _ >= 65 && _ <= 70 || _ >= 97 && _ <= 102))
        return "";
      h += d[k];
    }
    return h;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(d) {
    return d.length = 0, !0;
  }
  function c(d, h, _) {
    if (d.length) {
      const k = i(d);
      if (k !== "")
        h.push(k);
      else
        return _.error = !0, !1;
      d.length = 0;
    }
    return !0;
  }
  function l(d) {
    let h = 0;
    const _ = { error: !1, address: "", zone: "" }, k = [], x = [];
    let A = !1, M = !1, R = c;
    for (let D = 0; D < d.length; D++) {
      const z = d[D];
      if (!(z === "[" || z === "]"))
        if (z === ":") {
          if (A === !0 && (M = !0), !R(x, k, _))
            break;
          if (++h > 7) {
            _.error = !0;
            break;
          }
          D > 0 && d[D - 1] === ":" && (A = !0), k.push(":");
          continue;
        } else if (z === "%") {
          if (!R(x, k, _))
            break;
          R = a;
        } else {
          x.push(z);
          continue;
        }
    }
    return x.length && (R === a ? _.zone = x.join("") : M ? k.push(x.join("")) : k.push(i(x))), _.address = k.join(""), _;
  }
  function u(d) {
    if (m(d, ":") < 2)
      return { host: d, isIPV6: !1 };
    const h = l(d);
    if (h.error)
      return { host: d, isIPV6: !1 };
    {
      let _ = h.address, k = h.address;
      return h.zone && (_ += "%" + h.zone, k += "%25" + h.zone), { host: _, isIPV6: !0, escapedHost: k };
    }
  }
  function m(d, h) {
    let _ = 0;
    for (let k = 0; k < d.length; k++)
      d[k] === h && _++;
    return _;
  }
  function b(d) {
    let h = d;
    const _ = [];
    let k = -1, x = 0;
    for (; x = h.length; ) {
      if (x === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          _.push("/");
          break;
        } else {
          _.push(h);
          break;
        }
      } else if (x === 2) {
        if (h[0] === ".") {
          if (h[1] === ".")
            break;
          if (h[1] === "/") {
            h = h.slice(2);
            continue;
          }
        } else if (h[0] === "/" && (h[1] === "." || h[1] === "/")) {
          _.push("/");
          break;
        }
      } else if (x === 3 && h === "/..") {
        _.length !== 0 && _.pop(), _.push("/");
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
          h = h.slice(3), _.length !== 0 && _.pop();
          continue;
        }
      }
      if ((k = h.indexOf("/", 1)) === -1) {
        _.push(h);
        break;
      } else
        _.push(h.slice(0, k)), h = h.slice(k);
    }
    return _.join("");
  }
  const g = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, y = /[@/?#:]/g, S = /[@/?#]/g;
  function f(d, h) {
    const _ = h ? S : y;
    return _.lastIndex = 0, d.replace(_, (k) => g[k]);
  }
  function $(d, h = !1) {
    if (d.indexOf("%") === -1)
      return d;
    let _ = "";
    for (let k = 0; k < d.length; k++) {
      if (d[k] === "%" && k + 2 < d.length) {
        const x = d.slice(k + 1, k + 3);
        if (n(x)) {
          const A = x.toUpperCase(), M = String.fromCharCode(parseInt(A, 16));
          h && r(M) ? _ += M : _ += "%" + A, k += 2;
          continue;
        }
      }
      _ += d[k];
    }
    return _;
  }
  function p(d) {
    let h = "";
    for (let _ = 0; _ < d.length; _++) {
      if (d[_] === "%" && _ + 2 < d.length) {
        const k = d.slice(_ + 1, _ + 3);
        if (n(k)) {
          const x = k.toUpperCase(), A = String.fromCharCode(parseInt(x, 16));
          A !== "." && r(A) ? h += A : h += "%" + x, _ += 2;
          continue;
        }
      }
      o(d[_]) ? h += d[_] : h += escape(d[_]);
    }
    return h;
  }
  function C(d) {
    let h = "";
    for (let _ = 0; _ < d.length; _++) {
      if (d[_] === "%" && _ + 2 < d.length) {
        const k = d.slice(_ + 1, _ + 3);
        if (n(k)) {
          h += "%" + k.toUpperCase(), _ += 2;
          continue;
        }
      }
      h += escape(d[_]);
    }
    return h;
  }
  function w(d) {
    const h = [];
    if (d.userinfo !== void 0 && (h.push(d.userinfo), h.push("@")), d.host !== void 0) {
      let _ = unescape(d.host);
      if (!t(_)) {
        const k = u(_);
        k.isIPV6 === !0 ? _ = `[${k.escapedHost}]` : _ = f(_, !1);
      }
      h.push(_);
    }
    return (typeof d.port == "number" || typeof d.port == "string") && (h.push(":"), h.push(String(d.port))), h.length ? h.join("") : void 0;
  }
  return vr = {
    nonSimpleDomain: s,
    recomposeAuthority: w,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: $,
    normalizePathEncoding: p,
    escapePreservingEscapes: C,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: u,
    stringArrayToHexStripped: i
  }, vr;
}
var br, ti;
function Vc() {
  if (ti) return br;
  ti = 1;
  const { isUUID: e } = ca(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function r(d) {
    return n.indexOf(
      /** @type {*} */
      d
    ) !== -1;
  }
  function o(d) {
    return d.secure === !0 ? !0 : d.secure === !1 ? !1 : d.scheme ? d.scheme.length === 3 && (d.scheme[0] === "w" || d.scheme[0] === "W") && (d.scheme[1] === "s" || d.scheme[1] === "S") && (d.scheme[2] === "s" || d.scheme[2] === "S") : !1;
  }
  function i(d) {
    return d.host || (d.error = d.error || "HTTP URIs must have a host."), d;
  }
  function s(d) {
    const h = String(d.scheme).toLowerCase() === "https";
    return (d.port === (h ? 443 : 80) || d.port === "") && (d.port = void 0), d.path || (d.path = "/"), d;
  }
  function a(d) {
    return d.secure = o(d), d.resourceName = (d.path || "/") + (d.query ? "?" + d.query : ""), d.path = void 0, d.query = void 0, d;
  }
  function c(d) {
    if ((d.port === (o(d) ? 443 : 80) || d.port === "") && (d.port = void 0), typeof d.secure == "boolean" && (d.scheme = d.secure ? "wss" : "ws", d.secure = void 0), d.resourceName) {
      const [h, _] = d.resourceName.split("?");
      d.path = h && h !== "/" ? h : void 0, d.query = _, d.resourceName = void 0;
    }
    return d.fragment = void 0, d;
  }
  function l(d, h) {
    if (!d.path)
      return d.error = "URN can not be parsed", d;
    const _ = d.path.match(t);
    if (_) {
      const k = h.scheme || d.scheme || "urn";
      d.nid = _[1].toLowerCase(), d.nss = _[2];
      const x = `${k}:${h.nid || d.nid}`, A = w(x);
      d.path = void 0, A && (d = A.parse(d, h));
    } else
      d.error = d.error || "URN can not be parsed.";
    return d;
  }
  function u(d, h) {
    if (d.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const _ = h.scheme || d.scheme || "urn", k = d.nid.toLowerCase(), x = `${_}:${h.nid || k}`, A = w(x);
    A && (d = A.serialize(d, h));
    const M = d, R = d.nss;
    return M.path = `${k || h.nid}:${R}`, h.skipEscape = !0, M;
  }
  function m(d, h) {
    const _ = d;
    return _.uuid = _.nss, _.nss = void 0, !h.tolerant && (!_.uuid || !e(_.uuid)) && (_.error = _.error || "UUID is not valid."), _;
  }
  function b(d) {
    const h = d;
    return h.nss = (d.uuid || "").toLowerCase(), h;
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
      https: y,
      ws: S,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: l,
          serialize: u,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: m,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function w(d) {
    return d && (C[
      /** @type {SchemeName} */
      d
    ] || C[
      /** @type {SchemeName} */
      d.toLowerCase()
    ]) || void 0;
  }
  return br = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: w
  }, br;
}
var ni;
function Bc() {
  if (ni) return xt.exports;
  ni = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = ca(), { SCHEMES: l, getSchemeHandler: u } = Vc();
  function m(x, A) {
    return typeof x == "string" ? x = /** @type {T} */
    d(x, A) : typeof x == "object" && (x = /** @type {T} */
    w(S(x, A), A)), x;
  }
  function b(x, A, M) {
    const R = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, D = g(w(x, R), w(A, R), R, !0);
    return R.skipEscape = !0, S(D, R);
  }
  function g(x, A, M, R) {
    const D = {};
    return R || (x = w(S(x, M), M), A = w(S(A, M), M)), M = M || {}, !M.tolerant && A.scheme ? (D.scheme = A.scheme, D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (D.userinfo = A.userinfo, D.host = A.host, D.port = A.port, D.path = t(A.path || ""), D.query = A.query) : (A.path ? (A.path[0] === "/" ? D.path = t(A.path) : ((x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0) && !x.path ? D.path = "/" + A.path : x.path ? D.path = x.path.slice(0, x.path.lastIndexOf("/") + 1) + A.path : D.path = A.path, D.path = t(D.path)), D.query = A.query) : (D.path = x.path, A.query !== void 0 ? D.query = A.query : D.query = x.query), D.userinfo = x.userinfo, D.host = x.host, D.port = x.port), D.scheme = x.scheme), D.fragment = A.fragment, D;
  }
  function y(x, A, M) {
    const R = _(x, M), D = _(A, M);
    return R !== void 0 && D !== void 0 && R.toLowerCase() === D.toLowerCase();
  }
  function S(x, A) {
    const M = {
      host: x.host,
      scheme: x.scheme,
      userinfo: x.userinfo,
      port: x.port,
      path: x.path,
      query: x.query,
      nid: x.nid,
      nss: x.nss,
      uuid: x.uuid,
      fragment: x.fragment,
      reference: x.reference,
      resourceName: x.resourceName,
      secure: x.secure,
      error: ""
    }, R = Object.assign({}, A), D = [], z = u(R.scheme || M.scheme);
    z && z.serialize && z.serialize(M, R), M.path !== void 0 && (R.skipEscape ? M.path = r(M.path) : (M.path = i(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), R.reference !== "suffix" && M.scheme && D.push(M.scheme, ":");
    const L = n(M);
    if (L !== void 0 && (R.reference !== "suffix" && D.push("//"), D.push(L), M.path && M.path[0] !== "/" && D.push("/")), M.path !== void 0) {
      let W = M.path;
      !R.absolutePath && (!z || !z.absolutePath) && (W = t(W)), L === void 0 && W[0] === "/" && W[1] === "/" && (W = "/%2F" + W.slice(2)), D.push(W);
    }
    return M.query !== void 0 && D.push("?", M.query), M.fragment !== void 0 && D.push("#", M.fragment), D.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function p(x, A) {
    if (A[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function C(x, A) {
    const M = Object.assign({}, A), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let D = !1, z = !1;
    M.reference === "suffix" && (M.scheme ? x = M.scheme + ":" + x : x = "//" + x);
    const L = x.match($);
    L !== null && L[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", D = !0);
    const W = x.match(f);
    if (W) {
      R.scheme = W[1], R.userinfo = W[3], R.host = W[4], R.port = parseInt(W[5], 10), R.path = W[6] || "", R.query = W[7], R.fragment = W[8], isNaN(R.port) && (R.port = W[5]);
      const ne = p(R, W);
      if (ne !== void 0 && (R.error = R.error || ne, D = !0), R.host)
        if (a(R.host) === !1) {
          const G = e(R.host);
          R.host = G.host.toLowerCase(), z = G.isIPV6;
        } else
          z = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== R.reference && (R.error = R.error || "URI is not a " + M.reference + " reference.");
      const X = u(M.scheme || R.scheme);
      if (!M.unicodeSupport && (!X || !X.unicodeSupport) && R.host && (M.domainHost || X && X.domainHost) && z === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (re) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + re;
        }
      if ((!X || X && !X.skipNormalize) && (x.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = s(unescape(R.host), z))), R.path && (R.path = o(R.path)), R.fragment))
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
  function w(x, A) {
    return C(x, A).parsed;
  }
  function d(x, A) {
    return h(x, A).normalized;
  }
  function h(x, A) {
    const { parsed: M, malformedAuthorityOrPort: R } = C(x, A);
    return {
      normalized: R ? x : S(M, A),
      malformedAuthorityOrPort: R
    };
  }
  function _(x, A) {
    if (typeof x == "string") {
      const { normalized: M, malformedAuthorityOrPort: R } = h(x, A);
      return R ? void 0 : M;
    }
    if (typeof x == "object")
      return S(x, A);
  }
  const k = {
    SCHEMES: l,
    normalize: m,
    resolve: b,
    resolveComponent: g,
    equal: y,
    serialize: S,
    parse: w
  };
  return xt.exports = k, xt.exports.default = k, xt.exports.fastUri = k, xt.exports;
}
var ri;
function Uc() {
  if (ri) return Vt;
  ri = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = Bc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Vt.default = e, Vt;
}
var oi;
function Hc() {
  return oi || (oi = 1, (function(e) {
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
    const r = /* @__PURE__ */ eo(), o = /* @__PURE__ */ Zn(), i = /* @__PURE__ */ ia(), s = /* @__PURE__ */ Qn(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Yn(), l = /* @__PURE__ */ Un(), u = /* @__PURE__ */ ce(), m = qc, b = /* @__PURE__ */ Uc(), g = (G, O) => new RegExp(G, O);
    g.code = "new RegExp";
    const y = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, p = 200;
    function C(G) {
      var O, U, I, v, E, P, V, H, Q, ee, N, F, K, J, te, oe, ue, we, $e, ve, me, dt, Ce, cr, lr;
      const Ct = G.strict, dr = (O = G.code) === null || O === void 0 ? void 0 : O.optimize, Eo = dr === !0 || dr === void 0 ? 1 : dr || 0, xo = (I = (U = G.code) === null || U === void 0 ? void 0 : U.regExp) !== null && I !== void 0 ? I : g, ic = (v = G.uriResolver) !== null && v !== void 0 ? v : b.default;
      return {
        strictSchema: (P = (E = G.strictSchema) !== null && E !== void 0 ? E : Ct) !== null && P !== void 0 ? P : !0,
        strictNumbers: (H = (V = G.strictNumbers) !== null && V !== void 0 ? V : Ct) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (Q = G.strictTypes) !== null && Q !== void 0 ? Q : Ct) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (F = (N = G.strictTuples) !== null && N !== void 0 ? N : Ct) !== null && F !== void 0 ? F : "log",
        strictRequired: (J = (K = G.strictRequired) !== null && K !== void 0 ? K : Ct) !== null && J !== void 0 ? J : !1,
        code: G.code ? { ...G.code, optimize: Eo, regExp: xo } : { optimize: Eo, regExp: xo },
        loopRequired: (te = G.loopRequired) !== null && te !== void 0 ? te : p,
        loopEnum: (oe = G.loopEnum) !== null && oe !== void 0 ? oe : p,
        meta: (ue = G.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (we = G.messages) !== null && we !== void 0 ? we : !0,
        inlineRefs: ($e = G.inlineRefs) !== null && $e !== void 0 ? $e : !0,
        schemaId: (ve = G.schemaId) !== null && ve !== void 0 ? ve : "$id",
        addUsedSchema: (me = G.addUsedSchema) !== null && me !== void 0 ? me : !0,
        validateSchema: (dt = G.validateSchema) !== null && dt !== void 0 ? dt : !0,
        validateFormats: (Ce = G.validateFormats) !== null && Ce !== void 0 ? Ce : !0,
        unicodeRegExp: (cr = G.unicodeRegExp) !== null && cr !== void 0 ? cr : !0,
        int32range: (lr = G.int32range) !== null && lr !== void 0 ? lr : !0,
        uriResolver: ic
      };
    }
    class w {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...C(O) };
        const { es5: U, lines: I } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: S, es5: U, lines: I }), this.logger = R(O.logger);
        const v = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, i.getRules)(), d.call(this, f, O, "NOT SUPPORTED"), d.call(this, $, O, "DEPRECATED", "warn"), this._metaOpts = A.call(this), O.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && x.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), _.call(this), O.validateFormats = v;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: U, schemaId: I } = this.opts;
        let v = m;
        I === "id" && (v = { ...m }, v.id = v.$id, delete v.$id), U && O && this.addMetaSchema(v, v[I], !1);
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
        const v = I(U);
        return "$async" in I || (this.errors = I.errors), v;
      }
      compile(O, U) {
        const I = this._addSchema(O, U);
        return I.validate || this._compileSchemaEnv(I);
      }
      compileAsync(O, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: I } = this.opts;
        return v.call(this, O, U);
        async function v(ee, N) {
          await E.call(this, ee.$schema);
          const F = this._addSchema(ee, N);
          return F.validate || P.call(this, F);
        }
        async function E(ee) {
          ee && !this.getSchema(ee) && await v.call(this, { $ref: ee }, !0);
        }
        async function P(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (N) {
            if (!(N instanceof o.default))
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
      addSchema(O, U, I, v = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const P of O)
            this.addSchema(P, void 0, I, v);
          return this;
        }
        let E;
        if (typeof O == "object") {
          const { schemaId: P } = this.opts;
          if (E = O[P], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${P} must be string`);
        }
        return U = (0, c.normalizeId)(U || E), this._checkUnique(U), this.schemas[U] = this._addSchema(O, I, U, v, !0), this;
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
        const v = this.validate(I, O);
        if (!v && U) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return v;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let U;
        for (; typeof (U = h.call(this, O)) == "string"; )
          O = U;
        if (U === void 0) {
          const { schemaId: I } = this.opts, v = new s.SchemaEnv({ schema: {}, schemaId: I });
          if (U = s.resolveSchema.call(this, v, O), !U)
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
          return (0, u.eachItem)(I, (E) => L.call(this, E)), this;
        ne.call(this, U);
        const v = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, u.eachItem)(I, v.type.length === 0 ? (E) => L.call(this, E, v) : (E) => v.type.forEach((P) => L.call(this, E, v, P))), this;
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
          const v = I.rules.findIndex((E) => E.keyword === O);
          v >= 0 && I.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[O] = U, this;
      }
      errorsText(O = this.errors, { separator: U = ", ", dataVar: I = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((v) => `${I}${v.instancePath} ${v.message}`).reduce((v, E) => v + U + E);
      }
      $dataMetaSchema(O, U) {
        const I = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const v of U) {
          const E = v.split("/").slice(1);
          let P = O;
          for (const V of E)
            P = P[V];
          for (const V in I) {
            const H = I[V];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, ee = P[V];
            Q && ee && (P[V] = re(ee));
          }
        }
        return O;
      }
      _removeAllSchemas(O, U) {
        for (const I in O) {
          const v = O[I];
          (!U || U.test(I)) && (typeof v == "string" ? delete O[I] : v && !v.meta && (this._cache.delete(v.schema), delete O[I]));
        }
      }
      _addSchema(O, U, I, v = this.opts.validateSchema, E = this.opts.addUsedSchema) {
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
        I = (0, c.normalizeId)(P || I);
        const Q = c.getSchemaRefs.call(this, O, I);
        return H = new s.SchemaEnv({ schema: O, schemaId: V, meta: U, baseId: I, localRefs: Q }), this._cache.set(H.schema, H), E && !I.startsWith("#") && (I && this._checkUnique(I), this.refs[I] = H), v && this.validateSchema(O, !0), H;
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
    w.ValidationError = r.default, w.MissingRefError = o.default, e.default = w;
    function d(G, O, U, I = "error") {
      for (const v in G) {
        const E = v;
        E in O && this.logger[I](`${U}: option ${v}. ${G[E]}`);
      }
    }
    function h(G) {
      return G = (0, c.normalizeId)(G), this.schemas[G] || this.refs[G];
    }
    function _() {
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
    function x(G) {
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
      for (const O of y)
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
    function z(G, O) {
      const { RULES: U } = this;
      if ((0, u.eachItem)(G, (I) => {
        if (U.keywords[I])
          throw new Error(`Keyword ${I} is already defined`);
        if (!D.test(I))
          throw new Error(`Keyword ${I} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function L(G, O, U) {
      var I;
      const v = O?.post;
      if (U && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let P = v ? E.post : E.rules.find(({ type: H }) => H === U);
      if (P || (P = { type: U, rules: [] }, E.rules.push(P)), E.keywords[G] = !0, !O)
        return;
      const V = {
        keyword: G,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? W.call(this, P, V, O.before) : P.rules.push(V), E.all[G] = V, (I = O.implements) === null || I === void 0 || I.forEach((H) => this.addKeyword(H));
    }
    function W(G, O, U) {
      const I = G.rules.findIndex((v) => v.keyword === U);
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
  })(fr)), fr;
}
var Bt = {}, Ut = {}, Ht = {}, ii;
function Kc() {
  if (ii) return Ht;
  ii = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ht.default = e, Ht;
}
var Ge = {}, si;
function to() {
  if (si) return Ge;
  si = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.callRef = Ge.getValidate = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), o = /* @__PURE__ */ Qn(), i = /* @__PURE__ */ ce(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: u, schema: m, it: b } = l, { baseId: g, schemaEnv: y, validateName: S, opts: f, self: $ } = b, { root: p } = y;
      if ((m === "#" || m === "#/") && g === p.baseId)
        return w();
      const C = o.resolveRef.call($, p, g, m);
      if (C === void 0)
        throw new e.default(b.opts.uriResolver, g, m);
      if (C instanceof o.SchemaEnv)
        return d(C);
      return h(C);
      function w() {
        if (y === p)
          return c(l, S, y, y.$async);
        const _ = u.scopeValue("root", { ref: p });
        return c(l, (0, n._)`${_}.validate`, p, p.$async);
      }
      function d(_) {
        const k = a(l, _);
        c(l, k, _, _.$async);
      }
      function h(_) {
        const k = u.scopeValue("schema", f.code.source === !0 ? { ref: _, code: (0, n.stringify)(_) } : { ref: _ }), x = u.name("valid"), A = l.subschema({
          schema: _,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: m
        }, x);
        l.mergeEvaluated(A), l.ok(x);
      }
    }
  };
  function a(l, u) {
    const { gen: m } = l;
    return u.validate ? m.scopeValue("validate", { ref: u.validate }) : (0, n._)`${m.scopeValue("wrapper", { ref: u })}.validate`;
  }
  Ge.getValidate = a;
  function c(l, u, m, b) {
    const { gen: g, it: y } = l, { allErrors: S, schemaEnv: f, opts: $ } = y, p = $.passContext ? r.default.this : n.nil;
    b ? C() : w();
    function C() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const _ = g.let("valid");
      g.try(() => {
        g.code((0, n._)`await ${(0, t.callValidateCode)(l, u, p)}`), h(u), S || g.assign(_, !0);
      }, (k) => {
        g.if((0, n._)`!(${k} instanceof ${y.ValidationError})`, () => g.throw(k)), d(k), S || g.assign(_, !1);
      }), l.ok(_);
    }
    function w() {
      l.result((0, t.callValidateCode)(l, u, p), () => h(u), () => d(u));
    }
    function d(_) {
      const k = (0, n._)`${_}.errors`;
      g.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), g.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(_) {
      var k;
      if (!y.opts.unevaluated)
        return;
      const x = (k = m?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (y.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (y.props = i.mergeEvaluated.props(g, x.props, y.props));
        else {
          const A = g.var("props", (0, n._)`${_}.evaluated.props`);
          y.props = i.mergeEvaluated.props(g, A, y.props, n.Name);
        }
      if (y.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (y.items = i.mergeEvaluated.items(g, x.items, y.items));
        else {
          const A = g.var("items", (0, n._)`${_}.evaluated.items`);
          y.items = i.mergeEvaluated.items(g, A, y.items, n.Name);
        }
    }
  }
  return Ge.callRef = c, Ge.default = s, Ge;
}
var ai;
function Gc() {
  if (ai) return Ut;
  ai = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kc(), t = /* @__PURE__ */ to(), n = [
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
var Kt = {}, Gt = {}, ci;
function Wc() {
  if (ci) return Gt;
  ci = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
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
  return Gt.default = o, Gt;
}
var Wt = {}, li;
function Jc() {
  if (li) return Wt;
  li = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, l = o.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      r.fail$data((0, e._)`(${s} === 0 || (${l} = ${i}/${s}, ${u}))`);
    }
  };
  return Wt.default = n, Wt;
}
var Jt = {}, Yt = {}, di;
function Yc() {
  if (di) return Yt;
  di = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Yt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Yt;
}
var ui;
function Xc() {
  if (ui) return Jt;
  ui = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Yc(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: l } = i, u = s === "maxLength" ? e.operators.GT : e.operators.LT, m = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${m} ${u} ${c}`);
    }
  };
  return Jt.default = o, Jt;
}
var Xt = {}, fi;
function Zc() {
  if (fi) return Xt;
  fi = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: l, schemaCode: u, it: m } = i, b = m.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: g } = m.opts.code, y = g.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, g), S = s.let("valid");
        s.try(() => s.assign(S, (0, n._)`${y}(${u}, ${b}).test(${a})`), () => s.assign(S, !1)), i.fail$data((0, n._)`!${S}`);
      } else {
        const g = (0, e.usePattern)(i, l);
        i.fail$data((0, n._)`!${g}.test(${a})`);
      }
    }
  };
  return Xt.default = o, Xt;
}
var Zt = {}, pi;
function Qc() {
  if (pi) return Zt;
  pi = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
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
  return Zt.default = n, Zt;
}
var Qt = {}, hi;
function el() {
  if (hi) return Qt;
  hi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: l, $data: u, it: m } = i, { opts: b } = m;
      if (!u && a.length === 0)
        return;
      const g = a.length >= b.loopRequired;
      if (m.allErrors ? y() : S(), b.strictRequired) {
        const p = i.parentSchema.properties, { definedProperties: C } = i.it;
        for (const w of a)
          if (p?.[w] === void 0 && !C.has(w)) {
            const d = m.schemaEnv.baseId + m.errSchemaPath, h = `required property "${w}" is not defined at "${d}" (strictRequired)`;
            (0, n.checkStrictMode)(m, h, m.opts.strictRequired);
          }
      }
      function y() {
        if (g || u)
          i.block$data(t.nil, f);
        else
          for (const p of a)
            (0, e.checkReportMissingProp)(i, p);
      }
      function S() {
        const p = s.let("missing");
        if (g || u) {
          const C = s.let("valid", !0);
          i.block$data(C, () => $(p, C)), i.ok(C);
        } else
          s.if((0, e.checkMissingProp)(i, a, p)), (0, e.reportMissingProp)(i, p), s.else();
      }
      function f() {
        s.forOf("prop", c, (p) => {
          i.setParams({ missingProperty: p }), s.if((0, e.noPropertyInData)(s, l, p, b.ownProperties), () => i.error());
        });
      }
      function $(p, C) {
        i.setParams({ missingProperty: p }), s.forOf(p, c, () => {
          s.assign(C, (0, e.propertyInData)(s, l, p, b.ownProperties)), s.if((0, t.not)(C), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Qt.default = o, Qt;
}
var en = {}, mi;
function tl() {
  if (mi) return en;
  mi = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
  return en.default = n, en;
}
var tn = {}, nn = {}, gi;
function no() {
  if (gi) return nn;
  gi = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = aa();
  return e.code = 'require("ajv/dist/runtime/equal").default', nn.default = e, nn;
}
var yi;
function nl() {
  if (yi) return tn;
  yi = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ no(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: u, parentSchema: m, schemaCode: b, it: g } = s;
      if (!l && !u)
        return;
      const y = a.let("valid"), S = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      s.block$data(y, f, (0, t._)`${b} === false`), s.ok(y);
      function f() {
        const w = a.let("i", (0, t._)`${c}.length`), d = a.let("j");
        s.setParams({ i: w, j: d }), a.assign(y, !0), a.if((0, t._)`${w} > 1`, () => ($() ? p : C)(w, d));
      }
      function $() {
        return S.length > 0 && !S.some((w) => w === "object" || w === "array");
      }
      function p(w, d) {
        const h = a.name("item"), _ = (0, e.checkDataTypes)(S, h, g.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${w}--;`, () => {
          a.let(h, (0, t._)`${c}[${w}]`), a.if(_, (0, t._)`continue`), S.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${k}[${h}] == "number"`, () => {
            a.assign(d, (0, t._)`${k}[${h}]`), s.error(), a.assign(y, !1).break();
          }).code((0, t._)`${k}[${h}] = ${w}`);
        });
      }
      function C(w, d) {
        const h = (0, n.useFunc)(a, r.default), _ = a.name("outer");
        a.label(_).for((0, t._)`;${w}--;`, () => a.for((0, t._)`${d} = ${w}; ${d}--;`, () => a.if((0, t._)`${h}(${c}[${w}], ${c}[${d}])`, () => {
          s.error(), a.assign(y, !1).break(_);
        })));
      }
    }
  };
  return tn.default = i, tn;
}
var rn = {}, $i;
function rl() {
  if ($i) return rn;
  $i = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ no(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schemaCode: l, schema: u } = i;
      c || u && typeof u == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${l})`) : i.fail((0, e._)`${u} !== ${a}`);
    }
  };
  return rn.default = o, rn;
}
var on = {}, vi;
function ol() {
  if (vi) return on;
  vi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ no(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: u, it: m } = i;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const b = l.length >= m.opts.loopEnum;
      let g;
      const y = () => g ?? (g = (0, t.useFunc)(s, n.default));
      let S;
      if (b || c)
        S = s.let("valid"), i.block$data(S, f);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const p = s.const("vSchema", u);
        S = (0, e.or)(...l.map((C, w) => $(p, w)));
      }
      i.pass(S);
      function f() {
        s.assign(S, !1), s.forOf("v", u, (p) => s.if((0, e._)`${y()}(${a}, ${p})`, () => s.assign(S, !0).break()));
      }
      function $(p, C) {
        const w = l[C];
        return typeof w == "object" && w !== null ? (0, e._)`${y()}(${a}, ${p}[${C}])` : (0, e._)`${a} === ${w}`;
      }
    }
  };
  return on.default = o, on;
}
var bi;
function il() {
  if (bi) return Kt;
  bi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wc(), t = /* @__PURE__ */ Jc(), n = /* @__PURE__ */ Xc(), r = /* @__PURE__ */ Zc(), o = /* @__PURE__ */ Qc(), i = /* @__PURE__ */ el(), s = /* @__PURE__ */ tl(), a = /* @__PURE__ */ nl(), c = /* @__PURE__ */ rl(), l = /* @__PURE__ */ ol(), u = [
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
  return Kt.default = u, Kt;
}
var sn = {}, ut = {}, wi;
function la() {
  if (wi) return ut;
  wi = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: l, keyword: u, it: m } = i;
    m.items = !0;
    const b = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${b} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(m, c)) {
      const y = a.var("valid", (0, e._)`${b} <= ${s.length}`);
      a.if((0, e.not)(y), () => g(y)), i.ok(y);
    }
    function g(y) {
      a.forRange("i", s.length, b, (S) => {
        i.subschema({ keyword: u, dataProp: S, dataPropType: t.Type.Num }, y), m.allErrors || a.if((0, e.not)(y), () => a.break());
      });
    }
  }
  return ut.validateAdditionalItems = o, ut.default = r, ut;
}
var an = {}, ft = {}, _i;
function da() {
  if (_i) return ft;
  _i = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateTuple = void 0;
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
    const { gen: c, parentSchema: l, data: u, keyword: m, it: b } = i;
    S(l), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(c, a.length, b.items));
    const g = c.name("valid"), y = c.const("len", (0, e._)`${u}.length`);
    a.forEach((f, $) => {
      (0, t.alwaysValidSchema)(b, f) || (c.if((0, e._)`${y} > ${$}`, () => i.subschema({
        keyword: m,
        schemaProp: $,
        dataProp: $
      }, g)), i.ok(g));
    });
    function S(f) {
      const { opts: $, errSchemaPath: p } = b, C = a.length, w = C === f.minItems && (C === f.maxItems || f[s] === !1);
      if ($.strictTuples && !w) {
        const d = `"${m}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(b, d, $.strictTuples);
      }
    }
  }
  return ft.validateTuple = o, ft.default = r, ft;
}
var Si;
function sl() {
  if (Si) return an;
  Si = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ da(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return an.default = t, an;
}
var cn = {}, Ci;
function al() {
  if (Ci) return cn;
  Ci = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ la(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: l } = s, { prefixItems: u } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (u ? (0, r.validateAdditionalItems)(s, u) : s.ok((0, n.validateArray)(s)));
    }
  };
  return cn.default = i, cn;
}
var ln = {}, ki;
function cl() {
  if (ki) return ln;
  ki = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
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
      let u, m;
      const { minContains: b, maxContains: g } = a;
      l.opts.next ? (u = b === void 0 ? 1 : b, m = g) : u = 1;
      const y = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: u, max: m }), m === void 0 && u === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (m !== void 0 && u > m) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let C = (0, e._)`${y} >= ${u}`;
        m !== void 0 && (C = (0, e._)`${C} && ${y} <= ${m}`), o.pass(C);
        return;
      }
      l.items = !0;
      const S = i.name("valid");
      m === void 0 && u === 1 ? $(S, () => i.if(S, () => i.break())) : u === 0 ? (i.let(S, !0), m !== void 0 && i.if((0, e._)`${c}.length > 0`, f)) : (i.let(S, !1), f()), o.result(S, () => o.reset());
      function f() {
        const C = i.name("_valid"), w = i.let("count", 0);
        $(C, () => i.if(C, () => p(w)));
      }
      function $(C, w) {
        i.forRange("i", 0, y, (d) => {
          o.subschema({
            keyword: "contains",
            dataProp: d,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), w();
        });
      }
      function p(C) {
        i.code((0, e._)`${C}++`), m === void 0 ? i.if((0, e._)`${C} >= ${u}`, () => i.assign(S, !0).break()) : (i.if((0, e._)`${C} > ${m}`, () => i.assign(S, !1).break()), u === 1 ? i.assign(S, !0) : i.if((0, e._)`${C} >= ${u}`, () => i.assign(S, !0)));
      }
    }
  };
  return ln.default = r, ln;
}
var wr = {}, Ei;
function ro() {
  return Ei || (Ei = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: u } }) => {
        const m = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${m} ${u} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: u, missingProperty: m } }) => (0, t._)`{property: ${c},
    missingProperty: ${m},
    depsCount: ${l},
    deps: ${u}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, u] = i(c);
        s(c, l), a(c, u);
      }
    };
    function i({ schema: c }) {
      const l = {}, u = {};
      for (const m in c) {
        if (m === "__proto__")
          continue;
        const b = Array.isArray(c[m]) ? l : u;
        b[m] = c[m];
      }
      return [l, u];
    }
    function s(c, l = c.schema) {
      const { gen: u, data: m, it: b } = c;
      if (Object.keys(l).length === 0)
        return;
      const g = u.let("missing");
      for (const y in l) {
        const S = l[y];
        if (S.length === 0)
          continue;
        const f = (0, r.propertyInData)(u, m, y, b.opts.ownProperties);
        c.setParams({
          property: y,
          depsCount: S.length,
          deps: S.join(", ")
        }), b.allErrors ? u.if(f, () => {
          for (const $ of S)
            (0, r.checkReportMissingProp)(c, $);
        }) : (u.if((0, t._)`${f} && (${(0, r.checkMissingProp)(c, S, g)})`), (0, r.reportMissingProp)(c, g), u.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: u, data: m, keyword: b, it: g } = c, y = u.name("valid");
      for (const S in l)
        (0, n.alwaysValidSchema)(g, l[S]) || (u.if(
          (0, r.propertyInData)(u, m, S, g.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: b, schemaProp: S }, y);
            c.mergeValidEvaluated(f, y);
          },
          () => u.var(y, !0)
          // TODO var
        ), c.ok(y));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(wr)), wr;
}
var dn = {}, xi;
function ll() {
  if (xi) return dn;
  xi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
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
      i.forIn("key", a, (u) => {
        o.setParams({ propertyName: u }), o.subschema({
          keyword: "propertyNames",
          data: u,
          dataTypes: ["string"],
          propertyName: u,
          compositeRule: !0
        }, l), i.if((0, e.not)(l), () => {
          o.error(!0), c.allErrors || i.break();
        });
      }), o.ok(l);
    }
  };
  return dn.default = r, dn;
}
var un = {}, Ai;
function ua() {
  if (Ai) return un;
  Ai = 1, Object.defineProperty(un, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: l, data: u, errsCount: m, it: b } = s;
      if (!m)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: y } = b;
      if (b.props = !0, y.removeAdditional !== "all" && (0, r.alwaysValidSchema)(b, c))
        return;
      const S = (0, e.allSchemaProperties)(l.properties), f = (0, e.allSchemaProperties)(l.patternProperties);
      $(), s.ok((0, t._)`${m} === ${n.default.errors}`);
      function $() {
        a.forIn("key", u, (h) => {
          !S.length && !f.length ? w(h) : a.if(p(h), () => w(h));
        });
      }
      function p(h) {
        let _;
        if (S.length > 8) {
          const k = (0, r.schemaRefOrVal)(b, l.properties, "properties");
          _ = (0, e.isOwnProperty)(a, k, h);
        } else S.length ? _ = (0, t.or)(...S.map((k) => (0, t._)`${h} === ${k}`)) : _ = t.nil;
        return f.length && (_ = (0, t.or)(_, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${h})`))), (0, t.not)(_);
      }
      function C(h) {
        a.code((0, t._)`delete ${u}[${h}]`);
      }
      function w(h) {
        if (y.removeAdditional === "all" || y.removeAdditional && c === !1) {
          C(h);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: h }), s.error(), g || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(b, c)) {
          const _ = a.name("valid");
          y.removeAdditional === "failing" ? (d(h, _, !1), a.if((0, t.not)(_), () => {
            s.reset(), C(h);
          })) : (d(h, _), g || a.if((0, t.not)(_), () => a.break()));
        }
      }
      function d(h, _, k) {
        const x = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(x, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(x, _);
      }
    }
  };
  return un.default = i, un;
}
var fn = {}, Pi;
function dl() {
  if (Pi) return fn;
  Pi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ua(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: u } = i;
      u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(u, r.default, "additionalProperties"));
      const m = (0, t.allSchemaProperties)(a);
      for (const f of m)
        u.definedProperties.add(f);
      u.opts.unevaluated && m.length && u.props !== !0 && (u.props = n.mergeEvaluated.props(s, (0, n.toHash)(m), u.props));
      const b = m.filter((f) => !(0, n.alwaysValidSchema)(u, a[f]));
      if (b.length === 0)
        return;
      const g = s.name("valid");
      for (const f of b)
        y(f) ? S(f) : (s.if((0, t.propertyInData)(s, l, f, u.opts.ownProperties)), S(f), u.allErrors || s.else().var(g, !0), s.endIf()), i.it.definedProperties.add(f), i.ok(g);
      function y(f) {
        return u.opts.useDefaults && !u.compositeRule && a[f].default !== void 0;
      }
      function S(f) {
        i.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, g);
      }
    }
  };
  return fn.default = o, fn;
}
var pn = {}, Ri;
function ul() {
  if (Ri) return pn;
  Ri = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: u } = i, { opts: m } = u, b = (0, e.allSchemaProperties)(a), g = b.filter((w) => (0, n.alwaysValidSchema)(u, a[w]));
      if (b.length === 0 || g.length === b.length && (!u.opts.unevaluated || u.props === !0))
        return;
      const y = m.strictSchema && !m.allowMatchingProperties && l.properties, S = s.name("valid");
      u.props !== !0 && !(u.props instanceof t.Name) && (u.props = (0, r.evaluatedPropsToName)(s, u.props));
      const { props: f } = u;
      $();
      function $() {
        for (const w of b)
          y && p(w), u.allErrors ? C(w) : (s.var(S, !0), C(w), s.if(S));
      }
      function p(w) {
        for (const d in y)
          new RegExp(w).test(d) && (0, n.checkStrictMode)(u, `property ${d} matches pattern ${w} (use allowMatchingProperties)`);
      }
      function C(w) {
        s.forIn("key", c, (d) => {
          s.if((0, t._)`${(0, e.usePattern)(i, w)}.test(${d})`, () => {
            const h = g.includes(w);
            h || i.subschema({
              keyword: "patternProperties",
              schemaProp: w,
              dataProp: d,
              dataPropType: r.Type.Str
            }, S), u.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${d}]`, !0) : !h && !u.allErrors && s.if((0, t.not)(S), () => s.break());
          });
        });
      }
    }
  };
  return pn.default = o, pn;
}
var hn = {}, Ni;
function fl() {
  if (Ni) return hn;
  Ni = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
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
  return hn.default = t, hn;
}
var mn = {}, Mi;
function pl() {
  if (Mi) return mn;
  Mi = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return mn.default = t, mn;
}
var gn = {}, Ti;
function hl() {
  if (Ti) return gn;
  Ti = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
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
      const l = s, u = i.let("valid", !1), m = i.let("passing", null), b = i.name("_valid");
      o.setParams({ passing: m }), i.block(g), o.result(u, () => o.reset(), () => o.error(!0));
      function g() {
        l.forEach((y, S) => {
          let f;
          (0, t.alwaysValidSchema)(c, y) ? i.var(b, !0) : f = o.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, b), S > 0 && i.if((0, e._)`${b} && ${u}`).assign(u, !1).assign(m, (0, e._)`[${m}, ${S}]`).else(), i.if(b, () => {
            i.assign(u, !0), i.assign(m, S), f && o.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return gn.default = r, gn;
}
var yn = {}, Oi;
function ml() {
  if (Oi) return yn;
  Oi = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
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
  return yn.default = t, yn;
}
var $n = {}, Fi;
function gl() {
  if (Fi) return $n;
  Fi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
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
      const l = o(c, "then"), u = o(c, "else");
      if (!l && !u)
        return;
      const m = s.let("valid", !0), b = s.name("_valid");
      if (g(), i.reset(), l && u) {
        const S = s.let("ifClause");
        i.setParams({ ifClause: S }), s.if(b, y("then", S), y("else", S));
      } else l ? s.if(b, y("then")) : s.if((0, e.not)(b), y("else"));
      i.pass(m, () => i.error(!0));
      function g() {
        const S = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        i.mergeEvaluated(S);
      }
      function y(S, f) {
        return () => {
          const $ = i.subschema({ keyword: S }, b);
          s.assign(m, b), i.mergeValidEvaluated($, m), f ? s.assign(f, (0, e._)`${S}`) : i.setParams({ ifClause: S });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return $n.default = r, $n;
}
var vn = {}, zi;
function yl() {
  if (zi) return vn;
  zi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return vn.default = t, vn;
}
var Ii;
function $l() {
  if (Ii) return sn;
  Ii = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ la(), t = /* @__PURE__ */ sl(), n = /* @__PURE__ */ da(), r = /* @__PURE__ */ al(), o = /* @__PURE__ */ cl(), i = /* @__PURE__ */ ro(), s = /* @__PURE__ */ ll(), a = /* @__PURE__ */ ua(), c = /* @__PURE__ */ dl(), l = /* @__PURE__ */ ul(), u = /* @__PURE__ */ fl(), m = /* @__PURE__ */ pl(), b = /* @__PURE__ */ hl(), g = /* @__PURE__ */ ml(), y = /* @__PURE__ */ gl(), S = /* @__PURE__ */ yl();
  function f($ = !1) {
    const p = [
      // any
      u.default,
      m.default,
      b.default,
      g.default,
      y.default,
      S.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      l.default
    ];
    return $ ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(o.default), p;
  }
  return sn.default = f, sn;
}
var bn = {}, pt = {}, ji;
function fa() {
  if (ji) return pt;
  ji = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ to(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: l, it: u } = a;
    u.schemaEnv.root.dynamicAnchors[c] = !0;
    const m = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, b = u.errSchemaPath === "#" ? u.validateName : s(a);
    l.if((0, e._)`!${m}`, () => l.assign(m, b));
  }
  pt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: l, self: u } = a.it, { root: m, baseId: b, localRefs: g, meta: y } = c.root, { schemaId: S } = u.opts, f = new n.SchemaEnv({ schema: l, schemaId: S, root: m, baseId: b, localRefs: g, meta: y });
    return n.compileSchema.call(u, f), (0, r.getValidate)(a, f);
  }
  return pt.default = o, pt;
}
var ht = {}, Di;
function pa() {
  if (Di) return ht;
  Di = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ to(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: c, it: l } = i;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const u = s.slice(1);
    if (l.allErrors)
      m();
    else {
      const g = a.let("valid", !1);
      m(g), i.ok(g);
    }
    function m(g) {
      if (l.schemaEnv.root.dynamicAnchors[u]) {
        const y = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(u)}`);
        a.if(y, b(y, g), b(l.validateName, g));
      } else
        b(l.validateName, g)();
    }
    function b(g, y) {
      return y ? () => a.block(() => {
        (0, n.callRef)(i, g), a.let(y, !0);
      }) : () => (0, n.callRef)(i, g);
    }
  }
  return ht.dynamicRef = o, ht.default = r, ht;
}
var wn = {}, Li;
function vl() {
  if (Li) return wn;
  Li = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fa(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return wn.default = n, wn;
}
var _n = {}, qi;
function bl() {
  if (qi) return _n;
  qi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pa(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return _n.default = t, _n;
}
var Vi;
function wl() {
  if (Vi) return bn;
  Vi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fa(), t = /* @__PURE__ */ pa(), n = /* @__PURE__ */ vl(), r = /* @__PURE__ */ bl(), o = [e.default, t.default, n.default, r.default];
  return bn.default = o, bn;
}
var Sn = {}, Cn = {}, Bi;
function _l() {
  if (Bi) return Cn;
  Bi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ro(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Cn.default = t, Cn;
}
var kn = {}, Ui;
function Sl() {
  if (Ui) return kn;
  Ui = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ro(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return kn.default = t, kn;
}
var En = {}, Hi;
function Cl() {
  if (Hi) return En;
  Hi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return En.default = t, En;
}
var Ki;
function kl() {
  if (Ki) return Sn;
  Ki = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ Sl(), n = /* @__PURE__ */ Cl(), r = [e.default, t.default, n.default];
  return Sn.default = r, Sn;
}
var xn = {}, An = {}, Gi;
function El() {
  if (Gi) return An;
  Gi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, data: c, errsCount: l, it: u } = i;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: m, props: b } = u;
      b instanceof e.Name ? s.if((0, e._)`${b} !== true`, () => s.forIn("key", c, (f) => s.if(y(b, f), () => g(f)))) : b !== !0 && s.forIn("key", c, (f) => b === void 0 ? g(f) : s.if(S(b, f), () => g(f))), u.props = !0, i.ok((0, e._)`${l} === ${n.default.errors}`);
      function g(f) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: f }), i.error(), m || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(u, a)) {
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
      function S(f, $) {
        const p = [];
        for (const C in f)
          f[C] === !0 && p.push((0, e._)`${$} !== ${C}`);
        return (0, e.and)(...p);
      }
    }
  };
  return An.default = o, An;
}
var Pn = {}, Wi;
function xl() {
  if (Wi) return Pn;
  Wi = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
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
      const u = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: l }), o.fail((0, e._)`${u} > ${l}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const b = i.var("valid", (0, e._)`${u} <= ${l}`);
        i.if((0, e.not)(b), () => m(b, l)), o.ok(b);
      }
      c.items = !0;
      function m(b, g) {
        i.forRange("i", g, u, (y) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: y, dataPropType: t.Type.Num }, b), c.allErrors || i.if((0, e.not)(b), () => i.break());
        });
      }
    }
  };
  return Pn.default = r, Pn;
}
var Ji;
function Al() {
  if (Ji) return xn;
  Ji = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ El(), t = /* @__PURE__ */ xl(), n = [e.default, t.default];
  return xn.default = n, xn;
}
var Rn = {}, Nn = {}, Yi;
function Pl() {
  if (Yi) return Nn;
  Yi = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: c, schemaCode: l, it: u } = r, { opts: m, errSchemaPath: b, schemaEnv: g, self: y } = u;
      if (!m.validateFormats)
        return;
      a ? S() : f();
      function S() {
        const $ = i.scopeValue("formats", {
          ref: y.formats,
          code: m.code.formats
        }), p = i.const("fDef", (0, e._)`${$}[${l}]`), C = i.let("fType"), w = i.let("format");
        i.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => i.assign(C, (0, e._)`${p}.type || "string"`).assign(w, (0, e._)`${p}.validate`), () => i.assign(C, (0, e._)`"string"`).assign(w, p)), r.fail$data((0, e.or)(d(), h()));
        function d() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${w}`;
        }
        function h() {
          const _ = g.$async ? (0, e._)`(${p}.async ? await ${w}(${s}) : ${w}(${s}))` : (0, e._)`${w}(${s})`, k = (0, e._)`(typeof ${w} == "function" ? ${_} : ${w}.test(${s}))`;
          return (0, e._)`${w} && ${w} !== true && ${C} === ${o} && !${k}`;
        }
      }
      function f() {
        const $ = y.formats[c];
        if (!$) {
          d();
          return;
        }
        if ($ === !0)
          return;
        const [p, C, w] = h($);
        p === o && r.pass(_());
        function d() {
          if (m.strictSchema === !1) {
            y.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${c}" ignored in schema at path "${b}"`;
          }
        }
        function h(k) {
          const x = k instanceof RegExp ? (0, e.regexpCode)(k) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(c)}` : void 0, A = i.scopeValue("formats", { key: c, ref: k, code: x });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${A}.validate`] : ["string", k, A];
        }
        function _() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!g.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${w}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${w}(${s})` : (0, e._)`${w}.test(${s})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Xi;
function Rl() {
  if (Xi) return Rn;
  Xi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Pl()).default];
  return Rn.default = t, Rn;
}
var rt = {}, Zi;
function Nl() {
  return Zi || (Zi = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.contentVocabulary = rt.metadataVocabulary = void 0, rt.metadataVocabulary = [
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
var Qi;
function Ml() {
  if (Qi) return Bt;
  Qi = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gc(), t = /* @__PURE__ */ il(), n = /* @__PURE__ */ $l(), r = /* @__PURE__ */ wl(), o = /* @__PURE__ */ kl(), i = /* @__PURE__ */ Al(), s = /* @__PURE__ */ Rl(), a = /* @__PURE__ */ Nl(), c = [
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
  return Bt.default = c, Bt;
}
var Mn = {}, At = {}, es;
function Tl() {
  if (es) return At;
  es = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (At.DiscrError = e = {})), At;
}
var ts;
function Ol() {
  if (ts) return Mn;
  ts = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Tl(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ ce(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: u, parentSchema: m, it: b } = a, { oneOf: g } = m;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const y = u.propertyName;
      if (typeof y != "string")
        throw new Error("discriminator: requires propertyName");
      if (u.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const S = c.let("valid", !1), f = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(y)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: y })), a.ok(S);
      function $() {
        const w = C();
        c.if(!1);
        for (const d in w)
          c.elseIf((0, e._)`${f} === ${d}`), c.assign(S, p(w[d]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: y }), c.endIf();
      }
      function p(w) {
        const d = c.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: w }, d);
        return a.mergeEvaluated(h, e.Name), d;
      }
      function C() {
        var w;
        const d = {}, h = k(m);
        let _ = !0;
        for (let M = 0; M < g.length; M++) {
          let R = g[M];
          if (R?.$ref && !(0, o.schemaHasRulesButRef)(R, b.self.RULES)) {
            const z = R.$ref;
            if (R = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, z), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(b.opts.uriResolver, b.baseId, z);
          }
          const D = (w = R?.properties) === null || w === void 0 ? void 0 : w[y];
          if (typeof D != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
          _ = _ && (h || k(R)), x(D, M);
        }
        if (!_)
          throw new Error(`discriminator: "${y}" must be required`);
        return d;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(y);
        }
        function x(M, R) {
          if (M.const)
            A(M.const, R);
          else if (M.enum)
            for (const D of M.enum)
              A(D, R);
          else
            throw new Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
        }
        function A(M, R) {
          if (typeof M != "string" || M in d)
            throw new Error(`discriminator: "${y}" values must be unique strings`);
          d[M] = R;
        }
      }
    }
  };
  return Mn.default = s, Mn;
}
var Tn = {};
const Fl = "https://json-schema.org/draft/2020-12/schema", zl = "https://json-schema.org/draft/2020-12/schema", Il = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, jl = "meta", Dl = "Core and Validation specifications meta-schema", Ll = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], ql = ["object", "boolean"], Vl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Bl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ul = {
  $schema: Fl,
  $id: zl,
  $vocabulary: Il,
  $dynamicAnchor: jl,
  title: Dl,
  allOf: Ll,
  type: ql,
  $comment: Vl,
  properties: Bl
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
}, gd = "https://json-schema.org/draft/2020-12/schema", yd = "https://json-schema.org/draft/2020-12/meta/core", $d = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, vd = "meta", bd = "Core vocabulary meta-schema", wd = ["object", "boolean"], _d = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Sd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Cd = {
  $schema: gd,
  $id: yd,
  $vocabulary: $d,
  $dynamicAnchor: vd,
  title: bd,
  type: wd,
  properties: _d,
  $defs: Sd
}, kd = "https://json-schema.org/draft/2020-12/schema", Ed = "https://json-schema.org/draft/2020-12/meta/format-annotation", xd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Ad = "meta", Pd = "Format vocabulary meta-schema for annotation results", Rd = ["object", "boolean"], Nd = { format: { type: "string" } }, Md = {
  $schema: kd,
  $id: Ed,
  $vocabulary: xd,
  $dynamicAnchor: Ad,
  title: Pd,
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
}, qd = "https://json-schema.org/draft/2020-12/schema", Vd = "https://json-schema.org/draft/2020-12/meta/validation", Bd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ud = "meta", Hd = "Validation vocabulary meta-schema", Kd = ["object", "boolean"], Gd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Wd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Jd = {
  $schema: qd,
  $id: Vd,
  $vocabulary: Bd,
  $dynamicAnchor: Ud,
  title: Hd,
  type: Kd,
  properties: Gd,
  $defs: Wd
};
var ns;
function Yd() {
  if (ns) return Tn;
  ns = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = Ul, t = Ql, n = ad, r = md, o = Cd, i = Md, s = Ld, a = Jd, c = ["/properties"];
  function l(u) {
    return [
      e,
      t,
      n,
      r,
      o,
      m(this, i),
      s,
      m(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function m(b, g) {
      return u ? b.$dataMetaSchema(g, c) : g;
    }
  }
  return Tn.default = l, Tn;
}
var rs;
function Xd() {
  return rs || (rs = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Hc(), r = /* @__PURE__ */ Ml(), o = /* @__PURE__ */ Ol(), i = /* @__PURE__ */ Yd(), s = "https://json-schema.org/draft/2020-12/schema";
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
    var u = /* @__PURE__ */ eo();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return u.default;
    } });
    var m = /* @__PURE__ */ Zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(jt, jt.exports)), jt.exports;
}
var Zd = /* @__PURE__ */ Xd();
const Qd = /* @__PURE__ */ Pc(Zd), eu = "https://json-schema.org/draft/2020-12/schema", tu = "https://raw.githubusercontent.com/omsf-eco-infra/alchemy-viz/main/schema/alchemy-viz.schema.json", nu = "alchemy-viz payload", ru = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ou = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], iu = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), oo = {
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
], io = oo.$id, so = new Qd({ allErrors: !0, strict: !1 });
so.addSchema(oo, io);
const os = so.getSchema(io), su = Object.entries(oo.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ha = /* @__PURE__ */ new Map();
for (const e of su) {
  const t = so.getSchema(`${io}#/$defs/${e}`);
  t && ha.set(e, t);
}
const is = { valid: !0, issues: [] };
function ss(e) {
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
  const t = e.type, n = typeof t == "string" ? ha.get(t) : void 0;
  return n ? n(e) ? is : { valid: !1, issues: ss(n.errors) } : os(e) ? is : { valid: !1, issues: ss(os.errors) };
}
function cu(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const ao = {
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
      message: "This does not look like an alchemy-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!ao[t]) return du(t);
  const { valid: n, issues: r } = au(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the alchemy-viz schema.`,
    detail: cu(r)
  };
}
function du(e) {
  const t = Object.keys(ao).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class uu extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    xc("payload", n, this);
    const r = lu(n);
    if (r)
      return t.appendChild(fu(r, n)), {};
    const o = n.type, i = ao[o], s = document.createElement(i);
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
  const r = (i, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${j.warnBg};color:${j.warnFg};border:1px solid ${j.warnBorder};` : `background:${j.panelBg};color:${j.textMuted2};border:1px solid ${j.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = pu(t);
  return o && n.appendChild(r(o, !1)), n;
}
function pu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${t.type}`), typeof t.name == "string" && t.name && n.push(`name: ${t.name}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ne("alchemy-view", uu);
function lt(e = "", t) {
  const n = T("button", Ro.base + e, t);
  return n.className = Ro.className, n.type = "button", n;
}
function Ir(e, t) {
  e.setAttribute("aria-pressed", String(t));
}
function co(e, t = Yr.className) {
  const n = T("button", e);
  return n.className = t, n.type = "button", n.setAttribute("aria-pressed", "false"), n;
}
function er(e, t, n, r) {
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
    for (const a of i) Ir(a.btn, a.id === t);
  }, o.setActive(t), o;
}
const hu = parseFloat(Z.xl) * 2;
function ma(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const m = o.get();
    e.some((b) => b.id === m) && (t = m);
  }
  const i = T("div", "display:flex;min-width:0;"), s = (m) => {
    i.setActive(m), o?.set(m), n(m);
  }, a = er(e, t, s), c = It(e, t, s);
  c.style.display = "none", i.appendChild(a), i.appendChild(c), i.buttons = a, i.setActive = (m) => {
    t = m, a.setActive(m), c.value = m;
  };
  let l = !1;
  i.setCompact = (m) => {
    m !== l && (l = m, a.style.display = l ? "none" : "flex", c.style.display = l ? "" : "none", r.onLayout?.(l));
  };
  let u = () => {
  };
  if (r.fit) {
    const { pane: m, bar: b } = r.fit;
    let g = 0;
    u = Ks(m, (y) => {
      l || (g = b.offsetWidth || g), g && i.setCompact(g > y - hu);
    });
  }
  return i.cleanup = () => u(), i;
}
function It(e, t, n, r) {
  const o = T("select", Ys);
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
function ga(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = lt("", e);
  return i.title = r.title || e, Ir(i, o), i.onclick = () => {
    o = !o, Ir(i, o), r.remember?.set(o), n(o);
  }, i;
}
const He = "alchemy-viz:", _t = /* @__PURE__ */ new Map();
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
        const o = JSON.parse(r);
        return n(o) ? o : t;
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
function lo(e, t, n = -1 / 0, r = 1 / 0) {
  return nr(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Hn(e, t = "") {
  return nr(e, t, (n) => typeof n == "string");
}
function uo() {
  const e = tr(), t = e ? Array.from({ length: e.length }, (r, o) => e.key(o)).filter((r) => typeof r == "string") : Array.from(_t.keys()), n = [];
  for (const r of t) {
    if (!r.startsWith(He)) continue;
    const o = e ? e.getItem(r) : _t.get(r) ?? null;
    o !== null && n.push([r, o]);
  }
  return n;
}
function $u() {
  const e = {};
  for (const [t, n] of uo()) {
    const r = t.slice(He.length);
    try {
      e[r] = JSON.parse(n);
    } catch {
      e[r] = n;
    }
  }
  return e;
}
function vu() {
  return Object.fromEntries(uo());
}
function bu() {
  const e = tr();
  if (e)
    for (const [t] of uo())
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
}, fo = {
  threeDmol: `https://unpkg.com/3dmol@${_r.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${_r.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${_r.d3}/+esm`
};
function po(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ya(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let Qe = null, mt = null;
function rr() {
  if (mt) return mt;
  const e = po("threeDmol");
  return e ? (mt = e.then((t) => Qe = t || window.$3Dmol), mt) : (mt = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await ya(fo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), mt);
}
let gt = null;
function ho() {
  if (gt) return gt;
  const e = po("rdkit");
  return e ? (gt = e.then((t) => window.RDKit = t), gt) : (gt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ya(fo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), gt);
}
let wu = null;
function $a() {
  return wu ??= ho().catch((e) => (console.warn("[alchemy-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Sr = null;
function _u() {
  if (!Sr) {
    const e = fo.d3;
    Sr = po("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Sr;
}
function mo(e) {
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
function va(e, t) {
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
    t.hint && !r && (r = !0, ku(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function Su(e) {
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
const Cu = 1600;
function ku(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Cu);
}
const Eu = { min: 0.25, max: 12 }, xu = 150;
function as(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? xu) - t;
}
function Au(e, t = Eu) {
  const n = as(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = as(e);
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
const Pu = 2e-3;
function ba(e) {
  return Math.exp(-e.deltaY * Pu);
}
function or(e, t, n = {}) {
  const r = Au(t, n.bounds), o = va(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(ba(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function go(e, t = "Reset view") {
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
function wa(e, t) {
  if (!e) return;
  const n = Ru(e);
  if (!n) return;
  const r = t?.level();
  wt = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : wt?.zoom ?? 1
  };
}
function _a(e, t) {
  if (!wt || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ...wt.rotation]), t && Math.abs(wt.zoom - 1) > 1e-9 && t.zoomBy(wt.zoom), e.render(), !0);
}
const Cr = {
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
], B = [0, 0, 0], Mu = {
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
  return Wr() === "dark";
}
function Sa() {
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
const Iu = "rdkit", ju = !0, Du = !0, Lu = !0, qu = !0, Vu = "rdkit", Bu = "filled", Uu = 0.42, Hu = 1.5, Ku = !0, Gu = "show", Wu = "mono", Ju = 0.51, Yu = 0.74, Xu = 1.6, Zu = 1.7, Qu = 5, ef = 0.3, tf = "#d62828", nf = "#d62828", rf = "#015ab5", of = !1, sf = "", af = "#7c3aed", cf = {
  layout: Iu,
  alignPair: ju,
  atomNumbers: Du,
  createdDestroyed: Lu,
  modified: qu,
  style: Vu,
  circles: Bu,
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
function Pt(e, t, n) {
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
    layout: Pt(t.layout, df, n.layout),
    alignPair: yt(t.alignPair, n.alignPair),
    style: Pt(t.style, uf, n.style),
    createdDestroyed: yt(t.createdDestroyed, n.createdDestroyed),
    modified: yt(t.modified, n.modified),
    destroyedColor: Fn(t.destroyedColor, n.destroyedColor),
    createdColor: Fn(t.createdColor, n.createdColor),
    modifiedColor: Fn(t.modifiedColor, n.modifiedColor),
    boundary: yt(t.boundary, n.boundary),
    circles: Pt(t.circles, ff, n.circles),
    circleRadius: We(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: We(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Pt(t.hydrogens, pf, n.hydrogens),
    elementColors: Pt(t.elementColors, hf, n.elementColors),
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
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (u) => {
      s !== "right" && t.add(u), s !== "left" && n.add(u);
    }, l = /^(\d+)-(\d+)$/.exec(a);
    if (l) {
      const u = Math.min(+l[1], +l[2]), m = Math.min(Math.max(+l[1], +l[2]), u + r - 1);
      for (let b = u; b <= m; b++) c(b);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function kr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function cs(e) {
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
function vf(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function bf(e, t, n) {
  const r = new Set(t.atoms), o = new Set(kr(e, r, !0));
  return {
    deletions: kr(e, r, n),
    changes: kr(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function Ca(e, t, n, r) {
  const o = bf(t, n, e.boundary), i = [];
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
  return $t || console.warn("[alchemy-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), $t;
}
function _f(e, t) {
  return e.style === "rdkit" ? "rdkit" : wf(t) ? e.style : "rdkit";
}
function Sf(e, t, n, r, o, i) {
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
  Object.assign(s, sr(e.elementColors)), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, l = {};
  for (const g of n) {
    const y = Dr(g.color);
    if (o === "rdkit") for (const f of g.bonds) l[f] = y;
    if (o === "recolor" && e.circles === "off") continue;
    const S = o === "recolor" && e.circles === "filled" ? vf(y, 0.7) : y;
    for (const f of g.atoms)
      a[f] = S, c[f] = e.circleRadius;
  }
  const u = Dr(e.customColor);
  for (const g of r)
    g < i && (a[g] = u, c[g] = e.circleRadius);
  const m = Object.keys(a).map(Number);
  m.length && (s.atoms = m, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const b = Object.keys(l).map(Number);
  return b.length && (s.bonds = b, s.highlightBondColors = l), s;
}
function Cf(e, t, n, r) {
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
const kf = "http://www.w3.org/2000/svg";
function ka(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function yo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function Ea(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function ls(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of ka(e, s)) {
      const c = a.style;
      Ea(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of yo(e, s, !1)) a.style.fill = i;
}
function Ef(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(kf, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of ka(e, a)) {
      if (Ea(c)) continue;
      const l = c.cloneNode(!0);
      l.removeAttribute("class"), l.style.fill = "none", l.style.stroke = r, l.style.strokeWidth = `${t.haloWidth}px`, l.style.strokeLinecap = "round", l.style.strokeLinejoin = "round", l.style.strokeOpacity = "1", i.appendChild(l);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function xf(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of yo(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Af(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of yo(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Pf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function Rf(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        ls(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? xf(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && Af(e, n, s.atoms, o, s.color);
      } else
        Ef(e, n, s.bonds, s.color), ls(e, n, s.atoms, s.bonds, s.color, null);
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
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let u = 0; u < o; u++) {
    const m = n[4 + u];
    if (m == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(m.substring(0, 10)) || 0,
      parseFloat(m.substring(10, 20)) || 0,
      parseFloat(m.substring(20, 30)) || 0
    ]), a.push(m.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let u = 0; u < (isFinite(i) ? i : 0); u++) {
    const m = n[4 + o + u];
    if (m == null) break;
    const b = parseInt(m.substring(0, 3), 10), g = parseInt(m.substring(3, 6), 10), y = parseInt(m.substring(6, 9), 10);
    !isFinite(b) || !isFinite(g) || c.push([b - 1, g - 1, isFinite(y) ? y : 1]);
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
  return r.push("M  END"), r.join(ar);
}
const Mf = (e) => `${Nf(e)}${ar}${Lr}`, xa = (e) => e.indexOf(Lr) >= 0 ? e : `${e}${ar}${Lr}`;
function $o(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function vo(e, t, n, r, o, i) {
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
        const u = {}, m = {};
        for (const b of a.atoms)
          u[b] = a.color, m[b] = a.radius;
        l.atoms = [...a.atoms], l.highlightAtomColors = u, l.highlightAtomRadii = m;
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
function Aa(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ds = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Vr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, vt = (e) => e in Vr, us = 400, Er = "position:absolute;inset:0;min-width:0;min-height:0;";
class Tf extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${Er}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Sa()};`
    );
    a.appendChild(c);
    const l = na();
    l.wrap.style.cssText = Er, a.appendChild(l.wrap);
    const u = T(
      "div",
      `${Er}overflow:auto;padding:16px 20px;background:${j.panelBg};color:${j.textPrimary};font-size:${Y.body};`
    );
    a.appendChild(u);
    const m = r ? $o(r) : null, b = [
      ["Name", o || Je, !1],
      ["SMILES", i || Je, !0],
      ["Charge", s == null ? Je : String(s), !1],
      ["Atoms", m ? String(m.atoms) : Je, !1],
      ["Bonds", m ? String(m.bonds) : Je, !1]
    ], g = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${Z.xl} 20px;align-items:baseline;`);
    u.appendChild(g);
    for (const [R, D, z] of b) {
      g.appendChild(
        T(
          "div",
          `font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${j.textMuted2};`,
          R
        )
      );
      const L = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${j.textPrimary}` + (z ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Y.small};` : ""),
        D
      );
      L.title = D, g.appendChild(L);
    }
    const y = Zr(t), S = T("div", Jr, o || "Unnamed molecule");
    y && a.appendChild(S);
    const f = ct(
      "small-molecule.mode",
      "2d",
      ds.map((R) => R.id)
    ), $ = it("small-molecule.spin", !1);
    let p = f.get(), C = $.get(), w = null, d = null;
    const h = () => {
      try {
        w?.spin(C && vt(p) ? "y" : !1);
      } catch {
      }
    }, _ = (R) => {
      p = R, c.style.visibility = p === "2d" ? "visible" : "hidden", l.wrap.style.visibility = vt(p) ? "visible" : "hidden", u.style.visibility = p === "info" ? "visible" : "hidden", S.style.display = p === "info" || !y ? "none" : "block", x.disabled = !vt(p), x.style.opacity = vt(p) ? "1" : "0.5", vt(p) && w && (w.setStyle({}, Vr[p]), w.resize(), w.render()), h();
    }, k = T("div", ta), x = ga(
      "Spin",
      C,
      (R) => {
        C = R, h();
      },
      { title: "Toggle continuous rotation", remember: $ }
    ), A = (R) => {
      R ? k.insertBefore(x, k.firstChild) : M.buttons.insertBefore(x, M.buttons.lastElementChild);
    }, M = ma(ds, p, (R) => _(R), {
      remember: f,
      onLayout: A,
      fit: { pane: a, bar: k }
    });
    return k.appendChild(M), A(!1), a.appendChild(k), _(p), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), l.container.appendChild(pe("No molecule provided")), { cleanup: () => M.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), ho().then((R) => {
      const D = sr("cpk"), z = vo(R, r, us, Ae.layout, void 0, D);
      z ? Aa(c, z, us) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren(pe(`RDKit failed to load: ${he(R)}`, !0));
    }), l.container.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
      l.container.replaceChildren(), w = Qe.createViewer(l.container, { backgroundColor: zt.viewer() }), w.addModel(xa(r), "sdf"), w.setStyle({}, Vr[vt(p) ? p : "stick"]), w.zoomTo(), w.render(), d = or(l.container, w), _a(w, d), h();
    }).catch((R) => {
      l.container.replaceChildren(pe(`3D render failed: ${he(R)}`, !0));
    }), {
      onResize() {
        w && (w.resize(), w.render());
      },
      cleanup() {
        M.cleanup(), wa(w, d), d?.cleanup(), d = null, mo(w), w = null;
      }
    });
  }
}
Ne("gufe-small-molecule", Tf);
const Pa = ["HOH", "WAT", "SOL", "TIP3"], fs = { hetflag: !1 }, Of = { hetflag: !0 }, Ff = { resn: Pa }, Ie = {
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
function Ra(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const l = c.slice(0, 6);
    if (l === "ENDMDL") break;
    if (l !== "ATOM  " && l !== "HETATM") continue;
    r++, l === "HETATM" && o++;
    const u = c.slice(17, 20).trim(), m = c.slice(21, 22).trim() || "_", b = c.slice(22, 26).trim(), g = c.slice(26, 27).trim();
    Pa.indexOf(u) !== -1 && i++, t.add(m), n.add(`${m}|${b}${g}|${u}`);
    const y = parseInt(b, 10);
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
function Na(e) {
  return [
    `${kt(e.chains)} chains`,
    `${kt(e.residues)} residues`,
    `${kt(e.atoms)} atoms`,
    `${kt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${kt(e.waters)} water)` : "")
  ];
}
function zf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Br(e, t, n, r, o, i = () => !0) {
  const s = r || (() => {
  }), a = zf(t.color, n), c = (l) => o ? { ...l, ...o } : l;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(c({}), {}), e.setStyle(
    c(fs),
    t.rep === "stick" ? { stick: { radius: Ie.stick.radius, ...a } } : t.rep === "sphere" ? { sphere: { scale: Ie.sphere.scale, ...a } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...a } }
    )
  ), e.setStyle(
    c(Of),
    t.hetero ? {
      stick: { radius: Ie.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    c(Ff),
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
            c(fs)
          )
        ).then(() => {
          i() && (s(null), e.render());
        }).catch((l) => s(`Surface failed: ${he(l)}`, "error"));
      } catch (l) {
        s(`Surface failed: ${he(l)}`, "error");
      }
  }, 30);
}
function If(e, t) {
  e.setStyle(t, {
    stick: { radius: Ie.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Ie.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const ps = { min: 0.2, max: 0.8 }, jf = 5;
function Ma(e, t, n, r = {}) {
  const o = r.min ?? ps.min, i = r.max ?? ps.max, s = T(
    "div",
    `flex:0 0 ${jf}px;align-self:stretch;touch-action:none;background:${j.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (y) => {
    a = y, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, l = () => {
    const y = e.getBoundingClientRect();
    return y.height > y.width;
  };
  let u = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const m = () => {
    t.style.flex = `1 1 ${(u * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - u) * 100).toFixed(2)}%`;
  };
  m(), c(l()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const S = l();
    S !== a && (c(S), r.onResize?.(u));
  }).observe(e);
  let b = !1;
  s.addEventListener("pointerdown", (y) => {
    b = !0, s.setPointerCapture(y.pointerId), y.preventDefault();
  }), s.addEventListener("pointermove", (y) => {
    if (!b) return;
    const S = e.getBoundingClientRect(), f = a ? S.height : S.width;
    if (f <= 0) return;
    const $ = a ? y.clientY - S.top : y.clientX - S.left;
    u = Math.min(i, Math.max(o, $ / f)), m();
  });
  const g = (y) => {
    b && (b = !1, s.releasePointerCapture(y.pointerId), r.remember?.set(u), r.onResize?.(u));
  };
  return s.addEventListener("pointerup", g), s.addEventListener("pointercancel", g), s;
}
function bo(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : qn.min), e.style.setProperty(Xe.max, t ? "none" : qn.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? dc : "";
}
const Df = !1, wo = ".menuOpen";
function Lf() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const qf = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Lf
}, Vf = qf.openFreeEnergy;
function _o(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Df, o = !1;
  const i = T("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = lt(`display:inline-flex;align-items:center;gap:${Z.md};padding:${Z.sm} ${Z.lg};`);
  s.appendChild(Vf()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), n.extras?.(i)), i.style.display = r ? "flex" : "none", s.setAttribute("aria-expanded", String(r));
  }, c = (u) => {
    u !== r && (r = u, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r);
  const l = "toggleEl" in e ? e : null;
  return l && (l.toggleEl.style.marginRight = "2px"), (l ? l.toggleEl : e).appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: c
  };
}
const Ta = "https://framejs.app", Oa = 1e4;
function Bf(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Uf = "/alchemy-dev-bundle.js";
function Hf() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Oa ? e : null;
}
async function Kf() {
  const e = Hf();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Uf);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Oa ? null : {
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
    `  const menuOpen = ${JSON.stringify(wo)};`,
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
    `globalThis[${JSON.stringify(ra)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Jf(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Wf(n),
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
function Yf(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(vu()))
    o.endsWith(wo) || (r[o] = i);
  return { settings: r, views: t };
}
const Xf = (e) => `${Ta}/j/${e}`, Zf = (e) => `${Ta}/j/${e}.json`;
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
function So(e) {
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${Z.md};padding-top:${Z.lg};border-top:1px solid ${j.splitBorder};`
  ), n = lt(`width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${Z.md};`);
  n.appendChild(ep()), n.appendChild(T("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? j.errorFg : j.textMuted2;
  }, i = (s, a) => {
    const c = T("a", `color:${j.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${Z.sm};`, a)), r.style.color = j.textMuted2;
  };
  n.onclick = () => {
    const s = Bf(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = Yf(s), l = window.open("", "_blank"), u = Gf(), b = String(a.type || "alchemy-viz"), g = `${b}. Shared from alchemy-viz`, y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), Kf().then((S) => {
      if (!S) {
        l?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Qf(u, Jf(S.js, a, c), b, g).then(() => {
        y();
        const f = Xf(u);
        l && (l.location.href = f), i(f, S.note);
      });
    }).catch((S) => {
      y(), l?.close(), o(`Upload failed: ${S instanceof Error ? S.message : String(S)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
const hs = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ms = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], gs = /* @__PURE__ */ new Map();
function Ur(e) {
  return !Array.isArray(e) || e.length < 4 ? null : e.every((t) => typeof t == "number" && Number.isFinite(t)) ? e.slice() : null;
}
function tp(e) {
  const t = e.tagName.toLowerCase().replace(/^gufe-/, ""), n = oa(t);
  return !n || typeof n != "object" ? null : Ur(n.camera);
}
function Fa(e) {
  const t = ct(
    "protein.representation",
    e.rep ?? "cartoon",
    hs.map((k) => k.id)
  ), n = ct(
    "protein.color",
    "chain",
    ms.map((k) => k.id)
  ), r = it("protein.waters", e.waters), o = it("protein.hetero", !0), i = it("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = tp(e.element), c = null, l = null, u = !0;
  const m = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(m);
  const b = T("div", hc);
  m.appendChild(b);
  const g = ({ label: k, controls: x }) => {
    const A = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    A.appendChild(
      T(
        "span",
        `font-size:${Y.tiny};font-weight:${fe.bold};letter-spacing:.08em;text-transform:uppercase;color:${j.textMuted};`,
        k
      )
    );
    for (const M of x) A.appendChild(M);
    return A;
  }, y = T("div", `display:flex;flex-direction:column;gap:2px;font-size:${Y.small};color:${j.textMuted};`), S = g({ label: "Contents", controls: [y] });
  S.style.display = "none";
  const $ = _o(b, () => {
    const k = T("div", `${Qs}padding-top:${mc};`), x = er(
      hs,
      s.rep,
      (z) => {
        s.rep = z, e.restyle();
      },
      t
    );
    k.appendChild(g({ label: "Style", controls: [x] }));
    const A = It(
      ms,
      s.color,
      (z) => {
        s.color = z, e.restyle();
      },
      n
    );
    A.style.cssText += "width:100%;box-sizing:border-box;", k.appendChild(g({ label: "Color", controls: [A] }));
    const M = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), R = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => c?.spin(s.spin ? "y" : !1)]
    ];
    for (const [z, L, W, ne, X] of R)
      M.appendChild(
        ga(
          L,
          s[z],
          (re) => {
            s[z] = re, X();
          },
          { title: W, remember: ne }
        )
      );
    k.appendChild(g({ label: "Show", controls: [M] }));
    const D = go(() => e.reset ? e.reset() : l?.reset());
    return D.style.cssText += "width:100%;box-sizing:border-box;", k.appendChild(g({ label: "Camera", controls: [...e.camera?.() ?? [], D] })), k.appendChild(S), k;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: it(`protein${wo}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      c?.resize(), c?.render();
    },
    extras: So
  }), p = Zr(e.element) ? e.title || e.fallbackTitle : "";
  p && b.appendChild(
    T("div", `${pc}pointer-events:none;font-size:${Y.heading};font-weight:${fe.bold};`, p)
  ), m.appendChild($.panel);
  const C = na();
  m.appendChild(C.wrap);
  const w = Gr(m, (k) => {
    m.style.flexDirection = k ? "column" : "row", bo($.panel, k), c?.resize(), c?.render();
  }), d = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Y.body};z-index:20;display:none;pointer-events:none;`
  );
  C.wrap.appendChild(d);
  const h = (k, x) => {
    if (k == null) {
      d.style.display = "none";
      return;
    }
    d.textContent = k, d.style.display = "block";
    const A = x === "error";
    d.style.background = A ? j.warnBg : j.toolbarBg, d.style.color = A ? j.warnFg : j.textMuted, d.style.border = `1px solid ${A ? j.warnBorder : j.toolbarBorder}`;
  }, _ = () => {
    if (!e.cameraKey || !c) return;
    const k = Ur(c.getView?.());
    k && gs.set(e.cameraKey, k);
  };
  return {
    opts: s,
    pane: C,
    menu: $,
    showStatus: h,
    setStats: (k) => {
      y.replaceChildren(...k.map((x) => T("div", "overflow-wrap:anywhere;", x))), S.style.display = k.length ? "" : "none";
    },
    restoreCamera: () => {
      const k = a;
      a = null;
      const x = k ?? (e.cameraKey ? gs.get(e.cameraKey) : void 0);
      return !x || !c ? !1 : (c.setView(x.slice()), c.render(), !0);
    },
    viewer: () => c,
    stillWanted: () => u,
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
        const k = Ur(c?.getView?.());
        return k ? { camera: k } : null;
      },
      cleanup() {
        u = !1, w(), _(), l?.cleanup(), l = null, mo(c), c = null;
      }
    }
  };
}
class np extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Br(a, s.opts, o, s.showStatus, void 0, s.stillWanted);
    }
    const s = Fa({
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
      o = Ra(r), s.setStats(Na(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${he(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), rr().then(() => {
      const a = Qe.createViewer(s.pane.container, { backgroundColor: zt.viewer() });
      s.setViewer(a), a.addModel(r, "pdb"), Br(a, s.opts, o, s.showStatus, void 0, s.stillWanted), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(or(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${he(a)}`, "error");
    }), s.handle;
  }
}
Ne("gufe-protein", np);
const za = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const n = document.createElementNS(za, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function ys(e, t) {
  const n = document.createElementNS(za, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Ia = 3, rp = 24;
function ja(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const op = { min: 0.15, max: 5 }, ip = 1e-9;
function Da(e, t, n) {
  const r = n.margin ?? rp, o = n.zoom ?? op;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, l = () => {
    const z = e.getBoundingClientRect();
    return {
      width: z.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: z.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, u = (z, L, W) => Math.min(1, L / (z.maxX - z.minX + r * 2), W / (z.maxY - z.minY + r * 2)), m = () => {
    const z = n.bounds();
    if (!z) return o.min;
    const { width: L, height: W } = l();
    return Math.min(o.min, u(z, L, W));
  }, b = (z) => Math.min(o.max, Math.max(m(), i * z)), g = () => {
    i = 1, s = 0, a = 0;
    const z = n.bounds();
    if (!z) {
      c();
      return;
    }
    const { width: L, height: W } = l();
    i = u(z, L, W), s = L / 2 - (z.minX + z.maxX) / 2 * i, a = W / 2 - (z.minY + z.maxY) / 2 * i, c();
  }, S = va(e, {
    onZoom: (z) => {
      const L = e.getBoundingClientRect(), W = z.clientX - L.left, ne = z.clientY - L.top, X = b(ba(z)), re = X / i;
      return s = W - (W - s) * re, a = ne - (ne - a) * re, i = X, c(), Math.abs(re - 1) > ip;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), f = /* @__PURE__ */ new Map();
  let $ = null, p = null, C = !1, w = null;
  const d = (z) => ({
    x: z.clientX - s,
    y: z.clientY - a,
    from: { x: z.clientX, y: z.clientY }
  }), h = (z) => {
    z.pointerType === "touch" && f.size > 1 || (p = d(z), C = !1);
  }, _ = (z) => {
    $ || (w && z.pointerType === "touch" && (p = { x: w.x - s, y: w.y - a, from: w }, w = null), p && (Math.hypot(z.clientX - p.from.x, z.clientY - p.from.y) > Ia && (C = !0), s = z.clientX - p.x, a = z.clientY - p.y, c()));
  }, k = () => {
    p = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", _), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("pointerleave", k);
  const x = () => {
    const [z, L] = [...f.values()];
    return { cx: (z.x + L.x) / 2, cy: (z.y + L.y) / 2, span: Math.max(1, Math.hypot(z.x - L.x, z.y - L.y)) };
  }, A = (z) => {
    if (z.pointerType === "touch") {
      if (f.set(z.pointerId, { x: z.clientX, y: z.clientY }), f.size !== 2) {
        $ = null;
        return;
      }
      $ = x(), p = null, C = !0;
    }
  }, M = (z) => {
    if (z.pointerType !== "touch" || !f.has(z.pointerId) || (f.set(z.pointerId, { x: z.clientX, y: z.clientY }), !$ || f.size !== 2)) return;
    z.preventDefault(), z.stopPropagation();
    const L = x(), W = e.getBoundingClientRect(), ne = b(L.span / $.span), X = ne / i;
    s = L.cx - W.left - ($.cx - W.left - s) * X, a = L.cy - W.top - ($.cy - W.top - a) * X, i = ne, $ = L, c();
  }, R = (z) => {
    if (z.pointerType !== "touch") return;
    if (f.delete(z.pointerId), f.size === 2) {
      $ = x();
      return;
    }
    $ = null;
    const [L] = [...f.values()];
    w = f.size === 1 && L ? { ...L } : null;
  };
  e.addEventListener("pointerdown", A, !0), e.addEventListener("pointermove", M, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const D = Su(e);
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
      S.cleanup(), D.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", _), e.removeEventListener("pointerup", k), e.removeEventListener("pointercancel", k), e.removeEventListener("pointerleave", k), e.removeEventListener("pointerdown", A, !0), e.removeEventListener("pointermove", M, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const sp = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function La(e) {
  const t = { ...e };
  for (const n of sp) delete t[n];
  return t;
}
async function qa(e) {
  let t;
  try {
    if (t = await _u(), typeof t?.forceSimulation != "function") return !1;
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
  return Hr(e, t, /* @__PURE__ */ new Set()), t;
}
function Hr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Hr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Hr(o, t, n);
}
function Ke(e, t) {
  return t ? e.get(t) : void 0;
}
function Pe(e, t, n) {
  const r = Ke(e, t);
  return r?.type === n ? r : void 0;
}
function Co(e, t) {
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
function Va(e) {
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
    const [a, c] = e.ends(s), l = a === void 0 ? void 0 : r.get(a), u = c === void 0 ? void 0 : r.get(c);
    if (!l || !u) {
      i++;
      continue;
    }
    o.push({ ...s, index: o.length, from: l, to: u });
  }
  return { nodes: t, edges: o, unresolved: n, dangling: i };
}
const ap = 8, cp = 64, lp = () => new Promise((e) => setTimeout(e, 0));
function Kr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function dp(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const i = o.get_substruct_matches(t), s = JSON.parse(i || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const l = c.atoms;
      if (Array.isArray(l))
        for (const u of l) typeof u == "number" && a.add(u);
    }
    return [...a].sort((c, l) => c - l);
  } catch (i) {
    return console.warn("[alchemy-viz] SMARTS match threw -", he(i)), null;
  } finally {
    Kr(o);
  }
}
function Ba(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const l = r.get(a);
    if (l) return { status: "ok", matched: l, unreadable: 0 };
    const u = await e();
    if (c !== o) return { status: "superseded" };
    if (!u) return { status: "unsupported" };
    if (!u.get_qmol) return { status: "unsupported" };
    let m = null;
    try {
      m = u.get_qmol(a);
    } catch {
      m = null;
    }
    if (!m) return { status: "invalid" };
    if (!m.get_substruct_matches)
      return Kr(m), { status: "unsupported" };
    const b = /* @__PURE__ */ new Map();
    let g = 0;
    try {
      let y = performance.now(), S = 0;
      for (let f = 0; f < t.length; f++) {
        const $ = t[f] ? dp(u, m, t[f], n) : null;
        if ($ ? $.length && b.set(f, $) : g++, !(++S < cp && performance.now() - y < ap)) {
          if (await lp(), c !== o) return { status: "superseded" };
          S = 0, y = performance.now();
        }
      }
    } finally {
      Kr(m);
    }
    return r.set(a, b), { status: "ok", matched: b, unreadable: g };
  }, cancel: () => void ++o };
}
const up = 250;
function fp(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", Xs);
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
    }, up);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const Ua = "Cmd/Ctrl-click to select several.";
function pp(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : et(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function hp(e, t) {
  navigator.clipboard?.writeText(e).catch(() => $s(e, t)), navigator.clipboard || $s(e, t);
}
function $s(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${Y.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function mp(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function gp(e) {
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
  const s = T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`), a = (u) => {
    s.textContent = u;
  }, c = T("div", "display:flex;gap:4px;"), l = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [u, m, b] of l) {
    const g = lt("flex:1;", m.button);
    g.title = b, g.onclick = (y) => {
      const S = i.value, f = pp(e.nodes, e.edges, e.selected, u, S);
      if (!f) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : u === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Ua}` : "Nothing to copy."
        );
        return;
      }
      const $ = f.split(`
`).length;
      y.shiftKey ? (mp(f, `selected-${m.plural}.txt`), a(`Saved ${$} ${m.plural} to a file.`)) : (hp(f, r), a(
        u === "edges" ? `Copied ${$} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(g);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(T("div", `font-size:${Y.tiny};color:${j.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
function Ha(e) {
  const t = Hn(`${e.namespace}.query`), n = T("div", Qs), r = T("input", Xs);
  n.appendChild(r);
  const o = fp({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Hn(`${e.namespace}.smarts`),
    run: (u) => e.match(u),
    describe: (u) => e.smarts.describe(u)
  });
  n.appendChild(o.element);
  for (const u of e.filters?.(() => l()) ?? []) n.appendChild(u);
  const i = T("div", `font-size:${Y.small};color:${j.textMuted2};`);
  n.appendChild(i);
  const s = T("div", uc);
  n.appendChild(s), n.appendChild(T("div", `font-size:${Y.tiny};line-height:1.5;color:${j.textMuted2};`, Ua));
  const a = gp({
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
    const u = e.nodes.map((m, b) => ({ node: m, index: b })).filter(({ node: m, index: b }) => e.shows(m, b));
    i.textContent = `${u.length} of ${e.nodes.length} ${e.noun}`;
    for (const { node: m, index: b } of u) {
      const g = m["gufe-key"], y = co(Yr.row);
      y.setAttribute("aria-pressed", String(e.selected.has(g)));
      const S = e.row(m, b);
      S.before && y.appendChild(S.before);
      const f = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", S.name);
      f.title = S.title, y.appendChild(f), y.onclick = ($) => {
        $.shiftKey || $.metaKey || $.ctrlKey ? e.selected.has(g) ? e.selected.delete(g) : e.selected.add(g) : (e.selected.clear(), e.selected.add(g), e.focus(b)), l(), e.refresh();
      }, s.appendChild(y);
    }
    u.length || s.appendChild(T("div", `font-size:${Y.small};padding:${Z.lg};color:${j.textMuted2};`, "Nothing matches."));
  }
  return r.type = "search", r.placeholder = e.search.placeholder, r.value = t.get(), e.query.text = r.value, r.setAttribute("aria-label", e.search.label), r.oninput = () => {
    e.query.text = r.value, t.set(r.value), l(), e.refresh();
  }, l(), e.mounted?.(l), o.apply(), n;
}
function Ka(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function yp(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Ft = { node: 0.12, edge: 0.06 };
function Ga(e, t, n, r) {
  e.forEach((o, i) => {
    let s = null, a = !1;
    o.addEventListener("pointerdown", (l) => {
      l.stopPropagation();
      const { scale: u } = n.transform();
      s = { x: l.clientX - t[i].x * u, y: l.clientY - t[i].y * u }, a = !1, o.setPointerCapture(l.pointerId);
    }), o.addEventListener("pointermove", (l) => {
      if (!s) return;
      if (n.gesturing()) {
        s = null, a = !0;
        return;
      }
      const { scale: u } = n.transform(), m = (l.clientX - s.x) / u, b = (l.clientY - s.y) / u;
      Math.hypot(m - t[i].x, b - t[i].y) * u > Ia && (a = !0), t[i].x = t[i].fx = m, t[i].y = t[i].fy = b, r.moved(i);
    });
    const c = () => {
      s = null;
    };
    o.addEventListener("pointerup", c), o.addEventListener("pointercancel", c), o.addEventListener("click", (l) => {
      l.stopPropagation(), a || r.clicked(i);
    });
  });
}
class Wa {
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
function Ja(e, t, n, r) {
  const { scale: o, tx: i, ty: s } = t, a = [];
  return e.forEach((c, l) => {
    if (!r(l)) return;
    const u = c.x * o + i, m = c.y * o + s;
    u < -zn || m < -zn || u > n.width + zn || m > n.height + zn || a.push(l);
  }), a;
}
function Ya(e) {
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
function vs(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const $p = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), vp = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), bp = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, wp = (e) => {
  const t = $p(e);
  return vp.has(t) || bp(t);
};
function Xa(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && wp(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const _p = 1e-6;
function In(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function bs(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Sp(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function ws(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], l = t[a * 3 + c];
      if (Math.abs(l) < 1e-14) continue;
      const u = t[a * 3 + a], m = t[c * 3 + c], b = (m - u) / (2 * l);
      let g;
      Math.abs(b) > 1e10 ? g = 1 / (2 * b) : g = (b >= 0 ? 1 : -1) / (Math.abs(b) + Math.sqrt(b * b + 1));
      const y = 1 / Math.sqrt(1 + g * g), S = g * y;
      t[a * 3 + a] = u - g * l, t[c * 3 + c] = m + g * l, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== c) {
          const $ = t[f * 3 + a], p = t[f * 3 + c];
          t[f * 3 + a] = y * $ - S * p, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + c] = S * $ + y * p, t[c * 3 + f] = t[f * 3 + c];
        }
      for (let f = 0; f < 3; f++) {
        const $ = n[f * 3 + a], p = n[f * 3 + c];
        n[f * 3 + a] = y * $ - S * p, n[f * 3 + c] = S * $ + y * p;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Cp(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let w = 0; w < n; w++)
    r[0] += e[w][0], r[1] += e[w][1], r[2] += e[w][2], o[0] += t[w][0], o[1] += t[w][1], o[2] += t[w][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let w = 0; w < n; w++) {
    const d = e[w][0] - r[0], h = e[w][1] - r[1], _ = e[w][2] - r[2], k = t[w][0] - o[0], x = t[w][1] - o[1], A = t[w][2] - o[2];
    i[0] += d * k, i[1] += d * x, i[2] += d * A, i[3] += h * k, i[4] += h * x, i[5] += h * A, i[6] += _ * k, i[7] += _ * x, i[8] += _ * A;
  }
  const s = bs(i), a = In(s, i), c = In(i, s);
  let l = ws(a), u = ws(c);
  function m(w) {
    const d = [0, 1, 2].sort((_, k) => w.values[k] - w.values[_]), h = new Array(9);
    for (let _ = 0; _ < 3; _++) {
      const k = d[_];
      h[_] = w.vectors[k], h[3 + _] = w.vectors[3 + k], h[6 + _] = w.vectors[6 + k];
    }
    return {
      values: [w.values[d[0]], w.values[d[1]], w.values[d[2]]],
      vectors: h
    };
  }
  l = m(l), u = m(u);
  const b = l.vectors, g = u.vectors;
  for (let w = 0; w < 3; w++) {
    const d = b[w], h = b[3 + w], _ = b[6 + w], k = i[0] * d + i[1] * h + i[2] * _, x = i[3] * d + i[4] * h + i[5] * _, A = i[6] * d + i[7] * h + i[8] * _, M = g[w], R = g[3 + w], D = g[6 + w];
    k * M + x * R + A * D < 0 && (g[w] = -M, g[3 + w] = -R, g[6 + w] = -D);
  }
  const y = bs(b);
  let S = In(g, y);
  Sp(S) < 0 && (g[2] = -g[2], g[5] = -g[5], g[8] = -g[8], S = In(g, y));
  const f = S[0] * o[0] + S[1] * o[1] + S[2] * o[2], $ = S[3] * o[0] + S[4] * o[1] + S[5] * o[2], p = S[6] * o[0] + S[7] * o[1] + S[8] * o[2], C = l.values[1] > _p * l.values[0];
  return { R: S, t: [r[0] - f, r[1] - $, r[2] - p], determined: C };
}
function kp(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
function Ep(e, t) {
  const n = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  e.appendChild(n);
  let r = [], o = 0, i = !0, s = !1;
  const a = () => {
    o && cancelAnimationFrame(o), o = 0, s && wa(r[0]?.viewer ?? null, r[0]?.interaction ?? null), s = !1;
    for (const c of r)
      c.interaction?.cleanup(), mo(c.viewer);
    r = [], n.replaceChildren();
  };
  return {
    element: n,
    named: t,
    clear: a,
    box(c) {
      const l = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), u = T("div", "flex:1;position:relative;min-height:0;");
      u.dataset.gufeViewer = "", l.appendChild(u), t && l.appendChild(T("div", Jr, c)), n.appendChild(l);
      const m = { container: u, viewer: null, interaction: null };
      return r.push(m), m;
    },
    open(c, l) {
      const u = Qe.createViewer(c.container, { backgroundColor: zt.viewer() });
      for (const m of l) u.addModel(Mf(m), "sdf");
      return c.viewer = u, u;
    },
    settle(c) {
      c.viewer && (c.interaction = or(c.container, c.viewer));
    },
    pose(c) {
      _a(c.viewer, c.interaction), s = !0;
    },
    sync() {
      if (r.length < 2) return;
      const c = r.map(() => "");
      let l = !1;
      const u = () => {
        if (i) {
          if (!l)
            for (let m = 0; m < r.length; m++) {
              const b = r[m].viewer;
              if (!b) continue;
              const g = JSON.stringify(b.getView());
              if (g !== c[m]) {
                l = !0;
                for (let y = 0; y < r.length; y++)
                  y !== m && r[y].viewer && (r[y].viewer.setView(b.getView()), r[y].viewer.render()), c[y] = g;
                l = !1;
                break;
              }
            }
          o = requestAnimationFrame(u);
        }
      };
      o = requestAnimationFrame(u);
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
const _s = `
`, xr = 4;
function Ss(e, t, n) {
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
function xp(e, t, n) {
  const r = [], o = [];
  for (const [u, m] of n) {
    const b = e[m], g = t[u];
    !b || !g || (r.push(b), o.push(g));
  }
  if (r.length < 2) return null;
  const i = (u) => {
    let m = 0, b = 0;
    for (const g of u)
      m += g[0], b += g[1];
    return [m / u.length, b / u.length];
  }, s = i(r), a = i(o);
  let c = null, l = -1 / 0;
  for (const u of [!1, !0]) {
    let m = 0, b = 0;
    for (let p = 0; p < r.length; p++) {
      const C = (u ? -1 : 1) * (r[p][0] - s[0]), w = r[p][1] - s[1], d = o[p][0] - a[0], h = o[p][1] - a[1];
      m += C * h - w * d, b += C * d + w * h;
    }
    const g = Math.hypot(m, b);
    if (g <= l) continue;
    l = g;
    const y = Math.atan2(m, b), S = Math.cos(y), f = Math.sin(y), $ = (u ? -1 : 1) * s[0];
    c = {
      cos: S,
      sin: f,
      mirror: u,
      tx: a[0] - (S * $ - f * s[1]),
      ty: a[1] - (f * $ + S * s[1])
    };
  }
  return c;
}
function Ap(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Pp(e, t, n) {
  const r = $o(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(_s);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[xr + i], a = t[i];
    if (s == null || !a) return e;
    o[xr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = xr + r.atoms + a, l = o[c];
      if (l == null) break;
      const u = parseInt(l.substring(9, 12), 10);
      u !== 1 && u !== 6 || (o[c] = l.substring(0, 9) + String(u === 1 ? 6 : 1).padStart(3) + l.substring(12));
    }
  return o.join(_s);
}
function Rp(e, t, n) {
  try {
    const r = (s) => qr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = xp(o, r(e), n);
    return i ? Pp(
      t,
      o.map((s) => Ap(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[alchemy-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Np(e, t, n, r, o) {
  const i = Ss(e, t, r), s = Ss(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: Rp(i, s, o) };
}
const Mp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Tp = {
  core: "0x888888",
  pairLine: "0xd9a300"
}, Za = () => Wr() === "dark" ? Mp : Tp, Ar = 420, Be = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Pr = { gap: 2.5, minLiftFraction: 0.6 }, Op = 24, Cs = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8
}, Fp = {
  mapped: null,
  element: Ae.modifiedColor,
  uniqueA: Ae.destroyedColor,
  uniqueB: Ae.createdColor
}, zp = 132;
function ks(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Ip(e, t) {
  const n = ks(e), r = ks(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Pr.gap, a = Pr.minLiftFraction * i + Pr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function Qa(e) {
  const t = $f(Ae.customSpec);
  return [
    { mol: e.molA, uniques: e.uniquesA, side: "left", custom: t.left },
    { mol: e.molB, uniques: e.uniquesB, side: "right", custom: t.right }
  ];
}
function jp(e, t) {
  for (const n of [t.molA, t.molB]) {
    const r = e.box(n.name), o = e.open(r, [n]);
    o.setStyle(
      {},
      { stick: { radius: Be.stick, colorscheme: "Jmol" }, sphere: { scale: Be.sphere, colorscheme: "Jmol" } }
    ), o.zoomTo(), o.render(), e.settle(r), e.pose(r);
  }
  e.sync();
}
function Dp(e, t) {
  const n = Ae, r = Za();
  for (const o of Qa(t)) {
    const i = e.box(o.mol.name), s = e.open(i, [o.mol]);
    s.setStyle(
      {},
      { stick: { radius: Be.stick, color: r.core }, sphere: { scale: Be.sphere, color: r.core } }
    );
    const a = (c, l) => {
      s.addStyle(
        { serial: c },
        {
          stick: { radius: Be.markStick, color: cs(l) },
          sphere: { scale: Be.markSphere, color: cs(l) }
        }
      );
    };
    for (const c of Ca(n, o.mol, o.uniques, o.side))
      for (const l of c.atoms) a(l, c.color);
    for (const c of o.custom)
      c < o.mol.symbols.length && a(c, n.customColor);
    s.zoomTo(), s.render(), e.settle(i), e.pose(i);
  }
  e.sync();
}
function Lp(e, t) {
  const { molA: n, molB: r, nameA: o, nameB: i, pairs: s } = t, a = e.box(`${o} (left), both overlaid (middle), ${i} (right)`), c = Gp(n.coords, r.coords), l = ($, p) => ({
    ...$,
    coords: $.coords.map(([C, w, d]) => [C + p, w, d])
  }), u = l(n, -c), m = l(r, c), b = e.open(a, [u, m, n, r]);
  b.setStyle({}, { stick: {} });
  const g = Array.from(s);
  g.forEach(([$, p], C) => {
    const w = u.coords[$], d = m.coords[p];
    if (!w || !d) return;
    const h = Wp(C, g.length);
    for (const [_, k, x] of [w, d])
      b.addSphere({
        center: { x: _, y: k, z: x },
        radius: Cs.sphereRadius,
        color: h,
        alpha: Cs.sphereAlpha
      });
  }), b.zoomTo();
  const { clientWidth: y, clientHeight: S } = a.container, f = y - 2 * Op;
  f > 0 && f < S && b.zoom(f / S), b.render(), e.settle(a);
}
function qp(e, t) {
  const { molA: n, molB: r, nameA: o, nameB: i, pairs: s } = t, a = e.box(`${o} to ${i}  (${s.size} mapped pairs)`), { axis: c, lift: l } = Ip(n.coords, r.coords), u = {
    ...r,
    coords: r.coords.map((g) => {
      const y = [g[0], g[1], g[2]];
      return y[c] += l, y;
    })
  }, m = e.open(a, [n, u]), b = {
    stick: { radius: Be.stick, colorscheme: "Jmol" },
    sphere: { scale: Be.pairSphere, colorscheme: "Jmol" }
  };
  m.setStyle({ model: 0 }, b), m.setStyle({ model: 1 }, b);
  for (const [g, y] of s) {
    const S = n.coords[g], f = u.coords[y];
    !S || !f || m.addCylinder({
      start: { x: S[0], y: S[1], z: S[2] },
      end: { x: f[0], y: f[1], z: f[2] },
      radius: Be.lineRadius,
      dashed: !0,
      fromCap: "round",
      toCap: "round",
      color: Za().pairLine
    });
  }
  m.zoomTo(), c === 2 ? m.rotate(90, "x") : c === 0 && m.rotate(-90, "z"), m.render(), e.settle(a);
}
function Vp(e, t) {
  const n = Ae, r = Qa(t).map((o) => {
    const i = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), s = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Sa()};`
    );
    return s.appendChild(pe("Loading 2D depiction...")), i.appendChild(s), e.named && i.appendChild(T("div", Jr, o.mol.name)), e.element.appendChild(i), { box: s, side: o };
  });
  ho().then((o) => {
    const i = _f(n, o), s = Np(o, t.from.sdf, t.to.sdf, n.layout, n.alignPair ? t.pairs : null);
    for (const { box: a, side: c } of r) {
      const l = Ca(n, c.mol, c.uniques, c.side), u = Sf(n, Ar, l, c.custom, i, c.mol.symbols.length), m = Cf(o, c.side === "left" ? s.left : s.right, Ar, u);
      if (a.replaceChildren(), !m) {
        a.appendChild(pe("Failed to parse molecule", !0));
        continue;
      }
      Aa(a, m, Ar);
      const b = a.querySelector("svg");
      b && Rf(b, c.mol, n, l, c.custom, i);
    }
  }).catch((o) => {
    for (const { box: i } of r)
      i.replaceChildren(pe(`RDKit failed to load: ${he(o)}`, !0));
  });
}
function Bp(e, t, n) {
  const { nameA: r, nameB: o, pairs: i, molA: s, molB: a, uniquesA: c, uniquesB: l } = t, u = T(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
  );
  e.element.appendChild(u), u.appendChild(
    T(
      "div",
      `font-size:${Y.title};font-weight:${fe.bold};color:${Ee.title};`,
      n.name || `${r} to ${o}`
    )
  );
  const m = Hp(i, s.symbols, a.symbols), b = T("div", Ve.row), g = [];
  let y = null;
  const S = (A, M, R, D) => {
    const z = co(`${Ve.plain}${Ve.button}`, Ve.className);
    z.appendChild(Ze(A, String(M), D)), z.onclick = () => {
      y = y === R ? null : R, _();
    }, g.push({ node: z, kinds: R }), b.appendChild(z);
  }, f = (A, M) => {
    const R = T("span", Ve.plain);
    R.appendChild(Ze(A, M)), b.appendChild(R);
  };
  S("mapped atoms", i.size, ["mapped", "element"]), S("element changes", c.elements.length, ["element"], Ae.modifiedColor), S(`unique to ${r}`, c.atoms.length, ["uniqueA"], Ae.destroyedColor), S(`unique to ${o}`, l.atoms.length, ["uniqueB"], Ae.createdColor), f(`atoms in ${r}`, String(s.symbols.length)), f(`atoms in ${o}`, String(a.symbols.length)), f("score", n.score == null ? Je : n.score.toFixed(3)), u.appendChild(b), u.appendChild(T("div", Fr, "Correspondence"));
  const $ = T("div", `font-size:${Y.small};line-height:1.6;color:${Ee.faint};`);
  u.appendChild($);
  const p = T(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${zp}px,1fr));gap:${Z.xs} ${Z.md};font-family:${Y.mono};font-size:${Y.small};color:${Ee.primary};`
  );
  u.appendChild(p);
  const C = String(Math.max(s.symbols.length, a.symbols.length, 1) - 1).length, w = (A, M) => `${(A == null ? Je : String(A)).padStart(C)} ${M.padEnd(2)}`, d = (A) => {
    if (A.kind === "uniqueA") return `${r} atom ${A.a} ${A.symbolA} maps to nothing`;
    if (A.kind === "uniqueB") return `${o} atom ${A.b} ${A.symbolB} maps to nothing`;
    const M = A.kind === "element" ? ", an element change" : "";
    return `${r} atom ${A.a} ${A.symbolA} maps to ${o} atom ${A.b} ${A.symbolB}${M}`;
  }, h = (A) => {
    const M = T(
      "div",
      `white-space:pre;padding:${Z.xs} ${Z.md};border-radius:${be.sm};background:${zt.card};border-left:3px solid ${Fp[A.kind] ?? "transparent"};`,
      `${w(A.a, A.symbolA)} -> ${w(A.b, A.symbolB)}`
    );
    return M.title = d(A), M.dataset.gufeRelation = A.kind, M;
  }, _ = () => {
    const A = y, M = A ? m.filter((R) => A.includes(R.kind)) : m;
    p.replaceChildren(...M.map(h)), M.length || p.appendChild(
      T(
        "div",
        `font-size:${Y.small};line-height:1.6;color:${Ee.faint};grid-column:1/-1;`,
        y ? "No atoms of that kind." : "This mapping has no atoms."
      )
    ), $.textContent = (i.size ? "" : "This mapping relates no atoms at all. ") + `${r} -> ${o}, by atom index and element` + (y ? "; click the chip again for all of them" : "");
    for (const R of g) {
      const D = R.kinds === y;
      R.node.setAttribute("aria-pressed", String(D)), R.node.title = D ? "Show every atom" : "Show only these atoms";
    }
  };
  _();
  const k = Object.entries(n.annotations ?? {}).filter(([A]) => A !== "score");
  if (!k.length) return;
  u.appendChild(T("div", Fr, "Annotations"));
  const x = T("div", `${$c}color:${Ee.faint};`);
  for (const [A, M] of k)
    x.appendChild(T("div", "", `${A}: ${String(M)}`));
  u.appendChild(x);
}
const Es = [
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
function xs(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function Up(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Hp(e, t, n) {
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
function ec(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), r = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Co(t, [e.componentA, e.componentB]) };
}
function Kp(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], l = t.coords[a];
    c && l && (r.push(c), o.push(l));
  }
  const i = Cp(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => kp(s, i.R, i.t)) } : t;
}
function Gp(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Rr.minSpread ? r : Rr.minSpread) * Rr.spreadFactor;
}
function Wp(e, t) {
  const n = Nu, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let l = 0; l < 3; l++) {
    const u = (b) => parseInt(b.slice(1 + l * 2, 3 + l * 2), 16), m = Math.round(u(n[i]) + (u(n[s]) - u(n[i])) * a);
    c += m.toString(16).padStart(2, "0");
  }
  return c;
}
function Jp(e, t) {
  const n = Pe(t, e.componentA, "SmallMoleculeComponentViz"), r = Pe(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const o = et(n), i = et(r), s = Up(e);
  let a, c;
  try {
    a = qr(n.sdf, o), c = qr(r.sdf, i);
  } catch (u) {
    return { problem: `Could not read a molecule: ${he(u)}`, isError: !0 };
  }
  c = Kp(a, c, s);
  const l = /* @__PURE__ */ new Map();
  for (const [u, m] of s) l.set(m, u);
  return {
    pair: {
      from: n,
      to: r,
      nameA: o,
      nameB: i,
      pairs: s,
      molA: a,
      molB: c,
      uniquesA: xs(s, a.symbols, c.symbols),
      uniquesB: xs(l, c.symbols, a.symbols)
    }
  };
}
class Yp extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Jp(n, St(n));
    if ("problem" in r)
      return t.appendChild(pe(r.problem, r.isError)), {};
    const o = r.pair, i = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(i);
    const s = Ep(i, Zr(t)), a = ct("atom-mapping.mode", "plain", Es.map((y) => y.id));
    let c = a.get();
    const l = T("div", ta), u = ma(
      Es,
      c,
      (y) => {
        c = y, g();
      },
      { remember: a, fit: { pane: i, bar: l } }
    );
    l.appendChild(u), i.appendChild(l);
    const m = Qr(), b = {
      plain: jp,
      colored: Dp,
      openfe: Lp,
      lines: qp
    }, g = () => {
      const y = m.start();
      if (s.clear(), c === "info") return Bp(s, o, n);
      if (c === "2d") return Vp(s, o);
      const S = b[c];
      s.element.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
        y() && (s.element.replaceChildren(), S(s, o));
      }).catch((f) => {
        y() && s.element.replaceChildren(pe(`3D render failed: ${he(f)}`, !0));
      });
    };
    return g(), {
      onResize: () => s.resize(),
      cleanup: () => {
        m.stop(), u.cleanup(), s.cleanup();
      }
    };
  }
}
Ne("gufe-atom-mapping", Yp);
const As = ["Force-directed", "Circular", "Radial"], Xp = "ligand-network", Zp = "Click a ligand or an edge to see it.";
function Qp(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function eh(e) {
  return La(e);
}
const Ps = (e) => Math.round(e * 100) / 100;
function th(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function nh(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Rt = { initial: 0.58, min: 0.25, max: 0.8 }, xe = 38, Rs = 1.5, Nr = {
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
}, rh = "6 4", Ns = 200, oh = 2, ih = Math.SQRT2 * (xe - oh), sh = 14, ah = 18, Se = {
  fontSize: 11,
  below: xe + 12,
  minFontSize: 7,
  insideWidth: (xe - 6) * 2
}, Ot = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Ms = 1.5, ch = 6.5, lh = 0.9, dh = 14, Mr = { size: 8, clearance: 8 }, uh = { fontSize: 10 }, fh = 0.4, ph = () => Dr(le.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, tc = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], hh = (e) => Ka(tc, e), mh = (e) => yp(tc, e), gh = 1.8, Ts = 2 * xe + 68, ke = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Ts,
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
  collisionPadding: Ts / 2 - xe,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function yh(e) {
  const t = T("div", yc);
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
function $h(e) {
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
      refX: xe + Mr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Mr.size,
      markerHeight: Mr.size,
      orient: "auto"
    });
    return i.appendChild(ae("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function vh(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function bh(e) {
  const [t, n] = le.netEdgeRamp.map(vh), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ye = et;
function nc(e, t) {
  return t ? Ye(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function wh(e, t, n, r, o) {
  const i = r.trim().toLowerCase(), s = n.size > 0 || i.length > 0;
  if (!s && o <= 0) return null;
  const a = /* @__PURE__ */ new Set();
  for (const l of e) {
    const u = l["gufe-key"];
    (!s || n.has(u) || i.length > 0 && nc(l, i)) && a.add(u);
  }
  const c = /* @__PURE__ */ new Set();
  return t.forEach((l, u) => {
    (l.score ?? 0) < o || !a.has(l.from["gufe-key"]) || !a.has(l.to["gufe-key"]) || c.add(u);
  }), { nodes: a, edges: c };
}
function _h(e) {
  const t = new Wa(), n = sr("cpk"), r = ph(), o = (y) => (e.matched().get(y) ?? []).join(","), i = (y, S) => {
    if (!t.wants(S)) return;
    const f = e.nodes[S], $ = e.matched().get(S), p = f.sdf && vo(
      y,
      f.sdf,
      Ns,
      Ae.layout,
      $ && { atoms: $, color: r, radius: fh },
      n
    );
    if (!p) {
      t.refused(S);
      return;
    }
    if (!Xa(e.depictionGroups[S], p, Ns, ih)) {
      t.refused(S);
      return;
    }
    t.drew(S, o(S));
  }, s = () => t.forget(o, (y) => e.depictionGroups[y].replaceChildren()), a = [], c = (y, S) => {
    if (a[y]) return a[y];
    S.setAttribute("font-size", String(Se.fontSize));
    let f = 0;
    try {
      f = S.getBBox().width;
    } catch {
      return Se.fontSize;
    }
    if (!f) return Se.fontSize;
    const $ = Se.fontSize * Se.insideWidth / f;
    return a[y] = Math.max(Se.minFontSize, Math.min(Se.fontSize, $)), a[y];
  }, l = [], u = (y) => {
    const S = e.captionPlates[y];
    if (l[y] === Se.below) {
      S.setAttribute("display", "inline");
      return;
    }
    let f = null;
    try {
      f = e.captions[y].getBBox();
    } catch {
      f = null;
    }
    if (!f?.width) {
      S.setAttribute("display", "none");
      return;
    }
    S.setAttribute("x", String(f.x - Ot.captionPadX)), S.setAttribute("y", String(f.y - Ot.captionPadY)), S.setAttribute("width", String(f.width + Ot.captionPadX * 2)), S.setAttribute("height", String(f.height + Ot.captionPadY * 2)), S.setAttribute("display", "inline"), l[y] = Se.below;
  }, m = (y, S) => {
    const f = S.structure && !t.has(y) ? mh(S) : S;
    e.depictionGroups[y].setAttribute("display", f.structure ? "inline" : "none");
    const $ = e.plates[y];
    $.setAttribute("display", f.structure ? "inline" : "none");
    const p = e.matched().has(y);
    $.setAttribute("stroke", p ? le.netMatchStroke : le.netNodeStroke);
    const C = e.circles[y];
    C.setAttribute("fill", f.disc ? p ? le.netMatchFill : le.netNodeFill : "none"), C.setAttribute("stroke", f.disc ? p ? le.netMatchStroke : le.netNodeStroke : "none"), e.initials[y].setAttribute("display", f.initials ? "inline" : "none");
    const w = e.charges[y];
    if (w) {
      const k = !f.structure, x = xe * Nr.at;
      w.setAttribute("x", String(x)), w.setAttribute("y", String(-x)), w.setAttribute("font-size", String(k ? Nr.bigFontSize : Nr.fontSize)), w.setAttribute("font-weight", k ? fe.bold : fe.normal);
    }
    const d = e.captions[y], h = f.name === "below";
    if (d.setAttribute("fill", p ? le.netMatchStroke : h ? zu() : le.netNodeCaption), d.setAttribute("display", f.name === "none" ? "none" : "inline"), h || e.captionPlates[y].setAttribute("display", "none"), f.name === "none") return;
    const _ = f.name === "inside";
    d.setAttribute("y", _ ? "0" : String(Se.below)), d.setAttribute("dominant-baseline", _ ? "middle" : "auto"), d.setAttribute("font-size", String(_ ? c(y, d) : Se.fontSize)), h && u(y);
  };
  let b = null;
  return { apply: (y, S, f) => {
    const $ = hh(y);
    b = $, e.stage.setAttribute("data-detail", $.id), e.edgeLabels.setAttribute("display", $.edgeScores ? "inline" : "none");
    for (let C = 0; C < e.nodes.length; C++) m(C, $);
    if (!$.structure) return;
    const p = Ja(e.nodes, { scale: y, tx: S, ty: f }, e.viewport(), (C) => t.wants(C));
    p.length && e.rdkit().then((C) => {
      if (!(!C || b !== $))
        for (const w of p)
          i(C, w), m(w, $);
    }).catch(() => {
    });
  }, forget: s };
}
function Sh(e) {
  const t = lo("ligand-network.minScore", 0, 0, 1);
  return Ha({
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
    shows: (n) => nc(n, e.query.text.trim().toLowerCase()),
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
class Ch extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: o, edges: i, unresolved: s, dangling: a } = Va({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (E) => [E.componentA, E.componentB]
    }), c = Gn(n.name || "Ligand network");
    c.statsEl.appendChild(Ze("ligands", String(o.length))), c.statsEl.appendChild(Ze("mappings", String(i.length))), t.appendChild(c);
    const l = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(l);
    const u = /* @__PURE__ */ new Set(), m = { minScore: 0 }, b = { text: "" }, g = () => $a(), y = Ba(
      g,
      o.map((E) => E.sdf ?? "")
    );
    let S = /* @__PURE__ */ new Map();
    const f = async (E) => {
      const P = await y.run(E);
      return P.status === "superseded" || (S = P.status === "ok" ? P.matched : /* @__PURE__ */ new Map(), I()), P;
    }, $ = _o(
      c,
      () => Sh({
        nodes: o,
        edges: i,
        selected: u,
        filter: m,
        query: b,
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
        onToggle: () => v(),
        remember: it("ligand-network.menuOpen", !1),
        extras: So
      }
    );
    l.appendChild($.panel);
    let p = () => {
    };
    const C = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), w = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`);
    l.appendChild(C), l.appendChild(
      Ma(l, C, w, {
        min: Rt.min,
        max: Rt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: lo("ligand-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => p(),
        onOrient: (E) => bo($.panel, E)
      })
    ), l.appendChild(w);
    const d = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${j.netCanvasBg};`);
    C.appendChild(d);
    const h = ct("ligand-network.layout", "Force-directed", As), _ = this.#e(
      (E) => v(E),
      () => M?.reset(),
      h,
      i.some((E) => vs(E.from, E.to) !== 0)
    );
    C.appendChild(_.bar);
    const k = this.#t(w, r);
    if (!o.length)
      return d.appendChild(
        pe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), k.message("Nothing to show."), {};
    s && st(
      d,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && st(d, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const x = g(), A = yh(d);
    let M = null;
    const R = th(oa(Xp), o.length);
    let D = R && { scale: R.scale, tx: R.tx, ty: R.ty }, z = R ? R.nodes : null, L = i.length ? { kind: "edge", index: 0 } : null;
    if (R && R.selected >= 0) {
      const E = R.selectedKind ?? "edge";
      R.selected < (E === "ligand" ? o.length : i.length) && (L = { kind: E, index: R.selected });
    }
    const W = () => M?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let ne = h.get(), X = !1;
    const re = Qr(), G = () => {
      if (!L) {
        k.message(i.length ? Zp : "Click a ligand to see it.");
        return;
      }
      L.kind === "edge" ? k.showMapping(i[L.index]) : k.showLigand(o[L.index]);
    }, O = (E) => {
      L = E, G(), M?.setSelected(L);
    }, U = () => {
      const E = wh(o, i, u, b.text, m.minScore);
      M?.setEmphasis(E?.nodes ?? null, E?.edges ?? null);
    }, I = () => M?.setMatches(S), v = (E = ne) => {
      const P = M && E === ne ? M.transform() : null;
      E !== ne && (z = null);
      const V = re.start();
      ne = E, M?.cleanup(), M = null, d.querySelectorAll("svg").forEach((N) => N.remove());
      const H = d.clientWidth || 800, Q = d.clientHeight || 600;
      kh(o, H, Q, ne, i), z && nh(o, z);
      const ee = () => {
        if (!V()) return;
        const N = this.#n(d, o, i, H, Q, O, x, A);
        M = N, N.setSelected(L), U(), I();
        const F = D ?? P;
        F ? (N.setTransform(F.scale, F.tx, F.ty), D = null) : N.fit();
      };
      if (ne !== "Force-directed" || X || z) {
        ee();
        return;
      }
      Eh(o, i, H, Q).then((N) => {
        if (V()) {
          if (N) {
            ee();
            return;
          }
          X = !0, _.picker.value = "Circular", st(d, "d3 could not be loaded - showing the circular layout instead"), v("Circular");
        }
      }, ee);
    };
    return p = () => v(), v(), G(), {
      onResize: () => v(),
      cleanup: () => {
        re.stop(), y.cancel(), A.remove(), M?.cleanup(), M = null, k.cleanup();
      },
      viewState: () => ({
        nodes: o.map((E) => [Ps(E.x), Ps(E.y)]),
        ...W(),
        selected: L ? L.index : -1,
        selectedKind: L ? L.kind : "edge"
      })
    };
  }
  #e(t, n, r, o) {
    const i = T(
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
      As.map((c) => ({ id: c, label: c })),
      r.get(),
      (c) => t(c),
      r
    );
    return i.appendChild(a), i.appendChild(go(n, "Reset pan and zoom")), { bar: i, picker: a };
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
    const r = Ya(t);
    return {
      ...r,
      showMapping: (o) => r.show(ec(Qp(o), n)),
      showLigand: (o) => r.show(eh(o))
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
    }), u = ae("g");
    l.appendChild(u), t.appendChild(l);
    const m = ae("defs"), b = $h(m);
    l.appendChild(m);
    const g = [], y = ae("g"), S = ae("g"), f = ae("g", { "pointer-events": "none" }), $ = ae("g");
    u.append(y, S, f, $);
    for (const L of r) {
      const W = bh(L.score), ne = Ms + (L.score ?? 0.5) * (ch - Ms), X = ae("line", {
        stroke: le.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": ne + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), re = vs(L.from, L.to), G = ae("line", {
        stroke: W,
        "stroke-width": ne,
        "stroke-opacity": lh,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(W)})`,
        "pointer-events": "none",
        ...re ? { "stroke-dasharray": rh } : {}
      }), O = ae("line", { stroke: "transparent", "stroke-width": dh, style: "cursor:pointer;" });
      O.addEventListener("click", (v) => {
        v.stopPropagation(), s({ kind: "edge", index: L.index });
      }), O.addEventListener("mousemove", (v) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Te(Ye(L.from))} -&gt; ${Te(Ye(L.to))}</div>` + (L.score == null ? `<div style="color:${j.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${L.score.toFixed(3)}</b></div>`) + (re ? `<div style="margin-top:4px;">net charge <b>${Te(ot(re))}</b> <span style="color:${j.textMuted2};">(${Te(ot(L.from.total_charge ?? 0))} to ${Te(ot(L.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${Y.tiny};color:${j.textMuted2};">Click to see the mapping</div>`,
          v.offsetX,
          v.offsetY
        );
      }), O.addEventListener("mouseleave", () => c.hide()), g.push(X), y.append(X, G), S.appendChild(O);
      const U = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": uh.fontSize,
        "font-weight": 600,
        fill: le.netEdgeLabel
      });
      U.textContent = L.score == null ? "" : L.score.toFixed(2);
      const I = ae("g", { class: "gufe-edge-label" });
      I.appendChild(U), f.appendChild(I);
    }
    const p = [], C = [], w = [], d = [], h = [], _ = [], k = [], x = [], A = n.map((L) => {
      const W = ae("g", { class: "gufe-node", style: "cursor:grab;" });
      W.addEventListener("mousemove", (v) => {
        c.show(
          `<div style="font-weight:700;color:${j.titleColor};">${Te(Ye(L))}</div>` + (L.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Te(L.smiles)}</div>` : "") + (L.total_charge ? `<div style="margin-top:3px;">formal charge <b>${Te(ot(L.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${Y.tiny};color:${j.textMuted2};overflow-wrap:anywhere;">${Te(L["gufe-key"])}</div><div style="margin-top:4px;font-size:${Y.tiny};color:${j.textMuted2};">Click to see the ligand</div>`,
          v.offsetX,
          v.offsetY
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
        "stroke-width": Rs,
        "pointer-events": "all"
      });
      W.appendChild(X), C.push(X);
      const re = ae("circle", {
        class: "gufe-node-plate",
        r: xe,
        fill: jr(),
        stroke: le.netNodeStroke,
        "stroke-width": Rs,
        display: "none",
        "pointer-events": "none"
      });
      W.appendChild(re), w.push(re);
      const G = ae("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      W.appendChild(G), p.push(G);
      const O = ae("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": ah,
        "font-weight": 700,
        fill: le.netInitials,
        "pointer-events": "none"
      });
      if (O.textContent = Ye(L).slice(0, 2).toUpperCase(), W.appendChild(O), _.push(O), L.total_charge) {
        const v = ae("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: le.badgeFg,
          "pointer-events": "none"
        });
        v.textContent = ot(L.total_charge), W.appendChild(v), x.push(v);
      } else
        x.push(null);
      const U = ae("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Se.below,
        "font-size": Se.fontSize,
        "font-weight": 600,
        fill: le.netNodeCaption,
        "pointer-events": "none"
      });
      U.textContent = jn(Ye(L), sh), U.setAttribute("display", "none"), k.push(U);
      const I = ae("rect", {
        class: "gufe-node-caption-plate",
        rx: Ot.captionRadius,
        fill: jr(),
        display: "none",
        "pointer-events": "none"
      });
      return d.push(I), W.appendChild(I), W.appendChild(U), $.appendChild(W), W;
    }), M = () => {
      r.forEach((L, W) => {
        for (const X of [g[W], y.children[W * 2 + 1], S.children[W]]) {
          const re = X;
          re.setAttribute("x1", String(L.from.x)), re.setAttribute("y1", String(L.from.y)), re.setAttribute("x2", String(L.to.x)), re.setAttribute("y2", String(L.to.y));
        }
        f.children[W].setAttribute(
          "transform",
          `translate(${(L.from.x + L.to.x) / 2},${(L.from.y + L.to.y) / 2 - 8})`
        );
      }), n.forEach((L, W) => A[W].setAttribute("transform", `translate(${L.x},${L.y})`));
    };
    M();
    let R = /* @__PURE__ */ new Map();
    const D = _h({
      nodes: n,
      circles: C,
      plates: w,
      captionPlates: d,
      matched: () => R,
      captions: k,
      initials: _,
      charges: x,
      depictionGroups: p,
      edgeLabels: f,
      stage: l,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), z = this.#r(
      l,
      u,
      n,
      A,
      M,
      D.apply,
      (L) => s({ kind: "ligand", index: L })
    );
    return {
      setSelected(L) {
        const W = L?.kind === "edge" ? L.index : -1, ne = L?.kind === "ligand" ? L.index : -1;
        g.forEach((X, re) => X.setAttribute("opacity", re === W ? String(Nt.opacity) : "0")), h.forEach((X, re) => X.setAttribute("opacity", re === ne ? String(Nt.opacity) : "0"));
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
        A.forEach((ne, X) => {
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
    const c = Da(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => ja(r, xe),
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return Ga(o, r, c, { moved: () => i(), clicked: a }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (l, u) => c.centreOn(l, u, gh)
    };
  }
}
function kh(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, l) => {
    c.forEach((u, m) => {
      const b = 2 * Math.PI * m / Math.max(1, c.length) - Math.PI / 2;
      u.x = i + l * Math.cos(b), u.y = s + l * Math.sin(b), u.fx = r === "Force-directed" ? void 0 : u.x, u.fy = r === "Force-directed" ? void 0 : u.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of o)
      c.get(S.from["gufe-key"]).push(S.to["gufe-key"]), c.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const l = new Map(e.map((S) => [S["gufe-key"], S])), u = e.reduce(
      (S, f) => c.get(f["gufe-key"]).length > c.get(S["gufe-key"]).length ? f : S
    ), m = /* @__PURE__ */ new Set([u["gufe-key"]]);
    let b = [u["gufe-key"]], g = 0;
    const y = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      a(
        b.map((f) => l.get(f)),
        g === 0 ? 0 : g * y + 40
      );
      const S = [];
      for (const f of b)
        for (const $ of c.get(f))
          m.has($) || (m.add($), S.push($));
      b = S, g++;
    }
    a(e.filter((S) => !m.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function Eh(e, t, n, r) {
  return qa({
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
Ne("gufe-ligand-network", Ch);
const xh = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function rc(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Ke(t, o);
    i && (xh.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function Ah(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Os = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], Ph = 0.4;
class Rh extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = rc(n, St(n)), o = r.structures.map((g, y) => y), i = r.ligands.map((g, y) => r.structures.length + y), s = ct(
      "complex.focus",
      "site",
      Os.map((g) => g.id)
    );
    let a = s.get(), c = null;
    const l = Fa({
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
      restyle: u,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () => [
        er(
          Os,
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
    function u() {
      const g = l.viewer();
      g && (Br(g, l.opts, c, l.showStatus, { model: o }, l.stillWanted), If(g, { model: i }), g.render());
    }
    function m() {
      const g = l.viewer();
      g && (a === "site" && i.length ? (g.zoomTo({ model: i }), g.zoom(Ph)) : g.zoomTo(), g.render(), b());
    }
    function b() {
      const g = l.viewer();
      g && (l.interaction()?.cleanup(), l.setInteraction(or(l.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return l.showStatus("This system has no ligand and structure to draw together."), {};
    l.setStats(Fs(r, () => c));
    try {
      c = Ra(r.structures[0].pdb), l.setStats(Fs(r, () => c));
    } catch (g) {
      l.showStatus(`PDB parse error: ${he(g)}`, "error");
    }
    return l.showStatus("Loading 3D viewer..."), rr().then(() => {
      const g = Qe.createViewer(l.pane.container, { backgroundColor: zt.viewer() });
      l.setViewer(g);
      for (const y of r.structures) g.addModel(y.pdb, "pdb");
      for (const y of r.ligands) g.addModel(xa(y.sdf), "sdf");
      u(), l.restoreCamera() ? b() : m(), g.spin(l.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      l.showStatus(`Failed to render structure: ${he(g)}`, "error");
    }), l.handle;
  }
}
function Fs(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = $o(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...Na(o)] : [r];
}
Ne("gufe-complex", Rh);
function Nh(e, t) {
  return {
    ...e,
    registry: Co(t, Object.values(e.components ?? {}))
  };
}
const Mh = "chemical-system.component", Th = 200, Oh = "35%";
function Fh(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function zh(e) {
  return e.type === "UnknownComponentViz" ? Wn(e.gufe_type) : null;
}
function zs(e) {
  return T(
    "div",
    `padding:10px 10px 16px;font-weight:${fe.bold};font-size:${Y.title};color:${j.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class Ih extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = St(n), o = [], i = [];
    for (const [x, A] of Object.entries(n.components ?? {})) {
      const M = Ke(r, A);
      M ? o.push([x, M]) : i.push(x);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(zs(s)), t.appendChild(
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
    a.appendChild(c), c.appendChild(zs(s));
    const l = T(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(l);
    const u = T(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(u);
    const m = T(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    u.appendChild(m);
    const b = document.createElement("alchemy-view");
    b.style.cssText = "flex:1;min-width:0;min-height:0;", b.setAttribute(zr, ""), m.appendChild(b);
    const g = rc(n, r), y = Ah(g), S = (x) => y && g.structures.some(
      (A) => A === x
    ), f = o.filter(([, x]) => !S(x)).map(([x, A]) => ({
      key: x,
      title: x,
      subtitle: Fh(A),
      badge: zh(A),
      element: b,
      point: () => {
        b.payload = A;
      }
    }));
    if (y) {
      const x = document.createElement("gufe-complex");
      x.style.cssText = "flex:1;min-width:0;min-height:0;", x.setAttribute(zr, ""), x.payload = n, f.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${g.ligands.length === 1 ? g.ligands[0].name || "ligand" : "ligands"} in ${g.structures[0].name || "structure"}`,
        badge: null,
        element: x,
        point: () => {
        }
      });
    }
    let $ = null;
    const p = (x) => {
      $ !== x && (m.replaceChildren(x), $ = x);
    }, C = Hn(Mh), w = [], d = (x) => {
      w.forEach((A, M) => A.setAttribute("aria-pressed", String(M === x))), f[x].point(), p(f[x].element);
    }, h = (x) => {
      C.set(f[x].key), d(x);
    };
    f.forEach((x, A) => {
      const M = co(`${Yr.card}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`);
      M.appendChild(
        T("span", `font-weight:700;color:${j.textPrimary};`, x.title)
      ), M.appendChild(
        T(
          "span",
          `font-size:${Y.small};color:${j.textMuted};`,
          x.subtitle
        )
      ), x.badge && M.appendChild(x.badge), M.onclick = () => h(A), w.push(M), l.appendChild(M);
    });
    const _ = f.findIndex((x) => x.key === C.get());
    d(_ < 0 ? 0 : _);
    const k = Gr(a, (x) => {
      a.style.flexDirection = x ? "column" : "row", c.style.flex = x ? "0 0 auto" : `0 0 ${Th}px`, c.style.maxHeight = x ? Oh : "none", c.style.borderRight = x ? "none" : `1px solid ${j.splitBorder}`, c.style.borderBottom = x ? `1px solid ${j.splitBorder}` : "none", l.style.flexDirection = x ? "row" : "column", l.style.flexWrap = x ? "wrap" : "nowrap", $?.resize?.();
    });
    return {
      onResize: () => $?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        k(), $?.remove();
      }
    };
  }
}
Ne("gufe-chemical-system", Ih);
const jh = 210, Dh = "42%";
function Lh(e, t) {
  const n = Pe(t, e.stateA, "ChemicalSystemViz"), r = Pe(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: Co(t, o) };
}
const ko = {
  unchanged: j.diffUnchanged,
  changed: j.diffChanged,
  added: j.diffAdded,
  removed: j.diffRemoved
};
function qh(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Vh(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Bh(e) {
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
  const o = Bh(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Y.body};color:${j.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? j.cardBorder : ko[t];
  const i = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:600;color:${j.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Wn(o.type)), r;
}
function Uh(e, t, n, r) {
  const o = T("div", `display:flex;flex-direction:column;gap:${Z.sm};min-width:0;`), i = T("div", `display:flex;align-items:center;gap:${Z.md};min-width:0;`);
  i.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${ko[t]};`)
  );
  const s = T(
    "span",
    `min-width:0;font-size:${Y.body};font-weight:${fe.bold};color:${j.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Tr(n, t, null)), o) : (o.appendChild(Tr(n, t, "A")), o.appendChild(Tr(r, t, "B")), o);
}
function Hh(e, t) {
  const n = Ke(t, e.componentA), r = Ke(t, e.componentB);
  return `${n ? et(n) : "A"} to ${r ? et(r) : "B"}`;
}
function Is(e) {
  return T(
    "div",
    `font-weight:${fe.bold};font-size:${Y.heading};color:${j.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function js(e, t) {
  const n = T("div", `display:flex;align-items:baseline;gap:${Z.md};min-width:0;font-size:${Y.small};`);
  return n.appendChild(T("span", `flex:0 0 auto;color:${j.textMuted};`, e)), n.appendChild(
    T("span", `min-width:0;font-weight:${fe.bold};color:${j.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class Kh extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = St(n), o = Pe(r, n.stateA, "ChemicalSystemViz"), i = Pe(r, n.stateB, "ChemicalSystemViz"), s = Pe(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const w = T("div", "padding:12px 14px;flex-shrink:0;");
      return w.appendChild(Is(c)), t.appendChild(w), t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const l = Vh(o, i), u = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(u);
    const m = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${j.panelBg};`
    );
    u.appendChild(m);
    const b = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    u.appendChild(b);
    const g = T("div", `display:flex;flex-direction:column;gap:${Z.md};min-width:0;`);
    g.appendChild(Is(c)), g.appendChild(js("protocol", s?.gufe_type || s?.name || Je)), g.appendChild(js("mappings", String(a.length))), m.appendChild(g);
    const y = T("div", `display:flex;flex-direction:column;gap:${Z.xs};`);
    for (const [w, d] of [
      ["State A", o],
      ["State B", i]
    ])
      y.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Y.small};font-weight:${fe.bold};letter-spacing:.06em;text-transform:uppercase;color:${j.textMuted2};overflow-wrap:anywhere;`,
          `${w}${d.name ? ` - ${d.name}` : ""}`
        )
      );
    m.appendChild(y);
    const S = /* @__PURE__ */ new Set();
    for (const w of l) {
      const d = o.components?.[w], h = i.components?.[w], _ = qh(d, h);
      S.add(_), m.appendChild(
        Uh(
          w,
          _,
          Ke(r, d),
          Ke(r, h)
        )
      );
    }
    if (S.size > 1) {
      const w = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${Z.lg} 12px;padding-top:${Z.sm};font-size:${Y.small};color:${j.textMuted};`
      );
      for (const d of ["unchanged", "changed", "added", "removed"])
        S.has(d) && w.appendChild(Ze(d, "", ko[d]));
      m.appendChild(w);
    }
    const f = T("div", fc, "Atom mapping");
    b.appendChild(f);
    const $ = Gr(t, (w) => {
      u.style.flexDirection = w ? "column" : "row", m.style.flex = w ? "0 0 auto" : `0 0 ${jh}px`, m.style.maxWidth = w ? "none" : Dh, m.style.maxHeight = w ? "45%" : "none", m.style.borderRight = w ? "none" : `1px solid ${j.splitBorder}`, m.style.borderBottom = w ? `1px solid ${j.splitBorder}` : "none", f.style.display = w ? "block" : "none";
    });
    if (!a.length)
      return b.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: $ };
    const p = document.createElement("gufe-atom-mapping");
    p.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (w) => {
      p.payload = ec(a[w], r);
    };
    if (C(0), a.length > 1) {
      const w = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Y.small};background:${j.toolbarBg};border-bottom:1px solid ${j.toolbarBorder};color:${j.textMuted};`
      );
      w.appendChild(
        er(
          a.map((d, h) => ({
            id: String(h),
            label: d.name || Hh(d, r)
          })),
          "0",
          (d) => C(Number(d))
        )
      ), b.appendChild(w);
    }
    return b.appendChild(p), {
      onResize: () => p.resize?.(),
      cleanup: () => {
        $(), p.remove();
      }
    };
  }
}
Ne("gufe-transformation", Kh);
const at = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Ds = (e) => e ? at.depictedHeight : at.height, ze = { pad: 6, size: 122, radius: 6, inset: 4 }, Ls = 200, Mt = {
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
], Yh = (e) => Ka(Jh, e), Dn = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, qs = (e, t) => {
  const n = t ? Dn.selectedWidth : Dn.width;
  return Math.max(Dn.min, Math.min(n, n * e));
}, Or = { width: 3, selectedWidth: 4.5, min: 1.25 }, Vs = (e, t) => {
  const n = t ? Or.selectedWidth : Or.width;
  return Math.max(Or.min, Math.min(n, n * e));
}, bt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Tt = { initial: 0.56, min: 0.25, max: 0.78 }, Bs = { x: at.width / 2, y: at.depictedHeight / 2 }, Xh = 1.4;
function Zh(e, t, n, r, o, i, s, a) {
  const c = i.trim().toLowerCase();
  if (!o.size && !c && s === "" && a === null) return null;
  const l = c.length > 0 || s !== "" || a !== null, u = /* @__PURE__ */ new Set();
  e.forEach((b, g) => {
    const y = l && (!c || n[g].includes(c)) && (!s || r[g] === s) && (!a || a.has(g));
    (o.has(b["gufe-key"]) || y) && u.add(b["gufe-key"]);
  });
  const m = /* @__PURE__ */ new Set();
  return t.forEach((b, g) => {
    u.has(b.from["gufe-key"]) && u.has(b.to["gufe-key"]) && m.add(g);
  }), { nodes: u, edges: m };
}
const Kn = et;
function oc(e, t) {
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
const Qh = (e, t) => oc(e, t).join(" + ");
function em(e, t) {
  const n = { fill: le.netNodeFill, stroke: le.netNodeStroke }, r = e.map((s) => Qh(s, t)), o = [...new Set(r)];
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
function tm(e, t) {
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
function nm(e, t) {
  const n = [], r = [], o = /* @__PURE__ */ new Map(), i = e.map((s) => {
    const a = [];
    for (const c of Object.values(s.components ?? {})) {
      const l = Pe(t, c, "SmallMoleculeComponentViz");
      if (!l) continue;
      let u = o.get(c);
      u === void 0 && (u = n.length, o.set(c, u), n.push(l.sdf ?? ""), r.push(l.total_charge ?? 0)), a.push(u);
    }
    return a;
  });
  return { sources: n, charges: r, perNode: i };
}
function rm(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function om(e) {
  const t = Hn("alchemical-network.composition");
  return Ha({
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
  e.forEach((o, i) => {
    if (o.fx !== void 0 && o.fy !== void 0) {
      o.x = o.fx, o.y = o.fy;
      return;
    }
    const s = 2 * Math.PI * i / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(s), o.y = n / 2 + r * Math.sin(s);
  });
}
function sm(e, t, n, r) {
  return qa({
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
class am extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: o, edges: i, unresolved: s, dangling: a } = Va({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (v) => [v.stateA, v.stateB]
    }), c = (v) => {
      const E = Pe(r, v.protocol, "ProtocolViz");
      return E?.gufe_type || E?.name || "";
    }, l = new Set(i.map(c).filter(Boolean)), u = Gn(n.name || "Alchemical network");
    u.statsEl.appendChild(Ze("systems", String(o.length))), u.statsEl.appendChild(Ze("transformations", String(i.length))), l.size && u.statsEl.appendChild(Ze("protocol", [...l].join(", ")));
    const m = em(o, r), b = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    let g = () => {
    };
    const y = /* @__PURE__ */ new Set(), S = { composition: "" }, f = { text: "" };
    let $ = null;
    const p = () => {
      const v = Zh(
        o,
        i,
        C,
        m.signatures,
        y,
        f.text,
        S.composition,
        k
      );
      $?.setEmphasis(v?.nodes ?? null, v?.edges ?? null);
    }, C = o.map((v) => tm(v, r)), w = () => $a(), d = nm(o, r), h = Ba(w, d.sources), _ = o.map((v, E) => {
      const P = d.perNode[E].find((Q) => d.sources[Q]), V = P === void 0 ? null : d.sources[P], H = oc(v, r);
      return {
        colors: m.colorOf(E),
        composition: H.join(" + "),
        besides: rm(H, V !== null, d.perNode[E].length),
        sdf: V,
        charge: P === void 0 ? 0 : d.charges[P]
      };
    });
    let k = null, x = () => {
    };
    const A = async (v) => {
      const E = await h.run(v);
      return E.status === "superseded" || (k = E.status === "ok" ? new Set(o.flatMap((P, V) => d.perNode[V].some((H) => E.matched.has(H)) ? [V] : [])) : null, x(), p()), E;
    }, M = _o(
      u,
      () => om({
        nodes: o,
        edges: i,
        haystacks: C,
        signatures: m.signatures,
        colorOf: m.colorOf,
        compositions: m.compositions,
        selected: y,
        filter: S,
        query: f,
        refresh: () => p(),
        matched: () => k,
        match: (v) => A(v),
        mounted: (v) => {
          x = v;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (v) => {
          $?.focusOn(v), U("node", v);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => g(),
        remember: it("alchemical-network.menuOpen", !1),
        extras: So
      }
    ), R = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.netCanvasBg};`), D = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${j.appBg};`), z = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${j.netCanvasBg};`), L = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    L.appendChild(M.panel), L.appendChild(z), R.appendChild(u), R.appendChild(L), b.appendChild(R), b.appendChild(
      Ma(b, R, D, {
        min: Tt.min,
        max: Tt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: lo("alchemical-network.canvasShare", Tt.initial, Tt.min, Tt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => g(),
        onOrient: (v) => {
          L.style.flexDirection = v ? "column" : "row", bo(M.panel, v);
        }
      })
    ), b.appendChild(D);
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
    const re = Qr(), G = new Map(o.map((v, E) => [v["gufe-key"], _[E].charge])), O = i.some(
      (v) => (G.get(v.to["gufe-key"]) ?? 0) !== (G.get(v.from["gufe-key"]) ?? 0)
    );
    R.appendChild(this.#e(m.legend, () => $?.reset(), O));
    const U = (v, E) => {
      X = { kind: v, index: E }, W.show(v === "node" ? o[E] : i[E], v), $?.setSelected(X);
    }, I = () => {
      const v = re.start(), E = z.clientWidth || 800, P = z.clientHeight || 600;
      im(o, E, P);
      const V = () => {
        v() && ($?.cleanup(), z.querySelectorAll("svg").forEach((H) => H.remove()), $ = this.#n(z, o, i, E, P, _, w, U), $.setSelected(X), p());
      };
      if (ne) {
        V();
        return;
      }
      sm(o, i, E, P).then((H) => {
        v() && (H || (ne = !0, st(z, "d3 could not be loaded - showing the circular layout instead")), V());
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
    const o = T("div", ea);
    if (o.appendChild(go(n, "Reset pan and zoom")), r) {
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
    const r = Ya(t);
    return {
      ...r,
      show(o, i) {
        let s;
        if (i === "node")
          s = Nh(La(o), n);
        else {
          const { index: a, from: c, to: l, ...u } = o;
          s = Lh(u, n);
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
    const u = ae("g");
    l.appendChild(u);
    const m = ae("g"), b = ae("g");
    u.append(m, b);
    let g = () => {
    };
    const y = Da(l, u, {
      bounds: () => ja(n, Bs.x, Bs.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (P, V, H) => g(P, V, H)
    }), S = (P, V) => {
      y.wasPan() || c(P, V);
    }, f = [], $ = [], p = new Map(n.map((P, V) => [P["gufe-key"], s[V].charge])), C = (P) => (p.get(P.to["gufe-key"]) ?? 0) - (p.get(P.from["gufe-key"]) ?? 0);
    r.forEach((P, V) => {
      const H = C(P), Q = ae("line", {
        x1: P.from.x,
        y1: P.from.y,
        x2: P.to.x,
        y2: P.to.y,
        stroke: le.netEdgeLine,
        "stroke-width": qs(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
        ...H ? { "stroke-dasharray": Gh } : {}
      });
      ys(
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
      ee.addEventListener("click", () => S("edge", V)), m.appendChild(ee), $.push(ee);
    });
    const w = n.map(() => []), d = new Map(n.map((P, V) => [P, V]));
    r.forEach((P, V) => {
      const H = d.get(P.from), Q = d.get(P.to);
      H !== void 0 && w[H].push(V), Q !== void 0 && Q !== H && w[Q].push(V);
    });
    const h = [], _ = [], k = [], x = [], A = [], M = [], R = [], D = [], z = [];
    n.forEach((P, V) => {
      const H = s[V], Q = Ds(H.sdf), ee = ae("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${P.x},${P.y})`
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
        "stroke-width": Vs(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (ee.appendChild(N), h.push(N), _.push(H.colors.stroke), H.sdf) {
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
        const te = ae("g", { transform: `translate(0,${-Q / 2 + ze.pad + ze.size / 2})` }), oe = ae("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        te.appendChild(oe), ee.appendChild(te), D.push(te), z.push(oe);
      } else
        M.push(null), D.push(null), z.push(null), R.push(null);
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
      F.textContent = jn(Kn(P), qe.nameChars), ee.appendChild(F), x.push(F);
      const K = ae("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: le.netInitials,
        "font-size": qe.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      K.textContent = jn(H.composition, qe.subChars), ee.appendChild(K), A.push(K), ys(ee, `${Kn(P)} - ${H.composition}`), b.appendChild(ee);
    });
    const L = (P) => {
      const V = n[P];
      k[P].setAttribute("transform", `translate(${V.x},${V.y})`);
      for (const H of w[P])
        for (const Q of [f[H], $[H]])
          r[H].from === V && (Q.setAttribute("x1", String(V.x)), Q.setAttribute("y1", String(V.y))), r[H].to === V && (Q.setAttribute("x2", String(V.x)), Q.setAttribute("y2", String(V.y)));
    }, W = new Wa(), ne = sr("cpk"), X = (P, V) => {
      if (!W.wants(V)) return;
      const H = z[V], Q = s[V].sdf;
      if (!H || !Q) return;
      const ee = vo(P, Q, Ls, Ae.layout, void 0, ne);
      if (!ee || !Xa(H, ee, Ls, ze.size - ze.inset * 2)) {
        W.refused(V);
        return;
      }
      W.drew(V);
    }, re = (P, V, H) => {
      const Q = s[P], ee = V && W.has(P), N = (we) => we * H >= Wh, F = N(qe.nameSize), K = N(qe.subSize);
      x[P].setAttribute("display", F ? "inline" : "none"), A[P].setAttribute("display", K ? "inline" : "none"), M[P]?.setAttribute("display", ee ? "inline" : "none"), z[P]?.setAttribute("display", ee ? "inline" : "none");
      const J = Ds(Q.sdf), te = -J / 2 + ze.pad, oe = R[P];
      oe && (oe.setAttribute("x", String(ee ? at.width / 2 - Mt.inset : 0)), oe.setAttribute(
        "y",
        String(ee ? -J / 2 + Mt.inset : -J * Mt.bigAt)
      ), oe.setAttribute("font-size", String(ee ? Mt.fontSize : Mt.bigFontSize)), oe.setAttribute("font-weight", ee ? fe.normal : fe.bold)), M[P]?.setAttribute("y", String(te)), D[P]?.setAttribute("transform", `translate(0,${te + ze.size / 2})`);
      const ue = J / 2 - qe.bottom;
      x[P].setAttribute("y", String(ee ? ue - (K ? qe.gap : 0) : -2)), A[P].setAttribute("y", String(ee ? ue : 14)), A[P].textContent = jn(ee ? Q.besides : Q.composition, qe.subChars);
    };
    let G = null, O = 1, U = null, I = null;
    const v = () => {
      h.forEach((P, V) => {
        const H = U === V;
        P.setAttribute("stroke", H ? le.cardBorderActive : _[V]), P.setAttribute("stroke-width", String(Vs(O, H)));
      }), f.forEach((P, V) => {
        const H = I === V;
        P.setAttribute("stroke", H ? le.netHaloColor : le.netEdgeLine), P.setAttribute("stroke-width", String(qs(O, H)));
      });
    };
    return g = (P, V, H) => {
      const Q = Yh(P);
      G = Q, l.setAttribute("data-detail", Q.id), O = P, v();
      for (let N = 0; N < n.length; N++) re(N, Q.structure, P);
      if (!Q.structure) return;
      const ee = Ja(
        n,
        { scale: P, tx: V, ty: H },
        { width: o, height: i },
        (N) => !!s[N].sdf && W.wants(N)
      );
      ee.length && a().then((N) => {
        if (!(!N || G !== Q))
          for (const F of ee)
            X(N, F), re(F, !0, P);
      }).catch(() => {
      });
    }, Ga(k, n, y, { moved: L, clicked: (P) => c("node", P) }), y.fit(), {
      setSelected(P) {
        U = P?.kind === "node" ? P.index : null, I = P?.kind === "edge" ? P.index : null, v();
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
        k.forEach((H, Q) => {
          const ee = !P || P.has(n[Q]["gufe-key"]);
          H.setAttribute("opacity", ee ? "1" : String(Ft.node));
        }), f.forEach((H, Q) => {
          const ee = !V || V.has(Q);
          H.setAttribute("opacity", ee ? "1" : String(Ft.edge));
        });
      },
      focusOn(P) {
        const V = n[P];
        V && y.centreOn(V.x, V.y, Xh);
      },
      reset: y.reset,
      cleanup: y.cleanup
    };
  }
}
Ne("gufe-alchemical-network", am);
class cm extends Re {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Gn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const o = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = Xr();
    return i.style.maxWidth = "460px", i.appendChild(Vn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Vn("Name", n.name)), i.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Y.small};line-height:1.6;color:${j.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Ne("gufe-protocol", cm);
function lm(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Us(e, t = !1) {
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
function Hs(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${Z.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Ve.plain}${Ve.outline}font-family:${Y.mono};font-size:${Y.body};`,
      e
    )
  ), n.appendChild(Ln(t)), n;
}
class dm extends Re {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Xr();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = Us("Solvent", !0), s = T("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = T("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = T(
      "div",
      `font-family:${Y.mono};font-size:${Y.display};font-weight:${fe.bold};line-height:1.1;color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Ln("SMILES")), s.appendChild(a);
    const l = n.name || "";
    if (l && l !== n.smiles) {
      const $ = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      $.appendChild(
        T(
          "div",
          `font-size:${Y.body};color:${j.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          l
        )
      ), $.appendChild(Ln("Name")), s.appendChild($);
    }
    i.appendChild(s), o.appendChild(i);
    const u = Us("Ions"), m = T("div", `display:flex;align-items:flex-end;gap:${Z.xxl};flex-wrap:wrap;`);
    n.positive_ion && m.appendChild(Hs(n.positive_ion, "cation")), n.negative_ion && m.appendChild(Hs(n.negative_ion, "anion"));
    const { value: b, unit: g } = lm(n.ion_concentration), y = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), S = T("div", `display:flex;align-items:baseline;gap:${Z.md};justify-content:flex-end;`);
    S.appendChild(
      T(
        "div",
        `font-size:${Y.display};font-weight:${fe.bold};line-height:1;color:${j.titleColor};`,
        b
      )
    ), g && (S.appendChild(document.createTextNode(" ")), S.appendChild(T("div", `font-size:${Y.body};color:${j.textMuted};`, g))), y.appendChild(S), y.appendChild(Ln("Ion concentration")), m.appendChild(y), u.appendChild(m);
    const f = n.neutralize;
    return u.appendChild(
      T(
        "span",
        `${Ve.plain}align-self:flex-start;font-weight:${fe.bold};` + (f ? `background:${j.okBg};color:${j.okFg};` : `${Ve.outline}color:${j.textMuted};`),
        f ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      T(
        "div",
        vc,
        f ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
Ne("gufe-solvent", dm);
class um extends Re {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Gn(n.name || "Unnamed component");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const o = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = Xr();
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
    ), i.appendChild(Vn("Name", n.name || "(unnamed)")), i.appendChild(Vn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Ne("gufe-unknown-component", um);
Js();
typeof globalThis < "u" && (globalThis.alchemyViz = { settings: $u, reset: bu });
export {
  fm as PAYLOAD_TYPES,
  ao as VIEW_TAGS
};
