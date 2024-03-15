import { Link } from "react-router-dom";
import React from "react";

function TopicFilter() {
  return (
    <header>
      <ul>
        <Link to="/articles/topics/coding">Coding</Link>
        <Link to="/articles/topics/cooking">Cooking</Link>
        <Link to="/articles/topics/football">Football</Link>
        
      </ul>
    </header>
  );
}

export default TopicFilter;