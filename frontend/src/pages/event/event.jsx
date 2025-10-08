import {CLOSE_MODAL, loadEventDataAsync, openModal, RESET_EVENT_DATA} from "../../store/actions";
import {selectEvent, selectUserId, selectUserRole} from "../../store/selectors";
import {checkAccess, checkOnOrganizer} from "../../utils/check-access.js";
import {useNavigate, useParams} from "react-router-dom";
import {Description, EventHeader} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {eventPriceFormat} from "../../utils";
import {removeEventAsync} from "../../api";
import {useEffect, useState} from "react";
import {ROLE} from "../../constants";
import styled from "styled-components";
import {LoaderDiv} from "../../components/index.js";

const EventContainer = ({className}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)
    const roleId = useSelector(selectUserRole)
    const [isLoading, setIsLoading] = useState(true)
    const {description, time, price, participants, organizer} = useSelector(selectEvent)

    useEffect(() => {
        dispatch(RESET_EVENT_DATA)
        dispatch(loadEventDataAsync(id))
            .finally(setIsLoading(false))
    }, [])

    const onEventRemove = () => {
        dispatch(openModal({
            text: 'Удалить событие?',
            onConfirm: () => {
                removeEventAsync(id)
                    .then(() => navigate('/platforms'))
                dispatch(CLOSE_MODAL)
            },
            onCancel: () => dispatch(CLOSE_MODAL)
        }))
    }

    const isOrganizer = checkOnOrganizer(userId, organizer.id)
    const isAdmin = checkAccess([ROLE.ADMIN], roleId)

    return (
        <LoaderDiv isLoading={isLoading} className={className}>
            <EventHeader
                id={id}
                time={time}
                isAdmin={isAdmin}
                description={description}
                isOrganizer={isOrganizer}
                participants={participants}
                onEventRemove={onEventRemove}
                cost={eventPriceFormat(participants.amountFrom, participants.amountTo, price.individualExpenses, price.totalExpenses)}
            />
            <Description
                content={description.content}
                organizer={organizer}
            />
        </LoaderDiv>
    )
}

export const Event = styled(EventContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`