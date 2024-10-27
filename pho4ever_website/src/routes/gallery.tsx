import { createFileRoute } from "@tanstack/react-router";
import Gallery from "../pages/galleryPage";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});
