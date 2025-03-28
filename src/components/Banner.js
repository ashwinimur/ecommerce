// import React from "react";
// import { Carousel } from "react-bootstrap";
// import banner1 from "../assets/banner1.jpg"; // Replace with actual image paths
// import banner2 from "../assets/banner2.jpg";
// import banner3 from "../assets/banner3.jpg";

// const Banner = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img className="d-block w-100" src={banner1} alt="First slide" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={banner2} alt="Second slide" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={banner3} alt="Third slide" />
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default Banner;


// import React from "react";
// import { Carousel } from "react-bootstrap";
// import banner1 from "../assets/banner1.jpg";
// import banner2 from "../assets/banner2.jpg";
// import banner3 from "../assets/banner3.jpg";

// const Banner = () => {
//   return (
//     <Carousel fade interval={3000}>
//       <Carousel.Item>
//         <img className="d-block w-100" src={banner1} alt="First slide" />
//         <Carousel.Caption>
//           <h3>Welcome to Our Store</h3>
//           <p>Find the best deals here!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={banner2} alt="Second slide" />
//         <Carousel.Caption>
//           <h3>Exclusive Discounts</h3>
//           <p>Shop now and save big!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={banner3} alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Fast Delivery</h3>
//           <p>Get your orders delivered quickly!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default Banner;



import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="container mt-3">
      <Carousel fade interval={3000} controls indicators>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Our Store</h3>
            <p>Find the best deals here!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Exclusive Discounts</h3>
            <p>Shop now and save big!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered quickly!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
