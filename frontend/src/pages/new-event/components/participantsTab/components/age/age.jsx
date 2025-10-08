import {HighlightedText, Input, PinkLayer, RadioInput, WhiteLayer} from "../../../../../../components";
import styled from "styled-components";

const AgeContainer = ({className, isAgeUnlimited, ageFrom, ageTo, handleChange}) => {
    return (
        <WhiteLayer className={className}>
            <HighlightedText>Возраст *</HighlightedText>
            <p>Рекомендуем указывать возрастное ограничение. Ответственность за участников моложе 18 лет несет
                организатор события.
            </p>
            <PinkLayer width="600px">
                <div className="age">
                    <Input
                        className={isAgeUnlimited && 'blurred'}
                        type="number"
                        name="ageFrom"
                        min={0}
                        value={ageFrom}
                        placeholder="От"
                        onChange={handleChange}
                        variant="accent"
                    />
                    <Input
                        className={isAgeUnlimited && 'blurred'}
                        type="number"
                        name="ageTo"
                        value={ageTo}
                        placeholder="До"
                        onChange={handleChange}
                        variant="accent"
                    />
                    <RadioInput
                        type="checkbox"
                        name="isAgeUnlimited"
                        label="Без ограничений"
                        width="170px"
                        onChange={handleChange}
                        checked={isAgeUnlimited}
                    />
                </div>
            </PinkLayer>
        </WhiteLayer>
    )
}

export const Age = styled(AgeContainer)`
  .age{
    display: flex;
    align-items: center;
  }
  .blurred {
    pointer-events: none;
    opacity: 0.6;
  }
`