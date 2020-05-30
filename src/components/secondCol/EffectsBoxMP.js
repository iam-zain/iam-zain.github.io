import React from "react";
import { Col, Row, Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import StatusIcon from "../StatusIcon";
import { MarksMembranePot, MarksMembranePotNoName } from "../../utils/utils";

const EffectsBoxMP = ({
  status,
  className,
  value,
  onChange,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div className={`effects-box with-slider mem-pot mp ${className}`} id="mp">
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <div className="name">ΔΨm</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={16}>
          <Slider
            range
            min={-3}
            max={1}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksMembranePotNoName}
          />
        </Col>
        <Col span={8}>
          <span className="slider-label">
            {!status && MarksMembranePot[value]}
          </span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxMP;
