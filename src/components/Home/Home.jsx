import { useState, useEffect } from "react";
import { availableArticles } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    availableArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>

      <ul>
        {articles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
