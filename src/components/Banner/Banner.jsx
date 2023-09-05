import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <ScrollView className="mx-2 mt-1 flex-2" horizontal={true}>
      <ImageBackground
        className="w-screen "
        source={require("../../../assets/banner-image.png")}
        resizeMode="cover"
      >
        <View className="px-9">
          <Text className="text-[24px] font-[700] pt-[44px] w-[50%]">
            Enjoy Peace
          </Text>
          <Text className="text-[24px] font-[700]">in shopping</Text>

          <Text className="text-xs font-[500] mt-[26px]">
            Get your 1st plant
          </Text>
          <Text className="text-xs font-[500] mt-26 pb-[45px]">@ 40% off</Text>
        </View>
      </ImageBackground>

      <ImageBackground
        className="w-screen "
        source={require("../../../assets/banner-image.png")}
        resizeMode="cover"
      >
        <View className="px-9">
          <Text className="text-[24px] font-[700] pt-[44px] w-[50%]">
            Enjoy Peace
          </Text>
          <Text className="text-[24px] font-[700]">in shopping</Text>

          <Text className="text-xs font-[500] mt-[26px]">
            Get your 1st plant
          </Text>
          <Text className="text-xs font-[500] mt-26 pb-[45px]">@ 40% off</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Banner;
