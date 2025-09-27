import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineGroupRemove } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import useDeleteMember from "../../../hooks/useDeleteMember";
import useHandleMember from "../../../hooks/useHandleMember";

export default function ManageRow({ item }) {
    const { image, name, email, position, _id } = item;
    const [handlemember] = useHandleMember();
    const handleUserDelete = useDeleteMember();

    return (
        <tr className="grid grid-cols-10 border-b border-[#e6bb9f]/30">
            {/* Image */}
            <td className="text-center p-2 col-span-1 flex justify-center items-center">
                <img src={image} className="w-[45px] h-[45px] rounded-md object-cover" alt={`${name}'s profile`} />
            </td>

            {/* Name */}
            <td className="text-center uppercase p-2 text-[#2c241e] col-span-2 flex justify-center items-center">
                {name}
            </td>

            {/* Email */}
            <td className="text-center p-2 text-[#2c241e] col-span-3 flex justify-center items-center">
                {email}
            </td>

            {/* Position */}
            <td className="text-center p-2 text-[#2c241e] col-span-2 flex justify-center items-center">
                {position}
            </td>

            {/* Remove (Delete) */}
            <td className="text-center p-2 col-span-1 flex justify-center items-center">
                <button onClick={() => handleUserDelete(_id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                    <FaTrash className="text-sm" />
                </button>
            </td>
            {/* Action (Admin <-> User) */}
            <td className="text-center p-2 col-span-1 flex justify-center gap-2 items-center">
                {position === "admin" ? (
                    <button onClick={() => handlemember({ position: "user" }, _id)}
                        className="bg-[#d4a95d] hover:bg-[#c78960] text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                        <MdOutlineGroupRemove className="text-lg" />
                        <span>User</span>
                    </button>
                ) : (
                    <button onClick={() => handlemember({ position: "admin" }, _id)}
                        className="bg-[#d4a95d] hover:bg-[#c78960] text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                        <GrUserAdmin className="text-lg" />
                        <span>Admin</span>
                    </button>
                )}
            </td>
        </tr>
    );
}
