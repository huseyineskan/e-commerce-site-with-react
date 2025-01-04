import React from "react";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";

import { CiLight } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  const [theme, setTheme] = React.useState("light");

  const changeTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  return (
    <div className="header">
      <div className="header-top">
        <a href="/" className="logo">
          <img src="./src/images/logo.png" alt="Logo" />
          <div className="logo-text">
            <p>E-Commerce</p>
            <span>Super Prices</span>
          </div>
        </a>
        <div className="search flex-row">
          <input type="text" placeholder="Search" />

          {theme === "light" ? (
            <CiCloudMoon
              className="icon"
              onClick={() => {
                changeTheme();
                setTheme("dark");
              }}
            />
          ) : (
            <CiLight
              className="icon"
              onClick={() => {
                changeTheme();
                setTheme("light");
              }}
            />
          )}

          <SlBasket className="icon" />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
