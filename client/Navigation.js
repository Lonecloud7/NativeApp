import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./context/contextAuth";
import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import Home from "./Screens/Home";
import Links from "./Screens/Links";
import Posts from "./Screens/Posts";
import ForgotPassword from "./Screens/ForgotPassword";
import Accounts from "./Screens/Accounts";
import Header from "./Components/auth/Nav/Header/Header";
import PostLinks from "./Screens/PostLinks";
import LinkView from "./Screens/LinkView";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [state, setState] = useContext(AuthContext);

  console.log("LOG IN ++++>", state);

  const authenticated = state && state.token !== "" && state.user != null;
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
    >
      {authenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Hip-Hop", headerRight: () => <Header /> }}
          />
          <Stack.Screen
            name="Links"
            component={Links}
            options={{
              title: "Hip-Hop",
              headerBackTitle: "Back",
              headerRight: () => <Header />,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Accounts}
            options={{ title: "Hip-Hop" }}
          />
          <Stack.Screen
            name="Post"
            component={Posts}
            options={{ title: "Post Links", headerRight: () => <Header /> }}
          />
          <Stack.Screen
            name="Linkview"
            component={LinkView}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Signin"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgotpassword"
            component={ForgotPassword}
            options={{ headerShown: true }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
