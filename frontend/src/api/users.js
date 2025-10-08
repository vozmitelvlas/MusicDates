import {apiClient} from "../utils";

export const getUsersAsync = () =>
    apiClient('/users')
        .then(({data}) => {
            if (data)
                return data
        })

export const getRolesASync = () =>
    apiClient('/users/roles')
        .then(({data}) => {
            if (data)
                return data
        })

export const saveUserRoleAsync = (userId, roleId) =>
    apiClient(`/users/${userId}`, 'PATCH', {roleId})
        .then(({data}) => {
            if (data)
                return data
        })

export const deleteUserAsync = (id) =>
    apiClient(`/users/${id}`, 'DELETE')