import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css"; // Optional CSS for styling

const Categories = () => {
  const categories = [
    { name: "Electronics", image: "/images/electronics.jpg" },
    { name: "Mobiles", image: "/images/mobiles.jpg" },
    { name: "Fashion", image: "/images/fashion.jpg" },
    { name: "Beauty", image: "/images/beauty.jpg" },
    { name: "Books", image: "/images/books.jpg" },
    { name: "Appliances", image: "/images/appliances.jpg" },
  ];

  return (
    <div className="categories-container">
      <h2 className="text-center my-4">Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.name.toLowerCase()}`} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <p className="category-name">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
