import {NavigateButtons} from "../navigate-buttons/navigate-buttons.jsx";
import {Sex, Amount, Age} from "./components";
import {useState} from "react";
import styled from "styled-components";

const ParticipantsTabContainer = ({className, state, setEvent}) => {
    const handleChange = ({target}) => {
        const { name, value, type, checked } = target
        const isCheckbox = type === 'checkbox'

        setEvent(prevState => {
            const participants = prevState.participants
            const newValue = isCheckbox ? checked : value

            const updatedParticipants = {
                ...participants,
                [name]: newValue
            }

            if (name === 'isAgeUnlimited' && checked) {
                updatedParticipants.ageFrom = ''
                updatedParticipants.ageTo = ''
            }

            return {
                ...prevState,
                participants: updatedParticipants
            }
        })
    }

    return (
        <div className={className}>
            <div className="layers">
                <Amount
                    amountFrom={state.amountFrom}
                    amountTo={state.amountTo}
                    handleChange={handleChange}
                />

                <Sex
                    sex={state.sex}
                    handleChange={handleChange}
                />

                <Age
                    ageTo={state.ageTo}
                    ageFrom={state.ageFrom}
                    isAgeUnlimited={state.isAgeUnlimited}
                    handleChange={handleChange}
                />
            </div>
        </div>
    )
}

export const ParticipantsTab = styled(ParticipantsTabContainer)`
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