import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View className="mx-2 mt-5 ">
      <View className="flex flex-row gap-5 items-center">
        <View className="flex-1 border rounded-xl px-6 py-[14px]">
          <View className="flex flex-row justify-between">
            <View className=" flex flex-1 flex-row gap-6 items-center">
              <Image
                className="h-[18px] w-[18px]"
                source={require("../../../assets/search-images/search-logo.png")}
              />
              <TextInput className="flex-1" value="search" />
            </View>

            <Image
              className="w-[22px] h-[22px]"
              source={require("../../../assets/search-images/search-minimize-logo.png")}
            />
          </View>
        </View>
        <Image
          source={require("../../../assets/search-images/search-setting-logo.png")}
        />
      </View>
    </View>
  );
};

export default Search;
