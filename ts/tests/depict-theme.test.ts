/**
 * Depictions on a dark ground.
 *
 * RDKit draws for paper, and a dark interface has to ask it for something else.
 * What matters is not which hex codes come back - those are generated from
 * RDKit's own dark mode and checked by `check-generated` - but that the ground
 * and the ink are always decided together. A palette without a dark ground, or a
 * dark ground without a palette, is an invisible molecule, and both mistakes are
 * one edit away.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import {
  DARK_ATOM_PALETTE,
  DARK_DRAW_OPTIONS,
  DARK_MONO_PALETTE,
  MAPPING_BW_PALETTE,
} from "../src/shared/atom-colors.js";
import {
  darkDepictions,
  depictGround,
  depictThemeOptions,
  nodeCardCaption,
  nodeCardGround,
  setDarkDepictions,
} from "../src/shared/depict-theme.js";
import { DEFAULT_DEPICT_STYLE, depictionDetails } from "../src/shared/depict-style.js";
import { depictSVG } from "../src/shared/sdf.js";
import { THEMES } from "../src/shared/theme.js";
import { clearFakeEngines, seedFakeEngines, seededRDKit, type SeededEnginesResult } from "./helpers.js";

// jsdom answers no to the dark-mode query, so the suite starts light and every
// test that changes that puts it back.
let engines: SeededEnginesResult;
beforeEach(() => {
  engines = seedFakeEngines();
});
afterEach(() => {
  setDarkDepictions(false);
  clearFakeEngines();
});

describe("2D depictions and the page theme", () => {
  it("starts on paper, which is what jsdom asks for", () => {
    expect(darkDepictions()).toBe(false);
    expect(depictGround()).toBe(THEMES.light.canvas2DBg);
  });

  it("draws gufe's black palette on paper and RDKit's dark one on a dark ground", () => {
    expect(depictThemeOptions("mono").atomColourPalette).toBe(MAPPING_BW_PALETTE);
    expect(depictThemeOptions("cpk")).toEqual({});

    setDarkDepictions(true);
    expect(depictThemeOptions("cpk").atomColourPalette).toBe(DARK_ATOM_PALETTE);
    expect(depictThemeOptions("mono").atomColourPalette).toBe(DARK_MONO_PALETTE);
  });

  it("moves the ground with the palette, never one without the other", () => {
    setDarkDepictions(true);
    expect(depictGround()).toBe(THEMES.dark.canvas2DBg);
    expect(depictGround()).not.toBe(THEMES.light.canvas2DBg);
  });

  it("colours the atom indices, which are notes and not annotations", () => {
    setDarkDepictions(true);
    const options = depictThemeOptions("mono");
    // A mapping is drawn with `addAtomIndices`, and RDKit draws each index as an
    // atom *note*: `annotationColour` does not touch it, so a depiction with
    // every other ink right still numbers its atoms in black. This is the one
    // that was wrong the first time it was written.
    expect(options.atomNoteColour).toEqual(DARK_DRAW_OPTIONS.atomNoteColour);
    expect(options.annotationColour).toEqual(DARK_DRAW_OPTIONS.annotationColour);
    expect(options.atomNoteColour).not.toEqual([0, 0, 0, 1]);
  });

  it("asks for no background, so the view's own surface is the ground", () => {
    setDarkDepictions(true);
    expect(depictThemeOptions("mono").backgroundColour).toEqual([0, 0, 0, 0]);
  });

  it("carries the dark options into a mapping's draw options", () => {
    setDarkDepictions(true);
    const details = depictionDetails(DEFAULT_DEPICT_STYLE, 420, [], new Set(), "rdkit", 10);
    expect(details.atomColourPalette).toBe(DARK_MONO_PALETTE);
    expect(details.backgroundColour).toEqual([0, 0, 0, 0]);
    // and still everything the style asked for
    expect(details.addAtomIndices).toBe(DEFAULT_DEPICT_STYLE.atomNumbers);
    expect(details.width).toBe(420);
  });

  it("carries them into a single molecule's depiction, which has nothing to highlight", () => {
    const rdkit = seededRDKit();
    depictSVG(rdkit, "mol", 300, "rdkit", undefined, depictThemeOptions("cpk"));
    // Paper needs no options at all, so the plain drawing call is enough.
    expect(engines.highlighted).toHaveLength(0);

    setDarkDepictions(true);
    depictSVG(rdkit, "mol", 300, "rdkit", undefined, depictThemeOptions("cpk"));
    expect(engines.highlighted).toHaveLength(1);
    const details = JSON.parse(engines.highlighted[0]);
    expect(details.atomColourPalette["6"]).toEqual(DARK_ATOM_PALETTE[6]);
    expect(details.width).toBe(300);
    expect(details.atoms).toBeUndefined();
  });

  it("moves a network node's plate with the structures drawn on it", () => {
    // The failure this rules out is a plate left on paper under a dark
    // structure, or the other way round: either is an empty-looking node.
    expect(nodeCardGround()).toBe(THEMES.light.netDepictBg);
    setDarkDepictions(true);
    expect(nodeCardGround()).toBe(THEMES.dark.netDepictBg);
    expect(nodeCardGround()).not.toBe(THEMES.light.netDepictBg);
    // and the name under it takes an ink that reads against the new plate
    expect(nodeCardCaption()).toBe(THEMES.dark.netDepictCaption);
  });

  it("keeps the plate the canvas's own colour, so it clears rather than shows", () => {
    for (const theme of [THEMES.light, THEMES.dark]) {
      expect(theme.netDepictBg).toBe(theme.netCanvasBg);
    }
  });
});
