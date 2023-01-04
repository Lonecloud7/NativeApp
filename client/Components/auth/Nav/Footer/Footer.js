import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import FooterTabs from "./FooterTabs";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.container}>
      <View style={Style.tabs}>
        <FooterTabs
          title={"Home"}
          icon={"home"}
          navigation={navigation}
          handlePress={() => {
            navigation.navigate("Home");
          }}
        />
        <FooterTabs
          title={"Post"}
          icon={"plus-square"}
          handlePress={() => {
            navigation.navigate("Post");
          }}
        />
        <FooterTabs
          title={"Links"}
          icon={"list-ol"}
          handlePress={() => {
            navigation.navigate("Links");
          }}
        />
        <FooterTabs
          title={"Account"}
          icon={"user"}
          handlePress={() => {
            navigation.navigate("Account");
          }}
        />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: "#030303",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "flex-end",
    width: "100%",
    padding: 15,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Footer;
