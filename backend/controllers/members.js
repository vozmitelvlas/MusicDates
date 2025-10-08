const User = require("../models/User");
const Event = require("../models/Event");

async function addMember(eventId, memberId) {
    const member = User.findById(memberId)
    if (!member) {
        throw new Error('User not found')

    }

    await Event.findByIdAndUpdate(eventId, {$push: {members: memberId}})
    return member
}

async function deleteMember(eventId, memberId) {
    await Event.findByIdAndUpdate(eventId, {$pull: {members: memberId}})
}


module.exports = {
    addMember,
    deleteMember,
}