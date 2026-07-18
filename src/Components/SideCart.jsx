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
}) {
  if (!showCart) return null;

  return (
    <div className="cart-sidebar">
      <button className="cross-button" onClick={() => setShowCart(false)}>
        ✕
      </button>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <button className="browse-btn" onClick={() => setShowCart(false)}>Browse Products</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="quantity-box">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

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

          <div className="cart-footer">
            <h2>Total: ₹{totalPrice}</h2>

            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
export default SideCart;
    