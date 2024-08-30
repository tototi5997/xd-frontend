import c from "classnames";
import s from "./index.module.less";
import { useNavigate } from "react-router-dom";
import { useDsiciplesRank } from "@/state/disciple";
import copy from "copy-to-clipboard";
import { message } from "antd";

const RankItem = (props: { rank?: number; attr?: string; attrVal?: number; owner?: string; id?: number }) => {
  const { rank, attr, attrVal, owner, id } = props;
  const handleCopy = () => {
    if (id) {
      copy(`${id}`);
      message.success("ID 已复制");
    }
  };

  return (
    <div className={c("fbv fbac fbjc text-white", s.rank_item)}>
      {!id ? (
        <div>虚位以待</div>
      ) : (
        <>
          <div className="font-[600]">No.{rank}</div>
          <div className="text-[12px]">
            {attr}: {attrVal}%
          </div>
          <div className="text-[12px]">{owner}</div>
          <div className="text-[12px] gray-1" onClick={handleCopy}>
            ID: {id}
          </div>
        </>
      )}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const { data } = useDsiciplesRank();

  const [item1, item2, item3] = data || [];

  const handleToDisciples = () => {
    navigate("/disciples/all");
  };

  return (
    <div className={c(s.home, "w-full h-full relative text-black")}>
      {/* <div className={c("w-full h-50 fbh fbac", s.header)}>
        <Icon name="favicon" size={30} />
      </div> */}
      <div className="w-full fbv fbjc fbac pt-100">
        <RankItem rank={1} attr={item1?.mian_attribute} attrVal={item1?.mian_attribute_val} owner={item1?.owner} id={item1?.id} />
        <div className="fbh gp10 mt-20">
          <RankItem rank={2} attr={item2?.mian_attribute} attrVal={item2?.mian_attribute_val} owner={item2?.owner} id={item2?.id} />
          <RankItem rank={3} attr={item3?.mian_attribute} attrVal={item3?.mian_attribute_val} owner={item3?.owner} id={item3?.id} />
        </div>
        <div className={c(s.lian_tai, "fbh fbac fbjc")} onClick={handleToDisciples} />
      </div>
    </div>
  );
};

export default Home;
