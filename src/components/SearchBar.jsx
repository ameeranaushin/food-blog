import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search recipes..."
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-maroon text-darkText placeholder-darkText focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;
