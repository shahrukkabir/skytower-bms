import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUser";

export default function AdminRoute({ children }) {

    const { user, loading } = useAuth();
    const location = useLocation();
    const { users } = useUsers();

    const findUser = user ? users.find((user) => user.email === user.email) : null;

    if (loading) {
        return (
            <div className="flex justify-center items-center bg-[#e0dfdf] w-full min-h-[500px]">
                <span className="loading loading-spinner loading-[150px]"></span>
            </div>
        );
    }

    if (findUser && findUser.position === "admin") {
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/userDeshboard" replace={true} />
    );
}
