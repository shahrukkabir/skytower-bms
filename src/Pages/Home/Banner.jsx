import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../Image/slide1.jpg";
import slide2 from "../../Image/slide2.jpg";
import slide3 from "../../Image/slide3.jpg";
import slide4 from "../../Image/slide4.jpg";
import slide5 from "../../Image/slid1.jpg";
import { Link } from "react-router-dom";

const bannerData = [
    {
        image: slide1,
        text: "Efficient Facilities Maintenance",
        desc: "Implementing proactive maintenance strategies to minimize downtime and maximize the lifespan of building equipment and systems, ensuring smooth operations and reducing maintenance costs.",
    },
    {
        image: slide2,
        text: "Enhancing Building Security",
        desc: "Utilizing state-of-the-art security systems and protocols to safeguard occupants, assets, and sensitive information, providing peace of mind and a secure environment",
    },
    {
        image: slide3,
        text: "Sustainable Energy Solutions",
        desc: "Integrating renewable energy sources, energy-efficient technologies, and sustainable practices to reduce carbon footprint, lower energy bills, and contribute to a healthier planet.",
    },
    {
        image: slide4,
        text: "Optimizing Tenant Experience",
        desc: "Focusing on delivering exceptional services, amenities, and personalized experiences to tenants, fostering satisfaction, loyalty, and a sense of community within the building.",
    },
    {
        image: slide5,
        text: "Streamlined Operations and Management",
        desc: "Implementing efficient processes, automation, and technology solutions to streamline day-to-day operations, improve productivity, and enhance decision-making for building management.",
    },
];

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
    };

    return (
        <div className="h-screen w-full bg-cover flex items-center justify-center relative overflow-hidden">
            <Swiper spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000, // 5s countdown
                    disableOnInteraction: false,
                }}
                speed={800}
                loop={true}
                grabCursor={true}
                pagination={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper absolute top-0 left-0 w-full h-full transition-opacity"
                style={{ transitionDuration: "0.8s" }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                {bannerData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={item.image} alt={`slide${idx}`} className="w-full h-full" />
                        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0 flex items-center flex-col gap-7 justify-center">
                            <h1 className="text-3xl sm:text-5xl text-center text-shadow-md text-white font-bold">
                                {item.text}
                            </h1>
                            <p className="max-w-[700px] px-4 text-xl text-center text-shadow-md text-white">
                                {item.desc}
                            </p>
                            <Link className="w-[250px] mt-5 text-center font-semibold text-white p-3 border-2 border-white hover:border-[#c78960] hover:bg-[#c78960] hover:text-white transition-colors duration-300">EXPLORE NOW</Link>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Slider ends ====================================== */}
                <div className="autoplay-progress absolute left-5 lg:left-auto lg:right-5 bottom-5 z-50" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle} className="w-12 h-12">
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray="125.6"
                            strokeDashoffset="calc(125.6 - 125.6 * var(--progress, 1))"
                            style={{
                                transition: "stroke-dashoffset 0.2s linear",
                            }}
                        ></circle>
                    </svg>
                    <span ref={progressContent} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold"></span>
                </div>

            </Swiper>
        </div>
    );
}
