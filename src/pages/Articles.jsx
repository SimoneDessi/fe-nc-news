import { useState, useEffect } from "react";
import ArticlesCard from "../components/ArticlesCard";
import { getAllArticles } from "../Api";
import Newspaper from "../images/Newspaper.jpeg";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <h1 className="article_header">All articles available </h1>
      <img src={Newspaper} alt="newspaper image" className="article_image" />
      <div className="articles-container">
        {loading ? (
          <p> Page is loading...</p>
        ) : (
          <ol className="article_list">
            {articles.map(({ article_id, author, title, topic }) => {
              return (
                <Link to={`/articles/${article_id}`} key={article_id}>
                  <ArticlesCard
                    title={title}
                    author={author}
                    topic={topic}
                    isSingleArticle={false}
                  />
                </Link>
              );
            })}
          </ol>
        )}
      </div>
    </>
  );
};

export default Articles;
