import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllCoupons from "../Pages/Home/Coupon/AllCoupons";


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
    ]
  }
]);

export default router;
