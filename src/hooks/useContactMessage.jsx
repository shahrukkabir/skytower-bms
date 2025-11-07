import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useContactMessage() {
  const axiosSecure = useAxiosSecure();
  const { data: contactMessages = [], refetch } = useQuery({
    queryKey: ["contactMessages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact_message");
      return res.data;
    },
  });
  return { contactMessages, refetch };
}
