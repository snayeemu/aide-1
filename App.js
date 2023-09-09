import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Home from "./src/Pages/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  HeaderBackButton,
} from "@react-navigation/native-stack";
import Details from "./src/Pages/Details/Details";
import Navbar from "./src/components/Navbar/Navbar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            headerTitle: (props) => <DetailsHeaderTitle {...props} />,
            headerStyle: {
              backgroundColor: "#099",
            },
            headerTintColor: "#fff",
            headerRight: () => <Ratings />,
            headerLeft: () => <CustomBackButton navigation={navigation} />,
            headerBackVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DetailsHeaderTitle = () => {
  return (
    <View>
      <Text className="w-[140px] text-[16px] font-normal py-2 text-white">
        রূপচাঁদা সয়াবিন তেল ৫ লিটার
      </Text>
    </View>
  );
};

const Ratings = () => (
  <View>
    <Image
      className="h-[14px] w-[77px]"
      source={require("./assets/ratings.png")}
    />
    <Text className="text-white text-[18px] font-bold mt-[6px]">৪৯৮ টাকা</Text>
  </View>
);

const CustomBackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text className="text-white text-3xl mr-4">{"<"}</Text>
  </TouchableOpacity>
);
export default App;
