// import Banner from "../components/Banner";

// const Home = () => {
//   return (
//     <div>
//       <Banner />
//     </div>
//   );
// };

// export default Home;


import Banner from "../components/Banner";
import Categories from "../components/Categories"; // Import Categories component

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories /> {/* Display categories directly on the Home page */}
    </div>
  );
};

export default Home;
