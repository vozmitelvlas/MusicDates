import styled from "styled-components";

const variants = {
    default: {
        border: '1px solid var(--simple-border)',
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '4px',
    },
    light: {
        border: 'none',
        backgroundColor: 'var(--light-accent-color)',
        color: '#4f4f4f',
        borderOnFocus: '2px solid var(--accent-color);'
    },
    accent: {
        border: 'none',
        backgroundColor: 'var(--light-accent-color)',
        color: '#555',
        borderRadius: '0',
        borderBottom: "2px solid var(--accent-color)",
        width: "150px"
    },
}

const InputContainer = ({className, ...props}) =>
    <input className={className} {...props}/>

export const Input = styled(InputContainer)`
  width: ${({width, variant}) => width ? width : variants[variant]?.width};
  max-width: 100%;
  height: 36px;
  padding: 10px;
  margin: 0 20px;
  font-size: 16px;
  line-height: 1.5;
  outline: none;

  border-radius: ${({variant}) => variants[variant]?.borderRadius || variants['default'].borderRadius};
  background-color: ${({variant}) => variants[variant]?.backgroundColor || variants['default'].backgroundColor};
  border: ${({variant}) => variants[variant]?.border || variants['default'].border};
  color: ${({variant}) => variants[variant]?.color || variants['default'].color};
  border-bottom: ${({variant}) => variants[variant]?.borderBottom};

  &:focus {
    border: ${({variant}) => variants[variant]?.borderOnFocus};
  }
`