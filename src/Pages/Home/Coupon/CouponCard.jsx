export default function CouponCard({ item }) {
  return (
    <div className="w-full">
      {/* ----------------------------Big screen coupon ------------------------------ */}
      <div className="w-full hidden sm:grid grid-cols-3 rounded-xl shadow-md overflow-hidden bg-[#e6bb9f]">
        <div className="w-full col-span-2 p-5 pr-[40px] h-[200px] border-r-2 flex justify-center items-center relative border-dashed border-r-[#ffefe5]">
          <div className="absolute w-[60px] h-[60px] rounded-full -top-[30px] -right-[30px] bg-[#ffefe5] "></div>
          <div className="absolute w-[60px] h-[60px] rounded-full -bottom-[30px] -right-[30px] bg-[#ffefe5] "></div>
          <div className="w-full h-full relative rounded-md overflow-hidden bg-[#ffe0ce]">
            <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
              <div className="w-1/2 flex flex-col justify-center items-center  absolute right-0 p-4 ">
                <h1 className="text-center text-3xl font-bold">
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
            <div className="border mt-3 rounded-md border-gray-800 px-4 py-1 cursor-pointer bg-white font-semibold">
              <p className="uppercase text-center ">{item.code}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------mobile coupon---------------------------- */}
      <div className="w-full block sm:hidden shadow-md h-[160px] relative rounded-md overflow-hidden bg-[#ffe0ce]">
        <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
          <div className="w-1/2 flex flex-col justify-center items-center absolute right-0 p-4">
            <h1 className="text-center text-3xl font-bold">
              {item.offerType === "%"
                ? `${item.offerDigit + item.offerType}`
                : `${item.offerType + item.offerDigit}`}
            </h1>
            <small className="text-center uppercase">off on your way</small>
          </div>
        </div>

        <div className="w-1/2 p-5 flex flex-col justify-center items-center absolute right-0 h-full">
          <h1 className="text-md mb-2 mt-4 text-center font-extrabold uppercase">
            coupon code
          </h1>
          <div className="border mt-3 rounded-md border-gray-800 px-4 py-1 cursor-pointer bg-white font-semibold">
            <p className="uppercase text-center ">
              {item.code}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
