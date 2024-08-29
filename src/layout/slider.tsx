import { useState } from "react";
import { Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import c from "classnames";
import s from "./index.module.less";
import Icon from "@/components/icon";
import IconButton from "@/components/iconButton";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const [menuPackup, setMenuState] = useState(false);

  const { t } = useTranslation();

  // 菜单配置
  const menuConfig: ItemType<MenuItemType>[] = [
    { key: "1", label: t("dataManagement"), icon: <Icon name="box" /> },
    // { key: "2", label: "沙箱管理", icon: <Icon name="chart" /> },
    {
      key: "3",
      label: t("taskManagement"),
      icon: <Icon name="manage" />,
      children: [
        { key: "3-1", label: t("iJoined") },
        { key: "3-2", label: t("iCreated") },
      ],
    },
    { key: "4", label: t("algorithmLibrary"), icon: <Icon name="miniprogram" /> },
  ];

  const onClickMenuExpand = () => {
    setMenuState(!menuPackup);
  };

  return (
    <div className={c("h-full w-max flex flex-col relative", s.slider)}>
      <Menu items={menuConfig} style={{ height: "100%", width: menuPackup ? 60 : 200 }} mode="inline" inlineCollapsed={menuPackup} />
      <div className="absolute w-full h-40 flex align-center justify-center bottom-0">
        <IconButton type="block" name={menuPackup ? "expand" : "packup"} onClick={onClickMenuExpand} />
      </div>
    </div>
  );
};

export default Slider;
