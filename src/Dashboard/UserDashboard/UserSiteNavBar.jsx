import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaDeleteLeft, FaList, FaUserAstronaut } from "react-icons/fa6";
import { TbMapPause } from "react-icons/tb";
import { MdContacts, MdHistoryEdu } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import LogOut from "../../Authentication/Logout";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";

export default function UserSiteNavBar() {
    const [open, setOpen] = useState(true);
    const { user } = useAuth();
    const { users } = useUsers();

    // Auto close sidebar on small screens
    useEffect(() => {
        if (window.innerWidth < 768) setOpen(false);
    }, []);

    // Close sidebar with Escape key
    useEffect(() => {
        const handleKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const findUser = user && users ? users.find((item) => item.email === user.email) : null;
    const isMember = findUser && findUser.position === "member";

    const navLinkClass = "flex items-center uppercase gap-3 pl-4 pr-2 py-2 rounded-lg transition-all duration-300 font-semibold text-white hover:bg-[#c78960] hover:text-[#2c241e]";

    const handleLinkClick = () => {
        if (window.innerWidth < 768) setOpen(false);
    };

    return (
        <div className="flex">
            {/* Toggle Button */}
            <div onClick={() => setOpen(!open)} className={`p-1 fixed z-50 transition-all duration-500 ${open ? "left-52" : "left-4"} top-4`}>
                <button className="p-2 bg-gradient-to-r from-[#432b1b] to-[#a64a0c] text-white hover:bg-opacity-90 rounded">
                    {open ? <FaDeleteLeft className="text-lg md:text-xl" /> : <FaList className="text-lg md:text-xl" />}
                </button>
            </div>

            {/* Overlay for mobile */}
            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden" />}

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 bg-gradient-to-b from-[#2c241e] via-[#504211] to-[#7a622f] shadow-xl h-screen z-40 md:static transition-all duration-500 ${open ? "w-64 opacity-100" : "w-0 opacity-0"}`} >
                {open && (
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="w-full flex items-center justify-between px-4 py-4 border-b border-[#e6bb9f]/40">
                            <NavLink to={"/"} onClick={handleLinkClick} className="flex items-center gap-2 px-2 py-1 border-b-2 border-[#e6bb9f] text-[#e6bb9f] font-bold hover:bg-[#c78960] hover:text-[#2c241e] transition-all duration-300">
                                <FaBuilding className="text-2xl" />
                                <span className="text-xl tracking-wide">SkyTower</span>
                            </NavLink>
                        </div>

                        {/* Nav Links */}
                        <div className="flex-1 overflow-y-auto flex flex-col px-2 mt-4">
                            <div className="flex flex-col gap-2 py-4 border-b border-[#e6bb9f]/30">
                                <NavLink to={"/userDashboard"} onClick={handleLinkClick} className={navLinkClass}>
                                    <FaUserAstronaut /> My Profile
                                </NavLink>

                                {isMember && (
                                    <>
                                        <NavLink to={`/MakePayment`} onClick={handleLinkClick} className={navLinkClass}>
                                            <RiSecurePaymentLine /> Make Payment
                                        </NavLink>
                                        <NavLink to={`/PaymentHistory`} onClick={handleLinkClick} className={navLinkClass}>
                                            <MdHistoryEdu /> Payment History
                                        </NavLink>
                                    </>
                                )}

                                <NavLink to={`/Announcements`} onClick={handleLinkClick} className={navLinkClass}>
                                    <GrAnnounce /> Announcements
                                </NavLink>
                            </div>

                            <div className="flex flex-col gap-2 py-4 border-b border-[#e6bb9f]/30">
                                <NavLink to={`/`} onClick={handleLinkClick} className={navLinkClass}>
                                    <IoHomeOutline /> Home
                                </NavLink>
                                <NavLink to={`/appartment`} onClick={handleLinkClick} className={navLinkClass}>
                                    <TbMapPause /> Appartment
                                </NavLink>
                                <NavLink to={`/contact`} onClick={handleLinkClick} className={navLinkClass}>
                                    <MdContacts /> Contact
                                </NavLink>
                            </div>
                        </div>

                        {/* Logout */}
                        <div className="w-full p-4">
                            <LogOut></LogOut>
                        </div>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <div className="flex-1"></div>
        </div>
    );
}
