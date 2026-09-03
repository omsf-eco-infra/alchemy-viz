/**
 * `<gufe-complex>` - the components of one chemical system in a single scene.
 *
 * Every other view draws one component. This one draws several, and it exists
 * because a bound complex is not a protein next to a ligand: the two carry
 * coordinates in the same frame, and that frame is the result - it is where the
 * ligand sits in the site, which is the thing a binding campaign is about. Draw
 * them one at a time, as `<gufe-chemical-system>` otherwise does, and the pose
 * is the one part of the payload nobody can see.
 *
 * Nothing here computes the arrangement. The SDF conformer and the PDB arrive
 * already sharing a frame - docked upstream, carried through gufe unmoved - so
 * this loads both into one 3Dmol viewer and does not touch a coordinate. That is
 * also the failure mode to watch for: anything that recentres a model on its own
 * bounding box would pull the ligand out of the site, and it would be obvious.
 *
 * It is deliberately not in `VIEW_TAGS`. The dispatcher's table maps schema
 * types to elements, and a complex is not a type - it is a way of looking at a
 * `ChemicalSystemViz` that happens to hold both kinds of component. So
 * `<gufe-chemical-system>` mounts this itself, beside the per-component pane,
 * and `complexPartsFor` is what decides whether there is anything to mount.
 */

import { buttonGroup, errText } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { choice } from "../shared/settings.js";
import { load3Dmol, ThreeDmol } from "../shared/engines.js";
import { viewerInteraction } from "../shared/interact.js";
import {
  applyLigandStyles,
  applyProteinStyles,
  parsePdbStats,
  proteinStatsParts,
  type PdbStats,
} from "../shared/pdb.js";
import { proteinScene } from "../shared/protein-scene.js";
import { ensureSDFTerminator, parseCounts } from "../shared/sdf.js";
import { buildRegistry, lookup, type RegistryIndex } from "../schema/registry.js";
import { SURFACE } from "../shared/style.js";
import type { ChemicalSystemViz, ComponentViz, SmallMoleculeComponentViz } from "../schema/types.js";
import type { PdbPayload } from "./protein.js";

/** The three payload types that carry a PDB, which is what a structure is here. */
const PDB_TYPES = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];

/** The components of a system this view can put in one scene, split by kind. */
export interface ComplexParts {
  structures: PdbPayload[];
  ligands: SmallMoleculeComponentViz[];
}

/**
 * What of `system` could be drawn as a complex.
 *
 * Both the offer and the drawing come from here, so the button cannot appear
 * over a scene that turns out to have nothing in it. A system with no ligand or
 * no structure is not half a complex, it is a solvent leg or a bare protein, and
 * `hasComplex` is false for it.
 */
export function complexPartsFor(system: ChemicalSystemViz, registry: RegistryIndex): ComplexParts {
  const structures: PdbPayload[] = [];
  const ligands: SmallMoleculeComponentViz[] = [];
  for (const key of Object.values(system.components ?? {})) {
    const component = lookup(registry, key) as ComponentViz | undefined;
    if (!component) continue;
    if (PDB_TYPES.includes(component.type)) structures.push(component as PdbPayload);
    else if (component.type === "SmallMoleculeComponentViz") ligands.push(component);
  }
  return { structures, ligands };
}

/** Whether there is a complex in `parts` at all - both kinds, or it is not one. */
export function hasComplex(parts: ComplexParts): boolean {
  return parts.structures.length > 0 && parts.ligands.length > 0;
}

/** The one control this view has that `<gufe-protein>` does not. */
const FOCUS_MODES = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" },
] as const;

type Focus = (typeof FOCUS_MODES)[number]["id"];

/**
 * How far to pull back from the ligand for the site framing.
 *
 * `zoomTo` on the ligand alone fills the pane with the ligand and nothing else,
 * which answers the wrong question: the point of the picture is what surrounds
 * it. Below 1 zooms out, and this much puts a shell of residues around the
 * molecule at the pane sizes this view is used at.
 */
const SITE_ZOOM_OUT = 0.4;

export class GufeComplex extends GufeElement<ChemicalSystemViz> {
  protected override placeholder(): string {
    return "Waiting for a ChemicalSystem payload...";
  }

  protected renderView(host: HTMLDivElement, payload: ChemicalSystemViz): ViewHandle {
    const parts = complexPartsFor(payload, buildRegistry(payload));

    // The models go in structures-first, so a protein's index is its position in
    // `structures` and a ligand's is offset past all of them. Every selection
    // below is built from these two arrays and never from a literal, because the
    // one thing that would silently produce a wrong picture here is styling the
    // ligand as though it were a chain.
    const proteinModels = parts.structures.map((_, i) => i);
    const ligandModels = parts.ligands.map((_, i) => parts.structures.length + i);

    // Which framing is in force. Read before the scene is built: a menu that
    // was left open builds its controls during that call, and the focus buttons
    // are wired to this.
    const focusSetting = choice<Focus>(
      "complex.focus",
      "site",
      FOCUS_MODES.map((f) => f.id),
    );
    let focus: Focus = focusSetting.get();
    let stats: PdbStats | null = null;

    const scene = proteinScene({
      element: this,
      host,
      title: payload.name ?? "",
      fallbackTitle: "Complex",
      // The exception the protein view makes for its own reason and this one
      // makes for another: in a complex the waters sit between the eye and the
      // site.
      waters: false,
      heteroTitle: "Show hetero atoms / ions / lipids in the structure",
      menuLabel: "Representation, colouring, framing and display options",
      restyle,
      // The framing belongs beside the reset, which is the other control that
      // moves the camera rather than what is in front of it.
      camera: () =>
        [
          buttonGroup(
            FOCUS_MODES,
            focus,
            (id) => {
              focus = id as Focus;
              reframe();
            },
            focusSetting,
          ),
        ],
      // Back to the framing in force, not to the whole scene: someone reading a
      // site who has spun the camera off it wants the site back.
      reset: () => reframe(),
    });

    function restyle(): void {
      const viewer = scene.viewer();
      if (!viewer) return;
      applyProteinStyles(viewer, scene.opts, stats, scene.showStatus, { model: proteinModels });
      applyLigandStyles(viewer, { model: ligandModels });
      viewer.render();
    }

    /**
     * Point the camera at whatever the focus asks for, and re-measure the zoom.
     *
     * The bounded zoom takes its limits from the framing it was built on, so a
     * switch between a site and a whole kinase domain has to build a new one -
     * keeping the old one would clamp the way out of a site to the distance a
     * site needed.
     */
    function reframe(): void {
      const viewer = scene.viewer();
      if (!viewer) return;
      if (focus === "site" && ligandModels.length) {
        viewer.zoomTo({ model: ligandModels });
        viewer.zoom(SITE_ZOOM_OUT);
      } else {
        viewer.zoomTo();
      }
      viewer.render();
      scene.interaction()?.cleanup();
      scene.setInteraction(viewerInteraction(scene.pane.container, viewer));
    }

    if (!parts.structures.length || !parts.ligands.length) {
      // `<gufe-chemical-system>` only offers this pane when both are there, so
      // reaching it means a payload changed under the element rather than a
      // reader clicking something they should not have been shown.
      scene.showStatus("This system has no ligand and structure to draw together.");
      return {};
    }

    scene.setStats(complexStatsParts(parts, () => stats));
    try {
      // The first structure's statistics, which is all of them in every payload
      // gufe produces: a system with two proteins in it has no natural single
      // readout, and the colour-by-residue gradient needs one structure's range.
      stats = parsePdbStats(parts.structures[0].pdb);
      scene.setStats(complexStatsParts(parts, () => stats));
    } catch (e) {
      scene.showStatus(`PDB parse error: ${errText(e)}`, "error");
    }

    scene.showStatus("Loading 3D viewer...");
    load3Dmol()
      .then(() => {
        const viewer = ThreeDmol!.createViewer(scene.pane.container, { backgroundColor: SURFACE.viewer });
        scene.setViewer(viewer);
        // Structures first, then ligands: this is what `proteinModels` and
        // `ligandModels` above are indices into.
        for (const structure of parts.structures) viewer.addModel(structure.pdb, "pdb");
        for (const ligand of parts.ligands) viewer.addModel(ensureSDFTerminator(ligand.sdf), "sdf");
        restyle();
        reframe();
        viewer.spin(scene.opts.spin ? "y" : false);
        viewer.render();
      })
      .catch((e: unknown) => {
        scene.showStatus(`Failed to render structure: ${errText(e)}`, "error");
      });

    return scene.handle;
  }
}

/**
 * The readout: what is in the scene, from both sides of it.
 *
 * The protein statistics are the same line `<gufe-protein>` shows, so the two
 * panes of one system agree about the structure, with the ligand's own atom
 * count in front of it - that being the number a reader of a complex is
 * actually checking.
 */
function complexStatsParts(parts: ComplexParts, stats: () => PdbStats | null): string[] {
  const atoms = parts.ligands.reduce((total, ligand) => {
    const counts = parseCounts(ligand.sdf);
    return counts ? total + counts.atoms : total;
  }, 0);
  const ligand = `${parts.ligands.length === 1 ? "ligand" : `${parts.ligands.length} ligands`} ${atoms} atoms`;
  const structure = stats();
  return structure ? [ligand, ...proteinStatsParts(structure)] : [ligand];
}

defineElement("gufe-complex", GufeComplex);
