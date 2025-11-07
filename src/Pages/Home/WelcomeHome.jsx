import { Link } from "react-router-dom";
import { MdSlowMotionVideo, MdArrowRightAlt } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import leftimg from "../../Image/7.jpg";
import bgimg from "../../Image/bg2.png";
import design from "../../Image/design1.png";
import img from "../../Image/6.jpg";

export default function WelcomeHome() {
    const [whatch, setWhatch] = useState(false);

    return (
        <div className="bg-[#2c241e] relative w-full">
            {/* -----------social icon div---------------- */}
            <div className="w-full h-[80px] z-50 customIndex static sm:absolute -top-[80px] grid sm:flex-row-reverse sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                <div className="w-full col-span-1 md:col-span-2 flex justify-center bg-slate-400 sm:bg-transparent sm:justify-end items-center gap-3 sm:gap-10 h-full">
                    <Link to="https://web.facebook.com/" className="text-white mr-3 sm:mr-10 iconFamily">
                        <li><small className="letterSpaceing">Facebook</small></li>
                    </Link>
                    <Link to="https://www.instagram.com/" className="text-white mr-3 sm:mr-10 iconFamily">
                        <li><small className="letterSpaceing">Instagram</small></li>
                    </Link>
                    <Link to="https://x.com/home" className="text-white mr-3 sm:mr-10 iconFamily">
                        <li><small className="letterSpaceing">Twitter</small></li>
                    </Link>
                </div>
                <div className="w-full h-full flex gap-3 sm:gap-10 justify-center sm:justify-start items-center bg-[#c78960]">
                    <button onClick={() => setWhatch(!whatch)} className="flex gap-3 justify-center items-center ml-3 sm:ml-10 text-white hover:text-black">
                        <MdSlowMotionVideo className="text-2xl" /> <small>WATCH FILM</small>
                    </button>
                    <Link to={`/appartment`} className="flex gap-3 justify-center items-center ml-3 sm:ml-10 text-white hover:text-black">
                        <small>MODEL UNITES</small> <MdArrowRightAlt className="text-2xl" />
                    </Link>
                </div>
            </div>
            {/* ------------------ifren video div --------------------- */}
            <div className={`w-full h-full z-50 customIndex fixed top-0 left-0 bg-[rgba(0,0,0,0.9)] ${whatch ? "flex" : "hidden"} justify-center items-center`}>
                <div className="md:w-[750px] w-[90%] h-[400px]">
                    <div className="w-full p-3 flex justify-between items-center">
                        <span></span>
                        <IoIosRemoveCircle onClick={() => setWhatch(!whatch)} className="text-2xl font-bold cursor-pointer text-white" />
                    </div>
                    <iframe src="https://www.youtube.com/embed/2WLd1zCVX9g?si=o33Uraqyrp4TNmtg" className="w-full h-full"></iframe>
                </div>
            </div>
            {/* ----------------Section container------------------- */}
            <div className="w-full flex p-3 sm:p-5 md:p-10 justify-center overflow-hidden items-center bg-[#2c241e] relative min-h-screen">
                <div className="w-full md:min-w-[66%] h-full absolute top-0">
                    <img src={bgimg} alt="" className="bottom-0 absolute left-0" />
                </div>
                <div className="hidden md:block md:w-[33.34%] h-full z-0 absolute top-0 right-0">
                    <img src={leftimg} alt="" className="h-full w-full absolute left-0 top-0" />
                </div>
                {/* ----------------------Text + Image Section------------------ */}
                <div className="container mx-auto flex flex-col sm:flex-row lg:mr-20 items-center gap-12">
                    <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="w-full z-10 md:w-1/2 mt-5 lg:mt-0">
                        <div className="flex mb-5 flex-col w-[220px] gap-1 mx-auto lg:mx-0">
                            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-center text-xl text-[#c78960]">
                                About The Building
                            </motion.h3>
                            <img src={design} alt="" />
                        </div>
                        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="text-center lg:text-left text-3xl font-bold text-white md:text-5xl">
                            The Building You Never Need To Leave
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="text-center lg:text-justify text-[#c78960] lg:mr-24 text-base my-14">
                            Featuring a refined palette of natural materials, the open living
                            spaces provide a warm counterpoint to the soaring ceilings and
                            full-height windows. Custom herringbone floors and hand-selected
                            stone bring a rich tactility to the rooms.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} viewport={{ once: true }} className="text-center lg:text-justify text-white text-lg mb-10 lg:mr-18 lg:ml-24">
                            The design for SkyTower came from looking at the city's existing
                            buildings and thinking about which ones you might want to live in,
                            not just look at.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }} className="flex justify-center lg:justify-start">
                            <Link to={"/appartment"} className="cursor-pointer text-center p-1 hover:text-[#2c241e] hover:bg-[#c78960] border-b-2 border-[#c78960] text-[#c78960] m-10 ml-24">
                                SEE RESIDENCES
                            </Link>
                        </motion.div>
                    </motion.div>
                    {/* Image */}
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="w-full md:w-1/3 p-4 flex justify-center items-center">
                        <img src={img} alt="" className="shadow-md z-10" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
