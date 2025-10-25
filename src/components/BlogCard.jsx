import React from "react";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-cream border border-maroon rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
      {/* Click on image */}
      <Link to={`/blogdetail/${blog.id}`}>
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      </Link>

      <div className="p-4">
        <h3 className="text-2xl font-semibold text-maroon">{blog.title}</h3>
        <p className="text-lightText mt-2">{blog.snippet}</p>
        <div className="flex justify-between items-center mt-4">
          <Heart className="text-red-600 cursor-pointer hover:scale-110 transition-transform" />
          {/* Click on right arrow */}
          <Link to={`/blogdetail/${blog.id}`}>
            <ArrowRight className="text-maroon cursor-pointer hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

