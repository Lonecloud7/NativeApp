import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Signin" component={SignIn} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );

  // return <SignIn />;
}
