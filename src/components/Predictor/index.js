import React from "react";
import { CaretDownFilled } from "@ant-design/icons";

import ResetAll from "../ResetAll";

const getMarkerPosition = ({ indicator }) => {
  if (indicator <= 0) {
    return "1rem";
  } else if (indicator <= 4) {
    return "4rem";
  } else if (indicator < 6) {
    return "7rem";
  } else if (indicator < 7) {
    return "10rem";
  } else if (indicator < 8) {
    return "14rem";
  } else if (indicator < 9) {
    return "18rem";
  } else if (indicator < 10) {
    return "22rem";
  } else if (indicator <= 13) {
    return "26rem";
  } else if (indicator > 13) {
    return "30rem";
  }
};

const Predictor = ({ indicator, onReset, isResetAllDisabled }) => {
  return (
    <div className="prediction-wrp">
      <div className="title">Parkinson's Disease Risk-o-meter</div>
      {/* <div>{indicator}</div> */}
      <div className="level-ind clear">
        <CaretDownFilled
          className="indicator-marker"
          style={{
            fontSize: "3rem",
            position: "absolute",
            bottom: "100%",
            transform: "translate(-1.5rem, 0px)",
            left: getMarkerPosition({ indicator }),
          }}
        />
        <div className="level l0">Normal</div>
        <div className="level l1">Mild</div>
        <div className="level l2">Moderate</div>
        <div className="level l3">High</div>
      </div>
      <ResetAll onClick={onReset} isResetAllDisabled={isResetAllDisabled} />
    </div>
  );
};

export default Predictor;
