const initState = {
  isTimerStart: false,
  isTimerReset: false,
  timerDuration: 90000,
};

const timerReducer = (state = initState, action) => {
  switch (action.type) {
    case "START_STOP_TIMER":
      return {
        isTimerStart: !state.isTimerStart,
        timerDuration: state.timerDuration,
        isTimerReset: false,
      };
    case "RESET_TIMER":
      return {
        isTimerStart: false,
        timerDuration: 90000,
        isTimerReset: true,
      };
    case "SET_TIMER":
      return {
        isTimerStart: state.isTimerStart,
        timerDuration: action.payload,
        isTimerReset: false,
      };
    default:
      return state;
  }
};

export default timerReducer;
