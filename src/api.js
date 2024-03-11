import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://barry-nc-news.onrender.com/api/",
});

const availableArticles = () => {
  return ncNewsAPI.get("articles").then((response) => response.data.articles);
};

export { availableArticles };
