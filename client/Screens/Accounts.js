import React, { useContext, useState, useEffect } from "react";
import Text from "@kaloraat/react-native-text";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Logo from "../Components/auth/Logo";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Accounts = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    image: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    if (state) {
      const { name, email, role } = state.user;

      setCurrentUser({
        name,
        email,
        role,
      });
    }
  }, []);

  const LogOut = async () => {
    setState({
      token: "",
      user: null,
    });

    await AsyncStorage.removeItem("@auth");
  };

  const onChange = (text, name) => {
    // const { value } = event.target;
    setCurrentUser((prev) => {
      return { ...prev, [name]: text };
    });
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Logo></Logo>
      <Text title center>
        {currentUser.name}
      </Text>
      <Text medium center>
        {currentUser.email}
      </Text>
      <Text light center>
        {currentUser.role}
      </Text>

      <UserInput
        label={"Password"}
        name={"password"}
        autoCompleteType={"password"}
        keyBoardType="email-address"
        onChange={onChange}
      />

      <SubmitButton title="Submit" />
      <SubmitButton title="Log out" handleSubmit={LogOut} />
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

export default Accounts;
