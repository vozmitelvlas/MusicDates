import styled from "styled-components";

export const PinkLayer = styled.div`
  min-height: ${props => props.height || '40px'};
  width: ${props => props.width || ''};
  
  background-color: var(--light-accent-color);
  border-radius: 8px;
  margin: 10px 20px;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
  
  color: #4f4f4f;

  outline: none;
  cursor: ${(props) => (props.contentEditable ? 'text' : 'default')};
  white-space: pre-wrap;
  word-wrap: break-word;
  
  overflow-wrap: break-word;
  max-width: 100%;

  &[data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: #aaa;
    opacity: 0.7;
    pointer-events: none;
    display: inline-block;
  }

  &:focus {
    border: 2px solid var(--accent-color);
  }
`