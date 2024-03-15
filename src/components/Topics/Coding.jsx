import React, { useEffect, useState } from "react";
import { availableArticles } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import TopicFilter from "./TopicFilter";


const Coding = () => {
  const [codingArticles, setCodingArticles] = useState([]);
  

  useEffect(() => {
    availableArticles('coding').then((codingArticlesFromApi) => {
      
      setCodingArticles(codingArticlesFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Coding</h2>
      <ul>
        <TopicFilter/>
        {codingArticles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Coding;
