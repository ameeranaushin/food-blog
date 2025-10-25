import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-maroon text-cream px-4 sm:px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo / Brand Name */}
      <div className="text-xl sm:text-2xl font-serif font-bold">
        Everyday Eats 🍴
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 font-sans text-lg">
        <li>
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-accent transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <Search className="cursor-pointer hover:text-accent transition-colors" />
        <a
          href="https://www.instagram.com/ev3rydayy_cravingzz?igsh=MXZnNDducWJjMDRldQ=="
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="cursor-pointer hover:text-accent transition-colors" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={28} className="text-cream" />
        ) : (
          <Menu size={28} className="text-cream" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-maroon text-cream flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden animate-slideDown">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-accent transition-colors"
          >
            Contact
          </Link>

          <div className="flex space-x-6 pt-3">
            <Search className="cursor-pointer hover:text-accent transition-colors" />
            <a
              href="https://www.instagram.com/ev3rydayy_cravingzz?igsh=MXZnNDducWJjMDRldQ=="
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="cursor-pointer hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
