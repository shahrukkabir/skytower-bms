export default function CouponCard({ item }) {
  return (
    <div className="w-full">
      {/* Same design for all screens, just smaller on mobile */}
      <div className="w-full grid grid-cols-3 rounded-xl cursor-pointer shadow-md overflow-hidden bg-[#e6bb9f]">
        {/* Left Part */}
        <div className="col-span-2 p-3 sm:p-5 pr-6 sm:pr-[40px] h-[160px] sm:h-[200px] border-r-2 flex justify-center items-center relative border-dashed border-r-[#ffefe5]">
          {/* Cut circles */}
          <div className="absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full -top-[20px] sm:-top-[30px] -right-[20px] sm:-right-[30px] bg-[#ffefe5]"></div>
          <div className="absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full -bottom-[20px] sm:-bottom-[30px] -right-[20px] sm:-right-[30px] bg-[#ffefe5]"></div>

          <div className="w-full h-full relative rounded-md overflow-hidden bg-[#ffe0ce]">
            <div className="w-full absolute h-full flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
              <div className="w-1/2 flex flex-col justify-center items-center absolute right-0 p-2 sm:p-4">
                <h1
                  className={`text-center ${
                    item.offerType === "%"
                      ? "text-3xl sm:text-5xl font-extrabold"
                      : "text-xl sm:text-3xl font-bold"
                  }`}
                >
                  {item.offerType === "%"
                    ? `${item.offerDigit + item.offerType}`
                    : `${item.offerType + item.offerDigit}`}
                </h1>
                <small className="text-center uppercase text-xs sm:text-sm">
                  off on your way
                </small>
              </div>
            </div>
            <div className="w-1/2 p-2 sm:p-5 flex justify-center items-center absolute right-0 h-full">
              <small className="text-center text-xs sm:text-sm">
                {item.description}
              </small>
            </div>
          </div>
        </div>

        {/* Right Part (Coupon Code) */}
        <div className="p-3">
          <div className="w-full h-full bg-[#ffe0ce] rounded-md p-2 sm:p-4 flex flex-col justify-center items-center">
            <h1 className="text-xs lg:text-lg sm:text-md mb-4 text-center font-semibold lg:font-extrabold uppercase">
              Coupon Code
            </h1>
            <div className="w-full border border-dashed rounded-md border-gray-500 p-1 sm:p-2 bg-white">
              <p className="uppercase text-center font-semibold text-xs sm:text-base">
                {item.code}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
