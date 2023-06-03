import React from 'react';
import {Link,useNavigate} from "react-router-dom";
import DefaultLogo from '../../Components/GiraLogo/Logos';
import {Form, Button, Input, Checkbox} from "antd"

function LoginForm() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/projects`; 
    navigate(path);
  }

  return (
      <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <DefaultLogo width="w-32" margin="mt-10"/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
            onFinish={routeChange}
            onFinishFailed={() => console.log('xyeta')}
            autoComplete="off"

        >
          <Form.Item
              className="px-16 mr-20"
              label="Email"
              name="email"
              rules={[{required: true, type: "email", message: "Enter correct email"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
              className="px-16 mr-20"
              label="Password"
              name="password"
              rules={[{required: true, message: "This field cannot be empty"}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
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

export default LoginForm;