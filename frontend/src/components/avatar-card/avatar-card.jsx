import styled from "styled-components";

const AvatarCardContainer = ({className, name, img}) => {
    return (
        <div className={className}>
            {img}
            <div>{name}</div>
        </div>
    )
}

export const AvatarCard = styled(AvatarCardContainer)`
  display: flex;
  align-items: center;
  gap: 5px;
  
  img {
    border-radius: 50%;
  }
`