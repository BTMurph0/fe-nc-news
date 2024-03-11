import { useState, useEffect } from "react";
import {availableArticles} from '../../api'
import ArticleCard from "../ArticleCard/ArticleCard";

const Articles = () => {
const [articles, setArticles] = useState([])

useEffect(() => {
    availableArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi)
    })
})

  return (
    <ul>
      {articles.map((article, i) => {
        return <ArticleCard article={article} key={i} />;
      })}
    </ul>
  );
};

export default Articles;
