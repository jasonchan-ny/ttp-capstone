import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import FlatButton from '../components/button'
import { addExercise, clearExercises } from '../redux/actions'

export default function NewWorkoutScreen() {

    const { exercises } = useSelector(state => state.newWorkout)
    const dispatch = useDispatch();

    return (
        <View style = {styles.container} >
            <Text>{"\n"}</Text>
            <Text style = {styles.title}>Log a New Workout</Text>

            <FlatButton text = 'Add Exercise' onPress = {() => dispatch(addExercise())}/>
            <Text>{"\n"}</Text>
            <FlatButton text = 'Save Workout'/>
            <Text>{"\n"}</Text>
            <FlatButton text = 'Clear Workout' onPress = {() => dispatch(clearExercises())}/>
            <Text>{"\n"}</Text>

            <ScrollView style = {styles.card}>
                <Text>{"\n"}</Text>
                <TextInput
                style = {styles.workout}
                placeholder = {"Workout Name"}
                placeholderTextColor = {"rgba(0, 0, 0, .7)"}
                />
                <Text>{"\n"}</Text>
                
                <ScrollView style = {styles.exercise}>
                    {exercises}
                </ScrollView>
            </ScrollView>

            <Text>{"\n"}</Text>
            
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
        height: 80,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
    },
    exercise: {
        // height: 400,
        // borderWidth: 10,
        borderColor: 'lightgray',
        borderRadius: 5,
        // paddingHorizontal: 90
    },
    workout: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900'
    },
    card: {
        borderRadius: 12,
        backgroundColor: 'tomato',
        width: 320,
        // height: 280,
    }
  });
