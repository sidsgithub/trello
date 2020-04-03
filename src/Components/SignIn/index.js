import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector} from "react-redux";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function SignIn(props) {
    
    const [login, setLogin] = useState(false);
    const dispatch = useDispatch();
    
    function onFinish(values){
        let users = localStorage.getItem("users");
        users = JSON.parse(users);
        console.log(users.username)
        if(users.username === values.username)
        {
            setLogin(true);
            dispatch({type:'ADD_USER'},[dispatch]);
        }
        console.log(login)

    };

    const isAuth = useSelector(state => state.UserReducer.isAuthenticated);
    console.log("isAuth:",isAuth);

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <React.Fragment>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
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
                            message: 'Please input your username!',
                        },
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
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
            {login && <Redirect to="/boardstation" />}
        </React.Fragment>
    );
}

export default SignIn;