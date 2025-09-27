import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllCoupons from "../Pages/Home/Coupon/AllCoupons";
import Allappartments from "../Pages/Home/Apartments/AllAppartments";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import HomeError from './../Components/HomeError';
import AdminDashboardLayout from "../Dashboard/AdminDashboard/AdminDashboardLayout";
import AdminRoute from "../Router/AdminRoute"
import AdminProfile from './../Dashboard/AdminDashboard/AdminProfile';
import ManageMember from "../Dashboard/AdminDashboard/ManageMember/ManageMember";

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
    element: <AdminDashboardLayout></AdminDashboardLayout>,
    children: [
      {
        path: "/admindashboard",
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: "/manageMember",
        element: <AdminRoute><ManageMember></ManageMember></AdminRoute>
      },
    ]
  }
]);

export default router;
