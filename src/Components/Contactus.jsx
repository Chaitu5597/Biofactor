import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col mb-8">
      {/* Hero Banner */}
      <div className="relative w-full h-72 bg-gradient-to-r from-green-700 via-green-500 to-green-700 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="data:image/jpeg;base64,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"
            alt="Biofactor Banner"
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold drop-shadow-md">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-100 max-w-2xl mx-auto">
            We’re here to help with any questions about our biotech solutions.
          </p>
        </div>
      </div>

      {/* Contact Info (Mirror Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 -mt-20 z-20 relative">
  {[
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Address",
      text: (
        <>
          4th & 5th Floor, ARCA Satya Apartments, Phase 3, <br />
          Bachupally, Hyderabad, Telangana 500090, INDIA
        </>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      text: "+91 92980 12345",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      text: (
        <>
          admin@biofactor.in <br /> quality@biofactor.in
        </>
      ),
    },
  ].map((info, idx) => (
    <div
      key={idx}
      className="relative group bg-gradient-to-br from-white/60 to-white/20 
                 backdrop-blur-xl border border-green-200/40 
                 p-8 rounded-2xl shadow-lg 
                 transform transition-all duration-300 
                 hover:scale-105 hover:shadow-2xl 
                 hover:border-green-400/60"
    >
      {/* Icon Circle */}
      <div className="flex items-center justify-center mx-auto w-12 h-12 
                      rounded-full bg-gradient-to-r from-green-500 to-green-700 
                      text-white text-3xl shadow-lg group-hover:scale-110 
                      transition-transform duration-300">
        {info.icon}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">{info.title}</h3>

      {/* Text */}
      <p className="mt-2 text-gray-700 leading-relaxed">{info.text}</p>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 to-green-700/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
    </div>
  ))}
</div>


      {/* Contact Form with Mirror Finish */}
      <div className="bg-white/40 bg-opacity-30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-10 max-w-3xl w-full mx-auto mt-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center drop-shadow">
          Send Us a Message
        </h2>
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-green-500 rounded-lg px-4 py-3 w-full 
                       bg-white/80 backdrop-blur-md 
                       focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-200 
                       outline-none text-gray-800 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-green-500 rounded-lg px-4 py-3 w-full 
                       bg-white/80 backdrop-blur-md 
                       focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-200 
                       outline-none text-gray-800 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border  border-green-500 rounded-lg px-4 py-3 w-full 
                       bg-white/80 backdrop-blur-md 
                       focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-200 
                       outline-none text-gray-800 placeholder-gray-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-green-500 rounded-lg px-4 py-3 w-full 
                       bg-white/80 backdrop-blur-md 
                       focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-200 
                       outline-none text-gray-800 placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16 w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Biofactor Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.3987!3d17.4987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzU1LjMiTiA3OMKwMjMnNTguMiJF!5e0!3m2!1sen!2sin!4v1630000000000"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactus;




