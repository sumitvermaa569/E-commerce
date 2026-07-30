import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/Hero-img.png";

function Hero() {
  return (
    <section className="hero">
      {/* Left Side */}
      <div className="hero-left">
        <span className="hero-badge">
          Welcome to Pakhetra's Mart
        </span>

        <h1>
          Everything You Need,
          <br />
          <span>All in One Place</span>
        </h1>

        <p>
          Your one-stop shop for stationery, food, drinks and ice creams.
          Quality products at affordable prices.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <button
            className="shop-btn"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <i className="bi bi-bag"></i>
            Shop Now
          </button>

          <Link to="/contact" className="contact-btn">
            <i className="bi bi-telephone"></i>
            Contact Us
          </Link>

        </div>

        {/* Features */}
        <div className="hero-features">

          <div>
            <i className="bi bi-truck"></i>
            <span>Fast Delivery</span>
          </div>

          <div>
            <i className="bi bi-shield-check"></i>
            <span>Secure Payment</span>
          </div>

          <div>
            <i className="bi bi-award"></i>
            <span>Best Quality</span>
          </div>

          <div>
            <i className="bi bi-headset"></i>
            <span>24/7 Support</span>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src={heroImage} alt="Pakhetra Mart Hero" />
      </div>
    </section>
  );
}

export default Hero;