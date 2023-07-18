import { useState, useEffect } from "react";
import ArticlesCard from "../components/ArticlesCard"
import { getAllArticles } from "../Api";
import Newspaper from "../images/Newspaper.jpeg"

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);
return(<>
  <h1 className="article_header">All articles</h1>
  <img src={Newspaper} alt="newspaper image" className="article_image"/>
<div className="articles-container">
  <ol className="article_list">
        {articles.map(
          ({
            article_id,
            author,
            title,
            topic,
          
          }) => {
            return (
              <ArticlesCard
                key={article_id}
                title={title}
                author={author}
                topic={topic}
              />
            );
          }
        )}
      </ol>
      </div>
      </>
)

}

export default Articles