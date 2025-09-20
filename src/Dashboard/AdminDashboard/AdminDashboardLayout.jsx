import { Outlet } from "react-router-dom";

export default function AdminDashboardLayout() {
  return (
    <div className="w-full flex relative justify-between bg-[#ffe6d5]">
      <AdminSiteNavBar></AdminSiteNavBar>
      <Outlet></Outlet>
    </div>
  );
}
