import styled from 'styled-components'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#E5E5E5",
    secondary: "#FFFFFF",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand:"#85BBFA",
    green: "#10B981",
    red: "#EF4444",
    black: "#000000",
    green: "#95E793"
}

const { primary, secondary, tertiary, darkLight, brand, green, red, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 215px;
    height: 170px;
`

export const SubTitle = styled.Text`
    padding-top: 20px;
    font-size: 25px;
    margin-bottom: 2px;
    color: ${tertiary};
    font-family: poppins-bold;
`

export const StyledFormArea = styled.View`
    width: 90%
`

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 10px;
    border: 3px solid black;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-vertical: 5px;
    height: 60px;
`

export const ButtonText = styled.Text`
    padding-top: 2px;
    color: ${black};
    font-size: 20px;
    font-family: poppins-bold;
`

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`

export const Line = styled.View`
    height: 1px;
    width: 100%;
    margin-vertical: 6px;
    background-color: black
`

export const ForgotPassword = styled.Text`
    text-align: center;
    font-family: poppins-bold;
    margin: 5px;
    color: ${brand}
`

export const ButtonsContainer = styled.View`
    flexDirection: row;
    padding-top: 3px;
    justifyContent: space-between;
`

export const CreateAccount = styled.TouchableOpacity`
    padding: 13px;
    background-color: ${green};
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const EspaceResto = styled.Text`
    padding-top: 2px;
    color: ${black};
    font-size: 12px;
    font-family: poppins-bold;
`
