import { renderToString } from "react-dom/server";
import { Suspense } from "react";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { createApplicationRouter } from "./router";
import { metadata } from "./pages/metadata";

export async function prerender(path: string, name: keyof typeof metadata) {
  // shortcut: pages are static; add Router/Query dehydration before introducing server-side data loaders.
  const router = createApplicationRouter(
    createMemoryHistory({ initialEntries: [path] }),
  );
  await router.load();
  // Match the client router's outer Suspense boundary during static prerendering.
  const body = renderToString(
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>,
  );
  router.options.context?.queryClient.clear();
  return `<!DOCTYPE html><html lang="en"><head>${metadata[name].head}</head><body class="${metadata[name].bodyClass}"><div id="app" style="display:contents">${body}</div><script type="module" src="/application.js"></script></body></html>`;
}
