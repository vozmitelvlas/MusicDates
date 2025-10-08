import {ACTION_TYPE} from "../actions";

export const initialEventState = {
    id: "",
    organizer: "",
    description: {
        title: "",
        content: "",
        skill: "",
        location: "",
        photo: "",
    },
    participants: {
        amountFrom: "",
        amountTo: "",
        sex: "any",
        ageFrom: "",
        ageTo: "",
        isAgeUnlimited: false,
    },
    time: {
        eventStartTimes: [],
        duration: {
            days: 0,
            hours: 0,
            minutes: 0,
        }
    },
    price: {
        totalExpenses: "",
        individualExpenses: "",
    },
}

export const eventReducer = (state = initialEventState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_EVENT_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case ACTION_TYPE.RESET_EVENT_DATA:
            return initialEventState

        default:
            return state
    }
}