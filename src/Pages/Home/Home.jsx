import { ScrollView, StatusBar } from "react-native";
import React from "react";

import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import Discount from "../../components/Discount/Discount";
import Products from "../../components/Products/Products";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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

export default Home;
