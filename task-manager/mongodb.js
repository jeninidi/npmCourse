// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {
    MongoClient,
    ObjectID
} = require('mongodb')

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database..')
    }

    const db = client.db(databaseName)

    //  db.collection('users').insertOne({
    //      _id: id,
    //      name: 'Andrew',
    //      age: 26
    //  }, (error, result) => {
    //      if (error) {
    //          return console.log('Unable to insert user')
    //      }

    //      console.log(result.ops)
    //  })

    // db.collection('users').insertMany([{
    //             name: 'Jen',
    //             age: 28
    //         },
    //         {
    //             name: 'Anna',
    //             age: 55
    //         }
    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents')
    //         }

    //         console.log(result.ops)
    //     }

    // )

    // db.collection('tasks').insertMany([{
    //     description: 'Fold laundry',
    //     completed: false
    // }, {
    //     description: 'Do laundry',
    //     completed: true
    // }, {
    //     description: 'Write report',
    //     completed: false
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({
    //     _id: new ObjectID('5c9cc28323c85024e8f2db85')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })


    // db.collection('users').find({
    //     age: 26
    // }).toArray((error, count) => {
    //     console.log(count)
    // })


    // db.collection('tasks').findOne({
    //     _id: new ObjectID('5c9cb89af6ba063c84f4213d')
    // }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch task')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({
    //     completed: true
    // }).toArray((error, count) => {
    //     console.log(count)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5c9cac2a2298f9397ca066bd')
    // }, {
    //     $inc: {
    //         age: 30
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks'). updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch ((error) => {
    //     console.log(error)
    // })


    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('tasks').deleteOne({
    //     description: 'Do laundry'
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    

})