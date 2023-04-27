import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppPage from "./components/AppPage";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Projects from "./components/pages/Projects";
import SingleProject from "./components/pages/SingleProject";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AppPage />,
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
