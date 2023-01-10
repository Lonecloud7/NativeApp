import React from "react";
import { useState, useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import axios from "axios";
// import { Text } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import SignInLogo from "../Components/auth/signInLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/contextAuth";
import { onlineAPI } from "../Config";

const ForgotPassword = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);
  const [values, setValues] = useState({
    email: "okeke.dumaga@gmail.com",
    password: "",
    resetCode: "",
  });
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const { email, password, resetCode } = values;

  const onChange = (text, name) => {
    setValues((prev) => {
      return { ...prev, [name]: text };
    });

    console.log(values);
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!email) {
      alert("Email Is Required");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`${onlineAPI}/forgot-password`, {
        email,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("RESET PASSWORD RESPONSE ===>>", data);
        alert("Reset code in your email homie");
        // setValues({ ...values, email: "" });
        setVisible(true);
      }
    } catch (err) {
      console.log(err);
      alert("Error reset code failed to send");
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${onlineAPI}/reset-password`, {
        email,
        password,
        resetCode,
      });
      console.log("PASSWORD RESET ==>", data);

      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        alert("Password Reset! Nice One My G!");
        navigation.navigate("Signin");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Password Reset Failed");
    }
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <SignInLogo />

      {visible ? (
        <Text large center>
          RESET CODE SENT TO {email}
        </Text>
      ) : (
        <>
          <Text title center>
            FORGOT YOUR PASSWORD?
          </Text>
          <Text mediun center>
            No Problem, We Got You Homie!
          </Text>
        </>
      )}

      {visible ? (
        <>
          <UserInput
            label={"New Password"}
            name={"password"}
            value={password}
            onChange={onChange}
            autoCompleteType="password"
            secureTextEntry={true}
          />

          <UserInput
            label={"Reset Code"}
            name={"resetCode"}
            value={resetCode}
            onChange={onChange}
            autoCompleteType="password"
          />
        </>
      ) : (
        <UserInput
          label={"Email"}
          name={"email"}
          value={email}
          onChange={onChange}
          autoCompleteType={"email"}
          keyBoardType="email-address"
        />
      )}

      <SubmitButton
        title={visible ? "Reset Password" : "Send Reset Code"}
        handleSubmit={visible ? handlePasswordReset : handleSubmit}
        loading={loading}
        loadingText={"Chill Mah Nigga..."}
      />

      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}

      <Text small center>
        Remember Your Password?
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
      </Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
  },
});

export default ForgotPassword;
