import React from "react";
import { Col, Row, Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import { MarksC1, MarksC1NoName } from "../../utils/utils";
// import ResetAll from "../ResetAll";

const Complex1 = ({
  name,
  status,
  className,
  value,
  onChange,
  showModalWithData,
  infoModalKey,
  onReset,
  isResetAllDisabled,
}) => {
  return (
    <div className="c1-wrp" id="c1Wrp">
      <div className={` box with-slider effects-box ${name} ${className}`}>
        <QuestionCircleFilled
          className="info-icon"
          onClick={() => showModalWithData({ infoModalKey })}
        />
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <Row gutter={16}>
          <Col span={20}>
            <Slider
              range
              min={-6}
              max={0}
              tooltipVisible={false}
              value={[value]}
              included={true}
              onChange={onChange}
              marks={MarksC1NoName}
            />
          </Col>
          <Col span={4}>
            <span className="slider-label">{!status && MarksC1[value]}</span>
          </Col>
        </Row>
      </div>
      {/* <ResetAll onClick={onReset} isResetAllDisabled={isResetAllDisabled} /> */}
    </div>
  );
};

export default Complex1;
