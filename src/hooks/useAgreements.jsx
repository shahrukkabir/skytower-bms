import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useAgreements() {
    const { axiosPublic } = useAxiosPublic();
    const { data: agreements = [], refetch } = useQuery({
        queryKey: ["agreements"],
        queryFn: async () => {
            const res = await axiosPublic.get("/agreements");
            return res.data;
        },
    });
    return { agreements, AgreeRefetch: refetch };
}
