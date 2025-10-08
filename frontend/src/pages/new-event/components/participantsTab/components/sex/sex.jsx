import {HighlightedText, PinkLayer, RadioInput, WhiteLayer} from "../../../../../../components";
import styled from "styled-components";

const SexContainer = ({className, sex, handleChange}) => {
    return (
        <WhiteLayer className={className}>
            <HighlightedText>Пол *</HighlightedText>
            <PinkLayer width="400px" className="sex">
                <RadioInput
                    name="sex"
                    value="any"
                    checked={sex === "any"}
                    onChange={handleChange}
                    label="Все"
                />
                <RadioInput
                    name="sex"
                    value="male"
                    checked={sex === 'male'}
                    onChange={handleChange}
                    label="Мужской"
                />
                <RadioInput
                    name="sex"
                    value="female"
                    checked={sex === 'female'}
                    onChange={handleChange}
                    label="Женский"
                />
            </PinkLayer>
        </WhiteLayer>
    )
}

export const Sex = styled(SexContainer)`

  .sex {
    display: flex;
    justify-content: center;
  }
`