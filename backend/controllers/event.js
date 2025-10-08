const Event = require('../models/Event');
const definePhotoPath = require("../utils/define-photo-path")
const deletePhoto = require("../utils/delete-photo-by-event-id")

async function addEvent(req) {
    const photoPath = await definePhotoPath(req)
    const createdEvent = await Event.create({
        ...req.body,
        description: {
            ...req.body.description,
            photo: photoPath,
        }
    })

    return createdEvent.populate([
        {
            path: 'participants.members',
            model: 'User'
        },
        {
            path: 'organizer',
            model: 'User',
        }
    ])
}

async function getEvent(id) {
    return Event.findById(id).populate([
        {
            path: 'participants.members',
            model: 'User'
        },
        {
            path: 'organizer',
            model: 'User',
        }
    ])
}

async function editEvent(id, req) {
    const photoPath = await definePhotoPath(req)

    return Event.findByIdAndUpdate(id, {
        ...req.body,
        description: {
            ...req.body.description,
            photo: photoPath,
        }
    }, {returnDocument: 'after'})
        .populate([
            {
                path: 'participants.members',
                model: 'User'
            },
            {
                path: 'organizer',
                model: 'User',
            }
        ])
}

async function deleteEvent(id) {
    try {
        await deletePhoto(id)
        return Event.deleteOne({_id: id})
    } catch (err) {
        throw err
    }
}

async function getEvents() {
    return Event.find()
}

module.exports = {
    addEvent,
    editEvent,
    deleteEvent,
    getEvent,
    getEvents,
}