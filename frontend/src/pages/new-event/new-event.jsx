import {DescriptionTab, ParticipantsTab, PriceTab, TimeTab, TabButtons, NavigateButtons} from "./components";
import {loadEventDataAsync, RESET_EVENT_DATA, saveEventDataAsync} from "../../store/actions";
import {useMatch, useNavigate, useParams} from "react-router-dom";
import {selectEvent, selectUserId} from "../../store/selectors";
import {getValidationErrorsEventData} from "../../schemes";
import {LoaderDiv, PrivateContent} from "../../components";
import {initialEventState} from "../../store/reducers";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {ROLE} from "../../constants";
import {tabs} from "./constants";
import styled from "styled-components";
import {apiClient} from "../../utils/index.js";

const NewEventContainer = ({className}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const contentRef = useRef(null)
    const [error, setError] = useState(null)
    const organizer = useSelector(selectUserId)
    const [isFull, setIsFull] = useState(false)
    const isCreating = !!useMatch('/new-event')
    const [isLoading, setIsLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('description')
    const isEditing = !!useMatch('/platforms/event/:id/edit')
    const [event, setEvent] = useState(initialEventState)


    useEffect(() => {
        if (isCreating) {
            dispatch(RESET_EVENT_DATA)
            setEvent(initialEventState)
            setIsLoading(false)
        } else {
            dispatch(loadEventDataAsync(id))
                .then(({data, error}) => {
                    setError(error)
                    setEvent(data)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [isCreating])

    useEffect(() => {
        const errors = getValidationErrorsEventData(event[activeTab], activeTab)
        errors.length ? setIsFull(false) : setIsFull(true)
    }, [event, activeTab])


    const continueOrCreate = async (offset) => {
        const currentIndex = tabs.indexOf(activeTab)
        const newIndex = currentIndex + offset
        if (newIndex === tabs.length) {
            dispatch(saveEventDataAsync({...event, organizer})).then(({id}) => {
                navigate(`/platforms/event/${id}`)
            })
        } else if (newIndex >= 0 && newIndex < tabs.length) {
            setActiveTab(tabs[newIndex])
            window.scrollTo(0, 0)
        }
    }
    const toNextTab = () => continueOrCreate(1)
    const toPrevTab = () => continueOrCreate(-1)
    const TabContent = (activeTab) => {
        switch (activeTab) {
            case 'description':
                return <DescriptionTab
                    activeTab={activeTab}
                    contentRef={contentRef}
                    state={event.description}
                    setEvent={setEvent}
                />
            case 'participants':
                return <ParticipantsTab
                    state={event.participants}
                    setEvent={setEvent}
                />
            case 'time':
                return <TimeTab
                    state={event.time}
                    setEvent={setEvent}
                />
            case 'price':
                return <PriceTab
                    state={event.price}
                    setEvent={setEvent}
                />
            default:
                return null
        }
    }

    return (
        <PrivateContent serverError={error} access={[ROLE.ADMIN, ROLE.USER]}>
            <LoaderDiv isLoading={isLoading} className={className}>
                <h1>Новое событие</h1>
                <TabButtons activeTab={activeTab}/>

                {TabContent(activeTab)}

                <NavigateButtons
                    onNext={toNextTab}
                    activeTab={activeTab}
                    onPrev={toPrevTab}
                    isFull={isFull}
                    isEditing={isEditing}
                />
            </LoaderDiv>
        </PrivateContent>
    )
}


export const NewEvent = styled(NewEventContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`