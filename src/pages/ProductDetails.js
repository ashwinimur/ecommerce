// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null); // Track errors

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Retrieve JWT token

//     fetch(`http://localhost:8081/api/products/${id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Add authentication token
//       },
//     })
//       .then(async (res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP Error! Status: ${res.status}`);
//         }
//         const text = await res.text();
//         return text ? JSON.parse(text) : {};
//       })
//       .then((data) => {
//         console.log("Fetched Product:", data);
//         setProduct(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//         setError(error.message);
//       });
//   }, [id]);

//   if (error) return <p>Error: {error}</p>;
//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="product-details">
//       <h2>{product.name}</h2>
//       <img src={product.imageUrl} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ₹{product.price?.toFixed(2)}</p>
//       <p>Category: {product.category?.name}</p>
//       <button className="add-to-cart">Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:8081/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const text = await res.text();
        return text ? JSON.parse(text) : {};
      })
      .then((data) => {
        console.log("Fetched Product:", data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError(error.message);
      });
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={`http://localhost:8081/uploads/${product.image_url}`} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price?.toFixed(2)}</p>
      <p>Discount: {product.discount}%</p>
      <p>Stock Quantity: {product.stock_quantity}</p>
      <p>SKU: {product.sku}</p>
      <p>Category ID: {product.category}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
