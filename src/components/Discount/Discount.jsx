import { View, Text, ScrollView } from "react-native";
import React from "react";
import DiscountCard from "./DiscountCard/DiscountCard";

const Discount = () => {
  const discounts = [
    {
      discountPercent: 10,
    },
    {
      discountPercent: 25,
    },
    {
      discountPercent: 15,
    },
    {
      discountPercent: 5,
    },
  ];

  return (
    <ScrollView horizontal={true}>
      <View className="flex flex-row">
        {discounts.map((discount, index) => (
          <DiscountCard
            discount={discount.discountPercent}
            key={`discount-card-no-${index}`}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Discount;
