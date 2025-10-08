import {Img} from "../../../img/img.jsx";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LogoContainer = ({className}) => (
    <Link className={className} to="/">
        <Img src="/logo.svg" width="70px" height="70px"/>
        <div className="name">
            <div className="main-line">MusicDates</div>
            <div className="second-line">Обучайся реально</div>
        </div>
    </Link>
)

export const Logo = styled(LogoContainer)`
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 160px;
    height: 50px;
    margin-bottom: 6px
  }

  .main-line {
    position: absolute;
    font-size: 32px;
    font-weight: bold;
    bottom: 10px;
  }

  .second-line {
    position: absolute;
    font-size: 16px;
    color: #777777;
  }
`