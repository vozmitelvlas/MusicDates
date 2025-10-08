import {HighlightedText, Input, PinkLayer, WhiteLayer} from "../../../../components";
import {LocationSelect} from "./components";
import {sanitizeContent} from "./utils";
import styled from "styled-components";
import {useState} from "react";

const DescriptionContainer = ({className, state, contentRef, setEvent}) => {
    const onFormStateChange = ({target}) => {
        setEvent(prevState => ({
            ...prevState,
            description: {
                ...prevState.description,
                [target.name]: target.value,
            }
        }))
    }
    const setContent = () => {
        const sanitizedContent = sanitizeContent(contentRef.current.innerHTML)
        setEvent(prevState => {
            if (prevState.description.content === sanitizedContent) {
                return prevState
            }
            return {
                ...prevState,
                description: {
                    ...prevState.description,
                    content: sanitizedContent
                }
            }
        })
    }

    const [photoPreview, setPhotoPreview] = useState('')
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        setEvent(prevState => ({
            ...prevState,
            photo: file,
        }))
        const objectUrl = URL.createObjectURL(file)
        setPhotoPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }

    return (
        <div className={className}>
            <WhiteLayer className="title">
                <HighlightedText>Заголовок *</HighlightedText>
                <Input
                    type="text"
                    name="title"
                    value={state.title}
                    onChange={onFormStateChange}
                    variant="light"
                    placeholder="Предлагаю..."
                />
            </WhiteLayer>

            <WhiteLayer>
                <HighlightedText>Описание *</HighlightedText>
                <p>Расскажите подробно о деталях</p>
                <PinkLayer
                    as="div"
                    ref={contentRef}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    height="300px"
                    onBlur={setContent}
                >
                    {state.content}
                </PinkLayer>
            </WhiteLayer>

            <WhiteLayer className="skill">
                <HighlightedText>Требуемый опыт *</HighlightedText>
                <Input
                    value={state.skill}
                    type="text"
                    name="skill"
                    onChange={onFormStateChange}
                    variant="light"
                />
            </WhiteLayer>

            <WhiteLayer>
                <HighlightedText>Место *</HighlightedText>
                <LocationSelect placeQuery={state.location} setEvent={setEvent}/>
            </WhiteLayer>

            <WhiteLayer>
                <HighlightedText>Фото</HighlightedText>
                <p>События с фото выглядят более привлекательными</p>
                <PinkLayer width="150px" height="150px"
                           $preview={photoPreview}
                           onClick={() => document.getElementById('photo-upload').click()}
                           className='photo'
                >
                    {!photoPreview && '+'}
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{display: 'none'}}
                    />
                </PinkLayer>
            </WhiteLayer>
        </div>
    )
}

export const DescriptionTab = styled(DescriptionContainer)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;

  .title, .skill {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;

    border: 2px dashed #ccc;
    border-radius: 8px;
    background-image: ${props => props.$preview ? `url(${props.$preview})` : 'none'};
    // background-image: ${(photoPreview) => `url(${photoPreview})`};
    background-size: cover;
    cursor: pointer;
  }
`