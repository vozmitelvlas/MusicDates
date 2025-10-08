import {HighlightedText, PinkLayer} from "../../../../../../components";
import styled from "styled-components";

const DurationContainer = ({className, duration, handleChange}) => {
    return(
        <>
            <HighlightedText>Длительность события *</HighlightedText>
            <PinkLayer width="350px" className={className}>
                <div className="duration-unit">
                    <p className="duration-label">Дни</p>
                    <select
                        value={duration.days}
                        name='days'
                        onChange={handleChange}
                        className="duration-select"
                    >
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>

                <div className="duration-unit">
                    <p className="duration-label">Часы</p>
                    <select
                        value={duration.hours}
                        name='hours'
                        onChange={handleChange}
                        className="duration-select"
                    >
                        {Array.from({ length: 24 }, (_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>

                <div className="duration-unit">
                    <p className="duration-label">Мин</p>
                    <select
                        name='minutes'
                        value={duration.minutes}
                        onChange={handleChange}
                        className="duration-select"
                    >
                        {Array.from({ length: 4 }, (_, i) => {
                            const minute = i * 15;
                            return <option key={minute} value={minute}>{minute}</option>;
                        })}
                    </select>
                </div>
            </PinkLayer>
        </>
    )
}

export const Duration = styled(DurationContainer)`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  max-width: 350px;

  .duration-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 70px;
  }

  .duration-label {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .duration-select {
    width: 80px;
    height: 44px;
    padding: 0 10px;
    border: 2px solid var(--simple-border);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    color: #111827;
    background-color: white;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .duration-select:hover {
    border-color: var(--simple-border);
    border: 2px solid var(--accent-color)
  }

  .duration-select:focus {
    outline: none;
  }
`