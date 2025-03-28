import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      // Clear any old token before making a login request
      localStorage.removeItem("token");
  
      const response = await axios.post("http://localhost:8081/api/admin/login", {
        email,
        password,
      });
  
      console.log("Full API Response:", response);
      console.log("Response Data:", response.data);
  
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Token stored:", response.data.token);
        navigate("/dashboard");
      } else {
        console.error("No token received from API");
        setError("Authentication failed. No token received.");
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error);
      setError("Invalid email or password. Please try again.");
    }
  };
  

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
