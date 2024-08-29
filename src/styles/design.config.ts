import { ThemeConfig } from "antd";

export const DESIGN_CONFIG: Record<"Input" | "Button" | "Form", ThemeConfig> = {
  Input: {
    token: {
      // 主色
      colorPrimary: "rgba(110, 84, 212, 1)",
      borderRadius: 4,
      // 浮层背景色
      colorBgElevated: "#2e2a41",
      // 边框色
      colorBorder: "rgba(110, 84, 212, 1)",
      // 占位符字体颜色
      colorTextPlaceholder: "white",
      // 文本颜色
      colorText: "white",
      // 容器背景色
      colorBgContainer: "rgba(110, 84, 212, 0.2)",
    },
    components: {
      Input: {},
    },
  },
  Button: {
    token: {
      colorPrimary: "rgba(110, 84, 212, 1)",
    },
    components: {
      Button: {
        defaultBg: "rgba(110, 84, 212, 1)",
        defaultHoverBg: "rgba(110, 84, 212, 0.8)",
        defaultActiveBg: "rgba(110, 84, 212, 0.7)",

        defaultGhostBorderColor: "rgba(110, 84, 212, 1)",
        defaultBorderColor: "rgba(110, 84, 212, 1)",

        defaultColor: "#fff",
        defaultHoverColor: "#fff",
        defaultActiveColor: "#fff",
        defaultGhostColor: "#fff",
      },
    },
  },
  Form: {
    token: {
      fontSize: 12,
    },
    components: {
      Form: {
        itemMarginBottom: 10,
        labelHeight: 14,
      },
    },
  },
};
