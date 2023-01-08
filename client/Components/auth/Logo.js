import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "@kaloraat/react-native-text";

const Logo = ({ children }) => {
  return (
    <View style={signup.logo}>
      <View style={signup.logoCircle}>
      {children ? (
        children
      ) : (
        <Image
          source={require("../../assets/rap-logo.png")}
          style={signup.img}
        />
      )}
      </View>
    </View>
  );
};

const signup = StyleSheet.create({
  logo: {
    backgroundColor:"#c4c4c4",
    height:250,
    width:250,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    padding: 15,
    // backgroundColor:"red",
  },
  // img: {
  //   width: 340,
  //   height: 120,
  // },
  logoCircle:{
    // backgroundColor:"#c4c4c4",
    // height:190,
    // width:190,
    borderRadius:100,
    // justifyContent:"center",
    // alignItems:"center",
    alignSelf:"center"
  }
});

export default Logo;
