import React, { useContext, useEffect, useState } from "react";
import Text from "@kaloraat/react-native-text";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { AuthContext } from "../context/contextAuth";
import { LinkContext } from "../context/link";
import Footer from "../Components/auth/Nav/Footer/Footer";
import { onlineAPI } from "../Config";
import axios from "axios";
import PreviewCard from "../Components/auth/Links/PreviewCard";

const Home = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);
  const [links, setLinks] = useContext(LinkContext);
  // const [currentLinks, setCurrentLinks] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const { data } = await axios.get(`${onlineAPI}/read-link`);
      setLinks(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("Failed to get Links");
    }
  };

  const handlePress = () => {
    navigation.navigate("Linkview");
  };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text title center>
        WELCOME MAH NIGGA
      </Text>
      <Text title center>
        {state && state.user.name}
      </Text>
      <ScrollView style={HomeStyle.container}>
        {links &&
          links.map((link) => {
            const { urlPreview, _id } = link;
            return (
              <PreviewCard
                {...urlPreview}
                key={_id}
                handlePress={handlePress}
                link={link}
              />
            );
          })}
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

const HomeStyle = StyleSheet.create({
  container: {
    // flex: 1,
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

export default Home;
