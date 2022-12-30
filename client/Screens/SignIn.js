import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
// import { Text } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import Logo from "../Components/auth/Logo";

const SignIn = ({ navigation }) => {
  const [values, setValues] = useState({
    email: "okekedumaga10@gmail.com",
    password: "sjsnsksksks",
  });

  const [loading, setLoading] = useState(false);

  const { email, password } = values;

  const onChange = (text, name) => {
    // const { value } = event.target;
    setValues((prev) => {
      return { ...prev, [name]: text };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }

    console.log("DATA IS =>", email, password);
    setLoading(false);
    try {
      const data = await axios.post("http://localHost:8000/api", {
        email,
        password,
      });

      alert("YOUR DATA IS FOUND MY NIGGA");
      console.log("SUCCESS =>", data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={signin.container}>
      <Logo />
      <Text title center>
        {" "}
        SIGN IN
      </Text>

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
        Create An Account?
        <Text
          color="grey"  
          small
          center
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          {" "}
          Sign Up
        </Text>
      </Text>
      <Text color="grey" small center>
        {" "}
        Forget Password?
      </Text>
    </ScrollView>
  );
};

const signin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
  },
});

export default SignIn;
