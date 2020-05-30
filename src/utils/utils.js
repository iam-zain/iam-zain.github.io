export const SliderStateClassMap = {
  "-2": "mutate",
  "-1": "low",
  0: "normal",
  1: "high",
  2: "oe",
};

export const Marks4Points = {
  "-2": "Mutate",
  "-1": "Low",
  0: "Normal",
};

export const Marks4PointsOE = {
  "-2": "Mutate",
  "-1": "Low",
  0: "Normal",
  1: "Over Expression",
};

export const MarksROS = {
  0: "Normal",
  1: "25%",
  2: "40%",
  3: "100%",
  4: "110%",
  5: "180%",
  6: "250%",
};

export const MarksRosNoName = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
};

export const MarksATP = {
  "-2": "-60%",
  "-1": "-42%",
  0: "Normal",
};
export const MarksMembraneAlphaSyn = {
  "-1": "Very Low",
  0: "Normal",
  1: "Increased Aggregation",
};

export const MarksCalcium = {
  0: "Normal",
  1: "High intracellular",
};

export const MarksDopaN = {
  "-1": "Decreased",
  0: "Normal",
};

export const MarksDopaNNoName = {
  "-1": "",
  0: "",
};
export const MarksApop = {
  0: "Normal",
  1: "Increased",
};

export const MarksApopNoName = {
  0: "",
  1: "",
};

export const MarksATPNoName = {
  "-2": "",
  "-1": "",
  0: "",
};

export const MarksMembranePot = {
  "-3": "-60%",
  "-2": "-50%",
  "-1": "-45%",
  0: "Normal",
  1: "26%",
};

export const MarksMembranePotNoName = {
  "-3": "",
  "-2": "",
  "-1": "",
  0: "",
  1: "",
};

export const Marks4PointsOxidized = {
  "-2": "Oxidized",
  "-1": "Low",
  0: "Normal",
  1: "High",
};

export const Marks2Points = {
  0: "Absent",
  1: "Present",
};

export const MarksPTP = {
  0: "Normal",
  1: "Pathological",
};

export const MarksC1 = {
  "-6": "-70%",
  "-5": "-63%",
  "-4": "-50%",
  "-3": "-41%",
  "-2": "-36%",
  "-1": "-25%",
  "0": "Normal",
};

export const MarksC1NoName = {
  "-6": "",
  "-5": "",
  "-4": "",
  "-3": "",
  "-2": "",
  "-1": "",
  "0": "",
};

export const INITIAL_STATE = {
  dJ1: 0,
  mPP: 0,
  htrA2: 0,
  trap1: 0,
  uchl1: 0,
  pink1: 0,
  parkin: 0,
  dopamine: 0,

  c1Slider: 0,
  h2O2Slider: 0,
  atpSlider: 0,
  rosSlider: 0,
  apopSlider: 0,
  memPotSlider: 0,
  alphaSynSlider: 0,
  ptpSlider: 0,
  calciumSlider: 0,
  dopaNSlider: 0,
  oxygenSlider: 0,
  uPSlider: 0,
  fissionFusionSlider: 0,

  infoModalKey: null,
  isResetAllDisabled: true,
  parkinsonIndicator: 0,
  isLoading: false,

  dJ1Status: "",
  dopamineStatus: "",
  mppStatus: "",
  htrA2Status: "",
  parkinStatus: "",

  c1: "",
  ptp: "",
  up: "",
  atp: "",
  rOS: "",
  h2O2: "",
  dopaN: "",
  oxygen: "",
  calcium: "",
  alphaSyn: "",
  apoptosis: "",
  mtIntegrity: "",
  fissionFusion: "",
  membranePotential: "",

  c1Class: "",
  upClass: "",
  ptpClass: "",
  atpClass: "",
  rOSClass: "",
  h2O2Class: "",
  dopaNClass: "",
  oxygenClass: "",
  calciumClass: "",
  alphaSynClass: "",
  apoptosisClass: "",
  mtIntegrityClass: "",
  fissionFusionClass: "",
  membranePotentialClass: "",
};

export const FACTOR_WEIGHTAGE_MAP = {
  dJ10: 0,
  dJ11: -2,
  "dJ1-1": 2.5,
  "dJ1-2": 6,
  mPP0: 0,
  mPP1: 6,
  htrA20: 0,
  htrA21: -2.5,
  "htrA2-1": 2.5,
  "htrA2-2": 5,
  trap10: 0,
  trap11: -7.5,
  "trap1-1": 3,
  "trap1-2": 6,
  uchl10: 0,
  uchl11: -2,
  "uchl1-1": 2,
  "uchl1-2": 5.5,
  pink10: 0,
  pink11: -2,
  "pink1-1": 2,
  "pink1-2": 4,
  parkin0: 0,
  parkin1: -5,
  "parkin-1": 3,
  "parkin-2": 6,
  dopamine0: 0,
  dopamine1: 4,
  "dopamine-1": 9,
  "dopamine-2": 10,
};

export const HALF_RESET_STATE = {
  isLoading: false,

  c1Slider: 0,
  h2O2Slider: 0,
  atpSlider: 0,
  rosSlider: 0,
  apopSlider: 0,
  memPotSlider: 0,
  alphaSynSlider: 0,
  ptpSlider: 0,
  calciumSlider: 0,
  dopaNSlider: 0,
  oxygenSlider: 0,
  uPSlider: 0,
  fissionFusionSlider: 0,

  c1: "",
  ptp: "",
  up: "",
  atp: "",
  rOS: "",
  h2O2: "",
  dopaN: "",
  oxygen: "",
  calcium: "",
  alphaSyn: "",
  apoptosis: "",
  mtIntegrity: "",
  fissionFusion: "",
  membranePotential: "",

  c1Class: "",
  upClass: "",
  ptpClass: "",
  atpClass: "",
  rOSClass: "",
  h2O2Class: "",
  dopaNClass: "",
  oxygenClass: "",
  calciumClass: "",
  alphaSynClass: "",
  apoptosisClass: "",
  mtIntegrityClass: "",
  fissionFusionClass: "",
  membranePotentialClass: "",
};

export const MODAL_BODY_TEXT_MAP = {
  dJ1: `*  Its knockout does not cause Loss of Dopaminergic Neuron (one of the hallmarks of PD).

*  Non-motor symptoms are dominant in DJ1 deficient PD.

*  DJ1 in normal expression, blocks C-1 inhibitors like MPP+.

*  It can compensate for the loss of PINK1.

*  When low or mutated, there is a decrease in- 
Complex-1 activity, Membrane potential, ATP, Oxygen consumption.

*  When low or mutated, there is an increase in- 
ROS, Apoptosis, Calcium (intracellular), H2O2, Unfolded protein and alteration in Fission-Fusion`,

  mPP: `*  It hampers C-1 activity.

*  DJ1 in normal expression, blocks C-1 inhibitors like MPP+.

*  It causes loss of Dopaminergic Neurons.

*  It alters normal functioning of PTP opening and Fission-Fusion dynamics.

*  It causes increase in Alpha-synuclein aggregation, ROS, H2O2, apoptosis, oxidation of Dopamine, Calcium (intracellular).

*  It causes decrease in Membrane potential, ATP generation, Oxygen consumption.

*  25% inhibition is sufficient to alter the Complex-1 activity of Synaptic mitochondria.

*  70% inhibition is required for altering Complex-1 activity of Non-Synaptic mitochondria.`,

  htrA2: `*  It can partially substitute for PINK1 loss.

*  PINK1 phosphorylates it, but it can also be phosphorylated in PINK1 absence.

*  Over-expression of TRAP1 compensates for its deficiency.

*  When low or mutated there is a decrease in- 
Dopaminergic Neuron, Complex-1 activity, Membrane potential, ATP generation, Oxygen consumption.

*  When low or mutated, there is an increase in- 
ROS, Alpha-synuclein, H2O2, Apoptosis, Unfolded protein and Fission-Fusion gets altered.`,

  trap1: `*  Its over-expression compensates for PINK1 loss, Parkin loss and HTRA2 deficiency .

*  Parkin compensates for its deficiency.

*  When low or mutated, there is a decrease in- 
Membrane potential, ATP formation, Dopaminergic neurons.

*  When low or mutated, there is an increase in- 
ROS, Apoptosis, H2O2, Alpha-Synuclein, Unfolded protein; alongwith PTP opening and Fission-Fusion alterations.`,

  uchl1: `*  When low or mutated, there is a decrease in- Membrane potential, Dopaminergic Neuron.

*  When low or mutated-there is an increase in- Alpha-synuclein, ROS formation, Apoptosis, Unfolded protein and Fission-Fusion gets altered.`,

  pink1: `*  Over-expression of Parkin, TRAP1, DJ1, HtrA2 compensate for its loss.

  *  It phosphorylates HTRA2, but HTRA2 can also be phosphorylated in its absence.

  *  When low or mutated, there is a decrease in- 
  Complex-1 activity, Membrane potential, ATP, Oxygen consumption, Dopaminergic neuron
  and there is also low phosphorylation of Parkin, TRAP1, HTRA2.

  *  When low or mutated, there is an increase in- 
  ROS, Alpha-synuclein, Apoptosis, Calcium (intracellular), H2O2, Fission and alteration in PTP opening .`,

  parkin: `*  Its over-expression can compensate for PINK1 loss, TRAP1 deficiency.

*  TRAP1 can compensate for the loss of Parkin.

*  Loss of Parkin reversibly impairs C-1 deficiency.

*  Its deficiency does not cause Lewy Body formation (one of the hallmarks of PD).

*  Apart from Parkin, other proteins also present for Ubiquitination.

*  When low or mutated, there is a decrease in- 
Complex-1 activity, Membrane potential, ATP, Dopaminergic neuron, Oxygen consumption.

*  When low or mutated, there is an increase in- 
ROS, Apoptosis, H2O2, Alpha-Synuclein, Unfolded protein and Fission-Fusion is altered.`,

  dopamine: `*  Upon oxidation it alters Parkin, DJ1, UCHL1.

*  When it gets oxidised, then there is a decrease in-
Complex-1 activity, Membrane poptential, ATP formation.

*  When it gets oxidised, then there is an increase in-
Alpha-synuclein, ROS, Calcium, Apoptosis, H2O2 and it also alters PTP opening and Fission-Fusion dynamics.

*  When its level drops down, Alpha-synuclein aggregation increases.`,

  c1: `*  25% decrease in its activity is found in Platelets of PD patient.
*  36% decrease in its activity is found in Substantia Nigra of PD patient.
*  41% decrease in its activity is found in Frontal Cortex, Skeletal Muscle of PD patient.
*  63% decrease in its activity is found in Leucocytes of PD patient.
*  50% decrease in its activity is found in mutated PINK1.
*  63% decrease in its activity is found in mutated Parkin.
*  70% decrease in its activity is found in knockout DJ1.`,

  ptp: `*  Pathological opening of it can lead or can be caused due to:
-Low level of Membrane potential, ATP
-High level of ROS, Calcium (Intracellular), Apoptosis.
`,

  up: `*  It can be increased due to low level of- Parkin, UCHL1, HTRA2
`,

  atp: `*  Mutated DJ1 causes 42% decrease in it.

*  Mutated PINK1 causes 60% decrease in it.

*  Mutated Parkin can cause decrease in it.

*  MPP+ causes decrease in it.

*  When Membrane potential decreases, it also gets decreased.

*  Low level of it can cause pathological opening of PTP.
`,

  rOS: `*  Increase in it can cause or can be seen due to:
-Low levels of- PINK1, Parkin, DJ1, HTRA2, TRAP1
-High levels of- Dopamine, MPP+, Membrane Potential, H2O2 or pathological opening of PTP.

*  Normal TRAP1 level checks ROS production and thereby stops Apoptosis.
`,

  h2O2: `*  It can be increased by 100% upon knockout of DJ1.

*  It can be increased due to Oxidised Dopamine, MPP+.

*  Upon increase it decreases Membrane potential by 17%.

*  Upon increase it increases ROS.
`,

  dopaN: `*  Knockdown of Parkin causes 20% of decrease in it.

*  Low level of HTRA2 causes decrease in it.

*  Mutated UCHL1 causes it to decrease.

*  MPP+ causes 25% decrease in it.
`,

  oxygen: `*  Can be decreased by 60% in mutated PINK1.
`,

  calcium: `*  Increased intracellular level can be caused due to low levels of- PINK1, DJ1; Oxidised Dopamine, High level of MPP+, ROS.

*  Increased intracellular level can cause- Apoptosis, Pathological opening of PTP.
`,

  alphaSyn: `*  Low levels of- Parkin, TRAP1, HTRA2, Dopamine, mutated UCHL1- cause increased aggregation of it.

*  Increased aggregation causes increase in- Calcium(intracellular) which ultimately leads to Apoptosis.

*  Low level of it causes less release of Dopamine, interestingly it makes the cell MPTP (MPP+) resistant.
`,

  apoptosis: `*  It can be increased due to low level of- PINK1, TRAP1, DJ1, HTRA2; High level of MPP+, Intracellular Calcium, or Pathological opening of PTP.

*  Normal level of TRAP1 blocks it.
`,

  mtIntegrity: `*  Decreases upon low level of PINK1.
`,

  fissionFusion: `*  PINK1, Parkin maintains its homeostasis.

*  Low level of PINK1 causes increases in Fission.

*  High Level of PINK1 causes increase in Fusion.

*  Low level of Parkin alters it homeostasis.
`,

  membranePotential: `*  26% increase in it can cause PD.

*  60% decrease is found in PD patient.

*  Knockout DJ1 can cause 44% decrease in it.

*  Mutated TRAP1 can cause 45% decrease in it.

*  Mutated PINK1 can cause 50% decrease in it.

*  When its level decreases, then there is less recruitment of Parkin.

*  MPP+ causes it to decrease.

*  When it becomes low, ATP level decreases, pathological opening of PTP.

*  When it becomes high, ROS increases.
`,
};
