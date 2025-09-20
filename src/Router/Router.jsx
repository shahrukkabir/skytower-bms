import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllCoupons from "../Pages/Home/Coupon/AllCoupons";
import Allappartments from "../Pages/Home/Apartments/AllAppartments";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import HomeError from './../Components/HomeError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <HomeError></HomeError>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/allcoupons",
        element: <AllCoupons></AllCoupons>,
      },
      {
        path: "/appartment",
        element: <Allappartments></Allappartments>,
      },
      {
        path: '/login', 
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: "/",
  }
]);

export default router;
