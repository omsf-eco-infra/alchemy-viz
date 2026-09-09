const nt = {
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
function Ia() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Ds = Ia(), M = Ds ? nt.dark : nt.light, Q = {
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
}, te = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Fe = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, Le = {
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, jt = {
  card: M.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg
}, ve = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${te.sm} 9px;font-size:${Q.small};font-weight:${ge.bold};border-radius:${Fe.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, ja = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${Fe.md};padding:${te.sm} ${te.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, Ls = "24px", Da = `display:flex;align-items:flex-start;gap:12px;padding:9px ${te.xxl};flex-shrink:0;line-height:${Ls};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Un = { min: "236px", max: "340px" }, Qe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Qr = `display:flex;flex-direction:column;gap:${te.lg};flex:1;min-width:var(${Qe.min},${Un.min});max-width:var(${Qe.max},${Un.max});box-sizing:border-box;padding:${te.xl};min-height:0;overflow-y:auto;background:${M.panelBg};border:0 solid ${M.splitBorder};border-right-width:var(${Qe.ruleX},1px);border-bottom-width:var(${Qe.ruleY},0);`, La = "45%", qs = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Vs = {
  bottom: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, qa = `flex-shrink:0;padding:${te.sm} ${te.xl};font-size:${Q.heading};font-weight:${ge.bold};color:${M.labelFg};background:${M.labelBg};`, Dr = `position:absolute;top:${te.md};left:${te.md};z-index:10;pointer-events:none;max-width:calc(100% - ${te.xxl} - ${te.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${te.xs} ${te.lg};border-radius:${Fe.md};font-size:${Q.heading};font-weight:${ge.bold};color:${M.labelFg};background:${M.labelBg};`, Va = `padding:${te.xs} ${te.lg};border-radius:${Fe.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${M.labelFg};background:${M.labelBg};`, Ba = `position:absolute;top:${te.lg};left:${te.lg};z-index:15;display:flex;align-items:center;gap:${te.md};min-width:0;max-width:calc(100% - ${te.xxl} - ${te.xxl});`, Ua = "42px", Ka = `display:flex;flex-direction:column;gap:${te.xs};padding:${te.xxl} 18px;border-radius:${Fe.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Bs = `position:absolute;bottom:${te.xl};right:${te.xl};display:flex;gap:${te.sm};padding:${te.sm};border-radius:${Fe.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Ha = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${M.textMuted};`, Lr = `font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, Me = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${te.xs} ${te.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${te.xs} ${te.md};border:1px solid transparent;border-radius:${Fe.pill};font-family:inherit;font-size:${Q.small};color:${M.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${M.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${M.btnBg};border-color:${M.btnBorder};color:${M.textPrimary};`,
  active: `cursor:pointer;background:${M.cardBgActive};border-color:${M.btnBorder};color:${M.textPrimary};`
}, qr = `font-size:${Q.small};line-height:1.6;color:${M.textMuted2};`, Ga = ["debug", "gufe-debug"], Wa = "debug", Ja = "GUFE_VIZ_DEBUG";
function Ya() {
  return !!globalThis[Ja];
}
function Xa() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Ga.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Us(e) {
  return e?.hasAttribute?.(Wa) ? !0 : Ya() || Xa();
}
function Za(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ye(t)}>`;
  }
}
function Qa(e, t, n) {
  if (!Us(n)) return;
  const r = Za(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ks = "GUFE_VIZ_VIEW_STATE";
function ec(e) {
  const t = globalThis[Ks];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const tc = 150, xo = "data-gufe-shell";
class Pe extends HTMLElement {
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${xo}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), tc);
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
    return this.#s(), this.#t = O(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
    ), this.#t.setAttribute(xo, ""), this.appendChild(this.#t), this.#t;
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
      t.appendChild(me(this.placeholder()));
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(me(`Failed to render: ${ye(r)}`, !0)));
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
function Ae(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const xe = "gufe-viz:", rt = /* @__PURE__ */ new Map();
let qt = null;
function nc() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Dt() {
  if (qt === !1) return null;
  const e = nc();
  if (!e)
    return qt = !1, null;
  try {
    const t = `${xe}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), qt = !0, e;
  } catch {
    return qt = !1, null;
  }
}
function rc(e) {
  const t = Dt();
  if (!t) return rt.get(xe + e) ?? null;
  try {
    return t.getItem(xe + e);
  } catch {
    return null;
  }
}
function oc(e, t) {
  const n = Dt();
  if (!n) {
    rt.set(xe + e, t);
    return;
  }
  try {
    n.setItem(xe + e, t);
  } catch {
    rt.set(xe + e, t);
  }
}
function Jn(e, t, n) {
  return {
    key: e,
    get() {
      const r = rc(e);
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
        oc(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ft(e, t, n) {
  return Jn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function dt(e, t) {
  return Jn(e, t, (n) => typeof n == "boolean");
}
function eo(e, t, n = -1 / 0, r = 1 / 0) {
  return Jn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Ct(e, t = "") {
  return Jn(e, t, (n) => typeof n == "string");
}
function Hs() {
  const e = {}, t = Dt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(rt.keys());
  for (const r of n) {
    if (!r.startsWith(xe)) continue;
    const o = t ? t.getItem(r) : rt.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(xe.length)] = JSON.parse(o);
      } catch {
        e[r.slice(xe.length)] = o;
      }
  }
  return e;
}
function ic() {
  const e = {}, t = Dt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(rt.keys());
  for (const r of n) {
    if (!r.startsWith(xe)) continue;
    const o = t ? t.getItem(r) : rt.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function sc() {
  const e = Dt();
  if (e)
    for (const t of Object.keys(Hs()))
      try {
        e.removeItem(xe + t);
      } catch {
      }
  rt.clear();
}
const Gs = "https://framejs.app", Ws = 1e4;
function ac(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const cc = "/gufe-dev-bundle.js";
function lc() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Ws ? e : null;
}
async function dc() {
  const e = lc();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(cc);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Ws ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function uc() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function fc(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(xe)};`,
    `  const menuOpen = ${JSON.stringify(oo)};`,
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
    `globalThis[${JSON.stringify(Ks)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function pc(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...fc(n),
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
function hc(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(ic()))
    o.endsWith(oo) || (r[o] = i);
  return { settings: r, views: t };
}
const mc = (e) => `${Gs}/j/${e}`, gc = (e) => `${Gs}/j/${e}.json`;
async function yc(e, t, n) {
  await fetch(gc(e), {
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
function $c(e) {
  if (!Us()) return;
  const t = O(
    "div",
    `display:flex;flex-direction:column;gap:${te.md};padding-top:${te.lg};border-top:1px dashed ${M.splitBorder};`
  );
  t.appendChild(
    O(
      "div",
      `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
      "debug"
    )
  );
  const n = O("button", `${ve.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? M.errorFg : M.textMuted2;
  }, i = (s, a) => {
    const c = O("a", `color:${M.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(O("div", `padding-top:${te.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const s = ac(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = hc(s), d = window.open("", "_blank"), p = uc(), v = a, w = String(v.name || v.type || "gufe-viz"), y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), dc().then((_) => {
      if (!_) {
        d?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return yc(p, pc(_.js, a, c), w).then(() => {
        y();
        const b = mc(p);
        d && (d.location.href = b), i(b, _.note);
      });
    }).catch((_) => {
      y(), d?.close(), o(`Upload failed: ${_ instanceof Error ? _.message : String(_)}`, !0);
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
function Je(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ye(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Pt = (e) => e.toLocaleString("en-US"), lt = "-", Et = ve.base, Yn = ja;
function Xn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = O("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), i = e.map((s) => {
    const a = O("button", Et, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ve.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ve.bgActive : ve.bg;
    }, a.onclick = () => {
      o.setActive(s.id), r?.set(s.id), n(s.id);
    }, o.appendChild(a), { id: s.id, btn: a };
  });
  return o.setActive = (s) => {
    t = s, i.forEach((a) => {
      a.btn.style.background = a.id === t ? ve.bgActive : ve.bg;
    });
  }, o.setActive(t), o;
}
const vc = parseFloat(te.xl) * 2;
function Js(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const v = o.get();
    e.some((w) => w.id === v) && (t = v);
  }
  const i = O("div", "display:flex;min-width:0;"), s = (v) => {
    i.setActive(v), o?.set(v), n(v);
  }, a = Xn(e, t, s), c = Lt(e, t, s);
  c.style.display = "none", i.appendChild(a), i.appendChild(c), i.buttons = a, i.setActive = (v) => {
    t = v, a.setActive(v), c.value = v;
  };
  let d = !1;
  i.setCompact = (v) => {
    v !== d && (d = v, a.style.display = d ? "none" : "flex", c.style.display = d ? "" : "none", r.onLayout?.(d));
  };
  let p = () => {
  };
  if (r.fit) {
    const { pane: v, bar: w } = r.fit;
    let y = 0;
    p = er(v, (_) => {
      d || (y = w.offsetWidth || y), y && i.setCompact(y > _ - vc);
    });
  }
  return i.cleanup = () => p(), i;
}
function Lt(e, t, n, r) {
  const o = O("select", Yn);
  for (const s of e) {
    const a = O("option", "", s.label);
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
function Ys(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = O("button", Et, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? ve.bgActive : ve.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
function et(e, t, n) {
  const r = O("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    O("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = O("span");
  return o.innerHTML = `${Je(e)} <b style="color:${Le.primary};">${Je(t)}</b>`, r.appendChild(o), r;
}
function ut(e, t) {
  const n = O("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${te.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${te.md} ${te.xxl};border-radius:${Fe.md};font-size:${Q.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function me(e, t = !1) {
  return O(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? Le.error : Le.faint};`,
    e
  );
}
function Zn(e) {
  const t = O("div", Da);
  return t.className = "gufe-header", t.titleEl = O(
    "span",
    `font-weight:${ge.bold};font-size:${Q.title};color:${Le.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = O(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${Le.muted};`
  ), t.textEl = O("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = O("div", `display:flex;align-items:center;height:${Ls};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Kn(e, t, n = !1) {
  const r = O("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    O(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${Le.faint};`,
      e
    )
  );
  const o = O(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Le.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Qn(e) {
  return O(
    "span",
    `padding:1px 7px;border-radius:${Fe.xl};font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function to() {
  return O("div", Ka);
}
function Xs() {
  const e = O("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = O("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Vr = "data-gufe-hide-name";
function no(e) {
  return !e.closest(`[${Vr}]`);
}
function er(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const Po = { min: 0.2, max: 0.8 }, bc = 5;
function Zs(e, t, n, r = {}) {
  const o = r.min ?? Po.min, i = r.max ?? Po.max, s = O(
    "div",
    `flex:0 0 ${bc}px;align-self:stretch;touch-action:none;background:${M.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (_) => {
    a = _, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const _ = e.getBoundingClientRect();
    return _.height > _.width;
  };
  let p = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const v = () => {
    t.style.flex = `1 1 ${(p * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - p) * 100).toFixed(2)}%`;
  };
  v(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const b = d();
    b !== a && (c(b), r.onResize?.(p));
  }).observe(e);
  let w = !1;
  s.addEventListener("pointerdown", (_) => {
    w = !0, s.setPointerCapture(_.pointerId), _.preventDefault();
  }), s.addEventListener("pointermove", (_) => {
    if (!w) return;
    const b = e.getBoundingClientRect(), u = a ? b.height : b.width;
    if (u <= 0) return;
    const $ = a ? _.clientY - b.top : _.clientX - b.left;
    p = Math.min(i, Math.max(o, $ / u)), v();
  });
  const y = (_) => {
    w && (w = !1, s.releasePointerCapture(_.pointerId), r.remember?.set(p), r.onResize?.(p));
  };
  return s.addEventListener("pointerup", y), s.addEventListener("pointercancel", y), s;
}
function ro(e, t) {
  e.style.setProperty(Qe.min, t ? "0" : Un.min), e.style.setProperty(Qe.max, t ? "none" : Un.max), e.style.setProperty(Qe.ruleX, t ? "0" : "1px"), e.style.setProperty(Qe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? La : "";
}
const wc = !1, oo = ".menuOpen";
function _c() {
  const e = O("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Sc = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: _c
}, Cc = Sc.openFreeEnergy;
function io(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? wc, o = !1;
  const i = O("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = O("button", `${ve.base}display:inline-flex;align-items:center;gap:${te.md};padding:${te.sm} ${te.lg};`);
  s.appendChild(Cc()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), $c(i)), i.style.display = r ? "flex" : "none", s.style.background = r ? ve.bgActive : ve.bg, s.setAttribute("aria-expanded", String(r));
  }, c = (p) => {
    p !== r && (r = p, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r), s.onmouseover = () => {
    s.style.background = r ? ve.bgActive : ve.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ve.bgActive : ve.bg;
  };
  const d = "toggleEl" in e ? e : null;
  return d && (d.toggleEl.style.marginRight = "2px"), (d ? d.toggleEl : e).appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: c
  };
}
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vt = { exports: {} }, pr = {}, Ve = {}, st = {}, hr = {}, mr = {}, gr = {}, Ao;
function Hn() {
  return Ao || (Ao = 1, (function(e) {
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
        return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((k, S) => `${k}${S}`, "");
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((k, S) => (S instanceof n && (k[S.str] = (k[S.str] || 0) + 1), k), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o($, ...h) {
      const k = [$[0]];
      let S = 0;
      for (; S < h.length; )
        a(k, h[S]), k.push($[++S]);
      return new r(k);
    }
    e._ = o;
    const i = new r("+");
    function s($, ...h) {
      const k = [y($[0])];
      let S = 0;
      for (; S < h.length; )
        k.push(i), a(k, h[S]), k.push(i, y($[++S]));
      return c(k), new r(k);
    }
    e.str = s;
    function a($, h) {
      h instanceof r ? $.push(...h._items) : h instanceof n ? $.push(h) : $.push(v(h));
    }
    e.addCodeArg = a;
    function c($) {
      let h = 1;
      for (; h < $.length - 1; ) {
        if ($[h] === i) {
          const k = d($[h - 1], $[h + 1]);
          if (k !== void 0) {
            $.splice(h - 1, 3, k);
            continue;
          }
          $[h++] = "+";
        }
        h++;
      }
    }
    function d($, h) {
      if (h === '""')
        return $;
      if ($ === '""')
        return h;
      if (typeof $ == "string")
        return h instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof h != "string" ? `${$.slice(0, -1)}${h}"` : h[0] === '"' ? $.slice(0, -1) + h.slice(1) : void 0;
      if (typeof h == "string" && h[0] === '"' && !($ instanceof n))
        return `"${$}${h.slice(1)}`;
    }
    function p($, h) {
      return h.emptyStr() ? $ : $.emptyStr() ? h : s`${$}${h}`;
    }
    e.strConcat = p;
    function v($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : y(Array.isArray($) ? $.join(",") : $);
    }
    function w($) {
      return new r(y($));
    }
    e.stringify = w;
    function y($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function _($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : o`[${$}]`;
    }
    e.getProperty = _;
    function b($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function u($) {
      return new r($.toString());
    }
    e.regexpCode = u;
  })(gr)), gr;
}
var yr = {}, Ro;
function No() {
  return Ro || (Ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Hn();
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
      constructor({ prefixes: d, parent: p } = {}) {
        this._names = {}, this._prefixes = d, this._parent = p;
      }
      toName(d) {
        return d instanceof t.Name ? d : this.name(d);
      }
      name(d) {
        return new t.Name(this._newName(d));
      }
      _newName(d) {
        const p = this._names[d] || this._nameGroup(d);
        return `${d}${p.index++}`;
      }
      _nameGroup(d) {
        var p, v;
        if (!((v = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || v === void 0) && v.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(d, p) {
        super(p), this.prefix = d;
      }
      setValue(d, { property: p, itemIndex: v }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(p)}[${v}]`;
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
      value(d, p) {
        var v;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const w = this.toName(d), { prefix: y } = w, _ = (v = p.key) !== null && v !== void 0 ? v : p.ref;
        let b = this._values[y];
        if (b) {
          const h = b.get(_);
          if (h)
            return h;
        } else
          b = this._values[y] = /* @__PURE__ */ new Map();
        b.set(_, w);
        const u = this._scope[y] || (this._scope[y] = []), $ = u.length;
        return u[$] = p.ref, w.setValue(p, { property: y, itemIndex: $ }), w;
      }
      getValue(d, p) {
        const v = this._values[d];
        if (v)
          return v.get(p);
      }
      scopeRefs(d, p = this._values) {
        return this._reduceValues(p, (v) => {
          if (v.scopePath === void 0)
            throw new Error(`CodeGen: name "${v}" has no value`);
          return (0, t._)`${d}${v.scopePath}`;
        });
      }
      scopeCode(d = this._values, p, v) {
        return this._reduceValues(d, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, p, v);
      }
      _reduceValues(d, p, v = {}, w) {
        let y = t.nil;
        for (const _ in d) {
          const b = d[_];
          if (!b)
            continue;
          const u = v[_] = v[_] || /* @__PURE__ */ new Map();
          b.forEach(($) => {
            if (u.has($))
              return;
            u.set($, r.Started);
            let h = p($);
            if (h) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${k} ${$} = ${h};${this.opts._n}`;
            } else if (h = w?.($))
              y = (0, t._)`${y}${h}${this.opts._n}`;
            else
              throw new n($);
            u.set($, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(yr)), yr;
}
var Mo;
function ce() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ No();
    var r = /* @__PURE__ */ Hn();
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
    var o = /* @__PURE__ */ No();
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
      optimizeNames(m, C) {
        return this;
      }
    }
    class s extends i {
      constructor(m, C, A) {
        super(), this.varKind = m, this.name = C, this.rhs = A;
      }
      render({ es5: m, _n: C }) {
        const A = m ? n.varKinds.var : this.varKind, L = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${A} ${this.name}${L};` + C;
      }
      optimizeNames(m, C) {
        if (m[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, m, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(m, C, A) {
        super(), this.lhs = m, this.rhs = C, this.sideEffects = A;
      }
      render({ _n: m }) {
        return `${this.lhs} = ${this.rhs};` + m;
      }
      optimizeNames(m, C) {
        if (!(this.lhs instanceof t.Name && !m[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, m, C), this;
      }
      get names() {
        const m = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(m, this.rhs);
      }
    }
    class c extends a {
      constructor(m, C, A, L) {
        super(m, A, L), this.op = C;
      }
      render({ _n: m }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + m;
      }
    }
    class d extends i {
      constructor(m) {
        super(), this.label = m, this.names = {};
      }
      render({ _n: m }) {
        return `${this.label}:` + m;
      }
    }
    class p extends i {
      constructor(m) {
        super(), this.label = m, this.names = {};
      }
      render({ _n: m }) {
        return `break${this.label ? ` ${this.label}` : ""};` + m;
      }
    }
    class v extends i {
      constructor(m) {
        super(), this.error = m;
      }
      render({ _n: m }) {
        return `throw ${this.error};` + m;
      }
      get names() {
        return this.error.names;
      }
    }
    class w extends i {
      constructor(m) {
        super(), this.code = m;
      }
      render({ _n: m }) {
        return `${this.code};` + m;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(m, C) {
        return this.code = j(this.code, m, C), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends i {
      constructor(m = []) {
        super(), this.nodes = m;
      }
      render(m) {
        return this.nodes.reduce((C, A) => C + A.render(m), "");
      }
      optimizeNodes() {
        const { nodes: m } = this;
        let C = m.length;
        for (; C--; ) {
          const A = m[C].optimizeNodes();
          Array.isArray(A) ? m.splice(C, 1, ...A) : A ? m[C] = A : m.splice(C, 1);
        }
        return m.length > 0 ? this : void 0;
      }
      optimizeNames(m, C) {
        const { nodes: A } = this;
        let L = A.length;
        for (; L--; ) {
          const U = A[L];
          U.optimizeNames(m, C) || (Y(m, U.names), A.splice(L, 1));
        }
        return A.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((m, C) => T(m, C.names), {});
      }
    }
    class _ extends y {
      render(m) {
        return "{" + m._n + super.render(m) + "}" + m._n;
      }
    }
    class b extends y {
    }
    class u extends _ {
    }
    u.kind = "else";
    class $ extends _ {
      constructor(m, C) {
        super(C), this.condition = m;
      }
      render(m) {
        let C = `if(${this.condition})` + super.render(m);
        return this.else && (C += "else " + this.else.render(m)), C;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const m = this.condition;
        if (m === !0)
          return this.nodes;
        let C = this.else;
        if (C) {
          const A = C.optimizeNodes();
          C = this.else = Array.isArray(A) ? new u(A) : A;
        }
        if (C)
          return m === !1 ? C instanceof $ ? C : C.nodes : this.nodes.length ? this : new $(Z(m), C instanceof $ ? [C] : C.nodes);
        if (!(m === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(m, C) {
        var A;
        if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(m, C), !!(super.optimizeNames(m, C) || this.else))
          return this.condition = j(this.condition, m, C), this;
      }
      get names() {
        const m = super.names;
        return q(m, this.condition), this.else && T(m, this.else.names), m;
      }
    }
    $.kind = "if";
    class h extends _ {
    }
    h.kind = "for";
    class k extends h {
      constructor(m) {
        super(), this.iteration = m;
      }
      render(m) {
        return `for(${this.iteration})` + super.render(m);
      }
      optimizeNames(m, C) {
        if (super.optimizeNames(m, C))
          return this.iteration = j(this.iteration, m, C), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class S extends h {
      constructor(m, C, A, L) {
        super(), this.varKind = m, this.name = C, this.from = A, this.to = L;
      }
      render(m) {
        const C = m.es5 ? n.varKinds.var : this.varKind, { name: A, from: L, to: U } = this;
        return `for(${C} ${A}=${L}; ${A}<${U}; ${A}++)` + super.render(m);
      }
      get names() {
        const m = q(super.names, this.from);
        return q(m, this.to);
      }
    }
    class l extends h {
      constructor(m, C, A, L) {
        super(), this.loop = m, this.varKind = C, this.name = A, this.iterable = L;
      }
      render(m) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(m);
      }
      optimizeNames(m, C) {
        if (super.optimizeNames(m, C))
          return this.iterable = j(this.iterable, m, C), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class f extends _ {
      constructor(m, C, A) {
        super(), this.name = m, this.args = C, this.async = A;
      }
      render(m) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(m);
      }
    }
    f.kind = "func";
    class g extends y {
      render(m) {
        return "return " + super.render(m);
      }
    }
    g.kind = "return";
    class E extends _ {
      render(m) {
        let C = "try" + super.render(m);
        return this.catch && (C += this.catch.render(m)), this.finally && (C += this.finally.render(m)), C;
      }
      optimizeNodes() {
        var m, C;
        return super.optimizeNodes(), (m = this.catch) === null || m === void 0 || m.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(m, C) {
        var A, L;
        return super.optimizeNames(m, C), (A = this.catch) === null || A === void 0 || A.optimizeNames(m, C), (L = this.finally) === null || L === void 0 || L.optimizeNames(m, C), this;
      }
      get names() {
        const m = super.names;
        return this.catch && T(m, this.catch.names), this.finally && T(m, this.finally.names), m;
      }
    }
    class P extends _ {
      constructor(m) {
        super(), this.error = m;
      }
      render(m) {
        return `catch(${this.error})` + super.render(m);
      }
    }
    P.kind = "catch";
    class R extends _ {
      render(m) {
        return "finally" + super.render(m);
      }
    }
    R.kind = "finally";
    class I {
      constructor(m, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
` : "" }, this._extScope = m, this._scope = new n.Scope({ parent: m }), this._nodes = [new b()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(m) {
        return this._scope.name(m);
      }
      // reserves unique name in the external scope
      scopeName(m) {
        return this._extScope.name(m);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(m, C) {
        const A = this._extScope.value(m, C);
        return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
      }
      getScopeValue(m, C) {
        return this._extScope.getValue(m, C);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(m) {
        return this._extScope.scopeRefs(m, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(m, C, A, L) {
        const U = this._scope.toName(C);
        return A !== void 0 && L && (this._constants[U.str] = A), this._leafNode(new s(m, U, A)), U;
      }
      // `const` declaration (`var` in es5 mode)
      const(m, C, A) {
        return this._def(n.varKinds.const, m, C, A);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(m, C, A) {
        return this._def(n.varKinds.let, m, C, A);
      }
      // `var` declaration with optional assignment
      var(m, C, A) {
        return this._def(n.varKinds.var, m, C, A);
      }
      // assignment code
      assign(m, C, A) {
        return this._leafNode(new a(m, C, A));
      }
      // `+=` code
      add(m, C) {
        return this._leafNode(new c(m, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code(m) {
        return typeof m == "function" ? m() : m !== t.nil && this._leafNode(new w(m)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...m) {
        const C = ["{"];
        for (const [A, L] of m)
          C.length > 1 && C.push(","), C.push(A), (A !== L || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, L));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(m, C, A) {
        if (this._blockNode(new $(m)), C && A)
          this.code(C).else().code(A).endIf();
        else if (C)
          this.code(C).endIf();
        else if (A)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(m) {
        return this._elseNode(new $(m));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, u);
      }
      _for(m, C) {
        return this._blockNode(m), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(m, C) {
        return this._for(new k(m), C);
      }
      // `for` statement for a range of values
      forRange(m, C, A, L, U = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const B = this._scope.toName(m);
        return this._for(new S(U, B, C, A), () => L(B));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(m, C, A, L = n.varKinds.const) {
        const U = this._scope.toName(m);
        if (this.opts.es5) {
          const B = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${B}.length`, (G) => {
            this.var(U, (0, t._)`${B}[${G}]`), A(U);
          });
        }
        return this._for(new l("of", L, U, C), () => A(U));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(m, C, A, L = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(m, (0, t._)`Object.keys(${C})`, A);
        const U = this._scope.toName(m);
        return this._for(new l("in", L, U, C), () => A(U));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(h);
      }
      // `label` statement
      label(m) {
        return this._leafNode(new d(m));
      }
      // `break` statement
      break(m) {
        return this._leafNode(new p(m));
      }
      // `return` statement
      return(m) {
        const C = new g();
        if (this._blockNode(C), this.code(m), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(m, C, A) {
        if (!C && !A)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const L = new E();
        if (this._blockNode(L), this.code(m), C) {
          const U = this.name("e");
          this._currNode = L.catch = new P(U), C(U);
        }
        return A && (this._currNode = L.finally = new R(), this.code(A)), this._endBlockNode(P, R);
      }
      // `throw` statement
      throw(m) {
        return this._leafNode(new v(m));
      }
      // start self-balancing block
      block(m, C) {
        return this._blockStarts.push(this._nodes.length), m && this.code(m).endBlock(C), this;
      }
      // end the current self-balancing block
      endBlock(m) {
        const C = this._blockStarts.pop();
        if (C === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const A = this._nodes.length - C;
        if (A < 0 || m !== void 0 && A !== m)
          throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${m} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(m, C = t.nil, A, L) {
        return this._blockNode(new f(m, C, A)), L && this.code(L).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(f);
      }
      optimize(m = 1) {
        for (; m-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(m) {
        return this._currNode.nodes.push(m), this;
      }
      _blockNode(m) {
        this._currNode.nodes.push(m), this._nodes.push(m);
      }
      _endBlockNode(m, C) {
        const A = this._currNode;
        if (A instanceof m || C && A instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${m.kind}/${C.kind}` : m.kind}"`);
      }
      _elseNode(m) {
        const C = this._currNode;
        if (!(C instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = C.else = m, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const m = this._nodes;
        return m[m.length - 1];
      }
      set _currNode(m) {
        const C = this._nodes;
        C[C.length - 1] = m;
      }
    }
    e.CodeGen = I;
    function T(F, m) {
      for (const C in m)
        F[C] = (F[C] || 0) + (m[C] || 0);
      return F;
    }
    function q(F, m) {
      return m instanceof t._CodeOrName ? T(F, m.names) : F;
    }
    function j(F, m, C) {
      if (F instanceof t.Name)
        return A(F);
      if (!L(F))
        return F;
      return new t._Code(F._items.reduce((U, B) => (B instanceof t.Name && (B = A(B)), B instanceof t._Code ? U.push(...B._items) : U.push(B), U), []));
      function A(U) {
        const B = C[U.str];
        return B === void 0 || m[U.str] !== 1 ? U : (delete m[U.str], B);
      }
      function L(U) {
        return U instanceof t._Code && U._items.some((B) => B instanceof t.Name && m[B.str] === 1 && C[B.str] !== void 0);
      }
    }
    function Y(F, m) {
      for (const C in m)
        F[C] = (F[C] || 0) - (m[C] || 0);
    }
    function Z(F) {
      return typeof F == "boolean" || typeof F == "number" || F === null ? !F : (0, t._)`!${z(F)}`;
    }
    e.not = Z;
    const ne = D(e.operators.AND);
    function X(...F) {
      return F.reduce(ne);
    }
    e.and = X;
    const le = D(e.operators.OR);
    function J(...F) {
      return F.reduce(le);
    }
    e.or = J;
    function D(F) {
      return (m, C) => m === t.nil ? C : C === t.nil ? m : (0, t._)`${z(m)} ${F} ${z(C)}`;
    }
    function z(F) {
      return F instanceof t.Name ? F : (0, t._)`(${F})`;
    }
  })(mr)), mr;
}
var de = {}, To;
function ue() {
  if (To) return de;
  To = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.checkStrictMode = de.getErrorPath = de.Type = de.useFunc = de.setEvaluated = de.evaluatedPropsToName = de.mergeEvaluated = de.eachItem = de.unescapeJsonPointer = de.escapeJsonPointer = de.escapeFragment = de.unescapeFragment = de.schemaRefOrVal = de.schemaHasRulesButRef = de.schemaHasRules = de.checkUnknownRules = de.alwaysValidSchema = de.toHash = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Hn();
  function n(l) {
    const f = {};
    for (const g of l)
      f[g] = !0;
    return f;
  }
  de.toHash = n;
  function r(l, f) {
    return typeof f == "boolean" ? f : Object.keys(f).length === 0 ? !0 : (o(l, f), !i(f, l.self.RULES.all));
  }
  de.alwaysValidSchema = r;
  function o(l, f = l.schema) {
    const { opts: g, self: E } = l;
    if (!g.strictSchema || typeof f == "boolean")
      return;
    const P = E.RULES.keywords;
    for (const R in f)
      P[R] || S(l, `unknown keyword: "${R}"`);
  }
  de.checkUnknownRules = o;
  function i(l, f) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (f[g])
        return !0;
    return !1;
  }
  de.schemaHasRules = i;
  function s(l, f) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (g !== "$ref" && f.all[g])
        return !0;
    return !1;
  }
  de.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: f }, g, E, P) {
    if (!P) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${l}${f}${(0, e.getProperty)(E)}`;
  }
  de.schemaRefOrVal = a;
  function c(l) {
    return v(decodeURIComponent(l));
  }
  de.unescapeFragment = c;
  function d(l) {
    return encodeURIComponent(p(l));
  }
  de.escapeFragment = d;
  function p(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  de.escapeJsonPointer = p;
  function v(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  de.unescapeJsonPointer = v;
  function w(l, f) {
    if (Array.isArray(l))
      for (const g of l)
        f(g);
    else
      f(l);
  }
  de.eachItem = w;
  function y({ mergeNames: l, mergeToName: f, mergeValues: g, resultToName: E }) {
    return (P, R, I, T) => {
      const q = I === void 0 ? R : I instanceof e.Name ? (R instanceof e.Name ? l(P, R, I) : f(P, R, I), I) : R instanceof e.Name ? (f(P, I, R), R) : g(R, I);
      return T === e.Name && !(q instanceof e.Name) ? E(P, q) : q;
    };
  }
  de.mergeEvaluated = {
    props: y({
      mergeNames: (l, f, g) => l.if((0, e._)`${g} !== true && ${f} !== undefined`, () => {
        l.if((0, e._)`${f} === true`, () => l.assign(g, !0), () => l.assign(g, (0, e._)`${g} || {}`).code((0, e._)`Object.assign(${g}, ${f})`));
      }),
      mergeToName: (l, f, g) => l.if((0, e._)`${g} !== true`, () => {
        f === !0 ? l.assign(g, !0) : (l.assign(g, (0, e._)`${g} || {}`), b(l, g, f));
      }),
      mergeValues: (l, f) => l === !0 ? !0 : { ...l, ...f },
      resultToName: _
    }),
    items: y({
      mergeNames: (l, f, g) => l.if((0, e._)`${g} !== true && ${f} !== undefined`, () => l.assign(g, (0, e._)`${f} === true ? true : ${g} > ${f} ? ${g} : ${f}`)),
      mergeToName: (l, f, g) => l.if((0, e._)`${g} !== true`, () => l.assign(g, f === !0 ? !0 : (0, e._)`${g} > ${f} ? ${g} : ${f}`)),
      mergeValues: (l, f) => l === !0 ? !0 : Math.max(l, f),
      resultToName: (l, f) => l.var("items", f)
    })
  };
  function _(l, f) {
    if (f === !0)
      return l.var("props", !0);
    const g = l.var("props", (0, e._)`{}`);
    return f !== void 0 && b(l, g, f), g;
  }
  de.evaluatedPropsToName = _;
  function b(l, f, g) {
    Object.keys(g).forEach((E) => l.assign((0, e._)`${f}${(0, e.getProperty)(E)}`, !0));
  }
  de.setEvaluated = b;
  const u = {};
  function $(l, f) {
    return l.scopeValue("func", {
      ref: f,
      code: u[f.code] || (u[f.code] = new t._Code(f.code))
    });
  }
  de.useFunc = $;
  var h;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(h || (de.Type = h = {}));
  function k(l, f, g) {
    if (l instanceof e.Name) {
      const E = f === h.Num;
      return g ? E ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : E ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(l).toString() : "/" + p(l);
  }
  de.getErrorPath = k;
  function S(l, f, g = l.opts.strictSchema) {
    if (g) {
      if (f = `strict mode: ${f}`, g === !0)
        throw new Error(f);
      l.self.logger.warn(f);
    }
  }
  return de.checkStrictMode = S, de;
}
var Bt = {}, Oo;
function ze() {
  if (Oo) return Bt;
  Oo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
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
var Fo;
function tr() {
  return Fo || (Fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ue(), r = /* @__PURE__ */ ze();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: $ }) => $ ? (0, t.str)`"${u}" keyword must be ${$} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, $ = e.keywordError, h, k) {
      const { it: S } = u, { gen: l, compositeRule: f, allErrors: g } = S, E = v(u, $, h);
      k ?? (f || g) ? c(l, E) : d(S, (0, t._)`[${E}]`);
    }
    e.reportError = o;
    function i(u, $ = e.keywordError, h) {
      const { it: k } = u, { gen: S, compositeRule: l, allErrors: f } = k, g = v(u, $, h);
      c(S, g), l || f || d(k, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(u, $) {
      u.assign(r.default.errors, $), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if($, () => u.assign((0, t._)`${r.default.vErrors}.length`, $), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: $, schemaValue: h, data: k, errsCount: S, it: l }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const f = u.name("err");
      u.forRange("i", S, r.default.errors, (g) => {
        u.const(f, (0, t._)`${r.default.vErrors}[${g}]`), u.if((0, t._)`${f}.instancePath === undefined`, () => u.assign((0, t._)`${f}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${f}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${$}`), l.opts.verbose && (u.assign((0, t._)`${f}.schema`, h), u.assign((0, t._)`${f}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(u, $) {
      const h = u.const("err", $);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${r.default.vErrors}.push(${h})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, $) {
      const { gen: h, validateName: k, schemaEnv: S } = u;
      S.$async ? h.throw((0, t._)`new ${u.ValidationError}(${$})`) : (h.assign((0, t._)`${k}.errors`, $), h.return(!1));
    }
    const p = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function v(u, $, h) {
      const { createErrors: k } = u.it;
      return k === !1 ? (0, t._)`{}` : w(u, $, h);
    }
    function w(u, $, h = {}) {
      const { gen: k, it: S } = u, l = [
        y(S, h),
        _(u, h)
      ];
      return b(u, $, l), k.object(...l);
    }
    function y({ errorPath: u }, { instancePath: $ }) {
      const h = $ ? (0, t.str)`${u}${(0, n.getErrorPath)($, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, h)];
    }
    function _({ keyword: u, it: { errSchemaPath: $ } }, { schemaPath: h, parentSchema: k }) {
      let S = k ? $ : (0, t.str)`${$}/${u}`;
      return h && (S = (0, t.str)`${S}${(0, n.getErrorPath)(h, n.Type.Str)}`), [p.schemaPath, S];
    }
    function b(u, { params: $, message: h }, k) {
      const { keyword: S, data: l, schemaValue: f, it: g } = u, { opts: E, propertyName: P, topSchemaRef: R, schemaPath: I } = g;
      k.push([p.keyword, S], [p.params, typeof $ == "function" ? $(u) : $ || (0, t._)`{}`]), E.messages && k.push([p.message, typeof h == "function" ? h(u) : h]), E.verbose && k.push([p.schema, f], [p.parentSchema, (0, t._)`${R}${I}`], [r.default.data, l]), P && k.push([p.propertyName, P]);
    }
  })(hr)), hr;
}
var zo;
function Ec() {
  if (zo) return st;
  zo = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.boolOrEmptySchema = st.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ze(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: p } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${p}.errors`, null), c.return(!0));
  }
  st.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: d, schema: p } = a;
    p === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  st.boolOrEmptySchema = i;
  function s(a, c) {
    const { gen: d, data: p } = a, v = {
      gen: d,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(v, r, void 0, c);
  }
  return st;
}
var $e = {}, at = {}, Io;
function Qs() {
  if (Io) return at;
  Io = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.getRules = at.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  at.isJSONType = n;
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
  return at.getRules = r, at;
}
var Be = {}, jo;
function ea() {
  if (jo) return Be;
  jo = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.shouldUseRule = Be.shouldUseGroup = Be.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  Be.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  Be.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return Be.shouldUseRule = n, Be;
}
var Do;
function Gn() {
  if (Do) return $e;
  Do = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.reportTypeError = $e.checkDataTypes = $e.checkDataType = $e.coerceAndCheckDataType = $e.getJSONTypes = $e.getSchemaTypes = $e.DataType = void 0;
  const e = /* @__PURE__ */ Qs(), t = /* @__PURE__ */ ea(), n = /* @__PURE__ */ tr(), r = /* @__PURE__ */ ce(), o = /* @__PURE__ */ ue();
  var i;
  (function(h) {
    h[h.Correct = 0] = "Correct", h[h.Wrong = 1] = "Wrong";
  })(i || ($e.DataType = i = {}));
  function s(h) {
    const k = a(h.type);
    if (k.includes("null")) {
      if (h.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!k.length && h.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      h.nullable === !0 && k.push("null");
    }
    return k;
  }
  $e.getSchemaTypes = s;
  function a(h) {
    const k = Array.isArray(h) ? h : h ? [h] : [];
    if (k.every(e.isJSONType))
      return k;
    throw new Error("type must be JSONType or JSONType[]: " + k.join(","));
  }
  $e.getJSONTypes = a;
  function c(h, k) {
    const { gen: S, data: l, opts: f } = h, g = p(k, f.coerceTypes), E = k.length > 0 && !(g.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(h, k[0]));
    if (E) {
      const P = _(k, l, f.strictNumbers, i.Wrong);
      S.if(P, () => {
        g.length ? v(h, k, g) : u(h);
      });
    }
    return E;
  }
  $e.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(h, k) {
    return k ? h.filter((S) => d.has(S) || k === "array" && S === "array") : [];
  }
  function v(h, k, S) {
    const { gen: l, data: f, opts: g } = h, E = l.let("dataType", (0, r._)`typeof ${f}`), P = l.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && l.if((0, r._)`${E} == 'object' && Array.isArray(${f}) && ${f}.length == 1`, () => l.assign(f, (0, r._)`${f}[0]`).assign(E, (0, r._)`typeof ${f}`).if(_(k, f, g.strictNumbers), () => l.assign(P, f))), l.if((0, r._)`${P} !== undefined`);
    for (const I of S)
      (d.has(I) || I === "array" && g.coerceTypes === "array") && R(I);
    l.else(), u(h), l.endIf(), l.if((0, r._)`${P} !== undefined`, () => {
      l.assign(f, P), w(h, P);
    });
    function R(I) {
      switch (I) {
        case "string":
          l.elseIf((0, r._)`${E} == "number" || ${E} == "boolean"`).assign(P, (0, r._)`"" + ${f}`).elseIf((0, r._)`${f} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${E} == "boolean" || ${f} === null
              || (${E} == "string" && ${f} && ${f} == +${f})`).assign(P, (0, r._)`+${f}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${E} === "boolean" || ${f} === null
              || (${E} === "string" && ${f} && ${f} == +${f} && !(${f} % 1))`).assign(P, (0, r._)`+${f}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${f} === "false" || ${f} === 0 || ${f} === null`).assign(P, !1).elseIf((0, r._)`${f} === "true" || ${f} === 1`).assign(P, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${f} === "" || ${f} === 0 || ${f} === false`), l.assign(P, null);
          return;
        case "array":
          l.elseIf((0, r._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${f} === null`).assign(P, (0, r._)`[${f}]`);
      }
    }
  }
  function w({ gen: h, parentData: k, parentDataProperty: S }, l) {
    h.if((0, r._)`${k} !== undefined`, () => h.assign((0, r._)`${k}[${S}]`, l));
  }
  function y(h, k, S, l = i.Correct) {
    const f = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let g;
    switch (h) {
      case "null":
        return (0, r._)`${k} ${f} null`;
      case "array":
        g = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        g = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        g = E((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        g = E();
        break;
      default:
        return (0, r._)`typeof ${k} ${f} ${h}`;
    }
    return l === i.Correct ? g : (0, r.not)(g);
    function E(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, P, S ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  $e.checkDataType = y;
  function _(h, k, S, l) {
    if (h.length === 1)
      return y(h[0], k, S, l);
    let f;
    const g = (0, o.toHash)(h);
    if (g.array && g.object) {
      const E = (0, r._)`typeof ${k} != "object"`;
      f = g.null ? E : (0, r._)`!${k} || ${E}`, delete g.null, delete g.array, delete g.object;
    } else
      f = r.nil;
    g.number && delete g.integer;
    for (const E in g)
      f = (0, r.and)(f, y(E, k, S, l));
    return f;
  }
  $e.checkDataTypes = _;
  const b = {
    message: ({ schema: h }) => `must be ${h}`,
    params: ({ schema: h, schemaValue: k }) => typeof h == "string" ? (0, r._)`{type: ${h}}` : (0, r._)`{type: ${k}}`
  };
  function u(h) {
    const k = $(h);
    (0, n.reportError)(k, b);
  }
  $e.reportTypeError = u;
  function $(h) {
    const { gen: k, data: S, schema: l } = h, f = (0, o.schemaRefOrVal)(h, l, "type");
    return {
      gen: k,
      keyword: "type",
      data: S,
      schema: l.type,
      schemaCode: f,
      schemaValue: f,
      parentSchema: l,
      params: {},
      it: h
    };
  }
  return $e;
}
var At = {}, Lo;
function xc() {
  if (Lo) return At;
  Lo = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.assignDefaults = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, d) => r(o, d, c.default));
  }
  At.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: c, data: d, opts: p } = o;
    if (s === void 0)
      return;
    const v = (0, e._)`${d}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${v}`);
      return;
    }
    let w = (0, e._)`${v} === undefined`;
    p.useDefaults === "empty" && (w = (0, e._)`${w} || ${v} === null || ${v} === ""`), a.if(w, (0, e._)`${v} = ${(0, e.stringify)(s)}`);
  }
  return At;
}
var Ne = {}, he = {}, qo;
function Ie() {
  if (qo) return he;
  qo = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.validateUnion = he.validateArray = he.usePattern = he.callValidateCode = he.schemaProperties = he.allSchemaProperties = he.noPropertyInData = he.propertyInData = he.isOwnProperty = he.hasPropFunc = he.reportMissingProp = he.checkMissingProp = he.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ ue();
  function o(h, k) {
    const { gen: S, data: l, it: f } = h;
    S.if(p(S, l, k, f.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${k}` }, !0), h.error();
    });
  }
  he.checkReportMissingProp = o;
  function i({ gen: h, data: k, it: { opts: S } }, l, f) {
    return (0, e.or)(...l.map((g) => (0, e.and)(p(h, k, g, S.ownProperties), (0, e._)`${f} = ${g}`)));
  }
  he.checkMissingProp = i;
  function s(h, k) {
    h.setParams({ missingProperty: k }, !0), h.error();
  }
  he.reportMissingProp = s;
  function a(h) {
    return h.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  he.hasPropFunc = a;
  function c(h, k, S) {
    return (0, e._)`${a(h)}.call(${k}, ${S})`;
  }
  he.isOwnProperty = c;
  function d(h, k, S, l) {
    const f = (0, e._)`${k}${(0, e.getProperty)(S)} !== undefined`;
    return l ? (0, e._)`${f} && ${c(h, k, S)}` : f;
  }
  he.propertyInData = d;
  function p(h, k, S, l) {
    const f = (0, e._)`${k}${(0, e.getProperty)(S)} === undefined`;
    return l ? (0, e.or)(f, (0, e.not)(c(h, k, S))) : f;
  }
  he.noPropertyInData = p;
  function v(h) {
    return h ? Object.keys(h).filter((k) => k !== "__proto__") : [];
  }
  he.allSchemaProperties = v;
  function w(h, k) {
    return v(k).filter((S) => !(0, t.alwaysValidSchema)(h, k[S]));
  }
  he.schemaProperties = w;
  function y({ schemaCode: h, data: k, it: { gen: S, topSchemaRef: l, schemaPath: f, errorPath: g }, it: E }, P, R, I) {
    const T = I ? (0, e._)`${h}, ${k}, ${l}${f}` : k, q = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && q.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${T}, ${S.object(...q)}`;
    return R !== e.nil ? (0, e._)`${P}.call(${R}, ${j})` : (0, e._)`${P}(${j})`;
  }
  he.callValidateCode = y;
  const _ = (0, e._)`new RegExp`;
  function b({ gen: h, it: { opts: k } }, S) {
    const l = k.unicodeRegExp ? "u" : "", { regExp: f } = k.code, g = f(S, l);
    return h.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${f.code === "new RegExp" ? _ : (0, r.useFunc)(h, f)}(${S}, ${l})`
    });
  }
  he.usePattern = b;
  function u(h) {
    const { gen: k, data: S, keyword: l, it: f } = h, g = k.name("valid");
    if (f.allErrors) {
      const P = k.let("valid", !0);
      return E(() => k.assign(P, !1)), P;
    }
    return k.var(g, !0), E(() => k.break()), g;
    function E(P) {
      const R = k.const("len", (0, e._)`${S}.length`);
      k.forRange("i", 0, R, (I) => {
        h.subschema({
          keyword: l,
          dataProp: I,
          dataPropType: t.Type.Num
        }, g), k.if((0, e.not)(g), P);
      });
    }
  }
  he.validateArray = u;
  function $(h) {
    const { gen: k, schema: S, keyword: l, it: f } = h;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((R) => (0, t.alwaysValidSchema)(f, R)) && !f.opts.unevaluated)
      return;
    const E = k.let("valid", !1), P = k.name("_valid");
    k.block(() => S.forEach((R, I) => {
      const T = h.subschema({
        keyword: l,
        schemaProp: I,
        compositeRule: !0
      }, P);
      k.assign(E, (0, e._)`${E} || ${P}`), h.mergeValidEvaluated(T, P) || k.if((0, e.not)(E));
    })), h.result(E, () => h.reset(), () => h.error(!0));
  }
  return he.validateUnion = $, he;
}
var Vo;
function Pc() {
  if (Vo) return Ne;
  Vo = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.validateKeywordUsage = Ne.validSchemaType = Ne.funcKeywordCode = Ne.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ tr();
  function o(w, y) {
    const { gen: _, keyword: b, schema: u, parentSchema: $, it: h } = w, k = y.macro.call(h.self, u, $, h), S = d(_, b, k);
    h.opts.validateSchema !== !1 && h.self.validateSchema(k, !0);
    const l = _.name("valid");
    w.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${h.errSchemaPath}/${b}`,
      topSchemaRef: S,
      compositeRule: !0
    }, l), w.pass(l, () => w.error(!0));
  }
  Ne.macroKeywordCode = o;
  function i(w, y) {
    var _;
    const { gen: b, keyword: u, schema: $, parentSchema: h, $data: k, it: S } = w;
    c(S, y);
    const l = !k && y.compile ? y.compile.call(S.self, $, h, S) : y.validate, f = d(b, u, l), g = b.let("valid");
    w.block$data(g, E), w.ok((_ = y.valid) !== null && _ !== void 0 ? _ : g);
    function E() {
      if (y.errors === !1)
        I(), y.modifying && s(w), T(() => w.error());
      else {
        const q = y.async ? P() : R();
        y.modifying && s(w), T(() => a(w, q));
      }
    }
    function P() {
      const q = b.let("ruleErrs", null);
      return b.try(() => I((0, e._)`await `), (j) => b.assign(g, !1).if((0, e._)`${j} instanceof ${S.ValidationError}`, () => b.assign(q, (0, e._)`${j}.errors`), () => b.throw(j))), q;
    }
    function R() {
      const q = (0, e._)`${f}.errors`;
      return b.assign(q, null), I(e.nil), q;
    }
    function I(q = y.async ? (0, e._)`await ` : e.nil) {
      const j = S.opts.passContext ? t.default.this : t.default.self, Y = !("compile" in y && !k || y.schema === !1);
      b.assign(g, (0, e._)`${q}${(0, n.callValidateCode)(w, f, j, Y)}`, y.modifying);
    }
    function T(q) {
      var j;
      b.if((0, e.not)((j = y.valid) !== null && j !== void 0 ? j : g), q);
    }
  }
  Ne.funcKeywordCode = i;
  function s(w) {
    const { gen: y, data: _, it: b } = w;
    y.if(b.parentData, () => y.assign(_, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function a(w, y) {
    const { gen: _ } = w;
    _.if((0, e._)`Array.isArray(${y})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(w);
    }, () => w.error());
  }
  function c({ schemaEnv: w }, y) {
    if (y.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(w, y, _) {
    if (_ === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return w.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function p(w, y, _ = !1) {
    return !y.length || y.some((b) => b === "array" ? Array.isArray(w) : b === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == b || _ && typeof w > "u");
  }
  Ne.validSchemaType = p;
  function v({ schema: w, opts: y, self: _, errSchemaPath: b }, u, $) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes($) : u.keyword !== $)
      throw new Error("ajv implementation error");
    const h = u.dependencies;
    if (h?.some((k) => !Object.prototype.hasOwnProperty.call(w, k)))
      throw new Error(`parent schema must have dependencies of ${$}: ${h.join(",")}`);
    if (u.validateSchema && !u.validateSchema(w[$])) {
      const S = `keyword "${$}" value is invalid at path "${b}": ` + _.errorsText(u.validateSchema.errors);
      if (y.validateSchema === "log")
        _.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Ne.validateKeywordUsage = v, Ne;
}
var Ue = {}, Bo;
function Ac() {
  if (Bo) return Ue;
  Bo = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.extendSubschemaMode = Ue.extendSubschemaData = Ue.getSubschema = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: p, topSchemaRef: v }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const w = i.schema[s];
      return a === void 0 ? {
        schema: w,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: w[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (d === void 0 || p === void 0 || v === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: v,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ue.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: d, dataTypes: p, propertyName: v }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = s;
    if (a !== void 0) {
      const { errorPath: _, dataPathArr: b, opts: u } = s, $ = w.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      y($), i.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...b, i.parentDataProperty];
    }
    if (d !== void 0) {
      const _ = d instanceof e.Name ? d : w.let("data", d, !0);
      y(_), v !== void 0 && (i.propertyName = v);
    }
    p && (i.dataTypes = p);
    function y(_) {
      i.data = _, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, _];
    }
  }
  Ue.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: p }) {
    c !== void 0 && (i.compositeRule = c), d !== void 0 && (i.createErrors = d), p !== void 0 && (i.allErrors = p), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Ue.extendSubschemaMode = o, Ue;
}
var _e = {}, $r, Uo;
function ta() {
  return Uo || (Uo = 1, $r = function e(t, n) {
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
  }), $r;
}
var vr = { exports: {} }, Ko;
function Rc() {
  if (Ko) return vr.exports;
  Ko = 1;
  var e = vr.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, c, d, p, v, w) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, d, p, v, w);
      for (var y in s) {
        var _ = s[y];
        if (Array.isArray(_)) {
          if (y in e.arrayKeywords)
            for (var b = 0; b < _.length; b++)
              t(r, o, i, _[b], a + "/" + y + "/" + b, c, a, y, s, b);
        } else if (y in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var u in _)
              t(r, o, i, _[u], a + "/" + y + "/" + n(u), c, a, y, s, u);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, o, i, _, a + "/" + y, c, a, y, s);
      }
      i(s, a, c, d, p, v, w);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return vr.exports;
}
var Ho;
function nr() {
  if (Ho) return _e;
  Ho = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.getSchemaRefs = _e.resolveUrl = _e.normalizeId = _e._getFullPath = _e.getFullPath = _e.inlineRef = void 0;
  const e = /* @__PURE__ */ ue(), t = ta(), n = Rc(), r = /* @__PURE__ */ new Set([
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
  function o(b, u = !0) {
    return typeof b == "boolean" ? !0 : u === !0 ? !s(b) : u ? a(b) <= u : !1;
  }
  _e.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(b) {
    for (const u in b) {
      if (i.has(u))
        return !0;
      const $ = b[u];
      if (Array.isArray($) && $.some(s) || typeof $ == "object" && s($))
        return !0;
    }
    return !1;
  }
  function a(b) {
    let u = 0;
    for (const $ in b) {
      if ($ === "$ref")
        return 1 / 0;
      if (u++, !r.has($) && (typeof b[$] == "object" && (0, e.eachItem)(b[$], (h) => u += a(h)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c(b, u = "", $) {
    $ !== !1 && (u = v(u));
    const h = b.parse(u);
    return d(b, h);
  }
  _e.getFullPath = c;
  function d(b, u) {
    return b.serialize(u).split("#")[0] + "#";
  }
  _e._getFullPath = d;
  const p = /#\/?$/;
  function v(b) {
    return b ? b.replace(p, "") : "";
  }
  _e.normalizeId = v;
  function w(b, u, $) {
    return $ = v($), b.resolve(u, $);
  }
  _e.resolveUrl = w;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function _(b, u) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: $, uriResolver: h } = this.opts, k = v(b[$] || u), S = { "": k }, l = c(h, k, !1), f = {}, g = /* @__PURE__ */ new Set();
    return n(b, { allKeys: !0 }, (R, I, T, q) => {
      if (q === void 0)
        return;
      const j = l + I;
      let Y = S[q];
      typeof R[$] == "string" && (Y = Z.call(this, R[$])), ne.call(this, R.$anchor), ne.call(this, R.$dynamicAnchor), S[I] = Y;
      function Z(X) {
        const le = this.opts.uriResolver.resolve;
        if (X = v(Y ? le(Y, X) : X), g.has(X))
          throw P(X);
        g.add(X);
        let J = this.refs[X];
        return typeof J == "string" && (J = this.refs[J]), typeof J == "object" ? E(R, J.schema, X) : X !== v(j) && (X[0] === "#" ? (E(R, f[X], X), f[X] = R) : this.refs[X] = j), X;
      }
      function ne(X) {
        if (typeof X == "string") {
          if (!y.test(X))
            throw new Error(`invalid anchor "${X}"`);
          Z.call(this, `#${X}`);
        }
      }
    }), f;
    function E(R, I, T) {
      if (I !== void 0 && !t(R, I))
        throw P(T);
    }
    function P(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return _e.getSchemaRefs = _, _e;
}
var Go;
function rr() {
  if (Go) return Ve;
  Go = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.getData = Ve.KeywordCxt = Ve.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ Gn(), n = /* @__PURE__ */ ea(), r = /* @__PURE__ */ Gn(), o = /* @__PURE__ */ xc(), i = /* @__PURE__ */ Pc(), s = /* @__PURE__ */ Ac(), a = /* @__PURE__ */ ce(), c = /* @__PURE__ */ ze(), d = /* @__PURE__ */ nr(), p = /* @__PURE__ */ ue(), v = /* @__PURE__ */ tr();
  function w(x) {
    if (l(x) && (g(x), S(x))) {
      u(x);
      return;
    }
    y(x, () => (0, e.topBoolOrEmptySchema)(x));
  }
  Ve.validateFunctionCode = w;
  function y({ gen: x, validateName: N, schema: V, schemaEnv: W, opts: ee }, oe) {
    ee.code.es5 ? x.func(N, (0, a._)`${c.default.data}, ${c.default.valCxt}`, W.$async, () => {
      x.code((0, a._)`"use strict"; ${h(V, ee)}`), b(x, ee), x.code(oe);
    }) : x.func(N, (0, a._)`${c.default.data}, ${_(ee)}`, W.$async, () => x.code(h(V, ee)).code(oe));
  }
  function _(x) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${x.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function b(x, N) {
    x.if(c.default.valCxt, () => {
      x.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), x.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), x.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), x.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), N.dynamicRef && x.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      x.var(c.default.instancePath, (0, a._)`""`), x.var(c.default.parentData, (0, a._)`undefined`), x.var(c.default.parentDataProperty, (0, a._)`undefined`), x.var(c.default.rootData, c.default.data), N.dynamicRef && x.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(x) {
    const { schema: N, opts: V, gen: W } = x;
    y(x, () => {
      V.$comment && N.$comment && q(x), R(x), W.let(c.default.vErrors, null), W.let(c.default.errors, 0), V.unevaluated && $(x), E(x), j(x);
    });
  }
  function $(x) {
    const { gen: N, validateName: V } = x;
    x.evaluated = N.const("evaluated", (0, a._)`${V}.evaluated`), N.if((0, a._)`${x.evaluated}.dynamicProps`, () => N.assign((0, a._)`${x.evaluated}.props`, (0, a._)`undefined`)), N.if((0, a._)`${x.evaluated}.dynamicItems`, () => N.assign((0, a._)`${x.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(x, N) {
    const V = typeof x == "object" && x[N.schemaId];
    return V && (N.code.source || N.code.process) ? (0, a._)`/*# sourceURL=${V} */` : a.nil;
  }
  function k(x, N) {
    if (l(x) && (g(x), S(x))) {
      f(x, N);
      return;
    }
    (0, e.boolOrEmptySchema)(x, N);
  }
  function S({ schema: x, self: N }) {
    if (typeof x == "boolean")
      return !x;
    for (const V in x)
      if (N.RULES.all[V])
        return !0;
    return !1;
  }
  function l(x) {
    return typeof x.schema != "boolean";
  }
  function f(x, N) {
    const { schema: V, gen: W, opts: ee } = x;
    ee.$comment && V.$comment && q(x), I(x), T(x);
    const oe = W.const("_errs", c.default.errors);
    E(x, oe), W.var(N, (0, a._)`${oe} === ${c.default.errors}`);
  }
  function g(x) {
    (0, p.checkUnknownRules)(x), P(x);
  }
  function E(x, N) {
    if (x.opts.jtd)
      return Z(x, [], !1, N);
    const V = (0, t.getSchemaTypes)(x.schema), W = (0, t.coerceAndCheckDataType)(x, V);
    Z(x, V, !W, N);
  }
  function P(x) {
    const { schema: N, errSchemaPath: V, opts: W, self: ee } = x;
    N.$ref && W.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(N, ee.RULES) && ee.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function R(x) {
    const { schema: N, opts: V } = x;
    N.default !== void 0 && V.useDefaults && V.strictSchema && (0, p.checkStrictMode)(x, "default is ignored in the schema root");
  }
  function I(x) {
    const N = x.schema[x.opts.schemaId];
    N && (x.baseId = (0, d.resolveUrl)(x.opts.uriResolver, x.baseId, N));
  }
  function T(x) {
    if (x.schema.$async && !x.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: x, schemaEnv: N, schema: V, errSchemaPath: W, opts: ee }) {
    const oe = V.$comment;
    if (ee.$comment === !0)
      x.code((0, a._)`${c.default.self}.logger.log(${oe})`);
    else if (typeof ee.$comment == "function") {
      const se = (0, a.str)`${W}/$comment`, re = x.scopeValue("root", { ref: N.root });
      x.code((0, a._)`${c.default.self}.opts.$comment(${oe}, ${se}, ${re}.schema)`);
    }
  }
  function j(x) {
    const { gen: N, schemaEnv: V, validateName: W, ValidationError: ee, opts: oe } = x;
    V.$async ? N.if((0, a._)`${c.default.errors} === 0`, () => N.return(c.default.data), () => N.throw((0, a._)`new ${ee}(${c.default.vErrors})`)) : (N.assign((0, a._)`${W}.errors`, c.default.vErrors), oe.unevaluated && Y(x), N.return((0, a._)`${c.default.errors} === 0`));
  }
  function Y({ gen: x, evaluated: N, props: V, items: W }) {
    V instanceof a.Name && x.assign((0, a._)`${N}.props`, V), W instanceof a.Name && x.assign((0, a._)`${N}.items`, W);
  }
  function Z(x, N, V, W) {
    const { gen: ee, schema: oe, data: se, allErrors: re, opts: ie, self: ae } = x, { RULES: pe } = ae;
    if (oe.$ref && (ie.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(oe, pe))) {
      ee.block(() => L(x, "$ref", pe.all.$ref.definition));
      return;
    }
    ie.jtd || X(x, N), ee.block(() => {
      for (const we of pe.rules)
        be(we);
      be(pe.post);
    });
    function be(we) {
      (0, n.shouldUseGroup)(oe, we) && (we.type ? (ee.if((0, r.checkDataType)(we.type, se, ie.strictNumbers)), ne(x, we), N.length === 1 && N[0] === we.type && V && (ee.else(), (0, r.reportTypeError)(x)), ee.endIf()) : ne(x, we), re || ee.if((0, a._)`${c.default.errors} === ${W || 0}`));
    }
  }
  function ne(x, N) {
    const { gen: V, schema: W, opts: { useDefaults: ee } } = x;
    ee && (0, o.assignDefaults)(x, N.type), V.block(() => {
      for (const oe of N.rules)
        (0, n.shouldUseRule)(W, oe) && L(x, oe.keyword, oe.definition, N.type);
    });
  }
  function X(x, N) {
    x.schemaEnv.meta || !x.opts.strictTypes || (le(x, N), x.opts.allowUnionTypes || J(x, N), D(x, x.dataTypes));
  }
  function le(x, N) {
    if (N.length) {
      if (!x.dataTypes.length) {
        x.dataTypes = N;
        return;
      }
      N.forEach((V) => {
        F(x.dataTypes, V) || C(x, `type "${V}" not allowed by context "${x.dataTypes.join(",")}"`);
      }), m(x, N);
    }
  }
  function J(x, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && C(x, "use allowUnionTypes to allow union type keyword");
  }
  function D(x, N) {
    const V = x.self.RULES.all;
    for (const W in V) {
      const ee = V[W];
      if (typeof ee == "object" && (0, n.shouldUseRule)(x.schema, ee)) {
        const { type: oe } = ee.definition;
        oe.length && !oe.some((se) => z(N, se)) && C(x, `missing type "${oe.join(",")}" for keyword "${W}"`);
      }
    }
  }
  function z(x, N) {
    return x.includes(N) || N === "number" && x.includes("integer");
  }
  function F(x, N) {
    return x.includes(N) || N === "integer" && x.includes("number");
  }
  function m(x, N) {
    const V = [];
    for (const W of x.dataTypes)
      F(N, W) ? V.push(W) : N.includes("integer") && W === "number" && V.push("integer");
    x.dataTypes = V;
  }
  function C(x, N) {
    const V = x.schemaEnv.baseId + x.errSchemaPath;
    N += ` at "${V}" (strictTypes)`, (0, p.checkStrictMode)(x, N, x.opts.strictTypes);
  }
  class A {
    constructor(N, V, W) {
      if ((0, i.validateKeywordUsage)(N, V, W), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = W, this.data = N.data, this.schema = N.schema[W], this.$data = V.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(N, this.schema, W, this.$data), this.schemaType = V.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = V, this.$data)
        this.schemaCode = N.gen.const("vSchema", G(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${W} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = N.gen.const("_errs", c.default.errors));
    }
    result(N, V, W) {
      this.failResult((0, a.not)(N), V, W);
    }
    failResult(N, V, W) {
      this.gen.if(N), W ? W() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, V) {
      this.failResult((0, a.not)(N), void 0, V);
    }
    fail(N) {
      if (N === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(N), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(N) {
      if (!this.$data)
        return this.fail(N);
      const { schemaCode: V } = this;
      this.fail((0, a._)`${V} !== undefined && (${(0, a.or)(this.invalid$data(), N)})`);
    }
    error(N, V, W) {
      if (V) {
        this.setParams(V), this._error(N, W), this.setParams({});
        return;
      }
      this._error(N, W);
    }
    _error(N, V) {
      (N ? v.reportExtraError : v.reportError)(this, this.def.error, V);
    }
    $dataError() {
      (0, v.reportError)(this, this.def.$dataError || v.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, v.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, V) {
      V ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, V, W = a.nil) {
      this.gen.block(() => {
        this.check$data(N, W), V();
      });
    }
    check$data(N = a.nil, V = a.nil) {
      if (!this.$data)
        return;
      const { gen: W, schemaCode: ee, schemaType: oe, def: se } = this;
      W.if((0, a.or)((0, a._)`${ee} === undefined`, V)), N !== a.nil && W.assign(N, !0), (oe.length || se.validateSchema) && (W.elseIf(this.invalid$data()), this.$dataError(), N !== a.nil && W.assign(N, !1)), W.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: V, schemaType: W, def: ee, it: oe } = this;
      return (0, a.or)(se(), re());
      function se() {
        if (W.length) {
          if (!(V instanceof a.Name))
            throw new Error("ajv implementation error");
          const ie = Array.isArray(W) ? W : [W];
          return (0, a._)`${(0, r.checkDataTypes)(ie, V, oe.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function re() {
        if (ee.validateSchema) {
          const ie = N.scopeValue("validate$data", { ref: ee.validateSchema });
          return (0, a._)`!${ie}(${V})`;
        }
        return a.nil;
      }
    }
    subschema(N, V) {
      const W = (0, s.getSubschema)(this.it, N);
      (0, s.extendSubschemaData)(W, this.it, N), (0, s.extendSubschemaMode)(W, N);
      const ee = { ...this.it, ...W, items: void 0, props: void 0 };
      return k(ee, V), ee;
    }
    mergeEvaluated(N, V) {
      const { it: W, gen: ee } = this;
      W.opts.unevaluated && (W.props !== !0 && N.props !== void 0 && (W.props = p.mergeEvaluated.props(ee, N.props, W.props, V)), W.items !== !0 && N.items !== void 0 && (W.items = p.mergeEvaluated.items(ee, N.items, W.items, V)));
    }
    mergeValidEvaluated(N, V) {
      const { it: W, gen: ee } = this;
      if (W.opts.unevaluated && (W.props !== !0 || W.items !== !0))
        return ee.if(V, () => this.mergeEvaluated(N, a.Name)), !0;
    }
  }
  Ve.KeywordCxt = A;
  function L(x, N, V, W) {
    const ee = new A(x, V, N);
    "code" in V ? V.code(ee, W) : ee.$data && V.validate ? (0, i.funcKeywordCode)(ee, V) : "macro" in V ? (0, i.macroKeywordCode)(ee, V) : (V.compile || V.validate) && (0, i.funcKeywordCode)(ee, V);
  }
  const U = /^\/(?:[^~]|~0|~1)*$/, B = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function G(x, { dataLevel: N, dataNames: V, dataPathArr: W }) {
    let ee, oe;
    if (x === "")
      return c.default.rootData;
    if (x[0] === "/") {
      if (!U.test(x))
        throw new Error(`Invalid JSON-pointer: ${x}`);
      ee = x, oe = c.default.rootData;
    } else {
      const ae = B.exec(x);
      if (!ae)
        throw new Error(`Invalid JSON-pointer: ${x}`);
      const pe = +ae[1];
      if (ee = ae[2], ee === "#") {
        if (pe >= N)
          throw new Error(ie("property/index", pe));
        return W[N - pe];
      }
      if (pe > N)
        throw new Error(ie("data", pe));
      if (oe = V[N - pe], !ee)
        return oe;
    }
    let se = oe;
    const re = ee.split("/");
    for (const ae of re)
      ae && (oe = (0, a._)`${oe}${(0, a.getProperty)((0, p.unescapeJsonPointer)(ae))}`, se = (0, a._)`${se} && ${oe}`);
    return se;
    function ie(ae, pe) {
      return `Cannot access ${ae} ${pe} levels up, current level is ${N}`;
    }
  }
  return Ve.getData = G, Ve;
}
var Ut = {}, Wo;
function so() {
  if (Wo) return Ut;
  Wo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Ut.default = e, Ut;
}
var Kt = {}, Jo;
function or() {
  if (Jo) return Kt;
  Jo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nr();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Kt.default = t, Kt;
}
var Se = {}, Yo;
function ir() {
  if (Yo) return Se;
  Yo = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.resolveSchema = Se.getCompilingSchema = Se.resolveRef = Se.compileSchema = Se.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ so(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ nr(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ rr();
  class s {
    constructor($) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof $.schema == "object" && (k = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (h = $.baseId) !== null && h !== void 0 ? h : (0, r.normalizeId)(k?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  Se.SchemaEnv = s;
  function a(u) {
    const $ = p.call(this, u);
    if ($)
      return $;
    const h = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: k, lines: S } = this.opts.code, { ownProperties: l } = this.opts, f = new e.CodeGen(this.scope, { es5: k, lines: S, ownProperties: l });
    let g;
    u.$async && (g = f.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = f.scopeName("validate");
    u.validateName = E;
    const P = {
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
      topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: E,
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
    let R;
    try {
      this._compilations.add(u), (0, i.validateFunctionCode)(P), f.optimize(this.opts.code.optimize);
      const I = f.toString();
      R = `${f.scopeRefs(n.default.scope)}return ${I}`, this.opts.code.process && (R = this.opts.code.process(R, u));
      const q = new Function(`${n.default.self}`, `${n.default.scope}`, R)(this, this.scope.get());
      if (this.scope.value(E, { ref: q }), q.errors = null, q.schema = u.schema, q.schemaEnv = u, u.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: E, validateCode: I, scopeValues: f._values }), this.opts.unevaluated) {
        const { props: j, items: Y } = P;
        q.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: Y instanceof e.Name ? void 0 : Y,
          dynamicProps: j instanceof e.Name,
          dynamicItems: Y instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return u.validate = q, u;
    } catch (I) {
      throw delete u.validate, delete u.validateName, R && this.logger.error("Error compiling schema, function code:", R), I;
    } finally {
      this._compilations.delete(u);
    }
  }
  Se.compileSchema = a;
  function c(u, $, h) {
    var k;
    h = (0, r.resolveUrl)(this.opts.uriResolver, $, h);
    const S = u.refs[h];
    if (S)
      return S;
    let l = w.call(this, u, h);
    if (l === void 0) {
      const f = (k = u.localRefs) === null || k === void 0 ? void 0 : k[h], { schemaId: g } = this.opts;
      f && (l = new s({ schema: f, schemaId: g, root: u, baseId: $ }));
    }
    if (l !== void 0)
      return u.refs[h] = d.call(this, l);
  }
  Se.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function p(u) {
    for (const $ of this._compilations)
      if (v($, u))
        return $;
  }
  Se.getCompilingSchema = p;
  function v(u, $) {
    return u.schema === $.schema && u.root === $.root && u.baseId === $.baseId;
  }
  function w(u, $) {
    let h;
    for (; typeof (h = this.refs[$]) == "string"; )
      $ = h;
    return h || this.schemas[$] || y.call(this, u, $);
  }
  function y(u, $) {
    const h = this.opts.uriResolver.parse($), k = (0, r._getFullPath)(this.opts.uriResolver, h);
    let S = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && k === S)
      return b.call(this, h, u);
    const l = (0, r.normalizeId)(k), f = this.refs[l] || this.schemas[l];
    if (typeof f == "string") {
      const g = y.call(this, u, f);
      return typeof g?.schema != "object" ? void 0 : b.call(this, h, g);
    }
    if (typeof f?.schema == "object") {
      if (f.validate || a.call(this, f), l === (0, r.normalizeId)($)) {
        const { schema: g } = f, { schemaId: E } = this.opts, P = g[E];
        return P && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, P)), new s({ schema: g, schemaId: E, root: u, baseId: S });
      }
      return b.call(this, h, f);
    }
  }
  Se.resolveSchema = y;
  const _ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(u, { baseId: $, schema: h, root: k }) {
    var S;
    if (((S = u.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const g of u.fragment.slice(1).split("/")) {
      if (typeof h == "boolean")
        return;
      const E = h[(0, o.unescapeFragment)(g)];
      if (E === void 0)
        return;
      h = E;
      const P = typeof h == "object" && h[this.opts.schemaId];
      !_.has(g) && P && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, P));
    }
    let l;
    if (typeof h != "boolean" && h.$ref && !(0, o.schemaHasRulesButRef)(h, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, $, h.$ref);
      l = y.call(this, k, g);
    }
    const { schemaId: f } = this.opts;
    if (l = l || new s({ schema: h, schemaId: f, root: k, baseId: $ }), l.schema !== l.root.schema)
      return l;
  }
  return Se;
}
const Nc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Mc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Tc = "object", Oc = ["$data"], Fc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, zc = !1, Ic = {
  $id: Nc,
  description: Mc,
  type: Tc,
  required: Oc,
  properties: Fc,
  additionalProperties: zc
};
var Ht = {}, Rt = { exports: {} }, br, Xo;
function na() {
  if (Xo) return br;
  Xo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(l) {
    let f = "", g = 0, E = 0;
    for (E = 0; E < l.length; E++)
      if (g = l[E].charCodeAt(0), g !== 48) {
        if (!(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
          return "";
        f += l[E];
        break;
      }
    for (E += 1; E < l.length; E++) {
      if (g = l[E].charCodeAt(0), !(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
        return "";
      f += l[E];
    }
    return f;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, f, g) {
    if (l.length) {
      const E = i(l);
      if (E !== "")
        f.push(E);
      else
        return g.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let f = 0;
    const g = { error: !1, address: "", zone: "" }, E = [], P = [];
    let R = !1, I = !1, T = c;
    for (let q = 0; q < l.length; q++) {
      const j = l[q];
      if (!(j === "[" || j === "]"))
        if (j === ":") {
          if (R === !0 && (I = !0), !T(P, E, g))
            break;
          if (++f > 7) {
            g.error = !0;
            break;
          }
          q > 0 && l[q - 1] === ":" && (R = !0), E.push(":");
          continue;
        } else if (j === "%") {
          if (!T(P, E, g))
            break;
          T = a;
        } else {
          P.push(j);
          continue;
        }
    }
    return P.length && (T === a ? g.zone = P.join("") : I ? E.push(P.join("")) : E.push(i(P))), g.address = E.join(""), g;
  }
  function p(l) {
    if (v(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const f = d(l);
    if (f.error)
      return { host: l, isIPV6: !1 };
    {
      let g = f.address, E = f.address;
      return f.zone && (g += "%" + f.zone, E += "%25" + f.zone), { host: g, isIPV6: !0, escapedHost: E };
    }
  }
  function v(l, f) {
    let g = 0;
    for (let E = 0; E < l.length; E++)
      l[E] === f && g++;
    return g;
  }
  function w(l) {
    let f = l;
    const g = [];
    let E = -1, P = 0;
    for (; P = f.length; ) {
      if (P === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          g.push("/");
          break;
        } else {
          g.push(f);
          break;
        }
      } else if (P === 2) {
        if (f[0] === ".") {
          if (f[1] === ".")
            break;
          if (f[1] === "/") {
            f = f.slice(2);
            continue;
          }
        } else if (f[0] === "/" && (f[1] === "." || f[1] === "/")) {
          g.push("/");
          break;
        }
      } else if (P === 3 && f === "/..") {
        g.length !== 0 && g.pop(), g.push("/");
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
          f = f.slice(3), g.length !== 0 && g.pop();
          continue;
        }
      }
      if ((E = f.indexOf("/", 1)) === -1) {
        g.push(f);
        break;
      } else
        g.push(f.slice(0, E)), f = f.slice(E);
    }
    return g.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, b = /[@/?#]/g;
  function u(l, f) {
    const g = f ? b : _;
    return g.lastIndex = 0, l.replace(g, (E) => y[E]);
  }
  function $(l, f = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let g = "";
    for (let E = 0; E < l.length; E++) {
      if (l[E] === "%" && E + 2 < l.length) {
        const P = l.slice(E + 1, E + 3);
        if (n(P)) {
          const R = P.toUpperCase(), I = String.fromCharCode(parseInt(R, 16));
          f && r(I) ? g += I : g += "%" + R, E += 2;
          continue;
        }
      }
      g += l[E];
    }
    return g;
  }
  function h(l) {
    let f = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const E = l.slice(g + 1, g + 3);
        if (n(E)) {
          const P = E.toUpperCase(), R = String.fromCharCode(parseInt(P, 16));
          R !== "." && r(R) ? f += R : f += "%" + P, g += 2;
          continue;
        }
      }
      o(l[g]) ? f += l[g] : f += escape(l[g]);
    }
    return f;
  }
  function k(l) {
    let f = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const E = l.slice(g + 1, g + 3);
        if (n(E)) {
          f += "%" + E.toUpperCase(), g += 2;
          continue;
        }
      }
      f += escape(l[g]);
    }
    return f;
  }
  function S(l) {
    const f = [];
    if (l.userinfo !== void 0 && (f.push(l.userinfo), f.push("@")), l.host !== void 0) {
      let g = unescape(l.host);
      if (!t(g)) {
        const E = p(g);
        E.isIPV6 === !0 ? g = `[${E.escapedHost}]` : g = u(g, !1);
      }
      f.push(g);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (f.push(":"), f.push(String(l.port))), f.length ? f.join("") : void 0;
  }
  return br = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: $,
    normalizePathEncoding: h,
    escapePreservingEscapes: k,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: i
  }, br;
}
var wr, Zo;
function jc() {
  if (Zo) return wr;
  Zo = 1;
  const { isUUID: e } = na(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
    const f = String(l.scheme).toLowerCase() === "https";
    return (l.port === (f ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = o(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (o(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [f, g] = l.resourceName.split("?");
      l.path = f && f !== "/" ? f : void 0, l.query = g, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function d(l, f) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const g = l.path.match(t);
    if (g) {
      const E = f.scheme || l.scheme || "urn";
      l.nid = g[1].toLowerCase(), l.nss = g[2];
      const P = `${E}:${f.nid || l.nid}`, R = S(P);
      l.path = void 0, R && (l = R.parse(l, f));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function p(l, f) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = f.scheme || l.scheme || "urn", E = l.nid.toLowerCase(), P = `${g}:${f.nid || E}`, R = S(P);
    R && (l = R.serialize(l, f));
    const I = l, T = l.nss;
    return I.path = `${E || f.nid}:${T}`, f.skipEscape = !0, I;
  }
  function v(l, f) {
    const g = l;
    return g.uuid = g.nss, g.nss = void 0, !f.tolerant && (!g.uuid || !e(g.uuid)) && (g.error = g.error || "UUID is not valid."), g;
  }
  function w(l) {
    const f = l;
    return f.nss = (l.uuid || "").toLowerCase(), f;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: s
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: i,
      serialize: s
    }
  ), b = (
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
      domainHost: b.domainHost,
      parse: b.parse,
      serialize: b.serialize
    }
  ), k = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: _,
      ws: b,
      wss: u,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: d,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: v,
          serialize: w,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(k, null);
  function S(l) {
    return l && (k[
      /** @type {SchemeName} */
      l
    ] || k[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return wr = {
    wsIsSecure: o,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, wr;
}
var Qo;
function Dc() {
  if (Qo) return Rt.exports;
  Qo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = na(), { SCHEMES: d, getSchemeHandler: p } = jc();
  function v(P, R) {
    return typeof P == "string" ? P = /** @type {T} */
    l(P, R) : typeof P == "object" && (P = /** @type {T} */
    S(b(P, R), R)), P;
  }
  function w(P, R, I) {
    const T = I ? Object.assign({ scheme: "null" }, I) : { scheme: "null" }, q = y(S(P, T), S(R, T), T, !0);
    return T.skipEscape = !0, b(q, T);
  }
  function y(P, R, I, T) {
    const q = {};
    return T || (P = S(b(P, I), I), R = S(b(R, I), I)), I = I || {}, !I.tolerant && R.scheme ? (q.scheme = R.scheme, q.userinfo = R.userinfo, q.host = R.host, q.port = R.port, q.path = t(R.path || ""), q.query = R.query) : (R.userinfo !== void 0 || R.host !== void 0 || R.port !== void 0 ? (q.userinfo = R.userinfo, q.host = R.host, q.port = R.port, q.path = t(R.path || ""), q.query = R.query) : (R.path ? (R.path[0] === "/" ? q.path = t(R.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? q.path = "/" + R.path : P.path ? q.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + R.path : q.path = R.path, q.path = t(q.path)), q.query = R.query) : (q.path = P.path, R.query !== void 0 ? q.query = R.query : q.query = P.query), q.userinfo = P.userinfo, q.host = P.host, q.port = P.port), q.scheme = P.scheme), q.fragment = R.fragment, q;
  }
  function _(P, R, I) {
    const T = g(P, I), q = g(R, I);
    return T !== void 0 && q !== void 0 && T.toLowerCase() === q.toLowerCase();
  }
  function b(P, R) {
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
    }, T = Object.assign({}, R), q = [], j = p(T.scheme || I.scheme);
    j && j.serialize && j.serialize(I, T), I.path !== void 0 && (T.skipEscape ? I.path = r(I.path) : (I.path = i(I.path), I.scheme !== void 0 && (I.path = I.path.split("%3A").join(":")))), T.reference !== "suffix" && I.scheme && q.push(I.scheme, ":");
    const Y = n(I);
    if (Y !== void 0 && (T.reference !== "suffix" && q.push("//"), q.push(Y), I.path && I.path[0] !== "/" && q.push("/")), I.path !== void 0) {
      let Z = I.path;
      !T.absolutePath && (!j || !j.absolutePath) && (Z = t(Z)), Y === void 0 && Z[0] === "/" && Z[1] === "/" && (Z = "/%2F" + Z.slice(2)), q.push(Z);
    }
    return I.query !== void 0 && q.push("?", I.query), I.fragment !== void 0 && q.push("#", I.fragment), q.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function h(P, R) {
    if (R[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function k(P, R) {
    const I = Object.assign({}, R), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, j = !1;
    I.reference === "suffix" && (I.scheme ? P = I.scheme + ":" + P : P = "//" + P);
    const Y = P.match($);
    Y !== null && Y[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", q = !0);
    const Z = P.match(u);
    if (Z) {
      T.scheme = Z[1], T.userinfo = Z[3], T.host = Z[4], T.port = parseInt(Z[5], 10), T.path = Z[6] || "", T.query = Z[7], T.fragment = Z[8], isNaN(T.port) && (T.port = Z[5]);
      const ne = h(T, Z);
      if (ne !== void 0 && (T.error = T.error || ne, q = !0), T.host)
        if (a(T.host) === !1) {
          const J = e(T.host);
          T.host = J.host.toLowerCase(), j = J.isIPV6;
        } else
          j = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", I.reference && I.reference !== "suffix" && I.reference !== T.reference && (T.error = T.error || "URI is not a " + I.reference + " reference.");
      const X = p(I.scheme || T.scheme);
      if (!I.unicodeSupport && (!X || !X.unicodeSupport) && T.host && (I.domainHost || X && X.domainHost) && j === !1 && c(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (le) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + le;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = s(unescape(T.host), j))), T.path && (T.path = o(T.path)), T.fragment))
        try {
          T.fragment = encodeURI(decodeURIComponent(T.fragment));
        } catch {
          T.error = T.error || "URI malformed";
        }
      X && X.parse && X.parse(T, I);
    } else
      T.error = T.error || "URI can not be parsed.";
    return { parsed: T, malformedAuthorityOrPort: q };
  }
  function S(P, R) {
    return k(P, R).parsed;
  }
  function l(P, R) {
    return f(P, R).normalized;
  }
  function f(P, R) {
    const { parsed: I, malformedAuthorityOrPort: T } = k(P, R);
    return {
      normalized: T ? P : b(I, R),
      malformedAuthorityOrPort: T
    };
  }
  function g(P, R) {
    if (typeof P == "string") {
      const { normalized: I, malformedAuthorityOrPort: T } = f(P, R);
      return T ? void 0 : I;
    }
    if (typeof P == "object")
      return b(P, R);
  }
  const E = {
    SCHEMES: d,
    normalize: v,
    resolve: w,
    resolveComponent: y,
    equal: _,
    serialize: b,
    parse: S
  };
  return Rt.exports = E, Rt.exports.default = E, Rt.exports.fastUri = E, Rt.exports;
}
var ei;
function Lc() {
  if (ei) return Ht;
  ei = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = Dc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ht.default = e, Ht;
}
var ti;
function qc() {
  return ti || (ti = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ rr();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ ce();
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
    const r = /* @__PURE__ */ so(), o = /* @__PURE__ */ or(), i = /* @__PURE__ */ Qs(), s = /* @__PURE__ */ ir(), a = /* @__PURE__ */ ce(), c = /* @__PURE__ */ nr(), d = /* @__PURE__ */ Gn(), p = /* @__PURE__ */ ue(), v = Ic, w = /* @__PURE__ */ Lc(), y = (J, D) => new RegExp(J, D);
    y.code = "new RegExp";
    const _ = ["removeAdditional", "useDefaults", "coerceTypes"], b = /* @__PURE__ */ new Set([
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
    }, $ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, h = 200;
    function k(J) {
      var D, z, F, m, C, A, L, U, B, G, x, N, V, W, ee, oe, se, re, ie, ae, pe, be, we, Re, qe;
      const it = J.strict, fr = (D = J.code) === null || D === void 0 ? void 0 : D.optimize, ko = fr === !0 || fr === void 0 ? 1 : fr || 0, Eo = (F = (z = J.code) === null || z === void 0 ? void 0 : z.regExp) !== null && F !== void 0 ? F : y, za = (m = J.uriResolver) !== null && m !== void 0 ? m : w.default;
      return {
        strictSchema: (A = (C = J.strictSchema) !== null && C !== void 0 ? C : it) !== null && A !== void 0 ? A : !0,
        strictNumbers: (U = (L = J.strictNumbers) !== null && L !== void 0 ? L : it) !== null && U !== void 0 ? U : !0,
        strictTypes: (G = (B = J.strictTypes) !== null && B !== void 0 ? B : it) !== null && G !== void 0 ? G : "log",
        strictTuples: (N = (x = J.strictTuples) !== null && x !== void 0 ? x : it) !== null && N !== void 0 ? N : "log",
        strictRequired: (W = (V = J.strictRequired) !== null && V !== void 0 ? V : it) !== null && W !== void 0 ? W : !1,
        code: J.code ? { ...J.code, optimize: ko, regExp: Eo } : { optimize: ko, regExp: Eo },
        loopRequired: (ee = J.loopRequired) !== null && ee !== void 0 ? ee : h,
        loopEnum: (oe = J.loopEnum) !== null && oe !== void 0 ? oe : h,
        meta: (se = J.meta) !== null && se !== void 0 ? se : !0,
        messages: (re = J.messages) !== null && re !== void 0 ? re : !0,
        inlineRefs: (ie = J.inlineRefs) !== null && ie !== void 0 ? ie : !0,
        schemaId: (ae = J.schemaId) !== null && ae !== void 0 ? ae : "$id",
        addUsedSchema: (pe = J.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (be = J.validateSchema) !== null && be !== void 0 ? be : !0,
        validateFormats: (we = J.validateFormats) !== null && we !== void 0 ? we : !0,
        unicodeRegExp: (Re = J.unicodeRegExp) !== null && Re !== void 0 ? Re : !0,
        int32range: (qe = J.int32range) !== null && qe !== void 0 ? qe : !0,
        uriResolver: za
      };
    }
    class S {
      constructor(D = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), D = this.opts = { ...D, ...k(D) };
        const { es5: z, lines: F } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: b, es5: z, lines: F }), this.logger = T(D.logger);
        const m = D.validateFormats;
        D.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, u, D, "NOT SUPPORTED"), l.call(this, $, D, "DEPRECATED", "warn"), this._metaOpts = R.call(this), D.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), D.keywords && P.call(this, D.keywords), typeof D.meta == "object" && this.addMetaSchema(D.meta), g.call(this), D.validateFormats = m;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: D, meta: z, schemaId: F } = this.opts;
        let m = v;
        F === "id" && (m = { ...v }, m.id = m.$id, delete m.$id), z && D && this.addMetaSchema(m, m[F], !1);
      }
      defaultMeta() {
        const { meta: D, schemaId: z } = this.opts;
        return this.opts.defaultMeta = typeof D == "object" ? D[z] || D : void 0;
      }
      validate(D, z) {
        let F;
        if (typeof D == "string") {
          if (F = this.getSchema(D), !F)
            throw new Error(`no schema with key or ref "${D}"`);
        } else
          F = this.compile(D);
        const m = F(z);
        return "$async" in F || (this.errors = F.errors), m;
      }
      compile(D, z) {
        const F = this._addSchema(D, z);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(D, z) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: F } = this.opts;
        return m.call(this, D, z);
        async function m(G, x) {
          await C.call(this, G.$schema);
          const N = this._addSchema(G, x);
          return N.validate || A.call(this, N);
        }
        async function C(G) {
          G && !this.getSchema(G) && await m.call(this, { $ref: G }, !0);
        }
        async function A(G) {
          try {
            return this._compileSchemaEnv(G);
          } catch (x) {
            if (!(x instanceof o.default))
              throw x;
            return L.call(this, x), await U.call(this, x.missingSchema), A.call(this, G);
          }
        }
        function L({ missingSchema: G, missingRef: x }) {
          if (this.refs[G])
            throw new Error(`AnySchema ${G} is loaded but ${x} cannot be resolved`);
        }
        async function U(G) {
          const x = await B.call(this, G);
          this.refs[G] || await C.call(this, x.$schema), this.refs[G] || this.addSchema(x, G, z);
        }
        async function B(G) {
          const x = this._loading[G];
          if (x)
            return x;
          try {
            return await (this._loading[G] = F(G));
          } finally {
            delete this._loading[G];
          }
        }
      }
      // Adds schema to the instance
      addSchema(D, z, F, m = this.opts.validateSchema) {
        if (Array.isArray(D)) {
          for (const A of D)
            this.addSchema(A, void 0, F, m);
          return this;
        }
        let C;
        if (typeof D == "object") {
          const { schemaId: A } = this.opts;
          if (C = D[A], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${A} must be string`);
        }
        return z = (0, c.normalizeId)(z || C), this._checkUnique(z), this.schemas[z] = this._addSchema(D, F, z, m, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(D, z, F = this.opts.validateSchema) {
        return this.addSchema(D, z, !0, F), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(D, z) {
        if (typeof D == "boolean")
          return !0;
        let F;
        if (F = D.$schema, F !== void 0 && typeof F != "string")
          throw new Error("$schema must be a string");
        if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const m = this.validate(F, D);
        if (!m && z) {
          const C = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(C);
          else
            throw new Error(C);
        }
        return m;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(D) {
        let z;
        for (; typeof (z = f.call(this, D)) == "string"; )
          D = z;
        if (z === void 0) {
          const { schemaId: F } = this.opts, m = new s.SchemaEnv({ schema: {}, schemaId: F });
          if (z = s.resolveSchema.call(this, m, D), !z)
            return;
          this.refs[D] = z;
        }
        return z.validate || this._compileSchemaEnv(z);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(D) {
        if (D instanceof RegExp)
          return this._removeAllSchemas(this.schemas, D), this._removeAllSchemas(this.refs, D), this;
        switch (typeof D) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const z = f.call(this, D);
            return typeof z == "object" && this._cache.delete(z.schema), delete this.schemas[D], delete this.refs[D], this;
          }
          case "object": {
            const z = D;
            this._cache.delete(z);
            let F = D[this.opts.schemaId];
            return F && (F = (0, c.normalizeId)(F), delete this.schemas[F], delete this.refs[F]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(D) {
        for (const z of D)
          this.addKeyword(z);
        return this;
      }
      addKeyword(D, z) {
        let F;
        if (typeof D == "string")
          F = D, typeof z == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), z.keyword = F);
        else if (typeof D == "object" && z === void 0) {
          if (z = D, F = z.keyword, Array.isArray(F) && !F.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, F, z), !z)
          return (0, p.eachItem)(F, (C) => Y.call(this, C)), this;
        ne.call(this, z);
        const m = {
          ...z,
          type: (0, d.getJSONTypes)(z.type),
          schemaType: (0, d.getJSONTypes)(z.schemaType)
        };
        return (0, p.eachItem)(F, m.type.length === 0 ? (C) => Y.call(this, C, m) : (C) => m.type.forEach((A) => Y.call(this, C, m, A))), this;
      }
      getKeyword(D) {
        const z = this.RULES.all[D];
        return typeof z == "object" ? z.definition : !!z;
      }
      // Remove keyword
      removeKeyword(D) {
        const { RULES: z } = this;
        delete z.keywords[D], delete z.all[D];
        for (const F of z.rules) {
          const m = F.rules.findIndex((C) => C.keyword === D);
          m >= 0 && F.rules.splice(m, 1);
        }
        return this;
      }
      // Add format
      addFormat(D, z) {
        return typeof z == "string" && (z = new RegExp(z)), this.formats[D] = z, this;
      }
      errorsText(D = this.errors, { separator: z = ", ", dataVar: F = "data" } = {}) {
        return !D || D.length === 0 ? "No errors" : D.map((m) => `${F}${m.instancePath} ${m.message}`).reduce((m, C) => m + z + C);
      }
      $dataMetaSchema(D, z) {
        const F = this.RULES.all;
        D = JSON.parse(JSON.stringify(D));
        for (const m of z) {
          const C = m.split("/").slice(1);
          let A = D;
          for (const L of C)
            A = A[L];
          for (const L in F) {
            const U = F[L];
            if (typeof U != "object")
              continue;
            const { $data: B } = U.definition, G = A[L];
            B && G && (A[L] = le(G));
          }
        }
        return D;
      }
      _removeAllSchemas(D, z) {
        for (const F in D) {
          const m = D[F];
          (!z || z.test(F)) && (typeof m == "string" ? delete D[F] : m && !m.meta && (this._cache.delete(m.schema), delete D[F]));
        }
      }
      _addSchema(D, z, F, m = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let A;
        const { schemaId: L } = this.opts;
        if (typeof D == "object")
          A = D[L];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof D != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let U = this._cache.get(D);
        if (U !== void 0)
          return U;
        F = (0, c.normalizeId)(A || F);
        const B = c.getSchemaRefs.call(this, D, F);
        return U = new s.SchemaEnv({ schema: D, schemaId: L, meta: z, baseId: F, localRefs: B }), this._cache.set(U.schema, U), C && !F.startsWith("#") && (F && this._checkUnique(F), this.refs[F] = U), m && this.validateSchema(D, !0), U;
      }
      _checkUnique(D) {
        if (this.schemas[D] || this.refs[D])
          throw new Error(`schema with key or id "${D}" already exists`);
      }
      _compileSchemaEnv(D) {
        if (D.meta ? this._compileMetaSchema(D) : s.compileSchema.call(this, D), !D.validate)
          throw new Error("ajv implementation error");
        return D.validate;
      }
      _compileMetaSchema(D) {
        const z = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, D);
        } finally {
          this.opts = z;
        }
      }
    }
    S.ValidationError = r.default, S.MissingRefError = o.default, e.default = S;
    function l(J, D, z, F = "error") {
      for (const m in J) {
        const C = m;
        C in D && this.logger[F](`${z}: option ${m}. ${J[C]}`);
      }
    }
    function f(J) {
      return J = (0, c.normalizeId)(J), this.schemas[J] || this.refs[J];
    }
    function g() {
      const J = this.opts.schemas;
      if (J)
        if (Array.isArray(J))
          this.addSchema(J);
        else
          for (const D in J)
            this.addSchema(J[D], D);
    }
    function E() {
      for (const J in this.opts.formats) {
        const D = this.opts.formats[J];
        D && this.addFormat(J, D);
      }
    }
    function P(J) {
      if (Array.isArray(J)) {
        this.addVocabulary(J);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const D in J) {
        const z = J[D];
        z.keyword || (z.keyword = D), this.addKeyword(z);
      }
    }
    function R() {
      const J = { ...this.opts };
      for (const D of _)
        delete J[D];
      return J;
    }
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    function T(J) {
      if (J === !1)
        return I;
      if (J === void 0)
        return console;
      if (J.log && J.warn && J.error)
        return J;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(J, D) {
      const { RULES: z } = this;
      if ((0, p.eachItem)(J, (F) => {
        if (z.keywords[F])
          throw new Error(`Keyword ${F} is already defined`);
        if (!q.test(F))
          throw new Error(`Keyword ${F} has invalid name`);
      }), !!D && D.$data && !("code" in D || "validate" in D))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Y(J, D, z) {
      var F;
      const m = D?.post;
      if (z && m)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let A = m ? C.post : C.rules.find(({ type: U }) => U === z);
      if (A || (A = { type: z, rules: [] }, C.rules.push(A)), C.keywords[J] = !0, !D)
        return;
      const L = {
        keyword: J,
        definition: {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        }
      };
      D.before ? Z.call(this, A, L, D.before) : A.rules.push(L), C.all[J] = L, (F = D.implements) === null || F === void 0 || F.forEach((U) => this.addKeyword(U));
    }
    function Z(J, D, z) {
      const F = J.rules.findIndex((m) => m.keyword === z);
      F >= 0 ? J.rules.splice(F, 0, D) : (J.rules.push(D), this.logger.warn(`rule ${z} is not defined`));
    }
    function ne(J) {
      let { metaSchema: D } = J;
      D !== void 0 && (J.$data && this.opts.$data && (D = le(D)), J.validateSchema = this.compile(D, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function le(J) {
      return { anyOf: [J, X] };
    }
  })(pr)), pr;
}
var Gt = {}, Wt = {}, Jt = {}, ni;
function Vc() {
  if (ni) return Jt;
  ni = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Jt.default = e, Jt;
}
var Xe = {}, ri;
function ao() {
  if (ri) return Xe;
  ri = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.callRef = Xe.getValidate = void 0;
  const e = /* @__PURE__ */ or(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ze(), o = /* @__PURE__ */ ir(), i = /* @__PURE__ */ ue(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: p, schema: v, it: w } = d, { baseId: y, schemaEnv: _, validateName: b, opts: u, self: $ } = w, { root: h } = _;
      if ((v === "#" || v === "#/") && y === h.baseId)
        return S();
      const k = o.resolveRef.call($, h, y, v);
      if (k === void 0)
        throw new e.default(w.opts.uriResolver, y, v);
      if (k instanceof o.SchemaEnv)
        return l(k);
      return f(k);
      function S() {
        if (_ === h)
          return c(d, b, _, _.$async);
        const g = p.scopeValue("root", { ref: h });
        return c(d, (0, n._)`${g}.validate`, h, h.$async);
      }
      function l(g) {
        const E = a(d, g);
        c(d, E, g, g.$async);
      }
      function f(g) {
        const E = p.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), P = p.name("valid"), R = d.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: v
        }, P);
        d.mergeEvaluated(R), d.ok(P);
      }
    }
  };
  function a(d, p) {
    const { gen: v } = d;
    return p.validate ? v.scopeValue("validate", { ref: p.validate }) : (0, n._)`${v.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Xe.getValidate = a;
  function c(d, p, v, w) {
    const { gen: y, it: _ } = d, { allErrors: b, schemaEnv: u, opts: $ } = _, h = $.passContext ? r.default.this : n.nil;
    w ? k() : S();
    function k() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const g = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(d, p, h)}`), f(p), b || y.assign(g, !0);
      }, (E) => {
        y.if((0, n._)`!(${E} instanceof ${_.ValidationError})`, () => y.throw(E)), l(E), b || y.assign(g, !1);
      }), d.ok(g);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, p, h), () => f(p), () => l(p));
    }
    function l(g) {
      const E = (0, n._)`${g}.errors`;
      y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${E} : ${r.default.vErrors}.concat(${E})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function f(g) {
      var E;
      if (!_.opts.unevaluated)
        return;
      const P = (E = v?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (_.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (_.props = i.mergeEvaluated.props(y, P.props, _.props));
        else {
          const R = y.var("props", (0, n._)`${g}.evaluated.props`);
          _.props = i.mergeEvaluated.props(y, R, _.props, n.Name);
        }
      if (_.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (_.items = i.mergeEvaluated.items(y, P.items, _.items));
        else {
          const R = y.var("items", (0, n._)`${g}.evaluated.items`);
          _.items = i.mergeEvaluated.items(y, R, _.items, n.Name);
        }
    }
  }
  return Xe.callRef = c, Xe.default = s, Xe;
}
var oi;
function Bc() {
  if (oi) return Wt;
  oi = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vc(), t = /* @__PURE__ */ ao(), n = [
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
var Yt = {}, Xt = {}, ii;
function Uc() {
  if (ii) return Xt;
  ii = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = e.operators, n = {
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
  return Xt.default = o, Xt;
}
var Zt = {}, si;
function Kc() {
  if (si) return Zt;
  si = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, d = o.let("res"), p = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      r.fail$data((0, e._)`(${s} === 0 || (${d} = ${i}/${s}, ${p}))`);
    }
  };
  return Zt.default = n, Zt;
}
var Qt = {}, en = {}, ai;
function Hc() {
  if (ai) return en;
  ai = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return en.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', en;
}
var ci;
function Gc() {
  if (ci) return Qt;
  ci = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ Hc(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: d } = i, p = s === "maxLength" ? e.operators.GT : e.operators.LT, v = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${v} ${p} ${c}`);
    }
  };
  return Qt.default = o, Qt;
}
var tn = {}, li;
function Wc() {
  if (li) return tn;
  li = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ ce(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: p, it: v } = i, w = v.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: y } = v.opts.code, _ = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, y), b = s.let("valid");
        s.try(() => s.assign(b, (0, n._)`${_}(${p}, ${w}).test(${a})`), () => s.assign(b, !1)), i.fail$data((0, n._)`!${b}`);
      } else {
        const y = (0, e.usePattern)(i, d);
        i.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return tn.default = o, tn;
}
var nn = {}, di;
function Jc() {
  if (di) return nn;
  di = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), n = {
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
  return nn.default = n, nn;
}
var rn = {}, ui;
function Yc() {
  if (ui) return rn;
  ui = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ue(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: c, data: d, $data: p, it: v } = i, { opts: w } = v;
      if (!p && a.length === 0)
        return;
      const y = a.length >= w.loopRequired;
      if (v.allErrors ? _() : b(), w.strictRequired) {
        const h = i.parentSchema.properties, { definedProperties: k } = i.it;
        for (const S of a)
          if (h?.[S] === void 0 && !k.has(S)) {
            const l = v.schemaEnv.baseId + v.errSchemaPath, f = `required property "${S}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(v, f, v.opts.strictRequired);
          }
      }
      function _() {
        if (y || p)
          i.block$data(t.nil, u);
        else
          for (const h of a)
            (0, e.checkReportMissingProp)(i, h);
      }
      function b() {
        const h = s.let("missing");
        if (y || p) {
          const k = s.let("valid", !0);
          i.block$data(k, () => $(h, k)), i.ok(k);
        } else
          s.if((0, e.checkMissingProp)(i, a, h)), (0, e.reportMissingProp)(i, h), s.else();
      }
      function u() {
        s.forOf("prop", c, (h) => {
          i.setParams({ missingProperty: h }), s.if((0, e.noPropertyInData)(s, d, h, w.ownProperties), () => i.error());
        });
      }
      function $(h, k) {
        i.setParams({ missingProperty: h }), s.forOf(h, c, () => {
          s.assign(k, (0, e.propertyInData)(s, d, h, w.ownProperties)), s.if((0, t.not)(k), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return rn.default = o, rn;
}
var on = {}, fi;
function Xc() {
  if (fi) return on;
  fi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), n = {
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
  return on.default = n, on;
}
var sn = {}, an = {}, pi;
function co() {
  if (pi) return an;
  pi = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = ta();
  return e.code = 'require("ajv/dist/runtime/equal").default', an.default = e, an;
}
var hi;
function Zc() {
  if (hi) return sn;
  hi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gn(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ue(), r = /* @__PURE__ */ co(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: d, schema: p, parentSchema: v, schemaCode: w, it: y } = s;
      if (!d && !p)
        return;
      const _ = a.let("valid"), b = v.items ? (0, e.getSchemaTypes)(v.items) : [];
      s.block$data(_, u, (0, t._)`${w} === false`), s.ok(_);
      function u() {
        const S = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: S, j: l }), a.assign(_, !0), a.if((0, t._)`${S} > 1`, () => ($() ? h : k)(S, l));
      }
      function $() {
        return b.length > 0 && !b.some((S) => S === "object" || S === "array");
      }
      function h(S, l) {
        const f = a.name("item"), g = (0, e.checkDataTypes)(b, f, y.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(f, (0, t._)`${c}[${S}]`), a.if(g, (0, t._)`continue`), b.length > 1 && a.if((0, t._)`typeof ${f} == "string"`, (0, t._)`${f} += "_"`), a.if((0, t._)`typeof ${E}[${f}] == "number"`, () => {
            a.assign(l, (0, t._)`${E}[${f}]`), s.error(), a.assign(_, !1).break();
          }).code((0, t._)`${E}[${f}] = ${S}`);
        });
      }
      function k(S, l) {
        const f = (0, n.useFunc)(a, r.default), g = a.name("outer");
        a.label(g).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${l} = ${S}; ${l}--;`, () => a.if((0, t._)`${f}(${c}[${S}], ${c}[${l}])`, () => {
          s.error(), a.assign(_, !1).break(g);
        })));
      }
    }
  };
  return sn.default = i, sn;
}
var cn = {}, mi;
function Qc() {
  if (mi) return cn;
  mi = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ co(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schemaCode: d, schema: p } = i;
      c || p && typeof p == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${d})`) : i.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return cn.default = o, cn;
}
var ln = {}, gi;
function el() {
  if (gi) return ln;
  gi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ co(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: p, it: v } = i;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const w = d.length >= v.opts.loopEnum;
      let y;
      const _ = () => y ?? (y = (0, t.useFunc)(s, n.default));
      let b;
      if (w || c)
        b = s.let("valid"), i.block$data(b, u);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const h = s.const("vSchema", p);
        b = (0, e.or)(...d.map((k, S) => $(h, S)));
      }
      i.pass(b);
      function u() {
        s.assign(b, !1), s.forOf("v", p, (h) => s.if((0, e._)`${_()}(${a}, ${h})`, () => s.assign(b, !0).break()));
      }
      function $(h, k) {
        const S = d[k];
        return typeof S == "object" && S !== null ? (0, e._)`${_()}(${a}, ${h}[${k}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return ln.default = o, ln;
}
var yi;
function tl() {
  if (yi) return Yt;
  yi = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uc(), t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ Gc(), r = /* @__PURE__ */ Wc(), o = /* @__PURE__ */ Jc(), i = /* @__PURE__ */ Yc(), s = /* @__PURE__ */ Xc(), a = /* @__PURE__ */ Zc(), c = /* @__PURE__ */ Qc(), d = /* @__PURE__ */ el(), p = [
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
  return Yt.default = p, Yt;
}
var dn = {}, pt = {}, $i;
function ra() {
  if ($i) return pt;
  $i = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), r = {
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
    const { gen: a, schema: c, data: d, keyword: p, it: v } = i;
    v.items = !0;
    const w = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${w} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(v, c)) {
      const _ = a.var("valid", (0, e._)`${w} <= ${s.length}`);
      a.if((0, e.not)(_), () => y(_)), i.ok(_);
    }
    function y(_) {
      a.forRange("i", s.length, w, (b) => {
        i.subschema({ keyword: p, dataProp: b, dataPropType: t.Type.Num }, _), v.allErrors || a.if((0, e.not)(_), () => a.break());
      });
    }
  }
  return pt.validateAdditionalItems = o, pt.default = r, pt;
}
var un = {}, ht = {}, vi;
function oa() {
  if (vi) return ht;
  vi = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.validateTuple = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ Ie(), r = {
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
    const { gen: c, parentSchema: d, data: p, keyword: v, it: w } = i;
    b(d), w.opts.unevaluated && a.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(c, a.length, w.items));
    const y = c.name("valid"), _ = c.const("len", (0, e._)`${p}.length`);
    a.forEach((u, $) => {
      (0, t.alwaysValidSchema)(w, u) || (c.if((0, e._)`${_} > ${$}`, () => i.subschema({
        keyword: v,
        schemaProp: $,
        dataProp: $
      }, y)), i.ok(y));
    });
    function b(u) {
      const { opts: $, errSchemaPath: h } = w, k = a.length, S = k === u.minItems && (k === u.maxItems || u[s] === !1);
      if ($.strictTuples && !S) {
        const l = `"${v}" is ${k}-tuple, but minItems or maxItems/${s} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(w, l, $.strictTuples);
      }
    }
  }
  return ht.validateTuple = o, ht.default = r, ht;
}
var bi;
function nl() {
  if (bi) return un;
  bi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oa(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return un.default = t, un;
}
var fn = {}, wi;
function rl() {
  if (wi) return fn;
  wi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ ra(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: d } = s, { prefixItems: p } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, a) && (p ? (0, r.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return fn.default = i, fn;
}
var pn = {}, _i;
function ol() {
  if (_i) return pn;
  _i = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), r = {
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
      let p, v;
      const { minContains: w, maxContains: y } = a;
      d.opts.next ? (p = w === void 0 ? 1 : w, v = y) : p = 1;
      const _ = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: p, max: v }), v === void 0 && p === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (v !== void 0 && p > v) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, s)) {
        let k = (0, e._)`${_} >= ${p}`;
        v !== void 0 && (k = (0, e._)`${k} && ${_} <= ${v}`), o.pass(k);
        return;
      }
      d.items = !0;
      const b = i.name("valid");
      v === void 0 && p === 1 ? $(b, () => i.if(b, () => i.break())) : p === 0 ? (i.let(b, !0), v !== void 0 && i.if((0, e._)`${c}.length > 0`, u)) : (i.let(b, !1), u()), o.result(b, () => o.reset());
      function u() {
        const k = i.name("_valid"), S = i.let("count", 0);
        $(k, () => i.if(k, () => h(S)));
      }
      function $(k, S) {
        i.forRange("i", 0, _, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, k), S();
        });
      }
      function h(k) {
        i.code((0, e._)`${k}++`), v === void 0 ? i.if((0, e._)`${k} >= ${p}`, () => i.assign(b, !0).break()) : (i.if((0, e._)`${k} > ${v}`, () => i.assign(b, !1).break()), p === 1 ? i.assign(b, !0) : i.if((0, e._)`${k} >= ${p}`, () => i.assign(b, !0)));
      }
    }
  };
  return pn.default = r, pn;
}
var _r = {}, Si;
function lo() {
  return Si || (Si = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ue(), r = /* @__PURE__ */ Ie();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: p } }) => {
        const v = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${v} ${p} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: p, missingProperty: v } }) => (0, t._)`{property: ${c},
    missingProperty: ${v},
    depsCount: ${d},
    deps: ${p}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [d, p] = i(c);
        s(c, d), a(c, p);
      }
    };
    function i({ schema: c }) {
      const d = {}, p = {};
      for (const v in c) {
        if (v === "__proto__")
          continue;
        const w = Array.isArray(c[v]) ? d : p;
        w[v] = c[v];
      }
      return [d, p];
    }
    function s(c, d = c.schema) {
      const { gen: p, data: v, it: w } = c;
      if (Object.keys(d).length === 0)
        return;
      const y = p.let("missing");
      for (const _ in d) {
        const b = d[_];
        if (b.length === 0)
          continue;
        const u = (0, r.propertyInData)(p, v, _, w.opts.ownProperties);
        c.setParams({
          property: _,
          depsCount: b.length,
          deps: b.join(", ")
        }), w.allErrors ? p.if(u, () => {
          for (const $ of b)
            (0, r.checkReportMissingProp)(c, $);
        }) : (p.if((0, t._)`${u} && (${(0, r.checkMissingProp)(c, b, y)})`), (0, r.reportMissingProp)(c, y), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, d = c.schema) {
      const { gen: p, data: v, keyword: w, it: y } = c, _ = p.name("valid");
      for (const b in d)
        (0, n.alwaysValidSchema)(y, d[b]) || (p.if(
          (0, r.propertyInData)(p, v, b, y.opts.ownProperties),
          () => {
            const u = c.subschema({ keyword: w, schemaProp: b }, _);
            c.mergeValidEvaluated(u, _);
          },
          () => p.var(_, !0)
          // TODO var
        ), c.ok(_));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(_r)), _r;
}
var hn = {}, Ci;
function il() {
  if (Ci) return hn;
  Ci = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), r = {
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
      i.forIn("key", a, (p) => {
        o.setParams({ propertyName: p }), o.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, d), i.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || i.break();
        });
      }), o.ok(d);
    }
  };
  return hn.default = r, hn;
}
var mn = {}, ki;
function ia() {
  if (ki) return mn;
  ki = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ ue(), i = {
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
      const { gen: a, schema: c, parentSchema: d, data: p, errsCount: v, it: w } = s;
      if (!v)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: _ } = w;
      if (w.props = !0, _.removeAdditional !== "all" && (0, r.alwaysValidSchema)(w, c))
        return;
      const b = (0, e.allSchemaProperties)(d.properties), u = (0, e.allSchemaProperties)(d.patternProperties);
      $(), s.ok((0, t._)`${v} === ${n.default.errors}`);
      function $() {
        a.forIn("key", p, (f) => {
          !b.length && !u.length ? S(f) : a.if(h(f), () => S(f));
        });
      }
      function h(f) {
        let g;
        if (b.length > 8) {
          const E = (0, r.schemaRefOrVal)(w, d.properties, "properties");
          g = (0, e.isOwnProperty)(a, E, f);
        } else b.length ? g = (0, t.or)(...b.map((E) => (0, t._)`${f} === ${E}`)) : g = t.nil;
        return u.length && (g = (0, t.or)(g, ...u.map((E) => (0, t._)`${(0, e.usePattern)(s, E)}.test(${f})`))), (0, t.not)(g);
      }
      function k(f) {
        a.code((0, t._)`delete ${p}[${f}]`);
      }
      function S(f) {
        if (_.removeAdditional === "all" || _.removeAdditional && c === !1) {
          k(f);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: f }), s.error(), y || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(w, c)) {
          const g = a.name("valid");
          _.removeAdditional === "failing" ? (l(f, g, !1), a.if((0, t.not)(g), () => {
            s.reset(), k(f);
          })) : (l(f, g), y || a.if((0, t.not)(g), () => a.break()));
        }
      }
      function l(f, g, E) {
        const P = {
          keyword: "additionalProperties",
          dataProp: f,
          dataPropType: r.Type.Str
        };
        E === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, g);
      }
    }
  };
  return mn.default = i, mn;
}
var gn = {}, Ei;
function sl() {
  if (Ei) return gn;
  Ei = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ ue(), r = /* @__PURE__ */ ia(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: d, it: p } = i;
      p.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const v = (0, t.allSchemaProperties)(a);
      for (const u of v)
        p.definedProperties.add(u);
      p.opts.unevaluated && v.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(v), p.props));
      const w = v.filter((u) => !(0, n.alwaysValidSchema)(p, a[u]));
      if (w.length === 0)
        return;
      const y = s.name("valid");
      for (const u of w)
        _(u) ? b(u) : (s.if((0, t.propertyInData)(s, d, u, p.opts.ownProperties)), b(u), p.allErrors || s.else().var(y, !0), s.endIf()), i.it.definedProperties.add(u), i.ok(y);
      function _(u) {
        return p.opts.useDefaults && !p.compositeRule && a[u].default !== void 0;
      }
      function b(u) {
        i.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, y);
      }
    }
  };
  return gn.default = o, gn;
}
var yn = {}, xi;
function al() {
  if (xi) return yn;
  xi = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ue(), r = /* @__PURE__ */ ue(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: d, it: p } = i, { opts: v } = p, w = (0, e.allSchemaProperties)(a), y = w.filter((S) => (0, n.alwaysValidSchema)(p, a[S]));
      if (w.length === 0 || y.length === w.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const _ = v.strictSchema && !v.allowMatchingProperties && d.properties, b = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: u } = p;
      $();
      function $() {
        for (const S of w)
          _ && h(S), p.allErrors ? k(S) : (s.var(b, !0), k(S), s.if(b));
      }
      function h(S) {
        for (const l in _)
          new RegExp(S).test(l) && (0, n.checkStrictMode)(p, `property ${l} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function k(S) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, S)}.test(${l})`, () => {
            const f = y.includes(S);
            f || i.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: l,
              dataPropType: r.Type.Str
            }, b), p.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${l}]`, !0) : !f && !p.allErrors && s.if((0, t.not)(b), () => s.break());
          });
        });
      }
    }
  };
  return yn.default = o, yn;
}
var $n = {}, Pi;
function cl() {
  if (Pi) return $n;
  Pi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ue(), t = {
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
  return $n.default = t, $n;
}
var vn = {}, Ai;
function ll() {
  if (Ai) return vn;
  Ai = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ie()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return vn.default = t, vn;
}
var bn = {}, Ri;
function dl() {
  if (Ri) return bn;
  Ri = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), r = {
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
      const d = s, p = i.let("valid", !1), v = i.let("passing", null), w = i.name("_valid");
      o.setParams({ passing: v }), i.block(y), o.result(p, () => o.reset(), () => o.error(!0));
      function y() {
        d.forEach((_, b) => {
          let u;
          (0, t.alwaysValidSchema)(c, _) ? i.var(w, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, w), b > 0 && i.if((0, e._)`${w} && ${p}`).assign(p, !1).assign(v, (0, e._)`[${v}, ${b}]`).else(), i.if(w, () => {
            i.assign(p, !0), i.assign(v, b), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return bn.default = r, bn;
}
var wn = {}, Ni;
function ul() {
  if (Ni) return wn;
  Ni = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ue(), t = {
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
  return wn.default = t, wn;
}
var _n = {}, Mi;
function fl() {
  if (Mi) return _n;
  Mi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), r = {
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
      const d = o(c, "then"), p = o(c, "else");
      if (!d && !p)
        return;
      const v = s.let("valid", !0), w = s.name("_valid");
      if (y(), i.reset(), d && p) {
        const b = s.let("ifClause");
        i.setParams({ ifClause: b }), s.if(w, _("then", b), _("else", b));
      } else d ? s.if(w, _("then")) : s.if((0, e.not)(w), _("else"));
      i.pass(v, () => i.error(!0));
      function y() {
        const b = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        i.mergeEvaluated(b);
      }
      function _(b, u) {
        return () => {
          const $ = i.subschema({ keyword: b }, w);
          s.assign(v, w), i.mergeValidEvaluated($, v), u ? s.assign(u, (0, e._)`${b}`) : i.setParams({ ifClause: b });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return _n.default = r, _n;
}
var Sn = {}, Ti;
function pl() {
  if (Ti) return Sn;
  Ti = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ue(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Sn.default = t, Sn;
}
var Oi;
function hl() {
  if (Oi) return dn;
  Oi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ra(), t = /* @__PURE__ */ nl(), n = /* @__PURE__ */ oa(), r = /* @__PURE__ */ rl(), o = /* @__PURE__ */ ol(), i = /* @__PURE__ */ lo(), s = /* @__PURE__ */ il(), a = /* @__PURE__ */ ia(), c = /* @__PURE__ */ sl(), d = /* @__PURE__ */ al(), p = /* @__PURE__ */ cl(), v = /* @__PURE__ */ ll(), w = /* @__PURE__ */ dl(), y = /* @__PURE__ */ ul(), _ = /* @__PURE__ */ fl(), b = /* @__PURE__ */ pl();
  function u($ = !1) {
    const h = [
      // any
      p.default,
      v.default,
      w.default,
      y.default,
      _.default,
      b.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      d.default
    ];
    return $ ? h.push(t.default, r.default) : h.push(e.default, n.default), h.push(o.default), h;
  }
  return dn.default = u, dn;
}
var Cn = {}, mt = {}, Fi;
function sa() {
  if (Fi) return mt;
  Fi = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ ir(), r = /* @__PURE__ */ ao(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: d, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[c] = !0;
    const v = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, w = p.errSchemaPath === "#" ? p.validateName : s(a);
    d.if((0, e._)`!${v}`, () => d.assign(v, w));
  }
  mt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: d, self: p } = a.it, { root: v, baseId: w, localRefs: y, meta: _ } = c.root, { schemaId: b } = p.opts, u = new n.SchemaEnv({ schema: d, schemaId: b, root: v, baseId: w, localRefs: y, meta: _ });
    return n.compileSchema.call(p, u), (0, r.getValidate)(a, u);
  }
  return mt.default = o, mt;
}
var gt = {}, zi;
function aa() {
  if (zi) return gt;
  zi = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ ao(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: c, it: d } = i;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (d.allErrors)
      v();
    else {
      const y = a.let("valid", !1);
      v(y), i.ok(y);
    }
    function v(y) {
      if (d.schemaEnv.root.dynamicAnchors[p]) {
        const _ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(_, w(_, y), w(d.validateName, y));
      } else
        w(d.validateName, y)();
    }
    function w(y, _) {
      return _ ? () => a.block(() => {
        (0, n.callRef)(i, y), a.let(_, !0);
      }) : () => (0, n.callRef)(i, y);
    }
  }
  return gt.dynamicRef = o, gt.default = r, gt;
}
var kn = {}, Ii;
function ml() {
  if (Ii) return kn;
  Ii = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sa(), t = /* @__PURE__ */ ue(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return kn.default = n, kn;
}
var En = {}, ji;
function gl() {
  if (ji) return En;
  ji = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ aa(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return En.default = t, En;
}
var Di;
function yl() {
  if (Di) return Cn;
  Di = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sa(), t = /* @__PURE__ */ aa(), n = /* @__PURE__ */ ml(), r = /* @__PURE__ */ gl(), o = [e.default, t.default, n.default, r.default];
  return Cn.default = o, Cn;
}
var xn = {}, Pn = {}, Li;
function $l() {
  if (Li) return Pn;
  Li = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lo(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Pn.default = t, Pn;
}
var An = {}, qi;
function vl() {
  if (qi) return An;
  qi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lo(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return An.default = t, An;
}
var Rn = {}, Vi;
function bl() {
  if (Vi) return Rn;
  Vi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ue(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Rn.default = t, Rn;
}
var Bi;
function wl() {
  if (Bi) return xn;
  Bi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $l(), t = /* @__PURE__ */ vl(), n = /* @__PURE__ */ bl(), r = [e.default, t.default, n.default];
  return xn.default = r, xn;
}
var Nn = {}, Mn = {}, Ui;
function _l() {
  if (Ui) return Mn;
  Ui = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), n = /* @__PURE__ */ ze(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: s, schema: a, data: c, errsCount: d, it: p } = i;
      if (!d)
        throw new Error("ajv implementation error");
      const { allErrors: v, props: w } = p;
      w instanceof e.Name ? s.if((0, e._)`${w} !== true`, () => s.forIn("key", c, (u) => s.if(_(w, u), () => y(u)))) : w !== !0 && s.forIn("key", c, (u) => w === void 0 ? y(u) : s.if(b(w, u), () => y(u))), p.props = !0, i.ok((0, e._)`${d} === ${n.default.errors}`);
      function y(u) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: u }), i.error(), v || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const $ = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, $), v || s.if((0, e.not)($), () => s.break());
        }
      }
      function _(u, $) {
        return (0, e._)`!${u} || !${u}[${$}]`;
      }
      function b(u, $) {
        const h = [];
        for (const k in u)
          u[k] === !0 && h.push((0, e._)`${$} !== ${k}`);
        return (0, e.and)(...h);
      }
    }
  };
  return Mn.default = o, Mn;
}
var Tn = {}, Ki;
function Sl() {
  if (Ki) return Tn;
  Ki = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ ue(), r = {
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
      const p = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: d }), o.fail((0, e._)`${p} > ${d}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const w = i.var("valid", (0, e._)`${p} <= ${d}`);
        i.if((0, e.not)(w), () => v(w, d)), o.ok(w);
      }
      c.items = !0;
      function v(w, y) {
        i.forRange("i", y, p, (_) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, w), c.allErrors || i.if((0, e.not)(w), () => i.break());
        });
      }
    }
  };
  return Tn.default = r, Tn;
}
var Hi;
function Cl() {
  if (Hi) return Nn;
  Hi = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ Sl(), n = [e.default, t.default];
  return Nn.default = n, Nn;
}
var On = {}, Fn = {}, Gi;
function kl() {
  if (Gi) return Fn;
  Gi = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: i, data: s, $data: a, schema: c, schemaCode: d, it: p } = r, { opts: v, errSchemaPath: w, schemaEnv: y, self: _ } = p;
      if (!v.validateFormats)
        return;
      a ? b() : u();
      function b() {
        const $ = i.scopeValue("formats", {
          ref: _.formats,
          code: v.code.formats
        }), h = i.const("fDef", (0, e._)`${$}[${d}]`), k = i.let("fType"), S = i.let("format");
        i.if((0, e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => i.assign(k, (0, e._)`${h}.type || "string"`).assign(S, (0, e._)`${h}.validate`), () => i.assign(k, (0, e._)`"string"`).assign(S, h)), r.fail$data((0, e.or)(l(), f()));
        function l() {
          return v.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function f() {
          const g = y.$async ? (0, e._)`(${h}.async ? await ${S}(${s}) : ${S}(${s}))` : (0, e._)`${S}(${s})`, E = (0, e._)`(typeof ${S} == "function" ? ${g} : ${S}.test(${s}))`;
          return (0, e._)`${S} && ${S} !== true && ${k} === ${o} && !${E}`;
        }
      }
      function u() {
        const $ = _.formats[c];
        if (!$) {
          l();
          return;
        }
        if ($ === !0)
          return;
        const [h, k, S] = f($);
        h === o && r.pass(g());
        function l() {
          if (v.strictSchema === !1) {
            _.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${c}" ignored in schema at path "${w}"`;
          }
        }
        function f(E) {
          const P = E instanceof RegExp ? (0, e.regexpCode)(E) : v.code.formats ? (0, e._)`${v.code.formats}${(0, e.getProperty)(c)}` : void 0, R = i.scopeValue("formats", { key: c, ref: E, code: P });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${R}.validate`] : ["string", E, R];
        }
        function g() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof k == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return Fn.default = n, Fn;
}
var Wi;
function El() {
  if (Wi) return On;
  Wi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ kl()).default];
  return On.default = t, On;
}
var ct = {}, Ji;
function xl() {
  return Ji || (Ji = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.contentVocabulary = ct.metadataVocabulary = void 0, ct.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], ct.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), ct;
}
var Yi;
function Pl() {
  if (Yi) return Gt;
  Yi = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bc(), t = /* @__PURE__ */ tl(), n = /* @__PURE__ */ hl(), r = /* @__PURE__ */ yl(), o = /* @__PURE__ */ wl(), i = /* @__PURE__ */ Cl(), s = /* @__PURE__ */ El(), a = /* @__PURE__ */ xl(), c = [
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
  return Gt.default = c, Gt;
}
var zn = {}, Nt = {}, Xi;
function Al() {
  if (Xi) return Nt;
  Xi = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Nt.DiscrError = e = {})), Nt;
}
var Zi;
function Rl() {
  if (Zi) return zn;
  Zi = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Al(), n = /* @__PURE__ */ ir(), r = /* @__PURE__ */ or(), o = /* @__PURE__ */ ue(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: p, parentSchema: v, it: w } = a, { oneOf: y } = v;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = p.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const b = c.let("valid", !1), u = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(_)}`);
      c.if((0, e._)`typeof ${u} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: _ })), a.ok(b);
      function $() {
        const S = k();
        c.if(!1);
        for (const l in S)
          c.elseIf((0, e._)`${u} === ${l}`), c.assign(b, h(S[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: _ }), c.endIf();
      }
      function h(S) {
        const l = c.name("valid"), f = a.subschema({ keyword: "oneOf", schemaProp: S }, l);
        return a.mergeEvaluated(f, e.Name), l;
      }
      function k() {
        var S;
        const l = {}, f = E(v);
        let g = !0;
        for (let I = 0; I < y.length; I++) {
          let T = y[I];
          if (T?.$ref && !(0, o.schemaHasRulesButRef)(T, w.self.RULES)) {
            const j = T.$ref;
            if (T = n.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, j), T instanceof n.SchemaEnv && (T = T.schema), T === void 0)
              throw new r.default(w.opts.uriResolver, w.baseId, j);
          }
          const q = (S = T?.properties) === null || S === void 0 ? void 0 : S[_];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          g = g && (f || E(T)), P(q, I);
        }
        if (!g)
          throw new Error(`discriminator: "${_}" must be required`);
        return l;
        function E({ required: I }) {
          return Array.isArray(I) && I.includes(_);
        }
        function P(I, T) {
          if (I.const)
            R(I.const, T);
          else if (I.enum)
            for (const q of I.enum)
              R(q, T);
          else
            throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`);
        }
        function R(I, T) {
          if (typeof I != "string" || I in l)
            throw new Error(`discriminator: "${_}" values must be unique strings`);
          l[I] = T;
        }
      }
    }
  };
  return zn.default = s, zn;
}
var In = {};
const Nl = "https://json-schema.org/draft/2020-12/schema", Ml = "https://json-schema.org/draft/2020-12/schema", Tl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ol = "meta", Fl = "Core and Validation specifications meta-schema", zl = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Il = ["object", "boolean"], jl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Dl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Ll = {
  $schema: Nl,
  $id: Ml,
  $vocabulary: Tl,
  $dynamicAnchor: Ol,
  title: Fl,
  allOf: zl,
  type: Il,
  $comment: jl,
  properties: Dl
}, ql = "https://json-schema.org/draft/2020-12/schema", Vl = "https://json-schema.org/draft/2020-12/meta/applicator", Bl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ul = "meta", Kl = "Applicator vocabulary meta-schema", Hl = ["object", "boolean"], Gl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Wl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Jl = {
  $schema: ql,
  $id: Vl,
  $vocabulary: Bl,
  $dynamicAnchor: Ul,
  title: Kl,
  type: Hl,
  properties: Gl,
  $defs: Wl
}, Yl = "https://json-schema.org/draft/2020-12/schema", Xl = "https://json-schema.org/draft/2020-12/meta/unevaluated", Zl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Ql = "meta", ed = "Unevaluated applicator vocabulary meta-schema", td = ["object", "boolean"], nd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, rd = {
  $schema: Yl,
  $id: Xl,
  $vocabulary: Zl,
  $dynamicAnchor: Ql,
  title: ed,
  type: td,
  properties: nd
}, od = "https://json-schema.org/draft/2020-12/schema", id = "https://json-schema.org/draft/2020-12/meta/content", sd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ad = "meta", cd = "Content vocabulary meta-schema", ld = ["object", "boolean"], dd = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, ud = {
  $schema: od,
  $id: id,
  $vocabulary: sd,
  $dynamicAnchor: ad,
  title: cd,
  type: ld,
  properties: dd
}, fd = "https://json-schema.org/draft/2020-12/schema", pd = "https://json-schema.org/draft/2020-12/meta/core", hd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, md = "meta", gd = "Core vocabulary meta-schema", yd = ["object", "boolean"], $d = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, vd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, bd = {
  $schema: fd,
  $id: pd,
  $vocabulary: hd,
  $dynamicAnchor: md,
  title: gd,
  type: yd,
  properties: $d,
  $defs: vd
}, wd = "https://json-schema.org/draft/2020-12/schema", _d = "https://json-schema.org/draft/2020-12/meta/format-annotation", Sd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Cd = "meta", kd = "Format vocabulary meta-schema for annotation results", Ed = ["object", "boolean"], xd = { format: { type: "string" } }, Pd = {
  $schema: wd,
  $id: _d,
  $vocabulary: Sd,
  $dynamicAnchor: Cd,
  title: kd,
  type: Ed,
  properties: xd
}, Ad = "https://json-schema.org/draft/2020-12/schema", Rd = "https://json-schema.org/draft/2020-12/meta/meta-data", Nd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Md = "meta", Td = "Meta-data vocabulary meta-schema", Od = ["object", "boolean"], Fd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, zd = {
  $schema: Ad,
  $id: Rd,
  $vocabulary: Nd,
  $dynamicAnchor: Md,
  title: Td,
  type: Od,
  properties: Fd
}, Id = "https://json-schema.org/draft/2020-12/schema", jd = "https://json-schema.org/draft/2020-12/meta/validation", Dd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ld = "meta", qd = "Validation vocabulary meta-schema", Vd = ["object", "boolean"], Bd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ud = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Kd = {
  $schema: Id,
  $id: jd,
  $vocabulary: Dd,
  $dynamicAnchor: Ld,
  title: qd,
  type: Vd,
  properties: Bd,
  $defs: Ud
};
var Qi;
function Hd() {
  if (Qi) return In;
  Qi = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = Ll, t = Jl, n = rd, r = ud, o = bd, i = Pd, s = zd, a = Kd, c = ["/properties"];
  function d(p) {
    return [
      e,
      t,
      n,
      r,
      o,
      v(this, i),
      s,
      v(this, a)
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function v(w, y) {
      return p ? w.$dataMetaSchema(y, c) : y;
    }
  }
  return In.default = d, In;
}
var es;
function Gd() {
  return es || (es = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ qc(), r = /* @__PURE__ */ Pl(), o = /* @__PURE__ */ Rl(), i = /* @__PURE__ */ Hd(), s = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), r.default.forEach((y) => this.addVocabulary(y)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: y, meta: _ } = this.opts;
        _ && (i.default.call(this, y), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ rr();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var d = /* @__PURE__ */ ce();
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
    var p = /* @__PURE__ */ so();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var v = /* @__PURE__ */ or();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return v.default;
    } });
  })(Vt, Vt.exports)), Vt.exports;
}
var Wd = /* @__PURE__ */ Gd();
const Jd = /* @__PURE__ */ kc(Wd), Yd = "https://json-schema.org/draft/2020-12/schema", Xd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Zd = "gufe-viz payload", Qd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", eu = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], tu = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), uo = {
  $schema: Yd,
  $id: Xd,
  title: Zd,
  description: Qd,
  oneOf: eu,
  $defs: tu
}, kh = [
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
], fo = uo.$id, po = new Jd({ allErrors: !0, strict: !1 });
po.addSchema(uo, fo);
const ts = po.getSchema(fo), ca = Object.entries(uo.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Eh = ca, ho = /* @__PURE__ */ new Map();
for (const e of ca) {
  const t = po.getSchema(`${fo}#/$defs/${e}`);
  t && ho.set(e, t);
}
const Br = { valid: !0, issues: [] };
function Ur(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function nu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? ho.get(t) : void 0;
  return n ? n(e) ? Br : { valid: !1, issues: Ur(n.errors) } : ts(e) ? Br : { valid: !1, issues: Ur(ts.errors) };
}
function xh(e, t) {
  const n = ho.get(e);
  return n ? n(t) ? Br : { valid: !1, issues: Ur(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function ru(e, t = 8) {
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
function la(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!mo[t]) return ou(t);
  const { valid: n, issues: r } = nu(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: ru(r)
  };
}
function ou(e) {
  const t = Object.keys(mo).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Ph(e) {
  return la(e)?.message ?? null;
}
class iu extends Pe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Qa("payload", n, this);
    const r = la(n);
    if (r)
      return t.appendChild(su(r, n)), {};
    const o = n.type, i = mo[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function su(e, t) {
  const n = O(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(me(e.message));
  const r = (i, s) => O(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = au(t);
  return o && n.appendChild(r(o, !1)), n;
}
function au(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Je(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Je(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ae("gufe-view", iu);
const Sr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, go = {
  threeDmol: `https://unpkg.com/3dmol@${Sr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${Sr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${Sr.d3}/+esm`
};
function yo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function da(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let tt = null, yt = null;
function sr() {
  if (yt) return yt;
  const e = yo("threeDmol");
  return e ? (yt = e.then((t) => tt = t || window.$3Dmol), yt) : (yt = (async () => {
    if (window.$3Dmol) return tt = window.$3Dmol;
    if (await da(go.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return tt = window.$3Dmol;
  })(), yt);
}
let $t = null;
function ar() {
  if ($t) return $t;
  const e = yo("rdkit");
  return e ? ($t = e.then((t) => window.RDKit = t), $t) : ($t = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await da(go.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), $t);
}
let Cr = null;
function ua() {
  if (!Cr) {
    const e = go.d3;
    Cr = yo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Cr;
}
function fa(e, t) {
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
    t.hint && !r && (r = !0, du(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function cu(e) {
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
const lu = 1600;
function du(e, t) {
  const n = O(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, lu);
}
const uu = { min: 0.25, max: 12 }, fu = 150;
function ns(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? fu) - t;
}
function pu(e, t = uu) {
  const n = ns(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = ns(e);
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
const hu = 2e-3;
function pa(e) {
  return Math.exp(-e.deltaY * hu);
}
function cr(e, t, n = {}) {
  const r = pu(t, n.bounds), o = fa(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(pa(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function $o(e, t = "Reset view") {
  const n = O("button", Et, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let St = null;
function mu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function ha(e, t) {
  if (!e) return;
  const n = mu(e);
  if (!n) return;
  const r = t?.level();
  St = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : St?.zoom ?? 1
  };
}
function ma(e, t) {
  if (!St || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ...St.rotation]), t && Math.abs(St.zoom - 1) > 1e-9 && t.zoomBy(St.zoom), e.render(), !0);
}
const kr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, gu = [
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
], Ah = "hsv", H = [0, 0, 0], yu = {
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
}, K = [0.9, 0.9, 0.9], $u = {
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
}, vu = {
  "-1": K,
  0: K,
  1: K,
  2: K,
  3: K,
  4: K,
  5: K,
  6: K,
  7: K,
  8: K,
  9: K,
  10: K,
  11: K,
  12: K,
  13: K,
  14: K,
  15: K,
  16: K,
  17: K,
  18: K,
  19: K,
  20: K,
  21: K,
  22: K,
  23: K,
  24: K,
  25: K,
  26: K,
  27: K,
  28: K,
  29: K,
  30: K,
  31: K,
  32: K,
  33: K,
  34: K,
  35: K,
  36: K,
  37: K,
  38: K,
  39: K,
  40: K,
  41: K,
  42: K,
  43: K,
  44: K,
  45: K,
  46: K,
  47: K,
  48: K,
  49: K,
  50: K,
  51: K,
  52: K,
  53: K,
  54: K,
  55: K,
  56: K,
  57: K,
  58: K,
  59: K,
  60: K,
  61: K,
  62: K,
  63: K,
  64: K,
  65: K,
  66: K,
  67: K,
  68: K,
  69: K,
  70: K,
  71: K,
  72: K,
  73: K,
  74: K,
  75: K,
  76: K,
  77: K,
  78: K,
  79: K,
  80: K,
  81: K,
  82: K,
  83: K,
  84: K,
  85: K,
  86: K,
  87: K,
  88: K,
  89: K,
  90: K,
  91: K,
  92: K,
  93: K,
  94: K,
  95: K,
  96: K,
  97: K,
  98: K,
  99: K,
  100: K,
  101: K,
  102: K,
  103: K,
  104: K,
  105: K,
  106: K,
  107: K,
  108: K,
  109: K,
  110: K,
  111: K,
  112: K,
  113: K,
  114: K,
  115: K,
  116: K,
  117: K,
  118: K,
  201: K
}, bu = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
let lr = Ds;
function ga() {
  return (lr ? nt.dark : nt.light).canvas2DBg;
}
function Kr() {
  return (lr ? nt.dark : nt.light).netDepictBg;
}
function wu() {
  return (lr ? nt.dark : nt.light).netDepictCaption;
}
function dr(e) {
  return lr ? {
    ...bu,
    atomColourPalette: e === "mono" ? vu : $u
  } : e === "mono" ? { atomColourPalette: yu } : {};
}
const _u = "rdkit", Su = !0, Cu = !0, ku = !0, Eu = !0, xu = "rdkit", Pu = "filled", Au = 0.42, Ru = 1.5, Nu = !0, Mu = "show", Tu = "mono", Ou = 0.51, Fu = 0.74, zu = 1.6, Iu = 1.7, ju = 5, Du = 0.3, Lu = "#d62828", qu = "#d62828", Vu = "#015ab5", Bu = !1, Uu = "", Ku = "#7c3aed", Hu = {
  layout: _u,
  alignPair: Su,
  atomNumbers: Cu,
  createdDestroyed: ku,
  modified: Eu,
  style: xu,
  circles: Pu,
  circleRadius: Au,
  circleStroke: Ru,
  boundary: Nu,
  hydrogens: Mu,
  elementColors: Tu,
  numScale: Ou,
  labelScale: Fu,
  bondWidth: zu,
  markWidth: Iu,
  haloWidth: ju,
  haloOpacity: Du,
  destroyedColor: Lu,
  createdColor: qu,
  modifiedColor: Vu,
  stereo: Bu,
  customSpec: Uu,
  customColor: Ku
}, Gu = {
  version: 1,
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
}, Wu = ["rdkit", "coordgen", "conformer"], Ju = ["rdkit", "recolor", "halo"], Yu = ["outline", "filled", "off"], Xu = ["show", "dim", "hide"], Zu = ["cpk", "mono"], Qu = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, ef = /^#[0-9a-fA-F]{6}$/;
function Mt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ze(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Qu[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const vt = (e, t) => typeof e == "boolean" ? e : t, jn = (e, t) => typeof e == "string" && ef.test(e) ? e : t;
function tf(e) {
  const t = e && typeof e == "object" ? e : {}, n = Gu;
  return {
    version: 1,
    layout: Mt(t.layout, Wu, n.layout),
    alignPair: vt(t.alignPair, n.alignPair),
    style: Mt(t.style, Ju, n.style),
    createdDestroyed: vt(t.createdDestroyed, n.createdDestroyed),
    modified: vt(t.modified, n.modified),
    destroyedColor: jn(t.destroyedColor, n.destroyedColor),
    createdColor: jn(t.createdColor, n.createdColor),
    modifiedColor: jn(t.modifiedColor, n.modifiedColor),
    boundary: vt(t.boundary, n.boundary),
    circles: Mt(t.circles, Yu, n.circles),
    circleRadius: Ze(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ze(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Mt(t.hydrogens, Xu, n.hydrogens),
    elementColors: Mt(t.elementColors, Zu, n.elementColors),
    atomNumbers: vt(t.atomNumbers, n.atomNumbers),
    stereo: vt(t.stereo, n.stereo),
    numScale: Ze(t.numScale, "numScale", n.numScale),
    labelScale: Ze(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ze(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ze(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ze(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ze(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: jn(t.customColor, n.customColor)
  };
}
const Te = tf(Hu);
function rs(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (p) => {
      s !== "right" && t.add(p), s !== "left" && n.add(p);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const p = Math.min(+d[1], +d[2]), v = Math.min(Math.max(+d[1], +d[2]), p + r - 1);
      for (let w = p; w <= v; w++) c(w);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function Er(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function os(e) {
  return `0x${e.replace("#", "")}`;
}
function Hr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function nf(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function rf(e, t, n) {
  const r = new Set(t.atoms), o = new Set(Er(e, r, !0));
  return {
    deletions: Er(e, r, n),
    changes: Er(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function is(e, t, n, r) {
  const o = rf(t, n, e.boundary), i = [];
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
let bt = null;
function of(e) {
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
  return bt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), bt;
}
function sf(e, t) {
  return e.style === "rdkit" ? "rdkit" : of(t) ? e.style : "rdkit";
}
function af(e, t, n, r, o, i) {
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
  Object.assign(s, dr(e.elementColors)), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const y of n) {
    const _ = Hr(y.color);
    if (o === "rdkit") for (const u of y.bonds) d[u] = _;
    if (o === "recolor" && e.circles === "off") continue;
    const b = o === "recolor" && e.circles === "filled" ? nf(_, 0.7) : _;
    for (const u of y.atoms)
      a[u] = b, c[u] = e.circleRadius;
  }
  const p = Hr(e.customColor);
  for (const y of r)
    y < i && (a[y] = p, c[y] = e.circleRadius);
  const v = Object.keys(a).map(Number);
  v.length && (s.atoms = v, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const w = Object.keys(d).map(Number);
  return w.length && (s.bonds = w, s.highlightBondColors = d), s;
}
function cf(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (i) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", ye(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const lf = "http://www.w3.org/2000/svg";
function ya(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function vo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function $a(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function ss(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of ya(e, s)) {
      const c = a.style;
      $a(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of vo(e, s, !1)) a.style.fill = i;
}
function df(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(lf, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of ya(e, a)) {
      if ($a(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", i.appendChild(d);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function uf(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of vo(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function ff(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of vo(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function pf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function hf(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        ss(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? uf(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && ff(e, n, s.atoms, o, s.color);
      } else
        df(e, n, s.bonds, s.color), ss(e, n, s.atoms, s.bonds, s.color, null);
  pf(e, t, n);
}
const ur = `
`, Gr = "$$$$";
function Wr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(ur);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let p = 0; p < o; p++) {
    const v = n[4 + p];
    if (v == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(v.substring(0, 10)) || 0,
      parseFloat(v.substring(10, 20)) || 0,
      parseFloat(v.substring(20, 30)) || 0
    ]), a.push(v.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let p = 0; p < (isFinite(i) ? i : 0); p++) {
    const v = n[4 + o + p];
    if (v == null) break;
    const w = parseInt(v.substring(0, 3), 10), y = parseInt(v.substring(3, 6), 10), _ = parseInt(v.substring(6, 9), 10);
    !isFinite(w) || !isFinite(y) || c.push([w - 1, y - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function mf(e) {
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
  return r.push("M  END"), r.join(ur);
}
const gf = (e) => `${mf(e)}${ur}${Gr}`, va = (e) => e.indexOf(Gr) >= 0 ? e : `${e}${ur}${Gr}`;
function bo(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function wo(e, t, n, r, o, i) {
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
      const d = { width: n, height: n, ...i };
      if (a) {
        const p = {}, v = {};
        for (const w of a.atoms)
          p[w] = a.color, v[w] = a.radius;
        d.atoms = [...a.atoms], d.highlightAtomColors = p, d.highlightAtomRadii = v;
      }
      return s.get_svg_with_highlights(JSON.stringify(d)) || null;
    }
    return s.get_svg(n, n) || null;
  } catch (a) {
    return console.warn("[gufe-viz] depictSVG threw -", ye(a)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function ba(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const as = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Jr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, wt = (e) => e in Jr, cs = 400, xr = "position:absolute;inset:0;min-width:0;min-height:0;";
class yf extends Pe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = O("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = O(
      "div",
      `${xr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${ga()};`
    );
    a.appendChild(c);
    const d = Xs();
    d.wrap.style.cssText = xr, a.appendChild(d.wrap);
    const p = O(
      "div",
      `${xr}overflow:auto;padding:16px 20px;background:${M.panelBg};color:${M.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(p);
    const v = r ? bo(r) : null, w = [
      ["Name", o || lt, !1],
      ["SMILES", i || lt, !0],
      ["Charge", s == null ? lt : String(s), !1],
      ["Atoms", v ? String(v.atoms) : lt, !1],
      ["Bonds", v ? String(v.bonds) : lt, !1]
    ], y = O("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${te.xl} 20px;align-items:baseline;`);
    p.appendChild(y);
    for (const [T, q, j] of w) {
      y.appendChild(
        O(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${M.textMuted2};`,
          T
        )
      );
      const Y = O(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${M.textPrimary}` + (j ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        q
      );
      Y.title = q, y.appendChild(Y);
    }
    const _ = no(t), b = O("div", Dr, o || "Unnamed molecule");
    _ && a.appendChild(b);
    const u = ft(
      "small-molecule.mode",
      "2d",
      as.map((T) => T.id)
    ), $ = dt("small-molecule.spin", !1);
    let h = u.get(), k = $.get(), S = null, l = null;
    const f = () => {
      try {
        S?.spin(k && wt(h) ? "y" : !1);
      } catch {
      }
    }, g = (T) => {
      h = T, c.style.visibility = h === "2d" ? "visible" : "hidden", d.wrap.style.visibility = wt(h) ? "visible" : "hidden", p.style.visibility = h === "info" ? "visible" : "hidden", b.style.display = h === "info" || !_ ? "none" : "block", P.disabled = !wt(h), P.style.opacity = wt(h) ? "1" : "0.5", wt(h) && S && (S.setStyle({}, Jr[h]), S.resize(), S.render()), f();
    }, E = O("div", Bs), P = Ys(
      "Spin",
      k,
      (T) => {
        k = T, f();
      },
      { title: "Toggle continuous rotation", remember: $ }
    ), R = (T) => {
      T ? E.insertBefore(P, E.firstChild) : I.buttons.insertBefore(P, I.buttons.lastElementChild);
    }, I = Js(as, h, (T) => g(T), {
      remember: u,
      onLayout: R,
      fit: { pane: a, bar: E }
    });
    return E.appendChild(I), R(!1), a.appendChild(E), g(h), !r || !r.trim() ? (c.appendChild(me("No molecule provided")), d.container.appendChild(me("No molecule provided")), { cleanup: () => I.cleanup() }) : (c.appendChild(me("Loading 2D depiction...")), ar().then((T) => {
      const q = dr("cpk"), j = wo(T, r, cs, Te.layout, void 0, q);
      j ? ba(c, j, cs) : c.replaceChildren(me("Failed to parse molecule", !0));
    }).catch((T) => {
      c.replaceChildren(me(`RDKit failed to load: ${ye(T)}`, !0));
    }), d.container.appendChild(me("Loading 3D viewer...")), sr().then(() => {
      d.container.replaceChildren(), S = tt.createViewer(d.container, { backgroundColor: jt.viewer }), S.addModel(va(r), "sdf"), S.setStyle({}, Jr[wt(h) ? h : "stick"]), S.zoomTo(), S.render(), l = cr(d.container, S), ma(S, l), f();
    }).catch((T) => {
      d.container.replaceChildren(me(`3D render failed: ${ye(T)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        if (I.cleanup(), ha(S, l), l?.cleanup(), l = null, !!S) {
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
Ae("gufe-small-molecule", yf);
const wa = ["HOH", "WAT", "SOL", "TIP3"], ls = { hetflag: !1 }, $f = { hetflag: !0 }, vf = { resn: wa }, De = {
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
function _a(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const p = c.slice(17, 20).trim(), v = c.slice(21, 22).trim() || "_", w = c.slice(22, 26).trim(), y = c.slice(26, 27).trim();
    wa.indexOf(p) !== -1 && i++, t.add(v), n.add(`${v}|${w}${y}|${p}`);
    const _ = parseInt(w, 10);
    isNaN(_) || (_ < s && (s = _), _ > a && (a = _));
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
function Sa(e) {
  return [
    `${Pt(e.chains)} chains`,
    `${Pt(e.residues)} residues`,
    `${Pt(e.atoms)} atoms`,
    `${Pt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Pt(e.waters)} water)` : "")
  ];
}
function bf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Yr(e, t, n, r, o) {
  const i = r || (() => {
  }), s = bf(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(ls),
    t.rep === "stick" ? { stick: { radius: De.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: De.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a($f),
    t.hetero ? {
      stick: { radius: De.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: De.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(vf),
    t.waters ? {
      stick: { radius: De.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: De.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > De.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(
          tt.SurfaceType.VDW,
          { opacity: De.surfaceOpacity, ...s },
          a(ls)
        )
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${ye(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${ye(c)}`, "error");
    }
  }, 30);
}
function wf(e, t) {
  e.setStyle(t, {
    stick: { radius: De.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: De.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const ds = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], us = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], _f = 460, fs = /* @__PURE__ */ new Map();
function Ca(e) {
  const t = ft(
    "protein.representation",
    "cartoon",
    ds.map((g) => g.id)
  ), n = ft(
    "protein.color",
    "chain",
    us.map((g) => g.id)
  ), r = dt("protein.waters", e.waters), o = dt("protein.hetero", !0), i = dt("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = null, c = null;
  const d = O("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const p = O("div", Ba);
  d.appendChild(p);
  const v = ({ label: g, controls: E }) => {
    const P = O("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    P.appendChild(
      O(
        "span",
        `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted};`,
        g
      )
    );
    for (const R of E) P.appendChild(R);
    return P;
  }, w = O("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${M.textMuted};`), y = v({ label: "Contents", controls: [w] });
  y.style.display = "none";
  const b = io(p, () => {
    const g = O("div", `${Qr}padding-top:${Ua};`), E = Xn(
      ds,
      s.rep,
      (q) => {
        s.rep = q, e.restyle();
      },
      t
    );
    g.appendChild(v({ label: "Style", controls: [E] }));
    const P = Lt(
      us,
      s.color,
      (q) => {
        s.color = q, e.restyle();
      },
      n
    );
    P.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild(v({ label: "Color", controls: [P] }));
    const R = O("div", "display:flex;flex-wrap:wrap;gap:4px;"), I = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [q, j, Y, Z, ne] of I)
      R.appendChild(
        Ys(
          j,
          s[q],
          (X) => {
            s[q] = X, ne();
          },
          { title: Y, remember: Z }
        )
      );
    g.appendChild(v({ label: "Show", controls: [R] }));
    const T = $o(() => e.reset ? e.reset() : c?.reset());
    return T.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild(v({ label: "Camera", controls: [...e.camera?.() ?? [], T] })), g.appendChild(y), g;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: dt(`protein${oo}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    }
  }), u = no(e.element) ? e.title || e.fallbackTitle : "";
  u && p.appendChild(
    O("div", `${Va}pointer-events:none;font-size:${Q.heading};font-weight:${ge.bold};`, u)
  ), d.appendChild(b.panel);
  const $ = Xs();
  d.appendChild($.wrap);
  let h = null;
  const k = er(d, (g) => {
    const E = g > 0 && g < _f;
    E !== h && (h = E, d.style.flexDirection = E ? "column" : "row", ro(b.panel, E), a?.resize(), a?.render());
  }), S = O(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  $.wrap.appendChild(S);
  const l = (g, E) => {
    if (g == null) {
      S.style.display = "none";
      return;
    }
    S.textContent = g, S.style.display = "block";
    const P = E === "error";
    S.style.background = P ? M.warnBg : M.toolbarBg, S.style.color = P ? M.warnFg : M.textMuted, S.style.border = `1px solid ${P ? M.warnBorder : M.toolbarBorder}`;
  }, f = () => {
    if (!e.cameraKey || !a) return;
    const g = a.getView?.();
    Array.isArray(g) && g.length >= 4 && g.every((E) => Number.isFinite(E)) && fs.set(e.cameraKey, g.slice());
  };
  return {
    opts: s,
    pane: $,
    menu: b,
    showStatus: l,
    setStats: (g) => {
      w.replaceChildren(...g.map((E) => O("div", "overflow-wrap:anywhere;", E))), y.style.display = g.length ? "" : "none";
    },
    restoreCamera: () => {
      const g = e.cameraKey ? fs.get(e.cameraKey) : void 0;
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
        if (k(), f(), c?.cleanup(), c = null, !!a) {
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
class Sf extends Pe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Yr(a, s.opts, o, s.showStatus);
    }
    const s = Ca({
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
      o = _a(r), s.setStats(Sa(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${ye(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), sr().then(() => {
      const a = tt.createViewer(s.pane.container, { backgroundColor: jt.viewer });
      s.setViewer(a), a.addModel(r, "pdb"), Yr(a, s.opts, o, s.showStatus), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(cr(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${ye(a)}`, "error");
    }), s.handle;
  }
}
Ae("gufe-protein", Sf);
function xt(e) {
  const t = /* @__PURE__ */ new Map();
  return Xr(e, t, /* @__PURE__ */ new Set()), t;
}
function Xr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Xr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Xr(o, t, n);
}
function Ye(e, t) {
  return t ? e.get(t) : void 0;
}
function ke(e, t, n) {
  const r = Ye(e, t);
  return r?.type === n ? r : void 0;
}
function _o(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const i = e.get(o);
    i && (r.add(o), n.push(i));
  }
  return n;
}
function ot(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const So = "Cmd/Ctrl-click to select several.";
function Cf(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : ot(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function kf(e, t) {
  navigator.clipboard?.writeText(e).catch(() => ps(e, t)), navigator.clipboard || ps(e, t);
}
function ps(e, t) {
  const n = O("textarea", `width:100%;height:80px;font-size:${Q.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Ef(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = O("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ka(e) {
  const { words: t } = e, n = ft(e.setting, "names", ["names", "keys"]), r = O("div", "display:flex;flex-direction:column;gap:6px;"), o = O("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${M.textMuted};`);
  o.appendChild(O("span", "", "copy as"));
  const i = Lt(
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
  const s = O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`), a = (p) => {
    s.textContent = p;
  }, c = O("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [p, v, w] of d) {
    const y = O("button", `${Et}flex:1;`, v.button);
    y.title = w, y.onclick = (_) => {
      const b = i.value, u = Cf(e.nodes, e.edges, e.selected, p, b);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : p === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${So}` : "Nothing to copy."
        );
        return;
      }
      const $ = u.split(`
`).length;
      _.shiftKey ? (Ef(u, `selected-${v.plural}.txt`), a(`Saved ${$} ${v.plural} to a file.`)) : (kf(u, r), a(
        p === "edges" ? `Copied ${$} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(y);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(O("div", `font-size:${Q.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Ea = "http://www.w3.org/2000/svg";
function fe(e, t = {}) {
  const n = document.createElementNS(Ea, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function hs(e, t) {
  const n = document.createElementNS(Ea, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const xf = 3;
function xa(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const Pf = { min: 0.15, max: 5 }, Af = 1e-9;
function Pa(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Pf;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, d = () => {
    const j = e.getBoundingClientRect();
    return {
      width: j.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: j.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, p = (j, Y, Z) => Math.min(1, Y / (j.maxX - j.minX + r * 2), Z / (j.maxY - j.minY + r * 2)), v = () => {
    const j = n.bounds();
    if (!j) return o.min;
    const { width: Y, height: Z } = d();
    return Math.min(o.min, p(j, Y, Z));
  }, w = (j) => Math.min(o.max, Math.max(v(), i * j)), y = () => {
    i = 1, s = 0, a = 0;
    const j = n.bounds();
    if (!j) {
      c();
      return;
    }
    const { width: Y, height: Z } = d();
    i = p(j, Y, Z), s = Y / 2 - (j.minX + j.maxX) / 2 * i, a = Z / 2 - (j.minY + j.maxY) / 2 * i, c();
  }, b = fa(e, {
    onZoom: (j) => {
      const Y = e.getBoundingClientRect(), Z = j.clientX - Y.left, ne = j.clientY - Y.top, X = w(pa(j)), le = X / i;
      return s = Z - (Z - s) * le, a = ne - (ne - a) * le, i = X, c(), Math.abs(le - 1) > Af;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let $ = null, h = null, k = !1, S = null;
  const l = (j) => ({
    x: j.clientX - s,
    y: j.clientY - a,
    from: { x: j.clientX, y: j.clientY }
  }), f = (j) => {
    j.pointerType === "touch" && u.size > 1 || (h = l(j), k = !1);
  }, g = (j) => {
    $ || (S && j.pointerType === "touch" && (h = { x: S.x - s, y: S.y - a, from: S }, S = null), h && (Math.hypot(j.clientX - h.from.x, j.clientY - h.from.y) > xf && (k = !0), s = j.clientX - h.x, a = j.clientY - h.y, c()));
  }, E = () => {
    h = null;
  };
  e.addEventListener("pointerdown", f), e.addEventListener("pointermove", g), e.addEventListener("pointerup", E), e.addEventListener("pointercancel", E), e.addEventListener("pointerleave", E);
  const P = () => {
    const [j, Y] = [...u.values()];
    return { cx: (j.x + Y.x) / 2, cy: (j.y + Y.y) / 2, span: Math.max(1, Math.hypot(j.x - Y.x, j.y - Y.y)) };
  }, R = (j) => {
    if (j.pointerType === "touch") {
      if (u.set(j.pointerId, { x: j.clientX, y: j.clientY }), u.size !== 2) {
        $ = null;
        return;
      }
      $ = P(), h = null, k = !0;
    }
  }, I = (j) => {
    if (j.pointerType !== "touch" || !u.has(j.pointerId) || (u.set(j.pointerId, { x: j.clientX, y: j.clientY }), !$ || u.size !== 2)) return;
    j.preventDefault(), j.stopPropagation();
    const Y = P(), Z = e.getBoundingClientRect(), ne = w(Y.span / $.span), X = ne / i;
    s = Y.cx - Z.left - ($.cx - Z.left - s) * X, a = Y.cy - Z.top - ($.cy - Z.top - a) * X, i = ne, $ = Y, c();
  }, T = (j) => {
    if (j.pointerType !== "touch") return;
    if (u.delete(j.pointerId), u.size === 2) {
      $ = P();
      return;
    }
    $ = null;
    const [Y] = [...u.values()];
    S = u.size === 1 && Y ? { ...Y } : null;
  };
  e.addEventListener("pointerdown", R, !0), e.addEventListener("pointermove", I, { capture: !0, passive: !1 }), e.addEventListener("pointerup", T, !0), e.addEventListener("pointercancel", T, !0);
  const q = cu(e);
  return {
    fit: y,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: y,
    centreOn(j, Y, Z = 1) {
      const { width: ne, height: X } = d();
      i = Math.max(i, Z), s = ne / 2 - j * i, a = X / 2 - Y * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => k,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(j, Y, Z) {
      i = j, s = Y, a = Z, c();
    },
    cleanup() {
      b.cleanup(), q.cleanup(), e.removeEventListener("pointerdown", f), e.removeEventListener("pointermove", g), e.removeEventListener("pointerup", E), e.removeEventListener("pointercancel", E), e.removeEventListener("pointerleave", E), e.removeEventListener("pointerdown", R, !0), e.removeEventListener("pointermove", I, { capture: !0 }), e.removeEventListener("pointerup", T, !0), e.removeEventListener("pointercancel", T, !0);
    }
  };
}
const Rf = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Aa(e) {
  const t = { ...e };
  for (const n of Rf) delete t[n];
  return t;
}
const Nf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), Mf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Tf = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, Of = (e) => {
  const t = Nf(e);
  return Mf.has(t) || Tf(t);
};
function Ra(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && Of(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const Ff = 8, zf = 64, If = () => new Promise((e) => setTimeout(e, 0));
function Zr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function jf(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const i = o.get_substruct_matches(t), s = JSON.parse(i || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const d = c.atoms;
      if (Array.isArray(d))
        for (const p of d) typeof p == "number" && a.add(p);
    }
    return [...a].sort((c, d) => c - d);
  } catch (i) {
    return console.warn("[gufe-viz] SMARTS match threw -", ye(i)), null;
  } finally {
    Zr(o);
  }
}
function Na(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const d = r.get(a);
    if (d) return { status: "ok", matched: d, unreadable: 0 };
    const p = await e();
    if (c !== o) return { status: "superseded" };
    if (!p) return { status: "unsupported" };
    if (!p.get_qmol) return { status: "unsupported" };
    let v = null;
    try {
      v = p.get_qmol(a);
    } catch {
      v = null;
    }
    if (!v) return { status: "invalid" };
    if (!v.get_substruct_matches)
      return Zr(v), { status: "unsupported" };
    const w = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let _ = performance.now(), b = 0;
      for (let u = 0; u < t.length; u++) {
        const $ = t[u] ? jf(p, v, t[u], n) : null;
        if ($ ? $.length && w.set(u, $) : y++, !(++b < zf && performance.now() - _ < Ff)) {
          if (await If(), c !== o) return { status: "superseded" };
          b = 0, _ = performance.now();
        }
      }
    } finally {
      Zr(v);
    }
    return r.set(a, w), { status: "ok", matched: w, unreadable: y };
  }, cancel: () => void ++o };
}
const Df = 250;
function Ma(e) {
  const t = O("div", "display:flex;flex-direction:column;gap:8px;"), n = O("input", `${Yn}width:100%;box-sizing:border-box;`);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), Df);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const Lf = 1e-6;
function Dn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function ms(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function qf(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function gs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const p = t[a * 3 + a], v = t[c * 3 + c], w = (v - p) / (2 * d);
      let y;
      Math.abs(w) > 1e10 ? y = 1 / (2 * w) : y = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
      const _ = 1 / Math.sqrt(1 + y * y), b = y * _;
      t[a * 3 + a] = p - y * d, t[c * 3 + c] = v + y * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== c) {
          const $ = t[u * 3 + a], h = t[u * 3 + c];
          t[u * 3 + a] = _ * $ - b * h, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = b * $ + _ * h, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const $ = n[u * 3 + a], h = n[u * 3 + c];
        n[u * 3 + a] = _ * $ - b * h, n[u * 3 + c] = b * $ + _ * h;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Vf(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], o[0] += t[S][0], o[1] += t[S][1], o[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const l = e[S][0] - r[0], f = e[S][1] - r[1], g = e[S][2] - r[2], E = t[S][0] - o[0], P = t[S][1] - o[1], R = t[S][2] - o[2];
    i[0] += l * E, i[1] += l * P, i[2] += l * R, i[3] += f * E, i[4] += f * P, i[5] += f * R, i[6] += g * E, i[7] += g * P, i[8] += g * R;
  }
  const s = ms(i), a = Dn(s, i), c = Dn(i, s);
  let d = gs(a), p = gs(c);
  function v(S) {
    const l = [0, 1, 2].sort((g, E) => S.values[E] - S.values[g]), f = new Array(9);
    for (let g = 0; g < 3; g++) {
      const E = l[g];
      f[g] = S.vectors[E], f[3 + g] = S.vectors[3 + E], f[6 + g] = S.vectors[6 + E];
    }
    return {
      values: [S.values[l[0]], S.values[l[1]], S.values[l[2]]],
      vectors: f
    };
  }
  d = v(d), p = v(p);
  const w = d.vectors, y = p.vectors;
  for (let S = 0; S < 3; S++) {
    const l = w[S], f = w[3 + S], g = w[6 + S], E = i[0] * l + i[1] * f + i[2] * g, P = i[3] * l + i[4] * f + i[5] * g, R = i[6] * l + i[7] * f + i[8] * g, I = y[S], T = y[3 + S], q = y[6 + S];
    E * I + P * T + R * q < 0 && (y[S] = -I, y[3 + S] = -T, y[6 + S] = -q);
  }
  const _ = ms(w);
  let b = Dn(y, _);
  qf(b) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], b = Dn(y, _));
  const u = b[0] * o[0] + b[1] * o[1] + b[2] * o[2], $ = b[3] * o[0] + b[4] * o[1] + b[5] * o[2], h = b[6] * o[0] + b[7] * o[1] + b[8] * o[2], k = d.values[1] > Lf * d.values[0];
  return { R: b, t: [r[0] - u, r[1] - $, r[2] - h], determined: k };
}
function Bf(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const ys = `
`, Pr = 4;
function $s(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", ye(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Uf(e, t, n) {
  const r = [], o = [];
  for (const [p, v] of n) {
    const w = e[v], y = t[p];
    !w || !y || (r.push(w), o.push(y));
  }
  if (r.length < 2) return null;
  const i = (p) => {
    let v = 0, w = 0;
    for (const y of p)
      v += y[0], w += y[1];
    return [v / p.length, w / p.length];
  }, s = i(r), a = i(o);
  let c = null, d = -1 / 0;
  for (const p of [!1, !0]) {
    let v = 0, w = 0;
    for (let h = 0; h < r.length; h++) {
      const k = (p ? -1 : 1) * (r[h][0] - s[0]), S = r[h][1] - s[1], l = o[h][0] - a[0], f = o[h][1] - a[1];
      v += k * f - S * l, w += k * l + S * f;
    }
    const y = Math.hypot(v, w);
    if (y <= d) continue;
    d = y;
    const _ = Math.atan2(v, w), b = Math.cos(_), u = Math.sin(_), $ = (p ? -1 : 1) * s[0];
    c = {
      cos: b,
      sin: u,
      mirror: p,
      tx: a[0] - (b * $ - u * s[1]),
      ty: a[1] - (u * $ + b * s[1])
    };
  }
  return c;
}
function Kf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Hf(e, t, n) {
  const r = bo(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(ys);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[Pr + i], a = t[i];
    if (s == null || !a) return e;
    o[Pr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Pr + r.atoms + a, d = o[c];
      if (d == null) break;
      const p = parseInt(d.substring(9, 12), 10);
      p !== 1 && p !== 6 || (o[c] = d.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(ys);
}
function Gf(e, t, n) {
  try {
    const r = (s) => Wr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = Uf(o, r(e), n);
    return i ? Hf(
      t,
      o.map((s) => Kf(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ye(r)), t;
  }
}
function Wf(e, t, n, r, o) {
  const i = $s(e, t, r), s = $s(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: Gf(i, s, o) };
}
const Jf = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Yf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Xf() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Ar = Xf() ? Jf : Yf, vs = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Rr = 420, Zf = {
  mapped: null,
  element: Te.modifiedColor,
  uniqueA: Te.destroyedColor,
  uniqueB: Te.createdColor
}, Qf = 132, Ke = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Nr = { gap: 2.5, minLiftFraction: 0.6 }, ep = 24, It = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function bs(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function tp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function np(e, t, n) {
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
function Ta(e, t) {
  const n = ke(t, e.componentA, "SmallMoleculeComponentViz"), r = ke(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: _o(t, [e.componentA, e.componentB]) };
}
function rp(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const i = Vf(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => Bf(s, i.R, i.t)) } : t;
}
function ws(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function op(e, t) {
  const n = ws(e), r = ws(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Nr.gap, a = Nr.minLiftFraction * i + Nr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function ip(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > It.minSpread ? r : It.minSpread) * It.spreadFactor;
}
function sp(e, t) {
  const n = gu, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const p = (w) => parseInt(w.slice(1 + d * 2, 3 + d * 2), 16), v = Math.round(p(n[i]) + (p(n[s]) - p(n[i])) * a);
    c += v.toString(16).padStart(2, "0");
  }
  return c;
}
class ap extends Pe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = ke(r, n.componentA, "SmallMoleculeComponentViz"), i = ke(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !i)
      return t.appendChild(
        me("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = ot(o), a = ot(i), c = tp(n);
    let d, p;
    try {
      d = Wr(o.sdf, s), p = Wr(i.sdf, a);
    } catch (z) {
      return t.appendChild(me(`Could not read a molecule: ${ye(z)}`, !0)), {};
    }
    p = rp(d, p, c);
    const v = /* @__PURE__ */ new Map();
    for (const [z, F] of c) v.set(F, z);
    const w = bs(c, d.symbols, p.symbols), y = bs(v, p.symbols, d.symbols), _ = no(t), b = O("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(b);
    const u = O("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    b.appendChild(u);
    const $ = ft("atom-mapping.mode", "plain", vs.map((z) => z.id));
    let h = $.get();
    const k = O("div", Bs), S = Js(
      vs,
      h,
      (z) => {
        h = z, D();
      },
      { remember: $, fit: { pane: b, bar: k } }
    );
    k.appendChild(S), b.appendChild(k);
    let l = [], f = 0, g = !0, E = !1;
    const P = () => {
      f && cancelAnimationFrame(f), f = 0, E && ha(l[0]?.viewer ?? null, l[0]?.interaction ?? null), E = !1;
      for (const z of l) {
        z.interaction?.cleanup();
        try {
          z.viewer?.clear();
        } catch {
        }
      }
      l = [], u.replaceChildren();
    }, R = (z) => {
      const F = O("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), m = O("div", "flex:1;position:relative;min-height:0;");
      m.dataset.gufeViewer = "", F.appendChild(m), _ && F.appendChild(O("div", Dr, z)), u.appendChild(F);
      const C = { container: m, viewer: null, interaction: null };
      return l.push(C), C;
    }, I = () => {
      if (l.length < 2) return;
      const z = l.map(() => "");
      let F = !1;
      const m = () => {
        if (g) {
          if (!F)
            for (let C = 0; C < l.length; C++) {
              const A = l[C].viewer;
              if (!A) continue;
              const L = JSON.stringify(A.getView());
              if (L !== z[C]) {
                F = !0;
                for (let U = 0; U < l.length; U++)
                  U !== C && l[U].viewer && (l[U].viewer.setView(A.getView()), l[U].viewer.render()), z[U] = L;
                F = !1;
                break;
              }
            }
          f = requestAnimationFrame(m);
        }
      };
      f = requestAnimationFrame(m);
    }, T = (z, F) => {
      const m = tt.createViewer(z.container, { backgroundColor: jt.viewer });
      for (const { mol: C } of F) m.addModel(gf(C), "sdf");
      return z.viewer = m, m;
    }, q = (z) => {
      z.viewer && (z.interaction = cr(z.container, z.viewer));
    }, j = (z) => {
      ma(z.viewer, z.interaction), E = !0;
    }, Y = () => {
      for (const z of [d, p]) {
        const F = R(z.name), m = T(F, [{ mol: z }]);
        m.setStyle(
          {},
          { stick: { radius: Ke.stick, colorscheme: "Jmol" }, sphere: { scale: Ke.sphere, colorscheme: "Jmol" } }
        ), m.zoomTo(), m.render(), q(F), j(F);
      }
      I();
    }, Z = () => {
      const z = Te, F = rs(z.customSpec), m = [
        { mol: d, uniques: w, side: "left", custom: F.left },
        { mol: p, uniques: y, side: "right", custom: F.right }
      ];
      for (const C of m) {
        const A = R(C.mol.name), L = T(A, [{ mol: C.mol }]);
        L.setStyle(
          {},
          { stick: { radius: Ke.stick, color: Ar.core }, sphere: { scale: Ke.sphere, color: Ar.core } }
        );
        const U = (B, G) => {
          L.addStyle(
            { serial: B },
            {
              stick: { radius: Ke.markStick, color: os(G) },
              sphere: { scale: Ke.markSphere, color: os(G) }
            }
          );
        };
        for (const B of is(z, C.mol, C.uniques, C.side))
          for (const G of B.atoms) U(G, B.color);
        for (const B of C.custom)
          B < C.mol.symbols.length && U(B, z.customColor);
        L.zoomTo(), L.render(), q(A), j(A);
      }
      I();
    }, ne = () => {
      const z = R(`${s} (left), both overlaid (middle), ${a} (right)`), F = ip(d.coords, p.coords), m = (N, V) => ({
        ...N,
        coords: N.coords.map(([W, ee, oe]) => [W + V, ee, oe])
      }), C = m(d, -F), A = m(p, F), L = T(z, [{ mol: C }, { mol: A }, { mol: d }, { mol: p }]);
      L.setStyle({}, { stick: {} });
      const U = Array.from(c);
      U.forEach(([N, V], W) => {
        const ee = C.coords[N], oe = A.coords[V];
        if (!ee || !oe) return;
        const se = sp(W, U.length);
        for (const [re, ie, ae] of [ee, oe])
          L.addSphere({
            center: { x: re, y: ie, z: ae },
            radius: It.sphereRadius,
            color: se,
            alpha: It.sphereAlpha
          });
      }), L.zoomTo();
      const { clientWidth: B, clientHeight: G } = z.container, x = B - 2 * ep;
      x > 0 && x < G && L.zoom(x / G), L.render(), q(z);
    }, X = () => {
      const z = R(`${s} to ${a}  (${c.size} mapped pairs)`), { axis: F, lift: m } = op(d.coords, p.coords), C = {
        ...p,
        coords: p.coords.map((U) => {
          const B = [U[0], U[1], U[2]];
          return B[F] += m, B;
        })
      }, A = T(z, [{ mol: d }, { mol: C }]), L = {
        stick: { radius: Ke.stick, colorscheme: "Jmol" },
        sphere: { scale: Ke.pairSphere, colorscheme: "Jmol" }
      };
      A.setStyle({ model: 0 }, L), A.setStyle({ model: 1 }, L);
      for (const [U, B] of c) {
        const G = d.coords[U], x = C.coords[B];
        !G || !x || A.addCylinder({
          start: { x: G[0], y: G[1], z: G[2] },
          end: { x: x[0], y: x[1], z: x[2] },
          radius: Ke.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Ar.pairLine
        });
      }
      A.zoomTo(), F === 2 ? A.rotate(90, "x") : F === 0 && A.rotate(-90, "z"), A.render(), q(z);
    }, le = () => {
      const z = Te, F = rs(z.customSpec), C = [
        { mol: d, uniques: w, side: "left", custom: F.left },
        { mol: p, uniques: y, side: "right", custom: F.right }
      ].map((A) => {
        const L = O("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), U = O(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${ga()};`
        );
        return U.appendChild(me("Loading 2D depiction...")), L.appendChild(U), _ && L.appendChild(O("div", Dr, A.mol.name)), u.appendChild(L), { box: U, side: A };
      });
      ar().then((A) => {
        const L = sf(z, A), U = Wf(A, o.sdf, i.sdf, z.layout, z.alignPair ? c : null);
        for (const { box: B, side: G } of C) {
          const x = is(z, G.mol, G.uniques, G.side), N = af(
            z,
            Rr,
            x,
            G.custom,
            L,
            G.mol.symbols.length
          ), V = cf(A, G.side === "left" ? U.left : U.right, Rr, N);
          if (B.replaceChildren(), !V) {
            B.appendChild(me("Failed to parse molecule", !0));
            continue;
          }
          ba(B, V, Rr);
          const W = B.querySelector("svg");
          W && hf(W, G.mol, z, x, G.custom, L);
        }
      }).catch((A) => {
        for (const { box: L } of C)
          L.replaceChildren(me(`RDKit failed to load: ${ye(A)}`, !0));
      });
    }, J = () => {
      const z = O(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(z);
      const F = O("div", "display:flex;flex-direction:column;gap:2px;");
      F.appendChild(
        O(
          "div",
          `font-size:${Q.title};font-weight:${ge.bold};color:${Le.title};`,
          n.name || `${s} to ${a}`
        )
      ), z.appendChild(F);
      const m = np(c, d.symbols, p.symbols), C = O("div", Me.row), A = [];
      let L = null;
      const U = (re, ie, ae, pe) => {
        const be = O("button", `${Me.plain}${Me.button}`);
        be.type = "button", be.appendChild(et(re, String(ie), pe)), be.onclick = () => {
          L = L === ae ? null : ae, oe();
        }, A.push({ button: be, kinds: ae }), C.appendChild(be);
      }, B = (re, ie) => {
        const ae = O("span", Me.plain);
        ae.appendChild(et(re, ie)), C.appendChild(ae);
      };
      U("mapped atoms", c.size, ["mapped", "element"]), U("element changes", w.elements.length, ["element"], Te.modifiedColor), U(`unique to ${s}`, w.atoms.length, ["uniqueA"], Te.destroyedColor), U(`unique to ${a}`, y.atoms.length, ["uniqueB"], Te.createdColor), B(`atoms in ${s}`, String(d.symbols.length)), B(`atoms in ${a}`, String(p.symbols.length)), B("score", n.score == null ? lt : n.score.toFixed(3)), z.appendChild(C), z.appendChild(O("div", Lr, "Correspondence"));
      const G = O("div", qr);
      z.appendChild(G);
      const x = O(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Qf}px,1fr));gap:${te.xs} ${te.md};font-family:${Q.mono};font-size:${Q.small};color:${Le.primary};`
      );
      z.appendChild(x);
      const N = String(Math.max(d.symbols.length, p.symbols.length, 1) - 1).length, V = (re, ie) => `${(re == null ? lt : String(re)).padStart(N)} ${ie.padEnd(2)}`, W = (re) => {
        if (re.kind === "uniqueA") return `${s} atom ${re.a} ${re.symbolA} maps to nothing`;
        if (re.kind === "uniqueB") return `${a} atom ${re.b} ${re.symbolB} maps to nothing`;
        const ie = re.kind === "element" ? ", an element change" : "";
        return `${s} atom ${re.a} ${re.symbolA} maps to ${a} atom ${re.b} ${re.symbolB}${ie}`;
      }, ee = (re) => {
        const ie = O(
          "div",
          `white-space:pre;padding:${te.xs} ${te.md};border-radius:${Fe.sm};background:${jt.card};border-left:3px solid ${Zf[re.kind] ?? "transparent"};`,
          `${V(re.a, re.symbolA)} -> ${V(re.b, re.symbolB)}`
        );
        return ie.title = W(re), ie.dataset.gufeRelation = re.kind, ie;
      }, oe = () => {
        const re = L, ie = re ? m.filter((ae) => re.includes(ae.kind)) : m;
        x.replaceChildren(...ie.map(ee)), ie.length || x.appendChild(
          O("div", `${qr}grid-column:1/-1;`, L ? "No atoms of that kind." : "This mapping has no atoms.")
        ), G.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (L ? "; click the chip again for all of them" : "");
        for (const ae of A) {
          const pe = ae.kinds === L;
          ae.button.style.cssText = `${Me.plain}${pe ? Me.active : Me.button}`, ae.button.setAttribute("aria-pressed", String(pe)), ae.button.title = pe ? "Show every atom" : "Show only these atoms";
        }
      };
      oe();
      const se = Object.entries(n.annotations ?? {}).filter(([re]) => re !== "score");
      if (se.length) {
        z.appendChild(O("div", Lr, "Annotations"));
        const re = O("div", `${Ha}color:${Le.faint};`);
        for (const [ie, ae] of se)
          re.appendChild(O("div", "", `${ie}: ${String(ae)}`));
        z.appendChild(re);
      }
    }, D = () => {
      if (P(), h === "info") {
        J();
        return;
      }
      if (h === "2d") {
        le();
        return;
      }
      u.appendChild(me("Loading 3D viewer...")), sr().then(() => {
        g && (u.replaceChildren(), h === "colored" ? Z() : h === "openfe" ? ne() : h === "lines" ? X() : Y());
      }).catch((z) => {
        u.replaceChildren(me(`3D render failed: ${ye(z)}`, !0));
      });
    };
    return D(), {
      onResize() {
        for (const z of l)
          z.viewer && (z.viewer.resize(), z.viewer.render());
      },
      cleanup() {
        g = !1, S.cleanup(), P();
      }
    };
  }
}
Ae("gufe-atom-mapping", ap);
const _s = ["Force-directed", "Circular", "Radial"], cp = "ligand-network", lp = "Click a ligand or an edge to see it.";
function dp(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function up(e) {
  return Aa(e);
}
const Ss = (e) => Math.round(e * 100) / 100;
function fp(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function pp(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Tt = { initial: 0.58, min: 0.25, max: 0.8 }, Oe = 38, Cs = 1.5, ks = 200, hp = 2, mp = Math.SQRT2 * (Oe - hp), gp = 14, yp = 18, Ce = {
  fontSize: 11,
  below: Oe + 12,
  minFontSize: 7,
  insideWidth: (Oe - 6) * 2
}, zt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Es = 1.5, $p = 6.5, vp = 0.9, bp = 14, Mr = { size: 8, clearance: 8 }, wp = { fontSize: 10 }, _p = 0.4, Sp = Hr(M.netMatchAtom), Ot = { padding: 4, opacity: 0.95 }, Cp = 3, kt = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], kp = (e) => kt.find((t) => e >= t.from) ?? kt[kt.length - 1], Ep = (e) => kt[Math.min(kt.indexOf(e) + 1, kt.length - 1)], Ln = 200, xp = 24, Tr = { node: 0.12, edge: 0.06 }, Pp = 1.8, xs = 2 * Oe + 68, Ee = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: xs,
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
  collisionPadding: xs / 2 - Oe,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Ap(e) {
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
function Rp(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const i = fe("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Oe + Mr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Mr.size,
      markerHeight: Mr.size,
      orient: "auto"
    });
    return i.appendChild(fe("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function Np(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Mp(e) {
  const [t, n] = M.netEdgeRamp.map(Np), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const We = ot, Tp = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Op(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = dr("cpk"), o = [], i = (b) => (e.matched().get(b) ?? []).join(","), s = (b, u) => {
    if (t.has(u) || n.has(u)) return;
    const $ = e.nodes[u], h = e.matched().get(u), k = $.sdf && wo(
      b,
      $.sdf,
      ks,
      Te.layout,
      h && { atoms: h, color: Sp, radius: _p },
      r
    );
    if (!k) {
      n.add(u);
      return;
    }
    if (!Ra(e.depictionGroups[u], k, ks, mp)) {
      n.add(u);
      return;
    }
    t.add(u), o[u] = i(u);
  }, a = () => {
    for (const b of [...t])
      o[b] !== i(b) && (e.depictionGroups[b].replaceChildren(), t.delete(b));
  }, c = [], d = (b, u) => {
    if (c[b]) return c[b];
    u.setAttribute("font-size", String(Ce.fontSize));
    let $ = 0;
    try {
      $ = u.getBBox().width;
    } catch {
      return Ce.fontSize;
    }
    if (!$) return Ce.fontSize;
    const h = Ce.fontSize * Ce.insideWidth / $;
    return c[b] = Math.max(Ce.minFontSize, Math.min(Ce.fontSize, h)), c[b];
  }, p = [], v = (b) => {
    const u = e.captionPlates[b];
    if (p[b] === Ce.below) {
      u.setAttribute("display", "inline");
      return;
    }
    let $ = null;
    try {
      $ = e.captions[b].getBBox();
    } catch {
      $ = null;
    }
    if (!$?.width) {
      u.setAttribute("display", "none");
      return;
    }
    u.setAttribute("x", String($.x - zt.captionPadX)), u.setAttribute("y", String($.y - zt.captionPadY)), u.setAttribute("width", String($.width + zt.captionPadX * 2)), u.setAttribute("height", String($.height + zt.captionPadY * 2)), u.setAttribute("display", "inline"), p[b] = Ce.below;
  }, w = (b, u) => {
    const $ = u.structure && !t.has(b) ? Ep(u) : u;
    e.depictionGroups[b].setAttribute("display", $.structure ? "inline" : "none");
    const h = e.plates[b];
    h.setAttribute("display", $.structure ? "inline" : "none");
    const k = e.matched().has(b);
    h.setAttribute("stroke", k ? M.netMatchStroke : M.netNodeStroke);
    const S = e.circles[b];
    S.setAttribute("fill", $.disc ? k ? M.netMatchFill : M.netNodeFill : "none"), S.setAttribute("stroke", $.disc ? k ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[b].setAttribute("display", $.initials ? "inline" : "none");
    const l = e.captions[b], f = $.name === "below";
    if (l.setAttribute("fill", k ? M.netMatchStroke : f ? wu() : M.netNodeCaption), l.setAttribute("display", $.name === "none" ? "none" : "inline"), f || e.captionPlates[b].setAttribute("display", "none"), $.name === "none") return;
    const g = $.name === "inside";
    l.setAttribute("y", g ? "0" : String(Ce.below)), l.setAttribute("dominant-baseline", g ? "middle" : "auto"), l.setAttribute("font-size", String(g ? d(b, l) : Ce.fontSize)), f && v(b);
  };
  let y = null;
  return { apply: (b, u, $) => {
    const h = kp(b);
    y = h, e.stage.setAttribute("data-detail", h.id), e.edgeLabels.setAttribute("display", h.edgeScores ? "inline" : "none");
    for (let f = 0; f < e.nodes.length; f++) w(f, h);
    if (!h.structure) return;
    const { width: k, height: S } = e.viewport(), l = [];
    e.nodes.forEach((f, g) => {
      if (t.has(g) || n.has(g)) return;
      const E = f.x * b + u, P = f.y * b + $;
      E < -Ln || P < -Ln || E > k + Ln || P > S + Ln || l.push(g);
    }), l.length && e.rdkit().then((f) => {
      if (!(!f || y !== h))
        for (const g of l)
          s(f, g), w(g, h);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: a };
}
function Fp(e) {
  const t = Ct("ligand-network.query"), n = eo("ligand-network.minScore", 0, 0, 1), r = O("div", Qr), o = O("input", `${Yn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const i = Ma({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: Ct("ligand-network.smarts"),
    run: (b) => e.match(b),
    describe: (b) => {
      const u = b.unreadable ? `, ${b.unreadable} could not be read` : "";
      return `${b.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(i.element);
  const s = O("div", `display:flex;align-items:center;gap:8px;font-size:${Q.small};color:${M.textMuted};`), a = O("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), c = O("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(O("span", "", "score >=")), s.appendChild(c), s.appendChild(a), r.appendChild(s);
  const d = O("div", `font-size:${Q.small};color:${M.textMuted2};`);
  r.appendChild(d);
  const p = O("div", qs);
  r.appendChild(p), r.appendChild(O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`, So));
  const v = ka({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild(v.box);
  const w = O("button", `${Et}width:100%;`, "Clear selection");
  w.onclick = () => {
    e.selected.clear(), _(), e.refresh();
  }, r.appendChild(w);
  const y = (b) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? We(b).toLowerCase().includes(u) || (b.smiles ?? "").toLowerCase().includes(u) || b["gufe-key"].toLowerCase().includes(u) : !0;
  }, _ = () => {
    v.clearNote(), p.replaceChildren();
    const b = e.nodes.map((u, $) => ({ node: u, index: $ })).filter(({ node: u }) => y(u));
    d.textContent = `${b.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: $ } of b) {
      const h = u["gufe-key"], k = O(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(h) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(h) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), S = O("span", "flex:1;min-width:0;overflow-wrap:anywhere;", We(u));
      S.title = `${We(u)}
${u.smiles ?? ""}`, k.appendChild(S), k.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(h) ? e.selected.delete(h) : e.selected.add(h) : (e.selected.clear(), e.selected.add(h), e.focus($)), _(), e.refresh();
      }, p.appendChild(k);
    }
    b.length || p.appendChild(O("div", `font-size:${Q.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), _(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, _(), i.apply(), r;
}
class zp extends Pe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = [];
    let i = 0;
    for (const x of n.nodes ?? []) {
      const N = ke(r, x, "SmallMoleculeComponentViz");
      if (!N) {
        i++;
        continue;
      }
      o.push({ ...N, x: 0, y: 0 });
    }
    const s = new Map(o.map((x) => [x["gufe-key"], x])), a = [];
    let c = 0;
    for (const x of n.edges ?? []) {
      const N = s.get(x.componentA), V = s.get(x.componentB);
      if (!N || !V) {
        c++;
        continue;
      }
      a.push({ ...x, index: a.length, from: N, to: V });
    }
    const d = Zn(n.name || "Ligand network");
    d.statsEl.appendChild(et("ligands", String(o.length))), d.statsEl.appendChild(et("mappings", String(a.length))), t.appendChild(d);
    const p = O("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const v = /* @__PURE__ */ new Set(), w = { minScore: 0 }, y = { text: "" };
    let _ = () => {
    }, b = null;
    const u = () => b ??= ar().catch((x) => (console.warn("[gufe-viz] RDKit failed to load:", ye(x)), null)), $ = Na(
      u,
      o.map((x) => x.sdf ?? "")
    );
    let h = /* @__PURE__ */ new Map(), k = () => {
    };
    const S = async (x) => {
      const N = await $.run(x);
      return N.status === "superseded" || (h = N.status === "ok" ? N.matched : /* @__PURE__ */ new Map(), k()), N;
    }, l = io(
      d,
      () => Fp({
        nodes: o,
        edges: a,
        selected: v,
        filter: w,
        query: y,
        refresh: () => _(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (x) => {
          Y(x), B({ kind: "ligand", index: x });
        },
        match: (x) => S(x)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => G(),
        remember: dt("ligand-network.menuOpen", !1)
      }
    );
    p.appendChild(l.panel);
    let f = () => {
    };
    const g = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), E = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`);
    p.appendChild(g), p.appendChild(
      Zs(p, g, E, {
        min: Tt.min,
        max: Tt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: eo("ligand-network.canvasShare", Tt.initial, Tt.min, Tt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => f(),
        onOrient: (x) => ro(l.panel, x)
      })
    ), p.appendChild(E);
    const P = O("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    g.appendChild(P);
    const R = ft("ligand-network.layout", "Force-directed", _s), I = this.#n(
      (x) => G(x),
      () => A(),
      R
    );
    g.appendChild(I.bar);
    const T = this.#e(E, r);
    if (!o.length)
      return P.appendChild(
        me(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), T.message("Nothing to show."), {};
    i && ut(
      P,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && ut(P, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const q = u(), j = Ap(P);
    let Y = () => {
    };
    const Z = fp(ec(cp), o.length);
    let ne = Z && { scale: Z.scale, tx: Z.tx, ty: Z.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (Z && Z.selected >= 0) {
      const x = Z.selectedKind ?? "edge";
      Z.selected < (x === "ligand" ? o.length : a.length) && (X = { kind: x, index: Z.selected });
    }
    let le = () => ({ scale: 1, tx: 0, ty: 0 }), J = !1, D = null, z = R.get(), F = !1, m = !0, C = () => {
    }, A = () => {
    }, L = 0;
    const U = () => {
      if (!X) {
        T.message(a.length ? lp : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? T.showMapping(a[X.index]) : T.showLigand(o[X.index]);
    }, B = (x) => {
      X = x, U(), C();
    }, G = (x = z) => {
      const N = J && x === z ? le() : null, V = ++L;
      z = x, D?.(), D = null, P.querySelectorAll("svg").forEach((se) => se.remove());
      const W = P.clientWidth || 800, ee = P.clientHeight || 600;
      Ip(o, W, ee, z, a), Z && pp(o, Z.nodes);
      const oe = () => {
        if (!m || V !== L) return;
        const se = this.#t(P, o, a, W, ee, B, q, j);
        C = () => se.setSelected(X), A = se.reset, D = se.cleanup, Y = (ie) => se.focusOn(ie), le = se.transform, _ = () => {
          const ie = y.text.trim().toLowerCase(), ae = v.size > 0 || ie.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Re of o) {
            const qe = Re["gufe-key"], it = v.has(qe) || ie.length > 0 && (We(Re).toLowerCase().includes(ie) || (Re.smiles ?? "").toLowerCase().includes(ie) || qe.toLowerCase().includes(ie));
            (!ae || it) && pe.add(qe);
          }
          const be = /* @__PURE__ */ new Set();
          a.forEach((Re, qe) => {
            (Re.score ?? 0) < w.minScore || !pe.has(Re.from["gufe-key"]) || !pe.has(Re.to["gufe-key"]) || be.add(qe);
          });
          const we = ae || w.minScore > 0;
          se.setEmphasis(we ? pe : null, we ? be : null);
        }, k = () => se.setMatches(h), C(), _(), k();
        const re = ne ?? N;
        re ? (se.setTransform(re.scale, re.tx, re.ty), ne = null) : se.fit(), J = !0;
      };
      if (z !== "Force-directed" || F || Z) {
        oe();
        return;
      }
      jp(o, a, W, ee).then((se) => {
        if (!(!m || V !== L)) {
          if (se) {
            oe();
            return;
          }
          F = !0, I.picker.value = "Circular", ut(P, "d3 could not be loaded - showing the circular layout instead"), G("Circular");
        }
      }, oe);
    };
    return f = () => G(), G(), U(), {
      onResize: () => G(),
      cleanup: () => {
        m = !1, $.cancel(), j.remove(), D?.();
      },
      viewState: () => ({
        nodes: o.map((x) => [Ss(x.x), Ss(x.y)]),
        ...le(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = O(
      "div",
      Vs.bottom
    ), i = O("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${M.textMuted};`);
    i.appendChild(O("span", "", "score")), i.appendChild(
      O(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(O("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(O("label", `font-size:${Q.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const s = Lt(
      _s.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(s), o.appendChild($o(n, "Reset pan and zoom")), { bar: o, picker: s };
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
    const o = (s) => r.replaceChildren(me(s)), i = (s, a) => {
      const c = document.createElement(s);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => i("gufe-atom-mapping", Ta(dp(s), n)),
      showLigand: (s) => i("gufe-small-molecule", up(s)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, i, s, a, c) {
    const d = fe("svg", {
      class: "gufe-graph",
      width: o,
      height: i,
      style: "display:block;touch-action:none;"
    }), p = fe("g");
    d.appendChild(p), t.appendChild(d);
    const v = fe("defs"), w = Rp(v);
    d.appendChild(v);
    const y = [], _ = fe("g"), b = fe("g"), u = fe("g", { "pointer-events": "none" }), $ = fe("g");
    p.append(_, b, u, $);
    for (const j of r) {
      const Y = Mp(j.score), Z = Es + (j.score ?? 0.5) * ($p - Es), ne = fe("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Z + Ot.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = fe("line", {
        stroke: Y,
        "stroke-width": Z,
        "stroke-opacity": vp,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${w(Y)})`,
        "pointer-events": "none"
      }), le = fe("line", { stroke: "transparent", "stroke-width": bp, style: "cursor:pointer;" });
      le.addEventListener("click", (z) => {
        z.stopPropagation(), s({ kind: "edge", index: j.index });
      }), le.addEventListener("mousemove", (z) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Je(We(j.from))} -&gt; ${Je(We(j.to))}</div>` + (j.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${j.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Q.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          z.offsetX,
          z.offsetY
        );
      }), le.addEventListener("mouseleave", () => c.hide()), y.push(ne), _.append(ne, X), b.appendChild(le);
      const J = fe("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": wp.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      J.textContent = j.score == null ? "" : j.score.toFixed(2);
      const D = fe("g", { class: "gufe-edge-label" });
      D.appendChild(J), u.appendChild(D);
    }
    const h = [], k = [], S = [], l = [], f = [], g = [], E = [], P = n.map((j) => {
      const Y = fe("g", { class: "gufe-node", style: "cursor:grab;" });
      Y.addEventListener("mousemove", (F) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Je(We(j))}</div>` + (j.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Je(j.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${Je(j["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${M.textMuted2};">Click to see the ligand</div>`,
          F.offsetX,
          F.offsetY
        );
      }), Y.addEventListener("mouseleave", () => c.hide());
      const Z = fe("circle", {
        class: "gufe-node-halo",
        r: Oe + Ot.padding,
        fill: "none",
        stroke: M.netHaloColor,
        "stroke-width": Ot.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      Y.appendChild(Z), f.push(Z);
      const ne = fe("circle", {
        class: "gufe-node-disc",
        r: Oe,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": Cs,
        "pointer-events": "all"
      });
      Y.appendChild(ne), k.push(ne);
      const X = fe("circle", {
        class: "gufe-node-plate",
        r: Oe,
        fill: Kr(),
        stroke: M.netNodeStroke,
        "stroke-width": Cs,
        display: "none",
        "pointer-events": "none"
      });
      Y.appendChild(X), S.push(X);
      const le = fe("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      Y.appendChild(le), h.push(le);
      const J = fe("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": yp,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      J.textContent = We(j).slice(0, 2).toUpperCase(), Y.appendChild(J), g.push(J);
      const D = fe("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Ce.below,
        "font-size": Ce.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      D.textContent = Tp(We(j), gp), D.setAttribute("display", "none"), E.push(D);
      const z = fe("rect", {
        class: "gufe-node-caption-plate",
        rx: zt.captionRadius,
        fill: Kr(),
        display: "none",
        "pointer-events": "none"
      });
      return l.push(z), Y.appendChild(z), Y.appendChild(D), $.appendChild(Y), Y;
    }), R = () => {
      r.forEach((j, Y) => {
        for (const ne of [y[Y], _.children[Y * 2 + 1], b.children[Y]]) {
          const X = ne;
          X.setAttribute("x1", String(j.from.x)), X.setAttribute("y1", String(j.from.y)), X.setAttribute("x2", String(j.to.x)), X.setAttribute("y2", String(j.to.y));
        }
        u.children[Y].setAttribute(
          "transform",
          `translate(${(j.from.x + j.to.x) / 2},${(j.from.y + j.to.y) / 2 - 8})`
        );
      }), n.forEach((j, Y) => P[Y].setAttribute("transform", `translate(${j.x},${j.y})`));
    };
    R();
    let I = /* @__PURE__ */ new Map();
    const T = Op({
      nodes: n,
      circles: k,
      plates: S,
      captionPlates: l,
      matched: () => I,
      captions: E,
      initials: g,
      depictionGroups: h,
      edgeLabels: u,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), q = this.#r(
      d,
      p,
      n,
      P,
      R,
      T.apply,
      (j) => s({ kind: "ligand", index: j })
    );
    return {
      setSelected(j) {
        const Y = j?.kind === "edge" ? j.index : -1, Z = j?.kind === "ligand" ? j.index : -1;
        y.forEach((ne, X) => ne.setAttribute("opacity", X === Y ? String(Ot.opacity) : "0")), f.forEach((ne, X) => ne.setAttribute("opacity", X === Z ? String(Ot.opacity) : "0"));
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
        const { scale: Y, tx: Z, ty: ne } = q.transform();
        T.apply(Y, Z, ne);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(j, Y) {
        P.forEach((Z, ne) => {
          const X = !j || j.has(n[ne]["gufe-key"]);
          Z.setAttribute("opacity", X ? "1" : String(Tr.node));
        }), r.forEach((Z, ne) => {
          const X = !Y || Y.has(ne), le = X ? "0.9" : String(Tr.edge);
          _.children[ne * 2 + 1].setAttribute("stroke-opacity", le), u.children[ne].setAttribute("opacity", X ? "1" : String(Tr.edge));
        });
      },
      focusOn(j) {
        const Y = n[j];
        Y && q.centreOn(Y.x, Y.y);
      },
      setDetail: T.apply,
      depictionsDrawn: () => T.drawn(),
      fit: q.fit,
      reset: q.reset,
      transform: q.transform,
      setTransform: q.setTransform,
      cleanup: q.cleanup
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
    const c = Pa(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => xa(r, Oe),
      margin: xp,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, p) => {
      let v = null, w = !1;
      d.addEventListener("pointerdown", (_) => {
        _.stopPropagation();
        const { scale: b } = c.transform();
        v = { x: _.clientX - r[p].x * b, y: _.clientY - r[p].y * b }, w = !1, d.setPointerCapture(_.pointerId);
      }), d.addEventListener("pointermove", (_) => {
        if (!v) return;
        if (c.gesturing()) {
          v = null, w = !0;
          return;
        }
        const { scale: b } = c.transform(), u = (_.clientX - v.x) / b, $ = (_.clientY - v.y) / b;
        Math.hypot(u - r[p].x, $ - r[p].y) * b > Cp && (w = !0), r[p].x = r[p].fx = u, r[p].y = r[p].fy = $, i();
      });
      const y = () => {
        v = null;
      };
      d.addEventListener("pointerup", y), d.addEventListener("pointercancel", y), d.addEventListener("click", (_) => {
        _.stopPropagation(), w || a(p);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, p) => c.centreOn(d, p, Pp)
    };
  }
}
function Ip(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, d) => {
    c.forEach((p, v) => {
      const w = 2 * Math.PI * v / Math.max(1, c.length) - Math.PI / 2;
      p.x = i + d * Math.cos(w), p.y = s + d * Math.sin(w), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((b) => [b["gufe-key"], []]));
    for (const b of o)
      c.get(b.from["gufe-key"]).push(b.to["gufe-key"]), c.get(b.to["gufe-key"]).push(b.from["gufe-key"]);
    const d = new Map(e.map((b) => [b["gufe-key"], b])), p = e.reduce(
      (b, u) => c.get(u["gufe-key"]).length > c.get(b["gufe-key"]).length ? u : b
    ), v = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let w = [p["gufe-key"]], y = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; w.length; ) {
      a(
        w.map((u) => d.get(u)),
        y === 0 ? 0 : y * _ + 40
      );
      const b = [];
      for (const u of w)
        for (const $ of c.get(u))
          v.has($) || (v.add($), b.push($));
      w = b, y++;
    }
    a(e.filter((b) => !v.has(b["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function jp(e, t, n, r) {
  let o;
  try {
    if (o = await ua(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance((c) => Ee.linkBaseDistance + (1 - (c.score ?? 0.5)) * Ee.linkScoreBonus).strength(Ee.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Ee.chargeStrength).distanceMin(Ee.chargeDistanceMin).distanceMax(Ee.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Ee.centerStrength)).force("collision", o.forceCollide(Oe + Ee.collisionPadding).iterations(Ee.collisionIterations)).force("x", o.forceX(n / 2).strength(Ee.drift)).force("y", o.forceY(r / 2).strength(Ee.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * Ee.tickMultiplier; c++) s.tick();
  return !0;
}
Ae("gufe-ligand-network", zp);
const Dp = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function Oa(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Ye(t, o);
    i && (Dp.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function Lp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Ps = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], qp = 0.4;
class Vp extends Pe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Oa(n, xt(n)), o = r.structures.map((y, _) => _), i = r.ligands.map((y, _) => r.structures.length + _), s = ft(
      "complex.focus",
      "site",
      Ps.map((y) => y.id)
    );
    let a = s.get(), c = null;
    const d = Ca({
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
      restyle: p,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () => [
        Xn(
          Ps,
          a,
          (y) => {
            a = y, v();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => v()
    });
    function p() {
      const y = d.viewer();
      y && (Yr(y, d.opts, c, d.showStatus, { model: o }), wf(y, { model: i }), y.render());
    }
    function v() {
      const y = d.viewer();
      y && (a === "site" && i.length ? (y.zoomTo({ model: i }), y.zoom(qp)) : y.zoomTo(), y.render(), w());
    }
    function w() {
      const y = d.viewer();
      y && (d.interaction()?.cleanup(), d.setInteraction(cr(d.pane.container, y)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(As(r, () => c));
    try {
      c = _a(r.structures[0].pdb), d.setStats(As(r, () => c));
    } catch (y) {
      d.showStatus(`PDB parse error: ${ye(y)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), sr().then(() => {
      const y = tt.createViewer(d.pane.container, { backgroundColor: jt.viewer });
      d.setViewer(y);
      for (const _ of r.structures) y.addModel(_.pdb, "pdb");
      for (const _ of r.ligands) y.addModel(va(_.sdf), "sdf");
      p(), d.restoreCamera() ? w() : v(), y.spin(d.opts.spin ? "y" : !1), y.render();
    }).catch((y) => {
      d.showStatus(`Failed to render structure: ${ye(y)}`, "error");
    }), d.handle;
  }
}
function As(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = bo(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...Sa(o)] : [r];
}
Ae("gufe-complex", Vp);
function Bp(e, t) {
  return {
    ...e,
    registry: _o(t, Object.values(e.components ?? {}))
  };
}
const Up = "chemical-system.component", Kp = 460, Hp = 200, Gp = "35%";
function Wp(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function Jp(e) {
  return e.type === "UnknownComponentViz" ? Qn(e.gufe_type) : null;
}
function Rs(e) {
  return O(
    "div",
    `padding:10px 10px 16px;font-weight:${ge.bold};font-size:${Q.title};color:${M.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class Yp extends Pe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = [], i = [];
    for (const [R, I] of Object.entries(n.components ?? {})) {
      const T = Ye(r, I);
      T ? o.push([R, T]) : i.push(R);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(Rs(s)), t.appendChild(
        me(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = O(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), i.length && ut(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const c = O(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.panelBg};`
    );
    a.appendChild(c), c.appendChild(Rs(s));
    const d = O(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(d);
    const p = O(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(p);
    const v = O(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    p.appendChild(v);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", w.setAttribute(Vr, ""), v.appendChild(w);
    const y = Oa(n, r), _ = Lp(y), b = (R) => _ && y.structures.some(
      (I) => I === R
    ), u = o.filter(([, R]) => !b(R)).map(([R, I]) => ({
      key: R,
      title: R,
      subtitle: Wp(I),
      badge: Jp(I),
      element: w,
      point: () => {
        w.payload = I;
      }
    }));
    if (_) {
      const R = document.createElement("gufe-complex");
      R.style.cssText = "flex:1;min-width:0;min-height:0;", R.setAttribute(Vr, ""), R.payload = n, u.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${y.ligands.length === 1 ? y.ligands[0].name || "ligand" : "ligands"} in ${y.structures[0].name || "structure"}`,
        badge: null,
        element: R,
        point: () => {
        }
      });
    }
    let $ = null;
    const h = (R) => {
      $ !== R && (v.replaceChildren(R), $ = R);
    }, k = Ct(Up), S = [], l = (R) => {
      S.forEach((I, T) => {
        const q = T === R;
        I.style.background = q ? M.cardBgActive : M.cardBg, I.style.borderColor = q ? M.cardBorderActive : M.cardBorder;
      }), u[R].point(), h(u[R].element);
    }, f = (R) => {
      k.set(u[R].key), l(R);
    };
    u.forEach((R, I) => {
      const T = O(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${Q.body};flex-shrink:0;max-width:100%;box-sizing:border-box;`
      );
      T.appendChild(
        O("span", `font-weight:700;color:${M.textPrimary};`, R.title)
      ), T.appendChild(
        O(
          "span",
          `font-size:${Q.small};color:${M.textMuted};`,
          R.subtitle
        )
      ), R.badge && T.appendChild(R.badge), T.onclick = () => f(I), S.push(T), d.appendChild(T);
    });
    const g = u.findIndex((R) => R.key === k.get());
    l(g < 0 ? 0 : g);
    let E = null;
    const P = er(a, (R) => {
      const I = R > 0 && R < Kp;
      I !== E && (E = I, a.style.flexDirection = I ? "column" : "row", c.style.flex = I ? "0 0 auto" : `0 0 ${Hp}px`, c.style.maxHeight = I ? Gp : "none", c.style.borderRight = I ? "none" : `1px solid ${M.splitBorder}`, c.style.borderBottom = I ? `1px solid ${M.splitBorder}` : "none", d.style.flexDirection = I ? "row" : "column", d.style.flexWrap = I ? "wrap" : "nowrap", $?.resize?.());
    });
    return {
      onResize: () => $?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        P(), $?.remove();
      }
    };
  }
}
Ae("gufe-chemical-system", Yp);
const Xp = 460, Zp = 210, Qp = "42%";
function eh(e, t) {
  const n = ke(t, e.stateA, "ChemicalSystemViz"), r = ke(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: _o(t, o) };
}
const Co = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function th(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function nh(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function rh(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Or(e, t, n) {
  const r = O(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${te.md};padding:5px ${te.lg};border-radius:${Fe.md};background:${M.cardBg};border:1px solid ${M.cardBorder};`
  );
  n && r.appendChild(
    O(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;color:${M.textMuted2};`,
      n
    )
  );
  const o = rh(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(O("span", `font-size:${Q.body};color:${M.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? M.cardBorder : Co[t];
  const i = O(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${M.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Qn(o.type)), r;
}
function oh(e, t, n, r) {
  const o = O("div", `display:flex;flex-direction:column;gap:${te.sm};min-width:0;`), i = O("div", `display:flex;align-items:center;gap:${te.md};min-width:0;`);
  i.appendChild(
    O("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Co[t]};`)
  );
  const s = O(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${ge.bold};color:${M.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Or(n, t, null)), o) : (o.appendChild(Or(n, t, "A")), o.appendChild(Or(r, t, "B")), o);
}
function ih(e, t) {
  const n = Ye(t, e.componentA), r = Ye(t, e.componentB);
  return `${n ? ot(n) : "A"} to ${r ? ot(r) : "B"}`;
}
function Ns(e) {
  return O(
    "div",
    `font-weight:${ge.bold};font-size:${Q.heading};color:${M.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Ms(e, t) {
  const n = O("div", `display:flex;align-items:baseline;gap:${te.md};min-width:0;font-size:${Q.small};`);
  return n.appendChild(O("span", `flex:0 0 auto;color:${M.textMuted};`, e)), n.appendChild(
    O("span", `min-width:0;font-weight:${ge.bold};color:${M.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class sh extends Pe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = ke(r, n.stateA, "ChemicalSystemViz"), i = ke(r, n.stateB, "ChemicalSystemViz"), s = ke(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const l = O("div", "padding:12px 14px;flex-shrink:0;");
      return l.appendChild(Ns(c)), t.appendChild(l), t.appendChild(
        me("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const d = nh(o, i), p = O("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(p);
    const v = O(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${M.panelBg};`
    );
    p.appendChild(v);
    const w = O("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    p.appendChild(w);
    const y = O("div", `display:flex;flex-direction:column;gap:${te.md};min-width:0;`);
    y.appendChild(Ns(c)), y.appendChild(Ms("protocol", s?.gufe_type || s?.name || "-")), y.appendChild(Ms("mappings", String(a.length))), v.appendChild(y);
    const _ = O("div", `display:flex;flex-direction:column;gap:${te.xs};`);
    for (const [l, f] of [
      ["State A", o],
      ["State B", i]
    ])
      _.appendChild(
        O(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};overflow-wrap:anywhere;`,
          `${l}${f.name ? ` - ${f.name}` : ""}`
        )
      );
    v.appendChild(_);
    const b = /* @__PURE__ */ new Set();
    for (const l of d) {
      const f = o.components?.[l], g = i.components?.[l], E = th(f, g);
      b.add(E), v.appendChild(
        oh(
          l,
          E,
          Ye(r, f),
          Ye(r, g)
        )
      );
    }
    if (b.size > 1) {
      const l = O(
        "div",
        `display:flex;flex-wrap:wrap;gap:${te.lg} 12px;padding-top:${te.sm};font-size:${Q.small};color:${M.textMuted};`
      );
      for (const f of ["unchanged", "changed", "added", "removed"])
        b.has(f) && l.appendChild(et(f, "", Co[f]));
      v.appendChild(l);
    }
    const u = O("div", qa, "Atom mapping");
    w.appendChild(u);
    let $ = null;
    const h = er(t, (l) => {
      const f = l > 0 && l < Xp;
      f !== $ && ($ = f, p.style.flexDirection = f ? "column" : "row", v.style.flex = f ? "0 0 auto" : `0 0 ${Zp}px`, v.style.maxWidth = f ? "none" : Qp, v.style.maxHeight = f ? "45%" : "none", v.style.borderRight = f ? "none" : `1px solid ${M.splitBorder}`, v.style.borderBottom = f ? `1px solid ${M.splitBorder}` : "none", u.style.display = f ? "block" : "none");
    });
    if (!a.length)
      return w.appendChild(
        me(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const k = document.createElement("gufe-atom-mapping");
    k.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (l) => {
      k.payload = Ta(a[l], r);
    };
    if (S(0), a.length > 1) {
      const l = O(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      l.appendChild(
        Xn(
          a.map((f, g) => ({
            id: String(g),
            label: f.name || ih(f, r)
          })),
          "0",
          (f) => S(Number(f))
        )
      ), w.appendChild(l);
    }
    return w.appendChild(k), {
      onResize: () => k.resize?.(),
      cleanup: () => {
        h(), k.remove();
      }
    };
  }
}
Ae("gufe-transformation", sh);
const Ge = { width: 176, height: 54, depictedHeight: 176, platedHeight: 134, radius: 10 }, je = { pad: 6, size: 122, radius: 6, inset: 4 }, Ts = 200, He = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, ah = 7, Fr = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], ch = (e) => Fr.find((t) => e >= t.from) ?? Fr[Fr.length - 1], qn = 200, Vn = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, Os = (e, t) => {
  const n = t ? Vn.selectedWidth : Vn.width;
  return Math.max(Vn.min, Math.min(n, n * e));
}, zr = { width: 3, selectedWidth: 4.5, min: 1.25 }, Fs = (e, t) => {
  const n = t ? zr.selectedWidth : zr.width;
  return Math.max(zr.min, Math.min(n, n * e));
}, _t = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ft = { initial: 0.56, min: 0.25, max: 0.78 }, lh = 24, zs = { x: Ge.width / 2, y: Ge.depictedHeight / 2 }, Is = { node: 0.12, edge: 0.06 }, dh = 1.4, uh = 3, Wn = ot;
function Ir(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Fa(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Ye(t, r);
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
const fh = (e, t) => Fa(e, t).join(" + ");
function ph(e, t) {
  const n = { fill: M.netNodeFill, stroke: M.netNodeStroke }, r = e.map((s) => fh(s, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > M.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const i = new Map(
    o.map((s, a) => [s, { fill: M.netGroupFill[a], stroke: M.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (s) => i.get(r[s]) ?? n,
    legend: o.map((s) => [s, i.get(s)])
  };
}
function hh(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Ye(t, o);
    if (!i) continue;
    n.push(ot(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function mh(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((i) => {
    const s = [];
    for (const a of Object.values(i.components ?? {})) {
      const c = ke(t, a, "SmallMoleculeComponentViz");
      if (!c) continue;
      let d = r.get(a);
      d === void 0 && (d = n.length, r.set(a, d), n.push(c.sdf ?? "")), s.push(d);
    }
    return s;
  });
  return { sources: n, perNode: o };
}
function gh(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function yh(e) {
  const t = Ct("alchemical-network.query"), n = Ct("alchemical-network.composition"), r = O("div", Qr), o = O("input", `${Yn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const i = Ma({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: Ct("alchemical-network.smarts"),
    run: (w) => e.match(w),
    describe: (w) => {
      const y = w.unreadable ? `, ${w.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${y}`;
    }
  });
  if (r.appendChild(i.element), e.compositions.length > 1) {
    const w = O("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${M.textMuted};`);
    w.appendChild(O("span", "flex-shrink:0;", "made of"));
    const y = Lt(
      [{ id: "", label: "anything" }, ...e.compositions.map((_) => ({ id: _, label: _ }))],
      "",
      (_) => {
        e.filter.composition = _, v(), e.refresh();
      },
      n
    );
    y.style.cssText += "flex:1;min-width:0;", e.filter.composition = y.value, w.appendChild(y), r.appendChild(w);
  }
  const s = O("div", `font-size:${Q.small};color:${M.textMuted2};`);
  r.appendChild(s);
  const a = O("div", qs);
  r.appendChild(a), r.appendChild(O("div", `font-size:${Q.tiny};line-height:1.5;color:${M.textMuted2};`, So));
  const c = ka({
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
  const d = O("button", `${Et}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), v(), e.refresh();
  }, r.appendChild(d);
  const p = (w) => {
    const y = e.query.text.trim().toLowerCase();
    if (y && !e.haystacks[w].includes(y) || e.filter.composition && e.signatures[w] !== e.filter.composition) return !1;
    const _ = e.matched();
    return !(_ && !_.has(w));
  }, v = () => {
    c.clearNote(), a.replaceChildren();
    const w = e.nodes.map((y, _) => ({ node: y, index: _ })).filter(({ index: y }) => p(y));
    s.textContent = `${w.length} of ${e.nodes.length} systems`;
    for (const { node: y, index: _ } of w) {
      const b = y["gufe-key"], u = e.selected.has(b), $ = O(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? M.cardBorderActive : M.cardBorder};background:${u ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), h = e.colorOf(_);
      $.appendChild(
        O(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${h.fill};border:1px solid ${h.stroke};`
        )
      );
      const k = O("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Wn(y));
      k.title = `${Wn(y)}
${e.signatures[_]}`, $.appendChild(k), $.onclick = (S) => {
        S.shiftKey || S.metaKey || S.ctrlKey ? e.selected.has(b) ? e.selected.delete(b) : e.selected.add(b) : (e.selected.clear(), e.selected.add(b), e.focus(_)), v(), e.refresh();
      }, a.appendChild($);
    }
    w.length || a.appendChild(O("div", `font-size:${Q.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), v(), e.refresh();
  }, v(), e.mounted(v), i.apply(), r;
}
function $h(e, t, n) {
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
async function vh(e, t, n, r) {
  let o;
  try {
    if (o = await ua(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance(_t.linkDistance).strength(_t.linkStrength)
  ).force("charge", o.forceManyBody().strength(_t.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(_t.collisionRadius).iterations(_t.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * _t.tickMultiplier; c++) s.tick();
  return !0;
}
class bh extends Pe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = [];
    let i = 0;
    for (const B of n.nodes ?? []) {
      const G = ke(r, B, "ChemicalSystemViz");
      if (!G) {
        i++;
        continue;
      }
      o.push({ ...G, x: 0, y: 0 });
    }
    const s = new Map(o.map((B) => [B["gufe-key"], B])), a = [];
    let c = 0;
    for (const B of n.edges ?? []) {
      const G = s.get(B.stateA), x = s.get(B.stateB);
      if (!G || !x) {
        c++;
        continue;
      }
      a.push({ ...B, index: a.length, from: G, to: x });
    }
    const d = (B) => {
      const G = ke(r, B.protocol, "ProtocolViz");
      return G?.gufe_type || G?.name || "";
    }, p = new Set(a.map(d).filter(Boolean)), v = Zn(n.name || "Alchemical network");
    v.statsEl.appendChild(et("systems", String(o.length))), v.statsEl.appendChild(et("transformations", String(a.length))), p.size && v.statsEl.appendChild(et("protocol", [...p].join(", ")));
    const w = ph(o, r), y = O("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    let _ = () => {
    };
    const b = /* @__PURE__ */ new Set(), u = { composition: "" }, $ = { text: "" };
    let h = () => {
    }, k = () => {
    }, S = () => {
    };
    const l = o.map((B) => hh(B, r));
    let f = null;
    const g = () => f ??= ar().catch((B) => (console.warn("[gufe-viz] RDKit failed to load:", ye(B)), null)), E = mh(o, r), P = Na(g, E.sources), R = o.map((B, G) => {
      const x = E.perNode[G].map((V) => E.sources[V]).find((V) => V) ?? null, N = Fa(B, r);
      return {
        colors: w.colorOf(G),
        composition: N.join(" + "),
        besides: gh(N, x !== null, E.perNode[G].length),
        sdf: x
      };
    });
    let I = null, T = () => {
    };
    const q = async (B) => {
      const G = await P.run(B);
      return G.status === "superseded" || (I = G.status === "ok" ? new Set(o.flatMap((x, N) => E.perNode[N].some((V) => G.matched.has(V)) ? [N] : [])) : null, T(), h()), G;
    }, j = io(
      v,
      () => yh({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: w.signatures,
        colorOf: w.colorOf,
        compositions: w.compositions,
        selected: b,
        filter: u,
        query: $,
        refresh: () => h(),
        matched: () => I,
        match: (B) => q(B),
        mounted: (B) => {
          T = B;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (B) => {
          k(B), S(B);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => _(),
        remember: dt("alchemical-network.menuOpen", !1)
      }
    ), Y = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), Z = O("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`), ne = O("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`), X = O("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    X.appendChild(j.panel), X.appendChild(ne), Y.appendChild(v), Y.appendChild(X), y.appendChild(Y), y.appendChild(
      Zs(y, Y, Z, {
        min: Ft.min,
        max: Ft.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: eo("alchemical-network.canvasShare", Ft.initial, Ft.min, Ft.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => _(),
        onOrient: (B) => {
          X.style.flexDirection = B ? "column" : "row", ro(j.panel, B);
        }
      })
    ), y.appendChild(Z);
    const le = this.#e(Z, r);
    if (!o.length)
      return ne.appendChild(
        me(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), le.message("Nothing to show."), { cleanup: () => le.cleanup() };
    i && ut(
      ne,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && ut(
      ne,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let J = !0, D = !1, z = null, F = () => {
    }, m = () => {
    }, C = () => {
    }, A = 0;
    Y.appendChild(this.#n(w.legend, () => m()));
    const L = (B, G) => {
      z = { kind: B, index: G }, le.show(B === "node" ? o[G] : a[G], B), F();
    };
    S = (B) => L("node", B);
    const U = () => {
      const B = ++A, G = ne.clientWidth || 800, x = ne.clientHeight || 600;
      $h(o, G, x);
      const N = () => {
        if (!J || B !== A) return;
        C(), ne.querySelectorAll("svg").forEach((W) => W.remove());
        const V = this.#t(ne, o, a, G, x, R, g, L);
        C = V.cleanup, m = V.reset, k = (W) => V.focusOn(W), F = () => V.setSelected(z), F(), h = () => {
          const W = $.text.trim().toLowerCase();
          if (!(b.size > 0 || W.length > 0 || u.composition !== "" || I !== null)) {
            V.setEmphasis(null, null);
            return;
          }
          const oe = W.length > 0 || u.composition !== "" || I !== null, se = /* @__PURE__ */ new Set();
          o.forEach((ie, ae) => {
            const pe = oe && (!W || l[ae].includes(W)) && (!u.composition || w.signatures[ae] === u.composition) && (!I || I.has(ae));
            (b.has(ie["gufe-key"]) || pe) && se.add(ie["gufe-key"]);
          });
          const re = /* @__PURE__ */ new Set();
          a.forEach((ie, ae) => {
            se.has(ie.from["gufe-key"]) && se.has(ie.to["gufe-key"]) && re.add(ae);
          }), V.setEmphasis(se, re);
        }, h();
      };
      if (D) {
        N();
        return;
      }
      vh(o, a, G, x).then((V) => {
        !J || B !== A || (V || (D = !0, ut(ne, "d3 could not be loaded - showing the circular layout instead")), N());
      }, N);
    };
    return _ = U, U(), L("node", 0), {
      onResize: () => U(),
      cleanup: () => {
        J = !1, C(), le.cleanup();
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
    const r = O("div", Vs.bottom);
    if (r.appendChild($o(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(O("span", `font-size:${Q.small};color:${M.textMuted};`, "systems made of"));
    for (const [o, i] of t) {
      const s = O("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        O(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${i.fill};border:2px solid ${i.stroke};`
        )
      ), s.appendChild(
        O("span", `font-size:${Q.small};color:${M.textPrimary};overflow-wrap:anywhere;`, o)
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
    const r = O("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const i = (a) => r.replaceChildren(me(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = Bp(Aa(a), n);
      else {
        const { index: p, from: v, to: w, ...y } = a;
        d = eh(y, n);
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
    const d = fe("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(d);
    const p = fe("g");
    d.appendChild(p);
    const v = fe("g"), w = fe("g");
    p.append(v, w);
    let y = () => {
    };
    const _ = Pa(d, p, {
      bounds: () => xa(n, zs.x, zs.y),
      margin: lh,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (m, C, A) => y(m, C, A)
    }), b = (m, C) => {
      _.wasPan() || c(m, C);
    }, u = [], $ = [];
    r.forEach((m, C) => {
      const A = fe("line", {
        x1: m.from.x,
        y1: m.from.y,
        x2: m.to.x,
        y2: m.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": Os(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      hs(A, m.name || "transformation"), A.addEventListener("click", () => b("edge", C)), v.appendChild(A), u.push(A);
      const L = fe("line", {
        x1: m.from.x,
        y1: m.from.y,
        x2: m.to.x,
        y2: m.to.y,
        stroke: "transparent",
        "stroke-width": Vn.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      L.addEventListener("click", () => b("edge", C)), v.appendChild(L), $.push(L);
    });
    const h = n.map(() => []), k = new Map(n.map((m, C) => [m, C]));
    r.forEach((m, C) => {
      const A = k.get(m.from), L = k.get(m.to);
      A !== void 0 && h[A].push(C), L !== void 0 && L !== A && h[L].push(C);
    });
    const S = [], l = [], f = [], g = [], E = [], P = [], R = [], I = [];
    n.forEach((m, C) => {
      const A = s[C], L = A.sdf ? Ge.depictedHeight : Ge.height, U = fe("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${m.x},${m.y})`
      });
      f.push(U);
      const B = fe("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -L / 2,
        width: Ge.width,
        height: L,
        rx: Ge.radius,
        fill: A.colors.fill,
        stroke: A.colors.stroke,
        "stroke-width": Fs(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (U.appendChild(B), S.push(B), l.push(A.colors.stroke), A.sdf) {
        const N = fe("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -L / 2 + je.pad,
          width: je.size,
          height: je.size,
          rx: je.radius,
          fill: Kr(),
          display: "none",
          "pointer-events": "none"
        });
        U.appendChild(N), P.push(N);
        const V = fe("g", { transform: `translate(0,${-L / 2 + je.pad + je.size / 2})` }), W = fe("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        V.appendChild(W), U.appendChild(V), R.push(V), I.push(W);
      } else
        P.push(null), R.push(null), I.push(null);
      const G = fe("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": He.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      G.textContent = Ir(Wn(m), He.nameChars), U.appendChild(G), g.push(G);
      const x = fe("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": He.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      x.textContent = Ir(A.composition, He.subChars), U.appendChild(x), E.push(x), hs(U, `${Wn(m)} - ${A.composition}`), w.appendChild(U);
    });
    const T = (m) => {
      const C = n[m];
      f[m].setAttribute("transform", `translate(${C.x},${C.y})`);
      for (const A of h[m])
        for (const L of [u[A], $[A]])
          r[A].from === C && (L.setAttribute("x1", String(C.x)), L.setAttribute("y1", String(C.y))), r[A].to === C && (L.setAttribute("x2", String(C.x)), L.setAttribute("y2", String(C.y)));
    }, q = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set(), Y = dr("cpk"), Z = (m, C) => {
      if (q.has(C) || j.has(C)) return;
      const A = I[C], L = s[C].sdf;
      if (!A || !L) return;
      const U = wo(m, L, Ts, Te.layout, void 0, Y);
      if (!U || !Ra(A, U, Ts, je.size - je.inset * 2)) {
        j.add(C);
        return;
      }
      q.add(C);
    }, ne = (m, C, A) => {
      const L = C && q.has(m), U = (oe) => oe * A >= ah, B = U(He.nameSize), G = U(He.subSize);
      g[m].setAttribute("display", B ? "inline" : "none"), E[m].setAttribute("display", G ? "inline" : "none"), P[m]?.setAttribute("display", L ? "inline" : "none"), I[m]?.setAttribute("display", L ? "inline" : "none");
      const N = L ? B || G ? Ge.depictedHeight : Ge.platedHeight : Ge.height;
      S[m].setAttribute("y", String(-N / 2)), S[m].setAttribute("height", String(N));
      const V = -N / 2 + je.pad;
      P[m]?.setAttribute("y", String(V)), R[m]?.setAttribute("transform", `translate(0,${V + je.size / 2})`);
      const W = N / 2 - He.bottom;
      g[m].setAttribute("y", String(L ? W - (G ? He.gap : 0) : -2)), E[m].setAttribute("y", String(L ? W : 14));
      const ee = s[m];
      E[m].textContent = Ir(L ? ee.besides : ee.composition, He.subChars);
    };
    let X = null, le = 1, J = null, D = null;
    const z = () => {
      S.forEach((m, C) => {
        const A = J === C;
        m.setAttribute("stroke", A ? M.cardBorderActive : l[C]), m.setAttribute("stroke-width", String(Fs(le, A)));
      }), u.forEach((m, C) => {
        const A = D === C;
        m.setAttribute("stroke", A ? M.netHaloColor : M.netEdgeLine), m.setAttribute("stroke-width", String(Os(le, A)));
      });
    };
    return y = (m, C, A) => {
      const L = ch(m);
      X = L, d.setAttribute("data-detail", L.id), le = m, z();
      for (let B = 0; B < n.length; B++) ne(B, L.structure, m);
      if (!L.structure) return;
      const U = [];
      n.forEach((B, G) => {
        if (!s[G].sdf || q.has(G) || j.has(G)) return;
        const x = B.x * m + C, N = B.y * m + A;
        x < -qn || N < -qn || x > o + qn || N > i + qn || U.push(G);
      }), U.length && a().then((B) => {
        if (!(!B || X !== L))
          for (const G of U)
            Z(B, G), ne(G, !0, m);
      }).catch(() => {
      });
    }, f.forEach((m, C) => {
      let A = null, L = !1;
      m.addEventListener("pointerdown", (B) => {
        B.stopPropagation();
        const { scale: G } = _.transform();
        A = { x: B.clientX - n[C].x * G, y: B.clientY - n[C].y * G }, L = !1, m.setPointerCapture(B.pointerId);
      }), m.addEventListener("pointermove", (B) => {
        if (!A) return;
        if (_.gesturing()) {
          A = null, L = !0;
          return;
        }
        const { scale: G } = _.transform(), x = (B.clientX - A.x) / G, N = (B.clientY - A.y) / G;
        Math.hypot(x - n[C].x, N - n[C].y) * G > uh && (L = !0), n[C].x = n[C].fx = x, n[C].y = n[C].fy = N, T(C);
      });
      const U = () => {
        A = null;
      };
      m.addEventListener("pointerup", U), m.addEventListener("pointercancel", U), m.addEventListener("click", (B) => {
        B.stopPropagation(), L || c("node", C);
      });
    }), _.fit(), {
      setSelected(m) {
        J = m?.kind === "node" ? m.index : null, D = m?.kind === "edge" ? m.index : null, z();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(m, C) {
        f.forEach((A, L) => {
          const U = !m || m.has(n[L]["gufe-key"]);
          A.setAttribute("opacity", U ? "1" : String(Is.node));
        }), u.forEach((A, L) => {
          const U = !C || C.has(L);
          A.setAttribute("opacity", U ? "1" : String(Is.edge));
        });
      },
      focusOn(m) {
        const C = n[m];
        C && _.centreOn(C.x, C.y, dh);
      },
      reset: _.reset,
      cleanup: _.cleanup
    };
  }
}
Ae("gufe-alchemical-network", bh);
class wh extends Pe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Zn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Qn(n.gufe_type)), t.appendChild(r);
    const o = O(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = to();
    return i.style.maxWidth = "460px", i.appendChild(Kn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Kn("Name", n.name)), i.appendChild(
      O(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Ae("gufe-protocol", wh);
function _h(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function jr(e, t = !1) {
  const n = O(
    "div",
    `display:flex;flex-direction:column;gap:${te.xl};padding:${te.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${M.splitBorder};`)
  );
  return n.appendChild(O("div", Lr, e)), n;
}
function Bn(e) {
  return O(
    "div",
    `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
    e
  );
}
function js(e, t) {
  const n = O("div", `display:flex;flex-direction:column;align-items:center;gap:${te.sm};`);
  return n.appendChild(
    O(
      "span",
      `${Me.plain}${Me.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(Bn(t)), n;
}
class Sh extends Pe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = O(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = to();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = jr("Solvent", !0), s = O("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = O("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = O(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${ge.bold};line-height:1.1;color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Bn("SMILES")), s.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const h = O("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      h.appendChild(
        O(
          "div",
          `font-size:${Q.body};color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), h.appendChild(Bn("Name")), s.appendChild(h);
    }
    i.appendChild(s), o.appendChild(i);
    const p = jr("Ions"), v = O("div", `display:flex;align-items:flex-end;gap:${te.xxl};flex-wrap:wrap;`);
    n.positive_ion && v.appendChild(js(n.positive_ion, "cation")), n.negative_ion && v.appendChild(js(n.negative_ion, "anion"));
    const { value: w, unit: y } = _h(n.ion_concentration), _ = O("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), b = O("div", `display:flex;align-items:baseline;gap:${te.md};justify-content:flex-end;`);
    b.appendChild(
      O(
        "div",
        `font-size:${Q.display};font-weight:${ge.bold};line-height:1;color:${M.titleColor};`,
        w
      )
    ), y && (b.appendChild(document.createTextNode(" ")), b.appendChild(O("div", `font-size:${Q.body};color:${M.textMuted};`, y))), _.appendChild(b), _.appendChild(Bn("Ion concentration")), v.appendChild(_), p.appendChild(v), o.appendChild(p);
    const u = jr("Net charge"), $ = n.neutralize;
    return u.appendChild(
      O(
        "span",
        `${Me.plain}align-self:flex-start;font-weight:${ge.bold};` + ($ ? `background:${M.okBg};color:${M.okFg};` : `${Me.outline}color:${M.textMuted};`),
        $ ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      O(
        "div",
        qr,
        $ ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
Ae("gufe-solvent", Sh);
class Ch extends Pe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Zn(n.name || "Unnamed component");
    r.statsEl.appendChild(Qn(n.gufe_type)), t.appendChild(r);
    const o = O("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = to();
    return i.style.maxWidth = "460px", i.appendChild(
      O(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      O(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(Kn("Name", n.name || "(unnamed)")), i.appendChild(Kn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Ae("gufe-unknown-component", Ch);
function Rh(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Hs, reset: sc });
export {
  wc as CHROME_OPEN_BY_DEFAULT,
  Wa as DEBUG_ATTRIBUTE,
  Ja as DEBUG_GLOBAL,
  Gu as DEFAULT_DEPICT_STYLE,
  uu as DEFAULT_ZOOM_BOUNDS,
  Te as DEPICT_STYLE,
  Qu as DEPICT_STYLE_RANGES,
  bh as GufeAlchemicalNetwork,
  ap as GufeAtomMapping,
  Yp as GufeChemicalSystem,
  Vp as GufeComplex,
  Pe as GufeElement,
  zp as GufeLigandNetwork,
  Sf as GufeProtein,
  wh as GufeProtocol,
  yf as GufeSmallMolecule,
  Sh as GufeSolvent,
  sh as GufeTransformation,
  Ch as GufeUnknownComponent,
  iu as GufeView,
  Vr as HIDE_NAME_ATTRIBUTE,
  kr as MAPPING_COLORS,
  gu as MAPPING_RAMP_3D,
  Ah as MAPPING_RAMP_NAME,
  So as MULTI_SELECT_HINT,
  kh as PAYLOAD_TYPES,
  Eh as SCHEMA_TYPES,
  mo as VIEW_TAGS,
  Uf as align2D,
  Gf as alignedToPartner,
  Bf as applyRT,
  Kf as applyTurn,
  pu as boundedZoom,
  xt as buildRegistry,
  ft as choice,
  io as chromeMenu,
  cu as claimGestures,
  Oa as complexPartsFor,
  Us as debugEnabled,
  Ae as defineElement,
  la as describeProblem,
  th as diffStatus,
  Ph as dispatchProblem,
  _o as entriesFor,
  ot as entryLabel,
  ka as exportBlock,
  xa as extentOf,
  dt as flag,
  ru as formatIssues,
  fa as guardWheel,
  Lp as hasComplex,
  rp as inFrameOf,
  Vf as kabsch,
  $s as laidOut,
  Wf as layoutPair,
  op as liftFor,
  Qa as logPayload,
  Ye as lookup,
  ke as lookupOfType,
  Ta as mappingPayloadFor,
  is as markGroups,
  Er as markedBonds,
  Rh as mount,
  no as nameWanted,
  tf as normaliseDepictStyle,
  eo as num,
  er as onWidth,
  ip as openfeShift,
  ro as orientMenuPanel,
  sp as pairColour,
  rs as parseAtomSpec,
  Za as payloadJson,
  $o as resetControl,
  sc as resetSettings,
  Pa as sceneCamera,
  Cf as selectionText,
  Jn as setting,
  Hs as settings,
  Zs as splitter,
  Bp as systemPayloadFor,
  Ct as textSetting,
  eh as transformationPayloadFor,
  bs as uniqueAtoms,
  rf as uniqueBonds,
  xh as validateAs,
  nu as validatePayload,
  cr as viewerInteraction,
  pa as wheelFactor,
  Hf as withCoords
};
