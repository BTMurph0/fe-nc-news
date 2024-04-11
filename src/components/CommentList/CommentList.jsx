import { useState, useEffect, useContext } from "react";
import { getArticleComments } from "../../api";
import CommentCard from "../CommentCard/CommentCard";
import CommentAdder from "../CommentAdder/CommentAdder";
import { LoginContext } from "../../contexts/LoginContext";

import { useParams } from "react-router-dom";

const CommentList = ({setCommentCount}) => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    getArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div>
      {login.username != "guest" && <CommentAdder setComments={setComments} setCommentCount={setCommentCount}/>}
      <ul>
        {comments.map((comment, i) => {
          return (
            <CommentCard comment={comment} key={i} setComments={setComments} />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
