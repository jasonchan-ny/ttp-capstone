import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import timerReducer from './timerReducer';
import userReducer from './userReducer';
import stopwatchReducer from './stopwatchReducer';
import newWorkoutReducer from './newWorkoutReducer';

const rootReducer = combineReducers({
    loginStatus: loginReducer,
    timer: timerReducer,
    user: userReducer,
    stopwatch: stopwatchReducer,
    newWorkout: newWorkoutReducer,
})

export default rootReducer;