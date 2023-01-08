import React from "react";
import { useState, useContext } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
// import { Text } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import SignInLogo from "../Components/auth/signInLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/contextAuth";
import { onlineAPI } from "../Config";

const SignUp = ({ navigation }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  //call context state
  const [state, setState] = useContext(AuthContext);

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

    try {
      setLoading(true);
      //base url in context config
      const { data } = await axios.post(`${onlineAPI}/signup`, {
        name,
        email,
        password,
      });

      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save in context
        setState(data);
        // save response to local storage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        setLoading(false);

        console.log("SUCCESS! THIS IS YOUR RESPONSE! =>", data);
        alert("YOUR DATA IS IN");
        setValues({
          name: "",
          email: "",
          password: "",
        });
        //redirect
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={signup.container}>
      <SignInLogo />
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
          navigation.navigate("Home" && "Signin");
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
