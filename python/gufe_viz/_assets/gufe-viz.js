const wo = {
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
function Ea() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const T = Ea() ? wo.dark : wo.light, Q = {
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
}, Oe = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, De = {
  title: T.titleColor,
  primary: T.textPrimary,
  muted: T.textMuted,
  faint: T.textMuted2,
  error: T.errorFg
}, lt = {
  card: T.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: T.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: T.canvas2DBg
}, $e = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${T.btnBg};color:${T.btnFg};border:1px solid ${T.btnBorder};padding:${te.sm} 9px;font-size:${Q.small};font-weight:${me.bold};border-radius:${Oe.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: T.btnBg,
  bgHover: T.btnBgHover,
  bgActive: T.btnBgActive
}, Pa = `background:${T.selectBg};color:${T.textPrimary};border:1px solid ${T.selectBorder};border-radius:${Oe.md};padding:${te.sm} ${te.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, Ns = "24px", Aa = `display:flex;align-items:flex-start;gap:12px;padding:9px ${te.xxl};flex-shrink:0;line-height:${Ns};background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};`, Vn = { min: "236px", max: "340px" }, Ze = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Gr = `display:flex;flex-direction:column;gap:${te.lg};flex:1;min-width:var(${Ze.min},${Vn.min});max-width:var(${Ze.max},${Vn.max});box-sizing:border-box;padding:${te.xl};min-height:0;overflow-y:auto;background:${T.panelBg};border:0 solid ${T.splitBorder};border-right-width:var(${Ze.ruleX},1px);border-bottom-width:var(${Ze.ruleY},0);`, Ra = "45%", Ms = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Ts = {
  bottom: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};`
}, Na = `flex-shrink:0;padding:${te.sm} ${te.xl};font-size:${Q.heading};font-weight:${me.bold};color:${T.labelFg};background:${T.labelBg};`, Or = `position:absolute;top:${te.md};left:${te.md};z-index:10;pointer-events:none;max-width:calc(100% - ${te.xxl} - ${te.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${te.xs} ${te.lg};border-radius:${Oe.md};font-size:${Q.heading};font-weight:${me.bold};color:${T.labelFg};background:${T.labelBg};`, Ma = `padding:${te.xs} ${te.lg};border-radius:${Oe.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${T.labelFg};background:${T.labelBg};`, Ta = `position:absolute;top:${te.lg};left:${te.lg};z-index:15;display:flex;align-items:center;gap:${te.md};min-width:0;max-width:calc(100% - ${te.xxl} - ${te.xxl});`, Oa = "42px", Fa = `display:flex;flex-direction:column;gap:${te.xs};padding:${te.xxl} 18px;border-radius:${Oe.xl};background:${T.cardBg};border:1px solid ${T.cardBorder};`, Os = `position:absolute;bottom:${te.xl};right:${te.xl};display:flex;gap:${te.sm};padding:${te.sm};border-radius:${Oe.md};z-index:10;background:${T.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, za = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${T.textMuted};`, Fr = `font-size:${Q.small};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`, Ne = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${te.xs} ${te.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${te.xs} ${te.md};border:1px solid transparent;border-radius:${Oe.pill};font-family:inherit;font-size:${Q.small};color:${T.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${T.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${T.btnBg};border-color:${T.btnBorder};color:${T.textPrimary};`,
  active: `cursor:pointer;background:${T.cardBgActive};border-color:${T.btnBorder};color:${T.textPrimary};`
}, zr = `font-size:${Q.small};line-height:1.6;color:${T.textMuted2};`, Ia = ["debug", "gufe-debug"], ja = "debug", Da = "GUFE_VIZ_DEBUG";
function La() {
  return !!globalThis[Da];
}
function qa() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Ia.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Fs(e) {
  return e?.hasAttribute?.(ja) ? !0 : La() || qa();
}
function Va(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Ba(e, t, n) {
  if (!Fs(n)) return;
  const r = Va(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const zs = "GUFE_VIZ_VIEW_STATE";
function Ua(e) {
  const t = globalThis[zs];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Ha = 150, _o = "data-gufe-shell";
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${_o}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = T.appBg, this.style.color = T.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Ha);
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
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${T.appBg};`
    ), this.#t.setAttribute(_o, ""), this.appendChild(this.#t), this.#t;
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
      t.appendChild(he(this.placeholder()));
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(he(`Failed to render: ${ge(r)}`, !0)));
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
function Pe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const xe = "gufe-viz:", tt = /* @__PURE__ */ new Map();
let Dt = null;
function Ka() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function It() {
  if (Dt === !1) return null;
  const e = Ka();
  if (!e)
    return Dt = !1, null;
  try {
    const t = `${xe}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Dt = !0, e;
  } catch {
    return Dt = !1, null;
  }
}
function Ga(e) {
  const t = It();
  if (!t) return tt.get(xe + e) ?? null;
  try {
    return t.getItem(xe + e);
  } catch {
    return null;
  }
}
function Wa(e, t) {
  const n = It();
  if (!n) {
    tt.set(xe + e, t);
    return;
  }
  try {
    n.setItem(xe + e, t);
  } catch {
    tt.set(xe + e, t);
  }
}
function Gn(e, t, n) {
  return {
    key: e,
    get() {
      const r = Ga(e);
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
        Wa(e, JSON.stringify(r));
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
function Wr(e, t, n = -1 / 0, r = 1 / 0) {
  return Gn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function St(e, t = "") {
  return Gn(e, t, (n) => typeof n == "string");
}
function Is() {
  const e = {}, t = It(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(tt.keys());
  for (const r of n) {
    if (!r.startsWith(xe)) continue;
    const o = t ? t.getItem(r) : tt.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(xe.length)] = JSON.parse(o);
      } catch {
        e[r.slice(xe.length)] = o;
      }
  }
  return e;
}
function Ja() {
  const e = {}, t = It(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(tt.keys());
  for (const r of n) {
    if (!r.startsWith(xe)) continue;
    const o = t ? t.getItem(r) : tt.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function Ya() {
  const e = It();
  if (e)
    for (const t of Object.keys(Is()))
      try {
        e.removeItem(xe + t);
      } catch {
      }
  tt.clear();
}
const js = "https://framejs.app", Ds = 1e4;
function Xa(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Za = "/gufe-dev-bundle.js";
function Qa() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Ds ? e : null;
}
async function ec() {
  const e = Qa();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Za);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Ds ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function tc() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function nc(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(xe)};`,
    `  const menuOpen = ${JSON.stringify(Zr)};`,
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
    `globalThis[${JSON.stringify(zs)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function rc(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...nc(n),
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
function oc(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(Ja()))
    o.endsWith(Zr) || (r[o] = i);
  return { settings: r, views: t };
}
const ic = (e) => `${js}/j/${e}`, sc = (e) => `${js}/j/${e}.json`;
async function ac(e, t, n) {
  await fetch(sc(e), {
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
function cc(e) {
  if (!Fs()) return;
  const t = F(
    "div",
    `display:flex;flex-direction:column;gap:${te.md};padding-top:${te.lg};border-top:1px dashed ${T.splitBorder};`
  );
  t.appendChild(
    F(
      "div",
      `font-size:${Q.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`,
      "debug"
    )
  );
  const n = F("button", `${$e.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = F("div", `font-size:${Q.tiny};line-height:1.5;color:${T.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? T.errorFg : T.textMuted2;
  }, i = (s, a) => {
    const c = F("a", `color:${T.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(F("div", `padding-top:${te.sm};`, a)), r.style.color = T.textMuted2;
  };
  n.onclick = () => {
    const s = Xa(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = oc(s), d = window.open("", "_blank"), f = tc(), $ = a, _ = String($.name || $.type || "gufe-viz"), m = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), ec().then((y) => {
      if (!y) {
        d?.close(), m(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return ac(f, rc(y.js, a, c), _).then(() => {
        m();
        const w = ic(f);
        d && (d.location.href = w), i(w, y.note);
      });
    }).catch((y) => {
      m(), d?.close(), o(`Upload failed: ${y instanceof Error ? y.message : String(y)}`, !0);
    });
  }, t.appendChild(
    F(
      "div",
      `font-size:${Q.tiny};line-height:1.5;color:${T.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function F(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function We(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Et = (e) => e.toLocaleString("en-US"), at = "-", kt = $e.base, Wn = Pa;
function Jn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = F("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), i = e.map((s) => {
    const a = F("button", kt, s.label);
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
const lc = parseFloat(te.xl) * 2;
function Ls(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const $ = o.get();
    e.some((_) => _.id === $) && (t = $);
  }
  const i = F("div", "display:flex;min-width:0;"), s = ($) => {
    i.setActive($), o?.set($), n($);
  }, a = Jn(e, t, s), c = jt(e, t, s);
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
    f = Zn($, (y) => {
      d || (m = _.offsetWidth || m), m && i.setCompact(m > y - lc);
    });
  }
  return i.cleanup = () => f(), i;
}
function jt(e, t, n, r) {
  const o = F("select", Wn);
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
function qs(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = F("button", kt, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? $e.bgActive : $e.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
function Qe(e, t, n) {
  const r = F("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = F("span");
  return o.innerHTML = `${We(e)} <b style="color:${De.primary};">${We(t)}</b>`, r.appendChild(o), r;
}
function dt(e, t) {
  const n = F("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${te.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${te.md} ${te.xxl};border-radius:${Oe.md};font-size:${Q.body};background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`, e.appendChild(n), n;
}
function he(e, t = !1) {
  return F(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? De.error : De.faint};`,
    e
  );
}
function Yn(e) {
  const t = F("div", Aa);
  return t.className = "gufe-header", t.titleEl = F(
    "span",
    `font-weight:${me.bold};font-size:${Q.title};color:${De.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = F(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${De.muted};`
  ), t.textEl = F("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = F("div", `display:flex;align-items:center;height:${Ns};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Bn(e, t, n = !1) {
  const r = F("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    F(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${De.faint};`,
      e
    )
  );
  const o = F(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${De.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Xn(e) {
  return F(
    "span",
    `padding:1px 7px;border-radius:${Oe.xl};font-size:${Q.tiny};font-weight:${me.bold};letter-spacing:.04em;white-space:nowrap;background:${T.badgeBg};color:${T.badgeFg};`,
    e
  );
}
function Jr() {
  return F("div", Fa);
}
function Vs() {
  const e = F("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = F("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Ir = "data-gufe-hide-name";
function Yr(e) {
  return !e.closest(`[${Ir}]`);
}
function Zn(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const So = { min: 0.2, max: 0.8 }, dc = 5;
function Bs(e, t, n, r = {}) {
  const o = r.min ?? So.min, i = r.max ?? So.max, s = F(
    "div",
    `flex:0 0 ${dc}px;align-self:stretch;touch-action:none;background:${T.splitBorder};`
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
    const b = a ? y.clientY - w.top : y.clientX - w.left;
    f = Math.min(i, Math.max(o, b / u)), $();
  });
  const m = (y) => {
    _ && (_ = !1, s.releasePointerCapture(y.pointerId), r.remember?.set(f), r.onResize?.(f));
  };
  return s.addEventListener("pointerup", m), s.addEventListener("pointercancel", m), s;
}
function Xr(e, t) {
  e.style.setProperty(Ze.min, t ? "0" : Vn.min), e.style.setProperty(Ze.max, t ? "none" : Vn.max), e.style.setProperty(Ze.ruleX, t ? "0" : "1px"), e.style.setProperty(Ze.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? Ra : "";
}
const uc = !1, Zr = ".menuOpen";
function fc() {
  const e = F("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const pc = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: fc
}, hc = pc.openFreeEnergy;
function Qr(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? uc, o = !1;
  const i = F("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = F("button", `${$e.base}display:inline-flex;align-items:center;gap:${te.md};padding:${te.sm} ${te.lg};`);
  s.appendChild(hc()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), cc(i)), i.style.display = r ? "flex" : "none", s.style.background = r ? $e.bgActive : $e.bg, s.setAttribute("aria-expanded", String(r));
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
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lt = { exports: {} }, lr = {}, qe = {}, ot = {}, dr = {}, ur = {}, fr = {}, Co;
function Un() {
  return Co || (Co = 1, (function(e) {
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
    function o(b, ...h) {
      const C = [b[0]];
      let S = 0;
      for (; S < h.length; )
        a(C, h[S]), C.push(b[++S]);
      return new r(C);
    }
    e._ = o;
    const i = new r("+");
    function s(b, ...h) {
      const C = [m(b[0])];
      let S = 0;
      for (; S < h.length; )
        C.push(i), a(C, h[S]), C.push(i, m(b[++S]));
      return c(C), new r(C);
    }
    e.str = s;
    function a(b, h) {
      h instanceof r ? b.push(...h._items) : h instanceof n ? b.push(h) : b.push($(h));
    }
    e.addCodeArg = a;
    function c(b) {
      let h = 1;
      for (; h < b.length - 1; ) {
        if (b[h] === i) {
          const C = d(b[h - 1], b[h + 1]);
          if (C !== void 0) {
            b.splice(h - 1, 3, C);
            continue;
          }
          b[h++] = "+";
        }
        h++;
      }
    }
    function d(b, h) {
      if (h === '""')
        return b;
      if (b === '""')
        return h;
      if (typeof b == "string")
        return h instanceof n || b[b.length - 1] !== '"' ? void 0 : typeof h != "string" ? `${b.slice(0, -1)}${h}"` : h[0] === '"' ? b.slice(0, -1) + h.slice(1) : void 0;
      if (typeof h == "string" && h[0] === '"' && !(b instanceof n))
        return `"${b}${h.slice(1)}`;
    }
    function f(b, h) {
      return h.emptyStr() ? b : b.emptyStr() ? h : s`${b}${h}`;
    }
    e.strConcat = f;
    function $(b) {
      return typeof b == "number" || typeof b == "boolean" || b === null ? b : m(Array.isArray(b) ? b.join(",") : b);
    }
    function _(b) {
      return new r(m(b));
    }
    e.stringify = _;
    function m(b) {
      return JSON.stringify(b).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = m;
    function y(b) {
      return typeof b == "string" && e.IDENTIFIER.test(b) ? new r(`.${b}`) : o`[${b}]`;
    }
    e.getProperty = y;
    function w(b) {
      if (typeof b == "string" && e.IDENTIFIER.test(b))
        return new r(`${b}`);
      throw new Error(`CodeGen: invalid export name: ${b}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function u(b) {
      return new r(b.toString());
    }
    e.regexpCode = u;
  })(fr)), fr;
}
var pr = {}, ko;
function xo() {
  return ko || (ko = 1, (function(e) {
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
        const u = this._scope[m] || (this._scope[m] = []), b = u.length;
        return u[b] = f.ref, _.setValue(f, { property: m, itemIndex: b }), _;
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
          w.forEach((b) => {
            if (u.has(b))
              return;
            u.set(b, r.Started);
            let h = f(b);
            if (h) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              m = (0, t._)`${m}${C} ${b} = ${h};${this.opts._n}`;
            } else if (h = _?.(b))
              m = (0, t._)`${m}${h}${this.opts._n}`;
            else
              throw new n(b);
            u.set(b, r.Completed);
          });
        }
        return m;
      }
    }
    e.ValueScope = a;
  })(pr)), pr;
}
var Eo;
function ce() {
  return Eo || (Eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ xo();
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
    var o = /* @__PURE__ */ xo();
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
      optimizeNames(v, k) {
        return this;
      }
    }
    class s extends i {
      constructor(v, k, D) {
        super(), this.varKind = v, this.name = k, this.rhs = D;
      }
      render({ es5: v, _n: k }) {
        const D = v ? n.varKinds.var : this.varKind, U = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${D} ${this.name}${U};` + k;
      }
      optimizeNames(v, k) {
        if (v[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, v, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(v, k, D) {
        super(), this.lhs = v, this.rhs = k, this.sideEffects = D;
      }
      render({ _n: v }) {
        return `${this.lhs} = ${this.rhs};` + v;
      }
      optimizeNames(v, k) {
        if (!(this.lhs instanceof t.Name && !v[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, v, k), this;
      }
      get names() {
        const v = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(v, this.rhs);
      }
    }
    class c extends a {
      constructor(v, k, D, U) {
        super(v, D, U), this.op = k;
      }
      render({ _n: v }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + v;
      }
    }
    class d extends i {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `${this.label}:` + v;
      }
    }
    class f extends i {
      constructor(v) {
        super(), this.label = v, this.names = {};
      }
      render({ _n: v }) {
        return `break${this.label ? ` ${this.label}` : ""};` + v;
      }
    }
    class $ extends i {
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
    class _ extends i {
      constructor(v) {
        super(), this.code = v;
      }
      render({ _n: v }) {
        return `${this.code};` + v;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(v, k) {
        return this.code = j(this.code, v, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class m extends i {
      constructor(v = []) {
        super(), this.nodes = v;
      }
      render(v) {
        return this.nodes.reduce((k, D) => k + D.render(v), "");
      }
      optimizeNodes() {
        const { nodes: v } = this;
        let k = v.length;
        for (; k--; ) {
          const D = v[k].optimizeNodes();
          Array.isArray(D) ? v.splice(k, 1, ...D) : D ? v[k] = D : v.splice(k, 1);
        }
        return v.length > 0 ? this : void 0;
      }
      optimizeNames(v, k) {
        const { nodes: D } = this;
        let U = D.length;
        for (; U--; ) {
          const W = D[U];
          W.optimizeNames(v, k) || (H(v, W.names), D.splice(U, 1));
        }
        return D.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((v, k) => O(v, k.names), {});
      }
    }
    class y extends m {
      render(v) {
        return "{" + v._n + super.render(v) + "}" + v._n;
      }
    }
    class w extends m {
    }
    class u extends y {
    }
    u.kind = "else";
    class b extends y {
      constructor(v, k) {
        super(k), this.condition = v;
      }
      render(v) {
        let k = `if(${this.condition})` + super.render(v);
        return this.else && (k += "else " + this.else.render(v)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const v = this.condition;
        if (v === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const D = k.optimizeNodes();
          k = this.else = Array.isArray(D) ? new u(D) : D;
        }
        if (k)
          return v === !1 ? k instanceof b ? k : k.nodes : this.nodes.length ? this : new b(X(v), k instanceof b ? [k] : k.nodes);
        if (!(v === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(v, k) {
        var D;
        if (this.else = (D = this.else) === null || D === void 0 ? void 0 : D.optimizeNames(v, k), !!(super.optimizeNames(v, k) || this.else))
          return this.condition = j(this.condition, v, k), this;
      }
      get names() {
        const v = super.names;
        return q(v, this.condition), this.else && O(v, this.else.names), v;
      }
    }
    b.kind = "if";
    class h extends y {
    }
    h.kind = "for";
    class C extends h {
      constructor(v) {
        super(), this.iteration = v;
      }
      render(v) {
        return `for(${this.iteration})` + super.render(v);
      }
      optimizeNames(v, k) {
        if (super.optimizeNames(v, k))
          return this.iteration = j(this.iteration, v, k), this;
      }
      get names() {
        return O(super.names, this.iteration.names);
      }
    }
    class S extends h {
      constructor(v, k, D, U) {
        super(), this.varKind = v, this.name = k, this.from = D, this.to = U;
      }
      render(v) {
        const k = v.es5 ? n.varKinds.var : this.varKind, { name: D, from: U, to: W } = this;
        return `for(${k} ${D}=${U}; ${D}<${W}; ${D}++)` + super.render(v);
      }
      get names() {
        const v = q(super.names, this.from);
        return q(v, this.to);
      }
    }
    class l extends h {
      constructor(v, k, D, U) {
        super(), this.loop = v, this.varKind = k, this.name = D, this.iterable = U;
      }
      render(v) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(v);
      }
      optimizeNames(v, k) {
        if (super.optimizeNames(v, k))
          return this.iterable = j(this.iterable, v, k), this;
      }
      get names() {
        return O(super.names, this.iterable.names);
      }
    }
    class p extends y {
      constructor(v, k, D) {
        super(), this.name = v, this.args = k, this.async = D;
      }
      render(v) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(v);
      }
    }
    p.kind = "func";
    class g extends m {
      render(v) {
        return "return " + super.render(v);
      }
    }
    g.kind = "return";
    class x extends y {
      render(v) {
        let k = "try" + super.render(v);
        return this.catch && (k += this.catch.render(v)), this.finally && (k += this.finally.render(v)), k;
      }
      optimizeNodes() {
        var v, k;
        return super.optimizeNodes(), (v = this.catch) === null || v === void 0 || v.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(v, k) {
        var D, U;
        return super.optimizeNames(v, k), (D = this.catch) === null || D === void 0 || D.optimizeNames(v, k), (U = this.finally) === null || U === void 0 || U.optimizeNames(v, k), this;
      }
      get names() {
        const v = super.names;
        return this.catch && O(v, this.catch.names), this.finally && O(v, this.finally.names), v;
      }
    }
    class A extends y {
      constructor(v) {
        super(), this.error = v;
      }
      render(v) {
        return `catch(${this.error})` + super.render(v);
      }
    }
    A.kind = "catch";
    class M extends y {
      render(v) {
        return "finally" + super.render(v);
      }
    }
    M.kind = "finally";
    class I {
      constructor(v, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = v, this._scope = new n.Scope({ parent: v }), this._nodes = [new w()];
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
      scopeValue(v, k) {
        const D = this._extScope.value(v, k);
        return (this._values[D.prefix] || (this._values[D.prefix] = /* @__PURE__ */ new Set())).add(D), D;
      }
      getScopeValue(v, k) {
        return this._extScope.getValue(v, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(v) {
        return this._extScope.scopeRefs(v, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(v, k, D, U) {
        const W = this._scope.toName(k);
        return D !== void 0 && U && (this._constants[W.str] = D), this._leafNode(new s(v, W, D)), W;
      }
      // `const` declaration (`var` in es5 mode)
      const(v, k, D) {
        return this._def(n.varKinds.const, v, k, D);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(v, k, D) {
        return this._def(n.varKinds.let, v, k, D);
      }
      // `var` declaration with optional assignment
      var(v, k, D) {
        return this._def(n.varKinds.var, v, k, D);
      }
      // assignment code
      assign(v, k, D) {
        return this._leafNode(new a(v, k, D));
      }
      // `+=` code
      add(v, k) {
        return this._leafNode(new c(v, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(v) {
        return typeof v == "function" ? v() : v !== t.nil && this._leafNode(new _(v)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...v) {
        const k = ["{"];
        for (const [D, U] of v)
          k.length > 1 && k.push(","), k.push(D), (D !== U || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, U));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(v, k, D) {
        if (this._blockNode(new b(v)), k && D)
          this.code(k).else().code(D).endIf();
        else if (k)
          this.code(k).endIf();
        else if (D)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(v) {
        return this._elseNode(new b(v));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(b, u);
      }
      _for(v, k) {
        return this._blockNode(v), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(v, k) {
        return this._for(new C(v), k);
      }
      // `for` statement for a range of values
      forRange(v, k, D, U, W = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const J = this._scope.toName(v);
        return this._for(new S(W, J, k, D), () => U(J));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(v, k, D, U = n.varKinds.const) {
        const W = this._scope.toName(v);
        if (this.opts.es5) {
          const J = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${J}.length`, (Y) => {
            this.var(W, (0, t._)`${J}[${Y}]`), D(W);
          });
        }
        return this._for(new l("of", U, W, k), () => D(W));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(v, k, D, U = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(v, (0, t._)`Object.keys(${k})`, D);
        const W = this._scope.toName(v);
        return this._for(new l("in", U, W, k), () => D(W));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(h);
      }
      // `label` statement
      label(v) {
        return this._leafNode(new d(v));
      }
      // `break` statement
      break(v) {
        return this._leafNode(new f(v));
      }
      // `return` statement
      return(v) {
        const k = new g();
        if (this._blockNode(k), this.code(v), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(v, k, D) {
        if (!k && !D)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const U = new x();
        if (this._blockNode(U), this.code(v), k) {
          const W = this.name("e");
          this._currNode = U.catch = new A(W), k(W);
        }
        return D && (this._currNode = U.finally = new M(), this.code(D)), this._endBlockNode(A, M);
      }
      // `throw` statement
      throw(v) {
        return this._leafNode(new $(v));
      }
      // start self-balancing block
      block(v, k) {
        return this._blockStarts.push(this._nodes.length), v && this.code(v).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(v) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const D = this._nodes.length - k;
        if (D < 0 || v !== void 0 && D !== v)
          throw new Error(`CodeGen: wrong number of nodes: ${D} vs ${v} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(v, k = t.nil, D, U) {
        return this._blockNode(new p(v, k, D)), U && this.code(U).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(p);
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
      _endBlockNode(v, k) {
        const D = this._currNode;
        if (D instanceof v || k && D instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${v.kind}/${k.kind}` : v.kind}"`);
      }
      _elseNode(v) {
        const k = this._currNode;
        if (!(k instanceof b))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = v, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const v = this._nodes;
        return v[v.length - 1];
      }
      set _currNode(v) {
        const k = this._nodes;
        k[k.length - 1] = v;
      }
    }
    e.CodeGen = I;
    function O(N, v) {
      for (const k in v)
        N[k] = (N[k] || 0) + (v[k] || 0);
      return N;
    }
    function q(N, v) {
      return v instanceof t._CodeOrName ? O(N, v.names) : N;
    }
    function j(N, v, k) {
      if (N instanceof t.Name)
        return D(N);
      if (!U(N))
        return N;
      return new t._Code(N._items.reduce((W, J) => (J instanceof t.Name && (J = D(J)), J instanceof t._Code ? W.push(...J._items) : W.push(J), W), []));
      function D(W) {
        const J = k[W.str];
        return J === void 0 || v[W.str] !== 1 ? W : (delete v[W.str], J);
      }
      function U(W) {
        return W instanceof t._Code && W._items.some((J) => J instanceof t.Name && v[J.str] === 1 && k[J.str] !== void 0);
      }
    }
    function H(N, v) {
      for (const k in v)
        N[k] = (N[k] || 0) - (v[k] || 0);
    }
    function X(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${P(N)}`;
    }
    e.not = X;
    const ne = R(e.operators.AND);
    function Z(...N) {
      return N.reduce(ne);
    }
    e.and = Z;
    const K = R(e.operators.OR);
    function L(...N) {
      return N.reduce(K);
    }
    e.or = L;
    function R(N) {
      return (v, k) => v === t.nil ? k : k === t.nil ? v : (0, t._)`${P(v)} ${N} ${P(k)}`;
    }
    function P(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(ur)), ur;
}
var le = {}, Po;
function de() {
  if (Po) return le;
  Po = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.checkStrictMode = le.getErrorPath = le.Type = le.useFunc = le.setEvaluated = le.evaluatedPropsToName = le.mergeEvaluated = le.eachItem = le.unescapeJsonPointer = le.escapeJsonPointer = le.escapeFragment = le.unescapeFragment = le.schemaRefOrVal = le.schemaHasRulesButRef = le.schemaHasRules = le.checkUnknownRules = le.alwaysValidSchema = le.toHash = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Un();
  function n(l) {
    const p = {};
    for (const g of l)
      p[g] = !0;
    return p;
  }
  le.toHash = n;
  function r(l, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (o(l, p), !i(p, l.self.RULES.all));
  }
  le.alwaysValidSchema = r;
  function o(l, p = l.schema) {
    const { opts: g, self: x } = l;
    if (!g.strictSchema || typeof p == "boolean")
      return;
    const A = x.RULES.keywords;
    for (const M in p)
      A[M] || S(l, `unknown keyword: "${M}"`);
  }
  le.checkUnknownRules = o;
  function i(l, p) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (p[g])
        return !0;
    return !1;
  }
  le.schemaHasRules = i;
  function s(l, p) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (g !== "$ref" && p.all[g])
        return !0;
    return !1;
  }
  le.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: p }, g, x, A) {
    if (!A) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${l}${p}${(0, e.getProperty)(x)}`;
  }
  le.schemaRefOrVal = a;
  function c(l) {
    return $(decodeURIComponent(l));
  }
  le.unescapeFragment = c;
  function d(l) {
    return encodeURIComponent(f(l));
  }
  le.escapeFragment = d;
  function f(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  le.escapeJsonPointer = f;
  function $(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  le.unescapeJsonPointer = $;
  function _(l, p) {
    if (Array.isArray(l))
      for (const g of l)
        p(g);
    else
      p(l);
  }
  le.eachItem = _;
  function m({ mergeNames: l, mergeToName: p, mergeValues: g, resultToName: x }) {
    return (A, M, I, O) => {
      const q = I === void 0 ? M : I instanceof e.Name ? (M instanceof e.Name ? l(A, M, I) : p(A, M, I), I) : M instanceof e.Name ? (p(A, I, M), M) : g(M, I);
      return O === e.Name && !(q instanceof e.Name) ? x(A, q) : q;
    };
  }
  le.mergeEvaluated = {
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
  le.evaluatedPropsToName = y;
  function w(l, p, g) {
    Object.keys(g).forEach((x) => l.assign((0, e._)`${p}${(0, e.getProperty)(x)}`, !0));
  }
  le.setEvaluated = w;
  const u = {};
  function b(l, p) {
    return l.scopeValue("func", {
      ref: p,
      code: u[p.code] || (u[p.code] = new t._Code(p.code))
    });
  }
  le.useFunc = b;
  var h;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(h || (le.Type = h = {}));
  function C(l, p, g) {
    if (l instanceof e.Name) {
      const x = p === h.Num;
      return g ? x ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : x ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(l).toString() : "/" + f(l);
  }
  le.getErrorPath = C;
  function S(l, p, g = l.opts.strictSchema) {
    if (g) {
      if (p = `strict mode: ${p}`, g === !0)
        throw new Error(p);
      l.self.logger.warn(p);
    }
  }
  return le.checkStrictMode = S, le;
}
var qt = {}, Ao;
function Fe() {
  if (Ao) return qt;
  Ao = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
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
  return qt.default = t, qt;
}
var Ro;
function Qn() {
  return Ro || (Ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ Fe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: b }) => b ? (0, t.str)`"${u}" keyword must be ${b} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, b = e.keywordError, h, C) {
      const { it: S } = u, { gen: l, compositeRule: p, allErrors: g } = S, x = $(u, b, h);
      C ?? (p || g) ? c(l, x) : d(S, (0, t._)`[${x}]`);
    }
    e.reportError = o;
    function i(u, b = e.keywordError, h) {
      const { it: C } = u, { gen: S, compositeRule: l, allErrors: p } = C, g = $(u, b, h);
      c(S, g), l || p || d(C, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(u, b) {
      u.assign(r.default.errors, b), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(b, () => u.assign((0, t._)`${r.default.vErrors}.length`, b), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: b, schemaValue: h, data: C, errsCount: S, it: l }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const p = u.name("err");
      u.forRange("i", S, r.default.errors, (g) => {
        u.const(p, (0, t._)`${r.default.vErrors}[${g}]`), u.if((0, t._)`${p}.instancePath === undefined`, () => u.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${b}`), l.opts.verbose && (u.assign((0, t._)`${p}.schema`, h), u.assign((0, t._)`${p}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(u, b) {
      const h = u.const("err", b);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${r.default.vErrors}.push(${h})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, b) {
      const { gen: h, validateName: C, schemaEnv: S } = u;
      S.$async ? h.throw((0, t._)`new ${u.ValidationError}(${b})`) : (h.assign((0, t._)`${C}.errors`, b), h.return(!1));
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
    function $(u, b, h) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : _(u, b, h);
    }
    function _(u, b, h = {}) {
      const { gen: C, it: S } = u, l = [
        m(S, h),
        y(u, h)
      ];
      return w(u, b, l), C.object(...l);
    }
    function m({ errorPath: u }, { instancePath: b }) {
      const h = b ? (0, t.str)`${u}${(0, n.getErrorPath)(b, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, h)];
    }
    function y({ keyword: u, it: { errSchemaPath: b } }, { schemaPath: h, parentSchema: C }) {
      let S = C ? b : (0, t.str)`${b}/${u}`;
      return h && (S = (0, t.str)`${S}${(0, n.getErrorPath)(h, n.Type.Str)}`), [f.schemaPath, S];
    }
    function w(u, { params: b, message: h }, C) {
      const { keyword: S, data: l, schemaValue: p, it: g } = u, { opts: x, propertyName: A, topSchemaRef: M, schemaPath: I } = g;
      C.push([f.keyword, S], [f.params, typeof b == "function" ? b(u) : b || (0, t._)`{}`]), x.messages && C.push([f.message, typeof h == "function" ? h(u) : h]), x.verbose && C.push([f.schema, p], [f.parentSchema, (0, t._)`${M}${I}`], [r.default.data, l]), A && C.push([f.propertyName, A]);
    }
  })(dr)), dr;
}
var No;
function gc() {
  if (No) return ot;
  No = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.boolOrEmptySchema = ot.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Qn(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: f } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  ot.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: d, schema: f } = a;
    f === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  ot.boolOrEmptySchema = i;
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
  return ot;
}
var ye = {}, it = {}, Mo;
function Us() {
  if (Mo) return it;
  Mo = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.getRules = it.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  it.isJSONType = n;
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
  return it.getRules = r, it;
}
var Ve = {}, To;
function Hs() {
  if (To) return Ve;
  To = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.shouldUseRule = Ve.shouldUseGroup = Ve.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  Ve.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  Ve.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return Ve.shouldUseRule = n, Ve;
}
var Oo;
function Hn() {
  if (Oo) return ye;
  Oo = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.reportTypeError = ye.checkDataTypes = ye.checkDataType = ye.coerceAndCheckDataType = ye.getJSONTypes = ye.getSchemaTypes = ye.DataType = void 0;
  const e = /* @__PURE__ */ Us(), t = /* @__PURE__ */ Hs(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ ce(), o = /* @__PURE__ */ de();
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
      const A = y(C, l, p.strictNumbers, i.Wrong);
      S.if(A, () => {
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
    const { gen: l, data: p, opts: g } = h, x = l.let("dataType", (0, r._)`typeof ${p}`), A = l.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && l.if((0, r._)`${x} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => l.assign(p, (0, r._)`${p}[0]`).assign(x, (0, r._)`typeof ${p}`).if(y(C, p, g.strictNumbers), () => l.assign(A, p))), l.if((0, r._)`${A} !== undefined`);
    for (const I of S)
      (d.has(I) || I === "array" && g.coerceTypes === "array") && M(I);
    l.else(), u(h), l.endIf(), l.if((0, r._)`${A} !== undefined`, () => {
      l.assign(p, A), _(h, A);
    });
    function M(I) {
      switch (I) {
        case "string":
          l.elseIf((0, r._)`${x} == "number" || ${x} == "boolean"`).assign(A, (0, r._)`"" + ${p}`).elseIf((0, r._)`${p} === null`).assign(A, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${x} == "boolean" || ${p} === null
              || (${x} == "string" && ${p} && ${p} == +${p})`).assign(A, (0, r._)`+${p}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${x} === "boolean" || ${p} === null
              || (${x} === "string" && ${p} && ${p} == +${p} && !(${p} % 1))`).assign(A, (0, r._)`+${p}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${p} === "false" || ${p} === 0 || ${p} === null`).assign(A, !1).elseIf((0, r._)`${p} === "true" || ${p} === 1`).assign(A, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${p} === "" || ${p} === 0 || ${p} === false`), l.assign(A, null);
          return;
        case "array":
          l.elseIf((0, r._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${p} === null`).assign(A, (0, r._)`[${p}]`);
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
    function x(A = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, A, S ? (0, r._)`isFinite(${C})` : r.nil);
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
    const C = b(h);
    (0, n.reportError)(C, w);
  }
  ye.reportTypeError = u;
  function b(h) {
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
var Pt = {}, Fo;
function yc() {
  if (Fo) return Pt;
  Fo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, d) => r(o, d, c.default));
  }
  Pt.assignDefaults = n;
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
  return Pt;
}
var Re = {}, pe = {}, zo;
function ze() {
  if (zo) return pe;
  zo = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.validateUnion = pe.validateArray = pe.usePattern = pe.callValidateCode = pe.schemaProperties = pe.allSchemaProperties = pe.noPropertyInData = pe.propertyInData = pe.isOwnProperty = pe.hasPropFunc = pe.reportMissingProp = pe.checkMissingProp = pe.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ de();
  function o(h, C) {
    const { gen: S, data: l, it: p } = h;
    S.if(f(S, l, C, p.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${C}` }, !0), h.error();
    });
  }
  pe.checkReportMissingProp = o;
  function i({ gen: h, data: C, it: { opts: S } }, l, p) {
    return (0, e.or)(...l.map((g) => (0, e.and)(f(h, C, g, S.ownProperties), (0, e._)`${p} = ${g}`)));
  }
  pe.checkMissingProp = i;
  function s(h, C) {
    h.setParams({ missingProperty: C }, !0), h.error();
  }
  pe.reportMissingProp = s;
  function a(h) {
    return h.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  pe.hasPropFunc = a;
  function c(h, C, S) {
    return (0, e._)`${a(h)}.call(${C}, ${S})`;
  }
  pe.isOwnProperty = c;
  function d(h, C, S, l) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} !== undefined`;
    return l ? (0, e._)`${p} && ${c(h, C, S)}` : p;
  }
  pe.propertyInData = d;
  function f(h, C, S, l) {
    const p = (0, e._)`${C}${(0, e.getProperty)(S)} === undefined`;
    return l ? (0, e.or)(p, (0, e.not)(c(h, C, S))) : p;
  }
  pe.noPropertyInData = f;
  function $(h) {
    return h ? Object.keys(h).filter((C) => C !== "__proto__") : [];
  }
  pe.allSchemaProperties = $;
  function _(h, C) {
    return $(C).filter((S) => !(0, t.alwaysValidSchema)(h, C[S]));
  }
  pe.schemaProperties = _;
  function m({ schemaCode: h, data: C, it: { gen: S, topSchemaRef: l, schemaPath: p, errorPath: g }, it: x }, A, M, I) {
    const O = I ? (0, e._)`${h}, ${C}, ${l}${p}` : C, q = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && q.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${O}, ${S.object(...q)}`;
    return M !== e.nil ? (0, e._)`${A}.call(${M}, ${j})` : (0, e._)`${A}(${j})`;
  }
  pe.callValidateCode = m;
  const y = (0, e._)`new RegExp`;
  function w({ gen: h, it: { opts: C } }, S) {
    const l = C.unicodeRegExp ? "u" : "", { regExp: p } = C.code, g = p(S, l);
    return h.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${p.code === "new RegExp" ? y : (0, r.useFunc)(h, p)}(${S}, ${l})`
    });
  }
  pe.usePattern = w;
  function u(h) {
    const { gen: C, data: S, keyword: l, it: p } = h, g = C.name("valid");
    if (p.allErrors) {
      const A = C.let("valid", !0);
      return x(() => C.assign(A, !1)), A;
    }
    return C.var(g, !0), x(() => C.break()), g;
    function x(A) {
      const M = C.const("len", (0, e._)`${S}.length`);
      C.forRange("i", 0, M, (I) => {
        h.subschema({
          keyword: l,
          dataProp: I,
          dataPropType: t.Type.Num
        }, g), C.if((0, e.not)(g), A);
      });
    }
  }
  pe.validateArray = u;
  function b(h) {
    const { gen: C, schema: S, keyword: l, it: p } = h;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((M) => (0, t.alwaysValidSchema)(p, M)) && !p.opts.unevaluated)
      return;
    const x = C.let("valid", !1), A = C.name("_valid");
    C.block(() => S.forEach((M, I) => {
      const O = h.subschema({
        keyword: l,
        schemaProp: I,
        compositeRule: !0
      }, A);
      C.assign(x, (0, e._)`${x} || ${A}`), h.mergeValidEvaluated(O, A) || C.if((0, e.not)(x));
    })), h.result(x, () => h.reset(), () => h.error(!0));
  }
  return pe.validateUnion = b, pe;
}
var Io;
function $c() {
  if (Io) return Re;
  Io = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.validateKeywordUsage = Re.validSchemaType = Re.funcKeywordCode = Re.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Qn();
  function o(_, m) {
    const { gen: y, keyword: w, schema: u, parentSchema: b, it: h } = _, C = m.macro.call(h.self, u, b, h), S = d(y, w, C);
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
  Re.macroKeywordCode = o;
  function i(_, m) {
    var y;
    const { gen: w, keyword: u, schema: b, parentSchema: h, $data: C, it: S } = _;
    c(S, m);
    const l = !C && m.compile ? m.compile.call(S.self, b, h, S) : m.validate, p = d(w, u, l), g = w.let("valid");
    _.block$data(g, x), _.ok((y = m.valid) !== null && y !== void 0 ? y : g);
    function x() {
      if (m.errors === !1)
        I(), m.modifying && s(_), O(() => _.error());
      else {
        const q = m.async ? A() : M();
        m.modifying && s(_), O(() => a(_, q));
      }
    }
    function A() {
      const q = w.let("ruleErrs", null);
      return w.try(() => I((0, e._)`await `), (j) => w.assign(g, !1).if((0, e._)`${j} instanceof ${S.ValidationError}`, () => w.assign(q, (0, e._)`${j}.errors`), () => w.throw(j))), q;
    }
    function M() {
      const q = (0, e._)`${p}.errors`;
      return w.assign(q, null), I(e.nil), q;
    }
    function I(q = m.async ? (0, e._)`await ` : e.nil) {
      const j = S.opts.passContext ? t.default.this : t.default.self, H = !("compile" in m && !C || m.schema === !1);
      w.assign(g, (0, e._)`${q}${(0, n.callValidateCode)(_, p, j, H)}`, m.modifying);
    }
    function O(q) {
      var j;
      w.if((0, e.not)((j = m.valid) !== null && j !== void 0 ? j : g), q);
    }
  }
  Re.funcKeywordCode = i;
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
  Re.validSchemaType = f;
  function $({ schema: _, opts: m, self: y, errSchemaPath: w }, u, b) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(b) : u.keyword !== b)
      throw new Error("ajv implementation error");
    const h = u.dependencies;
    if (h?.some((C) => !Object.prototype.hasOwnProperty.call(_, C)))
      throw new Error(`parent schema must have dependencies of ${b}: ${h.join(",")}`);
    if (u.validateSchema && !u.validateSchema(_[b])) {
      const S = `keyword "${b}" value is invalid at path "${w}": ` + y.errorsText(u.validateSchema.errors);
      if (m.validateSchema === "log")
        y.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Re.validateKeywordUsage = $, Re;
}
var Be = {}, jo;
function vc() {
  if (jo) return Be;
  jo = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de();
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
  Be.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: d, dataTypes: f, propertyName: $ }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: _ } = s;
    if (a !== void 0) {
      const { errorPath: y, dataPathArr: w, opts: u } = s, b = _.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      m(b), i.errorPath = (0, e.str)`${y}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...w, i.parentDataProperty];
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
  Be.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: f }) {
    c !== void 0 && (i.compositeRule = c), d !== void 0 && (i.createErrors = d), f !== void 0 && (i.allErrors = f), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Be.extendSubschemaMode = o, Be;
}
var we = {}, hr, Do;
function Ks() {
  return Do || (Do = 1, hr = function e(t, n) {
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
  }), hr;
}
var mr = { exports: {} }, Lo;
function bc() {
  if (Lo) return mr.exports;
  Lo = 1;
  var e = mr.exports = function(r, o, i) {
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
  return mr.exports;
}
var qo;
function er() {
  if (qo) return we;
  qo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.getSchemaRefs = we.resolveUrl = we.normalizeId = we._getFullPath = we.getFullPath = we.inlineRef = void 0;
  const e = /* @__PURE__ */ de(), t = Ks(), n = bc(), r = /* @__PURE__ */ new Set([
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
  we.inlineRef = o;
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
      const b = w[u];
      if (Array.isArray(b) && b.some(s) || typeof b == "object" && s(b))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let u = 0;
    for (const b in w) {
      if (b === "$ref")
        return 1 / 0;
      if (u++, !r.has(b) && (typeof w[b] == "object" && (0, e.eachItem)(w[b], (h) => u += a(h)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c(w, u = "", b) {
    b !== !1 && (u = $(u));
    const h = w.parse(u);
    return d(w, h);
  }
  we.getFullPath = c;
  function d(w, u) {
    return w.serialize(u).split("#")[0] + "#";
  }
  we._getFullPath = d;
  const f = /#\/?$/;
  function $(w) {
    return w ? w.replace(f, "") : "";
  }
  we.normalizeId = $;
  function _(w, u, b) {
    return b = $(b), w.resolve(u, b);
  }
  we.resolveUrl = _;
  const m = /^[a-z_][-a-z0-9._]*$/i;
  function y(w, u) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: b, uriResolver: h } = this.opts, C = $(w[b] || u), S = { "": C }, l = c(h, C, !1), p = {}, g = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (M, I, O, q) => {
      if (q === void 0)
        return;
      const j = l + I;
      let H = S[q];
      typeof M[b] == "string" && (H = X.call(this, M[b])), ne.call(this, M.$anchor), ne.call(this, M.$dynamicAnchor), S[I] = H;
      function X(Z) {
        const K = this.opts.uriResolver.resolve;
        if (Z = $(H ? K(H, Z) : Z), g.has(Z))
          throw A(Z);
        g.add(Z);
        let L = this.refs[Z];
        return typeof L == "string" && (L = this.refs[L]), typeof L == "object" ? x(M, L.schema, Z) : Z !== $(j) && (Z[0] === "#" ? (x(M, p[Z], Z), p[Z] = M) : this.refs[Z] = j), Z;
      }
      function ne(Z) {
        if (typeof Z == "string") {
          if (!m.test(Z))
            throw new Error(`invalid anchor "${Z}"`);
          X.call(this, `#${Z}`);
        }
      }
    }), p;
    function x(M, I, O) {
      if (I !== void 0 && !t(M, I))
        throw A(O);
    }
    function A(M) {
      return new Error(`reference "${M}" resolves to more than one schema`);
    }
  }
  return we.getSchemaRefs = y, we;
}
var Vo;
function tr() {
  if (Vo) return qe;
  Vo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ gc(), t = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ Hs(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ yc(), i = /* @__PURE__ */ $c(), s = /* @__PURE__ */ vc(), a = /* @__PURE__ */ ce(), c = /* @__PURE__ */ Fe(), d = /* @__PURE__ */ er(), f = /* @__PURE__ */ de(), $ = /* @__PURE__ */ Qn();
  function _(E) {
    if (l(E) && (g(E), S(E))) {
      u(E);
      return;
    }
    m(E, () => (0, e.topBoolOrEmptySchema)(E));
  }
  qe.validateFunctionCode = _;
  function m({ gen: E, validateName: z, schema: V, schemaEnv: G, opts: ee }, oe) {
    ee.code.es5 ? E.func(z, (0, a._)`${c.default.data}, ${c.default.valCxt}`, G.$async, () => {
      E.code((0, a._)`"use strict"; ${h(V, ee)}`), w(E, ee), E.code(oe);
    }) : E.func(z, (0, a._)`${c.default.data}, ${y(ee)}`, G.$async, () => E.code(h(V, ee)).code(oe));
  }
  function y(E) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${E.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(E, z) {
    E.if(c.default.valCxt, () => {
      E.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), E.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), E.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), E.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), z.dynamicRef && E.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      E.var(c.default.instancePath, (0, a._)`""`), E.var(c.default.parentData, (0, a._)`undefined`), E.var(c.default.parentDataProperty, (0, a._)`undefined`), E.var(c.default.rootData, c.default.data), z.dynamicRef && E.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(E) {
    const { schema: z, opts: V, gen: G } = E;
    m(E, () => {
      V.$comment && z.$comment && q(E), M(E), G.let(c.default.vErrors, null), G.let(c.default.errors, 0), V.unevaluated && b(E), x(E), j(E);
    });
  }
  function b(E) {
    const { gen: z, validateName: V } = E;
    E.evaluated = z.const("evaluated", (0, a._)`${V}.evaluated`), z.if((0, a._)`${E.evaluated}.dynamicProps`, () => z.assign((0, a._)`${E.evaluated}.props`, (0, a._)`undefined`)), z.if((0, a._)`${E.evaluated}.dynamicItems`, () => z.assign((0, a._)`${E.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(E, z) {
    const V = typeof E == "object" && E[z.schemaId];
    return V && (z.code.source || z.code.process) ? (0, a._)`/*# sourceURL=${V} */` : a.nil;
  }
  function C(E, z) {
    if (l(E) && (g(E), S(E))) {
      p(E, z);
      return;
    }
    (0, e.boolOrEmptySchema)(E, z);
  }
  function S({ schema: E, self: z }) {
    if (typeof E == "boolean")
      return !E;
    for (const V in E)
      if (z.RULES.all[V])
        return !0;
    return !1;
  }
  function l(E) {
    return typeof E.schema != "boolean";
  }
  function p(E, z) {
    const { schema: V, gen: G, opts: ee } = E;
    ee.$comment && V.$comment && q(E), I(E), O(E);
    const oe = G.const("_errs", c.default.errors);
    x(E, oe), G.var(z, (0, a._)`${oe} === ${c.default.errors}`);
  }
  function g(E) {
    (0, f.checkUnknownRules)(E), A(E);
  }
  function x(E, z) {
    if (E.opts.jtd)
      return X(E, [], !1, z);
    const V = (0, t.getSchemaTypes)(E.schema), G = (0, t.coerceAndCheckDataType)(E, V);
    X(E, V, !G, z);
  }
  function A(E) {
    const { schema: z, errSchemaPath: V, opts: G, self: ee } = E;
    z.$ref && G.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(z, ee.RULES) && ee.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function M(E) {
    const { schema: z, opts: V } = E;
    z.default !== void 0 && V.useDefaults && V.strictSchema && (0, f.checkStrictMode)(E, "default is ignored in the schema root");
  }
  function I(E) {
    const z = E.schema[E.opts.schemaId];
    z && (E.baseId = (0, d.resolveUrl)(E.opts.uriResolver, E.baseId, z));
  }
  function O(E) {
    if (E.schema.$async && !E.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: E, schemaEnv: z, schema: V, errSchemaPath: G, opts: ee }) {
    const oe = V.$comment;
    if (ee.$comment === !0)
      E.code((0, a._)`${c.default.self}.logger.log(${oe})`);
    else if (typeof ee.$comment == "function") {
      const se = (0, a.str)`${G}/$comment`, re = E.scopeValue("root", { ref: z.root });
      E.code((0, a._)`${c.default.self}.opts.$comment(${oe}, ${se}, ${re}.schema)`);
    }
  }
  function j(E) {
    const { gen: z, schemaEnv: V, validateName: G, ValidationError: ee, opts: oe } = E;
    V.$async ? z.if((0, a._)`${c.default.errors} === 0`, () => z.return(c.default.data), () => z.throw((0, a._)`new ${ee}(${c.default.vErrors})`)) : (z.assign((0, a._)`${G}.errors`, c.default.vErrors), oe.unevaluated && H(E), z.return((0, a._)`${c.default.errors} === 0`));
  }
  function H({ gen: E, evaluated: z, props: V, items: G }) {
    V instanceof a.Name && E.assign((0, a._)`${z}.props`, V), G instanceof a.Name && E.assign((0, a._)`${z}.items`, G);
  }
  function X(E, z, V, G) {
    const { gen: ee, schema: oe, data: se, allErrors: re, opts: ie, self: ae } = E, { RULES: fe } = ae;
    if (oe.$ref && (ie.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(oe, fe))) {
      ee.block(() => U(E, "$ref", fe.all.$ref.definition));
      return;
    }
    ie.jtd || Z(E, z), ee.block(() => {
      for (const be of fe.rules)
        ve(be);
      ve(fe.post);
    });
    function ve(be) {
      (0, n.shouldUseGroup)(oe, be) && (be.type ? (ee.if((0, r.checkDataType)(be.type, se, ie.strictNumbers)), ne(E, be), z.length === 1 && z[0] === be.type && V && (ee.else(), (0, r.reportTypeError)(E)), ee.endIf()) : ne(E, be), re || ee.if((0, a._)`${c.default.errors} === ${G || 0}`));
    }
  }
  function ne(E, z) {
    const { gen: V, schema: G, opts: { useDefaults: ee } } = E;
    ee && (0, o.assignDefaults)(E, z.type), V.block(() => {
      for (const oe of z.rules)
        (0, n.shouldUseRule)(G, oe) && U(E, oe.keyword, oe.definition, z.type);
    });
  }
  function Z(E, z) {
    E.schemaEnv.meta || !E.opts.strictTypes || (K(E, z), E.opts.allowUnionTypes || L(E, z), R(E, E.dataTypes));
  }
  function K(E, z) {
    if (z.length) {
      if (!E.dataTypes.length) {
        E.dataTypes = z;
        return;
      }
      z.forEach((V) => {
        N(E.dataTypes, V) || k(E, `type "${V}" not allowed by context "${E.dataTypes.join(",")}"`);
      }), v(E, z);
    }
  }
  function L(E, z) {
    z.length > 1 && !(z.length === 2 && z.includes("null")) && k(E, "use allowUnionTypes to allow union type keyword");
  }
  function R(E, z) {
    const V = E.self.RULES.all;
    for (const G in V) {
      const ee = V[G];
      if (typeof ee == "object" && (0, n.shouldUseRule)(E.schema, ee)) {
        const { type: oe } = ee.definition;
        oe.length && !oe.some((se) => P(z, se)) && k(E, `missing type "${oe.join(",")}" for keyword "${G}"`);
      }
    }
  }
  function P(E, z) {
    return E.includes(z) || z === "number" && E.includes("integer");
  }
  function N(E, z) {
    return E.includes(z) || z === "integer" && E.includes("number");
  }
  function v(E, z) {
    const V = [];
    for (const G of E.dataTypes)
      N(z, G) ? V.push(G) : z.includes("integer") && G === "number" && V.push("integer");
    E.dataTypes = V;
  }
  function k(E, z) {
    const V = E.schemaEnv.baseId + E.errSchemaPath;
    z += ` at "${V}" (strictTypes)`, (0, f.checkStrictMode)(E, z, E.opts.strictTypes);
  }
  class D {
    constructor(z, V, G) {
      if ((0, i.validateKeywordUsage)(z, V, G), this.gen = z.gen, this.allErrors = z.allErrors, this.keyword = G, this.data = z.data, this.schema = z.schema[G], this.$data = V.$data && z.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(z, this.schema, G, this.$data), this.schemaType = V.schemaType, this.parentSchema = z.schema, this.params = {}, this.it = z, this.def = V, this.$data)
        this.schemaCode = z.gen.const("vSchema", Y(this.$data, z));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${G} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = z.gen.const("_errs", c.default.errors));
    }
    result(z, V, G) {
      this.failResult((0, a.not)(z), V, G);
    }
    failResult(z, V, G) {
      this.gen.if(z), G ? G() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(z, V) {
      this.failResult((0, a.not)(z), void 0, V);
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
      const { schemaCode: V } = this;
      this.fail((0, a._)`${V} !== undefined && (${(0, a.or)(this.invalid$data(), z)})`);
    }
    error(z, V, G) {
      if (V) {
        this.setParams(V), this._error(z, G), this.setParams({});
        return;
      }
      this._error(z, G);
    }
    _error(z, V) {
      (z ? $.reportExtraError : $.reportError)(this, this.def.error, V);
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
    setParams(z, V) {
      V ? Object.assign(this.params, z) : this.params = z;
    }
    block$data(z, V, G = a.nil) {
      this.gen.block(() => {
        this.check$data(z, G), V();
      });
    }
    check$data(z = a.nil, V = a.nil) {
      if (!this.$data)
        return;
      const { gen: G, schemaCode: ee, schemaType: oe, def: se } = this;
      G.if((0, a.or)((0, a._)`${ee} === undefined`, V)), z !== a.nil && G.assign(z, !0), (oe.length || se.validateSchema) && (G.elseIf(this.invalid$data()), this.$dataError(), z !== a.nil && G.assign(z, !1)), G.else();
    }
    invalid$data() {
      const { gen: z, schemaCode: V, schemaType: G, def: ee, it: oe } = this;
      return (0, a.or)(se(), re());
      function se() {
        if (G.length) {
          if (!(V instanceof a.Name))
            throw new Error("ajv implementation error");
          const ie = Array.isArray(G) ? G : [G];
          return (0, a._)`${(0, r.checkDataTypes)(ie, V, oe.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function re() {
        if (ee.validateSchema) {
          const ie = z.scopeValue("validate$data", { ref: ee.validateSchema });
          return (0, a._)`!${ie}(${V})`;
        }
        return a.nil;
      }
    }
    subschema(z, V) {
      const G = (0, s.getSubschema)(this.it, z);
      (0, s.extendSubschemaData)(G, this.it, z), (0, s.extendSubschemaMode)(G, z);
      const ee = { ...this.it, ...G, items: void 0, props: void 0 };
      return C(ee, V), ee;
    }
    mergeEvaluated(z, V) {
      const { it: G, gen: ee } = this;
      G.opts.unevaluated && (G.props !== !0 && z.props !== void 0 && (G.props = f.mergeEvaluated.props(ee, z.props, G.props, V)), G.items !== !0 && z.items !== void 0 && (G.items = f.mergeEvaluated.items(ee, z.items, G.items, V)));
    }
    mergeValidEvaluated(z, V) {
      const { it: G, gen: ee } = this;
      if (G.opts.unevaluated && (G.props !== !0 || G.items !== !0))
        return ee.if(V, () => this.mergeEvaluated(z, a.Name)), !0;
    }
  }
  qe.KeywordCxt = D;
  function U(E, z, V, G) {
    const ee = new D(E, V, z);
    "code" in V ? V.code(ee, G) : ee.$data && V.validate ? (0, i.funcKeywordCode)(ee, V) : "macro" in V ? (0, i.macroKeywordCode)(ee, V) : (V.compile || V.validate) && (0, i.funcKeywordCode)(ee, V);
  }
  const W = /^\/(?:[^~]|~0|~1)*$/, J = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Y(E, { dataLevel: z, dataNames: V, dataPathArr: G }) {
    let ee, oe;
    if (E === "")
      return c.default.rootData;
    if (E[0] === "/") {
      if (!W.test(E))
        throw new Error(`Invalid JSON-pointer: ${E}`);
      ee = E, oe = c.default.rootData;
    } else {
      const ae = J.exec(E);
      if (!ae)
        throw new Error(`Invalid JSON-pointer: ${E}`);
      const fe = +ae[1];
      if (ee = ae[2], ee === "#") {
        if (fe >= z)
          throw new Error(ie("property/index", fe));
        return G[z - fe];
      }
      if (fe > z)
        throw new Error(ie("data", fe));
      if (oe = V[z - fe], !ee)
        return oe;
    }
    let se = oe;
    const re = ee.split("/");
    for (const ae of re)
      ae && (oe = (0, a._)`${oe}${(0, a.getProperty)((0, f.unescapeJsonPointer)(ae))}`, se = (0, a._)`${se} && ${oe}`);
    return se;
    function ie(ae, fe) {
      return `Cannot access ${ae} ${fe} levels up, current level is ${z}`;
    }
  }
  return qe.getData = Y, qe;
}
var Vt = {}, Bo;
function eo() {
  if (Bo) return Vt;
  Bo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Vt.default = e, Vt;
}
var Bt = {}, Uo;
function nr() {
  if (Uo) return Bt;
  Uo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Bt.default = t, Bt;
}
var _e = {}, Ho;
function rr() {
  if (Ho) return _e;
  Ho = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ eo(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ er(), o = /* @__PURE__ */ de(), i = /* @__PURE__ */ tr();
  class s {
    constructor(b) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof b.schema == "object" && (C = b.schema), this.schema = b.schema, this.schemaId = b.schemaId, this.root = b.root || this, this.baseId = (h = b.baseId) !== null && h !== void 0 ? h : (0, r.normalizeId)(C?.[b.schemaId || "$id"]), this.schemaPath = b.schemaPath, this.localRefs = b.localRefs, this.meta = b.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = s;
  function a(u) {
    const b = f.call(this, u);
    if (b)
      return b;
    const h = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: S } = this.opts.code, { ownProperties: l } = this.opts, p = new e.CodeGen(this.scope, { es5: C, lines: S, ownProperties: l });
    let g;
    u.$async && (g = p.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = p.scopeName("validate");
    u.validateName = x;
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
    let M;
    try {
      this._compilations.add(u), (0, i.validateFunctionCode)(A), p.optimize(this.opts.code.optimize);
      const I = p.toString();
      M = `${p.scopeRefs(n.default.scope)}return ${I}`, this.opts.code.process && (M = this.opts.code.process(M, u));
      const q = new Function(`${n.default.self}`, `${n.default.scope}`, M)(this, this.scope.get());
      if (this.scope.value(x, { ref: q }), q.errors = null, q.schema = u.schema, q.schemaEnv = u, u.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: x, validateCode: I, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: j, items: H } = A;
        q.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: H instanceof e.Name ? void 0 : H,
          dynamicProps: j instanceof e.Name,
          dynamicItems: H instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return u.validate = q, u;
    } catch (I) {
      throw delete u.validate, delete u.validateName, M && this.logger.error("Error compiling schema, function code:", M), I;
    } finally {
      this._compilations.delete(u);
    }
  }
  _e.compileSchema = a;
  function c(u, b, h) {
    var C;
    h = (0, r.resolveUrl)(this.opts.uriResolver, b, h);
    const S = u.refs[h];
    if (S)
      return S;
    let l = _.call(this, u, h);
    if (l === void 0) {
      const p = (C = u.localRefs) === null || C === void 0 ? void 0 : C[h], { schemaId: g } = this.opts;
      p && (l = new s({ schema: p, schemaId: g, root: u, baseId: b }));
    }
    if (l !== void 0)
      return u.refs[h] = d.call(this, l);
  }
  _e.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function f(u) {
    for (const b of this._compilations)
      if ($(b, u))
        return b;
  }
  _e.getCompilingSchema = f;
  function $(u, b) {
    return u.schema === b.schema && u.root === b.root && u.baseId === b.baseId;
  }
  function _(u, b) {
    let h;
    for (; typeof (h = this.refs[b]) == "string"; )
      b = h;
    return h || this.schemas[b] || m.call(this, u, b);
  }
  function m(u, b) {
    const h = this.opts.uriResolver.parse(b), C = (0, r._getFullPath)(this.opts.uriResolver, h);
    let S = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === S)
      return w.call(this, h, u);
    const l = (0, r.normalizeId)(C), p = this.refs[l] || this.schemas[l];
    if (typeof p == "string") {
      const g = m.call(this, u, p);
      return typeof g?.schema != "object" ? void 0 : w.call(this, h, g);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), l === (0, r.normalizeId)(b)) {
        const { schema: g } = p, { schemaId: x } = this.opts, A = g[x];
        return A && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, A)), new s({ schema: g, schemaId: x, root: u, baseId: S });
      }
      return w.call(this, h, p);
    }
  }
  _e.resolveSchema = m;
  const y = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(u, { baseId: b, schema: h, root: C }) {
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
      const A = typeof h == "object" && h[this.opts.schemaId];
      !y.has(g) && A && (b = (0, r.resolveUrl)(this.opts.uriResolver, b, A));
    }
    let l;
    if (typeof h != "boolean" && h.$ref && !(0, o.schemaHasRulesButRef)(h, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, b, h.$ref);
      l = m.call(this, C, g);
    }
    const { schemaId: p } = this.opts;
    if (l = l || new s({ schema: h, schemaId: p, root: C, baseId: b }), l.schema !== l.root.schema)
      return l;
  }
  return _e;
}
const wc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", _c = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Sc = "object", Cc = ["$data"], kc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, xc = !1, Ec = {
  $id: wc,
  description: _c,
  type: Sc,
  required: Cc,
  properties: kc,
  additionalProperties: xc
};
var Ut = {}, At = { exports: {} }, gr, Ko;
function Gs() {
  if (Ko) return gr;
  Ko = 1;
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
    const g = { error: !1, address: "", zone: "" }, x = [], A = [];
    let M = !1, I = !1, O = c;
    for (let q = 0; q < l.length; q++) {
      const j = l[q];
      if (!(j === "[" || j === "]"))
        if (j === ":") {
          if (M === !0 && (I = !0), !O(A, x, g))
            break;
          if (++p > 7) {
            g.error = !0;
            break;
          }
          q > 0 && l[q - 1] === ":" && (M = !0), x.push(":");
          continue;
        } else if (j === "%") {
          if (!O(A, x, g))
            break;
          O = a;
        } else {
          A.push(j);
          continue;
        }
    }
    return A.length && (O === a ? g.zone = A.join("") : I ? x.push(A.join("")) : x.push(i(A))), g.address = x.join(""), g;
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
    let x = -1, A = 0;
    for (; A = p.length; ) {
      if (A === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          g.push("/");
          break;
        } else {
          g.push(p);
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
          g.push("/");
          break;
        }
      } else if (A === 3 && p === "/..") {
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
  function b(l, p = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let g = "";
    for (let x = 0; x < l.length; x++) {
      if (l[x] === "%" && x + 2 < l.length) {
        const A = l.slice(x + 1, x + 3);
        if (n(A)) {
          const M = A.toUpperCase(), I = String.fromCharCode(parseInt(M, 16));
          p && r(I) ? g += I : g += "%" + M, x += 2;
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
          const A = x.toUpperCase(), M = String.fromCharCode(parseInt(A, 16));
          M !== "." && r(M) ? p += M : p += "%" + A, g += 2;
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
  return gr = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: b,
    normalizePathEncoding: h,
    escapePreservingEscapes: C,
    removeDotSegments: _,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: i
  }, gr;
}
var yr, Go;
function Pc() {
  if (Go) return yr;
  Go = 1;
  const { isUUID: e } = Gs(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const A = `${x}:${p.nid || l.nid}`, M = S(A);
      l.path = void 0, M && (l = M.parse(l, p));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function f(l, p) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = p.scheme || l.scheme || "urn", x = l.nid.toLowerCase(), A = `${g}:${p.nid || x}`, M = S(A);
    M && (l = M.serialize(l, p));
    const I = l, O = l.nss;
    return I.path = `${x || p.nid}:${O}`, p.skipEscape = !0, I;
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
  return yr = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, yr;
}
var Wo;
function Ac() {
  if (Wo) return At.exports;
  Wo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = Gs(), { SCHEMES: d, getSchemeHandler: f } = Pc();
  function $(A, M) {
    return typeof A == "string" ? A = /** @type {T} */
    l(A, M) : typeof A == "object" && (A = /** @type {T} */
    S(w(A, M), M)), A;
  }
  function _(A, M, I) {
    const O = I ? Object.assign({ scheme: "null" }, I) : { scheme: "null" }, q = m(S(A, O), S(M, O), O, !0);
    return O.skipEscape = !0, w(q, O);
  }
  function m(A, M, I, O) {
    const q = {};
    return O || (A = S(w(A, I), I), M = S(w(M, I), I)), I = I || {}, !I.tolerant && M.scheme ? (q.scheme = M.scheme, q.userinfo = M.userinfo, q.host = M.host, q.port = M.port, q.path = t(M.path || ""), q.query = M.query) : (M.userinfo !== void 0 || M.host !== void 0 || M.port !== void 0 ? (q.userinfo = M.userinfo, q.host = M.host, q.port = M.port, q.path = t(M.path || ""), q.query = M.query) : (M.path ? (M.path[0] === "/" ? q.path = t(M.path) : ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path ? q.path = "/" + M.path : A.path ? q.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + M.path : q.path = M.path, q.path = t(q.path)), q.query = M.query) : (q.path = A.path, M.query !== void 0 ? q.query = M.query : q.query = A.query), q.userinfo = A.userinfo, q.host = A.host, q.port = A.port), q.scheme = A.scheme), q.fragment = M.fragment, q;
  }
  function y(A, M, I) {
    const O = g(A, I), q = g(M, I);
    return O !== void 0 && q !== void 0 && O.toLowerCase() === q.toLowerCase();
  }
  function w(A, M) {
    const I = {
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
    }, O = Object.assign({}, M), q = [], j = f(O.scheme || I.scheme);
    j && j.serialize && j.serialize(I, O), I.path !== void 0 && (O.skipEscape ? I.path = r(I.path) : (I.path = i(I.path), I.scheme !== void 0 && (I.path = I.path.split("%3A").join(":")))), O.reference !== "suffix" && I.scheme && q.push(I.scheme, ":");
    const H = n(I);
    if (H !== void 0 && (O.reference !== "suffix" && q.push("//"), q.push(H), I.path && I.path[0] !== "/" && q.push("/")), I.path !== void 0) {
      let X = I.path;
      !O.absolutePath && (!j || !j.absolutePath) && (X = t(X)), H === void 0 && X[0] === "/" && X[1] === "/" && (X = "/%2F" + X.slice(2)), q.push(X);
    }
    return I.query !== void 0 && q.push("?", I.query), I.fragment !== void 0 && q.push("#", I.fragment), q.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, b = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function h(A, M) {
    if (M[2] !== void 0 && A.path && A.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof A.port == "number" && (A.port < 0 || A.port > 65535))
      return "URI port is malformed.";
  }
  function C(A, M) {
    const I = Object.assign({}, M), O = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, j = !1;
    I.reference === "suffix" && (I.scheme ? A = I.scheme + ":" + A : A = "//" + A);
    const H = A.match(b);
    H !== null && H[1].indexOf("\\") !== -1 && (O.error = "URI authority must not contain a literal backslash.", q = !0);
    const X = A.match(u);
    if (X) {
      O.scheme = X[1], O.userinfo = X[3], O.host = X[4], O.port = parseInt(X[5], 10), O.path = X[6] || "", O.query = X[7], O.fragment = X[8], isNaN(O.port) && (O.port = X[5]);
      const ne = h(O, X);
      if (ne !== void 0 && (O.error = O.error || ne, q = !0), O.host)
        if (a(O.host) === !1) {
          const L = e(O.host);
          O.host = L.host.toLowerCase(), j = L.isIPV6;
        } else
          j = !0;
      O.scheme === void 0 && O.userinfo === void 0 && O.host === void 0 && O.port === void 0 && O.query === void 0 && !O.path ? O.reference = "same-document" : O.scheme === void 0 ? O.reference = "relative" : O.fragment === void 0 ? O.reference = "absolute" : O.reference = "uri", I.reference && I.reference !== "suffix" && I.reference !== O.reference && (O.error = O.error || "URI is not a " + I.reference + " reference.");
      const Z = f(I.scheme || O.scheme);
      if (!I.unicodeSupport && (!Z || !Z.unicodeSupport) && O.host && (I.domainHost || Z && Z.domainHost) && j === !1 && c(O.host))
        try {
          O.host = new URL("http://" + O.host).hostname;
        } catch (K) {
          O.error = O.error || "Host's domain name can not be converted to ASCII: " + K;
        }
      if ((!Z || Z && !Z.skipNormalize) && (A.indexOf("%") !== -1 && (O.scheme !== void 0 && (O.scheme = unescape(O.scheme)), O.host !== void 0 && (O.host = s(unescape(O.host), j))), O.path && (O.path = o(O.path)), O.fragment))
        try {
          O.fragment = encodeURI(decodeURIComponent(O.fragment));
        } catch {
          O.error = O.error || "URI malformed";
        }
      Z && Z.parse && Z.parse(O, I);
    } else
      O.error = O.error || "URI can not be parsed.";
    return { parsed: O, malformedAuthorityOrPort: q };
  }
  function S(A, M) {
    return C(A, M).parsed;
  }
  function l(A, M) {
    return p(A, M).normalized;
  }
  function p(A, M) {
    const { parsed: I, malformedAuthorityOrPort: O } = C(A, M);
    return {
      normalized: O ? A : w(I, M),
      malformedAuthorityOrPort: O
    };
  }
  function g(A, M) {
    if (typeof A == "string") {
      const { normalized: I, malformedAuthorityOrPort: O } = p(A, M);
      return O ? void 0 : I;
    }
    if (typeof A == "object")
      return w(A, M);
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
  return At.exports = x, At.exports.default = x, At.exports.fastUri = x, At.exports;
}
var Jo;
function Rc() {
  if (Jo) return Ut;
  Jo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = Ac();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ut.default = e, Ut;
}
var Yo;
function Nc() {
  return Yo || (Yo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ tr();
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
    const r = /* @__PURE__ */ eo(), o = /* @__PURE__ */ nr(), i = /* @__PURE__ */ Us(), s = /* @__PURE__ */ rr(), a = /* @__PURE__ */ ce(), c = /* @__PURE__ */ er(), d = /* @__PURE__ */ Hn(), f = /* @__PURE__ */ de(), $ = Ec, _ = /* @__PURE__ */ Rc(), m = (L, R) => new RegExp(L, R);
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
    }, b = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, h = 200;
    function C(L) {
      var R, P, N, v, k, D, U, W, J, Y, E, z, V, G, ee, oe, se, re, ie, ae, fe, ve, be, Ae, Le;
      const rt = L.strict, cr = (R = L.code) === null || R === void 0 ? void 0 : R.optimize, vo = cr === !0 || cr === void 0 ? 1 : cr || 0, bo = (N = (P = L.code) === null || P === void 0 ? void 0 : P.regExp) !== null && N !== void 0 ? N : m, xa = (v = L.uriResolver) !== null && v !== void 0 ? v : _.default;
      return {
        strictSchema: (D = (k = L.strictSchema) !== null && k !== void 0 ? k : rt) !== null && D !== void 0 ? D : !0,
        strictNumbers: (W = (U = L.strictNumbers) !== null && U !== void 0 ? U : rt) !== null && W !== void 0 ? W : !0,
        strictTypes: (Y = (J = L.strictTypes) !== null && J !== void 0 ? J : rt) !== null && Y !== void 0 ? Y : "log",
        strictTuples: (z = (E = L.strictTuples) !== null && E !== void 0 ? E : rt) !== null && z !== void 0 ? z : "log",
        strictRequired: (G = (V = L.strictRequired) !== null && V !== void 0 ? V : rt) !== null && G !== void 0 ? G : !1,
        code: L.code ? { ...L.code, optimize: vo, regExp: bo } : { optimize: vo, regExp: bo },
        loopRequired: (ee = L.loopRequired) !== null && ee !== void 0 ? ee : h,
        loopEnum: (oe = L.loopEnum) !== null && oe !== void 0 ? oe : h,
        meta: (se = L.meta) !== null && se !== void 0 ? se : !0,
        messages: (re = L.messages) !== null && re !== void 0 ? re : !0,
        inlineRefs: (ie = L.inlineRefs) !== null && ie !== void 0 ? ie : !0,
        schemaId: (ae = L.schemaId) !== null && ae !== void 0 ? ae : "$id",
        addUsedSchema: (fe = L.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (ve = L.validateSchema) !== null && ve !== void 0 ? ve : !0,
        validateFormats: (be = L.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (Ae = L.unicodeRegExp) !== null && Ae !== void 0 ? Ae : !0,
        int32range: (Le = L.int32range) !== null && Le !== void 0 ? Le : !0,
        uriResolver: xa
      };
    }
    class S {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...C(R) };
        const { es5: P, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: P, lines: N }), this.logger = O(R.logger);
        const v = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, u, R, "NOT SUPPORTED"), l.call(this, b, R, "DEPRECATED", "warn"), this._metaOpts = M.call(this), R.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && A.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), g.call(this), R.validateFormats = v;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: P, schemaId: N } = this.opts;
        let v = $;
        N === "id" && (v = { ...$ }, v.id = v.$id, delete v.$id), P && R && this.addMetaSchema(v, v[N], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: P } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[P] || R : void 0;
      }
      validate(R, P) {
        let N;
        if (typeof R == "string") {
          if (N = this.getSchema(R), !N)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          N = this.compile(R);
        const v = N(P);
        return "$async" in N || (this.errors = N.errors), v;
      }
      compile(R, P) {
        const N = this._addSchema(R, P);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(R, P) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return v.call(this, R, P);
        async function v(Y, E) {
          await k.call(this, Y.$schema);
          const z = this._addSchema(Y, E);
          return z.validate || D.call(this, z);
        }
        async function k(Y) {
          Y && !this.getSchema(Y) && await v.call(this, { $ref: Y }, !0);
        }
        async function D(Y) {
          try {
            return this._compileSchemaEnv(Y);
          } catch (E) {
            if (!(E instanceof o.default))
              throw E;
            return U.call(this, E), await W.call(this, E.missingSchema), D.call(this, Y);
          }
        }
        function U({ missingSchema: Y, missingRef: E }) {
          if (this.refs[Y])
            throw new Error(`AnySchema ${Y} is loaded but ${E} cannot be resolved`);
        }
        async function W(Y) {
          const E = await J.call(this, Y);
          this.refs[Y] || await k.call(this, E.$schema), this.refs[Y] || this.addSchema(E, Y, P);
        }
        async function J(Y) {
          const E = this._loading[Y];
          if (E)
            return E;
          try {
            return await (this._loading[Y] = N(Y));
          } finally {
            delete this._loading[Y];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, P, N, v = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const D of R)
            this.addSchema(D, void 0, N, v);
          return this;
        }
        let k;
        if (typeof R == "object") {
          const { schemaId: D } = this.opts;
          if (k = R[D], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${D} must be string`);
        }
        return P = (0, c.normalizeId)(P || k), this._checkUnique(P), this.schemas[P] = this._addSchema(R, N, P, v, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, P, N = this.opts.validateSchema) {
        return this.addSchema(R, P, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, P) {
        if (typeof R == "boolean")
          return !0;
        let N;
        if (N = R.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const v = this.validate(N, R);
        if (!v && P) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return v;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let P;
        for (; typeof (P = p.call(this, R)) == "string"; )
          R = P;
        if (P === void 0) {
          const { schemaId: N } = this.opts, v = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (P = s.resolveSchema.call(this, v, R), !P)
            return;
          this.refs[R] = P;
        }
        return P.validate || this._compileSchemaEnv(P);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(R) {
        if (R instanceof RegExp)
          return this._removeAllSchemas(this.schemas, R), this._removeAllSchemas(this.refs, R), this;
        switch (typeof R) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const P = p.call(this, R);
            return typeof P == "object" && this._cache.delete(P.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const P = R;
            this._cache.delete(P);
            let N = R[this.opts.schemaId];
            return N && (N = (0, c.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const P of R)
          this.addKeyword(P);
        return this;
      }
      addKeyword(R, P) {
        let N;
        if (typeof R == "string")
          N = R, typeof P == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), P.keyword = N);
        else if (typeof R == "object" && P === void 0) {
          if (P = R, N = P.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, N, P), !P)
          return (0, f.eachItem)(N, (k) => H.call(this, k)), this;
        ne.call(this, P);
        const v = {
          ...P,
          type: (0, d.getJSONTypes)(P.type),
          schemaType: (0, d.getJSONTypes)(P.schemaType)
        };
        return (0, f.eachItem)(N, v.type.length === 0 ? (k) => H.call(this, k, v) : (k) => v.type.forEach((D) => H.call(this, k, v, D))), this;
      }
      getKeyword(R) {
        const P = this.RULES.all[R];
        return typeof P == "object" ? P.definition : !!P;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: P } = this;
        delete P.keywords[R], delete P.all[R];
        for (const N of P.rules) {
          const v = N.rules.findIndex((k) => k.keyword === R);
          v >= 0 && N.rules.splice(v, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, P) {
        return typeof P == "string" && (P = new RegExp(P)), this.formats[R] = P, this;
      }
      errorsText(R = this.errors, { separator: P = ", ", dataVar: N = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((v) => `${N}${v.instancePath} ${v.message}`).reduce((v, k) => v + P + k);
      }
      $dataMetaSchema(R, P) {
        const N = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const v of P) {
          const k = v.split("/").slice(1);
          let D = R;
          for (const U of k)
            D = D[U];
          for (const U in N) {
            const W = N[U];
            if (typeof W != "object")
              continue;
            const { $data: J } = W.definition, Y = D[U];
            J && Y && (D[U] = K(Y));
          }
        }
        return R;
      }
      _removeAllSchemas(R, P) {
        for (const N in R) {
          const v = R[N];
          (!P || P.test(N)) && (typeof v == "string" ? delete R[N] : v && !v.meta && (this._cache.delete(v.schema), delete R[N]));
        }
      }
      _addSchema(R, P, N, v = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let D;
        const { schemaId: U } = this.opts;
        if (typeof R == "object")
          D = R[U];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let W = this._cache.get(R);
        if (W !== void 0)
          return W;
        N = (0, c.normalizeId)(D || N);
        const J = c.getSchemaRefs.call(this, R, N);
        return W = new s.SchemaEnv({ schema: R, schemaId: U, meta: P, baseId: N, localRefs: J }), this._cache.set(W.schema, W), k && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = W), v && this.validateSchema(R, !0), W;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : s.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const P = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, R);
        } finally {
          this.opts = P;
        }
      }
    }
    S.ValidationError = r.default, S.MissingRefError = o.default, e.default = S;
    function l(L, R, P, N = "error") {
      for (const v in L) {
        const k = v;
        k in R && this.logger[N](`${P}: option ${v}. ${L[k]}`);
      }
    }
    function p(L) {
      return L = (0, c.normalizeId)(L), this.schemas[L] || this.refs[L];
    }
    function g() {
      const L = this.opts.schemas;
      if (L)
        if (Array.isArray(L))
          this.addSchema(L);
        else
          for (const R in L)
            this.addSchema(L[R], R);
    }
    function x() {
      for (const L in this.opts.formats) {
        const R = this.opts.formats[L];
        R && this.addFormat(L, R);
      }
    }
    function A(L) {
      if (Array.isArray(L)) {
        this.addVocabulary(L);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in L) {
        const P = L[R];
        P.keyword || (P.keyword = R), this.addKeyword(P);
      }
    }
    function M() {
      const L = { ...this.opts };
      for (const R of y)
        delete L[R];
      return L;
    }
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    function O(L) {
      if (L === !1)
        return I;
      if (L === void 0)
        return console;
      if (L.log && L.warn && L.error)
        return L;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(L, R) {
      const { RULES: P } = this;
      if ((0, f.eachItem)(L, (N) => {
        if (P.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!q.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function H(L, R, P) {
      var N;
      const v = R?.post;
      if (P && v)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let D = v ? k.post : k.rules.find(({ type: W }) => W === P);
      if (D || (D = { type: P, rules: [] }, k.rules.push(D)), k.keywords[L] = !0, !R)
        return;
      const U = {
        keyword: L,
        definition: {
          ...R,
          type: (0, d.getJSONTypes)(R.type),
          schemaType: (0, d.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? X.call(this, D, U, R.before) : D.rules.push(U), k.all[L] = U, (N = R.implements) === null || N === void 0 || N.forEach((W) => this.addKeyword(W));
    }
    function X(L, R, P) {
      const N = L.rules.findIndex((v) => v.keyword === P);
      N >= 0 ? L.rules.splice(N, 0, R) : (L.rules.push(R), this.logger.warn(`rule ${P} is not defined`));
    }
    function ne(L) {
      let { metaSchema: R } = L;
      R !== void 0 && (L.$data && this.opts.$data && (R = K(R)), L.validateSchema = this.compile(R, !0));
    }
    const Z = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function K(L) {
      return { anyOf: [L, Z] };
    }
  })(lr)), lr;
}
var Ht = {}, Kt = {}, Gt = {}, Xo;
function Mc() {
  if (Xo) return Gt;
  Xo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Gt.default = e, Gt;
}
var Ye = {}, Zo;
function to() {
  if (Zo) return Ye;
  Zo = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.callRef = Ye.getValidate = void 0;
  const e = /* @__PURE__ */ nr(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe(), o = /* @__PURE__ */ rr(), i = /* @__PURE__ */ de(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: f, schema: $, it: _ } = d, { baseId: m, schemaEnv: y, validateName: w, opts: u, self: b } = _, { root: h } = y;
      if (($ === "#" || $ === "#/") && m === h.baseId)
        return S();
      const C = o.resolveRef.call(b, h, m, $);
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
        const x = f.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), A = f.name("valid"), M = d.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: $
        }, A);
        d.mergeEvaluated(M), d.ok(A);
      }
    }
  };
  function a(d, f) {
    const { gen: $ } = d;
    return f.validate ? $.scopeValue("validate", { ref: f.validate }) : (0, n._)`${$.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Ye.getValidate = a;
  function c(d, f, $, _) {
    const { gen: m, it: y } = d, { allErrors: w, schemaEnv: u, opts: b } = y, h = b.passContext ? r.default.this : n.nil;
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
      const A = (x = $?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (y.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (y.props = i.mergeEvaluated.props(m, A.props, y.props));
        else {
          const M = m.var("props", (0, n._)`${g}.evaluated.props`);
          y.props = i.mergeEvaluated.props(m, M, y.props, n.Name);
        }
      if (y.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (y.items = i.mergeEvaluated.items(m, A.items, y.items));
        else {
          const M = m.var("items", (0, n._)`${g}.evaluated.items`);
          y.items = i.mergeEvaluated.items(m, M, y.items, n.Name);
        }
    }
  }
  return Ye.callRef = c, Ye.default = s, Ye;
}
var Qo;
function Tc() {
  if (Qo) return Kt;
  Qo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mc(), t = /* @__PURE__ */ to(), n = [
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
var Wt = {}, Jt = {}, ei;
function Oc() {
  if (ei) return Jt;
  ei = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
  return Jt.default = o, Jt;
}
var Yt = {}, ti;
function Fc() {
  if (ti) return Yt;
  ti = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
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
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, d = o.let("res"), f = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      r.fail$data((0, e._)`(${s} === 0 || (${d} = ${i}/${s}, ${f}))`);
    }
  };
  return Yt.default = n, Yt;
}
var Xt = {}, Zt = {}, ni;
function zc() {
  if (ni) return Zt;
  ni = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Zt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Zt;
}
var ri;
function Ic() {
  if (ri) return Xt;
  ri = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ zc(), o = {
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
  return Xt.default = o, Xt;
}
var Qt = {}, oi;
function jc() {
  if (oi) return Qt;
  oi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ ce(), o = {
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
  return Qt.default = o, Qt;
}
var en = {}, ii;
function Dc() {
  if (ii) return en;
  ii = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
  return en.default = n, en;
}
var tn = {}, si;
function Lc() {
  if (si) return tn;
  si = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ de(), o = {
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
          i.block$data(C, () => b(h, C)), i.ok(C);
        } else
          s.if((0, e.checkMissingProp)(i, a, h)), (0, e.reportMissingProp)(i, h), s.else();
      }
      function u() {
        s.forOf("prop", c, (h) => {
          i.setParams({ missingProperty: h }), s.if((0, e.noPropertyInData)(s, d, h, _.ownProperties), () => i.error());
        });
      }
      function b(h, C) {
        i.setParams({ missingProperty: h }), s.forOf(h, c, () => {
          s.assign(C, (0, e.propertyInData)(s, d, h, _.ownProperties)), s.if((0, t.not)(C), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return tn.default = o, tn;
}
var nn = {}, ai;
function qc() {
  if (ai) return nn;
  ai = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
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
  return nn.default = n, nn;
}
var rn = {}, on = {}, ci;
function no() {
  if (ci) return on;
  ci = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = Ks();
  return e.code = 'require("ajv/dist/runtime/equal").default', on.default = e, on;
}
var li;
function Vc() {
  if (li) return rn;
  li = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ no(), i = {
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
        s.setParams({ i: S, j: l }), a.assign(y, !0), a.if((0, t._)`${S} > 1`, () => (b() ? h : C)(S, l));
      }
      function b() {
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
  return rn.default = i, rn;
}
var sn = {}, di;
function Bc() {
  if (di) return sn;
  di = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ no(), o = {
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
  return sn.default = o, sn;
}
var an = {}, ui;
function Uc() {
  if (ui) return an;
  ui = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ no(), o = {
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
        w = (0, e.or)(...d.map((C, S) => b(h, S)));
      }
      i.pass(w);
      function u() {
        s.assign(w, !1), s.forOf("v", f, (h) => s.if((0, e._)`${y()}(${a}, ${h})`, () => s.assign(w, !0).break()));
      }
      function b(h, C) {
        const S = d[C];
        return typeof S == "object" && S !== null ? (0, e._)`${y()}(${a}, ${h}[${C}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return an.default = o, an;
}
var fi;
function Hc() {
  if (fi) return Wt;
  fi = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oc(), t = /* @__PURE__ */ Fc(), n = /* @__PURE__ */ Ic(), r = /* @__PURE__ */ jc(), o = /* @__PURE__ */ Dc(), i = /* @__PURE__ */ Lc(), s = /* @__PURE__ */ qc(), a = /* @__PURE__ */ Vc(), c = /* @__PURE__ */ Bc(), d = /* @__PURE__ */ Uc(), f = [
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
  return Wt.default = f, Wt;
}
var cn = {}, ft = {}, pi;
function Ws() {
  if (pi) return ft;
  pi = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = {
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
var ln = {}, pt = {}, hi;
function Js() {
  if (hi) return pt;
  hi = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateTuple = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ ze(), r = {
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
    a.forEach((u, b) => {
      (0, t.alwaysValidSchema)(_, u) || (c.if((0, e._)`${y} > ${b}`, () => i.subschema({
        keyword: $,
        schemaProp: b,
        dataProp: b
      }, m)), i.ok(m));
    });
    function w(u) {
      const { opts: b, errSchemaPath: h } = _, C = a.length, S = C === u.minItems && (C === u.maxItems || u[s] === !1);
      if (b.strictTuples && !S) {
        const l = `"${$}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(_, l, b.strictTuples);
      }
    }
  }
  return pt.validateTuple = o, pt.default = r, pt;
}
var mi;
function Kc() {
  if (mi) return ln;
  mi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Js(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return ln.default = t, ln;
}
var dn = {}, gi;
function Gc() {
  if (gi) return dn;
  gi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Ws(), i = {
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
  return dn.default = i, dn;
}
var un = {}, yi;
function Wc() {
  if (yi) return un;
  yi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = {
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
      $ === void 0 && f === 1 ? b(w, () => i.if(w, () => i.break())) : f === 0 ? (i.let(w, !0), $ !== void 0 && i.if((0, e._)`${c}.length > 0`, u)) : (i.let(w, !1), u()), o.result(w, () => o.reset());
      function u() {
        const C = i.name("_valid"), S = i.let("count", 0);
        b(C, () => i.if(C, () => h(S)));
      }
      function b(C, S) {
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
  return un.default = r, un;
}
var $r = {}, $i;
function ro() {
  return $i || ($i = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ ze();
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
          for (const b of w)
            (0, r.checkReportMissingProp)(c, b);
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
  })($r)), $r;
}
var fn = {}, vi;
function Jc() {
  if (vi) return fn;
  vi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = {
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
  return fn.default = r, fn;
}
var pn = {}, bi;
function Ys() {
  if (bi) return pn;
  bi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ de(), i = {
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
      b(), s.ok((0, t._)`${$} === ${n.default.errors}`);
      function b() {
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
        const A = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(A, g);
      }
    }
  };
  return pn.default = i, pn;
}
var hn = {}, wi;
function Yc() {
  if (wi) return hn;
  wi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ Ys(), o = {
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
  return hn.default = o, hn;
}
var mn = {}, _i;
function Xc() {
  if (_i) return mn;
  _i = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ de(), r = /* @__PURE__ */ de(), o = {
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
      b();
      function b() {
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
  return mn.default = o, mn;
}
var gn = {}, Si;
function Zc() {
  if (Si) return gn;
  Si = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
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
  return gn.default = t, gn;
}
var yn = {}, Ci;
function Qc() {
  if (Ci) return yn;
  Ci = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ ze()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return yn.default = t, yn;
}
var $n = {}, ki;
function el() {
  if (ki) return $n;
  ki = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = {
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
  return $n.default = r, $n;
}
var vn = {}, xi;
function tl() {
  if (xi) return vn;
  xi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
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
  return vn.default = t, vn;
}
var bn = {}, Ei;
function nl() {
  if (Ei) return bn;
  Ei = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = {
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
          const b = i.subschema({ keyword: w }, _);
          s.assign($, _), i.mergeValidEvaluated(b, $), u ? s.assign(u, (0, e._)`${w}`) : i.setParams({ ifClause: w });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return bn.default = r, bn;
}
var wn = {}, Pi;
function rl() {
  if (Pi) return wn;
  Pi = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var Ai;
function ol() {
  if (Ai) return cn;
  Ai = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ws(), t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ Js(), r = /* @__PURE__ */ Gc(), o = /* @__PURE__ */ Wc(), i = /* @__PURE__ */ ro(), s = /* @__PURE__ */ Jc(), a = /* @__PURE__ */ Ys(), c = /* @__PURE__ */ Yc(), d = /* @__PURE__ */ Xc(), f = /* @__PURE__ */ Zc(), $ = /* @__PURE__ */ Qc(), _ = /* @__PURE__ */ el(), m = /* @__PURE__ */ tl(), y = /* @__PURE__ */ nl(), w = /* @__PURE__ */ rl();
  function u(b = !1) {
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
    return b ? h.push(t.default, r.default) : h.push(e.default, n.default), h.push(o.default), h;
  }
  return cn.default = u, cn;
}
var _n = {}, ht = {}, Ri;
function Xs() {
  if (Ri) return ht;
  Ri = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ rr(), r = /* @__PURE__ */ to(), o = {
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
var mt = {}, Ni;
function Zs() {
  if (Ni) return mt;
  Ni = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ to(), r = {
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
var Sn = {}, Mi;
function il() {
  if (Mi) return Sn;
  Mi = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xs(), t = /* @__PURE__ */ de(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Sn.default = n, Sn;
}
var Cn = {}, Ti;
function sl() {
  if (Ti) return Cn;
  Ti = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zs(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Cn.default = t, Cn;
}
var Oi;
function al() {
  if (Oi) return _n;
  Oi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xs(), t = /* @__PURE__ */ Zs(), n = /* @__PURE__ */ il(), r = /* @__PURE__ */ sl(), o = [e.default, t.default, n.default, r.default];
  return _n.default = o, _n;
}
var kn = {}, xn = {}, Fi;
function cl() {
  if (Fi) return xn;
  Fi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ro(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return xn.default = t, xn;
}
var En = {}, zi;
function ll() {
  if (zi) return En;
  zi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ro(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return En.default = t, En;
}
var Pn = {}, Ii;
function dl() {
  if (Ii) return Pn;
  Ii = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Pn.default = t, Pn;
}
var ji;
function ul() {
  if (ji) return kn;
  ji = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ cl(), t = /* @__PURE__ */ ll(), n = /* @__PURE__ */ dl(), r = [e.default, t.default, n.default];
  return kn.default = r, kn;
}
var An = {}, Rn = {}, Di;
function fl() {
  if (Di) return Rn;
  Di = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = /* @__PURE__ */ Fe(), o = {
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
          const b = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, b), $ || s.if((0, e.not)(b), () => s.break());
        }
      }
      function y(u, b) {
        return (0, e._)`!${u} || !${u}[${b}]`;
      }
      function w(u, b) {
        const h = [];
        for (const C in u)
          u[C] === !0 && h.push((0, e._)`${b} !== ${C}`);
        return (0, e.and)(...h);
      }
    }
  };
  return Rn.default = o, Rn;
}
var Nn = {}, Li;
function pl() {
  if (Li) return Nn;
  Li = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = {
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
  return Nn.default = r, Nn;
}
var qi;
function hl() {
  if (qi) return An;
  qi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fl(), t = /* @__PURE__ */ pl(), n = [e.default, t.default];
  return An.default = n, An;
}
var Mn = {}, Tn = {}, Vi;
function ml() {
  if (Vi) return Tn;
  Vi = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: c, schemaCode: d, it: f } = r, { opts: $, errSchemaPath: _, schemaEnv: m, self: y } = f;
      if (!$.validateFormats)
        return;
      a ? w() : u();
      function w() {
        const b = i.scopeValue("formats", {
          ref: y.formats,
          code: $.code.formats
        }), h = i.const("fDef", (0, e._)`${b}[${d}]`), C = i.let("fType"), S = i.let("format");
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
        const b = y.formats[c];
        if (!b) {
          l();
          return;
        }
        if (b === !0)
          return;
        const [h, C, S] = p(b);
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
          const A = x instanceof RegExp ? (0, e.regexpCode)(x) : $.code.formats ? (0, e._)`${$.code.formats}${(0, e.getProperty)(c)}` : void 0, M = i.scopeValue("formats", { key: c, ref: x, code: A });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${M}.validate`] : ["string", x, M];
        }
        function g() {
          if (typeof b == "object" && !(b instanceof RegExp) && b.async) {
            if (!m.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return Tn.default = n, Tn;
}
var Bi;
function gl() {
  if (Bi) return Mn;
  Bi = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ ml()).default];
  return Mn.default = t, Mn;
}
var st = {}, Ui;
function yl() {
  return Ui || (Ui = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.contentVocabulary = st.metadataVocabulary = void 0, st.metadataVocabulary = [
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
var Hi;
function $l() {
  if (Hi) return Ht;
  Hi = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tc(), t = /* @__PURE__ */ Hc(), n = /* @__PURE__ */ ol(), r = /* @__PURE__ */ al(), o = /* @__PURE__ */ ul(), i = /* @__PURE__ */ hl(), s = /* @__PURE__ */ gl(), a = /* @__PURE__ */ yl(), c = [
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
  return Ht.default = c, Ht;
}
var On = {}, Rt = {}, Ki;
function vl() {
  if (Ki) return Rt;
  Ki = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Rt.DiscrError = e = {})), Rt;
}
var Gi;
function bl() {
  if (Gi) return On;
  Gi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ vl(), n = /* @__PURE__ */ rr(), r = /* @__PURE__ */ nr(), o = /* @__PURE__ */ de(), s = {
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
      c.if((0, e._)`typeof ${u} == "string"`, () => b(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: y })), a.ok(w);
      function b() {
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
          let O = m[I];
          if (O?.$ref && !(0, o.schemaHasRulesButRef)(O, _.self.RULES)) {
            const j = O.$ref;
            if (O = n.resolveRef.call(_.self, _.schemaEnv.root, _.baseId, j), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new r.default(_.opts.uriResolver, _.baseId, j);
          }
          const q = (S = O?.properties) === null || S === void 0 ? void 0 : S[y];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
          g = g && (p || x(O)), A(q, I);
        }
        if (!g)
          throw new Error(`discriminator: "${y}" must be required`);
        return l;
        function x({ required: I }) {
          return Array.isArray(I) && I.includes(y);
        }
        function A(I, O) {
          if (I.const)
            M(I.const, O);
          else if (I.enum)
            for (const q of I.enum)
              M(q, O);
          else
            throw new Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
        }
        function M(I, O) {
          if (typeof I != "string" || I in l)
            throw new Error(`discriminator: "${y}" values must be unique strings`);
          l[I] = O;
        }
      }
    }
  };
  return On.default = s, On;
}
var Fn = {};
const wl = "https://json-schema.org/draft/2020-12/schema", _l = "https://json-schema.org/draft/2020-12/schema", Sl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Cl = "meta", kl = "Core and Validation specifications meta-schema", xl = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], El = ["object", "boolean"], Pl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Al = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Rl = {
  $schema: wl,
  $id: _l,
  $vocabulary: Sl,
  $dynamicAnchor: Cl,
  title: kl,
  allOf: xl,
  type: El,
  $comment: Pl,
  properties: Al
}, Nl = "https://json-schema.org/draft/2020-12/schema", Ml = "https://json-schema.org/draft/2020-12/meta/applicator", Tl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ol = "meta", Fl = "Applicator vocabulary meta-schema", zl = ["object", "boolean"], Il = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, jl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Dl = {
  $schema: Nl,
  $id: Ml,
  $vocabulary: Tl,
  $dynamicAnchor: Ol,
  title: Fl,
  type: zl,
  properties: Il,
  $defs: jl
}, Ll = "https://json-schema.org/draft/2020-12/schema", ql = "https://json-schema.org/draft/2020-12/meta/unevaluated", Vl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Bl = "meta", Ul = "Unevaluated applicator vocabulary meta-schema", Hl = ["object", "boolean"], Kl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Gl = {
  $schema: Ll,
  $id: ql,
  $vocabulary: Vl,
  $dynamicAnchor: Bl,
  title: Ul,
  type: Hl,
  properties: Kl
}, Wl = "https://json-schema.org/draft/2020-12/schema", Jl = "https://json-schema.org/draft/2020-12/meta/content", Yl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Xl = "meta", Zl = "Content vocabulary meta-schema", Ql = ["object", "boolean"], ed = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, td = {
  $schema: Wl,
  $id: Jl,
  $vocabulary: Yl,
  $dynamicAnchor: Xl,
  title: Zl,
  type: Ql,
  properties: ed
}, nd = "https://json-schema.org/draft/2020-12/schema", rd = "https://json-schema.org/draft/2020-12/meta/core", od = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, id = "meta", sd = "Core vocabulary meta-schema", ad = ["object", "boolean"], cd = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, ld = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, dd = {
  $schema: nd,
  $id: rd,
  $vocabulary: od,
  $dynamicAnchor: id,
  title: sd,
  type: ad,
  properties: cd,
  $defs: ld
}, ud = "https://json-schema.org/draft/2020-12/schema", fd = "https://json-schema.org/draft/2020-12/meta/format-annotation", pd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, hd = "meta", md = "Format vocabulary meta-schema for annotation results", gd = ["object", "boolean"], yd = { format: { type: "string" } }, $d = {
  $schema: ud,
  $id: fd,
  $vocabulary: pd,
  $dynamicAnchor: hd,
  title: md,
  type: gd,
  properties: yd
}, vd = "https://json-schema.org/draft/2020-12/schema", bd = "https://json-schema.org/draft/2020-12/meta/meta-data", wd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, _d = "meta", Sd = "Meta-data vocabulary meta-schema", Cd = ["object", "boolean"], kd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, xd = {
  $schema: vd,
  $id: bd,
  $vocabulary: wd,
  $dynamicAnchor: _d,
  title: Sd,
  type: Cd,
  properties: kd
}, Ed = "https://json-schema.org/draft/2020-12/schema", Pd = "https://json-schema.org/draft/2020-12/meta/validation", Ad = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Rd = "meta", Nd = "Validation vocabulary meta-schema", Md = ["object", "boolean"], Td = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Od = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Fd = {
  $schema: Ed,
  $id: Pd,
  $vocabulary: Ad,
  $dynamicAnchor: Rd,
  title: Nd,
  type: Md,
  properties: Td,
  $defs: Od
};
var Wi;
function zd() {
  if (Wi) return Fn;
  Wi = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = Rl, t = Dl, n = Gl, r = td, o = dd, i = $d, s = xd, a = Fd, c = ["/properties"];
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
  return Fn.default = d, Fn;
}
var Ji;
function Id() {
  return Ji || (Ji = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Nc(), r = /* @__PURE__ */ $l(), o = /* @__PURE__ */ bl(), i = /* @__PURE__ */ zd(), s = "https://json-schema.org/draft/2020-12/schema";
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
    var c = /* @__PURE__ */ tr();
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
    var f = /* @__PURE__ */ eo();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var $ = /* @__PURE__ */ nr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  })(Lt, Lt.exports)), Lt.exports;
}
var jd = /* @__PURE__ */ Id();
const Dd = /* @__PURE__ */ mc(jd), Ld = "https://json-schema.org/draft/2020-12/schema", qd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Vd = "gufe-viz payload", Bd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ud = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Hd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), oo = {
  $schema: Ld,
  $id: qd,
  title: Vd,
  description: Bd,
  oneOf: Ud,
  $defs: Hd
}, lh = [
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
], io = oo.$id, so = new Dd({ allErrors: !0, strict: !1 });
so.addSchema(oo, io);
const Yi = so.getSchema(io), Qs = Object.entries(oo.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), dh = Qs, ao = /* @__PURE__ */ new Map();
for (const e of Qs) {
  const t = so.getSchema(`${io}#/$defs/${e}`);
  t && ao.set(e, t);
}
const jr = { valid: !0, issues: [] };
function Dr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Kd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? ao.get(t) : void 0;
  return n ? n(e) ? jr : { valid: !1, issues: Dr(n.errors) } : Yi(e) ? jr : { valid: !1, issues: Dr(Yi.errors) };
}
function uh(e, t) {
  const n = ao.get(e);
  return n ? n(t) ? jr : { valid: !1, issues: Dr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Gd(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const co = {
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
function ea(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!co[t]) return Wd(t);
  const { valid: n, issues: r } = Kd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Gd(r)
  };
}
function Wd(e) {
  const t = Object.keys(co).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function fh(e) {
  return ea(e)?.message ?? null;
}
class Jd extends Ee {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ba("payload", n, this);
    const r = ea(n);
    if (r)
      return t.appendChild(Yd(r, n)), {};
    const o = n.type, i = co[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Yd(e, t) {
  const n = F(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(he(e.message));
  const r = (i, s) => F(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};` : `background:${T.panelBg};color:${T.textMuted2};border:1px solid ${T.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = Xd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function Xd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${We(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${We(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Pe("gufe-view", Jd);
const vr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, lo = {
  threeDmol: `https://unpkg.com/3dmol@${vr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${vr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${vr.d3}/+esm`
};
function uo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ta(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let et = null, gt = null;
function or() {
  if (gt) return gt;
  const e = uo("threeDmol");
  return e ? (gt = e.then((t) => et = t || window.$3Dmol), gt) : (gt = (async () => {
    if (window.$3Dmol) return et = window.$3Dmol;
    if (await ta(lo.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return et = window.$3Dmol;
  })(), gt);
}
let yt = null;
function ir() {
  if (yt) return yt;
  const e = uo("rdkit");
  return e ? (yt = e.then((t) => window.RDKit = t), yt) : (yt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ta(lo.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), yt);
}
let br = null;
function na() {
  if (!br) {
    const e = lo.d3;
    br = uo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return br;
}
function ra(e, t) {
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
    t.hint && !r && (r = !0, eu(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function Zd(e) {
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
const Qd = 1600;
function eu(e, t) {
  const n = F(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Qd);
}
const tu = { min: 0.25, max: 12 }, nu = 150;
function Xi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? nu) - t;
}
function ru(e, t = tu) {
  const n = Xi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = Xi(e);
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
const ou = 2e-3;
function oa(e) {
  return Math.exp(-e.deltaY * ou);
}
function sr(e, t, n = {}) {
  const r = ru(t, n.bounds), o = ra(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(oa(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function fo(e, t = "Reset view") {
  const n = F("button", kt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let _t = null;
function iu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function ia(e, t) {
  if (!e) return;
  const n = iu(e);
  if (!n) return;
  const r = t?.level();
  _t = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : _t?.zoom ?? 1
  };
}
function sa(e, t) {
  if (!_t || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ..._t.rotation]), t && Math.abs(_t.zoom - 1) > 1e-9 && t.zoomBy(_t.zoom), e.render(), !0);
}
const wr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, su = [
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
], ph = "hsv", B = [0, 0, 0], au = {
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
}, cu = "rdkit", lu = !0, du = !0, uu = !0, fu = !0, pu = "rdkit", hu = "filled", mu = 0.42, gu = 1.5, yu = !0, $u = "show", vu = "mono", bu = 0.51, wu = 0.74, _u = 1.6, Su = 1.7, Cu = 5, ku = 0.3, xu = "#d62828", Eu = "#d62828", Pu = "#015ab5", Au = !1, Ru = "", Nu = "#7c3aed", Mu = {
  layout: cu,
  alignPair: lu,
  atomNumbers: du,
  createdDestroyed: uu,
  modified: fu,
  style: pu,
  circles: hu,
  circleRadius: mu,
  circleStroke: gu,
  boundary: yu,
  hydrogens: $u,
  elementColors: vu,
  numScale: bu,
  labelScale: wu,
  bondWidth: _u,
  markWidth: Su,
  haloWidth: Cu,
  haloOpacity: ku,
  destroyedColor: xu,
  createdColor: Eu,
  modifiedColor: Pu,
  stereo: Au,
  customSpec: Ru,
  customColor: Nu
}, Tu = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: wr.uniqueAtom,
  createdColor: wr.uniqueAtom,
  modifiedColor: wr.elementChange,
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
}, Ou = ["rdkit", "coordgen", "conformer"], Fu = ["rdkit", "recolor", "halo"], zu = ["outline", "filled", "off"], Iu = ["show", "dim", "hide"], ju = ["cpk", "mono"], Du = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Lu = /^#[0-9a-fA-F]{6}$/;
function Nt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Xe(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Du[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const $t = (e, t) => typeof e == "boolean" ? e : t, zn = (e, t) => typeof e == "string" && Lu.test(e) ? e : t;
function qu(e) {
  const t = e && typeof e == "object" ? e : {}, n = Tu;
  return {
    version: 1,
    layout: Nt(t.layout, Ou, n.layout),
    alignPair: $t(t.alignPair, n.alignPair),
    style: Nt(t.style, Fu, n.style),
    createdDestroyed: $t(t.createdDestroyed, n.createdDestroyed),
    modified: $t(t.modified, n.modified),
    destroyedColor: zn(t.destroyedColor, n.destroyedColor),
    createdColor: zn(t.createdColor, n.createdColor),
    modifiedColor: zn(t.modifiedColor, n.modifiedColor),
    boundary: $t(t.boundary, n.boundary),
    circles: Nt(t.circles, zu, n.circles),
    circleRadius: Xe(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Xe(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Nt(t.hydrogens, Iu, n.hydrogens),
    elementColors: Nt(t.elementColors, ju, n.elementColors),
    atomNumbers: $t(t.atomNumbers, n.atomNumbers),
    stereo: $t(t.stereo, n.stereo),
    numScale: Xe(t.numScale, "numScale", n.numScale),
    labelScale: Xe(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Xe(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Xe(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Xe(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Xe(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: zn(t.customColor, n.customColor)
  };
}
const Me = qu(Mu);
function Zi(e) {
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
function _r(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function Qi(e) {
  return `0x${e.replace("#", "")}`;
}
function Lr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Vu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Bu(e, t, n) {
  const r = new Set(t.atoms), o = new Set(_r(e, r, !0));
  return {
    deletions: _r(e, r, n),
    changes: _r(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function es(e, t, n, r) {
  const o = Bu(t, n, e.boundary), i = [];
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
function Uu(e) {
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
function Hu(e, t) {
  return e.style === "rdkit" ? "rdkit" : Uu(t) ? e.style : "rdkit";
}
function Ku(e, t, n, r, o, i) {
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
  e.elementColors === "mono" && (s.atomColourPalette = au), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const m of n) {
    const y = Lr(m.color);
    if (o === "rdkit") for (const u of m.bonds) d[u] = y;
    if (o === "recolor" && e.circles === "off") continue;
    const w = o === "recolor" && e.circles === "filled" ? Vu(y, 0.7) : y;
    for (const u of m.atoms)
      a[u] = w, c[u] = e.circleRadius;
  }
  const f = Lr(e.customColor);
  for (const m of r)
    m < i && (a[m] = f, c[m] = e.circleRadius);
  const $ = Object.keys(a).map(Number);
  $.length && (s.atoms = $, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const _ = Object.keys(d).map(Number);
  return _.length && (s.bonds = _, s.highlightBondColors = d), s;
}
function Gu(e, t, n, r) {
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
const Wu = "http://www.w3.org/2000/svg";
function aa(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function po(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function ca(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function ts(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of aa(e, s)) {
      const c = a.style;
      ca(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of po(e, s, !1)) a.style.fill = i;
}
function Ju(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(Wu, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of aa(e, a)) {
      if (ca(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", i.appendChild(d);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function Yu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of po(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Xu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of po(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Zu(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function Qu(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        ts(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Yu(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && Xu(e, n, s.atoms, o, s.color);
      } else
        Ju(e, n, s.bonds, s.color), ts(e, n, s.atoms, s.bonds, s.color, null);
  Zu(e, t, n);
}
const ar = `
`, qr = "$$$$";
function Vr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(ar);
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
function ef(e) {
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
const tf = (e) => `${ef(e)}${ar}${qr}`, la = (e) => e.indexOf(qr) >= 0 ? e : `${e}${ar}${qr}`;
function ho(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function mo(e, t, n, r, o) {
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
function da(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ns = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Br = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, bt = (e) => e in Br, rs = 400, Sr = "position:absolute;inset:0;min-width:0;min-height:0;";
class nf extends Ee {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = F("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = F(
      "div",
      `${Sr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${lt.canvas2D};`
    );
    a.appendChild(c);
    const d = Vs();
    d.wrap.style.cssText = Sr, a.appendChild(d.wrap);
    const f = F(
      "div",
      `${Sr}overflow:auto;padding:16px 20px;background:${T.panelBg};color:${T.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(f);
    const $ = r ? ho(r) : null, _ = [
      ["Name", o || at, !1],
      ["SMILES", i || at, !0],
      ["Charge", s == null ? at : String(s), !1],
      ["Atoms", $ ? String($.atoms) : at, !1],
      ["Bonds", $ ? String($.bonds) : at, !1]
    ], m = F("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${te.xl} 20px;align-items:baseline;`);
    f.appendChild(m);
    for (const [O, q, j] of _) {
      m.appendChild(
        F(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${T.textMuted2};`,
          O
        )
      );
      const H = F(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${T.textPrimary}` + (j ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        q
      );
      H.title = q, m.appendChild(H);
    }
    const y = Yr(t), w = F("div", Or, o || "Unnamed molecule");
    y && a.appendChild(w);
    const u = ut(
      "small-molecule.mode",
      "2d",
      ns.map((O) => O.id)
    ), b = ct("small-molecule.spin", !1);
    let h = u.get(), C = b.get(), S = null, l = null;
    const p = () => {
      try {
        S?.spin(C && bt(h) ? "y" : !1);
      } catch {
      }
    }, g = (O) => {
      h = O, c.style.visibility = h === "2d" ? "visible" : "hidden", d.wrap.style.visibility = bt(h) ? "visible" : "hidden", f.style.visibility = h === "info" ? "visible" : "hidden", w.style.display = h === "info" || !y ? "none" : "block", A.disabled = !bt(h), A.style.opacity = bt(h) ? "1" : "0.5", bt(h) && S && (S.setStyle({}, Br[h]), S.resize(), S.render()), p();
    }, x = F("div", Os), A = qs(
      "Spin",
      C,
      (O) => {
        C = O, p();
      },
      { title: "Toggle continuous rotation", remember: b }
    ), M = (O) => {
      O ? x.insertBefore(A, x.firstChild) : I.buttons.insertBefore(A, I.buttons.lastElementChild);
    }, I = Ls(ns, h, (O) => g(O), {
      remember: u,
      onLayout: M,
      fit: { pane: a, bar: x }
    });
    return x.appendChild(I), M(!1), a.appendChild(x), g(h), !r || !r.trim() ? (c.appendChild(he("No molecule provided")), d.container.appendChild(he("No molecule provided")), { cleanup: () => I.cleanup() }) : (c.appendChild(he("Loading 2D depiction...")), ir().then((O) => {
      const q = mo(O, r, rs, Me.layout);
      q ? da(c, q, rs) : c.replaceChildren(he("Failed to parse molecule", !0));
    }).catch((O) => {
      c.replaceChildren(he(`RDKit failed to load: ${ge(O)}`, !0));
    }), d.container.appendChild(he("Loading 3D viewer...")), or().then(() => {
      d.container.replaceChildren(), S = et.createViewer(d.container, { backgroundColor: lt.viewer }), S.addModel(la(r), "sdf"), S.setStyle({}, Br[bt(h) ? h : "stick"]), S.zoomTo(), S.render(), l = sr(d.container, S), sa(S, l), p();
    }).catch((O) => {
      d.container.replaceChildren(he(`3D render failed: ${ge(O)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        if (I.cleanup(), ia(S, l), l?.cleanup(), l = null, !!S) {
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
Pe("gufe-small-molecule", nf);
const ua = ["HOH", "WAT", "SOL", "TIP3"], os = { hetflag: !1 }, rf = { hetflag: !0 }, of = { resn: ua }, je = {
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
function fa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const f = c.slice(17, 20).trim(), $ = c.slice(21, 22).trim() || "_", _ = c.slice(22, 26).trim(), m = c.slice(26, 27).trim();
    ua.indexOf(f) !== -1 && i++, t.add($), n.add(`${$}|${_}${m}|${f}`);
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
function pa(e) {
  return [
    `${Et(e.chains)} chains`,
    `${Et(e.residues)} residues`,
    `${Et(e.atoms)} atoms`,
    `${Et(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Et(e.waters)} water)` : "")
  ];
}
function sf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Ur(e, t, n, r, o) {
  const i = r || (() => {
  }), s = sf(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(os),
    t.rep === "stick" ? { stick: { radius: je.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: je.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(rf),
    t.hetero ? {
      stick: { radius: je.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: je.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(of),
    t.waters ? {
      stick: { radius: je.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: je.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > je.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(
          et.SurfaceType.VDW,
          { opacity: je.surfaceOpacity, ...s },
          a(os)
        )
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${ge(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${ge(c)}`, "error");
    }
  }, 30);
}
function af(e, t) {
  e.setStyle(t, {
    stick: { radius: je.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: je.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const is = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ss = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], cf = 460, as = /* @__PURE__ */ new Map();
function ha(e) {
  const t = ut(
    "protein.representation",
    "cartoon",
    is.map((g) => g.id)
  ), n = ut(
    "protein.color",
    "chain",
    ss.map((g) => g.id)
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
  const f = F("div", Ta);
  d.appendChild(f);
  const $ = ({ label: g, controls: x }) => {
    const A = F("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    A.appendChild(
      F(
        "span",
        `font-size:${Q.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted};`,
        g
      )
    );
    for (const M of x) A.appendChild(M);
    return A;
  }, _ = F("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${T.textMuted};`), m = $({ label: "Contents", controls: [_] });
  m.style.display = "none";
  const w = Qr(f, () => {
    const g = F("div", `${Gr}padding-top:${Oa};`), x = Jn(
      is,
      s.rep,
      (q) => {
        s.rep = q, e.restyle();
      },
      t
    );
    g.appendChild($({ label: "Style", controls: [x] }));
    const A = jt(
      ss,
      s.color,
      (q) => {
        s.color = q, e.restyle();
      },
      n
    );
    A.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild($({ label: "Color", controls: [A] }));
    const M = F("div", "display:flex;flex-wrap:wrap;gap:4px;"), I = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [q, j, H, X, ne] of I)
      M.appendChild(
        qs(
          j,
          s[q],
          (Z) => {
            s[q] = Z, ne();
          },
          { title: H, remember: X }
        )
      );
    g.appendChild($({ label: "Show", controls: [M] }));
    const O = fo(() => e.reset ? e.reset() : c?.reset());
    return O.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild($({ label: "Camera", controls: [...e.camera?.() ?? [], O] })), g.appendChild(m), g;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: ct(`protein${Zr}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    }
  }), u = Yr(e.element) ? e.title || e.fallbackTitle : "";
  u && f.appendChild(
    F("div", `${Ma}pointer-events:none;font-size:${Q.heading};font-weight:${me.bold};`, u)
  ), d.appendChild(w.panel);
  const b = Vs();
  d.appendChild(b.wrap);
  let h = null;
  const C = Zn(d, (g) => {
    const x = g > 0 && g < cf;
    x !== h && (h = x, d.style.flexDirection = x ? "column" : "row", Xr(w.panel, x), a?.resize(), a?.render());
  }), S = F(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  b.wrap.appendChild(S);
  const l = (g, x) => {
    if (g == null) {
      S.style.display = "none";
      return;
    }
    S.textContent = g, S.style.display = "block";
    const A = x === "error";
    S.style.background = A ? T.warnBg : T.toolbarBg, S.style.color = A ? T.warnFg : T.textMuted, S.style.border = `1px solid ${A ? T.warnBorder : T.toolbarBorder}`;
  }, p = () => {
    if (!e.cameraKey || !a) return;
    const g = a.getView?.();
    Array.isArray(g) && g.length >= 4 && g.every((x) => Number.isFinite(x)) && as.set(e.cameraKey, g.slice());
  };
  return {
    opts: s,
    pane: b,
    menu: w,
    showStatus: l,
    setStats: (g) => {
      _.replaceChildren(...g.map((x) => F("div", "overflow-wrap:anywhere;", x))), m.style.display = g.length ? "" : "none";
    },
    restoreCamera: () => {
      const g = e.cameraKey ? as.get(e.cameraKey) : void 0;
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
class lf extends Ee {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Ur(a, s.opts, o, s.showStatus);
    }
    const s = ha({
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
      o = fa(r), s.setStats(pa(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${ge(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), or().then(() => {
      const a = et.createViewer(s.pane.container, { backgroundColor: lt.viewer });
      s.setViewer(a), a.addModel(r, "pdb"), Ur(a, s.opts, o, s.showStatus), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(sr(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${ge(a)}`, "error");
    }), s.handle;
  }
}
Pe("gufe-protein", lf);
function xt(e) {
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
function Je(e, t) {
  return t ? e.get(t) : void 0;
}
function Ce(e, t, n) {
  const r = Je(e, t);
  return r?.type === n ? r : void 0;
}
function go(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const i = e.get(o);
    i && (r.add(o), n.push(i));
  }
  return n;
}
function nt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const yo = "Cmd/Ctrl-click to select several.";
function df(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : nt(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function uf(e, t) {
  navigator.clipboard?.writeText(e).catch(() => cs(e, t)), navigator.clipboard || cs(e, t);
}
function cs(e, t) {
  const n = F("textarea", `width:100%;height:80px;font-size:${Q.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function ff(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = F("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ma(e) {
  const { words: t } = e, n = ut(e.setting, "names", ["names", "keys"]), r = F("div", "display:flex;flex-direction:column;gap:6px;"), o = F("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${T.textMuted};`);
  o.appendChild(F("span", "", "copy as"));
  const i = jt(
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
  const s = F("div", `font-size:${Q.tiny};line-height:1.5;color:${T.textMuted2};`), a = (f) => {
    s.textContent = f;
  }, c = F("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [f, $, _] of d) {
    const m = F("button", `${kt}flex:1;`, $.button);
    m.title = _, m.onclick = (y) => {
      const w = i.value, u = df(e.nodes, e.edges, e.selected, f, w);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : f === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${yo}` : "Nothing to copy."
        );
        return;
      }
      const b = u.split(`
`).length;
      y.shiftKey ? (ff(u, `selected-${$.plural}.txt`), a(`Saved ${b} ${$.plural} to a file.`)) : (uf(u, r), a(
        f === "edges" ? `Copied ${b} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(m);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(F("div", `font-size:${Q.tiny};color:${T.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const ga = "http://www.w3.org/2000/svg";
function ue(e, t = {}) {
  const n = document.createElementNS(ga, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function ls(e, t) {
  const n = document.createElementNS(ga, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const pf = 3;
function ya(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const hf = { min: 0.15, max: 5 }, mf = 1e-9;
function $a(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? hf;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, d = () => {
    const j = e.getBoundingClientRect();
    return {
      width: j.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: j.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, f = (j, H, X) => Math.min(1, H / (j.maxX - j.minX + r * 2), X / (j.maxY - j.minY + r * 2)), $ = () => {
    const j = n.bounds();
    if (!j) return o.min;
    const { width: H, height: X } = d();
    return Math.min(o.min, f(j, H, X));
  }, _ = (j) => Math.min(o.max, Math.max($(), i * j)), m = () => {
    i = 1, s = 0, a = 0;
    const j = n.bounds();
    if (!j) {
      c();
      return;
    }
    const { width: H, height: X } = d();
    i = f(j, H, X), s = H / 2 - (j.minX + j.maxX) / 2 * i, a = X / 2 - (j.minY + j.maxY) / 2 * i, c();
  }, w = ra(e, {
    onZoom: (j) => {
      const H = e.getBoundingClientRect(), X = j.clientX - H.left, ne = j.clientY - H.top, Z = _(oa(j)), K = Z / i;
      return s = X - (X - s) * K, a = ne - (ne - a) * K, i = Z, c(), Math.abs(K - 1) > mf;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let b = null, h = null, C = !1, S = null;
  const l = (j) => ({
    x: j.clientX - s,
    y: j.clientY - a,
    from: { x: j.clientX, y: j.clientY }
  }), p = (j) => {
    j.pointerType === "touch" && u.size > 1 || (h = l(j), C = !1);
  }, g = (j) => {
    b || (S && j.pointerType === "touch" && (h = { x: S.x - s, y: S.y - a, from: S }, S = null), h && (Math.hypot(j.clientX - h.from.x, j.clientY - h.from.y) > pf && (C = !0), s = j.clientX - h.x, a = j.clientY - h.y, c()));
  }, x = () => {
    h = null;
  };
  e.addEventListener("pointerdown", p), e.addEventListener("pointermove", g), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("pointerleave", x);
  const A = () => {
    const [j, H] = [...u.values()];
    return { cx: (j.x + H.x) / 2, cy: (j.y + H.y) / 2, span: Math.max(1, Math.hypot(j.x - H.x, j.y - H.y)) };
  }, M = (j) => {
    if (j.pointerType === "touch") {
      if (u.set(j.pointerId, { x: j.clientX, y: j.clientY }), u.size !== 2) {
        b = null;
        return;
      }
      b = A(), h = null, C = !0;
    }
  }, I = (j) => {
    if (j.pointerType !== "touch" || !u.has(j.pointerId) || (u.set(j.pointerId, { x: j.clientX, y: j.clientY }), !b || u.size !== 2)) return;
    j.preventDefault(), j.stopPropagation();
    const H = A(), X = e.getBoundingClientRect(), ne = _(H.span / b.span), Z = ne / i;
    s = H.cx - X.left - (b.cx - X.left - s) * Z, a = H.cy - X.top - (b.cy - X.top - a) * Z, i = ne, b = H, c();
  }, O = (j) => {
    if (j.pointerType !== "touch") return;
    if (u.delete(j.pointerId), u.size === 2) {
      b = A();
      return;
    }
    b = null;
    const [H] = [...u.values()];
    S = u.size === 1 && H ? { ...H } : null;
  };
  e.addEventListener("pointerdown", M, !0), e.addEventListener("pointermove", I, { capture: !0, passive: !1 }), e.addEventListener("pointerup", O, !0), e.addEventListener("pointercancel", O, !0);
  const q = Zd(e);
  return {
    fit: m,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: m,
    centreOn(j, H, X = 1) {
      const { width: ne, height: Z } = d();
      i = Math.max(i, X), s = ne / 2 - j * i, a = Z / 2 - H * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(j, H, X) {
      i = j, s = H, a = X, c();
    },
    cleanup() {
      w.cleanup(), q.cleanup(), e.removeEventListener("pointerdown", p), e.removeEventListener("pointermove", g), e.removeEventListener("pointerup", x), e.removeEventListener("pointercancel", x), e.removeEventListener("pointerleave", x), e.removeEventListener("pointerdown", M, !0), e.removeEventListener("pointermove", I, { capture: !0 }), e.removeEventListener("pointerup", O, !0), e.removeEventListener("pointercancel", O, !0);
    }
  };
}
const gf = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function va(e) {
  const t = { ...e };
  for (const n of gf) delete t[n];
  return t;
}
const yf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), $f = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), vf = (e) => $f.has(yf(e));
function ba(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && vf(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const bf = 8, wf = 64, _f = () => new Promise((e) => setTimeout(e, 0));
function Kr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Sf(e, t, n, r) {
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
    Kr(o);
  }
}
function wa(e, t, n = !0) {
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
      return Kr($), { status: "unsupported" };
    const _ = /* @__PURE__ */ new Map();
    let m = 0;
    try {
      let y = performance.now(), w = 0;
      for (let u = 0; u < t.length; u++) {
        const b = t[u] ? Sf(f, $, t[u], n) : null;
        if (b ? b.length && _.set(u, b) : m++, !(++w < wf && performance.now() - y < bf)) {
          if (await _f(), c !== o) return { status: "superseded" };
          w = 0, y = performance.now();
        }
      }
    } finally {
      Kr($);
    }
    return r.set(a, _), { status: "ok", matched: _, unreadable: m };
  }, cancel: () => void ++o };
}
const Cf = 250;
function _a(e) {
  const t = F("div", "display:flex;flex-direction:column;gap:8px;"), n = F("input", `${Wn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = F("div", `font-size:${Q.tiny};line-height:1.5;min-height:1.5em;color:${T.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), Cf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const kf = 1e-6;
function In(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function ds(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function xf(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function us(e) {
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
          const b = t[u * 3 + a], h = t[u * 3 + c];
          t[u * 3 + a] = y * b - w * h, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = w * b + y * h, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const b = n[u * 3 + a], h = n[u * 3 + c];
        n[u * 3 + a] = y * b - w * h, n[u * 3 + c] = w * b + y * h;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Ef(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], o[0] += t[S][0], o[1] += t[S][1], o[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const l = e[S][0] - r[0], p = e[S][1] - r[1], g = e[S][2] - r[2], x = t[S][0] - o[0], A = t[S][1] - o[1], M = t[S][2] - o[2];
    i[0] += l * x, i[1] += l * A, i[2] += l * M, i[3] += p * x, i[4] += p * A, i[5] += p * M, i[6] += g * x, i[7] += g * A, i[8] += g * M;
  }
  const s = ds(i), a = In(s, i), c = In(i, s);
  let d = us(a), f = us(c);
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
    const l = _[S], p = _[3 + S], g = _[6 + S], x = i[0] * l + i[1] * p + i[2] * g, A = i[3] * l + i[4] * p + i[5] * g, M = i[6] * l + i[7] * p + i[8] * g, I = m[S], O = m[3 + S], q = m[6 + S];
    x * I + A * O + M * q < 0 && (m[S] = -I, m[3 + S] = -O, m[6 + S] = -q);
  }
  const y = ds(_);
  let w = In(m, y);
  xf(w) < 0 && (m[2] = -m[2], m[5] = -m[5], m[8] = -m[8], w = In(m, y));
  const u = w[0] * o[0] + w[1] * o[1] + w[2] * o[2], b = w[3] * o[0] + w[4] * o[1] + w[5] * o[2], h = w[6] * o[0] + w[7] * o[1] + w[8] * o[2], C = d.values[1] > kf * d.values[0];
  return { R: w, t: [r[0] - u, r[1] - b, r[2] - h], determined: C };
}
function Pf(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const fs = `
`, Cr = 4;
function ps(e, t, n) {
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
function Af(e, t, n) {
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
    const y = Math.atan2($, _), w = Math.cos(y), u = Math.sin(y), b = (f ? -1 : 1) * s[0];
    c = {
      cos: w,
      sin: u,
      mirror: f,
      tx: a[0] - (w * b - u * s[1]),
      ty: a[1] - (u * b + w * s[1])
    };
  }
  return c;
}
function Rf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Nf(e, t, n) {
  const r = ho(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(fs);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[Cr + i], a = t[i];
    if (s == null || !a) return e;
    o[Cr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Cr + r.atoms + a, d = o[c];
      if (d == null) break;
      const f = parseInt(d.substring(9, 12), 10);
      f !== 1 && f !== 6 || (o[c] = d.substring(0, 9) + String(f === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(fs);
}
function Mf(e, t, n) {
  try {
    const r = (s) => Vr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = Af(o, r(e), n);
    return i ? Nf(
      t,
      o.map((s) => Rf(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ge(r)), t;
  }
}
function Tf(e, t, n, r, o) {
  const i = ps(e, t, r), s = ps(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: Mf(i, s, o) };
}
const Of = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Ff = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function zf() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const kr = zf() ? Of : Ff, hs = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], xr = 420, If = {
  mapped: null,
  element: Me.modifiedColor,
  uniqueA: Me.destroyedColor,
  uniqueB: Me.createdColor
}, jf = 132, Ue = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Er = { gap: 2.5, minLiftFraction: 0.6 }, Df = 24, zt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function ms(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function Lf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function qf(e, t, n) {
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
function Sa(e, t) {
  const n = Ce(t, e.componentA, "SmallMoleculeComponentViz"), r = Ce(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: go(t, [e.componentA, e.componentB]) };
}
function Vf(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const i = Ef(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => Pf(s, i.R, i.t)) } : t;
}
function gs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Bf(e, t) {
  const n = gs(e), r = gs(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Er.gap, a = Er.minLiftFraction * i + Er.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function Uf(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > zt.minSpread ? r : zt.minSpread) * zt.spreadFactor;
}
function Hf(e, t) {
  const n = su, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const f = (_) => parseInt(_.slice(1 + d * 2, 3 + d * 2), 16), $ = Math.round(f(n[i]) + (f(n[s]) - f(n[i])) * a);
    c += $.toString(16).padStart(2, "0");
  }
  return c;
}
class Kf extends Ee {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = Ce(r, n.componentA, "SmallMoleculeComponentViz"), i = Ce(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !i)
      return t.appendChild(
        he("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = nt(o), a = nt(i), c = Lf(n);
    let d, f;
    try {
      d = Vr(o.sdf, s), f = Vr(i.sdf, a);
    } catch (P) {
      return t.appendChild(he(`Could not read a molecule: ${ge(P)}`, !0)), {};
    }
    f = Vf(d, f, c);
    const $ = /* @__PURE__ */ new Map();
    for (const [P, N] of c) $.set(N, P);
    const _ = ms(c, d.symbols, f.symbols), m = ms($, f.symbols, d.symbols), y = Yr(t), w = F("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(w);
    const u = F("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    w.appendChild(u);
    const b = ut("atom-mapping.mode", "plain", hs.map((P) => P.id));
    let h = b.get();
    const C = F("div", Os), S = Ls(
      hs,
      h,
      (P) => {
        h = P, R();
      },
      { remember: b, fit: { pane: w, bar: C } }
    );
    C.appendChild(S), w.appendChild(C);
    let l = [], p = 0, g = !0, x = !1;
    const A = () => {
      p && cancelAnimationFrame(p), p = 0, x && ia(l[0]?.viewer ?? null, l[0]?.interaction ?? null), x = !1;
      for (const P of l) {
        P.interaction?.cleanup();
        try {
          P.viewer?.clear();
        } catch {
        }
      }
      l = [], u.replaceChildren();
    }, M = (P) => {
      const N = F("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), v = F("div", "flex:1;position:relative;min-height:0;");
      v.dataset.gufeViewer = "", N.appendChild(v), y && N.appendChild(F("div", Or, P)), u.appendChild(N);
      const k = { container: v, viewer: null, interaction: null };
      return l.push(k), k;
    }, I = () => {
      if (l.length < 2) return;
      const P = l.map(() => "");
      let N = !1;
      const v = () => {
        if (g) {
          if (!N)
            for (let k = 0; k < l.length; k++) {
              const D = l[k].viewer;
              if (!D) continue;
              const U = JSON.stringify(D.getView());
              if (U !== P[k]) {
                N = !0;
                for (let W = 0; W < l.length; W++)
                  W !== k && l[W].viewer && (l[W].viewer.setView(D.getView()), l[W].viewer.render()), P[W] = U;
                N = !1;
                break;
              }
            }
          p = requestAnimationFrame(v);
        }
      };
      p = requestAnimationFrame(v);
    }, O = (P, N) => {
      const v = et.createViewer(P.container, { backgroundColor: lt.viewer });
      for (const { mol: k } of N) v.addModel(tf(k), "sdf");
      return P.viewer = v, v;
    }, q = (P) => {
      P.viewer && (P.interaction = sr(P.container, P.viewer));
    }, j = (P) => {
      sa(P.viewer, P.interaction), x = !0;
    }, H = () => {
      for (const P of [d, f]) {
        const N = M(P.name), v = O(N, [{ mol: P }]);
        v.setStyle(
          {},
          { stick: { radius: Ue.stick, colorscheme: "Jmol" }, sphere: { scale: Ue.sphere, colorscheme: "Jmol" } }
        ), v.zoomTo(), v.render(), q(N), j(N);
      }
      I();
    }, X = () => {
      const P = Me, N = Zi(P.customSpec), v = [
        { mol: d, uniques: _, side: "left", custom: N.left },
        { mol: f, uniques: m, side: "right", custom: N.right }
      ];
      for (const k of v) {
        const D = M(k.mol.name), U = O(D, [{ mol: k.mol }]);
        U.setStyle(
          {},
          { stick: { radius: Ue.stick, color: kr.core }, sphere: { scale: Ue.sphere, color: kr.core } }
        );
        const W = (J, Y) => {
          U.addStyle(
            { serial: J },
            {
              stick: { radius: Ue.markStick, color: Qi(Y) },
              sphere: { scale: Ue.markSphere, color: Qi(Y) }
            }
          );
        };
        for (const J of es(P, k.mol, k.uniques, k.side))
          for (const Y of J.atoms) W(Y, J.color);
        for (const J of k.custom)
          J < k.mol.symbols.length && W(J, P.customColor);
        U.zoomTo(), U.render(), q(D), j(D);
      }
      I();
    }, ne = () => {
      const P = M(`${s} (left), both overlaid (middle), ${a} (right)`), N = Uf(d.coords, f.coords), v = (z, V) => ({
        ...z,
        coords: z.coords.map(([G, ee, oe]) => [G + V, ee, oe])
      }), k = v(d, -N), D = v(f, N), U = O(P, [{ mol: k }, { mol: D }, { mol: d }, { mol: f }]);
      U.setStyle({}, { stick: {} });
      const W = Array.from(c);
      W.forEach(([z, V], G) => {
        const ee = k.coords[z], oe = D.coords[V];
        if (!ee || !oe) return;
        const se = Hf(G, W.length);
        for (const [re, ie, ae] of [ee, oe])
          U.addSphere({
            center: { x: re, y: ie, z: ae },
            radius: zt.sphereRadius,
            color: se,
            alpha: zt.sphereAlpha
          });
      }), U.zoomTo();
      const { clientWidth: J, clientHeight: Y } = P.container, E = J - 2 * Df;
      E > 0 && E < Y && U.zoom(E / Y), U.render(), q(P);
    }, Z = () => {
      const P = M(`${s} to ${a}  (${c.size} mapped pairs)`), { axis: N, lift: v } = Bf(d.coords, f.coords), k = {
        ...f,
        coords: f.coords.map((W) => {
          const J = [W[0], W[1], W[2]];
          return J[N] += v, J;
        })
      }, D = O(P, [{ mol: d }, { mol: k }]), U = {
        stick: { radius: Ue.stick, colorscheme: "Jmol" },
        sphere: { scale: Ue.pairSphere, colorscheme: "Jmol" }
      };
      D.setStyle({ model: 0 }, U), D.setStyle({ model: 1 }, U);
      for (const [W, J] of c) {
        const Y = d.coords[W], E = k.coords[J];
        !Y || !E || D.addCylinder({
          start: { x: Y[0], y: Y[1], z: Y[2] },
          end: { x: E[0], y: E[1], z: E[2] },
          radius: Ue.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: kr.pairLine
        });
      }
      D.zoomTo(), N === 2 ? D.rotate(90, "x") : N === 0 && D.rotate(-90, "z"), D.render(), q(P);
    }, K = () => {
      const P = Me, N = Zi(P.customSpec), k = [
        { mol: d, uniques: _, side: "left", custom: N.left },
        { mol: f, uniques: m, side: "right", custom: N.right }
      ].map((D) => {
        const U = F("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), W = F(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${lt.canvas2D};`
        );
        return W.appendChild(he("Loading 2D depiction...")), U.appendChild(W), y && U.appendChild(F("div", Or, D.mol.name)), u.appendChild(U), { box: W, side: D };
      });
      ir().then((D) => {
        const U = Hu(P, D), W = Tf(D, o.sdf, i.sdf, P.layout, P.alignPair ? c : null);
        for (const { box: J, side: Y } of k) {
          const E = es(P, Y.mol, Y.uniques, Y.side), z = Ku(
            P,
            xr,
            E,
            Y.custom,
            U,
            Y.mol.symbols.length
          ), V = Gu(D, Y.side === "left" ? W.left : W.right, xr, z);
          if (J.replaceChildren(), !V) {
            J.appendChild(he("Failed to parse molecule", !0));
            continue;
          }
          da(J, V, xr);
          const G = J.querySelector("svg");
          G && Qu(G, Y.mol, P, E, Y.custom, U);
        }
      }).catch((D) => {
        for (const { box: U } of k)
          U.replaceChildren(he(`RDKit failed to load: ${ge(D)}`, !0));
      });
    }, L = () => {
      const P = F(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(P);
      const N = F("div", "display:flex;flex-direction:column;gap:2px;");
      N.appendChild(
        F(
          "div",
          `font-size:${Q.title};font-weight:${me.bold};color:${De.title};`,
          n.name || `${s} to ${a}`
        )
      ), P.appendChild(N);
      const v = qf(c, d.symbols, f.symbols), k = F("div", Ne.row), D = [];
      let U = null;
      const W = (re, ie, ae, fe) => {
        const ve = F("button", `${Ne.plain}${Ne.button}`);
        ve.type = "button", ve.appendChild(Qe(re, String(ie), fe)), ve.onclick = () => {
          U = U === ae ? null : ae, oe();
        }, D.push({ button: ve, kinds: ae }), k.appendChild(ve);
      }, J = (re, ie) => {
        const ae = F("span", Ne.plain);
        ae.appendChild(Qe(re, ie)), k.appendChild(ae);
      };
      W("mapped atoms", c.size, ["mapped", "element"]), W("element changes", _.elements.length, ["element"], Me.modifiedColor), W(`unique to ${s}`, _.atoms.length, ["uniqueA"], Me.destroyedColor), W(`unique to ${a}`, m.atoms.length, ["uniqueB"], Me.createdColor), J(`atoms in ${s}`, String(d.symbols.length)), J(`atoms in ${a}`, String(f.symbols.length)), J("score", n.score == null ? at : n.score.toFixed(3)), P.appendChild(k), P.appendChild(F("div", Fr, "Correspondence"));
      const Y = F("div", zr);
      P.appendChild(Y);
      const E = F(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${jf}px,1fr));gap:${te.xs} ${te.md};font-family:${Q.mono};font-size:${Q.small};color:${De.primary};`
      );
      P.appendChild(E);
      const z = String(Math.max(d.symbols.length, f.symbols.length, 1) - 1).length, V = (re, ie) => `${(re == null ? at : String(re)).padStart(z)} ${ie.padEnd(2)}`, G = (re) => {
        if (re.kind === "uniqueA") return `${s} atom ${re.a} ${re.symbolA} maps to nothing`;
        if (re.kind === "uniqueB") return `${a} atom ${re.b} ${re.symbolB} maps to nothing`;
        const ie = re.kind === "element" ? ", an element change" : "";
        return `${s} atom ${re.a} ${re.symbolA} maps to ${a} atom ${re.b} ${re.symbolB}${ie}`;
      }, ee = (re) => {
        const ie = F(
          "div",
          `white-space:pre;padding:${te.xs} ${te.md};border-radius:${Oe.sm};background:${lt.card};border-left:3px solid ${If[re.kind] ?? "transparent"};`,
          `${V(re.a, re.symbolA)} -> ${V(re.b, re.symbolB)}`
        );
        return ie.title = G(re), ie.dataset.gufeRelation = re.kind, ie;
      }, oe = () => {
        const re = U, ie = re ? v.filter((ae) => re.includes(ae.kind)) : v;
        E.replaceChildren(...ie.map(ee)), ie.length || E.appendChild(
          F("div", `${zr}grid-column:1/-1;`, U ? "No atoms of that kind." : "This mapping has no atoms.")
        ), Y.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (U ? "; click the chip again for all of them" : "");
        for (const ae of D) {
          const fe = ae.kinds === U;
          ae.button.style.cssText = `${Ne.plain}${fe ? Ne.active : Ne.button}`, ae.button.setAttribute("aria-pressed", String(fe)), ae.button.title = fe ? "Show every atom" : "Show only these atoms";
        }
      };
      oe();
      const se = Object.entries(n.annotations ?? {}).filter(([re]) => re !== "score");
      if (se.length) {
        P.appendChild(F("div", Fr, "Annotations"));
        const re = F("div", `${za}color:${De.faint};`);
        for (const [ie, ae] of se)
          re.appendChild(F("div", "", `${ie}: ${String(ae)}`));
        P.appendChild(re);
      }
    }, R = () => {
      if (A(), h === "info") {
        L();
        return;
      }
      if (h === "2d") {
        K();
        return;
      }
      u.appendChild(he("Loading 3D viewer...")), or().then(() => {
        g && (u.replaceChildren(), h === "colored" ? X() : h === "openfe" ? ne() : h === "lines" ? Z() : H());
      }).catch((P) => {
        u.replaceChildren(he(`3D render failed: ${ge(P)}`, !0));
      });
    };
    return R(), {
      onResize() {
        for (const P of l)
          P.viewer && (P.viewer.resize(), P.viewer.render());
      },
      cleanup() {
        g = !1, S.cleanup(), A();
      }
    };
  }
}
Pe("gufe-atom-mapping", Kf);
const ys = ["Force-directed", "Circular", "Radial"], Gf = "ligand-network", Wf = "Click a ligand or an edge to see it.";
function Jf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Yf(e) {
  return va(e);
}
const $s = (e) => Math.round(e * 100) / 100;
function Xf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function Zf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Mt = { initial: 0.58, min: 0.25, max: 0.8 }, Te = 38, vs = 200, Qf = 4, ep = 14, tp = 18, Se = {
  fontSize: 11,
  below: Te + 12,
  minFontSize: 7,
  insideWidth: (Te - 6) * 2
}, Ft = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, bs = 1.5, np = 6.5, rp = 0.9, op = 14, Pr = { size: 8, clearance: 8 }, ip = { fontSize: 10 }, sp = 0.4, ap = Lr(T.netMatchAtom), Tt = { padding: 4, opacity: 0.95 }, cp = 3, Ct = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], lp = (e) => Ct.find((t) => e >= t.from) ?? Ct[Ct.length - 1], dp = (e) => Ct[Math.min(Ct.indexOf(e) + 1, Ct.length - 1)], jn = 200, up = 24, Ar = { node: 0.12, edge: 0.06 }, fp = 1.8, ws = 2 * Te + 68, ke = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: ws,
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
  collisionPadding: ws / 2 - Te,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function pp(e) {
  const t = F(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Q.small};line-height:1.5;max-width:260px;background:${T.tooltipBg};border:1px solid ${T.tooltipBorder};color:${T.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function hp(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const i = ue("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Te + Pr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Pr.size,
      markerHeight: Pr.size,
      orient: "auto"
    });
    return i.appendChild(ue("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function mp(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function gp(e) {
  const [t, n] = T.netEdgeRamp.map(mp), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ge = nt, yp = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function $p(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (y) => (e.matched().get(y) ?? []).join(","), i = (y, w) => {
    if (t.has(w) || n.has(w)) return;
    const u = e.nodes[w], b = e.matched().get(w), h = u.sdf && mo(
      y,
      u.sdf,
      vs,
      Me.layout,
      b && { atoms: b, color: ap, radius: sp }
    );
    if (!h) {
      n.add(w);
      return;
    }
    if (!ba(e.depictionGroups[w], h, vs, (Te - Qf) * 2)) {
      n.add(w);
      return;
    }
    t.add(w), r[w] = o(w);
  }, s = () => {
    for (const y of [...t])
      r[y] !== o(y) && (e.depictionGroups[y].replaceChildren(), t.delete(y));
  }, a = [], c = (y, w) => {
    if (a[y]) return a[y];
    w.setAttribute("font-size", String(Se.fontSize));
    let u = 0;
    try {
      u = w.getBBox().width;
    } catch {
      return Se.fontSize;
    }
    if (!u) return Se.fontSize;
    const b = Se.fontSize * Se.insideWidth / u;
    return a[y] = Math.max(Se.minFontSize, Math.min(Se.fontSize, b)), a[y];
  }, d = [], f = (y) => {
    const w = e.captionPlates[y];
    if (d[y] === Se.below) {
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
    w.setAttribute("x", String(u.x - Ft.captionPadX)), w.setAttribute("y", String(u.y - Ft.captionPadY)), w.setAttribute("width", String(u.width + Ft.captionPadX * 2)), w.setAttribute("height", String(u.height + Ft.captionPadY * 2)), w.setAttribute("display", "inline"), d[y] = Se.below;
  }, $ = (y, w) => {
    const u = w.structure && !t.has(y) ? dp(w) : w;
    e.depictionGroups[y].setAttribute("display", u.structure ? "inline" : "none"), e.plates[y].setAttribute("display", u.structure ? "inline" : "none");
    const b = e.matched().has(y), h = e.circles[y];
    h.setAttribute("fill", u.disc ? b ? T.netMatchFill : T.netNodeFill : "none"), h.setAttribute("stroke", u.disc ? b ? T.netMatchStroke : T.netNodeStroke : "none"), e.initials[y].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[y], S = u.name === "below";
    if (C.setAttribute("fill", b ? T.netMatchStroke : S ? T.netDepictCaption : T.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), S || e.captionPlates[y].setAttribute("display", "none"), u.name === "none") return;
    const l = u.name === "inside";
    C.setAttribute("y", l ? "0" : String(Se.below)), C.setAttribute("dominant-baseline", l ? "middle" : "auto"), C.setAttribute("font-size", String(l ? c(y, C) : Se.fontSize)), S && f(y);
  };
  let _ = null;
  return { apply: (y, w, u) => {
    const b = lp(y);
    _ = b, e.stage.setAttribute("data-detail", b.id), e.edgeLabels.setAttribute("display", b.edgeScores ? "inline" : "none");
    for (let l = 0; l < e.nodes.length; l++) $(l, b);
    if (!b.structure) return;
    const { width: h, height: C } = e.viewport(), S = [];
    e.nodes.forEach((l, p) => {
      if (t.has(p) || n.has(p)) return;
      const g = l.x * y + w, x = l.y * y + u;
      g < -jn || x < -jn || g > h + jn || x > C + jn || S.push(p);
    }), S.length && e.rdkit().then((l) => {
      if (!(!l || _ !== b))
        for (const p of S)
          i(l, p), $(p, b);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function vp(e) {
  const t = St("ligand-network.query"), n = Wr("ligand-network.minScore", 0, 0, 1), r = F("div", Gr), o = F("input", `${Wn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const i = _a({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: St("ligand-network.smarts"),
    run: (w) => e.match(w),
    describe: (w) => {
      const u = w.unreadable ? `, ${w.unreadable} could not be read` : "";
      return `${w.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(i.element);
  const s = F("div", `display:flex;align-items:center;gap:8px;font-size:${Q.small};color:${T.textMuted};`), a = F("span", `min-width:28px;color:${T.textPrimary};`, "0.00"), c = F("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(F("span", "", "score >=")), s.appendChild(c), s.appendChild(a), r.appendChild(s);
  const d = F("div", `font-size:${Q.small};color:${T.textMuted2};`);
  r.appendChild(d);
  const f = F("div", Ms);
  r.appendChild(f), r.appendChild(F("div", `font-size:${Q.tiny};line-height:1.5;color:${T.textMuted2};`, yo));
  const $ = ma({
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
  const _ = F("button", `${kt}width:100%;`, "Clear selection");
  _.onclick = () => {
    e.selected.clear(), y(), e.refresh();
  }, r.appendChild(_);
  const m = (w) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? Ge(w).toLowerCase().includes(u) || (w.smiles ?? "").toLowerCase().includes(u) || w["gufe-key"].toLowerCase().includes(u) : !0;
  }, y = () => {
    $.clearNote(), f.replaceChildren();
    const w = e.nodes.map((u, b) => ({ node: u, index: b })).filter(({ node: u }) => m(u));
    d.textContent = `${w.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: b } of w) {
      const h = u["gufe-key"], C = F(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(h) ? T.cardBorderActive : T.cardBorder};background:${e.selected.has(h) ? T.cardBgActive : T.cardBg};color:${T.textPrimary};`
      ), S = F("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ge(u));
      S.title = `${Ge(u)}
${u.smiles ?? ""}`, C.appendChild(S), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(h) ? e.selected.delete(h) : e.selected.add(h) : (e.selected.clear(), e.selected.add(h), e.focus(b)), y(), e.refresh();
      }, f.appendChild(C);
    }
    w.length || f.appendChild(F("div", `font-size:${Q.small};padding:8px;color:${T.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), y(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, y(), i.apply(), r;
}
class bp extends Ee {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = [];
    let i = 0;
    for (const E of n.nodes ?? []) {
      const z = Ce(r, E, "SmallMoleculeComponentViz");
      if (!z) {
        i++;
        continue;
      }
      o.push({ ...z, x: 0, y: 0 });
    }
    const s = new Map(o.map((E) => [E["gufe-key"], E])), a = [];
    let c = 0;
    for (const E of n.edges ?? []) {
      const z = s.get(E.componentA), V = s.get(E.componentB);
      if (!z || !V) {
        c++;
        continue;
      }
      a.push({ ...E, index: a.length, from: z, to: V });
    }
    const d = Yn(n.name || "Ligand network");
    d.statsEl.appendChild(Qe("ligands", String(o.length))), d.statsEl.appendChild(Qe("mappings", String(a.length))), t.appendChild(d);
    const f = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const $ = /* @__PURE__ */ new Set(), _ = { minScore: 0 }, m = { text: "" };
    let y = () => {
    }, w = null;
    const u = () => w ??= ir().catch((E) => (console.warn("[gufe-viz] RDKit failed to load:", ge(E)), null)), b = wa(
      u,
      o.map((E) => E.sdf ?? "")
    );
    let h = /* @__PURE__ */ new Map(), C = () => {
    };
    const S = async (E) => {
      const z = await b.run(E);
      return z.status === "superseded" || (h = z.status === "ok" ? z.matched : /* @__PURE__ */ new Map(), C()), z;
    }, l = Qr(
      d,
      () => vp({
        nodes: o,
        edges: a,
        selected: $,
        filter: _,
        query: m,
        refresh: () => y(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (E) => {
          H(E), J({ kind: "ligand", index: E });
        },
        match: (E) => S(E)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => Y(),
        remember: ct("ligand-network.menuOpen", !1)
      }
    );
    f.appendChild(l.panel);
    let p = () => {
    };
    const g = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`), x = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.appBg};`);
    f.appendChild(g), f.appendChild(
      Bs(f, g, x, {
        min: Mt.min,
        max: Mt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Wr("ligand-network.canvasShare", Mt.initial, Mt.min, Mt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => p(),
        onOrient: (E) => Xr(l.panel, E)
      })
    ), f.appendChild(x);
    const A = F("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${T.netCanvasBg};`);
    g.appendChild(A);
    const M = ut("ligand-network.layout", "Force-directed", ys), I = this.#n(
      (E) => Y(E),
      () => D(),
      M
    );
    g.appendChild(I.bar);
    const O = this.#e(x, r);
    if (!o.length)
      return A.appendChild(
        he(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), O.message("Nothing to show."), {};
    i && dt(
      A,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(A, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const q = u(), j = pp(A);
    let H = () => {
    };
    const X = Xf(Ua(Gf), o.length);
    let ne = X && { scale: X.scale, tx: X.tx, ty: X.ty }, Z = a.length ? { kind: "edge", index: 0 } : null;
    if (X && X.selected >= 0) {
      const E = X.selectedKind ?? "edge";
      X.selected < (E === "ligand" ? o.length : a.length) && (Z = { kind: E, index: X.selected });
    }
    let K = () => ({ scale: 1, tx: 0, ty: 0 }), L = !1, R = null, P = M.get(), N = !1, v = !0, k = () => {
    }, D = () => {
    }, U = 0;
    const W = () => {
      if (!Z) {
        O.message(a.length ? Wf : "Click a ligand to see it.");
        return;
      }
      Z.kind === "edge" ? O.showMapping(a[Z.index]) : O.showLigand(o[Z.index]);
    }, J = (E) => {
      Z = E, W(), k();
    }, Y = (E = P) => {
      const z = L && E === P ? K() : null, V = ++U;
      P = E, R?.(), R = null, A.querySelectorAll("svg").forEach((se) => se.remove());
      const G = A.clientWidth || 800, ee = A.clientHeight || 600;
      wp(o, G, ee, P, a), X && Zf(o, X.nodes);
      const oe = () => {
        if (!v || V !== U) return;
        const se = this.#t(A, o, a, G, ee, J, q, j);
        k = () => se.setSelected(Z), D = se.reset, R = se.cleanup, H = (ie) => se.focusOn(ie), K = se.transform, y = () => {
          const ie = m.text.trim().toLowerCase(), ae = $.size > 0 || ie.length > 0, fe = /* @__PURE__ */ new Set();
          for (const Ae of o) {
            const Le = Ae["gufe-key"], rt = $.has(Le) || ie.length > 0 && (Ge(Ae).toLowerCase().includes(ie) || (Ae.smiles ?? "").toLowerCase().includes(ie) || Le.toLowerCase().includes(ie));
            (!ae || rt) && fe.add(Le);
          }
          const ve = /* @__PURE__ */ new Set();
          a.forEach((Ae, Le) => {
            (Ae.score ?? 0) < _.minScore || !fe.has(Ae.from["gufe-key"]) || !fe.has(Ae.to["gufe-key"]) || ve.add(Le);
          });
          const be = ae || _.minScore > 0;
          se.setEmphasis(be ? fe : null, be ? ve : null);
        }, C = () => se.setMatches(h), k(), y(), C();
        const re = ne ?? z;
        re ? (se.setTransform(re.scale, re.tx, re.ty), ne = null) : se.fit(), L = !0;
      };
      if (P !== "Force-directed" || N || X) {
        oe();
        return;
      }
      _p(o, a, G, ee).then((se) => {
        if (!(!v || V !== U)) {
          if (se) {
            oe();
            return;
          }
          N = !0, I.picker.value = "Circular", dt(A, "d3 could not be loaded - showing the circular layout instead"), Y("Circular");
        }
      }, oe);
    };
    return p = () => Y(), Y(), W(), {
      onResize: () => Y(),
      cleanup: () => {
        v = !1, b.cancel(), j.remove(), R?.();
      },
      viewState: () => ({
        nodes: o.map((E) => [$s(E.x), $s(E.y)]),
        ...K(),
        selected: Z ? Z.index : -1,
        selectedKind: Z ? Z.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = F(
      "div",
      Ts.bottom
    ), i = F("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${T.textMuted};`);
    i.appendChild(F("span", "", "score")), i.appendChild(
      F(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${T.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(F("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(F("label", `font-size:${Q.body};margin-left:auto;color:${T.textMuted};`, "Layout"));
    const s = jt(
      ys.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(s), o.appendChild(fo(n, "Reset pan and zoom")), { bar: o, picker: s };
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
    const o = (s) => r.replaceChildren(he(s)), i = (s, a) => {
      const c = document.createElement(s);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => i("gufe-atom-mapping", Sa(Jf(s), n)),
      showLigand: (s) => i("gufe-small-molecule", Yf(s)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, i, s, a, c) {
    const d = ue("svg", {
      class: "gufe-graph",
      width: o,
      height: i,
      style: "display:block;touch-action:none;"
    }), f = ue("g");
    d.appendChild(f), t.appendChild(d);
    const $ = ue("defs"), _ = hp($);
    d.appendChild($);
    const m = [], y = ue("g"), w = ue("g"), u = ue("g", { "pointer-events": "none" }), b = ue("g");
    f.append(y, w, u, b);
    for (const j of r) {
      const H = gp(j.score), X = bs + (j.score ?? 0.5) * (np - bs), ne = ue("line", {
        stroke: T.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": X + Tt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), Z = ue("line", {
        stroke: H,
        "stroke-width": X,
        "stroke-opacity": rp,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${_(H)})`,
        "pointer-events": "none"
      }), K = ue("line", { stroke: "transparent", "stroke-width": op, style: "cursor:pointer;" });
      K.addEventListener("click", (P) => {
        P.stopPropagation(), s({ kind: "edge", index: j.index });
      }), K.addEventListener("mousemove", (P) => {
        c.show(
          `<div style="font-weight:700;color:${T.titleColor};">${We(Ge(j.from))} -&gt; ${We(Ge(j.to))}</div>` + (j.score == null ? `<div style="color:${T.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${j.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Q.tiny};color:${T.textMuted2};">Click to see the mapping</div>`,
          P.offsetX,
          P.offsetY
        );
      }), K.addEventListener("mouseleave", () => c.hide()), m.push(ne), y.append(ne, Z), w.appendChild(K);
      const L = ue("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": ip.fontSize,
        "font-weight": 600,
        fill: T.netEdgeLabel
      });
      L.textContent = j.score == null ? "" : j.score.toFixed(2);
      const R = ue("g", { class: "gufe-edge-label" });
      R.appendChild(L), u.appendChild(R);
    }
    const h = [], C = [], S = [], l = [], p = [], g = [], x = [], A = n.map((j) => {
      const H = ue("g", { class: "gufe-node", style: "cursor:grab;" });
      H.addEventListener("mousemove", (N) => {
        c.show(
          `<div style="font-weight:700;color:${T.titleColor};">${We(Ge(j))}</div>` + (j.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${We(j.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${T.textMuted2};overflow-wrap:anywhere;">${We(j["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${T.textMuted2};">Click to see the ligand</div>`,
          N.offsetX,
          N.offsetY
        );
      }), H.addEventListener("mouseleave", () => c.hide());
      const X = ue("circle", {
        class: "gufe-node-halo",
        r: Te + Tt.padding,
        fill: "none",
        stroke: T.netHaloColor,
        "stroke-width": Tt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      H.appendChild(X), p.push(X);
      const ne = ue("circle", {
        class: "gufe-node-disc",
        r: Te,
        fill: T.netNodeFill,
        stroke: T.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      H.appendChild(ne), C.push(ne);
      const Z = ue("circle", {
        class: "gufe-node-plate",
        r: Te,
        fill: T.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      H.appendChild(Z), S.push(Z);
      const K = ue("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      H.appendChild(K), h.push(K);
      const L = ue("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": tp,
        "font-weight": 700,
        fill: T.netInitials,
        "pointer-events": "none"
      });
      L.textContent = Ge(j).slice(0, 2).toUpperCase(), H.appendChild(L), g.push(L);
      const R = ue("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Se.below,
        "font-size": Se.fontSize,
        "font-weight": 600,
        fill: T.netNodeCaption,
        "pointer-events": "none"
      });
      R.textContent = yp(Ge(j), ep), R.setAttribute("display", "none"), x.push(R);
      const P = ue("rect", {
        class: "gufe-node-caption-plate",
        rx: Ft.captionRadius,
        fill: T.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return l.push(P), H.appendChild(P), H.appendChild(R), b.appendChild(H), H;
    }), M = () => {
      r.forEach((j, H) => {
        for (const ne of [m[H], y.children[H * 2 + 1], w.children[H]]) {
          const Z = ne;
          Z.setAttribute("x1", String(j.from.x)), Z.setAttribute("y1", String(j.from.y)), Z.setAttribute("x2", String(j.to.x)), Z.setAttribute("y2", String(j.to.y));
        }
        u.children[H].setAttribute(
          "transform",
          `translate(${(j.from.x + j.to.x) / 2},${(j.from.y + j.to.y) / 2 - 8})`
        );
      }), n.forEach((j, H) => A[H].setAttribute("transform", `translate(${j.x},${j.y})`));
    };
    M();
    let I = /* @__PURE__ */ new Map();
    const O = $p({
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
    }), q = this.#r(
      d,
      f,
      n,
      A,
      M,
      O.apply,
      (j) => s({ kind: "ligand", index: j })
    );
    return {
      setSelected(j) {
        const H = j?.kind === "edge" ? j.index : -1, X = j?.kind === "ligand" ? j.index : -1;
        m.forEach((ne, Z) => ne.setAttribute("opacity", Z === H ? String(Tt.opacity) : "0")), p.forEach((ne, Z) => ne.setAttribute("opacity", Z === X ? String(Tt.opacity) : "0"));
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
        I = j, O.forget();
        const { scale: H, tx: X, ty: ne } = q.transform();
        O.apply(H, X, ne);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(j, H) {
        A.forEach((X, ne) => {
          const Z = !j || j.has(n[ne]["gufe-key"]);
          X.setAttribute("opacity", Z ? "1" : String(Ar.node));
        }), r.forEach((X, ne) => {
          const Z = !H || H.has(ne), K = Z ? "0.9" : String(Ar.edge);
          y.children[ne * 2 + 1].setAttribute("stroke-opacity", K), u.children[ne].setAttribute("opacity", Z ? "1" : String(Ar.edge));
        });
      },
      focusOn(j) {
        const H = n[j];
        H && q.centreOn(H.x, H.y);
      },
      setDetail: O.apply,
      depictionsDrawn: () => O.drawn(),
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
    const c = $a(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => ya(r, Te),
      margin: up,
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
        const { scale: w } = c.transform(), u = (y.clientX - $.x) / w, b = (y.clientY - $.y) / w;
        Math.hypot(u - r[f].x, b - r[f].y) * w > cp && (_ = !0), r[f].x = r[f].fx = u, r[f].y = r[f].fy = b, i();
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
      centreOn: (d, f) => c.centreOn(d, f, fp)
    };
  }
}
function wp(e, t, n, r, o) {
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
        for (const b of c.get(u))
          $.has(b) || ($.add(b), w.push(b));
      _ = w, m++;
    }
    a(e.filter((w) => !$.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function _p(e, t, n, r) {
  let o;
  try {
    if (o = await na(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance((c) => ke.linkBaseDistance + (1 - (c.score ?? 0.5)) * ke.linkScoreBonus).strength(ke.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(ke.chargeStrength).distanceMin(ke.chargeDistanceMin).distanceMax(ke.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(ke.centerStrength)).force("collision", o.forceCollide(Te + ke.collisionPadding).iterations(ke.collisionIterations)).force("x", o.forceX(n / 2).strength(ke.drift)).force("y", o.forceY(r / 2).strength(ke.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * ke.tickMultiplier; c++) s.tick();
  return !0;
}
Pe("gufe-ligand-network", bp);
const Sp = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function Ca(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Je(t, o);
    i && (Sp.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function Cp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const _s = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], kp = 0.4;
class xp extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ca(n, xt(n)), o = r.structures.map((m, y) => y), i = r.ligands.map((m, y) => r.structures.length + y), s = ut(
      "complex.focus",
      "site",
      _s.map((m) => m.id)
    );
    let a = s.get(), c = null;
    const d = ha({
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
        Jn(
          _s,
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
      m && (Ur(m, d.opts, c, d.showStatus, { model: o }), af(m, { model: i }), m.render());
    }
    function $() {
      const m = d.viewer();
      m && (a === "site" && i.length ? (m.zoomTo({ model: i }), m.zoom(kp)) : m.zoomTo(), m.render(), _());
    }
    function _() {
      const m = d.viewer();
      m && (d.interaction()?.cleanup(), d.setInteraction(sr(d.pane.container, m)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(Ss(r, () => c));
    try {
      c = fa(r.structures[0].pdb), d.setStats(Ss(r, () => c));
    } catch (m) {
      d.showStatus(`PDB parse error: ${ge(m)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), or().then(() => {
      const m = et.createViewer(d.pane.container, { backgroundColor: lt.viewer });
      d.setViewer(m);
      for (const y of r.structures) m.addModel(y.pdb, "pdb");
      for (const y of r.ligands) m.addModel(la(y.sdf), "sdf");
      f(), d.restoreCamera() ? _() : $(), m.spin(d.opts.spin ? "y" : !1), m.render();
    }).catch((m) => {
      d.showStatus(`Failed to render structure: ${ge(m)}`, "error");
    }), d.handle;
  }
}
function Ss(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = ho(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...pa(o)] : [r];
}
Pe("gufe-complex", xp);
function Ep(e, t) {
  return {
    ...e,
    registry: go(t, Object.values(e.components ?? {}))
  };
}
const Pp = "chemical-system.component", Ap = 460, Rp = 200, Np = "35%";
function Mp(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function Tp(e) {
  return e.type === "UnknownComponentViz" ? Xn(e.gufe_type) : null;
}
function Cs(e) {
  return F(
    "div",
    `padding:10px 10px 16px;font-weight:${me.bold};font-size:${Q.title};color:${T.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class Op extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = [], i = [];
    for (const [M, I] of Object.entries(n.components ?? {})) {
      const O = Je(r, I);
      O ? o.push([M, O]) : i.push(M);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(Cs(s)), t.appendChild(
        he(
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
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.panelBg};`
    );
    a.appendChild(c), c.appendChild(Cs(s));
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
    _.style.cssText = "flex:1;min-width:0;min-height:0;", _.setAttribute(Ir, ""), $.appendChild(_);
    const m = Ca(n, r), y = Cp(m), w = (M) => y && m.structures.some(
      (I) => I === M
    ), u = o.filter(([, M]) => !w(M)).map(([M, I]) => ({
      key: M,
      title: M,
      subtitle: Mp(I),
      badge: Tp(I),
      element: _,
      point: () => {
        _.payload = I;
      }
    }));
    if (y) {
      const M = document.createElement("gufe-complex");
      M.style.cssText = "flex:1;min-width:0;min-height:0;", M.setAttribute(Ir, ""), M.payload = n, u.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${m.ligands.length === 1 ? m.ligands[0].name || "ligand" : "ligands"} in ${m.structures[0].name || "structure"}`,
        badge: null,
        element: M,
        point: () => {
        }
      });
    }
    let b = null;
    const h = (M) => {
      b !== M && ($.replaceChildren(M), b = M);
    }, C = St(Pp), S = [], l = (M) => {
      S.forEach((I, O) => {
        const q = O === M;
        I.style.background = q ? T.cardBgActive : T.cardBg, I.style.borderColor = q ? T.cardBorderActive : T.cardBorder;
      }), u[M].point(), h(u[M].element);
    }, p = (M) => {
      C.set(u[M].key), l(M);
    };
    u.forEach((M, I) => {
      const O = F(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${T.cardBorder};border-radius:8px;background:${T.cardBg};cursor:pointer;font-family:inherit;font-size:${Q.body};flex-shrink:0;max-width:100%;box-sizing:border-box;`
      );
      O.appendChild(
        F("span", `font-weight:700;color:${T.textPrimary};`, M.title)
      ), O.appendChild(
        F(
          "span",
          `font-size:${Q.small};color:${T.textMuted};`,
          M.subtitle
        )
      ), M.badge && O.appendChild(M.badge), O.onclick = () => p(I), S.push(O), d.appendChild(O);
    });
    const g = u.findIndex((M) => M.key === C.get());
    l(g < 0 ? 0 : g);
    let x = null;
    const A = Zn(a, (M) => {
      const I = M > 0 && M < Ap;
      I !== x && (x = I, a.style.flexDirection = I ? "column" : "row", c.style.flex = I ? "0 0 auto" : `0 0 ${Rp}px`, c.style.maxHeight = I ? Np : "none", c.style.borderRight = I ? "none" : `1px solid ${T.splitBorder}`, c.style.borderBottom = I ? `1px solid ${T.splitBorder}` : "none", d.style.flexDirection = I ? "row" : "column", d.style.flexWrap = I ? "wrap" : "nowrap", b?.resize?.());
    });
    return {
      onResize: () => b?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        A(), b?.remove();
      }
    };
  }
}
Pe("gufe-chemical-system", Op);
const Fp = 460, zp = 210, Ip = "42%";
function jp(e, t) {
  const n = Ce(t, e.stateA, "ChemicalSystemViz"), r = Ce(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: go(t, o) };
}
const $o = {
  unchanged: T.diffUnchanged,
  changed: T.diffChanged,
  added: T.diffAdded,
  removed: T.diffRemoved
};
function Dp(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Lp(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function qp(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Rr(e, t, n) {
  const r = F(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${te.md};padding:5px ${te.lg};border-radius:${Oe.md};background:${T.cardBg};border:1px solid ${T.cardBorder};`
  );
  n && r.appendChild(
    F(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${me.bold};letter-spacing:.08em;color:${T.textMuted2};`,
      n
    )
  );
  const o = qp(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(F("span", `font-size:${Q.body};color:${T.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? T.cardBorder : $o[t];
  const i = F(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${T.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Xn(o.type)), r;
}
function Vp(e, t, n, r) {
  const o = F("div", `display:flex;flex-direction:column;gap:${te.sm};min-width:0;`), i = F("div", `display:flex;align-items:center;gap:${te.md};min-width:0;`);
  i.appendChild(
    F("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${$o[t]};`)
  );
  const s = F(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${me.bold};color:${T.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Rr(n, t, null)), o) : (o.appendChild(Rr(n, t, "A")), o.appendChild(Rr(r, t, "B")), o);
}
function Bp(e, t) {
  const n = Je(t, e.componentA), r = Je(t, e.componentB);
  return `${n ? nt(n) : "A"} to ${r ? nt(r) : "B"}`;
}
function ks(e) {
  return F(
    "div",
    `font-weight:${me.bold};font-size:${Q.heading};color:${T.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function xs(e, t) {
  const n = F("div", `display:flex;align-items:baseline;gap:${te.md};min-width:0;font-size:${Q.small};`);
  return n.appendChild(F("span", `flex:0 0 auto;color:${T.textMuted};`, e)), n.appendChild(
    F("span", `min-width:0;font-weight:${me.bold};color:${T.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class Up extends Ee {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = Ce(r, n.stateA, "ChemicalSystemViz"), i = Ce(r, n.stateB, "ChemicalSystemViz"), s = Ce(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const l = F("div", "padding:12px 14px;flex-shrink:0;");
      return l.appendChild(ks(c)), t.appendChild(l), t.appendChild(
        he("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const d = Lp(o, i), f = F("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(f);
    const $ = F(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${T.panelBg};`
    );
    f.appendChild($);
    const _ = F("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    f.appendChild(_);
    const m = F("div", `display:flex;flex-direction:column;gap:${te.md};min-width:0;`);
    m.appendChild(ks(c)), m.appendChild(xs("protocol", s?.gufe_type || s?.name || "-")), m.appendChild(xs("mappings", String(a.length))), $.appendChild(m);
    const y = F("div", `display:flex;flex-direction:column;gap:${te.xs};`);
    for (const [l, p] of [
      ["State A", o],
      ["State B", i]
    ])
      y.appendChild(
        F(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${me.bold};letter-spacing:.06em;text-transform:uppercase;color:${T.textMuted2};overflow-wrap:anywhere;`,
          `${l}${p.name ? ` - ${p.name}` : ""}`
        )
      );
    $.appendChild(y);
    const w = /* @__PURE__ */ new Set();
    for (const l of d) {
      const p = o.components?.[l], g = i.components?.[l], x = Dp(p, g);
      w.add(x), $.appendChild(
        Vp(
          l,
          x,
          Je(r, p),
          Je(r, g)
        )
      );
    }
    if (w.size > 1) {
      const l = F(
        "div",
        `display:flex;flex-wrap:wrap;gap:${te.lg} 12px;padding-top:${te.sm};font-size:${Q.small};color:${T.textMuted};`
      );
      for (const p of ["unchanged", "changed", "added", "removed"])
        w.has(p) && l.appendChild(Qe(p, "", $o[p]));
      $.appendChild(l);
    }
    const u = F("div", Na, "Atom mapping");
    _.appendChild(u);
    let b = null;
    const h = Zn(t, (l) => {
      const p = l > 0 && l < Fp;
      p !== b && (b = p, f.style.flexDirection = p ? "column" : "row", $.style.flex = p ? "0 0 auto" : `0 0 ${zp}px`, $.style.maxWidth = p ? "none" : Ip, $.style.maxHeight = p ? "45%" : "none", $.style.borderRight = p ? "none" : `1px solid ${T.splitBorder}`, $.style.borderBottom = p ? `1px solid ${T.splitBorder}` : "none", u.style.display = p ? "block" : "none");
    });
    if (!a.length)
      return _.appendChild(
        he(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const C = document.createElement("gufe-atom-mapping");
    C.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (l) => {
      C.payload = Sa(a[l], r);
    };
    if (S(0), a.length > 1) {
      const l = F(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textMuted};`
      );
      l.appendChild(
        Jn(
          a.map((p, g) => ({
            id: String(g),
            label: p.name || Bp(p, r)
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
Pe("gufe-transformation", Up);
const Ke = { width: 176, height: 54, depictedHeight: 176, platedHeight: 134, radius: 10 }, Ie = { pad: 6, size: 122, radius: 6, inset: 4 }, Es = 200, He = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Hp = 7, Nr = [
  { id: "structures", from: 0.24, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Kp = (e) => Nr.find((t) => e >= t.from) ?? Nr[Nr.length - 1], Dn = 200, Ln = { width: 2, selectedWidth: 3.5, hit: 20 }, wt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ot = { initial: 0.56, min: 0.25, max: 0.78 }, Gp = 24, Ps = { x: Ke.width / 2, y: Ke.depictedHeight / 2 }, As = { node: 0.12, edge: 0.06 }, Wp = 1.4, Jp = 3, Kn = nt;
function Mr(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function ka(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Je(t, r);
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
const Yp = (e, t) => ka(e, t).join(" + ");
function Xp(e, t) {
  const n = { fill: T.cardBg, stroke: T.cardBorder }, r = e.map((s) => Yp(s, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > T.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const i = new Map(
    o.map((s, a) => [s, { fill: T.netGroupFill[a], stroke: T.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (s) => i.get(r[s]) ?? n,
    legend: o.map((s) => [s, i.get(s)])
  };
}
function Zp(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Je(t, o);
    if (!i) continue;
    n.push(nt(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function Qp(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((i) => {
    const s = [];
    for (const a of Object.values(i.components ?? {})) {
      const c = Ce(t, a, "SmallMoleculeComponentViz");
      if (!c) continue;
      let d = r.get(a);
      d === void 0 && (d = n.length, r.set(a, d), n.push(c.sdf ?? "")), s.push(d);
    }
    return s;
  });
  return { sources: n, perNode: o };
}
function eh(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function th(e) {
  const t = St("alchemical-network.query"), n = St("alchemical-network.composition"), r = F("div", Gr), o = F("input", `${Wn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const i = _a({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: St("alchemical-network.smarts"),
    run: (_) => e.match(_),
    describe: (_) => {
      const m = _.unreadable ? `, ${_.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${m}`;
    }
  });
  if (r.appendChild(i.element), e.compositions.length > 1) {
    const _ = F("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${T.textMuted};`);
    _.appendChild(F("span", "flex-shrink:0;", "made of"));
    const m = jt(
      [{ id: "", label: "anything" }, ...e.compositions.map((y) => ({ id: y, label: y }))],
      "",
      (y) => {
        e.filter.composition = y, $(), e.refresh();
      },
      n
    );
    m.style.cssText += "flex:1;min-width:0;", e.filter.composition = m.value, _.appendChild(m), r.appendChild(_);
  }
  const s = F("div", `font-size:${Q.small};color:${T.textMuted2};`);
  r.appendChild(s);
  const a = F("div", Ms);
  r.appendChild(a), r.appendChild(F("div", `font-size:${Q.tiny};line-height:1.5;color:${T.textMuted2};`, yo));
  const c = ma({
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
  const d = F("button", `${kt}width:100%;`, "Clear selection");
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
      const w = m["gufe-key"], u = e.selected.has(w), b = F(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? T.cardBorderActive : T.cardBorder};background:${u ? T.cardBgActive : T.cardBg};color:${T.textPrimary};`
      ), h = e.colorOf(y);
      b.appendChild(
        F(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${h.fill};border:1px solid ${h.stroke};`
        )
      );
      const C = F("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Kn(m));
      C.title = `${Kn(m)}
${e.signatures[y]}`, b.appendChild(C), b.onclick = (S) => {
        S.shiftKey || S.metaKey || S.ctrlKey ? e.selected.has(w) ? e.selected.delete(w) : e.selected.add(w) : (e.selected.clear(), e.selected.add(w), e.focus(y)), $(), e.refresh();
      }, a.appendChild(b);
    }
    _.length || a.appendChild(F("div", `font-size:${Q.small};padding:8px;color:${T.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), $(), e.refresh();
  }, $(), e.mounted($), i.apply(), r;
}
function nh(e, t, n) {
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
async function rh(e, t, n, r) {
  let o;
  try {
    if (o = await na(), typeof o?.forceSimulation != "function") return !1;
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
class oh extends Ee {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = xt(n), o = [];
    let i = 0;
    for (const J of n.nodes ?? []) {
      const Y = Ce(r, J, "ChemicalSystemViz");
      if (!Y) {
        i++;
        continue;
      }
      o.push({ ...Y, x: 0, y: 0 });
    }
    const s = new Map(o.map((J) => [J["gufe-key"], J])), a = [];
    let c = 0;
    for (const J of n.edges ?? []) {
      const Y = s.get(J.stateA), E = s.get(J.stateB);
      if (!Y || !E) {
        c++;
        continue;
      }
      a.push({ ...J, index: a.length, from: Y, to: E });
    }
    const d = (J) => {
      const Y = Ce(r, J.protocol, "ProtocolViz");
      return Y?.gufe_type || Y?.name || "";
    }, f = new Set(a.map(d).filter(Boolean)), $ = Yn(n.name || "Alchemical network");
    $.statsEl.appendChild(Qe("systems", String(o.length))), $.statsEl.appendChild(Qe("transformations", String(a.length))), f.size && $.statsEl.appendChild(Qe("protocol", [...f].join(", ")));
    const _ = Xp(o, r), m = F("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    let y = () => {
    };
    const w = /* @__PURE__ */ new Set(), u = { composition: "" }, b = { text: "" };
    let h = () => {
    }, C = () => {
    }, S = () => {
    };
    const l = o.map((J) => Zp(J, r));
    let p = null;
    const g = () => p ??= ir().catch((J) => (console.warn("[gufe-viz] RDKit failed to load:", ge(J)), null)), x = Qp(o, r), A = wa(g, x.sources), M = o.map((J, Y) => {
      const E = x.perNode[Y].map((V) => x.sources[V]).find((V) => V) ?? null, z = ka(J, r);
      return {
        colors: _.colorOf(Y),
        composition: z.join(" + "),
        besides: eh(z, E !== null, x.perNode[Y].length),
        sdf: E
      };
    });
    let I = null, O = () => {
    };
    const q = async (J) => {
      const Y = await A.run(J);
      return Y.status === "superseded" || (I = Y.status === "ok" ? new Set(o.flatMap((E, z) => x.perNode[z].some((V) => Y.matched.has(V)) ? [z] : [])) : null, O(), h()), Y;
    }, j = Qr(
      $,
      () => th({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: _.signatures,
        colorOf: _.colorOf,
        compositions: _.compositions,
        selected: w,
        filter: u,
        query: b,
        refresh: () => h(),
        matched: () => I,
        match: (J) => q(J),
        mounted: (J) => {
          O = J;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (J) => {
          C(J), S(J);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => y(),
        remember: ct("alchemical-network.menuOpen", !1)
      }
    ), H = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`), X = F("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.appBg};`), ne = F("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${T.netCanvasBg};`), Z = F("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    Z.appendChild(j.panel), Z.appendChild(ne), H.appendChild($), H.appendChild(Z), m.appendChild(H), m.appendChild(
      Bs(m, H, X, {
        min: Ot.min,
        max: Ot.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Wr("alchemical-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => y(),
        onOrient: (J) => {
          Z.style.flexDirection = J ? "column" : "row", Xr(j.panel, J);
        }
      })
    ), m.appendChild(X);
    const K = this.#e(X, r);
    if (!o.length)
      return ne.appendChild(
        he(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), K.message("Nothing to show."), { cleanup: () => K.cleanup() };
    i && dt(
      ne,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(
      ne,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let L = !0, R = !1, P = null, N = () => {
    }, v = () => {
    }, k = () => {
    }, D = 0;
    H.appendChild(this.#n(_.legend, () => v()));
    const U = (J, Y) => {
      P = { kind: J, index: Y }, K.show(J === "node" ? o[Y] : a[Y], J), N();
    };
    S = (J) => U("node", J);
    const W = () => {
      const J = ++D, Y = ne.clientWidth || 800, E = ne.clientHeight || 600;
      nh(o, Y, E);
      const z = () => {
        if (!L || J !== D) return;
        k(), ne.querySelectorAll("svg").forEach((G) => G.remove());
        const V = this.#t(ne, o, a, Y, E, M, g, U);
        k = V.cleanup, v = V.reset, C = (G) => V.focusOn(G), N = () => V.setSelected(P), N(), h = () => {
          const G = b.text.trim().toLowerCase();
          if (!(w.size > 0 || G.length > 0 || u.composition !== "" || I !== null)) {
            V.setEmphasis(null, null);
            return;
          }
          const oe = G.length > 0 || u.composition !== "" || I !== null, se = /* @__PURE__ */ new Set();
          o.forEach((ie, ae) => {
            const fe = oe && (!G || l[ae].includes(G)) && (!u.composition || _.signatures[ae] === u.composition) && (!I || I.has(ae));
            (w.has(ie["gufe-key"]) || fe) && se.add(ie["gufe-key"]);
          });
          const re = /* @__PURE__ */ new Set();
          a.forEach((ie, ae) => {
            se.has(ie.from["gufe-key"]) && se.has(ie.to["gufe-key"]) && re.add(ae);
          }), V.setEmphasis(se, re);
        }, h();
      };
      if (R) {
        z();
        return;
      }
      rh(o, a, Y, E).then((V) => {
        !L || J !== D || (V || (R = !0, dt(ne, "d3 could not be loaded - showing the circular layout instead")), z());
      }, z);
    };
    return y = W, W(), U("node", 0), {
      onResize: () => W(),
      cleanup: () => {
        L = !1, k(), K.cleanup();
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
    const r = F("div", Ts.bottom);
    if (r.appendChild(fo(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(F("span", `font-size:${Q.small};color:${T.textMuted};`, "systems made of"));
    for (const [o, i] of t) {
      const s = F("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        F(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${i.fill};border:2px solid ${i.stroke};`
        )
      ), s.appendChild(
        F("span", `font-size:${Q.small};color:${T.textPrimary};overflow-wrap:anywhere;`, o)
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
    const i = (a) => r.replaceChildren(he(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = Ep(va(a), n);
      else {
        const { index: f, from: $, to: _, ...m } = a;
        d = jp(m, n);
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
    const d = ue("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(d);
    const f = ue("g");
    d.appendChild(f);
    const $ = ue("g"), _ = ue("g");
    f.append($, _);
    let m = () => {
    };
    const y = $a(d, f, {
      bounds: () => ya(n, Ps.x, Ps.y),
      margin: Gp,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (K, L, R) => m(K, L, R)
    }), w = (K, L) => {
      y.wasPan() || c(K, L);
    }, u = [], b = [];
    r.forEach((K, L) => {
      const R = ue("line", {
        x1: K.from.x,
        y1: K.from.y,
        x2: K.to.x,
        y2: K.to.y,
        stroke: T.netEdgeLine,
        "stroke-width": Ln.width,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      ls(R, K.name || "transformation"), R.addEventListener("click", () => w("edge", L)), $.appendChild(R), u.push(R);
      const P = ue("line", {
        x1: K.from.x,
        y1: K.from.y,
        x2: K.to.x,
        y2: K.to.y,
        stroke: "transparent",
        "stroke-width": Ln.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      P.addEventListener("click", () => w("edge", L)), $.appendChild(P), b.push(P);
    });
    const h = n.map(() => []), C = new Map(n.map((K, L) => [K, L]));
    r.forEach((K, L) => {
      const R = C.get(K.from), P = C.get(K.to);
      R !== void 0 && h[R].push(L), P !== void 0 && P !== R && h[P].push(L);
    });
    const S = [], l = [], p = [], g = [], x = [], A = [], M = [], I = [];
    n.forEach((K, L) => {
      const R = s[L], P = R.sdf ? Ke.depictedHeight : Ke.height, N = ue("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${K.x},${K.y})`
      });
      p.push(N);
      const v = ue("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -P / 2,
        width: Ke.width,
        height: P,
        rx: Ke.radius,
        fill: R.colors.fill,
        stroke: R.colors.stroke,
        "stroke-width": 2
      });
      if (N.appendChild(v), S.push(v), l.push(R.colors.stroke), R.sdf) {
        const U = ue("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -P / 2 + Ie.pad,
          width: Ie.size,
          height: Ie.size,
          rx: Ie.radius,
          fill: T.netDepictBg,
          display: "none",
          "pointer-events": "none"
        });
        N.appendChild(U), A.push(U);
        const W = ue("g", { transform: `translate(0,${-P / 2 + Ie.pad + Ie.size / 2})` }), J = ue("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        W.appendChild(J), N.appendChild(W), M.push(W), I.push(J);
      } else
        A.push(null), M.push(null), I.push(null);
      const k = ue("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: T.netNodeLabel,
        "font-size": He.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      k.textContent = Mr(Kn(K), He.nameChars), N.appendChild(k), g.push(k);
      const D = ue("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: T.netInitials,
        "font-size": He.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      D.textContent = Mr(R.composition, He.subChars), N.appendChild(D), x.push(D), ls(N, `${Kn(K)} - ${R.composition}`), _.appendChild(N);
    });
    const O = (K) => {
      const L = n[K];
      p[K].setAttribute("transform", `translate(${L.x},${L.y})`);
      for (const R of h[K])
        for (const P of [u[R], b[R]])
          r[R].from === L && (P.setAttribute("x1", String(L.x)), P.setAttribute("y1", String(L.y))), r[R].to === L && (P.setAttribute("x2", String(L.x)), P.setAttribute("y2", String(L.y)));
    }, q = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set(), H = (K, L) => {
      if (q.has(L) || j.has(L)) return;
      const R = I[L], P = s[L].sdf;
      if (!R || !P) return;
      const N = mo(K, P, Es, Me.layout);
      if (!N || !ba(R, N, Es, Ie.size - Ie.inset * 2)) {
        j.add(L);
        return;
      }
      q.add(L);
    }, X = (K, L, R) => {
      const P = L && q.has(K), N = (E) => E * R >= Hp, v = N(He.nameSize), k = N(He.subSize);
      g[K].setAttribute("display", v ? "inline" : "none"), x[K].setAttribute("display", k ? "inline" : "none"), A[K]?.setAttribute("display", P ? "inline" : "none"), I[K]?.setAttribute("display", P ? "inline" : "none");
      const U = P ? v || k ? Ke.depictedHeight : Ke.platedHeight : Ke.height;
      S[K].setAttribute("y", String(-U / 2)), S[K].setAttribute("height", String(U));
      const W = -U / 2 + Ie.pad;
      A[K]?.setAttribute("y", String(W)), M[K]?.setAttribute("transform", `translate(0,${W + Ie.size / 2})`);
      const J = U / 2 - He.bottom;
      g[K].setAttribute("y", String(P ? J - (k ? He.gap : 0) : -2)), x[K].setAttribute("y", String(P ? J : 14));
      const Y = s[K];
      x[K].textContent = Mr(P ? Y.besides : Y.composition, He.subChars);
    };
    let ne = null;
    return m = (K, L, R) => {
      const P = Kp(K);
      ne = P, d.setAttribute("data-detail", P.id);
      for (let v = 0; v < n.length; v++) X(v, P.structure, K);
      if (!P.structure) return;
      const N = [];
      n.forEach((v, k) => {
        if (!s[k].sdf || q.has(k) || j.has(k)) return;
        const D = v.x * K + L, U = v.y * K + R;
        D < -Dn || U < -Dn || D > o + Dn || U > i + Dn || N.push(k);
      }), N.length && a().then((v) => {
        if (!(!v || ne !== P))
          for (const k of N)
            H(v, k), X(k, !0, K);
      }).catch(() => {
      });
    }, p.forEach((K, L) => {
      let R = null, P = !1;
      K.addEventListener("pointerdown", (v) => {
        v.stopPropagation();
        const { scale: k } = y.transform();
        R = { x: v.clientX - n[L].x * k, y: v.clientY - n[L].y * k }, P = !1, K.setPointerCapture(v.pointerId);
      }), K.addEventListener("pointermove", (v) => {
        if (!R) return;
        if (y.gesturing()) {
          R = null, P = !0;
          return;
        }
        const { scale: k } = y.transform(), D = (v.clientX - R.x) / k, U = (v.clientY - R.y) / k;
        Math.hypot(D - n[L].x, U - n[L].y) * k > Jp && (P = !0), n[L].x = n[L].fx = D, n[L].y = n[L].fy = U, O(L);
      });
      const N = () => {
        R = null;
      };
      K.addEventListener("pointerup", N), K.addEventListener("pointercancel", N), K.addEventListener("click", (v) => {
        v.stopPropagation(), P || c("node", L);
      });
    }), y.fit(), {
      setSelected(K) {
        S.forEach((L, R) => {
          const P = K?.kind === "node" && K.index === R;
          L.setAttribute("stroke", P ? T.cardBorderActive : l[R]), L.setAttribute("stroke-width", P ? "3" : "2");
        }), u.forEach((L, R) => {
          const P = K?.kind === "edge" && K.index === R;
          L.setAttribute("stroke", P ? T.netHaloColor : T.netEdgeLine), L.setAttribute("stroke-width", String(P ? Ln.selectedWidth : Ln.width));
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
      setEmphasis(K, L) {
        p.forEach((R, P) => {
          const N = !K || K.has(n[P]["gufe-key"]);
          R.setAttribute("opacity", N ? "1" : String(As.node));
        }), u.forEach((R, P) => {
          const N = !L || L.has(P);
          R.setAttribute("opacity", N ? "1" : String(As.edge));
        });
      },
      focusOn(K) {
        const L = n[K];
        L && y.centreOn(L.x, L.y, Wp);
      },
      reset: y.reset,
      cleanup: y.cleanup
    };
  }
}
Pe("gufe-alchemical-network", oh);
class ih extends Ee {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Yn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Xn(n.gufe_type)), t.appendChild(r);
    const o = F(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = Jr();
    return i.style.maxWidth = "460px", i.appendChild(Bn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Bn("Name", n.name)), i.appendChild(
      F(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${T.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Pe("gufe-protocol", ih);
function sh(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Tr(e, t = !1) {
  const n = F(
    "div",
    `display:flex;flex-direction:column;gap:${te.xl};padding:${te.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${T.splitBorder};`)
  );
  return n.appendChild(F("div", Fr, e)), n;
}
function qn(e) {
  return F(
    "div",
    `font-size:${Q.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`,
    e
  );
}
function Rs(e, t) {
  const n = F("div", `display:flex;flex-direction:column;align-items:center;gap:${te.sm};`);
  return n.appendChild(
    F(
      "span",
      `${Ne.plain}${Ne.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(qn(t)), n;
}
class ah extends Ee {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = F(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Jr();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = Tr("Solvent", !0), s = F("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = F("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = F(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${me.bold};line-height:1.1;color:${T.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(qn("SMILES")), s.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const h = F("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      h.appendChild(
        F(
          "div",
          `font-size:${Q.body};color:${T.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), h.appendChild(qn("Name")), s.appendChild(h);
    }
    i.appendChild(s), o.appendChild(i);
    const f = Tr("Ions"), $ = F("div", `display:flex;align-items:flex-end;gap:${te.xxl};flex-wrap:wrap;`);
    n.positive_ion && $.appendChild(Rs(n.positive_ion, "cation")), n.negative_ion && $.appendChild(Rs(n.negative_ion, "anion"));
    const { value: _, unit: m } = sh(n.ion_concentration), y = F("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), w = F("div", `display:flex;align-items:baseline;gap:${te.md};justify-content:flex-end;`);
    w.appendChild(
      F(
        "div",
        `font-size:${Q.display};font-weight:${me.bold};line-height:1;color:${T.titleColor};`,
        _
      )
    ), m && (w.appendChild(document.createTextNode(" ")), w.appendChild(F("div", `font-size:${Q.body};color:${T.textMuted};`, m))), y.appendChild(w), y.appendChild(qn("Ion concentration")), $.appendChild(y), f.appendChild($), o.appendChild(f);
    const u = Tr("Net charge"), b = n.neutralize;
    return u.appendChild(
      F(
        "span",
        `${Ne.plain}align-self:flex-start;font-weight:${me.bold};` + (b ? `background:${T.okBg};color:${T.okFg};` : `${Ne.outline}color:${T.textMuted};`),
        b ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      F(
        "div",
        zr,
        b ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
Pe("gufe-solvent", ah);
class ch extends Ee {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Yn(n.name || "Unnamed component");
    r.statsEl.appendChild(Xn(n.gufe_type)), t.appendChild(r);
    const o = F("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = Jr();
    return i.style.maxWidth = "460px", i.appendChild(
      F(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${T.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      F(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${T.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(Bn("Name", n.name || "(unnamed)")), i.appendChild(Bn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Pe("gufe-unknown-component", ch);
function hh(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Is, reset: Ya });
export {
  uc as CHROME_OPEN_BY_DEFAULT,
  ja as DEBUG_ATTRIBUTE,
  Da as DEBUG_GLOBAL,
  Tu as DEFAULT_DEPICT_STYLE,
  tu as DEFAULT_ZOOM_BOUNDS,
  Me as DEPICT_STYLE,
  Du as DEPICT_STYLE_RANGES,
  oh as GufeAlchemicalNetwork,
  Kf as GufeAtomMapping,
  Op as GufeChemicalSystem,
  xp as GufeComplex,
  Ee as GufeElement,
  bp as GufeLigandNetwork,
  lf as GufeProtein,
  ih as GufeProtocol,
  nf as GufeSmallMolecule,
  ah as GufeSolvent,
  Up as GufeTransformation,
  ch as GufeUnknownComponent,
  Jd as GufeView,
  Ir as HIDE_NAME_ATTRIBUTE,
  wr as MAPPING_COLORS,
  su as MAPPING_RAMP_3D,
  ph as MAPPING_RAMP_NAME,
  yo as MULTI_SELECT_HINT,
  lh as PAYLOAD_TYPES,
  dh as SCHEMA_TYPES,
  co as VIEW_TAGS,
  Af as align2D,
  Mf as alignedToPartner,
  Pf as applyRT,
  Rf as applyTurn,
  ru as boundedZoom,
  xt as buildRegistry,
  ut as choice,
  Qr as chromeMenu,
  Zd as claimGestures,
  Ca as complexPartsFor,
  Fs as debugEnabled,
  Pe as defineElement,
  ea as describeProblem,
  Dp as diffStatus,
  fh as dispatchProblem,
  go as entriesFor,
  nt as entryLabel,
  ma as exportBlock,
  ya as extentOf,
  ct as flag,
  Gd as formatIssues,
  ra as guardWheel,
  Cp as hasComplex,
  Vf as inFrameOf,
  Ef as kabsch,
  ps as laidOut,
  Tf as layoutPair,
  Bf as liftFor,
  Ba as logPayload,
  Je as lookup,
  Ce as lookupOfType,
  Sa as mappingPayloadFor,
  es as markGroups,
  _r as markedBonds,
  hh as mount,
  Yr as nameWanted,
  qu as normaliseDepictStyle,
  Wr as num,
  Zn as onWidth,
  Uf as openfeShift,
  Xr as orientMenuPanel,
  Hf as pairColour,
  Zi as parseAtomSpec,
  Va as payloadJson,
  fo as resetControl,
  Ya as resetSettings,
  $a as sceneCamera,
  df as selectionText,
  Gn as setting,
  Is as settings,
  Bs as splitter,
  Ep as systemPayloadFor,
  St as textSetting,
  jp as transformationPayloadFor,
  ms as uniqueAtoms,
  Bu as uniqueBonds,
  uh as validateAs,
  Kd as validatePayload,
  sr as viewerInteraction,
  oa as wheelFactor,
  Nf as withCoords
};
