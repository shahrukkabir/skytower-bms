import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

export default function LogOut() {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully logged out", { duration: 2000 });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]"
    >
      LOGOUT
    </button>
  );
}
