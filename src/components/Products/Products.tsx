import { View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const Products = ({ navigation }: any) => {
  let mapArray = Array.apply(null, Array(10));

  return (
    <View className="flex flex-row flex-wrap justify-around items-center">
      {mapArray.map((data, index) => (
        <ProductCard
          className="flex-1"
          key={`product-no-${index}`}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export default Products;
