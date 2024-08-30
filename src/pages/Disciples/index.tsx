import c from "classnames";
import s from "./index.module.less";
import { Outlet } from "react-router-dom";
import Header from "@/layout/header";

const Disciples = () => {
  return (
    <div className={c(s.disciples, "w-full h-full relative")}>
      <Header />

      <section className={c(s.content, "fbv fbac w-full")}>
        <Outlet />
      </section>
    </div>
  );
};

export default Disciples;
