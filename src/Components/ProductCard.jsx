import React from "react";
import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="card">
      <div className="card-top">
        <span className="category">{product.category}</span>

        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="card-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div className="card-bottom">
          <h3>₹{product.price}</h3>

          <button
            className="add-btn"
            onClick={() => {
              addToCart(product);
              setAdded(true);

              setTimeout(() => {
                setAdded(false);
              }, 2000);
            }}
          >
            {added ? "Added ✓" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
