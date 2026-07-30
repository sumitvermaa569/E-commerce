import "./Footer.css";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Footer({ setShowCart }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company */}
        <div className="footer-column">
          <h2>Pakhetra's Mart</h2>

          <p>Your one-stop shop for stationery, food, drinks and ice creams.</p>

          <p>
            <i className="bi bi-geo-alt-fill"></i>
            Manwal, Udhampur, Jammu & Kashmir , 180017{" "}
          </p>

          <p>
            <i className="bi bi-telephone-fill"></i>
            +91 8492061003
          </p>

          <p>
            <i className="bi bi-envelope-fill"></i>
            sumitvermaa569@gmail.comn{" "}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowCart(true)}>Cart</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li>Fresh Grocery</li>
            <li>Stationery</li>
            <li>Ice Creams</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 Pakhetra Mart | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
