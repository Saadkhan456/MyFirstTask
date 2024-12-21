import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">OAD</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-black-900">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Dining Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Top Reviews
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Travel With OAD
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Magazine
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-white text-gray-700 rounded">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">
            <i className="fa-regular fa-user"></i>
          </button>
          <button className="px-4 py-2 bg-black text-white">
            Make a Review
          </button>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden px-4 py-2 bg-gray-700 text-white rounded"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="px-4 py-2 bg-gray-700 text-white rounded m-4"
        >
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="space-y-2 mt-4 px-4">
          <li>
            <a href="#" className="block text-black-900">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Dining Guides
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Top Reviews
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Travel With OAD
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Magazine
            </a>
          </li>
        </ul>
        <div className="mt-4 px-4 flex space-x-4">
          <button className="px-4 py-2 bg-white text-gray-700 rounded">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded">
            <i className="fa-regular fa-user"></i>
          </button>
          <button className="px-4 py-2 bg-black text-white">
            Make a Review
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
