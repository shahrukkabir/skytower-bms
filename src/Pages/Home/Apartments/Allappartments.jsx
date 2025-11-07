import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BGimg from "../../../Image/slide2.jpg";
import AppartmentCard from "./AppartmentCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAppartmantsPasition from "../../../hooks/useAppartmantsPasition";
import { Helmet } from "react-helmet-async";

export default function Allappartments() {
  const { axiosPublic } = useAxiosPublic();
  const [getCurrentPage, setGetCurrentPage] = useState(0);
  const itemOfPAges = 6;
  const [apparmentLength, setAppartmanetLength] = useState(0);
  const { appartmantsPasition } = useAppartmantsPasition({ getCurrentPage });

  useEffect(() => {
    axiosPublic
      .get("/appartmentlength")
      .then((response) => setAppartmanetLength(response.data.count))
      .catch((err) => console.error(err));
  }, [axiosPublic]);

  const numberOfPages = Math.ceil(apparmentLength / itemOfPAges);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className="w-full">
      <Helmet>
        <title>SkyTower | Appartments</title>
      </Helmet>

      {/* Hero Section */}
      <div
        className="w-full h-[600px] flex justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BGimg})`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white font-extrabold text-5xl md:text-7xl uppercase tracking-wider"
        >
          Apartment
        </motion.h1>
      </div>

      {/* Apartment Cards */}
      <div className="w-full px-4 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {appartmantsPasition.map((apartmentData) => (
          <AppartmentCard
            key={apartmentData._id}
            apartmentData={apartmentData}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full pt-10 pb-5 flex justify-center items-center">
        <div className="join">
          <button
            onClick={() => setGetCurrentPage((prev) => Math.max(prev - 1, 0))}
            className="join-item btn"
          >
            «
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={`join-item btn ${getCurrentPage === page ? "bg-[#c78960]" : ""}`}
              onClick={() => setGetCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setGetCurrentPage((prev) => Math.min(prev + 1, numberOfPages - 1))
            }
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
