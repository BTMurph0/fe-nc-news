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

const upVoteArticle = (article_id, vote) => {
  return ncNewsAPI
    .patch(`articles/${article_id}`, vote)
    .then((response) => response.data.article)
    .catch((error) => {
      console.dir(error);
    });
};

const postComment = (article_id, comment) => {
  return ncNewsAPI
    .post(`articles/${article_id}/comments`, comment)
    .then((response) => response.data.comment)
    .catch((error) => {
      console.dir(error);
    });
};

export {
  availableArticles,
  getSingleArticle,
  getArticleComments,
  upVoteArticle,
  postComment,
};
