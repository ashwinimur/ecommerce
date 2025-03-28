// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:8081/api/products", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (res) => {
//         const text = await res.text();
//         console.log("Raw response:", text);

//         if (!res.ok) {
//           throw new Error(`HTTP ${res.status}: ${text}`);
//         }

//         return JSON.parse(text);
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setError(error.message);
//       });
//   }, []);

//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
//   if (products.length === 0) return <p>Loading...</p>;

//   return (
//     <div className="products-container">
//       <h2>Our Products</h2>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={`http://localhost:8081/uploads/${product.image_url}`} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>
//               <strong>₹{parseFloat(product.price).toFixed(2)}</strong>{" "}
//               <span style={{ color: "green" }}>{product.discount}% off</span>
//             </p>
//             <button className="view-details" onClick={() => navigate(`/products/${product.id}`)}>
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:8081/api/products", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (res) => {
//         const text = await res.text();
//         console.log("Raw response:", text);

//         if (!res.ok) {
//           throw new Error(`HTTP ${res.status}: ${text}`);
//         }

//         return JSON.parse(text);
//       })
//       .then((data) => setProducts(data))
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setError(error.message);
//       });
//   }, []);

//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
//   if (products.length === 0) return <p>Loading...</p>;

//   return (
//     <div className="products-container">
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img 
//               src={product.image_url} 
//               alt={product.name} 
//               className="product-image"
//               onError={(e) => { e.target.src = "/fallback-image.jpg"; }} // Fallback if image fails
//             />
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">
//               ₹{parseFloat(product.price).toFixed(1)}{" "}
//               <span className="product-discount">{product.discount}% off</span>
//             </p>
//             <button className="view-details" onClick={() => navigate(`/products/${product.id}`)}>
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8081/api/products")
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <div className="products-container">
//       <div className="product-grid">
//         {products.map(product => (
//           <div key={product.id} className="product-card">
//             <img 
//               src={product.imageUrl} 
//               alt={product.name} 
//               className="product-image"
//               onError={(e) => { e.target.src = "/fallback-image.jpg"; }} // Default if image fails
//             />
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">
//               ₹{parseFloat(product.price).toFixed(1)}{" "}
//               <span className="product-discount">{product.discount}% off</span>
//             </p>
//             <button className="view-details" onClick={() => navigate(`/products/${product.id}`)}>
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8081/api/products", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const text = await res.text();
        console.log("Raw response:", text);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${text}`);
        }

        return JSON.parse(text);
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (products.length === 0) return <p>Loading...</p>;

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`http://localhost:8081/uploads/${product.image_url}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              <strong>₹{parseFloat(product.price).toFixed(2)}</strong>{" "}
              <span style={{ color: "green" }}>{product.discount}% off</span>
            </p>
            <button className="view-details" onClick={() => navigate(`/products/${product.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
