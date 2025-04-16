import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="container">
      <div className="image"></div>
      <img src="../../logo192.png" alt="logo" />
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
