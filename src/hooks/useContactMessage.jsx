import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useContactMessage() {
  const { axiosPublic } = useAxiosPublic();
  const { data: contactMessages = [], refetch } = useQuery({
    queryKey: ["contactMessages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contact_message");
      return res.data;
    },
  });
  return { contactMessages, refetch };
}
