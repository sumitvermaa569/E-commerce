import React from "react";
import "./CategoryNavbar.css";

function CategoryNavbar({ setSelectedCategory }) {
  return (
    <div className="category-navbar">
      <button onClick={() => setSelectedCategory("all")}>All Products</button>
      <button onClick={() => setSelectedCategory("stationery")}>
        Stationery items
      </button>
      <button onClick={() => setSelectedCategory("food-drinks")}>
        Food & Drinks
      </button>
      <button onClick={() => setSelectedCategory("icecream")}>
        Ice Creams
      </button>
    </div>
  );
}
export default CategoryNavbar;
