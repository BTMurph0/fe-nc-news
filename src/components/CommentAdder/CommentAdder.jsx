import "./CommentAdder.css";
import { useState, useContext } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

const CommentAdder = ({ setComments, setCommentCount }) => {
  const { login } = useContext(LoginContext);
  const [commentText, setCommentText] = useState("");
  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCommentObj = {
      body: commentText,
      author: login.username,
    };
    postComment(article_id, newCommentObj).then((response) => {
      setComments((currComments) => [response, ...currComments]);
      setCommentText("");
      setCommentCount((currCommentCount) => Number(currCommentCount) + 1);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        type="text-area"
        placeholder="Add a comment..."
        name=""
        id=""
        onChange={(event) => {
          setCommentText(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentAdder;
