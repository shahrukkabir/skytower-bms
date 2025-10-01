import { FaTrash, FaPenAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateCooupons from "./UpdateCooupons";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCoupon from "../../../hooks/useCoupon";

export default function ManageCouponCard({ item }) {
  const { axiosPublic } = useAxiosPublic();
  const { refetch } = useCoupon();
  const [callUpdate, setCallUpdate] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/coupons/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coupon has been deleted.",
                icon: "success",
              });
              refetch();
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the coupon.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            console.error("Delete request error:", err.message);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the coupon.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleToggleUpdate = () => {
    setCallUpdate(!callUpdate);
  };

  return (
    <div className="w-full block shadow-md h-[160px] relative rounded-md overflow-hidden bg-[#ffe0ce]">
      {callUpdate && (
        <UpdateCooupons item={item} handleToggleUpdate={handleToggleUpdate} />
      )}

      {/* Action buttons in a row */}
      <div className="absolute top-2 right-2 flex items-center gap-3 z-10">
        <button
          onClick={handleToggleUpdate}
          className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all"
        >
          <FaPenAlt />
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="p-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all"
        >
          <FaTrash />
        </button>
      </div>

      <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
        <div className="w-1/2 flex flex-col justify-center items-center absolute right-0 p-4">
          <h1
            className={`text-center ${
              item.offerType === "%"
                ? "text-3xl font-bold"
                : "text-3xl font-bold"
            }`}
          >
            {item.offerType === "%"
              ? `${item.offerDigit + item.offerType}`
              : `${item.offerType + item.offerDigit}`}
          </h1>
          <small className="text-center uppercase">off on your way</small>
        </div>
      </div>

      <div className="w-1/2 p-5 flex flex-col justify-center items-center absolute right-0 h-full">
        <h1 className="text-md mb-2 mt-1 text-center font-extrabold uppercase">
          coupon code
        </h1>
        <div className="w-full border border-dashed rounded-md border-gray-500 p-1 bg-white">
          <p className="uppercase text-center font-semibold tracking-wide">
            {item.code}
          </p>
        </div>
      </div>
    </div>
  );
}
