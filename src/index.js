import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./Routes/root"
import ErrPage from "./mainErrorPage";
import LoginForm from "./Routes/Login/LoginForm";
import SignUpForm from "./Routes/Register/SignUpForm";
import Footer from './components/Footer';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root />,
  //   errorElement: <ErrPage />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginForm />
  // },
  // {
  //   path: "/signup",
  //   element: <SignUpForm />
  // },
  {
    path: "/",
    element: <Root />,
  },
  {
  path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </>
);

