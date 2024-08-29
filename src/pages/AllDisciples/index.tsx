import DisciplesList from "@/components/DisciplesList";
import { DESIGN_CONFIG } from "@/styles/design.config";
import DesignComponent from "@/components/DesignComponent";
import { Button, Form, InputNumber, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import Icon from "@/components/icon";
import { useAllDisciples } from "@/state/disciple";
import { MAINATTRIBUTE_OPTIONS } from "@/constants";
import { useState } from "react";
import { DiscipleQueryParams } from "@/api/disciple";
import c from "classnames";
import s from "./index.module.less";
import { useNavigate } from "react-router-dom";
// import useModal from "@/hooks/useModal";

const AllDisciples = () => {
  const [queryParams, setQueryParams] = useState<DiscipleQueryParams>();

  const { data, refetch } = useAllDisciples({ index: 1, pageSize: 10, ...queryParams });

  const [form] = useForm();

  const navigate = useNavigate();

  // const modal = useModal();

  // publish new disciple
  // const handlePublishNewDisciple = () => {
  //   modal?.show("publish_disciple");
  // };

  const handleToMyDisciples = () => {
    navigate("/disciples/my");
  };

  // query disciples
  const handleQueryDisciples = async () => {
    refetch();
  };

  const handleClearQuerys = () => {
    form.resetFields();
    setQueryParams({});
  };

  const onFormChange = (_: unknown, values: any) => {
    setQueryParams(values);
  };

  return (
    <div className={c(s.all_disciples, "black-1 w-full h-full relative")}>
      <DesignComponent theme={DESIGN_CONFIG.Button}>
        <div>
          <div className="fbh gp10">
            {/* <Button onClick={handlePublishNewDisciple}>发布</Button> */}
            <Button onClick={handleToMyDisciples}>我发布的</Button>
            <Button icon={<Icon name="search" />} onClick={handleQueryDisciples} />
            <Button onClick={handleClearQuerys}>Clear</Button>
          </div>

          <Form layout="inline" className="mt-20" form={form} initialValues={{ mian_attribute_id: -1 }} onValuesChange={onFormChange}>
            <Form.Item label="主词条" name="mian_attribute_id">
              <Select style={{ width: 90 }} options={MAINATTRIBUTE_OPTIONS} />
            </Form.Item>
            <Form.Item label="词条值" name="mian_attribute_val">
              <InputNumber inputMode="numeric" className="w-90" controls={false} />
            </Form.Item>
          </Form>

          <DisciplesList data={data} className="mt-20" />
        </div>
      </DesignComponent>
    </div>
  );
};

export default AllDisciples;
