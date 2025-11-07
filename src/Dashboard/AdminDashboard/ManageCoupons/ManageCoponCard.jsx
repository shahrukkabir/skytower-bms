import { FaTrash, FaPenAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useState } from "react";
import useCoupon from "../../../hooks/useCoupon";
import UpdateCoupons from "./UpdateCoupons";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function ManageCouponCard({ item }) {
    const axiosSecure = useAxiosSecure();
    const { refetch } = useCoupon();
    const [callUpdate, setCallUpdate] = useState(false);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This coupon will be permanently deleted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#bb7f56",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/coupons/${id}`)
                    .then((res) => {
                        if (res.status === 200) {
                            toast.success("Coupon deleted successfully!", {
                                style: { background: "#4e3423", color: "#fff" },
                            });
                            refetch();
                        }
                        else {
                            toast.error("Failed to delete coupon!");
                        }
                    })
                    .catch(() => {
                        toast.error("Error occurred while deleting coupon!");
                    });
            }
            else {
                toast.error("Deletion cancelled");
            }
        });
    };

    const handleToggleUpdate = () => {
        setCallUpdate(!callUpdate);
    };

    return (
        <div className="w-full block shadow-md h-[160px] relative rounded-md overflow-hidden bg-[#ffe0ce]">
            {callUpdate && (
                <UpdateCoupons item={item} handleToggleUpdate={handleToggleUpdate} />
            )}

            {/* Action buttons in a row */}
            <div className="absolute top-3 right-2 flex items-center gap-3 z-10">
                <button onClick={handleToggleUpdate} className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all">
                    <FaPenAlt />
                </button>
                <button onClick={() => handleDelete(item._id)} className="p-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all">
                    <FaTrash />
                </button>
            </div>

            <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
                <div className="w-1/2 flex flex-col justify-center items-center absolute right-0 p-4">
                    <h1 className="text-center text-3xl font-bold">
                        {item.offerType === "%"
                            ? `${item.offerDigit + item.offerType}`
                            : `${item.offerType + item.offerDigit}`}
                    </h1>
                    <small className="text-center uppercase">off on your way</small>
                </div>
            </div>

            <div className="w-1/2 p-5  flex flex-col justify-center items-center absolute right-0 h-full">
                <h1 className="text-md mb-2 mt-4 text-center font-extrabold uppercase">
                    coupon code
                </h1>
                <div className="border mt-1 rounded-md border-gray-800 px-4 py-1 bg-white font-semibold">
                    <p className="uppercase text-center cursor-pointer">
                        {item.code}
                    </p>
                </div>
            </div>
        </div>
    );
}
