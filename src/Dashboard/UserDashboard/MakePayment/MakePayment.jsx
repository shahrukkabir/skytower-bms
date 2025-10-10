import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAgreements from "../../../hooks/useAgreements";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

export default function MakePayment() {
    const { user } = useAuth();
    const { agreements } = useAgreements();
    const navigate = useNavigate();
    const findAgreement = agreements.filter((item) => item.User_email === user?.email);
    const bookAgreement = findAgreement[0];
    const [monthValue, setMonthValue] = useState("");
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = (data) => {
        if (!bookAgreement) {
            toast.error("No active agreement found!");
            return;
        }
        const currentYear = new Date().getFullYear();
        const formData = {
            ...data,
            month: `${monthValue} ${currentYear}`,
            email: user?.email,
            floor: bookAgreement.floorNo,
            block: bookAgreement.Block_name,
            appartment: bookAgreement.Apartment_no,
            Rent: bookAgreement.Rent,
        };

        localStorage.setItem("paymentData", JSON.stringify(formData));
        toast.success("Payment details saved successfully!");
        navigate("/pay");
    };

    const handleMonthChange = (event) => {
        setMonthValue(event.target.value);
        setValue("month", event.target.value);
    };

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    return (
        <div className="w-full min-h-screen flex justify-center items-start pt-16 px-6 bg-gray-50">
            <div className="w-full max-w-6xl bg-white shadow-lg border rounded-xl overflow-hidden">
                {/* Curved heading */}
                <div className="bg-[#504211] text-white uppercase text-center py-3 text-2xl font-semibold rounded-tl-lg rounded-tr-lg">
                    Make Payment
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 lg:p-12">
                    {/* Member Email */}
                    <div className="w-full">
                        <label className="block text-[#2c241e] font-medium">Member Email</label>
                        <input type="text" value={user?.email} disabled className="w-full bg-[#e1dfdc] text-[#2c241e] p-2 px-4" />
                    </div>
                    {/* Floor No */}
                    <div className="w-full">
                        <label className="block text-[#2c241e] font-medium">Floor No</label>
                        <input type="number" value={bookAgreement ? bookAgreement.floorNo : ""} disabled className="w-full bg-[#e1dfdc] text-[#2c241e] p-2 px-4" />
                    </div>
                    {/* Block Name */}
                    <div className="w-full">
                        <label className="block text-[#2c241e] font-medium">Block Name</label>
                        <input type="text" value={bookAgreement ? bookAgreement.Block_name : ""} disabled className="w-full bg-[#e1dfdc] text-[#2c241e] p-2 px-4" />
                    </div>
                    {/* Apartment No */}
                    <div className="w-full">
                        <label className="block text-[#2c241e] font-medium">
                            Apartment No/Room No
                        </label>
                        <input type="text" value={bookAgreement ? bookAgreement.Apartment_no : ""} disabled className="w-full bg-[#e1dfdc] text-[#2c241e] p-2 px-4" />
                    </div>
                    {/* Rent */}
                    <div className="w-full">
                        <label className="block text-[#2c241e] font-medium">Rent</label>
                        <input type="text" value={bookAgreement ? `$${bookAgreement.Rent}` : ""} disabled className="w-full bg-[#e1dfdc] text-[#2c241e] p-2 px-4" />
                    </div>
                    {/* Month */}
                    <div className="w-full">
                        <label className="block text-[#2c241e] font-medium">Month</label>
                        <select {...register("month", { required: true })} onChange={handleMonthChange} className="w-full bg-[#e1dfdc] text-[#2c241e] p-2 px-4">
                            <option value="">Select a month</option>
                            {months.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        {errors.month && (
                            <span className="text-red-600">This field is required</span>
                        )}
                    </div>
                    {/* Submit Button */}
                    <div className="w-full col-span-1 sm:col-span-2">
                        <button type="submit" className="w-full text-center font-semibold text-white py-2 border-2 border-[#bb7f56] bg-[#bb7f56] hover:bg-[#c78960] hover:border-[#c78960] transition-colors duration-300 text-lg">
                            PAY
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
