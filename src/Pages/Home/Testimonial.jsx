import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import design from "../../Image/design1.png";
import { motion } from "framer-motion";

export default function Testimonial() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, []);

    return (
        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full xl:w-[1000px] py-14 mx-auto px-3">
            <div className="text-center mb-10">
                <h3 className="text-3xl uppercase text-[#312720] font-extrabold tracking-wide">
                    Customer Reviews
                </h3>
                <img src={design} alt="" className="w-[200px] mx-auto mt-3" />
            </div>

            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center items-center rounded-2xl p-8 mx-4">
                            <FaQuoteLeft className="text-[80px] text-[#c78960] opacity-70 mb-4" />
                            <p className="text-center text-lg italic text-[#312720] leading-relaxed mb-6">
                                "{review.details}"
                            </p>
                            <h3 className="text-xl font-bold text-[#c78960]">
                                {review.name}
                            </h3>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
}
