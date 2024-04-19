import "./TopicCard.css"
import { Link } from "react-router-dom";

function TopicCard({ topicOption }) {
  return (
    <>
    <Link className="topicLink" to={`/articles/${topicOption.slug}`}>
      <article className="topicCard">
        <p className="topicName">{topicOption.slug}</p>
      </article>
    </Link>
    </>
  );
}

export default TopicCard;
