import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {DefaultLogo} from "Components";
import { Button, Form, Input } from 'antd';
// import {InitValues} from "./SignUp";
import { RegisterFormDTO } from 'api/auth.dto';
import * as Api from '../../../api'
import { setCookie } from 'nookies';
import { useDispatch, useSelector } from 'react-redux';
// import { setUser } from 'store/users/usersActions';
import { RootState } from 'store';


// interface ISignUpFormProps {
//     fullName: string
//     password?: string
//     email: string
// }
// : React.FC<ISignUpFormProps>

export const SignUpForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        password: "",
        email: ""
    })
    
    const submitHandler = async (values: RegisterFormDTO) =>{
        try{
            const response = await Api.auth.register(values);
            const { token } = response;
            
            setCookie(null, '_token', token, {
                path: '/',
            })
            // dispatch(setUser(values))
            navigate('/')
        }
        catch(err){
            console.error(err)
        }
        navigate('/create-project');

    }
    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setValues({
            ...values,
            [id]: value,
            
        })
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div>
                {/* <DefaultLogo width="w-32" margin="mt-10" /> */}
                <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Зарегистрироваться
                </h2>
            </div>
            <Form
                className="flex justify-center items-center flex-col mt-10"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                style={{ maxWidth: 720 }}
                initialValues={{ remember: true }}
                onFinish={submitHandler}
                onFinishFailed={() => console.log('xyeta')}
                autoComplete="off"
            >

                <Form.Item
                    labelCol={{ span: 24 }}
                    label="Email"
                    name="email"
                    className=" w-full"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email'}]}
                >
                    <Input className="w-full" onChange={getData} value={values.email} />
                </Form.Item>
                <Form.Item
                className=" w-full"
                    labelCol={{ span: 24 }}
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input  className="w-full" onChange={getData} value={values.name}/>
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 24 }}
                    label="Password"
                    name="password"
                    className=" w-full"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password className="w-full" onChange={getData} value={values.password} />

                </Form.Item>

                <Form.Item>
                    <Button className="bg-blue-500" type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
