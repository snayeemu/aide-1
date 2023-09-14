import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";

const BottomNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <MenuModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View className="flex flex-row justify-between items-center p-4">
        <Image source={require("../../../assets/bottom-navigation/home.png")} />
        <Image
          source={require("../../../assets/bottom-navigation/search.png")}
        />
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image
            source={require("../../../assets/bottom-navigation/menu.png")}
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/bottom-navigation/percent.png")}
        />
        <Image source={require("../../../assets/bottom-navigation/cart.png")} />
      </View>
    </>
  );
};

export default BottomNavigation;
