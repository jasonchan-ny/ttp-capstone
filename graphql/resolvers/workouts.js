const {AuthentificationError} = require('apollo-server')

const Workout = require('../../models/Workout')
const checkAuth = require('../../util/check-auth')

module.exports = { 
   Query: { 
        async getWorkouts(){ 
            try{ 
               const workout = await Workout.find()
               return workout
            } catch (err){ 
                throw new Error(err)
            }
        }, 
        async getWorkout(_, {workoutId}){ 
            try{ 
                const workout = await Workout.findById(workoutId)
                if(workout){ 
                    return workout
                } else { 
                    throw new Error('Post not found')
                }
            }catch(err){ 
                throw new Error(err)
            }
        }
    }, 
    Mutation: { 
        async createWorkout(_,{ bodypart }, context){ 
            const user = checkAuth(context)
            console.log(user)
            const newWorkout = new Workout({ 
                bodypart, 
                user: user.id
            })

            const workout = await newWorkout.save()

            return workout
        }, 
        async deleteWorkout(_, {workoutId}, context){ 
            const user = checkAuth(context)

            try{ 
                const post = await Workout.findById(workoutId)
                if (user.username === workout.username){ 
                    await workout.delete()
                    return 'Post deleted'
                } else {
                    throw new AuthentificationError('Action not allowed')
                }
            }catch (err){ 
                throw new Error(err)
            }
        }
    }
}