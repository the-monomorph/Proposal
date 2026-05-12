import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Blueprint from "./pages/Blueprint";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "blueprint", Component: Blueprint },
      { path: "*", Component: Home },
    ],
  },
]);
