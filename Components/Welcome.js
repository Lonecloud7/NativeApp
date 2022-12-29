import React from "react";
import { View, Text } from "react-native";

const Welcome = ({text}) => {
  return (
    <View>
      <Text> Hello {text}</Text>
    </View>
  );
};

export default Welcome;
