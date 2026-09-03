const $o = {
  dark: {
    appBg: "#2b2b40",
    panelBg: "#33334d",
    cardBg: "#33334d",
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
    canvas2DBg: "#ffffff",
    diffUnchanged: "#64748b",
    diffChanged: "#d9a300",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#2b2b40",
    netNodeFill: "#33334d",
    netNodeStroke: "#45455e",
    netNodeLabel: "#f2f3f7",
    netDepictBg: "#ffffff",
    netNodeCaption: "#b9bccb",
    netDepictCaption: "#55555f",
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
function va() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const M = va() ? $o.dark : $o.light, Q = {
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
  bold: "700"
}, ne = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Oe = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, je = {
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, lt = {
  card: M.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: M.canvas2DBg
}, $e = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${ne.sm} 9px;font-size:${Q.small};font-weight:${ge.bold};border-radius:${Oe.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, ba = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${Oe.md};padding:${ne.sm} ${ne.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, wa = `display:flex;align-items:center;gap:12px;padding:9px ${ne.xxl};flex-shrink:0;background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Vn = { min: "236px", max: "340px" }, Ze = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Hr = `display:flex;flex-direction:column;gap:${ne.lg};flex:1;min-width:var(${Ze.min},${Vn.min});max-width:var(${Ze.max},${Vn.max});box-sizing:border-box;padding:${ne.xl};min-height:0;overflow-y:auto;background:${M.panelBg};border:0 solid ${M.splitBorder};border-right-width:var(${Ze.ruleX},1px);border-bottom-width:var(${Ze.ruleY},0);`, _a = "45%", Ci = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", ki = {
  bottom: `display:flex;align-items:center;gap:${ne.xl};flex-wrap:wrap;padding:${ne.lg} ${ne.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, Sa = `flex-shrink:0;padding:${ne.sm} ${ne.xl};font-size:${Q.heading};font-weight:${ge.bold};color:${M.labelFg};background:${M.labelBg};`, Mr = `position:absolute;top:${ne.md};left:${ne.md};z-index:10;pointer-events:none;max-width:calc(100% - ${ne.xxl} - ${ne.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${ne.xs} ${ne.lg};border-radius:${Oe.md};font-size:${Q.heading};font-weight:${ge.bold};color:${M.labelFg};background:${M.labelBg};`, Ca = `padding:${ne.xs} ${ne.lg};border-radius:${Oe.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${M.labelFg};background:${M.labelBg};`, ka = `position:absolute;top:${ne.lg};left:${ne.lg};z-index:15;display:flex;align-items:center;gap:${ne.md};min-width:0;max-width:calc(100% - ${ne.xxl} - ${ne.xxl});`, Ea = "42px", xa = `display:flex;flex-direction:column;gap:${ne.xs};padding:${ne.xxl} 18px;border-radius:${Oe.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Ei = `position:absolute;bottom:${ne.xl};right:${ne.xl};display:flex;gap:${ne.sm};padding:${ne.sm};border-radius:${Oe.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Pa = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${M.textMuted};`, Tr = `font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, Re = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${ne.xs} ${ne.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${ne.xs} ${ne.md};border:1px solid transparent;border-radius:${Oe.pill};font-family:inherit;font-size:${Q.small};color:${M.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${M.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${M.btnBg};border-color:${M.btnBorder};color:${M.textPrimary};`,
  active: `cursor:pointer;background:${M.cardBgActive};border-color:${M.btnBorder};color:${M.textPrimary};`
}, Or = `font-size:${Q.small};line-height:1.6;color:${M.textMuted2};`, Aa = ["debug", "gufe-debug"], Ra = "debug", Na = "GUFE_VIZ_DEBUG";
function Ma() {
  return !!globalThis[Na];
}
function Ta() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Aa.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function xi(e) {
  return e?.hasAttribute?.(Ra) ? !0 : Ma() || Ta();
}
function Oa(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function Fa(e, t, n) {
  if (!xi(n)) return;
  const r = Oa(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const Pi = "GUFE_VIZ_VIEW_STATE";
function za(e) {
  const t = globalThis[Pi];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Ia = 150, vo = "data-gufe-shell";
class Ee extends HTMLElement {
  #n = null;
  #e = null;
  #t = null;
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
    this.#n = t, this.isConnected && this.#a();
  }
  get payload() {
    return this.#n;
  }
  connectedCallback() {
    this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${vo}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Ia);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#i(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #i() {
    if (this.#s++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#e?.cleanup)
      try {
        this.#e.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
      }
    this.#e = null, this.replaceChildren(), this.#t = null;
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
    return this.#i(), this.#t = O(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
    ), this.#t.setAttribute(vo, ""), this.appendChild(this.#t), this.#t;
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
    if (this.#n == null) {
      t.appendChild(pe(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#n);
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
    if (n !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (r) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", r);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, n, r) {
    n === this.#s && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(pe(`Failed to render: ${me(r)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
  /**
   * What the mounted view would need to be restored as it is now, or null when
   * it has nothing to say. See `ViewHandle.viewState`.
   */
  viewState() {
    return this.#e?.viewState?.() ?? null;
  }
}
function xe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const ke = "gufe-viz:", et = /* @__PURE__ */ new Map();
let Dt = null;
function ja() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function It() {
  if (Dt === !1) return null;
  const e = ja();
  if (!e)
    return Dt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Dt = !0, e;
  } catch {
    return Dt = !1, null;
  }
}
function Da(e) {
  const t = It();
  if (!t) return et.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function La(e, t) {
  const n = It();
  if (!n) {
    et.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    et.set(ke + e, t);
  }
}
function Gn(e, t, n) {
  return {
    key: e,
    get() {
      const r = Da(e);
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
        La(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ut(e, t, n) {
  return Gn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function ct(e, t) {
  return Gn(e, t, (n) => typeof n == "boolean");
}
function Kr(e, t, n = -1 / 0, r = 1 / 0) {
  return Gn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function _t(e, t = "") {
  return Gn(e, t, (n) => typeof n == "string");
}
function Ai() {
  const e = {}, t = It(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(et.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : et.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(o);
      } catch {
        e[r.slice(ke.length)] = o;
      }
  }
  return e;
}
function qa() {
  const e = {}, t = It(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(et.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : et.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function Va() {
  const e = It();
  if (e)
    for (const t of Object.keys(Ai()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  et.clear();
}
const Ri = "https://framejs.app", Ni = 1e4;
function Ba(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Ua = "/gufe-dev-bundle.js";
function Ha() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Ni ? e : null;
}
async function Ka() {
  const e = Ha();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Ua);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Ni ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Ga() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Wa(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(Jr)};`,
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
    `globalThis[${JSON.stringify(Pi)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Ja(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Wa(n),
    "// Built by gufe-viz's debug menu from a generated page. The bundle below is",
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
function Ya(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, s] of Object.entries(qa()))
    o.endsWith(Jr) || (r[o] = s);
  return { settings: r, views: t };
}
const Xa = (e) => `${Ri}/j/${e}`, Za = (e) => `${Ri}/j/${e}.json`;
async function Qa(e, t, n) {
  await fetch(Za(e), {
    method: "POST",
    mode: "no-cors",
    // Not `application/json`: that would make the request preflighted, and
    // framejs.app serves no OPTIONS. `text/plain` is CORS-simple and the server
    // parses the body regardless.
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify({
      js: t,
      og: { title: n, description: "Exported from gufe-viz's debug menu." }
    })
  });
}
function ec(e) {
  if (!xi()) return;
  const t = O(
    "div",
    `display:flex;flex-direction:column;gap:${ne.md};padding-top:${ne.lg};border-top:1px dashed ${M.splitBorder};`
  );
  t.appendChild(
    O(
      "div",
      `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
      "debug"
    )
  );
  const n = O("button", `${$e.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? M.errorFg : M.textMuted2;
  }, s = (i, a) => {
    const c = O("a", `color:${M.textPrimary};`, i);
    c.href = i, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(O("div", `padding-top:${ne.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const i = Ba(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, c = Ya(i), d = window.open("", "_blank"), f = Ga(), y = a, g = String(y.name || y.type || "gufe-viz"), b = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), Ka().then((v) => {
      if (!v) {
        d?.close(), b(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Qa(f, Ja(v.js, a, c), g).then(() => {
        b();
        const w = Xa(f);
        d && (d.location.href = w), s(w, v.note);
      });
    }).catch((v) => {
      b(), d?.close(), o(`Upload failed: ${v instanceof Error ? v.message : String(v)}`, !0);
    });
  }, t.appendChild(
    O(
      "div",
      `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function O(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ke(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function me(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const xt = (e) => e.toLocaleString("en-US"), at = "-", Ct = $e.base, Wn = ba;
function Jn(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const o = O("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), s = e.map((i) => {
    const a = O("button", Ct, i.label);
    return a.title = i.title || i.label, a.onmouseover = () => {
      a.style.background = $e.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === i.id ? $e.bgActive : $e.bg;
    }, a.onclick = () => {
      o.setActive(i.id), r?.set(i.id), n(i.id);
    }, o.appendChild(a), { id: i.id, btn: a };
  });
  return o.setActive = (i) => {
    t = i, s.forEach((a) => {
      a.btn.style.background = a.id === t ? $e.bgActive : $e.bg;
    });
  }, o.setActive(t), o;
}
const tc = parseFloat(ne.xl) * 2;
function Mi(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const y = o.get();
    e.some((g) => g.id === y) && (t = y);
  }
  const s = O("div", "display:flex;min-width:0;"), i = (y) => {
    s.setActive(y), o?.set(y), n(y);
  }, a = Jn(e, t, i), c = jt(e, t, i);
  c.style.display = "none", s.appendChild(a), s.appendChild(c), s.buttons = a, s.setActive = (y) => {
    t = y, a.setActive(y), c.value = y;
  };
  let d = !1;
  s.setCompact = (y) => {
    y !== d && (d = y, a.style.display = d ? "none" : "flex", c.style.display = d ? "" : "none", r.onLayout?.(d));
  };
  let f = () => {
  };
  if (r.fit) {
    const { pane: y, bar: g } = r.fit;
    let b = 0;
    f = Fi(y, (v) => {
      d || (b = g.offsetWidth || b), b && s.setCompact(b > v - tc);
    });
  }
  return s.cleanup = () => f(), s;
}
function jt(e, t, n, r) {
  const o = O("select", Wn);
  for (const i of e) {
    const a = O("option", "", i.label);
    a.value = i.id, o.appendChild(a);
  }
  let s = t;
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (s = i);
  }
  return o.value = s, o.onchange = () => {
    r?.set(o.value), n(o.value);
  }, o;
}
function Ti(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const s = O("button", Ct, e);
  s.title = r.title || e, s.setAttribute("aria-pressed", String(o));
  const i = () => {
    s.style.background = o ? $e.bgActive : $e.bg, s.setAttribute("aria-pressed", String(o));
  };
  return s.onclick = () => {
    o = !o, i(), r.remember?.set(o), n(o);
  }, i(), s;
}
function Te(e, t, n) {
  const r = O("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    O("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = O("span");
  return o.innerHTML = `${Ke(e)} <b style="color:${je.primary};">${Ke(t)}</b>`, r.appendChild(o), r;
}
function dt(e, t) {
  const n = O("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ne.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ne.md} ${ne.xxl};border-radius:${Oe.md};font-size:${Q.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function pe(e, t = !1) {
  return O(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? je.error : je.faint};`,
    e
  );
}
function kt(e) {
  const t = O("div", wa);
  return t.className = "gufe-header", t.titleEl = O(
    "span",
    `font-weight:${ge.bold};font-size:${Q.title};color:${je.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = O(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${je.muted};`
  ), t.textEl = O("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = O("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Bn(e, t, n = !1) {
  const r = O("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    O(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${je.faint};`,
      e
    )
  );
  const o = O(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${je.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Yn(e) {
  return O(
    "span",
    `padding:1px 7px;border-radius:${Oe.xl};font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Gr() {
  return O("div", xa);
}
function Oi() {
  const e = O("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = O("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Fr = "data-gufe-hide-name";
function Wr(e) {
  return !e.closest(`[${Fr}]`);
}
function Fi(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const bo = { min: 0.2, max: 0.8 }, nc = 5;
function zi(e, t, n, r = {}) {
  const o = r.min ?? bo.min, s = r.max ?? bo.max, i = O(
    "div",
    `flex:0 0 ${nc}px;align-self:stretch;touch-action:none;background:${M.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (v) => {
    a = v, e.style.flexDirection = a ? "column" : "row", i.style.cursor = a ? "row-resize" : "col-resize", i.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const v = e.getBoundingClientRect();
    return v.height > v.width;
  };
  let f = Math.min(s, Math.max(o, r.remember?.get() ?? 0.5));
  const y = () => {
    t.style.flex = `1 1 ${(f * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - f) * 100).toFixed(2)}%`;
  };
  y(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const w = d();
    w !== a && (c(w), r.onResize?.(f));
  }).observe(e);
  let g = !1;
  i.addEventListener("pointerdown", (v) => {
    g = !0, i.setPointerCapture(v.pointerId), v.preventDefault();
  }), i.addEventListener("pointermove", (v) => {
    if (!g) return;
    const w = e.getBoundingClientRect(), u = a ? w.height : w.width;
    if (u <= 0) return;
    const S = a ? v.clientY - w.top : v.clientX - w.left;
    f = Math.min(s, Math.max(o, S / u)), y();
  });
  const b = (v) => {
    g && (g = !1, i.releasePointerCapture(v.pointerId), r.remember?.set(f), r.onResize?.(f));
  };
  return i.addEventListener("pointerup", b), i.addEventListener("pointercancel", b), i;
}
function Ii(e, t) {
  e.style.setProperty(Ze.min, t ? "0" : Vn.min), e.style.setProperty(Ze.max, t ? "none" : Vn.max), e.style.setProperty(Ze.ruleX, t ? "0" : "1px"), e.style.setProperty(Ze.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? _a : "";
}
const rc = !1, Jr = ".menuOpen";
function oc() {
  const e = O("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const sc = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: oc
}, ic = sc.openFreeEnergy;
function Yr(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? rc, o = !1;
  const s = O("div", "flex-shrink:0;"), i = O("button", `${$e.base}display:inline-flex;align-items:center;gap:${ne.md};padding:${ne.sm} ${ne.lg};`);
  i.appendChild(ic()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), ec(s)), s.style.display = r ? "" : "none", i.style.background = r ? $e.bgActive : $e.bg, i.setAttribute("aria-expanded", String(r));
  }, c = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  i.onclick = () => c(!r), i.onmouseover = () => {
    i.style.background = r ? $e.bgActive : $e.bgHover;
  }, i.onmouseout = () => {
    i.style.background = r ? $e.bgActive : $e.bg;
  };
  const d = "toggleEl" in e ? e : null;
  return d && (d.toggleEl.style.marginRight = "2px"), (d ? d.toggleEl : e).appendChild(i), a(), {
    panel: s,
    isOpen: () => r,
    setOpen: c
  };
}
function ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lt = { exports: {} }, ar = {}, qe = {}, rt = {}, cr = {}, lr = {}, dr = {}, wo;
function Un() {
  return wo || (wo = 1, (function(e) {
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
        return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((C, $) => `${C}${$}`, "");
      }
      get names() {
        var p;
        return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((C, $) => ($ instanceof n && (C[$.str] = (C[$.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(S, ...p) {
      const C = [S[0]];
      let $ = 0;
      for (; $ < p.length; )
        a(C, p[$]), C.push(S[++$]);
      return new r(C);
    }
    e._ = o;
    const s = new r("+");
    function i(S, ...p) {
      const C = [b(S[0])];
      let $ = 0;
      for (; $ < p.length; )
        C.push(s), a(C, p[$]), C.push(s, b(S[++$]));
      return c(C), new r(C);
    }
    e.str = i;
    function a(S, p) {
      p instanceof r ? S.push(...p._items) : p instanceof n ? S.push(p) : S.push(y(p));
    }
    e.addCodeArg = a;
    function c(S) {
      let p = 1;
      for (; p < S.length - 1; ) {
        if (S[p] === s) {
          const C = d(S[p - 1], S[p + 1]);
          if (C !== void 0) {
            S.splice(p - 1, 3, C);
            continue;
          }
          S[p++] = "+";
        }
        p++;
      }
    }
    function d(S, p) {
      if (p === '""')
        return S;
      if (S === '""')
        return p;
      if (typeof S == "string")
        return p instanceof n || S[S.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${S.slice(0, -1)}${p}"` : p[0] === '"' ? S.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !(S instanceof n))
        return `"${S}${p.slice(1)}`;
    }
    function f(S, p) {
      return p.emptyStr() ? S : S.emptyStr() ? p : i`${S}${p}`;
    }
    e.strConcat = f;
    function y(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : b(Array.isArray(S) ? S.join(",") : S);
    }
    function g(S) {
      return new r(b(S));
    }
    e.stringify = g;
    function b(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function v(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new r(`.${S}`) : o`[${S}]`;
    }
    e.getProperty = v;
    function w(S) {
      if (typeof S == "string" && e.IDENTIFIER.test(S))
        return new r(`${S}`);
      throw new Error(`CodeGen: invalid export name: ${S}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function u(S) {
      return new r(S.toString());
    }
    e.regexpCode = u;
  })(dr)), dr;
}
var ur = {}, _o;
function So() {
  return _o || (_o = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Un();
    class n extends Error {
      constructor(d) {
        super(`CodeGen: "code" for ${d} not defined`), this.value = d.value;
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
      constructor({ prefixes: d, parent: f } = {}) {
        this._names = {}, this._prefixes = d, this._parent = f;
      }
      toName(d) {
        return d instanceof t.Name ? d : this.name(d);
      }
      name(d) {
        return new t.Name(this._newName(d));
      }
      _newName(d) {
        const f = this._names[d] || this._nameGroup(d);
        return `${d}${f.index++}`;
      }
      _nameGroup(d) {
        var f, y;
        if (!((y = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || y === void 0) && y.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(d, f) {
        super(f), this.prefix = d;
      }
      setValue(d, { property: f, itemIndex: y }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(f)}[${y}]`;
      }
    }
    e.ValueScopeName = s;
    const i = (0, t._)`\n`;
    class a extends o {
      constructor(d) {
        super(d), this._values = {}, this._scope = d.scope, this.opts = { ...d, _n: d.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(d) {
        return new s(d, this._newName(d));
      }
      value(d, f) {
        var y;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const g = this.toName(d), { prefix: b } = g, v = (y = f.key) !== null && y !== void 0 ? y : f.ref;
        let w = this._values[b];
        if (w) {
          const p = w.get(v);
          if (p)
            return p;
        } else
          w = this._values[b] = /* @__PURE__ */ new Map();
        w.set(v, g);
        const u = this._scope[b] || (this._scope[b] = []), S = u.length;
        return u[S] = f.ref, g.setValue(f, { property: b, itemIndex: S }), g;
      }
      getValue(d, f) {
        const y = this._values[d];
        if (y)
          return y.get(f);
      }
      scopeRefs(d, f = this._values) {
        return this._reduceValues(f, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${d}${y.scopePath}`;
        });
      }
      scopeCode(d = this._values, f, y) {
        return this._reduceValues(d, (g) => {
          if (g.value === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return g.value.code;
        }, f, y);
      }
      _reduceValues(d, f, y = {}, g) {
        let b = t.nil;
        for (const v in d) {
          const w = d[v];
          if (!w)
            continue;
          const u = y[v] = y[v] || /* @__PURE__ */ new Map();
          w.forEach((S) => {
            if (u.has(S))
              return;
            u.set(S, r.Started);
            let p = f(S);
            if (p) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${C} ${S} = ${p};${this.opts._n}`;
            } else if (p = g?.(S))
              b = (0, t._)`${b}${p}${this.opts._n}`;
            else
              throw new n(S);
            u.set(S, r.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = a;
  })(ur)), ur;
}
var Co;
function se() {
  return Co || (Co = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ So();
    var r = /* @__PURE__ */ Un();
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
    var o = /* @__PURE__ */ So();
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
    class s {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_, k) {
        return this;
      }
    }
    class i extends s {
      constructor(_, k, D) {
        super(), this.varKind = _, this.name = k, this.rhs = D;
      }
      render({ es5: _, _n: k }) {
        const D = _ ? n.varKinds.var : this.varKind, G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${D} ${this.name}${G};` + k;
      }
      optimizeNames(_, k) {
        if (_[this.name.str])
          return this.rhs && (this.rhs = z(this.rhs, _, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends s {
      constructor(_, k, D) {
        super(), this.lhs = _, this.rhs = k, this.sideEffects = D;
      }
      render({ _n: _ }) {
        return `${this.lhs} = ${this.rhs};` + _;
      }
      optimizeNames(_, k) {
        if (!(this.lhs instanceof t.Name && !_[this.lhs.str] && !this.sideEffects))
          return this.rhs = z(this.rhs, _, k), this;
      }
      get names() {
        const _ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return V(_, this.rhs);
      }
    }
    class c extends a {
      constructor(_, k, D, G) {
        super(_, D, G), this.op = k;
      }
      render({ _n: _ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _;
      }
    }
    class d extends s {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `${this.label}:` + _;
      }
    }
    class f extends s {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + _;
      }
    }
    class y extends s {
      constructor(_) {
        super(), this.error = _;
      }
      render({ _n: _ }) {
        return `throw ${this.error};` + _;
      }
      get names() {
        return this.error.names;
      }
    }
    class g extends s {
      constructor(_) {
        super(), this.code = _;
      }
      render({ _n: _ }) {
        return `${this.code};` + _;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(_, k) {
        return this.code = z(this.code, _, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class b extends s {
      constructor(_ = []) {
        super(), this.nodes = _;
      }
      render(_) {
        return this.nodes.reduce((k, D) => k + D.render(_), "");
      }
      optimizeNodes() {
        const { nodes: _ } = this;
        let k = _.length;
        for (; k--; ) {
          const D = _[k].optimizeNodes();
          Array.isArray(D) ? _.splice(k, 1, ...D) : D ? _[k] = D : _.splice(k, 1);
        }
        return _.length > 0 ? this : void 0;
      }
      optimizeNames(_, k) {
        const { nodes: D } = this;
        let G = D.length;
        for (; G--; ) {
          const U = D[G];
          U.optimizeNames(_, k) || (K(_, U.names), D.splice(G, 1));
        }
        return D.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((_, k) => F(_, k.names), {});
      }
    }
    class v extends b {
      render(_) {
        return "{" + _._n + super.render(_) + "}" + _._n;
      }
    }
    class w extends b {
    }
    class u extends v {
    }
    u.kind = "else";
    class S extends v {
      constructor(_, k) {
        super(k), this.condition = _;
      }
      render(_) {
        let k = `if(${this.condition})` + super.render(_);
        return this.else && (k += "else " + this.else.render(_)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const _ = this.condition;
        if (_ === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const D = k.optimizeNodes();
          k = this.else = Array.isArray(D) ? new u(D) : D;
        }
        if (k)
          return _ === !1 ? k instanceof S ? k : k.nodes : this.nodes.length ? this : new S(Y(_), k instanceof S ? [k] : k.nodes);
        if (!(_ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(_, k) {
        var D;
        if (this.else = (D = this.else) === null || D === void 0 ? void 0 : D.optimizeNames(_, k), !!(super.optimizeNames(_, k) || this.else))
          return this.condition = z(this.condition, _, k), this;
      }
      get names() {
        const _ = super.names;
        return V(_, this.condition), this.else && F(_, this.else.names), _;
      }
    }
    S.kind = "if";
    class p extends v {
    }
    p.kind = "for";
    class C extends p {
      constructor(_) {
        super(), this.iteration = _;
      }
      render(_) {
        return `for(${this.iteration})` + super.render(_);
      }
      optimizeNames(_, k) {
        if (super.optimizeNames(_, k))
          return this.iteration = z(this.iteration, _, k), this;
      }
      get names() {
        return F(super.names, this.iteration.names);
      }
    }
    class $ extends p {
      constructor(_, k, D, G) {
        super(), this.varKind = _, this.name = k, this.from = D, this.to = G;
      }
      render(_) {
        const k = _.es5 ? n.varKinds.var : this.varKind, { name: D, from: G, to: U } = this;
        return `for(${k} ${D}=${G}; ${D}<${U}; ${D}++)` + super.render(_);
      }
      get names() {
        const _ = V(super.names, this.from);
        return V(_, this.to);
      }
    }
    class l extends p {
      constructor(_, k, D, G) {
        super(), this.loop = _, this.varKind = k, this.name = D, this.iterable = G;
      }
      render(_) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(_);
      }
      optimizeNames(_, k) {
        if (super.optimizeNames(_, k))
          return this.iterable = z(this.iterable, _, k), this;
      }
      get names() {
        return F(super.names, this.iterable.names);
      }
    }
    class h extends v {
      constructor(_, k, D) {
        super(), this.name = _, this.args = k, this.async = D;
      }
      render(_) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(_);
      }
    }
    h.kind = "func";
    class m extends b {
      render(_) {
        return "return " + super.render(_);
      }
    }
    m.kind = "return";
    class x extends v {
      render(_) {
        let k = "try" + super.render(_);
        return this.catch && (k += this.catch.render(_)), this.finally && (k += this.finally.render(_)), k;
      }
      optimizeNodes() {
        var _, k;
        return super.optimizeNodes(), (_ = this.catch) === null || _ === void 0 || _.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(_, k) {
        var D, G;
        return super.optimizeNames(_, k), (D = this.catch) === null || D === void 0 || D.optimizeNames(_, k), (G = this.finally) === null || G === void 0 || G.optimizeNames(_, k), this;
      }
      get names() {
        const _ = super.names;
        return this.catch && F(_, this.catch.names), this.finally && F(_, this.finally.names), _;
      }
    }
    class P extends v {
      constructor(_) {
        super(), this.error = _;
      }
      render(_) {
        return `catch(${this.error})` + super.render(_);
      }
    }
    P.kind = "catch";
    class I extends v {
      render(_) {
        return "finally" + super.render(_);
      }
    }
    I.kind = "finally";
    class L {
      constructor(_, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = _, this._scope = new n.Scope({ parent: _ }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(_) {
        return this._scope.name(_);
      }
      // reserves unique name in the external scope
      scopeName(_) {
        return this._extScope.name(_);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(_, k) {
        const D = this._extScope.value(_, k);
        return (this._values[D.prefix] || (this._values[D.prefix] = /* @__PURE__ */ new Set())).add(D), D;
      }
      getScopeValue(_, k) {
        return this._extScope.getValue(_, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(_) {
        return this._extScope.scopeRefs(_, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(_, k, D, G) {
        const U = this._scope.toName(k);
        return D !== void 0 && G && (this._constants[U.str] = D), this._leafNode(new i(_, U, D)), U;
      }
      // `const` declaration (`var` in es5 mode)
      const(_, k, D) {
        return this._def(n.varKinds.const, _, k, D);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(_, k, D) {
        return this._def(n.varKinds.let, _, k, D);
      }
      // `var` declaration with optional assignment
      var(_, k, D) {
        return this._def(n.varKinds.var, _, k, D);
      }
      // assignment code
      assign(_, k, D) {
        return this._leafNode(new a(_, k, D));
      }
      // `+=` code
      add(_, k) {
        return this._leafNode(new c(_, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(_) {
        return typeof _ == "function" ? _() : _ !== t.nil && this._leafNode(new g(_)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(..._) {
        const k = ["{"];
        for (const [D, G] of _)
          k.length > 1 && k.push(","), k.push(D), (D !== G || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, G));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(_, k, D) {
        if (this._blockNode(new S(_)), k && D)
          this.code(k).else().code(D).endIf();
        else if (k)
          this.code(k).endIf();
        else if (D)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(_) {
        return this._elseNode(new S(_));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, u);
      }
      _for(_, k) {
        return this._blockNode(_), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(_, k) {
        return this._for(new C(_), k);
      }
      // `for` statement for a range of values
      forRange(_, k, D, G, U = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Z = this._scope.toName(_);
        return this._for(new $(U, Z, k, D), () => G(Z));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(_, k, D, G = n.varKinds.const) {
        const U = this._scope.toName(_);
        if (this.opts.es5) {
          const Z = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${Z}.length`, (te) => {
            this.var(U, (0, t._)`${Z}[${te}]`), D(U);
          });
        }
        return this._for(new l("of", G, U, k), () => D(U));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(_, k, D, G = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(_, (0, t._)`Object.keys(${k})`, D);
        const U = this._scope.toName(_);
        return this._for(new l("in", G, U, k), () => D(U));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
      }
      // `label` statement
      label(_) {
        return this._leafNode(new d(_));
      }
      // `break` statement
      break(_) {
        return this._leafNode(new f(_));
      }
      // `return` statement
      return(_) {
        const k = new m();
        if (this._blockNode(k), this.code(_), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try(_, k, D) {
        if (!k && !D)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const G = new x();
        if (this._blockNode(G), this.code(_), k) {
          const U = this.name("e");
          this._currNode = G.catch = new P(U), k(U);
        }
        return D && (this._currNode = G.finally = new I(), this.code(D)), this._endBlockNode(P, I);
      }
      // `throw` statement
      throw(_) {
        return this._leafNode(new y(_));
      }
      // start self-balancing block
      block(_, k) {
        return this._blockStarts.push(this._nodes.length), _ && this.code(_).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(_) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const D = this._nodes.length - k;
        if (D < 0 || _ !== void 0 && D !== _)
          throw new Error(`CodeGen: wrong number of nodes: ${D} vs ${_} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(_, k = t.nil, D, G) {
        return this._blockNode(new h(_, k, D)), G && this.code(G).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
      }
      optimize(_ = 1) {
        for (; _-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(_) {
        return this._currNode.nodes.push(_), this;
      }
      _blockNode(_) {
        this._currNode.nodes.push(_), this._nodes.push(_);
      }
      _endBlockNode(_, k) {
        const D = this._currNode;
        if (D instanceof _ || k && D instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${_.kind}/${k.kind}` : _.kind}"`);
      }
      _elseNode(_) {
        const k = this._currNode;
        if (!(k instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = _, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const _ = this._nodes;
        return _[_.length - 1];
      }
      set _currNode(_) {
        const k = this._nodes;
        k[k.length - 1] = _;
      }
    }
    e.CodeGen = L;
    function F(N, _) {
      for (const k in _)
        N[k] = (N[k] || 0) + (_[k] || 0);
      return N;
    }
    function V(N, _) {
      return _ instanceof t._CodeOrName ? F(N, _.names) : N;
    }
    function z(N, _, k) {
      if (N instanceof t.Name)
        return D(N);
      if (!G(N))
        return N;
      return new t._Code(N._items.reduce((U, Z) => (Z instanceof t.Name && (Z = D(Z)), Z instanceof t._Code ? U.push(...Z._items) : U.push(Z), U), []));
      function D(U) {
        const Z = k[U.str];
        return Z === void 0 || _[U.str] !== 1 ? U : (delete _[U.str], Z);
      }
      function G(U) {
        return U instanceof t._Code && U._items.some((Z) => Z instanceof t.Name && _[Z.str] === 1 && k[Z.str] !== void 0);
      }
    }
    function K(N, _) {
      for (const k in _)
        N[k] = (N[k] || 0) - (_[k] || 0);
    }
    function Y(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${j(N)}`;
    }
    e.not = Y;
    const re = E(e.operators.AND);
    function q(...N) {
      return N.reduce(re);
    }
    e.and = q;
    const W = E(e.operators.OR);
    function R(...N) {
      return N.reduce(W);
    }
    e.or = R;
    function E(N) {
      return (_, k) => _ === t.nil ? k : k === t.nil ? _ : (0, t._)`${j(_)} ${N} ${j(k)}`;
    }
    function j(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(lr)), lr;
}
var ae = {}, ko;
function ce() {
  if (ko) return ae;
  ko = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.checkStrictMode = ae.getErrorPath = ae.Type = ae.useFunc = ae.setEvaluated = ae.evaluatedPropsToName = ae.mergeEvaluated = ae.eachItem = ae.unescapeJsonPointer = ae.escapeJsonPointer = ae.escapeFragment = ae.unescapeFragment = ae.schemaRefOrVal = ae.schemaHasRulesButRef = ae.schemaHasRules = ae.checkUnknownRules = ae.alwaysValidSchema = ae.toHash = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Un();
  function n(l) {
    const h = {};
    for (const m of l)
      h[m] = !0;
    return h;
  }
  ae.toHash = n;
  function r(l, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (o(l, h), !s(h, l.self.RULES.all));
  }
  ae.alwaysValidSchema = r;
  function o(l, h = l.schema) {
    const { opts: m, self: x } = l;
    if (!m.strictSchema || typeof h == "boolean")
      return;
    const P = x.RULES.keywords;
    for (const I in h)
      P[I] || $(l, `unknown keyword: "${I}"`);
  }
  ae.checkUnknownRules = o;
  function s(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (h[m])
        return !0;
    return !1;
  }
  ae.schemaHasRules = s;
  function i(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (m !== "$ref" && h.all[m])
        return !0;
    return !1;
  }
  ae.schemaHasRulesButRef = i;
  function a({ topSchemaRef: l, schemaPath: h }, m, x, P) {
    if (!P) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
    }
    return (0, e._)`${l}${h}${(0, e.getProperty)(x)}`;
  }
  ae.schemaRefOrVal = a;
  function c(l) {
    return y(decodeURIComponent(l));
  }
  ae.unescapeFragment = c;
  function d(l) {
    return encodeURIComponent(f(l));
  }
  ae.escapeFragment = d;
  function f(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ae.escapeJsonPointer = f;
  function y(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ae.unescapeJsonPointer = y;
  function g(l, h) {
    if (Array.isArray(l))
      for (const m of l)
        h(m);
    else
      h(l);
  }
  ae.eachItem = g;
  function b({ mergeNames: l, mergeToName: h, mergeValues: m, resultToName: x }) {
    return (P, I, L, F) => {
      const V = L === void 0 ? I : L instanceof e.Name ? (I instanceof e.Name ? l(P, I, L) : h(P, I, L), L) : I instanceof e.Name ? (h(P, L, I), I) : m(I, L);
      return F === e.Name && !(V instanceof e.Name) ? x(P, V) : V;
    };
  }
  ae.mergeEvaluated = {
    props: b({
      mergeNames: (l, h, m) => l.if((0, e._)`${m} !== true && ${h} !== undefined`, () => {
        l.if((0, e._)`${h} === true`, () => l.assign(m, !0), () => l.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${h})`));
      }),
      mergeToName: (l, h, m) => l.if((0, e._)`${m} !== true`, () => {
        h === !0 ? l.assign(m, !0) : (l.assign(m, (0, e._)`${m} || {}`), w(l, m, h));
      }),
      mergeValues: (l, h) => l === !0 ? !0 : { ...l, ...h },
      resultToName: v
    }),
    items: b({
      mergeNames: (l, h, m) => l.if((0, e._)`${m} !== true && ${h} !== undefined`, () => l.assign(m, (0, e._)`${h} === true ? true : ${m} > ${h} ? ${m} : ${h}`)),
      mergeToName: (l, h, m) => l.if((0, e._)`${m} !== true`, () => l.assign(m, h === !0 ? !0 : (0, e._)`${m} > ${h} ? ${m} : ${h}`)),
      mergeValues: (l, h) => l === !0 ? !0 : Math.max(l, h),
      resultToName: (l, h) => l.var("items", h)
    })
  };
  function v(l, h) {
    if (h === !0)
      return l.var("props", !0);
    const m = l.var("props", (0, e._)`{}`);
    return h !== void 0 && w(l, m, h), m;
  }
  ae.evaluatedPropsToName = v;
  function w(l, h, m) {
    Object.keys(m).forEach((x) => l.assign((0, e._)`${h}${(0, e.getProperty)(x)}`, !0));
  }
  ae.setEvaluated = w;
  const u = {};
  function S(l, h) {
    return l.scopeValue("func", {
      ref: h,
      code: u[h.code] || (u[h.code] = new t._Code(h.code))
    });
  }
  ae.useFunc = S;
  var p;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(p || (ae.Type = p = {}));
  function C(l, h, m) {
    if (l instanceof e.Name) {
      const x = h === p.Num;
      return m ? x ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : x ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(l).toString() : "/" + f(l);
  }
  ae.getErrorPath = C;
  function $(l, h, m = l.opts.strictSchema) {
    if (m) {
      if (h = `strict mode: ${h}`, m === !0)
        throw new Error(h);
      l.self.logger.warn(h);
    }
  }
  return ae.checkStrictMode = $, ae;
}
var qt = {}, Eo;
function Fe() {
  if (Eo) return qt;
  Eo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
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
  return qt.default = t, qt;
}
var xo;
function Xn() {
  return xo || (xo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: S }) => S ? (0, t.str)`"${u}" keyword must be ${S} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, S = e.keywordError, p, C) {
      const { it: $ } = u, { gen: l, compositeRule: h, allErrors: m } = $, x = y(u, S, p);
      C ?? (h || m) ? c(l, x) : d($, (0, t._)`[${x}]`);
    }
    e.reportError = o;
    function s(u, S = e.keywordError, p) {
      const { it: C } = u, { gen: $, compositeRule: l, allErrors: h } = C, m = y(u, S, p);
      c($, m), l || h || d(C, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(u, S) {
      u.assign(r.default.errors, S), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(S, () => u.assign((0, t._)`${r.default.vErrors}.length`, S), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: u, keyword: S, schemaValue: p, data: C, errsCount: $, it: l }) {
      if ($ === void 0)
        throw new Error("ajv implementation error");
      const h = u.name("err");
      u.forRange("i", $, r.default.errors, (m) => {
        u.const(h, (0, t._)`${r.default.vErrors}[${m}]`), u.if((0, t._)`${h}.instancePath === undefined`, () => u.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (u.assign((0, t._)`${h}.schema`, p), u.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(u, S) {
      const p = u.const("err", S);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, S) {
      const { gen: p, validateName: C, schemaEnv: $ } = u;
      $.$async ? p.throw((0, t._)`new ${u.ValidationError}(${S})`) : (p.assign((0, t._)`${C}.errors`, S), p.return(!1));
    }
    const f = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function y(u, S, p) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : g(u, S, p);
    }
    function g(u, S, p = {}) {
      const { gen: C, it: $ } = u, l = [
        b($, p),
        v(u, p)
      ];
      return w(u, S, l), C.object(...l);
    }
    function b({ errorPath: u }, { instancePath: S }) {
      const p = S ? (0, t.str)`${u}${(0, n.getErrorPath)(S, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, p)];
    }
    function v({ keyword: u, it: { errSchemaPath: S } }, { schemaPath: p, parentSchema: C }) {
      let $ = C ? S : (0, t.str)`${S}/${u}`;
      return p && ($ = (0, t.str)`${$}${(0, n.getErrorPath)(p, n.Type.Str)}`), [f.schemaPath, $];
    }
    function w(u, { params: S, message: p }, C) {
      const { keyword: $, data: l, schemaValue: h, it: m } = u, { opts: x, propertyName: P, topSchemaRef: I, schemaPath: L } = m;
      C.push([f.keyword, $], [f.params, typeof S == "function" ? S(u) : S || (0, t._)`{}`]), x.messages && C.push([f.message, typeof p == "function" ? p(u) : p]), x.verbose && C.push([f.schema, h], [f.parentSchema, (0, t._)`${I}${L}`], [r.default.data, l]), P && C.push([f.propertyName, P]);
    }
  })(cr)), cr;
}
var Po;
function cc() {
  if (Po) return rt;
  Po = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.boolOrEmptySchema = rt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Fe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: f } = a;
    d === !1 ? i(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  rt.topBoolOrEmptySchema = o;
  function s(a, c) {
    const { gen: d, schema: f } = a;
    f === !1 ? (d.var(c, !1), i(a)) : d.var(c, !0);
  }
  rt.boolOrEmptySchema = s;
  function i(a, c) {
    const { gen: d, data: f } = a, y = {
      gen: d,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(y, r, void 0, c);
  }
  return rt;
}
var ye = {}, ot = {}, Ao;
function ji() {
  if (Ao) return ot;
  Ao = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.getRules = ot.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  ot.isJSONType = n;
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
  return ot.getRules = r, ot;
}
var Ve = {}, Ro;
function Di() {
  if (Ro) return Ve;
  Ro = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.shouldUseRule = Ve.shouldUseGroup = Ve.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, s) {
    const i = o.RULES.types[s];
    return i && i !== !0 && t(r, i);
  }
  Ve.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((s) => n(r, s));
  }
  Ve.shouldUseGroup = t;
  function n(r, o) {
    var s;
    return r[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((i) => r[i] !== void 0));
  }
  return Ve.shouldUseRule = n, Ve;
}
var No;
function Hn() {
  if (No) return ye;
  No = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.reportTypeError = ye.checkDataTypes = ye.checkDataType = ye.coerceAndCheckDataType = ye.getJSONTypes = ye.getSchemaTypes = ye.DataType = void 0;
  const e = /* @__PURE__ */ ji(), t = /* @__PURE__ */ Di(), n = /* @__PURE__ */ Xn(), r = /* @__PURE__ */ se(), o = /* @__PURE__ */ ce();
  var s;
  (function(p) {
    p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
  })(s || (ye.DataType = s = {}));
  function i(p) {
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
  ye.getSchemaTypes = i;
  function a(p) {
    const C = Array.isArray(p) ? p : p ? [p] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  ye.getJSONTypes = a;
  function c(p, C) {
    const { gen: $, data: l, opts: h } = p, m = f(C, h.coerceTypes), x = C.length > 0 && !(m.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(p, C[0]));
    if (x) {
      const P = v(C, l, h.strictNumbers, s.Wrong);
      $.if(P, () => {
        m.length ? y(p, C, m) : u(p);
      });
    }
    return x;
  }
  ye.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(p, C) {
    return C ? p.filter(($) => d.has($) || C === "array" && $ === "array") : [];
  }
  function y(p, C, $) {
    const { gen: l, data: h, opts: m } = p, x = l.let("dataType", (0, r._)`typeof ${h}`), P = l.let("coerced", (0, r._)`undefined`);
    m.coerceTypes === "array" && l.if((0, r._)`${x} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => l.assign(h, (0, r._)`${h}[0]`).assign(x, (0, r._)`typeof ${h}`).if(v(C, h, m.strictNumbers), () => l.assign(P, h))), l.if((0, r._)`${P} !== undefined`);
    for (const L of $)
      (d.has(L) || L === "array" && m.coerceTypes === "array") && I(L);
    l.else(), u(p), l.endIf(), l.if((0, r._)`${P} !== undefined`, () => {
      l.assign(h, P), g(p, P);
    });
    function I(L) {
      switch (L) {
        case "string":
          l.elseIf((0, r._)`${x} == "number" || ${x} == "boolean"`).assign(P, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${x} == "boolean" || ${h} === null
              || (${x} == "string" && ${h} && ${h} == +${h})`).assign(P, (0, r._)`+${h}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${x} === "boolean" || ${h} === null
              || (${x} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(P, (0, r._)`+${h}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(P, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(P, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), l.assign(P, null);
          return;
        case "array":
          l.elseIf((0, r._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${h} === null`).assign(P, (0, r._)`[${h}]`);
      }
    }
  }
  function g({ gen: p, parentData: C, parentDataProperty: $ }, l) {
    p.if((0, r._)`${C} !== undefined`, () => p.assign((0, r._)`${C}[${$}]`, l));
  }
  function b(p, C, $, l = s.Correct) {
    const h = l === s.Correct ? r.operators.EQ : r.operators.NEQ;
    let m;
    switch (p) {
      case "null":
        return (0, r._)`${C} ${h} null`;
      case "array":
        m = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        m = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        m = x((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        m = x();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${p}`;
    }
    return l === s.Correct ? m : (0, r.not)(m);
    function x(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, P, $ ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ye.checkDataType = b;
  function v(p, C, $, l) {
    if (p.length === 1)
      return b(p[0], C, $, l);
    let h;
    const m = (0, o.toHash)(p);
    if (m.array && m.object) {
      const x = (0, r._)`typeof ${C} != "object"`;
      h = m.null ? x : (0, r._)`!${C} || ${x}`, delete m.null, delete m.array, delete m.object;
    } else
      h = r.nil;
    m.number && delete m.integer;
    for (const x in m)
      h = (0, r.and)(h, b(x, C, $, l));
    return h;
  }
  ye.checkDataTypes = v;
  const w = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: C }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${C}}`
  };
  function u(p) {
    const C = S(p);
    (0, n.reportError)(C, w);
  }
  ye.reportTypeError = u;
  function S(p) {
    const { gen: C, data: $, schema: l } = p, h = (0, o.schemaRefOrVal)(p, l, "type");
    return {
      gen: C,
      keyword: "type",
      data: $,
      schema: l.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: l,
      params: {},
      it: p
    };
  }
  return ye;
}
var Pt = {}, Mo;
function lc() {
  if (Mo) return Pt;
  Mo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.assignDefaults = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce();
  function n(o, s) {
    const { properties: i, items: a } = o.schema;
    if (s === "object" && i)
      for (const c in i)
        r(o, c, i[c].default);
    else s === "array" && Array.isArray(a) && a.forEach((c, d) => r(o, d, c.default));
  }
  Pt.assignDefaults = n;
  function r(o, s, i) {
    const { gen: a, compositeRule: c, data: d, opts: f } = o;
    if (i === void 0)
      return;
    const y = (0, e._)`${d}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${y}`);
      return;
    }
    let g = (0, e._)`${y} === undefined`;
    f.useDefaults === "empty" && (g = (0, e._)`${g} || ${y} === null || ${y} === ""`), a.if(g, (0, e._)`${y} = ${(0, e.stringify)(i)}`);
  }
  return Pt;
}
var Ae = {}, ue = {}, To;
function ze() {
  if (To) return ue;
  To = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.validateUnion = ue.validateArray = ue.usePattern = ue.callValidateCode = ue.schemaProperties = ue.allSchemaProperties = ue.noPropertyInData = ue.propertyInData = ue.isOwnProperty = ue.hasPropFunc = ue.reportMissingProp = ue.checkMissingProp = ue.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ ce();
  function o(p, C) {
    const { gen: $, data: l, it: h } = p;
    $.if(f($, l, C, h.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${C}` }, !0), p.error();
    });
  }
  ue.checkReportMissingProp = o;
  function s({ gen: p, data: C, it: { opts: $ } }, l, h) {
    return (0, e.or)(...l.map((m) => (0, e.and)(f(p, C, m, $.ownProperties), (0, e._)`${h} = ${m}`)));
  }
  ue.checkMissingProp = s;
  function i(p, C) {
    p.setParams({ missingProperty: C }, !0), p.error();
  }
  ue.reportMissingProp = i;
  function a(p) {
    return p.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ue.hasPropFunc = a;
  function c(p, C, $) {
    return (0, e._)`${a(p)}.call(${C}, ${$})`;
  }
  ue.isOwnProperty = c;
  function d(p, C, $, l) {
    const h = (0, e._)`${C}${(0, e.getProperty)($)} !== undefined`;
    return l ? (0, e._)`${h} && ${c(p, C, $)}` : h;
  }
  ue.propertyInData = d;
  function f(p, C, $, l) {
    const h = (0, e._)`${C}${(0, e.getProperty)($)} === undefined`;
    return l ? (0, e.or)(h, (0, e.not)(c(p, C, $))) : h;
  }
  ue.noPropertyInData = f;
  function y(p) {
    return p ? Object.keys(p).filter((C) => C !== "__proto__") : [];
  }
  ue.allSchemaProperties = y;
  function g(p, C) {
    return y(C).filter(($) => !(0, t.alwaysValidSchema)(p, C[$]));
  }
  ue.schemaProperties = g;
  function b({ schemaCode: p, data: C, it: { gen: $, topSchemaRef: l, schemaPath: h, errorPath: m }, it: x }, P, I, L) {
    const F = L ? (0, e._)`${p}, ${C}, ${l}${h}` : C, V = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && V.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const z = (0, e._)`${F}, ${$.object(...V)}`;
    return I !== e.nil ? (0, e._)`${P}.call(${I}, ${z})` : (0, e._)`${P}(${z})`;
  }
  ue.callValidateCode = b;
  const v = (0, e._)`new RegExp`;
  function w({ gen: p, it: { opts: C } }, $) {
    const l = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, m = h($, l);
    return p.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${h.code === "new RegExp" ? v : (0, r.useFunc)(p, h)}(${$}, ${l})`
    });
  }
  ue.usePattern = w;
  function u(p) {
    const { gen: C, data: $, keyword: l, it: h } = p, m = C.name("valid");
    if (h.allErrors) {
      const P = C.let("valid", !0);
      return x(() => C.assign(P, !1)), P;
    }
    return C.var(m, !0), x(() => C.break()), m;
    function x(P) {
      const I = C.const("len", (0, e._)`${$}.length`);
      C.forRange("i", 0, I, (L) => {
        p.subschema({
          keyword: l,
          dataProp: L,
          dataPropType: t.Type.Num
        }, m), C.if((0, e.not)(m), P);
      });
    }
  }
  ue.validateArray = u;
  function S(p) {
    const { gen: C, schema: $, keyword: l, it: h } = p;
    if (!Array.isArray($))
      throw new Error("ajv implementation error");
    if ($.some((I) => (0, t.alwaysValidSchema)(h, I)) && !h.opts.unevaluated)
      return;
    const x = C.let("valid", !1), P = C.name("_valid");
    C.block(() => $.forEach((I, L) => {
      const F = p.subschema({
        keyword: l,
        schemaProp: L,
        compositeRule: !0
      }, P);
      C.assign(x, (0, e._)`${x} || ${P}`), p.mergeValidEvaluated(F, P) || C.if((0, e.not)(x));
    })), p.result(x, () => p.reset(), () => p.error(!0));
  }
  return ue.validateUnion = S, ue;
}
var Oo;
function dc() {
  if (Oo) return Ae;
  Oo = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.validateKeywordUsage = Ae.validSchemaType = Ae.funcKeywordCode = Ae.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Xn();
  function o(g, b) {
    const { gen: v, keyword: w, schema: u, parentSchema: S, it: p } = g, C = b.macro.call(p.self, u, S, p), $ = d(v, w, C);
    p.opts.validateSchema !== !1 && p.self.validateSchema(C, !0);
    const l = v.name("valid");
    g.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${w}`,
      topSchemaRef: $,
      compositeRule: !0
    }, l), g.pass(l, () => g.error(!0));
  }
  Ae.macroKeywordCode = o;
  function s(g, b) {
    var v;
    const { gen: w, keyword: u, schema: S, parentSchema: p, $data: C, it: $ } = g;
    c($, b);
    const l = !C && b.compile ? b.compile.call($.self, S, p, $) : b.validate, h = d(w, u, l), m = w.let("valid");
    g.block$data(m, x), g.ok((v = b.valid) !== null && v !== void 0 ? v : m);
    function x() {
      if (b.errors === !1)
        L(), b.modifying && i(g), F(() => g.error());
      else {
        const V = b.async ? P() : I();
        b.modifying && i(g), F(() => a(g, V));
      }
    }
    function P() {
      const V = w.let("ruleErrs", null);
      return w.try(() => L((0, e._)`await `), (z) => w.assign(m, !1).if((0, e._)`${z} instanceof ${$.ValidationError}`, () => w.assign(V, (0, e._)`${z}.errors`), () => w.throw(z))), V;
    }
    function I() {
      const V = (0, e._)`${h}.errors`;
      return w.assign(V, null), L(e.nil), V;
    }
    function L(V = b.async ? (0, e._)`await ` : e.nil) {
      const z = $.opts.passContext ? t.default.this : t.default.self, K = !("compile" in b && !C || b.schema === !1);
      w.assign(m, (0, e._)`${V}${(0, n.callValidateCode)(g, h, z, K)}`, b.modifying);
    }
    function F(V) {
      var z;
      w.if((0, e.not)((z = b.valid) !== null && z !== void 0 ? z : m), V);
    }
  }
  Ae.funcKeywordCode = s;
  function i(g) {
    const { gen: b, data: v, it: w } = g;
    b.if(w.parentData, () => b.assign(v, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(g, b) {
    const { gen: v } = g;
    v.if((0, e._)`Array.isArray(${b})`, () => {
      v.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(g);
    }, () => g.error());
  }
  function c({ schemaEnv: g }, b) {
    if (b.async && !g.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(g, b, v) {
    if (v === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return g.scopeValue("keyword", typeof v == "function" ? { ref: v } : { ref: v, code: (0, e.stringify)(v) });
  }
  function f(g, b, v = !1) {
    return !b.length || b.some((w) => w === "array" ? Array.isArray(g) : w === "object" ? g && typeof g == "object" && !Array.isArray(g) : typeof g == w || v && typeof g > "u");
  }
  Ae.validSchemaType = f;
  function y({ schema: g, opts: b, self: v, errSchemaPath: w }, u, S) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(S) : u.keyword !== S)
      throw new Error("ajv implementation error");
    const p = u.dependencies;
    if (p?.some((C) => !Object.prototype.hasOwnProperty.call(g, C)))
      throw new Error(`parent schema must have dependencies of ${S}: ${p.join(",")}`);
    if (u.validateSchema && !u.validateSchema(g[S])) {
      const $ = `keyword "${S}" value is invalid at path "${w}": ` + v.errorsText(u.validateSchema.errors);
      if (b.validateSchema === "log")
        v.logger.error($);
      else
        throw new Error($);
    }
  }
  return Ae.validateKeywordUsage = y, Ae;
}
var Be = {}, Fo;
function uc() {
  if (Fo) return Be;
  Fo = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce();
  function n(s, { keyword: i, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: f, topSchemaRef: y }) {
    if (i !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const g = s.schema[i];
      return a === void 0 ? {
        schema: g,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}`
      } : {
        schema: g[a],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (d === void 0 || f === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: y,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Be.getSubschema = n;
  function r(s, i, { dataProp: a, dataPropType: c, data: d, dataTypes: f, propertyName: y }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: g } = i;
    if (a !== void 0) {
      const { errorPath: v, dataPathArr: w, opts: u } = i, S = g.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      b(S), s.errorPath = (0, e.str)`${v}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [...w, s.parentDataProperty];
    }
    if (d !== void 0) {
      const v = d instanceof e.Name ? d : g.let("data", d, !0);
      b(v), y !== void 0 && (s.propertyName = y);
    }
    f && (s.dataTypes = f);
    function b(v) {
      s.data = v, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, v];
    }
  }
  Be.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: f }) {
    c !== void 0 && (s.compositeRule = c), d !== void 0 && (s.createErrors = d), f !== void 0 && (s.allErrors = f), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return Be.extendSubschemaMode = o, Be;
}
var be = {}, fr, zo;
function Li() {
  return zo || (zo = 1, fr = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, o, s;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (o = r; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (s = Object.keys(t), r = s.length, r !== Object.keys(n).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, s[o])) return !1;
      for (o = r; o-- !== 0; ) {
        var i = s[o];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), fr;
}
var pr = { exports: {} }, Io;
function fc() {
  if (Io) return pr.exports;
  Io = 1;
  var e = pr.exports = function(r, o, s) {
    typeof o == "function" && (s = o, o = {}), s = o.cb || s;
    var i = typeof s == "function" ? s : s.pre || function() {
    }, a = s.post || function() {
    };
    t(o, i, a, r, "", r);
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
  function t(r, o, s, i, a, c, d, f, y, g) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      o(i, a, c, d, f, y, g);
      for (var b in i) {
        var v = i[b];
        if (Array.isArray(v)) {
          if (b in e.arrayKeywords)
            for (var w = 0; w < v.length; w++)
              t(r, o, s, v[w], a + "/" + b + "/" + w, c, a, b, i, w);
        } else if (b in e.propsKeywords) {
          if (v && typeof v == "object")
            for (var u in v)
              t(r, o, s, v[u], a + "/" + b + "/" + n(u), c, a, b, i, u);
        } else (b in e.keywords || r.allKeys && !(b in e.skipKeywords)) && t(r, o, s, v, a + "/" + b, c, a, b, i);
      }
      s(i, a, c, d, f, y, g);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return pr.exports;
}
var jo;
function Zn() {
  if (jo) return be;
  jo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = Li(), n = fc(), r = /* @__PURE__ */ new Set([
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
  function o(w, u = !0) {
    return typeof w == "boolean" ? !0 : u === !0 ? !i(w) : u ? a(w) <= u : !1;
  }
  be.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(w) {
    for (const u in w) {
      if (s.has(u))
        return !0;
      const S = w[u];
      if (Array.isArray(S) && S.some(i) || typeof S == "object" && i(S))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let u = 0;
    for (const S in w) {
      if (S === "$ref")
        return 1 / 0;
      if (u++, !r.has(S) && (typeof w[S] == "object" && (0, e.eachItem)(w[S], (p) => u += a(p)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c(w, u = "", S) {
    S !== !1 && (u = y(u));
    const p = w.parse(u);
    return d(w, p);
  }
  be.getFullPath = c;
  function d(w, u) {
    return w.serialize(u).split("#")[0] + "#";
  }
  be._getFullPath = d;
  const f = /#\/?$/;
  function y(w) {
    return w ? w.replace(f, "") : "";
  }
  be.normalizeId = y;
  function g(w, u, S) {
    return S = y(S), w.resolve(u, S);
  }
  be.resolveUrl = g;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function v(w, u) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: S, uriResolver: p } = this.opts, C = y(w[S] || u), $ = { "": C }, l = c(p, C, !1), h = {}, m = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (I, L, F, V) => {
      if (V === void 0)
        return;
      const z = l + L;
      let K = $[V];
      typeof I[S] == "string" && (K = Y.call(this, I[S])), re.call(this, I.$anchor), re.call(this, I.$dynamicAnchor), $[L] = K;
      function Y(q) {
        const W = this.opts.uriResolver.resolve;
        if (q = y(K ? W(K, q) : q), m.has(q))
          throw P(q);
        m.add(q);
        let R = this.refs[q];
        return typeof R == "string" && (R = this.refs[R]), typeof R == "object" ? x(I, R.schema, q) : q !== y(z) && (q[0] === "#" ? (x(I, h[q], q), h[q] = I) : this.refs[q] = z), q;
      }
      function re(q) {
        if (typeof q == "string") {
          if (!b.test(q))
            throw new Error(`invalid anchor "${q}"`);
          Y.call(this, `#${q}`);
        }
      }
    }), h;
    function x(I, L, F) {
      if (L !== void 0 && !t(I, L))
        throw P(F);
    }
    function P(I) {
      return new Error(`reference "${I}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = v, be;
}
var Do;
function Qn() {
  if (Do) return qe;
  Do = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ cc(), t = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ Di(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ lc(), s = /* @__PURE__ */ dc(), i = /* @__PURE__ */ uc(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Fe(), d = /* @__PURE__ */ Zn(), f = /* @__PURE__ */ ce(), y = /* @__PURE__ */ Xn();
  function g(A) {
    if (l(A) && (m(A), $(A))) {
      u(A);
      return;
    }
    b(A, () => (0, e.topBoolOrEmptySchema)(A));
  }
  qe.validateFunctionCode = g;
  function b({ gen: A, validateName: T, schema: B, schemaEnv: J, opts: ee }, X) {
    ee.code.es5 ? A.func(T, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      A.code((0, a._)`"use strict"; ${p(B, ee)}`), w(A, ee), A.code(X);
    }) : A.func(T, (0, a._)`${c.default.data}, ${v(ee)}`, J.$async, () => A.code(p(B, ee)).code(X));
  }
  function v(A) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${A.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(A, T) {
    A.if(c.default.valCxt, () => {
      A.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), A.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), A.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), A.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), T.dynamicRef && A.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      A.var(c.default.instancePath, (0, a._)`""`), A.var(c.default.parentData, (0, a._)`undefined`), A.var(c.default.parentDataProperty, (0, a._)`undefined`), A.var(c.default.rootData, c.default.data), T.dynamicRef && A.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(A) {
    const { schema: T, opts: B, gen: J } = A;
    b(A, () => {
      B.$comment && T.$comment && V(A), I(A), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), B.unevaluated && S(A), x(A), z(A);
    });
  }
  function S(A) {
    const { gen: T, validateName: B } = A;
    A.evaluated = T.const("evaluated", (0, a._)`${B}.evaluated`), T.if((0, a._)`${A.evaluated}.dynamicProps`, () => T.assign((0, a._)`${A.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${A.evaluated}.dynamicItems`, () => T.assign((0, a._)`${A.evaluated}.items`, (0, a._)`undefined`));
  }
  function p(A, T) {
    const B = typeof A == "object" && A[T.schemaId];
    return B && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function C(A, T) {
    if (l(A) && (m(A), $(A))) {
      h(A, T);
      return;
    }
    (0, e.boolOrEmptySchema)(A, T);
  }
  function $({ schema: A, self: T }) {
    if (typeof A == "boolean")
      return !A;
    for (const B in A)
      if (T.RULES.all[B])
        return !0;
    return !1;
  }
  function l(A) {
    return typeof A.schema != "boolean";
  }
  function h(A, T) {
    const { schema: B, gen: J, opts: ee } = A;
    ee.$comment && B.$comment && V(A), L(A), F(A);
    const X = J.const("_errs", c.default.errors);
    x(A, X), J.var(T, (0, a._)`${X} === ${c.default.errors}`);
  }
  function m(A) {
    (0, f.checkUnknownRules)(A), P(A);
  }
  function x(A, T) {
    if (A.opts.jtd)
      return Y(A, [], !1, T);
    const B = (0, t.getSchemaTypes)(A.schema), J = (0, t.coerceAndCheckDataType)(A, B);
    Y(A, B, !J, T);
  }
  function P(A) {
    const { schema: T, errSchemaPath: B, opts: J, self: ee } = A;
    T.$ref && J.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(T, ee.RULES) && ee.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function I(A) {
    const { schema: T, opts: B } = A;
    T.default !== void 0 && B.useDefaults && B.strictSchema && (0, f.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function L(A) {
    const T = A.schema[A.opts.schemaId];
    T && (A.baseId = (0, d.resolveUrl)(A.opts.uriResolver, A.baseId, T));
  }
  function F(A) {
    if (A.schema.$async && !A.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function V({ gen: A, schemaEnv: T, schema: B, errSchemaPath: J, opts: ee }) {
    const X = B.$comment;
    if (ee.$comment === !0)
      A.code((0, a._)`${c.default.self}.logger.log(${X})`);
    else if (typeof ee.$comment == "function") {
      const oe = (0, a.str)`${J}/$comment`, ie = A.scopeValue("root", { ref: T.root });
      A.code((0, a._)`${c.default.self}.opts.$comment(${X}, ${oe}, ${ie}.schema)`);
    }
  }
  function z(A) {
    const { gen: T, schemaEnv: B, validateName: J, ValidationError: ee, opts: X } = A;
    B.$async ? T.if((0, a._)`${c.default.errors} === 0`, () => T.return(c.default.data), () => T.throw((0, a._)`new ${ee}(${c.default.vErrors})`)) : (T.assign((0, a._)`${J}.errors`, c.default.vErrors), X.unevaluated && K(A), T.return((0, a._)`${c.default.errors} === 0`));
  }
  function K({ gen: A, evaluated: T, props: B, items: J }) {
    B instanceof a.Name && A.assign((0, a._)`${T}.props`, B), J instanceof a.Name && A.assign((0, a._)`${T}.items`, J);
  }
  function Y(A, T, B, J) {
    const { gen: ee, schema: X, data: oe, allErrors: ie, opts: de, self: fe } = A, { RULES: he } = fe;
    if (X.$ref && (de.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(X, he))) {
      ee.block(() => G(A, "$ref", he.all.$ref.definition));
      return;
    }
    de.jtd || q(A, T), ee.block(() => {
      for (const ve of he.rules)
        De(ve);
      De(he.post);
    });
    function De(ve) {
      (0, n.shouldUseGroup)(X, ve) && (ve.type ? (ee.if((0, r.checkDataType)(ve.type, oe, de.strictNumbers)), re(A, ve), T.length === 1 && T[0] === ve.type && B && (ee.else(), (0, r.reportTypeError)(A)), ee.endIf()) : re(A, ve), ie || ee.if((0, a._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function re(A, T) {
    const { gen: B, schema: J, opts: { useDefaults: ee } } = A;
    ee && (0, o.assignDefaults)(A, T.type), B.block(() => {
      for (const X of T.rules)
        (0, n.shouldUseRule)(J, X) && G(A, X.keyword, X.definition, T.type);
    });
  }
  function q(A, T) {
    A.schemaEnv.meta || !A.opts.strictTypes || (W(A, T), A.opts.allowUnionTypes || R(A, T), E(A, A.dataTypes));
  }
  function W(A, T) {
    if (T.length) {
      if (!A.dataTypes.length) {
        A.dataTypes = T;
        return;
      }
      T.forEach((B) => {
        N(A.dataTypes, B) || k(A, `type "${B}" not allowed by context "${A.dataTypes.join(",")}"`);
      }), _(A, T);
    }
  }
  function R(A, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && k(A, "use allowUnionTypes to allow union type keyword");
  }
  function E(A, T) {
    const B = A.self.RULES.all;
    for (const J in B) {
      const ee = B[J];
      if (typeof ee == "object" && (0, n.shouldUseRule)(A.schema, ee)) {
        const { type: X } = ee.definition;
        X.length && !X.some((oe) => j(T, oe)) && k(A, `missing type "${X.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function j(A, T) {
    return A.includes(T) || T === "number" && A.includes("integer");
  }
  function N(A, T) {
    return A.includes(T) || T === "integer" && A.includes("number");
  }
  function _(A, T) {
    const B = [];
    for (const J of A.dataTypes)
      N(T, J) ? B.push(J) : T.includes("integer") && J === "number" && B.push("integer");
    A.dataTypes = B;
  }
  function k(A, T) {
    const B = A.schemaEnv.baseId + A.errSchemaPath;
    T += ` at "${B}" (strictTypes)`, (0, f.checkStrictMode)(A, T, A.opts.strictTypes);
  }
  class D {
    constructor(T, B, J) {
      if ((0, s.validateKeywordUsage)(T, B, J), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = J, this.data = T.data, this.schema = T.schema[J], this.$data = B.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(T, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = B, this.$data)
        this.schemaCode = T.gen.const("vSchema", te(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = T.gen.const("_errs", c.default.errors));
    }
    result(T, B, J) {
      this.failResult((0, a.not)(T), B, J);
    }
    failResult(T, B, J) {
      this.gen.if(T), J ? J() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(T, B) {
      this.failResult((0, a.not)(T), void 0, B);
    }
    fail(T) {
      if (T === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(T), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(T) {
      if (!this.$data)
        return this.fail(T);
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), T)})`);
    }
    error(T, B, J) {
      if (B) {
        this.setParams(B), this._error(T, J), this.setParams({});
        return;
      }
      this._error(T, J);
    }
    _error(T, B) {
      (T ? y.reportExtraError : y.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(T) {
      this.allErrors || this.gen.if(T);
    }
    setParams(T, B) {
      B ? Object.assign(this.params, T) : this.params = T;
    }
    block$data(T, B, J = a.nil) {
      this.gen.block(() => {
        this.check$data(T, J), B();
      });
    }
    check$data(T = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: J, schemaCode: ee, schemaType: X, def: oe } = this;
      J.if((0, a.or)((0, a._)`${ee} === undefined`, B)), T !== a.nil && J.assign(T, !0), (X.length || oe.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && J.assign(T, !1)), J.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: B, schemaType: J, def: ee, it: X } = this;
      return (0, a.or)(oe(), ie());
      function oe() {
        if (J.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const de = Array.isArray(J) ? J : [J];
          return (0, a._)`${(0, r.checkDataTypes)(de, B, X.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ie() {
        if (ee.validateSchema) {
          const de = T.scopeValue("validate$data", { ref: ee.validateSchema });
          return (0, a._)`!${de}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(T, B) {
      const J = (0, i.getSubschema)(this.it, T);
      (0, i.extendSubschemaData)(J, this.it, T), (0, i.extendSubschemaMode)(J, T);
      const ee = { ...this.it, ...J, items: void 0, props: void 0 };
      return C(ee, B), ee;
    }
    mergeEvaluated(T, B) {
      const { it: J, gen: ee } = this;
      J.opts.unevaluated && (J.props !== !0 && T.props !== void 0 && (J.props = f.mergeEvaluated.props(ee, T.props, J.props, B)), J.items !== !0 && T.items !== void 0 && (J.items = f.mergeEvaluated.items(ee, T.items, J.items, B)));
    }
    mergeValidEvaluated(T, B) {
      const { it: J, gen: ee } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return ee.if(B, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  qe.KeywordCxt = D;
  function G(A, T, B, J) {
    const ee = new D(A, B, T);
    "code" in B ? B.code(ee, J) : ee.$data && B.validate ? (0, s.funcKeywordCode)(ee, B) : "macro" in B ? (0, s.macroKeywordCode)(ee, B) : (B.compile || B.validate) && (0, s.funcKeywordCode)(ee, B);
  }
  const U = /^\/(?:[^~]|~0|~1)*$/, Z = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function te(A, { dataLevel: T, dataNames: B, dataPathArr: J }) {
    let ee, X;
    if (A === "")
      return c.default.rootData;
    if (A[0] === "/") {
      if (!U.test(A))
        throw new Error(`Invalid JSON-pointer: ${A}`);
      ee = A, X = c.default.rootData;
    } else {
      const fe = Z.exec(A);
      if (!fe)
        throw new Error(`Invalid JSON-pointer: ${A}`);
      const he = +fe[1];
      if (ee = fe[2], ee === "#") {
        if (he >= T)
          throw new Error(de("property/index", he));
        return J[T - he];
      }
      if (he > T)
        throw new Error(de("data", he));
      if (X = B[T - he], !ee)
        return X;
    }
    let oe = X;
    const ie = ee.split("/");
    for (const fe of ie)
      fe && (X = (0, a._)`${X}${(0, a.getProperty)((0, f.unescapeJsonPointer)(fe))}`, oe = (0, a._)`${oe} && ${X}`);
    return oe;
    function de(fe, he) {
      return `Cannot access ${fe} ${he} levels up, current level is ${T}`;
    }
  }
  return qe.getData = te, qe;
}
var Vt = {}, Lo;
function Xr() {
  if (Lo) return Vt;
  Lo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Vt.default = e, Vt;
}
var Bt = {}, qo;
function er() {
  if (qo) return Bt;
  qo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zn();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Bt.default = t, Bt;
}
var we = {}, Vo;
function tr() {
  if (Vo) return we;
  Vo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Xr(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ ce(), s = /* @__PURE__ */ Qn();
  class i {
    constructor(S) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof S.schema == "object" && (C = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (p = S.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(C?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = i;
  function a(u) {
    const S = f.call(this, u);
    if (S)
      return S;
    const p = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: $ } = this.opts.code, { ownProperties: l } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: $, ownProperties: l });
    let m;
    u.$async && (m = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = h.scopeName("validate");
    u.validateName = x;
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: x,
      ValidationError: m,
      schema: u.schema,
      schemaEnv: u,
      rootId: p,
      baseId: u.baseId || p,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let I;
    try {
      this._compilations.add(u), (0, s.validateFunctionCode)(P), h.optimize(this.opts.code.optimize);
      const L = h.toString();
      I = `${h.scopeRefs(n.default.scope)}return ${L}`, this.opts.code.process && (I = this.opts.code.process(I, u));
      const V = new Function(`${n.default.self}`, `${n.default.scope}`, I)(this, this.scope.get());
      if (this.scope.value(x, { ref: V }), V.errors = null, V.schema = u.schema, V.schemaEnv = u, u.$async && (V.$async = !0), this.opts.code.source === !0 && (V.source = { validateName: x, validateCode: L, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: z, items: K } = P;
        V.evaluated = {
          props: z instanceof e.Name ? void 0 : z,
          items: K instanceof e.Name ? void 0 : K,
          dynamicProps: z instanceof e.Name,
          dynamicItems: K instanceof e.Name
        }, V.source && (V.source.evaluated = (0, e.stringify)(V.evaluated));
      }
      return u.validate = V, u;
    } catch (L) {
      throw delete u.validate, delete u.validateName, I && this.logger.error("Error compiling schema, function code:", I), L;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function c(u, S, p) {
    var C;
    p = (0, r.resolveUrl)(this.opts.uriResolver, S, p);
    const $ = u.refs[p];
    if ($)
      return $;
    let l = g.call(this, u, p);
    if (l === void 0) {
      const h = (C = u.localRefs) === null || C === void 0 ? void 0 : C[p], { schemaId: m } = this.opts;
      h && (l = new i({ schema: h, schemaId: m, root: u, baseId: S }));
    }
    if (l !== void 0)
      return u.refs[p] = d.call(this, l);
  }
  we.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function f(u) {
    for (const S of this._compilations)
      if (y(S, u))
        return S;
  }
  we.getCompilingSchema = f;
  function y(u, S) {
    return u.schema === S.schema && u.root === S.root && u.baseId === S.baseId;
  }
  function g(u, S) {
    let p;
    for (; typeof (p = this.refs[S]) == "string"; )
      S = p;
    return p || this.schemas[S] || b.call(this, u, S);
  }
  function b(u, S) {
    const p = this.opts.uriResolver.parse(S), C = (0, r._getFullPath)(this.opts.uriResolver, p);
    let $ = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === $)
      return w.call(this, p, u);
    const l = (0, r.normalizeId)(C), h = this.refs[l] || this.schemas[l];
    if (typeof h == "string") {
      const m = b.call(this, u, h);
      return typeof m?.schema != "object" ? void 0 : w.call(this, p, m);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), l === (0, r.normalizeId)(S)) {
        const { schema: m } = h, { schemaId: x } = this.opts, P = m[x];
        return P && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, P)), new i({ schema: m, schemaId: x, root: u, baseId: $ });
      }
      return w.call(this, p, h);
    }
  }
  we.resolveSchema = b;
  const v = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(u, { baseId: S, schema: p, root: C }) {
    var $;
    if ((($ = u.fragment) === null || $ === void 0 ? void 0 : $[0]) !== "/")
      return;
    for (const m of u.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const x = p[(0, o.unescapeFragment)(m)];
      if (x === void 0)
        return;
      p = x;
      const P = typeof p == "object" && p[this.opts.schemaId];
      !v.has(m) && P && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, P));
    }
    let l;
    if (typeof p != "boolean" && p.$ref && !(0, o.schemaHasRulesButRef)(p, this.RULES)) {
      const m = (0, r.resolveUrl)(this.opts.uriResolver, S, p.$ref);
      l = b.call(this, C, m);
    }
    const { schemaId: h } = this.opts;
    if (l = l || new i({ schema: p, schemaId: h, root: C, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return we;
}
const pc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", hc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", mc = "object", gc = ["$data"], yc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, $c = !1, vc = {
  $id: pc,
  description: hc,
  type: mc,
  required: gc,
  properties: yc,
  additionalProperties: $c
};
var Ut = {}, At = { exports: {} }, hr, Bo;
function qi() {
  if (Bo) return hr;
  Bo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function s(l) {
    let h = "", m = 0, x = 0;
    for (x = 0; x < l.length; x++)
      if (m = l[x].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        h += l[x];
        break;
      }
    for (x += 1; x < l.length; x++) {
      if (m = l[x].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      h += l[x];
    }
    return h;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, h, m) {
    if (l.length) {
      const x = s(l);
      if (x !== "")
        h.push(x);
      else
        return m.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let h = 0;
    const m = { error: !1, address: "", zone: "" }, x = [], P = [];
    let I = !1, L = !1, F = c;
    for (let V = 0; V < l.length; V++) {
      const z = l[V];
      if (!(z === "[" || z === "]"))
        if (z === ":") {
          if (I === !0 && (L = !0), !F(P, x, m))
            break;
          if (++h > 7) {
            m.error = !0;
            break;
          }
          V > 0 && l[V - 1] === ":" && (I = !0), x.push(":");
          continue;
        } else if (z === "%") {
          if (!F(P, x, m))
            break;
          F = a;
        } else {
          P.push(z);
          continue;
        }
    }
    return P.length && (F === a ? m.zone = P.join("") : L ? x.push(P.join("")) : x.push(s(P))), m.address = x.join(""), m;
  }
  function f(l) {
    if (y(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const h = d(l);
    if (h.error)
      return { host: l, isIPV6: !1 };
    {
      let m = h.address, x = h.address;
      return h.zone && (m += "%" + h.zone, x += "%25" + h.zone), { host: m, isIPV6: !0, escapedHost: x };
    }
  }
  function y(l, h) {
    let m = 0;
    for (let x = 0; x < l.length; x++)
      l[x] === h && m++;
    return m;
  }
  function g(l) {
    let h = l;
    const m = [];
    let x = -1, P = 0;
    for (; P = h.length; ) {
      if (P === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          m.push("/");
          break;
        } else {
          m.push(h);
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
          m.push("/");
          break;
        }
      } else if (P === 3 && h === "/..") {
        m.length !== 0 && m.pop(), m.push("/");
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
          h = h.slice(3), m.length !== 0 && m.pop();
          continue;
        }
      }
      if ((x = h.indexOf("/", 1)) === -1) {
        m.push(h);
        break;
      } else
        m.push(h.slice(0, x)), h = h.slice(x);
    }
    return m.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, v = /[@/?#:]/g, w = /[@/?#]/g;
  function u(l, h) {
    const m = h ? w : v;
    return m.lastIndex = 0, l.replace(m, (x) => b[x]);
  }
  function S(l, h = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let m = "";
    for (let x = 0; x < l.length; x++) {
      if (l[x] === "%" && x + 2 < l.length) {
        const P = l.slice(x + 1, x + 3);
        if (n(P)) {
          const I = P.toUpperCase(), L = String.fromCharCode(parseInt(I, 16));
          h && r(L) ? m += L : m += "%" + I, x += 2;
          continue;
        }
      }
      m += l[x];
    }
    return m;
  }
  function p(l) {
    let h = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const x = l.slice(m + 1, m + 3);
        if (n(x)) {
          const P = x.toUpperCase(), I = String.fromCharCode(parseInt(P, 16));
          I !== "." && r(I) ? h += I : h += "%" + P, m += 2;
          continue;
        }
      }
      o(l[m]) ? h += l[m] : h += escape(l[m]);
    }
    return h;
  }
  function C(l) {
    let h = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const x = l.slice(m + 1, m + 3);
        if (n(x)) {
          h += "%" + x.toUpperCase(), m += 2;
          continue;
        }
      }
      h += escape(l[m]);
    }
    return h;
  }
  function $(l) {
    const h = [];
    if (l.userinfo !== void 0 && (h.push(l.userinfo), h.push("@")), l.host !== void 0) {
      let m = unescape(l.host);
      if (!t(m)) {
        const x = f(m);
        x.isIPV6 === !0 ? m = `[${x.escapedHost}]` : m = u(m, !1);
      }
      h.push(m);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (h.push(":"), h.push(String(l.port))), h.length ? h.join("") : void 0;
  }
  return hr = {
    nonSimpleDomain: i,
    recomposeAuthority: $,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: S,
    normalizePathEncoding: p,
    escapePreservingEscapes: C,
    removeDotSegments: g,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: s
  }, hr;
}
var mr, Uo;
function bc() {
  if (Uo) return mr;
  Uo = 1;
  const { isUUID: e } = qi(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function r(l) {
    return n.indexOf(
      /** @type {*} */
      l
    ) !== -1;
  }
  function o(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function s(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function i(l) {
    const h = String(l.scheme).toLowerCase() === "https";
    return (l.port === (h ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = o(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (o(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [h, m] = l.resourceName.split("?");
      l.path = h && h !== "/" ? h : void 0, l.query = m, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function d(l, h) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const m = l.path.match(t);
    if (m) {
      const x = h.scheme || l.scheme || "urn";
      l.nid = m[1].toLowerCase(), l.nss = m[2];
      const P = `${x}:${h.nid || l.nid}`, I = $(P);
      l.path = void 0, I && (l = I.parse(l, h));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function f(l, h) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = h.scheme || l.scheme || "urn", x = l.nid.toLowerCase(), P = `${m}:${h.nid || x}`, I = $(P);
    I && (l = I.serialize(l, h));
    const L = l, F = l.nss;
    return L.path = `${x || h.nid}:${F}`, h.skipEscape = !0, L;
  }
  function y(l, h) {
    const m = l;
    return m.uuid = m.nss, m.nss = void 0, !h.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function g(l) {
    const h = l;
    return h.nss = (l.uuid || "").toLowerCase(), h;
  }
  const b = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: i
    }
  ), v = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: s,
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
  ), u = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: b,
      https: v,
      ws: w,
      wss: u,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: d,
          serialize: f,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: y,
          serialize: g,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function $(l) {
    return l && (C[
      /** @type {SchemeName} */
      l
    ] || C[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return mr = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: $
  }, mr;
}
var Ho;
function wc() {
  if (Ho) return At.exports;
  Ho = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: c } = qi(), { SCHEMES: d, getSchemeHandler: f } = bc();
  function y(P, I) {
    return typeof P == "string" ? P = /** @type {T} */
    l(P, I) : typeof P == "object" && (P = /** @type {T} */
    $(w(P, I), I)), P;
  }
  function g(P, I, L) {
    const F = L ? Object.assign({ scheme: "null" }, L) : { scheme: "null" }, V = b($(P, F), $(I, F), F, !0);
    return F.skipEscape = !0, w(V, F);
  }
  function b(P, I, L, F) {
    const V = {};
    return F || (P = $(w(P, L), L), I = $(w(I, L), L)), L = L || {}, !L.tolerant && I.scheme ? (V.scheme = I.scheme, V.userinfo = I.userinfo, V.host = I.host, V.port = I.port, V.path = t(I.path || ""), V.query = I.query) : (I.userinfo !== void 0 || I.host !== void 0 || I.port !== void 0 ? (V.userinfo = I.userinfo, V.host = I.host, V.port = I.port, V.path = t(I.path || ""), V.query = I.query) : (I.path ? (I.path[0] === "/" ? V.path = t(I.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? V.path = "/" + I.path : P.path ? V.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + I.path : V.path = I.path, V.path = t(V.path)), V.query = I.query) : (V.path = P.path, I.query !== void 0 ? V.query = I.query : V.query = P.query), V.userinfo = P.userinfo, V.host = P.host, V.port = P.port), V.scheme = P.scheme), V.fragment = I.fragment, V;
  }
  function v(P, I, L) {
    const F = m(P, L), V = m(I, L);
    return F !== void 0 && V !== void 0 && F.toLowerCase() === V.toLowerCase();
  }
  function w(P, I) {
    const L = {
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
    }, F = Object.assign({}, I), V = [], z = f(F.scheme || L.scheme);
    z && z.serialize && z.serialize(L, F), L.path !== void 0 && (F.skipEscape ? L.path = r(L.path) : (L.path = s(L.path), L.scheme !== void 0 && (L.path = L.path.split("%3A").join(":")))), F.reference !== "suffix" && L.scheme && V.push(L.scheme, ":");
    const K = n(L);
    if (K !== void 0 && (F.reference !== "suffix" && V.push("//"), V.push(K), L.path && L.path[0] !== "/" && V.push("/")), L.path !== void 0) {
      let Y = L.path;
      !F.absolutePath && (!z || !z.absolutePath) && (Y = t(Y)), K === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), V.push(Y);
    }
    return L.query !== void 0 && V.push("?", L.query), L.fragment !== void 0 && V.push("#", L.fragment), V.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, S = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function p(P, I) {
    if (I[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function C(P, I) {
    const L = Object.assign({}, I), F = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let V = !1, z = !1;
    L.reference === "suffix" && (L.scheme ? P = L.scheme + ":" + P : P = "//" + P);
    const K = P.match(S);
    K !== null && K[1].indexOf("\\") !== -1 && (F.error = "URI authority must not contain a literal backslash.", V = !0);
    const Y = P.match(u);
    if (Y) {
      F.scheme = Y[1], F.userinfo = Y[3], F.host = Y[4], F.port = parseInt(Y[5], 10), F.path = Y[6] || "", F.query = Y[7], F.fragment = Y[8], isNaN(F.port) && (F.port = Y[5]);
      const re = p(F, Y);
      if (re !== void 0 && (F.error = F.error || re, V = !0), F.host)
        if (a(F.host) === !1) {
          const R = e(F.host);
          F.host = R.host.toLowerCase(), z = R.isIPV6;
        } else
          z = !0;
      F.scheme === void 0 && F.userinfo === void 0 && F.host === void 0 && F.port === void 0 && F.query === void 0 && !F.path ? F.reference = "same-document" : F.scheme === void 0 ? F.reference = "relative" : F.fragment === void 0 ? F.reference = "absolute" : F.reference = "uri", L.reference && L.reference !== "suffix" && L.reference !== F.reference && (F.error = F.error || "URI is not a " + L.reference + " reference.");
      const q = f(L.scheme || F.scheme);
      if (!L.unicodeSupport && (!q || !q.unicodeSupport) && F.host && (L.domainHost || q && q.domainHost) && z === !1 && c(F.host))
        try {
          F.host = new URL("http://" + F.host).hostname;
        } catch (W) {
          F.error = F.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!q || q && !q.skipNormalize) && (P.indexOf("%") !== -1 && (F.scheme !== void 0 && (F.scheme = unescape(F.scheme)), F.host !== void 0 && (F.host = i(unescape(F.host), z))), F.path && (F.path = o(F.path)), F.fragment))
        try {
          F.fragment = encodeURI(decodeURIComponent(F.fragment));
        } catch {
          F.error = F.error || "URI malformed";
        }
      q && q.parse && q.parse(F, L);
    } else
      F.error = F.error || "URI can not be parsed.";
    return { parsed: F, malformedAuthorityOrPort: V };
  }
  function $(P, I) {
    return C(P, I).parsed;
  }
  function l(P, I) {
    return h(P, I).normalized;
  }
  function h(P, I) {
    const { parsed: L, malformedAuthorityOrPort: F } = C(P, I);
    return {
      normalized: F ? P : w(L, I),
      malformedAuthorityOrPort: F
    };
  }
  function m(P, I) {
    if (typeof P == "string") {
      const { normalized: L, malformedAuthorityOrPort: F } = h(P, I);
      return F ? void 0 : L;
    }
    if (typeof P == "object")
      return w(P, I);
  }
  const x = {
    SCHEMES: d,
    normalize: y,
    resolve: g,
    resolveComponent: b,
    equal: v,
    serialize: w,
    parse: $
  };
  return At.exports = x, At.exports.default = x, At.exports.fastUri = x, At.exports;
}
var Ko;
function _c() {
  if (Ko) return Ut;
  Ko = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = wc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ut.default = e, Ut;
}
var Go;
function Sc() {
  return Go || (Go = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Qn();
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
    const r = /* @__PURE__ */ Xr(), o = /* @__PURE__ */ er(), s = /* @__PURE__ */ ji(), i = /* @__PURE__ */ tr(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Zn(), d = /* @__PURE__ */ Hn(), f = /* @__PURE__ */ ce(), y = vc, g = /* @__PURE__ */ _c(), b = (R, E) => new RegExp(R, E);
    b.code = "new RegExp";
    const v = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
    ]), u = {
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
    }, S = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, p = 200;
    function C(R) {
      var E, j, N, _, k, D, G, U, Z, te, A, T, B, J, ee, X, oe, ie, de, fe, he, De, ve, Pe, Le;
      const nt = R.strict, ir = (E = R.code) === null || E === void 0 ? void 0 : E.optimize, go = ir === !0 || ir === void 0 ? 1 : ir || 0, yo = (N = (j = R.code) === null || j === void 0 ? void 0 : j.regExp) !== null && N !== void 0 ? N : b, $a = (_ = R.uriResolver) !== null && _ !== void 0 ? _ : g.default;
      return {
        strictSchema: (D = (k = R.strictSchema) !== null && k !== void 0 ? k : nt) !== null && D !== void 0 ? D : !0,
        strictNumbers: (U = (G = R.strictNumbers) !== null && G !== void 0 ? G : nt) !== null && U !== void 0 ? U : !0,
        strictTypes: (te = (Z = R.strictTypes) !== null && Z !== void 0 ? Z : nt) !== null && te !== void 0 ? te : "log",
        strictTuples: (T = (A = R.strictTuples) !== null && A !== void 0 ? A : nt) !== null && T !== void 0 ? T : "log",
        strictRequired: (J = (B = R.strictRequired) !== null && B !== void 0 ? B : nt) !== null && J !== void 0 ? J : !1,
        code: R.code ? { ...R.code, optimize: go, regExp: yo } : { optimize: go, regExp: yo },
        loopRequired: (ee = R.loopRequired) !== null && ee !== void 0 ? ee : p,
        loopEnum: (X = R.loopEnum) !== null && X !== void 0 ? X : p,
        meta: (oe = R.meta) !== null && oe !== void 0 ? oe : !0,
        messages: (ie = R.messages) !== null && ie !== void 0 ? ie : !0,
        inlineRefs: (de = R.inlineRefs) !== null && de !== void 0 ? de : !0,
        schemaId: (fe = R.schemaId) !== null && fe !== void 0 ? fe : "$id",
        addUsedSchema: (he = R.addUsedSchema) !== null && he !== void 0 ? he : !0,
        validateSchema: (De = R.validateSchema) !== null && De !== void 0 ? De : !0,
        validateFormats: (ve = R.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Pe = R.unicodeRegExp) !== null && Pe !== void 0 ? Pe : !0,
        int32range: (Le = R.int32range) !== null && Le !== void 0 ? Le : !0,
        uriResolver: $a
      };
    }
    class $ {
      constructor(E = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), E = this.opts = { ...E, ...C(E) };
        const { es5: j, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: j, lines: N }), this.logger = F(E.logger);
        const _ = E.validateFormats;
        E.validateFormats = !1, this.RULES = (0, s.getRules)(), l.call(this, u, E, "NOT SUPPORTED"), l.call(this, S, E, "DEPRECATED", "warn"), this._metaOpts = I.call(this), E.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), E.keywords && P.call(this, E.keywords), typeof E.meta == "object" && this.addMetaSchema(E.meta), m.call(this), E.validateFormats = _;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: E, meta: j, schemaId: N } = this.opts;
        let _ = y;
        N === "id" && (_ = { ...y }, _.id = _.$id, delete _.$id), j && E && this.addMetaSchema(_, _[N], !1);
      }
      defaultMeta() {
        const { meta: E, schemaId: j } = this.opts;
        return this.opts.defaultMeta = typeof E == "object" ? E[j] || E : void 0;
      }
      validate(E, j) {
        let N;
        if (typeof E == "string") {
          if (N = this.getSchema(E), !N)
            throw new Error(`no schema with key or ref "${E}"`);
        } else
          N = this.compile(E);
        const _ = N(j);
        return "$async" in N || (this.errors = N.errors), _;
      }
      compile(E, j) {
        const N = this._addSchema(E, j);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(E, j) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return _.call(this, E, j);
        async function _(te, A) {
          await k.call(this, te.$schema);
          const T = this._addSchema(te, A);
          return T.validate || D.call(this, T);
        }
        async function k(te) {
          te && !this.getSchema(te) && await _.call(this, { $ref: te }, !0);
        }
        async function D(te) {
          try {
            return this._compileSchemaEnv(te);
          } catch (A) {
            if (!(A instanceof o.default))
              throw A;
            return G.call(this, A), await U.call(this, A.missingSchema), D.call(this, te);
          }
        }
        function G({ missingSchema: te, missingRef: A }) {
          if (this.refs[te])
            throw new Error(`AnySchema ${te} is loaded but ${A} cannot be resolved`);
        }
        async function U(te) {
          const A = await Z.call(this, te);
          this.refs[te] || await k.call(this, A.$schema), this.refs[te] || this.addSchema(A, te, j);
        }
        async function Z(te) {
          const A = this._loading[te];
          if (A)
            return A;
          try {
            return await (this._loading[te] = N(te));
          } finally {
            delete this._loading[te];
          }
        }
      }
      // Adds schema to the instance
      addSchema(E, j, N, _ = this.opts.validateSchema) {
        if (Array.isArray(E)) {
          for (const D of E)
            this.addSchema(D, void 0, N, _);
          return this;
        }
        let k;
        if (typeof E == "object") {
          const { schemaId: D } = this.opts;
          if (k = E[D], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${D} must be string`);
        }
        return j = (0, c.normalizeId)(j || k), this._checkUnique(j), this.schemas[j] = this._addSchema(E, N, j, _, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(E, j, N = this.opts.validateSchema) {
        return this.addSchema(E, j, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(E, j) {
        if (typeof E == "boolean")
          return !0;
        let N;
        if (N = E.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const _ = this.validate(N, E);
        if (!_ && j) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return _;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(E) {
        let j;
        for (; typeof (j = h.call(this, E)) == "string"; )
          E = j;
        if (j === void 0) {
          const { schemaId: N } = this.opts, _ = new i.SchemaEnv({ schema: {}, schemaId: N });
          if (j = i.resolveSchema.call(this, _, E), !j)
            return;
          this.refs[E] = j;
        }
        return j.validate || this._compileSchemaEnv(j);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(E) {
        if (E instanceof RegExp)
          return this._removeAllSchemas(this.schemas, E), this._removeAllSchemas(this.refs, E), this;
        switch (typeof E) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const j = h.call(this, E);
            return typeof j == "object" && this._cache.delete(j.schema), delete this.schemas[E], delete this.refs[E], this;
          }
          case "object": {
            const j = E;
            this._cache.delete(j);
            let N = E[this.opts.schemaId];
            return N && (N = (0, c.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(E) {
        for (const j of E)
          this.addKeyword(j);
        return this;
      }
      addKeyword(E, j) {
        let N;
        if (typeof E == "string")
          N = E, typeof j == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), j.keyword = N);
        else if (typeof E == "object" && j === void 0) {
          if (j = E, N = j.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (z.call(this, N, j), !j)
          return (0, f.eachItem)(N, (k) => K.call(this, k)), this;
        re.call(this, j);
        const _ = {
          ...j,
          type: (0, d.getJSONTypes)(j.type),
          schemaType: (0, d.getJSONTypes)(j.schemaType)
        };
        return (0, f.eachItem)(N, _.type.length === 0 ? (k) => K.call(this, k, _) : (k) => _.type.forEach((D) => K.call(this, k, _, D))), this;
      }
      getKeyword(E) {
        const j = this.RULES.all[E];
        return typeof j == "object" ? j.definition : !!j;
      }
      // Remove keyword
      removeKeyword(E) {
        const { RULES: j } = this;
        delete j.keywords[E], delete j.all[E];
        for (const N of j.rules) {
          const _ = N.rules.findIndex((k) => k.keyword === E);
          _ >= 0 && N.rules.splice(_, 1);
        }
        return this;
      }
      // Add format
      addFormat(E, j) {
        return typeof j == "string" && (j = new RegExp(j)), this.formats[E] = j, this;
      }
      errorsText(E = this.errors, { separator: j = ", ", dataVar: N = "data" } = {}) {
        return !E || E.length === 0 ? "No errors" : E.map((_) => `${N}${_.instancePath} ${_.message}`).reduce((_, k) => _ + j + k);
      }
      $dataMetaSchema(E, j) {
        const N = this.RULES.all;
        E = JSON.parse(JSON.stringify(E));
        for (const _ of j) {
          const k = _.split("/").slice(1);
          let D = E;
          for (const G of k)
            D = D[G];
          for (const G in N) {
            const U = N[G];
            if (typeof U != "object")
              continue;
            const { $data: Z } = U.definition, te = D[G];
            Z && te && (D[G] = W(te));
          }
        }
        return E;
      }
      _removeAllSchemas(E, j) {
        for (const N in E) {
          const _ = E[N];
          (!j || j.test(N)) && (typeof _ == "string" ? delete E[N] : _ && !_.meta && (this._cache.delete(_.schema), delete E[N]));
        }
      }
      _addSchema(E, j, N, _ = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let D;
        const { schemaId: G } = this.opts;
        if (typeof E == "object")
          D = E[G];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof E != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let U = this._cache.get(E);
        if (U !== void 0)
          return U;
        N = (0, c.normalizeId)(D || N);
        const Z = c.getSchemaRefs.call(this, E, N);
        return U = new i.SchemaEnv({ schema: E, schemaId: G, meta: j, baseId: N, localRefs: Z }), this._cache.set(U.schema, U), k && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = U), _ && this.validateSchema(E, !0), U;
      }
      _checkUnique(E) {
        if (this.schemas[E] || this.refs[E])
          throw new Error(`schema with key or id "${E}" already exists`);
      }
      _compileSchemaEnv(E) {
        if (E.meta ? this._compileMetaSchema(E) : i.compileSchema.call(this, E), !E.validate)
          throw new Error("ajv implementation error");
        return E.validate;
      }
      _compileMetaSchema(E) {
        const j = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, E);
        } finally {
          this.opts = j;
        }
      }
    }
    $.ValidationError = r.default, $.MissingRefError = o.default, e.default = $;
    function l(R, E, j, N = "error") {
      for (const _ in R) {
        const k = _;
        k in E && this.logger[N](`${j}: option ${_}. ${R[k]}`);
      }
    }
    function h(R) {
      return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
    }
    function m() {
      const R = this.opts.schemas;
      if (R)
        if (Array.isArray(R))
          this.addSchema(R);
        else
          for (const E in R)
            this.addSchema(R[E], E);
    }
    function x() {
      for (const R in this.opts.formats) {
        const E = this.opts.formats[R];
        E && this.addFormat(R, E);
      }
    }
    function P(R) {
      if (Array.isArray(R)) {
        this.addVocabulary(R);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const E in R) {
        const j = R[E];
        j.keyword || (j.keyword = E), this.addKeyword(j);
      }
    }
    function I() {
      const R = { ...this.opts };
      for (const E of v)
        delete R[E];
      return R;
    }
    const L = { log() {
    }, warn() {
    }, error() {
    } };
    function F(R) {
      if (R === !1)
        return L;
      if (R === void 0)
        return console;
      if (R.log && R.warn && R.error)
        return R;
      throw new Error("logger must implement log, warn and error methods");
    }
    const V = /^[a-z_$][a-z0-9_$:-]*$/i;
    function z(R, E) {
      const { RULES: j } = this;
      if ((0, f.eachItem)(R, (N) => {
        if (j.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!V.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!E && E.$data && !("code" in E || "validate" in E))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function K(R, E, j) {
      var N;
      const _ = E?.post;
      if (j && _)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let D = _ ? k.post : k.rules.find(({ type: U }) => U === j);
      if (D || (D = { type: j, rules: [] }, k.rules.push(D)), k.keywords[R] = !0, !E)
        return;
      const G = {
        keyword: R,
        definition: {
          ...E,
          type: (0, d.getJSONTypes)(E.type),
          schemaType: (0, d.getJSONTypes)(E.schemaType)
        }
      };
      E.before ? Y.call(this, D, G, E.before) : D.rules.push(G), k.all[R] = G, (N = E.implements) === null || N === void 0 || N.forEach((U) => this.addKeyword(U));
    }
    function Y(R, E, j) {
      const N = R.rules.findIndex((_) => _.keyword === j);
      N >= 0 ? R.rules.splice(N, 0, E) : (R.rules.push(E), this.logger.warn(`rule ${j} is not defined`));
    }
    function re(R) {
      let { metaSchema: E } = R;
      E !== void 0 && (R.$data && this.opts.$data && (E = W(E)), R.validateSchema = this.compile(E, !0));
    }
    const q = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function W(R) {
      return { anyOf: [R, q] };
    }
  })(ar)), ar;
}
var Ht = {}, Kt = {}, Gt = {}, Wo;
function Cc() {
  if (Wo) return Gt;
  Wo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Gt.default = e, Gt;
}
var We = {}, Jo;
function Zr() {
  if (Jo) return We;
  Jo = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.callRef = We.getValidate = void 0;
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ se(), r = /* @__PURE__ */ Fe(), o = /* @__PURE__ */ tr(), s = /* @__PURE__ */ ce(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: f, schema: y, it: g } = d, { baseId: b, schemaEnv: v, validateName: w, opts: u, self: S } = g, { root: p } = v;
      if ((y === "#" || y === "#/") && b === p.baseId)
        return $();
      const C = o.resolveRef.call(S, p, b, y);
      if (C === void 0)
        throw new e.default(g.opts.uriResolver, b, y);
      if (C instanceof o.SchemaEnv)
        return l(C);
      return h(C);
      function $() {
        if (v === p)
          return c(d, w, v, v.$async);
        const m = f.scopeValue("root", { ref: p });
        return c(d, (0, n._)`${m}.validate`, p, p.$async);
      }
      function l(m) {
        const x = a(d, m);
        c(d, x, m, m.$async);
      }
      function h(m) {
        const x = f.scopeValue("schema", u.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), P = f.name("valid"), I = d.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: y
        }, P);
        d.mergeEvaluated(I), d.ok(P);
      }
    }
  };
  function a(d, f) {
    const { gen: y } = d;
    return f.validate ? y.scopeValue("validate", { ref: f.validate }) : (0, n._)`${y.scopeValue("wrapper", { ref: f })}.validate`;
  }
  We.getValidate = a;
  function c(d, f, y, g) {
    const { gen: b, it: v } = d, { allErrors: w, schemaEnv: u, opts: S } = v, p = S.passContext ? r.default.this : n.nil;
    g ? C() : $();
    function C() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const m = b.let("valid");
      b.try(() => {
        b.code((0, n._)`await ${(0, t.callValidateCode)(d, f, p)}`), h(f), w || b.assign(m, !0);
      }, (x) => {
        b.if((0, n._)`!(${x} instanceof ${v.ValidationError})`, () => b.throw(x)), l(x), w || b.assign(m, !1);
      }), d.ok(m);
    }
    function $() {
      d.result((0, t.callValidateCode)(d, f, p), () => h(f), () => l(f));
    }
    function l(m) {
      const x = (0, n._)`${m}.errors`;
      b.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${x} : ${r.default.vErrors}.concat(${x})`), b.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(m) {
      var x;
      if (!v.opts.unevaluated)
        return;
      const P = (x = y?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (v.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (v.props = s.mergeEvaluated.props(b, P.props, v.props));
        else {
          const I = b.var("props", (0, n._)`${m}.evaluated.props`);
          v.props = s.mergeEvaluated.props(b, I, v.props, n.Name);
        }
      if (v.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (v.items = s.mergeEvaluated.items(b, P.items, v.items));
        else {
          const I = b.var("items", (0, n._)`${m}.evaluated.items`);
          v.items = s.mergeEvaluated.items(b, I, v.items, n.Name);
        }
    }
  }
  return We.callRef = c, We.default = i, We;
}
var Yo;
function kc() {
  if (Yo) return Kt;
  Yo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cc(), t = /* @__PURE__ */ Zr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Kt.default = n, Kt;
}
var Wt = {}, Jt = {}, Xo;
function Ec() {
  if (Xo) return Jt;
  Xo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: s, schemaCode: i }) => (0, e.str)`must be ${n[s].okStr} ${i}`,
    params: ({ keyword: s, schemaCode: i }) => (0, e._)`{comparison: ${n[s].okStr}, limit: ${i}}`
  }, o = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(s) {
      const { keyword: i, data: a, schemaCode: c } = s;
      s.fail$data((0, e._)`${a} ${n[i].fail} ${c} || isNaN(${a})`);
    }
  };
  return Jt.default = o, Jt;
}
var Yt = {}, Zo;
function xc() {
  if (Zo) return Yt;
  Zo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
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
      const { gen: o, data: s, schemaCode: i, it: a } = r, c = a.opts.multipleOfPrecision, d = o.let("res"), f = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      r.fail$data((0, e._)`(${i} === 0 || (${d} = ${s}/${i}, ${f}))`);
    }
  };
  return Yt.default = n, Yt;
}
var Xt = {}, Zt = {}, Qo;
function Pc() {
  if (Qo) return Zt;
  Qo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Zt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Zt;
}
var es;
function Ac() {
  if (es) return Xt;
  es = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Pc(), o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: s, schemaCode: i }) {
        const a = s === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${i} characters`;
      },
      params: ({ schemaCode: s }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { keyword: i, data: a, schemaCode: c, it: d } = s, f = i === "maxLength" ? e.operators.GT : e.operators.LT, y = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${a})`;
      s.fail$data((0, e._)`${y} ${f} ${c}`);
    }
  };
  return Xt.default = o, Xt;
}
var Qt = {}, ts;
function Rc() {
  if (ts) return Qt;
  ts = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ se(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, n.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, n._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schema: d, schemaCode: f, it: y } = s, g = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: b } = y.opts.code, v = b.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, b), w = i.let("valid");
        i.try(() => i.assign(w, (0, n._)`${v}(${f}, ${g}).test(${a})`), () => i.assign(w, !1)), s.fail$data((0, n._)`!${w}`);
      } else {
        const b = (0, e.usePattern)(s, d);
        s.fail$data((0, n._)`!${b}.test(${a})`);
      }
    }
  };
  return Qt.default = o, Qt;
}
var en = {}, ns;
function Nc() {
  if (ns) return en;
  ns = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const s = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: s, schemaCode: i } = r, a = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${s}).length ${a} ${i}`);
    }
  };
  return en.default = n, en;
}
var tn = {}, rs;
function Mc() {
  if (rs) return tn;
  rs = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: i, schema: a, schemaCode: c, data: d, $data: f, it: y } = s, { opts: g } = y;
      if (!f && a.length === 0)
        return;
      const b = a.length >= g.loopRequired;
      if (y.allErrors ? v() : w(), g.strictRequired) {
        const p = s.parentSchema.properties, { definedProperties: C } = s.it;
        for (const $ of a)
          if (p?.[$] === void 0 && !C.has($)) {
            const l = y.schemaEnv.baseId + y.errSchemaPath, h = `required property "${$}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(y, h, y.opts.strictRequired);
          }
      }
      function v() {
        if (b || f)
          s.block$data(t.nil, u);
        else
          for (const p of a)
            (0, e.checkReportMissingProp)(s, p);
      }
      function w() {
        const p = i.let("missing");
        if (b || f) {
          const C = i.let("valid", !0);
          s.block$data(C, () => S(p, C)), s.ok(C);
        } else
          i.if((0, e.checkMissingProp)(s, a, p)), (0, e.reportMissingProp)(s, p), i.else();
      }
      function u() {
        i.forOf("prop", c, (p) => {
          s.setParams({ missingProperty: p }), i.if((0, e.noPropertyInData)(i, d, p, g.ownProperties), () => s.error());
        });
      }
      function S(p, C) {
        s.setParams({ missingProperty: p }), i.forOf(p, c, () => {
          i.assign(C, (0, e.propertyInData)(i, d, p, g.ownProperties)), i.if((0, t.not)(C), () => {
            s.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return tn.default = o, tn;
}
var nn = {}, os;
function Tc() {
  if (os) return nn;
  os = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const s = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: s, schemaCode: i } = r, a = o === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${s}.length ${a} ${i}`);
    }
  };
  return nn.default = n, nn;
}
var rn = {}, on = {}, ss;
function Qr() {
  if (ss) return on;
  ss = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = Li();
  return e.code = 'require("ajv/dist/runtime/equal").default', on.default = e, on;
}
var is;
function Oc() {
  if (is) return rn;
  is = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Qr(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: c, $data: d, schema: f, parentSchema: y, schemaCode: g, it: b } = i;
      if (!d && !f)
        return;
      const v = a.let("valid"), w = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      i.block$data(v, u, (0, t._)`${g} === false`), i.ok(v);
      function u() {
        const $ = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        i.setParams({ i: $, j: l }), a.assign(v, !0), a.if((0, t._)`${$} > 1`, () => (S() ? p : C)($, l));
      }
      function S() {
        return w.length > 0 && !w.some(($) => $ === "object" || $ === "array");
      }
      function p($, l) {
        const h = a.name("item"), m = (0, e.checkDataTypes)(w, h, b.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${$}--;`, () => {
          a.let(h, (0, t._)`${c}[${$}]`), a.if(m, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${x}[${h}] == "number"`, () => {
            a.assign(l, (0, t._)`${x}[${h}]`), i.error(), a.assign(v, !1).break();
          }).code((0, t._)`${x}[${h}] = ${$}`);
        });
      }
      function C($, l) {
        const h = (0, n.useFunc)(a, r.default), m = a.name("outer");
        a.label(m).for((0, t._)`;${$}--;`, () => a.for((0, t._)`${l} = ${$}; ${l}--;`, () => a.if((0, t._)`${h}(${c}[${$}], ${c}[${l}])`, () => {
          i.error(), a.assign(v, !1).break(m);
        })));
      }
    }
  };
  return rn.default = s, rn;
}
var sn = {}, as;
function Fc() {
  if (as) return sn;
  as = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Qr(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schemaCode: d, schema: f } = s;
      c || f && typeof f == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${d})`) : s.fail((0, e._)`${f} !== ${a}`);
    }
  };
  return sn.default = o, sn;
}
var an = {}, cs;
function zc() {
  if (cs) return an;
  cs = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Qr(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schema: d, schemaCode: f, it: y } = s;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const g = d.length >= y.opts.loopEnum;
      let b;
      const v = () => b ?? (b = (0, t.useFunc)(i, n.default));
      let w;
      if (g || c)
        w = i.let("valid"), s.block$data(w, u);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const p = i.const("vSchema", f);
        w = (0, e.or)(...d.map((C, $) => S(p, $)));
      }
      s.pass(w);
      function u() {
        i.assign(w, !1), i.forOf("v", f, (p) => i.if((0, e._)`${v()}(${a}, ${p})`, () => i.assign(w, !0).break()));
      }
      function S(p, C) {
        const $ = d[C];
        return typeof $ == "object" && $ !== null ? (0, e._)`${v()}(${a}, ${p}[${C}])` : (0, e._)`${a} === ${$}`;
      }
    }
  };
  return an.default = o, an;
}
var ls;
function Ic() {
  if (ls) return Wt;
  ls = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ xc(), n = /* @__PURE__ */ Ac(), r = /* @__PURE__ */ Rc(), o = /* @__PURE__ */ Nc(), s = /* @__PURE__ */ Mc(), i = /* @__PURE__ */ Tc(), a = /* @__PURE__ */ Oc(), c = /* @__PURE__ */ Fc(), d = /* @__PURE__ */ zc(), f = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    o.default,
    s.default,
    // array
    i.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    d.default
  ];
  return Wt.default = f, Wt;
}
var cn = {}, ft = {}, ds;
function Vi() {
  if (ds) return ft;
  ds = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { parentSchema: i, it: a } = s, { items: c } = i;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(s, c);
    }
  };
  function o(s, i) {
    const { gen: a, schema: c, data: d, keyword: f, it: y } = s;
    y.items = !0;
    const g = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      s.setParams({ len: i.length }), s.pass((0, e._)`${g} <= ${i.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const v = a.var("valid", (0, e._)`${g} <= ${i.length}`);
      a.if((0, e.not)(v), () => b(v)), s.ok(v);
    }
    function b(v) {
      a.forRange("i", i.length, g, (w) => {
        s.subschema({ keyword: f, dataProp: w, dataPropType: t.Type.Num }, v), y.allErrors || a.if((0, e.not)(v), () => a.break());
      });
    }
  }
  return ft.validateAdditionalItems = o, ft.default = r, ft;
}
var ln = {}, pt = {}, us;
function Bi() {
  if (us) return pt;
  us = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateTuple = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ze(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(s) {
      const { schema: i, it: a } = s;
      if (Array.isArray(i))
        return o(s, "additionalItems", i);
      a.items = !0, !(0, t.alwaysValidSchema)(a, i) && s.ok((0, n.validateArray)(s));
    }
  };
  function o(s, i, a = s.schema) {
    const { gen: c, parentSchema: d, data: f, keyword: y, it: g } = s;
    w(d), g.opts.unevaluated && a.length && g.items !== !0 && (g.items = t.mergeEvaluated.items(c, a.length, g.items));
    const b = c.name("valid"), v = c.const("len", (0, e._)`${f}.length`);
    a.forEach((u, S) => {
      (0, t.alwaysValidSchema)(g, u) || (c.if((0, e._)`${v} > ${S}`, () => s.subschema({
        keyword: y,
        schemaProp: S,
        dataProp: S
      }, b)), s.ok(b));
    });
    function w(u) {
      const { opts: S, errSchemaPath: p } = g, C = a.length, $ = C === u.minItems && (C === u.maxItems || u[i] === !1);
      if (S.strictTuples && !$) {
        const l = `"${y}" is ${C}-tuple, but minItems or maxItems/${i} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(g, l, S.strictTuples);
      }
    }
  }
  return pt.validateTuple = o, pt.default = r, pt;
}
var fs;
function jc() {
  if (fs) return ln;
  fs = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return ln.default = t, ln;
}
var dn = {}, ps;
function Dc() {
  if (ps) return dn;
  ps = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Vi(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: c, it: d } = i, { prefixItems: f } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, a) && (f ? (0, r.validateAdditionalItems)(i, f) : i.ok((0, n.validateArray)(i)));
    }
  };
  return dn.default = s, dn;
}
var un = {}, hs;
function Lc() {
  if (hs) return un;
  hs = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${s} valid item(s)`,
      params: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${s}}`
    },
    code(o) {
      const { gen: s, schema: i, parentSchema: a, data: c, it: d } = o;
      let f, y;
      const { minContains: g, maxContains: b } = a;
      d.opts.next ? (f = g === void 0 ? 1 : g, y = b) : f = 1;
      const v = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: f, max: y }), y === void 0 && f === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && f > y) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, i)) {
        let C = (0, e._)`${v} >= ${f}`;
        y !== void 0 && (C = (0, e._)`${C} && ${v} <= ${y}`), o.pass(C);
        return;
      }
      d.items = !0;
      const w = s.name("valid");
      y === void 0 && f === 1 ? S(w, () => s.if(w, () => s.break())) : f === 0 ? (s.let(w, !0), y !== void 0 && s.if((0, e._)`${c}.length > 0`, u)) : (s.let(w, !1), u()), o.result(w, () => o.reset());
      function u() {
        const C = s.name("_valid"), $ = s.let("count", 0);
        S(C, () => s.if(C, () => p($)));
      }
      function S(C, $) {
        s.forRange("i", 0, v, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), $();
        });
      }
      function p(C) {
        s.code((0, e._)`${C}++`), y === void 0 ? s.if((0, e._)`${C} >= ${f}`, () => s.assign(w, !0).break()) : (s.if((0, e._)`${C} > ${y}`, () => s.assign(w, !1).break()), f === 1 ? s.assign(w, !0) : s.if((0, e._)`${C} >= ${f}`, () => s.assign(w, !0)));
      }
    }
  };
  return un.default = r, un;
}
var gr = {}, ms;
function eo() {
  return ms || (ms = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ze();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: f } }) => {
        const y = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${f} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: f, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
    depsCount: ${d},
    deps: ${f}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [d, f] = s(c);
        i(c, d), a(c, f);
      }
    };
    function s({ schema: c }) {
      const d = {}, f = {};
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const g = Array.isArray(c[y]) ? d : f;
        g[y] = c[y];
      }
      return [d, f];
    }
    function i(c, d = c.schema) {
      const { gen: f, data: y, it: g } = c;
      if (Object.keys(d).length === 0)
        return;
      const b = f.let("missing");
      for (const v in d) {
        const w = d[v];
        if (w.length === 0)
          continue;
        const u = (0, r.propertyInData)(f, y, v, g.opts.ownProperties);
        c.setParams({
          property: v,
          depsCount: w.length,
          deps: w.join(", ")
        }), g.allErrors ? f.if(u, () => {
          for (const S of w)
            (0, r.checkReportMissingProp)(c, S);
        }) : (f.if((0, t._)`${u} && (${(0, r.checkMissingProp)(c, w, b)})`), (0, r.reportMissingProp)(c, b), f.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(c, d = c.schema) {
      const { gen: f, data: y, keyword: g, it: b } = c, v = f.name("valid");
      for (const w in d)
        (0, n.alwaysValidSchema)(b, d[w]) || (f.if(
          (0, r.propertyInData)(f, y, w, b.opts.ownProperties),
          () => {
            const u = c.subschema({ keyword: g, schemaProp: w }, v);
            c.mergeValidEvaluated(u, v);
          },
          () => f.var(v, !0)
          // TODO var
        ), c.ok(v));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(gr)), gr;
}
var fn = {}, gs;
function qc() {
  if (gs) return fn;
  gs = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, i))
        return;
      const d = s.name("valid");
      s.forIn("key", a, (f) => {
        o.setParams({ propertyName: f }), o.subschema({
          keyword: "propertyNames",
          data: f,
          dataTypes: ["string"],
          propertyName: f,
          compositeRule: !0
        }, d), s.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || s.break();
        });
      }), o.ok(d);
    }
  };
  return fn.default = r, fn;
}
var pn = {}, ys;
function Ui() {
  if (ys) return pn;
  ys = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ ce(), s = {
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
      const { gen: a, schema: c, parentSchema: d, data: f, errsCount: y, it: g } = i;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: v } = g;
      if (g.props = !0, v.removeAdditional !== "all" && (0, r.alwaysValidSchema)(g, c))
        return;
      const w = (0, e.allSchemaProperties)(d.properties), u = (0, e.allSchemaProperties)(d.patternProperties);
      S(), i.ok((0, t._)`${y} === ${n.default.errors}`);
      function S() {
        a.forIn("key", f, (h) => {
          !w.length && !u.length ? $(h) : a.if(p(h), () => $(h));
        });
      }
      function p(h) {
        let m;
        if (w.length > 8) {
          const x = (0, r.schemaRefOrVal)(g, d.properties, "properties");
          m = (0, e.isOwnProperty)(a, x, h);
        } else w.length ? m = (0, t.or)(...w.map((x) => (0, t._)`${h} === ${x}`)) : m = t.nil;
        return u.length && (m = (0, t.or)(m, ...u.map((x) => (0, t._)`${(0, e.usePattern)(i, x)}.test(${h})`))), (0, t.not)(m);
      }
      function C(h) {
        a.code((0, t._)`delete ${f}[${h}]`);
      }
      function $(h) {
        if (v.removeAdditional === "all" || v.removeAdditional && c === !1) {
          C(h);
          return;
        }
        if (c === !1) {
          i.setParams({ additionalProperty: h }), i.error(), b || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(g, c)) {
          const m = a.name("valid");
          v.removeAdditional === "failing" ? (l(h, m, !1), a.if((0, t.not)(m), () => {
            i.reset(), C(h);
          })) : (l(h, m), b || a.if((0, t.not)(m), () => a.break()));
        }
      }
      function l(h, m, x) {
        const P = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, m);
      }
    }
  };
  return pn.default = s, pn;
}
var hn = {}, $s;
function Vc() {
  if ($s) return hn;
  $s = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qn(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Ui(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, parentSchema: c, data: d, it: f } = s;
      f.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(f, r.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(a);
      for (const u of y)
        f.definedProperties.add(u);
      f.opts.unevaluated && y.length && f.props !== !0 && (f.props = n.mergeEvaluated.props(i, (0, n.toHash)(y), f.props));
      const g = y.filter((u) => !(0, n.alwaysValidSchema)(f, a[u]));
      if (g.length === 0)
        return;
      const b = i.name("valid");
      for (const u of g)
        v(u) ? w(u) : (i.if((0, t.propertyInData)(i, d, u, f.opts.ownProperties)), w(u), f.allErrors || i.else().var(b, !0), i.endIf()), s.it.definedProperties.add(u), s.ok(b);
      function v(u) {
        return f.opts.useDefaults && !f.compositeRule && a[u].default !== void 0;
      }
      function w(u) {
        s.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, b);
      }
    }
  };
  return hn.default = o, hn;
}
var mn = {}, vs;
function Bc() {
  if (vs) return mn;
  vs = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: c, parentSchema: d, it: f } = s, { opts: y } = f, g = (0, e.allSchemaProperties)(a), b = g.filter(($) => (0, n.alwaysValidSchema)(f, a[$]));
      if (g.length === 0 || b.length === g.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const v = y.strictSchema && !y.allowMatchingProperties && d.properties, w = i.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, r.evaluatedPropsToName)(i, f.props));
      const { props: u } = f;
      S();
      function S() {
        for (const $ of g)
          v && p($), f.allErrors ? C($) : (i.var(w, !0), C($), i.if(w));
      }
      function p($) {
        for (const l in v)
          new RegExp($).test(l) && (0, n.checkStrictMode)(f, `property ${l} matches pattern ${$} (use allowMatchingProperties)`);
      }
      function C($) {
        i.forIn("key", c, (l) => {
          i.if((0, t._)`${(0, e.usePattern)(s, $)}.test(${l})`, () => {
            const h = b.includes($);
            h || s.subschema({
              keyword: "patternProperties",
              schemaProp: $,
              dataProp: l,
              dataPropType: r.Type.Str
            }, w), f.opts.unevaluated && u !== !0 ? i.assign((0, t._)`${u}[${l}]`, !0) : !h && !f.allErrors && i.if((0, t.not)(w), () => i.break());
          });
        });
      }
    }
  };
  return mn.default = o, mn;
}
var gn = {}, bs;
function Uc() {
  if (bs) return gn;
  bs = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: o, it: s } = n;
      if ((0, e.alwaysValidSchema)(s, o)) {
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
  return gn.default = t, gn;
}
var yn = {}, ws;
function Hc() {
  if (ws) return yn;
  ws = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ ze()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return yn.default = t, yn;
}
var $n = {}, _s;
function Kc() {
  if (_s) return $n;
  _s = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: s, schema: i, parentSchema: a, it: c } = o;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const d = i, f = s.let("valid", !1), y = s.let("passing", null), g = s.name("_valid");
      o.setParams({ passing: y }), s.block(b), o.result(f, () => o.reset(), () => o.error(!0));
      function b() {
        d.forEach((v, w) => {
          let u;
          (0, t.alwaysValidSchema)(c, v) ? s.var(g, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, g), w > 0 && s.if((0, e._)`${g} && ${f}`).assign(f, !1).assign(y, (0, e._)`[${y}, ${w}]`).else(), s.if(g, () => {
            s.assign(f, !0), s.assign(y, w), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return $n.default = r, $n;
}
var vn = {}, Ss;
function Gc() {
  if (Ss) return vn;
  Ss = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: o, it: s } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const i = r.name("valid");
      o.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(s, a))
          return;
        const d = n.subschema({ keyword: "allOf", schemaProp: c }, i);
        n.ok(i), n.mergeEvaluated(d);
      });
    }
  };
  return vn.default = t, vn;
}
var bn = {}, Cs;
function Wc() {
  if (Cs) return bn;
  Cs = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: s }) => (0, e.str)`must match "${s.ifClause}" schema`,
      params: ({ params: s }) => (0, e._)`{failingKeyword: ${s.ifClause}}`
    },
    code(s) {
      const { gen: i, parentSchema: a, it: c } = s;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const d = o(c, "then"), f = o(c, "else");
      if (!d && !f)
        return;
      const y = i.let("valid", !0), g = i.name("_valid");
      if (b(), s.reset(), d && f) {
        const w = i.let("ifClause");
        s.setParams({ ifClause: w }), i.if(g, v("then", w), v("else", w));
      } else d ? i.if(g, v("then")) : i.if((0, e.not)(g), v("else"));
      s.pass(y, () => s.error(!0));
      function b() {
        const w = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, g);
        s.mergeEvaluated(w);
      }
      function v(w, u) {
        return () => {
          const S = s.subschema({ keyword: w }, g);
          i.assign(y, g), s.mergeValidEvaluated(S, y), u ? i.assign(u, (0, e._)`${w}`) : s.setParams({ ifClause: w });
        };
      }
    }
  };
  function o(s, i) {
    const a = s.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(s, a);
  }
  return bn.default = r, bn;
}
var wn = {}, ks;
function Jc() {
  if (ks) return wn;
  ks = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var Es;
function Yc() {
  if (Es) return cn;
  Es = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vi(), t = /* @__PURE__ */ jc(), n = /* @__PURE__ */ Bi(), r = /* @__PURE__ */ Dc(), o = /* @__PURE__ */ Lc(), s = /* @__PURE__ */ eo(), i = /* @__PURE__ */ qc(), a = /* @__PURE__ */ Ui(), c = /* @__PURE__ */ Vc(), d = /* @__PURE__ */ Bc(), f = /* @__PURE__ */ Uc(), y = /* @__PURE__ */ Hc(), g = /* @__PURE__ */ Kc(), b = /* @__PURE__ */ Gc(), v = /* @__PURE__ */ Wc(), w = /* @__PURE__ */ Jc();
  function u(S = !1) {
    const p = [
      // any
      f.default,
      y.default,
      g.default,
      b.default,
      v.default,
      w.default,
      // object
      i.default,
      a.default,
      s.default,
      c.default,
      d.default
    ];
    return S ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(o.default), p;
  }
  return cn.default = u, cn;
}
var _n = {}, ht = {}, xs;
function Hi() {
  if (xs) return ht;
  xs = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ tr(), r = /* @__PURE__ */ Zr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => s(a, a.schema)
  };
  function s(a, c) {
    const { gen: d, it: f } = a;
    f.schemaEnv.root.dynamicAnchors[c] = !0;
    const y = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, g = f.errSchemaPath === "#" ? f.validateName : i(a);
    d.if((0, e._)`!${y}`, () => d.assign(y, g));
  }
  ht.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: c, schema: d, self: f } = a.it, { root: y, baseId: g, localRefs: b, meta: v } = c.root, { schemaId: w } = f.opts, u = new n.SchemaEnv({ schema: d, schemaId: w, root: y, baseId: g, localRefs: b, meta: v });
    return n.compileSchema.call(f, u), (0, r.getValidate)(a, u);
  }
  return ht.default = o, ht;
}
var mt = {}, Ps;
function Ki() {
  if (Ps) return mt;
  Ps = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicRef = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ Zr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (s) => o(s, s.schema)
  };
  function o(s, i) {
    const { gen: a, keyword: c, it: d } = s;
    if (i[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const f = i.slice(1);
    if (d.allErrors)
      y();
    else {
      const b = a.let("valid", !1);
      y(b), s.ok(b);
    }
    function y(b) {
      if (d.schemaEnv.root.dynamicAnchors[f]) {
        const v = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`);
        a.if(v, g(v, b), g(d.validateName, b));
      } else
        g(d.validateName, b)();
    }
    function g(b, v) {
      return v ? () => a.block(() => {
        (0, n.callRef)(s, b), a.let(v, !0);
      }) : () => (0, n.callRef)(s, b);
    }
  }
  return mt.dynamicRef = o, mt.default = r, mt;
}
var Sn = {}, As;
function Xc() {
  if (As) return Sn;
  As = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Sn.default = n, Sn;
}
var Cn = {}, Rs;
function Zc() {
  if (Rs) return Cn;
  Rs = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ki(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Cn.default = t, Cn;
}
var Ns;
function Qc() {
  if (Ns) return _n;
  Ns = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ Ki(), n = /* @__PURE__ */ Xc(), r = /* @__PURE__ */ Zc(), o = [e.default, t.default, n.default, r.default];
  return _n.default = o, _n;
}
var kn = {}, En = {}, Ms;
function el() {
  if (Ms) return En;
  Ms = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ eo(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return En.default = t, En;
}
var xn = {}, Ts;
function tl() {
  if (Ts) return xn;
  Ts = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ eo(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return xn.default = t, xn;
}
var Pn = {}, Os;
function nl() {
  if (Os) return Pn;
  Os = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Pn.default = t, Pn;
}
var Fs;
function rl() {
  if (Fs) return kn;
  Fs = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ el(), t = /* @__PURE__ */ tl(), n = /* @__PURE__ */ nl(), r = [e.default, t.default, n.default];
  return kn.default = r, kn;
}
var An = {}, Rn = {}, zs;
function ol() {
  if (zs) return Rn;
  zs = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: s }) => (0, e._)`{unevaluatedProperty: ${s.unevaluatedProperty}}`
    },
    code(s) {
      const { gen: i, schema: a, data: c, errsCount: d, it: f } = s;
      if (!d)
        throw new Error("ajv implementation error");
      const { allErrors: y, props: g } = f;
      g instanceof e.Name ? i.if((0, e._)`${g} !== true`, () => i.forIn("key", c, (u) => i.if(v(g, u), () => b(u)))) : g !== !0 && i.forIn("key", c, (u) => g === void 0 ? b(u) : i.if(w(g, u), () => b(u))), f.props = !0, s.ok((0, e._)`${d} === ${n.default.errors}`);
      function b(u) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: u }), s.error(), y || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(f, a)) {
          const S = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, S), y || i.if((0, e.not)(S), () => i.break());
        }
      }
      function v(u, S) {
        return (0, e._)`!${u} || !${u}[${S}]`;
      }
      function w(u, S) {
        const p = [];
        for (const C in u)
          u[C] === !0 && p.push((0, e._)`${S} !== ${C}`);
        return (0, e.and)(...p);
      }
    }
  };
  return Rn.default = o, Rn;
}
var Nn = {}, Is;
function sl() {
  if (Is) return Nn;
  Is = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: c } = o, d = c.items || 0;
      if (d === !0)
        return;
      const f = s.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        o.setParams({ len: d }), o.fail((0, e._)`${f} > ${d}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(c, i)) {
        const g = s.var("valid", (0, e._)`${f} <= ${d}`);
        s.if((0, e.not)(g), () => y(g, d)), o.ok(g);
      }
      c.items = !0;
      function y(g, b) {
        s.forRange("i", b, f, (v) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: v, dataPropType: t.Type.Num }, g), c.allErrors || s.if((0, e.not)(g), () => s.break());
        });
      }
    }
  };
  return Nn.default = r, Nn;
}
var js;
function il() {
  if (js) return An;
  js = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ol(), t = /* @__PURE__ */ sl(), n = [e.default, t.default];
  return An.default = n, An;
}
var Mn = {}, Tn = {}, Ds;
function al() {
  if (Ds) return Tn;
  Ds = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: s, data: i, $data: a, schema: c, schemaCode: d, it: f } = r, { opts: y, errSchemaPath: g, schemaEnv: b, self: v } = f;
      if (!y.validateFormats)
        return;
      a ? w() : u();
      function w() {
        const S = s.scopeValue("formats", {
          ref: v.formats,
          code: y.code.formats
        }), p = s.const("fDef", (0, e._)`${S}[${d}]`), C = s.let("fType"), $ = s.let("format");
        s.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => s.assign(C, (0, e._)`${p}.type || "string"`).assign($, (0, e._)`${p}.validate`), () => s.assign(C, (0, e._)`"string"`).assign($, p)), r.fail$data((0, e.or)(l(), h()));
        function l() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${$}`;
        }
        function h() {
          const m = b.$async ? (0, e._)`(${p}.async ? await ${$}(${i}) : ${$}(${i}))` : (0, e._)`${$}(${i})`, x = (0, e._)`(typeof ${$} == "function" ? ${m} : ${$}.test(${i}))`;
          return (0, e._)`${$} && ${$} !== true && ${C} === ${o} && !${x}`;
        }
      }
      function u() {
        const S = v.formats[c];
        if (!S) {
          l();
          return;
        }
        if (S === !0)
          return;
        const [p, C, $] = h(S);
        p === o && r.pass(m());
        function l() {
          if (y.strictSchema === !1) {
            v.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${c}" ignored in schema at path "${g}"`;
          }
        }
        function h(x) {
          const P = x instanceof RegExp ? (0, e.regexpCode)(x) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, I = s.scopeValue("formats", { key: c, ref: x, code: P });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${I}.validate`] : ["string", x, I];
        }
        function m() {
          if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${$}(${i})`;
          }
          return typeof C == "function" ? (0, e._)`${$}(${i})` : (0, e._)`${$}.test(${i})`;
        }
      }
    }
  };
  return Tn.default = n, Tn;
}
var Ls;
function cl() {
  if (Ls) return Mn;
  Ls = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ al()).default];
  return Mn.default = t, Mn;
}
var st = {}, qs;
function ll() {
  return qs || (qs = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.contentVocabulary = st.metadataVocabulary = void 0, st.metadataVocabulary = [
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
var Vs;
function dl() {
  if (Vs) return Ht;
  Vs = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kc(), t = /* @__PURE__ */ Ic(), n = /* @__PURE__ */ Yc(), r = /* @__PURE__ */ Qc(), o = /* @__PURE__ */ rl(), s = /* @__PURE__ */ il(), i = /* @__PURE__ */ cl(), a = /* @__PURE__ */ ll(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    o.default,
    s.default
  ];
  return Ht.default = c, Ht;
}
var On = {}, Rt = {}, Bs;
function ul() {
  if (Bs) return Rt;
  Bs = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Rt.DiscrError = e = {})), Rt;
}
var Us;
function fl() {
  if (Us) return On;
  Us = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ul(), n = /* @__PURE__ */ tr(), r = /* @__PURE__ */ er(), o = /* @__PURE__ */ ce(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: f, parentSchema: y, it: g } = a, { oneOf: b } = y;
      if (!g.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const v = f.propertyName;
      if (typeof v != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), u = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(v)}`);
      c.if((0, e._)`typeof ${u} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: v })), a.ok(w);
      function S() {
        const $ = C();
        c.if(!1);
        for (const l in $)
          c.elseIf((0, e._)`${u} === ${l}`), c.assign(w, p($[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: v }), c.endIf();
      }
      function p($) {
        const l = c.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: $ }, l);
        return a.mergeEvaluated(h, e.Name), l;
      }
      function C() {
        var $;
        const l = {}, h = x(y);
        let m = !0;
        for (let L = 0; L < b.length; L++) {
          let F = b[L];
          if (F?.$ref && !(0, o.schemaHasRulesButRef)(F, g.self.RULES)) {
            const z = F.$ref;
            if (F = n.resolveRef.call(g.self, g.schemaEnv.root, g.baseId, z), F instanceof n.SchemaEnv && (F = F.schema), F === void 0)
              throw new r.default(g.opts.uriResolver, g.baseId, z);
          }
          const V = ($ = F?.properties) === null || $ === void 0 ? void 0 : $[v];
          if (typeof V != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
          m = m && (h || x(F)), P(V, L);
        }
        if (!m)
          throw new Error(`discriminator: "${v}" must be required`);
        return l;
        function x({ required: L }) {
          return Array.isArray(L) && L.includes(v);
        }
        function P(L, F) {
          if (L.const)
            I(L.const, F);
          else if (L.enum)
            for (const V of L.enum)
              I(V, F);
          else
            throw new Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
        }
        function I(L, F) {
          if (typeof L != "string" || L in l)
            throw new Error(`discriminator: "${v}" values must be unique strings`);
          l[L] = F;
        }
      }
    }
  };
  return On.default = i, On;
}
var Fn = {};
const pl = "https://json-schema.org/draft/2020-12/schema", hl = "https://json-schema.org/draft/2020-12/schema", ml = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, gl = "meta", yl = "Core and Validation specifications meta-schema", $l = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], vl = ["object", "boolean"], bl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", wl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, _l = {
  $schema: pl,
  $id: hl,
  $vocabulary: ml,
  $dynamicAnchor: gl,
  title: yl,
  allOf: $l,
  type: vl,
  $comment: bl,
  properties: wl
}, Sl = "https://json-schema.org/draft/2020-12/schema", Cl = "https://json-schema.org/draft/2020-12/meta/applicator", kl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, El = "meta", xl = "Applicator vocabulary meta-schema", Pl = ["object", "boolean"], Al = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Rl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Nl = {
  $schema: Sl,
  $id: Cl,
  $vocabulary: kl,
  $dynamicAnchor: El,
  title: xl,
  type: Pl,
  properties: Al,
  $defs: Rl
}, Ml = "https://json-schema.org/draft/2020-12/schema", Tl = "https://json-schema.org/draft/2020-12/meta/unevaluated", Ol = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Fl = "meta", zl = "Unevaluated applicator vocabulary meta-schema", Il = ["object", "boolean"], jl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Dl = {
  $schema: Ml,
  $id: Tl,
  $vocabulary: Ol,
  $dynamicAnchor: Fl,
  title: zl,
  type: Il,
  properties: jl
}, Ll = "https://json-schema.org/draft/2020-12/schema", ql = "https://json-schema.org/draft/2020-12/meta/content", Vl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Bl = "meta", Ul = "Content vocabulary meta-schema", Hl = ["object", "boolean"], Kl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Gl = {
  $schema: Ll,
  $id: ql,
  $vocabulary: Vl,
  $dynamicAnchor: Bl,
  title: Ul,
  type: Hl,
  properties: Kl
}, Wl = "https://json-schema.org/draft/2020-12/schema", Jl = "https://json-schema.org/draft/2020-12/meta/core", Yl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Xl = "meta", Zl = "Core vocabulary meta-schema", Ql = ["object", "boolean"], ed = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, td = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, nd = {
  $schema: Wl,
  $id: Jl,
  $vocabulary: Yl,
  $dynamicAnchor: Xl,
  title: Zl,
  type: Ql,
  properties: ed,
  $defs: td
}, rd = "https://json-schema.org/draft/2020-12/schema", od = "https://json-schema.org/draft/2020-12/meta/format-annotation", sd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, id = "meta", ad = "Format vocabulary meta-schema for annotation results", cd = ["object", "boolean"], ld = { format: { type: "string" } }, dd = {
  $schema: rd,
  $id: od,
  $vocabulary: sd,
  $dynamicAnchor: id,
  title: ad,
  type: cd,
  properties: ld
}, ud = "https://json-schema.org/draft/2020-12/schema", fd = "https://json-schema.org/draft/2020-12/meta/meta-data", pd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, hd = "meta", md = "Meta-data vocabulary meta-schema", gd = ["object", "boolean"], yd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, $d = {
  $schema: ud,
  $id: fd,
  $vocabulary: pd,
  $dynamicAnchor: hd,
  title: md,
  type: gd,
  properties: yd
}, vd = "https://json-schema.org/draft/2020-12/schema", bd = "https://json-schema.org/draft/2020-12/meta/validation", wd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, _d = "meta", Sd = "Validation vocabulary meta-schema", Cd = ["object", "boolean"], kd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ed = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, xd = {
  $schema: vd,
  $id: bd,
  $vocabulary: wd,
  $dynamicAnchor: _d,
  title: Sd,
  type: Cd,
  properties: kd,
  $defs: Ed
};
var Hs;
function Pd() {
  if (Hs) return Fn;
  Hs = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = _l, t = Nl, n = Dl, r = Gl, o = nd, s = dd, i = $d, a = xd, c = ["/properties"];
  function d(f) {
    return [
      e,
      t,
      n,
      r,
      o,
      y(this, s),
      i,
      y(this, a)
    ].forEach((g) => this.addMetaSchema(g, void 0, !1)), this;
    function y(g, b) {
      return f ? g.$dataMetaSchema(b, c) : b;
    }
  }
  return Fn.default = d, Fn;
}
var Ks;
function Ad() {
  return Ks || (Ks = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Sc(), r = /* @__PURE__ */ dl(), o = /* @__PURE__ */ fl(), s = /* @__PURE__ */ Pd(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: b, meta: v } = this.opts;
        v && (s.default.call(this, b), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ Qn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var d = /* @__PURE__ */ se();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return d._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return d.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return d.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return d.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return d.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return d.CodeGen;
    } });
    var f = /* @__PURE__ */ Xr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var y = /* @__PURE__ */ er();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return y.default;
    } });
  })(Lt, Lt.exports)), Lt.exports;
}
var Rd = /* @__PURE__ */ Ad();
const Nd = /* @__PURE__ */ ac(Rd), Md = "https://json-schema.org/draft/2020-12/schema", Td = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Od = "gufe-viz payload", Fd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", zd = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Id = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), to = {
  $schema: Md,
  $id: Td,
  title: Od,
  description: Fd,
  oneOf: zd,
  $defs: Id
}, Jp = [
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
], no = to.$id, ro = new Nd({ allErrors: !0, strict: !1 });
ro.addSchema(to, no);
const Gs = ro.getSchema(no), Gi = Object.entries(to.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Yp = Gi, oo = /* @__PURE__ */ new Map();
for (const e of Gi) {
  const t = ro.getSchema(`${no}#/$defs/${e}`);
  t && oo.set(e, t);
}
const zr = { valid: !0, issues: [] };
function Ir(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function jd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? oo.get(t) : void 0;
  return n ? n(e) ? zr : { valid: !1, issues: Ir(n.errors) } : Gs(e) ? zr : { valid: !1, issues: Ir(Gs.errors) };
}
function Xp(e, t) {
  const n = oo.get(e);
  return n ? n(t) ? zr : { valid: !1, issues: Ir(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Dd(e, t = 8) {
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
function Wi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!so[t]) return Ld(t);
  const { valid: n, issues: r } = jd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Dd(r)
  };
}
function Ld(e) {
  const t = Object.keys(so).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Zp(e) {
  return Wi(e)?.message ?? null;
}
class qd extends Ee {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Fa("payload", n, this);
    const r = Wi(n);
    if (r)
      return t.appendChild(Vd(r, n)), {};
    const o = n.type, s = so[o], i = document.createElement(s);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Vd(e, t) {
  const n = O(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(pe(e.message));
  const r = (s, i) => O(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
    s
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = Bd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function Bd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ke(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ke(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
xe("gufe-view", qd);
const yr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, io = {
  threeDmol: `https://unpkg.com/3dmol@${yr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${yr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${yr.d3}/+esm`
};
function ao(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Ji(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let Qe = null, gt = null;
function nr() {
  if (gt) return gt;
  const e = ao("threeDmol");
  return e ? (gt = e.then((t) => Qe = t || window.$3Dmol), gt) : (gt = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await Ji(io.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), gt);
}
let yt = null;
function rr() {
  if (yt) return yt;
  const e = ao("rdkit");
  return e ? (yt = e.then((t) => window.RDKit = t), yt) : (yt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Ji(io.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), yt);
}
let $r = null;
function Yi() {
  if (!$r) {
    const e = io.d3;
    $r = ao("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return $r;
}
function Xi(e, t) {
  let n = !1, r = !1;
  const o = () => {
    n = !0;
  }, s = () => {
    n = !1;
  }, i = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Kd(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s);
    }
  };
}
function Ud(e) {
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
const Hd = 1600;
function Kd(e, t) {
  const n = O(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Hd);
}
const Gd = { min: 0.25, max: 12 }, Wd = 150;
function Ws(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Wd) - t;
}
function Jd(e, t = Gd) {
  const n = Ws(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = Ws(e);
    return Number.isFinite(i) && i > 0 ? n / i : o;
  };
  return {
    zoomBy(i) {
      const a = s(), c = Math.min(t.max, Math.max(t.min, a * i)), d = c / a;
      return !Number.isFinite(d) || Math.abs(d - 1) < 1e-9 ? !1 : (o = c, e.zoom(d), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: s
  };
}
const Yd = 2e-3;
function Zi(e) {
  return Math.exp(-e.deltaY * Yd);
}
function or(e, t, n = {}) {
  const r = Jd(t, n.bounds), o = Xi(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(Zi(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function co(e, t = "Reset view") {
  const n = O("button", Ct, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const vr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Xd = [
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
], Qp = "hsv", H = [0, 0, 0], Zd = {
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
}, Qd = "rdkit", eu = !0, tu = !0, nu = !0, ru = !0, ou = "rdkit", su = "filled", iu = 0.42, au = 1.5, cu = !0, lu = "show", du = "mono", uu = 0.51, fu = 0.74, pu = 1.6, hu = 1.7, mu = 5, gu = 0.3, yu = "#d62828", $u = "#d62828", vu = "#015ab5", bu = !1, wu = "", _u = "#7c3aed", Su = {
  layout: Qd,
  alignPair: eu,
  atomNumbers: tu,
  createdDestroyed: nu,
  modified: ru,
  style: ou,
  circles: su,
  circleRadius: iu,
  circleStroke: au,
  boundary: cu,
  hydrogens: lu,
  elementColors: du,
  numScale: uu,
  labelScale: fu,
  bondWidth: pu,
  markWidth: hu,
  haloWidth: mu,
  haloOpacity: gu,
  destroyedColor: yu,
  createdColor: $u,
  modifiedColor: vu,
  stereo: bu,
  customSpec: wu,
  customColor: _u
}, Cu = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: vr.uniqueAtom,
  createdColor: vr.uniqueAtom,
  modifiedColor: vr.elementChange,
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
}, ku = ["rdkit", "coordgen", "conformer"], Eu = ["rdkit", "recolor", "halo"], xu = ["outline", "filled", "off"], Pu = ["show", "dim", "hide"], Au = ["cpk", "mono"], Ru = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Nu = /^#[0-9a-fA-F]{6}$/;
function Nt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Je(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Ru[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const $t = (e, t) => typeof e == "boolean" ? e : t, zn = (e, t) => typeof e == "string" && Nu.test(e) ? e : t;
function Mu(e) {
  const t = e && typeof e == "object" ? e : {}, n = Cu;
  return {
    version: 1,
    layout: Nt(t.layout, ku, n.layout),
    alignPair: $t(t.alignPair, n.alignPair),
    style: Nt(t.style, Eu, n.style),
    createdDestroyed: $t(t.createdDestroyed, n.createdDestroyed),
    modified: $t(t.modified, n.modified),
    destroyedColor: zn(t.destroyedColor, n.destroyedColor),
    createdColor: zn(t.createdColor, n.createdColor),
    modifiedColor: zn(t.modifiedColor, n.modifiedColor),
    boundary: $t(t.boundary, n.boundary),
    circles: Nt(t.circles, xu, n.circles),
    circleRadius: Je(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Je(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Nt(t.hydrogens, Pu, n.hydrogens),
    elementColors: Nt(t.elementColors, Au, n.elementColors),
    atomNumbers: $t(t.atomNumbers, n.atomNumbers),
    stereo: $t(t.stereo, n.stereo),
    numScale: Je(t.numScale, "numScale", n.numScale),
    labelScale: Je(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Je(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Je(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Je(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Je(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: zn(t.customColor, n.customColor)
  };
}
const Ne = Mu(Su);
function Js(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const s = /^([LlRr])[:=](.*)$/.exec(o), i = s ? s[1].toLowerCase() === "l" ? "left" : "right" : "both", a = s ? s[2] : o, c = (f) => {
      i !== "right" && t.add(f), i !== "left" && n.add(f);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const f = Math.min(+d[1], +d[2]), y = Math.min(Math.max(+d[1], +d[2]), f + r - 1);
      for (let g = f; g <= y; g++) c(g);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function br(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), c = t.has(i);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function Ys(e) {
  return `0x${e.replace("#", "")}`;
}
function jr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Tu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Ou(e, t, n) {
  const r = new Set(t.atoms), o = new Set(br(e, r, !0));
  return {
    deletions: br(e, r, n),
    changes: br(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function Xs(e, t, n, r) {
  const o = Ou(t, n, e.boundary), s = [];
  return e.createdDestroyed && n.atoms.length && s.push({
    atoms: new Set(n.atoms),
    bonds: o.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && s.push({
    atoms: new Set(n.elements),
    bonds: o.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), s;
}
let vt = null;
function Fu(e) {
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
  return vt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), vt;
}
function zu(e, t) {
  return e.style === "rdkit" ? "rdkit" : Fu(t) ? e.style : "rdkit";
}
function Iu(e, t, n, r, o, s) {
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
  e.elementColors === "mono" && (i.atomColourPalette = Zd), o === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const b of n) {
    const v = jr(b.color);
    if (o === "rdkit") for (const u of b.bonds) d[u] = v;
    if (o === "recolor" && e.circles === "off") continue;
    const w = o === "recolor" && e.circles === "filled" ? Tu(v, 0.7) : v;
    for (const u of b.atoms)
      a[u] = w, c[u] = e.circleRadius;
  }
  const f = jr(e.customColor);
  for (const b of r)
    b < s && (a[b] = f, c[b] = e.circleRadius);
  const y = Object.keys(a).map(Number);
  y.length && (i.atoms = y, i.highlightAtomColors = a, i.highlightAtomRadii = c);
  const g = Object.keys(d).map(Number);
  return g.length && (i.bonds = g, i.highlightBondColors = d), i;
}
function ju(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", me(s)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const Du = "http://www.w3.org/2000/svg";
function Qi(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function lo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const s = o.tagName.toLowerCase();
    (s === "ellipse" || s === "circle" || s === "rect") === n && r.push(o);
  }
  return r;
}
function ea(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Zs(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of Qi(e, i)) {
      const c = a.style;
      ea(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of lo(e, i, !1)) a.style.fill = s;
}
function Lu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(Du, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of Qi(e, a)) {
      if (ea(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", s.appendChild(d);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function qu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of lo(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Vu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of lo(e, s, !0)) {
        const a = i.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Bu(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const s = o.style;
          n.hydrogens === "hide" ? s.display = "none" : s.opacity = "0.22";
        }
  }
}
function Uu(e, t, n, r, o, s) {
  if (s !== "rdkit")
    for (const i of r)
      if (s === "recolor") {
        const a = n.circles === "filled";
        Zs(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? qu(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && Vu(e, n, i.atoms, o, i.color);
      } else
        Lu(e, n, i.bonds, i.color), Zs(e, n, i.atoms, i.bonds, i.color, null);
  Bu(e, t, n);
}
const sr = `
`, Dr = "$$$$";
function Lr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(sr);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), s = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let f = 0; f < o; f++) {
    const y = n[4 + f];
    if (y == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(y.substring(0, 10)) || 0,
      parseFloat(y.substring(10, 20)) || 0,
      parseFloat(y.substring(20, 30)) || 0
    ]), a.push(y.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let f = 0; f < (isFinite(s) ? s : 0); f++) {
    const y = n[4 + o + f];
    if (y == null) break;
    const g = parseInt(y.substring(0, 3), 10), b = parseInt(y.substring(3, 6), 10), v = parseInt(y.substring(6, 9), 10);
    !isFinite(g) || !isFinite(b) || c.push([g - 1, b - 1, isFinite(v) ? v : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: i };
}
function Hu(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let o = 0; o < t; o++) {
    const s = e.coords[o];
    r.push(
      s[0].toFixed(4).padStart(10) + s[1].toFixed(4).padStart(10) + s[2].toFixed(4).padStart(10) + ` ${e.symbols[o].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let o = 0; o < n; o++) {
    const s = e.bonds[o], i = s[2] === 12 ? 4 : s[2];
    r.push(
      String(s[0] + 1).padStart(3) + String(s[1] + 1).padStart(3) + String(i).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(sr);
}
const Ku = (e) => `${Hu(e)}${sr}${Dr}`, ta = (e) => e.indexOf(Dr) >= 0 ? e : `${e}${sr}${Dr}`;
function uo(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function fo(e, t, n, r, o) {
  let s = null;
  try {
    if (s = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !s) return null;
    if (r !== "conformer")
      try {
        s.set_new_coords(r === "coordgen");
      } catch {
      }
    if (o?.atoms.length && s.get_svg_with_highlights) {
      const i = {}, a = {};
      for (const d of o.atoms)
        i[d] = o.color, a[d] = o.radius;
      const c = {
        width: n,
        height: n,
        atoms: [...o.atoms],
        highlightAtomColors: i,
        highlightAtomRadii: a
      };
      return s.get_svg_with_highlights(JSON.stringify(c)) || null;
    }
    return s.get_svg(n, n) || null;
  } catch (i) {
    return console.warn("[gufe-viz] depictSVG threw -", me(i)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function na(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Qs = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], qr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, bt = (e) => e in qr, ei = 400, wr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Gu extends Ee {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = O("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = O(
      "div",
      `${wr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${lt.canvas2D};`
    );
    a.appendChild(c);
    const d = Oi();
    d.wrap.style.cssText = wr, a.appendChild(d.wrap);
    const f = O(
      "div",
      `${wr}overflow:auto;padding:16px 20px;background:${M.panelBg};color:${M.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(f);
    const y = r ? uo(r) : null, g = [
      ["Name", o || at, !1],
      ["SMILES", s || at, !0],
      ["Charge", i == null ? at : String(i), !1],
      ["Atoms", y ? String(y.atoms) : at, !1],
      ["Bonds", y ? String(y.bonds) : at, !1]
    ], b = O("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${ne.xl} 20px;align-items:baseline;`);
    f.appendChild(b);
    for (const [F, V, z] of g) {
      b.appendChild(
        O(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${M.textMuted2};`,
          F
        )
      );
      const K = O(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${M.textPrimary}` + (z ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        V
      );
      K.title = V, b.appendChild(K);
    }
    const v = Wr(t), w = O("div", Mr, o || "Unnamed molecule");
    v && a.appendChild(w);
    const u = ut(
      "small-molecule.mode",
      "2d",
      Qs.map((F) => F.id)
    ), S = ct("small-molecule.spin", !1);
    let p = u.get(), C = S.get(), $ = null, l = null;
    const h = () => {
      try {
        $?.spin(C && bt(p) ? "y" : !1);
      } catch {
      }
    }, m = (F) => {
      p = F, c.style.visibility = p === "2d" ? "visible" : "hidden", d.wrap.style.visibility = bt(p) ? "visible" : "hidden", f.style.visibility = p === "info" ? "visible" : "hidden", w.style.display = p === "info" || !v ? "none" : "block", P.disabled = !bt(p), P.style.opacity = bt(p) ? "1" : "0.5", bt(p) && $ && ($.setStyle({}, qr[p]), $.resize(), $.render()), h();
    }, x = O("div", Ei), P = Ti(
      "Spin",
      C,
      (F) => {
        C = F, h();
      },
      { title: "Toggle continuous rotation", remember: S }
    ), I = (F) => {
      F ? x.insertBefore(P, x.firstChild) : L.buttons.insertBefore(P, L.buttons.lastElementChild);
    }, L = Mi(Qs, p, (F) => m(F), {
      remember: u,
      onLayout: I,
      fit: { pane: a, bar: x }
    });
    return x.appendChild(L), I(!1), a.appendChild(x), m(p), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), d.container.appendChild(pe("No molecule provided")), { cleanup: () => L.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), rr().then((F) => {
      const V = fo(F, r, ei, Ne.layout);
      V ? na(c, V, ei) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((F) => {
      c.replaceChildren(pe(`RDKit failed to load: ${me(F)}`, !0));
    }), d.container.appendChild(pe("Loading 3D viewer...")), nr().then(() => {
      d.container.replaceChildren(), $ = Qe.createViewer(d.container, { backgroundColor: lt.viewer }), $.addModel(ta(r), "sdf"), $.setStyle({}, qr[bt(p) ? p : "stick"]), $.zoomTo(), $.render(), l = or(d.container, $), h();
    }).catch((F) => {
      d.container.replaceChildren(pe(`3D render failed: ${me(F)}`, !0));
    }), {
      onResize() {
        $ && ($.resize(), $.render());
      },
      cleanup() {
        if (L.cleanup(), l?.cleanup(), l = null, !!$) {
          try {
            $.spin(!1);
          } catch {
          }
          try {
            $.clear();
          } catch {
          }
          $ = null;
        }
      }
    });
  }
}
xe("gufe-small-molecule", Gu);
const ra = ["HOH", "WAT", "SOL", "TIP3"], ti = { hetflag: !1 }, Wu = { hetflag: !0 }, Ju = { resn: ra }, Ie = {
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
function oa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, s = 0, i = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const f = c.slice(17, 20).trim(), y = c.slice(21, 22).trim() || "_", g = c.slice(22, 26).trim(), b = c.slice(26, 27).trim();
    ra.indexOf(f) !== -1 && s++, t.add(y), n.add(`${y}|${g}${b}|${f}`);
    const v = parseInt(g, 10);
    isNaN(v) || (v < i && (i = v), v > a && (a = v));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: o,
    waters: s,
    heteroNonWater: o - s,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function sa(e) {
  return [
    `${xt(e.chains)} chains`,
    `${xt(e.residues)} residues`,
    `${xt(e.atoms)} atoms`,
    `${xt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${xt(e.waters)} water)` : "")
  ];
}
function Yu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Vr(e, t, n, r, o) {
  const s = r || (() => {
  }), i = Yu(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(ti),
    t.rep === "stick" ? { stick: { radius: Ie.stick.radius, ...i } } : t.rep === "sphere" ? { sphere: { scale: Ie.sphere.scale, ...i } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...i } }
    )
  ), e.setStyle(
    a(Wu),
    t.hetero ? {
      stick: { radius: Ie.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(Ju),
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
    try {
      Promise.resolve(
        e.addSurface(
          Qe.SurfaceType.VDW,
          { opacity: Ie.surfaceOpacity, ...i },
          a(ti)
        )
      ).then(() => {
        s(null), e.render();
      }).catch((c) => s(`Surface failed: ${me(c)}`, "error"));
    } catch (c) {
      s(`Surface failed: ${me(c)}`, "error");
    }
  }, 30);
}
function Xu(e, t) {
  e.setStyle(t, {
    stick: { radius: Ie.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Ie.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const ni = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ri = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
function ia(e) {
  const t = ut(
    "protein.representation",
    "cartoon",
    ni.map(($) => $.id)
  ), n = ut(
    "protein.color",
    "chain",
    ri.map(($) => $.id)
  ), r = ct("protein.waters", e.waters), o = ct("protein.hetero", !0), s = ct("protein.spin", !1), i = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: s.get()
  };
  let a = null, c = null;
  const d = O("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const f = O("div", ka);
  d.appendChild(f);
  const y = ({ label: $, controls: l }) => {
    const h = O("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    h.appendChild(
      O(
        "span",
        `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted};`,
        $
      )
    );
    for (const m of l) h.appendChild(m);
    return h;
  }, g = O("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${M.textMuted};`), b = y({ label: "Contents", controls: [g] });
  b.style.display = "none";
  const w = Yr(f, () => {
    const $ = O("div", `${Hr}height:100%;padding-top:${Ea};`), l = Jn(
      ni,
      i.rep,
      (I) => {
        i.rep = I, e.restyle();
      },
      t
    );
    $.appendChild(y({ label: "Style", controls: [l] }));
    const h = jt(
      ri,
      i.color,
      (I) => {
        i.color = I, e.restyle();
      },
      n
    );
    h.style.cssText += "width:100%;box-sizing:border-box;", $.appendChild(y({ label: "Color", controls: [h] }));
    const m = O("div", "display:flex;flex-wrap:wrap;gap:4px;"), x = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", s, () => a?.spin(i.spin ? "y" : !1)]
    ];
    for (const [I, L, F, V, z] of x)
      m.appendChild(
        Ti(
          L,
          i[I],
          (K) => {
            i[I] = K, z();
          },
          { title: F, remember: V }
        )
      );
    $.appendChild(y({ label: "Show", controls: [m] }));
    const P = co(() => e.reset ? e.reset() : c?.reset());
    return P.style.cssText += "width:100%;box-sizing:border-box;", $.appendChild(y({ label: "Camera", controls: [...e.camera?.() ?? [], P] })), $.appendChild(b), $;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: ct(`protein${Jr}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    }
  }), u = Wr(e.element) ? e.title || e.fallbackTitle : "";
  u && f.appendChild(
    O("div", `${Ca}pointer-events:none;font-size:${Q.heading};font-weight:${ge.bold};`, u)
  ), d.appendChild(w.panel);
  const S = Oi();
  d.appendChild(S.wrap);
  const p = O(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  return S.wrap.appendChild(p), {
    opts: i,
    pane: S,
    menu: w,
    showStatus: ($, l) => {
      if ($ == null) {
        p.style.display = "none";
        return;
      }
      p.textContent = $, p.style.display = "block";
      const h = l === "error";
      p.style.background = h ? M.warnBg : M.toolbarBg, p.style.color = h ? M.warnFg : M.textMuted, p.style.border = `1px solid ${h ? M.warnBorder : M.toolbarBorder}`;
    },
    setStats: ($) => {
      g.replaceChildren(...$.map((l) => O("div", "overflow-wrap:anywhere;", l))), b.style.display = $.length ? "" : "none";
    },
    viewer: () => a,
    setViewer: ($) => {
      a = $;
    },
    interaction: () => c,
    setInteraction: ($) => {
      c = $;
    },
    handle: {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!a) {
          try {
            a.spin(!1);
          } catch {
          }
          try {
            a.clear();
          } catch {
          }
          a = null;
        }
      }
    }
  };
}
class Zu extends Ee {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function s() {
      const a = i.viewer();
      a && Vr(a, i.opts, o, i.showStatus);
    }
    const i = ia({
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
      restyle: s
    });
    if (!r || !r.trim())
      return i.showStatus("No protein data - waiting for a PDB payload."), {};
    try {
      o = oa(r), i.setStats(sa(o));
    } catch (a) {
      i.showStatus(`PDB parse error: ${me(a)}`, "error");
    }
    return i.showStatus("Loading 3D viewer..."), nr().then(() => {
      const a = Qe.createViewer(i.pane.container, { backgroundColor: lt.viewer });
      i.setViewer(a), a.addModel(r, "pdb"), Vr(a, i.opts, o, i.showStatus), a.zoomTo(), a.spin(i.opts.spin ? "y" : !1), a.render(), i.setInteraction(or(i.pane.container, a));
    }).catch((a) => {
      i.showStatus(`Failed to render structure: ${me(a)}`, "error");
    }), i.handle;
  }
}
xe("gufe-protein", Zu);
function Et(e) {
  const t = /* @__PURE__ */ new Map();
  return Br(e, t, /* @__PURE__ */ new Set()), t;
}
function Br(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Br(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) Br(o, t, n);
}
function Ge(e, t) {
  return t ? e.get(t) : void 0;
}
function Se(e, t, n) {
  const r = Ge(e, t);
  return r?.type === n ? r : void 0;
}
function po(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const s = e.get(o);
    s && (r.add(o), n.push(s));
  }
  return n;
}
function tt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const ho = "Cmd/Ctrl-click to select several.";
function Qu(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : tt(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function ef(e, t) {
  navigator.clipboard?.writeText(e).catch(() => oi(e, t)), navigator.clipboard || oi(e, t);
}
function oi(e, t) {
  const n = O("textarea", `width:100%;height:80px;font-size:${Q.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function tf(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = O("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function aa(e) {
  const { words: t } = e, n = ut(e.setting, "names", ["names", "keys"]), r = O("div", "display:flex;flex-direction:column;gap:6px;"), o = O("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${M.textMuted};`);
  o.appendChild(O("span", "", "copy as"));
  const s = jt(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    n.get(),
    () => {
    },
    n
  );
  s.style.flex = "1", o.appendChild(s), r.appendChild(o);
  const i = O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`), a = (f) => {
    i.textContent = f;
  }, c = O("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [f, y, g] of d) {
    const b = O("button", `${Ct}flex:1;`, y.button);
    b.title = g, b.onclick = (v) => {
      const w = s.value, u = Qu(e.nodes, e.edges, e.selected, f, w);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : f === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${ho}` : "Nothing to copy."
        );
        return;
      }
      const S = u.split(`
`).length;
      v.shiftKey ? (tf(u, `selected-${y.plural}.txt`), a(`Saved ${S} ${y.plural} to a file.`)) : (ef(u, r), a(
        f === "edges" ? `Copied ${S} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(b);
  }
  return r.appendChild(c), r.appendChild(i), r.appendChild(O("div", `font-size:${Q.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const ca = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(ca, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function si(e, t) {
  const n = document.createElementNS(ca, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const nf = 3;
function la(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const rf = { min: 0.15, max: 5 }, of = 1e-9;
function da(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? rf;
  let s = 1, i = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${s})`), n.onTransform?.(s, i, a);
  }, d = () => {
    const z = e.getBoundingClientRect();
    return {
      width: z.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: z.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, f = (z, K, Y) => Math.min(1, K / (z.maxX - z.minX + r * 2), Y / (z.maxY - z.minY + r * 2)), y = () => {
    const z = n.bounds();
    if (!z) return o.min;
    const { width: K, height: Y } = d();
    return Math.min(o.min, f(z, K, Y));
  }, g = (z) => Math.min(o.max, Math.max(y(), s * z)), b = () => {
    s = 1, i = 0, a = 0;
    const z = n.bounds();
    if (!z) {
      c();
      return;
    }
    const { width: K, height: Y } = d();
    s = f(z, K, Y), i = K / 2 - (z.minX + z.maxX) / 2 * s, a = Y / 2 - (z.minY + z.maxY) / 2 * s, c();
  }, w = Xi(e, {
    onZoom: (z) => {
      const K = e.getBoundingClientRect(), Y = z.clientX - K.left, re = z.clientY - K.top, q = g(Zi(z)), W = q / s;
      return i = Y - (Y - i) * W, a = re - (re - a) * W, s = q, c(), Math.abs(W - 1) > of;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let S = null, p = null, C = !1, $ = null;
  const l = (z) => ({
    x: z.clientX - i,
    y: z.clientY - a,
    from: { x: z.clientX, y: z.clientY }
  }), h = (z) => {
    z.pointerType === "touch" && u.size > 1 || (p = l(z), C = !1);
  }, m = (z) => {
    S || ($ && z.pointerType === "touch" && (p = { x: $.x - i, y: $.y - a, from: $ }, $ = null), p && (Math.hypot(z.clientX - p.from.x, z.clientY - p.from.y) > nf && (C = !0), i = z.clientX - p.x, a = z.clientY - p.y, c()));
  }, x = () => {
    p = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", m), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("pointerleave", x);
  const P = () => {
    const [z, K] = [...u.values()];
    return { cx: (z.x + K.x) / 2, cy: (z.y + K.y) / 2, span: Math.max(1, Math.hypot(z.x - K.x, z.y - K.y)) };
  }, I = (z) => {
    if (z.pointerType === "touch") {
      if (u.set(z.pointerId, { x: z.clientX, y: z.clientY }), u.size !== 2) {
        S = null;
        return;
      }
      S = P(), p = null, C = !0;
    }
  }, L = (z) => {
    if (z.pointerType !== "touch" || !u.has(z.pointerId) || (u.set(z.pointerId, { x: z.clientX, y: z.clientY }), !S || u.size !== 2)) return;
    z.preventDefault(), z.stopPropagation();
    const K = P(), Y = e.getBoundingClientRect(), re = g(K.span / S.span), q = re / s;
    i = K.cx - Y.left - (S.cx - Y.left - i) * q, a = K.cy - Y.top - (S.cy - Y.top - a) * q, s = re, S = K, c();
  }, F = (z) => {
    if (z.pointerType !== "touch") return;
    if (u.delete(z.pointerId), u.size === 2) {
      S = P();
      return;
    }
    S = null;
    const [K] = [...u.values()];
    $ = u.size === 1 && K ? { ...K } : null;
  };
  e.addEventListener("pointerdown", I, !0), e.addEventListener("pointermove", L, { capture: !0, passive: !1 }), e.addEventListener("pointerup", F, !0), e.addEventListener("pointercancel", F, !0);
  const V = Ud(e);
  return {
    fit: b,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: b,
    centreOn(z, K, Y = 1) {
      const { width: re, height: q } = d();
      s = Math.max(s, Y), i = re / 2 - z * s, a = q / 2 - K * s, c();
    },
    transform: () => ({ scale: s, tx: i, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(z, K, Y) {
      s = z, i = K, a = Y, c();
    },
    cleanup() {
      w.cleanup(), V.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", m), e.removeEventListener("pointerup", x), e.removeEventListener("pointercancel", x), e.removeEventListener("pointerleave", x), e.removeEventListener("pointerdown", I, !0), e.removeEventListener("pointermove", L, { capture: !0 }), e.removeEventListener("pointerup", F, !0), e.removeEventListener("pointercancel", F, !0);
    }
  };
}
const sf = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function ua(e) {
  const t = { ...e };
  for (const n of sf) delete t[n];
  return t;
}
const af = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), cf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), lf = (e) => cf.has(af(e));
function fa(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let s = 0;
  for (const i of Array.from(o.childNodes)) {
    if (i.nodeType !== 1) continue;
    const a = i.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && lf(i) || (e.appendChild(document.importNode(i, !0)), s++);
  }
  return s ? !0 : (e.replaceChildren(), !1);
}
const df = 8, uf = 64, ff = () => new Promise((e) => setTimeout(e, 0));
function Ur(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function pf(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const s = o.get_substruct_matches(t), i = JSON.parse(s || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of i) {
      const d = c.atoms;
      if (Array.isArray(d))
        for (const f of d) typeof f == "number" && a.add(f);
    }
    return [...a].sort((c, d) => c - d);
  } catch (s) {
    return console.warn("[gufe-viz] SMARTS match threw -", me(s)), null;
  } finally {
    Ur(o);
  }
}
function pa(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (i) => {
    const a = i.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const d = r.get(a);
    if (d) return { status: "ok", matched: d, unreadable: 0 };
    const f = await e();
    if (c !== o) return { status: "superseded" };
    if (!f) return { status: "unsupported" };
    if (!f.get_qmol) return { status: "unsupported" };
    let y = null;
    try {
      y = f.get_qmol(a);
    } catch {
      y = null;
    }
    if (!y) return { status: "invalid" };
    if (!y.get_substruct_matches)
      return Ur(y), { status: "unsupported" };
    const g = /* @__PURE__ */ new Map();
    let b = 0;
    try {
      let v = performance.now(), w = 0;
      for (let u = 0; u < t.length; u++) {
        const S = t[u] ? pf(f, y, t[u], n) : null;
        if (S ? S.length && g.set(u, S) : b++, !(++w < uf && performance.now() - v < df)) {
          if (await ff(), c !== o) return { status: "superseded" };
          w = 0, v = performance.now();
        }
      }
    } finally {
      Ur(y);
    }
    return r.set(a, g), { status: "ok", matched: g, unreadable: b };
  }, cancel: () => void ++o };
}
const hf = 250;
function ha(e) {
  const t = O("div", "display:flex;flex-direction:column;gap:8px;"), n = O("input", `${Wn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = O("div", `font-size:${Q.tiny};line-height:1.5;min-height:1.5em;color:${M.textMuted2};`);
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
  }, s = (a) => {
    r.textContent = a.trim() ? "Matching..." : "", e.run(a).then(
      (c) => {
        c.status !== "superseded" && (r.textContent = o(c));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let i = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => s(n.value), hf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && s(n.value);
    }
  };
}
const mf = 1e-6;
function In(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function ii(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function gf(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function ai(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], c = s[i][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const f = t[a * 3 + a], y = t[c * 3 + c], g = (y - f) / (2 * d);
      let b;
      Math.abs(g) > 1e10 ? b = 1 / (2 * g) : b = (g >= 0 ? 1 : -1) / (Math.abs(g) + Math.sqrt(g * g + 1));
      const v = 1 / Math.sqrt(1 + b * b), w = b * v;
      t[a * 3 + a] = f - b * d, t[c * 3 + c] = y + b * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== c) {
          const S = t[u * 3 + a], p = t[u * 3 + c];
          t[u * 3 + a] = v * S - w * p, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = w * S + v * p, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const S = n[u * 3 + a], p = n[u * 3 + c];
        n[u * 3 + a] = v * S - w * p, n[u * 3 + c] = w * S + v * p;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function yf(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let $ = 0; $ < n; $++)
    r[0] += e[$][0], r[1] += e[$][1], r[2] += e[$][2], o[0] += t[$][0], o[1] += t[$][1], o[2] += t[$][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let $ = 0; $ < n; $++) {
    const l = e[$][0] - r[0], h = e[$][1] - r[1], m = e[$][2] - r[2], x = t[$][0] - o[0], P = t[$][1] - o[1], I = t[$][2] - o[2];
    s[0] += l * x, s[1] += l * P, s[2] += l * I, s[3] += h * x, s[4] += h * P, s[5] += h * I, s[6] += m * x, s[7] += m * P, s[8] += m * I;
  }
  const i = ii(s), a = In(i, s), c = In(s, i);
  let d = ai(a), f = ai(c);
  function y($) {
    const l = [0, 1, 2].sort((m, x) => $.values[x] - $.values[m]), h = new Array(9);
    for (let m = 0; m < 3; m++) {
      const x = l[m];
      h[m] = $.vectors[x], h[3 + m] = $.vectors[3 + x], h[6 + m] = $.vectors[6 + x];
    }
    return {
      values: [$.values[l[0]], $.values[l[1]], $.values[l[2]]],
      vectors: h
    };
  }
  d = y(d), f = y(f);
  const g = d.vectors, b = f.vectors;
  for (let $ = 0; $ < 3; $++) {
    const l = g[$], h = g[3 + $], m = g[6 + $], x = s[0] * l + s[1] * h + s[2] * m, P = s[3] * l + s[4] * h + s[5] * m, I = s[6] * l + s[7] * h + s[8] * m, L = b[$], F = b[3 + $], V = b[6 + $];
    x * L + P * F + I * V < 0 && (b[$] = -L, b[3 + $] = -F, b[6 + $] = -V);
  }
  const v = ii(g);
  let w = In(b, v);
  gf(w) < 0 && (b[2] = -b[2], b[5] = -b[5], b[8] = -b[8], w = In(b, v));
  const u = w[0] * o[0] + w[1] * o[1] + w[2] * o[2], S = w[3] * o[0] + w[4] * o[1] + w[5] * o[2], p = w[6] * o[0] + w[7] * o[1] + w[8] * o[2], C = d.values[1] > mf * d.values[0];
  return { R: w, t: [r[0] - u, r[1] - S, r[2] - p], determined: C };
}
function $f(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const ci = `
`, _r = 4;
function li(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", me(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function vf(e, t, n) {
  const r = [], o = [];
  for (const [f, y] of n) {
    const g = e[y], b = t[f];
    !g || !b || (r.push(g), o.push(b));
  }
  if (r.length < 2) return null;
  const s = (f) => {
    let y = 0, g = 0;
    for (const b of f)
      y += b[0], g += b[1];
    return [y / f.length, g / f.length];
  }, i = s(r), a = s(o);
  let c = null, d = -1 / 0;
  for (const f of [!1, !0]) {
    let y = 0, g = 0;
    for (let p = 0; p < r.length; p++) {
      const C = (f ? -1 : 1) * (r[p][0] - i[0]), $ = r[p][1] - i[1], l = o[p][0] - a[0], h = o[p][1] - a[1];
      y += C * h - $ * l, g += C * l + $ * h;
    }
    const b = Math.hypot(y, g);
    if (b <= d) continue;
    d = b;
    const v = Math.atan2(y, g), w = Math.cos(v), u = Math.sin(v), S = (f ? -1 : 1) * i[0];
    c = {
      cos: w,
      sin: u,
      mirror: f,
      tx: a[0] - (w * S - u * i[1]),
      ty: a[1] - (u * S + w * i[1])
    };
  }
  return c;
}
function bf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function wf(e, t, n) {
  const r = uo(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(ci);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[_r + s], a = t[s];
    if (i == null || !a) return e;
    o[_r + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = _r + r.atoms + a, d = o[c];
      if (d == null) break;
      const f = parseInt(d.substring(9, 12), 10);
      f !== 1 && f !== 6 || (o[c] = d.substring(0, 9) + String(f === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(ci);
}
function _f(e, t, n) {
  try {
    const r = (i) => Lr(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = vf(o, r(e), n);
    return s ? wf(
      t,
      o.map((i) => bf(s, i)),
      s.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", me(r)), t;
  }
}
function Sf(e, t, n, r, o) {
  const s = li(e, t, r), i = li(e, n, r);
  return !o || r === "conformer" ? { left: s, right: i } : { left: s, right: _f(s, i, o) };
}
const Cf = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, kf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Ef() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Sr = Ef() ? Cf : kf, di = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Cr = 420, xf = {
  mapped: null,
  element: Ne.modifiedColor,
  uniqueA: Ne.destroyedColor,
  uniqueB: Ne.createdColor
}, Pf = 132, Ue = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, kr = { gap: 2.5, minLiftFraction: 0.6 }, Af = 24, zt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function ui(e, t, n) {
  const r = [], o = [], s = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? o.push(i) : s.push(i);
  }
  return { atoms: r, elements: o, mapped: s };
}
function Rf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Nf(e, t, n) {
  const r = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s] ?? "", a = e.get(s);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: s, b: null, symbolA: i, symbolB: "" });
      continue;
    }
    const c = n[a] ?? "";
    r.push({ kind: i === c ? "mapped" : "element", a: s, b: a, symbolA: i, symbolB: c });
  }
  const o = new Set(e.values());
  for (let s = 0; s < n.length; s++)
    o.has(s) || r.push({ kind: "uniqueB", a: null, b: s, symbolA: "", symbolB: n[s] ?? "" });
  return r;
}
function ma(e, t) {
  const n = Se(t, e.componentA, "SmallMoleculeComponentViz"), r = Se(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: po(t, [e.componentA, e.componentB]) };
}
function Mf(e, t, n) {
  const r = [], o = [];
  for (const [i, a] of n) {
    const c = e.coords[i], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const s = yf(r, o);
  return s?.determined ? { ...t, coords: t.coords.map((i) => $f(i, s.R, s.t)) } : t;
}
function fi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Tf(e, t) {
  const n = fi(e), r = fi(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + kr.gap, a = kr.minLiftFraction * s + kr.gap;
  return { axis: o, lift: Math.max(i, a) };
}
function Of(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let s = 1 / 0;
    for (const i of o)
      i[0] < s && (s = i[0]), i[0] - s > n && (n = i[0] - s);
  }
  const r = Math.round(n * 10) / 10;
  return (r > zt.minSpread ? r : zt.minSpread) * zt.spreadFactor;
}
function Ff(e, t) {
  const n = Xd, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const f = (g) => parseInt(g.slice(1 + d * 2, 3 + d * 2), 16), y = Math.round(f(n[s]) + (f(n[i]) - f(n[s])) * a);
    c += y.toString(16).padStart(2, "0");
  }
  return c;
}
class zf extends Ee {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = Se(r, n.componentA, "SmallMoleculeComponentViz"), s = Se(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        pe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = tt(o), a = tt(s), c = Rf(n);
    let d, f;
    try {
      d = Lr(o.sdf, i), f = Lr(s.sdf, a);
    } catch (R) {
      return t.appendChild(pe(`Could not read a molecule: ${me(R)}`, !0)), {};
    }
    f = Mf(d, f, c);
    const y = /* @__PURE__ */ new Map();
    for (const [R, E] of c) y.set(E, R);
    const g = ui(c, d.symbols, f.symbols), b = ui(y, f.symbols, d.symbols), v = Wr(t), w = O("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(w);
    const u = O("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    w.appendChild(u);
    const S = ut("atom-mapping.mode", "plain", di.map((R) => R.id));
    let p = S.get();
    const C = O("div", Ei), $ = Mi(
      di,
      p,
      (R) => {
        p = R, W();
      },
      { remember: S, fit: { pane: w, bar: C } }
    );
    C.appendChild($), w.appendChild(C);
    let l = [], h = 0, m = !0;
    const x = () => {
      h && cancelAnimationFrame(h), h = 0;
      for (const R of l) {
        R.interaction?.cleanup();
        try {
          R.viewer?.clear();
        } catch {
        }
      }
      l = [], u.replaceChildren();
    }, P = (R) => {
      const E = O("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), j = O("div", "flex:1;position:relative;min-height:0;");
      j.dataset.gufeViewer = "", E.appendChild(j), v && E.appendChild(O("div", Mr, R)), u.appendChild(E);
      const N = { container: j, viewer: null, interaction: null };
      return l.push(N), N;
    }, I = () => {
      if (l.length < 2) return;
      const R = l.map(() => "");
      let E = !1;
      const j = () => {
        if (m) {
          if (!E)
            for (let N = 0; N < l.length; N++) {
              const _ = l[N].viewer;
              if (!_) continue;
              const k = JSON.stringify(_.getView());
              if (k !== R[N]) {
                E = !0;
                for (let D = 0; D < l.length; D++)
                  D !== N && l[D].viewer && (l[D].viewer.setView(_.getView()), l[D].viewer.render()), R[D] = k;
                E = !1;
                break;
              }
            }
          h = requestAnimationFrame(j);
        }
      };
      h = requestAnimationFrame(j);
    }, L = (R, E) => {
      const j = Qe.createViewer(R.container, { backgroundColor: lt.viewer });
      for (const { mol: N } of E) j.addModel(Ku(N), "sdf");
      return R.viewer = j, j;
    }, F = (R) => {
      R.viewer && (R.interaction = or(R.container, R.viewer));
    }, V = () => {
      for (const R of [d, f]) {
        const E = P(R.name), j = L(E, [{ mol: R }]);
        j.setStyle(
          {},
          { stick: { radius: Ue.stick, colorscheme: "Jmol" }, sphere: { scale: Ue.sphere, colorscheme: "Jmol" } }
        ), j.zoomTo(), j.render(), F(E);
      }
      I();
    }, z = () => {
      const R = Ne, E = Js(R.customSpec), j = [
        { mol: d, uniques: g, side: "left", custom: E.left },
        { mol: f, uniques: b, side: "right", custom: E.right }
      ];
      for (const N of j) {
        const _ = P(N.mol.name), k = L(_, [{ mol: N.mol }]);
        k.setStyle(
          {},
          { stick: { radius: Ue.stick, color: Sr.core }, sphere: { scale: Ue.sphere, color: Sr.core } }
        );
        const D = (G, U) => {
          k.addStyle(
            { serial: G },
            {
              stick: { radius: Ue.markStick, color: Ys(U) },
              sphere: { scale: Ue.markSphere, color: Ys(U) }
            }
          );
        };
        for (const G of Xs(R, N.mol, N.uniques, N.side))
          for (const U of G.atoms) D(U, G.color);
        for (const G of N.custom)
          G < N.mol.symbols.length && D(G, R.customColor);
        k.zoomTo(), k.render(), F(_);
      }
      I();
    }, K = () => {
      const R = P(`${i} (left), both overlaid (middle), ${a} (right)`), E = Of(d.coords, f.coords), j = (te, A) => ({
        ...te,
        coords: te.coords.map(([T, B, J]) => [T + A, B, J])
      }), N = j(d, -E), _ = j(f, E), k = L(R, [{ mol: N }, { mol: _ }, { mol: d }, { mol: f }]);
      k.setStyle({}, { stick: {} });
      const D = Array.from(c);
      D.forEach(([te, A], T) => {
        const B = N.coords[te], J = _.coords[A];
        if (!B || !J) return;
        const ee = Ff(T, D.length);
        for (const [X, oe, ie] of [B, J])
          k.addSphere({
            center: { x: X, y: oe, z: ie },
            radius: zt.sphereRadius,
            color: ee,
            alpha: zt.sphereAlpha
          });
      }), k.zoomTo();
      const { clientWidth: G, clientHeight: U } = R.container, Z = G - 2 * Af;
      Z > 0 && Z < U && k.zoom(Z / U), k.render(), F(R);
    }, Y = () => {
      const R = P(`${i} to ${a}  (${c.size} mapped pairs)`), { axis: E, lift: j } = Tf(d.coords, f.coords), N = {
        ...f,
        coords: f.coords.map((D) => {
          const G = [D[0], D[1], D[2]];
          return G[E] += j, G;
        })
      }, _ = L(R, [{ mol: d }, { mol: N }]), k = {
        stick: { radius: Ue.stick, colorscheme: "Jmol" },
        sphere: { scale: Ue.pairSphere, colorscheme: "Jmol" }
      };
      _.setStyle({ model: 0 }, k), _.setStyle({ model: 1 }, k);
      for (const [D, G] of c) {
        const U = d.coords[D], Z = N.coords[G];
        !U || !Z || _.addCylinder({
          start: { x: U[0], y: U[1], z: U[2] },
          end: { x: Z[0], y: Z[1], z: Z[2] },
          radius: Ue.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Sr.pairLine
        });
      }
      _.zoomTo(), E === 2 ? _.rotate(90, "x") : E === 0 && _.rotate(-90, "z"), _.render(), F(R);
    }, re = () => {
      const R = Ne, E = Js(R.customSpec), N = [
        { mol: d, uniques: g, side: "left", custom: E.left },
        { mol: f, uniques: b, side: "right", custom: E.right }
      ].map((_) => {
        const k = O("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), D = O(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${lt.canvas2D};`
        );
        return D.appendChild(pe("Loading 2D depiction...")), k.appendChild(D), v && k.appendChild(O("div", Mr, _.mol.name)), u.appendChild(k), { box: D, side: _ };
      });
      rr().then((_) => {
        const k = zu(R, _), D = Sf(_, o.sdf, s.sdf, R.layout, R.alignPair ? c : null);
        for (const { box: G, side: U } of N) {
          const Z = Xs(R, U.mol, U.uniques, U.side), te = Iu(
            R,
            Cr,
            Z,
            U.custom,
            k,
            U.mol.symbols.length
          ), A = ju(_, U.side === "left" ? D.left : D.right, Cr, te);
          if (G.replaceChildren(), !A) {
            G.appendChild(pe("Failed to parse molecule", !0));
            continue;
          }
          na(G, A, Cr);
          const T = G.querySelector("svg");
          T && Uu(T, U.mol, R, Z, U.custom, k);
        }
      }).catch((_) => {
        for (const { box: k } of N)
          k.replaceChildren(pe(`RDKit failed to load: ${me(_)}`, !0));
      });
    }, q = () => {
      const R = O(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(R);
      const E = O("div", "display:flex;flex-direction:column;gap:2px;");
      E.appendChild(
        O(
          "div",
          `font-size:${Q.title};font-weight:${ge.bold};color:${je.title};`,
          n.name || `${i} to ${a}`
        )
      ), R.appendChild(E);
      const j = Nf(c, d.symbols, f.symbols), N = O("div", Re.row), _ = [];
      let k = null;
      const D = (X, oe, ie, de) => {
        const fe = O("button", `${Re.plain}${Re.button}`);
        fe.type = "button", fe.appendChild(Te(X, String(oe), de)), fe.onclick = () => {
          k = k === ie ? null : ie, J();
        }, _.push({ button: fe, kinds: ie }), N.appendChild(fe);
      }, G = (X, oe) => {
        const ie = O("span", Re.plain);
        ie.appendChild(Te(X, oe)), N.appendChild(ie);
      };
      D("mapped atoms", c.size, ["mapped", "element"]), D("element changes", g.elements.length, ["element"], Ne.modifiedColor), D(`unique to ${i}`, g.atoms.length, ["uniqueA"], Ne.destroyedColor), D(`unique to ${a}`, b.atoms.length, ["uniqueB"], Ne.createdColor), G(`atoms in ${i}`, String(d.symbols.length)), G(`atoms in ${a}`, String(f.symbols.length)), G("score", n.score == null ? at : n.score.toFixed(3)), R.appendChild(N), R.appendChild(O("div", Tr, "Correspondence"));
      const U = O("div", Or);
      R.appendChild(U);
      const Z = O(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Pf}px,1fr));gap:${ne.xs} ${ne.md};font-family:${Q.mono};font-size:${Q.small};color:${je.primary};`
      );
      R.appendChild(Z);
      const te = String(Math.max(d.symbols.length, f.symbols.length, 1) - 1).length, A = (X, oe) => `${(X == null ? at : String(X)).padStart(te)} ${oe.padEnd(2)}`, T = (X) => {
        if (X.kind === "uniqueA") return `${i} atom ${X.a} ${X.symbolA} maps to nothing`;
        if (X.kind === "uniqueB") return `${a} atom ${X.b} ${X.symbolB} maps to nothing`;
        const oe = X.kind === "element" ? ", an element change" : "";
        return `${i} atom ${X.a} ${X.symbolA} maps to ${a} atom ${X.b} ${X.symbolB}${oe}`;
      }, B = (X) => {
        const oe = O(
          "div",
          `white-space:pre;padding:${ne.xs} ${ne.md};border-radius:${Oe.sm};background:${lt.card};border-left:3px solid ${xf[X.kind] ?? "transparent"};`,
          `${A(X.a, X.symbolA)} -> ${A(X.b, X.symbolB)}`
        );
        return oe.title = T(X), oe.dataset.gufeRelation = X.kind, oe;
      }, J = () => {
        const X = k, oe = X ? j.filter((ie) => X.includes(ie.kind)) : j;
        Z.replaceChildren(...oe.map(B)), oe.length || Z.appendChild(
          O("div", `${Or}grid-column:1/-1;`, k ? "No atoms of that kind." : "This mapping has no atoms.")
        ), U.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${i} -> ${a}, by atom index and element` + (k ? "; click the chip again for all of them" : "");
        for (const ie of _) {
          const de = ie.kinds === k;
          ie.button.style.cssText = `${Re.plain}${de ? Re.active : Re.button}`, ie.button.setAttribute("aria-pressed", String(de)), ie.button.title = de ? "Show every atom" : "Show only these atoms";
        }
      };
      J();
      const ee = Object.entries(n.annotations ?? {}).filter(([X]) => X !== "score");
      if (ee.length) {
        R.appendChild(O("div", Tr, "Annotations"));
        const X = O("div", `${Pa}color:${je.faint};`);
        for (const [oe, ie] of ee)
          X.appendChild(O("div", "", `${oe}: ${String(ie)}`));
        R.appendChild(X);
      }
    }, W = () => {
      if (x(), p === "info") {
        q();
        return;
      }
      if (p === "2d") {
        re();
        return;
      }
      u.appendChild(pe("Loading 3D viewer...")), nr().then(() => {
        m && (u.replaceChildren(), p === "colored" ? z() : p === "openfe" ? K() : p === "lines" ? Y() : V());
      }).catch((R) => {
        u.replaceChildren(pe(`3D render failed: ${me(R)}`, !0));
      });
    };
    return W(), {
      onResize() {
        for (const R of l)
          R.viewer && (R.viewer.resize(), R.viewer.render());
      },
      cleanup() {
        m = !1, $.cleanup(), x();
      }
    };
  }
}
xe("gufe-atom-mapping", zf);
const pi = ["Force-directed", "Circular", "Radial"], If = "ligand-network", jf = "Click a ligand or an edge to see it.";
function Df(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Lf(e) {
  return ua(e);
}
const hi = (e) => Math.round(e * 100) / 100;
function qf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, s = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: s };
}
function Vf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Mt = { initial: 0.58, min: 0.25, max: 0.8 }, Me = 38, mi = 200, Bf = 4, Uf = 14, Hf = 18, _e = {
  fontSize: 11,
  below: Me + 12,
  minFontSize: 7,
  insideWidth: (Me - 6) * 2
}, Ft = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, gi = 1.5, Kf = 6.5, Gf = 0.9, Wf = 14, Er = { size: 8, clearance: 8 }, Jf = { fontSize: 10 }, Yf = 0.4, Xf = jr(M.netMatchAtom), Tt = { padding: 4, opacity: 0.95 }, Zf = 3, St = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Qf = (e) => St.find((t) => e >= t.from) ?? St[St.length - 1], ep = (e) => St[Math.min(St.indexOf(e) + 1, St.length - 1)], jn = 200, tp = 24, xr = { node: 0.12, edge: 0.06 }, np = 1.8, yi = 2 * Me + 68, Ce = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: yi,
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
  collisionPadding: yi / 2 - Me,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function rp(e) {
  const t = O(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Q.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
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
function op(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const s = le("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Me + Er.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Er.size,
      markerHeight: Er.size,
      orient: "auto"
    });
    return s.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function sp(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function ip(e) {
  const [t, n] = M.netEdgeRamp.map(sp), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const He = tt, ap = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function cp(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (v) => (e.matched().get(v) ?? []).join(","), s = (v, w) => {
    if (t.has(w) || n.has(w)) return;
    const u = e.nodes[w], S = e.matched().get(w), p = u.sdf && fo(
      v,
      u.sdf,
      mi,
      Ne.layout,
      S && { atoms: S, color: Xf, radius: Yf }
    );
    if (!p) {
      n.add(w);
      return;
    }
    if (!fa(e.depictionGroups[w], p, mi, (Me - Bf) * 2)) {
      n.add(w);
      return;
    }
    t.add(w), r[w] = o(w);
  }, i = () => {
    for (const v of [...t])
      r[v] !== o(v) && (e.depictionGroups[v].replaceChildren(), t.delete(v));
  }, a = [], c = (v, w) => {
    if (a[v]) return a[v];
    w.setAttribute("font-size", String(_e.fontSize));
    let u = 0;
    try {
      u = w.getBBox().width;
    } catch {
      return _e.fontSize;
    }
    if (!u) return _e.fontSize;
    const S = _e.fontSize * _e.insideWidth / u;
    return a[v] = Math.max(_e.minFontSize, Math.min(_e.fontSize, S)), a[v];
  }, d = [], f = (v) => {
    const w = e.captionPlates[v];
    if (d[v] === _e.below) {
      w.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[v].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      w.setAttribute("display", "none");
      return;
    }
    w.setAttribute("x", String(u.x - Ft.captionPadX)), w.setAttribute("y", String(u.y - Ft.captionPadY)), w.setAttribute("width", String(u.width + Ft.captionPadX * 2)), w.setAttribute("height", String(u.height + Ft.captionPadY * 2)), w.setAttribute("display", "inline"), d[v] = _e.below;
  }, y = (v, w) => {
    const u = w.structure && !t.has(v) ? ep(w) : w;
    e.depictionGroups[v].setAttribute("display", u.structure ? "inline" : "none"), e.plates[v].setAttribute("display", u.structure ? "inline" : "none");
    const S = e.matched().has(v), p = e.circles[v];
    p.setAttribute("fill", u.disc ? S ? M.netMatchFill : M.netNodeFill : "none"), p.setAttribute("stroke", u.disc ? S ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[v].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[v], $ = u.name === "below";
    if (C.setAttribute("fill", S ? M.netMatchStroke : $ ? M.netDepictCaption : M.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), $ || e.captionPlates[v].setAttribute("display", "none"), u.name === "none") return;
    const l = u.name === "inside";
    C.setAttribute("y", l ? "0" : String(_e.below)), C.setAttribute("dominant-baseline", l ? "middle" : "auto"), C.setAttribute("font-size", String(l ? c(v, C) : _e.fontSize)), $ && f(v);
  };
  let g = null;
  return { apply: (v, w, u) => {
    const S = Qf(v);
    g = S, e.stage.setAttribute("data-detail", S.id), e.edgeLabels.setAttribute("display", S.edgeScores ? "inline" : "none");
    for (let l = 0; l < e.nodes.length; l++) y(l, S);
    if (!S.structure) return;
    const { width: p, height: C } = e.viewport(), $ = [];
    e.nodes.forEach((l, h) => {
      if (t.has(h) || n.has(h)) return;
      const m = l.x * v + w, x = l.y * v + u;
      m < -jn || x < -jn || m > p + jn || x > C + jn || $.push(h);
    }), $.length && e.rdkit().then((l) => {
      if (!(!l || g !== S))
        for (const h of $)
          s(l, h), y(h, S);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function lp(e) {
  const t = _t("ligand-network.query"), n = Kr("ligand-network.minScore", 0, 0, 1), r = O("div", Hr), o = O("input", `${Wn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const s = ha({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: _t("ligand-network.smarts"),
    run: (w) => e.match(w),
    describe: (w) => {
      const u = w.unreadable ? `, ${w.unreadable} could not be read` : "";
      return `${w.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(s.element);
  const i = O("div", `display:flex;align-items:center;gap:8px;font-size:${Q.small};color:${M.textMuted};`), a = O("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), c = O("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), i.appendChild(O("span", "", "score >=")), i.appendChild(c), i.appendChild(a), r.appendChild(i);
  const d = O("div", `font-size:${Q.small};color:${M.textMuted2};`);
  r.appendChild(d);
  const f = O("div", Ci);
  r.appendChild(f), r.appendChild(O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`, ho));
  const y = aa({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild(y.box);
  const g = O("button", `${Ct}width:100%;`, "Clear selection");
  g.onclick = () => {
    e.selected.clear(), v(), e.refresh();
  }, r.appendChild(g);
  const b = (w) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? He(w).toLowerCase().includes(u) || (w.smiles ?? "").toLowerCase().includes(u) || w["gufe-key"].toLowerCase().includes(u) : !0;
  }, v = () => {
    y.clearNote(), f.replaceChildren();
    const w = e.nodes.map((u, S) => ({ node: u, index: S })).filter(({ node: u }) => b(u));
    d.textContent = `${w.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: S } of w) {
      const p = u["gufe-key"], C = O(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(p) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(p) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), $ = O("span", "flex:1;min-width:0;overflow-wrap:anywhere;", He(u));
      $.title = `${He(u)}
${u.smiles ?? ""}`, C.appendChild($), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(p) ? e.selected.delete(p) : e.selected.add(p) : (e.selected.clear(), e.selected.add(p), e.focus(S)), v(), e.refresh();
      }, f.appendChild(C);
    }
    w.length || f.appendChild(O("div", `font-size:${Q.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), v(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, v(), s.apply(), r;
}
class dp extends Ee {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = [];
    let s = 0;
    for (const A of n.nodes ?? []) {
      const T = Se(r, A, "SmallMoleculeComponentViz");
      if (!T) {
        s++;
        continue;
      }
      o.push({ ...T, x: 0, y: 0 });
    }
    const i = new Map(o.map((A) => [A["gufe-key"], A])), a = [];
    let c = 0;
    for (const A of n.edges ?? []) {
      const T = i.get(A.componentA), B = i.get(A.componentB);
      if (!T || !B) {
        c++;
        continue;
      }
      a.push({ ...A, index: a.length, from: T, to: B });
    }
    const d = kt(n.name || "Ligand network");
    d.statsEl.appendChild(Te("ligands", String(o.length))), d.statsEl.appendChild(Te("mappings", String(a.length))), t.appendChild(d);
    const f = O("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const y = /* @__PURE__ */ new Set(), g = { minScore: 0 }, b = { text: "" };
    let v = () => {
    }, w = null;
    const u = () => w ??= rr().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", me(A)), null)), S = pa(
      u,
      o.map((A) => A.sdf ?? "")
    );
    let p = /* @__PURE__ */ new Map(), C = () => {
    };
    const $ = async (A) => {
      const T = await S.run(A);
      return T.status === "superseded" || (p = T.status === "ok" ? T.matched : /* @__PURE__ */ new Map(), C()), T;
    }, l = Yr(
      d,
      () => lp({
        nodes: o,
        edges: a,
        selected: y,
        filter: g,
        query: b,
        refresh: () => v(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (A) => {
          K(A), Z({ kind: "ligand", index: A });
        },
        match: (A) => $(A)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => te(),
        remember: ct("ligand-network.menuOpen", !1)
      }
    );
    l.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", f.appendChild(l.panel);
    let h = () => {
    };
    const m = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), x = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`);
    f.appendChild(m), f.appendChild(
      zi(f, m, x, {
        min: Mt.min,
        max: Mt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Kr("ligand-network.canvasShare", Mt.initial, Mt.min, Mt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (A) => Ii(l.panel, A)
      })
    ), f.appendChild(x);
    const P = O("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    m.appendChild(P);
    const I = ut("ligand-network.layout", "Force-directed", pi), L = this.#n(
      (A) => te(A),
      () => D(),
      I
    );
    m.appendChild(L.bar);
    const F = this.#e(x, r);
    if (!o.length)
      return P.appendChild(
        pe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), F.message("Nothing to show."), {};
    s && dt(
      P,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(P, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const V = u(), z = rp(P);
    let K = () => {
    };
    const Y = qf(za(If), o.length);
    let re = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, q = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const A = Y.selectedKind ?? "edge";
      Y.selected < (A === "ligand" ? o.length : a.length) && (q = { kind: A, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), R = !1, E = null, j = I.get(), N = !1, _ = !0, k = () => {
    }, D = () => {
    }, G = 0;
    const U = () => {
      if (!q) {
        F.message(a.length ? jf : "Click a ligand to see it.");
        return;
      }
      q.kind === "edge" ? F.showMapping(a[q.index]) : F.showLigand(o[q.index]);
    }, Z = (A) => {
      q = A, U(), k();
    }, te = (A = j) => {
      const T = R && A === j ? W() : null, B = ++G;
      j = A, E?.(), E = null, P.querySelectorAll("svg").forEach((oe) => oe.remove());
      const J = P.clientWidth || 800, ee = P.clientHeight || 600;
      up(o, J, ee, j, a), Y && Vf(o, Y.nodes);
      const X = () => {
        if (!_ || B !== G) return;
        const oe = this.#t(P, o, a, J, ee, Z, V, z);
        k = () => oe.setSelected(q), D = oe.reset, E = oe.cleanup, K = (de) => oe.focusOn(de), W = oe.transform, v = () => {
          const de = b.text.trim().toLowerCase(), fe = y.size > 0 || de.length > 0, he = /* @__PURE__ */ new Set();
          for (const Pe of o) {
            const Le = Pe["gufe-key"], nt = y.has(Le) || de.length > 0 && (He(Pe).toLowerCase().includes(de) || (Pe.smiles ?? "").toLowerCase().includes(de) || Le.toLowerCase().includes(de));
            (!fe || nt) && he.add(Le);
          }
          const De = /* @__PURE__ */ new Set();
          a.forEach((Pe, Le) => {
            (Pe.score ?? 0) < g.minScore || !he.has(Pe.from["gufe-key"]) || !he.has(Pe.to["gufe-key"]) || De.add(Le);
          });
          const ve = fe || g.minScore > 0;
          oe.setEmphasis(ve ? he : null, ve ? De : null);
        }, C = () => oe.setMatches(p), k(), v(), C();
        const ie = re ?? T;
        ie ? (oe.setTransform(ie.scale, ie.tx, ie.ty), re = null) : oe.fit(), R = !0;
      };
      if (j !== "Force-directed" || N || Y) {
        X();
        return;
      }
      fp(o, a, J, ee).then((oe) => {
        if (!(!_ || B !== G)) {
          if (oe) {
            X();
            return;
          }
          N = !0, L.picker.value = "Circular", dt(P, "d3 could not be loaded - showing the circular layout instead"), te("Circular");
        }
      }, X);
    };
    return h = () => te(), te(), U(), {
      onResize: () => te(),
      cleanup: () => {
        _ = !1, S.cancel(), z.remove(), E?.();
      },
      viewState: () => ({
        nodes: o.map((A) => [hi(A.x), hi(A.y)]),
        ...W(),
        selected: q ? q.index : -1,
        selectedKind: q ? q.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = O(
      "div",
      ki.bottom
    ), s = O("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${M.textMuted};`);
    s.appendChild(O("span", "", "score")), s.appendChild(
      O(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(O("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(O("label", `font-size:${Q.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const i = jt(
      pi.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(i), o.appendChild(co(n, "Reset pan and zoom")), { bar: o, picker: i };
  }
  /**
   * The right-hand pane: whatever is open, drawn by the view that owns it.
   *
   * An edge is a mapping, so it is `<gufe-atom-mapping>`; a node is one ligand,
   * so it is `<gufe-small-molecule>` - the same two elements a payload of either
   * kind renders through on its own. Neither picture is drawn twice, so the
   * in-context one and the standalone one cannot drift apart, and clicking
   * either half of the graph puts the reader in front of a view they have
   * already met.
   *
   * Deliberately nothing but that element, either way. Each carries its own
   * header and its own labels, so a pane title, a heading repeating the names
   * and a list of properties underneath were all saying a second time what the
   * picture below them already said.
   */
  #e(t, n) {
    const r = O("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = (i) => r.replaceChildren(pe(i)), s = (i, a) => {
      const c = document.createElement(i);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (i) => s("gufe-atom-mapping", ma(Df(i), n)),
      showLigand: (i) => s("gufe-small-molecule", Lf(i)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, s, i, a, c) {
    const d = le("svg", {
      class: "gufe-graph",
      width: o,
      height: s,
      style: "display:block;touch-action:none;"
    }), f = le("g");
    d.appendChild(f), t.appendChild(d);
    const y = le("defs"), g = op(y);
    d.appendChild(y);
    const b = [], v = le("g"), w = le("g"), u = le("g", { "pointer-events": "none" }), S = le("g");
    f.append(v, w, u, S);
    for (const z of r) {
      const K = ip(z.score), Y = gi + (z.score ?? 0.5) * (Kf - gi), re = le("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + Tt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), q = le("line", {
        stroke: K,
        "stroke-width": Y,
        "stroke-opacity": Gf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${g(K)})`,
        "pointer-events": "none"
      }), W = le("line", { stroke: "transparent", "stroke-width": Wf, style: "cursor:pointer;" });
      W.addEventListener("click", (j) => {
        j.stopPropagation(), i({ kind: "edge", index: z.index });
      }), W.addEventListener("mousemove", (j) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Ke(He(z.from))} -&gt; ${Ke(He(z.to))}</div>` + (z.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${z.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Q.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          j.offsetX,
          j.offsetY
        );
      }), W.addEventListener("mouseleave", () => c.hide()), b.push(re), v.append(re, q), w.appendChild(W);
      const R = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Jf.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      R.textContent = z.score == null ? "" : z.score.toFixed(2);
      const E = le("g", { class: "gufe-edge-label" });
      E.appendChild(R), u.appendChild(E);
    }
    const p = [], C = [], $ = [], l = [], h = [], m = [], x = [], P = n.map((z) => {
      const K = le("g", { class: "gufe-node", style: "cursor:grab;" });
      K.addEventListener("mousemove", (N) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Ke(He(z))}</div>` + (z.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ke(z.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${Ke(z["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${M.textMuted2};">Click to see the ligand</div>`,
          N.offsetX,
          N.offsetY
        );
      }), K.addEventListener("mouseleave", () => c.hide());
      const Y = le("circle", {
        class: "gufe-node-halo",
        r: Me + Tt.padding,
        fill: "none",
        stroke: M.netHaloColor,
        "stroke-width": Tt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      K.appendChild(Y), h.push(Y);
      const re = le("circle", {
        class: "gufe-node-disc",
        r: Me,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      K.appendChild(re), C.push(re);
      const q = le("circle", {
        class: "gufe-node-plate",
        r: Me,
        fill: M.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      K.appendChild(q), $.push(q);
      const W = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      K.appendChild(W), p.push(W);
      const R = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Hf,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      R.textContent = He(z).slice(0, 2).toUpperCase(), K.appendChild(R), m.push(R);
      const E = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: _e.below,
        "font-size": _e.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      E.textContent = ap(He(z), Uf), E.setAttribute("display", "none"), x.push(E);
      const j = le("rect", {
        class: "gufe-node-caption-plate",
        rx: Ft.captionRadius,
        fill: M.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return l.push(j), K.appendChild(j), K.appendChild(E), S.appendChild(K), K;
    }), I = () => {
      r.forEach((z, K) => {
        for (const re of [b[K], v.children[K * 2 + 1], w.children[K]]) {
          const q = re;
          q.setAttribute("x1", String(z.from.x)), q.setAttribute("y1", String(z.from.y)), q.setAttribute("x2", String(z.to.x)), q.setAttribute("y2", String(z.to.y));
        }
        u.children[K].setAttribute(
          "transform",
          `translate(${(z.from.x + z.to.x) / 2},${(z.from.y + z.to.y) / 2 - 8})`
        );
      }), n.forEach((z, K) => P[K].setAttribute("transform", `translate(${z.x},${z.y})`));
    };
    I();
    let L = /* @__PURE__ */ new Map();
    const F = cp({
      nodes: n,
      circles: C,
      plates: $,
      captionPlates: l,
      matched: () => L,
      captions: x,
      initials: m,
      depictionGroups: p,
      edgeLabels: u,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), V = this.#r(
      d,
      f,
      n,
      P,
      I,
      F.apply,
      (z) => i({ kind: "ligand", index: z })
    );
    return {
      setSelected(z) {
        const K = z?.kind === "edge" ? z.index : -1, Y = z?.kind === "ligand" ? z.index : -1;
        b.forEach((re, q) => re.setAttribute("opacity", q === K ? String(Tt.opacity) : "0")), h.forEach((re, q) => re.setAttribute("opacity", q === Y ? String(Tt.opacity) : "0"));
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
      setMatches(z) {
        L = z, F.forget();
        const { scale: K, tx: Y, ty: re } = V.transform();
        F.apply(K, Y, re);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(z, K) {
        P.forEach((Y, re) => {
          const q = !z || z.has(n[re]["gufe-key"]);
          Y.setAttribute("opacity", q ? "1" : String(xr.node));
        }), r.forEach((Y, re) => {
          const q = !K || K.has(re), W = q ? "0.9" : String(xr.edge);
          v.children[re * 2 + 1].setAttribute("stroke-opacity", W), u.children[re].setAttribute("opacity", q ? "1" : String(xr.edge));
        });
      },
      focusOn(z) {
        const K = n[z];
        K && V.centreOn(K.x, K.y);
      },
      setDetail: F.apply,
      depictionsDrawn: () => F.drawn(),
      fit: V.fit,
      reset: V.reset,
      transform: V.transform,
      setTransform: V.setTransform,
      cleanup: V.cleanup
    };
  }
  /**
   * Node drag and node click, over the shared camera.
   *
   * The camera - wheel zoom, background pan, framing - is `sceneCamera`, which
   * the alchemical network uses too. What stays here is what is about a ligand
   * rather than about a canvas: dragging one to a new position, and telling a
   * drag from a click. The click is here rather than with the rest of a node
   * because only this knows whether the pointer was dragging.
   */
  #r(t, n, r, o, s, i, a) {
    const c = da(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => la(r, Me),
      margin: tp,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, f) => {
      let y = null, g = !1;
      d.addEventListener("pointerdown", (v) => {
        v.stopPropagation();
        const { scale: w } = c.transform();
        y = { x: v.clientX - r[f].x * w, y: v.clientY - r[f].y * w }, g = !1, d.setPointerCapture(v.pointerId);
      }), d.addEventListener("pointermove", (v) => {
        if (!y) return;
        if (c.gesturing()) {
          y = null, g = !0;
          return;
        }
        const { scale: w } = c.transform(), u = (v.clientX - y.x) / w, S = (v.clientY - y.y) / w;
        Math.hypot(u - r[f].x, S - r[f].y) * w > Zf && (g = !0), r[f].x = r[f].fx = u, r[f].y = r[f].fy = S, s();
      });
      const b = () => {
        y = null;
      };
      d.addEventListener("pointerup", b), d.addEventListener("pointercancel", b), d.addEventListener("click", (v) => {
        v.stopPropagation(), g || a(f);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, f) => c.centreOn(d, f, np)
    };
  }
}
function up(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (c, d) => {
    c.forEach((f, y) => {
      const g = 2 * Math.PI * y / Math.max(1, c.length) - Math.PI / 2;
      f.x = s + d * Math.cos(g), f.y = i + d * Math.sin(g), f.fx = r === "Force-directed" ? void 0 : f.x, f.fy = r === "Force-directed" ? void 0 : f.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of o)
      c.get(w.from["gufe-key"]).push(w.to["gufe-key"]), c.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const d = new Map(e.map((w) => [w["gufe-key"], w])), f = e.reduce(
      (w, u) => c.get(u["gufe-key"]).length > c.get(w["gufe-key"]).length ? u : w
    ), y = /* @__PURE__ */ new Set([f["gufe-key"]]);
    let g = [f["gufe-key"]], b = 0;
    const v = Math.min(t, n) * 0.18;
    for (; g.length; ) {
      a(
        g.map((u) => d.get(u)),
        b === 0 ? 0 : b * v + 40
      );
      const w = [];
      for (const u of g)
        for (const S of c.get(u))
          y.has(S) || (y.add(S), w.push(S));
      g = w, b++;
    }
    a(e.filter((w) => !y.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function fp(e, t, n, r) {
  let o;
  try {
    if (o = await Yi(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((c) => c["gufe-key"]).distance((c) => Ce.linkBaseDistance + (1 - (c.score ?? 0.5)) * Ce.linkScoreBonus).strength(Ce.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Ce.chargeStrength).distanceMin(Ce.chargeDistanceMin).distanceMax(Ce.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Ce.centerStrength)).force("collision", o.forceCollide(Me + Ce.collisionPadding).iterations(Ce.collisionIterations)).force("x", o.forceX(n / 2).strength(Ce.drift)).force("y", o.forceY(r / 2).strength(Ce.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let c = 0; c < a * Ce.tickMultiplier; c++) i.tick();
  return !0;
}
xe("gufe-ligand-network", dp);
const pp = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function ga(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const s = Ge(t, o);
    s && (pp.includes(s.type) ? n.push(s) : s.type === "SmallMoleculeComponentViz" && r.push(s));
  }
  return { structures: n, ligands: r };
}
function hp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const $i = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], mp = 0.4;
class gp extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = ga(n, Et(n)), o = r.structures.map((g, b) => b), s = r.ligands.map((g, b) => r.structures.length + b), i = ut(
      "complex.focus",
      "site",
      $i.map((g) => g.id)
    );
    let a = i.get(), c = null;
    const d = ia({
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
      restyle: f,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () => [
        Jn(
          $i,
          a,
          (g) => {
            a = g, y();
          },
          i
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => y()
    });
    function f() {
      const g = d.viewer();
      g && (Vr(g, d.opts, c, d.showStatus, { model: o }), Xu(g, { model: s }), g.render());
    }
    function y() {
      const g = d.viewer();
      g && (a === "site" && s.length ? (g.zoomTo({ model: s }), g.zoom(mp)) : g.zoomTo(), g.render(), d.interaction()?.cleanup(), d.setInteraction(or(d.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(vi(r, () => c));
    try {
      c = oa(r.structures[0].pdb), d.setStats(vi(r, () => c));
    } catch (g) {
      d.showStatus(`PDB parse error: ${me(g)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), nr().then(() => {
      const g = Qe.createViewer(d.pane.container, { backgroundColor: lt.viewer });
      d.setViewer(g);
      for (const b of r.structures) g.addModel(b.pdb, "pdb");
      for (const b of r.ligands) g.addModel(ta(b.sdf), "sdf");
      f(), y(), g.spin(d.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      d.showStatus(`Failed to render structure: ${me(g)}`, "error");
    }), d.handle;
  }
}
function vi(e, t) {
  const n = e.ligands.reduce((s, i) => {
    const a = uo(i.sdf);
    return a ? s + a.atoms : s;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...sa(o)] : [r];
}
xe("gufe-complex", gp);
function yp(e, t) {
  return { ...e, registry: po(t, Object.values(e.components ?? {})) };
}
const $p = "chemical-system.component";
function vp(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function bp(e) {
  return e.type === "UnknownComponentViz" ? Yn(e.gufe_type) : null;
}
class wp extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = [], s = [];
    for (const [m, x] of Object.entries(n.components ?? {})) {
      const P = Ge(r, x);
      P ? o.push([m, P]) : s.push(m);
    }
    const i = kt(n.name || "Chemical system");
    if (i.statsEl.appendChild(Te("components", String(o.length))), t.appendChild(i), !o.length)
      return t.appendChild(
        pe(
          s.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = O("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), s.length && dt(
      a,
      `${s.length} component${s.length === 1 ? "" : "s"} named by this system (${s.join(", ")}) are not in its registry`
    );
    const c = O(
      "div",
      `flex:0 0 200px;min-width:0;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
    );
    a.appendChild(c);
    const d = O("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(d);
    const f = O("div", "flex:1;min-height:0;display:flex;");
    d.appendChild(f);
    const y = document.createElement("gufe-view");
    y.style.cssText = "flex:1;min-width:0;min-height:0;", y.setAttribute(Fr, ""), f.appendChild(y);
    const g = ga(n, r), b = hp(g), v = (m) => b && g.structures.some((x) => x === m), w = o.filter(([, m]) => !v(m)).map(([m, x]) => ({
      key: m,
      title: m,
      subtitle: vp(x),
      badge: bp(x),
      element: y,
      point: () => {
        y.payload = x;
      }
    }));
    if (b) {
      const m = document.createElement("gufe-complex");
      m.style.cssText = "flex:1;min-width:0;min-height:0;", m.setAttribute(Fr, ""), m.payload = n, w.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${g.ligands.length === 1 ? g.ligands[0].name || "ligand" : "ligands"} in ${g.structures[0].name || "structure"}`,
        badge: null,
        element: m,
        point: () => {
        }
      });
    }
    let u = null;
    const S = (m) => {
      u !== m && (f.replaceChildren(m), u = m);
    }, p = _t($p), C = [], $ = (m) => {
      C.forEach((x, P) => {
        const I = P === m;
        x.style.background = I ? M.cardBgActive : M.cardBg, x.style.borderColor = I ? M.cardBorderActive : M.cardBorder;
      }), w[m].point(), S(w[m].element);
    }, l = (m) => {
      p.set(w[m].key), $(m);
    };
    w.forEach((m, x) => {
      const P = O(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${Q.body};flex-shrink:0;width:100%;box-sizing:border-box;`
      );
      P.appendChild(O("span", `font-weight:700;color:${M.textPrimary};`, m.title)), P.appendChild(O("span", `font-size:${Q.small};color:${M.textMuted};`, m.subtitle)), m.badge && P.appendChild(m.badge), P.onclick = () => l(x), C.push(P), c.appendChild(P);
    });
    const h = w.findIndex((m) => m.key === p.get());
    return $(h < 0 ? 0 : h), {
      onResize: () => u?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => u?.remove()
    };
  }
}
xe("gufe-chemical-system", wp);
const _p = 460, Sp = 210, Cp = "42%";
function kp(e, t) {
  const n = Se(t, e.stateA, "ChemicalSystemViz"), r = Se(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: po(t, o) };
}
const mo = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function Ep(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function xp(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Pp(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Pr(e, t, n) {
  const r = O(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${ne.md};padding:5px ${ne.lg};border-radius:${Oe.md};background:${M.cardBg};border:1px solid ${M.cardBorder};`
  );
  n && r.appendChild(
    O(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;color:${M.textMuted2};`,
      n
    )
  );
  const o = Pp(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(O("span", `font-size:${Q.body};color:${M.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? M.cardBorder : mo[t];
  const s = O(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${M.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return s.title = o.name, r.appendChild(s), o.type && r.appendChild(Yn(o.type)), r;
}
function Ap(e, t, n, r) {
  const o = O("div", `display:flex;flex-direction:column;gap:${ne.sm};min-width:0;`), s = O("div", `display:flex;align-items:center;gap:${ne.md};min-width:0;`);
  s.appendChild(
    O("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${mo[t]};`)
  );
  const i = O(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${ge.bold};color:${M.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return i.title = t, s.appendChild(i), o.appendChild(s), t === "unchanged" ? (o.appendChild(Pr(n, t, null)), o) : (o.appendChild(Pr(n, t, "A")), o.appendChild(Pr(r, t, "B")), o);
}
function Rp(e, t) {
  const n = Ge(t, e.componentA), r = Ge(t, e.componentB);
  return `${n ? tt(n) : "A"} to ${r ? tt(r) : "B"}`;
}
class Np extends Ee {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = Se(r, n.stateA, "ChemicalSystemViz"), s = Se(r, n.stateB, "ChemicalSystemViz"), i = Se(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = kt(n.name || "Transformation");
    if (c.statsEl.appendChild(Te("protocol", i?.gufe_type || i?.name || "-")), c.statsEl.appendChild(Te("mappings", String(a.length))), t.appendChild(c), !o || !s)
      return t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const d = xp(o, s), f = O("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(f);
    const y = O(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${M.panelBg};`
    );
    f.appendChild(y);
    const g = O("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    f.appendChild(g);
    const b = O("div", `display:flex;flex-direction:column;gap:${ne.xs};`);
    for (const [$, l] of [
      ["State A", o],
      ["State B", s]
    ])
      b.appendChild(
        O(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};overflow-wrap:anywhere;`,
          `${$}${l.name ? ` - ${l.name}` : ""}`
        )
      );
    y.appendChild(b);
    const v = /* @__PURE__ */ new Set();
    for (const $ of d) {
      const l = o.components?.[$], h = s.components?.[$], m = Ep(l, h);
      v.add(m), y.appendChild(
        Ap(
          $,
          m,
          Ge(r, l),
          Ge(r, h)
        )
      );
    }
    if (v.size > 1) {
      const $ = O(
        "div",
        `display:flex;flex-wrap:wrap;gap:${ne.lg} 12px;padding-top:${ne.sm};font-size:${Q.small};color:${M.textMuted};`
      );
      for (const l of ["unchanged", "changed", "added", "removed"])
        v.has(l) && $.appendChild(Te(l, "", mo[l]));
      y.appendChild($);
    }
    const w = O("div", Sa, "Atom mapping");
    g.appendChild(w);
    let u = null;
    const S = Fi(t, ($) => {
      const l = $ > 0 && $ < _p;
      l !== u && (u = l, f.style.flexDirection = l ? "column" : "row", y.style.flex = l ? "0 0 auto" : `0 0 ${Sp}px`, y.style.maxWidth = l ? "none" : Cp, y.style.maxHeight = l ? "45%" : "none", y.style.borderRight = l ? "none" : `1px solid ${M.splitBorder}`, y.style.borderBottom = l ? `1px solid ${M.splitBorder}` : "none", w.style.display = l ? "block" : "none");
    });
    if (!a.length)
      return g.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: S };
    const p = document.createElement("gufe-atom-mapping");
    p.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = ($) => {
      p.payload = ma(a[$], r);
    };
    if (C(0), a.length > 1) {
      const $ = O(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      $.appendChild(
        Jn(
          a.map((l, h) => ({
            id: String(h),
            label: l.name || Rp(l, r)
          })),
          "0",
          (l) => C(Number(l))
        )
      ), g.appendChild($);
    }
    return g.appendChild(p), {
      onResize: () => p.resize?.(),
      cleanup: () => {
        S(), p.remove();
      }
    };
  }
}
xe("gufe-transformation", Np);
const Xe = { width: 148, height: 46, depictedHeight: 148, radius: 10 }, Ye = { pad: 6, size: 96, radius: 6, inset: 4 }, bi = 200, it = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Ar = [
  { id: "structures", from: 0.35, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Mp = (e) => Ar.find((t) => e >= t.from) ?? Ar[Ar.length - 1], Dn = 200, Ln = { width: 2, selectedWidth: 3.5, hit: 20 }, wt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ot = { initial: 0.56, min: 0.25, max: 0.78 }, Tp = 24, wi = { x: Xe.width / 2, y: Xe.depictedHeight / 2 }, _i = { node: 0.12, edge: 0.06 }, Op = 1.4, Fp = 3, Kn = tt;
function Rr(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function ya(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Ge(t, r);
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
const zp = (e, t) => ya(e, t).join(" + ");
function Ip(e, t) {
  const n = { fill: M.cardBg, stroke: M.cardBorder }, r = e.map((i) => zp(i, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > M.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const s = new Map(
    o.map((i, a) => [i, { fill: M.netGroupFill[a], stroke: M.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (i) => s.get(r[i]) ?? n,
    legend: o.map((i) => [i, s.get(i)])
  };
}
function jp(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const s = Ge(t, o);
    if (!s) continue;
    n.push(tt(s), s["gufe-key"]);
    const i = s.smiles;
    i && n.push(i);
  }
  return n.join(" ").toLowerCase();
}
function Dp(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const i = [];
    for (const a of Object.values(s.components ?? {})) {
      const c = Se(t, a, "SmallMoleculeComponentViz");
      if (!c) continue;
      let d = r.get(a);
      d === void 0 && (d = n.length, r.set(a, d), n.push(c.sdf ?? "")), i.push(d);
    }
    return i;
  });
  return { sources: n, perNode: o };
}
function Lp(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function qp(e) {
  const t = _t("alchemical-network.query"), n = _t("alchemical-network.composition"), r = O("div", Hr), o = O("input", `${Wn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const s = ha({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: _t("alchemical-network.smarts"),
    run: (g) => e.match(g),
    describe: (g) => {
      const b = g.unreadable ? `, ${g.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${b}`;
    }
  });
  if (r.appendChild(s.element), e.compositions.length > 1) {
    const g = O("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${M.textMuted};`);
    g.appendChild(O("span", "flex-shrink:0;", "made of"));
    const b = jt(
      [{ id: "", label: "anything" }, ...e.compositions.map((v) => ({ id: v, label: v }))],
      "",
      (v) => {
        e.filter.composition = v, y(), e.refresh();
      },
      n
    );
    b.style.cssText += "flex:1;min-width:0;", e.filter.composition = b.value, g.appendChild(b), r.appendChild(g);
  }
  const i = O("div", `font-size:${Q.small};color:${M.textMuted2};`);
  r.appendChild(i);
  const a = O("div", Ci);
  r.appendChild(a), r.appendChild(O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`, ho));
  const c = aa({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" }
    },
    setting: "alchemical-network.exportAs"
  });
  r.appendChild(c.box);
  const d = O("button", `${Ct}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), y(), e.refresh();
  }, r.appendChild(d);
  const f = (g) => {
    const b = e.query.text.trim().toLowerCase();
    if (b && !e.haystacks[g].includes(b) || e.filter.composition && e.signatures[g] !== e.filter.composition) return !1;
    const v = e.matched();
    return !(v && !v.has(g));
  }, y = () => {
    c.clearNote(), a.replaceChildren();
    const g = e.nodes.map((b, v) => ({ node: b, index: v })).filter(({ index: b }) => f(b));
    i.textContent = `${g.length} of ${e.nodes.length} systems`;
    for (const { node: b, index: v } of g) {
      const w = b["gufe-key"], u = e.selected.has(w), S = O(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? M.cardBorderActive : M.cardBorder};background:${u ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), p = e.colorOf(v);
      S.appendChild(
        O(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${p.fill};border:1px solid ${p.stroke};`
        )
      );
      const C = O("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Kn(b));
      C.title = `${Kn(b)}
${e.signatures[v]}`, S.appendChild(C), S.onclick = ($) => {
        $.shiftKey || $.metaKey || $.ctrlKey ? e.selected.has(w) ? e.selected.delete(w) : e.selected.add(w) : (e.selected.clear(), e.selected.add(w), e.focus(v)), y(), e.refresh();
      }, a.appendChild(S);
    }
    g.length || a.appendChild(O("div", `font-size:${Q.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), y(), e.refresh();
  }, y(), e.mounted(y), s.apply(), r;
}
function Vp(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, s) => {
    if (o.fx !== void 0 && o.fy !== void 0) {
      o.x = o.fx, o.y = o.fy;
      return;
    }
    const i = 2 * Math.PI * s / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(i), o.y = n / 2 + r * Math.sin(i);
  });
}
async function Bp(e, t, n, r) {
  let o;
  try {
    if (o = await Yi(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((c) => c["gufe-key"]).distance(wt.linkDistance).strength(wt.linkStrength)
  ).force("charge", o.forceManyBody().strength(wt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(wt.collisionRadius).iterations(wt.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let c = 0; c < a * wt.tickMultiplier; c++) i.tick();
  return !0;
}
class Up extends Ee {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = [];
    let s = 0;
    for (const U of n.nodes ?? []) {
      const Z = Se(r, U, "ChemicalSystemViz");
      if (!Z) {
        s++;
        continue;
      }
      o.push({ ...Z, x: 0, y: 0 });
    }
    const i = new Map(o.map((U) => [U["gufe-key"], U])), a = [];
    let c = 0;
    for (const U of n.edges ?? []) {
      const Z = i.get(U.stateA), te = i.get(U.stateB);
      if (!Z || !te) {
        c++;
        continue;
      }
      a.push({ ...U, index: a.length, from: Z, to: te });
    }
    const d = (U) => {
      const Z = Se(r, U.protocol, "ProtocolViz");
      return Z?.gufe_type || Z?.name || "";
    }, f = new Set(a.map(d).filter(Boolean)), y = kt(n.name || "Alchemical network");
    y.statsEl.appendChild(Te("systems", String(o.length))), y.statsEl.appendChild(Te("transformations", String(a.length))), f.size && y.statsEl.appendChild(Te("protocol", [...f].join(", "))), t.appendChild(y);
    const g = Ip(o, r), b = O("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    let v = () => {
    };
    const w = /* @__PURE__ */ new Set(), u = { composition: "" }, S = { text: "" };
    let p = () => {
    }, C = () => {
    }, $ = () => {
    };
    const l = o.map((U) => jp(U, r));
    let h = null;
    const m = () => h ??= rr().catch((U) => (console.warn("[gufe-viz] RDKit failed to load:", me(U)), null)), x = Dp(o, r), P = pa(m, x.sources), I = o.map((U, Z) => {
      const te = x.perNode[Z].map((T) => x.sources[T]).find((T) => T) ?? null, A = ya(U, r);
      return {
        colors: g.colorOf(Z),
        composition: A.join(" + "),
        besides: Lp(A, te !== null, x.perNode[Z].length),
        sdf: te
      };
    });
    let L = null, F = () => {
    };
    const V = async (U) => {
      const Z = await P.run(U);
      return Z.status === "superseded" || (L = Z.status === "ok" ? new Set(o.flatMap((te, A) => x.perNode[A].some((T) => Z.matched.has(T)) ? [A] : [])) : null, F(), p()), Z;
    }, z = Yr(
      y,
      () => qp({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: g.signatures,
        colorOf: g.colorOf,
        compositions: g.compositions,
        selected: w,
        filter: u,
        query: S,
        refresh: () => p(),
        matched: () => L,
        match: (U) => V(U),
        mounted: (U) => {
          F = U;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (U) => {
          C(U), $(U);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => v(),
        remember: ct("alchemical-network.menuOpen", !1)
      }
    );
    z.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", b.appendChild(z.panel);
    const K = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), Y = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`), re = O("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`);
    K.appendChild(re), b.appendChild(K), b.appendChild(
      zi(b, K, Y, {
        min: Ot.min,
        max: Ot.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Kr("alchemical-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => v(),
        onOrient: (U) => Ii(z.panel, U)
      })
    ), b.appendChild(Y);
    const q = this.#e(Y, r);
    if (!o.length)
      return re.appendChild(
        pe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), q.message("Nothing to show."), { cleanup: () => q.cleanup() };
    s && dt(
      re,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(
      re,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let W = !0, R = !1, E = null, j = () => {
    }, N = () => {
    }, _ = () => {
    }, k = 0;
    K.appendChild(this.#n(g.legend, () => N()));
    const D = (U, Z) => {
      E = { kind: U, index: Z }, q.show(U === "node" ? o[Z] : a[Z], U), j();
    };
    $ = (U) => D("node", U);
    const G = () => {
      const U = ++k, Z = re.clientWidth || 800, te = re.clientHeight || 600;
      Vp(o, Z, te);
      const A = () => {
        if (!W || U !== k) return;
        _(), re.querySelectorAll("svg").forEach((B) => B.remove());
        const T = this.#t(re, o, a, Z, te, I, m, D);
        _ = T.cleanup, N = T.reset, C = (B) => T.focusOn(B), j = () => T.setSelected(E), j(), p = () => {
          const B = S.text.trim().toLowerCase();
          if (!(w.size > 0 || B.length > 0 || u.composition !== "" || L !== null)) {
            T.setEmphasis(null, null);
            return;
          }
          const ee = B.length > 0 || u.composition !== "" || L !== null, X = /* @__PURE__ */ new Set();
          o.forEach((ie, de) => {
            const fe = ee && (!B || l[de].includes(B)) && (!u.composition || g.signatures[de] === u.composition) && (!L || L.has(de));
            (w.has(ie["gufe-key"]) || fe) && X.add(ie["gufe-key"]);
          });
          const oe = /* @__PURE__ */ new Set();
          a.forEach((ie, de) => {
            X.has(ie.from["gufe-key"]) && X.has(ie.to["gufe-key"]) && oe.add(de);
          }), T.setEmphasis(X, oe);
        }, p();
      };
      if (R) {
        A();
        return;
      }
      Bp(o, a, Z, te).then((T) => {
        !W || U !== k || (T || (R = !0, dt(re, "d3 could not be loaded - showing the circular layout instead")), A());
      }, A);
    };
    return v = G, G(), D("node", 0), {
      onResize: () => G(),
      cleanup: () => {
        W = !1, _(), q.cleanup();
      }
    };
  }
  /**
   * The strip under the canvas: how to get back, and what the colours mean.
   *
   * The reset is always there and the legend is not. Zoom and pan have no
   * bottom, so a network the reader has flung off the edge needs one control
   * that is always in the same place; a network of one composition has nothing
   * to explain and a legend saying so is noise.
   */
  #n(t, n) {
    const r = O("div", ki.bottom);
    if (r.appendChild(co(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(O("span", `font-size:${Q.small};color:${M.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const i = O("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(
        O(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), i.appendChild(
        O("span", `font-size:${Q.small};color:${M.textPrimary};overflow-wrap:anywhere;`, o)
      ), r.appendChild(i);
    }
    return r;
  }
  /**
   * The right-hand pane: the selected system or transformation, drawn by the
   * view that already draws it.
   *
   * One `<gufe-view>`, re-pointed rather than rebuilt, which is the same
   * create/update/destroy contract the top level uses: the payload setter tears
   * the outgoing view down, so a protein's 3Dmol context is released before the
   * next selection asks for another one.
   */
  #e(t, n) {
    const r = O("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(pe(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = yp(ua(a), n);
      else {
        const { index: f, from: y, to: g, ...b } = a;
        d = kp(b, n);
      }
      if (!d) {
        s("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = d, o.parentNode !== r && r.replaceChildren(o);
    }, message: s, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, s, i, a, c) {
    const d = le("svg", { class: "gufe-graph", width: o, height: s, style: "display:block;touch-action:none;" });
    t.appendChild(d);
    const f = le("g");
    d.appendChild(f);
    const y = le("g"), g = le("g");
    f.append(y, g);
    let b = () => {
    };
    const v = da(d, f, {
      bounds: () => la(n, wi.x, wi.y),
      margin: Tp,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (q, W, R) => b(q, W, R)
    }), w = (q, W) => {
      v.wasPan() || c(q, W);
    }, u = [], S = [];
    r.forEach((q, W) => {
      const R = le("line", {
        x1: q.from.x,
        y1: q.from.y,
        x2: q.to.x,
        y2: q.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": Ln.width,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      si(R, q.name || "transformation"), R.addEventListener("click", () => w("edge", W)), y.appendChild(R), u.push(R);
      const E = le("line", {
        x1: q.from.x,
        y1: q.from.y,
        x2: q.to.x,
        y2: q.to.y,
        stroke: "transparent",
        "stroke-width": Ln.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      E.addEventListener("click", () => w("edge", W)), y.appendChild(E), S.push(E);
    });
    const p = n.map(() => []), C = new Map(n.map((q, W) => [q, W]));
    r.forEach((q, W) => {
      const R = C.get(q.from), E = C.get(q.to);
      R !== void 0 && p[R].push(W), E !== void 0 && E !== R && p[E].push(W);
    });
    const $ = [], l = [], h = [], m = [], x = [], P = [], I = [];
    n.forEach((q, W) => {
      const R = i[W], E = R.sdf ? Xe.depictedHeight : Xe.height, j = le("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${q.x},${q.y})`
      });
      h.push(j);
      const N = le("rect", {
        class: "gufe-node-box",
        x: -148 / 2,
        y: -E / 2,
        width: Xe.width,
        height: E,
        rx: Xe.radius,
        fill: R.colors.fill,
        stroke: R.colors.stroke,
        "stroke-width": 2
      });
      if (j.appendChild(N), $.push(N), l.push(R.colors.stroke), R.sdf) {
        const D = le("rect", {
          class: "gufe-node-plate",
          x: -48,
          y: -E / 2 + Ye.pad,
          width: Ye.size,
          height: Ye.size,
          rx: Ye.radius,
          fill: M.netDepictBg,
          display: "none",
          "pointer-events": "none"
        });
        j.appendChild(D), P.push(D);
        const G = le("g", { transform: `translate(0,${-E / 2 + Ye.pad + Ye.size / 2})` }), U = le("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        G.appendChild(U), j.appendChild(G), I.push(U);
      } else
        P.push(null), I.push(null);
      const _ = le("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": it.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      _.textContent = Rr(Kn(q), it.nameChars), j.appendChild(_), m.push(_);
      const k = le("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": it.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      k.textContent = Rr(R.composition, it.subChars), j.appendChild(k), x.push(k), si(j, `${Kn(q)} - ${R.composition}`), g.appendChild(j);
    });
    const L = (q) => {
      const W = n[q];
      h[q].setAttribute("transform", `translate(${W.x},${W.y})`);
      for (const R of p[q])
        for (const E of [u[R], S[R]])
          r[R].from === W && (E.setAttribute("x1", String(W.x)), E.setAttribute("y1", String(W.y))), r[R].to === W && (E.setAttribute("x2", String(W.x)), E.setAttribute("y2", String(W.y)));
    }, F = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), z = (q, W) => {
      if (F.has(W) || V.has(W)) return;
      const R = I[W], E = i[W].sdf;
      if (!R || !E) return;
      const j = fo(q, E, bi, Ne.layout);
      if (!j || !fa(R, j, bi, Ye.size - Ye.inset * 2)) {
        V.add(W);
        return;
      }
      F.add(W);
    }, K = (q, W) => {
      const R = W && F.has(q);
      P[q]?.setAttribute("display", R ? "inline" : "none"), I[q]?.setAttribute("display", R ? "inline" : "none");
      const E = R ? Xe.depictedHeight : Xe.height;
      $[q].setAttribute("y", String(-E / 2)), $[q].setAttribute("height", String(E));
      const j = E / 2 - it.bottom;
      m[q].setAttribute("y", String(R ? j - it.gap : -2)), x[q].setAttribute("y", String(R ? j : 14));
      const N = i[q];
      x[q].textContent = Rr(R ? N.besides : N.composition, it.subChars);
    };
    let Y = null;
    return b = (q, W, R) => {
      const E = Mp(q);
      Y = E, d.setAttribute("data-detail", E.id);
      for (let N = 0; N < n.length; N++) K(N, E.structure);
      if (!E.structure) return;
      const j = [];
      n.forEach((N, _) => {
        if (!i[_].sdf || F.has(_) || V.has(_)) return;
        const k = N.x * q + W, D = N.y * q + R;
        k < -Dn || D < -Dn || k > o + Dn || D > s + Dn || j.push(_);
      }), j.length && a().then((N) => {
        if (!(!N || Y !== E))
          for (const _ of j)
            z(N, _), K(_, !0);
      }).catch(() => {
      });
    }, h.forEach((q, W) => {
      let R = null, E = !1;
      q.addEventListener("pointerdown", (N) => {
        N.stopPropagation();
        const { scale: _ } = v.transform();
        R = { x: N.clientX - n[W].x * _, y: N.clientY - n[W].y * _ }, E = !1, q.setPointerCapture(N.pointerId);
      }), q.addEventListener("pointermove", (N) => {
        if (!R) return;
        if (v.gesturing()) {
          R = null, E = !0;
          return;
        }
        const { scale: _ } = v.transform(), k = (N.clientX - R.x) / _, D = (N.clientY - R.y) / _;
        Math.hypot(k - n[W].x, D - n[W].y) * _ > Fp && (E = !0), n[W].x = n[W].fx = k, n[W].y = n[W].fy = D, L(W);
      });
      const j = () => {
        R = null;
      };
      q.addEventListener("pointerup", j), q.addEventListener("pointercancel", j), q.addEventListener("click", (N) => {
        N.stopPropagation(), E || c("node", W);
      });
    }), v.fit(), {
      setSelected(q) {
        $.forEach((W, R) => {
          const E = q?.kind === "node" && q.index === R;
          W.setAttribute("stroke", E ? M.cardBorderActive : l[R]), W.setAttribute("stroke-width", E ? "3" : "2");
        }), u.forEach((W, R) => {
          const E = q?.kind === "edge" && q.index === R;
          W.setAttribute("stroke", E ? M.netHaloColor : M.netEdgeLine), W.setAttribute("stroke-width", String(E ? Ln.selectedWidth : Ln.width));
        });
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(q, W) {
        h.forEach((R, E) => {
          const j = !q || q.has(n[E]["gufe-key"]);
          R.setAttribute("opacity", j ? "1" : String(_i.node));
        }), u.forEach((R, E) => {
          const j = !W || W.has(E);
          R.setAttribute("opacity", j ? "1" : String(_i.edge));
        });
      },
      focusOn(q) {
        const W = n[q];
        W && v.centreOn(W.x, W.y, Op);
      },
      reset: v.reset,
      cleanup: v.cleanup
    };
  }
}
xe("gufe-alchemical-network", Up);
class Hp extends Ee {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = kt(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Yn(n.gufe_type)), t.appendChild(r);
    const o = O(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const s = Gr();
    return s.style.maxWidth = "460px", s.appendChild(Bn("gufe class", n.gufe_type, !0)), n.name && s.appendChild(Bn("Name", n.name)), s.appendChild(
      O(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
xe("gufe-protocol", Hp);
function Kp(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Nr(e, t = !1) {
  const n = O(
    "div",
    `display:flex;flex-direction:column;gap:${ne.xl};padding:${ne.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${M.splitBorder};`)
  );
  return n.appendChild(O("div", Tr, e)), n;
}
function qn(e) {
  return O(
    "div",
    `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
    e
  );
}
function Si(e, t) {
  const n = O("div", `display:flex;flex-direction:column;align-items:center;gap:${ne.sm};`);
  return n.appendChild(
    O(
      "span",
      `${Re.plain}${Re.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(qn(t)), n;
}
class Gp extends Ee {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = O(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Gr();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const s = Nr("Solvent", !0), i = O("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = O("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = O(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${ge.bold};line-height:1.1;color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(qn("SMILES")), i.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const p = O("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      p.appendChild(
        O(
          "div",
          `font-size:${Q.body};color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), p.appendChild(qn("Name")), i.appendChild(p);
    }
    s.appendChild(i), o.appendChild(s);
    const f = Nr("Ions"), y = O("div", `display:flex;align-items:flex-end;gap:${ne.xxl};flex-wrap:wrap;`);
    n.positive_ion && y.appendChild(Si(n.positive_ion, "cation")), n.negative_ion && y.appendChild(Si(n.negative_ion, "anion"));
    const { value: g, unit: b } = Kp(n.ion_concentration), v = O("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), w = O("div", `display:flex;align-items:baseline;gap:${ne.md};justify-content:flex-end;`);
    w.appendChild(
      O(
        "div",
        `font-size:${Q.display};font-weight:${ge.bold};line-height:1;color:${M.titleColor};`,
        g
      )
    ), b && (w.appendChild(document.createTextNode(" ")), w.appendChild(O("div", `font-size:${Q.body};color:${M.textMuted};`, b))), v.appendChild(w), v.appendChild(qn("Ion concentration")), y.appendChild(v), f.appendChild(y), o.appendChild(f);
    const u = Nr("Net charge"), S = n.neutralize;
    return u.appendChild(
      O(
        "span",
        `${Re.plain}align-self:flex-start;font-weight:${ge.bold};` + (S ? `background:${M.okBg};color:${M.okFg};` : `${Re.outline}color:${M.textMuted};`),
        S ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      O(
        "div",
        Or,
        S ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
xe("gufe-solvent", Gp);
class Wp extends Ee {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = kt(n.name || "Unnamed component");
    r.statsEl.appendChild(Yn(n.gufe_type)), t.appendChild(r);
    const o = O("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Gr();
    return s.style.maxWidth = "460px", s.appendChild(
      O(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), s.appendChild(
      O(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), s.appendChild(Bn("Name", n.name || "(unnamed)")), s.appendChild(Bn("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
xe("gufe-unknown-component", Wp);
function eh(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Ai, reset: Va });
export {
  rc as CHROME_OPEN_BY_DEFAULT,
  Ra as DEBUG_ATTRIBUTE,
  Na as DEBUG_GLOBAL,
  Cu as DEFAULT_DEPICT_STYLE,
  Gd as DEFAULT_ZOOM_BOUNDS,
  Ne as DEPICT_STYLE,
  Ru as DEPICT_STYLE_RANGES,
  Up as GufeAlchemicalNetwork,
  zf as GufeAtomMapping,
  wp as GufeChemicalSystem,
  gp as GufeComplex,
  Ee as GufeElement,
  dp as GufeLigandNetwork,
  Zu as GufeProtein,
  Hp as GufeProtocol,
  Gu as GufeSmallMolecule,
  Gp as GufeSolvent,
  Np as GufeTransformation,
  Wp as GufeUnknownComponent,
  qd as GufeView,
  Fr as HIDE_NAME_ATTRIBUTE,
  vr as MAPPING_COLORS,
  Xd as MAPPING_RAMP_3D,
  Qp as MAPPING_RAMP_NAME,
  ho as MULTI_SELECT_HINT,
  Jp as PAYLOAD_TYPES,
  Yp as SCHEMA_TYPES,
  so as VIEW_TAGS,
  vf as align2D,
  _f as alignedToPartner,
  $f as applyRT,
  bf as applyTurn,
  Jd as boundedZoom,
  Et as buildRegistry,
  ut as choice,
  Yr as chromeMenu,
  Ud as claimGestures,
  ga as complexPartsFor,
  xi as debugEnabled,
  xe as defineElement,
  Wi as describeProblem,
  Ep as diffStatus,
  Zp as dispatchProblem,
  po as entriesFor,
  tt as entryLabel,
  aa as exportBlock,
  la as extentOf,
  ct as flag,
  Dd as formatIssues,
  Xi as guardWheel,
  hp as hasComplex,
  Mf as inFrameOf,
  yf as kabsch,
  li as laidOut,
  Sf as layoutPair,
  Tf as liftFor,
  Fa as logPayload,
  Ge as lookup,
  Se as lookupOfType,
  ma as mappingPayloadFor,
  Xs as markGroups,
  br as markedBonds,
  eh as mount,
  Wr as nameWanted,
  Mu as normaliseDepictStyle,
  Kr as num,
  Fi as onWidth,
  Of as openfeShift,
  Ii as orientMenuPanel,
  Ff as pairColour,
  Js as parseAtomSpec,
  Oa as payloadJson,
  co as resetControl,
  Va as resetSettings,
  da as sceneCamera,
  Qu as selectionText,
  Gn as setting,
  Ai as settings,
  zi as splitter,
  yp as systemPayloadFor,
  _t as textSetting,
  kp as transformationPayloadFor,
  ui as uniqueAtoms,
  Ou as uniqueBonds,
  Xp as validateAs,
  jd as validatePayload,
  or as viewerInteraction,
  Zi as wheelFactor,
  wf as withCoords
};
