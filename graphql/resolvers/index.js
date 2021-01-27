const workoutsResolvers = require ('./workouts')
const usersResolvers = require ('./users')
const setsResolvers = require ('./sets')

module.exports = { 
    Query: { 
        ...workoutsResolvers.Query
    },
    Mutation: { 
        ...usersResolvers.Mutation,
        ...workoutsResolvers.Mutation, 
        ...setsResolvers.Mutation
    }
}