import React, { useState, useEffect } from "react";

//screens
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from './screens/Welcome'
//fonts
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import RootStack from "./navigators/RootStack";
import { Test } from "./test.js/test";
import AccueilRest from "./screens/AccueilRest";

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });


export default function App() {
  useEffect(() => {
    console.log("loading")
  }, [])
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <AccueilRest />;
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
