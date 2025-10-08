import styled from "styled-components";

const ErrorContainer = ({error, className}) =>
    error && (
        <div className={className}>
            <h1>Ошибка</h1>
            <div>{error}</div>
        </div>
    )

export const Error = styled(ErrorContainer)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  color: #fff
`