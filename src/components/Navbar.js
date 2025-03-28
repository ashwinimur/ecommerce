// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import CSS for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Ecom Store</div>
//       <ul className="nav-links">
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li className="dropdown">
//           <span>Category ▼</span>
//           <ul className="dropdown-menu">
//             <li><Link to="/category/electronics">Electronics</Link></li>
//             <li><Link to="/category/clothing">Clothing</Link></li>
//             <li><Link to="/category/books">Books</Link></li>
//           </ul>
//         </li>
//         <li><Link to="/login">LOGIN</Link></li>
//         <li><Link to="/register">REGISTER</Link></li>
//         <li><Link to="/admin">ADMIN</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   console.log("Navbar loaded"); // ✅ Debugging check

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     console.log("Logging out..."); // Debugging log
//     localStorage.removeItem("token"); // ✅ Remove token
//     window.location.href = "/login"; // ✅ Redirect to login
//   };
  

//   return (
//     <nav className="navbar">
//       <div className="logo">Ecom Store</div>
//       <ul className="nav-links">
//         <li><Link to="/dashboard">HOME</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li><Link to="/categories">Categories</Link></li>

//         {!token ? (
//           <>
//             <li><Link to="/login">LOGIN</Link></li>
//             <li><Link to="/register">REGISTER</Link></li>
//           </>
//         ) : (
//           <>
//             <li><button className="logout-btn" onClick={handleLogout}>LOGOUT</button></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import CSS for styling

// const Navbar = () => {
//   console.log("Navbar loaded"); // ✅ Debugging check

//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     console.log("Logging out..."); // ✅ Debugging log
//     localStorage.removeItem("token"); // ✅ Remove token
//     window.location.href = "/login"; // ✅ Redirect to login
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Ecom Store</div>
//       <ul className="nav-links">
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/products">Products</Link></li>

//         {/* Dropdown for Categories */}
//         <li className="dropdown">
//           <span>Category ▼</span>
//           <ul className="dropdown-menu">
//             <li><Link to="/category/electronics">Electronics</Link></li>
//             <li><Link to="/category/clothing">Clothing</Link></li>
//             <li><Link to="/category/books">Books</Link></li>
//           </ul>
//         </li>

//         {!token ? (
//           <>
//             <li><Link to="/login">LOGIN</Link></li>
//             <li><Link to="/register">REGISTER</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/admin">ADMIN</Link></li>
//             <li><button className="logout-btn" onClick={handleLogout}>LOGOUT</button></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import CSS for styling
// import { FaUser } from "react-icons/fa"; // User icon for login

// const Navbar = () => {
//   console.log("Navbar loaded"); // ✅ Debugging check

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // ✅ Fetch role from localStorage

//   const handleLogout = () => {
//     console.log("Logging out..."); // ✅ Debugging log
//     localStorage.removeItem("token"); // ✅ Remove token
//     localStorage.removeItem("role"); // ✅ Remove role

//     // ✅ Redirect based on role
//     if (role === "admin") {
//       window.location.href = "/admin-login"; // ✅ Redirect admin to Admin Login
//     } else {
//       window.location.href = "/login"; // ✅ Redirect normal users to Login
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Ecom Store</div>

//       {/* Left Navigation Links */}
//       <ul className="nav-links left-nav">
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/products">Products</Link></li>

//         {/* Dropdown for Categories */}
//         <li className="dropdown">
//           <span>Category ▼</span>
//           <ul className="dropdown-menu">
//             <li><Link to="/category/electronics">Electronics</Link></li>
//             <li><Link to="/category/clothing">Clothing</Link></li>
//             <li><Link to="/category/books">Books</Link></li>
//           </ul>
//         </li>
//       </ul>

//       {/* Right Navigation Links */}
//       <ul className="nav-links right-nav">
//         {!token ? (
//           <>
//             <li>
//               <Link to="/login">
//                 <FaUser className="icon" /> LOGIN
//               </Link>
//             </li>
//             <li><Link to="/register">REGISTER</Link></li>
//             <li><Link to="/login">LOGOUT</Link></li> {/* ✅ Always show Admin Login */}
//           </>
//         ) : (
//           <li><button className="logout-btn" onClick={handleLogout}>LOGOUT</button></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import CSS for styling
// import { FaUser } from "react-icons/fa"; // User icon for login

// const Navbar = () => {
//   console.log("Navbar loaded"); // ✅ Debugging check

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // ✅ Fetch role from localStorage

//   const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ State for dropdown

//   const handleLogout = () => {
//     console.log("Logging out..."); // ✅ Debugging log
//     localStorage.removeItem("token"); // ✅ Remove token
//     localStorage.removeItem("role"); // ✅ Remove role

//     // ✅ Redirect based on role
//     if (role === "admin") {
//       window.location.href = "/admin-login"; // ✅ Redirect admin to Admin Login
//     } else {
//       window.location.href = "/login"; // ✅ Redirect normal users to Login
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Ecom Store</div>

//       {/* Left Navigation Links */}
//       <ul className="nav-links left-nav">
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/products">Products</Link></li>

//         {/* Dropdown for Categories */}
//         <li
//           className="dropdown"
//           onMouseEnter={() => setDropdownOpen(true)}  // ✅ Open dropdown on hover
//           onMouseLeave={() => setDropdownOpen(false)} // ✅ Close dropdown when mouse leaves
//         >
//           <span>Category ▼</span>
//           {dropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><Link to="/category/electronics">Electronics</Link></li>
//               <li><Link to="/category/clothing">Clothing</Link></li>
//               <li><Link to="/category/books">Books</Link></li>
//             </ul>
//           )}
//         </li>
//       </ul>

//       {/* Right Navigation Links */}
//       <ul className="nav-links right-nav">
//   {!token ? (
//     <>
//       <li>
//         <Link to="/login">
//           <FaUser className="icon" /> LOGIN
//         </Link>
//       </li>
//       <li><Link to="/register">REGISTER</Link></li>
//     </>
//   ) : (
//     <li>
//       <button className="logout-btn" onClick={handleLogout}>
//         LOGOUT
//       </button>
//     </li>
//   )}
// </ul>

//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUser } from "react-icons/fa"; 

const Navbar = () => {
  console.log("Navbar loaded"); 

  const navigate = useNavigate();
  
  // ✅ Memoized values to prevent re-renders
  const token = useMemo(() => localStorage.getItem("token"), []);
  const role = useMemo(() => localStorage.getItem("role"), []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out..."); 
    localStorage.removeItem("token"); 
    localStorage.removeItem("role"); 

    // ✅ Navigate smoothly instead of hard refresh
    navigate(role === "admin" ? "/admin-login" : "/login");
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Ecom Store</div>

      {/* Left Navigation Links */}
      <ul className="nav-links left-nav">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/products">Products</Link></li>

        {/* Category Dropdown */}
        <li
          className="dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)} 
        >
          <span>Category ▼</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/category/electronics">Electronics</Link></li>
              <li><Link to="/category/clothing">Clothing</Link></li>
              <li><Link to="/category/books">Books</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Right Navigation Links */}
      <ul className="nav-links right-nav">
        {!token ? (
          <>
            <li>
              <Link to="/login">
                <FaUser className="icon" /> LOGIN
              </Link>
            </li>
            <li><Link to="/register">REGISTER</Link></li>
          </>
        ) : (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
