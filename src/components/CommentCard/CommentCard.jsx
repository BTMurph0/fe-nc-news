import "./CommentCard.css";
import { LoginContext } from "../../contexts/LoginContext";
import { useContext } from "react";
import CommentDelete from "../CommentDelete/CommentDelete";



const CommentCard = ({ comment, setComments }) => {



  const {login} = useContext(LoginContext)
  return (
    <article className="commentCard">
      
      <p id="commentBody">Comment: {comment.body}</p>
      <p id="commentAuthor">Author: {comment.author}</p>
      <p id="commentCreated" >Created: {comment.created_at}</p>
      <p id="commentVotes" >Votes: {comment.votes}</p>
      {login.username === comment.author ? (<CommentDelete comment={comment} setComments={setComments} />) : <p></p> }

    </article>
  );
};

export default CommentCard;
