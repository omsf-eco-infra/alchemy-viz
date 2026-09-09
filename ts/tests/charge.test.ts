/**
 * How a formal charge is written, and what an edge does to one.
 *
 * Small enough to look obvious and worth pinning anyway: the sign is what a
 * reader reads first, and "0" is the value both networks take as "say nothing",
 * so a helper that returned "+0" would put a badge on every neutral ligand in a
 * campaign.
 */

import { describe, expect, it } from "vitest";

import { chargeChange, chargeLabel } from "../src/shared/charge.js";

describe("formal charge", () => {
  it("signs a charge, and leaves a negative one its own sign", () => {
    expect(chargeLabel(1)).toBe("+1");
    expect(chargeLabel(2)).toBe("+2");
    expect(chargeLabel(-1)).toBe("-1");
    expect(chargeLabel(0)).toBe("0");
  });

  it("measures a change from A to B, in that direction", () => {
    expect(chargeChange({ total_charge: 0 }, { total_charge: -1 })).toBe(-1);
    expect(chargeChange({ total_charge: -1 }, { total_charge: 0 })).toBe(1);
    expect(chargeChange({ total_charge: 2 }, { total_charge: 2 })).toBe(0);
  });

  it("reads a missing charge as neutral rather than as a change", () => {
    // The schema requires `total_charge`, so this is the payload a host built
    // by hand against an older copy of it: an absent number is not evidence of
    // a charge-changing transformation, which is what a NaN would draw.
    expect(chargeChange({}, {})).toBe(0);
    expect(chargeChange({}, { total_charge: 1 })).toBe(1);
  });
});
