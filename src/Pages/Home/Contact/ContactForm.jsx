import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useContactMessage from "../../../hooks/useContactMessage";

export default function ContactForm() {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useContactMessage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    const dataWithDate = { ...formData, date: currentDate };

    axiosSecure
      .post("/contact_message", dataWithDate)
      .then(() => {
        toast.success("Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
        refetch();
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong!");
      });
  };

  return (
    <div className="w-full border border-[#e5e5e5] shadow-sm p-8 bg-white">
      {/* ✅ Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-2xl font-semibold text-center mb-6 text-[#25201c]">
        Drop Us A Line
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-[#2c241e] font-medium mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#bb7f56]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#2c241e] font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#bb7f56]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-[#2c241e] font-medium mb-1">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 h-[120px] resize-none focus:outline-none focus:border-[#bb7f56]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-center font-semibold text-white py-2 border-2 border-[#bb7f56] bg-[#bb7f56] hover:bg-[#c78960] hover:border-[#c78960] transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
