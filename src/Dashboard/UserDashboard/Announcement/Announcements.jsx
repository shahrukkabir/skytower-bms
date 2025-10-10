import useAnnouncement from "../../../hooks/useAnnouncement";
import Announcement from "./Announcement";

export default function Announcements() {
  const { announcements } = useAnnouncement();
  return (
    <div className="w-full min-h-screen pt-2 px-3">
      <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-gradient-to-r from-[#805a41] to-[#4e3423]">
        <h1 className="text-white text-center text-3xl ml-10 lg:ml-16">Announcement</h1>
      </div>
      <div className="w-full grid max-h-[calc(100vh-110px)] overflow-scroll hide-scrollbar pt-5 px-0 lg:px-4 grid-cols-1 sm:grid-cols-2 gap-5">
        {announcements.slice().reverse().map((item) => (
          <Announcement key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
