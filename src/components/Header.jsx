import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { CiLight, CiCloudMoon, CiMenuFries } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Basket from "./Basket";

function Header() {
  const [theme, setTheme] = React.useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState("");
  const navigate = useNavigate();

  const changeTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  function mobileMenu() {
    if (mobileMenuOpen == "active") {
      setMobileMenuOpen("");
    } else {
      setMobileMenuOpen("active");
    }
  }

  // CART
  const cart = useSelector((state) => state.cart);
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
        <Link to="/" className="logo">
          <img src="../src/images/logo.png" alt="Logo" />
          <div className="logo-text">
            <p>E-Commerce</p>
            <span>Super Prices</span>
          </div>
        </Link>
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
        <div className="mobile-icons" onClick={() => mobileMenu()}>
          <CiMenuFries />
        </div>
        <ul id="primary-menu" className={mobileMenuOpen}>
          <li>
            <Link to="/" onClick={() => mobileMenu()}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => mobileMenu()}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => mobileMenu()}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => mobileMenu()}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
