import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useContactMessage from "../../../hooks/useContactMessage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

export default function MessageCard({ item }) {
    const { axiosPublic } = useAxiosPublic();
    const { refetch } = useContactMessage();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This message will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#bb7f56",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/contact_message/${id}`)
                    .then(() => {
                        refetch();
                        toast.success("Message deleted successfully!", {
                            style: { background: "#4e3423", color: "#fff" },
                        });
                    })
                    .catch((error) => {
                        console.error("Delete request error:", error);
                        toast.error("Failed to delete the message", {
                            style: { background: "#d33", color: "#fff" },
                        });
                    });
            } else {
                toast("Deletion cancelled", {
                    icon: "⚠️",
                    style: { background: "#e5e5e5", color: "#333" },
                });
            }
        });
    };

    return (
        <div className="bg-white shadow-md border border-[#e6bb9f]/40 hover:shadow-lg rounded-xl p-5 w-full transition duration-200 flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#2c241e]">
                        {item.name ? item.name : "Unknown"}
                    </h2>
                    <p className="text-sm text-gray-500">{item.email}</p>
                </div>
                <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500 hover:text-red-700 transition"
                >
                    <FaTrash size={18} />
                </button>
            </div>

            {/* Message */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2 break-words whitespace-pre-wrap max-h-40 overflow-y-auto">
                {item.message ? item.message : "No message found"}
            </div>

            {/* Footer */}
            <p className="text-gray-500 text-xs italic text-right">
                {item.date ? item.date : "No date"}
            </p>
        </div>
    );
}
