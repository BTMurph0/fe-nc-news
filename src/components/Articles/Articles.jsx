import { useState, useEffect } from "react";
import { availableArticles } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import TopicFilter from "../Topics/TopicFilter";
import Sort from "../Sorting/Sorting";
import Loading from "../Loading/Loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    availableArticles(topic, sort, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, sort, order]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <TopicFilter topic={topic} setTopic={setTopic} />
      <Sort sort={sort} order={order} setSort={setSort} setOrder={setOrder} />
      <ul>
        {articles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Articles;
