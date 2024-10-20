import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: GalleryComponent,
});

function GalleryComponent() {
  return (
    <div className="p-2">
      <h3>Gallery</h3>
    </div>
  );
}
