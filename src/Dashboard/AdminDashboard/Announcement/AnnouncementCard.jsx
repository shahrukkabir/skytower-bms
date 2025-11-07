import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAnnouncement from "../../../hooks/useAnnouncement";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function AnnouncementCard({ item }) {
    const axiosSecure = useAxiosSecure();
    const { refetch } = useAnnouncement();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This announcement will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#bb7f56",
            cancelButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/announcements/${id}`)
                    .then(() => {
                        refetch();
                        toast.success("Announcement deleted successfully!");
                    })
                    .catch(() => toast.error("Failed to delete announcement."));
            }
        });
    };

    return (
        <div className="w-full bg-white rounded-xl shadow-md p-6 mb-6 border border-[#e6bb9f]/40 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex justify-between items-start">
                <span className="text-sm text-[#bb7f56] font-semibold">{item.date}</span>
                <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">
                    <FaTrashAlt className="text-lg" />
                </button>
            </div>
            <h1 className="mt-3 text-xl font-bold text-[#2c241e]">{item.title}</h1>
            <p className="mt-2 text-gray-600">{item.description}</p>
        </div>
    );
}
