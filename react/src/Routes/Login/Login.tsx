import React from 'react';
import {SimplePage} from "../../Shared/Constructor";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <SimplePage center title="Sign in">
            <LoginForm />
        </SimplePage>
    );
};

export default Login;