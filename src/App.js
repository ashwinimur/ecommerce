// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<AdminDashboard />} />
//         <Route path="/users" element={<h2>Users Management Page</h2>} />
//         <Route path="/products" element={<h2>Products Management Page</h2>} />
//         <Route path="/orders" element={<h2>Orders Management Page</h2>} />
//         <Route path="/wallet" element={<h2>Wallet Transactions Page</h2>} />
//         <Route path="/categories" element={<h2>Categories Management Page</h2>} />
//       </Routes>
//     </>
//   );
// }

// export default App;




// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Categories from "./components/Categories";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   return (
//     <>
//       <Navbar /> {/* ✅ Navbar remains outside Routes */}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/dashboard" element={<AdminDashboard />} />
//         <Route path="/products" element={<h2>Products Page</h2>} />
//         <Route path="/categories" element={<h2>Categories Page</h2>} />
//       </Routes>
//     </>
//   );
// }

// export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Categories from "./components/Categories";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   return (
//     <>
//       <Navbar /> {/* ✅ Navbar remains outside Routes */}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/dashboard" element={<AdminDashboard />} />
//         <Route path="/products" element={<h2>Products Page</h2>} />
//         <Route path="/categories" element={<Categories />} /> {/* ✅ Corrected */}
//       </Routes>
//     </>
//   );
// }

// export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   return (
//     <>
//       <Navbar /> {/* ✅ Navbar remains outside Routes */}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/dashboard" element={<AdminDashboard />} />
//         <Route path="/products" element={<h2>Products Page</h2>} />
//         <Route path="/categories" element={<h2>Categories Page</h2>} />
//       </Routes>
//     </>
//   );
// }

// export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home"; 
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";
// import AddCategory from "./pages/AddCategory"; // ✅ Import AddCategory Component

// function App() {
//   return (
//     <>
//       <Navbar /> {/* ✅ Navbar remains outside Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/dashboard" element={<AdminDashboard />} />
//         <Route path="/products" element={<h2>Products Page</h2>} />
        
//         {/* ✅ Replace Placeholder with AddCategory Component */}
//         <Route path="/categories" element={<AddCategory />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Login from "./pages/Login";
import UserLogin from "./pages/UserLogin";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AddCategory from "./pages/AddCategory"; 
import Products from "./pages/Products"; 
import ProductDetails from "./pages/ProductDetails"; 
import UserDetails from "./pages/UserDetails"; 
import CustomerOrders from "./pages/CustomerOrders";


function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/otp-login" element={<OtpLogin />} />  */}
        <Route path="/Userlogin" element={<UserLogin />} />

        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<AddCategory />} /> 
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/users" element={<UserDetails />} />
        <Route path="/orders" element={<CustomerOrders />} />
      </Routes>
    </>
  );
}

export default App;
