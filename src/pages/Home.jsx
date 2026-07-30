import CategoryNavbar from "../components/CategoryNavbar";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SideCart from "../components/SideCart";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home({
  cart,
  setShowCart,
  searchTerm,
  setSearchTerm,
  searchInput,
  setSearchInput,
  selectedCategory,
  setSelectedCategory,
  filteredProducts,
  addToCart,
  showCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
  clearCart,
}) {
  return (
    <>
      <Navbar
  setShowCart={setShowCart}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  searchInput={searchInput}
  setSearchInput={setSearchInput}
  cart={cart}
/>

      {!searchTerm && <Hero />}

      {!searchTerm && (
        <CategoryNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {!searchTerm && (
        <h1 className="Heading">
          {selectedCategory === "all" && "All Products"}
          {selectedCategory === "stationery" && "📚 Stationery"}
          {selectedCategory === "food & drinks" && "🥤 Food & Drinks"}
          {selectedCategory === "icecream" && "🍦 Ice Cream"}
        </h1>
      )}
      <div id="products" className="products">
        {" "}
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

      {!searchTerm && <Footer setShowCart={setShowCart} />}
    </>
  );
}

export default Home;
