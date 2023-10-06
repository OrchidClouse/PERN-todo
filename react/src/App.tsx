import React, {useState, useEffect} from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Root from "./views/app-views/main-page"
import ErrPage from './views/shared-views/mainErrorPage'
import ForgotPassword from './views/auth-views/forgot-password/ForgotPassword'
import CreateProject from './views/app-views/create-project/NewProject'
import WorksPage from './views/app-views/projects-list/ProjectsList'
import SignUp from "./views/auth-views/signup/SignUp";
import { Layout } from 'Components'
import Login from "./views/auth-views/login/Login";
import SignUpForm from "./views/auth-views/signup/SignUpForm";

const App = () => {

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Root />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<SignUp />} />
                <Route path='recover' element={<ForgotPassword />} />
                <Route path='projects' element = {<CreateProject />} />
                <Route path='projects-list' element={<WorksPage/>}/>
                <Route path='*' element={<ErrPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
