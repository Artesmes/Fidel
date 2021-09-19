import React from 'react'

import * as SecureStore from 'expo-secure-store';

export const setToken = (token) => {
    return SecureStore.setItemAsync('secure_token', token);
};

export const getToken = () => {
    return SecureStore.getItemAsync('secure_token');
};