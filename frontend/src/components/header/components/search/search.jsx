import styled from "styled-components";
import {Input} from "../../../input/input.jsx";
import {Img} from "../../../img/img.jsx";

const SearchContainer = ({className}) => (
    <div className={className}>
        <Input placeholder="Поиск..."/>
        <Img src="/search.svg" width="22px" height="22px"/>
    </div>
)

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 800px;
  
  input{
    width: 100%;
  }

  img {
    position: absolute;
    right: 27px;
    top: 7px;
  }
`