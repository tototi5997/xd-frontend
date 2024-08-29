import IconButton from "@/components/iconButton";
import useModal from "@/hooks/useModal";
import { Disciple } from "@/state/disciple";
import { Tag } from "antd";
import { Children } from "react";
import { AttrThemeMap } from "@/constants";
import s from "./index.module.less";
import c from "classnames";

const AttrItem = ({ label, value }: { label: string; value?: number | string | undefined }) => {
  return (
    <div className="fbh fbjsb fbac text-[12px]">
      <div className="gray-1">{label}</div>
      <div>{value}</div>
    </div>
  );
};

const DiscipleDetail = (props: Disciple) => {
  const { owner, mian_attribute, mian_attribute_val, sub_attributes, want_for_main, want_for_main_val } = props;

  const modal = useModal();

  return (
    <div className={c(s.disciple_detail, "black-1")}>
      <div className="fbh fbac fbjsb">
        <div className="text-[14px] font-600">弟子详情</div>
        <IconButton name="close" className="ml-auto" onClick={() => modal?.hide()} />
      </div>

      <section className="mt-20 fbv gp10">
        <AttrItem label="归属于：" value={owner} />
        <AttrItem label="主属性：" value={mian_attribute} />
        <AttrItem label="属性值：" value={mian_attribute_val + "%"} />
        <AttrItem label="需要主属性：" value={want_for_main ?? "-"} />
        <AttrItem label="需要主属性值：" value={want_for_main_val ? "> " + want_for_main_val + "%" : "-"} />
        <div className="fbh fbjsb fbac">
          <div className="gray-1">附加属性</div>
          <div className="fbh gp2">
            {sub_attributes?.map((attr) => {
              const theme = AttrThemeMap.find((i) => i.label === attr[0]);
              return Children.toArray(
                <Tag color={theme?.color}>
                  {attr?.[0]}:{attr?.[1] ?? "-"}
                </Tag>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscipleDetail;
