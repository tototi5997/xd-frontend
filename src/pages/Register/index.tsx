import c from "classnames";
import s from "./index.module.less";
import { Button, Form, Input } from "antd";
import DesignComponent from "@/components/DesignComponent";
import { DESIGN_CONFIG } from "@/styles/design.config";
import { useForm } from "antd/es/form/Form";
import { useUserActions } from "@/state/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form] = useForm();

  const navigate = useNavigate();

  const { register } = useUserActions();

  const handleRegister = async () => {
    const res = await form.validateFields();
    register.mutate(res);
  };

  return (
    <div className="wh100p pr fbh fbac fbjc">
      <section className={c(s.register_form, "rounded-[20px] p-30")}>
        <div className="text-[20px] font-[600]">注册</div>
        <DesignComponent theme={DESIGN_CONFIG.Input}>
          <Form className="mt-30" form={form}>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "请输入手机号" },
                { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号" },
              ]}
            >
              <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input placeholder="请输入密码" type="password" />
            </Form.Item>
            <Form.Item
              name="password_confirm"
              rules={[
                { required: true, message: "请确认密码" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject("两次密码不一致");
                    }
                  },
                }),
              ]}
            >
              <Input placeholder="再次输入密码" type="password" />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true, message: "请输入昵称" }]}>
              <Input placeholder="请输入昵称（方便其他人找到你）" />
            </Form.Item>
          </Form>
        </DesignComponent>

        <DesignComponent theme={DESIGN_CONFIG.Button}>
          <div className="fbh fbjsb">
            <Button className="w-120" ghost onClick={() => navigate("/login")}>
              去登录
            </Button>
            <Button className="w-120" onClick={handleRegister}>
              注册
            </Button>
          </div>
        </DesignComponent>
      </section>
    </div>
  );
};

export default Register;
