import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data";
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams(); // get blog ID from route
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center mt-20">Recipe not found!</p>;

  return (
    <div className="bg-cream min-h-screen px-4 md:px-20 py-10">
      {/* Back button */}
      <Link
        to="/"
        className="flex items-center text-maroon mb-6 hover:text-accent transition-colors"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif text-maroon mb-6">
        {blog.title}
      </h1>

      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="max-w-sm mx-auto rounded-2xl shadow-lg mb-8"
      />

      {/* Ingredients */}
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients:</h2>
        <ul className="list-disc list-inside text-darkText text-lg md:text-xl">
          {blog.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Recipe */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Recipe:</h2>
        <p className="text-darkText text-lg md:text-xl leading-relaxed">{blog.recipe}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
