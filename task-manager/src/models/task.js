const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const task = new Task({
//     description: 'Go for a run',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((e) => {
//     console.log('Error!', e)
// });

module.exports = Task