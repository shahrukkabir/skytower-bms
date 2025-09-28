import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useAnnouncement() {
    const { axiosPublic } = useAxiosPublic();
    const { data: announcements = [], refetch } = useQuery({
        queryKey: ["announcement"],
        queryFn: async () => {
            const res = await axiosPublic.get("/announcements");
            return res.data;
        },
    });
    return { announcements, refetch };
}
