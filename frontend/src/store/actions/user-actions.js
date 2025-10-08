import {apiClient} from "../../utils";
import {ACTION_TYPE} from "./action-type.js";

export const setUser = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user,
})

export const loginUserAsync = ({password, number}) => (dispatch) =>
    apiClient(`/login`, 'POST', {password, number})
        .then(({user, error}) => {
                if (error) {
                    throw Error(error)
                }
                dispatch(setUser(user))
                return user
            }
        )

export const registerUserAsync = (user) => (dispatch) =>
    apiClient('/register', 'POST', user)
        .then(({user, error}) => {
                if (error) {
                    throw Error(error)
                }
                dispatch(setUser(user))
                return user
            }
        )

export const logout = () => (dispatch) =>
    apiClient('/logout', 'POST').then(() =>
        dispatch({
            type: ACTION_TYPE.LOGOUT
        })
    )