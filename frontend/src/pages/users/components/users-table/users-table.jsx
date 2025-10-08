import {useState} from "react";
import styled from "styled-components";
import {saveUserRoleAsync} from "../../../../api";

const UsersTableContainer = ({className, id, roleId, number, registeredAt, name, roles, onUserRemove}) => {
    const [currentRole, setCurrentRole] = useState(+roleId)
    const onRoleChange = ({target}) => {
        setCurrentRole(+target.value)
        saveUserRoleAsync(id, +target.value)
    }

    return (
        <tr className={className}>
            <td>&#10008;</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{registeredAt}</td>
            <td>
                <select value={currentRole} onChange={onRoleChange}>
                    {roles.map(role => (
                        <option value={role.id} key={role.id}>{role.name}</option>
                    ))}
                </select>
            </td>
            <td onClick={() => onUserRemove(id)} className="action">&#10008;</td>
        </tr>
    )
}

export const UsersTable = styled(UsersTableContainer)`


  .action {
    cursor: pointer;
  }

  select {
    padding: 5px 10px;
    border: none;
    border-radius: 8px;
    background-color: var(--light-accent-color);
    cursor: pointer;
  }
`