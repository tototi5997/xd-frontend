import { Button, Form, Input } from "antd";
import DesignComponent from "@/components/DesignComponent";
import { DESIGN_CONFIG } from "@/styles/design.config";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useUserActions } from "@/state/user";
import c from "classnames";
import s from "./index.module.less";

const Login = () => {
  const navigate = useNavigate();

  const [form] = useForm();

  const { login } = useUserActions();

  const handleLogin = async () => {
    const res = await form.validateFields();
    login.mutate(res);
  };

  return (
    <div className={c(s.login, "w-full h-full relative fbv fbac fbjc")}>
      <section className={c(s.login_form, "rounded-[20px] p-30")}>
        <div className="text-[20px] font-[600]">登录</div>
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
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>
          </Form>
        </DesignComponent>
        <DesignComponent theme={DESIGN_CONFIG.Button}>
          <div className="fbh fbjsb">
            <Button ghost className="w-120" onClick={() => navigate("/register")}>
              去注册
            </Button>
            <Button className="w-120" onClick={handleLogin}>
              登录
            </Button>
          </div>
        </DesignComponent>
      </section>
    </div>
  );
};

export default Login;
