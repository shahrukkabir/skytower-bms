import AllAnnouncement from "./AllAnnouncement";
import AnnouncementForm from "./AnnouncementForm";

export default function MakeAnnouncement() {
    return (
        <div className="w-full min-h-screen pt-2 px-3">
            <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-gradient-to-r from-[#805a41] to-[#4e3423] ">
                <h1 className="text-white text-center text-3xl ml-16">Make Announcement</h1>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center max-h-[200vh] sm:h-[calc(100vh - 140px)] overflow-scroll items-start">
                <AnnouncementForm></AnnouncementForm>
                <AllAnnouncement></AllAnnouncement>
            </div>
        </div>
    );
}
