import service from "@/utils/axios";
import { Disciple } from "@/state/disciple";

export type DiscipleQueryParams = {
  index?: number;
  pageSize?: number;
  mian_attribute_id?: number;
  mian_attribute_val?: number;
  owner_id?: number;
};

export type DiscipleCreateParams = {
  ownerId: number;
  mian_attribute_id: number;
  mian_attribute_val: number;
  sub_attributes?: number[];
  sub_attributes_val?: (number | null)[];
  want_for_main?: number;
  want_for_main_val?: number;
};

export const getAllDisciplesAPI = (params: DiscipleQueryParams): Promise<{ data?: Disciple[]; total?: number }> => {
  return service.post("/disciple", params);
};

export const addNewDiscipleAPI = (params: DiscipleCreateParams): Promise<{ data?: any; message?: string }> => {
  return service.post("/disciple/create", params);
};

export const deleteDiscipleAPI = (id: number): Promise<{ message?: string }> => {
  return service.delete(`/disciple/${id}`);
};
