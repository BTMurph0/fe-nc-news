import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { availableArticles, getTopics } from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import TopicCard from "../Topics/TopicCard";
import Sort from "../Sorting/Sorting";
import Loading from "../Loading/Loading";
import "./Articles.css";

const Articles = () => {
  const [topicOptions, setTopicOptions] = useState([]);
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    availableArticles(topic, sort, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, sort, order]);

  useEffect(() => {
    getTopics().then((availableTopicOptions) => {
      setTopicOptions(availableTopicOptions);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <article className="articles">
        <ul className="topics">
          {topicOptions.map((topicOption, i) => {
            return (
              <article topicOption={topicOption} key={i}>
                <TopicCard topicOption={topicOption} key={i} />
              </article>
            );
          })}
        </ul>
        <div>
          <Sort
            sort={sort}
            order={order}
            setSort={setSort}
            setOrder={setOrder}
          />
        </div>
        <div className="articlesList">
          <ul>
            {articles.map((article, i) => {
              return <ArticleCard article={article} key={i} />;
            })}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Articles;
