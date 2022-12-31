import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { onlineAPI } from "../Config";
// import { Text } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import Logo from "../Components/auth/Logo";

const SignUp = ({ navigation }) => {
  const [values, setValues] = useState({
    name: "jerry seinfeld",
    email: "nativelover@gmail.com",
    password: "cramercrazy",
  });

  const [loading, setLoading] = useState(false);

  const { name, email, password } = values;

  const onChange = (text, name) => {
    // const { value } = event.target;
    setValues((prev) => {
      return { ...prev, [name]: text };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }

    console.log("DATA IS =>", name, email, password);
    setLoading(false);

    console.log(values);
    try {
      setLoading(true);
      const data = await axios.post(`${onlineAPI}/signup`, {
        name,
        email,
        password,
      });

      alert("YOUR DATA IS IN");
      console.log("SUCCESS! THIS IS YOUR RESPONSE! =>", data);


      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={signup.container}>
      <Logo />
      <Text title center>
        {" "}
        SIGN UP
      </Text>

      <UserInput
        label={"Name"}
        name={"name"}
        value={name}
        onChange={onChange}
        autoCapitalize={"words"}
        autoCorrect={false}
      />
      <UserInput
        label={"Email"}
        name={"email"}
        value={email}
        onChange={onChange}
        autoCompleteType={"email"}
        keyBoardType="email-address"
      />
      <UserInput
        label={"Password"}
        name={"password"}
        value={password}
        onChange={onChange}
        autoCompleteType="password"
        secureTextEntry={true}
      />

      <SubmitButton
        title="Submit"
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}

      <Text small center>
        Already Joined?
      </Text>
      <Text
        color="grey"
        small
        center
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        {" "}
        Sign In
      </Text>
    </ScrollView>
  );
};

const signup = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
  },
});

export default SignUp;
