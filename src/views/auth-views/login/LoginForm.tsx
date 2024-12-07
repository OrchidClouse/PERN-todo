import React, { useEffect } from 'react';
import {Link,useNavigate} from "react-router-dom";
import {DefaultLogo} from 'Components';
import {Form, Button, Input, Checkbox} from "antd"
import { LoginFormDTO } from 'api/auth.dto';
import * as Api from '../../../api'
import { setCookie } from 'nookies';
import { getMe } from 'api/auth'

export const LoginForm = () => {
  // useEffect(() => {
  //   getMe().then((res) => {
  //     // console.log(res)
  //   })
  // }, [])
  let navigate = useNavigate(); 

  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values)

      setCookie(null, '_token', token, {
        path: '/',
      })
      navigate(`/projects`);
      console.log('success login')
      
    } catch (err) {
      console.error('LoginForm', err)
    }
  }

  return (
      <div className='flex justify-center flex-col items-center'>
        <div>
          {/* <DefaultLogo width="w-32" margin="mt-10"/> */}
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Войти
          </h2>
        </div>
        <Form 
            className="flex justify-center items-center flex-col mt-10"
            name="login"
            style={{ maxWidth: 720 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={() => console.log('xyeta')}
            autoComplete="off"

        >
          <Form.Item
              labelCol={{ span: 24 }}
              className="w-full"
              label="Email"
              name="email"
              rules={[{required: true, type: "email", message: "Enter correct email"}]}
          >
            <Input className=" w-full" />
          </Form.Item>
          <Form.Item
              labelCol={{ span: 24 }}
              className=" w-full"
              label="Password"
              name="password"
              rules={[{required: true, message: "This field cannot be empty"}]}
          >
            <Input.Password className=" w-full" />
          </Form.Item>
          <Form.Item className=" w-full mt-[-24px]" name="forgot-password" 
          // wrapperCol={{ offset: 8, span: 13 }}
          >
            <Link to="/forgot-password" >Забыли пароль?</Link>
          </Form.Item>
          <Form.Item className=" w-full mt-[-12px]" name="remember" valuePropName="checked" 
          // wrapperCol={{ offset: 8, span: 13 }}
          >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
          <Form.Item
            // className=" w-full"
          >
            <Button
                className="bg-blue-500"
              block type="primary" htmlType="submit"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}
