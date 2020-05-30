import React from "react";
import { Col, Row, Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import StatusIcon from "../StatusIcon";
import { MarksDopaN, MarksDopaNNoName } from "../../utils/utils";

const EffectsBoxOxygen = ({
  status,
  className,
  value,
  onChange,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div className={`effects-box with-slider o2 ${className}`} id="oxygen">
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <div className="name">Oxygen Consumption</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={16}>
          <Slider
            range
            min={-1}
            max={0}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksDopaNNoName}
          />
        </Col>
        <Col span={7}>
          <span className="slider-label">{!status && MarksDopaN[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxOxygen;
