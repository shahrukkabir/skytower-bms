export default function CouponCard({ item }) {
  return (
    <div className="w-full">
      {/* ----------------------------Big screen coupon ------------------------------ */}
      <div className="w-full hidden sm:grid grid-cols-3 rounded-xl cursor-pointer shadow-md overflow-hidden bg-[#e6bb9f]">
        <div className="w-full col-span-2 p-5 pr-[40px] h-[200px] border-r-2 flex justify-center items-center relative border-dashed border-r-[#ffefe5]">
          <div className="absolute w-[60px] h-[60px] rounded-full -top-[30px] -right-[30px] bg-[#ffefe5] "></div>
          <div className="absolute w-[60px] h-[60px] rounded-full -bottom-[30px] -right-[30px] bg-[#ffefe5] "></div>
          <div className="w-full h-full relative rounded-md overflow-hidden bg-[#ffe0ce]">
            <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
              <div className="w-1/2 flex flex-col justify-center items-center  absolute right-0 p-4 ">
                <h1
                  className={`text-center ${item.offerType === "%"
                      ? "text-5xl font-extrabold"
                      : "text-3xl font-bold"
                    }`}
                >
                  {item.offerType === "%"
                    ? `${item.offerDigit + item.offerType}`
                    : `${item.offerType + item.offerDigit}`}
                </h1>
                <small className="text-center uppercase">off on your way</small>
              </div>
            </div>
            <div className="w-1/2 p-5 flex justify-center items-center absolute right-0 h-full">
              <small className="text-justify">{item.description}</small>
            </div>
          </div>
        </div>
        <div className="w-full p-5 pl-10">
          <div className="w-full h-full bg-[#ffe0ce] rounded-md p-4 flex flex-col justify-center items-center">
            <h1 className="text-md text-center font-extrabold uppercase">
              copon code
            </h1>
            <div className="w-full border border-dashed rounded-md border-gray-500 p-1">
              <p className="uppercase text-center">{item.code}</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------mobile coupon---------------------------- */}
      <div className="w-full block sm:hidden relative rounded-md overflow-hidden bg-[#ffe0ce] p-4 shadow-md">
        {/* Circle background */}
        <div className="absolute w-[180px] h-[180px] rounded-full bg-slate-300 -top-16 -left-16 opacity-40"></div>

        {/* Discount section */}
        <div className="w-full flex flex-col justify-center items-center relative z-10">
          <h1
            className={`text-center ${item.offerType === "%"
                ? "text-5xl font-extrabold"
                : "text-4xl font-bold"
              }`}
          >
            {item.offerType === "%"
              ? `${item.offerDigit + item.offerType}`
              : `${item.offerType + item.offerDigit}`}
          </h1>
          <small className="text-center uppercase tracking-wide">
            off on your way
          </small>
        </div>

        {/* Coupon code box */}
        <div className="mt-4 w-full">
          <h1 className="text-md text-center font-extrabold uppercase mb-2">
            Coupon Code
          </h1>
          <div className="w-full border border-dashed rounded-md border-gray-500 p-2 bg-white">
            <p className="uppercase text-center font-semibold">{item.code}</p>
          </div>
        </div>

        {/* Description */}
        <small className="w-full mt-3 block text-center text-sm text-gray-700">
          {item.description}
        </small>
      </div>

    </div>
  );
}
