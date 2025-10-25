import React, { useState } from "react";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import { Search } from "lucide-react";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-cream min-h-screen font-sans overflow-x-hidden">
      {/* 🌟 Hero Section */}
      <section className="relative bg-cream flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-28 overflow-hidden px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-maroon mb-4 animate-pulse leading-snug">
          Welcome to Food Blog 🍗🥗🍕
        </h1>
        <p className="text-darkText text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
          Discover delicious recipes and culinary delights that bring joy to every bite 🍴
        </p>

        {/* 🍔 Floating Emojis */}
        <span className="absolute top-8 left-4 sm:left-10 text-3xl sm:text-4xl md:text-5xl animate-bounce">
          🍔
        </span>
        <span className="absolute top-1/3 right-8 sm:right-20 text-4xl sm:text-5xl md:text-6xl animate-pulse">
          🥗
        </span>
        <span className="absolute bottom-12 left-1/4 text-3xl sm:text-4xl md:text-5xl animate-spin">
          🍩
        </span>
      </section>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center my-8 sm:my-12 px-4">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {/* 🧁 Blog List */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-serif text-maroon mb-6 animate-pulse">
          Latest Recipes
        </h2>
        <BlogList searchTerm={search} />
      </section>

      {/* 🌰 Footer */}
      <footer className="bg-maroon text-cream py-6 text-center text-sm sm:text-base mt-10 px-4">
        <p>© 2025 Food Blog | Designed by Ameera Nausin</p>
      </footer>
    </div>
  );
};

export default Home;

