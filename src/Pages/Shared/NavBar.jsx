import { Link, NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa"; 
import { useContext, useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import LogOut from "../../Components/HomeComponents/Authentication/Logout";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

export default function NavBar() {
  
  const [callBox, setCallBox] = useState(false);

  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();


  //Profile Link Box
  const ProfileLinkBox = (
    <div className={`absolute bg-[rgba(0,0,0,0.4)] top-[80px] ${callBox ? "right-4" : "-right-[120%]"} p-5 w-[250px] flex flex-col justify-center items-center gap-2 border-2 border-white`}>
      <h3 className="uppercase cursor-none text-white letterSpaceing">
        {user ? user.displayName : ""}
      </h3>
      {isAdmin ? (
        <NavLink to={"/adminDeshboard"} className={`text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]`}>
          DESHBOARD
        </NavLink>
      ) : (
        <NavLink
          to={"/userDeshboard"} className={` text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]`}>
          DESHBOARD
        </NavLink>
      )}
      <LogOut></LogOut>
    </div>
  );

  //nav item links is here
  const navItems = (
    <>
      <li>
        <NavLink className="font-bold text-white" to={"/"}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/about"}>
          ABOUT
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/appartment"}>
          APARTMENT
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/contact"}>
          CONTACT US
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[rgba(0,0,0,0.4)] fixed top-0 z-50">
      {user ? ProfileLinkBox : ""}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[rgba(0,0,0,0.6)] rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl flex items-center gap-2">
          <FaBuilding className="text-2xl" />
          <span>MyBuilding</span>
        </NavLink>
      </div>
      <div className="w-[35%] md:w-[80%] justify-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
        {user ? (
          <div onClick={() => setCallBox(!callBox)} className="h-[50px] w-[50px] mr-3 flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
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
