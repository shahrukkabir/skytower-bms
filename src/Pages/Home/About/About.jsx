import { motion } from "framer-motion";
import BGimg from "../../../Image/south.jpg";
import AboutText from "./AboutText";
import DesignQuote from "./DesignQuote";
import FeatureCard from "./FeatureCard";
import image from "../../../Image/aboutus.jpg";
import Team from "./Team";
import Experience from "./Experience";
import Company from "./Company";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>SkyTower | About</title>
      </Helmet>
      <div className="w-full text-[#2c241e]">
        {/* Hero Section */}
        <div
          className="w-full h-[500px] flex justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(${BGimg})`,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}  
            animate={{ opacity: 1, y: 0, scale: 1 }}       
            transition={{ duration: 1, ease: "easeOut" }}  
            className="text-white font-extrabold tracking-wide text-5xl md:text-7xl uppercase"
          >
            About Us
          </motion.h1>
        </div>

        <AboutText />
        <Experience />
        <FeatureCard />

        {/* Middle Image Banner */}
        <div className="w-full">
          <div className="container mx-auto my-10">
            <img
              src={image}
              className="w-full rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
              alt="About LuxTower"
            />
          </div>
        </div>

        <Team />
        <Company />
        <DesignQuote />
      </div>
    </>
  );
}
