import React from "react";
import Item from "../Item";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
const Main = () => {
  return (
    <div className="showcase">
      <Navbar />
      <div className="container pt-4">
        {/* DUMMY DATA */}
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        {/* DUMMY DATA */}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
