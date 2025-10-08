import {Categories, Login, Platforms, Register, Event, NewEvent, Users} from "./pages";
import {Error, Footer, Header, Modal} from "./components";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "./store/actions";
import {ERROR} from "./constants";
import {useEffect} from "react";
import styled from "styled-components";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const currentUserDataJSON = sessionStorage.getItem('userData')
        if (!currentUserDataJSON) return
        const currentUserData = JSON.parse(currentUserDataJSON)

        dispatch(setUser({
            ...currentUserData,
            roleId: Number(currentUserData.roleId)
        }))
    }, [])

    return (
        <AppColumn>
            <Header/>
            <Page>
                <Routes>
                    <Route path="/" element={<Categories/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/new-event" element={<NewEvent/>}></Route>

                    <Route path="/platforms" element={<Platforms/>}></Route>
                    <Route path="/platforms/event/:id" element={<Event/>}></Route>
                    <Route path="/platforms/event/:id/edit" element={<NewEvent/>}></Route>

                    <Route path="/lessons" element={<div>уроки</div>}></Route>
                    <Route path="/parties" element={<div>квартирники</div>}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                    <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST}/>}></Route>
                </Routes>
            </Page>
            <Footer/>
            <Modal/>
        </AppColumn>
    )
}

const AppColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  margin: 0 auto;
`

const Page = styled.div`
  display: flex;
  width: 1400px;
  margin: 70px 0 20px;
  flex: 1;
`

export default App
