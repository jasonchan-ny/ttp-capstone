const initState = {username: 'username', password: 'password'}

const userReducer = (state=initState, action) => {
    switch(action.type){
        case('LOGIN_VALID'):
            return {
                username: action.payload.username,
                password: action.payload.password
            };
        case('LOGIN_INVALID'):
            return {
                username: '',
                password: ''
            };
        default:
            return state;
    }
}

export default userReducer;