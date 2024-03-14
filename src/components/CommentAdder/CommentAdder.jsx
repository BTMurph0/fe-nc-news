import "./CommentAdder.css";
import { useState } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";


const CommentAdder = ({setComments}) => {
  const [commentText, setCommentText] = useState("");
  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCommentObj = {
      body: commentText,
      author: "grumpy19",
    };
    postComment(article_id, newCommentObj).then((response) => {
      setComments((currComments) => [response, ...currComments])
      
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
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
