import {checkAccess} from "../../utils/check-access.js";
import {selectUserRole} from "../../store/selectors";
import {ERROR} from "../../constants/error.js";
import {Error} from "../error/error.jsx";
import {useSelector} from "react-redux";


export const PrivateContent = ({children, access, serverError = null}) => {
    const userRole = useSelector(selectUserRole)
    const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED
    const error = serverError || accessError

    return error ? <Error error={error}/> : children
}