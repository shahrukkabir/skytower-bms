import { Link, NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { useContext, useState, useRef, useEffect } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import LogOut from "../../Authentication/Logout";

export default function NavBar() {
  const [callBox, setCallBox] = useState(false);
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const profileBoxRef = useRef(null);
  const profileIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileBoxRef.current && !profileBoxRef.current.contains(event.target) && profileIconRef.current && !profileIconRef.current.contains(event.target)) {
        setCallBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Profile Link Box
  const ProfileLinkBox = (
    <div ref={profileBoxRef} className={`absolute bg-[rgba(0,0,0,0.6)] backdrop-blur-md top-[80px] ${callBox ? "right-4" : "-right-[120%]"} p-5 w-[250px] flex flex-col justify-center items-center gap-2 border-2 border-white rounded-lg transition-all duration-300`}>
      <h3 className="uppercase cursor-none text-white letterSpaceing">
        {user ? user.displayName : ""}
      </h3>
      {isAdmin ? (
        <NavLink to={"/adminDashboard"} className={`text-center w-full shadow-md text-white font-bold  hover:bg-[#c78960]  p-1 border border-[rgba(141,141,141,0.4)]`}>
          DASHBOARD
        </NavLink>
      ) : (
        <NavLink to={"/userDashboard"} className={` text-center w-full shadow-md text-white font-bold  hover:bg-[#c78960]  p-1 border border-[rgba(141,141,141,0.4)]`} >
          DASHBOARD
        </NavLink>
      )}
      <LogOut></LogOut>
    </div>
  );

  //nav item links is here
  const navItems = (
    <>
      <li><NavLink className="font-bold text-white" to={"/"}>HOME</NavLink></li>
      <li><NavLink className="font-bold text-white" to={"/about"}>ABOUT</NavLink></li>
      <li><NavLink className="font-bold text-white" to={"/appartment"}>APARTMENT</NavLink></li>
      <li><NavLink className="font-bold text-white" to={"/contact"}>CONTACT US</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-[rgba(0,0,0,0.4)] fixed top-0 z-50">
      {user ? ProfileLinkBox : ""}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-3xl text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[rgba(0,0,0,0.6)] rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl flex items-center">
          <FaBuilding className="text-2xl lg:text-3xl" />
          <span className="text-3xl">Sky-Tower</span>
        </NavLink>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
        {user ? (
          <div ref={profileIconRef} onClick={() => setCallBox(!callBox)} className="h-[40px] w-[40px] mr-3 flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
            <img src={user.photoURL} alt="Im" className="h-full w-auto" />
          </div>
        ) : (
          <Link className="font-bold text-white" to={"/login"}>
            <RiLoginCircleFill className="text-4xl" />
          </Link>
        )}
      </div>
    </div>
  );
}