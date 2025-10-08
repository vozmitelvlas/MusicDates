import styled from "styled-components";

const PopupContainer = ({className, children, trigger}) =>
    <div className={className}>
        {trigger}
        <div className="popup">
            {children}
        </div>
    </div>

export const Popup = styled(PopupContainer)`
  position: relative;
  display: inline-block;

  .popup {
    position: absolute;
    margin-top: 5px;
    top: 100%;
    left: ${({ position }) => position === 'left' ? '0' : 'auto'};
    right: ${({ position }) => position === 'right' ? '0' : 'auto'};
    left: ${({ position }) => position === 'center' ? '50%' : undefined};
    transform: ${({ position }) => position === 'center' ? 'translateX(-50%)' : 'none'};
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: ${({width = '200px'}) => width};
    border-radius: 8px;
    font-size: 14px;
    opacity: 1;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: auto;
  }

  &:hover .popup {
    opacity: 1;
    visibility: visible;
  }
`
