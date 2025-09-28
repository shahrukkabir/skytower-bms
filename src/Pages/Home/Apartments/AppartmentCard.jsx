import { MdOutlineBathroom, MdOutlineSquareFoot, MdOutlineKingBed, } from "react-icons/md";
import Swal from "sweetalert2";
import useAgreements from "../../../hooks/useAgreements";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useHandleMemberByEmail from "../../../hooks/useHandleMemberByEmail";
import toast from "react-hot-toast";

export default function AppartmentCard({ apartmentData }) {
    const { axiosPublic } = useAxiosPublic();
    const { user } = useAuth();
    const { agreements, AgreeRefetch } = useAgreements();
    const navigate = useNavigate();
    const [handlemember] = useHandleMemberByEmail();

    const userHasAgreement = agreements.some(
        (agreement) => agreement.User_email === user?.email
    );
    const data = {
        User_name: user?.displayName || "",
        User_email: user?.email || "",
        Block_name: apartmentData.blockName,
        floorNo: apartmentData.floorNo,
        Apartment_no: apartmentData.apartmentNo,
        Apartment_id: apartmentData._id,
        Rent: apartmentData.rent,
        Status: "pending",
        date: new Date().toLocaleDateString(),
    };
    const handleBookingAppartment = (data) => {
        if (!user) {
            toast.error("Please login first!");
            navigate("/login");
            return;
        }
        if (userHasAgreement) {
            toast.error("You can only have one agreement at a time.");
            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "One user can make an agreement for only one apartment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#bb7f56",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.post("/agreements", data)
                    .then(() => {
                        handlemember({ position: "user" }, user.email);
                        AgreeRefetch();
                        toast.success("Agreement added successfully!");
                    })
                    .catch((err) => {
                        toast.error(`Something went wrong: ${err.message}`);
                    });
            }
        });
    }
    return (
        <div className="max-w-md w-full border border-[#c78960]/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <img
                src={apartmentData.apartmentImage}
                alt="Property"
                className="w-full h-56 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {apartmentData.towerName}
                </h3>

                <div className="grid grid-cols-2 gap-y-2 border-b border-[#c78960]/50 pb-4">
                    <p className="text-gray-600">
                        <strong className="text-gray-800">Floor:</strong> {apartmentData.floorNo}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-800">Block:</strong> {apartmentData.blockName}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-800">Apartment:</strong> {apartmentData.apartmentNo}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-800">Rent:</strong> ${apartmentData.rent}
                    </p>
                </div>

                <div className="flex justify-around text-center my-5">
                    <div className="flex flex-col items-center">
                        <MdOutlineBathroom size={26} className="text-[#c78960]" />
                        <p className="text-gray-700 text-sm">{apartmentData.bathrooms} Bath</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdOutlineSquareFoot size={26} className="text-[#c78960]" />
                        <p className="text-gray-700 text-sm">{apartmentData.totalArea} m²</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdOutlineKingBed size={26} className="text-[#c78960]" />
                        <p className="text-gray-700 text-sm">{apartmentData.bedrooms} Beds</p>
                    </div>
                </div>

                <button
                    onClick={() => handleBookingAppartment(data)}
                    className="w-full bg-[#c78960] text-white font-semibold py-2.5 rounded-full shadow-md hover:bg-[#b06f4f] transition duration-300"
                >
                    Agreement
                </button>
            </div>
        </div>

    );
}
