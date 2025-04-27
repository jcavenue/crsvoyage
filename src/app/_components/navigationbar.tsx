"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  Drawer,
  Button,
  Modal,
  Form,
  Space,
  Input,
  Checkbox,
} from "antd";
import {
  MenuOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // No window here
  const [isLoginModalVisible, setLoginModalVisible] = React.useState(false);
  const [isSignupModalVisible, setSignupModalVisible] = React.useState(false);
  const [form] = Form.useForm();

  const updateIsMobile = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    updateIsMobile(); // Set on mount (in browser only)
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const menuItems = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Services", key: "services" },
    { label: "Book", key: "book" },
  ];

  const handleLogin = (values) => {
    console.log("Login Values:", values);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
    // Add Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
    // Add Facebook login logic here
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to forgot password");
    // Add forgot password logic here
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-10 py-2 shadow-md">
        <div className="text-2xl font-bold">CRS Voyage</div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center gap-4">
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{ borderBottom: "none" }}
            />
            <Button type="primary" onClick={() => setLoginModalVisible(true)}>
              Login
            </Button>
            <Button
              type="default"
              style={{
                borderColor: "black",
                color: "black",
                background: "white",
              }}
            >
              Sign Up
            </Button>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: "24px" }} />}
              onClick={showDrawer}
            />
            <Drawer title="Menu" placement="left" onClose={onClose} open={open}>
              <Menu mode="vertical" items={menuItems} onClick={onClose} />
              <div className="flex flex-col gap-2 mt-4">
                <Button type="primary" block onClick={() => setLoginModalVisible(true)}>
                  Login
                </Button>
                <Button
                  type="default"
                  block
                  style={{
                    borderColor: "black",
                    color: "black",
                    background: "white",
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Drawer>
          </>
        )}
      </nav>
      <Modal
        destroyOnClose
        width={500}
        title={
          <div className="">
            <div>Login</div>
          </div>
        }
        open={isLoginModalVisible}
        onCancel={() => setLoginModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleLogin}
          layout="vertical"
          requiredMark={false}
        >
          <div className="md:px-20 md:py-5 flex flex-col">
            <Form.Item
              name="email"
              label={<span className="text-sm">Email</span>}
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Invalid email format!" },
              ]}
            >
              <Input placeholder="Email"/>
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="text-sm">Password</span>}
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Password"/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
            <div className="hyperlink text-blue-500 underline cursor-pointer">
              Forgot password?
            </div>
          </div>
          <div className="text-center mb-4">or sign in with</div>
          <div style={{ textAlign: "center" }}>
            <Space>
              <Button
                icon={<GoogleOutlined />}
                onClick={handleGoogleLogin}
                style={{ backgroundColor: "red", color: "#fff" }}
              >
                Google
              </Button>
              <Button
                icon={<FacebookOutlined />}
                onClick={handleFacebookLogin}
                style={{ backgroundColor: "#1877F2", color: "#fff" }}
              >
                Facebook
              </Button>
            </Space>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default NavBar;
