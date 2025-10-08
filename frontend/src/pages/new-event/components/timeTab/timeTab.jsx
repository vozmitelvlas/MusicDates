import {WhiteLayer} from "../../../../components";
import {DateTime, Duration} from "./components";
import {useEffect, useState} from "react";
import styled from "styled-components";


const TimeTabContainer = ({className, state, setEvent}) => {
    const [timeSlots, setTimeSlots] = useState(() => state.eventStartTimes?.length
        ? state.eventStartTimes.map(time => ({
            id: crypto.randomUUID(),
            startTime: time
        }))
        : [{id: crypto.randomUUID(), startTime: ''}]
    )

    useEffect(() => {
        const validTimes = timeSlots.map(slot => slot.startTime).filter(time => time)
        setEvent(prev => ({
            ...prev,
            time: {
                ...prev.time,
                eventStartTimes: validTimes
            }
        }))
    }, [timeSlots, setEvent])

    const handleChangeDuration = ({target}) => {
        setEvent(prevState => ({
            ...prevState,
            time: {
                ...prevState.time,
                duration:{
                    ...prevState.time.duration,
                    [target.name]: Number(target.value)
                }
            }
        }))
    }

    const handleTimeChange = ({ target }) => {
        const { id, value } = target
        setTimeSlots(prev =>
            prev.map(slot => (slot.id === id ? { ...slot, startTime: value } : slot))
        )
    }
    const removeTimeSlot = (id) => setTimeSlots(prev => prev.filter(slot => slot.id !== id))
    const addTimeSlot = () => setTimeSlots(prev => [...prev, { id: crypto.randomUUID(), startTime: '' }])

    return (
        <div className={className}>
            <div className="layers">
                <WhiteLayer>
                    <DateTime
                        timeSlots={timeSlots}
                        handleTimeChange={handleTimeChange}
                        addTimeSlot={addTimeSlot}
                        removeTimeSlot={removeTimeSlot}
                    />
                </WhiteLayer>

                <WhiteLayer>
                    <Duration
                        duration={state.duration}
                        handleChange={handleChangeDuration}
                    />
                </WhiteLayer>
            </div>
        </div>
    )
}

export const TimeTab = styled(TimeTabContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  .layers {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }


`