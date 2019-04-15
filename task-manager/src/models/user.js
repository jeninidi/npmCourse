const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
                }
            }
        },
        password: {
            type: String,
            required: true,
            minlenght: 7,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error('Password cannot contain the keyword password')
                }
            }
        },
        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be a positive number!')
                }
            }
        }
    }
)

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    console.log('Just before saving!')

    next()
})

const User = mongoose.model('User', userSchema )

// const me = new User({
//     name: '   Anne   ',
//     age: 32,
//     email: 'anne@ANNE.anNe',
//     password: 'dfjhfghdg2435'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

module.exports = User