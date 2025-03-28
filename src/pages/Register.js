// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Register.css";

// const Register = () => {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     email: "",
//     phoneNumber: "",
//     username: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const response = await axios.post("http://localhost:8081/api/users/register", user);
//       if (response.status === 201) {
//         setSuccess("Registered Successfully!");
//         setTimeout(() => navigate("/login"), 2000);
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>User Registration</h2>
//       <form onSubmit={handleRegister}>
//         <div className="input-group">
//           <label>First Name</label>
//           <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Middle Name</label>
//           <input type="text" name="middleName" value={user.middleName} onChange={handleChange} />
//         </div>

//         <div className="input-group">
//           <label>Last Name (Optional)</label>
//           <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
//         </div>

//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" name="email" value={user.email} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Phone Number</label>
//           <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Username</label>
//           <input type="text" name="username" value={user.username} onChange={handleChange} required />
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" name="password" value={user.password} onChange={handleChange} required />
//         </div>

//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Fix: Define handleChange function
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8081/api/users/register", user);
      if (response.status === 201) {
        setSuccess("Registered Successfully! Redirecting to login...");
        setTimeout(() => navigate("/userlogin"), 2000); // Redirect to User Login Page
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Middle Name</label>
          <input type="text" name="middleName" value={user.middleName} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Last Name (Optional)</label>
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

