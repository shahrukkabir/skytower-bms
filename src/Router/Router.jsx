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
import AgreementRequest from "../Dashboard/AdminDashboard/AgreementRequest/AgreementRequest";
import MakeAnnouncement from "../Dashboard/AdminDashboard/Announcement/MakeAnnouncement";
import ManageCoupons from "../Dashboard/AdminDashboard/ManageCoupons/ManageCoupons";
import ContactMessage from "../Dashboard/AdminDashboard/ContactMessage/ContactMessage";
import PaymentHistory from "../Dashboard/AdminDashboard/PaymentHistory/PaymentHistory";
import UserProfile from "../Dashboard/UserDashboard/userProfile";
import UserDashboardLayout from "../Dashboard/UserDashboard/UserDashboardLayout";
import Announcements from "../Dashboard/UserDashboard/Announcement/Announcements";
// import PrivateRoute from './PrivateRoute';

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
      {
        path: "/agreementRequest",
        element: <AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>
      },
      {
        path: "/makeAnnouncement",
        element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
      },
      {
        path: "/manageCoupons",
        element: <AdminRoute> <ManageCoupons></ManageCoupons> </AdminRoute>
      },
      {
        path: "/contactMessage",
        element: <AdminRoute><ContactMessage></ContactMessage></AdminRoute>
      },
      {
        path: "/paymentHistory",
        element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
      }

    ]
  },
  {
    path: "/",
    element: <UserDashboardLayout></UserDashboardLayout>,
    children: [
      {
        path: "/userDashboard",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/announcements",
        element: <Announcements></Announcements>
      }
    ]
  }
]);

export default router;
