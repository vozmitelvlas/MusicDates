const FileType = require("file-type");
const fs = require('fs');
const path = require("path");


module.exports = async (req) => {
    if (req.file) {
        const buffer = await fs.promises.readFile(req.file.path)
        const fileType = await FileType.fileTypeFromBuffer(buffer)

        if (!fileType || !['jpg', 'jpeg', 'png', 'webp'].includes(fileType.ext)) {
            await fs.promises.unlink(req.file.path)
            throw new Error('Incorrect format')
        }

        const finalName = `photo-${Date.now()}.${fileType.ext}`
        const finalPath = path.join('public/uploads', finalName)
        await fs.promises.rename(req.file.path, finalPath)

        return `/uploads/${finalName}`
    } else {
        return req.body.description.photo
    }
}

