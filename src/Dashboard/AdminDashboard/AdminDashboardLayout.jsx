import { Outlet } from "react-router-dom";
import AdminSiteNavBar from "./AdminSiteNavBar";

export default function AdminDashboardLayout() {
  return (
    <div className="w-full flex relative justify-between">
      <AdminSiteNavBar></AdminSiteNavBar>
      <Outlet></Outlet>
    </div>
  );
}
