import { Link } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../Image/slide1.jpg";
import slide2 from "../../Image/slide2.jpg";
import slide3 from "../../Image/slide3.jpg";
import slide4 from "../../Image/slide4.jpg";
import slide5 from "../../Image/slid1.jpg";

const bannerData = [
    {
        image: slide1,
        text: "Modern Luxury Apartments",
        desc: "Experience premium living with spacious layouts, elegant interiors, and a peaceful environment designed for your comfort.",
    },
    {
        image: slide2,
        text: "Prime Location & Connectivity",
        desc: "Live at the heart of the city with easy access to transportation, shopping centers, hospitals, restaurants, and essential services.",
    },
    {
        image: slide3,
        text: "Safe & Secure Living",
        desc: "Enjoy round-the-clock security, CCTV surveillance, emergency support, and a protected environment for your family.",
    },
    {
        image: slide4,
        text: "Community-Focused Environment",
        desc: "A welcoming residential community with friendly neighbors, shared amenities, and an atmosphere designed for harmonious living.",
    },
    {
        image: slide5,
        text: "Well-Maintained Facilities",
        desc: "Regular maintenance, clean common areas, uninterrupted utilities, and a building management team always ready to assist.",
    },
];



export default function Banner() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="h-screen w-full bg-cover flex items-center justify-center relative overflow-hidden">
            <Swiper spaceBetween={0} centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={900} loop={true} pagination={false} navigation={true} modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper absolute top-0 left-0 w-full h-full transition-opacity"
                style={{ transitionDuration: "0.8s" }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                {bannerData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={item.image} alt={`slide${idx}`} className="w-full h-full" />
                        <div className="absolute bg-[rgba(0,0,0,0.5)] px-10 inset-0 flex items-center flex-col gap-7 justify-center text-center">
                            {/* Animated Title */}
                            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-3xl sm:text-5xl text-white font-bold">
                                {item.text}
                            </motion.h1>
                            {/* Animated Description */}
                            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} className="max-w-[700px] text-xl text-white">
                                {item.desc}
                            </motion.p>

                            {/* Animated Button */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                                <Link className="w-[250px] mt-5 inline-block text-center font-semibold text-white p-3 border-2 border-white hover:border-[#c78960] hover:bg-[#c78960] hover:text-white transition-colors duration-300">
                                    EXPLORE NOW
                                </Link>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Slider ends ====================================== */}
                <div className="autoplay-progress absolute bottom-5 right-5 z-50 lg:left-5 lg:right-auto" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
