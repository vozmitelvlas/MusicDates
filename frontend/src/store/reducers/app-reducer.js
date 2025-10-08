import {ACTION_TYPE} from "../actions/index.js";
import {act} from "react";

const initialAppState = {
    wasLogout: false,
    modal: {
        isOpen: false,
        text: '',
        onConfirm: () => {
        },
        onCancel: () => {
        },
    },
    errorMessage: ''
}

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGOUT:
            return {
                ...state,
                wasLogout: !state.wasLogout
            }
        case ACTION_TYPE.OPEN_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    ...action.payload,
                    isOpen: true
                }
            }
        case ACTION_TYPE.CLOSE_MODAL:
            return initialAppState

        case ACTION_TYPE.SET_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case ACTION_TYPE.CLEAR_ERROR:
            return initialAppState
        default:
            return state
    }
}