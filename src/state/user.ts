import { getUserInfoAPI, loginAPI, logoutAPI, registerAPI } from "@/api/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const useUserActions = () => {
  const navigate = useNavigate();

  const register = useMutation({
    mutationFn: registerAPI,
    onSuccess: (data) => {
      if (data.data) navigate("/login");
      else message.error(data.message);
    },
  });

  const login = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      if (data.data) {
        navigate("/home");
      } else message.error(data.message);
    },
  });

  const logout = useMutation({ mutationFn: () => logoutAPI(), onSuccess: () => navigate("/login") });

  return { register, login, logout };
};

export const useUserDeatil = () => {
  const { data, isLoading } = useQuery({ queryKey: ["userDetail"], queryFn: () => getUserInfoAPI() });
  const detail = data?.data?.[0];
  return { ...detail, isLoading };
};
