import React from "react";

import Factors4Points from "./Factors4Points";
import Factors2Points from "./Factors2Points";
import Factors4PointsOX from "./Factors4Points_Ox";

const FirstColumn = ({
  dJ1,
  mPP,
  htrA2,
  trap1,
  uchl1,
  pink1,
  parkin,
  dopamine,
  mppStatus,
  onDJ1Change,
  onDopChange,
  htrA2Status,
  dJ1Status,
  onMPPChange,
  parkinStatus,
  onPink1Change,
  onTrap1Change,
  onHtrA2Change,
  onUCHL1Change,
  dopamineStatus,
  onParkinChange,
  showModalWithData,
}) => {
  return (
    <div className="col-1 box-container">
      <Factors4Points
        name="PINK1"
        infoModalKey="pink1"
        showModalWithData={showModalWithData}
        onChange={onPink1Change}
        value={pink1}
        id="pink1"
      />
      <Factors4Points
        id="parkin"
        infoModalKey="parkin"
        name="PARKIN"
        value={parkin}
        showModalWithData={showModalWithData}
        onChange={onParkinChange}
        status={parkinStatus}
      />
      <Factors4Points
        infoModalKey="dJ1"
        id="dj1"
        name="DJ1"
        showModalWithData={showModalWithData}
        onChange={onDJ1Change}
        value={dJ1}
        status={dJ1Status}
      />
      <Factors4Points
        infoModalKey="trap1"
        name="TRAP1"
        showModalWithData={showModalWithData}
        onChange={onTrap1Change}
        value={trap1}
        id="trap1"
      />
      <Factors4Points
        id="HTRA2"
        infoModalKey="htrA2"
        name="HTRA2"
        showModalWithData={showModalWithData}
        onChange={onHtrA2Change}
        value={htrA2}
        status={htrA2Status}
      />
      <Factors4Points
        infoModalKey="uchl1"
        name="UCHL1"
        showModalWithData={showModalWithData}
        onChange={onUCHL1Change}
        value={uchl1}
        id="uchl1"
      />
      <Factors4PointsOX
        infoModalKey="dopamine"
        name="Dopamine"
        id="dopamine"
        showModalWithData={showModalWithData}
        onChange={onDopChange}
        value={dopamine}
        status={dopamineStatus}
      />
      <Factors2Points
        infoModalKey="mPP"
        id="mpp"
        showModalWithData={showModalWithData}
        name="MPP⁺"
        onChange={onMPPChange}
        value={mPP}
        status={mppStatus}
      />
    </div>
  );
};

export default FirstColumn;
