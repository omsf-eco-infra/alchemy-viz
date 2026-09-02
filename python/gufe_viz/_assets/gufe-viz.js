const fo = {
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
function da() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const A = da() ? fo.dark : fo.light, Z = {
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
}, $e = {
  bold: "700"
}, te = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Ie = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, je = {
  title: A.titleColor,
  primary: A.textPrimary,
  muted: A.textMuted,
  faint: A.textMuted2,
  error: A.errorFg
}, ct = {
  card: A.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: A.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: A.canvas2DBg
}, ye = {
  base: `background:${A.btnBg};color:${A.btnFg};border:1px solid ${A.btnBorder};padding:${te.sm} 9px;font-size:${Z.small};font-weight:${$e.bold};border-radius:${Ie.sm};cursor:pointer;font-family:inherit;`,
  bg: A.btnBg,
  bgHover: A.btnBgHover,
  bgActive: A.btnBgActive
}, ua = `background:${A.selectBg};color:${A.textPrimary};border:1px solid ${A.selectBorder};border-radius:${Ie.md};padding:${te.sm} ${te.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, fa = `display:flex;align-items:center;gap:12px;padding:9px ${te.xxl};flex-shrink:0;background:${A.toolbarBg};border-bottom:1px solid ${A.toolbarBorder};`, Ln = { min: "236px", max: "340px" }, Ze = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, $s = `display:flex;flex-direction:column;gap:${te.lg};flex:1;min-width:var(${Ze.min},${Ln.min});max-width:var(${Ze.max},${Ln.max});box-sizing:border-box;padding:${te.xl};min-height:0;overflow-y:auto;background:${A.panelBg};border:0 solid ${A.splitBorder};border-right-width:var(${Ze.ruleX},1px);border-bottom-width:var(${Ze.ruleY},0);`, pa = "45%", vs = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Hn = {
  top: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;font-size:${Z.body};background:${A.toolbarBg};border-bottom:1px solid ${A.toolbarBorder};color:${A.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;background:${A.toolbarBg};border-top:1px solid ${A.toolbarBorder};`
}, bs = `flex-shrink:0;padding:${te.sm} ${te.xl};font-size:${Z.heading};font-weight:${$e.bold};color:${A.labelFg};background:${A.labelBg};`, Ar = `position:absolute;top:${te.md};left:${te.md};z-index:10;pointer-events:none;max-width:calc(100% - ${te.xxl} - ${te.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${te.xs} ${te.lg};border-radius:${Ie.md};font-size:${Z.heading};font-weight:${$e.bold};color:${A.labelFg};background:${A.labelBg};`, ha = `display:flex;flex-direction:column;gap:${te.xs};padding:${te.xxl} 18px;border-radius:${Ie.xl};background:${A.cardBg};border:1px solid ${A.cardBorder};`, ws = `position:absolute;bottom:${te.xl};right:${te.xl};display:flex;gap:${te.sm};padding:${te.sm};border-radius:${Ie.md};z-index:10;background:${A.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, ma = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${A.textMuted};`, Rr = `font-size:${Z.small};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${A.textMuted2};`, Re = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${te.xs} ${te.sm};font-size:${Z.small};`,
  plain: `display:inline-flex;align-items:center;padding:${te.xs} ${te.md};border:1px solid transparent;border-radius:${Ie.pill};font-family:inherit;font-size:${Z.small};color:${A.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${A.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${A.btnBg};border-color:${A.btnBorder};color:${A.textPrimary};`,
  active: `cursor:pointer;background:${A.cardBgActive};border-color:${A.btnBorder};color:${A.textPrimary};`
}, Mr = `font-size:${Z.small};line-height:1.6;color:${A.textMuted2};`, ga = ["debug", "gufe-debug"], ya = "debug", $a = "GUFE_VIZ_DEBUG";
function va() {
  return !!globalThis[$a];
}
function ba() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return ga.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function _s(e) {
  return e?.hasAttribute?.(ya) ? !0 : va() || ba();
}
function wa(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function _a(e, t, n) {
  if (!_s(n)) return;
  const r = wa(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ss = "GUFE_VIZ_VIEW_STATE";
function Sa(e) {
  const t = globalThis[Ss];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Ca = 150, po = "data-gufe-shell";
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${po}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = A.appBg, this.style.color = A.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Ca);
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
    return this.#s(), this.#t = N(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${A.appBg};`
    ), this.#t.setAttribute(po, ""), this.appendChild(this.#t), this.#t;
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
      t.appendChild(fe(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#n);
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
    this.#e = t || null;
  }
  #l(t, n, r) {
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(fe(`Failed to render: ${he(r)}`, !0)));
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
let It = null;
function ka() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function zt() {
  if (It === !1) return null;
  const e = ka();
  if (!e)
    return It = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), It = !0, e;
  } catch {
    return It = !1, null;
  }
}
function Ea(e) {
  const t = zt();
  if (!t) return et.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function xa(e, t) {
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
      const r = Ea(e);
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
        xa(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function Ge(e, t, n) {
  return Kn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function We(e, t) {
  return Kn(e, t, (n) => typeof n == "boolean");
}
function Vr(e, t, n = -1 / 0, r = 1 / 0) {
  return Kn(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function bt(e, t = "") {
  return Kn(e, t, (n) => typeof n == "string");
}
function Cs() {
  const e = {}, t = zt(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(et.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const i = t ? t.getItem(r) : et.get(r) ?? null;
    if (i !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(i);
      } catch {
        e[r.slice(ke.length)] = i;
      }
  }
  return e;
}
function Pa() {
  const e = {}, t = zt(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(et.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const i = t ? t.getItem(r) : et.get(r) ?? null;
    i !== null && (e[r] = i);
  }
  return e;
}
function Aa() {
  const e = zt();
  if (e)
    for (const t of Object.keys(Cs()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  et.clear();
}
const ks = "https://framejs.app", Es = 1e4;
function Ra(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Ma = "/gufe-dev-bundle.js";
function Na() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Es ? e : null;
}
async function Oa() {
  const e = Na();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Ma);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Es ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Ta() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Fa(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(As)};`,
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
    `globalThis[${JSON.stringify(Ss)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function za(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Fa(n),
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
function ja(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [i, o] of Object.entries(Pa()))
    i.endsWith(As) || (r[i] = o);
  return { settings: r, views: t };
}
const Ia = (e) => `${ks}/j/${e}`, Da = (e) => `${ks}/j/${e}.json`;
async function La(e, t, n) {
  await fetch(Da(e), {
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
function qa(e) {
  if (!_s()) return;
  const t = N(
    "div",
    `display:flex;flex-direction:column;gap:${te.md};padding-top:${te.lg};border-top:1px dashed ${A.splitBorder};`
  );
  t.appendChild(
    N(
      "div",
      `font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${A.textMuted2};`,
      "debug"
    )
  );
  const n = N("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = N("div", `font-size:${Z.tiny};line-height:1.5;color:${A.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const i = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? A.errorFg : A.textMuted2;
  }, o = (s, a) => {
    const l = N("a", `color:${A.textPrimary};`, s);
    l.href = s, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(N("div", `padding-top:${te.sm};`, a)), r.style.color = A.textMuted2;
  };
  n.onclick = () => {
    const s = Ra(e);
    if (!s || s.payload == null) {
      i("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, l = ja(s), f = window.open("", "_blank"), p = Ta(), _ = a, b = String(_.name || _.type || "gufe-viz"), w = () => {
      n.disabled = !1;
    };
    n.disabled = !0, i("Uploading..."), Oa().then((g) => {
      if (!g) {
        f?.close(), w(), i(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return La(p, za(g.js, a, l), b).then(() => {
        w();
        const $ = Ia(p);
        f && (f.location.href = $), o($, g.note);
      });
    }).catch((g) => {
      w(), f?.close(), i(`Upload failed: ${g instanceof Error ? g.message : String(g)}`, !0);
    });
  }, t.appendChild(
    N(
      "div",
      `font-size:${Z.tiny};line-height:1.5;color:${A.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function N(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ke(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Et = (e) => e.toLocaleString("en-US"), st = "-", St = ye.base, Gn = ua;
function _t(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = N("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = N("button", St, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ye.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ye.bgActive : ye.bg;
    }, a.onclick = () => {
      i.setActive(s.id), r?.set(s.id), n(s.id);
    }, i.appendChild(a), { id: s.id, btn: a };
  });
  return i.setActive = (s) => {
    t = s, o.forEach((a) => {
      a.btn.style.background = a.id === t ? ye.bgActive : ye.bg;
    });
  }, i.setActive(t), i;
}
function jt(e, t, n, r) {
  const i = N("select", Gn);
  for (const s of e) {
    const a = N("option", "", s.label);
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
function Br(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = N("button", St, e);
  o.title = r.title || e, o.setAttribute("aria-pressed", String(i));
  const s = () => {
    o.style.background = i ? ye.bgActive : ye.bg, o.setAttribute("aria-pressed", String(i));
  };
  return o.onclick = () => {
    i = !i, s(), r.remember?.set(i), n(i);
  }, s(), o;
}
function Ne(e, t, n) {
  const r = N("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = N("span");
  return i.innerHTML = `${Ke(e)} <b style="color:${je.primary};">${Ke(t)}</b>`, r.appendChild(i), r;
}
function lt(e, t) {
  const n = N("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${te.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${te.md} ${te.xxl};border-radius:${Ie.md};font-size:${Z.body};background:${A.warnBg};color:${A.warnFg};border:1px solid ${A.warnBorder};`, e.appendChild(n), n;
}
function fe(e, t = !1) {
  return N(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? je.error : je.faint};`,
    e
  );
}
function Ct(e) {
  const t = N("div", fa);
  return t.className = "gufe-header", t.titleEl = N(
    "span",
    `font-weight:${$e.bold};font-size:${Z.title};color:${je.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = N(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${je.muted};`
  ), t.textEl = N("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = N("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function qn(e, t, n = !1) {
  const r = N("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    N(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${je.faint};`,
      e
    )
  );
  const i = N(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${je.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Wn(e) {
  return N(
    "span",
    `padding:1px 7px;border-radius:${Ie.xl};font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.04em;white-space:nowrap;background:${A.badgeBg};color:${A.badgeFg};`,
    e
  );
}
function Ur() {
  return N("div", ha);
}
function Hr() {
  const e = N("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = N("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Nr = "data-gufe-hide-name";
function Kr(e) {
  return !e.closest(`[${Nr}]`);
}
function Va(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const ho = { min: 0.2, max: 0.8 }, Ba = 5;
function xs(e, t, n, r = {}) {
  const i = r.min ?? ho.min, o = r.max ?? ho.max, s = N(
    "div",
    `flex:0 0 ${Ba}px;align-self:stretch;touch-action:none;background:${A.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const l = (g) => {
    a = g, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, f = () => {
    const g = e.getBoundingClientRect();
    return g.height > g.width;
  };
  let p = Math.min(o, Math.max(i, r.remember?.get() ?? 0.5));
  const _ = () => {
    t.style.flex = `1 1 ${(p * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - p) * 100).toFixed(2)}%`;
  };
  _(), l(f()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const $ = f();
    $ !== a && (l($), r.onResize?.(p));
  }).observe(e);
  let b = !1;
  s.addEventListener("pointerdown", (g) => {
    b = !0, s.setPointerCapture(g.pointerId), g.preventDefault();
  }), s.addEventListener("pointermove", (g) => {
    if (!b) return;
    const $ = e.getBoundingClientRect(), u = a ? $.height : $.width;
    if (u <= 0) return;
    const v = a ? g.clientY - $.top : g.clientX - $.left;
    p = Math.min(o, Math.max(i, v / u)), _();
  });
  const w = (g) => {
    b && (b = !1, s.releasePointerCapture(g.pointerId), r.remember?.set(p), r.onResize?.(p));
  };
  return s.addEventListener("pointerup", w), s.addEventListener("pointercancel", w), s;
}
function Ps(e, t) {
  e.style.setProperty(Ze.min, t ? "0" : Ln.min), e.style.setProperty(Ze.max, t ? "none" : Ln.max), e.style.setProperty(Ze.ruleX, t ? "0" : "1px"), e.style.setProperty(Ze.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? pa : "";
}
const Ua = !1, As = ".menuOpen";
function Ha() {
  const e = N("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Ka = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Ha
}, Ga = Ka.openFreeEnergy;
function Rs(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Ua, i = !1;
  const o = N("div", "flex-shrink:0;"), s = N("button", `${ye.base}display:inline-flex;align-items:center;gap:${te.md};padding:${te.sm} ${te.lg};`);
  s.appendChild(Ga()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t()), qa(o)), o.style.display = r ? "" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, l = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => l(!r), s.onmouseover = () => {
    s.style.background = r ? ye.bgActive : ye.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: l
  };
}
function Wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = { exports: {} }, sr = {}, qe = {}, rt = {}, ar = {}, cr = {}, lr = {}, mo;
function Vn() {
  return mo || (mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(d) {
        if (super(), !e.IDENTIFIER.test(d))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = d;
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
      constructor(d) {
        super(), this._items = typeof d == "string" ? [d] : d;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const d = this._items[0];
        return d === "" || d === '""';
      }
      get str() {
        var d;
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((C, y) => `${C}${y}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((C, y) => (y instanceof n && (C[y.str] = (C[y.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i(v, ...d) {
      const C = [v[0]];
      let y = 0;
      for (; y < d.length; )
        a(C, d[y]), C.push(v[++y]);
      return new r(C);
    }
    e._ = i;
    const o = new r("+");
    function s(v, ...d) {
      const C = [w(v[0])];
      let y = 0;
      for (; y < d.length; )
        C.push(o), a(C, d[y]), C.push(o, w(v[++y]));
      return l(C), new r(C);
    }
    e.str = s;
    function a(v, d) {
      d instanceof r ? v.push(...d._items) : d instanceof n ? v.push(d) : v.push(_(d));
    }
    e.addCodeArg = a;
    function l(v) {
      let d = 1;
      for (; d < v.length - 1; ) {
        if (v[d] === o) {
          const C = f(v[d - 1], v[d + 1]);
          if (C !== void 0) {
            v.splice(d - 1, 3, C);
            continue;
          }
          v[d++] = "+";
        }
        d++;
      }
    }
    function f(v, d) {
      if (d === '""')
        return v;
      if (v === '""')
        return d;
      if (typeof v == "string")
        return d instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${v.slice(0, -1)}${d}"` : d[0] === '"' ? v.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(v instanceof n))
        return `"${v}${d.slice(1)}`;
    }
    function p(v, d) {
      return d.emptyStr() ? v : v.emptyStr() ? d : s`${v}${d}`;
    }
    e.strConcat = p;
    function _(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : w(Array.isArray(v) ? v.join(",") : v);
    }
    function b(v) {
      return new r(w(v));
    }
    e.stringify = b;
    function w(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function g(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : i`[${v}]`;
    }
    e.getProperty = g;
    function $(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = $;
    function u(v) {
      return new r(v.toString());
    }
    e.regexpCode = u;
  })(lr)), lr;
}
var dr = {}, go;
function yo() {
  return go || (go = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Vn();
    class n extends Error {
      constructor(f) {
        super(`CodeGen: "code" for ${f} not defined`), this.value = f.value;
      }
    }
    var r;
    (function(l) {
      l[l.Started = 0] = "Started", l[l.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class i {
      constructor({ prefixes: f, parent: p } = {}) {
        this._names = {}, this._prefixes = f, this._parent = p;
      }
      toName(f) {
        return f instanceof t.Name ? f : this.name(f);
      }
      name(f) {
        return new t.Name(this._newName(f));
      }
      _newName(f) {
        const p = this._names[f] || this._nameGroup(f);
        return `${f}${p.index++}`;
      }
      _nameGroup(f) {
        var p, _;
        if (!((_ = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || _ === void 0) && _.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(f, p) {
        super(p), this.prefix = f;
      }
      setValue(f, { property: p, itemIndex: _ }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(p)}[${_}]`;
      }
    }
    e.ValueScopeName = o;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(f) {
        super(f), this._values = {}, this._scope = f.scope, this.opts = { ...f, _n: f.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(f) {
        return new o(f, this._newName(f));
      }
      value(f, p) {
        var _;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(f), { prefix: w } = b, g = (_ = p.key) !== null && _ !== void 0 ? _ : p.ref;
        let $ = this._values[w];
        if ($) {
          const d = $.get(g);
          if (d)
            return d;
        } else
          $ = this._values[w] = /* @__PURE__ */ new Map();
        $.set(g, b);
        const u = this._scope[w] || (this._scope[w] = []), v = u.length;
        return u[v] = p.ref, b.setValue(p, { property: w, itemIndex: v }), b;
      }
      getValue(f, p) {
        const _ = this._values[f];
        if (_)
          return _.get(p);
      }
      scopeRefs(f, p = this._values) {
        return this._reduceValues(p, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${f}${_.scopePath}`;
        });
      }
      scopeCode(f = this._values, p, _) {
        return this._reduceValues(f, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, p, _);
      }
      _reduceValues(f, p, _ = {}, b) {
        let w = t.nil;
        for (const g in f) {
          const $ = f[g];
          if (!$)
            continue;
          const u = _[g] = _[g] || /* @__PURE__ */ new Map();
          $.forEach((v) => {
            if (u.has(v))
              return;
            u.set(v, r.Started);
            let d = p(v);
            if (d) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${C} ${v} = ${d};${this.opts._n}`;
            } else if (d = b?.(v))
              w = (0, t._)`${w}${d}${this.opts._n}`;
            else
              throw new n(v);
            u.set(v, r.Completed);
          });
        }
        return w;
      }
    }
    e.ValueScope = a;
  })(dr)), dr;
}
var $o;
function ie() {
  return $o || ($o = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Vn(), n = /* @__PURE__ */ yo();
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
    var i = /* @__PURE__ */ yo();
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
      optimizeNames(S, E) {
        return this;
      }
    }
    class s extends o {
      constructor(S, E, I) {
        super(), this.varKind = S, this.name = E, this.rhs = I;
      }
      render({ es5: S, _n: E }) {
        const I = S ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${V};` + E;
      }
      optimizeNames(S, E) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = z(this.rhs, S, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(S, E, I) {
        super(), this.lhs = S, this.rhs = E, this.sideEffects = I;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, E) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = z(this.rhs, S, E), this;
      }
      get names() {
        const S = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return L(S, this.rhs);
      }
    }
    class l extends a {
      constructor(S, E, I, V) {
        super(S, I, V), this.op = E;
      }
      render({ _n: S }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + S;
      }
    }
    class f extends o {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `${this.label}:` + S;
      }
    }
    class p extends o {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `break${this.label ? ` ${this.label}` : ""};` + S;
      }
    }
    class _ extends o {
      constructor(S) {
        super(), this.error = S;
      }
      render({ _n: S }) {
        return `throw ${this.error};` + S;
      }
      get names() {
        return this.error.names;
      }
    }
    class b extends o {
      constructor(S) {
        super(), this.code = S;
      }
      render({ _n: S }) {
        return `${this.code};` + S;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(S, E) {
        return this.code = z(this.code, S, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class w extends o {
      constructor(S = []) {
        super(), this.nodes = S;
      }
      render(S) {
        return this.nodes.reduce((E, I) => E + I.render(S), "");
      }
      optimizeNodes() {
        const { nodes: S } = this;
        let E = S.length;
        for (; E--; ) {
          const I = S[E].optimizeNodes();
          Array.isArray(I) ? S.splice(E, 1, ...I) : I ? S[E] = I : S.splice(E, 1);
        }
        return S.length > 0 ? this : void 0;
      }
      optimizeNames(S, E) {
        const { nodes: I } = this;
        let V = I.length;
        for (; V--; ) {
          const K = I[V];
          K.optimizeNames(S, E) || (G(S, K.names), I.splice(V, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, E) => j(S, E.names), {});
      }
    }
    class g extends w {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class $ extends w {
    }
    class u extends g {
    }
    u.kind = "else";
    class v extends g {
      constructor(S, E) {
        super(E), this.condition = S;
      }
      render(S) {
        let E = `if(${this.condition})` + super.render(S);
        return this.else && (E += "else " + this.else.render(S)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const S = this.condition;
        if (S === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const I = E.optimizeNodes();
          E = this.else = Array.isArray(I) ? new u(I) : I;
        }
        if (E)
          return S === !1 ? E instanceof v ? E : E.nodes : this.nodes.length ? this : new v(Y(S), E instanceof v ? [E] : E.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, E) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(S, E), !!(super.optimizeNames(S, E) || this.else))
          return this.condition = z(this.condition, S, E), this;
      }
      get names() {
        const S = super.names;
        return L(S, this.condition), this.else && j(S, this.else.names), S;
      }
    }
    v.kind = "if";
    class d extends g {
    }
    d.kind = "for";
    class C extends d {
      constructor(S) {
        super(), this.iteration = S;
      }
      render(S) {
        return `for(${this.iteration})` + super.render(S);
      }
      optimizeNames(S, E) {
        if (super.optimizeNames(S, E))
          return this.iteration = z(this.iteration, S, E), this;
      }
      get names() {
        return j(super.names, this.iteration.names);
      }
    }
    class y extends d {
      constructor(S, E, I, V) {
        super(), this.varKind = S, this.name = E, this.from = I, this.to = V;
      }
      render(S) {
        const E = S.es5 ? n.varKinds.var : this.varKind, { name: I, from: V, to: K } = this;
        return `for(${E} ${I}=${V}; ${I}<${K}; ${I}++)` + super.render(S);
      }
      get names() {
        const S = L(super.names, this.from);
        return L(S, this.to);
      }
    }
    class c extends d {
      constructor(S, E, I, V) {
        super(), this.loop = S, this.varKind = E, this.name = I, this.iterable = V;
      }
      render(S) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(S);
      }
      optimizeNames(S, E) {
        if (super.optimizeNames(S, E))
          return this.iterable = z(this.iterable, S, E), this;
      }
      get names() {
        return j(super.names, this.iterable.names);
      }
    }
    class h extends g {
      constructor(S, E, I) {
        super(), this.name = S, this.args = E, this.async = I;
      }
      render(S) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(S);
      }
    }
    h.kind = "func";
    class m extends w {
      render(S) {
        return "return " + super.render(S);
      }
    }
    m.kind = "return";
    class k extends g {
      render(S) {
        let E = "try" + super.render(S);
        return this.catch && (E += this.catch.render(S)), this.finally && (E += this.finally.render(S)), E;
      }
      optimizeNodes() {
        var S, E;
        return super.optimizeNodes(), (S = this.catch) === null || S === void 0 || S.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(S, E) {
        var I, V;
        return super.optimizeNames(S, E), (I = this.catch) === null || I === void 0 || I.optimizeNames(S, E), (V = this.finally) === null || V === void 0 || V.optimizeNames(S, E), this;
      }
      get names() {
        const S = super.names;
        return this.catch && j(S, this.catch.names), this.finally && j(S, this.finally.names), S;
      }
    }
    class x extends g {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    x.kind = "catch";
    class F extends g {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    F.kind = "finally";
    class M {
      constructor(S, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = S, this._scope = new n.Scope({ parent: S }), this._nodes = [new $()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(S) {
        return this._scope.name(S);
      }
      // reserves unique name in the external scope
      scopeName(S) {
        return this._extScope.name(S);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(S, E) {
        const I = this._extScope.value(S, E);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(S, E) {
        return this._extScope.getValue(S, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(S) {
        return this._extScope.scopeRefs(S, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(S, E, I, V) {
        const K = this._scope.toName(E);
        return I !== void 0 && V && (this._constants[K.str] = I), this._leafNode(new s(S, K, I)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(S, E, I) {
        return this._def(n.varKinds.const, S, E, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(S, E, I) {
        return this._def(n.varKinds.let, S, E, I);
      }
      // `var` declaration with optional assignment
      var(S, E, I) {
        return this._def(n.varKinds.var, S, E, I);
      }
      // assignment code
      assign(S, E, I) {
        return this._leafNode(new a(S, E, I));
      }
      // `+=` code
      add(S, E) {
        return this._leafNode(new l(S, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(S) {
        return typeof S == "function" ? S() : S !== t.nil && this._leafNode(new b(S)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...S) {
        const E = ["{"];
        for (const [I, V] of S)
          E.length > 1 && E.push(","), E.push(I), (I !== V || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, V));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(S, E, I) {
        if (this._blockNode(new v(S)), E && I)
          this.code(E).else().code(I).endIf();
        else if (E)
          this.code(E).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(S) {
        return this._elseNode(new v(S));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, u);
      }
      _for(S, E) {
        return this._blockNode(S), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, E) {
        return this._for(new C(S), E);
      }
      // `for` statement for a range of values
      forRange(S, E, I, V, K = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const re = this._scope.toName(S);
        return this._for(new y(K, re, E, I), () => V(re));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, E, I, V = n.varKinds.const) {
        const K = this._scope.toName(S);
        if (this.opts.es5) {
          const re = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${re}.length`, (ee) => {
            this.var(K, (0, t._)`${re}[${ee}]`), I(K);
          });
        }
        return this._for(new c("of", V, K, E), () => I(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, E, I, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${E})`, I);
        const K = this._scope.toName(S);
        return this._for(new c("in", V, K, E), () => I(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(S) {
        return this._leafNode(new f(S));
      }
      // `break` statement
      break(S) {
        return this._leafNode(new p(S));
      }
      // `return` statement
      return(S) {
        const E = new m();
        if (this._blockNode(E), this.code(S), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try(S, E, I) {
        if (!E && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new k();
        if (this._blockNode(V), this.code(S), E) {
          const K = this.name("e");
          this._currNode = V.catch = new x(K), E(K);
        }
        return I && (this._currNode = V.finally = new F(), this.code(I)), this._endBlockNode(x, F);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new _(S));
      }
      // start self-balancing block
      block(S, E) {
        return this._blockStarts.push(this._nodes.length), S && this.code(S).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(S) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - E;
        if (I < 0 || S !== void 0 && I !== S)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${S} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(S, E = t.nil, I, V) {
        return this._blockNode(new h(S, E, I)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
      }
      optimize(S = 1) {
        for (; S-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(S) {
        return this._currNode.nodes.push(S), this;
      }
      _blockNode(S) {
        this._currNode.nodes.push(S), this._nodes.push(S);
      }
      _endBlockNode(S, E) {
        const I = this._currNode;
        if (I instanceof S || E && I instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${S.kind}/${E.kind}` : S.kind}"`);
      }
      _elseNode(S) {
        const E = this._currNode;
        if (!(E instanceof v))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = S, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const S = this._nodes;
        return S[S.length - 1];
      }
      set _currNode(S) {
        const E = this._nodes;
        E[E.length - 1] = S;
      }
    }
    e.CodeGen = M;
    function j(O, S) {
      for (const E in S)
        O[E] = (O[E] || 0) + (S[E] || 0);
      return O;
    }
    function L(O, S) {
      return S instanceof t._CodeOrName ? j(O, S.names) : O;
    }
    function z(O, S, E) {
      if (O instanceof t.Name)
        return I(O);
      if (!V(O))
        return O;
      return new t._Code(O._items.reduce((K, re) => (re instanceof t.Name && (re = I(re)), re instanceof t._Code ? K.push(...re._items) : K.push(re), K), []));
      function I(K) {
        const re = E[K.str];
        return re === void 0 || S[K.str] !== 1 ? K : (delete S[K.str], re);
      }
      function V(K) {
        return K instanceof t._Code && K._items.some((re) => re instanceof t.Name && S[re.str] === 1 && E[re.str] !== void 0);
      }
    }
    function G(O, S) {
      for (const E in S)
        O[E] = (O[E] || 0) - (S[E] || 0);
    }
    function Y(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${D(O)}`;
    }
    e.not = Y;
    const oe = R(e.operators.AND);
    function X(...O) {
      return O.reduce(oe);
    }
    e.and = X;
    const W = R(e.operators.OR);
    function q(...O) {
      return O.reduce(W);
    }
    e.or = q;
    function R(O) {
      return (S, E) => S === t.nil ? E : E === t.nil ? S : (0, t._)`${D(S)} ${O} ${D(E)}`;
    }
    function D(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(cr)), cr;
}
var se = {}, vo;
function ae() {
  if (vo) return se;
  vo = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Vn();
  function n(c) {
    const h = {};
    for (const m of c)
      h[m] = !0;
    return h;
  }
  se.toHash = n;
  function r(c, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (i(c, h), !o(h, c.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function i(c, h = c.schema) {
    const { opts: m, self: k } = c;
    if (!m.strictSchema || typeof h == "boolean")
      return;
    const x = k.RULES.keywords;
    for (const F in h)
      x[F] || y(c, `unknown keyword: "${F}"`);
  }
  se.checkUnknownRules = i;
  function o(c, h) {
    if (typeof c == "boolean")
      return !c;
    for (const m in c)
      if (h[m])
        return !0;
    return !1;
  }
  se.schemaHasRules = o;
  function s(c, h) {
    if (typeof c == "boolean")
      return !c;
    for (const m in c)
      if (m !== "$ref" && h.all[m])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: h }, m, k, x) {
    if (!x) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
    }
    return (0, e._)`${c}${h}${(0, e.getProperty)(k)}`;
  }
  se.schemaRefOrVal = a;
  function l(c) {
    return _(decodeURIComponent(c));
  }
  se.unescapeFragment = l;
  function f(c) {
    return encodeURIComponent(p(c));
  }
  se.escapeFragment = f;
  function p(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = p;
  function _(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = _;
  function b(c, h) {
    if (Array.isArray(c))
      for (const m of c)
        h(m);
    else
      h(c);
  }
  se.eachItem = b;
  function w({ mergeNames: c, mergeToName: h, mergeValues: m, resultToName: k }) {
    return (x, F, M, j) => {
      const L = M === void 0 ? F : M instanceof e.Name ? (F instanceof e.Name ? c(x, F, M) : h(x, F, M), M) : F instanceof e.Name ? (h(x, M, F), F) : m(F, M);
      return j === e.Name && !(L instanceof e.Name) ? k(x, L) : L;
    };
  }
  se.mergeEvaluated = {
    props: w({
      mergeNames: (c, h, m) => c.if((0, e._)`${m} !== true && ${h} !== undefined`, () => {
        c.if((0, e._)`${h} === true`, () => c.assign(m, !0), () => c.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${h})`));
      }),
      mergeToName: (c, h, m) => c.if((0, e._)`${m} !== true`, () => {
        h === !0 ? c.assign(m, !0) : (c.assign(m, (0, e._)`${m} || {}`), $(c, m, h));
      }),
      mergeValues: (c, h) => c === !0 ? !0 : { ...c, ...h },
      resultToName: g
    }),
    items: w({
      mergeNames: (c, h, m) => c.if((0, e._)`${m} !== true && ${h} !== undefined`, () => c.assign(m, (0, e._)`${h} === true ? true : ${m} > ${h} ? ${m} : ${h}`)),
      mergeToName: (c, h, m) => c.if((0, e._)`${m} !== true`, () => c.assign(m, h === !0 ? !0 : (0, e._)`${m} > ${h} ? ${m} : ${h}`)),
      mergeValues: (c, h) => c === !0 ? !0 : Math.max(c, h),
      resultToName: (c, h) => c.var("items", h)
    })
  };
  function g(c, h) {
    if (h === !0)
      return c.var("props", !0);
    const m = c.var("props", (0, e._)`{}`);
    return h !== void 0 && $(c, m, h), m;
  }
  se.evaluatedPropsToName = g;
  function $(c, h, m) {
    Object.keys(m).forEach((k) => c.assign((0, e._)`${h}${(0, e.getProperty)(k)}`, !0));
  }
  se.setEvaluated = $;
  const u = {};
  function v(c, h) {
    return c.scopeValue("func", {
      ref: h,
      code: u[h.code] || (u[h.code] = new t._Code(h.code))
    });
  }
  se.useFunc = v;
  var d;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(d || (se.Type = d = {}));
  function C(c, h, m) {
    if (c instanceof e.Name) {
      const k = h === d.Num;
      return m ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(c).toString() : "/" + p(c);
  }
  se.getErrorPath = C;
  function y(c, h, m = c.opts.strictSchema) {
    if (m) {
      if (h = `strict mode: ${h}`, m === !0)
        throw new Error(h);
      c.self.logger.warn(h);
    }
  }
  return se.checkStrictMode = y, se;
}
var Lt = {}, bo;
function Oe() {
  if (bo) return Lt;
  bo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
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
var wo;
function Jn() {
  return wo || (wo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: v }) => v ? (0, t.str)`"${u}" keyword must be ${v} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function i(u, v = e.keywordError, d, C) {
      const { it: y } = u, { gen: c, compositeRule: h, allErrors: m } = y, k = _(u, v, d);
      C ?? (h || m) ? l(c, k) : f(y, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(u, v = e.keywordError, d) {
      const { it: C } = u, { gen: y, compositeRule: c, allErrors: h } = C, m = _(u, v, d);
      l(y, m), c || h || f(C, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(u, v) {
      u.assign(r.default.errors, v), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(v, () => u.assign((0, t._)`${r.default.vErrors}.length`, v), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: v, schemaValue: d, data: C, errsCount: y, it: c }) {
      if (y === void 0)
        throw new Error("ajv implementation error");
      const h = u.name("err");
      u.forRange("i", y, r.default.errors, (m) => {
        u.const(h, (0, t._)`${r.default.vErrors}[${m}]`), u.if((0, t._)`${h}.instancePath === undefined`, () => u.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), u.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${v}`), c.opts.verbose && (u.assign((0, t._)`${h}.schema`, d), u.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function l(u, v) {
      const d = u.const("err", v);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function f(u, v) {
      const { gen: d, validateName: C, schemaEnv: y } = u;
      y.$async ? d.throw((0, t._)`new ${u.ValidationError}(${v})`) : (d.assign((0, t._)`${C}.errors`, v), d.return(!1));
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
    function _(u, v, d) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : b(u, v, d);
    }
    function b(u, v, d = {}) {
      const { gen: C, it: y } = u, c = [
        w(y, d),
        g(u, d)
      ];
      return $(u, v, c), C.object(...c);
    }
    function w({ errorPath: u }, { instancePath: v }) {
      const d = v ? (0, t.str)`${u}${(0, n.getErrorPath)(v, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function g({ keyword: u, it: { errSchemaPath: v } }, { schemaPath: d, parentSchema: C }) {
      let y = C ? v : (0, t.str)`${v}/${u}`;
      return d && (y = (0, t.str)`${y}${(0, n.getErrorPath)(d, n.Type.Str)}`), [p.schemaPath, y];
    }
    function $(u, { params: v, message: d }, C) {
      const { keyword: y, data: c, schemaValue: h, it: m } = u, { opts: k, propertyName: x, topSchemaRef: F, schemaPath: M } = m;
      C.push([p.keyword, y], [p.params, typeof v == "function" ? v(u) : v || (0, t._)`{}`]), k.messages && C.push([p.message, typeof d == "function" ? d(u) : d]), k.verbose && C.push([p.schema, h], [p.parentSchema, (0, t._)`${F}${M}`], [r.default.data, c]), x && C.push([p.propertyName, x]);
    }
  })(ar)), ar;
}
var _o;
function Ja() {
  if (_o) return rt;
  _o = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.boolOrEmptySchema = rt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: l, schema: f, validateName: p } = a;
    f === !1 ? s(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${p}.errors`, null), l.return(!0));
  }
  rt.topBoolOrEmptySchema = i;
  function o(a, l) {
    const { gen: f, schema: p } = a;
    p === !1 ? (f.var(l, !1), s(a)) : f.var(l, !0);
  }
  rt.boolOrEmptySchema = o;
  function s(a, l) {
    const { gen: f, data: p } = a, _ = {
      gen: f,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, r, void 0, l);
  }
  return rt;
}
var ge = {}, ot = {}, So;
function Ms() {
  if (So) return ot;
  So = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.getRules = ot.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  ot.isJSONType = n;
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
  return ot.getRules = r, ot;
}
var Ve = {}, Co;
function Ns() {
  if (Co) return Ve;
  Co = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.shouldUseRule = Ve.shouldUseGroup = Ve.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  Ve.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  Ve.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return Ve.shouldUseRule = n, Ve;
}
var ko;
function Bn() {
  if (ko) return ge;
  ko = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ Ms(), t = /* @__PURE__ */ Ns(), n = /* @__PURE__ */ Jn(), r = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ae();
  var o;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(o || (ge.DataType = o = {}));
  function s(d) {
    const C = a(d.type);
    if (C.includes("null")) {
      if (d.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!C.length && d.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      d.nullable === !0 && C.push("null");
    }
    return C;
  }
  ge.getSchemaTypes = s;
  function a(d) {
    const C = Array.isArray(d) ? d : d ? [d] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  ge.getJSONTypes = a;
  function l(d, C) {
    const { gen: y, data: c, opts: h } = d, m = p(C, h.coerceTypes), k = C.length > 0 && !(m.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(d, C[0]));
    if (k) {
      const x = g(C, c, h.strictNumbers, o.Wrong);
      y.if(x, () => {
        m.length ? _(d, C, m) : u(d);
      });
    }
    return k;
  }
  ge.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(d, C) {
    return C ? d.filter((y) => f.has(y) || C === "array" && y === "array") : [];
  }
  function _(d, C, y) {
    const { gen: c, data: h, opts: m } = d, k = c.let("dataType", (0, r._)`typeof ${h}`), x = c.let("coerced", (0, r._)`undefined`);
    m.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => c.assign(h, (0, r._)`${h}[0]`).assign(k, (0, r._)`typeof ${h}`).if(g(C, h, m.strictNumbers), () => c.assign(x, h))), c.if((0, r._)`${x} !== undefined`);
    for (const M of y)
      (f.has(M) || M === "array" && m.coerceTypes === "array") && F(M);
    c.else(), u(d), c.endIf(), c.if((0, r._)`${x} !== undefined`, () => {
      c.assign(h, x), b(d, x);
    });
    function F(M) {
      switch (M) {
        case "string":
          c.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(x, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(x, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${k} == "boolean" || ${h} === null
              || (${k} == "string" && ${h} && ${h} == +${h})`).assign(x, (0, r._)`+${h}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${k} === "boolean" || ${h} === null
              || (${k} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(x, (0, r._)`+${h}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(x, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(x, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), c.assign(x, null);
          return;
        case "array":
          c.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${h} === null`).assign(x, (0, r._)`[${h}]`);
      }
    }
  }
  function b({ gen: d, parentData: C, parentDataProperty: y }, c) {
    d.if((0, r._)`${C} !== undefined`, () => d.assign((0, r._)`${C}[${y}]`, c));
  }
  function w(d, C, y, c = o.Correct) {
    const h = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let m;
    switch (d) {
      case "null":
        return (0, r._)`${C} ${h} null`;
      case "array":
        m = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        m = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        m = k((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        m = k();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${d}`;
    }
    return c === o.Correct ? m : (0, r.not)(m);
    function k(x = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, x, y ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ge.checkDataType = w;
  function g(d, C, y, c) {
    if (d.length === 1)
      return w(d[0], C, y, c);
    let h;
    const m = (0, i.toHash)(d);
    if (m.array && m.object) {
      const k = (0, r._)`typeof ${C} != "object"`;
      h = m.null ? k : (0, r._)`!${C} || ${k}`, delete m.null, delete m.array, delete m.object;
    } else
      h = r.nil;
    m.number && delete m.integer;
    for (const k in m)
      h = (0, r.and)(h, w(k, C, y, c));
    return h;
  }
  ge.checkDataTypes = g;
  const $ = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: C }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${C}}`
  };
  function u(d) {
    const C = v(d);
    (0, n.reportError)(C, $);
  }
  ge.reportTypeError = u;
  function v(d) {
    const { gen: C, data: y, schema: c } = d, h = (0, i.schemaRefOrVal)(d, c, "type");
    return {
      gen: C,
      keyword: "type",
      data: y,
      schema: c.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: c,
      params: {},
      it: d
    };
  }
  return ge;
}
var xt = {}, Eo;
function Ya() {
  if (Eo) return xt;
  Eo = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const l in s)
        r(i, l, s[l].default);
    else o === "array" && Array.isArray(a) && a.forEach((l, f) => r(i, f, l.default));
  }
  xt.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: l, data: f, opts: p } = i;
    if (s === void 0)
      return;
    const _ = (0, e._)`${f}${(0, e.getProperty)(o)}`;
    if (l) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${_}`);
      return;
    }
    let b = (0, e._)`${_} === undefined`;
    p.useDefaults === "empty" && (b = (0, e._)`${b} || ${_} === null || ${_} === ""`), a.if(b, (0, e._)`${_} = ${(0, e.stringify)(s)}`);
  }
  return xt;
}
var Ae = {}, de = {}, xo;
function Te() {
  if (xo) return de;
  xo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ae();
  function i(d, C) {
    const { gen: y, data: c, it: h } = d;
    y.if(p(y, c, C, h.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${C}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = i;
  function o({ gen: d, data: C, it: { opts: y } }, c, h) {
    return (0, e.or)(...c.map((m) => (0, e.and)(p(d, C, m, y.ownProperties), (0, e._)`${h} = ${m}`)));
  }
  de.checkMissingProp = o;
  function s(d, C) {
    d.setParams({ missingProperty: C }, !0), d.error();
  }
  de.reportMissingProp = s;
  function a(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  de.hasPropFunc = a;
  function l(d, C, y) {
    return (0, e._)`${a(d)}.call(${C}, ${y})`;
  }
  de.isOwnProperty = l;
  function f(d, C, y, c) {
    const h = (0, e._)`${C}${(0, e.getProperty)(y)} !== undefined`;
    return c ? (0, e._)`${h} && ${l(d, C, y)}` : h;
  }
  de.propertyInData = f;
  function p(d, C, y, c) {
    const h = (0, e._)`${C}${(0, e.getProperty)(y)} === undefined`;
    return c ? (0, e.or)(h, (0, e.not)(l(d, C, y))) : h;
  }
  de.noPropertyInData = p;
  function _(d) {
    return d ? Object.keys(d).filter((C) => C !== "__proto__") : [];
  }
  de.allSchemaProperties = _;
  function b(d, C) {
    return _(C).filter((y) => !(0, t.alwaysValidSchema)(d, C[y]));
  }
  de.schemaProperties = b;
  function w({ schemaCode: d, data: C, it: { gen: y, topSchemaRef: c, schemaPath: h, errorPath: m }, it: k }, x, F, M) {
    const j = M ? (0, e._)`${d}, ${C}, ${c}${h}` : C, L = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && L.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const z = (0, e._)`${j}, ${y.object(...L)}`;
    return F !== e.nil ? (0, e._)`${x}.call(${F}, ${z})` : (0, e._)`${x}(${z})`;
  }
  de.callValidateCode = w;
  const g = (0, e._)`new RegExp`;
  function $({ gen: d, it: { opts: C } }, y) {
    const c = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, m = h(y, c);
    return d.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${h.code === "new RegExp" ? g : (0, r.useFunc)(d, h)}(${y}, ${c})`
    });
  }
  de.usePattern = $;
  function u(d) {
    const { gen: C, data: y, keyword: c, it: h } = d, m = C.name("valid");
    if (h.allErrors) {
      const x = C.let("valid", !0);
      return k(() => C.assign(x, !1)), x;
    }
    return C.var(m, !0), k(() => C.break()), m;
    function k(x) {
      const F = C.const("len", (0, e._)`${y}.length`);
      C.forRange("i", 0, F, (M) => {
        d.subschema({
          keyword: c,
          dataProp: M,
          dataPropType: t.Type.Num
        }, m), C.if((0, e.not)(m), x);
      });
    }
  }
  de.validateArray = u;
  function v(d) {
    const { gen: C, schema: y, keyword: c, it: h } = d;
    if (!Array.isArray(y))
      throw new Error("ajv implementation error");
    if (y.some((F) => (0, t.alwaysValidSchema)(h, F)) && !h.opts.unevaluated)
      return;
    const k = C.let("valid", !1), x = C.name("_valid");
    C.block(() => y.forEach((F, M) => {
      const j = d.subschema({
        keyword: c,
        schemaProp: M,
        compositeRule: !0
      }, x);
      C.assign(k, (0, e._)`${k} || ${x}`), d.mergeValidEvaluated(j, x) || C.if((0, e.not)(k));
    })), d.result(k, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = v, de;
}
var Po;
function Xa() {
  if (Po) return Ae;
  Po = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.validateKeywordUsage = Ae.validSchemaType = Ae.funcKeywordCode = Ae.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ Jn();
  function i(b, w) {
    const { gen: g, keyword: $, schema: u, parentSchema: v, it: d } = b, C = w.macro.call(d.self, u, v, d), y = f(g, $, C);
    d.opts.validateSchema !== !1 && d.self.validateSchema(C, !0);
    const c = g.name("valid");
    b.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${$}`,
      topSchemaRef: y,
      compositeRule: !0
    }, c), b.pass(c, () => b.error(!0));
  }
  Ae.macroKeywordCode = i;
  function o(b, w) {
    var g;
    const { gen: $, keyword: u, schema: v, parentSchema: d, $data: C, it: y } = b;
    l(y, w);
    const c = !C && w.compile ? w.compile.call(y.self, v, d, y) : w.validate, h = f($, u, c), m = $.let("valid");
    b.block$data(m, k), b.ok((g = w.valid) !== null && g !== void 0 ? g : m);
    function k() {
      if (w.errors === !1)
        M(), w.modifying && s(b), j(() => b.error());
      else {
        const L = w.async ? x() : F();
        w.modifying && s(b), j(() => a(b, L));
      }
    }
    function x() {
      const L = $.let("ruleErrs", null);
      return $.try(() => M((0, e._)`await `), (z) => $.assign(m, !1).if((0, e._)`${z} instanceof ${y.ValidationError}`, () => $.assign(L, (0, e._)`${z}.errors`), () => $.throw(z))), L;
    }
    function F() {
      const L = (0, e._)`${h}.errors`;
      return $.assign(L, null), M(e.nil), L;
    }
    function M(L = w.async ? (0, e._)`await ` : e.nil) {
      const z = y.opts.passContext ? t.default.this : t.default.self, G = !("compile" in w && !C || w.schema === !1);
      $.assign(m, (0, e._)`${L}${(0, n.callValidateCode)(b, h, z, G)}`, w.modifying);
    }
    function j(L) {
      var z;
      $.if((0, e.not)((z = w.valid) !== null && z !== void 0 ? z : m), L);
    }
  }
  Ae.funcKeywordCode = o;
  function s(b) {
    const { gen: w, data: g, it: $ } = b;
    w.if($.parentData, () => w.assign(g, (0, e._)`${$.parentData}[${$.parentDataProperty}]`));
  }
  function a(b, w) {
    const { gen: g } = b;
    g.if((0, e._)`Array.isArray(${w})`, () => {
      g.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(b);
    }, () => b.error());
  }
  function l({ schemaEnv: b }, w) {
    if (w.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function f(b, w, g) {
    if (g === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return b.scopeValue("keyword", typeof g == "function" ? { ref: g } : { ref: g, code: (0, e.stringify)(g) });
  }
  function p(b, w, g = !1) {
    return !w.length || w.some(($) => $ === "array" ? Array.isArray(b) : $ === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == $ || g && typeof b > "u");
  }
  Ae.validSchemaType = p;
  function _({ schema: b, opts: w, self: g, errSchemaPath: $ }, u, v) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(v) : u.keyword !== v)
      throw new Error("ajv implementation error");
    const d = u.dependencies;
    if (d?.some((C) => !Object.prototype.hasOwnProperty.call(b, C)))
      throw new Error(`parent schema must have dependencies of ${v}: ${d.join(",")}`);
    if (u.validateSchema && !u.validateSchema(b[v])) {
      const y = `keyword "${v}" value is invalid at path "${$}": ` + g.errorsText(u.validateSchema.errors);
      if (w.validateSchema === "log")
        g.logger.error(y);
      else
        throw new Error(y);
    }
  }
  return Ae.validateKeywordUsage = _, Ae;
}
var Be = {}, Ao;
function Za() {
  if (Ao) return Be;
  Ao = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae();
  function n(o, { keyword: s, schemaProp: a, schema: l, schemaPath: f, errSchemaPath: p, topSchemaRef: _ }) {
    if (s !== void 0 && l !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const b = o.schema[s];
      return a === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}`
      } : {
        schema: b[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (l !== void 0) {
      if (f === void 0 || p === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: f,
        topSchemaRef: _,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Be.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: l, data: f, dataTypes: p, propertyName: _ }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = s;
    if (a !== void 0) {
      const { errorPath: g, dataPathArr: $, opts: u } = s, v = b.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      w(v), o.errorPath = (0, e.str)`${g}${(0, t.getErrorPath)(a, l, u.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...$, o.parentDataProperty];
    }
    if (f !== void 0) {
      const g = f instanceof e.Name ? f : b.let("data", f, !0);
      w(g), _ !== void 0 && (o.propertyName = _);
    }
    p && (o.dataTypes = p);
    function w(g) {
      o.data = g, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, g];
    }
  }
  Be.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: p }) {
    l !== void 0 && (o.compositeRule = l), f !== void 0 && (o.createErrors = f), p !== void 0 && (o.allErrors = p), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return Be.extendSubschemaMode = i, Be;
}
var be = {}, ur, Ro;
function Os() {
  return Ro || (Ro = 1, ur = function e(t, n) {
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
  }), ur;
}
var fr = { exports: {} }, Mo;
function Qa() {
  if (Mo) return fr.exports;
  Mo = 1;
  var e = fr.exports = function(r, i, o) {
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
  function t(r, i, o, s, a, l, f, p, _, b) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, l, f, p, _, b);
      for (var w in s) {
        var g = s[w];
        if (Array.isArray(g)) {
          if (w in e.arrayKeywords)
            for (var $ = 0; $ < g.length; $++)
              t(r, i, o, g[$], a + "/" + w + "/" + $, l, a, w, s, $);
        } else if (w in e.propsKeywords) {
          if (g && typeof g == "object")
            for (var u in g)
              t(r, i, o, g[u], a + "/" + w + "/" + n(u), l, a, w, s, u);
        } else (w in e.keywords || r.allKeys && !(w in e.skipKeywords)) && t(r, i, o, g, a + "/" + w, l, a, w, s);
      }
      o(s, a, l, f, p, _, b);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return fr.exports;
}
var No;
function Yn() {
  if (No) return be;
  No = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ae(), t = Os(), n = Qa(), r = /* @__PURE__ */ new Set([
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
  function i($, u = !0) {
    return typeof $ == "boolean" ? !0 : u === !0 ? !s($) : u ? a($) <= u : !1;
  }
  be.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s($) {
    for (const u in $) {
      if (o.has(u))
        return !0;
      const v = $[u];
      if (Array.isArray(v) && v.some(s) || typeof v == "object" && s(v))
        return !0;
    }
    return !1;
  }
  function a($) {
    let u = 0;
    for (const v in $) {
      if (v === "$ref")
        return 1 / 0;
      if (u++, !r.has(v) && (typeof $[v] == "object" && (0, e.eachItem)($[v], (d) => u += a(d)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function l($, u = "", v) {
    v !== !1 && (u = _(u));
    const d = $.parse(u);
    return f($, d);
  }
  be.getFullPath = l;
  function f($, u) {
    return $.serialize(u).split("#")[0] + "#";
  }
  be._getFullPath = f;
  const p = /#\/?$/;
  function _($) {
    return $ ? $.replace(p, "") : "";
  }
  be.normalizeId = _;
  function b($, u, v) {
    return v = _(v), $.resolve(u, v);
  }
  be.resolveUrl = b;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function g($, u) {
    if (typeof $ == "boolean")
      return {};
    const { schemaId: v, uriResolver: d } = this.opts, C = _($[v] || u), y = { "": C }, c = l(d, C, !1), h = {}, m = /* @__PURE__ */ new Set();
    return n($, { allKeys: !0 }, (F, M, j, L) => {
      if (L === void 0)
        return;
      const z = c + M;
      let G = y[L];
      typeof F[v] == "string" && (G = Y.call(this, F[v])), oe.call(this, F.$anchor), oe.call(this, F.$dynamicAnchor), y[M] = G;
      function Y(X) {
        const W = this.opts.uriResolver.resolve;
        if (X = _(G ? W(G, X) : X), m.has(X))
          throw x(X);
        m.add(X);
        let q = this.refs[X];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(F, q.schema, X) : X !== _(z) && (X[0] === "#" ? (k(F, h[X], X), h[X] = F) : this.refs[X] = z), X;
      }
      function oe(X) {
        if (typeof X == "string") {
          if (!w.test(X))
            throw new Error(`invalid anchor "${X}"`);
          Y.call(this, `#${X}`);
        }
      }
    }), h;
    function k(F, M, j) {
      if (M !== void 0 && !t(F, M))
        throw x(j);
    }
    function x(F) {
      return new Error(`reference "${F}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = g, be;
}
var Oo;
function Xn() {
  if (Oo) return qe;
  Oo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ja(), t = /* @__PURE__ */ Bn(), n = /* @__PURE__ */ Ns(), r = /* @__PURE__ */ Bn(), i = /* @__PURE__ */ Ya(), o = /* @__PURE__ */ Xa(), s = /* @__PURE__ */ Za(), a = /* @__PURE__ */ ie(), l = /* @__PURE__ */ Oe(), f = /* @__PURE__ */ Yn(), p = /* @__PURE__ */ ae(), _ = /* @__PURE__ */ Jn();
  function b(P) {
    if (c(P) && (m(P), y(P))) {
      u(P);
      return;
    }
    w(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  qe.validateFunctionCode = b;
  function w({ gen: P, validateName: T, schema: B, schemaEnv: J, opts: H }, Q) {
    H.code.es5 ? P.func(T, (0, a._)`${l.default.data}, ${l.default.valCxt}`, J.$async, () => {
      P.code((0, a._)`"use strict"; ${d(B, H)}`), $(P, H), P.code(Q);
    }) : P.func(T, (0, a._)`${l.default.data}, ${g(H)}`, J.$async, () => P.code(d(B, H)).code(Q));
  }
  function g(P) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${P.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function $(P, T) {
    P.if(l.default.valCxt, () => {
      P.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), P.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), P.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), P.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), T.dynamicRef && P.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      P.var(l.default.instancePath, (0, a._)`""`), P.var(l.default.parentData, (0, a._)`undefined`), P.var(l.default.parentDataProperty, (0, a._)`undefined`), P.var(l.default.rootData, l.default.data), T.dynamicRef && P.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(P) {
    const { schema: T, opts: B, gen: J } = P;
    w(P, () => {
      B.$comment && T.$comment && L(P), F(P), J.let(l.default.vErrors, null), J.let(l.default.errors, 0), B.unevaluated && v(P), k(P), z(P);
    });
  }
  function v(P) {
    const { gen: T, validateName: B } = P;
    P.evaluated = T.const("evaluated", (0, a._)`${B}.evaluated`), T.if((0, a._)`${P.evaluated}.dynamicProps`, () => T.assign((0, a._)`${P.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${P.evaluated}.dynamicItems`, () => T.assign((0, a._)`${P.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(P, T) {
    const B = typeof P == "object" && P[T.schemaId];
    return B && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function C(P, T) {
    if (c(P) && (m(P), y(P))) {
      h(P, T);
      return;
    }
    (0, e.boolOrEmptySchema)(P, T);
  }
  function y({ schema: P, self: T }) {
    if (typeof P == "boolean")
      return !P;
    for (const B in P)
      if (T.RULES.all[B])
        return !0;
    return !1;
  }
  function c(P) {
    return typeof P.schema != "boolean";
  }
  function h(P, T) {
    const { schema: B, gen: J, opts: H } = P;
    H.$comment && B.$comment && L(P), M(P), j(P);
    const Q = J.const("_errs", l.default.errors);
    k(P, Q), J.var(T, (0, a._)`${Q} === ${l.default.errors}`);
  }
  function m(P) {
    (0, p.checkUnknownRules)(P), x(P);
  }
  function k(P, T) {
    if (P.opts.jtd)
      return Y(P, [], !1, T);
    const B = (0, t.getSchemaTypes)(P.schema), J = (0, t.coerceAndCheckDataType)(P, B);
    Y(P, B, !J, T);
  }
  function x(P) {
    const { schema: T, errSchemaPath: B, opts: J, self: H } = P;
    T.$ref && J.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(T, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function F(P) {
    const { schema: T, opts: B } = P;
    T.default !== void 0 && B.useDefaults && B.strictSchema && (0, p.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function M(P) {
    const T = P.schema[P.opts.schemaId];
    T && (P.baseId = (0, f.resolveUrl)(P.opts.uriResolver, P.baseId, T));
  }
  function j(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function L({ gen: P, schemaEnv: T, schema: B, errSchemaPath: J, opts: H }) {
    const Q = B.$comment;
    if (H.$comment === !0)
      P.code((0, a._)`${l.default.self}.logger.log(${Q})`);
    else if (typeof H.$comment == "function") {
      const ne = (0, a.str)`${J}/$comment`, ue = P.scopeValue("root", { ref: T.root });
      P.code((0, a._)`${l.default.self}.opts.$comment(${Q}, ${ne}, ${ue}.schema)`);
    }
  }
  function z(P) {
    const { gen: T, schemaEnv: B, validateName: J, ValidationError: H, opts: Q } = P;
    B.$async ? T.if((0, a._)`${l.default.errors} === 0`, () => T.return(l.default.data), () => T.throw((0, a._)`new ${H}(${l.default.vErrors})`)) : (T.assign((0, a._)`${J}.errors`, l.default.vErrors), Q.unevaluated && G(P), T.return((0, a._)`${l.default.errors} === 0`));
  }
  function G({ gen: P, evaluated: T, props: B, items: J }) {
    B instanceof a.Name && P.assign((0, a._)`${T}.props`, B), J instanceof a.Name && P.assign((0, a._)`${T}.items`, J);
  }
  function Y(P, T, B, J) {
    const { gen: H, schema: Q, data: ne, allErrors: ue, opts: le, self: me } = P, { RULES: pe } = me;
    if (Q.$ref && (le.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(Q, pe))) {
      H.block(() => V(P, "$ref", pe.all.$ref.definition));
      return;
    }
    le.jtd || X(P, T), H.block(() => {
      for (const ve of pe.rules)
        De(ve);
      De(pe.post);
    });
    function De(ve) {
      (0, n.shouldUseGroup)(Q, ve) && (ve.type ? (H.if((0, r.checkDataType)(ve.type, ne, le.strictNumbers)), oe(P, ve), T.length === 1 && T[0] === ve.type && B && (H.else(), (0, r.reportTypeError)(P)), H.endIf()) : oe(P, ve), ue || H.if((0, a._)`${l.default.errors} === ${J || 0}`));
    }
  }
  function oe(P, T) {
    const { gen: B, schema: J, opts: { useDefaults: H } } = P;
    H && (0, i.assignDefaults)(P, T.type), B.block(() => {
      for (const Q of T.rules)
        (0, n.shouldUseRule)(J, Q) && V(P, Q.keyword, Q.definition, T.type);
    });
  }
  function X(P, T) {
    P.schemaEnv.meta || !P.opts.strictTypes || (W(P, T), P.opts.allowUnionTypes || q(P, T), R(P, P.dataTypes));
  }
  function W(P, T) {
    if (T.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = T;
        return;
      }
      T.forEach((B) => {
        O(P.dataTypes, B) || E(P, `type "${B}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), S(P, T);
    }
  }
  function q(P, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && E(P, "use allowUnionTypes to allow union type keyword");
  }
  function R(P, T) {
    const B = P.self.RULES.all;
    for (const J in B) {
      const H = B[J];
      if (typeof H == "object" && (0, n.shouldUseRule)(P.schema, H)) {
        const { type: Q } = H.definition;
        Q.length && !Q.some((ne) => D(T, ne)) && E(P, `missing type "${Q.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function D(P, T) {
    return P.includes(T) || T === "number" && P.includes("integer");
  }
  function O(P, T) {
    return P.includes(T) || T === "integer" && P.includes("number");
  }
  function S(P, T) {
    const B = [];
    for (const J of P.dataTypes)
      O(T, J) ? B.push(J) : T.includes("integer") && J === "number" && B.push("integer");
    P.dataTypes = B;
  }
  function E(P, T) {
    const B = P.schemaEnv.baseId + P.errSchemaPath;
    T += ` at "${B}" (strictTypes)`, (0, p.checkStrictMode)(P, T, P.opts.strictTypes);
  }
  class I {
    constructor(T, B, J) {
      if ((0, o.validateKeywordUsage)(T, B, J), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = J, this.data = T.data, this.schema = T.schema[J], this.$data = B.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(T, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = B, this.$data)
        this.schemaCode = T.gen.const("vSchema", ee(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = T.gen.const("_errs", l.default.errors));
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
      (T ? _.reportExtraError : _.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, _.reportError)(this, this.def.$dataError || _.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, _.resetErrorsCount)(this.gen, this.errsCount);
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
      const { gen: J, schemaCode: H, schemaType: Q, def: ne } = this;
      J.if((0, a.or)((0, a._)`${H} === undefined`, B)), T !== a.nil && J.assign(T, !0), (Q.length || ne.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && J.assign(T, !1)), J.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: B, schemaType: J, def: H, it: Q } = this;
      return (0, a.or)(ne(), ue());
      function ne() {
        if (J.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(J) ? J : [J];
          return (0, a._)`${(0, r.checkDataTypes)(le, B, Q.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ue() {
        if (H.validateSchema) {
          const le = T.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, a._)`!${le}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(T, B) {
      const J = (0, s.getSubschema)(this.it, T);
      (0, s.extendSubschemaData)(J, this.it, T), (0, s.extendSubschemaMode)(J, T);
      const H = { ...this.it, ...J, items: void 0, props: void 0 };
      return C(H, B), H;
    }
    mergeEvaluated(T, B) {
      const { it: J, gen: H } = this;
      J.opts.unevaluated && (J.props !== !0 && T.props !== void 0 && (J.props = p.mergeEvaluated.props(H, T.props, J.props, B)), J.items !== !0 && T.items !== void 0 && (J.items = p.mergeEvaluated.items(H, T.items, J.items, B)));
    }
    mergeValidEvaluated(T, B) {
      const { it: J, gen: H } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return H.if(B, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  qe.KeywordCxt = I;
  function V(P, T, B, J) {
    const H = new I(P, B, T);
    "code" in B ? B.code(H, J) : H.$data && B.validate ? (0, o.funcKeywordCode)(H, B) : "macro" in B ? (0, o.macroKeywordCode)(H, B) : (B.compile || B.validate) && (0, o.funcKeywordCode)(H, B);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, re = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(P, { dataLevel: T, dataNames: B, dataPathArr: J }) {
    let H, Q;
    if (P === "")
      return l.default.rootData;
    if (P[0] === "/") {
      if (!K.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      H = P, Q = l.default.rootData;
    } else {
      const me = re.exec(P);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const pe = +me[1];
      if (H = me[2], H === "#") {
        if (pe >= T)
          throw new Error(le("property/index", pe));
        return J[T - pe];
      }
      if (pe > T)
        throw new Error(le("data", pe));
      if (Q = B[T - pe], !H)
        return Q;
    }
    let ne = Q;
    const ue = H.split("/");
    for (const me of ue)
      me && (Q = (0, a._)`${Q}${(0, a.getProperty)((0, p.unescapeJsonPointer)(me))}`, ne = (0, a._)`${ne} && ${Q}`);
    return ne;
    function le(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${T}`;
    }
  }
  return qe.getData = ee, qe;
}
var qt = {}, To;
function Gr() {
  if (To) return qt;
  To = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return qt.default = e, qt;
}
var Vt = {}, Fo;
function Zn() {
  if (Fo) return Vt;
  Fo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Vt.default = t, Vt;
}
var we = {}, zo;
function Qn() {
  if (zo) return we;
  zo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Gr(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Yn(), i = /* @__PURE__ */ ae(), o = /* @__PURE__ */ Xn();
  class s {
    constructor(v) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof v.schema == "object" && (C = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (d = v.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(C?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(u) {
    const v = p.call(this, u);
    if (v)
      return v;
    const d = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: y } = this.opts.code, { ownProperties: c } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: y, ownProperties: c });
    let m;
    u.$async && (m = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = h.scopeName("validate");
    u.validateName = k;
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: k,
      ValidationError: m,
      schema: u.schema,
      schemaEnv: u,
      rootId: d,
      baseId: u.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let F;
    try {
      this._compilations.add(u), (0, o.validateFunctionCode)(x), h.optimize(this.opts.code.optimize);
      const M = h.toString();
      F = `${h.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (F = this.opts.code.process(F, u));
      const L = new Function(`${n.default.self}`, `${n.default.scope}`, F)(this, this.scope.get());
      if (this.scope.value(k, { ref: L }), L.errors = null, L.schema = u.schema, L.schemaEnv = u, u.$async && (L.$async = !0), this.opts.code.source === !0 && (L.source = { validateName: k, validateCode: M, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: z, items: G } = x;
        L.evaluated = {
          props: z instanceof e.Name ? void 0 : z,
          items: G instanceof e.Name ? void 0 : G,
          dynamicProps: z instanceof e.Name,
          dynamicItems: G instanceof e.Name
        }, L.source && (L.source.evaluated = (0, e.stringify)(L.evaluated));
      }
      return u.validate = L, u;
    } catch (M) {
      throw delete u.validate, delete u.validateName, F && this.logger.error("Error compiling schema, function code:", F), M;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function l(u, v, d) {
    var C;
    d = (0, r.resolveUrl)(this.opts.uriResolver, v, d);
    const y = u.refs[d];
    if (y)
      return y;
    let c = b.call(this, u, d);
    if (c === void 0) {
      const h = (C = u.localRefs) === null || C === void 0 ? void 0 : C[d], { schemaId: m } = this.opts;
      h && (c = new s({ schema: h, schemaId: m, root: u, baseId: v }));
    }
    if (c !== void 0)
      return u.refs[d] = f.call(this, c);
  }
  we.resolveRef = l;
  function f(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function p(u) {
    for (const v of this._compilations)
      if (_(v, u))
        return v;
  }
  we.getCompilingSchema = p;
  function _(u, v) {
    return u.schema === v.schema && u.root === v.root && u.baseId === v.baseId;
  }
  function b(u, v) {
    let d;
    for (; typeof (d = this.refs[v]) == "string"; )
      v = d;
    return d || this.schemas[v] || w.call(this, u, v);
  }
  function w(u, v) {
    const d = this.opts.uriResolver.parse(v), C = (0, r._getFullPath)(this.opts.uriResolver, d);
    let y = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === y)
      return $.call(this, d, u);
    const c = (0, r.normalizeId)(C), h = this.refs[c] || this.schemas[c];
    if (typeof h == "string") {
      const m = w.call(this, u, h);
      return typeof m?.schema != "object" ? void 0 : $.call(this, d, m);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), c === (0, r.normalizeId)(v)) {
        const { schema: m } = h, { schemaId: k } = this.opts, x = m[k];
        return x && (y = (0, r.resolveUrl)(this.opts.uriResolver, y, x)), new s({ schema: m, schemaId: k, root: u, baseId: y });
      }
      return $.call(this, d, h);
    }
  }
  we.resolveSchema = w;
  const g = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function $(u, { baseId: v, schema: d, root: C }) {
    var y;
    if (((y = u.fragment) === null || y === void 0 ? void 0 : y[0]) !== "/")
      return;
    for (const m of u.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const k = d[(0, i.unescapeFragment)(m)];
      if (k === void 0)
        return;
      d = k;
      const x = typeof d == "object" && d[this.opts.schemaId];
      !g.has(m) && x && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, x));
    }
    let c;
    if (typeof d != "boolean" && d.$ref && !(0, i.schemaHasRulesButRef)(d, this.RULES)) {
      const m = (0, r.resolveUrl)(this.opts.uriResolver, v, d.$ref);
      c = w.call(this, C, m);
    }
    const { schemaId: h } = this.opts;
    if (c = c || new s({ schema: d, schemaId: h, root: C, baseId: v }), c.schema !== c.root.schema)
      return c;
  }
  return we;
}
const ec = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", tc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", nc = "object", rc = ["$data"], oc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ic = !1, sc = {
  $id: ec,
  description: tc,
  type: nc,
  required: rc,
  properties: oc,
  additionalProperties: ic
};
var Bt = {}, Pt = { exports: {} }, pr, jo;
function Ts() {
  if (jo) return pr;
  jo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(c) {
    let h = "", m = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (m = c[k].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        h += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (m = c[k].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      h += c[k];
    }
    return h;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, h, m) {
    if (c.length) {
      const k = o(c);
      if (k !== "")
        h.push(k);
      else
        return m.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function f(c) {
    let h = 0;
    const m = { error: !1, address: "", zone: "" }, k = [], x = [];
    let F = !1, M = !1, j = l;
    for (let L = 0; L < c.length; L++) {
      const z = c[L];
      if (!(z === "[" || z === "]"))
        if (z === ":") {
          if (F === !0 && (M = !0), !j(x, k, m))
            break;
          if (++h > 7) {
            m.error = !0;
            break;
          }
          L > 0 && c[L - 1] === ":" && (F = !0), k.push(":");
          continue;
        } else if (z === "%") {
          if (!j(x, k, m))
            break;
          j = a;
        } else {
          x.push(z);
          continue;
        }
    }
    return x.length && (j === a ? m.zone = x.join("") : M ? k.push(x.join("")) : k.push(o(x))), m.address = k.join(""), m;
  }
  function p(c) {
    if (_(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const h = f(c);
    if (h.error)
      return { host: c, isIPV6: !1 };
    {
      let m = h.address, k = h.address;
      return h.zone && (m += "%" + h.zone, k += "%25" + h.zone), { host: m, isIPV6: !0, escapedHost: k };
    }
  }
  function _(c, h) {
    let m = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === h && m++;
    return m;
  }
  function b(c) {
    let h = c;
    const m = [];
    let k = -1, x = 0;
    for (; x = h.length; ) {
      if (x === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          m.push("/");
          break;
        } else {
          m.push(h);
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
          m.push("/");
          break;
        }
      } else if (x === 3 && h === "/..") {
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
      if ((k = h.indexOf("/", 1)) === -1) {
        m.push(h);
        break;
      } else
        m.push(h.slice(0, k)), h = h.slice(k);
    }
    return m.join("");
  }
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, g = /[@/?#:]/g, $ = /[@/?#]/g;
  function u(c, h) {
    const m = h ? $ : g;
    return m.lastIndex = 0, c.replace(m, (k) => w[k]);
  }
  function v(c, h = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let m = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const x = c.slice(k + 1, k + 3);
        if (n(x)) {
          const F = x.toUpperCase(), M = String.fromCharCode(parseInt(F, 16));
          h && r(M) ? m += M : m += "%" + F, k += 2;
          continue;
        }
      }
      m += c[k];
    }
    return m;
  }
  function d(c) {
    let h = "";
    for (let m = 0; m < c.length; m++) {
      if (c[m] === "%" && m + 2 < c.length) {
        const k = c.slice(m + 1, m + 3);
        if (n(k)) {
          const x = k.toUpperCase(), F = String.fromCharCode(parseInt(x, 16));
          F !== "." && r(F) ? h += F : h += "%" + x, m += 2;
          continue;
        }
      }
      i(c[m]) ? h += c[m] : h += escape(c[m]);
    }
    return h;
  }
  function C(c) {
    let h = "";
    for (let m = 0; m < c.length; m++) {
      if (c[m] === "%" && m + 2 < c.length) {
        const k = c.slice(m + 1, m + 3);
        if (n(k)) {
          h += "%" + k.toUpperCase(), m += 2;
          continue;
        }
      }
      h += escape(c[m]);
    }
    return h;
  }
  function y(c) {
    const h = [];
    if (c.userinfo !== void 0 && (h.push(c.userinfo), h.push("@")), c.host !== void 0) {
      let m = unescape(c.host);
      if (!t(m)) {
        const k = p(m);
        k.isIPV6 === !0 ? m = `[${k.escapedHost}]` : m = u(m, !1);
      }
      h.push(m);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (h.push(":"), h.push(String(c.port))), h.length ? h.join("") : void 0;
  }
  return pr = {
    nonSimpleDomain: s,
    recomposeAuthority: y,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: v,
    normalizePathEncoding: d,
    escapePreservingEscapes: C,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: o
  }, pr;
}
var hr, Io;
function ac() {
  if (Io) return hr;
  Io = 1;
  const { isUUID: e } = Ts(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function r(c) {
    return n.indexOf(
      /** @type {*} */
      c
    ) !== -1;
  }
  function i(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function o(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function s(c) {
    const h = String(c.scheme).toLowerCase() === "https";
    return (c.port === (h ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = i(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (i(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [h, m] = c.resourceName.split("?");
      c.path = h && h !== "/" ? h : void 0, c.query = m, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function f(c, h) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const m = c.path.match(t);
    if (m) {
      const k = h.scheme || c.scheme || "urn";
      c.nid = m[1].toLowerCase(), c.nss = m[2];
      const x = `${k}:${h.nid || c.nid}`, F = y(x);
      c.path = void 0, F && (c = F.parse(c, h));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function p(c, h) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = h.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), x = `${m}:${h.nid || k}`, F = y(x);
    F && (c = F.serialize(c, h));
    const M = c, j = c.nss;
    return M.path = `${k || h.nid}:${j}`, h.skipEscape = !0, M;
  }
  function _(c, h) {
    const m = c;
    return m.uuid = m.nss, m.nss = void 0, !h.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function b(c) {
    const h = c;
    return h.nss = (c.uuid || "").toLowerCase(), h;
  }
  const w = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: s
    }
  ), g = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: w.domainHost,
      parse: o,
      serialize: s
    }
  ), $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: l
    }
  ), u = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: $.domainHost,
      parse: $.parse,
      serialize: $.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: w,
      https: g,
      ws: $,
      wss: u,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: f,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: _,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function y(c) {
    return c && (C[
      /** @type {SchemeName} */
      c
    ] || C[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return hr = {
    wsIsSecure: i,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: y
  }, hr;
}
var Do;
function cc() {
  if (Do) return Pt.exports;
  Do = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: l } = Ts(), { SCHEMES: f, getSchemeHandler: p } = ac();
  function _(x, F) {
    return typeof x == "string" ? x = /** @type {T} */
    c(x, F) : typeof x == "object" && (x = /** @type {T} */
    y($(x, F), F)), x;
  }
  function b(x, F, M) {
    const j = M ? Object.assign({ scheme: "null" }, M) : { scheme: "null" }, L = w(y(x, j), y(F, j), j, !0);
    return j.skipEscape = !0, $(L, j);
  }
  function w(x, F, M, j) {
    const L = {};
    return j || (x = y($(x, M), M), F = y($(F, M), M)), M = M || {}, !M.tolerant && F.scheme ? (L.scheme = F.scheme, L.userinfo = F.userinfo, L.host = F.host, L.port = F.port, L.path = t(F.path || ""), L.query = F.query) : (F.userinfo !== void 0 || F.host !== void 0 || F.port !== void 0 ? (L.userinfo = F.userinfo, L.host = F.host, L.port = F.port, L.path = t(F.path || ""), L.query = F.query) : (F.path ? (F.path[0] === "/" ? L.path = t(F.path) : ((x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0) && !x.path ? L.path = "/" + F.path : x.path ? L.path = x.path.slice(0, x.path.lastIndexOf("/") + 1) + F.path : L.path = F.path, L.path = t(L.path)), L.query = F.query) : (L.path = x.path, F.query !== void 0 ? L.query = F.query : L.query = x.query), L.userinfo = x.userinfo, L.host = x.host, L.port = x.port), L.scheme = x.scheme), L.fragment = F.fragment, L;
  }
  function g(x, F, M) {
    const j = m(x, M), L = m(F, M);
    return j !== void 0 && L !== void 0 && j.toLowerCase() === L.toLowerCase();
  }
  function $(x, F) {
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
    }, j = Object.assign({}, F), L = [], z = p(j.scheme || M.scheme);
    z && z.serialize && z.serialize(M, j), M.path !== void 0 && (j.skipEscape ? M.path = r(M.path) : (M.path = o(M.path), M.scheme !== void 0 && (M.path = M.path.split("%3A").join(":")))), j.reference !== "suffix" && M.scheme && L.push(M.scheme, ":");
    const G = n(M);
    if (G !== void 0 && (j.reference !== "suffix" && L.push("//"), L.push(G), M.path && M.path[0] !== "/" && L.push("/")), M.path !== void 0) {
      let Y = M.path;
      !j.absolutePath && (!z || !z.absolutePath) && (Y = t(Y)), G === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), L.push(Y);
    }
    return M.query !== void 0 && L.push("?", M.query), M.fragment !== void 0 && L.push("#", M.fragment), L.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(x, F) {
    if (F[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function C(x, F) {
    const M = Object.assign({}, F), j = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let L = !1, z = !1;
    M.reference === "suffix" && (M.scheme ? x = M.scheme + ":" + x : x = "//" + x);
    const G = x.match(v);
    G !== null && G[1].indexOf("\\") !== -1 && (j.error = "URI authority must not contain a literal backslash.", L = !0);
    const Y = x.match(u);
    if (Y) {
      j.scheme = Y[1], j.userinfo = Y[3], j.host = Y[4], j.port = parseInt(Y[5], 10), j.path = Y[6] || "", j.query = Y[7], j.fragment = Y[8], isNaN(j.port) && (j.port = Y[5]);
      const oe = d(j, Y);
      if (oe !== void 0 && (j.error = j.error || oe, L = !0), j.host)
        if (a(j.host) === !1) {
          const q = e(j.host);
          j.host = q.host.toLowerCase(), z = q.isIPV6;
        } else
          z = !0;
      j.scheme === void 0 && j.userinfo === void 0 && j.host === void 0 && j.port === void 0 && j.query === void 0 && !j.path ? j.reference = "same-document" : j.scheme === void 0 ? j.reference = "relative" : j.fragment === void 0 ? j.reference = "absolute" : j.reference = "uri", M.reference && M.reference !== "suffix" && M.reference !== j.reference && (j.error = j.error || "URI is not a " + M.reference + " reference.");
      const X = p(M.scheme || j.scheme);
      if (!M.unicodeSupport && (!X || !X.unicodeSupport) && j.host && (M.domainHost || X && X.domainHost) && z === !1 && l(j.host))
        try {
          j.host = new URL("http://" + j.host).hostname;
        } catch (W) {
          j.error = j.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!X || X && !X.skipNormalize) && (x.indexOf("%") !== -1 && (j.scheme !== void 0 && (j.scheme = unescape(j.scheme)), j.host !== void 0 && (j.host = s(unescape(j.host), z))), j.path && (j.path = i(j.path)), j.fragment))
        try {
          j.fragment = encodeURI(decodeURIComponent(j.fragment));
        } catch {
          j.error = j.error || "URI malformed";
        }
      X && X.parse && X.parse(j, M);
    } else
      j.error = j.error || "URI can not be parsed.";
    return { parsed: j, malformedAuthorityOrPort: L };
  }
  function y(x, F) {
    return C(x, F).parsed;
  }
  function c(x, F) {
    return h(x, F).normalized;
  }
  function h(x, F) {
    const { parsed: M, malformedAuthorityOrPort: j } = C(x, F);
    return {
      normalized: j ? x : $(M, F),
      malformedAuthorityOrPort: j
    };
  }
  function m(x, F) {
    if (typeof x == "string") {
      const { normalized: M, malformedAuthorityOrPort: j } = h(x, F);
      return j ? void 0 : M;
    }
    if (typeof x == "object")
      return $(x, F);
  }
  const k = {
    SCHEMES: f,
    normalize: _,
    resolve: b,
    resolveComponent: w,
    equal: g,
    serialize: $,
    parse: y
  };
  return Pt.exports = k, Pt.exports.default = k, Pt.exports.fastUri = k, Pt.exports;
}
var Lo;
function lc() {
  if (Lo) return Bt;
  Lo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = cc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Bt.default = e, Bt;
}
var qo;
function dc() {
  return qo || (qo = 1, (function(e) {
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
    const r = /* @__PURE__ */ Gr(), i = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ Ms(), s = /* @__PURE__ */ Qn(), a = /* @__PURE__ */ ie(), l = /* @__PURE__ */ Yn(), f = /* @__PURE__ */ Bn(), p = /* @__PURE__ */ ae(), _ = sc, b = /* @__PURE__ */ lc(), w = (q, R) => new RegExp(q, R);
    w.code = "new RegExp";
    const g = ["removeAdditional", "useDefaults", "coerceTypes"], $ = /* @__PURE__ */ new Set([
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
    }, d = 200;
    function C(q) {
      var R, D, O, S, E, I, V, K, re, ee, P, T, B, J, H, Q, ne, ue, le, me, pe, De, ve, Pe, Le;
      const nt = q.strict, ir = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, lo = ir === !0 || ir === void 0 ? 1 : ir || 0, uo = (O = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && O !== void 0 ? O : w, la = (S = q.uriResolver) !== null && S !== void 0 ? S : b.default;
      return {
        strictSchema: (I = (E = q.strictSchema) !== null && E !== void 0 ? E : nt) !== null && I !== void 0 ? I : !0,
        strictNumbers: (K = (V = q.strictNumbers) !== null && V !== void 0 ? V : nt) !== null && K !== void 0 ? K : !0,
        strictTypes: (ee = (re = q.strictTypes) !== null && re !== void 0 ? re : nt) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (T = (P = q.strictTuples) !== null && P !== void 0 ? P : nt) !== null && T !== void 0 ? T : "log",
        strictRequired: (J = (B = q.strictRequired) !== null && B !== void 0 ? B : nt) !== null && J !== void 0 ? J : !1,
        code: q.code ? { ...q.code, optimize: lo, regExp: uo } : { optimize: lo, regExp: uo },
        loopRequired: (H = q.loopRequired) !== null && H !== void 0 ? H : d,
        loopEnum: (Q = q.loopEnum) !== null && Q !== void 0 ? Q : d,
        meta: (ne = q.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ue = q.messages) !== null && ue !== void 0 ? ue : !0,
        inlineRefs: (le = q.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (me = q.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = q.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (De = q.validateSchema) !== null && De !== void 0 ? De : !0,
        validateFormats: (ve = q.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Pe = q.unicodeRegExp) !== null && Pe !== void 0 ? Pe : !0,
        int32range: (Le = q.int32range) !== null && Le !== void 0 ? Le : !0,
        uriResolver: la
      };
    }
    class y {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...C(R) };
        const { es5: D, lines: O } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: $, es5: D, lines: O }), this.logger = j(R.logger);
        const S = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, u, R, "NOT SUPPORTED"), c.call(this, v, R, "DEPRECATED", "warn"), this._metaOpts = F.call(this), R.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && x.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), m.call(this), R.validateFormats = S;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: D, schemaId: O } = this.opts;
        let S = _;
        O === "id" && (S = { ..._ }, S.id = S.$id, delete S.$id), D && R && this.addMetaSchema(S, S[O], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[D] || R : void 0;
      }
      validate(R, D) {
        let O;
        if (typeof R == "string") {
          if (O = this.getSchema(R), !O)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          O = this.compile(R);
        const S = O(D);
        return "$async" in O || (this.errors = O.errors), S;
      }
      compile(R, D) {
        const O = this._addSchema(R, D);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(R, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return S.call(this, R, D);
        async function S(ee, P) {
          await E.call(this, ee.$schema);
          const T = this._addSchema(ee, P);
          return T.validate || I.call(this, T);
        }
        async function E(ee) {
          ee && !this.getSchema(ee) && await S.call(this, { $ref: ee }, !0);
        }
        async function I(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (P) {
            if (!(P instanceof i.default))
              throw P;
            return V.call(this, P), await K.call(this, P.missingSchema), I.call(this, ee);
          }
        }
        function V({ missingSchema: ee, missingRef: P }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${P} cannot be resolved`);
        }
        async function K(ee) {
          const P = await re.call(this, ee);
          this.refs[ee] || await E.call(this, P.$schema), this.refs[ee] || this.addSchema(P, ee, D);
        }
        async function re(ee) {
          const P = this._loading[ee];
          if (P)
            return P;
          try {
            return await (this._loading[ee] = O(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, D, O, S = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const I of R)
            this.addSchema(I, void 0, O, S);
          return this;
        }
        let E;
        if (typeof R == "object") {
          const { schemaId: I } = this.opts;
          if (E = R[I], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, l.normalizeId)(D || E), this._checkUnique(D), this.schemas[D] = this._addSchema(R, O, D, S, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, D, O = this.opts.validateSchema) {
        return this.addSchema(R, D, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, D) {
        if (typeof R == "boolean")
          return !0;
        let O;
        if (O = R.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const S = this.validate(O, R);
        if (!S && D) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return S;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let D;
        for (; typeof (D = h.call(this, R)) == "string"; )
          R = D;
        if (D === void 0) {
          const { schemaId: O } = this.opts, S = new s.SchemaEnv({ schema: {}, schemaId: O });
          if (D = s.resolveSchema.call(this, S, R), !D)
            return;
          this.refs[R] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
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
            const D = h.call(this, R);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const D = R;
            this._cache.delete(D);
            let O = R[this.opts.schemaId];
            return O && (O = (0, l.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const D of R)
          this.addKeyword(D);
        return this;
      }
      addKeyword(R, D) {
        let O;
        if (typeof R == "string")
          O = R, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = O);
        else if (typeof R == "object" && D === void 0) {
          if (D = R, O = D.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (z.call(this, O, D), !D)
          return (0, p.eachItem)(O, (E) => G.call(this, E)), this;
        oe.call(this, D);
        const S = {
          ...D,
          type: (0, f.getJSONTypes)(D.type),
          schemaType: (0, f.getJSONTypes)(D.schemaType)
        };
        return (0, p.eachItem)(O, S.type.length === 0 ? (E) => G.call(this, E, S) : (E) => S.type.forEach((I) => G.call(this, E, S, I))), this;
      }
      getKeyword(R) {
        const D = this.RULES.all[R];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: D } = this;
        delete D.keywords[R], delete D.all[R];
        for (const O of D.rules) {
          const S = O.rules.findIndex((E) => E.keyword === R);
          S >= 0 && O.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[R] = D, this;
      }
      errorsText(R = this.errors, { separator: D = ", ", dataVar: O = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((S) => `${O}${S.instancePath} ${S.message}`).reduce((S, E) => S + D + E);
      }
      $dataMetaSchema(R, D) {
        const O = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const S of D) {
          const E = S.split("/").slice(1);
          let I = R;
          for (const V of E)
            I = I[V];
          for (const V in O) {
            const K = O[V];
            if (typeof K != "object")
              continue;
            const { $data: re } = K.definition, ee = I[V];
            re && ee && (I[V] = W(ee));
          }
        }
        return R;
      }
      _removeAllSchemas(R, D) {
        for (const O in R) {
          const S = R[O];
          (!D || D.test(O)) && (typeof S == "string" ? delete R[O] : S && !S.meta && (this._cache.delete(S.schema), delete R[O]));
        }
      }
      _addSchema(R, D, O, S = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let I;
        const { schemaId: V } = this.opts;
        if (typeof R == "object")
          I = R[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(R);
        if (K !== void 0)
          return K;
        O = (0, l.normalizeId)(I || O);
        const re = l.getSchemaRefs.call(this, R, O);
        return K = new s.SchemaEnv({ schema: R, schemaId: V, meta: D, baseId: O, localRefs: re }), this._cache.set(K.schema, K), E && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = K), S && this.validateSchema(R, !0), K;
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
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, R);
        } finally {
          this.opts = D;
        }
      }
    }
    y.ValidationError = r.default, y.MissingRefError = i.default, e.default = y;
    function c(q, R, D, O = "error") {
      for (const S in q) {
        const E = S;
        E in R && this.logger[O](`${D}: option ${S}. ${q[E]}`);
      }
    }
    function h(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function m() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const R in q)
            this.addSchema(q[R], R);
    }
    function k() {
      for (const q in this.opts.formats) {
        const R = this.opts.formats[q];
        R && this.addFormat(q, R);
      }
    }
    function x(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in q) {
        const D = q[R];
        D.keyword || (D.keyword = R), this.addKeyword(D);
      }
    }
    function F() {
      const q = { ...this.opts };
      for (const R of g)
        delete q[R];
      return q;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function j(q) {
      if (q === !1)
        return M;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const L = /^[a-z_$][a-z0-9_$:-]*$/i;
    function z(q, R) {
      const { RULES: D } = this;
      if ((0, p.eachItem)(q, (O) => {
        if (D.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!L.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function G(q, R, D) {
      var O;
      const S = R?.post;
      if (D && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let I = S ? E.post : E.rules.find(({ type: K }) => K === D);
      if (I || (I = { type: D, rules: [] }, E.rules.push(I)), E.keywords[q] = !0, !R)
        return;
      const V = {
        keyword: q,
        definition: {
          ...R,
          type: (0, f.getJSONTypes)(R.type),
          schemaType: (0, f.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? Y.call(this, I, V, R.before) : I.rules.push(V), E.all[q] = V, (O = R.implements) === null || O === void 0 || O.forEach((K) => this.addKeyword(K));
    }
    function Y(q, R, D) {
      const O = q.rules.findIndex((S) => S.keyword === D);
      O >= 0 ? q.rules.splice(O, 0, R) : (q.rules.push(R), this.logger.warn(`rule ${D} is not defined`));
    }
    function oe(q) {
      let { metaSchema: R } = q;
      R !== void 0 && (q.$data && this.opts.$data && (R = W(R)), q.validateSchema = this.compile(R, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function W(q) {
      return { anyOf: [q, X] };
    }
  })(sr)), sr;
}
var Ut = {}, Ht = {}, Kt = {}, Vo;
function uc() {
  if (Vo) return Kt;
  Vo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Kt.default = e, Kt;
}
var Ye = {}, Bo;
function Wr() {
  if (Bo) return Ye;
  Bo = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.callRef = Ye.getValidate = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), i = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ ae(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: p, schema: _, it: b } = f, { baseId: w, schemaEnv: g, validateName: $, opts: u, self: v } = b, { root: d } = g;
      if ((_ === "#" || _ === "#/") && w === d.baseId)
        return y();
      const C = i.resolveRef.call(v, d, w, _);
      if (C === void 0)
        throw new e.default(b.opts.uriResolver, w, _);
      if (C instanceof i.SchemaEnv)
        return c(C);
      return h(C);
      function y() {
        if (g === d)
          return l(f, $, g, g.$async);
        const m = p.scopeValue("root", { ref: d });
        return l(f, (0, n._)`${m}.validate`, d, d.$async);
      }
      function c(m) {
        const k = a(f, m);
        l(f, k, m, m.$async);
      }
      function h(m) {
        const k = p.scopeValue("schema", u.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), x = p.name("valid"), F = f.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: _
        }, x);
        f.mergeEvaluated(F), f.ok(x);
      }
    }
  };
  function a(f, p) {
    const { gen: _ } = f;
    return p.validate ? _.scopeValue("validate", { ref: p.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Ye.getValidate = a;
  function l(f, p, _, b) {
    const { gen: w, it: g } = f, { allErrors: $, schemaEnv: u, opts: v } = g, d = v.passContext ? r.default.this : n.nil;
    b ? C() : y();
    function C() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const m = w.let("valid");
      w.try(() => {
        w.code((0, n._)`await ${(0, t.callValidateCode)(f, p, d)}`), h(p), $ || w.assign(m, !0);
      }, (k) => {
        w.if((0, n._)`!(${k} instanceof ${g.ValidationError})`, () => w.throw(k)), c(k), $ || w.assign(m, !1);
      }), f.ok(m);
    }
    function y() {
      f.result((0, t.callValidateCode)(f, p, d), () => h(p), () => c(p));
    }
    function c(m) {
      const k = (0, n._)`${m}.errors`;
      w.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), w.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(m) {
      var k;
      if (!g.opts.unevaluated)
        return;
      const x = (k = _?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (g.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (g.props = o.mergeEvaluated.props(w, x.props, g.props));
        else {
          const F = w.var("props", (0, n._)`${m}.evaluated.props`);
          g.props = o.mergeEvaluated.props(w, F, g.props, n.Name);
        }
      if (g.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (g.items = o.mergeEvaluated.items(w, x.items, g.items));
        else {
          const F = w.var("items", (0, n._)`${m}.evaluated.items`);
          g.items = o.mergeEvaluated.items(w, F, g.items, n.Name);
        }
    }
  }
  return Ye.callRef = l, Ye.default = s, Ye;
}
var Uo;
function fc() {
  if (Uo) return Ht;
  Uo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ uc(), t = /* @__PURE__ */ Wr(), n = [
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
var Gt = {}, Wt = {}, Ho;
function pc() {
  if (Ho) return Wt;
  Ho = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
      const { keyword: s, data: a, schemaCode: l } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${l} || isNaN(${a})`);
    }
  };
  return Wt.default = i, Wt;
}
var Jt = {}, Ko;
function hc() {
  if (Ko) return Jt;
  Ko = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
      const { gen: i, data: o, schemaCode: s, it: a } = r, l = a.opts.multipleOfPrecision, f = i.let("res"), p = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${s} === 0 || (${f} = ${o}/${s}, ${p}))`);
    }
  };
  return Jt.default = n, Jt;
}
var Yt = {}, Xt = {}, Go;
function mc() {
  if (Go) return Xt;
  Go = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Xt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Xt;
}
var Wo;
function gc() {
  if (Wo) return Yt;
  Wo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ mc(), i = {
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
      const { keyword: s, data: a, schemaCode: l, it: f } = o, p = s === "maxLength" ? e.operators.GT : e.operators.LT, _ = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${_} ${p} ${l}`);
    }
  };
  return Yt.default = i, Yt;
}
var Zt = {}, Jo;
function yc() {
  if (Jo) return Zt;
  Jo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ ie(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: f, schemaCode: p, it: _ } = o, b = _.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: w } = _.opts.code, g = w.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, w), $ = s.let("valid");
        s.try(() => s.assign($, (0, n._)`${g}(${p}, ${b}).test(${a})`), () => s.assign($, !1)), o.fail$data((0, n._)`!${$}`);
      } else {
        const w = (0, e.usePattern)(o, f);
        o.fail$data((0, n._)`!${w}.test(${a})`);
      }
    }
  };
  return Zt.default = i, Zt;
}
var Qt = {}, Yo;
function $c() {
  if (Yo) return Qt;
  Yo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
  return Qt.default = n, Qt;
}
var en = {}, Xo;
function vc() {
  if (Xo) return en;
  Xo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: l, data: f, $data: p, it: _ } = o, { opts: b } = _;
      if (!p && a.length === 0)
        return;
      const w = a.length >= b.loopRequired;
      if (_.allErrors ? g() : $(), b.strictRequired) {
        const d = o.parentSchema.properties, { definedProperties: C } = o.it;
        for (const y of a)
          if (d?.[y] === void 0 && !C.has(y)) {
            const c = _.schemaEnv.baseId + _.errSchemaPath, h = `required property "${y}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(_, h, _.opts.strictRequired);
          }
      }
      function g() {
        if (w || p)
          o.block$data(t.nil, u);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(o, d);
      }
      function $() {
        const d = s.let("missing");
        if (w || p) {
          const C = s.let("valid", !0);
          o.block$data(C, () => v(d, C)), o.ok(C);
        } else
          s.if((0, e.checkMissingProp)(o, a, d)), (0, e.reportMissingProp)(o, d), s.else();
      }
      function u() {
        s.forOf("prop", l, (d) => {
          o.setParams({ missingProperty: d }), s.if((0, e.noPropertyInData)(s, f, d, b.ownProperties), () => o.error());
        });
      }
      function v(d, C) {
        o.setParams({ missingProperty: d }), s.forOf(d, l, () => {
          s.assign(C, (0, e.propertyInData)(s, f, d, b.ownProperties)), s.if((0, t.not)(C), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return en.default = i, en;
}
var tn = {}, Zo;
function bc() {
  if (Zo) return tn;
  Zo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
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
  return tn.default = n, tn;
}
var nn = {}, rn = {}, Qo;
function Jr() {
  if (Qo) return rn;
  Qo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = Os();
  return e.code = 'require("ajv/dist/runtime/equal").default', rn.default = e, rn;
}
var ei;
function wc() {
  if (ei) return nn;
  ei = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Jr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: l, $data: f, schema: p, parentSchema: _, schemaCode: b, it: w } = s;
      if (!f && !p)
        return;
      const g = a.let("valid"), $ = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      s.block$data(g, u, (0, t._)`${b} === false`), s.ok(g);
      function u() {
        const y = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        s.setParams({ i: y, j: c }), a.assign(g, !0), a.if((0, t._)`${y} > 1`, () => (v() ? d : C)(y, c));
      }
      function v() {
        return $.length > 0 && !$.some((y) => y === "object" || y === "array");
      }
      function d(y, c) {
        const h = a.name("item"), m = (0, e.checkDataTypes)($, h, w.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${y}--;`, () => {
          a.let(h, (0, t._)`${l}[${y}]`), a.if(m, (0, t._)`continue`), $.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${k}[${h}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${h}]`), s.error(), a.assign(g, !1).break();
          }).code((0, t._)`${k}[${h}] = ${y}`);
        });
      }
      function C(y, c) {
        const h = (0, n.useFunc)(a, r.default), m = a.name("outer");
        a.label(m).for((0, t._)`;${y}--;`, () => a.for((0, t._)`${c} = ${y}; ${c}--;`, () => a.if((0, t._)`${h}(${l}[${y}], ${l}[${c}])`, () => {
          s.error(), a.assign(g, !1).break(m);
        })));
      }
    }
  };
  return nn.default = o, nn;
}
var on = {}, ti;
function _c() {
  if (ti) return on;
  ti = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Jr(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schemaCode: f, schema: p } = o;
      l || p && typeof p == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${f})`) : o.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return on.default = i, on;
}
var sn = {}, ni;
function Sc() {
  if (ni) return sn;
  ni = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Jr(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: f, schemaCode: p, it: _ } = o;
      if (!l && f.length === 0)
        throw new Error("enum must have non-empty array");
      const b = f.length >= _.opts.loopEnum;
      let w;
      const g = () => w ?? (w = (0, t.useFunc)(s, n.default));
      let $;
      if (b || l)
        $ = s.let("valid"), o.block$data($, u);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const d = s.const("vSchema", p);
        $ = (0, e.or)(...f.map((C, y) => v(d, y)));
      }
      o.pass($);
      function u() {
        s.assign($, !1), s.forOf("v", p, (d) => s.if((0, e._)`${g()}(${a}, ${d})`, () => s.assign($, !0).break()));
      }
      function v(d, C) {
        const y = f[C];
        return typeof y == "object" && y !== null ? (0, e._)`${g()}(${a}, ${d}[${C}])` : (0, e._)`${a} === ${y}`;
      }
    }
  };
  return sn.default = i, sn;
}
var ri;
function Cc() {
  if (ri) return Gt;
  ri = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pc(), t = /* @__PURE__ */ hc(), n = /* @__PURE__ */ gc(), r = /* @__PURE__ */ yc(), i = /* @__PURE__ */ $c(), o = /* @__PURE__ */ vc(), s = /* @__PURE__ */ bc(), a = /* @__PURE__ */ wc(), l = /* @__PURE__ */ _c(), f = /* @__PURE__ */ Sc(), p = [
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
    l.default,
    f.default
  ];
  return Gt.default = p, Gt;
}
var an = {}, dt = {}, oi;
function Fs() {
  if (oi) return dt;
  oi = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: s, it: a } = o, { items: l } = s;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, l);
    }
  };
  function i(o, s) {
    const { gen: a, schema: l, data: f, keyword: p, it: _ } = o;
    _.items = !0;
    const b = a.const("len", (0, e._)`${f}.length`);
    if (l === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${b} <= ${s.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(_, l)) {
      const g = a.var("valid", (0, e._)`${b} <= ${s.length}`);
      a.if((0, e.not)(g), () => w(g)), o.ok(g);
    }
    function w(g) {
      a.forRange("i", s.length, b, ($) => {
        o.subschema({ keyword: p, dataProp: $, dataPropType: t.Type.Num }, g), _.allErrors || a.if((0, e.not)(g), () => a.break());
      });
    }
  }
  return dt.validateAdditionalItems = i, dt.default = r, dt;
}
var cn = {}, ut = {}, ii;
function zs() {
  if (ii) return ut;
  ii = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.validateTuple = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Te(), r = {
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
    const { gen: l, parentSchema: f, data: p, keyword: _, it: b } = o;
    $(f), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(l, a.length, b.items));
    const w = l.name("valid"), g = l.const("len", (0, e._)`${p}.length`);
    a.forEach((u, v) => {
      (0, t.alwaysValidSchema)(b, u) || (l.if((0, e._)`${g} > ${v}`, () => o.subschema({
        keyword: _,
        schemaProp: v,
        dataProp: v
      }, w)), o.ok(w));
    });
    function $(u) {
      const { opts: v, errSchemaPath: d } = b, C = a.length, y = C === u.minItems && (C === u.maxItems || u[s] === !1);
      if (v.strictTuples && !y) {
        const c = `"${_}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(b, c, v.strictTuples);
      }
    }
  }
  return ut.validateTuple = i, ut.default = r, ut;
}
var si;
function kc() {
  if (si) return cn;
  si = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zs(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return cn.default = t, cn;
}
var ln = {}, ai;
function Ec() {
  if (ai) return ln;
  ai = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ Fs(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: l, it: f } = s, { prefixItems: p } = l;
      f.items = !0, !(0, t.alwaysValidSchema)(f, a) && (p ? (0, r.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return ln.default = o, ln;
}
var dn = {}, ci;
function xc() {
  if (ci) return dn;
  ci = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
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
      const { gen: o, schema: s, parentSchema: a, data: l, it: f } = i;
      let p, _;
      const { minContains: b, maxContains: w } = a;
      f.opts.next ? (p = b === void 0 ? 1 : b, _ = w) : p = 1;
      const g = o.const("len", (0, e._)`${l}.length`);
      if (i.setParams({ min: p, max: _ }), _ === void 0 && p === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && p > _) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, s)) {
        let C = (0, e._)`${g} >= ${p}`;
        _ !== void 0 && (C = (0, e._)`${C} && ${g} <= ${_}`), i.pass(C);
        return;
      }
      f.items = !0;
      const $ = o.name("valid");
      _ === void 0 && p === 1 ? v($, () => o.if($, () => o.break())) : p === 0 ? (o.let($, !0), _ !== void 0 && o.if((0, e._)`${l}.length > 0`, u)) : (o.let($, !1), u()), i.result($, () => i.reset());
      function u() {
        const C = o.name("_valid"), y = o.let("count", 0);
        v(C, () => o.if(C, () => d(y)));
      }
      function v(C, y) {
        o.forRange("i", 0, g, (c) => {
          i.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), y();
        });
      }
      function d(C) {
        o.code((0, e._)`${C}++`), _ === void 0 ? o.if((0, e._)`${C} >= ${p}`, () => o.assign($, !0).break()) : (o.if((0, e._)`${C} > ${_}`, () => o.assign($, !1).break()), p === 1 ? o.assign($, !0) : o.if((0, e._)`${C} >= ${p}`, () => o.assign($, !0)));
      }
    }
  };
  return dn.default = r, dn;
}
var mr = {}, li;
function Yr() {
  return li || (li = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Te();
    e.error = {
      message: ({ params: { property: l, depsCount: f, deps: p } }) => {
        const _ = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${p} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: f, deps: p, missingProperty: _ } }) => (0, t._)`{property: ${l},
    missingProperty: ${_},
    depsCount: ${f},
    deps: ${p}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [f, p] = o(l);
        s(l, f), a(l, p);
      }
    };
    function o({ schema: l }) {
      const f = {}, p = {};
      for (const _ in l) {
        if (_ === "__proto__")
          continue;
        const b = Array.isArray(l[_]) ? f : p;
        b[_] = l[_];
      }
      return [f, p];
    }
    function s(l, f = l.schema) {
      const { gen: p, data: _, it: b } = l;
      if (Object.keys(f).length === 0)
        return;
      const w = p.let("missing");
      for (const g in f) {
        const $ = f[g];
        if ($.length === 0)
          continue;
        const u = (0, r.propertyInData)(p, _, g, b.opts.ownProperties);
        l.setParams({
          property: g,
          depsCount: $.length,
          deps: $.join(", ")
        }), b.allErrors ? p.if(u, () => {
          for (const v of $)
            (0, r.checkReportMissingProp)(l, v);
        }) : (p.if((0, t._)`${u} && (${(0, r.checkMissingProp)(l, $, w)})`), (0, r.reportMissingProp)(l, w), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(l, f = l.schema) {
      const { gen: p, data: _, keyword: b, it: w } = l, g = p.name("valid");
      for (const $ in f)
        (0, n.alwaysValidSchema)(w, f[$]) || (p.if(
          (0, r.propertyInData)(p, _, $, w.opts.ownProperties),
          () => {
            const u = l.subschema({ keyword: b, schemaProp: $ }, g);
            l.mergeValidEvaluated(u, g);
          },
          () => p.var(g, !0)
          // TODO var
        ), l.ok(g));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(mr)), mr;
}
var un = {}, di;
function Pc() {
  if (di) return un;
  di = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i;
      if ((0, t.alwaysValidSchema)(l, s))
        return;
      const f = o.name("valid");
      o.forIn("key", a, (p) => {
        i.setParams({ propertyName: p }), i.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, f), o.if((0, e.not)(f), () => {
          i.error(!0), l.allErrors || o.break();
        });
      }), i.ok(f);
    }
  };
  return un.default = r, un;
}
var fn = {}, ui;
function js() {
  if (ui) return fn;
  ui = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ae(), o = {
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
      const { gen: a, schema: l, parentSchema: f, data: p, errsCount: _, it: b } = s;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: w, opts: g } = b;
      if (b.props = !0, g.removeAdditional !== "all" && (0, r.alwaysValidSchema)(b, l))
        return;
      const $ = (0, e.allSchemaProperties)(f.properties), u = (0, e.allSchemaProperties)(f.patternProperties);
      v(), s.ok((0, t._)`${_} === ${n.default.errors}`);
      function v() {
        a.forIn("key", p, (h) => {
          !$.length && !u.length ? y(h) : a.if(d(h), () => y(h));
        });
      }
      function d(h) {
        let m;
        if ($.length > 8) {
          const k = (0, r.schemaRefOrVal)(b, f.properties, "properties");
          m = (0, e.isOwnProperty)(a, k, h);
        } else $.length ? m = (0, t.or)(...$.map((k) => (0, t._)`${h} === ${k}`)) : m = t.nil;
        return u.length && (m = (0, t.or)(m, ...u.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${h})`))), (0, t.not)(m);
      }
      function C(h) {
        a.code((0, t._)`delete ${p}[${h}]`);
      }
      function y(h) {
        if (g.removeAdditional === "all" || g.removeAdditional && l === !1) {
          C(h);
          return;
        }
        if (l === !1) {
          s.setParams({ additionalProperty: h }), s.error(), w || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)(b, l)) {
          const m = a.name("valid");
          g.removeAdditional === "failing" ? (c(h, m, !1), a.if((0, t.not)(m), () => {
            s.reset(), C(h);
          })) : (c(h, m), w || a.if((0, t.not)(m), () => a.break()));
        }
      }
      function c(h, m, k) {
        const x = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(x, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(x, m);
      }
    }
  };
  return fn.default = o, fn;
}
var pn = {}, fi;
function Ac() {
  if (fi) return pn;
  fi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ js(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: l, data: f, it: p } = o;
      p.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const u of _)
        p.definedProperties.add(u);
      p.opts.unevaluated && _.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(_), p.props));
      const b = _.filter((u) => !(0, n.alwaysValidSchema)(p, a[u]));
      if (b.length === 0)
        return;
      const w = s.name("valid");
      for (const u of b)
        g(u) ? $(u) : (s.if((0, t.propertyInData)(s, f, u, p.opts.ownProperties)), $(u), p.allErrors || s.else().var(w, !0), s.endIf()), o.it.definedProperties.add(u), o.ok(w);
      function g(u) {
        return p.opts.useDefaults && !p.compositeRule && a[u].default !== void 0;
      }
      function $(u) {
        o.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, w);
      }
    }
  };
  return pn.default = i, pn;
}
var hn = {}, pi;
function Rc() {
  if (pi) return hn;
  pi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: l, parentSchema: f, it: p } = o, { opts: _ } = p, b = (0, e.allSchemaProperties)(a), w = b.filter((y) => (0, n.alwaysValidSchema)(p, a[y]));
      if (b.length === 0 || w.length === b.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const g = _.strictSchema && !_.allowMatchingProperties && f.properties, $ = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: u } = p;
      v();
      function v() {
        for (const y of b)
          g && d(y), p.allErrors ? C(y) : (s.var($, !0), C(y), s.if($));
      }
      function d(y) {
        for (const c in g)
          new RegExp(y).test(c) && (0, n.checkStrictMode)(p, `property ${c} matches pattern ${y} (use allowMatchingProperties)`);
      }
      function C(y) {
        s.forIn("key", l, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(o, y)}.test(${c})`, () => {
            const h = w.includes(y);
            h || o.subschema({
              keyword: "patternProperties",
              schemaProp: y,
              dataProp: c,
              dataPropType: r.Type.Str
            }, $), p.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${c}]`, !0) : !h && !p.allErrors && s.if((0, t.not)($), () => s.break());
          });
        });
      }
    }
  };
  return hn.default = i, hn;
}
var mn = {}, hi;
function Mc() {
  if (hi) return mn;
  hi = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
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
  return mn.default = t, mn;
}
var gn = {}, mi;
function Nc() {
  if (mi) return gn;
  mi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Te()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return gn.default = t, gn;
}
var yn = {}, gi;
function Oc() {
  if (gi) return yn;
  gi = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: l } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && a.discriminator)
        return;
      const f = s, p = o.let("valid", !1), _ = o.let("passing", null), b = o.name("_valid");
      i.setParams({ passing: _ }), o.block(w), i.result(p, () => i.reset(), () => i.error(!0));
      function w() {
        f.forEach((g, $) => {
          let u;
          (0, t.alwaysValidSchema)(l, g) ? o.var(b, !0) : u = i.subschema({
            keyword: "oneOf",
            schemaProp: $,
            compositeRule: !0
          }, b), $ > 0 && o.if((0, e._)`${b} && ${p}`).assign(p, !1).assign(_, (0, e._)`[${_}, ${$}]`).else(), o.if(b, () => {
            o.assign(p, !0), o.assign(_, $), u && i.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return yn.default = r, yn;
}
var $n = {}, yi;
function Tc() {
  if (yi) return $n;
  yi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, l) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const f = n.subschema({ keyword: "allOf", schemaProp: l }, s);
        n.ok(s), n.mergeEvaluated(f);
      });
    }
  };
  return $n.default = t, $n;
}
var vn = {}, $i;
function Fc() {
  if ($i) return vn;
  $i = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: l } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const f = i(l, "then"), p = i(l, "else");
      if (!f && !p)
        return;
      const _ = s.let("valid", !0), b = s.name("_valid");
      if (w(), o.reset(), f && p) {
        const $ = s.let("ifClause");
        o.setParams({ ifClause: $ }), s.if(b, g("then", $), g("else", $));
      } else f ? s.if(b, g("then")) : s.if((0, e.not)(b), g("else"));
      o.pass(_, () => o.error(!0));
      function w() {
        const $ = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        o.mergeEvaluated($);
      }
      function g($, u) {
        return () => {
          const v = o.subschema({ keyword: $ }, b);
          s.assign(_, b), o.mergeValidEvaluated(v, _), u ? s.assign(u, (0, e._)`${$}`) : o.setParams({ ifClause: $ });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return vn.default = r, vn;
}
var bn = {}, vi;
function zc() {
  if (vi) return bn;
  vi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return bn.default = t, bn;
}
var bi;
function jc() {
  if (bi) return an;
  bi = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fs(), t = /* @__PURE__ */ kc(), n = /* @__PURE__ */ zs(), r = /* @__PURE__ */ Ec(), i = /* @__PURE__ */ xc(), o = /* @__PURE__ */ Yr(), s = /* @__PURE__ */ Pc(), a = /* @__PURE__ */ js(), l = /* @__PURE__ */ Ac(), f = /* @__PURE__ */ Rc(), p = /* @__PURE__ */ Mc(), _ = /* @__PURE__ */ Nc(), b = /* @__PURE__ */ Oc(), w = /* @__PURE__ */ Tc(), g = /* @__PURE__ */ Fc(), $ = /* @__PURE__ */ zc();
  function u(v = !1) {
    const d = [
      // any
      p.default,
      _.default,
      b.default,
      w.default,
      g.default,
      $.default,
      // object
      s.default,
      a.default,
      o.default,
      l.default,
      f.default
    ];
    return v ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(i.default), d;
  }
  return an.default = u, an;
}
var wn = {}, ft = {}, wi;
function Is() {
  if (wi) return ft;
  wi = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Wr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, l) {
    const { gen: f, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[l] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, b = p.errSchemaPath === "#" ? p.validateName : s(a);
    f.if((0, e._)`!${_}`, () => f.assign(_, b));
  }
  ft.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: l, schema: f, self: p } = a.it, { root: _, baseId: b, localRefs: w, meta: g } = l.root, { schemaId: $ } = p.opts, u = new n.SchemaEnv({ schema: f, schemaId: $, root: _, baseId: b, localRefs: w, meta: g });
    return n.compileSchema.call(p, u), (0, r.getValidate)(a, u);
  }
  return ft.default = i, ft;
}
var pt = {}, _i;
function Ds() {
  if (_i) return pt;
  _i = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Wr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: l, it: f } = o;
    if (s[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (f.allErrors)
      _();
    else {
      const w = a.let("valid", !1);
      _(w), o.ok(w);
    }
    function _(w) {
      if (f.schemaEnv.root.dynamicAnchors[p]) {
        const g = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(g, b(g, w), b(f.validateName, w));
      } else
        b(f.validateName, w)();
    }
    function b(w, g) {
      return g ? () => a.block(() => {
        (0, n.callRef)(o, w), a.let(g, !0);
      }) : () => (0, n.callRef)(o, w);
    }
  }
  return pt.dynamicRef = i, pt.default = r, pt;
}
var _n = {}, Si;
function Ic() {
  if (Si) return _n;
  Si = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Is(), t = /* @__PURE__ */ ae(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return _n.default = n, _n;
}
var Sn = {}, Ci;
function Dc() {
  if (Ci) return Sn;
  Ci = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ds(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Sn.default = t, Sn;
}
var ki;
function Lc() {
  if (ki) return wn;
  ki = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Is(), t = /* @__PURE__ */ Ds(), n = /* @__PURE__ */ Ic(), r = /* @__PURE__ */ Dc(), i = [e.default, t.default, n.default, r.default];
  return wn.default = i, wn;
}
var Cn = {}, kn = {}, Ei;
function qc() {
  if (Ei) return kn;
  Ei = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return kn.default = t, kn;
}
var En = {}, xi;
function Vc() {
  if (xi) return En;
  xi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return En.default = t, En;
}
var xn = {}, Pi;
function Bc() {
  if (Pi) return xn;
  Pi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return xn.default = t, xn;
}
var Ai;
function Uc() {
  if (Ai) return Cn;
  Ai = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qc(), t = /* @__PURE__ */ Vc(), n = /* @__PURE__ */ Bc(), r = [e.default, t.default, n.default];
  return Cn.default = r, Cn;
}
var Pn = {}, An = {}, Ri;
function Hc() {
  if (Ri) return An;
  Ri = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: l, errsCount: f, it: p } = o;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: _, props: b } = p;
      b instanceof e.Name ? s.if((0, e._)`${b} !== true`, () => s.forIn("key", l, (u) => s.if(g(b, u), () => w(u)))) : b !== !0 && s.forIn("key", l, (u) => b === void 0 ? w(u) : s.if($(b, u), () => w(u))), p.props = !0, o.ok((0, e._)`${f} === ${n.default.errors}`);
      function w(u) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: u }), o.error(), _ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const v = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, v), _ || s.if((0, e.not)(v), () => s.break());
        }
      }
      function g(u, v) {
        return (0, e._)`!${u} || !${u}[${v}]`;
      }
      function $(u, v) {
        const d = [];
        for (const C in u)
          u[C] === !0 && d.push((0, e._)`${v} !== ${C}`);
        return (0, e.and)(...d);
      }
    }
  };
  return An.default = i, An;
}
var Rn = {}, Mi;
function Kc() {
  if (Mi) return Rn;
  Mi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i, f = l.items || 0;
      if (f === !0)
        return;
      const p = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: f }), i.fail((0, e._)`${p} > ${f}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(l, s)) {
        const b = o.var("valid", (0, e._)`${p} <= ${f}`);
        o.if((0, e.not)(b), () => _(b, f)), i.ok(b);
      }
      l.items = !0;
      function _(b, w) {
        o.forRange("i", w, p, (g) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: g, dataPropType: t.Type.Num }, b), l.allErrors || o.if((0, e.not)(b), () => o.break());
        });
      }
    }
  };
  return Rn.default = r, Rn;
}
var Ni;
function Gc() {
  if (Ni) return Pn;
  Ni = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hc(), t = /* @__PURE__ */ Kc(), n = [e.default, t.default];
  return Pn.default = n, Pn;
}
var Mn = {}, Nn = {}, Oi;
function Wc() {
  if (Oi) return Nn;
  Oi = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
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
      const { gen: o, data: s, $data: a, schema: l, schemaCode: f, it: p } = r, { opts: _, errSchemaPath: b, schemaEnv: w, self: g } = p;
      if (!_.validateFormats)
        return;
      a ? $() : u();
      function $() {
        const v = o.scopeValue("formats", {
          ref: g.formats,
          code: _.code.formats
        }), d = o.const("fDef", (0, e._)`${v}[${f}]`), C = o.let("fType"), y = o.let("format");
        o.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => o.assign(C, (0, e._)`${d}.type || "string"`).assign(y, (0, e._)`${d}.validate`), () => o.assign(C, (0, e._)`"string"`).assign(y, d)), r.fail$data((0, e.or)(c(), h()));
        function c() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${y}`;
        }
        function h() {
          const m = w.$async ? (0, e._)`(${d}.async ? await ${y}(${s}) : ${y}(${s}))` : (0, e._)`${y}(${s})`, k = (0, e._)`(typeof ${y} == "function" ? ${m} : ${y}.test(${s}))`;
          return (0, e._)`${y} && ${y} !== true && ${C} === ${i} && !${k}`;
        }
      }
      function u() {
        const v = g.formats[l];
        if (!v) {
          c();
          return;
        }
        if (v === !0)
          return;
        const [d, C, y] = h(v);
        d === i && r.pass(m());
        function c() {
          if (_.strictSchema === !1) {
            g.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${l}" ignored in schema at path "${b}"`;
          }
        }
        function h(k) {
          const x = k instanceof RegExp ? (0, e.regexpCode)(k) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(l)}` : void 0, F = o.scopeValue("formats", { key: l, ref: k, code: x });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${F}.validate`] : ["string", k, F];
        }
        function m() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!w.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${y}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${y}(${s})` : (0, e._)`${y}.test(${s})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Ti;
function Jc() {
  if (Ti) return Mn;
  Ti = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Wc()).default];
  return Mn.default = t, Mn;
}
var it = {}, Fi;
function Yc() {
  return Fi || (Fi = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.contentVocabulary = it.metadataVocabulary = void 0, it.metadataVocabulary = [
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
var zi;
function Xc() {
  if (zi) return Ut;
  zi = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fc(), t = /* @__PURE__ */ Cc(), n = /* @__PURE__ */ jc(), r = /* @__PURE__ */ Lc(), i = /* @__PURE__ */ Uc(), o = /* @__PURE__ */ Gc(), s = /* @__PURE__ */ Jc(), a = /* @__PURE__ */ Yc(), l = [
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
  return Ut.default = l, Ut;
}
var On = {}, At = {}, ji;
function Zc() {
  if (ji) return At;
  ji = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (At.DiscrError = e = {})), At;
}
var Ii;
function Qc() {
  if (Ii) return On;
  Ii = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Zn(), i = /* @__PURE__ */ ae(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: f, schema: p, parentSchema: _, it: b } = a, { oneOf: w } = _;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const g = p.propertyName;
      if (typeof g != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const $ = l.let("valid", !1), u = l.const("tag", (0, e._)`${f}${(0, e.getProperty)(g)}`);
      l.if((0, e._)`typeof ${u} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: g })), a.ok($);
      function v() {
        const y = C();
        l.if(!1);
        for (const c in y)
          l.elseIf((0, e._)`${u} === ${c}`), l.assign($, d(y[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: g }), l.endIf();
      }
      function d(y) {
        const c = l.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: y }, c);
        return a.mergeEvaluated(h, e.Name), c;
      }
      function C() {
        var y;
        const c = {}, h = k(_);
        let m = !0;
        for (let M = 0; M < w.length; M++) {
          let j = w[M];
          if (j?.$ref && !(0, i.schemaHasRulesButRef)(j, b.self.RULES)) {
            const z = j.$ref;
            if (j = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, z), j instanceof n.SchemaEnv && (j = j.schema), j === void 0)
              throw new r.default(b.opts.uriResolver, b.baseId, z);
          }
          const L = (y = j?.properties) === null || y === void 0 ? void 0 : y[g];
          if (typeof L != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${g}"`);
          m = m && (h || k(j)), x(L, M);
        }
        if (!m)
          throw new Error(`discriminator: "${g}" must be required`);
        return c;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(g);
        }
        function x(M, j) {
          if (M.const)
            F(M.const, j);
          else if (M.enum)
            for (const L of M.enum)
              F(L, j);
          else
            throw new Error(`discriminator: "properties/${g}" must have "const" or "enum"`);
        }
        function F(M, j) {
          if (typeof M != "string" || M in c)
            throw new Error(`discriminator: "${g}" values must be unique strings`);
          c[M] = j;
        }
      }
    }
  };
  return On.default = s, On;
}
var Tn = {};
const el = "https://json-schema.org/draft/2020-12/schema", tl = "https://json-schema.org/draft/2020-12/schema", nl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, rl = "meta", ol = "Core and Validation specifications meta-schema", il = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], sl = ["object", "boolean"], al = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", cl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, ll = {
  $schema: el,
  $id: tl,
  $vocabulary: nl,
  $dynamicAnchor: rl,
  title: ol,
  allOf: il,
  type: sl,
  $comment: al,
  properties: cl
}, dl = "https://json-schema.org/draft/2020-12/schema", ul = "https://json-schema.org/draft/2020-12/meta/applicator", fl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, pl = "meta", hl = "Applicator vocabulary meta-schema", ml = ["object", "boolean"], gl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, yl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, $l = {
  $schema: dl,
  $id: ul,
  $vocabulary: fl,
  $dynamicAnchor: pl,
  title: hl,
  type: ml,
  properties: gl,
  $defs: yl
}, vl = "https://json-schema.org/draft/2020-12/schema", bl = "https://json-schema.org/draft/2020-12/meta/unevaluated", wl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, _l = "meta", Sl = "Unevaluated applicator vocabulary meta-schema", Cl = ["object", "boolean"], kl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, El = {
  $schema: vl,
  $id: bl,
  $vocabulary: wl,
  $dynamicAnchor: _l,
  title: Sl,
  type: Cl,
  properties: kl
}, xl = "https://json-schema.org/draft/2020-12/schema", Pl = "https://json-schema.org/draft/2020-12/meta/content", Al = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rl = "meta", Ml = "Content vocabulary meta-schema", Nl = ["object", "boolean"], Ol = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Tl = {
  $schema: xl,
  $id: Pl,
  $vocabulary: Al,
  $dynamicAnchor: Rl,
  title: Ml,
  type: Nl,
  properties: Ol
}, Fl = "https://json-schema.org/draft/2020-12/schema", zl = "https://json-schema.org/draft/2020-12/meta/core", jl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Il = "meta", Dl = "Core vocabulary meta-schema", Ll = ["object", "boolean"], ql = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Vl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Bl = {
  $schema: Fl,
  $id: zl,
  $vocabulary: jl,
  $dynamicAnchor: Il,
  title: Dl,
  type: Ll,
  properties: ql,
  $defs: Vl
}, Ul = "https://json-schema.org/draft/2020-12/schema", Hl = "https://json-schema.org/draft/2020-12/meta/format-annotation", Kl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Gl = "meta", Wl = "Format vocabulary meta-schema for annotation results", Jl = ["object", "boolean"], Yl = { format: { type: "string" } }, Xl = {
  $schema: Ul,
  $id: Hl,
  $vocabulary: Kl,
  $dynamicAnchor: Gl,
  title: Wl,
  type: Jl,
  properties: Yl
}, Zl = "https://json-schema.org/draft/2020-12/schema", Ql = "https://json-schema.org/draft/2020-12/meta/meta-data", ed = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, td = "meta", nd = "Meta-data vocabulary meta-schema", rd = ["object", "boolean"], od = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, id = {
  $schema: Zl,
  $id: Ql,
  $vocabulary: ed,
  $dynamicAnchor: td,
  title: nd,
  type: rd,
  properties: od
}, sd = "https://json-schema.org/draft/2020-12/schema", ad = "https://json-schema.org/draft/2020-12/meta/validation", cd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, ld = "meta", dd = "Validation vocabulary meta-schema", ud = ["object", "boolean"], fd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, pd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, hd = {
  $schema: sd,
  $id: ad,
  $vocabulary: cd,
  $dynamicAnchor: ld,
  title: dd,
  type: ud,
  properties: fd,
  $defs: pd
};
var Di;
function md() {
  if (Di) return Tn;
  Di = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = ll, t = $l, n = El, r = Tl, i = Bl, o = Xl, s = id, a = hd, l = ["/properties"];
  function f(p) {
    return [
      e,
      t,
      n,
      r,
      i,
      _(this, o),
      s,
      _(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function _(b, w) {
      return p ? b.$dataMetaSchema(w, l) : w;
    }
  }
  return Tn.default = f, Tn;
}
var Li;
function gd() {
  return Li || (Li = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ dc(), r = /* @__PURE__ */ Xc(), i = /* @__PURE__ */ Qc(), o = /* @__PURE__ */ md(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(w = {}) {
        super({
          ...w,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: w, meta: g } = this.opts;
        g && (o.default.call(this, w), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ Xn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var f = /* @__PURE__ */ ie();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return f._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return f.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return f.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return f.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return f.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return f.CodeGen;
    } });
    var p = /* @__PURE__ */ Gr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var _ = /* @__PURE__ */ Zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(Dt, Dt.exports)), Dt.exports;
}
var yd = /* @__PURE__ */ gd();
const $d = /* @__PURE__ */ Wa(yd), vd = "https://json-schema.org/draft/2020-12/schema", bd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", wd = "gufe-viz payload", _d = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Sd = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Cd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Xr = {
  $schema: vd,
  $id: bd,
  title: wd,
  description: _d,
  oneOf: Sd,
  $defs: Cd
}, Tp = [
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
], Zr = Xr.$id, Qr = new $d({ allErrors: !0, strict: !1 });
Qr.addSchema(Xr, Zr);
const qi = Qr.getSchema(Zr), Ls = Object.entries(Xr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Fp = Ls, eo = /* @__PURE__ */ new Map();
for (const e of Ls) {
  const t = Qr.getSchema(`${Zr}#/$defs/${e}`);
  t && eo.set(e, t);
}
const Or = { valid: !0, issues: [] };
function Tr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function kd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? eo.get(t) : void 0;
  return n ? n(e) ? Or : { valid: !1, issues: Tr(n.errors) } : qi(e) ? Or : { valid: !1, issues: Tr(qi.errors) };
}
function zp(e, t) {
  const n = eo.get(e);
  return n ? n(t) ? Or : { valid: !1, issues: Tr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ed(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const to = {
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
function qs(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!to[t]) return xd(t);
  const { valid: n, issues: r } = kd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ed(r)
  };
}
function xd(e) {
  const t = Object.keys(to).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function jp(e) {
  return qs(e)?.message ?? null;
}
class Pd extends Ee {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    _a("payload", n, this);
    const r = qs(n);
    if (r)
      return t.appendChild(Ad(r, n)), {};
    const i = n.type, o = to[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Ad(e, t) {
  const n = N(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(fe(e.message));
  const r = (o, s) => N(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${A.warnBg};color:${A.warnFg};border:1px solid ${A.warnBorder};` : `background:${A.panelBg};color:${A.textMuted2};border:1px solid ${A.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = Rd(t);
  return i && n.appendChild(r(i, !1)), n;
}
function Rd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ke(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ke(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
xe("gufe-view", Pd);
const gr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, no = {
  threeDmol: `https://unpkg.com/3dmol@${gr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${gr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${gr.d3}/+esm`
};
function ro(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Vs(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Qe = null, ht = null;
function er() {
  if (ht) return ht;
  const e = ro("threeDmol");
  return e ? (ht = e.then((t) => Qe = t || window.$3Dmol), ht) : (ht = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await Vs(no.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), ht);
}
let mt = null;
function tr() {
  if (mt) return mt;
  const e = ro("rdkit");
  return e ? (mt = e.then((t) => window.RDKit = t), mt) : (mt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Vs(no.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), mt);
}
let yr = null;
function Bs() {
  if (!yr) {
    const e = no.d3;
    yr = ro("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return yr;
}
function Us(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const l = a.ctrlKey || a.metaKey;
    if (n || l) {
      (t.onZoom(a) !== !1 || l) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Od(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
function Md(e) {
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
const Nd = 1600;
function Od(e, t) {
  const n = N(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Nd);
}
const Td = { min: 0.25, max: 12 }, Fd = 150;
function Vi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Fd) - t;
}
function zd(e, t = Td) {
  const n = Vi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = Vi(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), l = Math.min(t.max, Math.max(t.min, a * s)), f = l / a;
      return !Number.isFinite(f) || Math.abs(f - 1) < 1e-9 ? !1 : (i = l, e.zoom(f), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const jd = 2e-3;
function Hs(e) {
  return Math.exp(-e.deltaY * jd);
}
function nr(e, t, n = {}) {
  const r = zd(t, n.bounds), i = Us(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Hs(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function rr(e, t = "Reset view") {
  const n = N("button", St, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const $r = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Id = [
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
], Ip = "hsv", U = [0, 0, 0], Dd = {
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
}, Ld = "rdkit", qd = !0, Vd = !0, Bd = !0, Ud = !0, Hd = "rdkit", Kd = "filled", Gd = 0.42, Wd = 1.5, Jd = !0, Yd = "show", Xd = "mono", Zd = 0.51, Qd = 0.74, eu = 1.6, tu = 1.7, nu = 5, ru = 0.3, ou = "#d62828", iu = "#d62828", su = "#015ab5", au = !1, cu = "", lu = "#7c3aed", du = {
  layout: Ld,
  alignPair: qd,
  atomNumbers: Vd,
  createdDestroyed: Bd,
  modified: Ud,
  style: Hd,
  circles: Kd,
  circleRadius: Gd,
  circleStroke: Wd,
  boundary: Jd,
  hydrogens: Yd,
  elementColors: Xd,
  numScale: Zd,
  labelScale: Qd,
  bondWidth: eu,
  markWidth: tu,
  haloWidth: nu,
  haloOpacity: ru,
  destroyedColor: ou,
  createdColor: iu,
  modifiedColor: su,
  stereo: au,
  customSpec: cu,
  customColor: lu
}, uu = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: $r.uniqueAtom,
  createdColor: $r.uniqueAtom,
  modifiedColor: $r.elementChange,
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
}, fu = ["rdkit", "coordgen", "conformer"], pu = ["rdkit", "recolor", "halo"], hu = ["outline", "filled", "off"], mu = ["show", "dim", "hide"], gu = ["cpk", "mono"], yu = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, $u = /^#[0-9a-fA-F]{6}$/;
function Rt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Xe(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = yu[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const gt = (e, t) => typeof e == "boolean" ? e : t, Fn = (e, t) => typeof e == "string" && $u.test(e) ? e : t;
function vu(e) {
  const t = e && typeof e == "object" ? e : {}, n = uu;
  return {
    version: 1,
    layout: Rt(t.layout, fu, n.layout),
    alignPair: gt(t.alignPair, n.alignPair),
    style: Rt(t.style, pu, n.style),
    createdDestroyed: gt(t.createdDestroyed, n.createdDestroyed),
    modified: gt(t.modified, n.modified),
    destroyedColor: Fn(t.destroyedColor, n.destroyedColor),
    createdColor: Fn(t.createdColor, n.createdColor),
    modifiedColor: Fn(t.modifiedColor, n.modifiedColor),
    boundary: gt(t.boundary, n.boundary),
    circles: Rt(t.circles, hu, n.circles),
    circleRadius: Xe(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Xe(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Rt(t.hydrogens, mu, n.hydrogens),
    elementColors: Rt(t.elementColors, gu, n.elementColors),
    atomNumbers: gt(t.atomNumbers, n.atomNumbers),
    stereo: gt(t.stereo, n.stereo),
    numScale: Xe(t.numScale, "numScale", n.numScale),
    labelScale: Xe(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Xe(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Xe(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Xe(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Xe(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Fn(t.customColor, n.customColor)
  };
}
const ze = vu(du);
function Bi(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, l = (p) => {
      s !== "right" && t.add(p), s !== "left" && n.add(p);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const p = Math.min(+f[1], +f[2]), _ = Math.min(Math.max(+f[1], +f[2]), p + r - 1);
      for (let b = p; b <= _; b++) l(b);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function vr(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), l = t.has(s);
    (n ? a || l : a && l) && r.push(i);
  }
  return r;
}
function Ui(e) {
  return `0x${e.replace("#", "")}`;
}
function Fr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function bu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function wu(e, t, n) {
  const r = new Set(t.atoms), i = new Set(vr(e, r, !0));
  return {
    deletions: vr(e, r, n),
    changes: vr(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function Hi(e, t, n, r) {
  const i = wu(t, n, e.boundary), o = [];
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
let yt = null;
function _u(e) {
  if (yt !== null) return yt;
  yt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (yt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return yt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), yt;
}
function Su(e, t) {
  return e.style === "rdkit" ? "rdkit" : _u(t) ? e.style : "rdkit";
}
function Cu(e, t, n, r, i, o) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Dd), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const w of n) {
    const g = Fr(w.color);
    if (i === "rdkit") for (const u of w.bonds) f[u] = g;
    if (i === "recolor" && e.circles === "off") continue;
    const $ = i === "recolor" && e.circles === "filled" ? bu(g, 0.7) : g;
    for (const u of w.atoms)
      a[u] = $, l[u] = e.circleRadius;
  }
  const p = Fr(e.customColor);
  for (const w of r)
    w < o && (a[w] = p, l[w] = e.circleRadius);
  const _ = Object.keys(a).map(Number);
  _.length && (s.atoms = _, s.highlightAtomColors = a, s.highlightAtomRadii = l);
  const b = Object.keys(f).map(Number);
  return b.length && (s.bonds = b, s.highlightBondColors = f), s;
}
function ku(e, t, n, r) {
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
const Eu = "http://www.w3.org/2000/svg";
function Ks(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function oo(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function Gs(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Ki(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of Ks(e, s)) {
      const l = a.style;
      Gs(a) ? l.fill = i : (l.stroke = i, l.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of oo(e, s, !1)) a.style.fill = o;
}
function xu(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(Eu, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of Ks(e, a)) {
      if (Gs(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", o.appendChild(f);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Pu(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of oo(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Au(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of oo(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Ru(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Mu(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        Ki(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Pu(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && Au(e, n, s.atoms, i, s.color);
      } else
        xu(e, n, s.bonds, s.color), Ki(e, n, s.atoms, s.bonds, s.color, null);
  Ru(e, t, n);
}
const or = `
`, zr = "$$$$";
function jr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(or);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let p = 0; p < i; p++) {
    const _ = n[4 + p];
    if (_ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let p = 0; p < (isFinite(o) ? o : 0); p++) {
    const _ = n[4 + i + p];
    if (_ == null) break;
    const b = parseInt(_.substring(0, 3), 10), w = parseInt(_.substring(3, 6), 10), g = parseInt(_.substring(6, 9), 10);
    !isFinite(b) || !isFinite(w) || l.push([b - 1, w - 1, isFinite(g) ? g : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: s };
}
function Nu(e) {
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
  return r.push("M  END"), r.join(or);
}
const Ou = (e) => `${Nu(e)}${or}${zr}`, Ws = (e) => e.indexOf(zr) >= 0 ? e : `${e}${or}${zr}`;
function io(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Js(e, t, n, r, i) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    if (r !== "conformer")
      try {
        o.set_new_coords(r === "coordgen");
      } catch {
      }
    if (i?.atoms.length && o.get_svg_with_highlights) {
      const s = {}, a = {};
      for (const f of i.atoms)
        s[f] = i.color, a[f] = i.radius;
      const l = {
        width: n,
        height: n,
        atoms: [...i.atoms],
        highlightAtomColors: s,
        highlightAtomRadii: a
      };
      return o.get_svg_with_highlights(JSON.stringify(l)) || null;
    }
    return o.get_svg(n, n) || null;
  } catch (s) {
    return console.warn("[gufe-viz] depictSVG threw -", he(s)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function Ys(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Gi = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Ir = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, $t = (e) => e in Ir, Wi = 400, br = "position:absolute;inset:0;min-width:0;min-height:0;";
class Tu extends Ee {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge, a = N("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const l = N(
      "div",
      `${br}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${ct.canvas2D};`
    );
    a.appendChild(l);
    const f = Hr();
    f.wrap.style.cssText = br, a.appendChild(f.wrap);
    const p = N(
      "div",
      `${br}overflow:auto;padding:16px 20px;background:${A.panelBg};color:${A.textPrimary};font-size:${Z.body};`
    );
    a.appendChild(p);
    const _ = r ? io(r) : null, b = [
      ["Name", i || st, !1],
      ["SMILES", o || st, !0],
      ["Charge", s == null ? st : String(s), !1],
      ["Atoms", _ ? String(_.atoms) : st, !1],
      ["Bonds", _ ? String(_.bonds) : st, !1]
    ], w = N("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${te.xl} 20px;align-items:baseline;`);
    p.appendChild(w);
    for (const [M, j, L] of b) {
      w.appendChild(
        N(
          "div",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${A.textMuted2};`,
          M
        )
      );
      const z = N(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${A.textPrimary}` + (L ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};` : ""),
        j
      );
      z.title = j, w.appendChild(z);
    }
    const g = Kr(t), $ = N("div", Ar, i || "Unnamed molecule");
    g && a.appendChild($);
    const u = Ge(
      "small-molecule.mode",
      "2d",
      Gi.map((M) => M.id)
    ), v = We("small-molecule.spin", !1);
    let d = u.get(), C = v.get(), y = null, c = null;
    const h = () => {
      try {
        y?.spin(C && $t(d) ? "y" : !1);
      } catch {
      }
    }, m = (M) => {
      d = M, l.style.visibility = d === "2d" ? "visible" : "hidden", f.wrap.style.visibility = $t(d) ? "visible" : "hidden", p.style.visibility = d === "info" ? "visible" : "hidden", $.style.display = d === "info" || !g ? "none" : "block", F.disabled = !$t(d), F.style.opacity = $t(d) ? "1" : "0.5", $t(d) && y && (y.setStyle({}, Ir[d]), y.resize(), y.render()), h();
    }, k = N("div", ws), x = _t(Gi, d, (M) => m(M), u), F = Br(
      "Spin",
      C,
      (M) => {
        C = M, h();
      },
      { title: "Toggle continuous rotation", remember: v }
    );
    return x.insertBefore(F, x.lastElementChild), k.appendChild(x), a.appendChild(k), m(d), !r || !r.trim() ? (l.appendChild(fe("No molecule provided")), f.container.appendChild(fe("No molecule provided")), {}) : (l.appendChild(fe("Loading 2D depiction...")), tr().then((M) => {
      const j = Js(M, r, Wi, ze.layout);
      j ? Ys(l, j, Wi) : l.replaceChildren(fe("Failed to parse molecule", !0));
    }).catch((M) => {
      l.replaceChildren(fe(`RDKit failed to load: ${he(M)}`, !0));
    }), f.container.appendChild(fe("Loading 3D viewer...")), er().then(() => {
      f.container.replaceChildren(), y = Qe.createViewer(f.container, { backgroundColor: ct.viewer }), y.addModel(Ws(r), "sdf"), y.setStyle({}, Ir[$t(d) ? d : "stick"]), y.zoomTo(), y.render(), c = nr(f.container, y), h();
    }).catch((M) => {
      f.container.replaceChildren(fe(`3D render failed: ${he(M)}`, !0));
    }), {
      onResize() {
        y && (y.resize(), y.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!y) {
          try {
            y.spin(!1);
          } catch {
          }
          try {
            y.clear();
          } catch {
          }
          y = null;
        }
      }
    });
  }
}
xe("gufe-small-molecule", Tu);
const Xs = ["HOH", "WAT", "SOL", "TIP3"], Ji = { hetflag: !1 }, Fu = { hetflag: !0 }, zu = { resn: Xs }, Fe = {
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
function Zs(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && i++;
    const p = l.slice(17, 20).trim(), _ = l.slice(21, 22).trim() || "_", b = l.slice(22, 26).trim(), w = l.slice(26, 27).trim();
    Xs.indexOf(p) !== -1 && o++, t.add(_), n.add(`${_}|${b}${w}|${p}`);
    const g = parseInt(b, 10);
    isNaN(g) || (g < s && (s = g), g > a && (a = g));
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
function Qs(e) {
  return `${Et(e.chains)} chains · ${Et(e.residues)} residues · ${Et(e.atoms)} atoms · ${Et(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Et(e.waters)} water)` : "");
}
function ju(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Dr(e, t, n, r, i) {
  const o = r || (() => {
  }), s = ju(t.color, n), a = (l) => i ? { ...l, ...i } : l;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(Ji),
    t.rep === "stick" ? { stick: { radius: Fe.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: Fe.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(Fu),
    t.hetero ? {
      stick: { radius: Fe.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Fe.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(zu),
    t.waters ? {
      stick: { radius: Fe.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Fe.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    o(null), e.render();
    return;
  }
  o(
    n && n.atoms > Fe.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(
          Qe.SurfaceType.VDW,
          { opacity: Fe.surfaceOpacity, ...s },
          a(Ji)
        )
      ).then(() => {
        o(null), e.render();
      }).catch((l) => o(`Surface failed: ${he(l)}`, "error"));
    } catch (l) {
      o(`Surface failed: ${he(l)}`, "error");
    }
  }, 30);
}
function Iu(e, t) {
  e.setStyle(t, {
    stick: { radius: Fe.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Fe.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const Yi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Xi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Du extends Ee {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = Ge(
      "protein.representation",
      "cartoon",
      Yi.map((k) => k.id)
    ), a = Ge(
      "protein.color",
      "chain",
      Xi.map((k) => k.id)
    ), l = We("protein.waters", o), f = We("protein.hetero", !0), p = We("protein.spin", !1), _ = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: p.get()
    };
    let b = null, w = null, g = null;
    const $ = N(
      "div",
      Hn.top
    );
    t.appendChild($), $.appendChild(
      N("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${A.titleColor};`, i || "Protein")
    );
    const u = (k) => N("span", `font-size:${Z.small};color:${A.textMuted};`, k);
    $.appendChild(u("Style:")), $.appendChild(
      _t(
        Yi,
        _.rep,
        (k) => {
          _.rep = k, m();
        },
        s
      )
    ), $.appendChild(u("Color:")), $.appendChild(
      jt(
        Xi,
        _.color,
        (k) => {
          _.color = k, m();
        },
        a
      )
    );
    const v = N("div", "display:flex;gap:4px;");
    $.appendChild(v);
    const d = [
      ["waters", "Waters", "Show water molecules", l, () => m()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => m()],
      ["spin", "Spin", "Rotate the view continuously", p, () => b?.spin(_.spin ? "y" : !1)]
    ];
    for (const [k, x, F, M, j] of d)
      v.appendChild(
        Br(
          x,
          _[k],
          (L) => {
            _[k] = L, j();
          },
          { title: F, remember: M }
        )
      );
    v.appendChild(rr(() => w?.reset()));
    const C = N("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${A.textMuted2};`);
    $.appendChild(C);
    const y = Hr();
    t.appendChild(y.wrap);
    const c = N(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
    );
    y.wrap.appendChild(c);
    const h = (k, x) => {
      if (k == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = k, c.style.display = "block";
      const F = x === "error";
      c.style.background = F ? A.warnBg : A.toolbarBg, c.style.color = F ? A.warnFg : A.textMuted, c.style.border = `1px solid ${F ? A.warnBorder : A.toolbarBorder}`;
    };
    function m() {
      b && Dr(b, _, g, h);
    }
    if (!r || !r.trim())
      return h("No protein data - waiting for a PDB payload."), {};
    try {
      g = Zs(r), C.textContent = Qs(g);
    } catch (k) {
      h(`⚠ PDB parse error: ${he(k)}`, "error");
    }
    return h("Loading 3D viewer..."), er().then(() => {
      b = Qe.createViewer(y.container, { backgroundColor: ct.viewer }), b.addModel(r, "pdb"), Dr(b, _, g, h), b.zoomTo(), b.spin(_.spin ? "y" : !1), b.render(), w = nr(y.container, b);
    }).catch((k) => {
      h(`⚠ Failed to render structure: ${he(k)}`, "error");
    }), {
      onResize() {
        b && (b.resize(), b.render());
      },
      cleanup() {
        if (w?.cleanup(), w = null, !!b) {
          try {
            b.spin(!1);
          } catch {
          }
          try {
            b.clear();
          } catch {
          }
          b = null;
        }
      }
    };
  }
}
xe("gufe-protein", Du);
function kt(e) {
  const t = /* @__PURE__ */ new Map();
  return Lr(e, t, /* @__PURE__ */ new Set()), t;
}
function Lr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) Lr(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) Lr(i, t, n);
}
function Je(e, t) {
  return t ? e.get(t) : void 0;
}
function Se(e, t, n) {
  const r = Je(e, t);
  return r?.type === n ? r : void 0;
}
function so(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const i of t) {
    if (!i || r.has(i)) continue;
    const o = e.get(i);
    o && (r.add(i), n.push(o));
  }
  return n;
}
function tt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const ao = "Cmd/Ctrl-click to select several.";
function Lu(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : tt(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function qu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Zi(e, t)), navigator.clipboard || Zi(e, t);
}
function Zi(e, t) {
  const n = N("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Vu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = N("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ea(e) {
  const { words: t } = e, n = Ge(e.setting, "names", ["names", "keys"]), r = N("div", "display:flex;flex-direction:column;gap:6px;"), i = N("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${A.textMuted};`);
  i.appendChild(N("span", "", "copy as"));
  const o = jt(
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
  const s = N("div", `font-size:${Z.tiny};line-height:1.5;color:${A.textMuted2};`), a = (p) => {
    s.textContent = p;
  }, l = N("div", "display:flex;gap:4px;"), f = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [p, _, b] of f) {
    const w = N("button", `${St}flex:1;`, _.button);
    w.title = b, w.onclick = (g) => {
      const $ = o.value, u = Lu(e.nodes, e.edges, e.selected, p, $);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : p === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${ao}` : "Nothing to copy."
        );
        return;
      }
      const v = u.split(`
`).length;
      g.shiftKey ? (Vu(u, `selected-${_.plural}.txt`), a(`Saved ${v} ${_.plural} to a file.`)) : (qu(u, r), a(
        p === "edges" ? `Copied ${v} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, l.appendChild(w);
  }
  return r.appendChild(l), r.appendChild(s), r.appendChild(N("div", `font-size:${Z.tiny};color:${A.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const ta = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(ta, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function Qi(e, t) {
  const n = document.createElementNS(ta, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Bu = 3;
function na(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), i = Math.min(i, a.y), o = Math.max(o, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(i) ? null : { minX: r - t, minY: i - n, maxX: o + t, maxY: s + n };
}
const Uu = { min: 0.15, max: 5 }, Hu = 1e-9;
function ra(e, t, n) {
  const r = n.margin ?? 0, i = n.zoom ?? Uu;
  let o = 1, s = 0, a = 0;
  const l = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${o})`), n.onTransform?.(o, s, a);
  }, f = () => {
    const z = e.getBoundingClientRect();
    return {
      width: z.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: z.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, p = (z, G, Y) => Math.min(1, G / (z.maxX - z.minX + r * 2), Y / (z.maxY - z.minY + r * 2)), _ = () => {
    const z = n.bounds();
    if (!z) return i.min;
    const { width: G, height: Y } = f();
    return Math.min(i.min, p(z, G, Y));
  }, b = (z) => Math.min(i.max, Math.max(_(), o * z)), w = () => {
    o = 1, s = 0, a = 0;
    const z = n.bounds();
    if (!z) {
      l();
      return;
    }
    const { width: G, height: Y } = f();
    o = p(z, G, Y), s = G / 2 - (z.minX + z.maxX) / 2 * o, a = Y / 2 - (z.minY + z.maxY) / 2 * o, l();
  }, $ = Us(e, {
    onZoom: (z) => {
      const G = e.getBoundingClientRect(), Y = z.clientX - G.left, oe = z.clientY - G.top, X = b(Hs(z)), W = X / o;
      return s = Y - (Y - s) * W, a = oe - (oe - a) * W, o = X, l(), Math.abs(W - 1) > Hu;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let v = null, d = null, C = !1, y = null;
  const c = (z) => ({
    x: z.clientX - s,
    y: z.clientY - a,
    from: { x: z.clientX, y: z.clientY }
  }), h = (z) => {
    z.pointerType === "touch" && u.size > 1 || (d = c(z), C = !1);
  }, m = (z) => {
    v || (y && z.pointerType === "touch" && (d = { x: y.x - s, y: y.y - a, from: y }, y = null), d && (Math.hypot(z.clientX - d.from.x, z.clientY - d.from.y) > Bu && (C = !0), s = z.clientX - d.x, a = z.clientY - d.y, l()));
  }, k = () => {
    d = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", m), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("pointerleave", k);
  const x = () => {
    const [z, G] = [...u.values()];
    return { cx: (z.x + G.x) / 2, cy: (z.y + G.y) / 2, span: Math.max(1, Math.hypot(z.x - G.x, z.y - G.y)) };
  }, F = (z) => {
    if (z.pointerType === "touch") {
      if (u.set(z.pointerId, { x: z.clientX, y: z.clientY }), u.size !== 2) {
        v = null;
        return;
      }
      v = x(), d = null, C = !0;
    }
  }, M = (z) => {
    if (z.pointerType !== "touch" || !u.has(z.pointerId) || (u.set(z.pointerId, { x: z.clientX, y: z.clientY }), !v || u.size !== 2)) return;
    z.preventDefault(), z.stopPropagation();
    const G = x(), Y = e.getBoundingClientRect(), oe = b(G.span / v.span), X = oe / o;
    s = G.cx - Y.left - (v.cx - Y.left - s) * X, a = G.cy - Y.top - (v.cy - Y.top - a) * X, o = oe, v = G, l();
  }, j = (z) => {
    if (z.pointerType !== "touch") return;
    if (u.delete(z.pointerId), u.size === 2) {
      v = x();
      return;
    }
    v = null;
    const [G] = [...u.values()];
    y = u.size === 1 && G ? { ...G } : null;
  };
  e.addEventListener("pointerdown", F, !0), e.addEventListener("pointermove", M, { capture: !0, passive: !1 }), e.addEventListener("pointerup", j, !0), e.addEventListener("pointercancel", j, !0);
  const L = Md(e);
  return {
    fit: w,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: w,
    centreOn(z, G, Y = 1) {
      const { width: oe, height: X } = f();
      o = Math.max(o, Y), s = oe / 2 - z * o, a = X / 2 - G * o, l();
    },
    transform: () => ({ scale: o, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(z, G, Y) {
      o = z, s = G, a = Y, l();
    },
    cleanup() {
      $.cleanup(), L.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", m), e.removeEventListener("pointerup", k), e.removeEventListener("pointercancel", k), e.removeEventListener("pointerleave", k), e.removeEventListener("pointerdown", F, !0), e.removeEventListener("pointermove", M, { capture: !0 }), e.removeEventListener("pointerup", j, !0), e.removeEventListener("pointercancel", j, !0);
    }
  };
}
const Ku = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function oa(e) {
  const t = { ...e };
  for (const n of Ku) delete t[n];
  return t;
}
const Gu = 8, Wu = 64, Ju = () => new Promise((e) => setTimeout(e, 0));
function qr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Yu(e, t, n, r) {
  let i = null;
  try {
    if (i = e.get_mol(n, JSON.stringify({ removeHs: r })), !i || !i.get_substruct_matches) return null;
    const o = i.get_substruct_matches(t), s = JSON.parse(o || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of s) {
      const f = l.atoms;
      if (Array.isArray(f))
        for (const p of f) typeof p == "number" && a.add(p);
    }
    return [...a].sort((l, f) => l - f);
  } catch (o) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(o)), null;
  } finally {
    qr(i);
  }
}
function ia(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let i = 0;
  return { run: async (s) => {
    const a = s.trim(), l = ++i;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const p = await e();
    if (l !== i) return { status: "superseded" };
    if (!p) return { status: "unsupported" };
    if (!p.get_qmol) return { status: "unsupported" };
    let _ = null;
    try {
      _ = p.get_qmol(a);
    } catch {
      _ = null;
    }
    if (!_) return { status: "invalid" };
    if (!_.get_substruct_matches)
      return qr(_), { status: "unsupported" };
    const b = /* @__PURE__ */ new Map();
    let w = 0;
    try {
      let g = performance.now(), $ = 0;
      for (let u = 0; u < t.length; u++) {
        const v = t[u] ? Yu(p, _, t[u], n) : null;
        if (v ? v.length && b.set(u, v) : w++, !(++$ < Wu && performance.now() - g < Gu)) {
          if (await Ju(), l !== i) return { status: "superseded" };
          $ = 0, g = performance.now();
        }
      }
    } finally {
      qr(_);
    }
    return r.set(a, b), { status: "ok", matched: b, unreadable: w };
  }, cancel: () => void ++i };
}
const Xu = 250;
function sa(e) {
  const t = N("div", "display:flex;flex-direction:column;gap:8px;"), n = N("input", `${Gn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = N("div", `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${A.textMuted2};`);
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
      (l) => {
        l.status !== "superseded" && (r.textContent = i(l));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let s = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => o(n.value), Xu);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && o(n.value);
    }
  };
}
const Zu = 1e-6;
function zn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function es(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Qu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function ts(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], l = o[s][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const p = t[a * 3 + a], _ = t[l * 3 + l], b = (_ - p) / (2 * f);
      let w;
      Math.abs(b) > 1e10 ? w = 1 / (2 * b) : w = (b >= 0 ? 1 : -1) / (Math.abs(b) + Math.sqrt(b * b + 1));
      const g = 1 / Math.sqrt(1 + w * w), $ = w * g;
      t[a * 3 + a] = p - w * f, t[l * 3 + l] = _ + w * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== l) {
          const v = t[u * 3 + a], d = t[u * 3 + l];
          t[u * 3 + a] = g * v - $ * d, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + l] = $ * v + g * d, t[l * 3 + u] = t[u * 3 + l];
        }
      for (let u = 0; u < 3; u++) {
        const v = n[u * 3 + a], d = n[u * 3 + l];
        n[u * 3 + a] = g * v - $ * d, n[u * 3 + l] = $ * v + g * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function ef(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let y = 0; y < n; y++)
    r[0] += e[y][0], r[1] += e[y][1], r[2] += e[y][2], i[0] += t[y][0], i[1] += t[y][1], i[2] += t[y][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]], determined: !1 };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let y = 0; y < n; y++) {
    const c = e[y][0] - r[0], h = e[y][1] - r[1], m = e[y][2] - r[2], k = t[y][0] - i[0], x = t[y][1] - i[1], F = t[y][2] - i[2];
    o[0] += c * k, o[1] += c * x, o[2] += c * F, o[3] += h * k, o[4] += h * x, o[5] += h * F, o[6] += m * k, o[7] += m * x, o[8] += m * F;
  }
  const s = es(o), a = zn(s, o), l = zn(o, s);
  let f = ts(a), p = ts(l);
  function _(y) {
    const c = [0, 1, 2].sort((m, k) => y.values[k] - y.values[m]), h = new Array(9);
    for (let m = 0; m < 3; m++) {
      const k = c[m];
      h[m] = y.vectors[k], h[3 + m] = y.vectors[3 + k], h[6 + m] = y.vectors[6 + k];
    }
    return {
      values: [y.values[c[0]], y.values[c[1]], y.values[c[2]]],
      vectors: h
    };
  }
  f = _(f), p = _(p);
  const b = f.vectors, w = p.vectors;
  for (let y = 0; y < 3; y++) {
    const c = b[y], h = b[3 + y], m = b[6 + y], k = o[0] * c + o[1] * h + o[2] * m, x = o[3] * c + o[4] * h + o[5] * m, F = o[6] * c + o[7] * h + o[8] * m, M = w[y], j = w[3 + y], L = w[6 + y];
    k * M + x * j + F * L < 0 && (w[y] = -M, w[3 + y] = -j, w[6 + y] = -L);
  }
  const g = es(b);
  let $ = zn(w, g);
  Qu($) < 0 && (w[2] = -w[2], w[5] = -w[5], w[8] = -w[8], $ = zn(w, g));
  const u = $[0] * i[0] + $[1] * i[1] + $[2] * i[2], v = $[3] * i[0] + $[4] * i[1] + $[5] * i[2], d = $[6] * i[0] + $[7] * i[1] + $[8] * i[2], C = f.values[1] > Zu * f.values[0];
  return { R: $, t: [r[0] - u, r[1] - v, r[2] - d], determined: C };
}
function tf(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const ns = `
`, wr = 4;
function rs(e, t, n) {
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
function nf(e, t, n) {
  const r = [], i = [];
  for (const [p, _] of n) {
    const b = e[_], w = t[p];
    !b || !w || (r.push(b), i.push(w));
  }
  if (r.length < 2) return null;
  const o = (p) => {
    let _ = 0, b = 0;
    for (const w of p)
      _ += w[0], b += w[1];
    return [_ / p.length, b / p.length];
  }, s = o(r), a = o(i);
  let l = null, f = -1 / 0;
  for (const p of [!1, !0]) {
    let _ = 0, b = 0;
    for (let d = 0; d < r.length; d++) {
      const C = (p ? -1 : 1) * (r[d][0] - s[0]), y = r[d][1] - s[1], c = i[d][0] - a[0], h = i[d][1] - a[1];
      _ += C * h - y * c, b += C * c + y * h;
    }
    const w = Math.hypot(_, b);
    if (w <= f) continue;
    f = w;
    const g = Math.atan2(_, b), $ = Math.cos(g), u = Math.sin(g), v = (p ? -1 : 1) * s[0];
    l = {
      cos: $,
      sin: u,
      mirror: p,
      tx: a[0] - ($ * v - u * s[1]),
      ty: a[1] - (u * v + $ * s[1])
    };
  }
  return l;
}
function rf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function of(e, t, n) {
  const r = io(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(ns);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[wr + o], a = t[o];
    if (s == null || !a) return e;
    i[wr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = wr + r.atoms + a, f = i[l];
      if (f == null) break;
      const p = parseInt(f.substring(9, 12), 10);
      p !== 1 && p !== 6 || (i[l] = f.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return i.join(ns);
}
function sf(e, t, n) {
  try {
    const r = (s) => jr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = nf(i, r(e), n);
    return o ? of(
      t,
      i.map((s) => rf(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function af(e, t, n, r, i) {
  const o = rs(e, t, r), s = rs(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: sf(o, s, i) };
}
const cf = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, lf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function df() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const _r = df() ? cf : lf, os = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Sr = 420, uf = {
  mapped: null,
  element: ze.modifiedColor,
  uniqueA: ze.destroyedColor,
  uniqueB: ze.createdColor
}, ff = 132, Ue = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Cr = { gap: 2.5, minLiftFraction: 0.6 }, pf = 24, Ft = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function is(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function hf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function mf(e, t, n) {
  const r = [];
  for (let o = 0; o < t.length; o++) {
    const s = t[o] ?? "", a = e.get(o);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: o, b: null, symbolA: s, symbolB: "" });
      continue;
    }
    const l = n[a] ?? "";
    r.push({ kind: s === l ? "mapped" : "element", a: o, b: a, symbolA: s, symbolB: l });
  }
  const i = new Set(e.values());
  for (let o = 0; o < n.length; o++)
    i.has(o) || r.push({ kind: "uniqueB", a: null, b: o, symbolA: "", symbolB: n[o] ?? "" });
  return r;
}
function aa(e, t) {
  const n = Se(t, e.componentA, "SmallMoleculeComponentViz"), r = Se(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: so(t, [e.componentA, e.componentB]) };
}
function gf(e, t, n) {
  const r = [], i = [];
  for (const [s, a] of n) {
    const l = e.coords[s], f = t.coords[a];
    l && f && (r.push(l), i.push(f));
  }
  const o = ef(r, i);
  return o?.determined ? { ...t, coords: t.coords.map((s) => tf(s, o.R, o.t)) } : t;
}
function ss(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function yf(e, t) {
  const n = ss(e), r = ss(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + Cr.gap, a = Cr.minLiftFraction * o + Cr.gap;
  return { axis: i, lift: Math.max(s, a) };
}
function $f(e, t) {
  let n = 0;
  for (const i of [e, t]) {
    let o = 1 / 0;
    for (const s of i)
      s[0] < o && (o = s[0]), s[0] - o > n && (n = s[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Ft.minSpread ? r : Ft.minSpread) * Ft.spreadFactor;
}
function vf(e, t) {
  const n = Id, i = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(i), s = Math.min(o + 1, n.length - 1), a = i - o;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const p = (b) => parseInt(b.slice(1 + f * 2, 3 + f * 2), 16), _ = Math.round(p(n[o]) + (p(n[s]) - p(n[o])) * a);
    l += _.toString(16).padStart(2, "0");
  }
  return l;
}
class bf extends Ee {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = Se(r, n.componentA, "SmallMoleculeComponentViz"), o = Se(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        fe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = tt(i), a = tt(o), l = hf(n);
    let f, p;
    try {
      f = jr(i.sdf, s), p = jr(o.sdf, a);
    } catch (W) {
      return t.appendChild(fe(`Could not read a molecule: ${he(W)}`, !0)), {};
    }
    p = gf(f, p, l);
    const _ = /* @__PURE__ */ new Map();
    for (const [W, q] of l) _.set(q, W);
    const b = is(l, f.symbols, p.symbols), w = is(_, p.symbols, f.symbols), g = Kr(t), $ = N("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild($);
    const u = N("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    $.appendChild(u);
    const v = Ge("atom-mapping.mode", "plain", os.map((W) => W.id));
    let d = v.get();
    const C = N(
      "div",
      ws
    );
    C.appendChild(
      _t(
        os,
        d,
        (W) => {
          d = W, X();
        },
        v
      )
    ), $.appendChild(C);
    let y = [], c = 0, h = !0;
    const m = () => {
      c && cancelAnimationFrame(c), c = 0;
      for (const W of y) {
        W.interaction?.cleanup();
        try {
          W.viewer?.clear();
        } catch {
        }
      }
      y = [], u.replaceChildren();
    }, k = (W) => {
      const q = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), R = N("div", "flex:1;position:relative;min-height:0;");
      R.dataset.gufeViewer = "", q.appendChild(R), g && q.appendChild(N("div", Ar, W)), u.appendChild(q);
      const D = { container: R, viewer: null, interaction: null };
      return y.push(D), D;
    }, x = () => {
      if (y.length < 2) return;
      const W = y.map(() => "");
      let q = !1;
      const R = () => {
        if (h) {
          if (!q)
            for (let D = 0; D < y.length; D++) {
              const O = y[D].viewer;
              if (!O) continue;
              const S = JSON.stringify(O.getView());
              if (S !== W[D]) {
                q = !0;
                for (let E = 0; E < y.length; E++)
                  E !== D && y[E].viewer && (y[E].viewer.setView(O.getView()), y[E].viewer.render()), W[E] = S;
                q = !1;
                break;
              }
            }
          c = requestAnimationFrame(R);
        }
      };
      c = requestAnimationFrame(R);
    }, F = (W, q) => {
      const R = Qe.createViewer(W.container, { backgroundColor: ct.viewer });
      for (const { mol: D } of q) R.addModel(Ou(D), "sdf");
      return W.viewer = R, R;
    }, M = (W) => {
      W.viewer && (W.interaction = nr(W.container, W.viewer));
    }, j = () => {
      for (const W of [f, p]) {
        const q = k(W.name), R = F(q, [{ mol: W }]);
        R.setStyle(
          {},
          { stick: { radius: Ue.stick, colorscheme: "Jmol" }, sphere: { scale: Ue.sphere, colorscheme: "Jmol" } }
        ), R.zoomTo(), R.render(), M(q);
      }
      x();
    }, L = () => {
      const W = ze, q = Bi(W.customSpec), R = [
        { mol: f, uniques: b, side: "left", custom: q.left },
        { mol: p, uniques: w, side: "right", custom: q.right }
      ];
      for (const D of R) {
        const O = k(D.mol.name), S = F(O, [{ mol: D.mol }]);
        S.setStyle(
          {},
          { stick: { radius: Ue.stick, color: _r.core }, sphere: { scale: Ue.sphere, color: _r.core } }
        );
        const E = (I, V) => {
          S.addStyle(
            { serial: I },
            {
              stick: { radius: Ue.markStick, color: Ui(V) },
              sphere: { scale: Ue.markSphere, color: Ui(V) }
            }
          );
        };
        for (const I of Hi(W, D.mol, D.uniques, D.side))
          for (const V of I.atoms) E(V, I.color);
        for (const I of D.custom)
          I < D.mol.symbols.length && E(I, W.customColor);
        S.zoomTo(), S.render(), M(O);
      }
      x();
    }, z = () => {
      const W = k(`${s} (left), both overlaid (middle), ${a} (right)`), q = $f(f.coords, p.coords), R = (re, ee) => ({
        ...re,
        coords: re.coords.map(([P, T, B]) => [P + ee, T, B])
      }), D = R(f, -q), O = R(p, q), S = F(W, [{ mol: D }, { mol: O }, { mol: f }, { mol: p }]);
      S.setStyle({}, { stick: {} });
      const E = Array.from(l);
      E.forEach(([re, ee], P) => {
        const T = D.coords[re], B = O.coords[ee];
        if (!T || !B) return;
        const J = vf(P, E.length);
        for (const [H, Q, ne] of [T, B])
          S.addSphere({
            center: { x: H, y: Q, z: ne },
            radius: Ft.sphereRadius,
            color: J,
            alpha: Ft.sphereAlpha
          });
      }), S.zoomTo();
      const { clientWidth: I, clientHeight: V } = W.container, K = I - 2 * pf;
      K > 0 && K < V && S.zoom(K / V), S.render(), M(W);
    }, G = () => {
      const W = k(`${s} to ${a}  (${l.size} mapped pairs)`), { axis: q, lift: R } = yf(f.coords, p.coords), D = {
        ...p,
        coords: p.coords.map((E) => {
          const I = [E[0], E[1], E[2]];
          return I[q] += R, I;
        })
      }, O = F(W, [{ mol: f }, { mol: D }]), S = {
        stick: { radius: Ue.stick, colorscheme: "Jmol" },
        sphere: { scale: Ue.pairSphere, colorscheme: "Jmol" }
      };
      O.setStyle({ model: 0 }, S), O.setStyle({ model: 1 }, S);
      for (const [E, I] of l) {
        const V = f.coords[E], K = D.coords[I];
        !V || !K || O.addCylinder({
          start: { x: V[0], y: V[1], z: V[2] },
          end: { x: K[0], y: K[1], z: K[2] },
          radius: Ue.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: _r.pairLine
        });
      }
      O.zoomTo(), q === 2 ? O.rotate(90, "x") : q === 0 && O.rotate(-90, "z"), O.render(), M(W);
    }, Y = () => {
      const W = ze, q = Bi(W.customSpec), D = [
        { mol: f, uniques: b, side: "left", custom: q.left },
        { mol: p, uniques: w, side: "right", custom: q.right }
      ].map((O) => {
        const S = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), E = N(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${ct.canvas2D};`
        );
        return E.appendChild(fe("Loading 2D depiction...")), S.appendChild(E), g && S.appendChild(N("div", Ar, O.mol.name)), u.appendChild(S), { box: E, side: O };
      });
      tr().then((O) => {
        const S = Su(W, O), E = af(O, i.sdf, o.sdf, W.layout, W.alignPair ? l : null);
        for (const { box: I, side: V } of D) {
          const K = Hi(W, V.mol, V.uniques, V.side), re = Cu(
            W,
            Sr,
            K,
            V.custom,
            S,
            V.mol.symbols.length
          ), ee = ku(O, V.side === "left" ? E.left : E.right, Sr, re);
          if (I.replaceChildren(), !ee) {
            I.appendChild(fe("Failed to parse molecule", !0));
            continue;
          }
          Ys(I, ee, Sr);
          const P = I.querySelector("svg");
          P && Mu(P, V.mol, W, K, V.custom, S);
        }
      }).catch((O) => {
        for (const { box: S } of D)
          S.replaceChildren(fe(`RDKit failed to load: ${he(O)}`, !0));
      });
    }, oe = () => {
      const W = N(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(W);
      const q = N("div", "display:flex;flex-direction:column;gap:2px;");
      q.appendChild(
        N(
          "div",
          `font-size:${Z.title};font-weight:${$e.bold};color:${je.title};`,
          n.name || `${s} to ${a}`
        )
      ), W.appendChild(q);
      const R = mf(l, f.symbols, p.symbols), D = N("div", Re.row), O = [];
      let S = null;
      const E = (H, Q, ne, ue) => {
        const le = N("button", `${Re.plain}${Re.button}`);
        le.type = "button", le.appendChild(Ne(H, String(Q), ue)), le.onclick = () => {
          S = S === ne ? null : ne, B();
        }, O.push({ button: le, kinds: ne }), D.appendChild(le);
      }, I = (H, Q) => {
        const ne = N("span", Re.plain);
        ne.appendChild(Ne(H, Q)), D.appendChild(ne);
      };
      E("mapped atoms", l.size, ["mapped", "element"]), E("element changes", b.elements.length, ["element"], ze.modifiedColor), E(`unique to ${s}`, b.atoms.length, ["uniqueA"], ze.destroyedColor), E(`unique to ${a}`, w.atoms.length, ["uniqueB"], ze.createdColor), I(`atoms in ${s}`, String(f.symbols.length)), I(`atoms in ${a}`, String(p.symbols.length)), I("score", n.score == null ? st : n.score.toFixed(3)), W.appendChild(D), W.appendChild(N("div", Rr, "Correspondence"));
      const V = N("div", Mr);
      W.appendChild(V);
      const K = N(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${ff}px,1fr));gap:${te.xs} ${te.md};font-family:${Z.mono};font-size:${Z.small};color:${je.primary};`
      );
      W.appendChild(K);
      const re = String(Math.max(f.symbols.length, p.symbols.length, 1) - 1).length, ee = (H, Q) => `${(H == null ? st : String(H)).padStart(re)} ${Q.padEnd(2)}`, P = (H) => {
        if (H.kind === "uniqueA") return `${s} atom ${H.a} ${H.symbolA} maps to nothing`;
        if (H.kind === "uniqueB") return `${a} atom ${H.b} ${H.symbolB} maps to nothing`;
        const Q = H.kind === "element" ? ", an element change" : "";
        return `${s} atom ${H.a} ${H.symbolA} maps to ${a} atom ${H.b} ${H.symbolB}${Q}`;
      }, T = (H) => {
        const Q = N(
          "div",
          `white-space:pre;padding:${te.xs} ${te.md};border-radius:${Ie.sm};background:${ct.card};border-left:3px solid ${uf[H.kind] ?? "transparent"};`,
          `${ee(H.a, H.symbolA)} -> ${ee(H.b, H.symbolB)}`
        );
        return Q.title = P(H), Q.dataset.gufeRelation = H.kind, Q;
      }, B = () => {
        const H = S, Q = H ? R.filter((ne) => H.includes(ne.kind)) : R;
        K.replaceChildren(...Q.map(T)), Q.length || K.appendChild(
          N("div", `${Mr}grid-column:1/-1;`, S ? "No atoms of that kind." : "This mapping has no atoms.")
        ), V.textContent = (l.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (S ? "; click the chip again for all of them" : "");
        for (const ne of O) {
          const ue = ne.kinds === S;
          ne.button.style.cssText = `${Re.plain}${ue ? Re.active : Re.button}`, ne.button.setAttribute("aria-pressed", String(ue)), ne.button.title = ue ? "Show every atom" : "Show only these atoms";
        }
      };
      B();
      const J = Object.entries(n.annotations ?? {}).filter(([H]) => H !== "score");
      if (J.length) {
        W.appendChild(N("div", Rr, "Annotations"));
        const H = N("div", `${ma}color:${je.faint};`);
        for (const [Q, ne] of J)
          H.appendChild(N("div", "", `${Q}: ${String(ne)}`));
        W.appendChild(H);
      }
    }, X = () => {
      if (m(), d === "info") {
        oe();
        return;
      }
      if (d === "2d") {
        Y();
        return;
      }
      u.appendChild(fe("Loading 3D viewer...")), er().then(() => {
        h && (u.replaceChildren(), d === "colored" ? L() : d === "openfe" ? z() : d === "lines" ? G() : j());
      }).catch((W) => {
        u.replaceChildren(fe(`3D render failed: ${he(W)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const W of y)
          W.viewer && (W.viewer.resize(), W.viewer.render());
      },
      cleanup() {
        h = !1, m();
      }
    };
  }
}
xe("gufe-atom-mapping", bf);
const as = ["Force-directed", "Circular", "Radial"], wf = "ligand-network", _f = "Click a ligand or an edge to see it.";
function Sf(e) {
  const { index: t, from: n, to: r, ...i } = e;
  return i;
}
function Cf(e) {
  return oa(e);
}
const cs = (e) => Math.round(e * 100) / 100;
function kf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const i = r(n.selected) ? Math.trunc(n.selected) : -1, o = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: i, selectedKind: o };
}
function Ef(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Mt = { initial: 0.58, min: 0.25, max: 0.8 }, Me = 38, jn = 200, xf = 4, Pf = 14, Af = 18, _e = {
  fontSize: 11,
  below: Me + 12,
  minFontSize: 7,
  insideWidth: (Me - 6) * 2
}, Tt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, ls = 1.5, Rf = 6.5, Mf = 0.9, Nf = 14, kr = { size: 8, clearance: 8 }, Of = { fontSize: 10 }, Tf = 0.4, Ff = Fr(A.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, zf = 3, wt = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], jf = (e) => wt.find((t) => e >= t.from) ?? wt[wt.length - 1], If = (e) => wt[Math.min(wt.indexOf(e) + 1, wt.length - 1)], In = 200, Df = 24, Er = { node: 0.12, edge: 0.06 }, Lf = 1.8, ds = 2 * Me + 68, Ce = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: ds,
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
  collisionPadding: ds / 2 - Me,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function qf(e) {
  const t = N(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${A.tooltipBg};border:1px solid ${A.tooltipBorder};color:${A.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
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
function Vf(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const o = ce("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Me + kr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: kr.size,
      markerHeight: kr.size,
      orient: "auto"
    });
    return o.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function Bf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Uf(e) {
  const [t, n] = A.netEdgeRamp.map(Bf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const He = tt, Hf = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e, Kf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), Gf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Wf = (e) => Gf.has(Kf(e));
function Jf(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], i = (g) => (e.matched().get(g) ?? []).join(","), o = (g, $) => {
    if (t.has($) || n.has($)) return;
    const u = e.nodes[$], v = e.matched().get($), d = u.sdf && Js(
      g,
      u.sdf,
      jn,
      ze.layout,
      v && { atoms: v, color: Ff, radius: Tf }
    );
    if (!d) {
      n.add($);
      return;
    }
    const C = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!C || C.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const y = (Me - xf) * 2 / jn, c = e.depictionGroups[$];
    c.setAttribute(
      "transform",
      `translate(${-y * jn / 2},${-y * jn / 2}) scale(${y})`
    );
    let h = 0;
    for (const m of Array.from(C.childNodes)) {
      if (m.nodeType !== 1) continue;
      const k = m.nodeName.toLowerCase();
      k === "defs" || k === "metadata" || k === "title" || k === "rect" && Wf(m) || (c.appendChild(document.importNode(m, !0)), h++);
    }
    h ? (t.add($), r[$] = i($)) : n.add($);
  }, s = () => {
    for (const g of [...t])
      r[g] !== i(g) && (e.depictionGroups[g].replaceChildren(), t.delete(g));
  }, a = [], l = (g, $) => {
    if (a[g]) return a[g];
    $.setAttribute("font-size", String(_e.fontSize));
    let u = 0;
    try {
      u = $.getBBox().width;
    } catch {
      return _e.fontSize;
    }
    if (!u) return _e.fontSize;
    const v = _e.fontSize * _e.insideWidth / u;
    return a[g] = Math.max(_e.minFontSize, Math.min(_e.fontSize, v)), a[g];
  }, f = [], p = (g) => {
    const $ = e.captionPlates[g];
    if (f[g] === _e.below) {
      $.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[g].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      $.setAttribute("display", "none");
      return;
    }
    $.setAttribute("x", String(u.x - Tt.captionPadX)), $.setAttribute("y", String(u.y - Tt.captionPadY)), $.setAttribute("width", String(u.width + Tt.captionPadX * 2)), $.setAttribute("height", String(u.height + Tt.captionPadY * 2)), $.setAttribute("display", "inline"), f[g] = _e.below;
  }, _ = (g, $) => {
    const u = $.structure && !t.has(g) ? If($) : $;
    e.depictionGroups[g].setAttribute("display", u.structure ? "inline" : "none"), e.plates[g].setAttribute("display", u.structure ? "inline" : "none");
    const v = e.matched().has(g), d = e.circles[g];
    d.setAttribute("fill", u.disc ? v ? A.netMatchFill : A.netNodeFill : "none"), d.setAttribute("stroke", u.disc ? v ? A.netMatchStroke : A.netNodeStroke : "none"), e.initials[g].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[g], y = u.name === "below";
    if (C.setAttribute("fill", v ? A.netMatchStroke : y ? A.netDepictCaption : A.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), y || e.captionPlates[g].setAttribute("display", "none"), u.name === "none") return;
    const c = u.name === "inside";
    C.setAttribute("y", c ? "0" : String(_e.below)), C.setAttribute("dominant-baseline", c ? "middle" : "auto"), C.setAttribute("font-size", String(c ? l(g, C) : _e.fontSize)), y && p(g);
  };
  let b = null;
  return { apply: (g, $, u) => {
    const v = jf(g);
    b = v, e.stage.setAttribute("data-detail", v.id), e.edgeLabels.setAttribute("display", v.edgeScores ? "inline" : "none");
    for (let c = 0; c < e.nodes.length; c++) _(c, v);
    if (!v.structure) return;
    const { width: d, height: C } = e.viewport(), y = [];
    e.nodes.forEach((c, h) => {
      if (t.has(h) || n.has(h)) return;
      const m = c.x * g + $, k = c.y * g + u;
      m < -In || k < -In || m > d + In || k > C + In || y.push(h);
    }), y.length && e.rdkit().then((c) => {
      if (!(!c || b !== v))
        for (const h of y)
          o(c, h), _(h, v);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function Yf(e) {
  const t = bt("ligand-network.query"), n = Vr("ligand-network.minScore", 0, 0, 1), r = N("div", $s), i = N("input", `${Gn}width:100%;box-sizing:border-box;`);
  i.type = "search", i.placeholder = "Search ligands", i.value = t.get(), e.query.text = i.value, i.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(i);
  const o = sa({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: bt("ligand-network.smarts"),
    run: ($) => e.match($),
    describe: ($) => {
      const u = $.unreadable ? `, ${$.unreadable} could not be read` : "";
      return `${$.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(o.element);
  const s = N("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${A.textMuted};`), a = N("span", `min-width:28px;color:${A.textPrimary};`, "0.00"), l = N("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(N("span", "", "score >=")), s.appendChild(l), s.appendChild(a), r.appendChild(s);
  const f = N("div", `font-size:${Z.small};color:${A.textMuted2};`);
  r.appendChild(f);
  const p = N("div", vs);
  r.appendChild(p), r.appendChild(N("div", `font-size:${Z.tiny};line-height:1.5;color:${A.textMuted2};`, ao));
  const _ = ea({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild(_.box);
  const b = N("button", `${St}width:100%;`, "Clear selection");
  b.onclick = () => {
    e.selected.clear(), g(), e.refresh();
  }, r.appendChild(b);
  const w = ($) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? He($).toLowerCase().includes(u) || ($.smiles ?? "").toLowerCase().includes(u) || $["gufe-key"].toLowerCase().includes(u) : !0;
  }, g = () => {
    _.clearNote(), p.replaceChildren();
    const $ = e.nodes.map((u, v) => ({ node: u, index: v })).filter(({ node: u }) => w(u));
    f.textContent = `${$.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: v } of $) {
      const d = u["gufe-key"], C = N(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? A.cardBorderActive : A.cardBorder};background:${e.selected.has(d) ? A.cardBgActive : A.cardBg};color:${A.textPrimary};`
      ), y = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", He(u));
      y.title = `${He(u)}
${u.smiles ?? ""}`, C.appendChild(y), C.onclick = (c) => {
        c.shiftKey || c.metaKey || c.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(v)), g(), e.refresh();
      }, p.appendChild(C);
    }
    $.length || p.appendChild(N("div", `font-size:${Z.small};padding:8px;color:${A.textMuted2};`, "Nothing matches."));
  };
  return i.oninput = () => {
    e.query.text = i.value, t.set(i.value), g(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, g(), o.apply(), r;
}
class Xf extends Ee {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = [];
    let o = 0;
    for (const P of n.nodes ?? []) {
      const T = Se(r, P, "SmallMoleculeComponentViz");
      if (!T) {
        o++;
        continue;
      }
      i.push({ ...T, x: 0, y: 0 });
    }
    const s = new Map(i.map((P) => [P["gufe-key"], P])), a = [];
    let l = 0;
    for (const P of n.edges ?? []) {
      const T = s.get(P.componentA), B = s.get(P.componentB);
      if (!T || !B) {
        l++;
        continue;
      }
      a.push({ ...P, index: a.length, from: T, to: B });
    }
    const f = Ct(n.name || "Ligand network");
    f.statsEl.appendChild(Ne("ligands", String(i.length))), f.statsEl.appendChild(Ne("mappings", String(a.length))), t.appendChild(f);
    const p = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const _ = /* @__PURE__ */ new Set(), b = { minScore: 0 }, w = { text: "" };
    let g = () => {
    }, $ = null;
    const u = () => $ ??= tr().catch((P) => (console.warn("[gufe-viz] RDKit failed to load:", he(P)), null)), v = ia(
      u,
      i.map((P) => P.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), C = () => {
    };
    const y = async (P) => {
      const T = await v.run(P);
      return T.status === "superseded" || (d = T.status === "ok" ? T.matched : /* @__PURE__ */ new Map(), C()), T;
    }, c = Rs(
      f,
      () => Yf({
        nodes: i,
        edges: a,
        selected: _,
        filter: b,
        query: w,
        refresh: () => g(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (P) => {
          G(P), re({ kind: "ligand", index: P });
        },
        match: (P) => y(P)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => ee(),
        remember: We("ligand-network.menuOpen", !1)
      }
    );
    c.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", p.appendChild(c.panel);
    let h = () => {
    };
    const m = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${A.netCanvasBg};`), k = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${A.appBg};`);
    p.appendChild(m), p.appendChild(
      xs(p, m, k, {
        min: Mt.min,
        max: Mt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Vr("ligand-network.canvasShare", Mt.initial, Mt.min, Mt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (P) => Ps(c.panel, P)
      })
    ), p.appendChild(k);
    const x = N("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${A.netCanvasBg};`);
    m.appendChild(x);
    const F = Ge("ligand-network.layout", "Force-directed", as), M = this.#n(
      (P) => ee(P),
      () => I(),
      F
    );
    m.appendChild(M.bar);
    const j = this.#e(k, r);
    if (!i.length)
      return x.appendChild(
        fe(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), j.message("Nothing to show."), {};
    o && lt(
      x,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && lt(x, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const L = u(), z = qf(x);
    let G = () => {
    };
    const Y = kf(Sa(wf), i.length);
    let oe = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const P = Y.selectedKind ?? "edge";
      Y.selected < (P === "ligand" ? i.length : a.length) && (X = { kind: P, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, R = null, D = F.get(), O = !1, S = !0, E = () => {
    }, I = () => {
    }, V = 0;
    const K = () => {
      if (!X) {
        j.message(a.length ? _f : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? j.showMapping(a[X.index]) : j.showLigand(i[X.index]);
    }, re = (P) => {
      X = P, K(), E();
    }, ee = (P = D) => {
      const T = q && P === D ? W() : null, B = ++V;
      D = P, R?.(), R = null, x.querySelectorAll("svg").forEach((ne) => ne.remove());
      const J = x.clientWidth || 800, H = x.clientHeight || 600;
      Zf(i, J, H, D, a), Y && Ef(i, Y.nodes);
      const Q = () => {
        if (!S || B !== V) return;
        const ne = this.#t(x, i, a, J, H, re, L, z);
        E = () => ne.setSelected(X), I = ne.reset, R = ne.cleanup, G = (le) => ne.focusOn(le), W = ne.transform, g = () => {
          const le = w.text.trim().toLowerCase(), me = _.size > 0 || le.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Pe of i) {
            const Le = Pe["gufe-key"], nt = _.has(Le) || le.length > 0 && (He(Pe).toLowerCase().includes(le) || (Pe.smiles ?? "").toLowerCase().includes(le) || Le.toLowerCase().includes(le));
            (!me || nt) && pe.add(Le);
          }
          const De = /* @__PURE__ */ new Set();
          a.forEach((Pe, Le) => {
            (Pe.score ?? 0) < b.minScore || !pe.has(Pe.from["gufe-key"]) || !pe.has(Pe.to["gufe-key"]) || De.add(Le);
          });
          const ve = me || b.minScore > 0;
          ne.setEmphasis(ve ? pe : null, ve ? De : null);
        }, C = () => ne.setMatches(d), E(), g(), C();
        const ue = oe ?? T;
        ue ? (ne.setTransform(ue.scale, ue.tx, ue.ty), oe = null) : ne.fit(), q = !0;
      };
      if (D !== "Force-directed" || O || Y) {
        Q();
        return;
      }
      Qf(i, a, J, H).then((ne) => {
        if (!(!S || B !== V)) {
          if (ne) {
            Q();
            return;
          }
          O = !0, M.picker.value = "Circular", lt(x, "d3 could not be loaded - showing the circular layout instead"), ee("Circular");
        }
      }, Q);
    };
    return h = () => ee(), ee(), K(), {
      onResize: () => ee(),
      cleanup: () => {
        S = !1, v.cancel(), z.remove(), R?.();
      },
      viewState: () => ({
        nodes: i.map((P) => [cs(P.x), cs(P.y)]),
        ...W(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const i = N(
      "div",
      Hn.bottom
    ), o = N("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${A.textMuted};`);
    o.appendChild(N("span", "", "score")), o.appendChild(
      N(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${A.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(N("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(N("label", `font-size:${Z.body};margin-left:auto;color:${A.textMuted};`, "Layout"));
    const s = jt(
      as.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(rr(n, "Reset pan and zoom")), { bar: i, picker: s };
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
    const r = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = (s) => r.replaceChildren(fe(s)), o = (s, a) => {
      const l = document.createElement(s);
      l.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", l.payload = a, r.replaceChildren(l);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => o("gufe-atom-mapping", aa(Sf(s), n)),
      showLigand: (s) => o("gufe-small-molecule", Cf(s)),
      message: i
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, i, o, s, a, l) {
    const f = ce("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), p = ce("g");
    f.appendChild(p), t.appendChild(f);
    const _ = ce("defs"), b = Vf(_);
    f.appendChild(_);
    const w = [], g = ce("g"), $ = ce("g"), u = ce("g", { "pointer-events": "none" }), v = ce("g");
    p.append(g, $, u, v);
    for (const z of r) {
      const G = Uf(z.score), Y = ls + (z.score ?? 0.5) * (Rf - ls), oe = ce("line", {
        stroke: A.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = ce("line", {
        stroke: G,
        "stroke-width": Y,
        "stroke-opacity": Mf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(G)})`,
        "pointer-events": "none"
      }), W = ce("line", { stroke: "transparent", "stroke-width": Nf, style: "cursor:pointer;" });
      W.addEventListener("click", (D) => {
        D.stopPropagation(), s({ kind: "edge", index: z.index });
      }), W.addEventListener("mousemove", (D) => {
        l.show(
          `<div style="font-weight:700;color:${A.titleColor};">${Ke(He(z.from))} -&gt; ${Ke(He(z.to))}</div>` + (z.score == null ? `<div style="color:${A.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${z.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${A.textMuted2};">Click to see the mapping</div>`,
          D.offsetX,
          D.offsetY
        );
      }), W.addEventListener("mouseleave", () => l.hide()), w.push(oe), g.append(oe, X), $.appendChild(W);
      const q = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Of.fontSize,
        "font-weight": 600,
        fill: A.netEdgeLabel
      });
      q.textContent = z.score == null ? "" : z.score.toFixed(2);
      const R = ce("g", { class: "gufe-edge-label" });
      R.appendChild(q), u.appendChild(R);
    }
    const d = [], C = [], y = [], c = [], h = [], m = [], k = [], x = n.map((z) => {
      const G = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      G.addEventListener("mousemove", (O) => {
        l.show(
          `<div style="font-weight:700;color:${A.titleColor};">${Ke(He(z))}</div>` + (z.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ke(z.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${A.textMuted2};overflow-wrap:anywhere;">${Ke(z["gufe-key"])}</div><div style="margin-top:4px;font-size:${Z.tiny};color:${A.textMuted2};">Click to see the ligand</div>`,
          O.offsetX,
          O.offsetY
        );
      }), G.addEventListener("mouseleave", () => l.hide());
      const Y = ce("circle", {
        class: "gufe-node-halo",
        r: Me + Nt.padding,
        fill: "none",
        stroke: A.netHaloColor,
        "stroke-width": Nt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      G.appendChild(Y), h.push(Y);
      const oe = ce("circle", {
        class: "gufe-node-disc",
        r: Me,
        fill: A.netNodeFill,
        stroke: A.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      G.appendChild(oe), C.push(oe);
      const X = ce("circle", {
        class: "gufe-node-plate",
        r: Me,
        fill: A.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      G.appendChild(X), y.push(X);
      const W = ce("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      G.appendChild(W), d.push(W);
      const q = ce("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Af,
        "font-weight": 700,
        fill: A.netInitials,
        "pointer-events": "none"
      });
      q.textContent = He(z).slice(0, 2).toUpperCase(), G.appendChild(q), m.push(q);
      const R = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: _e.below,
        "font-size": _e.fontSize,
        "font-weight": 600,
        fill: A.netNodeCaption,
        "pointer-events": "none"
      });
      R.textContent = Hf(He(z), Pf), R.setAttribute("display", "none"), k.push(R);
      const D = ce("rect", {
        class: "gufe-node-caption-plate",
        rx: Tt.captionRadius,
        fill: A.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return c.push(D), G.appendChild(D), G.appendChild(R), v.appendChild(G), G;
    }), F = () => {
      r.forEach((z, G) => {
        for (const oe of [w[G], g.children[G * 2 + 1], $.children[G]]) {
          const X = oe;
          X.setAttribute("x1", String(z.from.x)), X.setAttribute("y1", String(z.from.y)), X.setAttribute("x2", String(z.to.x)), X.setAttribute("y2", String(z.to.y));
        }
        u.children[G].setAttribute(
          "transform",
          `translate(${(z.from.x + z.to.x) / 2},${(z.from.y + z.to.y) / 2 - 8})`
        );
      }), n.forEach((z, G) => x[G].setAttribute("transform", `translate(${z.x},${z.y})`));
    };
    F();
    let M = /* @__PURE__ */ new Map();
    const j = Jf({
      nodes: n,
      circles: C,
      plates: y,
      captionPlates: c,
      matched: () => M,
      captions: k,
      initials: m,
      depictionGroups: d,
      edgeLabels: u,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), L = this.#r(
      f,
      p,
      n,
      x,
      F,
      j.apply,
      (z) => s({ kind: "ligand", index: z })
    );
    return {
      setSelected(z) {
        const G = z?.kind === "edge" ? z.index : -1, Y = z?.kind === "ligand" ? z.index : -1;
        w.forEach((oe, X) => oe.setAttribute("opacity", X === G ? String(Nt.opacity) : "0")), h.forEach((oe, X) => oe.setAttribute("opacity", X === Y ? String(Nt.opacity) : "0"));
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
        M = z, j.forget();
        const { scale: G, tx: Y, ty: oe } = L.transform();
        j.apply(G, Y, oe);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(z, G) {
        x.forEach((Y, oe) => {
          const X = !z || z.has(n[oe]["gufe-key"]);
          Y.setAttribute("opacity", X ? "1" : String(Er.node));
        }), r.forEach((Y, oe) => {
          const X = !G || G.has(oe), W = X ? "0.9" : String(Er.edge);
          g.children[oe * 2 + 1].setAttribute("stroke-opacity", W), u.children[oe].setAttribute("opacity", X ? "1" : String(Er.edge));
        });
      },
      focusOn(z) {
        const G = n[z];
        G && L.centreOn(G.x, G.y);
      },
      setDetail: j.apply,
      depictionsDrawn: () => j.drawn(),
      fit: L.fit,
      reset: L.reset,
      transform: L.transform,
      setTransform: L.setTransform,
      cleanup: L.cleanup
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
  #r(t, n, r, i, o, s, a) {
    const l = ra(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => na(r, Me),
      margin: Df,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return i.forEach((f, p) => {
      let _ = null, b = !1;
      f.addEventListener("pointerdown", (g) => {
        g.stopPropagation();
        const { scale: $ } = l.transform();
        _ = { x: g.clientX - r[p].x * $, y: g.clientY - r[p].y * $ }, b = !1, f.setPointerCapture(g.pointerId);
      }), f.addEventListener("pointermove", (g) => {
        if (!_) return;
        if (l.gesturing()) {
          _ = null, b = !0;
          return;
        }
        const { scale: $ } = l.transform(), u = (g.clientX - _.x) / $, v = (g.clientY - _.y) / $;
        Math.hypot(u - r[p].x, v - r[p].y) * $ > zf && (b = !0), r[p].x = r[p].fx = u, r[p].y = r[p].fy = v, o();
      });
      const w = () => {
        _ = null;
      };
      f.addEventListener("pointerup", w), f.addEventListener("pointercancel", w), f.addEventListener("click", (g) => {
        g.stopPropagation(), b || a(p);
      });
    }), {
      ...l,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (f, p) => l.centreOn(f, p, Lf)
    };
  }
}
function Zf(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (l, f) => {
    l.forEach((p, _) => {
      const b = 2 * Math.PI * _ / Math.max(1, l.length) - Math.PI / 2;
      p.x = o + f * Math.cos(b), p.y = s + f * Math.sin(b), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map(($) => [$["gufe-key"], []]));
    for (const $ of i)
      l.get($.from["gufe-key"]).push($.to["gufe-key"]), l.get($.to["gufe-key"]).push($.from["gufe-key"]);
    const f = new Map(e.map(($) => [$["gufe-key"], $])), p = e.reduce(
      ($, u) => l.get(u["gufe-key"]).length > l.get($["gufe-key"]).length ? u : $
    ), _ = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let b = [p["gufe-key"]], w = 0;
    const g = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      a(
        b.map((u) => f.get(u)),
        w === 0 ? 0 : w * g + 40
      );
      const $ = [];
      for (const u of b)
        for (const v of l.get(u))
          _.has(v) || (_.add(v), $.push(v));
      b = $, w++;
    }
    a(e.filter(($) => !_.has($["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Qf(e, t, n, r) {
  let i;
  try {
    if (i = await Bs(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance((l) => Ce.linkBaseDistance + (1 - (l.score ?? 0.5)) * Ce.linkScoreBonus).strength(Ce.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(Ce.chargeStrength).distanceMin(Ce.chargeDistanceMin).distanceMax(Ce.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(Ce.centerStrength)).force("collision", i.forceCollide(Me + Ce.collisionPadding).iterations(Ce.collisionIterations)).force("x", i.forceX(n / 2).strength(Ce.drift)).force("y", i.forceY(r / 2).strength(Ce.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * Ce.tickMultiplier; l++) s.tick();
  return !0;
}
xe("gufe-ligand-network", Xf);
const ep = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function ca(e, t) {
  const n = [], r = [];
  for (const i of Object.values(e.components ?? {})) {
    const o = Je(t, i);
    o && (ep.includes(o.type) ? n.push(o) : o.type === "SmallMoleculeComponentViz" && r.push(o));
  }
  return { structures: n, ligands: r };
}
function tp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const us = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], fs = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], ps = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], np = 0.4;
class rp extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = ca(n, kt(n)), i = r.structures.map((M, j) => j), o = r.ligands.map((M, j) => r.structures.length + j), s = Ge(
      "protein.representation",
      "cartoon",
      us.map((M) => M.id)
    ), a = Ge(
      "protein.color",
      "chain",
      fs.map((M) => M.id)
    ), l = We("protein.waters", !1), f = We("protein.hetero", !0), p = We("protein.spin", !1), _ = Ge(
      "complex.focus",
      "site",
      ps.map((M) => M.id)
    ), b = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: p.get()
    };
    let w = _.get(), g = null, $ = null, u = null;
    const v = N("div", Hn.top);
    t.appendChild(v), Kr(this) && v.appendChild(
      N(
        "span",
        `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${A.titleColor};`,
        n.name || "Complex"
      )
    );
    const d = (M) => N("span", `font-size:${Z.small};color:${A.textMuted};`, M);
    v.appendChild(d("Style:")), v.appendChild(
      _t(
        us,
        b.rep,
        (M) => {
          b.rep = M, x();
        },
        s
      )
    ), v.appendChild(d("Color:")), v.appendChild(
      jt(
        fs,
        b.color,
        (M) => {
          b.color = M, x();
        },
        a
      )
    ), v.appendChild(d("Focus:")), v.appendChild(
      _t(
        ps,
        w,
        (M) => {
          w = M, F();
        },
        _
      )
    );
    const C = N("div", "display:flex;gap:4px;");
    v.appendChild(C);
    const y = [
      ["waters", "Waters", "Show water molecules", l, () => x()],
      ["hetero", "Hetero", "Show hetero atoms / ions / lipids in the structure", f, () => x()],
      ["spin", "Spin", "Rotate the view continuously", p, () => g?.spin(b.spin ? "y" : !1)]
    ];
    for (const [M, j, L, z, G] of y)
      C.appendChild(
        Br(
          j,
          b[M],
          (Y) => {
            b[M] = Y, G();
          },
          { title: L, remember: z }
        )
      );
    C.appendChild(rr(() => F(), "Reset view"));
    const c = N("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${A.textMuted2};`);
    v.appendChild(c);
    const h = Hr();
    t.appendChild(h.wrap);
    const m = N(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
    );
    h.wrap.appendChild(m);
    const k = (M, j) => {
      if (M == null) {
        m.style.display = "none";
        return;
      }
      m.textContent = M, m.style.display = "block";
      const L = j === "error";
      m.style.background = L ? A.warnBg : A.toolbarBg, m.style.color = L ? A.warnFg : A.textMuted, m.style.border = `1px solid ${L ? A.warnBorder : A.toolbarBorder}`;
    };
    function x() {
      g && (Dr(g, b, u, k, { model: i }), Iu(g, { model: o }), g.render());
    }
    function F() {
      g && (w === "site" && o.length ? (g.zoomTo({ model: o }), g.zoom(np)) : g.zoomTo(), g.render(), $?.cleanup(), $ = nr(h.container, g));
    }
    if (!r.structures.length || !r.ligands.length)
      return k("This system has no ligand and structure to draw together."), {};
    c.textContent = hs(r, () => u);
    try {
      u = Zs(r.structures[0].pdb), c.textContent = hs(r, () => u);
    } catch (M) {
      k(`PDB parse error: ${he(M)}`, "error");
    }
    return k("Loading 3D viewer..."), er().then(() => {
      g = Qe.createViewer(h.container, { backgroundColor: ct.viewer });
      for (const M of r.structures) g.addModel(M.pdb, "pdb");
      for (const M of r.ligands) g.addModel(Ws(M.sdf), "sdf");
      x(), F(), g.spin(b.spin ? "y" : !1), g.render();
    }).catch((M) => {
      k(`Failed to render structure: ${he(M)}`, "error");
    }), {
      onResize() {
        g && (g.resize(), g.render());
      },
      cleanup() {
        if ($?.cleanup(), $ = null, !!g) {
          try {
            g.spin(!1);
          } catch {
          }
          try {
            g.clear();
          } catch {
          }
          g = null;
        }
      }
    };
  }
}
function hs(e, t) {
  const n = e.ligands.reduce((o, s) => {
    const a = io(s.sdf);
    return a ? o + a.atoms : o;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, i = t();
  return i ? `${r} | ${Qs(i)}` : r;
}
xe("gufe-complex", rp);
function op(e, t) {
  return { ...e, registry: so(t, Object.values(e.components ?? {})) };
}
const ip = "chemical-system.component";
function sp(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function ap(e) {
  return e.type === "UnknownComponentViz" ? Wn(e.gufe_type) : null;
}
class cp extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = [], o = [];
    for (const [m, k] of Object.entries(n.components ?? {})) {
      const x = Je(r, k);
      x ? i.push([m, x]) : o.push(m);
    }
    const s = Ct(n.name || "Chemical system");
    if (s.statsEl.appendChild(Ne("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        fe(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = N("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:column;");
    t.appendChild(a), o.length && lt(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const l = N(
      "div",
      `flex:0 0 auto;min-width:0;overflow-x:auto;display:flex;flex-direction:row;gap:6px;padding:10px;background:${A.panelBg};border-bottom:1px solid ${A.splitBorder};`
    );
    a.appendChild(l);
    const f = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(f);
    const p = N("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(p);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", _.setAttribute(Nr, ""), p.appendChild(_);
    const b = ca(n, r), w = tp(b), g = (m) => w && b.structures.some((k) => k === m), $ = i.filter(([, m]) => !g(m)).map(([m, k]) => ({
      key: m,
      title: m,
      subtitle: sp(k),
      badge: ap(k),
      element: _,
      point: () => {
        _.payload = k;
      }
    }));
    if (w) {
      const m = document.createElement("gufe-complex");
      m.style.cssText = "flex:1;min-width:0;min-height:0;", m.setAttribute(Nr, ""), m.payload = n, $.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${b.ligands.length === 1 ? b.ligands[0].name || "ligand" : "ligands"} in ${b.structures[0].name || "structure"}`,
        badge: null,
        element: m,
        point: () => {
        }
      });
    }
    let u = null;
    const v = (m) => {
      u !== m && (p.replaceChildren(m), u = m);
    }, d = bt(ip), C = [], y = (m) => {
      C.forEach((k, x) => {
        const F = x === m;
        k.style.background = F ? A.cardBgActive : A.cardBg, k.style.borderColor = F ? A.cardBorderActive : A.cardBorder;
      }), $[m].point(), v($[m].element);
    }, c = (m) => {
      d.set($[m].key), y(m);
    };
    $.forEach((m, k) => {
      const x = N(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${A.cardBorder};border-radius:8px;background:${A.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;width:auto;`
      );
      x.appendChild(N("span", `font-weight:700;color:${A.textPrimary};`, m.title)), x.appendChild(N("span", `font-size:${Z.small};color:${A.textMuted};`, m.subtitle)), m.badge && x.appendChild(m.badge), x.onclick = () => c(k), C.push(x), l.appendChild(x);
    });
    const h = $.findIndex((m) => m.key === d.get());
    return y(h < 0 ? 0 : h), {
      onResize: () => u?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => u?.remove()
    };
  }
}
xe("gufe-chemical-system", cp);
const lp = 460, dp = 210, up = "42%";
function fp(e, t) {
  const n = Se(t, e.stateA, "ChemicalSystemViz"), r = Se(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const i = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) i.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) i.push(o.componentA, o.componentB);
  return { ...e, registry: so(t, i) };
}
const co = {
  unchanged: A.diffUnchanged,
  changed: A.diffChanged,
  added: A.diffAdded,
  removed: A.diffRemoved
};
function pp(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function hp(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function mp(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function xr(e, t, n) {
  const r = N(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${te.md};padding:5px ${te.lg};border-radius:${Ie.md};background:${A.cardBg};border:1px solid ${A.cardBorder};`
  );
  n && r.appendChild(
    N(
      "span",
      `flex:0 0 auto;font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;color:${A.textMuted2};`,
      n
    )
  );
  const i = mp(e);
  if (!i)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(N("span", `font-size:${Z.body};color:${A.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? A.cardBorder : co[t];
  const o = N(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:600;color:${A.textPrimary};overflow-wrap:anywhere;`,
    i.name
  );
  return o.title = i.name, r.appendChild(o), i.type && r.appendChild(Wn(i.type)), r;
}
function gp(e, t, n, r) {
  const i = N("div", `display:flex;flex-direction:column;gap:${te.sm};min-width:0;`), o = N("div", `display:flex;align-items:center;gap:${te.md};min-width:0;`);
  o.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${co[t]};`)
  );
  const s = N(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:${$e.bold};color:${A.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, o.appendChild(s), i.appendChild(o), t === "unchanged" ? (i.appendChild(xr(n, t, null)), i) : (i.appendChild(xr(n, t, "A")), i.appendChild(xr(r, t, "B")), i);
}
function yp(e, t) {
  const n = Je(t, e.componentA), r = Je(t, e.componentB);
  return `${n ? tt(n) : "A"} to ${r ? tt(r) : "B"}`;
}
class $p extends Ee {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = Se(r, n.stateA, "ChemicalSystemViz"), o = Se(r, n.stateB, "ChemicalSystemViz"), s = Se(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = Ct(n.name || "Transformation");
    if (l.statsEl.appendChild(Ne("protocol", s?.gufe_type || s?.name || "-")), l.statsEl.appendChild(Ne("mappings", String(a.length))), t.appendChild(l), !i || !o)
      return t.appendChild(
        fe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = hp(i, o), p = N("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(p);
    const _ = N(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${A.panelBg};`
    );
    p.appendChild(_);
    const b = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    p.appendChild(b);
    const w = N("div", `display:flex;flex-direction:column;gap:${te.xs};`);
    for (const [y, c] of [
      ["State A", i],
      ["State B", o]
    ])
      w.appendChild(
        N(
          "div",
          `min-width:0;font-size:${Z.small};font-weight:${$e.bold};letter-spacing:.06em;text-transform:uppercase;color:${A.textMuted2};overflow-wrap:anywhere;`,
          `${y}${c.name ? ` - ${c.name}` : ""}`
        )
      );
    _.appendChild(w);
    const g = /* @__PURE__ */ new Set();
    for (const y of f) {
      const c = i.components?.[y], h = o.components?.[y], m = pp(c, h);
      g.add(m), _.appendChild(
        gp(
          y,
          m,
          Je(r, c),
          Je(r, h)
        )
      );
    }
    if (g.size > 1) {
      const y = N(
        "div",
        `display:flex;flex-wrap:wrap;gap:${te.lg} 12px;padding-top:${te.sm};font-size:${Z.small};color:${A.textMuted};`
      );
      for (const c of ["unchanged", "changed", "added", "removed"])
        g.has(c) && y.appendChild(Ne(c, "", co[c]));
      _.appendChild(y);
    }
    const $ = N("div", bs, "Atom mapping");
    b.appendChild($);
    let u = null;
    const v = Va(t, (y) => {
      const c = y > 0 && y < lp;
      c !== u && (u = c, p.style.flexDirection = c ? "column" : "row", _.style.flex = c ? "0 0 auto" : `0 0 ${dp}px`, _.style.maxWidth = c ? "none" : up, _.style.maxHeight = c ? "45%" : "none", _.style.borderRight = c ? "none" : `1px solid ${A.splitBorder}`, _.style.borderBottom = c ? `1px solid ${A.splitBorder}` : "none", $.style.display = c ? "block" : "none");
    });
    if (!a.length)
      return b.appendChild(
        fe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: v };
    const d = document.createElement("gufe-atom-mapping");
    d.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (y) => {
      d.payload = aa(a[y], r);
    };
    if (C(0), a.length > 1) {
      const y = N(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${A.toolbarBg};border-bottom:1px solid ${A.toolbarBorder};color:${A.textMuted};`
      );
      y.appendChild(
        _t(
          a.map((c, h) => ({
            id: String(h),
            label: c.name || yp(c, r)
          })),
          "0",
          (c) => C(Number(c))
        )
      ), b.appendChild(y);
    }
    return b.appendChild(d), {
      onResize: () => d.resize?.(),
      cleanup: () => {
        v(), d.remove();
      }
    };
  }
}
xe("gufe-transformation", $p);
const at = { width: 148, height: 46, radius: 10 }, vt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ot = { initial: 0.56, min: 0.25, max: 0.78 }, vp = 24, ms = { x: at.width / 2, y: at.height / 2 }, gs = { node: 0.12, edge: 0.06 }, bp = 1.4, Un = tt;
function wp(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function _p(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const i = Je(t, r);
    if (!i) {
      n.add("missing");
      continue;
    }
    n.add(
      i.type === "UnknownComponentViz" ? i.gufe_type : i.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort().join(" + ");
}
function Sp(e, t) {
  const n = { fill: A.cardBg, stroke: A.cardBorder }, r = e.map((s) => _p(s, t)), i = [...new Set(r)];
  if (i.length < 2 || i.length > A.netGroupFill.length)
    return { signatures: r, compositions: i, colorOf: () => n, legend: [] };
  const o = new Map(
    i.map((s, a) => [s, { fill: A.netGroupFill[a], stroke: A.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: i,
    colorOf: (s) => o.get(r[s]) ?? n,
    legend: i.map((s) => [s, o.get(s)])
  };
}
function Cp(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, i] of Object.entries(e.components ?? {})) {
    n.push(r);
    const o = Je(t, i);
    if (!o) continue;
    n.push(tt(o), o["gufe-key"]);
    const s = o.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function kp(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), i = e.map((o) => {
    const s = [];
    for (const a of Object.values(o.components ?? {})) {
      const l = Se(t, a, "SmallMoleculeComponentViz");
      if (!l) continue;
      let f = r.get(a);
      f === void 0 && (f = n.length, r.set(a, f), n.push(l.sdf ?? "")), s.push(f);
    }
    return s;
  });
  return { sources: n, perNode: i };
}
function Ep(e) {
  const t = bt("alchemical-network.query"), n = bt("alchemical-network.composition"), r = N("div", $s), i = N("input", `${Gn}width:100%;box-sizing:border-box;`);
  i.type = "search", i.placeholder = "Search systems", i.value = t.get(), e.query.text = i.value, i.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(i);
  const o = sa({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: bt("alchemical-network.smarts"),
    run: (b) => e.match(b),
    describe: (b) => {
      const w = b.unreadable ? `, ${b.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${w}`;
    }
  });
  if (r.appendChild(o.element), e.compositions.length > 1) {
    const b = N("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${A.textMuted};`);
    b.appendChild(N("span", "flex-shrink:0;", "made of"));
    const w = jt(
      [{ id: "", label: "anything" }, ...e.compositions.map((g) => ({ id: g, label: g }))],
      "",
      (g) => {
        e.filter.composition = g, _(), e.refresh();
      },
      n
    );
    w.style.cssText += "flex:1;min-width:0;", e.filter.composition = w.value, b.appendChild(w), r.appendChild(b);
  }
  const s = N("div", `font-size:${Z.small};color:${A.textMuted2};`);
  r.appendChild(s);
  const a = N("div", vs);
  r.appendChild(a), r.appendChild(N("div", `font-size:${Z.tiny};line-height:1.5;color:${A.textMuted2};`, ao));
  const l = ea({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" }
    },
    setting: "alchemical-network.exportAs"
  });
  r.appendChild(l.box);
  const f = N("button", `${St}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), _(), e.refresh();
  }, r.appendChild(f);
  const p = (b) => {
    const w = e.query.text.trim().toLowerCase();
    if (w && !e.haystacks[b].includes(w) || e.filter.composition && e.signatures[b] !== e.filter.composition) return !1;
    const g = e.matched();
    return !(g && !g.has(b));
  }, _ = () => {
    l.clearNote(), a.replaceChildren();
    const b = e.nodes.map((w, g) => ({ node: w, index: g })).filter(({ index: w }) => p(w));
    s.textContent = `${b.length} of ${e.nodes.length} systems`;
    for (const { node: w, index: g } of b) {
      const $ = w["gufe-key"], u = e.selected.has($), v = N(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? A.cardBorderActive : A.cardBorder};background:${u ? A.cardBgActive : A.cardBg};color:${A.textPrimary};`
      ), d = e.colorOf(g);
      v.appendChild(
        N(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${d.fill};border:1px solid ${d.stroke};`
        )
      );
      const C = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Un(w));
      C.title = `${Un(w)}
${e.signatures[g]}`, v.appendChild(C), v.onclick = (y) => {
        y.shiftKey || y.metaKey || y.ctrlKey ? e.selected.has($) ? e.selected.delete($) : e.selected.add($) : (e.selected.clear(), e.selected.add($), e.focus(g)), _(), e.refresh();
      }, a.appendChild(v);
    }
    b.length || a.appendChild(N("div", `font-size:${Z.small};padding:8px;color:${A.textMuted2};`, "Nothing matches."));
  };
  return i.oninput = () => {
    e.query.text = i.value, t.set(i.value), _(), e.refresh();
  }, _(), e.mounted(_), o.apply(), r;
}
function xp(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function Pp(e, t, n, r) {
  let i;
  try {
    if (i = await Bs(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance(vt.linkDistance).strength(vt.linkStrength)
  ).force("charge", i.forceManyBody().strength(vt.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(vt.collisionRadius).iterations(vt.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * vt.tickMultiplier; l++) s.tick();
  return !0;
}
class Ap extends Ee {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = [];
    let o = 0;
    for (const V of n.nodes ?? []) {
      const K = Se(r, V, "ChemicalSystemViz");
      if (!K) {
        o++;
        continue;
      }
      i.push({ ...K, x: 0, y: 0 });
    }
    const s = new Map(i.map((V) => [V["gufe-key"], V])), a = [];
    let l = 0;
    for (const V of n.edges ?? []) {
      const K = s.get(V.stateA), re = s.get(V.stateB);
      if (!K || !re) {
        l++;
        continue;
      }
      a.push({ ...V, index: a.length, from: K, to: re });
    }
    const f = (V) => {
      const K = Se(r, V.protocol, "ProtocolViz");
      return K?.gufe_type || K?.name || "";
    }, p = new Set(a.map(f).filter(Boolean)), _ = Ct(n.name || "Alchemical network");
    _.statsEl.appendChild(Ne("systems", String(i.length))), _.statsEl.appendChild(Ne("transformations", String(a.length))), p.size && _.statsEl.appendChild(Ne("protocol", [...p].join(", "))), t.appendChild(_);
    const b = Sp(i, r), w = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    let g = () => {
    };
    const $ = /* @__PURE__ */ new Set(), u = { composition: "" }, v = { text: "" };
    let d = () => {
    }, C = () => {
    }, y = () => {
    };
    const c = i.map((V) => Cp(V, r));
    let h = null;
    const m = () => h ??= tr().catch((V) => (console.warn("[gufe-viz] RDKit failed to load:", he(V)), null)), k = kp(i, r), x = ia(m, k.sources);
    let F = null, M = () => {
    };
    const j = async (V) => {
      const K = await x.run(V);
      return K.status === "superseded" || (F = K.status === "ok" ? new Set(i.flatMap((re, ee) => k.perNode[ee].some((P) => K.matched.has(P)) ? [ee] : [])) : null, M(), d()), K;
    }, L = Rs(
      _,
      () => Ep({
        nodes: i,
        edges: a,
        haystacks: c,
        signatures: b.signatures,
        colorOf: b.colorOf,
        compositions: b.compositions,
        selected: $,
        filter: u,
        query: v,
        refresh: () => d(),
        matched: () => F,
        match: (V) => j(V),
        mounted: (V) => {
          M = V;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (V) => {
          C(V), y(V);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => g(),
        remember: We("alchemical-network.menuOpen", !1)
      }
    );
    L.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", w.appendChild(L.panel);
    const z = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${A.netCanvasBg};`), G = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${A.appBg};`), Y = N("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${A.netCanvasBg};`);
    z.appendChild(Y), w.appendChild(z), w.appendChild(
      xs(w, z, G, {
        min: Ot.min,
        max: Ot.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Vr("alchemical-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => g(),
        onOrient: (V) => Ps(L.panel, V)
      })
    ), w.appendChild(G);
    const oe = this.#e(G, r);
    if (!i.length)
      return Y.appendChild(
        fe(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), oe.message("Nothing to show."), { cleanup: () => oe.cleanup() };
    o && lt(
      Y,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && lt(
      Y,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, W = !1, q = null, R = () => {
    }, D = () => {
    }, O = () => {
    }, S = 0;
    z.appendChild(this.#n(b.legend, () => D()));
    const E = (V, K) => {
      q = { kind: V, index: K }, oe.show(V === "node" ? i[K] : a[K], V), R();
    };
    y = (V) => E("node", V);
    const I = () => {
      const V = ++S, K = Y.clientWidth || 800, re = Y.clientHeight || 600;
      xp(i, K, re);
      const ee = () => {
        if (!X || V !== S) return;
        O(), Y.querySelectorAll("svg").forEach((T) => T.remove());
        const P = this.#t(Y, i, a, K, re, b.colorOf, E);
        O = P.cleanup, D = P.reset, C = (T) => P.focusOn(T), R = () => P.setSelected(q), R(), d = () => {
          const T = v.text.trim().toLowerCase();
          if (!($.size > 0 || T.length > 0 || u.composition !== "" || F !== null)) {
            P.setEmphasis(null, null);
            return;
          }
          const J = T.length > 0 || u.composition !== "" || F !== null, H = /* @__PURE__ */ new Set();
          i.forEach((ne, ue) => {
            const le = J && (!T || c[ue].includes(T)) && (!u.composition || b.signatures[ue] === u.composition) && (!F || F.has(ue));
            ($.has(ne["gufe-key"]) || le) && H.add(ne["gufe-key"]);
          });
          const Q = /* @__PURE__ */ new Set();
          a.forEach((ne, ue) => {
            H.has(ne.from["gufe-key"]) && H.has(ne.to["gufe-key"]) && Q.add(ue);
          }), P.setEmphasis(H, Q);
        }, d();
      };
      if (W) {
        ee();
        return;
      }
      Pp(i, a, K, re).then((P) => {
        !X || V !== S || (P || (W = !0, lt(Y, "d3 could not be loaded - showing the circular layout instead")), ee());
      }, ee);
    };
    return g = I, I(), E("node", 0), {
      onResize: () => I(),
      cleanup: () => {
        X = !1, O(), oe.cleanup();
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
    const r = N("div", Hn.bottom);
    if (r.appendChild(rr(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(N("span", `font-size:${Z.small};color:${A.textMuted};`, "systems made of"));
    for (const [i, o] of t) {
      const s = N("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        N(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${o.fill};border:2px solid ${o.stroke};`
        )
      ), s.appendChild(
        N("span", `font-size:${Z.small};color:${A.textPrimary};overflow-wrap:anywhere;`, i)
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
    t.appendChild(N("div", bs, "Selected"));
    const r = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = document.createElement("gufe-view");
    i.style.cssText = "flex:1;min-width:0;min-height:0;";
    const o = (a) => r.replaceChildren(fe(a));
    return { show: (a, l) => {
      let f;
      if (l === "node")
        f = op(oa(a), n);
      else {
        const { index: p, from: _, to: b, ...w } = a;
        f = fp(w, n);
      }
      if (!f) {
        o("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      i.payload = f, i.parentNode !== r && r.replaceChildren(i);
    }, message: o, cleanup: () => i.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, i, o, s, a) {
    const l = ce("svg", { class: "gufe-graph", width: i, height: o, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const f = ce("g");
    l.appendChild(f);
    const p = ce("g"), _ = ce("g");
    f.append(p, _);
    const b = ra(l, f, {
      bounds: () => na(n, ms.x, ms.y),
      margin: vp,
      hint: "Click the graph or hold Ctrl to zoom"
    }), w = (d, C) => {
      b.wasPan() || a(d, C);
    }, g = [];
    r.forEach((d, C) => {
      const y = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: A.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Qi(y, d.name || "transformation"), y.addEventListener("click", () => w("edge", C)), p.appendChild(y), g.push(y);
      const c = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      c.addEventListener("click", () => w("edge", C)), p.appendChild(c);
    });
    const $ = [], u = [], v = [];
    return n.forEach((d, C) => {
      const y = s(C), c = ce("g", { style: "cursor:pointer;" });
      v.push(c);
      const h = ce("rect", {
        x: d.x - at.width / 2,
        y: d.y - at.height / 2,
        width: at.width,
        height: at.height,
        rx: at.radius,
        fill: y.fill,
        stroke: y.stroke,
        "stroke-width": 2
      });
      c.appendChild(h), $.push(h), u.push(y.stroke);
      const m = ce("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: A.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      m.textContent = wp(Un(d), 20), c.appendChild(m);
      const k = Object.keys(d.components ?? {}).length, x = ce("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: A.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      x.textContent = `${k} component${k === 1 ? "" : "s"}`, c.appendChild(x), Qi(c, Un(d)), c.addEventListener("click", () => w("node", C)), _.appendChild(c);
    }), b.fit(), {
      setSelected(d) {
        $.forEach((C, y) => {
          const c = d?.kind === "node" && d.index === y;
          C.setAttribute("stroke", c ? A.cardBorderActive : u[y]), C.setAttribute("stroke-width", c ? "3" : "2");
        }), g.forEach((C, y) => {
          const c = d?.kind === "edge" && d.index === y;
          C.setAttribute("stroke", c ? A.netHaloColor : A.netEdgeLine), C.setAttribute("stroke-width", c ? "4" : "2");
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
      setEmphasis(d, C) {
        v.forEach((y, c) => {
          const h = !d || d.has(n[c]["gufe-key"]);
          y.setAttribute("opacity", h ? "1" : String(gs.node));
        }), g.forEach((y, c) => {
          const h = !C || C.has(c);
          y.setAttribute("opacity", h ? "1" : String(gs.edge));
        });
      },
      focusOn(d) {
        const C = n[d];
        C && b.centreOn(C.x, C.y, bp);
      },
      reset: b.reset,
      cleanup: b.cleanup
    };
  }
}
xe("gufe-alchemical-network", Ap);
class Rp extends Ee {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Ct(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const i = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = Ur();
    return o.style.maxWidth = "460px", o.appendChild(qn("gufe class", n.gufe_type, !0)), n.name && o.appendChild(qn("Name", n.name)), o.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${A.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
xe("gufe-protocol", Rp);
function Mp(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Pr(e, t = !1) {
  const n = N(
    "div",
    `display:flex;flex-direction:column;gap:${te.xl};padding:${te.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${A.splitBorder};`)
  );
  return n.appendChild(N("div", Rr, e)), n;
}
function Dn(e) {
  return N(
    "div",
    `font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${A.textMuted2};`,
    e
  );
}
function ys(e, t) {
  const n = N("div", `display:flex;flex-direction:column;align-items:center;gap:${te.sm};`);
  return n.appendChild(
    N(
      "span",
      `${Re.plain}${Re.outline}font-family:${Z.mono};font-size:${Z.body};`,
      e
    )
  ), n.appendChild(Dn(t)), n;
}
class Np extends Ee {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const i = Ur();
    i.style.maxWidth = "560px", i.style.width = "100%", i.style.gap = "0";
    const o = Pr("Solvent", !0), s = N("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = N("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), l = N(
      "div",
      `font-family:${Z.mono};font-size:${Z.display};font-weight:${$e.bold};line-height:1.1;color:${A.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(l), a.appendChild(Dn("SMILES")), s.appendChild(a);
    const f = n.name || "";
    if (f && f !== n.smiles) {
      const d = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      d.appendChild(
        N(
          "div",
          `font-size:${Z.body};color:${A.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          f
        )
      ), d.appendChild(Dn("Name")), s.appendChild(d);
    }
    o.appendChild(s), i.appendChild(o);
    const p = Pr("Ions"), _ = N("div", `display:flex;align-items:flex-end;gap:${te.xxl};flex-wrap:wrap;`);
    n.positive_ion && _.appendChild(ys(n.positive_ion, "cation")), n.negative_ion && _.appendChild(ys(n.negative_ion, "anion"));
    const { value: b, unit: w } = Mp(n.ion_concentration), g = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), $ = N("div", `display:flex;align-items:baseline;gap:${te.md};justify-content:flex-end;`);
    $.appendChild(
      N(
        "div",
        `font-size:${Z.display};font-weight:${$e.bold};line-height:1;color:${A.titleColor};`,
        b
      )
    ), w && ($.appendChild(document.createTextNode(" ")), $.appendChild(N("div", `font-size:${Z.body};color:${A.textMuted};`, w))), g.appendChild($), g.appendChild(Dn("Ion concentration")), _.appendChild(g), p.appendChild(_), i.appendChild(p);
    const u = Pr("Net charge"), v = n.neutralize;
    return u.appendChild(
      N(
        "span",
        `${Re.plain}align-self:flex-start;font-weight:${$e.bold};` + (v ? `background:${A.okBg};color:${A.okFg};` : `${Re.outline}color:${A.textMuted};`),
        v ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      N(
        "div",
        Mr,
        v ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), i.appendChild(u), r.appendChild(i), {};
  }
}
xe("gufe-solvent", Np);
class Op extends Ee {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Ct(n.name || "Unnamed component");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const i = N("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = Ur();
    return o.style.maxWidth = "460px", o.appendChild(
      N(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${A.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      N(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${A.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(qn("Name", n.name || "(unnamed)")), o.appendChild(qn("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
xe("gufe-unknown-component", Op);
function Dp(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Cs, reset: Aa });
export {
  Ua as CHROME_OPEN_BY_DEFAULT,
  ya as DEBUG_ATTRIBUTE,
  $a as DEBUG_GLOBAL,
  uu as DEFAULT_DEPICT_STYLE,
  Td as DEFAULT_ZOOM_BOUNDS,
  ze as DEPICT_STYLE,
  yu as DEPICT_STYLE_RANGES,
  Ap as GufeAlchemicalNetwork,
  bf as GufeAtomMapping,
  cp as GufeChemicalSystem,
  rp as GufeComplex,
  Ee as GufeElement,
  Xf as GufeLigandNetwork,
  Du as GufeProtein,
  Rp as GufeProtocol,
  Tu as GufeSmallMolecule,
  Np as GufeSolvent,
  $p as GufeTransformation,
  Op as GufeUnknownComponent,
  Pd as GufeView,
  Nr as HIDE_NAME_ATTRIBUTE,
  $r as MAPPING_COLORS,
  Id as MAPPING_RAMP_3D,
  Ip as MAPPING_RAMP_NAME,
  ao as MULTI_SELECT_HINT,
  Tp as PAYLOAD_TYPES,
  Fp as SCHEMA_TYPES,
  to as VIEW_TAGS,
  nf as align2D,
  sf as alignedToPartner,
  tf as applyRT,
  rf as applyTurn,
  zd as boundedZoom,
  kt as buildRegistry,
  Ge as choice,
  Rs as chromeMenu,
  Md as claimGestures,
  ca as complexPartsFor,
  _s as debugEnabled,
  xe as defineElement,
  qs as describeProblem,
  pp as diffStatus,
  jp as dispatchProblem,
  so as entriesFor,
  tt as entryLabel,
  ea as exportBlock,
  na as extentOf,
  We as flag,
  Ed as formatIssues,
  Us as guardWheel,
  tp as hasComplex,
  gf as inFrameOf,
  ef as kabsch,
  rs as laidOut,
  af as layoutPair,
  yf as liftFor,
  _a as logPayload,
  Je as lookup,
  Se as lookupOfType,
  aa as mappingPayloadFor,
  Hi as markGroups,
  vr as markedBonds,
  Dp as mount,
  Kr as nameWanted,
  vu as normaliseDepictStyle,
  Vr as num,
  Va as onWidth,
  $f as openfeShift,
  Ps as orientMenuPanel,
  vf as pairColour,
  Bi as parseAtomSpec,
  wa as payloadJson,
  rr as resetControl,
  Aa as resetSettings,
  ra as sceneCamera,
  Lu as selectionText,
  Kn as setting,
  Cs as settings,
  xs as splitter,
  op as systemPayloadFor,
  bt as textSetting,
  fp as transformationPayloadFor,
  is as uniqueAtoms,
  wu as uniqueBonds,
  zp as validateAs,
  kd as validatePayload,
  nr as viewerInteraction,
  Hs as wheelFactor,
  of as withCoords
};
