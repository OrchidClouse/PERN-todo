import React, {useState} from 'react';
import SignUpForm from "./SignUpForm";
import {SimplePage} from "../../Shared/Constructor";
import {Link, useNavigate} from "react-router-dom";


export type InitValues = {
    username: string
    password: string
    email: string
}
const SignUp = () => {

    const initialValue: InitValues = {
        username: "",
        password: "",
        email: ""
    }
    const [values, setValues] = useState(initialValue)

    return (
        <>
            <SimplePage center title="Sign up">
                <SignUpForm values={values} setValues={setValues}/>
            </SimplePage>
        </>
    );
};

export default SignUp;