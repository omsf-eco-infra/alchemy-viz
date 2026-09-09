const tt = {
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
function Va() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Us = Va(), M = Us ? tt.dark : tt.light, ee = {
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
  normal: "400",
  bold: "700"
}, ne = {
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
}, qe = {
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, Lt = {
  card: M.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg
}, we = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${ne.sm} 9px;font-size:${ee.small};font-weight:${me.bold};border-radius:${ze.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, Ba = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${ze.md};padding:${ne.sm} ${ne.lg};font-size:${ee.body};cursor:pointer;font-family:inherit;`, Hs = "24px", Ua = `display:flex;align-items:flex-start;gap:12px;padding:9px ${ne.xxl};flex-shrink:0;line-height:${Hs};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Kn = { min: "236px", max: "340px" }, Ze = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, to = `display:flex;flex-direction:column;gap:${ne.lg};flex:1;min-width:var(${Ze.min},${Kn.min});max-width:var(${Ze.max},${Kn.max});box-sizing:border-box;padding:${ne.xl};min-height:0;overflow-y:auto;background:${M.panelBg};border:0 solid ${M.splitBorder};border-right-width:var(${Ze.ruleX},1px);border-bottom-width:var(${Ze.ruleY},0);`, Ha = "45%", Ks = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Gs = {
  bottom: `display:flex;align-items:center;gap:${ne.xl};flex-wrap:wrap;padding:${ne.lg} ${ne.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, Ka = `flex-shrink:0;padding:${ne.sm} ${ne.xl};font-size:${ee.heading};font-weight:${me.bold};color:${M.labelFg};background:${M.labelBg};`, qr = `position:absolute;top:${ne.md};left:${ne.md};z-index:10;pointer-events:none;max-width:calc(100% - ${ne.xxl} - ${ne.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${ne.xs} ${ne.lg};border-radius:${ze.md};font-size:${ee.heading};font-weight:${me.bold};color:${M.labelFg};background:${M.labelBg};`, Ga = `padding:${ne.xs} ${ne.lg};border-radius:${ze.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${M.labelFg};background:${M.labelBg};`, Wa = `position:absolute;top:${ne.lg};left:${ne.lg};z-index:15;display:flex;align-items:center;gap:${ne.md};min-width:0;max-width:calc(100% - ${ne.xxl} - ${ne.xxl});`, Ja = "42px", Ya = `display:flex;flex-direction:column;gap:${ne.xs};padding:${ne.xxl} 18px;border-radius:${ze.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Ws = `position:absolute;bottom:${ne.xl};right:${ne.xl};display:flex;gap:${ne.sm};padding:${ne.sm};border-radius:${ze.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Xa = `font-family:${ee.mono};font-size:${ee.small};line-height:1.7;color:${M.textMuted};`, Vr = `font-size:${ee.small};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, Oe = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${ne.xs} ${ne.sm};font-size:${ee.small};`,
  plain: `display:inline-flex;align-items:center;padding:${ne.xs} ${ne.md};border:1px solid transparent;border-radius:${ze.pill};font-family:inherit;font-size:${ee.small};color:${M.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${M.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${M.btnBg};border-color:${M.btnBorder};color:${M.textPrimary};`,
  active: `cursor:pointer;background:${M.cardBgActive};border-color:${M.btnBorder};color:${M.textPrimary};`
}, Br = `font-size:${ee.small};line-height:1.6;color:${M.textMuted2};`, Za = ["debug", "gufe-debug"], Qa = "debug", ec = "GUFE_VIZ_DEBUG";
function tc() {
  return !!globalThis[ec];
}
function nc() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Za.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Js(e) {
  return e?.hasAttribute?.(Qa) ? !0 : tc() || nc();
}
function rc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function oc(e, t, n) {
  if (!Js(n)) return;
  const r = rc(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ys = "GUFE_VIZ_VIEW_STATE";
function ic(e) {
  const t = globalThis[Ys];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const sc = 150, Po = "data-gufe-shell";
class Re extends HTMLElement {
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Po}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), sc);
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
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
    ), this.#t.setAttribute(Po, ""), this.appendChild(this.#t), this.#t;
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
      t.appendChild(ge(this.placeholder()));
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(ge(`Failed to render: ${$e(r)}`, !0)));
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
const Pe = "gufe-viz:", nt = /* @__PURE__ */ new Map();
let Bt = null;
function ac() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function qt() {
  if (Bt === !1) return null;
  const e = ac();
  if (!e)
    return Bt = !1, null;
  try {
    const t = `${Pe}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Bt = !0, e;
  } catch {
    return Bt = !1, null;
  }
}
function cc(e) {
  const t = qt();
  if (!t) return nt.get(Pe + e) ?? null;
  try {
    return t.getItem(Pe + e);
  } catch {
    return null;
  }
}
function lc(e, t) {
  const n = qt();
  if (!n) {
    nt.set(Pe + e, t);
    return;
  }
  try {
    n.setItem(Pe + e, t);
  } catch {
    nt.set(Pe + e, t);
  }
}
function Xn(e, t, n) {
  return {
    key: e,
    get() {
      const r = cc(e);
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
        lc(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function pt(e, t, n) {
  return Xn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function dt(e, t) {
  return Xn(e, t, (n) => typeof n == "boolean");
}
function no(e, t, n = -1 / 0, r = 1 / 0) {
  return Xn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function kt(e, t = "") {
  return Xn(e, t, (n) => typeof n == "string");
}
function Xs() {
  const e = {}, t = qt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(nt.keys());
  for (const r of n) {
    if (!r.startsWith(Pe)) continue;
    const o = t ? t.getItem(r) : nt.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(Pe.length)] = JSON.parse(o);
      } catch {
        e[r.slice(Pe.length)] = o;
      }
  }
  return e;
}
function dc() {
  const e = {}, t = qt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(nt.keys());
  for (const r of n) {
    if (!r.startsWith(Pe)) continue;
    const o = t ? t.getItem(r) : nt.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function uc() {
  const e = qt();
  if (e)
    for (const t of Object.keys(Xs()))
      try {
        e.removeItem(Pe + t);
      } catch {
      }
  nt.clear();
}
const Zs = "https://framejs.app", Qs = 1e4;
function fc(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const pc = "/gufe-dev-bundle.js";
function hc() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Qs ? e : null;
}
async function mc() {
  const e = hc();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(pc);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Qs ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function gc() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function yc(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Pe)};`,
    `  const menuOpen = ${JSON.stringify(so)};`,
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
    `globalThis[${JSON.stringify(Ys)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function $c(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...yc(n),
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
function vc(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(dc()))
    o.endsWith(so) || (r[o] = i);
  return { settings: r, views: t };
}
const bc = (e) => `${Zs}/j/${e}`, wc = (e) => `${Zs}/j/${e}.json`;
async function _c(e, t, n) {
  await fetch(wc(e), {
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
function Sc(e) {
  if (!Js()) return;
  const t = N(
    "div",
    `display:flex;flex-direction:column;gap:${ne.md};padding-top:${ne.lg};border-top:1px dashed ${M.splitBorder};`
  );
  t.appendChild(
    N(
      "div",
      `font-size:${ee.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
      "debug"
    )
  );
  const n = N("button", `${we.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? M.errorFg : M.textMuted2;
  }, i = (s, a) => {
    const c = N("a", `color:${M.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(N("div", `padding-top:${ne.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const s = fc(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = vc(s), d = window.open("", "_blank"), f = gc(), $ = a, w = String($.name || $.type || "gufe-viz"), g = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), mc().then((_) => {
      if (!_) {
        d?.close(), g(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return _c(f, $c(_.js, a, c), w).then(() => {
        g();
        const v = bc(f);
        d && (d.location.href = v), i(v, _.note);
      });
    }).catch((_) => {
      g(), d?.close(), o(`Upload failed: ${_ instanceof Error ? _.message : String(_)}`, !0);
    });
  }, t.appendChild(
    N(
      "div",
      `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function N(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function ke(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const Pt = (e) => e.toLocaleString("en-US"), ct = "-", Et = we.base, Zn = Ba;
function Qn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = N("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), i = e.map((s) => {
    const a = N("button", Et, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = we.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? we.bgActive : we.bg;
    }, a.onclick = () => {
      o.setActive(s.id), r?.set(s.id), n(s.id);
    }, o.appendChild(a), { id: s.id, btn: a };
  });
  return o.setActive = (s) => {
    t = s, i.forEach((a) => {
      a.btn.style.background = a.id === t ? we.bgActive : we.bg;
    });
  }, o.setActive(t), o;
}
const Cc = parseFloat(ne.xl) * 2;
function ea(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const $ = o.get();
    e.some((w) => w.id === $) && (t = $);
  }
  const i = N("div", "display:flex;min-width:0;"), s = ($) => {
    i.setActive($), o?.set($), n($);
  }, a = Qn(e, t, s), c = Vt(e, t, s);
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
    const { pane: $, bar: w } = r.fit;
    let g = 0;
    f = nr($, (_) => {
      d || (g = w.offsetWidth || g), g && i.setCompact(g > _ - Cc);
    });
  }
  return i.cleanup = () => f(), i;
}
function Vt(e, t, n, r) {
  const o = N("select", Zn);
  for (const s of e) {
    const a = N("option", "", s.label);
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
function ta(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = N("button", Et, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? we.bgActive : we.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
function Qe(e, t, n) {
  const r = N("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = N("span");
  return o.innerHTML = `${ke(e)} <b style="color:${qe.primary};">${ke(t)}</b>`, r.appendChild(o), r;
}
function ut(e, t) {
  const n = N("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ne.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ne.md} ${ne.xxl};border-radius:${ze.md};font-size:${ee.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function ge(e, t = !1) {
  return N(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${ee.heading};color:${t ? qe.error : qe.faint};`,
    e
  );
}
function er(e) {
  const t = N("div", Ua);
  return t.className = "gufe-header", t.titleEl = N(
    "span",
    `font-weight:${me.bold};font-size:${ee.title};color:${qe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = N(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${ee.small};color:${qe.muted};`
  ), t.textEl = N("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = N("div", `display:flex;align-items:center;height:${Hs};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Gn(e, t, n = !1) {
  const r = N("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    N(
      "span",
      `flex:0 0 128px;font-size:${ee.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${qe.faint};`,
      e
    )
  );
  const o = N(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${qe.primary};` + (n ? `font-family:${ee.mono};font-size:${ee.small};` : `font-size:${ee.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function tr(e) {
  return N(
    "span",
    `padding:1px 7px;border-radius:${ze.xl};font-size:${ee.tiny};font-weight:${me.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function ro() {
  return N("div", Ya);
}
function na() {
  const e = N("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = N("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Ur = "data-gufe-hide-name";
function oo(e) {
  return !e.closest(`[${Ur}]`);
}
function nr(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const Ro = { min: 0.2, max: 0.8 }, kc = 5;
function ra(e, t, n, r = {}) {
  const o = r.min ?? Ro.min, i = r.max ?? Ro.max, s = N(
    "div",
    `flex:0 0 ${kc}px;align-self:stretch;touch-action:none;background:${M.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (_) => {
    a = _, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const _ = e.getBoundingClientRect();
    return _.height > _.width;
  };
  let f = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const $ = () => {
    t.style.flex = `1 1 ${(f * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - f) * 100).toFixed(2)}%`;
  };
  $(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const v = d();
    v !== a && (c(v), r.onResize?.(f));
  }).observe(e);
  let w = !1;
  s.addEventListener("pointerdown", (_) => {
    w = !0, s.setPointerCapture(_.pointerId), _.preventDefault();
  }), s.addEventListener("pointermove", (_) => {
    if (!w) return;
    const v = e.getBoundingClientRect(), u = a ? v.height : v.width;
    if (u <= 0) return;
    const y = a ? _.clientY - v.top : _.clientX - v.left;
    f = Math.min(i, Math.max(o, y / u)), $();
  });
  const g = (_) => {
    w && (w = !1, s.releasePointerCapture(_.pointerId), r.remember?.set(f), r.onResize?.(f));
  };
  return s.addEventListener("pointerup", g), s.addEventListener("pointercancel", g), s;
}
function io(e, t) {
  e.style.setProperty(Ze.min, t ? "0" : Kn.min), e.style.setProperty(Ze.max, t ? "none" : Kn.max), e.style.setProperty(Ze.ruleX, t ? "0" : "1px"), e.style.setProperty(Ze.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? Ha : "";
}
const xc = !1, so = ".menuOpen";
function Ec() {
  const e = N("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Ac = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Ec
}, Pc = Ac.openFreeEnergy;
function ao(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? xc, o = !1;
  const i = N("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = N("button", `${we.base}display:inline-flex;align-items:center;gap:${ne.md};padding:${ne.sm} ${ne.lg};`);
  s.appendChild(Pc()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), Sc(i)), i.style.display = r ? "flex" : "none", s.style.background = r ? we.bgActive : we.bg, s.setAttribute("aria-expanded", String(r));
  }, c = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r), s.onmouseover = () => {
    s.style.background = r ? we.bgActive : we.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? we.bgActive : we.bg;
  };
  const d = "toggleEl" in e ? e : null;
  return d && (d.toggleEl.style.marginRight = "2px"), (d ? d.toggleEl : e).appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: c
  };
}
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ut = { exports: {} }, mr = {}, Be = {}, it = {}, gr = {}, yr = {}, $r = {}, Mo;
function Wn() {
  return Mo || (Mo = 1, (function(e) {
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
    function o(y, ...h) {
      const k = [y[0]];
      let S = 0;
      for (; S < h.length; )
        a(k, h[S]), k.push(y[++S]);
      return new r(k);
    }
    e._ = o;
    const i = new r("+");
    function s(y, ...h) {
      const k = [g(y[0])];
      let S = 0;
      for (; S < h.length; )
        k.push(i), a(k, h[S]), k.push(i, g(y[++S]));
      return c(k), new r(k);
    }
    e.str = s;
    function a(y, h) {
      h instanceof r ? y.push(...h._items) : h instanceof n ? y.push(h) : y.push($(h));
    }
    e.addCodeArg = a;
    function c(y) {
      let h = 1;
      for (; h < y.length - 1; ) {
        if (y[h] === i) {
          const k = d(y[h - 1], y[h + 1]);
          if (k !== void 0) {
            y.splice(h - 1, 3, k);
            continue;
          }
          y[h++] = "+";
        }
        h++;
      }
    }
    function d(y, h) {
      if (h === '""')
        return y;
      if (y === '""')
        return h;
      if (typeof y == "string")
        return h instanceof n || y[y.length - 1] !== '"' ? void 0 : typeof h != "string" ? `${y.slice(0, -1)}${h}"` : h[0] === '"' ? y.slice(0, -1) + h.slice(1) : void 0;
      if (typeof h == "string" && h[0] === '"' && !(y instanceof n))
        return `"${y}${h.slice(1)}`;
    }
    function f(y, h) {
      return h.emptyStr() ? y : y.emptyStr() ? h : s`${y}${h}`;
    }
    e.strConcat = f;
    function $(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : g(Array.isArray(y) ? y.join(",") : y);
    }
    function w(y) {
      return new r(g(y));
    }
    e.stringify = w;
    function g(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = g;
    function _(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new r(`.${y}`) : o`[${y}]`;
    }
    e.getProperty = _;
    function v(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new r(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = v;
    function u(y) {
      return new r(y.toString());
    }
    e.regexpCode = u;
  })($r)), $r;
}
var vr = {}, No;
function To() {
  return No || (No = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Wn();
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
        const w = this.toName(d), { prefix: g } = w, _ = ($ = f.key) !== null && $ !== void 0 ? $ : f.ref;
        let v = this._values[g];
        if (v) {
          const h = v.get(_);
          if (h)
            return h;
        } else
          v = this._values[g] = /* @__PURE__ */ new Map();
        v.set(_, w);
        const u = this._scope[g] || (this._scope[g] = []), y = u.length;
        return u[y] = f.ref, w.setValue(f, { property: g, itemIndex: y }), w;
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
        return this._reduceValues(d, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, f, $);
      }
      _reduceValues(d, f, $ = {}, w) {
        let g = t.nil;
        for (const _ in d) {
          const v = d[_];
          if (!v)
            continue;
          const u = $[_] = $[_] || /* @__PURE__ */ new Map();
          v.forEach((y) => {
            if (u.has(y))
              return;
            u.set(y, r.Started);
            let h = f(y);
            if (h) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${k} ${y} = ${h};${this.opts._n}`;
            } else if (h = w?.(y))
              g = (0, t._)`${g}${h}${this.opts._n}`;
            else
              throw new n(y);
            u.set(y, r.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = a;
  })(vr)), vr;
}
var Oo;
function ce() {
  return Oo || (Oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Wn(), n = /* @__PURE__ */ To();
    var r = /* @__PURE__ */ Wn();
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
    var o = /* @__PURE__ */ To();
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
      optimizeNames(b, E) {
        return this;
      }
    }
    class s extends i {
      constructor(b, E, D) {
        super(), this.varKind = b, this.name = E, this.rhs = D;
      }
      render({ es5: b, _n: E }) {
        const D = b ? n.varKinds.var : this.varKind, z = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${D} ${this.name}${z};` + E;
      }
      optimizeNames(b, E) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = V(this.rhs, b, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(b, E, D) {
        super(), this.lhs = b, this.rhs = E, this.sideEffects = D;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, E) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = V(this.rhs, b, E), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return B(b, this.rhs);
      }
    }
    class c extends a {
      constructor(b, E, D, z) {
        super(b, D, z), this.op = E;
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
    class w extends i {
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
        return this.code = V(this.code, b, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class g extends i {
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
        let z = D.length;
        for (; z--; ) {
          const q = D[z];
          q.optimizeNames(b, E) || (U(b, q.names), D.splice(z, 1));
        }
        return D.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, E) => T(b, E.names), {});
      }
    }
    class _ extends g {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class v extends g {
    }
    class u extends _ {
    }
    u.kind = "else";
    class y extends _ {
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
          return b === !1 ? E instanceof y ? E : E.nodes : this.nodes.length ? this : new y(Y(b), E instanceof y ? [E] : E.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, E) {
        var D;
        if (this.else = (D = this.else) === null || D === void 0 ? void 0 : D.optimizeNames(b, E), !!(super.optimizeNames(b, E) || this.else))
          return this.condition = V(this.condition, b, E), this;
      }
      get names() {
        const b = super.names;
        return B(b, this.condition), this.else && T(b, this.else.names), b;
      }
    }
    y.kind = "if";
    class h extends _ {
    }
    h.kind = "for";
    class k extends h {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, E) {
        if (super.optimizeNames(b, E))
          return this.iteration = V(this.iteration, b, E), this;
      }
      get names() {
        return T(super.names, this.iteration.names);
      }
    }
    class S extends h {
      constructor(b, E, D, z) {
        super(), this.varKind = b, this.name = E, this.from = D, this.to = z;
      }
      render(b) {
        const E = b.es5 ? n.varKinds.var : this.varKind, { name: D, from: z, to: q } = this;
        return `for(${E} ${D}=${z}; ${D}<${q}; ${D}++)` + super.render(b);
      }
      get names() {
        const b = B(super.names, this.from);
        return B(b, this.to);
      }
    }
    class l extends h {
      constructor(b, E, D, z) {
        super(), this.loop = b, this.varKind = E, this.name = D, this.iterable = z;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, E) {
        if (super.optimizeNames(b, E))
          return this.iterable = V(this.iterable, b, E), this;
      }
      get names() {
        return T(super.names, this.iterable.names);
      }
    }
    class p extends _ {
      constructor(b, E, D) {
        super(), this.name = b, this.args = E, this.async = D;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    p.kind = "func";
    class m extends g {
      render(b) {
        return "return " + super.render(b);
      }
    }
    m.kind = "return";
    class x extends _ {
      render(b) {
        let E = "try" + super.render(b);
        return this.catch && (E += this.catch.render(b)), this.finally && (E += this.finally.render(b)), E;
      }
      optimizeNodes() {
        var b, E;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(b, E) {
        var D, z;
        return super.optimizeNames(b, E), (D = this.catch) === null || D === void 0 || D.optimizeNames(b, E), (z = this.finally) === null || z === void 0 || z.optimizeNames(b, E), this;
      }
      get names() {
        const b = super.names;
        return this.catch && T(b, this.catch.names), this.finally && T(b, this.finally.names), b;
      }
    }
    class A extends _ {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    A.kind = "catch";
    class R extends _ {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    R.kind = "finally";
    class I {
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
      _def(b, E, D, z) {
        const q = this._scope.toName(E);
        return D !== void 0 && z && (this._constants[q.str] = D), this._leafNode(new s(b, q, D)), q;
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
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new w(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const E = ["{"];
        for (const [D, z] of b)
          E.length > 1 && E.push(","), E.push(D), (D !== z || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, z));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, E, D) {
        if (this._blockNode(new y(b)), E && D)
          this.code(E).else().code(D).endIf();
        else if (E)
          this.code(E).endIf();
        else if (D)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new y(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, u);
      }
      _for(b, E) {
        return this._blockNode(b), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, E) {
        return this._for(new k(b), E);
      }
      // `for` statement for a range of values
      forRange(b, E, D, z, q = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const W = this._scope.toName(b);
        return this._for(new S(q, W, E, D), () => z(W));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, E, D, z = n.varKinds.const) {
        const q = this._scope.toName(b);
        if (this.opts.es5) {
          const W = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${W}.length`, (J) => {
            this.var(q, (0, t._)`${W}[${J}]`), D(q);
          });
        }
        return this._for(new l("of", z, q, E), () => D(q));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, E, D, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${E})`, D);
        const q = this._scope.toName(b);
        return this._for(new l("in", z, q, E), () => D(q));
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
        const E = new m();
        if (this._blockNode(E), this.code(b), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try(b, E, D) {
        if (!E && !D)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new x();
        if (this._blockNode(z), this.code(b), E) {
          const q = this.name("e");
          this._currNode = z.catch = new A(q), E(q);
        }
        return D && (this._currNode = z.finally = new R(), this.code(D)), this._endBlockNode(A, R);
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
      func(b, E = t.nil, D, z) {
        return this._blockNode(new p(b, E, D)), z && this.code(z).endFunc(), this;
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
      _endBlockNode(b, E) {
        const D = this._currNode;
        if (D instanceof b || E && D instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${b.kind}/${E.kind}` : b.kind}"`);
      }
      _elseNode(b) {
        const E = this._currNode;
        if (!(E instanceof y))
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
    e.CodeGen = I;
    function T(O, b) {
      for (const E in b)
        O[E] = (O[E] || 0) + (b[E] || 0);
      return O;
    }
    function B(O, b) {
      return b instanceof t._CodeOrName ? T(O, b.names) : O;
    }
    function V(O, b, E) {
      if (O instanceof t.Name)
        return D(O);
      if (!z(O))
        return O;
      return new t._Code(O._items.reduce((q, W) => (W instanceof t.Name && (W = D(W)), W instanceof t._Code ? q.push(...W._items) : q.push(W), q), []));
      function D(q) {
        const W = E[q.str];
        return W === void 0 || b[q.str] !== 1 ? q : (delete b[q.str], W);
      }
      function z(q) {
        return q instanceof t._Code && q._items.some((W) => W instanceof t.Name && b[W.str] === 1 && E[W.str] !== void 0);
      }
    }
    function U(O, b) {
      for (const E in b)
        O[E] = (O[E] || 0) - (b[E] || 0);
    }
    function Y(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${F(O)}`;
    }
    e.not = Y;
    const oe = j(e.operators.AND);
    function Q(...O) {
      return O.reduce(oe);
    }
    e.and = Q;
    const ie = j(e.operators.OR);
    function X(...O) {
      return O.reduce(ie);
    }
    e.or = X;
    function j(O) {
      return (b, E) => b === t.nil ? E : E === t.nil ? b : (0, t._)`${F(b)} ${O} ${F(E)}`;
    }
    function F(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(yr)), yr;
}
var le = {}, Fo;
function fe() {
  if (Fo) return le;
  Fo = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.checkStrictMode = le.getErrorPath = le.Type = le.useFunc = le.setEvaluated = le.evaluatedPropsToName = le.mergeEvaluated = le.eachItem = le.unescapeJsonPointer = le.escapeJsonPointer = le.escapeFragment = le.unescapeFragment = le.schemaRefOrVal = le.schemaHasRulesButRef = le.schemaHasRules = le.checkUnknownRules = le.alwaysValidSchema = le.toHash = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Wn();
  function n(l) {
    const p = {};
    for (const m of l)
      p[m] = !0;
    return p;
  }
  le.toHash = n;
  function r(l, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (o(l, p), !i(p, l.self.RULES.all));
  }
  le.alwaysValidSchema = r;
  function o(l, p = l.schema) {
    const { opts: m, self: x } = l;
    if (!m.strictSchema || typeof p == "boolean")
      return;
    const A = x.RULES.keywords;
    for (const R in p)
      A[R] || S(l, `unknown keyword: "${R}"`);
  }
  le.checkUnknownRules = o;
  function i(l, p) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (p[m])
        return !0;
    return !1;
  }
  le.schemaHasRules = i;
  function s(l, p) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (m !== "$ref" && p.all[m])
        return !0;
    return !1;
  }
  le.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: p }, m, x, A) {
    if (!A) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
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
  function w(l, p) {
    if (Array.isArray(l))
      for (const m of l)
        p(m);
    else
      p(l);
  }
  le.eachItem = w;
  function g({ mergeNames: l, mergeToName: p, mergeValues: m, resultToName: x }) {
    return (A, R, I, T) => {
      const B = I === void 0 ? R : I instanceof e.Name ? (R instanceof e.Name ? l(A, R, I) : p(A, R, I), I) : R instanceof e.Name ? (p(A, I, R), R) : m(R, I);
      return T === e.Name && !(B instanceof e.Name) ? x(A, B) : B;
    };
  }
  le.mergeEvaluated = {
    props: g({
      mergeNames: (l, p, m) => l.if((0, e._)`${m} !== true && ${p} !== undefined`, () => {
        l.if((0, e._)`${p} === true`, () => l.assign(m, !0), () => l.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${p})`));
      }),
      mergeToName: (l, p, m) => l.if((0, e._)`${m} !== true`, () => {
        p === !0 ? l.assign(m, !0) : (l.assign(m, (0, e._)`${m} || {}`), v(l, m, p));
      }),
      mergeValues: (l, p) => l === !0 ? !0 : { ...l, ...p },
      resultToName: _
    }),
    items: g({
      mergeNames: (l, p, m) => l.if((0, e._)`${m} !== true && ${p} !== undefined`, () => l.assign(m, (0, e._)`${p} === true ? true : ${m} > ${p} ? ${m} : ${p}`)),
      mergeToName: (l, p, m) => l.if((0, e._)`${m} !== true`, () => l.assign(m, p === !0 ? !0 : (0, e._)`${m} > ${p} ? ${m} : ${p}`)),
      mergeValues: (l, p) => l === !0 ? !0 : Math.max(l, p),
      resultToName: (l, p) => l.var("items", p)
    })
  };
  function _(l, p) {
    if (p === !0)
      return l.var("props", !0);
    const m = l.var("props", (0, e._)`{}`);
    return p !== void 0 && v(l, m, p), m;
  }
  le.evaluatedPropsToName = _;
  function v(l, p, m) {
    Object.keys(m).forEach((x) => l.assign((0, e._)`${p}${(0, e.getProperty)(x)}`, !0));
  }
  le.setEvaluated = v;
  const u = {};
  function y(l, p) {
    return l.scopeValue("func", {
      ref: p,
      code: u[p.code] || (u[p.code] = new t._Code(p.code))
    });
  }
  le.useFunc = y;
  var h;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(h || (le.Type = h = {}));
  function k(l, p, m) {
    if (l instanceof e.Name) {
      const x = p === h.Num;
      return m ? x ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : x ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(l).toString() : "/" + f(l);
  }
  le.getErrorPath = k;
  function S(l, p, m = l.opts.strictSchema) {
    if (m) {
      if (p = `strict mode: ${p}`, m === !0)
        throw new Error(p);
      l.self.logger.warn(p);
    }
  }
  return le.checkStrictMode = S, le;
}
var Ht = {}, zo;
function Ie() {
  if (zo) return Ht;
  zo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
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
  return Ht.default = t, Ht;
}
var Io;
function rr() {
  return Io || (Io = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Ie();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: y }) => y ? (0, t.str)`"${u}" keyword must be ${y} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, y = e.keywordError, h, k) {
      const { it: S } = u, { gen: l, compositeRule: p, allErrors: m } = S, x = $(u, y, h);
      k ?? (p || m) ? c(l, x) : d(S, (0, t._)`[${x}]`);
    }
    e.reportError = o;
    function i(u, y = e.keywordError, h) {
      const { it: k } = u, { gen: S, compositeRule: l, allErrors: p } = k, m = $(u, y, h);
      c(S, m), l || p || d(k, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(u, y) {
      u.assign(r.default.errors, y), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(y, () => u.assign((0, t._)`${r.default.vErrors}.length`, y), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: y, schemaValue: h, data: k, errsCount: S, it: l }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const p = u.name("err");
      u.forRange("i", S, r.default.errors, (m) => {
        u.const(p, (0, t._)`${r.default.vErrors}[${m}]`), u.if((0, t._)`${p}.instancePath === undefined`, () => u.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), u.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${y}`), l.opts.verbose && (u.assign((0, t._)`${p}.schema`, h), u.assign((0, t._)`${p}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(u, y) {
      const h = u.const("err", y);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${r.default.vErrors}.push(${h})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function d(u, y) {
      const { gen: h, validateName: k, schemaEnv: S } = u;
      S.$async ? h.throw((0, t._)`new ${u.ValidationError}(${y})`) : (h.assign((0, t._)`${k}.errors`, y), h.return(!1));
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
    function $(u, y, h) {
      const { createErrors: k } = u.it;
      return k === !1 ? (0, t._)`{}` : w(u, y, h);
    }
    function w(u, y, h = {}) {
      const { gen: k, it: S } = u, l = [
        g(S, h),
        _(u, h)
      ];
      return v(u, y, l), k.object(...l);
    }
    function g({ errorPath: u }, { instancePath: y }) {
      const h = y ? (0, t.str)`${u}${(0, n.getErrorPath)(y, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, h)];
    }
    function _({ keyword: u, it: { errSchemaPath: y } }, { schemaPath: h, parentSchema: k }) {
      let S = k ? y : (0, t.str)`${y}/${u}`;
      return h && (S = (0, t.str)`${S}${(0, n.getErrorPath)(h, n.Type.Str)}`), [f.schemaPath, S];
    }
    function v(u, { params: y, message: h }, k) {
      const { keyword: S, data: l, schemaValue: p, it: m } = u, { opts: x, propertyName: A, topSchemaRef: R, schemaPath: I } = m;
      k.push([f.keyword, S], [f.params, typeof y == "function" ? y(u) : y || (0, t._)`{}`]), x.messages && k.push([f.message, typeof h == "function" ? h(u) : h]), x.verbose && k.push([f.schema, p], [f.parentSchema, (0, t._)`${R}${I}`], [r.default.data, l]), A && k.push([f.propertyName, A]);
    }
  })(gr)), gr;
}
var jo;
function Mc() {
  if (jo) return it;
  jo = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.boolOrEmptySchema = it.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Ie(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: f } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  it.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: d, schema: f } = a;
    f === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  it.boolOrEmptySchema = i;
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
  return it;
}
var be = {}, st = {}, Do;
function oa() {
  if (Do) return st;
  Do = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.getRules = st.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  st.isJSONType = n;
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
  return st.getRules = r, st;
}
var Ue = {}, Lo;
function ia() {
  if (Lo) return Ue;
  Lo = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.shouldUseRule = Ue.shouldUseGroup = Ue.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  Ue.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  Ue.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return Ue.shouldUseRule = n, Ue;
}
var qo;
function Jn() {
  if (qo) return be;
  qo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ oa(), t = /* @__PURE__ */ ia(), n = /* @__PURE__ */ rr(), r = /* @__PURE__ */ ce(), o = /* @__PURE__ */ fe();
  var i;
  (function(h) {
    h[h.Correct = 0] = "Correct", h[h.Wrong = 1] = "Wrong";
  })(i || (be.DataType = i = {}));
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
  be.getSchemaTypes = s;
  function a(h) {
    const k = Array.isArray(h) ? h : h ? [h] : [];
    if (k.every(e.isJSONType))
      return k;
    throw new Error("type must be JSONType or JSONType[]: " + k.join(","));
  }
  be.getJSONTypes = a;
  function c(h, k) {
    const { gen: S, data: l, opts: p } = h, m = f(k, p.coerceTypes), x = k.length > 0 && !(m.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(h, k[0]));
    if (x) {
      const A = _(k, l, p.strictNumbers, i.Wrong);
      S.if(A, () => {
        m.length ? $(h, k, m) : u(h);
      });
    }
    return x;
  }
  be.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(h, k) {
    return k ? h.filter((S) => d.has(S) || k === "array" && S === "array") : [];
  }
  function $(h, k, S) {
    const { gen: l, data: p, opts: m } = h, x = l.let("dataType", (0, r._)`typeof ${p}`), A = l.let("coerced", (0, r._)`undefined`);
    m.coerceTypes === "array" && l.if((0, r._)`${x} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => l.assign(p, (0, r._)`${p}[0]`).assign(x, (0, r._)`typeof ${p}`).if(_(k, p, m.strictNumbers), () => l.assign(A, p))), l.if((0, r._)`${A} !== undefined`);
    for (const I of S)
      (d.has(I) || I === "array" && m.coerceTypes === "array") && R(I);
    l.else(), u(h), l.endIf(), l.if((0, r._)`${A} !== undefined`, () => {
      l.assign(p, A), w(h, A);
    });
    function R(I) {
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
  function w({ gen: h, parentData: k, parentDataProperty: S }, l) {
    h.if((0, r._)`${k} !== undefined`, () => h.assign((0, r._)`${k}[${S}]`, l));
  }
  function g(h, k, S, l = i.Correct) {
    const p = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let m;
    switch (h) {
      case "null":
        return (0, r._)`${k} ${p} null`;
      case "array":
        m = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        m = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        m = x((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        m = x();
        break;
      default:
        return (0, r._)`typeof ${k} ${p} ${h}`;
    }
    return l === i.Correct ? m : (0, r.not)(m);
    function x(A = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, A, S ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  be.checkDataType = g;
  function _(h, k, S, l) {
    if (h.length === 1)
      return g(h[0], k, S, l);
    let p;
    const m = (0, o.toHash)(h);
    if (m.array && m.object) {
      const x = (0, r._)`typeof ${k} != "object"`;
      p = m.null ? x : (0, r._)`!${k} || ${x}`, delete m.null, delete m.array, delete m.object;
    } else
      p = r.nil;
    m.number && delete m.integer;
    for (const x in m)
      p = (0, r.and)(p, g(x, k, S, l));
    return p;
  }
  be.checkDataTypes = _;
  const v = {
    message: ({ schema: h }) => `must be ${h}`,
    params: ({ schema: h, schemaValue: k }) => typeof h == "string" ? (0, r._)`{type: ${h}}` : (0, r._)`{type: ${k}}`
  };
  function u(h) {
    const k = y(h);
    (0, n.reportError)(k, v);
  }
  be.reportTypeError = u;
  function y(h) {
    const { gen: k, data: S, schema: l } = h, p = (0, o.schemaRefOrVal)(h, l, "type");
    return {
      gen: k,
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
  return be;
}
var Rt = {}, Vo;
function Nc() {
  if (Vo) return Rt;
  Vo = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, d) => r(o, d, c.default));
  }
  Rt.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: c, data: d, opts: f } = o;
    if (s === void 0)
      return;
    const $ = (0, e._)`${d}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${$}`);
      return;
    }
    let w = (0, e._)`${$} === undefined`;
    f.useDefaults === "empty" && (w = (0, e._)`${w} || ${$} === null || ${$} === ""`), a.if(w, (0, e._)`${$} = ${(0, e.stringify)(s)}`);
  }
  return Rt;
}
var Te = {}, he = {}, Bo;
function je() {
  if (Bo) return he;
  Bo = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.validateUnion = he.validateArray = he.usePattern = he.callValidateCode = he.schemaProperties = he.allSchemaProperties = he.noPropertyInData = he.propertyInData = he.isOwnProperty = he.hasPropFunc = he.reportMissingProp = he.checkMissingProp = he.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ fe();
  function o(h, k) {
    const { gen: S, data: l, it: p } = h;
    S.if(f(S, l, k, p.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${k}` }, !0), h.error();
    });
  }
  he.checkReportMissingProp = o;
  function i({ gen: h, data: k, it: { opts: S } }, l, p) {
    return (0, e.or)(...l.map((m) => (0, e.and)(f(h, k, m, S.ownProperties), (0, e._)`${p} = ${m}`)));
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
    const p = (0, e._)`${k}${(0, e.getProperty)(S)} !== undefined`;
    return l ? (0, e._)`${p} && ${c(h, k, S)}` : p;
  }
  he.propertyInData = d;
  function f(h, k, S, l) {
    const p = (0, e._)`${k}${(0, e.getProperty)(S)} === undefined`;
    return l ? (0, e.or)(p, (0, e.not)(c(h, k, S))) : p;
  }
  he.noPropertyInData = f;
  function $(h) {
    return h ? Object.keys(h).filter((k) => k !== "__proto__") : [];
  }
  he.allSchemaProperties = $;
  function w(h, k) {
    return $(k).filter((S) => !(0, t.alwaysValidSchema)(h, k[S]));
  }
  he.schemaProperties = w;
  function g({ schemaCode: h, data: k, it: { gen: S, topSchemaRef: l, schemaPath: p, errorPath: m }, it: x }, A, R, I) {
    const T = I ? (0, e._)`${h}, ${k}, ${l}${p}` : k, B = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && B.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const V = (0, e._)`${T}, ${S.object(...B)}`;
    return R !== e.nil ? (0, e._)`${A}.call(${R}, ${V})` : (0, e._)`${A}(${V})`;
  }
  he.callValidateCode = g;
  const _ = (0, e._)`new RegExp`;
  function v({ gen: h, it: { opts: k } }, S) {
    const l = k.unicodeRegExp ? "u" : "", { regExp: p } = k.code, m = p(S, l);
    return h.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${p.code === "new RegExp" ? _ : (0, r.useFunc)(h, p)}(${S}, ${l})`
    });
  }
  he.usePattern = v;
  function u(h) {
    const { gen: k, data: S, keyword: l, it: p } = h, m = k.name("valid");
    if (p.allErrors) {
      const A = k.let("valid", !0);
      return x(() => k.assign(A, !1)), A;
    }
    return k.var(m, !0), x(() => k.break()), m;
    function x(A) {
      const R = k.const("len", (0, e._)`${S}.length`);
      k.forRange("i", 0, R, (I) => {
        h.subschema({
          keyword: l,
          dataProp: I,
          dataPropType: t.Type.Num
        }, m), k.if((0, e.not)(m), A);
      });
    }
  }
  he.validateArray = u;
  function y(h) {
    const { gen: k, schema: S, keyword: l, it: p } = h;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((R) => (0, t.alwaysValidSchema)(p, R)) && !p.opts.unevaluated)
      return;
    const x = k.let("valid", !1), A = k.name("_valid");
    k.block(() => S.forEach((R, I) => {
      const T = h.subschema({
        keyword: l,
        schemaProp: I,
        compositeRule: !0
      }, A);
      k.assign(x, (0, e._)`${x} || ${A}`), h.mergeValidEvaluated(T, A) || k.if((0, e.not)(x));
    })), h.result(x, () => h.reset(), () => h.error(!0));
  }
  return he.validateUnion = y, he;
}
var Uo;
function Tc() {
  if (Uo) return Te;
  Uo = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateKeywordUsage = Te.validSchemaType = Te.funcKeywordCode = Te.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ je(), r = /* @__PURE__ */ rr();
  function o(w, g) {
    const { gen: _, keyword: v, schema: u, parentSchema: y, it: h } = w, k = g.macro.call(h.self, u, y, h), S = d(_, v, k);
    h.opts.validateSchema !== !1 && h.self.validateSchema(k, !0);
    const l = _.name("valid");
    w.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${h.errSchemaPath}/${v}`,
      topSchemaRef: S,
      compositeRule: !0
    }, l), w.pass(l, () => w.error(!0));
  }
  Te.macroKeywordCode = o;
  function i(w, g) {
    var _;
    const { gen: v, keyword: u, schema: y, parentSchema: h, $data: k, it: S } = w;
    c(S, g);
    const l = !k && g.compile ? g.compile.call(S.self, y, h, S) : g.validate, p = d(v, u, l), m = v.let("valid");
    w.block$data(m, x), w.ok((_ = g.valid) !== null && _ !== void 0 ? _ : m);
    function x() {
      if (g.errors === !1)
        I(), g.modifying && s(w), T(() => w.error());
      else {
        const B = g.async ? A() : R();
        g.modifying && s(w), T(() => a(w, B));
      }
    }
    function A() {
      const B = v.let("ruleErrs", null);
      return v.try(() => I((0, e._)`await `), (V) => v.assign(m, !1).if((0, e._)`${V} instanceof ${S.ValidationError}`, () => v.assign(B, (0, e._)`${V}.errors`), () => v.throw(V))), B;
    }
    function R() {
      const B = (0, e._)`${p}.errors`;
      return v.assign(B, null), I(e.nil), B;
    }
    function I(B = g.async ? (0, e._)`await ` : e.nil) {
      const V = S.opts.passContext ? t.default.this : t.default.self, U = !("compile" in g && !k || g.schema === !1);
      v.assign(m, (0, e._)`${B}${(0, n.callValidateCode)(w, p, V, U)}`, g.modifying);
    }
    function T(B) {
      var V;
      v.if((0, e.not)((V = g.valid) !== null && V !== void 0 ? V : m), B);
    }
  }
  Te.funcKeywordCode = i;
  function s(w) {
    const { gen: g, data: _, it: v } = w;
    g.if(v.parentData, () => g.assign(_, (0, e._)`${v.parentData}[${v.parentDataProperty}]`));
  }
  function a(w, g) {
    const { gen: _ } = w;
    _.if((0, e._)`Array.isArray(${g})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(w);
    }, () => w.error());
  }
  function c({ schemaEnv: w }, g) {
    if (g.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(w, g, _) {
    if (_ === void 0)
      throw new Error(`keyword "${g}" failed to compile`);
    return w.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function f(w, g, _ = !1) {
    return !g.length || g.some((v) => v === "array" ? Array.isArray(w) : v === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == v || _ && typeof w > "u");
  }
  Te.validSchemaType = f;
  function $({ schema: w, opts: g, self: _, errSchemaPath: v }, u, y) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(y) : u.keyword !== y)
      throw new Error("ajv implementation error");
    const h = u.dependencies;
    if (h?.some((k) => !Object.prototype.hasOwnProperty.call(w, k)))
      throw new Error(`parent schema must have dependencies of ${y}: ${h.join(",")}`);
    if (u.validateSchema && !u.validateSchema(w[y])) {
      const S = `keyword "${y}" value is invalid at path "${v}": ` + _.errorsText(u.validateSchema.errors);
      if (g.validateSchema === "log")
        _.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Te.validateKeywordUsage = $, Te;
}
var He = {}, Ho;
function Oc() {
  if (Ho) return He;
  Ho = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.extendSubschemaMode = He.extendSubschemaData = He.getSubschema = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: f, topSchemaRef: $ }) {
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
  He.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: d, dataTypes: f, propertyName: $ }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = s;
    if (a !== void 0) {
      const { errorPath: _, dataPathArr: v, opts: u } = s, y = w.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      g(y), i.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(a, c, u.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...v, i.parentDataProperty];
    }
    if (d !== void 0) {
      const _ = d instanceof e.Name ? d : w.let("data", d, !0);
      g(_), $ !== void 0 && (i.propertyName = $);
    }
    f && (i.dataTypes = f);
    function g(_) {
      i.data = _, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, _];
    }
  }
  He.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: f }) {
    c !== void 0 && (i.compositeRule = c), d !== void 0 && (i.createErrors = d), f !== void 0 && (i.allErrors = f), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return He.extendSubschemaMode = o, He;
}
var _e = {}, br, Ko;
function sa() {
  return Ko || (Ko = 1, br = function e(t, n) {
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
  }), br;
}
var wr = { exports: {} }, Go;
function Fc() {
  if (Go) return wr.exports;
  Go = 1;
  var e = wr.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, c, d, f, $, w) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, d, f, $, w);
      for (var g in s) {
        var _ = s[g];
        if (Array.isArray(_)) {
          if (g in e.arrayKeywords)
            for (var v = 0; v < _.length; v++)
              t(r, o, i, _[v], a + "/" + g + "/" + v, c, a, g, s, v);
        } else if (g in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var u in _)
              t(r, o, i, _[u], a + "/" + g + "/" + n(u), c, a, g, s, u);
        } else (g in e.keywords || r.allKeys && !(g in e.skipKeywords)) && t(r, o, i, _, a + "/" + g, c, a, g, s);
      }
      i(s, a, c, d, f, $, w);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return wr.exports;
}
var Wo;
function or() {
  if (Wo) return _e;
  Wo = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.getSchemaRefs = _e.resolveUrl = _e.normalizeId = _e._getFullPath = _e.getFullPath = _e.inlineRef = void 0;
  const e = /* @__PURE__ */ fe(), t = sa(), n = Fc(), r = /* @__PURE__ */ new Set([
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
    return typeof v == "boolean" ? !0 : u === !0 ? !s(v) : u ? a(v) <= u : !1;
  }
  _e.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(v) {
    for (const u in v) {
      if (i.has(u))
        return !0;
      const y = v[u];
      if (Array.isArray(y) && y.some(s) || typeof y == "object" && s(y))
        return !0;
    }
    return !1;
  }
  function a(v) {
    let u = 0;
    for (const y in v) {
      if (y === "$ref")
        return 1 / 0;
      if (u++, !r.has(y) && (typeof v[y] == "object" && (0, e.eachItem)(v[y], (h) => u += a(h)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function c(v, u = "", y) {
    y !== !1 && (u = $(u));
    const h = v.parse(u);
    return d(v, h);
  }
  _e.getFullPath = c;
  function d(v, u) {
    return v.serialize(u).split("#")[0] + "#";
  }
  _e._getFullPath = d;
  const f = /#\/?$/;
  function $(v) {
    return v ? v.replace(f, "") : "";
  }
  _e.normalizeId = $;
  function w(v, u, y) {
    return y = $(y), v.resolve(u, y);
  }
  _e.resolveUrl = w;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function _(v, u) {
    if (typeof v == "boolean")
      return {};
    const { schemaId: y, uriResolver: h } = this.opts, k = $(v[y] || u), S = { "": k }, l = c(h, k, !1), p = {}, m = /* @__PURE__ */ new Set();
    return n(v, { allKeys: !0 }, (R, I, T, B) => {
      if (B === void 0)
        return;
      const V = l + I;
      let U = S[B];
      typeof R[y] == "string" && (U = Y.call(this, R[y])), oe.call(this, R.$anchor), oe.call(this, R.$dynamicAnchor), S[I] = U;
      function Y(Q) {
        const ie = this.opts.uriResolver.resolve;
        if (Q = $(U ? ie(U, Q) : Q), m.has(Q))
          throw A(Q);
        m.add(Q);
        let X = this.refs[Q];
        return typeof X == "string" && (X = this.refs[X]), typeof X == "object" ? x(R, X.schema, Q) : Q !== $(V) && (Q[0] === "#" ? (x(R, p[Q], Q), p[Q] = R) : this.refs[Q] = V), Q;
      }
      function oe(Q) {
        if (typeof Q == "string") {
          if (!g.test(Q))
            throw new Error(`invalid anchor "${Q}"`);
          Y.call(this, `#${Q}`);
        }
      }
    }), p;
    function x(R, I, T) {
      if (I !== void 0 && !t(R, I))
        throw A(T);
    }
    function A(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return _e.getSchemaRefs = _, _e;
}
var Jo;
function ir() {
  if (Jo) return Be;
  Jo = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.getData = Be.KeywordCxt = Be.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Mc(), t = /* @__PURE__ */ Jn(), n = /* @__PURE__ */ ia(), r = /* @__PURE__ */ Jn(), o = /* @__PURE__ */ Nc(), i = /* @__PURE__ */ Tc(), s = /* @__PURE__ */ Oc(), a = /* @__PURE__ */ ce(), c = /* @__PURE__ */ Ie(), d = /* @__PURE__ */ or(), f = /* @__PURE__ */ fe(), $ = /* @__PURE__ */ rr();
  function w(C) {
    if (l(C) && (m(C), S(C))) {
      u(C);
      return;
    }
    g(C, () => (0, e.topBoolOrEmptySchema)(C));
  }
  Be.validateFunctionCode = w;
  function g({ gen: C, validateName: P, schema: L, schemaEnv: G, opts: Z }, te) {
    Z.code.es5 ? C.func(P, (0, a._)`${c.default.data}, ${c.default.valCxt}`, G.$async, () => {
      C.code((0, a._)`"use strict"; ${h(L, Z)}`), v(C, Z), C.code(te);
    }) : C.func(P, (0, a._)`${c.default.data}, ${_(Z)}`, G.$async, () => C.code(h(L, Z)).code(te));
  }
  function _(C) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${C.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function v(C, P) {
    C.if(c.default.valCxt, () => {
      C.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), C.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), C.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), C.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), P.dynamicRef && C.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      C.var(c.default.instancePath, (0, a._)`""`), C.var(c.default.parentData, (0, a._)`undefined`), C.var(c.default.parentDataProperty, (0, a._)`undefined`), C.var(c.default.rootData, c.default.data), P.dynamicRef && C.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(C) {
    const { schema: P, opts: L, gen: G } = C;
    g(C, () => {
      L.$comment && P.$comment && B(C), R(C), G.let(c.default.vErrors, null), G.let(c.default.errors, 0), L.unevaluated && y(C), x(C), V(C);
    });
  }
  function y(C) {
    const { gen: P, validateName: L } = C;
    C.evaluated = P.const("evaluated", (0, a._)`${L}.evaluated`), P.if((0, a._)`${C.evaluated}.dynamicProps`, () => P.assign((0, a._)`${C.evaluated}.props`, (0, a._)`undefined`)), P.if((0, a._)`${C.evaluated}.dynamicItems`, () => P.assign((0, a._)`${C.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(C, P) {
    const L = typeof C == "object" && C[P.schemaId];
    return L && (P.code.source || P.code.process) ? (0, a._)`/*# sourceURL=${L} */` : a.nil;
  }
  function k(C, P) {
    if (l(C) && (m(C), S(C))) {
      p(C, P);
      return;
    }
    (0, e.boolOrEmptySchema)(C, P);
  }
  function S({ schema: C, self: P }) {
    if (typeof C == "boolean")
      return !C;
    for (const L in C)
      if (P.RULES.all[L])
        return !0;
    return !1;
  }
  function l(C) {
    return typeof C.schema != "boolean";
  }
  function p(C, P) {
    const { schema: L, gen: G, opts: Z } = C;
    Z.$comment && L.$comment && B(C), I(C), T(C);
    const te = G.const("_errs", c.default.errors);
    x(C, te), G.var(P, (0, a._)`${te} === ${c.default.errors}`);
  }
  function m(C) {
    (0, f.checkUnknownRules)(C), A(C);
  }
  function x(C, P) {
    if (C.opts.jtd)
      return Y(C, [], !1, P);
    const L = (0, t.getSchemaTypes)(C.schema), G = (0, t.coerceAndCheckDataType)(C, L);
    Y(C, L, !G, P);
  }
  function A(C) {
    const { schema: P, errSchemaPath: L, opts: G, self: Z } = C;
    P.$ref && G.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(P, Z.RULES) && Z.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function R(C) {
    const { schema: P, opts: L } = C;
    P.default !== void 0 && L.useDefaults && L.strictSchema && (0, f.checkStrictMode)(C, "default is ignored in the schema root");
  }
  function I(C) {
    const P = C.schema[C.opts.schemaId];
    P && (C.baseId = (0, d.resolveUrl)(C.opts.uriResolver, C.baseId, P));
  }
  function T(C) {
    if (C.schema.$async && !C.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function B({ gen: C, schemaEnv: P, schema: L, errSchemaPath: G, opts: Z }) {
    const te = L.$comment;
    if (Z.$comment === !0)
      C.code((0, a._)`${c.default.self}.logger.log(${te})`);
    else if (typeof Z.$comment == "function") {
      const ae = (0, a.str)`${G}/$comment`, re = C.scopeValue("root", { ref: P.root });
      C.code((0, a._)`${c.default.self}.opts.$comment(${te}, ${ae}, ${re}.schema)`);
    }
  }
  function V(C) {
    const { gen: P, schemaEnv: L, validateName: G, ValidationError: Z, opts: te } = C;
    L.$async ? P.if((0, a._)`${c.default.errors} === 0`, () => P.return(c.default.data), () => P.throw((0, a._)`new ${Z}(${c.default.vErrors})`)) : (P.assign((0, a._)`${G}.errors`, c.default.vErrors), te.unevaluated && U(C), P.return((0, a._)`${c.default.errors} === 0`));
  }
  function U({ gen: C, evaluated: P, props: L, items: G }) {
    L instanceof a.Name && C.assign((0, a._)`${P}.props`, L), G instanceof a.Name && C.assign((0, a._)`${P}.items`, G);
  }
  function Y(C, P, L, G) {
    const { gen: Z, schema: te, data: ae, allErrors: re, opts: se, self: de } = C, { RULES: pe } = de;
    if (te.$ref && (se.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(te, pe))) {
      Z.block(() => z(C, "$ref", pe.all.$ref.definition));
      return;
    }
    se.jtd || Q(C, P), Z.block(() => {
      for (const ve of pe.rules)
        ye(ve);
      ye(pe.post);
    });
    function ye(ve) {
      (0, n.shouldUseGroup)(te, ve) && (ve.type ? (Z.if((0, r.checkDataType)(ve.type, ae, se.strictNumbers)), oe(C, ve), P.length === 1 && P[0] === ve.type && L && (Z.else(), (0, r.reportTypeError)(C)), Z.endIf()) : oe(C, ve), re || Z.if((0, a._)`${c.default.errors} === ${G || 0}`));
    }
  }
  function oe(C, P) {
    const { gen: L, schema: G, opts: { useDefaults: Z } } = C;
    Z && (0, o.assignDefaults)(C, P.type), L.block(() => {
      for (const te of P.rules)
        (0, n.shouldUseRule)(G, te) && z(C, te.keyword, te.definition, P.type);
    });
  }
  function Q(C, P) {
    C.schemaEnv.meta || !C.opts.strictTypes || (ie(C, P), C.opts.allowUnionTypes || X(C, P), j(C, C.dataTypes));
  }
  function ie(C, P) {
    if (P.length) {
      if (!C.dataTypes.length) {
        C.dataTypes = P;
        return;
      }
      P.forEach((L) => {
        O(C.dataTypes, L) || E(C, `type "${L}" not allowed by context "${C.dataTypes.join(",")}"`);
      }), b(C, P);
    }
  }
  function X(C, P) {
    P.length > 1 && !(P.length === 2 && P.includes("null")) && E(C, "use allowUnionTypes to allow union type keyword");
  }
  function j(C, P) {
    const L = C.self.RULES.all;
    for (const G in L) {
      const Z = L[G];
      if (typeof Z == "object" && (0, n.shouldUseRule)(C.schema, Z)) {
        const { type: te } = Z.definition;
        te.length && !te.some((ae) => F(P, ae)) && E(C, `missing type "${te.join(",")}" for keyword "${G}"`);
      }
    }
  }
  function F(C, P) {
    return C.includes(P) || P === "number" && C.includes("integer");
  }
  function O(C, P) {
    return C.includes(P) || P === "integer" && C.includes("number");
  }
  function b(C, P) {
    const L = [];
    for (const G of C.dataTypes)
      O(P, G) ? L.push(G) : P.includes("integer") && G === "number" && L.push("integer");
    C.dataTypes = L;
  }
  function E(C, P) {
    const L = C.schemaEnv.baseId + C.errSchemaPath;
    P += ` at "${L}" (strictTypes)`, (0, f.checkStrictMode)(C, P, C.opts.strictTypes);
  }
  class D {
    constructor(P, L, G) {
      if ((0, i.validateKeywordUsage)(P, L, G), this.gen = P.gen, this.allErrors = P.allErrors, this.keyword = G, this.data = P.data, this.schema = P.schema[G], this.$data = L.$data && P.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(P, this.schema, G, this.$data), this.schemaType = L.schemaType, this.parentSchema = P.schema, this.params = {}, this.it = P, this.def = L, this.$data)
        this.schemaCode = P.gen.const("vSchema", J(this.$data, P));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${G} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = P.gen.const("_errs", c.default.errors));
    }
    result(P, L, G) {
      this.failResult((0, a.not)(P), L, G);
    }
    failResult(P, L, G) {
      this.gen.if(P), G ? G() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(P, L) {
      this.failResult((0, a.not)(P), void 0, L);
    }
    fail(P) {
      if (P === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(P), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(P) {
      if (!this.$data)
        return this.fail(P);
      const { schemaCode: L } = this;
      this.fail((0, a._)`${L} !== undefined && (${(0, a.or)(this.invalid$data(), P)})`);
    }
    error(P, L, G) {
      if (L) {
        this.setParams(L), this._error(P, G), this.setParams({});
        return;
      }
      this._error(P, G);
    }
    _error(P, L) {
      (P ? $.reportExtraError : $.reportError)(this, this.def.error, L);
    }
    $dataError() {
      (0, $.reportError)(this, this.def.$dataError || $.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, $.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(P) {
      this.allErrors || this.gen.if(P);
    }
    setParams(P, L) {
      L ? Object.assign(this.params, P) : this.params = P;
    }
    block$data(P, L, G = a.nil) {
      this.gen.block(() => {
        this.check$data(P, G), L();
      });
    }
    check$data(P = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: G, schemaCode: Z, schemaType: te, def: ae } = this;
      G.if((0, a.or)((0, a._)`${Z} === undefined`, L)), P !== a.nil && G.assign(P, !0), (te.length || ae.validateSchema) && (G.elseIf(this.invalid$data()), this.$dataError(), P !== a.nil && G.assign(P, !1)), G.else();
    }
    invalid$data() {
      const { gen: P, schemaCode: L, schemaType: G, def: Z, it: te } = this;
      return (0, a.or)(ae(), re());
      function ae() {
        if (G.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const se = Array.isArray(G) ? G : [G];
          return (0, a._)`${(0, r.checkDataTypes)(se, L, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function re() {
        if (Z.validateSchema) {
          const se = P.scopeValue("validate$data", { ref: Z.validateSchema });
          return (0, a._)`!${se}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(P, L) {
      const G = (0, s.getSubschema)(this.it, P);
      (0, s.extendSubschemaData)(G, this.it, P), (0, s.extendSubschemaMode)(G, P);
      const Z = { ...this.it, ...G, items: void 0, props: void 0 };
      return k(Z, L), Z;
    }
    mergeEvaluated(P, L) {
      const { it: G, gen: Z } = this;
      G.opts.unevaluated && (G.props !== !0 && P.props !== void 0 && (G.props = f.mergeEvaluated.props(Z, P.props, G.props, L)), G.items !== !0 && P.items !== void 0 && (G.items = f.mergeEvaluated.items(Z, P.items, G.items, L)));
    }
    mergeValidEvaluated(P, L) {
      const { it: G, gen: Z } = this;
      if (G.opts.unevaluated && (G.props !== !0 || G.items !== !0))
        return Z.if(L, () => this.mergeEvaluated(P, a.Name)), !0;
    }
  }
  Be.KeywordCxt = D;
  function z(C, P, L, G) {
    const Z = new D(C, L, P);
    "code" in L ? L.code(Z, G) : Z.$data && L.validate ? (0, i.funcKeywordCode)(Z, L) : "macro" in L ? (0, i.macroKeywordCode)(Z, L) : (L.compile || L.validate) && (0, i.funcKeywordCode)(Z, L);
  }
  const q = /^\/(?:[^~]|~0|~1)*$/, W = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(C, { dataLevel: P, dataNames: L, dataPathArr: G }) {
    let Z, te;
    if (C === "")
      return c.default.rootData;
    if (C[0] === "/") {
      if (!q.test(C))
        throw new Error(`Invalid JSON-pointer: ${C}`);
      Z = C, te = c.default.rootData;
    } else {
      const de = W.exec(C);
      if (!de)
        throw new Error(`Invalid JSON-pointer: ${C}`);
      const pe = +de[1];
      if (Z = de[2], Z === "#") {
        if (pe >= P)
          throw new Error(se("property/index", pe));
        return G[P - pe];
      }
      if (pe > P)
        throw new Error(se("data", pe));
      if (te = L[P - pe], !Z)
        return te;
    }
    let ae = te;
    const re = Z.split("/");
    for (const de of re)
      de && (te = (0, a._)`${te}${(0, a.getProperty)((0, f.unescapeJsonPointer)(de))}`, ae = (0, a._)`${ae} && ${te}`);
    return ae;
    function se(de, pe) {
      return `Cannot access ${de} ${pe} levels up, current level is ${P}`;
    }
  }
  return Be.getData = J, Be;
}
var Kt = {}, Yo;
function co() {
  if (Yo) return Kt;
  Yo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Kt.default = e, Kt;
}
var Gt = {}, Xo;
function sr() {
  if (Xo) return Gt;
  Xo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ or();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Gt.default = t, Gt;
}
var Se = {}, Zo;
function ar() {
  if (Zo) return Se;
  Zo = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.resolveSchema = Se.getCompilingSchema = Se.resolveRef = Se.compileSchema = Se.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ co(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ or(), o = /* @__PURE__ */ fe(), i = /* @__PURE__ */ ir();
  class s {
    constructor(y) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof y.schema == "object" && (k = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (h = y.baseId) !== null && h !== void 0 ? h : (0, r.normalizeId)(k?.[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  Se.SchemaEnv = s;
  function a(u) {
    const y = f.call(this, u);
    if (y)
      return y;
    const h = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: k, lines: S } = this.opts.code, { ownProperties: l } = this.opts, p = new e.CodeGen(this.scope, { es5: k, lines: S, ownProperties: l });
    let m;
    u.$async && (m = p.scopeValue("Error", {
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
      ValidationError: m,
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
      this._compilations.add(u), (0, i.validateFunctionCode)(A), p.optimize(this.opts.code.optimize);
      const I = p.toString();
      R = `${p.scopeRefs(n.default.scope)}return ${I}`, this.opts.code.process && (R = this.opts.code.process(R, u));
      const B = new Function(`${n.default.self}`, `${n.default.scope}`, R)(this, this.scope.get());
      if (this.scope.value(x, { ref: B }), B.errors = null, B.schema = u.schema, B.schemaEnv = u, u.$async && (B.$async = !0), this.opts.code.source === !0 && (B.source = { validateName: x, validateCode: I, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: V, items: U } = A;
        B.evaluated = {
          props: V instanceof e.Name ? void 0 : V,
          items: U instanceof e.Name ? void 0 : U,
          dynamicProps: V instanceof e.Name,
          dynamicItems: U instanceof e.Name
        }, B.source && (B.source.evaluated = (0, e.stringify)(B.evaluated));
      }
      return u.validate = B, u;
    } catch (I) {
      throw delete u.validate, delete u.validateName, R && this.logger.error("Error compiling schema, function code:", R), I;
    } finally {
      this._compilations.delete(u);
    }
  }
  Se.compileSchema = a;
  function c(u, y, h) {
    var k;
    h = (0, r.resolveUrl)(this.opts.uriResolver, y, h);
    const S = u.refs[h];
    if (S)
      return S;
    let l = w.call(this, u, h);
    if (l === void 0) {
      const p = (k = u.localRefs) === null || k === void 0 ? void 0 : k[h], { schemaId: m } = this.opts;
      p && (l = new s({ schema: p, schemaId: m, root: u, baseId: y }));
    }
    if (l !== void 0)
      return u.refs[h] = d.call(this, l);
  }
  Se.resolveRef = c;
  function d(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function f(u) {
    for (const y of this._compilations)
      if ($(y, u))
        return y;
  }
  Se.getCompilingSchema = f;
  function $(u, y) {
    return u.schema === y.schema && u.root === y.root && u.baseId === y.baseId;
  }
  function w(u, y) {
    let h;
    for (; typeof (h = this.refs[y]) == "string"; )
      y = h;
    return h || this.schemas[y] || g.call(this, u, y);
  }
  function g(u, y) {
    const h = this.opts.uriResolver.parse(y), k = (0, r._getFullPath)(this.opts.uriResolver, h);
    let S = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && k === S)
      return v.call(this, h, u);
    const l = (0, r.normalizeId)(k), p = this.refs[l] || this.schemas[l];
    if (typeof p == "string") {
      const m = g.call(this, u, p);
      return typeof m?.schema != "object" ? void 0 : v.call(this, h, m);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), l === (0, r.normalizeId)(y)) {
        const { schema: m } = p, { schemaId: x } = this.opts, A = m[x];
        return A && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, A)), new s({ schema: m, schemaId: x, root: u, baseId: S });
      }
      return v.call(this, h, p);
    }
  }
  Se.resolveSchema = g;
  const _ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function v(u, { baseId: y, schema: h, root: k }) {
    var S;
    if (((S = u.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const m of u.fragment.slice(1).split("/")) {
      if (typeof h == "boolean")
        return;
      const x = h[(0, o.unescapeFragment)(m)];
      if (x === void 0)
        return;
      h = x;
      const A = typeof h == "object" && h[this.opts.schemaId];
      !_.has(m) && A && (y = (0, r.resolveUrl)(this.opts.uriResolver, y, A));
    }
    let l;
    if (typeof h != "boolean" && h.$ref && !(0, o.schemaHasRulesButRef)(h, this.RULES)) {
      const m = (0, r.resolveUrl)(this.opts.uriResolver, y, h.$ref);
      l = g.call(this, k, m);
    }
    const { schemaId: p } = this.opts;
    if (l = l || new s({ schema: h, schemaId: p, root: k, baseId: y }), l.schema !== l.root.schema)
      return l;
  }
  return Se;
}
const zc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ic = "Meta-schema for $data reference (JSON AnySchema extension proposal)", jc = "object", Dc = ["$data"], Lc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, qc = !1, Vc = {
  $id: zc,
  description: Ic,
  type: jc,
  required: Dc,
  properties: Lc,
  additionalProperties: qc
};
var Wt = {}, Mt = { exports: {} }, _r, Qo;
function aa() {
  if (Qo) return _r;
  Qo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(l) {
    let p = "", m = 0, x = 0;
    for (x = 0; x < l.length; x++)
      if (m = l[x].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        p += l[x];
        break;
      }
    for (x += 1; x < l.length; x++) {
      if (m = l[x].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      p += l[x];
    }
    return p;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, p, m) {
    if (l.length) {
      const x = i(l);
      if (x !== "")
        p.push(x);
      else
        return m.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let p = 0;
    const m = { error: !1, address: "", zone: "" }, x = [], A = [];
    let R = !1, I = !1, T = c;
    for (let B = 0; B < l.length; B++) {
      const V = l[B];
      if (!(V === "[" || V === "]"))
        if (V === ":") {
          if (R === !0 && (I = !0), !T(A, x, m))
            break;
          if (++p > 7) {
            m.error = !0;
            break;
          }
          B > 0 && l[B - 1] === ":" && (R = !0), x.push(":");
          continue;
        } else if (V === "%") {
          if (!T(A, x, m))
            break;
          T = a;
        } else {
          A.push(V);
          continue;
        }
    }
    return A.length && (T === a ? m.zone = A.join("") : I ? x.push(A.join("")) : x.push(i(A))), m.address = x.join(""), m;
  }
  function f(l) {
    if ($(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const p = d(l);
    if (p.error)
      return { host: l, isIPV6: !1 };
    {
      let m = p.address, x = p.address;
      return p.zone && (m += "%" + p.zone, x += "%25" + p.zone), { host: m, isIPV6: !0, escapedHost: x };
    }
  }
  function $(l, p) {
    let m = 0;
    for (let x = 0; x < l.length; x++)
      l[x] === p && m++;
    return m;
  }
  function w(l) {
    let p = l;
    const m = [];
    let x = -1, A = 0;
    for (; A = p.length; ) {
      if (A === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          m.push("/");
          break;
        } else {
          m.push(p);
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
          m.push("/");
          break;
        }
      } else if (A === 3 && p === "/..") {
        m.length !== 0 && m.pop(), m.push("/");
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
          p = p.slice(3), m.length !== 0 && m.pop();
          continue;
        }
      }
      if ((x = p.indexOf("/", 1)) === -1) {
        m.push(p);
        break;
      } else
        m.push(p.slice(0, x)), p = p.slice(x);
    }
    return m.join("");
  }
  const g = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, v = /[@/?#]/g;
  function u(l, p) {
    const m = p ? v : _;
    return m.lastIndex = 0, l.replace(m, (x) => g[x]);
  }
  function y(l, p = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let m = "";
    for (let x = 0; x < l.length; x++) {
      if (l[x] === "%" && x + 2 < l.length) {
        const A = l.slice(x + 1, x + 3);
        if (n(A)) {
          const R = A.toUpperCase(), I = String.fromCharCode(parseInt(R, 16));
          p && r(I) ? m += I : m += "%" + R, x += 2;
          continue;
        }
      }
      m += l[x];
    }
    return m;
  }
  function h(l) {
    let p = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const x = l.slice(m + 1, m + 3);
        if (n(x)) {
          const A = x.toUpperCase(), R = String.fromCharCode(parseInt(A, 16));
          R !== "." && r(R) ? p += R : p += "%" + A, m += 2;
          continue;
        }
      }
      o(l[m]) ? p += l[m] : p += escape(l[m]);
    }
    return p;
  }
  function k(l) {
    let p = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const x = l.slice(m + 1, m + 3);
        if (n(x)) {
          p += "%" + x.toUpperCase(), m += 2;
          continue;
        }
      }
      p += escape(l[m]);
    }
    return p;
  }
  function S(l) {
    const p = [];
    if (l.userinfo !== void 0 && (p.push(l.userinfo), p.push("@")), l.host !== void 0) {
      let m = unescape(l.host);
      if (!t(m)) {
        const x = f(m);
        x.isIPV6 === !0 ? m = `[${x.escapedHost}]` : m = u(m, !1);
      }
      p.push(m);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (p.push(":"), p.push(String(l.port))), p.length ? p.join("") : void 0;
  }
  return _r = {
    nonSimpleDomain: s,
    recomposeAuthority: S,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: y,
    normalizePathEncoding: h,
    escapePreservingEscapes: k,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: f,
    stringArrayToHexStripped: i
  }, _r;
}
var Sr, ei;
function Bc() {
  if (ei) return Sr;
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
      const [p, m] = l.resourceName.split("?");
      l.path = p && p !== "/" ? p : void 0, l.query = m, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function d(l, p) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const m = l.path.match(t);
    if (m) {
      const x = p.scheme || l.scheme || "urn";
      l.nid = m[1].toLowerCase(), l.nss = m[2];
      const A = `${x}:${p.nid || l.nid}`, R = S(A);
      l.path = void 0, R && (l = R.parse(l, p));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function f(l, p) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = p.scheme || l.scheme || "urn", x = l.nid.toLowerCase(), A = `${m}:${p.nid || x}`, R = S(A);
    R && (l = R.serialize(l, p));
    const I = l, T = l.nss;
    return I.path = `${x || p.nid}:${T}`, p.skipEscape = !0, I;
  }
  function $(l, p) {
    const m = l;
    return m.uuid = m.nss, m.nss = void 0, !p.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function w(l) {
    const p = l;
    return p.nss = (l.uuid || "").toLowerCase(), p;
  }
  const g = (
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
      domainHost: g.domainHost,
      parse: i,
      serialize: s
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
  ), k = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: g,
      https: _,
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
  return Sr = {
    wsIsSecure: o,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: S
  }, Sr;
}
var ti;
function Uc() {
  if (ti) return Mt.exports;
  ti = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = aa(), { SCHEMES: d, getSchemeHandler: f } = Bc();
  function $(A, R) {
    return typeof A == "string" ? A = /** @type {T} */
    l(A, R) : typeof A == "object" && (A = /** @type {T} */
    S(v(A, R), R)), A;
  }
  function w(A, R, I) {
    const T = I ? Object.assign({ scheme: "null" }, I) : { scheme: "null" }, B = g(S(A, T), S(R, T), T, !0);
    return T.skipEscape = !0, v(B, T);
  }
  function g(A, R, I, T) {
    const B = {};
    return T || (A = S(v(A, I), I), R = S(v(R, I), I)), I = I || {}, !I.tolerant && R.scheme ? (B.scheme = R.scheme, B.userinfo = R.userinfo, B.host = R.host, B.port = R.port, B.path = t(R.path || ""), B.query = R.query) : (R.userinfo !== void 0 || R.host !== void 0 || R.port !== void 0 ? (B.userinfo = R.userinfo, B.host = R.host, B.port = R.port, B.path = t(R.path || ""), B.query = R.query) : (R.path ? (R.path[0] === "/" ? B.path = t(R.path) : ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path ? B.path = "/" + R.path : A.path ? B.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + R.path : B.path = R.path, B.path = t(B.path)), B.query = R.query) : (B.path = A.path, R.query !== void 0 ? B.query = R.query : B.query = A.query), B.userinfo = A.userinfo, B.host = A.host, B.port = A.port), B.scheme = A.scheme), B.fragment = R.fragment, B;
  }
  function _(A, R, I) {
    const T = m(A, I), B = m(R, I);
    return T !== void 0 && B !== void 0 && T.toLowerCase() === B.toLowerCase();
  }
  function v(A, R) {
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
    }, T = Object.assign({}, R), B = [], V = f(T.scheme || I.scheme);
    V && V.serialize && V.serialize(I, T), I.path !== void 0 && (T.skipEscape ? I.path = r(I.path) : (I.path = i(I.path), I.scheme !== void 0 && (I.path = I.path.split("%3A").join(":")))), T.reference !== "suffix" && I.scheme && B.push(I.scheme, ":");
    const U = n(I);
    if (U !== void 0 && (T.reference !== "suffix" && B.push("//"), B.push(U), I.path && I.path[0] !== "/" && B.push("/")), I.path !== void 0) {
      let Y = I.path;
      !T.absolutePath && (!V || !V.absolutePath) && (Y = t(Y)), U === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), B.push(Y);
    }
    return I.query !== void 0 && B.push("?", I.query), I.fragment !== void 0 && B.push("#", I.fragment), B.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function h(A, R) {
    if (R[2] !== void 0 && A.path && A.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof A.port == "number" && (A.port < 0 || A.port > 65535))
      return "URI port is malformed.";
  }
  function k(A, R) {
    const I = Object.assign({}, R), T = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let B = !1, V = !1;
    I.reference === "suffix" && (I.scheme ? A = I.scheme + ":" + A : A = "//" + A);
    const U = A.match(y);
    U !== null && U[1].indexOf("\\") !== -1 && (T.error = "URI authority must not contain a literal backslash.", B = !0);
    const Y = A.match(u);
    if (Y) {
      T.scheme = Y[1], T.userinfo = Y[3], T.host = Y[4], T.port = parseInt(Y[5], 10), T.path = Y[6] || "", T.query = Y[7], T.fragment = Y[8], isNaN(T.port) && (T.port = Y[5]);
      const oe = h(T, Y);
      if (oe !== void 0 && (T.error = T.error || oe, B = !0), T.host)
        if (a(T.host) === !1) {
          const X = e(T.host);
          T.host = X.host.toLowerCase(), V = X.isIPV6;
        } else
          V = !0;
      T.scheme === void 0 && T.userinfo === void 0 && T.host === void 0 && T.port === void 0 && T.query === void 0 && !T.path ? T.reference = "same-document" : T.scheme === void 0 ? T.reference = "relative" : T.fragment === void 0 ? T.reference = "absolute" : T.reference = "uri", I.reference && I.reference !== "suffix" && I.reference !== T.reference && (T.error = T.error || "URI is not a " + I.reference + " reference.");
      const Q = f(I.scheme || T.scheme);
      if (!I.unicodeSupport && (!Q || !Q.unicodeSupport) && T.host && (I.domainHost || Q && Q.domainHost) && V === !1 && c(T.host))
        try {
          T.host = new URL("http://" + T.host).hostname;
        } catch (ie) {
          T.error = T.error || "Host's domain name can not be converted to ASCII: " + ie;
        }
      if ((!Q || Q && !Q.skipNormalize) && (A.indexOf("%") !== -1 && (T.scheme !== void 0 && (T.scheme = unescape(T.scheme)), T.host !== void 0 && (T.host = s(unescape(T.host), V))), T.path && (T.path = o(T.path)), T.fragment))
        try {
          T.fragment = encodeURI(decodeURIComponent(T.fragment));
        } catch {
          T.error = T.error || "URI malformed";
        }
      Q && Q.parse && Q.parse(T, I);
    } else
      T.error = T.error || "URI can not be parsed.";
    return { parsed: T, malformedAuthorityOrPort: B };
  }
  function S(A, R) {
    return k(A, R).parsed;
  }
  function l(A, R) {
    return p(A, R).normalized;
  }
  function p(A, R) {
    const { parsed: I, malformedAuthorityOrPort: T } = k(A, R);
    return {
      normalized: T ? A : v(I, R),
      malformedAuthorityOrPort: T
    };
  }
  function m(A, R) {
    if (typeof A == "string") {
      const { normalized: I, malformedAuthorityOrPort: T } = p(A, R);
      return T ? void 0 : I;
    }
    if (typeof A == "object")
      return v(A, R);
  }
  const x = {
    SCHEMES: d,
    normalize: $,
    resolve: w,
    resolveComponent: g,
    equal: _,
    serialize: v,
    parse: S
  };
  return Mt.exports = x, Mt.exports.default = x, Mt.exports.fastUri = x, Mt.exports;
}
var ni;
function Hc() {
  if (ni) return Wt;
  ni = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = Uc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Wt.default = e, Wt;
}
var ri;
function Kc() {
  return ri || (ri = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ ir();
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
    const r = /* @__PURE__ */ co(), o = /* @__PURE__ */ sr(), i = /* @__PURE__ */ oa(), s = /* @__PURE__ */ ar(), a = /* @__PURE__ */ ce(), c = /* @__PURE__ */ or(), d = /* @__PURE__ */ Jn(), f = /* @__PURE__ */ fe(), $ = Vc, w = /* @__PURE__ */ Hc(), g = (X, j) => new RegExp(X, j);
    g.code = "new RegExp";
    const _ = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set([
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
    }, h = 200;
    function k(X) {
      var j, F, O, b, E, D, z, q, W, J, C, P, L, G, Z, te, ae, re, se, de, pe, ye, ve, Ne, Ve;
      const ot = X.strict, hr = (j = X.code) === null || j === void 0 ? void 0 : j.optimize, Eo = hr === !0 || hr === void 0 ? 1 : hr || 0, Ao = (O = (F = X.code) === null || F === void 0 ? void 0 : F.regExp) !== null && O !== void 0 ? O : g, qa = (b = X.uriResolver) !== null && b !== void 0 ? b : w.default;
      return {
        strictSchema: (D = (E = X.strictSchema) !== null && E !== void 0 ? E : ot) !== null && D !== void 0 ? D : !0,
        strictNumbers: (q = (z = X.strictNumbers) !== null && z !== void 0 ? z : ot) !== null && q !== void 0 ? q : !0,
        strictTypes: (J = (W = X.strictTypes) !== null && W !== void 0 ? W : ot) !== null && J !== void 0 ? J : "log",
        strictTuples: (P = (C = X.strictTuples) !== null && C !== void 0 ? C : ot) !== null && P !== void 0 ? P : "log",
        strictRequired: (G = (L = X.strictRequired) !== null && L !== void 0 ? L : ot) !== null && G !== void 0 ? G : !1,
        code: X.code ? { ...X.code, optimize: Eo, regExp: Ao } : { optimize: Eo, regExp: Ao },
        loopRequired: (Z = X.loopRequired) !== null && Z !== void 0 ? Z : h,
        loopEnum: (te = X.loopEnum) !== null && te !== void 0 ? te : h,
        meta: (ae = X.meta) !== null && ae !== void 0 ? ae : !0,
        messages: (re = X.messages) !== null && re !== void 0 ? re : !0,
        inlineRefs: (se = X.inlineRefs) !== null && se !== void 0 ? se : !0,
        schemaId: (de = X.schemaId) !== null && de !== void 0 ? de : "$id",
        addUsedSchema: (pe = X.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (ye = X.validateSchema) !== null && ye !== void 0 ? ye : !0,
        validateFormats: (ve = X.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Ne = X.unicodeRegExp) !== null && Ne !== void 0 ? Ne : !0,
        int32range: (Ve = X.int32range) !== null && Ve !== void 0 ? Ve : !0,
        uriResolver: qa
      };
    }
    class S {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...k(j) };
        const { es5: F, lines: O } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: v, es5: F, lines: O }), this.logger = T(j.logger);
        const b = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, u, j, "NOT SUPPORTED"), l.call(this, y, j, "DEPRECATED", "warn"), this._metaOpts = R.call(this), j.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && A.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), m.call(this), j.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: F, schemaId: O } = this.opts;
        let b = $;
        O === "id" && (b = { ...$ }, b.id = b.$id, delete b.$id), F && j && this.addMetaSchema(b, b[O], !1);
      }
      defaultMeta() {
        const { meta: j, schemaId: F } = this.opts;
        return this.opts.defaultMeta = typeof j == "object" ? j[F] || j : void 0;
      }
      validate(j, F) {
        let O;
        if (typeof j == "string") {
          if (O = this.getSchema(j), !O)
            throw new Error(`no schema with key or ref "${j}"`);
        } else
          O = this.compile(j);
        const b = O(F);
        return "$async" in O || (this.errors = O.errors), b;
      }
      compile(j, F) {
        const O = this._addSchema(j, F);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(j, F) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return b.call(this, j, F);
        async function b(J, C) {
          await E.call(this, J.$schema);
          const P = this._addSchema(J, C);
          return P.validate || D.call(this, P);
        }
        async function E(J) {
          J && !this.getSchema(J) && await b.call(this, { $ref: J }, !0);
        }
        async function D(J) {
          try {
            return this._compileSchemaEnv(J);
          } catch (C) {
            if (!(C instanceof o.default))
              throw C;
            return z.call(this, C), await q.call(this, C.missingSchema), D.call(this, J);
          }
        }
        function z({ missingSchema: J, missingRef: C }) {
          if (this.refs[J])
            throw new Error(`AnySchema ${J} is loaded but ${C} cannot be resolved`);
        }
        async function q(J) {
          const C = await W.call(this, J);
          this.refs[J] || await E.call(this, C.$schema), this.refs[J] || this.addSchema(C, J, F);
        }
        async function W(J) {
          const C = this._loading[J];
          if (C)
            return C;
          try {
            return await (this._loading[J] = O(J));
          } finally {
            delete this._loading[J];
          }
        }
      }
      // Adds schema to the instance
      addSchema(j, F, O, b = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (const D of j)
            this.addSchema(D, void 0, O, b);
          return this;
        }
        let E;
        if (typeof j == "object") {
          const { schemaId: D } = this.opts;
          if (E = j[D], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${D} must be string`);
        }
        return F = (0, c.normalizeId)(F || E), this._checkUnique(F), this.schemas[F] = this._addSchema(j, O, F, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(j, F, O = this.opts.validateSchema) {
        return this.addSchema(j, F, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(j, F) {
        if (typeof j == "boolean")
          return !0;
        let O;
        if (O = j.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(O, j);
        if (!b && F) {
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
      getSchema(j) {
        let F;
        for (; typeof (F = p.call(this, j)) == "string"; )
          j = F;
        if (F === void 0) {
          const { schemaId: O } = this.opts, b = new s.SchemaEnv({ schema: {}, schemaId: O });
          if (F = s.resolveSchema.call(this, b, j), !F)
            return;
          this.refs[j] = F;
        }
        return F.validate || this._compileSchemaEnv(F);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(j) {
        if (j instanceof RegExp)
          return this._removeAllSchemas(this.schemas, j), this._removeAllSchemas(this.refs, j), this;
        switch (typeof j) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const F = p.call(this, j);
            return typeof F == "object" && this._cache.delete(F.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const F = j;
            this._cache.delete(F);
            let O = j[this.opts.schemaId];
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(j) {
        for (const F of j)
          this.addKeyword(F);
        return this;
      }
      addKeyword(j, F) {
        let O;
        if (typeof j == "string")
          O = j, typeof F == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), F.keyword = O);
        else if (typeof j == "object" && F === void 0) {
          if (F = j, O = F.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (V.call(this, O, F), !F)
          return (0, f.eachItem)(O, (E) => U.call(this, E)), this;
        oe.call(this, F);
        const b = {
          ...F,
          type: (0, d.getJSONTypes)(F.type),
          schemaType: (0, d.getJSONTypes)(F.schemaType)
        };
        return (0, f.eachItem)(O, b.type.length === 0 ? (E) => U.call(this, E, b) : (E) => b.type.forEach((D) => U.call(this, E, b, D))), this;
      }
      getKeyword(j) {
        const F = this.RULES.all[j];
        return typeof F == "object" ? F.definition : !!F;
      }
      // Remove keyword
      removeKeyword(j) {
        const { RULES: F } = this;
        delete F.keywords[j], delete F.all[j];
        for (const O of F.rules) {
          const b = O.rules.findIndex((E) => E.keyword === j);
          b >= 0 && O.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(j, F) {
        return typeof F == "string" && (F = new RegExp(F)), this.formats[j] = F, this;
      }
      errorsText(j = this.errors, { separator: F = ", ", dataVar: O = "data" } = {}) {
        return !j || j.length === 0 ? "No errors" : j.map((b) => `${O}${b.instancePath} ${b.message}`).reduce((b, E) => b + F + E);
      }
      $dataMetaSchema(j, F) {
        const O = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (const b of F) {
          const E = b.split("/").slice(1);
          let D = j;
          for (const z of E)
            D = D[z];
          for (const z in O) {
            const q = O[z];
            if (typeof q != "object")
              continue;
            const { $data: W } = q.definition, J = D[z];
            W && J && (D[z] = ie(J));
          }
        }
        return j;
      }
      _removeAllSchemas(j, F) {
        for (const O in j) {
          const b = j[O];
          (!F || F.test(O)) && (typeof b == "string" ? delete j[O] : b && !b.meta && (this._cache.delete(b.schema), delete j[O]));
        }
      }
      _addSchema(j, F, O, b = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let D;
        const { schemaId: z } = this.opts;
        if (typeof j == "object")
          D = j[z];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof j != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let q = this._cache.get(j);
        if (q !== void 0)
          return q;
        O = (0, c.normalizeId)(D || O);
        const W = c.getSchemaRefs.call(this, j, O);
        return q = new s.SchemaEnv({ schema: j, schemaId: z, meta: F, baseId: O, localRefs: W }), this._cache.set(q.schema, q), E && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = q), b && this.validateSchema(j, !0), q;
      }
      _checkUnique(j) {
        if (this.schemas[j] || this.refs[j])
          throw new Error(`schema with key or id "${j}" already exists`);
      }
      _compileSchemaEnv(j) {
        if (j.meta ? this._compileMetaSchema(j) : s.compileSchema.call(this, j), !j.validate)
          throw new Error("ajv implementation error");
        return j.validate;
      }
      _compileMetaSchema(j) {
        const F = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, j);
        } finally {
          this.opts = F;
        }
      }
    }
    S.ValidationError = r.default, S.MissingRefError = o.default, e.default = S;
    function l(X, j, F, O = "error") {
      for (const b in X) {
        const E = b;
        E in j && this.logger[O](`${F}: option ${b}. ${X[E]}`);
      }
    }
    function p(X) {
      return X = (0, c.normalizeId)(X), this.schemas[X] || this.refs[X];
    }
    function m() {
      const X = this.opts.schemas;
      if (X)
        if (Array.isArray(X))
          this.addSchema(X);
        else
          for (const j in X)
            this.addSchema(X[j], j);
    }
    function x() {
      for (const X in this.opts.formats) {
        const j = this.opts.formats[X];
        j && this.addFormat(X, j);
      }
    }
    function A(X) {
      if (Array.isArray(X)) {
        this.addVocabulary(X);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const j in X) {
        const F = X[j];
        F.keyword || (F.keyword = j), this.addKeyword(F);
      }
    }
    function R() {
      const X = { ...this.opts };
      for (const j of _)
        delete X[j];
      return X;
    }
    const I = { log() {
    }, warn() {
    }, error() {
    } };
    function T(X) {
      if (X === !1)
        return I;
      if (X === void 0)
        return console;
      if (X.log && X.warn && X.error)
        return X;
      throw new Error("logger must implement log, warn and error methods");
    }
    const B = /^[a-z_$][a-z0-9_$:-]*$/i;
    function V(X, j) {
      const { RULES: F } = this;
      if ((0, f.eachItem)(X, (O) => {
        if (F.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!B.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!j && j.$data && !("code" in j || "validate" in j))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function U(X, j, F) {
      var O;
      const b = j?.post;
      if (F && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let D = b ? E.post : E.rules.find(({ type: q }) => q === F);
      if (D || (D = { type: F, rules: [] }, E.rules.push(D)), E.keywords[X] = !0, !j)
        return;
      const z = {
        keyword: X,
        definition: {
          ...j,
          type: (0, d.getJSONTypes)(j.type),
          schemaType: (0, d.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? Y.call(this, D, z, j.before) : D.rules.push(z), E.all[X] = z, (O = j.implements) === null || O === void 0 || O.forEach((q) => this.addKeyword(q));
    }
    function Y(X, j, F) {
      const O = X.rules.findIndex((b) => b.keyword === F);
      O >= 0 ? X.rules.splice(O, 0, j) : (X.rules.push(j), this.logger.warn(`rule ${F} is not defined`));
    }
    function oe(X) {
      let { metaSchema: j } = X;
      j !== void 0 && (X.$data && this.opts.$data && (j = ie(j)), X.validateSchema = this.compile(j, !0));
    }
    const Q = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ie(X) {
      return { anyOf: [X, Q] };
    }
  })(mr)), mr;
}
var Jt = {}, Yt = {}, Xt = {}, oi;
function Gc() {
  if (oi) return Xt;
  oi = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Xt.default = e, Xt;
}
var Ye = {}, ii;
function lo() {
  if (ii) return Ye;
  ii = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.callRef = Ye.getValidate = void 0;
  const e = /* @__PURE__ */ sr(), t = /* @__PURE__ */ je(), n = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Ie(), o = /* @__PURE__ */ ar(), i = /* @__PURE__ */ fe(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: f, schema: $, it: w } = d, { baseId: g, schemaEnv: _, validateName: v, opts: u, self: y } = w, { root: h } = _;
      if (($ === "#" || $ === "#/") && g === h.baseId)
        return S();
      const k = o.resolveRef.call(y, h, g, $);
      if (k === void 0)
        throw new e.default(w.opts.uriResolver, g, $);
      if (k instanceof o.SchemaEnv)
        return l(k);
      return p(k);
      function S() {
        if (_ === h)
          return c(d, v, _, _.$async);
        const m = f.scopeValue("root", { ref: h });
        return c(d, (0, n._)`${m}.validate`, h, h.$async);
      }
      function l(m) {
        const x = a(d, m);
        c(d, x, m, m.$async);
      }
      function p(m) {
        const x = f.scopeValue("schema", u.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), A = f.name("valid"), R = d.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: $
        }, A);
        d.mergeEvaluated(R), d.ok(A);
      }
    }
  };
  function a(d, f) {
    const { gen: $ } = d;
    return f.validate ? $.scopeValue("validate", { ref: f.validate }) : (0, n._)`${$.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Ye.getValidate = a;
  function c(d, f, $, w) {
    const { gen: g, it: _ } = d, { allErrors: v, schemaEnv: u, opts: y } = _, h = y.passContext ? r.default.this : n.nil;
    w ? k() : S();
    function k() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const m = g.let("valid");
      g.try(() => {
        g.code((0, n._)`await ${(0, t.callValidateCode)(d, f, h)}`), p(f), v || g.assign(m, !0);
      }, (x) => {
        g.if((0, n._)`!(${x} instanceof ${_.ValidationError})`, () => g.throw(x)), l(x), v || g.assign(m, !1);
      }), d.ok(m);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, f, h), () => p(f), () => l(f));
    }
    function l(m) {
      const x = (0, n._)`${m}.errors`;
      g.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${x} : ${r.default.vErrors}.concat(${x})`), g.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function p(m) {
      var x;
      if (!_.opts.unevaluated)
        return;
      const A = (x = $?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (_.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (_.props = i.mergeEvaluated.props(g, A.props, _.props));
        else {
          const R = g.var("props", (0, n._)`${m}.evaluated.props`);
          _.props = i.mergeEvaluated.props(g, R, _.props, n.Name);
        }
      if (_.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (_.items = i.mergeEvaluated.items(g, A.items, _.items));
        else {
          const R = g.var("items", (0, n._)`${m}.evaluated.items`);
          _.items = i.mergeEvaluated.items(g, R, _.items, n.Name);
        }
    }
  }
  return Ye.callRef = c, Ye.default = s, Ye;
}
var si;
function Wc() {
  if (si) return Yt;
  si = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gc(), t = /* @__PURE__ */ lo(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Yt.default = n, Yt;
}
var Zt = {}, Qt = {}, ai;
function Jc() {
  if (ai) return Qt;
  ai = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
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
  return Qt.default = o, Qt;
}
var en = {}, ci;
function Yc() {
  if (ci) return en;
  ci = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
  return en.default = n, en;
}
var tn = {}, nn = {}, li;
function Xc() {
  if (li) return nn;
  li = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return nn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', nn;
}
var di;
function Zc() {
  if (di) return tn;
  di = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ Xc(), o = {
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
  return tn.default = o, tn;
}
var rn = {}, ui;
function Qc() {
  if (ui) return rn;
  ui = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ je(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ ce(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: f, it: $ } = i, w = $.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: g } = $.opts.code, _ = g.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, g), v = s.let("valid");
        s.try(() => s.assign(v, (0, n._)`${_}(${f}, ${w}).test(${a})`), () => s.assign(v, !1)), i.fail$data((0, n._)`!${v}`);
      } else {
        const g = (0, e.usePattern)(i, d);
        i.fail$data((0, n._)`!${g}.test(${a})`);
      }
    }
  };
  return rn.default = o, rn;
}
var on = {}, fi;
function el() {
  if (fi) return on;
  fi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
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
  return on.default = n, on;
}
var sn = {}, pi;
function tl() {
  if (pi) return sn;
  pi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ je(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fe(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: c, data: d, $data: f, it: $ } = i, { opts: w } = $;
      if (!f && a.length === 0)
        return;
      const g = a.length >= w.loopRequired;
      if ($.allErrors ? _() : v(), w.strictRequired) {
        const h = i.parentSchema.properties, { definedProperties: k } = i.it;
        for (const S of a)
          if (h?.[S] === void 0 && !k.has(S)) {
            const l = $.schemaEnv.baseId + $.errSchemaPath, p = `required property "${S}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)($, p, $.opts.strictRequired);
          }
      }
      function _() {
        if (g || f)
          i.block$data(t.nil, u);
        else
          for (const h of a)
            (0, e.checkReportMissingProp)(i, h);
      }
      function v() {
        const h = s.let("missing");
        if (g || f) {
          const k = s.let("valid", !0);
          i.block$data(k, () => y(h, k)), i.ok(k);
        } else
          s.if((0, e.checkMissingProp)(i, a, h)), (0, e.reportMissingProp)(i, h), s.else();
      }
      function u() {
        s.forOf("prop", c, (h) => {
          i.setParams({ missingProperty: h }), s.if((0, e.noPropertyInData)(s, d, h, w.ownProperties), () => i.error());
        });
      }
      function y(h, k) {
        i.setParams({ missingProperty: h }), s.forOf(h, c, () => {
          s.assign(k, (0, e.propertyInData)(s, d, h, w.ownProperties)), s.if((0, t.not)(k), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return sn.default = o, sn;
}
var an = {}, hi;
function nl() {
  if (hi) return an;
  hi = 1, Object.defineProperty(an, "__esModule", { value: !0 });
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
  return an.default = n, an;
}
var cn = {}, ln = {}, mi;
function uo() {
  if (mi) return ln;
  mi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = sa();
  return e.code = 'require("ajv/dist/runtime/equal").default', ln.default = e, ln;
}
var gi;
function rl() {
  if (gi) return cn;
  gi = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fe(), r = /* @__PURE__ */ uo(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: d, schema: f, parentSchema: $, schemaCode: w, it: g } = s;
      if (!d && !f)
        return;
      const _ = a.let("valid"), v = $.items ? (0, e.getSchemaTypes)($.items) : [];
      s.block$data(_, u, (0, t._)`${w} === false`), s.ok(_);
      function u() {
        const S = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: S, j: l }), a.assign(_, !0), a.if((0, t._)`${S} > 1`, () => (y() ? h : k)(S, l));
      }
      function y() {
        return v.length > 0 && !v.some((S) => S === "object" || S === "array");
      }
      function h(S, l) {
        const p = a.name("item"), m = (0, e.checkDataTypes)(v, p, g.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${S}--;`, () => {
          a.let(p, (0, t._)`${c}[${S}]`), a.if(m, (0, t._)`continue`), v.length > 1 && a.if((0, t._)`typeof ${p} == "string"`, (0, t._)`${p} += "_"`), a.if((0, t._)`typeof ${x}[${p}] == "number"`, () => {
            a.assign(l, (0, t._)`${x}[${p}]`), s.error(), a.assign(_, !1).break();
          }).code((0, t._)`${x}[${p}] = ${S}`);
        });
      }
      function k(S, l) {
        const p = (0, n.useFunc)(a, r.default), m = a.name("outer");
        a.label(m).for((0, t._)`;${S}--;`, () => a.for((0, t._)`${l} = ${S}; ${l}--;`, () => a.if((0, t._)`${p}(${c}[${S}], ${c}[${l}])`, () => {
          s.error(), a.assign(_, !1).break(m);
        })));
      }
    }
  };
  return cn.default = i, cn;
}
var dn = {}, yi;
function ol() {
  if (yi) return dn;
  yi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ uo(), o = {
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
  return dn.default = o, dn;
}
var un = {}, $i;
function il() {
  if ($i) return un;
  $i = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ uo(), o = {
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
      const w = d.length >= $.opts.loopEnum;
      let g;
      const _ = () => g ?? (g = (0, t.useFunc)(s, n.default));
      let v;
      if (w || c)
        v = s.let("valid"), i.block$data(v, u);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const h = s.const("vSchema", f);
        v = (0, e.or)(...d.map((k, S) => y(h, S)));
      }
      i.pass(v);
      function u() {
        s.assign(v, !1), s.forOf("v", f, (h) => s.if((0, e._)`${_()}(${a}, ${h})`, () => s.assign(v, !0).break()));
      }
      function y(h, k) {
        const S = d[k];
        return typeof S == "object" && S !== null ? (0, e._)`${_()}(${a}, ${h}[${k}])` : (0, e._)`${a} === ${S}`;
      }
    }
  };
  return un.default = o, un;
}
var vi;
function sl() {
  if (vi) return Zt;
  vi = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jc(), t = /* @__PURE__ */ Yc(), n = /* @__PURE__ */ Zc(), r = /* @__PURE__ */ Qc(), o = /* @__PURE__ */ el(), i = /* @__PURE__ */ tl(), s = /* @__PURE__ */ nl(), a = /* @__PURE__ */ rl(), c = /* @__PURE__ */ ol(), d = /* @__PURE__ */ il(), f = [
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
  return Zt.default = f, Zt;
}
var fn = {}, ht = {}, bi;
function ca() {
  if (bi) return ht;
  bi = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), r = {
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
    const w = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${w} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)($, c)) {
      const _ = a.var("valid", (0, e._)`${w} <= ${s.length}`);
      a.if((0, e.not)(_), () => g(_)), i.ok(_);
    }
    function g(_) {
      a.forRange("i", s.length, w, (v) => {
        i.subschema({ keyword: f, dataProp: v, dataPropType: t.Type.Num }, _), $.allErrors || a.if((0, e.not)(_), () => a.break());
      });
    }
  }
  return ht.validateAdditionalItems = o, ht.default = r, ht;
}
var pn = {}, mt = {}, wi;
function la() {
  if (wi) return mt;
  wi = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.validateTuple = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ je(), r = {
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
    const { gen: c, parentSchema: d, data: f, keyword: $, it: w } = i;
    v(d), w.opts.unevaluated && a.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(c, a.length, w.items));
    const g = c.name("valid"), _ = c.const("len", (0, e._)`${f}.length`);
    a.forEach((u, y) => {
      (0, t.alwaysValidSchema)(w, u) || (c.if((0, e._)`${_} > ${y}`, () => i.subschema({
        keyword: $,
        schemaProp: y,
        dataProp: y
      }, g)), i.ok(g));
    });
    function v(u) {
      const { opts: y, errSchemaPath: h } = w, k = a.length, S = k === u.minItems && (k === u.maxItems || u[s] === !1);
      if (y.strictTuples && !S) {
        const l = `"${$}" is ${k}-tuple, but minItems or maxItems/${s} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(w, l, y.strictTuples);
      }
    }
  }
  return mt.validateTuple = o, mt.default = r, mt;
}
var _i;
function al() {
  if (_i) return pn;
  _i = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ la(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return pn.default = t, pn;
}
var hn = {}, Si;
function cl() {
  if (Si) return hn;
  Si = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ je(), r = /* @__PURE__ */ ca(), i = {
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
  return hn.default = i, hn;
}
var mn = {}, Ci;
function ll() {
  if (Ci) return mn;
  Ci = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), r = {
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
      const { minContains: w, maxContains: g } = a;
      d.opts.next ? (f = w === void 0 ? 1 : w, $ = g) : f = 1;
      const _ = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: f, max: $ }), $ === void 0 && f === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if ($ !== void 0 && f > $) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, s)) {
        let k = (0, e._)`${_} >= ${f}`;
        $ !== void 0 && (k = (0, e._)`${k} && ${_} <= ${$}`), o.pass(k);
        return;
      }
      d.items = !0;
      const v = i.name("valid");
      $ === void 0 && f === 1 ? y(v, () => i.if(v, () => i.break())) : f === 0 ? (i.let(v, !0), $ !== void 0 && i.if((0, e._)`${c}.length > 0`, u)) : (i.let(v, !1), u()), o.result(v, () => o.reset());
      function u() {
        const k = i.name("_valid"), S = i.let("count", 0);
        y(k, () => i.if(k, () => h(S)));
      }
      function y(k, S) {
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
        i.code((0, e._)`${k}++`), $ === void 0 ? i.if((0, e._)`${k} >= ${f}`, () => i.assign(v, !0).break()) : (i.if((0, e._)`${k} > ${$}`, () => i.assign(v, !1).break()), f === 1 ? i.assign(v, !0) : i.if((0, e._)`${k} >= ${f}`, () => i.assign(v, !0)));
      }
    }
  };
  return mn.default = r, mn;
}
var Cr = {}, ki;
function fo() {
  return ki || (ki = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fe(), r = /* @__PURE__ */ je();
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
        const w = Array.isArray(c[$]) ? d : f;
        w[$] = c[$];
      }
      return [d, f];
    }
    function s(c, d = c.schema) {
      const { gen: f, data: $, it: w } = c;
      if (Object.keys(d).length === 0)
        return;
      const g = f.let("missing");
      for (const _ in d) {
        const v = d[_];
        if (v.length === 0)
          continue;
        const u = (0, r.propertyInData)(f, $, _, w.opts.ownProperties);
        c.setParams({
          property: _,
          depsCount: v.length,
          deps: v.join(", ")
        }), w.allErrors ? f.if(u, () => {
          for (const y of v)
            (0, r.checkReportMissingProp)(c, y);
        }) : (f.if((0, t._)`${u} && (${(0, r.checkMissingProp)(c, v, g)})`), (0, r.reportMissingProp)(c, g), f.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, d = c.schema) {
      const { gen: f, data: $, keyword: w, it: g } = c, _ = f.name("valid");
      for (const v in d)
        (0, n.alwaysValidSchema)(g, d[v]) || (f.if(
          (0, r.propertyInData)(f, $, v, g.opts.ownProperties),
          () => {
            const u = c.subschema({ keyword: w, schemaProp: v }, _);
            c.mergeValidEvaluated(u, _);
          },
          () => f.var(_, !0)
          // TODO var
        ), c.ok(_));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Cr)), Cr;
}
var gn = {}, xi;
function dl() {
  if (xi) return gn;
  xi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), r = {
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
  return gn.default = r, gn;
}
var yn = {}, Ei;
function da() {
  if (Ei) return yn;
  Ei = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ je(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ fe(), i = {
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
      const { gen: a, schema: c, parentSchema: d, data: f, errsCount: $, it: w } = s;
      if (!$)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: _ } = w;
      if (w.props = !0, _.removeAdditional !== "all" && (0, r.alwaysValidSchema)(w, c))
        return;
      const v = (0, e.allSchemaProperties)(d.properties), u = (0, e.allSchemaProperties)(d.patternProperties);
      y(), s.ok((0, t._)`${$} === ${n.default.errors}`);
      function y() {
        a.forIn("key", f, (p) => {
          !v.length && !u.length ? S(p) : a.if(h(p), () => S(p));
        });
      }
      function h(p) {
        let m;
        if (v.length > 8) {
          const x = (0, r.schemaRefOrVal)(w, d.properties, "properties");
          m = (0, e.isOwnProperty)(a, x, p);
        } else v.length ? m = (0, t.or)(...v.map((x) => (0, t._)`${p} === ${x}`)) : m = t.nil;
        return u.length && (m = (0, t.or)(m, ...u.map((x) => (0, t._)`${(0, e.usePattern)(s, x)}.test(${p})`))), (0, t.not)(m);
      }
      function k(p) {
        a.code((0, t._)`delete ${f}[${p}]`);
      }
      function S(p) {
        if (_.removeAdditional === "all" || _.removeAdditional && c === !1) {
          k(p);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: p }), s.error(), g || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(w, c)) {
          const m = a.name("valid");
          _.removeAdditional === "failing" ? (l(p, m, !1), a.if((0, t.not)(m), () => {
            s.reset(), k(p);
          })) : (l(p, m), g || a.if((0, t.not)(m), () => a.break()));
        }
      }
      function l(p, m, x) {
        const A = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(A, m);
      }
    }
  };
  return yn.default = i, yn;
}
var $n = {}, Ai;
function ul() {
  if (Ai) return $n;
  Ai = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ir(), t = /* @__PURE__ */ je(), n = /* @__PURE__ */ fe(), r = /* @__PURE__ */ da(), o = {
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
      const w = $.filter((u) => !(0, n.alwaysValidSchema)(f, a[u]));
      if (w.length === 0)
        return;
      const g = s.name("valid");
      for (const u of w)
        _(u) ? v(u) : (s.if((0, t.propertyInData)(s, d, u, f.opts.ownProperties)), v(u), f.allErrors || s.else().var(g, !0), s.endIf()), i.it.definedProperties.add(u), i.ok(g);
      function _(u) {
        return f.opts.useDefaults && !f.compositeRule && a[u].default !== void 0;
      }
      function v(u) {
        i.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, g);
      }
    }
  };
  return $n.default = o, $n;
}
var vn = {}, Pi;
function fl() {
  if (Pi) return vn;
  Pi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ je(), t = /* @__PURE__ */ ce(), n = /* @__PURE__ */ fe(), r = /* @__PURE__ */ fe(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: d, it: f } = i, { opts: $ } = f, w = (0, e.allSchemaProperties)(a), g = w.filter((S) => (0, n.alwaysValidSchema)(f, a[S]));
      if (w.length === 0 || g.length === w.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const _ = $.strictSchema && !$.allowMatchingProperties && d.properties, v = s.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, r.evaluatedPropsToName)(s, f.props));
      const { props: u } = f;
      y();
      function y() {
        for (const S of w)
          _ && h(S), f.allErrors ? k(S) : (s.var(v, !0), k(S), s.if(v));
      }
      function h(S) {
        for (const l in _)
          new RegExp(S).test(l) && (0, n.checkStrictMode)(f, `property ${l} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function k(S) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, S)}.test(${l})`, () => {
            const p = g.includes(S);
            p || i.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: l,
              dataPropType: r.Type.Str
            }, v), f.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${l}]`, !0) : !p && !f.allErrors && s.if((0, t.not)(v), () => s.break());
          });
        });
      }
    }
  };
  return vn.default = o, vn;
}
var bn = {}, Ri;
function pl() {
  if (Ri) return bn;
  Ri = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
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
  return bn.default = t, bn;
}
var wn = {}, Mi;
function hl() {
  if (Mi) return wn;
  Mi = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ je()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return wn.default = t, wn;
}
var _n = {}, Ni;
function ml() {
  if (Ni) return _n;
  Ni = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), r = {
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
      const d = s, f = i.let("valid", !1), $ = i.let("passing", null), w = i.name("_valid");
      o.setParams({ passing: $ }), i.block(g), o.result(f, () => o.reset(), () => o.error(!0));
      function g() {
        d.forEach((_, v) => {
          let u;
          (0, t.alwaysValidSchema)(c, _) ? i.var(w, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: v,
            compositeRule: !0
          }, w), v > 0 && i.if((0, e._)`${w} && ${f}`).assign(f, !1).assign($, (0, e._)`[${$}, ${v}]`).else(), i.if(w, () => {
            i.assign(f, !0), i.assign($, v), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return _n.default = r, _n;
}
var Sn = {}, Ti;
function gl() {
  if (Ti) return Sn;
  Ti = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
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
  return Sn.default = t, Sn;
}
var Cn = {}, Oi;
function yl() {
  if (Oi) return Cn;
  Oi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), r = {
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
      const $ = s.let("valid", !0), w = s.name("_valid");
      if (g(), i.reset(), d && f) {
        const v = s.let("ifClause");
        i.setParams({ ifClause: v }), s.if(w, _("then", v), _("else", v));
      } else d ? s.if(w, _("then")) : s.if((0, e.not)(w), _("else"));
      i.pass($, () => i.error(!0));
      function g() {
        const v = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        i.mergeEvaluated(v);
      }
      function _(v, u) {
        return () => {
          const y = i.subschema({ keyword: v }, w);
          s.assign($, w), i.mergeValidEvaluated(y, $), u ? s.assign(u, (0, e._)`${v}`) : i.setParams({ ifClause: v });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return Cn.default = r, Cn;
}
var kn = {}, Fi;
function $l() {
  if (Fi) return kn;
  Fi = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return kn.default = t, kn;
}
var zi;
function vl() {
  if (zi) return fn;
  zi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ca(), t = /* @__PURE__ */ al(), n = /* @__PURE__ */ la(), r = /* @__PURE__ */ cl(), o = /* @__PURE__ */ ll(), i = /* @__PURE__ */ fo(), s = /* @__PURE__ */ dl(), a = /* @__PURE__ */ da(), c = /* @__PURE__ */ ul(), d = /* @__PURE__ */ fl(), f = /* @__PURE__ */ pl(), $ = /* @__PURE__ */ hl(), w = /* @__PURE__ */ ml(), g = /* @__PURE__ */ gl(), _ = /* @__PURE__ */ yl(), v = /* @__PURE__ */ $l();
  function u(y = !1) {
    const h = [
      // any
      f.default,
      $.default,
      w.default,
      g.default,
      _.default,
      v.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      d.default
    ];
    return y ? h.push(t.default, r.default) : h.push(e.default, n.default), h.push(o.default), h;
  }
  return fn.default = u, fn;
}
var xn = {}, gt = {}, Ii;
function ua() {
  if (Ii) return gt;
  Ii = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ ar(), r = /* @__PURE__ */ lo(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: d, it: f } = a;
    f.schemaEnv.root.dynamicAnchors[c] = !0;
    const $ = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, w = f.errSchemaPath === "#" ? f.validateName : s(a);
    d.if((0, e._)`!${$}`, () => d.assign($, w));
  }
  gt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: d, self: f } = a.it, { root: $, baseId: w, localRefs: g, meta: _ } = c.root, { schemaId: v } = f.opts, u = new n.SchemaEnv({ schema: d, schemaId: v, root: $, baseId: w, localRefs: g, meta: _ });
    return n.compileSchema.call(f, u), (0, r.getValidate)(a, u);
  }
  return gt.default = o, gt;
}
var yt = {}, ji;
function fa() {
  if (ji) return yt;
  ji = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ lo(), r = {
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
      const g = a.let("valid", !1);
      $(g), i.ok(g);
    }
    function $(g) {
      if (d.schemaEnv.root.dynamicAnchors[f]) {
        const _ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`);
        a.if(_, w(_, g), w(d.validateName, g));
      } else
        w(d.validateName, g)();
    }
    function w(g, _) {
      return _ ? () => a.block(() => {
        (0, n.callRef)(i, g), a.let(_, !0);
      }) : () => (0, n.callRef)(i, g);
    }
  }
  return yt.dynamicRef = o, yt.default = r, yt;
}
var En = {}, Di;
function bl() {
  if (Di) return En;
  Di = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ua(), t = /* @__PURE__ */ fe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return En.default = n, En;
}
var An = {}, Li;
function wl() {
  if (Li) return An;
  Li = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fa(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return An.default = t, An;
}
var qi;
function _l() {
  if (qi) return xn;
  qi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ua(), t = /* @__PURE__ */ fa(), n = /* @__PURE__ */ bl(), r = /* @__PURE__ */ wl(), o = [e.default, t.default, n.default, r.default];
  return xn.default = o, xn;
}
var Pn = {}, Rn = {}, Vi;
function Sl() {
  if (Vi) return Rn;
  Vi = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fo(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Rn.default = t, Rn;
}
var Mn = {}, Bi;
function Cl() {
  if (Bi) return Mn;
  Bi = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fo(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Mn.default = t, Mn;
}
var Nn = {}, Ui;
function kl() {
  if (Ui) return Nn;
  Ui = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Nn.default = t, Nn;
}
var Hi;
function xl() {
  if (Hi) return Pn;
  Hi = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sl(), t = /* @__PURE__ */ Cl(), n = /* @__PURE__ */ kl(), r = [e.default, t.default, n.default];
  return Pn.default = r, Pn;
}
var Tn = {}, On = {}, Ki;
function El() {
  if (Ki) return On;
  Ki = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), n = /* @__PURE__ */ Ie(), o = {
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
      const { allErrors: $, props: w } = f;
      w instanceof e.Name ? s.if((0, e._)`${w} !== true`, () => s.forIn("key", c, (u) => s.if(_(w, u), () => g(u)))) : w !== !0 && s.forIn("key", c, (u) => w === void 0 ? g(u) : s.if(v(w, u), () => g(u))), f.props = !0, i.ok((0, e._)`${d} === ${n.default.errors}`);
      function g(u) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: u }), i.error(), $ || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(f, a)) {
          const y = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, y), $ || s.if((0, e.not)(y), () => s.break());
        }
      }
      function _(u, y) {
        return (0, e._)`!${u} || !${u}[${y}]`;
      }
      function v(u, y) {
        const h = [];
        for (const k in u)
          u[k] === !0 && h.push((0, e._)`${y} !== ${k}`);
        return (0, e.and)(...h);
      }
    }
  };
  return On.default = o, On;
}
var Fn = {}, Gi;
function Al() {
  if (Gi) return Fn;
  Gi = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fe(), r = {
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
        const w = i.var("valid", (0, e._)`${f} <= ${d}`);
        i.if((0, e.not)(w), () => $(w, d)), o.ok(w);
      }
      c.items = !0;
      function $(w, g) {
        i.forRange("i", g, f, (_) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, w), c.allErrors || i.if((0, e.not)(w), () => i.break());
        });
      }
    }
  };
  return Fn.default = r, Fn;
}
var Wi;
function Pl() {
  if (Wi) return Tn;
  Wi = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ El(), t = /* @__PURE__ */ Al(), n = [e.default, t.default];
  return Tn.default = n, Tn;
}
var zn = {}, In = {}, Ji;
function Rl() {
  if (Ji) return In;
  Ji = 1, Object.defineProperty(In, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: c, schemaCode: d, it: f } = r, { opts: $, errSchemaPath: w, schemaEnv: g, self: _ } = f;
      if (!$.validateFormats)
        return;
      a ? v() : u();
      function v() {
        const y = i.scopeValue("formats", {
          ref: _.formats,
          code: $.code.formats
        }), h = i.const("fDef", (0, e._)`${y}[${d}]`), k = i.let("fType"), S = i.let("format");
        i.if((0, e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => i.assign(k, (0, e._)`${h}.type || "string"`).assign(S, (0, e._)`${h}.validate`), () => i.assign(k, (0, e._)`"string"`).assign(S, h)), r.fail$data((0, e.or)(l(), p()));
        function l() {
          return $.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function p() {
          const m = g.$async ? (0, e._)`(${h}.async ? await ${S}(${s}) : ${S}(${s}))` : (0, e._)`${S}(${s})`, x = (0, e._)`(typeof ${S} == "function" ? ${m} : ${S}.test(${s}))`;
          return (0, e._)`${S} && ${S} !== true && ${k} === ${o} && !${x}`;
        }
      }
      function u() {
        const y = _.formats[c];
        if (!y) {
          l();
          return;
        }
        if (y === !0)
          return;
        const [h, k, S] = p(y);
        h === o && r.pass(m());
        function l() {
          if ($.strictSchema === !1) {
            _.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${c}" ignored in schema at path "${w}"`;
          }
        }
        function p(x) {
          const A = x instanceof RegExp ? (0, e.regexpCode)(x) : $.code.formats ? (0, e._)`${$.code.formats}${(0, e.getProperty)(c)}` : void 0, R = i.scopeValue("formats", { key: c, ref: x, code: A });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${R}.validate`] : ["string", x, R];
        }
        function m() {
          if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
            if (!g.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${s})`;
          }
          return typeof k == "function" ? (0, e._)`${S}(${s})` : (0, e._)`${S}.test(${s})`;
        }
      }
    }
  };
  return In.default = n, In;
}
var Yi;
function Ml() {
  if (Yi) return zn;
  Yi = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Rl()).default];
  return zn.default = t, zn;
}
var at = {}, Xi;
function Nl() {
  return Xi || (Xi = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.contentVocabulary = at.metadataVocabulary = void 0, at.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], at.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), at;
}
var Zi;
function Tl() {
  if (Zi) return Jt;
  Zi = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wc(), t = /* @__PURE__ */ sl(), n = /* @__PURE__ */ vl(), r = /* @__PURE__ */ _l(), o = /* @__PURE__ */ xl(), i = /* @__PURE__ */ Pl(), s = /* @__PURE__ */ Ml(), a = /* @__PURE__ */ Nl(), c = [
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
  return Jt.default = c, Jt;
}
var jn = {}, Nt = {}, Qi;
function Ol() {
  if (Qi) return Nt;
  Qi = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Nt.DiscrError = e = {})), Nt;
}
var es;
function Fl() {
  if (es) return jn;
  es = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Ol(), n = /* @__PURE__ */ ar(), r = /* @__PURE__ */ sr(), o = /* @__PURE__ */ fe(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: f, parentSchema: $, it: w } = a, { oneOf: g } = $;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = f.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const v = c.let("valid", !1), u = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(_)}`);
      c.if((0, e._)`typeof ${u} == "string"`, () => y(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: _ })), a.ok(v);
      function y() {
        const S = k();
        c.if(!1);
        for (const l in S)
          c.elseIf((0, e._)`${u} === ${l}`), c.assign(v, h(S[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: _ }), c.endIf();
      }
      function h(S) {
        const l = c.name("valid"), p = a.subschema({ keyword: "oneOf", schemaProp: S }, l);
        return a.mergeEvaluated(p, e.Name), l;
      }
      function k() {
        var S;
        const l = {}, p = x($);
        let m = !0;
        for (let I = 0; I < g.length; I++) {
          let T = g[I];
          if (T?.$ref && !(0, o.schemaHasRulesButRef)(T, w.self.RULES)) {
            const V = T.$ref;
            if (T = n.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, V), T instanceof n.SchemaEnv && (T = T.schema), T === void 0)
              throw new r.default(w.opts.uriResolver, w.baseId, V);
          }
          const B = (S = T?.properties) === null || S === void 0 ? void 0 : S[_];
          if (typeof B != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          m = m && (p || x(T)), A(B, I);
        }
        if (!m)
          throw new Error(`discriminator: "${_}" must be required`);
        return l;
        function x({ required: I }) {
          return Array.isArray(I) && I.includes(_);
        }
        function A(I, T) {
          if (I.const)
            R(I.const, T);
          else if (I.enum)
            for (const B of I.enum)
              R(B, T);
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
  return jn.default = s, jn;
}
var Dn = {};
const zl = "https://json-schema.org/draft/2020-12/schema", Il = "https://json-schema.org/draft/2020-12/schema", jl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Dl = "meta", Ll = "Core and Validation specifications meta-schema", ql = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Vl = ["object", "boolean"], Bl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ul = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Hl = {
  $schema: zl,
  $id: Il,
  $vocabulary: jl,
  $dynamicAnchor: Dl,
  title: Ll,
  allOf: ql,
  type: Vl,
  $comment: Bl,
  properties: Ul
}, Kl = "https://json-schema.org/draft/2020-12/schema", Gl = "https://json-schema.org/draft/2020-12/meta/applicator", Wl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Jl = "meta", Yl = "Applicator vocabulary meta-schema", Xl = ["object", "boolean"], Zl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ql = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, ed = {
  $schema: Kl,
  $id: Gl,
  $vocabulary: Wl,
  $dynamicAnchor: Jl,
  title: Yl,
  type: Xl,
  properties: Zl,
  $defs: Ql
}, td = "https://json-schema.org/draft/2020-12/schema", nd = "https://json-schema.org/draft/2020-12/meta/unevaluated", rd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, od = "meta", id = "Unevaluated applicator vocabulary meta-schema", sd = ["object", "boolean"], ad = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, cd = {
  $schema: td,
  $id: nd,
  $vocabulary: rd,
  $dynamicAnchor: od,
  title: id,
  type: sd,
  properties: ad
}, ld = "https://json-schema.org/draft/2020-12/schema", dd = "https://json-schema.org/draft/2020-12/meta/content", ud = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, fd = "meta", pd = "Content vocabulary meta-schema", hd = ["object", "boolean"], md = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, gd = {
  $schema: ld,
  $id: dd,
  $vocabulary: ud,
  $dynamicAnchor: fd,
  title: pd,
  type: hd,
  properties: md
}, yd = "https://json-schema.org/draft/2020-12/schema", $d = "https://json-schema.org/draft/2020-12/meta/core", vd = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, bd = "meta", wd = "Core vocabulary meta-schema", _d = ["object", "boolean"], Sd = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Cd = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, kd = {
  $schema: yd,
  $id: $d,
  $vocabulary: vd,
  $dynamicAnchor: bd,
  title: wd,
  type: _d,
  properties: Sd,
  $defs: Cd
}, xd = "https://json-schema.org/draft/2020-12/schema", Ed = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ad = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Pd = "meta", Rd = "Format vocabulary meta-schema for annotation results", Md = ["object", "boolean"], Nd = { format: { type: "string" } }, Td = {
  $schema: xd,
  $id: Ed,
  $vocabulary: Ad,
  $dynamicAnchor: Pd,
  title: Rd,
  type: Md,
  properties: Nd
}, Od = "https://json-schema.org/draft/2020-12/schema", Fd = "https://json-schema.org/draft/2020-12/meta/meta-data", zd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Id = "meta", jd = "Meta-data vocabulary meta-schema", Dd = ["object", "boolean"], Ld = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, qd = {
  $schema: Od,
  $id: Fd,
  $vocabulary: zd,
  $dynamicAnchor: Id,
  title: jd,
  type: Dd,
  properties: Ld
}, Vd = "https://json-schema.org/draft/2020-12/schema", Bd = "https://json-schema.org/draft/2020-12/meta/validation", Ud = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Hd = "meta", Kd = "Validation vocabulary meta-schema", Gd = ["object", "boolean"], Wd = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Jd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Yd = {
  $schema: Vd,
  $id: Bd,
  $vocabulary: Ud,
  $dynamicAnchor: Hd,
  title: Kd,
  type: Gd,
  properties: Wd,
  $defs: Jd
};
var ts;
function Xd() {
  if (ts) return Dn;
  ts = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = Hl, t = ed, n = cd, r = gd, o = kd, i = Td, s = qd, a = Yd, c = ["/properties"];
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
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function $(w, g) {
      return f ? w.$dataMetaSchema(g, c) : g;
    }
  }
  return Dn.default = d, Dn;
}
var ns;
function Zd() {
  return ns || (ns = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Kc(), r = /* @__PURE__ */ Tl(), o = /* @__PURE__ */ Fl(), i = /* @__PURE__ */ Xd(), s = "https://json-schema.org/draft/2020-12/schema";
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
        const { $data: g, meta: _ } = this.opts;
        _ && (i.default.call(this, g), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ ir();
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
    var f = /* @__PURE__ */ co();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var $ = /* @__PURE__ */ sr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  })(Ut, Ut.exports)), Ut.exports;
}
var Qd = /* @__PURE__ */ Zd();
const eu = /* @__PURE__ */ Rc(Qd), tu = "https://json-schema.org/draft/2020-12/schema", nu = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ru = "gufe-viz payload", ou = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", iu = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], su = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), po = {
  $schema: tu,
  $id: nu,
  title: ru,
  description: ou,
  oneOf: iu,
  $defs: su
}, Nh = [
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
], ho = po.$id, mo = new eu({ allErrors: !0, strict: !1 });
mo.addSchema(po, ho);
const rs = mo.getSchema(ho), pa = Object.entries(po.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Th = pa, go = /* @__PURE__ */ new Map();
for (const e of pa) {
  const t = mo.getSchema(`${ho}#/$defs/${e}`);
  t && go.set(e, t);
}
const Hr = { valid: !0, issues: [] };
function Kr(e) {
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
  const t = e.type, n = typeof t == "string" ? go.get(t) : void 0;
  return n ? n(e) ? Hr : { valid: !1, issues: Kr(n.errors) } : rs(e) ? Hr : { valid: !1, issues: Kr(rs.errors) };
}
function Oh(e, t) {
  const n = go.get(e);
  return n ? n(t) ? Hr : { valid: !1, issues: Kr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function cu(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const yo = {
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
function ha(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!yo[t]) return lu(t);
  const { valid: n, issues: r } = au(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: cu(r)
  };
}
function lu(e) {
  const t = Object.keys(yo).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Fh(e) {
  return ha(e)?.message ?? null;
}
class du extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    oc("payload", n, this);
    const r = ha(n);
    if (r)
      return t.appendChild(uu(r, n)), {};
    const o = n.type, i = yo[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function uu(e, t) {
  const n = N(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ge(e.message));
  const r = (i, s) => N(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
    i
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = fu(t);
  return o && n.appendChild(r(o, !1)), n;
}
function fu(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${ke(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${ke(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Me("gufe-view", du);
const kr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, $o = {
  threeDmol: `https://unpkg.com/3dmol@${kr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${kr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${kr.d3}/+esm`
};
function vo(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function ma(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let et = null, $t = null;
function cr() {
  if ($t) return $t;
  const e = vo("threeDmol");
  return e ? ($t = e.then((t) => et = t || window.$3Dmol), $t) : ($t = (async () => {
    if (window.$3Dmol) return et = window.$3Dmol;
    if (await ma($o.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return et = window.$3Dmol;
  })(), $t);
}
let vt = null;
function lr() {
  if (vt) return vt;
  const e = vo("rdkit");
  return e ? (vt = e.then((t) => window.RDKit = t), vt) : (vt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ma($o.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), vt);
}
let xr = null;
function ga() {
  if (!xr) {
    const e = $o.d3;
    xr = vo("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return xr;
}
function ya(e, t) {
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
    t.hint && !r && (r = !0, mu(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function pu(e) {
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
const hu = 1600;
function mu(e, t) {
  const n = N(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, hu);
}
const gu = { min: 0.25, max: 12 }, yu = 150;
function os(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? yu) - t;
}
function $u(e, t = gu) {
  const n = os(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = os(e);
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
const vu = 2e-3;
function $a(e) {
  return Math.exp(-e.deltaY * vu);
}
function dr(e, t, n = {}) {
  const r = $u(t, n.bounds), o = ya(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy($a(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function bo(e, t = "Reset view") {
  const n = N("button", Et, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let Ct = null;
function bu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function va(e, t) {
  if (!e) return;
  const n = bu(e);
  if (!n) return;
  const r = t?.level();
  Ct = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : Ct?.zoom ?? 1
  };
}
function ba(e, t) {
  if (!Ct || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ...Ct.rotation]), t && Math.abs(Ct.zoom - 1) > 1e-9 && t.zoomBy(Ct.zoom), e.render(), !0);
}
const Er = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, wu = [
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
], zh = "hsv", K = [0, 0, 0], _u = {
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
  118: K
}, H = [0.9, 0.9, 0.9], Su = {
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
}, Cu = {
  "-1": H,
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
  118: H,
  201: H
}, ku = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
let ur = Us;
function wa() {
  return (ur ? tt.dark : tt.light).canvas2DBg;
}
function Gr() {
  return (ur ? tt.dark : tt.light).netDepictBg;
}
function xu() {
  return (ur ? tt.dark : tt.light).netDepictCaption;
}
function fr(e) {
  return ur ? {
    ...ku,
    atomColourPalette: e === "mono" ? Cu : Su
  } : e === "mono" ? { atomColourPalette: _u } : {};
}
const Eu = "rdkit", Au = !0, Pu = !0, Ru = !0, Mu = !0, Nu = "rdkit", Tu = "filled", Ou = 0.42, Fu = 1.5, zu = !0, Iu = "show", ju = "mono", Du = 0.51, Lu = 0.74, qu = 1.6, Vu = 1.7, Bu = 5, Uu = 0.3, Hu = "#d62828", Ku = "#d62828", Gu = "#015ab5", Wu = !1, Ju = "", Yu = "#7c3aed", Xu = {
  layout: Eu,
  alignPair: Au,
  atomNumbers: Pu,
  createdDestroyed: Ru,
  modified: Mu,
  style: Nu,
  circles: Tu,
  circleRadius: Ou,
  circleStroke: Fu,
  boundary: zu,
  hydrogens: Iu,
  elementColors: ju,
  numScale: Du,
  labelScale: Lu,
  bondWidth: qu,
  markWidth: Vu,
  haloWidth: Bu,
  haloOpacity: Uu,
  destroyedColor: Hu,
  createdColor: Ku,
  modifiedColor: Gu,
  stereo: Wu,
  customSpec: Ju,
  customColor: Yu
}, Zu = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: Er.uniqueAtom,
  createdColor: Er.uniqueAtom,
  modifiedColor: Er.elementChange,
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
}, Qu = ["rdkit", "coordgen", "conformer"], ef = ["rdkit", "recolor", "halo"], tf = ["outline", "filled", "off"], nf = ["show", "dim", "hide"], rf = ["cpk", "mono"], of = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, sf = /^#[0-9a-fA-F]{6}$/;
function Tt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Xe(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = of[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const bt = (e, t) => typeof e == "boolean" ? e : t, Ln = (e, t) => typeof e == "string" && sf.test(e) ? e : t;
function af(e) {
  const t = e && typeof e == "object" ? e : {}, n = Zu;
  return {
    version: 1,
    layout: Tt(t.layout, Qu, n.layout),
    alignPair: bt(t.alignPair, n.alignPair),
    style: Tt(t.style, ef, n.style),
    createdDestroyed: bt(t.createdDestroyed, n.createdDestroyed),
    modified: bt(t.modified, n.modified),
    destroyedColor: Ln(t.destroyedColor, n.destroyedColor),
    createdColor: Ln(t.createdColor, n.createdColor),
    modifiedColor: Ln(t.modifiedColor, n.modifiedColor),
    boundary: bt(t.boundary, n.boundary),
    circles: Tt(t.circles, tf, n.circles),
    circleRadius: Xe(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Xe(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Tt(t.hydrogens, nf, n.hydrogens),
    elementColors: Tt(t.elementColors, rf, n.elementColors),
    atomNumbers: bt(t.atomNumbers, n.atomNumbers),
    stereo: bt(t.stereo, n.stereo),
    numScale: Xe(t.numScale, "numScale", n.numScale),
    labelScale: Xe(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Xe(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Xe(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Xe(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Xe(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Ln(t.customColor, n.customColor)
  };
}
const Fe = af(Xu);
function is(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (f) => {
      s !== "right" && t.add(f), s !== "left" && n.add(f);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const f = Math.min(+d[1], +d[2]), $ = Math.min(Math.max(+d[1], +d[2]), f + r - 1);
      for (let w = f; w <= $; w++) c(w);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function Ar(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [i, s] = e.bonds[o], a = t.has(i), c = t.has(s);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function ss(e) {
  return `0x${e.replace("#", "")}`;
}
function Wr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function cf(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function lf(e, t, n) {
  const r = new Set(t.atoms), o = new Set(Ar(e, r, !0));
  return {
    deletions: Ar(e, r, n),
    changes: Ar(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function as(e, t, n, r) {
  const o = lf(t, n, e.boundary), i = [];
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
let wt = null;
function df(e) {
  if (wt !== null) return wt;
  wt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (wt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return wt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), wt;
}
function uf(e, t) {
  return e.style === "rdkit" ? "rdkit" : df(t) ? e.style : "rdkit";
}
function ff(e, t, n, r, o, i) {
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
  Object.assign(s, fr(e.elementColors)), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const g of n) {
    const _ = Wr(g.color);
    if (o === "rdkit") for (const u of g.bonds) d[u] = _;
    if (o === "recolor" && e.circles === "off") continue;
    const v = o === "recolor" && e.circles === "filled" ? cf(_, 0.7) : _;
    for (const u of g.atoms)
      a[u] = v, c[u] = e.circleRadius;
  }
  const f = Wr(e.customColor);
  for (const g of r)
    g < i && (a[g] = f, c[g] = e.circleRadius);
  const $ = Object.keys(a).map(Number);
  $.length && (s.atoms = $, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const w = Object.keys(d).map(Number);
  return w.length && (s.bonds = w, s.highlightBondColors = d), s;
}
function pf(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (i) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", $e(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const hf = "http://www.w3.org/2000/svg";
function _a(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function wo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function Sa(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function cs(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of _a(e, s)) {
      const c = a.style;
      Sa(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of wo(e, s, !1)) a.style.fill = i;
}
function mf(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(hf, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of _a(e, a)) {
      if (Sa(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", i.appendChild(d);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function gf(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of wo(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function yf(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of wo(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function $f(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function vf(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        cs(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? gf(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && yf(e, n, s.atoms, o, s.color);
      } else
        mf(e, n, s.bonds, s.color), cs(e, n, s.atoms, s.bonds, s.color, null);
  $f(e, t, n);
}
const pr = `
`, Jr = "$$$$";
function Yr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(pr);
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
    const w = parseInt($.substring(0, 3), 10), g = parseInt($.substring(3, 6), 10), _ = parseInt($.substring(6, 9), 10);
    !isFinite(w) || !isFinite(g) || c.push([w - 1, g - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function bf(e) {
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
  return r.push("M  END"), r.join(pr);
}
const wf = (e) => `${bf(e)}${pr}${Jr}`, Ca = (e) => e.indexOf(Jr) >= 0 ? e : `${e}${pr}${Jr}`;
function _o(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function So(e, t, n, r, o, i) {
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
        const f = {}, $ = {};
        for (const w of a.atoms)
          f[w] = a.color, $[w] = a.radius;
        d.atoms = [...a.atoms], d.highlightAtomColors = f, d.highlightAtomRadii = $;
      }
      return s.get_svg_with_highlights(JSON.stringify(d)) || null;
    }
    return s.get_svg(n, n) || null;
  } catch (a) {
    return console.warn("[gufe-viz] depictSVG threw -", $e(a)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function ka(e, t, n) {
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
], Xr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, _t = (e) => e in Xr, ds = 400, Pr = "position:absolute;inset:0;min-width:0;min-height:0;";
class _f extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = N("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = N(
      "div",
      `${Pr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${wa()};`
    );
    a.appendChild(c);
    const d = na();
    d.wrap.style.cssText = Pr, a.appendChild(d.wrap);
    const f = N(
      "div",
      `${Pr}overflow:auto;padding:16px 20px;background:${M.panelBg};color:${M.textPrimary};font-size:${ee.body};`
    );
    a.appendChild(f);
    const $ = r ? _o(r) : null, w = [
      ["Name", o || ct, !1],
      ["SMILES", i || ct, !0],
      ["Charge", s == null ? ct : String(s), !1],
      ["Atoms", $ ? String($.atoms) : ct, !1],
      ["Bonds", $ ? String($.bonds) : ct, !1]
    ], g = N("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${ne.xl} 20px;align-items:baseline;`);
    f.appendChild(g);
    for (const [T, B, V] of w) {
      g.appendChild(
        N(
          "div",
          `font-size:${ee.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${M.textMuted2};`,
          T
        )
      );
      const U = N(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${M.textPrimary}` + (V ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${ee.small};` : ""),
        B
      );
      U.title = B, g.appendChild(U);
    }
    const _ = oo(t), v = N("div", qr, o || "Unnamed molecule");
    _ && a.appendChild(v);
    const u = pt(
      "small-molecule.mode",
      "2d",
      ls.map((T) => T.id)
    ), y = dt("small-molecule.spin", !1);
    let h = u.get(), k = y.get(), S = null, l = null;
    const p = () => {
      try {
        S?.spin(k && _t(h) ? "y" : !1);
      } catch {
      }
    }, m = (T) => {
      h = T, c.style.visibility = h === "2d" ? "visible" : "hidden", d.wrap.style.visibility = _t(h) ? "visible" : "hidden", f.style.visibility = h === "info" ? "visible" : "hidden", v.style.display = h === "info" || !_ ? "none" : "block", A.disabled = !_t(h), A.style.opacity = _t(h) ? "1" : "0.5", _t(h) && S && (S.setStyle({}, Xr[h]), S.resize(), S.render()), p();
    }, x = N("div", Ws), A = ta(
      "Spin",
      k,
      (T) => {
        k = T, p();
      },
      { title: "Toggle continuous rotation", remember: y }
    ), R = (T) => {
      T ? x.insertBefore(A, x.firstChild) : I.buttons.insertBefore(A, I.buttons.lastElementChild);
    }, I = ea(ls, h, (T) => m(T), {
      remember: u,
      onLayout: R,
      fit: { pane: a, bar: x }
    });
    return x.appendChild(I), R(!1), a.appendChild(x), m(h), !r || !r.trim() ? (c.appendChild(ge("No molecule provided")), d.container.appendChild(ge("No molecule provided")), { cleanup: () => I.cleanup() }) : (c.appendChild(ge("Loading 2D depiction...")), lr().then((T) => {
      const B = fr("cpk"), V = So(T, r, ds, Fe.layout, void 0, B);
      V ? ka(c, V, ds) : c.replaceChildren(ge("Failed to parse molecule", !0));
    }).catch((T) => {
      c.replaceChildren(ge(`RDKit failed to load: ${$e(T)}`, !0));
    }), d.container.appendChild(ge("Loading 3D viewer...")), cr().then(() => {
      d.container.replaceChildren(), S = et.createViewer(d.container, { backgroundColor: Lt.viewer }), S.addModel(Ca(r), "sdf"), S.setStyle({}, Xr[_t(h) ? h : "stick"]), S.zoomTo(), S.render(), l = dr(d.container, S), ba(S, l), p();
    }).catch((T) => {
      d.container.replaceChildren(ge(`3D render failed: ${$e(T)}`, !0));
    }), {
      onResize() {
        S && (S.resize(), S.render());
      },
      cleanup() {
        if (I.cleanup(), va(S, l), l?.cleanup(), l = null, !!S) {
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
Me("gufe-small-molecule", _f);
const xa = ["HOH", "WAT", "SOL", "TIP3"], us = { hetflag: !1 }, Sf = { hetflag: !0 }, Cf = { resn: xa }, Le = {
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
function Ea(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const f = c.slice(17, 20).trim(), $ = c.slice(21, 22).trim() || "_", w = c.slice(22, 26).trim(), g = c.slice(26, 27).trim();
    xa.indexOf(f) !== -1 && i++, t.add($), n.add(`${$}|${w}${g}|${f}`);
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
function Aa(e) {
  return [
    `${Pt(e.chains)} chains`,
    `${Pt(e.residues)} residues`,
    `${Pt(e.atoms)} atoms`,
    `${Pt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${Pt(e.waters)} water)` : "")
  ];
}
function kf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Zr(e, t, n, r, o) {
  const i = r || (() => {
  }), s = kf(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(us),
    t.rep === "stick" ? { stick: { radius: Le.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: Le.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(Sf),
    t.hetero ? {
      stick: { radius: Le.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Le.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(Cf),
    t.waters ? {
      stick: { radius: Le.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Le.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Le.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(
          et.SurfaceType.VDW,
          { opacity: Le.surfaceOpacity, ...s },
          a(us)
        )
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${$e(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${$e(c)}`, "error");
    }
  }, 30);
}
function xf(e, t) {
  e.setStyle(t, {
    stick: { radius: Le.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: Le.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const fs = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], ps = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Ef = 460, hs = /* @__PURE__ */ new Map();
function Pa(e) {
  const t = pt(
    "protein.representation",
    "cartoon",
    fs.map((m) => m.id)
  ), n = pt(
    "protein.color",
    "chain",
    ps.map((m) => m.id)
  ), r = dt("protein.waters", e.waters), o = dt("protein.hetero", !0), i = dt("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = null, c = null;
  const d = N("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const f = N("div", Wa);
  d.appendChild(f);
  const $ = ({ label: m, controls: x }) => {
    const A = N("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    A.appendChild(
      N(
        "span",
        `font-size:${ee.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted};`,
        m
      )
    );
    for (const R of x) A.appendChild(R);
    return A;
  }, w = N("div", `display:flex;flex-direction:column;gap:2px;font-size:${ee.small};color:${M.textMuted};`), g = $({ label: "Contents", controls: [w] });
  g.style.display = "none";
  const v = ao(f, () => {
    const m = N("div", `${to}padding-top:${Ja};`), x = Qn(
      fs,
      s.rep,
      (B) => {
        s.rep = B, e.restyle();
      },
      t
    );
    m.appendChild($({ label: "Style", controls: [x] }));
    const A = Vt(
      ps,
      s.color,
      (B) => {
        s.color = B, e.restyle();
      },
      n
    );
    A.style.cssText += "width:100%;box-sizing:border-box;", m.appendChild($({ label: "Color", controls: [A] }));
    const R = N("div", "display:flex;flex-wrap:wrap;gap:4px;"), I = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [B, V, U, Y, oe] of I)
      R.appendChild(
        ta(
          V,
          s[B],
          (Q) => {
            s[B] = Q, oe();
          },
          { title: U, remember: Y }
        )
      );
    m.appendChild($({ label: "Show", controls: [R] }));
    const T = bo(() => e.reset ? e.reset() : c?.reset());
    return T.style.cssText += "width:100%;box-sizing:border-box;", m.appendChild($({ label: "Camera", controls: [...e.camera?.() ?? [], T] })), m.appendChild(g), m;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: dt(`protein${so}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    }
  }), u = oo(e.element) ? e.title || e.fallbackTitle : "";
  u && f.appendChild(
    N("div", `${Ga}pointer-events:none;font-size:${ee.heading};font-weight:${me.bold};`, u)
  ), d.appendChild(v.panel);
  const y = na();
  d.appendChild(y.wrap);
  let h = null;
  const k = nr(d, (m) => {
    const x = m > 0 && m < Ef;
    x !== h && (h = x, d.style.flexDirection = x ? "column" : "row", io(v.panel, x), a?.resize(), a?.render());
  }), S = N(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${ee.body};z-index:20;display:none;pointer-events:none;`
  );
  y.wrap.appendChild(S);
  const l = (m, x) => {
    if (m == null) {
      S.style.display = "none";
      return;
    }
    S.textContent = m, S.style.display = "block";
    const A = x === "error";
    S.style.background = A ? M.warnBg : M.toolbarBg, S.style.color = A ? M.warnFg : M.textMuted, S.style.border = `1px solid ${A ? M.warnBorder : M.toolbarBorder}`;
  }, p = () => {
    if (!e.cameraKey || !a) return;
    const m = a.getView?.();
    Array.isArray(m) && m.length >= 4 && m.every((x) => Number.isFinite(x)) && hs.set(e.cameraKey, m.slice());
  };
  return {
    opts: s,
    pane: y,
    menu: v,
    showStatus: l,
    setStats: (m) => {
      w.replaceChildren(...m.map((x) => N("div", "overflow-wrap:anywhere;", x))), g.style.display = m.length ? "" : "none";
    },
    restoreCamera: () => {
      const m = e.cameraKey ? hs.get(e.cameraKey) : void 0;
      return !m || !a ? !1 : (a.setView(m.slice()), a.render(), !0);
    },
    viewer: () => a,
    setViewer: (m) => {
      a = m;
    },
    interaction: () => c,
    setInteraction: (m) => {
      c = m;
    },
    handle: {
      onResize() {
        a && (a.resize(), a.render());
      },
      cleanup() {
        if (k(), p(), c?.cleanup(), c = null, !!a) {
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
class Af extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Zr(a, s.opts, o, s.showStatus);
    }
    const s = Pa({
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
      o = Ea(r), s.setStats(Aa(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${$e(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), cr().then(() => {
      const a = et.createViewer(s.pane.container, { backgroundColor: Lt.viewer });
      s.setViewer(a), a.addModel(r, "pdb"), Zr(a, s.opts, o, s.showStatus), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(dr(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${$e(a)}`, "error");
    }), s.handle;
  }
}
Me("gufe-protein", Af);
function At(e) {
  const t = /* @__PURE__ */ new Map();
  return Qr(e, t, /* @__PURE__ */ new Set()), t;
}
function Qr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Qr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Qr(o, t, n);
}
function Je(e, t) {
  return t ? e.get(t) : void 0;
}
function xe(e, t, n) {
  const r = Je(e, t);
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
function rt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const ko = "Cmd/Ctrl-click to select several.";
function Pf(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : rt(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function Rf(e, t) {
  navigator.clipboard?.writeText(e).catch(() => ms(e, t)), navigator.clipboard || ms(e, t);
}
function ms(e, t) {
  const n = N("textarea", `width:100%;height:80px;font-size:${ee.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Mf(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = N("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Ra(e) {
  const { words: t } = e, n = pt(e.setting, "names", ["names", "keys"]), r = N("div", "display:flex;flex-direction:column;gap:6px;"), o = N("div", `display:flex;align-items:center;gap:6px;font-size:${ee.small};color:${M.textMuted};`);
  o.appendChild(N("span", "", "copy as"));
  const i = Vt(
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
  const s = N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`), a = (f) => {
    s.textContent = f;
  }, c = N("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [f, $, w] of d) {
    const g = N("button", `${Et}flex:1;`, $.button);
    g.title = w, g.onclick = (_) => {
      const v = i.value, u = Pf(e.nodes, e.edges, e.selected, f, v);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : f === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${ko}` : "Nothing to copy."
        );
        return;
      }
      const y = u.split(`
`).length;
      _.shiftKey ? (Mf(u, `selected-${$.plural}.txt`), a(`Saved ${y} ${$.plural} to a file.`)) : (Rf(u, r), a(
        f === "edges" ? `Copied ${y} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(g);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(N("div", `font-size:${ee.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Ma = "http://www.w3.org/2000/svg";
function ue(e, t = {}) {
  const n = document.createElementNS(Ma, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function gs(e, t) {
  const n = document.createElementNS(Ma, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Nf = 3;
function Na(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const Tf = { min: 0.15, max: 5 }, Of = 1e-9;
function Ta(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Tf;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, d = () => {
    const V = e.getBoundingClientRect();
    return {
      width: V.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: V.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, f = (V, U, Y) => Math.min(1, U / (V.maxX - V.minX + r * 2), Y / (V.maxY - V.minY + r * 2)), $ = () => {
    const V = n.bounds();
    if (!V) return o.min;
    const { width: U, height: Y } = d();
    return Math.min(o.min, f(V, U, Y));
  }, w = (V) => Math.min(o.max, Math.max($(), i * V)), g = () => {
    i = 1, s = 0, a = 0;
    const V = n.bounds();
    if (!V) {
      c();
      return;
    }
    const { width: U, height: Y } = d();
    i = f(V, U, Y), s = U / 2 - (V.minX + V.maxX) / 2 * i, a = Y / 2 - (V.minY + V.maxY) / 2 * i, c();
  }, v = ya(e, {
    onZoom: (V) => {
      const U = e.getBoundingClientRect(), Y = V.clientX - U.left, oe = V.clientY - U.top, Q = w($a(V)), ie = Q / i;
      return s = Y - (Y - s) * ie, a = oe - (oe - a) * ie, i = Q, c(), Math.abs(ie - 1) > Of;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let y = null, h = null, k = !1, S = null;
  const l = (V) => ({
    x: V.clientX - s,
    y: V.clientY - a,
    from: { x: V.clientX, y: V.clientY }
  }), p = (V) => {
    V.pointerType === "touch" && u.size > 1 || (h = l(V), k = !1);
  }, m = (V) => {
    y || (S && V.pointerType === "touch" && (h = { x: S.x - s, y: S.y - a, from: S }, S = null), h && (Math.hypot(V.clientX - h.from.x, V.clientY - h.from.y) > Nf && (k = !0), s = V.clientX - h.x, a = V.clientY - h.y, c()));
  }, x = () => {
    h = null;
  };
  e.addEventListener("pointerdown", p), e.addEventListener("pointermove", m), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("pointerleave", x);
  const A = () => {
    const [V, U] = [...u.values()];
    return { cx: (V.x + U.x) / 2, cy: (V.y + U.y) / 2, span: Math.max(1, Math.hypot(V.x - U.x, V.y - U.y)) };
  }, R = (V) => {
    if (V.pointerType === "touch") {
      if (u.set(V.pointerId, { x: V.clientX, y: V.clientY }), u.size !== 2) {
        y = null;
        return;
      }
      y = A(), h = null, k = !0;
    }
  }, I = (V) => {
    if (V.pointerType !== "touch" || !u.has(V.pointerId) || (u.set(V.pointerId, { x: V.clientX, y: V.clientY }), !y || u.size !== 2)) return;
    V.preventDefault(), V.stopPropagation();
    const U = A(), Y = e.getBoundingClientRect(), oe = w(U.span / y.span), Q = oe / i;
    s = U.cx - Y.left - (y.cx - Y.left - s) * Q, a = U.cy - Y.top - (y.cy - Y.top - a) * Q, i = oe, y = U, c();
  }, T = (V) => {
    if (V.pointerType !== "touch") return;
    if (u.delete(V.pointerId), u.size === 2) {
      y = A();
      return;
    }
    y = null;
    const [U] = [...u.values()];
    S = u.size === 1 && U ? { ...U } : null;
  };
  e.addEventListener("pointerdown", R, !0), e.addEventListener("pointermove", I, { capture: !0, passive: !1 }), e.addEventListener("pointerup", T, !0), e.addEventListener("pointercancel", T, !0);
  const B = pu(e);
  return {
    fit: g,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: g,
    centreOn(V, U, Y = 1) {
      const { width: oe, height: Q } = d();
      i = Math.max(i, Y), s = oe / 2 - V * i, a = Q / 2 - U * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => k,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(V, U, Y) {
      i = V, s = U, a = Y, c();
    },
    cleanup() {
      v.cleanup(), B.cleanup(), e.removeEventListener("pointerdown", p), e.removeEventListener("pointermove", m), e.removeEventListener("pointerup", x), e.removeEventListener("pointercancel", x), e.removeEventListener("pointerleave", x), e.removeEventListener("pointerdown", R, !0), e.removeEventListener("pointermove", I, { capture: !0 }), e.removeEventListener("pointerup", T, !0), e.removeEventListener("pointercancel", T, !0);
    }
  };
}
const Ff = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Oa(e) {
  const t = { ...e };
  for (const n of Ff) delete t[n];
  return t;
}
function lt(e) {
  return e > 0 ? `+${e}` : String(e);
}
function ys(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const zf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), If = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), jf = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, Df = (e) => {
  const t = zf(e);
  return If.has(t) || jf(t);
};
function Fa(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && Df(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const Lf = 8, qf = 64, Vf = () => new Promise((e) => setTimeout(e, 0));
function eo(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Bf(e, t, n, r) {
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
    return console.warn("[gufe-viz] SMARTS match threw -", $e(i)), null;
  } finally {
    eo(o);
  }
}
function za(e, t, n = !0) {
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
      return eo($), { status: "unsupported" };
    const w = /* @__PURE__ */ new Map();
    let g = 0;
    try {
      let _ = performance.now(), v = 0;
      for (let u = 0; u < t.length; u++) {
        const y = t[u] ? Bf(f, $, t[u], n) : null;
        if (y ? y.length && w.set(u, y) : g++, !(++v < qf && performance.now() - _ < Lf)) {
          if (await Vf(), c !== o) return { status: "superseded" };
          v = 0, _ = performance.now();
        }
      }
    } finally {
      eo($);
    }
    return r.set(a, w), { status: "ok", matched: w, unreadable: g };
  }, cancel: () => void ++o };
}
const Uf = 250;
function Ia(e) {
  const t = N("div", "display:flex;flex-direction:column;gap:8px;"), n = N("input", `${Zn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = N("div", `font-size:${ee.tiny};line-height:1.5;min-height:1.5em;color:${M.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), Uf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const Hf = 1e-6;
function qn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function $s(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Kf(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function vs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const f = t[a * 3 + a], $ = t[c * 3 + c], w = ($ - f) / (2 * d);
      let g;
      Math.abs(w) > 1e10 ? g = 1 / (2 * w) : g = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
      const _ = 1 / Math.sqrt(1 + g * g), v = g * _;
      t[a * 3 + a] = f - g * d, t[c * 3 + c] = $ + g * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== c) {
          const y = t[u * 3 + a], h = t[u * 3 + c];
          t[u * 3 + a] = _ * y - v * h, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + c] = v * y + _ * h, t[c * 3 + u] = t[u * 3 + c];
        }
      for (let u = 0; u < 3; u++) {
        const y = n[u * 3 + a], h = n[u * 3 + c];
        n[u * 3 + a] = _ * y - v * h, n[u * 3 + c] = v * y + _ * h;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Gf(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let S = 0; S < n; S++)
    r[0] += e[S][0], r[1] += e[S][1], r[2] += e[S][2], o[0] += t[S][0], o[1] += t[S][1], o[2] += t[S][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let S = 0; S < n; S++) {
    const l = e[S][0] - r[0], p = e[S][1] - r[1], m = e[S][2] - r[2], x = t[S][0] - o[0], A = t[S][1] - o[1], R = t[S][2] - o[2];
    i[0] += l * x, i[1] += l * A, i[2] += l * R, i[3] += p * x, i[4] += p * A, i[5] += p * R, i[6] += m * x, i[7] += m * A, i[8] += m * R;
  }
  const s = $s(i), a = qn(s, i), c = qn(i, s);
  let d = vs(a), f = vs(c);
  function $(S) {
    const l = [0, 1, 2].sort((m, x) => S.values[x] - S.values[m]), p = new Array(9);
    for (let m = 0; m < 3; m++) {
      const x = l[m];
      p[m] = S.vectors[x], p[3 + m] = S.vectors[3 + x], p[6 + m] = S.vectors[6 + x];
    }
    return {
      values: [S.values[l[0]], S.values[l[1]], S.values[l[2]]],
      vectors: p
    };
  }
  d = $(d), f = $(f);
  const w = d.vectors, g = f.vectors;
  for (let S = 0; S < 3; S++) {
    const l = w[S], p = w[3 + S], m = w[6 + S], x = i[0] * l + i[1] * p + i[2] * m, A = i[3] * l + i[4] * p + i[5] * m, R = i[6] * l + i[7] * p + i[8] * m, I = g[S], T = g[3 + S], B = g[6 + S];
    x * I + A * T + R * B < 0 && (g[S] = -I, g[3 + S] = -T, g[6 + S] = -B);
  }
  const _ = $s(w);
  let v = qn(g, _);
  Kf(v) < 0 && (g[2] = -g[2], g[5] = -g[5], g[8] = -g[8], v = qn(g, _));
  const u = v[0] * o[0] + v[1] * o[1] + v[2] * o[2], y = v[3] * o[0] + v[4] * o[1] + v[5] * o[2], h = v[6] * o[0] + v[7] * o[1] + v[8] * o[2], k = d.values[1] > Hf * d.values[0];
  return { R: v, t: [r[0] - u, r[1] - y, r[2] - h], determined: k };
}
function Wf(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const bs = `
`, Rr = 4;
function ws(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", $e(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Jf(e, t, n) {
  const r = [], o = [];
  for (const [f, $] of n) {
    const w = e[$], g = t[f];
    !w || !g || (r.push(w), o.push(g));
  }
  if (r.length < 2) return null;
  const i = (f) => {
    let $ = 0, w = 0;
    for (const g of f)
      $ += g[0], w += g[1];
    return [$ / f.length, w / f.length];
  }, s = i(r), a = i(o);
  let c = null, d = -1 / 0;
  for (const f of [!1, !0]) {
    let $ = 0, w = 0;
    for (let h = 0; h < r.length; h++) {
      const k = (f ? -1 : 1) * (r[h][0] - s[0]), S = r[h][1] - s[1], l = o[h][0] - a[0], p = o[h][1] - a[1];
      $ += k * p - S * l, w += k * l + S * p;
    }
    const g = Math.hypot($, w);
    if (g <= d) continue;
    d = g;
    const _ = Math.atan2($, w), v = Math.cos(_), u = Math.sin(_), y = (f ? -1 : 1) * s[0];
    c = {
      cos: v,
      sin: u,
      mirror: f,
      tx: a[0] - (v * y - u * s[1]),
      ty: a[1] - (u * y + v * s[1])
    };
  }
  return c;
}
function Yf(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Xf(e, t, n) {
  const r = _o(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(bs);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[Rr + i], a = t[i];
    if (s == null || !a) return e;
    o[Rr + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Rr + r.atoms + a, d = o[c];
      if (d == null) break;
      const f = parseInt(d.substring(9, 12), 10);
      f !== 1 && f !== 6 || (o[c] = d.substring(0, 9) + String(f === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(bs);
}
function Zf(e, t, n) {
  try {
    const r = (s) => Yr(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = Jf(o, r(e), n);
    return i ? Xf(
      t,
      o.map((s) => Yf(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", $e(r)), t;
  }
}
function Qf(e, t, n, r, o) {
  const i = ws(e, t, r), s = ws(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: Zf(i, s, o) };
}
const ep = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, tp = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function np() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Mr = np() ? ep : tp, _s = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Nr = 420, rp = {
  mapped: null,
  element: Fe.modifiedColor,
  uniqueA: Fe.destroyedColor,
  uniqueB: Fe.createdColor
}, op = 132, Ke = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Tr = { gap: 2.5, minLiftFraction: 0.6 }, ip = 24, Dt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Ss(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function sp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function ap(e, t, n) {
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
function ja(e, t) {
  const n = xe(t, e.componentA, "SmallMoleculeComponentViz"), r = xe(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Co(t, [e.componentA, e.componentB]) };
}
function cp(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const i = Gf(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => Wf(s, i.R, i.t)) } : t;
}
function Cs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function lp(e, t) {
  const n = Cs(e), r = Cs(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Tr.gap, a = Tr.minLiftFraction * i + Tr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function dp(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Dt.minSpread ? r : Dt.minSpread) * Dt.spreadFactor;
}
function up(e, t) {
  const n = wu, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const f = (w) => parseInt(w.slice(1 + d * 2, 3 + d * 2), 16), $ = Math.round(f(n[i]) + (f(n[s]) - f(n[i])) * a);
    c += $.toString(16).padStart(2, "0");
  }
  return c;
}
class fp extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = At(n), o = xe(r, n.componentA, "SmallMoleculeComponentViz"), i = xe(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !i)
      return t.appendChild(
        ge("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = rt(o), a = rt(i), c = sp(n);
    let d, f;
    try {
      d = Yr(o.sdf, s), f = Yr(i.sdf, a);
    } catch (F) {
      return t.appendChild(ge(`Could not read a molecule: ${$e(F)}`, !0)), {};
    }
    f = cp(d, f, c);
    const $ = /* @__PURE__ */ new Map();
    for (const [F, O] of c) $.set(O, F);
    const w = Ss(c, d.symbols, f.symbols), g = Ss($, f.symbols, d.symbols), _ = oo(t), v = N("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(v);
    const u = N("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    v.appendChild(u);
    const y = pt("atom-mapping.mode", "plain", _s.map((F) => F.id));
    let h = y.get();
    const k = N("div", Ws), S = ea(
      _s,
      h,
      (F) => {
        h = F, j();
      },
      { remember: y, fit: { pane: v, bar: k } }
    );
    k.appendChild(S), v.appendChild(k);
    let l = [], p = 0, m = !0, x = !1;
    const A = () => {
      p && cancelAnimationFrame(p), p = 0, x && va(l[0]?.viewer ?? null, l[0]?.interaction ?? null), x = !1;
      for (const F of l) {
        F.interaction?.cleanup();
        try {
          F.viewer?.clear();
        } catch {
        }
      }
      l = [], u.replaceChildren();
    }, R = (F) => {
      const O = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), b = N("div", "flex:1;position:relative;min-height:0;");
      b.dataset.gufeViewer = "", O.appendChild(b), _ && O.appendChild(N("div", qr, F)), u.appendChild(O);
      const E = { container: b, viewer: null, interaction: null };
      return l.push(E), E;
    }, I = () => {
      if (l.length < 2) return;
      const F = l.map(() => "");
      let O = !1;
      const b = () => {
        if (m) {
          if (!O)
            for (let E = 0; E < l.length; E++) {
              const D = l[E].viewer;
              if (!D) continue;
              const z = JSON.stringify(D.getView());
              if (z !== F[E]) {
                O = !0;
                for (let q = 0; q < l.length; q++)
                  q !== E && l[q].viewer && (l[q].viewer.setView(D.getView()), l[q].viewer.render()), F[q] = z;
                O = !1;
                break;
              }
            }
          p = requestAnimationFrame(b);
        }
      };
      p = requestAnimationFrame(b);
    }, T = (F, O) => {
      const b = et.createViewer(F.container, { backgroundColor: Lt.viewer });
      for (const { mol: E } of O) b.addModel(wf(E), "sdf");
      return F.viewer = b, b;
    }, B = (F) => {
      F.viewer && (F.interaction = dr(F.container, F.viewer));
    }, V = (F) => {
      ba(F.viewer, F.interaction), x = !0;
    }, U = () => {
      for (const F of [d, f]) {
        const O = R(F.name), b = T(O, [{ mol: F }]);
        b.setStyle(
          {},
          { stick: { radius: Ke.stick, colorscheme: "Jmol" }, sphere: { scale: Ke.sphere, colorscheme: "Jmol" } }
        ), b.zoomTo(), b.render(), B(O), V(O);
      }
      I();
    }, Y = () => {
      const F = Fe, O = is(F.customSpec), b = [
        { mol: d, uniques: w, side: "left", custom: O.left },
        { mol: f, uniques: g, side: "right", custom: O.right }
      ];
      for (const E of b) {
        const D = R(E.mol.name), z = T(D, [{ mol: E.mol }]);
        z.setStyle(
          {},
          { stick: { radius: Ke.stick, color: Mr.core }, sphere: { scale: Ke.sphere, color: Mr.core } }
        );
        const q = (W, J) => {
          z.addStyle(
            { serial: W },
            {
              stick: { radius: Ke.markStick, color: ss(J) },
              sphere: { scale: Ke.markSphere, color: ss(J) }
            }
          );
        };
        for (const W of as(F, E.mol, E.uniques, E.side))
          for (const J of W.atoms) q(J, W.color);
        for (const W of E.custom)
          W < E.mol.symbols.length && q(W, F.customColor);
        z.zoomTo(), z.render(), B(D), V(D);
      }
      I();
    }, oe = () => {
      const F = R(`${s} (left), both overlaid (middle), ${a} (right)`), O = dp(d.coords, f.coords), b = (P, L) => ({
        ...P,
        coords: P.coords.map(([G, Z, te]) => [G + L, Z, te])
      }), E = b(d, -O), D = b(f, O), z = T(F, [{ mol: E }, { mol: D }, { mol: d }, { mol: f }]);
      z.setStyle({}, { stick: {} });
      const q = Array.from(c);
      q.forEach(([P, L], G) => {
        const Z = E.coords[P], te = D.coords[L];
        if (!Z || !te) return;
        const ae = up(G, q.length);
        for (const [re, se, de] of [Z, te])
          z.addSphere({
            center: { x: re, y: se, z: de },
            radius: Dt.sphereRadius,
            color: ae,
            alpha: Dt.sphereAlpha
          });
      }), z.zoomTo();
      const { clientWidth: W, clientHeight: J } = F.container, C = W - 2 * ip;
      C > 0 && C < J && z.zoom(C / J), z.render(), B(F);
    }, Q = () => {
      const F = R(`${s} to ${a}  (${c.size} mapped pairs)`), { axis: O, lift: b } = lp(d.coords, f.coords), E = {
        ...f,
        coords: f.coords.map((q) => {
          const W = [q[0], q[1], q[2]];
          return W[O] += b, W;
        })
      }, D = T(F, [{ mol: d }, { mol: E }]), z = {
        stick: { radius: Ke.stick, colorscheme: "Jmol" },
        sphere: { scale: Ke.pairSphere, colorscheme: "Jmol" }
      };
      D.setStyle({ model: 0 }, z), D.setStyle({ model: 1 }, z);
      for (const [q, W] of c) {
        const J = d.coords[q], C = E.coords[W];
        !J || !C || D.addCylinder({
          start: { x: J[0], y: J[1], z: J[2] },
          end: { x: C[0], y: C[1], z: C[2] },
          radius: Ke.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Mr.pairLine
        });
      }
      D.zoomTo(), O === 2 ? D.rotate(90, "x") : O === 0 && D.rotate(-90, "z"), D.render(), B(F);
    }, ie = () => {
      const F = Fe, O = is(F.customSpec), E = [
        { mol: d, uniques: w, side: "left", custom: O.left },
        { mol: f, uniques: g, side: "right", custom: O.right }
      ].map((D) => {
        const z = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), q = N(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${wa()};`
        );
        return q.appendChild(ge("Loading 2D depiction...")), z.appendChild(q), _ && z.appendChild(N("div", qr, D.mol.name)), u.appendChild(z), { box: q, side: D };
      });
      lr().then((D) => {
        const z = uf(F, D), q = Qf(D, o.sdf, i.sdf, F.layout, F.alignPair ? c : null);
        for (const { box: W, side: J } of E) {
          const C = as(F, J.mol, J.uniques, J.side), P = ff(
            F,
            Nr,
            C,
            J.custom,
            z,
            J.mol.symbols.length
          ), L = pf(D, J.side === "left" ? q.left : q.right, Nr, P);
          if (W.replaceChildren(), !L) {
            W.appendChild(ge("Failed to parse molecule", !0));
            continue;
          }
          ka(W, L, Nr);
          const G = W.querySelector("svg");
          G && vf(G, J.mol, F, C, J.custom, z);
        }
      }).catch((D) => {
        for (const { box: z } of E)
          z.replaceChildren(ge(`RDKit failed to load: ${$e(D)}`, !0));
      });
    }, X = () => {
      const F = N(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(F);
      const O = N("div", "display:flex;flex-direction:column;gap:2px;");
      O.appendChild(
        N(
          "div",
          `font-size:${ee.title};font-weight:${me.bold};color:${qe.title};`,
          n.name || `${s} to ${a}`
        )
      ), F.appendChild(O);
      const b = ap(c, d.symbols, f.symbols), E = N("div", Oe.row), D = [];
      let z = null;
      const q = (re, se, de, pe) => {
        const ye = N("button", `${Oe.plain}${Oe.button}`);
        ye.type = "button", ye.appendChild(Qe(re, String(se), pe)), ye.onclick = () => {
          z = z === de ? null : de, te();
        }, D.push({ button: ye, kinds: de }), E.appendChild(ye);
      }, W = (re, se) => {
        const de = N("span", Oe.plain);
        de.appendChild(Qe(re, se)), E.appendChild(de);
      };
      q("mapped atoms", c.size, ["mapped", "element"]), q("element changes", w.elements.length, ["element"], Fe.modifiedColor), q(`unique to ${s}`, w.atoms.length, ["uniqueA"], Fe.destroyedColor), q(`unique to ${a}`, g.atoms.length, ["uniqueB"], Fe.createdColor), W(`atoms in ${s}`, String(d.symbols.length)), W(`atoms in ${a}`, String(f.symbols.length)), W("score", n.score == null ? ct : n.score.toFixed(3)), F.appendChild(E), F.appendChild(N("div", Vr, "Correspondence"));
      const J = N("div", Br);
      F.appendChild(J);
      const C = N(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${op}px,1fr));gap:${ne.xs} ${ne.md};font-family:${ee.mono};font-size:${ee.small};color:${qe.primary};`
      );
      F.appendChild(C);
      const P = String(Math.max(d.symbols.length, f.symbols.length, 1) - 1).length, L = (re, se) => `${(re == null ? ct : String(re)).padStart(P)} ${se.padEnd(2)}`, G = (re) => {
        if (re.kind === "uniqueA") return `${s} atom ${re.a} ${re.symbolA} maps to nothing`;
        if (re.kind === "uniqueB") return `${a} atom ${re.b} ${re.symbolB} maps to nothing`;
        const se = re.kind === "element" ? ", an element change" : "";
        return `${s} atom ${re.a} ${re.symbolA} maps to ${a} atom ${re.b} ${re.symbolB}${se}`;
      }, Z = (re) => {
        const se = N(
          "div",
          `white-space:pre;padding:${ne.xs} ${ne.md};border-radius:${ze.sm};background:${Lt.card};border-left:3px solid ${rp[re.kind] ?? "transparent"};`,
          `${L(re.a, re.symbolA)} -> ${L(re.b, re.symbolB)}`
        );
        return se.title = G(re), se.dataset.gufeRelation = re.kind, se;
      }, te = () => {
        const re = z, se = re ? b.filter((de) => re.includes(de.kind)) : b;
        C.replaceChildren(...se.map(Z)), se.length || C.appendChild(
          N("div", `${Br}grid-column:1/-1;`, z ? "No atoms of that kind." : "This mapping has no atoms.")
        ), J.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${s} -> ${a}, by atom index and element` + (z ? "; click the chip again for all of them" : "");
        for (const de of D) {
          const pe = de.kinds === z;
          de.button.style.cssText = `${Oe.plain}${pe ? Oe.active : Oe.button}`, de.button.setAttribute("aria-pressed", String(pe)), de.button.title = pe ? "Show every atom" : "Show only these atoms";
        }
      };
      te();
      const ae = Object.entries(n.annotations ?? {}).filter(([re]) => re !== "score");
      if (ae.length) {
        F.appendChild(N("div", Vr, "Annotations"));
        const re = N("div", `${Xa}color:${qe.faint};`);
        for (const [se, de] of ae)
          re.appendChild(N("div", "", `${se}: ${String(de)}`));
        F.appendChild(re);
      }
    }, j = () => {
      if (A(), h === "info") {
        X();
        return;
      }
      if (h === "2d") {
        ie();
        return;
      }
      u.appendChild(ge("Loading 3D viewer...")), cr().then(() => {
        m && (u.replaceChildren(), h === "colored" ? Y() : h === "openfe" ? oe() : h === "lines" ? Q() : U());
      }).catch((F) => {
        u.replaceChildren(ge(`3D render failed: ${$e(F)}`, !0));
      });
    };
    return j(), {
      onResize() {
        for (const F of l)
          F.viewer && (F.viewer.resize(), F.viewer.render());
      },
      cleanup() {
        m = !1, S.cleanup(), A();
      }
    };
  }
}
Me("gufe-atom-mapping", fp);
const ks = ["Force-directed", "Circular", "Radial"], pp = "ligand-network", hp = "Click a ligand or an edge to see it.";
function mp(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function gp(e) {
  return Oa(e);
}
const xs = (e) => Math.round(e * 100) / 100;
function yp(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function $p(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Ot = { initial: 0.58, min: 0.25, max: 0.8 }, Ae = 38, Es = 1.5, Or = {
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
}, vp = "6 4", As = 200, bp = 2, wp = Math.SQRT2 * (Ae - bp), _p = 14, Sp = 18, Ce = {
  fontSize: 11,
  below: Ae + 12,
  minFontSize: 7,
  insideWidth: (Ae - 6) * 2
}, jt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Ps = 1.5, Cp = 6.5, kp = 0.9, xp = 14, Fr = { size: 8, clearance: 8 }, Ep = { fontSize: 10 }, Ap = 0.4, Pp = Wr(M.netMatchAtom), Ft = { padding: 4, opacity: 0.95 }, Rp = 3, xt = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Mp = (e) => xt.find((t) => e >= t.from) ?? xt[xt.length - 1], Np = (e) => xt[Math.min(xt.indexOf(e) + 1, xt.length - 1)], Vn = 200, Tp = 24, zr = { node: 0.12, edge: 0.06 }, Op = 1.8, Rs = 2 * Ae + 68, Ee = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: Rs,
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
  collisionPadding: Rs / 2 - Ae,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Fp(e) {
  const t = N(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${ee.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function zp(e) {
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
      refX: Ae + Fr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Fr.size,
      markerHeight: Fr.size,
      orient: "auto"
    });
    return i.appendChild(ue("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function Ip(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function jp(e) {
  const [t, n] = M.netEdgeRamp.map(Ip), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const We = rt, Dp = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Lp(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = fr("cpk"), o = [], i = (v) => (e.matched().get(v) ?? []).join(","), s = (v, u) => {
    if (t.has(u) || n.has(u)) return;
    const y = e.nodes[u], h = e.matched().get(u), k = y.sdf && So(
      v,
      y.sdf,
      As,
      Fe.layout,
      h && { atoms: h, color: Pp, radius: Ap },
      r
    );
    if (!k) {
      n.add(u);
      return;
    }
    if (!Fa(e.depictionGroups[u], k, As, wp)) {
      n.add(u);
      return;
    }
    t.add(u), o[u] = i(u);
  }, a = () => {
    for (const v of [...t])
      o[v] !== i(v) && (e.depictionGroups[v].replaceChildren(), t.delete(v));
  }, c = [], d = (v, u) => {
    if (c[v]) return c[v];
    u.setAttribute("font-size", String(Ce.fontSize));
    let y = 0;
    try {
      y = u.getBBox().width;
    } catch {
      return Ce.fontSize;
    }
    if (!y) return Ce.fontSize;
    const h = Ce.fontSize * Ce.insideWidth / y;
    return c[v] = Math.max(Ce.minFontSize, Math.min(Ce.fontSize, h)), c[v];
  }, f = [], $ = (v) => {
    const u = e.captionPlates[v];
    if (f[v] === Ce.below) {
      u.setAttribute("display", "inline");
      return;
    }
    let y = null;
    try {
      y = e.captions[v].getBBox();
    } catch {
      y = null;
    }
    if (!y?.width) {
      u.setAttribute("display", "none");
      return;
    }
    u.setAttribute("x", String(y.x - jt.captionPadX)), u.setAttribute("y", String(y.y - jt.captionPadY)), u.setAttribute("width", String(y.width + jt.captionPadX * 2)), u.setAttribute("height", String(y.height + jt.captionPadY * 2)), u.setAttribute("display", "inline"), f[v] = Ce.below;
  }, w = (v, u) => {
    const y = u.structure && !t.has(v) ? Np(u) : u;
    e.depictionGroups[v].setAttribute("display", y.structure ? "inline" : "none");
    const h = e.plates[v];
    h.setAttribute("display", y.structure ? "inline" : "none");
    const k = e.matched().has(v);
    h.setAttribute("stroke", k ? M.netMatchStroke : M.netNodeStroke);
    const S = e.circles[v];
    S.setAttribute("fill", y.disc ? k ? M.netMatchFill : M.netNodeFill : "none"), S.setAttribute("stroke", y.disc ? k ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[v].setAttribute("display", y.initials ? "inline" : "none");
    const l = e.charges[v];
    if (l) {
      const A = !y.structure, R = Ae * Or.at;
      l.setAttribute("x", String(R)), l.setAttribute("y", String(-R)), l.setAttribute("font-size", String(A ? Or.bigFontSize : Or.fontSize)), l.setAttribute("font-weight", A ? me.bold : me.normal);
    }
    const p = e.captions[v], m = y.name === "below";
    if (p.setAttribute("fill", k ? M.netMatchStroke : m ? xu() : M.netNodeCaption), p.setAttribute("display", y.name === "none" ? "none" : "inline"), m || e.captionPlates[v].setAttribute("display", "none"), y.name === "none") return;
    const x = y.name === "inside";
    p.setAttribute("y", x ? "0" : String(Ce.below)), p.setAttribute("dominant-baseline", x ? "middle" : "auto"), p.setAttribute("font-size", String(x ? d(v, p) : Ce.fontSize)), m && $(v);
  };
  let g = null;
  return { apply: (v, u, y) => {
    const h = Mp(v);
    g = h, e.stage.setAttribute("data-detail", h.id), e.edgeLabels.setAttribute("display", h.edgeScores ? "inline" : "none");
    for (let p = 0; p < e.nodes.length; p++) w(p, h);
    if (!h.structure) return;
    const { width: k, height: S } = e.viewport(), l = [];
    e.nodes.forEach((p, m) => {
      if (t.has(m) || n.has(m)) return;
      const x = p.x * v + u, A = p.y * v + y;
      x < -Vn || A < -Vn || x > k + Vn || A > S + Vn || l.push(m);
    }), l.length && e.rdkit().then((p) => {
      if (!(!p || g !== h))
        for (const m of l)
          s(p, m), w(m, h);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: a };
}
function qp(e) {
  const t = kt("ligand-network.query"), n = no("ligand-network.minScore", 0, 0, 1), r = N("div", to), o = N("input", `${Zn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const i = Ia({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: kt("ligand-network.smarts"),
    run: (v) => e.match(v),
    describe: (v) => {
      const u = v.unreadable ? `, ${v.unreadable} could not be read` : "";
      return `${v.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(i.element);
  const s = N("div", `display:flex;align-items:center;gap:8px;font-size:${ee.small};color:${M.textMuted};`), a = N("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), c = N("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(N("span", "", "score >=")), s.appendChild(c), s.appendChild(a), r.appendChild(s);
  const d = N("div", `font-size:${ee.small};color:${M.textMuted2};`);
  r.appendChild(d);
  const f = N("div", Ks);
  r.appendChild(f), r.appendChild(N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`, ko));
  const $ = Ra({
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
  const w = N("button", `${Et}width:100%;`, "Clear selection");
  w.onclick = () => {
    e.selected.clear(), _(), e.refresh();
  }, r.appendChild(w);
  const g = (v) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? We(v).toLowerCase().includes(u) || (v.smiles ?? "").toLowerCase().includes(u) || v["gufe-key"].toLowerCase().includes(u) : !0;
  }, _ = () => {
    $.clearNote(), f.replaceChildren();
    const v = e.nodes.map((u, y) => ({ node: u, index: y })).filter(({ node: u }) => g(u));
    d.textContent = `${v.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: y } of v) {
      const h = u["gufe-key"], k = N(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${ee.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(h) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(h) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), S = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", We(u));
      S.title = `${We(u)}
${u.smiles ?? ""}`, k.appendChild(S), k.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(h) ? e.selected.delete(h) : e.selected.add(h) : (e.selected.clear(), e.selected.add(h), e.focus(y)), _(), e.refresh();
      }, f.appendChild(k);
    }
    v.length || f.appendChild(N("div", `font-size:${ee.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), _(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, _(), i.apply(), r;
}
class Vp extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = At(n), o = [];
    let i = 0;
    for (const C of n.nodes ?? []) {
      const P = xe(r, C, "SmallMoleculeComponentViz");
      if (!P) {
        i++;
        continue;
      }
      o.push({ ...P, x: 0, y: 0 });
    }
    const s = new Map(o.map((C) => [C["gufe-key"], C])), a = [];
    let c = 0;
    for (const C of n.edges ?? []) {
      const P = s.get(C.componentA), L = s.get(C.componentB);
      if (!P || !L) {
        c++;
        continue;
      }
      a.push({ ...C, index: a.length, from: P, to: L });
    }
    const d = er(n.name || "Ligand network");
    d.statsEl.appendChild(Qe("ligands", String(o.length))), d.statsEl.appendChild(Qe("mappings", String(a.length))), t.appendChild(d);
    const f = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(f);
    const $ = /* @__PURE__ */ new Set(), w = { minScore: 0 }, g = { text: "" };
    let _ = () => {
    }, v = null;
    const u = () => v ??= lr().catch((C) => (console.warn("[gufe-viz] RDKit failed to load:", $e(C)), null)), y = za(
      u,
      o.map((C) => C.sdf ?? "")
    );
    let h = /* @__PURE__ */ new Map(), k = () => {
    };
    const S = async (C) => {
      const P = await y.run(C);
      return P.status === "superseded" || (h = P.status === "ok" ? P.matched : /* @__PURE__ */ new Map(), k()), P;
    }, l = ao(
      d,
      () => qp({
        nodes: o,
        edges: a,
        selected: $,
        filter: w,
        query: g,
        refresh: () => _(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (C) => {
          U(C), W({ kind: "ligand", index: C });
        },
        match: (C) => S(C)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => J(),
        remember: dt("ligand-network.menuOpen", !1)
      }
    );
    f.appendChild(l.panel);
    let p = () => {
    };
    const m = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), x = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`);
    f.appendChild(m), f.appendChild(
      ra(f, m, x, {
        min: Ot.min,
        max: Ot.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: no("ligand-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => p(),
        onOrient: (C) => io(l.panel, C)
      })
    ), f.appendChild(x);
    const A = N("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    m.appendChild(A);
    const R = pt("ligand-network.layout", "Force-directed", ks), I = this.#n(
      (C) => J(C),
      () => D(),
      R,
      a.some((C) => ys(C.from, C.to) !== 0)
    );
    m.appendChild(I.bar);
    const T = this.#e(x, r);
    if (!o.length)
      return A.appendChild(
        ge(
          i ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), T.message("Nothing to show."), {};
    i && ut(
      A,
      `${i} ligand${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && ut(A, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const B = u(), V = Fp(A);
    let U = () => {
    };
    const Y = yp(ic(pp), o.length);
    let oe = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, Q = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const C = Y.selectedKind ?? "edge";
      Y.selected < (C === "ligand" ? o.length : a.length) && (Q = { kind: C, index: Y.selected });
    }
    let ie = () => ({ scale: 1, tx: 0, ty: 0 }), X = !1, j = null, F = R.get(), O = !1, b = !0, E = () => {
    }, D = () => {
    }, z = 0;
    const q = () => {
      if (!Q) {
        T.message(a.length ? hp : "Click a ligand to see it.");
        return;
      }
      Q.kind === "edge" ? T.showMapping(a[Q.index]) : T.showLigand(o[Q.index]);
    }, W = (C) => {
      Q = C, q(), E();
    }, J = (C = F) => {
      const P = X && C === F ? ie() : null, L = ++z;
      F = C, j?.(), j = null, A.querySelectorAll("svg").forEach((ae) => ae.remove());
      const G = A.clientWidth || 800, Z = A.clientHeight || 600;
      Bp(o, G, Z, F, a), Y && $p(o, Y.nodes);
      const te = () => {
        if (!b || L !== z) return;
        const ae = this.#t(A, o, a, G, Z, W, B, V);
        E = () => ae.setSelected(Q), D = ae.reset, j = ae.cleanup, U = (se) => ae.focusOn(se), ie = ae.transform, _ = () => {
          const se = g.text.trim().toLowerCase(), de = $.size > 0 || se.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Ne of o) {
            const Ve = Ne["gufe-key"], ot = $.has(Ve) || se.length > 0 && (We(Ne).toLowerCase().includes(se) || (Ne.smiles ?? "").toLowerCase().includes(se) || Ve.toLowerCase().includes(se));
            (!de || ot) && pe.add(Ve);
          }
          const ye = /* @__PURE__ */ new Set();
          a.forEach((Ne, Ve) => {
            (Ne.score ?? 0) < w.minScore || !pe.has(Ne.from["gufe-key"]) || !pe.has(Ne.to["gufe-key"]) || ye.add(Ve);
          });
          const ve = de || w.minScore > 0;
          ae.setEmphasis(ve ? pe : null, ve ? ye : null);
        }, k = () => ae.setMatches(h), E(), _(), k();
        const re = oe ?? P;
        re ? (ae.setTransform(re.scale, re.tx, re.ty), oe = null) : ae.fit(), X = !0;
      };
      if (F !== "Force-directed" || O || Y) {
        te();
        return;
      }
      Up(o, a, G, Z).then((ae) => {
        if (!(!b || L !== z)) {
          if (ae) {
            te();
            return;
          }
          O = !0, I.picker.value = "Circular", ut(A, "d3 could not be loaded - showing the circular layout instead"), J("Circular");
        }
      }, te);
    };
    return p = () => J(), J(), q(), {
      onResize: () => J(),
      cleanup: () => {
        b = !1, y.cancel(), V.remove(), j?.();
      },
      viewState: () => ({
        nodes: o.map((C) => [xs(C.x), xs(C.y)]),
        ...ie(),
        selected: Q ? Q.index : -1,
        selectedKind: Q ? Q.kind : "edge"
      })
    };
  }
  #n(t, n, r, o) {
    const i = N(
      "div",
      Gs.bottom
    ), s = N("div", `display:flex;align-items:center;gap:6px;font-size:${ee.small};color:${M.textMuted};`);
    if (s.appendChild(N("span", "", "score")), s.appendChild(
      N(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(N("span", "", "0 -> 1")), i.appendChild(s), o) {
      const c = N("div", `display:flex;align-items:center;gap:6px;font-size:${ee.small};color:${M.textMuted};`);
      c.appendChild(
        N(
          "span",
          `width:24px;height:0;border-top:2px dashed ${M.netEdgeLine};display:inline-block;`
        )
      ), c.appendChild(N("span", "", "net charge change")), i.appendChild(c);
    }
    i.appendChild(N("label", `font-size:${ee.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const a = Vt(
      ks.map((c) => ({ id: c, label: c })),
      r.get(),
      (c) => t(c),
      r
    );
    return i.appendChild(a), i.appendChild(bo(n, "Reset pan and zoom")), { bar: i, picker: a };
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
    const o = (s) => r.replaceChildren(ge(s)), i = (s, a) => {
      const c = document.createElement(s);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (s) => i("gufe-atom-mapping", ja(mp(s), n)),
      showLigand: (s) => i("gufe-small-molecule", gp(s)),
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
    const $ = ue("defs"), w = zp($);
    d.appendChild($);
    const g = [], _ = ue("g"), v = ue("g"), u = ue("g", { "pointer-events": "none" }), y = ue("g");
    f.append(_, v, u, y);
    for (const U of r) {
      const Y = jp(U.score), oe = Ps + (U.score ?? 0.5) * (Cp - Ps), Q = ue("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": oe + Ft.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), ie = ys(U.from, U.to), X = ue("line", {
        stroke: Y,
        "stroke-width": oe,
        "stroke-opacity": kp,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${w(Y)})`,
        "pointer-events": "none",
        ...ie ? { "stroke-dasharray": vp } : {}
      }), j = ue("line", { stroke: "transparent", "stroke-width": xp, style: "cursor:pointer;" });
      j.addEventListener("click", (b) => {
        b.stopPropagation(), s({ kind: "edge", index: U.index });
      }), j.addEventListener("mousemove", (b) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${ke(We(U.from))} -&gt; ${ke(We(U.to))}</div>` + (U.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${U.score.toFixed(3)}</b></div>`) + (ie ? `<div style="margin-top:4px;">net charge <b>${ke(lt(ie))}</b> <span style="color:${M.textMuted2};">(${ke(lt(U.from.total_charge ?? 0))} to ${ke(lt(U.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${ee.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          b.offsetX,
          b.offsetY
        );
      }), j.addEventListener("mouseleave", () => c.hide()), g.push(Q), _.append(Q, X), v.appendChild(j);
      const F = ue("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ep.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      F.textContent = U.score == null ? "" : U.score.toFixed(2);
      const O = ue("g", { class: "gufe-edge-label" });
      O.appendChild(F), u.appendChild(O);
    }
    const h = [], k = [], S = [], l = [], p = [], m = [], x = [], A = [], R = n.map((U) => {
      const Y = ue("g", { class: "gufe-node", style: "cursor:grab;" });
      Y.addEventListener("mousemove", (b) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${ke(We(U))}</div>` + (U.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${ke(U.smiles)}</div>` : "") + (U.total_charge ? `<div style="margin-top:3px;">formal charge <b>${ke(lt(U.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${ee.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${ke(U["gufe-key"])}</div><div style="margin-top:4px;font-size:${ee.tiny};color:${M.textMuted2};">Click to see the ligand</div>`,
          b.offsetX,
          b.offsetY
        );
      }), Y.addEventListener("mouseleave", () => c.hide());
      const oe = ue("circle", {
        class: "gufe-node-halo",
        r: Ae + Ft.padding,
        fill: "none",
        stroke: M.netHaloColor,
        "stroke-width": Ft.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      Y.appendChild(oe), p.push(oe);
      const Q = ue("circle", {
        class: "gufe-node-disc",
        r: Ae,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": Es,
        "pointer-events": "all"
      });
      Y.appendChild(Q), k.push(Q);
      const ie = ue("circle", {
        class: "gufe-node-plate",
        r: Ae,
        fill: Gr(),
        stroke: M.netNodeStroke,
        "stroke-width": Es,
        display: "none",
        "pointer-events": "none"
      });
      Y.appendChild(ie), S.push(ie);
      const X = ue("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      Y.appendChild(X), h.push(X);
      const j = ue("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Sp,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      if (j.textContent = We(U).slice(0, 2).toUpperCase(), Y.appendChild(j), m.push(j), U.total_charge) {
        const b = ue("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: M.badgeFg,
          "pointer-events": "none"
        });
        b.textContent = lt(U.total_charge), Y.appendChild(b), A.push(b);
      } else
        A.push(null);
      const F = ue("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Ce.below,
        "font-size": Ce.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      F.textContent = Dp(We(U), _p), F.setAttribute("display", "none"), x.push(F);
      const O = ue("rect", {
        class: "gufe-node-caption-plate",
        rx: jt.captionRadius,
        fill: Gr(),
        display: "none",
        "pointer-events": "none"
      });
      return l.push(O), Y.appendChild(O), Y.appendChild(F), y.appendChild(Y), Y;
    }), I = () => {
      r.forEach((U, Y) => {
        for (const Q of [g[Y], _.children[Y * 2 + 1], v.children[Y]]) {
          const ie = Q;
          ie.setAttribute("x1", String(U.from.x)), ie.setAttribute("y1", String(U.from.y)), ie.setAttribute("x2", String(U.to.x)), ie.setAttribute("y2", String(U.to.y));
        }
        u.children[Y].setAttribute(
          "transform",
          `translate(${(U.from.x + U.to.x) / 2},${(U.from.y + U.to.y) / 2 - 8})`
        );
      }), n.forEach((U, Y) => R[Y].setAttribute("transform", `translate(${U.x},${U.y})`));
    };
    I();
    let T = /* @__PURE__ */ new Map();
    const B = Lp({
      nodes: n,
      circles: k,
      plates: S,
      captionPlates: l,
      matched: () => T,
      captions: x,
      initials: m,
      charges: A,
      depictionGroups: h,
      edgeLabels: u,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), V = this.#r(
      d,
      f,
      n,
      R,
      I,
      B.apply,
      (U) => s({ kind: "ligand", index: U })
    );
    return {
      setSelected(U) {
        const Y = U?.kind === "edge" ? U.index : -1, oe = U?.kind === "ligand" ? U.index : -1;
        g.forEach((Q, ie) => Q.setAttribute("opacity", ie === Y ? String(Ft.opacity) : "0")), p.forEach((Q, ie) => Q.setAttribute("opacity", ie === oe ? String(Ft.opacity) : "0"));
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
      setMatches(U) {
        T = U, B.forget();
        const { scale: Y, tx: oe, ty: Q } = V.transform();
        B.apply(Y, oe, Q);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(U, Y) {
        R.forEach((oe, Q) => {
          const ie = !U || U.has(n[Q]["gufe-key"]);
          oe.setAttribute("opacity", ie ? "1" : String(zr.node));
        }), r.forEach((oe, Q) => {
          const ie = !Y || Y.has(Q), X = ie ? "0.9" : String(zr.edge);
          _.children[Q * 2 + 1].setAttribute("stroke-opacity", X), u.children[Q].setAttribute("opacity", ie ? "1" : String(zr.edge));
        });
      },
      focusOn(U) {
        const Y = n[U];
        Y && V.centreOn(Y.x, Y.y);
      },
      setDetail: B.apply,
      depictionsDrawn: () => B.drawn(),
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
    const c = Ta(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Na(r, Ae),
      margin: Tp,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, f) => {
      let $ = null, w = !1;
      d.addEventListener("pointerdown", (_) => {
        _.stopPropagation();
        const { scale: v } = c.transform();
        $ = { x: _.clientX - r[f].x * v, y: _.clientY - r[f].y * v }, w = !1, d.setPointerCapture(_.pointerId);
      }), d.addEventListener("pointermove", (_) => {
        if (!$) return;
        if (c.gesturing()) {
          $ = null, w = !0;
          return;
        }
        const { scale: v } = c.transform(), u = (_.clientX - $.x) / v, y = (_.clientY - $.y) / v;
        Math.hypot(u - r[f].x, y - r[f].y) * v > Rp && (w = !0), r[f].x = r[f].fx = u, r[f].y = r[f].fy = y, i();
      });
      const g = () => {
        $ = null;
      };
      d.addEventListener("pointerup", g), d.addEventListener("pointercancel", g), d.addEventListener("click", (_) => {
        _.stopPropagation(), w || a(f);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, f) => c.centreOn(d, f, Op)
    };
  }
}
function Bp(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, d) => {
    c.forEach((f, $) => {
      const w = 2 * Math.PI * $ / Math.max(1, c.length) - Math.PI / 2;
      f.x = i + d * Math.cos(w), f.y = s + d * Math.sin(w), f.fx = r === "Force-directed" ? void 0 : f.x, f.fy = r === "Force-directed" ? void 0 : f.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((v) => [v["gufe-key"], []]));
    for (const v of o)
      c.get(v.from["gufe-key"]).push(v.to["gufe-key"]), c.get(v.to["gufe-key"]).push(v.from["gufe-key"]);
    const d = new Map(e.map((v) => [v["gufe-key"], v])), f = e.reduce(
      (v, u) => c.get(u["gufe-key"]).length > c.get(v["gufe-key"]).length ? u : v
    ), $ = /* @__PURE__ */ new Set([f["gufe-key"]]);
    let w = [f["gufe-key"]], g = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; w.length; ) {
      a(
        w.map((u) => d.get(u)),
        g === 0 ? 0 : g * _ + 40
      );
      const v = [];
      for (const u of w)
        for (const y of c.get(u))
          $.has(y) || ($.add(y), v.push(y));
      w = v, g++;
    }
    a(e.filter((v) => !$.has(v["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Up(e, t, n, r) {
  let o;
  try {
    if (o = await ga(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance((c) => Ee.linkBaseDistance + (1 - (c.score ?? 0.5)) * Ee.linkScoreBonus).strength(Ee.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Ee.chargeStrength).distanceMin(Ee.chargeDistanceMin).distanceMax(Ee.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Ee.centerStrength)).force("collision", o.forceCollide(Ae + Ee.collisionPadding).iterations(Ee.collisionIterations)).force("x", o.forceX(n / 2).strength(Ee.drift)).force("y", o.forceY(r / 2).strength(Ee.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * Ee.tickMultiplier; c++) s.tick();
  return !0;
}
Me("gufe-ligand-network", Vp);
const Hp = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function Da(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Je(t, o);
    i && (Hp.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function Kp(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Ms = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], Gp = 0.4;
class Wp extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Da(n, At(n)), o = r.structures.map((g, _) => _), i = r.ligands.map((g, _) => r.structures.length + _), s = pt(
      "complex.focus",
      "site",
      Ms.map((g) => g.id)
    );
    let a = s.get(), c = null;
    const d = Pa({
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
        Qn(
          Ms,
          a,
          (g) => {
            a = g, $();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => $()
    });
    function f() {
      const g = d.viewer();
      g && (Zr(g, d.opts, c, d.showStatus, { model: o }), xf(g, { model: i }), g.render());
    }
    function $() {
      const g = d.viewer();
      g && (a === "site" && i.length ? (g.zoomTo({ model: i }), g.zoom(Gp)) : g.zoomTo(), g.render(), w());
    }
    function w() {
      const g = d.viewer();
      g && (d.interaction()?.cleanup(), d.setInteraction(dr(d.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(Ns(r, () => c));
    try {
      c = Ea(r.structures[0].pdb), d.setStats(Ns(r, () => c));
    } catch (g) {
      d.showStatus(`PDB parse error: ${$e(g)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), cr().then(() => {
      const g = et.createViewer(d.pane.container, { backgroundColor: Lt.viewer });
      d.setViewer(g);
      for (const _ of r.structures) g.addModel(_.pdb, "pdb");
      for (const _ of r.ligands) g.addModel(Ca(_.sdf), "sdf");
      f(), d.restoreCamera() ? w() : $(), g.spin(d.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      d.showStatus(`Failed to render structure: ${$e(g)}`, "error");
    }), d.handle;
  }
}
function Ns(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = _o(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...Aa(o)] : [r];
}
Me("gufe-complex", Wp);
function Jp(e, t) {
  return {
    ...e,
    registry: Co(t, Object.values(e.components ?? {}))
  };
}
const Yp = "chemical-system.component", Xp = 460, Zp = 200, Qp = "35%";
function eh(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function th(e) {
  return e.type === "UnknownComponentViz" ? tr(e.gufe_type) : null;
}
function Ts(e) {
  return N(
    "div",
    `padding:10px 10px 16px;font-weight:${me.bold};font-size:${ee.title};color:${M.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class nh extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = At(n), o = [], i = [];
    for (const [R, I] of Object.entries(n.components ?? {})) {
      const T = Je(r, I);
      T ? o.push([R, T]) : i.push(R);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(Ts(s)), t.appendChild(
        ge(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = N(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), i.length && ut(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const c = N(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.panelBg};`
    );
    a.appendChild(c), c.appendChild(Ts(s));
    const d = N(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(d);
    const f = N(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(f);
    const $ = N(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    f.appendChild($);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", w.setAttribute(Ur, ""), $.appendChild(w);
    const g = Da(n, r), _ = Kp(g), v = (R) => _ && g.structures.some(
      (I) => I === R
    ), u = o.filter(([, R]) => !v(R)).map(([R, I]) => ({
      key: R,
      title: R,
      subtitle: eh(I),
      badge: th(I),
      element: w,
      point: () => {
        w.payload = I;
      }
    }));
    if (_) {
      const R = document.createElement("gufe-complex");
      R.style.cssText = "flex:1;min-width:0;min-height:0;", R.setAttribute(Ur, ""), R.payload = n, u.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${g.ligands.length === 1 ? g.ligands[0].name || "ligand" : "ligands"} in ${g.structures[0].name || "structure"}`,
        badge: null,
        element: R,
        point: () => {
        }
      });
    }
    let y = null;
    const h = (R) => {
      y !== R && ($.replaceChildren(R), y = R);
    }, k = kt(Yp), S = [], l = (R) => {
      S.forEach((I, T) => {
        const B = T === R;
        I.style.background = B ? M.cardBgActive : M.cardBg, I.style.borderColor = B ? M.cardBorderActive : M.cardBorder;
      }), u[R].point(), h(u[R].element);
    }, p = (R) => {
      k.set(u[R].key), l(R);
    };
    u.forEach((R, I) => {
      const T = N(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${ee.body};flex-shrink:0;max-width:100%;box-sizing:border-box;`
      );
      T.appendChild(
        N("span", `font-weight:700;color:${M.textPrimary};`, R.title)
      ), T.appendChild(
        N(
          "span",
          `font-size:${ee.small};color:${M.textMuted};`,
          R.subtitle
        )
      ), R.badge && T.appendChild(R.badge), T.onclick = () => p(I), S.push(T), d.appendChild(T);
    });
    const m = u.findIndex((R) => R.key === k.get());
    l(m < 0 ? 0 : m);
    let x = null;
    const A = nr(a, (R) => {
      const I = R > 0 && R < Xp;
      I !== x && (x = I, a.style.flexDirection = I ? "column" : "row", c.style.flex = I ? "0 0 auto" : `0 0 ${Zp}px`, c.style.maxHeight = I ? Qp : "none", c.style.borderRight = I ? "none" : `1px solid ${M.splitBorder}`, c.style.borderBottom = I ? `1px solid ${M.splitBorder}` : "none", d.style.flexDirection = I ? "row" : "column", d.style.flexWrap = I ? "wrap" : "nowrap", y?.resize?.());
    });
    return {
      onResize: () => y?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        A(), y?.remove();
      }
    };
  }
}
Me("gufe-chemical-system", nh);
const rh = 460, oh = 210, ih = "42%";
function sh(e, t) {
  const n = xe(t, e.stateA, "ChemicalSystemViz"), r = xe(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: Co(t, o) };
}
const xo = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function ah(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function ch(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function lh(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Ir(e, t, n) {
  const r = N(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${ne.md};padding:5px ${ne.lg};border-radius:${ze.md};background:${M.cardBg};border:1px solid ${M.cardBorder};`
  );
  n && r.appendChild(
    N(
      "span",
      `flex:0 0 auto;font-size:${ee.tiny};font-weight:${me.bold};letter-spacing:.08em;color:${M.textMuted2};`,
      n
    )
  );
  const o = lh(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(N("span", `font-size:${ee.body};color:${M.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? M.cardBorder : xo[t];
  const i = N(
    "span",
    `min-width:0;font-size:${ee.body};font-weight:600;color:${M.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(tr(o.type)), r;
}
function dh(e, t, n, r) {
  const o = N("div", `display:flex;flex-direction:column;gap:${ne.sm};min-width:0;`), i = N("div", `display:flex;align-items:center;gap:${ne.md};min-width:0;`);
  i.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${xo[t]};`)
  );
  const s = N(
    "span",
    `min-width:0;font-size:${ee.body};font-weight:${me.bold};color:${M.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Ir(n, t, null)), o) : (o.appendChild(Ir(n, t, "A")), o.appendChild(Ir(r, t, "B")), o);
}
function uh(e, t) {
  const n = Je(t, e.componentA), r = Je(t, e.componentB);
  return `${n ? rt(n) : "A"} to ${r ? rt(r) : "B"}`;
}
function Os(e) {
  return N(
    "div",
    `font-weight:${me.bold};font-size:${ee.heading};color:${M.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Fs(e, t) {
  const n = N("div", `display:flex;align-items:baseline;gap:${ne.md};min-width:0;font-size:${ee.small};`);
  return n.appendChild(N("span", `flex:0 0 auto;color:${M.textMuted};`, e)), n.appendChild(
    N("span", `min-width:0;font-weight:${me.bold};color:${M.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class fh extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = At(n), o = xe(r, n.stateA, "ChemicalSystemViz"), i = xe(r, n.stateB, "ChemicalSystemViz"), s = xe(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const l = N("div", "padding:12px 14px;flex-shrink:0;");
      return l.appendChild(Os(c)), t.appendChild(l), t.appendChild(
        ge("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const d = ch(o, i), f = N("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(f);
    const $ = N(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${M.panelBg};`
    );
    f.appendChild($);
    const w = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    f.appendChild(w);
    const g = N("div", `display:flex;flex-direction:column;gap:${ne.md};min-width:0;`);
    g.appendChild(Os(c)), g.appendChild(Fs("protocol", s?.gufe_type || s?.name || "-")), g.appendChild(Fs("mappings", String(a.length))), $.appendChild(g);
    const _ = N("div", `display:flex;flex-direction:column;gap:${ne.xs};`);
    for (const [l, p] of [
      ["State A", o],
      ["State B", i]
    ])
      _.appendChild(
        N(
          "div",
          `min-width:0;font-size:${ee.small};font-weight:${me.bold};letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};overflow-wrap:anywhere;`,
          `${l}${p.name ? ` - ${p.name}` : ""}`
        )
      );
    $.appendChild(_);
    const v = /* @__PURE__ */ new Set();
    for (const l of d) {
      const p = o.components?.[l], m = i.components?.[l], x = ah(p, m);
      v.add(x), $.appendChild(
        dh(
          l,
          x,
          Je(r, p),
          Je(r, m)
        )
      );
    }
    if (v.size > 1) {
      const l = N(
        "div",
        `display:flex;flex-wrap:wrap;gap:${ne.lg} 12px;padding-top:${ne.sm};font-size:${ee.small};color:${M.textMuted};`
      );
      for (const p of ["unchanged", "changed", "added", "removed"])
        v.has(p) && l.appendChild(Qe(p, "", xo[p]));
      $.appendChild(l);
    }
    const u = N("div", Ka, "Atom mapping");
    w.appendChild(u);
    let y = null;
    const h = nr(t, (l) => {
      const p = l > 0 && l < rh;
      p !== y && (y = p, f.style.flexDirection = p ? "column" : "row", $.style.flex = p ? "0 0 auto" : `0 0 ${oh}px`, $.style.maxWidth = p ? "none" : ih, $.style.maxHeight = p ? "45%" : "none", $.style.borderRight = p ? "none" : `1px solid ${M.splitBorder}`, $.style.borderBottom = p ? `1px solid ${M.splitBorder}` : "none", u.style.display = p ? "block" : "none");
    });
    if (!a.length)
      return w.appendChild(
        ge(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const k = document.createElement("gufe-atom-mapping");
    k.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (l) => {
      k.payload = ja(a[l], r);
    };
    if (S(0), a.length > 1) {
      const l = N(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${ee.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      l.appendChild(
        Qn(
          a.map((p, m) => ({
            id: String(m),
            label: p.name || uh(p, r)
          })),
          "0",
          (p) => S(Number(p))
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
Me("gufe-transformation", fh);
const ft = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, zs = (e) => e ? ft.depictedHeight : ft.height, De = { pad: 6, size: 122, radius: 6, inset: 4 }, Is = 200, zt = {
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
}, ph = "6 4", Ge = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, hh = 7, jr = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], mh = (e) => jr.find((t) => e >= t.from) ?? jr[jr.length - 1], Bn = 200, Un = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, js = (e, t) => {
  const n = t ? Un.selectedWidth : Un.width;
  return Math.max(Un.min, Math.min(n, n * e));
}, Dr = { width: 3, selectedWidth: 4.5, min: 1.25 }, Ds = (e, t) => {
  const n = t ? Dr.selectedWidth : Dr.width;
  return Math.max(Dr.min, Math.min(n, n * e));
}, St = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, It = { initial: 0.56, min: 0.25, max: 0.78 }, gh = 24, Ls = { x: ft.width / 2, y: ft.depictedHeight / 2 }, qs = { node: 0.12, edge: 0.06 }, yh = 1.4, $h = 3, Yn = rt;
function Lr(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function La(e, t) {
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
const vh = (e, t) => La(e, t).join(" + ");
function bh(e, t) {
  const n = { fill: M.netNodeFill, stroke: M.netNodeStroke }, r = e.map((s) => vh(s, t)), o = [...new Set(r)];
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
function wh(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Je(t, o);
    if (!i) continue;
    n.push(rt(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function _h(e, t) {
  const n = [], r = [], o = /* @__PURE__ */ new Map(), i = e.map((s) => {
    const a = [];
    for (const c of Object.values(s.components ?? {})) {
      const d = xe(t, c, "SmallMoleculeComponentViz");
      if (!d) continue;
      let f = o.get(c);
      f === void 0 && (f = n.length, o.set(c, f), n.push(d.sdf ?? ""), r.push(d.total_charge ?? 0)), a.push(f);
    }
    return a;
  });
  return { sources: n, charges: r, perNode: i };
}
function Sh(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function Ch(e) {
  const t = kt("alchemical-network.query"), n = kt("alchemical-network.composition"), r = N("div", to), o = N("input", `${Zn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const i = Ia({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: kt("alchemical-network.smarts"),
    run: (w) => e.match(w),
    describe: (w) => {
      const g = w.unreadable ? `, ${w.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${g}`;
    }
  });
  if (r.appendChild(i.element), e.compositions.length > 1) {
    const w = N("div", `display:flex;align-items:center;gap:6px;font-size:${ee.small};color:${M.textMuted};`);
    w.appendChild(N("span", "flex-shrink:0;", "made of"));
    const g = Vt(
      [{ id: "", label: "anything" }, ...e.compositions.map((_) => ({ id: _, label: _ }))],
      "",
      (_) => {
        e.filter.composition = _, $(), e.refresh();
      },
      n
    );
    g.style.cssText += "flex:1;min-width:0;", e.filter.composition = g.value, w.appendChild(g), r.appendChild(w);
  }
  const s = N("div", `font-size:${ee.small};color:${M.textMuted2};`);
  r.appendChild(s);
  const a = N("div", Ks);
  r.appendChild(a), r.appendChild(N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`, ko));
  const c = Ra({
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
  const d = N("button", `${Et}width:100%;`, "Clear selection");
  d.onclick = () => {
    e.selected.clear(), $(), e.refresh();
  }, r.appendChild(d);
  const f = (w) => {
    const g = e.query.text.trim().toLowerCase();
    if (g && !e.haystacks[w].includes(g) || e.filter.composition && e.signatures[w] !== e.filter.composition) return !1;
    const _ = e.matched();
    return !(_ && !_.has(w));
  }, $ = () => {
    c.clearNote(), a.replaceChildren();
    const w = e.nodes.map((g, _) => ({ node: g, index: _ })).filter(({ index: g }) => f(g));
    s.textContent = `${w.length} of ${e.nodes.length} systems`;
    for (const { node: g, index: _ } of w) {
      const v = g["gufe-key"], u = e.selected.has(v), y = N(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${ee.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? M.cardBorderActive : M.cardBorder};background:${u ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), h = e.colorOf(_);
      y.appendChild(
        N(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${h.fill};border:1px solid ${h.stroke};`
        )
      );
      const k = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Yn(g));
      k.title = `${Yn(g)}
${e.signatures[_]}`, y.appendChild(k), y.onclick = (S) => {
        S.shiftKey || S.metaKey || S.ctrlKey ? e.selected.has(v) ? e.selected.delete(v) : e.selected.add(v) : (e.selected.clear(), e.selected.add(v), e.focus(_)), $(), e.refresh();
      }, a.appendChild(y);
    }
    w.length || a.appendChild(N("div", `font-size:${ee.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), $(), e.refresh();
  }, $(), e.mounted($), i.apply(), r;
}
function kh(e, t, n) {
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
async function xh(e, t, n, r) {
  let o;
  try {
    if (o = await ga(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const i = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), s = o.forceSimulation(e).force(
    "link",
    o.forceLink(i).id((c) => c["gufe-key"]).distance(St.linkDistance).strength(St.linkStrength)
  ).force("charge", o.forceManyBody().strength(St.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(St.collisionRadius).iterations(St.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * St.tickMultiplier; c++) s.tick();
  return !0;
}
class Eh extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = At(n), o = [];
    let i = 0;
    for (const C of n.nodes ?? []) {
      const P = xe(r, C, "ChemicalSystemViz");
      if (!P) {
        i++;
        continue;
      }
      o.push({ ...P, x: 0, y: 0 });
    }
    const s = new Map(o.map((C) => [C["gufe-key"], C])), a = [];
    let c = 0;
    for (const C of n.edges ?? []) {
      const P = s.get(C.stateA), L = s.get(C.stateB);
      if (!P || !L) {
        c++;
        continue;
      }
      a.push({ ...C, index: a.length, from: P, to: L });
    }
    const d = (C) => {
      const P = xe(r, C.protocol, "ProtocolViz");
      return P?.gufe_type || P?.name || "";
    }, f = new Set(a.map(d).filter(Boolean)), $ = er(n.name || "Alchemical network");
    $.statsEl.appendChild(Qe("systems", String(o.length))), $.statsEl.appendChild(Qe("transformations", String(a.length))), f.size && $.statsEl.appendChild(Qe("protocol", [...f].join(", ")));
    const w = bh(o, r), g = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(g);
    let _ = () => {
    };
    const v = /* @__PURE__ */ new Set(), u = { composition: "" }, y = { text: "" };
    let h = () => {
    }, k = () => {
    }, S = () => {
    };
    const l = o.map((C) => wh(C, r));
    let p = null;
    const m = () => p ??= lr().catch((C) => (console.warn("[gufe-viz] RDKit failed to load:", $e(C)), null)), x = _h(o, r), A = za(m, x.sources), R = o.map((C, P) => {
      const L = x.perNode[P].find((te) => x.sources[te]), G = L === void 0 ? null : x.sources[L], Z = La(C, r);
      return {
        colors: w.colorOf(P),
        composition: Z.join(" + "),
        besides: Sh(Z, G !== null, x.perNode[P].length),
        sdf: G,
        charge: L === void 0 ? 0 : x.charges[L]
      };
    });
    let I = null, T = () => {
    };
    const B = async (C) => {
      const P = await A.run(C);
      return P.status === "superseded" || (I = P.status === "ok" ? new Set(o.flatMap((L, G) => x.perNode[G].some((Z) => P.matched.has(Z)) ? [G] : [])) : null, T(), h()), P;
    }, V = ao(
      $,
      () => Ch({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: w.signatures,
        colorOf: w.colorOf,
        compositions: w.compositions,
        selected: v,
        filter: u,
        query: y,
        refresh: () => h(),
        matched: () => I,
        match: (C) => B(C),
        mounted: (C) => {
          T = C;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (C) => {
          k(C), S(C);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => _(),
        remember: dt("alchemical-network.menuOpen", !1)
      }
    ), U = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), Y = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`), oe = N("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`), Q = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    Q.appendChild(V.panel), Q.appendChild(oe), U.appendChild($), U.appendChild(Q), g.appendChild(U), g.appendChild(
      ra(g, U, Y, {
        min: It.min,
        max: It.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: no("alchemical-network.canvasShare", It.initial, It.min, It.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => _(),
        onOrient: (C) => {
          Q.style.flexDirection = C ? "column" : "row", io(V.panel, C);
        }
      })
    ), g.appendChild(Y);
    const ie = this.#e(Y, r);
    if (!o.length)
      return oe.appendChild(
        ge(
          i ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), ie.message("Nothing to show."), { cleanup: () => ie.cleanup() };
    i && ut(
      oe,
      `${i} chemical system${i === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && ut(
      oe,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, j = !1, F = null, O = () => {
    }, b = () => {
    }, E = () => {
    }, D = 0;
    const z = new Map(o.map((C, P) => [C["gufe-key"], R[P].charge])), q = a.some(
      (C) => (z.get(C.to["gufe-key"]) ?? 0) !== (z.get(C.from["gufe-key"]) ?? 0)
    );
    U.appendChild(this.#n(w.legend, () => b(), q));
    const W = (C, P) => {
      F = { kind: C, index: P }, ie.show(C === "node" ? o[P] : a[P], C), O();
    };
    S = (C) => W("node", C);
    const J = () => {
      const C = ++D, P = oe.clientWidth || 800, L = oe.clientHeight || 600;
      kh(o, P, L);
      const G = () => {
        if (!X || C !== D) return;
        E(), oe.querySelectorAll("svg").forEach((te) => te.remove());
        const Z = this.#t(oe, o, a, P, L, R, m, W);
        E = Z.cleanup, b = Z.reset, k = (te) => Z.focusOn(te), O = () => Z.setSelected(F), O(), h = () => {
          const te = y.text.trim().toLowerCase();
          if (!(v.size > 0 || te.length > 0 || u.composition !== "" || I !== null)) {
            Z.setEmphasis(null, null);
            return;
          }
          const re = te.length > 0 || u.composition !== "" || I !== null, se = /* @__PURE__ */ new Set();
          o.forEach((pe, ye) => {
            const ve = re && (!te || l[ye].includes(te)) && (!u.composition || w.signatures[ye] === u.composition) && (!I || I.has(ye));
            (v.has(pe["gufe-key"]) || ve) && se.add(pe["gufe-key"]);
          });
          const de = /* @__PURE__ */ new Set();
          a.forEach((pe, ye) => {
            se.has(pe.from["gufe-key"]) && se.has(pe.to["gufe-key"]) && de.add(ye);
          }), Z.setEmphasis(se, de);
        }, h();
      };
      if (j) {
        G();
        return;
      }
      xh(o, a, P, L).then((Z) => {
        !X || C !== D || (Z || (j = !0, ut(oe, "d3 could not be loaded - showing the circular layout instead")), G());
      }, G);
    };
    return _ = J, J(), W("node", 0), {
      onResize: () => J(),
      cleanup: () => {
        X = !1, E(), ie.cleanup();
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
  #n(t, n, r) {
    const o = N("div", Gs.bottom);
    if (o.appendChild(bo(n, "Reset pan and zoom")), r) {
      const i = N("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(N("span", `width:24px;height:0;border-top:2px dashed ${M.netEdgeLine};flex-shrink:0;`)), i.appendChild(N("span", `font-size:${ee.small};color:${M.textMuted};`, "net charge change")), o.appendChild(i);
    }
    if (!t.length) return o;
    o.appendChild(N("span", `font-size:${ee.small};color:${M.textMuted};`, "systems made of"));
    for (const [i, s] of t) {
      const a = N("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      a.appendChild(
        N(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), a.appendChild(
        N("span", `font-size:${ee.small};color:${M.textPrimary};overflow-wrap:anywhere;`, i)
      ), o.appendChild(a);
    }
    return o;
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
    const r = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const i = (a) => r.replaceChildren(ge(a));
    return { show: (a, c) => {
      let d;
      if (c === "node")
        d = Jp(Oa(a), n);
      else {
        const { index: f, from: $, to: w, ...g } = a;
        d = sh(g, n);
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
    const $ = ue("g"), w = ue("g");
    f.append($, w);
    let g = () => {
    };
    const _ = Ta(d, f, {
      bounds: () => Na(n, Ls.x, Ls.y),
      margin: gh,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (z, q, W) => g(z, q, W)
    }), v = (z, q) => {
      _.wasPan() || c(z, q);
    }, u = [], y = [], h = new Map(n.map((z, q) => [z["gufe-key"], s[q].charge])), k = (z) => (h.get(z.to["gufe-key"]) ?? 0) - (h.get(z.from["gufe-key"]) ?? 0);
    r.forEach((z, q) => {
      const W = k(z), J = ue("line", {
        x1: z.from.x,
        y1: z.from.y,
        x2: z.to.x,
        y2: z.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": js(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
        ...W ? { "stroke-dasharray": ph } : {}
      });
      gs(
        J,
        (z.name || "transformation") + (W ? ` - net charge change ${lt(W)}` : "")
      ), J.addEventListener("click", () => v("edge", q)), $.appendChild(J), u.push(J);
      const C = ue("line", {
        x1: z.from.x,
        y1: z.from.y,
        x2: z.to.x,
        y2: z.to.y,
        stroke: "transparent",
        "stroke-width": Un.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      C.addEventListener("click", () => v("edge", q)), $.appendChild(C), y.push(C);
    });
    const S = n.map(() => []), l = new Map(n.map((z, q) => [z, q]));
    r.forEach((z, q) => {
      const W = l.get(z.from), J = l.get(z.to);
      W !== void 0 && S[W].push(q), J !== void 0 && J !== W && S[J].push(q);
    });
    const p = [], m = [], x = [], A = [], R = [], I = [], T = [], B = [], V = [];
    n.forEach((z, q) => {
      const W = s[q], J = zs(W.sdf), C = ue("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${z.x},${z.y})`
      });
      x.push(C);
      const P = ue("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -J / 2,
        width: ft.width,
        height: J,
        rx: ft.radius,
        fill: W.colors.fill,
        stroke: W.colors.stroke,
        "stroke-width": Ds(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (C.appendChild(P), p.push(P), m.push(W.colors.stroke), W.sdf) {
        const Z = ue("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -J / 2 + De.pad,
          width: De.size,
          height: De.size,
          rx: De.radius,
          fill: Gr(),
          display: "none",
          "pointer-events": "none"
        });
        if (C.appendChild(Z), I.push(Z), W.charge) {
          const re = ue("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: M.badgeFg,
            "pointer-events": "none"
          });
          re.textContent = lt(W.charge), C.appendChild(re), T.push(re);
        } else
          T.push(null);
        const te = ue("g", { transform: `translate(0,${-J / 2 + De.pad + De.size / 2})` }), ae = ue("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        te.appendChild(ae), C.appendChild(te), B.push(te), V.push(ae);
      } else
        I.push(null), B.push(null), V.push(null), T.push(null);
      const L = ue("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": Ge.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      L.textContent = Lr(Yn(z), Ge.nameChars), C.appendChild(L), A.push(L);
      const G = ue("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": Ge.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      G.textContent = Lr(W.composition, Ge.subChars), C.appendChild(G), R.push(G), gs(C, `${Yn(z)} - ${W.composition}`), w.appendChild(C);
    });
    const U = (z) => {
      const q = n[z];
      x[z].setAttribute("transform", `translate(${q.x},${q.y})`);
      for (const W of S[z])
        for (const J of [u[W], y[W]])
          r[W].from === q && (J.setAttribute("x1", String(q.x)), J.setAttribute("y1", String(q.y))), r[W].to === q && (J.setAttribute("x2", String(q.x)), J.setAttribute("y2", String(q.y)));
    }, Y = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set(), Q = fr("cpk"), ie = (z, q) => {
      if (Y.has(q) || oe.has(q)) return;
      const W = V[q], J = s[q].sdf;
      if (!W || !J) return;
      const C = So(z, J, Is, Fe.layout, void 0, Q);
      if (!C || !Fa(W, C, Is, De.size - De.inset * 2)) {
        oe.add(q);
        return;
      }
      Y.add(q);
    }, X = (z, q, W) => {
      const J = s[z], C = q && Y.has(z), P = (se) => se * W >= hh, L = P(Ge.nameSize), G = P(Ge.subSize);
      A[z].setAttribute("display", L ? "inline" : "none"), R[z].setAttribute("display", G ? "inline" : "none"), I[z]?.setAttribute("display", C ? "inline" : "none"), V[z]?.setAttribute("display", C ? "inline" : "none");
      const Z = zs(J.sdf), te = -Z / 2 + De.pad, ae = T[z];
      ae && (ae.setAttribute("x", String(C ? ft.width / 2 - zt.inset : 0)), ae.setAttribute(
        "y",
        String(C ? -Z / 2 + zt.inset : -Z * zt.bigAt)
      ), ae.setAttribute("font-size", String(C ? zt.fontSize : zt.bigFontSize)), ae.setAttribute("font-weight", C ? me.normal : me.bold)), I[z]?.setAttribute("y", String(te)), B[z]?.setAttribute("transform", `translate(0,${te + De.size / 2})`);
      const re = Z / 2 - Ge.bottom;
      A[z].setAttribute("y", String(C ? re - (G ? Ge.gap : 0) : -2)), R[z].setAttribute("y", String(C ? re : 14)), R[z].textContent = Lr(C ? J.besides : J.composition, Ge.subChars);
    };
    let j = null, F = 1, O = null, b = null;
    const E = () => {
      p.forEach((z, q) => {
        const W = O === q;
        z.setAttribute("stroke", W ? M.cardBorderActive : m[q]), z.setAttribute("stroke-width", String(Ds(F, W)));
      }), u.forEach((z, q) => {
        const W = b === q;
        z.setAttribute("stroke", W ? M.netHaloColor : M.netEdgeLine), z.setAttribute("stroke-width", String(js(F, W)));
      });
    };
    return g = (z, q, W) => {
      const J = mh(z);
      j = J, d.setAttribute("data-detail", J.id), F = z, E();
      for (let P = 0; P < n.length; P++) X(P, J.structure, z);
      if (!J.structure) return;
      const C = [];
      n.forEach((P, L) => {
        if (!s[L].sdf || Y.has(L) || oe.has(L)) return;
        const G = P.x * z + q, Z = P.y * z + W;
        G < -Bn || Z < -Bn || G > o + Bn || Z > i + Bn || C.push(L);
      }), C.length && a().then((P) => {
        if (!(!P || j !== J))
          for (const L of C)
            ie(P, L), X(L, !0, z);
      }).catch(() => {
      });
    }, x.forEach((z, q) => {
      let W = null, J = !1;
      z.addEventListener("pointerdown", (P) => {
        P.stopPropagation();
        const { scale: L } = _.transform();
        W = { x: P.clientX - n[q].x * L, y: P.clientY - n[q].y * L }, J = !1, z.setPointerCapture(P.pointerId);
      }), z.addEventListener("pointermove", (P) => {
        if (!W) return;
        if (_.gesturing()) {
          W = null, J = !0;
          return;
        }
        const { scale: L } = _.transform(), G = (P.clientX - W.x) / L, Z = (P.clientY - W.y) / L;
        Math.hypot(G - n[q].x, Z - n[q].y) * L > $h && (J = !0), n[q].x = n[q].fx = G, n[q].y = n[q].fy = Z, U(q);
      });
      const C = () => {
        W = null;
      };
      z.addEventListener("pointerup", C), z.addEventListener("pointercancel", C), z.addEventListener("click", (P) => {
        P.stopPropagation(), J || c("node", q);
      });
    }), _.fit(), {
      setSelected(z) {
        O = z?.kind === "node" ? z.index : null, b = z?.kind === "edge" ? z.index : null, E();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(z, q) {
        x.forEach((W, J) => {
          const C = !z || z.has(n[J]["gufe-key"]);
          W.setAttribute("opacity", C ? "1" : String(qs.node));
        }), u.forEach((W, J) => {
          const C = !q || q.has(J);
          W.setAttribute("opacity", C ? "1" : String(qs.edge));
        });
      },
      focusOn(z) {
        const q = n[z];
        q && _.centreOn(q.x, q.y, yh);
      },
      reset: _.reset,
      cleanup: _.cleanup
    };
  }
}
Me("gufe-alchemical-network", Eh);
class Ah extends Re {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = er(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(tr(n.gufe_type)), t.appendChild(r);
    const o = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = ro();
    return i.style.maxWidth = "460px", i.appendChild(Gn("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Gn("Name", n.name)), i.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:${ee.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Me("gufe-protocol", Ah);
function Ph(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function Vs(e, t = !1) {
  const n = N(
    "div",
    `display:flex;flex-direction:column;gap:${ne.xl};padding:${ne.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${M.splitBorder};`)
  );
  return n.appendChild(N("div", Vr, e)), n;
}
function Hn(e) {
  return N(
    "div",
    `font-size:${ee.tiny};font-weight:${me.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
    e
  );
}
function Bs(e, t) {
  const n = N("div", `display:flex;flex-direction:column;align-items:center;gap:${ne.sm};`);
  return n.appendChild(
    N(
      "span",
      `${Oe.plain}${Oe.outline}font-family:${ee.mono};font-size:${ee.body};`,
      e
    )
  ), n.appendChild(Hn(t)), n;
}
class Rh extends Re {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = ro();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = Vs("Solvent", !0), s = N("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = N("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = N(
      "div",
      `font-family:${ee.mono};font-size:${ee.display};font-weight:${me.bold};line-height:1.1;color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Hn("SMILES")), s.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const y = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      y.appendChild(
        N(
          "div",
          `font-size:${ee.body};color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), y.appendChild(Hn("Name")), s.appendChild(y);
    }
    i.appendChild(s), o.appendChild(i);
    const f = Vs("Ions"), $ = N("div", `display:flex;align-items:flex-end;gap:${ne.xxl};flex-wrap:wrap;`);
    n.positive_ion && $.appendChild(Bs(n.positive_ion, "cation")), n.negative_ion && $.appendChild(Bs(n.negative_ion, "anion"));
    const { value: w, unit: g } = Ph(n.ion_concentration), _ = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), v = N("div", `display:flex;align-items:baseline;gap:${ne.md};justify-content:flex-end;`);
    v.appendChild(
      N(
        "div",
        `font-size:${ee.display};font-weight:${me.bold};line-height:1;color:${M.titleColor};`,
        w
      )
    ), g && (v.appendChild(document.createTextNode(" ")), v.appendChild(N("div", `font-size:${ee.body};color:${M.textMuted};`, g))), _.appendChild(v), _.appendChild(Hn("Ion concentration")), $.appendChild(_), f.appendChild($);
    const u = n.neutralize;
    return f.appendChild(
      N(
        "span",
        `${Oe.plain}align-self:flex-start;font-weight:${me.bold};` + (u ? `background:${M.okBg};color:${M.okFg};` : `${Oe.outline}color:${M.textMuted};`),
        u ? "Neutralized" : "Not neutralized"
      )
    ), f.appendChild(
      N(
        "div",
        Br,
        u ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), o.appendChild(f), r.appendChild(o), {};
  }
}
Me("gufe-solvent", Rh);
class Mh extends Re {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = er(n.name || "Unnamed component");
    r.statsEl.appendChild(tr(n.gufe_type)), t.appendChild(r);
    const o = N("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = ro();
    return i.style.maxWidth = "460px", i.appendChild(
      N(
        "div",
        `font-size:${ee.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), i.appendChild(
      N(
        "div",
        `font-size:${ee.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), i.appendChild(Gn("Name", n.name || "(unnamed)")), i.appendChild(Gn("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Me("gufe-unknown-component", Mh);
function Ih(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Xs, reset: uc });
export {
  xc as CHROME_OPEN_BY_DEFAULT,
  Qa as DEBUG_ATTRIBUTE,
  ec as DEBUG_GLOBAL,
  Zu as DEFAULT_DEPICT_STYLE,
  gu as DEFAULT_ZOOM_BOUNDS,
  Fe as DEPICT_STYLE,
  of as DEPICT_STYLE_RANGES,
  Eh as GufeAlchemicalNetwork,
  fp as GufeAtomMapping,
  nh as GufeChemicalSystem,
  Wp as GufeComplex,
  Re as GufeElement,
  Vp as GufeLigandNetwork,
  Af as GufeProtein,
  Ah as GufeProtocol,
  _f as GufeSmallMolecule,
  Rh as GufeSolvent,
  fh as GufeTransformation,
  Mh as GufeUnknownComponent,
  du as GufeView,
  Ur as HIDE_NAME_ATTRIBUTE,
  Er as MAPPING_COLORS,
  wu as MAPPING_RAMP_3D,
  zh as MAPPING_RAMP_NAME,
  ko as MULTI_SELECT_HINT,
  Nh as PAYLOAD_TYPES,
  Th as SCHEMA_TYPES,
  yo as VIEW_TAGS,
  Jf as align2D,
  Zf as alignedToPartner,
  Wf as applyRT,
  Yf as applyTurn,
  $u as boundedZoom,
  At as buildRegistry,
  pt as choice,
  ao as chromeMenu,
  pu as claimGestures,
  Da as complexPartsFor,
  Js as debugEnabled,
  Me as defineElement,
  ha as describeProblem,
  ah as diffStatus,
  Fh as dispatchProblem,
  Co as entriesFor,
  rt as entryLabel,
  Ra as exportBlock,
  Na as extentOf,
  dt as flag,
  cu as formatIssues,
  ya as guardWheel,
  Kp as hasComplex,
  cp as inFrameOf,
  Gf as kabsch,
  ws as laidOut,
  Qf as layoutPair,
  lp as liftFor,
  oc as logPayload,
  Je as lookup,
  xe as lookupOfType,
  ja as mappingPayloadFor,
  as as markGroups,
  Ar as markedBonds,
  Ih as mount,
  oo as nameWanted,
  af as normaliseDepictStyle,
  no as num,
  nr as onWidth,
  dp as openfeShift,
  io as orientMenuPanel,
  up as pairColour,
  is as parseAtomSpec,
  rc as payloadJson,
  bo as resetControl,
  uc as resetSettings,
  Ta as sceneCamera,
  Pf as selectionText,
  Xn as setting,
  Xs as settings,
  ra as splitter,
  Jp as systemPayloadFor,
  kt as textSetting,
  sh as transformationPayloadFor,
  Ss as uniqueAtoms,
  lf as uniqueBonds,
  Oh as validateAs,
  au as validatePayload,
  dr as viewerInteraction,
  $a as wheelFactor,
  Xf as withCoords
};
