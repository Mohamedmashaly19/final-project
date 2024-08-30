import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import MainLayOut from './pages/MainLayOut/MainLayOut';
import Rejister from "./component/Rejister/Rejister";
import Login from "./component/Login/Login";
import Card from "./component/Card/Card";
import Brand from "./component/Brand/Brand";
import Catigores from "./component/Catigores/Catigores";
import Product from "./component/Product/Product";
import Wish from "./component/Wish/Wish";
import { Toaster } from 'react-hot-toast';

import NotFound from './pages/NotFound/NotFound';
import UserContextProvider from "./context/userContext";
import ProudectRoute from "./component/ProudectRoute/ProudectRoute";
import ProudectDetails from "./component/ProudectDetails/ProudectDetails";
import CheckOut from "./component/CheckOut/CheckOut";
import CardContextProvider from "./context/cardContext";




function App() {
  let routing = createBrowserRouter([
    {
      path: "",
      element: <MainLayOut></MainLayOut>,
      children: [

        { index: true, element: <Login></Login> },
        {
          path: "Home", element: (
            <ProudectRoute>
              <Home />
            </ProudectRoute>
          )
        },

        { path: "Rejister", element: <Rejister></Rejister> },
        { path: "Login", element: <Login></Login> },
        {
          path: "Brand", element: (
            <ProudectRoute>
              <Brand />
            </ProudectRoute>
          )
        },
        {
          path: "Catigores", element: (
            <ProudectRoute>
              <Catigores />
            </ProudectRoute>
          )
        },
        {
          path: "Product", element: (
            <ProudectRoute>
              <Product />
            </ProudectRoute>
          )
        },
        {
          path: "Wish", element: (
            <ProudectRoute>
              <Wish />
            </ProudectRoute>
          )
        },
        {
          path: "Card", element: (
            <ProudectRoute>
              <Card />
            </ProudectRoute>
          )
        },
        {
          path: "ProudectDetails/:id", element: (
            <ProudectRoute>
              <ProudectDetails />
            </ProudectRoute>
          )
        },
        {
          path: "CheckOut", element: (
            <ProudectRoute>
              <CheckOut />
            </ProudectRoute>
          )
        }
        ,




        { path: '*', element: <NotFound></NotFound> }
      ]

    },

  ]);

  return (
    <UserContextProvider>
      <Toaster />

      <CardContextProvider>
        <RouterProvider router={routing}></RouterProvider>
      </CardContextProvider>
    </UserContextProvider>
  )
}
export default App;
