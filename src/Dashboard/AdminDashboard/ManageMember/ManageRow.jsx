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
        <tr className="border-b border-[#e6bb9f]/30 hover:bg-[#fdf6f0] transition-colors duration-200">
            {/* Image */}
            <td className="p-3 align-middle text-center">
                <img src={image} className="w-[45px] h-[45px] rounded-md object-cover mx-auto" alt={`${name}'s profile`} />
            </td>
            {/* Name */}
            <td className="p-3 align-middle text-center text-[#2c241e] uppercase">
                {name}
            </td>
            {/* Email */}
            <td className="p-3 align-middle text-center text-[#2c241e] break-words">
                {email}
            </td>
            {/* Position */}
            <td className="p-3 align-middle text-center text-[#2c241e]">
                {position}
            </td>
            {/* Remove */}
            <td className="p-3 text-center align-middle">
                <div className="flex items-center justify-center">
                    <button onClick={() => handleUserDelete(_id)} className="w-9 h-9 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-lg">
                        <FaTrash className="text-sm" />
                    </button>
                </div>
            </td>

            {/* Action */}
            <td className="p-3 align-middle text-center">
                {position === "admin" ? (
                    <button onClick={() => handlemember({ position: "user" }, _id)} className="bg-[#bb7f56] hover:bg-[#9f5d31] text-white px-3 py-1 rounded-lg flex items-center gap-1 mx-auto text-base">
                        <MdOutlineGroupRemove className="text-lg" />
                        <span>User</span>
                    </button>
                ) : (
                    <button onClick={() => handlemember({ position: "admin" }, _id)} className="bg-[#bb7f56] hover:bg-[#9f5d31] text-white px-3 py-1 rounded-lg flex items-center gap-1 mx-auto text-base">
                        <GrUserAdmin className="text-lg" />
                        <span>Admin</span>
                    </button>
                )}
            </td>
        </tr>
    );
}
