import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import { SliderBox } from "react-native-image-slider-box";

import DetailsBottomNav from "../../components/Details-Page/DetailsBottomNav/DetailsBottomNav";

const Details = () => {
  const images = [
    require("../../../assets/product-soyabin.jpeg"),
    require("../../../assets/product-soyabin.jpeg"),
    require("../../../assets/product-soyabin.jpeg"),
  ];

  return (
    <>
      <ScrollView className="bg-[#099]">
        <View className="bg-white mt-10 mx-3 rounded-2xl">
          <SliderBox
            images={images}
            ImageComponentStyle={{
              width: "40%",
            }}
          />
          <Text className="bg-[#099] py-2 mb-2 mr-8 rounded-r-2xl text-white text-[14px] mt-4">
            More Size & Veriations of Rupchanda Soyabean Oil
          </Text>
        </View>
      </ScrollView>
      <DetailsBottomNav />
    </>
  );
};

export default Details;
