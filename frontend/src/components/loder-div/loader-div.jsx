import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  border: 5px solid var(--accent-color);
  border-radius: 50%;
  border-left-color: transparent;
  animation: ${spin} 1s infinite linear;
`

const LoaderDivContainer = ({ isLoading, children, className }) => {
    return (
        <>
            {isLoading ? (
                <LoaderSpinner />
            ) : (
                <div className={className}>
                    {children}
                </div>
            )}
        </>
    )
}

export const LoaderDiv = styled(LoaderDivContainer)``