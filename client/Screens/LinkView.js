import React, { useContext } from "react";
import Text from "@kaloraat/react-native-text";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";

const LinkView = () => {
  const [state, setState] = useContext(AuthContext);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={Style.container}>
        <Text title center>
          LINK VIEW
        </Text>
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
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

export default LinkView;
