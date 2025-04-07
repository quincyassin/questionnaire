import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../components/UserInfo";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: UserInfo) => {
    if (values.username === "admin" && values.password === "admin") {
      return navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or
          <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
