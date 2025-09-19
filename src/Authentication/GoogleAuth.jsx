import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUser";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const GoogleAuth = () => {
    const { signUpWithGoogle } = useAuth();
    const { users } = useUsers();
    const { axiosPublic } = useAxiosPublic();

    const handleGoogleSignup = () => {
        signUpWithGoogle()
            .then((result) => {
                const currentUserEmail = result.user.email;
                const userExists = users.some((user) => user.email === currentUserEmail);

                if (!userExists) {
                    return axiosPublic.post("/users", {
                        name: result.user.displayName,
                        image: result.user.photoURL,
                        email: currentUserEmail,
                        position: "user",
                    })
                        .then(() => {
                            toast.success(`${result.user.displayName} successfully signed up`, { duration: 2000, });
                        });
                }
                else {
                    toast.success(`${result.user.displayName} successfully logged in`, { duration: 2000, });
                    return Promise.resolve();
                }
            })
            .catch(() => {
                toast.error("Google login failed. Please try again.");
            });
    };


    return (
        <div className="mb-3">
            <motion.button onClick={handleGoogleSignup} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="btn btn-outline w-full font-semibold border-base-300 hover:border-[#bb7f56] hover:bg-[#bb7f56] hover:text-white shadow-none py-3 rounded-lg">
                <FcGoogle className="text-lg" /> Continue with Google
            </motion.button>
        </div>
    );
};

export default GoogleAuth;
