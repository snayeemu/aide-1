import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Navbar from "./src/components/Navbar/Navbar";
import Banner from "./src/components/Banner/Banner";
import Search from "./src/components/Search/Search";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <ScrollView>
        <Banner />
        <Search />
      </ScrollView>
    </>
  );
};

export default App;
