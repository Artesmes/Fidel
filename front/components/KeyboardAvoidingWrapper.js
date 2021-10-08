import React from "react";
import { Colors } from "./styles";
import {
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
