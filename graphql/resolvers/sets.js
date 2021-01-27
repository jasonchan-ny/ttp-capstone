const { AuthenticationError, UserInputError} = require('apollo-server')
const Workout = require('../../models/Workout')
const checkAuth = require('../../util/check-auth')
const workouts = require('./workouts')


module.exports = { 
    Mutation: { 
        createSet: async(_, {workoutId, name, reps, weight}, context) => { 
            const user = checkAuth(context)
            
            const workout = await Workout.findById(workoutId)

            if(workout){ 
                workout.sets.unshift({ 
                    name, 
                    reps, 
                    weight
                })
                await workout.save()
                return workout
            } else { 
                throw new UserInputError("Workout does not exist")
            }

/*
            const newSet = new Set({ 
                name,
                reps,
                weight
            })
            console.log("hello")
            const set = await newSet.save()
            return { 
                name:set.name, 
                id: set.id, 
                reps: set.reps,
                weight: set.weight
            };

         const workout = await Workout.findById(workoutId)

             if(workout){ 
               workout.set.unshift({ 
                    name, 
                    sets, 
                    reps
               }); await workout.save()
                return workout 
            }else throw new UserInputError('Workout does not exist')*/
       }    } 
 }