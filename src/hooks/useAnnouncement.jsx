import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useAnnouncement() {
    const axiosSecure = useAxiosSecure();
    const { data: announcements = [], refetch } = useQuery({
        queryKey: ["announcement"],
        queryFn: async () => {
            const res = await axiosSecure.get("/announcements");
            return res.data;
        },
    });
    return { announcements, refetch };
}
