import React from "react";

import { Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import { SliderStateClassMap, Marks2Points } from "../../utils/utils";

const Factors = ({
  value,
  onChange,
  name,
  status,
  id,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div className={`box p2 ${name} ${SliderStateClassMap[value]}`} id={id}>
      <span className="factor-name ">{name}</span>
      <div className="status">{status}</div>
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <Slider
        range
        max={1}
        min={0}
        included={true}
        value={[value]}
        onChange={onChange}
        marks={Marks2Points}
        tooltipVisible={false}
      />
    </div>
  );
};

export default Factors;
