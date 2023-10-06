import React, {useState} from 'react';
import SignUpForm from "./SignUpForm";
import {SimplePage} from "../../../Components/shared/SimplePage";
import {Link, useNavigate} from "react-router-dom";


export type InitValues = {
    fullName: string
    password: string
    email: string
}

const SignUp = () => {

    const initialValue: InitValues = {
        fullName: "",
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