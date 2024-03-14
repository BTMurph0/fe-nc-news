import { useState, useEffect } from "react";
import { getArticleComments } from "../../api";
import CommentCard from "../CommentCard/CommentCard";
import CommentAdder from "../CommentAdder/CommentAdder";

import { useParams } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);

    });
  }, []);

  return (
    <div>
      <CommentAdder setComments={setComments}/>
      <ul>
        {comments.map((comment, i) => {
          return <CommentCard comment={comment} key={i} setComments={setComments}/>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;
