import { useState, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { AuthContext } from "../provider/AuthProvider";
import { FiLogIn, FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import loginData from "../../public/login.json";
import { Helmet } from 'react-helmet-async';
import GoogleAuth from "./GoogleAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useUsers from "../hooks/useUser";
import { useForm } from "react-hook-form";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
};

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { signInUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const { users } = useUsers();
    const { axiosPublic } = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    if (user) {
        return <Navigate to={"/"} />;
    }

    const onSubmit = (data) => {
        setLoading(true);
        setErrorMessage("");

        signInUser(data.email, data.password)
            .then((result) => {
                toast.success(`${result.user.displayName || "User"} successfully logged in`, { duration: 2000 });
                navigate("/");
                reset();

                const currentUserEmail = result.user.email;
                const userExists = users.some((u) => u.email === currentUserEmail);

                if (!userExists) {
                    return axiosPublic.post("/users", {
                        name: result.user.displayName,
                        image: result.user.photoURL,
                        email: currentUserEmail,
                        position: "user",
                    });
                }
                else {
                    return Promise.resolve();
                }
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message || "Login failed. Please try again.", { duration: 3000 });
                setErrorMessage("Invalid email or password. Please try again.");
            });
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <>
            <Helmet>
                <title>SkyTower | SignIn</title>
            </Helmet>
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }} className="py-6 flex items-center justify-center bg-base-200">
                <div className="px-4 md:px-14 lg:px-28 mt-20 container mx-auto">
                    <div className="flex flex-col lg:flex-row bg-base-100/80 backdrop-blur-lg rounded-xl overflow-hidden border border-base-300/20">

                        {/* Left Side Animation */}
                        <motion.div variants={itemVariants} transition={{ delay: 0.2, duration: 0.5 }} className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-[#bb7f56]">
                            <Lottie animationData={loginData} loop={true} className="w-full max-w-md" />
                        </motion.div>

                        {/* Right Side Form */}
                        <motion.div variants={itemVariants} transition={{ delay: 0.4, duration: 0.5 }} className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-base-content mb-2 text-center">
                                Welcome Back!
                            </h2>
                            <p className="text-center text-base-content/70 mb-8">
                                Sign in to continue to your account.
                            </p>

                            {errorMessage && (
                                <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label className="block mb-2">Email</label>
                                    <input type="email" {...register("email", { required: "Email is required" })} placeholder="you@example.com" className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded" />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs ml-2 mt-1">{errors.email.message}</p>
                                    )}
                                </div>


                                {/* Password Field */}
                                <div>
                                    <label className="block mb-2">Password</label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"}
                                            {...register("password", {
                                                required: "Password is required",
                                                pattern: {
                                                    value: /^(?=.*[A-Z]).{6,}$/,
                                                    message: "Password must be at least 6 characters and contain one uppercase",
                                                },
                                            })}
                                            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded" placeholder="••••••••" />
                                        <span className="absolute top-3 right-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </span>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-xs ml-2 mt-1">{errors.password.message}</p>
                                    )}
                                </div>

                                {/* Submit */}
                                <div>
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold bg-gradient-to-r from-[#bb7f56] to-[#bb7f56] rounded-lg hover:from-[#bb7f56]/80 hover:to-[#bb7f56]/80 focus:outline-none focus:ring-2 focus:ring-[#bb7f56] focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Signing In...
                                            </>
                                        ) : (
                                            <>
                                                <FiLogIn />
                                                Sign In
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>

                            <div className="divider my-6">OR</div>

                            {/* Google Login */}
                            <GoogleAuth />

                            <motion.p variants={itemVariants} transition={{ delay: 0.6, duration: 0.5 }} className="mt-8 text-center text-sm text-base-content/70">
                                Don&apos;t have an account?{" "}
                                <Link to="/register" className="font-medium text-[#bb7f56] hover:text-[#bb7f56]/80 hover:underline">
                                    Sign Up
                                </Link>
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Login;
