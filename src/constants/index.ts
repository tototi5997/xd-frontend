import { MainAttribute, SubAttribute } from "@/state/disciple";

export const MAINATTRIBUTE_OPTIONS = [
  {
    label: "全部",
    value: -1,
  },
  {
    label: "击晕",
    value: MainAttribute.JY,
  },
  {
    label: "暴击",
    value: MainAttribute.BJ,
  },
  {
    label: "反击",
    value: MainAttribute.FJ,
  },
  {
    label: "闪避",
    value: MainAttribute.SB,
  },
  {
    label: "吸血",
    value: MainAttribute.XX,
  },
  {
    label: "连击",
    value: MainAttribute.LJ,
  },
  {
    label: "抗晕",
    value: MainAttribute.KY,
  },
  {
    label: "抗暴击",
    value: MainAttribute.KBJ,
  },
  {
    label: "抗反击",
    value: MainAttribute.KFJ,
  },
  {
    label: "抗闪避",
    value: MainAttribute.KSB,
  },
  {
    label: "抗吸血",
    value: MainAttribute.KXX,
  },
  {
    label: "抗连击",
    value: MainAttribute.KLJ,
  },
];

export const SUBATTRIBUTE_OPTIONS = [
  {
    label: "减伤",
    value: SubAttribute.JS,
  },
  {
    label: "增伤",
    value: SubAttribute.ZS,
  },
  {
    label: "弱灵",
    value: SubAttribute.RL,
  },
  {
    label: "强灵",
    value: SubAttribute.QL,
  },
  {
    label: "弱疗",
    value: SubAttribute.RLA,
  },
  {
    label: "强疗",
    value: SubAttribute.QLA,
  },
  {
    label: "爆伤",
    value: SubAttribute.BS,
  },
  {
    label: "攻击",
    value: SubAttribute.GJ,
  },
];

export const AttrThemeMap = [
  {
    label: "增伤",
    color: "#f5222d",
  },
  {
    label: "减伤",
    color: "#ffec3d",
  },
  {
    label: "攻击",
    color: "#eb2f96",
  },
  {
    label: "强灵",
    color: "#fa8c16",
  },
  {
    label: "弱灵",
    color: "#a0d911",
  },
  {
    label: "强疗",
    color: "#13c2c2",
  },
  {
    label: "弱疗",
    color: "#1890ff",
  },
];
