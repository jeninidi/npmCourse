require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ca5e3737b8a7413c8fbe9a5').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed : false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})