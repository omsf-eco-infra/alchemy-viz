/**
 * Formal charge, as the two networks write it.
 *
 * `total_charge` is gufe's own number for a molecule and the schema requires it
 * on every `SmallMoleculeComponentViz`. It is displayed and never recomputed:
 * the SDF is here to be drawn, and a charge worked out from a drawing would be
 * a second answer to a question gufe has already answered.
 *
 * Both networks show it the same way, because it means the same thing in both.
 * A ligand carrying a charge gets a badge; a transformation that changes one is
 * dashed. Neither is decoration: a charge-changing perturbation needs a protocol
 * that can run one, so which edges those are is the first thing to know about a
 * campaign that has any, and nothing else on either canvas says it.
 *
 * Zero is deliberately silent. Most ligands in most campaigns are neutral, and a
 * badge on every node would be a field of zeros with the two that matter hidden
 * in it.
 */

/** A formal charge as it is written on a node: signed, and never a bare zero. */
export function chargeLabel(charge: number): string {
  return charge > 0 ? `+${charge}` : String(charge);
}

/**
 * What a transformation does to the formal charge, and 0 where it does nothing.
 *
 * Endpoints are anything carrying a `total_charge`, so a ligand network can
 * hand over two molecules and an alchemical network the charges of the two
 * ligands its systems are showing.
 */
export function chargeChange(from: { total_charge?: number }, to: { total_charge?: number }): number {
  return (to.total_charge ?? 0) - (from.total_charge ?? 0);
}
