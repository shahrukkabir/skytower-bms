import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAnnouncement from "../../../hooks/useAnnouncement";

export default function AnnouncementForm() {
    const { axiosPublic } = useAxiosPublic();
    const { refetch } = useAnnouncement();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axiosPublic.post("/announcements", data)
            .then(() => {
                reset();
                refetch();
                toast.success("Announcement added successfully!");
            })
            .catch((err) => {
                console.error(err.message);
                toast.error("Failed to add announcement.");
            });
    };

    return (
        <div className="w-full border rounded-xl mt-16 shadow-md p-6 bg-white">
            <h1 className="text-2xl text-center mb-6 font-semibold text-[#25201c]">Add Announcement</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Title */}
                <div>
                    <label className="block text-[#2c241e] font-medium">Title*</label>
                    <input type="text" placeholder="Enter Title" {...register("title", { required: true })}
                        className="input w-full mt-2 border"
                    />
                    {errors.title && <p className="text-red-500 pl-2 text-sm">Title is required</p>}
                </div>
                {/* Date */}
                <div>
                    <label className="block text-[#2c241e] font-medium">Date*</label>
                    <input
                        type="date"
                        {...register("date", { required: true })}
                        className="input w-full mt-2 border"
                    />
                    {errors.date && <p className="text-red-500 pl-2 text-sm">Date is required</p>}
                </div>
                {/* Description */}
                <div>
                    <label className="block text-[#2c241e] font-medium">Description*</label>
                    <textarea
                        placeholder="Enter description"
                        {...register("description", { required: true })}
                        className="input w-full mt-2 h-[120px] border"
                    ></textarea>
                    {errors.description && <p className="text-red-500 pl-2 text-sm">Description is required</p>}
                </div>
                {/* Submit Button */}
                <div>
                    <button type="submit" className="w-full text-center font-semibold text-white py-2 border-2 border-[#bb7f56] bg-[#bb7f56] hover:bg-[#c78960] hover:border-[#c78960] transition-colors duration-300">
                        Add Announcement
                    </button>
                </div>
            </form>
        </div>
    );
}
