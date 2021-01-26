import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator';

export default function () {
    let loggedIn = useSelector(state => state.loginStatus);

    return (
        <NavigationContainer>
            {loggedIn ? (
            <MainNavigator/>
            ) : (
            <LoginNavigator/>
            )}
        </NavigationContainer>
    )
}
