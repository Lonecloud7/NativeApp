import React, { useContext, useState, useEffect } from "react";
import Text from "@kaloraat/react-native-text";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Logo from "../Components/auth/Logo";
import { AuthContext } from "../context/contextAuth";
import Footer from "../Components/auth/Nav/Footer/Footer";
import UserInput from "../Components/auth/UserInput";
import SubmitButton from "../Components/auth/submitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import { onlineAPI } from "../Config";
import axios from "axios";

const Accounts = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    image: {
      url: "",
      public_id: "",
    },
    role: "",
    password: "",
  });

  const [uloadImg, setUploadImg] = useState("");

  useEffect(() => {
    if (state) {
      const { name, email, role } = state.user;

      setCurrentUser((prev) => {
        return {
          ...prev,
          name,
          email,
          role,
        };
      });
    }
  }, []);

  const { name, email, role, password, image } = currentUser;

  const LogOut = async () => {
    setState({
      token: "",
      user: null,
    });

    await AsyncStorage.removeItem("@auth");
  };

  const handleUpload = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Camera Acccess Is Required");
      return;
    } else {
      //get image from device
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      // console.log("PICKER RESULT ==>>", pickerResult);

      if (pickerResult.canceled === true) {
        return;
      } else {
        setUploadImg(pickerResult.assets[0].uri);
        //send to backend for upload

        try {
          const { data } = await axios.post(
            `${onlineAPI}/upload-image`,
            {
              image: pickerResult.assets[0].uri,
            }
            //Token and headers are sent as default in ContextAuth File
          );
          console.log("UPLOADED RESPONSE", data);
          //update user info in the context and async storage
        } catch (err) {
          console.log("IMAGE UPLOAD FAILED ==>>>", err);
        }
      }
    }
  };

  const onChange = (text, name) => {
    // const { value } = event.target;
    setCurrentUser((prev) => {
      return { ...prev, [name]: text };
    });
  };
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Logo>
        {image && image.url ? (
          <Image source={{ uri: image.url }} style={style.img} />
        ) : uloadImg ? (
          <Image source={{ uri: uloadImg }} style={style.img} />
        ) : (
          <TouchableOpacity onPress={handleUpload}>
            <FontAwesome5Icon name={"camera"} size={40} style={style.img} />
          </TouchableOpacity>
        )}
        {image && image.url ? (
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#f6f6f6",
              borderRadius: 100,
              alignSelf: "center",
            }}
            onPress={handleUpload}
          >
            <FontAwesome5Icon name={"camera"} size={25} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </Logo>

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
  img: { height: 190, width: 190, borderRadius: 100 },
});

export default Accounts;
