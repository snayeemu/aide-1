import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const DiscountCard = ({ discount }) => {
  return (
    <View className="mx-2 mb-5">
      <View className=" rounded-xl overflow-hidden w-[265px]">
        <ImageBackground source={require("../../../../assets/bg-discount.png")}>
          <View className="p-[15px] ">
            <Text className="text-[25] font-bold ">{discount}% Off</Text>
            <Text className="text-[16] font-[400]">On everything today</Text>
            <Text className="text-[#666] text-[11px] font-[600] mt-3 mb-5">
              With code:FSCREATION
            </Text>
            <TouchableOpacity className="px-[14px] py-[5px] w-[70px] bg-black rounded-xl">
              <Text className="text-[10px] text-white font-bold ">Get Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default DiscountCard;
