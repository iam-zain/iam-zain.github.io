import React from "react";
import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

const ResetAll = ({ onClick, isResetAllDisabled }) => {
  return (
    <Button
      id="resetAllBtn"
      className="reset-all"
      type="primary"
      shape="round"
      disabled={isResetAllDisabled}
      icon={<ReloadOutlined spin={!isResetAllDisabled} />}
      onClick={onClick}
    >
      ResetAll
    </Button>
  );
};

export default ResetAll;
