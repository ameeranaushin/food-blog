import React, { useState } from "react";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import { Search } from "lucide-react";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-cream min-h-screen font-sans overflow-x-hidden">
      {/* 🌟 Hero Section */}
{/* 🌟 Hero Section */}
<section
  className="relative flex flex-col items-center justify-center text-center py-20 sm:py-28 px-4 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1605327047708-e534b2257359?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* 🍔 Floating Emojis */}
  <span className="absolute top-12 left-[10%] text-4xl sm:text-5xl md:text-6xl animate-bounce select-none">
    🍔
  </span>
  <span className="absolute top-20 right-[10%] text-4xl sm:text-5xl md:text-6xl animate-pulse select-none">
    🥗
  </span>
  <span className="absolute bottom-12 left-[45%] text-4xl sm:text-5xl md:text-6xl animate-spin select-none">
    🍩
  </span>

  {/* Content */}
  <div className="relative z-10">
    <h1
      className="text-4xl sm:text-6xl md:text-7xl text-maroon mb-4 leading-snug"
      style={{
        fontFamily: "'Pinyon Script', cursive",
        textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
      }}
    >
      Everyday Eats
    </h1>

    <p className="text-cream text-base sm:text-lg md:text-xl mb-8 max-w-2xl italic mx-auto">
      From smoky tandoors to saffron rice — where every recipe tells a story of comfort and craving.
    </p>
  </div>
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

