import React from "react";
import { useState, useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import axios from "axios";
// import { Text } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import Logo from "../Components/auth/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/contextAuth";

const SignIn = ({ navigation }) => {

  const [state, setState] = useContext(AuthContext)
  const [values, setValues] = useState({
    email: "okeke.dumaga@gmail.com",
    password: "zikora1997",
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
      setLoading(true);
      //base url in context config
      const { data } = await axios.post(`/signin`, {
        email,
        password,
      });

      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        //save to context store

        setState(data)
        //save to local storage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        alert("WELCOME BACK MAH NIGGA!!");
        console.log("SUCCESS =>", data);
        setLoading(false);
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err);
      alert(err);
      setLoading(false);
    }
  };

  // const checkState = async () => {
  //   const data = await AsyncStorage.getItem("@auth");
  //   console.log("DATA FROM LOCAL STORAGE",data);
  // };

  // checkState();

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
