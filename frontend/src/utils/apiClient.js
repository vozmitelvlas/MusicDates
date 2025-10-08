import {API_BASE_URL} from "../config";

const API_BASE_URL_API = API_BASE_URL + '/api'
export const apiClient = async (endpoint, method = 'GET', body = null, customHeaders = {}) => {
    const defaultOptions = {
        method: method.toUpperCase(),
        credentials: 'include',
        headers: {},
    }

    let finalBody = body

    if (body instanceof FormData) {
        finalBody = body
    } else if (body !== null) {
        defaultOptions.headers['Content-Type'] = 'application/json'
        finalBody = JSON.stringify(body)
    }

    defaultOptions.headers = {...defaultOptions.headers, ...customHeaders}

    if (body instanceof FormData) {
        delete defaultOptions.headers['Content-Type']
    }

    try {
        const response = await fetch(`${API_BASE_URL_API}${endpoint}`, {
            ...defaultOptions,
            body: finalBody
        })

        if (!response.ok) {
            throw await response.json().catch(() => ({}))
        }

        if (response.status === 204) {
            return null
        }

        return await response.json()
    } catch (error) {
        throw error
    }
}