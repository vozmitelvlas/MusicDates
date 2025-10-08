import {useEffect, useState} from "react";
import styled from "styled-components";
import {Img} from "../img/img.jsx";


const FooterContainer = ({className}) => {
    const [city, setCity] = useState("")
    const [temp, setTemp] = useState(null)
    const [weather, setWeather] = useState("")

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&units=metric&lang=ru&appid=57d2308ba423646fbcca8e433ca57e55')
            .then((data) => data.json())
            .then(({name, main, weather}) => {
                setCity(name)
                setTemp(Math.round(main.temp))
                setWeather(weather[0].description)
            })
    }, [])

    return (
        <div className={className}>
            <div>
                <div  className="email-header">
                    <Img src="/email.svg" inactive icon/>
                    <div>E-mail</div>
                </div>
                <div className="email">music_dates@gmail.ru</div>
            </div>

            <div>
                <div>{city}, {new Date().toLocaleString('ru', {day: 'numeric', month: 'long'})}</div>
                <div>{temp} грудусов, {weather}</div>
            </div>
        </div>
    )
}

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px 2px 17px #000;
  font-weight: bold;
  font-size: 18px;
  
  .email-header{
    display: flex;
    align-items: center;
    gap: 10px;
  }

`