import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
import registerData from "../../public/register.json";
import GoogleAuth from "./GoogleAuth";
import useUsers from "../hooks/useUser";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);
  const { createUser, updateUserProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { axiosPublic } = useAxiosPublic();
  const { refetch } = useUsers();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  if (user) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data) => {
    setLoading(true);
    createUser(data.email, data.password)
      .then(() => {
        return updateUserProfile({
          displayName: data.name,
          photoURL: data.imageUrl,
        });
      })
      .then(() => {
        reset();
        navigate(location.state ? location.state : "/");
        toast.success(`${data.name} successfully signed up`, {
          duration: 2000,
        });
        return axiosPublic.post("/users", {
          name: data.name,
          image: data.imageUrl,
          email: data.email,
          position: "user",
        });
      })
      .then(() => {
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-base-content/80 mb-1">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 ml-2 mt-1">{errors.name.message}</p>
                )}

              </div>
              {/* Image URL Field */}
              <div>
                <label className="block text-sm font-medium text-base-content/80 mb-1">Image URL</label>
                <input
                  type="text"
                  {...register("imageUrl", { required: "Image URL is required" })}
                  placeholder="Enter image URL"
                  className="w-full pl-10 pr-3 py-2 border  border-gray-300 rounded"
                />
                {errors.imageUrl && (
                  <p className="text-red-500 text-xs ml-2 mt-1">{errors.imageUrl.message}</p>
                )}
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
                {errors.email && (
                  <p className="text-red-500 text-xs ml-2 mt-1">{errors.email.message}</p>
                )}
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
                {errors.password && (
                  <p className="text-red-500 text-xs ml-2 mt-1">{errors.password.message}</p>
                )}
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