import React from "react";
import "./StyleComponents.css";

const ArticlesCard = ({
  title,
  author,
  topic,
  image,
}) => {
  return (
    <div className="articles-card">
      <div className="image-container">
        <img src={image} alt="article image" className="article-image" />
      </div>
      <div className="info-card">
        <h2 className="title-card">{title}</h2>
        <p className="author-card">Author: {author}</p>
        <p className="topic-card">Topic: {topic}</p>
      </div>
    </div>
  );
};

export default ArticlesCard;
