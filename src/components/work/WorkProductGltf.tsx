"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { prepareGltfMaterials } from "./prepareGltfMaterials";

type Props = {
  url: string;
};

export function WorkProductGltf({ url }: Props) {
  const { scene } = useGLTF(url);

  const cloned = useMemo(() => {
    const root = scene.clone(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const max = Math.max(size.x, size.y, size.z);
    if (max > 0) root.scale.setScalar(1.35 / max);
    prepareGltfMaterials(root);
    return root;
  }, [scene]);

  return <primitive object={cloned} />;
}
