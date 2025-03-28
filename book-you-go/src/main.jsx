import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import HomePage from "./Components/Pages/HomePage/HomePage";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/homepage",
    element: <HomePage/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
