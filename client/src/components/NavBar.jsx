import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4">
      <Link to="/" className="text-3xl font-bold mb-4 sm:mb-0 sm:mr-4">
        <span className="text-indigo-500">Vidya</span>Bytes
      </Link>

      <button
        className="sm:hidden focus:outline-none"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg
          className="h-6 w-6 fill-current text-gray-500 hover:text-indigo-500"
          viewBox="0 0 24 24"
        >
          <path
            d={
              isMenuOpen
                ? "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                : "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            }
          />
        </svg>
      </button>

      <div
        className={`${isMenuOpen ? "" : "hidden"} sm:block flex-col sm:flex-row flex space-y-4 sm:space-y-0 sm:space-x-6`}
      >
        <Link
          to="#about"
          className="text-gray-500 hover:text-indigo-500 px-3 py-2"
        >
          About
        </Link>
        <Link
          to="#contact"
          className="text-gray-500 hover:text-indigo-500 px-3 py-2"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-3 py-2 rounded-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
