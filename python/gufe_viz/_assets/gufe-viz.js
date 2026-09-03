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
function ba() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const N = ba() ? bo.dark : bo.light, Q = {
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
  title: N.titleColor,
  primary: N.textPrimary,
  muted: N.textMuted,
  faint: N.textMuted2,
  error: N.errorFg
}, lt = {
  card: N.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: N.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: N.canvas2DBg
}, $e = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${N.btnBg};color:${N.btnFg};border:1px solid ${N.btnBorder};padding:${ne.sm} 9px;font-size:${Q.small};font-weight:${ge.bold};border-radius:${Oe.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: N.btnBg,
  bgHover: N.btnBgHover,
  bgActive: N.btnBgActive
}, wa = `background:${N.selectBg};color:${N.textPrimary};border:1px solid ${N.selectBorder};border-radius:${Oe.md};padding:${ne.sm} ${ne.lg};font-size:${Q.body};cursor:pointer;font-family:inherit;`, _a = `display:flex;align-items:center;gap:12px;padding:9px ${ne.xxl};flex-shrink:0;background:${N.toolbarBg};border-bottom:1px solid ${N.toolbarBorder};`, Vn = { min: "236px", max: "340px" }, Ze = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Kr = `display:flex;flex-direction:column;gap:${ne.lg};flex:1;min-width:var(${Ze.min},${Vn.min});max-width:var(${Ze.max},${Vn.max});box-sizing:border-box;padding:${ne.xl};min-height:0;overflow-y:auto;background:${N.panelBg};border:0 solid ${N.splitBorder};border-right-width:var(${Ze.ruleX},1px);border-bottom-width:var(${Ze.ruleY},0);`, Sa = "45%", xi = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Pi = {
  bottom: `display:flex;align-items:center;gap:${ne.xl};flex-wrap:wrap;padding:${ne.lg} ${ne.xxl};flex-shrink:0;background:${N.toolbarBg};border-top:1px solid ${N.toolbarBorder};`
}, Ca = `flex-shrink:0;padding:${ne.sm} ${ne.xl};font-size:${Q.heading};font-weight:${ge.bold};color:${N.labelFg};background:${N.labelBg};`, Tr = `position:absolute;top:${ne.md};left:${ne.md};z-index:10;pointer-events:none;max-width:calc(100% - ${ne.xxl} - ${ne.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${ne.xs} ${ne.lg};border-radius:${Oe.md};font-size:${Q.heading};font-weight:${ge.bold};color:${N.labelFg};background:${N.labelBg};`, ka = `padding:${ne.xs} ${ne.lg};border-radius:${Oe.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${N.labelFg};background:${N.labelBg};`, Ea = `position:absolute;top:${ne.lg};left:${ne.lg};z-index:15;display:flex;align-items:center;gap:${ne.md};min-width:0;max-width:calc(100% - ${ne.xxl} - ${ne.xxl});`, xa = "42px", Pa = `display:flex;flex-direction:column;gap:${ne.xs};padding:${ne.xxl} 18px;border-radius:${Oe.xl};background:${N.cardBg};border:1px solid ${N.cardBorder};`, Ai = `position:absolute;bottom:${ne.xl};right:${ne.xl};display:flex;gap:${ne.sm};padding:${ne.sm};border-radius:${Oe.md};z-index:10;background:${N.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Aa = `font-family:${Q.mono};font-size:${Q.small};line-height:1.7;color:${N.textMuted};`, Or = `font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${N.textMuted2};`, Re = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${ne.xs} ${ne.sm};font-size:${Q.small};`,
  plain: `display:inline-flex;align-items:center;padding:${ne.xs} ${ne.md};border:1px solid transparent;border-radius:${Oe.pill};font-family:inherit;font-size:${Q.small};color:${N.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${N.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${N.btnBg};border-color:${N.btnBorder};color:${N.textPrimary};`,
  active: `cursor:pointer;background:${N.cardBgActive};border-color:${N.btnBorder};color:${N.textPrimary};`
}, Fr = `font-size:${Q.small};line-height:1.6;color:${N.textMuted2};`, Ra = ["debug", "gufe-debug"], Ma = "debug", Na = "GUFE_VIZ_DEBUG";
function Ta() {
  return !!globalThis[Na];
}
function Oa() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Ra.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Ri(e) {
  return e?.hasAttribute?.(Ma) ? !0 : Ta() || Oa();
}
function Fa(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function za(e, t, n) {
  if (!Ri(n)) return;
  const r = Fa(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const Mi = "GUFE_VIZ_VIEW_STATE";
function Ia(e) {
  const t = globalThis[Mi];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const ja = 150, wo = "data-gufe-shell";
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${wo}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = N.appBg, this.style.color = N.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), ja);
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
    return this.#i(), this.#t = z(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${N.appBg};`
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
function Da() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function It() {
  if (Dt === !1) return null;
  const e = Da();
  if (!e)
    return Dt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Dt = !0, e;
  } catch {
    return Dt = !1, null;
  }
}
function La(e) {
  const t = It();
  if (!t) return et.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function qa(e, t) {
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
      const r = La(e);
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
        qa(e, JSON.stringify(r));
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
function Gr(e, t, n = -1 / 0, r = 1 / 0) {
  return Gn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function _t(e, t = "") {
  return Gn(e, t, (n) => typeof n == "string");
}
function Ni() {
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
function Va() {
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
function Ba() {
  const e = It();
  if (e)
    for (const t of Object.keys(Ni()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  et.clear();
}
const Ti = "https://framejs.app", Oi = 1e4;
function Ua(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Ha = "/gufe-dev-bundle.js";
function Ka() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Oi ? e : null;
}
async function Ga() {
  const e = Ka();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Ha);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Oi ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Wa() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Ja(e) {
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
    `globalThis[${JSON.stringify(Mi)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Ya(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Ja(n),
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
function Xa(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, s] of Object.entries(Va()))
    o.endsWith(Xr) || (r[o] = s);
  return { settings: r, views: t };
}
const Za = (e) => `${Ti}/j/${e}`, Qa = (e) => `${Ti}/j/${e}.json`;
async function ec(e, t, n) {
  await fetch(Qa(e), {
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
function tc(e) {
  if (!Ri()) return;
  const t = z(
    "div",
    `display:flex;flex-direction:column;gap:${ne.md};padding-top:${ne.lg};border-top:1px dashed ${N.splitBorder};`
  );
  t.appendChild(
    z(
      "div",
      `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${N.textMuted2};`,
      "debug"
    )
  );
  const n = z("button", `${$e.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = z("div", `font-size:${Q.tiny};line-height:1.5;color:${N.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? N.errorFg : N.textMuted2;
  }, s = (i, a) => {
    const c = z("a", `color:${N.textPrimary};`, i);
    c.href = i, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(z("div", `padding-top:${ne.sm};`, a)), r.style.color = N.textMuted2;
  };
  n.onclick = () => {
    const i = Ua(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, c = Xa(i), d = window.open("", "_blank"), f = Wa(), $ = a, S = String($.name || $.type || "gufe-viz"), m = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), Ga().then((y) => {
      if (!y) {
        d?.close(), m(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return ec(f, Ya(y.js, a, c), S).then(() => {
        m();
        const v = Za(f);
        d && (d.location.href = v), s(v, y.note);
      });
    }).catch((y) => {
      m(), d?.close(), o(`Upload failed: ${y instanceof Error ? y.message : String(y)}`, !0);
    });
  }, t.appendChild(
    z(
      "div",
      `font-size:${Q.tiny};line-height:1.5;color:${N.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function z(e, t, n) {
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
const xt = (e) => e.toLocaleString("en-US"), at = "-", Ct = $e.base, Wn = wa;
function Jn(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const o = z("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), s = e.map((i) => {
    const a = z("button", Ct, i.label);
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
const nc = parseFloat(ne.xl) * 2;
function Fi(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const $ = o.get();
    e.some((S) => S.id === $) && (t = $);
  }
  const s = z("div", "display:flex;min-width:0;"), i = ($) => {
    s.setActive($), o?.set($), n($);
  }, a = Jn(e, t, i), c = jt(e, t, i);
  c.style.display = "none", s.appendChild(a), s.appendChild(c), s.buttons = a, s.setActive = ($) => {
    t = $, a.setActive($), c.value = $;
  };
  let d = !1;
  s.setCompact = ($) => {
    $ !== d && (d = $, a.style.display = d ? "none" : "flex", c.style.display = d ? "" : "none", r.onLayout?.(d));
  };
  let f = () => {
  };
  if (r.fit) {
    const { pane: $, bar: S } = r.fit;
    let m = 0;
    f = Xn($, (y) => {
      d || (m = S.offsetWidth || m), m && s.setCompact(m > y - nc);
    });
  }
  return s.cleanup = () => f(), s;
}
function jt(e, t, n, r) {
  const o = z("select", Wn);
  for (const i of e) {
    const a = z("option", "", i.label);
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
function zi(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const s = z("button", Ct, e);
  s.title = r.title || e, s.setAttribute("aria-pressed", String(o));
  const i = () => {
    s.style.background = o ? $e.bgActive : $e.bg, s.setAttribute("aria-pressed", String(o));
  };
  return s.onclick = () => {
    o = !o, i(), r.remember?.set(o), n(o);
  }, i(), s;
}
function Te(e, t, n) {
  const r = z("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    z("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = z("span");
  return o.innerHTML = `${Ke(e)} <b style="color:${je.primary};">${Ke(t)}</b>`, r.appendChild(o), r;
}
function dt(e, t) {
  const n = z("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ne.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ne.md} ${ne.xxl};border-radius:${Oe.md};font-size:${Q.body};background:${N.warnBg};color:${N.warnFg};border:1px solid ${N.warnBorder};`, e.appendChild(n), n;
}
function pe(e, t = !1) {
  return z(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Q.heading};color:${t ? je.error : je.faint};`,
    e
  );
}
function kt(e) {
  const t = z("div", _a);
  return t.className = "gufe-header", t.titleEl = z(
    "span",
    `font-weight:${ge.bold};font-size:${Q.title};color:${je.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = z(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Q.small};color:${je.muted};`
  ), t.textEl = z("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = z("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Bn(e, t, n = !1) {
  const r = z("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    z(
      "span",
      `flex:0 0 128px;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${je.faint};`,
      e
    )
  );
  const o = z(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${je.primary};` + (n ? `font-family:${Q.mono};font-size:${Q.small};` : `font-size:${Q.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Yn(e) {
  return z(
    "span",
    `padding:1px 7px;border-radius:${Oe.xl};font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.04em;white-space:nowrap;background:${N.badgeBg};color:${N.badgeFg};`,
    e
  );
}
function Wr() {
  return z("div", Pa);
}
function Ii() {
  const e = z("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = z("div", "position:absolute;inset:0;");
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
const _o = { min: 0.2, max: 0.8 }, rc = 5;
function ji(e, t, n, r = {}) {
  const o = r.min ?? _o.min, s = r.max ?? _o.max, i = z(
    "div",
    `flex:0 0 ${rc}px;align-self:stretch;touch-action:none;background:${N.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (y) => {
    a = y, e.style.flexDirection = a ? "column" : "row", i.style.cursor = a ? "row-resize" : "col-resize", i.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const y = e.getBoundingClientRect();
    return y.height > y.width;
  };
  let f = Math.min(s, Math.max(o, r.remember?.get() ?? 0.5));
  const $ = () => {
    t.style.flex = `1 1 ${(f * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - f) * 100).toFixed(2)}%`;
  };
  $(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const v = d();
    v !== a && (c(v), r.onResize?.(f));
  }).observe(e);
  let S = !1;
  i.addEventListener("pointerdown", (y) => {
    S = !0, i.setPointerCapture(y.pointerId), y.preventDefault();
  }), i.addEventListener("pointermove", (y) => {
    if (!S) return;
    const v = e.getBoundingClientRect(), u = a ? v.height : v.width;
    if (u <= 0) return;
    const w = a ? y.clientY - v.top : y.clientX - v.left;
    f = Math.min(s, Math.max(o, w / u)), $();
  });
  const m = (y) => {
    S && (S = !1, i.releasePointerCapture(y.pointerId), r.remember?.set(f), r.onResize?.(f));
  };
  return i.addEventListener("pointerup", m), i.addEventListener("pointercancel", m), i;
}
function Yr(e, t) {
  e.style.setProperty(Ze.min, t ? "0" : Vn.min), e.style.setProperty(Ze.max, t ? "none" : Vn.max), e.style.setProperty(Ze.ruleX, t ? "0" : "1px"), e.style.setProperty(Ze.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? Sa : "";
}
const oc = !1, Xr = ".menuOpen";
function sc() {
  const e = z("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const ic = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: sc
}, ac = ic.openFreeEnergy;
function Zr(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? oc, o = !1;
  const s = z("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), i = z("button", `${$e.base}display:inline-flex;align-items:center;gap:${ne.md};padding:${ne.sm} ${ne.lg};`);
  i.appendChild(ac()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), tc(s)), s.style.display = r ? "flex" : "none", i.style.background = r ? $e.bgActive : $e.bg, i.setAttribute("aria-expanded", String(r));
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
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lt = { exports: {} }, cr = {}, qe = {}, rt = {}, lr = {}, dr = {}, ur = {}, So;
function Un() {
  return So || (So = 1, (function(e) {
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
    function o(w, ...p) {
      const C = [w[0]];
      let _ = 0;
      for (; _ < p.length; )
        a(C, p[_]), C.push(w[++_]);
      return new r(C);
    }
    e._ = o;
    const s = new r("+");
    function i(w, ...p) {
      const C = [m(w[0])];
      let _ = 0;
      for (; _ < p.length; )
        C.push(s), a(C, p[_]), C.push(s, m(w[++_]));
      return c(C), new r(C);
    }
    e.str = i;
    function a(w, p) {
      p instanceof r ? w.push(...p._items) : p instanceof n ? w.push(p) : w.push($(p));
    }
    e.addCodeArg = a;
    function c(w) {
      let p = 1;
      for (; p < w.length - 1; ) {
        if (w[p] === s) {
          const C = d(w[p - 1], w[p + 1]);
          if (C !== void 0) {
            w.splice(p - 1, 3, C);
            continue;
          }
          w[p++] = "+";
        }
        p++;
      }
    }
    function d(w, p) {
      if (p === '""')
        return w;
      if (w === '""')
        return p;
      if (typeof w == "string")
        return p instanceof n || w[w.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${w.slice(0, -1)}${p}"` : p[0] === '"' ? w.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !(w instanceof n))
        return `"${w}${p.slice(1)}`;
    }
    function f(w, p) {
      return p.emptyStr() ? w : w.emptyStr() ? p : i`${w}${p}`;
    }
    e.strConcat = f;
    function $(w) {
      return typeof w == "number" || typeof w == "boolean" || w === null ? w : m(Array.isArray(w) ? w.join(",") : w);
    }
    function S(w) {
      return new r(m(w));
    }
    e.stringify = S;
    function m(w) {
      return JSON.stringify(w).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = m;
    function y(w) {
      return typeof w == "string" && e.IDENTIFIER.test(w) ? new r(`.${w}`) : o`[${w}]`;
    }
    e.getProperty = y;
    function v(w) {
      if (typeof w == "string" && e.IDENTIFIER.test(w))
        return new r(`${w}`);
      throw new Error(`CodeGen: invalid export name: ${w}, use explicit $id name mapping`);
    }
    e.getEsmExportName = v;
    function u(w) {
      return new r(w.toString());
    }
    e.regexpCode = u;
  })(ur)), ur;
}
var fr = {}, Co;
function ko() {
  return Co || (Co = 1, (function(e) {
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
    class s extends t.Name {
      constructor(d, f) {
        super(f), this.prefix = d;
      }
      setValue(d, { property: f, itemIndex: $ }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(f)}[${$}]`;
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
        var $;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const S = this.toName(d), { prefix: m } = S, y = ($ = f.key) !== null && $ !== void 0 ? $ : f.ref;
        let v = this._values[m];
        if (v) {
          const p = v.get(y);
          if (p)
            return p;
        } else
          v = this._values[m] = /* @__PURE__ */ new Map();
        v.set(y, S);
        const u = this._scope[m] || (this._scope[m] = []), w = u.length;
        return u[w] = f.ref, S.setValue(f, { property: m, itemIndex: w }), S;
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
        return this._reduceValues(d, (S) => {
          if (S.value === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return S.value.code;
        }, f, $);
      }
      _reduceValues(d, f, $ = {}, S) {
        let m = t.nil;
        for (const y in d) {
          const v = d[y];
          if (!v)
            continue;
          const u = $[y] = $[y] || /* @__PURE__ */ new Map();
          v.forEach((w) => {
            if (u.has(w))
              return;
            u.set(w, r.Started);
            let p = f(w);
            if (p) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              m = (0, t._)`${m}${C} ${w} = ${p};${this.opts._n}`;
            } else if (p = S?.(w))
              m = (0, t._)`${m}${p}${this.opts._n}`;
            else
              throw new n(w);
            u.set(w, r.Completed);
          });
        }
        return m;
      }
    }
    e.ValueScope = a;
  })(fr)), fr;
}
var Eo;
function se() {
  return Eo || (Eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Un(), n = /* @__PURE__ */ ko();
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
    class s {
      optimizeNodes() {
        return this;
      }
      optimizeNames(b, E) {
        return this;
      }
    }
    class i extends s {
      constructor(b, E, D) {
        super(), this.varKind = b, this.name = E, this.rhs = D;
      }
      render({ es5: b, _n: E }) {
        const D = b ? n.varKinds.var : this.varKind, G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${D} ${this.name}${G};` + E;
      }
      optimizeNames(b, E) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = I(this.rhs, b, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends s {
      constructor(b, E, D) {
        super(), this.lhs = b, this.rhs = E, this.sideEffects = D;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, E) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = I(this.rhs, b, E), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return V(b, this.rhs);
      }
    }
    class c extends a {
      constructor(b, E, D, G) {
        super(b, D, G), this.op = E;
      }
      render({ _n: b }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + b;
      }
    }
    class d extends s {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `${this.label}:` + b;
      }
    }
    class f extends s {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `break${this.label ? ` ${this.label}` : ""};` + b;
      }
    }
    class $ extends s {
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
    class S extends s {
      constructor(b) {
        super(), this.code = b;
      }
      render({ _n: b }) {
        return `${this.code};` + b;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(b, E) {
        return this.code = I(this.code, b, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class m extends s {
      constructor(b = []) {
        super(), this.nodes = b;
      }
      render(b) {
        return this.nodes.reduce((E, D) => E + D.render(b), "");
      }
      optimizeNodes() {
        const { nodes: b } = this;
        let E = b.length;
        for (; E--; ) {
          const D = b[E].optimizeNodes();
          Array.isArray(D) ? b.splice(E, 1, ...D) : D ? b[E] = D : b.splice(E, 1);
        }
        return b.length > 0 ? this : void 0;
      }
      optimizeNames(b, E) {
        const { nodes: D } = this;
        let G = D.length;
        for (; G--; ) {
          const U = D[G];
          U.optimizeNames(b, E) || (K(b, U.names), D.splice(G, 1));
        }
        return D.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, E) => O(b, E.names), {});
      }
    }
    class y extends m {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class v extends m {
    }
    class u extends y {
    }
    u.kind = "else";
    class w extends y {
      constructor(b, E) {
        super(E), this.condition = b;
      }
      render(b) {
        let E = `if(${this.condition})` + super.render(b);
        return this.else && (E += "else " + this.else.render(b)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const b = this.condition;
        if (b === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const D = E.optimizeNodes();
          E = this.else = Array.isArray(D) ? new u(D) : D;
        }
        if (E)
          return b === !1 ? E instanceof w ? E : E.nodes : this.nodes.length ? this : new w(Y(b), E instanceof w ? [E] : E.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, E) {
        var D;
        if (this.else = (D = this.else) === null || D === void 0 ? void 0 : D.optimizeNames(b, E), !!(super.optimizeNames(b, E) || this.else))
          return this.condition = I(this.condition, b, E), this;
      }
      get names() {
        const b = super.names;
        return V(b, this.condition), this.else && O(b, this.else.names), b;
      }
    }
    w.kind = "if";
    class p extends y {
    }
    p.kind = "for";
    class C extends p {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, E) {
        if (super.optimizeNames(b, E))
          return this.iteration = I(this.iteration, b, E), this;
      }
      get names() {
        return O(super.names, this.iteration.names);
      }
    }
    class _ extends p {
      constructor(b, E, D, G) {
        super(), this.varKind = b, this.name = E, this.from = D, this.to = G;
      }
      render(b) {
        const E = b.es5 ? n.varKinds.var : this.varKind, { name: D, from: G, to: U } = this;
        return `for(${E} ${D}=${G}; ${D}<${U}; ${D}++)` + super.render(b);
      }
      get names() {
        const b = V(super.names, this.from);
        return V(b, this.to);
      }
    }
    class l extends p {
      constructor(b, E, D, G) {
        super(), this.loop = b, this.varKind = E, this.name = D, this.iterable = G;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, E) {
        if (super.optimizeNames(b, E))
          return this.iterable = I(this.iterable, b, E), this;
      }
      get names() {
        return O(super.names, this.iterable.names);
      }
    }
    class h extends y {
      constructor(b, E, D) {
        super(), this.name = b, this.args = E, this.async = D;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    h.kind = "func";
    class g extends m {
      render(b) {
        return "return " + super.render(b);
      }
    }
    g.kind = "return";
    class P extends y {
      render(b) {
        let E = "try" + super.render(b);
        return this.catch && (E += this.catch.render(b)), this.finally && (E += this.finally.render(b)), E;
      }
      optimizeNodes() {
        var b, E;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(b, E) {
        var D, G;
        return super.optimizeNames(b, E), (D = this.catch) === null || D === void 0 || D.optimizeNames(b, E), (G = this.finally) === null || G === void 0 || G.optimizeNames(b, E), this;
      }
      get names() {
        const b = super.names;
        return this.catch && O(b, this.catch.names), this.finally && O(b, this.finally.names), b;
      }
    }
    class k extends y {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    k.kind = "catch";
    class T extends y {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    T.kind = "finally";
    class L {
      constructor(b, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = b, this._scope = new n.Scope({ parent: b }), this._nodes = [new v()];
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
      scopeValue(b, E) {
        const D = this._extScope.value(b, E);
        return (this._values[D.prefix] || (this._values[D.prefix] = /* @__PURE__ */ new Set())).add(D), D;
      }
      getScopeValue(b, E) {
        return this._extScope.getValue(b, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(b) {
        return this._extScope.scopeRefs(b, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(b, E, D, G) {
        const U = this._scope.toName(E);
        return D !== void 0 && G && (this._constants[U.str] = D), this._leafNode(new i(b, U, D)), U;
      }
      // `const` declaration (`var` in es5 mode)
      const(b, E, D) {
        return this._def(n.varKinds.const, b, E, D);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(b, E, D) {
        return this._def(n.varKinds.let, b, E, D);
      }
      // `var` declaration with optional assignment
      var(b, E, D) {
        return this._def(n.varKinds.var, b, E, D);
      }
      // assignment code
      assign(b, E, D) {
        return this._leafNode(new a(b, E, D));
      }
      // `+=` code
      add(b, E) {
        return this._leafNode(new c(b, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(b) {
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new S(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const E = ["{"];
        for (const [D, G] of b)
          E.length > 1 && E.push(","), E.push(D), (D !== G || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, G));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, E, D) {
        if (this._blockNode(new w(b)), E && D)
          this.code(E).else().code(D).endIf();
        else if (E)
          this.code(E).endIf();
        else if (D)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new w(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(w, u);
      }
      _for(b, E) {
        return this._blockNode(b), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, E) {
        return this._for(new C(b), E);
      }
      // `for` statement for a range of values
      forRange(b, E, D, G, U = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Z = this._scope.toName(b);
        return this._for(new _(U, Z, E, D), () => G(Z));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, E, D, G = n.varKinds.const) {
        const U = this._scope.toName(b);
        if (this.opts.es5) {
          const Z = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Z}.length`, (te) => {
            this.var(U, (0, t._)`${Z}[${te}]`), D(U);
          });
        }
        return this._for(new l("of", G, U, E), () => D(U));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, E, D, G = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${E})`, D);
        const U = this._scope.toName(b);
        return this._for(new l("in", G, U, E), () => D(U));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
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
        const E = new g();
        if (this._blockNode(E), this.code(b), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(b, E, D) {
        if (!E && !D)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const G = new P();
        if (this._blockNode(G), this.code(b), E) {
          const U = this.name("e");
          this._currNode = G.catch = new k(U), E(U);
        }
        return D && (this._currNode = G.finally = new T(), this.code(D)), this._endBlockNode(k, T);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new $(b));
      }
      // start self-balancing block
      block(b, E) {
        return this._blockStarts.push(this._nodes.length), b && this.code(b).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(b) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const D = this._nodes.length - E;
        if (D < 0 || b !== void 0 && D !== b)
          throw new Error(`CodeGen: wrong number of nodes: ${D} vs ${b} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(b, E = t.nil, D, G) {
        return this._blockNode(new h(b, E, D)), G && this.code(G).endFunc(), this;
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
      _endBlockNode(b, E) {
        const D = this._currNode;
        if (D instanceof b || E && D instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${b.kind}/${E.kind}` : b.kind}"`);
      }
      _elseNode(b) {
        const E = this._currNode;
        if (!(E instanceof w))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = b, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const b = this._nodes;
        return b[b.length - 1];
      }
      set _currNode(b) {
        const E = this._nodes;
        E[E.length - 1] = b;
      }
    }
    e.CodeGen = L;
    function O(M, b) {
      for (const E in b)
        M[E] = (M[E] || 0) + (b[E] || 0);
      return M;
    }
    function V(M, b) {
      return b instanceof t._CodeOrName ? O(M, b.names) : M;
    }
    function I(M, b, E) {
      if (M instanceof t.Name)
        return D(M);
      if (!G(M))
        return M;
      return new t._Code(M._items.reduce((U, Z) => (Z instanceof t.Name && (Z = D(Z)), Z instanceof t._Code ? U.push(...Z._items) : U.push(Z), U), []));
      function D(U) {
        const Z = E[U.str];
        return Z === void 0 || b[U.str] !== 1 ? U : (delete b[U.str], Z);
      }
      function G(U) {
        return U instanceof t._Code && U._items.some((Z) => Z instanceof t.Name && b[Z.str] === 1 && E[Z.str] !== void 0);
      }
    }
    function K(M, b) {
      for (const E in b)
        M[E] = (M[E] || 0) - (b[E] || 0);
    }
    function Y(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${j(M)}`;
    }
    e.not = Y;
    const re = x(e.operators.AND);
    function q(...M) {
      return M.reduce(re);
    }
    e.and = q;
    const W = x(e.operators.OR);
    function R(...M) {
      return M.reduce(W);
    }
    e.or = R;
    function x(M) {
      return (b, E) => b === t.nil ? E : E === t.nil ? b : (0, t._)`${j(b)} ${M} ${j(E)}`;
    }
    function j(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(dr)), dr;
}
var ae = {}, xo;
function ce() {
  if (xo) return ae;
  xo = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.checkStrictMode = ae.getErrorPath = ae.Type = ae.useFunc = ae.setEvaluated = ae.evaluatedPropsToName = ae.mergeEvaluated = ae.eachItem = ae.unescapeJsonPointer = ae.escapeJsonPointer = ae.escapeFragment = ae.unescapeFragment = ae.schemaRefOrVal = ae.schemaHasRulesButRef = ae.schemaHasRules = ae.checkUnknownRules = ae.alwaysValidSchema = ae.toHash = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Un();
  function n(l) {
    const h = {};
    for (const g of l)
      h[g] = !0;
    return h;
  }
  ae.toHash = n;
  function r(l, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (o(l, h), !s(h, l.self.RULES.all));
  }
  ae.alwaysValidSchema = r;
  function o(l, h = l.schema) {
    const { opts: g, self: P } = l;
    if (!g.strictSchema || typeof h == "boolean")
      return;
    const k = P.RULES.keywords;
    for (const T in h)
      k[T] || _(l, `unknown keyword: "${T}"`);
  }
  ae.checkUnknownRules = o;
  function s(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (h[g])
        return !0;
    return !1;
  }
  ae.schemaHasRules = s;
  function i(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const g in l)
      if (g !== "$ref" && h.all[g])
        return !0;
    return !1;
  }
  ae.schemaHasRulesButRef = i;
  function a({ topSchemaRef: l, schemaPath: h }, g, P, k) {
    if (!k) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${l}${h}${(0, e.getProperty)(P)}`;
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
  function S(l, h) {
    if (Array.isArray(l))
      for (const g of l)
        h(g);
    else
      h(l);
  }
  ae.eachItem = S;
  function m({ mergeNames: l, mergeToName: h, mergeValues: g, resultToName: P }) {
    return (k, T, L, O) => {
      const V = L === void 0 ? T : L instanceof e.Name ? (T instanceof e.Name ? l(k, T, L) : h(k, T, L), L) : T instanceof e.Name ? (h(k, L, T), T) : g(T, L);
      return O === e.Name && !(V instanceof e.Name) ? P(k, V) : V;
    };
  }
  ae.mergeEvaluated = {
    props: m({
      mergeNames: (l, h, g) => l.if((0, e._)`${g} !== true && ${h} !== undefined`, () => {
        l.if((0, e._)`${h} === true`, () => l.assign(g, !0), () => l.assign(g, (0, e._)`${g} || {}`).code((0, e._)`Object.assign(${g}, ${h})`));
      }),
      mergeToName: (l, h, g) => l.if((0, e._)`${g} !== true`, () => {
        h === !0 ? l.assign(g, !0) : (l.assign(g, (0, e._)`${g} || {}`), v(l, g, h));
      }),
      mergeValues: (l, h) => l === !0 ? !0 : { ...l, ...h },
      resultToName: y
    }),
    items: m({
      mergeNames: (l, h, g) => l.if((0, e._)`${g} !== true && ${h} !== undefined`, () => l.assign(g, (0, e._)`${h} === true ? true : ${g} > ${h} ? ${g} : ${h}`)),
      mergeToName: (l, h, g) => l.if((0, e._)`${g} !== true`, () => l.assign(g, h === !0 ? !0 : (0, e._)`${g} > ${h} ? ${g} : ${h}`)),
      mergeValues: (l, h) => l === !0 ? !0 : Math.max(l, h),
      resultToName: (l, h) => l.var("items", h)
    })
  };
  function y(l, h) {
    if (h === !0)
      return l.var("props", !0);
    const g = l.var("props", (0, e._)`{}`);
    return h !== void 0 && v(l, g, h), g;
  }
  ae.evaluatedPropsToName = y;
  function v(l, h, g) {
    Object.keys(g).forEach((P) => l.assign((0, e._)`${h}${(0, e.getProperty)(P)}`, !0));
  }
  ae.setEvaluated = v;
  const u = {};
  function w(l, h) {
    return l.scopeValue("func", {
      ref: h,
      code: u[h.code] || (u[h.code] = new t._Code(h.code))
    });
  }
  ae.useFunc = w;
  var p;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(p || (ae.Type = p = {}));
  function C(l, h, g) {
    if (l instanceof e.Name) {
      const P = h === p.Num;
      return g ? P ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : P ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(l).toString() : "/" + f(l);
  }
  ae.getErrorPath = C;
  function _(l, h, g = l.opts.strictSchema) {
    if (g) {
      if (h = `strict mode: ${h}`, g === !0)
        throw new Error(h);
      l.self.logger.warn(h);
    }
  }
  return ae.checkStrictMode = _, ae;
}
var qt = {}, Po;
function Fe() {
  if (Po) return qt;
  Po = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
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
var Ao;
function Zn() {
  return Ao || (Ao = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Fe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: w }) => w ? (0, t.str)`"${u}" keyword must be ${w} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, w = e.keywordError, p, C) {
      const { it: _ } = u, { gen: l, compositeRule: h, allErrors: g } = _, P = $(u, w, p);
      C ?? (h || g) ? c(l, P) : d(_, (0, t._)`[${P}]`);
    }
    e.reportError = o;
    function s(u, w = e.keywordError, p) {
      const { it: C } = u, { gen: _, compositeRule: l, allErrors: h } = C, g = $(u, w, p);
      c(_, g), l || h || d(C, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(u, w) {
      u.assign(r.default.errors, w), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(w, () => u.assign((0, t._)`${r.default.vErrors}.length`, w), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: u, keyword: w, schemaValue: p, data: C, errsCount: _, it: l }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const h = u.name("err");
      u.forRange("i", _, r.default.errors, (g) => {
        u.const(h, (0, t._)`${r.default.vErrors}[${g}]`), u.if((0, t._)`${h}.instancePath === undefined`, () => u.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${w}`), l.opts.verbose && (u.assign((0, t._)`${h}.schema`, p), u.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(u, w) {
      const p = u.const("err", w);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, w) {
      const { gen: p, validateName: C, schemaEnv: _ } = u;
      _.$async ? p.throw((0, t._)`new ${u.ValidationError}(${w})`) : (p.assign((0, t._)`${C}.errors`, w), p.return(!1));
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
    function $(u, w, p) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : S(u, w, p);
    }
    function S(u, w, p = {}) {
      const { gen: C, it: _ } = u, l = [
        m(_, p),
        y(u, p)
      ];
      return v(u, w, l), C.object(...l);
    }
    function m({ errorPath: u }, { instancePath: w }) {
      const p = w ? (0, t.str)`${u}${(0, n.getErrorPath)(w, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, p)];
    }
    function y({ keyword: u, it: { errSchemaPath: w } }, { schemaPath: p, parentSchema: C }) {
      let _ = C ? w : (0, t.str)`${w}/${u}`;
      return p && (_ = (0, t.str)`${_}${(0, n.getErrorPath)(p, n.Type.Str)}`), [f.schemaPath, _];
    }
    function v(u, { params: w, message: p }, C) {
      const { keyword: _, data: l, schemaValue: h, it: g } = u, { opts: P, propertyName: k, topSchemaRef: T, schemaPath: L } = g;
      C.push([f.keyword, _], [f.params, typeof w == "function" ? w(u) : w || (0, t._)`{}`]), P.messages && C.push([f.message, typeof p == "function" ? p(u) : p]), P.verbose && C.push([f.schema, h], [f.parentSchema, (0, t._)`${T}${L}`], [r.default.data, l]), k && C.push([f.propertyName, k]);
    }
  })(lr)), lr;
}
var Ro;
function lc() {
  if (Ro) return rt;
  Ro = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.boolOrEmptySchema = rt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Fe(), r = {
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
function Di() {
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
var Ve = {}, No;
function Li() {
  if (No) return Ve;
  No = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.shouldUseRule = Ve.shouldUseGroup = Ve.schemaHasRulesForType = void 0;
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
var To;
function Hn() {
  if (To) return ye;
  To = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.reportTypeError = ye.checkDataTypes = ye.checkDataType = ye.coerceAndCheckDataType = ye.getJSONTypes = ye.getSchemaTypes = ye.DataType = void 0;
  const e = /* @__PURE__ */ Di(), t = /* @__PURE__ */ Li(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ se(), o = /* @__PURE__ */ ce();
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
    const { gen: _, data: l, opts: h } = p, g = f(C, h.coerceTypes), P = C.length > 0 && !(g.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(p, C[0]));
    if (P) {
      const k = y(C, l, h.strictNumbers, s.Wrong);
      _.if(k, () => {
        g.length ? $(p, C, g) : u(p);
      });
    }
    return P;
  }
  ye.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(p, C) {
    return C ? p.filter((_) => d.has(_) || C === "array" && _ === "array") : [];
  }
  function $(p, C, _) {
    const { gen: l, data: h, opts: g } = p, P = l.let("dataType", (0, r._)`typeof ${h}`), k = l.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && l.if((0, r._)`${P} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => l.assign(h, (0, r._)`${h}[0]`).assign(P, (0, r._)`typeof ${h}`).if(y(C, h, g.strictNumbers), () => l.assign(k, h))), l.if((0, r._)`${k} !== undefined`);
    for (const L of _)
      (d.has(L) || L === "array" && g.coerceTypes === "array") && T(L);
    l.else(), u(p), l.endIf(), l.if((0, r._)`${k} !== undefined`, () => {
      l.assign(h, k), S(p, k);
    });
    function T(L) {
      switch (L) {
        case "string":
          l.elseIf((0, r._)`${P} == "number" || ${P} == "boolean"`).assign(k, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(k, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${P} == "boolean" || ${h} === null
              || (${P} == "string" && ${h} && ${h} == +${h})`).assign(k, (0, r._)`+${h}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${P} === "boolean" || ${h} === null
              || (${P} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(k, (0, r._)`+${h}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(k, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(k, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), l.assign(k, null);
          return;
        case "array":
          l.elseIf((0, r._)`${P} === "string" || ${P} === "number"
              || ${P} === "boolean" || ${h} === null`).assign(k, (0, r._)`[${h}]`);
      }
    }
  }
  function S({ gen: p, parentData: C, parentDataProperty: _ }, l) {
    p.if((0, r._)`${C} !== undefined`, () => p.assign((0, r._)`${C}[${_}]`, l));
  }
  function m(p, C, _, l = s.Correct) {
    const h = l === s.Correct ? r.operators.EQ : r.operators.NEQ;
    let g;
    switch (p) {
      case "null":
        return (0, r._)`${C} ${h} null`;
      case "array":
        g = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        g = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        g = P((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        g = P();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${p}`;
    }
    return l === s.Correct ? g : (0, r.not)(g);
    function P(k = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, k, _ ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ye.checkDataType = m;
  function y(p, C, _, l) {
    if (p.length === 1)
      return m(p[0], C, _, l);
    let h;
    const g = (0, o.toHash)(p);
    if (g.array && g.object) {
      const P = (0, r._)`typeof ${C} != "object"`;
      h = g.null ? P : (0, r._)`!${C} || ${P}`, delete g.null, delete g.array, delete g.object;
    } else
      h = r.nil;
    g.number && delete g.integer;
    for (const P in g)
      h = (0, r.and)(h, m(P, C, _, l));
    return h;
  }
  ye.checkDataTypes = y;
  const v = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: C }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${C}}`
  };
  function u(p) {
    const C = w(p);
    (0, n.reportError)(C, v);
  }
  ye.reportTypeError = u;
  function w(p) {
    const { gen: C, data: _, schema: l } = p, h = (0, o.schemaRefOrVal)(p, l, "type");
    return {
      gen: C,
      keyword: "type",
      data: _,
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
var Pt = {}, Oo;
function dc() {
  if (Oo) return Pt;
  Oo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.assignDefaults = void 0;
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
    const $ = (0, e._)`${d}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${$}`);
      return;
    }
    let S = (0, e._)`${$} === undefined`;
    f.useDefaults === "empty" && (S = (0, e._)`${S} || ${$} === null || ${$} === ""`), a.if(S, (0, e._)`${$} = ${(0, e.stringify)(i)}`);
  }
  return Pt;
}
var Ae = {}, ue = {}, Fo;
function ze() {
  if (Fo) return ue;
  Fo = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.validateUnion = ue.validateArray = ue.usePattern = ue.callValidateCode = ue.schemaProperties = ue.allSchemaProperties = ue.noPropertyInData = ue.propertyInData = ue.isOwnProperty = ue.hasPropFunc = ue.reportMissingProp = ue.checkMissingProp = ue.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ ce();
  function o(p, C) {
    const { gen: _, data: l, it: h } = p;
    _.if(f(_, l, C, h.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${C}` }, !0), p.error();
    });
  }
  ue.checkReportMissingProp = o;
  function s({ gen: p, data: C, it: { opts: _ } }, l, h) {
    return (0, e.or)(...l.map((g) => (0, e.and)(f(p, C, g, _.ownProperties), (0, e._)`${h} = ${g}`)));
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
  function c(p, C, _) {
    return (0, e._)`${a(p)}.call(${C}, ${_})`;
  }
  ue.isOwnProperty = c;
  function d(p, C, _, l) {
    const h = (0, e._)`${C}${(0, e.getProperty)(_)} !== undefined`;
    return l ? (0, e._)`${h} && ${c(p, C, _)}` : h;
  }
  ue.propertyInData = d;
  function f(p, C, _, l) {
    const h = (0, e._)`${C}${(0, e.getProperty)(_)} === undefined`;
    return l ? (0, e.or)(h, (0, e.not)(c(p, C, _))) : h;
  }
  ue.noPropertyInData = f;
  function $(p) {
    return p ? Object.keys(p).filter((C) => C !== "__proto__") : [];
  }
  ue.allSchemaProperties = $;
  function S(p, C) {
    return $(C).filter((_) => !(0, t.alwaysValidSchema)(p, C[_]));
  }
  ue.schemaProperties = S;
  function m({ schemaCode: p, data: C, it: { gen: _, topSchemaRef: l, schemaPath: h, errorPath: g }, it: P }, k, T, L) {
    const O = L ? (0, e._)`${p}, ${C}, ${l}${h}` : C, V = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, P.parentData],
      [n.default.parentDataProperty, P.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    P.opts.dynamicRef && V.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const I = (0, e._)`${O}, ${_.object(...V)}`;
    return T !== e.nil ? (0, e._)`${k}.call(${T}, ${I})` : (0, e._)`${k}(${I})`;
  }
  ue.callValidateCode = m;
  const y = (0, e._)`new RegExp`;
  function v({ gen: p, it: { opts: C } }, _) {
    const l = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, g = h(_, l);
    return p.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${h.code === "new RegExp" ? y : (0, r.useFunc)(p, h)}(${_}, ${l})`
    });
  }
  ue.usePattern = v;
  function u(p) {
    const { gen: C, data: _, keyword: l, it: h } = p, g = C.name("valid");
    if (h.allErrors) {
      const k = C.let("valid", !0);
      return P(() => C.assign(k, !1)), k;
    }
    return C.var(g, !0), P(() => C.break()), g;
    function P(k) {
      const T = C.const("len", (0, e._)`${_}.length`);
      C.forRange("i", 0, T, (L) => {
        p.subschema({
          keyword: l,
          dataProp: L,
          dataPropType: t.Type.Num
        }, g), C.if((0, e.not)(g), k);
      });
    }
  }
  ue.validateArray = u;
  function w(p) {
    const { gen: C, schema: _, keyword: l, it: h } = p;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((T) => (0, t.alwaysValidSchema)(h, T)) && !h.opts.unevaluated)
      return;
    const P = C.let("valid", !1), k = C.name("_valid");
    C.block(() => _.forEach((T, L) => {
      const O = p.subschema({
        keyword: l,
        schemaProp: L,
        compositeRule: !0
      }, k);
      C.assign(P, (0, e._)`${P} || ${k}`), p.mergeValidEvaluated(O, k) || C.if((0, e.not)(P));
    })), p.result(P, () => p.reset(), () => p.error(!0));
  }
  return ue.validateUnion = w, ue;
}
var zo;
function uc() {
  if (zo) return Ae;
  zo = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.validateKeywordUsage = Ae.validSchemaType = Ae.funcKeywordCode = Ae.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Zn();
  function o(S, m) {
    const { gen: y, keyword: v, schema: u, parentSchema: w, it: p } = S, C = m.macro.call(p.self, u, w, p), _ = d(y, v, C);
    p.opts.validateSchema !== !1 && p.self.validateSchema(C, !0);
    const l = y.name("valid");
    S.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${v}`,
      topSchemaRef: _,
      compositeRule: !0
    }, l), S.pass(l, () => S.error(!0));
  }
  Ae.macroKeywordCode = o;
  function s(S, m) {
    var y;
    const { gen: v, keyword: u, schema: w, parentSchema: p, $data: C, it: _ } = S;
    c(_, m);
    const l = !C && m.compile ? m.compile.call(_.self, w, p, _) : m.validate, h = d(v, u, l), g = v.let("valid");
    S.block$data(g, P), S.ok((y = m.valid) !== null && y !== void 0 ? y : g);
    function P() {
      if (m.errors === !1)
        L(), m.modifying && i(S), O(() => S.error());
      else {
        const V = m.async ? k() : T();
        m.modifying && i(S), O(() => a(S, V));
      }
    }
    function k() {
      const V = v.let("ruleErrs", null);
      return v.try(() => L((0, e._)`await `), (I) => v.assign(g, !1).if((0, e._)`${I} instanceof ${_.ValidationError}`, () => v.assign(V, (0, e._)`${I}.errors`), () => v.throw(I))), V;
    }
    function T() {
      const V = (0, e._)`${h}.errors`;
      return v.assign(V, null), L(e.nil), V;
    }
    function L(V = m.async ? (0, e._)`await ` : e.nil) {
      const I = _.opts.passContext ? t.default.this : t.default.self, K = !("compile" in m && !C || m.schema === !1);
      v.assign(g, (0, e._)`${V}${(0, n.callValidateCode)(S, h, I, K)}`, m.modifying);
    }
    function O(V) {
      var I;
      v.if((0, e.not)((I = m.valid) !== null && I !== void 0 ? I : g), V);
    }
  }
  Ae.funcKeywordCode = s;
  function i(S) {
    const { gen: m, data: y, it: v } = S;
    m.if(v.parentData, () => m.assign(y, (0, e._)`${v.parentData}[${v.parentDataProperty}]`));
  }
  function a(S, m) {
    const { gen: y } = S;
    y.if((0, e._)`Array.isArray(${m})`, () => {
      y.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${m} : ${t.default.vErrors}.concat(${m})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(S);
    }, () => S.error());
  }
  function c({ schemaEnv: S }, m) {
    if (m.async && !S.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(S, m, y) {
    if (y === void 0)
      throw new Error(`keyword "${m}" failed to compile`);
    return S.scopeValue("keyword", typeof y == "function" ? { ref: y } : { ref: y, code: (0, e.stringify)(y) });
  }
  function f(S, m, y = !1) {
    return !m.length || m.some((v) => v === "array" ? Array.isArray(S) : v === "object" ? S && typeof S == "object" && !Array.isArray(S) : typeof S == v || y && typeof S > "u");
  }
  Ae.validSchemaType = f;
  function $({ schema: S, opts: m, self: y, errSchemaPath: v }, u, w) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(w) : u.keyword !== w)
      throw new Error("ajv implementation error");
    const p = u.dependencies;
    if (p?.some((C) => !Object.prototype.hasOwnProperty.call(S, C)))
      throw new Error(`parent schema must have dependencies of ${w}: ${p.join(",")}`);
    if (u.validateSchema && !u.validateSchema(S[w])) {
      const _ = `keyword "${w}" value is invalid at path "${v}": ` + y.errorsText(u.validateSchema.errors);
      if (m.validateSchema === "log")
        y.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return Ae.validateKeywordUsage = $, Ae;
}
var Be = {}, Io;
function fc() {
  if (Io) return Be;
  Io = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce();
  function n(s, { keyword: i, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: f, topSchemaRef: $ }) {
    if (i !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const S = s.schema[i];
      return a === void 0 ? {
        schema: S,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}`
      } : {
        schema: S[a],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
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
  function r(s, i, { dataProp: a, dataPropType: c, data: d, dataTypes: f, propertyName: $ }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: S } = i;
    if (a !== void 0) {
      const { errorPath: y, dataPathArr: v, opts: u } = i, w = S.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      m(w), s.errorPath = (0, e.str)`${y}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [...v, s.parentDataProperty];
    }
    if (d !== void 0) {
      const y = d instanceof e.Name ? d : S.let("data", d, !0);
      m(y), $ !== void 0 && (s.propertyName = $);
    }
    f && (s.dataTypes = f);
    function m(y) {
      s.data = y, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, y];
    }
  }
  Be.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: f }) {
    c !== void 0 && (s.compositeRule = c), d !== void 0 && (s.createErrors = d), f !== void 0 && (s.allErrors = f), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return Be.extendSubschemaMode = o, Be;
}
var be = {}, pr, jo;
function qi() {
  return jo || (jo = 1, pr = function e(t, n) {
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
  }), pr;
}
var hr = { exports: {} }, Do;
function pc() {
  if (Do) return hr.exports;
  Do = 1;
  var e = hr.exports = function(r, o, s) {
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
  function t(r, o, s, i, a, c, d, f, $, S) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      o(i, a, c, d, f, $, S);
      for (var m in i) {
        var y = i[m];
        if (Array.isArray(y)) {
          if (m in e.arrayKeywords)
            for (var v = 0; v < y.length; v++)
              t(r, o, s, y[v], a + "/" + m + "/" + v, c, a, m, i, v);
        } else if (m in e.propsKeywords) {
          if (y && typeof y == "object")
            for (var u in y)
              t(r, o, s, y[u], a + "/" + m + "/" + n(u), c, a, m, i, u);
        } else (m in e.keywords || r.allKeys && !(m in e.skipKeywords)) && t(r, o, s, y, a + "/" + m, c, a, m, i);
      }
      s(i, a, c, d, f, $, S);
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
  const e = /* @__PURE__ */ ce(), t = qi(), n = pc(), r = /* @__PURE__ */ new Set([
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
  function o(v, u = !0) {
    return typeof v == "boolean" ? !0 : u === !0 ? !i(v) : u ? a(v) <= u : !1;
  }
  be.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(v) {
    for (const u in v) {
      if (s.has(u))
        return !0;
      const w = v[u];
      if (Array.isArray(w) && w.some(i) || typeof w == "object" && i(w))
        return !0;
    }
    return !1;
  }
  function a(v) {
    let u = 0;
    for (const w in v) {
      if (w === "$ref")
        return 1 / 0;
      if (u++, !r.has(w) && (typeof v[w] == "object" && (0, e.eachItem)(v[w], (p) => u += a(p)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c(v, u = "", w) {
    w !== !1 && (u = $(u));
    const p = v.parse(u);
    return d(v, p);
  }
  be.getFullPath = c;
  function d(v, u) {
    return v.serialize(u).split("#")[0] + "#";
  }
  be._getFullPath = d;
  const f = /#\/?$/;
  function $(v) {
    return v ? v.replace(f, "") : "";
  }
  be.normalizeId = $;
  function S(v, u, w) {
    return w = $(w), v.resolve(u, w);
  }
  be.resolveUrl = S;
  const m = /^[a-z_][-a-z0-9._]*$/i;
  function y(v, u) {
    if (typeof v == "boolean")
      return {};
    const { schemaId: w, uriResolver: p } = this.opts, C = $(v[w] || u), _ = { "": C }, l = c(p, C, !1), h = {}, g = /* @__PURE__ */ new Set();
    return n(v, { allKeys: !0 }, (T, L, O, V) => {
      if (V === void 0)
        return;
      const I = l + L;
      let K = _[V];
      typeof T[w] == "string" && (K = Y.call(this, T[w])), re.call(this, T.$anchor), re.call(this, T.$dynamicAnchor), _[L] = K;
      function Y(q) {
        const W = this.opts.uriResolver.resolve;
        if (q = $(K ? W(K, q) : q), g.has(q))
          throw k(q);
        g.add(q);
        let R = this.refs[q];
        return typeof R == "string" && (R = this.refs[R]), typeof R == "object" ? P(T, R.schema, q) : q !== $(I) && (q[0] === "#" ? (P(T, h[q], q), h[q] = T) : this.refs[q] = I), q;
      }
      function re(q) {
        if (typeof q == "string") {
          if (!m.test(q))
            throw new Error(`invalid anchor "${q}"`);
          Y.call(this, `#${q}`);
        }
      }
    }), h;
    function P(T, L, O) {
      if (L !== void 0 && !t(T, L))
        throw k(O);
    }
    function k(T) {
      return new Error(`reference "${T}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = y, be;
}
var qo;
function er() {
  if (qo) return qe;
  qo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ lc(), t = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ Li(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ dc(), s = /* @__PURE__ */ uc(), i = /* @__PURE__ */ fc(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Fe(), d = /* @__PURE__ */ Qn(), f = /* @__PURE__ */ ce(), $ = /* @__PURE__ */ Zn();
  function S(A) {
    if (l(A) && (g(A), _(A))) {
      u(A);
      return;
    }
    m(A, () => (0, e.topBoolOrEmptySchema)(A));
  }
  qe.validateFunctionCode = S;
  function m({ gen: A, validateName: F, schema: B, schemaEnv: J, opts: ee }, X) {
    ee.code.es5 ? A.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      A.code((0, a._)`"use strict"; ${p(B, ee)}`), v(A, ee), A.code(X);
    }) : A.func(F, (0, a._)`${c.default.data}, ${y(ee)}`, J.$async, () => A.code(p(B, ee)).code(X));
  }
  function y(A) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${A.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function v(A, F) {
    A.if(c.default.valCxt, () => {
      A.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), A.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), A.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), A.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && A.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      A.var(c.default.instancePath, (0, a._)`""`), A.var(c.default.parentData, (0, a._)`undefined`), A.var(c.default.parentDataProperty, (0, a._)`undefined`), A.var(c.default.rootData, c.default.data), F.dynamicRef && A.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(A) {
    const { schema: F, opts: B, gen: J } = A;
    m(A, () => {
      B.$comment && F.$comment && V(A), T(A), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), B.unevaluated && w(A), P(A), I(A);
    });
  }
  function w(A) {
    const { gen: F, validateName: B } = A;
    A.evaluated = F.const("evaluated", (0, a._)`${B}.evaluated`), F.if((0, a._)`${A.evaluated}.dynamicProps`, () => F.assign((0, a._)`${A.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${A.evaluated}.dynamicItems`, () => F.assign((0, a._)`${A.evaluated}.items`, (0, a._)`undefined`));
  }
  function p(A, F) {
    const B = typeof A == "object" && A[F.schemaId];
    return B && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function C(A, F) {
    if (l(A) && (g(A), _(A))) {
      h(A, F);
      return;
    }
    (0, e.boolOrEmptySchema)(A, F);
  }
  function _({ schema: A, self: F }) {
    if (typeof A == "boolean")
      return !A;
    for (const B in A)
      if (F.RULES.all[B])
        return !0;
    return !1;
  }
  function l(A) {
    return typeof A.schema != "boolean";
  }
  function h(A, F) {
    const { schema: B, gen: J, opts: ee } = A;
    ee.$comment && B.$comment && V(A), L(A), O(A);
    const X = J.const("_errs", c.default.errors);
    P(A, X), J.var(F, (0, a._)`${X} === ${c.default.errors}`);
  }
  function g(A) {
    (0, f.checkUnknownRules)(A), k(A);
  }
  function P(A, F) {
    if (A.opts.jtd)
      return Y(A, [], !1, F);
    const B = (0, t.getSchemaTypes)(A.schema), J = (0, t.coerceAndCheckDataType)(A, B);
    Y(A, B, !J, F);
  }
  function k(A) {
    const { schema: F, errSchemaPath: B, opts: J, self: ee } = A;
    F.$ref && J.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(F, ee.RULES) && ee.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function T(A) {
    const { schema: F, opts: B } = A;
    F.default !== void 0 && B.useDefaults && B.strictSchema && (0, f.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function L(A) {
    const F = A.schema[A.opts.schemaId];
    F && (A.baseId = (0, d.resolveUrl)(A.opts.uriResolver, A.baseId, F));
  }
  function O(A) {
    if (A.schema.$async && !A.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function V({ gen: A, schemaEnv: F, schema: B, errSchemaPath: J, opts: ee }) {
    const X = B.$comment;
    if (ee.$comment === !0)
      A.code((0, a._)`${c.default.self}.logger.log(${X})`);
    else if (typeof ee.$comment == "function") {
      const oe = (0, a.str)`${J}/$comment`, ie = A.scopeValue("root", { ref: F.root });
      A.code((0, a._)`${c.default.self}.opts.$comment(${X}, ${oe}, ${ie}.schema)`);
    }
  }
  function I(A) {
    const { gen: F, schemaEnv: B, validateName: J, ValidationError: ee, opts: X } = A;
    B.$async ? F.if((0, a._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, a._)`new ${ee}(${c.default.vErrors})`)) : (F.assign((0, a._)`${J}.errors`, c.default.vErrors), X.unevaluated && K(A), F.return((0, a._)`${c.default.errors} === 0`));
  }
  function K({ gen: A, evaluated: F, props: B, items: J }) {
    B instanceof a.Name && A.assign((0, a._)`${F}.props`, B), J instanceof a.Name && A.assign((0, a._)`${F}.items`, J);
  }
  function Y(A, F, B, J) {
    const { gen: ee, schema: X, data: oe, allErrors: ie, opts: de, self: fe } = A, { RULES: he } = fe;
    if (X.$ref && (de.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(X, he))) {
      ee.block(() => G(A, "$ref", he.all.$ref.definition));
      return;
    }
    de.jtd || q(A, F), ee.block(() => {
      for (const ve of he.rules)
        De(ve);
      De(he.post);
    });
    function De(ve) {
      (0, n.shouldUseGroup)(X, ve) && (ve.type ? (ee.if((0, r.checkDataType)(ve.type, oe, de.strictNumbers)), re(A, ve), F.length === 1 && F[0] === ve.type && B && (ee.else(), (0, r.reportTypeError)(A)), ee.endIf()) : re(A, ve), ie || ee.if((0, a._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function re(A, F) {
    const { gen: B, schema: J, opts: { useDefaults: ee } } = A;
    ee && (0, o.assignDefaults)(A, F.type), B.block(() => {
      for (const X of F.rules)
        (0, n.shouldUseRule)(J, X) && G(A, X.keyword, X.definition, F.type);
    });
  }
  function q(A, F) {
    A.schemaEnv.meta || !A.opts.strictTypes || (W(A, F), A.opts.allowUnionTypes || R(A, F), x(A, A.dataTypes));
  }
  function W(A, F) {
    if (F.length) {
      if (!A.dataTypes.length) {
        A.dataTypes = F;
        return;
      }
      F.forEach((B) => {
        M(A.dataTypes, B) || E(A, `type "${B}" not allowed by context "${A.dataTypes.join(",")}"`);
      }), b(A, F);
    }
  }
  function R(A, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && E(A, "use allowUnionTypes to allow union type keyword");
  }
  function x(A, F) {
    const B = A.self.RULES.all;
    for (const J in B) {
      const ee = B[J];
      if (typeof ee == "object" && (0, n.shouldUseRule)(A.schema, ee)) {
        const { type: X } = ee.definition;
        X.length && !X.some((oe) => j(F, oe)) && E(A, `missing type "${X.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function j(A, F) {
    return A.includes(F) || F === "number" && A.includes("integer");
  }
  function M(A, F) {
    return A.includes(F) || F === "integer" && A.includes("number");
  }
  function b(A, F) {
    const B = [];
    for (const J of A.dataTypes)
      M(F, J) ? B.push(J) : F.includes("integer") && J === "number" && B.push("integer");
    A.dataTypes = B;
  }
  function E(A, F) {
    const B = A.schemaEnv.baseId + A.errSchemaPath;
    F += ` at "${B}" (strictTypes)`, (0, f.checkStrictMode)(A, F, A.opts.strictTypes);
  }
  class D {
    constructor(F, B, J) {
      if ((0, s.validateKeywordUsage)(F, B, J), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = J, this.data = F.data, this.schema = F.schema[J], this.$data = B.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(F, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = B, this.$data)
        this.schemaCode = F.gen.const("vSchema", te(this.$data, F));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = F.gen.const("_errs", c.default.errors));
    }
    result(F, B, J) {
      this.failResult((0, a.not)(F), B, J);
    }
    failResult(F, B, J) {
      this.gen.if(F), J ? J() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(F, B) {
      this.failResult((0, a.not)(F), void 0, B);
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
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), F)})`);
    }
    error(F, B, J) {
      if (B) {
        this.setParams(B), this._error(F, J), this.setParams({});
        return;
      }
      this._error(F, J);
    }
    _error(F, B) {
      (F ? $.reportExtraError : $.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, $.reportError)(this, this.def.$dataError || $.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, $.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(F) {
      this.allErrors || this.gen.if(F);
    }
    setParams(F, B) {
      B ? Object.assign(this.params, F) : this.params = F;
    }
    block$data(F, B, J = a.nil) {
      this.gen.block(() => {
        this.check$data(F, J), B();
      });
    }
    check$data(F = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: J, schemaCode: ee, schemaType: X, def: oe } = this;
      J.if((0, a.or)((0, a._)`${ee} === undefined`, B)), F !== a.nil && J.assign(F, !0), (X.length || oe.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), F !== a.nil && J.assign(F, !1)), J.else();
    }
    invalid$data() {
      const { gen: F, schemaCode: B, schemaType: J, def: ee, it: X } = this;
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
          const de = F.scopeValue("validate$data", { ref: ee.validateSchema });
          return (0, a._)`!${de}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(F, B) {
      const J = (0, i.getSubschema)(this.it, F);
      (0, i.extendSubschemaData)(J, this.it, F), (0, i.extendSubschemaMode)(J, F);
      const ee = { ...this.it, ...J, items: void 0, props: void 0 };
      return C(ee, B), ee;
    }
    mergeEvaluated(F, B) {
      const { it: J, gen: ee } = this;
      J.opts.unevaluated && (J.props !== !0 && F.props !== void 0 && (J.props = f.mergeEvaluated.props(ee, F.props, J.props, B)), J.items !== !0 && F.items !== void 0 && (J.items = f.mergeEvaluated.items(ee, F.items, J.items, B)));
    }
    mergeValidEvaluated(F, B) {
      const { it: J, gen: ee } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return ee.if(B, () => this.mergeEvaluated(F, a.Name)), !0;
    }
  }
  qe.KeywordCxt = D;
  function G(A, F, B, J) {
    const ee = new D(A, B, F);
    "code" in B ? B.code(ee, J) : ee.$data && B.validate ? (0, s.funcKeywordCode)(ee, B) : "macro" in B ? (0, s.macroKeywordCode)(ee, B) : (B.compile || B.validate) && (0, s.funcKeywordCode)(ee, B);
  }
  const U = /^\/(?:[^~]|~0|~1)*$/, Z = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function te(A, { dataLevel: F, dataNames: B, dataPathArr: J }) {
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
        if (he >= F)
          throw new Error(de("property/index", he));
        return J[F - he];
      }
      if (he > F)
        throw new Error(de("data", he));
      if (X = B[F - he], !ee)
        return X;
    }
    let oe = X;
    const ie = ee.split("/");
    for (const fe of ie)
      fe && (X = (0, a._)`${X}${(0, a.getProperty)((0, f.unescapeJsonPointer)(fe))}`, oe = (0, a._)`${oe} && ${X}`);
    return oe;
    function de(fe, he) {
      return `Cannot access ${fe} ${he} levels up, current level is ${F}`;
    }
  }
  return qe.getData = te, qe;
}
var Vt = {}, Vo;
function Qr() {
  if (Vo) return Vt;
  Vo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Vt.default = e, Vt;
}
var Bt = {}, Bo;
function tr() {
  if (Bo) return Bt;
  Bo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qn();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Bt.default = t, Bt;
}
var we = {}, Uo;
function nr() {
  if (Uo) return we;
  Uo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ ce(), s = /* @__PURE__ */ er();
  class i {
    constructor(w) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof w.schema == "object" && (C = w.schema), this.schema = w.schema, this.schemaId = w.schemaId, this.root = w.root || this, this.baseId = (p = w.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(C?.[w.schemaId || "$id"]), this.schemaPath = w.schemaPath, this.localRefs = w.localRefs, this.meta = w.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = i;
  function a(u) {
    const w = f.call(this, u);
    if (w)
      return w;
    const p = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: _ } = this.opts.code, { ownProperties: l } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: _, ownProperties: l });
    let g;
    u.$async && (g = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const P = h.scopeName("validate");
    u.validateName = P;
    const k = {
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
      validateName: P,
      ValidationError: g,
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
    let T;
    try {
      this._compilations.add(u), (0, s.validateFunctionCode)(k), h.optimize(this.opts.code.optimize);
      const L = h.toString();
      T = `${h.scopeRefs(n.default.scope)}return ${L}`, this.opts.code.process && (T = this.opts.code.process(T, u));
      const V = new Function(`${n.default.self}`, `${n.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(P, { ref: V }), V.errors = null, V.schema = u.schema, V.schemaEnv = u, u.$async && (V.$async = !0), this.opts.code.source === !0 && (V.source = { validateName: P, validateCode: L, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: I, items: K } = k;
        V.evaluated = {
          props: I instanceof e.Name ? void 0 : I,
          items: K instanceof e.Name ? void 0 : K,
          dynamicProps: I instanceof e.Name,
          dynamicItems: K instanceof e.Name
        }, V.source && (V.source.evaluated = (0, e.stringify)(V.evaluated));
      }
      return u.validate = V, u;
    } catch (L) {
      throw delete u.validate, delete u.validateName, T && this.logger.error("Error compiling schema, function code:", T), L;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function c(u, w, p) {
    var C;
    p = (0, r.resolveUrl)(this.opts.uriResolver, w, p);
    const _ = u.refs[p];
    if (_)
      return _;
    let l = S.call(this, u, p);
    if (l === void 0) {
      const h = (C = u.localRefs) === null || C === void 0 ? void 0 : C[p], { schemaId: g } = this.opts;
      h && (l = new i({ schema: h, schemaId: g, root: u, baseId: w }));
    }
    if (l !== void 0)
      return u.refs[p] = d.call(this, l);
  }
  we.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function f(u) {
    for (const w of this._compilations)
      if ($(w, u))
        return w;
  }
  we.getCompilingSchema = f;
  function $(u, w) {
    return u.schema === w.schema && u.root === w.root && u.baseId === w.baseId;
  }
  function S(u, w) {
    let p;
    for (; typeof (p = this.refs[w]) == "string"; )
      w = p;
    return p || this.schemas[w] || m.call(this, u, w);
  }
  function m(u, w) {
    const p = this.opts.uriResolver.parse(w), C = (0, r._getFullPath)(this.opts.uriResolver, p);
    let _ = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === _)
      return v.call(this, p, u);
    const l = (0, r.normalizeId)(C), h = this.refs[l] || this.schemas[l];
    if (typeof h == "string") {
      const g = m.call(this, u, h);
      return typeof g?.schema != "object" ? void 0 : v.call(this, p, g);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), l === (0, r.normalizeId)(w)) {
        const { schema: g } = h, { schemaId: P } = this.opts, k = g[P];
        return k && (_ = (0, r.resolveUrl)(this.opts.uriResolver, _, k)), new i({ schema: g, schemaId: P, root: u, baseId: _ });
      }
      return v.call(this, p, h);
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
  function v(u, { baseId: w, schema: p, root: C }) {
    var _;
    if (((_ = u.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const g of u.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const P = p[(0, o.unescapeFragment)(g)];
      if (P === void 0)
        return;
      p = P;
      const k = typeof p == "object" && p[this.opts.schemaId];
      !y.has(g) && k && (w = (0, r.resolveUrl)(this.opts.uriResolver, w, k));
    }
    let l;
    if (typeof p != "boolean" && p.$ref && !(0, o.schemaHasRulesButRef)(p, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, w, p.$ref);
      l = m.call(this, C, g);
    }
    const { schemaId: h } = this.opts;
    if (l = l || new i({ schema: p, schemaId: h, root: C, baseId: w }), l.schema !== l.root.schema)
      return l;
  }
  return we;
}
const hc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", mc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", gc = "object", yc = ["$data"], $c = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, vc = !1, bc = {
  $id: hc,
  description: mc,
  type: gc,
  required: yc,
  properties: $c,
  additionalProperties: vc
};
var Ut = {}, At = { exports: {} }, mr, Ho;
function Vi() {
  if (Ho) return mr;
  Ho = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function s(l) {
    let h = "", g = 0, P = 0;
    for (P = 0; P < l.length; P++)
      if (g = l[P].charCodeAt(0), g !== 48) {
        if (!(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
          return "";
        h += l[P];
        break;
      }
    for (P += 1; P < l.length; P++) {
      if (g = l[P].charCodeAt(0), !(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
        return "";
      h += l[P];
    }
    return h;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, h, g) {
    if (l.length) {
      const P = s(l);
      if (P !== "")
        h.push(P);
      else
        return g.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let h = 0;
    const g = { error: !1, address: "", zone: "" }, P = [], k = [];
    let T = !1, L = !1, O = c;
    for (let V = 0; V < l.length; V++) {
      const I = l[V];
      if (!(I === "[" || I === "]"))
        if (I === ":") {
          if (T === !0 && (L = !0), !O(k, P, g))
            break;
          if (++h > 7) {
            g.error = !0;
            break;
          }
          V > 0 && l[V - 1] === ":" && (T = !0), P.push(":");
          continue;
        } else if (I === "%") {
          if (!O(k, P, g))
            break;
          O = a;
        } else {
          k.push(I);
          continue;
        }
    }
    return k.length && (O === a ? g.zone = k.join("") : L ? P.push(k.join("")) : P.push(s(k))), g.address = P.join(""), g;
  }
  function f(l) {
    if ($(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const h = d(l);
    if (h.error)
      return { host: l, isIPV6: !1 };
    {
      let g = h.address, P = h.address;
      return h.zone && (g += "%" + h.zone, P += "%25" + h.zone), { host: g, isIPV6: !0, escapedHost: P };
    }
  }
  function $(l, h) {
    let g = 0;
    for (let P = 0; P < l.length; P++)
      l[P] === h && g++;
    return g;
  }
  function S(l) {
    let h = l;
    const g = [];
    let P = -1, k = 0;
    for (; k = h.length; ) {
      if (k === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          g.push("/");
          break;
        } else {
          g.push(h);
          break;
        }
      } else if (k === 2) {
        if (h[0] === ".") {
          if (h[1] === ".")
            break;
          if (h[1] === "/") {
            h = h.slice(2);
            continue;
          }
        } else if (h[0] === "/" && (h[1] === "." || h[1] === "/")) {
          g.push("/");
          break;
        }
      } else if (k === 3 && h === "/..") {
        g.length !== 0 && g.pop(), g.push("/");
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
          h = h.slice(3), g.length !== 0 && g.pop();
          continue;
        }
      }
      if ((P = h.indexOf("/", 1)) === -1) {
        g.push(h);
        break;
      } else
        g.push(h.slice(0, P)), h = h.slice(P);
    }
    return g.join("");
  }
  const m = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, y = /[@/?#:]/g, v = /[@/?#]/g;
  function u(l, h) {
    const g = h ? v : y;
    return g.lastIndex = 0, l.replace(g, (P) => m[P]);
  }
  function w(l, h = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let g = "";
    for (let P = 0; P < l.length; P++) {
      if (l[P] === "%" && P + 2 < l.length) {
        const k = l.slice(P + 1, P + 3);
        if (n(k)) {
          const T = k.toUpperCase(), L = String.fromCharCode(parseInt(T, 16));
          h && r(L) ? g += L : g += "%" + T, P += 2;
          continue;
        }
      }
      g += l[P];
    }
    return g;
  }
  function p(l) {
    let h = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const P = l.slice(g + 1, g + 3);
        if (n(P)) {
          const k = P.toUpperCase(), T = String.fromCharCode(parseInt(k, 16));
          T !== "." && r(T) ? h += T : h += "%" + k, g += 2;
          continue;
        }
      }
      o(l[g]) ? h += l[g] : h += escape(l[g]);
    }
    return h;
  }
  function C(l) {
    let h = "";
    for (let g = 0; g < l.length; g++) {
      if (l[g] === "%" && g + 2 < l.length) {
        const P = l.slice(g + 1, g + 3);
        if (n(P)) {
          h += "%" + P.toUpperCase(), g += 2;
          continue;
        }
      }
      h += escape(l[g]);
    }
    return h;
  }
  function _(l) {
    const h = [];
    if (l.userinfo !== void 0 && (h.push(l.userinfo), h.push("@")), l.host !== void 0) {
      let g = unescape(l.host);
      if (!t(g)) {
        const P = f(g);
        P.isIPV6 === !0 ? g = `[${P.escapedHost}]` : g = u(g, !1);
      }
      h.push(g);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (h.push(":"), h.push(String(l.port))), h.length ? h.join("") : void 0;
  }
  return mr = {
    nonSimpleDomain: i,
    recomposeAuthority: _,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: w,
    normalizePathEncoding: p,
    escapePreservingEscapes: C,
    removeDotSegments: S,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: s
  }, mr;
}
var gr, Ko;
function wc() {
  if (Ko) return gr;
  Ko = 1;
  const { isUUID: e } = Vi(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const [h, g] = l.resourceName.split("?");
      l.path = h && h !== "/" ? h : void 0, l.query = g, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function d(l, h) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const g = l.path.match(t);
    if (g) {
      const P = h.scheme || l.scheme || "urn";
      l.nid = g[1].toLowerCase(), l.nss = g[2];
      const k = `${P}:${h.nid || l.nid}`, T = _(k);
      l.path = void 0, T && (l = T.parse(l, h));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function f(l, h) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = h.scheme || l.scheme || "urn", P = l.nid.toLowerCase(), k = `${g}:${h.nid || P}`, T = _(k);
    T && (l = T.serialize(l, h));
    const L = l, O = l.nss;
    return L.path = `${P || h.nid}:${O}`, h.skipEscape = !0, L;
  }
  function $(l, h) {
    const g = l;
    return g.uuid = g.nss, g.nss = void 0, !h.tolerant && (!g.uuid || !e(g.uuid)) && (g.error = g.error || "UUID is not valid."), g;
  }
  function S(l) {
    const h = l;
    return h.nss = (l.uuid || "").toLowerCase(), h;
  }
  const m = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: i
    }
  ), y = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: m.domainHost,
      parse: s,
      serialize: i
    }
  ), v = (
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
      domainHost: v.domainHost,
      parse: v.parse,
      serialize: v.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: m,
      https: y,
      ws: v,
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
          serialize: S,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function _(l) {
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
    getSchemeHandler: _
  }, gr;
}
var Go;
function _c() {
  if (Go) return At.exports;
  Go = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: c } = Vi(), { SCHEMES: d, getSchemeHandler: f } = wc();
  function $(k, T) {
    return typeof k == "string" ? k = /** @type {T} */
    l(k, T) : typeof k == "object" && (k = /** @type {T} */
    _(v(k, T), T)), k;
  }
  function S(k, T, L) {
    const O = L ? Object.assign({ scheme: "null" }, L) : { scheme: "null" }, V = m(_(k, O), _(T, O), O, !0);
    return O.skipEscape = !0, v(V, O);
  }
  function m(k, T, L, O) {
    const V = {};
    return O || (k = _(v(k, L), L), T = _(v(T, L), L)), L = L || {}, !L.tolerant && T.scheme ? (V.scheme = T.scheme, V.userinfo = T.userinfo, V.host = T.host, V.port = T.port, V.path = t(T.path || ""), V.query = T.query) : (T.userinfo !== void 0 || T.host !== void 0 || T.port !== void 0 ? (V.userinfo = T.userinfo, V.host = T.host, V.port = T.port, V.path = t(T.path || ""), V.query = T.query) : (T.path ? (T.path[0] === "/" ? V.path = t(T.path) : ((k.userinfo !== void 0 || k.host !== void 0 || k.port !== void 0) && !k.path ? V.path = "/" + T.path : k.path ? V.path = k.path.slice(0, k.path.lastIndexOf("/") + 1) + T.path : V.path = T.path, V.path = t(V.path)), V.query = T.query) : (V.path = k.path, T.query !== void 0 ? V.query = T.query : V.query = k.query), V.userinfo = k.userinfo, V.host = k.host, V.port = k.port), V.scheme = k.scheme), V.fragment = T.fragment, V;
  }
  function y(k, T, L) {
    const O = g(k, L), V = g(T, L);
    return O !== void 0 && V !== void 0 && O.toLowerCase() === V.toLowerCase();
  }
  function v(k, T) {
    const L = {
      host: k.host,
      scheme: k.scheme,
      userinfo: k.userinfo,
      port: k.port,
      path: k.path,
      query: k.query,
      nid: k.nid,
      nss: k.nss,
      uuid: k.uuid,
      fragment: k.fragment,
      reference: k.reference,
      resourceName: k.resourceName,
      secure: k.secure,
      error: ""
    }, O = Object.assign({}, T), V = [], I = f(O.scheme || L.scheme);
    I && I.serialize && I.serialize(L, O), L.path !== void 0 && (O.skipEscape ? L.path = r(L.path) : (L.path = s(L.path), L.scheme !== void 0 && (L.path = L.path.split("%3A").join(":")))), O.reference !== "suffix" && L.scheme && V.push(L.scheme, ":");
    const K = n(L);
    if (K !== void 0 && (O.reference !== "suffix" && V.push("//"), V.push(K), L.path && L.path[0] !== "/" && V.push("/")), L.path !== void 0) {
      let Y = L.path;
      !O.absolutePath && (!I || !I.absolutePath) && (Y = t(Y)), K === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), V.push(Y);
    }
    return L.query !== void 0 && V.push("?", L.query), L.fragment !== void 0 && V.push("#", L.fragment), V.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, w = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function p(k, T) {
    if (T[2] !== void 0 && k.path && k.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof k.port == "number" && (k.port < 0 || k.port > 65535))
      return "URI port is malformed.";
  }
  function C(k, T) {
    const L = Object.assign({}, T), O = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let V = !1, I = !1;
    L.reference === "suffix" && (L.scheme ? k = L.scheme + ":" + k : k = "//" + k);
    const K = k.match(w);
    K !== null && K[1].indexOf("\\") !== -1 && (O.error = "URI authority must not contain a literal backslash.", V = !0);
    const Y = k.match(u);
    if (Y) {
      O.scheme = Y[1], O.userinfo = Y[3], O.host = Y[4], O.port = parseInt(Y[5], 10), O.path = Y[6] || "", O.query = Y[7], O.fragment = Y[8], isNaN(O.port) && (O.port = Y[5]);
      const re = p(O, Y);
      if (re !== void 0 && (O.error = O.error || re, V = !0), O.host)
        if (a(O.host) === !1) {
          const R = e(O.host);
          O.host = R.host.toLowerCase(), I = R.isIPV6;
        } else
          I = !0;
      O.scheme === void 0 && O.userinfo === void 0 && O.host === void 0 && O.port === void 0 && O.query === void 0 && !O.path ? O.reference = "same-document" : O.scheme === void 0 ? O.reference = "relative" : O.fragment === void 0 ? O.reference = "absolute" : O.reference = "uri", L.reference && L.reference !== "suffix" && L.reference !== O.reference && (O.error = O.error || "URI is not a " + L.reference + " reference.");
      const q = f(L.scheme || O.scheme);
      if (!L.unicodeSupport && (!q || !q.unicodeSupport) && O.host && (L.domainHost || q && q.domainHost) && I === !1 && c(O.host))
        try {
          O.host = new URL("http://" + O.host).hostname;
        } catch (W) {
          O.error = O.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!q || q && !q.skipNormalize) && (k.indexOf("%") !== -1 && (O.scheme !== void 0 && (O.scheme = unescape(O.scheme)), O.host !== void 0 && (O.host = i(unescape(O.host), I))), O.path && (O.path = o(O.path)), O.fragment))
        try {
          O.fragment = encodeURI(decodeURIComponent(O.fragment));
        } catch {
          O.error = O.error || "URI malformed";
        }
      q && q.parse && q.parse(O, L);
    } else
      O.error = O.error || "URI can not be parsed.";
    return { parsed: O, malformedAuthorityOrPort: V };
  }
  function _(k, T) {
    return C(k, T).parsed;
  }
  function l(k, T) {
    return h(k, T).normalized;
  }
  function h(k, T) {
    const { parsed: L, malformedAuthorityOrPort: O } = C(k, T);
    return {
      normalized: O ? k : v(L, T),
      malformedAuthorityOrPort: O
    };
  }
  function g(k, T) {
    if (typeof k == "string") {
      const { normalized: L, malformedAuthorityOrPort: O } = h(k, T);
      return O ? void 0 : L;
    }
    if (typeof k == "object")
      return v(k, T);
  }
  const P = {
    SCHEMES: d,
    normalize: $,
    resolve: S,
    resolveComponent: m,
    equal: y,
    serialize: v,
    parse: _
  };
  return At.exports = P, At.exports.default = P, At.exports.fastUri = P, At.exports;
}
var Wo;
function Sc() {
  if (Wo) return Ut;
  Wo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = _c();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ut.default = e, Ut;
}
var Jo;
function Cc() {
  return Jo || (Jo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ er();
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
    const r = /* @__PURE__ */ Qr(), o = /* @__PURE__ */ tr(), s = /* @__PURE__ */ Di(), i = /* @__PURE__ */ nr(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Qn(), d = /* @__PURE__ */ Hn(), f = /* @__PURE__ */ ce(), $ = bc, S = /* @__PURE__ */ Sc(), m = (R, x) => new RegExp(R, x);
    m.code = "new RegExp";
    const y = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set([
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
    }, w = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, p = 200;
    function C(R) {
      var x, j, M, b, E, D, G, U, Z, te, A, F, B, J, ee, X, oe, ie, de, fe, he, De, ve, Pe, Le;
      const nt = R.strict, ar = (x = R.code) === null || x === void 0 ? void 0 : x.optimize, $o = ar === !0 || ar === void 0 ? 1 : ar || 0, vo = (M = (j = R.code) === null || j === void 0 ? void 0 : j.regExp) !== null && M !== void 0 ? M : m, va = (b = R.uriResolver) !== null && b !== void 0 ? b : S.default;
      return {
        strictSchema: (D = (E = R.strictSchema) !== null && E !== void 0 ? E : nt) !== null && D !== void 0 ? D : !0,
        strictNumbers: (U = (G = R.strictNumbers) !== null && G !== void 0 ? G : nt) !== null && U !== void 0 ? U : !0,
        strictTypes: (te = (Z = R.strictTypes) !== null && Z !== void 0 ? Z : nt) !== null && te !== void 0 ? te : "log",
        strictTuples: (F = (A = R.strictTuples) !== null && A !== void 0 ? A : nt) !== null && F !== void 0 ? F : "log",
        strictRequired: (J = (B = R.strictRequired) !== null && B !== void 0 ? B : nt) !== null && J !== void 0 ? J : !1,
        code: R.code ? { ...R.code, optimize: $o, regExp: vo } : { optimize: $o, regExp: vo },
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
        uriResolver: va
      };
    }
    class _ {
      constructor(x = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), x = this.opts = { ...x, ...C(x) };
        const { es5: j, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: v, es5: j, lines: M }), this.logger = O(x.logger);
        const b = x.validateFormats;
        x.validateFormats = !1, this.RULES = (0, s.getRules)(), l.call(this, u, x, "NOT SUPPORTED"), l.call(this, w, x, "DEPRECATED", "warn"), this._metaOpts = T.call(this), x.formats && P.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), x.keywords && k.call(this, x.keywords), typeof x.meta == "object" && this.addMetaSchema(x.meta), g.call(this), x.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: x, meta: j, schemaId: M } = this.opts;
        let b = $;
        M === "id" && (b = { ...$ }, b.id = b.$id, delete b.$id), j && x && this.addMetaSchema(b, b[M], !1);
      }
      defaultMeta() {
        const { meta: x, schemaId: j } = this.opts;
        return this.opts.defaultMeta = typeof x == "object" ? x[j] || x : void 0;
      }
      validate(x, j) {
        let M;
        if (typeof x == "string") {
          if (M = this.getSchema(x), !M)
            throw new Error(`no schema with key or ref "${x}"`);
        } else
          M = this.compile(x);
        const b = M(j);
        return "$async" in M || (this.errors = M.errors), b;
      }
      compile(x, j) {
        const M = this._addSchema(x, j);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(x, j) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return b.call(this, x, j);
        async function b(te, A) {
          await E.call(this, te.$schema);
          const F = this._addSchema(te, A);
          return F.validate || D.call(this, F);
        }
        async function E(te) {
          te && !this.getSchema(te) && await b.call(this, { $ref: te }, !0);
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
          this.refs[te] || await E.call(this, A.$schema), this.refs[te] || this.addSchema(A, te, j);
        }
        async function Z(te) {
          const A = this._loading[te];
          if (A)
            return A;
          try {
            return await (this._loading[te] = M(te));
          } finally {
            delete this._loading[te];
          }
        }
      }
      // Adds schema to the instance
      addSchema(x, j, M, b = this.opts.validateSchema) {
        if (Array.isArray(x)) {
          for (const D of x)
            this.addSchema(D, void 0, M, b);
          return this;
        }
        let E;
        if (typeof x == "object") {
          const { schemaId: D } = this.opts;
          if (E = x[D], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${D} must be string`);
        }
        return j = (0, c.normalizeId)(j || E), this._checkUnique(j), this.schemas[j] = this._addSchema(x, M, j, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(x, j, M = this.opts.validateSchema) {
        return this.addSchema(x, j, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(x, j) {
        if (typeof x == "boolean")
          return !0;
        let M;
        if (M = x.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(M, x);
        if (!b && j) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return b;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(x) {
        let j;
        for (; typeof (j = h.call(this, x)) == "string"; )
          x = j;
        if (j === void 0) {
          const { schemaId: M } = this.opts, b = new i.SchemaEnv({ schema: {}, schemaId: M });
          if (j = i.resolveSchema.call(this, b, x), !j)
            return;
          this.refs[x] = j;
        }
        return j.validate || this._compileSchemaEnv(j);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(x) {
        if (x instanceof RegExp)
          return this._removeAllSchemas(this.schemas, x), this._removeAllSchemas(this.refs, x), this;
        switch (typeof x) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const j = h.call(this, x);
            return typeof j == "object" && this._cache.delete(j.schema), delete this.schemas[x], delete this.refs[x], this;
          }
          case "object": {
            const j = x;
            this._cache.delete(j);
            let M = x[this.opts.schemaId];
            return M && (M = (0, c.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(x) {
        for (const j of x)
          this.addKeyword(j);
        return this;
      }
      addKeyword(x, j) {
        let M;
        if (typeof x == "string")
          M = x, typeof j == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), j.keyword = M);
        else if (typeof x == "object" && j === void 0) {
          if (j = x, M = j.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (I.call(this, M, j), !j)
          return (0, f.eachItem)(M, (E) => K.call(this, E)), this;
        re.call(this, j);
        const b = {
          ...j,
          type: (0, d.getJSONTypes)(j.type),
          schemaType: (0, d.getJSONTypes)(j.schemaType)
        };
        return (0, f.eachItem)(M, b.type.length === 0 ? (E) => K.call(this, E, b) : (E) => b.type.forEach((D) => K.call(this, E, b, D))), this;
      }
      getKeyword(x) {
        const j = this.RULES.all[x];
        return typeof j == "object" ? j.definition : !!j;
      }
      // Remove keyword
      removeKeyword(x) {
        const { RULES: j } = this;
        delete j.keywords[x], delete j.all[x];
        for (const M of j.rules) {
          const b = M.rules.findIndex((E) => E.keyword === x);
          b >= 0 && M.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(x, j) {
        return typeof j == "string" && (j = new RegExp(j)), this.formats[x] = j, this;
      }
      errorsText(x = this.errors, { separator: j = ", ", dataVar: M = "data" } = {}) {
        return !x || x.length === 0 ? "No errors" : x.map((b) => `${M}${b.instancePath} ${b.message}`).reduce((b, E) => b + j + E);
      }
      $dataMetaSchema(x, j) {
        const M = this.RULES.all;
        x = JSON.parse(JSON.stringify(x));
        for (const b of j) {
          const E = b.split("/").slice(1);
          let D = x;
          for (const G of E)
            D = D[G];
          for (const G in M) {
            const U = M[G];
            if (typeof U != "object")
              continue;
            const { $data: Z } = U.definition, te = D[G];
            Z && te && (D[G] = W(te));
          }
        }
        return x;
      }
      _removeAllSchemas(x, j) {
        for (const M in x) {
          const b = x[M];
          (!j || j.test(M)) && (typeof b == "string" ? delete x[M] : b && !b.meta && (this._cache.delete(b.schema), delete x[M]));
        }
      }
      _addSchema(x, j, M, b = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let D;
        const { schemaId: G } = this.opts;
        if (typeof x == "object")
          D = x[G];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof x != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let U = this._cache.get(x);
        if (U !== void 0)
          return U;
        M = (0, c.normalizeId)(D || M);
        const Z = c.getSchemaRefs.call(this, x, M);
        return U = new i.SchemaEnv({ schema: x, schemaId: G, meta: j, baseId: M, localRefs: Z }), this._cache.set(U.schema, U), E && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = U), b && this.validateSchema(x, !0), U;
      }
      _checkUnique(x) {
        if (this.schemas[x] || this.refs[x])
          throw new Error(`schema with key or id "${x}" already exists`);
      }
      _compileSchemaEnv(x) {
        if (x.meta ? this._compileMetaSchema(x) : i.compileSchema.call(this, x), !x.validate)
          throw new Error("ajv implementation error");
        return x.validate;
      }
      _compileMetaSchema(x) {
        const j = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, x);
        } finally {
          this.opts = j;
        }
      }
    }
    _.ValidationError = r.default, _.MissingRefError = o.default, e.default = _;
    function l(R, x, j, M = "error") {
      for (const b in R) {
        const E = b;
        E in x && this.logger[M](`${j}: option ${b}. ${R[E]}`);
      }
    }
    function h(R) {
      return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
    }
    function g() {
      const R = this.opts.schemas;
      if (R)
        if (Array.isArray(R))
          this.addSchema(R);
        else
          for (const x in R)
            this.addSchema(R[x], x);
    }
    function P() {
      for (const R in this.opts.formats) {
        const x = this.opts.formats[R];
        x && this.addFormat(R, x);
      }
    }
    function k(R) {
      if (Array.isArray(R)) {
        this.addVocabulary(R);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const x in R) {
        const j = R[x];
        j.keyword || (j.keyword = x), this.addKeyword(j);
      }
    }
    function T() {
      const R = { ...this.opts };
      for (const x of y)
        delete R[x];
      return R;
    }
    const L = { log() {
    }, warn() {
    }, error() {
    } };
    function O(R) {
      if (R === !1)
        return L;
      if (R === void 0)
        return console;
      if (R.log && R.warn && R.error)
        return R;
      throw new Error("logger must implement log, warn and error methods");
    }
    const V = /^[a-z_$][a-z0-9_$:-]*$/i;
    function I(R, x) {
      const { RULES: j } = this;
      if ((0, f.eachItem)(R, (M) => {
        if (j.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!V.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!x && x.$data && !("code" in x || "validate" in x))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function K(R, x, j) {
      var M;
      const b = x?.post;
      if (j && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let D = b ? E.post : E.rules.find(({ type: U }) => U === j);
      if (D || (D = { type: j, rules: [] }, E.rules.push(D)), E.keywords[R] = !0, !x)
        return;
      const G = {
        keyword: R,
        definition: {
          ...x,
          type: (0, d.getJSONTypes)(x.type),
          schemaType: (0, d.getJSONTypes)(x.schemaType)
        }
      };
      x.before ? Y.call(this, D, G, x.before) : D.rules.push(G), E.all[R] = G, (M = x.implements) === null || M === void 0 || M.forEach((U) => this.addKeyword(U));
    }
    function Y(R, x, j) {
      const M = R.rules.findIndex((b) => b.keyword === j);
      M >= 0 ? R.rules.splice(M, 0, x) : (R.rules.push(x), this.logger.warn(`rule ${j} is not defined`));
    }
    function re(R) {
      let { metaSchema: x } = R;
      x !== void 0 && (R.$data && this.opts.$data && (x = W(x)), R.validateSchema = this.compile(x, !0));
    }
    const q = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function W(R) {
      return { anyOf: [R, q] };
    }
  })(cr)), cr;
}
var Ht = {}, Kt = {}, Gt = {}, Yo;
function kc() {
  if (Yo) return Gt;
  Yo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Gt.default = e, Gt;
}
var We = {}, Xo;
function eo() {
  if (Xo) return We;
  Xo = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.callRef = We.getValidate = void 0;
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ se(), r = /* @__PURE__ */ Fe(), o = /* @__PURE__ */ nr(), s = /* @__PURE__ */ ce(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: f, schema: $, it: S } = d, { baseId: m, schemaEnv: y, validateName: v, opts: u, self: w } = S, { root: p } = y;
      if (($ === "#" || $ === "#/") && m === p.baseId)
        return _();
      const C = o.resolveRef.call(w, p, m, $);
      if (C === void 0)
        throw new e.default(S.opts.uriResolver, m, $);
      if (C instanceof o.SchemaEnv)
        return l(C);
      return h(C);
      function _() {
        if (y === p)
          return c(d, v, y, y.$async);
        const g = f.scopeValue("root", { ref: p });
        return c(d, (0, n._)`${g}.validate`, p, p.$async);
      }
      function l(g) {
        const P = a(d, g);
        c(d, P, g, g.$async);
      }
      function h(g) {
        const P = f.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), k = f.name("valid"), T = d.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: P,
          errSchemaPath: $
        }, k);
        d.mergeEvaluated(T), d.ok(k);
      }
    }
  };
  function a(d, f) {
    const { gen: $ } = d;
    return f.validate ? $.scopeValue("validate", { ref: f.validate }) : (0, n._)`${$.scopeValue("wrapper", { ref: f })}.validate`;
  }
  We.getValidate = a;
  function c(d, f, $, S) {
    const { gen: m, it: y } = d, { allErrors: v, schemaEnv: u, opts: w } = y, p = w.passContext ? r.default.this : n.nil;
    S ? C() : _();
    function C() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const g = m.let("valid");
      m.try(() => {
        m.code((0, n._)`await ${(0, t.callValidateCode)(d, f, p)}`), h(f), v || m.assign(g, !0);
      }, (P) => {
        m.if((0, n._)`!(${P} instanceof ${y.ValidationError})`, () => m.throw(P)), l(P), v || m.assign(g, !1);
      }), d.ok(g);
    }
    function _() {
      d.result((0, t.callValidateCode)(d, f, p), () => h(f), () => l(f));
    }
    function l(g) {
      const P = (0, n._)`${g}.errors`;
      m.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${P} : ${r.default.vErrors}.concat(${P})`), m.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(g) {
      var P;
      if (!y.opts.unevaluated)
        return;
      const k = (P = $?.validate) === null || P === void 0 ? void 0 : P.evaluated;
      if (y.props !== !0)
        if (k && !k.dynamicProps)
          k.props !== void 0 && (y.props = s.mergeEvaluated.props(m, k.props, y.props));
        else {
          const T = m.var("props", (0, n._)`${g}.evaluated.props`);
          y.props = s.mergeEvaluated.props(m, T, y.props, n.Name);
        }
      if (y.items !== !0)
        if (k && !k.dynamicItems)
          k.items !== void 0 && (y.items = s.mergeEvaluated.items(m, k.items, y.items));
        else {
          const T = m.var("items", (0, n._)`${g}.evaluated.items`);
          y.items = s.mergeEvaluated.items(m, T, y.items, n.Name);
        }
    }
  }
  return We.callRef = c, We.default = i, We;
}
var Zo;
function Ec() {
  if (Zo) return Kt;
  Zo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kc(), t = /* @__PURE__ */ eo(), n = [
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
var Wt = {}, Jt = {}, Qo;
function xc() {
  if (Qo) return Jt;
  Qo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
var Yt = {}, es;
function Pc() {
  if (es) return Yt;
  es = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
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
var Xt = {}, Zt = {}, ts;
function Ac() {
  if (ts) return Zt;
  ts = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Zt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Zt;
}
var ns;
function Rc() {
  if (ns) return Xt;
  ns = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Ac(), o = {
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
      const { keyword: i, data: a, schemaCode: c, it: d } = s, f = i === "maxLength" ? e.operators.GT : e.operators.LT, $ = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${a})`;
      s.fail$data((0, e._)`${$} ${f} ${c}`);
    }
  };
  return Xt.default = o, Xt;
}
var Qt = {}, rs;
function Mc() {
  if (rs) return Qt;
  rs = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
      const { gen: i, data: a, $data: c, schema: d, schemaCode: f, it: $ } = s, S = $.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: m } = $.opts.code, y = m.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, m), v = i.let("valid");
        i.try(() => i.assign(v, (0, n._)`${y}(${f}, ${S}).test(${a})`), () => i.assign(v, !1)), s.fail$data((0, n._)`!${v}`);
      } else {
        const m = (0, e.usePattern)(s, d);
        s.fail$data((0, n._)`!${m}.test(${a})`);
      }
    }
  };
  return Qt.default = o, Qt;
}
var en = {}, os;
function Nc() {
  if (os) return en;
  os = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
var tn = {}, ss;
function Tc() {
  if (ss) return tn;
  ss = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
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
      const { gen: i, schema: a, schemaCode: c, data: d, $data: f, it: $ } = s, { opts: S } = $;
      if (!f && a.length === 0)
        return;
      const m = a.length >= S.loopRequired;
      if ($.allErrors ? y() : v(), S.strictRequired) {
        const p = s.parentSchema.properties, { definedProperties: C } = s.it;
        for (const _ of a)
          if (p?.[_] === void 0 && !C.has(_)) {
            const l = $.schemaEnv.baseId + $.errSchemaPath, h = `required property "${_}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)($, h, $.opts.strictRequired);
          }
      }
      function y() {
        if (m || f)
          s.block$data(t.nil, u);
        else
          for (const p of a)
            (0, e.checkReportMissingProp)(s, p);
      }
      function v() {
        const p = i.let("missing");
        if (m || f) {
          const C = i.let("valid", !0);
          s.block$data(C, () => w(p, C)), s.ok(C);
        } else
          i.if((0, e.checkMissingProp)(s, a, p)), (0, e.reportMissingProp)(s, p), i.else();
      }
      function u() {
        i.forOf("prop", c, (p) => {
          s.setParams({ missingProperty: p }), i.if((0, e.noPropertyInData)(i, d, p, S.ownProperties), () => s.error());
        });
      }
      function w(p, C) {
        s.setParams({ missingProperty: p }), i.forOf(p, c, () => {
          i.assign(C, (0, e.propertyInData)(i, d, p, S.ownProperties)), i.if((0, t.not)(C), () => {
            s.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return tn.default = o, tn;
}
var nn = {}, is;
function Oc() {
  if (is) return nn;
  is = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
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
var rn = {}, on = {}, as;
function to() {
  if (as) return on;
  as = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = qi();
  return e.code = 'require("ajv/dist/runtime/equal").default', on.default = e, on;
}
var cs;
function Fc() {
  if (cs) return rn;
  cs = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ to(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: c, $data: d, schema: f, parentSchema: $, schemaCode: S, it: m } = i;
      if (!d && !f)
        return;
      const y = a.let("valid"), v = $.items ? (0, e.getSchemaTypes)($.items) : [];
      i.block$data(y, u, (0, t._)`${S} === false`), i.ok(y);
      function u() {
        const _ = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        i.setParams({ i: _, j: l }), a.assign(y, !0), a.if((0, t._)`${_} > 1`, () => (w() ? p : C)(_, l));
      }
      function w() {
        return v.length > 0 && !v.some((_) => _ === "object" || _ === "array");
      }
      function p(_, l) {
        const h = a.name("item"), g = (0, e.checkDataTypes)(v, h, m.opts.strictNumbers, e.DataType.Wrong), P = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${_}--;`, () => {
          a.let(h, (0, t._)`${c}[${_}]`), a.if(g, (0, t._)`continue`), v.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${P}[${h}] == "number"`, () => {
            a.assign(l, (0, t._)`${P}[${h}]`), i.error(), a.assign(y, !1).break();
          }).code((0, t._)`${P}[${h}] = ${_}`);
        });
      }
      function C(_, l) {
        const h = (0, n.useFunc)(a, r.default), g = a.name("outer");
        a.label(g).for((0, t._)`;${_}--;`, () => a.for((0, t._)`${l} = ${_}; ${l}--;`, () => a.if((0, t._)`${h}(${c}[${_}], ${c}[${l}])`, () => {
          i.error(), a.assign(y, !1).break(g);
        })));
      }
    }
  };
  return rn.default = s, rn;
}
var sn = {}, ls;
function zc() {
  if (ls) return sn;
  ls = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ to(), o = {
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
var an = {}, ds;
function Ic() {
  if (ds) return an;
  ds = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ to(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schema: d, schemaCode: f, it: $ } = s;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const S = d.length >= $.opts.loopEnum;
      let m;
      const y = () => m ?? (m = (0, t.useFunc)(i, n.default));
      let v;
      if (S || c)
        v = i.let("valid"), s.block$data(v, u);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const p = i.const("vSchema", f);
        v = (0, e.or)(...d.map((C, _) => w(p, _)));
      }
      s.pass(v);
      function u() {
        i.assign(v, !1), i.forOf("v", f, (p) => i.if((0, e._)`${y()}(${a}, ${p})`, () => i.assign(v, !0).break()));
      }
      function w(p, C) {
        const _ = d[C];
        return typeof _ == "object" && _ !== null ? (0, e._)`${y()}(${a}, ${p}[${C}])` : (0, e._)`${a} === ${_}`;
      }
    }
  };
  return an.default = o, an;
}
var us;
function jc() {
  if (us) return Wt;
  us = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xc(), t = /* @__PURE__ */ Pc(), n = /* @__PURE__ */ Rc(), r = /* @__PURE__ */ Mc(), o = /* @__PURE__ */ Nc(), s = /* @__PURE__ */ Tc(), i = /* @__PURE__ */ Oc(), a = /* @__PURE__ */ Fc(), c = /* @__PURE__ */ zc(), d = /* @__PURE__ */ Ic(), f = [
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
var cn = {}, ft = {}, fs;
function Bi() {
  if (fs) return ft;
  fs = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: d, keyword: f, it: $ } = s;
    $.items = !0;
    const S = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      s.setParams({ len: i.length }), s.pass((0, e._)`${S} <= ${i.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)($, c)) {
      const y = a.var("valid", (0, e._)`${S} <= ${i.length}`);
      a.if((0, e.not)(y), () => m(y)), s.ok(y);
    }
    function m(y) {
      a.forRange("i", i.length, S, (v) => {
        s.subschema({ keyword: f, dataProp: v, dataPropType: t.Type.Num }, y), $.allErrors || a.if((0, e.not)(y), () => a.break());
      });
    }
  }
  return ft.validateAdditionalItems = o, ft.default = r, ft;
}
var ln = {}, pt = {}, ps;
function Ui() {
  if (ps) return pt;
  ps = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateTuple = void 0;
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
    const { gen: c, parentSchema: d, data: f, keyword: $, it: S } = s;
    v(d), S.opts.unevaluated && a.length && S.items !== !0 && (S.items = t.mergeEvaluated.items(c, a.length, S.items));
    const m = c.name("valid"), y = c.const("len", (0, e._)`${f}.length`);
    a.forEach((u, w) => {
      (0, t.alwaysValidSchema)(S, u) || (c.if((0, e._)`${y} > ${w}`, () => s.subschema({
        keyword: $,
        schemaProp: w,
        dataProp: w
      }, m)), s.ok(m));
    });
    function v(u) {
      const { opts: w, errSchemaPath: p } = S, C = a.length, _ = C === u.minItems && (C === u.maxItems || u[i] === !1);
      if (w.strictTuples && !_) {
        const l = `"${$}" is ${C}-tuple, but minItems or maxItems/${i} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(S, l, w.strictTuples);
      }
    }
  }
  return pt.validateTuple = o, pt.default = r, pt;
}
var hs;
function Dc() {
  if (hs) return ln;
  hs = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ui(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return ln.default = t, ln;
}
var dn = {}, ms;
function Lc() {
  if (ms) return dn;
  ms = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Bi(), s = {
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
var un = {}, gs;
function qc() {
  if (gs) return un;
  gs = 1, Object.defineProperty(un, "__esModule", { value: !0 });
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
      let f, $;
      const { minContains: S, maxContains: m } = a;
      d.opts.next ? (f = S === void 0 ? 1 : S, $ = m) : f = 1;
      const y = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: f, max: $ }), $ === void 0 && f === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if ($ !== void 0 && f > $) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, i)) {
        let C = (0, e._)`${y} >= ${f}`;
        $ !== void 0 && (C = (0, e._)`${C} && ${y} <= ${$}`), o.pass(C);
        return;
      }
      d.items = !0;
      const v = s.name("valid");
      $ === void 0 && f === 1 ? w(v, () => s.if(v, () => s.break())) : f === 0 ? (s.let(v, !0), $ !== void 0 && s.if((0, e._)`${c}.length > 0`, u)) : (s.let(v, !1), u()), o.result(v, () => o.reset());
      function u() {
        const C = s.name("_valid"), _ = s.let("count", 0);
        w(C, () => s.if(C, () => p(_)));
      }
      function w(C, _) {
        s.forRange("i", 0, y, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), _();
        });
      }
      function p(C) {
        s.code((0, e._)`${C}++`), $ === void 0 ? s.if((0, e._)`${C} >= ${f}`, () => s.assign(v, !0).break()) : (s.if((0, e._)`${C} > ${$}`, () => s.assign(v, !1).break()), f === 1 ? s.assign(v, !0) : s.if((0, e._)`${C} >= ${f}`, () => s.assign(v, !0)));
      }
    }
  };
  return un.default = r, un;
}
var yr = {}, ys;
function no() {
  return ys || (ys = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ze();
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
        const [d, f] = s(c);
        i(c, d), a(c, f);
      }
    };
    function s({ schema: c }) {
      const d = {}, f = {};
      for (const $ in c) {
        if ($ === "__proto__")
          continue;
        const S = Array.isArray(c[$]) ? d : f;
        S[$] = c[$];
      }
      return [d, f];
    }
    function i(c, d = c.schema) {
      const { gen: f, data: $, it: S } = c;
      if (Object.keys(d).length === 0)
        return;
      const m = f.let("missing");
      for (const y in d) {
        const v = d[y];
        if (v.length === 0)
          continue;
        const u = (0, r.propertyInData)(f, $, y, S.opts.ownProperties);
        c.setParams({
          property: y,
          depsCount: v.length,
          deps: v.join(", ")
        }), S.allErrors ? f.if(u, () => {
          for (const w of v)
            (0, r.checkReportMissingProp)(c, w);
        }) : (f.if((0, t._)`${u} && (${(0, r.checkMissingProp)(c, v, m)})`), (0, r.reportMissingProp)(c, m), f.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(c, d = c.schema) {
      const { gen: f, data: $, keyword: S, it: m } = c, y = f.name("valid");
      for (const v in d)
        (0, n.alwaysValidSchema)(m, d[v]) || (f.if(
          (0, r.propertyInData)(f, $, v, m.opts.ownProperties),
          () => {
            const u = c.subschema({ keyword: S, schemaProp: v }, y);
            c.mergeValidEvaluated(u, y);
          },
          () => f.var(y, !0)
          // TODO var
        ), c.ok(y));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(yr)), yr;
}
var fn = {}, $s;
function Vc() {
  if ($s) return fn;
  $s = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
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
var pn = {}, vs;
function Hi() {
  if (vs) return pn;
  vs = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: d, data: f, errsCount: $, it: S } = i;
      if (!$)
        throw new Error("ajv implementation error");
      const { allErrors: m, opts: y } = S;
      if (S.props = !0, y.removeAdditional !== "all" && (0, r.alwaysValidSchema)(S, c))
        return;
      const v = (0, e.allSchemaProperties)(d.properties), u = (0, e.allSchemaProperties)(d.patternProperties);
      w(), i.ok((0, t._)`${$} === ${n.default.errors}`);
      function w() {
        a.forIn("key", f, (h) => {
          !v.length && !u.length ? _(h) : a.if(p(h), () => _(h));
        });
      }
      function p(h) {
        let g;
        if (v.length > 8) {
          const P = (0, r.schemaRefOrVal)(S, d.properties, "properties");
          g = (0, e.isOwnProperty)(a, P, h);
        } else v.length ? g = (0, t.or)(...v.map((P) => (0, t._)`${h} === ${P}`)) : g = t.nil;
        return u.length && (g = (0, t.or)(g, ...u.map((P) => (0, t._)`${(0, e.usePattern)(i, P)}.test(${h})`))), (0, t.not)(g);
      }
      function C(h) {
        a.code((0, t._)`delete ${f}[${h}]`);
      }
      function _(h) {
        if (y.removeAdditional === "all" || y.removeAdditional && c === !1) {
          C(h);
          return;
        }
        if (c === !1) {
          i.setParams({ additionalProperty: h }), i.error(), m || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(S, c)) {
          const g = a.name("valid");
          y.removeAdditional === "failing" ? (l(h, g, !1), a.if((0, t.not)(g), () => {
            i.reset(), C(h);
          })) : (l(h, g), m || a.if((0, t.not)(g), () => a.break()));
        }
      }
      function l(h, g, P) {
        const k = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        P === !1 && Object.assign(k, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(k, g);
      }
    }
  };
  return pn.default = s, pn;
}
var hn = {}, bs;
function Bc() {
  if (bs) return hn;
  bs = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Hi(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, parentSchema: c, data: d, it: f } = s;
      f.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(f, r.default, "additionalProperties"));
      const $ = (0, t.allSchemaProperties)(a);
      for (const u of $)
        f.definedProperties.add(u);
      f.opts.unevaluated && $.length && f.props !== !0 && (f.props = n.mergeEvaluated.props(i, (0, n.toHash)($), f.props));
      const S = $.filter((u) => !(0, n.alwaysValidSchema)(f, a[u]));
      if (S.length === 0)
        return;
      const m = i.name("valid");
      for (const u of S)
        y(u) ? v(u) : (i.if((0, t.propertyInData)(i, d, u, f.opts.ownProperties)), v(u), f.allErrors || i.else().var(m, !0), i.endIf()), s.it.definedProperties.add(u), s.ok(m);
      function y(u) {
        return f.opts.useDefaults && !f.compositeRule && a[u].default !== void 0;
      }
      function v(u) {
        s.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, m);
      }
    }
  };
  return hn.default = o, hn;
}
var mn = {}, ws;
function Uc() {
  if (ws) return mn;
  ws = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ze(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ ce(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: c, parentSchema: d, it: f } = s, { opts: $ } = f, S = (0, e.allSchemaProperties)(a), m = S.filter((_) => (0, n.alwaysValidSchema)(f, a[_]));
      if (S.length === 0 || m.length === S.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const y = $.strictSchema && !$.allowMatchingProperties && d.properties, v = i.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, r.evaluatedPropsToName)(i, f.props));
      const { props: u } = f;
      w();
      function w() {
        for (const _ of S)
          y && p(_), f.allErrors ? C(_) : (i.var(v, !0), C(_), i.if(v));
      }
      function p(_) {
        for (const l in y)
          new RegExp(_).test(l) && (0, n.checkStrictMode)(f, `property ${l} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function C(_) {
        i.forIn("key", c, (l) => {
          i.if((0, t._)`${(0, e.usePattern)(s, _)}.test(${l})`, () => {
            const h = m.includes(_);
            h || s.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: l,
              dataPropType: r.Type.Str
            }, v), f.opts.unevaluated && u !== !0 ? i.assign((0, t._)`${u}[${l}]`, !0) : !h && !f.allErrors && i.if((0, t.not)(v), () => i.break());
          });
        });
      }
    }
  };
  return mn.default = o, mn;
}
var gn = {}, _s;
function Hc() {
  if (_s) return gn;
  _s = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
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
var yn = {}, Ss;
function Kc() {
  if (Ss) return yn;
  Ss = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ ze()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return yn.default = t, yn;
}
var $n = {}, Cs;
function Gc() {
  if (Cs) return $n;
  Cs = 1, Object.defineProperty($n, "__esModule", { value: !0 });
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
      const d = i, f = s.let("valid", !1), $ = s.let("passing", null), S = s.name("_valid");
      o.setParams({ passing: $ }), s.block(m), o.result(f, () => o.reset(), () => o.error(!0));
      function m() {
        d.forEach((y, v) => {
          let u;
          (0, t.alwaysValidSchema)(c, y) ? s.var(S, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: v,
            compositeRule: !0
          }, S), v > 0 && s.if((0, e._)`${S} && ${f}`).assign(f, !1).assign($, (0, e._)`[${$}, ${v}]`).else(), s.if(S, () => {
            s.assign(f, !0), s.assign($, v), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return $n.default = r, $n;
}
var vn = {}, ks;
function Wc() {
  if (ks) return vn;
  ks = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
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
var bn = {}, Es;
function Jc() {
  if (Es) return bn;
  Es = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
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
      const $ = i.let("valid", !0), S = i.name("_valid");
      if (m(), s.reset(), d && f) {
        const v = i.let("ifClause");
        s.setParams({ ifClause: v }), i.if(S, y("then", v), y("else", v));
      } else d ? i.if(S, y("then")) : i.if((0, e.not)(S), y("else"));
      s.pass($, () => s.error(!0));
      function m() {
        const v = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, S);
        s.mergeEvaluated(v);
      }
      function y(v, u) {
        return () => {
          const w = s.subschema({ keyword: v }, S);
          i.assign($, S), s.mergeValidEvaluated(w, $), u ? i.assign(u, (0, e._)`${v}`) : s.setParams({ ifClause: v });
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
var wn = {}, xs;
function Yc() {
  if (xs) return wn;
  xs = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var Ps;
function Xc() {
  if (Ps) return cn;
  Ps = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = /* @__PURE__ */ Dc(), n = /* @__PURE__ */ Ui(), r = /* @__PURE__ */ Lc(), o = /* @__PURE__ */ qc(), s = /* @__PURE__ */ no(), i = /* @__PURE__ */ Vc(), a = /* @__PURE__ */ Hi(), c = /* @__PURE__ */ Bc(), d = /* @__PURE__ */ Uc(), f = /* @__PURE__ */ Hc(), $ = /* @__PURE__ */ Kc(), S = /* @__PURE__ */ Gc(), m = /* @__PURE__ */ Wc(), y = /* @__PURE__ */ Jc(), v = /* @__PURE__ */ Yc();
  function u(w = !1) {
    const p = [
      // any
      f.default,
      $.default,
      S.default,
      m.default,
      y.default,
      v.default,
      // object
      i.default,
      a.default,
      s.default,
      c.default,
      d.default
    ];
    return w ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(o.default), p;
  }
  return cn.default = u, cn;
}
var _n = {}, ht = {}, As;
function Ki() {
  if (As) return ht;
  As = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ eo(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => s(a, a.schema)
  };
  function s(a, c) {
    const { gen: d, it: f } = a;
    f.schemaEnv.root.dynamicAnchors[c] = !0;
    const $ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, S = f.errSchemaPath === "#" ? f.validateName : i(a);
    d.if((0, e._)`!${$}`, () => d.assign($, S));
  }
  ht.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: c, schema: d, self: f } = a.it, { root: $, baseId: S, localRefs: m, meta: y } = c.root, { schemaId: v } = f.opts, u = new n.SchemaEnv({ schema: d, schemaId: v, root: $, baseId: S, localRefs: m, meta: y });
    return n.compileSchema.call(f, u), (0, r.getValidate)(a, u);
  }
  return ht.default = o, ht;
}
var mt = {}, Rs;
function Gi() {
  if (Rs) return mt;
  Rs = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicRef = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ eo(), r = {
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
      $();
    else {
      const m = a.let("valid", !1);
      $(m), s.ok(m);
    }
    function $(m) {
      if (d.schemaEnv.root.dynamicAnchors[f]) {
        const y = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`);
        a.if(y, S(y, m), S(d.validateName, m));
      } else
        S(d.validateName, m)();
    }
    function S(m, y) {
      return y ? () => a.block(() => {
        (0, n.callRef)(s, m), a.let(y, !0);
      }) : () => (0, n.callRef)(s, m);
    }
  }
  return mt.dynamicRef = o, mt.default = r, mt;
}
var Sn = {}, Ms;
function Zc() {
  if (Ms) return Sn;
  Ms = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ki(), t = /* @__PURE__ */ ce(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Sn.default = n, Sn;
}
var Cn = {}, Ns;
function Qc() {
  if (Ns) return Cn;
  Ns = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Cn.default = t, Cn;
}
var Ts;
function el() {
  if (Ts) return _n;
  Ts = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ki(), t = /* @__PURE__ */ Gi(), n = /* @__PURE__ */ Zc(), r = /* @__PURE__ */ Qc(), o = [e.default, t.default, n.default, r.default];
  return _n.default = o, _n;
}
var kn = {}, En = {}, Os;
function tl() {
  if (Os) return En;
  Os = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ no(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return En.default = t, En;
}
var xn = {}, Fs;
function nl() {
  if (Fs) return xn;
  Fs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ no(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return xn.default = t, xn;
}
var Pn = {}, zs;
function rl() {
  if (zs) return Pn;
  zs = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
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
var Is;
function ol() {
  if (Is) return kn;
  Is = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tl(), t = /* @__PURE__ */ nl(), n = /* @__PURE__ */ rl(), r = [e.default, t.default, n.default];
  return kn.default = r, kn;
}
var An = {}, Rn = {}, js;
function sl() {
  if (js) return Rn;
  js = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
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
      const { allErrors: $, props: S } = f;
      S instanceof e.Name ? i.if((0, e._)`${S} !== true`, () => i.forIn("key", c, (u) => i.if(y(S, u), () => m(u)))) : S !== !0 && i.forIn("key", c, (u) => S === void 0 ? m(u) : i.if(v(S, u), () => m(u))), f.props = !0, s.ok((0, e._)`${d} === ${n.default.errors}`);
      function m(u) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: u }), s.error(), $ || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(f, a)) {
          const w = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, w), $ || i.if((0, e.not)(w), () => i.break());
        }
      }
      function y(u, w) {
        return (0, e._)`!${u} || !${u}[${w}]`;
      }
      function v(u, w) {
        const p = [];
        for (const C in u)
          u[C] === !0 && p.push((0, e._)`${w} !== ${C}`);
        return (0, e.and)(...p);
      }
    }
  };
  return Rn.default = o, Rn;
}
var Mn = {}, Ds;
function il() {
  if (Ds) return Mn;
  Ds = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
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
        const S = s.var("valid", (0, e._)`${f} <= ${d}`);
        s.if((0, e.not)(S), () => $(S, d)), o.ok(S);
      }
      c.items = !0;
      function $(S, m) {
        s.forRange("i", m, f, (y) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: y, dataPropType: t.Type.Num }, S), c.allErrors || s.if((0, e.not)(S), () => s.break());
        });
      }
    }
  };
  return Mn.default = r, Mn;
}
var Ls;
function al() {
  if (Ls) return An;
  Ls = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sl(), t = /* @__PURE__ */ il(), n = [e.default, t.default];
  return An.default = n, An;
}
var Nn = {}, Tn = {}, qs;
function cl() {
  if (qs) return Tn;
  qs = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
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
      const { gen: s, data: i, $data: a, schema: c, schemaCode: d, it: f } = r, { opts: $, errSchemaPath: S, schemaEnv: m, self: y } = f;
      if (!$.validateFormats)
        return;
      a ? v() : u();
      function v() {
        const w = s.scopeValue("formats", {
          ref: y.formats,
          code: $.code.formats
        }), p = s.const("fDef", (0, e._)`${w}[${d}]`), C = s.let("fType"), _ = s.let("format");
        s.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => s.assign(C, (0, e._)`${p}.type || "string"`).assign(_, (0, e._)`${p}.validate`), () => s.assign(C, (0, e._)`"string"`).assign(_, p)), r.fail$data((0, e.or)(l(), h()));
        function l() {
          return $.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${_}`;
        }
        function h() {
          const g = m.$async ? (0, e._)`(${p}.async ? await ${_}(${i}) : ${_}(${i}))` : (0, e._)`${_}(${i})`, P = (0, e._)`(typeof ${_} == "function" ? ${g} : ${_}.test(${i}))`;
          return (0, e._)`${_} && ${_} !== true && ${C} === ${o} && !${P}`;
        }
      }
      function u() {
        const w = y.formats[c];
        if (!w) {
          l();
          return;
        }
        if (w === !0)
          return;
        const [p, C, _] = h(w);
        p === o && r.pass(g());
        function l() {
          if ($.strictSchema === !1) {
            y.logger.warn(P());
            return;
          }
          throw new Error(P());
          function P() {
            return `unknown format "${c}" ignored in schema at path "${S}"`;
          }
        }
        function h(P) {
          const k = P instanceof RegExp ? (0, e.regexpCode)(P) : $.code.formats ? (0, e._)`${$.code.formats}${(0, e.getProperty)(c)}` : void 0, T = s.scopeValue("formats", { key: c, ref: P, code: k });
          return typeof P == "object" && !(P instanceof RegExp) ? [P.type || "string", P.validate, (0, e._)`${T}.validate`] : ["string", P, T];
        }
        function g() {
          if (typeof w == "object" && !(w instanceof RegExp) && w.async) {
            if (!m.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${_}(${i})`;
          }
          return typeof C == "function" ? (0, e._)`${_}(${i})` : (0, e._)`${_}.test(${i})`;
        }
      }
    }
  };
  return Tn.default = n, Tn;
}
var Vs;
function ll() {
  if (Vs) return Nn;
  Vs = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ cl()).default];
  return Nn.default = t, Nn;
}
var st = {}, Bs;
function dl() {
  return Bs || (Bs = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.contentVocabulary = st.metadataVocabulary = void 0, st.metadataVocabulary = [
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
var Us;
function ul() {
  if (Us) return Ht;
  Us = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ jc(), n = /* @__PURE__ */ Xc(), r = /* @__PURE__ */ el(), o = /* @__PURE__ */ ol(), s = /* @__PURE__ */ al(), i = /* @__PURE__ */ ll(), a = /* @__PURE__ */ dl(), c = [
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
var On = {}, Rt = {}, Hs;
function fl() {
  if (Hs) return Rt;
  Hs = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Rt.DiscrError = e = {})), Rt;
}
var Ks;
function pl() {
  if (Ks) return On;
  Ks = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ fl(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ tr(), o = /* @__PURE__ */ ce(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: f, parentSchema: $, it: S } = a, { oneOf: m } = $;
      if (!S.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const y = f.propertyName;
      if (typeof y != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!m)
        throw new Error("discriminator: requires oneOf keyword");
      const v = c.let("valid", !1), u = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(y)}`);
      c.if((0, e._)`typeof ${u} == "string"`, () => w(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: y })), a.ok(v);
      function w() {
        const _ = C();
        c.if(!1);
        for (const l in _)
          c.elseIf((0, e._)`${u} === ${l}`), c.assign(v, p(_[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: y }), c.endIf();
      }
      function p(_) {
        const l = c.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: _ }, l);
        return a.mergeEvaluated(h, e.Name), l;
      }
      function C() {
        var _;
        const l = {}, h = P($);
        let g = !0;
        for (let L = 0; L < m.length; L++) {
          let O = m[L];
          if (O?.$ref && !(0, o.schemaHasRulesButRef)(O, S.self.RULES)) {
            const I = O.$ref;
            if (O = n.resolveRef.call(S.self, S.schemaEnv.root, S.baseId, I), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new r.default(S.opts.uriResolver, S.baseId, I);
          }
          const V = (_ = O?.properties) === null || _ === void 0 ? void 0 : _[y];
          if (typeof V != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
          g = g && (h || P(O)), k(V, L);
        }
        if (!g)
          throw new Error(`discriminator: "${y}" must be required`);
        return l;
        function P({ required: L }) {
          return Array.isArray(L) && L.includes(y);
        }
        function k(L, O) {
          if (L.const)
            T(L.const, O);
          else if (L.enum)
            for (const V of L.enum)
              T(V, O);
          else
            throw new Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
        }
        function T(L, O) {
          if (typeof L != "string" || L in l)
            throw new Error(`discriminator: "${y}" values must be unique strings`);
          l[L] = O;
        }
      }
    }
  };
  return On.default = i, On;
}
var Fn = {};
const hl = "https://json-schema.org/draft/2020-12/schema", ml = "https://json-schema.org/draft/2020-12/schema", gl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, yl = "meta", $l = "Core and Validation specifications meta-schema", vl = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], bl = ["object", "boolean"], wl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", _l = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Sl = {
  $schema: hl,
  $id: ml,
  $vocabulary: gl,
  $dynamicAnchor: yl,
  title: $l,
  allOf: vl,
  type: bl,
  $comment: wl,
  properties: _l
}, Cl = "https://json-schema.org/draft/2020-12/schema", kl = "https://json-schema.org/draft/2020-12/meta/applicator", El = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, xl = "meta", Pl = "Applicator vocabulary meta-schema", Al = ["object", "boolean"], Rl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ml = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Nl = {
  $schema: Cl,
  $id: kl,
  $vocabulary: El,
  $dynamicAnchor: xl,
  title: Pl,
  type: Al,
  properties: Rl,
  $defs: Ml
}, Tl = "https://json-schema.org/draft/2020-12/schema", Ol = "https://json-schema.org/draft/2020-12/meta/unevaluated", Fl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, zl = "meta", Il = "Unevaluated applicator vocabulary meta-schema", jl = ["object", "boolean"], Dl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Ll = {
  $schema: Tl,
  $id: Ol,
  $vocabulary: Fl,
  $dynamicAnchor: zl,
  title: Il,
  type: jl,
  properties: Dl
}, ql = "https://json-schema.org/draft/2020-12/schema", Vl = "https://json-schema.org/draft/2020-12/meta/content", Bl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ul = "meta", Hl = "Content vocabulary meta-schema", Kl = ["object", "boolean"], Gl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Wl = {
  $schema: ql,
  $id: Vl,
  $vocabulary: Bl,
  $dynamicAnchor: Ul,
  title: Hl,
  type: Kl,
  properties: Gl
}, Jl = "https://json-schema.org/draft/2020-12/schema", Yl = "https://json-schema.org/draft/2020-12/meta/core", Xl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Zl = "meta", Ql = "Core vocabulary meta-schema", ed = ["object", "boolean"], td = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, nd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, rd = {
  $schema: Jl,
  $id: Yl,
  $vocabulary: Xl,
  $dynamicAnchor: Zl,
  title: Ql,
  type: ed,
  properties: td,
  $defs: nd
}, od = "https://json-schema.org/draft/2020-12/schema", sd = "https://json-schema.org/draft/2020-12/meta/format-annotation", id = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ad = "meta", cd = "Format vocabulary meta-schema for annotation results", ld = ["object", "boolean"], dd = { format: { type: "string" } }, ud = {
  $schema: od,
  $id: sd,
  $vocabulary: id,
  $dynamicAnchor: ad,
  title: cd,
  type: ld,
  properties: dd
}, fd = "https://json-schema.org/draft/2020-12/schema", pd = "https://json-schema.org/draft/2020-12/meta/meta-data", hd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, md = "meta", gd = "Meta-data vocabulary meta-schema", yd = ["object", "boolean"], $d = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, vd = {
  $schema: fd,
  $id: pd,
  $vocabulary: hd,
  $dynamicAnchor: md,
  title: gd,
  type: yd,
  properties: $d
}, bd = "https://json-schema.org/draft/2020-12/schema", wd = "https://json-schema.org/draft/2020-12/meta/validation", _d = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Sd = "meta", Cd = "Validation vocabulary meta-schema", kd = ["object", "boolean"], Ed = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, xd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Pd = {
  $schema: bd,
  $id: wd,
  $vocabulary: _d,
  $dynamicAnchor: Sd,
  title: Cd,
  type: kd,
  properties: Ed,
  $defs: xd
};
var Gs;
function Ad() {
  if (Gs) return Fn;
  Gs = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = Sl, t = Nl, n = Ll, r = Wl, o = rd, s = ud, i = vd, a = Pd, c = ["/properties"];
  function d(f) {
    return [
      e,
      t,
      n,
      r,
      o,
      $(this, s),
      i,
      $(this, a)
    ].forEach((S) => this.addMetaSchema(S, void 0, !1)), this;
    function $(S, m) {
      return f ? S.$dataMetaSchema(m, c) : m;
    }
  }
  return Fn.default = d, Fn;
}
var Ws;
function Rd() {
  return Ws || (Ws = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Cc(), r = /* @__PURE__ */ ul(), o = /* @__PURE__ */ pl(), s = /* @__PURE__ */ Ad(), i = "https://json-schema.org/draft/2020-12/schema";
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
        y && (s.default.call(this, m), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ er();
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
    var f = /* @__PURE__ */ Qr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var $ = /* @__PURE__ */ tr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  })(Lt, Lt.exports)), Lt.exports;
}
var Md = /* @__PURE__ */ Rd();
const Nd = /* @__PURE__ */ cc(Md), Td = "https://json-schema.org/draft/2020-12/schema", Od = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Fd = "gufe-viz payload", zd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Id = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], jd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), ro = {
  $schema: Td,
  $id: Od,
  title: Fd,
  description: zd,
  oneOf: Id,
  $defs: jd
}, eh = [
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
], oo = ro.$id, so = new Nd({ allErrors: !0, strict: !1 });
so.addSchema(ro, oo);
const Js = so.getSchema(oo), Wi = Object.entries(ro.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), th = Wi, io = /* @__PURE__ */ new Map();
for (const e of Wi) {
  const t = so.getSchema(`${oo}#/$defs/${e}`);
  t && io.set(e, t);
}
const Ir = { valid: !0, issues: [] };
function jr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Dd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? io.get(t) : void 0;
  return n ? n(e) ? Ir : { valid: !1, issues: jr(n.errors) } : Js(e) ? Ir : { valid: !1, issues: jr(Js.errors) };
}
function nh(e, t) {
  const n = io.get(e);
  return n ? n(t) ? Ir : { valid: !1, issues: jr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ld(e, t = 8) {
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
function Ji(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!ao[t]) return qd(t);
  const { valid: n, issues: r } = Dd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ld(r)
  };
}
function qd(e) {
  const t = Object.keys(ao).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function rh(e) {
  return Ji(e)?.message ?? null;
}
class Vd extends Ee {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    za("payload", n, this);
    const r = Ji(n);
    if (r)
      return t.appendChild(Bd(r, n)), {};
    const o = n.type, s = ao[o], i = document.createElement(s);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Bd(e, t) {
  const n = z(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(pe(e.message));
  const r = (s, i) => z(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${N.warnBg};color:${N.warnFg};border:1px solid ${N.warnBorder};` : `background:${N.panelBg};color:${N.textMuted2};border:1px solid ${N.cardBorder};`),
    s
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = Ud(t);
  return o && n.appendChild(r(o, !1)), n;
}
function Ud(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ke(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ke(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
xe("gufe-view", Vd);
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
function Yi(e, t) {
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
    if (await Yi(co.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), gt);
}
let yt = null;
function or() {
  if (yt) return yt;
  const e = lo("rdkit");
  return e ? (yt = e.then((t) => window.RDKit = t), yt) : (yt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Yi(co.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), yt);
}
let vr = null;
function Xi() {
  if (!vr) {
    const e = co.d3;
    vr = lo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return vr;
}
function Zi(e, t) {
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
    t.hint && !r && (r = !0, Gd(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s);
    }
  };
}
function Hd(e) {
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
const Kd = 1600;
function Gd(e, t) {
  const n = z(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Kd);
}
const Wd = { min: 0.25, max: 12 }, Jd = 150;
function Ys(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Jd) - t;
}
function Yd(e, t = Wd) {
  const n = Ys(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = Ys(e);
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
const Xd = 2e-3;
function Qi(e) {
  return Math.exp(-e.deltaY * Xd);
}
function sr(e, t, n = {}) {
  const r = Yd(t, n.bounds), o = Zi(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(Qi(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function uo(e, t = "Reset view") {
  const n = z("button", Ct, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const br = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Zd = [
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
], oh = "hsv", H = [0, 0, 0], Qd = {
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
}, eu = "rdkit", tu = !0, nu = !0, ru = !0, ou = !0, su = "rdkit", iu = "filled", au = 0.42, cu = 1.5, lu = !0, du = "show", uu = "mono", fu = 0.51, pu = 0.74, hu = 1.6, mu = 1.7, gu = 5, yu = 0.3, $u = "#d62828", vu = "#d62828", bu = "#015ab5", wu = !1, _u = "", Su = "#7c3aed", Cu = {
  layout: eu,
  alignPair: tu,
  atomNumbers: nu,
  createdDestroyed: ru,
  modified: ou,
  style: su,
  circles: iu,
  circleRadius: au,
  circleStroke: cu,
  boundary: lu,
  hydrogens: du,
  elementColors: uu,
  numScale: fu,
  labelScale: pu,
  bondWidth: hu,
  markWidth: mu,
  haloWidth: gu,
  haloOpacity: yu,
  destroyedColor: $u,
  createdColor: vu,
  modifiedColor: bu,
  stereo: wu,
  customSpec: _u,
  customColor: Su
}, ku = {
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
}, Eu = ["rdkit", "coordgen", "conformer"], xu = ["rdkit", "recolor", "halo"], Pu = ["outline", "filled", "off"], Au = ["show", "dim", "hide"], Ru = ["cpk", "mono"], Mu = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Nu = /^#[0-9a-fA-F]{6}$/;
function Mt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Je(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Mu[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const $t = (e, t) => typeof e == "boolean" ? e : t, zn = (e, t) => typeof e == "string" && Nu.test(e) ? e : t;
function Tu(e) {
  const t = e && typeof e == "object" ? e : {}, n = ku;
  return {
    version: 1,
    layout: Mt(t.layout, Eu, n.layout),
    alignPair: $t(t.alignPair, n.alignPair),
    style: Mt(t.style, xu, n.style),
    createdDestroyed: $t(t.createdDestroyed, n.createdDestroyed),
    modified: $t(t.modified, n.modified),
    destroyedColor: zn(t.destroyedColor, n.destroyedColor),
    createdColor: zn(t.createdColor, n.createdColor),
    modifiedColor: zn(t.modifiedColor, n.modifiedColor),
    boundary: $t(t.boundary, n.boundary),
    circles: Mt(t.circles, Pu, n.circles),
    circleRadius: Je(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Je(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Mt(t.hydrogens, Au, n.hydrogens),
    elementColors: Mt(t.elementColors, Ru, n.elementColors),
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
const Me = Tu(Cu);
function Xs(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const s = /^([LlRr])[:=](.*)$/.exec(o), i = s ? s[1].toLowerCase() === "l" ? "left" : "right" : "both", a = s ? s[2] : o, c = (f) => {
      i !== "right" && t.add(f), i !== "left" && n.add(f);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const f = Math.min(+d[1], +d[2]), $ = Math.min(Math.max(+d[1], +d[2]), f + r - 1);
      for (let S = f; S <= $; S++) c(S);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function wr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), c = t.has(i);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function Zs(e) {
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
function Ou(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Fu(e, t, n) {
  const r = new Set(t.atoms), o = new Set(wr(e, r, !0));
  return {
    deletions: wr(e, r, n),
    changes: wr(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function Qs(e, t, n, r) {
  const o = Fu(t, n, e.boundary), s = [];
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
function zu(e) {
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
function Iu(e, t) {
  return e.style === "rdkit" ? "rdkit" : zu(t) ? e.style : "rdkit";
}
function ju(e, t, n, r, o, s) {
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
  e.elementColors === "mono" && (i.atomColourPalette = Qd), o === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const m of n) {
    const y = Dr(m.color);
    if (o === "rdkit") for (const u of m.bonds) d[u] = y;
    if (o === "recolor" && e.circles === "off") continue;
    const v = o === "recolor" && e.circles === "filled" ? Ou(y, 0.7) : y;
    for (const u of m.atoms)
      a[u] = v, c[u] = e.circleRadius;
  }
  const f = Dr(e.customColor);
  for (const m of r)
    m < s && (a[m] = f, c[m] = e.circleRadius);
  const $ = Object.keys(a).map(Number);
  $.length && (i.atoms = $, i.highlightAtomColors = a, i.highlightAtomRadii = c);
  const S = Object.keys(d).map(Number);
  return S.length && (i.bonds = S, i.highlightBondColors = d), i;
}
function Du(e, t, n, r) {
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
const Lu = "http://www.w3.org/2000/svg";
function ea(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function fo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const s = o.tagName.toLowerCase();
    (s === "ellipse" || s === "circle" || s === "rect") === n && r.push(o);
  }
  return r;
}
function ta(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function ei(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of ea(e, i)) {
      const c = a.style;
      ta(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of fo(e, i, !1)) a.style.fill = s;
}
function qu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(Lu, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of ea(e, a)) {
      if (ta(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", s.appendChild(d);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function Vu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of fo(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Bu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of fo(e, s, !0)) {
        const a = i.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Uu(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const s = o.style;
          n.hydrogens === "hide" ? s.display = "none" : s.opacity = "0.22";
        }
  }
}
function Hu(e, t, n, r, o, s) {
  if (s !== "rdkit")
    for (const i of r)
      if (s === "recolor") {
        const a = n.circles === "filled";
        ei(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? Vu(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && Bu(e, n, i.atoms, o, i.color);
      } else
        qu(e, n, i.bonds, i.color), ei(e, n, i.atoms, i.bonds, i.color, null);
  Uu(e, t, n);
}
const ir = `
`, Lr = "$$$$";
function qr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(ir);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), s = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let f = 0; f < o; f++) {
    const $ = n[4 + f];
    if ($ == null) throw new Error("truncated atom block");
    i.push([
      parseFloat($.substring(0, 10)) || 0,
      parseFloat($.substring(10, 20)) || 0,
      parseFloat($.substring(20, 30)) || 0
    ]), a.push($.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let f = 0; f < (isFinite(s) ? s : 0); f++) {
    const $ = n[4 + o + f];
    if ($ == null) break;
    const S = parseInt($.substring(0, 3), 10), m = parseInt($.substring(3, 6), 10), y = parseInt($.substring(6, 9), 10);
    !isFinite(S) || !isFinite(m) || c.push([S - 1, m - 1, isFinite(y) ? y : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: i };
}
function Ku(e) {
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
  return r.push("M  END"), r.join(ir);
}
const Gu = (e) => `${Ku(e)}${ir}${Lr}`, na = (e) => e.indexOf(Lr) >= 0 ? e : `${e}${ir}${Lr}`;
function po(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function ho(e, t, n, r, o) {
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
function ra(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ti = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Vr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, bt = (e) => e in Vr, ni = 400, _r = "position:absolute;inset:0;min-width:0;min-height:0;";
class Wu extends Ee {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = z("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = z(
      "div",
      `${_r}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${lt.canvas2D};`
    );
    a.appendChild(c);
    const d = Ii();
    d.wrap.style.cssText = _r, a.appendChild(d.wrap);
    const f = z(
      "div",
      `${_r}overflow:auto;padding:16px 20px;background:${N.panelBg};color:${N.textPrimary};font-size:${Q.body};`
    );
    a.appendChild(f);
    const $ = r ? po(r) : null, S = [
      ["Name", o || at, !1],
      ["SMILES", s || at, !0],
      ["Charge", i == null ? at : String(i), !1],
      ["Atoms", $ ? String($.atoms) : at, !1],
      ["Bonds", $ ? String($.bonds) : at, !1]
    ], m = z("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${ne.xl} 20px;align-items:baseline;`);
    f.appendChild(m);
    for (const [O, V, I] of S) {
      m.appendChild(
        z(
          "div",
          `font-size:${Q.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${N.textMuted2};`,
          O
        )
      );
      const K = z(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${N.textPrimary}` + (I ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Q.small};` : ""),
        V
      );
      K.title = V, m.appendChild(K);
    }
    const y = Jr(t), v = z("div", Tr, o || "Unnamed molecule");
    y && a.appendChild(v);
    const u = ut(
      "small-molecule.mode",
      "2d",
      ti.map((O) => O.id)
    ), w = ct("small-molecule.spin", !1);
    let p = u.get(), C = w.get(), _ = null, l = null;
    const h = () => {
      try {
        _?.spin(C && bt(p) ? "y" : !1);
      } catch {
      }
    }, g = (O) => {
      p = O, c.style.visibility = p === "2d" ? "visible" : "hidden", d.wrap.style.visibility = bt(p) ? "visible" : "hidden", f.style.visibility = p === "info" ? "visible" : "hidden", v.style.display = p === "info" || !y ? "none" : "block", k.disabled = !bt(p), k.style.opacity = bt(p) ? "1" : "0.5", bt(p) && _ && (_.setStyle({}, Vr[p]), _.resize(), _.render()), h();
    }, P = z("div", Ai), k = zi(
      "Spin",
      C,
      (O) => {
        C = O, h();
      },
      { title: "Toggle continuous rotation", remember: w }
    ), T = (O) => {
      O ? P.insertBefore(k, P.firstChild) : L.buttons.insertBefore(k, L.buttons.lastElementChild);
    }, L = Fi(ti, p, (O) => g(O), {
      remember: u,
      onLayout: T,
      fit: { pane: a, bar: P }
    });
    return P.appendChild(L), T(!1), a.appendChild(P), g(p), !r || !r.trim() ? (c.appendChild(pe("No molecule provided")), d.container.appendChild(pe("No molecule provided")), { cleanup: () => L.cleanup() }) : (c.appendChild(pe("Loading 2D depiction...")), or().then((O) => {
      const V = ho(O, r, ni, Me.layout);
      V ? ra(c, V, ni) : c.replaceChildren(pe("Failed to parse molecule", !0));
    }).catch((O) => {
      c.replaceChildren(pe(`RDKit failed to load: ${me(O)}`, !0));
    }), d.container.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
      d.container.replaceChildren(), _ = Qe.createViewer(d.container, { backgroundColor: lt.viewer }), _.addModel(na(r), "sdf"), _.setStyle({}, Vr[bt(p) ? p : "stick"]), _.zoomTo(), _.render(), l = sr(d.container, _), h();
    }).catch((O) => {
      d.container.replaceChildren(pe(`3D render failed: ${me(O)}`, !0));
    }), {
      onResize() {
        _ && (_.resize(), _.render());
      },
      cleanup() {
        if (L.cleanup(), l?.cleanup(), l = null, !!_) {
          try {
            _.spin(!1);
          } catch {
          }
          try {
            _.clear();
          } catch {
          }
          _ = null;
        }
      }
    });
  }
}
xe("gufe-small-molecule", Wu);
const oa = ["HOH", "WAT", "SOL", "TIP3"], ri = { hetflag: !1 }, Ju = { hetflag: !0 }, Yu = { resn: oa }, Ie = {
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
function sa(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, s = 0, i = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const f = c.slice(17, 20).trim(), $ = c.slice(21, 22).trim() || "_", S = c.slice(22, 26).trim(), m = c.slice(26, 27).trim();
    oa.indexOf(f) !== -1 && s++, t.add($), n.add(`${$}|${S}${m}|${f}`);
    const y = parseInt(S, 10);
    isNaN(y) || (y < i && (i = y), y > a && (a = y));
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
function ia(e) {
  return [
    `${xt(e.chains)} chains`,
    `${xt(e.residues)} residues`,
    `${xt(e.atoms)} atoms`,
    `${xt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${xt(e.waters)} water)` : "")
  ];
}
function Xu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Br(e, t, n, r, o) {
  const s = r || (() => {
  }), i = Xu(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(ri),
    t.rep === "stick" ? { stick: { radius: Ie.stick.radius, ...i } } : t.rep === "sphere" ? { sphere: { scale: Ie.sphere.scale, ...i } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...i } }
    )
  ), e.setStyle(
    a(Ju),
    t.hetero ? {
      stick: { radius: Ie.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ie.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(Yu),
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
          a(ri)
        )
      ).then(() => {
        s(null), e.render();
      }).catch((c) => s(`Surface failed: ${me(c)}`, "error"));
    } catch (c) {
      s(`Surface failed: ${me(c)}`, "error");
    }
  }, 30);
}
function Zu(e, t) {
  e.setStyle(t, {
    stick: { radius: Ie.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Ie.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const oi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], si = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Qu = 460, ii = /* @__PURE__ */ new Map();
function aa(e) {
  const t = ut(
    "protein.representation",
    "cartoon",
    oi.map((g) => g.id)
  ), n = ut(
    "protein.color",
    "chain",
    si.map((g) => g.id)
  ), r = ct("protein.waters", e.waters), o = ct("protein.hetero", !0), s = ct("protein.spin", !1), i = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: s.get()
  };
  let a = null, c = null;
  const d = z("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const f = z("div", Ea);
  d.appendChild(f);
  const $ = ({ label: g, controls: P }) => {
    const k = z("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    k.appendChild(
      z(
        "span",
        `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${N.textMuted};`,
        g
      )
    );
    for (const T of P) k.appendChild(T);
    return k;
  }, S = z("div", `display:flex;flex-direction:column;gap:2px;font-size:${Q.small};color:${N.textMuted};`), m = $({ label: "Contents", controls: [S] });
  m.style.display = "none";
  const v = Zr(f, () => {
    const g = z("div", `${Kr}padding-top:${xa};`), P = Jn(
      oi,
      i.rep,
      (V) => {
        i.rep = V, e.restyle();
      },
      t
    );
    g.appendChild($({ label: "Style", controls: [P] }));
    const k = jt(
      si,
      i.color,
      (V) => {
        i.color = V, e.restyle();
      },
      n
    );
    k.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild($({ label: "Color", controls: [k] }));
    const T = z("div", "display:flex;flex-wrap:wrap;gap:4px;"), L = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", s, () => a?.spin(i.spin ? "y" : !1)]
    ];
    for (const [V, I, K, Y, re] of L)
      T.appendChild(
        zi(
          I,
          i[V],
          (q) => {
            i[V] = q, re();
          },
          { title: K, remember: Y }
        )
      );
    g.appendChild($({ label: "Show", controls: [T] }));
    const O = uo(() => e.reset ? e.reset() : c?.reset());
    return O.style.cssText += "width:100%;box-sizing:border-box;", g.appendChild($({ label: "Camera", controls: [...e.camera?.() ?? [], O] })), g.appendChild(m), g;
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
    z("div", `${ka}pointer-events:none;font-size:${Q.heading};font-weight:${ge.bold};`, u)
  ), d.appendChild(v.panel);
  const w = Ii();
  d.appendChild(w.wrap);
  let p = null;
  const C = Xn(d, (g) => {
    const P = g > 0 && g < Qu;
    P !== p && (p = P, d.style.flexDirection = P ? "column" : "row", Yr(v.panel, P), a?.resize(), a?.render());
  }), _ = z(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Q.body};z-index:20;display:none;pointer-events:none;`
  );
  w.wrap.appendChild(_);
  const l = (g, P) => {
    if (g == null) {
      _.style.display = "none";
      return;
    }
    _.textContent = g, _.style.display = "block";
    const k = P === "error";
    _.style.background = k ? N.warnBg : N.toolbarBg, _.style.color = k ? N.warnFg : N.textMuted, _.style.border = `1px solid ${k ? N.warnBorder : N.toolbarBorder}`;
  }, h = () => {
    if (!e.cameraKey || !a) return;
    const g = a.getView?.();
    Array.isArray(g) && g.length >= 4 && g.every((P) => Number.isFinite(P)) && ii.set(e.cameraKey, g.slice());
  };
  return {
    opts: i,
    pane: w,
    menu: v,
    showStatus: l,
    setStats: (g) => {
      S.replaceChildren(...g.map((P) => z("div", "overflow-wrap:anywhere;", P))), m.style.display = g.length ? "" : "none";
    },
    restoreCamera: () => {
      const g = e.cameraKey ? ii.get(e.cameraKey) : void 0;
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
        if (C(), h(), c?.cleanup(), c = null, !!a) {
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
class ef extends Ee {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function s() {
      const a = i.viewer();
      a && Br(a, i.opts, o, i.showStatus);
    }
    const i = aa({
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
      restyle: s
    });
    if (!r || !r.trim())
      return i.showStatus("No protein data - waiting for a PDB payload."), {};
    try {
      o = sa(r), i.setStats(ia(o));
    } catch (a) {
      i.showStatus(`PDB parse error: ${me(a)}`, "error");
    }
    return i.showStatus("Loading 3D viewer..."), rr().then(() => {
      const a = Qe.createViewer(i.pane.container, { backgroundColor: lt.viewer });
      i.setViewer(a), a.addModel(r, "pdb"), Br(a, i.opts, o, i.showStatus), i.restoreCamera() || a.zoomTo(), a.spin(i.opts.spin ? "y" : !1), a.render(), i.setInteraction(sr(i.pane.container, a));
    }).catch((a) => {
      i.showStatus(`Failed to render structure: ${me(a)}`, "error");
    }), i.handle;
  }
}
xe("gufe-protein", ef);
function Et(e) {
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
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) Ur(o, t, n);
}
function Ge(e, t) {
  return t ? e.get(t) : void 0;
}
function Se(e, t, n) {
  const r = Ge(e, t);
  return r?.type === n ? r : void 0;
}
function mo(e, t) {
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
const go = "Cmd/Ctrl-click to select several.";
function tf(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : tt(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function nf(e, t) {
  navigator.clipboard?.writeText(e).catch(() => ai(e, t)), navigator.clipboard || ai(e, t);
}
function ai(e, t) {
  const n = z("textarea", `width:100%;height:80px;font-size:${Q.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function rf(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = z("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ca(e) {
  const { words: t } = e, n = ut(e.setting, "names", ["names", "keys"]), r = z("div", "display:flex;flex-direction:column;gap:6px;"), o = z("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${N.textMuted};`);
  o.appendChild(z("span", "", "copy as"));
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
  const i = z("div", `font-size:${Q.tiny};line-height:1.5;color:${N.textMuted2};`), a = (f) => {
    i.textContent = f;
  }, c = z("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [f, $, S] of d) {
    const m = z("button", `${Ct}flex:1;`, $.button);
    m.title = S, m.onclick = (y) => {
      const v = s.value, u = tf(e.nodes, e.edges, e.selected, f, v);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : f === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${go}` : "Nothing to copy."
        );
        return;
      }
      const w = u.split(`
`).length;
      y.shiftKey ? (rf(u, `selected-${$.plural}.txt`), a(`Saved ${w} ${$.plural} to a file.`)) : (nf(u, r), a(
        f === "edges" ? `Copied ${w} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(m);
  }
  return r.appendChild(c), r.appendChild(i), r.appendChild(z("div", `font-size:${Q.tiny};color:${N.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const la = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(la, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function ci(e, t) {
  const n = document.createElementNS(la, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const of = 3;
function da(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const sf = { min: 0.15, max: 5 }, af = 1e-9;
function ua(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? sf;
  let s = 1, i = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${s})`), n.onTransform?.(s, i, a);
  }, d = () => {
    const I = e.getBoundingClientRect();
    return {
      width: I.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: I.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, f = (I, K, Y) => Math.min(1, K / (I.maxX - I.minX + r * 2), Y / (I.maxY - I.minY + r * 2)), $ = () => {
    const I = n.bounds();
    if (!I) return o.min;
    const { width: K, height: Y } = d();
    return Math.min(o.min, f(I, K, Y));
  }, S = (I) => Math.min(o.max, Math.max($(), s * I)), m = () => {
    s = 1, i = 0, a = 0;
    const I = n.bounds();
    if (!I) {
      c();
      return;
    }
    const { width: K, height: Y } = d();
    s = f(I, K, Y), i = K / 2 - (I.minX + I.maxX) / 2 * s, a = Y / 2 - (I.minY + I.maxY) / 2 * s, c();
  }, v = Zi(e, {
    onZoom: (I) => {
      const K = e.getBoundingClientRect(), Y = I.clientX - K.left, re = I.clientY - K.top, q = S(Qi(I)), W = q / s;
      return i = Y - (Y - i) * W, a = re - (re - a) * W, s = q, c(), Math.abs(W - 1) > af;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let w = null, p = null, C = !1, _ = null;
  const l = (I) => ({
    x: I.clientX - i,
    y: I.clientY - a,
    from: { x: I.clientX, y: I.clientY }
  }), h = (I) => {
    I.pointerType === "touch" && u.size > 1 || (p = l(I), C = !1);
  }, g = (I) => {
    w || (_ && I.pointerType === "touch" && (p = { x: _.x - i, y: _.y - a, from: _ }, _ = null), p && (Math.hypot(I.clientX - p.from.x, I.clientY - p.from.y) > of && (C = !0), i = I.clientX - p.x, a = I.clientY - p.y, c()));
  }, P = () => {
    p = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", g), e.addEventListener("pointerup", P), e.addEventListener("pointercancel", P), e.addEventListener("pointerleave", P);
  const k = () => {
    const [I, K] = [...u.values()];
    return { cx: (I.x + K.x) / 2, cy: (I.y + K.y) / 2, span: Math.max(1, Math.hypot(I.x - K.x, I.y - K.y)) };
  }, T = (I) => {
    if (I.pointerType === "touch") {
      if (u.set(I.pointerId, { x: I.clientX, y: I.clientY }), u.size !== 2) {
        w = null;
        return;
      }
      w = k(), p = null, C = !0;
    }
  }, L = (I) => {
    if (I.pointerType !== "touch" || !u.has(I.pointerId) || (u.set(I.pointerId, { x: I.clientX, y: I.clientY }), !w || u.size !== 2)) return;
    I.preventDefault(), I.stopPropagation();
    const K = k(), Y = e.getBoundingClientRect(), re = S(K.span / w.span), q = re / s;
    i = K.cx - Y.left - (w.cx - Y.left - i) * q, a = K.cy - Y.top - (w.cy - Y.top - a) * q, s = re, w = K, c();
  }, O = (I) => {
    if (I.pointerType !== "touch") return;
    if (u.delete(I.pointerId), u.size === 2) {
      w = k();
      return;
    }
    w = null;
    const [K] = [...u.values()];
    _ = u.size === 1 && K ? { ...K } : null;
  };
  e.addEventListener("pointerdown", T, !0), e.addEventListener("pointermove", L, { capture: !0, passive: !1 }), e.addEventListener("pointerup", O, !0), e.addEventListener("pointercancel", O, !0);
  const V = Hd(e);
  return {
    fit: m,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: m,
    centreOn(I, K, Y = 1) {
      const { width: re, height: q } = d();
      s = Math.max(s, Y), i = re / 2 - I * s, a = q / 2 - K * s, c();
    },
    transform: () => ({ scale: s, tx: i, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(I, K, Y) {
      s = I, i = K, a = Y, c();
    },
    cleanup() {
      v.cleanup(), V.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", g), e.removeEventListener("pointerup", P), e.removeEventListener("pointercancel", P), e.removeEventListener("pointerleave", P), e.removeEventListener("pointerdown", T, !0), e.removeEventListener("pointermove", L, { capture: !0 }), e.removeEventListener("pointerup", O, !0), e.removeEventListener("pointercancel", O, !0);
    }
  };
}
const cf = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function fa(e) {
  const t = { ...e };
  for (const n of cf) delete t[n];
  return t;
}
const lf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), df = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), uf = (e) => df.has(lf(e));
function pa(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let s = 0;
  for (const i of Array.from(o.childNodes)) {
    if (i.nodeType !== 1) continue;
    const a = i.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && uf(i) || (e.appendChild(document.importNode(i, !0)), s++);
  }
  return s ? !0 : (e.replaceChildren(), !1);
}
const ff = 8, pf = 64, hf = () => new Promise((e) => setTimeout(e, 0));
function Hr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function mf(e, t, n, r) {
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
    Hr(o);
  }
}
function ha(e, t, n = !0) {
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
    let $ = null;
    try {
      $ = f.get_qmol(a);
    } catch {
      $ = null;
    }
    if (!$) return { status: "invalid" };
    if (!$.get_substruct_matches)
      return Hr($), { status: "unsupported" };
    const S = /* @__PURE__ */ new Map();
    let m = 0;
    try {
      let y = performance.now(), v = 0;
      for (let u = 0; u < t.length; u++) {
        const w = t[u] ? mf(f, $, t[u], n) : null;
        if (w ? w.length && S.set(u, w) : m++, !(++v < pf && performance.now() - y < ff)) {
          if (await hf(), c !== o) return { status: "superseded" };
          v = 0, y = performance.now();
        }
      }
    } finally {
      Hr($);
    }
    return r.set(a, S), { status: "ok", matched: S, unreadable: m };
  }, cancel: () => void ++o };
}
const gf = 250;
function ma(e) {
  const t = z("div", "display:flex;flex-direction:column;gap:8px;"), n = z("input", `${Wn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = z("div", `font-size:${Q.tiny};line-height:1.5;min-height:1.5em;color:${N.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => s(n.value), gf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && s(n.value);
    }
  };
}
const yf = 1e-6;
function In(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function li(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function $f(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function di(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], c = s[i][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const f = t[a * 3 + a], $ = t[c * 3 + c], S = ($ - f) / (2 * d);
      let m;
      Math.abs(S) > 1e10 ? m = 1 / (2 * S) : m = (S >= 0 ? 1 : -1) / (Math.abs(S) + Math.sqrt(S * S + 1));
      const y = 1 / Math.sqrt(1 + m * m), v = m * y;
      t[a * 3 + a] = f - m * d, t[c * 3 + c] = $ + m * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== c) {
          const w = t[u * 3 + a], p = t[u * 3 + c];
          t[u * 3 + a] = y * w - v * p, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = v * w + y * p, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const w = n[u * 3 + a], p = n[u * 3 + c];
        n[u * 3 + a] = y * w - v * p, n[u * 3 + c] = v * w + y * p;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function vf(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let _ = 0; _ < n; _++)
    r[0] += e[_][0], r[1] += e[_][1], r[2] += e[_][2], o[0] += t[_][0], o[1] += t[_][1], o[2] += t[_][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let _ = 0; _ < n; _++) {
    const l = e[_][0] - r[0], h = e[_][1] - r[1], g = e[_][2] - r[2], P = t[_][0] - o[0], k = t[_][1] - o[1], T = t[_][2] - o[2];
    s[0] += l * P, s[1] += l * k, s[2] += l * T, s[3] += h * P, s[4] += h * k, s[5] += h * T, s[6] += g * P, s[7] += g * k, s[8] += g * T;
  }
  const i = li(s), a = In(i, s), c = In(s, i);
  let d = di(a), f = di(c);
  function $(_) {
    const l = [0, 1, 2].sort((g, P) => _.values[P] - _.values[g]), h = new Array(9);
    for (let g = 0; g < 3; g++) {
      const P = l[g];
      h[g] = _.vectors[P], h[3 + g] = _.vectors[3 + P], h[6 + g] = _.vectors[6 + P];
    }
    return {
      values: [_.values[l[0]], _.values[l[1]], _.values[l[2]]],
      vectors: h
    };
  }
  d = $(d), f = $(f);
  const S = d.vectors, m = f.vectors;
  for (let _ = 0; _ < 3; _++) {
    const l = S[_], h = S[3 + _], g = S[6 + _], P = s[0] * l + s[1] * h + s[2] * g, k = s[3] * l + s[4] * h + s[5] * g, T = s[6] * l + s[7] * h + s[8] * g, L = m[_], O = m[3 + _], V = m[6 + _];
    P * L + k * O + T * V < 0 && (m[_] = -L, m[3 + _] = -O, m[6 + _] = -V);
  }
  const y = li(S);
  let v = In(m, y);
  $f(v) < 0 && (m[2] = -m[2], m[5] = -m[5], m[8] = -m[8], v = In(m, y));
  const u = v[0] * o[0] + v[1] * o[1] + v[2] * o[2], w = v[3] * o[0] + v[4] * o[1] + v[5] * o[2], p = v[6] * o[0] + v[7] * o[1] + v[8] * o[2], C = d.values[1] > yf * d.values[0];
  return { R: v, t: [r[0] - u, r[1] - w, r[2] - p], determined: C };
}
function bf(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const ui = `
`, Sr = 4;
function fi(e, t, n) {
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
function wf(e, t, n) {
  const r = [], o = [];
  for (const [f, $] of n) {
    const S = e[$], m = t[f];
    !S || !m || (r.push(S), o.push(m));
  }
  if (r.length < 2) return null;
  const s = (f) => {
    let $ = 0, S = 0;
    for (const m of f)
      $ += m[0], S += m[1];
    return [$ / f.length, S / f.length];
  }, i = s(r), a = s(o);
  let c = null, d = -1 / 0;
  for (const f of [!1, !0]) {
    let $ = 0, S = 0;
    for (let p = 0; p < r.length; p++) {
      const C = (f ? -1 : 1) * (r[p][0] - i[0]), _ = r[p][1] - i[1], l = o[p][0] - a[0], h = o[p][1] - a[1];
      $ += C * h - _ * l, S += C * l + _ * h;
    }
    const m = Math.hypot($, S);
    if (m <= d) continue;
    d = m;
    const y = Math.atan2($, S), v = Math.cos(y), u = Math.sin(y), w = (f ? -1 : 1) * i[0];
    c = {
      cos: v,
      sin: u,
      mirror: f,
      tx: a[0] - (v * w - u * i[1]),
      ty: a[1] - (u * w + v * i[1])
    };
  }
  return c;
}
function _f(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Sf(e, t, n) {
  const r = po(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(ui);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[Sr + s], a = t[s];
    if (i == null || !a) return e;
    o[Sr + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Sr + r.atoms + a, d = o[c];
      if (d == null) break;
      const f = parseInt(d.substring(9, 12), 10);
      f !== 1 && f !== 6 || (o[c] = d.substring(0, 9) + String(f === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(ui);
}
function Cf(e, t, n) {
  try {
    const r = (i) => qr(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = wf(o, r(e), n);
    return s ? Sf(
      t,
      o.map((i) => _f(s, i)),
      s.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", me(r)), t;
  }
}
function kf(e, t, n, r, o) {
  const s = fi(e, t, r), i = fi(e, n, r);
  return !o || r === "conformer" ? { left: s, right: i } : { left: s, right: Cf(s, i, o) };
}
const Ef = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, xf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Pf() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Cr = Pf() ? Ef : xf, pi = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], kr = 420, Af = {
  mapped: null,
  element: Me.modifiedColor,
  uniqueA: Me.destroyedColor,
  uniqueB: Me.createdColor
}, Rf = 132, Ue = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Er = { gap: 2.5, minLiftFraction: 0.6 }, Mf = 24, zt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function hi(e, t, n) {
  const r = [], o = [], s = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? o.push(i) : s.push(i);
  }
  return { atoms: r, elements: o, mapped: s };
}
function Nf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Tf(e, t, n) {
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
function ga(e, t) {
  const n = Se(t, e.componentA, "SmallMoleculeComponentViz"), r = Se(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: mo(t, [e.componentA, e.componentB]) };
}
function Of(e, t, n) {
  const r = [], o = [];
  for (const [i, a] of n) {
    const c = e.coords[i], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const s = vf(r, o);
  return s?.determined ? { ...t, coords: t.coords.map((i) => bf(i, s.R, s.t)) } : t;
}
function mi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Ff(e, t) {
  const n = mi(e), r = mi(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + Er.gap, a = Er.minLiftFraction * s + Er.gap;
  return { axis: o, lift: Math.max(i, a) };
}
function zf(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let s = 1 / 0;
    for (const i of o)
      i[0] < s && (s = i[0]), i[0] - s > n && (n = i[0] - s);
  }
  const r = Math.round(n * 10) / 10;
  return (r > zt.minSpread ? r : zt.minSpread) * zt.spreadFactor;
}
function If(e, t) {
  const n = Zd, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const f = (S) => parseInt(S.slice(1 + d * 2, 3 + d * 2), 16), $ = Math.round(f(n[s]) + (f(n[i]) - f(n[s])) * a);
    c += $.toString(16).padStart(2, "0");
  }
  return c;
}
class jf extends Ee {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = Se(r, n.componentA, "SmallMoleculeComponentViz"), s = Se(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        pe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = tt(o), a = tt(s), c = Nf(n);
    let d, f;
    try {
      d = qr(o.sdf, i), f = qr(s.sdf, a);
    } catch (R) {
      return t.appendChild(pe(`Could not read a molecule: ${me(R)}`, !0)), {};
    }
    f = Of(d, f, c);
    const $ = /* @__PURE__ */ new Map();
    for (const [R, x] of c) $.set(x, R);
    const S = hi(c, d.symbols, f.symbols), m = hi($, f.symbols, d.symbols), y = Jr(t), v = z("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(v);
    const u = z("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    v.appendChild(u);
    const w = ut("atom-mapping.mode", "plain", pi.map((R) => R.id));
    let p = w.get();
    const C = z("div", Ai), _ = Fi(
      pi,
      p,
      (R) => {
        p = R, W();
      },
      { remember: w, fit: { pane: v, bar: C } }
    );
    C.appendChild(_), v.appendChild(C);
    let l = [], h = 0, g = !0;
    const P = () => {
      h && cancelAnimationFrame(h), h = 0;
      for (const R of l) {
        R.interaction?.cleanup();
        try {
          R.viewer?.clear();
        } catch {
        }
      }
      l = [], u.replaceChildren();
    }, k = (R) => {
      const x = z("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), j = z("div", "flex:1;position:relative;min-height:0;");
      j.dataset.gufeViewer = "", x.appendChild(j), y && x.appendChild(z("div", Tr, R)), u.appendChild(x);
      const M = { container: j, viewer: null, interaction: null };
      return l.push(M), M;
    }, T = () => {
      if (l.length < 2) return;
      const R = l.map(() => "");
      let x = !1;
      const j = () => {
        if (g) {
          if (!x)
            for (let M = 0; M < l.length; M++) {
              const b = l[M].viewer;
              if (!b) continue;
              const E = JSON.stringify(b.getView());
              if (E !== R[M]) {
                x = !0;
                for (let D = 0; D < l.length; D++)
                  D !== M && l[D].viewer && (l[D].viewer.setView(b.getView()), l[D].viewer.render()), R[D] = E;
                x = !1;
                break;
              }
            }
          h = requestAnimationFrame(j);
        }
      };
      h = requestAnimationFrame(j);
    }, L = (R, x) => {
      const j = Qe.createViewer(R.container, { backgroundColor: lt.viewer });
      for (const { mol: M } of x) j.addModel(Gu(M), "sdf");
      return R.viewer = j, j;
    }, O = (R) => {
      R.viewer && (R.interaction = sr(R.container, R.viewer));
    }, V = () => {
      for (const R of [d, f]) {
        const x = k(R.name), j = L(x, [{ mol: R }]);
        j.setStyle(
          {},
          { stick: { radius: Ue.stick, colorscheme: "Jmol" }, sphere: { scale: Ue.sphere, colorscheme: "Jmol" } }
        ), j.zoomTo(), j.render(), O(x);
      }
      T();
    }, I = () => {
      const R = Me, x = Xs(R.customSpec), j = [
        { mol: d, uniques: S, side: "left", custom: x.left },
        { mol: f, uniques: m, side: "right", custom: x.right }
      ];
      for (const M of j) {
        const b = k(M.mol.name), E = L(b, [{ mol: M.mol }]);
        E.setStyle(
          {},
          { stick: { radius: Ue.stick, color: Cr.core }, sphere: { scale: Ue.sphere, color: Cr.core } }
        );
        const D = (G, U) => {
          E.addStyle(
            { serial: G },
            {
              stick: { radius: Ue.markStick, color: Zs(U) },
              sphere: { scale: Ue.markSphere, color: Zs(U) }
            }
          );
        };
        for (const G of Qs(R, M.mol, M.uniques, M.side))
          for (const U of G.atoms) D(U, G.color);
        for (const G of M.custom)
          G < M.mol.symbols.length && D(G, R.customColor);
        E.zoomTo(), E.render(), O(b);
      }
      T();
    }, K = () => {
      const R = k(`${i} (left), both overlaid (middle), ${a} (right)`), x = zf(d.coords, f.coords), j = (te, A) => ({
        ...te,
        coords: te.coords.map(([F, B, J]) => [F + A, B, J])
      }), M = j(d, -x), b = j(f, x), E = L(R, [{ mol: M }, { mol: b }, { mol: d }, { mol: f }]);
      E.setStyle({}, { stick: {} });
      const D = Array.from(c);
      D.forEach(([te, A], F) => {
        const B = M.coords[te], J = b.coords[A];
        if (!B || !J) return;
        const ee = If(F, D.length);
        for (const [X, oe, ie] of [B, J])
          E.addSphere({
            center: { x: X, y: oe, z: ie },
            radius: zt.sphereRadius,
            color: ee,
            alpha: zt.sphereAlpha
          });
      }), E.zoomTo();
      const { clientWidth: G, clientHeight: U } = R.container, Z = G - 2 * Mf;
      Z > 0 && Z < U && E.zoom(Z / U), E.render(), O(R);
    }, Y = () => {
      const R = k(`${i} to ${a}  (${c.size} mapped pairs)`), { axis: x, lift: j } = Ff(d.coords, f.coords), M = {
        ...f,
        coords: f.coords.map((D) => {
          const G = [D[0], D[1], D[2]];
          return G[x] += j, G;
        })
      }, b = L(R, [{ mol: d }, { mol: M }]), E = {
        stick: { radius: Ue.stick, colorscheme: "Jmol" },
        sphere: { scale: Ue.pairSphere, colorscheme: "Jmol" }
      };
      b.setStyle({ model: 0 }, E), b.setStyle({ model: 1 }, E);
      for (const [D, G] of c) {
        const U = d.coords[D], Z = M.coords[G];
        !U || !Z || b.addCylinder({
          start: { x: U[0], y: U[1], z: U[2] },
          end: { x: Z[0], y: Z[1], z: Z[2] },
          radius: Ue.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Cr.pairLine
        });
      }
      b.zoomTo(), x === 2 ? b.rotate(90, "x") : x === 0 && b.rotate(-90, "z"), b.render(), O(R);
    }, re = () => {
      const R = Me, x = Xs(R.customSpec), M = [
        { mol: d, uniques: S, side: "left", custom: x.left },
        { mol: f, uniques: m, side: "right", custom: x.right }
      ].map((b) => {
        const E = z("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), D = z(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${lt.canvas2D};`
        );
        return D.appendChild(pe("Loading 2D depiction...")), E.appendChild(D), y && E.appendChild(z("div", Tr, b.mol.name)), u.appendChild(E), { box: D, side: b };
      });
      or().then((b) => {
        const E = Iu(R, b), D = kf(b, o.sdf, s.sdf, R.layout, R.alignPair ? c : null);
        for (const { box: G, side: U } of M) {
          const Z = Qs(R, U.mol, U.uniques, U.side), te = ju(
            R,
            kr,
            Z,
            U.custom,
            E,
            U.mol.symbols.length
          ), A = Du(b, U.side === "left" ? D.left : D.right, kr, te);
          if (G.replaceChildren(), !A) {
            G.appendChild(pe("Failed to parse molecule", !0));
            continue;
          }
          ra(G, A, kr);
          const F = G.querySelector("svg");
          F && Hu(F, U.mol, R, Z, U.custom, E);
        }
      }).catch((b) => {
        for (const { box: E } of M)
          E.replaceChildren(pe(`RDKit failed to load: ${me(b)}`, !0));
      });
    }, q = () => {
      const R = z(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(R);
      const x = z("div", "display:flex;flex-direction:column;gap:2px;");
      x.appendChild(
        z(
          "div",
          `font-size:${Q.title};font-weight:${ge.bold};color:${je.title};`,
          n.name || `${i} to ${a}`
        )
      ), R.appendChild(x);
      const j = Tf(c, d.symbols, f.symbols), M = z("div", Re.row), b = [];
      let E = null;
      const D = (X, oe, ie, de) => {
        const fe = z("button", `${Re.plain}${Re.button}`);
        fe.type = "button", fe.appendChild(Te(X, String(oe), de)), fe.onclick = () => {
          E = E === ie ? null : ie, J();
        }, b.push({ button: fe, kinds: ie }), M.appendChild(fe);
      }, G = (X, oe) => {
        const ie = z("span", Re.plain);
        ie.appendChild(Te(X, oe)), M.appendChild(ie);
      };
      D("mapped atoms", c.size, ["mapped", "element"]), D("element changes", S.elements.length, ["element"], Me.modifiedColor), D(`unique to ${i}`, S.atoms.length, ["uniqueA"], Me.destroyedColor), D(`unique to ${a}`, m.atoms.length, ["uniqueB"], Me.createdColor), G(`atoms in ${i}`, String(d.symbols.length)), G(`atoms in ${a}`, String(f.symbols.length)), G("score", n.score == null ? at : n.score.toFixed(3)), R.appendChild(M), R.appendChild(z("div", Or, "Correspondence"));
      const U = z("div", Fr);
      R.appendChild(U);
      const Z = z(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Rf}px,1fr));gap:${ne.xs} ${ne.md};font-family:${Q.mono};font-size:${Q.small};color:${je.primary};`
      );
      R.appendChild(Z);
      const te = String(Math.max(d.symbols.length, f.symbols.length, 1) - 1).length, A = (X, oe) => `${(X == null ? at : String(X)).padStart(te)} ${oe.padEnd(2)}`, F = (X) => {
        if (X.kind === "uniqueA") return `${i} atom ${X.a} ${X.symbolA} maps to nothing`;
        if (X.kind === "uniqueB") return `${a} atom ${X.b} ${X.symbolB} maps to nothing`;
        const oe = X.kind === "element" ? ", an element change" : "";
        return `${i} atom ${X.a} ${X.symbolA} maps to ${a} atom ${X.b} ${X.symbolB}${oe}`;
      }, B = (X) => {
        const oe = z(
          "div",
          `white-space:pre;padding:${ne.xs} ${ne.md};border-radius:${Oe.sm};background:${lt.card};border-left:3px solid ${Af[X.kind] ?? "transparent"};`,
          `${A(X.a, X.symbolA)} -> ${A(X.b, X.symbolB)}`
        );
        return oe.title = F(X), oe.dataset.gufeRelation = X.kind, oe;
      }, J = () => {
        const X = E, oe = X ? j.filter((ie) => X.includes(ie.kind)) : j;
        Z.replaceChildren(...oe.map(B)), oe.length || Z.appendChild(
          z("div", `${Fr}grid-column:1/-1;`, E ? "No atoms of that kind." : "This mapping has no atoms.")
        ), U.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${i} -> ${a}, by atom index and element` + (E ? "; click the chip again for all of them" : "");
        for (const ie of b) {
          const de = ie.kinds === E;
          ie.button.style.cssText = `${Re.plain}${de ? Re.active : Re.button}`, ie.button.setAttribute("aria-pressed", String(de)), ie.button.title = de ? "Show every atom" : "Show only these atoms";
        }
      };
      J();
      const ee = Object.entries(n.annotations ?? {}).filter(([X]) => X !== "score");
      if (ee.length) {
        R.appendChild(z("div", Or, "Annotations"));
        const X = z("div", `${Aa}color:${je.faint};`);
        for (const [oe, ie] of ee)
          X.appendChild(z("div", "", `${oe}: ${String(ie)}`));
        R.appendChild(X);
      }
    }, W = () => {
      if (P(), p === "info") {
        q();
        return;
      }
      if (p === "2d") {
        re();
        return;
      }
      u.appendChild(pe("Loading 3D viewer...")), rr().then(() => {
        g && (u.replaceChildren(), p === "colored" ? I() : p === "openfe" ? K() : p === "lines" ? Y() : V());
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
        g = !1, _.cleanup(), P();
      }
    };
  }
}
xe("gufe-atom-mapping", jf);
const gi = ["Force-directed", "Circular", "Radial"], Df = "ligand-network", Lf = "Click a ligand or an edge to see it.";
function qf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Vf(e) {
  return fa(e);
}
const yi = (e) => Math.round(e * 100) / 100;
function Bf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, s = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: s };
}
function Uf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Nt = { initial: 0.58, min: 0.25, max: 0.8 }, Ne = 38, $i = 200, Hf = 4, Kf = 14, Gf = 18, _e = {
  fontSize: 11,
  below: Ne + 12,
  minFontSize: 7,
  insideWidth: (Ne - 6) * 2
}, Ft = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, vi = 1.5, Wf = 6.5, Jf = 0.9, Yf = 14, xr = { size: 8, clearance: 8 }, Xf = { fontSize: 10 }, Zf = 0.4, Qf = Dr(N.netMatchAtom), Tt = { padding: 4, opacity: 0.95 }, ep = 3, St = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], tp = (e) => St.find((t) => e >= t.from) ?? St[St.length - 1], np = (e) => St[Math.min(St.indexOf(e) + 1, St.length - 1)], jn = 200, rp = 24, Pr = { node: 0.12, edge: 0.06 }, op = 1.8, bi = 2 * Ne + 68, Ce = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: bi,
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
  collisionPadding: bi / 2 - Ne,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function sp(e) {
  const t = z(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Q.small};line-height:1.5;max-width:260px;background:${N.tooltipBg};border:1px solid ${N.tooltipBorder};color:${N.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function ip(e) {
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
      refX: Ne + xr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: xr.size,
      markerHeight: xr.size,
      orient: "auto"
    });
    return s.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function ap(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function cp(e) {
  const [t, n] = N.netEdgeRamp.map(ap), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const He = tt, lp = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function dp(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (y) => (e.matched().get(y) ?? []).join(","), s = (y, v) => {
    if (t.has(v) || n.has(v)) return;
    const u = e.nodes[v], w = e.matched().get(v), p = u.sdf && ho(
      y,
      u.sdf,
      $i,
      Me.layout,
      w && { atoms: w, color: Qf, radius: Zf }
    );
    if (!p) {
      n.add(v);
      return;
    }
    if (!pa(e.depictionGroups[v], p, $i, (Ne - Hf) * 2)) {
      n.add(v);
      return;
    }
    t.add(v), r[v] = o(v);
  }, i = () => {
    for (const y of [...t])
      r[y] !== o(y) && (e.depictionGroups[y].replaceChildren(), t.delete(y));
  }, a = [], c = (y, v) => {
    if (a[y]) return a[y];
    v.setAttribute("font-size", String(_e.fontSize));
    let u = 0;
    try {
      u = v.getBBox().width;
    } catch {
      return _e.fontSize;
    }
    if (!u) return _e.fontSize;
    const w = _e.fontSize * _e.insideWidth / u;
    return a[y] = Math.max(_e.minFontSize, Math.min(_e.fontSize, w)), a[y];
  }, d = [], f = (y) => {
    const v = e.captionPlates[y];
    if (d[y] === _e.below) {
      v.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[y].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      v.setAttribute("display", "none");
      return;
    }
    v.setAttribute("x", String(u.x - Ft.captionPadX)), v.setAttribute("y", String(u.y - Ft.captionPadY)), v.setAttribute("width", String(u.width + Ft.captionPadX * 2)), v.setAttribute("height", String(u.height + Ft.captionPadY * 2)), v.setAttribute("display", "inline"), d[y] = _e.below;
  }, $ = (y, v) => {
    const u = v.structure && !t.has(y) ? np(v) : v;
    e.depictionGroups[y].setAttribute("display", u.structure ? "inline" : "none"), e.plates[y].setAttribute("display", u.structure ? "inline" : "none");
    const w = e.matched().has(y), p = e.circles[y];
    p.setAttribute("fill", u.disc ? w ? N.netMatchFill : N.netNodeFill : "none"), p.setAttribute("stroke", u.disc ? w ? N.netMatchStroke : N.netNodeStroke : "none"), e.initials[y].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[y], _ = u.name === "below";
    if (C.setAttribute("fill", w ? N.netMatchStroke : _ ? N.netDepictCaption : N.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), _ || e.captionPlates[y].setAttribute("display", "none"), u.name === "none") return;
    const l = u.name === "inside";
    C.setAttribute("y", l ? "0" : String(_e.below)), C.setAttribute("dominant-baseline", l ? "middle" : "auto"), C.setAttribute("font-size", String(l ? c(y, C) : _e.fontSize)), _ && f(y);
  };
  let S = null;
  return { apply: (y, v, u) => {
    const w = tp(y);
    S = w, e.stage.setAttribute("data-detail", w.id), e.edgeLabels.setAttribute("display", w.edgeScores ? "inline" : "none");
    for (let l = 0; l < e.nodes.length; l++) $(l, w);
    if (!w.structure) return;
    const { width: p, height: C } = e.viewport(), _ = [];
    e.nodes.forEach((l, h) => {
      if (t.has(h) || n.has(h)) return;
      const g = l.x * y + v, P = l.y * y + u;
      g < -jn || P < -jn || g > p + jn || P > C + jn || _.push(h);
    }), _.length && e.rdkit().then((l) => {
      if (!(!l || S !== w))
        for (const h of _)
          s(l, h), $(h, w);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function up(e) {
  const t = _t("ligand-network.query"), n = Gr("ligand-network.minScore", 0, 0, 1), r = z("div", Kr), o = z("input", `${Wn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const s = ma({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: _t("ligand-network.smarts"),
    run: (v) => e.match(v),
    describe: (v) => {
      const u = v.unreadable ? `, ${v.unreadable} could not be read` : "";
      return `${v.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(s.element);
  const i = z("div", `display:flex;align-items:center;gap:8px;font-size:${Q.small};color:${N.textMuted};`), a = z("span", `min-width:28px;color:${N.textPrimary};`, "0.00"), c = z("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), i.appendChild(z("span", "", "score >=")), i.appendChild(c), i.appendChild(a), r.appendChild(i);
  const d = z("div", `font-size:${Q.small};color:${N.textMuted2};`);
  r.appendChild(d);
  const f = z("div", xi);
  r.appendChild(f), r.appendChild(z("div", `font-size:${Q.tiny};line-height:1.5;color:${N.textMuted2};`, go));
  const $ = ca({
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
  const S = z("button", `${Ct}width:100%;`, "Clear selection");
  S.onclick = () => {
    e.selected.clear(), y(), e.refresh();
  }, r.appendChild(S);
  const m = (v) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? He(v).toLowerCase().includes(u) || (v.smiles ?? "").toLowerCase().includes(u) || v["gufe-key"].toLowerCase().includes(u) : !0;
  }, y = () => {
    $.clearNote(), f.replaceChildren();
    const v = e.nodes.map((u, w) => ({ node: u, index: w })).filter(({ node: u }) => m(u));
    d.textContent = `${v.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: w } of v) {
      const p = u["gufe-key"], C = z(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(p) ? N.cardBorderActive : N.cardBorder};background:${e.selected.has(p) ? N.cardBgActive : N.cardBg};color:${N.textPrimary};`
      ), _ = z("span", "flex:1;min-width:0;overflow-wrap:anywhere;", He(u));
      _.title = `${He(u)}
${u.smiles ?? ""}`, C.appendChild(_), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(p) ? e.selected.delete(p) : e.selected.add(p) : (e.selected.clear(), e.selected.add(p), e.focus(w)), y(), e.refresh();
      }, f.appendChild(C);
    }
    v.length || f.appendChild(z("div", `font-size:${Q.small};padding:8px;color:${N.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), y(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, y(), s.apply(), r;
}
class fp extends Ee {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = [];
    let s = 0;
    for (const A of n.nodes ?? []) {
      const F = Se(r, A, "SmallMoleculeComponentViz");
      if (!F) {
        s++;
        continue;
      }
      o.push({ ...F, x: 0, y: 0 });
    }
    const i = new Map(o.map((A) => [A["gufe-key"], A])), a = [];
    let c = 0;
    for (const A of n.edges ?? []) {
      const F = i.get(A.componentA), B = i.get(A.componentB);
      if (!F || !B) {
        c++;
        continue;
      }
      a.push({ ...A, index: a.length, from: F, to: B });
    }
    const d = kt(n.name || "Ligand network");
    d.statsEl.appendChild(Te("ligands", String(o.length))), d.statsEl.appendChild(Te("mappings", String(a.length))), t.appendChild(d);
    const f = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const $ = /* @__PURE__ */ new Set(), S = { minScore: 0 }, m = { text: "" };
    let y = () => {
    }, v = null;
    const u = () => v ??= or().catch((A) => (console.warn("[gufe-viz] RDKit failed to load:", me(A)), null)), w = ha(
      u,
      o.map((A) => A.sdf ?? "")
    );
    let p = /* @__PURE__ */ new Map(), C = () => {
    };
    const _ = async (A) => {
      const F = await w.run(A);
      return F.status === "superseded" || (p = F.status === "ok" ? F.matched : /* @__PURE__ */ new Map(), C()), F;
    }, l = Zr(
      d,
      () => up({
        nodes: o,
        edges: a,
        selected: $,
        filter: S,
        query: m,
        refresh: () => y(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (A) => {
          K(A), Z({ kind: "ligand", index: A });
        },
        match: (A) => _(A)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => te(),
        remember: ct("ligand-network.menuOpen", !1)
      }
    );
    f.appendChild(l.panel);
    let h = () => {
    };
    const g = z("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${N.netCanvasBg};`), P = z("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${N.appBg};`);
    f.appendChild(g), f.appendChild(
      ji(f, g, P, {
        min: Nt.min,
        max: Nt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Gr("ligand-network.canvasShare", Nt.initial, Nt.min, Nt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (A) => Yr(l.panel, A)
      })
    ), f.appendChild(P);
    const k = z("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${N.netCanvasBg};`);
    g.appendChild(k);
    const T = ut("ligand-network.layout", "Force-directed", gi), L = this.#n(
      (A) => te(A),
      () => D(),
      T
    );
    g.appendChild(L.bar);
    const O = this.#e(P, r);
    if (!o.length)
      return k.appendChild(
        pe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), O.message("Nothing to show."), {};
    s && dt(
      k,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && dt(k, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const V = u(), I = sp(k);
    let K = () => {
    };
    const Y = Bf(Ia(Df), o.length);
    let re = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, q = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const A = Y.selectedKind ?? "edge";
      Y.selected < (A === "ligand" ? o.length : a.length) && (q = { kind: A, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), R = !1, x = null, j = T.get(), M = !1, b = !0, E = () => {
    }, D = () => {
    }, G = 0;
    const U = () => {
      if (!q) {
        O.message(a.length ? Lf : "Click a ligand to see it.");
        return;
      }
      q.kind === "edge" ? O.showMapping(a[q.index]) : O.showLigand(o[q.index]);
    }, Z = (A) => {
      q = A, U(), E();
    }, te = (A = j) => {
      const F = R && A === j ? W() : null, B = ++G;
      j = A, x?.(), x = null, k.querySelectorAll("svg").forEach((oe) => oe.remove());
      const J = k.clientWidth || 800, ee = k.clientHeight || 600;
      pp(o, J, ee, j, a), Y && Uf(o, Y.nodes);
      const X = () => {
        if (!b || B !== G) return;
        const oe = this.#t(k, o, a, J, ee, Z, V, I);
        E = () => oe.setSelected(q), D = oe.reset, x = oe.cleanup, K = (de) => oe.focusOn(de), W = oe.transform, y = () => {
          const de = m.text.trim().toLowerCase(), fe = $.size > 0 || de.length > 0, he = /* @__PURE__ */ new Set();
          for (const Pe of o) {
            const Le = Pe["gufe-key"], nt = $.has(Le) || de.length > 0 && (He(Pe).toLowerCase().includes(de) || (Pe.smiles ?? "").toLowerCase().includes(de) || Le.toLowerCase().includes(de));
            (!fe || nt) && he.add(Le);
          }
          const De = /* @__PURE__ */ new Set();
          a.forEach((Pe, Le) => {
            (Pe.score ?? 0) < S.minScore || !he.has(Pe.from["gufe-key"]) || !he.has(Pe.to["gufe-key"]) || De.add(Le);
          });
          const ve = fe || S.minScore > 0;
          oe.setEmphasis(ve ? he : null, ve ? De : null);
        }, C = () => oe.setMatches(p), E(), y(), C();
        const ie = re ?? F;
        ie ? (oe.setTransform(ie.scale, ie.tx, ie.ty), re = null) : oe.fit(), R = !0;
      };
      if (j !== "Force-directed" || M || Y) {
        X();
        return;
      }
      hp(o, a, J, ee).then((oe) => {
        if (!(!b || B !== G)) {
          if (oe) {
            X();
            return;
          }
          M = !0, L.picker.value = "Circular", dt(k, "d3 could not be loaded - showing the circular layout instead"), te("Circular");
        }
      }, X);
    };
    return h = () => te(), te(), U(), {
      onResize: () => te(),
      cleanup: () => {
        b = !1, w.cancel(), I.remove(), x?.();
      },
      viewState: () => ({
        nodes: o.map((A) => [yi(A.x), yi(A.y)]),
        ...W(),
        selected: q ? q.index : -1,
        selectedKind: q ? q.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = z(
      "div",
      Pi.bottom
    ), s = z("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${N.textMuted};`);
    s.appendChild(z("span", "", "score")), s.appendChild(
      z(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${N.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(z("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(z("label", `font-size:${Q.body};margin-left:auto;color:${N.textMuted};`, "Layout"));
    const i = jt(
      gi.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(i), o.appendChild(uo(n, "Reset pan and zoom")), { bar: o, picker: i };
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
    const r = z("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
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
      showMapping: (i) => s("gufe-atom-mapping", ga(qf(i), n)),
      showLigand: (i) => s("gufe-small-molecule", Vf(i)),
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
    const $ = le("defs"), S = ip($);
    d.appendChild($);
    const m = [], y = le("g"), v = le("g"), u = le("g", { "pointer-events": "none" }), w = le("g");
    f.append(y, v, u, w);
    for (const I of r) {
      const K = cp(I.score), Y = vi + (I.score ?? 0.5) * (Wf - vi), re = le("line", {
        stroke: N.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + Tt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), q = le("line", {
        stroke: K,
        "stroke-width": Y,
        "stroke-opacity": Jf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${S(K)})`,
        "pointer-events": "none"
      }), W = le("line", { stroke: "transparent", "stroke-width": Yf, style: "cursor:pointer;" });
      W.addEventListener("click", (j) => {
        j.stopPropagation(), i({ kind: "edge", index: I.index });
      }), W.addEventListener("mousemove", (j) => {
        c.show(
          `<div style="font-weight:700;color:${N.titleColor};">${Ke(He(I.from))} -&gt; ${Ke(He(I.to))}</div>` + (I.score == null ? `<div style="color:${N.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${I.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Q.tiny};color:${N.textMuted2};">Click to see the mapping</div>`,
          j.offsetX,
          j.offsetY
        );
      }), W.addEventListener("mouseleave", () => c.hide()), m.push(re), y.append(re, q), v.appendChild(W);
      const R = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Xf.fontSize,
        "font-weight": 600,
        fill: N.netEdgeLabel
      });
      R.textContent = I.score == null ? "" : I.score.toFixed(2);
      const x = le("g", { class: "gufe-edge-label" });
      x.appendChild(R), u.appendChild(x);
    }
    const p = [], C = [], _ = [], l = [], h = [], g = [], P = [], k = n.map((I) => {
      const K = le("g", { class: "gufe-node", style: "cursor:grab;" });
      K.addEventListener("mousemove", (M) => {
        c.show(
          `<div style="font-weight:700;color:${N.titleColor};">${Ke(He(I))}</div>` + (I.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ke(I.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Q.tiny};color:${N.textMuted2};overflow-wrap:anywhere;">${Ke(I["gufe-key"])}</div><div style="margin-top:4px;font-size:${Q.tiny};color:${N.textMuted2};">Click to see the ligand</div>`,
          M.offsetX,
          M.offsetY
        );
      }), K.addEventListener("mouseleave", () => c.hide());
      const Y = le("circle", {
        class: "gufe-node-halo",
        r: Ne + Tt.padding,
        fill: "none",
        stroke: N.netHaloColor,
        "stroke-width": Tt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      K.appendChild(Y), h.push(Y);
      const re = le("circle", {
        class: "gufe-node-disc",
        r: Ne,
        fill: N.netNodeFill,
        stroke: N.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      K.appendChild(re), C.push(re);
      const q = le("circle", {
        class: "gufe-node-plate",
        r: Ne,
        fill: N.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      K.appendChild(q), _.push(q);
      const W = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      K.appendChild(W), p.push(W);
      const R = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Gf,
        "font-weight": 700,
        fill: N.netInitials,
        "pointer-events": "none"
      });
      R.textContent = He(I).slice(0, 2).toUpperCase(), K.appendChild(R), g.push(R);
      const x = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: _e.below,
        "font-size": _e.fontSize,
        "font-weight": 600,
        fill: N.netNodeCaption,
        "pointer-events": "none"
      });
      x.textContent = lp(He(I), Kf), x.setAttribute("display", "none"), P.push(x);
      const j = le("rect", {
        class: "gufe-node-caption-plate",
        rx: Ft.captionRadius,
        fill: N.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return l.push(j), K.appendChild(j), K.appendChild(x), w.appendChild(K), K;
    }), T = () => {
      r.forEach((I, K) => {
        for (const re of [m[K], y.children[K * 2 + 1], v.children[K]]) {
          const q = re;
          q.setAttribute("x1", String(I.from.x)), q.setAttribute("y1", String(I.from.y)), q.setAttribute("x2", String(I.to.x)), q.setAttribute("y2", String(I.to.y));
        }
        u.children[K].setAttribute(
          "transform",
          `translate(${(I.from.x + I.to.x) / 2},${(I.from.y + I.to.y) / 2 - 8})`
        );
      }), n.forEach((I, K) => k[K].setAttribute("transform", `translate(${I.x},${I.y})`));
    };
    T();
    let L = /* @__PURE__ */ new Map();
    const O = dp({
      nodes: n,
      circles: C,
      plates: _,
      captionPlates: l,
      matched: () => L,
      captions: P,
      initials: g,
      depictionGroups: p,
      edgeLabels: u,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), V = this.#r(
      d,
      f,
      n,
      k,
      T,
      O.apply,
      (I) => i({ kind: "ligand", index: I })
    );
    return {
      setSelected(I) {
        const K = I?.kind === "edge" ? I.index : -1, Y = I?.kind === "ligand" ? I.index : -1;
        m.forEach((re, q) => re.setAttribute("opacity", q === K ? String(Tt.opacity) : "0")), h.forEach((re, q) => re.setAttribute("opacity", q === Y ? String(Tt.opacity) : "0"));
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
      setMatches(I) {
        L = I, O.forget();
        const { scale: K, tx: Y, ty: re } = V.transform();
        O.apply(K, Y, re);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(I, K) {
        k.forEach((Y, re) => {
          const q = !I || I.has(n[re]["gufe-key"]);
          Y.setAttribute("opacity", q ? "1" : String(Pr.node));
        }), r.forEach((Y, re) => {
          const q = !K || K.has(re), W = q ? "0.9" : String(Pr.edge);
          y.children[re * 2 + 1].setAttribute("stroke-opacity", W), u.children[re].setAttribute("opacity", q ? "1" : String(Pr.edge));
        });
      },
      focusOn(I) {
        const K = n[I];
        K && V.centreOn(K.x, K.y);
      },
      setDetail: O.apply,
      depictionsDrawn: () => O.drawn(),
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
    const c = ua(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => da(r, Ne),
      margin: rp,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, f) => {
      let $ = null, S = !1;
      d.addEventListener("pointerdown", (y) => {
        y.stopPropagation();
        const { scale: v } = c.transform();
        $ = { x: y.clientX - r[f].x * v, y: y.clientY - r[f].y * v }, S = !1, d.setPointerCapture(y.pointerId);
      }), d.addEventListener("pointermove", (y) => {
        if (!$) return;
        if (c.gesturing()) {
          $ = null, S = !0;
          return;
        }
        const { scale: v } = c.transform(), u = (y.clientX - $.x) / v, w = (y.clientY - $.y) / v;
        Math.hypot(u - r[f].x, w - r[f].y) * v > ep && (S = !0), r[f].x = r[f].fx = u, r[f].y = r[f].fy = w, s();
      });
      const m = () => {
        $ = null;
      };
      d.addEventListener("pointerup", m), d.addEventListener("pointercancel", m), d.addEventListener("click", (y) => {
        y.stopPropagation(), S || a(f);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, f) => c.centreOn(d, f, op)
    };
  }
}
function pp(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (c, d) => {
    c.forEach((f, $) => {
      const S = 2 * Math.PI * $ / Math.max(1, c.length) - Math.PI / 2;
      f.x = s + d * Math.cos(S), f.y = i + d * Math.sin(S), f.fx = r === "Force-directed" ? void 0 : f.x, f.fy = r === "Force-directed" ? void 0 : f.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((v) => [v["gufe-key"], []]));
    for (const v of o)
      c.get(v.from["gufe-key"]).push(v.to["gufe-key"]), c.get(v.to["gufe-key"]).push(v.from["gufe-key"]);
    const d = new Map(e.map((v) => [v["gufe-key"], v])), f = e.reduce(
      (v, u) => c.get(u["gufe-key"]).length > c.get(v["gufe-key"]).length ? u : v
    ), $ = /* @__PURE__ */ new Set([f["gufe-key"]]);
    let S = [f["gufe-key"]], m = 0;
    const y = Math.min(t, n) * 0.18;
    for (; S.length; ) {
      a(
        S.map((u) => d.get(u)),
        m === 0 ? 0 : m * y + 40
      );
      const v = [];
      for (const u of S)
        for (const w of c.get(u))
          $.has(w) || ($.add(w), v.push(w));
      S = v, m++;
    }
    a(e.filter((v) => !$.has(v["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function hp(e, t, n, r) {
  let o;
  try {
    if (o = await Xi(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((c) => c["gufe-key"]).distance((c) => Ce.linkBaseDistance + (1 - (c.score ?? 0.5)) * Ce.linkScoreBonus).strength(Ce.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Ce.chargeStrength).distanceMin(Ce.chargeDistanceMin).distanceMax(Ce.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Ce.centerStrength)).force("collision", o.forceCollide(Ne + Ce.collisionPadding).iterations(Ce.collisionIterations)).force("x", o.forceX(n / 2).strength(Ce.drift)).force("y", o.forceY(r / 2).strength(Ce.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let c = 0; c < a * Ce.tickMultiplier; c++) i.tick();
  return !0;
}
xe("gufe-ligand-network", fp);
const mp = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function ya(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const s = Ge(t, o);
    s && (mp.includes(s.type) ? n.push(s) : s.type === "SmallMoleculeComponentViz" && r.push(s));
  }
  return { structures: n, ligands: r };
}
function gp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const wi = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], yp = 0.4;
class $p extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = ya(n, Et(n)), o = r.structures.map((m, y) => y), s = r.ligands.map((m, y) => r.structures.length + y), i = ut(
      "complex.focus",
      "site",
      wi.map((m) => m.id)
    );
    let a = i.get(), c = null;
    const d = aa({
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
          wi,
          a,
          (m) => {
            a = m, $();
          },
          i
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => $()
    });
    function f() {
      const m = d.viewer();
      m && (Br(m, d.opts, c, d.showStatus, { model: o }), Zu(m, { model: s }), m.render());
    }
    function $() {
      const m = d.viewer();
      m && (a === "site" && s.length ? (m.zoomTo({ model: s }), m.zoom(yp)) : m.zoomTo(), m.render(), S());
    }
    function S() {
      const m = d.viewer();
      m && (d.interaction()?.cleanup(), d.setInteraction(sr(d.pane.container, m)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(_i(r, () => c));
    try {
      c = sa(r.structures[0].pdb), d.setStats(_i(r, () => c));
    } catch (m) {
      d.showStatus(`PDB parse error: ${me(m)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), rr().then(() => {
      const m = Qe.createViewer(d.pane.container, { backgroundColor: lt.viewer });
      d.setViewer(m);
      for (const y of r.structures) m.addModel(y.pdb, "pdb");
      for (const y of r.ligands) m.addModel(na(y.sdf), "sdf");
      f(), d.restoreCamera() ? S() : $(), m.spin(d.opts.spin ? "y" : !1), m.render();
    }).catch((m) => {
      d.showStatus(`Failed to render structure: ${me(m)}`, "error");
    }), d.handle;
  }
}
function _i(e, t) {
  const n = e.ligands.reduce((s, i) => {
    const a = po(i.sdf);
    return a ? s + a.atoms : s;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...ia(o)] : [r];
}
xe("gufe-complex", $p);
function vp(e, t) {
  return {
    ...e,
    registry: mo(t, Object.values(e.components ?? {}))
  };
}
const bp = "chemical-system.component", wp = 460, _p = 200, Sp = "35%";
function Cp(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function kp(e) {
  return e.type === "UnknownComponentViz" ? Yn(e.gufe_type) : null;
}
class Ep extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = [], s = [];
    for (const [k, T] of Object.entries(n.components ?? {})) {
      const L = Ge(r, T);
      L ? o.push([k, L]) : s.push(k);
    }
    const i = kt(n.name || "Chemical system");
    if (i.statsEl.appendChild(Te("components", String(o.length))), t.appendChild(i), !o.length)
      return t.appendChild(
        pe(
          s.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = z(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), s.length && dt(
      a,
      `${s.length} component${s.length === 1 ? "" : "s"} named by this system (${s.join(", ")}) are not in its registry`
    );
    const c = z(
      "div",
      `min-width:0;overflow-y:auto;display:flex;gap:6px;padding:10px;background:${N.panelBg};`
    );
    a.appendChild(c);
    const d = z(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(d);
    const f = z(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    d.appendChild(f);
    const $ = document.createElement("gufe-view");
    $.style.cssText = "flex:1;min-width:0;min-height:0;", $.setAttribute(zr, ""), f.appendChild($);
    const S = ya(n, r), m = gp(S), y = (k) => m && S.structures.some(
      (T) => T === k
    ), v = o.filter(([, k]) => !y(k)).map(([k, T]) => ({
      key: k,
      title: k,
      subtitle: Cp(T),
      badge: kp(T),
      element: $,
      point: () => {
        $.payload = T;
      }
    }));
    if (m) {
      const k = document.createElement("gufe-complex");
      k.style.cssText = "flex:1;min-width:0;min-height:0;", k.setAttribute(zr, ""), k.payload = n, v.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${S.ligands.length === 1 ? S.ligands[0].name || "ligand" : "ligands"} in ${S.structures[0].name || "structure"}`,
        badge: null,
        element: k,
        point: () => {
        }
      });
    }
    let u = null;
    const w = (k) => {
      u !== k && (f.replaceChildren(k), u = k);
    }, p = _t(bp), C = [], _ = (k) => {
      C.forEach((T, L) => {
        const O = L === k;
        T.style.background = O ? N.cardBgActive : N.cardBg, T.style.borderColor = O ? N.cardBorderActive : N.cardBorder;
      }), v[k].point(), w(v[k].element);
    }, l = (k) => {
      p.set(v[k].key), _(k);
    };
    v.forEach((k, T) => {
      const L = z(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${N.cardBorder};border-radius:8px;background:${N.cardBg};cursor:pointer;font-family:inherit;font-size:${Q.body};flex-shrink:0;max-width:100%;box-sizing:border-box;`
      );
      L.appendChild(
        z("span", `font-weight:700;color:${N.textPrimary};`, k.title)
      ), L.appendChild(
        z(
          "span",
          `font-size:${Q.small};color:${N.textMuted};`,
          k.subtitle
        )
      ), k.badge && L.appendChild(k.badge), L.onclick = () => l(T), C.push(L), c.appendChild(L);
    });
    const h = v.findIndex((k) => k.key === p.get());
    _(h < 0 ? 0 : h);
    let g = null;
    const P = Xn(a, (k) => {
      const T = k > 0 && k < wp;
      T !== g && (g = T, a.style.flexDirection = T ? "column" : "row", c.style.flex = T ? "0 0 auto" : `0 0 ${_p}px`, c.style.flexDirection = T ? "row" : "column", c.style.flexWrap = T ? "wrap" : "nowrap", c.style.maxHeight = T ? Sp : "none", c.style.borderRight = T ? "none" : `1px solid ${N.splitBorder}`, c.style.borderBottom = T ? `1px solid ${N.splitBorder}` : "none", u?.resize?.());
    });
    return {
      onResize: () => u?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        P(), u?.remove();
      }
    };
  }
}
xe("gufe-chemical-system", Ep);
const xp = 460, Pp = 210, Ap = "42%";
function Rp(e, t) {
  const n = Se(t, e.stateA, "ChemicalSystemViz"), r = Se(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: mo(t, o) };
}
const yo = {
  unchanged: N.diffUnchanged,
  changed: N.diffChanged,
  added: N.diffAdded,
  removed: N.diffRemoved
};
function Mp(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Np(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Tp(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Ar(e, t, n) {
  const r = z(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${ne.md};padding:5px ${ne.lg};border-radius:${Oe.md};background:${N.cardBg};border:1px solid ${N.cardBorder};`
  );
  n && r.appendChild(
    z(
      "span",
      `flex:0 0 auto;font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;color:${N.textMuted2};`,
      n
    )
  );
  const o = Tp(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(z("span", `font-size:${Q.body};color:${N.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? N.cardBorder : yo[t];
  const s = z(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:600;color:${N.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return s.title = o.name, r.appendChild(s), o.type && r.appendChild(Yn(o.type)), r;
}
function Op(e, t, n, r) {
  const o = z("div", `display:flex;flex-direction:column;gap:${ne.sm};min-width:0;`), s = z("div", `display:flex;align-items:center;gap:${ne.md};min-width:0;`);
  s.appendChild(
    z("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${yo[t]};`)
  );
  const i = z(
    "span",
    `min-width:0;font-size:${Q.body};font-weight:${ge.bold};color:${N.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return i.title = t, s.appendChild(i), o.appendChild(s), t === "unchanged" ? (o.appendChild(Ar(n, t, null)), o) : (o.appendChild(Ar(n, t, "A")), o.appendChild(Ar(r, t, "B")), o);
}
function Fp(e, t) {
  const n = Ge(t, e.componentA), r = Ge(t, e.componentB);
  return `${n ? tt(n) : "A"} to ${r ? tt(r) : "B"}`;
}
class zp extends Ee {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Et(n), o = Se(r, n.stateA, "ChemicalSystemViz"), s = Se(r, n.stateB, "ChemicalSystemViz"), i = Se(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = kt(n.name || "Transformation");
    if (c.statsEl.appendChild(Te("protocol", i?.gufe_type || i?.name || "-")), c.statsEl.appendChild(Te("mappings", String(a.length))), t.appendChild(c), !o || !s)
      return t.appendChild(
        pe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const d = Np(o, s), f = z("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(f);
    const $ = z(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${N.panelBg};`
    );
    f.appendChild($);
    const S = z("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    f.appendChild(S);
    const m = z("div", `display:flex;flex-direction:column;gap:${ne.xs};`);
    for (const [_, l] of [
      ["State A", o],
      ["State B", s]
    ])
      m.appendChild(
        z(
          "div",
          `min-width:0;font-size:${Q.small};font-weight:${ge.bold};letter-spacing:.06em;text-transform:uppercase;color:${N.textMuted2};overflow-wrap:anywhere;`,
          `${_}${l.name ? ` - ${l.name}` : ""}`
        )
      );
    $.appendChild(m);
    const y = /* @__PURE__ */ new Set();
    for (const _ of d) {
      const l = o.components?.[_], h = s.components?.[_], g = Mp(l, h);
      y.add(g), $.appendChild(
        Op(
          _,
          g,
          Ge(r, l),
          Ge(r, h)
        )
      );
    }
    if (y.size > 1) {
      const _ = z(
        "div",
        `display:flex;flex-wrap:wrap;gap:${ne.lg} 12px;padding-top:${ne.sm};font-size:${Q.small};color:${N.textMuted};`
      );
      for (const l of ["unchanged", "changed", "added", "removed"])
        y.has(l) && _.appendChild(Te(l, "", yo[l]));
      $.appendChild(_);
    }
    const v = z("div", Ca, "Atom mapping");
    S.appendChild(v);
    let u = null;
    const w = Xn(t, (_) => {
      const l = _ > 0 && _ < xp;
      l !== u && (u = l, f.style.flexDirection = l ? "column" : "row", $.style.flex = l ? "0 0 auto" : `0 0 ${Pp}px`, $.style.maxWidth = l ? "none" : Ap, $.style.maxHeight = l ? "45%" : "none", $.style.borderRight = l ? "none" : `1px solid ${N.splitBorder}`, $.style.borderBottom = l ? `1px solid ${N.splitBorder}` : "none", v.style.display = l ? "block" : "none");
    });
    if (!a.length)
      return S.appendChild(
        pe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: w };
    const p = document.createElement("gufe-atom-mapping");
    p.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (_) => {
      p.payload = ga(a[_], r);
    };
    if (C(0), a.length > 1) {
      const _ = z(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Q.small};background:${N.toolbarBg};border-bottom:1px solid ${N.toolbarBorder};color:${N.textMuted};`
      );
      _.appendChild(
        Jn(
          a.map((l, h) => ({
            id: String(h),
            label: l.name || Fp(l, r)
          })),
          "0",
          (l) => C(Number(l))
        )
      ), S.appendChild(_);
    }
    return S.appendChild(p), {
      onResize: () => p.resize?.(),
      cleanup: () => {
        w(), p.remove();
      }
    };
  }
}
xe("gufe-transformation", zp);
const Xe = { width: 148, height: 46, depictedHeight: 148, radius: 10 }, Ye = { pad: 6, size: 96, radius: 6, inset: 4 }, Si = 200, it = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, Rr = [
  { id: "structures", from: 0.35, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Ip = (e) => Rr.find((t) => e >= t.from) ?? Rr[Rr.length - 1], Dn = 200, Ln = { width: 2, selectedWidth: 3.5, hit: 20 }, wt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ot = { initial: 0.56, min: 0.25, max: 0.78 }, jp = 24, Ci = { x: Xe.width / 2, y: Xe.depictedHeight / 2 }, ki = { node: 0.12, edge: 0.06 }, Dp = 1.4, Lp = 3, Kn = tt;
function Mr(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function $a(e, t) {
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
const qp = (e, t) => $a(e, t).join(" + ");
function Vp(e, t) {
  const n = { fill: N.cardBg, stroke: N.cardBorder }, r = e.map((i) => qp(i, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > N.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const s = new Map(
    o.map((i, a) => [i, { fill: N.netGroupFill[a], stroke: N.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (i) => s.get(r[i]) ?? n,
    legend: o.map((i) => [i, s.get(i)])
  };
}
function Bp(e, t) {
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
function Up(e, t) {
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
function Hp(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function Kp(e) {
  const t = _t("alchemical-network.query"), n = _t("alchemical-network.composition"), r = z("div", Kr), o = z("input", `${Wn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const s = ma({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: _t("alchemical-network.smarts"),
    run: (S) => e.match(S),
    describe: (S) => {
      const m = S.unreadable ? `, ${S.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${m}`;
    }
  });
  if (r.appendChild(s.element), e.compositions.length > 1) {
    const S = z("div", `display:flex;align-items:center;gap:6px;font-size:${Q.small};color:${N.textMuted};`);
    S.appendChild(z("span", "flex-shrink:0;", "made of"));
    const m = jt(
      [{ id: "", label: "anything" }, ...e.compositions.map((y) => ({ id: y, label: y }))],
      "",
      (y) => {
        e.filter.composition = y, $(), e.refresh();
      },
      n
    );
    m.style.cssText += "flex:1;min-width:0;", e.filter.composition = m.value, S.appendChild(m), r.appendChild(S);
  }
  const i = z("div", `font-size:${Q.small};color:${N.textMuted2};`);
  r.appendChild(i);
  const a = z("div", xi);
  r.appendChild(a), r.appendChild(z("div", `font-size:${Q.tiny};line-height:1.5;color:${N.textMuted2};`, go));
  const c = ca({
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
  const d = z("button", `${Ct}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), $(), e.refresh();
  }, r.appendChild(d);
  const f = (S) => {
    const m = e.query.text.trim().toLowerCase();
    if (m && !e.haystacks[S].includes(m) || e.filter.composition && e.signatures[S] !== e.filter.composition) return !1;
    const y = e.matched();
    return !(y && !y.has(S));
  }, $ = () => {
    c.clearNote(), a.replaceChildren();
    const S = e.nodes.map((m, y) => ({ node: m, index: y })).filter(({ index: m }) => f(m));
    i.textContent = `${S.length} of ${e.nodes.length} systems`;
    for (const { node: m, index: y } of S) {
      const v = m["gufe-key"], u = e.selected.has(v), w = z(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Q.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? N.cardBorderActive : N.cardBorder};background:${u ? N.cardBgActive : N.cardBg};color:${N.textPrimary};`
      ), p = e.colorOf(y);
      w.appendChild(
        z(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${p.fill};border:1px solid ${p.stroke};`
        )
      );
      const C = z("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Kn(m));
      C.title = `${Kn(m)}
${e.signatures[y]}`, w.appendChild(C), w.onclick = (_) => {
        _.shiftKey || _.metaKey || _.ctrlKey ? e.selected.has(v) ? e.selected.delete(v) : e.selected.add(v) : (e.selected.clear(), e.selected.add(v), e.focus(y)), $(), e.refresh();
      }, a.appendChild(w);
    }
    S.length || a.appendChild(z("div", `font-size:${Q.small};padding:8px;color:${N.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), $(), e.refresh();
  }, $(), e.mounted($), s.apply(), r;
}
function Gp(e, t, n) {
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
async function Wp(e, t, n, r) {
  let o;
  try {
    if (o = await Xi(), typeof o?.forceSimulation != "function") return !1;
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
class Jp extends Ee {
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
    }, f = new Set(a.map(d).filter(Boolean)), $ = kt(n.name || "Alchemical network");
    $.statsEl.appendChild(Te("systems", String(o.length))), $.statsEl.appendChild(Te("transformations", String(a.length))), f.size && $.statsEl.appendChild(Te("protocol", [...f].join(", "))), t.appendChild($);
    const S = Vp(o, r), m = z("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(m);
    let y = () => {
    };
    const v = /* @__PURE__ */ new Set(), u = { composition: "" }, w = { text: "" };
    let p = () => {
    }, C = () => {
    }, _ = () => {
    };
    const l = o.map((U) => Bp(U, r));
    let h = null;
    const g = () => h ??= or().catch((U) => (console.warn("[gufe-viz] RDKit failed to load:", me(U)), null)), P = Up(o, r), k = ha(g, P.sources), T = o.map((U, Z) => {
      const te = P.perNode[Z].map((F) => P.sources[F]).find((F) => F) ?? null, A = $a(U, r);
      return {
        colors: S.colorOf(Z),
        composition: A.join(" + "),
        besides: Hp(A, te !== null, P.perNode[Z].length),
        sdf: te
      };
    });
    let L = null, O = () => {
    };
    const V = async (U) => {
      const Z = await k.run(U);
      return Z.status === "superseded" || (L = Z.status === "ok" ? new Set(o.flatMap((te, A) => P.perNode[A].some((F) => Z.matched.has(F)) ? [A] : [])) : null, O(), p()), Z;
    }, I = Zr(
      $,
      () => Kp({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: S.signatures,
        colorOf: S.colorOf,
        compositions: S.compositions,
        selected: v,
        filter: u,
        query: w,
        refresh: () => p(),
        matched: () => L,
        match: (U) => V(U),
        mounted: (U) => {
          O = U;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (U) => {
          C(U), _(U);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => y(),
        remember: ct("alchemical-network.menuOpen", !1)
      }
    );
    m.appendChild(I.panel);
    const K = z("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${N.netCanvasBg};`), Y = z("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${N.appBg};`), re = z("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${N.netCanvasBg};`);
    K.appendChild(re), m.appendChild(K), m.appendChild(
      ji(m, K, Y, {
        min: Ot.min,
        max: Ot.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Gr("alchemical-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => y(),
        onOrient: (U) => Yr(I.panel, U)
      })
    ), m.appendChild(Y);
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
    let W = !0, R = !1, x = null, j = () => {
    }, M = () => {
    }, b = () => {
    }, E = 0;
    K.appendChild(this.#n(S.legend, () => M()));
    const D = (U, Z) => {
      x = { kind: U, index: Z }, q.show(U === "node" ? o[Z] : a[Z], U), j();
    };
    _ = (U) => D("node", U);
    const G = () => {
      const U = ++E, Z = re.clientWidth || 800, te = re.clientHeight || 600;
      Gp(o, Z, te);
      const A = () => {
        if (!W || U !== E) return;
        b(), re.querySelectorAll("svg").forEach((B) => B.remove());
        const F = this.#t(re, o, a, Z, te, T, g, D);
        b = F.cleanup, M = F.reset, C = (B) => F.focusOn(B), j = () => F.setSelected(x), j(), p = () => {
          const B = w.text.trim().toLowerCase();
          if (!(v.size > 0 || B.length > 0 || u.composition !== "" || L !== null)) {
            F.setEmphasis(null, null);
            return;
          }
          const ee = B.length > 0 || u.composition !== "" || L !== null, X = /* @__PURE__ */ new Set();
          o.forEach((ie, de) => {
            const fe = ee && (!B || l[de].includes(B)) && (!u.composition || S.signatures[de] === u.composition) && (!L || L.has(de));
            (v.has(ie["gufe-key"]) || fe) && X.add(ie["gufe-key"]);
          });
          const oe = /* @__PURE__ */ new Set();
          a.forEach((ie, de) => {
            X.has(ie.from["gufe-key"]) && X.has(ie.to["gufe-key"]) && oe.add(de);
          }), F.setEmphasis(X, oe);
        }, p();
      };
      if (R) {
        A();
        return;
      }
      Wp(o, a, Z, te).then((F) => {
        !W || U !== E || (F || (R = !0, dt(re, "d3 could not be loaded - showing the circular layout instead")), A());
      }, A);
    };
    return y = G, G(), D("node", 0), {
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
    const r = z("div", Pi.bottom);
    if (r.appendChild(uo(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(z("span", `font-size:${Q.small};color:${N.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const i = z("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(
        z(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), i.appendChild(
        z("span", `font-size:${Q.small};color:${N.textPrimary};overflow-wrap:anywhere;`, o)
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
    const r = z("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(pe(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = vp(fa(a), n);
      else {
        const { index: f, from: $, to: S, ...m } = a;
        d = Rp(m, n);
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
    const $ = le("g"), S = le("g");
    f.append($, S);
    let m = () => {
    };
    const y = ua(d, f, {
      bounds: () => da(n, Ci.x, Ci.y),
      margin: jp,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (q, W, R) => m(q, W, R)
    }), v = (q, W) => {
      y.wasPan() || c(q, W);
    }, u = [], w = [];
    r.forEach((q, W) => {
      const R = le("line", {
        x1: q.from.x,
        y1: q.from.y,
        x2: q.to.x,
        y2: q.to.y,
        stroke: N.netEdgeLine,
        "stroke-width": Ln.width,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      ci(R, q.name || "transformation"), R.addEventListener("click", () => v("edge", W)), $.appendChild(R), u.push(R);
      const x = le("line", {
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
      x.addEventListener("click", () => v("edge", W)), $.appendChild(x), w.push(x);
    });
    const p = n.map(() => []), C = new Map(n.map((q, W) => [q, W]));
    r.forEach((q, W) => {
      const R = C.get(q.from), x = C.get(q.to);
      R !== void 0 && p[R].push(W), x !== void 0 && x !== R && p[x].push(W);
    });
    const _ = [], l = [], h = [], g = [], P = [], k = [], T = [];
    n.forEach((q, W) => {
      const R = i[W], x = R.sdf ? Xe.depictedHeight : Xe.height, j = le("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${q.x},${q.y})`
      });
      h.push(j);
      const M = le("rect", {
        class: "gufe-node-box",
        x: -148 / 2,
        y: -x / 2,
        width: Xe.width,
        height: x,
        rx: Xe.radius,
        fill: R.colors.fill,
        stroke: R.colors.stroke,
        "stroke-width": 2
      });
      if (j.appendChild(M), _.push(M), l.push(R.colors.stroke), R.sdf) {
        const D = le("rect", {
          class: "gufe-node-plate",
          x: -48,
          y: -x / 2 + Ye.pad,
          width: Ye.size,
          height: Ye.size,
          rx: Ye.radius,
          fill: N.netDepictBg,
          display: "none",
          "pointer-events": "none"
        });
        j.appendChild(D), k.push(D);
        const G = le("g", { transform: `translate(0,${-x / 2 + Ye.pad + Ye.size / 2})` }), U = le("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        G.appendChild(U), j.appendChild(G), T.push(U);
      } else
        k.push(null), T.push(null);
      const b = le("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: N.netNodeLabel,
        "font-size": it.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      b.textContent = Mr(Kn(q), it.nameChars), j.appendChild(b), g.push(b);
      const E = le("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: N.netInitials,
        "font-size": it.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      E.textContent = Mr(R.composition, it.subChars), j.appendChild(E), P.push(E), ci(j, `${Kn(q)} - ${R.composition}`), S.appendChild(j);
    });
    const L = (q) => {
      const W = n[q];
      h[q].setAttribute("transform", `translate(${W.x},${W.y})`);
      for (const R of p[q])
        for (const x of [u[R], w[R]])
          r[R].from === W && (x.setAttribute("x1", String(W.x)), x.setAttribute("y1", String(W.y))), r[R].to === W && (x.setAttribute("x2", String(W.x)), x.setAttribute("y2", String(W.y)));
    }, O = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), I = (q, W) => {
      if (O.has(W) || V.has(W)) return;
      const R = T[W], x = i[W].sdf;
      if (!R || !x) return;
      const j = ho(q, x, Si, Me.layout);
      if (!j || !pa(R, j, Si, Ye.size - Ye.inset * 2)) {
        V.add(W);
        return;
      }
      O.add(W);
    }, K = (q, W) => {
      const R = W && O.has(q);
      k[q]?.setAttribute("display", R ? "inline" : "none"), T[q]?.setAttribute("display", R ? "inline" : "none");
      const x = R ? Xe.depictedHeight : Xe.height;
      _[q].setAttribute("y", String(-x / 2)), _[q].setAttribute("height", String(x));
      const j = x / 2 - it.bottom;
      g[q].setAttribute("y", String(R ? j - it.gap : -2)), P[q].setAttribute("y", String(R ? j : 14));
      const M = i[q];
      P[q].textContent = Mr(R ? M.besides : M.composition, it.subChars);
    };
    let Y = null;
    return m = (q, W, R) => {
      const x = Ip(q);
      Y = x, d.setAttribute("data-detail", x.id);
      for (let M = 0; M < n.length; M++) K(M, x.structure);
      if (!x.structure) return;
      const j = [];
      n.forEach((M, b) => {
        if (!i[b].sdf || O.has(b) || V.has(b)) return;
        const E = M.x * q + W, D = M.y * q + R;
        E < -Dn || D < -Dn || E > o + Dn || D > s + Dn || j.push(b);
      }), j.length && a().then((M) => {
        if (!(!M || Y !== x))
          for (const b of j)
            I(M, b), K(b, !0);
      }).catch(() => {
      });
    }, h.forEach((q, W) => {
      let R = null, x = !1;
      q.addEventListener("pointerdown", (M) => {
        M.stopPropagation();
        const { scale: b } = y.transform();
        R = { x: M.clientX - n[W].x * b, y: M.clientY - n[W].y * b }, x = !1, q.setPointerCapture(M.pointerId);
      }), q.addEventListener("pointermove", (M) => {
        if (!R) return;
        if (y.gesturing()) {
          R = null, x = !0;
          return;
        }
        const { scale: b } = y.transform(), E = (M.clientX - R.x) / b, D = (M.clientY - R.y) / b;
        Math.hypot(E - n[W].x, D - n[W].y) * b > Lp && (x = !0), n[W].x = n[W].fx = E, n[W].y = n[W].fy = D, L(W);
      });
      const j = () => {
        R = null;
      };
      q.addEventListener("pointerup", j), q.addEventListener("pointercancel", j), q.addEventListener("click", (M) => {
        M.stopPropagation(), x || c("node", W);
      });
    }), y.fit(), {
      setSelected(q) {
        _.forEach((W, R) => {
          const x = q?.kind === "node" && q.index === R;
          W.setAttribute("stroke", x ? N.cardBorderActive : l[R]), W.setAttribute("stroke-width", x ? "3" : "2");
        }), u.forEach((W, R) => {
          const x = q?.kind === "edge" && q.index === R;
          W.setAttribute("stroke", x ? N.netHaloColor : N.netEdgeLine), W.setAttribute("stroke-width", String(x ? Ln.selectedWidth : Ln.width));
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
        h.forEach((R, x) => {
          const j = !q || q.has(n[x]["gufe-key"]);
          R.setAttribute("opacity", j ? "1" : String(ki.node));
        }), u.forEach((R, x) => {
          const j = !W || W.has(x);
          R.setAttribute("opacity", j ? "1" : String(ki.edge));
        });
      },
      focusOn(q) {
        const W = n[q];
        W && y.centreOn(W.x, W.y, Dp);
      },
      reset: y.reset,
      cleanup: y.cleanup
    };
  }
}
xe("gufe-alchemical-network", Jp);
class Yp extends Ee {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = kt(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Yn(n.gufe_type)), t.appendChild(r);
    const o = z(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const s = Wr();
    return s.style.maxWidth = "460px", s.appendChild(Bn("gufe class", n.gufe_type, !0)), n.name && s.appendChild(Bn("Name", n.name)), s.appendChild(
      z(
        "div",
        `padding-top:10px;font-size:${Q.small};line-height:1.6;color:${N.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
xe("gufe-protocol", Yp);
function Xp(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Nr(e, t = !1) {
  const n = z(
    "div",
    `display:flex;flex-direction:column;gap:${ne.xl};padding:${ne.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${N.splitBorder};`)
  );
  return n.appendChild(z("div", Or, e)), n;
}
function qn(e) {
  return z(
    "div",
    `font-size:${Q.tiny};font-weight:${ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${N.textMuted2};`,
    e
  );
}
function Ei(e, t) {
  const n = z("div", `display:flex;flex-direction:column;align-items:center;gap:${ne.sm};`);
  return n.appendChild(
    z(
      "span",
      `${Re.plain}${Re.outline}font-family:${Q.mono};font-size:${Q.body};`,
      e
    )
  ), n.appendChild(qn(t)), n;
}
class Zp extends Ee {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = z(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Wr();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const s = Nr("Solvent", !0), i = z("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = z("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = z(
      "div",
      `font-family:${Q.mono};font-size:${Q.display};font-weight:${ge.bold};line-height:1.1;color:${N.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(qn("SMILES")), i.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const p = z("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      p.appendChild(
        z(
          "div",
          `font-size:${Q.body};color:${N.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), p.appendChild(qn("Name")), i.appendChild(p);
    }
    s.appendChild(i), o.appendChild(s);
    const f = Nr("Ions"), $ = z("div", `display:flex;align-items:flex-end;gap:${ne.xxl};flex-wrap:wrap;`);
    n.positive_ion && $.appendChild(Ei(n.positive_ion, "cation")), n.negative_ion && $.appendChild(Ei(n.negative_ion, "anion"));
    const { value: S, unit: m } = Xp(n.ion_concentration), y = z("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), v = z("div", `display:flex;align-items:baseline;gap:${ne.md};justify-content:flex-end;`);
    v.appendChild(
      z(
        "div",
        `font-size:${Q.display};font-weight:${ge.bold};line-height:1;color:${N.titleColor};`,
        S
      )
    ), m && (v.appendChild(document.createTextNode(" ")), v.appendChild(z("div", `font-size:${Q.body};color:${N.textMuted};`, m))), y.appendChild(v), y.appendChild(qn("Ion concentration")), $.appendChild(y), f.appendChild($), o.appendChild(f);
    const u = Nr("Net charge"), w = n.neutralize;
    return u.appendChild(
      z(
        "span",
        `${Re.plain}align-self:flex-start;font-weight:${ge.bold};` + (w ? `background:${N.okBg};color:${N.okFg};` : `${Re.outline}color:${N.textMuted};`),
        w ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      z(
        "div",
        Fr,
        w ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
xe("gufe-solvent", Zp);
class Qp extends Ee {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = kt(n.name || "Unnamed component");
    r.statsEl.appendChild(Yn(n.gufe_type)), t.appendChild(r);
    const o = z("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Wr();
    return s.style.maxWidth = "460px", s.appendChild(
      z(
        "div",
        `font-size:${Q.heading};font-weight:600;padding-bottom:6px;color:${N.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), s.appendChild(
      z(
        "div",
        `font-size:${Q.body};line-height:1.6;padding-bottom:10px;color:${N.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), s.appendChild(Bn("Name", n.name || "(unnamed)")), s.appendChild(Bn("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
xe("gufe-unknown-component", Qp);
function sh(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Ni, reset: Ba });
export {
  oc as CHROME_OPEN_BY_DEFAULT,
  Ma as DEBUG_ATTRIBUTE,
  Na as DEBUG_GLOBAL,
  ku as DEFAULT_DEPICT_STYLE,
  Wd as DEFAULT_ZOOM_BOUNDS,
  Me as DEPICT_STYLE,
  Mu as DEPICT_STYLE_RANGES,
  Jp as GufeAlchemicalNetwork,
  jf as GufeAtomMapping,
  Ep as GufeChemicalSystem,
  $p as GufeComplex,
  Ee as GufeElement,
  fp as GufeLigandNetwork,
  ef as GufeProtein,
  Yp as GufeProtocol,
  Wu as GufeSmallMolecule,
  Zp as GufeSolvent,
  zp as GufeTransformation,
  Qp as GufeUnknownComponent,
  Vd as GufeView,
  zr as HIDE_NAME_ATTRIBUTE,
  br as MAPPING_COLORS,
  Zd as MAPPING_RAMP_3D,
  oh as MAPPING_RAMP_NAME,
  go as MULTI_SELECT_HINT,
  eh as PAYLOAD_TYPES,
  th as SCHEMA_TYPES,
  ao as VIEW_TAGS,
  wf as align2D,
  Cf as alignedToPartner,
  bf as applyRT,
  _f as applyTurn,
  Yd as boundedZoom,
  Et as buildRegistry,
  ut as choice,
  Zr as chromeMenu,
  Hd as claimGestures,
  ya as complexPartsFor,
  Ri as debugEnabled,
  xe as defineElement,
  Ji as describeProblem,
  Mp as diffStatus,
  rh as dispatchProblem,
  mo as entriesFor,
  tt as entryLabel,
  ca as exportBlock,
  da as extentOf,
  ct as flag,
  Ld as formatIssues,
  Zi as guardWheel,
  gp as hasComplex,
  Of as inFrameOf,
  vf as kabsch,
  fi as laidOut,
  kf as layoutPair,
  Ff as liftFor,
  za as logPayload,
  Ge as lookup,
  Se as lookupOfType,
  ga as mappingPayloadFor,
  Qs as markGroups,
  wr as markedBonds,
  sh as mount,
  Jr as nameWanted,
  Tu as normaliseDepictStyle,
  Gr as num,
  Xn as onWidth,
  zf as openfeShift,
  Yr as orientMenuPanel,
  If as pairColour,
  Xs as parseAtomSpec,
  Fa as payloadJson,
  uo as resetControl,
  Ba as resetSettings,
  ua as sceneCamera,
  tf as selectionText,
  Gn as setting,
  Ni as settings,
  ji as splitter,
  vp as systemPayloadFor,
  _t as textSetting,
  Rp as transformationPayloadFor,
  hi as uniqueAtoms,
  Fu as uniqueBonds,
  nh as validateAs,
  Dd as validatePayload,
  sr as viewerInteraction,
  Qi as wheelFactor,
  Sf as withCoords
};
