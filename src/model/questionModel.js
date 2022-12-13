const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    description: String,
    image: {
        type: String,
        required: false
    },
      options: [
        {
            text: {
                type: String,
                required: true
            },
            
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
           
        }
    ],
    isDeleted:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Question', QuestionSchema)