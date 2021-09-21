import React, { useEffect, useContext } from "react";
import {
  InnerContainer,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  Avatar,
} from "./../components/styles";


//secureStore
import { getToken, setTokenStorage } from "../components/secureStore";
import { UserTokenContext } from "../components/userTokenContext";

const Login = ({navigation}) => {
  useEffect(() => {
    getToken().then((response) => {
      console.log("token icii: " + response)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const {setToken} = useContext(UserTokenContext)
  return (
    <>
      <InnerContainer>
        <WelcomeContainer>
        <SubTitle>Bienvenue dans l'espace restaurateurs !</SubTitle>
          <StyledFormArea>
          <Avatar
          resizeMode="cover"
          source={require("./../assets/img/logo.png")}
        />
            <Line />
            <StyledButton onPress={() =>{
              setTokenStorage("").then((res) => {
                setToken("")
                navigation.push("Login");
              }).catch((err) => {
                console.log(err)
              })
              
            } }>
              <ButtonText>Se déconnecter</ButtonText>
            </StyledButton>
            
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};


export default Login;
