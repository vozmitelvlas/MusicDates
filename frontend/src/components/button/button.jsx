import styled from "styled-components";

const variants = {
    default: {
        border: '1px solid var(--accent-color)',
        backgroundColor: '#fff',
        color: 'var(--accent-color)',
        backgroundColorOnFocus: 'var(--accent-color)'
    },
    light: {
        border: 'none',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        backgroundColorOnFocus: '#d30000',
    },
}

const ButtonContainer = ({children, className, variant, ...props}) => (
    <button className={className} {...props}>
        {children}
    </button>
)

export const Button = styled(ButtonContainer)`
  width: ${({width = '100%'}) => width};
  height: 36px;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: ${({variant}) => variants[variant]?.border || variants['default'].border};
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;

  background-color: ${({variant}) => variants[variant]?.backgroundColor || variants['default'].backgroundColor};
  color: ${({variant}) => variants[variant]?.color || variants['default'].color};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: ${({variant}) => variants[variant]?.backgroundColorOnFocus || variants['default'].backgroundColorOnFocus};
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
;
`


