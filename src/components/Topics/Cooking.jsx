import React, { useEffect, useState } from "react";
import { availableArticles } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import TopicFilter from "./TopicFilter";


const Cooking = () => {
  const [cookingArticles, setCookingArticles] = useState([]);
  

  useEffect(() => {
    availableArticles('cooking').then((cookingArticlesFromApi) => {
      
      setCookingArticles(cookingArticlesFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Cooking</h2>
      <ul>
        <TopicFilter/>
        {cookingArticles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Cooking;
