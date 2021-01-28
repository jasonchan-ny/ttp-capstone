import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import SetCard from './SetCard'

export default function ExcerciseCard() {
    const [sets, setSets] = useState([])
    return (
        <View>
            <TextInput 
                style = {styles.exercise}
                placeholder = {"Exercise Name"}
                placeholderTextColor = {"rgba(0, 0, 0, .7)"}
            />
            <View style = {styles.routine}>
                <Text style = {styles.text}>Set        </Text>
                <Text style = {styles.text}>Reps</Text>
                <Text style = {styles.text}>Weight</Text>
            </View>
            {sets}
            <TouchableOpacity onPress={() => setSets([...sets, <SetCard key={sets.length} setNumber={sets.length+1}/>])}>
                <Text style = {styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    exercise: {
        flexDirection: 'row',
        flex: 1,
        textAlign: "center",
        fontWeight: '800'
    },
    plus: {
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: 'tomato',
        borderColor: "white"
    },
    routine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'tomato',
    },
    text: {
        fontWeight: "500",
    },
});
