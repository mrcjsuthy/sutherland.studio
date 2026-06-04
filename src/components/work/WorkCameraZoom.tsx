"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const BASE_DISTANCE = 3.95;
const MIN_FACTOR = 0.62;
const MAX_FACTOR = 1.38;

/** Maps slider 0–100 to camera distance; orbit target stays centred. */
export function WorkCameraZoom({ zoom }: { zoom: number }) {
  const { camera, invalidate } = useThree();
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;
  const direction = useRef<{ x: number; y: number; z: number } | null>(null);

  useEffect(() => {
    if (!direction.current) {
      const len = Math.hypot(camera.position.x, camera.position.y, camera.position.z);
      direction.current = {
        x: camera.position.x / len,
        y: camera.position.y / len,
        z: camera.position.z / len,
      };
    }

    const factor = MIN_FACTOR + (zoom / 100) * (MAX_FACTOR - MIN_FACTOR);
    const dist = BASE_DISTANCE / factor;
    const d = direction.current;

    camera.position.set(d.x * dist, d.y * dist, d.z * dist);
    camera.updateProjectionMatrix();
    controls?.update?.();
    invalidate();
  }, [zoom, camera, controls, invalidate]);

  return null;
}
