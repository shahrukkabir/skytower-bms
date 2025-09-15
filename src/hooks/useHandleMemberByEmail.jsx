import useUser from "./useUser";
import Swal from "sweetalert2";
import useAxiosPublic from "./useAxiosPublic";

export default function useHandleMemberByEmail() {
  const { axiosPublic } = useAxiosPublic();
  const { refetch, users } = useUser();

  const handlemember = (data, email) => {
    const user = users.find((user) => user.email === email);
    if (user && user.position !== "admin") {
      axiosPublic.patch(`/usermanage/${email}`, data)
        .then(() => {
          refetch();
          console.log("Member position updated successfully");
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Something is wrong here!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      console.log("User is an admin. Position not updated.");
    }
  };

  return [handlemember];
}
