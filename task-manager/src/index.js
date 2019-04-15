const express = require('express')
const mongoose = require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter) 
app.use(taskRouter)

//adding new router
const router = new express.Router()
router.get('/test', (req, res) => {
    res.send('This is from my other router')
})
app.use(router)

//listening on port
app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})



const bcrypt = require('bcrypt')
const myFunction = async() => {
    const password = 'Red12345'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345', hashedPassword)
    console.log(isMatch)
}
myFunction()