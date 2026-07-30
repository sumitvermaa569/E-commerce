import "./CategoryNavbar.css";

function CategoryNavbar({ selectedCategory, setSelectedCategory }) {
  return (
    <section className="category-section">

      <h2 className="category-heading">
        Shop by Category
      </h2>

      <div className="category-container">

        <button
          className={`category-card ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          <span><i className="bi-grid-fill"></i></span>
          <p>All Products</p>
        </button>

        <button
          className={`category-card ${
            selectedCategory === "stationery" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("stationery")}
        >
          <span><i className="bi-journal-bookmark-fill"></i></span>
          <p>Stationery</p>
        </button>

        <button
          className={`category-card ${
            selectedCategory === "food & drinks" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("food & drinks")}
        >
          <span><i className="bi-cup-straw"></i></span>
          <p>Food & Drinks</p>
        </button>

        <button
          className={`category-card ${
            selectedCategory === "icecream" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("icecream")}
        >
          <span><i className="bi-snow"></i></span>
          <p>Ice Cream</p>
        </button>

      </div>

    </section>
  );
}

export default CategoryNavbar;