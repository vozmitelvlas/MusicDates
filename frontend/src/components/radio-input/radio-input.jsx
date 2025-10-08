import styled from "styled-components";

const RadioInputContainer = ({className, name, value, checked, onChange, label,  type}) => {
    return(
        <label className={className}>
            <input
                type={type ? type : 'radio'}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="gender-label">{label}</span>
        </label>
    )
}

export const RadioInput = styled(RadioInputContainer)`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .gender-label {
    width: ${({width}) => width};
    padding: 5px 16px;
    margin: 5px;
    border: 2px solid var(--simple-border);
    border-radius: 24px;
    font-size: 15px;
    font-weight: 500;
    color: #374151;
    background-color: white;
    min-width: 90px;
    text-align: center;
    transition: all 0.2s ease;
  }

  .gender-label:hover {
    border: 2px solid var(--accent-color)
  }

  input:checked + .gender-label {
    background-color: var(--accent-color);
    color: white;
  }
`