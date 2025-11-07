import bgimg from "../../Image/slide2.jpg";
import design from "../../Image/design1.png";
import { LiaHomeSolid } from "react-icons/lia";
import { BsHandThumbsUp } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdFlipCameraAndroid } from "react-icons/md";
import { motion } from "framer-motion";

export default function WeProvide() {
  const items = [
    {
      icon: <LiaHomeSolid className="text-4xl -rotate-45 text-[#ffc9a4]" />,
      title: "BEST PROPERTY LISTS",
      desc: "We provide consumers with a content-rich listings in a handy format.",
    },
    {
      icon: <BsHandThumbsUp className="text-4xl -rotate-45 text-[#ffc9a4]" />,
      title: "BEST PRICE IN MARKET",
      desc: "Price estimates and sales histories for property, updating information.",
    },
    {
      icon: <SiAmazonsimpleemailservice className="text-4xl -rotate-45 text-[#ffc9a4]" />,
      title: "GUARANTEED SERVICES",
      desc: "Our managers will keep you informed and you can act with certainty.",
    },
    {
      icon: <MdFlipCameraAndroid className="text-4xl -rotate-45 text-[#ffc9a4]" />,
      title: "MARKETING RESEARCH",
      desc: "All our marketing researchers today have a tough job multitasking.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center flex-col items-center bg-no-repeat bg-cover bg-center bg-fixed p-2 md:p-5 xl:p-10 py-10 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${bgimg})`,
      }}
    >
      <motion.div initial={{ y: -80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex mb-10 flex-col mx-auto w-[220px] gap-1">
        <h3 className="text-center font-extrabold uppercase text-3xl text-[#ffc9a4]">
          we provide
        </h3>
        <img src={design} alt="" />
      </motion.div>

      <div className="container z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2, duration: 0.6 }} className="w-full flex justify-center items-center gap-5 flex-col p-5">
            <div className="w-[60px] h-[60px] border flex justify-center items-center border-[#ffc9a4] rotate-45">
              {item.icon}
            </div>
            <h3 className="text-xl text-[#ffffff] mt-4 uppercase text-center ">
              {item.title}
            </h3>
            <p className="text-center text-[#ffffff]">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 0.15 }} transition={{ duration: 1.2 }} className="md:text-[13vw] text-[100px] transform rotate-90 sm:rotate-0 absolute font-bold uppercase text-[#9b684a25]">
        We <br /> <span className="ml-0 sm:ml-[100px]">provide</span>
      </motion.h1>
    </div>
  );
}
