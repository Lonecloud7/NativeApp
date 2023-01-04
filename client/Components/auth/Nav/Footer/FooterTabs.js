import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterTabs = ({ title, icon, handlePress, route }) => {

  const activeRoute = route === title ? "#a9a7a7" : "#f8f8f8"
  return (
    <TouchableOpacity style={Tabs.container} onPress={handlePress}>
      <>
        <FontAwesome5
          name={icon}
          style={{ color: activeRoute, alignSelf: "center" }}
          size={25}
        />
        <Text color={activeRoute}>{title}</Text>
      </>
    </TouchableOpacity>
  );
};

const Tabs = StyleSheet.create({
  container: {},
});
export default FooterTabs;
