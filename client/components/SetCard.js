import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

export default function SetCard({setNumber}) {
    let reps, weight;
    return (
        <View style = {{flexDirection: 'row'}}>
            <Text style = {styles.set}>Set #{setNumber}</Text>
            <Text> || </Text>
            <Text>Reps: </Text>
            <TextInput 
                //style={}
                placeholder  ={"0"}
                placeholderTextColor = {"rgba(0, 0, 0, .7)"}
                value = {reps}
            />
            <Text> || </Text>
            <Text>Weight: </Text>
            <TextInput 
                //style={}
                placeholder = {"0"}
                placeholderTextColor = {"rgba(0, 0, 0, .7)"}
                value = {weight}
            />

            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    set: {
        textAlign: "left",
        fontWeight: "bold",
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
    },
    exercise: {
        textAlign: "center"
    }
  });