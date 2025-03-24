import React from "react";
import "../css/Footer.css";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <h3>The Best E-Commerce</h3>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/huseyineskan/">
          <FiLinkedin className="icon" />
        </a>
        <a href="https://x.com/huseyineskan">
          <FaXTwitter className="icon" />
        </a>
        <a href="https://www.facebook.com/huseyineskan">
          <FiFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/heskancom">
          <FiInstagram className="icon" />
        </a>
        <a href="#">
          <FaTiktok className="icon" />
        </a>
      </div>
      <p className="copyright">© 2025 - All rights reserved</p>
    </footer>
  );
}

export default Footer;
