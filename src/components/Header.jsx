import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-maroon text-cream px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo / Brand Name */}
      <div className="text-2xl font-serif font-bold">
        Everyday Eats 🍴
      </div>

      {/* Navigation Links */}
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
      <div className="flex items-center space-x-4">
        <Search className="cursor-pointer hover:text-accent transition-colors" />
        <a
          href="https://www.instagram.com/ev3rydayy_cravingzz?igsh=MXZnNDducWJjMDRldQ=="
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="cursor-pointer hover:text-accent transition-colors" />
        </a>
      </div>
    </header>
  );
};

export default Header;
