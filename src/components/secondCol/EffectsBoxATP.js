import React from "react";
import { Col, Row, Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import StatusIcon from "../StatusIcon";
import { MarksATP, MarksATPNoName } from "../../utils/utils";

const EffectsBoxATP = ({
  status,
  className,
  value,
  onChange,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div className={`effects-box with-slider ATP ${className}`} id="atp">
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <div className="name">ATP</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={16}>
          <Slider
            range
            min={-2}
            max={0}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksATPNoName}
          />
        </Col>
        <Col span={7} offset={1}>
          <span className="slider-label">{!status && MarksATP[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxATP;
