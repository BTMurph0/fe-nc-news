import "./App.css";
import Articles from "./components/Articles/Articles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import CommentList from "./components/CommentList/CommentList";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
