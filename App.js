import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Navbar from "./src/components/Navbar/Navbar";
import Banner from "./src/components/Banner/Banner";
import Search from "./src/components/Search/Search";
import Discount from "./src/components/Discount/Discount";
import ProductCard from "./src/components/Products/ProductCard/ProductCard";
import Products from "./src/components/Products/Products";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <ScrollView>
        <Banner />
        <Search />
        <Discount />
        <Products />
        {/* <ProductCard /> */}
      </ScrollView>
    </>
  );
};

export default App;
