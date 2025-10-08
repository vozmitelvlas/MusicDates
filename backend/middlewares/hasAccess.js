module.exports = function (roles, customCheck = null) {
    return async function (req, res, next) {
        if (customCheck) {
            const allowed = await customCheck(req)
            if (allowed) {
                return next()
            }
        }

        const userRole = req.user.role
        if (roles.includes(userRole)) {
            return next()
        }
        
        return res.status(403).json({ error: 'Доступ запрещён' })
    }
}