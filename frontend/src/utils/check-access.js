export const checkAccess = (access, userRole) => access.includes(userRole)

export const checkOnOrganizer = (userId, organizerId) => userId && organizerId && userId === organizerId