import React from "react";
import "./Navbar.css";
import logo2 from "../assets/logo2.png";

function Navbar({ setShowCart }) {
  return (
    <nav className="navbar">
      {/* Left section */}
      <div className="logo-section">
        <img src={logo2} alt="logo" className="logo" />
        <h2>Pakhetra's Mart</h2>
      </div>

      {/* Middle section */}
      <div className="search-section">
        <input type="text" placeholder="Search Products" />

        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* Right section */}
      <div className="cart-section" >
        <button
  onClick={() => {
    console.log("Cart clicked");
    setShowCart(true);
  }}
>
          {" "}
          <i className="bi bi-cart3"></i>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
