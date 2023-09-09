import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuModal from "../../MenuModal/MenuModal";

const DetailsBottomNav = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View className="bg-[#099]">
        <MenuModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View className="flex flex-row justify-between items-center p-4">
        <Image
          source={require("../../../../assets/bottom-navigation/home.png")}
        />

        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image
            source={require("../../../../assets/bottom-navigation/menu.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#E67E22] w-[155px] h-[30] rounded-xl border border-white shadow-xl shadow-black">
          <Text className="text-white text-[14px] font-bold text-center my-auto">
            Add to Cart
          </Text>
        </TouchableOpacity>

        <Image source={require("../../../../assets/horizontal-3-dot.png")} />
      </View>
    </>
  );
};

export default DetailsBottomNav;
