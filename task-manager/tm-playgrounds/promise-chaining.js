require('../src/db/mongoose')
const User = require('../src/models/user')

//5ca5d5337c026a10903aa70d

User.findByIdAndUpdate('5ca5d5337c026a10903aa70d', { age: 88 }).then((user) => {
    console.log(user)
    return User.countDocuments({age: 88 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})