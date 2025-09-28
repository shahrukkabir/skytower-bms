import { MdCancel, MdCheckCircle } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useHandleMemberByEmail from "../../../hooks/useHandleMemberByEmail";
import useDeleteAgreement from './../../../hooks/useDeleteAgreement';

export default function AgreementTableRow({ agreement, refetch }) {
  const { axiosPublic } = useAxiosPublic();
  const [handlemember] = useHandleMemberByEmail();
  const handleDelete = useDeleteAgreement();

  const handleAccept = (data, email) => {    
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to accept this agreement and update role?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bb7f56",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosPublic.patch(`/agreements/${data._id}`, { Status: "Accept" })
            .then(() => {
              refetch();
              handlemember({ position: "member" }, email);
              if(data.Status == "Accept"){
                toast.error("Agreement already updated!");
              }
              else{
                toast.success("Agreement accepted & role updated!");
              }
            })
            .catch(() => {
              toast.error("Something went wrong while updating!");
            });
        } else {
          toast.error("Update cancelled!");
        }
      });
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
