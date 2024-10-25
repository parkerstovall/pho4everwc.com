import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
