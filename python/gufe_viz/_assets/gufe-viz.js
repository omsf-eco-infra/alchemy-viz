const bo = {
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
function Sa() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = Sa() ? bo.dark : bo.light, Z = {
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
}, me = {
  bold: "700"
}, te = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Te = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, Ie = {
  title: O.titleColor,
  primary: O.textPrimary,
  muted: O.textMuted,
  faint: O.textMuted2,
  error: O.errorFg
}, lt = {
  card: O.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, $e = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${te.sm} 9px;font-size:${Z.small};font-weight:${me.bold};border-radius:${Te.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, Ca = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${Te.md};padding:${te.sm} ${te.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, ka = `display:flex;align-items:center;gap:12px;padding:9px ${te.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, qn = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Kr = `display:flex;flex-direction:column;gap:${te.lg};flex:1;min-width:var(${Xe.min},${qn.min});max-width:var(${Xe.max},${qn.max});box-sizing:border-box;padding:${te.xl};min-height:0;overflow-y:auto;background:${O.panelBg};border:0 solid ${O.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, xa = "45%", Rs = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Ms = {
  bottom: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, Ea = `flex-shrink:0;padding:${te.sm} ${te.xl};font-size:${Z.heading};font-weight:${me.bold};color:${O.labelFg};background:${O.labelBg};`, Tr = `position:absolute;top:${te.md};left:${te.md};z-index:10;pointer-events:none;max-width:calc(100% - ${te.xxl} - ${te.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${te.xs} ${te.lg};border-radius:${Te.md};font-size:${Z.heading};font-weight:${me.bold};color:${O.labelFg};background:${O.labelBg};`, Pa = `padding:${te.xs} ${te.lg};border-radius:${Te.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${O.labelFg};background:${O.labelBg};`, Aa = `position:absolute;top:${te.lg};left:${te.lg};z-index:15;display:flex;align-items:center;gap:${te.md};min-width:0;max-width:calc(100% - ${te.xxl} - ${te.xxl});`, Ra = "42px", Ma = `display:flex;flex-direction:column;gap:${te.xs};padding:${te.xxl} 18px;border-radius:${Te.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, Ns = `position:absolute;bottom:${te.xl};right:${te.xl};display:flex;gap:${te.sm};padding:${te.sm};border-radius:${Te.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Na = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${O.textMuted};`, Or = `font-size:${Z.small};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, Re = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${te.xs} ${te.sm};font-size:${Z.small};`,
  plain: `display:inline-flex;align-items:center;padding:${te.xs} ${te.md};border:1px solid transparent;border-radius:${Te.pill};font-family:inherit;font-size:${Z.small};color:${O.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${O.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${O.btnBg};border-color:${O.btnBorder};color:${O.textPrimary};`,
  active: `cursor:pointer;background:${O.cardBgActive};border-color:${O.btnBorder};color:${O.textPrimary};`
}, Fr = `font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`, Ta = ["debug", "gufe-debug"], Oa = "debug", Fa = "GUFE_VIZ_DEBUG";
function za() {
  return !!globalThis[Fa];
}
function Ia() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Ta.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Ts(e) {
  return e?.hasAttribute?.(Oa) ? !0 : za() || Ia();
}
function ja(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Da(e, t, n) {
  if (!Ts(n)) return;
  const r = ja(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Os = "GUFE_VIZ_VIEW_STATE";
function La(e) {
  const t = globalThis[Os];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const qa = 150, wo = "data-gufe-shell";
class xe extends HTMLElement {
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
  #i = 0;
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${wo}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), qa);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#s(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #s() {
    if (this.#i++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#e?.cleanup)
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
    return this.#s(), this.#t = F(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${O.appBg};`
    ), this.#t.setAttribute(wo, ""), this.appendChild(this.#t), this.#t;
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
    if (n !== this.#i || !this.isConnected) {
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(pe(`Failed to render: ${ge(r)}`, !0)));
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
function Ee(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const ke = "gufe-viz:", et = /* @__PURE__ */ new Map();
let jt = null;
function Va() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function zt() {
  if (jt === !1) return null;
  const e = Va();
  if (!e)
    return jt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), jt = !0, e;
  } catch {
    return jt = !1, null;
  }
}
function Ba(e) {
  const t = zt();
  if (!t) return et.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function Ua(e, t) {
  const n = zt();
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
function Kn(e, t, n) {
  return {
    key: e,
    get() {
      const r = Ba(e);
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
        Ua(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ut(e, t, n) {
  return Kn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function ct(e, t) {
  return Kn(e, t, (n) => typeof n == "boolean");
}
function Gr(e, t, n = -1 / 0, r = 1 / 0) {
  return Kn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function _t(e, t = "") {
  return Kn(e, t, (n) => typeof n == "string");
}
function Fs() {
  const e = {}, t = zt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
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
function Ha() {
  const e = {}, t = zt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(et.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : et.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function Ka() {
  const e = zt();
  if (e)
    for (const t of Object.keys(Fs()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  et.clear();
}
const zs = "https://framejs.app", Is = 1e4;
function Ga(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Wa = "/gufe-dev-bundle.js";
function Ja() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Is ? e : null;
}
async function Ya() {
  const e = Ja();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Wa);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Is ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Xa() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Za(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(Xr)};`,
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
    `globalThis[${JSON.stringify(Os)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Qa(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Za(n),
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
function ec(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(Ha()))
    o.endsWith(Xr) || (r[o] = i);
  return { settings: r, views: t };
}
const tc = (e) => `${zs}/j/${e}`, nc = (e) => `${zs}/j/${e}.json`;
async function rc(e, t, n) {
  await fetch(nc(e), {
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
function oc(e) {
  if (!Ts()) return;
  const t = F(
    "div",
    `display:flex;flex-direction:column;gap:${te.md};padding-top:${te.lg};border-top:1px dashed ${O.splitBorder};`
  );
  t.appendChild(
    F(
      "div",
      `font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
      "debug"
    )
  );
  const n = F("button", `${$e.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = F("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? O.errorFg : O.textMuted2;
  }, i = (s, a) => {
    const c = F("a", `color:${O.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(F("div", `padding-top:${te.sm};`, a)), r.style.color = O.textMuted2;
  };
  n.onclick = () => {
    const s = Ga(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = ec(s), d = window.open("", "_blank"), f = Xa(), $ = a, _ = String($.name || $.type || "gufe-viz"), m = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), Ya().then((y) => {
      if (!y) {
        d?.close(), m(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return rc(f, Qa(y.js, a, c), _).then(() => {
        m();
        const w = tc(f);
        d && (d.location.href = w), i(w, y.note);
      });
    }).catch((y) => {
      m(), d?.close(), o(`Upload failed: ${y instanceof Error ? y.message : String(y)}`, !0);
    });
  }, t.appendChild(
    F(
      "div",
      `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function F(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function He(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const xt = (e) => e.toLocaleString("en-US"), at = "-", Ct = $e.base, Gn = Ca;
function Wn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = F("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), i = e.map((s) => {
    const a = F("button", Ct, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = $e.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? $e.bgActive : $e.bg;
    }, a.onclick = () => {
      o.setActive(s.id), r?.set(s.id), n(s.id);
    }, o.appendChild(a), { id: s.id, btn: a };
  });
  return o.setActive = (s) => {
    t = s, i.forEach((a) => {
      a.btn.style.background = a.id === t ? $e.bgActive : $e.bg;
    });
  }, o.setActive(t), o;
}
const ic = parseFloat(te.xl) * 2;
function js(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const $ = o.get();
    e.some((_) => _.id === $) && (t = $);
  }
  const i = F("div", "display:flex;min-width:0;"), s = ($) => {
    i.setActive($), o?.set($), n($);
  }, a = Wn(e, t, s), c = It(e, t, s);
  c.style.display = "none", i.appendChild(a), i.appendChild(c), i.buttons = a, i.setActive = ($) => {
    t = $, a.setActive($), c.value = $;
  };
  let d = !1;
  i.setCompact = ($) => {
    $ !== d && (d = $, a.style.display = d ? "none" : "flex", c.style.display = d ? "" : "none", r.onLayout?.(d));
  };
  let f = () => {
  };
  if (r.fit) {
    const { pane: $, bar: _ } = r.fit;
    let m = 0;
    f = Xn($, (y) => {
      d || (m = _.offsetWidth || m), m && i.setCompact(m > y - ic);
    });
  }
  return i.cleanup = () => f(), i;
}
function It(e, t, n, r) {
  const o = F("select", Gn);
  for (const s of e) {
    const a = F("option", "", s.label);
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
function Ds(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = F("button", Ct, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? $e.bgActive : $e.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
function Ze(e, t, n) {
  const r = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = F("span");
  return o.innerHTML = `${He(e)} <b style="color:${Ie.primary};">${He(t)}</b>`, r.appendChild(o), r;
}
function dt(e, t) {
  const n = F("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${te.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${te.md} ${te.xxl};border-radius:${Te.md};font-size:${Z.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function pe(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? Ie.error : Ie.faint};`,
    e
  );
}
function Jn(e) {
  const t = F("div", ka);
  return t.className = "gufe-header", t.titleEl = F(
    "span",
    `font-weight:${me.bold};font-size:${Z.title};color:${Ie.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${Ie.muted};`
  ), t.textEl = F("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = F("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Vn(e, t, n = !1) {
  const r = F("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    F(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${Ie.faint};`,
      e
    )
  );
  const o = F(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Ie.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Yn(e) {
  return F(
    "span",
    `padding:1px 7px;border-radius:${Te.xl};font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function Wr() {
  return F("div", Ma);
}
function Ls() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const zr = "data-gufe-hide-name";
function Jr(e) {
  return !e.closest(`[${zr}]`);
}
function Xn(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const _o = { min: 0.2, max: 0.8 }, sc = 5;
function qs(e, t, n, r = {}) {
  const o = r.min ?? _o.min, i = r.max ?? _o.max, s = F(
    "div",
    `flex:0 0 ${sc}px;align-self:stretch;touch-action:none;background:${O.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (y) => {
    a = y, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const y = e.getBoundingClientRect();
    return y.height > y.width;
  };
  let f = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const $ = () => {
    t.style.flex = `1 1 ${(f * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - f) * 100).toFixed(2)}%`;
  };
  $(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const w = d();
    w !== a && (c(w), r.onResize?.(f));
  }).observe(e);
  let _ = !1;
  s.addEventListener("pointerdown", (y) => {
    _ = !0, s.setPointerCapture(y.pointerId), y.preventDefault();
  }), s.addEventListener("pointermove", (y) => {
    if (!_) return;
    const w = e.getBoundingClientRect(), u = a ? w.height : w.width;
    if (u <= 0) return;
    const v = a ? y.clientY - w.top : y.clientX - w.left;
    f = Math.min(i, Math.max(o, v / u)), $();
  });
  const m = (y) => {
    _ && (_ = !1, s.releasePointerCapture(y.pointerId), r.remember?.set(f), r.onResize?.(f));
  };
  return s.addEventListener("pointerup", m), s.addEventListener("pointercancel", m), s;
}
function Yr(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : qn.min), e.style.setProperty(Xe.max, t ? "none" : qn.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? xa : "";
}
const ac = !1, Xr = ".menuOpen";
function cc() {
  const e = F("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const lc = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: cc
}, dc = lc.openFreeEnergy;
function Zr(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? ac, o = !1;
  const i = F("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = F("button", `${$e.base}display:inline-flex;align-items:center;gap:${te.md};padding:${te.sm} ${te.lg};`);
  s.appendChild(dc()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), oc(i)), i.style.display = r ? "flex" : "none", s.style.background = r ? $e.bgActive : $e.bg, s.setAttribute("aria-expanded", String(r));
  }, c = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r), s.onmouseover = () => {
    s.style.background = r ? $e.bgActive : $e.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? $e.bgActive : $e.bg;
  };
  const d = "toggleEl" in e ? e : null;
  return d && (d.toggleEl.style.marginRight = "2px"), (d ? d.toggleEl : e).appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: c
  };
}
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = { exports: {} }, cr = {}, Le = {}, rt = {}, lr = {}, dr = {}, ur = {}, So;
function Bn() {
  return So || (So = 1, (function(e) {
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
    function o(v, ...h) {
      const C = [v[0]];
      let S = 0;
      for (; S < h.length; )
        a(C, h[S]), C.push(v[++S]);
      return new r(C);
    }
    e._ = o;
    const i = new r("+");
    function s(v, ...h) {
      const C = [m(v[0])];
      let S = 0;
      for (; S < h.length; )
        C.push(i), a(C, h[S]), C.push(i, m(v[++S]));
      return c(C), new r(C);
    }
    e.str = s;
    function a(v, h) {
      h instanceof r ? v.push(...h._items) : h instanceof n ? v.push(h) : v.push($(h));
    }
    e.addCodeArg = a;
    function c(v) {
      let h = 1;
      for (; h < v.length - 1; ) {
        if (v[h] === i) {
          const C = d(v[h - 1], v[h + 1]);
          if (C !== void 0) {
            v.splice(h - 1, 3, C);
            continue;
          }
          v[h++] = "+";
        }
        h++;
      }
    }
    function d(v, h) {
      if (h === '""')
        return v;
      if (v === '""')
        return h;
      if (typeof v == "string")
        return h instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof h != "string" ? `${v.slice(0, -1)}${h}"` : h[0] === '"' ? v.slice(0, -1) + h.slice(1) : void 0;
      if (typeof h == "string" && h[0] === '"' && !(v instanceof n))
        return `"${v}${h.slice(1)}`;
    }
    function f(v, h) {
      return h.emptyStr() ? v : v.emptyStr() ? h : s`${v}${h}`;
    }
    e.strConcat = f;
    function $(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : m(Array.isArray(v) ? v.join(",") : v);
    }
    function _(v) {
      return new r(m(v));
    }
    e.stringify = _;
    function m(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = m;
    function y(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : o`[${v}]`;
    }
    e.getProperty = y;
    function w(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function u(v) {
      return new r(v.toString());
    }
    e.regexpCode = u;
  })(ur)), ur;
}
var fr = {}, Co;
function ko() {
  return Co || (Co = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Bn();
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
        var f, $;
        if (!(($ = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || $ === void 0) && $.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(d, f) {
        super(f), this.prefix = d;
      }
      setValue(d, { property: f, itemIndex: $ }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(f)}[${$}]`;
      }
    }
    e.ValueScopeName = i;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(d) {
        super(d), this._values = {}, this._scope = d.scope, this.opts = { ...d, _n: d.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(d) {
        return new i(d, this._newName(d));
      }
      value(d, f) {
        var $;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const _ = this.toName(d), { prefix: m } = _, y = ($ = f.key) !== null && $ !== void 0 ? $ : f.ref;
        let w = this._values[m];
        if (w) {
          const h = w.get(y);
          if (h)
            return h;
        } else
          w = this._values[m] = /* @__PURE__ */ new Map();
        w.set(y, _);
        const u = this._scope[m] || (this._scope[m] = []), v = u.length;
        return u[v] = f.ref, _.setValue(f, { property: m, itemIndex: v }), _;
      }
      getValue(d, f) {
        const $ = this._values[d];
        if ($)
          return $.get(f);
      }
      scopeRefs(d, f = this._values) {
        return this._reduceValues(f, ($) => {
          if ($.scopePath === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return (0, t._)`${d}${$.scopePath}`;
        });
      }
      scopeCode(d = this._values, f, $) {
        return this._reduceValues(d, (_) => {
          if (_.value === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return _.value.code;
        }, f, $);
      }
      _reduceValues(d, f, $ = {}, _) {
        let m = t.nil;
        for (const y in d) {
          const w = d[y];
          if (!w)
            continue;
          const u = $[y] = $[y] || /* @__PURE__ */ new Map();
          w.forEach((v) => {
            if (u.has(v))
              return;
            u.set(v, r.Started);
            let h = f(v);
            if (h) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              m = (0, t._)`${m}${C} ${v} = ${h};${this.opts._n}`;
            } else if (h = _?.(v))
              m = (0, t._)`${m}${h}${this.opts._n}`;
            else
              throw new n(v);
            u.set(v, r.Completed);
          });
        }
        return m;
      }
    }
    e.ValueScope = a;
  })(fr)), fr;
}
var xo;
function ie() {
  return xo || (xo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Bn(), n = /* @__PURE__ */ ko();
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
    var o = /* @__PURE__ */ ko();
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
      optimizeNames(b, k) {
        return this;
      }
    }
    class s extends i {
      constructor(b, k, L) {
        super(), this.varKind = b, this.name = k, this.rhs = L;
      }
      render({ es5: b, _n: k }) {
        const L = b ? n.varKinds.var : this.varKind, G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${L} ${this.name}${G};` + k;
      }
      optimizeNames(b, k) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, b, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(b, k, L) {
        super(), this.lhs = b, this.rhs = k, this.sideEffects = L;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, k) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, b, k), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return V(b, this.rhs);
      }
    }
    class c extends a {
      constructor(b, k, L, G) {
        super(b, L, G), this.op = k;
      }
      render({ _n: b }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + b;
      }
    }
    class d extends i {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `${this.label}:` + b;
      }
    }
    class f extends i {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `break${this.label ? ` ${this.label}` : ""};` + b;
      }
    }
    class $ extends i {
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
    class _ extends i {
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
        return this.code = j(this.code, b, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class m extends i {
      constructor(b = []) {
        super(), this.nodes = b;
      }
      render(b) {
        return this.nodes.reduce((k, L) => k + L.render(b), "");
      }
      optimizeNodes() {
        const { nodes: b } = this;
        let k = b.length;
        for (; k--; ) {
          const L = b[k].optimizeNodes();
          Array.isArray(L) ? b.splice(k, 1, ...L) : L ? b[k] = L : b.splice(k, 1);
        }
        return b.length > 0 ? this : void 0;
      }
      optimizeNames(b, k) {
        const { nodes: L } = this;
        let G = L.length;
        for (; G--; ) {
          const U = L[G];
          U.optimizeNames(b, k) || (K(b, U.names), L.splice(G, 1));
        }
        return L.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, k) => T(b, k.names), {});
      }
    }
    class y extends m {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class w extends m {
    }
    class u extends y {
    }
    u.kind = "else";
    class v extends y {
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
          const L = k.optimizeNodes();
          k = this.else = Array.isArray(L) ? new u(L) : L;
        }
        if (k)
          return b === !1 ? k instanceof v ? k : k.nodes : this.nodes.length ? this : new v(Y(b), k instanceof v ? [k] : k.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, k) {
        var L;
        if (this.else = (L = this.else) === null || L === void 0 ? void 0 : L.optimizeNames(b, k), !!(super.optimizeNames(b, k) || this.else))
          return this.condition = j(this.condition, b, k), this;
      }
      get names() {
        const b = super.names;
        return V(b, this.condition), this.else && T(b, this.else.names), b;
      }
    }
    v.kind = "if";
    class h extends y {
    }
    h.kind = "for";
    class C extends h {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, k) {
        if (super.optimizeNames(b, k))
          return this.iteration = j(this.iteration, b, k), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class S extends h {
      constructor(b, k, L, G) {
        super(), this.varKind = b, this.name = k, this.from = L, this.to = G;
      }
      render(b) {
        const k = b.es5 ? n.varKinds.var : this.varKind, { name: L, from: G, to: U } = this;
        return `for(${k} ${L}=${G}; ${L}<${U}; ${L}++)` + super.render(b);
      }
      get names() {
        const b = V(super.names, this.from);
        return V(b, this.to);
      }
    }
    class l extends h {
      constructor(b, k, L, G) {
        super(), this.loop = b, this.varKind = k, this.name = L, this.iterable = G;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, k) {
        if (super.optimizeNames(b, k))
          return this.iterable = j(this.iterable, b, k), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class p extends y {
      constructor(b, k, L) {
        super(), this.name = b, this.args = k, this.async = L;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    p.kind = "func";
    class g extends m {
      render(b) {
        return "return " + super.render(b);
      }
    }
    g.kind = "return";
    class x extends y {
      render(b) {
        let k = "try" + super.render(b);
        return this.catch && (k += this.catch.render(b)), this.finally && (k += this.finally.render(b)), k;
      }
      optimizeNodes() {
        var b, k;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(b, k) {
        var L, G;
        return super.optimizeNames(b, k), (L = this.catch) === null || L === void 0 || L.optimizeNames(b, k), (G = this.finally) === null || G === void 0 || G.optimizeNames(b, k), this;
      }
      get names() {
        const b = super.names;
        return this.catch && T(b, this.catch.names), this.finally && T(b, this.finally.names), b;
      }
    }
    class P extends y {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    P.kind = "catch";
    class N extends y {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    N.kind = "finally";
    class I {
      constructor(b, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = b, this._scope = new n.Scope({ parent: b }), this._nodes = [new w()];
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
        const L = this._extScope.value(b, k);
        return (this._values[L.prefix] || (this._values[L.prefix] = /* @__PURE__ */ new Set())).add(L), L;
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
      _def(b, k, L, G) {
        const U = this._scope.toName(k);
        return L !== void 0 && G && (this._constants[U.str] = L), this._leafNode(new s(b, U, L)), U;
      }
      // `const` declaration (`var` in es5 mode)
      const(b, k, L) {
        return this._def(n.varKinds.const, b, k, L);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(b, k, L) {
        return this._def(n.varKinds.let, b, k, L);
      }
      // `var` declaration with optional assignment
      var(b, k, L) {
        return this._def(n.varKinds.var, b, k, L);
      }
      // assignment code
      assign(b, k, L) {
        return this._leafNode(new a(b, k, L));
      }
      // `+=` code
      add(b, k) {
        return this._leafNode(new c(b, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(b) {
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new _(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const k = ["{"];
        for (const [L, G] of b)
          k.length > 1 && k.push(","), k.push(L), (L !== G || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, G));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, k, L) {
        if (this._blockNode(new v(b)), k && L)
          this.code(k).else().code(L).endIf();
        else if (k)
          this.code(k).endIf();
        else if (L)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new v(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, u);
      }
      _for(b, k) {
        return this._blockNode(b), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, k) {
        return this._for(new C(b), k);
      }
      // `for` statement for a range of values
      forRange(b, k, L, G, U = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(b);
        return this._for(new S(U, Q, k, L), () => G(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, k, L, G = n.varKinds.const) {
        const U = this._scope.toName(b);
        if (this.opts.es5) {
          const Q = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (ne) => {
            this.var(U, (0, t._)`${Q}[${ne}]`), L(U);
          });
        }
        return this._for(new l("of", G, U, k), () => L(U));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, k, L, G = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${k})`, L);
        const U = this._scope.toName(b);
        return this._for(new l("in", G, U, k), () => L(U));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(h);
      }
      // `label` statement
      label(b) {
        return this._leafNode(new d(b));
      }
      // `break` statement
      break(b) {
        return this._leafNode(new f(b));
      }
      // `return` statement
      return(b) {
        const k = new g();
        if (this._blockNode(k), this.code(b), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(b, k, L) {
        if (!k && !L)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const G = new x();
        if (this._blockNode(G), this.code(b), k) {
          const U = this.name("e");
          this._currNode = G.catch = new P(U), k(U);
        }
        return L && (this._currNode = G.finally = new N(), this.code(L)), this._endBlockNode(P, N);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new $(b));
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
        const L = this._nodes.length - k;
        if (L < 0 || b !== void 0 && L !== b)
          throw new Error(`CodeGen: wrong number of nodes: ${L} vs ${b} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(b, k = t.nil, L, G) {
        return this._blockNode(new p(b, k, L)), G && this.code(G).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(p);
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
        const L = this._currNode;
        if (L instanceof b || k && L instanceof k)
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
    e.CodeGen = I;
    function T(M, b) {
      for (const k in b)
        M[k] = (M[k] || 0) + (b[k] || 0);
      return M;
    }
    function V(M, b) {
      return b instanceof t._CodeOrName ? T(M, b.names) : M;
    }
    function j(M, b, k) {
      if (M instanceof t.Name)
        return L(M);
      if (!G(M))
        return M;
      return new t._Code(M._items.reduce((U, Q) => (Q instanceof t.Name && (Q = L(Q)), Q instanceof t._Code ? U.push(...Q._items) : U.push(Q), U), []));
      function L(U) {
        const Q = k[U.str];
        return Q === void 0 || b[U.str] !== 1 ? U : (delete b[U.str], Q);
      }
      function G(U) {
        return U instanceof t._Code && U._items.some((Q) => Q instanceof t.Name && b[Q.str] === 1 && k[Q.str] !== void 0);
      }
    }
    function K(M, b) {
      for (const k in b)
        M[k] = (M[k] || 0) - (b[k] || 0);
    }
    function Y(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${D(M)}`;
    }
    e.not = Y;
    const re = E(e.operators.AND);
    function q(...M) {
      return M.reduce(re);
    }
    e.and = q;
    const W = E(e.operators.OR);
    function R(...M) {
      return M.reduce(W);
    }
    e.or = R;
    function E(M) {
      return (b, k) => b === t.nil ? k : k === t.nil ? b : (0, t._)`${D(b)} ${M} ${D(k)}`;
    }
    function D(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(dr)), dr;
}
var ae = {}, Eo;
function ce() {
  if (Eo) return ae;
  Eo = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.checkStrictMode = ae.getErrorPath = ae.Type = ae.useFunc = ae.setEvaluated = ae.evaluatedPropsToName = ae.mergeEvaluated = ae.eachItem = ae.unescapeJsonPointer = ae.escapeJsonPointer = ae.escapeFragment = ae.unescapeFragment = ae.schemaRefOrVal = ae.schemaHasRulesButRef = ae.schemaHasRules = ae.checkUnknownRules = ae.alwaysValidSchema = ae.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Bn();
  function n(l) {
    const p = {};
    for (const g of l)
      p[g] = !0;
    return p;
  }
  ae.toHash = n;
  function r(l, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (o(l, p), !i(p, l.self.RULES.all));
  }
  ae.alwaysValidSchema = r;
  function o(l, p = l.schema) {
    const { opts: g, self: x } = l;
    if (!g.strictSchema || typeof p == "boolean")
      return;
    const P = x.RULES.keywords;
    for (const N in p)
      P[N] || S(l, `unknown keyword: "${N}"`);
  }
  ae.checkUnknownRules = o;
  function i(l, p) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (p[g])
        return !0;
    return !1;
  }
  ae.schemaHasRules = i;
  function s(l, p) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (g !== "$ref" && p.all[g])
        return !0;
    return !1;
  }
  ae.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: p }, g, x, P) {
    if (!P) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${l}${p}${(0, e.getProperty)(x)}`;
  }
  ae.schemaRefOrVal = a;
  function c(l) {
    return $(decodeURIComponent(l));
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
  function $(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ae.unescapeJsonPointer = $;
  function _(l, p) {
    if (Array.isArray(l))
      for (const g of l)
        p(g);
    else
      p(l);
  }
  ae.eachItem = _;
  function m({ mergeNames: l, mergeToName: p, mergeValues: g, resultToName: x }) {
    return (P, N, I, T) => {
      const V = I === void 0 ? N : I instanceof e.Name ? (N instanceof e.Name ? l(P, N, I) : p(P, N, I), I) : N instanceof e.Name ? (p(P, I, N), N) : g(N, I);
      return T === e.Name && !(V instanceof e.Name) ? x(P, V) : V;
    };
  }
  ae.mergeEvaluated = {
    props: m({
      mergeNames: (l, p, g) => l.if((0, e._)`${g} !== true && ${p} !== undefined`, () => {
        l.if((0, e._)`${p} === true`, () => l.assign(g, !0), () => l.assign(g, (0, e._)`${g} || {}`).code((0, e._)`Object.assign(${g}, ${p})`));
      }),
      mergeToName: (l, p, g) => l.if((0, e._)`${g} !== true`, () => {
        p === !0 ? l.assign(g, !0) : (l.assign(g, (0, e._)`${g} || {}`), w(l, g, p));
      }),
      mergeValues: (l, p) => l === !0 ? !0 : { ...l, ...p },
      resultToName: y
    }),
    items: m({
      mergeNames: (l, p, g) => l.if((0, e._)`${g} !== true && ${p} !== undefined`, () => l.assign(g, (0, e._)`${p} === true ? true : ${g} > ${p} ? ${g} : ${p}`)),
      mergeToName: (l, p, g) => l.if((0, e._)`${g} !== true`, () => l.assign(g, p === !0 ? !0 : (0, e._)`${g} > ${p} ? ${g} : ${p}`)),
      mergeValues: (l, p) => l === !0 ? !0 : Math.max(l, p),
      resultToName: (l, p) => l.var("items", p)
    })
  };
  function y(l, p) {
    if (p === !0)
      return l.var("props", !0);
    const g = l.var("props", (0, e._)`{}`);
    return p !== void 0 && w(l, g, p), g;
  }
  ae.evaluatedPropsToName = y;
  function w(l, p, g) {
    Object.keys(g).forEach((x) => l.assign((0, e._)`${p}${(0, e.getProperty)(x)}`, !0));
  }
  ae.setEvaluated = w;
  const u = {};
  function v(l, p) {
    return l.scopeValue("func", {
      ref: p,
      code: u[p.code] || (u[p.code] = new t._Code(p.code))
    });
  }
  ae.useFunc = v;
  var h;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(h || (ae.Type = h = {}));
  function C(l, p, g) {
    if (l instanceof e.Name) {
      const x = p === h.Num;
      return g ? x ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : x ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(l).toString() : "/" + f(l);
  }
  ae.getErrorPath = C;
  function S(l, p, g = l.opts.strictSchema) {
    if (g) {
      if (p = `strict mode: ${p}`, g === !0)
        throw new Error(p);
      l.self.logger.warn(p);
    }
  }
  return ae.checkStrictMode = S, ae;
}
var Lt = {}, Po;
function Oe() {
  if (Po) return Lt;
  Po = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
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
var Ao;
function Zn() {
  return Ao || (Ao = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: v }) => v ? (0, t.str)`"${u}" keyword must be ${v} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, v = e.keywordError, h, C) {
      const { it: S } = u, { gen: l, compositeRule: p, allErrors: g } = S, x = $(u, v, h);
      C ?? (p || g) ? c(l, x) : d(S, (0, t._)`[${x}]`);
    }
    e.reportError = o;
    function i(u, v = e.keywordError, h) {
      const { it: C } = u, { gen: S, compositeRule: l, allErrors: p } = C, g = $(u, v, h);
      c(S, g), l || p || d(C, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(u, v) {
      u.assign(r.default.errors, v), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(v, () => u.assign((0, t._)`${r.default.vErrors}.length`, v), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: v, schemaValue: h, data: C, errsCount: S, it: l }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const p = u.name("err");
      u.forRange("i", S, r.default.errors, (g) => {
        u.const(p, (0, t._)`${r.default.vErrors}[${g}]`), u.if((0, t._)`${p}.instancePath === undefined`, () => u.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${v}`), l.opts.verbose && (u.assign((0, t._)`${p}.schema`, h), u.assign((0, t._)`${p}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(u, v) {
      const h = u.const("err", v);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${r.default.vErrors}.push(${h})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, v) {
      const { gen: h, validateName: C, schemaEnv: S } = u;
      S.$async ? h.throw((0, t._)`new ${u.ValidationError}(${v})`) : (h.assign((0, t._)`${C}.errors`, v), h.return(!1));
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
    function $(u, v, h) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : _(u, v, h);
    }
    function _(u, v, h = {}) {
      const { gen: C, it: S } = u, l = [
        m(S, h),
        y(u, h)
      ];
      return w(u, v, l), C.object(...l);
    }
    function m({ errorPath: u }, { instancePath: v }) {
      const h = v ? (0, t.str)`${u}${(0, n.getErrorPath)(v, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, h)];
    }
    function y({ keyword: u, it: { errSchemaPath: v } }, { schemaPath: h, parentSchema: C }) {
      let S = C ? v : (0, t.str)`${v}/${u}`;
      return h && (S = (0, t.str)`${S}${(0, n.getErrorPath)(h, n.Type.Str)}`), [f.schemaPath, S];
    }
    function w(u, { params: v, message: h }, C) {
      const { keyword: S, data: l, schemaValue: p, it: g } = u, { opts: x, propertyName: P, topSchemaRef: N, schemaPath: I } = g;
      C.push([f.keyword, S], [f.params, typeof v == "function" ? v(u) : v || (0, t._)`{}`]), x.messages && C.push([f.message, typeof h == "function" ? h(u) : h]), x.verbose && C.push([f.schema, p], [f.parentSchema, (0, t._)`${N}${I}`], [r.default.data, l]), P && C.push([f.propertyName, P]);
    }
  })(lr)), lr;
}
var Ro;
function fc() {
  if (Ro) return rt;
  Ro = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.boolOrEmptySchema = rt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: f } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  rt.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: d, schema: f } = a;
    f === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  rt.boolOrEmptySchema = i;
  function s(a, c) {
    const { gen: d, data: f } = a, $ = {
      gen: d,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)($, r, void 0, c);
  }
  return rt;
}
var ye = {}, ot = {}, Mo;
function Vs() {
  if (Mo) return ot;
  Mo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.getRules = ot.isJSONType = void 0;
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
var qe = {}, No;
function Bs() {
  if (No) return qe;
  No = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.shouldUseRule = qe.shouldUseGroup = qe.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  qe.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  qe.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return qe.shouldUseRule = n, qe;
}
var To;
function Un() {
  if (To) return ye;
  To = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.reportTypeError = ye.checkDataTypes = ye.checkDataType = ye.coerceAndCheckDataType = ye.getJSONTypes = ye.getSchemaTypes = ye.DataType = void 0;
  const e = /* @__PURE__ */ Vs(), t = /* @__PURE__ */ Bs(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ce();
  var i;
  (function(h) {
    h[h.Correct = 0] = "Correct", h[h.Wrong = 1] = "Wrong";
  })(i || (ye.DataType = i = {}));
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
  ye.getSchemaTypes = s;
  function a(h) {
    const C = Array.isArray(h) ? h : h ? [h] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  ye.getJSONTypes = a;
  function c(h, C) {
    const { gen: S, data: l, opts: p } = h, g = f(C, p.coerceTypes), x = C.length > 0 && !(g.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(h, C[0]));
    if (x) {
      const P = y(C, l, p.strictNumbers, i.Wrong);
      S.if(P, () => {
        g.length ? $(h, C, g) : u(h);
      });
    }
    return x;
  }
  ye.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(h, C) {
    return C ? h.filter((S) => d.has(S) || C === "array" && S === "array") : [];
  }
  function $(h, C, S) {
    const { gen: l, data: p, opts: g } = h, x = l.let("dataType", (0, r._)`typeof ${p}`), P = l.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && l.if((0, r._)`${x} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => l.assign(p, (0, r._)`${p}[0]`).assign(x, (0, r._)`typeof ${p}`).if(y(C, p, g.strictNumbers), () => l.assign(P, p))), l.if((0, r._)`${P} !== undefined`);
    for (const I of S)
      (d.has(I) || I === "array" && g.coerceTypes === "array") && N(I);
    l.else(), u(h), l.endIf(), l.if((0, r._)`${P} !== undefined`, () => {
      l.assign(p, P), _(h, P);
    });
    function N(I) {
      switch (I) {
        case "string":
          l.elseIf((0, r._)`${x} == "number" || ${x} == "boolean"`).assign(P, (0, r._)`"" + ${p}`).elseIf((0, r._)`${p} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${x} == "boolean" || ${p} === null
              || (${x} == "string" && ${p} && ${p} == +${p})`).assign(P, (0, r._)`+${p}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${x} === "boolean" || ${p} === null
              || (${x} === "string" && ${p} && ${p} == +${p} && !(${p} % 1))`).assign(P, (0, r._)`+${p}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${p} === "false" || ${p} === 0 || ${p} === null`).assign(P, !1).elseIf((0, r._)`${p} === "true" || ${p} === 1`).assign(P, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${p} === "" || ${p} === 0 || ${p} === false`), l.assign(P, null);
          return;
        case "array":
          l.elseIf((0, r._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${p} === null`).assign(P, (0, r._)`[${p}]`);
      }
    }
  }
  function _({ gen: h, parentData: C, parentDataProperty: S }, l) {
    h.if((0, r._)`${C} !== undefined`, () => h.assign((0, r._)`${C}[${S}]`, l));
  }
  function m(h, C, S, l = i.Correct) {
    const p = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let g;
    switch (h) {
      case "null":
        return (0, r._)`${C} ${p} null`;
      case "array":
        g = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        g = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        g = x((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        g = x();
        break;
      default:
        return (0, r._)`typeof ${C} ${p} ${h}`;
    }
    return l === i.Correct ? g : (0, r.not)(g);
    function x(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, P, S ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ye.checkDataType = m;
  function y(h, C, S, l) {
    if (h.length === 1)
      return m(h[0], C, S, l);
    let p;
    const g = (0, o.toHash)(h);
    if (g.array && g.object) {
      const x = (0, r._)`typeof ${C} != "object"`;
      p = g.null ? x : (0, r._)`!${C} || ${x}`, delete g.null, delete g.array, delete g.object;
    } else
      p = r.nil;
    g.number && delete g.integer;
    for (const x in g)
      p = (0, r.and)(p, m(x, C, S, l));
    return p;
  }
  ye.checkDataTypes = y;
  const w = {
    message: ({ schema: h }) => `must be ${h}`,
    params: ({ schema: h, schemaValue: C }) => typeof h == "string" ? (0, r._)`{type: ${h}}` : (0, r._)`{type: ${C}}`
  };
  function u(h) {
    const C = v(h);
    (0, n.reportError)(C, w);
  }
  ye.reportTypeError = u;
  function v(h) {
    const { gen: C, data: S, schema: l } = h, p = (0, o.schemaRefOrVal)(h, l, "type");
    return {
      gen: C,
      keyword: "type",
      data: S,
      schema: l.type,
      schemaCode: p,
      schemaValue: p,
      parentSchema: l,
      params: {},
      it: h
    };
  }
  return ye;
}
var Et = {}, Oo;
function pc() {
  if (Oo) return Et;
  Oo = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, d) => r(o, d, c.default));
  }
  Et.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: c, data: d, opts: f } = o;
    if (s === void 0)
      return;
    const $ = (0, e._)`${d}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${$}`);
      return;
    }
    let _ = (0, e._)`${$} === undefined`;
    f.useDefaults === "empty" && (_ = (0, e._)`${_} || ${$} === null || ${$} === ""`), a.if(_, (0, e._)`${$} = ${(0, e.stringify)(s)}`);
  }
  return Et;
}
var Ae = {}, ue = {}, Fo;
function Fe() {
  if (Fo) return ue;
  Fo = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.validateUnion = ue.validateArray = ue.usePattern = ue.callValidateCode = ue.schemaProperties = ue.allSchemaProperties = ue.noPropertyInData = ue.propertyInData = ue.isOwnProperty = ue.hasPropFunc = ue.reportMissingProp = ue.checkMissingProp = ue.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ce();
  function o(h, C) {
    const { gen: S, data: l, it: p } = h;
    S.if(f(S, l, C, p.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${C}` }, !0), h.error();
    });
  }
  ue.checkReportMissingProp = o;
  function i({ gen: h, data: C, it: { opts: S } }, l, p) {
    return (0, e.or)(...l.map((g) => (0, e.and)(f(h, C, g, S.ownProperties), (0, e._)`${p} = ${g}`)));
  }
  ue.checkMissingProp = i;
  function s(h, C) {
    h.setParams({ missingProperty: C }, !0), h.error();
  }
  ue.reportMissingProp = s;
  function a(h) {
    return h.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ue.hasPropFunc = a;
  function c(h, C, S) {
    return (0, e._)`${a(h)}.call(${C}, ${S})`;
  }
  ue.isOwnProperty = c;
  function d(h, C, S, l) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} !== undefined`;
    return l ? (0, e._)`${p} && ${c(h, C, S)}` : p;
  }
  ue.propertyInData = d;
  function f(h, C, S, l) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} === undefined`;
    return l ? (0, e.or)(p, (0, e.not)(c(h, C, S))) : p;
  }
  ue.noPropertyInData = f;
  function $(h) {
    return h ? Object.keys(h).filter((C) => C !== "__proto__") : [];
  }
  ue.allSchemaProperties = $;
  function _(h, C) {
    return $(C).filter((S) => !(0, t.alwaysValidSchema)(h, C[S]));
  }
  ue.schemaProperties = _;
  function m({ schemaCode: h, data: C, it: { gen: S, topSchemaRef: l, schemaPath: p, errorPath: g }, it: x }, P, N, I) {
    const T = I ? (0, e._)`${h}, ${C}, ${l}${p}` : C, V = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && V.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${T}, ${S.object(...V)}`;
    return N !== e.nil ? (0, e._)`${P}.call(${N}, ${j})` : (0, e._)`${P}(${j})`;
  }
  ue.callValidateCode = m;
  const y = (0, e._)`new RegExp`;
  function w({ gen: h, it: { opts: C } }, S) {
    const l = C.unicodeRegExp ? "u" : "", { regExp: p } = C.code, g = p(S, l);
    return h.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${p.code === "new RegExp" ? y : (0, r.useFunc)(h, p)}(${S}, ${l})`
    });
  }
  ue.usePattern = w;
  function u(h) {
    const { gen: C, data: S, keyword: l, it: p } = h, g = C.name("valid");
    if (p.allErrors) {
      const P = C.let("valid", !0);
      return x(() => C.assign(P, !1)), P;
    }
    return C.var(g, !0), x(() => C.break()), g;
    function x(P) {
      const N = C.const("len", (0, e._)`${S}.length`);
      C.forRange("i", 0, N, (I) => {
        h.subschema({
          keyword: l,
          dataProp: I,
          dataPropType: t.Type.Num
        }, g), C.if((0, e.not)(g), P);
      });
    }
  }
  ue.validateArray = u;
  function v(h) {
    const { gen: C, schema: S, keyword: l, it: p } = h;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((N) => (0, t.alwaysValidSchema)(p, N)) && !p.opts.unevaluated)
      return;
    const x = C.let("valid", !1), P = C.name("_valid");
    C.block(() => S.forEach((N, I) => {
      const T = h.subschema({
        keyword: l,
        schemaProp: I,
        compositeRule: !0
      }, P);
      C.assign(x, (0, e._)`${x} || ${P}`), h.mergeValidEvaluated(T, P) || C.if((0, e.not)(x));
    })), h.result(x, () => h.reset(), () => h.error(!0));
  }
  return ue.validateUnion = v, ue;
}
var zo;
function hc() {
  if (zo) return Ae;
  zo = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.validateKeywordUsage = Ae.validSchemaType = Ae.funcKeywordCode = Ae.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Zn();
  function o(_, m) {
    const { gen: y, keyword: w, schema: u, parentSchema: v, it: h } = _, C = m.macro.call(h.self, u, v, h), S = d(y, w, C);
    h.opts.validateSchema !== !1 && h.self.validateSchema(C, !0);
    const l = y.name("valid");
    _.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${h.errSchemaPath}/${w}`,
      topSchemaRef: S,
      compositeRule: !0
    }, l), _.pass(l, () => _.error(!0));
  }
  Ae.macroKeywordCode = o;
  function i(_, m) {
    var y;
    const { gen: w, keyword: u, schema: v, parentSchema: h, $data: C, it: S } = _;
    c(S, m);
    const l = !C && m.compile ? m.compile.call(S.self, v, h, S) : m.validate, p = d(w, u, l), g = w.let("valid");
    _.block$data(g, x), _.ok((y = m.valid) !== null && y !== void 0 ? y : g);
    function x() {
      if (m.errors === !1)
        I(), m.modifying && s(_), T(() => _.error());
      else {
        const V = m.async ? P() : N();
        m.modifying && s(_), T(() => a(_, V));
      }
    }
    function P() {
      const V = w.let("ruleErrs", null);
      return w.try(() => I((0, e._)`await `), (j) => w.assign(g, !1).if((0, e._)`${j} instanceof ${S.ValidationError}`, () => w.assign(V, (0, e._)`${j}.errors`), () => w.throw(j))), V;
    }
    function N() {
      const V = (0, e._)`${p}.errors`;
      return w.assign(V, null), I(e.nil), V;
    }
    function I(V = m.async ? (0, e._)`await ` : e.nil) {
      const j = S.opts.passContext ? t.default.this : t.default.self, K = !("compile" in m && !C || m.schema === !1);
      w.assign(g, (0, e._)`${V}${(0, n.callValidateCode)(_, p, j, K)}`, m.modifying);
    }
    function T(V) {
      var j;
      w.if((0, e.not)((j = m.valid) !== null && j !== void 0 ? j : g), V);
    }
  }
  Ae.funcKeywordCode = i;
  function s(_) {
    const { gen: m, data: y, it: w } = _;
    m.if(w.parentData, () => m.assign(y, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(_, m) {
    const { gen: y } = _;
    y.if((0, e._)`Array.isArray(${m})`, () => {
      y.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${m} : ${t.default.vErrors}.concat(${m})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(_);
    }, () => _.error());
  }
  function c({ schemaEnv: _ }, m) {
    if (m.async && !_.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(_, m, y) {
    if (y === void 0)
      throw new Error(`keyword "${m}" failed to compile`);
    return _.scopeValue("keyword", typeof y == "function" ? { ref: y } : { ref: y, code: (0, e.stringify)(y) });
  }
  function f(_, m, y = !1) {
    return !m.length || m.some((w) => w === "array" ? Array.isArray(_) : w === "object" ? _ && typeof _ == "object" && !Array.isArray(_) : typeof _ == w || y && typeof _ > "u");
  }
  Ae.validSchemaType = f;
  function $({ schema: _, opts: m, self: y, errSchemaPath: w }, u, v) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(v) : u.keyword !== v)
      throw new Error("ajv implementation error");
    const h = u.dependencies;
    if (h?.some((C) => !Object.prototype.hasOwnProperty.call(_, C)))
      throw new Error(`parent schema must have dependencies of ${v}: ${h.join(",")}`);
    if (u.validateSchema && !u.validateSchema(_[v])) {
      const S = `keyword "${v}" value is invalid at path "${w}": ` + y.errorsText(u.validateSchema.errors);
      if (m.validateSchema === "log")
        y.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Ae.validateKeywordUsage = $, Ae;
}
var Ve = {}, Io;
function mc() {
  if (Io) return Ve;
  Io = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.extendSubschemaMode = Ve.extendSubschemaData = Ve.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: f, topSchemaRef: $ }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const _ = i.schema[s];
      return a === void 0 ? {
        schema: _,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: _[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (d === void 0 || f === void 0 || $ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: $,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ve.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: d, dataTypes: f, propertyName: $ }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: _ } = s;
    if (a !== void 0) {
      const { errorPath: y, dataPathArr: w, opts: u } = s, v = _.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      m(v), i.errorPath = (0, e.str)`${y}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...w, i.parentDataProperty];
    }
    if (d !== void 0) {
      const y = d instanceof e.Name ? d : _.let("data", d, !0);
      m(y), $ !== void 0 && (i.propertyName = $);
    }
    f && (i.dataTypes = f);
    function m(y) {
      i.data = y, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, y];
    }
  }
  Ve.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: f }) {
    c !== void 0 && (i.compositeRule = c), d !== void 0 && (i.createErrors = d), f !== void 0 && (i.allErrors = f), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Ve.extendSubschemaMode = o, Ve;
}
var be = {}, pr, jo;
function Us() {
  return jo || (jo = 1, pr = function e(t, n) {
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
  }), pr;
}
var hr = { exports: {} }, Do;
function gc() {
  if (Do) return hr.exports;
  Do = 1;
  var e = hr.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, c, d, f, $, _) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, d, f, $, _);
      for (var m in s) {
        var y = s[m];
        if (Array.isArray(y)) {
          if (m in e.arrayKeywords)
            for (var w = 0; w < y.length; w++)
              t(r, o, i, y[w], a + "/" + m + "/" + w, c, a, m, s, w);
        } else if (m in e.propsKeywords) {
          if (y && typeof y == "object")
            for (var u in y)
              t(r, o, i, y[u], a + "/" + m + "/" + n(u), c, a, m, s, u);
        } else (m in e.keywords || r.allKeys && !(m in e.skipKeywords)) && t(r, o, i, y, a + "/" + m, c, a, m, s);
      }
      i(s, a, c, d, f, $, _);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return hr.exports;
}
var Lo;
function Qn() {
  if (Lo) return be;
  Lo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ce(), t = Us(), n = gc(), r = /* @__PURE__ */ new Set([
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
    return typeof w == "boolean" ? !0 : u === !0 ? !s(w) : u ? a(w) <= u : !1;
  }
  be.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(w) {
    for (const u in w) {
      if (i.has(u))
        return !0;
      const v = w[u];
      if (Array.isArray(v) && v.some(s) || typeof v == "object" && s(v))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let u = 0;
    for (const v in w) {
      if (v === "$ref")
        return 1 / 0;
      if (u++, !r.has(v) && (typeof w[v] == "object" && (0, e.eachItem)(w[v], (h) => u += a(h)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c(w, u = "", v) {
    v !== !1 && (u = $(u));
    const h = w.parse(u);
    return d(w, h);
  }
  be.getFullPath = c;
  function d(w, u) {
    return w.serialize(u).split("#")[0] + "#";
  }
  be._getFullPath = d;
  const f = /#\/?$/;
  function $(w) {
    return w ? w.replace(f, "") : "";
  }
  be.normalizeId = $;
  function _(w, u, v) {
    return v = $(v), w.resolve(u, v);
  }
  be.resolveUrl = _;
  const m = /^[a-z_][-a-z0-9._]*$/i;
  function y(w, u) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: v, uriResolver: h } = this.opts, C = $(w[v] || u), S = { "": C }, l = c(h, C, !1), p = {}, g = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (N, I, T, V) => {
      if (V === void 0)
        return;
      const j = l + I;
      let K = S[V];
      typeof N[v] == "string" && (K = Y.call(this, N[v])), re.call(this, N.$anchor), re.call(this, N.$dynamicAnchor), S[I] = K;
      function Y(q) {
        const W = this.opts.uriResolver.resolve;
        if (q = $(K ? W(K, q) : q), g.has(q))
          throw P(q);
        g.add(q);
        let R = this.refs[q];
        return typeof R == "string" && (R = this.refs[R]), typeof R == "object" ? x(N, R.schema, q) : q !== $(j) && (q[0] === "#" ? (x(N, p[q], q), p[q] = N) : this.refs[q] = j), q;
      }
      function re(q) {
        if (typeof q == "string") {
          if (!m.test(q))
            throw new Error(`invalid anchor "${q}"`);
          Y.call(this, `#${q}`);
        }
      }
    }), p;
    function x(N, I, T) {
      if (I !== void 0 && !t(N, I))
        throw P(T);
    }
    function P(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = y, be;
}
var qo;
function er() {
  if (qo) return Le;
  qo = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.getData = Le.KeywordCxt = Le.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ fc(), t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ Bs(), r = /* @__PURE__ */ Un(), o = /* @__PURE__ */ pc(), i = /* @__PURE__ */ hc(), s = /* @__PURE__ */ mc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Oe(), d = /* @__PURE__ */ Qn(), f = /* @__PURE__ */ ce(), $ = /* @__PURE__ */ Zn();
  function _(A) {
    if (l(A) && (g(A), S(A))) {
      u(A);
      return;
    }
    m(A, () => (0, e.topBoolOrEmptySchema)(A));
  }
  Le.validateFunctionCode = _;
  function m({ gen: A, validateName: z, schema: B, schemaEnv: J, opts: ee }, X) {
    ee.code.es5 ? A.func(z, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      A.code((0, a._)`"use strict"; ${h(B, ee)}`), w(A, ee), A.code(X);
    }) : A.func(z, (0, a._)`${c.default.data}, ${y(ee)}`, J.$async, () => A.code(h(B, ee)).code(X));
  }
  function y(A) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${A.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(A, z) {
    A.if(c.default.valCxt, () => {
      A.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), A.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), A.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), A.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), z.dynamicRef && A.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      A.var(c.default.instancePath, (0, a._)`""`), A.var(c.default.parentData, (0, a._)`undefined`), A.var(c.default.parentDataProperty, (0, a._)`undefined`), A.var(c.default.rootData, c.default.data), z.dynamicRef && A.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(A) {
    const { schema: z, opts: B, gen: J } = A;
    m(A, () => {
      B.$comment && z.$comment && V(A), N(A), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), B.unevaluated && v(A), x(A), j(A);
    });
  }
  function v(A) {
    const { gen: z, validateName: B } = A;
    A.evaluated = z.const("evaluated", (0, a._)`${B}.evaluated`), z.if((0, a._)`${A.evaluated}.dynamicProps`, () => z.assign((0, a._)`${A.evaluated}.props`, (0, a._)`undefined`)), z.if((0, a._)`${A.evaluated}.dynamicItems`, () => z.assign((0, a._)`${A.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(A, z) {
    const B = typeof A == "object" && A[z.schemaId];
    return B && (z.code.source || z.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function C(A, z) {
    if (l(A) && (g(A), S(A))) {
      p(A, z);
      return;
    }
    (0, e.boolOrEmptySchema)(A, z);
  }
  function S({ schema: A, self: z }) {
    if (typeof A == "boolean")
      return !A;
    for (const B in A)
      if (z.RULES.all[B])
        return !0;
    return !1;
  }
  function l(A) {
    return typeof A.schema != "boolean";
  }
  function p(A, z) {
    const { schema: B, gen: J, opts: ee } = A;
    ee.$comment && B.$comment && V(A), I(A), T(A);
    const X = J.const("_errs", c.default.errors);
    x(A, X), J.var(z, (0, a._)`${X} === ${c.default.errors}`);
  }
  function g(A) {
    (0, f.checkUnknownRules)(A), P(A);
  }
  function x(A, z) {
    if (A.opts.jtd)
      return Y(A, [], !1, z);
    const B = (0, t.getSchemaTypes)(A.schema), J = (0, t.coerceAndCheckDataType)(A, B);
    Y(A, B, !J, z);
  }
  function P(A) {
    const { schema: z, errSchemaPath: B, opts: J, self: ee } = A;
    z.$ref && J.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(z, ee.RULES) && ee.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function N(A) {
    const { schema: z, opts: B } = A;
    z.default !== void 0 && B.useDefaults && B.strictSchema && (0, f.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function I(A) {
    const z = A.schema[A.opts.schemaId];
    z && (A.baseId = (0, d.resolveUrl)(A.opts.uriResolver, A.baseId, z));
  }
  function T(A) {
    if (A.schema.$async && !A.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function V({ gen: A, schemaEnv: z, schema: B, errSchemaPath: J, opts: ee }) {
    const X = B.$comment;
    if (ee.$comment === !0)
      A.code((0, a._)`${c.default.self}.logger.log(${X})`);
    else if (typeof ee.$comment == "function") {
      const oe = (0, a.str)`${J}/$comment`, se = A.scopeValue("root", { ref: z.root });
      A.code((0, a._)`${c.default.self}.opts.$comment(${X}, ${oe}, ${se}.schema)`);
    }
  }
  function j(A) {
    const { gen: z, schemaEnv: B, validateName: J, ValidationError: ee, opts: X } = A;
    B.$async ? z.if((0, a._)`${c.default.errors} === 0`, () => z.return(c.default.data), () => z.throw((0, a._)`new ${ee}(${c.default.vErrors})`)) : (z.assign((0, a._)`${J}.errors`, c.default.vErrors), X.unevaluated && K(A), z.return((0, a._)`${c.default.errors} === 0`));
  }
  function K({ gen: A, evaluated: z, props: B, items: J }) {
    B instanceof a.Name && A.assign((0, a._)`${z}.props`, B), J instanceof a.Name && A.assign((0, a._)`${z}.items`, J);
  }
  function Y(A, z, B, J) {
    const { gen: ee, schema: X, data: oe, allErrors: se, opts: de, self: fe } = A, { RULES: he } = fe;
    if (X.$ref && (de.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(X, he))) {
      ee.block(() => G(A, "$ref", he.all.$ref.definition));
      return;
    }
    de.jtd || q(A, z), ee.block(() => {
      for (const ve of he.rules)
        je(ve);
      je(he.post);
    });
    function je(ve) {
      (0, n.shouldUseGroup)(X, ve) && (ve.type ? (ee.if((0, r.checkDataType)(ve.type, oe, de.strictNumbers)), re(A, ve), z.length === 1 && z[0] === ve.type && B && (ee.else(), (0, r.reportTypeError)(A)), ee.endIf()) : re(A, ve), se || ee.if((0, a._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function re(A, z) {
    const { gen: B, schema: J, opts: { useDefaults: ee } } = A;
    ee && (0, o.assignDefaults)(A, z.type), B.block(() => {
      for (const X of z.rules)
        (0, n.shouldUseRule)(J, X) && G(A, X.keyword, X.definition, z.type);
    });
  }
  function q(A, z) {
    A.schemaEnv.meta || !A.opts.strictTypes || (W(A, z), A.opts.allowUnionTypes || R(A, z), E(A, A.dataTypes));
  }
  function W(A, z) {
    if (z.length) {
      if (!A.dataTypes.length) {
        A.dataTypes = z;
        return;
      }
      z.forEach((B) => {
        M(A.dataTypes, B) || k(A, `type "${B}" not allowed by context "${A.dataTypes.join(",")}"`);
      }), b(A, z);
    }
  }
  function R(A, z) {
    z.length > 1 && !(z.length === 2 && z.includes("null")) && k(A, "use allowUnionTypes to allow union type keyword");
  }
  function E(A, z) {
    const B = A.self.RULES.all;
    for (const J in B) {
      const ee = B[J];
      if (typeof ee == "object" && (0, n.shouldUseRule)(A.schema, ee)) {
        const { type: X } = ee.definition;
        X.length && !X.some((oe) => D(z, oe)) && k(A, `missing type "${X.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function D(A, z) {
    return A.includes(z) || z === "number" && A.includes("integer");
  }
  function M(A, z) {
    return A.includes(z) || z === "integer" && A.includes("number");
  }
  function b(A, z) {
    const B = [];
    for (const J of A.dataTypes)
      M(z, J) ? B.push(J) : z.includes("integer") && J === "number" && B.push("integer");
    A.dataTypes = B;
  }
  function k(A, z) {
    const B = A.schemaEnv.baseId + A.errSchemaPath;
    z += ` at "${B}" (strictTypes)`, (0, f.checkStrictMode)(A, z, A.opts.strictTypes);
  }
  class L {
    constructor(z, B, J) {
      if ((0, i.validateKeywordUsage)(z, B, J), this.gen = z.gen, this.allErrors = z.allErrors, this.keyword = J, this.data = z.data, this.schema = z.schema[J], this.$data = B.$data && z.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(z, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = z.schema, this.params = {}, this.it = z, this.def = B, this.$data)
        this.schemaCode = z.gen.const("vSchema", ne(this.$data, z));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = z.gen.const("_errs", c.default.errors));
    }
    result(z, B, J) {
      this.failResult((0, a.not)(z), B, J);
    }
    failResult(z, B, J) {
      this.gen.if(z), J ? J() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(z, B) {
      this.failResult((0, a.not)(z), void 0, B);
    }
    fail(z) {
      if (z === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(z), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(z) {
      if (!this.$data)
        return this.fail(z);
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), z)})`);
    }
    error(z, B, J) {
      if (B) {
        this.setParams(B), this._error(z, J), this.setParams({});
        return;
      }
      this._error(z, J);
    }
    _error(z, B) {
      (z ? $.reportExtraError : $.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, $.reportError)(this, this.def.$dataError || $.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, $.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(z) {
      this.allErrors || this.gen.if(z);
    }
    setParams(z, B) {
      B ? Object.assign(this.params, z) : this.params = z;
    }
    block$data(z, B, J = a.nil) {
      this.gen.block(() => {
        this.check$data(z, J), B();
      });
    }
    check$data(z = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: J, schemaCode: ee, schemaType: X, def: oe } = this;
      J.if((0, a.or)((0, a._)`${ee} === undefined`, B)), z !== a.nil && J.assign(z, !0), (X.length || oe.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), z !== a.nil && J.assign(z, !1)), J.else();
    }
    invalid$data() {
      const { gen: z, schemaCode: B, schemaType: J, def: ee, it: X } = this;
      return (0, a.or)(oe(), se());
      function oe() {
        if (J.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const de = Array.isArray(J) ? J : [J];
          return (0, a._)`${(0, r.checkDataTypes)(de, B, X.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function se() {
        if (ee.validateSchema) {
          const de = z.scopeValue("validate$data", { ref: ee.validateSchema });
          return (0, a._)`!${de}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(z, B) {
      const J = (0, s.getSubschema)(this.it, z);
      (0, s.extendSubschemaData)(J, this.it, z), (0, s.extendSubschemaMode)(J, z);
      const ee = { ...this.it, ...J, items: void 0, props: void 0 };
      return C(ee, B), ee;
    }
    mergeEvaluated(z, B) {
      const { it: J, gen: ee } = this;
      J.opts.unevaluated && (J.props !== !0 && z.props !== void 0 && (J.props = f.mergeEvaluated.props(ee, z.props, J.props, B)), J.items !== !0 && z.items !== void 0 && (J.items = f.mergeEvaluated.items(ee, z.items, J.items, B)));
    }
    mergeValidEvaluated(z, B) {
      const { it: J, gen: ee } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return ee.if(B, () => this.mergeEvaluated(z, a.Name)), !0;
    }
  }
  Le.KeywordCxt = L;
  function G(A, z, B, J) {
    const ee = new L(A, B, z);
    "code" in B ? B.code(ee, J) : ee.$data && B.validate ? (0, i.funcKeywordCode)(ee, B) : "macro" in B ? (0, i.macroKeywordCode)(ee, B) : (B.compile || B.validate) && (0, i.funcKeywordCode)(ee, B);
  }
  const U = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ne(A, { dataLevel: z, dataNames: B, dataPathArr: J }) {
    let ee, X;
    if (A === "")
      return c.default.rootData;
    if (A[0] === "/") {
      if (!U.test(A))
        throw new Error(`Invalid JSON-pointer: ${A}`);
      ee = A, X = c.default.rootData;
    } else {
      const fe = Q.exec(A);
      if (!fe)
        throw new Error(`Invalid JSON-pointer: ${A}`);
      const he = +fe[1];
      if (ee = fe[2], ee === "#") {
        if (he >= z)
          throw new Error(de("property/index", he));
        return J[z - he];
      }
      if (he > z)
        throw new Error(de("data", he));
      if (X = B[z - he], !ee)
        return X;
    }
    let oe = X;
    const se = ee.split("/");
    for (const fe of se)
      fe && (X = (0, a._)`${X}${(0, a.getProperty)((0, f.unescapeJsonPointer)(fe))}`, oe = (0, a._)`${oe} && ${X}`);
    return oe;
    function de(fe, he) {
      return `Cannot access ${fe} ${he} levels up, current level is ${z}`;
    }
  }
  return Le.getData = ne, Le;
}
var qt = {}, Vo;
function Qr() {
  if (Vo) return qt;
  Vo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return qt.default = e, qt;
}
var Vt = {}, Bo;
function tr() {
  if (Bo) return Vt;
  Bo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qn();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Vt.default = t, Vt;
}
var we = {}, Uo;
function nr() {
  if (Uo) return we;
  Uo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ ce(), i = /* @__PURE__ */ er();
  class s {
    constructor(v) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof v.schema == "object" && (C = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (h = v.baseId) !== null && h !== void 0 ? h : (0, r.normalizeId)(C?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(u) {
    const v = f.call(this, u);
    if (v)
      return v;
    const h = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: S } = this.opts.code, { ownProperties: l } = this.opts, p = new e.CodeGen(this.scope, { es5: C, lines: S, ownProperties: l });
    let g;
    u.$async && (g = p.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = p.scopeName("validate");
    u.validateName = x;
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
      topSchemaRef: p.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: x,
      ValidationError: g,
      schema: u.schema,
      schemaEnv: u,
      rootId: h,
      baseId: u.baseId || h,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let N;
    try {
      this._compilations.add(u), (0, i.validateFunctionCode)(P), p.optimize(this.opts.code.optimize);
      const I = p.toString();
      N = `${p.scopeRefs(n.default.scope)}return ${I}`, this.opts.code.process && (N = this.opts.code.process(N, u));
      const V = new Function(`${n.default.self}`, `${n.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(x, { ref: V }), V.errors = null, V.schema = u.schema, V.schemaEnv = u, u.$async && (V.$async = !0), this.opts.code.source === !0 && (V.source = { validateName: x, validateCode: I, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: j, items: K } = P;
        V.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: K instanceof e.Name ? void 0 : K,
          dynamicProps: j instanceof e.Name,
          dynamicItems: K instanceof e.Name
        }, V.source && (V.source.evaluated = (0, e.stringify)(V.evaluated));
      }
      return u.validate = V, u;
    } catch (I) {
      throw delete u.validate, delete u.validateName, N && this.logger.error("Error compiling schema, function code:", N), I;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function c(u, v, h) {
    var C;
    h = (0, r.resolveUrl)(this.opts.uriResolver, v, h);
    const S = u.refs[h];
    if (S)
      return S;
    let l = _.call(this, u, h);
    if (l === void 0) {
      const p = (C = u.localRefs) === null || C === void 0 ? void 0 : C[h], { schemaId: g } = this.opts;
      p && (l = new s({ schema: p, schemaId: g, root: u, baseId: v }));
    }
    if (l !== void 0)
      return u.refs[h] = d.call(this, l);
  }
  we.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function f(u) {
    for (const v of this._compilations)
      if ($(v, u))
        return v;
  }
  we.getCompilingSchema = f;
  function $(u, v) {
    return u.schema === v.schema && u.root === v.root && u.baseId === v.baseId;
  }
  function _(u, v) {
    let h;
    for (; typeof (h = this.refs[v]) == "string"; )
      v = h;
    return h || this.schemas[v] || m.call(this, u, v);
  }
  function m(u, v) {
    const h = this.opts.uriResolver.parse(v), C = (0, r._getFullPath)(this.opts.uriResolver, h);
    let S = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === S)
      return w.call(this, h, u);
    const l = (0, r.normalizeId)(C), p = this.refs[l] || this.schemas[l];
    if (typeof p == "string") {
      const g = m.call(this, u, p);
      return typeof g?.schema != "object" ? void 0 : w.call(this, h, g);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), l === (0, r.normalizeId)(v)) {
        const { schema: g } = p, { schemaId: x } = this.opts, P = g[x];
        return P && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, P)), new s({ schema: g, schemaId: x, root: u, baseId: S });
      }
      return w.call(this, h, p);
    }
  }
  we.resolveSchema = m;
  const y = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(u, { baseId: v, schema: h, root: C }) {
    var S;
    if (((S = u.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const g of u.fragment.slice(1).split("/")) {
      if (typeof h == "boolean")
        return;
      const x = h[(0, o.unescapeFragment)(g)];
      if (x === void 0)
        return;
      h = x;
      const P = typeof h == "object" && h[this.opts.schemaId];
      !y.has(g) && P && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, P));
    }
    let l;
    if (typeof h != "boolean" && h.$ref && !(0, o.schemaHasRulesButRef)(h, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, v, h.$ref);
      l = m.call(this, C, g);
    }
    const { schemaId: p } = this.opts;
    if (l = l || new s({ schema: h, schemaId: p, root: C, baseId: v }), l.schema !== l.root.schema)
      return l;
  }
  return we;
}
const yc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", $c = "Meta-schema for $data reference (JSON AnySchema extension proposal)", vc = "object", bc = ["$data"], wc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, _c = !1, Sc = {
  $id: yc,
  description: $c,
  type: vc,
  required: bc,
  properties: wc,
  additionalProperties: _c
};
var Bt = {}, Pt = { exports: {} }, mr, Ho;
function Hs() {
  if (Ho) return mr;
  Ho = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(l) {
    let p = "", g = 0, x = 0;
    for (x = 0; x < l.length; x++)
      if (g = l[x].charCodeAt(0), g !== 48) {
        if (!(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
          return "";
        p += l[x];
        break;
      }
    for (x += 1; x < l.length; x++) {
      if (g = l[x].charCodeAt(0), !(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
        return "";
      p += l[x];
    }
    return p;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, p, g) {
    if (l.length) {
      const x = i(l);
      if (x !== "")
        p.push(x);
      else
        return g.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let p = 0;
    const g = { error: !1, address: "", zone: "" }, x = [], P = [];
    let N = !1, I = !1, T = c;
    for (let V = 0; V < l.length; V++) {
      const j = l[V];
      if (!(j === "[" || j === "]"))
        if (j === ":") {
          if (N === !0 && (I = !0), !T(P, x, g))
            break;
          if (++p > 7) {
            g.error = !0;
            break;
          }
          V > 0 && l[V - 1] === ":" && (N = !0), x.push(":");
          continue;
        } else if (j === "%") {
          if (!T(P, x, g))
            break;
          T = a;
        } else {
          P.push(j);
          continue;
        }
    }
    return P.length && (T === a ? g.zone = P.join("") : I ? x.push(P.join("")) : x.push(i(P))), g.address = x.join(""), g;
  }
  function f(l) {
    if ($(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const p = d(l);
    if (p.error)
      return { host: l, isIPV6: !1 };
    {
      let g = p.address, x = p.address;
      return p.zone && (g += "%" + p.zone, x += "%25" + p.zone), { host: g, isIPV6: !0, escapedHost: x };
    }
  }
  function $(l, p) {
    let g = 0;
    for (let x = 0; x < l.length; x++)
      l[x] === p && g++;
    return g;
  }
  function _(l) {
    let p = l;
    const g = [];
    let x = -1, P = 0;
    for (; P = p.length; ) {
      if (P === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          g.push("/");
          break;
        } else {
          g.push(p);
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
          g.push("/");
          break;
        }
      } else if (P === 3 && p === "/..") {
        g.length !== 0 && g.pop(), g.push("/");
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
          p = p.slice(3), g.length !== 0 && g.pop();
          continue;
        }
      }
      if ((x = p.indexOf("/", 1)) === -1) {
        g.push(p);
        break;
      } else
        g.push(p.slice(0, x)), p = p.slice(x);
    }
    return g.join("");
  }
  const m = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, y = /[@/?#:]/g, w = /[@/?#]/g;
  function u(l, p) {
    const g = p ? w : y;
    return g.lastIndex = 0, l.replace(g, (x) => m[x]);
  }
  function v(l, p = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let g = "";
    for (let x = 0; x < l.length; x++) {
      if (l[x] === "%" && x + 2 < l.length) {
        const P = l.slice(x + 1, x + 3);
        if (n(P)) {
          const N = P.toUpperCase(), I = String.fromCharCode(parseInt(N, 16));
          p && r(I) ? g += I : g += "%" + N, x += 2;
          continue;
        }
      }
      g += l[x];
    }
    return g;
  }
  function h(l) {
    let p = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const x = l.slice(g + 1, g + 3);
        if (n(x)) {
          const P = x.toUpperCase(), N = String.fromCharCode(parseInt(P, 16));
          N !== "." && r(N) ? p += N : p += "%" + P, g += 2;
          continue;
        }
      }
      o(l[g]) ? p += l[g] : p += escape(l[g]);
    }
    return p;
  }
  function C(l) {
    let p = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const x = l.slice(g + 1, g + 3);
        if (n(x)) {
          p += "%" + x.toUpperCase(), g += 2;
          continue;
        }
      }
      p += escape(l[g]);
    }
    return p;
  }
  function S(l) {
    const p = [];
    if (l.userinfo !== void 0 && (p.push(l.userinfo), p.push("@")), l.host !== void 0) {
      let g = unescape(l.host);
      if (!t(g)) {
        const x = f(g);
        x.isIPV6 === !0 ? g = `[${x.escapedHost}]` : g = u(g, !1);
      }
      p.push(g);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (p.push(":"), p.push(String(l.port))), p.length ? p.join("") : void 0;
  }
  return mr = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: v,
    normalizePathEncoding: h,
    escapePreservingEscapes: C,
    removeDotSegments: _,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: i
  }, mr;
}
var gr, Ko;
function Cc() {
  if (Ko) return gr;
  Ko = 1;
  const { isUUID: e } = Hs(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function s(l) {
    const p = String(l.scheme).toLowerCase() === "https";
    return (l.port === (p ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = o(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (o(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [p, g] = l.resourceName.split("?");
      l.path = p && p !== "/" ? p : void 0, l.query = g, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function d(l, p) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const g = l.path.match(t);
    if (g) {
      const x = p.scheme || l.scheme || "urn";
      l.nid = g[1].toLowerCase(), l.nss = g[2];
      const P = `${x}:${p.nid || l.nid}`, N = S(P);
      l.path = void 0, N && (l = N.parse(l, p));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function f(l, p) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = p.scheme || l.scheme || "urn", x = l.nid.toLowerCase(), P = `${g}:${p.nid || x}`, N = S(P);
    N && (l = N.serialize(l, p));
    const I = l, T = l.nss;
    return I.path = `${x || p.nid}:${T}`, p.skipEscape = !0, I;
  }
  function $(l, p) {
    const g = l;
    return g.uuid = g.nss, g.nss = void 0, !p.tolerant && (!g.uuid || !e(g.uuid)) && (g.error = g.error || "UUID is not valid."), g;
  }
  function _(l) {
    const p = l;
    return p.nss = (l.uuid || "").toLowerCase(), p;
  }
  const m = (
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
      domainHost: m.domainHost,
      parse: i,
      serialize: s
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
      http: m,
      https: y,
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
          parse: $,
          serialize: _,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function S(l) {
    return l && (C[
      /** @type {SchemeName} */
      l
    ] || C[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return gr = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, gr;
}
var Go;
function kc() {
  if (Go) return Pt.exports;
  Go = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = Hs(), { SCHEMES: d, getSchemeHandler: f } = Cc();
  function $(P, N) {
    return typeof P == "string" ? P = /** @type {T} */
    l(P, N) : typeof P == "object" && (P = /** @type {T} */
    S(w(P, N), N)), P;
  }
  function _(P, N, I) {
    const T = I ? Object.assign({ scheme: "null" }, I) : { scheme: "null" }, V = m(S(P, T), S(N, T), T, !0);
    return T.skipEscape = !0, w(V, T);
  }
  function m(P, N, I, T) {
    const V = {};
    return T || (P = S(w(P, I), I), N = S(w(N, I), I)), I = I || {}, !I.tolerant && N.scheme ? (V.scheme = N.scheme, V.userinfo = N.userinfo, V.host = N.host, V.port = N.port, V.path = t(N.path || ""), V.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (V.userinfo = N.userinfo, V.host = N.host, V.port = N.port, V.path = t(N.path || ""), V.query = N.query) : (N.path ? (N.path[0] === "/" ? V.path = t(N.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? V.path = "/" + N.path : P.path ? V.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + N.path : V.path = N.path, V.path = t(V.path)), V.query = N.query) : (V.path = P.path, N.query !== void 0 ? V.query = N.query : V.query = P.query), V.userinfo = P.userinfo, V.host = P.host, V.port = P.port), V.scheme = P.scheme), V.fragment = N.fragment, V;
  }
  function y(P, N, I) {
    const T = g(P, I), V = g(N, I);
    return T !== void 0 && V !== void 0 && T.toLowerCase() === V.toLowerCase();
  }
  function w(P, N) {
    const I = {
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
    }, T = Object.assign({}, N), V = [], j = f(T.scheme || I.scheme);
    j && j.serialize && j.serialize(I, T), I.path !== void 0 && (T.skipEscape ? I.path = r(I.path) : (I.path = i(I.path), I.scheme !== void 0 && (I.path = I.path.split("%3A").join(":")))), T.reference !== "suffix" && I.scheme && V.push(I.scheme, ":");
    const K = n(I);
    if (K !== void 0 && (T.reference !== "suffix" && V.push("//"), V.push(K), I.path && I.path[0] !== "/" && V.push("/")), I.path !== void 0) {
      let Y = I.path;
      !T.absolutePath && (!j || !j.absolutePath) && (Y = t(Y)), K === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), V.push(Y);
    }
    return I.query !== void 0 && V.push("?", I.query), I.fragment !== void 0 && V.push("#", I.fragment), V.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function h(P, N) {
    if (N[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function C(P, N) {
    const I = Object.assign({}, N), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let V = !1, j = !1;
    I.reference === "suffix" && (I.scheme ? P = I.scheme + ":" + P : P = "//" + P);
    const K = P.match(v);
    K !== null && K[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", V = !0);
    const Y = P.match(u);
    if (Y) {
      T.scheme = Y[1], T.userinfo = Y[3], T.host = Y[4], T.port = parseInt(Y[5], 10), T.path = Y[6] || "", T.query = Y[7], T.fragment = Y[8], isNaN(T.port) && (T.port = Y[5]);
      const re = h(T, Y);
      if (re !== void 0 && (T.error = T.error || re, V = !0), T.host)
        if (a(T.host) === !1) {
          const R = e(T.host);
          T.host = R.host.toLowerCase(), j = R.isIPV6;
        } else
          j = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", I.reference && I.reference !== "suffix" && I.reference !== T.reference && (T.error = T.error || "URI is not a " + I.reference + " reference.");
      const q = f(I.scheme || T.scheme);
      if (!I.unicodeSupport && (!q || !q.unicodeSupport) && T.host && (I.domainHost || q && q.domainHost) && j === !1 && c(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (W) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!q || q && !q.skipNormalize) && (P.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = s(unescape(T.host), j))), T.path && (T.path = o(T.path)), T.fragment))
        try {
          T.fragment = encodeURI(decodeURIComponent(T.fragment));
        } catch {
          T.error = T.error || "URI malformed";
        }
      q && q.parse && q.parse(T, I);
    } else
      T.error = T.error || "URI can not be parsed.";
    return { parsed: T, malformedAuthorityOrPort: V };
  }
  function S(P, N) {
    return C(P, N).parsed;
  }
  function l(P, N) {
    return p(P, N).normalized;
  }
  function p(P, N) {
    const { parsed: I, malformedAuthorityOrPort: T } = C(P, N);
    return {
      normalized: T ? P : w(I, N),
      malformedAuthorityOrPort: T
    };
  }
  function g(P, N) {
    if (typeof P == "string") {
      const { normalized: I, malformedAuthorityOrPort: T } = p(P, N);
      return T ? void 0 : I;
    }
    if (typeof P == "object")
      return w(P, N);
  }
  const x = {
    SCHEMES: d,
    normalize: $,
    resolve: _,
    resolveComponent: m,
    equal: y,
    serialize: w,
    parse: S
  };
  return Pt.exports = x, Pt.exports.default = x, Pt.exports.fastUri = x, Pt.exports;
}
var Wo;
function xc() {
  if (Wo) return Bt;
  Wo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = kc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Bt.default = e, Bt;
}
var Jo;
function Ec() {
  return Jo || (Jo = 1, (function(e) {
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
    const r = /* @__PURE__ */ Qr(), o = /* @__PURE__ */ tr(), i = /* @__PURE__ */ Vs(), s = /* @__PURE__ */ nr(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Qn(), d = /* @__PURE__ */ Un(), f = /* @__PURE__ */ ce(), $ = Sc, _ = /* @__PURE__ */ xc(), m = (R, E) => new RegExp(R, E);
    m.code = "new RegExp";
    const y = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, h = 200;
    function C(R) {
      var E, D, M, b, k, L, G, U, Q, ne, A, z, B, J, ee, X, oe, se, de, fe, he, je, ve, Pe, De;
      const nt = R.strict, ar = (E = R.code) === null || E === void 0 ? void 0 : E.optimize, $o = ar === !0 || ar === void 0 ? 1 : ar || 0, vo = (M = (D = R.code) === null || D === void 0 ? void 0 : D.regExp) !== null && M !== void 0 ? M : m, _a = (b = R.uriResolver) !== null && b !== void 0 ? b : _.default;
      return {
        strictSchema: (L = (k = R.strictSchema) !== null && k !== void 0 ? k : nt) !== null && L !== void 0 ? L : !0,
        strictNumbers: (U = (G = R.strictNumbers) !== null && G !== void 0 ? G : nt) !== null && U !== void 0 ? U : !0,
        strictTypes: (ne = (Q = R.strictTypes) !== null && Q !== void 0 ? Q : nt) !== null && ne !== void 0 ? ne : "log",
        strictTuples: (z = (A = R.strictTuples) !== null && A !== void 0 ? A : nt) !== null && z !== void 0 ? z : "log",
        strictRequired: (J = (B = R.strictRequired) !== null && B !== void 0 ? B : nt) !== null && J !== void 0 ? J : !1,
        code: R.code ? { ...R.code, optimize: $o, regExp: vo } : { optimize: $o, regExp: vo },
        loopRequired: (ee = R.loopRequired) !== null && ee !== void 0 ? ee : h,
        loopEnum: (X = R.loopEnum) !== null && X !== void 0 ? X : h,
        meta: (oe = R.meta) !== null && oe !== void 0 ? oe : !0,
        messages: (se = R.messages) !== null && se !== void 0 ? se : !0,
        inlineRefs: (de = R.inlineRefs) !== null && de !== void 0 ? de : !0,
        schemaId: (fe = R.schemaId) !== null && fe !== void 0 ? fe : "$id",
        addUsedSchema: (he = R.addUsedSchema) !== null && he !== void 0 ? he : !0,
        validateSchema: (je = R.validateSchema) !== null && je !== void 0 ? je : !0,
        validateFormats: (ve = R.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Pe = R.unicodeRegExp) !== null && Pe !== void 0 ? Pe : !0,
        int32range: (De = R.int32range) !== null && De !== void 0 ? De : !0,
        uriResolver: _a
      };
    }
    class S {
      constructor(E = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), E = this.opts = { ...E, ...C(E) };
        const { es5: D, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: D, lines: M }), this.logger = T(E.logger);
        const b = E.validateFormats;
        E.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, u, E, "NOT SUPPORTED"), l.call(this, v, E, "DEPRECATED", "warn"), this._metaOpts = N.call(this), E.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), E.keywords && P.call(this, E.keywords), typeof E.meta == "object" && this.addMetaSchema(E.meta), g.call(this), E.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: E, meta: D, schemaId: M } = this.opts;
        let b = $;
        M === "id" && (b = { ...$ }, b.id = b.$id, delete b.$id), D && E && this.addMetaSchema(b, b[M], !1);
      }
      defaultMeta() {
        const { meta: E, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof E == "object" ? E[D] || E : void 0;
      }
      validate(E, D) {
        let M;
        if (typeof E == "string") {
          if (M = this.getSchema(E), !M)
            throw new Error(`no schema with key or ref "${E}"`);
        } else
          M = this.compile(E);
        const b = M(D);
        return "$async" in M || (this.errors = M.errors), b;
      }
      compile(E, D) {
        const M = this._addSchema(E, D);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(E, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return b.call(this, E, D);
        async function b(ne, A) {
          await k.call(this, ne.$schema);
          const z = this._addSchema(ne, A);
          return z.validate || L.call(this, z);
        }
        async function k(ne) {
          ne && !this.getSchema(ne) && await b.call(this, { $ref: ne }, !0);
        }
        async function L(ne) {
          try {
            return this._compileSchemaEnv(ne);
          } catch (A) {
            if (!(A instanceof o.default))
              throw A;
            return G.call(this, A), await U.call(this, A.missingSchema), L.call(this, ne);
          }
        }
        function G({ missingSchema: ne, missingRef: A }) {
          if (this.refs[ne])
            throw new Error(`AnySchema ${ne} is loaded but ${A} cannot be resolved`);
        }
        async function U(ne) {
          const A = await Q.call(this, ne);
          this.refs[ne] || await k.call(this, A.$schema), this.refs[ne] || this.addSchema(A, ne, D);
        }
        async function Q(ne) {
          const A = this._loading[ne];
          if (A)
            return A;
          try {
            return await (this._loading[ne] = M(ne));
          } finally {
            delete this._loading[ne];
          }
        }
      }
      // Adds schema to the instance
      addSchema(E, D, M, b = this.opts.validateSchema) {
        if (Array.isArray(E)) {
          for (const L of E)
            this.addSchema(L, void 0, M, b);
          return this;
        }
        let k;
        if (typeof E == "object") {
          const { schemaId: L } = this.opts;
          if (k = E[L], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${L} must be string`);
        }
        return D = (0, c.normalizeId)(D || k), this._checkUnique(D), this.schemas[D] = this._addSchema(E, M, D, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(E, D, M = this.opts.validateSchema) {
        return this.addSchema(E, D, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(E, D) {
        if (typeof E == "boolean")
          return !0;
        let M;
        if (M = E.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(M, E);
        if (!b && D) {
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
      getSchema(E) {
        let D;
        for (; typeof (D = p.call(this, E)) == "string"; )
          E = D;
        if (D === void 0) {
          const { schemaId: M } = this.opts, b = new s.SchemaEnv({ schema: {}, schemaId: M });
          if (D = s.resolveSchema.call(this, b, E), !D)
            return;
          this.refs[E] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
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
            const D = p.call(this, E);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[E], delete this.refs[E], this;
          }
          case "object": {
            const D = E;
            this._cache.delete(D);
            let M = E[this.opts.schemaId];
            return M && (M = (0, c.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(E) {
        for (const D of E)
          this.addKeyword(D);
        return this;
      }
      addKeyword(E, D) {
        let M;
        if (typeof E == "string")
          M = E, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = M);
        else if (typeof E == "object" && D === void 0) {
          if (D = E, M = D.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, M, D), !D)
          return (0, f.eachItem)(M, (k) => K.call(this, k)), this;
        re.call(this, D);
        const b = {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        };
        return (0, f.eachItem)(M, b.type.length === 0 ? (k) => K.call(this, k, b) : (k) => b.type.forEach((L) => K.call(this, k, b, L))), this;
      }
      getKeyword(E) {
        const D = this.RULES.all[E];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(E) {
        const { RULES: D } = this;
        delete D.keywords[E], delete D.all[E];
        for (const M of D.rules) {
          const b = M.rules.findIndex((k) => k.keyword === E);
          b >= 0 && M.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(E, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[E] = D, this;
      }
      errorsText(E = this.errors, { separator: D = ", ", dataVar: M = "data" } = {}) {
        return !E || E.length === 0 ? "No errors" : E.map((b) => `${M}${b.instancePath} ${b.message}`).reduce((b, k) => b + D + k);
      }
      $dataMetaSchema(E, D) {
        const M = this.RULES.all;
        E = JSON.parse(JSON.stringify(E));
        for (const b of D) {
          const k = b.split("/").slice(1);
          let L = E;
          for (const G of k)
            L = L[G];
          for (const G in M) {
            const U = M[G];
            if (typeof U != "object")
              continue;
            const { $data: Q } = U.definition, ne = L[G];
            Q && ne && (L[G] = W(ne));
          }
        }
        return E;
      }
      _removeAllSchemas(E, D) {
        for (const M in E) {
          const b = E[M];
          (!D || D.test(M)) && (typeof b == "string" ? delete E[M] : b && !b.meta && (this._cache.delete(b.schema), delete E[M]));
        }
      }
      _addSchema(E, D, M, b = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let L;
        const { schemaId: G } = this.opts;
        if (typeof E == "object")
          L = E[G];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof E != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let U = this._cache.get(E);
        if (U !== void 0)
          return U;
        M = (0, c.normalizeId)(L || M);
        const Q = c.getSchemaRefs.call(this, E, M);
        return U = new s.SchemaEnv({ schema: E, schemaId: G, meta: D, baseId: M, localRefs: Q }), this._cache.set(U.schema, U), k && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = U), b && this.validateSchema(E, !0), U;
      }
      _checkUnique(E) {
        if (this.schemas[E] || this.refs[E])
          throw new Error(`schema with key or id "${E}" already exists`);
      }
      _compileSchemaEnv(E) {
        if (E.meta ? this._compileMetaSchema(E) : s.compileSchema.call(this, E), !E.validate)
          throw new Error("ajv implementation error");
        return E.validate;
      }
      _compileMetaSchema(E) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, E);
        } finally {
          this.opts = D;
        }
      }
    }
    S.ValidationError = r.default, S.MissingRefError = o.default, e.default = S;
    function l(R, E, D, M = "error") {
      for (const b in R) {
        const k = b;
        k in E && this.logger[M](`${D}: option ${b}. ${R[k]}`);
      }
    }
    function p(R) {
      return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
    }
    function g() {
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
        const D = R[E];
        D.keyword || (D.keyword = E), this.addKeyword(D);
      }
    }
    function N() {
      const R = { ...this.opts };
      for (const E of y)
        delete R[E];
      return R;
    }
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    function T(R) {
      if (R === !1)
        return I;
      if (R === void 0)
        return console;
      if (R.log && R.warn && R.error)
        return R;
      throw new Error("logger must implement log, warn and error methods");
    }
    const V = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(R, E) {
      const { RULES: D } = this;
      if ((0, f.eachItem)(R, (M) => {
        if (D.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!V.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!E && E.$data && !("code" in E || "validate" in E))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function K(R, E, D) {
      var M;
      const b = E?.post;
      if (D && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let L = b ? k.post : k.rules.find(({ type: U }) => U === D);
      if (L || (L = { type: D, rules: [] }, k.rules.push(L)), k.keywords[R] = !0, !E)
        return;
      const G = {
        keyword: R,
        definition: {
          ...E,
          type: (0, d.getJSONTypes)(E.type),
          schemaType: (0, d.getJSONTypes)(E.schemaType)
        }
      };
      E.before ? Y.call(this, L, G, E.before) : L.rules.push(G), k.all[R] = G, (M = E.implements) === null || M === void 0 || M.forEach((U) => this.addKeyword(U));
    }
    function Y(R, E, D) {
      const M = R.rules.findIndex((b) => b.keyword === D);
      M >= 0 ? R.rules.splice(M, 0, E) : (R.rules.push(E), this.logger.warn(`rule ${D} is not defined`));
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
  })(cr)), cr;
}
var Ut = {}, Ht = {}, Kt = {}, Yo;
function Pc() {
  if (Yo) return Kt;
  Yo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Kt.default = e, Kt;
}
var Ge = {}, Xo;
function eo() {
  if (Xo) return Ge;
  Xo = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.callRef = Ge.getValidate = void 0;
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), o = /* @__PURE__ */ nr(), i = /* @__PURE__ */ ce(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: f, schema: $, it: _ } = d, { baseId: m, schemaEnv: y, validateName: w, opts: u, self: v } = _, { root: h } = y;
      if (($ === "#" || $ === "#/") && m === h.baseId)
        return S();
      const C = o.resolveRef.call(v, h, m, $);
      if (C === void 0)
        throw new e.default(_.opts.uriResolver, m, $);
      if (C instanceof o.SchemaEnv)
        return l(C);
      return p(C);
      function S() {
        if (y === h)
          return c(d, w, y, y.$async);
        const g = f.scopeValue("root", { ref: h });
        return c(d, (0, n._)`${g}.validate`, h, h.$async);
      }
      function l(g) {
        const x = a(d, g);
        c(d, x, g, g.$async);
      }
      function p(g) {
        const x = f.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), P = f.name("valid"), N = d.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: $
        }, P);
        d.mergeEvaluated(N), d.ok(P);
      }
    }
  };
  function a(d, f) {
    const { gen: $ } = d;
    return f.validate ? $.scopeValue("validate", { ref: f.validate }) : (0, n._)`${$.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Ge.getValidate = a;
  function c(d, f, $, _) {
    const { gen: m, it: y } = d, { allErrors: w, schemaEnv: u, opts: v } = y, h = v.passContext ? r.default.this : n.nil;
    _ ? C() : S();
    function C() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const g = m.let("valid");
      m.try(() => {
        m.code((0, n._)`await ${(0, t.callValidateCode)(d, f, h)}`), p(f), w || m.assign(g, !0);
      }, (x) => {
        m.if((0, n._)`!(${x} instanceof ${y.ValidationError})`, () => m.throw(x)), l(x), w || m.assign(g, !1);
      }), d.ok(g);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, f, h), () => p(f), () => l(f));
    }
    function l(g) {
      const x = (0, n._)`${g}.errors`;
      m.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${x} : ${r.default.vErrors}.concat(${x})`), m.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function p(g) {
      var x;
      if (!y.opts.unevaluated)
        return;
      const P = (x = $?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (y.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (y.props = i.mergeEvaluated.props(m, P.props, y.props));
        else {
          const N = m.var("props", (0, n._)`${g}.evaluated.props`);
          y.props = i.mergeEvaluated.props(m, N, y.props, n.Name);
        }
      if (y.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (y.items = i.mergeEvaluated.items(m, P.items, y.items));
        else {
          const N = m.var("items", (0, n._)`${g}.evaluated.items`);
          y.items = i.mergeEvaluated.items(m, N, y.items, n.Name);
        }
    }
  }
  return Ge.callRef = c, Ge.default = s, Ge;
}
var Zo;
function Ac() {
  if (Zo) return Ht;
  Zo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pc(), t = /* @__PURE__ */ eo(), n = [
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
var Gt = {}, Wt = {}, Qo;
function Rc() {
  if (Qo) return Wt;
  Qo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
var Jt = {}, ei;
function Mc() {
  if (ei) return Jt;
  ei = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, d = o.let("res"), f = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      r.fail$data((0, e._)`(${s} === 0 || (${d} = ${i}/${s}, ${f}))`);
    }
  };
  return Jt.default = n, Jt;
}
var Yt = {}, Xt = {}, ti;
function Nc() {
  if (ti) return Xt;
  ti = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Xt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Xt;
}
var ni;
function Tc() {
  if (ni) return Yt;
  ni = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Nc(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: d } = i, f = s === "maxLength" ? e.operators.GT : e.operators.LT, $ = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${$} ${f} ${c}`);
    }
  };
  return Yt.default = o, Yt;
}
var Zt = {}, ri;
function Oc() {
  if (ri) return Zt;
  ri = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: d, schemaCode: f, it: $ } = i, _ = $.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: m } = $.opts.code, y = m.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, m), w = s.let("valid");
        s.try(() => s.assign(w, (0, n._)`${y}(${f}, ${_}).test(${a})`), () => s.assign(w, !1)), i.fail$data((0, n._)`!${w}`);
      } else {
        const m = (0, e.usePattern)(i, d);
        i.fail$data((0, n._)`!${m}.test(${a})`);
      }
    }
  };
  return Zt.default = o, Zt;
}
var Qt = {}, oi;
function Fc() {
  if (oi) return Qt;
  oi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
var en = {}, ii;
function zc() {
  if (ii) return en;
  ii = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: d, $data: f, it: $ } = i, { opts: _ } = $;
      if (!f && a.length === 0)
        return;
      const m = a.length >= _.loopRequired;
      if ($.allErrors ? y() : w(), _.strictRequired) {
        const h = i.parentSchema.properties, { definedProperties: C } = i.it;
        for (const S of a)
          if (h?.[S] === void 0 && !C.has(S)) {
            const l = $.schemaEnv.baseId + $.errSchemaPath, p = `required property "${S}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)($, p, $.opts.strictRequired);
          }
      }
      function y() {
        if (m || f)
          i.block$data(t.nil, u);
        else
          for (const h of a)
            (0, e.checkReportMissingProp)(i, h);
      }
      function w() {
        const h = s.let("missing");
        if (m || f) {
          const C = s.let("valid", !0);
          i.block$data(C, () => v(h, C)), i.ok(C);
        } else
          s.if((0, e.checkMissingProp)(i, a, h)), (0, e.reportMissingProp)(i, h), s.else();
      }
      function u() {
        s.forOf("prop", c, (h) => {
          i.setParams({ missingProperty: h }), s.if((0, e.noPropertyInData)(s, d, h, _.ownProperties), () => i.error());
        });
      }
      function v(h, C) {
        i.setParams({ missingProperty: h }), s.forOf(h, c, () => {
          s.assign(C, (0, e.propertyInData)(s, d, h, _.ownProperties)), s.if((0, t.not)(C), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return en.default = o, en;
}
var tn = {}, si;
function Ic() {
  if (si) return tn;
  si = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
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
var nn = {}, rn = {}, ai;
function to() {
  if (ai) return rn;
  ai = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = Us();
  return e.code = 'require("ajv/dist/runtime/equal").default', rn.default = e, rn;
}
var ci;
function jc() {
  if (ci) return nn;
  ci = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ to(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: d, schema: f, parentSchema: $, schemaCode: _, it: m } = s;
      if (!d && !f)
        return;
      const y = a.let("valid"), w = $.items ? (0, e.getSchemaTypes)($.items) : [];
      s.block$data(y, u, (0, t._)`${_} === false`), s.ok(y);
      function u() {
        const S = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: S, j: l }), a.assign(y, !0), a.if((0, t._)`${S} > 1`, () => (v() ? h : C)(S, l));
      }
      function v() {
        return w.length > 0 && !w.some((S) => S === "object" || S === "array");
      }
      function h(S, l) {
        const p = a.name("item"), g = (0, e.checkDataTypes)(w, p, m.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(p, (0, t._)`${c}[${S}]`), a.if(g, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${p} == "string"`, (0, t._)`${p} += "_"`), a.if((0, t._)`typeof ${x}[${p}] == "number"`, () => {
            a.assign(l, (0, t._)`${x}[${p}]`), s.error(), a.assign(y, !1).break();
          }).code((0, t._)`${x}[${p}] = ${S}`);
        });
      }
      function C(S, l) {
        const p = (0, n.useFunc)(a, r.default), g = a.name("outer");
        a.label(g).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${l} = ${S}; ${l}--;`, () => a.if((0, t._)`${p}(${c}[${S}], ${c}[${l}])`, () => {
          s.error(), a.assign(y, !1).break(g);
        })));
      }
    }
  };
  return nn.default = i, nn;
}
var on = {}, li;
function Dc() {
  if (li) return on;
  li = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ to(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schemaCode: d, schema: f } = i;
      c || f && typeof f == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${d})`) : i.fail((0, e._)`${f} !== ${a}`);
    }
  };
  return on.default = o, on;
}
var sn = {}, di;
function Lc() {
  if (di) return sn;
  di = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ to(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: f, it: $ } = i;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const _ = d.length >= $.opts.loopEnum;
      let m;
      const y = () => m ?? (m = (0, t.useFunc)(s, n.default));
      let w;
      if (_ || c)
        w = s.let("valid"), i.block$data(w, u);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const h = s.const("vSchema", f);
        w = (0, e.or)(...d.map((C, S) => v(h, S)));
      }
      i.pass(w);
      function u() {
        s.assign(w, !1), s.forOf("v", f, (h) => s.if((0, e._)`${y()}(${a}, ${h})`, () => s.assign(w, !0).break()));
      }
      function v(h, C) {
        const S = d[C];
        return typeof S == "object" && S !== null ? (0, e._)`${y()}(${a}, ${h}[${C}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return sn.default = o, sn;
}
var ui;
function qc() {
  if (ui) return Gt;
  ui = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Rc(), t = /* @__PURE__ */ Mc(), n = /* @__PURE__ */ Tc(), r = /* @__PURE__ */ Oc(), o = /* @__PURE__ */ Fc(), i = /* @__PURE__ */ zc(), s = /* @__PURE__ */ Ic(), a = /* @__PURE__ */ jc(), c = /* @__PURE__ */ Dc(), d = /* @__PURE__ */ Lc(), f = [
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
    d.default
  ];
  return Gt.default = f, Gt;
}
var an = {}, ft = {}, fi;
function Ks() {
  if (fi) return ft;
  fi = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: d, keyword: f, it: $ } = i;
    $.items = !0;
    const _ = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${_} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)($, c)) {
      const y = a.var("valid", (0, e._)`${_} <= ${s.length}`);
      a.if((0, e.not)(y), () => m(y)), i.ok(y);
    }
    function m(y) {
      a.forRange("i", s.length, _, (w) => {
        i.subschema({ keyword: f, dataProp: w, dataPropType: t.Type.Num }, y), $.allErrors || a.if((0, e.not)(y), () => a.break());
      });
    }
  }
  return ft.validateAdditionalItems = o, ft.default = r, ft;
}
var cn = {}, pt = {}, pi;
function Gs() {
  if (pi) return pt;
  pi = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateTuple = void 0;
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
    const { gen: c, parentSchema: d, data: f, keyword: $, it: _ } = i;
    w(d), _.opts.unevaluated && a.length && _.items !== !0 && (_.items = t.mergeEvaluated.items(c, a.length, _.items));
    const m = c.name("valid"), y = c.const("len", (0, e._)`${f}.length`);
    a.forEach((u, v) => {
      (0, t.alwaysValidSchema)(_, u) || (c.if((0, e._)`${y} > ${v}`, () => i.subschema({
        keyword: $,
        schemaProp: v,
        dataProp: v
      }, m)), i.ok(m));
    });
    function w(u) {
      const { opts: v, errSchemaPath: h } = _, C = a.length, S = C === u.minItems && (C === u.maxItems || u[s] === !1);
      if (v.strictTuples && !S) {
        const l = `"${$}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(_, l, v.strictTuples);
      }
    }
  }
  return pt.validateTuple = o, pt.default = r, pt;
}
var hi;
function Vc() {
  if (hi) return cn;
  hi = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gs(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return cn.default = t, cn;
}
var ln = {}, mi;
function Bc() {
  if (mi) return ln;
  mi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Ks(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: d } = s, { prefixItems: f } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, a) && (f ? (0, r.validateAdditionalItems)(s, f) : s.ok((0, n.validateArray)(s)));
    }
  };
  return ln.default = i, ln;
}
var dn = {}, gi;
function Uc() {
  if (gi) return dn;
  gi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
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
      const { gen: i, schema: s, parentSchema: a, data: c, it: d } = o;
      let f, $;
      const { minContains: _, maxContains: m } = a;
      d.opts.next ? (f = _ === void 0 ? 1 : _, $ = m) : f = 1;
      const y = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: f, max: $ }), $ === void 0 && f === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if ($ !== void 0 && f > $) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, s)) {
        let C = (0, e._)`${y} >= ${f}`;
        $ !== void 0 && (C = (0, e._)`${C} && ${y} <= ${$}`), o.pass(C);
        return;
      }
      d.items = !0;
      const w = i.name("valid");
      $ === void 0 && f === 1 ? v(w, () => i.if(w, () => i.break())) : f === 0 ? (i.let(w, !0), $ !== void 0 && i.if((0, e._)`${c}.length > 0`, u)) : (i.let(w, !1), u()), o.result(w, () => o.reset());
      function u() {
        const C = i.name("_valid"), S = i.let("count", 0);
        v(C, () => i.if(C, () => h(S)));
      }
      function v(C, S) {
        i.forRange("i", 0, y, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), S();
        });
      }
      function h(C) {
        i.code((0, e._)`${C}++`), $ === void 0 ? i.if((0, e._)`${C} >= ${f}`, () => i.assign(w, !0).break()) : (i.if((0, e._)`${C} > ${$}`, () => i.assign(w, !1).break()), f === 1 ? i.assign(w, !0) : i.if((0, e._)`${C} >= ${f}`, () => i.assign(w, !0)));
      }
    }
  };
  return dn.default = r, dn;
}
var yr = {}, yi;
function no() {
  return yi || (yi = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: f } }) => {
        const $ = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${$} ${f} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: f, missingProperty: $ } }) => (0, t._)`{property: ${c},
    missingProperty: ${$},
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
        const [d, f] = i(c);
        s(c, d), a(c, f);
      }
    };
    function i({ schema: c }) {
      const d = {}, f = {};
      for (const $ in c) {
        if ($ === "__proto__")
          continue;
        const _ = Array.isArray(c[$]) ? d : f;
        _[$] = c[$];
      }
      return [d, f];
    }
    function s(c, d = c.schema) {
      const { gen: f, data: $, it: _ } = c;
      if (Object.keys(d).length === 0)
        return;
      const m = f.let("missing");
      for (const y in d) {
        const w = d[y];
        if (w.length === 0)
          continue;
        const u = (0, r.propertyInData)(f, $, y, _.opts.ownProperties);
        c.setParams({
          property: y,
          depsCount: w.length,
          deps: w.join(", ")
        }), _.allErrors ? f.if(u, () => {
          for (const v of w)
            (0, r.checkReportMissingProp)(c, v);
        }) : (f.if((0, t._)`${u} && (${(0, r.checkMissingProp)(c, w, m)})`), (0, r.reportMissingProp)(c, m), f.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, d = c.schema) {
      const { gen: f, data: $, keyword: _, it: m } = c, y = f.name("valid");
      for (const w in d)
        (0, n.alwaysValidSchema)(m, d[w]) || (f.if(
          (0, r.propertyInData)(f, $, w, m.opts.ownProperties),
          () => {
            const u = c.subschema({ keyword: _, schemaProp: w }, y);
            c.mergeValidEvaluated(u, y);
          },
          () => f.var(y, !0)
          // TODO var
        ), c.ok(y));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(yr)), yr;
}
var un = {}, $i;
function Hc() {
  if ($i) return un;
  $i = 1, Object.defineProperty(un, "__esModule", { value: !0 });
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
      const d = i.name("valid");
      i.forIn("key", a, (f) => {
        o.setParams({ propertyName: f }), o.subschema({
          keyword: "propertyNames",
          data: f,
          dataTypes: ["string"],
          propertyName: f,
          compositeRule: !0
        }, d), i.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || i.break();
        });
      }), o.ok(d);
    }
  };
  return un.default = r, un;
}
var fn = {}, vi;
function Ws() {
  if (vi) return fn;
  vi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: d, data: f, errsCount: $, it: _ } = s;
      if (!$)
        throw new Error("ajv implementation error");
      const { allErrors: m, opts: y } = _;
      if (_.props = !0, y.removeAdditional !== "all" && (0, r.alwaysValidSchema)(_, c))
        return;
      const w = (0, e.allSchemaProperties)(d.properties), u = (0, e.allSchemaProperties)(d.patternProperties);
      v(), s.ok((0, t._)`${$} === ${n.default.errors}`);
      function v() {
        a.forIn("key", f, (p) => {
          !w.length && !u.length ? S(p) : a.if(h(p), () => S(p));
        });
      }
      function h(p) {
        let g;
        if (w.length > 8) {
          const x = (0, r.schemaRefOrVal)(_, d.properties, "properties");
          g = (0, e.isOwnProperty)(a, x, p);
        } else w.length ? g = (0, t.or)(...w.map((x) => (0, t._)`${p} === ${x}`)) : g = t.nil;
        return u.length && (g = (0, t.or)(g, ...u.map((x) => (0, t._)`${(0, e.usePattern)(s, x)}.test(${p})`))), (0, t.not)(g);
      }
      function C(p) {
        a.code((0, t._)`delete ${f}[${p}]`);
      }
      function S(p) {
        if (y.removeAdditional === "all" || y.removeAdditional && c === !1) {
          C(p);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: p }), s.error(), m || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(_, c)) {
          const g = a.name("valid");
          y.removeAdditional === "failing" ? (l(p, g, !1), a.if((0, t.not)(g), () => {
            s.reset(), C(p);
          })) : (l(p, g), m || a.if((0, t.not)(g), () => a.break()));
        }
      }
      function l(p, g, x) {
        const P = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, g);
      }
    }
  };
  return fn.default = i, fn;
}
var pn = {}, bi;
function Kc() {
  if (bi) return pn;
  bi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Ws(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: d, it: f } = i;
      f.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(f, r.default, "additionalProperties"));
      const $ = (0, t.allSchemaProperties)(a);
      for (const u of $)
        f.definedProperties.add(u);
      f.opts.unevaluated && $.length && f.props !== !0 && (f.props = n.mergeEvaluated.props(s, (0, n.toHash)($), f.props));
      const _ = $.filter((u) => !(0, n.alwaysValidSchema)(f, a[u]));
      if (_.length === 0)
        return;
      const m = s.name("valid");
      for (const u of _)
        y(u) ? w(u) : (s.if((0, t.propertyInData)(s, d, u, f.opts.ownProperties)), w(u), f.allErrors || s.else().var(m, !0), s.endIf()), i.it.definedProperties.add(u), i.ok(m);
      function y(u) {
        return f.opts.useDefaults && !f.compositeRule && a[u].default !== void 0;
      }
      function w(u) {
        i.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, m);
      }
    }
  };
  return pn.default = o, pn;
}
var hn = {}, wi;
function Gc() {
  if (wi) return hn;
  wi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: d, it: f } = i, { opts: $ } = f, _ = (0, e.allSchemaProperties)(a), m = _.filter((S) => (0, n.alwaysValidSchema)(f, a[S]));
      if (_.length === 0 || m.length === _.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const y = $.strictSchema && !$.allowMatchingProperties && d.properties, w = s.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, r.evaluatedPropsToName)(s, f.props));
      const { props: u } = f;
      v();
      function v() {
        for (const S of _)
          y && h(S), f.allErrors ? C(S) : (s.var(w, !0), C(S), s.if(w));
      }
      function h(S) {
        for (const l in y)
          new RegExp(S).test(l) && (0, n.checkStrictMode)(f, `property ${l} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function C(S) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, S)}.test(${l})`, () => {
            const p = m.includes(S);
            p || i.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: l,
              dataPropType: r.Type.Str
            }, w), f.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${l}]`, !0) : !p && !f.allErrors && s.if((0, t.not)(w), () => s.break());
          });
        });
      }
    }
  };
  return hn.default = o, hn;
}
var mn = {}, _i;
function Wc() {
  if (_i) return mn;
  _i = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
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
var gn = {}, Si;
function Jc() {
  if (Si) return gn;
  Si = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return gn.default = t, gn;
}
var yn = {}, Ci;
function Yc() {
  if (Ci) return yn;
  Ci = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
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
      const d = s, f = i.let("valid", !1), $ = i.let("passing", null), _ = i.name("_valid");
      o.setParams({ passing: $ }), i.block(m), o.result(f, () => o.reset(), () => o.error(!0));
      function m() {
        d.forEach((y, w) => {
          let u;
          (0, t.alwaysValidSchema)(c, y) ? i.var(_, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, _), w > 0 && i.if((0, e._)`${_} && ${f}`).assign(f, !1).assign($, (0, e._)`[${$}, ${w}]`).else(), i.if(_, () => {
            i.assign(f, !0), i.assign($, w), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return yn.default = r, yn;
}
var $n = {}, ki;
function Xc() {
  if (ki) return $n;
  ki = 1, Object.defineProperty($n, "__esModule", { value: !0 });
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
        const d = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(d);
      });
    }
  };
  return $n.default = t, $n;
}
var vn = {}, xi;
function Zc() {
  if (xi) return vn;
  xi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
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
      const d = o(c, "then"), f = o(c, "else");
      if (!d && !f)
        return;
      const $ = s.let("valid", !0), _ = s.name("_valid");
      if (m(), i.reset(), d && f) {
        const w = s.let("ifClause");
        i.setParams({ ifClause: w }), s.if(_, y("then", w), y("else", w));
      } else d ? s.if(_, y("then")) : s.if((0, e.not)(_), y("else"));
      i.pass($, () => i.error(!0));
      function m() {
        const w = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, _);
        i.mergeEvaluated(w);
      }
      function y(w, u) {
        return () => {
          const v = i.subschema({ keyword: w }, _);
          s.assign($, _), i.mergeValidEvaluated(v, $), u ? s.assign(u, (0, e._)`${w}`) : i.setParams({ ifClause: w });
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
var bn = {}, Ei;
function Qc() {
  if (Ei) return bn;
  Ei = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return bn.default = t, bn;
}
var Pi;
function el() {
  if (Pi) return an;
  Pi = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ks(), t = /* @__PURE__ */ Vc(), n = /* @__PURE__ */ Gs(), r = /* @__PURE__ */ Bc(), o = /* @__PURE__ */ Uc(), i = /* @__PURE__ */ no(), s = /* @__PURE__ */ Hc(), a = /* @__PURE__ */ Ws(), c = /* @__PURE__ */ Kc(), d = /* @__PURE__ */ Gc(), f = /* @__PURE__ */ Wc(), $ = /* @__PURE__ */ Jc(), _ = /* @__PURE__ */ Yc(), m = /* @__PURE__ */ Xc(), y = /* @__PURE__ */ Zc(), w = /* @__PURE__ */ Qc();
  function u(v = !1) {
    const h = [
      // any
      f.default,
      $.default,
      _.default,
      m.default,
      y.default,
      w.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      d.default
    ];
    return v ? h.push(t.default, r.default) : h.push(e.default, n.default), h.push(o.default), h;
  }
  return an.default = u, an;
}
var wn = {}, ht = {}, Ai;
function Js() {
  if (Ai) return ht;
  Ai = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ eo(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: d, it: f } = a;
    f.schemaEnv.root.dynamicAnchors[c] = !0;
    const $ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, _ = f.errSchemaPath === "#" ? f.validateName : s(a);
    d.if((0, e._)`!${$}`, () => d.assign($, _));
  }
  ht.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: d, self: f } = a.it, { root: $, baseId: _, localRefs: m, meta: y } = c.root, { schemaId: w } = f.opts, u = new n.SchemaEnv({ schema: d, schemaId: w, root: $, baseId: _, localRefs: m, meta: y });
    return n.compileSchema.call(f, u), (0, r.getValidate)(a, u);
  }
  return ht.default = o, ht;
}
var mt = {}, Ri;
function Ys() {
  if (Ri) return mt;
  Ri = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ eo(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: c, it: d } = i;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const f = s.slice(1);
    if (d.allErrors)
      $();
    else {
      const m = a.let("valid", !1);
      $(m), i.ok(m);
    }
    function $(m) {
      if (d.schemaEnv.root.dynamicAnchors[f]) {
        const y = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`);
        a.if(y, _(y, m), _(d.validateName, m));
      } else
        _(d.validateName, m)();
    }
    function _(m, y) {
      return y ? () => a.block(() => {
        (0, n.callRef)(i, m), a.let(y, !0);
      }) : () => (0, n.callRef)(i, m);
    }
  }
  return mt.dynamicRef = o, mt.default = r, mt;
}
var _n = {}, Mi;
function tl() {
  if (Mi) return _n;
  Mi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Js(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return _n.default = n, _n;
}
var Sn = {}, Ni;
function nl() {
  if (Ni) return Sn;
  Ni = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ys(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Sn.default = t, Sn;
}
var Ti;
function rl() {
  if (Ti) return wn;
  Ti = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Js(), t = /* @__PURE__ */ Ys(), n = /* @__PURE__ */ tl(), r = /* @__PURE__ */ nl(), o = [e.default, t.default, n.default, r.default];
  return wn.default = o, wn;
}
var Cn = {}, kn = {}, Oi;
function ol() {
  if (Oi) return kn;
  Oi = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ no(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return kn.default = t, kn;
}
var xn = {}, Fi;
function il() {
  if (Fi) return xn;
  Fi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ no(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return xn.default = t, xn;
}
var En = {}, zi;
function sl() {
  if (zi) return En;
  zi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
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
var Ii;
function al() {
  if (Ii) return Cn;
  Ii = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ol(), t = /* @__PURE__ */ il(), n = /* @__PURE__ */ sl(), r = [e.default, t.default, n.default];
  return Cn.default = r, Cn;
}
var Pn = {}, An = {}, ji;
function cl() {
  if (ji) return An;
  ji = 1, Object.defineProperty(An, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, data: c, errsCount: d, it: f } = i;
      if (!d)
        throw new Error("ajv implementation error");
      const { allErrors: $, props: _ } = f;
      _ instanceof e.Name ? s.if((0, e._)`${_} !== true`, () => s.forIn("key", c, (u) => s.if(y(_, u), () => m(u)))) : _ !== !0 && s.forIn("key", c, (u) => _ === void 0 ? m(u) : s.if(w(_, u), () => m(u))), f.props = !0, i.ok((0, e._)`${d} === ${n.default.errors}`);
      function m(u) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: u }), i.error(), $ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(f, a)) {
          const v = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, v), $ || s.if((0, e.not)(v), () => s.break());
        }
      }
      function y(u, v) {
        return (0, e._)`!${u} || !${u}[${v}]`;
      }
      function w(u, v) {
        const h = [];
        for (const C in u)
          u[C] === !0 && h.push((0, e._)`${v} !== ${C}`);
        return (0, e.and)(...h);
      }
    }
  };
  return An.default = o, An;
}
var Rn = {}, Di;
function ll() {
  if (Di) return Rn;
  Di = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ce(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: c } = o, d = c.items || 0;
      if (d === !0)
        return;
      const f = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: d }), o.fail((0, e._)`${f} > ${d}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const _ = i.var("valid", (0, e._)`${f} <= ${d}`);
        i.if((0, e.not)(_), () => $(_, d)), o.ok(_);
      }
      c.items = !0;
      function $(_, m) {
        i.forRange("i", m, f, (y) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: y, dataPropType: t.Type.Num }, _), c.allErrors || i.if((0, e.not)(_), () => i.break());
        });
      }
    }
  };
  return Rn.default = r, Rn;
}
var Li;
function dl() {
  if (Li) return Pn;
  Li = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ cl(), t = /* @__PURE__ */ ll(), n = [e.default, t.default];
  return Pn.default = n, Pn;
}
var Mn = {}, Nn = {}, qi;
function ul() {
  if (qi) return Nn;
  qi = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: c, schemaCode: d, it: f } = r, { opts: $, errSchemaPath: _, schemaEnv: m, self: y } = f;
      if (!$.validateFormats)
        return;
      a ? w() : u();
      function w() {
        const v = i.scopeValue("formats", {
          ref: y.formats,
          code: $.code.formats
        }), h = i.const("fDef", (0, e._)`${v}[${d}]`), C = i.let("fType"), S = i.let("format");
        i.if((0, e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => i.assign(C, (0, e._)`${h}.type || "string"`).assign(S, (0, e._)`${h}.validate`), () => i.assign(C, (0, e._)`"string"`).assign(S, h)), r.fail$data((0, e.or)(l(), p()));
        function l() {
          return $.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function p() {
          const g = m.$async ? (0, e._)`(${h}.async ? await ${S}(${s}) : ${S}(${s}))` : (0, e._)`${S}(${s})`, x = (0, e._)`(typeof ${S} == "function" ? ${g} : ${S}.test(${s}))`;
          return (0, e._)`${S} && ${S} !== true && ${C} === ${o} && !${x}`;
        }
      }
      function u() {
        const v = y.formats[c];
        if (!v) {
          l();
          return;
        }
        if (v === !0)
          return;
        const [h, C, S] = p(v);
        h === o && r.pass(g());
        function l() {
          if ($.strictSchema === !1) {
            y.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${c}" ignored in schema at path "${_}"`;
          }
        }
        function p(x) {
          const P = x instanceof RegExp ? (0, e.regexpCode)(x) : $.code.formats ? (0, e._)`${$.code.formats}${(0, e.getProperty)(c)}` : void 0, N = i.scopeValue("formats", { key: c, ref: x, code: P });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${N}.validate`] : ["string", x, N];
        }
        function g() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!m.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Vi;
function fl() {
  if (Vi) return Mn;
  Vi = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ ul()).default];
  return Mn.default = t, Mn;
}
var it = {}, Bi;
function pl() {
  return Bi || (Bi = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.contentVocabulary = it.metadataVocabulary = void 0, it.metadataVocabulary = [
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
var Ui;
function hl() {
  if (Ui) return Ut;
  Ui = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ac(), t = /* @__PURE__ */ qc(), n = /* @__PURE__ */ el(), r = /* @__PURE__ */ rl(), o = /* @__PURE__ */ al(), i = /* @__PURE__ */ dl(), s = /* @__PURE__ */ fl(), a = /* @__PURE__ */ pl(), c = [
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
var Tn = {}, At = {}, Hi;
function ml() {
  if (Hi) return At;
  Hi = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (At.DiscrError = e = {})), At;
}
var Ki;
function gl() {
  if (Ki) return Tn;
  Ki = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ml(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ tr(), o = /* @__PURE__ */ ce(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: f, parentSchema: $, it: _ } = a, { oneOf: m } = $;
      if (!_.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const y = f.propertyName;
      if (typeof y != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!m)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), u = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(y)}`);
      c.if((0, e._)`typeof ${u} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: y })), a.ok(w);
      function v() {
        const S = C();
        c.if(!1);
        for (const l in S)
          c.elseIf((0, e._)`${u} === ${l}`), c.assign(w, h(S[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: y }), c.endIf();
      }
      function h(S) {
        const l = c.name("valid"), p = a.subschema({ keyword: "oneOf", schemaProp: S }, l);
        return a.mergeEvaluated(p, e.Name), l;
      }
      function C() {
        var S;
        const l = {}, p = x($);
        let g = !0;
        for (let I = 0; I < m.length; I++) {
          let T = m[I];
          if (T?.$ref && !(0, o.schemaHasRulesButRef)(T, _.self.RULES)) {
            const j = T.$ref;
            if (T = n.resolveRef.call(_.self, _.schemaEnv.root, _.baseId, j), T instanceof n.SchemaEnv && (T = T.schema), T === void 0)
              throw new r.default(_.opts.uriResolver, _.baseId, j);
          }
          const V = (S = T?.properties) === null || S === void 0 ? void 0 : S[y];
          if (typeof V != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
          g = g && (p || x(T)), P(V, I);
        }
        if (!g)
          throw new Error(`discriminator: "${y}" must be required`);
        return l;
        function x({ required: I }) {
          return Array.isArray(I) && I.includes(y);
        }
        function P(I, T) {
          if (I.const)
            N(I.const, T);
          else if (I.enum)
            for (const V of I.enum)
              N(V, T);
          else
            throw new Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
        }
        function N(I, T) {
          if (typeof I != "string" || I in l)
            throw new Error(`discriminator: "${y}" values must be unique strings`);
          l[I] = T;
        }
      }
    }
  };
  return Tn.default = s, Tn;
}
var On = {};
const yl = "https://json-schema.org/draft/2020-12/schema", $l = "https://json-schema.org/draft/2020-12/schema", vl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, bl = "meta", wl = "Core and Validation specifications meta-schema", _l = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Sl = ["object", "boolean"], Cl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", kl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, xl = {
  $schema: yl,
  $id: $l,
  $vocabulary: vl,
  $dynamicAnchor: bl,
  title: wl,
  allOf: _l,
  type: Sl,
  $comment: Cl,
  properties: kl
}, El = "https://json-schema.org/draft/2020-12/schema", Pl = "https://json-schema.org/draft/2020-12/meta/applicator", Al = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Rl = "meta", Ml = "Applicator vocabulary meta-schema", Nl = ["object", "boolean"], Tl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ol = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Fl = {
  $schema: El,
  $id: Pl,
  $vocabulary: Al,
  $dynamicAnchor: Rl,
  title: Ml,
  type: Nl,
  properties: Tl,
  $defs: Ol
}, zl = "https://json-schema.org/draft/2020-12/schema", Il = "https://json-schema.org/draft/2020-12/meta/unevaluated", jl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Dl = "meta", Ll = "Unevaluated applicator vocabulary meta-schema", ql = ["object", "boolean"], Vl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Bl = {
  $schema: zl,
  $id: Il,
  $vocabulary: jl,
  $dynamicAnchor: Dl,
  title: Ll,
  type: ql,
  properties: Vl
}, Ul = "https://json-schema.org/draft/2020-12/schema", Hl = "https://json-schema.org/draft/2020-12/meta/content", Kl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Gl = "meta", Wl = "Content vocabulary meta-schema", Jl = ["object", "boolean"], Yl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Xl = {
  $schema: Ul,
  $id: Hl,
  $vocabulary: Kl,
  $dynamicAnchor: Gl,
  title: Wl,
  type: Jl,
  properties: Yl
}, Zl = "https://json-schema.org/draft/2020-12/schema", Ql = "https://json-schema.org/draft/2020-12/meta/core", ed = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, td = "meta", nd = "Core vocabulary meta-schema", rd = ["object", "boolean"], od = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, id = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, sd = {
  $schema: Zl,
  $id: Ql,
  $vocabulary: ed,
  $dynamicAnchor: td,
  title: nd,
  type: rd,
  properties: od,
  $defs: id
}, ad = "https://json-schema.org/draft/2020-12/schema", cd = "https://json-schema.org/draft/2020-12/meta/format-annotation", ld = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, dd = "meta", ud = "Format vocabulary meta-schema for annotation results", fd = ["object", "boolean"], pd = { format: { type: "string" } }, hd = {
  $schema: ad,
  $id: cd,
  $vocabulary: ld,
  $dynamicAnchor: dd,
  title: ud,
  type: fd,
  properties: pd
}, md = "https://json-schema.org/draft/2020-12/schema", gd = "https://json-schema.org/draft/2020-12/meta/meta-data", yd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, $d = "meta", vd = "Meta-data vocabulary meta-schema", bd = ["object", "boolean"], wd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, _d = {
  $schema: md,
  $id: gd,
  $vocabulary: yd,
  $dynamicAnchor: $d,
  title: vd,
  type: bd,
  properties: wd
}, Sd = "https://json-schema.org/draft/2020-12/schema", Cd = "https://json-schema.org/draft/2020-12/meta/validation", kd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, xd = "meta", Ed = "Validation vocabulary meta-schema", Pd = ["object", "boolean"], Ad = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Rd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Md = {
  $schema: Sd,
  $id: Cd,
  $vocabulary: kd,
  $dynamicAnchor: xd,
  title: Ed,
  type: Pd,
  properties: Ad,
  $defs: Rd
};
var Gi;
function Nd() {
  if (Gi) return On;
  Gi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = xl, t = Fl, n = Bl, r = Xl, o = sd, i = hd, s = _d, a = Md, c = ["/properties"];
  function d(f) {
    return [
      e,
      t,
      n,
      r,
      o,
      $(this, i),
      s,
      $(this, a)
    ].forEach((_) => this.addMetaSchema(_, void 0, !1)), this;
    function $(_, m) {
      return f ? _.$dataMetaSchema(m, c) : m;
    }
  }
  return On.default = d, On;
}
var Wi;
function Td() {
  return Wi || (Wi = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ec(), r = /* @__PURE__ */ hl(), o = /* @__PURE__ */ gl(), i = /* @__PURE__ */ Nd(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(m = {}) {
        super({
          ...m,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((m) => this.addVocabulary(m)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: m, meta: y } = this.opts;
        y && (i.default.call(this, m), this.refs["http://json-schema.org/schema"] = s);
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
    var d = /* @__PURE__ */ ie();
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
    var f = /* @__PURE__ */ Qr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var $ = /* @__PURE__ */ tr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  })(Dt, Dt.exports)), Dt.exports;
}
var Od = /* @__PURE__ */ Td();
const Fd = /* @__PURE__ */ uc(Od), zd = "https://json-schema.org/draft/2020-12/schema", Id = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", jd = "gufe-viz payload", Dd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ld = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], qd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), ro = {
  $schema: zd,
  $id: Id,
  title: jd,
  description: Dd,
  oneOf: Ld,
  $defs: qd
}, rh = [
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
], oo = ro.$id, io = new Fd({ allErrors: !0, strict: !1 });
io.addSchema(ro, oo);
const Ji = io.getSchema(oo), Xs = Object.entries(ro.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), oh = Xs, so = /* @__PURE__ */ new Map();
for (const e of Xs) {
  const t = io.getSchema(`${oo}#/$defs/${e}`);
  t && so.set(e, t);
}
const Ir = { valid: !0, issues: [] };
function jr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Vd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? so.get(t) : void 0;
  return n ? n(e) ? Ir : { valid: !1, issues: jr(n.errors) } : Ji(e) ? Ir : { valid: !1, issues: jr(Ji.errors) };
}
function ih(e, t) {
  const n = so.get(e);
  return n ? n(t) ? Ir : { valid: !1, issues: jr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Bd(e, t = 8) {
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
function Zs(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!ao[t]) return Ud(t);
  const { valid: n, issues: r } = Vd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Bd(r)
  };
}
function Ud(e) {
  const t = Object.keys(ao).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function sh(e) {
  return Zs(e)?.message ?? null;
}
class Hd extends xe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Da("payload", n, this);
    const r = Zs(n);
    if (r)
      return t.appendChild(Kd(r, n)), {};
    const o = n.type, i = ao[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Kd(e, t) {
  const n = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(pe(e.message));
  const r = (i, s) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = Gd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function Gd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${He(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${He(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ee("gufe-view", Hd);
const $r = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, co = {
  threeDmol: `https://unpkg.com/3dmol@${$r.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${$r.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${$r.d3}/+esm`
};
function lo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Qs(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let Qe = null, gt = null;
function rr() {
  if (gt) return gt;
  const e = lo("threeDmol");
  return e ? (gt = e.then((t) => Qe = t || window.$3Dmol), gt) : (gt = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await Qs(co.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), gt);
}
let yt = null;
function or() {
  if (yt) return yt;
  const e = lo("rdkit");
  return e ? (yt = e.then((t) => window.RDKit = t), yt) : (yt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Qs(co.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), yt);
}
let vr = null;
function ea() {
  if (!vr) {
    const e = co.d3;
    vr = lo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return vr;
}
function ta(e, t) {
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
    t.hint && !r && (r = !0, Yd(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function Wd(e) {
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
const Jd = 1600;
function Yd(e, t) {
  const n = F(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Jd);
}
const Xd = { min: 0.25, max: 12 }, Zd = 150;
function Yi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Zd) - t;
}
function Qd(e, t = Xd) {
  const n = Yi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = Yi(e);
    return Number.isFinite(s) && s > 0 ? n / s : o;
  };
  return {
    zoomBy(s) {
      const a = i(), c = Math.min(t.max, Math.max(t.min, a * s)), d = c / a;
      return !Number.isFinite(d) || Math.abs(d - 1) < 1e-9 ? !1 : (o = c, e.zoom(d), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: i
  };
}
const eu = 2e-3;
function na(e) {
  return Math.exp(-e.deltaY * eu);
}
function ir(e, t, n = {}) {
  const r = Qd(t, n.bounds), o = ta(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(na(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function uo(e, t = "Reset view") {
  const n = F("button", Ct, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const br = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, tu = [
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
], ah = "hsv", H = [0, 0, 0], nu = {
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
}, ru = "rdkit", ou = !0, iu = !0, su = !0, au = !0, cu = "rdkit", lu = "filled", du = 0.42, uu = 1.5, fu = !0, pu = "show", hu = "mono", mu = 0.51, gu = 0.74, yu = 1.6, $u = 1.7, vu = 5, bu = 0.3, wu = "#d62828", _u = "#d62828", Su = "#015ab5", Cu = !1, ku = "", xu = "#7c3aed", Eu = {
  layout: ru,
  alignPair: ou,
  atomNumbers: iu,
  createdDestroyed: su,
  modified: au,
  style: cu,
  circles: lu,
  circleRadius: du,
  circleStroke: uu,
  boundary: fu,
  hydrogens: pu,
  elementColors: hu,
  numScale: mu,
  labelScale: gu,
  bondWidth: yu,
  markWidth: $u,
  haloWidth: vu,
  haloOpacity: bu,
  destroyedColor: wu,
  createdColor: _u,
  modifiedColor: Su,
  stereo: Cu,
  customSpec: ku,
  customColor: xu
}, Pu = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: br.uniqueAtom,
  createdColor: br.uniqueAtom,
  modifiedColor: br.elementChange,
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
}, Au = ["rdkit", "coordgen", "conformer"], Ru = ["rdkit", "recolor", "halo"], Mu = ["outline", "filled", "off"], Nu = ["show", "dim", "hide"], Tu = ["cpk", "mono"], Ou = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Fu = /^#[0-9a-fA-F]{6}$/;
function Rt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function We(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Ou[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const $t = (e, t) => typeof e == "boolean" ? e : t, Fn = (e, t) => typeof e == "string" && Fu.test(e) ? e : t;
function zu(e) {
  const t = e && typeof e == "object" ? e : {}, n = Pu;
  return {
    version: 1,
    layout: Rt(t.layout, Au, n.layout),
    alignPair: $t(t.alignPair, n.alignPair),
    style: Rt(t.style, Ru, n.style),
    createdDestroyed: $t(t.createdDestroyed, n.createdDestroyed),
    modified: $t(t.modified, n.modified),
    destroyedColor: Fn(t.destroyedColor, n.destroyedColor),
    createdColor: Fn(t.createdColor, n.createdColor),
    modifiedColor: Fn(t.modifiedColor, n.modifiedColor),
    boundary: $t(t.boundary, n.boundary),
    circles: Rt(t.circles, Mu, n.circles),
    circleRadius: We(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: We(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Rt(t.hydrogens, Nu, n.hydrogens),
    elementColors: Rt(t.elementColors, Tu, n.elementColors),
    atomNumbers: $t(t.atomNumbers, n.atomNumbers),
    stereo: $t(t.stereo, n.stereo),
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
const Me = zu(Eu);
function Xi(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (f) => {
      s !== "right" && t.add(f), s !== "left" && n.add(f);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const f = Math.min(+d[1], +d[2]), $ = Math.min(Math.max(+d[1], +d[2]), f + r - 1);
      for (let _ = f; _ <= $; _++) c(_);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function wr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function Zi(e) {
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
function Iu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function ju(e, t, n) {
  const r = new Set(t.atoms), o = new Set(wr(e, r, !0));
  return {
    deletions: wr(e, r, n),
    changes: wr(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function Qi(e, t, n, r) {
  const o = ju(t, n, e.boundary), i = [];
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
let vt = null;
function Du(e) {
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
function Lu(e, t) {
  return e.style === "rdkit" ? "rdkit" : Du(t) ? e.style : "rdkit";
}
function qu(e, t, n, r, o, i) {
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
  e.elementColors === "mono" && (s.atomColourPalette = nu), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const m of n) {
    const y = Dr(m.color);
    if (o === "rdkit") for (const u of m.bonds) d[u] = y;
    if (o === "recolor" && e.circles === "off") continue;
    const w = o === "recolor" && e.circles === "filled" ? Iu(y, 0.7) : y;
    for (const u of m.atoms)
      a[u] = w, c[u] = e.circleRadius;
  }
  const f = Dr(e.customColor);
  for (const m of r)
    m < i && (a[m] = f, c[m] = e.circleRadius);
  const $ = Object.keys(a).map(Number);
  $.length && (s.atoms = $, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const _ = Object.keys(d).map(Number);
  return _.length && (s.bonds = _, s.highlightBondColors = d), s;
}
function Vu(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (i) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", ge(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const Bu = "http://www.w3.org/2000/svg";
function ra(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function fo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function oa(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function es(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of ra(e, s)) {
      const c = a.style;
      oa(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of fo(e, s, !1)) a.style.fill = i;
}
function Uu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(Bu, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of ra(e, a)) {
      if (oa(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", i.appendChild(d);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function Hu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of fo(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Ku(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of fo(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Gu(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function Wu(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        es(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Hu(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && Ku(e, n, s.atoms, o, s.color);
      } else
        Uu(e, n, s.bonds, s.color), es(e, n, s.atoms, s.bonds, s.color, null);
  Gu(e, t, n);
}
const sr = `
`, Lr = "$$$$";
function qr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(sr);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let f = 0; f < o; f++) {
    const $ = n[4 + f];
    if ($ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat($.substring(0, 10)) || 0,
      parseFloat($.substring(10, 20)) || 0,
      parseFloat($.substring(20, 30)) || 0
    ]), a.push($.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let f = 0; f < (isFinite(i) ? i : 0); f++) {
    const $ = n[4 + o + f];
    if ($ == null) break;
    const _ = parseInt($.substring(0, 3), 10), m = parseInt($.substring(3, 6), 10), y = parseInt($.substring(6, 9), 10);
    !isFinite(_) || !isFinite(m) || c.push([_ - 1, m - 1, isFinite(y) ? y : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function Ju(e) {
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
  return r.push("M  END"), r.join(sr);
}
const Yu = (e) => `${Ju(e)}${sr}${Lr}`, ia = (e) => e.indexOf(Lr) >= 0 ? e : `${e}${sr}${Lr}`;
function po(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function ho(e, t, n, r, o) {
  let i = null;
  try {
    if (i = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !i) return null;
    if (r !== "conformer")
      try {
        i.set_new_coords(r === "coordgen");
      } catch {
      }
    if (o?.atoms.length && i.get_svg_with_highlights) {
      const s = {}, a = {};
      for (const d of o.atoms)
        s[d] = o.color, a[d] = o.radius;
      const c = {
        width: n,
        height: n,
        atoms: [...o.atoms],
        highlightAtomColors: s,
        highlightAtomRadii: a
      };
      return i.get_svg_with_highlights(JSON.stringify(c)) || null;
    }
    return i.get_svg(n, n) || null;
  } catch (s) {
    return console.warn("[gufe-viz] depictSVG threw -", ge(s)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
function sa(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ts = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Vr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, bt = (e) => e in Vr, ns = 400, _r = "position:absolute;inset:0;min-width:0;min-height:0;";
class Xu extends xe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = F("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = F(
      "div",
      `${_r}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${lt.canvas2D};`
    );
    a.appendChild(c);
    const d = Ls();
    d.wrap.style.cssText = _r, a.appendChild(d.wrap);
    const f = F(
      "div",
      `${_r}overflow:auto;padding:16px 20px;background:${O.panelBg};color:${O.textPrimary};font-size:${Z.body};`
    );
    a.appendChild(f);
    const $ = r ? po(r) : null, _ = [
      ["Name", o || at, !1],
      ["SMILES", i || at, !0],
      ["Charge", s == null ? at : String(s), !1],
      ["Atoms", $ ? String($.atoms) : at, !1],
      ["Bonds", $ ? String($.bonds) : at, !1]
    ], m = F("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${te.xl} 20px;align-items:baseline;`);
    f.appendChild(m);
    for (const [T, V, j] of _) {
      m.appendChild(
        F(
          "div",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${O.textMuted2};`,
          T
        )
      );
      const K = F(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${O.textPrimary}` + (j ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};` : ""),
        V
      );
      K.title = V, m.appendChild(K);
    }
    const y = Jr(t), w = F("div", Tr, o || "Unnamed molecule");
    y && a.appendChild(w);
    const u = ut(
      "small-molecule.mode",
      "2d",
      ts.map((T) => T.id)
    ), v = ct("small-molecule.spin", !1);
    let h = u.get(), C = v.get(), S = null, l = null;
    const p = () => {
      try {
        S?.spin(C && bt(h) ? "y" : !1);
      } catch {
      }
    }, g = (T) => {
      h = T, c.style.visibility = h === "2d" ? "visible" : "hidden", d.wrap.style.visibility = bt(h) ? "visible" : "hidden", f.style.visibility = h === "info" ? "visible" : "hidden", w.style.display = h === "info" || !y ? "none" : "block", P.disabled = !bt(h), P.style.opacity = bt(h) ? "1" : "0.5", bt(h) && S && (S.setStyle({}, Vr[h]), S.resize(), S.render()), p();
    }, x = F("div", Ns), P = Ds(
      "Spin",
      C,
      (T) => {
        C = T, p();
      },
      { title: "Toggle continuous rotation", remember: v }
    ), N = (T) => {
      T ? x.insertBefore(P, x.firstChild) : I.buttons.insertBefore(P, I.buttons.lastElementChild);
    }, I = js(ts, h, (T) => g(T), {
      remember: u,
      onLayout: N,
      fit: { pane: a, bar: x }
    });
    return x.appendChild(I), N(!1), a.appendChild(x), g(h), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), d.container.appendChild(pe("No molecule provided")), { cleanup: () => I.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), or().then((T) => {
      const V = ho(T, r, ns, Me.layout);
      V ? sa(c, V, ns) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((T) => {
      c.replaceChildren(pe(`RDKit failed to load: ${ge(T)}`, !0));
    }), d.container.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
      d.container.replaceChildren(), S = Qe.createViewer(d.container, { backgroundColor: lt.viewer }), S.addModel(ia(r), "sdf"), S.setStyle({}, Vr[bt(h) ? h : "stick"]), S.zoomTo(), S.render(), l = ir(d.container, S), p();
    }).catch((T) => {
      d.container.replaceChildren(pe(`3D render failed: ${ge(T)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        if (I.cleanup(), l?.cleanup(), l = null, !!S) {
          try {
            S.spin(!1);
          } catch {
          }
          try {
            S.clear();
          } catch {
          }
          S = null;
        }
      }
    });
  }
}
Ee("gufe-small-molecule", Xu);
const aa = ["HOH", "WAT", "SOL", "TIP3"], rs = { hetflag: !1 }, Zu = { hetflag: !0 }, Qu = { resn: aa }, ze = {
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
function ca(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const f = c.slice(17, 20).trim(), $ = c.slice(21, 22).trim() || "_", _ = c.slice(22, 26).trim(), m = c.slice(26, 27).trim();
    aa.indexOf(f) !== -1 && i++, t.add($), n.add(`${$}|${_}${m}|${f}`);
    const y = parseInt(_, 10);
    isNaN(y) || (y < s && (s = y), y > a && (a = y));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: o,
    waters: i,
    heteroNonWater: o - i,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function la(e) {
  return [
    `${xt(e.chains)} chains`,
    `${xt(e.residues)} residues`,
    `${xt(e.atoms)} atoms`,
    `${xt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${xt(e.waters)} water)` : "")
  ];
}
function ef(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Br(e, t, n, r, o) {
  const i = r || (() => {
  }), s = ef(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(rs),
    t.rep === "stick" ? { stick: { radius: ze.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: ze.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(Zu),
    t.hetero ? {
      stick: { radius: ze.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: ze.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(Qu),
    t.waters ? {
      stick: { radius: ze.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: ze.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > ze.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(
          Qe.SurfaceType.VDW,
          { opacity: ze.surfaceOpacity, ...s },
          a(rs)
        )
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${ge(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${ge(c)}`, "error");
    }
  }, 30);
}
function tf(e, t) {
  e.setStyle(t, {
    stick: { radius: ze.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: ze.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const os = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], is = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], nf = 460, ss = /* @__PURE__ */ new Map();
function da(e) {
  const t = ut(
    "protein.representation",
    "cartoon",
    os.map((g) => g.id)
  ), n = ut(
    "protein.color",
    "chain",
    is.map((g) => g.id)
  ), r = ct("protein.waters", e.waters), o = ct("protein.hetero", !0), i = ct("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = null, c = null;
  const d = F("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const f = F("div", Aa);
  d.appendChild(f);
  const $ = ({ label: g, controls: x }) => {
    const P = F("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    P.appendChild(
      F(
        "span",
        `font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted};`,
        g
      )
    );
    for (const N of x) P.appendChild(N);
    return P;
  }, _ = F("div", `display:flex;flex-direction:column;gap:2px;font-size:${Z.small};color:${O.textMuted};`), m = $({ label: "Contents", controls: [_] });
  m.style.display = "none";
  const w = Zr(f, () => {
    const g = F("div", `${Kr}padding-top:${Ra};`), x = Wn(
      os,
      s.rep,
      (V) => {
        s.rep = V, e.restyle();
      },
      t
    );
    g.appendChild($({ label: "Style", controls: [x] }));
    const P = It(
      is,
      s.color,
      (V) => {
        s.color = V, e.restyle();
      },
      n
    );
    P.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild($({ label: "Color", controls: [P] }));
    const N = F("div", "display:flex;flex-wrap:wrap;gap:4px;"), I = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [V, j, K, Y, re] of I)
      N.appendChild(
        Ds(
          j,
          s[V],
          (q) => {
            s[V] = q, re();
          },
          { title: K, remember: Y }
        )
      );
    g.appendChild($({ label: "Show", controls: [N] }));
    const T = uo(() => e.reset ? e.reset() : c?.reset());
    return T.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild($({ label: "Camera", controls: [...e.camera?.() ?? [], T] })), g.appendChild(m), g;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: ct(`protein${Xr}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    }
  }), u = Jr(e.element) ? e.title || e.fallbackTitle : "";
  u && f.appendChild(
    F("div", `${Pa}pointer-events:none;font-size:${Z.heading};font-weight:${me.bold};`, u)
  ), d.appendChild(w.panel);
  const v = Ls();
  d.appendChild(v.wrap);
  let h = null;
  const C = Xn(d, (g) => {
    const x = g > 0 && g < nf;
    x !== h && (h = x, d.style.flexDirection = x ? "column" : "row", Yr(w.panel, x), a?.resize(), a?.render());
  }), S = F(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
  );
  v.wrap.appendChild(S);
  const l = (g, x) => {
    if (g == null) {
      S.style.display = "none";
      return;
    }
    S.textContent = g, S.style.display = "block";
    const P = x === "error";
    S.style.background = P ? O.warnBg : O.toolbarBg, S.style.color = P ? O.warnFg : O.textMuted, S.style.border = `1px solid ${P ? O.warnBorder : O.toolbarBorder}`;
  }, p = () => {
    if (!e.cameraKey || !a) return;
    const g = a.getView?.();
    Array.isArray(g) && g.length >= 4 && g.every((x) => Number.isFinite(x)) && ss.set(e.cameraKey, g.slice());
  };
  return {
    opts: s,
    pane: v,
    menu: w,
    showStatus: l,
    setStats: (g) => {
      _.replaceChildren(...g.map((x) => F("div", "overflow-wrap:anywhere;", x))), m.style.display = g.length ? "" : "none";
    },
    restoreCamera: () => {
      const g = e.cameraKey ? ss.get(e.cameraKey) : void 0;
      return !g || !a ? !1 : (a.setView(g.slice()), a.render(), !0);
    },
    viewer: () => a,
    setViewer: (g) => {
      a = g;
    },
    interaction: () => c,
    setInteraction: (g) => {
      c = g;
    },
    handle: {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (C(), p(), c?.cleanup(), c = null, !!a) {
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
class rf extends xe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Br(a, s.opts, o, s.showStatus);
    }
    const s = da({
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
      o = ca(r), s.setStats(la(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${ge(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), rr().then(() => {
      const a = Qe.createViewer(s.pane.container, { backgroundColor: lt.viewer });
      s.setViewer(a), a.addModel(r, "pdb"), Br(a, s.opts, o, s.showStatus), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(ir(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${ge(a)}`, "error");
    }), s.handle;
  }
}
Ee("gufe-protein", rf);
function kt(e) {
  const t = /* @__PURE__ */ new Map();
  return Ur(e, t, /* @__PURE__ */ new Set()), t;
}
function Ur(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Ur(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Ur(o, t, n);
}
function Ke(e, t) {
  return t ? e.get(t) : void 0;
}
function Se(e, t, n) {
  const r = Ke(e, t);
  return r?.type === n ? r : void 0;
}
function mo(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const i = e.get(o);
    i && (r.add(o), n.push(i));
  }
  return n;
}
function tt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const go = "Cmd/Ctrl-click to select several.";
function of(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : tt(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function sf(e, t) {
  navigator.clipboard?.writeText(e).catch(() => as(e, t)), navigator.clipboard || as(e, t);
}
function as(e, t) {
  const n = F("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function af(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = F("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ua(e) {
  const { words: t } = e, n = ut(e.setting, "names", ["names", "keys"]), r = F("div", "display:flex;flex-direction:column;gap:6px;"), o = F("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
  o.appendChild(F("span", "", "copy as"));
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
  const s = F("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`), a = (f) => {
    s.textContent = f;
  }, c = F("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [f, $, _] of d) {
    const m = F("button", `${Ct}flex:1;`, $.button);
    m.title = _, m.onclick = (y) => {
      const w = i.value, u = of(e.nodes, e.edges, e.selected, f, w);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : f === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${go}` : "Nothing to copy."
        );
        return;
      }
      const v = u.split(`
`).length;
      y.shiftKey ? (af(u, `selected-${$.plural}.txt`), a(`Saved ${v} ${$.plural} to a file.`)) : (sf(u, r), a(
        f === "edges" ? `Copied ${v} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(m);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(F("div", `font-size:${Z.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const fa = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(fa, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function cs(e, t) {
  const n = document.createElementNS(fa, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const cf = 3;
function pa(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const lf = { min: 0.15, max: 5 }, df = 1e-9;
function ha(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? lf;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, d = () => {
    const j = e.getBoundingClientRect();
    return {
      width: j.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: j.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, f = (j, K, Y) => Math.min(1, K / (j.maxX - j.minX + r * 2), Y / (j.maxY - j.minY + r * 2)), $ = () => {
    const j = n.bounds();
    if (!j) return o.min;
    const { width: K, height: Y } = d();
    return Math.min(o.min, f(j, K, Y));
  }, _ = (j) => Math.min(o.max, Math.max($(), i * j)), m = () => {
    i = 1, s = 0, a = 0;
    const j = n.bounds();
    if (!j) {
      c();
      return;
    }
    const { width: K, height: Y } = d();
    i = f(j, K, Y), s = K / 2 - (j.minX + j.maxX) / 2 * i, a = Y / 2 - (j.minY + j.maxY) / 2 * i, c();
  }, w = ta(e, {
    onZoom: (j) => {
      const K = e.getBoundingClientRect(), Y = j.clientX - K.left, re = j.clientY - K.top, q = _(na(j)), W = q / i;
      return s = Y - (Y - s) * W, a = re - (re - a) * W, i = q, c(), Math.abs(W - 1) > df;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let v = null, h = null, C = !1, S = null;
  const l = (j) => ({
    x: j.clientX - s,
    y: j.clientY - a,
    from: { x: j.clientX, y: j.clientY }
  }), p = (j) => {
    j.pointerType === "touch" && u.size > 1 || (h = l(j), C = !1);
  }, g = (j) => {
    v || (S && j.pointerType === "touch" && (h = { x: S.x - s, y: S.y - a, from: S }, S = null), h && (Math.hypot(j.clientX - h.from.x, j.clientY - h.from.y) > cf && (C = !0), s = j.clientX - h.x, a = j.clientY - h.y, c()));
  }, x = () => {
    h = null;
  };
  e.addEventListener("pointerdown", p), e.addEventListener("pointermove", g), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("pointerleave", x);
  const P = () => {
    const [j, K] = [...u.values()];
    return { cx: (j.x + K.x) / 2, cy: (j.y + K.y) / 2, span: Math.max(1, Math.hypot(j.x - K.x, j.y - K.y)) };
  }, N = (j) => {
    if (j.pointerType === "touch") {
      if (u.set(j.pointerId, { x: j.clientX, y: j.clientY }), u.size !== 2) {
        v = null;
        return;
      }
      v = P(), h = null, C = !0;
    }
  }, I = (j) => {
    if (j.pointerType !== "touch" || !u.has(j.pointerId) || (u.set(j.pointerId, { x: j.clientX, y: j.clientY }), !v || u.size !== 2)) return;
    j.preventDefault(), j.stopPropagation();
    const K = P(), Y = e.getBoundingClientRect(), re = _(K.span / v.span), q = re / i;
    s = K.cx - Y.left - (v.cx - Y.left - s) * q, a = K.cy - Y.top - (v.cy - Y.top - a) * q, i = re, v = K, c();
  }, T = (j) => {
    if (j.pointerType !== "touch") return;
    if (u.delete(j.pointerId), u.size === 2) {
      v = P();
      return;
    }
    v = null;
    const [K] = [...u.values()];
    S = u.size === 1 && K ? { ...K } : null;
  };
  e.addEventListener("pointerdown", N, !0), e.addEventListener("pointermove", I, { capture: !0, passive: !1 }), e.addEventListener("pointerup", T, !0), e.addEventListener("pointercancel", T, !0);
  const V = Wd(e);
  return {
    fit: m,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: m,
    centreOn(j, K, Y = 1) {
      const { width: re, height: q } = d();
      i = Math.max(i, Y), s = re / 2 - j * i, a = q / 2 - K * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(j, K, Y) {
      i = j, s = K, a = Y, c();
    },
    cleanup() {
      w.cleanup(), V.cleanup(), e.removeEventListener("pointerdown", p), e.removeEventListener("pointermove", g), e.removeEventListener("pointerup", x), e.removeEventListener("pointercancel", x), e.removeEventListener("pointerleave", x), e.removeEventListener("pointerdown", N, !0), e.removeEventListener("pointermove", I, { capture: !0 }), e.removeEventListener("pointerup", T, !0), e.removeEventListener("pointercancel", T, !0);
    }
  };
}
const uf = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function ma(e) {
  const t = { ...e };
  for (const n of uf) delete t[n];
  return t;
}
const ff = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), pf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), hf = (e) => pf.has(ff(e));
function ga(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && hf(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const mf = 8, gf = 64, yf = () => new Promise((e) => setTimeout(e, 0));
function Hr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function $f(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const i = o.get_substruct_matches(t), s = JSON.parse(i || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const d = c.atoms;
      if (Array.isArray(d))
        for (const f of d) typeof f == "number" && a.add(f);
    }
    return [...a].sort((c, d) => c - d);
  } catch (i) {
    return console.warn("[gufe-viz] SMARTS match threw -", ge(i)), null;
  } finally {
    Hr(o);
  }
}
function ya(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const d = r.get(a);
    if (d) return { status: "ok", matched: d, unreadable: 0 };
    const f = await e();
    if (c !== o) return { status: "superseded" };
    if (!f) return { status: "unsupported" };
    if (!f.get_qmol) return { status: "unsupported" };
    let $ = null;
    try {
      $ = f.get_qmol(a);
    } catch {
      $ = null;
    }
    if (!$) return { status: "invalid" };
    if (!$.get_substruct_matches)
      return Hr($), { status: "unsupported" };
    const _ = /* @__PURE__ */ new Map();
    let m = 0;
    try {
      let y = performance.now(), w = 0;
      for (let u = 0; u < t.length; u++) {
        const v = t[u] ? $f(f, $, t[u], n) : null;
        if (v ? v.length && _.set(u, v) : m++, !(++w < gf && performance.now() - y < mf)) {
          if (await yf(), c !== o) return { status: "superseded" };
          w = 0, y = performance.now();
        }
      }
    } finally {
      Hr($);
    }
    return r.set(a, _), { status: "ok", matched: _, unreadable: m };
  }, cancel: () => void ++o };
}
const vf = 250;
function $a(e) {
  const t = F("div", "display:flex;flex-direction:column;gap:8px;"), n = F("input", `${Gn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = F("div", `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${O.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), vf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const bf = 1e-6;
function zn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function ls(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function wf(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function ds(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const f = t[a * 3 + a], $ = t[c * 3 + c], _ = ($ - f) / (2 * d);
      let m;
      Math.abs(_) > 1e10 ? m = 1 / (2 * _) : m = (_ >= 0 ? 1 : -1) / (Math.abs(_) + Math.sqrt(_ * _ + 1));
      const y = 1 / Math.sqrt(1 + m * m), w = m * y;
      t[a * 3 + a] = f - m * d, t[c * 3 + c] = $ + m * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== c) {
          const v = t[u * 3 + a], h = t[u * 3 + c];
          t[u * 3 + a] = y * v - w * h, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = w * v + y * h, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const v = n[u * 3 + a], h = n[u * 3 + c];
        n[u * 3 + a] = y * v - w * h, n[u * 3 + c] = w * v + y * h;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function _f(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], o[0] += t[S][0], o[1] += t[S][1], o[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const l = e[S][0] - r[0], p = e[S][1] - r[1], g = e[S][2] - r[2], x = t[S][0] - o[0], P = t[S][1] - o[1], N = t[S][2] - o[2];
    i[0] += l * x, i[1] += l * P, i[2] += l * N, i[3] += p * x, i[4] += p * P, i[5] += p * N, i[6] += g * x, i[7] += g * P, i[8] += g * N;
  }
  const s = ls(i), a = zn(s, i), c = zn(i, s);
  let d = ds(a), f = ds(c);
  function $(S) {
    const l = [0, 1, 2].sort((g, x) => S.values[x] - S.values[g]), p = new Array(9);
    for (let g = 0; g < 3; g++) {
      const x = l[g];
      p[g] = S.vectors[x], p[3 + g] = S.vectors[3 + x], p[6 + g] = S.vectors[6 + x];
    }
    return {
      values: [S.values[l[0]], S.values[l[1]], S.values[l[2]]],
      vectors: p
    };
  }
  d = $(d), f = $(f);
  const _ = d.vectors, m = f.vectors;
  for (let S = 0; S < 3; S++) {
    const l = _[S], p = _[3 + S], g = _[6 + S], x = i[0] * l + i[1] * p + i[2] * g, P = i[3] * l + i[4] * p + i[5] * g, N = i[6] * l + i[7] * p + i[8] * g, I = m[S], T = m[3 + S], V = m[6 + S];
    x * I + P * T + N * V < 0 && (m[S] = -I, m[3 + S] = -T, m[6 + S] = -V);
  }
  const y = ls(_);
  let w = zn(m, y);
  wf(w) < 0 && (m[2] = -m[2], m[5] = -m[5], m[8] = -m[8], w = zn(m, y));
  const u = w[0] * o[0] + w[1] * o[1] + w[2] * o[2], v = w[3] * o[0] + w[4] * o[1] + w[5] * o[2], h = w[6] * o[0] + w[7] * o[1] + w[8] * o[2], C = d.values[1] > bf * d.values[0];
  return { R: w, t: [r[0] - u, r[1] - v, r[2] - h], determined: C };
}
function Sf(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const us = `
`, Sr = 4;
function fs(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", ge(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Cf(e, t, n) {
  const r = [], o = [];
  for (const [f, $] of n) {
    const _ = e[$], m = t[f];
    !_ || !m || (r.push(_), o.push(m));
  }
  if (r.length < 2) return null;
  const i = (f) => {
    let $ = 0, _ = 0;
    for (const m of f)
      $ += m[0], _ += m[1];
    return [$ / f.length, _ / f.length];
  }, s = i(r), a = i(o);
  let c = null, d = -1 / 0;
  for (const f of [!1, !0]) {
    let $ = 0, _ = 0;
    for (let h = 0; h < r.length; h++) {
      const C = (f ? -1 : 1) * (r[h][0] - s[0]), S = r[h][1] - s[1], l = o[h][0] - a[0], p = o[h][1] - a[1];
      $ += C * p - S * l, _ += C * l + S * p;
    }
    const m = Math.hypot($, _);
    if (m <= d) continue;
    d = m;
    const y = Math.atan2($, _), w = Math.cos(y), u = Math.sin(y), v = (f ? -1 : 1) * s[0];
    c = {
      cos: w,
      sin: u,
      mirror: f,
      tx: a[0] - (w * v - u * s[1]),
      ty: a[1] - (u * v + w * s[1])
    };
  }
  return c;
}
function kf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function xf(e, t, n) {
  const r = po(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(us);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[Sr + i], a = t[i];
    if (s == null || !a) return e;
    o[Sr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Sr + r.atoms + a, d = o[c];
      if (d == null) break;
      const f = parseInt(d.substring(9, 12), 10);
      f !== 1 && f !== 6 || (o[c] = d.substring(0, 9) + String(f === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(us);
}
function Ef(e, t, n) {
  try {
    const r = (s) => qr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = Cf(o, r(e), n);
    return i ? xf(
      t,
      o.map((s) => kf(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ge(r)), t;
  }
}
function Pf(e, t, n, r, o) {
  const i = fs(e, t, r), s = fs(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: Ef(i, s, o) };
}
const Af = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Rf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Mf() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Cr = Mf() ? Af : Rf, ps = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], kr = 420, Nf = {
  mapped: null,
  element: Me.modifiedColor,
  uniqueA: Me.destroyedColor,
  uniqueB: Me.createdColor
}, Tf = 132, Be = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, xr = { gap: 2.5, minLiftFraction: 0.6 }, Of = 24, Ft = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function hs(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function Ff(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function zf(e, t, n) {
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
function va(e, t) {
  const n = Se(t, e.componentA, "SmallMoleculeComponentViz"), r = Se(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: mo(t, [e.componentA, e.componentB]) };
}
function If(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const i = _f(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => Sf(s, i.R, i.t)) } : t;
}
function ms(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function jf(e, t) {
  const n = ms(e), r = ms(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + xr.gap, a = xr.minLiftFraction * i + xr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function Df(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Ft.minSpread ? r : Ft.minSpread) * Ft.spreadFactor;
}
function Lf(e, t) {
  const n = tu, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const f = (_) => parseInt(_.slice(1 + d * 2, 3 + d * 2), 16), $ = Math.round(f(n[i]) + (f(n[s]) - f(n[i])) * a);
    c += $.toString(16).padStart(2, "0");
  }
  return c;
}
class qf extends xe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = kt(n), o = Se(r, n.componentA, "SmallMoleculeComponentViz"), i = Se(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !i)
      return t.appendChild(
        pe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = tt(o), a = tt(i), c = Ff(n);
    let d, f;
    try {
      d = qr(o.sdf, s), f = qr(i.sdf, a);
    } catch (R) {
      return t.appendChild(pe(`Could not read a molecule: ${ge(R)}`, !0)), {};
    }
    f = If(d, f, c);
    const $ = /* @__PURE__ */ new Map();
    for (const [R, E] of c) $.set(E, R);
    const _ = hs(c, d.symbols, f.symbols), m = hs($, f.symbols, d.symbols), y = Jr(t), w = F("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(w);
    const u = F("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    w.appendChild(u);
    const v = ut("atom-mapping.mode", "plain", ps.map((R) => R.id));
    let h = v.get();
    const C = F("div", Ns), S = js(
      ps,
      h,
      (R) => {
        h = R, W();
      },
      { remember: v, fit: { pane: w, bar: C } }
    );
    C.appendChild(S), w.appendChild(C);
    let l = [], p = 0, g = !0;
    const x = () => {
      p && cancelAnimationFrame(p), p = 0;
      for (const R of l) {
        R.interaction?.cleanup();
        try {
          R.viewer?.clear();
        } catch {
        }
      }
      l = [], u.replaceChildren();
    }, P = (R) => {
      const E = F("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), D = F("div", "flex:1;position:relative;min-height:0;");
      D.dataset.gufeViewer = "", E.appendChild(D), y && E.appendChild(F("div", Tr, R)), u.appendChild(E);
      const M = { container: D, viewer: null, interaction: null };
      return l.push(M), M;
    }, N = () => {
      if (l.length < 2) return;
      const R = l.map(() => "");
      let E = !1;
      const D = () => {
        if (g) {
          if (!E)
            for (let M = 0; M < l.length; M++) {
              const b = l[M].viewer;
              if (!b) continue;
              const k = JSON.stringify(b.getView());
              if (k !== R[M]) {
                E = !0;
                for (let L = 0; L < l.length; L++)
                  L !== M && l[L].viewer && (l[L].viewer.setView(b.getView()), l[L].viewer.render()), R[L] = k;
                E = !1;
                break;
              }
            }
          p = requestAnimationFrame(D);
        }
      };
      p = requestAnimationFrame(D);
    }, I = (R, E) => {
      const D = Qe.createViewer(R.container, { backgroundColor: lt.viewer });
      for (const { mol: M } of E) D.addModel(Yu(M), "sdf");
      return R.viewer = D, D;
    }, T = (R) => {
      R.viewer && (R.interaction = ir(R.container, R.viewer));
    }, V = () => {
      for (const R of [d, f]) {
        const E = P(R.name), D = I(E, [{ mol: R }]);
        D.setStyle(
          {},
          { stick: { radius: Be.stick, colorscheme: "Jmol" }, sphere: { scale: Be.sphere, colorscheme: "Jmol" } }
        ), D.zoomTo(), D.render(), T(E);
      }
      N();
    }, j = () => {
      const R = Me, E = Xi(R.customSpec), D = [
        { mol: d, uniques: _, side: "left", custom: E.left },
        { mol: f, uniques: m, side: "right", custom: E.right }
      ];
      for (const M of D) {
        const b = P(M.mol.name), k = I(b, [{ mol: M.mol }]);
        k.setStyle(
          {},
          { stick: { radius: Be.stick, color: Cr.core }, sphere: { scale: Be.sphere, color: Cr.core } }
        );
        const L = (G, U) => {
          k.addStyle(
            { serial: G },
            {
              stick: { radius: Be.markStick, color: Zi(U) },
              sphere: { scale: Be.markSphere, color: Zi(U) }
            }
          );
        };
        for (const G of Qi(R, M.mol, M.uniques, M.side))
          for (const U of G.atoms) L(U, G.color);
        for (const G of M.custom)
          G < M.mol.symbols.length && L(G, R.customColor);
        k.zoomTo(), k.render(), T(b);
      }
      N();
    }, K = () => {
      const R = P(`${s} (left), both overlaid (middle), ${a} (right)`), E = Df(d.coords, f.coords), D = (ne, A) => ({
        ...ne,
        coords: ne.coords.map(([z, B, J]) => [z + A, B, J])
      }), M = D(d, -E), b = D(f, E), k = I(R, [{ mol: M }, { mol: b }, { mol: d }, { mol: f }]);
      k.setStyle({}, { stick: {} });
      const L = Array.from(c);
      L.forEach(([ne, A], z) => {
        const B = M.coords[ne], J = b.coords[A];
        if (!B || !J) return;
        const ee = Lf(z, L.length);
        for (const [X, oe, se] of [B, J])
          k.addSphere({
            center: { x: X, y: oe, z: se },
            radius: Ft.sphereRadius,
            color: ee,
            alpha: Ft.sphereAlpha
          });
      }), k.zoomTo();
      const { clientWidth: G, clientHeight: U } = R.container, Q = G - 2 * Of;
      Q > 0 && Q < U && k.zoom(Q / U), k.render(), T(R);
    }, Y = () => {
      const R = P(`${s} to ${a}  (${c.size} mapped pairs)`), { axis: E, lift: D } = jf(d.coords, f.coords), M = {
        ...f,
        coords: f.coords.map((L) => {
          const G = [L[0], L[1], L[2]];
          return G[E] += D, G;
        })
      }, b = I(R, [{ mol: d }, { mol: M }]), k = {
        stick: { radius: Be.stick, colorscheme: "Jmol" },
        sphere: { scale: Be.pairSphere, colorscheme: "Jmol" }
      };
      b.setStyle({ model: 0 }, k), b.setStyle({ model: 1 }, k);
      for (const [L, G] of c) {
        const U = d.coords[L], Q = M.coords[G];
        !U || !Q || b.addCylinder({
          start: { x: U[0], y: U[1], z: U[2] },
          end: { x: Q[0], y: Q[1], z: Q[2] },
          radius: Be.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Cr.pairLine
        });
      }
      b.zoomTo(), E === 2 ? b.rotate(90, "x") : E === 0 && b.rotate(-90, "z"), b.render(), T(R);
    }, re = () => {
      const R = Me, E = Xi(R.customSpec), M = [
        { mol: d, uniques: _, side: "left", custom: E.left },
        { mol: f, uniques: m, side: "right", custom: E.right }
      ].map((b) => {
        const k = F("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), L = F(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${lt.canvas2D};`
        );
        return L.appendChild(pe("Loading 2D depiction...")), k.appendChild(L), y && k.appendChild(F("div", Tr, b.mol.name)), u.appendChild(k), { box: L, side: b };
      });
      or().then((b) => {
        const k = Lu(R, b), L = Pf(b, o.sdf, i.sdf, R.layout, R.alignPair ? c : null);
        for (const { box: G, side: U } of M) {
          const Q = Qi(R, U.mol, U.uniques, U.side), ne = qu(
            R,
            kr,
            Q,
            U.custom,
            k,
            U.mol.symbols.length
          ), A = Vu(b, U.side === "left" ? L.left : L.right, kr, ne);
          if (G.replaceChildren(), !A) {
            G.appendChild(pe("Failed to parse molecule", !0));
            continue;
          }
          sa(G, A, kr);
          const z = G.querySelector("svg");
          z && Wu(z, U.mol, R, Q, U.custom, k);
        }
      }).catch((b) => {
        for (const { box: k } of M)
          k.replaceChildren(pe(`RDKit failed to load: ${ge(b)}`, !0));
      });
    }, q = () => {
      const R = F(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(R);
      const E = F("div", "display:flex;flex-direction:column;gap:2px;");
      E.appendChild(
        F(
          "div",
          `font-size:${Z.title};font-weight:${me.bold};color:${Ie.title};`,
          n.name || `${s} to ${a}`
        )
      ), R.appendChild(E);
      const D = zf(c, d.symbols, f.symbols), M = F("div", Re.row), b = [];
      let k = null;
      const L = (X, oe, se, de) => {
        const fe = F("button", `${Re.plain}${Re.button}`);
        fe.type = "button", fe.appendChild(Ze(X, String(oe), de)), fe.onclick = () => {
          k = k === se ? null : se, J();
        }, b.push({ button: fe, kinds: se }), M.appendChild(fe);
      }, G = (X, oe) => {
        const se = F("span", Re.plain);
        se.appendChild(Ze(X, oe)), M.appendChild(se);
      };
      L("mapped atoms", c.size, ["mapped", "element"]), L("element changes", _.elements.length, ["element"], Me.modifiedColor), L(`unique to ${s}`, _.atoms.length, ["uniqueA"], Me.destroyedColor), L(`unique to ${a}`, m.atoms.length, ["uniqueB"], Me.createdColor), G(`atoms in ${s}`, String(d.symbols.length)), G(`atoms in ${a}`, String(f.symbols.length)), G("score", n.score == null ? at : n.score.toFixed(3)), R.appendChild(M), R.appendChild(F("div", Or, "Correspondence"));
      const U = F("div", Fr);
      R.appendChild(U);
      const Q = F(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Tf}px,1fr));gap:${te.xs} ${te.md};font-family:${Z.mono};font-size:${Z.small};color:${Ie.primary};`
      );
      R.appendChild(Q);
      const ne = String(Math.max(d.symbols.length, f.symbols.length, 1) - 1).length, A = (X, oe) => `${(X == null ? at : String(X)).padStart(ne)} ${oe.padEnd(2)}`, z = (X) => {
        if (X.kind === "uniqueA") return `${s} atom ${X.a} ${X.symbolA} maps to nothing`;
        if (X.kind === "uniqueB") return `${a} atom ${X.b} ${X.symbolB} maps to nothing`;
        const oe = X.kind === "element" ? ", an element change" : "";
        return `${s} atom ${X.a} ${X.symbolA} maps to ${a} atom ${X.b} ${X.symbolB}${oe}`;
      }, B = (X) => {
        const oe = F(
          "div",
          `white-space:pre;padding:${te.xs} ${te.md};border-radius:${Te.sm};background:${lt.card};border-left:3px solid ${Nf[X.kind] ?? "transparent"};`,
          `${A(X.a, X.symbolA)} -> ${A(X.b, X.symbolB)}`
        );
        return oe.title = z(X), oe.dataset.gufeRelation = X.kind, oe;
      }, J = () => {
        const X = k, oe = X ? D.filter((se) => X.includes(se.kind)) : D;
        Q.replaceChildren(...oe.map(B)), oe.length || Q.appendChild(
          F("div", `${Fr}grid-column:1/-1;`, k ? "No atoms of that kind." : "This mapping has no atoms.")
        ), U.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (k ? "; click the chip again for all of them" : "");
        for (const se of b) {
          const de = se.kinds === k;
          se.button.style.cssText = `${Re.plain}${de ? Re.active : Re.button}`, se.button.setAttribute("aria-pressed", String(de)), se.button.title = de ? "Show every atom" : "Show only these atoms";
        }
      };
      J();
      const ee = Object.entries(n.annotations ?? {}).filter(([X]) => X !== "score");
      if (ee.length) {
        R.appendChild(F("div", Or, "Annotations"));
        const X = F("div", `${Na}color:${Ie.faint};`);
        for (const [oe, se] of ee)
          X.appendChild(F("div", "", `${oe}: ${String(se)}`));
        R.appendChild(X);
      }
    }, W = () => {
      if (x(), h === "info") {
        q();
        return;
      }
      if (h === "2d") {
        re();
        return;
      }
      u.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
        g && (u.replaceChildren(), h === "colored" ? j() : h === "openfe" ? K() : h === "lines" ? Y() : V());
      }).catch((R) => {
        u.replaceChildren(pe(`3D render failed: ${ge(R)}`, !0));
      });
    };
    return W(), {
      onResize() {
        for (const R of l)
          R.viewer && (R.viewer.resize(), R.viewer.render());
      },
      cleanup() {
        g = !1, S.cleanup(), x();
      }
    };
  }
}
Ee("gufe-atom-mapping", qf);
const gs = ["Force-directed", "Circular", "Radial"], Vf = "ligand-network", Bf = "Click a ligand or an edge to see it.";
function Uf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Hf(e) {
  return ma(e);
}
const ys = (e) => Math.round(e * 100) / 100;
function Kf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function Gf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Mt = { initial: 0.58, min: 0.25, max: 0.8 }, Ne = 38, $s = 200, Wf = 4, Jf = 14, Yf = 18, _e = {
  fontSize: 11,
  below: Ne + 12,
  minFontSize: 7,
  insideWidth: (Ne - 6) * 2
}, Ot = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, vs = 1.5, Xf = 6.5, Zf = 0.9, Qf = 14, Er = { size: 8, clearance: 8 }, ep = { fontSize: 10 }, tp = 0.4, np = Dr(O.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, rp = 3, St = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], op = (e) => St.find((t) => e >= t.from) ?? St[St.length - 1], ip = (e) => St[Math.min(St.indexOf(e) + 1, St.length - 1)], In = 200, sp = 24, Pr = { node: 0.12, edge: 0.06 }, ap = 1.8, bs = 2 * Ne + 68, Ce = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: bs,
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
  collisionPadding: bs / 2 - Ne,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function cp(e) {
  const t = F(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function lp(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const i = le("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Ne + Er.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Er.size,
      markerHeight: Er.size,
      orient: "auto"
    });
    return i.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function dp(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function up(e) {
  const [t, n] = O.netEdgeRamp.map(dp), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ue = tt, fp = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function pp(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (y) => (e.matched().get(y) ?? []).join(","), i = (y, w) => {
    if (t.has(w) || n.has(w)) return;
    const u = e.nodes[w], v = e.matched().get(w), h = u.sdf && ho(
      y,
      u.sdf,
      $s,
      Me.layout,
      v && { atoms: v, color: np, radius: tp }
    );
    if (!h) {
      n.add(w);
      return;
    }
    if (!ga(e.depictionGroups[w], h, $s, (Ne - Wf) * 2)) {
      n.add(w);
      return;
    }
    t.add(w), r[w] = o(w);
  }, s = () => {
    for (const y of [...t])
      r[y] !== o(y) && (e.depictionGroups[y].replaceChildren(), t.delete(y));
  }, a = [], c = (y, w) => {
    if (a[y]) return a[y];
    w.setAttribute("font-size", String(_e.fontSize));
    let u = 0;
    try {
      u = w.getBBox().width;
    } catch {
      return _e.fontSize;
    }
    if (!u) return _e.fontSize;
    const v = _e.fontSize * _e.insideWidth / u;
    return a[y] = Math.max(_e.minFontSize, Math.min(_e.fontSize, v)), a[y];
  }, d = [], f = (y) => {
    const w = e.captionPlates[y];
    if (d[y] === _e.below) {
      w.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[y].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      w.setAttribute("display", "none");
      return;
    }
    w.setAttribute("x", String(u.x - Ot.captionPadX)), w.setAttribute("y", String(u.y - Ot.captionPadY)), w.setAttribute("width", String(u.width + Ot.captionPadX * 2)), w.setAttribute("height", String(u.height + Ot.captionPadY * 2)), w.setAttribute("display", "inline"), d[y] = _e.below;
  }, $ = (y, w) => {
    const u = w.structure && !t.has(y) ? ip(w) : w;
    e.depictionGroups[y].setAttribute("display", u.structure ? "inline" : "none"), e.plates[y].setAttribute("display", u.structure ? "inline" : "none");
    const v = e.matched().has(y), h = e.circles[y];
    h.setAttribute("fill", u.disc ? v ? O.netMatchFill : O.netNodeFill : "none"), h.setAttribute("stroke", u.disc ? v ? O.netMatchStroke : O.netNodeStroke : "none"), e.initials[y].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[y], S = u.name === "below";
    if (C.setAttribute("fill", v ? O.netMatchStroke : S ? O.netDepictCaption : O.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), S || e.captionPlates[y].setAttribute("display", "none"), u.name === "none") return;
    const l = u.name === "inside";
    C.setAttribute("y", l ? "0" : String(_e.below)), C.setAttribute("dominant-baseline", l ? "middle" : "auto"), C.setAttribute("font-size", String(l ? c(y, C) : _e.fontSize)), S && f(y);
  };
  let _ = null;
  return { apply: (y, w, u) => {
    const v = op(y);
    _ = v, e.stage.setAttribute("data-detail", v.id), e.edgeLabels.setAttribute("display", v.edgeScores ? "inline" : "none");
    for (let l = 0; l < e.nodes.length; l++) $(l, v);
    if (!v.structure) return;
    const { width: h, height: C } = e.viewport(), S = [];
    e.nodes.forEach((l, p) => {
      if (t.has(p) || n.has(p)) return;
      const g = l.x * y + w, x = l.y * y + u;
      g < -In || x < -In || g > h + In || x > C + In || S.push(p);
    }), S.length && e.rdkit().then((l) => {
      if (!(!l || _ !== v))
        for (const p of S)
          i(l, p), $(p, v);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function hp(e) {
  const t = _t("ligand-network.query"), n = Gr("ligand-network.minScore", 0, 0, 1), r = F("div", Kr), o = F("input", `${Gn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const i = $a({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: _t("ligand-network.smarts"),
    run: (w) => e.match(w),
    describe: (w) => {
      const u = w.unreadable ? `, ${w.unreadable} could not be read` : "";
      return `${w.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(i.element);
  const s = F("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${O.textMuted};`), a = F("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), c = F("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(F("span", "", "score >=")), s.appendChild(c), s.appendChild(a), r.appendChild(s);
  const d = F("div", `font-size:${Z.small};color:${O.textMuted2};`);
  r.appendChild(d);
  const f = F("div", Rs);
  r.appendChild(f), r.appendChild(F("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`, go));
  const $ = ua({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild($.box);
  const _ = F("button", `${Ct}width:100%;`, "Clear selection");
  _.onclick = () => {
    e.selected.clear(), y(), e.refresh();
  }, r.appendChild(_);
  const m = (w) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? Ue(w).toLowerCase().includes(u) || (w.smiles ?? "").toLowerCase().includes(u) || w["gufe-key"].toLowerCase().includes(u) : !0;
  }, y = () => {
    $.clearNote(), f.replaceChildren();
    const w = e.nodes.map((u, v) => ({ node: u, index: v })).filter(({ node: u }) => m(u));
    d.textContent = `${w.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: v } of w) {
      const h = u["gufe-key"], C = F(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(h) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(h) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), S = F("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ue(u));
      S.title = `${Ue(u)}
${u.smiles ?? ""}`, C.appendChild(S), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(h) ? e.selected.delete(h) : e.selected.add(h) : (e.selected.clear(), e.selected.add(h), e.focus(v)), y(), e.refresh();
      }, f.appendChild(C);
    }
    w.length || f.appendChild(F("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), y(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, y(), i.apply(), r;
}
class mp extends xe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = kt(n), o = [];
    let i = 0;
    for (const A of n.nodes ?? []) {
      const z = Se(r, A, "SmallMoleculeComponentViz");
      if (!z) {
        i++;
        continue;
      }
      o.push({ ...z, x: 0, y: 0 });
    }
    const s = new Map(o.map((A) => [A["gufe-key"], A])), a = [];
    let c = 0;
    for (const A of n.edges ?? []) {
      const z = s.get(A.componentA), B = s.get(A.componentB);
      if (!z || !B) {
        c++;
        continue;
      }
      a.push({ ...A, index: a.length, from: z, to: B });
    }
    const d = Jn(n.name || "Ligand network");
    d.statsEl.appendChild(Ze("ligands", String(o.length))), d.statsEl.appendChild(Ze("mappings", String(a.length))), t.appendChild(d);
    const f = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const $ = /* @__PURE__ */ new Set(), _ = { minScore: 0 }, m = { text: "" };
    let y = () => {
    }, w = null;
    const u = () => w ??= or().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", ge(A)), null)), v = ya(
      u,
      o.map((A) => A.sdf ?? "")
    );
    let h = /* @__PURE__ */ new Map(), C = () => {
    };
    const S = async (A) => {
      const z = await v.run(A);
      return z.status === "superseded" || (h = z.status === "ok" ? z.matched : /* @__PURE__ */ new Map(), C()), z;
    }, l = Zr(
      d,
      () => hp({
        nodes: o,
        edges: a,
        selected: $,
        filter: _,
        query: m,
        refresh: () => y(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (A) => {
          K(A), Q({ kind: "ligand", index: A });
        },
        match: (A) => S(A)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => ne(),
        remember: ct("ligand-network.menuOpen", !1)
      }
    );
    f.appendChild(l.panel);
    let p = () => {
    };
    const g = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), x = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.appBg};`);
    f.appendChild(g), f.appendChild(
      qs(f, g, x, {
        min: Mt.min,
        max: Mt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Gr("ligand-network.canvasShare", Mt.initial, Mt.min, Mt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => p(),
        onOrient: (A) => Yr(l.panel, A)
      })
    ), f.appendChild(x);
    const P = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    g.appendChild(P);
    const N = ut("ligand-network.layout", "Force-directed", gs), I = this.#n(
      (A) => ne(A),
      () => L(),
      N
    );
    g.appendChild(I.bar);
    const T = this.#e(x, r);
    if (!o.length)
      return P.appendChild(
        pe(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), T.message("Nothing to show."), {};
    i && dt(
      P,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(P, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const V = u(), j = cp(P);
    let K = () => {
    };
    const Y = Kf(La(Vf), o.length);
    let re = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, q = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const A = Y.selectedKind ?? "edge";
      Y.selected < (A === "ligand" ? o.length : a.length) && (q = { kind: A, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), R = !1, E = null, D = N.get(), M = !1, b = !0, k = () => {
    }, L = () => {
    }, G = 0;
    const U = () => {
      if (!q) {
        T.message(a.length ? Bf : "Click a ligand to see it.");
        return;
      }
      q.kind === "edge" ? T.showMapping(a[q.index]) : T.showLigand(o[q.index]);
    }, Q = (A) => {
      q = A, U(), k();
    }, ne = (A = D) => {
      const z = R && A === D ? W() : null, B = ++G;
      D = A, E?.(), E = null, P.querySelectorAll("svg").forEach((oe) => oe.remove());
      const J = P.clientWidth || 800, ee = P.clientHeight || 600;
      gp(o, J, ee, D, a), Y && Gf(o, Y.nodes);
      const X = () => {
        if (!b || B !== G) return;
        const oe = this.#t(P, o, a, J, ee, Q, V, j);
        k = () => oe.setSelected(q), L = oe.reset, E = oe.cleanup, K = (de) => oe.focusOn(de), W = oe.transform, y = () => {
          const de = m.text.trim().toLowerCase(), fe = $.size > 0 || de.length > 0, he = /* @__PURE__ */ new Set();
          for (const Pe of o) {
            const De = Pe["gufe-key"], nt = $.has(De) || de.length > 0 && (Ue(Pe).toLowerCase().includes(de) || (Pe.smiles ?? "").toLowerCase().includes(de) || De.toLowerCase().includes(de));
            (!fe || nt) && he.add(De);
          }
          const je = /* @__PURE__ */ new Set();
          a.forEach((Pe, De) => {
            (Pe.score ?? 0) < _.minScore || !he.has(Pe.from["gufe-key"]) || !he.has(Pe.to["gufe-key"]) || je.add(De);
          });
          const ve = fe || _.minScore > 0;
          oe.setEmphasis(ve ? he : null, ve ? je : null);
        }, C = () => oe.setMatches(h), k(), y(), C();
        const se = re ?? z;
        se ? (oe.setTransform(se.scale, se.tx, se.ty), re = null) : oe.fit(), R = !0;
      };
      if (D !== "Force-directed" || M || Y) {
        X();
        return;
      }
      yp(o, a, J, ee).then((oe) => {
        if (!(!b || B !== G)) {
          if (oe) {
            X();
            return;
          }
          M = !0, I.picker.value = "Circular", dt(P, "d3 could not be loaded - showing the circular layout instead"), ne("Circular");
        }
      }, X);
    };
    return p = () => ne(), ne(), U(), {
      onResize: () => ne(),
      cleanup: () => {
        b = !1, v.cancel(), j.remove(), E?.();
      },
      viewState: () => ({
        nodes: o.map((A) => [ys(A.x), ys(A.y)]),
        ...W(),
        selected: q ? q.index : -1,
        selectedKind: q ? q.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = F(
      "div",
      Ms.bottom
    ), i = F("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    i.appendChild(F("span", "", "score")), i.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(F("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(F("label", `font-size:${Z.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const s = It(
      gs.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(s), o.appendChild(uo(n, "Reset pan and zoom")), { bar: o, picker: s };
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
    const r = F("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = (s) => r.replaceChildren(pe(s)), i = (s, a) => {
      const c = document.createElement(s);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => i("gufe-atom-mapping", va(Uf(s), n)),
      showLigand: (s) => i("gufe-small-molecule", Hf(s)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, i, s, a, c) {
    const d = le("svg", {
      class: "gufe-graph",
      width: o,
      height: i,
      style: "display:block;touch-action:none;"
    }), f = le("g");
    d.appendChild(f), t.appendChild(d);
    const $ = le("defs"), _ = lp($);
    d.appendChild($);
    const m = [], y = le("g"), w = le("g"), u = le("g", { "pointer-events": "none" }), v = le("g");
    f.append(y, w, u, v);
    for (const j of r) {
      const K = up(j.score), Y = vs + (j.score ?? 0.5) * (Xf - vs), re = le("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), q = le("line", {
        stroke: K,
        "stroke-width": Y,
        "stroke-opacity": Zf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${_(K)})`,
        "pointer-events": "none"
      }), W = le("line", { stroke: "transparent", "stroke-width": Qf, style: "cursor:pointer;" });
      W.addEventListener("click", (D) => {
        D.stopPropagation(), s({ kind: "edge", index: j.index });
      }), W.addEventListener("mousemove", (D) => {
        c.show(
          `<div style="font-weight:700;color:${O.titleColor};">${He(Ue(j.from))} -&gt; ${He(Ue(j.to))}</div>` + (j.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${j.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          D.offsetX,
          D.offsetY
        );
      }), W.addEventListener("mouseleave", () => c.hide()), m.push(re), y.append(re, q), w.appendChild(W);
      const R = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": ep.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      R.textContent = j.score == null ? "" : j.score.toFixed(2);
      const E = le("g", { class: "gufe-edge-label" });
      E.appendChild(R), u.appendChild(E);
    }
    const h = [], C = [], S = [], l = [], p = [], g = [], x = [], P = n.map((j) => {
      const K = le("g", { class: "gufe-node", style: "cursor:grab;" });
      K.addEventListener("mousemove", (M) => {
        c.show(
          `<div style="font-weight:700;color:${O.titleColor};">${He(Ue(j))}</div>` + (j.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${He(j.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${He(j["gufe-key"])}</div><div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the ligand</div>`,
          M.offsetX,
          M.offsetY
        );
      }), K.addEventListener("mouseleave", () => c.hide());
      const Y = le("circle", {
        class: "gufe-node-halo",
        r: Ne + Nt.padding,
        fill: "none",
        stroke: O.netHaloColor,
        "stroke-width": Nt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      K.appendChild(Y), p.push(Y);
      const re = le("circle", {
        class: "gufe-node-disc",
        r: Ne,
        fill: O.netNodeFill,
        stroke: O.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      K.appendChild(re), C.push(re);
      const q = le("circle", {
        class: "gufe-node-plate",
        r: Ne,
        fill: O.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      K.appendChild(q), S.push(q);
      const W = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      K.appendChild(W), h.push(W);
      const R = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Yf,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      R.textContent = Ue(j).slice(0, 2).toUpperCase(), K.appendChild(R), g.push(R);
      const E = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: _e.below,
        "font-size": _e.fontSize,
        "font-weight": 600,
        fill: O.netNodeCaption,
        "pointer-events": "none"
      });
      E.textContent = fp(Ue(j), Jf), E.setAttribute("display", "none"), x.push(E);
      const D = le("rect", {
        class: "gufe-node-caption-plate",
        rx: Ot.captionRadius,
        fill: O.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return l.push(D), K.appendChild(D), K.appendChild(E), v.appendChild(K), K;
    }), N = () => {
      r.forEach((j, K) => {
        for (const re of [m[K], y.children[K * 2 + 1], w.children[K]]) {
          const q = re;
          q.setAttribute("x1", String(j.from.x)), q.setAttribute("y1", String(j.from.y)), q.setAttribute("x2", String(j.to.x)), q.setAttribute("y2", String(j.to.y));
        }
        u.children[K].setAttribute(
          "transform",
          `translate(${(j.from.x + j.to.x) / 2},${(j.from.y + j.to.y) / 2 - 8})`
        );
      }), n.forEach((j, K) => P[K].setAttribute("transform", `translate(${j.x},${j.y})`));
    };
    N();
    let I = /* @__PURE__ */ new Map();
    const T = pp({
      nodes: n,
      circles: C,
      plates: S,
      captionPlates: l,
      matched: () => I,
      captions: x,
      initials: g,
      depictionGroups: h,
      edgeLabels: u,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), V = this.#r(
      d,
      f,
      n,
      P,
      N,
      T.apply,
      (j) => s({ kind: "ligand", index: j })
    );
    return {
      setSelected(j) {
        const K = j?.kind === "edge" ? j.index : -1, Y = j?.kind === "ligand" ? j.index : -1;
        m.forEach((re, q) => re.setAttribute("opacity", q === K ? String(Nt.opacity) : "0")), p.forEach((re, q) => re.setAttribute("opacity", q === Y ? String(Nt.opacity) : "0"));
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
      setMatches(j) {
        I = j, T.forget();
        const { scale: K, tx: Y, ty: re } = V.transform();
        T.apply(K, Y, re);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(j, K) {
        P.forEach((Y, re) => {
          const q = !j || j.has(n[re]["gufe-key"]);
          Y.setAttribute("opacity", q ? "1" : String(Pr.node));
        }), r.forEach((Y, re) => {
          const q = !K || K.has(re), W = q ? "0.9" : String(Pr.edge);
          y.children[re * 2 + 1].setAttribute("stroke-opacity", W), u.children[re].setAttribute("opacity", q ? "1" : String(Pr.edge));
        });
      },
      focusOn(j) {
        const K = n[j];
        K && V.centreOn(K.x, K.y);
      },
      setDetail: T.apply,
      depictionsDrawn: () => T.drawn(),
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
  #r(t, n, r, o, i, s, a) {
    const c = ha(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => pa(r, Ne),
      margin: sp,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, f) => {
      let $ = null, _ = !1;
      d.addEventListener("pointerdown", (y) => {
        y.stopPropagation();
        const { scale: w } = c.transform();
        $ = { x: y.clientX - r[f].x * w, y: y.clientY - r[f].y * w }, _ = !1, d.setPointerCapture(y.pointerId);
      }), d.addEventListener("pointermove", (y) => {
        if (!$) return;
        if (c.gesturing()) {
          $ = null, _ = !0;
          return;
        }
        const { scale: w } = c.transform(), u = (y.clientX - $.x) / w, v = (y.clientY - $.y) / w;
        Math.hypot(u - r[f].x, v - r[f].y) * w > rp && (_ = !0), r[f].x = r[f].fx = u, r[f].y = r[f].fy = v, i();
      });
      const m = () => {
        $ = null;
      };
      d.addEventListener("pointerup", m), d.addEventListener("pointercancel", m), d.addEventListener("click", (y) => {
        y.stopPropagation(), _ || a(f);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, f) => c.centreOn(d, f, ap)
    };
  }
}
function gp(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, d) => {
    c.forEach((f, $) => {
      const _ = 2 * Math.PI * $ / Math.max(1, c.length) - Math.PI / 2;
      f.x = i + d * Math.cos(_), f.y = s + d * Math.sin(_), f.fx = r === "Force-directed" ? void 0 : f.x, f.fy = r === "Force-directed" ? void 0 : f.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of o)
      c.get(w.from["gufe-key"]).push(w.to["gufe-key"]), c.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const d = new Map(e.map((w) => [w["gufe-key"], w])), f = e.reduce(
      (w, u) => c.get(u["gufe-key"]).length > c.get(w["gufe-key"]).length ? u : w
    ), $ = /* @__PURE__ */ new Set([f["gufe-key"]]);
    let _ = [f["gufe-key"]], m = 0;
    const y = Math.min(t, n) * 0.18;
    for (; _.length; ) {
      a(
        _.map((u) => d.get(u)),
        m === 0 ? 0 : m * y + 40
      );
      const w = [];
      for (const u of _)
        for (const v of c.get(u))
          $.has(v) || ($.add(v), w.push(v));
      _ = w, m++;
    }
    a(e.filter((w) => !$.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function yp(e, t, n, r) {
  let o;
  try {
    if (o = await ea(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance((c) => Ce.linkBaseDistance + (1 - (c.score ?? 0.5)) * Ce.linkScoreBonus).strength(Ce.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Ce.chargeStrength).distanceMin(Ce.chargeDistanceMin).distanceMax(Ce.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Ce.centerStrength)).force("collision", o.forceCollide(Ne + Ce.collisionPadding).iterations(Ce.collisionIterations)).force("x", o.forceX(n / 2).strength(Ce.drift)).force("y", o.forceY(r / 2).strength(Ce.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * Ce.tickMultiplier; c++) s.tick();
  return !0;
}
Ee("gufe-ligand-network", mp);
const $p = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function ba(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Ke(t, o);
    i && ($p.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function vp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const ws = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], bp = 0.4;
class wp extends xe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = ba(n, kt(n)), o = r.structures.map((m, y) => y), i = r.ligands.map((m, y) => r.structures.length + y), s = ut(
      "complex.focus",
      "site",
      ws.map((m) => m.id)
    );
    let a = s.get(), c = null;
    const d = da({
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
      restyle: f,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () => [
        Wn(
          ws,
          a,
          (m) => {
            a = m, $();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => $()
    });
    function f() {
      const m = d.viewer();
      m && (Br(m, d.opts, c, d.showStatus, { model: o }), tf(m, { model: i }), m.render());
    }
    function $() {
      const m = d.viewer();
      m && (a === "site" && i.length ? (m.zoomTo({ model: i }), m.zoom(bp)) : m.zoomTo(), m.render(), _());
    }
    function _() {
      const m = d.viewer();
      m && (d.interaction()?.cleanup(), d.setInteraction(ir(d.pane.container, m)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(_s(r, () => c));
    try {
      c = ca(r.structures[0].pdb), d.setStats(_s(r, () => c));
    } catch (m) {
      d.showStatus(`PDB parse error: ${ge(m)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), rr().then(() => {
      const m = Qe.createViewer(d.pane.container, { backgroundColor: lt.viewer });
      d.setViewer(m);
      for (const y of r.structures) m.addModel(y.pdb, "pdb");
      for (const y of r.ligands) m.addModel(ia(y.sdf), "sdf");
      f(), d.restoreCamera() ? _() : $(), m.spin(d.opts.spin ? "y" : !1), m.render();
    }).catch((m) => {
      d.showStatus(`Failed to render structure: ${ge(m)}`, "error");
    }), d.handle;
  }
}
function _s(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = po(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...la(o)] : [r];
}
Ee("gufe-complex", wp);
function _p(e, t) {
  return {
    ...e,
    registry: mo(t, Object.values(e.components ?? {}))
  };
}
const Sp = "chemical-system.component", Cp = 460, kp = 200, xp = "35%";
function Ep(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function Pp(e) {
  return e.type === "UnknownComponentViz" ? Yn(e.gufe_type) : null;
}
function Ss(e) {
  return F(
    "div",
    `padding:10px 10px 16px;font-weight:${me.bold};font-size:${Z.title};color:${O.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class Ap extends xe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = kt(n), o = [], i = [];
    for (const [N, I] of Object.entries(n.components ?? {})) {
      const T = Ke(r, I);
      T ? o.push([N, T]) : i.push(N);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(Ss(s)), t.appendChild(
        pe(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = F(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), i.length && dt(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const c = F(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.panelBg};`
    );
    a.appendChild(c), c.appendChild(Ss(s));
    const d = F(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(d);
    const f = F(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(f);
    const $ = F(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    f.appendChild($);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", _.setAttribute(zr, ""), $.appendChild(_);
    const m = ba(n, r), y = vp(m), w = (N) => y && m.structures.some(
      (I) => I === N
    ), u = o.filter(([, N]) => !w(N)).map(([N, I]) => ({
      key: N,
      title: N,
      subtitle: Ep(I),
      badge: Pp(I),
      element: _,
      point: () => {
        _.payload = I;
      }
    }));
    if (y) {
      const N = document.createElement("gufe-complex");
      N.style.cssText = "flex:1;min-width:0;min-height:0;", N.setAttribute(zr, ""), N.payload = n, u.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${m.ligands.length === 1 ? m.ligands[0].name || "ligand" : "ligands"} in ${m.structures[0].name || "structure"}`,
        badge: null,
        element: N,
        point: () => {
        }
      });
    }
    let v = null;
    const h = (N) => {
      v !== N && ($.replaceChildren(N), v = N);
    }, C = _t(Sp), S = [], l = (N) => {
      S.forEach((I, T) => {
        const V = T === N;
        I.style.background = V ? O.cardBgActive : O.cardBg, I.style.borderColor = V ? O.cardBorderActive : O.cardBorder;
      }), u[N].point(), h(u[N].element);
    }, p = (N) => {
      C.set(u[N].key), l(N);
    };
    u.forEach((N, I) => {
      const T = F(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;max-width:100%;box-sizing:border-box;`
      );
      T.appendChild(
        F("span", `font-weight:700;color:${O.textPrimary};`, N.title)
      ), T.appendChild(
        F(
          "span",
          `font-size:${Z.small};color:${O.textMuted};`,
          N.subtitle
        )
      ), N.badge && T.appendChild(N.badge), T.onclick = () => p(I), S.push(T), d.appendChild(T);
    });
    const g = u.findIndex((N) => N.key === C.get());
    l(g < 0 ? 0 : g);
    let x = null;
    const P = Xn(a, (N) => {
      const I = N > 0 && N < Cp;
      I !== x && (x = I, a.style.flexDirection = I ? "column" : "row", c.style.flex = I ? "0 0 auto" : `0 0 ${kp}px`, c.style.maxHeight = I ? xp : "none", c.style.borderRight = I ? "none" : `1px solid ${O.splitBorder}`, c.style.borderBottom = I ? `1px solid ${O.splitBorder}` : "none", d.style.flexDirection = I ? "row" : "column", d.style.flexWrap = I ? "wrap" : "nowrap", v?.resize?.());
    });
    return {
      onResize: () => v?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        P(), v?.remove();
      }
    };
  }
}
Ee("gufe-chemical-system", Ap);
const Rp = 460, Mp = 210, Np = "42%";
function Tp(e, t) {
  const n = Se(t, e.stateA, "ChemicalSystemViz"), r = Se(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: mo(t, o) };
}
const yo = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function Op(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Fp(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function zp(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Ar(e, t, n) {
  const r = F(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${te.md};padding:5px ${te.lg};border-radius:${Te.md};background:${O.cardBg};border:1px solid ${O.cardBorder};`
  );
  n && r.appendChild(
    F(
      "span",
      `flex:0 0 auto;font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;color:${O.textMuted2};`,
      n
    )
  );
  const o = zp(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(F("span", `font-size:${Z.body};color:${O.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? O.cardBorder : yo[t];
  const i = F(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:600;color:${O.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Yn(o.type)), r;
}
function Ip(e, t, n, r) {
  const o = F("div", `display:flex;flex-direction:column;gap:${te.sm};min-width:0;`), i = F("div", `display:flex;align-items:center;gap:${te.md};min-width:0;`);
  i.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${yo[t]};`)
  );
  const s = F(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:${me.bold};color:${O.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Ar(n, t, null)), o) : (o.appendChild(Ar(n, t, "A")), o.appendChild(Ar(r, t, "B")), o);
}
function jp(e, t) {
  const n = Ke(t, e.componentA), r = Ke(t, e.componentB);
  return `${n ? tt(n) : "A"} to ${r ? tt(r) : "B"}`;
}
function Cs(e) {
  return F(
    "div",
    `font-weight:${me.bold};font-size:${Z.heading};color:${O.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function ks(e, t) {
  const n = F("div", `display:flex;align-items:baseline;gap:${te.md};min-width:0;font-size:${Z.small};`);
  return n.appendChild(F("span", `flex:0 0 auto;color:${O.textMuted};`, e)), n.appendChild(
    F("span", `min-width:0;font-weight:${me.bold};color:${O.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class Dp extends xe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = kt(n), o = Se(r, n.stateA, "ChemicalSystemViz"), i = Se(r, n.stateB, "ChemicalSystemViz"), s = Se(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const l = F("div", "padding:12px 14px;flex-shrink:0;");
      return l.appendChild(Cs(c)), t.appendChild(l), t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const d = Fp(o, i), f = F("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(f);
    const $ = F(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${O.panelBg};`
    );
    f.appendChild($);
    const _ = F("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    f.appendChild(_);
    const m = F("div", `display:flex;flex-direction:column;gap:${te.md};min-width:0;`);
    m.appendChild(Cs(c)), m.appendChild(ks("protocol", s?.gufe_type || s?.name || "-")), m.appendChild(ks("mappings", String(a.length))), $.appendChild(m);
    const y = F("div", `display:flex;flex-direction:column;gap:${te.xs};`);
    for (const [l, p] of [
      ["State A", o],
      ["State B", i]
    ])
      y.appendChild(
        F(
          "div",
          `min-width:0;font-size:${Z.small};font-weight:${me.bold};letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};overflow-wrap:anywhere;`,
          `${l}${p.name ? ` - ${p.name}` : ""}`
        )
      );
    $.appendChild(y);
    const w = /* @__PURE__ */ new Set();
    for (const l of d) {
      const p = o.components?.[l], g = i.components?.[l], x = Op(p, g);
      w.add(x), $.appendChild(
        Ip(
          l,
          x,
          Ke(r, p),
          Ke(r, g)
        )
      );
    }
    if (w.size > 1) {
      const l = F(
        "div",
        `display:flex;flex-wrap:wrap;gap:${te.lg} 12px;padding-top:${te.sm};font-size:${Z.small};color:${O.textMuted};`
      );
      for (const p of ["unchanged", "changed", "added", "removed"])
        w.has(p) && l.appendChild(Ze(p, "", yo[p]));
      $.appendChild(l);
    }
    const u = F("div", Ea, "Atom mapping");
    _.appendChild(u);
    let v = null;
    const h = Xn(t, (l) => {
      const p = l > 0 && l < Rp;
      p !== v && (v = p, f.style.flexDirection = p ? "column" : "row", $.style.flex = p ? "0 0 auto" : `0 0 ${Mp}px`, $.style.maxWidth = p ? "none" : Np, $.style.maxHeight = p ? "45%" : "none", $.style.borderRight = p ? "none" : `1px solid ${O.splitBorder}`, $.style.borderBottom = p ? `1px solid ${O.splitBorder}` : "none", u.style.display = p ? "block" : "none");
    });
    if (!a.length)
      return _.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const C = document.createElement("gufe-atom-mapping");
    C.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (l) => {
      C.payload = va(a[l], r);
    };
    if (S(0), a.length > 1) {
      const l = F(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      l.appendChild(
        Wn(
          a.map((p, g) => ({
            id: String(g),
            label: p.name || jp(p, r)
          })),
          "0",
          (p) => S(Number(p))
        )
      ), _.appendChild(l);
    }
    return _.appendChild(C), {
      onResize: () => C.resize?.(),
      cleanup: () => {
        h(), C.remove();
      }
    };
  }
}
Ee("gufe-transformation", Dp);
const Ye = { width: 148, height: 46, depictedHeight: 148, radius: 10 }, Je = { pad: 6, size: 96, radius: 6, inset: 4 }, xs = 200, st = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Rr = [
  { id: "structures", from: 0.35, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Lp = (e) => Rr.find((t) => e >= t.from) ?? Rr[Rr.length - 1], jn = 200, Dn = { width: 2, selectedWidth: 3.5, hit: 20 }, wt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Tt = { initial: 0.56, min: 0.25, max: 0.78 }, qp = 24, Es = { x: Ye.width / 2, y: Ye.depictedHeight / 2 }, Ps = { node: 0.12, edge: 0.06 }, Vp = 1.4, Bp = 3, Hn = tt;
function Mr(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function wa(e, t) {
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
const Up = (e, t) => wa(e, t).join(" + ");
function Hp(e, t) {
  const n = { fill: O.cardBg, stroke: O.cardBorder }, r = e.map((s) => Up(s, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > O.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const i = new Map(
    o.map((s, a) => [s, { fill: O.netGroupFill[a], stroke: O.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (s) => i.get(r[s]) ?? n,
    legend: o.map((s) => [s, i.get(s)])
  };
}
function Kp(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Ke(t, o);
    if (!i) continue;
    n.push(tt(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function Gp(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((i) => {
    const s = [];
    for (const a of Object.values(i.components ?? {})) {
      const c = Se(t, a, "SmallMoleculeComponentViz");
      if (!c) continue;
      let d = r.get(a);
      d === void 0 && (d = n.length, r.set(a, d), n.push(c.sdf ?? "")), s.push(d);
    }
    return s;
  });
  return { sources: n, perNode: o };
}
function Wp(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function Jp(e) {
  const t = _t("alchemical-network.query"), n = _t("alchemical-network.composition"), r = F("div", Kr), o = F("input", `${Gn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const i = $a({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: _t("alchemical-network.smarts"),
    run: (_) => e.match(_),
    describe: (_) => {
      const m = _.unreadable ? `, ${_.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${m}`;
    }
  });
  if (r.appendChild(i.element), e.compositions.length > 1) {
    const _ = F("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    _.appendChild(F("span", "flex-shrink:0;", "made of"));
    const m = It(
      [{ id: "", label: "anything" }, ...e.compositions.map((y) => ({ id: y, label: y }))],
      "",
      (y) => {
        e.filter.composition = y, $(), e.refresh();
      },
      n
    );
    m.style.cssText += "flex:1;min-width:0;", e.filter.composition = m.value, _.appendChild(m), r.appendChild(_);
  }
  const s = F("div", `font-size:${Z.small};color:${O.textMuted2};`);
  r.appendChild(s);
  const a = F("div", Rs);
  r.appendChild(a), r.appendChild(F("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`, go));
  const c = ua({
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
  const d = F("button", `${Ct}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), $(), e.refresh();
  }, r.appendChild(d);
  const f = (_) => {
    const m = e.query.text.trim().toLowerCase();
    if (m && !e.haystacks[_].includes(m) || e.filter.composition && e.signatures[_] !== e.filter.composition) return !1;
    const y = e.matched();
    return !(y && !y.has(_));
  }, $ = () => {
    c.clearNote(), a.replaceChildren();
    const _ = e.nodes.map((m, y) => ({ node: m, index: y })).filter(({ index: m }) => f(m));
    s.textContent = `${_.length} of ${e.nodes.length} systems`;
    for (const { node: m, index: y } of _) {
      const w = m["gufe-key"], u = e.selected.has(w), v = F(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? O.cardBorderActive : O.cardBorder};background:${u ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), h = e.colorOf(y);
      v.appendChild(
        F(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${h.fill};border:1px solid ${h.stroke};`
        )
      );
      const C = F("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Hn(m));
      C.title = `${Hn(m)}
${e.signatures[y]}`, v.appendChild(C), v.onclick = (S) => {
        S.shiftKey || S.metaKey || S.ctrlKey ? e.selected.has(w) ? e.selected.delete(w) : e.selected.add(w) : (e.selected.clear(), e.selected.add(w), e.focus(y)), $(), e.refresh();
      }, a.appendChild(v);
    }
    _.length || a.appendChild(F("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), $(), e.refresh();
  }, $(), e.mounted($), i.apply(), r;
}
function Yp(e, t, n) {
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
async function Xp(e, t, n, r) {
  let o;
  try {
    if (o = await ea(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance(wt.linkDistance).strength(wt.linkStrength)
  ).force("charge", o.forceManyBody().strength(wt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(wt.collisionRadius).iterations(wt.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * wt.tickMultiplier; c++) s.tick();
  return !0;
}
class Zp extends xe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = kt(n), o = [];
    let i = 0;
    for (const U of n.nodes ?? []) {
      const Q = Se(r, U, "ChemicalSystemViz");
      if (!Q) {
        i++;
        continue;
      }
      o.push({ ...Q, x: 0, y: 0 });
    }
    const s = new Map(o.map((U) => [U["gufe-key"], U])), a = [];
    let c = 0;
    for (const U of n.edges ?? []) {
      const Q = s.get(U.stateA), ne = s.get(U.stateB);
      if (!Q || !ne) {
        c++;
        continue;
      }
      a.push({ ...U, index: a.length, from: Q, to: ne });
    }
    const d = (U) => {
      const Q = Se(r, U.protocol, "ProtocolViz");
      return Q?.gufe_type || Q?.name || "";
    }, f = new Set(a.map(d).filter(Boolean)), $ = Jn(n.name || "Alchemical network");
    $.statsEl.appendChild(Ze("systems", String(o.length))), $.statsEl.appendChild(Ze("transformations", String(a.length))), f.size && $.statsEl.appendChild(Ze("protocol", [...f].join(", "))), t.appendChild($);
    const _ = Hp(o, r), m = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    let y = () => {
    };
    const w = /* @__PURE__ */ new Set(), u = { composition: "" }, v = { text: "" };
    let h = () => {
    }, C = () => {
    }, S = () => {
    };
    const l = o.map((U) => Kp(U, r));
    let p = null;
    const g = () => p ??= or().catch((U) => (console.warn("[gufe-viz] RDKit failed to load:", ge(U)), null)), x = Gp(o, r), P = ya(g, x.sources), N = o.map((U, Q) => {
      const ne = x.perNode[Q].map((z) => x.sources[z]).find((z) => z) ?? null, A = wa(U, r);
      return {
        colors: _.colorOf(Q),
        composition: A.join(" + "),
        besides: Wp(A, ne !== null, x.perNode[Q].length),
        sdf: ne
      };
    });
    let I = null, T = () => {
    };
    const V = async (U) => {
      const Q = await P.run(U);
      return Q.status === "superseded" || (I = Q.status === "ok" ? new Set(o.flatMap((ne, A) => x.perNode[A].some((z) => Q.matched.has(z)) ? [A] : [])) : null, T(), h()), Q;
    }, j = Zr(
      $,
      () => Jp({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: _.signatures,
        colorOf: _.colorOf,
        compositions: _.compositions,
        selected: w,
        filter: u,
        query: v,
        refresh: () => h(),
        matched: () => I,
        match: (U) => V(U),
        mounted: (U) => {
          T = U;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (U) => {
          C(U), S(U);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => y(),
        remember: ct("alchemical-network.menuOpen", !1)
      }
    );
    m.appendChild(j.panel);
    const K = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), Y = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.appBg};`), re = F("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    K.appendChild(re), m.appendChild(K), m.appendChild(
      qs(m, K, Y, {
        min: Tt.min,
        max: Tt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Gr("alchemical-network.canvasShare", Tt.initial, Tt.min, Tt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => y(),
        onOrient: (U) => Yr(j.panel, U)
      })
    ), m.appendChild(Y);
    const q = this.#e(Y, r);
    if (!o.length)
      return re.appendChild(
        pe(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), q.message("Nothing to show."), { cleanup: () => q.cleanup() };
    i && dt(
      re,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(
      re,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let W = !0, R = !1, E = null, D = () => {
    }, M = () => {
    }, b = () => {
    }, k = 0;
    K.appendChild(this.#n(_.legend, () => M()));
    const L = (U, Q) => {
      E = { kind: U, index: Q }, q.show(U === "node" ? o[Q] : a[Q], U), D();
    };
    S = (U) => L("node", U);
    const G = () => {
      const U = ++k, Q = re.clientWidth || 800, ne = re.clientHeight || 600;
      Yp(o, Q, ne);
      const A = () => {
        if (!W || U !== k) return;
        b(), re.querySelectorAll("svg").forEach((B) => B.remove());
        const z = this.#t(re, o, a, Q, ne, N, g, L);
        b = z.cleanup, M = z.reset, C = (B) => z.focusOn(B), D = () => z.setSelected(E), D(), h = () => {
          const B = v.text.trim().toLowerCase();
          if (!(w.size > 0 || B.length > 0 || u.composition !== "" || I !== null)) {
            z.setEmphasis(null, null);
            return;
          }
          const ee = B.length > 0 || u.composition !== "" || I !== null, X = /* @__PURE__ */ new Set();
          o.forEach((se, de) => {
            const fe = ee && (!B || l[de].includes(B)) && (!u.composition || _.signatures[de] === u.composition) && (!I || I.has(de));
            (w.has(se["gufe-key"]) || fe) && X.add(se["gufe-key"]);
          });
          const oe = /* @__PURE__ */ new Set();
          a.forEach((se, de) => {
            X.has(se.from["gufe-key"]) && X.has(se.to["gufe-key"]) && oe.add(de);
          }), z.setEmphasis(X, oe);
        }, h();
      };
      if (R) {
        A();
        return;
      }
      Xp(o, a, Q, ne).then((z) => {
        !W || U !== k || (z || (R = !0, dt(re, "d3 could not be loaded - showing the circular layout instead")), A());
      }, A);
    };
    return y = G, G(), L("node", 0), {
      onResize: () => G(),
      cleanup: () => {
        W = !1, b(), q.cleanup();
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
    const r = F("div", Ms.bottom);
    if (r.appendChild(uo(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(F("span", `font-size:${Z.small};color:${O.textMuted};`, "systems made of"));
    for (const [o, i] of t) {
      const s = F("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        F(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${i.fill};border:2px solid ${i.stroke};`
        )
      ), s.appendChild(
        F("span", `font-size:${Z.small};color:${O.textPrimary};overflow-wrap:anywhere;`, o)
      ), r.appendChild(s);
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
    const r = F("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const i = (a) => r.replaceChildren(pe(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = _p(ma(a), n);
      else {
        const { index: f, from: $, to: _, ...m } = a;
        d = Tp(m, n);
      }
      if (!d) {
        i("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = d, o.parentNode !== r && r.replaceChildren(o);
    }, message: i, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, i, s, a, c) {
    const d = le("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(d);
    const f = le("g");
    d.appendChild(f);
    const $ = le("g"), _ = le("g");
    f.append($, _);
    let m = () => {
    };
    const y = ha(d, f, {
      bounds: () => pa(n, Es.x, Es.y),
      margin: qp,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (q, W, R) => m(q, W, R)
    }), w = (q, W) => {
      y.wasPan() || c(q, W);
    }, u = [], v = [];
    r.forEach((q, W) => {
      const R = le("line", {
        x1: q.from.x,
        y1: q.from.y,
        x2: q.to.x,
        y2: q.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": Dn.width,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      cs(R, q.name || "transformation"), R.addEventListener("click", () => w("edge", W)), $.appendChild(R), u.push(R);
      const E = le("line", {
        x1: q.from.x,
        y1: q.from.y,
        x2: q.to.x,
        y2: q.to.y,
        stroke: "transparent",
        "stroke-width": Dn.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      E.addEventListener("click", () => w("edge", W)), $.appendChild(E), v.push(E);
    });
    const h = n.map(() => []), C = new Map(n.map((q, W) => [q, W]));
    r.forEach((q, W) => {
      const R = C.get(q.from), E = C.get(q.to);
      R !== void 0 && h[R].push(W), E !== void 0 && E !== R && h[E].push(W);
    });
    const S = [], l = [], p = [], g = [], x = [], P = [], N = [];
    n.forEach((q, W) => {
      const R = s[W], E = R.sdf ? Ye.depictedHeight : Ye.height, D = le("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${q.x},${q.y})`
      });
      p.push(D);
      const M = le("rect", {
        class: "gufe-node-box",
        x: -148 / 2,
        y: -E / 2,
        width: Ye.width,
        height: E,
        rx: Ye.radius,
        fill: R.colors.fill,
        stroke: R.colors.stroke,
        "stroke-width": 2
      });
      if (D.appendChild(M), S.push(M), l.push(R.colors.stroke), R.sdf) {
        const L = le("rect", {
          class: "gufe-node-plate",
          x: -48,
          y: -E / 2 + Je.pad,
          width: Je.size,
          height: Je.size,
          rx: Je.radius,
          fill: O.netDepictBg,
          display: "none",
          "pointer-events": "none"
        });
        D.appendChild(L), P.push(L);
        const G = le("g", { transform: `translate(0,${-E / 2 + Je.pad + Je.size / 2})` }), U = le("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        G.appendChild(U), D.appendChild(G), N.push(U);
      } else
        P.push(null), N.push(null);
      const b = le("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": st.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      b.textContent = Mr(Hn(q), st.nameChars), D.appendChild(b), g.push(b);
      const k = le("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": st.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      k.textContent = Mr(R.composition, st.subChars), D.appendChild(k), x.push(k), cs(D, `${Hn(q)} - ${R.composition}`), _.appendChild(D);
    });
    const I = (q) => {
      const W = n[q];
      p[q].setAttribute("transform", `translate(${W.x},${W.y})`);
      for (const R of h[q])
        for (const E of [u[R], v[R]])
          r[R].from === W && (E.setAttribute("x1", String(W.x)), E.setAttribute("y1", String(W.y))), r[R].to === W && (E.setAttribute("x2", String(W.x)), E.setAttribute("y2", String(W.y)));
    }, T = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), j = (q, W) => {
      if (T.has(W) || V.has(W)) return;
      const R = N[W], E = s[W].sdf;
      if (!R || !E) return;
      const D = ho(q, E, xs, Me.layout);
      if (!D || !ga(R, D, xs, Je.size - Je.inset * 2)) {
        V.add(W);
        return;
      }
      T.add(W);
    }, K = (q, W) => {
      const R = W && T.has(q);
      P[q]?.setAttribute("display", R ? "inline" : "none"), N[q]?.setAttribute("display", R ? "inline" : "none");
      const E = R ? Ye.depictedHeight : Ye.height;
      S[q].setAttribute("y", String(-E / 2)), S[q].setAttribute("height", String(E));
      const D = E / 2 - st.bottom;
      g[q].setAttribute("y", String(R ? D - st.gap : -2)), x[q].setAttribute("y", String(R ? D : 14));
      const M = s[q];
      x[q].textContent = Mr(R ? M.besides : M.composition, st.subChars);
    };
    let Y = null;
    return m = (q, W, R) => {
      const E = Lp(q);
      Y = E, d.setAttribute("data-detail", E.id);
      for (let M = 0; M < n.length; M++) K(M, E.structure);
      if (!E.structure) return;
      const D = [];
      n.forEach((M, b) => {
        if (!s[b].sdf || T.has(b) || V.has(b)) return;
        const k = M.x * q + W, L = M.y * q + R;
        k < -jn || L < -jn || k > o + jn || L > i + jn || D.push(b);
      }), D.length && a().then((M) => {
        if (!(!M || Y !== E))
          for (const b of D)
            j(M, b), K(b, !0);
      }).catch(() => {
      });
    }, p.forEach((q, W) => {
      let R = null, E = !1;
      q.addEventListener("pointerdown", (M) => {
        M.stopPropagation();
        const { scale: b } = y.transform();
        R = { x: M.clientX - n[W].x * b, y: M.clientY - n[W].y * b }, E = !1, q.setPointerCapture(M.pointerId);
      }), q.addEventListener("pointermove", (M) => {
        if (!R) return;
        if (y.gesturing()) {
          R = null, E = !0;
          return;
        }
        const { scale: b } = y.transform(), k = (M.clientX - R.x) / b, L = (M.clientY - R.y) / b;
        Math.hypot(k - n[W].x, L - n[W].y) * b > Bp && (E = !0), n[W].x = n[W].fx = k, n[W].y = n[W].fy = L, I(W);
      });
      const D = () => {
        R = null;
      };
      q.addEventListener("pointerup", D), q.addEventListener("pointercancel", D), q.addEventListener("click", (M) => {
        M.stopPropagation(), E || c("node", W);
      });
    }), y.fit(), {
      setSelected(q) {
        S.forEach((W, R) => {
          const E = q?.kind === "node" && q.index === R;
          W.setAttribute("stroke", E ? O.cardBorderActive : l[R]), W.setAttribute("stroke-width", E ? "3" : "2");
        }), u.forEach((W, R) => {
          const E = q?.kind === "edge" && q.index === R;
          W.setAttribute("stroke", E ? O.netHaloColor : O.netEdgeLine), W.setAttribute("stroke-width", String(E ? Dn.selectedWidth : Dn.width));
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
        p.forEach((R, E) => {
          const D = !q || q.has(n[E]["gufe-key"]);
          R.setAttribute("opacity", D ? "1" : String(Ps.node));
        }), u.forEach((R, E) => {
          const D = !W || W.has(E);
          R.setAttribute("opacity", D ? "1" : String(Ps.edge));
        });
      },
      focusOn(q) {
        const W = n[q];
        W && y.centreOn(W.x, W.y, Vp);
      },
      reset: y.reset,
      cleanup: y.cleanup
    };
  }
}
Ee("gufe-alchemical-network", Zp);
class Qp extends xe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Jn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Yn(n.gufe_type)), t.appendChild(r);
    const o = F(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = Wr();
    return i.style.maxWidth = "460px", i.appendChild(Vn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Vn("Name", n.name)), i.appendChild(
      F(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Ee("gufe-protocol", Qp);
function eh(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Nr(e, t = !1) {
  const n = F(
    "div",
    `display:flex;flex-direction:column;gap:${te.xl};padding:${te.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${O.splitBorder};`)
  );
  return n.appendChild(F("div", Or, e)), n;
}
function Ln(e) {
  return F(
    "div",
    `font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
    e
  );
}
function As(e, t) {
  const n = F("div", `display:flex;flex-direction:column;align-items:center;gap:${te.sm};`);
  return n.appendChild(
    F(
      "span",
      `${Re.plain}${Re.outline}font-family:${Z.mono};font-size:${Z.body};`,
      e
    )
  ), n.appendChild(Ln(t)), n;
}
class th extends xe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = F(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Wr();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = Nr("Solvent", !0), s = F("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = F("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = F(
      "div",
      `font-family:${Z.mono};font-size:${Z.display};font-weight:${me.bold};line-height:1.1;color:${O.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Ln("SMILES")), s.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const h = F("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      h.appendChild(
        F(
          "div",
          `font-size:${Z.body};color:${O.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), h.appendChild(Ln("Name")), s.appendChild(h);
    }
    i.appendChild(s), o.appendChild(i);
    const f = Nr("Ions"), $ = F("div", `display:flex;align-items:flex-end;gap:${te.xxl};flex-wrap:wrap;`);
    n.positive_ion && $.appendChild(As(n.positive_ion, "cation")), n.negative_ion && $.appendChild(As(n.negative_ion, "anion"));
    const { value: _, unit: m } = eh(n.ion_concentration), y = F("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), w = F("div", `display:flex;align-items:baseline;gap:${te.md};justify-content:flex-end;`);
    w.appendChild(
      F(
        "div",
        `font-size:${Z.display};font-weight:${me.bold};line-height:1;color:${O.titleColor};`,
        _
      )
    ), m && (w.appendChild(document.createTextNode(" ")), w.appendChild(F("div", `font-size:${Z.body};color:${O.textMuted};`, m))), y.appendChild(w), y.appendChild(Ln("Ion concentration")), $.appendChild(y), f.appendChild($), o.appendChild(f);
    const u = Nr("Net charge"), v = n.neutralize;
    return u.appendChild(
      F(
        "span",
        `${Re.plain}align-self:flex-start;font-weight:${me.bold};` + (v ? `background:${O.okBg};color:${O.okFg};` : `${Re.outline}color:${O.textMuted};`),
        v ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      F(
        "div",
        Fr,
        v ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
Ee("gufe-solvent", th);
class nh extends xe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Jn(n.name || "Unnamed component");
    r.statsEl.appendChild(Yn(n.gufe_type)), t.appendChild(r);
    const o = F("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = Wr();
    return i.style.maxWidth = "460px", i.appendChild(
      F(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      F(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(Vn("Name", n.name || "(unnamed)")), i.appendChild(Vn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Ee("gufe-unknown-component", nh);
function ch(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Fs, reset: Ka });
export {
  ac as CHROME_OPEN_BY_DEFAULT,
  Oa as DEBUG_ATTRIBUTE,
  Fa as DEBUG_GLOBAL,
  Pu as DEFAULT_DEPICT_STYLE,
  Xd as DEFAULT_ZOOM_BOUNDS,
  Me as DEPICT_STYLE,
  Ou as DEPICT_STYLE_RANGES,
  Zp as GufeAlchemicalNetwork,
  qf as GufeAtomMapping,
  Ap as GufeChemicalSystem,
  wp as GufeComplex,
  xe as GufeElement,
  mp as GufeLigandNetwork,
  rf as GufeProtein,
  Qp as GufeProtocol,
  Xu as GufeSmallMolecule,
  th as GufeSolvent,
  Dp as GufeTransformation,
  nh as GufeUnknownComponent,
  Hd as GufeView,
  zr as HIDE_NAME_ATTRIBUTE,
  br as MAPPING_COLORS,
  tu as MAPPING_RAMP_3D,
  ah as MAPPING_RAMP_NAME,
  go as MULTI_SELECT_HINT,
  rh as PAYLOAD_TYPES,
  oh as SCHEMA_TYPES,
  ao as VIEW_TAGS,
  Cf as align2D,
  Ef as alignedToPartner,
  Sf as applyRT,
  kf as applyTurn,
  Qd as boundedZoom,
  kt as buildRegistry,
  ut as choice,
  Zr as chromeMenu,
  Wd as claimGestures,
  ba as complexPartsFor,
  Ts as debugEnabled,
  Ee as defineElement,
  Zs as describeProblem,
  Op as diffStatus,
  sh as dispatchProblem,
  mo as entriesFor,
  tt as entryLabel,
  ua as exportBlock,
  pa as extentOf,
  ct as flag,
  Bd as formatIssues,
  ta as guardWheel,
  vp as hasComplex,
  If as inFrameOf,
  _f as kabsch,
  fs as laidOut,
  Pf as layoutPair,
  jf as liftFor,
  Da as logPayload,
  Ke as lookup,
  Se as lookupOfType,
  va as mappingPayloadFor,
  Qi as markGroups,
  wr as markedBonds,
  ch as mount,
  Jr as nameWanted,
  zu as normaliseDepictStyle,
  Gr as num,
  Xn as onWidth,
  Df as openfeShift,
  Yr as orientMenuPanel,
  Lf as pairColour,
  Xi as parseAtomSpec,
  ja as payloadJson,
  uo as resetControl,
  Ka as resetSettings,
  ha as sceneCamera,
  of as selectionText,
  Kn as setting,
  Fs as settings,
  qs as splitter,
  _p as systemPayloadFor,
  _t as textSetting,
  Tp as transformationPayloadFor,
  hs as uniqueAtoms,
  ju as uniqueBonds,
  ih as validateAs,
  Vd as validatePayload,
  ir as viewerInteraction,
  na as wheelFactor,
  xf as withCoords
};
