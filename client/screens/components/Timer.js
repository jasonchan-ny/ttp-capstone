import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function Timer(props) {
    function increaseTimer() {
        if(props.sessionInterval === 60) {
            return;
        }
        props.increaseTimer();
    }

    function decreaseTimer() {
        if(props.sessionInterval === 1) {
            return;
        }
        props.decreaseTimer();
    }
    
    return(
    <section>
        <button onClick={increaseTimer}><Text>+</Text></button>
        {props.sessionInterval} <Text>Minutes</Text>
        <button onClick={decreaseTimer}><Text>-</Text></button>
    </section>
    );
}

export default Timer