import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
//screens
import Login from "./screens/Login";
import Signup from "./screens/Signup";
//fonts
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Login />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
