/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import { IRoute } from ".";

import HomeRouterConfig from "../features/Home/routerConfig";
import ProductRouterConfig from "../features/Products/routerConfig";

const routes: IRoute[] = [...HomeRouterConfig,...ProductRouterConfig];

const parseFromRoutes = (routes: IRoute[]): RouteObject[] => {
  return routes.map((route) => {
    const element = route.element;
    const component = React.createElement(element);
    return {
      path: route.path,
      element:component
    };
  });
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const router = createBrowserRouter([
  ...parseFromRoutes(routes)
]);
