/**
 * That the interface stays centralized.
 *
 * `style.ts` is only worth having if a view cannot quietly go around it. These
 * read the source rather than the DOM, because what is being checked is where a
 * value is written, not what it renders to.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { BUTTON, FONT, MENU_LIST, MENU_PANEL, SELECT } from "../src/shared/style.js";
import {
  installTheme,
  setTheme,
  T,
  THEME_ATTRIBUTE,
  THEMES,
  themeStyleSheet,
  V,
} from "../src/shared/theme.js";

const SRC = join(import.meta.dirname, "..", "src");

const sources = (dir: string): { name: string; text: string }[] =>
  readdirSync(join(SRC, dir))
    .filter((f) => f.endsWith(".ts"))
    .map((name) => ({ name: `${dir}/${name}`, text: readFileSync(join(SRC, dir, name), "utf-8") }));

const VIEWS = sources("views");

describe("the views", () => {
  it("do not set their own font sizes", () => {
    // A view that writes `font-size:11px` is making a typography decision on its
    // own, and the next view will make a slightly different one.
    for (const { name, text } of VIEWS) {
      const literals = text.match(/font-size:\s*\d+px/g) ?? [];
      expect(literals, `${name} sets a font size directly`).toEqual([]);
    }
  });

  it("do not style their own buttons or dropdowns", () => {
    for (const { name, text } of VIEWS) {
      expect(text, `${name} styles a button itself`).not.toMatch(/border-radius:3px;cursor:pointer/);
      expect(text, `${name} styles a dropdown itself`).not.toMatch(/T\.selectBg/);
    }
  });

  it("do not reach past style.ts for interface colours", () => {
    // `theme.ts` is the palette; `style.ts` is the front door. A view reading a
    // button or panel colour straight from the palette is going around it.
    const chrome = ["btnBg", "btnFg", "btnBorder", "btnBgHover", "btnBgActive", "selectBg", "labelFg", "labelBg"];
    for (const { name, text } of VIEWS) {
      for (const key of chrome) {
        // Both doors out of `theme.ts`: the literal table and the custom
        // properties. Going around `style.ts` through either is going around it.
        expect(text, `${name} reads T.${key} instead of using style.ts`).not.toContain(`T.${key}`);
        expect(text, `${name} reads V.${key} instead of using style.ts`).not.toContain(`V.${key}`);
      }
    }
  });

  it("do not paint a button's state by hand", () => {
    // Resting, hover and on are one stylesheet rule keyed off `aria-pressed`.
    // A view assigning a background to a button is both a second answer to what
    // a button looks like and a state a screen reader is never told about.
    for (const { name, text } of VIEWS) {
      expect(text, `${name} paints a button background itself`).not.toMatch(
        /\.style\.background\s*=\s*[^;]*\b(BUTTON|SELECTABLE|PICK)\b/,
      );
    }
  });
});

describe("style.ts", () => {
  it("describes no atom", () => {
    // Chemical colours mean something and are mirrored from elsewhere. If one
    // ends up here it becomes restylable, and a picture starts claiming
    // something different from the picture gufe draws.
    const text = readFileSync(join(SRC, "shared", "style.ts"), "utf-8");
    const code = text.replace(/\/\*[\s\S]*?\*\//g, "");
    for (const word of ["atom", "element", "molecule", "mapping", "core", "unique"]) {
      expect(code.toLowerCase(), `style.ts mentions "${word}"`).not.toContain(word);
    }
  });

  it("hands out the values the views build from", () => {
    expect(BUTTON.base).toContain("cursor:pointer");
    expect(SELECT).toContain("cursor:pointer");
    expect(FONT.small).toBe("11px");
  });

  it("makes the menu's list the part that scrolls", () => {
    // The list is the one thing in a menu that grows with the payload. It has
    // to scroll inside the panel, or a network of two hundred nodes pushes the
    // hint, the export block and the clear button off the bottom of the view.
    expect(MENU_LIST).toContain("overflow:auto");
    expect(MENU_LIST).toContain("flex:1");
    // And it keeps a few rows in a menu too short for the list and the controls
    // both - past that the panel scrolls rather than the list disappearing.
    expect(MENU_LIST).toMatch(/min-height:\d+px/);
    expect(MENU_PANEL).toContain("overflow-y:auto");
  });
});

describe("the network menus", () => {
  /**
   * This used to check that each of the two views mentioned `MENU_PANEL` and
   * `MENU_LIST`, because each built its own menu and the drift between them
   * showed up as one scrolling on a long list and the other not. There is now
   * one builder, so the same guarantee is a stronger and simpler claim: the
   * panel and the list are laid out in exactly one place, and neither view has
   * gone back to rolling its own.
   */
  it("are laid out in one place, from style.ts", () => {
    const menu = readFileSync(join(SRC, "shared", "network", "menu.ts"), "utf-8");
    expect(menu, "the shared menu does not use MENU_PANEL").toContain("MENU_PANEL");
    expect(menu, "the shared menu does not use MENU_LIST").toContain("MENU_LIST");

    for (const name of ["ligand-network.ts", "alchemical-network.ts"]) {
      const text = readFileSync(join(SRC, "views", name), "utf-8");
      expect(text, `${name} builds a menu panel of its own`).not.toContain("MENU_PANEL");
      expect(text, `${name} builds a menu list of its own`).not.toContain("MENU_LIST");
      expect(text, `${name} styles its own scrolling list`).not.toMatch(/min-height:0;overflow:auto/);
    }
  });
});

/** Relative luminance, so a claim about a colour reading against another is checkable. */
const luminance = (hex: string): number => {
  const linear = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
};

const contrast = (a: string, b: string): number => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

describe("theme.ts", () => {
  it("outlines a node more strongly than it borders a card, on a dark ground", () => {
    // These are different jobs. A card's border lifts it off the panel behind
    // it and a step is enough; a node's outline says where the node is, and on
    // an alchemical network with one composition to tell apart it is the only
    // thing that does. Harmonizing the two puts that outline a step above the
    // canvas, where nobody can see it.
    const { netNodeStroke, netCanvasBg, cardBorder } = THEMES.dark;
    expect(contrast(netNodeStroke, netCanvasBg)).toBeGreaterThan(contrast(cardBorder, netCanvasBg));
  });

  it("holds no chemical colour", () => {
    const text = readFileSync(join(SRC, "shared", "theme.ts"), "utf-8");
    for (const key of ["colorCore", "colorUnique", "linesMol", "overlayMol", "linesDash"]) {
      expect(text, `theme.ts still holds ${key}`).not.toContain(key);
    }
  });
});

describe("the palette as custom properties", () => {
  afterEach(() => {
    setTheme("system");
  });

  it("offers every colour as a var, and nothing that is not a colour", () => {
    // `viewerBg` is `0x`-prefixed for 3Dmol and the group palettes are indexed
    // arrays. Neither is a thing CSS can resolve, so neither is on `V` - which
    // is what makes reaching for one a type error rather than a blank element.
    expect(V.cardBg).toBe("var(--gufe-cardBg)");
    expect(V).not.toHaveProperty("viewerBg");
    expect(V).not.toHaveProperty("netGroupFill");
    for (const key of Object.keys(V)) {
      expect(typeof THEMES.light[key as keyof typeof THEMES.light], `V.${key} is not a colour`).toBe("string");
    }
  });

  it("declares both palettes, with the explicit choice beating the host", () => {
    const sheet = themeStyleSheet();
    expect(sheet).toContain(`--gufe-cardBg:${THEMES.light.cardBg}`);
    expect(sheet).toContain(`--gufe-cardBg:${THEMES.dark.cardBg}`);
    // Dark under the media query is guarded, so a page forcing light on a dark
    // host gets light; dark under the attribute is not, so forcing dark wins too.
    expect(sheet).toContain(`:root:not([${THEME_ATTRIBUTE}="light"])`);
    expect(sheet).toContain(`:root[${THEME_ATTRIBUTE}="dark"]`);
  });

  it("installs one stylesheet however many times it is asked", () => {
    // The bundle can legitimately be evaluated twice on one page, and every
    // view calls this from `connectedCallback`.
    installTheme();
    installTheme();
    expect(document.querySelectorAll("style#gufe-viz-theme")).toHaveLength(1);
  });

  it("switches the palette for the chrome and for what is drawn next", () => {
    setTheme("dark");
    expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toBe("dark");
    // The chrome follows through the custom properties, which is why `V` never
    // changes; `T` is what a view about to draw an SVG attribute reads, and it
    // has to follow too or the next render draws in the old palette.
    expect(V.cardBg).toBe("var(--gufe-cardBg)");
    expect(T.cardBg).toBe(THEMES.dark.cardBg);

    setTheme("light");
    expect(T.cardBg).toBe(THEMES.light.cardBg);

    setTheme("system");
    expect(document.documentElement.hasAttribute(THEME_ATTRIBUTE)).toBe(false);
  });
});
