import React from 'react';
import {FaLinkedin,FaFacebook, FaMapPin ,FaInstagram ,FaTwitter,FaYoutube} from 'react-icons/fa';
import { pictures } from '../assets/images/pictires';

const Footer = () => {
  const services = [
    { name: 'Agriculture', image: pictures.growth },
    { name: 'Aquaculture', image: pictures.fish },
    { name: 'Livestock', image: pictures.cow },
    { name: 'Poultry', image: pictures.farmer },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin className="inline-block text-2xl hover:text-blue-500 transition-colors duration-300" />, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: <FaYoutube className="inline-block text-2xl hover:text-red-500 transition-colors duration-300" />, url: 'https://youtube.com' },
    { name: 'Facebook', icon: <FaFacebook className="inline-block text-2xl hover:text-blue-500 transition-colors duration-300" />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <FaInstagram className="inline-block text-2xl hover:text-red-500 transition-colors duration-300" />, url: 'https://instagram.com' },
    { name: 'Twitter', icon: <FaTwitter className="inline-block text-2xl hover:text-blue-500 transition-colors duration-300" />, url: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-gray-500 text-white pt-12  ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 ml-14 pr-24">
        {/* Logo and Address */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-start gap-6 ml-4">
          <img
            src={pictures.logo}
            alt="Biofactory Logo"
            className="h-20  w-32 object-contain"
          />
          <div className="flex flex-col ml-11">
            <p className="text-lg font-semibold mb-4 ml-6">Address:</p>
            <div className="flex items-start mb-4 py-1">
              <FaMapPin className="text-green-600 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                4 & 5 Floors, Sai Medha Infra,<br />
                Arca Satya Residency, Kousalya Colony,<br />
                Bachupally, Hyderabad, Telangana 500090
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.3987!3d17.4987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzU1LjMiTiA3OMKwMjMnNTguMiJF!5e0!3m2!1sen!2sin!4v1630000000000"
              width="90%"
              height="100"
              style={{ border: 0 , marginLeft: '20px'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center text-sm hover:text-green-600 transition-colors duration-300">
                <img
                  src={service.image}
                  alt={`${service.name} Image`}
                  className="h-6 w-6 mr-2 object-contain bg-gray-500 p-1 rounded"
                />
                <a href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-1">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Want to be the smartest in your office?</h3>
            <p className="text-sm mb-4">Sign up for our newsletter:</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm pb-4">
        <p>&copy; {new Date().getFullYear()} Biofactory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;