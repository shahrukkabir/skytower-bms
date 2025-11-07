import design from "../../../Image/design1.png";
import Exparieanceimg from "../../../Image/exp.jpg";

export default function Experience() {
  return (
    <div className="w-full py-14 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-5">
          <div className="flex flex-col w-[220px] gap-1 mb-5">
            <h3 className="text-center uppercase text-xl text-[#c78960] tracking-widest">
              A Bold Vision
            </h3>
            <img src={design} alt="design divider" className="w-[150px] mx-auto" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c241e]">
            Exceptional Value, Remarkable Quality
          </h1>
          <p className="text-gray-700 text-justify mb-4 leading-relaxed">
            From lush landscapes to gleaming glass facades, world-renowned
            designers have shaped every detail for an impeccable experience.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            With natural materials, spacious interiors, and refined finishes,
            LuxTower delivers a warm, timeless elegance that defines true luxury
            living.
          </p>
        </div>

        <div className="flex justify-end">
          <div className="relative">
            <img
              src={Exparieanceimg}
              className="w-[270px] h-[270px] object-cover rounded-lg z-10"
              alt="Experience"
            />
            <div className="w-full h-full border-2 border-[#c78960] absolute z-0 bottom-8 left-8 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
