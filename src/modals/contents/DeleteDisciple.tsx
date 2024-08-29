import IconButton from "@/components/iconButton";
import s from "./index.module.less";
import c from "classnames";
import useModal from "@/hooks/useModal";
import { Disciple, useDeleteDisciple } from "@/state/disciple";
import { Button } from "antd";

const DeleteDisciple = (props: Disciple) => {
  const { id } = props ?? {};

  const modal = useModal();

  const { deleteDisciple } = useDeleteDisciple();

  const handleConfirmDelete = () => {
    id && deleteDisciple.mutate(id!);
    modal?.hide();
  };

  return (
    <div className={c(s.delete_disciple)}>
      <div className="fbh fbac fbjsb">
        <div className="text-[14px] font-600">确认删除</div>
        <IconButton name="close" className="ml-auto" onClick={() => modal?.hide()} />
      </div>

      <section className="mt-20">
        <p>请确认该弟子是否已经出师，该删除操作无法恢复</p>
      </section>

      <div className="fbh fbje mt-20 gp14">
        <Button onClick={() => modal?.hide()}>取消</Button>
        <Button type="primary" onClick={handleConfirmDelete}>
          确认
        </Button>
      </div>
    </div>
  );
};

export default DeleteDisciple;
