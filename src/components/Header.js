import { Link } from "react-router-dom";

import logo from "../logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button>Login</button>
        </ul>
      </div>
    </div>
  );
};
