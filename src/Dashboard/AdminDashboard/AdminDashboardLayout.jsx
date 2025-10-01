import { Outlet } from "react-router-dom";
import AdminSiteNavBar from "./AdminSiteNavBar";

export default function AdminDashboardLayout() {
  return (
    <div className="w-full h-screen flex">
      <div className=" sticky top-0 left-0 z-50">
        <AdminSiteNavBar />
      </div>
        <Outlet />
    </div>
  );
}
