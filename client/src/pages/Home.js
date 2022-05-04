import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Welcome from "../components/Welcome";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      
      
      <Welcome />
      <Cart />
    </div>
  );
};

export default Home;
