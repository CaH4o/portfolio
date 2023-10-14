import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import AppPage from "./pages/AppPage"
import Home from "./pages/Home"
import CV from "./pages/CV"
import Projects from "./pages/Projects"
import SingleProject from "./pages/SingleProject"
import Error from "./pages/Error"

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
          path: "cv",
          element: <CV />,
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
  ])

  return <RouterProvider router={router} />
}
