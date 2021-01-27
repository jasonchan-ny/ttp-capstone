const initState = {
  isStopwatchStart: false,
  isStopwatchReset: false,
};

const stopwatchReducer = (state = initState, action) => {
  switch (action.type) {
    case "START_STOP_STOPWATCH":
      return {
        isStopwatchStart: !state.isStopwatchStart,
        isStopwatchReset: false,
      };
    case "RESET_STOPWATCH":
      return {
        isStopwatchStart: false,
        isStopwatchReset: true,
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
