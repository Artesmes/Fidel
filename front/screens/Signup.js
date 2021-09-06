import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, KeyboardAvoidingView } from "react-native";
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
  ButtonsContainer2,
  Buttonconnexion2,
  TextButtonConnexion2,
  PageLogo2,
} from "./../components/styles";

//axios
import axios from 'axios'

// Formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

//test
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

//colors
const { brand } = Colors;

const Signup = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [signUpError, setSignupError] = useState({
    bool: false,
    data: ""
  })
  const [msgError, setMsgError] = useState("")

  useEffect(() => {
    if (signUpError.bool) {
      setMsgError(signUpError.data)
    }
  }, [signUpError])
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
          <SubTitle>Inscription</SubTitle>
          <Formik
            initialValues={{
              email: "",
              nom: "",
              prenom: "",
              codePostal: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              
              axios.post('http://10.0.2.2:5000/api/client/register', {
                prenom: values.prenom,
                nom: values.nom,
                email: values.email,
                password: values.password,
                codePostal: values.codePostal
              })
              .then(function (response) {
                console.log(response.data);
                if (response.data.errors){
                  setSignupError({bool: true, data: response.data.errors.email});
                } else {
                  navigation.navigate("Login")
                }
                
              })
              .catch(function (error) {
                console.log("Post error")
                console.log(error);
              });
              
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Adresse E-mail"
                  icon="mail"
                  placeholder="andyj@gmail.com"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  label="Nom"
                  icon="person"
                  placeholder="Dupont"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("nom")}
                  onBlur={handleBlur("nom")}
                  value={values.nom}
                />
                <MyTextInput
                  label="Prénom"
                  icon="person"
                  placeholder="Jean"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("prenom")}
                  onBlur={handleBlur("prenom")}
                  value={values.prenom}
                />
                <MyTextInput
                  label="Code postal"
                  icon="location"
                  placeholder="75001"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("codePostal")}
                  onBlur={handleBlur("codePostal")}
                  value={values.codePostal}
                  keyboardType="number-pad"
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
                <MyTextInput
                  label="Confirmer le mot de passe"
                  icon="lock"
                  placeholder="* * * * * * "
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>{msgError}</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>S'inscrire</ButtonText>
                </StyledButton>
                <ButtonsContainer2>
                  <Buttonconnexion2 onPress={() => navigation.navigate("Login")}>
                    <TextButtonConnexion2>Se connecter</TextButtonConnexion2>
                  </Buttonconnexion2>
                  <PageLogo2
                    resizeMode="cover"
                    source={require("./../assets/img/logo.png")}
                  />
                </ButtonsContainer2>
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

export default Signup;
