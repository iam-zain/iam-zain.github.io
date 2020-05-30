import React from "react";
import { Col, Row, Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import StatusIcon from "../StatusIcon";
import { MarksCalcium, MarksApopNoName } from "../../utils/utils";

const EffectsBoxCalcium = ({
  status,
  className,
  value,
  onChange,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div
      className={`effects-box with-slider calcium ${className}`}
      id="calcium"
    >
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <div className="name">Calcium</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={16}>
          <Slider
            range
            min={0}
            max={1}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksApopNoName}
          />
        </Col>
        <Col span={7}>
          <span className="slider-label">{!status && MarksCalcium[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxCalcium;
