import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import AgreementTable from "./AgreementTable";

export default function AgreementRequest() {
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {   
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full min-h-screen pt-2 px-3">
            <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-gradient-to-r from-[#805a41] to-[#4e3423] ">
                <NavLink to={"/"} className="btn btn-ghost text-xl flex items-center ml-10">
                    <FaBuilding className="text-2xl lg:text-3xl "/>
                    <span className="text-3xl">Sky-Tower</span>
                </NavLink>
                <input type="search" placeholder="Search Members by name, email, or status" className="input sm:w-[450px]" value={searchTerm} onChange={handleSearch} />
                <div className="h-[50px] w-[50px] mr-3 hidden sm:flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
                    <img src={user.photoURL} alt="Profile" className="h-full " />
                </div>
            </div>
            <div className="w-full max-h-[calc(100vh-150px)] mt-5 overflow-scroll">
                <AgreementTable searchTerm={searchTerm} />
            </div>
        </div>
    );
}
