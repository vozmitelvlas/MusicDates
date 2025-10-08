export const getTimeFormat = (date, separator = ":") => {
    const timeParts = [date.getHours(), date.getMinutes()]
    return timeParts.map(part => part.toString().padStart(2, '0')).join(separator)
}


export const getDateFormat = (date, separator = ".") => {
    let str = []
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear().toString().slice(-2)
    str.push(day, month, year)

    str.forEach((elem, index) => {
        str[index] = String(elem).padStart(2, '0')
    })

    return str.join(`${separator}`)
}

export const timeDurationToMinutes = ({days, hours, minutes}) => days * 1440 + hours + minutes

export const defineHours = (hours) => {
    if (hours % 100 >= 11 && hours % 100 <= 14) {
        return `${hours} часов `
    }
    const lastDigit = hours % 10
    if (lastDigit === 1) return `${hours} час `
    if ([2, 3, 4].includes(lastDigit)) return `${hours} часа `
    return `${hours} часов `
}
export const defineDays = (days) => {
    if (days % 100 >= 11 && days % 100 <= 14) {
        return `${days} дней `
    }
    const lastDigit = days % 10
    if (lastDigit === 1) return `${days} день `
    if ([2, 3, 4].includes(lastDigit)) return `${days} дня `
    return `${days} дней `
}
export const formatDuration = (duration) => {
    const days = duration.days ? defineDays(duration.days) : ''
    const hours = duration.hours ? defineHours(duration.hours) : ''
    const minutes = duration.minutes ? `${duration.minutes} минут` : ''

    return days + hours + minutes
}