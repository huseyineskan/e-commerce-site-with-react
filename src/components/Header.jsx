import React from "react";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";

import { CiLight } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

function Header() {
  const [theme, setTheme] = React.useState("dark");

  const changeTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        <img src="./src/images/logo.png" alt="" srcset="" />
        <div className="logo-text">
          <p>E-Commerce</p>
          <span>Super Prices</span>
        </div>
      </a>
      <div className="search flex-row">
        <input type="text" placeholder="Search" />

        {theme === "dark" ? (
          <CiCloudMoon
            className="icon"
            onClick={() => {
              changeTheme();
              setTheme("light");
            }}
          />
        ) : (
          <CiLight
            className="icon"
            onClick={() => {
              changeTheme();
              setTheme("dark");
            }}
          />
        )}

        <SlBasket className="icon" />
      </div>
    </div>
  );
}

export default Header;
