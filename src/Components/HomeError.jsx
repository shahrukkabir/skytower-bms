import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import error from "../Image/404.gif";

export default function HomeError() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <img src={error} alt="error" className="max-w-[700px] w-full" />
      <Link to="/" className="mt-8 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300">
        Back To Home <FaHome className="text-xl" />
      </Link>
    </div>
  );
}
