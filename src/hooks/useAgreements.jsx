import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useAgreements() {
    const axiosSecure = useAxiosSecure();
    const { data: agreements = [], refetch } = useQuery({
        queryKey: ["agreements"],
        queryFn: async () => {
            const res = await axiosSecure.get("/agreements");
            return res.data;
        },
    });
    return { agreements, AgreeRefetch: refetch };
}
