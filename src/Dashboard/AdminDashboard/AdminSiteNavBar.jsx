    import { NavLink } from "react-router-dom";
    import { IoHomeOutline } from "react-icons/io5";
    import { useState, useRef, useEffect } from "react";
    import { FaDeleteLeft, FaList } from "react-icons/fa6";
    import { RiCoupon2Fill } from "react-icons/ri";
    import { MdAdminPanelSettings, MdContacts, MdHistoryEdu, MdRememberMe } from "react-icons/md";
    import { FaBuilding } from "react-icons/fa";
    import { SiGotomeeting } from "react-icons/si";
    import { GrAnnounce } from "react-icons/gr";
    import { TbMapPause } from "react-icons/tb";
    import LogOut from "../../Authentication/Logout";

    export default function AdminSiteNavBar() {
        const [ShowNav, setShowNav] = useState(false);
        const sidebarRef = useRef(null);

        const navLinkClass = "flex items-center uppercase gap-3 pl-4 pr-2 py-2 rounded-lg transition-all duration-300 font-semibold text-white hover:bg-[#c78960] hover:text-[#2c241e]";
        // Close when pressing Escape
        useEffect(() => {
            function onKey(e) {
                if (e.key === "Escape") setShowNav(false);
            }
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
        }, []);

        // close on route click (mobile)
        const handleLinkClick = () => setShowNav(false);

        return (
            <>
                {/* OPEN button (visible on mobile only when sidebar closed) */}
                {!ShowNav && (
                    <button onClick={() => setShowNav(true)} className="md:hidden fixed top-4 left-4 z-[60] w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#805a41] to-[#a64a0c]  flex items-center justify-center shadow-md" aria-label="Open sidebar">
                        <FaList className="text-xl text-white" />
                    </button>
                )}

                {/* Overlay (click outside to close) */}
                {ShowNav && (
                    <div onClick={() => setShowNav(false)} className="fixed inset-0  bg-black/50 z-40 md:hidden" />
                )}

                {/* Sidebar */}
                <aside ref={sidebarRef} className={`fixed top-0 left-0 h-screen z-[50] transform transition-transform duration-300 ${ShowNav ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:min-w-[260px] bg-gradient-to-b from-[#2c241e] via-[#504211] to-[#7a622f] shadow-xl flex flex-col`}>
                    {/* Logo bar with CLOSE button on the right */}
                    <div className="w-full flex items-center justify-between px-4 py-4 border-b border-[#e6bb9f]/40">
                        <NavLink to={"/"} onClick={handleLinkClick} className="flex items-center gap-2 px-2 py-1 border-b-2 border-[#e6bb9f] text-[#e6bb9f] font-bold hover:bg-[#c78960] hover:text-[#2c241e] transition-all duration-300">
                            <FaBuilding className="text-2xl" />
                            <span className="text-xl tracking-wide">SkyTower</span>
                        </NavLink>

                        {/* Close button shown only on mobile */}
                        <button onClick={() => setShowNav(false)} className="md:hidden w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#664d38] shadow-md" aria-label="Close sidebar">
                            <FaDeleteLeft className="text-lg text-white" />
                        </button>
                    </div>

                    {/* Nav links */}
                    <div className="flex-1 overflow-y-auto flex flex-col md:justify-start justify-start px-2 mt-4">
                        <div className="flex flex-col gap-2 py-4 border-b border-[#e6bb9f]/30">
                            <NavLink to={"/adminDashboard"} onClick={handleLinkClick} className={navLinkClass}>
                                <MdAdminPanelSettings /> Admin Profile
                            </NavLink>
                            <NavLink to={`/manageMember`} onClick={handleLinkClick} className={navLinkClass}>
                                <MdRememberMe /> Manage Members
                            </NavLink>
                            <NavLink to={`/MakeAnnouncement`} onClick={handleLinkClick} className={navLinkClass}>
                                <GrAnnounce /> Make Announcement
                            </NavLink>
                            <NavLink to={`/AgreementRequests`} onClick={handleLinkClick} className={navLinkClass}>
                                <SiGotomeeting /> Agreement Requests
                            </NavLink>
                            <NavLink to={`/ManageCoupons`} onClick={handleLinkClick} className={navLinkClass}>
                                <RiCoupon2Fill /> Manage Coupons
                            </NavLink>
                            <NavLink to={`/contactmessage`} onClick={handleLinkClick} className={navLinkClass}>
                                <MdContacts /> Contact Messages
                            </NavLink>
                            <NavLink to={`/adminpaymenthistory`} onClick={handleLinkClick} className={navLinkClass}>
                                <MdHistoryEdu /> Payment History
                            </NavLink>
                        </div>

                        <div className="flex flex-col gap-2 py-4 border-b border-[#e6bb9f]/30">
                            <NavLink to={`/`} onClick={handleLinkClick} className={navLinkClass}>
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
                </aside>
            </>
        );
    }
