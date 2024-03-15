import React, { useEffect, useState } from "react";
import { availableArticles } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import TopicFilter from "./TopicFilter";


const Football = () => {
  const [footballArticles, setFootballArticles] = useState([]);
  

  useEffect(() => {
    availableArticles('football').then((footballArticlesFromApi) => {
      
      setFootballArticles(footballArticlesFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Football</h2>
      <ul>
        <TopicFilter/>
        {footballArticles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Football;
