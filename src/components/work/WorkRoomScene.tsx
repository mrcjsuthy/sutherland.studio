"use client";

import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import type { WorkPiece } from "@/data/site";
import { WorkRoom } from "./WorkRoom";
import { WorkProduct } from "./WorkProduct";
import { WorkRendererSetup } from "./WorkRendererSetup";
import { WorkCameraZoom } from "./WorkCameraZoom";

type Props = {
  item: Pick<WorkPiece, "shape" | "accent" | "model">;
  visible: boolean;
  zoom: number;
};

export function WorkRoomScene({ item, visible, zoom }: Props) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={visible ? "always" : "demand"}
      camera={{ position: [2.4, 1.6, 2.6], fov: 42, near: 0.1, far: 40 }}
      gl={{ antialias: true, alpha: true }}
      className="touch-none"
    >
      <WorkRendererSetup />
      <WorkCameraZoom zoom={zoom} />
      <WorkRoom />
      <Center>
        <WorkProduct shape={item.shape} accent={item.accent} model={item.model} />
      </Center>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.15}
        minPolarAngle={0.15}
        maxPolarAngle={Math.PI - 0.15}
        rotateSpeed={0.65}
        dampingFactor={0.08}
        enableDamping
      />
    </Canvas>
  );
}
