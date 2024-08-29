import IconButton from "@/components/iconButton";
import useModal from "@/hooks/useModal";
import { Button, Form, InputNumber, Select } from "antd";
import { MAINATTRIBUTE_OPTIONS, SUBATTRIBUTE_OPTIONS } from "@/constants";
import DesignComponent from "@/components/DesignComponent";
import { DESIGN_CONFIG } from "@/styles/design.config";
import Icon from "@/components/icon";
import { useForm } from "antd/es/form/Form";
import { useCreateDisciple } from "@/state/disciple";
import { useUserDeatil } from "@/state/user";
import c from "classnames";
import s from "./index.module.less";

const PublishDisciple = () => {
  const modal = useModal();

  const [form] = useForm();

  const { addNewDisciple } = useCreateDisciple();

  const { id } = useUserDeatil();

  const attributes = MAINATTRIBUTE_OPTIONS.filter((i) => i.value !== -1);

  const handleConfirm = async () => {
    const res = await form.validateFields();
    const params = {
      ...res,
      ownerId: id,
      sub_attributes: res.sub_attributes ? res.sub_attributes?.map((i: { sub_attribute: number }) => i?.sub_attribute) : [],
      sub_attributes_val: res.sub_attributes
        ? res.sub_attributes?.map((i: { sub_attribute_val: number | null }) => i?.sub_attribute_val)
        : [],
      want_for_sub: [],
    };
    addNewDisciple.mutate(params);
  };

  return (
    <div className={c(s.publish_disciple)}>
      <DesignComponent theme={DESIGN_CONFIG.Form}>
        <div className="fbh fbac fbjsb">
          <div className="text-[14px] font-600">弟子详情</div>
          <IconButton name="close" className="ml-auto" onClick={() => modal?.hide()} />
        </div>

        <Form className="mt-20" form={form}>
          <Form.Item name="mian_attribute_id" label="主属性" rules={[{ required: true, message: "请选择主属性" }]}>
            <Select options={attributes} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="mian_attribute_val" label="主属性值" rules={[{ required: true, message: "请输入主属性值" }]}>
            <InputNumber controls={false} type="number" inputMode="numeric" style={{ width: "100%" }} />
          </Form.Item>

          <div className="mb-10">副词条</div>

          <Form.List name="sub_attributes">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }) => {
                    return (
                      <div className="fbh gp4" key={key}>
                        <Form.Item {...restField} name={[name, "sub_attribute"]}>
                          <Select options={SUBATTRIBUTE_OPTIONS} placeholder="副词条" />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "sub_attribute_val"]}>
                          <InputNumber controls={false} type="number" inputMode="numeric" placeholder="副词条属性值" />
                        </Form.Item>
                        <Button icon={<Icon name="delete" size={14} />} onClick={() => remove(name)} />
                      </div>
                    );
                  })}
                  {fields.length < 3 ? (
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} className="w-full">
                        添加副词条
                      </Button>
                    </Form.Item>
                  ) : null}
                </>
              );
            }}
          </Form.List>

          <Form.Item name="want_for_main" label="配对主属性">
            <Select options={attributes} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="want_for_main_val" label="配对主属性值">
            <InputNumber controls={false} type="number" inputMode="numeric" style={{ width: "100%" }} />
          </Form.Item>
        </Form>

        <div className="fbh fbje mt-20">
          <Button type="primary" onClick={handleConfirm}>
            确认
          </Button>
        </div>
      </DesignComponent>
    </div>
  );
};

export default PublishDisciple;
