import useCoupon from "../../../hooks/useCoupon";
import BGimg from "../../../Image/east.jpg";
import CouponCard from "./CouponCard";

export default function AllCoupons() {
  const { coupons } = useCoupon();
  return (
    <div className="w-full">
      <div
        className="w-full h-[500px] flex justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BGimg})`,
        }}
      >
        <h1 className="text-white font-extrabold text-5xl md:text-7xl uppercase">
          All coupons
        </h1>
      </div>
      <div className="max-w-[700px] px-2 py-10 xl:container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {coupons.map((item) => (
          <CouponCard key={item._id} item={item}></CouponCard>
        ))}
      </div>
    </div>
  );
}
