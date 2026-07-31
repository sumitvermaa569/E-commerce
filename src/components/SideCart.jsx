import React from "react";
import "./SideCart.css";

function SideCart({
  cart,
  showCart,
  setShowCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
  clearCart,
}) {
  if (!showCart) return null;

  return (
    <div className="cart-sidebar">
      {/* Close Button */}
      <button
        className="cross-button"
        onClick={() => setShowCart(false)}
      >
        ✕
      </button>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>

          <button
            className="browse-btn"
            onClick={() => setShowCart(false)}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                {/* Product Details */}
                <div className="item-details">
                  <h3>{item.name}</h3>

                  <p>Price: ₹{item.price}</p>

                  <div className="quantity-box">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>

                  <p className="subtotal">
                    Subtotal: ₹{item.price * item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="cart-footer">
            <h2>Total: ₹{totalPrice}</h2>

            <button className="checkout-btn">
              Checkout
            </button>

            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SideCart;