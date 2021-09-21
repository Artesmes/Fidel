import styled from 'styled-components/native'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#F5F7FD", // or E5F7FD
    secondary: "#FFFFFF",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand:"#85BBFA",
    green: "#10B981",
    red: "#EF4444",
    black: "#000000",
    green: "#95E793",
    fidelColor: "#F48ADD",
}

const { primary, secondary, tertiary, darkLight, brand, green, red, black, fidelColor } = Colors;

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

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-color: grey;
`

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`



export const PageLogo = styled.Image`
    width: 215px;
    height: 170px;
`

export const SubTitle = styled.Text`
    textAlign: center;
    padding-top: 20px;
    font-size: 25px;
    margin-bottom: 2px;
    color: ${tertiary};
    color: ${fidelColor}
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
    margin-bottom: 12px;
    color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
    font-family: poppins-bold;
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
    font-family: poppins-bold;
    color: red;
`

export const Line = styled.View`
    height: 1px;
    width: 100%;
    margin-vertical: 6px;
    background-color: black
`
export const ForgotPasswordContainer = styled.TouchableOpacity``

export const ForgotPassword = styled.Text`
    text-align: center;
    font-family: poppins-bold;
    margin: 5px;
    color: ${brand}
`

export const ButtonsContainer = styled.View`
    flexDirection: row;
    padding-top: 3px;
    justifyContent: space-around;
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

export const ButtonsContainer2 = styled.View`
    flexDirection: row;
    padding-top: 3px;
    justifyContent: space-between;
    alignItems: center;
`

export const Buttonconnexion2 = styled.TouchableOpacity`
    margin-top: 7px
    padding: 10px;
    background-color: ${secondary};
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding-left: 20px;
    padding-right: 20px;

`
export const PageLogo2 = styled.Image`
    width: 70px;
    height: 70px;
`

export const TextButtonConnexion2 = styled.Text`
    color: #265994;
    font-size: 15px;
    font-family: poppins-bold;
`