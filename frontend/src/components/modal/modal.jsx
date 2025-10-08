import {selectModalData} from "../../store/selectors";
import {Button} from "../button/button.jsx";
import {useSelector} from "react-redux";
import styled from "styled-components";

const ModalContainer = ({className}) => {
    const {text, onConfirm, onCancel, isOpen} = useSelector(selectModalData)

    if (!isOpen)
        return null

    return (
        <div className={className}>
            <div className="overlay"></div>
            <div className="box">
                <h3>{text}</h3>
                <div className="buttons">
                    <Button width="120px" onClick={onConfirm}>Да</Button>
                    <Button width="120px" onClick={onCancel}>Отмена</Button>
                </div>
            </div>
        </div>
    )
}

export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .box {
    position: relative;
    width: 400px;
    margin: auto;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 8px;
    padding: 0 20px 20px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

`