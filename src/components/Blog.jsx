import React from "react";
import "../scss/components/Blog.scss";

const Blog = ({ children }) => {
  return (
    <section className="blog">
      <div className="container">
        <h2 className="blog__title">Blog</h2>
        <div className="blog-wrap">{children}</div>
      </div>
    </section>
  );
};

export default Blog;
