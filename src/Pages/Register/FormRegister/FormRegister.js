import React from "react";
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import { userServ } from "../../../api/api";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const FormRegister = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (registerInfo) => {
    console.log("Received values of form: ", registerInfo);
    const initialValues = {
      taiKhoan: registerInfo.taiKhoan,
      matKhau: registerInfo.matKhau,
      email: registerInfo.email,
      soDt: registerInfo.soDt,
      maNhom: registerInfo.maNhom,
      hoTen: registerInfo.hoTen,
    };

    userServ
      .postRegister(initialValues)
      .then((res) => {
        console.log(res);
        message.success("Đăng ký thành công!");
        navigate("/login");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="taiKhoan"
        label="Account"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your account!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Please input your account!" />
      </Form.Item>

      <Form.Item
        name="matKhau"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Please input your password!" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["matKhau"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("matKhau") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Please confirm your password!" />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Please input your E-mail!" />
      </Form.Item>

      <Form.Item
        name="soDt"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          placeholder="Please input your phone number!"
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="maNhom"
        label="Teams"
        rules={[
          {
            required: true,
            message: "Please select team!",
          },
        ]}
      >
        <Select placeholder="Select your team">
          <Option value="male">QuanTri</Option>
          <Option value="female">KhachHang</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="hoTen"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Please input your nickname!" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the{" "}
          <a href="#top" className="no-underline">
            agreement
          </a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="bg-blue-400">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormRegister;
