import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const HeaderTabs = ({title, icon, signOut}) => {
  return (
    
      <TouchableOpacity style={Tabs.container} onPress={signOut}>
        <>
        <FontAwesome5 name={icon} style={{color:"#060606", alignSelf:"center"}} size={25}/>
        <Text  color={"#060606"}>
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
export default HeaderTabs;
