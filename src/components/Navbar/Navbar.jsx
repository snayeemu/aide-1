import { View, Text, Image } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View className="mt-12 mx-[15px] flex flex-row justify-between items-center">
      <View className="flex flex-row gap-[8px]">
        <Image
          className="w-[28px] h-[27px]"
          source={require("../../../assets/aide-logo.png")}
        />
        <Text className="text-[20px] font-[700]">AIDE</Text>
      </View>

      <View className="flex flex-row gap-[17px]">
        <Image
          className="w-[19px] h-[18px]"
          source={require("../../../assets/notification-logo.png")}
        />
        <Image
          className="w-[30px] h-[31px]"
          source={require("../../../assets/hamburger-logo.png")}
        />
      </View>
    </View>
  );
};

export default Navbar;
