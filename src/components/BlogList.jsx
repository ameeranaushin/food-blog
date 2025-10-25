import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../data";

const BlogList = ({ searchTerm = "" }) => {
  const list = blogs.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default BlogList;
