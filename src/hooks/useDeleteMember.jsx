import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "./useAxiosPublic";
import useUsers from "./useUsers";

export default function useDeleteMember() {
  const { axiosPublic } = useAxiosPublic();
  const { refetch } = useUsers();

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#bb7f56",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/users/${id}`)
          .then(() => {
            refetch();
            toast.success("User deleted successfully!");
          })
          .catch((error) => {
            console.error("Delete request error:", error);
            toast.error("Failed to delete the user.");
          });
      } else {
        toast.error("Deletion cancelled");
      }
    });
  };

  return handleUserDelete;
}
