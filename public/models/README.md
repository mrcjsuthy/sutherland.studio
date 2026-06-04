# 3D product models (Selected work)

## Best file format: **GLB**

Use **`.glb`** (binary glTF) — this is what the site loads and what you should export from Blender, Fusion, Rhino, SketchUp (via plugin), or online converters.

| Format | Use here? |
|--------|-----------|
| **GLB** | **Yes — preferred.** Single file, textures embedded, fast on the web. |
| GLTF + `.bin` + textures | Works, but multiple files; only use if you cannot export GLB. |
| OBJ / FBX / STL / USDZ | **No** — convert to GLB first (Blender: File → Export → glTF 2.0, format **GLB**). |
| Draco-compressed GLB | **Yes** — smaller downloads; Blender can enable Draco on export. |

**Export checklist**

- **One mesh per product** (or merged object) where possible.
- **Apply scale** before export (1 unit ≈ 1 metre is fine; the viewer auto-scales).
- **Centre the object** on the origin, or place the base near the origin — the viewer centres it in frame.
- **Textures baked in** (PBR: base color, roughness, metalness, normals).
- Target **under ~5 MB** per piece for fast loads; Draco helps for dense scans.

Wire up in `src/data/site.ts`:

```ts
{
  n: "01",
  title: "Tavolo Grezzo",
  shape: "table",
  model: "/models/01-tavolo-grezzo.glb",
}
```

Until `model` is set, a procedural placeholder floats in the viewer.

Suggested filenames:

| Piece | File |
|-------|------|
| Tavolo Grezzo | `01-tavolo-grezzo.glb` *(from Metal_desk upload)* |
| Scaffale 0.1 | `02-scaffale.glb` |
| Lampada Sasso | `03-lampada-sasso.glb` |
| Sedia 04 | `04-sedia.glb` |
| Relief 01 | `05-relief.glb` |
| Banco di Lavoro | `06-banco.glb` *(from cg+uy upload)* |
