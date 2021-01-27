import React from 'react'

import ExcerciseCard from '../../components/ExerciseCard';

const newWorkoutReducer = (state={ exercises: [<ExcerciseCard/>] }, action) => {
    switch(action.type){
        case 'ADD_NEW_EXERCISE':
            return {
                exercises: [...state.exercises, <ExcerciseCard/>]
            }
        case 'CLEAR_NEW_EXERCISES':
            return {
                exercises: []
            }
        default:
            return state;
    }
}

export default newWorkoutReducer;