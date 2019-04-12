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

const DeleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

DeleteTaskAndCount('5ca5e3737b8a7413c8fbe9a5', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})