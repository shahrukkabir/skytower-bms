import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaBuilding, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useCoupon from "../../../hooks/useCoupon";
import { NavLink } from "react-router-dom";
import ManageAllCopon from "./MAnageAllCopon";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

export default function ManageCoupons() {
    const { axiosPublic } = useAxiosPublic();
    const { coupons, refetch } = useCoupon();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCoupons, setFilteredCoupons] = useState([]);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredCoupons(coupons || []);
        } else {
            const results = (coupons || []).filter((coupon) =>
                coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCoupons(results);
        }
    }, [searchTerm, coupons]);

    const onSubmit = (data) => {
        axiosPublic.post("/coupons", data)
            .then(() => {
                reset();
                refetch();
                toast.success("Coupon added successfully!");
            })
            .catch((err) => {
                toast.error(`Failed to add coupon: ${err.message}`);
            });
    };

    return (
        <div className="w-full min-h-screen pt-2 px-3 overflow-y-auto hide-scrollbar">
            {/* Header */}
            <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-gradient-to-r from-[#805a41] to-[#4e3423]">
                <NavLink to={"/"} className="btn btn-ghost text-xl flex items-center ml-10">
                    <FaBuilding className="text-2xl lg:text-3xl" />
                    <span className="text-3xl">Sky-Tower</span>
                </NavLink>
                <input type="search" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Coupons by code" className="input sm:w-[450px]" value={searchTerm} />
                <div className="h-[50px] w-[50px] mr-3 hidden sm:flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
                    <img src={user.photoURL} alt="Profile" className="h-full " />
                </div>
            </div>

            {/* Add Coupon Form */}
            <div className="w-full mt-6 bg-gradient-to-r from-[#805a41] to-[#4e3423] p-6 rounded-md ">
                <h3 className="text-white mb-3 font-semibold">Add Coupon</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                    {/* Offer Digit */}
                    <input {...register("offerDigit", { required: true })} type="number" placeholder="Offer Digit" className="p-2 rounded text-[#2c241e] outline-none" />

                    {/* Offer Type */}
                    <select {...register("offerType", { required: true })} defaultValue="" className="p-2 rounded text-[#2c241e] outline-none">
                        <option value="">Offer Type</option>
                        <option value="%">%</option>
                        <option value="$">$</option>
                    </select>

                    {/* Code */}
                    <input {...register("code", { required: true })} type="text" placeholder="Code" className="p-2 rounded text-[#2c241e] outline-none" />

                    {/* Description */}
                    <input {...register("description", { required: true })} type="text" placeholder="Description" className="sm:col-span-2 lg:col-span-5 p-2 rounded text-[#2c241e] outline-none" />

                    {/* Button */}
                    <button type="submit" className="flex justify-center py-2 gap-2 items-center bg-[#c78960] text-white font-semibold hover:bg-[#bb7f56] transition-all sm:col-span-2 lg:col-span-1">
                        <FaPlus />
                        <span>Add</span>
                    </button>
                </form>
            </div>
            {/* Coupons List */}
            <div className="flex-1">
                <ManageAllCopon coupons={filteredCoupons} />
            </div>
        </div>
    );
}
