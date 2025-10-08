import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const loginFormSchema = yup.object().shape({
    number: yup.string()
        .required('Введите номер телефона')
        .matches(phoneRegExp, 'Неверно набран номер телефона'),

    password: yup.string()
        .required('Заполните пароль.')
        .matches(/[a-zA-Z]/i, 'Пароль должен состоять из латинских букв')
        .matches(/[\d]+/ui, 'Пароль должен содержать хотя бы одну цифру')
        .min(6, 'Неверный пароль. Минимум 6 символов')
        .max(30, 'Неверный пароль. Максимум 30 символов'),
})

export const registerFormSchema = yup.object().shape({
    name: yup.string()
        .required('Введите имя')
        .max(15, 'Неверное имя. Максимум 15 символов'),

    number: yup.string()
        .required('Введите номер телефона.')
        .matches(phoneRegExp, 'Неверно набран номер телефона'),

    password: yup.string()
        .required('Заполните пароль.')
        .matches(/[a-zA-Z]/i, 'Пароль должен состоять из латинских букв')
        .matches(/[\d]+/ui, 'Пароль должен содержать хотя бы одну цифру')
        .min(6, 'Неверный пароль. Минимум 6 символов')
        .max(30, 'Неверный пароль. Максимум 30 символов'),

    repeatPassword: yup.string()
        .required('Повторите набранный пароль')
        .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})
