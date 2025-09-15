import { Link } from "react-router-dom";
import AppartmentCard from "./AppartmentCard";
import useAppartments from "../../../hooks/useAppartments";
import design from "../../../Image/design1.png";

export default function AppartmentSection() {

    const { appartmants } = useAppartments();
    const displayedAppartments = appartmants.slice(0, 3);

    return (
        <div className="w-full py-10 flex flex-col gap-5 justify-center items-center">
            <div className="w-full z-10 flex flex-col justify-center items-center">
                <h3 className="text-2xl uppercase text-[#312720] font-bold">
                    All Appartment
                </h3>
                <img src={design} alt="" className="w-[250px]" />
            </div>
            <div className="w-full px-4 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                {displayedAppartments.map((apartmentData) => (
                    <AppartmentCard key={apartmentData._id} apartmentData={apartmentData} />
                ))}
            </div>
            <Link to={`/appartment`}
                className="px-5 p-2 border-b-2 hover:bg-[#c78960] hover:text-[#2c241e] border-[#c78960] text-[#c78960]"
            >See All Apartments</Link>
        </div>
    );
}
