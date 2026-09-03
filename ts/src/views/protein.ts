/**
 * `<gufe-protein>` - one structure in a 3Dmol viewer.
 *
 * The statistics and the styling live in `shared/pdb.ts`, and the header, the
 * controls menu and the viewer's lifecycle in `shared/protein-scene.ts`,
 * because `<gufe-complex>` wants every one of them too. What is left in here is
 * what this view alone does: load one PDB and frame it.
 *
 * All three PDB-carrying payload types render through here: a protein, a
 * protein with explicit solvent, and a protein in a membrane are the same
 * picture with different things in it. They stay separate types because the
 * discriminator is what Python dispatches on and what a future view could
 * specialize on; what differs today is where the viewer starts, because hiding
 * the very thing that distinguishes them would make the three
 * indistinguishable on screen.
 */

import { errText } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { load3Dmol, ThreeDmol } from "../shared/engines.js";
import { viewerInteraction } from "../shared/interact.js";
import { applyProteinStyles, parsePdbStats, proteinStatsParts, type PdbStats } from "../shared/pdb.js";
import { proteinScene } from "../shared/protein-scene.js";
import { SURFACE } from "../shared/style.js";
import type {
  ProteinComponentViz,
  ProteinMembraneComponentViz,
  SolvatedPDBComponentViz,
} from "../schema/types.js";

/** Every payload this view draws: one PDB string and a name, three types. */
export type PdbPayload = ProteinComponentViz | SolvatedPDBComponentViz | ProteinMembraneComponentViz;

export class GufeProtein extends GufeElement<PdbPayload> {
  protected override placeholder(): string {
    return "Waiting for a ProteinComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: PdbPayload): ViewHandle {
    const pdb = payload.pdb;
    let stats: PdbStats | null = null;

    // Declared before the scene, because a menu that was left open builds its
    // controls during this call and they are wired to this.
    function restyle(): void {
      const viewer = scene.viewer();
      if (viewer) applyProteinStyles(viewer, scene.opts, stats, scene.showStatus);
    }

    const scene = proteinScene({
      element: this,
      host,
      title: payload.name ?? "",
      fallbackTitle: "Protein",
      // A solvated or membrane system is defined by what surrounds the protein,
      // so it opens with that shown; a bare protein does not, because a few
      // thousand crystallographic waters would bury it.
      waters: payload.type !== "ProteinComponentViz",
      heteroTitle: "Show hetero atoms / ligands / ions / lipids",
      menuLabel: "Representation, colouring and display options",
      restyle,
    });

    if (!pdb || !pdb.trim()) {
      scene.showStatus("No protein data - waiting for a PDB payload.");
      return {};
    }

    try {
      stats = parsePdbStats(pdb);
      scene.setStats(proteinStatsParts(stats));
    } catch (e) {
      scene.showStatus(`PDB parse error: ${errText(e)}`, "error");
    }

    scene.showStatus("Loading 3D viewer...");
    load3Dmol()
      .then(() => {
        const viewer = ThreeDmol!.createViewer(scene.pane.container, { backgroundColor: SURFACE.viewer });
        scene.setViewer(viewer);
        viewer.addModel(pdb, "pdb");
        // applyProteinStyles clears the "Loading..." status (or replaces it with
        // the surface-computing message), so there is nothing to hide here.
        applyProteinStyles(viewer, scene.opts, stats, scene.showStatus);
        viewer.zoomTo();
        viewer.spin(scene.opts.spin ? "y" : false);
        viewer.render();
        // After zoomTo, so the bound is measured from the opening framing.
        scene.setInteraction(viewerInteraction(scene.pane.container, viewer));
      })
      .catch((e: unknown) => {
        scene.showStatus(`Failed to render structure: ${errText(e)}`, "error");
      });

    return scene.handle;
  }
}

defineElement("gufe-protein", GufeProtein);
