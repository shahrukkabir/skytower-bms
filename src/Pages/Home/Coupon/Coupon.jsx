import { Link } from "react-router-dom";
import useCoupon from "../../../hooks/useCoupon";
import CouponCard from "./CouponCard";

export default function Coupon() {
  const { coupons } = useCoupon();
  console.log(coupons);
  
  return (
    <div className="w-full py-10 px-2 bg-[#ffefe5]">
      <div className="max-w-[700px] xl:container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {coupons.slice(0, 2).map((item) => (
          <CouponCard key={item._id} item={item}></CouponCard>
        ))}
      </div>
      <div className="w-full flex mt-10 justify-center items-center">
        <Link
          to="/allcoupons"
          className="px-5 p-2 border-b-2 border-[#ffd5bd] hover:bg-[#ffd5bd]"
        >
          See All Coupon
        </Link>
      </div>
    </div>
  );
}
