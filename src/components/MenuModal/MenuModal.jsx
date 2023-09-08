import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const MenuModal = ({ modalVisible, setModalVisible }) => {
  const arraySize14 = Array.apply(null, Array(14));

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={styles.modalView}
            className="w-full mb-[60px] border-b border-[#EAEAEA] rounded-t-3xl pb-3"
          >
            <View className="bg-[#099] w-full rounded-t-3xl flex flex-row py-3">
              <Image
                className="w-[49px] h-[49px] ml-4"
                source={require("../../../assets/menu-modal/location.gif")}
              />
              <View>
                <Text className="text-white font-bold text-[13px] mb-1">
                  Please Select your Delivery Location First
                </Text>
                <Text className="text-[11px] font-normal text-[#E1DFDF]">
                  Switch your location to stay in tune
                </Text>
                <Text className="text-[11px] font-normal text-[#E1DFDF]">
                  with what's happening in your area
                </Text>
              </View>

              <View className="ml-auto mr-3 flex justify-center items-center">
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text className="text-red-900 text-lg border-2 border-red-900 rounded-full px-2 text-center">
                    X
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/menu-modal/close-logo.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View className="w-full px-2 flex flex-row gap-[32px] mt-[1px] flex-wrap">
              {arraySize14.map((data, index) => (
                <View key={`menu-modal-item-no-${index}`}>
                  <View className="bg-[#EAEAEA]  p-[10px] rounded-md">
                    <Image
                      className="w-[26px] h-[26px] "
                      source={require("../../../assets/menu-modal/call-logo.png")}
                    />
                  </View>
                  <Text className="text-[#8996B0] text-[10px] text-center">
                    Contact {"\n"} Now
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",

    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,

    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MenuModal;
