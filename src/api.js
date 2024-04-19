import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://barry-nc-news.onrender.com/api/",
});

const availableArticles = (topic, sort_by, order) => {
  {
    return ncNewsAPI
      .get("articles", { params: { topic, sort_by, order } })
      .then((response) => {
        return response.data.articles;
      });
  }
};

const getSingleArticle = (article_id) => {
  return ncNewsAPI
    .get(`articles/${article_id}`)
    .then((response) => response.data.article)
    .catch((error) => error.response.data);
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

const deleteComment = (comment_id) => {
  return ncNewsAPI
    .delete(`/comments/${comment_id}`)
    .then((response) => {
      response.status;
    })
    .catch((error) => {
      console.dir(error);
    });
};

const getUsers = () => {
  return ncNewsAPI.get("users").then((response) => response.data.users);
};

const getTopics = () => {
  return ncNewsAPI.get("topics").then((response) => response.data.topics);
};

export {
  availableArticles,
  getSingleArticle,
  getArticleComments,
  upVoteArticle,
  postComment,
  deleteComment,
  getUsers,
  getTopics,
};
