import { createFileRoute } from "@tanstack/react-router";
import Menu from "../pages/menuPage";

export const Route = createFileRoute("/menu")({
  component: Menu,
});
