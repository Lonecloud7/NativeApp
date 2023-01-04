import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const FooterTabs = ({title, icon, handlePress}) => {
  return (
    
      <TouchableOpacity style={Tabs.container} onPress={handlePress}>
        <>
        <FontAwesome5 name={icon} style={{color:"#f8f8f8", alignSelf:"center"}} size={25}/>
        <Text  color={"#f8f8f8"}>
          {title}
        </Text>
        </>
      </TouchableOpacity>
    
  );
};

const Tabs = StyleSheet.create({
  container: {
  },
});
export default FooterTabs;
