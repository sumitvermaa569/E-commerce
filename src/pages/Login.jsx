import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, serShowPassword] = useState(false);
  return (
    <div className="login-container">
      <Link to="/" className="back-home">
        ← Back to Home
      </Link>

      <div className="login-card">
        <h1>Welcome👋</h1>
        <p>Login to continue shopping at pakhetra mart</p>

        <form>
          <div className="input-group">
            <i className="bi bi-person" />
            <input type="text" placeholder="Email or Phone Number"></input>
          </div>

          <div className="input-group">
            <i className="bi bi-lock" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <i
              className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <div className="divider">OR</div>
        <button className="google-btn">
          <i className="bi bi-google"></i>
          Continue with Google
        </button>

        <p className="register-text">
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
