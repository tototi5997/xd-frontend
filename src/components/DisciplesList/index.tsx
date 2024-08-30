import DesignComponent from "../DesignComponent";
import { Disciple } from "@/state/disciple";
import { Children } from "react";
import { Tag } from "antd";
import useModal from "@/hooks/useModal";
import c from "classnames";
import s from "./index.module.less";
import Icon from "../icon";
import XDButton from "@/components/Button";

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
        <div className="fbv gp4">
          <div className="text-[12px]">
            {i.mian_attribute}: {i?.mian_attribute_val}%
          </div>
          <div>{i.sub_attributes?.map((item) => Children.toArray(<Tag>{item[0]}</Tag>))}</div>
        </div>
        <DesignComponent>
          <div className="ml-auto fbh gp10">
            <XDButton className="w-80" onClick={() => handleToDetailModal(i)}>
              详情
            </XDButton>
            {showDelete && (
              <XDButton onClick={() => onDelete?.(i)} className="w-40">
                <Icon name="delete" fill="#fff" />
              </XDButton>
            )}
          </div>
        </DesignComponent>
      </div>
    );
  };

  // Disciple list
  const renderList = () => {
    return data?.map((i: any) => Children.toArray(<DiscipleItem {...i} />));
  };

  return (
    <div className={c(s.disciples_list, className, "relative")}>
      <div className={c("black-1 text-[12px] fbv gap-2 wh100p", s.content)}>{renderList()}</div>
    </div>
  );
};

export default DisciplesList;
