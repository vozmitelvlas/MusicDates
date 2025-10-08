import {API_BASE_URL} from "../config";

export const getImageUrl = (path) => {
    if (path) {
        const cleanPath = path.trim()

        if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
            return cleanPath
        }

        return cleanPath.startsWith('/')
            ? `${API_BASE_URL}${cleanPath}`
            : `${API_BASE_URL}/uploads/${cleanPath}`
    }
}