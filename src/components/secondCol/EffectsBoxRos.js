import React from "react";
import { Col, Row, Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import StatusIcon from "../StatusIcon";
import { MarksROS, MarksRosNoName } from "../../utils/utils";

const EffectsBoxRos = ({
  status,
  className,
  value,
  onChange,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div className={`effects-box with-slider ros ROS ${className}`} id="ros">
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />{" "}
      <div className="name">ROS</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={20}>
          <Slider
            range
            min={0}
            max={6}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksRosNoName}
          />
        </Col>
        <Col span={4}>
          <span className="slider-label">{!status && MarksROS[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxRos;
