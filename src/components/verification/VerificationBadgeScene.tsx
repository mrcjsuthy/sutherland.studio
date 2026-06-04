"use client";

import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { WorkRoom } from "@/components/work/WorkRoom";
import { WorkRendererSetup } from "@/components/work/WorkRendererSetup";
import { WorkProductGltf } from "@/components/work/WorkProductGltf";

const BADGE_MODEL = "/models/verification-badge.glb";
useGLTF.preload(BADGE_MODEL);

export function VerificationBadgeScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="always"
      camera={{ position: [1.35, 0.95, 1.75], fov: 34, near: 0.1, far: 40 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0 touch-none"
      style={{ background: "transparent" }}
    >
      <WorkRendererSetup />
      <WorkRoom />
      <Center>
        <Suspense fallback={null}>
          <WorkProductGltf url={BADGE_MODEL} />
        </Suspense>
      </Center>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.15}
        minPolarAngle={0.35}
        maxPolarAngle={Math.PI / 2 + 0.15}
        rotateSpeed={0.7}
        dampingFactor={0.08}
        enableDamping
      />
    </Canvas>
  );
}
