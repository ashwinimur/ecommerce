// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./UserDetails.css";

// const UserDetails = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
    
//     if (!token) {
//       alert("Unauthorized! Please log in.");
//       navigate("/login"); // Redirect user to login page
//       return;
//     }
  
//     fetch("http://localhost:8081/userAddress", {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${token}`, // Ensure token is included
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (response) => {
//         if (!response.ok) {
//           if (response.status === 403) {
//             throw new Error("Access Denied! Only Admins can view user addresses.");
//           }
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => setUsers(data))
//       .catch((error) => alert(error.message));
//   }, []);
  

//   // ✅ Fix: Define the missing handleDelete function
//   const handleDelete = (id) => {
//     const token = localStorage.getItem("token");

//     fetch(`http://localhost:8081/userAddress/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         setUsers(users.filter((user) => user.id !== id)); // Update UI after deletion
//       })
//       .catch((error) => console.error("Error deleting user:", error));
//   };

//   return (
//     <div className="user-details-container">
//       <h2>User Details</h2>
//       <button className="back-btn" onClick={() => navigate("/")}>← Back to Dashboard</button>
//       {users.map((user) => (
//         <div className="user-card" key={user.id}>
//           <img src={user.image || "default-avatar.png"} alt="User" className="user-image" />
//           <div className="user-info">
//             <h3>{user.fullName}</h3>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Mobile:</strong> {user.mobile}</p>
//             <p><strong>Address:</strong> {user.address}</p>
//           </div>
//           <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserDetails;






import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized! Please log in.");
      navigate("/login"); // Redirect user to login page
      return;
    }

    fetch("http://localhost:8081/userAddress", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("Access Denied! Only Admins can view user addresses.");
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => alert(error.message));
  }, [navigate]);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:8081/userAddress/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setUsers(users.filter((user) => user.id !== id)); // Update UI after deletion
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <button className="back-btn" onClick={() => navigate("/")}>← Back to Dashboard</button>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.image || "default-avatar.png"} alt="User" className="user-image" />
          <div className="user-info">
            <h3>{user.fullName}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>phone_number:</strong> {user.phone_number}</p>
            <p><strong>Address:</strong> 
              {user.addressLine1}, {user.addressLine2 && user.addressLine2 + ", "}
              {user.landmark && user.landmark + ", "} 
              {user.city}, {user.state}, {user.country} - {user.pincode}
            </p>
          </div>
          <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
