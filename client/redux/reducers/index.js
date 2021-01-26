import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    timer: timerReducer
})

export default rootReducer;