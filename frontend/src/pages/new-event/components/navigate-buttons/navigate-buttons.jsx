import {Button} from "../../../../components";
import styled from "styled-components";
import {tabs} from "../../constants";

const NavigateButtonsContainer = ({className, activeTab, onNext, onPrev, isFull, isEditing}) => {
    const currentIndex = tabs.indexOf(activeTab)
    const isLast = currentIndex === tabs.length - 1
    const isFirst = currentIndex === 0

    return (
        <div className={className}>
            <Button
                variant="light"
                width="200px"
                onClick={onPrev}
                disabled={isFirst}
            >
                Назад
            </Button>
            <Button
                variant="light"
                width="200px"
                onClick={onNext}
                disabled={!isFull}
            >
                {isLast ? isEditing ? 'Сохранить' : 'Создать событие' : 'Продолжить'}
            </Button>
        </div>
    )
}

export const NavigateButtons = styled(NavigateButtonsContainer)`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: right;
`
