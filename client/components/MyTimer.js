import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Timer } from "react-native-stopwatch-timer";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import {
  toggleTimerStart,
  setTimerDuration,
  resetTimer,
} from "../redux/actions";

export default function MyTimer() {
  const dispatch = useDispatch();

  const { isTimerStart, timerDuration, isTimerReset } = useSelector(
    (state) => state.timer
  );

  const timerAlert = (time) => { 
    if(isTimerStart && time == '00:00:00:000'){
      alert('Timer done')
      dispatch(toggleTimerStart());
    }
  }

  return (
   <View style={styles.sectionStyle}>
      <Timer
        totalDuration={timerDuration}
        msecs
        start={isTimerStart}
        reset={isTimerReset}
        options={options}
        handleFinish={() => {}} //Broken function must pass empty function 
        getTime={time => timerAlert(time)}
      />
      <TouchableHighlight
        onPress={() => {
          dispatch(toggleTimerStart());
        }}
      >
        <Text style={styles.buttonText}>
          {!isTimerStart ? "START" : "STOP"}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          dispatch(resetTimer());
        }}
      >
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
