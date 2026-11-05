import { useLayoutEffect, type ComponentType } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Outlet,
  type RouterHistory,
} from "@tanstack/react-router";
import { mountInteractions } from "../app.js";
import { mountReviews } from "../reviews.js";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Restaurant from "./pages/restaurant";
import Reservation from "./pages/reservation";
import NotFound from "./pages/not-found";
import { metadata } from "./pages/metadata";

let mounted = false;
function Page({
  name,
  Content,
}: {
  name: keyof typeof metadata;
  Content: ComponentType;
}) {
  useLayoutEffect(() => {
    const page = metadata[name];
    document.body.className = page.bodyClass;
    const head = new DOMParser().parseFromString(
      `<html><head>${page.head}</head></html>`,
      "text/html",
    ).head;
    const managed =
      'title,meta,link[rel="canonical"],script[type="application/ld+json"]';
    document.head.querySelectorAll(managed).forEach((node) => node.remove());
    head
      .querySelectorAll(managed)
      .forEach((node) => document.head.append(document.importNode(node, true)));
    head
      .querySelectorAll<HTMLLinkElement>('link:not([rel="canonical"])')
      .forEach((link) => {
        if (
          ![...document.head.querySelectorAll<HTMLLinkElement>("link")].some(
            (existing) =>
              existing.href === link.href && existing.rel === link.rel,
          )
        )
          document.head.append(document.importNode(link, true));
      });
    const dispose = mountInteractions();
    const root = document.querySelector<HTMLElement>("[data-google-reviews]");
    const reviews = root && !root.hidden ? mountReviews(root) : null;
    if (mounted && !location.hash) {
      const main = document.querySelector<HTMLElement>("main");
      if (main) {
        main.tabIndex = -1;
        main.focus({ preventScroll: true });
      }
    }
    mounted = true;
    return () => {
      reviews?.destroy();
      dispose();
    };
  }, [name]);
  return <Content />;
}

const root = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Outlet,
  notFoundComponent: () => <Page name="not-found" Content={NotFound} />,
});
const routes = [
  createRoute({
    getParentRoute: () => root,
    path: "/",
    component: () => <Page name="home" Content={Home} />,
  }),
  createRoute({
    getParentRoute: () => root,
    path: "menu",
    component: () => <Page name="menu" Content={Menu} />,
  }),
  createRoute({
    getParentRoute: () => root,
    path: "about",
    component: () => <Page name="about" Content={About} />,
  }),
  createRoute({
    getParentRoute: () => root,
    path: "restaurant",
    component: () => <Page name="restaurant" Content={Restaurant} />,
  }),
  createRoute({
    getParentRoute: () => root,
    path: "reservation",
    component: () => <Page name="reservation" Content={Reservation} />,
  }),
  createRoute({
    getParentRoute: () => root,
    path: "$",
    component: () => <Page name="not-found" Content={NotFound} />,
  }),
];
const routeTree = root.addChildren(routes);
export function createApplicationRouter(history?: RouterHistory) {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    history,
    context: { queryClient },
    trailingSlash: "always",
    scrollRestoration: true,
    Wrap: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
}
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createApplicationRouter>;
  }
}
