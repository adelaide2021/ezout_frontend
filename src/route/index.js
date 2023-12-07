import { lazy } from "react";
const Index = lazy(() => import("../home/index"));

const Router = [
  {
    path: "/",
    element: Index,
    meta: { pageTitle: "index" },
  },
];

export default Router;
