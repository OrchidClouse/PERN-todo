import React from 'react';
import {SimplePage} from "../../../Components/shared/SimplePage";
import {LoginForm} from "./LoginForm";


const Login = () => {
    return (
        <SimplePage center title="Sign in">
            <LoginForm />
        </SimplePage>
    );
};

export default Login;