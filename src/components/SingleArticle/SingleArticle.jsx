import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, upVoteArticle } from "../../api";
import CommentList from "../CommentList/CommentList";
import ErrorArticle from "../ErrorPages/ErrorArticle";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleData) => {
        setVotes(articleData.votes);
        setArticle(articleData);
      })
      .catch((err) => {
        console.log(err)
        setError({err});
      });
  }, [article_id]);

  const upVote = (event) => {
    event.preventDefault();
    const voteObj = {
      inc_votes: 1,
    };
    setVotes((currVotes) => currVotes + 1);
    upVoteArticle(article_id, voteObj).then((response) => {
      return response;
    });
  };

  if (error) {
    console.log(error)
    return <ErrorArticle error={error} />;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Created: {article.created_at}</p>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
      <p>
        Votes: {votes}
        <button onClick={upVote}>Vote</button>
      </p>

      <p>Comments: {article.comment_count}</p>

      <CommentList />
    </div>
  );
};

export default SingleArticle;
