import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center space-x-2">
          <img
            src="static/logo_nav.png"
            alt="Logo"
            className="h-8"
          />
        </div>

        <div className="hidden md:flex items-end space-x-8 ml-auto mr-4">
        <a href="/" className="text-gray-800 hover:text-blue-500">
          Home
        </a>

        <div className="relative">
          <button className="text-gray-800 hover:text-blue-500 flex items-center space-x-1">
            <span>Our Services</span>
          </button>
        </div>

        <a href="/" className="text-gray-800 hover:text-blue-500">
          Blog
        </a>
        <a href="/" className="text-gray-800 hover:text-blue-500">
          Contact Us
        </a>
        <a href="/" className="text-gray-800 hover:text-blue-500">
          About Us
        </a>
      </div>


        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isSearchOpen ? (
                <FaTimes  />
              ) : (
                <FaSearch />
              )}
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-12 h-10 left-0 w-40 border rounded-md px-2 py-1 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
          <button className={"bg-[#ffa229] hover:bg-[#ff9029] text-white px-4 py-2 rounded-md font-medium"}>
            Talk An Expert
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-50">
          <div className="space-y-2 py-4 text-center">
            <a href="#home" className="block text-gray-800 hover:text-blue-500">
              Home
            </a>

            <div>
              <button
     
                className="w-full text-center px-4 py-2 flex justify-center items-center hover:text-blue-500"
              >
                <span>Our Services</span>
              </button>
            </div>

            <a
              href="#blog"
              className="block text-gray-800 hover:text-blue-500"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block text-gray-800 hover:text-blue-500"
            >
              Contact Us
            </a>
            <a
              href="#about"
              className="block text-gray-800 hover:text-blue-500"
            >
              About Us
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium">
              Talk An Expert
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav2;

