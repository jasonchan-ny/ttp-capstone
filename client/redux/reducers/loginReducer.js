const loginReducer = (state=false, action) =>{
    switch(action.type){
        case 'LOG_IN':
            //TODO API call to check and log in user 
            //maybe somewhere else
            return true;
        case 'REGISTER':
            //TODO API call to register (maybe)
            return true;
        default:
            return state;
    }
};

export default loginReducer;