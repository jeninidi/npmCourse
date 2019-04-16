const express = require('express')
const mongoose = require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//disables get requests

// app.use((req, res, next) => {
//     // console.log(req.method, req.path)
//     // next()
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//disables all requests - way 1
// app.use((req, res, next) => {
//     // console.log(req.method, req.path)
//     // next()
//     if (req.method === 'GET' || req.method === 'POST' || req.method === 'PATCH' || req.method === 'DELETE') {
//         res.status(503).send('Maintainance in progress, please try again later!')
//     } else {
//         next()
//     }
// })

//disables all requests - way 2
// app.use((req, res, next) => {
//     res.status(503).send('Maintainance in progress, try again later!')
// })

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



const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'dummy' }, 'thisismynewcourse')
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}
myFunction() 