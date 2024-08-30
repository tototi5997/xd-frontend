import { useUserActions, useUserDeatil } from "@/state/user";
import c from "classnames";
import s from "./index.module.less";
import Icon from "@/components/icon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logout } = useUserActions();

  const { name } = useUserDeatil();

  const navigate = useNavigate();

  const handleLogout = () => logout.mutate();

  const handleToHome = () => {
    navigate("/home");
  };

  return (
    <section className={c(s.head, "fbh fbac")}>
      <div className="fbh fbac fbjc" onClick={handleToHome}>
        <Icon name="favicon" size={30} />
      </div>
      <div className="ml-20">{name && `${name}`}</div>
      <div className="ml-auto font-[600] hand" onClick={handleLogout}>
        登出
      </div>
    </section>
  );
};

export default Header;
