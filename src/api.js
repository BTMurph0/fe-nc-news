import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://barry-nc-news.onrender.com/api/",
});

const availableArticles = () => {
  return ncNewsAPI.get("articles").then((response) => response.data.articles);
};

const getSingleArticle = (article_id) => {
  return ncNewsAPI.get(`articles/${article_id}`).then((response) => response.data.article);
};

export { availableArticles, getSingleArticle };
