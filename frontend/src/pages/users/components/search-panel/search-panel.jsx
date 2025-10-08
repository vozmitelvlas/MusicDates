import {Button, Img, Input} from "../../../../components";
import styled from "styled-components";

const SearchPanelContainer = ({className}) => {
    return(
        <div className={className}>
            <h1>Каталог пользователей</h1>
            <div className="panel">
                <Input placeholder="Номер..."/>

                <div className="date">
                    <div>Дата регистрации</div>
                    <div>
                        <input type="date"/>
                        <label>-</label>
                        <input type="date"/>
                    </div>
                </div>

                <Button width="150px" variant="light" className="search-button">
                    <Img src="/search.svg" icon margin="0 5px 0"/>
                    Поиск
                </Button>
            </div>
        </div>
    )
}

export const SearchPanel = styled(SearchPanelContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;


  .panel {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 310px;

    input {
      width: 130px;
      height: 28px;
      font-size: 18px;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid var(--border-color);
      border-radius: 0.4rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      margin: 5px 10px;
    }

    label {
      font-weight: 800;
    }
  }
`