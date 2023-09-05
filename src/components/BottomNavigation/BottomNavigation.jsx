import { View, Text, Image } from "react-native";
import React from "react";

const BottomNavigation = () => {
  return (
    <View className="flex flex-row justify-between items-center p-4">
      <Image source={require("../../../assets/bottom-navigation/home.png")} />
      <Image source={require("../../../assets/bottom-navigation/search.png")} />
      <Image source={require("../../../assets/bottom-navigation/menu.png")} />
      <Image
        source={require("../../../assets/bottom-navigation/percent.png")}
      />
      <Image source={require("../../../assets/bottom-navigation/cart.png")} />
    </View>
  );
};

export default BottomNavigation;
