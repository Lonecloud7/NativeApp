import React, { useContext, useState } from "react";
import Text from "@kaloraat/react-native-text";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";

const Home = ({navigation}) => {
  const [state, useState] = useContext(AuthContext);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={HomeStyle.container}>
        <Text title center>
          WELCOME MAH NIGGA
        </Text>
        <Text title center>
          {state && state.user.name}
        </Text>
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "space-between",
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

export default Home;
