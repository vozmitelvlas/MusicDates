import {Logo, RightPanel, Search} from "./components";
import styled from "styled-components";

const HeaderContainer = ({className}) => (
    <header className={className}>
        <Logo/>
        <Search/>
        <RightPanel/>
    </header>
)

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -2px 17px #000;
  z-index: 20;
  gap: 50px;

`