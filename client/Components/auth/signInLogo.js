import React from 'react'
import { View, StyleSheet, Image } from "react-native";

const SignInLogo = ({children}) => {
    return (
        <View style={signup.logo}>
          {children ? (
            children
          ) : (
            <Image
              source={require("../../assets/rap-logo.png")}
              style={signup.img}
            />
          )}
        </View>
      );
    };
    
    const signup = StyleSheet.create({
      logo: {
        justifyContent: "center",
        alignContent: "center",
        padding: 30,
      },
      img: {
        width: 340,
        height: 120,
      },
    });

export default SignInLogo