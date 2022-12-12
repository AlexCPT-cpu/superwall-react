import React from "react";
import Home from "components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "layouts";
import Mint from "components/mint/Mint";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/mint",
          element: <Mint />,
        },
      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
