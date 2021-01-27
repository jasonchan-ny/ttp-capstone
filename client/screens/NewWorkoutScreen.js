import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import FlatButton from '../components/button'
import { addExercise, clearExercises } from '../redux/actions'

export default function NewWorkoutScreen() {

    const { exercises } = useSelector(state => state.newWorkout)
    const dispatch = useDispatch();

    return (
        <View style = {styles.container} >
            <Text style = {styles.title}>Log a New Workout</Text>
            <TextInput
                style = {styles.woname}
                placeholder = {"Workout Name"}
                placeholderTextColor = {"rgba(0, 0, 0, .7)"}
            />
            <View style = {styles.routine}>
                {exercises}
            </View>
            <View style = {styles.buttons}>
                <FlatButton text = 'Add Exercise' onPress = {() => dispatch(addExercise())}/>
                <Text>{"\n"}</Text>
                <FlatButton text = 'Save Workout' />
                <Text>{"\n"}</Text>
                <FlatButton text = 'Clear Workout' onPress = {() => dispatch(clearExercises())}/>
            </View>
            
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
    },
    buttons: {

    }
  });
