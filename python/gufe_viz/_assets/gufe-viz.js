function N(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ce(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $e(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const kt = (e) => e.toLocaleString("en-US"), Je = "-", Ln = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Jn(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
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
function qa() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const js = qa(), M = js ? tt.dark : tt.light, ee = {
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
}, he = {
  normal: "400",
  bold: "700"
}, te = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, we = {
  sm: "3px",
  md: "6px",
  lg: "8px",
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
}, ye = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${te.sm} 9px;font-size:${ee.small};font-weight:${he.bold};border-radius:${we.sm};cursor:pointer;font-family:inherit;max-width:100%;box-sizing:border-box;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, Ds = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${we.md};padding:${te.sm} ${te.lg};font-size:${ee.body};cursor:pointer;font-family:inherit;`, Ls = `${Ds}width:100%;box-sizing:border-box;cursor:text;`, qs = "24px", Va = `display:flex;align-items:flex-start;gap:12px;padding:9px ${te.xxl};flex-shrink:0;line-height:${qs};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Bn = { min: "236px", max: "340px" }, Xe = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, Vs = `display:flex;flex-direction:column;gap:${te.lg};flex:1;min-width:var(${Xe.min},${Bn.min});max-width:var(${Xe.max},${Bn.max});box-sizing:border-box;padding:${te.xl};min-height:0;overflow-y:auto;background:${M.panelBg};border:0 solid ${M.splitBorder};border-right-width:var(${Xe.ruleX},1px);border-bottom-width:var(${Xe.ruleY},0);`, Ba = "45%", Ua = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Bs = {
  bottom: `display:flex;align-items:center;gap:${te.xl};flex-wrap:wrap;padding:${te.lg} ${te.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, Ha = `flex-shrink:0;padding:${te.sm} ${te.xl};font-size:${ee.heading};font-weight:${he.bold};color:${M.labelFg};background:${M.labelBg};`, zr = `position:absolute;top:${te.md};left:${te.md};z-index:10;pointer-events:none;max-width:calc(100% - ${te.xxl} - ${te.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${te.xs} ${te.lg};border-radius:${we.md};font-size:${ee.heading};font-weight:${he.bold};color:${M.labelFg};background:${M.labelBg};`, Ka = `padding:${te.xs} ${te.lg};border-radius:${we.md};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${M.labelFg};background:${M.labelBg};`, Ga = `position:absolute;top:${te.lg};left:${te.lg};z-index:15;display:flex;align-items:center;gap:${te.md};min-width:0;max-width:calc(100% - ${te.xxl} - ${te.xxl});`, Wa = "42px", Ja = `display:flex;flex-direction:column;gap:${te.xs};padding:${te.xxl} 18px;border-radius:${we.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Et = {
  base: `display:flex;flex-direction:column;align-items:flex-start;gap:${te.sm};padding:${te.lg} ${te.xl};text-align:left;border-radius:${we.lg};border:1px solid ${M.cardBorder};background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${ee.body};width:100%;`,
  border: M.cardBorder,
  borderActive: M.cardBorderActive,
  bg: M.cardBg,
  bgActive: M.cardBgActive
}, Ya = `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px ${te.xl};border-radius:${we.md};font-size:${ee.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`, Us = `position:absolute;bottom:${te.xl};right:${te.xl};display:flex;gap:${te.sm};padding:${te.sm};border-radius:${we.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Xa = `font-family:${ee.mono};font-size:${ee.small};line-height:1.7;color:${M.textMuted};`, Ir = `font-size:${ee.small};font-weight:${he.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, Oe = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${te.xs} ${te.sm};font-size:${ee.small};`,
  plain: `display:inline-flex;align-items:center;padding:${te.xs} ${te.md};border:1px solid transparent;border-radius:${we.pill};font-family:inherit;font-size:${ee.small};color:${M.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${M.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${M.btnBg};border-color:${M.btnBorder};color:${M.textPrimary};`,
  active: `cursor:pointer;background:${M.cardBgActive};border-color:${M.btnBorder};color:${M.textPrimary};`
}, jr = `font-size:${ee.small};line-height:1.6;color:${M.textMuted2};`;
function Qe(e, t, n) {
  const r = N("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = N("span");
  return o.innerHTML = `${Ce(e)} <b style="color:${Le.primary};">${Ce(t)}</b>`, r.appendChild(o), r;
}
function lt(e, t) {
  const n = N("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${te.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${te.md} ${te.xxl};border-radius:${we.md};font-size:${ee.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function ge(e, t = !1) {
  return N(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${ee.heading};color:${t ? Le.error : Le.faint};`,
    e
  );
}
function Yn(e) {
  const t = N("div", Va);
  return t.className = "gufe-header", t.titleEl = N(
    "span",
    `font-weight:${he.bold};font-size:${ee.title};color:${Le.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = N(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${ee.small};color:${Le.muted};`
  ), t.textEl = N("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = N("div", `display:flex;align-items:center;height:${qs};flex-shrink:0;`), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Un(e, t, n = !1) {
  const r = N("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    N(
      "span",
      `flex:0 0 128px;font-size:${ee.tiny};font-weight:${he.bold};letter-spacing:.08em;text-transform:uppercase;color:${Le.faint};`,
      e
    )
  );
  const o = N(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Le.primary};` + (n ? `font-family:${ee.mono};font-size:${ee.small};` : `font-size:${ee.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Xn(e) {
  return N(
    "span",
    `padding:1px 7px;border-radius:${we.xl};font-size:${ee.tiny};font-weight:${he.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Wr() {
  return N("div", Ja);
}
function Hs() {
  const e = N("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = N("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Dr = "data-gufe-hide-name";
function Jr(e) {
  return !e.closest(`[${Dr}]`);
}
const Za = ["debug", "gufe-debug"], Qa = "debug", ec = "GUFE_VIZ_DEBUG";
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
function rc(e) {
  return e?.hasAttribute?.(Qa) ? !0 : tc() || nc();
}
function oc(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${$e(t)}>`;
  }
}
function ic(e, t, n) {
  if (!rc(n)) return;
  const r = oc(t), o = t?.type, i = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(i) : console.log(i), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ks = "GUFE_VIZ_VIEW_STATE";
function sc(e) {
  const t = globalThis[Ks];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const ac = 150, _o = "data-gufe-shell";
class Me extends HTMLElement {
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${_o}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), ac);
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
function Ne(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qt = { exports: {} }, pr = {}, qe = {}, ot = {}, hr = {}, mr = {}, gr = {}, So;
function Hn() {
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
        return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((k, _) => `${k}${_}`, "");
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((k, _) => (_ instanceof n && (k[_.str] = (k[_.str] || 0) + 1), k), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o($, ...h) {
      const k = [$[0]];
      let _ = 0;
      for (; _ < h.length; )
        a(k, h[_]), k.push($[++_]);
      return new r(k);
    }
    e._ = o;
    const i = new r("+");
    function s($, ...h) {
      const k = [g($[0])];
      let _ = 0;
      for (; _ < h.length; )
        k.push(i), a(k, h[_]), k.push(i, g($[++_]));
      return c(k), new r(k);
    }
    e.str = s;
    function a($, h) {
      h instanceof r ? $.push(...h._items) : h instanceof n ? $.push(h) : $.push(y(h));
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
    function u($, h) {
      return h.emptyStr() ? $ : $.emptyStr() ? h : s`${$}${h}`;
    }
    e.strConcat = u;
    function y($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : g(Array.isArray($) ? $.join(",") : $);
    }
    function w($) {
      return new r(g($));
    }
    e.stringify = w;
    function g($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = g;
    function C($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : o`[${$}]`;
    }
    e.getProperty = C;
    function v($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = v;
    function p($) {
      return new r($.toString());
    }
    e.regexpCode = p;
  })(gr)), gr;
}
var yr = {}, Co;
function ko() {
  return Co || (Co = 1, (function(e) {
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
      constructor({ prefixes: d, parent: u } = {}) {
        this._names = {}, this._prefixes = d, this._parent = u;
      }
      toName(d) {
        return d instanceof t.Name ? d : this.name(d);
      }
      name(d) {
        return new t.Name(this._newName(d));
      }
      _newName(d) {
        const u = this._names[d] || this._nameGroup(d);
        return `${d}${u.index++}`;
      }
      _nameGroup(d) {
        var u, y;
        if (!((y = (u = this._parent) === null || u === void 0 ? void 0 : u._prefixes) === null || y === void 0) && y.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(d, u) {
        super(u), this.prefix = d;
      }
      setValue(d, { property: u, itemIndex: y }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(u)}[${y}]`;
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
      value(d, u) {
        var y;
        if (u.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const w = this.toName(d), { prefix: g } = w, C = (y = u.key) !== null && y !== void 0 ? y : u.ref;
        let v = this._values[g];
        if (v) {
          const h = v.get(C);
          if (h)
            return h;
        } else
          v = this._values[g] = /* @__PURE__ */ new Map();
        v.set(C, w);
        const p = this._scope[g] || (this._scope[g] = []), $ = p.length;
        return p[$] = u.ref, w.setValue(u, { property: g, itemIndex: $ }), w;
      }
      getValue(d, u) {
        const y = this._values[d];
        if (y)
          return y.get(u);
      }
      scopeRefs(d, u = this._values) {
        return this._reduceValues(u, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${d}${y.scopePath}`;
        });
      }
      scopeCode(d = this._values, u, y) {
        return this._reduceValues(d, (w) => {
          if (w.value === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return w.value.code;
        }, u, y);
      }
      _reduceValues(d, u, y = {}, w) {
        let g = t.nil;
        for (const C in d) {
          const v = d[C];
          if (!v)
            continue;
          const p = y[C] = y[C] || /* @__PURE__ */ new Map();
          v.forEach(($) => {
            if (p.has($))
              return;
            p.set($, r.Started);
            let h = u($);
            if (h) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${k} ${$} = ${h};${this.opts._n}`;
            } else if (h = w?.($))
              g = (0, t._)`${g}${h}${this.opts._n}`;
            else
              throw new n($);
            p.set($, r.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = a;
  })(yr)), yr;
}
var Eo;
function se() {
  return Eo || (Eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ ko();
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
      optimizeNames(b, S) {
        return this;
      }
    }
    class s extends i {
      constructor(b, S, I) {
        super(), this.varKind = b, this.name = S, this.rhs = I;
      }
      render({ es5: b, _n: S }) {
        const I = b ? n.varKinds.var : this.varKind, z = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${z};` + S;
      }
      optimizeNames(b, S) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = q(this.rhs, b, S)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(b, S, I) {
        super(), this.lhs = b, this.rhs = S, this.sideEffects = I;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, S) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = q(this.rhs, b, S), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return V(b, this.rhs);
      }
    }
    class c extends a {
      constructor(b, S, I, z) {
        super(b, I, z), this.op = S;
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
    class u extends i {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `break${this.label ? ` ${this.label}` : ""};` + b;
      }
    }
    class y extends i {
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
      optimizeNames(b, S) {
        return this.code = q(this.code, b, S), this;
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
        return this.nodes.reduce((S, I) => S + I.render(b), "");
      }
      optimizeNodes() {
        const { nodes: b } = this;
        let S = b.length;
        for (; S--; ) {
          const I = b[S].optimizeNodes();
          Array.isArray(I) ? b.splice(S, 1, ...I) : I ? b[S] = I : b.splice(S, 1);
        }
        return b.length > 0 ? this : void 0;
      }
      optimizeNames(b, S) {
        const { nodes: I } = this;
        let z = I.length;
        for (; z--; ) {
          const L = I[z];
          L.optimizeNames(b, S) || (H(b, L.names), I.splice(z, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, S) => R(b, S.names), {});
      }
    }
    class C extends g {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class v extends g {
    }
    class p extends C {
    }
    p.kind = "else";
    class $ extends C {
      constructor(b, S) {
        super(S), this.condition = b;
      }
      render(b) {
        let S = `if(${this.condition})` + super.render(b);
        return this.else && (S += "else " + this.else.render(b)), S;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const b = this.condition;
        if (b === !0)
          return this.nodes;
        let S = this.else;
        if (S) {
          const I = S.optimizeNodes();
          S = this.else = Array.isArray(I) ? new p(I) : I;
        }
        if (S)
          return b === !1 ? S instanceof $ ? S : S.nodes : this.nodes.length ? this : new $(X(b), S instanceof $ ? [S] : S.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, S) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(b, S), !!(super.optimizeNames(b, S) || this.else))
          return this.condition = q(this.condition, b, S), this;
      }
      get names() {
        const b = super.names;
        return V(b, this.condition), this.else && R(b, this.else.names), b;
      }
    }
    $.kind = "if";
    class h extends C {
    }
    h.kind = "for";
    class k extends h {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, S) {
        if (super.optimizeNames(b, S))
          return this.iteration = q(this.iteration, b, S), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class _ extends h {
      constructor(b, S, I, z) {
        super(), this.varKind = b, this.name = S, this.from = I, this.to = z;
      }
      render(b) {
        const S = b.es5 ? n.varKinds.var : this.varKind, { name: I, from: z, to: L } = this;
        return `for(${S} ${I}=${z}; ${I}<${L}; ${I}++)` + super.render(b);
      }
      get names() {
        const b = V(super.names, this.from);
        return V(b, this.to);
      }
    }
    class l extends h {
      constructor(b, S, I, z) {
        super(), this.loop = b, this.varKind = S, this.name = I, this.iterable = z;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, S) {
        if (super.optimizeNames(b, S))
          return this.iterable = q(this.iterable, b, S), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class f extends C {
      constructor(b, S, I) {
        super(), this.name = b, this.args = S, this.async = I;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    f.kind = "func";
    class m extends g {
      render(b) {
        return "return " + super.render(b);
      }
    }
    m.kind = "return";
    class E extends C {
      render(b) {
        let S = "try" + super.render(b);
        return this.catch && (S += this.catch.render(b)), this.finally && (S += this.finally.render(b)), S;
      }
      optimizeNodes() {
        var b, S;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (S = this.finally) === null || S === void 0 || S.optimizeNodes(), this;
      }
      optimizeNames(b, S) {
        var I, z;
        return super.optimizeNames(b, S), (I = this.catch) === null || I === void 0 || I.optimizeNames(b, S), (z = this.finally) === null || z === void 0 || z.optimizeNames(b, S), this;
      }
      get names() {
        const b = super.names;
        return this.catch && R(b, this.catch.names), this.finally && R(b, this.finally.names), b;
      }
    }
    class A extends C {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    A.kind = "catch";
    class P extends C {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    P.kind = "finally";
    class F {
      constructor(b, S = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...S, _n: S.lines ? `
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
      scopeValue(b, S) {
        const I = this._extScope.value(b, S);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(b, S) {
        return this._extScope.getValue(b, S);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(b) {
        return this._extScope.scopeRefs(b, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(b, S, I, z) {
        const L = this._scope.toName(S);
        return I !== void 0 && z && (this._constants[L.str] = I), this._leafNode(new s(b, L, I)), L;
      }
      // `const` declaration (`var` in es5 mode)
      const(b, S, I) {
        return this._def(n.varKinds.const, b, S, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(b, S, I) {
        return this._def(n.varKinds.let, b, S, I);
      }
      // `var` declaration with optional assignment
      var(b, S, I) {
        return this._def(n.varKinds.var, b, S, I);
      }
      // assignment code
      assign(b, S, I) {
        return this._leafNode(new a(b, S, I));
      }
      // `+=` code
      add(b, S) {
        return this._leafNode(new c(b, e.operators.ADD, S));
      }
      // appends passed SafeExpr to code or executes Block
      code(b) {
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new w(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const S = ["{"];
        for (const [I, z] of b)
          S.length > 1 && S.push(","), S.push(I), (I !== z || this.opts.es5) && (S.push(":"), (0, t.addCodeArg)(S, z));
        return S.push("}"), new t._Code(S);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, S, I) {
        if (this._blockNode(new $(b)), S && I)
          this.code(S).else().code(I).endIf();
        else if (S)
          this.code(S).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new $(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, p);
      }
      _for(b, S) {
        return this._blockNode(b), S && this.code(S).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, S) {
        return this._for(new k(b), S);
      }
      // `for` statement for a range of values
      forRange(b, S, I, z, L = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const G = this._scope.toName(b);
        return this._for(new _(L, G, S, I), () => z(G));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, S, I, z = n.varKinds.const) {
        const L = this._scope.toName(b);
        if (this.opts.es5) {
          const G = S instanceof t.Name ? S : this.var("_arr", S);
          return this.forRange("_i", 0, (0, t._)`${G}.length`, (W) => {
            this.var(L, (0, t._)`${G}[${W}]`), I(L);
          });
        }
        return this._for(new l("of", z, L, S), () => I(L));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, S, I, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${S})`, I);
        const L = this._scope.toName(b);
        return this._for(new l("in", z, L, S), () => I(L));
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
        return this._leafNode(new u(b));
      }
      // `return` statement
      return(b) {
        const S = new m();
        if (this._blockNode(S), this.code(b), S.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(m);
      }
      // `try` statement
      try(b, S, I) {
        if (!S && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new E();
        if (this._blockNode(z), this.code(b), S) {
          const L = this.name("e");
          this._currNode = z.catch = new A(L), S(L);
        }
        return I && (this._currNode = z.finally = new P(), this.code(I)), this._endBlockNode(A, P);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new y(b));
      }
      // start self-balancing block
      block(b, S) {
        return this._blockStarts.push(this._nodes.length), b && this.code(b).endBlock(S), this;
      }
      // end the current self-balancing block
      endBlock(b) {
        const S = this._blockStarts.pop();
        if (S === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - S;
        if (I < 0 || b !== void 0 && I !== b)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${b} expected`);
        return this._nodes.length = S, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(b, S = t.nil, I, z) {
        return this._blockNode(new f(b, S, I)), z && this.code(z).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(f);
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
      _endBlockNode(b, S) {
        const I = this._currNode;
        if (I instanceof b || S && I instanceof S)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${S ? `${b.kind}/${S.kind}` : b.kind}"`);
      }
      _elseNode(b) {
        const S = this._currNode;
        if (!(S instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = S.else = b, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const b = this._nodes;
        return b[b.length - 1];
      }
      set _currNode(b) {
        const S = this._nodes;
        S[S.length - 1] = b;
      }
    }
    e.CodeGen = F;
    function R(O, b) {
      for (const S in b)
        O[S] = (O[S] || 0) + (b[S] || 0);
      return O;
    }
    function V(O, b) {
      return b instanceof t._CodeOrName ? R(O, b.names) : O;
    }
    function q(O, b, S) {
      if (O instanceof t.Name)
        return I(O);
      if (!z(O))
        return O;
      return new t._Code(O._items.reduce((L, G) => (G instanceof t.Name && (G = I(G)), G instanceof t._Code ? L.push(...G._items) : L.push(G), L), []));
      function I(L) {
        const G = S[L.str];
        return G === void 0 || b[L.str] !== 1 ? L : (delete b[L.str], G);
      }
      function z(L) {
        return L instanceof t._Code && L._items.some((G) => G instanceof t.Name && b[G.str] === 1 && S[G.str] !== void 0);
      }
    }
    function H(O, b) {
      for (const S in b)
        O[S] = (O[S] || 0) - (b[S] || 0);
    }
    function X(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${j(O)}`;
    }
    e.not = X;
    const oe = D(e.operators.AND);
    function Z(...O) {
      return O.reduce(oe);
    }
    e.and = Z;
    const ie = D(e.operators.OR);
    function J(...O) {
      return O.reduce(ie);
    }
    e.or = J;
    function D(O) {
      return (b, S) => b === t.nil ? S : S === t.nil ? b : (0, t._)`${j(b)} ${O} ${j(S)}`;
    }
    function j(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })(mr)), mr;
}
var ae = {}, xo;
function le() {
  if (xo) return ae;
  xo = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.checkStrictMode = ae.getErrorPath = ae.Type = ae.useFunc = ae.setEvaluated = ae.evaluatedPropsToName = ae.mergeEvaluated = ae.eachItem = ae.unescapeJsonPointer = ae.escapeJsonPointer = ae.escapeFragment = ae.unescapeFragment = ae.schemaRefOrVal = ae.schemaHasRulesButRef = ae.schemaHasRules = ae.checkUnknownRules = ae.alwaysValidSchema = ae.toHash = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Hn();
  function n(l) {
    const f = {};
    for (const m of l)
      f[m] = !0;
    return f;
  }
  ae.toHash = n;
  function r(l, f) {
    return typeof f == "boolean" ? f : Object.keys(f).length === 0 ? !0 : (o(l, f), !i(f, l.self.RULES.all));
  }
  ae.alwaysValidSchema = r;
  function o(l, f = l.schema) {
    const { opts: m, self: E } = l;
    if (!m.strictSchema || typeof f == "boolean")
      return;
    const A = E.RULES.keywords;
    for (const P in f)
      A[P] || _(l, `unknown keyword: "${P}"`);
  }
  ae.checkUnknownRules = o;
  function i(l, f) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (f[m])
        return !0;
    return !1;
  }
  ae.schemaHasRules = i;
  function s(l, f) {
    if (typeof l == "boolean")
      return !l;
    for (const m in l)
      if (m !== "$ref" && f.all[m])
        return !0;
    return !1;
  }
  ae.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: f }, m, E, A) {
    if (!A) {
      if (typeof m == "number" || typeof m == "boolean")
        return m;
      if (typeof m == "string")
        return (0, e._)`${m}`;
    }
    return (0, e._)`${l}${f}${(0, e.getProperty)(E)}`;
  }
  ae.schemaRefOrVal = a;
  function c(l) {
    return y(decodeURIComponent(l));
  }
  ae.unescapeFragment = c;
  function d(l) {
    return encodeURIComponent(u(l));
  }
  ae.escapeFragment = d;
  function u(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ae.escapeJsonPointer = u;
  function y(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ae.unescapeJsonPointer = y;
  function w(l, f) {
    if (Array.isArray(l))
      for (const m of l)
        f(m);
    else
      f(l);
  }
  ae.eachItem = w;
  function g({ mergeNames: l, mergeToName: f, mergeValues: m, resultToName: E }) {
    return (A, P, F, R) => {
      const V = F === void 0 ? P : F instanceof e.Name ? (P instanceof e.Name ? l(A, P, F) : f(A, P, F), F) : P instanceof e.Name ? (f(A, F, P), P) : m(P, F);
      return R === e.Name && !(V instanceof e.Name) ? E(A, V) : V;
    };
  }
  ae.mergeEvaluated = {
    props: g({
      mergeNames: (l, f, m) => l.if((0, e._)`${m} !== true && ${f} !== undefined`, () => {
        l.if((0, e._)`${f} === true`, () => l.assign(m, !0), () => l.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${f})`));
      }),
      mergeToName: (l, f, m) => l.if((0, e._)`${m} !== true`, () => {
        f === !0 ? l.assign(m, !0) : (l.assign(m, (0, e._)`${m} || {}`), v(l, m, f));
      }),
      mergeValues: (l, f) => l === !0 ? !0 : { ...l, ...f },
      resultToName: C
    }),
    items: g({
      mergeNames: (l, f, m) => l.if((0, e._)`${m} !== true && ${f} !== undefined`, () => l.assign(m, (0, e._)`${f} === true ? true : ${m} > ${f} ? ${m} : ${f}`)),
      mergeToName: (l, f, m) => l.if((0, e._)`${m} !== true`, () => l.assign(m, f === !0 ? !0 : (0, e._)`${m} > ${f} ? ${m} : ${f}`)),
      mergeValues: (l, f) => l === !0 ? !0 : Math.max(l, f),
      resultToName: (l, f) => l.var("items", f)
    })
  };
  function C(l, f) {
    if (f === !0)
      return l.var("props", !0);
    const m = l.var("props", (0, e._)`{}`);
    return f !== void 0 && v(l, m, f), m;
  }
  ae.evaluatedPropsToName = C;
  function v(l, f, m) {
    Object.keys(m).forEach((E) => l.assign((0, e._)`${f}${(0, e.getProperty)(E)}`, !0));
  }
  ae.setEvaluated = v;
  const p = {};
  function $(l, f) {
    return l.scopeValue("func", {
      ref: f,
      code: p[f.code] || (p[f.code] = new t._Code(f.code))
    });
  }
  ae.useFunc = $;
  var h;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(h || (ae.Type = h = {}));
  function k(l, f, m) {
    if (l instanceof e.Name) {
      const E = f === h.Num;
      return m ? E ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : E ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return m ? (0, e.getProperty)(l).toString() : "/" + u(l);
  }
  ae.getErrorPath = k;
  function _(l, f, m = l.opts.strictSchema) {
    if (m) {
      if (f = `strict mode: ${f}`, m === !0)
        throw new Error(f);
      l.self.logger.warn(f);
    }
  }
  return ae.checkStrictMode = _, ae;
}
var Vt = {}, Ao;
function ze() {
  if (Ao) return Vt;
  Ao = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
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
  return Vt.default = t, Vt;
}
var Po;
function Zn() {
  return Po || (Po = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ le(), r = /* @__PURE__ */ ze();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: $ }) => $ ? (0, t.str)`"${p}" keyword must be ${$} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function o(p, $ = e.keywordError, h, k) {
      const { it: _ } = p, { gen: l, compositeRule: f, allErrors: m } = _, E = y(p, $, h);
      k ?? (f || m) ? c(l, E) : d(_, (0, t._)`[${E}]`);
    }
    e.reportError = o;
    function i(p, $ = e.keywordError, h) {
      const { it: k } = p, { gen: _, compositeRule: l, allErrors: f } = k, m = y(p, $, h);
      c(_, m), l || f || d(k, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(p, $) {
      p.assign(r.default.errors, $), p.if((0, t._)`${r.default.vErrors} !== null`, () => p.if($, () => p.assign((0, t._)`${r.default.vErrors}.length`, $), () => p.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: p, keyword: $, schemaValue: h, data: k, errsCount: _, it: l }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const f = p.name("err");
      p.forRange("i", _, r.default.errors, (m) => {
        p.const(f, (0, t._)`${r.default.vErrors}[${m}]`), p.if((0, t._)`${f}.instancePath === undefined`, () => p.assign((0, t._)`${f}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), p.assign((0, t._)`${f}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${$}`), l.opts.verbose && (p.assign((0, t._)`${f}.schema`, h), p.assign((0, t._)`${f}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(p, $) {
      const h = p.const("err", $);
      p.if((0, t._)`${r.default.vErrors} === null`, () => p.assign(r.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${r.default.vErrors}.push(${h})`), p.code((0, t._)`${r.default.errors}++`);
    }
    function d(p, $) {
      const { gen: h, validateName: k, schemaEnv: _ } = p;
      _.$async ? h.throw((0, t._)`new ${p.ValidationError}(${$})`) : (h.assign((0, t._)`${k}.errors`, $), h.return(!1));
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
    function y(p, $, h) {
      const { createErrors: k } = p.it;
      return k === !1 ? (0, t._)`{}` : w(p, $, h);
    }
    function w(p, $, h = {}) {
      const { gen: k, it: _ } = p, l = [
        g(_, h),
        C(p, h)
      ];
      return v(p, $, l), k.object(...l);
    }
    function g({ errorPath: p }, { instancePath: $ }) {
      const h = $ ? (0, t.str)`${p}${(0, n.getErrorPath)($, n.Type.Str)}` : p;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, h)];
    }
    function C({ keyword: p, it: { errSchemaPath: $ } }, { schemaPath: h, parentSchema: k }) {
      let _ = k ? $ : (0, t.str)`${$}/${p}`;
      return h && (_ = (0, t.str)`${_}${(0, n.getErrorPath)(h, n.Type.Str)}`), [u.schemaPath, _];
    }
    function v(p, { params: $, message: h }, k) {
      const { keyword: _, data: l, schemaValue: f, it: m } = p, { opts: E, propertyName: A, topSchemaRef: P, schemaPath: F } = m;
      k.push([u.keyword, _], [u.params, typeof $ == "function" ? $(p) : $ || (0, t._)`{}`]), E.messages && k.push([u.message, typeof h == "function" ? h(p) : h]), E.verbose && k.push([u.schema, f], [u.parentSchema, (0, t._)`${P}${F}`], [r.default.data, l]), A && k.push([u.propertyName, A]);
    }
  })(hr)), hr;
}
var Ro;
function lc() {
  if (Ro) return ot;
  Ro = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.boolOrEmptySchema = ot.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Zn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ze(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: u } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(!0));
  }
  ot.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: d, schema: u } = a;
    u === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  ot.boolOrEmptySchema = i;
  function s(a, c) {
    const { gen: d, data: u } = a, y = {
      gen: d,
      keyword: "false schema",
      data: u,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(y, r, void 0, c);
  }
  return ot;
}
var be = {}, it = {}, Mo;
function Gs() {
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
var Ve = {}, No;
function Ws() {
  if (No) return Ve;
  No = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.shouldUseRule = Ve.shouldUseGroup = Ve.schemaHasRulesForType = void 0;
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
var To;
function Kn() {
  if (To) return be;
  To = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ Gs(), t = /* @__PURE__ */ Ws(), n = /* @__PURE__ */ Zn(), r = /* @__PURE__ */ se(), o = /* @__PURE__ */ le();
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
    const { gen: _, data: l, opts: f } = h, m = u(k, f.coerceTypes), E = k.length > 0 && !(m.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(h, k[0]));
    if (E) {
      const A = C(k, l, f.strictNumbers, i.Wrong);
      _.if(A, () => {
        m.length ? y(h, k, m) : p(h);
      });
    }
    return E;
  }
  be.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function u(h, k) {
    return k ? h.filter((_) => d.has(_) || k === "array" && _ === "array") : [];
  }
  function y(h, k, _) {
    const { gen: l, data: f, opts: m } = h, E = l.let("dataType", (0, r._)`typeof ${f}`), A = l.let("coerced", (0, r._)`undefined`);
    m.coerceTypes === "array" && l.if((0, r._)`${E} == 'object' && Array.isArray(${f}) && ${f}.length == 1`, () => l.assign(f, (0, r._)`${f}[0]`).assign(E, (0, r._)`typeof ${f}`).if(C(k, f, m.strictNumbers), () => l.assign(A, f))), l.if((0, r._)`${A} !== undefined`);
    for (const F of _)
      (d.has(F) || F === "array" && m.coerceTypes === "array") && P(F);
    l.else(), p(h), l.endIf(), l.if((0, r._)`${A} !== undefined`, () => {
      l.assign(f, A), w(h, A);
    });
    function P(F) {
      switch (F) {
        case "string":
          l.elseIf((0, r._)`${E} == "number" || ${E} == "boolean"`).assign(A, (0, r._)`"" + ${f}`).elseIf((0, r._)`${f} === null`).assign(A, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${E} == "boolean" || ${f} === null
              || (${E} == "string" && ${f} && ${f} == +${f})`).assign(A, (0, r._)`+${f}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${E} === "boolean" || ${f} === null
              || (${E} === "string" && ${f} && ${f} == +${f} && !(${f} % 1))`).assign(A, (0, r._)`+${f}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${f} === "false" || ${f} === 0 || ${f} === null`).assign(A, !1).elseIf((0, r._)`${f} === "true" || ${f} === 1`).assign(A, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${f} === "" || ${f} === 0 || ${f} === false`), l.assign(A, null);
          return;
        case "array":
          l.elseIf((0, r._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${f} === null`).assign(A, (0, r._)`[${f}]`);
      }
    }
  }
  function w({ gen: h, parentData: k, parentDataProperty: _ }, l) {
    h.if((0, r._)`${k} !== undefined`, () => h.assign((0, r._)`${k}[${_}]`, l));
  }
  function g(h, k, _, l = i.Correct) {
    const f = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let m;
    switch (h) {
      case "null":
        return (0, r._)`${k} ${f} null`;
      case "array":
        m = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        m = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        m = E((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        m = E();
        break;
      default:
        return (0, r._)`typeof ${k} ${f} ${h}`;
    }
    return l === i.Correct ? m : (0, r.not)(m);
    function E(A = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, A, _ ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  be.checkDataType = g;
  function C(h, k, _, l) {
    if (h.length === 1)
      return g(h[0], k, _, l);
    let f;
    const m = (0, o.toHash)(h);
    if (m.array && m.object) {
      const E = (0, r._)`typeof ${k} != "object"`;
      f = m.null ? E : (0, r._)`!${k} || ${E}`, delete m.null, delete m.array, delete m.object;
    } else
      f = r.nil;
    m.number && delete m.integer;
    for (const E in m)
      f = (0, r.and)(f, g(E, k, _, l));
    return f;
  }
  be.checkDataTypes = C;
  const v = {
    message: ({ schema: h }) => `must be ${h}`,
    params: ({ schema: h, schemaValue: k }) => typeof h == "string" ? (0, r._)`{type: ${h}}` : (0, r._)`{type: ${k}}`
  };
  function p(h) {
    const k = $(h);
    (0, n.reportError)(k, v);
  }
  be.reportTypeError = p;
  function $(h) {
    const { gen: k, data: _, schema: l } = h, f = (0, o.schemaRefOrVal)(h, l, "type");
    return {
      gen: k,
      keyword: "type",
      data: _,
      schema: l.type,
      schemaCode: f,
      schemaValue: f,
      parentSchema: l,
      params: {},
      it: h
    };
  }
  return be;
}
var xt = {}, Oo;
function dc() {
  if (Oo) return xt;
  Oo = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.assignDefaults = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, d) => r(o, d, c.default));
  }
  xt.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: c, data: d, opts: u } = o;
    if (s === void 0)
      return;
    const y = (0, e._)`${d}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${y}`);
      return;
    }
    let w = (0, e._)`${y} === undefined`;
    u.useDefaults === "empty" && (w = (0, e._)`${w} || ${y} === null || ${y} === ""`), a.if(w, (0, e._)`${y} = ${(0, e.stringify)(s)}`);
  }
  return xt;
}
var Te = {}, pe = {}, Fo;
function Ie() {
  if (Fo) return pe;
  Fo = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.validateUnion = pe.validateArray = pe.usePattern = pe.callValidateCode = pe.schemaProperties = pe.allSchemaProperties = pe.noPropertyInData = pe.propertyInData = pe.isOwnProperty = pe.hasPropFunc = pe.reportMissingProp = pe.checkMissingProp = pe.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ le();
  function o(h, k) {
    const { gen: _, data: l, it: f } = h;
    _.if(u(_, l, k, f.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${k}` }, !0), h.error();
    });
  }
  pe.checkReportMissingProp = o;
  function i({ gen: h, data: k, it: { opts: _ } }, l, f) {
    return (0, e.or)(...l.map((m) => (0, e.and)(u(h, k, m, _.ownProperties), (0, e._)`${f} = ${m}`)));
  }
  pe.checkMissingProp = i;
  function s(h, k) {
    h.setParams({ missingProperty: k }, !0), h.error();
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
  function c(h, k, _) {
    return (0, e._)`${a(h)}.call(${k}, ${_})`;
  }
  pe.isOwnProperty = c;
  function d(h, k, _, l) {
    const f = (0, e._)`${k}${(0, e.getProperty)(_)} !== undefined`;
    return l ? (0, e._)`${f} && ${c(h, k, _)}` : f;
  }
  pe.propertyInData = d;
  function u(h, k, _, l) {
    const f = (0, e._)`${k}${(0, e.getProperty)(_)} === undefined`;
    return l ? (0, e.or)(f, (0, e.not)(c(h, k, _))) : f;
  }
  pe.noPropertyInData = u;
  function y(h) {
    return h ? Object.keys(h).filter((k) => k !== "__proto__") : [];
  }
  pe.allSchemaProperties = y;
  function w(h, k) {
    return y(k).filter((_) => !(0, t.alwaysValidSchema)(h, k[_]));
  }
  pe.schemaProperties = w;
  function g({ schemaCode: h, data: k, it: { gen: _, topSchemaRef: l, schemaPath: f, errorPath: m }, it: E }, A, P, F) {
    const R = F ? (0, e._)`${h}, ${k}, ${l}${f}` : k, V = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, m)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && V.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const q = (0, e._)`${R}, ${_.object(...V)}`;
    return P !== e.nil ? (0, e._)`${A}.call(${P}, ${q})` : (0, e._)`${A}(${q})`;
  }
  pe.callValidateCode = g;
  const C = (0, e._)`new RegExp`;
  function v({ gen: h, it: { opts: k } }, _) {
    const l = k.unicodeRegExp ? "u" : "", { regExp: f } = k.code, m = f(_, l);
    return h.scopeValue("pattern", {
      key: m.toString(),
      ref: m,
      code: (0, e._)`${f.code === "new RegExp" ? C : (0, r.useFunc)(h, f)}(${_}, ${l})`
    });
  }
  pe.usePattern = v;
  function p(h) {
    const { gen: k, data: _, keyword: l, it: f } = h, m = k.name("valid");
    if (f.allErrors) {
      const A = k.let("valid", !0);
      return E(() => k.assign(A, !1)), A;
    }
    return k.var(m, !0), E(() => k.break()), m;
    function E(A) {
      const P = k.const("len", (0, e._)`${_}.length`);
      k.forRange("i", 0, P, (F) => {
        h.subschema({
          keyword: l,
          dataProp: F,
          dataPropType: t.Type.Num
        }, m), k.if((0, e.not)(m), A);
      });
    }
  }
  pe.validateArray = p;
  function $(h) {
    const { gen: k, schema: _, keyword: l, it: f } = h;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((P) => (0, t.alwaysValidSchema)(f, P)) && !f.opts.unevaluated)
      return;
    const E = k.let("valid", !1), A = k.name("_valid");
    k.block(() => _.forEach((P, F) => {
      const R = h.subschema({
        keyword: l,
        schemaProp: F,
        compositeRule: !0
      }, A);
      k.assign(E, (0, e._)`${E} || ${A}`), h.mergeValidEvaluated(R, A) || k.if((0, e.not)(E));
    })), h.result(E, () => h.reset(), () => h.error(!0));
  }
  return pe.validateUnion = $, pe;
}
var zo;
function uc() {
  if (zo) return Te;
  zo = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateKeywordUsage = Te.validSchemaType = Te.funcKeywordCode = Te.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ Zn();
  function o(w, g) {
    const { gen: C, keyword: v, schema: p, parentSchema: $, it: h } = w, k = g.macro.call(h.self, p, $, h), _ = d(C, v, k);
    h.opts.validateSchema !== !1 && h.self.validateSchema(k, !0);
    const l = C.name("valid");
    w.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${h.errSchemaPath}/${v}`,
      topSchemaRef: _,
      compositeRule: !0
    }, l), w.pass(l, () => w.error(!0));
  }
  Te.macroKeywordCode = o;
  function i(w, g) {
    var C;
    const { gen: v, keyword: p, schema: $, parentSchema: h, $data: k, it: _ } = w;
    c(_, g);
    const l = !k && g.compile ? g.compile.call(_.self, $, h, _) : g.validate, f = d(v, p, l), m = v.let("valid");
    w.block$data(m, E), w.ok((C = g.valid) !== null && C !== void 0 ? C : m);
    function E() {
      if (g.errors === !1)
        F(), g.modifying && s(w), R(() => w.error());
      else {
        const V = g.async ? A() : P();
        g.modifying && s(w), R(() => a(w, V));
      }
    }
    function A() {
      const V = v.let("ruleErrs", null);
      return v.try(() => F((0, e._)`await `), (q) => v.assign(m, !1).if((0, e._)`${q} instanceof ${_.ValidationError}`, () => v.assign(V, (0, e._)`${q}.errors`), () => v.throw(q))), V;
    }
    function P() {
      const V = (0, e._)`${f}.errors`;
      return v.assign(V, null), F(e.nil), V;
    }
    function F(V = g.async ? (0, e._)`await ` : e.nil) {
      const q = _.opts.passContext ? t.default.this : t.default.self, H = !("compile" in g && !k || g.schema === !1);
      v.assign(m, (0, e._)`${V}${(0, n.callValidateCode)(w, f, q, H)}`, g.modifying);
    }
    function R(V) {
      var q;
      v.if((0, e.not)((q = g.valid) !== null && q !== void 0 ? q : m), V);
    }
  }
  Te.funcKeywordCode = i;
  function s(w) {
    const { gen: g, data: C, it: v } = w;
    g.if(v.parentData, () => g.assign(C, (0, e._)`${v.parentData}[${v.parentDataProperty}]`));
  }
  function a(w, g) {
    const { gen: C } = w;
    C.if((0, e._)`Array.isArray(${g})`, () => {
      C.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(w);
    }, () => w.error());
  }
  function c({ schemaEnv: w }, g) {
    if (g.async && !w.$async)
      throw new Error("async keyword in sync schema");
  }
  function d(w, g, C) {
    if (C === void 0)
      throw new Error(`keyword "${g}" failed to compile`);
    return w.scopeValue("keyword", typeof C == "function" ? { ref: C } : { ref: C, code: (0, e.stringify)(C) });
  }
  function u(w, g, C = !1) {
    return !g.length || g.some((v) => v === "array" ? Array.isArray(w) : v === "object" ? w && typeof w == "object" && !Array.isArray(w) : typeof w == v || C && typeof w > "u");
  }
  Te.validSchemaType = u;
  function y({ schema: w, opts: g, self: C, errSchemaPath: v }, p, $) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes($) : p.keyword !== $)
      throw new Error("ajv implementation error");
    const h = p.dependencies;
    if (h?.some((k) => !Object.prototype.hasOwnProperty.call(w, k)))
      throw new Error(`parent schema must have dependencies of ${$}: ${h.join(",")}`);
    if (p.validateSchema && !p.validateSchema(w[$])) {
      const _ = `keyword "${$}" value is invalid at path "${v}": ` + C.errorsText(p.validateSchema.errors);
      if (g.validateSchema === "log")
        C.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return Te.validateKeywordUsage = y, Te;
}
var Be = {}, Io;
function fc() {
  if (Io) return Be;
  Io = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: u, topSchemaRef: y }) {
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
      if (d === void 0 || u === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: y,
        errSchemaPath: u
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Be.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: d, dataTypes: u, propertyName: y }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: w } = s;
    if (a !== void 0) {
      const { errorPath: C, dataPathArr: v, opts: p } = s, $ = w.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      g($), i.errorPath = (0, e.str)`${C}${(0, t.getErrorPath)(a, c, p.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...v, i.parentDataProperty];
    }
    if (d !== void 0) {
      const C = d instanceof e.Name ? d : w.let("data", d, !0);
      g(C), y !== void 0 && (i.propertyName = y);
    }
    u && (i.dataTypes = u);
    function g(C) {
      i.data = C, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, C];
    }
  }
  Be.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: u }) {
    c !== void 0 && (i.compositeRule = c), d !== void 0 && (i.createErrors = d), u !== void 0 && (i.allErrors = u), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return Be.extendSubschemaMode = o, Be;
}
var ve = {}, $r, jo;
function Js() {
  return jo || (jo = 1, $r = function e(t, n) {
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
var br = { exports: {} }, Do;
function pc() {
  if (Do) return br.exports;
  Do = 1;
  var e = br.exports = function(r, o, i) {
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
  function t(r, o, i, s, a, c, d, u, y, w) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, d, u, y, w);
      for (var g in s) {
        var C = s[g];
        if (Array.isArray(C)) {
          if (g in e.arrayKeywords)
            for (var v = 0; v < C.length; v++)
              t(r, o, i, C[v], a + "/" + g + "/" + v, c, a, g, s, v);
        } else if (g in e.propsKeywords) {
          if (C && typeof C == "object")
            for (var p in C)
              t(r, o, i, C[p], a + "/" + g + "/" + n(p), c, a, g, s, p);
        } else (g in e.keywords || r.allKeys && !(g in e.skipKeywords)) && t(r, o, i, C, a + "/" + g, c, a, g, s);
      }
      i(s, a, c, d, u, y, w);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return br.exports;
}
var Lo;
function Qn() {
  if (Lo) return ve;
  Lo = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.getSchemaRefs = ve.resolveUrl = ve.normalizeId = ve._getFullPath = ve.getFullPath = ve.inlineRef = void 0;
  const e = /* @__PURE__ */ le(), t = Js(), n = pc(), r = /* @__PURE__ */ new Set([
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
  function o(v, p = !0) {
    return typeof v == "boolean" ? !0 : p === !0 ? !s(v) : p ? a(v) <= p : !1;
  }
  ve.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(v) {
    for (const p in v) {
      if (i.has(p))
        return !0;
      const $ = v[p];
      if (Array.isArray($) && $.some(s) || typeof $ == "object" && s($))
        return !0;
    }
    return !1;
  }
  function a(v) {
    let p = 0;
    for (const $ in v) {
      if ($ === "$ref")
        return 1 / 0;
      if (p++, !r.has($) && (typeof v[$] == "object" && (0, e.eachItem)(v[$], (h) => p += a(h)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function c(v, p = "", $) {
    $ !== !1 && (p = y(p));
    const h = v.parse(p);
    return d(v, h);
  }
  ve.getFullPath = c;
  function d(v, p) {
    return v.serialize(p).split("#")[0] + "#";
  }
  ve._getFullPath = d;
  const u = /#\/?$/;
  function y(v) {
    return v ? v.replace(u, "") : "";
  }
  ve.normalizeId = y;
  function w(v, p, $) {
    return $ = y($), v.resolve(p, $);
  }
  ve.resolveUrl = w;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function C(v, p) {
    if (typeof v == "boolean")
      return {};
    const { schemaId: $, uriResolver: h } = this.opts, k = y(v[$] || p), _ = { "": k }, l = c(h, k, !1), f = {}, m = /* @__PURE__ */ new Set();
    return n(v, { allKeys: !0 }, (P, F, R, V) => {
      if (V === void 0)
        return;
      const q = l + F;
      let H = _[V];
      typeof P[$] == "string" && (H = X.call(this, P[$])), oe.call(this, P.$anchor), oe.call(this, P.$dynamicAnchor), _[F] = H;
      function X(Z) {
        const ie = this.opts.uriResolver.resolve;
        if (Z = y(H ? ie(H, Z) : Z), m.has(Z))
          throw A(Z);
        m.add(Z);
        let J = this.refs[Z];
        return typeof J == "string" && (J = this.refs[J]), typeof J == "object" ? E(P, J.schema, Z) : Z !== y(q) && (Z[0] === "#" ? (E(P, f[Z], Z), f[Z] = P) : this.refs[Z] = q), Z;
      }
      function oe(Z) {
        if (typeof Z == "string") {
          if (!g.test(Z))
            throw new Error(`invalid anchor "${Z}"`);
          X.call(this, `#${Z}`);
        }
      }
    }), f;
    function E(P, F, R) {
      if (F !== void 0 && !t(P, F))
        throw A(R);
    }
    function A(P) {
      return new Error(`reference "${P}" resolves to more than one schema`);
    }
  }
  return ve.getSchemaRefs = C, ve;
}
var qo;
function er() {
  if (qo) return qe;
  qo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ lc(), t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ Ws(), r = /* @__PURE__ */ Kn(), o = /* @__PURE__ */ dc(), i = /* @__PURE__ */ uc(), s = /* @__PURE__ */ fc(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ ze(), d = /* @__PURE__ */ Qn(), u = /* @__PURE__ */ le(), y = /* @__PURE__ */ Zn();
  function w(x) {
    if (l(x) && (m(x), _(x))) {
      p(x);
      return;
    }
    g(x, () => (0, e.topBoolOrEmptySchema)(x));
  }
  qe.validateFunctionCode = w;
  function g({ gen: x, validateName: T, schema: B, schemaEnv: Y, opts: Q }, re) {
    Q.code.es5 ? x.func(T, (0, a._)`${c.default.data}, ${c.default.valCxt}`, Y.$async, () => {
      x.code((0, a._)`"use strict"; ${h(B, Q)}`), v(x, Q), x.code(re);
    }) : x.func(T, (0, a._)`${c.default.data}, ${C(Q)}`, Y.$async, () => x.code(h(B, Q)).code(re));
  }
  function C(x) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${x.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function v(x, T) {
    x.if(c.default.valCxt, () => {
      x.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), x.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), x.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), x.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), T.dynamicRef && x.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      x.var(c.default.instancePath, (0, a._)`""`), x.var(c.default.parentData, (0, a._)`undefined`), x.var(c.default.parentDataProperty, (0, a._)`undefined`), x.var(c.default.rootData, c.default.data), T.dynamicRef && x.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function p(x) {
    const { schema: T, opts: B, gen: Y } = x;
    g(x, () => {
      B.$comment && T.$comment && V(x), P(x), Y.let(c.default.vErrors, null), Y.let(c.default.errors, 0), B.unevaluated && $(x), E(x), q(x);
    });
  }
  function $(x) {
    const { gen: T, validateName: B } = x;
    x.evaluated = T.const("evaluated", (0, a._)`${B}.evaluated`), T.if((0, a._)`${x.evaluated}.dynamicProps`, () => T.assign((0, a._)`${x.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${x.evaluated}.dynamicItems`, () => T.assign((0, a._)`${x.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(x, T) {
    const B = typeof x == "object" && x[T.schemaId];
    return B && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function k(x, T) {
    if (l(x) && (m(x), _(x))) {
      f(x, T);
      return;
    }
    (0, e.boolOrEmptySchema)(x, T);
  }
  function _({ schema: x, self: T }) {
    if (typeof x == "boolean")
      return !x;
    for (const B in x)
      if (T.RULES.all[B])
        return !0;
    return !1;
  }
  function l(x) {
    return typeof x.schema != "boolean";
  }
  function f(x, T) {
    const { schema: B, gen: Y, opts: Q } = x;
    Q.$comment && B.$comment && V(x), F(x), R(x);
    const re = Y.const("_errs", c.default.errors);
    E(x, re), Y.var(T, (0, a._)`${re} === ${c.default.errors}`);
  }
  function m(x) {
    (0, u.checkUnknownRules)(x), A(x);
  }
  function E(x, T) {
    if (x.opts.jtd)
      return X(x, [], !1, T);
    const B = (0, t.getSchemaTypes)(x.schema), Y = (0, t.coerceAndCheckDataType)(x, B);
    X(x, B, !Y, T);
  }
  function A(x) {
    const { schema: T, errSchemaPath: B, opts: Y, self: Q } = x;
    T.$ref && Y.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(T, Q.RULES) && Q.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function P(x) {
    const { schema: T, opts: B } = x;
    T.default !== void 0 && B.useDefaults && B.strictSchema && (0, u.checkStrictMode)(x, "default is ignored in the schema root");
  }
  function F(x) {
    const T = x.schema[x.opts.schemaId];
    T && (x.baseId = (0, d.resolveUrl)(x.opts.uriResolver, x.baseId, T));
  }
  function R(x) {
    if (x.schema.$async && !x.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function V({ gen: x, schemaEnv: T, schema: B, errSchemaPath: Y, opts: Q }) {
    const re = B.$comment;
    if (Q.$comment === !0)
      x.code((0, a._)`${c.default.self}.logger.log(${re})`);
    else if (typeof Q.$comment == "function") {
      const fe = (0, a.str)`${Y}/$comment`, ne = x.scopeValue("root", { ref: T.root });
      x.code((0, a._)`${c.default.self}.opts.$comment(${re}, ${fe}, ${ne}.schema)`);
    }
  }
  function q(x) {
    const { gen: T, schemaEnv: B, validateName: Y, ValidationError: Q, opts: re } = x;
    B.$async ? T.if((0, a._)`${c.default.errors} === 0`, () => T.return(c.default.data), () => T.throw((0, a._)`new ${Q}(${c.default.vErrors})`)) : (T.assign((0, a._)`${Y}.errors`, c.default.vErrors), re.unevaluated && H(x), T.return((0, a._)`${c.default.errors} === 0`));
  }
  function H({ gen: x, evaluated: T, props: B, items: Y }) {
    B instanceof a.Name && x.assign((0, a._)`${T}.props`, B), Y instanceof a.Name && x.assign((0, a._)`${T}.items`, Y);
  }
  function X(x, T, B, Y) {
    const { gen: Q, schema: re, data: fe, allErrors: ne, opts: de, self: ue } = x, { RULES: me } = ue;
    if (re.$ref && (de.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(re, me))) {
      Q.block(() => z(x, "$ref", me.all.$ref.definition));
      return;
    }
    de.jtd || Z(x, T), Q.block(() => {
      for (const Ee of me.rules)
        ke(Ee);
      ke(me.post);
    });
    function ke(Ee) {
      (0, n.shouldUseGroup)(re, Ee) && (Ee.type ? (Q.if((0, r.checkDataType)(Ee.type, fe, de.strictNumbers)), oe(x, Ee), T.length === 1 && T[0] === Ee.type && B && (Q.else(), (0, r.reportTypeError)(x)), Q.endIf()) : oe(x, Ee), ne || Q.if((0, a._)`${c.default.errors} === ${Y || 0}`));
    }
  }
  function oe(x, T) {
    const { gen: B, schema: Y, opts: { useDefaults: Q } } = x;
    Q && (0, o.assignDefaults)(x, T.type), B.block(() => {
      for (const re of T.rules)
        (0, n.shouldUseRule)(Y, re) && z(x, re.keyword, re.definition, T.type);
    });
  }
  function Z(x, T) {
    x.schemaEnv.meta || !x.opts.strictTypes || (ie(x, T), x.opts.allowUnionTypes || J(x, T), D(x, x.dataTypes));
  }
  function ie(x, T) {
    if (T.length) {
      if (!x.dataTypes.length) {
        x.dataTypes = T;
        return;
      }
      T.forEach((B) => {
        O(x.dataTypes, B) || S(x, `type "${B}" not allowed by context "${x.dataTypes.join(",")}"`);
      }), b(x, T);
    }
  }
  function J(x, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && S(x, "use allowUnionTypes to allow union type keyword");
  }
  function D(x, T) {
    const B = x.self.RULES.all;
    for (const Y in B) {
      const Q = B[Y];
      if (typeof Q == "object" && (0, n.shouldUseRule)(x.schema, Q)) {
        const { type: re } = Q.definition;
        re.length && !re.some((fe) => j(T, fe)) && S(x, `missing type "${re.join(",")}" for keyword "${Y}"`);
      }
    }
  }
  function j(x, T) {
    return x.includes(T) || T === "number" && x.includes("integer");
  }
  function O(x, T) {
    return x.includes(T) || T === "integer" && x.includes("number");
  }
  function b(x, T) {
    const B = [];
    for (const Y of x.dataTypes)
      O(T, Y) ? B.push(Y) : T.includes("integer") && Y === "number" && B.push("integer");
    x.dataTypes = B;
  }
  function S(x, T) {
    const B = x.schemaEnv.baseId + x.errSchemaPath;
    T += ` at "${B}" (strictTypes)`, (0, u.checkStrictMode)(x, T, x.opts.strictTypes);
  }
  class I {
    constructor(T, B, Y) {
      if ((0, i.validateKeywordUsage)(T, B, Y), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = Y, this.data = T.data, this.schema = T.schema[Y], this.$data = B.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(T, this.schema, Y, this.$data), this.schemaType = B.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = B, this.$data)
        this.schemaCode = T.gen.const("vSchema", W(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${Y} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = T.gen.const("_errs", c.default.errors));
    }
    result(T, B, Y) {
      this.failResult((0, a.not)(T), B, Y);
    }
    failResult(T, B, Y) {
      this.gen.if(T), Y ? Y() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
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
    error(T, B, Y) {
      if (B) {
        this.setParams(B), this._error(T, Y), this.setParams({});
        return;
      }
      this._error(T, Y);
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
    block$data(T, B, Y = a.nil) {
      this.gen.block(() => {
        this.check$data(T, Y), B();
      });
    }
    check$data(T = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: Y, schemaCode: Q, schemaType: re, def: fe } = this;
      Y.if((0, a.or)((0, a._)`${Q} === undefined`, B)), T !== a.nil && Y.assign(T, !0), (re.length || fe.validateSchema) && (Y.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && Y.assign(T, !1)), Y.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: B, schemaType: Y, def: Q, it: re } = this;
      return (0, a.or)(fe(), ne());
      function fe() {
        if (Y.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const de = Array.isArray(Y) ? Y : [Y];
          return (0, a._)`${(0, r.checkDataTypes)(de, B, re.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ne() {
        if (Q.validateSchema) {
          const de = T.scopeValue("validate$data", { ref: Q.validateSchema });
          return (0, a._)`!${de}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(T, B) {
      const Y = (0, s.getSubschema)(this.it, T);
      (0, s.extendSubschemaData)(Y, this.it, T), (0, s.extendSubschemaMode)(Y, T);
      const Q = { ...this.it, ...Y, items: void 0, props: void 0 };
      return k(Q, B), Q;
    }
    mergeEvaluated(T, B) {
      const { it: Y, gen: Q } = this;
      Y.opts.unevaluated && (Y.props !== !0 && T.props !== void 0 && (Y.props = u.mergeEvaluated.props(Q, T.props, Y.props, B)), Y.items !== !0 && T.items !== void 0 && (Y.items = u.mergeEvaluated.items(Q, T.items, Y.items, B)));
    }
    mergeValidEvaluated(T, B) {
      const { it: Y, gen: Q } = this;
      if (Y.opts.unevaluated && (Y.props !== !0 || Y.items !== !0))
        return Q.if(B, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  qe.KeywordCxt = I;
  function z(x, T, B, Y) {
    const Q = new I(x, B, T);
    "code" in B ? B.code(Q, Y) : Q.$data && B.validate ? (0, i.funcKeywordCode)(Q, B) : "macro" in B ? (0, i.macroKeywordCode)(Q, B) : (B.compile || B.validate) && (0, i.funcKeywordCode)(Q, B);
  }
  const L = /^\/(?:[^~]|~0|~1)*$/, G = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function W(x, { dataLevel: T, dataNames: B, dataPathArr: Y }) {
    let Q, re;
    if (x === "")
      return c.default.rootData;
    if (x[0] === "/") {
      if (!L.test(x))
        throw new Error(`Invalid JSON-pointer: ${x}`);
      Q = x, re = c.default.rootData;
    } else {
      const ue = G.exec(x);
      if (!ue)
        throw new Error(`Invalid JSON-pointer: ${x}`);
      const me = +ue[1];
      if (Q = ue[2], Q === "#") {
        if (me >= T)
          throw new Error(de("property/index", me));
        return Y[T - me];
      }
      if (me > T)
        throw new Error(de("data", me));
      if (re = B[T - me], !Q)
        return re;
    }
    let fe = re;
    const ne = Q.split("/");
    for (const ue of ne)
      ue && (re = (0, a._)`${re}${(0, a.getProperty)((0, u.unescapeJsonPointer)(ue))}`, fe = (0, a._)`${fe} && ${re}`);
    return fe;
    function de(ue, me) {
      return `Cannot access ${ue} ${me} levels up, current level is ${T}`;
    }
  }
  return qe.getData = W, qe;
}
var Bt = {}, Vo;
function Yr() {
  if (Vo) return Bt;
  Vo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Bt.default = e, Bt;
}
var Ut = {}, Bo;
function tr() {
  if (Bo) return Ut;
  Bo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qn();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Ut.default = t, Ut;
}
var _e = {}, Uo;
function nr() {
  if (Uo) return _e;
  Uo = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Yr(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ Qn(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ er();
  class s {
    constructor($) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof $.schema == "object" && (k = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (h = $.baseId) !== null && h !== void 0 ? h : (0, r.normalizeId)(k?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = s;
  function a(p) {
    const $ = u.call(this, p);
    if ($)
      return $;
    const h = (0, r.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: k, lines: _ } = this.opts.code, { ownProperties: l } = this.opts, f = new e.CodeGen(this.scope, { es5: k, lines: _, ownProperties: l });
    let m;
    p.$async && (m = f.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = f.scopeName("validate");
    p.validateName = E;
    const A = {
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
      topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? { ref: p.schema, code: (0, e.stringify)(p.schema) } : { ref: p.schema }),
      validateName: E,
      ValidationError: m,
      schema: p.schema,
      schemaEnv: p,
      rootId: h,
      baseId: p.baseId || h,
      schemaPath: e.nil,
      errSchemaPath: p.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let P;
    try {
      this._compilations.add(p), (0, i.validateFunctionCode)(A), f.optimize(this.opts.code.optimize);
      const F = f.toString();
      P = `${f.scopeRefs(n.default.scope)}return ${F}`, this.opts.code.process && (P = this.opts.code.process(P, p));
      const V = new Function(`${n.default.self}`, `${n.default.scope}`, P)(this, this.scope.get());
      if (this.scope.value(E, { ref: V }), V.errors = null, V.schema = p.schema, V.schemaEnv = p, p.$async && (V.$async = !0), this.opts.code.source === !0 && (V.source = { validateName: E, validateCode: F, scopeValues: f._values }), this.opts.unevaluated) {
        const { props: q, items: H } = A;
        V.evaluated = {
          props: q instanceof e.Name ? void 0 : q,
          items: H instanceof e.Name ? void 0 : H,
          dynamicProps: q instanceof e.Name,
          dynamicItems: H instanceof e.Name
        }, V.source && (V.source.evaluated = (0, e.stringify)(V.evaluated));
      }
      return p.validate = V, p;
    } catch (F) {
      throw delete p.validate, delete p.validateName, P && this.logger.error("Error compiling schema, function code:", P), F;
    } finally {
      this._compilations.delete(p);
    }
  }
  _e.compileSchema = a;
  function c(p, $, h) {
    var k;
    h = (0, r.resolveUrl)(this.opts.uriResolver, $, h);
    const _ = p.refs[h];
    if (_)
      return _;
    let l = w.call(this, p, h);
    if (l === void 0) {
      const f = (k = p.localRefs) === null || k === void 0 ? void 0 : k[h], { schemaId: m } = this.opts;
      f && (l = new s({ schema: f, schemaId: m, root: p, baseId: $ }));
    }
    if (l !== void 0)
      return p.refs[h] = d.call(this, l);
  }
  _e.resolveRef = c;
  function d(p) {
    return (0, r.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : a.call(this, p);
  }
  function u(p) {
    for (const $ of this._compilations)
      if (y($, p))
        return $;
  }
  _e.getCompilingSchema = u;
  function y(p, $) {
    return p.schema === $.schema && p.root === $.root && p.baseId === $.baseId;
  }
  function w(p, $) {
    let h;
    for (; typeof (h = this.refs[$]) == "string"; )
      $ = h;
    return h || this.schemas[$] || g.call(this, p, $);
  }
  function g(p, $) {
    const h = this.opts.uriResolver.parse($), k = (0, r._getFullPath)(this.opts.uriResolver, h);
    let _ = (0, r.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && k === _)
      return v.call(this, h, p);
    const l = (0, r.normalizeId)(k), f = this.refs[l] || this.schemas[l];
    if (typeof f == "string") {
      const m = g.call(this, p, f);
      return typeof m?.schema != "object" ? void 0 : v.call(this, h, m);
    }
    if (typeof f?.schema == "object") {
      if (f.validate || a.call(this, f), l === (0, r.normalizeId)($)) {
        const { schema: m } = f, { schemaId: E } = this.opts, A = m[E];
        return A && (_ = (0, r.resolveUrl)(this.opts.uriResolver, _, A)), new s({ schema: m, schemaId: E, root: p, baseId: _ });
      }
      return v.call(this, h, f);
    }
  }
  _e.resolveSchema = g;
  const C = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function v(p, { baseId: $, schema: h, root: k }) {
    var _;
    if (((_ = p.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const m of p.fragment.slice(1).split("/")) {
      if (typeof h == "boolean")
        return;
      const E = h[(0, o.unescapeFragment)(m)];
      if (E === void 0)
        return;
      h = E;
      const A = typeof h == "object" && h[this.opts.schemaId];
      !C.has(m) && A && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, A));
    }
    let l;
    if (typeof h != "boolean" && h.$ref && !(0, o.schemaHasRulesButRef)(h, this.RULES)) {
      const m = (0, r.resolveUrl)(this.opts.uriResolver, $, h.$ref);
      l = g.call(this, k, m);
    }
    const { schemaId: f } = this.opts;
    if (l = l || new s({ schema: h, schemaId: f, root: k, baseId: $ }), l.schema !== l.root.schema)
      return l;
  }
  return _e;
}
const hc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", mc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", gc = "object", yc = ["$data"], $c = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, bc = !1, vc = {
  $id: hc,
  description: mc,
  type: gc,
  required: yc,
  properties: $c,
  additionalProperties: bc
};
var Ht = {}, At = { exports: {} }, vr, Ho;
function Ys() {
  if (Ho) return vr;
  Ho = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function i(l) {
    let f = "", m = 0, E = 0;
    for (E = 0; E < l.length; E++)
      if (m = l[E].charCodeAt(0), m !== 48) {
        if (!(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
          return "";
        f += l[E];
        break;
      }
    for (E += 1; E < l.length; E++) {
      if (m = l[E].charCodeAt(0), !(m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102))
        return "";
      f += l[E];
    }
    return f;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, f, m) {
    if (l.length) {
      const E = i(l);
      if (E !== "")
        f.push(E);
      else
        return m.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function d(l) {
    let f = 0;
    const m = { error: !1, address: "", zone: "" }, E = [], A = [];
    let P = !1, F = !1, R = c;
    for (let V = 0; V < l.length; V++) {
      const q = l[V];
      if (!(q === "[" || q === "]"))
        if (q === ":") {
          if (P === !0 && (F = !0), !R(A, E, m))
            break;
          if (++f > 7) {
            m.error = !0;
            break;
          }
          V > 0 && l[V - 1] === ":" && (P = !0), E.push(":");
          continue;
        } else if (q === "%") {
          if (!R(A, E, m))
            break;
          R = a;
        } else {
          A.push(q);
          continue;
        }
    }
    return A.length && (R === a ? m.zone = A.join("") : F ? E.push(A.join("")) : E.push(i(A))), m.address = E.join(""), m;
  }
  function u(l) {
    if (y(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const f = d(l);
    if (f.error)
      return { host: l, isIPV6: !1 };
    {
      let m = f.address, E = f.address;
      return f.zone && (m += "%" + f.zone, E += "%25" + f.zone), { host: m, isIPV6: !0, escapedHost: E };
    }
  }
  function y(l, f) {
    let m = 0;
    for (let E = 0; E < l.length; E++)
      l[E] === f && m++;
    return m;
  }
  function w(l) {
    let f = l;
    const m = [];
    let E = -1, A = 0;
    for (; A = f.length; ) {
      if (A === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          m.push("/");
          break;
        } else {
          m.push(f);
          break;
        }
      } else if (A === 2) {
        if (f[0] === ".") {
          if (f[1] === ".")
            break;
          if (f[1] === "/") {
            f = f.slice(2);
            continue;
          }
        } else if (f[0] === "/" && (f[1] === "." || f[1] === "/")) {
          m.push("/");
          break;
        }
      } else if (A === 3 && f === "/..") {
        m.length !== 0 && m.pop(), m.push("/");
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
          f = f.slice(3), m.length !== 0 && m.pop();
          continue;
        }
      }
      if ((E = f.indexOf("/", 1)) === -1) {
        m.push(f);
        break;
      } else
        m.push(f.slice(0, E)), f = f.slice(E);
    }
    return m.join("");
  }
  const g = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, C = /[@/?#:]/g, v = /[@/?#]/g;
  function p(l, f) {
    const m = f ? v : C;
    return m.lastIndex = 0, l.replace(m, (E) => g[E]);
  }
  function $(l, f = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let m = "";
    for (let E = 0; E < l.length; E++) {
      if (l[E] === "%" && E + 2 < l.length) {
        const A = l.slice(E + 1, E + 3);
        if (n(A)) {
          const P = A.toUpperCase(), F = String.fromCharCode(parseInt(P, 16));
          f && r(F) ? m += F : m += "%" + P, E += 2;
          continue;
        }
      }
      m += l[E];
    }
    return m;
  }
  function h(l) {
    let f = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const E = l.slice(m + 1, m + 3);
        if (n(E)) {
          const A = E.toUpperCase(), P = String.fromCharCode(parseInt(A, 16));
          P !== "." && r(P) ? f += P : f += "%" + A, m += 2;
          continue;
        }
      }
      o(l[m]) ? f += l[m] : f += escape(l[m]);
    }
    return f;
  }
  function k(l) {
    let f = "";
    for (let m = 0; m < l.length; m++) {
      if (l[m] === "%" && m + 2 < l.length) {
        const E = l.slice(m + 1, m + 3);
        if (n(E)) {
          f += "%" + E.toUpperCase(), m += 2;
          continue;
        }
      }
      f += escape(l[m]);
    }
    return f;
  }
  function _(l) {
    const f = [];
    if (l.userinfo !== void 0 && (f.push(l.userinfo), f.push("@")), l.host !== void 0) {
      let m = unescape(l.host);
      if (!t(m)) {
        const E = u(m);
        E.isIPV6 === !0 ? m = `[${E.escapedHost}]` : m = p(m, !1);
      }
      f.push(m);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (f.push(":"), f.push(String(l.port))), f.length ? f.join("") : void 0;
  }
  return vr = {
    nonSimpleDomain: s,
    recomposeAuthority: _,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: $,
    normalizePathEncoding: h,
    escapePreservingEscapes: k,
    removeDotSegments: w,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: u,
    stringArrayToHexStripped: i
  }, vr;
}
var wr, Ko;
function wc() {
  if (Ko) return wr;
  Ko = 1;
  const { isUUID: e } = Ys(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const [f, m] = l.resourceName.split("?");
      l.path = f && f !== "/" ? f : void 0, l.query = m, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function d(l, f) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const m = l.path.match(t);
    if (m) {
      const E = f.scheme || l.scheme || "urn";
      l.nid = m[1].toLowerCase(), l.nss = m[2];
      const A = `${E}:${f.nid || l.nid}`, P = _(A);
      l.path = void 0, P && (l = P.parse(l, f));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function u(l, f) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const m = f.scheme || l.scheme || "urn", E = l.nid.toLowerCase(), A = `${m}:${f.nid || E}`, P = _(A);
    P && (l = P.serialize(l, f));
    const F = l, R = l.nss;
    return F.path = `${E || f.nid}:${R}`, f.skipEscape = !0, F;
  }
  function y(l, f) {
    const m = l;
    return m.uuid = m.nss, m.nss = void 0, !f.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
  }
  function w(l) {
    const f = l;
    return f.nss = (l.uuid || "").toLowerCase(), f;
  }
  const g = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: s
    }
  ), C = (
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
  ), p = (
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
      https: C,
      ws: v,
      wss: p,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: d,
          serialize: u,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: y,
          serialize: w,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(k, null);
  function _(l) {
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
    getSchemeHandler: _
  }, wr;
}
var Go;
function _c() {
  if (Go) return At.exports;
  Go = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: i, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = Ys(), { SCHEMES: d, getSchemeHandler: u } = wc();
  function y(A, P) {
    return typeof A == "string" ? A = /** @type {T} */
    l(A, P) : typeof A == "object" && (A = /** @type {T} */
    _(v(A, P), P)), A;
  }
  function w(A, P, F) {
    const R = F ? Object.assign({ scheme: "null" }, F) : { scheme: "null" }, V = g(_(A, R), _(P, R), R, !0);
    return R.skipEscape = !0, v(V, R);
  }
  function g(A, P, F, R) {
    const V = {};
    return R || (A = _(v(A, F), F), P = _(v(P, F), F)), F = F || {}, !F.tolerant && P.scheme ? (V.scheme = P.scheme, V.userinfo = P.userinfo, V.host = P.host, V.port = P.port, V.path = t(P.path || ""), V.query = P.query) : (P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0 ? (V.userinfo = P.userinfo, V.host = P.host, V.port = P.port, V.path = t(P.path || ""), V.query = P.query) : (P.path ? (P.path[0] === "/" ? V.path = t(P.path) : ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path ? V.path = "/" + P.path : A.path ? V.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + P.path : V.path = P.path, V.path = t(V.path)), V.query = P.query) : (V.path = A.path, P.query !== void 0 ? V.query = P.query : V.query = A.query), V.userinfo = A.userinfo, V.host = A.host, V.port = A.port), V.scheme = A.scheme), V.fragment = P.fragment, V;
  }
  function C(A, P, F) {
    const R = m(A, F), V = m(P, F);
    return R !== void 0 && V !== void 0 && R.toLowerCase() === V.toLowerCase();
  }
  function v(A, P) {
    const F = {
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
    }, R = Object.assign({}, P), V = [], q = u(R.scheme || F.scheme);
    q && q.serialize && q.serialize(F, R), F.path !== void 0 && (R.skipEscape ? F.path = r(F.path) : (F.path = i(F.path), F.scheme !== void 0 && (F.path = F.path.split("%3A").join(":")))), R.reference !== "suffix" && F.scheme && V.push(F.scheme, ":");
    const H = n(F);
    if (H !== void 0 && (R.reference !== "suffix" && V.push("//"), V.push(H), F.path && F.path[0] !== "/" && V.push("/")), F.path !== void 0) {
      let X = F.path;
      !R.absolutePath && (!q || !q.absolutePath) && (X = t(X)), H === void 0 && X[0] === "/" && X[1] === "/" && (X = "/%2F" + X.slice(2)), V.push(X);
    }
    return F.query !== void 0 && V.push("?", F.query), F.fragment !== void 0 && V.push("#", F.fragment), V.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function h(A, P) {
    if (P[2] !== void 0 && A.path && A.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof A.port == "number" && (A.port < 0 || A.port > 65535))
      return "URI port is malformed.";
  }
  function k(A, P) {
    const F = Object.assign({}, P), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let V = !1, q = !1;
    F.reference === "suffix" && (F.scheme ? A = F.scheme + ":" + A : A = "//" + A);
    const H = A.match($);
    H !== null && H[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", V = !0);
    const X = A.match(p);
    if (X) {
      R.scheme = X[1], R.userinfo = X[3], R.host = X[4], R.port = parseInt(X[5], 10), R.path = X[6] || "", R.query = X[7], R.fragment = X[8], isNaN(R.port) && (R.port = X[5]);
      const oe = h(R, X);
      if (oe !== void 0 && (R.error = R.error || oe, V = !0), R.host)
        if (a(R.host) === !1) {
          const J = e(R.host);
          R.host = J.host.toLowerCase(), q = J.isIPV6;
        } else
          q = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", F.reference && F.reference !== "suffix" && F.reference !== R.reference && (R.error = R.error || "URI is not a " + F.reference + " reference.");
      const Z = u(F.scheme || R.scheme);
      if (!F.unicodeSupport && (!Z || !Z.unicodeSupport) && R.host && (F.domainHost || Z && Z.domainHost) && q === !1 && c(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (ie) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + ie;
        }
      if ((!Z || Z && !Z.skipNormalize) && (A.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = s(unescape(R.host), q))), R.path && (R.path = o(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      Z && Z.parse && Z.parse(R, F);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: V };
  }
  function _(A, P) {
    return k(A, P).parsed;
  }
  function l(A, P) {
    return f(A, P).normalized;
  }
  function f(A, P) {
    const { parsed: F, malformedAuthorityOrPort: R } = k(A, P);
    return {
      normalized: R ? A : v(F, P),
      malformedAuthorityOrPort: R
    };
  }
  function m(A, P) {
    if (typeof A == "string") {
      const { normalized: F, malformedAuthorityOrPort: R } = f(A, P);
      return R ? void 0 : F;
    }
    if (typeof A == "object")
      return v(A, P);
  }
  const E = {
    SCHEMES: d,
    normalize: y,
    resolve: w,
    resolveComponent: g,
    equal: C,
    serialize: v,
    parse: _
  };
  return At.exports = E, At.exports.default = E, At.exports.fastUri = E, At.exports;
}
var Wo;
function Sc() {
  if (Wo) return Ht;
  Wo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = _c();
  return e.code = 'require("ajv/dist/runtime/uri").default', Ht.default = e, Ht;
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
    const r = /* @__PURE__ */ Yr(), o = /* @__PURE__ */ tr(), i = /* @__PURE__ */ Gs(), s = /* @__PURE__ */ nr(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Qn(), d = /* @__PURE__ */ Kn(), u = /* @__PURE__ */ le(), y = vc, w = /* @__PURE__ */ Sc(), g = (J, D) => new RegExp(J, D);
    g.code = "new RegExp";
    const C = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set([
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
    ]), p = {
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
      var D, j, O, b, S, I, z, L, G, W, x, T, B, Y, Q, re, fe, ne, de, ue, me, ke, Ee, dr, ur;
      const Ct = J.strict, fr = (D = J.code) === null || D === void 0 ? void 0 : D.optimize, vo = fr === !0 || fr === void 0 ? 1 : fr || 0, wo = (O = (j = J.code) === null || j === void 0 ? void 0 : j.regExp) !== null && O !== void 0 ? O : g, La = (b = J.uriResolver) !== null && b !== void 0 ? b : w.default;
      return {
        strictSchema: (I = (S = J.strictSchema) !== null && S !== void 0 ? S : Ct) !== null && I !== void 0 ? I : !0,
        strictNumbers: (L = (z = J.strictNumbers) !== null && z !== void 0 ? z : Ct) !== null && L !== void 0 ? L : !0,
        strictTypes: (W = (G = J.strictTypes) !== null && G !== void 0 ? G : Ct) !== null && W !== void 0 ? W : "log",
        strictTuples: (T = (x = J.strictTuples) !== null && x !== void 0 ? x : Ct) !== null && T !== void 0 ? T : "log",
        strictRequired: (Y = (B = J.strictRequired) !== null && B !== void 0 ? B : Ct) !== null && Y !== void 0 ? Y : !1,
        code: J.code ? { ...J.code, optimize: vo, regExp: wo } : { optimize: vo, regExp: wo },
        loopRequired: (Q = J.loopRequired) !== null && Q !== void 0 ? Q : h,
        loopEnum: (re = J.loopEnum) !== null && re !== void 0 ? re : h,
        meta: (fe = J.meta) !== null && fe !== void 0 ? fe : !0,
        messages: (ne = J.messages) !== null && ne !== void 0 ? ne : !0,
        inlineRefs: (de = J.inlineRefs) !== null && de !== void 0 ? de : !0,
        schemaId: (ue = J.schemaId) !== null && ue !== void 0 ? ue : "$id",
        addUsedSchema: (me = J.addUsedSchema) !== null && me !== void 0 ? me : !0,
        validateSchema: (ke = J.validateSchema) !== null && ke !== void 0 ? ke : !0,
        validateFormats: (Ee = J.validateFormats) !== null && Ee !== void 0 ? Ee : !0,
        unicodeRegExp: (dr = J.unicodeRegExp) !== null && dr !== void 0 ? dr : !0,
        int32range: (ur = J.int32range) !== null && ur !== void 0 ? ur : !0,
        uriResolver: La
      };
    }
    class _ {
      constructor(D = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), D = this.opts = { ...D, ...k(D) };
        const { es5: j, lines: O } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: v, es5: j, lines: O }), this.logger = R(D.logger);
        const b = D.validateFormats;
        D.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, p, D, "NOT SUPPORTED"), l.call(this, $, D, "DEPRECATED", "warn"), this._metaOpts = P.call(this), D.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), D.keywords && A.call(this, D.keywords), typeof D.meta == "object" && this.addMetaSchema(D.meta), m.call(this), D.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: D, meta: j, schemaId: O } = this.opts;
        let b = y;
        O === "id" && (b = { ...y }, b.id = b.$id, delete b.$id), j && D && this.addMetaSchema(b, b[O], !1);
      }
      defaultMeta() {
        const { meta: D, schemaId: j } = this.opts;
        return this.opts.defaultMeta = typeof D == "object" ? D[j] || D : void 0;
      }
      validate(D, j) {
        let O;
        if (typeof D == "string") {
          if (O = this.getSchema(D), !O)
            throw new Error(`no schema with key or ref "${D}"`);
        } else
          O = this.compile(D);
        const b = O(j);
        return "$async" in O || (this.errors = O.errors), b;
      }
      compile(D, j) {
        const O = this._addSchema(D, j);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(D, j) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return b.call(this, D, j);
        async function b(W, x) {
          await S.call(this, W.$schema);
          const T = this._addSchema(W, x);
          return T.validate || I.call(this, T);
        }
        async function S(W) {
          W && !this.getSchema(W) && await b.call(this, { $ref: W }, !0);
        }
        async function I(W) {
          try {
            return this._compileSchemaEnv(W);
          } catch (x) {
            if (!(x instanceof o.default))
              throw x;
            return z.call(this, x), await L.call(this, x.missingSchema), I.call(this, W);
          }
        }
        function z({ missingSchema: W, missingRef: x }) {
          if (this.refs[W])
            throw new Error(`AnySchema ${W} is loaded but ${x} cannot be resolved`);
        }
        async function L(W) {
          const x = await G.call(this, W);
          this.refs[W] || await S.call(this, x.$schema), this.refs[W] || this.addSchema(x, W, j);
        }
        async function G(W) {
          const x = this._loading[W];
          if (x)
            return x;
          try {
            return await (this._loading[W] = O(W));
          } finally {
            delete this._loading[W];
          }
        }
      }
      // Adds schema to the instance
      addSchema(D, j, O, b = this.opts.validateSchema) {
        if (Array.isArray(D)) {
          for (const I of D)
            this.addSchema(I, void 0, O, b);
          return this;
        }
        let S;
        if (typeof D == "object") {
          const { schemaId: I } = this.opts;
          if (S = D[I], S !== void 0 && typeof S != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return j = (0, c.normalizeId)(j || S), this._checkUnique(j), this.schemas[j] = this._addSchema(D, O, j, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(D, j, O = this.opts.validateSchema) {
        return this.addSchema(D, j, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(D, j) {
        if (typeof D == "boolean")
          return !0;
        let O;
        if (O = D.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(O, D);
        if (!b && j) {
          const S = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(S);
          else
            throw new Error(S);
        }
        return b;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(D) {
        let j;
        for (; typeof (j = f.call(this, D)) == "string"; )
          D = j;
        if (j === void 0) {
          const { schemaId: O } = this.opts, b = new s.SchemaEnv({ schema: {}, schemaId: O });
          if (j = s.resolveSchema.call(this, b, D), !j)
            return;
          this.refs[D] = j;
        }
        return j.validate || this._compileSchemaEnv(j);
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
            const j = f.call(this, D);
            return typeof j == "object" && this._cache.delete(j.schema), delete this.schemas[D], delete this.refs[D], this;
          }
          case "object": {
            const j = D;
            this._cache.delete(j);
            let O = D[this.opts.schemaId];
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(D) {
        for (const j of D)
          this.addKeyword(j);
        return this;
      }
      addKeyword(D, j) {
        let O;
        if (typeof D == "string")
          O = D, typeof j == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), j.keyword = O);
        else if (typeof D == "object" && j === void 0) {
          if (j = D, O = j.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (q.call(this, O, j), !j)
          return (0, u.eachItem)(O, (S) => H.call(this, S)), this;
        oe.call(this, j);
        const b = {
          ...j,
          type: (0, d.getJSONTypes)(j.type),
          schemaType: (0, d.getJSONTypes)(j.schemaType)
        };
        return (0, u.eachItem)(O, b.type.length === 0 ? (S) => H.call(this, S, b) : (S) => b.type.forEach((I) => H.call(this, S, b, I))), this;
      }
      getKeyword(D) {
        const j = this.RULES.all[D];
        return typeof j == "object" ? j.definition : !!j;
      }
      // Remove keyword
      removeKeyword(D) {
        const { RULES: j } = this;
        delete j.keywords[D], delete j.all[D];
        for (const O of j.rules) {
          const b = O.rules.findIndex((S) => S.keyword === D);
          b >= 0 && O.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(D, j) {
        return typeof j == "string" && (j = new RegExp(j)), this.formats[D] = j, this;
      }
      errorsText(D = this.errors, { separator: j = ", ", dataVar: O = "data" } = {}) {
        return !D || D.length === 0 ? "No errors" : D.map((b) => `${O}${b.instancePath} ${b.message}`).reduce((b, S) => b + j + S);
      }
      $dataMetaSchema(D, j) {
        const O = this.RULES.all;
        D = JSON.parse(JSON.stringify(D));
        for (const b of j) {
          const S = b.split("/").slice(1);
          let I = D;
          for (const z of S)
            I = I[z];
          for (const z in O) {
            const L = O[z];
            if (typeof L != "object")
              continue;
            const { $data: G } = L.definition, W = I[z];
            G && W && (I[z] = ie(W));
          }
        }
        return D;
      }
      _removeAllSchemas(D, j) {
        for (const O in D) {
          const b = D[O];
          (!j || j.test(O)) && (typeof b == "string" ? delete D[O] : b && !b.meta && (this._cache.delete(b.schema), delete D[O]));
        }
      }
      _addSchema(D, j, O, b = this.opts.validateSchema, S = this.opts.addUsedSchema) {
        let I;
        const { schemaId: z } = this.opts;
        if (typeof D == "object")
          I = D[z];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof D != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let L = this._cache.get(D);
        if (L !== void 0)
          return L;
        O = (0, c.normalizeId)(I || O);
        const G = c.getSchemaRefs.call(this, D, O);
        return L = new s.SchemaEnv({ schema: D, schemaId: z, meta: j, baseId: O, localRefs: G }), this._cache.set(L.schema, L), S && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = L), b && this.validateSchema(D, !0), L;
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
        const j = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, D);
        } finally {
          this.opts = j;
        }
      }
    }
    _.ValidationError = r.default, _.MissingRefError = o.default, e.default = _;
    function l(J, D, j, O = "error") {
      for (const b in J) {
        const S = b;
        S in D && this.logger[O](`${j}: option ${b}. ${J[S]}`);
      }
    }
    function f(J) {
      return J = (0, c.normalizeId)(J), this.schemas[J] || this.refs[J];
    }
    function m() {
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
    function A(J) {
      if (Array.isArray(J)) {
        this.addVocabulary(J);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const D in J) {
        const j = J[D];
        j.keyword || (j.keyword = D), this.addKeyword(j);
      }
    }
    function P() {
      const J = { ...this.opts };
      for (const D of C)
        delete J[D];
      return J;
    }
    const F = { log() {
    }, warn() {
    }, error() {
    } };
    function R(J) {
      if (J === !1)
        return F;
      if (J === void 0)
        return console;
      if (J.log && J.warn && J.error)
        return J;
      throw new Error("logger must implement log, warn and error methods");
    }
    const V = /^[a-z_$][a-z0-9_$:-]*$/i;
    function q(J, D) {
      const { RULES: j } = this;
      if ((0, u.eachItem)(J, (O) => {
        if (j.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!V.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!D && D.$data && !("code" in D || "validate" in D))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function H(J, D, j) {
      var O;
      const b = D?.post;
      if (j && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: S } = this;
      let I = b ? S.post : S.rules.find(({ type: L }) => L === j);
      if (I || (I = { type: j, rules: [] }, S.rules.push(I)), S.keywords[J] = !0, !D)
        return;
      const z = {
        keyword: J,
        definition: {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        }
      };
      D.before ? X.call(this, I, z, D.before) : I.rules.push(z), S.all[J] = z, (O = D.implements) === null || O === void 0 || O.forEach((L) => this.addKeyword(L));
    }
    function X(J, D, j) {
      const O = J.rules.findIndex((b) => b.keyword === j);
      O >= 0 ? J.rules.splice(O, 0, D) : (J.rules.push(D), this.logger.warn(`rule ${j} is not defined`));
    }
    function oe(J) {
      let { metaSchema: D } = J;
      D !== void 0 && (J.$data && this.opts.$data && (D = ie(D)), J.validateSchema = this.compile(D, !0));
    }
    const Z = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ie(J) {
      return { anyOf: [J, Z] };
    }
  })(pr)), pr;
}
var Kt = {}, Gt = {}, Wt = {}, Yo;
function kc() {
  if (Yo) return Wt;
  Yo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Wt.default = e, Wt;
}
var Ge = {}, Xo;
function Xr() {
  if (Xo) return Ge;
  Xo = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.callRef = Ge.getValidate = void 0;
  const e = /* @__PURE__ */ tr(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ se(), r = /* @__PURE__ */ ze(), o = /* @__PURE__ */ nr(), i = /* @__PURE__ */ le(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: u, schema: y, it: w } = d, { baseId: g, schemaEnv: C, validateName: v, opts: p, self: $ } = w, { root: h } = C;
      if ((y === "#" || y === "#/") && g === h.baseId)
        return _();
      const k = o.resolveRef.call($, h, g, y);
      if (k === void 0)
        throw new e.default(w.opts.uriResolver, g, y);
      if (k instanceof o.SchemaEnv)
        return l(k);
      return f(k);
      function _() {
        if (C === h)
          return c(d, v, C, C.$async);
        const m = u.scopeValue("root", { ref: h });
        return c(d, (0, n._)`${m}.validate`, h, h.$async);
      }
      function l(m) {
        const E = a(d, m);
        c(d, E, m, m.$async);
      }
      function f(m) {
        const E = u.scopeValue("schema", p.code.source === !0 ? { ref: m, code: (0, n.stringify)(m) } : { ref: m }), A = u.name("valid"), P = d.subschema({
          schema: m,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: y
        }, A);
        d.mergeEvaluated(P), d.ok(A);
      }
    }
  };
  function a(d, u) {
    const { gen: y } = d;
    return u.validate ? y.scopeValue("validate", { ref: u.validate }) : (0, n._)`${y.scopeValue("wrapper", { ref: u })}.validate`;
  }
  Ge.getValidate = a;
  function c(d, u, y, w) {
    const { gen: g, it: C } = d, { allErrors: v, schemaEnv: p, opts: $ } = C, h = $.passContext ? r.default.this : n.nil;
    w ? k() : _();
    function k() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const m = g.let("valid");
      g.try(() => {
        g.code((0, n._)`await ${(0, t.callValidateCode)(d, u, h)}`), f(u), v || g.assign(m, !0);
      }, (E) => {
        g.if((0, n._)`!(${E} instanceof ${C.ValidationError})`, () => g.throw(E)), l(E), v || g.assign(m, !1);
      }), d.ok(m);
    }
    function _() {
      d.result((0, t.callValidateCode)(d, u, h), () => f(u), () => l(u));
    }
    function l(m) {
      const E = (0, n._)`${m}.errors`;
      g.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${E} : ${r.default.vErrors}.concat(${E})`), g.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function f(m) {
      var E;
      if (!C.opts.unevaluated)
        return;
      const A = (E = y?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (C.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (C.props = i.mergeEvaluated.props(g, A.props, C.props));
        else {
          const P = g.var("props", (0, n._)`${m}.evaluated.props`);
          C.props = i.mergeEvaluated.props(g, P, C.props, n.Name);
        }
      if (C.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (C.items = i.mergeEvaluated.items(g, A.items, C.items));
        else {
          const P = g.var("items", (0, n._)`${m}.evaluated.items`);
          C.items = i.mergeEvaluated.items(g, P, C.items, n.Name);
        }
    }
  }
  return Ge.callRef = c, Ge.default = s, Ge;
}
var Zo;
function Ec() {
  if (Zo) return Gt;
  Zo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kc(), t = /* @__PURE__ */ Xr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Gt.default = n, Gt;
}
var Jt = {}, Yt = {}, Qo;
function xc() {
  if (Qo) return Yt;
  Qo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = e.operators, n = {
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
  return Yt.default = o, Yt;
}
var Xt = {}, ei;
function Ac() {
  if (ei) return Xt;
  ei = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
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
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, d = o.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      r.fail$data((0, e._)`(${s} === 0 || (${d} = ${i}/${s}, ${u}))`);
    }
  };
  return Xt.default = n, Xt;
}
var Zt = {}, Qt = {}, ti;
function Pc() {
  if (ti) return Qt;
  ti = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return Qt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Qt;
}
var ni;
function Rc() {
  if (ni) return Zt;
  ni = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ Pc(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: d } = i, u = s === "maxLength" ? e.operators.GT : e.operators.LT, y = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${y} ${u} ${c}`);
    }
  };
  return Zt.default = o, Zt;
}
var en = {}, ri;
function Mc() {
  if (ri) return en;
  ri = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ se(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: u, it: y } = i, w = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: g } = y.opts.code, C = g.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, g), v = s.let("valid");
        s.try(() => s.assign(v, (0, n._)`${C}(${u}, ${w}).test(${a})`), () => s.assign(v, !1)), i.fail$data((0, n._)`!${v}`);
      } else {
        const g = (0, e.usePattern)(i, d);
        i.fail$data((0, n._)`!${g}.test(${a})`);
      }
    }
  };
  return en.default = o, en;
}
var tn = {}, oi;
function Nc() {
  if (oi) return tn;
  oi = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
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
  return tn.default = n, tn;
}
var nn = {}, ii;
function Tc() {
  if (ii) return nn;
  ii = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ le(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: c, data: d, $data: u, it: y } = i, { opts: w } = y;
      if (!u && a.length === 0)
        return;
      const g = a.length >= w.loopRequired;
      if (y.allErrors ? C() : v(), w.strictRequired) {
        const h = i.parentSchema.properties, { definedProperties: k } = i.it;
        for (const _ of a)
          if (h?.[_] === void 0 && !k.has(_)) {
            const l = y.schemaEnv.baseId + y.errSchemaPath, f = `required property "${_}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(y, f, y.opts.strictRequired);
          }
      }
      function C() {
        if (g || u)
          i.block$data(t.nil, p);
        else
          for (const h of a)
            (0, e.checkReportMissingProp)(i, h);
      }
      function v() {
        const h = s.let("missing");
        if (g || u) {
          const k = s.let("valid", !0);
          i.block$data(k, () => $(h, k)), i.ok(k);
        } else
          s.if((0, e.checkMissingProp)(i, a, h)), (0, e.reportMissingProp)(i, h), s.else();
      }
      function p() {
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
  return nn.default = o, nn;
}
var rn = {}, si;
function Oc() {
  if (si) return rn;
  si = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
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
  return rn.default = n, rn;
}
var on = {}, sn = {}, ai;
function Zr() {
  if (ai) return sn;
  ai = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = Js();
  return e.code = 'require("ajv/dist/runtime/equal").default', sn.default = e, sn;
}
var ci;
function Fc() {
  if (ci) return on;
  ci = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ le(), r = /* @__PURE__ */ Zr(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: d, schema: u, parentSchema: y, schemaCode: w, it: g } = s;
      if (!d && !u)
        return;
      const C = a.let("valid"), v = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      s.block$data(C, p, (0, t._)`${w} === false`), s.ok(C);
      function p() {
        const _ = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: _, j: l }), a.assign(C, !0), a.if((0, t._)`${_} > 1`, () => ($() ? h : k)(_, l));
      }
      function $() {
        return v.length > 0 && !v.some((_) => _ === "object" || _ === "array");
      }
      function h(_, l) {
        const f = a.name("item"), m = (0, e.checkDataTypes)(v, f, g.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${_}--;`, () => {
          a.let(f, (0, t._)`${c}[${_}]`), a.if(m, (0, t._)`continue`), v.length > 1 && a.if((0, t._)`typeof ${f} == "string"`, (0, t._)`${f} += "_"`), a.if((0, t._)`typeof ${E}[${f}] == "number"`, () => {
            a.assign(l, (0, t._)`${E}[${f}]`), s.error(), a.assign(C, !1).break();
          }).code((0, t._)`${E}[${f}] = ${_}`);
        });
      }
      function k(_, l) {
        const f = (0, n.useFunc)(a, r.default), m = a.name("outer");
        a.label(m).for((0, t._)`;${_}--;`, () => a.for((0, t._)`${l} = ${_}; ${l}--;`, () => a.if((0, t._)`${f}(${c}[${_}], ${c}[${l}])`, () => {
          s.error(), a.assign(C, !1).break(m);
        })));
      }
    }
  };
  return on.default = i, on;
}
var an = {}, li;
function zc() {
  if (li) return an;
  li = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ Zr(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schemaCode: d, schema: u } = i;
      c || u && typeof u == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${d})`) : i.fail((0, e._)`${u} !== ${a}`);
    }
  };
  return an.default = o, an;
}
var cn = {}, di;
function Ic() {
  if (di) return cn;
  di = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ Zr(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: u, it: y } = i;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const w = d.length >= y.opts.loopEnum;
      let g;
      const C = () => g ?? (g = (0, t.useFunc)(s, n.default));
      let v;
      if (w || c)
        v = s.let("valid"), i.block$data(v, p);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const h = s.const("vSchema", u);
        v = (0, e.or)(...d.map((k, _) => $(h, _)));
      }
      i.pass(v);
      function p() {
        s.assign(v, !1), s.forOf("v", u, (h) => s.if((0, e._)`${C()}(${a}, ${h})`, () => s.assign(v, !0).break()));
      }
      function $(h, k) {
        const _ = d[k];
        return typeof _ == "object" && _ !== null ? (0, e._)`${C()}(${a}, ${h}[${k}])` : (0, e._)`${a} === ${_}`;
      }
    }
  };
  return cn.default = o, cn;
}
var ui;
function jc() {
  if (ui) return Jt;
  ui = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xc(), t = /* @__PURE__ */ Ac(), n = /* @__PURE__ */ Rc(), r = /* @__PURE__ */ Mc(), o = /* @__PURE__ */ Nc(), i = /* @__PURE__ */ Tc(), s = /* @__PURE__ */ Oc(), a = /* @__PURE__ */ Fc(), c = /* @__PURE__ */ zc(), d = /* @__PURE__ */ Ic(), u = [
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
  return Jt.default = u, Jt;
}
var ln = {}, ft = {}, fi;
function Xs() {
  if (fi) return ft;
  fi = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), r = {
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
    const { gen: a, schema: c, data: d, keyword: u, it: y } = i;
    y.items = !0;
    const w = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${w} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const C = a.var("valid", (0, e._)`${w} <= ${s.length}`);
      a.if((0, e.not)(C), () => g(C)), i.ok(C);
    }
    function g(C) {
      a.forRange("i", s.length, w, (v) => {
        i.subschema({ keyword: u, dataProp: v, dataPropType: t.Type.Num }, C), y.allErrors || a.if((0, e.not)(C), () => a.break());
      });
    }
  }
  return ft.validateAdditionalItems = o, ft.default = r, ft;
}
var dn = {}, pt = {}, pi;
function Zs() {
  if (pi) return pt;
  pi = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.validateTuple = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ Ie(), r = {
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
    const { gen: c, parentSchema: d, data: u, keyword: y, it: w } = i;
    v(d), w.opts.unevaluated && a.length && w.items !== !0 && (w.items = t.mergeEvaluated.items(c, a.length, w.items));
    const g = c.name("valid"), C = c.const("len", (0, e._)`${u}.length`);
    a.forEach((p, $) => {
      (0, t.alwaysValidSchema)(w, p) || (c.if((0, e._)`${C} > ${$}`, () => i.subschema({
        keyword: y,
        schemaProp: $,
        dataProp: $
      }, g)), i.ok(g));
    });
    function v(p) {
      const { opts: $, errSchemaPath: h } = w, k = a.length, _ = k === p.minItems && (k === p.maxItems || p[s] === !1);
      if ($.strictTuples && !_) {
        const l = `"${y}" is ${k}-tuple, but minItems or maxItems/${s} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(w, l, $.strictTuples);
      }
    }
  }
  return pt.validateTuple = o, pt.default = r, pt;
}
var hi;
function Dc() {
  if (hi) return dn;
  hi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zs(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return dn.default = t, dn;
}
var un = {}, mi;
function Lc() {
  if (mi) return un;
  mi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ Xs(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: d } = s, { prefixItems: u } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, a) && (u ? (0, r.validateAdditionalItems)(s, u) : s.ok((0, n.validateArray)(s)));
    }
  };
  return un.default = i, un;
}
var fn = {}, gi;
function qc() {
  if (gi) return fn;
  gi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), r = {
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
      let u, y;
      const { minContains: w, maxContains: g } = a;
      d.opts.next ? (u = w === void 0 ? 1 : w, y = g) : u = 1;
      const C = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: u, max: y }), y === void 0 && u === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && u > y) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, s)) {
        let k = (0, e._)`${C} >= ${u}`;
        y !== void 0 && (k = (0, e._)`${k} && ${C} <= ${y}`), o.pass(k);
        return;
      }
      d.items = !0;
      const v = i.name("valid");
      y === void 0 && u === 1 ? $(v, () => i.if(v, () => i.break())) : u === 0 ? (i.let(v, !0), y !== void 0 && i.if((0, e._)`${c}.length > 0`, p)) : (i.let(v, !1), p()), o.result(v, () => o.reset());
      function p() {
        const k = i.name("_valid"), _ = i.let("count", 0);
        $(k, () => i.if(k, () => h(_)));
      }
      function $(k, _) {
        i.forRange("i", 0, C, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, k), _();
        });
      }
      function h(k) {
        i.code((0, e._)`${k}++`), y === void 0 ? i.if((0, e._)`${k} >= ${u}`, () => i.assign(v, !0).break()) : (i.if((0, e._)`${k} > ${y}`, () => i.assign(v, !1).break()), u === 1 ? i.assign(v, !0) : i.if((0, e._)`${k} >= ${u}`, () => i.assign(v, !0)));
      }
    }
  };
  return fn.default = r, fn;
}
var _r = {}, yi;
function Qr() {
  return yi || (yi = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ le(), r = /* @__PURE__ */ Ie();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: u } }) => {
        const y = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${u} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: u, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
    depsCount: ${d},
    deps: ${u}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [d, u] = i(c);
        s(c, d), a(c, u);
      }
    };
    function i({ schema: c }) {
      const d = {}, u = {};
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const w = Array.isArray(c[y]) ? d : u;
        w[y] = c[y];
      }
      return [d, u];
    }
    function s(c, d = c.schema) {
      const { gen: u, data: y, it: w } = c;
      if (Object.keys(d).length === 0)
        return;
      const g = u.let("missing");
      for (const C in d) {
        const v = d[C];
        if (v.length === 0)
          continue;
        const p = (0, r.propertyInData)(u, y, C, w.opts.ownProperties);
        c.setParams({
          property: C,
          depsCount: v.length,
          deps: v.join(", ")
        }), w.allErrors ? u.if(p, () => {
          for (const $ of v)
            (0, r.checkReportMissingProp)(c, $);
        }) : (u.if((0, t._)`${p} && (${(0, r.checkMissingProp)(c, v, g)})`), (0, r.reportMissingProp)(c, g), u.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, d = c.schema) {
      const { gen: u, data: y, keyword: w, it: g } = c, C = u.name("valid");
      for (const v in d)
        (0, n.alwaysValidSchema)(g, d[v]) || (u.if(
          (0, r.propertyInData)(u, y, v, g.opts.ownProperties),
          () => {
            const p = c.subschema({ keyword: w, schemaProp: v }, C);
            c.mergeValidEvaluated(p, C);
          },
          () => u.var(C, !0)
          // TODO var
        ), c.ok(C));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(_r)), _r;
}
var pn = {}, $i;
function Vc() {
  if ($i) return pn;
  $i = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), r = {
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
      i.forIn("key", a, (u) => {
        o.setParams({ propertyName: u }), o.subschema({
          keyword: "propertyNames",
          data: u,
          dataTypes: ["string"],
          propertyName: u,
          compositeRule: !0
        }, d), i.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || i.break();
        });
      }), o.ok(d);
    }
  };
  return pn.default = r, pn;
}
var hn = {}, bi;
function Qs() {
  if (bi) return hn;
  bi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ze(), r = /* @__PURE__ */ le(), i = {
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
      const { gen: a, schema: c, parentSchema: d, data: u, errsCount: y, it: w } = s;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: C } = w;
      if (w.props = !0, C.removeAdditional !== "all" && (0, r.alwaysValidSchema)(w, c))
        return;
      const v = (0, e.allSchemaProperties)(d.properties), p = (0, e.allSchemaProperties)(d.patternProperties);
      $(), s.ok((0, t._)`${y} === ${n.default.errors}`);
      function $() {
        a.forIn("key", u, (f) => {
          !v.length && !p.length ? _(f) : a.if(h(f), () => _(f));
        });
      }
      function h(f) {
        let m;
        if (v.length > 8) {
          const E = (0, r.schemaRefOrVal)(w, d.properties, "properties");
          m = (0, e.isOwnProperty)(a, E, f);
        } else v.length ? m = (0, t.or)(...v.map((E) => (0, t._)`${f} === ${E}`)) : m = t.nil;
        return p.length && (m = (0, t.or)(m, ...p.map((E) => (0, t._)`${(0, e.usePattern)(s, E)}.test(${f})`))), (0, t.not)(m);
      }
      function k(f) {
        a.code((0, t._)`delete ${u}[${f}]`);
      }
      function _(f) {
        if (C.removeAdditional === "all" || C.removeAdditional && c === !1) {
          k(f);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: f }), s.error(), g || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(w, c)) {
          const m = a.name("valid");
          C.removeAdditional === "failing" ? (l(f, m, !1), a.if((0, t.not)(m), () => {
            s.reset(), k(f);
          })) : (l(f, m), g || a.if((0, t.not)(m), () => a.break()));
        }
      }
      function l(f, m, E) {
        const A = {
          keyword: "additionalProperties",
          dataProp: f,
          dataPropType: r.Type.Str
        };
        E === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(A, m);
      }
    }
  };
  return hn.default = i, hn;
}
var mn = {}, vi;
function Bc() {
  if (vi) return mn;
  vi = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ Ie(), n = /* @__PURE__ */ le(), r = /* @__PURE__ */ Qs(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: d, it: u } = i;
      u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(u, r.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(a);
      for (const p of y)
        u.definedProperties.add(p);
      u.opts.unevaluated && y.length && u.props !== !0 && (u.props = n.mergeEvaluated.props(s, (0, n.toHash)(y), u.props));
      const w = y.filter((p) => !(0, n.alwaysValidSchema)(u, a[p]));
      if (w.length === 0)
        return;
      const g = s.name("valid");
      for (const p of w)
        C(p) ? v(p) : (s.if((0, t.propertyInData)(s, d, p, u.opts.ownProperties)), v(p), u.allErrors || s.else().var(g, !0), s.endIf()), i.it.definedProperties.add(p), i.ok(g);
      function C(p) {
        return u.opts.useDefaults && !u.compositeRule && a[p].default !== void 0;
      }
      function v(p) {
        i.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, g);
      }
    }
  };
  return mn.default = o, mn;
}
var gn = {}, wi;
function Uc() {
  if (wi) return gn;
  wi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ le(), r = /* @__PURE__ */ le(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: d, it: u } = i, { opts: y } = u, w = (0, e.allSchemaProperties)(a), g = w.filter((_) => (0, n.alwaysValidSchema)(u, a[_]));
      if (w.length === 0 || g.length === w.length && (!u.opts.unevaluated || u.props === !0))
        return;
      const C = y.strictSchema && !y.allowMatchingProperties && d.properties, v = s.name("valid");
      u.props !== !0 && !(u.props instanceof t.Name) && (u.props = (0, r.evaluatedPropsToName)(s, u.props));
      const { props: p } = u;
      $();
      function $() {
        for (const _ of w)
          C && h(_), u.allErrors ? k(_) : (s.var(v, !0), k(_), s.if(v));
      }
      function h(_) {
        for (const l in C)
          new RegExp(_).test(l) && (0, n.checkStrictMode)(u, `property ${l} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function k(_) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, _)}.test(${l})`, () => {
            const f = g.includes(_);
            f || i.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: l,
              dataPropType: r.Type.Str
            }, v), u.opts.unevaluated && p !== !0 ? s.assign((0, t._)`${p}[${l}]`, !0) : !f && !u.allErrors && s.if((0, t.not)(v), () => s.break());
          });
        });
      }
    }
  };
  return gn.default = o, gn;
}
var yn = {}, _i;
function Hc() {
  if (_i) return yn;
  _i = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ le(), t = {
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
  return yn.default = t, yn;
}
var $n = {}, Si;
function Kc() {
  if (Si) return $n;
  Si = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ie()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return $n.default = t, $n;
}
var bn = {}, Ci;
function Gc() {
  if (Ci) return bn;
  Ci = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), r = {
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
      const d = s, u = i.let("valid", !1), y = i.let("passing", null), w = i.name("_valid");
      o.setParams({ passing: y }), i.block(g), o.result(u, () => o.reset(), () => o.error(!0));
      function g() {
        d.forEach((C, v) => {
          let p;
          (0, t.alwaysValidSchema)(c, C) ? i.var(w, !0) : p = o.subschema({
            keyword: "oneOf",
            schemaProp: v,
            compositeRule: !0
          }, w), v > 0 && i.if((0, e._)`${w} && ${u}`).assign(u, !1).assign(y, (0, e._)`[${y}, ${v}]`).else(), i.if(w, () => {
            i.assign(u, !0), i.assign(y, v), p && o.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return bn.default = r, bn;
}
var vn = {}, ki;
function Wc() {
  if (ki) return vn;
  ki = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ le(), t = {
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
var wn = {}, Ei;
function Jc() {
  if (Ei) return wn;
  Ei = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), r = {
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
      const d = o(c, "then"), u = o(c, "else");
      if (!d && !u)
        return;
      const y = s.let("valid", !0), w = s.name("_valid");
      if (g(), i.reset(), d && u) {
        const v = s.let("ifClause");
        i.setParams({ ifClause: v }), s.if(w, C("then", v), C("else", v));
      } else d ? s.if(w, C("then")) : s.if((0, e.not)(w), C("else"));
      i.pass(y, () => i.error(!0));
      function g() {
        const v = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, w);
        i.mergeEvaluated(v);
      }
      function C(v, p) {
        return () => {
          const $ = i.subschema({ keyword: v }, w);
          s.assign(y, w), i.mergeValidEvaluated($, y), p ? s.assign(p, (0, e._)`${v}`) : i.setParams({ ifClause: v });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return wn.default = r, wn;
}
var _n = {}, xi;
function Yc() {
  if (xi) return _n;
  xi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ le(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return _n.default = t, _n;
}
var Ai;
function Xc() {
  if (Ai) return ln;
  Ai = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xs(), t = /* @__PURE__ */ Dc(), n = /* @__PURE__ */ Zs(), r = /* @__PURE__ */ Lc(), o = /* @__PURE__ */ qc(), i = /* @__PURE__ */ Qr(), s = /* @__PURE__ */ Vc(), a = /* @__PURE__ */ Qs(), c = /* @__PURE__ */ Bc(), d = /* @__PURE__ */ Uc(), u = /* @__PURE__ */ Hc(), y = /* @__PURE__ */ Kc(), w = /* @__PURE__ */ Gc(), g = /* @__PURE__ */ Wc(), C = /* @__PURE__ */ Jc(), v = /* @__PURE__ */ Yc();
  function p($ = !1) {
    const h = [
      // any
      u.default,
      y.default,
      w.default,
      g.default,
      C.default,
      v.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      d.default
    ];
    return $ ? h.push(t.default, r.default) : h.push(e.default, n.default), h.push(o.default), h;
  }
  return ln.default = p, ln;
}
var Sn = {}, ht = {}, Pi;
function ea() {
  if (Pi) return ht;
  Pi = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ Xr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: d, it: u } = a;
    u.schemaEnv.root.dynamicAnchors[c] = !0;
    const y = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, w = u.errSchemaPath === "#" ? u.validateName : s(a);
    d.if((0, e._)`!${y}`, () => d.assign(y, w));
  }
  ht.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: d, self: u } = a.it, { root: y, baseId: w, localRefs: g, meta: C } = c.root, { schemaId: v } = u.opts, p = new n.SchemaEnv({ schema: d, schemaId: v, root: y, baseId: w, localRefs: g, meta: C });
    return n.compileSchema.call(u, p), (0, r.getValidate)(a, p);
  }
  return ht.default = o, ht;
}
var mt = {}, Ri;
function ta() {
  if (Ri) return mt;
  Ri = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.dynamicRef = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ze(), n = /* @__PURE__ */ Xr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: c, it: d } = i;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const u = s.slice(1);
    if (d.allErrors)
      y();
    else {
      const g = a.let("valid", !1);
      y(g), i.ok(g);
    }
    function y(g) {
      if (d.schemaEnv.root.dynamicAnchors[u]) {
        const C = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(u)}`);
        a.if(C, w(C, g), w(d.validateName, g));
      } else
        w(d.validateName, g)();
    }
    function w(g, C) {
      return C ? () => a.block(() => {
        (0, n.callRef)(i, g), a.let(C, !0);
      }) : () => (0, n.callRef)(i, g);
    }
  }
  return mt.dynamicRef = o, mt.default = r, mt;
}
var Cn = {}, Mi;
function Zc() {
  if (Mi) return Cn;
  Mi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ea(), t = /* @__PURE__ */ le(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Cn.default = n, Cn;
}
var kn = {}, Ni;
function Qc() {
  if (Ni) return kn;
  Ni = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ta(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return kn.default = t, kn;
}
var Ti;
function el() {
  if (Ti) return Sn;
  Ti = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ea(), t = /* @__PURE__ */ ta(), n = /* @__PURE__ */ Zc(), r = /* @__PURE__ */ Qc(), o = [e.default, t.default, n.default, r.default];
  return Sn.default = o, Sn;
}
var En = {}, xn = {}, Oi;
function tl() {
  if (Oi) return xn;
  Oi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return xn.default = t, xn;
}
var An = {}, Fi;
function nl() {
  if (Fi) return An;
  Fi = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return An.default = t, An;
}
var Pn = {}, zi;
function rl() {
  if (zi) return Pn;
  zi = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ le(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Pn.default = t, Pn;
}
var Ii;
function ol() {
  if (Ii) return En;
  Ii = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tl(), t = /* @__PURE__ */ nl(), n = /* @__PURE__ */ rl(), r = [e.default, t.default, n.default];
  return En.default = r, En;
}
var Rn = {}, Mn = {}, ji;
function il() {
  if (ji) return Mn;
  ji = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), n = /* @__PURE__ */ ze(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: s, schema: a, data: c, errsCount: d, it: u } = i;
      if (!d)
        throw new Error("ajv implementation error");
      const { allErrors: y, props: w } = u;
      w instanceof e.Name ? s.if((0, e._)`${w} !== true`, () => s.forIn("key", c, (p) => s.if(C(w, p), () => g(p)))) : w !== !0 && s.forIn("key", c, (p) => w === void 0 ? g(p) : s.if(v(w, p), () => g(p))), u.props = !0, i.ok((0, e._)`${d} === ${n.default.errors}`);
      function g(p) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: p }), i.error(), y || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(u, a)) {
          const $ = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, $), y || s.if((0, e.not)($), () => s.break());
        }
      }
      function C(p, $) {
        return (0, e._)`!${p} || !${p}[${$}]`;
      }
      function v(p, $) {
        const h = [];
        for (const k in p)
          p[k] === !0 && h.push((0, e._)`${$} !== ${k}`);
        return (0, e.and)(...h);
      }
    }
  };
  return Mn.default = o, Mn;
}
var Nn = {}, Di;
function sl() {
  if (Di) return Nn;
  Di = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ le(), r = {
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
      const u = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: d }), o.fail((0, e._)`${u} > ${d}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const w = i.var("valid", (0, e._)`${u} <= ${d}`);
        i.if((0, e.not)(w), () => y(w, d)), o.ok(w);
      }
      c.items = !0;
      function y(w, g) {
        i.forRange("i", g, u, (C) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: C, dataPropType: t.Type.Num }, w), c.allErrors || i.if((0, e.not)(w), () => i.break());
        });
      }
    }
  };
  return Nn.default = r, Nn;
}
var Li;
function al() {
  if (Li) return Rn;
  Li = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ il(), t = /* @__PURE__ */ sl(), n = [e.default, t.default];
  return Rn.default = n, Rn;
}
var Tn = {}, On = {}, qi;
function cl() {
  if (qi) return On;
  qi = 1, Object.defineProperty(On, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: c, schemaCode: d, it: u } = r, { opts: y, errSchemaPath: w, schemaEnv: g, self: C } = u;
      if (!y.validateFormats)
        return;
      a ? v() : p();
      function v() {
        const $ = i.scopeValue("formats", {
          ref: C.formats,
          code: y.code.formats
        }), h = i.const("fDef", (0, e._)`${$}[${d}]`), k = i.let("fType"), _ = i.let("format");
        i.if((0, e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => i.assign(k, (0, e._)`${h}.type || "string"`).assign(_, (0, e._)`${h}.validate`), () => i.assign(k, (0, e._)`"string"`).assign(_, h)), r.fail$data((0, e.or)(l(), f()));
        function l() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${_}`;
        }
        function f() {
          const m = g.$async ? (0, e._)`(${h}.async ? await ${_}(${s}) : ${_}(${s}))` : (0, e._)`${_}(${s})`, E = (0, e._)`(typeof ${_} == "function" ? ${m} : ${_}.test(${s}))`;
          return (0, e._)`${_} && ${_} !== true && ${k} === ${o} && !${E}`;
        }
      }
      function p() {
        const $ = C.formats[c];
        if (!$) {
          l();
          return;
        }
        if ($ === !0)
          return;
        const [h, k, _] = f($);
        h === o && r.pass(m());
        function l() {
          if (y.strictSchema === !1) {
            C.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${c}" ignored in schema at path "${w}"`;
          }
        }
        function f(E) {
          const A = E instanceof RegExp ? (0, e.regexpCode)(E) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, P = i.scopeValue("formats", { key: c, ref: E, code: A });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${P}.validate`] : ["string", E, P];
        }
        function m() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!g.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${_}(${s})`;
          }
          return typeof k == "function" ? (0, e._)`${_}(${s})` : (0, e._)`${_}.test(${s})`;
        }
      }
    }
  };
  return On.default = n, On;
}
var Vi;
function ll() {
  if (Vi) return Tn;
  Vi = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ cl()).default];
  return Tn.default = t, Tn;
}
var st = {}, Bi;
function dl() {
  return Bi || (Bi = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.contentVocabulary = st.metadataVocabulary = void 0, st.metadataVocabulary = [
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
var Ui;
function ul() {
  if (Ui) return Kt;
  Ui = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ jc(), n = /* @__PURE__ */ Xc(), r = /* @__PURE__ */ el(), o = /* @__PURE__ */ ol(), i = /* @__PURE__ */ al(), s = /* @__PURE__ */ ll(), a = /* @__PURE__ */ dl(), c = [
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
  return Kt.default = c, Kt;
}
var Fn = {}, Pt = {}, Hi;
function fl() {
  if (Hi) return Pt;
  Hi = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Pt.DiscrError = e = {})), Pt;
}
var Ki;
function pl() {
  if (Ki) return Fn;
  Ki = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ fl(), n = /* @__PURE__ */ nr(), r = /* @__PURE__ */ tr(), o = /* @__PURE__ */ le(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: u, parentSchema: y, it: w } = a, { oneOf: g } = y;
      if (!w.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const C = u.propertyName;
      if (typeof C != "string")
        throw new Error("discriminator: requires propertyName");
      if (u.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const v = c.let("valid", !1), p = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(C)}`);
      c.if((0, e._)`typeof ${p} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: C })), a.ok(v);
      function $() {
        const _ = k();
        c.if(!1);
        for (const l in _)
          c.elseIf((0, e._)`${p} === ${l}`), c.assign(v, h(_[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: C }), c.endIf();
      }
      function h(_) {
        const l = c.name("valid"), f = a.subschema({ keyword: "oneOf", schemaProp: _ }, l);
        return a.mergeEvaluated(f, e.Name), l;
      }
      function k() {
        var _;
        const l = {}, f = E(y);
        let m = !0;
        for (let F = 0; F < g.length; F++) {
          let R = g[F];
          if (R?.$ref && !(0, o.schemaHasRulesButRef)(R, w.self.RULES)) {
            const q = R.$ref;
            if (R = n.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, q), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default(w.opts.uriResolver, w.baseId, q);
          }
          const V = (_ = R?.properties) === null || _ === void 0 ? void 0 : _[C];
          if (typeof V != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${C}"`);
          m = m && (f || E(R)), A(V, F);
        }
        if (!m)
          throw new Error(`discriminator: "${C}" must be required`);
        return l;
        function E({ required: F }) {
          return Array.isArray(F) && F.includes(C);
        }
        function A(F, R) {
          if (F.const)
            P(F.const, R);
          else if (F.enum)
            for (const V of F.enum)
              P(V, R);
          else
            throw new Error(`discriminator: "properties/${C}" must have "const" or "enum"`);
        }
        function P(F, R) {
          if (typeof F != "string" || F in l)
            throw new Error(`discriminator: "${C}" values must be unique strings`);
          l[F] = R;
        }
      }
    }
  };
  return Fn.default = s, Fn;
}
var zn = {};
const hl = "https://json-schema.org/draft/2020-12/schema", ml = "https://json-schema.org/draft/2020-12/schema", gl = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, yl = "meta", $l = "Core and Validation specifications meta-schema", bl = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], vl = ["object", "boolean"], wl = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", _l = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Sl = {
  $schema: hl,
  $id: ml,
  $vocabulary: gl,
  $dynamicAnchor: yl,
  title: $l,
  allOf: bl,
  type: vl,
  $comment: wl,
  properties: _l
}, Cl = "https://json-schema.org/draft/2020-12/schema", kl = "https://json-schema.org/draft/2020-12/meta/applicator", El = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, xl = "meta", Al = "Applicator vocabulary meta-schema", Pl = ["object", "boolean"], Rl = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ml = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Nl = {
  $schema: Cl,
  $id: kl,
  $vocabulary: El,
  $dynamicAnchor: xl,
  title: Al,
  type: Pl,
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
}, od = "https://json-schema.org/draft/2020-12/schema", id = "https://json-schema.org/draft/2020-12/meta/format-annotation", sd = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ad = "meta", cd = "Format vocabulary meta-schema for annotation results", ld = ["object", "boolean"], dd = { format: { type: "string" } }, ud = {
  $schema: od,
  $id: id,
  $vocabulary: sd,
  $dynamicAnchor: ad,
  title: cd,
  type: ld,
  properties: dd
}, fd = "https://json-schema.org/draft/2020-12/schema", pd = "https://json-schema.org/draft/2020-12/meta/meta-data", hd = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, md = "meta", gd = "Meta-data vocabulary meta-schema", yd = ["object", "boolean"], $d = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, bd = {
  $schema: fd,
  $id: pd,
  $vocabulary: hd,
  $dynamicAnchor: md,
  title: gd,
  type: yd,
  properties: $d
}, vd = "https://json-schema.org/draft/2020-12/schema", wd = "https://json-schema.org/draft/2020-12/meta/validation", _d = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Sd = "meta", Cd = "Validation vocabulary meta-schema", kd = ["object", "boolean"], Ed = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, xd = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ad = {
  $schema: vd,
  $id: wd,
  $vocabulary: _d,
  $dynamicAnchor: Sd,
  title: Cd,
  type: kd,
  properties: Ed,
  $defs: xd
};
var Gi;
function Pd() {
  if (Gi) return zn;
  Gi = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = Sl, t = Nl, n = Ll, r = Wl, o = rd, i = ud, s = bd, a = Ad, c = ["/properties"];
  function d(u) {
    return [
      e,
      t,
      n,
      r,
      o,
      y(this, i),
      s,
      y(this, a)
    ].forEach((w) => this.addMetaSchema(w, void 0, !1)), this;
    function y(w, g) {
      return u ? w.$dataMetaSchema(g, c) : g;
    }
  }
  return zn.default = d, zn;
}
var Wi;
function Rd() {
  return Wi || (Wi = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Cc(), r = /* @__PURE__ */ ul(), o = /* @__PURE__ */ pl(), i = /* @__PURE__ */ Pd(), s = "https://json-schema.org/draft/2020-12/schema";
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
        const { $data: g, meta: C } = this.opts;
        C && (i.default.call(this, g), this.refs["http://json-schema.org/schema"] = s);
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
    var u = /* @__PURE__ */ Yr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return u.default;
    } });
    var y = /* @__PURE__ */ tr();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return y.default;
    } });
  })(qt, qt.exports)), qt.exports;
}
var Md = /* @__PURE__ */ Rd();
const Nd = /* @__PURE__ */ cc(Md), Td = "https://json-schema.org/draft/2020-12/schema", Od = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Fd = "gufe-viz payload", zd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Id = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], jd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), eo = {
  $schema: Td,
  $id: Od,
  title: Fd,
  description: zd,
  oneOf: Id,
  $defs: jd
}, Lh = [
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
], to = eo.$id, no = new Nd({ allErrors: !0, strict: !1 });
no.addSchema(eo, to);
const Ji = no.getSchema(to), Dd = Object.entries(eo.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), na = /* @__PURE__ */ new Map();
for (const e of Dd) {
  const t = no.getSchema(`${to}#/$defs/${e}`);
  t && na.set(e, t);
}
const Yi = { valid: !0, issues: [] };
function Xi(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Ld(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? na.get(t) : void 0;
  return n ? n(e) ? Yi : { valid: !1, issues: Xi(n.errors) } : Ji(e) ? Yi : { valid: !1, issues: Xi(Ji.errors) };
}
function qd(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const ro = {
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
function Vd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!ro[t]) return Bd(t);
  const { valid: n, issues: r } = Ld(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: qd(r)
  };
}
function Bd(e) {
  const t = Object.keys(ro).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
class Ud extends Me {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    ic("payload", n, this);
    const r = Vd(n);
    if (r)
      return t.appendChild(Hd(r, n)), {};
    const o = n.type, i = ro[o], s = document.createElement(i);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Hd(e, t) {
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
  const o = Kd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function Kd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ce(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ce(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ne("gufe-view", Ud);
function rr(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const o = N("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;"), i = e.map((s) => {
    const a = N("button", ye.base, s.label);
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
const Gd = parseFloat(te.xl) * 2;
function ra(e, t, n, r = {}) {
  const { remember: o } = r;
  if (o) {
    const y = o.get();
    e.some((w) => w.id === y) && (t = y);
  }
  const i = N("div", "display:flex;min-width:0;"), s = (y) => {
    i.setActive(y), o?.set(y), n(y);
  }, a = rr(e, t, s), c = Dt(e, t, s);
  c.style.display = "none", i.appendChild(a), i.appendChild(c), i.buttons = a, i.setActive = (y) => {
    t = y, a.setActive(y), c.value = y;
  };
  let d = !1;
  i.setCompact = (y) => {
    y !== d && (d = y, a.style.display = d ? "none" : "flex", c.style.display = d ? "" : "none", r.onLayout?.(d));
  };
  let u = () => {
  };
  if (r.fit) {
    const { pane: y, bar: w } = r.fit;
    let g = 0;
    u = Jn(y, (C) => {
      d || (g = w.offsetWidth || g), g && i.setCompact(g > C - Gd);
    });
  }
  return i.cleanup = () => u(), i;
}
function Dt(e, t, n, r) {
  const o = N("select", Ds);
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
function oa(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const i = N("button", ye.base, e);
  i.title = r.title || e, i.setAttribute("aria-pressed", String(o));
  const s = () => {
    i.style.background = o ? ye.bgActive : ye.bg, i.setAttribute("aria-pressed", String(o));
  };
  return i.onclick = () => {
    o = !o, s(), r.remember?.set(o), n(o);
  }, s(), i;
}
const Pe = "gufe-viz:", nt = /* @__PURE__ */ new Map();
let In = null;
function Wd() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Lt() {
  if (In === !1) return null;
  const e = Wd();
  if (!e)
    return In = !1, null;
  try {
    const t = `${Pe}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), In = !0, e;
  } catch {
    return In = !1, null;
  }
}
function Jd(e) {
  const t = Lt();
  if (!t) return nt.get(Pe + e) ?? null;
  try {
    return t.getItem(Pe + e);
  } catch {
    return null;
  }
}
function Yd(e, t) {
  const n = Lt();
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
function or(e, t, n) {
  return {
    key: e,
    get() {
      const r = Jd(e);
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
        Yd(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ut(e, t, n) {
  return or(e, t, (r) => typeof r == "string" && n.includes(r));
}
function ct(e, t) {
  return or(e, t, (n) => typeof n == "boolean");
}
function oo(e, t, n = -1 / 0, r = 1 / 0) {
  return or(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Gn(e, t = "") {
  return or(e, t, (n) => typeof n == "string");
}
function ia() {
  const e = {}, t = Lt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
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
function Xd() {
  const e = {}, t = Lt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(nt.keys());
  for (const r of n) {
    if (!r.startsWith(Pe)) continue;
    const o = t ? t.getItem(r) : nt.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function Zd() {
  const e = Lt();
  if (e)
    for (const t of Object.keys(ia()))
      try {
        e.removeItem(Pe + t);
      } catch {
      }
  nt.clear();
}
const Sr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, io = {
  threeDmol: `https://unpkg.com/3dmol@${Sr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${Sr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${Sr.d3}/+esm`
};
function so(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function sa(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let et = null, gt = null;
function ir() {
  if (gt) return gt;
  const e = so("threeDmol");
  return e ? (gt = e.then((t) => et = t || window.$3Dmol), gt) : (gt = (async () => {
    if (window.$3Dmol) return et = window.$3Dmol;
    if (await sa(io.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return et = window.$3Dmol;
  })(), gt);
}
let yt = null;
function ao() {
  if (yt) return yt;
  const e = so("rdkit");
  return e ? (yt = e.then((t) => window.RDKit = t), yt) : (yt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await sa(io.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), yt);
}
let Qd = null;
function aa() {
  return Qd ??= ao().catch((e) => (console.warn("[gufe-viz] RDKit failed to load:", e instanceof Error ? e.message : String(e)), null));
}
let Cr = null;
function eu() {
  if (!Cr) {
    const e = io.d3;
    Cr = so("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return Cr;
}
function ca(e, t) {
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
    t.hint && !r && (r = !0, ru(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i);
    }
  };
}
function tu(e) {
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
const nu = 1600;
function ru(e, t) {
  const n = N(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, nu);
}
const ou = { min: 0.25, max: 12 }, iu = 150;
function Zi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? iu) - t;
}
function su(e, t = ou) {
  const n = Zi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const i = () => {
    if (!r) return o;
    const s = Zi(e);
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
const au = 2e-3;
function la(e) {
  return Math.exp(-e.deltaY * au);
}
function sr(e, t, n = {}) {
  const r = su(t, n.bounds), o = ca(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (i) => r.zoomBy(la(i))
  });
  return { ...r, cleanup: o.cleanup };
}
function co(e, t = "Reset view") {
  const n = N("button", ye.base, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
let _t = null;
function cu(e) {
  const t = e.getView?.();
  if (!Array.isArray(t) || t.length < 8) return null;
  const n = t.slice(4, 8);
  return n.every((r) => typeof r == "number" && Number.isFinite(r)) ? n : null;
}
function da(e, t) {
  if (!e) return;
  const n = cu(e);
  if (!n) return;
  const r = t?.level();
  _t = {
    rotation: n,
    zoom: typeof r == "number" && Number.isFinite(r) && r > 0 ? r : _t?.zoom ?? 1
  };
}
function ua(e, t) {
  if (!_t || !e) return !1;
  const n = e.getView?.();
  return !Array.isArray(n) || n.length < 8 ? !1 : (e.setView([n[0], n[1], n[2], n[3], ..._t.rotation]), t && Math.abs(_t.zoom - 1) > 1e-9 && t.zoomBy(_t.zoom), e.render(), !0);
}
const kr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220"
}, lu = [
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
], K = [0, 0, 0], du = {
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
}, U = [0.9, 0.9, 0.9], uu = {
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
}, fu = {
  "-1": U,
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
  118: U,
  201: U
}, pu = {
  backgroundColour: [0, 0, 0, 0],
  annotationColour: [0.9, 0.9, 0.9, 1],
  atomNoteColour: [0.9, 0.9, 0.9, 1],
  legendColour: [0.9, 0.9, 0.9, 1],
  symbolColour: [0.9, 0.9, 0.9, 1],
  variableAttachmentColour: [0.3, 0.3, 0.3, 1]
};
let ar = js;
function fa() {
  return (ar ? tt.dark : tt.light).canvas2DBg;
}
function Lr() {
  return (ar ? tt.dark : tt.light).netDepictBg;
}
function hu() {
  return (ar ? tt.dark : tt.light).netDepictCaption;
}
function cr(e) {
  return ar ? {
    ...pu,
    atomColourPalette: e === "mono" ? fu : uu
  } : e === "mono" ? { atomColourPalette: du } : {};
}
const mu = "rdkit", gu = !0, yu = !0, $u = !0, bu = !0, vu = "rdkit", wu = "filled", _u = 0.42, Su = 1.5, Cu = !0, ku = "show", Eu = "mono", xu = 0.51, Au = 0.74, Pu = 1.6, Ru = 1.7, Mu = 5, Nu = 0.3, Tu = "#d62828", Ou = "#d62828", Fu = "#015ab5", zu = !1, Iu = "", ju = "#7c3aed", Du = {
  layout: mu,
  alignPair: gu,
  atomNumbers: yu,
  createdDestroyed: $u,
  modified: bu,
  style: vu,
  circles: wu,
  circleRadius: _u,
  circleStroke: Su,
  boundary: Cu,
  hydrogens: ku,
  elementColors: Eu,
  numScale: xu,
  labelScale: Au,
  bondWidth: Pu,
  markWidth: Ru,
  haloWidth: Mu,
  haloOpacity: Nu,
  destroyedColor: Tu,
  createdColor: Ou,
  modifiedColor: Fu,
  stereo: zu,
  customSpec: Iu,
  customColor: ju
}, Lu = {
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
}, qu = ["rdkit", "coordgen", "conformer"], Vu = ["rdkit", "recolor", "halo"], Bu = ["outline", "filled", "off"], Uu = ["show", "dim", "hide"], Hu = ["cpk", "mono"], Ku = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Gu = /^#[0-9a-fA-F]{6}$/;
function Rt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function We(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Ku[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const $t = (e, t) => typeof e == "boolean" ? e : t, jn = (e, t) => typeof e == "string" && Gu.test(e) ? e : t;
function Wu(e) {
  const t = e && typeof e == "object" ? e : {}, n = Lu;
  return {
    version: 1,
    layout: Rt(t.layout, qu, n.layout),
    alignPair: $t(t.alignPair, n.alignPair),
    style: Rt(t.style, Vu, n.style),
    createdDestroyed: $t(t.createdDestroyed, n.createdDestroyed),
    modified: $t(t.modified, n.modified),
    destroyedColor: jn(t.destroyedColor, n.destroyedColor),
    createdColor: jn(t.createdColor, n.createdColor),
    modifiedColor: jn(t.modifiedColor, n.modifiedColor),
    boundary: $t(t.boundary, n.boundary),
    circles: Rt(t.circles, Bu, n.circles),
    circleRadius: We(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: We(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Rt(t.hydrogens, Uu, n.hydrogens),
    elementColors: Rt(t.elementColors, Hu, n.elementColors),
    atomNumbers: $t(t.atomNumbers, n.atomNumbers),
    stereo: $t(t.stereo, n.stereo),
    numScale: We(t.numScale, "numScale", n.numScale),
    labelScale: We(t.labelScale, "labelScale", n.labelScale),
    bondWidth: We(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: We(t.markWidth, "markWidth", n.markWidth),
    haloWidth: We(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: We(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: jn(t.customColor, n.customColor)
  };
}
const Fe = Wu(Du);
function Qi(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const i = /^([LlRr])[:=](.*)$/.exec(o), s = i ? i[1].toLowerCase() === "l" ? "left" : "right" : "both", a = i ? i[2] : o, c = (u) => {
      s !== "right" && t.add(u), s !== "left" && n.add(u);
    }, d = /^(\d+)-(\d+)$/.exec(a);
    if (d) {
      const u = Math.min(+d[1], +d[2]), y = Math.min(Math.max(+d[1], +d[2]), u + r - 1);
      for (let w = u; w <= y; w++) c(w);
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
function es(e) {
  return `0x${e.replace("#", "")}`;
}
function qr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Ju(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Yu(e, t, n) {
  const r = new Set(t.atoms), o = new Set(Er(e, r, !0));
  return {
    deletions: Er(e, r, n),
    changes: Er(e, new Set(t.elements), n).filter((i) => !o.has(i))
  };
}
function ts(e, t, n, r) {
  const o = Yu(t, n, e.boundary), i = [];
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
function Xu(e) {
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
function Zu(e, t) {
  return e.style === "rdkit" ? "rdkit" : Xu(t) ? e.style : "rdkit";
}
function Qu(e, t, n, r, o, i) {
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
  Object.assign(s, cr(e.elementColors)), o === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, d = {};
  for (const g of n) {
    const C = qr(g.color);
    if (o === "rdkit") for (const p of g.bonds) d[p] = C;
    if (o === "recolor" && e.circles === "off") continue;
    const v = o === "recolor" && e.circles === "filled" ? Ju(C, 0.7) : C;
    for (const p of g.atoms)
      a[p] = v, c[p] = e.circleRadius;
  }
  const u = qr(e.customColor);
  for (const g of r)
    g < i && (a[g] = u, c[g] = e.circleRadius);
  const y = Object.keys(a).map(Number);
  y.length && (s.atoms = y, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const w = Object.keys(d).map(Number);
  return w.length && (s.bonds = w, s.highlightBondColors = d), s;
}
function ef(e, t, n, r) {
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
const tf = "http://www.w3.org/2000/svg";
function pa(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function lo(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const i = o.tagName.toLowerCase();
    (i === "ellipse" || i === "circle" || i === "rect") === n && r.push(o);
  }
  return r;
}
function ha(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function ns(e, t, n, r, o, i) {
  for (const s of r)
    for (const a of pa(e, s)) {
      const c = a.style;
      ha(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (i)
    for (const s of n)
      for (const a of lo(e, s, !1)) a.style.fill = i;
}
function nf(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const i = o.createElementNS(tf, "g");
  i.setAttribute("data-gufe-halo", "1"), i.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of pa(e, a)) {
      if (ha(c)) continue;
      const d = c.cloneNode(!0);
      d.removeAttribute("class"), d.style.fill = "none", d.style.stroke = r, d.style.strokeWidth = `${t.haloWidth}px`, d.style.strokeLinecap = "round", d.style.strokeLinejoin = "round", d.style.strokeOpacity = "1", i.appendChild(d);
    }
  if (!i.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(i, s.nextSibling) : s ? e.appendChild(i) : e.insertBefore(i, e.firstChild);
}
function rf(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of lo(e, i, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function of(e, t, n, r, o) {
  for (const i of n)
    if (!r.has(i))
      for (const s of lo(e, i, !0)) {
        const a = s.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function sf(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const i = o.style;
          n.hydrogens === "hide" ? i.display = "none" : i.opacity = "0.22";
        }
  }
}
function af(e, t, n, r, o, i) {
  if (i !== "rdkit")
    for (const s of r)
      if (i === "recolor") {
        const a = n.circles === "filled";
        ns(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? rf(e, n, s.atoms, o, s.color) : a && s.edgeOnFill && of(e, n, s.atoms, o, s.color);
      } else
        nf(e, n, s.bonds, s.color), ns(e, n, s.atoms, s.bonds, s.color, null);
  sf(e, t, n);
}
const lr = `
`, Vr = "$$$$";
function Br(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(lr);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), i = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let u = 0; u < o; u++) {
    const y = n[4 + u];
    if (y == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(y.substring(0, 10)) || 0,
      parseFloat(y.substring(10, 20)) || 0,
      parseFloat(y.substring(20, 30)) || 0
    ]), a.push(y.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let u = 0; u < (isFinite(i) ? i : 0); u++) {
    const y = n[4 + o + u];
    if (y == null) break;
    const w = parseInt(y.substring(0, 3), 10), g = parseInt(y.substring(3, 6), 10), C = parseInt(y.substring(6, 9), 10);
    !isFinite(w) || !isFinite(g) || c.push([w - 1, g - 1, isFinite(C) ? C : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function cf(e) {
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
  return r.push("M  END"), r.join(lr);
}
const lf = (e) => `${cf(e)}${lr}${Vr}`, ma = (e) => e.indexOf(Vr) >= 0 ? e : `${e}${lr}${Vr}`;
function uo(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function fo(e, t, n, r, o, i) {
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
        const u = {}, y = {};
        for (const w of a.atoms)
          u[w] = a.color, y[w] = a.radius;
        d.atoms = [...a.atoms], d.highlightAtomColors = u, d.highlightAtomRadii = y;
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
function ga(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const rs = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Ur = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, vt = (e) => e in Ur, os = 400, xr = "position:absolute;inset:0;min-width:0;min-height:0;";
class df extends Me {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", i = n.smiles, s = n.total_charge, a = N("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = N(
      "div",
      `${xr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${fa()};`
    );
    a.appendChild(c);
    const d = Hs();
    d.wrap.style.cssText = xr, a.appendChild(d.wrap);
    const u = N(
      "div",
      `${xr}overflow:auto;padding:16px 20px;background:${M.panelBg};color:${M.textPrimary};font-size:${ee.body};`
    );
    a.appendChild(u);
    const y = r ? uo(r) : null, w = [
      ["Name", o || Je, !1],
      ["SMILES", i || Je, !0],
      ["Charge", s == null ? Je : String(s), !1],
      ["Atoms", y ? String(y.atoms) : Je, !1],
      ["Bonds", y ? String(y.bonds) : Je, !1]
    ], g = N("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${te.xl} 20px;align-items:baseline;`);
    u.appendChild(g);
    for (const [R, V, q] of w) {
      g.appendChild(
        N(
          "div",
          `font-size:${ee.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${M.textMuted2};`,
          R
        )
      );
      const H = N(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${M.textPrimary}` + (q ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${ee.small};` : ""),
        V
      );
      H.title = V, g.appendChild(H);
    }
    const C = Jr(t), v = N("div", zr, o || "Unnamed molecule");
    C && a.appendChild(v);
    const p = ut(
      "small-molecule.mode",
      "2d",
      rs.map((R) => R.id)
    ), $ = ct("small-molecule.spin", !1);
    let h = p.get(), k = $.get(), _ = null, l = null;
    const f = () => {
      try {
        _?.spin(k && vt(h) ? "y" : !1);
      } catch {
      }
    }, m = (R) => {
      h = R, c.style.visibility = h === "2d" ? "visible" : "hidden", d.wrap.style.visibility = vt(h) ? "visible" : "hidden", u.style.visibility = h === "info" ? "visible" : "hidden", v.style.display = h === "info" || !C ? "none" : "block", A.disabled = !vt(h), A.style.opacity = vt(h) ? "1" : "0.5", vt(h) && _ && (_.setStyle({}, Ur[h]), _.resize(), _.render()), f();
    }, E = N("div", Us), A = oa(
      "Spin",
      k,
      (R) => {
        k = R, f();
      },
      { title: "Toggle continuous rotation", remember: $ }
    ), P = (R) => {
      R ? E.insertBefore(A, E.firstChild) : F.buttons.insertBefore(A, F.buttons.lastElementChild);
    }, F = ra(rs, h, (R) => m(R), {
      remember: p,
      onLayout: P,
      fit: { pane: a, bar: E }
    });
    return E.appendChild(F), P(!1), a.appendChild(E), m(h), !r || !r.trim() ? (c.appendChild(ge("No molecule provided")), d.container.appendChild(ge("No molecule provided")), { cleanup: () => F.cleanup() }) : (c.appendChild(ge("Loading 2D depiction...")), ao().then((R) => {
      const V = cr("cpk"), q = fo(R, r, os, Fe.layout, void 0, V);
      q ? ga(c, q, os) : c.replaceChildren(ge("Failed to parse molecule", !0));
    }).catch((R) => {
      c.replaceChildren(ge(`RDKit failed to load: ${$e(R)}`, !0));
    }), d.container.appendChild(ge("Loading 3D viewer...")), ir().then(() => {
      d.container.replaceChildren(), _ = et.createViewer(d.container, { backgroundColor: jt.viewer }), _.addModel(ma(r), "sdf"), _.setStyle({}, Ur[vt(h) ? h : "stick"]), _.zoomTo(), _.render(), l = sr(d.container, _), ua(_, l), f();
    }).catch((R) => {
      d.container.replaceChildren(ge(`3D render failed: ${$e(R)}`, !0));
    }), {
      onResize() {
        _ && (_.resize(), _.render());
      },
      cleanup() {
        if (F.cleanup(), da(_, l), l?.cleanup(), l = null, !!_) {
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
Ne("gufe-small-molecule", df);
const ya = ["HOH", "WAT", "SOL", "TIP3"], is = { hetflag: !1 }, uf = { hetflag: !0 }, ff = { resn: ya }, De = {
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
function $a(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, i = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const d = c.slice(0, 6);
    if (d === "ENDMDL") break;
    if (d !== "ATOM  " && d !== "HETATM") continue;
    r++, d === "HETATM" && o++;
    const u = c.slice(17, 20).trim(), y = c.slice(21, 22).trim() || "_", w = c.slice(22, 26).trim(), g = c.slice(26, 27).trim();
    ya.indexOf(u) !== -1 && i++, t.add(y), n.add(`${y}|${w}${g}|${u}`);
    const C = parseInt(w, 10);
    isNaN(C) || (C < s && (s = C), C > a && (a = C));
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
function ba(e) {
  return [
    `${kt(e.chains)} chains`,
    `${kt(e.residues)} residues`,
    `${kt(e.atoms)} atoms`,
    `${kt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${kt(e.waters)} water)` : "")
  ];
}
function pf(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Hr(e, t, n, r, o) {
  const i = r || (() => {
  }), s = pf(t.color, n), a = (c) => o ? { ...c, ...o } : c;
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle(a({}), {}), e.setStyle(
    a(is),
    t.rep === "stick" ? { stick: { radius: De.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: De.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    a(uf),
    t.hetero ? {
      stick: { radius: De.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: De.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    a(ff),
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
          et.SurfaceType.VDW,
          { opacity: De.surfaceOpacity, ...s },
          a(is)
        )
      ).then(() => {
        i(null), e.render();
      }).catch((c) => i(`Surface failed: ${$e(c)}`, "error"));
    } catch (c) {
      i(`Surface failed: ${$e(c)}`, "error");
    }
  }, 30);
}
function hf(e, t) {
  e.setStyle(t, {
    stick: { radius: De.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: De.ligand.sphereScale, colorscheme: "Jmol" }
  });
}
const ss = { min: 0.2, max: 0.8 }, mf = 5;
function va(e, t, n, r = {}) {
  const o = r.min ?? ss.min, i = r.max ?? ss.max, s = N(
    "div",
    `flex:0 0 ${mf}px;align-self:stretch;touch-action:none;background:${M.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (C) => {
    a = C, e.style.flexDirection = a ? "column" : "row", s.style.cursor = a ? "row-resize" : "col-resize", s.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, d = () => {
    const C = e.getBoundingClientRect();
    return C.height > C.width;
  };
  let u = Math.min(i, Math.max(o, r.remember?.get() ?? 0.5));
  const y = () => {
    t.style.flex = `1 1 ${(u * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - u) * 100).toFixed(2)}%`;
  };
  y(), c(d()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const v = d();
    v !== a && (c(v), r.onResize?.(u));
  }).observe(e);
  let w = !1;
  s.addEventListener("pointerdown", (C) => {
    w = !0, s.setPointerCapture(C.pointerId), C.preventDefault();
  }), s.addEventListener("pointermove", (C) => {
    if (!w) return;
    const v = e.getBoundingClientRect(), p = a ? v.height : v.width;
    if (p <= 0) return;
    const $ = a ? C.clientY - v.top : C.clientX - v.left;
    u = Math.min(i, Math.max(o, $ / p)), y();
  });
  const g = (C) => {
    w && (w = !1, s.releasePointerCapture(C.pointerId), r.remember?.set(u), r.onResize?.(u));
  };
  return s.addEventListener("pointerup", g), s.addEventListener("pointercancel", g), s;
}
function po(e, t) {
  e.style.setProperty(Xe.min, t ? "0" : Bn.min), e.style.setProperty(Xe.max, t ? "none" : Bn.max), e.style.setProperty(Xe.ruleX, t ? "0" : "1px"), e.style.setProperty(Xe.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? Ba : "";
}
const gf = !1, ho = ".menuOpen";
function yf() {
  const e = N("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const $f = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: yf
}, bf = $f.openFreeEnergy;
function mo(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? gf, o = !1;
  const i = N("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;"), s = N("button", `${ye.base}display:inline-flex;align-items:center;gap:${te.md};padding:${te.sm} ${te.lg};`);
  s.appendChild(bf()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, i.appendChild(t()), n.extras?.(i)), i.style.display = r ? "flex" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, c = (u) => {
    u !== r && (r = u, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  s.onclick = () => c(!r), s.onmouseover = () => {
    s.style.background = r ? ye.bgActive : ye.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ye.bgActive : ye.bg;
  };
  const d = "toggleEl" in e ? e : null;
  return d && (d.toggleEl.style.marginRight = "2px"), (d ? d.toggleEl : e).appendChild(s), a(), {
    panel: i,
    isOpen: () => r,
    setOpen: c
  };
}
const wa = "https://framejs.app", _a = 1e4;
function vf(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const wf = "/gufe-dev-bundle.js";
function _f() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= _a ? e : null;
}
async function Sf() {
  const e = _f();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(wf);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < _a ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Cf() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function kf(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Pe)};`,
    `  const menuOpen = ${JSON.stringify(ho)};`,
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
function Ef(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...kf(n),
    "// Built by gufe-viz's share button from a generated page. The bundle below is",
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
function xf(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, i] of Object.entries(Xd()))
    o.endsWith(ho) || (r[o] = i);
  return { settings: r, views: t };
}
const Af = (e) => `${wa}/j/${e}`, Pf = (e) => `${wa}/j/${e}.json`;
async function Rf(e, t, n, r) {
  await fetch(Pf(e), {
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
function Mf() {
  const e = N("span", "display:inline-flex;flex:0 0 auto;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="6" fill="#fbfaf7"/><rect x="6.4" y="6.4" width="19.2" height="19.2" rx="3.6" fill="none" stroke="#1f2edb" stroke-width="2.2"/></svg>', e;
}
function go(e) {
  const t = N(
    "div",
    `display:flex;flex-direction:column;gap:${te.md};padding-top:${te.lg};border-top:1px solid ${M.splitBorder};`
  ), n = N(
    "button",
    `${ye.base}width:100%;display:inline-flex;align-items:center;justify-content:center;gap:${te.md};`
  );
  n.appendChild(Mf()), n.appendChild(N("span", "", "Share to the web")), n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? M.errorFg : M.textMuted2;
  }, i = (s, a) => {
    const c = N("a", `color:${M.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(N("div", `padding-top:${te.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const s = vf(e);
    if (!s || s.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = xf(s), d = window.open("", "_blank"), u = Cf(), w = String(a.type || "gufe-viz"), g = `${w}. Shared from alchemy-viz`, C = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), Sf().then((v) => {
      if (!v) {
        d?.close(), C(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Rf(u, Ef(v.js, a, c), w, g).then(() => {
        C();
        const p = Af(u);
        d && (d.location.href = p), i(p, v.note);
      });
    }).catch((v) => {
      C(), d?.close(), o(`Upload failed: ${v instanceof Error ? v.message : String(v)}`, !0);
    });
  }, t.appendChild(
    N(
      "div",
      `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
const as = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], cs = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
], Nf = 460, ls = /* @__PURE__ */ new Map();
function Sa(e) {
  const t = ut(
    "protein.representation",
    "cartoon",
    as.map((m) => m.id)
  ), n = ut(
    "protein.color",
    "chain",
    cs.map((m) => m.id)
  ), r = ct("protein.waters", e.waters), o = ct("protein.hetero", !0), i = ct("protein.spin", !1), s = {
    rep: t.get(),
    color: n.get(),
    waters: r.get(),
    hetero: o.get(),
    spin: i.get()
  };
  let a = null, c = null;
  const d = N("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
  e.host.appendChild(d);
  const u = N("div", Ga);
  d.appendChild(u);
  const y = ({ label: m, controls: E }) => {
    const A = N("div", "display:flex;flex-direction:column;gap:6px;min-width:0;flex-shrink:0;");
    A.appendChild(
      N(
        "span",
        `font-size:${ee.tiny};font-weight:${he.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted};`,
        m
      )
    );
    for (const P of E) A.appendChild(P);
    return A;
  }, w = N("div", `display:flex;flex-direction:column;gap:2px;font-size:${ee.small};color:${M.textMuted};`), g = y({ label: "Contents", controls: [w] });
  g.style.display = "none";
  const v = mo(u, () => {
    const m = N("div", `${Vs}padding-top:${Wa};`), E = rr(
      as,
      s.rep,
      (V) => {
        s.rep = V, e.restyle();
      },
      t
    );
    m.appendChild(y({ label: "Style", controls: [E] }));
    const A = Dt(
      cs,
      s.color,
      (V) => {
        s.color = V, e.restyle();
      },
      n
    );
    A.style.cssText += "width:100%;box-sizing:border-box;", m.appendChild(y({ label: "Color", controls: [A] }));
    const P = N("div", "display:flex;flex-wrap:wrap;gap:4px;"), F = [
      ["waters", "Waters", "Show water molecules", r, () => e.restyle()],
      ["hetero", "Hetero", e.heteroTitle, o, () => e.restyle()],
      ["spin", "Spin", "Rotate the view continuously", i, () => a?.spin(s.spin ? "y" : !1)]
    ];
    for (const [V, q, H, X, oe] of F)
      P.appendChild(
        oa(
          q,
          s[V],
          (Z) => {
            s[V] = Z, oe();
          },
          { title: H, remember: X }
        )
      );
    m.appendChild(y({ label: "Show", controls: [P] }));
    const R = co(() => e.reset ? e.reset() : c?.reset());
    return R.style.cssText += "width:100%;box-sizing:border-box;", m.appendChild(y({ label: "Camera", controls: [...e.camera?.() ?? [], R] })), m.appendChild(g), m;
  }, {
    label: e.menuLabel,
    // Where one reader had got to rather than a preference about structures -
    // hence the `.menuOpen` key, which is what tells the two apart. Shared
    // between the views for the same reason the controls are.
    remember: ct(`protein${ho}`, !1),
    // Toggling changes how wide the viewer is, and 3Dmol sizes its canvas once:
    // without this the molecule is drawn at the old width, stretched.
    onToggle: () => {
      a?.resize(), a?.render();
    },
    extras: go
  }), p = Jr(e.element) ? e.title || e.fallbackTitle : "";
  p && u.appendChild(
    N("div", `${Ka}pointer-events:none;font-size:${ee.heading};font-weight:${he.bold};`, p)
  ), d.appendChild(v.panel);
  const $ = Hs();
  d.appendChild($.wrap);
  let h = null;
  const k = Jn(d, (m) => {
    const E = m > 0 && m < Nf;
    E !== h && (h = E, d.style.flexDirection = E ? "column" : "row", po(v.panel, E), a?.resize(), a?.render());
  }), _ = N(
    "div",
    `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${ee.body};z-index:20;display:none;pointer-events:none;`
  );
  $.wrap.appendChild(_);
  const l = (m, E) => {
    if (m == null) {
      _.style.display = "none";
      return;
    }
    _.textContent = m, _.style.display = "block";
    const A = E === "error";
    _.style.background = A ? M.warnBg : M.toolbarBg, _.style.color = A ? M.warnFg : M.textMuted, _.style.border = `1px solid ${A ? M.warnBorder : M.toolbarBorder}`;
  }, f = () => {
    if (!e.cameraKey || !a) return;
    const m = a.getView?.();
    Array.isArray(m) && m.length >= 4 && m.every((E) => Number.isFinite(E)) && ls.set(e.cameraKey, m.slice());
  };
  return {
    opts: s,
    pane: $,
    menu: v,
    showStatus: l,
    setStats: (m) => {
      w.replaceChildren(...m.map((E) => N("div", "overflow-wrap:anywhere;", E))), g.style.display = m.length ? "" : "none";
    },
    restoreCamera: () => {
      const m = e.cameraKey ? ls.get(e.cameraKey) : void 0;
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
class Tf extends Me {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb;
    let o = null;
    function i() {
      const a = s.viewer();
      a && Hr(a, s.opts, o, s.showStatus);
    }
    const s = Sa({
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
      o = $a(r), s.setStats(ba(o));
    } catch (a) {
      s.showStatus(`PDB parse error: ${$e(a)}`, "error");
    }
    return s.showStatus("Loading 3D viewer..."), ir().then(() => {
      const a = et.createViewer(s.pane.container, { backgroundColor: jt.viewer });
      s.setViewer(a), a.addModel(r, "pdb"), Hr(a, s.opts, o, s.showStatus), s.restoreCamera() || a.zoomTo(), a.spin(s.opts.spin ? "y" : !1), a.render(), s.setInteraction(sr(s.pane.container, a));
    }).catch((a) => {
      s.showStatus(`Failed to render structure: ${$e(a)}`, "error");
    }), s.handle;
  }
}
Ne("gufe-protein", Tf);
const Ca = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(Ca, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function ds(e, t) {
  const n = document.createElementNS(Ca, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const yo = 3, Of = 24;
function ka(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), i = Math.max(i, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: i + t, maxY: s + n };
}
const Ff = { min: 0.15, max: 5 }, zf = 1e-9;
function Ea(e, t, n) {
  const r = n.margin ?? Of, o = n.zoom ?? Ff;
  let i = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${i})`), n.onTransform?.(i, s, a);
  }, d = () => {
    const q = e.getBoundingClientRect();
    return {
      width: q.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: q.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, u = (q, H, X) => Math.min(1, H / (q.maxX - q.minX + r * 2), X / (q.maxY - q.minY + r * 2)), y = () => {
    const q = n.bounds();
    if (!q) return o.min;
    const { width: H, height: X } = d();
    return Math.min(o.min, u(q, H, X));
  }, w = (q) => Math.min(o.max, Math.max(y(), i * q)), g = () => {
    i = 1, s = 0, a = 0;
    const q = n.bounds();
    if (!q) {
      c();
      return;
    }
    const { width: H, height: X } = d();
    i = u(q, H, X), s = H / 2 - (q.minX + q.maxX) / 2 * i, a = X / 2 - (q.minY + q.maxY) / 2 * i, c();
  }, v = ca(e, {
    onZoom: (q) => {
      const H = e.getBoundingClientRect(), X = q.clientX - H.left, oe = q.clientY - H.top, Z = w(la(q)), ie = Z / i;
      return s = X - (X - s) * ie, a = oe - (oe - a) * ie, i = Z, c(), Math.abs(ie - 1) > zf;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), p = /* @__PURE__ */ new Map();
  let $ = null, h = null, k = !1, _ = null;
  const l = (q) => ({
    x: q.clientX - s,
    y: q.clientY - a,
    from: { x: q.clientX, y: q.clientY }
  }), f = (q) => {
    q.pointerType === "touch" && p.size > 1 || (h = l(q), k = !1);
  }, m = (q) => {
    $ || (_ && q.pointerType === "touch" && (h = { x: _.x - s, y: _.y - a, from: _ }, _ = null), h && (Math.hypot(q.clientX - h.from.x, q.clientY - h.from.y) > yo && (k = !0), s = q.clientX - h.x, a = q.clientY - h.y, c()));
  }, E = () => {
    h = null;
  };
  e.addEventListener("pointerdown", f), e.addEventListener("pointermove", m), e.addEventListener("pointerup", E), e.addEventListener("pointercancel", E), e.addEventListener("pointerleave", E);
  const A = () => {
    const [q, H] = [...p.values()];
    return { cx: (q.x + H.x) / 2, cy: (q.y + H.y) / 2, span: Math.max(1, Math.hypot(q.x - H.x, q.y - H.y)) };
  }, P = (q) => {
    if (q.pointerType === "touch") {
      if (p.set(q.pointerId, { x: q.clientX, y: q.clientY }), p.size !== 2) {
        $ = null;
        return;
      }
      $ = A(), h = null, k = !0;
    }
  }, F = (q) => {
    if (q.pointerType !== "touch" || !p.has(q.pointerId) || (p.set(q.pointerId, { x: q.clientX, y: q.clientY }), !$ || p.size !== 2)) return;
    q.preventDefault(), q.stopPropagation();
    const H = A(), X = e.getBoundingClientRect(), oe = w(H.span / $.span), Z = oe / i;
    s = H.cx - X.left - ($.cx - X.left - s) * Z, a = H.cy - X.top - ($.cy - X.top - a) * Z, i = oe, $ = H, c();
  }, R = (q) => {
    if (q.pointerType !== "touch") return;
    if (p.delete(q.pointerId), p.size === 2) {
      $ = A();
      return;
    }
    $ = null;
    const [H] = [...p.values()];
    _ = p.size === 1 && H ? { ...H } : null;
  };
  e.addEventListener("pointerdown", P, !0), e.addEventListener("pointermove", F, { capture: !0, passive: !1 }), e.addEventListener("pointerup", R, !0), e.addEventListener("pointercancel", R, !0);
  const V = tu(e);
  return {
    fit: g,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: g,
    centreOn(q, H, X = 1) {
      const { width: oe, height: Z } = d();
      i = Math.max(i, X), s = oe / 2 - q * i, a = Z / 2 - H * i, c();
    },
    transform: () => ({ scale: i, tx: s, ty: a }),
    wasPan: () => k,
    gesturing: () => p.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(q, H, X) {
      i = q, s = H, a = X, c();
    },
    cleanup() {
      v.cleanup(), V.cleanup(), e.removeEventListener("pointerdown", f), e.removeEventListener("pointermove", m), e.removeEventListener("pointerup", E), e.removeEventListener("pointercancel", E), e.removeEventListener("pointerleave", E), e.removeEventListener("pointerdown", P, !0), e.removeEventListener("pointermove", F, { capture: !0 }), e.removeEventListener("pointerup", R, !0), e.removeEventListener("pointercancel", R, !0);
    }
  };
}
const If = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function xa(e) {
  const t = { ...e };
  for (const n of If) delete t[n];
  return t;
}
async function Aa(e) {
  let t;
  try {
    if (t = await eu(), typeof t?.forceSimulation != "function") return !1;
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
  return Kr(e, t, /* @__PURE__ */ new Set()), t;
}
function Kr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Kr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const i = o["gufe-key"];
      typeof i == "string" && i && !t.has(i) && t.set(i, o);
    }
  for (const o of Object.values(e)) Kr(o, t, n);
}
function Ke(e, t) {
  return t ? e.get(t) : void 0;
}
function Re(e, t, n) {
  const r = Ke(e, t);
  return r?.type === n ? r : void 0;
}
function $o(e, t) {
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
function Pa(e) {
  const t = [];
  let n = 0;
  for (const s of e.keys) {
    const a = Re(e.registry, s, e.nodeType);
    if (!a) {
      n++;
      continue;
    }
    t.push({ ...a, x: 0, y: 0 });
  }
  const r = new Map(t.map((s) => [s["gufe-key"], s])), o = [];
  let i = 0;
  for (const s of e.edges) {
    const [a, c] = e.ends(s), d = a === void 0 ? void 0 : r.get(a), u = c === void 0 ? void 0 : r.get(c);
    if (!d || !u) {
      i++;
      continue;
    }
    o.push({ ...s, index: o.length, from: d, to: u });
  }
  return { nodes: t, edges: o, unresolved: n, dangling: i };
}
const jf = 8, Df = 64, Lf = () => new Promise((e) => setTimeout(e, 0));
function Gr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function qf(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const i = o.get_substruct_matches(t), s = JSON.parse(i || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const d = c.atoms;
      if (Array.isArray(d))
        for (const u of d) typeof u == "number" && a.add(u);
    }
    return [...a].sort((c, d) => c - d);
  } catch (i) {
    return console.warn("[gufe-viz] SMARTS match threw -", $e(i)), null;
  } finally {
    Gr(o);
  }
}
function Ra(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const d = r.get(a);
    if (d) return { status: "ok", matched: d, unreadable: 0 };
    const u = await e();
    if (c !== o) return { status: "superseded" };
    if (!u) return { status: "unsupported" };
    if (!u.get_qmol) return { status: "unsupported" };
    let y = null;
    try {
      y = u.get_qmol(a);
    } catch {
      y = null;
    }
    if (!y) return { status: "invalid" };
    if (!y.get_substruct_matches)
      return Gr(y), { status: "unsupported" };
    const w = /* @__PURE__ */ new Map();
    let g = 0;
    try {
      let C = performance.now(), v = 0;
      for (let p = 0; p < t.length; p++) {
        const $ = t[p] ? qf(u, y, t[p], n) : null;
        if ($ ? $.length && w.set(p, $) : g++, !(++v < Df && performance.now() - C < jf)) {
          if (await Lf(), c !== o) return { status: "superseded" };
          v = 0, C = performance.now();
        }
      }
    } finally {
      Gr(y);
    }
    return r.set(a, w), { status: "ok", matched: w, unreadable: g };
  }, cancel: () => void ++o };
}
const Vf = 250;
function Bf(e) {
  const t = N("div", "display:flex;flex-direction:column;gap:8px;"), n = N("input", Ls);
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
    e.remember.set(n.value), window.clearTimeout(s), s = window.setTimeout(() => i(n.value), Vf);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && i(n.value);
    }
  };
}
const Ma = "Cmd/Ctrl-click to select several.";
function Uf(e, t, n, r, o) {
  const i = (s) => o === "keys" ? s["gufe-key"] : rt(s);
  return r === "nodes" ? e.filter((s) => n.has(s["gufe-key"])).map(i).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${i(s.from)}, ${i(s.to)}`).join(`
`);
}
function Hf(e, t) {
  navigator.clipboard?.writeText(e).catch(() => us(e, t)), navigator.clipboard || us(e, t);
}
function us(e, t) {
  const n = N("textarea", `width:100%;height:80px;font-size:${ee.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Kf(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = N("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Gf(e) {
  const { words: t } = e, n = ut(e.setting, "names", ["names", "keys"]), r = N("div", "display:flex;flex-direction:column;gap:6px;"), o = N("div", `display:flex;align-items:center;gap:6px;font-size:${ee.small};color:${M.textMuted};`);
  o.appendChild(N("span", "", "copy as"));
  const i = Dt(
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
  const s = N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`), a = (u) => {
    s.textContent = u;
  }, c = N("div", "display:flex;gap:4px;"), d = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [u, y, w] of d) {
    const g = N("button", `${ye.base}flex:1;`, y.button);
    g.title = w, g.onclick = (C) => {
      const v = i.value, p = Uf(e.nodes, e.edges, e.selected, u, v);
      if (!p) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : u === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Ma}` : "Nothing to copy."
        );
        return;
      }
      const $ = p.split(`
`).length;
      C.shiftKey ? (Kf(p, `selected-${y.plural}.txt`), a(`Saved ${$} ${y.plural} to a file.`)) : (Hf(p, r), a(
        u === "edges" ? `Copied ${$} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(g);
  }
  return r.appendChild(c), r.appendChild(s), r.appendChild(N("div", `font-size:${ee.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Wf = `display:flex;align-items:center;gap:${te.md};padding:5px ${te.lg};border-radius:${te.md};text-align:left;font-family:inherit;font-size:${ee.small};cursor:pointer;width:100%;min-width:0;color:${M.textPrimary};`;
function Na(e) {
  const t = Gn(`${e.namespace}.query`), n = N("div", Vs), r = N("input", Ls);
  n.appendChild(r);
  const o = Bf({
    placeholder: e.smarts.placeholder,
    label: e.smarts.label,
    remember: Gn(`${e.namespace}.smarts`),
    run: (u) => e.match(u),
    describe: (u) => e.smarts.describe(u)
  });
  n.appendChild(o.element);
  for (const u of e.filters?.(() => d()) ?? []) n.appendChild(u);
  const i = N("div", `font-size:${ee.small};color:${M.textMuted2};`);
  n.appendChild(i);
  const s = N("div", Ua);
  n.appendChild(s), n.appendChild(N("div", `font-size:${ee.tiny};line-height:1.5;color:${M.textMuted2};`, Ma));
  const a = Gf({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: e.export,
    setting: `${e.namespace}.exportAs`
  });
  n.appendChild(a.box);
  const c = N("button", `${ye.base}width:100%;`, "Clear selection");
  c.onclick = () => {
    e.selected.clear(), d(), e.refresh();
  }, n.appendChild(c);
  function d() {
    a.clearNote(), s.replaceChildren();
    const u = e.nodes.map((y, w) => ({ node: y, index: w })).filter(({ node: y, index: w }) => e.shows(y, w));
    i.textContent = `${u.length} of ${e.nodes.length} ${e.noun}`;
    for (const { node: y, index: w } of u) {
      const g = y["gufe-key"], C = e.selected.has(g), v = N(
        "button",
        `${Wf}border:1px solid ${C ? M.cardBorderActive : M.cardBorder};background:${C ? M.cardBgActive : M.cardBg};`
      ), p = e.row(y, w);
      p.before && v.appendChild(p.before);
      const $ = N("span", "flex:1;min-width:0;overflow-wrap:anywhere;", p.name);
      $.title = p.title, v.appendChild($), v.onclick = (h) => {
        h.shiftKey || h.metaKey || h.ctrlKey ? e.selected.has(g) ? e.selected.delete(g) : e.selected.add(g) : (e.selected.clear(), e.selected.add(g), e.focus(w)), d(), e.refresh();
      }, s.appendChild(v);
    }
    u.length || s.appendChild(N("div", `font-size:${ee.small};padding:${te.lg};color:${M.textMuted2};`, "Nothing matches."));
  }
  return r.type = "search", r.placeholder = e.search.placeholder, r.value = t.get(), e.query.text = r.value, r.setAttribute("aria-label", e.search.label), r.oninput = () => {
    e.query.text = r.value, t.set(r.value), d(), e.refresh();
  }, d(), e.mounted?.(d), o.apply(), n;
}
function Ta(e, t) {
  return e.find((n) => t >= n.from) ?? e[e.length - 1];
}
function Jf(e, t) {
  return e[Math.min(e.indexOf(t) + 1, e.length - 1)];
}
const Ze = 200, zt = { node: 0.12, edge: 0.06 };
function at(e) {
  return e > 0 ? `+${e}` : String(e);
}
function fs(e, t) {
  return (t.total_charge ?? 0) - (e.total_charge ?? 0);
}
const Yf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), Xf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), Zf = (e) => e === "none" || e === "transparent" ? !0 : /^#[0-9a-f]{8}$/.test(e) ? e.slice(7) === "00" : /^#[0-9a-f]{4}$/.test(e) ? e[4] === "0" : !1, Qf = (e) => {
  const t = Yf(e);
  return Xf.has(t) || Zf(t);
};
function Oa(e, t, n, r) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!o || o.nodeName.toLowerCase() === "parsererror") return !1;
  e.setAttribute("transform", `translate(${-r / 2},${-r / 2}) scale(${r / n})`);
  let i = 0;
  for (const s of Array.from(o.childNodes)) {
    if (s.nodeType !== 1) continue;
    const a = s.nodeName.toLowerCase();
    a === "defs" || a === "metadata" || a === "title" || a === "rect" && Qf(s) || (e.appendChild(document.importNode(s, !0)), i++);
  }
  return i ? !0 : (e.replaceChildren(), !1);
}
const ep = 1e-6;
function Dn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function ps(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function tp(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function hs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const i = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = i[s][0], c = i[s][1], d = t[a * 3 + c];
      if (Math.abs(d) < 1e-14) continue;
      const u = t[a * 3 + a], y = t[c * 3 + c], w = (y - u) / (2 * d);
      let g;
      Math.abs(w) > 1e10 ? g = 1 / (2 * w) : g = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
      const C = 1 / Math.sqrt(1 + g * g), v = g * C;
      t[a * 3 + a] = u - g * d, t[c * 3 + c] = y + g * d, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let p = 0; p < 3; p++)
        if (p !== a && p !== c) {
          const $ = t[p * 3 + a], h = t[p * 3 + c];
          t[p * 3 + a] = C * $ - v * h, t[a * 3 + p] = t[p * 3 + a], t[p * 3 + c] = v * $ + C * h, t[c * 3 + p] = t[p * 3 + c];
        }
      for (let p = 0; p < 3; p++) {
        const $ = n[p * 3 + a], h = n[p * 3 + c];
        n[p * 3 + a] = C * $ - v * h, n[p * 3 + c] = v * $ + C * h;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function np(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let _ = 0; _ < n; _++)
    r[0] += e[_][0], r[1] += e[_][1], r[2] += e[_][2], o[0] += t[_][0], o[1] += t[_][1], o[2] += t[_][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let _ = 0; _ < n; _++) {
    const l = e[_][0] - r[0], f = e[_][1] - r[1], m = e[_][2] - r[2], E = t[_][0] - o[0], A = t[_][1] - o[1], P = t[_][2] - o[2];
    i[0] += l * E, i[1] += l * A, i[2] += l * P, i[3] += f * E, i[4] += f * A, i[5] += f * P, i[6] += m * E, i[7] += m * A, i[8] += m * P;
  }
  const s = ps(i), a = Dn(s, i), c = Dn(i, s);
  let d = hs(a), u = hs(c);
  function y(_) {
    const l = [0, 1, 2].sort((m, E) => _.values[E] - _.values[m]), f = new Array(9);
    for (let m = 0; m < 3; m++) {
      const E = l[m];
      f[m] = _.vectors[E], f[3 + m] = _.vectors[3 + E], f[6 + m] = _.vectors[6 + E];
    }
    return {
      values: [_.values[l[0]], _.values[l[1]], _.values[l[2]]],
      vectors: f
    };
  }
  d = y(d), u = y(u);
  const w = d.vectors, g = u.vectors;
  for (let _ = 0; _ < 3; _++) {
    const l = w[_], f = w[3 + _], m = w[6 + _], E = i[0] * l + i[1] * f + i[2] * m, A = i[3] * l + i[4] * f + i[5] * m, P = i[6] * l + i[7] * f + i[8] * m, F = g[_], R = g[3 + _], V = g[6 + _];
    E * F + A * R + P * V < 0 && (g[_] = -F, g[3 + _] = -R, g[6 + _] = -V);
  }
  const C = ps(w);
  let v = Dn(g, C);
  tp(v) < 0 && (g[2] = -g[2], g[5] = -g[5], g[8] = -g[8], v = Dn(g, C));
  const p = v[0] * o[0] + v[1] * o[1] + v[2] * o[2], $ = v[3] * o[0] + v[4] * o[1] + v[5] * o[2], h = v[6] * o[0] + v[7] * o[1] + v[8] * o[2], k = d.values[1] > ep * d.values[0];
  return { R: v, t: [r[0] - p, r[1] - $, r[2] - h], determined: k };
}
function rp(e, t, n) {
  const r = e[0], o = e[1], i = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * i + n[0],
    t[3] * r + t[4] * o + t[5] * i + n[1],
    t[6] * r + t[7] * o + t[8] * i + n[2]
  ];
}
const ms = `
`, Ar = 4;
function gs(e, t, n) {
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
function op(e, t, n) {
  const r = [], o = [];
  for (const [u, y] of n) {
    const w = e[y], g = t[u];
    !w || !g || (r.push(w), o.push(g));
  }
  if (r.length < 2) return null;
  const i = (u) => {
    let y = 0, w = 0;
    for (const g of u)
      y += g[0], w += g[1];
    return [y / u.length, w / u.length];
  }, s = i(r), a = i(o);
  let c = null, d = -1 / 0;
  for (const u of [!1, !0]) {
    let y = 0, w = 0;
    for (let h = 0; h < r.length; h++) {
      const k = (u ? -1 : 1) * (r[h][0] - s[0]), _ = r[h][1] - s[1], l = o[h][0] - a[0], f = o[h][1] - a[1];
      y += k * f - _ * l, w += k * l + _ * f;
    }
    const g = Math.hypot(y, w);
    if (g <= d) continue;
    d = g;
    const C = Math.atan2(y, w), v = Math.cos(C), p = Math.sin(C), $ = (u ? -1 : 1) * s[0];
    c = {
      cos: v,
      sin: p,
      mirror: u,
      tx: a[0] - (v * $ - p * s[1]),
      ty: a[1] - (p * $ + v * s[1])
    };
  }
  return c;
}
function ip(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function sp(e, t, n) {
  const r = uo(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(ms);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let i = 0; i < r.atoms; i++) {
    const s = o[Ar + i], a = t[i];
    if (s == null || !a) return e;
    o[Ar + i] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = Ar + r.atoms + a, d = o[c];
      if (d == null) break;
      const u = parseInt(d.substring(9, 12), 10);
      u !== 1 && u !== 6 || (o[c] = d.substring(0, 9) + String(u === 1 ? 6 : 1).padStart(3) + d.substring(12));
    }
  return o.join(ms);
}
function ap(e, t, n) {
  try {
    const r = (s) => Br(s).coords.map((a) => [a[0], a[1]]), o = r(t), i = op(o, r(e), n);
    return i ? sp(
      t,
      o.map((s) => ip(i, s)),
      i.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", $e(r)), t;
  }
}
function cp(e, t, n, r, o) {
  const i = gs(e, t, r), s = gs(e, n, r);
  return !o || r === "conformer" ? { left: i, right: s } : { left: i, right: ap(i, s, o) };
}
const lp = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, dp = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function up() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Pr = up() ? lp : dp, ys = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], Rr = 420, fp = {
  mapped: null,
  element: Fe.modifiedColor,
  uniqueA: Fe.destroyedColor,
  uniqueB: Fe.createdColor
}, pp = 132, Ue = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, Mr = { gap: 2.5, minLiftFraction: 0.6 }, hp = 24, It = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function $s(e, t, n) {
  const r = [], o = [], i = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? o.push(s) : i.push(s);
  }
  return { atoms: r, elements: o, mapped: i };
}
function mp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function gp(e, t, n) {
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
function Fa(e, t) {
  const n = Re(t, e.componentA, "SmallMoleculeComponentViz"), r = Re(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: $o(t, [e.componentA, e.componentB]) };
}
function yp(e, t, n) {
  const r = [], o = [];
  for (const [s, a] of n) {
    const c = e.coords[s], d = t.coords[a];
    c && d && (r.push(c), o.push(d));
  }
  const i = np(r, o);
  return i?.determined ? { ...t, coords: t.coords.map((s) => rp(s, i.R, i.t)) } : t;
}
function bs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function $p(e, t) {
  const n = bs(e), r = bs(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const i = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[o] - r.min[o] + Mr.gap, a = Mr.minLiftFraction * i + Mr.gap;
  return { axis: o, lift: Math.max(s, a) };
}
function bp(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let i = 1 / 0;
    for (const s of o)
      s[0] < i && (i = s[0]), s[0] - i > n && (n = s[0] - i);
  }
  const r = Math.round(n * 10) / 10;
  return (r > It.minSpread ? r : It.minSpread) * It.spreadFactor;
}
function vp(e, t) {
  const n = lu, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), i = Math.floor(o), s = Math.min(i + 1, n.length - 1), a = o - i;
  let c = "0x";
  for (let d = 0; d < 3; d++) {
    const u = (w) => parseInt(w.slice(1 + d * 2, 3 + d * 2), 16), y = Math.round(u(n[i]) + (u(n[s]) - u(n[i])) * a);
    c += y.toString(16).padStart(2, "0");
  }
  return c;
}
function wp(e, t) {
  const n = Re(t, e.componentA, "SmallMoleculeComponentViz"), r = Re(t, e.componentB, "SmallMoleculeComponentViz");
  if (!n || !r)
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: !1
    };
  const o = rt(n), i = rt(r), s = mp(e);
  let a, c;
  try {
    a = Br(n.sdf, o), c = Br(r.sdf, i);
  } catch (u) {
    return { problem: `Could not read a molecule: ${$e(u)}`, isError: !0 };
  }
  c = yp(a, c, s);
  const d = /* @__PURE__ */ new Map();
  for (const [u, y] of s) d.set(y, u);
  return {
    pair: {
      from: n,
      to: r,
      nameA: o,
      nameB: i,
      pairs: s,
      flipped: d,
      molA: a,
      molB: c,
      uniquesA: $s(s, a.symbols, c.symbols),
      uniquesB: $s(d, c.symbols, a.symbols)
    }
  };
}
class _p extends Me {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = St(n), o = wp(n, r);
    if ("problem" in o)
      return t.appendChild(ge(o.problem, o.isError)), {};
    const { from: i, to: s, nameA: a, nameB: c, pairs: d, molA: u, molB: y, uniquesA: w, uniquesB: g } = o.pair, C = Jr(t), v = N("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(v);
    const p = N("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    v.appendChild(p);
    const $ = ut("atom-mapping.mode", "plain", ys.map((j) => j.id));
    let h = $.get();
    const k = N("div", Us), _ = ra(
      ys,
      h,
      (j) => {
        h = j, D();
      },
      { remember: $, fit: { pane: v, bar: k } }
    );
    k.appendChild(_), v.appendChild(k);
    let l = [], f = 0, m = !0, E = !1;
    const A = () => {
      f && cancelAnimationFrame(f), f = 0, E && da(l[0]?.viewer ?? null, l[0]?.interaction ?? null), E = !1;
      for (const j of l) {
        j.interaction?.cleanup();
        try {
          j.viewer?.clear();
        } catch {
        }
      }
      l = [], p.replaceChildren();
    }, P = (j) => {
      const O = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), b = N("div", "flex:1;position:relative;min-height:0;");
      b.dataset.gufeViewer = "", O.appendChild(b), C && O.appendChild(N("div", zr, j)), p.appendChild(O);
      const S = { container: b, viewer: null, interaction: null };
      return l.push(S), S;
    }, F = () => {
      if (l.length < 2) return;
      const j = l.map(() => "");
      let O = !1;
      const b = () => {
        if (m) {
          if (!O)
            for (let S = 0; S < l.length; S++) {
              const I = l[S].viewer;
              if (!I) continue;
              const z = JSON.stringify(I.getView());
              if (z !== j[S]) {
                O = !0;
                for (let L = 0; L < l.length; L++)
                  L !== S && l[L].viewer && (l[L].viewer.setView(I.getView()), l[L].viewer.render()), j[L] = z;
                O = !1;
                break;
              }
            }
          f = requestAnimationFrame(b);
        }
      };
      f = requestAnimationFrame(b);
    }, R = (j, O) => {
      const b = et.createViewer(j.container, { backgroundColor: jt.viewer });
      for (const { mol: S } of O) b.addModel(lf(S), "sdf");
      return j.viewer = b, b;
    }, V = (j) => {
      j.viewer && (j.interaction = sr(j.container, j.viewer));
    }, q = (j) => {
      ua(j.viewer, j.interaction), E = !0;
    }, H = () => {
      for (const j of [u, y]) {
        const O = P(j.name), b = R(O, [{ mol: j }]);
        b.setStyle(
          {},
          { stick: { radius: Ue.stick, colorscheme: "Jmol" }, sphere: { scale: Ue.sphere, colorscheme: "Jmol" } }
        ), b.zoomTo(), b.render(), V(O), q(O);
      }
      F();
    }, X = () => {
      const j = Fe, O = Qi(j.customSpec), b = [
        { mol: u, uniques: w, side: "left", custom: O.left },
        { mol: y, uniques: g, side: "right", custom: O.right }
      ];
      for (const S of b) {
        const I = P(S.mol.name), z = R(I, [{ mol: S.mol }]);
        z.setStyle(
          {},
          { stick: { radius: Ue.stick, color: Pr.core }, sphere: { scale: Ue.sphere, color: Pr.core } }
        );
        const L = (G, W) => {
          z.addStyle(
            { serial: G },
            {
              stick: { radius: Ue.markStick, color: es(W) },
              sphere: { scale: Ue.markSphere, color: es(W) }
            }
          );
        };
        for (const G of ts(j, S.mol, S.uniques, S.side))
          for (const W of G.atoms) L(W, G.color);
        for (const G of S.custom)
          G < S.mol.symbols.length && L(G, j.customColor);
        z.zoomTo(), z.render(), V(I), q(I);
      }
      F();
    }, oe = () => {
      const j = P(`${a} (left), both overlaid (middle), ${c} (right)`), O = bp(u.coords, y.coords), b = (T, B) => ({
        ...T,
        coords: T.coords.map(([Y, Q, re]) => [Y + B, Q, re])
      }), S = b(u, -O), I = b(y, O), z = R(j, [{ mol: S }, { mol: I }, { mol: u }, { mol: y }]);
      z.setStyle({}, { stick: {} });
      const L = Array.from(d);
      L.forEach(([T, B], Y) => {
        const Q = S.coords[T], re = I.coords[B];
        if (!Q || !re) return;
        const fe = vp(Y, L.length);
        for (const [ne, de, ue] of [Q, re])
          z.addSphere({
            center: { x: ne, y: de, z: ue },
            radius: It.sphereRadius,
            color: fe,
            alpha: It.sphereAlpha
          });
      }), z.zoomTo();
      const { clientWidth: G, clientHeight: W } = j.container, x = G - 2 * hp;
      x > 0 && x < W && z.zoom(x / W), z.render(), V(j);
    }, Z = () => {
      const j = P(`${a} to ${c}  (${d.size} mapped pairs)`), { axis: O, lift: b } = $p(u.coords, y.coords), S = {
        ...y,
        coords: y.coords.map((L) => {
          const G = [L[0], L[1], L[2]];
          return G[O] += b, G;
        })
      }, I = R(j, [{ mol: u }, { mol: S }]), z = {
        stick: { radius: Ue.stick, colorscheme: "Jmol" },
        sphere: { scale: Ue.pairSphere, colorscheme: "Jmol" }
      };
      I.setStyle({ model: 0 }, z), I.setStyle({ model: 1 }, z);
      for (const [L, G] of d) {
        const W = u.coords[L], x = S.coords[G];
        !W || !x || I.addCylinder({
          start: { x: W[0], y: W[1], z: W[2] },
          end: { x: x[0], y: x[1], z: x[2] },
          radius: Ue.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Pr.pairLine
        });
      }
      I.zoomTo(), O === 2 ? I.rotate(90, "x") : O === 0 && I.rotate(-90, "z"), I.render(), V(j);
    }, ie = () => {
      const j = Fe, O = Qi(j.customSpec), S = [
        { mol: u, uniques: w, side: "left", custom: O.left },
        { mol: y, uniques: g, side: "right", custom: O.right }
      ].map((I) => {
        const z = N("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), L = N(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${fa()};`
        );
        return L.appendChild(ge("Loading 2D depiction...")), z.appendChild(L), C && z.appendChild(N("div", zr, I.mol.name)), p.appendChild(z), { box: L, side: I };
      });
      ao().then((I) => {
        const z = Zu(j, I), L = cp(I, i.sdf, s.sdf, j.layout, j.alignPair ? d : null);
        for (const { box: G, side: W } of S) {
          const x = ts(j, W.mol, W.uniques, W.side), T = Qu(
            j,
            Rr,
            x,
            W.custom,
            z,
            W.mol.symbols.length
          ), B = ef(I, W.side === "left" ? L.left : L.right, Rr, T);
          if (G.replaceChildren(), !B) {
            G.appendChild(ge("Failed to parse molecule", !0));
            continue;
          }
          ga(G, B, Rr);
          const Y = G.querySelector("svg");
          Y && af(Y, W.mol, j, x, W.custom, z);
        }
      }).catch((I) => {
        for (const { box: z } of S)
          z.replaceChildren(ge(`RDKit failed to load: ${$e(I)}`, !0));
      });
    }, J = () => {
      const j = N(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      p.appendChild(j);
      const O = N("div", "display:flex;flex-direction:column;gap:2px;");
      O.appendChild(
        N(
          "div",
          `font-size:${ee.title};font-weight:${he.bold};color:${Le.title};`,
          n.name || `${a} to ${c}`
        )
      ), j.appendChild(O);
      const b = gp(d, u.symbols, y.symbols), S = N("div", Oe.row), I = [];
      let z = null;
      const L = (ne, de, ue, me) => {
        const ke = N("button", `${Oe.plain}${Oe.button}`);
        ke.type = "button", ke.appendChild(Qe(ne, String(de), me)), ke.onclick = () => {
          z = z === ue ? null : ue, re();
        }, I.push({ button: ke, kinds: ue }), S.appendChild(ke);
      }, G = (ne, de) => {
        const ue = N("span", Oe.plain);
        ue.appendChild(Qe(ne, de)), S.appendChild(ue);
      };
      L("mapped atoms", d.size, ["mapped", "element"]), L("element changes", w.elements.length, ["element"], Fe.modifiedColor), L(`unique to ${a}`, w.atoms.length, ["uniqueA"], Fe.destroyedColor), L(`unique to ${c}`, g.atoms.length, ["uniqueB"], Fe.createdColor), G(`atoms in ${a}`, String(u.symbols.length)), G(`atoms in ${c}`, String(y.symbols.length)), G("score", n.score == null ? Je : n.score.toFixed(3)), j.appendChild(S), j.appendChild(N("div", Ir, "Correspondence"));
      const W = N("div", jr);
      j.appendChild(W);
      const x = N(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${pp}px,1fr));gap:${te.xs} ${te.md};font-family:${ee.mono};font-size:${ee.small};color:${Le.primary};`
      );
      j.appendChild(x);
      const T = String(Math.max(u.symbols.length, y.symbols.length, 1) - 1).length, B = (ne, de) => `${(ne == null ? Je : String(ne)).padStart(T)} ${de.padEnd(2)}`, Y = (ne) => {
        if (ne.kind === "uniqueA") return `${a} atom ${ne.a} ${ne.symbolA} maps to nothing`;
        if (ne.kind === "uniqueB") return `${c} atom ${ne.b} ${ne.symbolB} maps to nothing`;
        const de = ne.kind === "element" ? ", an element change" : "";
        return `${a} atom ${ne.a} ${ne.symbolA} maps to ${c} atom ${ne.b} ${ne.symbolB}${de}`;
      }, Q = (ne) => {
        const de = N(
          "div",
          `white-space:pre;padding:${te.xs} ${te.md};border-radius:${we.sm};background:${jt.card};border-left:3px solid ${fp[ne.kind] ?? "transparent"};`,
          `${B(ne.a, ne.symbolA)} -> ${B(ne.b, ne.symbolB)}`
        );
        return de.title = Y(ne), de.dataset.gufeRelation = ne.kind, de;
      }, re = () => {
        const ne = z, de = ne ? b.filter((ue) => ne.includes(ue.kind)) : b;
        x.replaceChildren(...de.map(Q)), de.length || x.appendChild(
          N("div", `${jr}grid-column:1/-1;`, z ? "No atoms of that kind." : "This mapping has no atoms.")
        ), W.textContent = (d.size ? "" : "This mapping relates no atoms at all. ") + `${a} -> ${c}, by atom index and element` + (z ? "; click the chip again for all of them" : "");
        for (const ue of I) {
          const me = ue.kinds === z;
          ue.button.style.cssText = `${Oe.plain}${me ? Oe.active : Oe.button}`, ue.button.setAttribute("aria-pressed", String(me)), ue.button.title = me ? "Show every atom" : "Show only these atoms";
        }
      };
      re();
      const fe = Object.entries(n.annotations ?? {}).filter(([ne]) => ne !== "score");
      if (fe.length) {
        j.appendChild(N("div", Ir, "Annotations"));
        const ne = N("div", `${Xa}color:${Le.faint};`);
        for (const [de, ue] of fe)
          ne.appendChild(N("div", "", `${de}: ${String(ue)}`));
        j.appendChild(ne);
      }
    }, D = () => {
      if (A(), h === "info") {
        J();
        return;
      }
      if (h === "2d") {
        ie();
        return;
      }
      p.appendChild(ge("Loading 3D viewer...")), ir().then(() => {
        m && (p.replaceChildren(), h === "colored" ? X() : h === "openfe" ? oe() : h === "lines" ? Z() : H());
      }).catch((j) => {
        p.replaceChildren(ge(`3D render failed: ${$e(j)}`, !0));
      });
    };
    return D(), {
      onResize() {
        for (const j of l)
          j.viewer && (j.viewer.resize(), j.viewer.render());
      },
      cleanup() {
        m = !1, _.cleanup(), A();
      }
    };
  }
}
Ne("gufe-atom-mapping", _p);
const vs = ["Force-directed", "Circular", "Radial"], Sp = "ligand-network", Cp = "Click a ligand or an edge to see it.";
function kp(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Ep(e) {
  return xa(e);
}
const ws = (e) => Math.round(e * 100) / 100;
function xp(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, i = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: i };
}
function Ap(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Mt = { initial: 0.58, min: 0.25, max: 0.8 }, Ae = 38, _s = 1.5, Nr = {
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
}, Pp = "6 4", Ss = 200, Rp = 2, Mp = Math.SQRT2 * (Ae - Rp), Np = 14, Tp = 18, Se = {
  fontSize: 11,
  below: Ae + 12,
  minFontSize: 7,
  insideWidth: (Ae - 6) * 2
}, Ft = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, Cs = 1.5, Op = 6.5, Fp = 0.9, zp = 14, Tr = { size: 8, clearance: 8 }, Ip = { fontSize: 10 }, jp = 0.4, Dp = qr(M.netMatchAtom), Nt = { padding: 4, opacity: 0.95 }, za = [
  { id: "structures", from: 0.4, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.25, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Lp = (e) => Ta(za, e), qp = (e) => Jf(za, e), Vp = 1.8, ks = 2 * Ae + 68, xe = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: ks,
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
  collisionPadding: ks / 2 - Ae,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Bp(e) {
  const t = N("div", Ya);
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
function Up(e) {
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
      refX: Ae + Tr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: Tr.size,
      markerHeight: Tr.size,
      orient: "auto"
    });
    return i.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(i), o;
  };
}
function Hp(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Kp(e) {
  const [t, n] = M.netEdgeRamp.map(Hp), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((i, s) => Math.round(i + (n[s] - i) * r)).join(",")})`;
}
const Ye = rt;
function Ia(e, t) {
  return t ? Ye(e).toLowerCase().includes(t) || (e.smiles ?? "").toLowerCase().includes(t) || e["gufe-key"].toLowerCase().includes(t) : !0;
}
function Gp(e, t, n, r, o) {
  const i = r.trim().toLowerCase(), s = n.size > 0 || i.length > 0;
  if (!s && o <= 0) return null;
  const a = /* @__PURE__ */ new Set();
  for (const d of e) {
    const u = d["gufe-key"];
    (!s || n.has(u) || i.length > 0 && Ia(d, i)) && a.add(u);
  }
  const c = /* @__PURE__ */ new Set();
  return t.forEach((d, u) => {
    (d.score ?? 0) < o || !a.has(d.from["gufe-key"]) || !a.has(d.to["gufe-key"]) || c.add(u);
  }), { nodes: a, edges: c };
}
function Wp(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = cr("cpk"), o = [], i = (v) => (e.matched().get(v) ?? []).join(","), s = (v, p) => {
    if (t.has(p) || n.has(p)) return;
    const $ = e.nodes[p], h = e.matched().get(p), k = $.sdf && fo(
      v,
      $.sdf,
      Ss,
      Fe.layout,
      h && { atoms: h, color: Dp, radius: jp },
      r
    );
    if (!k) {
      n.add(p);
      return;
    }
    if (!Oa(e.depictionGroups[p], k, Ss, Mp)) {
      n.add(p);
      return;
    }
    t.add(p), o[p] = i(p);
  }, a = () => {
    for (const v of [...t])
      o[v] !== i(v) && (e.depictionGroups[v].replaceChildren(), t.delete(v));
  }, c = [], d = (v, p) => {
    if (c[v]) return c[v];
    p.setAttribute("font-size", String(Se.fontSize));
    let $ = 0;
    try {
      $ = p.getBBox().width;
    } catch {
      return Se.fontSize;
    }
    if (!$) return Se.fontSize;
    const h = Se.fontSize * Se.insideWidth / $;
    return c[v] = Math.max(Se.minFontSize, Math.min(Se.fontSize, h)), c[v];
  }, u = [], y = (v) => {
    const p = e.captionPlates[v];
    if (u[v] === Se.below) {
      p.setAttribute("display", "inline");
      return;
    }
    let $ = null;
    try {
      $ = e.captions[v].getBBox();
    } catch {
      $ = null;
    }
    if (!$?.width) {
      p.setAttribute("display", "none");
      return;
    }
    p.setAttribute("x", String($.x - Ft.captionPadX)), p.setAttribute("y", String($.y - Ft.captionPadY)), p.setAttribute("width", String($.width + Ft.captionPadX * 2)), p.setAttribute("height", String($.height + Ft.captionPadY * 2)), p.setAttribute("display", "inline"), u[v] = Se.below;
  }, w = (v, p) => {
    const $ = p.structure && !t.has(v) ? qp(p) : p;
    e.depictionGroups[v].setAttribute("display", $.structure ? "inline" : "none");
    const h = e.plates[v];
    h.setAttribute("display", $.structure ? "inline" : "none");
    const k = e.matched().has(v);
    h.setAttribute("stroke", k ? M.netMatchStroke : M.netNodeStroke);
    const _ = e.circles[v];
    _.setAttribute("fill", $.disc ? k ? M.netMatchFill : M.netNodeFill : "none"), _.setAttribute("stroke", $.disc ? k ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[v].setAttribute("display", $.initials ? "inline" : "none");
    const l = e.charges[v];
    if (l) {
      const A = !$.structure, P = Ae * Nr.at;
      l.setAttribute("x", String(P)), l.setAttribute("y", String(-P)), l.setAttribute("font-size", String(A ? Nr.bigFontSize : Nr.fontSize)), l.setAttribute("font-weight", A ? he.bold : he.normal);
    }
    const f = e.captions[v], m = $.name === "below";
    if (f.setAttribute("fill", k ? M.netMatchStroke : m ? hu() : M.netNodeCaption), f.setAttribute("display", $.name === "none" ? "none" : "inline"), m || e.captionPlates[v].setAttribute("display", "none"), $.name === "none") return;
    const E = $.name === "inside";
    f.setAttribute("y", E ? "0" : String(Se.below)), f.setAttribute("dominant-baseline", E ? "middle" : "auto"), f.setAttribute("font-size", String(E ? d(v, f) : Se.fontSize)), m && y(v);
  };
  let g = null;
  return { apply: (v, p, $) => {
    const h = Lp(v);
    g = h, e.stage.setAttribute("data-detail", h.id), e.edgeLabels.setAttribute("display", h.edgeScores ? "inline" : "none");
    for (let f = 0; f < e.nodes.length; f++) w(f, h);
    if (!h.structure) return;
    const { width: k, height: _ } = e.viewport(), l = [];
    e.nodes.forEach((f, m) => {
      if (t.has(m) || n.has(m)) return;
      const E = f.x * v + p, A = f.y * v + $;
      E < -Ze || A < -Ze || E > k + Ze || A > _ + Ze || l.push(m);
    }), l.length && e.rdkit().then((f) => {
      if (!(!f || g !== h))
        for (const m of l)
          s(f, m), w(m, h);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: a };
}
function Jp(e) {
  const t = oo("ligand-network.minScore", 0, 0, 1);
  return Na({
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
      const n = N("div", `display:flex;align-items:center;gap:${te.lg};font-size:${ee.small};color:${M.textMuted};`), r = N("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), o = N("input", "flex:1;");
      return o.type = "range", o.min = "0", o.max = "1", o.step = "0.01", o.value = String(t.get()), e.filter.minScore = Number(o.value), o.setAttribute("aria-label", "Hide mappings scoring below this"), o.oninput = () => {
        e.filter.minScore = Number(o.value), r.textContent = e.filter.minScore.toFixed(2), t.set(e.filter.minScore), e.refresh();
      }, n.appendChild(N("span", "", "score >=")), n.appendChild(o), n.appendChild(r), [n];
    },
    shows: (n) => Ia(n, e.query.text.trim().toLowerCase()),
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
class Yp extends Me {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: o, edges: i, unresolved: s, dangling: a } = Pa({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: n.edges ?? [],
      ends: (S) => [S.componentA, S.componentB]
    }), c = Yn(n.name || "Ligand network");
    c.statsEl.appendChild(Qe("ligands", String(o.length))), c.statsEl.appendChild(Qe("mappings", String(i.length))), t.appendChild(c);
    const d = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(d);
    const u = /* @__PURE__ */ new Set(), y = { minScore: 0 }, w = { text: "" }, g = () => aa(), C = Ra(
      g,
      o.map((S) => S.sdf ?? "")
    );
    let v = /* @__PURE__ */ new Map();
    const p = async (S) => {
      const I = await C.run(S);
      return I.status === "superseded" || (v = I.status === "ok" ? I.matched : /* @__PURE__ */ new Map(), O()), I;
    }, $ = mo(
      c,
      () => Jp({
        nodes: o,
        edges: i,
        selected: u,
        filter: y,
        query: w,
        refresh: () => j(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (S) => {
          F?.focusOn(S), D({ kind: "ligand", index: S });
        },
        match: (S) => p(S)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => b(),
        remember: ct("ligand-network.menuOpen", !1),
        extras: go
      }
    );
    d.appendChild($.panel);
    let h = () => {
    };
    const k = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), _ = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`);
    d.appendChild(k), d.appendChild(
      va(d, k, _, {
        min: Mt.min,
        max: Mt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: oo("ligand-network.canvasShare", Mt.initial, Mt.min, Mt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => h(),
        onOrient: (S) => po($.panel, S)
      })
    ), d.appendChild(_);
    const l = N("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    k.appendChild(l);
    const f = ut("ligand-network.layout", "Force-directed", vs), m = this.#n(
      (S) => b(S),
      () => F?.reset(),
      f,
      i.some((S) => fs(S.from, S.to) !== 0)
    );
    k.appendChild(m.bar);
    const E = this.#e(_, r);
    if (!o.length)
      return l.appendChild(
        ge(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), E.message("Nothing to show."), {};
    s && lt(
      l,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && lt(l, `${a} mapping${a === 1 ? "" : "s"} name a ligand this network does not contain`);
    const A = g(), P = Bp(l);
    let F = null;
    const R = xp(sc(Sp), o.length);
    let V = R && { scale: R.scale, tx: R.tx, ty: R.ty }, q = i.length ? { kind: "edge", index: 0 } : null;
    if (R && R.selected >= 0) {
      const S = R.selectedKind ?? "edge";
      R.selected < (S === "ligand" ? o.length : i.length) && (q = { kind: S, index: R.selected });
    }
    const H = () => F?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let X = f.get(), oe = !1, Z = !0, ie = 0;
    const J = () => {
      if (!q) {
        E.message(i.length ? Cp : "Click a ligand to see it.");
        return;
      }
      q.kind === "edge" ? E.showMapping(i[q.index]) : E.showLigand(o[q.index]);
    }, D = (S) => {
      q = S, J(), F?.setSelected(q);
    }, j = () => {
      const S = Gp(o, i, u, w.text, y.minScore);
      F?.setEmphasis(S?.nodes ?? null, S?.edges ?? null);
    }, O = () => F?.setMatches(v), b = (S = X) => {
      const I = F && S === X ? F.transform() : null, z = ++ie;
      X = S, F?.cleanup(), F = null, l.querySelectorAll("svg").forEach((x) => x.remove());
      const L = l.clientWidth || 800, G = l.clientHeight || 600;
      Xp(o, L, G, X, i), R && Ap(o, R.nodes);
      const W = () => {
        if (!Z || z !== ie) return;
        const x = this.#t(l, o, i, L, G, D, A, P);
        F = x, x.setSelected(q), j(), O();
        const T = V ?? I;
        T ? (x.setTransform(T.scale, T.tx, T.ty), V = null) : x.fit();
      };
      if (X !== "Force-directed" || oe || R) {
        W();
        return;
      }
      Zp(o, i, L, G).then((x) => {
        if (!(!Z || z !== ie)) {
          if (x) {
            W();
            return;
          }
          oe = !0, m.picker.value = "Circular", lt(l, "d3 could not be loaded - showing the circular layout instead"), b("Circular");
        }
      }, W);
    };
    return h = () => b(), b(), J(), {
      onResize: () => b(),
      cleanup: () => {
        Z = !1, C.cancel(), P.remove(), F?.cleanup(), F = null, E.cleanup();
      },
      viewState: () => ({
        nodes: o.map((S) => [ws(S.x), ws(S.y)]),
        ...H(),
        selected: q ? q.index : -1,
        selectedKind: q ? q.kind : "edge"
      })
    };
  }
  #n(t, n, r, o) {
    const i = N(
      "div",
      Bs.bottom
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
    const a = Dt(
      vs.map((c) => ({ id: c, label: c })),
      r.get(),
      (c) => t(c),
      r
    );
    return i.appendChild(a), i.appendChild(co(n, "Reset pan and zoom")), { bar: i, picker: a };
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
  /**
   * The pane beside the canvas: whatever is selected, drawn by the view that
   * draws that kind of thing.
   *
   * One `<gufe-view>`, created once and re-pointed, which is what the alchemical
   * network already did and what this used to do differently. Two reasons the
   * nested dispatcher is the better of the two: clicking along a row of edges is
   * then an update rather than a rebuild, so a mapping's own 3D viewers are not
   * torn down and rebuilt on every click; and which element draws a payload is a
   * question `VIEW_TAGS` already answers, so naming `gufe-atom-mapping` and
   * `gufe-small-molecule` here was a second copy of the dispatch table that
   * could fall out of step with it.
   */
  #e(t, n) {
    const r = N("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;";
    const i = (a) => r.replaceChildren(ge(a)), s = (a) => {
      o.payload = a, o.parentNode !== r && r.replaceChildren(o);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (a) => s(Fa(kp(a), n)),
      showLigand: (a) => s(Ep(a)),
      message: i,
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => o.remove()
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
    }), u = ce("g");
    d.appendChild(u), t.appendChild(d);
    const y = ce("defs"), w = Up(y);
    d.appendChild(y);
    const g = [], C = ce("g"), v = ce("g"), p = ce("g", { "pointer-events": "none" }), $ = ce("g");
    u.append(C, v, p, $);
    for (const H of r) {
      const X = Kp(H.score), oe = Cs + (H.score ?? 0.5) * (Op - Cs), Z = ce("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": oe + Nt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), ie = fs(H.from, H.to), J = ce("line", {
        stroke: X,
        "stroke-width": oe,
        "stroke-opacity": Fp,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${w(X)})`,
        "pointer-events": "none",
        ...ie ? { "stroke-dasharray": Pp } : {}
      }), D = ce("line", { stroke: "transparent", "stroke-width": zp, style: "cursor:pointer;" });
      D.addEventListener("click", (b) => {
        b.stopPropagation(), s({ kind: "edge", index: H.index });
      }), D.addEventListener("mousemove", (b) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Ce(Ye(H.from))} -&gt; ${Ce(Ye(H.to))}</div>` + (H.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${H.score.toFixed(3)}</b></div>`) + (ie ? `<div style="margin-top:4px;">net charge <b>${Ce(at(ie))}</b> <span style="color:${M.textMuted2};">(${Ce(at(H.from.total_charge ?? 0))} to ${Ce(at(H.to.total_charge ?? 0))})</span></div>` : "") + `<div style="margin-top:4px;font-size:${ee.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          b.offsetX,
          b.offsetY
        );
      }), D.addEventListener("mouseleave", () => c.hide()), g.push(Z), C.append(Z, J), v.appendChild(D);
      const j = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ip.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      j.textContent = H.score == null ? "" : H.score.toFixed(2);
      const O = ce("g", { class: "gufe-edge-label" });
      O.appendChild(j), p.appendChild(O);
    }
    const h = [], k = [], _ = [], l = [], f = [], m = [], E = [], A = [], P = n.map((H) => {
      const X = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      X.addEventListener("mousemove", (b) => {
        c.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Ce(Ye(H))}</div>` + (H.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ce(H.smiles)}</div>` : "") + (H.total_charge ? `<div style="margin-top:3px;">formal charge <b>${Ce(at(H.total_charge))}</b></div>` : "") + `<div style="margin-top:3px;font-size:${ee.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${Ce(H["gufe-key"])}</div><div style="margin-top:4px;font-size:${ee.tiny};color:${M.textMuted2};">Click to see the ligand</div>`,
          b.offsetX,
          b.offsetY
        );
      }), X.addEventListener("mouseleave", () => c.hide());
      const oe = ce("circle", {
        class: "gufe-node-halo",
        r: Ae + Nt.padding,
        fill: "none",
        stroke: M.netHaloColor,
        "stroke-width": Nt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      X.appendChild(oe), f.push(oe);
      const Z = ce("circle", {
        class: "gufe-node-disc",
        r: Ae,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": _s,
        "pointer-events": "all"
      });
      X.appendChild(Z), k.push(Z);
      const ie = ce("circle", {
        class: "gufe-node-plate",
        r: Ae,
        fill: Lr(),
        stroke: M.netNodeStroke,
        "stroke-width": _s,
        display: "none",
        "pointer-events": "none"
      });
      X.appendChild(ie), _.push(ie);
      const J = ce("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      X.appendChild(J), h.push(J);
      const D = ce("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Tp,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      if (D.textContent = Ye(H).slice(0, 2).toUpperCase(), X.appendChild(D), m.push(D), H.total_charge) {
        const b = ce("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: M.badgeFg,
          "pointer-events": "none"
        });
        b.textContent = at(H.total_charge), X.appendChild(b), A.push(b);
      } else
        A.push(null);
      const j = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Se.below,
        "font-size": Se.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      j.textContent = Ln(Ye(H), Np), j.setAttribute("display", "none"), E.push(j);
      const O = ce("rect", {
        class: "gufe-node-caption-plate",
        rx: Ft.captionRadius,
        fill: Lr(),
        display: "none",
        "pointer-events": "none"
      });
      return l.push(O), X.appendChild(O), X.appendChild(j), $.appendChild(X), X;
    }), F = () => {
      r.forEach((H, X) => {
        for (const Z of [g[X], C.children[X * 2 + 1], v.children[X]]) {
          const ie = Z;
          ie.setAttribute("x1", String(H.from.x)), ie.setAttribute("y1", String(H.from.y)), ie.setAttribute("x2", String(H.to.x)), ie.setAttribute("y2", String(H.to.y));
        }
        p.children[X].setAttribute(
          "transform",
          `translate(${(H.from.x + H.to.x) / 2},${(H.from.y + H.to.y) / 2 - 8})`
        );
      }), n.forEach((H, X) => P[X].setAttribute("transform", `translate(${H.x},${H.y})`));
    };
    F();
    let R = /* @__PURE__ */ new Map();
    const V = Wp({
      nodes: n,
      circles: k,
      plates: _,
      captionPlates: l,
      matched: () => R,
      captions: E,
      initials: m,
      charges: A,
      depictionGroups: h,
      edgeLabels: p,
      stage: d,
      rdkit: () => a,
      viewport: () => ({ width: o, height: i })
    }), q = this.#r(
      d,
      u,
      n,
      P,
      F,
      V.apply,
      (H) => s({ kind: "ligand", index: H })
    );
    return {
      setSelected(H) {
        const X = H?.kind === "edge" ? H.index : -1, oe = H?.kind === "ligand" ? H.index : -1;
        g.forEach((Z, ie) => Z.setAttribute("opacity", ie === X ? String(Nt.opacity) : "0")), f.forEach((Z, ie) => Z.setAttribute("opacity", ie === oe ? String(Nt.opacity) : "0"));
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
      setMatches(H) {
        R = H, V.forget();
        const { scale: X, tx: oe, ty: Z } = q.transform();
        V.apply(X, oe, Z);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(H, X) {
        P.forEach((oe, Z) => {
          const ie = !H || H.has(n[Z]["gufe-key"]);
          oe.setAttribute("opacity", ie ? "1" : String(zt.node));
        }), r.forEach((oe, Z) => {
          const ie = !X || X.has(Z), J = ie ? "0.9" : String(zt.edge);
          C.children[Z * 2 + 1].setAttribute("stroke-opacity", J), p.children[Z].setAttribute("opacity", ie ? "1" : String(zt.edge));
        });
      },
      focusOn(H) {
        const X = n[H];
        X && q.centreOn(X.x, X.y);
      },
      setDetail: V.apply,
      depictionsDrawn: () => V.drawn(),
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
    const c = Ea(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => ka(r, Ae),
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((d, u) => {
      let y = null, w = !1;
      d.addEventListener("pointerdown", (C) => {
        C.stopPropagation();
        const { scale: v } = c.transform();
        y = { x: C.clientX - r[u].x * v, y: C.clientY - r[u].y * v }, w = !1, d.setPointerCapture(C.pointerId);
      }), d.addEventListener("pointermove", (C) => {
        if (!y) return;
        if (c.gesturing()) {
          y = null, w = !0;
          return;
        }
        const { scale: v } = c.transform(), p = (C.clientX - y.x) / v, $ = (C.clientY - y.y) / v;
        Math.hypot(p - r[u].x, $ - r[u].y) * v > yo && (w = !0), r[u].x = r[u].fx = p, r[u].y = r[u].fy = $, i();
      });
      const g = () => {
        y = null;
      };
      d.addEventListener("pointerup", g), d.addEventListener("pointercancel", g), d.addEventListener("click", (C) => {
        C.stopPropagation(), w || a(u);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (d, u) => c.centreOn(d, u, Vp)
    };
  }
}
function Xp(e, t, n, r, o) {
  const i = t / 2, s = n / 2, a = (c, d) => {
    c.forEach((u, y) => {
      const w = 2 * Math.PI * y / Math.max(1, c.length) - Math.PI / 2;
      u.x = i + d * Math.cos(w), u.y = s + d * Math.sin(w), u.fx = r === "Force-directed" ? void 0 : u.x, u.fy = r === "Force-directed" ? void 0 : u.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((v) => [v["gufe-key"], []]));
    for (const v of o)
      c.get(v.from["gufe-key"]).push(v.to["gufe-key"]), c.get(v.to["gufe-key"]).push(v.from["gufe-key"]);
    const d = new Map(e.map((v) => [v["gufe-key"], v])), u = e.reduce(
      (v, p) => c.get(p["gufe-key"]).length > c.get(v["gufe-key"]).length ? p : v
    ), y = /* @__PURE__ */ new Set([u["gufe-key"]]);
    let w = [u["gufe-key"]], g = 0;
    const C = Math.min(t, n) * 0.18;
    for (; w.length; ) {
      a(
        w.map((p) => d.get(p)),
        g === 0 ? 0 : g * C + 40
      );
      const v = [];
      for (const p of w)
        for (const $ of c.get(p))
          y.has($) || (y.add($), v.push($));
      w = v, g++;
    }
    a(e.filter((v) => !y.has(v["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
function Zp(e, t, n, r) {
  return Aa({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((o) => ({
      source: o.from["gufe-key"],
      target: o.to["gufe-key"],
      score: o.score
    })),
    tickMultiplier: xe.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((s) => s["gufe-key"]).distance((s) => xe.linkBaseDistance + (1 - (s.score ?? 0.5)) * xe.linkScoreBonus).strength(xe.linkStrength)
      ],
      [
        "charge",
        o.forceManyBody().strength(xe.chargeStrength).distanceMin(xe.chargeDistanceMin).distanceMax(xe.chargeDistanceMax)
      ],
      ["center", o.forceCenter(n / 2, r / 2).strength(xe.centerStrength)],
      ["collision", o.forceCollide(Ae + xe.collisionPadding).iterations(xe.collisionIterations)],
      ["x", o.forceX(n / 2).strength(xe.drift)],
      ["y", o.forceY(r / 2).strength(xe.drift)]
    ]
  });
}
Ne("gufe-ligand-network", Yp);
const Qp = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];
function ja(e, t) {
  const n = [], r = [];
  for (const o of Object.values(e.components ?? {})) {
    const i = Ke(t, o);
    i && (Qp.includes(i.type) ? n.push(i) : i.type === "SmallMoleculeComponentViz" && r.push(i));
  }
  return { structures: n, ligands: r };
}
function eh(e) {
  return e.structures.length > 0 && e.ligands.length > 0;
}
const Es = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" }
], th = 0.4;
class nh extends Me {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = ja(n, St(n)), o = r.structures.map((g, C) => C), i = r.ligands.map((g, C) => r.structures.length + C), s = ut(
      "complex.focus",
      "site",
      Es.map((g) => g.id)
    );
    let a = s.get(), c = null;
    const d = Sa({
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
      restyle: u,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () => [
        rr(
          Es,
          a,
          (g) => {
            a = g, y();
          },
          s
        )
      ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => y()
    });
    function u() {
      const g = d.viewer();
      g && (Hr(g, d.opts, c, d.showStatus, { model: o }), hf(g, { model: i }), g.render());
    }
    function y() {
      const g = d.viewer();
      g && (a === "site" && i.length ? (g.zoomTo({ model: i }), g.zoom(th)) : g.zoomTo(), g.render(), w());
    }
    function w() {
      const g = d.viewer();
      g && (d.interaction()?.cleanup(), d.setInteraction(sr(d.pane.container, g)));
    }
    if (!r.structures.length || !r.ligands.length)
      return d.showStatus("This system has no ligand and structure to draw together."), {};
    d.setStats(xs(r, () => c));
    try {
      c = $a(r.structures[0].pdb), d.setStats(xs(r, () => c));
    } catch (g) {
      d.showStatus(`PDB parse error: ${$e(g)}`, "error");
    }
    return d.showStatus("Loading 3D viewer..."), ir().then(() => {
      const g = et.createViewer(d.pane.container, { backgroundColor: jt.viewer });
      d.setViewer(g);
      for (const C of r.structures) g.addModel(C.pdb, "pdb");
      for (const C of r.ligands) g.addModel(ma(C.sdf), "sdf");
      u(), d.restoreCamera() ? w() : y(), g.spin(d.opts.spin ? "y" : !1), g.render();
    }).catch((g) => {
      d.showStatus(`Failed to render structure: ${$e(g)}`, "error");
    }), d.handle;
  }
}
function xs(e, t) {
  const n = e.ligands.reduce((i, s) => {
    const a = uo(s.sdf);
    return a ? i + a.atoms : i;
  }, 0), r = `${e.ligands.length === 1 ? "ligand" : `${e.ligands.length} ligands`} ${n} atoms`, o = t();
  return o ? [r, ...ba(o)] : [r];
}
Ne("gufe-complex", nh);
function rh(e, t) {
  return {
    ...e,
    registry: $o(t, Object.values(e.components ?? {}))
  };
}
const oh = "chemical-system.component", ih = 460, sh = 200, ah = "35%";
function ch(e) {
  return e.name ? e.name : e.type === "UnknownComponentViz" ? e.gufe_type : "(unnamed)";
}
function lh(e) {
  return e.type === "UnknownComponentViz" ? Xn(e.gufe_type) : null;
}
function As(e) {
  return N(
    "div",
    `padding:10px 10px 16px;font-weight:${he.bold};font-size:${ee.title};color:${M.titleColor};letter-spacing:.02em;line-height:1.3;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
class dh extends Me {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = St(n), o = [], i = [];
    for (const [P, F] of Object.entries(n.components ?? {})) {
      const R = Ke(r, F);
      R ? o.push([P, R]) : i.push(P);
    }
    const s = n.name || "Chemical system";
    if (!o.length)
      return t.appendChild(As(s)), t.appendChild(
        ge(
          i.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = N(
      "div",
      "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;"
    );
    t.appendChild(a), i.length && lt(
      a,
      `${i.length} component${i.length === 1 ? "" : "s"} named by this system (${i.join(", ")}) are not in its registry`
    );
    const c = N(
      "div",
      `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.panelBg};`
    );
    a.appendChild(c), c.appendChild(As(s));
    const d = N(
      "div",
      "min-width:0;min-height:0;overflow-y:auto;display:flex;gap:6px;padding:0 10px 10px;"
    );
    c.appendChild(d);
    const u = N(
      "div",
      "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;"
    );
    a.appendChild(u);
    const y = N(
      "div",
      "flex:1;min-height:0;display:flex;"
    );
    u.appendChild(y);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", w.setAttribute(Dr, ""), y.appendChild(w);
    const g = ja(n, r), C = eh(g), v = (P) => C && g.structures.some(
      (F) => F === P
    ), p = o.filter(([, P]) => !v(P)).map(([P, F]) => ({
      key: P,
      title: P,
      subtitle: ch(F),
      badge: lh(F),
      element: w,
      point: () => {
        w.payload = F;
      }
    }));
    if (C) {
      const P = document.createElement("gufe-complex");
      P.style.cssText = "flex:1;min-width:0;min-height:0;", P.setAttribute(Dr, ""), P.payload = n, p.unshift({
        // Reserved rather than a plain word: this shares a namespace with the
        // system's own component labels, and those come from a user's Python.
        key: "#complex",
        title: "Complex",
        subtitle: `${g.ligands.length === 1 ? g.ligands[0].name || "ligand" : "ligands"} in ${g.structures[0].name || "structure"}`,
        badge: null,
        element: P,
        point: () => {
        }
      });
    }
    let $ = null;
    const h = (P) => {
      $ !== P && (y.replaceChildren(P), $ = P);
    }, k = Gn(oh), _ = [], l = (P) => {
      _.forEach((F, R) => {
        const V = R === P;
        F.style.background = V ? Et.bgActive : Et.bg, F.style.borderColor = V ? Et.borderActive : Et.border;
      }), p[P].point(), h(p[P].element);
    }, f = (P) => {
      k.set(p[P].key), l(P);
    };
    p.forEach((P, F) => {
      const R = N(
        "button",
        `${Et.base}width:auto;flex-shrink:0;max-width:100%;box-sizing:border-box;`
      );
      R.appendChild(
        N("span", `font-weight:700;color:${M.textPrimary};`, P.title)
      ), R.appendChild(
        N(
          "span",
          `font-size:${ee.small};color:${M.textMuted};`,
          P.subtitle
        )
      ), P.badge && R.appendChild(P.badge), R.onclick = () => f(F), _.push(R), d.appendChild(R);
    });
    const m = p.findIndex((P) => P.key === k.get());
    l(m < 0 ? 0 : m);
    let E = null;
    const A = Jn(a, (P) => {
      const F = P > 0 && P < ih;
      F !== E && (E = F, a.style.flexDirection = F ? "column" : "row", c.style.flex = F ? "0 0 auto" : `0 0 ${sh}px`, c.style.maxHeight = F ? ah : "none", c.style.borderRight = F ? "none" : `1px solid ${M.splitBorder}`, c.style.borderBottom = F ? `1px solid ${M.splitBorder}` : "none", d.style.flexDirection = F ? "row" : "column", d.style.flexWrap = F ? "wrap" : "nowrap", $?.resize?.());
    });
    return {
      onResize: () => $?.resize?.(),
      // Removing whatever is mounted fires its own `disconnectedCallback`,
      // which is where it releases its viewers. Only one pane is ever in the
      // document, and the panes that are not are already torn down.
      cleanup: () => {
        A(), $?.remove();
      }
    };
  }
}
Ne("gufe-chemical-system", dh);
const uh = 460, fh = 210, ph = "42%";
function hh(e, t) {
  const n = Re(t, e.stateA, "ChemicalSystemViz"), r = Re(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const i of [n, r]) o.push(...Object.values(i.components ?? {}));
  for (const i of e.mappings ?? []) o.push(i.componentA, i.componentB);
  return { ...e, registry: $o(t, o) };
}
const bo = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function mh(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function gh(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function yh(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : null;
  return { name: e.name || "(unnamed)", type: t };
}
function Or(e, t, n) {
  const r = N(
    "div",
    `min-width:0;display:flex;align-items:baseline;gap:${te.md};padding:5px ${te.lg};border-radius:${we.md};background:${M.cardBg};border:1px solid ${M.cardBorder};`
  );
  n && r.appendChild(
    N(
      "span",
      `flex:0 0 auto;font-size:${ee.tiny};font-weight:${he.bold};letter-spacing:.08em;color:${M.textMuted2};`,
      n
    )
  );
  const o = yh(e);
  if (!o)
    return r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(N("span", `font-size:${ee.body};color:${M.textMuted2};`, "absent")), r;
  r.style.borderColor = t === "unchanged" ? M.cardBorder : bo[t];
  const i = N(
    "span",
    `min-width:0;font-size:${ee.body};font-weight:600;color:${M.textPrimary};overflow-wrap:anywhere;`,
    o.name
  );
  return i.title = o.name, r.appendChild(i), o.type && r.appendChild(Xn(o.type)), r;
}
function $h(e, t, n, r) {
  const o = N("div", `display:flex;flex-direction:column;gap:${te.sm};min-width:0;`), i = N("div", `display:flex;align-items:center;gap:${te.md};min-width:0;`);
  i.appendChild(
    N("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${bo[t]};`)
  );
  const s = N(
    "span",
    `min-width:0;font-size:${ee.body};font-weight:${he.bold};color:${M.textPrimary};overflow-wrap:anywhere;`,
    e
  );
  return s.title = t, i.appendChild(s), o.appendChild(i), t === "unchanged" ? (o.appendChild(Or(n, t, null)), o) : (o.appendChild(Or(n, t, "A")), o.appendChild(Or(r, t, "B")), o);
}
function bh(e, t) {
  const n = Ke(t, e.componentA), r = Ke(t, e.componentB);
  return `${n ? rt(n) : "A"} to ${r ? rt(r) : "B"}`;
}
function Ps(e) {
  return N(
    "div",
    `font-weight:${he.bold};font-size:${ee.heading};color:${M.titleColor};letter-spacing:.02em;line-height:1.35;overflow-wrap:anywhere;flex-shrink:0;`,
    e
  );
}
function Rs(e, t) {
  const n = N("div", `display:flex;align-items:baseline;gap:${te.md};min-width:0;font-size:${ee.small};`);
  return n.appendChild(N("span", `flex:0 0 auto;color:${M.textMuted};`, e)), n.appendChild(
    N("span", `min-width:0;font-weight:${he.bold};color:${M.textPrimary};overflow-wrap:anywhere;`, t)
  ), n;
}
class vh extends Me {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = St(n), o = Re(r, n.stateA, "ChemicalSystemViz"), i = Re(r, n.stateB, "ChemicalSystemViz"), s = Re(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = n.name || "Transformation";
    if (!o || !i) {
      const l = N("div", "padding:12px 14px;flex-shrink:0;");
      return l.appendChild(Ps(c)), t.appendChild(l), t.appendChild(
        ge("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    }
    const d = gh(o, i), u = N("div", "flex:1;min-width:0;min-height:0;display:flex;overflow:hidden;");
    t.appendChild(u);
    const y = N(
      "div",
      `min-width:0;min-height:0;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px;background:${M.panelBg};`
    );
    u.appendChild(y);
    const w = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    u.appendChild(w);
    const g = N("div", `display:flex;flex-direction:column;gap:${te.md};min-width:0;`);
    g.appendChild(Ps(c)), g.appendChild(Rs("protocol", s?.gufe_type || s?.name || Je)), g.appendChild(Rs("mappings", String(a.length))), y.appendChild(g);
    const C = N("div", `display:flex;flex-direction:column;gap:${te.xs};`);
    for (const [l, f] of [
      ["State A", o],
      ["State B", i]
    ])
      C.appendChild(
        N(
          "div",
          `min-width:0;font-size:${ee.small};font-weight:${he.bold};letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};overflow-wrap:anywhere;`,
          `${l}${f.name ? ` - ${f.name}` : ""}`
        )
      );
    y.appendChild(C);
    const v = /* @__PURE__ */ new Set();
    for (const l of d) {
      const f = o.components?.[l], m = i.components?.[l], E = mh(f, m);
      v.add(E), y.appendChild(
        $h(
          l,
          E,
          Ke(r, f),
          Ke(r, m)
        )
      );
    }
    if (v.size > 1) {
      const l = N(
        "div",
        `display:flex;flex-wrap:wrap;gap:${te.lg} 12px;padding-top:${te.sm};font-size:${ee.small};color:${M.textMuted};`
      );
      for (const f of ["unchanged", "changed", "added", "removed"])
        v.has(f) && l.appendChild(Qe(f, "", bo[f]));
      y.appendChild(l);
    }
    const p = N("div", Ha, "Atom mapping");
    w.appendChild(p);
    let $ = null;
    const h = Jn(t, (l) => {
      const f = l > 0 && l < uh;
      f !== $ && ($ = f, u.style.flexDirection = f ? "column" : "row", y.style.flex = f ? "0 0 auto" : `0 0 ${fh}px`, y.style.maxWidth = f ? "none" : ph, y.style.maxHeight = f ? "45%" : "none", y.style.borderRight = f ? "none" : `1px solid ${M.splitBorder}`, y.style.borderBottom = f ? `1px solid ${M.splitBorder}` : "none", p.style.display = f ? "block" : "none");
    });
    if (!a.length)
      return w.appendChild(
        ge(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const k = document.createElement("gufe-atom-mapping");
    k.style.cssText = "flex:1;min-height:0;min-width:0;";
    const _ = (l) => {
      k.payload = Fa(a[l], r);
    };
    if (_(0), a.length > 1) {
      const l = N(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${ee.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      l.appendChild(
        rr(
          a.map((f, m) => ({
            id: String(m),
            label: f.name || bh(f, r)
          })),
          "0",
          (f) => _(Number(f))
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
Ne("gufe-transformation", vh);
const dt = { width: 176, height: 54, depictedHeight: 176, radius: 10 }, Ms = (e) => e ? dt.depictedHeight : dt.height, je = { pad: 6, size: 122, radius: 6, inset: 4 }, Ns = 200, Tt = {
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
}, wh = "6 4", He = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 }, _h = 7, Sh = [
  { id: "structures", from: 0.18, structure: !0 },
  { id: "boxes", from: 0, structure: !1 }
], Ch = (e) => Ta(Sh, e), qn = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 }, Ts = (e, t) => {
  const n = t ? qn.selectedWidth : qn.width;
  return Math.max(qn.min, Math.min(n, n * e));
}, Fr = { width: 3, selectedWidth: 4.5, min: 1.25 }, Os = (e, t) => {
  const n = t ? Fr.selectedWidth : Fr.width;
  return Math.max(Fr.min, Math.min(n, n * e));
}, wt = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2
}, Ot = { initial: 0.56, min: 0.25, max: 0.78 }, Fs = { x: dt.width / 2, y: dt.depictedHeight / 2 }, kh = 1.4;
function Eh(e, t, n, r, o, i, s, a) {
  const c = i.trim().toLowerCase();
  if (!o.size && !c && s === "" && a === null) return null;
  const d = c.length > 0 || s !== "" || a !== null, u = /* @__PURE__ */ new Set();
  e.forEach((w, g) => {
    const C = d && (!c || n[g].includes(c)) && (!s || r[g] === s) && (!a || a.has(g));
    (o.has(w["gufe-key"]) || C) && u.add(w["gufe-key"]);
  });
  const y = /* @__PURE__ */ new Set();
  return t.forEach((w, g) => {
    u.has(w.from["gufe-key"]) && u.has(w.to["gufe-key"]) && y.add(g);
  }), { nodes: u, edges: y };
}
const Wn = rt;
function Da(e, t) {
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
const xh = (e, t) => Da(e, t).join(" + ");
function Ah(e, t) {
  const n = { fill: M.netNodeFill, stroke: M.netNodeStroke }, r = e.map((s) => xh(s, t)), o = [...new Set(r)];
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
function Ph(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const i = Ke(t, o);
    if (!i) continue;
    n.push(rt(i), i["gufe-key"]);
    const s = i.smiles;
    s && n.push(s);
  }
  return n.join(" ").toLowerCase();
}
function Rh(e, t) {
  const n = [], r = [], o = /* @__PURE__ */ new Map(), i = e.map((s) => {
    const a = [];
    for (const c of Object.values(s.components ?? {})) {
      const d = Re(t, c, "SmallMoleculeComponentViz");
      if (!d) continue;
      let u = o.get(c);
      u === void 0 && (u = n.length, o.set(c, u), n.push(d.sdf ?? ""), r.push(d.total_charge ?? 0)), a.push(u);
    }
    return a;
  });
  return { sources: n, charges: r, perNode: i };
}
function Mh(e, t, n) {
  if (!t || n !== 1) return e.join(" + ");
  const r = e.filter((o) => o !== "SmallMolecule");
  return (r.length ? r : e).join(" + ");
}
function Nh(e) {
  const t = Gn("alchemical-network.composition");
  return Na({
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
      const r = N("div", `display:flex;align-items:center;gap:${te.md};font-size:${ee.small};color:${M.textMuted};`);
      r.appendChild(N("span", "flex-shrink:0;", "made of"));
      const o = Dt(
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
        before: N(
          "span",
          `width:10px;height:10px;border-radius:${we.sm};flex-shrink:0;background:${o.fill};border:1px solid ${o.stroke};`
        ),
        name: Wn(n),
        title: `${Wn(n)}
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
function Th(e, t, n) {
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
function Oh(e, t, n, r) {
  return Aa({
    nodes: e,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: t.map((o) => ({ source: o.from["gufe-key"], target: o.to["gufe-key"] })),
    tickMultiplier: wt.tickMultiplier,
    forces: (o, i) => [
      [
        "link",
        o.forceLink(i).id((s) => s["gufe-key"]).distance(wt.linkDistance).strength(wt.linkStrength)
      ],
      ["charge", o.forceManyBody().strength(wt.chargeStrength)],
      ["center", o.forceCenter(n / 2, r / 2)],
      ["collision", o.forceCollide(wt.collisionRadius).iterations(wt.collisionIterations)]
    ]
  });
}
class Fh extends Me {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = St(n), { nodes: o, edges: i, unresolved: s, dangling: a } = Pa({
      registry: r,
      keys: n.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: n.edges ?? [],
      ends: (S) => [S.stateA, S.stateB]
    }), c = (S) => {
      const I = Re(r, S.protocol, "ProtocolViz");
      return I?.gufe_type || I?.name || "";
    }, d = new Set(i.map(c).filter(Boolean)), u = Yn(n.name || "Alchemical network");
    u.statsEl.appendChild(Qe("systems", String(o.length))), u.statsEl.appendChild(Qe("transformations", String(i.length))), d.size && u.statsEl.appendChild(Qe("protocol", [...d].join(", ")));
    const y = Ah(o, r), w = N("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    let g = () => {
    };
    const C = /* @__PURE__ */ new Set(), v = { composition: "" }, p = { text: "" };
    let $ = null;
    const h = () => {
      const S = Eh(
        o,
        i,
        k,
        y.signatures,
        C,
        p.text,
        v.composition,
        E
      );
      $?.setEmphasis(S?.nodes ?? null, S?.edges ?? null);
    }, k = o.map((S) => Ph(S, r)), _ = () => aa(), l = Rh(o, r), f = Ra(_, l.sources), m = o.map((S, I) => {
      const z = l.perNode[I].find((W) => l.sources[W]), L = z === void 0 ? null : l.sources[z], G = Da(S, r);
      return {
        colors: y.colorOf(I),
        composition: G.join(" + "),
        besides: Mh(G, L !== null, l.perNode[I].length),
        sdf: L,
        charge: z === void 0 ? 0 : l.charges[z]
      };
    });
    let E = null, A = () => {
    };
    const P = async (S) => {
      const I = await f.run(S);
      return I.status === "superseded" || (E = I.status === "ok" ? new Set(o.flatMap((z, L) => l.perNode[L].some((G) => I.matched.has(G)) ? [L] : [])) : null, A(), h()), I;
    }, F = mo(
      u,
      () => Nh({
        nodes: o,
        edges: i,
        haystacks: k,
        signatures: y.signatures,
        colorOf: y.colorOf,
        compositions: y.compositions,
        selected: C,
        filter: v,
        query: p,
        refresh: () => h(),
        matched: () => E,
        match: (S) => P(S),
        mounted: (S) => {
          A = S;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (S) => {
          $?.focusOn(S), O("node", S);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => g(),
        remember: ct("alchemical-network.menuOpen", !1),
        extras: go
      }
    ), R = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), V = N("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`), q = N("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`), H = N("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    H.appendChild(F.panel), H.appendChild(q), R.appendChild(u), R.appendChild(H), w.appendChild(R), w.appendChild(
      va(w, R, V, {
        min: Ot.min,
        max: Ot.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: oo("alchemical-network.canvasShare", Ot.initial, Ot.min, Ot.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => g(),
        onOrient: (S) => {
          H.style.flexDirection = S ? "column" : "row", po(F.panel, S);
        }
      })
    ), w.appendChild(V);
    const X = this.#e(V, r);
    if (!o.length)
      return q.appendChild(
        ge(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), X.message("Nothing to show."), { cleanup: () => X.cleanup() };
    s && lt(
      q,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), a && lt(
      q,
      `${a} transformation${a === 1 ? "" : "s"} name a system this network does not contain`
    );
    let oe = !0, Z = !1, ie = null, J = 0;
    const D = new Map(o.map((S, I) => [S["gufe-key"], m[I].charge])), j = i.some(
      (S) => (D.get(S.to["gufe-key"]) ?? 0) !== (D.get(S.from["gufe-key"]) ?? 0)
    );
    R.appendChild(this.#n(y.legend, () => $?.reset(), j));
    const O = (S, I) => {
      ie = { kind: S, index: I }, X.show(S === "node" ? o[I] : i[I], S), $?.setSelected(ie);
    }, b = () => {
      const S = ++J, I = q.clientWidth || 800, z = q.clientHeight || 600;
      Th(o, I, z);
      const L = () => {
        !oe || S !== J || ($?.cleanup(), q.querySelectorAll("svg").forEach((G) => G.remove()), $ = this.#t(q, o, i, I, z, m, _, O), $.setSelected(ie), h());
      };
      if (Z) {
        L();
        return;
      }
      Oh(o, i, I, z).then((G) => {
        !oe || S !== J || (G || (Z = !0, lt(q, "d3 could not be loaded - showing the circular layout instead")), L());
      }, L);
    };
    return g = b, b(), O("node", 0), {
      onResize: () => b(),
      cleanup: () => {
        oe = !1, $?.cleanup(), $ = null, X.cleanup();
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
    const o = N("div", Bs.bottom);
    if (o.appendChild(co(n, "Reset pan and zoom")), r) {
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
        d = rh(xa(a), n);
      else {
        const { index: u, from: y, to: w, ...g } = a;
        d = hh(g, n);
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
    const d = ce("svg", { class: "gufe-graph", width: o, height: i, style: "display:block;touch-action:none;" });
    t.appendChild(d);
    const u = ce("g");
    d.appendChild(u);
    const y = ce("g"), w = ce("g");
    u.append(y, w);
    let g = () => {
    };
    const C = Ea(d, u, {
      bounds: () => ka(n, Fs.x, Fs.y),
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (z, L, G) => g(z, L, G)
    }), v = (z, L) => {
      C.wasPan() || c(z, L);
    }, p = [], $ = [], h = new Map(n.map((z, L) => [z["gufe-key"], s[L].charge])), k = (z) => (h.get(z.to["gufe-key"]) ?? 0) - (h.get(z.from["gufe-key"]) ?? 0);
    r.forEach((z, L) => {
      const G = k(z), W = ce("line", {
        x1: z.from.x,
        y1: z.from.y,
        x2: z.to.x,
        y2: z.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": Ts(1, !1),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
        ...G ? { "stroke-dasharray": wh } : {}
      });
      ds(
        W,
        (z.name || "transformation") + (G ? ` - net charge change ${at(G)}` : "")
      ), W.addEventListener("click", () => v("edge", L)), y.appendChild(W), p.push(W);
      const x = ce("line", {
        x1: z.from.x,
        y1: z.from.y,
        x2: z.to.x,
        y2: z.to.y,
        stroke: "transparent",
        "stroke-width": qn.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;"
      });
      x.addEventListener("click", () => v("edge", L)), y.appendChild(x), $.push(x);
    });
    const _ = n.map(() => []), l = new Map(n.map((z, L) => [z, L]));
    r.forEach((z, L) => {
      const G = l.get(z.from), W = l.get(z.to);
      G !== void 0 && _[G].push(L), W !== void 0 && W !== G && _[W].push(L);
    });
    const f = [], m = [], E = [], A = [], P = [], F = [], R = [], V = [], q = [];
    n.forEach((z, L) => {
      const G = s[L], W = Ms(G.sdf), x = ce("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${z.x},${z.y})`
      });
      E.push(x);
      const T = ce("rect", {
        class: "gufe-node-box",
        x: -176 / 2,
        y: -W / 2,
        width: dt.width,
        height: W,
        rx: dt.radius,
        fill: G.colors.fill,
        stroke: G.colors.stroke,
        "stroke-width": Os(1, !1),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke"
      });
      if (x.appendChild(T), f.push(T), m.push(G.colors.stroke), G.sdf) {
        const Q = ce("rect", {
          class: "gufe-node-plate",
          x: -61,
          y: -W / 2 + je.pad,
          width: je.size,
          height: je.size,
          rx: je.radius,
          fill: Lr(),
          display: "none",
          "pointer-events": "none"
        });
        if (x.appendChild(Q), F.push(Q), G.charge) {
          const ne = ce("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: M.badgeFg,
            "pointer-events": "none"
          });
          ne.textContent = at(G.charge), x.appendChild(ne), R.push(ne);
        } else
          R.push(null);
        const re = ce("g", { transform: `translate(0,${-W / 2 + je.pad + je.size / 2})` }), fe = ce("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        re.appendChild(fe), x.appendChild(re), V.push(re), q.push(fe);
      } else
        F.push(null), V.push(null), q.push(null), R.push(null);
      const B = ce("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": He.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      B.textContent = Ln(Wn(z), He.nameChars), x.appendChild(B), A.push(B);
      const Y = ce("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": He.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      Y.textContent = Ln(G.composition, He.subChars), x.appendChild(Y), P.push(Y), ds(x, `${Wn(z)} - ${G.composition}`), w.appendChild(x);
    });
    const H = (z) => {
      const L = n[z];
      E[z].setAttribute("transform", `translate(${L.x},${L.y})`);
      for (const G of _[z])
        for (const W of [p[G], $[G]])
          r[G].from === L && (W.setAttribute("x1", String(L.x)), W.setAttribute("y1", String(L.y))), r[G].to === L && (W.setAttribute("x2", String(L.x)), W.setAttribute("y2", String(L.y)));
    }, X = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set(), Z = cr("cpk"), ie = (z, L) => {
      if (X.has(L) || oe.has(L)) return;
      const G = q[L], W = s[L].sdf;
      if (!G || !W) return;
      const x = fo(z, W, Ns, Fe.layout, void 0, Z);
      if (!x || !Oa(G, x, Ns, je.size - je.inset * 2)) {
        oe.add(L);
        return;
      }
      X.add(L);
    }, J = (z, L, G) => {
      const W = s[z], x = L && X.has(z), T = (de) => de * G >= _h, B = T(He.nameSize), Y = T(He.subSize);
      A[z].setAttribute("display", B ? "inline" : "none"), P[z].setAttribute("display", Y ? "inline" : "none"), F[z]?.setAttribute("display", x ? "inline" : "none"), q[z]?.setAttribute("display", x ? "inline" : "none");
      const Q = Ms(W.sdf), re = -Q / 2 + je.pad, fe = R[z];
      fe && (fe.setAttribute("x", String(x ? dt.width / 2 - Tt.inset : 0)), fe.setAttribute(
        "y",
        String(x ? -Q / 2 + Tt.inset : -Q * Tt.bigAt)
      ), fe.setAttribute("font-size", String(x ? Tt.fontSize : Tt.bigFontSize)), fe.setAttribute("font-weight", x ? he.normal : he.bold)), F[z]?.setAttribute("y", String(re)), V[z]?.setAttribute("transform", `translate(0,${re + je.size / 2})`);
      const ne = Q / 2 - He.bottom;
      A[z].setAttribute("y", String(x ? ne - (Y ? He.gap : 0) : -2)), P[z].setAttribute("y", String(x ? ne : 14)), P[z].textContent = Ln(x ? W.besides : W.composition, He.subChars);
    };
    let D = null, j = 1, O = null, b = null;
    const S = () => {
      f.forEach((z, L) => {
        const G = O === L;
        z.setAttribute("stroke", G ? M.cardBorderActive : m[L]), z.setAttribute("stroke-width", String(Os(j, G)));
      }), p.forEach((z, L) => {
        const G = b === L;
        z.setAttribute("stroke", G ? M.netHaloColor : M.netEdgeLine), z.setAttribute("stroke-width", String(Ts(j, G)));
      });
    };
    return g = (z, L, G) => {
      const W = Ch(z);
      D = W, d.setAttribute("data-detail", W.id), j = z, S();
      for (let T = 0; T < n.length; T++) J(T, W.structure, z);
      if (!W.structure) return;
      const x = [];
      n.forEach((T, B) => {
        if (!s[B].sdf || X.has(B) || oe.has(B)) return;
        const Y = T.x * z + L, Q = T.y * z + G;
        Y < -Ze || Q < -Ze || Y > o + Ze || Q > i + Ze || x.push(B);
      }), x.length && a().then((T) => {
        if (!(!T || D !== W))
          for (const B of x)
            ie(T, B), J(B, !0, z);
      }).catch(() => {
      });
    }, E.forEach((z, L) => {
      let G = null, W = !1;
      z.addEventListener("pointerdown", (T) => {
        T.stopPropagation();
        const { scale: B } = C.transform();
        G = { x: T.clientX - n[L].x * B, y: T.clientY - n[L].y * B }, W = !1, z.setPointerCapture(T.pointerId);
      }), z.addEventListener("pointermove", (T) => {
        if (!G) return;
        if (C.gesturing()) {
          G = null, W = !0;
          return;
        }
        const { scale: B } = C.transform(), Y = (T.clientX - G.x) / B, Q = (T.clientY - G.y) / B;
        Math.hypot(Y - n[L].x, Q - n[L].y) * B > yo && (W = !0), n[L].x = n[L].fx = Y, n[L].y = n[L].fy = Q, H(L);
      });
      const x = () => {
        G = null;
      };
      z.addEventListener("pointerup", x), z.addEventListener("pointercancel", x), z.addEventListener("click", (T) => {
        T.stopPropagation(), W || c("node", L);
      });
    }), C.fit(), {
      setSelected(z) {
        O = z?.kind === "node" ? z.index : null, b = z?.kind === "edge" ? z.index : null, S();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(z, L) {
        E.forEach((G, W) => {
          const x = !z || z.has(n[W]["gufe-key"]);
          G.setAttribute("opacity", x ? "1" : String(zt.node));
        }), p.forEach((G, W) => {
          const x = !L || L.has(W);
          G.setAttribute("opacity", x ? "1" : String(zt.edge));
        });
      },
      focusOn(z) {
        const L = n[z];
        L && C.centreOn(L.x, L.y, kh);
      },
      reset: C.reset,
      cleanup: C.cleanup
    };
  }
}
Ne("gufe-alchemical-network", Fh);
class zh extends Me {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Yn(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Xn(n.gufe_type)), t.appendChild(r);
    const o = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const i = Wr();
    return i.style.maxWidth = "460px", i.appendChild(Un("gufe class", n.gufe_type, !0)), n.name && i.appendChild(Un("Name", n.name)), i.appendChild(
      N(
        "div",
        `padding-top:10px;font-size:${ee.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(i), {};
  }
}
Ne("gufe-protocol", zh);
function Ih(e) {
  const t = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(e || "");
  return t ? { value: t[1], unit: t[2].trim() } : { value: (e || "").trim(), unit: "" };
}
function zs(e, t = !1) {
  const n = N(
    "div",
    `display:flex;flex-direction:column;gap:${te.xl};padding:${te.xxl} 0;` + (t ? "padding-top:0;" : `border-top:1px solid ${M.splitBorder};`)
  );
  return n.appendChild(N("div", Ir, e)), n;
}
function Vn(e) {
  return N(
    "div",
    `font-size:${ee.tiny};font-weight:${he.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
    e
  );
}
function Is(e, t) {
  const n = N("div", `display:flex;flex-direction:column;align-items:center;gap:${te.sm};`);
  return n.appendChild(
    N(
      "span",
      `${Oe.plain}${Oe.outline}font-family:${ee.mono};font-size:${ee.body};`,
      e
    )
  ), n.appendChild(Vn(t)), n;
}
class jh extends Me {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = N(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Wr();
    o.style.maxWidth = "560px", o.style.width = "100%", o.style.gap = "0";
    const i = zs("Solvent", !0), s = N("div", "display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;"), a = N("div", "display:flex;flex-direction:column;gap:5px;min-width:0;"), c = N(
      "div",
      `font-family:${ee.mono};font-size:${ee.display};font-weight:${he.bold};line-height:1.1;color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      n.smiles
    );
    a.appendChild(c), a.appendChild(Vn("SMILES")), s.appendChild(a);
    const d = n.name || "";
    if (d && d !== n.smiles) {
      const $ = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      $.appendChild(
        N(
          "div",
          `font-size:${ee.body};color:${M.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          d
        )
      ), $.appendChild(Vn("Name")), s.appendChild($);
    }
    i.appendChild(s), o.appendChild(i);
    const u = zs("Ions"), y = N("div", `display:flex;align-items:flex-end;gap:${te.xxl};flex-wrap:wrap;`);
    n.positive_ion && y.appendChild(Is(n.positive_ion, "cation")), n.negative_ion && y.appendChild(Is(n.negative_ion, "anion"));
    const { value: w, unit: g } = Ih(n.ion_concentration), C = N("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;"), v = N("div", `display:flex;align-items:baseline;gap:${te.md};justify-content:flex-end;`);
    v.appendChild(
      N(
        "div",
        `font-size:${ee.display};font-weight:${he.bold};line-height:1;color:${M.titleColor};`,
        w
      )
    ), g && (v.appendChild(document.createTextNode(" ")), v.appendChild(N("div", `font-size:${ee.body};color:${M.textMuted};`, g))), C.appendChild(v), C.appendChild(Vn("Ion concentration")), y.appendChild(C), u.appendChild(y);
    const p = n.neutralize;
    return u.appendChild(
      N(
        "span",
        `${Oe.plain}align-self:flex-start;font-weight:${he.bold};` + (p ? `background:${M.okBg};color:${M.okFg};` : `${Oe.outline}color:${M.textMuted};`),
        p ? "Neutralized" : "Not neutralized"
      )
    ), u.appendChild(
      N(
        "div",
        jr,
        p ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries." : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries."
      )
    ), o.appendChild(u), r.appendChild(o), {};
  }
}
Ne("gufe-solvent", jh);
class Dh extends Me {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Yn(n.name || "Unnamed component");
    r.statsEl.appendChild(Xn(n.gufe_type)), t.appendChild(r);
    const o = N("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const i = Wr();
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
    ), i.appendChild(Un("Name", n.name || "(unnamed)")), i.appendChild(Un("gufe class", n.gufe_type, !0)), o.appendChild(i), {};
  }
}
Ne("gufe-unknown-component", Dh);
typeof globalThis < "u" && (globalThis.gufeViz = { settings: ia, reset: Zd });
export {
  Lh as PAYLOAD_TYPES,
  ro as VIEW_TAGS
};
