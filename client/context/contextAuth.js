import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onlineAPI } from "../Config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  //config axios

  axios.defaults.baseURL = onlineAPI

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
  )
};

export { AuthProvider, AuthContext };
