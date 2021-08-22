import React, { useState } from "react";
import { View } from "react-native";
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
  EspaceResto
} from "./../components/styles";

// Formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

//linear gradient


//colors
const { brand } = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../assets/img/logo.png")}
        />
        <SubTitle>Inscription</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
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
              <MsgBox>...</MsgBox>
              <StyledButton onPress = {() => console.log("test")}>
                <ButtonText>Connexion</ButtonText>
              </StyledButton>
              <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
              <Line />
              <ButtonsContainer>
                <CreateAccount>
                  <ButtonText>Créer un compte</ButtonText>
                </CreateAccount>
                <CreateAccount>
                  <EspaceResto>Espace{"\n"}restaurateurs</EspaceResto>
                </CreateAccount>
              </ButtonsContainer>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
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
