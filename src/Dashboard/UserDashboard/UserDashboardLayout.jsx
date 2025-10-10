import { Outlet } from "react-router-dom";
import UserSiteNavBar from "./UserSiteNavBar";

export default function UserDashboardLayout() {
  return (
    <div className="w-full h-screen flex">
      <div className=" sticky top-0 left-0 z-50">
        <UserSiteNavBar />
      </div>
        <Outlet />
    </div>
  );
}
