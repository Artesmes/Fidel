import React, { createContext } from "react";
import { Text, View, StyleSheet } from "react-native";

export function Test() {
  return (
    <ThemeContext.Provider>
      <View style={styles.background}>
        <Text style={styles.text}>
          <Text>Hello</Text>
        </Text>
      </View>
    </ThemeContext.Provider>
  );
}

const lightStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});

const darkStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
const styles = lightStyles;

const ThemeContext = React.createContext(lightStyles);
