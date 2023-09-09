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
        </View>
      </ScrollView>
      <DetailsBottomNav />
    </>
  );
};

export default Details;
