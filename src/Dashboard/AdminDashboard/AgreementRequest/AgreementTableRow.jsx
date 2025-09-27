import { MdCancel, MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useHandleMember from "../../../hooks/useHandleMember";
import useDeleteAgreement from "../../../hooks/useDeleteAgreement";

export default function AgreementTableRow({ agreement, refetch }) {
  const { axiosPublic } = useAxiosPublic();
  const [handlemember] = useHandleMember();
  const [handleDelete] = useDeleteAgreement();

  const handlAcceptStatus = (data, id) => {
    axiosPublic.patch(`/agreements/${id}`, data)
      .then(() => {
        refetch();
        Swal.fire({ icon: "success", title: "Member Status updated", showConfirmButton: false, timer: 1500 });
      })
      .catch(() => {
        Swal.fire({ icon: "error", title: "Something went wrong!", showConfirmButton: false, timer: 1500 });
      });
  };

  const handleAccept = (data, email) => {
    handlAcceptStatus({ Status: "Accept" }, data._id);
    handlemember({ position: "member" }, email);
  };

  return (
    <tr className="border-b border-[#e6bb9f]/30 hover:bg-[#fdf6f0] transition-colors duration-200">
      <td className="p-3 align-middle text-center text-[#2c241e]">{agreement.User_name}</td>
      <td className="p-3 align-middle text-center text-[#2c241e] break-words">{agreement.User_email}</td>
      <td className="p-3 align-middle text-center text-[#2c241e]">{agreement.floorNo}</td>
      <td className="p-3 align-middle text-center text-[#2c241e] uppercase">{agreement.Block_name}</td>
      <td className="p-3 align-middle text-center text-[#2c241e]">{agreement.Apartment_no}</td>
      <td className="p-3 align-middle text-center text-[#2c241e]">${agreement.Rent}</td>
      <td className="p-3 align-middle text-center text-[#2c241e]">{agreement.date}</td>

      <td className="p-3 align-middle font-semibold text-center">
        {agreement.Status === "Accept" ? (
          <span className="inline-block px-3 py-1 text-sm bg-green-200 text-green-700 rounded-lg">Accepted</span>
        ) : (
          <span className="inline-block px-3 py-1 text-sm bg-yellow-200 text-yellow-700 rounded-lg">{agreement.Status}</span>
        )}
      </td>
      <td className="p-3 align-middle text-center">
        <div className="inline-flex items-center justify-center gap-3">
          <button onClick={() => handleDelete(agreement._id)} className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-xl" aria-label="delete">
            <MdCancel className="text-lg" />
          </button>

          <button onClick={() => handleAccept(agreement, agreement.User_email)} className="w-10 h-10 flex items-center justify-center bg-[#d4a95d] hover:bg-[#c78960] text-white rounded-xl" aria-label="accept">
            <MdCheckCircle className="text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
}
