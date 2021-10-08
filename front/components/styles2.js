import styled from 'styled-components/native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    mainBackground: "#F5F7FD",
    black: "#000000",
    fidelColor: "#F48ADD",
}

const {mainBackground, black, fidelColor} = Colors

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-bottom: 0;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${mainBackground};
    width: 100%;
    align-items: center;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${mainBackground};
`

export const MainTitle = styled.Text`
    font-size: 30px;
    font-family: poppins-bold;
    color: ${black};
    padding-top: 10px;
`

export const SecondaryTitle = styled.Text`
    font-size: 25px;
    font-family: poppins-regular;
    color: ${fidelColor};
    padding: 0px;
`

export const Footer = styled.View`
    font-size: 25px;
    font-family: poppins-bold;
    flexDirection: row;
    justifyContent: space-between;
    width: 80%;

`

export const ProfileFooter = styled.View`
    width: 80px;
    height: 80px;
    aspectRatio: 1;
    background-color: white;
    justifyContent: center;
    align-items: center;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    elevation: 20
`

export const HeaderContainer = styled.View`
    border: 2px solid black;
    justifyContent: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;

`

export const CalculatorContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 30px;
    
`

export const TitleCalculator = styled.Text`
    font-size: 25px;
    font-family: poppins-regular;

`

export const PriceContainer = styled.View`
    background-color: white;
    elevation: 20;
    border-radius: 10px;
    height: 60px;
    width: 90%;
    align-items: center;
    justifyContent: center;
`

export const PriceText = styled.Text`
    font-size: 20px;
    font-family: poppins-bold;
`

export const NumberDeleteContainer = styled.View`
    flexDirection: row;
    margin-top: 10px;
    alignItems: flex-end;
`

export const DeleteContainer = styled.TouchableOpacity`
    width: 25%;
    height: 60px;
    backgroundColor: white;
    elevation: 20;
    border-radius: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
`

export const CalculatorButtonContainer = styled.View`
    width: 75%;
    flexDirection: row;
    flexWrap: wrap;

`

export const ButtonTuchable = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    margin: 4%;
    background-color: white;
    border-radius: 15px;
    elevation: 20;
    align-items: center;
    justifyContent: center;
`

export const NumberStyle = styled.Text`
    font-size: 20px;
    font-family: poppins-bold;
`
