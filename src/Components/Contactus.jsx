import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col my-8">
      {/* Hero Banner */}
      <div className="relative w-full h-72 bg-gradient-to-r from-green-700 via-green-500 to-green-700 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59abf64d3d8a"
            alt="Biofactor Banner"
            className="w-full h-full object-cover opacity-30"
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
