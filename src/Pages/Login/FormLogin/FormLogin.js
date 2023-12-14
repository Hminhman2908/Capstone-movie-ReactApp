import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { userServ } from "../../../api/api";
import { userLocalStore } from "../../../api/localService";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/slice/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
const onFinishFailed = (values) => {
  console.log("Success:", values);
};

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    userServ
      .postSignin(values)
      .then((res) => {
        const user = res.data.content;
        userLocalStore.set(user);
        dispatch(setLogin(user));
        message.success("Đăng nhập thành công");
        navigate("/");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  return (
    <div className="form-login flex justify-center container">
      <Form
        name="basic"
        style={{
          width: "650px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          // label="Username"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-white">Remember me</Checkbox>
          </Form.Item>
          <span>
            <a
              className="login-form-forgot !text-red-200 no-underline"
              href="true"
            >
              Forgot password
            </a>
          </span>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="bg-blue-400 mr-5">
            Submit
          </Button>
          <span className="text-white">
            Or&nbsp;&nbsp;
            <NavLink to={"/register"} className="no-underline">
              Register now!
            </NavLink>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormLogin;
