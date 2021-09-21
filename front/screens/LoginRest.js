import React, { useState, useEffect, useContext } from "react";
import { KeyboardAvoidingView, View, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
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
  ForgotPasswordContainer
} from "../components/styles";

// Formik
import { Formik } from "formik";

//axios
import axios from 'axios'

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

//colors
const { brand } = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

//securestore
import { getToken, setTokenStorage } from "../components/secureStore";

// user token context
import { UserTokenContext } from "../components/userTokenContext";



const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [loginError, setLoginError] = useState({
    bool: false,
    data: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  
  useEffect(() => {
    if (loginError.bool) {
      setErrorMsg(loginError.data)
    }
  })
  const {token, setToken} = useContext(UserTokenContext)
  

  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../assets/img/logo.png")}
        />
        <SubTitle>Espace restaurateurs</SubTitle>
        
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            
            axios.post('http://10.0.2.2:5000/api/rest/login', {
              email: "paul.waligora@hotmail.fr",
              password: "Polo343507"
            })
            .then(function (response) {
              console.log(response.data.token) //ASK
              
              if (response.data.errors) {
                setLoginError({bool: true, data: response.data.errors.email + response.data.errors.password})
              } else {
                  const TheToken = response.data.token
                  setTokenStorage(TheToken)
                  setToken(TheToken)
                  navigation.navigate("WelcomeRest")
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Adresse E-mail du restaurant"
                icon="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Mot de passe"
                icon="lock"
                placeholder="* * * * * * "
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>{errorMsg}</MsgBox>
              <StyledButton onPress = {handleSubmit}>
                <ButtonText>Connexion</ButtonText>
              </StyledButton>
              <ForgotPasswordContainer>
                <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
              </ForgotPasswordContainer>
              <Line />
              <ButtonsContainer>
                <CreateAccount onPress={() => navigation.navigate('SignupRest')}>
                  <EspaceResto>Créer un compte {"\n"} Restaurateur </EspaceResto>
                </CreateAccount>
                <CreateAccount onPress={() => navigation.navigate('Login')}>
                  <EspaceResto>Espace{"\n"}clients</EspaceResto>
                </CreateAccount>
              </ButtonsContainer>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
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
