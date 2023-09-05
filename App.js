import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Navbar from "./src/components/Navbar/Navbar";
import Banner from "./src/components/Banner/Banner";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <ScrollView>
        <Banner />
      </ScrollView>
    </>
  );
};

export default App;
