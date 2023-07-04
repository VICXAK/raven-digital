import React from "react";

import "../scss/components/BlogCard.scss";

const BlogCard = ({ img, label, title, description, date }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__img">
        <img src={img} alt="Blog" />
        <span>{label}</span>
      </div>
      <div className="blog-card__content">
        <span>{date}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
