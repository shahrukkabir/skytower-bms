import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://skytower-server.vercel.app/",
});

export default function useAxiosPublic() {
  return { axiosPublic };
}
