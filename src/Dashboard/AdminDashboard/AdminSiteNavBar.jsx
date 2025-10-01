import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FaDeleteLeft, FaList } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import { MdAdminPanelSettings, MdContacts, MdHistoryEdu, MdRememberMe, } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { SiGotomeeting } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { TbMapPause } from "react-icons/tb";
import LogOut from "../../Authentication/Logout";

export default function AdminSiteNavBar() {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    }, []);
    // Close on Escape key
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setOpen(false);
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const navLinkClass = "flex items-center uppercase gap-3 pl-4 pr-2 py-2 rounded-lg transition-all duration-300 font-semibold text-white hover:bg-[#c78960] hover:text-[#2c241e]";
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    };
    return (
        <div className="flex">
            {/* Toggle button */}
            <div onClick={() => setOpen(!open)} className={`p-1 fixed z-50 transition-all duration-500 ${open ? "left-52" : "left-4"} top-4`}>
                <button className="p-2 bg-gradient-to-r from-[#432b1b] to-[#a64a0c] text-white hover:bg-opacity-90 rounded">
                    {open ? (
                        <FaDeleteLeft className="text-lg md:text-xl" />
                    ) : (
                        <FaList className="text-lg md:text-xl" />
                    )}
                </button>
            </div>
            {/* Overlay */}
            {open && (
                <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden" />
            )}
            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 bg-gradient-to-b from-[#2c241e] via-[#504211] to-[#7a622f] shadow-xl h-screen z-40 md:static transition-all duration-500 ${open ? "w-64 opacity-100" : "w-0 opacity-0"}`} >
                {open && (
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="w-full flex items-center justify-between px-4 py-4 border-b border-[#e6bb9f]/40">
                            <NavLink to={"/"} onClick={handleLinkClick} className="flex items-center gap-2 px-2 py-1 border-b-2 border-[#e6bb9f] text-[#e6bb9f] font-bold hover:bg-[#c78960] hover:text-[#2c241e] transition-all duration-300">
                                <FaBuilding className="text-2xl" />
                                <span className="text-xl tracking-wide">
                                    SkyTower
                                </span>
                            </NavLink>
                        </div>

                        {/* Nav Links */}
                        <div className="flex-1 overflow-y-auto flex flex-col px-2 mt-4">
                            <div className="flex flex-col gap-2 py-4 border-b border-[#e6bb9f]/30">
                                <NavLink to={"/adminDashboard"} onClick={handleLinkClick} className={navLinkClass} >
                                    <MdAdminPanelSettings /> Admin Profile
                                </NavLink>
                                <NavLink to={`/manageMember`} onClick={handleLinkClick} className={navLinkClass} >
                                    <MdRememberMe /> Manage Members
                                </NavLink>
                                <NavLink to={`/agreementRequest`} onClick={handleLinkClick} className={navLinkClass}>
                                    <SiGotomeeting /> Agreement Requests
                                </NavLink>
                                <NavLink to={`/makeAnnouncement`} onClick={handleLinkClick} className={navLinkClass}>
                                    <GrAnnounce /> Make Announcement
                                </NavLink>
                                <NavLink to={`/manageCoupons`} onClick={handleLinkClick} className={navLinkClass}>
                                    <RiCoupon2Fill /> Manage Coupons
                                </NavLink>
                                <NavLink to={`/contactMessage`} onClick={handleLinkClick} className={navLinkClass}>
                                    <MdContacts /> Contact Messages
                                </NavLink>
                                <NavLink to={`/paymentHistory`} onClick={handleLinkClick} className={navLinkClass}>
                                    <MdHistoryEdu /> Payment History
                                </NavLink>
                            </div>
                            <div className="flex flex-col gap-2 py-4 border-b border-[#e6bb9f]/30">
                                <NavLink to={`/`} onClick={handleLinkClick} className={navLinkClass} >
                                    <IoHomeOutline /> Home
                                </NavLink>
                                <NavLink to={`/appartment`} onClick={handleLinkClick} className={navLinkClass}>
                                    <TbMapPause /> Appartment
                                </NavLink>
                            </div>
                        </div>

                        {/* Logout */}
                        <div className="w-full p-4">
                            <LogOut />
                        </div>
                    </div>
                )}
            </aside>

            {/* Main content */}
            <div className="flex-1"></div>
        </div>
    );
}