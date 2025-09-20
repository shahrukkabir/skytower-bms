import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAgreements from "../../hooks/useAgreements";
import useUsers from "../../hooks/useUsers";


export default function AdminProfile() {
    const { user } = useAuth();
    const { axiosPublic } = useAxiosPublic();
    const [apparmentLength, setAppartmanetLength] = useState();
    const { agreements } = useAgreements();
    const { users } = useUsers();

    const member = users.filter((item) => item.position === "member");
    const pending = agreements.filter((item) => item.Status === "pending");

    useEffect(() => {
        axiosPublic
            .get("/appartmentlength")
            .then((response) => setAppartmanetLength(response.data.count))
            .catch((err) => console.error(err));
    }, [axiosPublic]);

    return (
        <div className="w-full min-h-screen p-3">
            <div className="w-full mt-11 shadow-md p-3">
                <div className="w-full flex justify-between items-center">
                    <span></span>
                    <span className="bg-[#2c241e] px-3 p-1 text-[#c78960] cursor-pointer border-2 border-white">
                        Admin Profile
                    </span>
                </div>
                <div className="w-full flex mb-3 justify-between items-center">
                    <img
                        src={user.photoURL}
                        className=" h-[100px] md:h-[150px] lg:h-[200px] border-2 border-[#2c241e]"
                        alt=""
                    />
                    <div className="w-full md:p-4 p-2 bg-[#2c241e] flex justify-center items-center">
                        <h1 className="text-[#c78960] md:text-3xl text-xl uppercase">
                            {user.displayName}
                        </h1>
                    </div>
                </div>
                <hr />
                <div className="w-full p-2 flex gap-3 justify-center items-center flex-col sm:flex-row sm:justify-between">
                    <small>Email : {user.email}</small>
                    <small>Last logIn : {user.metadata.lastSignInTime}</small>
                    <small>Create time : {user.metadata.creationTime}</small>
                </div>
            </div>
            <div className="w-full mt-4 shadow-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
                    Total Appartment : {apparmentLength}
                </div>
                <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
                    Available Appartment : {apparmentLength - agreements.length}
                </div>
                <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
                    Percentage of agreement : {agreements.length}
                </div>
                <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
                    Total users : {users.length}
                </div>
                <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
                    Total mambers : {member.length}
                </div>
                <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
                    Agreements on pending : {pending.length}
                </div>
            </div>
        </div>
    );
}
