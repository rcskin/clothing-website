import React from "react";
//import link from React
import { Link } from "react-router-dom";

function Navigation() {
  return (
    //create navigation html element with React Links
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/calculator">Interest Calculator</Link>
        </li>
        <li>
          <Link to="/legal">Legal Stuff</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

//I used Prettier to format this document
