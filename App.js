import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
        }}
      >
        THIS IS SO FUCKING AWESOME!!!!
      </Text>
      <StatusBar style="auto" />
      {console.log("this shit is fire")}
      {console.log("AM I ACTUALLY SURE")}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
