import logo1 from "../../../Image/c1.png";
import logo2 from "../../../Image/c2.png";
import logo3 from "../../../Image/c3.png";
import logo4 from "../../../Image/c4.png";

export default function Company() {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="container mx-auto py-14">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[#c78960] text-xl uppercase tracking-wide">
          Our Partners
        </h3>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-[#2c241e]">
          We Work With The Best
        </h2>
        <div className="w-[80px] h-[3px] bg-[#c78960] mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="opacity-70 hover:opacity-100 transition-all grayscale hover:grayscale-0 hover:scale-105 duration-300"
          >
            <img src={logo} className="w-40 object-contain" alt="Company logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
