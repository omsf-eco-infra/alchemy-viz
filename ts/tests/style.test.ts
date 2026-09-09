/**
 * That the interface stays centralized.
 *
 * `style.ts` is only worth having if a view cannot quietly go around it. These
 * read the source rather than the DOM, because what is being checked is where a
 * value is written, not what it renders to.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BUTTON, FONT, MENU_LIST, MENU_PANEL, SELECT } from "../src/shared/style.js";
import { THEMES } from "../src/shared/theme.js";

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
        expect(text, `${name} reads T.${key} instead of using style.ts`).not.toContain(`T.${key}`);
      }
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
  it("both build their panel and list from style.ts", () => {
    // Two menus that lay themselves out separately drift, and the drift shows
    // up as one of them scrolling on a long list and the other not.
    for (const name of ["ligand-network.ts", "alchemical-network.ts"]) {
      const text = readFileSync(join(SRC, "views", name), "utf-8");
      expect(text, `${name} does not use MENU_PANEL`).toContain("MENU_PANEL");
      expect(text, `${name} does not use MENU_LIST`).toContain("MENU_LIST");
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
