import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data";
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center mt-20">Recipe not found!</p>;

  return (
    <div className="bg-cream min-h-screen px-4 md:px-20 py-10">
      {/*  Back button */}
      <Link
        to="/"
        className="flex items-center text-maroon mb-6 hover:text-accent transition-colors"
      >
        <ArrowLeft className="mr-2" /> Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-cursive text-maroon text-center mb-6">
        {blog.title}
      </h1>

      {/*  Banner with Image */}
      <div className="relative bg-gradient-to-b from-maroon/10 to-transparent py-10 mb-8 rounded-3xl shadow-sm">
        <div className="flex justify-center">
          <img
            src={blog.image}
            alt={blog.title}
            className="max-w-md md:max-w-lg rounded-2xl shadow-lg border-4 border-white"
          />
        </div>
      </div>

      {/*  Recipe Content */}
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Details */}
        <div className="text-center text-darkText text-lg md:text-xl">
          <p><strong> Time:</strong> {blog.time}</p>
          <p><strong> Difficulty:</strong> {blog.difficulty}</p>
          <p><strong> Serves:</strong> {blog.serves}</p>
        </div>

        {/* Intro */}
        <p className="italic text-darkText text-lg md:text-xl leading-relaxed text-center">
          {blog.intro}
        </p>

        <hr className="border-t-2 border-maroon/20 my-8" />

        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-semibold text-maroon mb-3 text-center">
             Ingredients
          </h2>
          <ul className="list-disc list-inside text-darkText text-lg md:text-xl space-y-1">
            {blog.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <hr className="border-t-2 border-maroon/20 my-8" />

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold text-maroon mb-3 text-center">
             Instructions
          </h2>
          <ol className="list-decimal list-inside text-darkText text-lg md:text-xl space-y-2 leading-relaxed">
            {blog.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Note */}
        {blog.note && (
          <div className="bg-maroon/10 border-l-4 border-maroon p-4 rounded-lg">
            <p className="italic text-maroon text-lg md:text-xl">
              <strong>Note:</strong> {blog.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;

