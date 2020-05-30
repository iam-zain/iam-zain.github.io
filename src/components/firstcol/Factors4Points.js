import React from "react";

import { Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import { SliderStateClassMap, Marks4PointsOE } from "../../utils/utils";

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
    <div className={`box p4 ${SliderStateClassMap[value]}`} id={id}>
      <div className="factor-name p5">{name}</div>
      <div className="status">{status}</div>
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <Slider
        range
        max={1}
        min={-2}
        value={[value]}
        included={true}
        onChange={onChange}
        marks={Marks4PointsOE}
        tooltipVisible={false}
      />
    </div>
  );
};

export default Factors;
