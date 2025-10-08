import styled from "styled-components";

export const AuthFormError = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({children}) => children ? "#fcadad" : ""};
  height: 35px;
  font-size: 16px;
  padding: 10px;
  margin: ${props => props.$margin || 0};
`