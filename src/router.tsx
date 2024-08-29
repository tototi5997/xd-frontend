import { HashRouter, BrowserRouter, RouteObject, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/404";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AllDisciples from "./pages/AllDisciples";
import Disciples from "./pages/Disciples";
import MyDisciples from "./pages/MyDisciples";

export type RouterType = "hash" | "browser";

// 当前路由模式
const ROUTER_TYPE: RouterType = "browser";

// 路由类型
const routerMap = {
  hash: HashRouter,
  browser: BrowserRouter,
};

export const RouterComponent = routerMap[ROUTER_TYPE];

// 路由配置
export const routerConfig: RouteObject[] = [
  { path: "/", element: <Navigate to="/disciples/all" replace /> },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/disciples",
    element: <Disciples />,
    children: [
      {
        path: "",
        element: <Navigate to="/disciples/all" replace />,
      },
      {
        path: "/disciples/all",
        element: <AllDisciples />,
      },
      {
        path: "/disciples/my",
        element: <MyDisciples />,
      },
    ],
  },
  // 404 放在最下面
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
