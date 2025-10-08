export const eventPriceFormat = (from, to, individual, total) => {
    if (total) {
        const min = individual + Math.round(total / to)
        const max = individual + Math.round(total / from)

        if (min !== max)
            return `от ${min} до ${max} Руб.`
    } else if (individual) {
        return `${individual} Руб.`
    } else {
        return 'Бесплатно'
    }
}