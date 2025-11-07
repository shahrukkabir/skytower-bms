import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAgreements from "../../hooks/useAgreements";
import useUsers from "../../hooks/useUsers";
import { FaBuilding, FaUsers } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function AdminProfile() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [apparmentLength, setAppartmanetLength] = useState(0);
  const { agreements } = useAgreements();
  const { users } = useUsers();

  const member = users.filter((item) => item.position === "member");
  const pending = agreements.filter((item) => item.Status === "pending");

  useEffect(() => {
    axiosSecure.get("/appartmentlength")
      .then((response) => setAppartmanetLength(response.data.count))
      .catch((err) => console.error(err));
  }, [axiosSecure]);

  const stats = [
    { title: "Total Appartments", value: apparmentLength, icon: <FaBuilding /> },
    {
      title: "Available Appartments",
      value: apparmentLength - agreements.length,
      icon: <FaBuilding />,
    },
    {
      title: "Agreements Completed",
      value: agreements.length,
      icon: <SiGotomeeting />,
    },
    { title: "Total Users", value: users.length, icon: <FaUsers /> },
    { title: "Total Members", value: member.length, icon: <MdPeopleAlt /> },
    { title: "Agreements Pending", value: pending.length, icon: <SiGotomeeting /> },
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden p-4">
      {/* Header */}
      <div className="w-full mt-11 shadow-md p-4 bg-gradient-to-b from-[#2c241e] via-[#7a622f] to-[#504211] rounded-xl">
        <div className="w-full flex justify-between items-center">
          <span></span>
          <span className="bg-[#c78960] px-4 py-1 rounded-md text-white font-semibold shadow-md">
            Admin Profile
          </span>
        </div>

        {/* Profile */}
        <div className="w-full flex flex-col md:flex-row mb-3 justify-between items-center mt-6 gap-4">
          <img src={user.photoURL} className="h-[120px] md:h-[150px] lg:h-[180px] rounded-full border-4 border-[#e6bb9f] shadow-lg" alt="" />
          <div className="w-full md:p-4 p-2 bg-[#c78960] flex justify-center items-center rounded-md shadow-md">
            <h1 className="text-white md:text-3xl text-xl font-bold uppercase">
              {user.displayName}
            </h1>
          </div>
        </div>

        <hr className="border-[#e6bb9f]/40" />

        {/* Info */}
        <div className="w-full p-3 flex gap-3 flex-col sm:flex-row sm:justify-between text-white text-sm">
          <small>Email: {user.email}</small>
          <small>Last logIn: {user.metadata.lastSignInTime}</small>
          <small>Create time: {user.metadata.creationTime}</small>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-[#504211] p-5 rounded-xl shadow-lg border-l-4 border-[#e6bb9f] transition-transform duration-300 hover:scale-105">
            <div className="text-3xl text-[#e6bb9f]">{item.icon}</div>
            <div>
              <h3 className="text-white text-base font-medium">{item.title}</h3>
              <p className="text-[#e6bb9f] text-xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
