import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
import Text from "@kaloraat/react-native-text";
// import { Divider } from "react-native-elements";

const defaultImageUrl =
  "https://via.placeholder.com/728x90.png?text=No+image+found";

const PreviewCard = ({
  ogTitle = "untitled",
  ogDescription = "no description found",
  ogUrl,
  ogImage = {
    url: defaultImageUrl,
  },
  handlePress = () => {},
  link = {}
}) => {
  return (
    <TouchableOpacity style={style.container} onPress={handlePress}>
      <Image source={{ uri: ogImage.url }} style={style.preview} />

      <View style={style.text}>
        <Text medium center color={"#f8f8f8"}>
          {ogTitle}
        </Text>
        <Text light center color={"#f8f8f8"}>
          {ogDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: "90%",
    height: 280,
    padding: 0,
    borderRadius: 30,
    backgroundColor: "#000000",
    alignSelf: "center",
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    margin: 10,
  },
  preview: {
    margin: 0,
    backgroundColor: "#d8d8d8",
    width: "100%",
    height: "75%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default PreviewCard;
