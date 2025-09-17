import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Lottie from "lottie-react";
// import { useAuth } from "../context/AuthContext";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
// import PageHelmet from "../components/PageHelmet";
import registerData from "../../public/register.json";
import { swalRegisterSuccess } from "../UI/CustomSwal";
import Alert from "../ui/Alert";
import Input from "../ui/Input";
import { validationRules, getPasswordStrength } from "..//Utils/Validation";
import useAuth from "../hooks/useAuth";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
};

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        photoURL: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { register, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (error) setError("");
    };

    const passwordStrength = getPasswordStrength(formData.password);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const { name, email, password, photoURL } = formData;

        // Enhanced validation
        if (!name || !email || !password) {
            setError("Please fill in all required fields");
            setLoading(false);
            return;
        }

        if (name.length < 2) {
            setError("Name must be at least 2 characters long");
            setLoading(false);
            return;
        }

        if (name.length > 50) {
            setError("Name cannot exceed 50 characters");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            setLoading(false);
            return;
        }

        if (photoURL && photoURL.trim()) {
            try {
                new URL(photoURL);
                if (!photoURL.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                    setError(
                        "Photo URL must be a valid image file (jpg, jpeg, png, gif, webp)"
                    );
                    setLoading(false);
                    return;
                }
            } catch {
                setError("Please enter a valid photo URL");
                setLoading(false);
                return;
            }
        }

        const result = await register(
            name,
            email,
            password,
            photoURL.trim() || null
        );

        if (result.success) {
            await swalRegisterSuccess(name);
            navigate("/");
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

    const handleGoogleSignup = async () => {
        setError("");
        setLoading(true);

        const result = await loginWithGoogle();

        if (result.success) {
            navigate("/");
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }} className="py-6 flex items-center justify-center bg-base-200">
            {/* <PageHelmet /> */}
            <div className="px-4 md:px-14 lg:px-28  mt-20  container mx-auto">
                <div className="flex flex-col lg:flex-row bg-base-100/80 backdrop-blur-lg rounded-xl overflow-hidden border border-base-300/20">
                    <motion.div variants={itemVariants} transition={{ delay: 0.2, duration: 0.5 }} className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-6 bg-[#bb7f56] ">
                        <Lottie animationData={registerData} loop={true} className="w-full max-w-xs lg:max-w-sm" />
                    </motion.div>

                    <motion.div variants={itemVariants} transition={{ delay: 0.4, duration: 0.5 }} className="w-full lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center overflow-y-auto">
                        <h2 className="text-2xl lg:text-3xl font-bold text-base-content mb-1 text-center">
                            Create Account
                        </h2>
                        <p className="text-center text-base-content/70 mb-4">
                            Join us today and start your journey.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-base-content/80 mb-1">
                                    Full Name <span className="text-error">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-base-content/60" />
                                    </span>
                                    <input id="name" name="name" type="text" autoComplete="name" required className="w-full pl-10 pr-3 py-2 input input-bordered bg-base-200/50 border-base-300 text-base-content focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-base-content/80 mb-1"
                                >
                                    Email Address <span className="text-error">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-base-content/60" />
                                    </span>
                                    <input id="email" name="email" type="email" autoComplete="email" required className="w-full pl-10 pr-3 py-2 input input-bordered bg-base-200/50 border-base-300 text-base-content focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-base-content/80 mb-1">
                                    Password <span className="text-error">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-base-content/60" />
                                    </span>
                                    <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" required className="w-full pl-10 pr-12 py-2 input input-bordered bg-base-200/50 border-base-300 text-base-content focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="••••••••" value={formData.password} onChange={handleChange} />
                                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/60 hover:text-base-content transition-colors duration-200">
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                <p className="text-xs text-base-content/70 mt-1">
                                    Password must be at least 6 characters long
                                </p>
                            </div>
                            {/* Photo URL Field */}
                            <div>
                                <label htmlFor="photoURL" className="block text-sm font-medium text-base-content/80 mb-1">Photo URL (Optional)</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaImage className="text-base-content/60" />
                                    </span>
                                    <input id="photoURL" name="photoURL" type="url" className="w-full pl-10 pr-3 py-2 input input-bordered bg-base-200/50 border-base-300 text-base-content focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="https://example.com/your-photo.jpg" value={formData.photoURL} onChange={handleChange} />
                                </div>
                            </div>

                            <Alert type="error" message={error} size="sm" />

                            <div className="pt-2">
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-white font-semibold bg-gradient-to-r rounded-lg from-[#bb7f56] to-[#bb7f56] hover:from-[#bb7f56]/80 hover:to-[#bb7f56]/80 focus:ring-[#bb7f56] focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer">
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating account...
                                        </>
                                    ) : (
                                        <>
                                            <FiUserPlus />
                                            Create Account
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>

                        <div className="divider my-3">OR</div>

                        <div className="mb-3">
                            <motion.button onClick={handleGoogleSignup} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" disabled={loading} className="btn btn-outline w-full font-semibold border-base-300 hover:border-[#bb7f56] hover:bg-[#bb7f56] hover:text-white shadow-none py-3 rounded-lg">
                                <FcGoogle className="text-lg" /> Continue with Google
                            </motion.button>
                        </div>

                        <motion.p variants={itemVariants} transition={{ delay: 0.6, duration: 0.5 }} className="mt-3 text-center text-sm text-base-content/70">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-primary hover:text-primary-focus hover:underline">
                                Sign In
                            </Link>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Register;  