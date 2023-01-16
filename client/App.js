import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/contextAuth";
import { LinkProvider } from "./context/link";
import Navigation from "./Navigation";

export default function App() {
  // const [state, setState] = useContext(AuthContext);
  return (
    <NavigationContainer>
      <AuthProvider>
        <LinkProvider>
          <Navigation />
        </LinkProvider>
      </AuthProvider>
    </NavigationContainer>
  );

  // return <SignIn />;
}
