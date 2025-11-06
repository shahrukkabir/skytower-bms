import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { signOutUser } = useAuth();

    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("access-token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            } 
            else {
                delete config.headers.Authorization;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            const status = error.response?.status;
            const token = localStorage.getItem("access-token");
            if ((status === 401 || status === 403) && token) {
                await signOutUser();
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );



    return axiosSecure;
};

export default useAxiosSecure;