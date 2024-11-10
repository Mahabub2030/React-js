import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailsPage, { detailsPageLoader } from "./components/DetailsPage";
import ProductList from "./components/GagedCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
 
      // {
      //   path: "products/:product_id", 
      //   element: <DetailsPage/>,
      //   loader: detailsPageLoader, 
      // },
      {
        path: '/',
        element: <ProductList></ProductList>

      },
      
  
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("./Products.json"),
      },
      {
        path: "products/:product_id",
        element: <DetailsPage />,
        loader: detailsPageLoader, // This should be responsible for fetching the product based on ID
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router ={router} />
    <ToastContainer />
  </StrictMode>
);
