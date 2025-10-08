import {apiClient} from "../utils";

export const loadEventsAsync = () => apiClient('/events')
export const removeEventAsync = (id) =>
    apiClient(`/events/${id}`, 'DELETE')
