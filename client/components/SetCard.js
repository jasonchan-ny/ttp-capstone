import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

export default function SetCard({setNumber}) {
    let reps, weight;

    return (
    <View style = {styles.container}>
        <Text style = {styles.set}> {setNumber}</Text>
        <TextInput 
        style = {styles.rep}
        placeholder  = {"0"}
        // placeholderTextColor = {"rgba(0, 0, 0, .7)"}
        placeholderTextColor = {"white"}
        value = {reps}
        />
        <TextInput 
        style = {styles.weight}
        placeholder = {"0"}
        // placeholderTextColor = {"rgba(0, 0, 0, .7)"}
        placeholderTextColor = {"white"}
        value = {weight}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'tomato'
    },
    set: {
        // width: 70,
        width: 40,
    },
    rep: {
        // width: 80,
        borderRadius: 5,
        width: 80,
        backgroundColor: "rgba(0, 0, 0, .31)",
        color: "white",
    },
    weight: {
        // width: 40
        borderRadius: 5,
        width: 40,
        backgroundColor: "rgba(0, 0, 0, .31)",
        color: "white",
    },
  });
