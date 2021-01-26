import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../redux/actions'

export default function LoginScreen({ navigation }) {
    const username = useSelector(state => state.user.username);
    const password = useSelector(state => state.user.password);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(login())
    }

    return (
        <View style={styles.container}>
            <Text>Login or Register Below!</Text>
            
            <TextInput 
                style={styles.input}
                onChangeText={user => setUsername(user)}
                value={username}
            />
            <TextInput
                style={styles.input}
                onChangeText={pass => setPassword(pass)}
                value={password}
            />

            {/* TODO Validate login and api call */}
            <TouchableOpacity onPress={handleClick}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {

    },
    register: {

    }
  });