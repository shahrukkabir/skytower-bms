import { Link } from "react-router-dom";
import useCoupon from "../../../hooks/useCoupon";
import CouponCard from "./CouponCard";
import design from "../../../Image/design1.png";

export default function Coupon() {
    const { coupons } = useCoupon();
    console.log(coupons);

    return (
        <>
            <div className="w-full mb-14 flex flex-col justify-center items-center">
                <h3 className="text-2xl uppercase text-[#312720] font-bold">
                    Hot Offers From LuxTower
                </h3>
                <img src={design} alt="" className="w-[250px]" />
            </div>
            <div className="w-full py-10 mb-14 px-10 bg-[#ffefe5]">

                <div className="max-w-[700px] xl:container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {coupons.slice(0, 2).map((item) => (
                        <CouponCard key={item._id} item={item}></CouponCard>
                    ))}
                </div>
                <div className="w-full flex mt-10 justify-center items-center">
                    <Link
                        to="/allcoupons"
                        className="px-5 p-2 border-b-2 hover:bg-[#c78960] hover:text-[#2c241e] border-[#c78960] text-[#c78960]"
                    >
                        See All Coupon
                    </Link>
                </div>
            </div>
        </>

    );
}
