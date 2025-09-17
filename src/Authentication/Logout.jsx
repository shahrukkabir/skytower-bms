import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function LogOut() {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: ` successfully log out`,
                    showConfirmButton: false,
                    timer: 2000,
                });
                navigate("/");
            })
            .then((err) => {
                console.log(err.message);
            });
    };
    return (
        <button onClick={handleSignOut} className={` text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]`}>LOGOUT</button>
    );
}
