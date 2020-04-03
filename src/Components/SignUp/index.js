import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";
// import handleSignUp from "./axiosSignUp";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

function SignUp() {
  const [logup, setLogup] = useState(false);

  function onFinish(values) {
    console.log("Success:", values);
    localStorage.setItem("users",JSON.stringify({"username" : values.username, "password" : values.password }))
    setLogup(true);
//     handleSignUp(values.username, values.password).then(
//       (response)=>{
//           if(response){
//               console.log(response.data);
//               setLogup(true);
//           }
//       }
//    ).catch(err => console.log(err));
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <React.Fragment>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {logup && <Redirect to="/signin" />}
    </React.Fragment>
  );
}

export default SignUp;