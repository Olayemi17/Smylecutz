import React, { useState } from 'react'
import { Link } from 'react-router'
import Fashion from "/Smylelogo.jpeg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className="bg-white  shadow-lg py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={Fashion}
              alt="Smyle Cutz"
              className="h-10 w-10 object-contain mr-2"
            />

            <span className="text-xl font-bold text-[#b58b32]">
              Smyle Cutz
            </span>
          </Link>
          {/* Mobile Menu Button (Hidden on larger screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="menu-toggle"
              className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Navigation (Hidden on smaller screens) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <Link to="/" className=" hover:text-purple-500 transition-colors duration-300">
                <li>

                  Home

                </li>
              </Link>
              <li>

                <Link to="/About" className=' hover:text-purple-500 transition-colors duration-300'>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Service" className="group hover:text-purple-500 relative">
                  Service

                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className=" hover:text-purple-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </nav>
        </div>
        {/* Mobile Menu (Hidden by default) */}
        <nav
          // id="mobile-menu"
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-50 border-t border-gray-200`}
        >
          <ul className="px-4 py-2">
            <Link to="/">
              <li className="block py-2 hover:text-primary">
                Home
              </li>
            </Link>
            <Link to="/About">
              <li className="block py-2 hover:text-primary">
                About
              </li>
            </Link>
            <Link to="/Service">
              <li className="block py-2 hover:text-primary">
                Services
                {/* Mobile Dropdown */}

              </li>
            </Link>
            <Link to="/Contact">
              <li className="block py-2 hover:text-primary">
                Contact
              </li>
            </Link>


          </ul>
        </nav>
      </header>


    </div>
  )
}
