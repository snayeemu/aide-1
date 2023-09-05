import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <ScrollView className="mx-2 mt-5 " horizontal={true}>
      <View className="  rounded-xl overflow-hidden mr-4">
        <ImageBackground
          className="w-[95vw]"
          source={require("../../../assets/banner-image.png")}
        >
          <View className="px-9 ">
            <Text className="text-[24px] font-[700] pt-[44px] w-[50%]">
              Enjoy Peace
            </Text>
            <Text className="text-[24px] font-[700]">in shopping</Text>

            <Text className="text-xs font-[500] mt-[26px]">
              Get your 1st plant
            </Text>
            <Text className="text-xs font-[500] mt-26 pb-[45px]">
              @ 40% off
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View className="rounded-xl overflow-hidden ml-5">
        <ImageBackground
          className="w-[95vw]"
          source={require("../../../assets/banner-image.png")}
        >
          <View className="px-9 ">
            <Text className="text-[24px] font-[700] pt-[44px] w-[50%]">
              Enjoy Peace
            </Text>
            <Text className="text-[24px] font-[700]">in shopping</Text>

            <Text className="text-xs font-[500] mt-[26px]">
              Get your 1st plant
            </Text>
            <Text className="text-xs font-[500] mt-26 pb-[45px]">
              @ 40% off
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Banner;
