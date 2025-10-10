export default function Announcement({ item }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-6 border border-[#e6bb9f]/40 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <span className="text-sm text-[#bb7f56] font-semibold">{item.date}</span>
      </div>

      <h1 className="mt-3 text-xl font-bold text-[#2c241e]">{item.title}</h1>

      <p className="mt-2 text-gray-600">{item.description}</p>
    </div>
  );
}
