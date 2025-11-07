import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";

export default function AboutText() {
  return (
    <div className="container mx-auto py-16 px-5">
      <h3 className="text-center text-2xl sm:text-3xl mb-8 font-semibold tracking-wide text-[#c78960]">
        Experience Luxury Living: Our Story
      </h3>
      <div className="max-w-[900px] mx-auto">
        <p className="text-justify text-gray-700 leading-relaxed">
          At <span className="font-semibold text-[#c78960]">LuxTower</span>, we
          redefine luxury living with elegance and purpose. Our journey began
          with the vision to craft a single-building community that radiates
          class, comfort, and convenience. Each space is designed to offer
          sophistication and serenity in every corner.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="p-4 bg-[#f9f7f4] rounded-2xl hover:shadow-md transition-all">
            <BiTargetLock className="text-4xl text-[#c78960]" />
            <h3 className="text-2xl my-3 font-bold">Our Vision</h3>
            <p className="text-gray-700 text-justify">
              To create a refined, harmonious urban lifestyle where every detail
              speaks of excellence and comfort — a sanctuary amidst the city’s
              rhythm.
            </p>
          </div>
          <div className="p-4 bg-[#f9f7f4] rounded-2xl hover:shadow-md transition-all">
            <AiOutlineSafetyCertificate className="text-4xl text-[#c78960]" />
            <h3 className="text-2xl my-3 font-bold">Our Commitment</h3>
            <p className="text-gray-700 text-justify">
              We are devoted to quality, integrity, and safety. LuxTower
              provides secure, vibrant spaces enhanced by modern technology and
              attentive service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
