import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import Home from "../components/display/Home";
import Layout from "../components/display/Layout";
import Routes from "../models/routes.models";
import Cart from "../pages/Cart";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: Routes.HOME, element: <Home /> },
      { path: Routes.PRODUCTS, element: <Products /> },
      { path: Routes.CART, element: <Cart /> },
    ],
  },
]);

export default router;
