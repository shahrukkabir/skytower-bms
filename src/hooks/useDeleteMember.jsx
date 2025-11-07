import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUsers from "./useUsers";
import useAxiosSecure from "./useAxiosSecure";

export default function useDeleteMember() {
  const axiosSecure = useAxiosSecure();
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
        axiosSecure.delete(`/users/${id}`)
          .then(() => {
            refetch();
            toast.success("User deleted successfully!");
          })
          .catch((error) => {
            console.error("Delete request error:", error);
            toast.error("Failed to delete the user.");
          });
      } 
      else {
        toast.error("Deletion cancelled");
      }
    });
  };

  return handleUserDelete;
}
