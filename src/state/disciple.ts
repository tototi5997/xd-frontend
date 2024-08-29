import { addNewDiscipleAPI, deleteDiscipleAPI, DiscipleQueryParams, getAllDisciplesAPI } from "@/api/disciple";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUserDeatil } from "./user";
import useModal from "@/hooks/useModal";
import { message } from "antd";

export enum MainAttribute {
  JY, // ji yun
  BJ, // bao ji
  FJ, // fan ji
  SB, // shan bi
  XX, // xi xue
  LJ, // lian ji
  KY, // kang yun
  KBJ, // kang bao ji
  KFJ, // kang fan ji
  KSB, // kang shan bi
  KXX, // kang xi xue
  KLJ, // kang lian ji
}

export enum SubAttribute {
  JS, // jian shang
  ZS, // zeng shang
  RL, // ruo ling
  QL, // qiang ling
  RLA, // ruo liao
  QLA, // qiang liao
  BS, // bao shang
  GJ, // gong ji
}

export type Disciple = {
  id?: number;
  owner: string;
  owner_id: number;
  mian_attribute?: string;
  mian_attribute_val?: number;
  sub_attributes?: (string | number)[][];
  want_for_main?: string;
  want_for_main_val?: number;
  want_for_sub?: string[];
};

export const useAllDisciples = (param: DiscipleQueryParams) => {
  const { index, pageSize } = param;

  if (param.mian_attribute_id === -1) param = { ...param, mian_attribute_id: undefined };

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["all_disciples", index, pageSize],
    queryFn: () => getAllDisciplesAPI(param),
  });

  return { ...data, refetch, isLoading };
};

export const useMyDisciples = () => {
  // const { id: owner_id } = useUserDeatil();
  const { data } = useQuery({
    queryKey: ["my_disciples"],
    queryFn: () => getAllDisciplesAPI({}),
  });
  return { ...data };
};

export const useCreateDisciple = () => {
  const modal = useModal();
  const queryClient = useQueryClient();
  const addNewDisciple = useMutation({
    mutationFn: addNewDiscipleAPI,
    onSuccess: (data) => {
      modal?.hide();
      message.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["my_disciples"] });
    },
  });

  return { addNewDisciple };
};

export const useDeleteDisciple = () => {
  const queryClient = useQueryClient();
  const deleteDisciple = useMutation({
    mutationFn: deleteDiscipleAPI,
    onSuccess: (data) => {
      message.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["my_disciples"] });
    },
  });
  return { deleteDisciple };
};
