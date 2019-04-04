const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user.js')



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch(() => {

    })
})

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})