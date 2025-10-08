const Event = require("../models/Event");
const PROJECT_ROOT = require("./path");
const fs = require('fs/promises');
const path = require("path");


module.exports = async (id) => {
    const event = await Event.findOne({ _id: id })
    if (!event) {
        throw new Error('Event did not find')
    }

    const photoPath = event.description?.photo

    if (photoPath && photoPath.startsWith('/uploads/')) {
        const filename = photoPath.split('/').pop()
        const filePath = path.join(PROJECT_ROOT, 'public', 'uploads', filename)

        try {
            await fs.unlink(filePath)
        } catch (err) {
            throw err
        }
    }
}
