import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useAppartments() {
  const { axiosPublic } = useAxiosPublic(); 

  const { data: appartmants = [], refetch } = useQuery({
    queryKey: ["appartmants"],
    queryFn: async () => {
      const res = await axiosPublic.get("/appartmants"); 
      return res.data;
    },
  });

  return { appartmants, refetch };
}
