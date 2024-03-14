import { deleteComment } from "../../api";

const CommentDelete = ({ comment, setComments }) => {


  const handleSubmit = (event) => {
    event.preventDefault();

    deleteComment(comment.comment_id)
    
    setComments((currComment) => currComment.filter((e)=> {
      return e.comment_id != comment.comment_id
    }))

  };
  return (
    <form onSubmit={handleSubmit}>
      <button>Delete</button>
    </form>
  );
};

export default CommentDelete;
