import { ModalProps } from "antd";
import DiscipleDetail from "./contents/DsicipleDetail";
import PublishDisciple from "./contents/PublishDisciple";
import DeleteDisciple from "./contents/DeleteDisciple";

interface IModalMain {
  des?: string;
  component: (props: any) => JSX.Element | null;
  extraProps?: Record<string, unknown>;
  noPadding?: boolean;
}

export type GlobalMoalType = IModalMain & ModalProps;

export type ModalKey = "disciple_detail" | "publish_disciple" | "delete_disciple";

const modalMap = new Map<ModalKey, GlobalMoalType>([
  [
    "disciple_detail",
    {
      component: DiscipleDetail,
      footer: null,
      noPadding: true,
      closable: false,
      width: 360,
    },
  ],
  [
    "publish_disciple",
    {
      component: PublishDisciple,
      footer: null,
      noPadding: true,
      closable: false,
      width: 360,
    },
  ],
  [
    "delete_disciple",
    {
      component: DeleteDisciple,
      footer: null,
      noPadding: true,
      closable: false,
      width: 360,
    },
  ],
]);

export default modalMap;
