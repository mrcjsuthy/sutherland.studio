import type { WorkPiece } from "@/data/site";

export function accentHex(accent: WorkPiece["accent"]) {
  switch (accent) {
    case "rust":
      return "#c2410c";
    case "moss":
      return "#4a5d3a";
    case "copper":
      return "#b66d3a";
  }
}

export const workMaterials = {
  wood: "#b89a72",
  woodDark: "#8a6f4f",
  steel: "#3a3832",
  steelDark: "#2a2823",
  concrete: "#9a9488",
  brass: "#c9a227",
  leather: "#6b4a32",
};
