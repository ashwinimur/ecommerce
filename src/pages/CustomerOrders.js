import React, { useState, useEffect } from "react";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve JWT token from storage

    fetch("http://localhost:8081/orders?page=0&size=10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Attach JWT token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setOrders(data.content)) // Use `.content` to extract paginated data
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Customer Orders</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>{order.product?.name} - {order.status}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerOrders;
