import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Projects from "./components/pages/Projects";
import SingleProject from "./components/pages/SingleProject";
import Page from "./components/Page";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Page />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          children: [
            {
              index: true,
              element: <Projects />,
            },
            {
              path: ":id",
              element: <SingleProject />,
            },
          ],
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
