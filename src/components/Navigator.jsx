import  { Link }  from "react-router-dom"
import "./StyleComponents.css"

const Navigator = () => {
  return (
    <nav className="navigator-container">
    <ul className="nav-links">
      <li className="home-link">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  </nav>
);
};

export default Navigator;