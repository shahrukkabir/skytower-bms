import { Link } from "react-router-dom";
import useCoupon from "../../../hooks/useCoupon";
import CouponCard from "./CouponCard";
import design from "../../../Image/design1.png";
import { motion } from "framer-motion";

export default function Coupon() {
    const { coupons } = useCoupon();

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full my-5 flex flex-col justify-center items-center">
                <h3 className="text-2xl uppercase text-[#312720] font-bold">
                    Offers From SkyTower
                </h3>
                <img src={design} alt="" className="w-[250px]" />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full py-10 px-4 bg-[#ffefe5]">
                <div className="max-w-[700px] xl:container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {coupons.slice(0, 2).map((item) => (
                        <CouponCard key={item._id} item={item}></CouponCard>
                    ))}
                </div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full flex mt-10 justify-center items-center">
                    <Link to="/allcoupons" className="px-5 p-2 border-b-2 hover:bg-[#c78960] hover:text-[#2c241e] border-[#c78960] text-[#c78960]">
                        See All Coupon
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
}
