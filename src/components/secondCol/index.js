import React from "react";

import EffectsBox from "./EffectsBox";
import EffectsBoxMP from "./EffectsBoxMP";
import EffectsBoxATP from "./EffectsBoxATP";
import EffectsBoxRos from "./EffectsBoxRos";
import EffectsBoxAlphaSyn from "./EffectsBoxAlphaSyn";
import EffectsBoxCalcium from "./EffectsBoxCalcium";
import EffectsBoxDopaN from "./EffectsBoxDopaN";
import EffectsBoxApoptosis from "./EffectsBoxApoptosis";
import EffectsBoxH2O2 from "./EffectsBoxH2O2";
import EffectsBoxOxygen from "./EffectsBoxOxygen";
import EffectsBoxUP from "./EffectsBoxUP";
import EffectsBoxFissionFusion from "./EffectsBoxFissionFusion";
import EffectsBoxPTPore from "./EffectsBoxPTPore";
import C1 from "../Complex1";

const showMtIntegrity = false;

const SecondCol = ({
  up,
  atp,
  rOS,
  h2O2,
  ptp,
  dopaN,
  oxygen,
  calcium,
  alphaSyn,
  uPSlider,
  rosSlider,
  apoptosis,
  apopSlider,
  dopaNSlider,
  mtIntegrity,
  memPotSlider,
  h2O2Slider,
  fissionFusionSlider,
  oxygenSlider,
  ptpSlider,
  calciumSlider,

  fissionFusion,
  alphaSynSlider,
  showModalWithData,
  membranePotential,

  onH2O2SliderChange,
  onUPSliderChange,
  onDopaNChange,
  onPTPChange,
  onApopSliderChange,
  onCalciumSliderChange,
  onOxygenSliderChange,
  onMemPotChange,
  onRosChange,
  atpSlider,
  onAlphaSChange,
  onAtpSliderChange,
  onFissionFusionChange,

  c1,
  c1Class,
  c1Slider,
  onC1Change,

  upClass,
  atpClass,
  rOSClass,
  h2O2Class,
  dopaNClass,
  oxygenClass,
  calciumClass,
  alphaSynClass,
  apoptosisClass,
  ptpClass,
  mtIntegrityClass,
  fissionFusionClass,
  membranePotentialClass,
}) => {
  return (
    <div className="col-2 box-container" style={{ float: "right" }}>
      <C1
        infoModalKey="c1"
        name="Complex-1 Activity"
        className={c1Class}
        status={c1}
        showModalWithData={showModalWithData}
        value={c1Slider}
        onChange={onC1Change}
      />
      <EffectsBoxMP
        infoModalKey="membranePotential"
        status={membranePotential}
        showModalWithData={showModalWithData}
        value={memPotSlider}
        className={membranePotentialClass}
        onChange={onMemPotChange}
      />
      <EffectsBoxATP
        status={atp}
        infoModalKey="atp"
        className={atpClass}
        showModalWithData={showModalWithData}
        value={atpSlider}
        onChange={onAtpSliderChange}
      />
      <EffectsBoxRos
        infoModalKey="rOS"
        status={rOS}
        showModalWithData={showModalWithData}
        value={rosSlider}
        className={rOSClass}
        onChange={onRosChange}
      />

      <EffectsBoxAlphaSyn
        infoModalKey="alphaSyn"
        status={alphaSyn}
        showModalWithData={showModalWithData}
        value={alphaSynSlider}
        onChange={onAlphaSChange}
        className={alphaSynClass}
      />
      <EffectsBoxCalcium
        infoModalKey="calcium"
        status={calcium}
        showModalWithData={showModalWithData}
        className={calciumClass}
        onChange={onCalciumSliderChange}
        value={calciumSlider}
      />
      <EffectsBoxApoptosis
        infoModalKey="apoptosis"
        status={apoptosis}
        showModalWithData={showModalWithData}
        value={apopSlider}
        onChange={onApopSliderChange}
        className={apoptosisClass}
      />
      <EffectsBoxDopaN
        infoModalKey="dopaN"
        status={dopaN}
        showModalWithData={showModalWithData}
        className={dopaNClass}
        value={dopaNSlider}
        onChange={onDopaNChange}
      />
      <EffectsBoxH2O2
        showModalWithData={showModalWithData}
        infoModalKey="h2O2"
        status={h2O2}
        className={h2O2Class}
        value={h2O2Slider}
        onChange={onH2O2SliderChange}
      />
      <EffectsBoxOxygen
        status={oxygen}
        infoModalKey="oxygen"
        className={oxygenClass}
        showModalWithData={showModalWithData}
        value={oxygenSlider}
        onChange={onOxygenSliderChange}
      />
      <EffectsBoxUP
        onChange={onUPSliderChange}
        infoModalKey="up"
        status={up}
        showModalWithData={showModalWithData}
        className={upClass}
        value={uPSlider}
      />
      <EffectsBoxPTPore
        onChange={onPTPChange}
        infoModalKey="ptp"
        status={ptp}
        showModalWithData={showModalWithData}
        className={ptpClass}
        value={ptpSlider}
      />
      <EffectsBoxFissionFusion
        infoModalKey="fissionFusion"
        name="Fission-Fusion"
        onChange={onFissionFusionChange}
        showModalWithData={showModalWithData}
        status={fissionFusion}
        className={fissionFusionClass}
        value={fissionFusionSlider}
      />
      {showMtIntegrity && (
        <EffectsBox
          showModalWithData={showModalWithData}
          id="mtIntegrity"
          infoModalKey="mtIntegrity"
          name="Mitochondrial Integrity"
          status={mtIntegrity}
          className={mtIntegrityClass}
        />
      )}
    </div>
  );
};

export default SecondCol;
