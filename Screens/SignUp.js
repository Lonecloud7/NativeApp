import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text"

const SignUp = ({ text }) => {
  return (
    <View style={signup.container}>
      <Text > Sign Up</Text>

      <View>
        <Text>Name</Text>
        <TextInput style={signup.textInput} />
      </View>
    </View>
  );
};

const signup = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
  },
  // heading: {
  //   color: "#333",
  //   fontSize: 30,
  // },
  textInput: {
    width: "80%",
    height: "auto",
    borderBottom: "3px solid #333",
  },
});

export default SignUp;
