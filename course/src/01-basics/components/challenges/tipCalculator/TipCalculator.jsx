import { useState } from "react";

import { Title } from "./Title";
import { BillSetter } from "./BillSetter";
import { SatisfySetter } from "./SatisfySetter";
import { Display } from "./Display";
import { Button } from "./Button";

const satisfyData = [
  {
    tipPercentage: 0,
    satisfyStatus: "Dissatisfied",
  },
  {
    tipPercentage: 5,
    satisfyStatus: "It was ok",
  },
  {
    tipPercentage: 10,
    satisfyStatus: "It was GOOD",
  },
  {
    tipPercentage: 20,
    satisfyStatus: "Absolutelly Amazing",
  },
];

export function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  const totalTipPercentage = (tipPercentage + friendTipPercentage) / 2;
  const totalTipValue = (totalTipPercentage * billValue) / 100;
  const totalBillValue = totalTipValue + billValue;

  const resetApp = () => {
    setBillValue("");
    setTipPercentage(0);
    setFriendTipPercentage(0);
  };

  return (
    <>
      <Title>Tip Calculator</Title>
      <BillSetter billValue={billValue} onSetBillValue={setBillValue} />
      <SatisfySetter
        tipPercentage={tipPercentage}
        onSetPercentage={setTipPercentage}
        data={satisfyData}
      />
      <SatisfySetter
        tipPercentage={friendTipPercentage}
        onSetPercentage={setFriendTipPercentage}
        data={satisfyData}
      />
      <Display
        totalBillValue={totalBillValue}
        billValue={billValue}
        totalTipPercentage={totalTipPercentage}
      />
      <Button action={resetApp}>Reset</Button>
    </>
  );
}
