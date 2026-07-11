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
})  {
        if (!showCart) return null;

  return (
    <div className="cart-sidebar">
      <button onClick={() => setShowCart(false)}>✕</button>

      {cart.length === 0 ? (
        // If Cart is empty
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <button>Browse Products</button>
        </div>
      ) : (
        // Id Cart has Products
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

<h2>Total: ₹{totalPrice}</h2>
  <button>Checkout</button>
        </div>
        
      )}
    </div>
  );
}
export default SideCart;
