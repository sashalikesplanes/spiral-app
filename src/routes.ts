import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";
import AccountData from "./pages/user.data";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/account",

    component: lazy(() => import("./pages/account")),
    data: AccountData,
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
