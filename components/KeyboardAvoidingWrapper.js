import React from 'react'

//keyboard avoiding view
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedBack, Keyboard } from 'react-native';

const keyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <ScrollView>
                <TouchableWithoutFeedBack onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedBack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default keyboardAvoidingWrapper;
KeyboardAvoidingWrapper