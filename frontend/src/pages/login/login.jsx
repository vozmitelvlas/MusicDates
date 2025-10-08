import {Button, AuthFormError, Input, LoaderDiv} from "../../components";
import {loginFormSchema} from "../../schemes/auth-schemes.js";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginUserAsync, setUser} from "../../store/actions";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import styled from "styled-components";

const LoginContainer = ({className}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [serverError, setServerError] = useState("")
    const {register, reset, handleSubmit, formState} = useForm({
        defaultValues: {
            number: "",
            password: "",
        },
        resolver: yupResolver(loginFormSchema)
    })

    const onSubmit = (formState) => {
        setIsLoading(true)
        dispatch(loginUserAsync(formState)).then(user => {
            if(user){
                sessionStorage.setItem('userData', JSON.stringify(user))
                navigate("/")
            }
        }).catch((error) => {
            setServerError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const formError = Object.values(formState.errors)[0]?.message
    const errorMessage = formError || serverError

    return (
        <LoaderDiv isLoading={isLoading} className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Авторизация</h1>
                <div>
                    <div className="text">
                        Войдите в личный кабинет, чтобы
                        <div>записываться на события и создавать их.</div>
                    </div>
                    <div className="payload">
                        <Input type="tel" placeholder="Номер телефона"{...register('number')}/>
                        <Input type="password" placeholder="Пароль"{...register('password')}/>
                    </div>
                    <AuthFormError $margin="10px 0">{errorMessage}</AuthFormError>
                    <div className="help">
                        <span>Забыли пароль?</span>
                        <span onClick={() => navigate('/register')}>Регистрация</span>
                    </div>
                    <Button type="submit">Войти</Button>
                </div>
            </form>
        </LoaderDiv>
    )
}


export const Login = styled(LoginContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    height: 400px;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
  }

  h1 {
    margin-top: 0;
    color: #000;
  }

  .text {
    text-align: center;
    color: #9b9b9b;
    font-size: 18px;
    margin: 10px 0;
  }

  .payload {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .help {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`