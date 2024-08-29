import { useUserActions, useUserDeatil } from "@/state/user";
import c from "classnames";
import s from "./index.module.less";
import { Outlet } from "react-router-dom";

const Disciples = () => {
  const { name } = useUserDeatil();

  const { logout } = useUserActions();

  const handleLogout = () => logout.mutate();

  return (
    <div className={c(s.disciples, "w-full h-full relative")}>
      <section className={c(s.head, "fbh fbac")}>
        <div>{name && `${name}`}</div>
        <div className="ml-auto font-[600] hand" onClick={handleLogout}>
          登出
        </div>
      </section>

      <section className={c(s.content, "fbv fbac w-full")}>
        <Outlet />
      </section>
    </div>
  );
};

export default Disciples;
