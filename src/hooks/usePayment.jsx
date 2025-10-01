import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function usePayment() {
  const { axiosPublic } = useAxiosPublic();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payments");
      return res.data;
    },
  });
  return { payments, paymentsRefetch: refetch };
}
