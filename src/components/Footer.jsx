import React from "react";

const Footer = () => (
  <footer className="bg-white border-t mt-8">
    <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
      © {new Date().getFullYear()} Your Name. Built with React, Vite & Tailwind.
    </div>
  </footer>
);

export default Footer;
