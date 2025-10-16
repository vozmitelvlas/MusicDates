import {Category} from "./components";
import styled from "styled-components";

export const CategoriesContainer = ({className}) => {
    return (
        <div className={className}>
            <h1>Категории</h1>
            <div className="list">
                <Category src="/lessons.jpg" to={"/lessons"} className="not-active">Уроки музыки</Category>
                <Category src="/parties.jpg" to={"/parties"} className="not-active">Квартирники</Category>
                <Category src="/concerts.jpg" to={"/platforms"}>Музыкальные площадки</Category>
            </div>
        </div>
    )
}

export const Categories = styled(CategoriesContainer)`
  display: flex;
  flex-direction: column;
  width: 1350px;
  margin: 50px 0;
  
  .title {
    font-size: 32px;
    font-weight: bold;
  }

  .list {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }
  
  .not-active{
    opacity: 0.5;
    pointer-events: none;
    cursor: none;
  }
`