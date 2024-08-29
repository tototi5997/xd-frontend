import DesignComponent from "../DesignComponent";
import { Disciple } from "@/state/disciple";
import { Children } from "react";
import { Button, Tag } from "antd";
import useModal from "@/hooks/useModal";
import c from "classnames";
import s from "./index.module.less";
import Icon from "../icon";

interface IDisciplesList {
  className?: string;
  data?: unknown[];
  showDelete?: boolean;
  onDelete?: (data: Disciple) => void;
}

const DisciplesList: React.FC<IDisciplesList> = ({ data, className, showDelete, onDelete }) => {
  // disciple component

  const modal = useModal();

  const handleToDetailModal = (i: Disciple) => {
    modal?.show("disciple_detail", i);
  };

  // Disciple item
  // no data
  const DiscipleItem = (i: Disciple) => {
    return (
      <div className={c(s.disciples_item, "fbh gp4 fbac p-18")}>
        <div className="text-[14px] mr-10">
          {i.mian_attribute}: {i?.mian_attribute_val}%
        </div>
        <div>{i.sub_attributes?.map((item) => Children.toArray(<Tag>{item[0]}</Tag>))}</div>
        <DesignComponent>
          <div className="ml-auto fbh gp10">
            <Button className="text-[12px]" onClick={() => handleToDetailModal(i)}>
              详情
            </Button>
            {showDelete && <Button icon={<Icon name="delete" fill="#fff" />} onClick={() => onDelete?.(i)} />}
          </div>
        </DesignComponent>
      </div>
    );
  };

  // Disciple list
  const renderList = () => {
    return data?.map((i: any) => Children.toArray(<DiscipleItem {...i} />));
  };

  return <div className={c(s.disciples_list, className, "black-1 text-[12px] fbv gap-2")}>{renderList()}</div>;
};

export default DisciplesList;
