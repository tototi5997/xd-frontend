import DesignComponent from "@/components/DesignComponent";
import { DESIGN_CONFIG } from "@/styles/design.config";
import { Button } from "antd";
import DisciplesList from "@/components/DisciplesList";
import { useNavigate } from "react-router-dom";
import { Disciple, useMyDisciples } from "@/state/disciple";
import useModal from "@/hooks/useModal";
import c from "classnames";
import s from "./index.module.less";

const MyDisciples = () => {
  const navigate = useNavigate();

  const { data } = useMyDisciples();

  const modal = useModal();

  const handlePublishNewDisciple = () => {
    modal?.show("publish_disciple");
  };

  const handleToAllDisciple = () => {
    navigate("/disciples/all");
  };

  const handleDeleteDisciple = (disciple: Disciple) => {
    modal?.show("delete_disciple", disciple);
  };

  return (
    <div className={c(s.my_disciples, "black-1 w-full h-full relative")}>
      <DesignComponent theme={DESIGN_CONFIG.Button}>
        <div>
          <div className="fbh gp10">
            <Button onClick={handlePublishNewDisciple}>发布</Button>
            <Button onClick={handleToAllDisciple}>全部</Button>
          </div>

          <DisciplesList data={data} className="mt-20" showDelete onDelete={handleDeleteDisciple} />
        </div>
      </DesignComponent>
    </div>
  );
};

export default MyDisciples;
