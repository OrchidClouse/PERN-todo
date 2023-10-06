import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {DefaultLogo} from "Components";
import { Button, Form, Input } from 'antd';
import {InitValues} from "./SignUp";
import { RegisterFormDTO } from 'api/auth.dto';
import * as Api from '../../../api'
import { setCookie } from 'nookies';

interface ISignUpFormProps {
    values: InitValues
    setValues: React.Dispatch<React.SetStateAction<InitValues>>
}

const SignUpForm: React.FC<ISignUpFormProps> = ({values, setValues}) => {

    let navigate = useNavigate();
    const routeChange = () =>{
        navigate('/projects-list');
    }
    const submitHandler = async (values: RegisterFormDTO) =>{
        try{
            const response = await Api.auth.register(values);
            const { token } = response;

            setCookie(null, '_token', token, {
                path: '/',
              })
        
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
        console.log(values)
        routeChange()

    }
    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setValues({
            ...values,
            [id]: value,
        })
    }

    return (
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <DefaultLogo width="w-32" margin="mt-10" />
                <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up
                </h2>
            </div>
            <Form
                className="mt-10 text-start sm:mx-auto sm:w-full sm:px-4 sm:max-w-sm"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={submitHandler}
                onFinishFailed={() => console.log('xyeta')}
                autoComplete="off"
            >

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email'}]}
                >
                    <Input className="w-32 md:w-44 lg:w-56" onChange={getData} value={values.email} />
                </Form.Item>
                <Form.Item
                    label="Fullname"
                    name="fullname"
                    rules={[{ required: true, message: 'Please input your fullname!' }]}
                >
                    <Input  className="w-32 md:w-44 lg:w-56" onChange={getData} value={values.fullName}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password className="w-32 md:w-44 lg:w-56" onChange={getData} value={values.password} />

                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className="bg-blue-500 w-24" type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default SignUpForm;