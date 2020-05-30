import React from "react";
import { QuestionCircleFilled } from "@ant-design/icons";

const EffectsBox = ({
  name,
  status,
  className,
  id,
  showModalWithData,
  infoModalKey,
}) => {
  return (
    <div className={`effects-box ${name} ${className}`} id={id}>
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />
      <div className="name">{name}</div>
      <span className="status">{status}</span>
    </div>
  );
};

export default EffectsBox;
