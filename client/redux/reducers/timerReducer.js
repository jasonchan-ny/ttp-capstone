const timerReducer = (state = 60, action) => {
    switch(action.type){
        case 'DECREMENT':
            return state - 1;
        case 'SET_TIME':
            return action.payload;
        default:
            return state;
    }
};

export default timerReducer