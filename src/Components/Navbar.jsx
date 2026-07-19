import React from "react";
import "./Navbar.css";
import logo2 from "../assets/logo2.png";

function Navbar({
  setShowCart,
  searchTerm,
  setSearchTerm,
  searchInput,
  setSearchInput,
}) {
  return (
    <nav className="navbar">
      {/* Left section */}
      <div className="logo-section">
        <img src={logo2} alt="logo" className="logo" />
        <h2>Pakhetra's Mart</h2>
      </div>

      {/* Middle section */}
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Products"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          {searchInput && (
            <span
              className="clear-icon"
              onClick={() => {
                setSearchInput("");
                setSearchTerm("");
              }}
            >
              ✕
            </span>
          )}
        </div>

        <button
          className="search-btn"
          onClick={() => setSearchTerm(searchInput)}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* Right section */}
      <div className="cart-section">
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
