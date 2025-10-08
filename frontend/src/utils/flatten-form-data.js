export function flattenFormData(obj, formData = new FormData(), parentKey = '') {
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue

        const value = obj[key]
        const propName = parentKey ? `${parentKey}[${key}]` : key

        if (value === null || value === undefined) {
            continue
        }

        if (typeof value === 'object' && !(value instanceof File)) {
            flattenFormData(value, formData, propName)
        } else {
            formData.append(propName, value)
        }
    }
    return formData
}