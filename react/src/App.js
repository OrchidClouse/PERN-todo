import React from 'react'
import {Routes, Route} from "react-router-dom"
import Root from "./Routes/root"
import LoginForm from "./Routes/Login/LoginForm"
import SignUpForm from "./Routes/Register/SignUpForm"
import ErrPage from './mainErrorPage'
import Layout from './Components/Layout'
import RecoverPassword from './Routes/RecoverPassword/RecoverPassword'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Root />}/>
                <Route path='login' element={<LoginForm />}/>
                <Route path='signup' element={<SignUpForm />}/>
                <Route path='recover' element={<RecoverPassword />} />
                <Route path='*' element={<ErrPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
