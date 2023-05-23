import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./Routes/root"
import ErrPage from "./mainErrorPage";
import LoginForm from "./Routes/Login/LoginForm";
import SignUpForm from "./Routes/Register/SignUpForm";
import Footer from './Routes/Components/Footer/Footer';
import Header from './Routes/Components/Header/Header';
import { createBrowserRouter, RouterProvider} from "react-router-dom";


const routes = [
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrPage />
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]


const router = createBrowserRouter(routes, {
  basename: "/"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Header />
        <RouterProvider router={router} />
      <Footer />
  </>
);

