import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen } from '../screens';
import { View, Button, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, DynamicColorIOS } from 'react-native'


export default function MainNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen style = {styles.login} name = 'Login' component = {LoginScreen} />
            <Stack.Screen name = 'Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    login: {
        backgroundColor: '#00ced1',
        color: '#00ced1',
    }
})