const { gql } = require ('apollo-server')
//User with the ! is things we must return, do i need to return age, weight, height? 
//Having trouble setting up Workout with the exercise array 

module.exports = gql`
    type Workout{ 
        id: ID!
        bodypart: String! 
    }
    type User{ 
        id: ID!
        email: String!
        token: String!
        username: String! 
    } 
    input RegisterInput{ 
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    
    }
    type Query{ 
        getWorkouts: [Workout]
        getWorkout(workoutId: ID!): Workout
    }

    type Mutation{ 
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createWorkout(bodypart: String!): Workout!
        deleteWorkout(workoutId: ID!):Workout!
    }
`