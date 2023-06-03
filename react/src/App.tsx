import React from 'react'
import {Routes, Route} from "react-router-dom"
import Root from "./Routes/root"
import LoginForm from "./Routes/Login/LoginForm"
import ErrPage from './mainErrorPage'
import Layout from './Components/Layout'
import RecoverPassword from './Routes/RecoverPassword/RecoverPassword'
import CreateProject from './Routes/CreateProject/NewProject'
import SignUpForm from "./Routes/RegisterPage/SignUpValid";
import WorksPage from './Routes/ProjectsList/ProjectsList'
// import TestResponse from "./Routes/testResponse";

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Root />} />
                <Route path='login' element={<LoginForm />} />
                <Route path='signup' element={<SignUpForm />} />
                <Route path='recover' element={<RecoverPassword />} />
                <Route path='projects' element = {<CreateProject />} />
                <Route path='projectslist' element={<WorksPage/>}/>
                <Route path='*' element={<ErrPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
