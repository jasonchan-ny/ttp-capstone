import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import timerReducer from './timerReducer';
import userReducer from './userReducer';
import stopwatchReducer from './stopwatchReducer';

const rootReducer = combineReducers({
    loginStatus: loginReducer,
    timer: timerReducer,
    user: userReducer,
    stopwatch: stopwatchReducer,
})

export default rootReducer;