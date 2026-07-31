import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const phoneNumber = "8492061003"; // Replace with your WhatsApp number

  return (
    <div className="contact-page">

      {/* Back to Home Button */}
      <Link to="/" className="home-btn">
        <i className="bi bi-arrow-left"></i>
        Back to Home
      </Link>

      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out anytime through phone,
          email or WhatsApp.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <div className="info-card">
            <i className="bi bi-telephone-fill"></i>
            <div>
              <h3>Phone</h3>
<a href="tel:+918492061003">+91 8492061003</a>            </div>
          </div>

          <div className="info-card">
            <i className="bi bi-envelope-fill"></i>
            <div>
              <h3>Email</h3>
<a href="mailto:pakhetramart@gmail.com">
  sumitvermaa569@gmail.com
</a>            </div>
          </div>

          <div className="info-card">
            <i className="bi bi-geo-alt-fill"></i>
            <div>
              <h3>Address</h3>
              <p>Manwal, Udhampur, Jammu & Kashmir, India</p>
            </div>
          </div>

        </div>

        {/* WhatsApp Section */}
        <div className="contact-box">

          <h2>Chat With Us</h2>

          <p>
            Have questions about our products or want to place an order?
            Click the button below to chat with us instantly on WhatsApp.
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=Hello%20Pakhetra%20Mart,%20I%20would%20like%20to%20know%20more%20about%20your%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="bi bi-whatsapp"></i>
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
}

export default Contact;