import React from 'react'
import { View, StyleSheet, Image} from "react-native";
import Text from "@kaloraat/react-native-text";

const Logo = () => {
  return (
    <View style={signup.logo}> 
       <Image source={require("../../assets/rap-logo.png")} style={signup.img}/>
    </View>
  )
}

const signup = StyleSheet.create({
    logo:{
        justifyContent:"center",
        alignContent:"center",
        padding:30
    },
    img:{
        width:340,
        height:120,
        
    }
})

export default Logo