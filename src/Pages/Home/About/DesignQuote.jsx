import img1 from "../../../Image/6.jpg";

export default function DesignQuote() {
  return (
    <div className="w-full bg-[#f9f7f4] py-16">
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Left Image Section */}
        <div className="flex justify-start ">
          <div className="relative w-[300px] h-[300px]">
            <img
              src={img1}
              alt="Design inspiration"
              className="w-full h-full object-cover rounded-lg shadow-lg z-10"
            />
            <div className="absolute bottom-6 left-6 w-full h-full border-2 border-[#c78960] rounded-lg -z-0"></div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center md:pl-10">
          <blockquote className="text-2xl md:text-4xl font-semibold leading-snug italic text-[#2c241e] relative">
            <span className="absolute -top-6 left-0 text-6xl text-[#c78960] font-serif">“</span>
            We set out to create not just a place to live — but a lifestyle,
            where architecture and community blend seamlessly.
            <span className="absolute -bottom-6 right-0 text-6xl text-[#c78960] font-serif">”</span>
          </blockquote>
          <div className="mt-8">
            <p className="text-xl font-semibold text-[#c78960]">Clark Linsley</p>
            <p className="text-gray-600 text-lg">President, Development Group</p>
          </div>
        </div>
      </div>
    </div>
  );
}
