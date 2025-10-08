const mongoose = require('mongoose')
const validator = require('validator')
const roles = require('../constants/roles')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) =>
                validator.isMobilePhone(value, 'ru-RU') || validator.isMobilePhone(value, 'any'),
            message: 'Введите корректный номер телефона',
        },
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Пароль должен быть не менее 6 символов'],
    },
    photo: {
        type: String,
        default: '/user.svg',
        validate: {
            validator: (value) =>
                !value || validator.isURL(value, {require_protocol: false}) || value.startsWith('/'),
            message: 'Фото должно быть URL или путём',
        },
    },
    role: {
        type: Number,
        required: true,
        default: roles.USER,
    },
}, {timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User