import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  RightIcon,
  Colors,
  MsgBox,
  Line,
  ForgotPassword,
  ButtonsContainer,
  CreateAccount,
  EspaceResto,
  ForgotPasswordContainer,
  WelcomeContainer,
  Avatar,
} from "./../components/styles";

// Formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

//colors
const { brand } = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

//secureStore
import { getToken } from "../components/secureStore";

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  useEffect(() => {
    getToken().then((response) => {
      console.log("token icii: " + response)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <InnerContainer>
        <WelcomeContainer>
        <SubTitle>Bienvenue !</SubTitle>
          <StyledFormArea>
          <Avatar
          resizeMode="cover"
          source={require("./../assets/img/logo.png")}
        />
            <Line />
            <StyledButton onPress={() =>{
              navigation.push("Login");
              getToken().then(token => console.log(token)).catch(err => console.log("error"));
            } }>
              <ButtonText>Se déconnecter</ButtonText>
            </StyledButton>
            
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={Colors.darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
