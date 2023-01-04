import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import HeaderTabs from "./HeaderTabs";
import { AuthContext } from "../../../../context/contextAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [state, setState] = useContext(AuthContext);

  const signOut = async () => {
    setState({
      token: "",
      user: null,
    });
    await AsyncStorage.removeItem("@auth");

    console.log(state);
  };
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={Style.container}>
        <View style={Style.tabs}>
          <HeaderTabs
            title={"Log out"}
            icon={"sign-out-alt"}
            signOut={signOut}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({});

const SafeViewAndroid = StyleSheet.create({
  AndroidSafeArea: {},
});

export default Header;
