/**
 * `<gufe-solvent>` - the conditions card for a SolventComponent.
 *
 * A SolventComponent has no structure: it is bulk conditions, and gufe carries
 * it as a handful of flat fields. So there is no picture here. There used to be
 * a box of dots beside the fields, which looked like a simulation box but was
 * placed by a seeded generator and counted nothing - a picture that has to
 * caption itself "not quantitative" is telling a reader less than the row it
 * sits next to.
 *
 * What the fields *can* have is a shape. As six equal rows they read as a
 * dump: the solvent, the salt and the one real number in it all cost the same
 * effort to find. So they are grouped the way a reader asks for them - what the
 * solvent is, and how it is ionized - and the concentration is set in
 * `FONT.display`, because it is the single value that differs between two
 * otherwise identical solvents.
 *
 * `neutralize` belongs with the ions rather than in a section of its own. It is
 * not a fact about charge that a reader has to reconcile with anything else on
 * the card: it says whether counter-ions are added on top of the concentration
 * beside it, which is the same subject as the two ions above it.
 *
 * There is no header strip. Its chips coloured the ions to match dots in that
 * old picture, and with the picture gone they said what the card below already
 * says.
 */

import { card, el } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { CHIP, FONT, NOTE, SECTION_LABEL, SPACE, WEIGHT } from "../shared/style.js";
import { T } from "../shared/theme.js";
import type { SolventComponentViz } from "../schema/types.js";

/**
 * Split a display quantity into its number and its unit, as in
 * "0.15 molar" -> `{ value: "0.15", unit: "molar" }`.
 *
 * The payload carries the string openff printed, because the unit is part of
 * the value; this only decides how much of it to set large. Anything that does
 * not start with a number is left whole and shown as it arrived, which is the
 * honest outcome for a unit system this view does not parse.
 */
function splitQuantity(text: string): { value: string; unit: string } {
  const match = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*(.*)$/.exec(text || "");
  if (!match) return { value: (text || "").trim(), unit: "" };
  return { value: match[1], unit: match[2].trim() };
}

/** A block of the card, under a small uppercase heading. */
function section(title: string, first = false): HTMLDivElement {
  const box = el(
    "div",
    `display:flex;flex-direction:column;gap:${SPACE.xl};padding:${SPACE.xxl} 0;` +
      (first ? "padding-top:0;" : `border-top:1px solid ${T.splitBorder};`),
  );
  box.appendChild(el("div", SECTION_LABEL, title));
  return box;
}

/** A caption under a value, naming the field it came from. */
function caption(text: string): HTMLDivElement {
  return el(
    "div",
    `font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;` +
      `text-transform:uppercase;color:${T.textMuted2};`,
    text,
  );
}

/** One ion of the pair: its formula, captioned with the sign it carries. */
function ion(formula: string, role: string): HTMLDivElement {
  const box = el("div", `display:flex;flex-direction:column;align-items:center;gap:${SPACE.sm};`);
  box.appendChild(
    el(
      "span",
      `${CHIP.plain}${CHIP.outline}font-family:${FONT.mono};font-size:${FONT.body};`,
      formula,
    ),
  );
  box.appendChild(caption(role));
  return box;
}

export class GufeSolvent extends GufeElement<SolventComponentViz> {
  protected override placeholder(): string {
    return "Waiting for a SolventComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: SolventComponentViz): ViewHandle {
    const body = el(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;",
    );
    host.appendChild(body);

    // Every field the schema requires except the gufe key: that is the identity
    // gufe hashes objects by, not a fact about the solvent, and a reader looking
    // at bulk conditions has no use for it.
    const panel = card();
    panel.style.maxWidth = "560px";
    panel.style.width = "100%";
    panel.style.gap = "0";

    // --- what the solvent is -----------------------------------------------
    const solvent = section("Solvent", true);
    const identity = el("div", `display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;`);
    const smiles = el("div", "display:flex;flex-direction:column;gap:5px;min-width:0;");
    const formula = el(
      "div",
      `font-family:${FONT.mono};font-size:${FONT.display};font-weight:${WEIGHT.bold};` +
        `line-height:1.1;color:${T.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
      payload.smiles,
    );
    smiles.appendChild(formula);
    smiles.appendChild(caption("SMILES"));
    identity.appendChild(smiles);

    // gufe names a solvent after what is in it, so for the common case the name
    // is the SMILES and the ions again. Repeating it beside them would be the
    // card saying the same thing twice, so it appears only when it is its own
    // fact - a solvent someone named by hand.
    const name = payload.name || "";
    if (name && name !== payload.smiles) {
      const named = el("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;min-width:0;");
      named.appendChild(
        el(
          "div",
          `font-size:${FONT.body};color:${T.textPrimary};user-select:text;cursor:text;overflow-wrap:anywhere;`,
          name,
        ),
      );
      named.appendChild(caption("Name"));
      identity.appendChild(named);
    }
    solvent.appendChild(identity);
    panel.appendChild(solvent);

    // --- what is dissolved in it -------------------------------------------
    const salt = section("Ions");
    const row = el("div", `display:flex;align-items:flex-end;gap:${SPACE.xxl};flex-wrap:wrap;`);
    if (payload.positive_ion) row.appendChild(ion(payload.positive_ion, "cation"));
    if (payload.negative_ion) row.appendChild(ion(payload.negative_ion, "anion"));

    // The one number here, and the reason this view is not a list of strings:
    // two solvents in a campaign usually differ in this and nothing else. It is
    // also the only thing on the card in the accent colour: the SMILES above is
    // as large but stays in the text colour, so the card has one focal point
    // rather than two competing for the same glance.
    const { value, unit } = splitQuantity(payload.ion_concentration);
    const amount = el("div", "display:flex;flex-direction:column;gap:5px;margin-left:auto;text-align:right;");
    const quantity = el("div", `display:flex;align-items:baseline;gap:${SPACE.md};justify-content:flex-end;`);
    quantity.appendChild(
      el(
        "div",
        `font-size:${FONT.display};font-weight:${WEIGHT.bold};line-height:1;color:${T.titleColor};`,
        value,
      ),
    );
    if (unit) {
      // A text node between the two, so the pair still reads as the one string
      // the payload carried when it is copied out of the page.
      quantity.appendChild(document.createTextNode(" "));
      quantity.appendChild(el("div", `font-size:${FONT.body};color:${T.textMuted};`, unit));
    }
    amount.appendChild(quantity);
    amount.appendChild(caption("Ion concentration"));
    row.appendChild(amount);
    salt.appendChild(row);

    // Whether more of these two are added than the concentration asks for, which
    // is the whole of what `neutralize` says. Filled when something is added, an
    // empty outline when nothing is, rather than two filled pills in two
    // colours: the second colour would be a second accent on a card that
    // already spends its one on the concentration.
    const on = payload.neutralize;
    salt.appendChild(
      el(
        "span",
        `${CHIP.plain}align-self:flex-start;font-weight:${WEIGHT.bold};` +
          (on ? `background:${T.okBg};color:${T.okFg};` : `${CHIP.outline}color:${T.textMuted};`),
        on ? "Neutralized" : "Not neutralized",
      ),
    );
    salt.appendChild(
      el(
        "div",
        NOTE,
        on
          ? "Counter-ions are added on top of the concentration above, enough to cancel whatever net charge the rest of the system carries."
          : "Only the concentration above: nothing is added to cancel the net charge the rest of the system carries.",
      ),
    );
    panel.appendChild(salt);

    body.appendChild(panel);

    return {};
  }
}

defineElement("gufe-solvent", GufeSolvent);
