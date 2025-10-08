import {Button, HighlightedText, Img, Input, PinkLayer} from "../../../../../../components";
import styled from "styled-components";

const DateTimeContainer = ({className, timeSlots, removeTimeSlot, addTimeSlot, handleTimeChange}) => {
    return (
        <div className={className}>
            <HighlightedText>Начало события *</HighlightedText>
            <div className="time-slots">
                {timeSlots.map(({id, startTime}, i) => (
                    <PinkLayer width="330px" key={id}>
                        <div className="time-slot-header">
                            <p>Вариант {i + 1}</p>
                            {timeSlots.length > 1 &&
                                <Img src="/delete.svg" icon onClick={() => removeTimeSlot(id)}/>}
                        </div>
                        <Input
                            type="datetime-local"
                            id={id}
                            value={startTime}
                            onChange={handleTimeChange}
                            variant="accent"
                            width="200px"
                        />
                    </PinkLayer>
                ))}
            </div>

            <div className="adding-button">
                <Button width="200px" onClick={addTimeSlot}>Добавить вариант</Button>
            </div>
        </div>
    )
}

export const DateTime = styled(DateTimeContainer)`

  .time-slots {
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;
  }

  .adding-button {
    display: flex;
    justify-content: right;
  }

  .time-slot-header {
    display: flex;
    justify-content: space-between;
  }
`