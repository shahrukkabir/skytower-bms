import BGimg from "../../../Image/south.jpg";
import AboutText from "./AboutText";
import DesignQuote from "./DesignQuote";
import FeatureCard from "./FeatureCard";
import image from "../../../Image/aboutus.jpg";
import Team from "./Team";
import Experience from "./Experience";
import Company from "./Company";

export default function About() {
  return (
    <div className="w-full text-[#2c241e]">
      {/* Hero Section */}
      <div className="w-full h-[500px] flex justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(${BGimg})`,
        }}>
        <h1 className="text-white font-extrabold tracking-wide text-5xl md:text-7xl uppercase">
          About Us
        </h1>
      </div>
      <AboutText />
      <Experience />
      <FeatureCard />
      {/* Middle Image Banner */}
      <div className="w-full">
        <div className="container mx-auto my-10">
          <img src={image} className="w-full rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500" alt="About LuxTower" />
        </div>
      </div>
      <Team />
      <Company />
      <DesignQuote />
    </div>
  );
}
