import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUsers from "./useUsers";
import useAgreements from "./useAgreements";
import useAxiosSecure from "./useAxiosSecure";

export default function useDeleteAgreement() {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useUsers();
  const { AgreeRefetch } = useAgreements();

  const handleAgreementDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This agreement will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#bb7f56",
      cancelButtonColor: "#d33",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/agreements/${id}`)
            .then(() => {
              refetch();
              AgreeRefetch();
              toast.success("Agreement deleted successfully!");
            })
            .catch((error) => {
              console.error("Delete request error:", error);
              toast.error("Failed to delete the agreement.");
            });
        }
        else {
          toast.error("Deletion cancelled");
        }
      });
  };

  return handleAgreementDelete;
}
