import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";
import { Link } from "react-router-dom";
import Basket from "./Basket";

function Header() {
  const [theme, setTheme] = React.useState("light");

  const changeTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  // CART
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [isAnimating, setIsAnimating] = useState(false);

  // Sepet değiştiğinde animasyonu tetikle
  useEffect(() => {
    if (cart.totalQuantity > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500); // Animasyon süresi
      return () => clearTimeout(timer);
    }
  }, [cart.totalQuantity]);

  return (
    <div className="header">
      <div className="header-top">
        <a href="/" className="logo">
          <img src="../src/images/logo.png" alt="Logo" />
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

          <div id="cart">
            <SlBasket className="icon" />
            <span
              className={`cart-total-quantity ${isAnimating ? "animate" : ""}`}
            >
              {cart.totalQuantity}
            </span>
            <Basket />
          </div>
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
