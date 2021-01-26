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

export const setUsername = (name) => {
    return {
        type: 'SET_USERNAME',
        payload: name
    }
}

export const setPassword = (pass) => {
    return {
        type: 'SET_PASSWORD',
        payload: pass
    }
}