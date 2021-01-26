import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      countdown: true,
      second: 0,
      intervalID: 0,
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.restart = this.restart.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  play() {
    let intervalID = setInterval(this.decreaseTimer, 1000);
    this.setState({intervalID: intervalID,});
  }
  
  pause() {
      clearInterval(this.state.intervalID)
  }

  restart(){
    this.pause();
    this.props.reset();
    this.setState({
      second: 0,
      countdown: true
    });
  }

  decreaseTimer() {
    switch (this.state.second) {
      case 0:
        if(this.props.minute === 0) {
          if(this.state.countdown) {
            this.setState({
              countdown: false
            });
            this.props.toggle(this.state.countdown);
          } 
          else {
            this.setState({
              countdown: true
            });
            this.props.toggle(this.state.countdown);
          }
        }
        else {
          this.props.update()
          this.setState({
            second: 59
          })
        }
        break;
        default:
          this.setState(prevState => {
            return{
              second: prevState.second - 1
            }
          })
        break;
      }
    }
    
    render() {
      return (
      <section>
        <section>
          <Text>Time Remaining</Text>
          <span>
            {this.props.minute}:
            {this.state.second === 0
              ? "00"
              : this.state.second < 10
              ? "0" + this.state.second
              : this.state.second}
          </span>
        </section>
        <section>
          <Text> <button onClick = {this.play}> Play </button> </Text>
          <button onClick = {this.pause}> <Text>Pause</Text> </button>
          <button onClick = {this.restart}> <Text>Restart</Text> </button>
        </section>
      </section>
    );
  }
}

export default Display;
