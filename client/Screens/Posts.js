import React, { useContext, useState } from "react";
import Text from "@kaloraat/react-native-text";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";
import SubmitButton from "../Components/auth/submitButton";

const Posts = ({ navigation }) => {
  const [state, useState] = useContext(AuthContext);
  const { user } = state;
  // const [loader, setLoader] = useState(false);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={Style.container}>
        <Text large light center>
          Post Links Here
        </Text>
        <Text title center>
          {user && user.name}
        </Text>
        <TextInput style={Style.input} />
        <SubmitButton title={"Post"} />
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
  input:{

  }
});

const SafeViewAndroid = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Posts;
