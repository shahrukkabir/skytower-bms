import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
// import PageHelmet from "../components/PageHelmet";
import registerData from "../../public/register.json";
import { swalRegisterSuccess } from "../UI/CustomSwal";
import useAuth from "../hooks/useAuth";
import GoogleAuth from "./GoogleAuth";

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
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const { register } = useForm();


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
                <label className="block text-sm font-medium text-base-content/80 mb-1">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded"
                />
              </div>
              {/* Photo URL Field */}
              <div>
                <label className="block text-sm font-medium text-base-content/80 mb-1">Image URL</label>
                <input
                  type="text"
                  {...register("imageUrl", { required: "Image URL is required" })}
                  placeholder="Enter image URL"
                  className="w-full pl-10 pr-3 py-2 border  border-gray-300 rounded"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must be at least 6 characters long and contain at least one uppercase letter",
                      },
                    })}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded"
                    placeholder="••••••••"
                  />
                  <span
                    className="absolute top-5 right-2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>

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

          <GoogleAuth></GoogleAuth>

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