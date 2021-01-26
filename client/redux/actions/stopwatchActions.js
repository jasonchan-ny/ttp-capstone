export const toggleStopwatchStart = () => {
  return {
    type: "START_STOP_STOPWATCH",
  };
};

export const setIsStopwatchReset = () => {
  return {
    type: "RESET_STOPWATCH",
  };
};
