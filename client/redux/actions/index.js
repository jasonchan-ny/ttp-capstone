export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

export const setTime = (time) => {
    return {
        type: 'SET_TIME',
        payload: time
    }
};

export const login = () => {
    return {
        type: 'LOG_IN'
    }
}

export const register = () => {
    return {
        type: 'REGISTER'
    }
}

export const validLogin = (credentials) => {
    return {
        type: 'LOGIN_VALID',
        payload: credentials
    }
}

export const invalidLogin = () => {
    return {
        type: 'LOGIN_INVALID',
    }
}