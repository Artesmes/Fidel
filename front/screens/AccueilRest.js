import React, { useEffect, useContext } from "react";
import { Text, ScrollView, View } from "react-native";
import {
    ButtonTuchable,
    CalculatorButtonContainer,
    CalculatorContainer,
    DeleteContainer,
    Footer,
    HeaderContainer,
    InnerContainer,
    MainTitle,
    NumberDeleteContainer,
    NumberStyle,
    PriceContainer,
    PriceText,
    ProfileFooter,
    SecondaryTitle,
    StyledContainer,
    TitleCalculator,
  } from "./../components/styles2";

  import { FontAwesome, Ionicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const AccueilRest = ({navigation}) => {
    return(
        
        <InnerContainer>
            <KeyboardAvoidingWrapper>
            <>
            <StyledContainer>
                <HeaderContainer>
                <MainTitle>Espace restaurateur</MainTitle>
                <SecondaryTitle>Chez Kim Ly</SecondaryTitle>
                </HeaderContainer>
                <CalculatorContainer>
                    <TitleCalculator>Points de Fidélités:</TitleCalculator>
                    <PriceContainer>
                        <PriceText>Points</PriceText>
                    </PriceContainer>
                    <NumberDeleteContainer>
                        <CalculatorButtonContainer>
                            <CalculatorLoop />
                        </CalculatorButtonContainer>
                        <DeleteContainer></DeleteContainer>
                    </NumberDeleteContainer>
                </CalculatorContainer>

                <ScrollView></ScrollView>
            </StyledContainer>
                
                </>
                </KeyboardAvoidingWrapper>
                <Footer page = "home">
                    <ProfileFooter><Ionicons name = "home" size={50} color="black" /></ProfileFooter>
                    <ProfileFooter><FontAwesome name ="user-o" size={50} color="black" /></ProfileFooter>
                </Footer>
        </InnerContainer>
        
    )
}

export default AccueilRest


const CalculatorLoop= () => {
    var buttons = []
    for (var i = 1; i<10; i++){
        i%3 == 0 ? 
        buttons.push(<ButtonCalculator number={i} marginRight = {true} key={i}/>) :
        buttons.push(<ButtonCalculator number={i} marginRight = {false} key={i}/>)
    }
    return buttons;
}

const ButtonCalculator = ({number, marginRight}) => {
    if (marginRight) {
    return (
        <ButtonTuchable style = {{marginRight: 0}}>
            <NumberStyle>{number}</NumberStyle>
        </ButtonTuchable>
    )}
    return (
        <ButtonTuchable style = {{}}>
            <NumberStyle>{number}</NumberStyle>
        </ButtonTuchable>
    )
}
