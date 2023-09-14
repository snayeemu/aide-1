import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProductCard = ({ navigation }: any) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Details")}
      className=" mb-5 w-[47%]"
    >
      <View>
        <View className="rounded-xl border  border-[#DADADA]  pb-4">
          {/* <Image
            className="ml-auto mr-2 mt-2 w-2 h-2"
            source={require("../../../../assets/favorite-icon.png")}
          /> */}
          <Image
            className="w-[85%] h-[177px]  mx-auto rounded"
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
