import React, { useState } from "react";
import { Heart, HeartOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-cream border border-maroon rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
      
      {/* Clickable Image */}
      <Link to={`/blogdetail/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4">
        {/* Clickable Title */}
        <Link to={`/blogdetail/${blog.id}`}>
          <h3 className="text-2xl font-semibold text-maroon hover:underline transition-all">
            {blog.title}
          </h3>
        </Link>

        <p className="text-lightText mt-2">{blog.snippet}</p>

        <div className="flex justify-between items-center mt-4">
          {/* Clickable Heart */}
          <div
            onClick={() => setLiked(!liked)}
            className="cursor-pointer transition-transform hover:scale-110"
          >
            {liked ? (
              <HeartOff className="text-red-500 fill-red-500" />
            ) : (
              <Heart className="text-red-600" />
            )}
          </div>

          {/* Right Arrow (link to full recipe) */}
          <Link to={`/blogdetail/${blog.id}`}>
            <ArrowRight className="text-maroon cursor-pointer hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

