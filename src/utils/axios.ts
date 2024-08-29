import { globalRouter } from "@/hooks/useGlobalRouter";
import { message } from "antd";
import axios from "axios";

const service = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
});

service.interceptors.response.use(
  (res) => res.data,
  (error) => {
    // 提取错误信息
    const errorMessage = error.response?.data?.message || error.message || "请求失败";

    // statusCode = 401, jump to login page
    if (error.response?.status === 401) globalRouter.navigate?.("/login");

    message.error(errorMessage);

    return Promise.reject(error);
  }
);

export default service;
