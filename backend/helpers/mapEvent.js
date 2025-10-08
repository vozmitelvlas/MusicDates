const mongoose = require("mongoose");
const mapUser = require("../helpers/mapUser");

module.exports = function (event) {
    return {
        description: {
            ...event.description
        },
        time: {
            ...event.time
        },
        price: {
            ...event.price
        },
        participants: {
            ...event.participants,
            members: event.participants.members.map(mapUser),
        },
        id: event.id,
        organizer: mapUser(event.organizer),
        createdAt: event.createdAt,
    }
}