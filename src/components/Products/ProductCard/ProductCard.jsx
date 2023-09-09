import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProductCard = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Details")}
      className="mx-2 mb-5 w-[45%]"
    >
      <View>
        <View className="rounded-xl border  border-[#DADADA]  ">
          <Image
            className="ml-auto mr-2 mt-2 w-2 h-2"
            source={require("../../../../assets/favorite-icon.png")}
          />
          <Image
            className="w-[152px] h-[177px] mx-2 "
            source={require("../../../../assets/product-soyabin.jpeg")}
          />

          <Text className="m-2 text-[12px] font-[400]">
            Rupchanda Soyabean Oil_5 Liter
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
