import {eventPriceFormat} from "../../utils";
import {LoaderDiv} from "../../components";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {EventCard} from "./components";
import {loadEventsAsync} from "../../api/event.js";

const PlatformsContainer = ({className}) => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadEventsAsync()
            .then(({data}) => setEvents(data))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <LoaderDiv isLoading={isLoading} className={className}>
            <h1>Музыкальные площадки в Санкт-Петербурге</h1>
            <div className="special-panel"></div>
            <div className="list">
                {events.map(({
                                 id,
                                 participants: {amountFrom, amountTo},
                                 description: {title, location, photo},
                                 time: {eventStartTimes},
                                 price: {totalExpenses, individualExpenses}
                             }) => (
                    <EventCard
                        key={id}
                        id={id}
                        title={title}
                        location={location}
                        time={eventStartTimes[0]}
                        cost={eventPriceFormat(amountFrom, amountTo, individualExpenses, totalExpenses)}
                        photo={photo}
                    />
                ))}
            </div>
        </LoaderDiv>
    )
}

export const Platforms = styled(PlatformsContainer)`
  display: flex;
  flex-direction: column;
  width: 1500px;

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .special-panel {
    border: 2px solid var(--simple-border);
    margin: 10px;
    height: 60px;
    background-color: #fff;
    border-radius: 5px;
  }
`