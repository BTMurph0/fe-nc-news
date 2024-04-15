import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, upVoteArticle } from "../../api";
import CommentList from "../CommentList/CommentList";
import ErrorArticle from "../ErrorPages/ErrorArticle";
import { LoginContext } from "../../contexts/LoginContext";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { login } = useContext(LoginContext);
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleData) => {
        setVotes(articleData.votes);
        setCommentCount(articleData.comment_count);
        setArticle(articleData);
      })
      .catch((err) => {
        console.log(err);
        setError({ err });
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
    console.log(error);
    return <ErrorArticle error={error} />;
  }

  return (
    <article className="articlePage">
      <header>
      <p><strong>Topic:</strong> {article.topic}</p>
        <h2 className="articlePageTitle">{article.title}</h2>
      </header>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Created:</strong> {article.created_at}</p>
      <img src={article.article_img_url} alt={article.article_img_url} />
      <p>{article.body}</p>
      <p>
        <strong>Votes:</strong> {votes}
        {login.username != "guest" && <button onClick={upVote}>Vote</button>}
      </p>

      <p><strong>Comments:</strong> {commentCount}</p>

      <CommentList setCommentCount={setCommentCount} />
    </article>
  );
};

export default SingleArticle;
