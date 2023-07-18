import  { Link }  from "react-router-dom"

const Navigator = () => {
  return (
  <nav className="nav">
  
  <Link to="/" className="nav-link"> Home </Link>
  <Link to="/articles" className="nav-link"> Articles </Link>
  <Link to="/login" className="nav-link"> Login </Link>
  <Link to="/topics" className="nav-link"> Topics </Link>


  </nav>
)}

export default Navigator;