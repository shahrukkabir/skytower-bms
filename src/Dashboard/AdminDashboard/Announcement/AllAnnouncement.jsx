import { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import useAnnouncement from "./../../../hooks/useAnnouncement";

export default function AllAnnouncement() {
    const { announcements } = useAnnouncement();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => setSearchTerm(e.target.value);

    const filteredAnnouncements = announcements.filter((announcement) =>
        announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.date.includes(searchTerm)
    );

    return (
        <div className="w-full h-full">
            {/* Search */}
            <div className="w-full p-3 flex justify-center">
                <input type="search" value={searchTerm} onChange={handleSearch} className="input sm:w-[400px] border border-[#e6bb9f] focus:border-[#bb7f56] focus:ring-[#bb7f56]" placeholder="Search by title or date" />
            </div>
            {/* Announcements */}
            <div className="h-full p-3 space-y-4 overflow-y-auto max-h-[70vh]">
                {filteredAnnouncements.length > 0 ? (
                    filteredAnnouncements.map((item) => (
                        <AnnouncementCard key={item._id} item={item} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No announcements found</p>
                )}
            </div>

        </div>
    );
}
