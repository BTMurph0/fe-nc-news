import { deleteComment } from "../../api";
import "./CommentDelete.css"

const CommentDelete = ({ comment, setComments }) => {


  const handleSubmit = (event) => {
    event.preventDefault();

    deleteComment(comment.comment_id)
    
    setComments((currComment) => currComment.filter((e)=> {
      return e.comment_id != comment.comment_id
    }))

  };
  return (
    <form id="deleteComment" onSubmit={handleSubmit}>
      <button>Delete</button>
    </form>
  );
};

export default CommentDelete;
