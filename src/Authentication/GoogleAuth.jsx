import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  return (
    <div className="mb-3">
      <motion.button
        // onClick={handleGoogleSignup}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        className="btn btn-outline w-full font-semibold border-base-300 
                   hover:border-[#bb7f56] hover:bg-[#bb7f56] hover:text-white 
                   shadow-none py-3 rounded-lg"
      >
        <FcGoogle className="text-lg" /> Continue with Google
      </motion.button>
    </div>
  );
};

export default GoogleAuth;
