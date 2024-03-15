import "./App.css";
import Articles from "./components/Articles/Articles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import { LoginContext } from "./contexts/LoginContext";
import { useState } from "react";
import Coding from "./components/Topics/Coding";
import Cooking from "./components/Topics/Cooking";
import Football from "./components/Topics/Football";


function App() {

const [login, setLogin] = useState({
  username: "grumpy19",
  avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
})


  return (
    <div className="App">
      <LoginContext.Provider value={{login, setLogin}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/topics/coding" element={<Coding />} />
        <Route path="/articles/topics/cooking" element={<Cooking />} />
        <Route path="/articles/topics/football" element={<Football />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
