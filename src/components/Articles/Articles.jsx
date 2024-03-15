import { useState, useEffect } from "react";
import { availableArticles } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import TopicFilter from "../Topics/TopicFilter";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    availableArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>
      <TopicFilter />
      <ul>
        {articles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Articles;
