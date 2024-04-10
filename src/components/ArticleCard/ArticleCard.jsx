import "./ArticleCard.css";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const ArticleCard = ({ article }) => {
  const timeAgo = formatDistanceToNow(new Date(article.created_at), {
    addSuffix: true,
  });
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div id="articleCard">
        <h3>{article.title}</h3>
        <p>
          <strong>Topic:</strong> {article.topic}
        </p>
        <p>
          <strong>Author:</strong> {article.author}
        </p>
        <img id="articleImage" src={article.article_img_url} alt="" />
        <p>
          <strong>Votes:</strong> {article.votes}
        </p>
        <p>
          <strong>Comments:</strong> {article.comment_count}
        </p>
        <p>{timeAgo}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
