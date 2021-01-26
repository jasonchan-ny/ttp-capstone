import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import timerReducer from './timerReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
    loginStatus: loginReducer,
    timer: timerReducer,
    user: userReducer
})

export default rootReducer;