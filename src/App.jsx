import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import SingleArticle from "./components/SingleArticle";
import Login from "./pages/Login";
import Topics from "./pages/Topics";
import CommentsList from "./components/CommentsList";

function App() {
  return (
    <>
      <div>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/api/articles/:article_id/comments"
            element={<CommentsList />}
          />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
