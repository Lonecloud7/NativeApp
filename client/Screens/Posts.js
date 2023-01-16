import React, { useContext, useState } from "react";
import Text from "@kaloraat/react-native-text";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";
import SubmitButton from "../Components/auth/submitButton";
import PreviewCard from "../Components/auth/Links/PreviewCard";
import ogs from "@uehreka/open-graph-scraper-react-native";
import urlRegex from "url-regex";
import axios from "axios";
import { onlineAPI } from "../Config";
import { LinkContext } from "../context/link";

const Posts = ({ navigation }) => {
  const [links, setLinks] = useContext(LinkContext);
  const [state, setState] = useContext(AuthContext);
  const { user } = state;

  const [values, setValues] = useState({
    title: "",
    link: "",
    urlPreview: {},
  });
  const [loader, setLoader] = useState(false);

  const { title, link, urlPreview } = values;

  const handleChange = async (text, name) => {
    try {
      setLoader(true);
      setValues({ ...values, [name]: text });

      //use urlregex to handle onChange and seek out when .com is written
      if (urlRegex({ strict: false }).test(text)) {
        //use ogs to web scrape the meta data of a website
        ogs({ url: text }, (error, results, response) => {
          // console.log(error);
          // console.log(response);

          // console.log(results);
          if (results.success) {
            setValues((prev) => {
              return { ...prev, urlPreview: results };
            });
            setLoader(false);
          }
        });
      } else {
        setLoader(false);
      }
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  const handleSubmit = async () => {
    // console.log(title, link);
    setLoader(true);

    if (!title || !link) {
      alert("fill in requirements");
      return;
    } else {
      try {
        const { data } = await axios.post(`${onlineAPI}/create-link`, {
          link,
          title,
          urlPreview,
        });

        console.log("LINK SENT ===>", data);

        setLinks([data, ...links]);

        setTimeout(() => {
          alert("Link Posted!!");
          navigation.navigate("Home");
        }, 500);

        setLoader(false);
      } catch (err) {
        console.log("LINK FAILED ===>", err);
        setLoader(false);
      }
    }
  };
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView contentContainerStyle={style.container}>
        <Text large light center>
          Post Links Here
        </Text>
        <Text title center>
          {user && user.name}
        </Text>
        <TextInput
          style={style.input}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyBoardType={"default"}
          onChangeText={(text) => {
            handleChange(text, "link");
          }}
          value={link}
          placeholder={"Place URL Here"}
        />
        <TextInput
          style={style.input}
          autoCapitalize={"sentences"}
          autoCorrect={false}
          keyBoardType={"default"}
          onChangeText={(text) => {
            handleChange(text, "title");
          }}
          value={title}
          placeholder={"Place Title Here"}
        />
        <SubmitButton
          title={"Post"}
          loading={loader}
          handleSubmit={handleSubmit}
        />

        {
          <>
            <View>
              <PreviewCard {...urlPreview} />
            </View>
          </>
        }
        {/* <Text>{JSON.stringify(urlPreview, null, 4)}</Text> */}
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  content: {},
  input: {
    borderWidth: 2,
    borderColor: "grey",
    height: 50,
    margin: 20,
    borderRadius: 30,
    padding: 15,
    textAlign: "center",
  },
});

const SafeViewAndroid = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Posts;
