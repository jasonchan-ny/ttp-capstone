const { model, Schema } = require ('mongoose')

const workoutSchema = new Schema({ 
    bodypart: String,
    sets: [{ 
        name: String, 
        reps: Number,
        weight: Number
    },
    ],
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
})

module.exports = model('Workout', workoutSchema)