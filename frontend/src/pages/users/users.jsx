import {deleteUserAsync, getRolesASync, getUsersAsync} from "../../api";
import {CLOSE_MODAL, openModal} from "../../store/actions";
import {LoaderDiv, PrivateContent} from "../../components";
import {checkAccess} from "../../utils/check-access.js";
import {selectUserRole} from "../../store/selectors";
import {SearchPanel, UsersTable} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {ROLE} from "../../constants";
import styled from "styled-components";

const UsersContainer = ({className}) => {
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const [roles, setRoles] = useState([])
    const [users, setUsers] = useState([])
    const userRole = useSelector(selectUserRole)
    const [isLoading, setIsLoading] = useState(true)
    const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            setIsLoading(false)
            return
        }
        Promise.all([
            getUsersAsync(),
            getRolesASync(),
        ])
            .then(([usersRes, rolesRes]) => {
                if (usersRes.error || rolesRes.error) {
                    setError(usersRes.error || rolesRes.error)
                    return
                }
                setUsers(usersRes)
                setRoles(rolesRes)
            })
            .finally(() => setIsLoading(false))
    }, [shouldUpdateUsers, userRole])

    const onUserRemove = (id) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) return
        dispatch(openModal({
            text: 'Удалить пользователя?',
            onConfirm: () => {
                deleteUserAsync(id).then(() => {
                    setShouldUpdateUsers(!shouldUpdateUsers)
                })
                dispatch(CLOSE_MODAL)
            },
            onCancel: () => dispatch(CLOSE_MODAL)
        }))
    }

    return (
        <PrivateContent serverError={error} access={[ROLE.ADMIN]}>
            <LoaderDiv isLoading={isLoading} className={className}>
                <SearchPanel/>
                <table className="table-fill">
                    <thead>
                    <tr>
                        <th><strong>Доступ</strong></th>
                        <th><strong>Имя</strong></th>
                        <th><strong>Номер</strong></th>
                        <th><strong>Дата регистрации</strong></th>
                        <th><strong>Роль</strong></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({id, name, number, registeredAt, roleId}) => (
                        <UsersTable
                            key={id}
                            id={id}
                            number={number}
                            name={name}
                            registeredAt={registeredAt}
                            roleId={roleId}
                            roles={roles}
                            onUserRemove={() => onUserRemove(id)}
                        />
                    ))}
                    </tbody>
                </table>
            </LoaderDiv>
        </PrivateContent>
    )
}

export const Users = styled(UsersContainer)`
  color: #fff;
  justify-content: space-between;
  width: 100%;
  flex: 1;

  .table-container {
    margin: 70px 0;
  }

  .table-fill {
    overflow: auto;
    margin: 10px auto;
    background-color: transparent;
    border-radius: 8px;
    border-collapse: collapse;
    max-width: 1000px;
    padding: 5px;
    width: 100%;
  }

  th {
    color: #fff;
    vertical-align: middle;
    font-size: 20px;
    padding: 14px;
    text-align: center;
  }

  tr {
    border-top: 1px solid #C1C3D1;
    color: #1439ec;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  }

  td {
    background: #ffffff;
    color: black;
    padding-bottom: 8px;
    padding-top: 8px;
    text-align: center;
    vertical-align: middle;
    font-weight: 375;
    font-size: 18px;
    border-bottom: 2px solid #d3d3d3;
  }

  tr:hover td {
    background: var(--accent-color);
    color: #FFFFFF;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd):hover td {
    background: var(--accent-color);
  }
`