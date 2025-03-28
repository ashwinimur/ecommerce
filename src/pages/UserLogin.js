import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("login"); // "login" or "otp"
  const navigate = useNavigate();

  // Handle email & password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8081/api/users/request-otp", { email, password });

      if (response.status === 200) {
        alert("OTP sent to your email!");
        setStep("otp"); // Move to OTP verification step
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8081/api/users/login-otp", { email, otp });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        navigate("/dashboard"); // Redirect after successful login
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>{step === "login" ? "Login" : "Enter OTP"}</h2>
      
      {step === "login" ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <p>OTP sent to {email}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default UserLogin;
