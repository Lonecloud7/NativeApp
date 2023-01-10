import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

const SubmitButton = ({
  title,
  handleSubmit,
  loading,
  loadingText = "loading...",
}) => {
  return (
    <TouchableOpacity onPress={handleSubmit} style={signup.button}>
      <Text bold medium center color={"white"}>
        {loading ? loadingText : title}
      </Text>
    </TouchableOpacity>
  );
};

const signup = StyleSheet.create({
  button: {
    margin: 30,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
  },
});

export default SubmitButton;
