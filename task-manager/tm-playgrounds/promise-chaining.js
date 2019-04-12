require('../src/db/mongoose')
const User = require('../src/models/user')

//5ca5d5337c026a10903aa70d

// User.findByIdAndUpdate('5ca5d5337c026a10903aa70d', { age: 88 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 88 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5ca5d5337c026a10903aa70d', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})