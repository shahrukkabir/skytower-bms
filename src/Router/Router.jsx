import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllCoupons from "../Pages/Home/Coupon/AllCoupons";
import Allappartments from "../Pages/Home/Apartments/AllAppartments";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>ERROR</h2>,
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
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
]);

export default router;
