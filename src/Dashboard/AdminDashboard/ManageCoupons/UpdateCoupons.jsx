import { CiCircleRemove } from "react-icons/ci";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCoupon from "../../../hooks/useCoupon";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function UpdateCoupons({ item, handleToggleUpdate }) {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCoupon();
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: item });

  const onSubmit = (data) => {
    if (!data.offerDigit || !data.offerType || !data.code || !data.description) {
      toast.error("All fields are required!");
      return;
    }

    const dataObject = {
      offerDigit: data.offerDigit,
      offerType: data.offerType,
      code: data.code,
      description: data.description,
    };

    axiosSecure.put(`/coupons/${item._id}`, dataObject)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Coupon updated successfully!", {
            style: { background: "#4e3423", color: "#fff" },
          });
          refetch();
          handleToggleUpdate();
        }
        else {
          toast.error("Failed to update coupon!");
        }
      })
      .catch(() => {
        toast.error("Error occurred while updating coupon!");
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-full bg-[#00000080] flex justify-center items-center">
      <CiCircleRemove onClick={handleToggleUpdate} className="cursor-pointer text-5xl text-white absolute left-4 top-3" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center text-[#4e3423] mb-4">
          Update Coupon
        </h2>

        {/* Offer Digit */}
        <div className="mb-4">
          <label className="block text-[#2c241e] text-sm font-semibold mb-2">
            Offer Digit
          </label>
          <input {...register("offerDigit", { required: "Offer digit is required" })} type="number" className="w-full p-3 bg-gray-100 border border-[#2c241e] rounded-md focus:outline-none focus:border-[#c78960]" />
          {errors.offerDigit && (
            <span className="text-red-500 text-sm">
              {errors.offerDigit.message}
            </span>
          )}
        </div>

        {/* Offer Type */}
        <div className="mb-4">
          <label className="block text-[#2c241e] text-sm font-semibold mb-2">
            Offer Type
          </label>
          <select {...register("offerType", { required: "Offer type is required" })} className="w-full p-3 bg-gray-100 border border-[#2c241e] rounded-md focus:outline-none focus:border-[#c78960]">
            <option value="">Select type</option>
            <option value="%">%</option>
            <option value="$">$</option>
          </select>
          {errors.offerType && (
            <span className="text-red-500 text-sm">
              {errors.offerType.message}
            </span>
          )}
        </div>

        {/* Code */}
        <div className="mb-4">
          <label className="block text-[#2c241e] text-sm font-semibold mb-2">
            Code
          </label>
          <input {...register("code", { required: "Code is required" })} type="text" className="w-full p-3 bg-gray-100 border border-[#2c241e] rounded-md focus:outline-none focus:border-[#c78960]" />
          {errors.code && (
            <span className="text-red-500 text-sm">{errors.code.message}</span>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-[#2c241e] text-sm font-semibold mb-2">
            Description
          </label>
          <textarea {...register("description", { required: "Description is required" })} className="w-full p-3 bg-gray-100 border border-[#2c241e] rounded-md h-[80px] focus:outline-none focus:border-[#c78960]"></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button type="submit" className="flex-1 p-2 text-white font-semibold bg-[#c78960] hover:bg-[#bb7f56] transition-all">
            Update
          </button>
          <button type="button" onClick={handleToggleUpdate} className="flex-1 p-2 font-semibold border border-gray-400 hover:bg-gray-200 transition-all">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
