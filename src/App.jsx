import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import CategoryNavbar from "./Components/CategoryNavbar";
import ProductCard from "./Components/ProductCard";
import product from "./Data/product";
import SideCart from "./Components/SideCart";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
const [searchInput, setSearchInput] = useState("");

  const addToCart = (product) => {
    console.log("Added:", product);

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

 const filteredProducts = product.filter((item) => {
  const matchesCategory =
    selectedCategory === "all" ||
    item.category === selectedCategory;

  const search = searchTerm.toLowerCase();

const matchesSearch =
  item.name.toLowerCase().includes(search) ||
  item.category.toLowerCase().includes(search) ||
  item.description.toLowerCase().includes(search);

  return matchesCategory && matchesSearch;
});

  return (
    <>
      <Navbar
        setShowCart={setShowCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}   
         searchInput={searchInput}
  setSearchInput={setSearchInput}
      />

      <CategoryNavbar setSelectedCategory={setSelectedCategory} />

      <h1 className="Heading">All Products</h1>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <h2>No Product Found</h2>
        )}
      </div>

      <SideCart
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
        totalPrice={totalPrice}
        clearCart={clearCart}
      />
    </>
  );
}

export default App;
