import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/ptg.jpg" alt="Logo" />
        <span className="brand">Femicare</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Trackers</li>
        <li>Blogs</li>
        <li>Donate</li>
        <li>Contact</li>
      </ul>
      <div className="nav-auth">
        <a href="#">Log in</a>
        <a href="#" className="signup">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
