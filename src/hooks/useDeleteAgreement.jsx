import { useCallback } from "react";
import Swal from "sweetalert2";
import useAgreements from "./useAgreements";
import useAxiosPublic from "./useAxiosPublic";
import useUsers from "./useUsers";

const useDeleteAgreement = () => {
  const { axiosPublic } = useAxiosPublic();
  const { refetch } = useUsers();
  const { AgreeRefetch } = useAgreements();

  const handleDelete = useCallback(
    (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#bb7f56",   
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic
            .delete(`/agreements/${id}`)
            .then((response) => {
              if (response.status === 200) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Agreement has been deleted.",
                  icon: "success",
                });
                refetch();
                AgreeRefetch();
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Failed to delete the agreement.",
                  icon: "error",
                });
              }
            })
            .catch((err) => {
              console.error("Delete request error:", err.message);
              Swal.fire({
                title: "Error!",
                text: "An error occurred while deleting the agreement.",
                icon: "error",
              });
            });
        }
      });
    },
    [axiosPublic, refetch, AgreeRefetch]
  );

  return [handleDelete];
};

export default useDeleteAgreement;
