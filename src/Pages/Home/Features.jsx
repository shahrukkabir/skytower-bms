import image from "../../Image/feature.jpg";
import image1 from "../../Image/feature2.jpg";
import image2 from "../../Image/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function Features() {
  const featureData = [
    {
      image: image,
      title: "Living Room",
      desc: "A living room is a cozy space for relaxing and socializing, typically featuring seating, a coffee table, and entertainment.",
    },
    {
      image: image1,
      title: "Bed Room",
      desc: "A bedroom is a private space for sleeping and relaxation, typically featuring a bed, nightstands, and storage.",
    },
    {
      image: image2,
      title: "Kitchen",
      desc: "A kitchen is a functional space for cooking and meal preparation, typically equipped with appliances, cabinets, and a sink.",
    },
  ];

  return (
    <div className="w-full py-10 mb-14 bg-[#ffefe5]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 relative">
        
        {/* Left side image (desktop only) */}
        <div className="hidden md:block w-full">
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>

        {/* Text block */}
        <div className="max-w-xl ml-0 lg:ml-40 mt-0 px-4 md:px-0">
          <div className="w-24 mx-auto lg:mx-0 border-t-2 border-[#c78960] mb-4"></div>
          <h3 className="text-4xl text-center lg:text-justify md:text-5xl font-bold text-[#2c241e]">
            Residences
          </h3>
          <p className="text-gray-600 text-base text-center lg:text-justify mt-4 leading-relaxed max-w-md">
            Spacious light-filled condominium residences, with panoramic views.
            An architectural wonder designed by Jean Nouvel.
          </p>
        </div>

        {/* Swiper */}
        <div className="w-full md:w-[600px] p-3 md:absolute md:top-1/2 md:left-[400px] md:-translate-y-1/3">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            grabCursor={true}
            modules={[Autoplay]}
            className="mySwiper bg-[#ffefe5] w-full md:w-[800px] h-auto md:h-[300px]"
          >
            {featureData.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className="relative flex flex-col md:block"
              >
                {/* Mobile layout: stacked */}
                <div className="flex flex-col md:hidden">
                  <img
                    src={item.image}
                    alt={`slide${idx}`}
                    className="w-full h-52 object-cover"
                  />
                  <div className="bg-[#ffefe5] p-6">
                    <p className="uppercase text-sm tracking-wider text-gray-500 mb-2">
                      Reflect & Relax
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Desktop layout: overlay */}
                <div className="hidden md:block">
                  <div className="absolute left-0 top-0 bottom-0 w-1/2 flex flex-col justify-center px-10 bg-[#ffefe5]">
                    <p className="uppercase text-sm tracking-wider text-gray-500 mb-2">
                      Reflect & Relax
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.desc}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt={`slide${idx}`}
                    className="absolute right-0 w-1/2 h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
