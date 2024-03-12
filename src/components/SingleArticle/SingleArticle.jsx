import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../api";
import { Link } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";
import CommentList from "../CommentList/CommentList";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((articleData) => {
      setArticle(articleData);
    });
  }, [article_id]);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Created: {article.created_at}</p>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <Link to={`/articles/${article_id}/comments`}>Comments: {article.comment_count}
      </Link>
      <CommentList/>
    </div>
  );
};

export default SingleArticle;
