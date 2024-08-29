import service from "@/utils/axios";

export type RegisterParams = {
  phone: string;
  name: string;
  password: string;
};

export type LoginParams = {
  phone: string;
  password: string;
};

export type UserDetail = {
  id: number;
  name: string;
  phone: string;
};

// register
export const registerAPI = (params: RegisterParams): Promise<{ data?: unknown; message: string }> => {
  return service.post("/user/register", params);
};

// lgoin
export const loginAPI = (params: LoginParams): Promise<{ data?: unknown; message: string }> => {
  return service.post("/user/login", params);
};

export const logoutAPI = () => {
  return service.delete("/user/logout");
};

export const getUserInfoAPI = (): Promise<{ data?: UserDetail[]; message?: string; statusCode: number }> => {
  return service.get("/user");
};
