import React from 'react';
import {Link,useNavigate} from "react-router-dom";
import {DefaultLogo} from 'Components';
import {Form, Button, Input, Checkbox} from "antd"
import { LoginFormDTO } from 'api/auth.dto';
import * as Api from '../../../api'
import { setCookie } from 'nookies';


export const LoginForm = () => {

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
      <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <DefaultLogo width="w-32" margin="mt-10"/>
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>
        <Form
            className="mt-10 text-start sm:mx-auto sm:w-full sm:px-4 sm:max-w-sm"
            name="login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={() => console.log('xyeta')}
            autoComplete="off"

        >
          <Form.Item

              label="Email"
              name="email"
              rules={[{required: true, type: "email", message: "Enter correct email"}]}
          >
            <Input className="w-32 md:w-44 lg:w-56" />
          </Form.Item>
          <Form.Item

              label="Password"
              name="password"
              rules={[{required: true, message: "This field cannot be empty"}]}
          >
            <Input.Password className="w-32 md:w-44 lg:w-56" />
          </Form.Item>
          <Form.Item name="forgot-password" wrapperCol={{ offset: 8, span: 13 }}>
            <Link to="/forgot-password" >Forgot password?</Link>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 13 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button
                className="bg-blue-500 w-24"
                type="primary"
                htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </>
  )
}
