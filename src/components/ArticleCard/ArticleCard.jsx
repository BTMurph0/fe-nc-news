import "./ArticleCard.css";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const ArticleCard = ({ article }) => {
  const timeAgo = formatDistanceToNow(new Date(article.created_at), {
    addSuffix: true,
  });
  return (
    <Link className="articleLink" to={`/articles/${article.article_id}`}>
      <article id="articleCard">
        <h3 className="articleTitle">{article.title}</h3>
        <article className="authorTimeAgo">
        <p className="author"><strong>Author:</strong> {article.author}</p><p className="timeAgo">{timeAgo}</p>
        </article>
        <p>
          <strong>Topic:</strong> {article.topic}
        </p>
        <img
          id="articleImage"
          src={article.article_img_url}
          alt={article.article_img_url}
        />
        <article className="votesComments">
        <p className="votes">
          <strong>Votes:</strong> {article.votes}
        </p>
        <p className="comments">
          <strong>Comments:</strong> {article.comment_count}
        </p>
        </article>
      </article>
    </Link>
  );
};

export default ArticleCard;
