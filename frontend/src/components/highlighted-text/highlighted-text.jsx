import styled from "styled-components";

export const HighlightedText = styled.div`
  font-weight: bold;
  margin: 10px 20px;
  font-size: ${({size = '24px'}) => size};
`