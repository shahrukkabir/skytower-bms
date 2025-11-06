import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center bg-[#e0dfdf] w-full min-h-[500px]">
                <span className="loading loading-spinner loading-[150px]"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to={`/login`} replace={true}></Navigate>
    );
}
