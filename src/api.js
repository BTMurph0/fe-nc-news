import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://barry-nc-news.onrender.com/api/",
});

const availableArticles = () => {
  return ncNewsAPI.get("articles").then((response) => response.data.articles);
};

const getSingleArticle = (article_id) => {
  return ncNewsAPI
    .get(`articles/${article_id}`)
    .then((response) => response.data.article);
};

const getArticleComments = (article_id) => {
  return ncNewsAPI
    .get(`articles/${article_id}/comments`)
    .then((response) => response.data.comments);
};

export { availableArticles, getSingleArticle, getArticleComments };
