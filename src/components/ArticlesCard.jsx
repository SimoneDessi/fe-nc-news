import React from "react";

const ArticlesCard = ({
  title,
  author,
  topic,
  isSingleArticle,
  votes,
  image,
  created_at,
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

      {isSingleArticle && (
        <>
          <p>Votes: {votes}</p>

          <p>Created At: {created_at}</p>
        </>
      )}
    </div>
  );
};

export default ArticlesCard;
