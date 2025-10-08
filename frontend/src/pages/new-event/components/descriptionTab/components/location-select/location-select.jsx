import {Input} from "../../../../../../components";
import styled from "styled-components";
import {useState} from "react";

const LocationSelectContainer = ({className, placeQuery, setPlaceQuery, setEvent}) => {
    const [suggestions, setSuggestions] = useState([])
    const fetchSuggestions = async (value) => {
        if (value.length < 3) {
            setSuggestions([])
            return
        }
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "589d8220a464a4775b7370143e7583a7dafb46fe";

        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: placeQuery})
        }

        const data = await fetch(url, options).then(response => response.json())

        setSuggestions(data.suggestions)
    }
    const handleInputChange = async (e) => {
        const value = e.target.value
        setEvent(prevState => ({
            ...prevState,
            description: {
                ...prevState.description,
                location: value
            }
        }))
        // setPlaceQuery(prevState => ({
        //     ...prevState,
        //     location: value,
        // }))
        await fetchSuggestions(value)
    }

    const selectSuggestion = (suggestion) => {
        setEvent(prevState => ({
            ...prevState,
            description: {
                ...prevState.description,
                location: suggestion.value,
            }
        }))

        // setPlaceQuery(prevState => ({
        //     ...prevState,
        //     location: suggestion.value,
        // }))
        setSuggestions([])
    }


    return (
        <div className={className}>
            <Input
                type="text"
                name="location"
                variant="light"
                width="600px"
                value={placeQuery}
                onChange={handleInputChange}
                placeholder="Введите адрес..."
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    <div className="help-text">Выберите вариант или продолжите ввод</div>
                    {suggestions.map((s, i) => (
                        <li key={i} name="location" onClick={() => selectSuggestion(s)}>
                            {s.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export const LocationSelect = styled(LocationSelectContainer)`
  display: flex;
  flex-direction: column;
  position: relative;

  .suggestions-list {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 600px;
    padding: 0;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid var(--simple-border);
    top: 38px;
    left: 20px;

    li {
      width: 100%;
      list-style: none;
      padding: 6px 12px;
      transition: transform 0.2s ease;
    }

    li:hover {
      background-color: var(--light-accent-color);
      transform: translateY(-2px);
    }
  }

  .help-text {
    margin: 5px 10px;
  }
`