import React from "react";
import "./Navbar.css";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

function Navbar({
  setShowCart,
  searchTerm,
  setSearchTerm,
  searchInput,
  setSearchInput,
  cart,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleSearch = () => {
    if (!searchInput.trim()) return;

    setSearchTerm(searchInput.trim());
setSearchInput(searchInput.trim());
    setShowSuggestions(false);

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const suggestions = products
    .filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    .slice(0, 5);
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
            placeholder="Search products..."
            value={searchInput}
           onChange={(e) => {
  setSearchInput(e.target.value);
  setShowSuggestions(true);
}}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
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

          {showSuggestions && searchInput && suggestions.length > 0 && (
            <div className="search-dropdown">
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  className="suggestion"
                  onClick={() => {
                    setSearchInput(item.name);
                    setSearchTerm(item.name);
                    setShowSuggestions(false);

                    document.getElementById("products")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="search-btn" onClick={handleSearch}>
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* Right section */}
      <div className="right-section">
        <button
          className="cart-btn"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <i className="bi bi-cart3"></i>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        <Link to="/login" className="login-btn">
          <i className="bi bi-person-circle"></i>
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
