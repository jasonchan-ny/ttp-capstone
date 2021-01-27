import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function SetCard() {
    let reps, weight;
    return (
        <View>
            <Text>Reps</Text>
            <TextInput 
                //style={}
                placeholder={"0"}
                placeholderTextColor={"rgba(0, 0, 0, .7)"}
                value={reps}
            />
            <Text>Weight</Text>
            <TextInput 
                //style={}
                placeholder={"0"}
                placeholderTextColor={"rgba(0, 0, 0, .7)"}
                value={weight}
            />
        </View>
    )
}
