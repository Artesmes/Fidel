import React, {useState, useEffect} from 'react'

import {Colors} from './../components/styles'
// react navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens authentication
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import LoginRest from "./../screens/LoginRest"
import SignupRest from '../screens/SignupRest';

// screens client
import Welcome from './../screens/Welcome'

// screens restaurants
import WelcomeRest from './../screens/WelcomeRest'



// secureStore
import { getToken } from '../components/secureStore';
import { UserTokenContext } from '../components/userTokenContext';

const Stack = createNativeStackNavigator();
 

const RootStack = () => {
    const [token, setToken] = useState(null)
    useEffect(() => {
        getToken()
        .then((res) => {
            setToken(res)
            //console.log("token: : " + res)
        })
        .catch((err) => {
            console.log(err)
            setToken("")
        })
    }, [])
    return(
        <UserTokenContext.Provider value = {{token, setToken}}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
            >   
                {token == false ? 
                <>
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="LoginRest" component={LoginRest} />
                <Stack.Screen name="SignupRest" component={SignupRest} />
                </>
                :
                <><Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="WelcomeRest" component={WelcomeRest} /> 
                </>              

                }
            </Stack.Navigator>
        </NavigationContainer>
        </UserTokenContext.Provider>

    )
}

export default RootStack; 