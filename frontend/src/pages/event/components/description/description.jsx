import {AvatarCard, HighlightedText, Img, PinkLayer, WhiteLayer} from "../../../../components";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectEventDescription} from "../../../../store/selectors/index.js";

const DescriptionContainer = ({className, content, organizer}) => {
    return (
        <div className={className}>
            <WhiteLayer className="description">
                <HighlightedText>Описание</HighlightedText>
                <PinkLayer>{content}</PinkLayer>
            </WhiteLayer>

            <div className="people">
                <WhiteLayer>
                    <HighlightedText>Организатор</HighlightedText>
                    <PinkLayer>
                        <AvatarCard name={organizer.name} img={
                            <Img src={organizer.photo} width="40px" height="40px"/>
                        }/>
                    </PinkLayer>
                </WhiteLayer>
                <WhiteLayer>
                    <HighlightedText>Участники</HighlightedText>
                    <PinkLayer className="members">
                        <AvatarCard name="Константин" img={
                            <Img src="/user.svg" width="40px" height="40px"/>
                        }/>
                        <AvatarCard name="Константин" img={
                            <Img src="/user.svg" width="40px" height="40px"/>
                        }/>
                        <AvatarCard name="Константин" img={
                            <Img src="/user.svg" width="40px" height="40px"/>
                        }/>
                        <AvatarCard name="Константин" img={
                            <Img src="/user.svg" width="40px" height="40px"/>
                        }/>
                        <AvatarCard name="Константин" img={
                            <Img src="/user.svg" width="40px" height="40px"/>
                        }/>
                        <AvatarCard name="Константин" img={
                            <Img src="/user.svg" width="40px" height="40px"/>
                        }/>
                    </PinkLayer>
                </WhiteLayer>
            </div>
        </div>
    )
}

export const Description = styled(DescriptionContainer)`
  display: flex;
  gap: 20px;

  .description {
    flex: 1;
    min-width: 0;
  }

  .people {
    display: flex;
    position: sticky;
    flex-direction: column;
    align-self: flex-start;
    gap: 20px;
    top: 70px;
    width: 300px;
  }

  .members {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`