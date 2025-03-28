import React, { useState } from "react";

const UploadImage = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8081/api/products/upload", {
        method: "POST",
        body: formData,
      });

      const imageUrl = await response.text();
      onUpload("C:\Users\AshwiniMurthy\Pictures\speaker.jpg"); // Pass uploaded URL back to parent
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
