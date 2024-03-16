import "./ArticleCard.css";
import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <h3>
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </h3>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <img src={article.article_img_url} alt="" />
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleCard;
