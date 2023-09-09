import { View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const Products = ({ navigation }) => {
  let mapArray = Array.apply(null, Array(10));

  return (
    <View className="flex flex-row flex-wrap justify-between">
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
