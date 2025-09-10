import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function ProjectOverview() {
  const stats = [
    { end: 125, label: "SQUARE AREAS" },
    { end: 657, label: "CAR PARKING" },
    { end: 186, label: "APARTMENTS" },
    { end: 952, label: "ROOMS" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-5 md:p-10 bg-white">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-sm uppercase text-[#c78960] font-semibold tracking-wide">
          Project Overview
        </h3>
        <h1 className="text-3xl md:text-5xl text-center mt-2 mb-6 font-bold text-[#312720]">
          What Makes A Home?
        </h1>
        <p className="max-w-[750px] mx-auto text-center text-[#5a4b43]">
          This attractive new neighbourhood for young families and active people
          delivers fresh contemporary living with numerous free-time
          opportunities. Ovocne sady’s high-quality and practical apartments
          with functional architecture, public spaces, and excellent options for
          sport and relaxation – all just steps from your new home.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="container mx-auto grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const { ref, inView } = useInView({ triggerOnce: true });
          const color = "#e6bb9f";
          const angle = i % 2 === 0 ? "-8deg" : "8deg"; 

          return (
            <div key={i} ref={ref} className="w-full">
              {/* Angled top */}
              <div
                className="w-full h-[50px]"
                style={{
                  background: `linear-gradient(${angle}, ${color} 0%, ${color} 50%, rgba(255,0,0,0) 50%, rgba(255,0,0,0) 100%)`,
                }}
              ></div>

              {/* Content */}
              <div
                className="w-full p-6 flex flex-col justify-center items-center gap-2"
                style={{ backgroundColor: color }}
              >
                {inView && (
                  <CountUp
                    end={stat.end}
                    duration={1.5}
                    className="text-7xl font-bold text-white"
                  />
                )}
                <span className="text-white uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
