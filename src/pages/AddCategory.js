// import React, { useState } from "react";
// import axios from "axios";

// const AddCategory = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     imageName: "",
//     isActive: true,
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [message, setMessage] = useState("");

//   const API_URL = "http://localhost:8081/categories"; // Backend API URL

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle Image Upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//     setFormData({ ...formData, imageName: file ? file.name : "" });
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const categoryData = new FormData();
//     categoryData.append("name", formData.name);
//     categoryData.append("description", formData.description);
//     categoryData.append("imageName", formData.imageName);
//     categoryData.append("isActive", formData.isActive);
//     if (imageFile) categoryData.append("imageFile", imageFile);
  
//     try {
//       // Get token from localStorage
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         setMessage("Unauthorized: No token found.");
//         return;
//       }
  
//       await axios.post(API_URL, categoryData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`, // Add token here
//         },
//       });
  
//       setMessage("Category added successfully!");
//       setFormData({ name: "", description: "", imageName: "", isActive: true });
//       setImageFile(null);
//     } catch (error) {
//       console.error("Error:", error.response ? error.response.data : error);
//       setMessage("Failed to add category.");
//     }
//   };
  

//   return (
//     <div className="category-form-container">
//       <h2>Add Category</h2>
//       {message && <p className="message">{message}</p>}
//       <form onSubmit={handleSubmit} className="category-form">
//         <label>Category Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//         <label>Description:</label>
//         <textarea name="description" value={formData.description} onChange={handleChange} required />

//         <label>Upload Image:</label>
//         <input type="file" onChange={handleImageChange} accept="image/*" required />

//         <label>
//           <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />
//           Active
//         </label>

//         <button type="submit">Add Category</button>
//       </form>
//     </div>
//   );
// };

// export default AddCategory;



import React, { useState } from "react";
import axios from "axios";
import "./AddCategory.css";


const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isActive: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:8081/api/admin/categories"; // Ensure correct API endpoint

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = new FormData();
    categoryData.append("name", formData.name);
    categoryData.append("description", formData.description);
    categoryData.append("isActive", formData.isActive);
    if (imageFile) categoryData.append("imageFile", imageFile);

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Unauthorized: No token found.");
        return;
      }

      // Send request
      await axios.post(API_URL, categoryData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Category added successfully!");
      setFormData({ name: "", description: "", isActive: true });
      setImageFile(null);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      setMessage("Failed to add category.");
    }
  };

  return (
    <div className="category-form-container">
      <h2>Add Category</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="category-form">
        <label>Category Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Upload Image:</label>
        <input type="file" onChange={handleImageChange} accept="image/*" />

        <label>
          <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />
          Active
        </label>

        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
