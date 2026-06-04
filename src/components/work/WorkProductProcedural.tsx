"use client";

import type { WorkShape, WorkPiece } from "@/data/site";
import { accentHex, workMaterials } from "./accentColors";

type Props = {
  shape: WorkShape;
  accent: WorkPiece["accent"];
};

export function WorkProductProcedural({ shape, accent }: Props) {
  const accentColor = accentHex(accent);

  switch (shape) {
    case "table":
      return (
        <group position={[0, 0.02, 0]}>
          <mesh position={[0, 0.74, 0]} castShadow>
            <boxGeometry args={[1.6, 0.06, 0.9]} />
            <meshStandardMaterial color={workMaterials.wood} roughness={0.65} />
          </mesh>
          <mesh position={[0, 0.36, 0]} castShadow>
            <boxGeometry args={[0.5, 0.72, 0.5]} />
            <meshStandardMaterial color={workMaterials.steel} metalness={0.55} roughness={0.35} />
          </mesh>
          <mesh position={[0, 0.36, 0]}>
            <boxGeometry args={[0.52, 0.74, 0.52]} />
            <meshStandardMaterial color={accentColor} wireframe />
          </mesh>
        </group>
      );

    case "shelf":
      return (
        <group position={[0, 0.5, 0]}>
          {[0, 0.55, 1.1].map((y) => (
            <mesh key={y} position={[0, y, 0]} castShadow>
              <boxGeometry args={[1.1, 0.04, 0.35]} />
              <meshStandardMaterial color={workMaterials.wood} roughness={0.6} />
            </mesh>
          ))}
          <mesh position={[-0.52, 0.55, 0]} castShadow>
            <boxGeometry args={[0.04, 1.15, 0.35]} />
            <meshStandardMaterial color={workMaterials.steel} metalness={0.5} roughness={0.4} />
          </mesh>
          <mesh position={[0.52, 0.55, 0]} castShadow>
            <boxGeometry args={[0.04, 1.15, 0.35]} />
            <meshStandardMaterial color={workMaterials.steel} metalness={0.5} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.55, -0.16]}>
            <boxGeometry args={[1.12, 1.18, 0.02]} />
            <meshStandardMaterial color={accentColor} opacity={0.35} transparent />
          </mesh>
        </group>
      );

    case "lamp":
      return (
        <group position={[0, 0.05, 0]}>
          <mesh position={[0, 0.22, 0]} castShadow>
            <cylinderGeometry args={[0.22, 0.26, 0.44, 16]} />
            <meshStandardMaterial color={workMaterials.concrete} roughness={0.85} />
          </mesh>
          <mesh position={[0, 0.62, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
            <meshStandardMaterial color={workMaterials.brass} metalness={0.75} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0.92, 0]} castShadow>
            <coneGeometry args={[0.28, 0.38, 20]} />
            <meshStandardMaterial color={workMaterials.woodDark} roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <torusGeometry args={[0.24, 0.015, 8, 32]} />
            <meshStandardMaterial color={accentColor} />
          </mesh>
        </group>
      );

    case "chair":
      return (
        <group position={[0, 0.02, 0.05]} rotation={[0, -0.35, 0]}>
          <mesh position={[0, 0.46, 0]} castShadow>
            <boxGeometry args={[0.48, 0.06, 0.48]} />
            <meshStandardMaterial color={workMaterials.wood} roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.82, -0.18]} castShadow>
            <boxGeometry args={[0.44, 0.5, 0.06]} />
            <meshStandardMaterial color={workMaterials.woodDark} roughness={0.55} />
          </mesh>
          {[
            [-0.18, 0.22, 0.18],
            [0.18, 0.22, 0.18],
            [-0.18, 0.22, -0.18],
            [0.18, 0.22, -0.18],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.44, 8]} />
              <meshStandardMaterial color={workMaterials.steelDark} metalness={0.4} />
            </mesh>
          ))}
          <mesh position={[0, 0.48, 0]}>
            <boxGeometry args={[0.5, 0.08, 0.5]} />
            <meshStandardMaterial color={accentColor} wireframe />
          </mesh>
        </group>
      );

    case "relief":
      return (
        <group position={[0, 1.05, -0.05]}>
          {[0, 1, 2].map((i) => (
            <mesh
              key={i}
              position={[(i - 1) * 0.38, (i - 1) * 0.12, 0.04 * (i - 1)]}
              rotation={[0, 0, (i - 1) * 0.08]}
              castShadow
            >
              <boxGeometry args={[0.32, 0.72, 0.06]} />
              <meshStandardMaterial
                color={i === 1 ? accentColor : workMaterials.wood}
                roughness={0.55}
                metalness={i === 0 ? 0.35 : 0}
              />
            </mesh>
          ))}
        </group>
      );

    case "bench":
      return (
        <group position={[0, 0.02, 0]}>
          <mesh position={[0, 0.88, 0]} castShadow>
            <boxGeometry args={[1.5, 0.08, 0.65]} />
            <meshStandardMaterial color={workMaterials.wood} roughness={0.7} />
          </mesh>
          <mesh position={[-0.55, 0.44, 0]} castShadow>
            <boxGeometry args={[0.35, 0.88, 0.55]} />
            <meshStandardMaterial color={workMaterials.steel} metalness={0.45} roughness={0.4} />
          </mesh>
          {[
            [-0.62, 0.42, 0.22],
            [0.62, 0.42, 0.22],
            [-0.62, 0.42, -0.22],
            [0.62, 0.42, -0.22],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]} castShadow>
              <boxGeometry args={[0.06, 0.84, 0.06]} />
              <meshStandardMaterial color={workMaterials.steelDark} />
            </mesh>
          ))}
          <mesh position={[0.42, 0.72, 0.28]} castShadow>
            <boxGeometry args={[0.18, 0.12, 0.18]} />
            <meshStandardMaterial color={accentColor} metalness={0.3} roughness={0.5} />
          </mesh>
        </group>
      );
  }
}
