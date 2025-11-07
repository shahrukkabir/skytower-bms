import { Link } from "react-router-dom";
import image from "../../../Image/1.jpg";
import { FaFacebook, FaLocationDot, FaPhone, FaTwitter, FaVoicemail, FaWebflow, FaWhatsapp, } from "react-icons/fa6";
import ContactForm from "./ContactForm";

export default function ContactInfo() {
  return (
    <div className="w-full container mx-auto">
      {/* Top Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Info Cards Section */}
        <div className="grid sm:grid-cols-2 gap-6 p-8">
          {/* Phone */}
          <div className="p-8 border border-[#bb7f56] text-center shadow-sm">
            <FaPhone className="text-3xl text-[#bb7f56] mx-auto mb-3" />
            <h2 className="uppercase text-xl font-bold text-[#2c241e] mb-2">
              Phone
            </h2>
            <p>+8801617-688805</p>
            <p>+8801845-256458</p>
          </div>

          {/* Email */}
          <div className="p-8 border border-[#bb7f56] text-center shadow-sm">
            <FaVoicemail className="text-3xl text-[#bb7f56] mx-auto mb-3" />
            <h2 className="uppercase text-xl font-bold text-[#2c241e] mb-2">
              Email
            </h2>
            <p>service@gmail.com</p>
            <p>helpline@gmail.com</p>
          </div>

          {/* Online */}
          <div className="p-8 border border-[#bb7f56] text-center shadow-sm">
            <FaWebflow className="text-3xl text-[#bb7f56] mx-auto mb-3" />
            <h2 className="uppercase text-xl font-bold text-[#2c241e] mb-2">
              Online
            </h2>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Link
                to="https://web.whatsapp.com/"
                className="flex items-center gap-2 hover:text-[#bb7f56]"
              >
                <FaWhatsapp /> WhatsApp
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="flex items-center gap-2 hover:text-[#bb7f56]"
              >
                <FaFacebook /> Facebook
              </Link>
              <Link
                to="https://twitter.com/home"
                className="flex items-center gap-2 hover:text-[#bb7f56]"
              >
                <FaTwitter /> Twitter
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="p-8 border border-[#bb7f56] text-center shadow-sm">
            <FaLocationDot className="text-3xl text-[#bb7f56] mx-auto mb-3" />
            <h2 className="uppercase text-xl font-bold text-[#2c241e] mb-2">
              Address
            </h2>
            <p>401 Broadway, 24th Floor</p>
            <p>Orchard View, London, UK</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 border border-[#bb7f56] shadow-sm">
        <div className="w-full h-[300px] sm:h-[350px]">
          <img src={image} alt="Contact" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#2c241e] text-[#ffefe5] p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-3 uppercase">
            Prefer a personal chat?
          </h3>
          <p className="mb-3 text-sm leading-relaxed">
            Schedule a 15-minute intro call with us. We’ll answer your questions
            and discuss your needs directly.
          </p>
          <p className="font-medium text-lg tracking-wide">
            Call: +88 01617-688805
          </p>
        </div>
      </div>
    </div>
  );
}
