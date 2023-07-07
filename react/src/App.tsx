import React from 'react'
import {Routes, Route} from "react-router-dom"
import Root from "./Routes/root"
import ErrPage from './mainErrorPage'
import Layout from './Components/Layout'
import RecoverPassword from './Routes/RecoverPassword/RecoverPassword'
import CreateProject from './Routes/CreateProject/NewProject'
import WorksPage from './Routes/ProjectsList/ProjectsList'
import SignUp from "./Routes/RegisterPage/SignUp";
import Login from "./Routes/Login/Login";
import SignUpForm from "./Routes/RegisterPage/SignUpForm";

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Root />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
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
