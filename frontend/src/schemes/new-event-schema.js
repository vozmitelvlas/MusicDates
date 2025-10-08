const validationRules = {
    description: [
        {field: "title", message: "Введите название события"},
        {field: "content", message: "Заполните описание"},
        {field: "skill", message: "Укажите навык"},
        {field: "location", message: "Укажите место проведения"}
    ],
    participants: [
        {field: "amountFrom", message: "Введите количество участников"},
        {field: "amountTo", message: "Введите количество участников"},
        {
            field: "ageFrom",
            message: "Укажите возрастное ограничение",
            skipIf: (data) => data.isAgeUnlimited
        },
        {
            field: "ageTo",
            message: "Укажите возрастное ограничение",
            skipIf: (data) => data.isAgeUnlimited
        },
        {
            field: "amountRange",
            message: "Максимальное количество участников должно быть больше минимального",
            validate: (data) => {
                const from = Number(data.amountFrom)
                const to = Number(data.amountTo)
                return !isNaN(from) && !isNaN(to) && to >= from
            }
        },
        {
            field: "ageRange",
            message: "Возраст «до» должен быть больше, чем «от»",
            validate: (data) => {
                if (data.isAgeUnlimited) return true
                const from = Number(data.ageFrom)
                const to = Number(data.ageTo)
                return !isNaN(from) && !isNaN(to) && to >= from
            }
        }
    ],
    time: [
        {field: "eventStartTimes", message: "Укажите начало события"},
        {
            field: "duration",
            validate: (data) => {
                const { days, hours, minutes } = data.duration
                return days > 0 || hours > 0 || minutes > 0
            }
        }
    ],
}

export const getValidationErrorsEventData = (tabData, activeTab) => {
    const rules = validationRules[activeTab]
    if (!rules) return []

    return rules
        .filter(rule => {
            if (rule.skipIf && rule.skipIf(tabData)) {
                return false
            }

            if (!rule.validate) {
                const value = tabData[rule.field]

                if (typeof value === 'string') {
                    return !value.trim()
                }

                if (Array.isArray(value)) {
                    return value.length === 0
                }

                return !value;
            }

            return !rule.validate(tabData)
        })
        .map(rule => ({
            field: rule.field,
            error: rule.message
        }))
}