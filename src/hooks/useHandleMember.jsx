import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUsers from "./useUsers";
import useAxiosSecure from "./useAxiosSecure";

export default function useHandleMember() {
  const { refetch } = useUsers();
  const axiosSecure = useAxiosSecure();

  const handlemember = (data, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this member's position?",
      icon: "question",
      showCancelButton: true,
      iconColor: "#bb7f56",
      confirmButtonColor: "#bb7f56",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${id}`, { position: data.position })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              toast.success("Member position updated successfully!");
            } else {
              toast.error("No changes were made.");
            }
          })
          .catch(() => {
            toast.error("Something went wrong while updating!");
          });
      }
      else {
        toast.error("Update cancelled!");
      }
    });
  };

  return [handlemember];
}
