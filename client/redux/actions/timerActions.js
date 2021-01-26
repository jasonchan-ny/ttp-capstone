export const toggleTimerStart = () => {
    return {
        type: "START_STOP_TIMER"
    }
};

export const setTimerDuration = (time) => {
    return {
        type: "SET_TIMER",
        payload: time
    }
};

export const resetTimer = () => {
    return {
        type: "RESET_TIMER"
    }
}