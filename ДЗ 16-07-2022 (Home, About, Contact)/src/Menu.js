import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/about" className="menu-item">
        About
      </Link>
      <Link to="/contact" className="menu-item">
        Contact
      </Link>
    </div>
  );
}
