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