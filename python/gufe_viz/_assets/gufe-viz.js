const io = {
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
function na() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const R = na() ? io.dark : io.light, Z = {
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
}, ze = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, je = {
  title: R.titleColor,
  primary: R.textPrimary,
  muted: R.textMuted,
  faint: R.textMuted2,
  error: R.errorFg
}, yt = {
  card: R.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: R.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: R.canvas2DBg
}, ye = {
  base: `background:${R.btnBg};color:${R.btnFg};border:1px solid ${R.btnBorder};padding:${te.sm} 9px;font-size:${Z.small};font-weight:${$e.bold};border-radius:${ze.sm};cursor:pointer;font-family:inherit;`,
  bg: R.btnBg,
  bgHover: R.btnBgHover,
  bgActive: R.btnBgActive
}, ra = `background:${R.selectBg};color:${R.textPrimary};border:1px solid ${R.selectBorder};border-radius:${ze.md};padding:${te.sm} ${te.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, oa = `display:flex;align-items:center;gap:12px;padding:9px ${te.xxl};flex-shrink:0;background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};`, In = { min: "236px", max: "340px" }, Je = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, ls = `display:flex;flex-direction:column;gap:${te.lg};flex:1;min-width:var(${Je.min},${In.min});max-width:var(${Je.max},${In.max});box-sizing:border-box;padding:${te.xl};min-height:0;overflow-y:auto;background:${R.panelBg};border:0 solid ${R.splitBorder};border-right-width:var(${Je.ruleX},1px);border-bottom-width:var(${Je.ruleY},0);`, ia = "45%", ds = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", jr = {
  top: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;font-size:${Z.body};background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};color:${R.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;background:${R.toolbarBg};border-top:1px solid ${R.toolbarBorder};`
}, us = `flex-shrink:0;padding:${te.sm} ${te.xl};font-size:${Z.heading};font-weight:${$e.bold};color:${R.labelFg};background:${R.labelBg};`, kr = `position:absolute;top:${te.md};left:${te.md};z-index:10;pointer-events:none;max-width:calc(100% - ${te.xxl} - ${te.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${te.xs} ${te.lg};border-radius:${ze.md};font-size:${Z.heading};font-weight:${$e.bold};color:${R.labelFg};background:${R.labelBg};`, sa = `display:flex;flex-direction:column;gap:${te.xs};padding:${te.xxl} 18px;border-radius:${ze.xl};background:${R.cardBg};border:1px solid ${R.cardBorder};`, fs = `position:absolute;bottom:${te.xl};right:${te.xl};display:flex;gap:${te.sm};padding:${te.sm};border-radius:${ze.md};z-index:10;background:${R.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, aa = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${R.textMuted};`, Er = `font-size:${Z.small};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${R.textMuted2};`, Pe = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${te.xs} ${te.sm};font-size:${Z.small};`,
  plain: `display:inline-flex;align-items:center;padding:${te.xs} ${te.md};border:1px solid transparent;border-radius:${ze.pill};font-family:inherit;font-size:${Z.small};color:${R.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${R.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${R.btnBg};border-color:${R.btnBorder};color:${R.textPrimary};`,
  active: `cursor:pointer;background:${R.cardBgActive};border-color:${R.btnBorder};color:${R.textPrimary};`
}, xr = `font-size:${Z.small};line-height:1.6;color:${R.textMuted2};`, ca = ["debug", "gufe-debug"], la = "debug", da = "GUFE_VIZ_DEBUG";
function ua() {
  return !!globalThis[da];
}
function fa() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return ca.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ps(e) {
  return e?.hasAttribute?.(la) ? !0 : ua() || fa();
}
function pa(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function ha(e, t, n) {
  if (!ps(n)) return;
  const r = pa(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const hs = "GUFE_VIZ_VIEW_STATE";
function ma(e) {
  const t = globalThis[hs];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const ga = 150, so = "data-gufe-shell";
class Ne extends HTMLElement {
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${so}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = R.appBg, this.style.color = R.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), ga);
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
    return this.#s(), this.#t = M(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${R.appBg};`
    ), this.#t.setAttribute(so, ""), this.appendChild(this.#t), this.#t;
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
function Me(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const ke = "gufe-viz:", Ye = /* @__PURE__ */ new Map();
let jt = null;
function ya() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Ot() {
  if (jt === !1) return null;
  const e = ya();
  if (!e)
    return jt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), jt = !0, e;
  } catch {
    return jt = !1, null;
  }
}
function $a(e) {
  const t = Ot();
  if (!t) return Ye.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function va(e, t) {
  const n = Ot();
  if (!n) {
    Ye.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    Ye.set(ke + e, t);
  }
}
function Bn(e, t, n) {
  return {
    key: e,
    get() {
      const r = $a(e);
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
        va(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function bt(e, t, n) {
  return Bn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function $t(e, t) {
  return Bn(e, t, (n) => typeof n == "boolean");
}
function zr(e, t, n = -1 / 0, r = 1 / 0) {
  return Bn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Mt(e, t = "") {
  return Bn(e, t, (n) => typeof n == "string");
}
function ms() {
  const e = {}, t = Ot(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ye.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Ye.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(o);
      } catch {
        e[r.slice(ke.length)] = o;
      }
  }
  return e;
}
function ba() {
  const e = {}, t = Ot(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ye.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Ye.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function wa() {
  const e = Ot();
  if (e)
    for (const t of Object.keys(ms()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  Ye.clear();
}
const gs = "https://framejs.app", ys = 1e4;
function _a(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Sa = "/gufe-dev-bundle.js";
function Ca() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= ys ? e : null;
}
async function ka() {
  const e = Ca();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Sa);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < ys ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Ea() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function xa(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(Cs)};`,
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
    `globalThis[${JSON.stringify(hs)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Pa(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...xa(n),
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
function Aa(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(ba()))
    o.endsWith(Cs) || (r[o] = i);
  return { settings: r, views: t };
}
const Ra = (e) => `${gs}/j/${e}`, Na = (e) => `${gs}/j/${e}.json`;
async function Ma(e, t, n) {
  await fetch(Na(e), {
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
function Ta(e) {
  if (!ps()) return;
  const t = M(
    "div",
    `display:flex;flex-direction:column;gap:${te.md};padding-top:${te.lg};border-top:1px dashed ${R.splitBorder};`
  );
  t.appendChild(
    M(
      "div",
      `font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${R.textMuted2};`,
      "debug"
    )
  );
  const n = M("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = M("div", `font-size:${Z.tiny};line-height:1.5;color:${R.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? R.errorFg : R.textMuted2;
  }, i = (s, a) => {
    const l = M("a", `color:${R.textPrimary};`, s);
    l.href = s, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(M("div", `padding-top:${te.sm};`, a)), r.style.color = R.textMuted2;
  };
  n.onclick = () => {
    const s = _a(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, l = Aa(s), f = window.open("", "_blank"), p = Ea(), w = a, b = String(w.name || w.type || "gufe-viz"), _ = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), ka().then(($) => {
      if (!$) {
        f?.close(), _(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Ma(p, Pa($.js, a, l), b).then(() => {
        _();
        const g = Ra(p);
        f && (f.location.href = g), i(g, $.note);
      });
    }).catch(($) => {
      _(), f?.close(), o(`Upload failed: ${$ instanceof Error ? $.message : String($)}`, !0);
    });
  }, t.appendChild(
    M(
      "div",
      `font-size:${Z.tiny};line-height:1.5;color:${R.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function M(e, t, n) {
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
const St = (e) => e.toLocaleString("en-US"), rt = "-", wt = ye.base, Un = ra;
function Kn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = M("div", "display:flex;gap:4px;"), i = e.map((s) => {
    const a = M("button", wt, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ye.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ye.bgActive : ye.bg;
    }, a.onclick = () => {
      o.setActive(s.id), r?.set(s.id), n(s.id);
    }, o.appendChild(a), { id: s.id, btn: a };
  });
  return o.setActive = (s) => {
    t = s, i.forEach((a) => {
      a.btn.style.background = a.id === t ? ye.bgActive : ye.bg;
    });
  }, o.setActive(t), o;
}
function Hn(e, t, n, r) {
  const o = M("select", Un);
  for (const s of e) {
    const a = M("option", "", s.label);
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
function $s(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = M("button", wt, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? ye.bgActive : ye.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
function Re(e, t, n) {
  const r = M("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    M("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = M("span");
  return o.innerHTML = `${Ke(e)} <b style="color:${je.primary};">${Ke(t)}</b>`, r.appendChild(o), r;
}
function it(e, t) {
  const n = M("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${te.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${te.md} ${te.xxl};border-radius:${ze.md};font-size:${Z.body};background:${R.warnBg};color:${R.warnFg};border:1px solid ${R.warnBorder};`, e.appendChild(n), n;
}
function fe(e, t = !1) {
  return M(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? je.error : je.faint};`,
    e
  );
}
function _t(e) {
  const t = M("div", oa);
  return t.className = "gufe-header", t.titleEl = M(
    "span",
    `font-weight:${$e.bold};font-size:${Z.title};color:${je.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = M(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${je.muted};`
  ), t.textEl = M("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = M("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Dn(e, t, n = !1) {
  const r = M("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    M(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${je.faint};`,
      e
    )
  );
  const o = M(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${je.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Gn(e) {
  return M(
    "span",
    `padding:1px 7px;border-radius:${ze.xl};font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.04em;white-space:nowrap;background:${R.badgeBg};color:${R.badgeFg};`,
    e
  );
}
function Ir() {
  return M("div", sa);
}
function vs() {
  const e = M("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = M("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const bs = "data-gufe-hide-name";
function ws(e) {
  return !e.closest(`[${bs}]`);
}
function Oa(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const ao = { min: 0.2, max: 0.8 }, Fa = 5;
function _s(e, t, n, r = {}) {
  const o = r.min ?? ao.min, i = r.max ?? ao.max, s = M(
    "div",
    `flex:0 0 ${Fa}px;align-self:stretch;touch-action:none;background:${R.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const l = ($) => {
    a = $, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, f = () => {
    const $ = e.getBoundingClientRect();
    return $.height > $.width;
  };
  let p = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const w = () => {
    t.style.flex = `1 1 ${(p * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - p) * 100).toFixed(2)}%`;
  };
  w(), l(f()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const g = f();
    g !== a && (l(g), r.onResize?.(p));
  }).observe(e);
  let b = !1;
  s.addEventListener("pointerdown", ($) => {
    b = !0, s.setPointerCapture($.pointerId), $.preventDefault();
  }), s.addEventListener("pointermove", ($) => {
    if (!b) return;
    const g = e.getBoundingClientRect(), u = a ? g.height : g.width;
    if (u <= 0) return;
    const y = a ? $.clientY - g.top : $.clientX - g.left;
    p = Math.min(i, Math.max(o, y / u)), w();
  });
  const _ = ($) => {
    b && (b = !1, s.releasePointerCapture($.pointerId), r.remember?.set(p), r.onResize?.(p));
  };
  return s.addEventListener("pointerup", _), s.addEventListener("pointercancel", _), s;
}
function Ss(e, t) {
  e.style.setProperty(Je.min, t ? "0" : In.min), e.style.setProperty(Je.max, t ? "none" : In.max), e.style.setProperty(Je.ruleX, t ? "0" : "1px"), e.style.setProperty(Je.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? ia : "";
}
const ja = !1, Cs = ".menuOpen";
function za() {
  const e = M("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Ia = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: za
}, Da = Ia.openFreeEnergy;
function ks(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? ja, o = !1;
  const i = M("div", "flex-shrink:0;"), s = M("button", `${ye.base}display:inline-flex;align-items:center;gap:${te.md};padding:${te.sm} ${te.lg};`);
  s.appendChild(Da()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), Ta(i)), i.style.display = r ? "" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, l = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => l(!r), s.onmouseover = () => {
    s.style.background = r ? ye.bgActive : ye.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: l
  };
}
function qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zt = { exports: {} }, nr = {}, qe = {}, et = {}, rr = {}, or = {}, ir = {}, co;
function qn() {
  return co || (co = 1, (function(e) {
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
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((C, m) => `${C}${m}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((C, m) => (m instanceof n && (C[m.str] = (C[m.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(y, ...d) {
      const C = [y[0]];
      let m = 0;
      for (; m < d.length; )
        a(C, d[m]), C.push(y[++m]);
      return new r(C);
    }
    e._ = o;
    const i = new r("+");
    function s(y, ...d) {
      const C = [_(y[0])];
      let m = 0;
      for (; m < d.length; )
        C.push(i), a(C, d[m]), C.push(i, _(y[++m]));
      return l(C), new r(C);
    }
    e.str = s;
    function a(y, d) {
      d instanceof r ? y.push(...d._items) : d instanceof n ? y.push(d) : y.push(w(d));
    }
    e.addCodeArg = a;
    function l(y) {
      let d = 1;
      for (; d < y.length - 1; ) {
        if (y[d] === i) {
          const C = f(y[d - 1], y[d + 1]);
          if (C !== void 0) {
            y.splice(d - 1, 3, C);
            continue;
          }
          y[d++] = "+";
        }
        d++;
      }
    }
    function f(y, d) {
      if (d === '""')
        return y;
      if (y === '""')
        return d;
      if (typeof y == "string")
        return d instanceof n || y[y.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${y.slice(0, -1)}${d}"` : d[0] === '"' ? y.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(y instanceof n))
        return `"${y}${d.slice(1)}`;
    }
    function p(y, d) {
      return d.emptyStr() ? y : y.emptyStr() ? d : s`${y}${d}`;
    }
    e.strConcat = p;
    function w(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : _(Array.isArray(y) ? y.join(",") : y);
    }
    function b(y) {
      return new r(_(y));
    }
    e.stringify = b;
    function _(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = _;
    function $(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new r(`.${y}`) : o`[${y}]`;
    }
    e.getProperty = $;
    function g(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new r(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = g;
    function u(y) {
      return new r(y.toString());
    }
    e.regexpCode = u;
  })(ir)), ir;
}
var sr = {}, lo;
function uo() {
  return lo || (lo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ qn();
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
    class o {
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
        var p, w;
        if (!((w = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || w === void 0) && w.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(f, p) {
        super(p), this.prefix = f;
      }
      setValue(f, { property: p, itemIndex: w }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(p)}[${w}]`;
      }
    }
    e.ValueScopeName = i;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(f) {
        super(f), this._values = {}, this._scope = f.scope, this.opts = { ...f, _n: f.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(f) {
        return new i(f, this._newName(f));
      }
      value(f, p) {
        var w;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(f), { prefix: _ } = b, $ = (w = p.key) !== null && w !== void 0 ? w : p.ref;
        let g = this._values[_];
        if (g) {
          const d = g.get($);
          if (d)
            return d;
        } else
          g = this._values[_] = /* @__PURE__ */ new Map();
        g.set($, b);
        const u = this._scope[_] || (this._scope[_] = []), y = u.length;
        return u[y] = p.ref, b.setValue(p, { property: _, itemIndex: y }), b;
      }
      getValue(f, p) {
        const w = this._values[f];
        if (w)
          return w.get(p);
      }
      scopeRefs(f, p = this._values) {
        return this._reduceValues(p, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${f}${w.scopePath}`;
        });
      }
      scopeCode(f = this._values, p, w) {
        return this._reduceValues(f, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, p, w);
      }
      _reduceValues(f, p, w = {}, b) {
        let _ = t.nil;
        for (const $ in f) {
          const g = f[$];
          if (!g)
            continue;
          const u = w[$] = w[$] || /* @__PURE__ */ new Map();
          g.forEach((y) => {
            if (u.has(y))
              return;
            u.set(y, r.Started);
            let d = p(y);
            if (d) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              _ = (0, t._)`${_}${C} ${y} = ${d};${this.opts._n}`;
            } else if (d = b?.(y))
              _ = (0, t._)`${_}${d}${this.opts._n}`;
            else
              throw new n(y);
            u.set(y, r.Completed);
          });
        }
        return _;
      }
    }
    e.ValueScope = a;
  })(sr)), sr;
}
var fo;
function ie() {
  return fo || (fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ qn(), n = /* @__PURE__ */ uo();
    var r = /* @__PURE__ */ qn();
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
    var o = /* @__PURE__ */ uo();
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
      optimizeNames(S, E) {
        return this;
      }
    }
    class s extends i {
      constructor(S, E, I) {
        super(), this.varKind = S, this.name = E, this.rhs = I;
      }
      render({ es5: S, _n: E }) {
        const I = S ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${V};` + E;
      }
      optimizeNames(S, E) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = O(this.rhs, S, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(S, E, I) {
        super(), this.lhs = S, this.rhs = E, this.sideEffects = I;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, E) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = O(this.rhs, S, E), this;
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
    class f extends i {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `${this.label}:` + S;
      }
    }
    class p extends i {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `break${this.label ? ` ${this.label}` : ""};` + S;
      }
    }
    class w extends i {
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
    class b extends i {
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
        return this.code = O(this.code, S, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class _ extends i {
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
          const H = I[V];
          H.optimizeNames(S, E) || (G(S, H.names), I.splice(V, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, E) => j(S, E.names), {});
      }
    }
    class $ extends _ {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class g extends _ {
    }
    class u extends $ {
    }
    u.kind = "else";
    class y extends $ {
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
          return S === !1 ? E instanceof y ? E : E.nodes : this.nodes.length ? this : new y(Y(S), E instanceof y ? [E] : E.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, E) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(S, E), !!(super.optimizeNames(S, E) || this.else))
          return this.condition = O(this.condition, S, E), this;
      }
      get names() {
        const S = super.names;
        return L(S, this.condition), this.else && j(S, this.else.names), S;
      }
    }
    y.kind = "if";
    class d extends $ {
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
          return this.iteration = O(this.iteration, S, E), this;
      }
      get names() {
        return j(super.names, this.iteration.names);
      }
    }
    class m extends d {
      constructor(S, E, I, V) {
        super(), this.varKind = S, this.name = E, this.from = I, this.to = V;
      }
      render(S) {
        const E = S.es5 ? n.varKinds.var : this.varKind, { name: I, from: V, to: H } = this;
        return `for(${E} ${I}=${V}; ${I}<${H}; ${I}++)` + super.render(S);
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
          return this.iterable = O(this.iterable, S, E), this;
      }
      get names() {
        return j(super.names, this.iterable.names);
      }
    }
    class h extends $ {
      constructor(S, E, I) {
        super(), this.name = S, this.args = E, this.async = I;
      }
      render(S) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(S);
      }
    }
    h.kind = "func";
    class v extends _ {
      render(S) {
        return "return " + super.render(S);
      }
    }
    v.kind = "return";
    class k extends $ {
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
    class P extends $ {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    P.kind = "catch";
    class F extends $ {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    F.kind = "finally";
    class z {
      constructor(S, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = S, this._scope = new n.Scope({ parent: S }), this._nodes = [new g()];
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
        const H = this._scope.toName(E);
        return I !== void 0 && V && (this._constants[H.str] = I), this._leafNode(new s(S, H, I)), H;
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
        if (this._blockNode(new y(S)), E && I)
          this.code(E).else().code(I).endIf();
        else if (E)
          this.code(E).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(S) {
        return this._elseNode(new y(S));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, u);
      }
      _for(S, E) {
        return this._blockNode(S), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, E) {
        return this._for(new C(S), E);
      }
      // `for` statement for a range of values
      forRange(S, E, I, V, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const re = this._scope.toName(S);
        return this._for(new m(H, re, E, I), () => V(re));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, E, I, V = n.varKinds.const) {
        const H = this._scope.toName(S);
        if (this.opts.es5) {
          const re = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${re}.length`, (ee) => {
            this.var(H, (0, t._)`${re}[${ee}]`), I(H);
          });
        }
        return this._for(new c("of", V, H, E), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, E, I, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${E})`, I);
        const H = this._scope.toName(S);
        return this._for(new c("in", V, H, E), () => I(H));
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
        const E = new v();
        if (this._blockNode(E), this.code(S), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(v);
      }
      // `try` statement
      try(S, E, I) {
        if (!E && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new k();
        if (this._blockNode(V), this.code(S), E) {
          const H = this.name("e");
          this._currNode = V.catch = new P(H), E(H);
        }
        return I && (this._currNode = V.finally = new F(), this.code(I)), this._endBlockNode(P, F);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new w(S));
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
        if (!(E instanceof y))
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
    e.CodeGen = z;
    function j(N, S) {
      for (const E in S)
        N[E] = (N[E] || 0) + (S[E] || 0);
      return N;
    }
    function L(N, S) {
      return S instanceof t._CodeOrName ? j(N, S.names) : N;
    }
    function O(N, S, E) {
      if (N instanceof t.Name)
        return I(N);
      if (!V(N))
        return N;
      return new t._Code(N._items.reduce((H, re) => (re instanceof t.Name && (re = I(re)), re instanceof t._Code ? H.push(...re._items) : H.push(re), H), []));
      function I(H) {
        const re = E[H.str];
        return re === void 0 || S[H.str] !== 1 ? H : (delete S[H.str], re);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((re) => re instanceof t.Name && S[re.str] === 1 && E[re.str] !== void 0);
      }
    }
    function G(N, S) {
      for (const E in S)
        N[E] = (N[E] || 0) - (S[E] || 0);
    }
    function Y(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${D(N)}`;
    }
    e.not = Y;
    const oe = A(e.operators.AND);
    function X(...N) {
      return N.reduce(oe);
    }
    e.and = X;
    const W = A(e.operators.OR);
    function q(...N) {
      return N.reduce(W);
    }
    e.or = q;
    function A(N) {
      return (S, E) => S === t.nil ? E : E === t.nil ? S : (0, t._)`${D(S)} ${N} ${D(E)}`;
    }
    function D(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(or)), or;
}
var se = {}, po;
function ae() {
  if (po) return se;
  po = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ qn();
  function n(c) {
    const h = {};
    for (const v of c)
      h[v] = !0;
    return h;
  }
  se.toHash = n;
  function r(c, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (o(c, h), !i(h, c.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function o(c, h = c.schema) {
    const { opts: v, self: k } = c;
    if (!v.strictSchema || typeof h == "boolean")
      return;
    const P = k.RULES.keywords;
    for (const F in h)
      P[F] || m(c, `unknown keyword: "${F}"`);
  }
  se.checkUnknownRules = o;
  function i(c, h) {
    if (typeof c == "boolean")
      return !c;
    for (const v in c)
      if (h[v])
        return !0;
    return !1;
  }
  se.schemaHasRules = i;
  function s(c, h) {
    if (typeof c == "boolean")
      return !c;
    for (const v in c)
      if (v !== "$ref" && h.all[v])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: h }, v, k, P) {
    if (!P) {
      if (typeof v == "number" || typeof v == "boolean")
        return v;
      if (typeof v == "string")
        return (0, e._)`${v}`;
    }
    return (0, e._)`${c}${h}${(0, e.getProperty)(k)}`;
  }
  se.schemaRefOrVal = a;
  function l(c) {
    return w(decodeURIComponent(c));
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
  function w(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = w;
  function b(c, h) {
    if (Array.isArray(c))
      for (const v of c)
        h(v);
    else
      h(c);
  }
  se.eachItem = b;
  function _({ mergeNames: c, mergeToName: h, mergeValues: v, resultToName: k }) {
    return (P, F, z, j) => {
      const L = z === void 0 ? F : z instanceof e.Name ? (F instanceof e.Name ? c(P, F, z) : h(P, F, z), z) : F instanceof e.Name ? (h(P, z, F), F) : v(F, z);
      return j === e.Name && !(L instanceof e.Name) ? k(P, L) : L;
    };
  }
  se.mergeEvaluated = {
    props: _({
      mergeNames: (c, h, v) => c.if((0, e._)`${v} !== true && ${h} !== undefined`, () => {
        c.if((0, e._)`${h} === true`, () => c.assign(v, !0), () => c.assign(v, (0, e._)`${v} || {}`).code((0, e._)`Object.assign(${v}, ${h})`));
      }),
      mergeToName: (c, h, v) => c.if((0, e._)`${v} !== true`, () => {
        h === !0 ? c.assign(v, !0) : (c.assign(v, (0, e._)`${v} || {}`), g(c, v, h));
      }),
      mergeValues: (c, h) => c === !0 ? !0 : { ...c, ...h },
      resultToName: $
    }),
    items: _({
      mergeNames: (c, h, v) => c.if((0, e._)`${v} !== true && ${h} !== undefined`, () => c.assign(v, (0, e._)`${h} === true ? true : ${v} > ${h} ? ${v} : ${h}`)),
      mergeToName: (c, h, v) => c.if((0, e._)`${v} !== true`, () => c.assign(v, h === !0 ? !0 : (0, e._)`${v} > ${h} ? ${v} : ${h}`)),
      mergeValues: (c, h) => c === !0 ? !0 : Math.max(c, h),
      resultToName: (c, h) => c.var("items", h)
    })
  };
  function $(c, h) {
    if (h === !0)
      return c.var("props", !0);
    const v = c.var("props", (0, e._)`{}`);
    return h !== void 0 && g(c, v, h), v;
  }
  se.evaluatedPropsToName = $;
  function g(c, h, v) {
    Object.keys(v).forEach((k) => c.assign((0, e._)`${h}${(0, e.getProperty)(k)}`, !0));
  }
  se.setEvaluated = g;
  const u = {};
  function y(c, h) {
    return c.scopeValue("func", {
      ref: h,
      code: u[h.code] || (u[h.code] = new t._Code(h.code))
    });
  }
  se.useFunc = y;
  var d;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(d || (se.Type = d = {}));
  function C(c, h, v) {
    if (c instanceof e.Name) {
      const k = h === d.Num;
      return v ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return v ? (0, e.getProperty)(c).toString() : "/" + p(c);
  }
  se.getErrorPath = C;
  function m(c, h, v = c.opts.strictSchema) {
    if (v) {
      if (h = `strict mode: ${h}`, v === !0)
        throw new Error(h);
      c.self.logger.warn(h);
    }
  }
  return se.checkStrictMode = m, se;
}
var It = {}, ho;
function Te() {
  if (ho) return It;
  ho = 1, Object.defineProperty(It, "__esModule", { value: !0 });
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
  return It.default = t, It;
}
var mo;
function Wn() {
  return mo || (mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Te();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: y }) => y ? (0, t.str)`"${u}" keyword must be ${y} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, y = e.keywordError, d, C) {
      const { it: m } = u, { gen: c, compositeRule: h, allErrors: v } = m, k = w(u, y, d);
      C ?? (h || v) ? l(c, k) : f(m, (0, t._)`[${k}]`);
    }
    e.reportError = o;
    function i(u, y = e.keywordError, d) {
      const { it: C } = u, { gen: m, compositeRule: c, allErrors: h } = C, v = w(u, y, d);
      l(m, v), c || h || f(C, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(u, y) {
      u.assign(r.default.errors, y), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(y, () => u.assign((0, t._)`${r.default.vErrors}.length`, y), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: y, schemaValue: d, data: C, errsCount: m, it: c }) {
      if (m === void 0)
        throw new Error("ajv implementation error");
      const h = u.name("err");
      u.forRange("i", m, r.default.errors, (v) => {
        u.const(h, (0, t._)`${r.default.vErrors}[${v}]`), u.if((0, t._)`${h}.instancePath === undefined`, () => u.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), u.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${y}`), c.opts.verbose && (u.assign((0, t._)`${h}.schema`, d), u.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function l(u, y) {
      const d = u.const("err", y);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function f(u, y) {
      const { gen: d, validateName: C, schemaEnv: m } = u;
      m.$async ? d.throw((0, t._)`new ${u.ValidationError}(${y})`) : (d.assign((0, t._)`${C}.errors`, y), d.return(!1));
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
    function w(u, y, d) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : b(u, y, d);
    }
    function b(u, y, d = {}) {
      const { gen: C, it: m } = u, c = [
        _(m, d),
        $(u, d)
      ];
      return g(u, y, c), C.object(...c);
    }
    function _({ errorPath: u }, { instancePath: y }) {
      const d = y ? (0, t.str)`${u}${(0, n.getErrorPath)(y, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function $({ keyword: u, it: { errSchemaPath: y } }, { schemaPath: d, parentSchema: C }) {
      let m = C ? y : (0, t.str)`${y}/${u}`;
      return d && (m = (0, t.str)`${m}${(0, n.getErrorPath)(d, n.Type.Str)}`), [p.schemaPath, m];
    }
    function g(u, { params: y, message: d }, C) {
      const { keyword: m, data: c, schemaValue: h, it: v } = u, { opts: k, propertyName: P, topSchemaRef: F, schemaPath: z } = v;
      C.push([p.keyword, m], [p.params, typeof y == "function" ? y(u) : y || (0, t._)`{}`]), k.messages && C.push([p.message, typeof d == "function" ? d(u) : d]), k.verbose && C.push([p.schema, h], [p.parentSchema, (0, t._)`${F}${z}`], [r.default.data, c]), P && C.push([p.propertyName, P]);
    }
  })(rr)), rr;
}
var go;
function La() {
  if (go) return et;
  go = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.boolOrEmptySchema = et.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Wn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Te(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: l, schema: f, validateName: p } = a;
    f === !1 ? s(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${p}.errors`, null), l.return(!0));
  }
  et.topBoolOrEmptySchema = o;
  function i(a, l) {
    const { gen: f, schema: p } = a;
    p === !1 ? (f.var(l, !1), s(a)) : f.var(l, !0);
  }
  et.boolOrEmptySchema = i;
  function s(a, l) {
    const { gen: f, data: p } = a, w = {
      gen: f,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(w, r, void 0, l);
  }
  return et;
}
var ge = {}, tt = {}, yo;
function Es() {
  if (yo) return tt;
  yo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.getRules = tt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  tt.isJSONType = n;
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
  return tt.getRules = r, tt;
}
var Le = {}, $o;
function xs() {
  if ($o) return Le;
  $o = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.shouldUseRule = Le.shouldUseGroup = Le.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  Le.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  Le.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return Le.shouldUseRule = n, Le;
}
var vo;
function Ln() {
  if (vo) return ge;
  vo = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ xs(), n = /* @__PURE__ */ Wn(), r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ae();
  var i;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(i || (ge.DataType = i = {}));
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
    const { gen: m, data: c, opts: h } = d, v = p(C, h.coerceTypes), k = C.length > 0 && !(v.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(d, C[0]));
    if (k) {
      const P = $(C, c, h.strictNumbers, i.Wrong);
      m.if(P, () => {
        v.length ? w(d, C, v) : u(d);
      });
    }
    return k;
  }
  ge.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(d, C) {
    return C ? d.filter((m) => f.has(m) || C === "array" && m === "array") : [];
  }
  function w(d, C, m) {
    const { gen: c, data: h, opts: v } = d, k = c.let("dataType", (0, r._)`typeof ${h}`), P = c.let("coerced", (0, r._)`undefined`);
    v.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => c.assign(h, (0, r._)`${h}[0]`).assign(k, (0, r._)`typeof ${h}`).if($(C, h, v.strictNumbers), () => c.assign(P, h))), c.if((0, r._)`${P} !== undefined`);
    for (const z of m)
      (f.has(z) || z === "array" && v.coerceTypes === "array") && F(z);
    c.else(), u(d), c.endIf(), c.if((0, r._)`${P} !== undefined`, () => {
      c.assign(h, P), b(d, P);
    });
    function F(z) {
      switch (z) {
        case "string":
          c.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(P, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${k} == "boolean" || ${h} === null
              || (${k} == "string" && ${h} && ${h} == +${h})`).assign(P, (0, r._)`+${h}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${k} === "boolean" || ${h} === null
              || (${k} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(P, (0, r._)`+${h}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(P, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(P, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), c.assign(P, null);
          return;
        case "array":
          c.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${h} === null`).assign(P, (0, r._)`[${h}]`);
      }
    }
  }
  function b({ gen: d, parentData: C, parentDataProperty: m }, c) {
    d.if((0, r._)`${C} !== undefined`, () => d.assign((0, r._)`${C}[${m}]`, c));
  }
  function _(d, C, m, c = i.Correct) {
    const h = c === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let v;
    switch (d) {
      case "null":
        return (0, r._)`${C} ${h} null`;
      case "array":
        v = (0, r._)`Array.isArray(${C})`;
        break;
      case "object":
        v = (0, r._)`${C} && typeof ${C} == "object" && !Array.isArray(${C})`;
        break;
      case "integer":
        v = k((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        v = k();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${d}`;
    }
    return c === i.Correct ? v : (0, r.not)(v);
    function k(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, P, m ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ge.checkDataType = _;
  function $(d, C, m, c) {
    if (d.length === 1)
      return _(d[0], C, m, c);
    let h;
    const v = (0, o.toHash)(d);
    if (v.array && v.object) {
      const k = (0, r._)`typeof ${C} != "object"`;
      h = v.null ? k : (0, r._)`!${C} || ${k}`, delete v.null, delete v.array, delete v.object;
    } else
      h = r.nil;
    v.number && delete v.integer;
    for (const k in v)
      h = (0, r.and)(h, _(k, C, m, c));
    return h;
  }
  ge.checkDataTypes = $;
  const g = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: C }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${C}}`
  };
  function u(d) {
    const C = y(d);
    (0, n.reportError)(C, g);
  }
  ge.reportTypeError = u;
  function y(d) {
    const { gen: C, data: m, schema: c } = d, h = (0, o.schemaRefOrVal)(d, c, "type");
    return {
      gen: C,
      keyword: "type",
      data: m,
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
var Ct = {}, bo;
function Va() {
  if (bo) return Ct;
  bo = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const l in s)
        r(o, l, s[l].default);
    else i === "array" && Array.isArray(a) && a.forEach((l, f) => r(o, f, l.default));
  }
  Ct.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: l, data: f, opts: p } = o;
    if (s === void 0)
      return;
    const w = (0, e._)`${f}${(0, e.getProperty)(i)}`;
    if (l) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${w}`);
      return;
    }
    let b = (0, e._)`${w} === undefined`;
    p.useDefaults === "empty" && (b = (0, e._)`${b} || ${w} === null || ${w} === ""`), a.if(b, (0, e._)`${w} = ${(0, e.stringify)(s)}`);
  }
  return Ct;
}
var xe = {}, de = {}, wo;
function Oe() {
  if (wo) return de;
  wo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ ae();
  function o(d, C) {
    const { gen: m, data: c, it: h } = d;
    m.if(p(m, c, C, h.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${C}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = o;
  function i({ gen: d, data: C, it: { opts: m } }, c, h) {
    return (0, e.or)(...c.map((v) => (0, e.and)(p(d, C, v, m.ownProperties), (0, e._)`${h} = ${v}`)));
  }
  de.checkMissingProp = i;
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
  function l(d, C, m) {
    return (0, e._)`${a(d)}.call(${C}, ${m})`;
  }
  de.isOwnProperty = l;
  function f(d, C, m, c) {
    const h = (0, e._)`${C}${(0, e.getProperty)(m)} !== undefined`;
    return c ? (0, e._)`${h} && ${l(d, C, m)}` : h;
  }
  de.propertyInData = f;
  function p(d, C, m, c) {
    const h = (0, e._)`${C}${(0, e.getProperty)(m)} === undefined`;
    return c ? (0, e.or)(h, (0, e.not)(l(d, C, m))) : h;
  }
  de.noPropertyInData = p;
  function w(d) {
    return d ? Object.keys(d).filter((C) => C !== "__proto__") : [];
  }
  de.allSchemaProperties = w;
  function b(d, C) {
    return w(C).filter((m) => !(0, t.alwaysValidSchema)(d, C[m]));
  }
  de.schemaProperties = b;
  function _({ schemaCode: d, data: C, it: { gen: m, topSchemaRef: c, schemaPath: h, errorPath: v }, it: k }, P, F, z) {
    const j = z ? (0, e._)`${d}, ${C}, ${c}${h}` : C, L = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, v)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && L.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const O = (0, e._)`${j}, ${m.object(...L)}`;
    return F !== e.nil ? (0, e._)`${P}.call(${F}, ${O})` : (0, e._)`${P}(${O})`;
  }
  de.callValidateCode = _;
  const $ = (0, e._)`new RegExp`;
  function g({ gen: d, it: { opts: C } }, m) {
    const c = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, v = h(m, c);
    return d.scopeValue("pattern", {
      key: v.toString(),
      ref: v,
      code: (0, e._)`${h.code === "new RegExp" ? $ : (0, r.useFunc)(d, h)}(${m}, ${c})`
    });
  }
  de.usePattern = g;
  function u(d) {
    const { gen: C, data: m, keyword: c, it: h } = d, v = C.name("valid");
    if (h.allErrors) {
      const P = C.let("valid", !0);
      return k(() => C.assign(P, !1)), P;
    }
    return C.var(v, !0), k(() => C.break()), v;
    function k(P) {
      const F = C.const("len", (0, e._)`${m}.length`);
      C.forRange("i", 0, F, (z) => {
        d.subschema({
          keyword: c,
          dataProp: z,
          dataPropType: t.Type.Num
        }, v), C.if((0, e.not)(v), P);
      });
    }
  }
  de.validateArray = u;
  function y(d) {
    const { gen: C, schema: m, keyword: c, it: h } = d;
    if (!Array.isArray(m))
      throw new Error("ajv implementation error");
    if (m.some((F) => (0, t.alwaysValidSchema)(h, F)) && !h.opts.unevaluated)
      return;
    const k = C.let("valid", !1), P = C.name("_valid");
    C.block(() => m.forEach((F, z) => {
      const j = d.subschema({
        keyword: c,
        schemaProp: z,
        compositeRule: !0
      }, P);
      C.assign(k, (0, e._)`${k} || ${P}`), d.mergeValidEvaluated(j, P) || C.if((0, e.not)(k));
    })), d.result(k, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = y, de;
}
var _o;
function Ba() {
  if (_o) return xe;
  _o = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.validateKeywordUsage = xe.validSchemaType = xe.funcKeywordCode = xe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Wn();
  function o(b, _) {
    const { gen: $, keyword: g, schema: u, parentSchema: y, it: d } = b, C = _.macro.call(d.self, u, y, d), m = f($, g, C);
    d.opts.validateSchema !== !1 && d.self.validateSchema(C, !0);
    const c = $.name("valid");
    b.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${g}`,
      topSchemaRef: m,
      compositeRule: !0
    }, c), b.pass(c, () => b.error(!0));
  }
  xe.macroKeywordCode = o;
  function i(b, _) {
    var $;
    const { gen: g, keyword: u, schema: y, parentSchema: d, $data: C, it: m } = b;
    l(m, _);
    const c = !C && _.compile ? _.compile.call(m.self, y, d, m) : _.validate, h = f(g, u, c), v = g.let("valid");
    b.block$data(v, k), b.ok(($ = _.valid) !== null && $ !== void 0 ? $ : v);
    function k() {
      if (_.errors === !1)
        z(), _.modifying && s(b), j(() => b.error());
      else {
        const L = _.async ? P() : F();
        _.modifying && s(b), j(() => a(b, L));
      }
    }
    function P() {
      const L = g.let("ruleErrs", null);
      return g.try(() => z((0, e._)`await `), (O) => g.assign(v, !1).if((0, e._)`${O} instanceof ${m.ValidationError}`, () => g.assign(L, (0, e._)`${O}.errors`), () => g.throw(O))), L;
    }
    function F() {
      const L = (0, e._)`${h}.errors`;
      return g.assign(L, null), z(e.nil), L;
    }
    function z(L = _.async ? (0, e._)`await ` : e.nil) {
      const O = m.opts.passContext ? t.default.this : t.default.self, G = !("compile" in _ && !C || _.schema === !1);
      g.assign(v, (0, e._)`${L}${(0, n.callValidateCode)(b, h, O, G)}`, _.modifying);
    }
    function j(L) {
      var O;
      g.if((0, e.not)((O = _.valid) !== null && O !== void 0 ? O : v), L);
    }
  }
  xe.funcKeywordCode = i;
  function s(b) {
    const { gen: _, data: $, it: g } = b;
    _.if(g.parentData, () => _.assign($, (0, e._)`${g.parentData}[${g.parentDataProperty}]`));
  }
  function a(b, _) {
    const { gen: $ } = b;
    $.if((0, e._)`Array.isArray(${_})`, () => {
      $.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${_} : ${t.default.vErrors}.concat(${_})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(b);
    }, () => b.error());
  }
  function l({ schemaEnv: b }, _) {
    if (_.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function f(b, _, $) {
    if ($ === void 0)
      throw new Error(`keyword "${_}" failed to compile`);
    return b.scopeValue("keyword", typeof $ == "function" ? { ref: $ } : { ref: $, code: (0, e.stringify)($) });
  }
  function p(b, _, $ = !1) {
    return !_.length || _.some((g) => g === "array" ? Array.isArray(b) : g === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == g || $ && typeof b > "u");
  }
  xe.validSchemaType = p;
  function w({ schema: b, opts: _, self: $, errSchemaPath: g }, u, y) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(y) : u.keyword !== y)
      throw new Error("ajv implementation error");
    const d = u.dependencies;
    if (d?.some((C) => !Object.prototype.hasOwnProperty.call(b, C)))
      throw new Error(`parent schema must have dependencies of ${y}: ${d.join(",")}`);
    if (u.validateSchema && !u.validateSchema(b[y])) {
      const m = `keyword "${y}" value is invalid at path "${g}": ` + $.errorsText(u.validateSchema.errors);
      if (_.validateSchema === "log")
        $.logger.error(m);
      else
        throw new Error(m);
    }
  }
  return xe.validateKeywordUsage = w, xe;
}
var Ve = {}, So;
function Ua() {
  if (So) return Ve;
  So = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.extendSubschemaMode = Ve.extendSubschemaData = Ve.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae();
  function n(i, { keyword: s, schemaProp: a, schema: l, schemaPath: f, errSchemaPath: p, topSchemaRef: w }) {
    if (s !== void 0 && l !== void 0)
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
    if (l !== void 0) {
      if (f === void 0 || p === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: f,
        topSchemaRef: w,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ve.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: l, data: f, dataTypes: p, propertyName: w }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = s;
    if (a !== void 0) {
      const { errorPath: $, dataPathArr: g, opts: u } = s, y = b.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      _(y), i.errorPath = (0, e.str)`${$}${(0, t.getErrorPath)(a, l, u.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...g, i.parentDataProperty];
    }
    if (f !== void 0) {
      const $ = f instanceof e.Name ? f : b.let("data", f, !0);
      _($), w !== void 0 && (i.propertyName = w);
    }
    p && (i.dataTypes = p);
    function _($) {
      i.data = $, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, $];
    }
  }
  Ve.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: p }) {
    l !== void 0 && (i.compositeRule = l), f !== void 0 && (i.createErrors = f), p !== void 0 && (i.allErrors = p), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Ve.extendSubschemaMode = o, Ve;
}
var be = {}, ar, Co;
function Ps() {
  return Co || (Co = 1, ar = function e(t, n) {
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
  }), ar;
}
var cr = { exports: {} }, ko;
function Ka() {
  if (ko) return cr.exports;
  ko = 1;
  var e = cr.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, l, f, p, w, b) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, l, f, p, w, b);
      for (var _ in s) {
        var $ = s[_];
        if (Array.isArray($)) {
          if (_ in e.arrayKeywords)
            for (var g = 0; g < $.length; g++)
              t(r, o, i, $[g], a + "/" + _ + "/" + g, l, a, _, s, g);
        } else if (_ in e.propsKeywords) {
          if ($ && typeof $ == "object")
            for (var u in $)
              t(r, o, i, $[u], a + "/" + _ + "/" + n(u), l, a, _, s, u);
        } else (_ in e.keywords || r.allKeys && !(_ in e.skipKeywords)) && t(r, o, i, $, a + "/" + _, l, a, _, s);
      }
      i(s, a, l, f, p, w, b);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return cr.exports;
}
var Eo;
function Jn() {
  if (Eo) return be;
  Eo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ae(), t = Ps(), n = Ka(), r = /* @__PURE__ */ new Set([
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
  function o(g, u = !0) {
    return typeof g == "boolean" ? !0 : u === !0 ? !s(g) : u ? a(g) <= u : !1;
  }
  be.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(g) {
    for (const u in g) {
      if (i.has(u))
        return !0;
      const y = g[u];
      if (Array.isArray(y) && y.some(s) || typeof y == "object" && s(y))
        return !0;
    }
    return !1;
  }
  function a(g) {
    let u = 0;
    for (const y in g) {
      if (y === "$ref")
        return 1 / 0;
      if (u++, !r.has(y) && (typeof g[y] == "object" && (0, e.eachItem)(g[y], (d) => u += a(d)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function l(g, u = "", y) {
    y !== !1 && (u = w(u));
    const d = g.parse(u);
    return f(g, d);
  }
  be.getFullPath = l;
  function f(g, u) {
    return g.serialize(u).split("#")[0] + "#";
  }
  be._getFullPath = f;
  const p = /#\/?$/;
  function w(g) {
    return g ? g.replace(p, "") : "";
  }
  be.normalizeId = w;
  function b(g, u, y) {
    return y = w(y), g.resolve(u, y);
  }
  be.resolveUrl = b;
  const _ = /^[a-z_][-a-z0-9._]*$/i;
  function $(g, u) {
    if (typeof g == "boolean")
      return {};
    const { schemaId: y, uriResolver: d } = this.opts, C = w(g[y] || u), m = { "": C }, c = l(d, C, !1), h = {}, v = /* @__PURE__ */ new Set();
    return n(g, { allKeys: !0 }, (F, z, j, L) => {
      if (L === void 0)
        return;
      const O = c + z;
      let G = m[L];
      typeof F[y] == "string" && (G = Y.call(this, F[y])), oe.call(this, F.$anchor), oe.call(this, F.$dynamicAnchor), m[z] = G;
      function Y(X) {
        const W = this.opts.uriResolver.resolve;
        if (X = w(G ? W(G, X) : X), v.has(X))
          throw P(X);
        v.add(X);
        let q = this.refs[X];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(F, q.schema, X) : X !== w(O) && (X[0] === "#" ? (k(F, h[X], X), h[X] = F) : this.refs[X] = O), X;
      }
      function oe(X) {
        if (typeof X == "string") {
          if (!_.test(X))
            throw new Error(`invalid anchor "${X}"`);
          Y.call(this, `#${X}`);
        }
      }
    }), h;
    function k(F, z, j) {
      if (z !== void 0 && !t(F, z))
        throw P(j);
    }
    function P(F) {
      return new Error(`reference "${F}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = $, be;
}
var xo;
function Yn() {
  if (xo) return qe;
  xo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ La(), t = /* @__PURE__ */ Ln(), n = /* @__PURE__ */ xs(), r = /* @__PURE__ */ Ln(), o = /* @__PURE__ */ Va(), i = /* @__PURE__ */ Ba(), s = /* @__PURE__ */ Ua(), a = /* @__PURE__ */ ie(), l = /* @__PURE__ */ Te(), f = /* @__PURE__ */ Jn(), p = /* @__PURE__ */ ae(), w = /* @__PURE__ */ Wn();
  function b(x) {
    if (c(x) && (v(x), m(x))) {
      u(x);
      return;
    }
    _(x, () => (0, e.topBoolOrEmptySchema)(x));
  }
  qe.validateFunctionCode = b;
  function _({ gen: x, validateName: T, schema: B, schemaEnv: J, opts: K }, Q) {
    K.code.es5 ? x.func(T, (0, a._)`${l.default.data}, ${l.default.valCxt}`, J.$async, () => {
      x.code((0, a._)`"use strict"; ${d(B, K)}`), g(x, K), x.code(Q);
    }) : x.func(T, (0, a._)`${l.default.data}, ${$(K)}`, J.$async, () => x.code(d(B, K)).code(Q));
  }
  function $(x) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${x.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function g(x, T) {
    x.if(l.default.valCxt, () => {
      x.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), x.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), x.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), x.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), T.dynamicRef && x.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      x.var(l.default.instancePath, (0, a._)`""`), x.var(l.default.parentData, (0, a._)`undefined`), x.var(l.default.parentDataProperty, (0, a._)`undefined`), x.var(l.default.rootData, l.default.data), T.dynamicRef && x.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(x) {
    const { schema: T, opts: B, gen: J } = x;
    _(x, () => {
      B.$comment && T.$comment && L(x), F(x), J.let(l.default.vErrors, null), J.let(l.default.errors, 0), B.unevaluated && y(x), k(x), O(x);
    });
  }
  function y(x) {
    const { gen: T, validateName: B } = x;
    x.evaluated = T.const("evaluated", (0, a._)`${B}.evaluated`), T.if((0, a._)`${x.evaluated}.dynamicProps`, () => T.assign((0, a._)`${x.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${x.evaluated}.dynamicItems`, () => T.assign((0, a._)`${x.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(x, T) {
    const B = typeof x == "object" && x[T.schemaId];
    return B && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function C(x, T) {
    if (c(x) && (v(x), m(x))) {
      h(x, T);
      return;
    }
    (0, e.boolOrEmptySchema)(x, T);
  }
  function m({ schema: x, self: T }) {
    if (typeof x == "boolean")
      return !x;
    for (const B in x)
      if (T.RULES.all[B])
        return !0;
    return !1;
  }
  function c(x) {
    return typeof x.schema != "boolean";
  }
  function h(x, T) {
    const { schema: B, gen: J, opts: K } = x;
    K.$comment && B.$comment && L(x), z(x), j(x);
    const Q = J.const("_errs", l.default.errors);
    k(x, Q), J.var(T, (0, a._)`${Q} === ${l.default.errors}`);
  }
  function v(x) {
    (0, p.checkUnknownRules)(x), P(x);
  }
  function k(x, T) {
    if (x.opts.jtd)
      return Y(x, [], !1, T);
    const B = (0, t.getSchemaTypes)(x.schema), J = (0, t.coerceAndCheckDataType)(x, B);
    Y(x, B, !J, T);
  }
  function P(x) {
    const { schema: T, errSchemaPath: B, opts: J, self: K } = x;
    T.$ref && J.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(T, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function F(x) {
    const { schema: T, opts: B } = x;
    T.default !== void 0 && B.useDefaults && B.strictSchema && (0, p.checkStrictMode)(x, "default is ignored in the schema root");
  }
  function z(x) {
    const T = x.schema[x.opts.schemaId];
    T && (x.baseId = (0, f.resolveUrl)(x.opts.uriResolver, x.baseId, T));
  }
  function j(x) {
    if (x.schema.$async && !x.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function L({ gen: x, schemaEnv: T, schema: B, errSchemaPath: J, opts: K }) {
    const Q = B.$comment;
    if (K.$comment === !0)
      x.code((0, a._)`${l.default.self}.logger.log(${Q})`);
    else if (typeof K.$comment == "function") {
      const ne = (0, a.str)`${J}/$comment`, ue = x.scopeValue("root", { ref: T.root });
      x.code((0, a._)`${l.default.self}.opts.$comment(${Q}, ${ne}, ${ue}.schema)`);
    }
  }
  function O(x) {
    const { gen: T, schemaEnv: B, validateName: J, ValidationError: K, opts: Q } = x;
    B.$async ? T.if((0, a._)`${l.default.errors} === 0`, () => T.return(l.default.data), () => T.throw((0, a._)`new ${K}(${l.default.vErrors})`)) : (T.assign((0, a._)`${J}.errors`, l.default.vErrors), Q.unevaluated && G(x), T.return((0, a._)`${l.default.errors} === 0`));
  }
  function G({ gen: x, evaluated: T, props: B, items: J }) {
    B instanceof a.Name && x.assign((0, a._)`${T}.props`, B), J instanceof a.Name && x.assign((0, a._)`${T}.items`, J);
  }
  function Y(x, T, B, J) {
    const { gen: K, schema: Q, data: ne, allErrors: ue, opts: le, self: me } = x, { RULES: pe } = me;
    if (Q.$ref && (le.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(Q, pe))) {
      K.block(() => V(x, "$ref", pe.all.$ref.definition));
      return;
    }
    le.jtd || X(x, T), K.block(() => {
      for (const ve of pe.rules)
        Ie(ve);
      Ie(pe.post);
    });
    function Ie(ve) {
      (0, n.shouldUseGroup)(Q, ve) && (ve.type ? (K.if((0, r.checkDataType)(ve.type, ne, le.strictNumbers)), oe(x, ve), T.length === 1 && T[0] === ve.type && B && (K.else(), (0, r.reportTypeError)(x)), K.endIf()) : oe(x, ve), ue || K.if((0, a._)`${l.default.errors} === ${J || 0}`));
    }
  }
  function oe(x, T) {
    const { gen: B, schema: J, opts: { useDefaults: K } } = x;
    K && (0, o.assignDefaults)(x, T.type), B.block(() => {
      for (const Q of T.rules)
        (0, n.shouldUseRule)(J, Q) && V(x, Q.keyword, Q.definition, T.type);
    });
  }
  function X(x, T) {
    x.schemaEnv.meta || !x.opts.strictTypes || (W(x, T), x.opts.allowUnionTypes || q(x, T), A(x, x.dataTypes));
  }
  function W(x, T) {
    if (T.length) {
      if (!x.dataTypes.length) {
        x.dataTypes = T;
        return;
      }
      T.forEach((B) => {
        N(x.dataTypes, B) || E(x, `type "${B}" not allowed by context "${x.dataTypes.join(",")}"`);
      }), S(x, T);
    }
  }
  function q(x, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && E(x, "use allowUnionTypes to allow union type keyword");
  }
  function A(x, T) {
    const B = x.self.RULES.all;
    for (const J in B) {
      const K = B[J];
      if (typeof K == "object" && (0, n.shouldUseRule)(x.schema, K)) {
        const { type: Q } = K.definition;
        Q.length && !Q.some((ne) => D(T, ne)) && E(x, `missing type "${Q.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function D(x, T) {
    return x.includes(T) || T === "number" && x.includes("integer");
  }
  function N(x, T) {
    return x.includes(T) || T === "integer" && x.includes("number");
  }
  function S(x, T) {
    const B = [];
    for (const J of x.dataTypes)
      N(T, J) ? B.push(J) : T.includes("integer") && J === "number" && B.push("integer");
    x.dataTypes = B;
  }
  function E(x, T) {
    const B = x.schemaEnv.baseId + x.errSchemaPath;
    T += ` at "${B}" (strictTypes)`, (0, p.checkStrictMode)(x, T, x.opts.strictTypes);
  }
  class I {
    constructor(T, B, J) {
      if ((0, i.validateKeywordUsage)(T, B, J), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = J, this.data = T.data, this.schema = T.schema[J], this.$data = B.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(T, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = B, this.$data)
        this.schemaCode = T.gen.const("vSchema", ee(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
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
      (T ? w.reportExtraError : w.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
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
      const { gen: J, schemaCode: K, schemaType: Q, def: ne } = this;
      J.if((0, a.or)((0, a._)`${K} === undefined`, B)), T !== a.nil && J.assign(T, !0), (Q.length || ne.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && J.assign(T, !1)), J.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: B, schemaType: J, def: K, it: Q } = this;
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
        if (K.validateSchema) {
          const le = T.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, a._)`!${le}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(T, B) {
      const J = (0, s.getSubschema)(this.it, T);
      (0, s.extendSubschemaData)(J, this.it, T), (0, s.extendSubschemaMode)(J, T);
      const K = { ...this.it, ...J, items: void 0, props: void 0 };
      return C(K, B), K;
    }
    mergeEvaluated(T, B) {
      const { it: J, gen: K } = this;
      J.opts.unevaluated && (J.props !== !0 && T.props !== void 0 && (J.props = p.mergeEvaluated.props(K, T.props, J.props, B)), J.items !== !0 && T.items !== void 0 && (J.items = p.mergeEvaluated.items(K, T.items, J.items, B)));
    }
    mergeValidEvaluated(T, B) {
      const { it: J, gen: K } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return K.if(B, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  qe.KeywordCxt = I;
  function V(x, T, B, J) {
    const K = new I(x, B, T);
    "code" in B ? B.code(K, J) : K.$data && B.validate ? (0, i.funcKeywordCode)(K, B) : "macro" in B ? (0, i.macroKeywordCode)(K, B) : (B.compile || B.validate) && (0, i.funcKeywordCode)(K, B);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, re = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(x, { dataLevel: T, dataNames: B, dataPathArr: J }) {
    let K, Q;
    if (x === "")
      return l.default.rootData;
    if (x[0] === "/") {
      if (!H.test(x))
        throw new Error(`Invalid JSON-pointer: ${x}`);
      K = x, Q = l.default.rootData;
    } else {
      const me = re.exec(x);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${x}`);
      const pe = +me[1];
      if (K = me[2], K === "#") {
        if (pe >= T)
          throw new Error(le("property/index", pe));
        return J[T - pe];
      }
      if (pe > T)
        throw new Error(le("data", pe));
      if (Q = B[T - pe], !K)
        return Q;
    }
    let ne = Q;
    const ue = K.split("/");
    for (const me of ue)
      me && (Q = (0, a._)`${Q}${(0, a.getProperty)((0, p.unescapeJsonPointer)(me))}`, ne = (0, a._)`${ne} && ${Q}`);
    return ne;
    function le(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${T}`;
    }
  }
  return qe.getData = ee, qe;
}
var Dt = {}, Po;
function Dr() {
  if (Po) return Dt;
  Po = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Dt.default = e, Dt;
}
var qt = {}, Ao;
function Xn() {
  if (Ao) return qt;
  Ao = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var we = {}, Ro;
function Zn() {
  if (Ro) return we;
  Ro = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Dr(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ Jn(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ Yn();
  class s {
    constructor(y) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof y.schema == "object" && (C = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (d = y.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(C?.[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(u) {
    const y = p.call(this, u);
    if (y)
      return y;
    const d = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: m } = this.opts.code, { ownProperties: c } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: m, ownProperties: c });
    let v;
    u.$async && (v = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = h.scopeName("validate");
    u.validateName = k;
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
      validateName: k,
      ValidationError: v,
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
      this._compilations.add(u), (0, i.validateFunctionCode)(P), h.optimize(this.opts.code.optimize);
      const z = h.toString();
      F = `${h.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (F = this.opts.code.process(F, u));
      const L = new Function(`${n.default.self}`, `${n.default.scope}`, F)(this, this.scope.get());
      if (this.scope.value(k, { ref: L }), L.errors = null, L.schema = u.schema, L.schemaEnv = u, u.$async && (L.$async = !0), this.opts.code.source === !0 && (L.source = { validateName: k, validateCode: z, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: O, items: G } = P;
        L.evaluated = {
          props: O instanceof e.Name ? void 0 : O,
          items: G instanceof e.Name ? void 0 : G,
          dynamicProps: O instanceof e.Name,
          dynamicItems: G instanceof e.Name
        }, L.source && (L.source.evaluated = (0, e.stringify)(L.evaluated));
      }
      return u.validate = L, u;
    } catch (z) {
      throw delete u.validate, delete u.validateName, F && this.logger.error("Error compiling schema, function code:", F), z;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function l(u, y, d) {
    var C;
    d = (0, r.resolveUrl)(this.opts.uriResolver, y, d);
    const m = u.refs[d];
    if (m)
      return m;
    let c = b.call(this, u, d);
    if (c === void 0) {
      const h = (C = u.localRefs) === null || C === void 0 ? void 0 : C[d], { schemaId: v } = this.opts;
      h && (c = new s({ schema: h, schemaId: v, root: u, baseId: y }));
    }
    if (c !== void 0)
      return u.refs[d] = f.call(this, c);
  }
  we.resolveRef = l;
  function f(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function p(u) {
    for (const y of this._compilations)
      if (w(y, u))
        return y;
  }
  we.getCompilingSchema = p;
  function w(u, y) {
    return u.schema === y.schema && u.root === y.root && u.baseId === y.baseId;
  }
  function b(u, y) {
    let d;
    for (; typeof (d = this.refs[y]) == "string"; )
      y = d;
    return d || this.schemas[y] || _.call(this, u, y);
  }
  function _(u, y) {
    const d = this.opts.uriResolver.parse(y), C = (0, r._getFullPath)(this.opts.uriResolver, d);
    let m = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === m)
      return g.call(this, d, u);
    const c = (0, r.normalizeId)(C), h = this.refs[c] || this.schemas[c];
    if (typeof h == "string") {
      const v = _.call(this, u, h);
      return typeof v?.schema != "object" ? void 0 : g.call(this, d, v);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), c === (0, r.normalizeId)(y)) {
        const { schema: v } = h, { schemaId: k } = this.opts, P = v[k];
        return P && (m = (0, r.resolveUrl)(this.opts.uriResolver, m, P)), new s({ schema: v, schemaId: k, root: u, baseId: m });
      }
      return g.call(this, d, h);
    }
  }
  we.resolveSchema = _;
  const $ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function g(u, { baseId: y, schema: d, root: C }) {
    var m;
    if (((m = u.fragment) === null || m === void 0 ? void 0 : m[0]) !== "/")
      return;
    for (const v of u.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const k = d[(0, o.unescapeFragment)(v)];
      if (k === void 0)
        return;
      d = k;
      const P = typeof d == "object" && d[this.opts.schemaId];
      !$.has(v) && P && (y = (0, r.resolveUrl)(this.opts.uriResolver, y, P));
    }
    let c;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const v = (0, r.resolveUrl)(this.opts.uriResolver, y, d.$ref);
      c = _.call(this, C, v);
    }
    const { schemaId: h } = this.opts;
    if (c = c || new s({ schema: d, schemaId: h, root: C, baseId: y }), c.schema !== c.root.schema)
      return c;
  }
  return we;
}
const Ha = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ga = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Wa = "object", Ja = ["$data"], Ya = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Xa = !1, Za = {
  $id: Ha,
  description: Ga,
  type: Wa,
  required: Ja,
  properties: Ya,
  additionalProperties: Xa
};
var Lt = {}, kt = { exports: {} }, lr, No;
function As() {
  if (No) return lr;
  No = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(c) {
    let h = "", v = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (v = c[k].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        h += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (v = c[k].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      h += c[k];
    }
    return h;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, h, v) {
    if (c.length) {
      const k = i(c);
      if (k !== "")
        h.push(k);
      else
        return v.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function f(c) {
    let h = 0;
    const v = { error: !1, address: "", zone: "" }, k = [], P = [];
    let F = !1, z = !1, j = l;
    for (let L = 0; L < c.length; L++) {
      const O = c[L];
      if (!(O === "[" || O === "]"))
        if (O === ":") {
          if (F === !0 && (z = !0), !j(P, k, v))
            break;
          if (++h > 7) {
            v.error = !0;
            break;
          }
          L > 0 && c[L - 1] === ":" && (F = !0), k.push(":");
          continue;
        } else if (O === "%") {
          if (!j(P, k, v))
            break;
          j = a;
        } else {
          P.push(O);
          continue;
        }
    }
    return P.length && (j === a ? v.zone = P.join("") : z ? k.push(P.join("")) : k.push(i(P))), v.address = k.join(""), v;
  }
  function p(c) {
    if (w(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const h = f(c);
    if (h.error)
      return { host: c, isIPV6: !1 };
    {
      let v = h.address, k = h.address;
      return h.zone && (v += "%" + h.zone, k += "%25" + h.zone), { host: v, isIPV6: !0, escapedHost: k };
    }
  }
  function w(c, h) {
    let v = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === h && v++;
    return v;
  }
  function b(c) {
    let h = c;
    const v = [];
    let k = -1, P = 0;
    for (; P = h.length; ) {
      if (P === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          v.push("/");
          break;
        } else {
          v.push(h);
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
          v.push("/");
          break;
        }
      } else if (P === 3 && h === "/..") {
        v.length !== 0 && v.pop(), v.push("/");
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
          h = h.slice(3), v.length !== 0 && v.pop();
          continue;
        }
      }
      if ((k = h.indexOf("/", 1)) === -1) {
        v.push(h);
        break;
      } else
        v.push(h.slice(0, k)), h = h.slice(k);
    }
    return v.join("");
  }
  const _ = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, $ = /[@/?#:]/g, g = /[@/?#]/g;
  function u(c, h) {
    const v = h ? g : $;
    return v.lastIndex = 0, c.replace(v, (k) => _[k]);
  }
  function y(c, h = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let v = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const P = c.slice(k + 1, k + 3);
        if (n(P)) {
          const F = P.toUpperCase(), z = String.fromCharCode(parseInt(F, 16));
          h && r(z) ? v += z : v += "%" + F, k += 2;
          continue;
        }
      }
      v += c[k];
    }
    return v;
  }
  function d(c) {
    let h = "";
    for (let v = 0; v < c.length; v++) {
      if (c[v] === "%" && v + 2 < c.length) {
        const k = c.slice(v + 1, v + 3);
        if (n(k)) {
          const P = k.toUpperCase(), F = String.fromCharCode(parseInt(P, 16));
          F !== "." && r(F) ? h += F : h += "%" + P, v += 2;
          continue;
        }
      }
      o(c[v]) ? h += c[v] : h += escape(c[v]);
    }
    return h;
  }
  function C(c) {
    let h = "";
    for (let v = 0; v < c.length; v++) {
      if (c[v] === "%" && v + 2 < c.length) {
        const k = c.slice(v + 1, v + 3);
        if (n(k)) {
          h += "%" + k.toUpperCase(), v += 2;
          continue;
        }
      }
      h += escape(c[v]);
    }
    return h;
  }
  function m(c) {
    const h = [];
    if (c.userinfo !== void 0 && (h.push(c.userinfo), h.push("@")), c.host !== void 0) {
      let v = unescape(c.host);
      if (!t(v)) {
        const k = p(v);
        k.isIPV6 === !0 ? v = `[${k.escapedHost}]` : v = u(v, !1);
      }
      h.push(v);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (h.push(":"), h.push(String(c.port))), h.length ? h.join("") : void 0;
  }
  return lr = {
    nonSimpleDomain: s,
    recomposeAuthority: m,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: y,
    normalizePathEncoding: d,
    escapePreservingEscapes: C,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: i
  }, lr;
}
var dr, Mo;
function Qa() {
  if (Mo) return dr;
  Mo = 1;
  const { isUUID: e } = As(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function i(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function s(c) {
    const h = String(c.scheme).toLowerCase() === "https";
    return (c.port === (h ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = o(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (o(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [h, v] = c.resourceName.split("?");
      c.path = h && h !== "/" ? h : void 0, c.query = v, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function f(c, h) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const v = c.path.match(t);
    if (v) {
      const k = h.scheme || c.scheme || "urn";
      c.nid = v[1].toLowerCase(), c.nss = v[2];
      const P = `${k}:${h.nid || c.nid}`, F = m(P);
      c.path = void 0, F && (c = F.parse(c, h));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function p(c, h) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const v = h.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), P = `${v}:${h.nid || k}`, F = m(P);
    F && (c = F.serialize(c, h));
    const z = c, j = c.nss;
    return z.path = `${k || h.nid}:${j}`, h.skipEscape = !0, z;
  }
  function w(c, h) {
    const v = c;
    return v.uuid = v.nss, v.nss = void 0, !h.tolerant && (!v.uuid || !e(v.uuid)) && (v.error = v.error || "UUID is not valid."), v;
  }
  function b(c) {
    const h = c;
    return h.nss = (c.uuid || "").toLowerCase(), h;
  }
  const _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: s
    }
  ), $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: _.domainHost,
      parse: i,
      serialize: s
    }
  ), g = (
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
      domainHost: g.domainHost,
      parse: g.parse,
      serialize: g.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: _,
      https: $,
      ws: g,
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
          parse: w,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function m(c) {
    return c && (C[
      /** @type {SchemeName} */
      c
    ] || C[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return dr = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: m
  }, dr;
}
var To;
function ec() {
  if (To) return kt.exports;
  To = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: l } = As(), { SCHEMES: f, getSchemeHandler: p } = Qa();
  function w(P, F) {
    return typeof P == "string" ? P = /** @type {T} */
    c(P, F) : typeof P == "object" && (P = /** @type {T} */
    m(g(P, F), F)), P;
  }
  function b(P, F, z) {
    const j = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, L = _(m(P, j), m(F, j), j, !0);
    return j.skipEscape = !0, g(L, j);
  }
  function _(P, F, z, j) {
    const L = {};
    return j || (P = m(g(P, z), z), F = m(g(F, z), z)), z = z || {}, !z.tolerant && F.scheme ? (L.scheme = F.scheme, L.userinfo = F.userinfo, L.host = F.host, L.port = F.port, L.path = t(F.path || ""), L.query = F.query) : (F.userinfo !== void 0 || F.host !== void 0 || F.port !== void 0 ? (L.userinfo = F.userinfo, L.host = F.host, L.port = F.port, L.path = t(F.path || ""), L.query = F.query) : (F.path ? (F.path[0] === "/" ? L.path = t(F.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? L.path = "/" + F.path : P.path ? L.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + F.path : L.path = F.path, L.path = t(L.path)), L.query = F.query) : (L.path = P.path, F.query !== void 0 ? L.query = F.query : L.query = P.query), L.userinfo = P.userinfo, L.host = P.host, L.port = P.port), L.scheme = P.scheme), L.fragment = F.fragment, L;
  }
  function $(P, F, z) {
    const j = v(P, z), L = v(F, z);
    return j !== void 0 && L !== void 0 && j.toLowerCase() === L.toLowerCase();
  }
  function g(P, F) {
    const z = {
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
    }, j = Object.assign({}, F), L = [], O = p(j.scheme || z.scheme);
    O && O.serialize && O.serialize(z, j), z.path !== void 0 && (j.skipEscape ? z.path = r(z.path) : (z.path = i(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), j.reference !== "suffix" && z.scheme && L.push(z.scheme, ":");
    const G = n(z);
    if (G !== void 0 && (j.reference !== "suffix" && L.push("//"), L.push(G), z.path && z.path[0] !== "/" && L.push("/")), z.path !== void 0) {
      let Y = z.path;
      !j.absolutePath && (!O || !O.absolutePath) && (Y = t(Y)), G === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), L.push(Y);
    }
    return z.query !== void 0 && L.push("?", z.query), z.fragment !== void 0 && L.push("#", z.fragment), L.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(P, F) {
    if (F[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function C(P, F) {
    const z = Object.assign({}, F), j = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let L = !1, O = !1;
    z.reference === "suffix" && (z.scheme ? P = z.scheme + ":" + P : P = "//" + P);
    const G = P.match(y);
    G !== null && G[1].indexOf("\\") !== -1 && (j.error = "URI authority must not contain a literal backslash.", L = !0);
    const Y = P.match(u);
    if (Y) {
      j.scheme = Y[1], j.userinfo = Y[3], j.host = Y[4], j.port = parseInt(Y[5], 10), j.path = Y[6] || "", j.query = Y[7], j.fragment = Y[8], isNaN(j.port) && (j.port = Y[5]);
      const oe = d(j, Y);
      if (oe !== void 0 && (j.error = j.error || oe, L = !0), j.host)
        if (a(j.host) === !1) {
          const q = e(j.host);
          j.host = q.host.toLowerCase(), O = q.isIPV6;
        } else
          O = !0;
      j.scheme === void 0 && j.userinfo === void 0 && j.host === void 0 && j.port === void 0 && j.query === void 0 && !j.path ? j.reference = "same-document" : j.scheme === void 0 ? j.reference = "relative" : j.fragment === void 0 ? j.reference = "absolute" : j.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== j.reference && (j.error = j.error || "URI is not a " + z.reference + " reference.");
      const X = p(z.scheme || j.scheme);
      if (!z.unicodeSupport && (!X || !X.unicodeSupport) && j.host && (z.domainHost || X && X.domainHost) && O === !1 && l(j.host))
        try {
          j.host = new URL("http://" + j.host).hostname;
        } catch (W) {
          j.error = j.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (j.scheme !== void 0 && (j.scheme = unescape(j.scheme)), j.host !== void 0 && (j.host = s(unescape(j.host), O))), j.path && (j.path = o(j.path)), j.fragment))
        try {
          j.fragment = encodeURI(decodeURIComponent(j.fragment));
        } catch {
          j.error = j.error || "URI malformed";
        }
      X && X.parse && X.parse(j, z);
    } else
      j.error = j.error || "URI can not be parsed.";
    return { parsed: j, malformedAuthorityOrPort: L };
  }
  function m(P, F) {
    return C(P, F).parsed;
  }
  function c(P, F) {
    return h(P, F).normalized;
  }
  function h(P, F) {
    const { parsed: z, malformedAuthorityOrPort: j } = C(P, F);
    return {
      normalized: j ? P : g(z, F),
      malformedAuthorityOrPort: j
    };
  }
  function v(P, F) {
    if (typeof P == "string") {
      const { normalized: z, malformedAuthorityOrPort: j } = h(P, F);
      return j ? void 0 : z;
    }
    if (typeof P == "object")
      return g(P, F);
  }
  const k = {
    SCHEMES: f,
    normalize: w,
    resolve: b,
    resolveComponent: _,
    equal: $,
    serialize: g,
    parse: m
  };
  return kt.exports = k, kt.exports.default = k, kt.exports.fastUri = k, kt.exports;
}
var Oo;
function tc() {
  if (Oo) return Lt;
  Oo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = ec();
  return e.code = 'require("ajv/dist/runtime/uri").default', Lt.default = e, Lt;
}
var Fo;
function nc() {
  return Fo || (Fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Yn();
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
    const r = /* @__PURE__ */ Dr(), o = /* @__PURE__ */ Xn(), i = /* @__PURE__ */ Es(), s = /* @__PURE__ */ Zn(), a = /* @__PURE__ */ ie(), l = /* @__PURE__ */ Jn(), f = /* @__PURE__ */ Ln(), p = /* @__PURE__ */ ae(), w = Za, b = /* @__PURE__ */ tc(), _ = (q, A) => new RegExp(q, A);
    _.code = "new RegExp";
    const $ = ["removeAdditional", "useDefaults", "coerceTypes"], g = /* @__PURE__ */ new Set([
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
    }, y = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function C(q) {
      var A, D, N, S, E, I, V, H, re, ee, x, T, B, J, K, Q, ne, ue, le, me, pe, Ie, ve, Ee, De;
      const Qe = q.strict, tr = (A = q.code) === null || A === void 0 ? void 0 : A.optimize, ro = tr === !0 || tr === void 0 ? 1 : tr || 0, oo = (N = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && N !== void 0 ? N : _, ta = (S = q.uriResolver) !== null && S !== void 0 ? S : b.default;
      return {
        strictSchema: (I = (E = q.strictSchema) !== null && E !== void 0 ? E : Qe) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (V = q.strictNumbers) !== null && V !== void 0 ? V : Qe) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (re = q.strictTypes) !== null && re !== void 0 ? re : Qe) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (T = (x = q.strictTuples) !== null && x !== void 0 ? x : Qe) !== null && T !== void 0 ? T : "log",
        strictRequired: (J = (B = q.strictRequired) !== null && B !== void 0 ? B : Qe) !== null && J !== void 0 ? J : !1,
        code: q.code ? { ...q.code, optimize: ro, regExp: oo } : { optimize: ro, regExp: oo },
        loopRequired: (K = q.loopRequired) !== null && K !== void 0 ? K : d,
        loopEnum: (Q = q.loopEnum) !== null && Q !== void 0 ? Q : d,
        meta: (ne = q.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ue = q.messages) !== null && ue !== void 0 ? ue : !0,
        inlineRefs: (le = q.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (me = q.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = q.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (Ie = q.validateSchema) !== null && Ie !== void 0 ? Ie : !0,
        validateFormats: (ve = q.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Ee = q.unicodeRegExp) !== null && Ee !== void 0 ? Ee : !0,
        int32range: (De = q.int32range) !== null && De !== void 0 ? De : !0,
        uriResolver: ta
      };
    }
    class m {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...C(A) };
        const { es5: D, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: g, es5: D, lines: N }), this.logger = j(A.logger);
        const S = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, i.getRules)(), c.call(this, u, A, "NOT SUPPORTED"), c.call(this, y, A, "DEPRECATED", "warn"), this._metaOpts = F.call(this), A.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && P.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), v.call(this), A.validateFormats = S;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: D, schemaId: N } = this.opts;
        let S = w;
        N === "id" && (S = { ...w }, S.id = S.$id, delete S.$id), D && A && this.addMetaSchema(S, S[N], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[D] || A : void 0;
      }
      validate(A, D) {
        let N;
        if (typeof A == "string") {
          if (N = this.getSchema(A), !N)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          N = this.compile(A);
        const S = N(D);
        return "$async" in N || (this.errors = N.errors), S;
      }
      compile(A, D) {
        const N = this._addSchema(A, D);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(A, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return S.call(this, A, D);
        async function S(ee, x) {
          await E.call(this, ee.$schema);
          const T = this._addSchema(ee, x);
          return T.validate || I.call(this, T);
        }
        async function E(ee) {
          ee && !this.getSchema(ee) && await S.call(this, { $ref: ee }, !0);
        }
        async function I(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (x) {
            if (!(x instanceof o.default))
              throw x;
            return V.call(this, x), await H.call(this, x.missingSchema), I.call(this, ee);
          }
        }
        function V({ missingSchema: ee, missingRef: x }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${x} cannot be resolved`);
        }
        async function H(ee) {
          const x = await re.call(this, ee);
          this.refs[ee] || await E.call(this, x.$schema), this.refs[ee] || this.addSchema(x, ee, D);
        }
        async function re(ee) {
          const x = this._loading[ee];
          if (x)
            return x;
          try {
            return await (this._loading[ee] = N(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, D, N, S = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const I of A)
            this.addSchema(I, void 0, N, S);
          return this;
        }
        let E;
        if (typeof A == "object") {
          const { schemaId: I } = this.opts;
          if (E = A[I], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, l.normalizeId)(D || E), this._checkUnique(D), this.schemas[D] = this._addSchema(A, N, D, S, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, D, N = this.opts.validateSchema) {
        return this.addSchema(A, D, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, D) {
        if (typeof A == "boolean")
          return !0;
        let N;
        if (N = A.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const S = this.validate(N, A);
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
      getSchema(A) {
        let D;
        for (; typeof (D = h.call(this, A)) == "string"; )
          A = D;
        if (D === void 0) {
          const { schemaId: N } = this.opts, S = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (D = s.resolveSchema.call(this, S, A), !D)
            return;
          this.refs[A] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(A) {
        if (A instanceof RegExp)
          return this._removeAllSchemas(this.schemas, A), this._removeAllSchemas(this.refs, A), this;
        switch (typeof A) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const D = h.call(this, A);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[A], delete this.refs[A], this;
          }
          case "object": {
            const D = A;
            this._cache.delete(D);
            let N = A[this.opts.schemaId];
            return N && (N = (0, l.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(A) {
        for (const D of A)
          this.addKeyword(D);
        return this;
      }
      addKeyword(A, D) {
        let N;
        if (typeof A == "string")
          N = A, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = N);
        else if (typeof A == "object" && D === void 0) {
          if (D = A, N = D.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (O.call(this, N, D), !D)
          return (0, p.eachItem)(N, (E) => G.call(this, E)), this;
        oe.call(this, D);
        const S = {
          ...D,
          type: (0, f.getJSONTypes)(D.type),
          schemaType: (0, f.getJSONTypes)(D.schemaType)
        };
        return (0, p.eachItem)(N, S.type.length === 0 ? (E) => G.call(this, E, S) : (E) => S.type.forEach((I) => G.call(this, E, S, I))), this;
      }
      getKeyword(A) {
        const D = this.RULES.all[A];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: D } = this;
        delete D.keywords[A], delete D.all[A];
        for (const N of D.rules) {
          const S = N.rules.findIndex((E) => E.keyword === A);
          S >= 0 && N.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[A] = D, this;
      }
      errorsText(A = this.errors, { separator: D = ", ", dataVar: N = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((S) => `${N}${S.instancePath} ${S.message}`).reduce((S, E) => S + D + E);
      }
      $dataMetaSchema(A, D) {
        const N = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const S of D) {
          const E = S.split("/").slice(1);
          let I = A;
          for (const V of E)
            I = I[V];
          for (const V in N) {
            const H = N[V];
            if (typeof H != "object")
              continue;
            const { $data: re } = H.definition, ee = I[V];
            re && ee && (I[V] = W(ee));
          }
        }
        return A;
      }
      _removeAllSchemas(A, D) {
        for (const N in A) {
          const S = A[N];
          (!D || D.test(N)) && (typeof S == "string" ? delete A[N] : S && !S.meta && (this._cache.delete(S.schema), delete A[N]));
        }
      }
      _addSchema(A, D, N, S = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let I;
        const { schemaId: V } = this.opts;
        if (typeof A == "object")
          I = A[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(A);
        if (H !== void 0)
          return H;
        N = (0, l.normalizeId)(I || N);
        const re = l.getSchemaRefs.call(this, A, N);
        return H = new s.SchemaEnv({ schema: A, schemaId: V, meta: D, baseId: N, localRefs: re }), this._cache.set(H.schema, H), E && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), S && this.validateSchema(A, !0), H;
      }
      _checkUnique(A) {
        if (this.schemas[A] || this.refs[A])
          throw new Error(`schema with key or id "${A}" already exists`);
      }
      _compileSchemaEnv(A) {
        if (A.meta ? this._compileMetaSchema(A) : s.compileSchema.call(this, A), !A.validate)
          throw new Error("ajv implementation error");
        return A.validate;
      }
      _compileMetaSchema(A) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, A);
        } finally {
          this.opts = D;
        }
      }
    }
    m.ValidationError = r.default, m.MissingRefError = o.default, e.default = m;
    function c(q, A, D, N = "error") {
      for (const S in q) {
        const E = S;
        E in A && this.logger[N](`${D}: option ${S}. ${q[E]}`);
      }
    }
    function h(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function v() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const A in q)
            this.addSchema(q[A], A);
    }
    function k() {
      for (const q in this.opts.formats) {
        const A = this.opts.formats[q];
        A && this.addFormat(q, A);
      }
    }
    function P(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in q) {
        const D = q[A];
        D.keyword || (D.keyword = A), this.addKeyword(D);
      }
    }
    function F() {
      const q = { ...this.opts };
      for (const A of $)
        delete q[A];
      return q;
    }
    const z = { log() {
    }, warn() {
    }, error() {
    } };
    function j(q) {
      if (q === !1)
        return z;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const L = /^[a-z_$][a-z0-9_$:-]*$/i;
    function O(q, A) {
      const { RULES: D } = this;
      if ((0, p.eachItem)(q, (N) => {
        if (D.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!L.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function G(q, A, D) {
      var N;
      const S = A?.post;
      if (D && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let I = S ? E.post : E.rules.find(({ type: H }) => H === D);
      if (I || (I = { type: D, rules: [] }, E.rules.push(I)), E.keywords[q] = !0, !A)
        return;
      const V = {
        keyword: q,
        definition: {
          ...A,
          type: (0, f.getJSONTypes)(A.type),
          schemaType: (0, f.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? Y.call(this, I, V, A.before) : I.rules.push(V), E.all[q] = V, (N = A.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function Y(q, A, D) {
      const N = q.rules.findIndex((S) => S.keyword === D);
      N >= 0 ? q.rules.splice(N, 0, A) : (q.rules.push(A), this.logger.warn(`rule ${D} is not defined`));
    }
    function oe(q) {
      let { metaSchema: A } = q;
      A !== void 0 && (q.$data && this.opts.$data && (A = W(A)), q.validateSchema = this.compile(A, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function W(q) {
      return { anyOf: [q, X] };
    }
  })(nr)), nr;
}
var Vt = {}, Bt = {}, Ut = {}, jo;
function rc() {
  if (jo) return Ut;
  jo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ut.default = e, Ut;
}
var He = {}, zo;
function qr() {
  if (zo) return He;
  zo = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.callRef = He.getValidate = void 0;
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Te(), o = /* @__PURE__ */ Zn(), i = /* @__PURE__ */ ae(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: p, schema: w, it: b } = f, { baseId: _, schemaEnv: $, validateName: g, opts: u, self: y } = b, { root: d } = $;
      if ((w === "#" || w === "#/") && _ === d.baseId)
        return m();
      const C = o.resolveRef.call(y, d, _, w);
      if (C === void 0)
        throw new e.default(b.opts.uriResolver, _, w);
      if (C instanceof o.SchemaEnv)
        return c(C);
      return h(C);
      function m() {
        if ($ === d)
          return l(f, g, $, $.$async);
        const v = p.scopeValue("root", { ref: d });
        return l(f, (0, n._)`${v}.validate`, d, d.$async);
      }
      function c(v) {
        const k = a(f, v);
        l(f, k, v, v.$async);
      }
      function h(v) {
        const k = p.scopeValue("schema", u.code.source === !0 ? { ref: v, code: (0, n.stringify)(v) } : { ref: v }), P = p.name("valid"), F = f.subschema({
          schema: v,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: w
        }, P);
        f.mergeEvaluated(F), f.ok(P);
      }
    }
  };
  function a(f, p) {
    const { gen: w } = f;
    return p.validate ? w.scopeValue("validate", { ref: p.validate }) : (0, n._)`${w.scopeValue("wrapper", { ref: p })}.validate`;
  }
  He.getValidate = a;
  function l(f, p, w, b) {
    const { gen: _, it: $ } = f, { allErrors: g, schemaEnv: u, opts: y } = $, d = y.passContext ? r.default.this : n.nil;
    b ? C() : m();
    function C() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const v = _.let("valid");
      _.try(() => {
        _.code((0, n._)`await ${(0, t.callValidateCode)(f, p, d)}`), h(p), g || _.assign(v, !0);
      }, (k) => {
        _.if((0, n._)`!(${k} instanceof ${$.ValidationError})`, () => _.throw(k)), c(k), g || _.assign(v, !1);
      }), f.ok(v);
    }
    function m() {
      f.result((0, t.callValidateCode)(f, p, d), () => h(p), () => c(p));
    }
    function c(v) {
      const k = (0, n._)`${v}.errors`;
      _.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), _.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(v) {
      var k;
      if (!$.opts.unevaluated)
        return;
      const P = (k = w?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if ($.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && ($.props = i.mergeEvaluated.props(_, P.props, $.props));
        else {
          const F = _.var("props", (0, n._)`${v}.evaluated.props`);
          $.props = i.mergeEvaluated.props(_, F, $.props, n.Name);
        }
      if ($.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && ($.items = i.mergeEvaluated.items(_, P.items, $.items));
        else {
          const F = _.var("items", (0, n._)`${v}.evaluated.items`);
          $.items = i.mergeEvaluated.items(_, F, $.items, n.Name);
        }
    }
  }
  return He.callRef = l, He.default = s, He;
}
var Io;
function oc() {
  if (Io) return Bt;
  Io = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rc(), t = /* @__PURE__ */ qr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Bt.default = n, Bt;
}
var Kt = {}, Ht = {}, Do;
function ic() {
  if (Do) return Ht;
  Do = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
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
      const { keyword: s, data: a, schemaCode: l } = i;
      i.fail$data((0, e._)`${a} ${n[s].fail} ${l} || isNaN(${a})`);
    }
  };
  return Ht.default = o, Ht;
}
var Gt = {}, qo;
function sc() {
  if (qo) return Gt;
  qo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
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
      const { gen: o, data: i, schemaCode: s, it: a } = r, l = a.opts.multipleOfPrecision, f = o.let("res"), p = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${s} === 0 || (${f} = ${i}/${s}, ${p}))`);
    }
  };
  return Gt.default = n, Gt;
}
var Wt = {}, Jt = {}, Lo;
function ac() {
  if (Lo) return Jt;
  Lo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Jt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Jt;
}
var Vo;
function cc() {
  if (Vo) return Wt;
  Vo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ ac(), o = {
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
      const { keyword: s, data: a, schemaCode: l, it: f } = i, p = s === "maxLength" ? e.operators.GT : e.operators.LT, w = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${w} ${p} ${l}`);
    }
  };
  return Wt.default = o, Wt;
}
var Yt = {}, Bo;
function lc() {
  if (Bo) return Yt;
  Bo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ ie(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: l, schema: f, schemaCode: p, it: w } = i, b = w.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: _ } = w.opts.code, $ = _.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, _), g = s.let("valid");
        s.try(() => s.assign(g, (0, n._)`${$}(${p}, ${b}).test(${a})`), () => s.assign(g, !1)), i.fail$data((0, n._)`!${g}`);
      } else {
        const _ = (0, e.usePattern)(i, f);
        i.fail$data((0, n._)`!${_}.test(${a})`);
      }
    }
  };
  return Yt.default = o, Yt;
}
var Xt = {}, Uo;
function dc() {
  if (Uo) return Xt;
  Uo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
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
  return Xt.default = n, Xt;
}
var Zt = {}, Ko;
function uc() {
  if (Ko) return Zt;
  Ko = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: l, data: f, $data: p, it: w } = i, { opts: b } = w;
      if (!p && a.length === 0)
        return;
      const _ = a.length >= b.loopRequired;
      if (w.allErrors ? $() : g(), b.strictRequired) {
        const d = i.parentSchema.properties, { definedProperties: C } = i.it;
        for (const m of a)
          if (d?.[m] === void 0 && !C.has(m)) {
            const c = w.schemaEnv.baseId + w.errSchemaPath, h = `required property "${m}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(w, h, w.opts.strictRequired);
          }
      }
      function $() {
        if (_ || p)
          i.block$data(t.nil, u);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(i, d);
      }
      function g() {
        const d = s.let("missing");
        if (_ || p) {
          const C = s.let("valid", !0);
          i.block$data(C, () => y(d, C)), i.ok(C);
        } else
          s.if((0, e.checkMissingProp)(i, a, d)), (0, e.reportMissingProp)(i, d), s.else();
      }
      function u() {
        s.forOf("prop", l, (d) => {
          i.setParams({ missingProperty: d }), s.if((0, e.noPropertyInData)(s, f, d, b.ownProperties), () => i.error());
        });
      }
      function y(d, C) {
        i.setParams({ missingProperty: d }), s.forOf(d, l, () => {
          s.assign(C, (0, e.propertyInData)(s, f, d, b.ownProperties)), s.if((0, t.not)(C), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Zt.default = o, Zt;
}
var Qt = {}, Ho;
function fc() {
  if (Ho) return Qt;
  Ho = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
  return Qt.default = n, Qt;
}
var en = {}, tn = {}, Go;
function Lr() {
  if (Go) return tn;
  Go = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = Ps();
  return e.code = 'require("ajv/dist/runtime/equal").default', tn.default = e, tn;
}
var Wo;
function pc() {
  if (Wo) return en;
  Wo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ln(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Lr(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: l, $data: f, schema: p, parentSchema: w, schemaCode: b, it: _ } = s;
      if (!f && !p)
        return;
      const $ = a.let("valid"), g = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      s.block$data($, u, (0, t._)`${b} === false`), s.ok($);
      function u() {
        const m = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        s.setParams({ i: m, j: c }), a.assign($, !0), a.if((0, t._)`${m} > 1`, () => (y() ? d : C)(m, c));
      }
      function y() {
        return g.length > 0 && !g.some((m) => m === "object" || m === "array");
      }
      function d(m, c) {
        const h = a.name("item"), v = (0, e.checkDataTypes)(g, h, _.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${m}--;`, () => {
          a.let(h, (0, t._)`${l}[${m}]`), a.if(v, (0, t._)`continue`), g.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${k}[${h}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${h}]`), s.error(), a.assign($, !1).break();
          }).code((0, t._)`${k}[${h}] = ${m}`);
        });
      }
      function C(m, c) {
        const h = (0, n.useFunc)(a, r.default), v = a.name("outer");
        a.label(v).for((0, t._)`;${m}--;`, () => a.for((0, t._)`${c} = ${m}; ${c}--;`, () => a.if((0, t._)`${h}(${l}[${m}], ${l}[${c}])`, () => {
          s.error(), a.assign($, !1).break(v);
        })));
      }
    }
  };
  return en.default = i, en;
}
var nn = {}, Jo;
function hc() {
  if (Jo) return nn;
  Jo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Lr(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: l, schemaCode: f, schema: p } = i;
      l || p && typeof p == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${f})`) : i.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return nn.default = o, nn;
}
var rn = {}, Yo;
function mc() {
  if (Yo) return rn;
  Yo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Lr(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: l, schema: f, schemaCode: p, it: w } = i;
      if (!l && f.length === 0)
        throw new Error("enum must have non-empty array");
      const b = f.length >= w.opts.loopEnum;
      let _;
      const $ = () => _ ?? (_ = (0, t.useFunc)(s, n.default));
      let g;
      if (b || l)
        g = s.let("valid"), i.block$data(g, u);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const d = s.const("vSchema", p);
        g = (0, e.or)(...f.map((C, m) => y(d, m)));
      }
      i.pass(g);
      function u() {
        s.assign(g, !1), s.forOf("v", p, (d) => s.if((0, e._)`${$()}(${a}, ${d})`, () => s.assign(g, !0).break()));
      }
      function y(d, C) {
        const m = f[C];
        return typeof m == "object" && m !== null ? (0, e._)`${$()}(${a}, ${d}[${C}])` : (0, e._)`${a} === ${m}`;
      }
    }
  };
  return rn.default = o, rn;
}
var Xo;
function gc() {
  if (Xo) return Kt;
  Xo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ic(), t = /* @__PURE__ */ sc(), n = /* @__PURE__ */ cc(), r = /* @__PURE__ */ lc(), o = /* @__PURE__ */ dc(), i = /* @__PURE__ */ uc(), s = /* @__PURE__ */ fc(), a = /* @__PURE__ */ pc(), l = /* @__PURE__ */ hc(), f = /* @__PURE__ */ mc(), p = [
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
    l.default,
    f.default
  ];
  return Kt.default = p, Kt;
}
var on = {}, at = {}, Zo;
function Rs() {
  if (Zo) return at;
  Zo = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { parentSchema: s, it: a } = i, { items: l } = s;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(i, l);
    }
  };
  function o(i, s) {
    const { gen: a, schema: l, data: f, keyword: p, it: w } = i;
    w.items = !0;
    const b = a.const("len", (0, e._)`${f}.length`);
    if (l === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${b} <= ${s.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(w, l)) {
      const $ = a.var("valid", (0, e._)`${b} <= ${s.length}`);
      a.if((0, e.not)($), () => _($)), i.ok($);
    }
    function _($) {
      a.forRange("i", s.length, b, (g) => {
        i.subschema({ keyword: p, dataProp: g, dataPropType: t.Type.Num }, $), w.allErrors || a.if((0, e.not)($), () => a.break());
      });
    }
  }
  return at.validateAdditionalItems = o, at.default = r, at;
}
var sn = {}, ct = {}, Qo;
function Ns() {
  if (Qo) return ct;
  Qo = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.validateTuple = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = {
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
    const { gen: l, parentSchema: f, data: p, keyword: w, it: b } = i;
    g(f), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(l, a.length, b.items));
    const _ = l.name("valid"), $ = l.const("len", (0, e._)`${p}.length`);
    a.forEach((u, y) => {
      (0, t.alwaysValidSchema)(b, u) || (l.if((0, e._)`${$} > ${y}`, () => i.subschema({
        keyword: w,
        schemaProp: y,
        dataProp: y
      }, _)), i.ok(_));
    });
    function g(u) {
      const { opts: y, errSchemaPath: d } = b, C = a.length, m = C === u.minItems && (C === u.maxItems || u[s] === !1);
      if (y.strictTuples && !m) {
        const c = `"${w}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(b, c, y.strictTuples);
      }
    }
  }
  return ct.validateTuple = o, ct.default = r, ct;
}
var ei;
function yc() {
  if (ei) return sn;
  ei = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ns(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return sn.default = t, sn;
}
var an = {}, ti;
function $c() {
  if (ti) return an;
  ti = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Rs(), i = {
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
  return an.default = i, an;
}
var cn = {}, ni;
function vc() {
  if (ni) return cn;
  ni = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
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
      const { gen: i, schema: s, parentSchema: a, data: l, it: f } = o;
      let p, w;
      const { minContains: b, maxContains: _ } = a;
      f.opts.next ? (p = b === void 0 ? 1 : b, w = _) : p = 1;
      const $ = i.const("len", (0, e._)`${l}.length`);
      if (o.setParams({ min: p, max: w }), w === void 0 && p === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && p > w) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, s)) {
        let C = (0, e._)`${$} >= ${p}`;
        w !== void 0 && (C = (0, e._)`${C} && ${$} <= ${w}`), o.pass(C);
        return;
      }
      f.items = !0;
      const g = i.name("valid");
      w === void 0 && p === 1 ? y(g, () => i.if(g, () => i.break())) : p === 0 ? (i.let(g, !0), w !== void 0 && i.if((0, e._)`${l}.length > 0`, u)) : (i.let(g, !1), u()), o.result(g, () => o.reset());
      function u() {
        const C = i.name("_valid"), m = i.let("count", 0);
        y(C, () => i.if(C, () => d(m)));
      }
      function y(C, m) {
        i.forRange("i", 0, $, (c) => {
          o.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), m();
        });
      }
      function d(C) {
        i.code((0, e._)`${C}++`), w === void 0 ? i.if((0, e._)`${C} >= ${p}`, () => i.assign(g, !0).break()) : (i.if((0, e._)`${C} > ${w}`, () => i.assign(g, !1).break()), p === 1 ? i.assign(g, !0) : i.if((0, e._)`${C} >= ${p}`, () => i.assign(g, !0)));
      }
    }
  };
  return cn.default = r, cn;
}
var ur = {}, ri;
function Vr() {
  return ri || (ri = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Oe();
    e.error = {
      message: ({ params: { property: l, depsCount: f, deps: p } }) => {
        const w = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${p} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: f, deps: p, missingProperty: w } }) => (0, t._)`{property: ${l},
    missingProperty: ${w},
    depsCount: ${f},
    deps: ${p}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [f, p] = i(l);
        s(l, f), a(l, p);
      }
    };
    function i({ schema: l }) {
      const f = {}, p = {};
      for (const w in l) {
        if (w === "__proto__")
          continue;
        const b = Array.isArray(l[w]) ? f : p;
        b[w] = l[w];
      }
      return [f, p];
    }
    function s(l, f = l.schema) {
      const { gen: p, data: w, it: b } = l;
      if (Object.keys(f).length === 0)
        return;
      const _ = p.let("missing");
      for (const $ in f) {
        const g = f[$];
        if (g.length === 0)
          continue;
        const u = (0, r.propertyInData)(p, w, $, b.opts.ownProperties);
        l.setParams({
          property: $,
          depsCount: g.length,
          deps: g.join(", ")
        }), b.allErrors ? p.if(u, () => {
          for (const y of g)
            (0, r.checkReportMissingProp)(l, y);
        }) : (p.if((0, t._)`${u} && (${(0, r.checkMissingProp)(l, g, _)})`), (0, r.reportMissingProp)(l, _), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(l, f = l.schema) {
      const { gen: p, data: w, keyword: b, it: _ } = l, $ = p.name("valid");
      for (const g in f)
        (0, n.alwaysValidSchema)(_, f[g]) || (p.if(
          (0, r.propertyInData)(p, w, g, _.opts.ownProperties),
          () => {
            const u = l.subschema({ keyword: b, schemaProp: g }, $);
            l.mergeValidEvaluated(u, $);
          },
          () => p.var($, !0)
          // TODO var
        ), l.ok($));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(ur)), ur;
}
var ln = {}, oi;
function bc() {
  if (oi) return ln;
  oi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: l } = o;
      if ((0, t.alwaysValidSchema)(l, s))
        return;
      const f = i.name("valid");
      i.forIn("key", a, (p) => {
        o.setParams({ propertyName: p }), o.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, f), i.if((0, e.not)(f), () => {
          o.error(!0), l.allErrors || i.break();
        });
      }), o.ok(f);
    }
  };
  return ln.default = r, ln;
}
var dn = {}, ii;
function Ms() {
  if (ii) return dn;
  ii = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ ae(), i = {
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
      const { gen: a, schema: l, parentSchema: f, data: p, errsCount: w, it: b } = s;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: _, opts: $ } = b;
      if (b.props = !0, $.removeAdditional !== "all" && (0, r.alwaysValidSchema)(b, l))
        return;
      const g = (0, e.allSchemaProperties)(f.properties), u = (0, e.allSchemaProperties)(f.patternProperties);
      y(), s.ok((0, t._)`${w} === ${n.default.errors}`);
      function y() {
        a.forIn("key", p, (h) => {
          !g.length && !u.length ? m(h) : a.if(d(h), () => m(h));
        });
      }
      function d(h) {
        let v;
        if (g.length > 8) {
          const k = (0, r.schemaRefOrVal)(b, f.properties, "properties");
          v = (0, e.isOwnProperty)(a, k, h);
        } else g.length ? v = (0, t.or)(...g.map((k) => (0, t._)`${h} === ${k}`)) : v = t.nil;
        return u.length && (v = (0, t.or)(v, ...u.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${h})`))), (0, t.not)(v);
      }
      function C(h) {
        a.code((0, t._)`delete ${p}[${h}]`);
      }
      function m(h) {
        if ($.removeAdditional === "all" || $.removeAdditional && l === !1) {
          C(h);
          return;
        }
        if (l === !1) {
          s.setParams({ additionalProperty: h }), s.error(), _ || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)(b, l)) {
          const v = a.name("valid");
          $.removeAdditional === "failing" ? (c(h, v, !1), a.if((0, t.not)(v), () => {
            s.reset(), C(h);
          })) : (c(h, v), _ || a.if((0, t.not)(v), () => a.break()));
        }
      }
      function c(h, v, k) {
        const P = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, v);
      }
    }
  };
  return dn.default = i, dn;
}
var un = {}, si;
function wc() {
  if (si) return un;
  si = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Ms(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: l, data: f, it: p } = i;
      p.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(a);
      for (const u of w)
        p.definedProperties.add(u);
      p.opts.unevaluated && w.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(w), p.props));
      const b = w.filter((u) => !(0, n.alwaysValidSchema)(p, a[u]));
      if (b.length === 0)
        return;
      const _ = s.name("valid");
      for (const u of b)
        $(u) ? g(u) : (s.if((0, t.propertyInData)(s, f, u, p.opts.ownProperties)), g(u), p.allErrors || s.else().var(_, !0), s.endIf()), i.it.definedProperties.add(u), i.ok(_);
      function $(u) {
        return p.opts.useDefaults && !p.compositeRule && a[u].default !== void 0;
      }
      function g(u) {
        i.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, _);
      }
    }
  };
  return un.default = o, un;
}
var fn = {}, ai;
function _c() {
  if (ai) return fn;
  ai = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: l, parentSchema: f, it: p } = i, { opts: w } = p, b = (0, e.allSchemaProperties)(a), _ = b.filter((m) => (0, n.alwaysValidSchema)(p, a[m]));
      if (b.length === 0 || _.length === b.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const $ = w.strictSchema && !w.allowMatchingProperties && f.properties, g = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: u } = p;
      y();
      function y() {
        for (const m of b)
          $ && d(m), p.allErrors ? C(m) : (s.var(g, !0), C(m), s.if(g));
      }
      function d(m) {
        for (const c in $)
          new RegExp(m).test(c) && (0, n.checkStrictMode)(p, `property ${c} matches pattern ${m} (use allowMatchingProperties)`);
      }
      function C(m) {
        s.forIn("key", l, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(i, m)}.test(${c})`, () => {
            const h = _.includes(m);
            h || i.subschema({
              keyword: "patternProperties",
              schemaProp: m,
              dataProp: c,
              dataPropType: r.Type.Str
            }, g), p.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${c}]`, !0) : !h && !p.allErrors && s.if((0, t.not)(g), () => s.break());
          });
        });
      }
    }
  };
  return fn.default = o, fn;
}
var pn = {}, ci;
function Sc() {
  if (ci) return pn;
  ci = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
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
  return pn.default = t, pn;
}
var hn = {}, li;
function Cc() {
  if (li) return hn;
  li = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Oe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return hn.default = t, hn;
}
var mn = {}, di;
function kc() {
  if (di) return mn;
  di = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: i, schema: s, parentSchema: a, it: l } = o;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && a.discriminator)
        return;
      const f = s, p = i.let("valid", !1), w = i.let("passing", null), b = i.name("_valid");
      o.setParams({ passing: w }), i.block(_), o.result(p, () => o.reset(), () => o.error(!0));
      function _() {
        f.forEach(($, g) => {
          let u;
          (0, t.alwaysValidSchema)(l, $) ? i.var(b, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: g,
            compositeRule: !0
          }, b), g > 0 && i.if((0, e._)`${b} && ${p}`).assign(p, !1).assign(w, (0, e._)`[${w}, ${g}]`).else(), i.if(b, () => {
            i.assign(p, !0), i.assign(w, g), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return mn.default = r, mn;
}
var gn = {}, ui;
function Ec() {
  if (ui) return gn;
  ui = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: o, it: i } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      o.forEach((a, l) => {
        if ((0, e.alwaysValidSchema)(i, a))
          return;
        const f = n.subschema({ keyword: "allOf", schemaProp: l }, s);
        n.ok(s), n.mergeEvaluated(f);
      });
    }
  };
  return gn.default = t, gn;
}
var yn = {}, fi;
function xc() {
  if (fi) return yn;
  fi = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: i }) => (0, e.str)`must match "${i.ifClause}" schema`,
      params: ({ params: i }) => (0, e._)`{failingKeyword: ${i.ifClause}}`
    },
    code(i) {
      const { gen: s, parentSchema: a, it: l } = i;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const f = o(l, "then"), p = o(l, "else");
      if (!f && !p)
        return;
      const w = s.let("valid", !0), b = s.name("_valid");
      if (_(), i.reset(), f && p) {
        const g = s.let("ifClause");
        i.setParams({ ifClause: g }), s.if(b, $("then", g), $("else", g));
      } else f ? s.if(b, $("then")) : s.if((0, e.not)(b), $("else"));
      i.pass(w, () => i.error(!0));
      function _() {
        const g = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        i.mergeEvaluated(g);
      }
      function $(g, u) {
        return () => {
          const y = i.subschema({ keyword: g }, b);
          s.assign(w, b), i.mergeValidEvaluated(y, w), u ? s.assign(u, (0, e._)`${g}`) : i.setParams({ ifClause: g });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return yn.default = r, yn;
}
var $n = {}, pi;
function Pc() {
  if (pi) return $n;
  pi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return $n.default = t, $n;
}
var hi;
function Ac() {
  if (hi) return on;
  hi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Rs(), t = /* @__PURE__ */ yc(), n = /* @__PURE__ */ Ns(), r = /* @__PURE__ */ $c(), o = /* @__PURE__ */ vc(), i = /* @__PURE__ */ Vr(), s = /* @__PURE__ */ bc(), a = /* @__PURE__ */ Ms(), l = /* @__PURE__ */ wc(), f = /* @__PURE__ */ _c(), p = /* @__PURE__ */ Sc(), w = /* @__PURE__ */ Cc(), b = /* @__PURE__ */ kc(), _ = /* @__PURE__ */ Ec(), $ = /* @__PURE__ */ xc(), g = /* @__PURE__ */ Pc();
  function u(y = !1) {
    const d = [
      // any
      p.default,
      w.default,
      b.default,
      _.default,
      $.default,
      g.default,
      // object
      s.default,
      a.default,
      i.default,
      l.default,
      f.default
    ];
    return y ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(o.default), d;
  }
  return on.default = u, on;
}
var vn = {}, lt = {}, mi;
function Ts() {
  if (mi) return lt;
  mi = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ qr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, l) {
    const { gen: f, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[l] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, b = p.errSchemaPath === "#" ? p.validateName : s(a);
    f.if((0, e._)`!${w}`, () => f.assign(w, b));
  }
  lt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: l, schema: f, self: p } = a.it, { root: w, baseId: b, localRefs: _, meta: $ } = l.root, { schemaId: g } = p.opts, u = new n.SchemaEnv({ schema: f, schemaId: g, root: w, baseId: b, localRefs: _, meta: $ });
    return n.compileSchema.call(p, u), (0, r.getValidate)(a, u);
  }
  return lt.default = o, lt;
}
var dt = {}, gi;
function Os() {
  if (gi) return dt;
  gi = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ qr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: l, it: f } = i;
    if (s[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (f.allErrors)
      w();
    else {
      const _ = a.let("valid", !1);
      w(_), i.ok(_);
    }
    function w(_) {
      if (f.schemaEnv.root.dynamicAnchors[p]) {
        const $ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if($, b($, _), b(f.validateName, _));
      } else
        b(f.validateName, _)();
    }
    function b(_, $) {
      return $ ? () => a.block(() => {
        (0, n.callRef)(i, _), a.let($, !0);
      }) : () => (0, n.callRef)(i, _);
    }
  }
  return dt.dynamicRef = o, dt.default = r, dt;
}
var bn = {}, yi;
function Rc() {
  if (yi) return bn;
  yi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ts(), t = /* @__PURE__ */ ae(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return bn.default = n, bn;
}
var wn = {}, $i;
function Nc() {
  if ($i) return wn;
  $i = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Os(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return wn.default = t, wn;
}
var vi;
function Mc() {
  if (vi) return vn;
  vi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ts(), t = /* @__PURE__ */ Os(), n = /* @__PURE__ */ Rc(), r = /* @__PURE__ */ Nc(), o = [e.default, t.default, n.default, r.default];
  return vn.default = o, vn;
}
var _n = {}, Sn = {}, bi;
function Tc() {
  if (bi) return Sn;
  bi = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Sn.default = t, Sn;
}
var Cn = {}, wi;
function Oc() {
  if (wi) return Cn;
  wi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Cn.default = t, Cn;
}
var kn = {}, _i;
function Fc() {
  if (_i) return kn;
  _i = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return kn.default = t, kn;
}
var Si;
function jc() {
  if (Si) return _n;
  Si = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tc(), t = /* @__PURE__ */ Oc(), n = /* @__PURE__ */ Fc(), r = [e.default, t.default, n.default];
  return _n.default = r, _n;
}
var En = {}, xn = {}, Ci;
function zc() {
  if (Ci) return xn;
  Ci = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Te(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: s, schema: a, data: l, errsCount: f, it: p } = i;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: b } = p;
      b instanceof e.Name ? s.if((0, e._)`${b} !== true`, () => s.forIn("key", l, (u) => s.if($(b, u), () => _(u)))) : b !== !0 && s.forIn("key", l, (u) => b === void 0 ? _(u) : s.if(g(b, u), () => _(u))), p.props = !0, i.ok((0, e._)`${f} === ${n.default.errors}`);
      function _(u) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: u }), i.error(), w || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const y = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, y), w || s.if((0, e.not)(y), () => s.break());
        }
      }
      function $(u, y) {
        return (0, e._)`!${u} || !${u}[${y}]`;
      }
      function g(u, y) {
        const d = [];
        for (const C in u)
          u[C] === !0 && d.push((0, e._)`${y} !== ${C}`);
        return (0, e.and)(...d);
      }
    }
  };
  return xn.default = o, xn;
}
var Pn = {}, ki;
function Ic() {
  if (ki) return Pn;
  ki = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: l } = o, f = l.items || 0;
      if (f === !0)
        return;
      const p = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: f }), o.fail((0, e._)`${p} > ${f}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(l, s)) {
        const b = i.var("valid", (0, e._)`${p} <= ${f}`);
        i.if((0, e.not)(b), () => w(b, f)), o.ok(b);
      }
      l.items = !0;
      function w(b, _) {
        i.forRange("i", _, p, ($) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: $, dataPropType: t.Type.Num }, b), l.allErrors || i.if((0, e.not)(b), () => i.break());
        });
      }
    }
  };
  return Pn.default = r, Pn;
}
var Ei;
function Dc() {
  if (Ei) return En;
  Ei = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zc(), t = /* @__PURE__ */ Ic(), n = [e.default, t.default];
  return En.default = n, En;
}
var An = {}, Rn = {}, xi;
function qc() {
  if (xi) return Rn;
  xi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: l, schemaCode: f, it: p } = r, { opts: w, errSchemaPath: b, schemaEnv: _, self: $ } = p;
      if (!w.validateFormats)
        return;
      a ? g() : u();
      function g() {
        const y = i.scopeValue("formats", {
          ref: $.formats,
          code: w.code.formats
        }), d = i.const("fDef", (0, e._)`${y}[${f}]`), C = i.let("fType"), m = i.let("format");
        i.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => i.assign(C, (0, e._)`${d}.type || "string"`).assign(m, (0, e._)`${d}.validate`), () => i.assign(C, (0, e._)`"string"`).assign(m, d)), r.fail$data((0, e.or)(c(), h()));
        function c() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${m}`;
        }
        function h() {
          const v = _.$async ? (0, e._)`(${d}.async ? await ${m}(${s}) : ${m}(${s}))` : (0, e._)`${m}(${s})`, k = (0, e._)`(typeof ${m} == "function" ? ${v} : ${m}.test(${s}))`;
          return (0, e._)`${m} && ${m} !== true && ${C} === ${o} && !${k}`;
        }
      }
      function u() {
        const y = $.formats[l];
        if (!y) {
          c();
          return;
        }
        if (y === !0)
          return;
        const [d, C, m] = h(y);
        d === o && r.pass(v());
        function c() {
          if (w.strictSchema === !1) {
            $.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${l}" ignored in schema at path "${b}"`;
          }
        }
        function h(k) {
          const P = k instanceof RegExp ? (0, e.regexpCode)(k) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(l)}` : void 0, F = i.scopeValue("formats", { key: l, ref: k, code: P });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${F}.validate`] : ["string", k, F];
        }
        function v() {
          if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
            if (!_.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${m}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${m}(${s})` : (0, e._)`${m}.test(${s})`;
        }
      }
    }
  };
  return Rn.default = n, Rn;
}
var Pi;
function Lc() {
  if (Pi) return An;
  Pi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ qc()).default];
  return An.default = t, An;
}
var nt = {}, Ai;
function Vc() {
  return Ai || (Ai = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.contentVocabulary = nt.metadataVocabulary = void 0, nt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], nt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), nt;
}
var Ri;
function Bc() {
  if (Ri) return Vt;
  Ri = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oc(), t = /* @__PURE__ */ gc(), n = /* @__PURE__ */ Ac(), r = /* @__PURE__ */ Mc(), o = /* @__PURE__ */ jc(), i = /* @__PURE__ */ Dc(), s = /* @__PURE__ */ Lc(), a = /* @__PURE__ */ Vc(), l = [
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
  return Vt.default = l, Vt;
}
var Nn = {}, Et = {}, Ni;
function Uc() {
  if (Ni) return Et;
  Ni = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Et.DiscrError = e = {})), Et;
}
var Mi;
function Kc() {
  if (Mi) return Nn;
  Mi = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Uc(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ Xn(), o = /* @__PURE__ */ ae(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: f, schema: p, parentSchema: w, it: b } = a, { oneOf: _ } = w;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const $ = p.propertyName;
      if (typeof $ != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!_)
        throw new Error("discriminator: requires oneOf keyword");
      const g = l.let("valid", !1), u = l.const("tag", (0, e._)`${f}${(0, e.getProperty)($)}`);
      l.if((0, e._)`typeof ${u} == "string"`, () => y(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: $ })), a.ok(g);
      function y() {
        const m = C();
        l.if(!1);
        for (const c in m)
          l.elseIf((0, e._)`${u} === ${c}`), l.assign(g, d(m[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: $ }), l.endIf();
      }
      function d(m) {
        const c = l.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: m }, c);
        return a.mergeEvaluated(h, e.Name), c;
      }
      function C() {
        var m;
        const c = {}, h = k(w);
        let v = !0;
        for (let z = 0; z < _.length; z++) {
          let j = _[z];
          if (j?.$ref && !(0, o.schemaHasRulesButRef)(j, b.self.RULES)) {
            const O = j.$ref;
            if (j = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, O), j instanceof n.SchemaEnv && (j = j.schema), j === void 0)
              throw new r.default(b.opts.uriResolver, b.baseId, O);
          }
          const L = (m = j?.properties) === null || m === void 0 ? void 0 : m[$];
          if (typeof L != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${$}"`);
          v = v && (h || k(j)), P(L, z);
        }
        if (!v)
          throw new Error(`discriminator: "${$}" must be required`);
        return c;
        function k({ required: z }) {
          return Array.isArray(z) && z.includes($);
        }
        function P(z, j) {
          if (z.const)
            F(z.const, j);
          else if (z.enum)
            for (const L of z.enum)
              F(L, j);
          else
            throw new Error(`discriminator: "properties/${$}" must have "const" or "enum"`);
        }
        function F(z, j) {
          if (typeof z != "string" || z in c)
            throw new Error(`discriminator: "${$}" values must be unique strings`);
          c[z] = j;
        }
      }
    }
  };
  return Nn.default = s, Nn;
}
var Mn = {};
const Hc = "https://json-schema.org/draft/2020-12/schema", Gc = "https://json-schema.org/draft/2020-12/schema", Wc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Jc = "meta", Yc = "Core and Validation specifications meta-schema", Xc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Zc = ["object", "boolean"], Qc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", el = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, tl = {
  $schema: Hc,
  $id: Gc,
  $vocabulary: Wc,
  $dynamicAnchor: Jc,
  title: Yc,
  allOf: Xc,
  type: Zc,
  $comment: Qc,
  properties: el
}, nl = "https://json-schema.org/draft/2020-12/schema", rl = "https://json-schema.org/draft/2020-12/meta/applicator", ol = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, il = "meta", sl = "Applicator vocabulary meta-schema", al = ["object", "boolean"], cl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, ll = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, dl = {
  $schema: nl,
  $id: rl,
  $vocabulary: ol,
  $dynamicAnchor: il,
  title: sl,
  type: al,
  properties: cl,
  $defs: ll
}, ul = "https://json-schema.org/draft/2020-12/schema", fl = "https://json-schema.org/draft/2020-12/meta/unevaluated", pl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, hl = "meta", ml = "Unevaluated applicator vocabulary meta-schema", gl = ["object", "boolean"], yl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, $l = {
  $schema: ul,
  $id: fl,
  $vocabulary: pl,
  $dynamicAnchor: hl,
  title: ml,
  type: gl,
  properties: yl
}, vl = "https://json-schema.org/draft/2020-12/schema", bl = "https://json-schema.org/draft/2020-12/meta/content", wl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, _l = "meta", Sl = "Content vocabulary meta-schema", Cl = ["object", "boolean"], kl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, El = {
  $schema: vl,
  $id: bl,
  $vocabulary: wl,
  $dynamicAnchor: _l,
  title: Sl,
  type: Cl,
  properties: kl
}, xl = "https://json-schema.org/draft/2020-12/schema", Pl = "https://json-schema.org/draft/2020-12/meta/core", Al = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Rl = "meta", Nl = "Core vocabulary meta-schema", Ml = ["object", "boolean"], Tl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Ol = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Fl = {
  $schema: xl,
  $id: Pl,
  $vocabulary: Al,
  $dynamicAnchor: Rl,
  title: Nl,
  type: Ml,
  properties: Tl,
  $defs: Ol
}, jl = "https://json-schema.org/draft/2020-12/schema", zl = "https://json-schema.org/draft/2020-12/meta/format-annotation", Il = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Dl = "meta", ql = "Format vocabulary meta-schema for annotation results", Ll = ["object", "boolean"], Vl = { format: { type: "string" } }, Bl = {
  $schema: jl,
  $id: zl,
  $vocabulary: Il,
  $dynamicAnchor: Dl,
  title: ql,
  type: Ll,
  properties: Vl
}, Ul = "https://json-schema.org/draft/2020-12/schema", Kl = "https://json-schema.org/draft/2020-12/meta/meta-data", Hl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Gl = "meta", Wl = "Meta-data vocabulary meta-schema", Jl = ["object", "boolean"], Yl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Xl = {
  $schema: Ul,
  $id: Kl,
  $vocabulary: Hl,
  $dynamicAnchor: Gl,
  title: Wl,
  type: Jl,
  properties: Yl
}, Zl = "https://json-schema.org/draft/2020-12/schema", Ql = "https://json-schema.org/draft/2020-12/meta/validation", ed = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, td = "meta", nd = "Validation vocabulary meta-schema", rd = ["object", "boolean"], od = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, id = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, sd = {
  $schema: Zl,
  $id: Ql,
  $vocabulary: ed,
  $dynamicAnchor: td,
  title: nd,
  type: rd,
  properties: od,
  $defs: id
};
var Ti;
function ad() {
  if (Ti) return Mn;
  Ti = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = tl, t = dl, n = $l, r = El, o = Fl, i = Bl, s = Xl, a = sd, l = ["/properties"];
  function f(p) {
    return [
      e,
      t,
      n,
      r,
      o,
      w(this, i),
      s,
      w(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function w(b, _) {
      return p ? b.$dataMetaSchema(_, l) : _;
    }
  }
  return Mn.default = f, Mn;
}
var Oi;
function cd() {
  return Oi || (Oi = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ nc(), r = /* @__PURE__ */ Bc(), o = /* @__PURE__ */ Kc(), i = /* @__PURE__ */ ad(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(_ = {}) {
        super({
          ..._,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((_) => this.addVocabulary(_)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: _, meta: $ } = this.opts;
        $ && (i.default.call(this, _), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ Yn();
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
    var p = /* @__PURE__ */ Dr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var w = /* @__PURE__ */ Xn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(zt, zt.exports)), zt.exports;
}
var ld = /* @__PURE__ */ cd();
const dd = /* @__PURE__ */ qa(ld), ud = "https://json-schema.org/draft/2020-12/schema", fd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", pd = "gufe-viz payload", hd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", md = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], gd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Br = {
  $schema: ud,
  $id: fd,
  title: pd,
  description: hd,
  oneOf: md,
  $defs: gd
}, Sp = [
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
], Ur = Br.$id, Kr = new dd({ allErrors: !0, strict: !1 });
Kr.addSchema(Br, Ur);
const Fi = Kr.getSchema(Ur), Fs = Object.entries(Br.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Cp = Fs, Hr = /* @__PURE__ */ new Map();
for (const e of Fs) {
  const t = Kr.getSchema(`${Ur}#/$defs/${e}`);
  t && Hr.set(e, t);
}
const Pr = { valid: !0, issues: [] };
function Ar(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function yd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Hr.get(t) : void 0;
  return n ? n(e) ? Pr : { valid: !1, issues: Ar(n.errors) } : Fi(e) ? Pr : { valid: !1, issues: Ar(Fi.errors) };
}
function kp(e, t) {
  const n = Hr.get(e);
  return n ? n(t) ? Pr : { valid: !1, issues: Ar(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function $d(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Gr = {
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
function js(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Gr[t]) return vd(t);
  const { valid: n, issues: r } = yd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: $d(r)
  };
}
function vd(e) {
  const t = Object.keys(Gr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Ep(e) {
  return js(e)?.message ?? null;
}
class bd extends Ne {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    ha("payload", n, this);
    const r = js(n);
    if (r)
      return t.appendChild(wd(r, n)), {};
    const o = n.type, i = Gr[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function wd(e, t) {
  const n = M(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(fe(e.message));
  const r = (i, s) => M(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${R.warnBg};color:${R.warnFg};border:1px solid ${R.warnBorder};` : `background:${R.panelBg};color:${R.textMuted2};border:1px solid ${R.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = _d(t);
  return o && n.appendChild(r(o, !1)), n;
}
function _d(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ke(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ke(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Me("gufe-view", bd);
const fr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Wr = {
  threeDmol: `https://unpkg.com/3dmol@${fr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${fr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${fr.d3}/+esm`
};
function Jr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function zs(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let st = null, ut = null;
function Yr() {
  if (ut) return ut;
  const e = Jr("threeDmol");
  return e ? (ut = e.then((t) => st = t || window.$3Dmol), ut) : (ut = (async () => {
    if (window.$3Dmol) return st = window.$3Dmol;
    if (await zs(Wr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return st = window.$3Dmol;
  })(), ut);
}
let ft = null;
function Qn() {
  if (ft) return ft;
  const e = Jr("rdkit");
  return e ? (ft = e.then((t) => window.RDKit = t), ft) : (ft = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await zs(Wr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), ft);
}
let pr = null;
function Is() {
  if (!pr) {
    const e = Wr.d3;
    pr = Jr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return pr;
}
function Ds(e, t) {
  let n = !1, r = !1;
  const o = () => {
    n = !0;
  }, i = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const l = a.ctrlKey || a.metaKey;
    if (n || l) {
      (t.onZoom(a) !== !1 || l) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, kd(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function Sd(e) {
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
const Cd = 1600;
function kd(e, t) {
  const n = M(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Cd);
}
const Ed = { min: 0.25, max: 12 }, xd = 150;
function ji(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? xd) - t;
}
function Pd(e, t = Ed) {
  const n = ji(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = ji(e);
    return Number.isFinite(s) && s > 0 ? n / s : o;
  };
  return {
    zoomBy(s) {
      const a = i(), l = Math.min(t.max, Math.max(t.min, a * s)), f = l / a;
      return !Number.isFinite(f) || Math.abs(f - 1) < 1e-9 ? !1 : (o = l, e.zoom(f), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: i
  };
}
const Ad = 2e-3;
function qs(e) {
  return Math.exp(-e.deltaY * Ad);
}
function Xr(e, t, n = {}) {
  const r = Pd(t, n.bounds), o = Ds(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(qs(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function Zr(e, t = "Reset view") {
  const n = M("button", wt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const hr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Rd = [
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
], xp = "hsv", U = [0, 0, 0], Nd = {
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
}, Md = "rdkit", Td = !0, Od = !0, Fd = !0, jd = !0, zd = "rdkit", Id = "filled", Dd = 0.42, qd = 1.5, Ld = !0, Vd = "show", Bd = "mono", Ud = 0.51, Kd = 0.74, Hd = 1.6, Gd = 1.7, Wd = 5, Jd = 0.3, Yd = "#d62828", Xd = "#d62828", Zd = "#015ab5", Qd = !1, eu = "", tu = "#7c3aed", nu = {
  layout: Md,
  alignPair: Td,
  atomNumbers: Od,
  createdDestroyed: Fd,
  modified: jd,
  style: zd,
  circles: Id,
  circleRadius: Dd,
  circleStroke: qd,
  boundary: Ld,
  hydrogens: Vd,
  elementColors: Bd,
  numScale: Ud,
  labelScale: Kd,
  bondWidth: Hd,
  markWidth: Gd,
  haloWidth: Wd,
  haloOpacity: Jd,
  destroyedColor: Yd,
  createdColor: Xd,
  modifiedColor: Zd,
  stereo: Qd,
  customSpec: eu,
  customColor: tu
}, ru = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: hr.uniqueAtom,
  createdColor: hr.uniqueAtom,
  modifiedColor: hr.elementChange,
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
}, ou = ["rdkit", "coordgen", "conformer"], iu = ["rdkit", "recolor", "halo"], su = ["outline", "filled", "off"], au = ["show", "dim", "hide"], cu = ["cpk", "mono"], lu = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, du = /^#[0-9a-fA-F]{6}$/;
function xt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ge(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = lu[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const pt = (e, t) => typeof e == "boolean" ? e : t, Tn = (e, t) => typeof e == "string" && du.test(e) ? e : t;
function uu(e) {
  const t = e && typeof e == "object" ? e : {}, n = ru;
  return {
    version: 1,
    layout: xt(t.layout, ou, n.layout),
    alignPair: pt(t.alignPair, n.alignPair),
    style: xt(t.style, iu, n.style),
    createdDestroyed: pt(t.createdDestroyed, n.createdDestroyed),
    modified: pt(t.modified, n.modified),
    destroyedColor: Tn(t.destroyedColor, n.destroyedColor),
    createdColor: Tn(t.createdColor, n.createdColor),
    modifiedColor: Tn(t.modifiedColor, n.modifiedColor),
    boundary: pt(t.boundary, n.boundary),
    circles: xt(t.circles, su, n.circles),
    circleRadius: Ge(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ge(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: xt(t.hydrogens, au, n.hydrogens),
    elementColors: xt(t.elementColors, cu, n.elementColors),
    atomNumbers: pt(t.atomNumbers, n.atomNumbers),
    stereo: pt(t.stereo, n.stereo),
    numScale: Ge(t.numScale, "numScale", n.numScale),
    labelScale: Ge(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ge(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ge(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ge(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ge(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Tn(t.customColor, n.customColor)
  };
}
const Fe = uu(nu);
function zi(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, l = (p) => {
      s !== "right" && t.add(p), s !== "left" && n.add(p);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const p = Math.min(+f[1], +f[2]), w = Math.min(Math.max(+f[1], +f[2]), p + r - 1);
      for (let b = p; b <= w; b++) l(b);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function mr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), l = t.has(s);
    (n ? a || l : a && l) && r.push(o);
  }
  return r;
}
function Ii(e) {
  return `0x${e.replace("#", "")}`;
}
function Rr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function fu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function pu(e, t, n) {
  const r = new Set(t.atoms), o = new Set(mr(e, r, !0));
  return {
    deletions: mr(e, r, n),
    changes: mr(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function Di(e, t, n, r) {
  const o = pu(t, n, e.boundary), i = [];
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
let ht = null;
function hu(e) {
  if (ht !== null) return ht;
  ht = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (ht = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return ht || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), ht;
}
function mu(e, t) {
  return e.style === "rdkit" ? "rdkit" : hu(t) ? e.style : "rdkit";
}
function gu(e, t, n, r, o, i) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Nd), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const _ of n) {
    const $ = Rr(_.color);
    if (o === "rdkit") for (const u of _.bonds) f[u] = $;
    if (o === "recolor" && e.circles === "off") continue;
    const g = o === "recolor" && e.circles === "filled" ? fu($, 0.7) : $;
    for (const u of _.atoms)
      a[u] = g, l[u] = e.circleRadius;
  }
  const p = Rr(e.customColor);
  for (const _ of r)
    _ < i && (a[_] = p, l[_] = e.circleRadius);
  const w = Object.keys(a).map(Number);
  w.length && (s.atoms = w, s.highlightAtomColors = a, s.highlightAtomRadii = l);
  const b = Object.keys(f).map(Number);
  return b.length && (s.bonds = b, s.highlightBondColors = f), s;
}
function yu(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (i) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", he(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const $u = "http://www.w3.org/2000/svg";
function Ls(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Qr(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function Vs(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function qi(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of Ls(e, s)) {
      const l = a.style;
      Vs(a) ? l.fill = o : (l.stroke = o, l.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of Qr(e, s, !1)) a.style.fill = i;
}
function vu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS($u, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of Ls(e, a)) {
      if (Vs(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", i.appendChild(f);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function bu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of Qr(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function wu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of Qr(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function _u(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function Su(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        qi(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? bu(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && wu(e, n, s.atoms, o, s.color);
      } else
        vu(e, n, s.bonds, s.color), qi(e, n, s.atoms, s.bonds, s.color, null);
  _u(e, t, n);
}
const er = `
`, Nr = "$$$$";
function Mr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(er);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let p = 0; p < o; p++) {
    const w = n[4 + p];
    if (w == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(w.substring(0, 10)) || 0,
      parseFloat(w.substring(10, 20)) || 0,
      parseFloat(w.substring(20, 30)) || 0
    ]), a.push(w.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let p = 0; p < (isFinite(i) ? i : 0); p++) {
    const w = n[4 + o + p];
    if (w == null) break;
    const b = parseInt(w.substring(0, 3), 10), _ = parseInt(w.substring(3, 6), 10), $ = parseInt(w.substring(6, 9), 10);
    !isFinite(b) || !isFinite(_) || l.push([b - 1, _ - 1, isFinite($) ? $ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: s };
}
function Cu(e) {
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
  return r.push("M  END"), r.join(er);
}
const ku = (e) => `${Cu(e)}${er}${Nr}`, Eu = (e) => e.indexOf(Nr) >= 0 ? e : `${e}${er}${Nr}`;
function Bs(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Us(e, t, n, r, o) {
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
      for (const f of o.atoms)
        s[f] = o.color, a[f] = o.radius;
      const l = {
        width: n,
        height: n,
        atoms: [...o.atoms],
        highlightAtomColors: s,
        highlightAtomRadii: a
      };
      return i.get_svg_with_highlights(JSON.stringify(l)) || null;
    }
    return i.get_svg(n, n) || null;
  } catch (s) {
    return console.warn("[gufe-viz] depictSVG threw -", he(s)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
function Ks(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Li = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Tr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, mt = (e) => e in Tr, Vi = 400, gr = "position:absolute;inset:0;min-width:0;min-height:0;";
class xu extends Ne {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = M("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const l = M(
      "div",
      `${gr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${yt.canvas2D};`
    );
    a.appendChild(l);
    const f = vs();
    f.wrap.style.cssText = gr, a.appendChild(f.wrap);
    const p = M(
      "div",
      `${gr}overflow:auto;padding:16px 20px;background:${R.panelBg};color:${R.textPrimary};font-size:${Z.body};`
    );
    a.appendChild(p);
    const w = r ? Bs(r) : null, b = [
      ["Name", o || rt, !1],
      ["SMILES", i || rt, !0],
      ["Charge", s == null ? rt : String(s), !1],
      ["Atoms", w ? String(w.atoms) : rt, !1],
      ["Bonds", w ? String(w.bonds) : rt, !1]
    ], _ = M("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${te.xl} 20px;align-items:baseline;`);
    p.appendChild(_);
    for (const [z, j, L] of b) {
      _.appendChild(
        M(
          "div",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${R.textMuted2};`,
          z
        )
      );
      const O = M(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${R.textPrimary}` + (L ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};` : ""),
        j
      );
      O.title = j, _.appendChild(O);
    }
    const $ = ws(t), g = M("div", kr, o || "Unnamed molecule");
    $ && a.appendChild(g);
    const u = bt(
      "small-molecule.mode",
      "2d",
      Li.map((z) => z.id)
    ), y = $t("small-molecule.spin", !1);
    let d = u.get(), C = y.get(), m = null, c = null;
    const h = () => {
      try {
        m?.spin(C && mt(d) ? "y" : !1);
      } catch {
      }
    }, v = (z) => {
      d = z, l.style.visibility = d === "2d" ? "visible" : "hidden", f.wrap.style.visibility = mt(d) ? "visible" : "hidden", p.style.visibility = d === "info" ? "visible" : "hidden", g.style.display = d === "info" || !$ ? "none" : "block", F.disabled = !mt(d), F.style.opacity = mt(d) ? "1" : "0.5", mt(d) && m && (m.setStyle({}, Tr[d]), m.resize(), m.render()), h();
    }, k = M("div", fs), P = Kn(Li, d, (z) => v(z), u), F = $s(
      "Spin",
      C,
      (z) => {
        C = z, h();
      },
      { title: "Toggle continuous rotation", remember: y }
    );
    return P.insertBefore(F, P.lastElementChild), k.appendChild(P), a.appendChild(k), v(d), !r || !r.trim() ? (l.appendChild(fe("No molecule provided")), f.container.appendChild(fe("No molecule provided")), {}) : (l.appendChild(fe("Loading 2D depiction...")), Qn().then((z) => {
      const j = Us(z, r, Vi, Fe.layout);
      j ? Ks(l, j, Vi) : l.replaceChildren(fe("Failed to parse molecule", !0));
    }).catch((z) => {
      l.replaceChildren(fe(`RDKit failed to load: ${he(z)}`, !0));
    }), f.container.appendChild(fe("Loading 3D viewer...")), Yr().then(() => {
      f.container.replaceChildren(), m = st.createViewer(f.container, { backgroundColor: yt.viewer }), m.addModel(Eu(r), "sdf"), m.setStyle({}, Tr[mt(d) ? d : "stick"]), m.zoomTo(), m.render(), c = Xr(f.container, m), h();
    }).catch((z) => {
      f.container.replaceChildren(fe(`3D render failed: ${he(z)}`, !0));
    }), {
      onResize() {
        m && (m.resize(), m.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!m) {
          try {
            m.spin(!1);
          } catch {
          }
          try {
            m.clear();
          } catch {
          }
          m = null;
        }
      }
    });
  }
}
Me("gufe-small-molecule", xu);
const Hs = ["HOH", "WAT", "SOL", "TIP3"], Bi = { hetflag: !1 }, Pu = { hetflag: !0 }, Au = { resn: Hs }, We = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Ru(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && o++;
    const p = l.slice(17, 20).trim(), w = l.slice(21, 22).trim() || "_", b = l.slice(22, 26).trim(), _ = l.slice(26, 27).trim();
    Hs.indexOf(p) !== -1 && i++, t.add(w), n.add(`${w}|${b}${_}|${p}`);
    const $ = parseInt(b, 10);
    isNaN($) || ($ < s && (s = $), $ > a && (a = $));
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
function Nu(e) {
  return `${St(e.chains)} chains · ${St(e.residues)} residues · ${St(e.atoms)} atoms · ${St(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${St(e.waters)} water)` : "");
}
function Mu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Ui(e, t, n, r) {
  const o = r || (() => {
  }), i = Mu(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Bi,
    t.rep === "stick" ? { stick: { radius: We.stick.radius, ...i } } : t.rep === "sphere" ? { sphere: { scale: We.sphere.scale, ...i } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...i } }
    )
  ), e.setStyle(
    Pu,
    t.hetero ? {
      stick: { radius: We.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: We.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Au,
    t.waters ? {
      stick: { radius: We.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: We.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    o(null), e.render();
    return;
  }
  o(
    n && n.atoms > We.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(st.SurfaceType.VDW, { opacity: We.surfaceOpacity, ...i }, Bi)
      ).then(() => {
        o(null), e.render();
      }).catch((s) => o(`Surface failed: ${he(s)}`, "error"));
    } catch (s) {
      o(`Surface failed: ${he(s)}`, "error");
    }
  }, 30);
}
const Ki = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Hi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Tu extends Ne {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, o = n.name ?? "", i = n.type !== "ProteinComponentViz", s = bt(
      "protein.representation",
      "cartoon",
      Ki.map((k) => k.id)
    ), a = bt(
      "protein.color",
      "chain",
      Hi.map((k) => k.id)
    ), l = $t("protein.waters", i), f = $t("protein.hetero", !0), p = $t("protein.spin", !1), w = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: p.get()
    };
    let b = null, _ = null, $ = null;
    const g = M(
      "div",
      jr.top
    );
    t.appendChild(g), g.appendChild(
      M("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${R.titleColor};`, o || "Protein")
    );
    const u = (k) => M("span", `font-size:${Z.small};color:${R.textMuted};`, k);
    g.appendChild(u("Style:")), g.appendChild(
      Kn(
        Ki,
        w.rep,
        (k) => {
          w.rep = k, v();
        },
        s
      )
    ), g.appendChild(u("Color:")), g.appendChild(
      Hn(
        Hi,
        w.color,
        (k) => {
          w.color = k, v();
        },
        a
      )
    );
    const y = M("div", "display:flex;gap:4px;");
    g.appendChild(y);
    const d = [
      ["waters", "Waters", "Show water molecules", l, () => v()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => v()],
      ["spin", "Spin", "Rotate the view continuously", p, () => b?.spin(w.spin ? "y" : !1)]
    ];
    for (const [k, P, F, z, j] of d)
      y.appendChild(
        $s(
          P,
          w[k],
          (L) => {
            w[k] = L, j();
          },
          { title: F, remember: z }
        )
      );
    y.appendChild(Zr(() => _?.reset()));
    const C = M("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${R.textMuted2};`);
    g.appendChild(C);
    const m = vs();
    t.appendChild(m.wrap);
    const c = M(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
    );
    m.wrap.appendChild(c);
    const h = (k, P) => {
      if (k == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = k, c.style.display = "block";
      const F = P === "error";
      c.style.background = F ? R.warnBg : R.toolbarBg, c.style.color = F ? R.warnFg : R.textMuted, c.style.border = `1px solid ${F ? R.warnBorder : R.toolbarBorder}`;
    };
    function v() {
      b && Ui(b, w, $, h);
    }
    if (!r || !r.trim())
      return h("No protein data - waiting for a PDB payload."), {};
    try {
      $ = Ru(r), C.textContent = Nu($);
    } catch (k) {
      h(`⚠ PDB parse error: ${he(k)}`, "error");
    }
    return h("Loading 3D viewer..."), Yr().then(() => {
      b = st.createViewer(m.container, { backgroundColor: yt.viewer }), b.addModel(r, "pdb"), Ui(b, w, $, h), b.zoomTo(), b.spin(w.spin ? "y" : !1), b.render(), _ = Xr(m.container, b);
    }).catch((k) => {
      h(`⚠ Failed to render structure: ${he(k)}`, "error");
    }), {
      onResize() {
        b && (b.resize(), b.render());
      },
      cleanup() {
        if (_?.cleanup(), _ = null, !!b) {
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
Me("gufe-protein", Tu);
function Ft(e) {
  const t = /* @__PURE__ */ new Map();
  return Or(e, t, /* @__PURE__ */ new Set()), t;
}
function Or(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Or(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Or(o, t, n);
}
function Xe(e, t) {
  return t ? e.get(t) : void 0;
}
function Se(e, t, n) {
  const r = Xe(e, t);
  return r?.type === n ? r : void 0;
}
function eo(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const i = e.get(o);
    i && (r.add(o), n.push(i));
  }
  return n;
}
function Ze(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const to = "Cmd/Ctrl-click to select several.";
function Ou(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : Ze(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function Fu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Gi(e, t)), navigator.clipboard || Gi(e, t);
}
function Gi(e, t) {
  const n = M("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function ju(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = M("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Gs(e) {
  const { words: t } = e, n = bt(e.setting, "names", ["names", "keys"]), r = M("div", "display:flex;flex-direction:column;gap:6px;"), o = M("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${R.textMuted};`);
  o.appendChild(M("span", "", "copy as"));
  const i = Hn(
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
  const s = M("div", `font-size:${Z.tiny};line-height:1.5;color:${R.textMuted2};`), a = (p) => {
    s.textContent = p;
  }, l = M("div", "display:flex;gap:4px;"), f = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [p, w, b] of f) {
    const _ = M("button", `${wt}flex:1;`, w.button);
    _.title = b, _.onclick = ($) => {
      const g = i.value, u = Ou(e.nodes, e.edges, e.selected, p, g);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : p === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${to}` : "Nothing to copy."
        );
        return;
      }
      const y = u.split(`
`).length;
      $.shiftKey ? (ju(u, `selected-${w.plural}.txt`), a(`Saved ${y} ${w.plural} to a file.`)) : (Fu(u, r), a(
        p === "edges" ? `Copied ${y} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, l.appendChild(_);
  }
  return r.appendChild(l), r.appendChild(s), r.appendChild(M("div", `font-size:${Z.tiny};color:${R.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Ws = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(Ws, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function Wi(e, t) {
  const n = document.createElementNS(Ws, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const zu = 3;
function Js(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const Iu = { min: 0.15, max: 5 }, Du = 1e-9;
function Ys(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Iu;
  let i = 1, s = 0, a = 0;
  const l = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, f = () => {
    const O = e.getBoundingClientRect();
    return {
      width: O.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: O.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, p = (O, G, Y) => Math.min(1, G / (O.maxX - O.minX + r * 2), Y / (O.maxY - O.minY + r * 2)), w = () => {
    const O = n.bounds();
    if (!O) return o.min;
    const { width: G, height: Y } = f();
    return Math.min(o.min, p(O, G, Y));
  }, b = (O) => Math.min(o.max, Math.max(w(), i * O)), _ = () => {
    i = 1, s = 0, a = 0;
    const O = n.bounds();
    if (!O) {
      l();
      return;
    }
    const { width: G, height: Y } = f();
    i = p(O, G, Y), s = G / 2 - (O.minX + O.maxX) / 2 * i, a = Y / 2 - (O.minY + O.maxY) / 2 * i, l();
  }, g = Ds(e, {
    onZoom: (O) => {
      const G = e.getBoundingClientRect(), Y = O.clientX - G.left, oe = O.clientY - G.top, X = b(qs(O)), W = X / i;
      return s = Y - (Y - s) * W, a = oe - (oe - a) * W, i = X, l(), Math.abs(W - 1) > Du;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let y = null, d = null, C = !1, m = null;
  const c = (O) => ({
    x: O.clientX - s,
    y: O.clientY - a,
    from: { x: O.clientX, y: O.clientY }
  }), h = (O) => {
    O.pointerType === "touch" && u.size > 1 || (d = c(O), C = !1);
  }, v = (O) => {
    y || (m && O.pointerType === "touch" && (d = { x: m.x - s, y: m.y - a, from: m }, m = null), d && (Math.hypot(O.clientX - d.from.x, O.clientY - d.from.y) > zu && (C = !0), s = O.clientX - d.x, a = O.clientY - d.y, l()));
  }, k = () => {
    d = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", v), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("pointerleave", k);
  const P = () => {
    const [O, G] = [...u.values()];
    return { cx: (O.x + G.x) / 2, cy: (O.y + G.y) / 2, span: Math.max(1, Math.hypot(O.x - G.x, O.y - G.y)) };
  }, F = (O) => {
    if (O.pointerType === "touch") {
      if (u.set(O.pointerId, { x: O.clientX, y: O.clientY }), u.size !== 2) {
        y = null;
        return;
      }
      y = P(), d = null, C = !0;
    }
  }, z = (O) => {
    if (O.pointerType !== "touch" || !u.has(O.pointerId) || (u.set(O.pointerId, { x: O.clientX, y: O.clientY }), !y || u.size !== 2)) return;
    O.preventDefault(), O.stopPropagation();
    const G = P(), Y = e.getBoundingClientRect(), oe = b(G.span / y.span), X = oe / i;
    s = G.cx - Y.left - (y.cx - Y.left - s) * X, a = G.cy - Y.top - (y.cy - Y.top - a) * X, i = oe, y = G, l();
  }, j = (O) => {
    if (O.pointerType !== "touch") return;
    if (u.delete(O.pointerId), u.size === 2) {
      y = P();
      return;
    }
    y = null;
    const [G] = [...u.values()];
    m = u.size === 1 && G ? { ...G } : null;
  };
  e.addEventListener("pointerdown", F, !0), e.addEventListener("pointermove", z, { capture: !0, passive: !1 }), e.addEventListener("pointerup", j, !0), e.addEventListener("pointercancel", j, !0);
  const L = Sd(e);
  return {
    fit: _,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: _,
    centreOn(O, G, Y = 1) {
      const { width: oe, height: X } = f();
      i = Math.max(i, Y), s = oe / 2 - O * i, a = X / 2 - G * i, l();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(O, G, Y) {
      i = O, s = G, a = Y, l();
    },
    cleanup() {
      g.cleanup(), L.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", v), e.removeEventListener("pointerup", k), e.removeEventListener("pointercancel", k), e.removeEventListener("pointerleave", k), e.removeEventListener("pointerdown", F, !0), e.removeEventListener("pointermove", z, { capture: !0 }), e.removeEventListener("pointerup", j, !0), e.removeEventListener("pointercancel", j, !0);
    }
  };
}
const qu = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Xs(e) {
  const t = { ...e };
  for (const n of qu) delete t[n];
  return t;
}
const Lu = 8, Vu = 64, Bu = () => new Promise((e) => setTimeout(e, 0));
function Fr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Uu(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const i = o.get_substruct_matches(t), s = JSON.parse(i || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of s) {
      const f = l.atoms;
      if (Array.isArray(f))
        for (const p of f) typeof p == "number" && a.add(p);
    }
    return [...a].sort((l, f) => l - f);
  } catch (i) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(i)), null;
  } finally {
    Fr(o);
  }
}
function Zs(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (s) => {
    const a = s.trim(), l = ++o;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const p = await e();
    if (l !== o) return { status: "superseded" };
    if (!p) return { status: "unsupported" };
    if (!p.get_qmol) return { status: "unsupported" };
    let w = null;
    try {
      w = p.get_qmol(a);
    } catch {
      w = null;
    }
    if (!w) return { status: "invalid" };
    if (!w.get_substruct_matches)
      return Fr(w), { status: "unsupported" };
    const b = /* @__PURE__ */ new Map();
    let _ = 0;
    try {
      let $ = performance.now(), g = 0;
      for (let u = 0; u < t.length; u++) {
        const y = t[u] ? Uu(p, w, t[u], n) : null;
        if (y ? y.length && b.set(u, y) : _++, !(++g < Vu && performance.now() - $ < Lu)) {
          if (await Bu(), l !== o) return { status: "superseded" };
          g = 0, $ = performance.now();
        }
      }
    } finally {
      Fr(w);
    }
    return r.set(a, b), { status: "ok", matched: b, unreadable: _ };
  }, cancel: () => void ++o };
}
const Ku = 250;
function Qs(e) {
  const t = M("div", "display:flex;flex-direction:column;gap:8px;"), n = M("input", `${Un}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = M("div", `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${R.textMuted2};`);
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
      (l) => {
        l.status !== "superseded" && (r.textContent = o(l));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let s = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), Ku);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const Hu = 1e-6;
function On(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Ji(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Gu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Yi(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], l = i[s][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const p = t[a * 3 + a], w = t[l * 3 + l], b = (w - p) / (2 * f);
      let _;
      Math.abs(b) > 1e10 ? _ = 1 / (2 * b) : _ = (b >= 0 ? 1 : -1) / (Math.abs(b) + Math.sqrt(b * b + 1));
      const $ = 1 / Math.sqrt(1 + _ * _), g = _ * $;
      t[a * 3 + a] = p - _ * f, t[l * 3 + l] = w + _ * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== l) {
          const y = t[u * 3 + a], d = t[u * 3 + l];
          t[u * 3 + a] = $ * y - g * d, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + l] = g * y + $ * d, t[l * 3 + u] = t[u * 3 + l];
        }
      for (let u = 0; u < 3; u++) {
        const y = n[u * 3 + a], d = n[u * 3 + l];
        n[u * 3 + a] = $ * y - g * d, n[u * 3 + l] = g * y + $ * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Wu(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], o[0] += t[m][0], o[1] += t[m][1], o[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const c = e[m][0] - r[0], h = e[m][1] - r[1], v = e[m][2] - r[2], k = t[m][0] - o[0], P = t[m][1] - o[1], F = t[m][2] - o[2];
    i[0] += c * k, i[1] += c * P, i[2] += c * F, i[3] += h * k, i[4] += h * P, i[5] += h * F, i[6] += v * k, i[7] += v * P, i[8] += v * F;
  }
  const s = Ji(i), a = On(s, i), l = On(i, s);
  let f = Yi(a), p = Yi(l);
  function w(m) {
    const c = [0, 1, 2].sort((v, k) => m.values[k] - m.values[v]), h = new Array(9);
    for (let v = 0; v < 3; v++) {
      const k = c[v];
      h[v] = m.vectors[k], h[3 + v] = m.vectors[3 + k], h[6 + v] = m.vectors[6 + k];
    }
    return {
      values: [m.values[c[0]], m.values[c[1]], m.values[c[2]]],
      vectors: h
    };
  }
  f = w(f), p = w(p);
  const b = f.vectors, _ = p.vectors;
  for (let m = 0; m < 3; m++) {
    const c = b[m], h = b[3 + m], v = b[6 + m], k = i[0] * c + i[1] * h + i[2] * v, P = i[3] * c + i[4] * h + i[5] * v, F = i[6] * c + i[7] * h + i[8] * v, z = _[m], j = _[3 + m], L = _[6 + m];
    k * z + P * j + F * L < 0 && (_[m] = -z, _[3 + m] = -j, _[6 + m] = -L);
  }
  const $ = Ji(b);
  let g = On(_, $);
  Gu(g) < 0 && (_[2] = -_[2], _[5] = -_[5], _[8] = -_[8], g = On(_, $));
  const u = g[0] * o[0] + g[1] * o[1] + g[2] * o[2], y = g[3] * o[0] + g[4] * o[1] + g[5] * o[2], d = g[6] * o[0] + g[7] * o[1] + g[8] * o[2], C = f.values[1] > Hu * f.values[0];
  return { R: g, t: [r[0] - u, r[1] - y, r[2] - d], determined: C };
}
function Ju(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const Xi = `
`, yr = 4;
function Zi(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", he(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Yu(e, t, n) {
  const r = [], o = [];
  for (const [p, w] of n) {
    const b = e[w], _ = t[p];
    !b || !_ || (r.push(b), o.push(_));
  }
  if (r.length < 2) return null;
  const i = (p) => {
    let w = 0, b = 0;
    for (const _ of p)
      w += _[0], b += _[1];
    return [w / p.length, b / p.length];
  }, s = i(r), a = i(o);
  let l = null, f = -1 / 0;
  for (const p of [!1, !0]) {
    let w = 0, b = 0;
    for (let d = 0; d < r.length; d++) {
      const C = (p ? -1 : 1) * (r[d][0] - s[0]), m = r[d][1] - s[1], c = o[d][0] - a[0], h = o[d][1] - a[1];
      w += C * h - m * c, b += C * c + m * h;
    }
    const _ = Math.hypot(w, b);
    if (_ <= f) continue;
    f = _;
    const $ = Math.atan2(w, b), g = Math.cos($), u = Math.sin($), y = (p ? -1 : 1) * s[0];
    l = {
      cos: g,
      sin: u,
      mirror: p,
      tx: a[0] - (g * y - u * s[1]),
      ty: a[1] - (u * y + g * s[1])
    };
  }
  return l;
}
function Xu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Zu(e, t, n) {
  const r = Bs(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(Xi);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[yr + i], a = t[i];
    if (s == null || !a) return e;
    o[yr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = yr + r.atoms + a, f = o[l];
      if (f == null) break;
      const p = parseInt(f.substring(9, 12), 10);
      p !== 1 && p !== 6 || (o[l] = f.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return o.join(Xi);
}
function Qu(e, t, n) {
  try {
    const r = (s) => Mr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = Yu(o, r(e), n);
    return i ? Zu(
      t,
      o.map((s) => Xu(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function ef(e, t, n, r, o) {
  const i = Zi(e, t, r), s = Zi(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: Qu(i, s, o) };
}
const tf = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, nf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function rf() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const $r = rf() ? tf : nf, Qi = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], vr = 420, of = {
  mapped: null,
  element: Fe.modifiedColor,
  uniqueA: Fe.destroyedColor,
  uniqueB: Fe.createdColor
}, sf = 132, Be = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, br = { gap: 2.5, minLiftFraction: 0.6 }, af = 24, Tt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function es(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function cf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function lf(e, t, n) {
  const r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i] ?? "", a = e.get(i);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: i, b: null, symbolA: s, symbolB: "" });
      continue;
    }
    const l = n[a] ?? "";
    r.push({ kind: s === l ? "mapped" : "element", a: i, b: a, symbolA: s, symbolB: l });
  }
  const o = new Set(e.values());
  for (let i = 0; i < n.length; i++)
    o.has(i) || r.push({ kind: "uniqueB", a: null, b: i, symbolA: "", symbolB: n[i] ?? "" });
  return r;
}
function ea(e, t) {
  const n = Se(t, e.componentA, "SmallMoleculeComponentViz"), r = Se(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: eo(t, [e.componentA, e.componentB]) };
}
function df(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const l = e.coords[s], f = t.coords[a];
    l && f && (r.push(l), o.push(f));
  }
  const i = Wu(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => Ju(s, i.R, i.t)) } : t;
}
function ts(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function uf(e, t) {
  const n = ts(e), r = ts(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + br.gap, a = br.minLiftFraction * i + br.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function ff(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Tt.minSpread ? r : Tt.minSpread) * Tt.spreadFactor;
}
function pf(e, t) {
  const n = Rd, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const p = (b) => parseInt(b.slice(1 + f * 2, 3 + f * 2), 16), w = Math.round(p(n[i]) + (p(n[s]) - p(n[i])) * a);
    l += w.toString(16).padStart(2, "0");
  }
  return l;
}
class hf extends Ne {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = Se(r, n.componentA, "SmallMoleculeComponentViz"), i = Se(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !i)
      return t.appendChild(
        fe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = Ze(o), a = Ze(i), l = cf(n);
    let f, p;
    try {
      f = Mr(o.sdf, s), p = Mr(i.sdf, a);
    } catch (W) {
      return t.appendChild(fe(`Could not read a molecule: ${he(W)}`, !0)), {};
    }
    p = df(f, p, l);
    const w = /* @__PURE__ */ new Map();
    for (const [W, q] of l) w.set(q, W);
    const b = es(l, f.symbols, p.symbols), _ = es(w, p.symbols, f.symbols), $ = ws(t), g = M("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(g);
    const u = M("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    g.appendChild(u);
    const y = bt("atom-mapping.mode", "plain", Qi.map((W) => W.id));
    let d = y.get();
    const C = M(
      "div",
      fs
    );
    C.appendChild(
      Kn(
        Qi,
        d,
        (W) => {
          d = W, X();
        },
        y
      )
    ), g.appendChild(C);
    let m = [], c = 0, h = !0;
    const v = () => {
      c && cancelAnimationFrame(c), c = 0;
      for (const W of m) {
        W.interaction?.cleanup();
        try {
          W.viewer?.clear();
        } catch {
        }
      }
      m = [], u.replaceChildren();
    }, k = (W) => {
      const q = M("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), A = M("div", "flex:1;position:relative;min-height:0;");
      A.dataset.gufeViewer = "", q.appendChild(A), $ && q.appendChild(M("div", kr, W)), u.appendChild(q);
      const D = { container: A, viewer: null, interaction: null };
      return m.push(D), D;
    }, P = () => {
      if (m.length < 2) return;
      const W = m.map(() => "");
      let q = !1;
      const A = () => {
        if (h) {
          if (!q)
            for (let D = 0; D < m.length; D++) {
              const N = m[D].viewer;
              if (!N) continue;
              const S = JSON.stringify(N.getView());
              if (S !== W[D]) {
                q = !0;
                for (let E = 0; E < m.length; E++)
                  E !== D && m[E].viewer && (m[E].viewer.setView(N.getView()), m[E].viewer.render()), W[E] = S;
                q = !1;
                break;
              }
            }
          c = requestAnimationFrame(A);
        }
      };
      c = requestAnimationFrame(A);
    }, F = (W, q) => {
      const A = st.createViewer(W.container, { backgroundColor: yt.viewer });
      for (const { mol: D } of q) A.addModel(ku(D), "sdf");
      return W.viewer = A, A;
    }, z = (W) => {
      W.viewer && (W.interaction = Xr(W.container, W.viewer));
    }, j = () => {
      for (const W of [f, p]) {
        const q = k(W.name), A = F(q, [{ mol: W }]);
        A.setStyle(
          {},
          { stick: { radius: Be.stick, colorscheme: "Jmol" }, sphere: { scale: Be.sphere, colorscheme: "Jmol" } }
        ), A.zoomTo(), A.render(), z(q);
      }
      P();
    }, L = () => {
      const W = Fe, q = zi(W.customSpec), A = [
        { mol: f, uniques: b, side: "left", custom: q.left },
        { mol: p, uniques: _, side: "right", custom: q.right }
      ];
      for (const D of A) {
        const N = k(D.mol.name), S = F(N, [{ mol: D.mol }]);
        S.setStyle(
          {},
          { stick: { radius: Be.stick, color: $r.core }, sphere: { scale: Be.sphere, color: $r.core } }
        );
        const E = (I, V) => {
          S.addStyle(
            { serial: I },
            {
              stick: { radius: Be.markStick, color: Ii(V) },
              sphere: { scale: Be.markSphere, color: Ii(V) }
            }
          );
        };
        for (const I of Di(W, D.mol, D.uniques, D.side))
          for (const V of I.atoms) E(V, I.color);
        for (const I of D.custom)
          I < D.mol.symbols.length && E(I, W.customColor);
        S.zoomTo(), S.render(), z(N);
      }
      P();
    }, O = () => {
      const W = k(`${s} (left), both overlaid (middle), ${a} (right)`), q = ff(f.coords, p.coords), A = (re, ee) => ({
        ...re,
        coords: re.coords.map(([x, T, B]) => [x + ee, T, B])
      }), D = A(f, -q), N = A(p, q), S = F(W, [{ mol: D }, { mol: N }, { mol: f }, { mol: p }]);
      S.setStyle({}, { stick: {} });
      const E = Array.from(l);
      E.forEach(([re, ee], x) => {
        const T = D.coords[re], B = N.coords[ee];
        if (!T || !B) return;
        const J = pf(x, E.length);
        for (const [K, Q, ne] of [T, B])
          S.addSphere({
            center: { x: K, y: Q, z: ne },
            radius: Tt.sphereRadius,
            color: J,
            alpha: Tt.sphereAlpha
          });
      }), S.zoomTo();
      const { clientWidth: I, clientHeight: V } = W.container, H = I - 2 * af;
      H > 0 && H < V && S.zoom(H / V), S.render(), z(W);
    }, G = () => {
      const W = k(`${s} to ${a}  (${l.size} mapped pairs)`), { axis: q, lift: A } = uf(f.coords, p.coords), D = {
        ...p,
        coords: p.coords.map((E) => {
          const I = [E[0], E[1], E[2]];
          return I[q] += A, I;
        })
      }, N = F(W, [{ mol: f }, { mol: D }]), S = {
        stick: { radius: Be.stick, colorscheme: "Jmol" },
        sphere: { scale: Be.pairSphere, colorscheme: "Jmol" }
      };
      N.setStyle({ model: 0 }, S), N.setStyle({ model: 1 }, S);
      for (const [E, I] of l) {
        const V = f.coords[E], H = D.coords[I];
        !V || !H || N.addCylinder({
          start: { x: V[0], y: V[1], z: V[2] },
          end: { x: H[0], y: H[1], z: H[2] },
          radius: Be.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: $r.pairLine
        });
      }
      N.zoomTo(), q === 2 ? N.rotate(90, "x") : q === 0 && N.rotate(-90, "z"), N.render(), z(W);
    }, Y = () => {
      const W = Fe, q = zi(W.customSpec), D = [
        { mol: f, uniques: b, side: "left", custom: q.left },
        { mol: p, uniques: _, side: "right", custom: q.right }
      ].map((N) => {
        const S = M("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), E = M(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${yt.canvas2D};`
        );
        return E.appendChild(fe("Loading 2D depiction...")), S.appendChild(E), $ && S.appendChild(M("div", kr, N.mol.name)), u.appendChild(S), { box: E, side: N };
      });
      Qn().then((N) => {
        const S = mu(W, N), E = ef(N, o.sdf, i.sdf, W.layout, W.alignPair ? l : null);
        for (const { box: I, side: V } of D) {
          const H = Di(W, V.mol, V.uniques, V.side), re = gu(
            W,
            vr,
            H,
            V.custom,
            S,
            V.mol.symbols.length
          ), ee = yu(N, V.side === "left" ? E.left : E.right, vr, re);
          if (I.replaceChildren(), !ee) {
            I.appendChild(fe("Failed to parse molecule", !0));
            continue;
          }
          Ks(I, ee, vr);
          const x = I.querySelector("svg");
          x && Su(x, V.mol, W, H, V.custom, S);
        }
      }).catch((N) => {
        for (const { box: S } of D)
          S.replaceChildren(fe(`RDKit failed to load: ${he(N)}`, !0));
      });
    }, oe = () => {
      const W = M(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(W);
      const q = M("div", "display:flex;flex-direction:column;gap:2px;");
      q.appendChild(
        M(
          "div",
          `font-size:${Z.title};font-weight:${$e.bold};color:${je.title};`,
          n.name || `${s} to ${a}`
        )
      ), W.appendChild(q);
      const A = lf(l, f.symbols, p.symbols), D = M("div", Pe.row), N = [];
      let S = null;
      const E = (K, Q, ne, ue) => {
        const le = M("button", `${Pe.plain}${Pe.button}`);
        le.type = "button", le.appendChild(Re(K, String(Q), ue)), le.onclick = () => {
          S = S === ne ? null : ne, B();
        }, N.push({ button: le, kinds: ne }), D.appendChild(le);
      }, I = (K, Q) => {
        const ne = M("span", Pe.plain);
        ne.appendChild(Re(K, Q)), D.appendChild(ne);
      };
      E("mapped atoms", l.size, ["mapped", "element"]), E("element changes", b.elements.length, ["element"], Fe.modifiedColor), E(`unique to ${s}`, b.atoms.length, ["uniqueA"], Fe.destroyedColor), E(`unique to ${a}`, _.atoms.length, ["uniqueB"], Fe.createdColor), I(`atoms in ${s}`, String(f.symbols.length)), I(`atoms in ${a}`, String(p.symbols.length)), I("score", n.score == null ? rt : n.score.toFixed(3)), W.appendChild(D), W.appendChild(M("div", Er, "Correspondence"));
      const V = M("div", xr);
      W.appendChild(V);
      const H = M(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${sf}px,1fr));gap:${te.xs} ${te.md};font-family:${Z.mono};font-size:${Z.small};color:${je.primary};`
      );
      W.appendChild(H);
      const re = String(Math.max(f.symbols.length, p.symbols.length, 1) - 1).length, ee = (K, Q) => `${(K == null ? rt : String(K)).padStart(re)} ${Q.padEnd(2)}`, x = (K) => {
        if (K.kind === "uniqueA") return `${s} atom ${K.a} ${K.symbolA} maps to nothing`;
        if (K.kind === "uniqueB") return `${a} atom ${K.b} ${K.symbolB} maps to nothing`;
        const Q = K.kind === "element" ? ", an element change" : "";
        return `${s} atom ${K.a} ${K.symbolA} maps to ${a} atom ${K.b} ${K.symbolB}${Q}`;
      }, T = (K) => {
        const Q = M(
          "div",
          `white-space:pre;padding:${te.xs} ${te.md};border-radius:${ze.sm};background:${yt.card};border-left:3px solid ${of[K.kind] ?? "transparent"};`,
          `${ee(K.a, K.symbolA)} -> ${ee(K.b, K.symbolB)}`
        );
        return Q.title = x(K), Q.dataset.gufeRelation = K.kind, Q;
      }, B = () => {
        const K = S, Q = K ? A.filter((ne) => K.includes(ne.kind)) : A;
        H.replaceChildren(...Q.map(T)), Q.length || H.appendChild(
          M("div", `${xr}grid-column:1/-1;`, S ? "No atoms of that kind." : "This mapping has no atoms.")
        ), V.textContent = (l.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (S ? "; click the chip again for all of them" : "");
        for (const ne of N) {
          const ue = ne.kinds === S;
          ne.button.style.cssText = `${Pe.plain}${ue ? Pe.active : Pe.button}`, ne.button.setAttribute("aria-pressed", String(ue)), ne.button.title = ue ? "Show every atom" : "Show only these atoms";
        }
      };
      B();
      const J = Object.entries(n.annotations ?? {}).filter(([K]) => K !== "score");
      if (J.length) {
        W.appendChild(M("div", Er, "Annotations"));
        const K = M("div", `${aa}color:${je.faint};`);
        for (const [Q, ne] of J)
          K.appendChild(M("div", "", `${Q}: ${String(ne)}`));
        W.appendChild(K);
      }
    }, X = () => {
      if (v(), d === "info") {
        oe();
        return;
      }
      if (d === "2d") {
        Y();
        return;
      }
      u.appendChild(fe("Loading 3D viewer...")), Yr().then(() => {
        h && (u.replaceChildren(), d === "colored" ? L() : d === "openfe" ? O() : d === "lines" ? G() : j());
      }).catch((W) => {
        u.replaceChildren(fe(`3D render failed: ${he(W)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const W of m)
          W.viewer && (W.viewer.resize(), W.viewer.render());
      },
      cleanup() {
        h = !1, v();
      }
    };
  }
}
Me("gufe-atom-mapping", hf);
const ns = ["Force-directed", "Circular", "Radial"], mf = "ligand-network", gf = "Click a ligand or an edge to see it.";
function yf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function $f(e) {
  return Xs(e);
}
const rs = (e) => Math.round(e * 100) / 100;
function vf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function bf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Pt = { initial: 0.58, min: 0.25, max: 0.8 }, Ae = 38, Fn = 200, wf = 4, _f = 14, Sf = 18, _e = {
  fontSize: 11,
  below: Ae + 12,
  minFontSize: 7,
  insideWidth: (Ae - 6) * 2
}, Nt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, os = 1.5, Cf = 6.5, kf = 0.9, Ef = 14, wr = { size: 8, clearance: 8 }, xf = { fontSize: 10 }, Pf = 0.4, Af = Rr(R.netMatchAtom), At = { padding: 4, opacity: 0.95 }, Rf = 3, vt = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Nf = (e) => vt.find((t) => e >= t.from) ?? vt[vt.length - 1], Mf = (e) => vt[Math.min(vt.indexOf(e) + 1, vt.length - 1)], jn = 200, Tf = 24, _r = { node: 0.12, edge: 0.06 }, Of = 1.8, is = 2 * Ae + 68, Ce = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: is,
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
  collisionPadding: is / 2 - Ae,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Ff(e) {
  const t = M(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${R.tooltipBg};border:1px solid ${R.tooltipBorder};color:${R.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function jf(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const i = ce("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Ae + wr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: wr.size,
      markerHeight: wr.size,
      orient: "auto"
    });
    return i.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function zf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function If(e) {
  const [t, n] = R.netEdgeRamp.map(zf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ue = Ze, Df = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e, qf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), Lf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Vf = (e) => Lf.has(qf(e));
function Bf(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = ($) => (e.matched().get($) ?? []).join(","), i = ($, g) => {
    if (t.has(g) || n.has(g)) return;
    const u = e.nodes[g], y = e.matched().get(g), d = u.sdf && Us(
      $,
      u.sdf,
      Fn,
      Fe.layout,
      y && { atoms: y, color: Af, radius: Pf }
    );
    if (!d) {
      n.add(g);
      return;
    }
    const C = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!C || C.nodeName.toLowerCase() === "parsererror") {
      n.add(g);
      return;
    }
    const m = (Ae - wf) * 2 / Fn, c = e.depictionGroups[g];
    c.setAttribute(
      "transform",
      `translate(${-m * Fn / 2},${-m * Fn / 2}) scale(${m})`
    );
    let h = 0;
    for (const v of Array.from(C.childNodes)) {
      if (v.nodeType !== 1) continue;
      const k = v.nodeName.toLowerCase();
      k === "defs" || k === "metadata" || k === "title" || k === "rect" && Vf(v) || (c.appendChild(document.importNode(v, !0)), h++);
    }
    h ? (t.add(g), r[g] = o(g)) : n.add(g);
  }, s = () => {
    for (const $ of [...t])
      r[$] !== o($) && (e.depictionGroups[$].replaceChildren(), t.delete($));
  }, a = [], l = ($, g) => {
    if (a[$]) return a[$];
    g.setAttribute("font-size", String(_e.fontSize));
    let u = 0;
    try {
      u = g.getBBox().width;
    } catch {
      return _e.fontSize;
    }
    if (!u) return _e.fontSize;
    const y = _e.fontSize * _e.insideWidth / u;
    return a[$] = Math.max(_e.minFontSize, Math.min(_e.fontSize, y)), a[$];
  }, f = [], p = ($) => {
    const g = e.captionPlates[$];
    if (f[$] === _e.below) {
      g.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[$].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      g.setAttribute("display", "none");
      return;
    }
    g.setAttribute("x", String(u.x - Nt.captionPadX)), g.setAttribute("y", String(u.y - Nt.captionPadY)), g.setAttribute("width", String(u.width + Nt.captionPadX * 2)), g.setAttribute("height", String(u.height + Nt.captionPadY * 2)), g.setAttribute("display", "inline"), f[$] = _e.below;
  }, w = ($, g) => {
    const u = g.structure && !t.has($) ? Mf(g) : g;
    e.depictionGroups[$].setAttribute("display", u.structure ? "inline" : "none"), e.plates[$].setAttribute("display", u.structure ? "inline" : "none");
    const y = e.matched().has($), d = e.circles[$];
    d.setAttribute("fill", u.disc ? y ? R.netMatchFill : R.netNodeFill : "none"), d.setAttribute("stroke", u.disc ? y ? R.netMatchStroke : R.netNodeStroke : "none"), e.initials[$].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[$], m = u.name === "below";
    if (C.setAttribute("fill", y ? R.netMatchStroke : m ? R.netDepictCaption : R.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), m || e.captionPlates[$].setAttribute("display", "none"), u.name === "none") return;
    const c = u.name === "inside";
    C.setAttribute("y", c ? "0" : String(_e.below)), C.setAttribute("dominant-baseline", c ? "middle" : "auto"), C.setAttribute("font-size", String(c ? l($, C) : _e.fontSize)), m && p($);
  };
  let b = null;
  return { apply: ($, g, u) => {
    const y = Nf($);
    b = y, e.stage.setAttribute("data-detail", y.id), e.edgeLabels.setAttribute("display", y.edgeScores ? "inline" : "none");
    for (let c = 0; c < e.nodes.length; c++) w(c, y);
    if (!y.structure) return;
    const { width: d, height: C } = e.viewport(), m = [];
    e.nodes.forEach((c, h) => {
      if (t.has(h) || n.has(h)) return;
      const v = c.x * $ + g, k = c.y * $ + u;
      v < -jn || k < -jn || v > d + jn || k > C + jn || m.push(h);
    }), m.length && e.rdkit().then((c) => {
      if (!(!c || b !== y))
        for (const h of m)
          i(c, h), w(h, y);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function Uf(e) {
  const t = Mt("ligand-network.query"), n = zr("ligand-network.minScore", 0, 0, 1), r = M("div", ls), o = M("input", `${Un}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const i = Qs({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: Mt("ligand-network.smarts"),
    run: (g) => e.match(g),
    describe: (g) => {
      const u = g.unreadable ? `, ${g.unreadable} could not be read` : "";
      return `${g.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(i.element);
  const s = M("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${R.textMuted};`), a = M("span", `min-width:28px;color:${R.textPrimary};`, "0.00"), l = M("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(M("span", "", "score >=")), s.appendChild(l), s.appendChild(a), r.appendChild(s);
  const f = M("div", `font-size:${Z.small};color:${R.textMuted2};`);
  r.appendChild(f);
  const p = M("div", ds);
  r.appendChild(p), r.appendChild(M("div", `font-size:${Z.tiny};line-height:1.5;color:${R.textMuted2};`, to));
  const w = Gs({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild(w.box);
  const b = M("button", `${wt}width:100%;`, "Clear selection");
  b.onclick = () => {
    e.selected.clear(), $(), e.refresh();
  }, r.appendChild(b);
  const _ = (g) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? Ue(g).toLowerCase().includes(u) || (g.smiles ?? "").toLowerCase().includes(u) || g["gufe-key"].toLowerCase().includes(u) : !0;
  }, $ = () => {
    w.clearNote(), p.replaceChildren();
    const g = e.nodes.map((u, y) => ({ node: u, index: y })).filter(({ node: u }) => _(u));
    f.textContent = `${g.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: y } of g) {
      const d = u["gufe-key"], C = M(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? R.cardBorderActive : R.cardBorder};background:${e.selected.has(d) ? R.cardBgActive : R.cardBg};color:${R.textPrimary};`
      ), m = M("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ue(u));
      m.title = `${Ue(u)}
${u.smiles ?? ""}`, C.appendChild(m), C.onclick = (c) => {
        c.shiftKey || c.metaKey || c.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(y)), $(), e.refresh();
      }, p.appendChild(C);
    }
    g.length || p.appendChild(M("div", `font-size:${Z.small};padding:8px;color:${R.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), $(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, $(), i.apply(), r;
}
class Kf extends Ne {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = [];
    let i = 0;
    for (const x of n.nodes ?? []) {
      const T = Se(r, x, "SmallMoleculeComponentViz");
      if (!T) {
        i++;
        continue;
      }
      o.push({ ...T, x: 0, y: 0 });
    }
    const s = new Map(o.map((x) => [x["gufe-key"], x])), a = [];
    let l = 0;
    for (const x of n.edges ?? []) {
      const T = s.get(x.componentA), B = s.get(x.componentB);
      if (!T || !B) {
        l++;
        continue;
      }
      a.push({ ...x, index: a.length, from: T, to: B });
    }
    const f = _t(n.name || "Ligand network");
    f.statsEl.appendChild(Re("ligands", String(o.length))), f.statsEl.appendChild(Re("mappings", String(a.length))), t.appendChild(f);
    const p = M("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const w = /* @__PURE__ */ new Set(), b = { minScore: 0 }, _ = { text: "" };
    let $ = () => {
    }, g = null;
    const u = () => g ??= Qn().catch((x) => (console.warn("[gufe-viz] RDKit failed to load:", he(x)), null)), y = Zs(
      u,
      o.map((x) => x.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), C = () => {
    };
    const m = async (x) => {
      const T = await y.run(x);
      return T.status === "superseded" || (d = T.status === "ok" ? T.matched : /* @__PURE__ */ new Map(), C()), T;
    }, c = ks(
      f,
      () => Uf({
        nodes: o,
        edges: a,
        selected: w,
        filter: b,
        query: _,
        refresh: () => $(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (x) => {
          G(x), re({ kind: "ligand", index: x });
        },
        match: (x) => m(x)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => ee(),
        remember: $t("ligand-network.menuOpen", !1)
      }
    );
    c.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", p.appendChild(c.panel);
    let h = () => {
    };
    const v = M("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${R.netCanvasBg};`), k = M("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${R.appBg};`);
    p.appendChild(v), p.appendChild(
      _s(p, v, k, {
        min: Pt.min,
        max: Pt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: zr("ligand-network.canvasShare", Pt.initial, Pt.min, Pt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (x) => Ss(c.panel, x)
      })
    ), p.appendChild(k);
    const P = M("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${R.netCanvasBg};`);
    v.appendChild(P);
    const F = bt("ligand-network.layout", "Force-directed", ns), z = this.#n(
      (x) => ee(x),
      () => I(),
      F
    );
    v.appendChild(z.bar);
    const j = this.#e(k, r);
    if (!o.length)
      return P.appendChild(
        fe(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), j.message("Nothing to show."), {};
    i && it(
      P,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && it(P, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const L = u(), O = Ff(P);
    let G = () => {
    };
    const Y = vf(ma(mf), o.length);
    let oe = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const x = Y.selectedKind ?? "edge";
      Y.selected < (x === "ligand" ? o.length : a.length) && (X = { kind: x, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, A = null, D = F.get(), N = !1, S = !0, E = () => {
    }, I = () => {
    }, V = 0;
    const H = () => {
      if (!X) {
        j.message(a.length ? gf : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? j.showMapping(a[X.index]) : j.showLigand(o[X.index]);
    }, re = (x) => {
      X = x, H(), E();
    }, ee = (x = D) => {
      const T = q && x === D ? W() : null, B = ++V;
      D = x, A?.(), A = null, P.querySelectorAll("svg").forEach((ne) => ne.remove());
      const J = P.clientWidth || 800, K = P.clientHeight || 600;
      Hf(o, J, K, D, a), Y && bf(o, Y.nodes);
      const Q = () => {
        if (!S || B !== V) return;
        const ne = this.#t(P, o, a, J, K, re, L, O);
        E = () => ne.setSelected(X), I = ne.reset, A = ne.cleanup, G = (le) => ne.focusOn(le), W = ne.transform, $ = () => {
          const le = _.text.trim().toLowerCase(), me = w.size > 0 || le.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Ee of o) {
            const De = Ee["gufe-key"], Qe = w.has(De) || le.length > 0 && (Ue(Ee).toLowerCase().includes(le) || (Ee.smiles ?? "").toLowerCase().includes(le) || De.toLowerCase().includes(le));
            (!me || Qe) && pe.add(De);
          }
          const Ie = /* @__PURE__ */ new Set();
          a.forEach((Ee, De) => {
            (Ee.score ?? 0) < b.minScore || !pe.has(Ee.from["gufe-key"]) || !pe.has(Ee.to["gufe-key"]) || Ie.add(De);
          });
          const ve = me || b.minScore > 0;
          ne.setEmphasis(ve ? pe : null, ve ? Ie : null);
        }, C = () => ne.setMatches(d), E(), $(), C();
        const ue = oe ?? T;
        ue ? (ne.setTransform(ue.scale, ue.tx, ue.ty), oe = null) : ne.fit(), q = !0;
      };
      if (D !== "Force-directed" || N || Y) {
        Q();
        return;
      }
      Gf(o, a, J, K).then((ne) => {
        if (!(!S || B !== V)) {
          if (ne) {
            Q();
            return;
          }
          N = !0, z.picker.value = "Circular", it(P, "d3 could not be loaded - showing the circular layout instead"), ee("Circular");
        }
      }, Q);
    };
    return h = () => ee(), ee(), H(), {
      onResize: () => ee(),
      cleanup: () => {
        S = !1, y.cancel(), O.remove(), A?.();
      },
      viewState: () => ({
        nodes: o.map((x) => [rs(x.x), rs(x.y)]),
        ...W(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = M(
      "div",
      jr.bottom
    ), i = M("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${R.textMuted};`);
    i.appendChild(M("span", "", "score")), i.appendChild(
      M(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${R.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(M("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(M("label", `font-size:${Z.body};margin-left:auto;color:${R.textMuted};`, "Layout"));
    const s = Hn(
      ns.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(s), o.appendChild(Zr(n, "Reset pan and zoom")), { bar: o, picker: s };
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
    const r = M("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = (s) => r.replaceChildren(fe(s)), i = (s, a) => {
      const l = document.createElement(s);
      l.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", l.payload = a, r.replaceChildren(l);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => i("gufe-atom-mapping", ea(yf(s), n)),
      showLigand: (s) => i("gufe-small-molecule", $f(s)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, i, s, a, l) {
    const f = ce("svg", {
      class: "gufe-graph",
      width: o,
      height: i,
      style: "display:block;touch-action:none;"
    }), p = ce("g");
    f.appendChild(p), t.appendChild(f);
    const w = ce("defs"), b = jf(w);
    f.appendChild(w);
    const _ = [], $ = ce("g"), g = ce("g"), u = ce("g", { "pointer-events": "none" }), y = ce("g");
    p.append($, g, u, y);
    for (const O of r) {
      const G = If(O.score), Y = os + (O.score ?? 0.5) * (Cf - os), oe = ce("line", {
        stroke: R.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + At.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = ce("line", {
        stroke: G,
        "stroke-width": Y,
        "stroke-opacity": kf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(G)})`,
        "pointer-events": "none"
      }), W = ce("line", { stroke: "transparent", "stroke-width": Ef, style: "cursor:pointer;" });
      W.addEventListener("click", (D) => {
        D.stopPropagation(), s({ kind: "edge", index: O.index });
      }), W.addEventListener("mousemove", (D) => {
        l.show(
          `<div style="font-weight:700;color:${R.titleColor};">${Ke(Ue(O.from))} -&gt; ${Ke(Ue(O.to))}</div>` + (O.score == null ? `<div style="color:${R.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${O.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${R.textMuted2};">Click to see the mapping</div>`,
          D.offsetX,
          D.offsetY
        );
      }), W.addEventListener("mouseleave", () => l.hide()), _.push(oe), $.append(oe, X), g.appendChild(W);
      const q = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": xf.fontSize,
        "font-weight": 600,
        fill: R.netEdgeLabel
      });
      q.textContent = O.score == null ? "" : O.score.toFixed(2);
      const A = ce("g", { class: "gufe-edge-label" });
      A.appendChild(q), u.appendChild(A);
    }
    const d = [], C = [], m = [], c = [], h = [], v = [], k = [], P = n.map((O) => {
      const G = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      G.addEventListener("mousemove", (N) => {
        l.show(
          `<div style="font-weight:700;color:${R.titleColor};">${Ke(Ue(O))}</div>` + (O.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ke(O.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${R.textMuted2};overflow-wrap:anywhere;">${Ke(O["gufe-key"])}</div><div style="margin-top:4px;font-size:${Z.tiny};color:${R.textMuted2};">Click to see the ligand</div>`,
          N.offsetX,
          N.offsetY
        );
      }), G.addEventListener("mouseleave", () => l.hide());
      const Y = ce("circle", {
        class: "gufe-node-halo",
        r: Ae + At.padding,
        fill: "none",
        stroke: R.netHaloColor,
        "stroke-width": At.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      G.appendChild(Y), h.push(Y);
      const oe = ce("circle", {
        class: "gufe-node-disc",
        r: Ae,
        fill: R.netNodeFill,
        stroke: R.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      G.appendChild(oe), C.push(oe);
      const X = ce("circle", {
        class: "gufe-node-plate",
        r: Ae,
        fill: R.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      G.appendChild(X), m.push(X);
      const W = ce("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      G.appendChild(W), d.push(W);
      const q = ce("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Sf,
        "font-weight": 700,
        fill: R.netInitials,
        "pointer-events": "none"
      });
      q.textContent = Ue(O).slice(0, 2).toUpperCase(), G.appendChild(q), v.push(q);
      const A = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: _e.below,
        "font-size": _e.fontSize,
        "font-weight": 600,
        fill: R.netNodeCaption,
        "pointer-events": "none"
      });
      A.textContent = Df(Ue(O), _f), A.setAttribute("display", "none"), k.push(A);
      const D = ce("rect", {
        class: "gufe-node-caption-plate",
        rx: Nt.captionRadius,
        fill: R.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return c.push(D), G.appendChild(D), G.appendChild(A), y.appendChild(G), G;
    }), F = () => {
      r.forEach((O, G) => {
        for (const oe of [_[G], $.children[G * 2 + 1], g.children[G]]) {
          const X = oe;
          X.setAttribute("x1", String(O.from.x)), X.setAttribute("y1", String(O.from.y)), X.setAttribute("x2", String(O.to.x)), X.setAttribute("y2", String(O.to.y));
        }
        u.children[G].setAttribute(
          "transform",
          `translate(${(O.from.x + O.to.x) / 2},${(O.from.y + O.to.y) / 2 - 8})`
        );
      }), n.forEach((O, G) => P[G].setAttribute("transform", `translate(${O.x},${O.y})`));
    };
    F();
    let z = /* @__PURE__ */ new Map();
    const j = Bf({
      nodes: n,
      circles: C,
      plates: m,
      captionPlates: c,
      matched: () => z,
      captions: k,
      initials: v,
      depictionGroups: d,
      edgeLabels: u,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), L = this.#r(
      f,
      p,
      n,
      P,
      F,
      j.apply,
      (O) => s({ kind: "ligand", index: O })
    );
    return {
      setSelected(O) {
        const G = O?.kind === "edge" ? O.index : -1, Y = O?.kind === "ligand" ? O.index : -1;
        _.forEach((oe, X) => oe.setAttribute("opacity", X === G ? String(At.opacity) : "0")), h.forEach((oe, X) => oe.setAttribute("opacity", X === Y ? String(At.opacity) : "0"));
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
      setMatches(O) {
        z = O, j.forget();
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
      setEmphasis(O, G) {
        P.forEach((Y, oe) => {
          const X = !O || O.has(n[oe]["gufe-key"]);
          Y.setAttribute("opacity", X ? "1" : String(_r.node));
        }), r.forEach((Y, oe) => {
          const X = !G || G.has(oe), W = X ? "0.9" : String(_r.edge);
          $.children[oe * 2 + 1].setAttribute("stroke-opacity", W), u.children[oe].setAttribute("opacity", X ? "1" : String(_r.edge));
        });
      },
      focusOn(O) {
        const G = n[O];
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
  #r(t, n, r, o, i, s, a) {
    const l = Ys(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Js(r, Ae),
      margin: Tf,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((f, p) => {
      let w = null, b = !1;
      f.addEventListener("pointerdown", ($) => {
        $.stopPropagation();
        const { scale: g } = l.transform();
        w = { x: $.clientX - r[p].x * g, y: $.clientY - r[p].y * g }, b = !1, f.setPointerCapture($.pointerId);
      }), f.addEventListener("pointermove", ($) => {
        if (!w) return;
        if (l.gesturing()) {
          w = null, b = !0;
          return;
        }
        const { scale: g } = l.transform(), u = ($.clientX - w.x) / g, y = ($.clientY - w.y) / g;
        Math.hypot(u - r[p].x, y - r[p].y) * g > Rf && (b = !0), r[p].x = r[p].fx = u, r[p].y = r[p].fy = y, i();
      });
      const _ = () => {
        w = null;
      };
      f.addEventListener("pointerup", _), f.addEventListener("pointercancel", _), f.addEventListener("click", ($) => {
        $.stopPropagation(), b || a(p);
      });
    }), {
      ...l,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (f, p) => l.centreOn(f, p, Of)
    };
  }
}
function Hf(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (l, f) => {
    l.forEach((p, w) => {
      const b = 2 * Math.PI * w / Math.max(1, l.length) - Math.PI / 2;
      p.x = i + f * Math.cos(b), p.y = s + f * Math.sin(b), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((g) => [g["gufe-key"], []]));
    for (const g of o)
      l.get(g.from["gufe-key"]).push(g.to["gufe-key"]), l.get(g.to["gufe-key"]).push(g.from["gufe-key"]);
    const f = new Map(e.map((g) => [g["gufe-key"], g])), p = e.reduce(
      (g, u) => l.get(u["gufe-key"]).length > l.get(g["gufe-key"]).length ? u : g
    ), w = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let b = [p["gufe-key"]], _ = 0;
    const $ = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      a(
        b.map((u) => f.get(u)),
        _ === 0 ? 0 : _ * $ + 40
      );
      const g = [];
      for (const u of b)
        for (const y of l.get(u))
          w.has(y) || (w.add(y), g.push(y));
      b = g, _++;
    }
    a(e.filter((g) => !w.has(g["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Gf(e, t, n, r) {
  let o;
  try {
    if (o = await Is(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((l) => l["gufe-key"]).distance((l) => Ce.linkBaseDistance + (1 - (l.score ?? 0.5)) * Ce.linkScoreBonus).strength(Ce.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Ce.chargeStrength).distanceMin(Ce.chargeDistanceMin).distanceMax(Ce.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Ce.centerStrength)).force("collision", o.forceCollide(Ae + Ce.collisionPadding).iterations(Ce.collisionIterations)).force("x", o.forceX(n / 2).strength(Ce.drift)).force("y", o.forceY(r / 2).strength(Ce.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * Ce.tickMultiplier; l++) s.tick();
  return !0;
}
Me("gufe-ligand-network", Kf);
function Wf(e, t) {
  return { ...e, registry: eo(t, Object.values(e.components ?? {})) };
}
function Jf(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function Yf(e) {
  return e.type === "UnknownComponentViz" ? Gn(e.gufe_type) : null;
}
class Xf extends Ne {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = [], i = [];
    for (const [$, g] of Object.entries(n.components ?? {})) {
      const u = Xe(r, g);
      u ? o.push([$, u]) : i.push($);
    }
    const s = _t(n.name || "Chemical system");
    if (s.statsEl.appendChild(Re("components", String(o.length))), t.appendChild(s), !o.length)
      return t.appendChild(
        fe(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = M("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:column;");
    t.appendChild(a), i.length && it(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const l = M(
      "div",
      `flex:0 0 auto;min-width:0;overflow-x:auto;display:flex;flex-direction:row;gap:6px;padding:10px;background:${R.panelBg};border-bottom:1px solid ${R.splitBorder};`
    );
    a.appendChild(l);
    const f = M("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(f);
    const p = M("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(p);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", w.setAttribute(bs, ""), p.appendChild(w);
    const b = [], _ = ($) => {
      b.forEach((g, u) => {
        const y = u === $;
        g.style.background = y ? R.cardBgActive : R.cardBg, g.style.borderColor = y ? R.cardBorderActive : R.cardBorder;
      }), w.payload = o[$][1];
    };
    return o.forEach(([$, g], u) => {
      const y = M(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${R.cardBorder};border-radius:8px;background:${R.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;width:auto;`
      );
      y.appendChild(M("span", `font-weight:700;color:${R.textPrimary};`, $)), y.appendChild(M("span", `font-size:${Z.small};color:${R.textMuted};`, Jf(g)));
      const d = Yf(g);
      d && y.appendChild(d), y.onclick = () => _(u), b.push(y), l.appendChild(y);
    }), _(0), {
      onResize: () => w.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => w.remove()
    };
  }
}
Me("gufe-chemical-system", Xf);
const Zf = 460, Qf = 210, ep = "42%";
function tp(e, t) {
  const n = Se(t, e.stateA, "ChemicalSystemViz"), r = Se(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: eo(t, o) };
}
const no = {
  unchanged: R.diffUnchanged,
  changed: R.diffChanged,
  added: R.diffAdded,
  removed: R.diffRemoved
};
function np(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function rp(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function op(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Sr(e, t, n) {
  const r = M(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${te.md};padding:5px ${te.lg};border-radius:${ze.md};background:${R.cardBg};border:1px solid ${R.cardBorder};`
  );
  n && r.appendChild(
    M(
      "span",
      `flex:0 0 auto;font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;color:${R.textMuted2};`,
      n
    )
  );
  const o = op(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(M("span", `font-size:${Z.body};color:${R.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? R.cardBorder : no[t];
  const i = M(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:600;color:${R.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Gn(o.type)), r;
}
function ip(e, t, n, r) {
  const o = M("div", `display:flex;flex-direction:column;gap:${te.sm};min-width:0;`), i = M("div", `display:flex;align-items:center;gap:${te.md};min-width:0;`);
  i.appendChild(
    M("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${no[t]};`)
  );
  const s = M(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:${$e.bold};color:${R.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Sr(n, t, null)), o) : (o.appendChild(Sr(n, t, "A")), o.appendChild(Sr(r, t, "B")), o);
}
function sp(e, t) {
  const n = Xe(t, e.componentA), r = Xe(t, e.componentB);
  return `${n ? Ze(n) : "A"} to ${r ? Ze(r) : "B"}`;
}
class ap extends Ne {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = Se(r, n.stateA, "ChemicalSystemViz"), i = Se(r, n.stateB, "ChemicalSystemViz"), s = Se(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = _t(n.name || "Transformation");
    if (l.statsEl.appendChild(Re("protocol", s?.gufe_type || s?.name || "-")), l.statsEl.appendChild(Re("mappings", String(a.length))), t.appendChild(l), !o || !i)
      return t.appendChild(
        fe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = rp(o, i), p = M("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(p);
    const w = M(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${R.panelBg};`
    );
    p.appendChild(w);
    const b = M("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    p.appendChild(b);
    const _ = M("div", `display:flex;flex-direction:column;gap:${te.xs};`);
    for (const [m, c] of [
      ["State A", o],
      ["State B", i]
    ])
      _.appendChild(
        M(
          "div",
          `min-width:0;font-size:${Z.small};font-weight:${$e.bold};letter-spacing:.06em;text-transform:uppercase;color:${R.textMuted2};overflow-wrap:anywhere;`,
          `${m}${c.name ? ` - ${c.name}` : ""}`
        )
      );
    w.appendChild(_);
    const $ = /* @__PURE__ */ new Set();
    for (const m of f) {
      const c = o.components?.[m], h = i.components?.[m], v = np(c, h);
      $.add(v), w.appendChild(
        ip(
          m,
          v,
          Xe(r, c),
          Xe(r, h)
        )
      );
    }
    if ($.size > 1) {
      const m = M(
        "div",
        `display:flex;flex-wrap:wrap;gap:${te.lg} 12px;padding-top:${te.sm};font-size:${Z.small};color:${R.textMuted};`
      );
      for (const c of ["unchanged", "changed", "added", "removed"])
        $.has(c) && m.appendChild(Re(c, "", no[c]));
      w.appendChild(m);
    }
    const g = M("div", us, "Atom mapping");
    b.appendChild(g);
    let u = null;
    const y = Oa(t, (m) => {
      const c = m > 0 && m < Zf;
      c !== u && (u = c, p.style.flexDirection = c ? "column" : "row", w.style.flex = c ? "0 0 auto" : `0 0 ${Qf}px`, w.style.maxWidth = c ? "none" : ep, w.style.maxHeight = c ? "45%" : "none", w.style.borderRight = c ? "none" : `1px solid ${R.splitBorder}`, w.style.borderBottom = c ? `1px solid ${R.splitBorder}` : "none", g.style.display = c ? "block" : "none");
    });
    if (!a.length)
      return b.appendChild(
        fe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: y };
    const d = document.createElement("gufe-atom-mapping");
    d.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (m) => {
      d.payload = ea(a[m], r);
    };
    if (C(0), a.length > 1) {
      const m = M(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${R.toolbarBg};border-bottom:1px solid ${R.toolbarBorder};color:${R.textMuted};`
      );
      m.appendChild(
        Kn(
          a.map((c, h) => ({
            id: String(h),
            label: c.name || sp(c, r)
          })),
          "0",
          (c) => C(Number(c))
        )
      ), b.appendChild(m);
    }
    return b.appendChild(d), {
      onResize: () => d.resize?.(),
      cleanup: () => {
        y(), d.remove();
      }
    };
  }
}
Me("gufe-transformation", ap);
const ot = { width: 148, height: 46, radius: 10 }, gt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Rt = { initial: 0.56, min: 0.25, max: 0.78 }, cp = 24, ss = { x: ot.width / 2, y: ot.height / 2 }, as = { node: 0.12, edge: 0.06 }, lp = 1.4, Vn = Ze;
function dp(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function up(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Xe(t, r);
    if (!o) {
      n.add("missing");
      continue;
    }
    n.add(
      o.type === "UnknownComponentViz" ? o.gufe_type : o.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort().join(" + ");
}
function fp(e, t) {
  const n = { fill: R.cardBg, stroke: R.cardBorder }, r = e.map((s) => up(s, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > R.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const i = new Map(
    o.map((s, a) => [s, { fill: R.netGroupFill[a], stroke: R.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (s) => i.get(r[s]) ?? n,
    legend: o.map((s) => [s, i.get(s)])
  };
}
function pp(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Xe(t, o);
    if (!i) continue;
    n.push(Ze(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function hp(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((i) => {
    const s = [];
    for (const a of Object.values(i.components ?? {})) {
      const l = Se(t, a, "SmallMoleculeComponentViz");
      if (!l) continue;
      let f = r.get(a);
      f === void 0 && (f = n.length, r.set(a, f), n.push(l.sdf ?? "")), s.push(f);
    }
    return s;
  });
  return { sources: n, perNode: o };
}
function mp(e) {
  const t = Mt("alchemical-network.query"), n = Mt("alchemical-network.composition"), r = M("div", ls), o = M("input", `${Un}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const i = Qs({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: Mt("alchemical-network.smarts"),
    run: (b) => e.match(b),
    describe: (b) => {
      const _ = b.unreadable ? `, ${b.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${_}`;
    }
  });
  if (r.appendChild(i.element), e.compositions.length > 1) {
    const b = M("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${R.textMuted};`);
    b.appendChild(M("span", "flex-shrink:0;", "made of"));
    const _ = Hn(
      [{ id: "", label: "anything" }, ...e.compositions.map(($) => ({ id: $, label: $ }))],
      "",
      ($) => {
        e.filter.composition = $, w(), e.refresh();
      },
      n
    );
    _.style.cssText += "flex:1;min-width:0;", e.filter.composition = _.value, b.appendChild(_), r.appendChild(b);
  }
  const s = M("div", `font-size:${Z.small};color:${R.textMuted2};`);
  r.appendChild(s);
  const a = M("div", ds);
  r.appendChild(a), r.appendChild(M("div", `font-size:${Z.tiny};line-height:1.5;color:${R.textMuted2};`, to));
  const l = Gs({
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
  const f = M("button", `${wt}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), w(), e.refresh();
  }, r.appendChild(f);
  const p = (b) => {
    const _ = e.query.text.trim().toLowerCase();
    if (_ && !e.haystacks[b].includes(_) || e.filter.composition && e.signatures[b] !== e.filter.composition) return !1;
    const $ = e.matched();
    return !($ && !$.has(b));
  }, w = () => {
    l.clearNote(), a.replaceChildren();
    const b = e.nodes.map((_, $) => ({ node: _, index: $ })).filter(({ index: _ }) => p(_));
    s.textContent = `${b.length} of ${e.nodes.length} systems`;
    for (const { node: _, index: $ } of b) {
      const g = _["gufe-key"], u = e.selected.has(g), y = M(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? R.cardBorderActive : R.cardBorder};background:${u ? R.cardBgActive : R.cardBg};color:${R.textPrimary};`
      ), d = e.colorOf($);
      y.appendChild(
        M(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${d.fill};border:1px solid ${d.stroke};`
        )
      );
      const C = M("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Vn(_));
      C.title = `${Vn(_)}
${e.signatures[$]}`, y.appendChild(C), y.onclick = (m) => {
        m.shiftKey || m.metaKey || m.ctrlKey ? e.selected.has(g) ? e.selected.delete(g) : e.selected.add(g) : (e.selected.clear(), e.selected.add(g), e.focus($)), w(), e.refresh();
      }, a.appendChild(y);
    }
    b.length || a.appendChild(M("div", `font-size:${Z.small};padding:8px;color:${R.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), w(), e.refresh();
  }, w(), e.mounted(w), i.apply(), r;
}
function gp(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, i) => {
    const s = 2 * Math.PI * i / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(s), o.y = n / 2 + r * Math.sin(s);
  });
}
async function yp(e, t, n, r) {
  let o;
  try {
    if (o = await Is(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((l) => l["gufe-key"]).distance(gt.linkDistance).strength(gt.linkStrength)
  ).force("charge", o.forceManyBody().strength(gt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(gt.collisionRadius).iterations(gt.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * gt.tickMultiplier; l++) s.tick();
  return !0;
}
class $p extends Ne {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = [];
    let i = 0;
    for (const V of n.nodes ?? []) {
      const H = Se(r, V, "ChemicalSystemViz");
      if (!H) {
        i++;
        continue;
      }
      o.push({ ...H, x: 0, y: 0 });
    }
    const s = new Map(o.map((V) => [V["gufe-key"], V])), a = [];
    let l = 0;
    for (const V of n.edges ?? []) {
      const H = s.get(V.stateA), re = s.get(V.stateB);
      if (!H || !re) {
        l++;
        continue;
      }
      a.push({ ...V, index: a.length, from: H, to: re });
    }
    const f = (V) => {
      const H = Se(r, V.protocol, "ProtocolViz");
      return H?.gufe_type || H?.name || "";
    }, p = new Set(a.map(f).filter(Boolean)), w = _t(n.name || "Alchemical network");
    w.statsEl.appendChild(Re("systems", String(o.length))), w.statsEl.appendChild(Re("transformations", String(a.length))), p.size && w.statsEl.appendChild(Re("protocol", [...p].join(", "))), t.appendChild(w);
    const b = fp(o, r), _ = M("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(_);
    let $ = () => {
    };
    const g = /* @__PURE__ */ new Set(), u = { composition: "" }, y = { text: "" };
    let d = () => {
    }, C = () => {
    }, m = () => {
    };
    const c = o.map((V) => pp(V, r));
    let h = null;
    const v = () => h ??= Qn().catch((V) => (console.warn("[gufe-viz] RDKit failed to load:", he(V)), null)), k = hp(o, r), P = Zs(v, k.sources);
    let F = null, z = () => {
    };
    const j = async (V) => {
      const H = await P.run(V);
      return H.status === "superseded" || (F = H.status === "ok" ? new Set(o.flatMap((re, ee) => k.perNode[ee].some((x) => H.matched.has(x)) ? [ee] : [])) : null, z(), d()), H;
    }, L = ks(
      w,
      () => mp({
        nodes: o,
        edges: a,
        haystacks: c,
        signatures: b.signatures,
        colorOf: b.colorOf,
        compositions: b.compositions,
        selected: g,
        filter: u,
        query: y,
        refresh: () => d(),
        matched: () => F,
        match: (V) => j(V),
        mounted: (V) => {
          z = V;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (V) => {
          C(V), m(V);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => $(),
        remember: $t("alchemical-network.menuOpen", !1)
      }
    );
    L.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", _.appendChild(L.panel);
    const O = M("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${R.netCanvasBg};`), G = M("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${R.appBg};`), Y = M("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${R.netCanvasBg};`);
    O.appendChild(Y), _.appendChild(O), _.appendChild(
      _s(_, O, G, {
        min: Rt.min,
        max: Rt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: zr("alchemical-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => $(),
        onOrient: (V) => Ss(L.panel, V)
      })
    ), _.appendChild(G);
    const oe = this.#e(G, r);
    if (!o.length)
      return Y.appendChild(
        fe(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), oe.message("Nothing to show."), { cleanup: () => oe.cleanup() };
    i && it(
      Y,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && it(
      Y,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, W = !1, q = null, A = () => {
    }, D = () => {
    }, N = () => {
    }, S = 0;
    O.appendChild(this.#n(b.legend, () => D()));
    const E = (V, H) => {
      q = { kind: V, index: H }, oe.show(V === "node" ? o[H] : a[H], V), A();
    };
    m = (V) => E("node", V);
    const I = () => {
      const V = ++S, H = Y.clientWidth || 800, re = Y.clientHeight || 600;
      gp(o, H, re);
      const ee = () => {
        if (!X || V !== S) return;
        N(), Y.querySelectorAll("svg").forEach((T) => T.remove());
        const x = this.#t(Y, o, a, H, re, b.colorOf, E);
        N = x.cleanup, D = x.reset, C = (T) => x.focusOn(T), A = () => x.setSelected(q), A(), d = () => {
          const T = y.text.trim().toLowerCase();
          if (!(g.size > 0 || T.length > 0 || u.composition !== "" || F !== null)) {
            x.setEmphasis(null, null);
            return;
          }
          const J = T.length > 0 || u.composition !== "" || F !== null, K = /* @__PURE__ */ new Set();
          o.forEach((ne, ue) => {
            const le = J && (!T || c[ue].includes(T)) && (!u.composition || b.signatures[ue] === u.composition) && (!F || F.has(ue));
            (g.has(ne["gufe-key"]) || le) && K.add(ne["gufe-key"]);
          });
          const Q = /* @__PURE__ */ new Set();
          a.forEach((ne, ue) => {
            K.has(ne.from["gufe-key"]) && K.has(ne.to["gufe-key"]) && Q.add(ue);
          }), x.setEmphasis(K, Q);
        }, d();
      };
      if (W) {
        ee();
        return;
      }
      yp(o, a, H, re).then((x) => {
        !X || V !== S || (x || (W = !0, it(Y, "d3 could not be loaded - showing the circular layout instead")), ee());
      }, ee);
    };
    return $ = I, I(), E("node", 0), {
      onResize: () => I(),
      cleanup: () => {
        X = !1, N(), oe.cleanup();
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
    const r = M("div", jr.bottom);
    if (r.appendChild(Zr(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(M("span", `font-size:${Z.small};color:${R.textMuted};`, "systems made of"));
    for (const [o, i] of t) {
      const s = M("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        M(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${i.fill};border:2px solid ${i.stroke};`
        )
      ), s.appendChild(
        M("span", `font-size:${Z.small};color:${R.textPrimary};overflow-wrap:anywhere;`, o)
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
    t.appendChild(M("div", us, "Selected"));
    const r = M("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const i = (a) => r.replaceChildren(fe(a));
    return { show: (a, l) => {
      let f;
      if (l === "node")
        f = Wf(Xs(a), n);
      else {
        const { index: p, from: w, to: b, ..._ } = a;
        f = tp(_, n);
      }
      if (!f) {
        i("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = f, o.parentNode !== r && r.replaceChildren(o);
    }, message: i, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, i, s, a) {
    const l = ce("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const f = ce("g");
    l.appendChild(f);
    const p = ce("g"), w = ce("g");
    f.append(p, w);
    const b = Ys(l, f, {
      bounds: () => Js(n, ss.x, ss.y),
      margin: cp,
      hint: "Click the graph or hold Ctrl to zoom"
    }), _ = (d, C) => {
      b.wasPan() || a(d, C);
    }, $ = [];
    r.forEach((d, C) => {
      const m = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: R.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Wi(m, d.name || "transformation"), m.addEventListener("click", () => _("edge", C)), p.appendChild(m), $.push(m);
      const c = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      c.addEventListener("click", () => _("edge", C)), p.appendChild(c);
    });
    const g = [], u = [], y = [];
    return n.forEach((d, C) => {
      const m = s(C), c = ce("g", { style: "cursor:pointer;" });
      y.push(c);
      const h = ce("rect", {
        x: d.x - ot.width / 2,
        y: d.y - ot.height / 2,
        width: ot.width,
        height: ot.height,
        rx: ot.radius,
        fill: m.fill,
        stroke: m.stroke,
        "stroke-width": 2
      });
      c.appendChild(h), g.push(h), u.push(m.stroke);
      const v = ce("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: R.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      v.textContent = dp(Vn(d), 20), c.appendChild(v);
      const k = Object.keys(d.components ?? {}).length, P = ce("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: R.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      P.textContent = `${k} component${k === 1 ? "" : "s"}`, c.appendChild(P), Wi(c, Vn(d)), c.addEventListener("click", () => _("node", C)), w.appendChild(c);
    }), b.fit(), {
      setSelected(d) {
        g.forEach((C, m) => {
          const c = d?.kind === "node" && d.index === m;
          C.setAttribute("stroke", c ? R.cardBorderActive : u[m]), C.setAttribute("stroke-width", c ? "3" : "2");
        }), $.forEach((C, m) => {
          const c = d?.kind === "edge" && d.index === m;
          C.setAttribute("stroke", c ? R.netHaloColor : R.netEdgeLine), C.setAttribute("stroke-width", c ? "4" : "2");
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
        y.forEach((m, c) => {
          const h = !d || d.has(n[c]["gufe-key"]);
          m.setAttribute("opacity", h ? "1" : String(as.node));
        }), $.forEach((m, c) => {
          const h = !C || C.has(c);
          m.setAttribute("opacity", h ? "1" : String(as.edge));
        });
      },
      focusOn(d) {
        const C = n[d];
        C && b.centreOn(C.x, C.y, lp);
      },
      reset: b.reset,
      cleanup: b.cleanup
    };
  }
}
Me("gufe-alchemical-network", $p);
class vp extends Ne {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = _t(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Gn(n.gufe_type)), t.appendChild(r);
    const o = M(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = Ir();
    return i.style.maxWidth = "460px", i.appendChild(Dn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Dn("Name", n.name)), i.appendChild(
      M(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${R.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Me("gufe-protocol", vp);
function bp(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Cr(e, t = !1) {
  const n = M(
    "div",
    `display:flex;flex-direction:column;gap:${te.xl};padding:${te.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${R.splitBorder};`)
  );
  return n.appendChild(M("div", Er, e)), n;
}
function zn(e) {
  return M(
    "div",
    `font-size:${Z.tiny};font-weight:${$e.bold};letter-spacing:.08em;text-transform:uppercase;color:${R.textMuted2};`,
    e
  );
}
function cs(e, t) {
  const n = M("div", `display:flex;flex-direction:column;align-items:center;gap:${te.sm};`);
  return n.appendChild(
    M(
      "span",
      `${Pe.plain}${Pe.outline}font-family:${Z.mono};font-size:${Z.body};`,
      e
    )
  ), n.appendChild(zn(t)), n;
}
class wp extends Ne {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = M(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Ir();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = Cr("Solvent", !0), s = M("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = M("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), l = M(
      "div",
      `font-family:${Z.mono};font-size:${Z.display};font-weight:${$e.bold};line-height:1.1;color:${R.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(l), a.appendChild(zn("SMILES")), s.appendChild(a);
    const f = n.name || "";
    if (f && f !== n.smiles) {
      const d = M("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      d.appendChild(
        M(
          "div",
          `font-size:${Z.body};color:${R.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          f
        )
      ), d.appendChild(zn("Name")), s.appendChild(d);
    }
    i.appendChild(s), o.appendChild(i);
    const p = Cr("Ions"), w = M("div", `display:flex;align-items:flex-end;gap:${te.xxl};flex-wrap:wrap;`);
    n.positive_ion && w.appendChild(cs(n.positive_ion, "cation")), n.negative_ion && w.appendChild(cs(n.negative_ion, "anion"));
    const { value: b, unit: _ } = bp(n.ion_concentration), $ = M("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), g = M("div", `display:flex;align-items:baseline;gap:${te.md};justify-content:flex-end;`);
    g.appendChild(
      M(
        "div",
        `font-size:${Z.display};font-weight:${$e.bold};line-height:1;color:${R.titleColor};`,
        b
      )
    ), _ && (g.appendChild(document.createTextNode(" ")), g.appendChild(M("div", `font-size:${Z.body};color:${R.textMuted};`, _))), $.appendChild(g), $.appendChild(zn("Ion concentration")), w.appendChild($), p.appendChild(w), o.appendChild(p);
    const u = Cr("Net charge"), y = n.neutralize;
    return u.appendChild(
      M(
        "span",
        `${Pe.plain}align-self:flex-start;font-weight:${$e.bold};` + (y ? `background:${R.okBg};color:${R.okFg};` : `${Pe.outline}color:${R.textMuted};`),
        y ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      M(
        "div",
        xr,
        y ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
Me("gufe-solvent", wp);
class _p extends Ne {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = _t(n.name || "Unnamed component");
    r.statsEl.appendChild(Gn(n.gufe_type)), t.appendChild(r);
    const o = M("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = Ir();
    return i.style.maxWidth = "460px", i.appendChild(
      M(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${R.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      M(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${R.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(Dn("Name", n.name || "(unnamed)")), i.appendChild(Dn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Me("gufe-unknown-component", _p);
function Pp(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: ms, reset: wa });
export {
  ja as CHROME_OPEN_BY_DEFAULT,
  la as DEBUG_ATTRIBUTE,
  da as DEBUG_GLOBAL,
  ru as DEFAULT_DEPICT_STYLE,
  Ed as DEFAULT_ZOOM_BOUNDS,
  Fe as DEPICT_STYLE,
  lu as DEPICT_STYLE_RANGES,
  $p as GufeAlchemicalNetwork,
  hf as GufeAtomMapping,
  Xf as GufeChemicalSystem,
  Ne as GufeElement,
  Kf as GufeLigandNetwork,
  Tu as GufeProtein,
  vp as GufeProtocol,
  xu as GufeSmallMolecule,
  wp as GufeSolvent,
  ap as GufeTransformation,
  _p as GufeUnknownComponent,
  bd as GufeView,
  bs as HIDE_NAME_ATTRIBUTE,
  hr as MAPPING_COLORS,
  Rd as MAPPING_RAMP_3D,
  xp as MAPPING_RAMP_NAME,
  to as MULTI_SELECT_HINT,
  Sp as PAYLOAD_TYPES,
  Cp as SCHEMA_TYPES,
  Gr as VIEW_TAGS,
  Yu as align2D,
  Qu as alignedToPartner,
  Ju as applyRT,
  Xu as applyTurn,
  Pd as boundedZoom,
  Ft as buildRegistry,
  bt as choice,
  ks as chromeMenu,
  Sd as claimGestures,
  ps as debugEnabled,
  Me as defineElement,
  js as describeProblem,
  np as diffStatus,
  Ep as dispatchProblem,
  eo as entriesFor,
  Ze as entryLabel,
  Gs as exportBlock,
  Js as extentOf,
  $t as flag,
  $d as formatIssues,
  Ds as guardWheel,
  df as inFrameOf,
  Wu as kabsch,
  Zi as laidOut,
  ef as layoutPair,
  uf as liftFor,
  ha as logPayload,
  Xe as lookup,
  Se as lookupOfType,
  ea as mappingPayloadFor,
  Di as markGroups,
  mr as markedBonds,
  Pp as mount,
  ws as nameWanted,
  uu as normaliseDepictStyle,
  zr as num,
  Oa as onWidth,
  ff as openfeShift,
  Ss as orientMenuPanel,
  pf as pairColour,
  zi as parseAtomSpec,
  pa as payloadJson,
  Zr as resetControl,
  wa as resetSettings,
  Ys as sceneCamera,
  Ou as selectionText,
  Bn as setting,
  ms as settings,
  _s as splitter,
  Wf as systemPayloadFor,
  Mt as textSetting,
  tp as transformationPayloadFor,
  es as uniqueAtoms,
  pu as uniqueBonds,
  kp as validateAs,
  yd as validatePayload,
  Xr as viewerInteraction,
  qs as wheelFactor,
  Zu as withCoords
};
