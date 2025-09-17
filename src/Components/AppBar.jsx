import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // for hamburger icons
import { pictures } from '../assets/images/pictires'; // Fixed typo in import path
import { useLocation } from "react-router-dom";
const AppBar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const [isBioDropdownOpen, setIsBioDropdownOpen] = useState(false);
  const isHome = location.pathname === "/Home";
  // Navigation items with specific paths
  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Microbes", path: "/Home" },
    { name: "Minerals", path: "/minerals" },
    { name: "Biological Solutions", path: "/biological-solutions" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
    { name: "Career", path: "/career" },
  ];

  // Sub-items for Biological Solutions dropdown with specific paths
  const bioSubItems = [
    { name: "Agriculture", path: "/biological-solutions/bioremediation" },
    { name: "Aquaculture", path: "/biological-solutions/biofertilizers" },
    { name: "Poultry", path: "/biological-solutions/biopesticides" },
    { name: "Large Animals", path: "/biological-solutions/custom" },
  ];

  const handleMouseEnter = () => setIsBioDropdownOpen(true);
  const handleMouseLeave = () => setIsBioDropdownOpen(false);

  return (
    <header className={`w-full shadow-md top-0 left-0 z-50 ${isHome ? "fixed" : "sticky"}`} style={{ backgroundColor: 'rgba(3,10,26,0.4)' }}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-24">
        {/* Logo - Image with responsive sizing */}
        <div className="flex-shrink-0 ml-4 lg:ml-16">
          <img
            src={pictures.logo}
            alt="Biofactory Logo"
            className="h-12 w-20 lg:h-20 lg:w-32 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 mr-10 relative">
          {navItems.map((item, idx) => {
            // Special handling for Biological Solutions
            if (item.name === "Biological Solutions") {
              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.path}
                    className="text-white text-md hover:text-green-600 transition-colors duration-300 inline-block"
                  >
                    {item.name}
                  </a>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-gray-900 shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${isBioDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                  >
                    {bioSubItems.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        href={subItem.path}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-green-600 transition-colors duration-200"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular nav items
            return (
              <a
                key={idx}
                href={item.path}
                className="text-white text-lg hover:text-green-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Hamburger Menu (Mobile and Tablet) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 space-y-4">
          {navItems.map((item, idx) => (
            <div key={idx}>
              {item.name === "Biological Solutions" ? (
                <div>
                  <button
                    className="block text-white hover:text-green-600 transition-colors duration-300 w-full text-left"
                    onClick={() => setIsBioDropdownOpen(!isBioDropdownOpen)}
                  >
                    {item.name}
                  </button>
                  {isBioDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      {bioSubItems.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href={subItem.path}
                          className="block text-white hover:text-green-600 transition-colors duration-200 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.path}
                  className="block text-white hover:text-green-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default AppBar;