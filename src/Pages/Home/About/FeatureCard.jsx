import { FaLightbulb, FaBrain, FaMedal } from "react-icons/fa";

export default function FeatureCard() {
  const features = [
    {
      Icon: FaLightbulb,
      title: "Creativity",
      description:
        "Design inspired by innovation, blending art with architecture for an inspiring living experience.",
    },
    {
      Icon: FaBrain,
      title: "Innovation",
      description:
        "Smart, efficient systems that enhance comfort, safety, and sustainability at every level.",
    },
    {
      Icon: FaMedal,
      title: "Reliability",
      description:
        "A trusted name ensuring consistent quality and unparalleled service to every resident.",
    },
  ];

  return (
    <div className="container mx-auto py-16 flex flex-wrap justify-center gap-10">
      {features.map((feature, index) => (
        <div key={index} className="bg-[#f9f7f4] rounded-2xl p-8 text-center w-[300px] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
          <feature.Icon className="text-5xl text-[#c78960] mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#2c241e]">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
