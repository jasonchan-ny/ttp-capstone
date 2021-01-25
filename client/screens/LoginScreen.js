import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function LoginScreen() {
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');

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
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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