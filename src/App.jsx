import Articles from "./components/Articles/Articles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Users from "./components/Users/Users";
import { LoginContext } from "./contexts/LoginContext";
import { useState } from "react";
import ErrorPageUrl from "./components/ErrorPages/ErrorPageUrl";

function App() {
  const [login, setLogin] = useState({
    username: "guest",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qW3eIHe8KgusWlt1zF8ceRZUyfph3LYTssjVgXF9bg&s",
  });

  return (
    <div className="App">
      <LoginContext.Provider value={{ login, setLogin }}>
        <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<ErrorPageUrl />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
