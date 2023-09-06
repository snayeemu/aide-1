import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Navbar from "./src/components/Navbar/Navbar";
import Banner from "./src/components/Banner/Banner";
import Search from "./src/components/Search/Search";
import Discount from "./src/components/Discount/Discount";
import ProductCard from "./src/components/Products/ProductCard/ProductCard";
import Products from "./src/components/Products/Products";
import BottomNavigation from "./src/components/BottomNavigation/BottomNavigation";
import { StatusBar } from "expo-status-bar";

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
      <BottomNavigation />
      <StatusBar backgroundColor="#61dafb" barStyle={"default"} />
    </>
  );
};

export default App;
