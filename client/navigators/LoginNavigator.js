import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, RegisterScreen } from '../screens';


export default function MainNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}