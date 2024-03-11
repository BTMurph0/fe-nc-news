import "./ArticleCard.css";
const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <img src={article.article_img_url} alt="" />
      <p>{article.comment_count}</p>
    </div>
  );
};

export default ArticleCard;
