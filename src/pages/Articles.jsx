import { useState, useEffect } from "react";
import ArticlesCard from "../components/ArticlesCard";
import { getAllArticles } from "../Api";
import news from "../images/news-gif.gif";
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
    <div className="gif-container">
        <img src={news} alt="simo's news logo gif" className="gif-articles" />
      </div>
     
      <div className="articles-container">
        {loading ? (
          <p> Page is loading...</p>
        ) : (
          <ol className="articles-list">
            {articles.map(({ article_id, author, title, topic, article_img_url }) => {
              return (
                <Link to={`/articles/${article_id}`} key={article_id} className="articles-link">
                  <ArticlesCard
                  image={article_img_url}
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
