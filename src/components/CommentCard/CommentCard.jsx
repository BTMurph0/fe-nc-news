import "./CommentCard.css";
import { LoginContext } from "../../contexts/LoginContext";
import { useContext } from "react";
import CommentDelete from "../CommentDelete/CommentDelete";



const CommentCard = ({ comment, setComments }) => {



  const {login} = useContext(LoginContext)
  return (
    <div className="commentCard">
      <p>Comment: {comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>Created: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      {login.username === comment.author ? (<CommentDelete comment={comment} setComments={setComments} />) : <p></p> }
      
    </div>
  );
};

export default CommentCard;
