const po = {
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
function ua() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const M = ua() ? po.dark : po.light, Z = {
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
}, ee = {
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
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, at = {
  card: M.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: M.canvas2DBg
}, $e = {
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${ee.sm} 9px;font-size:${Z.small};font-weight:${me.bold};border-radius:${Te.sm};cursor:pointer;font-family:inherit;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, fa = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${Te.md};padding:${ee.sm} ${ee.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, pa = `display:flex;align-items:center;gap:12px;padding:9px ${ee.xxl};flex-shrink:0;background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Ln = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, qr = `display:flex;flex-direction:column;gap:${ee.lg};flex:1;min-width:var(${Xe.min},${Ln.min});max-width:var(${Xe.max},${Ln.max});box-sizing:border-box;padding:${ee.xl};min-height:0;overflow-y:auto;background:${M.panelBg};border:0 solid ${M.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, ha = "45%", ys = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", $s = {
  bottom: `display:flex;align-items:center;gap:${ee.xl};flex-wrap:wrap;padding:${ee.lg} ${ee.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, vs = `flex-shrink:0;padding:${ee.sm} ${ee.xl};font-size:${Z.heading};font-weight:${me.bold};color:${M.labelFg};background:${M.labelBg};`, Pr = `position:absolute;top:${ee.md};left:${ee.md};z-index:10;pointer-events:none;max-width:calc(100% - ${ee.xxl} - ${ee.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${ee.xs} ${ee.lg};border-radius:${Te.md};font-size:${Z.heading};font-weight:${me.bold};color:${M.labelFg};background:${M.labelBg};`, bs = `padding:${ee.xs} ${ee.lg};border-radius:${Te.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${M.labelFg};background:${M.labelBg};`, ma = `position:absolute;top:${ee.lg};left:${ee.lg};z-index:15;display:flex;align-items:center;gap:${ee.md};min-width:0;max-width:calc(100% - ${ee.xxl} - ${ee.xxl});`, ga = `position:absolute;top:${ee.lg};right:${ee.lg};z-index:15;pointer-events:none;max-width:60%;` + bs + `font-size:${Z.small};`, ya = "42px", $a = `display:flex;flex-direction:column;gap:${ee.xs};padding:${ee.xxl} 18px;border-radius:${Te.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, ws = `position:absolute;bottom:${ee.xl};right:${ee.xl};display:flex;gap:${ee.sm};padding:${ee.sm};border-radius:${Te.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, va = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${M.textMuted};`, Ar = `font-size:${Z.small};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, Re = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${ee.xs} ${ee.sm};font-size:${Z.small};`,
  plain: `display:inline-flex;align-items:center;padding:${ee.xs} ${ee.md};border:1px solid transparent;border-radius:${Te.pill};font-family:inherit;font-size:${Z.small};color:${M.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${M.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${M.btnBg};border-color:${M.btnBorder};color:${M.textPrimary};`,
  active: `cursor:pointer;background:${M.cardBgActive};border-color:${M.btnBorder};color:${M.textPrimary};`
}, Rr = `font-size:${Z.small};line-height:1.6;color:${M.textMuted2};`, ba = ["debug", "gufe-debug"], wa = "debug", _a = "GUFE_VIZ_DEBUG";
function Sa() {
  return !!globalThis[_a];
}
function Ca() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return ba.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function _s(e) {
  return e?.hasAttribute?.(wa) ? !0 : Sa() || Ca();
}
function ka(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function Ea(e, t, n) {
  if (!_s(n)) return;
  const r = ka(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ss = "GUFE_VIZ_VIEW_STATE";
function xa(e) {
  const t = globalThis[Ss];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Pa = 150, ho = "data-gufe-shell";
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${ho}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Pa);
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
    return this.#s(), this.#t = T(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
    ), this.#t.setAttribute(ho, ""), this.appendChild(this.#t), this.#t;
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
function xe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const ke = "gufe-viz:", Qe = /* @__PURE__ */ new Map();
let jt = null;
function Aa() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Ft() {
  if (jt === !1) return null;
  const e = Aa();
  if (!e)
    return jt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), jt = !0, e;
  } catch {
    return jt = !1, null;
  }
}
function Ra(e) {
  const t = Ft();
  if (!t) return Qe.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function Na(e, t) {
  const n = Ft();
  if (!n) {
    Qe.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    Qe.set(ke + e, t);
  }
}
function Hn(e, t, n) {
  return {
    key: e,
    get() {
      const r = Ra(e);
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
        Na(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function lt(e, t, n) {
  return Hn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function st(e, t) {
  return Hn(e, t, (n) => typeof n == "boolean");
}
function Vr(e, t, n = -1 / 0, r = 1 / 0) {
  return Hn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function bt(e, t = "") {
  return Hn(e, t, (n) => typeof n == "string");
}
function Cs() {
  const e = {}, t = Ft(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Qe.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Qe.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(o);
      } catch {
        e[r.slice(ke.length)] = o;
      }
  }
  return e;
}
function Ma() {
  const e = {}, t = Ft(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Qe.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Qe.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function Ta() {
  const e = Ft();
  if (e)
    for (const t of Object.keys(Cs()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  Qe.clear();
}
const ks = "https://framejs.app", Es = 1e4;
function Oa(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Fa = "/gufe-dev-bundle.js";
function za() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Es ? e : null;
}
async function ja() {
  const e = za();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Fa);
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
function Ia() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Da(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(Hr)};`,
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
function La(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Da(n),
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
function qa(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(Ma()))
    o.endsWith(Hr) || (r[o] = i);
  return { settings: r, views: t };
}
const Va = (e) => `${ks}/j/${e}`, Ba = (e) => `${ks}/j/${e}.json`;
async function Ua(e, t, n) {
  await fetch(Ba(e), {
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
function Ha(e) {
  if (!_s()) return;
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${ee.md};padding-top:${ee.lg};border-top:1px dashed ${M.splitBorder};`
  );
  t.appendChild(
    T(
      "div",
      `font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
      "debug"
    )
  );
  const n = T("button", `${$e.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? M.errorFg : M.textMuted2;
  }, i = (s, a) => {
    const c = T("a", `color:${M.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(T("div", `padding-top:${ee.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const s = Oa(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = qa(s), d = window.open("", "_blank"), f = Ia(), _ = a, g = String(_.name || _.type || "gufe-viz"), w = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), ja().then((b) => {
      if (!b) {
        d?.close(), w(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Ua(f, La(b.js, a, c), g).then(() => {
        w();
        const $ = Va(f);
        d && (d.location.href = $), i($, b.note);
      });
    }).catch((b) => {
      w(), d?.close(), o(`Upload failed: ${b instanceof Error ? b.message : String(b)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function T(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ge(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const kt = (e) => e.toLocaleString("en-US"), it = "-", _t = $e.base, Kn = fa;
function zt(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = T("div", "display:flex;gap:4px;"), i = e.map((s) => {
    const a = T("button", _t, s.label);
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
function Gn(e, t, n, r) {
  const o = T("select", Kn);
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
function xs(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = T("button", _t, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? $e.bgActive : $e.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
function Me(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = T("span");
  return o.innerHTML = `${Ge(e)} <b style="color:${Ie.primary};">${Ge(t)}</b>`, r.appendChild(o), r;
}
function ct(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ee.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ee.md} ${ee.xxl};border-radius:${Te.md};font-size:${Z.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function fe(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? Ie.error : Ie.faint};`,
    e
  );
}
function St(e) {
  const t = T("div", pa);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${me.bold};font-size:${Z.title};color:${Ie.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${Ie.muted};`
  ), t.textEl = T("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = T("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function qn(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${Ie.faint};`,
      e
    )
  );
  const o = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Ie.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Wn(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${Te.xl};font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Br() {
  return T("div", $a);
}
function Ps() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Nr = "data-gufe-hide-name";
function Ur(e) {
  return !e.closest(`[${Nr}]`);
}
function Ka(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const mo = { min: 0.2, max: 0.8 }, Ga = 5;
function As(e, t, n, r = {}) {
  const o = r.min ?? mo.min, i = r.max ?? mo.max, s = T(
    "div",
    `flex:0 0 ${Ga}px;align-self:stretch;touch-action:none;background:${M.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (b) => {
    a = b, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const b = e.getBoundingClientRect();
    return b.height > b.width;
  };
  let f = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const _ = () => {
    t.style.flex = `1 1 ${(f * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - f) * 100).toFixed(2)}%`;
  };
  _(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const $ = d();
    $ !== a && (c($), r.onResize?.(f));
  }).observe(e);
  let g = !1;
  s.addEventListener("pointerdown", (b) => {
    g = !0, s.setPointerCapture(b.pointerId), b.preventDefault();
  }), s.addEventListener("pointermove", (b) => {
    if (!g) return;
    const $ = e.getBoundingClientRect(), u = a ? $.height : $.width;
    if (u <= 0) return;
    const y = a ? b.clientY - $.top : b.clientX - $.left;
    f = Math.min(i, Math.max(o, y / u)), _();
  });
  const w = (b) => {
    g && (g = !1, s.releasePointerCapture(b.pointerId), r.remember?.set(f), r.onResize?.(f));
  };
  return s.addEventListener("pointerup", w), s.addEventListener("pointercancel", w), s;
}
function Rs(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : Ln.min), e.style.setProperty(Xe.max, t ? "none" : Ln.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? ha : "";
}
const Wa = !1, Hr = ".menuOpen";
function Ja() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Ya = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Ja
}, Xa = Ya.openFreeEnergy;
function Kr(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Wa, o = !1;
  const i = T("div", "flex-shrink:0;"), s = T("button", `${$e.base}display:inline-flex;align-items:center;gap:${ee.md};padding:${ee.sm} ${ee.lg};`);
  s.appendChild(Xa()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), Ha(i)), i.style.display = r ? "" : "none", s.style.background = r ? $e.bgActive : $e.bg, s.setAttribute("aria-expanded", String(r));
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
function Za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var It = { exports: {} }, ir = {}, qe = {}, nt = {}, sr = {}, ar = {}, cr = {}, go;
function Vn() {
  return go || (go = 1, (function(e) {
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
        return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((C, v) => `${C}${v}`, "");
      }
      get names() {
        var p;
        return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((C, v) => (v instanceof n && (C[v.str] = (C[v.str] || 0) + 1), C), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(y, ...p) {
      const C = [y[0]];
      let v = 0;
      for (; v < p.length; )
        a(C, p[v]), C.push(y[++v]);
      return new r(C);
    }
    e._ = o;
    const i = new r("+");
    function s(y, ...p) {
      const C = [w(y[0])];
      let v = 0;
      for (; v < p.length; )
        C.push(i), a(C, p[v]), C.push(i, w(y[++v]));
      return c(C), new r(C);
    }
    e.str = s;
    function a(y, p) {
      p instanceof r ? y.push(...p._items) : p instanceof n ? y.push(p) : y.push(_(p));
    }
    e.addCodeArg = a;
    function c(y) {
      let p = 1;
      for (; p < y.length - 1; ) {
        if (y[p] === i) {
          const C = d(y[p - 1], y[p + 1]);
          if (C !== void 0) {
            y.splice(p - 1, 3, C);
            continue;
          }
          y[p++] = "+";
        }
        p++;
      }
    }
    function d(y, p) {
      if (p === '""')
        return y;
      if (y === '""')
        return p;
      if (typeof y == "string")
        return p instanceof n || y[y.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${y.slice(0, -1)}${p}"` : p[0] === '"' ? y.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !(y instanceof n))
        return `"${y}${p.slice(1)}`;
    }
    function f(y, p) {
      return p.emptyStr() ? y : y.emptyStr() ? p : s`${y}${p}`;
    }
    e.strConcat = f;
    function _(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : w(Array.isArray(y) ? y.join(",") : y);
    }
    function g(y) {
      return new r(w(y));
    }
    e.stringify = g;
    function w(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function b(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new r(`.${y}`) : o`[${y}]`;
    }
    e.getProperty = b;
    function $(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new r(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = $;
    function u(y) {
      return new r(y.toString());
    }
    e.regexpCode = u;
  })(cr)), cr;
}
var lr = {}, yo;
function $o() {
  return yo || (yo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Vn();
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
        var f, _;
        if (!((_ = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || _ === void 0) && _.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(d, f) {
        super(f), this.prefix = d;
      }
      setValue(d, { property: f, itemIndex: _ }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(f)}[${_}]`;
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
        var _;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const g = this.toName(d), { prefix: w } = g, b = (_ = f.key) !== null && _ !== void 0 ? _ : f.ref;
        let $ = this._values[w];
        if ($) {
          const p = $.get(b);
          if (p)
            return p;
        } else
          $ = this._values[w] = /* @__PURE__ */ new Map();
        $.set(b, g);
        const u = this._scope[w] || (this._scope[w] = []), y = u.length;
        return u[y] = f.ref, g.setValue(f, { property: w, itemIndex: y }), g;
      }
      getValue(d, f) {
        const _ = this._values[d];
        if (_)
          return _.get(f);
      }
      scopeRefs(d, f = this._values) {
        return this._reduceValues(f, (_) => {
          if (_.scopePath === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return (0, t._)`${d}${_.scopePath}`;
        });
      }
      scopeCode(d = this._values, f, _) {
        return this._reduceValues(d, (g) => {
          if (g.value === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return g.value.code;
        }, f, _);
      }
      _reduceValues(d, f, _ = {}, g) {
        let w = t.nil;
        for (const b in d) {
          const $ = d[b];
          if (!$)
            continue;
          const u = _[b] = _[b] || /* @__PURE__ */ new Map();
          $.forEach((y) => {
            if (u.has(y))
              return;
            u.set(y, r.Started);
            let p = f(y);
            if (p) {
              const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${C} ${y} = ${p};${this.opts._n}`;
            } else if (p = g?.(y))
              w = (0, t._)`${w}${p}${this.opts._n}`;
            else
              throw new n(y);
            u.set(y, r.Completed);
          });
        }
        return w;
      }
    }
    e.ValueScope = a;
  })(lr)), lr;
}
var vo;
function ie() {
  return vo || (vo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Vn(), n = /* @__PURE__ */ $o();
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
    var o = /* @__PURE__ */ $o();
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
      optimizeNames(S, x) {
        return this;
      }
    }
    class s extends i {
      constructor(S, x, I) {
        super(), this.varKind = S, this.name = x, this.rhs = I;
      }
      render({ es5: S, _n: x }) {
        const I = S ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${V};` + x;
      }
      optimizeNames(S, x) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = F(this.rhs, S, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(S, x, I) {
        super(), this.lhs = S, this.rhs = x, this.sideEffects = I;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, x) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = F(this.rhs, S, x), this;
      }
      get names() {
        const S = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return L(S, this.rhs);
      }
    }
    class c extends a {
      constructor(S, x, I, V) {
        super(S, I, V), this.op = x;
      }
      render({ _n: S }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + S;
      }
    }
    class d extends i {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `${this.label}:` + S;
      }
    }
    class f extends i {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `break${this.label ? ` ${this.label}` : ""};` + S;
      }
    }
    class _ extends i {
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
    class g extends i {
      constructor(S) {
        super(), this.code = S;
      }
      render({ _n: S }) {
        return `${this.code};` + S;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(S, x) {
        return this.code = F(this.code, S, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class w extends i {
      constructor(S = []) {
        super(), this.nodes = S;
      }
      render(S) {
        return this.nodes.reduce((x, I) => x + I.render(S), "");
      }
      optimizeNodes() {
        const { nodes: S } = this;
        let x = S.length;
        for (; x--; ) {
          const I = S[x].optimizeNodes();
          Array.isArray(I) ? S.splice(x, 1, ...I) : I ? S[x] = I : S.splice(x, 1);
        }
        return S.length > 0 ? this : void 0;
      }
      optimizeNames(S, x) {
        const { nodes: I } = this;
        let V = I.length;
        for (; V--; ) {
          const G = I[V];
          G.optimizeNames(S, x) || (K(S, G.names), I.splice(V, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, x) => j(S, x.names), {});
      }
    }
    class b extends w {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class $ extends w {
    }
    class u extends b {
    }
    u.kind = "else";
    class y extends b {
      constructor(S, x) {
        super(x), this.condition = S;
      }
      render(S) {
        let x = `if(${this.condition})` + super.render(S);
        return this.else && (x += "else " + this.else.render(S)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const S = this.condition;
        if (S === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const I = x.optimizeNodes();
          x = this.else = Array.isArray(I) ? new u(I) : I;
        }
        if (x)
          return S === !1 ? x instanceof y ? x : x.nodes : this.nodes.length ? this : new y(Y(S), x instanceof y ? [x] : x.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, x) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(S, x), !!(super.optimizeNames(S, x) || this.else))
          return this.condition = F(this.condition, S, x), this;
      }
      get names() {
        const S = super.names;
        return L(S, this.condition), this.else && j(S, this.else.names), S;
      }
    }
    y.kind = "if";
    class p extends b {
    }
    p.kind = "for";
    class C extends p {
      constructor(S) {
        super(), this.iteration = S;
      }
      render(S) {
        return `for(${this.iteration})` + super.render(S);
      }
      optimizeNames(S, x) {
        if (super.optimizeNames(S, x))
          return this.iteration = F(this.iteration, S, x), this;
      }
      get names() {
        return j(super.names, this.iteration.names);
      }
    }
    class v extends p {
      constructor(S, x, I, V) {
        super(), this.varKind = S, this.name = x, this.from = I, this.to = V;
      }
      render(S) {
        const x = S.es5 ? n.varKinds.var : this.varKind, { name: I, from: V, to: G } = this;
        return `for(${x} ${I}=${V}; ${I}<${G}; ${I}++)` + super.render(S);
      }
      get names() {
        const S = L(super.names, this.from);
        return L(S, this.to);
      }
    }
    class l extends p {
      constructor(S, x, I, V) {
        super(), this.loop = S, this.varKind = x, this.name = I, this.iterable = V;
      }
      render(S) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(S);
      }
      optimizeNames(S, x) {
        if (super.optimizeNames(S, x))
          return this.iterable = F(this.iterable, S, x), this;
      }
      get names() {
        return j(super.names, this.iterable.names);
      }
    }
    class h extends b {
      constructor(S, x, I) {
        super(), this.name = S, this.args = x, this.async = I;
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
    class k extends b {
      render(S) {
        let x = "try" + super.render(S);
        return this.catch && (x += this.catch.render(S)), this.finally && (x += this.finally.render(S)), x;
      }
      optimizeNodes() {
        var S, x;
        return super.optimizeNodes(), (S = this.catch) === null || S === void 0 || S.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(S, x) {
        var I, V;
        return super.optimizeNames(S, x), (I = this.catch) === null || I === void 0 || I.optimizeNames(S, x), (V = this.finally) === null || V === void 0 || V.optimizeNames(S, x), this;
      }
      get names() {
        const S = super.names;
        return this.catch && j(S, this.catch.names), this.finally && j(S, this.finally.names), S;
      }
    }
    class E extends b {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    E.kind = "catch";
    class A extends b {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    A.kind = "finally";
    class N {
      constructor(S, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
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
      scopeValue(S, x) {
        const I = this._extScope.value(S, x);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(S, x) {
        return this._extScope.getValue(S, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(S) {
        return this._extScope.scopeRefs(S, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(S, x, I, V) {
        const G = this._scope.toName(x);
        return I !== void 0 && V && (this._constants[G.str] = I), this._leafNode(new s(S, G, I)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(S, x, I) {
        return this._def(n.varKinds.const, S, x, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(S, x, I) {
        return this._def(n.varKinds.let, S, x, I);
      }
      // `var` declaration with optional assignment
      var(S, x, I) {
        return this._def(n.varKinds.var, S, x, I);
      }
      // assignment code
      assign(S, x, I) {
        return this._leafNode(new a(S, x, I));
      }
      // `+=` code
      add(S, x) {
        return this._leafNode(new c(S, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(S) {
        return typeof S == "function" ? S() : S !== t.nil && this._leafNode(new g(S)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...S) {
        const x = ["{"];
        for (const [I, V] of S)
          x.length > 1 && x.push(","), x.push(I), (I !== V || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, V));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(S, x, I) {
        if (this._blockNode(new y(S)), x && I)
          this.code(x).else().code(I).endIf();
        else if (x)
          this.code(x).endIf();
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
      _for(S, x) {
        return this._blockNode(S), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, x) {
        return this._for(new C(S), x);
      }
      // `for` statement for a range of values
      forRange(S, x, I, V, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const re = this._scope.toName(S);
        return this._for(new v(G, re, x, I), () => V(re));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, x, I, V = n.varKinds.const) {
        const G = this._scope.toName(S);
        if (this.opts.es5) {
          const re = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${re}.length`, (te) => {
            this.var(G, (0, t._)`${re}[${te}]`), I(G);
          });
        }
        return this._for(new l("of", V, G, x), () => I(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, x, I, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${x})`, I);
        const G = this._scope.toName(S);
        return this._for(new l("in", V, G, x), () => I(G));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
      }
      // `label` statement
      label(S) {
        return this._leafNode(new d(S));
      }
      // `break` statement
      break(S) {
        return this._leafNode(new f(S));
      }
      // `return` statement
      return(S) {
        const x = new m();
        if (this._blockNode(x), this.code(S), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try(S, x, I) {
        if (!x && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new k();
        if (this._blockNode(V), this.code(S), x) {
          const G = this.name("e");
          this._currNode = V.catch = new E(G), x(G);
        }
        return I && (this._currNode = V.finally = new A(), this.code(I)), this._endBlockNode(E, A);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new _(S));
      }
      // start self-balancing block
      block(S, x) {
        return this._blockStarts.push(this._nodes.length), S && this.code(S).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(S) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - x;
        if (I < 0 || S !== void 0 && I !== S)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${S} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(S, x = t.nil, I, V) {
        return this._blockNode(new h(S, x, I)), V && this.code(V).endFunc(), this;
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
      _endBlockNode(S, x) {
        const I = this._currNode;
        if (I instanceof S || x && I instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${S.kind}/${x.kind}` : S.kind}"`);
      }
      _elseNode(S) {
        const x = this._currNode;
        if (!(x instanceof y))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = S, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const S = this._nodes;
        return S[S.length - 1];
      }
      set _currNode(S) {
        const x = this._nodes;
        x[x.length - 1] = S;
      }
    }
    e.CodeGen = N;
    function j(O, S) {
      for (const x in S)
        O[x] = (O[x] || 0) + (S[x] || 0);
      return O;
    }
    function L(O, S) {
      return S instanceof t._CodeOrName ? j(O, S.names) : O;
    }
    function F(O, S, x) {
      if (O instanceof t.Name)
        return I(O);
      if (!V(O))
        return O;
      return new t._Code(O._items.reduce((G, re) => (re instanceof t.Name && (re = I(re)), re instanceof t._Code ? G.push(...re._items) : G.push(re), G), []));
      function I(G) {
        const re = x[G.str];
        return re === void 0 || S[G.str] !== 1 ? G : (delete S[G.str], re);
      }
      function V(G) {
        return G instanceof t._Code && G._items.some((re) => re instanceof t.Name && S[re.str] === 1 && x[re.str] !== void 0);
      }
    }
    function K(O, S) {
      for (const x in S)
        O[x] = (O[x] || 0) - (S[x] || 0);
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
      return (S, x) => S === t.nil ? x : x === t.nil ? S : (0, t._)`${D(S)} ${O} ${D(x)}`;
    }
    function D(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(ar)), ar;
}
var se = {}, bo;
function ae() {
  if (bo) return se;
  bo = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Vn();
  function n(l) {
    const h = {};
    for (const m of l)
      h[m] = !0;
    return h;
  }
  se.toHash = n;
  function r(l, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (o(l, h), !i(h, l.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function o(l, h = l.schema) {
    const { opts: m, self: k } = l;
    if (!m.strictSchema || typeof h == "boolean")
      return;
    const E = k.RULES.keywords;
    for (const A in h)
      E[A] || v(l, `unknown keyword: "${A}"`);
  }
  se.checkUnknownRules = o;
  function i(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (h[m])
        return !0;
    return !1;
  }
  se.schemaHasRules = i;
  function s(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (m !== "$ref" && h.all[m])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: h }, m, k, E) {
    if (!E) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
    }
    return (0, e._)`${l}${h}${(0, e.getProperty)(k)}`;
  }
  se.schemaRefOrVal = a;
  function c(l) {
    return _(decodeURIComponent(l));
  }
  se.unescapeFragment = c;
  function d(l) {
    return encodeURIComponent(f(l));
  }
  se.escapeFragment = d;
  function f(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = f;
  function _(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = _;
  function g(l, h) {
    if (Array.isArray(l))
      for (const m of l)
        h(m);
    else
      h(l);
  }
  se.eachItem = g;
  function w({ mergeNames: l, mergeToName: h, mergeValues: m, resultToName: k }) {
    return (E, A, N, j) => {
      const L = N === void 0 ? A : N instanceof e.Name ? (A instanceof e.Name ? l(E, A, N) : h(E, A, N), N) : A instanceof e.Name ? (h(E, N, A), A) : m(A, N);
      return j === e.Name && !(L instanceof e.Name) ? k(E, L) : L;
    };
  }
  se.mergeEvaluated = {
    props: w({
      mergeNames: (l, h, m) => l.if((0, e._)`${m} !== true && ${h} !== undefined`, () => {
        l.if((0, e._)`${h} === true`, () => l.assign(m, !0), () => l.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${h})`));
      }),
      mergeToName: (l, h, m) => l.if((0, e._)`${m} !== true`, () => {
        h === !0 ? l.assign(m, !0) : (l.assign(m, (0, e._)`${m} || {}`), $(l, m, h));
      }),
      mergeValues: (l, h) => l === !0 ? !0 : { ...l, ...h },
      resultToName: b
    }),
    items: w({
      mergeNames: (l, h, m) => l.if((0, e._)`${m} !== true && ${h} !== undefined`, () => l.assign(m, (0, e._)`${h} === true ? true : ${m} > ${h} ? ${m} : ${h}`)),
      mergeToName: (l, h, m) => l.if((0, e._)`${m} !== true`, () => l.assign(m, h === !0 ? !0 : (0, e._)`${m} > ${h} ? ${m} : ${h}`)),
      mergeValues: (l, h) => l === !0 ? !0 : Math.max(l, h),
      resultToName: (l, h) => l.var("items", h)
    })
  };
  function b(l, h) {
    if (h === !0)
      return l.var("props", !0);
    const m = l.var("props", (0, e._)`{}`);
    return h !== void 0 && $(l, m, h), m;
  }
  se.evaluatedPropsToName = b;
  function $(l, h, m) {
    Object.keys(m).forEach((k) => l.assign((0, e._)`${h}${(0, e.getProperty)(k)}`, !0));
  }
  se.setEvaluated = $;
  const u = {};
  function y(l, h) {
    return l.scopeValue("func", {
      ref: h,
      code: u[h.code] || (u[h.code] = new t._Code(h.code))
    });
  }
  se.useFunc = y;
  var p;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(p || (se.Type = p = {}));
  function C(l, h, m) {
    if (l instanceof e.Name) {
      const k = h === p.Num;
      return m ? k ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : k ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(l).toString() : "/" + f(l);
  }
  se.getErrorPath = C;
  function v(l, h, m = l.opts.strictSchema) {
    if (m) {
      if (h = `strict mode: ${h}`, m === !0)
        throw new Error(h);
      l.self.logger.warn(h);
    }
  }
  return se.checkStrictMode = v, se;
}
var Dt = {}, wo;
function Oe() {
  if (wo) return Dt;
  wo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
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
var _o;
function Jn() {
  return _o || (_o = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: y }) => y ? (0, t.str)`"${u}" keyword must be ${y} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, y = e.keywordError, p, C) {
      const { it: v } = u, { gen: l, compositeRule: h, allErrors: m } = v, k = _(u, y, p);
      C ?? (h || m) ? c(l, k) : d(v, (0, t._)`[${k}]`);
    }
    e.reportError = o;
    function i(u, y = e.keywordError, p) {
      const { it: C } = u, { gen: v, compositeRule: l, allErrors: h } = C, m = _(u, y, p);
      c(v, m), l || h || d(C, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(u, y) {
      u.assign(r.default.errors, y), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(y, () => u.assign((0, t._)`${r.default.vErrors}.length`, y), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: y, schemaValue: p, data: C, errsCount: v, it: l }) {
      if (v === void 0)
        throw new Error("ajv implementation error");
      const h = u.name("err");
      u.forRange("i", v, r.default.errors, (m) => {
        u.const(h, (0, t._)`${r.default.vErrors}[${m}]`), u.if((0, t._)`${h}.instancePath === undefined`, () => u.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${y}`), l.opts.verbose && (u.assign((0, t._)`${h}.schema`, p), u.assign((0, t._)`${h}.data`, C));
      });
    }
    e.extendErrors = a;
    function c(u, y) {
      const p = u.const("err", y);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, y) {
      const { gen: p, validateName: C, schemaEnv: v } = u;
      v.$async ? p.throw((0, t._)`new ${u.ValidationError}(${y})`) : (p.assign((0, t._)`${C}.errors`, y), p.return(!1));
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
    function _(u, y, p) {
      const { createErrors: C } = u.it;
      return C === !1 ? (0, t._)`{}` : g(u, y, p);
    }
    function g(u, y, p = {}) {
      const { gen: C, it: v } = u, l = [
        w(v, p),
        b(u, p)
      ];
      return $(u, y, l), C.object(...l);
    }
    function w({ errorPath: u }, { instancePath: y }) {
      const p = y ? (0, t.str)`${u}${(0, n.getErrorPath)(y, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, p)];
    }
    function b({ keyword: u, it: { errSchemaPath: y } }, { schemaPath: p, parentSchema: C }) {
      let v = C ? y : (0, t.str)`${y}/${u}`;
      return p && (v = (0, t.str)`${v}${(0, n.getErrorPath)(p, n.Type.Str)}`), [f.schemaPath, v];
    }
    function $(u, { params: y, message: p }, C) {
      const { keyword: v, data: l, schemaValue: h, it: m } = u, { opts: k, propertyName: E, topSchemaRef: A, schemaPath: N } = m;
      C.push([f.keyword, v], [f.params, typeof y == "function" ? y(u) : y || (0, t._)`{}`]), k.messages && C.push([f.message, typeof p == "function" ? p(u) : p]), k.verbose && C.push([f.schema, h], [f.parentSchema, (0, t._)`${A}${N}`], [r.default.data, l]), E && C.push([f.propertyName, E]);
    }
  })(sr)), sr;
}
var So;
function Qa() {
  if (So) return nt;
  So = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.boolOrEmptySchema = nt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: f } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  nt.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: d, schema: f } = a;
    f === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  nt.boolOrEmptySchema = i;
  function s(a, c) {
    const { gen: d, data: f } = a, _ = {
      gen: d,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(_, r, void 0, c);
  }
  return nt;
}
var ye = {}, rt = {}, Co;
function Ns() {
  if (Co) return rt;
  Co = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.getRules = rt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  rt.isJSONType = n;
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
  return rt.getRules = r, rt;
}
var Ve = {}, ko;
function Ms() {
  if (ko) return Ve;
  ko = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.shouldUseRule = Ve.shouldUseGroup = Ve.schemaHasRulesForType = void 0;
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
var Eo;
function Bn() {
  if (Eo) return ye;
  Eo = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.reportTypeError = ye.checkDataTypes = ye.checkDataType = ye.coerceAndCheckDataType = ye.getJSONTypes = ye.getSchemaTypes = ye.DataType = void 0;
  const e = /* @__PURE__ */ Ns(), t = /* @__PURE__ */ Ms(), n = /* @__PURE__ */ Jn(), r = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ae();
  var i;
  (function(p) {
    p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
  })(i || (ye.DataType = i = {}));
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
  ye.getSchemaTypes = s;
  function a(p) {
    const C = Array.isArray(p) ? p : p ? [p] : [];
    if (C.every(e.isJSONType))
      return C;
    throw new Error("type must be JSONType or JSONType[]: " + C.join(","));
  }
  ye.getJSONTypes = a;
  function c(p, C) {
    const { gen: v, data: l, opts: h } = p, m = f(C, h.coerceTypes), k = C.length > 0 && !(m.length === 0 && C.length === 1 && (0, t.schemaHasRulesForType)(p, C[0]));
    if (k) {
      const E = b(C, l, h.strictNumbers, i.Wrong);
      v.if(E, () => {
        m.length ? _(p, C, m) : u(p);
      });
    }
    return k;
  }
  ye.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(p, C) {
    return C ? p.filter((v) => d.has(v) || C === "array" && v === "array") : [];
  }
  function _(p, C, v) {
    const { gen: l, data: h, opts: m } = p, k = l.let("dataType", (0, r._)`typeof ${h}`), E = l.let("coerced", (0, r._)`undefined`);
    m.coerceTypes === "array" && l.if((0, r._)`${k} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => l.assign(h, (0, r._)`${h}[0]`).assign(k, (0, r._)`typeof ${h}`).if(b(C, h, m.strictNumbers), () => l.assign(E, h))), l.if((0, r._)`${E} !== undefined`);
    for (const N of v)
      (d.has(N) || N === "array" && m.coerceTypes === "array") && A(N);
    l.else(), u(p), l.endIf(), l.if((0, r._)`${E} !== undefined`, () => {
      l.assign(h, E), g(p, E);
    });
    function A(N) {
      switch (N) {
        case "string":
          l.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(E, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(E, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${k} == "boolean" || ${h} === null
              || (${k} == "string" && ${h} && ${h} == +${h})`).assign(E, (0, r._)`+${h}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${k} === "boolean" || ${h} === null
              || (${k} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(E, (0, r._)`+${h}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(E, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(E, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), l.assign(E, null);
          return;
        case "array":
          l.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${h} === null`).assign(E, (0, r._)`[${h}]`);
      }
    }
  }
  function g({ gen: p, parentData: C, parentDataProperty: v }, l) {
    p.if((0, r._)`${C} !== undefined`, () => p.assign((0, r._)`${C}[${v}]`, l));
  }
  function w(p, C, v, l = i.Correct) {
    const h = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
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
        m = k((0, r._)`!(${C} % 1) && !isNaN(${C})`);
        break;
      case "number":
        m = k();
        break;
      default:
        return (0, r._)`typeof ${C} ${h} ${p}`;
    }
    return l === i.Correct ? m : (0, r.not)(m);
    function k(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${C} == "number"`, E, v ? (0, r._)`isFinite(${C})` : r.nil);
    }
  }
  ye.checkDataType = w;
  function b(p, C, v, l) {
    if (p.length === 1)
      return w(p[0], C, v, l);
    let h;
    const m = (0, o.toHash)(p);
    if (m.array && m.object) {
      const k = (0, r._)`typeof ${C} != "object"`;
      h = m.null ? k : (0, r._)`!${C} || ${k}`, delete m.null, delete m.array, delete m.object;
    } else
      h = r.nil;
    m.number && delete m.integer;
    for (const k in m)
      h = (0, r.and)(h, w(k, C, v, l));
    return h;
  }
  ye.checkDataTypes = b;
  const $ = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: C }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${C}}`
  };
  function u(p) {
    const C = y(p);
    (0, n.reportError)(C, $);
  }
  ye.reportTypeError = u;
  function y(p) {
    const { gen: C, data: v, schema: l } = p, h = (0, o.schemaRefOrVal)(p, l, "type");
    return {
      gen: C,
      keyword: "type",
      data: v,
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
var Et = {}, xo;
function ec() {
  if (xo) return Et;
  xo = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.assignDefaults = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae();
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
    const _ = (0, e._)`${d}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${_}`);
      return;
    }
    let g = (0, e._)`${_} === undefined`;
    f.useDefaults === "empty" && (g = (0, e._)`${g} || ${_} === null || ${_} === ""`), a.if(g, (0, e._)`${_} = ${(0, e.stringify)(s)}`);
  }
  return Et;
}
var Ae = {}, de = {}, Po;
function Fe() {
  if (Po) return de;
  Po = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ae();
  function o(p, C) {
    const { gen: v, data: l, it: h } = p;
    v.if(f(v, l, C, h.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${C}` }, !0), p.error();
    });
  }
  de.checkReportMissingProp = o;
  function i({ gen: p, data: C, it: { opts: v } }, l, h) {
    return (0, e.or)(...l.map((m) => (0, e.and)(f(p, C, m, v.ownProperties), (0, e._)`${h} = ${m}`)));
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
  function c(p, C, v) {
    return (0, e._)`${a(p)}.call(${C}, ${v})`;
  }
  de.isOwnProperty = c;
  function d(p, C, v, l) {
    const h = (0, e._)`${C}${(0, e.getProperty)(v)} !== undefined`;
    return l ? (0, e._)`${h} && ${c(p, C, v)}` : h;
  }
  de.propertyInData = d;
  function f(p, C, v, l) {
    const h = (0, e._)`${C}${(0, e.getProperty)(v)} === undefined`;
    return l ? (0, e.or)(h, (0, e.not)(c(p, C, v))) : h;
  }
  de.noPropertyInData = f;
  function _(p) {
    return p ? Object.keys(p).filter((C) => C !== "__proto__") : [];
  }
  de.allSchemaProperties = _;
  function g(p, C) {
    return _(C).filter((v) => !(0, t.alwaysValidSchema)(p, C[v]));
  }
  de.schemaProperties = g;
  function w({ schemaCode: p, data: C, it: { gen: v, topSchemaRef: l, schemaPath: h, errorPath: m }, it: k }, E, A, N) {
    const j = N ? (0, e._)`${p}, ${C}, ${l}${h}` : C, L = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && L.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const F = (0, e._)`${j}, ${v.object(...L)}`;
    return A !== e.nil ? (0, e._)`${E}.call(${A}, ${F})` : (0, e._)`${E}(${F})`;
  }
  de.callValidateCode = w;
  const b = (0, e._)`new RegExp`;
  function $({ gen: p, it: { opts: C } }, v) {
    const l = C.unicodeRegExp ? "u" : "", { regExp: h } = C.code, m = h(v, l);
    return p.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${h.code === "new RegExp" ? b : (0, r.useFunc)(p, h)}(${v}, ${l})`
    });
  }
  de.usePattern = $;
  function u(p) {
    const { gen: C, data: v, keyword: l, it: h } = p, m = C.name("valid");
    if (h.allErrors) {
      const E = C.let("valid", !0);
      return k(() => C.assign(E, !1)), E;
    }
    return C.var(m, !0), k(() => C.break()), m;
    function k(E) {
      const A = C.const("len", (0, e._)`${v}.length`);
      C.forRange("i", 0, A, (N) => {
        p.subschema({
          keyword: l,
          dataProp: N,
          dataPropType: t.Type.Num
        }, m), C.if((0, e.not)(m), E);
      });
    }
  }
  de.validateArray = u;
  function y(p) {
    const { gen: C, schema: v, keyword: l, it: h } = p;
    if (!Array.isArray(v))
      throw new Error("ajv implementation error");
    if (v.some((A) => (0, t.alwaysValidSchema)(h, A)) && !h.opts.unevaluated)
      return;
    const k = C.let("valid", !1), E = C.name("_valid");
    C.block(() => v.forEach((A, N) => {
      const j = p.subschema({
        keyword: l,
        schemaProp: N,
        compositeRule: !0
      }, E);
      C.assign(k, (0, e._)`${k} || ${E}`), p.mergeValidEvaluated(j, E) || C.if((0, e.not)(k));
    })), p.result(k, () => p.reset(), () => p.error(!0));
  }
  return de.validateUnion = y, de;
}
var Ao;
function tc() {
  if (Ao) return Ae;
  Ao = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.validateKeywordUsage = Ae.validSchemaType = Ae.funcKeywordCode = Ae.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Jn();
  function o(g, w) {
    const { gen: b, keyword: $, schema: u, parentSchema: y, it: p } = g, C = w.macro.call(p.self, u, y, p), v = d(b, $, C);
    p.opts.validateSchema !== !1 && p.self.validateSchema(C, !0);
    const l = b.name("valid");
    g.subschema({
      schema: C,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${$}`,
      topSchemaRef: v,
      compositeRule: !0
    }, l), g.pass(l, () => g.error(!0));
  }
  Ae.macroKeywordCode = o;
  function i(g, w) {
    var b;
    const { gen: $, keyword: u, schema: y, parentSchema: p, $data: C, it: v } = g;
    c(v, w);
    const l = !C && w.compile ? w.compile.call(v.self, y, p, v) : w.validate, h = d($, u, l), m = $.let("valid");
    g.block$data(m, k), g.ok((b = w.valid) !== null && b !== void 0 ? b : m);
    function k() {
      if (w.errors === !1)
        N(), w.modifying && s(g), j(() => g.error());
      else {
        const L = w.async ? E() : A();
        w.modifying && s(g), j(() => a(g, L));
      }
    }
    function E() {
      const L = $.let("ruleErrs", null);
      return $.try(() => N((0, e._)`await `), (F) => $.assign(m, !1).if((0, e._)`${F} instanceof ${v.ValidationError}`, () => $.assign(L, (0, e._)`${F}.errors`), () => $.throw(F))), L;
    }
    function A() {
      const L = (0, e._)`${h}.errors`;
      return $.assign(L, null), N(e.nil), L;
    }
    function N(L = w.async ? (0, e._)`await ` : e.nil) {
      const F = v.opts.passContext ? t.default.this : t.default.self, K = !("compile" in w && !C || w.schema === !1);
      $.assign(m, (0, e._)`${L}${(0, n.callValidateCode)(g, h, F, K)}`, w.modifying);
    }
    function j(L) {
      var F;
      $.if((0, e.not)((F = w.valid) !== null && F !== void 0 ? F : m), L);
    }
  }
  Ae.funcKeywordCode = i;
  function s(g) {
    const { gen: w, data: b, it: $ } = g;
    w.if($.parentData, () => w.assign(b, (0, e._)`${$.parentData}[${$.parentDataProperty}]`));
  }
  function a(g, w) {
    const { gen: b } = g;
    b.if((0, e._)`Array.isArray(${w})`, () => {
      b.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(g);
    }, () => g.error());
  }
  function c({ schemaEnv: g }, w) {
    if (w.async && !g.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(g, w, b) {
    if (b === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return g.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, e.stringify)(b) });
  }
  function f(g, w, b = !1) {
    return !w.length || w.some(($) => $ === "array" ? Array.isArray(g) : $ === "object" ? g && typeof g == "object" && !Array.isArray(g) : typeof g == $ || b && typeof g > "u");
  }
  Ae.validSchemaType = f;
  function _({ schema: g, opts: w, self: b, errSchemaPath: $ }, u, y) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(y) : u.keyword !== y)
      throw new Error("ajv implementation error");
    const p = u.dependencies;
    if (p?.some((C) => !Object.prototype.hasOwnProperty.call(g, C)))
      throw new Error(`parent schema must have dependencies of ${y}: ${p.join(",")}`);
    if (u.validateSchema && !u.validateSchema(g[y])) {
      const v = `keyword "${y}" value is invalid at path "${$}": ` + b.errorsText(u.validateSchema.errors);
      if (w.validateSchema === "log")
        b.logger.error(v);
      else
        throw new Error(v);
    }
  }
  return Ae.validateKeywordUsage = _, Ae;
}
var Be = {}, Ro;
function nc() {
  if (Ro) return Be;
  Ro = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: f, topSchemaRef: _ }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const g = i.schema[s];
      return a === void 0 ? {
        schema: g,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: g[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (d === void 0 || f === void 0 || _ === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: _,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Be.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: d, dataTypes: f, propertyName: _ }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: g } = s;
    if (a !== void 0) {
      const { errorPath: b, dataPathArr: $, opts: u } = s, y = g.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      w(y), i.errorPath = (0, e.str)`${b}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...$, i.parentDataProperty];
    }
    if (d !== void 0) {
      const b = d instanceof e.Name ? d : g.let("data", d, !0);
      w(b), _ !== void 0 && (i.propertyName = _);
    }
    f && (i.dataTypes = f);
    function w(b) {
      i.data = b, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, b];
    }
  }
  Be.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: f }) {
    c !== void 0 && (i.compositeRule = c), d !== void 0 && (i.createErrors = d), f !== void 0 && (i.allErrors = f), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Be.extendSubschemaMode = o, Be;
}
var be = {}, dr, No;
function Ts() {
  return No || (No = 1, dr = function e(t, n) {
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
  }), dr;
}
var ur = { exports: {} }, Mo;
function rc() {
  if (Mo) return ur.exports;
  Mo = 1;
  var e = ur.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, c, d, f, _, g) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, d, f, _, g);
      for (var w in s) {
        var b = s[w];
        if (Array.isArray(b)) {
          if (w in e.arrayKeywords)
            for (var $ = 0; $ < b.length; $++)
              t(r, o, i, b[$], a + "/" + w + "/" + $, c, a, w, s, $);
        } else if (w in e.propsKeywords) {
          if (b && typeof b == "object")
            for (var u in b)
              t(r, o, i, b[u], a + "/" + w + "/" + n(u), c, a, w, s, u);
        } else (w in e.keywords || r.allKeys && !(w in e.skipKeywords)) && t(r, o, i, b, a + "/" + w, c, a, w, s);
      }
      i(s, a, c, d, f, _, g);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ur.exports;
}
var To;
function Yn() {
  if (To) return be;
  To = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ae(), t = Ts(), n = rc(), r = /* @__PURE__ */ new Set([
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
  function o($, u = !0) {
    return typeof $ == "boolean" ? !0 : u === !0 ? !s($) : u ? a($) <= u : !1;
  }
  be.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s($) {
    for (const u in $) {
      if (i.has(u))
        return !0;
      const y = $[u];
      if (Array.isArray(y) && y.some(s) || typeof y == "object" && s(y))
        return !0;
    }
    return !1;
  }
  function a($) {
    let u = 0;
    for (const y in $) {
      if (y === "$ref")
        return 1 / 0;
      if (u++, !r.has(y) && (typeof $[y] == "object" && (0, e.eachItem)($[y], (p) => u += a(p)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c($, u = "", y) {
    y !== !1 && (u = _(u));
    const p = $.parse(u);
    return d($, p);
  }
  be.getFullPath = c;
  function d($, u) {
    return $.serialize(u).split("#")[0] + "#";
  }
  be._getFullPath = d;
  const f = /#\/?$/;
  function _($) {
    return $ ? $.replace(f, "") : "";
  }
  be.normalizeId = _;
  function g($, u, y) {
    return y = _(y), $.resolve(u, y);
  }
  be.resolveUrl = g;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function b($, u) {
    if (typeof $ == "boolean")
      return {};
    const { schemaId: y, uriResolver: p } = this.opts, C = _($[y] || u), v = { "": C }, l = c(p, C, !1), h = {}, m = /* @__PURE__ */ new Set();
    return n($, { allKeys: !0 }, (A, N, j, L) => {
      if (L === void 0)
        return;
      const F = l + N;
      let K = v[L];
      typeof A[y] == "string" && (K = Y.call(this, A[y])), oe.call(this, A.$anchor), oe.call(this, A.$dynamicAnchor), v[N] = K;
      function Y(X) {
        const W = this.opts.uriResolver.resolve;
        if (X = _(K ? W(K, X) : X), m.has(X))
          throw E(X);
        m.add(X);
        let q = this.refs[X];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(A, q.schema, X) : X !== _(F) && (X[0] === "#" ? (k(A, h[X], X), h[X] = A) : this.refs[X] = F), X;
      }
      function oe(X) {
        if (typeof X == "string") {
          if (!w.test(X))
            throw new Error(`invalid anchor "${X}"`);
          Y.call(this, `#${X}`);
        }
      }
    }), h;
    function k(A, N, j) {
      if (N !== void 0 && !t(A, N))
        throw E(j);
    }
    function E(A) {
      return new Error(`reference "${A}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = b, be;
}
var Oo;
function Xn() {
  if (Oo) return qe;
  Oo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Qa(), t = /* @__PURE__ */ Bn(), n = /* @__PURE__ */ Ms(), r = /* @__PURE__ */ Bn(), o = /* @__PURE__ */ ec(), i = /* @__PURE__ */ tc(), s = /* @__PURE__ */ nc(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Oe(), d = /* @__PURE__ */ Yn(), f = /* @__PURE__ */ ae(), _ = /* @__PURE__ */ Jn();
  function g(P) {
    if (l(P) && (m(P), v(P))) {
      u(P);
      return;
    }
    w(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  qe.validateFunctionCode = g;
  function w({ gen: P, validateName: z, schema: B, schemaEnv: J, opts: H }, Q) {
    H.code.es5 ? P.func(z, (0, a._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      P.code((0, a._)`"use strict"; ${p(B, H)}`), $(P, H), P.code(Q);
    }) : P.func(z, (0, a._)`${c.default.data}, ${b(H)}`, J.$async, () => P.code(p(B, H)).code(Q));
  }
  function b(P) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function $(P, z) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), z.dynamicRef && P.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, a._)`""`), P.var(c.default.parentData, (0, a._)`undefined`), P.var(c.default.parentDataProperty, (0, a._)`undefined`), P.var(c.default.rootData, c.default.data), z.dynamicRef && P.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(P) {
    const { schema: z, opts: B, gen: J } = P;
    w(P, () => {
      B.$comment && z.$comment && L(P), A(P), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), B.unevaluated && y(P), k(P), F(P);
    });
  }
  function y(P) {
    const { gen: z, validateName: B } = P;
    P.evaluated = z.const("evaluated", (0, a._)`${B}.evaluated`), z.if((0, a._)`${P.evaluated}.dynamicProps`, () => z.assign((0, a._)`${P.evaluated}.props`, (0, a._)`undefined`)), z.if((0, a._)`${P.evaluated}.dynamicItems`, () => z.assign((0, a._)`${P.evaluated}.items`, (0, a._)`undefined`));
  }
  function p(P, z) {
    const B = typeof P == "object" && P[z.schemaId];
    return B && (z.code.source || z.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function C(P, z) {
    if (l(P) && (m(P), v(P))) {
      h(P, z);
      return;
    }
    (0, e.boolOrEmptySchema)(P, z);
  }
  function v({ schema: P, self: z }) {
    if (typeof P == "boolean")
      return !P;
    for (const B in P)
      if (z.RULES.all[B])
        return !0;
    return !1;
  }
  function l(P) {
    return typeof P.schema != "boolean";
  }
  function h(P, z) {
    const { schema: B, gen: J, opts: H } = P;
    H.$comment && B.$comment && L(P), N(P), j(P);
    const Q = J.const("_errs", c.default.errors);
    k(P, Q), J.var(z, (0, a._)`${Q} === ${c.default.errors}`);
  }
  function m(P) {
    (0, f.checkUnknownRules)(P), E(P);
  }
  function k(P, z) {
    if (P.opts.jtd)
      return Y(P, [], !1, z);
    const B = (0, t.getSchemaTypes)(P.schema), J = (0, t.coerceAndCheckDataType)(P, B);
    Y(P, B, !J, z);
  }
  function E(P) {
    const { schema: z, errSchemaPath: B, opts: J, self: H } = P;
    z.$ref && J.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(z, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function A(P) {
    const { schema: z, opts: B } = P;
    z.default !== void 0 && B.useDefaults && B.strictSchema && (0, f.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function N(P) {
    const z = P.schema[P.opts.schemaId];
    z && (P.baseId = (0, d.resolveUrl)(P.opts.uriResolver, P.baseId, z));
  }
  function j(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function L({ gen: P, schemaEnv: z, schema: B, errSchemaPath: J, opts: H }) {
    const Q = B.$comment;
    if (H.$comment === !0)
      P.code((0, a._)`${c.default.self}.logger.log(${Q})`);
    else if (typeof H.$comment == "function") {
      const ne = (0, a.str)`${J}/$comment`, ue = P.scopeValue("root", { ref: z.root });
      P.code((0, a._)`${c.default.self}.opts.$comment(${Q}, ${ne}, ${ue}.schema)`);
    }
  }
  function F(P) {
    const { gen: z, schemaEnv: B, validateName: J, ValidationError: H, opts: Q } = P;
    B.$async ? z.if((0, a._)`${c.default.errors} === 0`, () => z.return(c.default.data), () => z.throw((0, a._)`new ${H}(${c.default.vErrors})`)) : (z.assign((0, a._)`${J}.errors`, c.default.vErrors), Q.unevaluated && K(P), z.return((0, a._)`${c.default.errors} === 0`));
  }
  function K({ gen: P, evaluated: z, props: B, items: J }) {
    B instanceof a.Name && P.assign((0, a._)`${z}.props`, B), J instanceof a.Name && P.assign((0, a._)`${z}.items`, J);
  }
  function Y(P, z, B, J) {
    const { gen: H, schema: Q, data: ne, allErrors: ue, opts: le, self: ge } = P, { RULES: pe } = ge;
    if (Q.$ref && (le.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(Q, pe))) {
      H.block(() => V(P, "$ref", pe.all.$ref.definition));
      return;
    }
    le.jtd || X(P, z), H.block(() => {
      for (const ve of pe.rules)
        De(ve);
      De(pe.post);
    });
    function De(ve) {
      (0, n.shouldUseGroup)(Q, ve) && (ve.type ? (H.if((0, r.checkDataType)(ve.type, ne, le.strictNumbers)), oe(P, ve), z.length === 1 && z[0] === ve.type && B && (H.else(), (0, r.reportTypeError)(P)), H.endIf()) : oe(P, ve), ue || H.if((0, a._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function oe(P, z) {
    const { gen: B, schema: J, opts: { useDefaults: H } } = P;
    H && (0, o.assignDefaults)(P, z.type), B.block(() => {
      for (const Q of z.rules)
        (0, n.shouldUseRule)(J, Q) && V(P, Q.keyword, Q.definition, z.type);
    });
  }
  function X(P, z) {
    P.schemaEnv.meta || !P.opts.strictTypes || (W(P, z), P.opts.allowUnionTypes || q(P, z), R(P, P.dataTypes));
  }
  function W(P, z) {
    if (z.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = z;
        return;
      }
      z.forEach((B) => {
        O(P.dataTypes, B) || x(P, `type "${B}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), S(P, z);
    }
  }
  function q(P, z) {
    z.length > 1 && !(z.length === 2 && z.includes("null")) && x(P, "use allowUnionTypes to allow union type keyword");
  }
  function R(P, z) {
    const B = P.self.RULES.all;
    for (const J in B) {
      const H = B[J];
      if (typeof H == "object" && (0, n.shouldUseRule)(P.schema, H)) {
        const { type: Q } = H.definition;
        Q.length && !Q.some((ne) => D(z, ne)) && x(P, `missing type "${Q.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function D(P, z) {
    return P.includes(z) || z === "number" && P.includes("integer");
  }
  function O(P, z) {
    return P.includes(z) || z === "integer" && P.includes("number");
  }
  function S(P, z) {
    const B = [];
    for (const J of P.dataTypes)
      O(z, J) ? B.push(J) : z.includes("integer") && J === "number" && B.push("integer");
    P.dataTypes = B;
  }
  function x(P, z) {
    const B = P.schemaEnv.baseId + P.errSchemaPath;
    z += ` at "${B}" (strictTypes)`, (0, f.checkStrictMode)(P, z, P.opts.strictTypes);
  }
  class I {
    constructor(z, B, J) {
      if ((0, i.validateKeywordUsage)(z, B, J), this.gen = z.gen, this.allErrors = z.allErrors, this.keyword = J, this.data = z.data, this.schema = z.schema[J], this.$data = B.$data && z.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(z, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = z.schema, this.params = {}, this.it = z, this.def = B, this.$data)
        this.schemaCode = z.gen.const("vSchema", te(this.$data, z));
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
      (z ? _.reportExtraError : _.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, _.reportError)(this, this.def.$dataError || _.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, _.resetErrorsCount)(this.gen, this.errsCount);
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
      const { gen: J, schemaCode: H, schemaType: Q, def: ne } = this;
      J.if((0, a.or)((0, a._)`${H} === undefined`, B)), z !== a.nil && J.assign(z, !0), (Q.length || ne.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), z !== a.nil && J.assign(z, !1)), J.else();
    }
    invalid$data() {
      const { gen: z, schemaCode: B, schemaType: J, def: H, it: Q } = this;
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
          const le = z.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, a._)`!${le}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(z, B) {
      const J = (0, s.getSubschema)(this.it, z);
      (0, s.extendSubschemaData)(J, this.it, z), (0, s.extendSubschemaMode)(J, z);
      const H = { ...this.it, ...J, items: void 0, props: void 0 };
      return C(H, B), H;
    }
    mergeEvaluated(z, B) {
      const { it: J, gen: H } = this;
      J.opts.unevaluated && (J.props !== !0 && z.props !== void 0 && (J.props = f.mergeEvaluated.props(H, z.props, J.props, B)), J.items !== !0 && z.items !== void 0 && (J.items = f.mergeEvaluated.items(H, z.items, J.items, B)));
    }
    mergeValidEvaluated(z, B) {
      const { it: J, gen: H } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return H.if(B, () => this.mergeEvaluated(z, a.Name)), !0;
    }
  }
  qe.KeywordCxt = I;
  function V(P, z, B, J) {
    const H = new I(P, B, z);
    "code" in B ? B.code(H, J) : H.$data && B.validate ? (0, i.funcKeywordCode)(H, B) : "macro" in B ? (0, i.macroKeywordCode)(H, B) : (B.compile || B.validate) && (0, i.funcKeywordCode)(H, B);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, re = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function te(P, { dataLevel: z, dataNames: B, dataPathArr: J }) {
    let H, Q;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!G.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      H = P, Q = c.default.rootData;
    } else {
      const ge = re.exec(P);
      if (!ge)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const pe = +ge[1];
      if (H = ge[2], H === "#") {
        if (pe >= z)
          throw new Error(le("property/index", pe));
        return J[z - pe];
      }
      if (pe > z)
        throw new Error(le("data", pe));
      if (Q = B[z - pe], !H)
        return Q;
    }
    let ne = Q;
    const ue = H.split("/");
    for (const ge of ue)
      ge && (Q = (0, a._)`${Q}${(0, a.getProperty)((0, f.unescapeJsonPointer)(ge))}`, ne = (0, a._)`${ne} && ${Q}`);
    return ne;
    function le(ge, pe) {
      return `Cannot access ${ge} ${pe} levels up, current level is ${z}`;
    }
  }
  return qe.getData = te, qe;
}
var Lt = {}, Fo;
function Gr() {
  if (Fo) return Lt;
  Fo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Lt.default = e, Lt;
}
var qt = {}, zo;
function Zn() {
  if (zo) return qt;
  zo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yn();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var we = {}, jo;
function Qn() {
  if (jo) return we;
  jo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Gr(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Yn(), o = /* @__PURE__ */ ae(), i = /* @__PURE__ */ Xn();
  class s {
    constructor(y) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let C;
      typeof y.schema == "object" && (C = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (p = y.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(C?.[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = C?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(u) {
    const y = f.call(this, u);
    if (y)
      return y;
    const p = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: C, lines: v } = this.opts.code, { ownProperties: l } = this.opts, h = new e.CodeGen(this.scope, { es5: C, lines: v, ownProperties: l });
    let m;
    u.$async && (m = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = h.scopeName("validate");
    u.validateName = k;
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: k,
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
    let A;
    try {
      this._compilations.add(u), (0, i.validateFunctionCode)(E), h.optimize(this.opts.code.optimize);
      const N = h.toString();
      A = `${h.scopeRefs(n.default.scope)}return ${N}`, this.opts.code.process && (A = this.opts.code.process(A, u));
      const L = new Function(`${n.default.self}`, `${n.default.scope}`, A)(this, this.scope.get());
      if (this.scope.value(k, { ref: L }), L.errors = null, L.schema = u.schema, L.schemaEnv = u, u.$async && (L.$async = !0), this.opts.code.source === !0 && (L.source = { validateName: k, validateCode: N, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: F, items: K } = E;
        L.evaluated = {
          props: F instanceof e.Name ? void 0 : F,
          items: K instanceof e.Name ? void 0 : K,
          dynamicProps: F instanceof e.Name,
          dynamicItems: K instanceof e.Name
        }, L.source && (L.source.evaluated = (0, e.stringify)(L.evaluated));
      }
      return u.validate = L, u;
    } catch (N) {
      throw delete u.validate, delete u.validateName, A && this.logger.error("Error compiling schema, function code:", A), N;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function c(u, y, p) {
    var C;
    p = (0, r.resolveUrl)(this.opts.uriResolver, y, p);
    const v = u.refs[p];
    if (v)
      return v;
    let l = g.call(this, u, p);
    if (l === void 0) {
      const h = (C = u.localRefs) === null || C === void 0 ? void 0 : C[p], { schemaId: m } = this.opts;
      h && (l = new s({ schema: h, schemaId: m, root: u, baseId: y }));
    }
    if (l !== void 0)
      return u.refs[p] = d.call(this, l);
  }
  we.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function f(u) {
    for (const y of this._compilations)
      if (_(y, u))
        return y;
  }
  we.getCompilingSchema = f;
  function _(u, y) {
    return u.schema === y.schema && u.root === y.root && u.baseId === y.baseId;
  }
  function g(u, y) {
    let p;
    for (; typeof (p = this.refs[y]) == "string"; )
      y = p;
    return p || this.schemas[y] || w.call(this, u, y);
  }
  function w(u, y) {
    const p = this.opts.uriResolver.parse(y), C = (0, r._getFullPath)(this.opts.uriResolver, p);
    let v = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && C === v)
      return $.call(this, p, u);
    const l = (0, r.normalizeId)(C), h = this.refs[l] || this.schemas[l];
    if (typeof h == "string") {
      const m = w.call(this, u, h);
      return typeof m?.schema != "object" ? void 0 : $.call(this, p, m);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), l === (0, r.normalizeId)(y)) {
        const { schema: m } = h, { schemaId: k } = this.opts, E = m[k];
        return E && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, E)), new s({ schema: m, schemaId: k, root: u, baseId: v });
      }
      return $.call(this, p, h);
    }
  }
  we.resolveSchema = w;
  const b = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function $(u, { baseId: y, schema: p, root: C }) {
    var v;
    if (((v = u.fragment) === null || v === void 0 ? void 0 : v[0]) !== "/")
      return;
    for (const m of u.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const k = p[(0, o.unescapeFragment)(m)];
      if (k === void 0)
        return;
      p = k;
      const E = typeof p == "object" && p[this.opts.schemaId];
      !b.has(m) && E && (y = (0, r.resolveUrl)(this.opts.uriResolver, y, E));
    }
    let l;
    if (typeof p != "boolean" && p.$ref && !(0, o.schemaHasRulesButRef)(p, this.RULES)) {
      const m = (0, r.resolveUrl)(this.opts.uriResolver, y, p.$ref);
      l = w.call(this, C, m);
    }
    const { schemaId: h } = this.opts;
    if (l = l || new s({ schema: p, schemaId: h, root: C, baseId: y }), l.schema !== l.root.schema)
      return l;
  }
  return we;
}
const oc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ic = "Meta-schema for $data reference (JSON AnySchema extension proposal)", sc = "object", ac = ["$data"], cc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, lc = !1, dc = {
  $id: oc,
  description: ic,
  type: sc,
  required: ac,
  properties: cc,
  additionalProperties: lc
};
var Vt = {}, xt = { exports: {} }, fr, Io;
function Os() {
  if (Io) return fr;
  Io = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(l) {
    let h = "", m = 0, k = 0;
    for (k = 0; k < l.length; k++)
      if (m = l[k].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        h += l[k];
        break;
      }
    for (k += 1; k < l.length; k++) {
      if (m = l[k].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      h += l[k];
    }
    return h;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, h, m) {
    if (l.length) {
      const k = i(l);
      if (k !== "")
        h.push(k);
      else
        return m.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let h = 0;
    const m = { error: !1, address: "", zone: "" }, k = [], E = [];
    let A = !1, N = !1, j = c;
    for (let L = 0; L < l.length; L++) {
      const F = l[L];
      if (!(F === "[" || F === "]"))
        if (F === ":") {
          if (A === !0 && (N = !0), !j(E, k, m))
            break;
          if (++h > 7) {
            m.error = !0;
            break;
          }
          L > 0 && l[L - 1] === ":" && (A = !0), k.push(":");
          continue;
        } else if (F === "%") {
          if (!j(E, k, m))
            break;
          j = a;
        } else {
          E.push(F);
          continue;
        }
    }
    return E.length && (j === a ? m.zone = E.join("") : N ? k.push(E.join("")) : k.push(i(E))), m.address = k.join(""), m;
  }
  function f(l) {
    if (_(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const h = d(l);
    if (h.error)
      return { host: l, isIPV6: !1 };
    {
      let m = h.address, k = h.address;
      return h.zone && (m += "%" + h.zone, k += "%25" + h.zone), { host: m, isIPV6: !0, escapedHost: k };
    }
  }
  function _(l, h) {
    let m = 0;
    for (let k = 0; k < l.length; k++)
      l[k] === h && m++;
    return m;
  }
  function g(l) {
    let h = l;
    const m = [];
    let k = -1, E = 0;
    for (; E = h.length; ) {
      if (E === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          m.push("/");
          break;
        } else {
          m.push(h);
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
          m.push("/");
          break;
        }
      } else if (E === 3 && h === "/..") {
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
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, b = /[@/?#:]/g, $ = /[@/?#]/g;
  function u(l, h) {
    const m = h ? $ : b;
    return m.lastIndex = 0, l.replace(m, (k) => w[k]);
  }
  function y(l, h = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let m = "";
    for (let k = 0; k < l.length; k++) {
      if (l[k] === "%" && k + 2 < l.length) {
        const E = l.slice(k + 1, k + 3);
        if (n(E)) {
          const A = E.toUpperCase(), N = String.fromCharCode(parseInt(A, 16));
          h && r(N) ? m += N : m += "%" + A, k += 2;
          continue;
        }
      }
      m += l[k];
    }
    return m;
  }
  function p(l) {
    let h = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const k = l.slice(m + 1, m + 3);
        if (n(k)) {
          const E = k.toUpperCase(), A = String.fromCharCode(parseInt(E, 16));
          A !== "." && r(A) ? h += A : h += "%" + E, m += 2;
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
        const k = l.slice(m + 1, m + 3);
        if (n(k)) {
          h += "%" + k.toUpperCase(), m += 2;
          continue;
        }
      }
      h += escape(l[m]);
    }
    return h;
  }
  function v(l) {
    const h = [];
    if (l.userinfo !== void 0 && (h.push(l.userinfo), h.push("@")), l.host !== void 0) {
      let m = unescape(l.host);
      if (!t(m)) {
        const k = f(m);
        k.isIPV6 === !0 ? m = `[${k.escapedHost}]` : m = u(m, !1);
      }
      h.push(m);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (h.push(":"), h.push(String(l.port))), h.length ? h.join("") : void 0;
  }
  return fr = {
    nonSimpleDomain: s,
    recomposeAuthority: v,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: y,
    normalizePathEncoding: p,
    escapePreservingEscapes: C,
    removeDotSegments: g,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: i
  }, fr;
}
var pr, Do;
function uc() {
  if (Do) return pr;
  Do = 1;
  const { isUUID: e } = Os(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const k = h.scheme || l.scheme || "urn";
      l.nid = m[1].toLowerCase(), l.nss = m[2];
      const E = `${k}:${h.nid || l.nid}`, A = v(E);
      l.path = void 0, A && (l = A.parse(l, h));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function f(l, h) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = h.scheme || l.scheme || "urn", k = l.nid.toLowerCase(), E = `${m}:${h.nid || k}`, A = v(E);
    A && (l = A.serialize(l, h));
    const N = l, j = l.nss;
    return N.path = `${k || h.nid}:${j}`, h.skipEscape = !0, N;
  }
  function _(l, h) {
    const m = l;
    return m.uuid = m.nss, m.nss = void 0, !h.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function g(l) {
    const h = l;
    return h.nss = (l.uuid || "").toLowerCase(), h;
  }
  const w = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: s
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: w.domainHost,
      parse: i,
      serialize: s
    }
  ), $ = (
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
      domainHost: $.domainHost,
      parse: $.parse,
      serialize: $.serialize
    }
  ), C = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: w,
      https: b,
      ws: $,
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
          parse: _,
          serialize: g,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(C, null);
  function v(l) {
    return l && (C[
      /** @type {SchemeName} */
      l
    ] || C[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return pr = {
    wsIsSecure: o,
    SCHEMES: C,
    isValidSchemeName: r,
    getSchemeHandler: v
  }, pr;
}
var Lo;
function fc() {
  if (Lo) return xt.exports;
  Lo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = Os(), { SCHEMES: d, getSchemeHandler: f } = uc();
  function _(E, A) {
    return typeof E == "string" ? E = /** @type {T} */
    l(E, A) : typeof E == "object" && (E = /** @type {T} */
    v($(E, A), A)), E;
  }
  function g(E, A, N) {
    const j = N ? Object.assign({ scheme: "null" }, N) : { scheme: "null" }, L = w(v(E, j), v(A, j), j, !0);
    return j.skipEscape = !0, $(L, j);
  }
  function w(E, A, N, j) {
    const L = {};
    return j || (E = v($(E, N), N), A = v($(A, N), N)), N = N || {}, !N.tolerant && A.scheme ? (L.scheme = A.scheme, L.userinfo = A.userinfo, L.host = A.host, L.port = A.port, L.path = t(A.path || ""), L.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (L.userinfo = A.userinfo, L.host = A.host, L.port = A.port, L.path = t(A.path || ""), L.query = A.query) : (A.path ? (A.path[0] === "/" ? L.path = t(A.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? L.path = "/" + A.path : E.path ? L.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + A.path : L.path = A.path, L.path = t(L.path)), L.query = A.query) : (L.path = E.path, A.query !== void 0 ? L.query = A.query : L.query = E.query), L.userinfo = E.userinfo, L.host = E.host, L.port = E.port), L.scheme = E.scheme), L.fragment = A.fragment, L;
  }
  function b(E, A, N) {
    const j = m(E, N), L = m(A, N);
    return j !== void 0 && L !== void 0 && j.toLowerCase() === L.toLowerCase();
  }
  function $(E, A) {
    const N = {
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
    }, j = Object.assign({}, A), L = [], F = f(j.scheme || N.scheme);
    F && F.serialize && F.serialize(N, j), N.path !== void 0 && (j.skipEscape ? N.path = r(N.path) : (N.path = i(N.path), N.scheme !== void 0 && (N.path = N.path.split("%3A").join(":")))), j.reference !== "suffix" && N.scheme && L.push(N.scheme, ":");
    const K = n(N);
    if (K !== void 0 && (j.reference !== "suffix" && L.push("//"), L.push(K), N.path && N.path[0] !== "/" && L.push("/")), N.path !== void 0) {
      let Y = N.path;
      !j.absolutePath && (!F || !F.absolutePath) && (Y = t(Y)), K === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), L.push(Y);
    }
    return N.query !== void 0 && L.push("?", N.query), N.fragment !== void 0 && L.push("#", N.fragment), L.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function p(E, A) {
    if (A[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function C(E, A) {
    const N = Object.assign({}, A), j = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let L = !1, F = !1;
    N.reference === "suffix" && (N.scheme ? E = N.scheme + ":" + E : E = "//" + E);
    const K = E.match(y);
    K !== null && K[1].indexOf("\\") !== -1 && (j.error = "URI authority must not contain a literal backslash.", L = !0);
    const Y = E.match(u);
    if (Y) {
      j.scheme = Y[1], j.userinfo = Y[3], j.host = Y[4], j.port = parseInt(Y[5], 10), j.path = Y[6] || "", j.query = Y[7], j.fragment = Y[8], isNaN(j.port) && (j.port = Y[5]);
      const oe = p(j, Y);
      if (oe !== void 0 && (j.error = j.error || oe, L = !0), j.host)
        if (a(j.host) === !1) {
          const q = e(j.host);
          j.host = q.host.toLowerCase(), F = q.isIPV6;
        } else
          F = !0;
      j.scheme === void 0 && j.userinfo === void 0 && j.host === void 0 && j.port === void 0 && j.query === void 0 && !j.path ? j.reference = "same-document" : j.scheme === void 0 ? j.reference = "relative" : j.fragment === void 0 ? j.reference = "absolute" : j.reference = "uri", N.reference && N.reference !== "suffix" && N.reference !== j.reference && (j.error = j.error || "URI is not a " + N.reference + " reference.");
      const X = f(N.scheme || j.scheme);
      if (!N.unicodeSupport && (!X || !X.unicodeSupport) && j.host && (N.domainHost || X && X.domainHost) && F === !1 && c(j.host))
        try {
          j.host = new URL("http://" + j.host).hostname;
        } catch (W) {
          j.error = j.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!X || X && !X.skipNormalize) && (E.indexOf("%") !== -1 && (j.scheme !== void 0 && (j.scheme = unescape(j.scheme)), j.host !== void 0 && (j.host = s(unescape(j.host), F))), j.path && (j.path = o(j.path)), j.fragment))
        try {
          j.fragment = encodeURI(decodeURIComponent(j.fragment));
        } catch {
          j.error = j.error || "URI malformed";
        }
      X && X.parse && X.parse(j, N);
    } else
      j.error = j.error || "URI can not be parsed.";
    return { parsed: j, malformedAuthorityOrPort: L };
  }
  function v(E, A) {
    return C(E, A).parsed;
  }
  function l(E, A) {
    return h(E, A).normalized;
  }
  function h(E, A) {
    const { parsed: N, malformedAuthorityOrPort: j } = C(E, A);
    return {
      normalized: j ? E : $(N, A),
      malformedAuthorityOrPort: j
    };
  }
  function m(E, A) {
    if (typeof E == "string") {
      const { normalized: N, malformedAuthorityOrPort: j } = h(E, A);
      return j ? void 0 : N;
    }
    if (typeof E == "object")
      return $(E, A);
  }
  const k = {
    SCHEMES: d,
    normalize: _,
    resolve: g,
    resolveComponent: w,
    equal: b,
    serialize: $,
    parse: v
  };
  return xt.exports = k, xt.exports.default = k, xt.exports.fastUri = k, xt.exports;
}
var qo;
function pc() {
  if (qo) return Vt;
  qo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = fc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Vt.default = e, Vt;
}
var Vo;
function hc() {
  return Vo || (Vo = 1, (function(e) {
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
    const r = /* @__PURE__ */ Gr(), o = /* @__PURE__ */ Zn(), i = /* @__PURE__ */ Ns(), s = /* @__PURE__ */ Qn(), a = /* @__PURE__ */ ie(), c = /* @__PURE__ */ Yn(), d = /* @__PURE__ */ Bn(), f = /* @__PURE__ */ ae(), _ = dc, g = /* @__PURE__ */ pc(), w = (q, R) => new RegExp(q, R);
    w.code = "new RegExp";
    const b = ["removeAdditional", "useDefaults", "coerceTypes"], $ = /* @__PURE__ */ new Set([
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
    }, p = 200;
    function C(q) {
      var R, D, O, S, x, I, V, G, re, te, P, z, B, J, H, Q, ne, ue, le, ge, pe, De, ve, Pe, Le;
      const tt = q.strict, or = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, uo = or === !0 || or === void 0 ? 1 : or || 0, fo = (O = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && O !== void 0 ? O : w, da = (S = q.uriResolver) !== null && S !== void 0 ? S : g.default;
      return {
        strictSchema: (I = (x = q.strictSchema) !== null && x !== void 0 ? x : tt) !== null && I !== void 0 ? I : !0,
        strictNumbers: (G = (V = q.strictNumbers) !== null && V !== void 0 ? V : tt) !== null && G !== void 0 ? G : !0,
        strictTypes: (te = (re = q.strictTypes) !== null && re !== void 0 ? re : tt) !== null && te !== void 0 ? te : "log",
        strictTuples: (z = (P = q.strictTuples) !== null && P !== void 0 ? P : tt) !== null && z !== void 0 ? z : "log",
        strictRequired: (J = (B = q.strictRequired) !== null && B !== void 0 ? B : tt) !== null && J !== void 0 ? J : !1,
        code: q.code ? { ...q.code, optimize: uo, regExp: fo } : { optimize: uo, regExp: fo },
        loopRequired: (H = q.loopRequired) !== null && H !== void 0 ? H : p,
        loopEnum: (Q = q.loopEnum) !== null && Q !== void 0 ? Q : p,
        meta: (ne = q.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ue = q.messages) !== null && ue !== void 0 ? ue : !0,
        inlineRefs: (le = q.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (ge = q.schemaId) !== null && ge !== void 0 ? ge : "$id",
        addUsedSchema: (pe = q.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (De = q.validateSchema) !== null && De !== void 0 ? De : !0,
        validateFormats: (ve = q.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Pe = q.unicodeRegExp) !== null && Pe !== void 0 ? Pe : !0,
        int32range: (Le = q.int32range) !== null && Le !== void 0 ? Le : !0,
        uriResolver: da
      };
    }
    class v {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...C(R) };
        const { es5: D, lines: O } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: $, es5: D, lines: O }), this.logger = j(R.logger);
        const S = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, u, R, "NOT SUPPORTED"), l.call(this, y, R, "DEPRECATED", "warn"), this._metaOpts = A.call(this), R.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && E.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), m.call(this), R.validateFormats = S;
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
        async function S(te, P) {
          await x.call(this, te.$schema);
          const z = this._addSchema(te, P);
          return z.validate || I.call(this, z);
        }
        async function x(te) {
          te && !this.getSchema(te) && await S.call(this, { $ref: te }, !0);
        }
        async function I(te) {
          try {
            return this._compileSchemaEnv(te);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return V.call(this, P), await G.call(this, P.missingSchema), I.call(this, te);
          }
        }
        function V({ missingSchema: te, missingRef: P }) {
          if (this.refs[te])
            throw new Error(`AnySchema ${te} is loaded but ${P} cannot be resolved`);
        }
        async function G(te) {
          const P = await re.call(this, te);
          this.refs[te] || await x.call(this, P.$schema), this.refs[te] || this.addSchema(P, te, D);
        }
        async function re(te) {
          const P = this._loading[te];
          if (P)
            return P;
          try {
            return await (this._loading[te] = O(te));
          } finally {
            delete this._loading[te];
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
        let x;
        if (typeof R == "object") {
          const { schemaId: I } = this.opts;
          if (x = R[I], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, c.normalizeId)(D || x), this._checkUnique(D), this.schemas[D] = this._addSchema(R, O, D, S, !0), this;
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
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
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
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
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
        if (F.call(this, O, D), !D)
          return (0, f.eachItem)(O, (x) => K.call(this, x)), this;
        oe.call(this, D);
        const S = {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        };
        return (0, f.eachItem)(O, S.type.length === 0 ? (x) => K.call(this, x, S) : (x) => S.type.forEach((I) => K.call(this, x, S, I))), this;
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
          const S = O.rules.findIndex((x) => x.keyword === R);
          S >= 0 && O.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[R] = D, this;
      }
      errorsText(R = this.errors, { separator: D = ", ", dataVar: O = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((S) => `${O}${S.instancePath} ${S.message}`).reduce((S, x) => S + D + x);
      }
      $dataMetaSchema(R, D) {
        const O = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const S of D) {
          const x = S.split("/").slice(1);
          let I = R;
          for (const V of x)
            I = I[V];
          for (const V in O) {
            const G = O[V];
            if (typeof G != "object")
              continue;
            const { $data: re } = G.definition, te = I[V];
            re && te && (I[V] = W(te));
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
      _addSchema(R, D, O, S = this.opts.validateSchema, x = this.opts.addUsedSchema) {
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
        let G = this._cache.get(R);
        if (G !== void 0)
          return G;
        O = (0, c.normalizeId)(I || O);
        const re = c.getSchemaRefs.call(this, R, O);
        return G = new s.SchemaEnv({ schema: R, schemaId: V, meta: D, baseId: O, localRefs: re }), this._cache.set(G.schema, G), x && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = G), S && this.validateSchema(R, !0), G;
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
    v.ValidationError = r.default, v.MissingRefError = o.default, e.default = v;
    function l(q, R, D, O = "error") {
      for (const S in q) {
        const x = S;
        x in R && this.logger[O](`${D}: option ${S}. ${q[x]}`);
      }
    }
    function h(q) {
      return q = (0, c.normalizeId)(q), this.schemas[q] || this.refs[q];
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
    function E(q) {
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
    function A() {
      const q = { ...this.opts };
      for (const R of b)
        delete q[R];
      return q;
    }
    const N = { log() {
    }, warn() {
    }, error() {
    } };
    function j(q) {
      if (q === !1)
        return N;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const L = /^[a-z_$][a-z0-9_$:-]*$/i;
    function F(q, R) {
      const { RULES: D } = this;
      if ((0, f.eachItem)(q, (O) => {
        if (D.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!L.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function K(q, R, D) {
      var O;
      const S = R?.post;
      if (D && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let I = S ? x.post : x.rules.find(({ type: G }) => G === D);
      if (I || (I = { type: D, rules: [] }, x.rules.push(I)), x.keywords[q] = !0, !R)
        return;
      const V = {
        keyword: q,
        definition: {
          ...R,
          type: (0, d.getJSONTypes)(R.type),
          schemaType: (0, d.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? Y.call(this, I, V, R.before) : I.rules.push(V), x.all[q] = V, (O = R.implements) === null || O === void 0 || O.forEach((G) => this.addKeyword(G));
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
  })(ir)), ir;
}
var Bt = {}, Ut = {}, Ht = {}, Bo;
function mc() {
  if (Bo) return Ht;
  Bo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ht.default = e, Ht;
}
var Je = {}, Uo;
function Wr() {
  if (Uo) return Je;
  Uo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.callRef = Je.getValidate = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe(), o = /* @__PURE__ */ Qn(), i = /* @__PURE__ */ ae(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: f, schema: _, it: g } = d, { baseId: w, schemaEnv: b, validateName: $, opts: u, self: y } = g, { root: p } = b;
      if ((_ === "#" || _ === "#/") && w === p.baseId)
        return v();
      const C = o.resolveRef.call(y, p, w, _);
      if (C === void 0)
        throw new e.default(g.opts.uriResolver, w, _);
      if (C instanceof o.SchemaEnv)
        return l(C);
      return h(C);
      function v() {
        if (b === p)
          return c(d, $, b, b.$async);
        const m = f.scopeValue("root", { ref: p });
        return c(d, (0, n._)`${m}.validate`, p, p.$async);
      }
      function l(m) {
        const k = a(d, m);
        c(d, k, m, m.$async);
      }
      function h(m) {
        const k = f.scopeValue("schema", u.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), E = f.name("valid"), A = d.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: _
        }, E);
        d.mergeEvaluated(A), d.ok(E);
      }
    }
  };
  function a(d, f) {
    const { gen: _ } = d;
    return f.validate ? _.scopeValue("validate", { ref: f.validate }) : (0, n._)`${_.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Je.getValidate = a;
  function c(d, f, _, g) {
    const { gen: w, it: b } = d, { allErrors: $, schemaEnv: u, opts: y } = b, p = y.passContext ? r.default.this : n.nil;
    g ? C() : v();
    function C() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const m = w.let("valid");
      w.try(() => {
        w.code((0, n._)`await ${(0, t.callValidateCode)(d, f, p)}`), h(f), $ || w.assign(m, !0);
      }, (k) => {
        w.if((0, n._)`!(${k} instanceof ${b.ValidationError})`, () => w.throw(k)), l(k), $ || w.assign(m, !1);
      }), d.ok(m);
    }
    function v() {
      d.result((0, t.callValidateCode)(d, f, p), () => h(f), () => l(f));
    }
    function l(m) {
      const k = (0, n._)`${m}.errors`;
      w.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), w.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(m) {
      var k;
      if (!b.opts.unevaluated)
        return;
      const E = (k = _?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (b.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (b.props = i.mergeEvaluated.props(w, E.props, b.props));
        else {
          const A = w.var("props", (0, n._)`${m}.evaluated.props`);
          b.props = i.mergeEvaluated.props(w, A, b.props, n.Name);
        }
      if (b.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (b.items = i.mergeEvaluated.items(w, E.items, b.items));
        else {
          const A = w.var("items", (0, n._)`${m}.evaluated.items`);
          b.items = i.mergeEvaluated.items(w, A, b.items, n.Name);
        }
    }
  }
  return Je.callRef = c, Je.default = s, Je;
}
var Ho;
function gc() {
  if (Ho) return Ut;
  Ho = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ mc(), t = /* @__PURE__ */ Wr(), n = [
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
var Kt = {}, Gt = {}, Ko;
function yc() {
  if (Ko) return Gt;
  Ko = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
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
var Wt = {}, Go;
function $c() {
  if (Go) return Wt;
  Go = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
  return Wt.default = n, Wt;
}
var Jt = {}, Yt = {}, Wo;
function vc() {
  if (Wo) return Yt;
  Wo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Yt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Yt;
}
var Jo;
function bc() {
  if (Jo) return Jt;
  Jo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ vc(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: d } = i, f = s === "maxLength" ? e.operators.GT : e.operators.LT, _ = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${_} ${f} ${c}`);
    }
  };
  return Jt.default = o, Jt;
}
var Xt = {}, Yo;
function wc() {
  if (Yo) return Xt;
  Yo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ ie(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: f, it: _ } = i, g = _.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: w } = _.opts.code, b = w.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, w), $ = s.let("valid");
        s.try(() => s.assign($, (0, n._)`${b}(${f}, ${g}).test(${a})`), () => s.assign($, !1)), i.fail$data((0, n._)`!${$}`);
      } else {
        const w = (0, e.usePattern)(i, d);
        i.fail$data((0, n._)`!${w}.test(${a})`);
      }
    }
  };
  return Xt.default = o, Xt;
}
var Zt = {}, Xo;
function _c() {
  if (Xo) return Zt;
  Xo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
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
var Qt = {}, Zo;
function Sc() {
  if (Zo) return Qt;
  Zo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: c, data: d, $data: f, it: _ } = i, { opts: g } = _;
      if (!f && a.length === 0)
        return;
      const w = a.length >= g.loopRequired;
      if (_.allErrors ? b() : $(), g.strictRequired) {
        const p = i.parentSchema.properties, { definedProperties: C } = i.it;
        for (const v of a)
          if (p?.[v] === void 0 && !C.has(v)) {
            const l = _.schemaEnv.baseId + _.errSchemaPath, h = `required property "${v}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(_, h, _.opts.strictRequired);
          }
      }
      function b() {
        if (w || f)
          i.block$data(t.nil, u);
        else
          for (const p of a)
            (0, e.checkReportMissingProp)(i, p);
      }
      function $() {
        const p = s.let("missing");
        if (w || f) {
          const C = s.let("valid", !0);
          i.block$data(C, () => y(p, C)), i.ok(C);
        } else
          s.if((0, e.checkMissingProp)(i, a, p)), (0, e.reportMissingProp)(i, p), s.else();
      }
      function u() {
        s.forOf("prop", c, (p) => {
          i.setParams({ missingProperty: p }), s.if((0, e.noPropertyInData)(s, d, p, g.ownProperties), () => i.error());
        });
      }
      function y(p, C) {
        i.setParams({ missingProperty: p }), s.forOf(p, c, () => {
          s.assign(C, (0, e.propertyInData)(s, d, p, g.ownProperties)), s.if((0, t.not)(C), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Qt.default = o, Qt;
}
var en = {}, Qo;
function Cc() {
  if (Qo) return en;
  Qo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
var tn = {}, nn = {}, ei;
function Jr() {
  if (ei) return nn;
  ei = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = Ts();
  return e.code = 'require("ajv/dist/runtime/equal").default', nn.default = e, nn;
}
var ti;
function kc() {
  if (ti) return tn;
  ti = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bn(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Jr(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: d, schema: f, parentSchema: _, schemaCode: g, it: w } = s;
      if (!d && !f)
        return;
      const b = a.let("valid"), $ = _.items ? (0, e.getSchemaTypes)(_.items) : [];
      s.block$data(b, u, (0, t._)`${g} === false`), s.ok(b);
      function u() {
        const v = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: v, j: l }), a.assign(b, !0), a.if((0, t._)`${v} > 1`, () => (y() ? p : C)(v, l));
      }
      function y() {
        return $.length > 0 && !$.some((v) => v === "object" || v === "array");
      }
      function p(v, l) {
        const h = a.name("item"), m = (0, e.checkDataTypes)($, h, w.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${v}--;`, () => {
          a.let(h, (0, t._)`${c}[${v}]`), a.if(m, (0, t._)`continue`), $.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${k}[${h}] == "number"`, () => {
            a.assign(l, (0, t._)`${k}[${h}]`), s.error(), a.assign(b, !1).break();
          }).code((0, t._)`${k}[${h}] = ${v}`);
        });
      }
      function C(v, l) {
        const h = (0, n.useFunc)(a, r.default), m = a.name("outer");
        a.label(m).for((0, t._)`;${v}--;`, () => a.for((0, t._)`${l} = ${v}; ${l}--;`, () => a.if((0, t._)`${h}(${c}[${v}], ${c}[${l}])`, () => {
          s.error(), a.assign(b, !1).break(m);
        })));
      }
    }
  };
  return tn.default = i, tn;
}
var rn = {}, ni;
function Ec() {
  if (ni) return rn;
  ni = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Jr(), o = {
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
  return rn.default = o, rn;
}
var on = {}, ri;
function xc() {
  if (ri) return on;
  ri = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Jr(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: f, it: _ } = i;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const g = d.length >= _.opts.loopEnum;
      let w;
      const b = () => w ?? (w = (0, t.useFunc)(s, n.default));
      let $;
      if (g || c)
        $ = s.let("valid"), i.block$data($, u);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const p = s.const("vSchema", f);
        $ = (0, e.or)(...d.map((C, v) => y(p, v)));
      }
      i.pass($);
      function u() {
        s.assign($, !1), s.forOf("v", f, (p) => s.if((0, e._)`${b()}(${a}, ${p})`, () => s.assign($, !0).break()));
      }
      function y(p, C) {
        const v = d[C];
        return typeof v == "object" && v !== null ? (0, e._)`${b()}(${a}, ${p}[${C}])` : (0, e._)`${a} === ${v}`;
      }
    }
  };
  return on.default = o, on;
}
var oi;
function Pc() {
  if (oi) return Kt;
  oi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yc(), t = /* @__PURE__ */ $c(), n = /* @__PURE__ */ bc(), r = /* @__PURE__ */ wc(), o = /* @__PURE__ */ _c(), i = /* @__PURE__ */ Sc(), s = /* @__PURE__ */ Cc(), a = /* @__PURE__ */ kc(), c = /* @__PURE__ */ Ec(), d = /* @__PURE__ */ xc(), f = [
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
  return Kt.default = f, Kt;
}
var sn = {}, dt = {}, ii;
function Fs() {
  if (ii) return dt;
  ii = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.validateAdditionalItems = void 0;
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
      const { parentSchema: s, it: a } = i, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(i, c);
    }
  };
  function o(i, s) {
    const { gen: a, schema: c, data: d, keyword: f, it: _ } = i;
    _.items = !0;
    const g = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${g} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(_, c)) {
      const b = a.var("valid", (0, e._)`${g} <= ${s.length}`);
      a.if((0, e.not)(b), () => w(b)), i.ok(b);
    }
    function w(b) {
      a.forRange("i", s.length, g, ($) => {
        i.subschema({ keyword: f, dataProp: $, dataPropType: t.Type.Num }, b), _.allErrors || a.if((0, e.not)(b), () => a.break());
      });
    }
  }
  return dt.validateAdditionalItems = o, dt.default = r, dt;
}
var an = {}, ut = {}, si;
function zs() {
  if (si) return ut;
  si = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.validateTuple = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Fe(), r = {
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
    const { gen: c, parentSchema: d, data: f, keyword: _, it: g } = i;
    $(d), g.opts.unevaluated && a.length && g.items !== !0 && (g.items = t.mergeEvaluated.items(c, a.length, g.items));
    const w = c.name("valid"), b = c.const("len", (0, e._)`${f}.length`);
    a.forEach((u, y) => {
      (0, t.alwaysValidSchema)(g, u) || (c.if((0, e._)`${b} > ${y}`, () => i.subschema({
        keyword: _,
        schemaProp: y,
        dataProp: y
      }, w)), i.ok(w));
    });
    function $(u) {
      const { opts: y, errSchemaPath: p } = g, C = a.length, v = C === u.minItems && (C === u.maxItems || u[s] === !1);
      if (y.strictTuples && !v) {
        const l = `"${_}" is ${C}-tuple, but minItems or maxItems/${s} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(g, l, y.strictTuples);
      }
    }
  }
  return ut.validateTuple = o, ut.default = r, ut;
}
var ai;
function Ac() {
  if (ai) return an;
  ai = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zs(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return an.default = t, an;
}
var cn = {}, ci;
function Rc() {
  if (ci) return cn;
  ci = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ Fs(), i = {
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
  return cn.default = i, cn;
}
var ln = {}, li;
function Nc() {
  if (li) return ln;
  li = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
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
      const { gen: i, schema: s, parentSchema: a, data: c, it: d } = o;
      let f, _;
      const { minContains: g, maxContains: w } = a;
      d.opts.next ? (f = g === void 0 ? 1 : g, _ = w) : f = 1;
      const b = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: f, max: _ }), _ === void 0 && f === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (_ !== void 0 && f > _) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, s)) {
        let C = (0, e._)`${b} >= ${f}`;
        _ !== void 0 && (C = (0, e._)`${C} && ${b} <= ${_}`), o.pass(C);
        return;
      }
      d.items = !0;
      const $ = i.name("valid");
      _ === void 0 && f === 1 ? y($, () => i.if($, () => i.break())) : f === 0 ? (i.let($, !0), _ !== void 0 && i.if((0, e._)`${c}.length > 0`, u)) : (i.let($, !1), u()), o.result($, () => o.reset());
      function u() {
        const C = i.name("_valid"), v = i.let("count", 0);
        y(C, () => i.if(C, () => p(v)));
      }
      function y(C, v) {
        i.forRange("i", 0, b, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, C), v();
        });
      }
      function p(C) {
        i.code((0, e._)`${C}++`), _ === void 0 ? i.if((0, e._)`${C} >= ${f}`, () => i.assign($, !0).break()) : (i.if((0, e._)`${C} > ${_}`, () => i.assign($, !1).break()), f === 1 ? i.assign($, !0) : i.if((0, e._)`${C} >= ${f}`, () => i.assign($, !0)));
      }
    }
  };
  return ln.default = r, ln;
}
var hr = {}, di;
function Yr() {
  return di || (di = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Fe();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: f } }) => {
        const _ = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${_} ${f} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: f, missingProperty: _ } }) => (0, t._)`{property: ${c},
    missingProperty: ${_},
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
      for (const _ in c) {
        if (_ === "__proto__")
          continue;
        const g = Array.isArray(c[_]) ? d : f;
        g[_] = c[_];
      }
      return [d, f];
    }
    function s(c, d = c.schema) {
      const { gen: f, data: _, it: g } = c;
      if (Object.keys(d).length === 0)
        return;
      const w = f.let("missing");
      for (const b in d) {
        const $ = d[b];
        if ($.length === 0)
          continue;
        const u = (0, r.propertyInData)(f, _, b, g.opts.ownProperties);
        c.setParams({
          property: b,
          depsCount: $.length,
          deps: $.join(", ")
        }), g.allErrors ? f.if(u, () => {
          for (const y of $)
            (0, r.checkReportMissingProp)(c, y);
        }) : (f.if((0, t._)`${u} && (${(0, r.checkMissingProp)(c, $, w)})`), (0, r.reportMissingProp)(c, w), f.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, d = c.schema) {
      const { gen: f, data: _, keyword: g, it: w } = c, b = f.name("valid");
      for (const $ in d)
        (0, n.alwaysValidSchema)(w, d[$]) || (f.if(
          (0, r.propertyInData)(f, _, $, w.opts.ownProperties),
          () => {
            const u = c.subschema({ keyword: g, schemaProp: $ }, b);
            c.mergeValidEvaluated(u, b);
          },
          () => f.var(b, !0)
          // TODO var
        ), c.ok(b));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(hr)), hr;
}
var dn = {}, ui;
function Mc() {
  if (ui) return dn;
  ui = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
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
  return dn.default = r, dn;
}
var un = {}, fi;
function js() {
  if (fi) return un;
  fi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ae(), i = {
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
      const { gen: a, schema: c, parentSchema: d, data: f, errsCount: _, it: g } = s;
      if (!_)
        throw new Error("ajv implementation error");
      const { allErrors: w, opts: b } = g;
      if (g.props = !0, b.removeAdditional !== "all" && (0, r.alwaysValidSchema)(g, c))
        return;
      const $ = (0, e.allSchemaProperties)(d.properties), u = (0, e.allSchemaProperties)(d.patternProperties);
      y(), s.ok((0, t._)`${_} === ${n.default.errors}`);
      function y() {
        a.forIn("key", f, (h) => {
          !$.length && !u.length ? v(h) : a.if(p(h), () => v(h));
        });
      }
      function p(h) {
        let m;
        if ($.length > 8) {
          const k = (0, r.schemaRefOrVal)(g, d.properties, "properties");
          m = (0, e.isOwnProperty)(a, k, h);
        } else $.length ? m = (0, t.or)(...$.map((k) => (0, t._)`${h} === ${k}`)) : m = t.nil;
        return u.length && (m = (0, t.or)(m, ...u.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${h})`))), (0, t.not)(m);
      }
      function C(h) {
        a.code((0, t._)`delete ${f}[${h}]`);
      }
      function v(h) {
        if (b.removeAdditional === "all" || b.removeAdditional && c === !1) {
          C(h);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: h }), s.error(), w || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(g, c)) {
          const m = a.name("valid");
          b.removeAdditional === "failing" ? (l(h, m, !1), a.if((0, t.not)(m), () => {
            s.reset(), C(h);
          })) : (l(h, m), w || a.if((0, t.not)(m), () => a.break()));
        }
      }
      function l(h, m, k) {
        const E = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, m);
      }
    }
  };
  return un.default = i, un;
}
var fn = {}, pi;
function Tc() {
  if (pi) return fn;
  pi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ js(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: d, it: f } = i;
      f.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(f, r.default, "additionalProperties"));
      const _ = (0, t.allSchemaProperties)(a);
      for (const u of _)
        f.definedProperties.add(u);
      f.opts.unevaluated && _.length && f.props !== !0 && (f.props = n.mergeEvaluated.props(s, (0, n.toHash)(_), f.props));
      const g = _.filter((u) => !(0, n.alwaysValidSchema)(f, a[u]));
      if (g.length === 0)
        return;
      const w = s.name("valid");
      for (const u of g)
        b(u) ? $(u) : (s.if((0, t.propertyInData)(s, d, u, f.opts.ownProperties)), $(u), f.allErrors || s.else().var(w, !0), s.endIf()), i.it.definedProperties.add(u), i.ok(w);
      function b(u) {
        return f.opts.useDefaults && !f.compositeRule && a[u].default !== void 0;
      }
      function $(u) {
        i.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, w);
      }
    }
  };
  return fn.default = o, fn;
}
var pn = {}, hi;
function Oc() {
  if (hi) return pn;
  hi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: d, it: f } = i, { opts: _ } = f, g = (0, e.allSchemaProperties)(a), w = g.filter((v) => (0, n.alwaysValidSchema)(f, a[v]));
      if (g.length === 0 || w.length === g.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const b = _.strictSchema && !_.allowMatchingProperties && d.properties, $ = s.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, r.evaluatedPropsToName)(s, f.props));
      const { props: u } = f;
      y();
      function y() {
        for (const v of g)
          b && p(v), f.allErrors ? C(v) : (s.var($, !0), C(v), s.if($));
      }
      function p(v) {
        for (const l in b)
          new RegExp(v).test(l) && (0, n.checkStrictMode)(f, `property ${l} matches pattern ${v} (use allowMatchingProperties)`);
      }
      function C(v) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, v)}.test(${l})`, () => {
            const h = w.includes(v);
            h || i.subschema({
              keyword: "patternProperties",
              schemaProp: v,
              dataProp: l,
              dataPropType: r.Type.Str
            }, $), f.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${l}]`, !0) : !h && !f.allErrors && s.if((0, t.not)($), () => s.break());
          });
        });
      }
    }
  };
  return pn.default = o, pn;
}
var hn = {}, mi;
function Fc() {
  if (mi) return hn;
  mi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
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
  return hn.default = t, hn;
}
var mn = {}, gi;
function zc() {
  if (gi) return mn;
  gi = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return mn.default = t, mn;
}
var gn = {}, yi;
function jc() {
  if (yi) return gn;
  yi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
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
      const d = s, f = i.let("valid", !1), _ = i.let("passing", null), g = i.name("_valid");
      o.setParams({ passing: _ }), i.block(w), o.result(f, () => o.reset(), () => o.error(!0));
      function w() {
        d.forEach((b, $) => {
          let u;
          (0, t.alwaysValidSchema)(c, b) ? i.var(g, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: $,
            compositeRule: !0
          }, g), $ > 0 && i.if((0, e._)`${g} && ${f}`).assign(f, !1).assign(_, (0, e._)`[${_}, ${$}]`).else(), i.if(g, () => {
            i.assign(f, !0), i.assign(_, $), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return gn.default = r, gn;
}
var yn = {}, $i;
function Ic() {
  if ($i) return yn;
  $i = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
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
  return yn.default = t, yn;
}
var $n = {}, vi;
function Dc() {
  if (vi) return $n;
  vi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
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
      const _ = s.let("valid", !0), g = s.name("_valid");
      if (w(), i.reset(), d && f) {
        const $ = s.let("ifClause");
        i.setParams({ ifClause: $ }), s.if(g, b("then", $), b("else", $));
      } else d ? s.if(g, b("then")) : s.if((0, e.not)(g), b("else"));
      i.pass(_, () => i.error(!0));
      function w() {
        const $ = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, g);
        i.mergeEvaluated($);
      }
      function b($, u) {
        return () => {
          const y = i.subschema({ keyword: $ }, g);
          s.assign(_, g), i.mergeValidEvaluated(y, _), u ? s.assign(u, (0, e._)`${$}`) : i.setParams({ ifClause: $ });
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
var vn = {}, bi;
function Lc() {
  if (bi) return vn;
  bi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return vn.default = t, vn;
}
var wi;
function qc() {
  if (wi) return sn;
  wi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fs(), t = /* @__PURE__ */ Ac(), n = /* @__PURE__ */ zs(), r = /* @__PURE__ */ Rc(), o = /* @__PURE__ */ Nc(), i = /* @__PURE__ */ Yr(), s = /* @__PURE__ */ Mc(), a = /* @__PURE__ */ js(), c = /* @__PURE__ */ Tc(), d = /* @__PURE__ */ Oc(), f = /* @__PURE__ */ Fc(), _ = /* @__PURE__ */ zc(), g = /* @__PURE__ */ jc(), w = /* @__PURE__ */ Ic(), b = /* @__PURE__ */ Dc(), $ = /* @__PURE__ */ Lc();
  function u(y = !1) {
    const p = [
      // any
      f.default,
      _.default,
      g.default,
      w.default,
      b.default,
      $.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      d.default
    ];
    return y ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(o.default), p;
  }
  return sn.default = u, sn;
}
var bn = {}, ft = {}, _i;
function Is() {
  if (_i) return ft;
  _i = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Wr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: d, it: f } = a;
    f.schemaEnv.root.dynamicAnchors[c] = !0;
    const _ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, g = f.errSchemaPath === "#" ? f.validateName : s(a);
    d.if((0, e._)`!${_}`, () => d.assign(_, g));
  }
  ft.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: d, self: f } = a.it, { root: _, baseId: g, localRefs: w, meta: b } = c.root, { schemaId: $ } = f.opts, u = new n.SchemaEnv({ schema: d, schemaId: $, root: _, baseId: g, localRefs: w, meta: b });
    return n.compileSchema.call(f, u), (0, r.getValidate)(a, u);
  }
  return ft.default = o, ft;
}
var pt = {}, Si;
function Ds() {
  if (Si) return pt;
  Si = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Wr(), r = {
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
      _();
    else {
      const w = a.let("valid", !1);
      _(w), i.ok(w);
    }
    function _(w) {
      if (d.schemaEnv.root.dynamicAnchors[f]) {
        const b = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`);
        a.if(b, g(b, w), g(d.validateName, w));
      } else
        g(d.validateName, w)();
    }
    function g(w, b) {
      return b ? () => a.block(() => {
        (0, n.callRef)(i, w), a.let(b, !0);
      }) : () => (0, n.callRef)(i, w);
    }
  }
  return pt.dynamicRef = o, pt.default = r, pt;
}
var wn = {}, Ci;
function Vc() {
  if (Ci) return wn;
  Ci = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Is(), t = /* @__PURE__ */ ae(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return wn.default = n, wn;
}
var _n = {}, ki;
function Bc() {
  if (ki) return _n;
  ki = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ds(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return _n.default = t, _n;
}
var Ei;
function Uc() {
  if (Ei) return bn;
  Ei = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Is(), t = /* @__PURE__ */ Ds(), n = /* @__PURE__ */ Vc(), r = /* @__PURE__ */ Bc(), o = [e.default, t.default, n.default, r.default];
  return bn.default = o, bn;
}
var Sn = {}, Cn = {}, xi;
function Hc() {
  if (xi) return Cn;
  xi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Cn.default = t, Cn;
}
var kn = {}, Pi;
function Kc() {
  if (Pi) return kn;
  Pi = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return kn.default = t, kn;
}
var En = {}, Ai;
function Gc() {
  if (Ai) return En;
  Ai = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return En.default = t, En;
}
var Ri;
function Wc() {
  if (Ri) return Sn;
  Ri = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hc(), t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ Gc(), r = [e.default, t.default, n.default];
  return Sn.default = r, Sn;
}
var xn = {}, Pn = {}, Ni;
function Jc() {
  if (Ni) return Pn;
  Ni = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), o = {
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
      const { allErrors: _, props: g } = f;
      g instanceof e.Name ? s.if((0, e._)`${g} !== true`, () => s.forIn("key", c, (u) => s.if(b(g, u), () => w(u)))) : g !== !0 && s.forIn("key", c, (u) => g === void 0 ? w(u) : s.if($(g, u), () => w(u))), f.props = !0, i.ok((0, e._)`${d} === ${n.default.errors}`);
      function w(u) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: u }), i.error(), _ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(f, a)) {
          const y = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, y), _ || s.if((0, e.not)(y), () => s.break());
        }
      }
      function b(u, y) {
        return (0, e._)`!${u} || !${u}[${y}]`;
      }
      function $(u, y) {
        const p = [];
        for (const C in u)
          u[C] === !0 && p.push((0, e._)`${y} !== ${C}`);
        return (0, e.and)(...p);
      }
    }
  };
  return Pn.default = o, Pn;
}
var An = {}, Mi;
function Yc() {
  if (Mi) return An;
  Mi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ ae(), r = {
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
        const g = i.var("valid", (0, e._)`${f} <= ${d}`);
        i.if((0, e.not)(g), () => _(g, d)), o.ok(g);
      }
      c.items = !0;
      function _(g, w) {
        i.forRange("i", w, f, (b) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: t.Type.Num }, g), c.allErrors || i.if((0, e.not)(g), () => i.break());
        });
      }
    }
  };
  return An.default = r, An;
}
var Ti;
function Xc() {
  if (Ti) return xn;
  Ti = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jc(), t = /* @__PURE__ */ Yc(), n = [e.default, t.default];
  return xn.default = n, xn;
}
var Rn = {}, Nn = {}, Oi;
function Zc() {
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
    code(r, o) {
      const { gen: i, data: s, $data: a, schema: c, schemaCode: d, it: f } = r, { opts: _, errSchemaPath: g, schemaEnv: w, self: b } = f;
      if (!_.validateFormats)
        return;
      a ? $() : u();
      function $() {
        const y = i.scopeValue("formats", {
          ref: b.formats,
          code: _.code.formats
        }), p = i.const("fDef", (0, e._)`${y}[${d}]`), C = i.let("fType"), v = i.let("format");
        i.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => i.assign(C, (0, e._)`${p}.type || "string"`).assign(v, (0, e._)`${p}.validate`), () => i.assign(C, (0, e._)`"string"`).assign(v, p)), r.fail$data((0, e.or)(l(), h()));
        function l() {
          return _.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${v}`;
        }
        function h() {
          const m = w.$async ? (0, e._)`(${p}.async ? await ${v}(${s}) : ${v}(${s}))` : (0, e._)`${v}(${s})`, k = (0, e._)`(typeof ${v} == "function" ? ${m} : ${v}.test(${s}))`;
          return (0, e._)`${v} && ${v} !== true && ${C} === ${o} && !${k}`;
        }
      }
      function u() {
        const y = b.formats[c];
        if (!y) {
          l();
          return;
        }
        if (y === !0)
          return;
        const [p, C, v] = h(y);
        p === o && r.pass(m());
        function l() {
          if (_.strictSchema === !1) {
            b.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${c}" ignored in schema at path "${g}"`;
          }
        }
        function h(k) {
          const E = k instanceof RegExp ? (0, e.regexpCode)(k) : _.code.formats ? (0, e._)`${_.code.formats}${(0, e.getProperty)(c)}` : void 0, A = i.scopeValue("formats", { key: c, ref: k, code: E });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${A}.validate`] : ["string", k, A];
        }
        function m() {
          if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
            if (!w.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${v}(${s})`;
          }
          return typeof C == "function" ? (0, e._)`${v}(${s})` : (0, e._)`${v}.test(${s})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Fi;
function Qc() {
  if (Fi) return Rn;
  Fi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Zc()).default];
  return Rn.default = t, Rn;
}
var ot = {}, zi;
function el() {
  return zi || (zi = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.contentVocabulary = ot.metadataVocabulary = void 0, ot.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], ot.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), ot;
}
var ji;
function tl() {
  if (ji) return Bt;
  ji = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gc(), t = /* @__PURE__ */ Pc(), n = /* @__PURE__ */ qc(), r = /* @__PURE__ */ Uc(), o = /* @__PURE__ */ Wc(), i = /* @__PURE__ */ Xc(), s = /* @__PURE__ */ Qc(), a = /* @__PURE__ */ el(), c = [
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
var Mn = {}, Pt = {}, Ii;
function nl() {
  if (Ii) return Pt;
  Ii = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Pt.DiscrError = e = {})), Pt;
}
var Di;
function rl() {
  if (Di) return Mn;
  Di = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = /* @__PURE__ */ nl(), n = /* @__PURE__ */ Qn(), r = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ ae(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: f, parentSchema: _, it: g } = a, { oneOf: w } = _;
      if (!g.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const b = f.propertyName;
      if (typeof b != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const $ = c.let("valid", !1), u = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(b)}`);
      c.if((0, e._)`typeof ${u} == "string"`, () => y(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: b })), a.ok($);
      function y() {
        const v = C();
        c.if(!1);
        for (const l in v)
          c.elseIf((0, e._)`${u} === ${l}`), c.assign($, p(v[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: b }), c.endIf();
      }
      function p(v) {
        const l = c.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: v }, l);
        return a.mergeEvaluated(h, e.Name), l;
      }
      function C() {
        var v;
        const l = {}, h = k(_);
        let m = !0;
        for (let N = 0; N < w.length; N++) {
          let j = w[N];
          if (j?.$ref && !(0, o.schemaHasRulesButRef)(j, g.self.RULES)) {
            const F = j.$ref;
            if (j = n.resolveRef.call(g.self, g.schemaEnv.root, g.baseId, F), j instanceof n.SchemaEnv && (j = j.schema), j === void 0)
              throw new r.default(g.opts.uriResolver, g.baseId, F);
          }
          const L = (v = j?.properties) === null || v === void 0 ? void 0 : v[b];
          if (typeof L != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
          m = m && (h || k(j)), E(L, N);
        }
        if (!m)
          throw new Error(`discriminator: "${b}" must be required`);
        return l;
        function k({ required: N }) {
          return Array.isArray(N) && N.includes(b);
        }
        function E(N, j) {
          if (N.const)
            A(N.const, j);
          else if (N.enum)
            for (const L of N.enum)
              A(L, j);
          else
            throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
        }
        function A(N, j) {
          if (typeof N != "string" || N in l)
            throw new Error(`discriminator: "${b}" values must be unique strings`);
          l[N] = j;
        }
      }
    }
  };
  return Mn.default = s, Mn;
}
var Tn = {};
const ol = "https://json-schema.org/draft/2020-12/schema", il = "https://json-schema.org/draft/2020-12/schema", sl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, al = "meta", cl = "Core and Validation specifications meta-schema", ll = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], dl = ["object", "boolean"], ul = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", fl = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, pl = {
  $schema: ol,
  $id: il,
  $vocabulary: sl,
  $dynamicAnchor: al,
  title: cl,
  allOf: ll,
  type: dl,
  $comment: ul,
  properties: fl
}, hl = "https://json-schema.org/draft/2020-12/schema", ml = "https://json-schema.org/draft/2020-12/meta/applicator", gl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, yl = "meta", $l = "Applicator vocabulary meta-schema", vl = ["object", "boolean"], bl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, wl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, _l = {
  $schema: hl,
  $id: ml,
  $vocabulary: gl,
  $dynamicAnchor: yl,
  title: $l,
  type: vl,
  properties: bl,
  $defs: wl
}, Sl = "https://json-schema.org/draft/2020-12/schema", Cl = "https://json-schema.org/draft/2020-12/meta/unevaluated", kl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, El = "meta", xl = "Unevaluated applicator vocabulary meta-schema", Pl = ["object", "boolean"], Al = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Rl = {
  $schema: Sl,
  $id: Cl,
  $vocabulary: kl,
  $dynamicAnchor: El,
  title: xl,
  type: Pl,
  properties: Al
}, Nl = "https://json-schema.org/draft/2020-12/schema", Ml = "https://json-schema.org/draft/2020-12/meta/content", Tl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ol = "meta", Fl = "Content vocabulary meta-schema", zl = ["object", "boolean"], jl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Il = {
  $schema: Nl,
  $id: Ml,
  $vocabulary: Tl,
  $dynamicAnchor: Ol,
  title: Fl,
  type: zl,
  properties: jl
}, Dl = "https://json-schema.org/draft/2020-12/schema", Ll = "https://json-schema.org/draft/2020-12/meta/core", ql = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Vl = "meta", Bl = "Core vocabulary meta-schema", Ul = ["object", "boolean"], Hl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Kl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Gl = {
  $schema: Dl,
  $id: Ll,
  $vocabulary: ql,
  $dynamicAnchor: Vl,
  title: Bl,
  type: Ul,
  properties: Hl,
  $defs: Kl
}, Wl = "https://json-schema.org/draft/2020-12/schema", Jl = "https://json-schema.org/draft/2020-12/meta/format-annotation", Yl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Xl = "meta", Zl = "Format vocabulary meta-schema for annotation results", Ql = ["object", "boolean"], ed = { format: { type: "string" } }, td = {
  $schema: Wl,
  $id: Jl,
  $vocabulary: Yl,
  $dynamicAnchor: Xl,
  title: Zl,
  type: Ql,
  properties: ed
}, nd = "https://json-schema.org/draft/2020-12/schema", rd = "https://json-schema.org/draft/2020-12/meta/meta-data", od = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, id = "meta", sd = "Meta-data vocabulary meta-schema", ad = ["object", "boolean"], cd = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, ld = {
  $schema: nd,
  $id: rd,
  $vocabulary: od,
  $dynamicAnchor: id,
  title: sd,
  type: ad,
  properties: cd
}, dd = "https://json-schema.org/draft/2020-12/schema", ud = "https://json-schema.org/draft/2020-12/meta/validation", fd = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, pd = "meta", hd = "Validation vocabulary meta-schema", md = ["object", "boolean"], gd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, yd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, $d = {
  $schema: dd,
  $id: ud,
  $vocabulary: fd,
  $dynamicAnchor: pd,
  title: hd,
  type: md,
  properties: gd,
  $defs: yd
};
var Li;
function vd() {
  if (Li) return Tn;
  Li = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = pl, t = _l, n = Rl, r = Il, o = Gl, i = td, s = ld, a = $d, c = ["/properties"];
  function d(f) {
    return [
      e,
      t,
      n,
      r,
      o,
      _(this, i),
      s,
      _(this, a)
    ].forEach((g) => this.addMetaSchema(g, void 0, !1)), this;
    function _(g, w) {
      return f ? g.$dataMetaSchema(w, c) : w;
    }
  }
  return Tn.default = d, Tn;
}
var qi;
function bd() {
  return qi || (qi = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ hc(), r = /* @__PURE__ */ tl(), o = /* @__PURE__ */ rl(), i = /* @__PURE__ */ vd(), s = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), r.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: w, meta: b } = this.opts;
        b && (i.default.call(this, w), this.refs["http://json-schema.org/schema"] = s);
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
    var f = /* @__PURE__ */ Gr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var _ = /* @__PURE__ */ Zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  })(It, It.exports)), It.exports;
}
var wd = /* @__PURE__ */ bd();
const _d = /* @__PURE__ */ Za(wd), Sd = "https://json-schema.org/draft/2020-12/schema", Cd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", kd = "gufe-viz payload", Ed = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", xd = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Pd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Xr = {
  $schema: Sd,
  $id: Cd,
  title: kd,
  description: Ed,
  oneOf: xd,
  $defs: Pd
}, Dp = [
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
], Zr = Xr.$id, Qr = new _d({ allErrors: !0, strict: !1 });
Qr.addSchema(Xr, Zr);
const Vi = Qr.getSchema(Zr), Ls = Object.entries(Xr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Lp = Ls, eo = /* @__PURE__ */ new Map();
for (const e of Ls) {
  const t = Qr.getSchema(`${Zr}#/$defs/${e}`);
  t && eo.set(e, t);
}
const Mr = { valid: !0, issues: [] };
function Tr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Ad(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? eo.get(t) : void 0;
  return n ? n(e) ? Mr : { valid: !1, issues: Tr(n.errors) } : Vi(e) ? Mr : { valid: !1, issues: Tr(Vi.errors) };
}
function qp(e, t) {
  const n = eo.get(e);
  return n ? n(t) ? Mr : { valid: !1, issues: Tr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Rd(e, t = 8) {
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
  if (!to[t]) return Nd(t);
  const { valid: n, issues: r } = Ad(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Rd(r)
  };
}
function Nd(e) {
  const t = Object.keys(to).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Vp(e) {
  return qs(e)?.message ?? null;
}
class Md extends Ee {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ea("payload", n, this);
    const r = qs(n);
    if (r)
      return t.appendChild(Td(r, n)), {};
    const o = n.type, i = to[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Td(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(fe(e.message));
  const r = (i, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = Od(t);
  return o && n.appendChild(r(o, !1)), n;
}
function Od(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ge(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ge(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
xe("gufe-view", Md);
const mr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, no = {
  threeDmol: `https://unpkg.com/3dmol@${mr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${mr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${mr.d3}/+esm`
};
function ro(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Vs(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let Ze = null, ht = null;
function er() {
  if (ht) return ht;
  const e = ro("threeDmol");
  return e ? (ht = e.then((t) => Ze = t || window.$3Dmol), ht) : (ht = (async () => {
    if (window.$3Dmol) return Ze = window.$3Dmol;
    if (await Vs(no.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ze = window.$3Dmol;
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
let gr = null;
function Bs() {
  if (!gr) {
    const e = no.d3;
    gr = ro("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return gr;
}
function Us(e, t) {
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
    t.hint && !r && (r = !0, jd(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function Fd(e) {
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
const zd = 1600;
function jd(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, zd);
}
const Id = { min: 0.25, max: 12 }, Dd = 150;
function Bi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Dd) - t;
}
function Ld(e, t = Id) {
  const n = Bi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = Bi(e);
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
const qd = 2e-3;
function Hs(e) {
  return Math.exp(-e.deltaY * qd);
}
function nr(e, t, n = {}) {
  const r = Ld(t, n.bounds), o = Us(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(Hs(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function oo(e, t = "Reset view") {
  const n = T("button", _t, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const yr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Vd = [
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
], Bp = "hsv", U = [0, 0, 0], Bd = {
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
}, Ud = "rdkit", Hd = !0, Kd = !0, Gd = !0, Wd = !0, Jd = "rdkit", Yd = "filled", Xd = 0.42, Zd = 1.5, Qd = !0, eu = "show", tu = "mono", nu = 0.51, ru = 0.74, ou = 1.6, iu = 1.7, su = 5, au = 0.3, cu = "#d62828", lu = "#d62828", du = "#015ab5", uu = !1, fu = "", pu = "#7c3aed", hu = {
  layout: Ud,
  alignPair: Hd,
  atomNumbers: Kd,
  createdDestroyed: Gd,
  modified: Wd,
  style: Jd,
  circles: Yd,
  circleRadius: Xd,
  circleStroke: Zd,
  boundary: Qd,
  hydrogens: eu,
  elementColors: tu,
  numScale: nu,
  labelScale: ru,
  bondWidth: ou,
  markWidth: iu,
  haloWidth: su,
  haloOpacity: au,
  destroyedColor: cu,
  createdColor: lu,
  modifiedColor: du,
  stereo: uu,
  customSpec: fu,
  customColor: pu
}, mu = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: yr.uniqueAtom,
  createdColor: yr.uniqueAtom,
  modifiedColor: yr.elementChange,
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
}, gu = ["rdkit", "coordgen", "conformer"], yu = ["rdkit", "recolor", "halo"], $u = ["outline", "filled", "off"], vu = ["show", "dim", "hide"], bu = ["cpk", "mono"], wu = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, _u = /^#[0-9a-fA-F]{6}$/;
function At(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ye(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = wu[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const gt = (e, t) => typeof e == "boolean" ? e : t, On = (e, t) => typeof e == "string" && _u.test(e) ? e : t;
function Su(e) {
  const t = e && typeof e == "object" ? e : {}, n = mu;
  return {
    version: 1,
    layout: At(t.layout, gu, n.layout),
    alignPair: gt(t.alignPair, n.alignPair),
    style: At(t.style, yu, n.style),
    createdDestroyed: gt(t.createdDestroyed, n.createdDestroyed),
    modified: gt(t.modified, n.modified),
    destroyedColor: On(t.destroyedColor, n.destroyedColor),
    createdColor: On(t.createdColor, n.createdColor),
    modifiedColor: On(t.modifiedColor, n.modifiedColor),
    boundary: gt(t.boundary, n.boundary),
    circles: At(t.circles, $u, n.circles),
    circleRadius: Ye(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ye(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: At(t.hydrogens, vu, n.hydrogens),
    elementColors: At(t.elementColors, bu, n.elementColors),
    atomNumbers: gt(t.atomNumbers, n.atomNumbers),
    stereo: gt(t.stereo, n.stereo),
    numScale: Ye(t.numScale, "numScale", n.numScale),
    labelScale: Ye(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ye(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ye(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ye(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ye(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: On(t.customColor, n.customColor)
  };
}
const je = Su(hu);
function Ui(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (f) => {
      s !== "right" && t.add(f), s !== "left" && n.add(f);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const f = Math.min(+d[1], +d[2]), _ = Math.min(Math.max(+d[1], +d[2]), f + r - 1);
      for (let g = f; g <= _; g++) c(g);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function $r(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function Hi(e) {
  return `0x${e.replace("#", "")}`;
}
function Or(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Cu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function ku(e, t, n) {
  const r = new Set(t.atoms), o = new Set($r(e, r, !0));
  return {
    deletions: $r(e, r, n),
    changes: $r(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function Ki(e, t, n, r) {
  const o = ku(t, n, e.boundary), i = [];
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
let yt = null;
function Eu(e) {
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
function xu(e, t) {
  return e.style === "rdkit" ? "rdkit" : Eu(t) ? e.style : "rdkit";
}
function Pu(e, t, n, r, o, i) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Bd), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const w of n) {
    const b = Or(w.color);
    if (o === "rdkit") for (const u of w.bonds) d[u] = b;
    if (o === "recolor" && e.circles === "off") continue;
    const $ = o === "recolor" && e.circles === "filled" ? Cu(b, 0.7) : b;
    for (const u of w.atoms)
      a[u] = $, c[u] = e.circleRadius;
  }
  const f = Or(e.customColor);
  for (const w of r)
    w < i && (a[w] = f, c[w] = e.circleRadius);
  const _ = Object.keys(a).map(Number);
  _.length && (s.atoms = _, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const g = Object.keys(d).map(Number);
  return g.length && (s.bonds = g, s.highlightBondColors = d), s;
}
function Au(e, t, n, r) {
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
const Ru = "http://www.w3.org/2000/svg";
function Ks(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function io(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function Gs(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Gi(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of Ks(e, s)) {
      const c = a.style;
      Gs(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of io(e, s, !1)) a.style.fill = i;
}
function Nu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(Ru, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of Ks(e, a)) {
      if (Gs(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", i.appendChild(d);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function Mu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of io(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Tu(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of io(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Ou(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function Fu(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        Gi(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Mu(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && Tu(e, n, s.atoms, o, s.color);
      } else
        Nu(e, n, s.bonds, s.color), Gi(e, n, s.atoms, s.bonds, s.color, null);
  Ou(e, t, n);
}
const rr = `
`, Fr = "$$$$";
function zr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(rr);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let f = 0; f < o; f++) {
    const _ = n[4 + f];
    if (_ == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(_.substring(0, 10)) || 0,
      parseFloat(_.substring(10, 20)) || 0,
      parseFloat(_.substring(20, 30)) || 0
    ]), a.push(_.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let f = 0; f < (isFinite(i) ? i : 0); f++) {
    const _ = n[4 + o + f];
    if (_ == null) break;
    const g = parseInt(_.substring(0, 3), 10), w = parseInt(_.substring(3, 6), 10), b = parseInt(_.substring(6, 9), 10);
    !isFinite(g) || !isFinite(w) || c.push([g - 1, w - 1, isFinite(b) ? b : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function zu(e) {
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
  return r.push("M  END"), r.join(rr);
}
const ju = (e) => `${zu(e)}${rr}${Fr}`, Ws = (e) => e.indexOf(Fr) >= 0 ? e : `${e}${rr}${Fr}`;
function so(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Js(e, t, n, r, o) {
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
    return console.warn("[gufe-viz] depictSVG threw -", he(s)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
function Ys(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Wi = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], jr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, $t = (e) => e in jr, Ji = 400, vr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Iu extends Ee {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = T("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = T(
      "div",
      `${vr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${at.canvas2D};`
    );
    a.appendChild(c);
    const d = Ps();
    d.wrap.style.cssText = vr, a.appendChild(d.wrap);
    const f = T(
      "div",
      `${vr}overflow:auto;padding:16px 20px;background:${M.panelBg};color:${M.textPrimary};font-size:${Z.body};`
    );
    a.appendChild(f);
    const _ = r ? so(r) : null, g = [
      ["Name", o || it, !1],
      ["SMILES", i || it, !0],
      ["Charge", s == null ? it : String(s), !1],
      ["Atoms", _ ? String(_.atoms) : it, !1],
      ["Bonds", _ ? String(_.bonds) : it, !1]
    ], w = T("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${ee.xl} 20px;align-items:baseline;`);
    f.appendChild(w);
    for (const [N, j, L] of g) {
      w.appendChild(
        T(
          "div",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${M.textMuted2};`,
          N
        )
      );
      const F = T(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${M.textPrimary}` + (L ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};` : ""),
        j
      );
      F.title = j, w.appendChild(F);
    }
    const b = Ur(t), $ = T("div", Pr, o || "Unnamed molecule");
    b && a.appendChild($);
    const u = lt(
      "small-molecule.mode",
      "2d",
      Wi.map((N) => N.id)
    ), y = st("small-molecule.spin", !1);
    let p = u.get(), C = y.get(), v = null, l = null;
    const h = () => {
      try {
        v?.spin(C && $t(p) ? "y" : !1);
      } catch {
      }
    }, m = (N) => {
      p = N, c.style.visibility = p === "2d" ? "visible" : "hidden", d.wrap.style.visibility = $t(p) ? "visible" : "hidden", f.style.visibility = p === "info" ? "visible" : "hidden", $.style.display = p === "info" || !b ? "none" : "block", A.disabled = !$t(p), A.style.opacity = $t(p) ? "1" : "0.5", $t(p) && v && (v.setStyle({}, jr[p]), v.resize(), v.render()), h();
    }, k = T("div", ws), E = zt(Wi, p, (N) => m(N), u), A = xs(
      "Spin",
      C,
      (N) => {
        C = N, h();
      },
      { title: "Toggle continuous rotation", remember: y }
    );
    return E.insertBefore(A, E.lastElementChild), k.appendChild(E), a.appendChild(k), m(p), !r || !r.trim() ? (c.appendChild(fe("No molecule provided")), d.container.appendChild(fe("No molecule provided")), {}) : (c.appendChild(fe("Loading 2D depiction...")), tr().then((N) => {
      const j = Js(N, r, Ji, je.layout);
      j ? Ys(c, j, Ji) : c.replaceChildren(fe("Failed to parse molecule", !0));
    }).catch((N) => {
      c.replaceChildren(fe(`RDKit failed to load: ${he(N)}`, !0));
    }), d.container.appendChild(fe("Loading 3D viewer...")), er().then(() => {
      d.container.replaceChildren(), v = Ze.createViewer(d.container, { backgroundColor: at.viewer }), v.addModel(Ws(r), "sdf"), v.setStyle({}, jr[$t(p) ? p : "stick"]), v.zoomTo(), v.render(), l = nr(d.container, v), h();
    }).catch((N) => {
      d.container.replaceChildren(fe(`3D render failed: ${he(N)}`, !0));
    }), {
      onResize() {
        v && (v.resize(), v.render());
      },
      cleanup() {
        if (l?.cleanup(), l = null, !!v) {
          try {
            v.spin(!1);
          } catch {
          }
          try {
            v.clear();
          } catch {
          }
          v = null;
        }
      }
    });
  }
}
xe("gufe-small-molecule", Iu);
const Xs = ["HOH", "WAT", "SOL", "TIP3"], Yi = { hetflag: !1 }, Du = { hetflag: !0 }, Lu = { resn: Xs }, ze = {
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
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const f = c.slice(17, 20).trim(), _ = c.slice(21, 22).trim() || "_", g = c.slice(22, 26).trim(), w = c.slice(26, 27).trim();
    Xs.indexOf(f) !== -1 && i++, t.add(_), n.add(`${_}|${g}${w}|${f}`);
    const b = parseInt(g, 10);
    isNaN(b) || (b < s && (s = b), b > a && (a = b));
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
function Qs(e) {
  return `${kt(e.chains)} chains · ${kt(e.residues)} residues · ${kt(e.atoms)} atoms · ${kt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${kt(e.waters)} water)` : "");
}
function qu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Ir(e, t, n, r, o) {
  const i = r || (() => {
  }), s = qu(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(Yi),
    t.rep === "stick" ? { stick: { radius: ze.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: ze.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(Du),
    t.hetero ? {
      stick: { radius: ze.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: ze.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(Lu),
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
          Ze.SurfaceType.VDW,
          { opacity: ze.surfaceOpacity, ...s },
          a(Yi)
        )
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${he(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${he(c)}`, "error");
    }
  }, 30);
}
function Vu(e, t) {
  e.setStyle(t, {
    stick: { radius: ze.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: ze.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const Xi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Zi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
function ea(e) {
  const t = lt(
    "protein.representation",
    "cartoon",
    Xi.map((C) => C.id)
  ), n = lt(
    "protein.color",
    "chain",
    Zi.map((C) => C.id)
  ), r = st("protein.waters", e.waters), o = st("protein.hetero", !0), i = st("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = null, c = null;
  const d = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const f = T("div", ma);
  d.appendChild(f);
  const _ = T("div", ga);
  d.appendChild(_);
  const g = ({ label: C, controls: v }) => {
    const l = T("div", "display:flex;flex-direction:column;gap:6px;min-width:0;");
    l.appendChild(
      T(
        "span",
        `font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted};`,
        C
      )
    );
    for (const h of v) l.appendChild(h);
    return l;
  }, b = Kr(f, () => {
    const C = T("div", `${qr}height:100%;padding-top:${ya};`), v = zt(
      Xi,
      s.rep,
      (E) => {
        s.rep = E, e.restyle();
      },
      t
    );
    v.style.cssText += "flex-wrap:wrap;", C.appendChild(g({ label: "Style", controls: [v] }));
    const l = Gn(
      Zi,
      s.color,
      (E) => {
        s.color = E, e.restyle();
      },
      n
    );
    l.style.cssText += "width:100%;box-sizing:border-box;", C.appendChild(g({ label: "Color", controls: [l] }));
    const h = T("div", "display:flex;flex-wrap:wrap;gap:4px;"), m = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [E, A, N, j, L] of m)
      h.appendChild(
        xs(
          A,
          s[E],
          (F) => {
            s[E] = F, L();
          },
          { title: N, remember: j }
        )
      );
    C.appendChild(g({ label: "Show", controls: [h] }));
    const k = oo(() => e.reset ? e.reset() : c?.reset());
    return k.style.cssText += "width:100%;box-sizing:border-box;", C.appendChild(g({ label: "Camera", controls: [...e.camera?.() ?? [], k] })), C;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: st(`protein${Hr}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    }
  }), $ = Ur(e.element) ? e.title || e.fallbackTitle : "";
  $ && f.appendChild(
    T("div", `${bs}pointer-events:none;font-size:${Z.heading};font-weight:${me.bold};`, $)
  ), d.appendChild(b.panel);
  const u = Ps();
  d.appendChild(u.wrap);
  const y = T(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
  );
  return u.wrap.appendChild(y), {
    opts: s,
    pane: u,
    menu: b,
    showStatus: (C, v) => {
      if (C == null) {
        y.style.display = "none";
        return;
      }
      y.textContent = C, y.style.display = "block";
      const l = v === "error";
      y.style.background = l ? M.warnBg : M.toolbarBg, y.style.color = l ? M.warnFg : M.textMuted, y.style.border = `1px solid ${l ? M.warnBorder : M.toolbarBorder}`;
    },
    setStats: (C) => {
      _.textContent = C;
    },
    viewer: () => a,
    setViewer: (C) => {
      a = C;
    },
    interaction: () => c,
    setInteraction: (C) => {
      c = C;
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
class Bu extends Ee {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Ir(a, s.opts, o, s.showStatus);
    }
    const s = ea({
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
      restyle: i
    });
    if (!r || !r.trim())
      return s.showStatus("No protein data - waiting for a PDB payload."), {};
    try {
      o = Zs(r), s.setStats(Qs(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${he(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), er().then(() => {
      const a = Ze.createViewer(s.pane.container, { backgroundColor: at.viewer });
      s.setViewer(a), a.addModel(r, "pdb"), Ir(a, s.opts, o, s.showStatus), a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(nr(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${he(a)}`, "error");
    }), s.handle;
  }
}
xe("gufe-protein", Bu);
function Ct(e) {
  const t = /* @__PURE__ */ new Map();
  return Dr(e, t, /* @__PURE__ */ new Set()), t;
}
function Dr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Dr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Dr(o, t, n);
}
function We(e, t) {
  return t ? e.get(t) : void 0;
}
function Se(e, t, n) {
  const r = We(e, t);
  return r?.type === n ? r : void 0;
}
function ao(e, t) {
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
const co = "Cmd/Ctrl-click to select several.";
function Uu(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : et(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function Hu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Qi(e, t)), navigator.clipboard || Qi(e, t);
}
function Qi(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Ku(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ta(e) {
  const { words: t } = e, n = lt(e.setting, "names", ["names", "keys"]), r = T("div", "display:flex;flex-direction:column;gap:6px;"), o = T("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${M.textMuted};`);
  o.appendChild(T("span", "", "copy as"));
  const i = Gn(
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
  const s = T("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`), a = (f) => {
    s.textContent = f;
  }, c = T("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [f, _, g] of d) {
    const w = T("button", `${_t}flex:1;`, _.button);
    w.title = g, w.onclick = (b) => {
      const $ = i.value, u = Uu(e.nodes, e.edges, e.selected, f, $);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : f === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${co}` : "Nothing to copy."
        );
        return;
      }
      const y = u.split(`
`).length;
      b.shiftKey ? (Ku(u, `selected-${_.plural}.txt`), a(`Saved ${y} ${_.plural} to a file.`)) : (Hu(u, r), a(
        f === "edges" ? `Copied ${y} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(w);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(T("div", `font-size:${Z.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const na = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(na, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function es(e, t) {
  const n = document.createElementNS(na, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Gu = 3;
function ra(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const Wu = { min: 0.15, max: 5 }, Ju = 1e-9;
function oa(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Wu;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, d = () => {
    const F = e.getBoundingClientRect();
    return {
      width: F.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: F.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, f = (F, K, Y) => Math.min(1, K / (F.maxX - F.minX + r * 2), Y / (F.maxY - F.minY + r * 2)), _ = () => {
    const F = n.bounds();
    if (!F) return o.min;
    const { width: K, height: Y } = d();
    return Math.min(o.min, f(F, K, Y));
  }, g = (F) => Math.min(o.max, Math.max(_(), i * F)), w = () => {
    i = 1, s = 0, a = 0;
    const F = n.bounds();
    if (!F) {
      c();
      return;
    }
    const { width: K, height: Y } = d();
    i = f(F, K, Y), s = K / 2 - (F.minX + F.maxX) / 2 * i, a = Y / 2 - (F.minY + F.maxY) / 2 * i, c();
  }, $ = Us(e, {
    onZoom: (F) => {
      const K = e.getBoundingClientRect(), Y = F.clientX - K.left, oe = F.clientY - K.top, X = g(Hs(F)), W = X / i;
      return s = Y - (Y - s) * W, a = oe - (oe - a) * W, i = X, c(), Math.abs(W - 1) > Ju;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let y = null, p = null, C = !1, v = null;
  const l = (F) => ({
    x: F.clientX - s,
    y: F.clientY - a,
    from: { x: F.clientX, y: F.clientY }
  }), h = (F) => {
    F.pointerType === "touch" && u.size > 1 || (p = l(F), C = !1);
  }, m = (F) => {
    y || (v && F.pointerType === "touch" && (p = { x: v.x - s, y: v.y - a, from: v }, v = null), p && (Math.hypot(F.clientX - p.from.x, F.clientY - p.from.y) > Gu && (C = !0), s = F.clientX - p.x, a = F.clientY - p.y, c()));
  }, k = () => {
    p = null;
  };
  e.addEventListener("pointerdown", h), e.addEventListener("pointermove", m), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("pointerleave", k);
  const E = () => {
    const [F, K] = [...u.values()];
    return { cx: (F.x + K.x) / 2, cy: (F.y + K.y) / 2, span: Math.max(1, Math.hypot(F.x - K.x, F.y - K.y)) };
  }, A = (F) => {
    if (F.pointerType === "touch") {
      if (u.set(F.pointerId, { x: F.clientX, y: F.clientY }), u.size !== 2) {
        y = null;
        return;
      }
      y = E(), p = null, C = !0;
    }
  }, N = (F) => {
    if (F.pointerType !== "touch" || !u.has(F.pointerId) || (u.set(F.pointerId, { x: F.clientX, y: F.clientY }), !y || u.size !== 2)) return;
    F.preventDefault(), F.stopPropagation();
    const K = E(), Y = e.getBoundingClientRect(), oe = g(K.span / y.span), X = oe / i;
    s = K.cx - Y.left - (y.cx - Y.left - s) * X, a = K.cy - Y.top - (y.cy - Y.top - a) * X, i = oe, y = K, c();
  }, j = (F) => {
    if (F.pointerType !== "touch") return;
    if (u.delete(F.pointerId), u.size === 2) {
      y = E();
      return;
    }
    y = null;
    const [K] = [...u.values()];
    v = u.size === 1 && K ? { ...K } : null;
  };
  e.addEventListener("pointerdown", A, !0), e.addEventListener("pointermove", N, { capture: !0, passive: !1 }), e.addEventListener("pointerup", j, !0), e.addEventListener("pointercancel", j, !0);
  const L = Fd(e);
  return {
    fit: w,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: w,
    centreOn(F, K, Y = 1) {
      const { width: oe, height: X } = d();
      i = Math.max(i, Y), s = oe / 2 - F * i, a = X / 2 - K * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => C,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(F, K, Y) {
      i = F, s = K, a = Y, c();
    },
    cleanup() {
      $.cleanup(), L.cleanup(), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", m), e.removeEventListener("pointerup", k), e.removeEventListener("pointercancel", k), e.removeEventListener("pointerleave", k), e.removeEventListener("pointerdown", A, !0), e.removeEventListener("pointermove", N, { capture: !0 }), e.removeEventListener("pointerup", j, !0), e.removeEventListener("pointercancel", j, !0);
    }
  };
}
const Yu = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function ia(e) {
  const t = { ...e };
  for (const n of Yu) delete t[n];
  return t;
}
const Xu = 8, Zu = 64, Qu = () => new Promise((e) => setTimeout(e, 0));
function Lr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function ef(e, t, n, r) {
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
    return console.warn("[gufe-viz] SMARTS match threw -", he(i)), null;
  } finally {
    Lr(o);
  }
}
function sa(e, t, n = !0) {
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
    let _ = null;
    try {
      _ = f.get_qmol(a);
    } catch {
      _ = null;
    }
    if (!_) return { status: "invalid" };
    if (!_.get_substruct_matches)
      return Lr(_), { status: "unsupported" };
    const g = /* @__PURE__ */ new Map();
    let w = 0;
    try {
      let b = performance.now(), $ = 0;
      for (let u = 0; u < t.length; u++) {
        const y = t[u] ? ef(f, _, t[u], n) : null;
        if (y ? y.length && g.set(u, y) : w++, !(++$ < Zu && performance.now() - b < Xu)) {
          if (await Qu(), c !== o) return { status: "superseded" };
          $ = 0, b = performance.now();
        }
      }
    } finally {
      Lr(_);
    }
    return r.set(a, g), { status: "ok", matched: g, unreadable: w };
  }, cancel: () => void ++o };
}
const tf = 250;
function aa(e) {
  const t = T("div", "display:flex;flex-direction:column;gap:8px;"), n = T("input", `${Kn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = T("div", `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${M.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), tf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const nf = 1e-6;
function Fn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function ts(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function rf(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function ns(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const f = t[a * 3 + a], _ = t[c * 3 + c], g = (_ - f) / (2 * d);
      let w;
      Math.abs(g) > 1e10 ? w = 1 / (2 * g) : w = (g >= 0 ? 1 : -1) / (Math.abs(g) + Math.sqrt(g * g + 1));
      const b = 1 / Math.sqrt(1 + w * w), $ = w * b;
      t[a * 3 + a] = f - w * d, t[c * 3 + c] = _ + w * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== c) {
          const y = t[u * 3 + a], p = t[u * 3 + c];
          t[u * 3 + a] = b * y - $ * p, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = $ * y + b * p, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const y = n[u * 3 + a], p = n[u * 3 + c];
        n[u * 3 + a] = b * y - $ * p, n[u * 3 + c] = $ * y + b * p;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function of(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let v = 0; v < n; v++)
    r[0] += e[v][0], r[1] += e[v][1], r[2] += e[v][2], o[0] += t[v][0], o[1] += t[v][1], o[2] += t[v][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let v = 0; v < n; v++) {
    const l = e[v][0] - r[0], h = e[v][1] - r[1], m = e[v][2] - r[2], k = t[v][0] - o[0], E = t[v][1] - o[1], A = t[v][2] - o[2];
    i[0] += l * k, i[1] += l * E, i[2] += l * A, i[3] += h * k, i[4] += h * E, i[5] += h * A, i[6] += m * k, i[7] += m * E, i[8] += m * A;
  }
  const s = ts(i), a = Fn(s, i), c = Fn(i, s);
  let d = ns(a), f = ns(c);
  function _(v) {
    const l = [0, 1, 2].sort((m, k) => v.values[k] - v.values[m]), h = new Array(9);
    for (let m = 0; m < 3; m++) {
      const k = l[m];
      h[m] = v.vectors[k], h[3 + m] = v.vectors[3 + k], h[6 + m] = v.vectors[6 + k];
    }
    return {
      values: [v.values[l[0]], v.values[l[1]], v.values[l[2]]],
      vectors: h
    };
  }
  d = _(d), f = _(f);
  const g = d.vectors, w = f.vectors;
  for (let v = 0; v < 3; v++) {
    const l = g[v], h = g[3 + v], m = g[6 + v], k = i[0] * l + i[1] * h + i[2] * m, E = i[3] * l + i[4] * h + i[5] * m, A = i[6] * l + i[7] * h + i[8] * m, N = w[v], j = w[3 + v], L = w[6 + v];
    k * N + E * j + A * L < 0 && (w[v] = -N, w[3 + v] = -j, w[6 + v] = -L);
  }
  const b = ts(g);
  let $ = Fn(w, b);
  rf($) < 0 && (w[2] = -w[2], w[5] = -w[5], w[8] = -w[8], $ = Fn(w, b));
  const u = $[0] * o[0] + $[1] * o[1] + $[2] * o[2], y = $[3] * o[0] + $[4] * o[1] + $[5] * o[2], p = $[6] * o[0] + $[7] * o[1] + $[8] * o[2], C = d.values[1] > nf * d.values[0];
  return { R: $, t: [r[0] - u, r[1] - y, r[2] - p], determined: C };
}
function sf(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const rs = `
`, br = 4;
function os(e, t, n) {
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
function af(e, t, n) {
  const r = [], o = [];
  for (const [f, _] of n) {
    const g = e[_], w = t[f];
    !g || !w || (r.push(g), o.push(w));
  }
  if (r.length < 2) return null;
  const i = (f) => {
    let _ = 0, g = 0;
    for (const w of f)
      _ += w[0], g += w[1];
    return [_ / f.length, g / f.length];
  }, s = i(r), a = i(o);
  let c = null, d = -1 / 0;
  for (const f of [!1, !0]) {
    let _ = 0, g = 0;
    for (let p = 0; p < r.length; p++) {
      const C = (f ? -1 : 1) * (r[p][0] - s[0]), v = r[p][1] - s[1], l = o[p][0] - a[0], h = o[p][1] - a[1];
      _ += C * h - v * l, g += C * l + v * h;
    }
    const w = Math.hypot(_, g);
    if (w <= d) continue;
    d = w;
    const b = Math.atan2(_, g), $ = Math.cos(b), u = Math.sin(b), y = (f ? -1 : 1) * s[0];
    c = {
      cos: $,
      sin: u,
      mirror: f,
      tx: a[0] - ($ * y - u * s[1]),
      ty: a[1] - (u * y + $ * s[1])
    };
  }
  return c;
}
function cf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function lf(e, t, n) {
  const r = so(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(rs);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[br + i], a = t[i];
    if (s == null || !a) return e;
    o[br + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = br + r.atoms + a, d = o[c];
      if (d == null) break;
      const f = parseInt(d.substring(9, 12), 10);
      f !== 1 && f !== 6 || (o[c] = d.substring(0, 9) + String(f === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(rs);
}
function df(e, t, n) {
  try {
    const r = (s) => zr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = af(o, r(e), n);
    return i ? lf(
      t,
      o.map((s) => cf(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function uf(e, t, n, r, o) {
  const i = os(e, t, r), s = os(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: df(i, s, o) };
}
const ff = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, pf = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function hf() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const wr = hf() ? ff : pf, is = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], _r = 420, mf = {
  mapped: null,
  element: je.modifiedColor,
  uniqueA: je.destroyedColor,
  uniqueB: je.createdColor
}, gf = 132, Ue = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Sr = { gap: 2.5, minLiftFraction: 0.6 }, yf = 24, Ot = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function ss(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function $f(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function vf(e, t, n) {
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
function ca(e, t) {
  const n = Se(t, e.componentA, "SmallMoleculeComponentViz"), r = Se(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: ao(t, [e.componentA, e.componentB]) };
}
function bf(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const i = of(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => sf(s, i.R, i.t)) } : t;
}
function as(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function wf(e, t) {
  const n = as(e), r = as(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Sr.gap, a = Sr.minLiftFraction * i + Sr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function _f(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Ot.minSpread ? r : Ot.minSpread) * Ot.spreadFactor;
}
function Sf(e, t) {
  const n = Vd, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const f = (g) => parseInt(g.slice(1 + d * 2, 3 + d * 2), 16), _ = Math.round(f(n[i]) + (f(n[s]) - f(n[i])) * a);
    c += _.toString(16).padStart(2, "0");
  }
  return c;
}
class Cf extends Ee {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Ct(n), o = Se(r, n.componentA, "SmallMoleculeComponentViz"), i = Se(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !i)
      return t.appendChild(
        fe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = et(o), a = et(i), c = $f(n);
    let d, f;
    try {
      d = zr(o.sdf, s), f = zr(i.sdf, a);
    } catch (W) {
      return t.appendChild(fe(`Could not read a molecule: ${he(W)}`, !0)), {};
    }
    f = bf(d, f, c);
    const _ = /* @__PURE__ */ new Map();
    for (const [W, q] of c) _.set(q, W);
    const g = ss(c, d.symbols, f.symbols), w = ss(_, f.symbols, d.symbols), b = Ur(t), $ = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild($);
    const u = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    $.appendChild(u);
    const y = lt("atom-mapping.mode", "plain", is.map((W) => W.id));
    let p = y.get();
    const C = T(
      "div",
      ws
    );
    C.appendChild(
      zt(
        is,
        p,
        (W) => {
          p = W, X();
        },
        y
      )
    ), $.appendChild(C);
    let v = [], l = 0, h = !0;
    const m = () => {
      l && cancelAnimationFrame(l), l = 0;
      for (const W of v) {
        W.interaction?.cleanup();
        try {
          W.viewer?.clear();
        } catch {
        }
      }
      v = [], u.replaceChildren();
    }, k = (W) => {
      const q = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), R = T("div", "flex:1;position:relative;min-height:0;");
      R.dataset.gufeViewer = "", q.appendChild(R), b && q.appendChild(T("div", Pr, W)), u.appendChild(q);
      const D = { container: R, viewer: null, interaction: null };
      return v.push(D), D;
    }, E = () => {
      if (v.length < 2) return;
      const W = v.map(() => "");
      let q = !1;
      const R = () => {
        if (h) {
          if (!q)
            for (let D = 0; D < v.length; D++) {
              const O = v[D].viewer;
              if (!O) continue;
              const S = JSON.stringify(O.getView());
              if (S !== W[D]) {
                q = !0;
                for (let x = 0; x < v.length; x++)
                  x !== D && v[x].viewer && (v[x].viewer.setView(O.getView()), v[x].viewer.render()), W[x] = S;
                q = !1;
                break;
              }
            }
          l = requestAnimationFrame(R);
        }
      };
      l = requestAnimationFrame(R);
    }, A = (W, q) => {
      const R = Ze.createViewer(W.container, { backgroundColor: at.viewer });
      for (const { mol: D } of q) R.addModel(ju(D), "sdf");
      return W.viewer = R, R;
    }, N = (W) => {
      W.viewer && (W.interaction = nr(W.container, W.viewer));
    }, j = () => {
      for (const W of [d, f]) {
        const q = k(W.name), R = A(q, [{ mol: W }]);
        R.setStyle(
          {},
          { stick: { radius: Ue.stick, colorscheme: "Jmol" }, sphere: { scale: Ue.sphere, colorscheme: "Jmol" } }
        ), R.zoomTo(), R.render(), N(q);
      }
      E();
    }, L = () => {
      const W = je, q = Ui(W.customSpec), R = [
        { mol: d, uniques: g, side: "left", custom: q.left },
        { mol: f, uniques: w, side: "right", custom: q.right }
      ];
      for (const D of R) {
        const O = k(D.mol.name), S = A(O, [{ mol: D.mol }]);
        S.setStyle(
          {},
          { stick: { radius: Ue.stick, color: wr.core }, sphere: { scale: Ue.sphere, color: wr.core } }
        );
        const x = (I, V) => {
          S.addStyle(
            { serial: I },
            {
              stick: { radius: Ue.markStick, color: Hi(V) },
              sphere: { scale: Ue.markSphere, color: Hi(V) }
            }
          );
        };
        for (const I of Ki(W, D.mol, D.uniques, D.side))
          for (const V of I.atoms) x(V, I.color);
        for (const I of D.custom)
          I < D.mol.symbols.length && x(I, W.customColor);
        S.zoomTo(), S.render(), N(O);
      }
      E();
    }, F = () => {
      const W = k(`${s} (left), both overlaid (middle), ${a} (right)`), q = _f(d.coords, f.coords), R = (re, te) => ({
        ...re,
        coords: re.coords.map(([P, z, B]) => [P + te, z, B])
      }), D = R(d, -q), O = R(f, q), S = A(W, [{ mol: D }, { mol: O }, { mol: d }, { mol: f }]);
      S.setStyle({}, { stick: {} });
      const x = Array.from(c);
      x.forEach(([re, te], P) => {
        const z = D.coords[re], B = O.coords[te];
        if (!z || !B) return;
        const J = Sf(P, x.length);
        for (const [H, Q, ne] of [z, B])
          S.addSphere({
            center: { x: H, y: Q, z: ne },
            radius: Ot.sphereRadius,
            color: J,
            alpha: Ot.sphereAlpha
          });
      }), S.zoomTo();
      const { clientWidth: I, clientHeight: V } = W.container, G = I - 2 * yf;
      G > 0 && G < V && S.zoom(G / V), S.render(), N(W);
    }, K = () => {
      const W = k(`${s} to ${a}  (${c.size} mapped pairs)`), { axis: q, lift: R } = wf(d.coords, f.coords), D = {
        ...f,
        coords: f.coords.map((x) => {
          const I = [x[0], x[1], x[2]];
          return I[q] += R, I;
        })
      }, O = A(W, [{ mol: d }, { mol: D }]), S = {
        stick: { radius: Ue.stick, colorscheme: "Jmol" },
        sphere: { scale: Ue.pairSphere, colorscheme: "Jmol" }
      };
      O.setStyle({ model: 0 }, S), O.setStyle({ model: 1 }, S);
      for (const [x, I] of c) {
        const V = d.coords[x], G = D.coords[I];
        !V || !G || O.addCylinder({
          start: { x: V[0], y: V[1], z: V[2] },
          end: { x: G[0], y: G[1], z: G[2] },
          radius: Ue.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: wr.pairLine
        });
      }
      O.zoomTo(), q === 2 ? O.rotate(90, "x") : q === 0 && O.rotate(-90, "z"), O.render(), N(W);
    }, Y = () => {
      const W = je, q = Ui(W.customSpec), D = [
        { mol: d, uniques: g, side: "left", custom: q.left },
        { mol: f, uniques: w, side: "right", custom: q.right }
      ].map((O) => {
        const S = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), x = T(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${at.canvas2D};`
        );
        return x.appendChild(fe("Loading 2D depiction...")), S.appendChild(x), b && S.appendChild(T("div", Pr, O.mol.name)), u.appendChild(S), { box: x, side: O };
      });
      tr().then((O) => {
        const S = xu(W, O), x = uf(O, o.sdf, i.sdf, W.layout, W.alignPair ? c : null);
        for (const { box: I, side: V } of D) {
          const G = Ki(W, V.mol, V.uniques, V.side), re = Pu(
            W,
            _r,
            G,
            V.custom,
            S,
            V.mol.symbols.length
          ), te = Au(O, V.side === "left" ? x.left : x.right, _r, re);
          if (I.replaceChildren(), !te) {
            I.appendChild(fe("Failed to parse molecule", !0));
            continue;
          }
          Ys(I, te, _r);
          const P = I.querySelector("svg");
          P && Fu(P, V.mol, W, G, V.custom, S);
        }
      }).catch((O) => {
        for (const { box: S } of D)
          S.replaceChildren(fe(`RDKit failed to load: ${he(O)}`, !0));
      });
    }, oe = () => {
      const W = T(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(W);
      const q = T("div", "display:flex;flex-direction:column;gap:2px;");
      q.appendChild(
        T(
          "div",
          `font-size:${Z.title};font-weight:${me.bold};color:${Ie.title};`,
          n.name || `${s} to ${a}`
        )
      ), W.appendChild(q);
      const R = vf(c, d.symbols, f.symbols), D = T("div", Re.row), O = [];
      let S = null;
      const x = (H, Q, ne, ue) => {
        const le = T("button", `${Re.plain}${Re.button}`);
        le.type = "button", le.appendChild(Me(H, String(Q), ue)), le.onclick = () => {
          S = S === ne ? null : ne, B();
        }, O.push({ button: le, kinds: ne }), D.appendChild(le);
      }, I = (H, Q) => {
        const ne = T("span", Re.plain);
        ne.appendChild(Me(H, Q)), D.appendChild(ne);
      };
      x("mapped atoms", c.size, ["mapped", "element"]), x("element changes", g.elements.length, ["element"], je.modifiedColor), x(`unique to ${s}`, g.atoms.length, ["uniqueA"], je.destroyedColor), x(`unique to ${a}`, w.atoms.length, ["uniqueB"], je.createdColor), I(`atoms in ${s}`, String(d.symbols.length)), I(`atoms in ${a}`, String(f.symbols.length)), I("score", n.score == null ? it : n.score.toFixed(3)), W.appendChild(D), W.appendChild(T("div", Ar, "Correspondence"));
      const V = T("div", Rr);
      W.appendChild(V);
      const G = T(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${gf}px,1fr));gap:${ee.xs} ${ee.md};font-family:${Z.mono};font-size:${Z.small};color:${Ie.primary};`
      );
      W.appendChild(G);
      const re = String(Math.max(d.symbols.length, f.symbols.length, 1) - 1).length, te = (H, Q) => `${(H == null ? it : String(H)).padStart(re)} ${Q.padEnd(2)}`, P = (H) => {
        if (H.kind === "uniqueA") return `${s} atom ${H.a} ${H.symbolA} maps to nothing`;
        if (H.kind === "uniqueB") return `${a} atom ${H.b} ${H.symbolB} maps to nothing`;
        const Q = H.kind === "element" ? ", an element change" : "";
        return `${s} atom ${H.a} ${H.symbolA} maps to ${a} atom ${H.b} ${H.symbolB}${Q}`;
      }, z = (H) => {
        const Q = T(
          "div",
          `white-space:pre;padding:${ee.xs} ${ee.md};border-radius:${Te.sm};background:${at.card};border-left:3px solid ${mf[H.kind] ?? "transparent"};`,
          `${te(H.a, H.symbolA)} -> ${te(H.b, H.symbolB)}`
        );
        return Q.title = P(H), Q.dataset.gufeRelation = H.kind, Q;
      }, B = () => {
        const H = S, Q = H ? R.filter((ne) => H.includes(ne.kind)) : R;
        G.replaceChildren(...Q.map(z)), Q.length || G.appendChild(
          T("div", `${Rr}grid-column:1/-1;`, S ? "No atoms of that kind." : "This mapping has no atoms.")
        ), V.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (S ? "; click the chip again for all of them" : "");
        for (const ne of O) {
          const ue = ne.kinds === S;
          ne.button.style.cssText = `${Re.plain}${ue ? Re.active : Re.button}`, ne.button.setAttribute("aria-pressed", String(ue)), ne.button.title = ue ? "Show every atom" : "Show only these atoms";
        }
      };
      B();
      const J = Object.entries(n.annotations ?? {}).filter(([H]) => H !== "score");
      if (J.length) {
        W.appendChild(T("div", Ar, "Annotations"));
        const H = T("div", `${va}color:${Ie.faint};`);
        for (const [Q, ne] of J)
          H.appendChild(T("div", "", `${Q}: ${String(ne)}`));
        W.appendChild(H);
      }
    }, X = () => {
      if (m(), p === "info") {
        oe();
        return;
      }
      if (p === "2d") {
        Y();
        return;
      }
      u.appendChild(fe("Loading 3D viewer...")), er().then(() => {
        h && (u.replaceChildren(), p === "colored" ? L() : p === "openfe" ? F() : p === "lines" ? K() : j());
      }).catch((W) => {
        u.replaceChildren(fe(`3D render failed: ${he(W)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const W of v)
          W.viewer && (W.viewer.resize(), W.viewer.render());
      },
      cleanup() {
        h = !1, m();
      }
    };
  }
}
xe("gufe-atom-mapping", Cf);
const cs = ["Force-directed", "Circular", "Radial"], kf = "ligand-network", Ef = "Click a ligand or an edge to see it.";
function xf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Pf(e) {
  return ia(e);
}
const ls = (e) => Math.round(e * 100) / 100;
function Af(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function Rf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Rt = { initial: 0.58, min: 0.25, max: 0.8 }, Ne = 38, zn = 200, Nf = 4, Mf = 14, Tf = 18, _e = {
  fontSize: 11,
  below: Ne + 12,
  minFontSize: 7,
  insideWidth: (Ne - 6) * 2
}, Tt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, ds = 1.5, Of = 6.5, Ff = 0.9, zf = 14, Cr = { size: 8, clearance: 8 }, jf = { fontSize: 10 }, If = 0.4, Df = Or(M.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, Lf = 3, wt = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], qf = (e) => wt.find((t) => e >= t.from) ?? wt[wt.length - 1], Vf = (e) => wt[Math.min(wt.indexOf(e) + 1, wt.length - 1)], jn = 200, Bf = 24, kr = { node: 0.12, edge: 0.06 }, Uf = 1.8, us = 2 * Ne + 68, Ce = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: us,
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
  collisionPadding: us / 2 - Ne,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Hf(e) {
  const t = T(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function Kf(e) {
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
      refX: Ne + Cr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Cr.size,
      markerHeight: Cr.size,
      orient: "auto"
    });
    return i.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function Gf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Wf(e) {
  const [t, n] = M.netEdgeRamp.map(Gf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ke = et, Jf = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e, Yf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), Xf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Zf = (e) => Xf.has(Yf(e));
function Qf(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (b) => (e.matched().get(b) ?? []).join(","), i = (b, $) => {
    if (t.has($) || n.has($)) return;
    const u = e.nodes[$], y = e.matched().get($), p = u.sdf && Js(
      b,
      u.sdf,
      zn,
      je.layout,
      y && { atoms: y, color: Df, radius: If }
    );
    if (!p) {
      n.add($);
      return;
    }
    const C = new DOMParser().parseFromString(p, "image/svg+xml").documentElement;
    if (!C || C.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const v = (Ne - Nf) * 2 / zn, l = e.depictionGroups[$];
    l.setAttribute(
      "transform",
      `translate(${-v * zn / 2},${-v * zn / 2}) scale(${v})`
    );
    let h = 0;
    for (const m of Array.from(C.childNodes)) {
      if (m.nodeType !== 1) continue;
      const k = m.nodeName.toLowerCase();
      k === "defs" || k === "metadata" || k === "title" || k === "rect" && Zf(m) || (l.appendChild(document.importNode(m, !0)), h++);
    }
    h ? (t.add($), r[$] = o($)) : n.add($);
  }, s = () => {
    for (const b of [...t])
      r[b] !== o(b) && (e.depictionGroups[b].replaceChildren(), t.delete(b));
  }, a = [], c = (b, $) => {
    if (a[b]) return a[b];
    $.setAttribute("font-size", String(_e.fontSize));
    let u = 0;
    try {
      u = $.getBBox().width;
    } catch {
      return _e.fontSize;
    }
    if (!u) return _e.fontSize;
    const y = _e.fontSize * _e.insideWidth / u;
    return a[b] = Math.max(_e.minFontSize, Math.min(_e.fontSize, y)), a[b];
  }, d = [], f = (b) => {
    const $ = e.captionPlates[b];
    if (d[b] === _e.below) {
      $.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[b].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      $.setAttribute("display", "none");
      return;
    }
    $.setAttribute("x", String(u.x - Tt.captionPadX)), $.setAttribute("y", String(u.y - Tt.captionPadY)), $.setAttribute("width", String(u.width + Tt.captionPadX * 2)), $.setAttribute("height", String(u.height + Tt.captionPadY * 2)), $.setAttribute("display", "inline"), d[b] = _e.below;
  }, _ = (b, $) => {
    const u = $.structure && !t.has(b) ? Vf($) : $;
    e.depictionGroups[b].setAttribute("display", u.structure ? "inline" : "none"), e.plates[b].setAttribute("display", u.structure ? "inline" : "none");
    const y = e.matched().has(b), p = e.circles[b];
    p.setAttribute("fill", u.disc ? y ? M.netMatchFill : M.netNodeFill : "none"), p.setAttribute("stroke", u.disc ? y ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[b].setAttribute("display", u.initials ? "inline" : "none");
    const C = e.captions[b], v = u.name === "below";
    if (C.setAttribute("fill", y ? M.netMatchStroke : v ? M.netDepictCaption : M.netNodeCaption), C.setAttribute("display", u.name === "none" ? "none" : "inline"), v || e.captionPlates[b].setAttribute("display", "none"), u.name === "none") return;
    const l = u.name === "inside";
    C.setAttribute("y", l ? "0" : String(_e.below)), C.setAttribute("dominant-baseline", l ? "middle" : "auto"), C.setAttribute("font-size", String(l ? c(b, C) : _e.fontSize)), v && f(b);
  };
  let g = null;
  return { apply: (b, $, u) => {
    const y = qf(b);
    g = y, e.stage.setAttribute("data-detail", y.id), e.edgeLabels.setAttribute("display", y.edgeScores ? "inline" : "none");
    for (let l = 0; l < e.nodes.length; l++) _(l, y);
    if (!y.structure) return;
    const { width: p, height: C } = e.viewport(), v = [];
    e.nodes.forEach((l, h) => {
      if (t.has(h) || n.has(h)) return;
      const m = l.x * b + $, k = l.y * b + u;
      m < -jn || k < -jn || m > p + jn || k > C + jn || v.push(h);
    }), v.length && e.rdkit().then((l) => {
      if (!(!l || g !== y))
        for (const h of v)
          i(l, h), _(h, y);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function ep(e) {
  const t = bt("ligand-network.query"), n = Vr("ligand-network.minScore", 0, 0, 1), r = T("div", qr), o = T("input", `${Kn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const i = aa({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: bt("ligand-network.smarts"),
    run: ($) => e.match($),
    describe: ($) => {
      const u = $.unreadable ? `, ${$.unreadable} could not be read` : "";
      return `${$.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(i.element);
  const s = T("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${M.textMuted};`), a = T("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), c = T("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(T("span", "", "score >=")), s.appendChild(c), s.appendChild(a), r.appendChild(s);
  const d = T("div", `font-size:${Z.small};color:${M.textMuted2};`);
  r.appendChild(d);
  const f = T("div", ys);
  r.appendChild(f), r.appendChild(T("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`, co));
  const _ = ta({
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
  const g = T("button", `${_t}width:100%;`, "Clear selection");
  g.onclick = () => {
    e.selected.clear(), b(), e.refresh();
  }, r.appendChild(g);
  const w = ($) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? Ke($).toLowerCase().includes(u) || ($.smiles ?? "").toLowerCase().includes(u) || $["gufe-key"].toLowerCase().includes(u) : !0;
  }, b = () => {
    _.clearNote(), f.replaceChildren();
    const $ = e.nodes.map((u, y) => ({ node: u, index: y })).filter(({ node: u }) => w(u));
    d.textContent = `${$.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: y } of $) {
      const p = u["gufe-key"], C = T(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(p) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(p) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), v = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ke(u));
      v.title = `${Ke(u)}
${u.smiles ?? ""}`, C.appendChild(v), C.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(p) ? e.selected.delete(p) : e.selected.add(p) : (e.selected.clear(), e.selected.add(p), e.focus(y)), b(), e.refresh();
      }, f.appendChild(C);
    }
    $.length || f.appendChild(T("div", `font-size:${Z.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), b(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, b(), i.apply(), r;
}
class tp extends Ee {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Ct(n), o = [];
    let i = 0;
    for (const P of n.nodes ?? []) {
      const z = Se(r, P, "SmallMoleculeComponentViz");
      if (!z) {
        i++;
        continue;
      }
      o.push({ ...z, x: 0, y: 0 });
    }
    const s = new Map(o.map((P) => [P["gufe-key"], P])), a = [];
    let c = 0;
    for (const P of n.edges ?? []) {
      const z = s.get(P.componentA), B = s.get(P.componentB);
      if (!z || !B) {
        c++;
        continue;
      }
      a.push({ ...P, index: a.length, from: z, to: B });
    }
    const d = St(n.name || "Ligand network");
    d.statsEl.appendChild(Me("ligands", String(o.length))), d.statsEl.appendChild(Me("mappings", String(a.length))), t.appendChild(d);
    const f = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const _ = /* @__PURE__ */ new Set(), g = { minScore: 0 }, w = { text: "" };
    let b = () => {
    }, $ = null;
    const u = () => $ ??= tr().catch((P) => (console.warn("[gufe-viz] RDKit failed to load:", he(P)), null)), y = sa(
      u,
      o.map((P) => P.sdf ?? "")
    );
    let p = /* @__PURE__ */ new Map(), C = () => {
    };
    const v = async (P) => {
      const z = await y.run(P);
      return z.status === "superseded" || (p = z.status === "ok" ? z.matched : /* @__PURE__ */ new Map(), C()), z;
    }, l = Kr(
      d,
      () => ep({
        nodes: o,
        edges: a,
        selected: _,
        filter: g,
        query: w,
        refresh: () => b(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (P) => {
          K(P), re({ kind: "ligand", index: P });
        },
        match: (P) => v(P)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => te(),
        remember: st("ligand-network.menuOpen", !1)
      }
    );
    l.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", f.appendChild(l.panel);
    let h = () => {
    };
    const m = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), k = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`);
    f.appendChild(m), f.appendChild(
      As(f, m, k, {
        min: Rt.min,
        max: Rt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Vr("ligand-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (P) => Rs(l.panel, P)
      })
    ), f.appendChild(k);
    const E = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    m.appendChild(E);
    const A = lt("ligand-network.layout", "Force-directed", cs), N = this.#n(
      (P) => te(P),
      () => I(),
      A
    );
    m.appendChild(N.bar);
    const j = this.#e(k, r);
    if (!o.length)
      return E.appendChild(
        fe(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), j.message("Nothing to show."), {};
    i && ct(
      E,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && ct(E, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const L = u(), F = Hf(E);
    let K = () => {
    };
    const Y = Af(xa(kf), o.length);
    let oe = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const P = Y.selectedKind ?? "edge";
      Y.selected < (P === "ligand" ? o.length : a.length) && (X = { kind: P, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, R = null, D = A.get(), O = !1, S = !0, x = () => {
    }, I = () => {
    }, V = 0;
    const G = () => {
      if (!X) {
        j.message(a.length ? Ef : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? j.showMapping(a[X.index]) : j.showLigand(o[X.index]);
    }, re = (P) => {
      X = P, G(), x();
    }, te = (P = D) => {
      const z = q && P === D ? W() : null, B = ++V;
      D = P, R?.(), R = null, E.querySelectorAll("svg").forEach((ne) => ne.remove());
      const J = E.clientWidth || 800, H = E.clientHeight || 600;
      np(o, J, H, D, a), Y && Rf(o, Y.nodes);
      const Q = () => {
        if (!S || B !== V) return;
        const ne = this.#t(E, o, a, J, H, re, L, F);
        x = () => ne.setSelected(X), I = ne.reset, R = ne.cleanup, K = (le) => ne.focusOn(le), W = ne.transform, b = () => {
          const le = w.text.trim().toLowerCase(), ge = _.size > 0 || le.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Pe of o) {
            const Le = Pe["gufe-key"], tt = _.has(Le) || le.length > 0 && (Ke(Pe).toLowerCase().includes(le) || (Pe.smiles ?? "").toLowerCase().includes(le) || Le.toLowerCase().includes(le));
            (!ge || tt) && pe.add(Le);
          }
          const De = /* @__PURE__ */ new Set();
          a.forEach((Pe, Le) => {
            (Pe.score ?? 0) < g.minScore || !pe.has(Pe.from["gufe-key"]) || !pe.has(Pe.to["gufe-key"]) || De.add(Le);
          });
          const ve = ge || g.minScore > 0;
          ne.setEmphasis(ve ? pe : null, ve ? De : null);
        }, C = () => ne.setMatches(p), x(), b(), C();
        const ue = oe ?? z;
        ue ? (ne.setTransform(ue.scale, ue.tx, ue.ty), oe = null) : ne.fit(), q = !0;
      };
      if (D !== "Force-directed" || O || Y) {
        Q();
        return;
      }
      rp(o, a, J, H).then((ne) => {
        if (!(!S || B !== V)) {
          if (ne) {
            Q();
            return;
          }
          O = !0, N.picker.value = "Circular", ct(E, "d3 could not be loaded - showing the circular layout instead"), te("Circular");
        }
      }, Q);
    };
    return h = () => te(), te(), G(), {
      onResize: () => te(),
      cleanup: () => {
        S = !1, y.cancel(), F.remove(), R?.();
      },
      viewState: () => ({
        nodes: o.map((P) => [ls(P.x), ls(P.y)]),
        ...W(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = T(
      "div",
      $s.bottom
    ), i = T("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${M.textMuted};`);
    i.appendChild(T("span", "", "score")), i.appendChild(
      T(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), i.appendChild(T("span", "", "0 -> 1")), o.appendChild(i), o.appendChild(T("label", `font-size:${Z.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const s = Gn(
      cs.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(s), o.appendChild(oo(n, "Reset pan and zoom")), { bar: o, picker: s };
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
    const r = T("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = (s) => r.replaceChildren(fe(s)), i = (s, a) => {
      const c = document.createElement(s);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => i("gufe-atom-mapping", ca(xf(s), n)),
      showLigand: (s) => i("gufe-small-molecule", Pf(s)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, i, s, a, c) {
    const d = ce("svg", {
      class: "gufe-graph",
      width: o,
      height: i,
      style: "display:block;touch-action:none;"
    }), f = ce("g");
    d.appendChild(f), t.appendChild(d);
    const _ = ce("defs"), g = Kf(_);
    d.appendChild(_);
    const w = [], b = ce("g"), $ = ce("g"), u = ce("g", { "pointer-events": "none" }), y = ce("g");
    f.append(b, $, u, y);
    for (const F of r) {
      const K = Wf(F.score), Y = ds + (F.score ?? 0.5) * (Of - ds), oe = ce("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = ce("line", {
        stroke: K,
        "stroke-width": Y,
        "stroke-opacity": Ff,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${g(K)})`,
        "pointer-events": "none"
      }), W = ce("line", { stroke: "transparent", "stroke-width": zf, style: "cursor:pointer;" });
      W.addEventListener("click", (D) => {
        D.stopPropagation(), s({ kind: "edge", index: F.index });
      }), W.addEventListener("mousemove", (D) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Ge(Ke(F.from))} -&gt; ${Ge(Ke(F.to))}</div>` + (F.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${F.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          D.offsetX,
          D.offsetY
        );
      }), W.addEventListener("mouseleave", () => c.hide()), w.push(oe), b.append(oe, X), $.appendChild(W);
      const q = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": jf.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      q.textContent = F.score == null ? "" : F.score.toFixed(2);
      const R = ce("g", { class: "gufe-edge-label" });
      R.appendChild(q), u.appendChild(R);
    }
    const p = [], C = [], v = [], l = [], h = [], m = [], k = [], E = n.map((F) => {
      const K = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      K.addEventListener("mousemove", (O) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Ge(Ke(F))}</div>` + (F.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ge(F.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${Ge(F["gufe-key"])}</div><div style="margin-top:4px;font-size:${Z.tiny};color:${M.textMuted2};">Click to see the ligand</div>`,
          O.offsetX,
          O.offsetY
        );
      }), K.addEventListener("mouseleave", () => c.hide());
      const Y = ce("circle", {
        class: "gufe-node-halo",
        r: Ne + Nt.padding,
        fill: "none",
        stroke: M.netHaloColor,
        "stroke-width": Nt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      K.appendChild(Y), h.push(Y);
      const oe = ce("circle", {
        class: "gufe-node-disc",
        r: Ne,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      K.appendChild(oe), C.push(oe);
      const X = ce("circle", {
        class: "gufe-node-plate",
        r: Ne,
        fill: M.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      K.appendChild(X), v.push(X);
      const W = ce("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      K.appendChild(W), p.push(W);
      const q = ce("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Tf,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      q.textContent = Ke(F).slice(0, 2).toUpperCase(), K.appendChild(q), m.push(q);
      const R = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: _e.below,
        "font-size": _e.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      R.textContent = Jf(Ke(F), Mf), R.setAttribute("display", "none"), k.push(R);
      const D = ce("rect", {
        class: "gufe-node-caption-plate",
        rx: Tt.captionRadius,
        fill: M.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return l.push(D), K.appendChild(D), K.appendChild(R), y.appendChild(K), K;
    }), A = () => {
      r.forEach((F, K) => {
        for (const oe of [w[K], b.children[K * 2 + 1], $.children[K]]) {
          const X = oe;
          X.setAttribute("x1", String(F.from.x)), X.setAttribute("y1", String(F.from.y)), X.setAttribute("x2", String(F.to.x)), X.setAttribute("y2", String(F.to.y));
        }
        u.children[K].setAttribute(
          "transform",
          `translate(${(F.from.x + F.to.x) / 2},${(F.from.y + F.to.y) / 2 - 8})`
        );
      }), n.forEach((F, K) => E[K].setAttribute("transform", `translate(${F.x},${F.y})`));
    };
    A();
    let N = /* @__PURE__ */ new Map();
    const j = Qf({
      nodes: n,
      circles: C,
      plates: v,
      captionPlates: l,
      matched: () => N,
      captions: k,
      initials: m,
      depictionGroups: p,
      edgeLabels: u,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), L = this.#r(
      d,
      f,
      n,
      E,
      A,
      j.apply,
      (F) => s({ kind: "ligand", index: F })
    );
    return {
      setSelected(F) {
        const K = F?.kind === "edge" ? F.index : -1, Y = F?.kind === "ligand" ? F.index : -1;
        w.forEach((oe, X) => oe.setAttribute("opacity", X === K ? String(Nt.opacity) : "0")), h.forEach((oe, X) => oe.setAttribute("opacity", X === Y ? String(Nt.opacity) : "0"));
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
      setMatches(F) {
        N = F, j.forget();
        const { scale: K, tx: Y, ty: oe } = L.transform();
        j.apply(K, Y, oe);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(F, K) {
        E.forEach((Y, oe) => {
          const X = !F || F.has(n[oe]["gufe-key"]);
          Y.setAttribute("opacity", X ? "1" : String(kr.node));
        }), r.forEach((Y, oe) => {
          const X = !K || K.has(oe), W = X ? "0.9" : String(kr.edge);
          b.children[oe * 2 + 1].setAttribute("stroke-opacity", W), u.children[oe].setAttribute("opacity", X ? "1" : String(kr.edge));
        });
      },
      focusOn(F) {
        const K = n[F];
        K && L.centreOn(K.x, K.y);
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
    const c = oa(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => ra(r, Ne),
      margin: Bf,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, f) => {
      let _ = null, g = !1;
      d.addEventListener("pointerdown", (b) => {
        b.stopPropagation();
        const { scale: $ } = c.transform();
        _ = { x: b.clientX - r[f].x * $, y: b.clientY - r[f].y * $ }, g = !1, d.setPointerCapture(b.pointerId);
      }), d.addEventListener("pointermove", (b) => {
        if (!_) return;
        if (c.gesturing()) {
          _ = null, g = !0;
          return;
        }
        const { scale: $ } = c.transform(), u = (b.clientX - _.x) / $, y = (b.clientY - _.y) / $;
        Math.hypot(u - r[f].x, y - r[f].y) * $ > Lf && (g = !0), r[f].x = r[f].fx = u, r[f].y = r[f].fy = y, i();
      });
      const w = () => {
        _ = null;
      };
      d.addEventListener("pointerup", w), d.addEventListener("pointercancel", w), d.addEventListener("click", (b) => {
        b.stopPropagation(), g || a(f);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, f) => c.centreOn(d, f, Uf)
    };
  }
}
function np(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, d) => {
    c.forEach((f, _) => {
      const g = 2 * Math.PI * _ / Math.max(1, c.length) - Math.PI / 2;
      f.x = i + d * Math.cos(g), f.y = s + d * Math.sin(g), f.fx = r === "Force-directed" ? void 0 : f.x, f.fy = r === "Force-directed" ? void 0 : f.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map(($) => [$["gufe-key"], []]));
    for (const $ of o)
      c.get($.from["gufe-key"]).push($.to["gufe-key"]), c.get($.to["gufe-key"]).push($.from["gufe-key"]);
    const d = new Map(e.map(($) => [$["gufe-key"], $])), f = e.reduce(
      ($, u) => c.get(u["gufe-key"]).length > c.get($["gufe-key"]).length ? u : $
    ), _ = /* @__PURE__ */ new Set([f["gufe-key"]]);
    let g = [f["gufe-key"]], w = 0;
    const b = Math.min(t, n) * 0.18;
    for (; g.length; ) {
      a(
        g.map((u) => d.get(u)),
        w === 0 ? 0 : w * b + 40
      );
      const $ = [];
      for (const u of g)
        for (const y of c.get(u))
          _.has(y) || (_.add(y), $.push(y));
      g = $, w++;
    }
    a(e.filter(($) => !_.has($["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function rp(e, t, n, r) {
  let o;
  try {
    if (o = await Bs(), typeof o?.forceSimulation != "function") return !1;
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
xe("gufe-ligand-network", tp);
const op = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function la(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = We(t, o);
    i && (op.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function ip(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const fs = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], sp = 0.4;
class ap extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = la(n, Ct(n)), o = r.structures.map((g, w) => w), i = r.ligands.map((g, w) => r.structures.length + w), s = lt(
      "complex.focus",
      "site",
      fs.map((g) => g.id)
    );
    let a = s.get(), c = null;
    const d = ea({
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
        zt(
          fs,
          a,
          (g) => {
            a = g, _();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => _()
    });
    function f() {
      const g = d.viewer();
      g && (Ir(g, d.opts, c, d.showStatus, { model: o }), Vu(g, { model: i }), g.render());
    }
    function _() {
      const g = d.viewer();
      g && (a === "site" && i.length ? (g.zoomTo({ model: i }), g.zoom(sp)) : g.zoomTo(), g.render(), d.interaction()?.cleanup(), d.setInteraction(nr(d.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(ps(r, () => c));
    try {
      c = Zs(r.structures[0].pdb), d.setStats(ps(r, () => c));
    } catch (g) {
      d.showStatus(`PDB parse error: ${he(g)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), er().then(() => {
      const g = Ze.createViewer(d.pane.container, { backgroundColor: at.viewer });
      d.setViewer(g);
      for (const w of r.structures) g.addModel(w.pdb, "pdb");
      for (const w of r.ligands) g.addModel(Ws(w.sdf), "sdf");
      f(), _(), g.spin(d.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      d.showStatus(`Failed to render structure: ${he(g)}`, "error");
    }), d.handle;
  }
}
function ps(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = so(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? `${r} | ${Qs(o)}` : r;
}
xe("gufe-complex", ap);
function cp(e, t) {
  return { ...e, registry: ao(t, Object.values(e.components ?? {})) };
}
const lp = "chemical-system.component";
function dp(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function up(e) {
  return e.type === "UnknownComponentViz" ? Wn(e.gufe_type) : null;
}
class fp extends Ee {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ct(n), o = [], i = [];
    for (const [m, k] of Object.entries(n.components ?? {})) {
      const E = We(r, k);
      E ? o.push([m, E]) : i.push(m);
    }
    const s = St(n.name || "Chemical system");
    if (s.statsEl.appendChild(Me("components", String(o.length))), t.appendChild(s), !o.length)
      return t.appendChild(
        fe(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), i.length && ct(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const c = T(
      "div",
      `flex:0 0 200px;min-width:0;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
    );
    a.appendChild(c);
    const d = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(d);
    const f = T("div", "flex:1;min-height:0;display:flex;");
    d.appendChild(f);
    const _ = document.createElement("gufe-view");
    _.style.cssText = "flex:1;min-width:0;min-height:0;", _.setAttribute(Nr, ""), f.appendChild(_);
    const g = la(n, r), w = ip(g), b = (m) => w && g.structures.some((k) => k === m), $ = o.filter(([, m]) => !b(m)).map(([m, k]) => ({
      key: m,
      title: m,
      subtitle: dp(k),
      badge: up(k),
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
        subtitle: `${g.ligands.length === 1 ? g.ligands[0].name || "ligand" : "ligands"} in ${g.structures[0].name || "structure"}`,
        badge: null,
        element: m,
        point: () => {
        }
      });
    }
    let u = null;
    const y = (m) => {
      u !== m && (f.replaceChildren(m), u = m);
    }, p = bt(lp), C = [], v = (m) => {
      C.forEach((k, E) => {
        const A = E === m;
        k.style.background = A ? M.cardBgActive : M.cardBg, k.style.borderColor = A ? M.cardBorderActive : M.cardBorder;
      }), $[m].point(), y($[m].element);
    }, l = (m) => {
      p.set($[m].key), v(m);
    };
    $.forEach((m, k) => {
      const E = T(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;width:100%;box-sizing:border-box;`
      );
      E.appendChild(T("span", `font-weight:700;color:${M.textPrimary};`, m.title)), E.appendChild(T("span", `font-size:${Z.small};color:${M.textMuted};`, m.subtitle)), m.badge && E.appendChild(m.badge), E.onclick = () => l(k), C.push(E), c.appendChild(E);
    });
    const h = $.findIndex((m) => m.key === p.get());
    return v(h < 0 ? 0 : h), {
      onResize: () => u?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => u?.remove()
    };
  }
}
xe("gufe-chemical-system", fp);
const pp = 460, hp = 210, mp = "42%";
function gp(e, t) {
  const n = Se(t, e.stateA, "ChemicalSystemViz"), r = Se(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: ao(t, o) };
}
const lo = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function yp(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function $p(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function vp(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Er(e, t, n) {
  const r = T(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${ee.md};padding:5px ${ee.lg};border-radius:${Te.md};background:${M.cardBg};border:1px solid ${M.cardBorder};`
  );
  n && r.appendChild(
    T(
      "span",
      `flex:0 0 auto;font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;color:${M.textMuted2};`,
      n
    )
  );
  const o = vp(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(T("span", `font-size:${Z.body};color:${M.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? M.cardBorder : lo[t];
  const i = T(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:600;color:${M.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Wn(o.type)), r;
}
function bp(e, t, n, r) {
  const o = T("div", `display:flex;flex-direction:column;gap:${ee.sm};min-width:0;`), i = T("div", `display:flex;align-items:center;gap:${ee.md};min-width:0;`);
  i.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${lo[t]};`)
  );
  const s = T(
    "span",
    `min-width:0;font-size:${Z.body};font-weight:${me.bold};color:${M.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Er(n, t, null)), o) : (o.appendChild(Er(n, t, "A")), o.appendChild(Er(r, t, "B")), o);
}
function wp(e, t) {
  const n = We(t, e.componentA), r = We(t, e.componentB);
  return `${n ? et(n) : "A"} to ${r ? et(r) : "B"}`;
}
class _p extends Ee {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Ct(n), o = Se(r, n.stateA, "ChemicalSystemViz"), i = Se(r, n.stateB, "ChemicalSystemViz"), s = Se(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = St(n.name || "Transformation");
    if (c.statsEl.appendChild(Me("protocol", s?.gufe_type || s?.name || "-")), c.statsEl.appendChild(Me("mappings", String(a.length))), t.appendChild(c), !o || !i)
      return t.appendChild(
        fe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const d = $p(o, i), f = T("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(f);
    const _ = T(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${M.panelBg};`
    );
    f.appendChild(_);
    const g = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    f.appendChild(g);
    const w = T("div", `display:flex;flex-direction:column;gap:${ee.xs};`);
    for (const [v, l] of [
      ["State A", o],
      ["State B", i]
    ])
      w.appendChild(
        T(
          "div",
          `min-width:0;font-size:${Z.small};font-weight:${me.bold};letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};overflow-wrap:anywhere;`,
          `${v}${l.name ? ` - ${l.name}` : ""}`
        )
      );
    _.appendChild(w);
    const b = /* @__PURE__ */ new Set();
    for (const v of d) {
      const l = o.components?.[v], h = i.components?.[v], m = yp(l, h);
      b.add(m), _.appendChild(
        bp(
          v,
          m,
          We(r, l),
          We(r, h)
        )
      );
    }
    if (b.size > 1) {
      const v = T(
        "div",
        `display:flex;flex-wrap:wrap;gap:${ee.lg} 12px;padding-top:${ee.sm};font-size:${Z.small};color:${M.textMuted};`
      );
      for (const l of ["unchanged", "changed", "added", "removed"])
        b.has(l) && v.appendChild(Me(l, "", lo[l]));
      _.appendChild(v);
    }
    const $ = T("div", vs, "Atom mapping");
    g.appendChild($);
    let u = null;
    const y = Ka(t, (v) => {
      const l = v > 0 && v < pp;
      l !== u && (u = l, f.style.flexDirection = l ? "column" : "row", _.style.flex = l ? "0 0 auto" : `0 0 ${hp}px`, _.style.maxWidth = l ? "none" : mp, _.style.maxHeight = l ? "45%" : "none", _.style.borderRight = l ? "none" : `1px solid ${M.splitBorder}`, _.style.borderBottom = l ? `1px solid ${M.splitBorder}` : "none", $.style.display = l ? "block" : "none");
    });
    if (!a.length)
      return g.appendChild(
        fe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: y };
    const p = document.createElement("gufe-atom-mapping");
    p.style.cssText = "flex:1;min-height:0;min-width:0;";
    const C = (v) => {
      p.payload = ca(a[v], r);
    };
    if (C(0), a.length > 1) {
      const v = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      v.appendChild(
        zt(
          a.map((l, h) => ({
            id: String(h),
            label: l.name || wp(l, r)
          })),
          "0",
          (l) => C(Number(l))
        )
      ), g.appendChild(v);
    }
    return g.appendChild(p), {
      onResize: () => p.resize?.(),
      cleanup: () => {
        y(), p.remove();
      }
    };
  }
}
xe("gufe-transformation", _p);
const He = { width: 148, height: 46, radius: 10 }, In = { width: 2, selectedWidth: 3.5, hit: 20 }, vt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Mt = { initial: 0.56, min: 0.25, max: 0.78 }, Sp = 24, hs = { x: He.width / 2, y: He.height / 2 }, ms = { node: 0.12, edge: 0.06 }, Cp = 1.4, kp = 3, Un = et;
function Ep(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function xp(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = We(t, r);
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
function Pp(e, t) {
  const n = { fill: M.cardBg, stroke: M.cardBorder }, r = e.map((s) => xp(s, t)), o = [...new Set(r)];
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
function Ap(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = We(t, o);
    if (!i) continue;
    n.push(et(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function Rp(e, t) {
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
function Np(e) {
  const t = bt("alchemical-network.query"), n = bt("alchemical-network.composition"), r = T("div", qr), o = T("input", `${Kn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const i = aa({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: bt("alchemical-network.smarts"),
    run: (g) => e.match(g),
    describe: (g) => {
      const w = g.unreadable ? `, ${g.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${w}`;
    }
  });
  if (r.appendChild(i.element), e.compositions.length > 1) {
    const g = T("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${M.textMuted};`);
    g.appendChild(T("span", "flex-shrink:0;", "made of"));
    const w = Gn(
      [{ id: "", label: "anything" }, ...e.compositions.map((b) => ({ id: b, label: b }))],
      "",
      (b) => {
        e.filter.composition = b, _(), e.refresh();
      },
      n
    );
    w.style.cssText += "flex:1;min-width:0;", e.filter.composition = w.value, g.appendChild(w), r.appendChild(g);
  }
  const s = T("div", `font-size:${Z.small};color:${M.textMuted2};`);
  r.appendChild(s);
  const a = T("div", ys);
  r.appendChild(a), r.appendChild(T("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`, co));
  const c = ta({
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
  const d = T("button", `${_t}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), _(), e.refresh();
  }, r.appendChild(d);
  const f = (g) => {
    const w = e.query.text.trim().toLowerCase();
    if (w && !e.haystacks[g].includes(w) || e.filter.composition && e.signatures[g] !== e.filter.composition) return !1;
    const b = e.matched();
    return !(b && !b.has(g));
  }, _ = () => {
    c.clearNote(), a.replaceChildren();
    const g = e.nodes.map((w, b) => ({ node: w, index: b })).filter(({ index: w }) => f(w));
    s.textContent = `${g.length} of ${e.nodes.length} systems`;
    for (const { node: w, index: b } of g) {
      const $ = w["gufe-key"], u = e.selected.has($), y = T(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? M.cardBorderActive : M.cardBorder};background:${u ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), p = e.colorOf(b);
      y.appendChild(
        T(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${p.fill};border:1px solid ${p.stroke};`
        )
      );
      const C = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Un(w));
      C.title = `${Un(w)}
${e.signatures[b]}`, y.appendChild(C), y.onclick = (v) => {
        v.shiftKey || v.metaKey || v.ctrlKey ? e.selected.has($) ? e.selected.delete($) : e.selected.add($) : (e.selected.clear(), e.selected.add($), e.focus(b)), _(), e.refresh();
      }, a.appendChild(y);
    }
    g.length || a.appendChild(T("div", `font-size:${Z.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), _(), e.refresh();
  }, _(), e.mounted(_), i.apply(), r;
}
function Mp(e, t, n) {
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
async function Tp(e, t, n, r) {
  let o;
  try {
    if (o = await Bs(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance(vt.linkDistance).strength(vt.linkStrength)
  ).force("charge", o.forceManyBody().strength(vt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(vt.collisionRadius).iterations(vt.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * vt.tickMultiplier; c++) s.tick();
  return !0;
}
class Op extends Ee {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Ct(n), o = [];
    let i = 0;
    for (const V of n.nodes ?? []) {
      const G = Se(r, V, "ChemicalSystemViz");
      if (!G) {
        i++;
        continue;
      }
      o.push({ ...G, x: 0, y: 0 });
    }
    const s = new Map(o.map((V) => [V["gufe-key"], V])), a = [];
    let c = 0;
    for (const V of n.edges ?? []) {
      const G = s.get(V.stateA), re = s.get(V.stateB);
      if (!G || !re) {
        c++;
        continue;
      }
      a.push({ ...V, index: a.length, from: G, to: re });
    }
    const d = (V) => {
      const G = Se(r, V.protocol, "ProtocolViz");
      return G?.gufe_type || G?.name || "";
    }, f = new Set(a.map(d).filter(Boolean)), _ = St(n.name || "Alchemical network");
    _.statsEl.appendChild(Me("systems", String(o.length))), _.statsEl.appendChild(Me("transformations", String(a.length))), f.size && _.statsEl.appendChild(Me("protocol", [...f].join(", "))), t.appendChild(_);
    const g = Pp(o, r), w = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    let b = () => {
    };
    const $ = /* @__PURE__ */ new Set(), u = { composition: "" }, y = { text: "" };
    let p = () => {
    }, C = () => {
    }, v = () => {
    };
    const l = o.map((V) => Ap(V, r));
    let h = null;
    const m = () => h ??= tr().catch((V) => (console.warn("[gufe-viz] RDKit failed to load:", he(V)), null)), k = Rp(o, r), E = sa(m, k.sources);
    let A = null, N = () => {
    };
    const j = async (V) => {
      const G = await E.run(V);
      return G.status === "superseded" || (A = G.status === "ok" ? new Set(o.flatMap((re, te) => k.perNode[te].some((P) => G.matched.has(P)) ? [te] : [])) : null, N(), p()), G;
    }, L = Kr(
      _,
      () => Np({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: g.signatures,
        colorOf: g.colorOf,
        compositions: g.compositions,
        selected: $,
        filter: u,
        query: y,
        refresh: () => p(),
        matched: () => A,
        match: (V) => j(V),
        mounted: (V) => {
          N = V;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (V) => {
          C(V), v(V);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => b(),
        remember: st("alchemical-network.menuOpen", !1)
      }
    );
    L.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", w.appendChild(L.panel);
    const F = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), K = T("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`), Y = T("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`);
    F.appendChild(Y), w.appendChild(F), w.appendChild(
      As(w, F, K, {
        min: Mt.min,
        max: Mt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Vr("alchemical-network.canvasShare", Mt.initial, Mt.min, Mt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => b(),
        onOrient: (V) => Rs(L.panel, V)
      })
    ), w.appendChild(K);
    const oe = this.#e(K, r);
    if (!o.length)
      return Y.appendChild(
        fe(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), oe.message("Nothing to show."), { cleanup: () => oe.cleanup() };
    i && ct(
      Y,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && ct(
      Y,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, W = !1, q = null, R = () => {
    }, D = () => {
    }, O = () => {
    }, S = 0;
    F.appendChild(this.#n(g.legend, () => D()));
    const x = (V, G) => {
      q = { kind: V, index: G }, oe.show(V === "node" ? o[G] : a[G], V), R();
    };
    v = (V) => x("node", V);
    const I = () => {
      const V = ++S, G = Y.clientWidth || 800, re = Y.clientHeight || 600;
      Mp(o, G, re);
      const te = () => {
        if (!X || V !== S) return;
        O(), Y.querySelectorAll("svg").forEach((z) => z.remove());
        const P = this.#t(Y, o, a, G, re, g.colorOf, x);
        O = P.cleanup, D = P.reset, C = (z) => P.focusOn(z), R = () => P.setSelected(q), R(), p = () => {
          const z = y.text.trim().toLowerCase();
          if (!($.size > 0 || z.length > 0 || u.composition !== "" || A !== null)) {
            P.setEmphasis(null, null);
            return;
          }
          const J = z.length > 0 || u.composition !== "" || A !== null, H = /* @__PURE__ */ new Set();
          o.forEach((ne, ue) => {
            const le = J && (!z || l[ue].includes(z)) && (!u.composition || g.signatures[ue] === u.composition) && (!A || A.has(ue));
            ($.has(ne["gufe-key"]) || le) && H.add(ne["gufe-key"]);
          });
          const Q = /* @__PURE__ */ new Set();
          a.forEach((ne, ue) => {
            H.has(ne.from["gufe-key"]) && H.has(ne.to["gufe-key"]) && Q.add(ue);
          }), P.setEmphasis(H, Q);
        }, p();
      };
      if (W) {
        te();
        return;
      }
      Tp(o, a, G, re).then((P) => {
        !X || V !== S || (P || (W = !0, ct(Y, "d3 could not be loaded - showing the circular layout instead")), te());
      }, te);
    };
    return b = I, I(), x("node", 0), {
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
    const r = T("div", $s.bottom);
    if (r.appendChild(oo(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(T("span", `font-size:${Z.small};color:${M.textMuted};`, "systems made of"));
    for (const [o, i] of t) {
      const s = T("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        T(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${i.fill};border:2px solid ${i.stroke};`
        )
      ), s.appendChild(
        T("span", `font-size:${Z.small};color:${M.textPrimary};overflow-wrap:anywhere;`, o)
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
    t.appendChild(T("div", vs, "Selected"));
    const r = T("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const i = (a) => r.replaceChildren(fe(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = cp(ia(a), n);
      else {
        const { index: f, from: _, to: g, ...w } = a;
        d = gp(w, n);
      }
      if (!d) {
        i("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = d, o.parentNode !== r && r.replaceChildren(o);
    }, message: i, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, i, s, a) {
    const c = ce("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(c);
    const d = ce("g");
    c.appendChild(d);
    const f = ce("g"), _ = ce("g");
    d.append(f, _);
    const g = oa(c, d, {
      bounds: () => ra(n, hs.x, hs.y),
      margin: Sp,
      hint: "Click the graph or hold Ctrl to zoom"
    }), w = (k, E) => {
      g.wasPan() || a(k, E);
    }, b = [], $ = [];
    r.forEach((k, E) => {
      const A = ce("line", {
        x1: k.from.x,
        y1: k.from.y,
        x2: k.to.x,
        y2: k.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": In.width,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      es(A, k.name || "transformation"), A.addEventListener("click", () => w("edge", E)), f.appendChild(A), b.push(A);
      const N = ce("line", {
        x1: k.from.x,
        y1: k.from.y,
        x2: k.to.x,
        y2: k.to.y,
        stroke: "transparent",
        "stroke-width": In.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      N.addEventListener("click", () => w("edge", E)), f.appendChild(N), $.push(N);
    });
    const u = n.map(() => []), y = new Map(n.map((k, E) => [k, E]));
    r.forEach((k, E) => {
      const A = y.get(k.from), N = y.get(k.to);
      A !== void 0 && u[A].push(E), N !== void 0 && N !== A && u[N].push(E);
    });
    const p = [], C = [], v = [], l = [], h = [];
    n.forEach((k, E) => {
      const A = s(E), N = ce("g", { style: "cursor:pointer;" });
      v.push(N);
      const j = ce("rect", {
        x: k.x - He.width / 2,
        y: k.y - He.height / 2,
        width: He.width,
        height: He.height,
        rx: He.radius,
        fill: A.fill,
        stroke: A.stroke,
        "stroke-width": 2
      });
      N.appendChild(j), p.push(j), C.push(A.stroke);
      const L = ce("text", {
        x: k.x,
        y: k.y - 2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      L.textContent = Ep(Un(k), 20), N.appendChild(L), l.push(L);
      const F = Object.keys(k.components ?? {}).length, K = ce("text", {
        x: k.x,
        y: k.y + 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      K.textContent = `${F} component${F === 1 ? "" : "s"}`, N.appendChild(K), h.push(K), es(N, Un(k)), _.appendChild(N);
    });
    const m = (k) => {
      const E = n[k];
      p[k].setAttribute("x", String(E.x - He.width / 2)), p[k].setAttribute("y", String(E.y - He.height / 2)), l[k].setAttribute("x", String(E.x)), l[k].setAttribute("y", String(E.y - 2)), h[k].setAttribute("x", String(E.x)), h[k].setAttribute("y", String(E.y + 14));
      for (const A of u[k])
        for (const N of [b[A], $[A]])
          r[A].from === E && (N.setAttribute("x1", String(E.x)), N.setAttribute("y1", String(E.y))), r[A].to === E && (N.setAttribute("x2", String(E.x)), N.setAttribute("y2", String(E.y)));
    };
    return v.forEach((k, E) => {
      let A = null, N = !1;
      k.addEventListener("pointerdown", (L) => {
        L.stopPropagation();
        const { scale: F } = g.transform();
        A = { x: L.clientX - n[E].x * F, y: L.clientY - n[E].y * F }, N = !1, k.setPointerCapture(L.pointerId);
      }), k.addEventListener("pointermove", (L) => {
        if (!A) return;
        if (g.gesturing()) {
          A = null, N = !0;
          return;
        }
        const { scale: F } = g.transform(), K = (L.clientX - A.x) / F, Y = (L.clientY - A.y) / F;
        Math.hypot(K - n[E].x, Y - n[E].y) * F > kp && (N = !0), n[E].x = n[E].fx = K, n[E].y = n[E].fy = Y, m(E);
      });
      const j = () => {
        A = null;
      };
      k.addEventListener("pointerup", j), k.addEventListener("pointercancel", j), k.addEventListener("click", (L) => {
        L.stopPropagation(), N || a("node", E);
      });
    }), g.fit(), {
      setSelected(k) {
        p.forEach((E, A) => {
          const N = k?.kind === "node" && k.index === A;
          E.setAttribute("stroke", N ? M.cardBorderActive : C[A]), E.setAttribute("stroke-width", N ? "3" : "2");
        }), b.forEach((E, A) => {
          const N = k?.kind === "edge" && k.index === A;
          E.setAttribute("stroke", N ? M.netHaloColor : M.netEdgeLine), E.setAttribute("stroke-width", String(N ? In.selectedWidth : In.width));
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
      setEmphasis(k, E) {
        v.forEach((A, N) => {
          const j = !k || k.has(n[N]["gufe-key"]);
          A.setAttribute("opacity", j ? "1" : String(ms.node));
        }), b.forEach((A, N) => {
          const j = !E || E.has(N);
          A.setAttribute("opacity", j ? "1" : String(ms.edge));
        });
      },
      focusOn(k) {
        const E = n[k];
        E && g.centreOn(E.x, E.y, Cp);
      },
      reset: g.reset,
      cleanup: g.cleanup
    };
  }
}
xe("gufe-alchemical-network", Op);
class Fp extends Ee {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = St(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const o = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = Br();
    return i.style.maxWidth = "460px", i.appendChild(qn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(qn("Name", n.name)), i.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
xe("gufe-protocol", Fp);
function zp(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function xr(e, t = !1) {
  const n = T(
    "div",
    `display:flex;flex-direction:column;gap:${ee.xl};padding:${ee.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${M.splitBorder};`)
  );
  return n.appendChild(T("div", Ar, e)), n;
}
function Dn(e) {
  return T(
    "div",
    `font-size:${Z.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
    e
  );
}
function gs(e, t) {
  const n = T("div", `display:flex;flex-direction:column;align-items:center;gap:${ee.sm};`);
  return n.appendChild(
    T(
      "span",
      `${Re.plain}${Re.outline}font-family:${Z.mono};font-size:${Z.body};`,
      e
    )
  ), n.appendChild(Dn(t)), n;
}
class jp extends Ee {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Br();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = xr("Solvent", !0), s = T("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = T("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = T(
      "div",
      `font-family:${Z.mono};font-size:${Z.display};font-weight:${me.bold};line-height:1.1;color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Dn("SMILES")), s.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const p = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      p.appendChild(
        T(
          "div",
          `font-size:${Z.body};color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), p.appendChild(Dn("Name")), s.appendChild(p);
    }
    i.appendChild(s), o.appendChild(i);
    const f = xr("Ions"), _ = T("div", `display:flex;align-items:flex-end;gap:${ee.xxl};flex-wrap:wrap;`);
    n.positive_ion && _.appendChild(gs(n.positive_ion, "cation")), n.negative_ion && _.appendChild(gs(n.negative_ion, "anion"));
    const { value: g, unit: w } = zp(n.ion_concentration), b = T("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), $ = T("div", `display:flex;align-items:baseline;gap:${ee.md};justify-content:flex-end;`);
    $.appendChild(
      T(
        "div",
        `font-size:${Z.display};font-weight:${me.bold};line-height:1;color:${M.titleColor};`,
        g
      )
    ), w && ($.appendChild(document.createTextNode(" ")), $.appendChild(T("div", `font-size:${Z.body};color:${M.textMuted};`, w))), b.appendChild($), b.appendChild(Dn("Ion concentration")), _.appendChild(b), f.appendChild(_), o.appendChild(f);
    const u = xr("Net charge"), y = n.neutralize;
    return u.appendChild(
      T(
        "span",
        `${Re.plain}align-self:flex-start;font-weight:${me.bold};` + (y ? `background:${M.okBg};color:${M.okFg};` : `${Re.outline}color:${M.textMuted};`),
        y ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      T(
        "div",
        Rr,
        y ? "Counter-ions are added on top of the concentration above, enough to cancel the net charge of the system." : "No counter-ions are added: the system keeps whatever net charge its components give it."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
xe("gufe-solvent", jp);
class Ip extends Ee {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = St(n.name || "Unnamed component");
    r.statsEl.appendChild(Wn(n.gufe_type)), t.appendChild(r);
    const o = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = Br();
    return i.style.maxWidth = "460px", i.appendChild(
      T(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      T(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(qn("Name", n.name || "(unnamed)")), i.appendChild(qn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
xe("gufe-unknown-component", Ip);
function Up(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Cs, reset: Ta });
export {
  Wa as CHROME_OPEN_BY_DEFAULT,
  wa as DEBUG_ATTRIBUTE,
  _a as DEBUG_GLOBAL,
  mu as DEFAULT_DEPICT_STYLE,
  Id as DEFAULT_ZOOM_BOUNDS,
  je as DEPICT_STYLE,
  wu as DEPICT_STYLE_RANGES,
  Op as GufeAlchemicalNetwork,
  Cf as GufeAtomMapping,
  fp as GufeChemicalSystem,
  ap as GufeComplex,
  Ee as GufeElement,
  tp as GufeLigandNetwork,
  Bu as GufeProtein,
  Fp as GufeProtocol,
  Iu as GufeSmallMolecule,
  jp as GufeSolvent,
  _p as GufeTransformation,
  Ip as GufeUnknownComponent,
  Md as GufeView,
  Nr as HIDE_NAME_ATTRIBUTE,
  yr as MAPPING_COLORS,
  Vd as MAPPING_RAMP_3D,
  Bp as MAPPING_RAMP_NAME,
  co as MULTI_SELECT_HINT,
  Dp as PAYLOAD_TYPES,
  Lp as SCHEMA_TYPES,
  to as VIEW_TAGS,
  af as align2D,
  df as alignedToPartner,
  sf as applyRT,
  cf as applyTurn,
  Ld as boundedZoom,
  Ct as buildRegistry,
  lt as choice,
  Kr as chromeMenu,
  Fd as claimGestures,
  la as complexPartsFor,
  _s as debugEnabled,
  xe as defineElement,
  qs as describeProblem,
  yp as diffStatus,
  Vp as dispatchProblem,
  ao as entriesFor,
  et as entryLabel,
  ta as exportBlock,
  ra as extentOf,
  st as flag,
  Rd as formatIssues,
  Us as guardWheel,
  ip as hasComplex,
  bf as inFrameOf,
  of as kabsch,
  os as laidOut,
  uf as layoutPair,
  wf as liftFor,
  Ea as logPayload,
  We as lookup,
  Se as lookupOfType,
  ca as mappingPayloadFor,
  Ki as markGroups,
  $r as markedBonds,
  Up as mount,
  Ur as nameWanted,
  Su as normaliseDepictStyle,
  Vr as num,
  Ka as onWidth,
  _f as openfeShift,
  Rs as orientMenuPanel,
  Sf as pairColour,
  Ui as parseAtomSpec,
  ka as payloadJson,
  oo as resetControl,
  Ta as resetSettings,
  oa as sceneCamera,
  Uu as selectionText,
  Hn as setting,
  Cs as settings,
  As as splitter,
  cp as systemPayloadFor,
  bt as textSetting,
  gp as transformationPayloadFor,
  ss as uniqueAtoms,
  ku as uniqueBonds,
  qp as validateAs,
  Ad as validatePayload,
  nr as viewerInteraction,
  Hs as wheelFactor,
  lf as withCoords
};
