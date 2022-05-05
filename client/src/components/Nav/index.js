import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
         
          <li className="mx-1 pt-6 pl-3">
            <Link to="/stats">
              Stats
            </Link>
          </li>
          <li className="mx-1 pt-6 pl-3">
            <Link to="/news">
              News Today
            </Link>
          </li>
          <li className="mx-1 pt-6 pl-3">
            <Link to="/merch">
              Merch
            </Link>
          </li>
          <li className="mx-1 pt-6">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 pt-6 pl-3">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 pt-6">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 bg-green-900">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">💰</span>
          Food Wallet
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
