import logo from "../../Image/logo.svg";
import bgImg from "../../Image/fbg.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full flex-col mt-5 text-center lg:text-left relative p-5 sm:p-10 bg-[#2c241e] flex overflow-hidden justify-center items-center">
      <img src={bgImg} alt="" className="absolute w-full sm:w-1/2 right-0 z-10  bottom-0" />
      <div className="container border-b pb-10 border-b-1 border-white mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="w-full flex gap-2 justify-center text-white items-center md:justify-start md:items-start">
          <FaBuilding className="text-3xl" />
          <span className="text-3xl">Sky-Tower</span>
        </div>
        <div className="w-full flex flex-col text-white">
          <h1 className="mb-8 text-2xl">Address</h1>
          <span>Germany — 785 15h Street,</span>
          <span>Office 478</span>
          <span>Berlin, De 81566</span>
        </div>
        <div className="w-full flex flex-col text-white">
          <h1 className="mb-8 text-2xl">Say Hello</h1>
          <span>info@email.com</span>
          <span>+18408412569</span>
        </div>
        <div className="w-full flex flex-col text-white">
          <h1 className="mb-8 text-2xl">Useful Links</h1>
          <Link to={`/Announcements`}>News</Link>
          <Link to={`/appartment`}>Projects</Link>
          <Link to={`/appartment`}>License</Link>
          <Link to={`/appartment`}>Terms Of Service</Link>
        </div>
      </div>
      <div className="w-full flex sm:flex-row-reverse flex-col  gap-5 justify-center sm:justify-between items-center pt-10 px-2">
        <div className="text-white flex gap-3 z-50 cursor-pointer text-2xl">
          <Link to="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com/home">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link to="https://web.whatsapp.com">
            <FaWhatsapp />
          </Link>
        </div>
        <p className="text-white font-normal">
          © 2025 Sky -Tower. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
