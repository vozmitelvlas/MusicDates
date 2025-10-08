export const participantsAmountFormat = (participants) => {
    if (participants.amountFrom && participants.amountTo && participants.amountFrom !== participants.amountTo) {
        return `${participants.amountFrom} - ${participants.amountTo} чел.`
    }
    return `${participants.amountTo} чел.`
}

export const participantsSexFormat = (participants) => {
    switch (participants.sex) {
        case "male":
            return 'парни'
        case "female":
            return 'девушки'
        default:
            break
    }
}