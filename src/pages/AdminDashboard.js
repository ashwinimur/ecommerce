// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Admin Dashboard</h1>
//       <div className="dashboard-grid">
//         <div className="dashboard-card" onClick={() => navigate("/users")}>
//           Users
//         </div>
//         <div className="dashboard-card" onClick={() => navigate("/products")}>
//           Products
//         </div>
//         <div className="dashboard-card" onClick={() => navigate("/orders")}>
//           Orders
//         </div>
//         <div className="dashboard-card" onClick={() => navigate("/wallet")}>
//           Wallet Transactions
//         </div>
//         <div className="dashboard-card" onClick={() => navigate("/categories")}>
//           Categories
//         </div>
//         </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card" onClick={() => navigate("/users")}>
          Users
        </div>
        <div className="dashboard-card" onClick={() => navigate("/products")}>
          Products
        </div>
        <div className="dashboard-card" onClick={() => navigate("/orders")}>
          Orders
        </div>
        <div className="dashboard-card" onClick={() => navigate("/wallet")}>
          Wallet Transactions
        </div>
        <div className="dashboard-card" onClick={() => navigate("/categories")}>
          Categories
        </div>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
