import image from "../../Image/slide1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <div className="w-full py-16 bg-[#ffefe5] overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:px-10">
        <motion.div initial={{ x: -120, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c241e] mb-3 flex items-center gap-3">
            <FaLocationDot className="text-[#bb7f56]" />
            Prime Location
          </h2>
          <h6 className="text-base md:text-lg text-gray-600 mb-6 ml-9">
            87 Mishaum Point Rd, Dartmouth, MA 02748
          </h6>
          <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
            On the best lot at Phuket is situated the Kailua Residence. It
            features Ipe hardwood flooring on the interior and granite stone
            flooring on the lanais, with high vaulted cedar ceilings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Quiet Neighbourhood",
              "Fabulous Views",
              "Great Local Community",
              "Large Play Center In Yard",
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.2 }} className="flex items-center gap-3 bg-[#fff6f1] border-l-4 border-[#bb7f56] px-4 py-3 rounded-lg">
                <VscDebugBreakpointLog className="text-[#bb7f56] shrink-0" />
                <span className="text-gray-800 text-sm md:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex justify-between items-center bg-white rounded-xl shadow-md px-4 md:px-6 py-4">
            <p className="text-[#bb7f56] flex flex-col items-center font-semibold text-sm">
              <PiMapPinSimpleAreaLight size={22} />
              <span>1,286 sqft</span>
            </p>
            <p className="text-[#bb7f56] flex flex-col items-center font-semibold text-sm">
              <MdOutlineBedroomChild size={22} />
              <span>2 Beds</span>
            </p>
            <p className="text-[#bb7f56] flex flex-col items-center font-semibold text-sm">
              <GiHomeGarage size={22} />
              <span>1 Garage</span>
            </p>
            <p className="text-[#bb7f56] flex flex-col items-center font-semibold text-sm">
              <HiOutlineHome size={22} />
              <span>2 Floors</span>
            </p>
          </motion.div>
        </motion.div>

        <motion.img initial={{ x: 120, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} src={image} className="w-full h-full object-cover" alt="location" />
      </div>
    </div>
  );
}
