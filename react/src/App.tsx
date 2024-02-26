import React, {useState, useEffect} from 'react'
import {Routes, Route, Navigate, BrowserRouter as Router} from "react-router-dom"
import {Root} from "./views/app-views/main-page"
import {ErrPage} from './ErrPage'
import ForgotPassword from './views/auth-views/forgot-password/ForgotPassword'
import {Projects} from './views/app-views/projects/Projects'
import {SignUpForm} from 'views/auth-views/signup/SignUpForm'
import { LoginForm } from 'views/auth-views/login/LoginForm'
import { Layout, Header } from 'Components'
import { CreateProject } from 'views/app-views/create-project'
import { CurrentProject } from 'views/app-views/currentProject'
import { getMe } from 'api/auth'
// import NotAuthPage from 'views/auth-views/not-auth-page'

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    getMe()?.then((originalUserInfo) => {
      if(originalUserInfo) setIsAuth(true)
    })
  }, [])

  return (
    <>
      <Router>
        <Header />
        <Routes>
              <Route index element={<Root />} />
              <Route path='login' element={<LoginForm />} />
              <Route path='register' element={<SignUpForm />} />
              <Route path='recover' element={<ForgotPassword />} />
              <Route path='create-project' element={<CreateProject />}/>
              <Route path='projects' element={<Projects />}/>
              {/* <Route path='not-auth' element={<NotAuthPage />}/> */}
              <Route path='current-project/:id' element={<CurrentProject />}/>
              <Route path='*' element={<ErrPage />} />
        </Routes>
      </Router>
    </>
  
  )
}

