import React, { useState, useEffect } from "react";
import { getSingleArticle } from "../Api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import AddCommentForm from "../components/AddComment";
import VoteOnArticle from "../components/VoteOnArticle";
import Loading from "../components/Loading";


const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id).then((articleDataFromApi) => {
      setArticle(articleDataFromApi);
      setLoading(false);
    });
  }, [article_id]);

  if (!article) {
    return <Loading />;
  }

  const { title, author, topic, body, article_img_url, created_at } = article;
  const formattedDate = new Date(created_at).toLocaleString();
  return (
    <div className="single-article-container">
      <div className="single-article-card">
        <h1 className="article-header">{title}</h1>
        <img
          src={article_img_url}
          alt="article image"
          className="article_image"
        />
        <div className="article-body">{body}</div>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <p className="single-article-date">Posted on: {formattedDate}</p>
      </div>

      <div className="form-vote-container">
        <VoteOnArticle article_id={article_id} initialVotes={article.votes} />
        <AddCommentForm article_id={article_id} />
      </div>

      <CommentsList article_id={article_id} />
    </div>
  );
};
{
  /* <h1 className="article_header">{title}</h1>
      <img
        src={article_img_url}
        alt="article image"
        className="article_image"
      />
      <div className="article-body">{body}</div>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p> */
}
export default SingleArticle;
