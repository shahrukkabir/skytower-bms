
import { FaBuilding } from "react-icons/fa";
import { SiGotomeeting } from "react-icons/si";
import { MdOutlineEventAvailable } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAgreements from "../../hooks/useAgreements";

export default function UserProfile() {
    const { user } = useAuth();
    const { agreements } = useAgreements();

    const findagreement = agreements.filter(
        (item) => item.User_email === user?.email
    );
    const boockAgreement = findagreement[0];

    const infoCards = [
        { label: "Block Name", value: boockAgreement?.Block_name || "None", icon: <FaBuilding /> },
        { label: "Floor No", value: boockAgreement?.floorNo || "None", icon: <FaBuilding /> },
        { label: "Apartment No", value: boockAgreement?.Apartment_no || "None", icon: <FaBuilding /> },
        { label: "Rent", value: boockAgreement?.Rent || "None", icon: <MdOutlineEventAvailable /> },
        { label: "Status", value: boockAgreement?.Status || "None", icon: <SiGotomeeting /> },
        { label: "Agreement Date", value: boockAgreement?.date || "None", icon: <SiGotomeeting /> },
    ];

    return (
        <div className="w-full min-h-screen p-4">
            {/* Header */}
            <div className="w-full mt-11 shadow-md p-4 bg-gradient-to-b from-[#2c241e] via-[#7a622f] to-[#504211] rounded-xl">
                <div className="w-full flex justify-between items-center">
                    <span></span>
                    <span className="bg-[#c78960] px-4 py-1 rounded-md text-white font-semibold shadow-md">
                        User Profile
                    </span>
                </div>

                {/* Profile */}
                <div className="w-full flex flex-col md:flex-row mb-3 justify-between items-center mt-6 gap-4">
                    <img src={user?.photoURL} className="h-[120px] md:h-[150px] lg:h-[180px] rounded-full border-4 border-[#e6bb9f] shadow-lg" alt="user" />
                    <div className="w-full md:p-4 p-2 bg-[#c78960] flex justify-center items-center rounded-md shadow-md">
                        <h1 className="text-white md:text-3xl text-xl font-bold uppercase">
                            {user?.displayName}
                        </h1>
                    </div>
                </div>

                <hr className="border-[#e6bb9f]/40" />

                {/* Info */}
                <div className="w-full p-3 flex gap-3 flex-col sm:flex-row sm:justify-between text-white text-sm">
                    <small>Email: {user?.email}</small>
                    <small>Last logIn: {user?.metadata.lastSignInTime}</small>
                    <small>Create time: {user?.metadata.creationTime}</small>
                </div>
            </div>

            {/* Apartment Info Cards */}
            <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {infoCards.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 bg-[#504211] p-5 rounded-xl shadow-lg border-l-4 border-[#e6bb9f] transition-transform duration-300 hover:scale-105"
                    >
                        <div className="text-3xl text-[#e6bb9f]">{item.icon}</div>
                        <div>
                            <h3 className="text-white text-base font-medium">{item.label}</h3>
                            <p className="text-[#e6bb9f] text-xl font-bold">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Status Message */}
            <div className="w-full uppercase flex justify-center items-center text-[#e6bb9f] font-semibold text-center bg-[#504211] p-5 mt-6  rounded-xl shadow-md">
                {boockAgreement ? (
                    <>
                        {boockAgreement.Status === "pending" &&
                            "You will get access to your payment system when the admin accepts your agreement."}
                        {boockAgreement.Status === "Accept" &&
                            "Your agreement has been accepted. You can now access your payment system."}
                    </>
                ) : (
                    "You need to make an agreement to get access to your apartment details."
                )}
            </div>
            <div className="h-6"></div>
        </div>
    );
}
