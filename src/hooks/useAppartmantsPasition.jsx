import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useAppartmantsPasition({ getCurrentPage }) {
  const { axiosPublic } = useAxiosPublic();
  const itemOfPAges = 6;

  const { data: appartmantsPasition = [], refetch } = useQuery({
    queryKey: ["appartmantsPasition", getCurrentPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/appartmantsPasition?page=${getCurrentPage}&size=${itemOfPAges}`
      );
      return res.data;
    },
    keepPreviousData: true, 
  });

  return { appartmantsPasition, refetch };
}
