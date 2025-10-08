import {selectUserLocation, selectUserName, selectUserPhoto, selectUserRole} from "../../../../store/selectors";
import {AvatarCard} from "../../../avatar-card/avatar-card.jsx";
import {checkAccess} from "../../../../utils/check-access.js";
import {PinkLayer} from "../../../pink-layer/pink-layer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../../button/button.jsx";
import {logout} from "../../../../store/actions";
import {ROLE} from "../../../../constants";
import {Img} from "../../../img/img.jsx";
import {Popup} from "./components";
import styled from "styled-components";

const RightPanelContainer = ({className}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useSelector(selectUserLocation)
    const userName = useSelector(selectUserName)
    const userRole = useSelector(selectUserRole)
    const userPhoto = useSelector(selectUserPhoto)

    const onLogout = () => {
        dispatch(logout())
        sessionStorage.removeItem('userData')
    }
    const toLoginPage = () => navigate('login')
    const toRegisterPage = () => navigate('register')

    const isAdmin = checkAccess([ROLE.ADMIN], userRole)

    return (
        <div className={className}>
            {userName ? (
                <Popup position="center" width="300px" trigger={
                    <AvatarCard name={userName} className="red-text" img={
                        <Img src={userPhoto || "/user.svg"} icon/>
                    }/>
                }>
                    <PinkLayer className="for-client">
                        <AvatarCard name={userName} className="auth" img={
                            <Img src={userPhoto || "/user.svg"} width="40px" height="40px"/>
                        }/>
                        <Button>Профиль</Button>
                        <Button onClick={onLogout}>Выход</Button>
                    </PinkLayer>
                </Popup>
            ) : (
                <Popup position="center" width="300px" trigger={
                    <div className="red-text">
                        <AvatarCard name={userName} onClick={() => navigate("login")} img={
                            <Img icon src="/user.svg"/>
                        }/>
                        <div>Войти</div>
                    </div>
                }>
                    <div className="for-client">
                        <Button onClick={toLoginPage}>Войти в кабинет</Button>
                        <Button onClick={toRegisterPage}>Регистрация</Button>
                    </div>
                </Popup>
            )}
            <div>
                <Img src="/location.svg" icon/>
                <div className="location">{location ? location : "Местоположение"}</div>
            </div>
            <Popup position="right" trigger={<Img src="/menu.svg"/>}>
                <ul className="dropdown-list">
                    <li><Link to="profile">Профиль</Link></li>
                    <li><Link to="/"> Категории</Link></li>
                    {userName && (
                        <li><Link to="/new-event">Новое событие</Link></li>
                    )}
                    {isAdmin && (
                        <li><Link to="/users">Пользователи</Link></li>
                    )}
                </ul>
            </Popup>
        </div>
    )
}

export const RightPanel = styled(RightPanelContainer)`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0 30px;
  font-size: 14px;

  .for-client {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px;
    gap: 10px;
  }

  .red-text {
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  .red-text:hover {
    color: var(--accent-color);
  }

  .auth {
    display: flex;
    width: 100%;
    justify-content: left;
  }

  div {
    display: flex;
    align-items: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    margin-right: 5px;
  }

  .location {
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .location:hover {
    color: var(--accent-color);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  li {
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 200px;
    height: 45px;
    padding: 0 25px;
    transition: all .25s ease;
  }

  .dropdown-list a:hover {
    background: #FFCCCC;
  }
`