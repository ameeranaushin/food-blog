import React, { useState } from "react";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import { Search } from "lucide-react";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-cream min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-cream flex flex-col items-center justify-center text-center py-20 overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-serif text-maroon mb-4 animate-pulse">
          Welcome to Food Blog 🍗🥗🍕
        </h1>
        <p className="text-darkText text-lg md:text-xl mb-6">
          Discover delicious recipes and culinary delights
        </p>
        

        {/* Floating emojis */}
        <span className="absolute top-10 left-10 text-5xl animate-bounce">🍔</span>
        <span className="absolute top-1/3 right-20 text-6xl animate-pulse">🥗</span>
        <span className="absolute bottom-20 left-1/4 text-5xl animate-spin">🍩</span>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center my-12">
        <div className="relative w-11/12 md:w-2/3 lg:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-serif text-maroon mb-6 animate-pulse">
          Latest Recipes
        </h2>
        <BlogList searchTerm={search} />
      </section>

      {/* Footer */}
      <footer className="bg-maroon text-cream py-6 text-center mt-10">
        <p>© 2025 Food Blog | Designed by Ameera Nausin</p>
      </footer>
    </div>
  );
};

export default Home;
