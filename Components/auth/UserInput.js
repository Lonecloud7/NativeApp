import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInput = ({
  label,
  name,
  value,
  onChange,
  autoCompleteType,
  autoCapitalize = "none",
  autoCorrect,
  keyBoardType = "default",
  secureTextEntry = false,
}) => {
  return (
    <View style={signup.inputs}>
      <Text>{label}</Text>
      <TextInput
        style={signup.textInput}
        value={value}
        // onChangeText only sends value not event so i
        // called the name prop to track and bind it to the value in
        // the parent component
        onChangeText={(text) => {
          onChange(text, name);
        }}
        autoCompleteType={autoCompleteType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyBoardType={keyBoardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const signup = StyleSheet.create({
  inputs: {
    marginHorizontal: 24,
    marginTop: 15,
  },
  textInput: {
    width: "100%",
    height: 45,
    borderBottomColor: "#cfcece",
    borderBottomWidth: 2,
  },
});

export default UserInput;
