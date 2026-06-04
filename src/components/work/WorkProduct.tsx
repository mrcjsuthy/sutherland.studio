"use client";

import { Component, Suspense, type ReactNode } from "react";
import type { WorkPiece } from "@/data/site";
import { WorkProductGltf } from "./WorkProductGltf";
import { WorkProductProcedural } from "./WorkProductProcedural";

type Props = Pick<WorkPiece, "shape" | "accent" | "model">;

class GltfBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

export function WorkProduct({ shape, accent, model }: Props) {
  const procedural = <WorkProductProcedural shape={shape} accent={accent} />;

  if (!model) return procedural;

  return (
    <GltfBoundary fallback={procedural}>
      <Suspense fallback={procedural}>
        <WorkProductGltf url={model} />
      </Suspense>
    </GltfBoundary>
  );
}
