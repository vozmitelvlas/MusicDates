import {getImageUrl} from "../../../../utils/get-image-url.js";
import {Button, Img} from "../../../../components";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

// В будующем вынести в ./компоненты и потом использовать для любых типов ивентов
const EventCardContainer = ({className, title, location, time, cost, id, photo}) => {
    const navigate = useNavigate()
    const imageUrl = getImageUrl(photo)
    const toEvent = () => navigate(`event/${id}`)
    return (
        <div className={className}>
            <div className="avatar-wrapper">
                <Img src={imageUrl || null} onClick={toEvent} className="avatar"/>
            </div>
            <div className="title" onClick={toEvent}>{title}</div>
            <div className="address">{location}</div>
            <div className="time">{time}</div>
            <div className="price">{cost}</div>
            <Button onClick={toEvent}>Подробнее</Button>
        </div>
    )
}

export const EventCard = styled(EventCardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 330px;
  height: 450px;
  margin: 10px;
  border: 2px solid var(--simple-border);
  border-radius: 5px;
  background-color: #fff;

  transition: box-shadow 0.3s ease;

  &:hover {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.58);
    -moz-box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.58);
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.58);
  }
  
  .avatar-wrapper{
    height: 200px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    //flex-shrink: 0;
    background-color: #f0f0f0
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .address {
    font-size: 12px;
    color: #b9b9b9;
  }

  .time {
    font-weight: bold;
  }

  .price {
    font-weight: bold;
    font-size: 18px;
  }
`