"use client";

import { Environment } from "@react-three/drei";

/** Warm, contrasty studio — avoids blown highlights on light PBR materials. */
export function WorkRoom() {
  return (
    <>
      <fog attach="fog" args={["#d9d1bc", 9, 18]} />

      <Environment
        preset="warehouse"
        environmentIntensity={0.78}
        background={false}
      />

      <ambientLight intensity={0.32} color="#c4b8a4" />
      <hemisphereLight
        color="#ece6d8"
        groundColor="#4a463c"
        intensity={0.62}
      />
      <directionalLight
        position={[5, 7, 4]}
        intensity={1.28}
        color="#faf3e8"
      />
      <directionalLight
        position={[-6, 4, -3]}
        intensity={0.48}
        color="#d9d1bc"
      />
      <directionalLight
        position={[0, 2, -6]}
        intensity={0.32}
        color="#a8a294"
      />
      <pointLight position={[2, 3, 2]} intensity={0.35} color="#f5ead8" distance={10} decay={2} />
    </>
  );
}
