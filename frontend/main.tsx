import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { createApplicationRouter } from "./router";

const router = createApplicationRouter();
await router.load();
hydrateRoot(
  document.getElementById("app")!,
  <RouterProvider router={router} />,
);
