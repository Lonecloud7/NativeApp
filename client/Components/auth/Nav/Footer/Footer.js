import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import FooterTabs from "./FooterTabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider } from "react-native-elements";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute()
  return (
    <>
    <Divider width={5}/>
      <View style={Style.container}>
        <View style={Style.tabs}>
          <FooterTabs
            title={"Home"}
            icon={"home"}
            navigation={navigation}
            handlePress={() => {
              navigation.navigate("Home");
            }}
            route={route.name}
          />
          <FooterTabs
            title={"Post"}
            icon={"plus-square"}
            handlePress={() => {
              navigation.navigate("Post");
            }}
            route={route.name}
          />
          <FooterTabs
            title={"Links"}
            icon={"list-ol"}
            handlePress={() => {
              navigation.navigate("Links");
            }}
            route={route.name}
          />
          <FooterTabs
            title={"Account"}
            icon={"user"}
            handlePress={() => {
              navigation.navigate("Account");
            }}
            route={route.name}
          />
        </View>
      </View>
    </>
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
