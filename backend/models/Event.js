const mongoose = require('mongoose')
const validator = require('validator')

const EventSchema = new mongoose.Schema({
        organizer: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        },
        description: {
            title: {
                type: String,
                required: true,
                trim: true,
            },
            content: {
                type: String,
                required: true,
            },
            skill: {
                type: String,
                required: true,
                trim: true,
            },
            location: {
                type: String,
                required: true,
                trim: true,
            },
            photo: {
                type: String,
                validate: {
                    validator: (value) => {
                        return value === '' || validator.isURL
                    },
                    message: 'Изображение должно быть корректным URL или путём',
                },
            },
        },
        participants: {
            amountFrom: {
                type: Number,
                required: true,
                min: 1,
            },
            amountTo: {
                type: Number,
                required: true,
                min: 1
            },
            sex: {
                type: String,
                enum: ['male', 'female', 'any'],
                default: 'any',
            },
            ageFrom: {
                type: Number,
                default: null,
            },
            ageTo: {
                type: Number,
                default: null,
            },
            isAgeUnlimited: {
                type: Boolean,
                default: false,
            },
            members: [{
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'User'
            }]
        },
        time: {
            eventStartTimes: {
                type: [
                    {
                        type: String,
                        required: true,
                        // match: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
                    },
                ],
                required: true,
                validate: {
                    validator: function (times) {
                        return Array.isArray(times) && times.length > 0
                    },
                    message: 'Должно быть хотя бы одно время начала события',
                },
            },
            duration: {
                days: { type: Number, min: 0, default: 0 },
                hours: { type: Number, min: 0, default: 0 },
                minutes: { type: Number, min: 0, default: 0 },
            },
        },
        price: {
            totalExpenses: {
                type: Number,
                min: 0,
            },
            individualExpenses: {
                type: Number,
                min: 0,
            },
        },
    }, {timestamps: true})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event