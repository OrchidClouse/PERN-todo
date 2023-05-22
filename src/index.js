import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./Routes/root"
import ErrPage from "./mainErrorPage";
import LoginForm from "./Routes/Login/LoginForm";
import SignUpForm from "./Routes/Register/SignUpForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrPage />,
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/signup",
    element: <SignUpForm />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

