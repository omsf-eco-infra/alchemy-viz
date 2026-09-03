/**
 * The mode bar in its two forms.
 *
 * jsdom has no layout, so the widths a real pane would report are stubbed here.
 * That is the whole of what is faked: the threshold, the swap and the shared
 * selection are the real ones.
 */

import { describe, expect, it } from "vitest";
import { el, switcher } from "../src/shared/dom.js";
import { choice } from "../src/shared/settings.js";

/** A pane of `width` px holding a bar that wants `wants` px. */
function fitted(width: number, wants: number) {
  const pane = el("div");
  const bar = el("div");
  Object.defineProperty(pane, "clientWidth", { value: width, configurable: true });
  Object.defineProperty(bar, "offsetWidth", { value: wants, configurable: true });
  pane.appendChild(bar);
  const picked: string[] = [];
  const modes = switcher(ITEMS, "a", (id) => picked.push(id), { fit: { pane, bar } });
  bar.appendChild(modes);
  return { modes, picked, select: modes.querySelector("select")!, buttons: modes.buttons };
}

const ITEMS = [
  { id: "a", label: "Alpha" },
  { id: "b", label: "Beta" },
  { id: "c", label: "Gamma" },
] as const;

describe("the switcher", () => {
  it("offers the same options both ways", () => {
    const { modes, select } = fitted(500, 300);
    expect([...modes.buttons.querySelectorAll("button")].map((b) => b.textContent)).toEqual([
      "Alpha",
      "Beta",
      "Gamma",
    ]);
    expect([...select.options].map((o) => o.value)).toEqual(["a", "b", "c"]);
  });

  it("keeps the buttons on a pane that fits them", () => {
    const { modes, select } = fitted(500, 300);
    expect(modes.buttons.style.display).not.toBe("none");
    expect(select.style.display).toBe("none");
  });

  it("shows the dropdown instead on a pane that does not", () => {
    const { modes, select } = fitted(200, 300);
    expect(modes.buttons.style.display).toBe("none");
    expect(select.style.display).not.toBe("none");
  });

  it("counts the margin the floating bar leaves at each edge", () => {
    // 300 of buttons in a 310px pane is 300 of buttons touching both edges.
    expect(fitted(310, 300).modes.buttons.style.display).toBe("none");
    expect(fitted(340, 300).modes.buttons.style.display).not.toBe("none");
  });

  it("says which form it changed to, for a view with a control to move", () => {
    const pane = el("div");
    const bar = el("div");
    const layouts: boolean[] = [];
    const modes = switcher(ITEMS, "a", () => {}, { onLayout: (compact) => layouts.push(compact) });
    bar.appendChild(modes);
    pane.appendChild(bar);
    modes.setCompact(true);
    modes.setCompact(true);
    modes.setCompact(false);
    expect(layouts).toEqual([true, false]);
  });

  it("carries the choice from one form to the other", () => {
    const { modes, select, buttons, picked } = fitted(500, 300);
    select.value = "c";
    select.onchange!(new Event("change"));
    expect(picked).toEqual(["c"]);
    // The buttons are hidden at this moment, and are what the pane will show
    // again the moment it is widened.
    modes.setCompact(true);
    modes.setCompact(false);
    expect(select.value).toBe("c");

    buttons.querySelectorAll("button")[1].click();
    expect(picked).toEqual(["c", "b"]);
    expect(select.value).toBe("b");
  });

  it("remembers the choice whichever form made it", () => {
    const setting = choice("test.switcher", "a", ["a", "b", "c"]);
    const pane = el("div");
    const bar = el("div");
    const modes = switcher(ITEMS, "a", () => {}, { remember: setting });
    bar.appendChild(modes);
    pane.appendChild(bar);
    const select = modes.querySelector("select")!;
    select.value = "b";
    select.onchange!(new Event("change"));
    expect(setting.get()).toBe("b");

    // And a switcher built next opens on it, in both forms.
    const again = switcher(ITEMS, "a", () => {}, { remember: setting });
    expect(again.querySelector("select")!.value).toBe("b");
    expect(again.buttons.querySelectorAll("button")[1].style.background).not.toBe(
      again.buttons.querySelectorAll("button")[0].style.background,
    );
  });
});
