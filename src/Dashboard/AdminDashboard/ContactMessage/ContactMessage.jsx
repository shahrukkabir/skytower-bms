import MessageCard from "./MessageCard";
import useContactMessage from "./../../../hooks/useContactMessage";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaBuilding } from "react-icons/fa";

export default function ContactMessage() {
    const { contactMessages } = useContactMessage();
    const { user } = useAuth();

    return (
        <div className="w-full min-h-screen pt-2 px-3 bg-[#f9f7f4]">
            {/* Header */}
            <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-gradient-to-r from-[#805a41] to-[#4e3423] ">
                <NavLink to={"/"} className="btn btn-ghost text-xl flex items-center ml-10">
                    <FaBuilding className="text-2xl lg:text-3xl" />
                    <span className="text-3xl">Sky-Tower</span>
                </NavLink>
                <div className="h-[50px] w-[50px] mr-3 hidden sm:flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
                    <img src={user.photoURL} alt="Profile" className="h-full " />
                </div>
            </div>
            {/* Messages Grid */}
            <div className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 justify-center max-h-[200vh] sm:h-[calc(100vh-140px)] overflow-y-auto hide-scrollbar px-2">
                {contactMessages.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 text-lg">
                        No messages available
                    </div>
                ) : (
                    contactMessages
                        .slice()
                        .reverse()
                        .map((item) => <MessageCard key={item._id} item={item} />)
                )}
            </div>
        </div>
    );
}
