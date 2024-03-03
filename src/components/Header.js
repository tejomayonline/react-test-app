import { Link } from "react-router-dom";

import logo from "../logo.svg";
import useIsUserOnline from "../utils/useIsUserOnline";

export const Header = () => {
  const isUserOnline = useIsUserOnline();

  return (
    <div className="header flex flex-row justify-between border-l-zinc-900 border-solid border-b-2">
      <Link to="/">
        <img className="logo w-20" src={logo} alt="logo" />
      </Link>
      <ul className="nav-items flex flex-row items-center">
        <li className="p-4 ">
          <div> User is {isUserOnline ? "🟢" : "🔴"}</div>
        </li>
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4">Cart</li>
        <button className="button bg-sky-500 hover:bg-sky-700 px-4 py-2 m-4 font-white">
          Login
        </button>
      </ul>
    </div>
  );
};
