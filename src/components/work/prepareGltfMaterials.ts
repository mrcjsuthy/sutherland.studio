import * as THREE from "three";

/** Tune imported glTF materials — richer colour, less flat wash-out. */
export function prepareGltfMaterials(root: THREE.Object3D) {
  root.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;

    const materials = Array.isArray(obj.material)
      ? obj.material
      : [obj.material];

    for (const mat of materials) {
      if (
        !(mat instanceof THREE.MeshStandardMaterial) &&
        !(mat instanceof THREE.MeshPhysicalMaterial)
      ) {
        continue;
      }

      mat.envMapIntensity = 0.95;
      mat.roughness = Math.max(mat.roughness, 0.22);
      mat.metalness = Math.min(mat.metalness, 0.75);

      const hsl = { h: 0, s: 0, l: 0 };
      mat.color.getHSL(hsl);
      if (hsl.l > 0.72) {
        mat.color.offsetHSL(0, 0.04, -0.06);
      } else if (hsl.l < 0.28) {
        mat.color.offsetHSL(0, 0.03, 0.14);
      } else if (hsl.s < 0.08) {
        mat.color.offsetHSL(0, 0.04, 0.02);
      }

      if (mat.map) {
        mat.map.colorSpace = THREE.SRGBColorSpace;
        mat.map.anisotropy = 4;
      }
      if (mat.normalMap) mat.normalMap.colorSpace = THREE.LinearSRGBColorSpace;
      if (mat.aoMap) mat.aoMapIntensity = Math.min((mat.aoMapIntensity ?? 1) * 1.2, 1.4);

      mat.needsUpdate = true;
    }
  });
}
