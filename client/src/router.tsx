import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import EditProduct, {loader as editProductLoader} from "./views/EditProduct";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import Products, { loader as productsLoader } from "./views/Products";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
    {
      index: true,
      element: <Products />,
      loader: productsLoader ,
    },
    {
      path: '/productos/nuevo',
      element: <NewProduct />,
      action: newProductAction
    },
    {
      path: 'productos/:id/editar', //ROA Pattern - Resource-oriented design
      element: <EditProduct />,
      loader: editProductLoader
    },
    ],
  },
])