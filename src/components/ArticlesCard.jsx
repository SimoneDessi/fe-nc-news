import React from "react";

const ArticlesCard = ({
  title,
  author,
  topic,
  isSingleArticle,
  votes,
  article_img_url,
  created_at,
}) => {
  return (
    <div className="articles-card">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      {isSingleArticle && (
        <>
          <p>Votes: {votes}</p>
          <img
            src={article_img_url}
            alt="article image"
            className="article_image"
          />
          <p>Created At: {created_at}</p>
        </>
      )}
    </div>
  );
};

export default ArticlesCard;
