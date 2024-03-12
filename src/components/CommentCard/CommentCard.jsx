import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="commentCard">
      <p>Comment: {comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>Created: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
