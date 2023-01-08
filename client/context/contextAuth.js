import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import { onlineAPI } from "../Config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  //call Navigation

  const navigation = useNavigation();

  //config axios

  //Base URL default
  // axios.defaults.baseURL = onlineAPI
  const token = state && state.token ? state.token : "";

  //Base Header default
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  //Handle expired token or 401 error
  axios.interceptors.response.use(
    async function (response) {
      return response;
    },
    async function (error) {
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        await AsyncStorage.removeItem("@auth");

        setState({
          user: null,
          token: "",
        });

        navigation.navigate("Signin");
      }
    }
  );

  useEffect(() => {
    const loadLocalStorage = async () => {
      const data = await AsyncStorage.getItem("@auth");
      const JSdata = JSON.parse(data);
      const { user, token } = JSdata;
      setState({
        ...prev,
        user,
        token,
      });
      loadLocalStorage();
    };
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
