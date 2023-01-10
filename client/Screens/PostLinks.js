import React, { useContext, useState } from "react";
import Text from "@kaloraat/react-native-text";
import { SafeAreaView, View, StyleSheet, StatusBar, Image } from "react-native";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";
import SubmitButton from "../Components/auth/submitButton";

const PostLinks = ({ navigation }) => {
  const [state, useState] = useContext(AuthContext);
  const {user} = state
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={Style.container}>
        <Text title center>
          POST LINKS
        </Text>
        <Text title center>
          {user && user.name}
        </Text>
        <SubmitButton title={"Post"}/>
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  content: {},
});

const SafeViewAndroid = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default PostLinks;
