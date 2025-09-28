import toast from "react-hot-toast";
import useAxiosPublic from "./useAxiosPublic";
import useUsers from "./useUsers";

export default function useHAndleMEmberbyEmail() {
    const { axiosPublic } = useAxiosPublic();
    const { refetch, users } = useUsers();

    const handlemember = (data, email) => {
        const user = users.find((user) => user.email === email);

        if (user && user.position !== "admin") {
            axiosPublic.patch(`/usermanage/${email}`, data)
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
