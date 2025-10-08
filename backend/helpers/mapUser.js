module.exports = function (user) {
    return {
        id: user.id,
        name: user.name,
        photo: user.photo,
        city: user.city,
        roleId: user.role,
        number: user.number,
        registeredAt: user.createdAt
    }
}