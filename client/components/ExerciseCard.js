import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import SetCard from './SetCard'

export default function ExcerciseCard() {
    const [sets, setSets] = useState([])
    return (
        <View>
            <TextInput 
                //style={}
                placeholder={"Exercise Name"}
                placeholderTextColor={"rgba(0, 0, 0, .7)"}
            />
            {sets}
            <TouchableOpacity onPress={() => setSets([...sets, <SetCard key={sets.length} setNumber={sets.length+1}/>])}>
                <Text>+</Text>
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
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
    routine: {
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 5,
    },
    woname: {
        textAlign: 'left'
    }
  });
