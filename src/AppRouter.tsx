import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "",
      index: true,
      element: <Home />,
      errorElement: <Error />,
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
  ]);

  return <RouterProvider router={router} />;
}
