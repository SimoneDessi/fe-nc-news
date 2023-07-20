import React, { useState, useEffect } from "react";
import { getSingleArticle } from "../Api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import VoteOnArticle from "../components/VoteOnArticle";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id).then((articleDataFromApi) => {
      setArticle(articleDataFromApi);
    });
  }, [article_id]);

  if (!article) {
    return <div>Loading page...</div>;
  }

  const { title, author, topic, body, article_img_url, created_at } = article;
  const formattedDate = new Date(created_at).toLocaleString();
  return (
    <>
      <h1 className="article_header">{title}</h1>
      <img
        src={article_img_url}
        alt="article image"
        className="article_image"
      />
      <div className="article-body">{body}</div>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>

      <VoteOnArticle article_id={article_id} initialVotes={article.votes} />
      <p>Posted on: {formattedDate}</p>
      <CommentsList article_id={article_id} />
    </>
  );
};

export default SingleArticle;
