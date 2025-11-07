import toast from "react-hot-toast";
import useUsers from "./useUsers";
import useAxiosSecure from "./useAxiosSecure";

export default function useHAndleMEmberbyEmail() {
    const axiosSecure = useAxiosSecure();
    const { refetch, users } = useUsers();

    const handlemember = (data, email) => {
        const user = users.find((user) => user.email === email);

        if (user && user.position !== "admin") {
            axiosSecure.patch(`/usermanage/${email}`, data)
                .then(() => {
                    refetch();
                    // toast.success("Member position updated successfully!");
                })
                .catch(() => {
                    // toast.error("Something went wrong while updating!");
                });
        } 
        else {
            // toast.error("Something went wrong while updating!");
        }
    };

    return [handlemember];
}
