import React, {useState, useEffect} from 'react'
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom"
import {Root} from "./views/app-views/main-page"
import {ErrPage} from './ErrPage'
import ForgotPassword from './views/auth-views/forgot-password/ForgotPassword'
import WorksPage from './views/app-views/projects-list/ProjectsList'
import SignUp from "./views/auth-views/signup/SignUp";
import { Layout } from 'Components'
import Login from "./views/auth-views/login/Login";
import { CreateProject } from 'views/app-views/create-project'
import { PrivateRoute } from 'routes/PrivateRoute'

export const App = () => (
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Root />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<SignUp />} />
          <Route path='recover' element={<ForgotPassword />} />
          <Route path='project' element={<CreateProject />}/>
          <PrivateRoute path='projects-list' Component={WorksPage}/>
          <Route path='*' element={<ErrPage />} />
      </Route>
    </Routes>

)
